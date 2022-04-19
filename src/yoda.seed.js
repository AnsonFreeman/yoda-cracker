(function (global) {
  if (global.Yoda || global.YodaSeed) return false;
  var doc = document;
  var nav = global.navigator;
  var ua = nav.userAgent.toString();
  var isMobile = /mobile|iPhone|Android|htc|Lenovo|huawei/i.test(ua);
  global.Yoda = {};
  global.YODA_CONFIG = {};
  var ST_DOMAIN = "//verify.inf.st.meituan.com";
  var DEV_DOMAIN = "//verify.inf.dev.meituan.com";
  var TEST_DOMAIN = "//verify.inf.test.meituan.com";
  var PPE_DOMAIN = "//verify.inf.ppe.meituan.com";
  var PRO_DOMAIN = "https://verify.meituan.com";
  var DOMAIN = {
    "pro": PRO_DOMAIN, "staging": ST_DOMAIN,
    "dev": DEV_DOMAIN, "test": TEST_DOMAIN, "ppe": PPE_DOMAIN, "development": ST_DOMAIN
  };
  var PRO_SOURCE = "https://s3plus.meituan.net/static-prod01/com.sankuai.secfe.yoda-files/";
  var yodaInitTime = "";
  var moduleLoaded = "";
  var yodaLoaded = "";
  var yodaNeedLoad = "";
  var moduleNeedLoad = "";
  var MODULE_NAME = "";
  var MODULE_ID = "";
  var MODULE_URL = "";
  var YODA_URL = "";
  var CSS_URL = "";
  var MODULE_VERSION = "";
  var YODA_VERSION = "";

  function YodaSeed(options, env) {
    if (this.seed instanceof YodaSeed) this.seed.init(options, env); else if (this instanceof
      YodaSeed) this.init(options, env); else this.seed = new YodaSeed(options, env);
    return this.seed
  }

  YodaSeed.prototype.init = function (options, env) {
    yodaInitTime = Date.now();
    moduleLoaded = false;
    yodaLoaded = false;
    yodaNeedLoad = true;
    moduleNeedLoad = true;
    MODULE_NAME = "";
    MODULE_ID = "";
    MODULE_URL = "";
    YODA_URL = "";
    CSS_URL = "";
    MODULE_VERSION = "";
    YODA_VERSION = "";
    var yodaWeb = 1;
    var yodaMobile = 3;
    this.env = env || "pro";
    var yodaCAT = new YodaCAT(options.requestCode, this.env);
    global.Yoda.CAT = yodaCAT;
    var seedLX = new YodaLX("yoda_seed", this.env);
    global.Yoda.LX = seedLX;
    this.options = options;
    this.options.env = env;
    this.options.language = this.getLanguage(this.options.yodaLanguage);
    isMobile = options.isMobile === undefined ? isMobile : options.isMobile;
    this.feVersion = "1.5.0";
    this.source = isMobile ? yodaMobile : yodaWeb;
    var requestCode = this.options.requestCode;
    this.getConf(requestCode);
    delete this.options.yodaLanguage
  };
  YodaSeed.prototype.getLanguage = function (lang) {
    if (!!lang && lang !== "zh-CN" && lang !== "ja") return "en";
    if (!lang) return "";
    return lang
  };
  YodaSeed.prototype.getConf =
    function (requestCode) {
      var origin = DOMAIN[this.env] || DOMAIN["pro"];
      var uri = origin + "/v2/ext_api/page_data";
      var query = {
        requestCode: requestCode,
        feVersion: this.feVersion,
        source: this.source,
        layer: origin.indexOf(window.location.hostname) !== -1 ? 1 : 2
      };
      var that = this;
      var st = Date.now();
      var valLab = {custom: {requestCode: requestCode}};
      global.Yoda.LX.report("c_techportal_verify", "b_techportal_pagedata_mv", valLab);
      post(uri, query, function (res) {
        res = JSON.parse(res);
        var now = Date.now() - st;
        var data = {
          "kvs": {
            "pagedata": [now],
            "TTFB": [now]
          },
          "tags": {
            "action": res.data ? res.data.action : "",
            "type": res.data ? res.data.type : "",
            "result": res.status ? res.status : ""
          },
          "ts": Date.now()
        };
        window.Yoda.CAT.metric(data);
        window.Yoda.CAT.postBatch(uri, 0, 0, now, 200 + "|" + res.status, "ajax");
        that.confBack(res)
      }, this.options.language)
    };
  YodaSeed.prototype.confBack = function (res) {
    if (res.status === 1 && res.data) {
      global.Yoda.CAT.setProject(res.data.action || "");
      var combined = extend(res.data, this.options);
      this.config = combined;
      this.config.category = combined.isHideSwitch ?
        "MULTIPLE" : this.config.category;
      if (!this._yoda_config) {
        this._yoda_config = JSON.stringify(this.config);
        this._yoda_options = JSON.stringify(this.options);
        this._yoda_listIndex = res.data.defaultIndex || 0;
        this._yoda_riskLevel = this.config.riskLevel
      }
      var yoda = res.data.yodaVersion;
      var module = res.data.verifyMethodVersion;
      var category = this.config.category;
      if (category && category.toLocaleUpperCase() === "GROUP" && !window.YODA_Bridge) window.sessionStorage.setItem("_yoda_category_", "group");
      this.filterRiskLevel(function () {
        this.checkRiskLevel(MODULE_ID,
          this.config.requestCode, this.config.env, function () {
            this.ensureVersion(yoda, module)
          }.bind(this))
      }.bind(this))
    } else {
      var msg = "\u7aef\u4fe1\u606f\uff1a" + this.source + " \n \u8fd4\u56de\u4fe1\u606f\uff1a" + JSON.stringify(res);
      global.Yoda.CAT.sendLog(DOMAIN[this.env] + "/v2/ext_api/page_data", "ajaxError", "\u8bf7\u6c42\u6570\u636e\u5931\u8d25", msg, "warn");
      this.handleError(res)
    }
  };
  YodaSeed.prototype.ensureVersion = function (yoda, module) {
    yoda = JSON.parse(yoda);
    module = JSON.parse(module);
    if (yoda) YODA_VERSION = isMobile ?
      yoda["i"] : yoda["d"];
    try {
      var riskLevelInfo = JSON.parse(this.config.riskLevelInfo);
      var moduleInfo = riskLevelInfo[Number(MODULE_ID)];
      MODULE_NAME = JSON.parse(moduleInfo).name;
      module = JSON.parse(module[MODULE_NAME]);
      if (module) MODULE_VERSION = isMobile ? module["i"] : module["d"];
      this.isNeedLoad();
      this.getSourcePath();
      this.loadSource()
    } catch (e) {
      var msg = "\u7aef\u4fe1\u606f\uff1a" + this.source + " \n \u89e3\u6790\u5185\u5bb9\uff1a" + this.config.riskLevelInfo + " \n \u9519\u8bef\u4fe1\u606f\uff1a" + e.message;
      global.Yoda.CAT.sendLog(DOMAIN[this.env] +
        "/v2/ext_api/page_data", "ajaxError", "\u89e3\u6790\u6570\u636e\u5931\u8d25", msg, "warn");
      this.handleError("\u9a8c\u8bc1\u4e2d\u5fc3\u521d\u59cb\u5316\u5931\u8d25")
    }
  };
  YodaSeed.prototype.isNeedLoad = function () {
    var scripts = doc.getElementsByTagName("script");
    var len = scripts.length;
    var i = 0;
    if (YODA_VERSION && MODULE_VERSION && len) for (; i < len; i++) {
      var src = scripts[i].src;
      if (~src.indexOf(YODA_VERSION)) {
        yodaNeedLoad = false;
        yodaLoaded = true
      }
      if (~src.indexOf(MODULE_VERSION)) {
        moduleNeedLoad = false;
        moduleLoaded = true
      }
      if (!yodaNeedLoad &&
        !moduleNeedLoad) break
    }
  };
  YodaSeed.prototype.loadSource = function () {
    var that = this;
    var load = function () {
      function _load(tag) {
        return function (url, source, callback) {
          var startTime = Date.now();
          var ele = doc.createElement(tag);
          var head = doc.head;
          var attr = "src";
          var resourceType = tag === "link" ? "css" : "js";
          ele.onload = function () {
            ele.onload = ele.onerror = ele.onreadystatechange = null;
            ele = null;
            var duration = Date.now() - startTime;
            global.Yoda.CAT.postBatch(url, 0, 0, duration, 200 + "|1", resourceType);
            if (typeof callback === "function") callback();
            if (that.env !== "pro") {
              global.YODA_CONFIG.__API_URL__ = DOMAIN[that.env];
              that.setDomain(DOMAIN[that.env])
            }
          };
          ele.onerror = function () {
            that.handleError("\u52a0\u8f7d\u5931\u8d25");
            if (source !== "yoda") {
              var duration = Date.now() - startTime;
              global.Yoda.CAT.postBatch(url, 0, 0, duration, 500 + "|0", resourceType);
              global.Yoda.CAT.sendLog(url, "resourceError", "downloadFailed", "\u4e0b\u8f7djs\u5931\u8d25:" + url, "warn")
            }
          };
          switch (tag) {
            case "script":
              ele.type = "text/javascript";
              ele.async = false;
              ele.defer = true;
              break;
            case "link":
              ele.type =
                "text/css";
              ele.rel = "stylesheet";
              attr = "href"
          }
          ele[attr] = url;
          head.appendChild(ele)
        }
      }

      return {css: _load("link"), js: _load("script")}
    }();
    var valLab = {custom: {requestCode: this.options.requestCode, method: MODULE_NAME}};
    if (yodaNeedLoad) {
      global.Yoda.LX.report("c_techportal_verify", "b_techportal_yoda_req_mc", valLab);
      load.js(YODA_URL, "yoda", function () {
        yodaLoaded = !yodaLoaded;
        that.moduleInit()
      })
    }
    if (moduleNeedLoad) {
      global.Yoda.LX.report("c_techportal_verify", "b_techportal_module_mv", valLab);
      var xhr = new global.XMLHttpRequest;
      if ("withCredentials" in xhr) load.js(MODULE_URL, MODULE_NAME, function () {
        moduleLoaded = true;
        that.moduleInit()
      }); else if (typeof XDomainRequest !== "undefined") var moduleId = window.setInterval(function () {
        if (window.Yoda.Ballade !== undefined) load.js(MODULE_URL, MODULE_NAME, function () {
          moduleLoaded = true;
          that.moduleInit();
          window.clearInterval(moduleId)
        })
      }, 1E3)
    }
    if (!yodaNeedLoad && !moduleNeedLoad) this.moduleInit();
    if (CSS_URL) load.css(CSS_URL)
  };
  YodaSeed.prototype.moduleInit = function () {
    if (moduleLoaded && yodaLoaded) {
      this[MODULE_NAME] =
        {};
      this.config["yodaInitTime"] = yodaInitTime;
      if (typeof global.Yoda[MODULE_NAME] === "function") {
        this[MODULE_NAME].initModule = new global.Yoda[MODULE_NAME](this.config);
        return false
      }
      var moduleScript = doc.createElement("script");
      moduleScript.type = "text/javascript";
      moduleScript.appendChild(doc.createTextNode(this.moduleText));
      doc.body.appendChild(moduleScript);
      this[MODULE_NAME].initModule = new global.Yoda[MODULE_NAME](this.config)
    }
  };
  YodaSeed.prototype.getSourcePath = function () {
    var path = isMobile ? "i" : "d";
    YODA_VERSION =
      YODA_VERSION ? YODA_VERSION + "." : "";
    MODULE_VERSION = MODULE_VERSION ? MODULE_VERSION + "." : "";
    if (this.env === "development") {
      var localPath = path === "i" ? "mobile" : "desktop";
      MODULE_URL = "/modules/" + MODULE_NAME + "/" + localPath + "/" + MODULE_NAME + ".js";
      CSS_URL = "/modules/" + MODULE_NAME + "/" + localPath + "/" + MODULE_NAME + ".css";
      YODA_URL = "./yoda-" + localPath + ".js"
    } else {
      YODA_URL = PRO_SOURCE + path + "/js/yoda." + YODA_VERSION + "js";
      MODULE_URL = PRO_SOURCE + path + "/js/" + MODULE_NAME + "." + MODULE_VERSION + "js"
    }
  };
  YodaSeed.prototype.handleError = function (message,
                                             res) {
    var seed = window.seed || this;
    if (typeof message !== "string") {
      res = message;
      message = res && res.error && res.error.message
    }
    var code = res && res.error && res.error.code || "121333";
    var failCallbackFun = seed.options.failCallbackFun;
    var requestCode = seed.options.requestCode;
    var options = {code: code, msg: message, requestCode: requestCode};
    if (failCallbackFun && typeof global[failCallbackFun] === "function") setTimeout(function () {
      global[failCallbackFun](options)
    }, 1E3);
    var customAction = seed.options.succCallbackKNBFun;
    if (window.KNB &&
      customAction) window.KNB.publish({
      type: "native", action: customAction, data: options, success: function () {
      }, fail: function () {
      }
    });
    var failCallbackUrl = seed.options.failCallbackUrl;
    if (failCallbackUrl) setTimeout(function () {
      var process = document.createElement("a");
      process.href = failCallbackUrl;
      var origin = process.origin || process.protocol + "//" + process.host;
      var path = process.pathname;
      var search = process.search;
      var hash = process.hash;
      process = null;
      var param = "&code=" + code + "&msg=" + message + "&requestCode=" + requestCode;
      if (search) search +=
        "&" + param; else search = "?" + param;
      global.location.href = origin + path + search + hash
    }, 1E3);
    this.notifyErr(message)
  };
  YodaSeed.prototype.notifyErr = function (message) {
    var root = doc.getElementById(this.options.root);
    var errContainer = null;
    var divStyle = "font-size: 16px;position: absolute;width: 78%;top: 18%;left: 50%;line-height: 2em;transform: translateX(-50%); border-radius: 0.5em;background: #000000;opacity: 0.7;color: #FFFFFF;text-align: center;";
    if (isMobile) {
      errContainer = doc.createElement("div");
      var msg = doc.createElement("div");
      msg.textContent = message;
      errContainer.setAttribute("style", divStyle);
      errContainer.appendChild(msg)
    } else {
      errContainer = doc.createElement("div");
      errContainer.textContent = message;
      errContainer.setAttribute("style", divStyle)
    }
    setTimeout(function () {
      if (errContainer) errContainer.style.display = "none"
    }, 3E3);
    root.appendChild(errContainer)
  };
  YodaSeed.prototype.setDomain = function (domain) {
    setTimeout(function () {
      window.YODA_CONFIG.__API_URL__ = domain
    }, 0)
  };
  YodaSeed.prototype.handleSuccess = function (requestCode, responseCode) {
    var seed =
      window.seed || this;
    var succCallbackFun = seed.options.succCallbackFun;
    var options = {requestCode: requestCode, responseCode: responseCode};
    if (succCallbackFun && typeof global[succCallbackFun] === "function") setTimeout(function () {
      global[succCallbackFun](options)
    }, 1E3);
    var customAction = seed.options.succCallbackKNBFun;
    if (window.KNB && customAction) window.KNB.publish({
      type: "native",
      action: customAction,
      data: options,
      success: function () {
      },
      fail: function () {
      }
    });
    var succCallbackUrl = seed.options.succCallbackUrl;
    if (succCallbackUrl) setTimeout(function () {
      var process =
        document.createElement("a");
      process.href = succCallbackUrl;
      var origin = process.origin || process.protocol + "//" + process.host;
      var path = process.pathname;
      var search = process.search;
      var hash = process.hash;
      process = null;
      var param = "&requestCode=" + requestCode + "&responseCode=" + responseCode;
      if (search) search += "&" + param; else search = "?" + param;
      global.location.href = origin + path + search + hash
    }, 1E3)
  };
  YodaSeed.prototype.resetVariable = function (options) {
    yodaInitTime = Date.now();
    moduleLoaded = options.moduleLoaded || false;
    yodaLoaded =
      options.yodaLoaded || false;
    yodaNeedLoad = options.yodaNeedLoad || true;
    moduleNeedLoad = options.moduleNeedLoad || true;
    MODULE_NAME = options.MODULE_NAME || "";
    MODULE_URL = options.MODULE_URL || "";
    YODA_URL = options.YODA_URL || "";
    CSS_URL = options.CSS_URL || "";
    MODULE_VERSION = options.MODULE_VERSION || "";
    YODA_VERSION = options.YODA_VERSION || ""
  };
  YodaSeed.prototype.filterRiskLevel = function (next) {
    var seed = window.seed || this;
    var riskLevel = seed.config.riskLevel;
    var rl = riskLevel.split(/[,|]/g);
    if (rl[0] && rl.length === 1) {
      MODULE_ID = riskLevel;
      next();
      return
    }
    var listIndex = seed.options && seed.options.listIndex && seed.options.listIndex.toString() || false;
    var moduleId = seed.options && seed.options.next || false;
    if (listIndex && moduleId) {
      MODULE_ID = moduleId;
      seed._yoda_listIndex = listIndex;
      next();
      return
    }
    this.isKnbEnv(function (riskLevels, defaultIndex, next) {
      var rls = riskLevels[defaultIndex];
      var item = rls.split(",");
      MODULE_ID = item[0];
      seed._yoda_listIndex = defaultIndex;
      next()
    }, function (riskLevels, defaultIndex, next) {
      var riskLevelInfo = JSON.parse(seed.config.riskLevelInfo);
      var verifyMetohod = JSON.parse(seed.config.verifyMethodVersion);
      for (; defaultIndex < riskLevels.length; defaultIndex++) {
        var riskLevel = riskLevels[defaultIndex];
        var items = riskLevel.split(",");
        var k = 0;
        var flag = 1;
        for (; k < items.length; k++) {
          var module = JSON.parse(riskLevelInfo[Number(items[k])]);
          if (!module.name || !verifyMetohod[module.name]) {
            flag = 0;
            break
          }
        }
        if (flag) {
          MODULE_ID = items[0];
          seed._yoda_listIndex = defaultIndex;
          break
        }
      }
      next()
    }, next)
  };
  YodaSeed.prototype.isKnbEnv = function (knbCallFunc, callFunc, next) {
    var seed = window.seed ||
      this;
    var riskLevels = seed.config.riskLevel.split("|");
    var defaultIndex = seed._yoda_listIndex || 0;
    var knb = window.KNB;
    if (knb && knb.env && (knb.env.isTitans || knb.env.isDPApp)) knbCallFunc(riskLevels, defaultIndex, next); else callFunc(riskLevels, defaultIndex, next)
  };
  YodaSeed.prototype.checkRiskLevel = function (moduleId, requestCode, env, next) {
    var seed = window.seed || this;
    var h5 = [1, 4, 10, 12, 15, 18, 19, 40, 69, 71, 79, 89, 97, 100, 103, 110, 113, 127, 130, 143, 144, 145, 146, 157];
    var native = [87, 106, 108, 109, 111, 122];
    var listIndex = seed._yoda_listIndex;
    var succCallbackKNBFun = seed.options.succCallbackKNBFun;
    var isH5 = h5.indexOf(Number(moduleId)) > -1;
    var isNative = native.indexOf(Number(moduleId)) > -1;
    if (window.YODA_Bridge && !isH5) {
      var options = {};
      if (isNative) options = {
        status: 2,
        requestCode: requestCode,
        listIndex: listIndex,
        next: moduleId
      }; else options = {status: 0, code: "101103", msg: "\u9a8c\u8bc1\u65b9\u5f0f\u4e0d\u652f\u6301"};
      window.YODA_Bridge.publish(JSON.stringify({action: succCallbackKNBFun, data: options}));
      return false
    }
    var knb = window.KNB;
    if (knb && isNative &&
      knb.env && (knb.env.isTitans || knb.env.isDPApp)) {
      var scheme = "yoda";
      var action = "YODA_CALLBACK_ACTION";
      switch (env) {
        case "staging":
          env = 2;
          break;
        case "dev":
          env = 3;
          break;
        case "test":
        case "development":
          env = 5;
          break;
        default:
          env = 1;
          break
      }
      knb.subscribe({
        action: action, handle: function (data) {
          if (data.code === 0) seed.handleSuccess(data.requestCode, data.responseCode); else {
            var msg = JSON.stringify(data);
            window.Yoda.CAT.sendLog("www.meituan.com/verify", "jsError", "KNB.subscribe handle", msg, "warn");
            seed.handleError({
              error: {
                code: data.errorCode,
                message: data.message
              }
            })
          }
        }, success: function () {
        }, fail: function (err) {
          var msg = "\u9519\u8bef\u4fe1\u606f\uff1a" + JSON.stringify(err);
          window.Yoda.CAT.sendLog("www.meituan.com/verify", "jsError", "KNB.subscribe fail", msg, "warn")
        }
      });
      knb.getUA({
        success: function (info) {
          if (info.osName === "ios" && (info.appName === "meituan" || info.appName === "dianping")) scheme = "imeituan";
          if (info.osName === "ios" && info.appName.indexOf("waimai") > 0) scheme = "meituanwaimai";
          var url = scheme + "://www.meituan.com/verify?requestCode=" + requestCode + "&action=" +
            action + "&env=" + env + "&listIndex=" + listIndex + "&next=" + moduleId + "&isFullScreen=1&_knbopeninapp=1&openInApp=1";
          window.Yoda.CAT.postBatch(scheme + "://www.meituan.com/verify", 0, 0, 10, 200 + "|1", "js");
          knb.openPage({
            url: url, success: function () {
              window.Yoda.CAT.sendLog(scheme + "://www.meituan.com/verify", "ajaxError", "h5\u4e0d\u652f\u6301\u7684\u9a8c\u8bc1", url, "warn")
            }, fail: function (err) {
              var msg = "\u9519\u8bef\u4fe1\u606f\uff1a" + JSON.stringify(err);
              window.Yoda.CAT.sendLog(url, "jsError", "KNB.openPage fail", msg, "warn")
            }
          })
        },
        fail: function (err) {
          var msg = "\u9519\u8bef\u4fe1\u606f\uff1a" + JSON.stringify(err);
          window.Yoda.CAT.sendLog("www.meituan.com/verify", "jsError", "KNB.getUA fail", msg, "warn")
        }
      });
      return false
    }
    next()
  };

  function rndSeed() {
    var seed = Math.floor(1 + Math.random() * 65535);
    return seed.toString(16).substring(1)
  }

  function MSID() {
    var seeds = [];
    var time = new Date;
    seeds.push(time.toString(16));
    seeds.push(rndSeed());
    seeds.push(rndSeed());
    seeds.push(rndSeed());
    return seeds.join("-")
  }

  function YodaLX(appnm, env) {
    this.appnm = appnm;
    this.sendQueue = {};
    this.env = env === "pro" ? "pro" : "dev";
    this.msid = MSID();
    this.unionId = Date.now() + Math.ceil(Math.random() * 1E3);
    this.seq = 0;
    this.reqid = (new Date).toString(16) + "-" + Math.floor(Math.random() * 65535) + "-" + Math.floor(Math.random() * 65535)
  }

  YodaLX.prototype.report = function (cid, bid, lab) {
    var conf = {
      appnm: this.appnm,
      channel: "techportal",
      ct: isMobile ? "i" : "www",
      ch: "web",
      sc: window.screen.width + "*" + window.screen.height,
      sdk_env: "online",
      union_id: this.unionId,
      msid: this.msid,
      ua: navigator.userAgent
    };
    var eventBody =
      {
        nm: "MV",
        tm: Date.now(),
        nt: 5,
        isauto: 6,
        val_cid: cid,
        val_bid: bid,
        val_lab: lab,
        req_id: this.reqid,
        seq: this.seq++
      };
    this.addToSendQueue(conf, eventBody)
  };
  YodaLX.prototype.addToSendQueue = function (conf, data) {
    var sendData;
    var queueData = this.sendQueue[conf.channel];
    if (!queueData) {
      sendData = [];
      this.sendQueue[conf.channel] = {conf: conf, data: sendData}
    } else sendData = queueData.data;
    sendData.push(data);
    var that = this;
    setTimeout(function () {
      that.send()
    }, 0)
  };
  YodaLX.prototype.send = function () {
    var sendData = [];
    for (var channel in this.sendQueue) if (this.sendQueue.hasOwnProperty(channel)) {
      var data =
        combinedData(channel, this.sendQueue[channel]);
      if (data) sendData.push(data)
    }
    if (sendData.length > 0) {
      var url = "https://report.meituan.com/?_lxskd_rnd=" + Date.now() + Math.ceil(Math.random() * 1E3);
      this.sendStatic(url, {data: sendData})
    }
    this.sendQueue = {}
  };
  YodaLX.prototype.sendStatic = function (url, opts) {
    if (opts.data.length === 0) return false;
    try {
      var xhr = new global.XMLHttpRequest;
      if ("withCredentials" in xhr) xhr.open("POST", url, true); else if (typeof global.XDomainRequest !== "undefined") {
        xhr = new global.XDomainRequest;
        xhr.open("POST",
          url)
      } else window.Yoda.CAT.sendLog(url, "ajaxError", "[LX\u521b\u5efaXHR\u5bf9\u8c61\u5931\u8d25]", "xhr error", "warn");
      xhr.timeout = 5E3;
      xhr.ontimeout = function () {
        window.Yoda.CAT.sendLog(url, "ajaxError", "[LX\u8bf7\u6c42\u8d85\u65f6]", xhr.status + " | " + xhr.readyState, "warn");
        xhr.abort()
      };
      xhr.onerror = function () {
        window.Yoda.CAT.sendLog(url, "ajaxError", "[LX\u8bf7\u6c42\u9519\u8bef]", xhr.status + " | " + xhr.readyState, "warn");
        xhr.abort()
      };
      xhr.send(JSON.stringify(opts.data))
    } catch (e) {
      window.Yoda.CAT.sendLog(url,
        "ajaxError", "[LX\u8bf7\u6c42\u5f02\u5e38]", e.message, "warn")
    }
    return true
  };

  function YodaCAT(unionId, env) {
    this.batchs = [];
    this.mtsiProject = "com.sankuai.yoda.spiderindefence.mtsi";
    this.project = "Yoda-FE";
    this.catVersion = 1;
    this.origin = window.location.origin;
    this.unionId = unionId || "";
    this.env = env === "pro" ? "pro" : "dev";
    var DOMAIN = {"pro": "//catfront.dianping.com", "dev": "//catfront.51ping.com"};
    this.host = DOMAIN[this.env];
    var self = this;
    setTimeout(function () {
      self.sendBatch()
    }, 500)
  }

  YodaCAT.prototype.setProject = function (action) {
    this.project =
      action === "spiderindefence" ? this.mtsiProject : this.project
  };
  YodaCAT.prototype.postBatch = function (resourceUrl, requestbyte, responsebyte, responsetime, statusCode, resourceType) {
    var rowData = resourceUrl + "\t" + Date.now() + "\t" + requestbyte + "\t" + responsebyte + "\t" + responsetime + "\t" + this.project + "\t" + this.origin + "\t" + statusCode + "\t\t\t\t" + resourceType;
    this.batchs.push(rowData)
  };
  YodaCAT.prototype.sendBatch = function () {
    if (this.batchs.length > 0) {
      var uri = this.host + "/api/batch?v=" + this.catVersion;
      var query = {
        "c": "S\t\t\t\t\t\t" +
          this.unionId + "\n" + this.batchs.join("\n")
      };
      this.sendStatic(uri, query);
      this.batchs = []
    }
  };
  YodaCAT.prototype.speed = function (speed, customspeed) {
    var pageurl = window.location.href;
    var s = "&project=" + this.project + "&pageurl=" + pageurl + "&unionId=" + this.unionId + "&timestamp=" + Date.now() + "&speed=" + speed + "&customspeed=" + customspeed;
    var uri = this.host + "/api/speed?v=" + this.catVersion + s;
    var xhr = new global.XMLHttpRequest;
    xhr.open("GET", uri);
    xhr.timeout = 5E3;
    xhr.ontimeout = function () {
      xhr.abort()
    };
    xhr.onerror = function () {
      xhr.abort()
    };
    xhr.send()
  };
  YodaCAT.prototype.sendLog = function (resourceUrl, category, secCategory, content, level) {
    var sendData = [{
      project: this.project,
      pageUrl: window.location.origin,
      resourceUrl: resourceUrl || "",
      category: category,
      sec_category: secCategory,
      level: level || "error",
      unionId: this.unionId,
      timestamp: Date.now(),
      content: content || ""
    }];
    var uri = this.host + "/api/log?v=" + this.catVersion;
    this.sendStatic(uri, {c: JSON.stringify(sendData)})
  };
  YodaCAT.prototype.metric = function (data) {
    var uri = this.host + "/api/metric?v=" + this.catVersion +
      "&p=" + this.project;
    this.sendStatic(uri, {data: JSON.stringify(data)})
  };
  YodaCAT.prototype.sendStatic = function (uri, options) {
    post(uri, options, function () {
    });
    return true
  };
  YodaCAT.prototype["byte"] = function (str) {
    var byteLen = 0;
    var len = str.length;
    if (str) {
      for (var i = 0; i < len; i++) if (str.charCodeAt(i) > 255) byteLen += 2; else byteLen++;
      return byteLen
    } else return 0
  };
  var xhrCount = 0;

  function post(uri, options, callback, lang) {
    if (options !== null && typeof options === "object") {
      var params = [];
      for (var p in options) params.push(encodeURIComponent(p) +
        "=" + encodeURIComponent(options[p]));
      options = params.join("&")
    }
    var headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    try {
      var onrequestError = function (info) {
        var name = uri.indexOf("//catfront") !== -1 ? "raptor" : "page_data";
        if (xhrCount < 1) {
          var level = name === "raptor" ? "warn" : "error";
          window.Yoda.CAT.sendLog(uri, "ajaxError", name + info, xhr.status + " | " + xhr.readyState + " | " + (Date.now() - st), level, "warn")
        }
        xhrCount++;
        if (uri.indexOf("page_data") !== -1) window.seed.handleError(info)
      };
      var st = Date.now();
      var xhr = new global.XMLHttpRequest;
      if ("withCredentials" in xhr) {
        xhr.open("post", uri, true);
        if (headers) for (var key in headers) if (headers.hasOwnProperty(key)) xhr.setRequestHeader(key, headers[key]);
        if (lang) xhr.setRequestHeader("yoda-language", lang);
        xhr.timeout = 5E3;
        xhr.onload = function () {
          if (xhr.readyState === 4) if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            callback(xhr.responseText);
            xhr = null
          }
        }
      } else if (typeof global.XDomainRequest !== "undefined") {
        xhr = new global.XDomainRequest;
        var param = uri.indexOf("?") >
        0 ? "&" + options : "?" + options;
        if (lang) param += "&yodaLanguage=" + lang;
        xhr.open("get", uri + param);
        xhr.timeout = 5E3;
        xhr.onload = function () {
          callback(xhr.responseText);
          xhr = null
        }
      } else window.Yoda.CAT.sendLog(uri, "ajaxError", "\u79cd\u5b50\u4ee3\u7801\u521b\u5efaXHR\u5931\u8d25", "xhr error");
      xhr.ontimeout = function () {
        onrequestError("\u8bf7\u6c42\u8d85\u65f6");
        xhr.abort()
      };
      xhr.onerror = function () {
        onrequestError("\u8bf7\u6c42\u9519\u8bef");
        xhr.abort()
      };
      xhr.send(options)
    } catch (e) {
      window.Yoda.CAT.postBatch(uri, 0, 0, Date.now() -
        st, 500 + "|0", "ajax");
      window.Yoda.CAT.sendBatch();
      window.Yoda.CAT.sendLog(uri, "ajaxError", "\u79cd\u5b50\u4ee3\u7801\u8bf7\u6c42\u5f02\u5e38", e.message, "warn");
      throw new Error("\u8bf7\u6c42\u670d\u52a1\u5668\u53d1\u751f\u5f02\u5e38: " + e.message);
    }
  }

  function extend(target, source) {
    for (var p in source) if (source.hasOwnProperty(p) && source[p]) target[p] = source[p];
    return target
  }

  function combinedData(channel, queueItem) {
    var conf = queueItem.conf;
    var env = extend(conf, {
      appnm: conf.appnm, category: "data_sdk_" + channel,
      evs: queueItem.data
    });
    return env
  }

  global.YodaSeed = YodaSeed
})(window);