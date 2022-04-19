!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Owl = t() : e.Owl = t()
}(this, function () {
  return function (e) {
    function t(n) {
      if (r[n]) return r[n].exports;
      var o = r[n] = {exports: {}, id: n, loaded: !1};
      return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }

    var r = {};
    return t.m = e, t.c = r, t.p = "", t(0)
  }([function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }(), a = r(1), s = r(8), c = r(25), u = r(30), f = r(33), g = r(34), l = r(36), p = r(37), d = r(12), h = r(38),
      v = r(3), y = r(5), m = r(2), w = r(23), S = r(19), b = r(6).version, E = r(11), T = r(40), M = r(41), x = r(42),
      k = function () {
        function e(t, r) {
          n(this, e);
          var o = new a(t);
          this.errManager = new s(o), this.pageManager = new c(o, this.errManager), this.resManager = new u(o, this.errManager), this.metricManager = new f(o), this.pvManager = new g(o), this.logManager = new l(o), this.cfgManager = o, this.init(), r && r.noFilter || h(this.cfgManager)
        }

        return i(e, [{
          key: "init", value: function () {
            this.cfgManager.setExtension(p.getExt())
          }
        }, {
          key: "config", value: function (e) {
            this.cfgManager.set(e)
          }
        }, {
          key: "debug", value: function () {
            this.cfgManager.set({devMode: !0}), v.setDebug()
          }
        }, {
          key: "addError", value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            t.combo ? this.errManager.push(e, t) : t.combo !== !1 && this.cfgManager.get("error").combo ? this.errManager.push(e, t) : this.errManager.report(e, t)
          }
        }, {
          key: "sendErrors", value: function () {
            this.errManager.report()
          }
        }, {
          key: "addPoint", value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = void 0;
            if (void 0 !== e.duration) t = e; else {
              var r = this.pageManager.getPerformaceTiming(), n = r.perf;
              if (void 0 !== n) {
                var o = e.timeStamp || +new Date;
                t = {position: e.position, duration: o - n.navigationStart}
              }
            }
            t && (this.pageManager.setUserReady(), this.pageManager.push(t))
          }
        }, {
          key: "sendPoints", value: function () {
            this.pageManager.report(!0)
          }
        }, {
          key: "addApi", value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (void 0 !== e.networkCode && "number" != typeof e.networkCode) return v.ignore("网络状态码必须为Number类型", JSON.stringify(e));
            if (void 0 !== e.statusCode && "number" != typeof e.statusCode) return v.ignore("业务状态码必须为Number类型", JSON.stringify(e));
            var t = e.networkCode || 0 === e.networkCode ? e.networkCode : "",
              r = e.statusCode || 0 === e.statusCode ? e.statusCode : "", n = {
                type: "api",
                connectType: e.connectType || "",
                resourceUrl: e.name,
                statusCode: t + "|" + r,
                responsetime: e.responseTime && e.responseTime.toString() || "0"
              };
            e.content && (n.firstCategory = S.AJAX, n.secondCategory = e.secondCategory || e.name, n.logContent = e.content), this.resManager.pushApi(n)
          }
        }, {
          key: "reportApi", value: function () {
            this.addApi.apply(this, arguments)
          }
        }, {
          key: "sendApis", value: function () {
            this.resManager.report()
          }
        }, {
          key: "addLog", value: function () {
            w._log.apply(w, arguments)
          }
        }, {
          key: "createLog", value: function () {
            return new l(this.cfgManager)
          }
        }, {
          key: "resetPv", value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = e.project || this.cfgManager.get("project"), r = this.cfgManager.get("pageUrl"), n = e.pageUrl || r,
              o = {project: t, pageUrl: n, pageId: e.pageId || "owl-" + y()};
            this.cfgManager.set(o), this.pvManager.report(o), w._log("[Navigation]:" + JSON.stringify({
              project: t,
              from: r,
              to: n
            }), "owl", "info", ["navi"])
          }
        }, {
          key: "reportPv", value: function () {
            this.pvManager.report()
          }
        }, {
          key: "updateFilter", value: function (e, t) {
            void 0 === t ? this.cfgManager.removeFilter(e) : this.cfgManager.addFilter(e, t)
          }
        }, {
          key: "wrap", value: function (e, t, r) {
            if ("function" != typeof e) return e;
            try {
              if (e.__owl_wrapped__) return e;
              if (e.__owl_wrapper__) return e.__owl_wrapper__
            } catch (t) {
              return e
            }
            var n = function () {
              try {
                return e.apply(t, arguments)
              } catch (e) {
                O.addError(e, r)
              }
            };
            for (var o in e) e.prototype.hasOwnProperty(o) && (n[o] = e[o]);
            return n.prototype = e.prototype, e.__owl_wrapper__ = n, n.__owl_wrapper__ = !0, n
          }
        }, {
          key: "setDimension", value: function (e) {
            this.cfgManager.setExtension(e)
          }
        }, {
          key: "reportFST", value: function () {
            var e = this.cfgManager.get("page");
            e.sensoryIndex || e.manualReportFST || (this.cfgManager.set({page: {manualReportFST: !0}}), this.pageManager.manualReportFST())
          }
        }, {
          key: "createInstance", value: function (e) {
            var t = null;
            try {
              window.Owl && window.Owl.OWL && e && e.project && ("undefined" == typeof e.devMode && (e.devMode = window.Owl.cfgManager.get("devMode")), t = new window.Owl.OWL(e))
            } catch (e) {
              d.reportSysError(e)
            }
            return t
          }
        }, {
          key: "getResTimingInfo", value: function (e) {
            if (!window.performance || "function" != typeof window.performance.getEntriesByName) return null;
            try {
              if ("string" == typeof e) {
                var t = window.performance.getEntriesByName(e, "resource");
                if (t instanceof Array && t.length && t[0]) {
                  var r = parseInt(Math.round(t[0].duration));
                  return isNaN(r) ? null : {name: e, duration: r}
                }
              } else if (e instanceof Array) {
                for (var n = [], o = 0; o < e.length; o++) if ("string" == typeof e[o]) {
                  var i = this.getResTimingInfo(e[o]);
                  n.push(i ? i : null)
                } else n.push(null);
                return n
              }
            } catch (e) {
              d.reportSysError(e)
            }
            return null
          }
        }, {
          key: "SDKMetrics", value: function (e) {
            try {
              if (!e || !e.project) return;
              var t = this.createInstance({project: e.project, devMode: e.devMode, metric: {combo: !1}});
              if (!t || !t.metricManager) return;
              var r = t.metricManager, n = {project: e.userProject || "", version: e.version || ""};
              "object" === o(e.tags) && (n = m(n, e.tags)), r.setTags(n), r.setExtraData(e.version || "");
              var i = Math.random(), a = m({auto: !0, sample: .01}, e.pv);
              a.auto && i < a.sample && r.setMetric("sdkPV", 1);
              var s = m({auto: !0, sample: .01}, e.resource);
              if (e.url && s.auto && i < s.sample) {
                var c = void 0, u = this.getResTimingInfo(e.url);
                if (u instanceof Array) {
                  for (var f = 0; f < u.length; f++) if (u[f] && "undefined" != typeof u[f].duration) {
                    c = u[f].duration;
                    break
                  }
                } else u && "undefined" != typeof u.duration && (c = u.duration);
                isNaN(c) || r.setMetric("sdkCDNTiming", c)
              }
              r.report()
            } catch (e) {
              d.reportSysError(e)
            }
          }
        }]), e
      }(), O = new k({}, {noFilter: !0});
    O.OWL = k, O.__version__ = b, O.errorModel = E, O.MetricManager = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O.cfgManager;
      return new f(e)
    }, O.start = function (e) {
      if (!(d.checkIsSpider() || window.Owl && window.Owl.isStarted)) {
        this.isStarted = !0, this.cfgManager.set({pageUrl: d.getPageUrl()}), e && (e.resource && e.resource.sample && (e.resource.sample = void 0), this.cfgManager.set(e));
        var t = this.cfgManager.get("project"), n = this.cfgManager.get("logan");
        n && n.enable && w.ready({
          LoganAPI: n.Logan,
          project: t,
          pageUrl: this.cfgManager.get("pageUrl"),
          loganConfig: n.config,
          version: n.version || "2.1.2"
        }), h(this.cfgManager), T(this.pageManager), M(this.errManager), x(this.resManager);
        var o = this.cfgManager.get("autoCatch"), i = e && e.preLoadName || "_Owl_";
        if (window[i]) {
          window[i].isReady = !0;
          var a = window[i], s = a.preTasks, c = a.dataSet;
          s && s.length && (s.forEach(function (e) {
            O[e.api].apply(O, e.data)
          }), window[i].preTasks = []), setTimeout(function () {
            c && c.length && c.forEach(function (e) {
              "jsError" === e.type && o.js ? O.errManager.parseWindowError.apply(O.errManager, e.data) : "resError" === e.type && o.resource ? O.resManager.handleResourceLoadError.apply(O.resManager, e.data) : "resTime" === e.type ? O.resManager.handleResourceTiming.apply(O.resManager, e.data) : "pageTime" === e.type && O.pageManager.parsePageTime.apply(O.pageManager, e.data)
            }), window[i].dataSet = []
          }, 0)
        }
        if (this.cfgManager.get("isSPA") || this.cfgManager.get("onpopstate")) {
          var u = window.onpopstate;
          window.onpopstate = function (e) {
            O.cfgManager.set({pageUrl: d.getPageUrl()});
            var t = O.cfgManager.get("onpopstate");
            try {
              t(e)
            } catch (e) {
              v.ignore(e)
            }
            u && u.apply(window, e)
          }
        }
        this.errManager.checkCache();
        var f = r(45);
        f("owl_sdk", O), o && o.pv && this.reportPv();
        var g = d.getProtocol() || "https:";
        this.SDKMetrics({
          project: "owl",
          userProject: t,
          version: b,
          url: [g + "//www.dpfile.com/app/owl/static/owl_latest.js", g + "//www.dpfile.com/app/owl/static/owl_" + b + ".js"]
        })
      }
    }, !window || window.Owl instanceof k || (window.Owl = O), e.exports = O
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }(), a = r(2), s = r(3), c = r(4), u = r(5), f = r(6).version, g = r(7),
      l = ["region", "operator", "network", "container", "os", "unionId"], p = g + "//catfront.dianping.com",
      d = g + "//catfront.51ping.com", h = function () {
        function e(t) {
          n(this, e), this._config = {
            devMode: !1,
            project: "",
            pageUrl: "",
            webVersion: "",
            autoCatch: {page: !0, ajax: !0, fetch: !1, resource: !0, js: !0, console: !1, pv: !0},
            page: {
              sample: .5,
              auto: !0,
              sensoryIndex: !0,
              getFirstScreenTime90: !1,
              disableSensoryImageIndex: !0,
              interactToStopObserver: !0,
              noCheckOuterMutaCount: !1,
              fstPerfSample: .5,
              fstPerfAnalysis: !1,
              logSlowView: !1,
              delay: 0,
              logFirstScreen: !1,
              ignoreIframe: !0,
              mainResourceNumber: 5,
              timeThreshold: 5
            },
            resource: {
              sample: .1,
              sampleApi: .1,
              combo: !0,
              delay: 1e3,
              catchAbort: !0,
              catchTimeout: !1,
              enableStatusCheck: !1,
              ignoreMTSIForbidRequest: !0
            },
            resourceReg: /(.51ping|.dianping|.dpfile|.meituan|.sankuai|.kuxun|.maoyan|.neixin|.mobike|.dper.com)/,
            enableLogTrace: !1,
            ajax: {invalid: !0, flag: !1, duration: 2e3},
            invalid: {ajax: !0},
            image: {flag: !1, duration: 5e3, fileSize: 100, filter: !1},
            error: {
              sample: 1,
              delay: 1e3,
              combo: !1,
              maxSize: 10240,
              maxNum: 100,
              maxTime: 6e4,
              formatUnhandledRejection: !1
            },
            useSendBeacon: !1,
            disableCache: !1,
            noScriptError: !0,
            metric: {sample: .5, combo: !0, delay: 1500},
            logan: {enable: !1},
            ignoreList: {
              js: ["Illegal invocation"],
              ajax: ["https?://report.meituan.com/", "https?://logan.sankuai.com/"],
              resource: ["https?://hls.dianping.com/", "https?://frep.meituan.net/"]
            },
            disabledFilters: [],
            pageId: "owl-" + u()
          }, this.baseQuery = {v: 1, sdk: f}, this.apiPaths = {
            log: "/api/log",
            error: "/api/log",
            page: "/api/speed",
            resource: "/batch",
            metric: "/api/metric",
            pv: "/api/pv",
            fstInfo: "/raptorapi/fstSpeed",
            fstLog: "/raptorapi/fstLog"
          }, this.userConfig = {}, this.config = {}, this.extensions = {}, this.filters = [], this.url = p, t ? this.set(t) : this.config = this._config
        }

        return i(e, [{
          key: "get", value: function (e) {
            return e ? this.config[e] : this.config
          }
        }, {
          key: "set", value: function (e) {
            for (var t in e) if (e.hasOwnProperty(t)) {
              var r = e[t];
              "devMode" === t && (this.setApiDomain(r), r && s.setDebug()), "webVersion" === t && r && (this.baseQuery.webVersion = r), "ext" === t && this.setExtension(r);
              try {
                "object" !== ("undefined" == typeof r ? "undefined" : o(r)) || r instanceof RegExp || r instanceof Array ? this.userConfig[t] = "resourceReg" !== t ? r : new RegExp(r) : "pageUrl" !== t && (this.userConfig[t] = a(this.userConfig[t], r))
              } catch (e) {
                s.ignore(e)
              }
            }
            this.update()
          }
        }, {
          key: "update", value: function () {
            this.config = this._config;
            for (var e in this.userConfig) {
              var t = this.userConfig[e];
              "object" != ("undefined" == typeof t ? "undefined" : o(t)) || t instanceof RegExp || t instanceof Array ? this.config[e] = t : this.config[e] = a(this.config[e], this.userConfig[e])
            }
          }
        }, {
          key: "setApiDomain", value: function (e) {
            this.url = e ? d : p
          }
        }, {
          key: "getExtension", value: function (e) {
            return e ? this.extensions[e] : this.extensions
          }
        }, {
          key: "setExtension", value: function (e) {
            for (var t in e) if (e.hasOwnProperty(t)) {
              var r = e[t];
              "latlng" === t ? (this.extensions.region = r, this.baseQuery.useLatlng = !0) : l.indexOf(t) > -1 && (this.extensions[t] = r)
            }
          }
        }, {
          key: "addFilter", value: function (e, t) {
            if (e && t instanceof Function && this.config.disabledFilters && this.config.disabledFilters.indexOf(e) === -1) {
              for (var r = -1, n = 0; n < this.filters.length; n++) {
                var o = this.filters[n];
                o.key === e && (r = n, o.fn = t)
              }
              r === -1 && this.filters.push({key: e, fn: t})
            }
          }
        }, {
          key: "removeFilter", value: function (e) {
            for (var t = 0; t < this.filters.length; t++) {
              var r = this.filters[t];
              if (r.key === e) return void this.filters.splice(t, 1)
            }
          }
        }, {
          key: "getApiPath", value: function (e) {
            var t = this.apiPaths[e];
            return c.stringify(this.url + t, this.baseQuery)
          }
        }]), e
      }();
    e.exports = h
  }, function (e, t) {
    "use strict";
    e.exports = function (e, t) {
      var r = {};
      if (e) for (var n in e) r[n] = e[n];
      if (t) for (var o in t) t.hasOwnProperty(o) && void 0 !== t[o] && (r[o] = t[o]);
      return r
    }
  }, function (e, t) {
    "use strict";
    e.exports = {
      devMode: !1, setDebug: function () {
        this.devMode = !0
      }, ignore: function () {
        window.Owl && window.Owl.debugLog && (window.console.log("【OWL日志:】"), window.console.log && window.console.log.apply(window.console, arguments))
      }, log: function () {
        this.devMode && console.log.apply(console, arguments)
      }, logScreen: function () {
        window.Owl && window.Owl.cfgManager.get("page").logFirstScreen && console.log.apply(console, arguments)
      }
    }
  }, function (e, t) {
    "use strict";
    e.exports = {
      stringify: function (e, t) {
        if (!t) return e;
        var r = [];
        for (var n in t) t.hasOwnProperty(n) && r.push(n + "=" + t[n]);
        return ~e.indexOf("?") ? e + "&" + r.join("&") : e + "?" + r.join("&")
      }, replaceParam: function (e, t, r) {
        if (!e || !t) return e;
        try {
          var n = new RegExp("(&" + t + "=)([^\\?&]+)(&?)");
          if (n.test(e)) e = r ? e.replace(n, "$1" + r + "$3") : e.replace(n, "$3"); else if (r) {
            var o = {};
            o[t] = r, e = this.stringify(e, o)
          }
        } catch (e) {
        }
        return e
      }
    }
  }, function (e, t) {
    "use strict";

    function r() {
      return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }

    function n() {
      return r() + r() + "-" + r() + "-" + r() + "-" + r() + "-" + r() + "-" + Date.now()
    }

    e.exports = n
  }, function (e, t) {
    "use strict";
    t.version = "1.9.5"
  }, function (e, t) {
    "use strict";
    var r = window.location.protocol ? window.location.protocol : "http:";
    r = new RegExp("http").test(r) ? r : "http:", e.exports = r
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }(), a = r(9), s = r(2), c = r(11), u = r(21), f = r(19), g = r(20), l = r(3), p = r(10), d = r(4), h = r(23),
      v = r(6).version, y = "error", m = function (e) {
        return "c=" + encodeURIComponent(JSON.stringify(e))
      }, w = function (e) {
        if (e && e.data) return a({
          url: e.url,
          type: "POST",
          header: {"Content-Type": "application/x-www-form-urlencoded"},
          data: m(e.data),
          success: e.success,
          fail: e.fail,
          xhrRewritten: e.xhrRewritten
        })
      }, S = function () {
        function e(t) {
          n(this, e), this.cfgManager = t, this.cache = [], this.cacheSending = {}, this.comboTimeout = 0, this.timeLimit = Date.now(), this.errorCount = 0, this.isTimeLimit = !1, this.detectLeave()
        }

        return i(e, [{
          key: "parseWindowError", value: function (e, t, r, n, o) {
            try {
              o && o.stack ? (o = this._processError(o), "Invalid_Error" !== o.sec_category && (o.rowNum = o.rowNum || r, o.colNum = o.colNum || n, o.resourceUrl = o.resourceUrl || t), this._push(o)) : "string" == typeof e && this._push({
                category: f.SCRIPT,
                sec_category: e,
                resourceUrl: t,
                rowNum: r,
                colNum: n
              })
            } catch (e) {
              this.reportSystemError(e)
            }
          }
        }, {
          key: "parsePromiseUnhandled", value: function (e) {
            if (e && "unhandledrejection" === e.type) try {
              var t = e.reason;
              if (t) {
                var r = "unhandledrejection", n = "";
                if (t instanceof Error) {
                  var o = t.message || t.name || "";
                  o && this.cfgManager.get(y).formatUnhandledRejection && (r = "[unhandledrejection] " + o), n = t.stack || t.toString() || ""
                } else n = t;
                this._push({category: f.SCRIPT, sec_category: r, content: n})
              }
            } catch (e) {
              this.reportSystemError(e)
            }
          }
        }, {
          key: "parseConsoleError", value: function () {
            try {
              var e = Array.prototype.slice.call(arguments);
              if (!e || !e.length) return;
              for (var t = [], r = 0; r < e.length; r++) {
                var n = e[r];
                if (n) {
                  var o = "";
                  o = "string" == typeof n ? n : n instanceof window.Error ? n.stack || n.message || "" : n instanceof window.ErrorEvent ? n.error && (n.error.stack || n.error.message) || n.message || "" : JSON.stringify(n), t.push(o)
                }
              }
              t && t.length && this._push({category: f.SCRIPT, sec_category: "consoleError", content: t.join(" ")})
            } catch (e) {
              this.reportSystemError(e)
            }
          }
        }, {
          key: "detectLeave", value: function () {
            var e = this;
            try {
              var t = window.onbeforeunload;
              window.onbeforeunload = function () {
                var r = e.cfgManager.get("disableCache") || window.Owl && window.Owl.cfgManager.get("disableCache"),
                  n = e.cfgManager.get("useSendBeacon") && window.navigator && window.navigator.sendBeacon;
                if (!r || n) {
                  var o = e.addCacheExtension(), i = e.cacheSending;
                  if (i && Object.keys(i).length) for (var a in i) try {
                    if (i.hasOwnProperty(a) && i[a]) {
                      var s = i[a], c = s.xhr, f = s.cache;
                      c.abort(), f instanceof Array && f.length && (o = o.concat(f))
                    }
                  } catch (e) {
                    l.ignore(e)
                  }
                  if (o && o.length) if (n) {
                    var g = d.stringify(e.cfgManager.getApiPath(y), {pageId: e.cfgManager.get("pageId"), beacon: 1});
                    window.navigator.sendBeacon(g, m(o))
                  } else r || u.add(o, e.cfgManager.get("webVersion"))
                }
                t && t.call()
              }
            } catch (e) {
              l.ignore(e)
            }
          }
        }, {
          key: "checkCache", value: function () {
            var e = this;
            setTimeout(function () {
              var t = u.get();
              if (u.clearAll(), "object" === ("undefined" == typeof t ? "undefined" : o(t)) && Object.keys(t).length) {
                var r = e.cfgManager, n = r.get("webVersion") || "", i = r.getApiPath(y);
                for (var a in t) try {
                  var s = t[a];
                  if (s instanceof Array && s.length) {
                    var c = "no-version" === a ? "" : a, f = c !== n ? d.replaceParam(i, "webVersion", c) : i;
                    w({url: f, data: s, xhrRewritten: !!r.get("autoCatch").ajax})
                  }
                } catch (t) {
                  e.reportSystemError(t)
                }
              }
            }, 4e3)
          }
        }, {
          key: "reportSystemError", value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (e) try {
              this.cache.push(new c({
                project: "owl",
                pageUrl: "version_" + v,
                category: t.category || f.SCRIPT,
                level: t.level || g.ERROR,
                realUrl: p.getHref(),
                sec_category: e.message || e.name || "parseError",
                content: e.stack ? JSON.stringify(e.stack) : e.toString && e.toString() || ""
              })), this.send(!0)
            } catch (e) {
            }
          }
        }, {
          key: "reportSystemWarn", value: function (e, t) {
            e && (t = t || {}, t.level = g.WARN, this.reportSystemError(e, t))
          }
        }, {
          key: "_processError", value: function (e) {
            var t = function (e) {
              var t = e.message || e.name || "Invalid_Error", r = e instanceof Error ? e.toString() : JSON.stringify(e);
              return {category: f.SCRIPT, sec_category: t, content: r}
            }, r = function (e) {
              if (e.stack) {
                var r = e.stack.match("https?://[^\n]+");
                r = r ? r[0] : "";
                var n = /https?:\/\/(\S)+\.js/, o = n.test(r) ? r.match(n)[0] : "", i = r.match(":(\\d+):(\\d+)");
                return i || (i = [0, 0, 0]), {
                  category: f.SCRIPT,
                  sec_category: e.message || e.name || "",
                  content: e.stack,
                  resourceUrl: o,
                  rowNum: i[1],
                  colNum: i[2]
                }
              }
              return t(e)
            };
            try {
              return r(e)
            } catch (r) {
              return this.reportSystemError(r), t(e)
            }
          }
        }, {
          key: "_push", value: function (e, t) {
            e = this.parse(e), this.push(new c(e), t)
          }
        }, {
          key: "_pushResource", value: function () {
            Math.random() > this.cfgManager.get("resource").sample || this._push.apply(this, arguments)
          }
        }, {
          key: "parse", value: function (e) {
            return e.project || (e.project = this.cfgManager.get("project")), e.pageUrl || (e.pageUrl = this.cfgManager.get("pageUrl") || "default"), e.unionId || (e.unionId = this.cfgManager.getExtension("unionId")), e.realUrl = p.getHref(), e
          }
        }, {
          key: "push", value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = this.cfgManager,
              n = r.get(y);
            if (e && !(Math.random() > n.sample) && (e instanceof c || (e instanceof Error ? e = this._processError(e) : "string" == typeof e ? e = {sec_category: e} : "object" === ("undefined" == typeof e ? "undefined" : o(e)) && (e = {
              sec_category: e.name || "",
              content: e.msg || ""
            }), e = this.parse(e), e = new c(e)), !(e.content && e.content.length >= n.maxSize))) {
              e.update(t);
              try {
                var i = [], a = JSON.stringify(e.toLoganJson(), function (e, t) {
                  if ("object" === ("undefined" == typeof t ? "undefined" : o(t)) && null !== t) {
                    if (i.indexOf(t) >= 0) return;
                    i.push(t)
                  }
                  return t
                });
                h._log("[Error]:" + a, "owl", e.level, [e.category])
              } catch (e) {
                this.reportSystemError(e)
              }
              var s = !0;
              if (r.get("noScriptError") && 0 === e.sec_category.indexOf("Script error")) return s = !1;
              var u = r.filters;
              if (u && u.length) for (var f = 0; f < u.length; f++) {
                var g = u[f];
                if (!g.fn(e)) return s = !1
              }
              var l = r.get("ignoreList").js;
              if (l && l.length) for (var p = 0; p < l.length; p++) if (0 === e.sec_category.indexOf(l[p])) {
                s = !1;
                break
              }
              if (s) {
                try {
                  if (window && window.dispatchEvent && e && e.getEventInfo) {
                    var d = e.getEventInfo({pageId: r.get("pageId") || ""}), v = void 0;
                    if ("function" == typeof window.CustomEvent) v = new CustomEvent("owlErrDetected", {detail: d}); else if (document && "function" == typeof document.createEvent) {
                      var m = document.createEvent("CustomEvent");
                      "function" == typeof m.initCustomEvent && (v = m.initCustomEvent("owlErrDetected", !1, !1, d))
                    }
                    v && window.dispatchEvent(v)
                  }
                } catch (e) {
                  this.reportSystemError(e)
                }
                this.isExist(e) || (e = this._handleError(e), e && (this.cache.push(e), this.send()))
              }
            }
          }
        }, {
          key: "isExist", value: function (e) {
            for (var t = 0; t < this.cache.length; t++) {
              var r = this.cache[t];
              if (r instanceof c || (r = new c(r)), r.isEqual(e)) return !0
            }
            return !1
          }
        }, {
          key: "_handleError", value: function (e) {
            try {
              var t = this.cfgManager.get("onErrorPush");
              if (t instanceof Function && (e = t(e)), e instanceof c || void 0 === e) return e;
              l.ignore("onErrorPush 方法的返回值仅能为ErrorModel实例或undefined")
            } catch (t) {
              return l.ignore("onErrorPush 方法处理有误", t), e
            }
          }
        }, {
          key: "report", value: function () {
            this.push.apply(this, arguments), this.send(!0)
          }
        }, {
          key: "send", value: function (e) {
            var t = this, r = this.cfgManager, n = r.get(y), o = this.comboTimeout, i = n.maxNum || 100,
              a = n.maxTime || 6e4, s = Date.now() - this.timeLimit;
            this.isTimeLimit || (this.timeLimit = Date.now()), this.isTimeLimit = !0;
            var c = function () {
              if (t.cache.length) {
                clearTimeout(o), o = 0;
                try {
                  if (t.errorCount += t.cache.length, s <= a) {
                    if (t.errorCount >= i) return
                  } else t.isTimeLimit = !1, t.errorCount = 0
                } catch (e) {
                  l.ignore(e)
                }
                var e = t.addCacheExtension(), n = +new Date, c = w({
                  url: r.getApiPath(y) + ("&pageId=" + r.get("pageId")), data: e, success: function () {
                    t.cacheSending[n] = void 0
                  }, fail: function () {
                    try {
                      if (!(r.get("disableCache") || window.Owl && window.Owl.cfgManager.get("disableCache"))) {
                        var e = t.cacheSending[n];
                        e && e.cache && e.cache.length && u.add(e.cache, r.get("webVersion"))
                      }
                      t.cacheSending[n] = void 0
                    } catch (e) {
                      t.cacheSending[n] = void 0, l.ignore(e)
                    }
                  }, xhrRewritten: !!r.get("autoCatch").ajax
                });
                t.cacheSending[n] = {xhr: c, cache: e}, t.cache = []
              }
            }, f = n.delay;
            e ? c() : o || f === -1 || (o = setTimeout(c, f))
          }
        }, {
          key: "addCacheExtension", value: function () {
            var e = this.cache, t = [];
            if (!e || !e.length) return t;
            for (var r = this.cfgManager.getExtension(), n = 0; n < e.length; n++) {
              var i = e[n];
              r && "object" === ("undefined" == typeof r ? "undefined" : o(r)) && (i = s(i.toJson(), r)), t.push(i)
            }
            return t
          }
        }]), e
      }();
    e.exports = S
  }, function (e, t, r) {
    "use strict";
    var n = r(10), o = function () {
    };
    e.exports = function (e) {
      if (e) {
        var t = n.getUserAgent(), r = n.getAppName(),
          i = r.indexOf("Microsoft Internet Explorer") !== -1 && (t.indexOf("MSIE 8.0") !== -1 || t.indexOf("MSIE 9.0") !== -1),
          a = i && window.XDomainRequest, s = void 0;
        s = a ? new XDomainRequest : new XMLHttpRequest, s.open(e.type || "GET", e.url, !0), s.success = e.success || o, s.fail = e.fail || o;
        var c = function (t) {
          t && /catfront.(dianping|51ping).com/.test(e.url) && (200 === t.currentTarget.status ? s.success && s.success() : s.fail && s.fail())
        };
        if (e.xhrRewritten === !1 && !a) if ("addEventListener" in s) s.addEventListener("load", c), s.addEventListener("error", c), s.addEventListener("abort", c); else {
          var u = s.onreadystatechange;
          s.onreadystatechange = function (e) {
            4 === this.readyState && c(e), u && u.apply(this, arguments)
          }
        }
        if ("POST" === e.type) {
          if (e.header && !a) for (var f in e.header) e.header.hasOwnProperty(f) && s.setRequestHeader(f, e.header[f]);
          s.send(e.data)
        } else s.send();
        return s
      }
    }
  }, function (e, t) {
    "use strict";
    e.exports = {
      getOrigin: function () {
        var e = "";
        try {
          e = location.origin ? location.origin : location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "")
        } catch (t) {
          e = ""
        }
        return e
      }, getProtocol: function () {
        return window.location.protocol
      }, getHref: function () {
        return window.location.href
      }, getUserAgent: function () {
        return window.navigator && window.navigator.userAgent || ""
      }, getAppName: function () {
        return window.navigator.appName
      }
    }
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var o = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }(), i = r(12), a = r(2), s = r(19), c = r(20),
      u = ["project", "pageUrl", "realUrl", "resourceUrl", "category", "sec_category", "level", "unionId", "timestamp", "content"],
      f = ["rowNum", "colNum", "tags"].concat(u),
      g = ["project", "pageUrl", "category", "sec_category", "level", "unionId"], l = function () {
        function e(t) {
          if (n(this, e), t) {
            for (var r in t) t.hasOwnProperty(r) && (this[r] = t[r]);
            this.parse(t)
          }
        }

        return o(e, [{
          key: "parse", value: function () {
            this.category = this.category || s.SCRIPT, this.level = this.level || c.ERROR, this.timestamp = this.timestamp || +new Date, this.sec_category = this.sec_category || "default"
          }
        }, {
          key: "isEqual", value: function (e) {
            return this.sec_category === e.sec_category && this.resourceUrl === e.resourceUrl && this.colNum === e.colNum && this.rowNum === e.rowNum && this.content === e.content
          }
        }, {
          key: "update", value: function (e) {
            for (var t in e) void 0 !== e[t] && f.indexOf(t) !== -1 && (this[t] = e[t]);
            return this
          }
        }, {
          key: "updateTags", value: function (e) {
            return this.tags = a(this.tags || {}, e), this
          }
        }, {
          key: "toJson", value: function () {
            var e = this, t = {};
            u.map(function (r) {
              void 0 !== e[r] && (t[r] = e[r])
            });
            var r = this.rowNum, n = this.colNum;
            return t.category === s.SCRIPT && r && n && (t.dynamicMetric = {
              rowNum: r,
              colNum: n
            }), this.tags && (t.dynamicMetric = a(t.dynamicMetric || {}, this.tags)), t
          }
        }, {
          key: "toLoganJson", value: function () {
            var e = this, t = {};
            f.map(function (r) {
              void 0 !== e[r] && (t[r] = e[r])
            });
            try {
              var r = t.content || "";
              "string" != typeof r && (r = JSON.stringify(r)), t.content = r.substr && r.substr(0, 200) || ""
            } catch (e) {
              t.content = "", i.reportSysError(e)
            }
            return t
          }
        }, {
          key: "getEventInfo", value: function () {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = {};
            g.map(function (t) {
              void 0 !== e[t] && (r[t] = e[t])
            });
            for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
            return r
          }
        }]), e
      }();
    l.LEVEL = c, l.CATEGORY = s, e.exports = l
  }, function (e, t, r) {
    "use strict";
    var n = ["baiduspider", "googlebot", "bingbot", "yammybot", "360spider", "haosouspider", "youdaobot", "sogou news spider", "yisouspider", "mtdp-infosec", "mtdp-searchspider", "yandexbot", "yandexmobilebot"],
      o = r(13), i = r(14), a = i && i.__esModule ? i : {default: i};
    e.exports = {
      getHref: function () {
        return location && location.href || ""
      }, getProtocol: function () {
        return location && location.protocol || ""
      }, getOrigin: function () {
        try {
          if (!location.origin) {
            var e = this.getProtocol(), t = location.hostname || "", r = location.port ? ":" + location.port : "";
            return e + "//" + t + r
          }
          return location.origin
        } catch (e) {
          this.reportSysError(e)
        }
        return ""
      }, getConnectionType: function () {
        var e = window.navigator && window.navigator.connection;
        return e ? e.effectiveType || e.type || "" : ""
      }, getPageUrl: function () {
        var e = this.getOrigin();
        return e + (location.pathname || "")
      }, reportSysError: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = window.Owl && window.Owl.errManager;
        r && "function" == typeof r.reportSystemError && r.reportSystemError(e, t)
      }, reportSysWarn: function (e, t) {
        t = t || {}, t.level = "warn", this.reportSysError(e, t)
      }, getUserAgent: function () {
        return window.navigator && window.navigator.userAgent || ""
      }, checkIsSpider: function () {
        try {
          for (var e = this.getUserAgent().toLowerCase(), t = 0; t < n.length; t++) if (e.indexOf(n[t]) > -1) return !0
        } catch (e) {
          this.reportSysError(e)
        }
        return !1
      }, getFullUrl: function (e) {
        return 0 === e.indexOf("//") ? e = this.getProtocol() + e : 0 === e.indexOf("/") && (e = this.getOrigin() + e), e
      }, checkSameOrigin: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return t = t || this.getOrigin(), !(!e || !t) && (e = this.getFullUrl(e), 0 === e.indexOf(t))
      }, traceid: function () {
        try {
          var e = a.default.v1().replace(/-/g, ""), t = e.slice(0, 16), r = e.slice(16),
            n = Array(16).fill(0).map(function (e, n) {
              return parseInt(t[15 - n], 16) ^ parseInt(r[15 - n], 16)
            }).map(function (e) {
              return e.toString(16)
            }).join("");
          return (0, o.signedHexToDec)(n)
        } catch (e) {
          return this.reportSysError(e), ""
        }
      }, getXPath: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
        try {
          var r = e.id ? "#" + e.id : "",
            n = "string" == typeof e.className && e.className ? "." + e.className.split(" ").join(".") : "",
            o = "string" == typeof e.nodeName ? e.nodeName.toLowerCase() : "", i = o + r + n;
          return e.parentNode && e.parentNode.nodeName && t - 1 > 0 ? this.getXPath(e.parentNode, t - 1) + " > " + i : i
        } catch (e) {
          return ""
        }
      }
    }
  }, function (e, t, r) {
    var n, o;
    !function () {
      function r(e) {
        for (; "0" === e[0] && e.length > 1;) e = e.slice(1);
        return e
      }

      function i(e, t) {
        for (; e.length < t;) e = "0" + e;
        return e
      }

      function a(e, t) {
        if (!e) return 0;
        var r = parseInt(e, t);
        if (isNaN(r)) throw new Error("parse char '" + e + "' to number(" + t + ") failed");
        return r
      }

      function s(e, t, r) {
        if (e.length > t.length) return 1;
        if (e.length < t.length) return -1;
        for (var n = 0; n < e.length;) {
          var o = a(e[n], r), i = a(t[n], r);
          if (o > i) return 1;
          if (o < i) return -1;
          n++
        }
        return 0
      }

      function c(e, t, r) {
        for (var n, o, i = "", s = e.length, c = t.length, u = 0, f = 0; f < s || f < c;) f++, n = a(e[s - f], r) + a(t[c - f], r) + u, u = Math.floor(n / r), o = n % r, i = o.toString(r) + i;
        for (; u > 0;) o = u % r, i = o.toString(r) + i, u = Math.floor(u / r);
        return i
      }

      function u(e, t, n) {
        if (s(e, t, n) < 0) return u(t, e, n);
        for (var o, i = "", c = e.length, f = t.length, g = 0, l = 0; l < c;) l++, o = a(e[c - l], n) - a(t[f - l], n) + g, o < 0 && (g = -1, o += n), i = o.toString(n) + i;
        return r(i)
      }

      function f(e, t, r) {
        for (var n, o, i = "", s = 0, c = e.length; --c >= 0;) n = a(e[c], r) * t + s, s = Math.floor(n / r), o = n % r, i = o.toString(r) + i;
        for (; s > 0;) o = s % r, i = o.toString(r) + i, s = Math.floor(s / r);
        return i
      }

      function g(e, t, n, o) {
        e = r(e), t = t || 10, n = n || 16;
        for (var s, u = "0", g = "1", l = 0; l++ < e.length;) s = f(g, a(e[e.length - l], t), n), u = c(u, s, n), g = f(g, t, n);
        return o ? i(u, o) : u
      }

      g.signedHexToDec = function (e) {
        var t = e.length > 15 && a(e[0], 16) >= 8, r = g(t ? u("10000000000000000", e, 16) : e, 16, 10);
        return t ? "-" + r : r
      }, g.signedDecToHex = function (e, t) {
        var r = "-" === e[0], n = g(r ? e.slice(1) : e, 10, 16, t);
        return r ? u("10000000000000000", n, 16) : n
      }, "undefined" != typeof e && e.exports ? e.exports = g : (n = [], o = function () {
        return g
      }.apply(t, n), !(void 0 !== o && (e.exports = o)))
    }()
  }, function (e, t, r) {
    var n = r(15), o = r(18), i = o;
    i.v1 = n, i.v4 = o, e.exports = i
  }, function (e, t, r) {
    function n(e, t, r) {
      var n = t && r || 0, f = t || [];
      e = e || {};
      var g = e.node || o, l = void 0 !== e.clockseq ? e.clockseq : i;
      if (null == g || null == l) {
        var p = a();
        null == g && (g = o = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]), null == l && (l = i = 16383 & (p[6] << 8 | p[7]))
      }
      var d = void 0 !== e.msecs ? e.msecs : (new Date).getTime(), h = void 0 !== e.nsecs ? e.nsecs : u + 1,
        v = d - c + (h - u) / 1e4;
      if (v < 0 && void 0 === e.clockseq && (l = l + 1 & 16383), (v < 0 || d > c) && void 0 === e.nsecs && (h = 0), h >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      c = d, u = h, i = l, d += 122192928e5;
      var y = (1e4 * (268435455 & d) + h) % 4294967296;
      f[n++] = y >>> 24 & 255, f[n++] = y >>> 16 & 255, f[n++] = y >>> 8 & 255, f[n++] = 255 & y;
      var m = d / 4294967296 * 1e4 & 268435455;
      f[n++] = m >>> 8 & 255, f[n++] = 255 & m, f[n++] = m >>> 24 & 15 | 16, f[n++] = m >>> 16 & 255, f[n++] = l >>> 8 | 128, f[n++] = 255 & l;
      for (var w = 0; w < 6; ++w) f[n + w] = g[w];
      return t ? t : s(f)
    }

    var o, i, a = r(16), s = r(17), c = 0, u = 0;
    e.exports = n
  }, function (e, t) {
    var r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (r) {
      var n = new Uint8Array(16);
      e.exports = function () {
        return r(n), n
      }
    } else {
      var o = new Array(16);
      e.exports = function () {
        for (var e, t = 0; t < 16; t++) 0 === (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
        return o
      }
    }
  }, function (e, t) {
    function r(e, t) {
      var r = t || 0, o = n;
      return [o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]]].join("")
    }

    for (var n = [], o = 0; o < 256; ++o) n[o] = (o + 256).toString(16).substr(1);
    e.exports = r
  }, function (e, t, r) {
    function n(e, t, r) {
      var n = t && r || 0;
      "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null), e = e || {};
      var a = e.random || (e.rng || o)();
      if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t) for (var s = 0; s < 16; ++s) t[n + s] = a[s];
      return t || i(a)
    }

    var o = r(16), i = r(17);
    e.exports = n
  }, function (e, t) {
    "use strict";
    e.exports = {SCRIPT: "jsError", AJAX: "ajaxError", RESOURCE: "resourceError"}
  }, function (e, t) {
    "use strict";
    e.exports = {ERROR: "error", INFO: "info", WARN: "warn", DEBUG: "debug"}
  }, function (e, t, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, o = r(22), i = r(3), a = "owl_cache", s = "owl_cache_v2";
    e.exports = {
      isSupport: o(), get: function () {
        if (this.isSupport) {
          var e = {};
          try {
            var t = localStorage.getItem(s);
            if (t) {
              var r = JSON.parse(t);
              "object" === ("undefined" == typeof r ? "undefined" : n(r)) && Object.keys(r).length && (e = r)
            }
          } catch (e) {
            this.clear(s), i.ignore(e)
          }
          try {
            var o = localStorage.getItem(a);
            if (o) {
              var c = JSON.parse(o);
              c instanceof Array && (e["no-version"] = c.concat(e["no-version"] || []))
            }
          } catch (e) {
            this.clear(a), i.ignore(e)
          }
          return e
        }
      }, add: function (e, t) {
        if (this.isSupport) try {
          if (e instanceof Array) {
            t = t || "no-version";
            var r = this.get();
            r[t] instanceof Array ? r[t] = e.concat(r[t]) : r[t] = e, localStorage.setItem(s, JSON.stringify(r))
          }
        } catch (e) {
          i.ignore(e)
        }
      }, clear: function (e) {
        if (this.isSupport) try {
          e = e || a, localStorage.removeItem(e)
        } catch (e) {
          i.ignore(e)
        }
      }, clearAll: function () {
        if (this.isSupport) try {
          localStorage.removeItem(a), localStorage.removeItem(s)
        } catch (e) {
        }
      }, clearItem: function (e) {
        if (this.isSupport) try {
          var t = this.get();
          "object" === ("undefined" == typeof t ? "undefined" : n(t)) && t.hasOwnProperty(e) && (delete t[e], Object.keys(t).length ? localStorage.setItem(s, JSON.stringify(t)) : localStorage.removeItem(s), "no-version" === e && localStorage.removeItem(a))
        } catch (e) {
          i.ignore(e)
        }
      }
    }
  }, function (e, t) {
    "use strict";
    e.exports = function () {
      var e = "owl_local_test";
      try {
        localStorage.setItem(e, 1), localStorage.removeItem(e)
      } catch (e) {
        return !1
      }
      return !0
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(24).loadScript, o = "//www.dpfile.com/app/dp-logan-web/logan_",
      i = "//s3.meituan.net/v1/mss_eb9ea9cfff9840198c3ae909b17b4270/production/logan-websdk/logan_", a = void 0, s = !1;
    e.exports = {
      queue: [], ready: function () {
        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.LoganAPI,
          c = t.project, u = t.pageUrl, f = t.loganConfig, g = t.version;
        s = !0;
        var l = function () {
          if (a) for (f && (a = a.config(f)), a.log("[Session]:" + JSON.stringify({
            project: c,
            pageUrl: u
          }), "owl", "info", ["session"]); e.queue.length;) a.log(e.queue.shift(), "owl")
        };
        if (r) a = r, l(); else try {
          if (window.Logan) a = window.Logan, l(); else {
            var p = (0 === g.indexOf("2.") ? i : o) + g + ".js";
            n(p, function () {
              a = window.Logan, l()
            })
          }
        } catch (e) {
          console.log("logan 加载失败")
        }
      }, log: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (s) {
          var r = t.noType ? "default" : "owl";
          a ? a.log(e, r) : this.queue.push(e)
        }
      }, _log: function () {
        try {
          a && a.log && a.log.apply(a, arguments)
        } catch (e) {
        }
      }
    }
  }, function (e, t) {
    "use strict";
    var r = [];
    t.loadScript = function (e, t) {
      if (~r.indexOf(e)) return void t();
      var n = document.createElement("script");
      n.src = e, n.onload = function () {
        r.push(e), t()
      }, document.getElementsByTagName("head")[0].appendChild(n)
    }
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var o = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }(), i = r(9), a = r(4), s = r(2), c = r(23), u = r(3), f = r(26), g = r(6).version, l = r(27), p = l.jsPattern,
      d = l.cssPattern, h = l.imgPattern, v = l.urlPattern, y = r(28), m = Number.parseInt || window.parseInt,
      w = "page", S = function (e) {
        var t = Math && Math.round ? Math.round(e) : e;
        return m(t)
      }, b = function () {
        function e(t, r) {
          n(this, e), this.cfgManager = t, this.errManager = r, this.points = [], this.pointsCustom = [], this.noCache = !1, this.titansTags = {}
        }

        return o(e, [{
          key: "setInitPageUrl", value: function () {
            this.initialPage = this.cfgManager.get("pageUrl")
          }
        }, {
          key: "setUserReady", value: function () {
            this.cfgManager.get(w).auto || this.cfgManager.set({page: {auto: !0}})
          }
        }, {
          key: "getUserReady", value: function () {
            return this.cfgManager.get(w).auto
          }
        }, {
          key: "setReady", value: function () {
            this.isReady = !0
          }
        }, {
          key: "getReady", value: function () {
            return this.isReady
          }
        }, {
          key: "getPerformaceTiming", value: function () {
            return {
              perf: window.performance && window.performance.timing,
              paint: window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("paint")
            }
          }
        }, {
          key: "getMainResourceTiming", value: function () {
            var e = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("resource"),
              t = this.cfgManager.get(w).isMainResource, r = [];
            try {
              if (!e) return;
              if ("function" == typeof t) {
                for (var n = 0; n < e.length; n++) {
                  var o = e[n];
                  t(o) && r.push(o)
                }
                return r
              }
              for (var i = 0; i < e.length; i++) {
                var a = e[i];
                "link" !== a.initiatorType && "script" !== a.initiatorType || r.push(a)
              }
              var s = this.cfgManager.get(w).mainResourceNumber;
              return r.length <= s ? r : r.splice(0, s)
            } catch (e) {
              u.ignore(e)
            }
          }
        }, {
          key: "sensoryObserver", value: function () {
            this.firstScreenManager = new y(this.cfgManager), this.firstScreenManager.mutaObserver()
          }
        }, {
          key: "parsePageTimeWithDefer", value: function () {
            var e = this;
            setTimeout(function () {
              try {
                var t = e.cfgManager.get(w);
                t.sensoryIndex || t.getFirstScreenTime90 ? e.firstScreenManager.getSensoryIndex(function (t) {
                  e.parsePageTime(t), e.parseFirstScreenPerf(t)
                }) : e.parsePageTime()
              } catch (t) {
                e.parsePageTime()
              }
            }, 0)
          }
        }, {
          key: "parsePageTime", value: function (e) {
            var t = this.getPerformaceTiming(), r = t.perf, n = t.paint;
            if (!r) return this.setReady();
            var o = r.navigationStart, i = {
              unloadEventStart: 1,
              unloadEventEnd: 2,
              redirectStart: 3,
              redirectEnd: 4,
              fetchStart: 5,
              domainLookupStart: 6,
              domainLookupEnd: 7,
              connectStart: 8,
              connectEnd: 9,
              requestStart: 10,
              responseStart: 11,
              responseEnd: 12,
              domLoading: 13,
              domInteractive: 14,
              domContentLoadedEventStart: 15,
              domContentLoadedEventEnd: 16,
              domComplete: 17,
              loadEventStart: 18,
              loadEventEnd: 19
            };
            for (var a in i) {
              var s = r[a] || 0;
              this.points[i[a]] = s ? s - o : 0
            }
            this.points[20] = r.domainLookupEnd - r.domainLookupStart, this.points[21] = r.connectEnd - r.connectStart, this.points[22] = r.responseEnd - r.requestStart;
            var u = 0, f = 0;
            if (n && n.length) {
              for (var g = 0; g < n.length; g++) {
                var l = n[g];
                "first-paint" === l.name ? u = m(l.startTime) : "first-contentful-paint" === l.name && (f = m(l.startTime))
              }
              u && f && (this.points[23] = u, this.points[24] = f)
            }
            e && (this.points[25] = e.FST && e.FST > f ? e.FST : f, this.points[26] = e.FCP || f || this.points[15]), window.Owl && window.Owl.fstInfo && (window.Owl.fstInfo.FST = this.points[25]);
            var p = this.cfgManager;
            p.get(w).getFirstScreenTime90 && e && (this.points[27] = e.FST90 || 0);
            try {
              var d = window.titansReport;
              if (!d && window.KNBTitansXSync && "function" == typeof window.KNBTitansXSync.getTitansReport && (d = JSON.parse(window.KNBTitansXSync.getTitansReport())), d) {
                if (d.h5Env) {
                  var h = d.h5Env;
                  h.timestamp && h.timestamp.h5EnvInit && (this.points[28] = r.loadEventStart - h.timestamp.h5EnvInit), h.timing && (this.points[29] = h.timing.h5EnvPrepare, this.points[30] = h.timing.pagePreprocess, this.points[31] = h.timing.webviewPrepare), h.tag && "undefined" != typeof h.tag.isWebViewInitialed && (this.titansTags.isWebViewInitialed = h.tag.isWebViewInitialed ? "true" : "false")
                }
                if (d.urlPreprocess) {
                  var v = d.urlPreprocess;
                  v.timing && (this.points[32] = v.timing.urlPreprocess), v.tag && "undefined" != typeof v.tag.isInterJump && (this.titansTags.isInterJump = v.tag.isInterJump ? "true" : "false")
                }
                d.commonTag && d.commonTag.titansCoreVersion && (this.titansTags.titansCoreVersion = d.commonTag.titansCoreVersion)
              }
            } catch (e) {
              this.errManager.reportSystemWarn(e)
            }
            for (var y = 0; y < this.points.length; y++) (isNaN(this.points[y]) || this.points[y] < 0) && (this.points[y] = 0);
            var S = {
              project: p.get("project"),
              pageUrl: p.get("pageUrl"),
              start: this.points[11],
              dcl: this.points[16],
              load: this.points[18],
              fst: this.points[25] || 0
            };
            c._log("[Performance]:" + JSON.stringify(S), "owl", "info", ["perf"]);
            var b = this.getMainResourceTiming();
            if (b) for (var E = p.get(w).timeThreshold, T = 0; T < b.length; T++) {
              var M = b[T];
              void 0 !== M.transferSize ? 0 !== M.transferSize && (this.noCache = !0) : void 0 !== M.duration && M.duration > E && (this.noCache = !0)
            }
            this.setReady(), this.report()
          }
        }, {
          key: "push", value: function (e) {
            !e || "number" != typeof e.position || e.position < 0 || e.position > 31 || (this.pointsCustom[e.position] = e.duration || 0, this.report())
          }
        }, {
          key: "clearTimeout", value: function (e) {
            function t() {
              return e.apply(this, arguments)
            }

            return t.toString = function () {
              return e.toString()
            }, t
          }(function () {
            clearTimeout(this.timeout), this.timeout = void 0
          })
        }, {
          key: "report", value: function (e) {
            var t = this, r = this.cfgManager, n = r.get("autoCatch").page;
            if ((!n || this.getReady()) && this.getUserReady() && (this.points.length || this.pointsCustom.length) && !(Math.random() > r.get(w).sample)) {
              try {
                this.timeout ? this.clearTimeout() : this.pendingAjax && "function" == typeof this.pendingAjax.abort && this.pendingAjax.abort()
              } catch (e) {
                this.errManager.reportSystemError(e)
              }
              var o = function () {
                if (t.clearTimeout(), t.points.length || t.pointsCustom.length) {
                  var e = t.points.length && t.initialPage || r.get("pageUrl"), n = r.getExtension(), o = s({
                    project: r.get("project"),
                    pageurl: encodeURIComponent(e),
                    speed: encodeURIComponent(t.points.join("|")),
                    customspeed: encodeURIComponent(t.pointsCustom.join("|")),
                    timestamp: +new Date,
                    sdk: g,
                    noCache: t.noCache ? "true" : "false",
                    pageId: r.get("pageId"),
                    unionId: r.getExtension("unionId")
                  }, n);
                  o = s(o, t.titansTags);
                  var c = a.stringify(r.getApiPath(w));
                  c = a.stringify(c, o), t.pendingAjax = i({
                    method: "GET", url: c, success: function () {
                      t.points = [], t.pointsCustom = [], t.pendingAjax = void 0
                    }, xhrRewritten: !!r.get("autoCatch").ajax
                  })
                }
              }, c = r.get(w).delay || 0;
              e ? o() : c >= 0 && (this.timeout = setTimeout(function () {
                o()
              }, c))
            }
          }
        }, {
          key: "parseFirstScreenPerf", value: function (e) {
            var t = this, r = this.cfgManager, n = r.get(w), o = n.delay || 0;
            setTimeout(function () {
              if (n.fstPerfAnalysis === !0 && e && e.FST) {
                var o = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("resource");
                if (o && o.length) {
                  var c = m(e.FST || 0), u = Math.random(), f = u < n.fstPerfSample, g = c < 2e3 ? .05 : .1,
                    l = n.logSlowView === !0 && c > 1e3 && u < g;
                  if (f) {
                    var y = {picCount: 0, picSize: 0, jsCount: 0, jsSize: 0, cssCount: 0, cssSize: 0, ajaxCount: 0},
                      w = {js: {}, css: {}, img: {}, ajax: {}}, b = void 0, E = void 0, T = void 0, M = void 0,
                      x = void 0, k = void 0, O = void 0, C = void 0, I = void 0, P = void 0;
                    try {
                      o.filter(function (e) {
                        return e.fetchStart && e.fetchStart < c
                      }).forEach(function (e) {
                        var t = "", r = e.name || "", n = e.initiatorType || "", o = e.transferSize || 0;
                        if (r && n && ("img" === n || r.match(h) ? (t = "img", y.picCount++, y.picSize += o) : "script" === n || "link" === n && r.match(p) ? (t = "js", y.jsCount++, y.jsSize += o) : "css" === n || "link" === n && r.match(d) ? (t = "css", y.cssCount++, y.cssSize += o) : "xmlhttprequest" !== n && "fetch" !== n && "beacon" !== n || (t = "ajax", y.ajaxCount++)), l && t && r) {
                          var i = r.match(v);
                          if (i && i[1] && i[2]) {
                            var a = e.decodedBodySize || 0, s = e.duration || 0;
                            b = S(e.responseEnd - e.fetchStart), E = S(e.fetchStart), T = S(e.domainLookupStart - e.fetchStart), M = S(e.domainLookupEnd - e.domainLookupStart), x = S(e.connectEnd - e.connectStart), k = S(e.connectEnd - e.secureConnectionStart), O = S(e.responseStart - e.requestStart), C = S(e.responseEnd - e.responseStart), I = o > 0 || !(a > 0 || s < 30) ? 0 : 1, P = "" + o + "," + b + "," + E + "," + M + "," + x + "," + k + "," + O + "," + C + "," + T + "," + I, w[t][i[1]] instanceof Array ? w[t][i[1]].push([i[2], P]) : w[t][i[1]] = [[i[2], P]]
                          }
                        }
                      });
                      var _ = a.stringify(r.getApiPath("fstInfo")), j = s({
                        p: r.get("project"),
                        page: r.get("pageUrl"),
                        ts: Date.now(),
                        pageId: r.get("pageId"),
                        unionId: r.getExtension("unionId"),
                        respTime: c
                      }, y);
                      if (i({
                        type: "POST",
                        url: _,
                        header: {"Content-Type": "application/x-www-form-urlencoded"},
                        data: "data=" + encodeURIComponent(JSON.stringify(j))
                      }), l) {
                        var R = a.stringify(r.getApiPath("fstLog")), A = {
                          p: r.get("project"),
                          page: r.get("pageUrl"),
                          ts: Date.now(),
                          pageId: r.get("pageId"),
                          unionId: r.getExtension("unionId"),
                          respTime: c,
                          content: JSON.stringify(w)
                        };
                        i({
                          type: "POST",
                          url: R,
                          header: {"Content-Type": "application/x-www-form-urlencoded"},
                          data: "data=" + encodeURIComponent(JSON.stringify(A))
                        })
                      }
                    } catch (e) {
                      t.errManager.reportSystemError(e)
                    }
                  }
                }
              }
            }, o)
          }
        }, {
          key: "manualReportFST", value: function () {
            var e = this, t = this.cfgManager.get(w);
            if (!t.sensoryIndex && t.manualReportFST && !this.firstScreenManager && f.PerformanceNow()) {
              this.points = [], this.pointsCustom = [], window._Owl_ && window._Owl_.pageData && (window._Owl_.pageData = []);
              var r = m(performance.now());
              this.sensoryObserver(), setTimeout(function () {
                try {
                  t && t.manualReportFST && e.firstScreenManager.getSensoryIndex(function (t) {
                    e.parseAsyncFST(t, r)
                  })
                } catch (e) {
                  u.ignore(e)
                }
              }, 0)
            }
          }
        }, {
          key: "parseAsyncFST", value: function (e, t) {
            if (e) {
              var r = m(e.FST || 0) - t, n = m(e.FCP || 0) - t;
              r > 0 && (this.points[25] = r, this.points[26] = n > 0 ? n : 0)
            }
            for (var o = 0; o < this.points.length; o++) isNaN(this.points[o]) && (this.points[o] = 0);
            this.setReady(), this.report()
          }
        }]), e
      }();
    e.exports = b
  }, function (e, t, r) {
    "use strict";
    var n = r(10);
    e.exports = {
      PerformanceObserver: function () {
        if (window.PerformanceObserver) try {
          var e = /Chrome\/(\d+)/, t = n.getUserAgent();
          if (!e.test(t)) return !0;
          var r = t.match(e)[1];
          if (parseInt(r) > 59) return !0
        } catch (e) {
        }
      }, MutationObserver: function () {
        if (window.MutationObserver) try {
          var e = -1, t = n.getUserAgent();
          if (t.indexOf("compatible") > -1 && t.indexOf("MSIE") > -1 ? (new RegExp("MSIE (\\d+\\.\\d+);").test(t), e = parseFloat(RegExp.$1)) : t.indexOf("Trident") > -1 && t.indexOf("rv:11.0") > -1 && (e = 11), e === -1 || e > 11) return !0
        } catch (e) {
        }
      }, PerformanceNow: function () {
        return !(!window.performance || !window.performance.now || "function" != typeof window.performance.now)
      }, GetEntries: function () {
        return !(!window.performance || "function" != typeof window.performance.getEntries)
      }
    }
  }, function (e, t) {
    "use strict";
    e.exports = {
      jsPattern: /\.js$/i,
      cssPattern: /\.css$/i,
      imgPattern: /\.(png|jpg|jpeg|gif|webp|ico|bmp|tiff|svg)$/i,
      urlPattern: /^(https?:\/\/[^\/\r\n]+)(\/[^\r\n]*)?$/
    }
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o() {
      var e = {height: window.innerHeight || 0, width: window.innerWidth || 0};
      return e
    }

    function i(e, t) {
      var r = !1;
      return t && (r = !(!e.closest || !e.closest("[" + t + "]")) || e.hasAttribute && e.hasAttribute(t)), r && m.logScreen("自定义忽略元素: ", e), r
    }

    function a(e, t) {
      performance && performance.getEntriesByType && performance.getEntriesByType("paint") && document && document.body && "" !== document.body.innerText ? I = 0 : (e && (3 === e.nodeType || "" !== e.innerText) || document.querySelector && document.querySelector("img")) && (I = H(t || 0))
    }

    function s(e, t) {
      x || (c(e), d(t))
    }

    function c(e) {
      var t = [];
      e && (m.logScreen("筛选后的有效DOM变更:", E), E.forEach(function (e) {
        var r = e.nodes, n = e.startTime, o = [];
        if (r.forEach(function (e) {
          var t = e.style || {}, r = t.visibility, n = t.display;
          if ("hidden" !== r && "none" !== n) {
            var i = e.getBoundingClientRect && e.getBoundingClientRect();
            u(i) && o.push({node: e, rect: i})
          }
        }), o.length) {
          var i = f(o);
          i && (t.push({score: i, startTime: n, validNodes: o}), m.logScreen("有效的首屏内新增节点:", o, "新增节点的权重和发生时间:", i, n))
        }
      })), E && E.length && (O = Math.max.apply(Math, E.map(function (e) {
        return e.startTime || 0
      }))), x = !0, E = [];
      var r = l(t);
      C = {FST: r, FCP: I || 0}, m.logScreen("最终DOM首屏时间的计算结果为: ", r)
    }

    function u(e) {
      var t = e || {}, r = t.width, n = t.height, o = t.top, i = t.right, a = t.bottom, s = t.left;
      return r > 0 && n > 0 && a > 0 && o < z && i > 0 && s < G
    }

    function f(e) {
      return e.reduce(function (e, t) {
        return e + g(t, 0)
      }, 0)
    }

    function g(e, t) {
      var r = e.node, n = e.rect, o = r.style || {}, i = o.visibility, a = o.display;
      if ("hidden" === i || "none" === a) return 0;
      if (3 === r.nodeType) {
        if (r.textContent) {
          var s = r.textContent.charCodeAt(0);
          if (10 !== s && 13 !== s) return t + B
        }
        return 0
      }
      if (r.childNodes && r.childNodes.length) {
        var c = V.call(r.childNodes, 0).reduce(function (e, r) {
          return e + g({node: r}, t + q)
        }, 0);
        if (c > 0) return c + B
      }
      var u = n || {width: r.clientWidth, height: r.clientHeight}, f = u.width, l = u.height;
      return f > 0 && l > 0 ? t + B : 0
    }

    function l(e) {
      if (!e || !e.length) return 0;
      var t = e.reduce(function (e, t) {
        var r = e[e.length - 1];
        return r && t.startTime - r.startTime < 1 ? r.score += t.score : e.push({
          score: t.score,
          startTime: t.startTime,
          nodes: t.validNodes
        }), e
      }, []);
      m.logScreen("合并后的首屏内新增节点权重记录:", t);
      var r = t.reduce(function (e, t) {
        return !e || t.score > Math.min(e.score, J) ? t : e
      }, null), n = H(r && r.startTime || 0);
      return window && window.Owl && (window.Owl.fstInfo = {
        domFST: n,
        decisiveNode: r && r.nodes && r.nodes[0] ? r.nodes[0].node : null
      }), n
    }

    function p(e) {
      if (e && e.length) for (var t = 0; t < e.length; t++) e[t].time > O ? (e.splice(t, 1), t--) : e[t + 1] && e[t].score >= e[t + 1].score && (e.splice(t + 1, 1), t--);
      return e
    }

    function d(e) {
      if (e) {
        var t = p(R);
        if (t && t.length) {
          m.logScreen("[FST90] DOM权重集合:", t);
          for (var r = t[t.length - 1] ? t[t.length - 1].score : 0, n = .9 * r, o = .8 * r, i = .85 * r, a = .95 * r, s = 0; s < t.length; s++) {
            var c = H(t[s].time);
            if (!A && t[s].score >= n && (A = c), !N && t[s].score >= o && (N = c), !U && t[s].score >= i && (U = c), !L && t[s].score >= a && (L = c), A && N && U && L) break
          }
          m.logScreen("FST90的计算结果为: ", A);
          var u = {FST90: A || 0, FST80: N || 0, FST85: U || 0, FST95: L || 0};
          C = C ? S(C, u) : u
        }
        C && void 0 !== C.FST && (!A || A > C.FST) && (C.FST90 = C.FST)
      }
    }

    function h(e, t) {
      var r = y.getImageTimingsInFirstScreen(e, t, j);
      if (C && r.length) {
        var n = Math.round(r[0]);
        C.FST = Math.max(C.FST, n), m.logScreen("首屏图片时间: ", n), m.logScreen("最终首屏时间: ", C.FST), window && window.Owl && window.Owl.fstInfo && (window.Owl.fstInfo.imgFST = n)
      }
    }

    var v = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }(), y = r(29), m = r(3), w = r(26), S = r(2), b = r(12), E = [], T = null, M = null, x = !1, k = !1, O = void 0,
      C = void 0, I = -1, P = void 0, _ = 0, j = void 0, R = [], A = void 0, N = void 0, U = void 0, L = void 0, F = 15,
      D = 3e3, J = 3, B = 1, q = 0, W = ["HTML", "HEAD", "META", "LINK", "SCRIPT", "STYLE", "NOSCRIPT"],
      V = Array.prototype.slice, H = Number.parseInt || window.parseInt, X = o(), z = X.height, G = X.width, $ = "page",
      K = function () {
        function e(t) {
          n(this, e), this.cfgManager = t, this.pageData = [], this.observer = null, this.disableMutaObserver = !1;
          var r = t.get($), o = H(r.mutaStopTime || 0);
          if (this.mutaStopTime = o > D ? o : D, this.perfObserver = null, this.ignoreDom = r.ignoreAttr || "owl-ignore", this.ignoreIframe = !0, this.imgPattern = /(\.)(png|jpg|jpeg|gif|webp|ico|bmp|tiff|svg)/i, this.noCheckOuterMutaCount = r.noCheckOuterMutaCount, j = r.scrollDom, window._Owl_ && (this.pageData = window._Owl_.pageData, this.observer = window._Owl_.observer, this.disableMutaObserver = window._Owl_.disableMutaObserver), (this.disableMutaObserver || !document.body) && (x = !0, k = !0, this.observer)) try {
            this.observer.disconnect()
          } catch (e) {
            console.log("observer disconnect err")
          }
        }

        return v(e, [{
          key: "mutaObserver", value: function () {
            var e = this;
            if (w.PerformanceNow() && w.MutationObserver() && !x) {
              if (this.observer && this.observer.disconnect) try {
                this.observer.disconnect(), this.observer = null, this.pageData && this.pageData.length && this.pageData.forEach(function (t) {
                  e.mutaCallback(t.mutations, t.startTime, !1)
                })
              } catch (e) {
                console.log("observer disconnect err")
              }
              var t = this.cfgManager.get($);
              try {
                if (this.observer = new MutationObserver(function (r) {
                  var n = performance.now();
                  e.mutaCallback(r, n, !0), t.getFirstScreenTime90 && e.recordDomWeight(n)
                }), this.observer.observe(document.body, {
                  childList: !0,
                  subtree: !0
                }), this.resetTimer(!0), t.interactToStopObserver === !0 && document && document.addEventListener) if ("complete" === document.readyState) this.interactToStopObserver(); else {
                  var r = window.addEventListener || window.attachEvent;
                  r("load", function () {
                    e.interactToStopObserver()
                  })
                }
              } catch (e) {
                console.log("observer observe err")
              }
              P = t.disableSensoryImageIndex, k = P || k, k || this.registerPerfObserver()
            }
          }
        }, {
          key: "registerPerfObserver", value: function () {
            var e = this, t = this.cfgManager.get("resource").disablePerformanceObserver || !1;
            if (w.PerformanceObserver() && t !== !0) {
              var r = setTimeout(function () {
                e.perfObserverStop()
              }, 8e3);
              this.perfObserver = new window.PerformanceObserver(function () {
                clearTimeout(M), M = setTimeout(function () {
                  clearTimeout(r), e.perfObserverStop()
                }, D)
              }), this.perfObserver.observe({entryTypes: ["resource"]})
            } else k = !0
          }
        }, {
          key: "getSensoryIndex", value: function (e) {
            var t = this, r = 0, n = setTimeout(function () {
              clearInterval(r), t.mutaObserverStop(), t.perfObserverStop(), e(C)
            }, 8e3), o = function () {
              x && k && (clearInterval(r), clearTimeout(n), C ? (P || h(t.ignoreDom, t.imgPattern), e(C)) : e())
            };
            r = setInterval(o, 500)
          }
        }, {
          key: "resetTimer", value: function (e) {
            var t = this;
            T && clearTimeout(T), e && (T = setTimeout(function () {
              m.logScreen(t.mutaStopTime + "ms时间内没有监听到新的DOM变化, 停止DOM变化监听"), t.mutaObserverStop()
            }, this.mutaStopTime))
          }
        }, {
          key: "mutaCallback", value: function (e, t, r) {
            var n = this;
            r && this.resetTimer(!0), t = t || performance.now(), setTimeout(function () {
              x || (m.logScreen("DOM原始变更:", t, e), e.filter(function (e) {
                var t = (e.target.nodeName || "").toUpperCase();
                return "childList" === e.type && t && W.indexOf(t) === -1 && e.addedNodes && e.addedNodes.length
              }).forEach(function (e) {
                if (!x) {
                  var r = V.call(e.addedNodes, 0).filter(function (e) {
                    var t = (e.nodeName || "").toUpperCase();
                    return 1 === e.nodeType && t && W.indexOf(t) === -1 && e.isConnected !== !1 && !(n.ignoreIframe && "IFRAME" === t) && !i(e, n.ignoreDom)
                  });
                  if (r && r.length && r[0]) {
                    E.push({nodes: r, startTime: t});
                    var o = r[0];
                    I === -1 && a(o, t);
                    try {
                      if (!n.noCheckOuterMutaCount) {
                        var s = o.getBoundingClientRect && o.getBoundingClientRect();
                        s && s.width && s.height && s.top >= z && (m.logScreen("检测到首屏外节点次数: " + ++_ + "次, 节点内容为:", r), _ >= F && (m.logScreen("检测到首屏外mutation达到 " + F + " 次, 停止DOM变化监听"), n.mutaObserverStop()))
                      }
                    } catch (e) {
                      b.reportSysWarn(e)
                    }
                    document && document.querySelectorAll && r.forEach(function (e) {
                      n.addEventToStopObserver(e)
                    })
                  }
                }
              }))
            }, 0)
          }
        }, {
          key: "recordDomWeight", value: function (e) {
            var t = document && document.querySelector("body");
            if (t) {
              var r = 0;
              r += this.calcuDomWeight(t, 1, !1), R.push({score: r, time: e})
            }
          }
        }, {
          key: "calcuDomWeight", value: function (e, t, r) {
            var n = 0, o = e.tagName || "";
            if (o && W.indexOf(o) === -1) {
              var i = e.children, a = i ? i.length : 0;
              if (a > 0) for (var s = a - 1; s >= 0; s--) n += this.calcuDomWeight(i[s], t + 1, n > 0);
              if (n <= 0 && !r) {
                var c = e.style || {}, f = c.visibility, g = c.display;
                if ("hidden" === f || "none" === g) return 0;
                var l = e.getBoundingClientRect && e.getBoundingClientRect();
                if (!u(l)) return 0
              }
              if (n += 1, 0 === a) {
                var p = e.childNodes;
                if (p && p.length) for (var d = 0; d < p.length; d++) {
                  var h = p[d], v = h && 3 === h.nodeType ? h.nodeValue.trim() : "";
                  if ("" !== v) {
                    n += 1;
                    break
                  }
                }
              }
            }
            return n
          }
        }, {
          key: "mutaObserverStop", value: function () {
            if (this.observer && this.observer.disconnect) try {
              this.observer.disconnect(), this.observer = null;
              var e = this.cfgManager.get($);
              s(e.sensoryIndex || e.manualReportFST, e.getFirstScreenTime90), this.resetTimer(!1)
            } catch (e) {
              console.log("observer disconnect err")
            }
          }
        }, {
          key: "perfObserverStop", value: function () {
            try {
              this.perfObserver && this.perfObserver.disconnect && (this.perfObserver.disconnect(), this.perfObserver = null), k = !0
            } catch (e) {
              console.log("perfObserver disconnect err")
            }
          }
        }, {
          key: "addEventToStopObserver", value: function (e) {
            var t = this;
            V.call(e.querySelectorAll("[interactive]"), 0).forEach(function (e) {
              var r = e.getAttribute("interactive") || "click", n = function n() {
                t.mutaObserverStop(), e.removeEventListener(r, n)
              };
              e.addEventListener(r, n)
            })
          }
        }, {
          key: "interactToStopObserver", value: function () {
            var e = this;
            if (!x) {
              var t = function () {
                return x ? void r() : (m.logScreen("onload后响应到用户交互事件, 停止DOM变化监听"), e.mutaObserverStop(), void r())
              }, r = function () {
                document.removeEventListener("click", t), document.removeEventListener("wheel", t), document.removeEventListener("touchmove", t)
              };
              document.addEventListener("click", t), document.addEventListener("wheel", t), document.addEventListener("touchmove", t)
            }
          }
        }]), e
      }();
    e.exports = K
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return e && "data:image" === e.slice(0, 10)
    }

    function o(e) {
      var t = document.createElement("a");
      return t.href = e, t.href
    }

    function i(e, t) {
      var r = void 0, o = e.match(/url\(.*?\)/g);
      if (o && o.length) {
        var i = o[o.length - 1], a = i.replace(/^url\([\'\"]?/, "").replace(/[\'\"]?\)$/, "");
        t.test(a) && !n(a) && (r = a)
      }
      return r
    }

    function a(e, t) {
      if ("IMG" === e.nodeName.toUpperCase()) return e.getAttribute("data-srcset") || e.getAttribute("src");
      var r = window.getComputedStyle(e),
        n = r.getPropertyValue("background-image") || r.getPropertyValue("background");
      return i(n, t)
    }

    function s(e, t, r) {
      var i = [];
      try {
        for (var s = document.createNodeIterator(document.body, NodeFilter.SHOW_ELEMENT, function (t) {
          if (t && t.getAttribute && !t.hasAttribute("" + e)) return NodeFilter.FILTER_ACCEPT
        }, !1), u = s.nextNode(); u;) {
          var f = a(u, t);
          f ? (c(u, r) && !n(f) && i.push(o(f)), u = s.nextNode()) : u = s.nextNode()
        }
      } catch (e) {
        console.log("getDomImgs err")
      }
      return i
    }

    function c(e, t) {
      if (!e) return !1;
      var r = e.getBoundingClientRect(), n = r.top, o = r.left, i = r.right, a = r.bottom;
      if (!n && !a) return !1;
      var s = void 0;
      return s = t ? document.getElementById(t).scrollTop : window.scrollY || window.pageYOffset, s + n < window.innerHeight && i > 0 && o < window.innerWidth
    }

    function u(e, t, r) {
      if (!window.performance || !window.performance.getEntriesByType) return [];
      var n = [];
      try {
        var o = window.performance.getEntriesByType("resource").filter(function (e) {
          return "img" === e.initiatorType || "css" === e.initiatorType
        }).map(function (e) {
          return {
            name: e.name.split(":")[1] || e.name,
            responseEnd: e.responseEnd,
            connectEnd: e.connectEnd,
            duration: e.duration
          }
        }), i = s(e, t, r).join("###");
        return n = o.filter(function (e) {
          return i.indexOf(e.name) !== -1
        }).map(function (e) {
          var t = e.responseEnd || e.connectEnd + e.duration;
          return {name: e.name, time: t}
        }).sort(function (e, t) {
          return t.time - e.time
        }), f.logScreen("首屏内图片的加载时间", n), n.map(function (e) {
          return e.time
        })
      } catch (e) {
        n = []
      }
      return n
    }

    var f = r(3);
    e.exports = {getImageTimingsInFirstScreen: u, isInFirstScreen: c}
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var o = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }(), i = r(9), a = r(31), s = r(19), c = r(27), u = c.jsPattern, f = c.cssPattern, g = c.imgPattern, l = r(12),
      p = r(32), d = r(3), h = r(23), v = r(7), y = r(26), m = 10, w = "resource", S = function (e) {
        var t = e.split("//");
        if (t && t.length > 1) return t[0] + "//" + t[1].split("/")[0] + "/images"
      }, b = function () {
        function e(t, r) {
          n(this, e), this.cfgManager = t, this.errManager = r, this.cache = [], this.entryCache = [], this.comboTimeout = 0, this.isSupportGetEntries = y.GetEntries()
        }

        return o(e, [{
          key: "parseAjax", value: function (e) {
            try {
              if (!e || !e.currentTarget || isNaN(e.duration)) return;
              var t = e.type, r = e.duration, n = e.total, o = e.currentTarget, i = o.status,
                a = l.getFullUrl(o.responseURL || o.url);
              if (!this.checkUrlValid(a)) return;
              if (this.checkMTSIForbid(o)) return;
              var c = this.cfgManager, u = c.get("resourceReg"), f = c.get("devMode") || u instanceof RegExp && u.test(a),
                g = c.get("ajax"), p = c.get(w), d = r.toString(), v = o.traceid || "", y = {
                  project: c.get("project"),
                  url: a,
                  method: o.method || "",
                  duration: d,
                  traceid: v,
                  timestamp: +new Date
                };
              if (f) {
                if (!g.flag || r < g.duration) {
                  var m = void 0, S = void 0, b = "";
                  p.enableStatusCheck ? (S = i || ("load" === t ? 200 : 500), m = ("load" === t || "readystatechange" === t) && (S >= 200 && S < 300 || 304 === S), m || (b = "load" === t ? "" : "from: xhr " + t + ".", b += o.statusText ? S + " " + o.statusText : "")) : (m = "load" === t || "readystatechange" === t && 200 === i, S = m ? 200 : 500, b = m ? "" : "from: xhr " + t), this.pushApi({
                    type: "ajax",
                    resourceUrl: a,
                    connectType: this.getConnectTypeByUrl(a),
                    responsetime: d,
                    responsebyte: n && n.toString() ? n.toString() : "0",
                    statusCode: S + "|",
                    firstCategory: m ? "" : s.AJAX,
                    logContent: b,
                    traceid: v
                  }), y.code = S;
                  var E = "info", T = "ajax";
                  m || (y.error = {
                    type: "default",
                    content: b
                  }, E = "error", T = "ajaxError"), h._log("[Ajax]:" + JSON.stringify(y), "owl", E, [T])
                } else if (Math.random() < p.sampleApi) {
                  var M = "ajax请求时间超过设定 " + a;
                  this.errManager.push({name: "TIMEOUT_AJAX", msg: M}, {category: s.AJAX}), y.error = {
                    type: "timeout",
                    content: M
                  }, h._log("[Ajax]:" + JSON.stringify(y), "owl", "error", ["ajaxError"])
                }
              } else c.get("invalid").ajax && g.invalid && Math.random() < p.sample && (this.errManager.push({
                name: "INVALID_AJAX",
                msg: a
              }, {category: s.AJAX}), y.error = {
                type: "invalidUrl",
                content: a
              }, h._log("[Ajax]:" + JSON.stringify(y), "owl", "error", ["ajaxError"]))
            } catch (e) {
              l.reportSysError(e)
            }
          }
        }, {
          key: "parseFetch", value: function (e) {
            try {
              var t = e.url, r = e.duration, n = e.isSuccess;
              if (!t || isNaN(r) || void 0 === n) return;
              if (t = l.getFullUrl(t), !this.checkUrlValid(t)) return;
              var o = this.cfgManager, i = o.get("resourceReg");
              if (!(o.get("devMode") || i instanceof RegExp && i.test(t))) return;
              if (o.get(w).ignoreMTSIForbidRequest && e.xForbidReason && 403 === e.statusCode) return;
              h.log("[加载资源]: [类型]->Fetch [链接]->" + t);
              var a = void 0, c = void 0, u = void 0;
              if (n) {
                var f = !!e.ok, g = f ? 200 : 404;
                a = e.statusCode || g, c = f ? "" : s.AJAX, u = f ? "" : a + " " + (e.statusText || "")
              } else a = "500", c = s.AJAX, u = e.errMsg || e.errName || "";
              this.pushApi({
                type: "fetch",
                resourceUrl: t,
                connectType: this.getConnectTypeByUrl(t),
                responsetime: r.toString() || "0",
                responsebyte: "0",
                statusCode: a + "|",
                firstCategory: c,
                logContent: u
              })
            } catch (e) {
              l.reportSysError(e)
            }
          }
        }, {
          key: "checkUrlValid", value: function (e) {
            try {
              for (var t = this.cfgManager.get("ignoreList").ajax || [], r = 0; r < t.length; r++) {
                var n = new RegExp(t[r]);
                if (n.test(e)) return !1
              }
            } catch (e) {
              return l.reportSysError(e), !1
            }
            return !0
          }
        }, {
          key: "checkMTSIForbid", value: function (e) {
            if (!e || !this.cfgManager.get(w).ignoreMTSIForbidRequest) return !1;
            try {
              if (403 === e.status && "function" == typeof e.getAllResponseHeaders) {
                var t = e.getAllResponseHeaders();
                if (t && t.indexOf("x-forbid-reason") > -1) return !0
              }
            } catch (e) {
              l.reportSysError(e)
            }
            return !1
          }
        }, {
          key: "parseType", value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return e && t ? ("img" === e || t.match(g) ? e = "image" : "script" === e || "link" === e && t.match(u) ? e = "js" : ("css" === e || "link" === e && t.match(f)) && (e = "css"), e) : ""
          }
        }, {
          key: "filterResource", value: function (e) {
            try {
              for (var t = this.cfgManager.get("ignoreList").resource, r = 0; r < t.length; r++) {
                var n = new RegExp(t[r]);
                if (n.test(e)) return !1
              }
              return !0
            } catch (e) {
              return l.reportSysError(e), !1
            }
          }
        }, {
          key: "parsePerformanceEntries", value: function (e) {
            if (e = this.filterEntries(e), e && e.length) {
              for (var t = this.cfgManager, r = t.get("devMode"), n = t.get("resourceReg"), o = t.get("image"), i = this.entryCache, a = 0; a < e.length; a++) {
                var c = e[a], u = c.name, f = this.filterResource(u);
                if (f && (r || n instanceof RegExp && n.test(u))) {
                  i.push(u);
                  var g = !1, l = this.parseType(c.initiatorType, u), p = "image" === l;
                  if (o.flag && p) {
                    var d = o.filter;
                    if (!d || "function" == typeof d && !d(u)) {
                      var h = void 0, v = c.transferSize, y = c.duration;
                      v && v > 1e3 * o.fileSize ? h = "IMAGE_SIZE_EXCEED" : y && y > o.duration && (h = "IMAGE_DURATION_EXCEED"), h && (g = !0, this.errManager._pushResource({
                        category: s.RESOURCE,
                        sec_category: h,
                        content: u
                      }))
                    }
                  }
                  g || this.push({
                    type: l,
                    connectType: this.getConnectTypeByUrl(u),
                    resourceUrl: p ? S(u) : u,
                    responsetime: c.duration && c.duration.toString() || "0",
                    responsebyte: c.transferSize && c.transferSize.toString() || "0",
                    statusCode: "200|",
                    logContent: p ? u : ""
                  })
                }
              }
              this.report()
            }
          }
        }, {
          key: "filterEntries", value: function (e) {
            for (var t = [], r = ["link", "script", "img", "css"], n = 0; n < e.length; n++) {
              var o = e[n];
              r.indexOf(o.initiatorType) > -1 && t.push(o)
            }
            return t
          }
        }, {
          key: "observeResourceTiming", value: function () {
            var e = this;
            if (!this.resTimingObserved) {
              this.resTimingObserved = !0;
              var t = this.cfgManager.get(w).disablePerformanceObserver || !1;
              if (!t && y.PerformanceObserver()) {
                var r = new window.PerformanceObserver(function (t) {
                  try {
                    var r = t.getEntries();
                    e.parsePerformanceEntries(r)
                  } catch (e) {
                    l.reportSysError(e)
                  }
                });
                r.observe({entryTypes: ["resource"]})
              } else p.on("ajaxCall", function () {
                setTimeout(function () {
                  var t = e.entryCache, r = window.performance.getEntries();
                  if (r.length !== t.length && r.length > t.length) {
                    for (var n = [], o = 0; o < r.length; o++) t.indexOf(r[o].name) === -1 && n.push(r[o]);
                    t = r, e.parsePerformanceEntries(n)
                  }
                }, 1500)
              })
            }
          }
        }, {
          key: "handleResourceTiming", value: function () {
            try {
              if (this.isSupportGetEntries) {
                var e = window.performance.getEntries();
                this.parsePerformanceEntries(e), this.observeResourceTiming()
              }
            } catch (e) {
              l.reportSysWarn(e)
            }
          }
        }, {
          key: "handleResourceLoadError", value: function (e) {
            var t = this, r = e.target || e.srcElement, n = function () {
              var e = r.src || r.href, n = l.getHref();
              if (e && n && 0 !== n.indexOf(e)) {
                var o = (r.nodeName || "").toLowerCase();
                if (o) {
                  var i = "img" === o ? S(e) : e;
                  if (i) {
                    var a = t.filterResource(i);
                    if (a) {
                      u.test(e) && h._log("[Error]:" + JSON.stringify({
                        type: "js",
                        url: e
                      }), "owl", "error", ["resourceError"]);
                      var c = l.getXPath(r), f = e + (c ? "\n" + c : "");
                      t.isSupportGetEntries ? t.pushApi({
                        type: t.parseType(o, e),
                        resourceUrl: i,
                        connectType: t.getConnectTypeByUrl(i),
                        responsetime: "0",
                        statusCode: "500|",
                        firstCategory: s.RESOURCE,
                        secondCategory: o,
                        logContent: f
                      }) : t.errManager._pushResource({category: s.RESOURCE, sec_category: o, content: f})
                    }
                  }
                }
              }
            };
            try {
              (r instanceof HTMLScriptElement || r instanceof HTMLLinkElement || r instanceof HTMLImageElement) && n()
            } catch (e) {
              l.reportSysError(e)
            }
          }
        }, {
          key: "_stringify", value: function () {
            var e = this.cache;
            if (e && e.length) {
              var t = this.cfgManager.getExtension(),
                r = {region: "", operator: "", network: "", container: "", os: "", unionId: ""};
              for (var n in r) r.hasOwnProperty(n) && (r[n] = t[n] || "");
              for (var o = [], i = 0; i < e.length; i++) o.push(e[i]);
              return r.infos = o, r
            }
          }
        }, {
          key: "doBatchPush", value: function (e) {
            e = this.parse(e);
            var t = new a(e), r = !0, n = this.cfgManager.get("onBatchPush");
            if ("function" == typeof n) try {
              r = n(t)
            } catch (e) {
              d.ignore(e)
            }
            r && this.cache.push(t)
          }
        }, {
          key: "push", value: function (e) {
            Math.random() > this.cfgManager.get(w).sample || (this.doBatchPush(e), this.cache.length >= m ? this.report(!0) : this.triggerReport())
          }
        }, {
          key: "parse", value: function (e) {
            return e.pageUrl = e.pageUrl || this.cfgManager.get("pageUrl"), e.project = e.project || this.cfgManager.get("project"), e.realUrl = e.realUrl || location.href, e
          }
        }, {
          key: "pushApi", value: function (e) {
            Math.random() > this.cfgManager.get(w).sampleApi || (this.doBatchPush(e), this.triggerReport())
          }
        }, {
          key: "report", value: function () {
            this.triggerReport(!0)
          }
        }, {
          key: "triggerReport", value: function (e) {
            var t = this;
            if (this.cache.length) {
              var r = function () {
                clearTimeout(t.comboTimeout), t.comboTimeout = 0, t.send()
              }, n = this.cfgManager.get(w).delay;
              e ? this.send() : this.comboTimeout || n === -1 || (this.comboTimeout = setTimeout(r, n))
            }
          }
        }, {
          key: "send", value: function () {
            var e = this._stringify();
            if (e) {
              var t = this.cfgManager.getApiPath(w);
              i({
                type: "POST",
                url: t + ("&pageId=" + this.cfgManager.get("pageId")),
                data: JSON.stringify(e)
              }), this.cache = []
            }
          }
        }, {
          key: "getConnectTypeByUrl", value: function (e) {
            return 0 === e.indexOf("https") ? "https" : 0 === e.indexOf("http") ? "http" : 0 === v.indexOf("https") ? "https" : "http";
          }
        }]), e
      }();
    e.exports = b
  }, function (e, t) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var n = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }(),
      o = ["resourceUrl", "connectType", "type", "timestamp", "requestbyte", "responsebyte", "responsetime", "project", "pageUrl", "realUrl", "statusCode", "firstCategory", "secondCategory", "logContent", "traceid"],
      i = o, a = function () {
        function e(t) {
          var n = this;
          r(this, e), o.forEach(function (e) {
            n[e] = t[e]
          }), this.parse()
        }

        return n(e, [{
          key: "parse", value: function () {
            this.timestamp = this.timestamp || Date.now().toString(), this.requestbyte = this.requestbyte || "0", this.responsebyte = this.responsebyte || "0"
          }
        }, {
          key: "update", value: function (e) {
            for (var t in e) e.hasOwnProperty(t) && o.indexOf(t) > -1 && (this[t] = e[t])
          }
        }, {
          key: "stringify", value: function () {
            var e = this, t = i.map(function (t) {
              return e[t]
            });
            return t.join("\t")
          }
        }]), e
      }();
    e.exports = a
  }, function (e, t) {
    "use strict";
    e.exports = {
      on: function (e, t) {
        e && t && (this._events_ || (this._events_ = {}), this._events_[e] || (this._events_[e] = []), this._events_[e].push(t))
      }, trigger: function (e) {
        var t = this._events_;
        if (e && t && t[e]) for (var r = t[e], n = Array.prototype.slice.call(arguments, 1), o = 0; o < r.length; o++) r[o].apply(this, n)
      }
    }
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var o = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }

      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(), i = r(2), a = r(9), s = r(3), c = r(4), u = "metric", f = function () {
      function e(t) {
        n(this, e), this.cfgManager = t, this.tags = {}, this.kvs = {}, this.extraData = ""
      }

      return o(e, [{
        key: "setTags", value: function (e) {
          this.tags = i(this.tags, e)
        }
      }, {
        key: "getTags", value: function (e) {
          return e ? this.tags[e] : this.tags
        }
      }, {
        key: "setMetric", value: function (e, t) {
          var r = this;
          if ("string" != typeof e) return s.ignore("metric名称必须是string类型");
          if ("number" != typeof t) return s.ignore("metric值必须是number类型,当前为" + e + "-" + t);
          this.kvs[e] || (this.kvs[e] = []), this.kvs[e].push(t);
          try {
            this.cfgManager.get(u).combo && (this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.timeout = setTimeout(function () {
              r.report()
            }, this.cfgManager.get(u).delay || 1500))
          } catch (e) {
            throw e
          }
        }
      }, {
        key: "setExtraData", value: function (e) {
          e && (this.extraData = e)
        }
      }, {
        key: "getMetric", value: function (e) {
          return e ? this.kvs[e] : this.kvs
        }
      }, {
        key: "clearMetric", value: function () {
          this.kvs = {}
        }
      }, {
        key: "_rollbackMetric", value: function (e) {
          for (var t in e) e.hasOwnProperty(t) && (this.kvs[t] = e[t].concat(this.kvs[t] || []))
        }
      }, {
        key: "report", value: function () {
          var e = this, t = this.cfgManager, r = t.get("project");
          if (this.kvs && 0 !== Object.keys(this.kvs).length) {
            var n = {kvs: this.kvs, tags: this.tags, ts: parseInt(+new Date / 1e3), extraData: this.extraData},
              o = this.kvs;
            this.clearMetric();
            var i = t.getApiPath(u),
              s = c.stringify(i, {p: r, pageId: t.get("pageId"), unionId: t.getExtension("unionId")});
            a({
              type: "POST",
              url: s,
              header: {"Content-Type": "application/x-www-form-urlencoded"},
              data: "data=" + encodeURIComponent(JSON.stringify(n)),
              fail: function () {
                e._rollbackMetric(o)
              }
            })
          }
        }
      }]), e
    }();
    e.exports = f
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var o = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }

      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(), i = r(9), a = r(4), s = r(35), c = "pv", u = function () {
      function e(t) {
        n(this, e), this.cfgManager = t
      }

      return o(e, [{
        key: "report", value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = this.cfgManager,
            r = t.getExtension(), n = a.stringify(t.getApiPath(c), {
              project: e.project || t.get("project"),
              pageurl: encodeURIComponent(e.pageUrl || t.get("pageUrl")),
              pageId: e.pageId || t.get("pageId"),
              timestamp: Date.now(),
              region: r.region || "",
              operator: r.operator || "",
              network: r.network || "",
              container: r.container || "",
              os: r.os || "",
              unionid: r.unionId || s("uuid") || s("unionid") || s("dpid") || s("_lxsdk_cuid") || ""
            });
          i({type: "POST", url: n, header: {"Content-Type": "application/x-www-form-urlencoded"}})
        }
      }]), e
    }();
    e.exports = u
  }, function (e, t) {
    "use strict";
    e.exports = function (e) {
      for (var t = e + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
        for (var o = r[n]; " " == o.charAt(0);) o = o.substring(1, o.length);
        if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
      }
      return null
    }
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    var o = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }

      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(), i = r(23), a = function () {
      function e(t) {
        n(this, e), this.cfgManager = t
      }

      return o(e, [{
        key: "addLog", value: function (e) {
          i.log("[Log]: " + e, {noType: !0})
        }
      }]), e
    }();
    e.exports = a
  }, function (e, t, r) {
    "use strict";
    var n = r(12), o = r(35);
    e.exports = {
      getExt: function () {
        var e = {};
        try {
          var t = o("network");
          if (!t) {
            var r = n.getUserAgent(), i = /NetType\/([a-zA-Z0-9]+)/;
            r && i.test(r) && (t = r.match(i)[1])
          }
          t = t || n.getConnectionType();
          var a = o("uuid") || o("unionid") || o("dpid") || o("_lxsdk_cuid");
          t && (e.network = t), a && (e.unionId = a)
        } catch (e) {
        }
        return e
      }
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(39), o = r(10);
    e.exports = function (e) {
      if (!e.get("devMode")) {
        e.addFilter("base", n.base);
        var t = o.getUserAgent();
        /MicroMessenger/.test(t) ? e.addFilter("weixin", n.weixin) : /dp\/com\.dianping/.test(t) && e.addFilter("dianping", n.dianping)
      }
    }
  }, function (e, t) {
    "use strict";
    e.exports = {
      base: function (e) {
        return !e.resourceUrl || /\.(dpfile|dianping|51ping|meituan|sankuai)\.(com|net)/.test(e.resourceUrl)
      }, weixin: function (e) {
        return !/(WeixinJSBridge|_WXJS|WebViewJavascriptBridge)/.test(e.sec_category)
      }, dianping: function (e) {
        return !/document.elementFromPoint/.test(e.sec_category)
      }
    }
  }, function (e, t) {
    "use strict";
    e.exports = function (e) {
      var t = e.cfgManager, r = t.get("autoCatch").page, n = t.get("page");
      if (r && (n.sensoryIndex || n.getFirstScreenTime90)) e.sensoryObserver(); else try {
        window._Owl_ && window._Owl_.observer && window._Owl_.observer.disconnect && window._Owl_.observer.disconnect()
      } catch (e) {
      }
      if (r && !e.getReady()) if (e.setInitPageUrl(), document && "complete" === document.readyState) e.parsePageTimeWithDefer(); else {
        var o = window.addEventListener || window.attachEvent, i = window.addEventListener ? "load" : "onload";
        o(i, function () {
          e.parsePageTimeWithDefer()
        })
      }
    }
  }, function (e, t) {
    "use strict";
    e.exports = function (e) {
      var t = e.cfgManager.get("autoCatch");
      if (t.js) {
        var r = window.onerror;
        window.onerror = function () {
          e.parseWindowError.apply(e, arguments), r && r.apply(window, arguments)
        };
        var n = window.addEventListener || window.attachEvent;
        n("unhandledrejection", function () {
          e.parsePromiseUnhandled.apply(e, arguments)
        })
      }
      if (t.console && window.console && window.console.error) {
        var o = window.console.error;
        window.console.error = function () {
          e.parseConsoleError.apply(e, arguments), o && o.apply(window.console, arguments)
        }
      }
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(32), o = r(43), i = r(44);
    e.exports = function (e) {
      var t = e.cfgManager, r = t.get("autoCatch"), a = t.get("enableLogTrace") || !1, s = t.get("project"),
        c = t.get("resource");
      if (r.ajax && (o(a, s, c.catchAbort, c.catchTimeout), n.on("ajaxCall", function () {
        e.parseAjax.apply(e, arguments)
      })), r.fetch && (i(), n.on("fetchCall", function () {
        e.parseFetch.apply(e, arguments)
      })), r.resource) {
        var u = window.addEventListener || window.attachEvent, f = window.addEventListener ? "load" : "onload",
          g = window.addEventListener ? "error" : "onerror";
        document && "complete" === document.readyState ? e.handleResourceTiming.apply(e) : u(f, function () {
          e.handleResourceTiming.apply(e)
        }), u(g, function (t) {
          t && e.handleResourceLoadError.apply(e, arguments)
        }, !0)
      }
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(12), o = r(32), i = window.XMLHttpRequest;
    e.exports = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (i && !i._owl && (i._owl = !0, !window.location || "file:" !== window.location.protocol)) try {
        var s = i.prototype.open, c = i.prototype.send, u = n.getOrigin();
        i.prototype.open = function (r, o) {
          this._startTime = +new Date, this.method = r, this.url = o, s && s.apply(this, arguments);
          try {
            if (e && t && n.checkSameOrigin(o, u) && "function" == typeof this.setRequestHeader) {
              var i = n.traceid();
              i && (this.setRequestHeader("M-TRACEID", i), this.setRequestHeader("M-APPKEY", "fe_" + t), this.traceid = i)
            }
          } catch (e) {
            n.reportSysError(e)
          }
        }, i.prototype.send = function () {
          var e = this, t = arguments, n = "addEventListener", i = "onreadystatechange", s = function (t) {
            if (t) if (/catfront.(dianping|51ping).com/.test(e.url)) try {
              var r = void 0;
              e.getAllResponseHeaders("content-type").indexOf("application/json") !== -1 && (r = JSON.parse(t.currentTarget.response)), 200 === t.currentTarget.status ? e.success && e.success(r) : e.fail && e.fail(r)
            } catch (e) {
            } else t.duration = +new Date - e._startTime, o.trigger("ajaxCall", t)
          };
          if (n in this) this[n]("load", s), this[n]("error", s), r && this[n]("abort", s), a && this[n]("timeout", s); else {
            var u = this[i];
            this[i] = function (r) {
              4 === e.readyState && s(r), u && u.apply(e, t)
            }
          }
          return c && c.apply(this, arguments)
        }
      } catch (e) {
        n.reportSysError(e)
      }
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(32), o = r(12);
    e.exports = function () {
      if ("function" == typeof window.fetch && !window.fetch._owl) {
        var e = window.location && window.location.protocol;
        if ("file:" !== e) {
          var t = window.fetch;
          window.fetch = function (e, r) {
            var i = Array.prototype.slice.call(arguments, 0);
            if (r && ("HEAD" === r.method || "no-cors" === r.mode)) return t.apply(window, i);
            var a = +new Date, s = (e && "string" != typeof e ? e.url : e) || "";
            return t && t.apply(window, i).then(function (e) {
              try {
                if (!e || "function" != typeof e.clone) return e;
                var t = e.clone(), r = t.headers, i = "";
                if (r && "function" == typeof r.get) {
                  var c = r.get("content-type");
                  if (c && !/(text)|(json)/.test(c)) return e;
                  i = r.get("x-forbid-reason") || ""
                }
                return n.trigger("fetchCall", {
                  url: s,
                  duration: +new Date - a,
                  isSuccess: !0,
                  ok: t.ok,
                  statusCode: t.status,
                  statusText: t.statusText,
                  xForbidReason: i
                }), e
              } catch (t) {
                return o.reportSysError(t), e
              }
            }).catch(function (e) {
              throw n.trigger("fetchCall", {
                url: s,
                duration: +new Date - a,
                isSuccess: !1,
                errName: e.name,
                errMsg: e.stack || e.message
              }), e
            })
          }, window.fetch._owl = !0
        }
      }
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(9), o = r(4), i = r(6).version, a = r(3), s = .01;
    e.exports = function (e, t) {
      if (e && t && !(Math.random() > s)) {
        var r = function (e, t) {
          try {
            e = e.split(".").map(function (e) {
              return parseInt(e)
            }), t = t.split(".").map(function (e) {
              return parseInt(e)
            });
            var r = void 0;
            return r = e[0] !== t[0] ? e[0] - t[0] : e[1] !== t[1] ? e[1] - t[1] : e[2] - t[2], r >= 0
          } catch (e) {
            return a.ignore(e), !1
          }
        };
        if (!r(t.cfgManager.get("version"), i)) {
          var c = {
            v: 1,
            rate: s,
            project: e,
            version: "v_" + i,
            pageurl: encodeURIComponent(window.location.href),
            count: 1
          }, u = t.cfgManager.url + "/api/version";
          u = o.stringify(u, c), setTimeout(function () {
            n({type: "GET", url: u})
          }, 1500)
        }
      }
    }
  }])
});