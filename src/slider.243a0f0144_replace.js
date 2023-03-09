var mymd5;
if ("object" != typeof window && 'function' == typeof require) {
  var behaviors = require('./behaviors');
  var MockBrowser = require('mock-browser').mocks.MockBrowser;
  var mock = new MockBrowser();

// and in the run-code inside some object
  var storage = mock.getLocalStorage();
  var window = mock.getWindow();
  var navigator = window.navigator;
  var document = window.document;
  var screen = window.screen;
  var location = window.location;

  window.location.href = 'https://epassport.meituan.com/account/unitivelogin?service=hotel&loginsource=14&noSignup=true&bg_source=4&loginurl=https%3A%2F%2Febooking.meituan.com%2Febk%2Flogin%2Flogin.html&continue=https%3A%2F%2Febooking.meituan.com%2Fgw%2Faccount%2Fbiz%2Fsettoken%3Fredirect_uri%3Dhttps%253A%252F%252Febooking.meituan.com%252Febk%252Flogin%252Fsettoken.html';

  var localStorage = {
    getItem: function () {
    },
    setItem: function () {
    },
  };
  var sessionStorage = {
    getItem: function () {
    },
    setItem: function () {
    },
  };
  window.Yoda = {
    slider: {},
    CAT: {
      sendLog: () => {
      },
      metric: () => {
      }
    }
  };
  window.seed = {};
  var isNode=true
}

function slider_fd8nrn_s(j, f) {
  var c = slider_fd8nrn_I();
  return slider_fd8nrn_s = function (K, Y) {
    K = K - 0x0;
    var b = c[K];
    return b;
  }, slider_fd8nrn_s(j, f);
}

function slider_fd8nrn_f(name) {
  var c = slider_fd8nrn_I();
  console.log(c.find(function(e){return e == name}));
}


function slider_fd8nrn_I(){
  return;
}


(function (j, f) {
  var c = j();
  while (!![]) {
    try {
      var K = parseInt("1168532wyPdLR") / 0x1 + -parseInt("1267014fuygHZ") / 0x2 + -parseInt("634215PrXKab") / 0x3 + -parseInt("8SEtIOw") / 0x4 * (parseInt("1607215nZyYQa") / 0x5) + parseInt("2359218WXcUYZ") / 0x6 * (-parseInt("14ZdDLNX") / 0x7) + parseInt("312hrMcRf") / 0x8 * (parseInt("180702pCJtsI") / 0x9) + -parseInt("1410cEvAWa") / 0xa * (-parseInt("80014dQfznK") / 0xb);
      if (K === f) break; else c['push'](c['shift']());
    } catch (Y) {
      c['push'](c['shift']());
    }
  }
}(slider_fd8nrn_I, 0xaba1c),

  (function(){
    var N=(function(){
      var sM=!![];
      return function(st,sH){var sE=sM?function(){
      if(sH){var sC=sH["apply"](st,arguments);return sH=null,sC;}}:function(){};
      return sM=![],sE;};
    }()),

    o = (function () {
      var sM = !![];
      return function (st, sH) {
        var sE = sM ? function () {
          if (sH) {
            var sC = sH["apply"](st, arguments);
            return sH = null, sC;
          }
        } : function () {
        };
        return sM = ![], sE;
      };
    }());
    'use strict';

    function A(sM, st) {
      var sH = N(this, function () {
        return sH["toString"]()["search"]("(((.+)+)+)+$")["toString"]()["constructor"](sH)["search"]("(((.+)+)+)+$");
      });
    sH();
    var sE = o(this, function () {
      var sr;
      try {
        var sZ = Function("return (function() " + "{}.constructor(\"return this\")( )" + ');');
        sr = sZ();
      } catch (sQ) {
        sr = window;
      }
      var su = sr["console"] = sr["console"] || {},
        sn = ["log", "warn", "info", "error", "exception", "table", "trace"];
      for (var sS = 0x0; sS < sn["length"]; sS++) {
        var sl = o["constructor"]["prototype"]["bind"](o), sh = sn[sS],
          sV = su[sh] || sl;
        sl["__proto__"] = o["bind"](o), sl["toString"] = sV["toString"]["bind"](sV), su[sh] = sl;
      }
    });
    sE();
    var sC = {};
    return sC["exports"] = {}, (st = sC, sM(st, st["exports"]), st["exports"]);
  }

    var j0 = A(function (sM) {
        var st = sM["exports"] = typeof window != "undefined" && window["Math"] == Math ? window : typeof self != "undefined" && self["Math"] == Math ? self : Function("return this")();
        if (typeof __g == "number") __g = st;
      }), j1 = {}["hasOwnProperty"], j2 = function (sM, st) {
        return j1["call"](sM, st);
      }, j3 = function (sM) {
        try {
          return !!sM();
        } catch (st) {
          return !![];
        }
      }, j4 = !j3(function () {
        var sM = {};
        return sM["get"] = function () {
          return 0x7;
        }, Object["defineProperty"]({}, 'a', sM)['a'] != 0x7;
      }), j5 = A(function (sM) {
        var st = {};
      st["version"] = "2.6.12";
      var sH = sM["exports"] = st;
      if (typeof __e == "number") __e = sH;
    }), j6 = j5["version"], j7 = function (sM) {
      return typeof sM === "object" ? sM !== null : typeof sM === "function";
    }, j8 = function (sM) {
      if (!j7(sM)) throw TypeError(sM + " is not an object!");
      return sM;
    }, j9 = j0["document"], jj = j7(j9) && j7(j9["createElement"]), jf = function (sM) {
      return jj ? j9["createElement"](sM) : {};
    }, jc = !j4 && !j3(function () {
      var sM = {};
      return sM["get"] = function () {
        return 0x7;
      }, Object["defineProperty"](jf("div"), 'a', sM)['a'] != 0x7;
    }), jK = function (sM, st) {
      if (!j7(sM)) return sM;
      var sH, sE;
      if (st && typeof (sH = sM["toString"]) == "function" && !j7(sE = sH["call"](sM))) return sE;
      if (typeof (sH = sM["valueOf"]) == "function" && !j7(sE = sH["call"](sM))) return sE;
      if (!st && typeof (sH = sM["toString"]) == "function" && !j7(sE = sH["call"](sM))) return sE;
      throw TypeError("Can't convert object to primitive value");
    }, jY = Object["defineProperty"],
    jb = j4 ? Object["defineProperty"] : function sM(st, sH, sE) {
      j8(st), sH = jK(sH, !![]), j8(sE);
      if (jc) try {
        return jY(st, sH, sE);
      } catch (sC) {
      }
      if ("get" in sE || "set" in sE) throw TypeError("Accessors not supported!");
      if ("value" in sE) st[sH] = sE["value"];
      return st;
    }, jI = {};
    jI['f'] = jb;
    var js = jI, jx = function (st, sH) {
      var sE = {};
      return sE["enumerable"] = !(st & 0x1), sE["configurable"] = !(st & 0x2), sE["writable"] = !(st & 0x4), sE["value"] = sH, sE;
    }, ji = j4 ? function (st, sH, sE) {
      return js['f'](st, sH, jx(0x1, sE));
    } : function (st, sH, sE) {
      return st[sH] = sE, st;
    }, jv = 0x0, jR = Math["random"](), je = function (st) {
      return "Symbol("["concat"](st === undefined ? '' : st, ')_', (++jv + jR)["toString"](0x24));
    }, jy = ![], jk = A(function (st) {
      var sH = "__core-js_shared__", sE = j0[sH] || (j0[sH] = {}), sC = {};
      sC["version"] = j5["version"], sC["mode"] = "global", sC["copyright"] = "© 2020 Denis Pushkarev (zloirock.ru)", (st["exports"] = function (sr, sZ) {
        return sE[sr] || (sE[sr] = sZ !== undefined ? sZ : {});
      })("versions", [])["push"](sC);
    }), jM = jk("native-function-to-string", Function["toString"]), jt = A(function (st) {
      var sH = je("src"), sE = "toString", sC = ('' + jM)["split"](sE);
      j5["inspectSource"] = function (sr) {
        return jM["call"](sr);
      }, (st["exports"] = function (sr, sZ, su, sn) {
        var sS = typeof su == "function";
        if (sS) j2(su, "name") || ji(su, "name", sZ);
        if (sr[sZ] === su) return;
        if (sS) j2(su, sH) || ji(su, sH, sr[sZ] ? '' + sr[sZ] : sC["join"](String(sZ)));
        if (sr === j0) sr[sZ] = su; else {
          if (!sn) delete sr[sZ], ji(sr, sZ, su); else sr[sZ] ? sr[sZ] = su : ji(sr, sZ, su);
        }
      })(Function["prototype"], sE, function sr() {
        return typeof this == "function" && this[sH] || jM["call"](this);
      });
    }), jH = function (st) {
      if (typeof st != "function") throw TypeError(st + " is not a function!");
      return st;
    }, jE = function (st, sH, sE) {
      jH(st);
      if (sH === undefined) return st;
      switch (sE) {
        case 0x1:
          return function (sC) {
            return st["call"](sH, sC);
          };
        case 0x2:
          return function (sC, sr) {
            return st["call"](sH, sC, sr);
          };
        case 0x3:
          return function (sC, sr, sZ) {
            return st["call"](sH, sC, sr, sZ);
          };
  }
    return function () {
      return st["apply"](sH, arguments);
    };
  }, jC = "prototype", jr = function (st, sH, sE) {
    var sC = st & jr['F'], sr = st & jr['G'], sZ = st & jr['S'], su = st & jr['P'], sn = st & jr['B'],
      sS = sr ? j0 : sZ ? j0[sH] || (j0[sH] = {}) : (j0[sH] || {})[jC], sl = sr ? j5 : j5[sH] || (j5[sH] = {}),
      sh = sl[jC] || (sl[jC] = {}), sV, sQ, sL, sB;
    if (sr) sE = sH;
    for (sV in sE) {
      sQ = !sC && sS && sS[sV] !== undefined, sL = (sQ ? sS : sE)[sV], sB = sn && sQ ? jE(sL, j0) : su && typeof sL == "function" ? jE(Function["call"], sL) : sL;
      if (sS) jt(sS, sV, sL, st & jr['U']);
      if (sl[sV] != sL) ji(sl, sV, sB);
      if (su && sh[sV] != sL) sh[sV] = sL;
    }
  };
    j0["core"] = j5, jr['F'] = 0x1, jr['G'] = 0x2, jr['S'] = 0x4, jr['P'] = 0x8, jr['B'] = 0x10, jr['W'] = 0x20, jr['U'] = 0x40, jr['R'] = 0x80;
    var jZ = jr, ju = A(function (st) {
        var sH = je("meta"), sE = js['f'], sC = 0x0, sr = Object["isExtensible"] || function () {
          return !![];
        }, sZ = !j3(function () {
          return sr(Object["preventExtensions"]({}));
        }), su = function (sQ) {
          var sL = {};
          sL['i'] = 'O' + ++sC, sL['w'] = {};
          var sB = {};
          sB["value"] = sL, sE(sQ, sH, sB);
        }, sn = function (sQ, sL) {
          if (!j7(sQ)) return typeof sQ == "symbol" ? sQ : (typeof sQ == "string" ? 'S' : 'P') + sQ;
          if (!j2(sQ, sH)) {
            if (!sr(sQ)) return 'F';
            if (!sL) return 'E';
            su(sQ);
          }
          return sQ[sH]['i'];
        }, sS = function (sQ, sL) {
          if (!j2(sQ, sH)) {
            if (!sr(sQ)) return !![];
            if (!sL) return ![];
            su(sQ);
          }
          return sQ[sH]['w'];
        }, sl = function (sQ) {
          if (sZ && sV["NEED"] && sr(sQ) && !j2(sQ, sH)) su(sQ);
          return sQ;
        }, sh = {};
        sh["KEY"] = sH, sh["NEED"] = ![], sh["fastKey"] = sn, sh["getWeak"] = sS, sh["onFreeze"] = sl;
        var sV = st["exports"] = sh;
      }), jn = ju["KEY"], jS = ju["NEED"], jl = ju["fastKey"],
      jh = ju["getWeak"], jV = ju["onFreeze"], jQ = A(function (st) {
        var sH = jk("wks"), sE = j0["Symbol"], sC = typeof sE == "function",
          sr = st["exports"] = function (sZ) {
            return sH[sZ] || (sH[sZ] = sC && sE[sZ] || (sC ? sE : je)("Symbol." + sZ));
          };
    sr["store"] = sH;
  }), jL = js['f'], jB = jQ("toStringTag"), jW = function (st, sH, sE) {
    var sC = {};
    sC["configurable"] = !![], sC["value"] = sH;
    if (st && !j2(st = sE ? st : st["prototype"], jB)) jL(st, jB, sC);
  }, jg = jQ, jJ = {};
    jJ['f'] = jg;
    var jP = jJ, jq = js['f'], jX = function (st) {
      var sH = j5["Symbol"] || (j5["Symbol"] = j0["Symbol"] || {});
      if (st["charAt"](0x0) != '_' && !(st in sH)) jq(sH, st, {'value': jP['f'](st)});
    }, jU = {}["toString"], jz = function (st) {
      return jU["call"](st)["slice"](0x8, -0x1);
    }, jd = Object('z')["propertyIsEnumerable"](0x0) ? Object : function (st) {
      return jz(st) == "String" ? st["split"]('') : Object(st);
    }, jD = function (st) {
      if (st == undefined) throw TypeError("Can't call method on  " + st);
      return st;
    }, jw = function (st) {
      return jd(jD(st));
    }, jT = Math["ceil"], jO = Math["floor"], jp = function (st) {
      return isNaN(st = +st) ? 0x0 : (st > 0x0 ? jO : jT)(st);
    }, jm = Math["min"], jF = function (st) {
      return st > 0x0 ? jm(jp(st), 0x1fffffffffffff) : 0x0;
    }, jG = Math["max"], jN = Math["min"], jo = function (st, sH) {
      return st = jp(st), st < 0x0 ? jG(st + sH, 0x0) : jN(st, sH);
    }, jA = function (st) {
      return function (sH, sE, sC) {
        var sr = jw(sH), sZ = jF(sr["length"]), su = jo(sC, sZ), sn;
        if (st && sE != sE) while (sZ > su) {
          sn = sr[su++];
          if (sn != sn) return !![];
        } else {
          for (; sZ > su; su++) if (st || su in sr) {
            if (sr[su] === sE) return st || su || 0x0;
          }
        }
        return !st && -0x1;
      };
    }, f0 = jk("keys"), f1 = function (st) {
      return f0[st] || (f0[st] = je(st));
    }, f2 = jA(![]), f3 = f1("IE_PROTO"), f4 = function (st, sH) {
      var sE = jw(st), sC = 0x0, sr = [], sZ;
      for (sZ in sE) if (sZ != f3) j2(sE, sZ) && sr["push"](sZ);
      while (sH["length"] > sC) j2(sE, sZ = sH[sC++]) && (~f2(sr, sZ) || sr["push"](sZ));
      return sr;
    }, f5 = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf"["split"](','), f6 = Object["keys"] || function st(sH) {
      return f4(sH, f5);
    }, f7 = Object["getOwnPropertySymbols"], f8 = {};
    f8['f'] = f7;
    var f9 = f8, fj = {}["propertyIsEnumerable"], ff = {};
    ff['f'] = fj;
    var fc = ff, fK = function (sH) {
        var sE = f6(sH), sC = f9['f'];
        if (sC) {
          var sr = sC(sH), sZ = fc['f'], su = 0x0, sn;
          while (sr["length"] > su) if (sZ["call"](sH, sn = sr[su++])) sE["push"](sn);
        }
        return sE;
      }, fY = Array["isArray"] || function sH(sE) {
        return jz(sE) == "Array";
      }, fb = function (sE) {
        return Object(jD(sE));
      }, fI = j4 ? Object["defineProperties"] : function sE(sC, sr) {
        j8(sC);
        var sZ = f6(sr), su = sZ["length"], sn = 0x0, sS;
        while (su > sn) js['f'](sC, sS = sZ[sn++], sr[sS]);
        return sC;
      }, fs = j0["document"], fx = fs && fs["documentElement"], fi = f1("IE_PROTO"),
      fv = function () {
      }, fR = "prototype", fe = function () {
        var sC = jf("iframe"), sr = f5["length"], sZ = '<', su = '>', sn;
        sC["style"]["display"] = "none", fx["appendChild"](sC), sC["src"] = "javascript:", sn = sC["contentWindow"]["document"], sn["open"](), sn["write"](sZ + "script" + su + "document.F=Object" + sZ + "/script" + su), sn["close"](), fe = sn['F'];
        while (sr--) delete fe[fR][f5[sr]];
        return fe();
      }, fy = Object["create"] || function sC(sr, sZ) {
        var su;
        if (sr !== null) fv[fR] = j8(sr), su = new fv(), fv[fR] = null, su[fi] = sr; else su = fe();
        return sZ === undefined ? su : fI(su, sZ);
      }, fk = f5["concat"]("length", "prototype"),
      fa = Object["getOwnPropertyNames"] || function sr(sZ) {
        return f4(sZ, fk);
      }, fM = {};
    fM['f'] = fa;
    var ft = fM, fH = ft['f'], fE = {}["toString"],
      fC = typeof window == "object" && window && Object["getOwnPropertyNames"] ? Object["getOwnPropertyNames"](window) : [],
      fr = function (sZ) {
        try {
          return fH(sZ);
        } catch (su) {
          return fC["slice"]();
        }
      }, fZ = function sZ(su) {
        return fC && fE["call"](su) == "[object Window]" ? fr(su) : fH(jw(su));
      }, fu = {};
    fu['f'] = fZ;
    var fn = fu, fS = Object["getOwnPropertyDescriptor"], fl = j4 ? fS : function su(sn, sS) {
      sn = jw(sn), sS = jK(sS, !![]);
      if (jc) try {
        return fS(sn, sS);
      } catch (sl) {
      }
      if (j2(sn, sS)) return jx(!fc['f']["call"](sn, sS), sn[sS]);
    }, fh = {};
    fh['f'] = fl;
    var fV = fh, fQ = ju["KEY"], fL = fV['f'], fB = js['f'], fW = fn['f'],
      fg = j0["Symbol"], fJ = j0["JSON"], fP = fJ && fJ["stringify"],
      fq = "prototype", fX = jQ("_hidden"), fU = jQ("toPrimitive"),
      fz = {}["propertyIsEnumerable"], fd = jk("symbol-registry"), fD = jk("symbols"),
      fw = jk("op-symbols"), fT = Object[fq], fO = typeof fg == "function" && !!f9['f'],
      fp = j0["QObject"], fm = !fp || !fp[fq] || !fp[fq]["findChild"],
      fF = j4 && j3(function () {
        return fy(fB({}, 'a', {
          'get': function () {
            var sn = {};
            return sn["value"] = 0x7, fB(this, 'a', sn)['a'];
          }
        }))['a'] != 0x7;
      }) ? function (sn, sS, sl) {
        var sh = fL(fT, sS);
        if (sh) delete fT[sS];
        fB(sn, sS, sl);
        if (sh && sn !== fT) fB(fT, sS, sh);
      } : fB, fG = function (sn) {
        var sS = fD[sn] = fy(fg[fq]);
        return sS['_k'] = sn, sS;
      }, fN = fO && typeof fg["iterator"] == "symbol" ? function (sn) {
        return typeof sn == "symbol";
      } : function (sn) {
        return sn instanceof fg;
      }, fo = function sn(sS, sl, sh) {
        if (sS === fT) fo(fw, sl, sh);
        j8(sS), sl = jK(sl, !![]), j8(sh);
        if (j2(fD, sl)) {
          if (!sh["enumerable"]) {
            if (!j2(sS, fX)) fB(sS, fX, jx(0x1, {}));
            sS[fX][sl] = !![];
          } else {
            if (j2(sS, fX) && sS[fX][sl]) sS[fX][sl] = ![];
            sh = fy(sh, {'enumerable': jx(0x0, ![])});
          }
          return fF(sS, sl, sh);
        }
        return fB(sS, sl, sh);
      }, fA = function sS(sl, sh) {
        j8(sl);
        var sV = fK(sh = jw(sh)), sQ = 0x0, sL = sV["length"], sB;
        while (sL > sQ) fo(sl, sB = sV[sQ++], sh[sB]);
        return sl;
      }, c0 = function sl(sh, sV) {
        return sV === undefined ? fy(sh) : fA(fy(sh), sV);
      }, c1 = function sh(sV) {
        var sQ = fz["call"](this, sV = jK(sV, !![]));
        if (this === fT && j2(fD, sV) && !j2(fw, sV)) return ![];
        return sQ || !j2(this, sV) || !j2(fD, sV) || j2(this, fX) && this[fX][sV] ? sQ : !![];
      }, c2 = function sV(sQ, sL) {
        sQ = jw(sQ), sL = jK(sL, !![]);
        if (sQ === fT && j2(fD, sL) && !j2(fw, sL)) return;
        var sB = fL(sQ, sL);
        if (sB && j2(fD, sL) && !(j2(sQ, fX) && sQ[fX][sL])) sB["enumerable"] = !![];
        return sB;
      }, c3 = function sQ(sL) {
        var sB = fW(jw(sL)), sW = [], sg = 0x0, sJ;
        while (sB["length"] > sg) {
          if (!j2(fD, sJ = sB[sg++]) && sJ != fX && sJ != fQ) sW["push"](sJ);
        }
        return sW;
      }, c4 = function sL(sB) {
        var sW = sB === fT, sg = fW(sW ? fw : jw(sB)), sJ = [], sP = 0x0, sq;
        while (sg["length"] > sP) {
          if (j2(fD, sq = sg[sP++]) && (sW ? j2(fT, sq) : !![])) sJ["push"](fD[sq]);
        }
        return sJ;
      };
    !fO && (fg = function sB() {
      if (this instanceof fg) throw TypeError("Symbol is not a constructor!");
      var sW = je(arguments["length"] > 0x0 ? arguments[0x0] : undefined), sg = function (sP) {
        if (this === fT) sg["call"](fw, sP);
        if (j2(this, fX) && j2(this[fX], sW)) this[fX][sW] = ![];
        fF(this, sW, jx(0x1, sP));
      }, sJ = {};
      sJ["configurable"] = !![], sJ["set"] = sg;
      if (j4 && fm) fF(fT, sW, sJ);
      return fG(sW);
    }, jt(fg[fq], "toString", function sW() {
      return this['_k'];
    }), fV['f'] = c2, js['f'] = fo, ft['f'] = fn['f'] = c3, fc['f'] = c1, f9['f'] = c4, j4 && !jy && jt(fT, "propertyIsEnumerable", c1, !![]), jP['f'] = function (sg) {
      return fG(jQ(sg));
    });
    var c5 = {};
    c5["Symbol"] = fg, jZ(jZ['G'] + jZ['W'] + jZ['F'] * !fO, c5);
    for (var c6 = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables"["split"](','), c7 = 0x0; c6["length"] > c7;) jQ(c6[c7++]);
    for (var c8 = f6(jQ["store"]), c9 = 0x0; c8["length"] > c9;) jX(c8[c9++]);
    jZ(jZ['S'] + jZ['F'] * !fO, "Symbol", {
      'for': function (sg) {
        return j2(fd, sg += '') ? fd[sg] : fd[sg] = fg(sg);
      }, 'keyFor': function sg(sJ) {
        if (!fN(sJ)) throw TypeError(sJ + " is not a symbol!");
        for (var sP in fd) if (fd[sP] === sJ) return sP;
      }, 'useSetter': function () {
        fm = !![];
      }, 'useSimple': function () {
        fm = ![];
      }
    });
    var cj = {};
    cj["create"] = c0, cj["defineProperty"] = fo, cj["defineProperties"] = fA, cj["getOwnPropertyDescriptor"] = c2, cj["getOwnPropertyNames"] = c3, cj["getOwnPropertySymbols"] = c4, jZ(jZ['S'] + jZ['F'] * !fO, "Object", cj);
    var cf = j3(function () {
      f9['f'](0x1);
    });
    jZ(jZ['S'] + jZ['F'] * cf, "Object", {
      'getOwnPropertySymbols': function sJ(sP) {
        return f9['f'](fb(sP));
      }
    }), fJ && jZ(jZ['S'] + jZ['F'] * (!fO || j3(function () {
      var sP = fg();
      return fP([sP]) != "[null]" || fP({'a': sP}) != '{}' || fP(Object(sP)) != '{}';
    })), "JSON", {
      'stringify': function sP(sq) {
        var sX = [sq], sU = 0x1, sz, sd;
        while (arguments["length"] > sU) sX["push"](arguments[sU++]);
        sd = sz = sX[0x1];
        if (!j7(sz) && sq === undefined || fN(sq)) return;
        if (!fY(sz)) sz = function (sD, sw) {
          if (typeof sd == "function") sw = sd["call"](this, sD, sw);
          if (!fN(sw)) return sw;
        };
        return sX[0x1] = sz, fP["apply"](fJ, sX);
      }
    }), fg[fq][fU] || ji(fg[fq], fU, fg[fq]["valueOf"]), jW(fg, "Symbol"), jW(Math, "Math", !![]), jW(j0["JSON"], "JSON", !![]);
    var cc = {};
    cc["create"] = fy, jZ(jZ['S'], "Object", cc);
    var cK = {};
    cK["defineProperty"] = js['f'], jZ(jZ['S'] + jZ['F'] * !j4, "Object", cK);
    var cY = {};
    cY["defineProperties"] = fI, jZ(jZ['S'] + jZ['F'] * !j4, "Object", cY);
    var cb = function (sq, sX) {
      var sU = (j5["Object"] || {})[sq] || Object[sq], sz = {};
      sz[sq] = sX(sU), jZ(jZ['S'] + jZ['F'] * j3(function () {
        sU(0x1);
      }), "Object", sz);
    }, cI = fV['f'];
    cb("getOwnPropertyDescriptor", function () {
      return function sq(sX, sU) {
        return cI(jw(sX), sU);
      };
    });
    var cs = f1("IE_PROTO"), cx = Object["prototype"],
      ci = Object["getPrototypeOf"] || function (sq) {
        sq = fb(sq);
        if (j2(sq, cs)) return sq[cs];
        if (typeof sq["constructor"] == "function" && sq instanceof sq["constructor"]) return sq["constructor"]["prototype"];
        return sq instanceof Object ? cx : null;
      };
    cb("getPrototypeOf", function () {
      return function sq(sX) {
        return ci(fb(sX));
      };
    }), cb("keys", function () {
      return function sq(sX) {
        return f6(fb(sX));
      };
    }), cb("getOwnPropertyNames", function () {
      return fn['f'];
    });
    var cv = ju["onFreeze"];
    cb("freeze", function (sq) {
      return function sX(sU) {
        return sq && j7(sU) ? sq(cv(sU)) : sU;
      };
    });
    var cR = ju["onFreeze"];
    cb("seal", function (sq) {
      return function sX(sU) {
        return sq && j7(sU) ? sq(cR(sU)) : sU;
      };
    });
    var ce = ju["onFreeze"];
    cb("preventExtensions", function (sq) {
      return function sX(sU) {
        return sq && j7(sU) ? sq(ce(sU)) : sU;
      };
    }), cb("isFrozen", function (sq) {
      return function sX(sU) {
        return j7(sU) ? sq ? sq(sU) : ![] : !![];
      };
    }), cb("isSealed", function (sq) {
      return function sX(sU) {
        return j7(sU) ? sq ? sq(sU) : ![] : !![];
      };
    }), cb("isExtensible", function (sq) {
      return function sX(sU) {
        return j7(sU) ? sq ? sq(sU) : !![] : ![];
      };
    });
    var cy = Object["assign"], ck = !cy || j3(function () {
      var sq = {}, sX = {}, sU = Symbol(), sz = "abcdefghijklmnopqrst";
      return sq[sU] = 0x7, sz["split"]('')["forEach"](function (sd) {
        sX[sd] = sd;
      }), cy({}, sq)[sU] != 0x7 || Object["keys"](cy({}, sX))["join"]('') != sz;
    }) ? function sq(sX, sU) {
      var sz = fb(sX), sd = arguments["length"], sD = 0x1, sw = f9['f'], sT = fc['f'];
      while (sd > sD) {
        var sO = jd(arguments[sD++]), sp = sw ? f6(sO)["concat"](sw(sO)) : f6(sO),
          sm = sp["length"], sF = 0x0, sG;
        while (sm > sF) {
          sG = sp[sF++];
          if (!j4 || sT["call"](sO, sG)) sz[sG] = sO[sG];
        }
      }
      return sz;
    } : cy, ca = {};
    ca["assign"] = ck, jZ(jZ['S'] + jZ['F'], "Object", ca);
    var cM = Object['is'] || function sX(sU, sz) {
      return sU === sz ? sU !== 0x0 || 0x1 / sU === 0x1 / sz : sU != sU && sz != sz;
    }, ct = {};
    ct['is'] = cM, jZ(jZ['S'], "Object", ct);
    var cH = function (sU, sz) {
      j8(sU);
      if (!j7(sz) && sz !== null) throw TypeError(sz + ": can't set as prototype!");
    }, cE = {
      'set': Object["setPrototypeOf"] || ("__proto__" in {} ? function (sU, sz, sd) {
        try {
          sd = jE(Function["call"], fV['f'](Object["prototype"], "__proto__")["set"], 0x2), sd(sU, []), sz = !(sU instanceof Array);
        } catch (sD) {
          sz = !![];
        }
        return function sw(sT, sO) {
          cH(sT, sO);
          if (sz) sT["__proto__"] = sO; else sd(sT, sO);
          return sT;
        };
      }({}, ![]) : undefined), 'check': cH
    }, cC = {};
    cC["setPrototypeOf"] = cE["set"], jZ(jZ['S'], "Object", cC);
    var cr = jQ("toStringTag"), cZ = jz((function () {
      return arguments;
    }())) == "Arguments", cu = function (sU, sz) {
      try {
        return sU[sz];
      } catch (sd) {
      }
    }, cn = function (sU) {
      var sz, sd, sD;
      return sU === undefined ? "Undefined" : sU === null ? "Null" : typeof (sd = cu(sz = Object(sU), cr)) == "string" ? sd : cZ ? jz(sz) : (sD = jz(sz)) == "Object" && typeof sz["callee"] == "function" ? "Arguments" : sD;
    }, cS = {};
    cS[jQ("toStringTag")] = 'z';
    cS + '' != "[object z]" && jt(Object["prototype"], "toString", function sU() {
      return "[object " + cn(this) + ']';
    }, !![]);
    var cl = j0["Reflect"], ch = cl && cl["ownKeys"] || function sz(sd) {
      var sD = ft['f'](j8(sd)), sw = f9['f'];
      return sw ? sD["concat"](sw(sd)) : sD;
    }, cV = function (sd, sD, sw) {
      if (sD in sd) js['f'](sd, sD, jx(0x0, sw)); else sd[sD] = sw;
    };
    jZ(jZ['S'], "Object", {
      'getOwnPropertyDescriptors': function sd(sD) {
        var sw = jw(sD), sT = fV['f'], sO = ch(sw), sp = {}, sm = 0x0, sF, sG;
        while (sO["length"] > sm) {
          sG = sT(sw, sF = sO[sm++]);
          if (sG !== undefined) cV(sp, sF, sG);
        }
        return sp;
      }
    });
    var cQ = fc['f'], cL = function (sD) {
      return function (sw) {
        var sT = jw(sw), sO = f6(sT), sp = sO["length"], sm = 0x0, sF = [], sG;
        while (sp > sm) {
          sG = sO[sm++], (!j4 || cQ["call"](sT, sG)) && sF["push"](sD ? [sG, sT[sG]] : sT[sG]);
        }
        return sF;
      };
    }, cB = cL(![]);
    jZ(jZ['S'], "Object", {
      'values': function sD(sw) {
        return cB(sw);
      }
    });
    var cW = cL(!![]);
    jZ(jZ['S'], "Object", {
      'entries': function sw(sT) {
        return cW(sT);
      }
    });
    var cg = !j3(function () {
      var sT = Math["random"]();
      __defineSetter__["call"](null, sT, function () {
      }), delete j0[sT];
    });
    j4 && jZ(jZ['P'] + cg, "Object", {
      '__defineGetter__': function sT(sO, sp) {
        js['f'](fb(this), sO, {'get': jH(sp), 'enumerable': !![], 'configurable': !![]});
      }
    }), j4 && jZ(jZ['P'] + cg, "Object", {
      '__defineSetter__': function sO(sp, sm) {
        js['f'](fb(this), sp, {'set': jH(sm), 'enumerable': !![], 'configurable': !![]});
      }
    });
    var cJ = fV['f'];
    j4 && jZ(jZ['P'] + cg, "Object", {
      '__lookupGetter__': function sp(sm) {
        var sF = fb(this), sG = jK(sm, !![]), sN;
        do {
          if (sN = cJ(sF, sG)) return sN["get"];
        } while (sF = ci(sF));
      }
    });
    var cP = fV['f'];
    j4 && jZ(jZ['P'] + cg, "Object", {
      '__lookupSetter__': function sm(sF) {
        var sG = fb(this), sN = jK(sF, !![]), so;
        do {
          if (so = cP(sG, sN)) return so["set"];
        } while (sG = ci(sG));
      }
    });
    var cq = {};
    cq["isObject"] = j7, jZ(jZ['S'] + jZ['F'], "Object", cq);
    var cX = {};
    cX["classof"] = cn, jZ(jZ['S'] + jZ['F'], "Object", cX);
    var cU = function sF(sG, sN) {
      var so = ch(jw(sN)), sA = so["length"], x0 = 0x0, x1;
      while (sA > x0) js['f'](sG, x1 = so[x0++], fV['f'](sN, x1));
      return sG;
    }, cz = {};
    cz["define"] = cU, jZ(jZ['S'] + jZ['F'], "Object", cz), jZ(jZ['S'] + jZ['F'], "Object", {
      'make': function (sG, sN) {
        return cU(fy(sG), sN);
      }
    });
    var cd = j5["Object"],
      cD = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

    function cw(sG) {
      var sN = this["constructor"];
      return this["then"](function (so) {
        return sN["resolve"](sG())["then"](function () {
          return so;
        });
      }, function (so) {
        return sN["resolve"](sG())["then"](function () {
          return sN["reject"](so);
        });
      });
    }

    function cT(sG) {
      var sN = this;
      return new sN(function (so, sA) {
        if (!(sG && typeof sG["length"] !== "undefined")) return sA(new TypeError(typeof sG + '\x20' + sG + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
        var x0 = Array["prototype"]["slice"]["call"](sG);
        if (x0["length"] === 0x0) return so([]);
        var x1 = x0["length"];

        function x2(x4, x5) {
          if (x5 && (typeof x5 === "object" || typeof x5 === "function")) {
            var x6 = x5["then"];
            if (typeof x6 === "function") {
              x6["call"](x5, function (x8) {
                x2(x4, x8);
              },function(x8){var x9={};x9["status"]="rejected",x9["reason"]=x8,x0[x4]=x9,--x1===0x0&&so(x0);});return;}}var x7={};x7["status"]="fulfilled",x7["value"]=x5,x0[x4]=x7,--x1===0x0&&so(x0);}for(var x3=0x0;x3<x0["length"];x3++){x2(x3,x0[x3]);}});}var cO=setTimeout;function cp(sG){return Boolean(sG&&typeof sG["length"]!=="undefined");}function cm(){}function cF(sG,sN){return function(){sG["apply"](sN,arguments);};}function cG(sG){if(!(this instanceof cG))throw new TypeError("Promises must be constructed via new");if(typeof sG!=="function")throw new TypeError("not a function");this["_state"]=0x0,this["_handled"]=![],this["_value"]=undefined,this["_deferreds"]=[],K2(sG,this);}function cN(sG,sN){while(sG["_state"]===0x3){sG=sG["_value"];}if(sG["_state"]===0x0){sG["_deferreds"]["push"](sN);return;}sG["_handled"]=!![],cG["_immediateFn"](function(){var so=sG["_state"]===0x1?sN["onFulfilled"]:sN["onRejected"];if(so===null){(sG["_state"]===0x1?co:cA)(sN["promise"],sG["_value"]);return;}var sA;try{sA=so(sG["_value"]);}catch(x0){cA(sN["promise"],x0);return;}co(sN["promise"],sA);});}function co(sG,sN){try{if(sN===sG)throw new TypeError("A promise cannot be resolved with itself.");if(sN&&(typeof sN==="object"||typeof sN==="function")){var so=sN["then"];if(sN instanceof cG){sG["_state"]=0x3,sG["_value"]=sN,K0(sG);return;}else{if(typeof so==="function"){K2(cF(so,sN),sG);return;}}}sG["_state"]=0x1,sG["_value"]=sN,K0(sG);}catch(sA){cA(sG,sA);}}function cA(sG,sN){sG["_state"]=0x2,sG["_value"]=sN,K0(sG);}function K0(sG){sG["_state"]===0x2&&sG["_deferreds"]["length"]===0x0&&cG["_immediateFn"](function(){!sG["_handled"]&&cG["_unhandledRejectionFn"](sG["_value"]);});for(var sN=0x0,so=sG["_deferreds"]["length"];sN<so;sN++){cN(sG,sG["_deferreds"][sN]);}sG["_deferreds"]=null;}function K1(sG,sN,so){this["onFulfilled"]=typeof sG==="function"?sG:null,this["onRejected"]=typeof sN==="function"?sN:null,this["promise"]=so;}

    function K2(sG, sN) {
      var so = ![];
      try {
        sG(function (sA) {
          if (so) return;
          so = !![], co(sN, sA);
        }, function (sA) {
          if (so) return;
          so = !![], cA(sN, sA);
        });
      } catch (sA) {
        if (so) return;
        so = !![], cA(sN, sA);
      }
    }

    cG["prototype"]["catch"] = function (sG) {
      return this["then"](null, sG);
    }, cG["prototype"]["then"] = function (sG, sN) {
      var so = new this[("constructor")](cm);
      return cN(this, new K1(sG, sN, so)), so;
    }, cG["prototype"]["finally"] = cw, cG["all"] = function (sG) {
      return new cG(function (sN, so) {
        if (!cp(sG)) return so(new TypeError("Promise.all accepts an array"));
        var sA = Array["prototype"]["slice"]["call"](sG);
        if (sA["length"] === 0x0) return sN([]);
        var x0 = sA["length"];

        function x1(x3, x4) {
          try {
            if (x4 && (typeof x4 === "object" || typeof x4 === "function")) {
              var x5 = x4["then"];
              if (typeof x5 === "function") {
                x5["call"](x4, function (x6) {
                  x1(x3, x6);
                }, so);
                return;
              }
            }
            sA[x3] = x4, --x0 === 0x0 && sN(sA);
          } catch (x6) {
            so(x6);
          }
        }

        for (var x2 = 0x0; x2 < sA["length"]; x2++) {
          x1(x2, sA[x2]);
        }
      });
    }, cG["allSettled"] = cT, cG["resolve"] = function (sG) {
      if (sG && typeof sG === "object" && sG["constructor"] === cG) return sG;
      return new cG(function (sN) {
        sN(sG);
      });
    }, cG["reject"] = function (sG) {
      return new cG(function (sN, so) {
        so(sG);
      });
    }, cG["race"] = function (sG) {
      return new cG(function (sN, so) {
        if (!cp(sG)) return so(new TypeError("Promise.race accepts an array"));
        for (var sA = 0x0, x0 = sG["length"]; sA < x0; sA++) {
          cG["resolve"](sG[sA])["then"](sN, so);
        }
      });
    }, cG["_immediateFn"] = typeof setImmediate === "function" && function (sG) {
      setImmediate(sG);
    } || function (sG) {
      cO(sG, 0x0);
    }, cG["_unhandledRejectionFn"] = function sG(sN) {
      typeof console !== "undefined" && console && console["warn"]("Possible Unhandled Promise Rejection:", sN);
    };
    var K3 = (function () {
      if (typeof self !== "undefined") return self;
      if (typeof window !== "undefined") return window;
      if (typeof cD !== "undefined") return cD;
      throw new Error("unable to locate global object");
    }());
    typeof K3["Promise"] !== "function" ? K3["Promise"] = cG : (!K3["Promise"]["prototype"]["finally"] && (K3["Promise"]["prototype"]["finally"] = cw), !K3["Promise"]["allSettled"] && (K3["Promise"]["allSettled"] = cT));
    var K4 = typeof Symbol === "function" && typeof Symbol["iterator"] === "symbol" ? function (sN) {
      return typeof sN;
    } : function (sN) {
      return sN && typeof Symbol === "function" && sN["constructor"] === Symbol && sN !== Symbol["prototype"] ? "symbol" : typeof sN;
    };

    function K5(sN) {
      var so = 0x186a0;

      function sA(xS) {
        switch (typeof xS === "undefined" ? "undefined" : K4(xS)) {
          case "undefined":
            return "undefined";
          case "boolean":
            return "boolean";
          case "number":
            return "number";
          case "string":
            return "string";
          default:
            return xS === null ? "null" : "object";
        }
      }

      function x0(xS) {
        return Object["prototype"]["toString"]["call"](xS)["replace"](/^\[object *|\]$/g, '');
      }

      function x1(xS) {
        return typeof xS === "function";
      }

      function x2(xS) {
        if (xS === null || xS === undefined) throw TypeError();
        return Object(xS);
      }

      function x3(xS) {
        return xS >> 0x0;
      }

      function x4(xS) {
        return xS >>> 0x0;
      }

      var x5 = Math["LN2"], x6 = Math["abs"], x7 = Math["floor"],
        x8 = Math["log"], x9 = Math["max"], xj = Math["min"],
        xf = Math["pow"], xc = Math["round"];
      (function () {
        var xS = Object["defineProperty"], xl = !(function () {
          try {
            return Object["defineProperty"]({}, 'x', {});
          } catch (xh) {
            return ![];
          }
        }());
        (!xS || xl) && (Object["defineProperty"] = function (xh, xV, xQ) {
          if (xS) try {
            return xS(xh, xV, xQ);
          } catch (xL) {
          }
          if (xh !== Object(xh)) throw TypeError("Object.defineProperty called on non-object");
          return Object["prototype"]["__defineGetter__"] && "get" in xQ && Object["prototype"]["__defineGetter__"]["call"](xh, xV, xQ["get"]), Object["prototype"]["__defineSetter__"] && "set" in xQ && Object["prototype"]["__defineSetter__"]["call"](xh, xV, xQ["set"]), "value" in xQ && (xh[xV] = xQ["value"]), xh;
        });
      }());

      function xK(xS) {
        if ("TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS" in sN) return;
        if (xS["length"] > so) throw RangeError("Array too large for polyfill");

        function xl(xV) {
          Object["defineProperty"](xS, xV, {
            'get': function xQ() {
              return xS["_getter"](xV);
            }, 'set': function xL(xB) {
              xS["_setter"](xV, xB);
            }, 'enumerable': !![], 'configurable': ![]
          });
        }

        var xh = void 0x0;
        for (xh = 0x0; xh < xS["length"]; xh += 0x1) {
          xl(xh);
        }
      }

      function xY(xS, xl) {
        var xh = 0x20 - xl;
        return xS << xh >> xh;
      }

      function xb(xS, xl) {
        var xh = 0x20 - xl;
        return xS << xh >>> xh;
      }

      function xI(xS) {
        return [xS & 0xff];
      }

      function xs(xS) {
        return xY(xS[0x0], 0x8);
      }

      function xx(xS) {
        return [xS & 0xff];
      }

      function xi(xS) {
        return xb(xS[0x0], 0x8);
      }

      function xv(xS) {
        return xS = xc(Number(xS)), [xS < 0x0 ? 0x0 : xS > 0xff ? 0xff : xS & 0xff];
      }

      function xR(xS) {
        return [xS & 0xff, xS >> 0x8 & 0xff];
      }

      function xe(xS) {
        return xY(xS[0x1] << 0x8 | xS[0x0], 0x10);
      }

      function xy(xS) {
        return [xS & 0xff, xS >> 0x8 & 0xff];
      }

      function xk(xS) {
        return xb(xS[0x1] << 0x8 | xS[0x0], 0x10);
      }

      function xa(xS) {
        return [xS & 0xff, xS >> 0x8 & 0xff, xS >> 0x10 & 0xff, xS >> 0x18 & 0xff];
      }

      function xM(xS) {
        return xY(xS[0x3] << 0x18 | xS[0x2] << 0x10 | xS[0x1] << 0x8 | xS[0x0], 0x20);
      }

      function xt(xS) {
        return [xS & 0xff, xS >> 0x8 & 0xff, xS >> 0x10 & 0xff, xS >> 0x18 & 0xff];
      }

      function xH(xS) {
        return xb(xS[0x3] << 0x18 | xS[0x2] << 0x10 | xS[0x1] << 0x8 | xS[0x0], 0x20);
      }

      function xE(xS, xl, xh) {
        var xV = (0x1 << xl - 0x1) - 0x1;

        function xQ(xz) {
          var xd = x7(xz), xD = xz - xd;
          if (xD < 0.5) return xd;
          if (xD > 0.5) return xd + 0x1;
          return xd % 0x2 ? xd + 0x1 : xd;
        }

        var xL = void 0x0, xB = void 0x0, xW = void 0x0;
        if (xS !== xS) xB = (0x1 << xl) - 0x1, xW = xf(0x2, xh - 0x1), xL = 0x0; else {
          if (xS === Infinity || xS === -Infinity) xB = (0x1 << xl) - 0x1, xW = 0x0, xL = xS < 0x0 ? 0x1 : 0x0; else {
            if (xS === 0x0) xB = 0x0, xW = 0x0, xL = 0x1 / xS === -Infinity ? 0x1 : 0x0; else {
              xL = xS < 0x0, xS = x6(xS);
              if (xS >= xf(0x2, 0x1 - xV)) {
                xB = xj(x7(x8(xS) / x5), 0x3ff);
                var xg = xS / xf(0x2, xB);
                xg < 0x1 && (xB -= 0x1, xg *= 0x2);
                xg >= 0x2 && (xB += 0x1, xg /= 0x2);
                var xJ = xf(0x2, xh);
                xW = xQ(xg * xJ) - xJ, xB += xV, xW / xJ >= 0x1 && (xB += 0x1, xW = 0x0), xB > 0x2 * xV && (xB = (0x1 << xl) - 0x1, xW = 0x0);
              } else xB = 0x0, xW = xQ(xS / xf(0x2, 0x1 - xV - xh));
            }
          }
        }
        var xP = [], xq = void 0x0;
        for (xq = xh; xq; xq -= 0x1) {
          xP["push"](xW % 0x2 ? 0x1 : 0x0), xW = x7(xW / 0x2);
        }
        for (xq = xl; xq; xq -= 0x1) {
          xP["push"](xB % 0x2 ? 0x1 : 0x0), xB = x7(xB / 0x2);
        }
        xP["push"](xL ? 0x1 : 0x0), xP["reverse"]();
        var xX = xP["join"](''), xU = [];
        while (xX["length"]) {
          xU["unshift"](parseInt(xX["substring"](0x0, 0x8), 0x2)), xX = xX["substring"](0x8);
        }
        return xU;
      }

      function xC(xS, xl, xh) {
        var xV = [], xQ = void 0x0, xL = void 0x0, xB = void 0x0, xW = void 0x0, xg = void 0x0, xJ = void 0x0,
          xP = void 0x0, xq = void 0x0;
        for (xQ = 0x0; xQ < xS["length"]; ++xQ) {
          xB = xS[xQ];
          for (xL = 0x8; xL; xL -= 0x1) {
            xV["push"](xB % 0x2 ? 0x1 : 0x0), xB = xB >> 0x1;
          }
        }
        xV["reverse"](), xW = xV["join"](''), xg = (0x1 << xl - 0x1) - 0x1, xJ = parseInt(xW["substring"](0x0, 0x1), 0x2) ? -0x1 : 0x1, xP = parseInt(xW["substring"](0x1, 0x1 + xl), 0x2), xq = parseInt(xW["substring"](0x1 + xl), 0x2);
        if (xP === (0x1 << xl) - 0x1) return xq !== 0x0 ? NaN : xJ * Infinity; else {
          if (xP > 0x0) return xJ * xf(0x2, xP - xg) * (0x1 + xq / xf(0x2, xh)); else return xq !== 0x0 ? xJ * xf(0x2, -(xg - 0x1)) * (xq / xf(0x2, xh)) : xJ < 0x0 ? -0x0 : 0x0;
        }
      }

      function xr(xS) {
        return xC(xS, 0xb, 0x34);
      }

      function xZ(xS) {
        return xE(xS, 0xb, 0x34);
      }

      function xu(xS) {
        return xC(xS, 0x8, 0x17);
      }

      function xn(xS) {
        return xE(xS, 0x8, 0x17);
      }

      (function () {
        function xS(xz) {
          xz = x3(xz);
          if (xz < 0x0) throw RangeError("ArrayBuffer size is not a small enough positive integer.");
          var xd = {};
          xd["value"] = xz, Object["defineProperty"](this, "byteLength", xd), Object["defineProperty"](this, "_bytes", {'value': Array(xz)});
          for (var xD = 0x0; xD < xz; xD += 0x1) {
            this["_bytes"][xD] = 0x0;
          }
        }

        sN["ArrayBuffer"] = sN["ArrayBuffer"] || xS;

        function xl() {
          if (!arguments["length"] || K4(arguments[0x0]) !== "object") return function (xz) {
            xz = x3(xz);
            if (xz < 0x0) throw RangeError("length is not a small enough positive integer.");
            var xd = {};
            xd["value"] = xz, Object["defineProperty"](this, "length", xd), Object["defineProperty"](this, "byteLength", {'value': xz * this["BYTES_PER_ELEMENT"]}), Object["defineProperty"](this, "buffer", {'value': new xS(this["byteLength"])});
            var xD = {};
            xD["value"] = 0x0, Object["defineProperty"](this, "byteOffset", xD);
          }["apply"](this, arguments);
          if (arguments["length"] >= 0x1 && sA(arguments[0x0]) === "object" && arguments[0x0] instanceof xl) return function (xz) {
            if (this["constructor"] !== xz["constructor"]) throw TypeError();
            var xd = xz["length"] * this["BYTES_PER_ELEMENT"];
            Object["defineProperty"](this, "buffer", {'value': new xS(xd)});
            var xD = {};
            xD["value"] = xd, Object["defineProperty"](this, "byteLength", xD);
            var xw = {};
            xw["value"] = 0x0, Object["defineProperty"](this, "byteOffset", xw);
            var xT = {};
            xT["value"] = xz["length"], Object["defineProperty"](this, "length", xT);
            for (var xO = 0x0; xO < this["length"]; xO += 0x1) {
              this["_setter"](xO, xz["_getter"](xO));
            }
          }["apply"](this, arguments);
          if (arguments["length"] >= 0x1 && sA(arguments[0x0]) === "object" && !(arguments[0x0] instanceof xl) && !(arguments[0x0] instanceof xS || x0(arguments[0x0]) === "ArrayBuffer")) return function (xz) {
            var xd = xz["length"] * this["BYTES_PER_ELEMENT"];
            Object["defineProperty"](this, "buffer", {'value': new xS(xd)});
            var xD = {};
            xD["value"] = xd, Object["defineProperty"](this, "byteLength", xD);
            var xw = {};
            xw["value"] = 0x0, Object["defineProperty"](this, "byteOffset", xw);
            var xT = {};
            xT["value"] = xz["length"], Object["defineProperty"](this, "length", xT);
            for (var xO = 0x0; xO < this["length"]; xO += 0x1) {
              var xp = xz[xO];
              this["_setter"](xO, Number(xp));
            }
          }["apply"](this, arguments);
          if (arguments["length"] >= 0x1 && sA(arguments[0x0]) === "object" && (arguments[0x0] instanceof xS || x0(arguments[0x0]) === "ArrayBuffer")) return function (xz, xd, xD) {
            xd = x4(xd);
            if (xd > xz["byteLength"]) throw RangeError("byteOffset out of range");
            if (xd % this["BYTES_PER_ELEMENT"]) throw RangeError("buffer length minus the byteOffset is not a multiple of the element size.");
            var xw = xz["byteLength"] - xd;
            if (xD === undefined) {
              if (xw % this["BYTES_PER_ELEMENT"]) throw RangeError("length of buffer minus byteOffset not a multiple of the element size");
              xD = xw / this["BYTES_PER_ELEMENT"];
            } else xD = x4(xD), xw = xD * this["BYTES_PER_ELEMENT"];
            if (xd + xw > xz["byteLength"]) throw RangeError("byteOffset and length reference an area beyond the end of the buffer");
            var xT = {};
            xT["value"] = xz, Object["defineProperty"](this, "buffer", xT);
            var xO = {};
            xO["value"] = xw, Object["defineProperty"](this, "byteLength", xO);
            var xp = {};
            xp["value"] = xd, Object["defineProperty"](this, "byteOffset", xp);
            var xm = {};
            xm["value"] = xD, Object["defineProperty"](this, "length", xm);
          }["apply"](this, arguments);
          throw TypeError();
        }

        Object["defineProperty"](xl, "from", {
          'value': function xz(xd) {
            return new this(xd);
          }
        }), Object["defineProperty"](xl, 'of', {
          'value': function xd() {
            return new this(arguments);
          }
        });
        var xh = {};
        xl["prototype"] = xh, Object["defineProperty"](xl["prototype"], "_getter", {
          'value': function xD(xw) {
            if (arguments["length"] < 0x1) throw SyntaxError("Not enough arguments");
            xw = x4(xw);
            if (xw >= this["length"]) return undefined;
            var xT = [], xO = void 0x0, xp = void 0x0;
            for (xO = 0x0, xp = this["byteOffset"] + xw * this["BYTES_PER_ELEMENT"]; xO < this["BYTES_PER_ELEMENT"]; xO += 0x1, xp += 0x1) {
              this["buffer"]["_bytes"] && xT["push"](this["buffer"]["_bytes"][xp]);
            }
            return this["_unpack"](xT);
          }
        }), Object["defineProperty"](xl["prototype"], "get", {'value': xl["prototype"]["_getter"]}), Object["defineProperty"](xl["prototype"], "_setter", {
          'value': function xw(xT, xO) {
            if (arguments["length"] < 0x2) throw SyntaxError("Not enough arguments");
            xT = x4(xT);
            if (xT >= this["length"]) return;
            var xp = this["_pack"](xO), xm = void 0x0, xF = void 0x0;
            for (xm = 0x0, xF = this["byteOffset"] + xT * this["BYTES_PER_ELEMENT"]; xm < this["BYTES_PER_ELEMENT"]; xm += 0x1, xF += 0x1) {
              this["buffer"]["_bytes"][xF] = xp[xm];
            }
          }
        }), Object["defineProperty"](xl["prototype"], "constructor", {'value': xl}), Object["defineProperty"](xl["prototype"], "copyWithin", {
          'value': function xT(xO, xp) {
            var xm = arguments[0x2], xF = x2(this), xG = xF["length"], xN = x4(xG);
            xN = x9(xN, 0x0);
            var xo = x3(xO), xA = void 0x0;
            xo < 0x0 ? xA = x9(xN + xo, 0x0) : xA = xj(xo, xN);
            var i0 = x3(xp), i1 = void 0x0;
            i0 < 0x0 ? i1 = x9(xN + i0, 0x0) : i1 = xj(i0, xN);
            var i2 = void 0x0;
            xm === undefined ? i2 = xN : i2 = x3(xm);
            var i3 = void 0x0;
            i2 < 0x0 ? i3 = x9(xN + i2, 0x0) : i3 = xj(i2, xN);
            var i4 = xj(i3 - i1, xN - xA), i5 = void 0x0;
            i1 < xA && xA < i1 + i4 ? (i5 = -0x1, i1 = i1 + i4 - 0x1, xA = xA + i4 - 0x1) : i5 = 0x1;
            while (i4 > 0x0) {
              xF["_setter"](xA, xF["_getter"](i1)), i1 = i1 + i5, xA = xA + i5, i4 = i4 - 0x1;
            }
            return xF;
          }
        }), Object["defineProperty"](xl["prototype"], "every", {
          'value': function xO(xp) {
            if (this === undefined || this === null) throw TypeError();
            var xm = Object(this), xF = x4(xm["length"]);
            if (!x1(xp)) throw TypeError();
            var xG = arguments[0x1];
            for (var xN = 0x0; xN < xF; xN++) {
              if (!xp["call"](xG, xm["_getter"](xN), xN, xm)) return ![];
            }
            return !![];
          }
        }), Object["defineProperty"](xl["prototype"], "fill", {
          'value': function xp(xm) {
            var xF = arguments[0x1], xG = arguments[0x2], xN = x2(this), xo = xN["length"], xA = x4(xo);
            xA = x9(xA, 0x0);
            var i0 = x3(xF), i1 = void 0x0;
            i0 < 0x0 ? i1 = x9(xA + i0, 0x0) : i1 = xj(i0, xA);
            var i2 = void 0x0;
            xG === undefined ? i2 = xA : i2 = x3(xG);
            var i3 = void 0x0;
            i2 < 0x0 ? i3 = x9(xA + i2, 0x0) : i3 = xj(i2, xA);
            while (i1 < i3) {
              xN["_setter"](i1, xm), i1 += 0x1;
            }
            return xN;
          }
        }), Object["defineProperty"](xl["prototype"], "filter", {
          'value': function xm(xF) {
            if (this === undefined || this === null) throw TypeError();
            var xG = Object(this), xN = x4(xG["length"]);
            if (!x1(xF)) throw TypeError();
            var xo = [], xA = arguments[0x1];
            for (var i0 = 0x0; i0 < xN; i0++) {
              var i1 = xG["_getter"](i0);
              xF["call"](xA, i1, i0, xG) && xo["push"](i1);
            }
            return new this[("constructor")](xo);
          }
        }), Object["defineProperty"](xl["prototype"], "find", {
          'value': function xF(xG) {
            var xN = x2(this), xo = xN["length"], xA = x4(xo);
            if (!x1(xG)) throw TypeError();
            var i0 = arguments["length"] > 0x1 ? arguments[0x1] : undefined, i1 = 0x0;
            while (i1 < xA) {
              var i2 = xN["_getter"](i1), i3 = xG["call"](i0, i2, i1, xN);
              if (Boolean(i3)) return i2;
              ++i1;
            }
            return undefined;
          }
        }), Object["defineProperty"](xl["prototype"], "findIndex", {
          'value': function xG(xN) {
            var xo = x2(this), xA = xo["length"], i0 = x4(xA);
            if (!x1(xN)) throw TypeError();
            var i1 = arguments["length"] > 0x1 ? arguments[0x1] : undefined, i2 = 0x0;
            while (i2 < i0) {
              var i3 = xo["_getter"](i2), i4 = xN["call"](i1, i3, i2, xo);
              if (Boolean(i4)) return i2;
              ++i2;
            }
            return -0x1;
          }
        }), Object["defineProperty"](xl["prototype"], "forEach", {
          'value': function xN(xo) {
            if (this === undefined || this === null) throw TypeError();
            var xA = Object(this), i0 = x4(xA["length"]);
            if (!x1(xo)) throw TypeError();
            var i1 = arguments[0x1];
            for (var i2 = 0x0; i2 < i0; i2++) {
              xo["call"](i1, xA["_getter"](i2), i2, xA);
            }
          }
        }), Object["defineProperty"](xl["prototype"], "indexOf", {
          'value': function xo(xA) {
            if (this === undefined || this === null) throw TypeError();
            var i0 = Object(this), i1 = x4(i0["length"]);
            if (i1 === 0x0) return -0x1;
            var i2 = 0x0;
            if (arguments["length"] > 0x0) {
              i2 = Number(arguments[0x1]);
              if (i2 !== i2) i2 = 0x0; else i2 !== 0x0 && i2 !== 0x1 / 0x0 && i2 !== -(0x1 / 0x0) && (i2 = (i2 > 0x0 || -0x1) * x7(x6(i2)));
            }
            if (i2 >= i1) return -0x1;
            var i3 = i2 >= 0x0 ? i2 : x9(i1 - x6(i2), 0x0);
            for (; i3 < i1; i3++) {
              if (i0["_getter"](i3) === xA) return i3;
            }
            return -0x1;
          }
        }), Object["defineProperty"](xl["prototype"], "join", {
          'value': function xA(i0) {
            if (this === undefined || this === null) throw TypeError();
            var i1 = Object(this), i2 = x4(i1["length"]), i3 = Array(i2);
            for (var i4 = 0x0; i4 < i2; ++i4) {
              i3[i4] = i1["_getter"](i4);
            }
            return i3["join"](i0 === undefined ? ',' : i0);
          }
        }), Object["defineProperty"](xl["prototype"], "lastIndexOf", {
          'value': function i0(i1) {
            if (this === undefined || this === null) throw TypeError();
            var i2 = Object(this), i3 = x4(i2["length"]);
            if (i3 === 0x0) return -0x1;
            var i4 = i3;
            if (arguments["length"] > 0x1) {
              i4 = Number(arguments[0x1]);
              if (i4 !== i4) i4 = 0x0; else i4 !== 0x0 && i4 !== 0x1 / 0x0 && i4 !== -(0x1 / 0x0) && (i4 = (i4 > 0x0 || -0x1) * x7(x6(i4)));
            }
            var i5 = i4 >= 0x0 ? xj(i4, i3 - 0x1) : i3 - x6(i4);
            for (; i5 >= 0x0; i5--) {
              if (i2["_getter"](i5) === i1) return i5;
            }
            return -0x1;
          }
        }), Object["defineProperty"](xl["prototype"], "map", {
          'value': function i1(i2) {
            if (this === undefined || this === null) throw TypeError();
            var i3 = Object(this), i4 = x4(i3["length"]);
            if (!x1(i2)) throw TypeError();
            var i5 = [];
            i5["length"] = i4;
            var i6 = arguments[0x1];
            for (var i7 = 0x0; i7 < i4; i7++) {
              i5[i7] = i2["call"](i6, i3["_getter"](i7), i7, i3);
            }
            return new this[("constructor")](i5);
          }
        }), Object["defineProperty"](xl["prototype"], "reduce", {
          'value': function i2(i3) {
            if (this === undefined || this === null) throw TypeError();
            var i4 = Object(this), i5 = x4(i4["length"]);
            if (!x1(i3)) throw TypeError();
            if (i5 === 0x0 && arguments["length"] === 0x1) throw TypeError();
            var i6 = 0x0, i7 = void 0x0;
            arguments["length"] >= 0x2 ? i7 = arguments[0x1] : i7 = i4["_getter"](i6++);
            while (i6 < i5) {
              i7 = i3["call"](undefined, i7, i4["_getter"](i6), i6, i4), i6++;
            }
            return i7;
          }
        }), Object["defineProperty"](xl["prototype"], "reduceRight", {
          'value': function i3(i4) {
            if (this === undefined || this === null) throw TypeError();
            var i5 = Object(this), i6 = x4(i5["length"]);
            if (!x1(i4)) throw TypeError();
            if (i6 === 0x0 && arguments["length"] === 0x1) throw TypeError();
            var i7 = i6 - 0x1, i8 = void 0x0;
            arguments["length"] >= 0x2 ? i8 = arguments[0x1] : i8 = i5["_getter"](i7--);
            while (i7 >= 0x0) {
              i8 = i4["call"](undefined, i8, i5["_getter"](i7), i7, i5), i7--;
            }
            return i8;
          }
        }), Object["defineProperty"](xl["prototype"], "reverse", {
          'value': function i4() {
            if (this === undefined || this === null) throw TypeError();
            var i5 = Object(this), i6 = x4(i5["length"]), i7 = x7(i6 / 0x2);
            for (var i8 = 0x0, i9 = i6 - 0x1; i8 < i7; ++i8, --i9) {
              var ij = i5["_getter"](i8);
              i5["_setter"](i8, i5["_getter"](i9)), i5["_setter"](i9, ij);
            }
            return i5;
          }
        }), Object["defineProperty"](xl["prototype"], "set", {
          'value': function i5(i6, i7) {
            if (arguments["length"] < 0x1) throw SyntaxError("Not enough arguments");
            var i8, i9, ij, ic, iK, iY, ib, iI, ix, ii;
            if (K4(arguments[0x0]) === "object" && arguments[0x0]["constructor"] === this["constructor"]) {
              i8 = arguments[0x0], ij = x4(arguments[0x1]);
              if (ij + i8["length"] > this["length"]) throw RangeError("Offset plus length of array is out of range");
              iI = this["byteOffset"] + ij * this["BYTES_PER_ELEMENT"], ix = i8["length"] * this["BYTES_PER_ELEMENT"];
              if (i8["buffer"] === this["buffer"]) {
                ii = [];
                for (iK = 0x0, iY = i8["byteOffset"]; iK < ix; iK += 0x1, iY += 0x1) {
                  ii[iK] = i8["buffer"]["_bytes"][iY];
                }
                for (iK = 0x0, ib = iI; iK < ix; iK += 0x1, ib += 0x1) {
                  this["buffer"]["_bytes"][ib] = ii[iK];
                }
              } else for (iK = 0x0, iY = i8["byteOffset"], ib = iI; iK < ix; iK += 0x1, iY += 0x1, ib += 0x1) {
                this["buffer"]["_bytes"][ib] = i8["buffer"]["_bytes"][iY];
              }
            } else {
              if (K4(arguments[0x0]) === "object" && typeof arguments[0x0]["length"] !== "undefined") {
                i9 = arguments[0x0], ic = x4(i9["length"]), ij = x4(arguments[0x1]);
                if (ij + ic > this["length"]) throw RangeError("Offset plus length of array is out of range");
                for (iK = 0x0; iK < ic; iK += 0x1) {
                  iY = i9[iK], this["_setter"](ij + iK, Number(iY));
                }
              } else throw TypeError("Unexpected argument type(s)");
            }
          }
        }), Object["defineProperty"](xl["prototype"], "slice", {
          'value': function i6(i7, i8) {
            var i9 = x2(this), ij = i9["length"], ic = x4(ij), iK = x3(i7),
              iY = iK < 0x0 ? x9(ic + iK, 0x0) : xj(iK, ic), ib = i8 === undefined ? ic : x3(i8),
              iI = ib < 0x0 ? x9(ic + ib, 0x0) : xj(ib, ic), ix = iI - iY, ii = i9["constructor"],
              iv = new ii(ix), iR = 0x0;
            while (iY < iI) {
              var ie = i9["_getter"](iY);
              iv["_setter"](iR, ie), ++iY, ++iR;
            }
            return iv;
          }
        }), Object["defineProperty"](xl["prototype"], "some", {
          'value': function i7(i8) {
            if (this === undefined || this === null) throw TypeError();
            var i9 = Object(this), ij = x4(i9["length"]);
            if (!x1(i8)) throw TypeError();
            var ic = arguments[0x1];
            for (var iK = 0x0; iK < ij; iK++) {
              if (i8["call"](ic, i9["_getter"](iK), iK, i9)) return !![];
            }
            return ![];
          }
        }), Object["defineProperty"](xl["prototype"], "sort", {
          'value': function i8(i9) {
            if (this === undefined || this === null) throw TypeError();
            var ij = Object(this), ic = x4(ij["length"]), iK = Array(ic);
            for (var iY = 0x0; iY < ic; ++iY) {
              iK[iY] = ij["_getter"](iY);
            }

            function ib(iI, ix) {
              if (iI !== iI && ix !== ix) return +0x0;
              if (iI !== iI) return 0x1;
              if (ix !== ix) return -0x1;
              if (i9 !== undefined) return i9(iI, ix);
              if (iI < ix) return -0x1;
              if (iI > ix) return 0x1;
              return +0x0;
            }

            iK["sort"](ib);
            for (iY = 0x0; iY < ic; ++iY) {
              ij["_setter"](iY, iK[iY]);
            }
            return ij;
          }
        }), Object["defineProperty"](xl["prototype"], "subarray", {
          'value': function i9(ij, ic) {
            function iK(ib, iI, ix) {
              return ib < iI ? iI : ib > ix ? ix : ib;
            }

            ij = x3(ij), ic = x3(ic);
            arguments["length"] < 0x1 && (ij = 0x0);
            arguments["length"] < 0x2 && (ic = this["length"]);
            ij < 0x0 && (ij = this["length"] + ij);
            ic < 0x0 && (ic = this["length"] + ic);
            ij = iK(ij, 0x0, this["length"]), ic = iK(ic, 0x0, this["length"]);
            var iY = ic - ij;
            return iY < 0x0 && (iY = 0x0), new this[("constructor")](this["buffer"], this["byteOffset"] + ij * this["BYTES_PER_ELEMENT"], iY);
          }
        });

        function xV(ij, ic, iK) {
          var iY = function iv() {
            var iR = {};
            iR["value"] = iv, Object["defineProperty"](this, "constructor", iR), xl["apply"](this, arguments), xK(this);
          };
          "__proto__" in iY ? iY["__proto__"] = xl : (iY["from"] = xl["from"], iY['of'] = xl['of']);
          iY["BYTES_PER_ELEMENT"] = ij;
          var ib = function iR() {
          };
          ib["prototype"] = xh, iY["prototype"] = new ib();
          var iI = {};
          iI["value"] = ij, Object["defineProperty"](iY["prototype"], "BYTES_PER_ELEMENT", iI);
          var ix = {};
          ix["value"] = ic, Object["defineProperty"](iY["prototype"], "_pack", ix);
          var ii = {};
          return ii["value"] = iK, Object["defineProperty"](iY["prototype"], "_unpack", ii), iY;
        }

        var xQ = xV(0x1, xI, xs), xL = xV(0x1, xx, xi), xB = xV(0x1, xv, xi), xW = xV(0x2, xR, xe),
          xg = xV(0x2, xy, xk), xJ = xV(0x4, xa, xM), xP = xV(0x4, xt, xH), xq = xV(0x4, xn, xu), xX = xV(0x8, xZ, xr),
          xU = document["documentMode"] || +(window["navigator"]["userAgent"]["match"](/MSIE (\d+)/) && RegExp['$1']) || !sN["Int8Array"];
        sN["Int8Array"] = xU ? xQ : sN["Int8Array"], sN["Uint8Array"] = xU ? xL : sN["Uint8Array"], sN["Uint8ClampedArray"] = xU ? xB : sN["Uint8ClampedArray"], sN["Int16Array"] = xU ? xW : sN["Int16Array"], sN["Uint16Array"] = xU ? xg : sN["Uint16Array"], sN["Int32Array"] = xU ? xJ : sN["Int32Array"], sN["Uint32Array"] = xU ? xP : sN["Uint32Array"], sN["Float32Array"] = xU ? xq : sN["Float32Array"], sN["Float64Array"] = xU ? xX : sN["Float64Array"];
      }()), (function () {
        function xS(xL, xB) {
          return x1(xL["get"]) ? xL["get"](xB) : xL[xB];
        }

        var xl = (function () {
          var xL = new Uint16Array([0x1234]), xB = new Uint8Array(xL["buffer"]);
          return xS(xB, 0x0) === 0x12;
        }());

        function xh(xL, xB, xW) {
          if (!(xL instanceof ArrayBuffer || x0(xL) === "ArrayBuffer")) throw TypeError();
          xB = x4(xB);
          if (xB > xL["byteLength"]) throw RangeError("byteOffset out of range");
          xW === undefined ? xW = xL["byteLength"] - xB : xW = x4(xW);
          if (xB + xW > xL["byteLength"]) throw RangeError("byteOffset and length reference an area beyond the end of the buffer");
          var xg = {};
          xg["value"] = xL, Object["defineProperty"](this, "buffer", xg);
          var xJ = {};
          xJ["value"] = xW, Object["defineProperty"](this, "byteLength", xJ);
          var xP = {};
          xP["value"] = xB, Object["defineProperty"](this, "byteOffset", xP);
        }

        function xV(xL) {
          return function xB(xW, xg) {
            xW = x4(xW);
            if (xW + xL["BYTES_PER_ELEMENT"] > this["byteLength"]) throw RangeError("Array index out of range");
            xW += this["byteOffset"];
            var xJ = new Uint8Array(this["buffer"], xW, xL["BYTES_PER_ELEMENT"]), xP = [];
            for (var xq = 0x0; xq < xL["BYTES_PER_ELEMENT"]; xq += 0x1) {
              xP["push"](xS(xJ, xq));
            }
            return Boolean(xg) === Boolean(xl) && xP["reverse"](), xS(new xL(new Uint8Array(xP)["buffer"]), 0x0);
          };
        }

        Object["defineProperty"](xh["prototype"], "getUint8", {'value': xV(Uint8Array)}), Object["defineProperty"](xh["prototype"], "getInt8", {'value': xV(Int8Array)}), Object["defineProperty"](xh["prototype"], "getUint16", {'value': xV(Uint16Array)}), Object["defineProperty"](xh["prototype"], "getInt16", {'value': xV(Int16Array)}), Object["defineProperty"](xh["prototype"], "getUint32", {'value': xV(Uint32Array)}), Object["defineProperty"](xh["prototype"], "getInt32", {'value': xV(Int32Array)}), Object["defineProperty"](xh["prototype"], "getFloat32", {'value': xV(Float32Array)}), Object["defineProperty"](xh["prototype"], "getFloat64", {'value': xV(Float64Array)});

        function xQ(xL) {
          return function xB(xW, xg, xJ) {
            xW = x4(xW);
            if (xW + xL["BYTES_PER_ELEMENT"] > this["byteLength"]) throw RangeError("Array index out of range");
            var xP = new xL([xg]), xq = new Uint8Array(xP["buffer"]), xX = [], xU = void 0x0,
              xz = void 0x0;
            for (xU = 0x0; xU < xL["BYTES_PER_ELEMENT"]; xU += 0x1) {
              xX["push"](xS(xq, xU));
            }
            Boolean(xJ) === Boolean(xl) && xX["reverse"](), xz = new Uint8Array(this["buffer"], xW, xL["BYTES_PER_ELEMENT"]), xz["set"](xX);
          };
        }

        Object["defineProperty"](xh["prototype"], "setUint8", {'value': xQ(Uint8Array)}), Object["defineProperty"](xh["prototype"], "setInt8", {'value': xQ(Int8Array)}), Object["defineProperty"](xh["prototype"], "setUint16", {'value': xQ(Uint16Array)}), Object["defineProperty"](xh["prototype"], "setInt16", {'value': xQ(Int16Array)}), Object["defineProperty"](xh["prototype"], "setUint32", {'value': xQ(Uint32Array)}), Object["defineProperty"](xh["prototype"], "setInt32", {'value': xQ(Int32Array)}), Object["defineProperty"](xh["prototype"], "setFloat32", {'value': xQ(Float32Array)}), Object["defineProperty"](xh["prototype"], "setFloat64", {'value': xQ(Float64Array)}), sN["DataView"] = sN["DataView"] || xh;
      }());
    }

    var K6 = {};
    K6["PADCHAR"] = '=', K6["ALPHA"] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", K6["makeDOMException"] = function () {
      try {
        return new DOMException(DOMException["INVALID_CHARACTER_ERR"] + '');
      } catch (so) {
        var sN = new Error("DOM Exception 5");
        return sN["code"] = sN["number"] = 0x5, sN["name"] = sN["description"] = "INVALID_CHARACTER_ERR", sN["toString"] = function () {
          return "Error: " + sN["name"] + ':\x20' + sN["message"];
        }, sN;
      }
    }, K6["getbyte64"] = function (sN, so) {
      var sA = K6["ALPHA"]["indexOf"](sN["charAt"](so));
      if (sA === -0x1) throw K6["makeDOMException"]();
      return sA;
    }, K6["decode"] = function (sN) {
      sN = '' + sN;
      var so = K6["getbyte64"], sA, x0, x1, x2 = sN["length"];
      if (x2 === 0x0) return sN;
      if (x2 % 0x4 !== 0x0) throw K6["makeDOMException"]();
      sA = 0x0;
      sN["charAt"](x2 - 0x1) === K6["PADCHAR"] && (sA = 0x1, sN["charAt"](x2 - 0x2) === K6["PADCHAR"] && (sA = 0x2), x2 -= 0x4);
      var x3 = [];
      for (x0 = 0x0; x0 < x2; x0 += 0x4) {
        x1 = so(sN, x0) << 0x12 | so(sN, x0 + 0x1) << 0xc | so(sN, x0 + 0x2) << 0x6 | so(sN, x0 + 0x3), x3["push"](String["fromCharCode"](x1 >> 0x10, x1 >> 0x8 & 0xff, x1 & 0xff));
      }
      switch (sA) {
        case 0x1:
          x1 = so(sN, x0) << 0x12 | so(sN, x0 + 0x1) << 0xc | so(sN, x0 + 0x2) << 0x6, x3["push"](String["fromCharCode"](x1 >> 0x10, x1 >> 0x8 & 0xff));
          break;
        case 0x2:
          x1 = so(sN, x0) << 0x12 | so(sN, x0 + 0x1) << 0xc, x3["push"](String["fromCharCode"](x1 >> 0x10));
          break;
      }
      return x3["join"]('');
    }, K6["getbyte"] = function (sN, so) {
      var sA = sN["charCodeAt"](so);
      if (sA > 0xff) throw K6["makeDOMException"]();
      return sA;
    }, K6["encode"] = function (sN) {
      if (sN === '') throw new SyntaxError("Not enough arguments");
      var so = K6["PADCHAR"], sA = K6["ALPHA"], x0 = K6["getbyte"], x1, x2,
        x3 = [];
      sN = '' + sN;
      var x4 = sN["length"] - sN["length"] % 0x3;
      if (sN["length"] === 0x0) return sN;
      for (x1 = 0x0; x1 < x4; x1 += 0x3) {
        x2 = x0(sN, x1) << 0x10 | x0(sN, x1 + 0x1) << 0x8 | x0(sN, x1 + 0x2), x3["push"](sA["charAt"](x2 >> 0x12)), x3["push"](sA["charAt"](x2 >> 0xc & 0x3f)), x3["push"](sA["charAt"](x2 >> 0x6 & 0x3f)), x3["push"](sA["charAt"](x2 & 0x3f));
      }
      switch (sN["length"] - x4) {
        case 0x1:
          x2 = x0(sN, x1) << 0x10, x3["push"](sA["charAt"](x2 >> 0x12) + sA["charAt"](x2 >> 0xc & 0x3f) + so + so);
          break;
        case 0x2:
          x2 = x0(sN, x1) << 0x10 | x0(sN, x1 + 0x1) << 0x8, x3["push"](sA["charAt"](x2 >> 0x12) + sA["charAt"](x2 >> 0xc & 0x3f) + sA["charAt"](x2 >> 0x6 & 0x3f) + so);
          break;
      }
      return x3["join"]('');
    };
    var K7 = function (sN, so) {
      var sA = {};
      return sA["__proto__"] = [], K7 = Object["setPrototypeOf"] || sA instanceof Array && function (x0, x1) {
        x0["__proto__"] = x1;
      } || function (x0, x1) {
        for (var x2 in x1) if (x1["hasOwnProperty"](x2)) x0[x2] = x1[x2];
      }, K7(sN, so);
    };

    function K8(sN, so) {
      K7(sN, so);

      function sA() {
        this["constructor"] = sN;
      }

      sN["prototype"] = so === null ? Object["create"](so) : (sA["prototype"] = so["prototype"], new sA());
    }

    function K9(sN, so, sA, x0) {
      function x1(x2) {
        return x2 instanceof sA ? x2 : new sA(function (x3) {
          x3(x2);
        });
      }

      return new (sA || (sA = Promise))(function (x2, x3) {
        function x4(x7) {
          try {
            x6(x0["next"](x7));
          } catch (x8) {
            x3(x8);
          }
        }

        function x5(x7) {
          try {
            x6(x0["throw"](x7));
          } catch (x8) {
            x3(x8);
          }
        }

        function x6(x7) {
          x7["done"] ? x2(x7["value"]) : x1(x7["value"])["then"](x4, x5);
        }

        x6((x0 = x0["apply"](sN, so || []))["next"]());
      });
    }

    function Kj(sN, so) {
      var sA = {};
      sA["label"] = 0x0, sA["sent"] = function () {
        if (x3[0x0] & 0x1) throw x3[0x1];
        return x3[0x1];
      }, sA["trys"] = [], sA["ops"] = [];
      var x0 = sA, x1, x2, x3, x4;
      return x4 = {
        'next': x5(0x0),
        'throw': x5(0x1),
        'return': x5(0x2)
      }, typeof Symbol === "function" && (x4[Symbol["iterator"]] = function () {
        return this;
      }), x4;

      function x5(x7) {
        return function (x8) {
          return x6([x7, x8]);
        };
      }

      function x6(x7) {
        if (x1) throw new TypeError("Generator is already executing.");
        while (x0) try {
          if (x1 = 0x1, x2 && (x3 = x7[0x0] & 0x2 ? x2["return"] : x7[0x0] ? x2["throw"] || ((x3 = x2["return"]) && x3["call"](x2), 0x0) : x2["next"]) && !(x3 = x3["call"](x2, x7[0x1]))["done"]) return x3;
          if (x2 = 0x0, x3) x7 = [x7[0x0] & 0x2, x3["value"]];
          switch (x7[0x0]) {
            case 0x0:
            case 0x1:
              x3 = x7;
              break;
            case 0x4:
              x0["label"]++;
              var x8 = {};
              x8["value"] = x7[0x1], x8["done"] = ![];
              return x8;
            case 0x5:
              x0["label"]++, x2 = x7[0x1], x7 = [0x0];
              continue;
            case 0x7:
              x7 = x0["ops"]["pop"](), x0["trys"]["pop"]();
              continue;
            default:
              if (!(x3 = x0["trys"], x3 = x3["length"] > 0x0 && x3[x3["length"] - 0x1]) && (x7[0x0] === 0x6 || x7[0x0] === 0x2)) {
                x0 = 0x0;
                continue;
              }
              if (x7[0x0] === 0x3 && (!x3 || x7[0x1] > x3[0x0] && x7[0x1] < x3[0x3])) {
                x0["label"] = x7[0x1];
                break;
              }
              if (x7[0x0] === 0x6 && x0["label"] < x3[0x1]) {
                x0["label"] = x3[0x1], x3 = x7;
                break;
              }
              if (x3 && x0["label"] < x3[0x2]) {
                x0["label"] = x3[0x2], x0["ops"]["push"](x7);
                break;
              }
              if (x3[0x2]) x0["ops"]["pop"]();
              x0["trys"]["pop"]();
              continue;
          }
          x7 = so["call"](sN, x0);
        } catch (xj) {
          x7 = [0x6, xj], x2 = 0x0;
        } finally {
          x1 = x3 = 0x0;
        }
        if (x7[0x0] & 0x5) throw x7[0x1];
        var x9 = {};
        return x9["value"] = x7[0x0] ? x7[0x1] : void 0x0, x9["done"] = !![], x9;
      }
    }

    var Kf = {};
    Kf["dragRight"] = "请向右拖动滑块";
    var Kc = Kf, KK = {};
    KK["dragRight"] = "drag the slider ";
    var KY = KK, Kb = {};
    Kb["dragRight"] = "スライダを右にドラッグする";
    var KI = Kb;

    function Ks(sN) {
      !sN && (sN = '');
      switch (sN) {
        case'':
        case "zh-CN":
          return Kc;
        case'ja':
          return KI;
        default:
          return KY;
      }
    }

    var Kx = (function () {
      function sN() {
      }

      return sN["prototype"]["template"] = function (so, sA, x0) {
        var x1 = sA || {}, x2 = Ks(x0);
        return "\n            <div class='yoda-slider-wrapper " + (x1["wrapper"] || '') + "'>\n                <div class='slider-help-wrapper' id='" + so["help"] + "'>\n                    <img class='slider-help " + (x1["sliderHelp"] || '') + "' src='https://s3plus.meituan.net/v1/mss_f231eb419c414559a1837748d11d4312/yoda-resources/help_icon.png'>\n                </div>\n                <p class='slider-title " + (x1["sliderTitle"] || '') + '\x27>' + x2["dragRight"] + "</p>\n                <div class='box-wrapper " + (x1["boxWrapper"] || '') + "' id=" + so["boxWrapper"] + ">\n                    <div class='boxStatic " + (x1["boxStatic"] || '') + "' id=" + so["box"] + "></div>\n                    <div class='moveingBar " + (x1["moveingBar"] || '') + "' id=" + so["moveingbar"] + "></div>\n                    <label class='bg-tip'>" + x2["dragRight"] + "</label>\n                </div>\n                <div class='yoda-slider-tip " + (x1["tip"] || '') + "' id=" + so["tip"] + "></div>\n            </div>";
      }, sN;
    }()), Ki = 0x8;

    function Kv(sN) {
      return KC(KR(KE(sN), sN["length"] * Ki));
    }

    function KR(sN, so) {
      sN[so >> 0x5] |= 0x80 << so % 0x20, sN[(so + 0x40 >>> 0x9 << 0x4) + 0xe] = so;
      var sA = 0x67452301, x0 = -0x10325477, x1 = -0x67452302, x2 = 0x10325476;
      for (var x3 = 0x0; x3 < sN["length"]; x3 += 0x10) {
        var x4 = sA, x5 = x0, x6 = x1, x7 = x2;
        sA = Ky(sA, x0, x1, x2, sN[x3 + 0x0], 0x7, -0x28955b88), x2 = Ky(x2, sA, x0, x1, sN[x3 + 0x1], 0xc, -0x173848aa), x1 = Ky(x1, x2, sA, x0, sN[x3 + 0x2], 0x11, 0x242070db), x0 = Ky(x0, x1, x2, sA, sN[x3 + 0x3], 0x16, -0x3e423112), sA = Ky(sA, x0, x1, x2, sN[x3 + 0x4], 0x7, -0xa83f051), x2 = Ky(x2, sA, x0, x1, sN[x3 + 0x5], 0xc, 0x4787c62a), x1 = Ky(x1, x2, sA, x0, sN[x3 + 0x6], 0x11, -0x57cfb9ed), x0 = Ky(x0, x1, x2, sA, sN[x3 + 0x7], 0x16, -0x2b96aff), sA = Ky(sA, x0, x1, x2, sN[x3 + 0x8], 0x7, 0x698098d8), x2 = Ky(x2, sA, x0, x1, sN[x3 + 0x9], 0xc, -0x74bb0851), x1 = Ky(x1, x2, sA, x0, sN[x3 + 0xa], 0x11, -0xa44f), x0 = Ky(x0, x1, x2, sA, sN[x3 + 0xb], 0x16, -0x76a32842), sA = Ky(sA, x0, x1, x2, sN[x3 + 0xc], 0x7, 0x6b901122), x2 = Ky(x2, sA, x0, x1, sN[x3 + 0xd], 0xc, -0x2678e6d), x1 = Ky(x1, x2, sA, x0, sN[x3 + 0xe], 0x11, -0x5986bc72), x0 = Ky(x0, x1, x2, sA, sN[x3 + 0xf], 0x16, 0x49b40821), sA = Kk(sA, x0, x1, x2, sN[x3 + 0x1], 0x5, -0x9e1da9e), x2 = Kk(x2, sA, x0, x1, sN[x3 + 0x6], 0x9, -0x3fbf4cc0), x1 = Kk(x1, x2, sA, x0, sN[x3 + 0xb], 0xe, 0x265e5a51), x0 = Kk(x0, x1, x2, sA, sN[x3 + 0x0], 0x14, -0x16493856), sA = Kk(sA, x0, x1, x2, sN[x3 + 0x5], 0x5, -0x29d0efa3), x2 = Kk(x2, sA, x0, x1, sN[x3 + 0xa], 0x9, 0x2441453), x1 = Kk(x1, x2, sA, x0, sN[x3 + 0xf], 0xe, -0x275e197f), x0 = Kk(x0, x1, x2, sA, sN[x3 + 0x4], 0x14, -0x182c0438), sA = Kk(sA, x0, x1, x2, sN[x3 + 0x9], 0x5, 0x21e1cde6), x2 = Kk(x2, sA, x0, x1, sN[x3 + 0xe], 0x9, -0x3cc8f82a), x1 = Kk(x1, x2, sA, x0, sN[x3 + 0x3], 0xe, -0xb2af279), x0 = Kk(x0, x1, x2, sA, sN[x3 + 0x8], 0x14, 0x455a14ed), sA = Kk(sA, x0, x1, x2, sN[x3 + 0xd], 0x5, -0x561c16fb), x2 = Kk(x2, sA, x0, x1, sN[x3 + 0x2], 0x9, -0x3105c08), x1 = Kk(x1, x2, sA, x0, sN[x3 + 0x7], 0xe, 0x676f02d9), x0 = Kk(x0, x1, x2, sA, sN[x3 + 0xc], 0x14, -0x72d5b376), sA = Ka(sA, x0, x1, x2, sN[x3 + 0x5], 0x4, -0x5c6be), x2 = Ka(x2, sA, x0, x1, sN[x3 + 0x8], 0xb, -0x788e097f), x1 = Ka(x1, x2, sA, x0, sN[x3 + 0xb], 0x10, 0x6d9d6122), x0 = Ka(x0, x1, x2, sA, sN[x3 + 0xe], 0x17, -0x21ac7f4), sA = Ka(sA, x0, x1, x2, sN[x3 + 0x1], 0x4, -0x5b4115bc), x2 = Ka(x2, sA, x0, x1, sN[x3 + 0x4], 0xb, 0x4bdecfa9), x1 = Ka(x1, x2, sA, x0, sN[x3 + 0x7], 0x10, -0x944b4a0), x0 = Ka(x0, x1, x2, sA, sN[x3 + 0xa], 0x17, -0x41404390), sA = Ka(sA, x0, x1, x2, sN[x3 + 0xd], 0x4, 0x289b7ec6), x2 = Ka(x2, sA, x0, x1, sN[x3 + 0x0], 0xb, -0x155ed806), x1 = Ka(x1, x2, sA, x0, sN[x3 + 0x3], 0x10, -0x2b10cf7b), x0 = Ka(x0, x1, x2, sA, sN[x3 + 0x6], 0x17, 0x4881d05), sA = Ka(sA, x0, x1, x2, sN[x3 + 0x9], 0x4, -0x262b2fc7), x2 = Ka(x2, sA, x0, x1, sN[x3 + 0xc], 0xb, -0x1924661b), x1 = Ka(x1, x2, sA, x0, sN[x3 + 0xf], 0x10, 0x1fa27cf8), x0 = Ka(x0, x1, x2, sA, sN[x3 + 0x2], 0x17, -0x3b53a99b), sA = KM(sA, x0, x1, x2, sN[x3 + 0x0], 0x6, -0xbd6ddbc), x2 = KM(x2, sA, x0, x1, sN[x3 + 0x7], 0xa, 0x432aff97), x1 = KM(x1, x2, sA, x0, sN[x3 + 0xe], 0xf, -0x546bdc59), x0 = KM(x0, x1, x2, sA, sN[x3 + 0x5], 0x15, -0x36c5fc7), sA = KM(sA, x0, x1, x2, sN[x3 + 0xc], 0x6, 0x655b59c3), x2 = KM(x2, sA, x0, x1, sN[x3 + 0x3], 0xa, -0x70f3336e), x1 = KM(x1, x2, sA, x0, sN[x3 + 0xa], 0xf, -0x100b83), x0 = KM(x0, x1, x2, sA, sN[x3 + 0x1], 0x15, -0x7a7ba22f), sA = KM(sA, x0, x1, x2, sN[x3 + 0x8], 0x6, 0x6fa87e4f), x2 = KM(x2, sA, x0, x1, sN[x3 + 0xf], 0xa, -0x1d31920), x1 = KM(x1, x2, sA, x0, sN[x3 + 0x6], 0xf, -0x5cfebcec), x0 = KM(x0, x1, x2, sA, sN[x3 + 0xd], 0x15, 0x4e0811a1), sA = KM(sA, x0, x1, x2, sN[x3 + 0x4], 0x6, -0x8ac817e), x2 = KM(x2, sA, x0, x1, sN[x3 + 0xb], 0xa, -0x42c50dcb), x1 = KM(x1, x2, sA, x0, sN[x3 + 0x2], 0xf, 0x2ad7d2bb), x0 = KM(x0, x1, x2, sA, sN[x3 + 0x9], 0x15, -0x14792c6f), sA = Kt(sA, x4), x0 = Kt(x0, x5), x1 = Kt(x1, x6), x2 = Kt(x2, x7);
      }
      return Array(sA, x0, x1, x2);
    }

    function Ke(sN, so, sA, x0, x1, x2) {
      return Kt(KH(Kt(Kt(so, sN), Kt(x0, x2)), x1), sA);
    }

    function Ky(sN, so, sA, x0, x1, x2, x3) {
      return Ke(so & sA | ~so & x0, sN, so, x1, x2, x3);
    }

    function Kk(sN, so, sA, x0, x1, x2, x3) {
      return Ke(so & x0 | sA & ~x0, sN, so, x1, x2, x3);
    }

    function Ka(sN, so, sA, x0, x1, x2, x3) {
      return Ke(so ^ sA ^ x0, sN, so, x1, x2, x3);
    }

    function KM(sN, so, sA, x0, x1, x2, x3) {
      return Ke(sA ^ (so | ~x0), sN, so, x1, x2, x3);
    }

    function Kt(sN, so) {
      var sA = (sN & 0xffff) + (so & 0xffff), x0 = (sN >> 0x10) + (so >> 0x10) + (sA >> 0x10);
      return x0 << 0x10 | sA & 0xffff;
    }

    function KH(sN, so) {
      return sN << so | sN >>> 0x20 - so;
    }

    function KE(sN) {
      var so = Array(), sA = (0x1 << Ki) - 0x1;
      for (var x0 = 0x0; x0 < sN["length"] * Ki; x0 += Ki) {
        so[x0 >> 0x5] |= (sN["charCodeAt"](x0 / Ki) & sA) << x0 % 0x20;
      }
      return so;
    }

    function KC(sN) {
      var so = "0123456789abcdef", sA = '';
      for (var x0 = 0x0; x0 < sN["length"] * 0x4; x0++) {
        sA += so["charAt"](sN[x0 >> 0x2] >> x0 % 0x4 * 0x8 + 0x4 & 0xf) + so["charAt"](sN[x0 >> 0x2] >> x0 % 0x4 * 0x8 & 0xf);
      }
      return sA;
    }

    function Kr(sN, so) {
      var sA, x0 = [];
      for (sA = 0x0; sA < sN["length"]; sA++) {
        so(sN[sA], sA, sN) && x0["push"](sN[sA]);
      }
      return x0;
    }

    function KZ(sN) {
      var so, sA = [];
      for (so in sN) {
        sN["hasOwnProperty"](so) && sA["push"](so);
      }
      return sA;
    }

    function Ku(sN, so) {
      return function sA() {
        so("lwe"), document["removeEventListener"](sN, sA);
      };
    }

    var Kn = 0x0, KS = 0x0, Kl = 0x0, Kh = [];

    function KV(sN) {
      var so = ["driver-evaluate", "webdriver-evaluate", "selenium-evaluate", "webdriverCommand", "webdriver-evaluate-response"];
      Kh = Kh["concat"](so["join"]()), Kn = so["join"]()["length"], document["addEventListener"] && so["forEach"](function (sA) {
        document["addEventListener"](sA, Ku(sA, sN), !0x1);
      });
    }

    function KQ(sN, so) {
      return "hasAttribute" in sN ? sN["hasAttribute"](so) : Kr(sN["attributes"], function (sA) {
        return sA["nodeName"] === so;
      })["length"] > 0x0;
    }

    function KL(sN) {
      return KQ(sN, "cd_frame_id_");
    }

    function KB(sN) {
      var so = 0x0, sA = setInterval(function () {
        function x0(xj) {
          return "__webdriver_script_fn" in xj;
        }

        function x1(xj) {
          var xf = !0x1;
          try {
            xf = xj["cookie"]["indexOf"]("ChromeDriverwjers908fljsdf37459fsdfgdfwru=") > -0x1;
          } catch (xc) {
          }
          return xf;
        }

        function x2(xj) {
          return "$cdc_asdjflasutopfhvcZLmcfl_" in xj || "$chrome_asyncScriptInfo" in xj;
        }

        function x3(xj) {
          return "_WEBDRIVER_ELEM_CACHE" in xj;
        }

        function x4(xj) {
          return "__$webdriverAsyncExecutor" in xj;
        }

        function x5(xj) {
          var xf, xc = [];
          for (xf = 0x0; xf < xj["length"]; xf++) {
            xc["push"](xj[xf]);
          }
          return xc;
        }

        function x6(xj) {
          var xf = x5(xj["getElementsByTagName"]("iframe")),
            xc = x5(xj["getElementsByTagName"]("frame")), xK = xf["concat"](xc),
            xY = Kr(xK, KL);
          return xY["length"] > 0x0;
        }

        var x7 = {};
        x7["webdriverScriptFn"] = x0(window), x7["cookieChromeDriver"] = x1(document), x7["asyncScriptInfo"] = x2(document), x7["webdriverElemCache"] = x3(window), x7["webdriverAsyncExecutor"] = x4(document), x7['S'] = x6(document);
        var x8 = KZ(x7), x9;
        for (x9 = 0x0; x9 < x8["length"]; x9++) {
          if (x7[x8[x9]] === !0x0) {
            clearInterval(sA), sN("lwc" + x8[x9]);
            break;
          }
        }
        ++so > 0x3c && clearInterval(sA);
      }, 0x1f4);
    }

    var KW = function sN(so) {
      KV(so), KB(so);
    };

    function Kg(so) {
      return so["documentElement"] && KQ(so["documentElement"], "webdriver");
    }

    function KJ(so) {
      var sA = ["webdriver", "__driver_evaluate", "__webdriver_evaluate", "__selenium_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__selenium_unwrapped", "__fxdriver_unwrapped"];
      return Kh = Kh["concat"](sA["join"]()), KS = sA["join"]()["length"], sA["filter"](function (x0) {
        return x0 in so;
      })["length"] > 0x0;
    }

    function KP(so) {
      var sA = ["webdriver", "_Selenium_IDE_Recorder", "_selenium", "calledSelenium"];
      return Kh = Kh["concat"](sA["join"]()), Kl = sA["join"]()["length"], sA["filter"](function (x0) {
        return x0 in so;
      })["length"] > 0x0;
    }

    function Kq(so) {
      return "__webdriverFunc" in so;
    }

    function KX(so) {
      return "domAutomation" in so || "domAutomationController" in so;
    }

    function KU(so) {
      return "__lastWatirAlert" in so || "__lastWatirConfirm" in so || "__lastWatirPrompt" in so;
    }

    function Kz(so) {
      return "webdriver" in so;
    }

    function Kd(so) {
      return so["webdriver"] || !0x1;
    }

    var KD = function so() {
      if (Kg(document)) return 'dw';
      if (KJ(document)) return 'de';
      if (KP(document)) return 'di';
      if (Kq(window)) return 'wf';
      if (KX(window)) return 'da';
      if (KU(window)) return "wwt";
      if (Kz(window)) return 'ww';
      if (Kd(navigator)) return 'gw';
      return '';
    };

    function Kw() {
      return Kn + KS + Kl;
    }

    function KT() {
      return Kv(Kh["join"](''));
    }

    var KO = {};
    KO["getwd"] = KD, KO["listenwd"] = KW, KO["getWdLength"] = Kw, KO["getStringHashMD5"] = KT;
    var Kp = KO;

    function Km(sA, x0) {
      return sA === void 0x0 && (sA = 0x0), x0 ? '' + Math["pow"](0x2, sA) : "2<sup>" + sA + "</sup>";
    }

    function KF(sA) {
      var x0 = 0x1, x1 = sA["getExtension"]("WEBGL_draw_buffers");
      return x1 != null && (x0 = sA["getParameter"](x1["MAX_DRAW_BUFFERS_WEBGL"])), x0;
    }

    function KG(sA, x0) {
      var x1 = x0 ? " bit mantissa" : '';
      return '[-' + Km(sA === null || sA === void 0x0 ? void 0x0 : sA["rangeMin"], x0) + ',\x20' + Km(sA === null || sA === void 0x0 ? void 0x0 : sA["rangeMax"], x0) + "] (" + (sA === null || sA === void 0x0 ? void 0x0 : sA["precision"]) + x1 + ')';
    }

    function KN(sA, x0) {
      var x1 = sA["getShaderPrecisionFormat"](x0, sA["HIGH_FLOAT"]),
        x2 = sA["getShaderPrecisionFormat"](x0, sA["MEDIUM_FLOAT"]), x3 = x1;
      return (x1 === null || x1 === void 0x0 ? void 0x0 : x1["precision"]) === 0x0 && (x3 = x2), KG(x3, !![]);
    }

    function Ko(sA) {
      return sA === null ? "n/a" : sA;
    }

    function KA(sA) {
      return '[' + sA[0x0] + ',\x20' + sA[0x1] + ']';
    }

    function Y0(sA) {
      return sA !== 0x0 && (sA & sA - 0x1) === 0x0;
    }

    function Y1(sA) {
      var x0 = {};
      x0["renderer"] = '', x0["vendor"] = '';
      var x1 = x0, x2 = sA["getExtension"]("WEBGL_debug_renderer_info");
      return x2 != null && (x1["renderer"] = sA["getParameter"](x2["UNMASKED_RENDERER_WEBGL"]), x1["vendor"] = sA["getParameter"](x2["UNMASKED_VENDOR_WEBGL"])), x1;
    }

    function Y2(sA) {
      var x0, x1 = document["createElement"]("canvas"), x2 = {};
      x2["failIfMajorPerformanceCaveat"] = !![];
      var x3 = x1["getContext"](sA, x2);
      if (!x3) return "Yes";
      if (typeof ((x0 = x3["getContextAttributes"]()) === null || x0 === void 0x0 ? void 0x0 : x0["failIfMajorPerformanceCaveat"]) === "undefined") return "Not implemented";
      return 'No';
    }

    function Y3(sA) {
      var x0 = sA["getExtension"]("EXT_texture_filter_anisotropic") || sA["getExtension"]("WEBKIT_EXT_texture_filter_anisotropic") || sA["getExtension"]("MOZ_EXT_texture_filter_anisotropic");
      if (x0) {
        var x1 = sA["getParameter"](x0["MAX_TEXTURE_MAX_ANISOTROPY_EXT"]);
        return x1 === 0x0 && (x1 = 0x2), x1;
      }
      return "n/a";
    }

    function Y4(sA) {
      var x0 = KA(sA["getParameter"](sA["ALIASED_LINE_WIDTH_RANGE"])),
        x1 = (navigator["platform"] === "Win32" || navigator["platform"] === "Win64") && sA["getParameter"](sA["RENDERER"]) !== "Internet Explorer" && sA["getParameter"](sA["RENDERER"]) !== "Microsoft Edge" && x0 === KA([0x1, 0x1]);
      if (x1) return Y0(sA["getParameter"](sA["MAX_VERTEX_UNIFORM_VECTORS"])) && Y0(sA["getParameter"](sA["MAX_FRAGMENT_UNIFORM_VECTORS"])) ? "Yes, D3D11" : "Yes, D3D9";
      return 'No';
    }

    function Y5(sA) {
      var x0 = ["copyBufferSubData", "getBufferSubData", "blitFramebuffer", "framebufferTextureLayer", "getInternalformatParameter", "invalidateFramebuffer", "invalidateSubFramebuffer", "readBuffer", "renderbufferStorageMultisample", "texStorage2D", "texStorage3D", "texImage3D", "texSubImage3D", "copyTexSubImage3D", "compressedTexImage3D", "compressedTexSubImage3D", "getFragDataLocation", "uniform1ui", "uniform2ui", "uniform3ui", "uniform4ui", "uniform1uiv", "uniform2uiv", "uniform3uiv", "uniform4uiv", "uniformMatrix2x3fv", "uniformMatrix3x2fv", "uniformMatrix2x4fv", "uniformMatrix4x2fv", "uniformMatrix3x4fv", "uniformMatrix4x3fv", "vertexAttribI4i", "vertexAttribI4iv", "vertexAttribI4ui", "vertexAttribI4uiv", "vertexAttribIPointer", "vertexAttribDivisor", "drawArraysInstanced", "drawElementsInstanced", "drawRangeElements", "drawBuffers", "clearBufferiv", "clearBufferuiv", "clearBufferfv", "clearBufferfi", "createQuery", "deleteQuery", "isQuery", "beginQuery", "endQuery", "getQuery", "getQueryParameter", "createSampler", "deleteSampler", "isSampler", "bindSampler", "samplerParameteri", "samplerParameterf", "getSamplerParameter", "fenceSync", "isSync", "deleteSync", "clientWaitSync", "waitSync", "getSyncParameter", "createTransformFeedback", "deleteTransformFeedback", "isTransformFeedback", "bindTransformFeedback", "beginTransformFeedback", "endTransformFeedback", "transformFeedbackVaryings", "getTransformFeedbackVarying", "pauseTransformFeedback", "resumeTransformFeedback", "bindBufferBase", "bindBufferRange", "getIndexedParameter", "getUniformIndices", "getActiveUniforms", "getUniformBlockIndex", "getActiveUniformBlockParameter", "getActiveUniformBlockName", "uniformBlockBinding", "createVertexArray", "deleteVertexArray", "isVertexArray", "bindVertexArray"];
      return x0["filter"](function (x1) {
        return !!sA[x1];
      });
    }

    function Y6(sA) {
      var x0 = sA["getShaderPrecisionFormat"](sA["FRAGMENT_SHADER"], sA["HIGH_FLOAT"]),
        x1 = (x0 === null || x0 === void 0x0 ? void 0x0 : x0["precision"]) !== 0x0 ? "highp/" : "mediump/";
      return x0 = sA["getShaderPrecisionFormat"](sA["FRAGMENT_SHADER"], sA["HIGH_INT"]), x1 += (x0 === null || x0 === void 0x0 ? void 0x0 : x0["rangeMax"]) !== 0x0 ? "highp" : "lowp", x1;
    }

    var Y7 = (function () {
      function sA() {
        this["webGl2Support"] = !!window["WebGL2RenderingContext"];
        var x0 = document["createElement"]("canvas"),
          x1 = document["createElement"]("canvas"), x2 = {};
        x2["stencil"] = !![], this['gl'] = x0["getContext"]("webgl", x2);
        var x3 = {};
        x3["stencil"] = !![], this["gl2"] = x1["getContext"]("webgl2", x3);
        if (!(this['gl'] || this["gl2"])) throw new Error("no support webgl");
      }

      return sA["prototype"]["getWebGlReport"] = function () {
        var x0, x1, x2 = this, x3 = x2['gl'], x4 = x2["gl2"], x5 = x2["webGl2Support"], x6 = {};
        x6["glVersion"] = '';
        var x7 = x6, x8 = {};
        x3 && (x7 = {
          'contextName': "webgl",
          'glVersion': x3["getParameter"](x3["VERSION"]),
          'shadingLanguageVersion': x3["getParameter"](x3["SHADING_LANGUAGE_VERSION"]),
          'vendor': x3["getParameter"](x3["VENDOR"]),
          'renderer': x3["getParameter"](x3["RENDERER"]),
          'unMaskedVendor': Y1(x3)["vendor"],
          'unMaskedRenderer': Y1(x3)["renderer"],
          'antialias': ((x0 = x3["getContextAttributes"]()) === null || x0 === void 0x0 ? void 0x0 : x0["antialias"]) ? "Available" : "Not available",
          'angle': Y4(x3),
          'majorPerformanceCaveat': Y2("webgl"),
          'maxColorBuffers': KF(x3),
          'redBits': x3["getParameter"](x3["RED_BITS"]),
          'greenBits': x3["getParameter"](x3["GREEN_BITS"]),
          'blueBits': x3["getParameter"](x3["BLUE_BITS"]),
          'alphaBits': x3["getParameter"](x3["ALPHA_BITS"]),
          'depthBits': x3["getParameter"](x3["DEPTH_BITS"]),
          'stencilBits': x3["getParameter"](x3["STENCIL_BITS"]),
          'maxRenderBufferSize': x3["getParameter"](x3["MAX_RENDERBUFFER_SIZE"]),
          'maxCombinedTextureImageUnits': x3["getParameter"](x3["MAX_COMBINED_TEXTURE_IMAGE_UNITS"]),
          'maxCubeMapTextureSize': x3["getParameter"](x3["MAX_CUBE_MAP_TEXTURE_SIZE"]),
          'maxFragmentUniformVectors': x3["getParameter"](x3["MAX_FRAGMENT_UNIFORM_VECTORS"]),
          'maxTextureImageUnits': x3["getParameter"](x3["MAX_TEXTURE_IMAGE_UNITS"]),
          'maxTextureSize': x3["getParameter"](x3["MAX_TEXTURE_SIZE"]),
          'maxVaryingVectors': x3["getParameter"](x3["MAX_VARYING_VECTORS"]),
          'maxVertexAttributes': x3["getParameter"](x3["MAX_VERTEX_ATTRIBS"]),
          'maxVertexTextureImageUnits': x3["getParameter"](x3["MAX_VERTEX_TEXTURE_IMAGE_UNITS"]),
          'maxVertexUniformVectors': x3["getParameter"](x3["MAX_VERTEX_UNIFORM_VECTORS"]),
          'aliasedLineWidthRange': KA(x3["getParameter"](x3["ALIASED_LINE_WIDTH_RANGE"])),
          'aliasedPointSizeRange': KA(x3["getParameter"](x3["ALIASED_POINT_SIZE_RANGE"])),
          'maxViewportDimensions': KA(x3["getParameter"](x3["MAX_VIEWPORT_DIMS"])),
          'maxAnisotropy': Y3(x3),
          'vertexShaderBestPrecision': KN(x3, x3["VERTEX_SHADER"]),
          'fragmentShaderBestPrecision': KN(x3, x3["FRAGMENT_SHADER"]),
          'fragmentShaderFloatIntPrecision': Y6(x3),
          'webglExtensions': x3["getSupportedExtensions"]()
        });
        x4 && x5 && (x8 = {
          'contextName': "webgl2",
          'glVersion': x4["getParameter"](x4["VERSION"]),
          'shadingLanguageVersion': x4["getParameter"](x4["SHADING_LANGUAGE_VERSION"]),
          'vendor': x4["getParameter"](x4["VENDOR"]),
          'renderer': x4["getParameter"](x4["RENDERER"]),
          'unMaskedVendor': Y1(x4)["vendor"],
          'unMaskedRenderer': Y1(x4)["renderer"],
          'antialias': ((x1 = x4["getContextAttributes"]()) === null || x1 === void 0x0 ? void 0x0 : x1["antialias"]) ? "Available" : "Not available",
          'angle': Y4(x4),
          'majorPerformanceCaveat': Y2("webgl2"),
          'maxColorBuffers2': KF(x4),
          'redBits': x4["getParameter"](x4["RED_BITS"]),
          'greenBits': x4["getParameter"](x4["GREEN_BITS"]),
          'blueBits': x4["getParameter"](x4["BLUE_BITS"]),
          'alphaBits': x4["getParameter"](x4["ALPHA_BITS"]),
          'depthBits': x4["getParameter"](x4["DEPTH_BITS"]),
          'stencilBits': x4["getParameter"](x4["STENCIL_BITS"]),
          'maxRenderBufferSize': x4["getParameter"](x4["MAX_RENDERBUFFER_SIZE"]),
          'maxCombinedTextureImageUnits': x4["getParameter"](x4["MAX_COMBINED_TEXTURE_IMAGE_UNITS"]),
          'maxCubeMapTextureSize': x4["getParameter"](x4["MAX_CUBE_MAP_TEXTURE_SIZE"]),
          'maxFragmentUniformVectors': x4["getParameter"](x4["MAX_FRAGMENT_UNIFORM_VECTORS"]),
          'maxTextureImageUnits': x4["getParameter"](x4["MAX_TEXTURE_IMAGE_UNITS"]),
          'maxTextureSize': x4["getParameter"](x4["MAX_TEXTURE_SIZE"]),
          'maxVaryingVectors': x4["getParameter"](x4["MAX_VARYING_VECTORS"]),
          'maxVertexAttributes': x4["getParameter"](x4["MAX_VERTEX_ATTRIBS"]),
          'maxVertexTextureImageUnits': x4["getParameter"](x4["MAX_VERTEX_TEXTURE_IMAGE_UNITS"]),
          'maxVertexUniformVectors': x4["getParameter"](x4["MAX_VERTEX_UNIFORM_VECTORS"]),
          'aliasedLineWidthRange': KA(x4["getParameter"](x4["ALIASED_LINE_WIDTH_RANGE"])),
          'aliasedPointSizeRange': KA(x4["getParameter"](x4["ALIASED_POINT_SIZE_RANGE"])),
          'maxViewportDimensions': KA(x4["getParameter"](x4["MAX_VIEWPORT_DIMS"])),
          'maxAnisotropy': Y3(x4),
          'vertexShaderBestPrecision': KN(x4, x4["VERTEX_SHADER"]),
          'fragmentShaderBestPrecision': KN(x4, x4["FRAGMENT_SHADER"]),
          'fragmentShaderFloatIntPrecision': Y6(x4),
          'webgl2Extensions': x4["getSupportedExtensions"](),
          'maxVertexUniformComponents': Ko(x4["getParameter"](x4["MAX_VERTEX_UNIFORM_COMPONENTS"])),
          'maxVertexUniformBlocks': Ko(x4["getParameter"](x4["MAX_VERTEX_UNIFORM_BLOCKS"])),
          'maxVertexOutputComponents': Ko(x4["getParameter"](x4["MAX_VERTEX_OUTPUT_COMPONENTS"])),
          'maxVaryingComponents': Ko(x4["getParameter"](x4["MAX_VARYING_COMPONENTS"])),
          'maxFragmentUniformComponents': Ko(x4["getParameter"](x4["MAX_FRAGMENT_UNIFORM_COMPONENTS"])),
          'maxFragmentUniformBlocks': Ko(x4["getParameter"](x4["MAX_FRAGMENT_UNIFORM_BLOCKS"])),
          'maxFragmentInputComponents': Ko(x4["getParameter"](x4["MAX_FRAGMENT_INPUT_COMPONENTS"])),
          'minProgramTexelOffset': Ko(x4["getParameter"](x4["MIN_PROGRAM_TEXEL_OFFSET"])),
          'maxProgramTexelOffset': Ko(x4["getParameter"](x4["MAX_PROGRAM_TEXEL_OFFSET"])),
          'maxDrawBuffers': Ko(x4["getParameter"](x4["MAX_DRAW_BUFFERS"])),
          'maxColorAttachments': Ko(x4["getParameter"](x4["MAX_COLOR_ATTACHMENTS"])),
          'maxSamples': Ko(x4["getParameter"](x4["MAX_SAMPLES"])),
          'max3dTextureSize': Ko(x4["getParameter"](x4["MAX_3D_TEXTURE_SIZE"])),
          'maxArrayTextureLayers': Ko(x4["getParameter"](x4["MAX_ARRAY_TEXTURE_LAYERS"])),
          'maxTextureLodBias': Ko(x4["getParameter"](x4["MAX_TEXTURE_LOD_BIAS"])),
          'maxUniformBufferBindings': Ko(x4["getParameter"](x4["MAX_UNIFORM_BUFFER_BINDINGS"])),
          'maxUniformBlockSize': Ko(x4["getParameter"](x4["MAX_UNIFORM_BLOCK_SIZE"])),
          'uniformBufferOffsetAlignment': Ko(x4["getParameter"](x4["UNIFORM_BUFFER_OFFSET_ALIGNMENT"])),
          'maxCombinedUniformBlocks': Ko(x4["getParameter"](x4["MAX_COMBINED_UNIFORM_BLOCKS"])),
          'maxCombinedVertexUniformComponents': Ko(x4["getParameter"](x4["MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS"])),
          'maxCombinedFragmentUniformComponents': Ko(x4["getParameter"](x4["MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS"])),
          'maxTransformFeedbackInterleavedComponents': Ko(x4["getParameter"](x4["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS"])),
          'maxTransformFeedbackSeparateAttribs': Ko(x4["getParameter"](x4["MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS"])),
          'maxTransformFeedbackSeparateComponents': Ko(x4["getParameter"](x4["MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS"])),
          'maxElementIndex': Ko(x4["getParameter"](x4["MAX_ELEMENT_INDEX"])),
          'maxServerWaitTimeout': Ko(x4["getParameter"](x4["MAX_SERVER_WAIT_TIMEOUT"])),
          'webgl2Functions': Y5(x4)
        });
        var x9 = {};
        return x9["platform"] = navigator["platform"], x9["userAgent"] = navigator["userAgent"], Object["assign"](x9, x7, x8);
      }, sA;
    }());

    function Y8(sA, x0, x1) {
      var x2 = sA["createShader"](x0);
      sA["shaderSource"](x2, x1), sA["compileShader"](x2);
      var x3 = sA["getShaderParameter"](x2, sA["COMPILE_STATUS"]);
      if (x3) return x2;
      sA["deleteShader"](x2);
    }

    function Y9(sA, x0, x1) {
      var x2 = sA["createProgram"]();
      sA["attachShader"](x2, x0), sA["attachShader"](x2, x1), sA["linkProgram"](x2);
      var x3 = sA["getProgramParameter"](x2, sA["LINK_STATUS"]);
      if (x3) return sA["detachShader"](x2, x0), sA["detachShader"](x2, x1), sA["deleteShader"](x0), sA["deleteShader"](x1), x2;
      sA["deleteProgram"](x2);
    }

    function Yj(sA, x0) {
      var x1, x2, x3, x4, x5, x6, x7, x8;
      x1 = sA["length"] & 0x3, x2 = sA["length"] - x1, x3 = x0, x5 = 0xcc9e2d51, x6 = 0x1b873593, x8 = 0x0;
      while (x8 < x2) {
        x7 = sA["charCodeAt"](x8) & 0xff | (sA["charCodeAt"](++x8) & 0xff) << 0x8 | (sA["charCodeAt"](++x8) & 0xff) << 0x10 | (sA["charCodeAt"](++x8) & 0xff) << 0x18, ++x8, x7 = (x7 & 0xffff) * x5 + (((x7 >>> 0x10) * x5 & 0xffff) << 0x10) & 0xffffffff, x7 = x7 << 0xf | x7 >>> 0x11, x7 = (x7 & 0xffff) * x6 + (((x7 >>> 0x10) * x6 & 0xffff) << 0x10) & 0xffffffff, x3 ^= x7, x3 = x3 << 0xd | x3 >>> 0x13, x4 = (x3 & 0xffff) * 0x5 + (((x3 >>> 0x10) * 0x5 & 0xffff) << 0x10) & 0xffffffff, x3 = (x4 & 0xffff) + 0x6b64 + (((x4 >>> 0x10) + 0xe654 & 0xffff) << 0x10);
      }
      x7 = 0x0;
      switch (x1) {
        case 0x3:
          x7 ^= (sA["charCodeAt"](x8 + 0x2) & 0xff) << 0x10;
        case 0x2:
          x7 ^= (sA["charCodeAt"](x8 + 0x1) & 0xff) << 0x8;
        case 0x1:
          x7 ^= sA["charCodeAt"](x8) & 0xff, x7 = (x7 & 0xffff) * x5 + (((x7 >>> 0x10) * x5 & 0xffff) << 0x10) & 0xffffffff, x7 = x7 << 0xf | x7 >>> 0x11, x7 = (x7 & 0xffff) * x6 + (((x7 >>> 0x10) * x6 & 0xffff) << 0x10) & 0xffffffff, x3 ^= x7;
      }
      return x3 ^= sA["length"], x3 ^= x3 >>> 0x10, x3 = (x3 & 0xffff) * 0x85ebca6b + (((x3 >>> 0x10) * 0x85ebca6b & 0xffff) << 0x10) & 0xffffffff, x3 ^= x3 >>> 0xd, x3 = (x3 & 0xffff) * 0xc2b2ae35 + (((x3 >>> 0x10) * 0xc2b2ae35 & 0xffff) << 0x10) & 0xffffffff, x3 ^= x3 >>> 0x10, x3 >>> 0x0;
    }

    var Yf, Yc = function sA() {
      Yf = document["createElement"]("canvas"), Yf["width"] = 0x190, Yf["height"] = 0x190;
      var x0 = null;
      try {
        x0 = Yf["getContext"]("webgl") || Yf["getContext"]("experimental-webgl");
      } catch (x2) {
        var x1 = x2;
        window["Yoda"]["CAT"]["sendLog"]('', "jsError", "wg_" + x1["message"], x1["stack"] || '', "info");
      }
      return !x0 && (x0 = null), x0;
    };

    function YK() {
      var x0 = {};
      x0["glVersion"] = '';
      var x1 = {};
      x1["vendor"] = '', x1["renderer"] = '', x1["hash"] = '', x1["report"] = x0;
      var x2 = x1;
      try {
        var x3 = Yc();
        if (x3 === null) throw Error("不支持webgl");
        var x4 = "\n                attribute vec4 a_position;\n                uniform mat4 u_matrix;\n                varying vec4 v_color;\n                void main() {\n                    gl_Position = a_position;\n                    v_color = gl_Position * 0.5 + 0.5;\n                }\n            ", x5 = "\n                precision mediump float;\n                varying vec4 v_color;\n                void main() {\n                    gl_FragColor = v_color; // return reddish-purple\n                }\n            ", x6 = Y8(x3, x3["VERTEX_SHADER"], x4),
          x7 = Y8(x3, x3["FRAGMENT_SHADER"], x5), x8 = Y9(x3, x6, x7),
          x9 = x3["getAttribLocation"](x8, "a_position"), xj = x3["createBuffer"]();
        x3["bindBuffer"](x3["ARRAY_BUFFER"], xj);
        var xf = [0x0, 0x0, 0x0, 0.5, 0.7, 0x0];
        x3["bufferData"](x3["ARRAY_BUFFER"], new Float32Array(xf), x3["STATIC_DRAW"]), x3["viewport"](0x0, 0x0, x3["canvas"]["width"], x3["canvas"]["height"]), x3["clearColor"](0x0, 0x0, 0x0, 0x0), x3["clear"](x3["COLOR_BUFFER_BIT"]), x3["useProgram"](x8), x3["enableVertexAttribArray"](x9), x3["bindBuffer"](x3["ARRAY_BUFFER"], xj);
        var xc = 0x2, xK = x3["FLOAT"], xY = ![], xb = 0x0, xI = 0x0;
        x3["vertexAttribPointer"](x9, xc, xK, xY, xb, xI);
        var xs = x3["TRIANGLES"];
        xI = 0x0;
        var xx = 0x3;
        x3["drawArrays"](xs, xI, xx);
        var xi = x3["getExtension"]("WEBGL_debug_renderer_info");
        x2["vendor"] = x3["getParameter"](xi["UNMASKED_VENDOR_WEBGL"]) || '', x2["renderer"] = x3["getParameter"](xi["UNMASKED_RENDERER_WEBGL"]) || '';
        if (Yf) {
          var xv = Yj(Yf["toDataURL"](), 0x0);
          x2["hash"] = xv || '';
        }
        Yf = null;
        var xR = new Y7();
        x2["report"] = xR["getWebGlReport"]();
      } catch (xy) {
        Yf = null;
        var xe = xy;
        window["Yoda"]["CAT"]["sendLog"](location["href"], "jsError", "wg_" + xe["message"], xe["stack"] || '', "info");
      }
      return x2;
    }

    var YY = function x0() {
      var x1 = [], x2 = document["createElement"]("canvas");
      x2["width"] = 0x1e, x2["height"] = 0x1e, x2["style"]["display"] = "inline";
      var x3 = x2["getContext"]('2d');
      if (x3) {
        x3["globalCompositeOperation"] = "multiply", x3["font"] = "30px serif", x3["textAlign"] = "center", x3["textBaseline"] = "middle", x3["fillText"]("😜😂😍", 0xa0, 0x5a), x3["fillStyle"] = "#dd403b", x3["beginPath"](), x3["arc"](0xc, 0xf, 0xa, 0x0, Math['PI'] * 0x2, !![]), x3["closePath"](), x3["fill"](), x3["fillStyle"] = "#d66500", x3["beginPath"](), x3["arc"](0x32, 0x1e, 0x1e, 0x0, Math['PI'] * 0x2, !![]), x3["closePath"](), x3["fill"]();
        var x4 = x3["createLinearGradient"](0x0, 0x0, 0xc8, 0x0);
        x4["addColorStop"](0x0, "#F4F4F2"), x4["addColorStop"](0x1, "#F5E905"), x3["fillStyle"] = x4, x3["beginPath"](), x3["arc"](0x78, 0x23, 0x23, 0x0, Math['PI'] * 0x2, !![]), x3["closePath"](), x3["fill"]();
        var x5 = x3["createRadialGradient"](0x1e, 0x64, 0x23, 0x8c, 0x6e, 0x19);
        x5["addColorStop"](0.1, "#490F44"), x5["addColorStop"](0.5, "white"), x5["addColorStop"](0x1, "#FFFFFF"), x3["fillStyle"] = x5, x3["beginPath"](), x3["arc"](0x32, 0x64, 0x23, 0x0, Math['PI'] * 0x2, !![]), x3["fill"]();
        var x6 = x3["createLinearGradient"](0x0, 0x0, 0xc8, 0x0);
        x6["addColorStop"](0x0, "#A4A3A3"), x6["addColorStop"](0x1, "#E10909"), x3["fillStyle"] = x6, x3["beginPath"](), x3["arc"](0x91, 0x91, 0x32, 0x0, Math['PI'] * 0x2, !![]), x3["fill"](), x3["shadowColor"] = "#FFD161", x3["shadowOffsetX"] = 0x3, x3["shadowOffsetY"] = 0x3, x3["shadowBlur"] = 0x0, x3["fillStyle"] = "#FFBD00", x3["font"] = "16px xxx", x3["strokeText"]("EAT BETTER LIVE BETTER", 0x67, 0xaa), x3["beginPath"](), x3["moveTo"](0xa, 0xa), x3["bezierCurveTo"](0x28, 0x118, 0x19a, 0x32, 0x14, 0xa), x3["stroke"](), x3["beginPath"](), x3["moveTo"](0x14, 0x6e), x3["quadraticCurveTo"](0xb4, 0x78, 0xaa, 0xa), x3["stroke"]();
      }
      return x2["toDataURL"] && x1["push"](x2["toDataURL"]()), x1["join"]('~');
    }, Yb = function x1() {
      return K9(void 0x0, void 0x0, void 0x0, function () {
        return Kj(this, function (x2) {
          switch (x2["label"]) {
            case 0x0:
              return [0x4, new Promise(function (x3) {
                setTimeout(function () {
                  var x4 = '', x5 = Yc();
                  x5 && (x4 = x5["getParameter"](x5["VENDOR"])), x3(x4);
                }, 0x64);
              })];
            case 0x1:
              return [0x2, x2["sent"]()];
          }
        });
      });
    }, YI = function x2() {
      return K9(void 0x0, void 0x0, void 0x0, function () {
        return Kj(this, function (x3) {
          switch (x3["label"]) {
            case 0x0:
              return [0x4, new Promise(function (x4) {
                setTimeout(function () {
                  var x5 = '', x6 = Yc();
                  x6 && (x5 = x6["getParameter"](x6["RENDERER"])), x4(x5);
                }, 0x64);
              })];
            case 0x1:
              return [0x2, x3["sent"]()];
          }
        });
      });
    }, Ys = function x3() {
      return K9(void 0x0, void 0x0, void 0x0, function () {
        return Kj(this, function (x4) {
          switch (x4["label"]) {
            case 0x0:
              return [0x4, new Promise(function (x5) {
                setTimeout(function () {
                  var x6 = '', x7 = Yc();
                  if (x7) {
                    var x8 = x7["getExtension"]("WEBGL_debug_renderer_info");
                    x8 && (x6 = x7["getParameter"](x8["UNMASKED_RENDERER_WEBGL"]));
                  }
                  x5(x6);
                }, 0x64);
              })];
            case 0x1:
              return [0x2, x4["sent"]()];
          }
        });
      });
    }, Yx = function x4() {
      return K9(void 0x0, void 0x0, void 0x0, function () {
        return Kj(this, function (x5) {
          switch (x5["label"]) {
            case 0x0:
              return [0x4, new Promise(function (x6) {
                setTimeout(function () {
                  var x7 = '', x8 = Yc();
                  if (x8) {
                    var x9 = x8["getExtension"]("WEBGL_debug_renderer_info");
                    x9 && (x7 = x8["getParameter"](x9["UNMASKED_VENDOR_WEBGL"]));
                  }
                  x6(x7);
                }, 0x64);
              })];
            case 0x1:
              return [0x2, x5["sent"]()];
          }
        });
      });
    }, Yi = function x5(x6) {
      var x7 = ["monospace", "sans-serif", "serif"],
        x8 = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
        x9 = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
      x8 = x8["concat"](x9), x8 = x8["filter"](function (xE, xC) {
        return x8["indexOf"](xE) === xC;
      });
      var xj = "Eat Better, Live Better", xf = "72px",
        xc = document["getElementsByTagName"]("body")[0x0],
        xK = document["createElement"]("div"),
        xY = document["createElement"]("div"), xb = {}, xI = {}, xs = function xE() {
          var xC = document["createElement"]("span");
          return xC["style"]["position"] = "absolute", xC["style"]["left"] = "-9999px", xC["style"]["fontSize"] = xf, xC["style"]["fontStyle"] = "normal", xC["style"]["fontWeight"] = "normal", xC["style"]["letterSpacing"] = "normal", xC["style"]["lineBreak"] = "auto", xC["style"]["lineHeight"] = "normal", xC["style"]["textTransform"] = "none", xC["style"]["textAlign"] = "left", xC["style"]["textDecoration"] = "none", xC["style"]["textShadow"] = "none", xC["style"]["whiteSpace"] = "normal", xC["style"]["wordBreak"] = "normal", xC["style"]["wordSpacing"] = "normal", xC["textContent"] = xj, xC;
        }, xx = function xC() {
          var xr = [];
          for (var xZ = 0x0, xu = x7["length"]; xZ < xu; xZ++) {
            var xn = xs();
            xn["style"]["fontFamily"] = x7[xZ], xK["appendChild"](xn), xr["push"](xn);
          }
          return xr;
        }, xi = xx();
      xc["appendChild"](xK);
      for (var xv = 0x0, xR = x7["length"]; xv < xR; xv++) {
        xb[x7[xv]] = xi[xv]["offsetWidth"], xI[x7[xv]] = xi[xv]["offsetHeight"];
      }
      var xe = function xr(xZ, xu) {
        var xn = xs();
        return xn["style"]["fontFamily"] = '\x27' + xZ + '\x27,' + xu, xn;
      }, xy = function xZ() {
        var xu = {};
        for (var xn = 0x0, xS = x8["length"]; xn < xS; xn++) {
          var xl = [];
          for (var xh = 0x0, xV = x7["length"]; xh < xV; xh++) {
            var xQ = xe(x8[xn], x7[xh]);
            xY["appendChild"](xQ), xl["push"](xQ);
          }
          xu[x8[xn]] = xl;
        }
        return xu;
      }, xk = function xu(xn) {
        var xS = ![];
        for (var xl = 0x0; xl < x7["length"]; xl++) {
          xS = xn[xl]["offsetWidth"] !== xb[x7[xl]] || xn[xl]["offsetHeight"] !== xI[x7[xl]];
          if (xS) return xS;
        }
        return xS;
      }, xa = xy();
      xc["appendChild"](xY);
      var xM = [];
      for (var xt = 0x0, xH = x8["length"]; xt < xH; xt++) {
        xk(xa[x8[xt]]) && xM["push"](x8[xt]);
      }
      xc["removeChild"](xY), xc["removeChild"](xK), xM ? x6['fL'] = Kv(xM["join"](',')) : x6['fL'] = '';
    }, Yv = {};
    Yv["getCanvasFp"] = YY, Yv["getWebglVendor"] = Yb, Yv["getWebglRenderer"] = YI, Yv["getWebglRendererUnmasked"] = Ys, Yv["getWebglVendorUnmasked"] = Yx, Yv["getFonts"] = Yi;
    var YR = Yv, Ye = function x6(x7) {
      x7 = x7;
      if (x7) {
        var x8 = x7["pageX"] || x7["clientX"] + (document["documentElement"]["scrollLeft"] || document["body"]["scrollLeft"]),
          x9 = x7["pageY"] || x7["clientY"] + (document["documentElement"]["scrollTop"] || document["body"]["scrollTop"]),
          xj = {};
        return xj['x'] = x8, xj['y'] = x9, xj;
      }
      var xf = {};
      return xf['x'] = 0x0, xf['y'] = 0x0, xf;
    }, Yy = {
      'ts': new Date()["getTime"](),
      'fT': [],
      'mT': [],
      'kT': [],
      'aT': [],
      'tT': [],
      'dT': [],
      'sT': [],
      'inputs': [],
      'buttons': [],
      'event': function x7() {
        var x8 = function xv(xR) {
          var xe = xR, xy = Date["now"]() - Yy['ts'],
            xk = [xe["clientX"]["toFixed"](0x0), xe["clientY"]["toFixed"](0x0), xy]["join"](',');
          if (Yy['fT']["length"] < 0x3c) return Yy['fT']["unshift"](xk), ![];
          Yy['mT']["unshift"](xk), Yy['mT']["length"] >= 0x3c && (Yy['mT'] = Yy['mT']["slice"](0x0, 0x3c));
        }, x9 = function xR(xe) {
          var xy = xe, xk = xy["target"],
            xa = typeof xy["which"] === "number" ? xy["which"] : xy["keyCode"];
          if (xa && xk) {
            var xM = Date["now"]() - Yy['ts'];
            Yy['kT']["unshift"]([String["fromCharCode"](xa), xk["nodeName"], xM]["join"](','));
          }
          Yy['kT']["length"] > 0x1e && (Yy['kT'] = Yy['kT']["slice"](0x0, 0x1e));
        }, xj = function xe(xy) {
          var xk = xy, xa = xk["touches"][0x0], xM = Date["now"]() - Yy['ts'];
          Yy['tT']["unshift"]([xa["clientX"]["toFixed"](0x3), xa["clientY"]["toFixed"](0x3), xk["touches"]["length"], xM]["join"](',')), Yy['tT']["length"] > 0x3c && (Yy['tT'] = Yy['tT']["slice"](0x0, 0x3c));
        }, xf = function xy(xk) {
          var xa = xk, xM = xa["target"], xt = Date["now"]() - Yy['ts'];
          Yy['aT']["unshift"]([xa["clientX"]["toFixed"](0x0), xa["clientY"]["toFixed"](0x0), xM["nodeName"], xt]["join"](',')), Yy['aT']["length"] > 0x1e && (Yy['aT'] = Yy['aT']["slice"](0x0, 0x1e));
        }, xc = function xk(xa) {
          var xM = xa, xt = xM["target"];
          if (xt["nodeName"] && xt["nodeName"] === "INPUT") {
            var xH = xt['id'];
            !xH && (xH = xt['id'] = "rohr_" + parseInt(String(Math["random"]() * 0xf4240), 0xa));
            var xE = Yy["inputs"]["length"];
            for (var xC = 0x0; xC < xE; xC++) {
              xH === Yy["inputs"][0x0]["inputName"] && (Yy["inputs"]["splice"](0x0, 0x1), xC = 0x0, xE -= 0x1);
            }
            Yy["inputs"]["unshift"]({
              'inputName': xH,
              'editStartedTimeStamp': Date["now"](),
              'keyboardEvent': "0-0-0-0"
            });
          }
        }, xK = function xa(xM) {
          var xt = xM, xH = xt["target"];
          if (xH["nodeName"] && xH["nodeName"] === "INPUT") {
            var xE = Yy["inputs"][0x0];
            if (xE && xE["keyboardEvent"]) {
              var xC = xE["keyboardEvent"]["split"]('-');
              xC[0x2] = '1', xE["keyboardEvent"] = xC["join"]('-');
            }
          }
        }, xY = function xM(xt) {
          var xH = xt, xE = xH["target"];
          if (xE["nodeName"] && xE["nodeName"] === "INPUT") {
            var xC = Yy["inputs"][0x0];
            if (xC && xC["keyboardEvent"]) {
              var xr = xC["keyboardEvent"]["split"]('-'),
                xZ = typeof xH["which"] === "number" ? xH["which"] : xH["keyCode"];
              xZ === 0x9 && (xr[0x0] = String(parseInt(xr[0x0], 0xa) + 0x1));
              xr[0x1] = String(parseInt(xr[0x1], 0xa) + 0x1);
              var xu = Date["now"]();
              if (xC["lastTime"]) {
                var xn = xC["lastTime"];
                xr[0x3] = xr[0x3] + '|' + parseInt(String(xu - xn), 0x24);
              }
              Yy["inputs"][0x0]["lastTime"] = xu, Yy["inputs"][0x0]["keyboardEvent"] = xr["join"]('-');
            }
          }
        }, xb = function xt(xH) {
          var xE = xH, xC = xE["target"];
          if (xC["nodeName"] && xC["nodeName"] === "INPUT") {
            var xr = Yy["inputs"][0x0];
            if (xr && xr["keyboardEvent"]) {
              xr["editFinishedTimeStamp"] = Date["now"]();
              var xZ = xr["keyboardEvent"]["split"]('-');
              xZ[0x3] !== '0' && (xZ[0x3] = xZ[0x3]["substr"](0x2)), delete xr["lastTime"], xr["keyboardEvent"] = xZ["join"]('-');
            }
          }
        }, xI = function xH(xE) {
          var xC, xr, xZ, xu;
          "ontouchstart" in document ? (xC = xE, xr = xC["touches"][0x0], xZ = xr["pageX"], xu = xr["pageY"]) : (xC = xE, xZ = xC["offsetX"], xu = xC["offsetY"]);
          var xn = xC["target"];
          if (xn["nodeName"] && xn["nodeName"] === "BUTTON") {
            var xS = xn['id'];
            !xS && (xS = xn['id'] = "rohr_" + parseInt(String(Math["random"]() * 0xf4240), 0xa));
            var xl = Yy["buttons"]["length"];
            for (var xh = 0x0; xh < xl; xh++) {
              xS === Yy["buttons"][xh]["buttonName"] && (Yy["buttons"]["splice"](xh, 0x1), xh = 0x0, xl -= 0x1);
            }
            var xV = Ye(xC), xQ = xn["clientWidth"], xL = xn["clientHeight"], xB = xZ / xQ * 0x3e8,
              xW = (xL - xu) / xL * 0x3e8;
            Yy["buttons"]["unshift"]({
              'buttonName': xS,
              'touchPoint': '{' + xV['x'] + ',' + xV['y'] + '}',
              'touchPosition': '{' + Math["floor"](xB) / 0xa + ',' + Math["floor"](xW) / 0xa + '}',
              'touchTimeStamp': Date["now"]()
            });
          }
        }, xs = function xE(xC) {
          var xr = xC, xZ = xr["target"], xu = Date["now"]() - Yy['ts'];
          Yy['dT']["unshift"]([xr["clientX"]["toFixed"](0x0), xr["clientY"]["toFixed"](0x0), xZ["nodeName"], xu]["join"](',')), Yy['dT']["length"] > 0x3c && (Yy['dT'] = Yy['dT']["slice"](0x0, 0x3c));
        }, xx = function xC(xr) {
          var xZ = xr, xu = xZ["touches"][0x0], xn = xZ["target"],
            xS = Date["now"]() - Yy['ts'];
          Yy['sT']["unshift"]([xu["pageX"]["toFixed"](0x3), xu["pageY"]["toFixed"](0x3), xn["nodeName"], xS]["join"](',')), Yy['sT']["length"] > 0x3c && (Yy['sT'] = Yy['sT']["slice"](0x0, 0x3c));
        };

        function xi(xr, xZ, xu, xn) {
          xZ["addEventListener"](xr, xu, xn || ![]);
        }

        xi("mousemove", document, x8, !![]), xi("keydown", document, x9, !![]), xi("click", document, xf, !![]), "ontouchmove" in document && xi("touchmove", document, xj, !![]), xi("focus", document, xc, !![]), xi("mouseout", document, xK, !![]), xi("keydown", document, xY, !![]), xi("blur", document, xb, !![]), "ontouchstart" in document ? xi("touchstart", document, xI, !![]) : xi("click", document, xI, !![]), xi("mousedown", document, xs, !![]), xi("touchstart", document, xx, !![]);
      }
    };

    function Yk() {
      try {
        var x8 = new (window[("AudioContext")] || window[("webkitAudioContext")])(),
          x9 = x8["createAnalyser"]();
        x9["maxDecibels"] = 0x64;
        var xj = x8["createOscillator"](), xf = x8["createGain"]();
        xf["gain"]["value"] = 0.5, xj["connect"](xf), xf["connect"](x9), Ya(x9), xj["type"] = "square", xj["frequency"]["value"] = 0x208, xf["gain"]["setValueAtTime"](0x0, x8["currentTime"]), xf["gain"]["linearRampToValueAtTime"](0x1, x8["currentTime"] + 0.02), xj["start"](x8["currentTime"]), xf["gain"]["exponentialRampToValueAtTime"](0.001, x8["currentTime"] + 0x1), xj["stop"](x8["currentTime"] + 0x1), xf["disconnect"](), xj["disconnect"](), x9["disconnect"](), x8["close"]()["then"](function () {
        });
      } catch (xK) {
        var xc = xK;
        YM["data"] = '' + xc["message"], window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "audio_" + xc["message"], xc["stack"] || '', "info");
      }
    }

    function Ya(x8) {
      x8["fftSize"] = 0x100;
      try {
        var x9 = new window[("Float32Array")](x8["frequencyBinCount"]);
        if (!!x9) {
          var xj = 0x0, xf = function xK() {
            xj++;
            var xY = requestAnimationFrame(xK);
            x8["getFloatFrequencyData"](x9);
            var xb = x9["join"](',');
            xb["indexOf"]("-Infinity") !== 0x0 && (YM["data"] = xb, window["cancelAnimationFrame"](xY), document["removeEventListener"]("touchstart", Yk, ![]), document["removeEventListener"]("mousedown", Yk, ![]), document["removeEventListener"]("click", Yk, ![]));
          };
          window["requestAnimationFrame"](xf);
        }
      } catch (xY) {
        var xc = xY;
        YM["data"] = '' + xc["message"], window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "audio_" + xc["message"], xc["stack"] || '', "info");
      }
    }

    var YM = {
      'start': function x8() {
        document["addEventListener"]("touchstart", Yk, ![]), document["addEventListener"]("mousedown", Yk, ![]), document["addEventListener"]("click", Yk, ![]);
      }, 'getData': function x9() {
        return YM["data"] || '';
      }, 'data': ''
    };
    Yy["event"]();
    var Yt = YK(), YH = function xj() {
      var xf = function xv() {
        var xR = Math["max"](document["documentElement"]["clientWidth"], window["innerWidth"] || 0x0),
          xe = Math["max"](document["documentElement"]["clientHeight"], window["innerHeight"] || 0x0);
        return [xR, xe];
      }, xc = function xR() {
        var xe = [screen["width"], screen["height"]],
          xy = [screen["availWidth"], screen["availHeight"]], xk = screen["colorDepth"],
          xa = screen["pixelDepth"];
        return [xe, xy, xk, xa];
      }, xK = function xe() {
        try {
          var xy = Function("return this")(), xk = function xt() {
            var xH = (xy["constructor"] + '')["match"](/ (\w+)|$/);
            if (xH !== null) {
              var xE = xH[0x1];
              if (!xE) try {
                xy === "[object]" && (xE = "Window");
              } catch (xC) {
                xE = "WSH";
              }
              return xE;
            }
            return '';
          }, xa = xk(), xM = '';
          switch (xa) {
            case "Window":
              break;
            case "DedicatedWorkerGlobalScope":
              xM = 'ww';
              break;
            case "WSH":
              xM = "wsh";
              break;
            case "Object":
              xM = 'nj';
              break;
            default:
              xM = 'ot';
          }
          return xM;
        } catch (xH) {
          return "abnormal";
        }
      }, xY = function xy() {
        try {
          if (window["_phantom"] || window["phantom"] || window["callPhantom"]) return 'ps';
          return xK() || Kp["getwd"]();
        } catch (xk) {
          return window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "fp_" + xk["message"], xk["stack"], "info"), '';
        }
      }, xb = function xk() {
        var xa = document["referrer"], xM = window["location"]["href"];
        return [xM, xa];
      }, xI = function xa(xM) {
        try {
          var xt = JSON["stringify"](xM);
          return window["btoa"](encodeURIComponent(xt));
        } catch (xH) {
          return window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "fp_" + xH["message"], xH["stack"], "info"), '';
        }
      }, xs = function xM() {
        var xt = window["navigator"], xH = [];
        try {
          var xE = xt["plugins"], xC = void 0x0;
          for (xC in xE) {
            if (xE["hasOwnProperty"](xC)) {
              var xr = xE[xC]["name"] || '';
              xH["push"](xr);
            }
          }
        } catch (xZ) {
          window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "fp_" + xZ["message"], xZ["stack"], "info");
        }
        return xH;
      }, xx = {
        'v': "2.2.2",
        'ts': new Date()["getTime"](),
        'cts': new Date()["getTime"](),
        'brVD': xf(),
        'brR': xc(),
        'bI': xb(),
        'aM': xY() || '',
        'broP': xs(),
        'cV': Kv(YR["getCanvasFp"]()),
        'wV': '',
        'wR': '',
        'wVU': '',
        'wRU': '',
        'aF': '',
        'wI': Yt["hash"],
        'wC': JSON["stringify"](Yt["report"])
      };
      YR["getWebglVendor"]()["then"](function (xt) {
        xx['wV'] = xt;
      }), YR["getWebglRenderer"]()["then"](function (xt) {
        xx['wR'] = xt;
      }), YR["getWebglVendorUnmasked"]()["then"](function (xt) {
        xx["wVU"] = xt;
      }), YR["getWebglRendererUnmasked"]()["then"](function (xt) {
        xx["wRU"] = xt;
      });
      !!window["OscillatorNode"] && !!window["Float32Array"] && YM["start"]();
      setTimeout(function () {
        YR["getFonts"](xx);
      }, 0x0);
      !xx['aM'] && (Kp["listenwd"](function (xt) {
        xt && xt["length"] > 0x0 && (xx['aM'] = xt);
      }), !xx['aM'] && (xx['aM'] = ''));
      xx["reload"] = function () {
        xx["cts"] = Date["now"](), xx['aG'] = Kp["getWdLength"]()["toString"]() || 0x0;
        var xt = YM["getData"]();
        xt ? xx['aF'] = Kv(xt) : xx['aF'] = xt;
        xx['wA'] = Kp["getStringHashMD5"]();
        var xH = Object["assign"](xx, Yy);

        var tk = {
          "v": "2.2.2",
          "ts": new Date()['getTime'](),
          "cts": new Date()['getTime'](),
          "brVD": [1920, 976],
          "brR": [[1920, 1080], [1920, 1055], 24, 24],
          "bI": ["https://epassport.meituan.com/account/unitivelogin?service=hotel&loginsource=14&noSignup=true&bg_source=4&loginurl=https%3A%2F%2Febooking.meituan.com%2Febk%2Flogin%2Flogin.html&continue=https%3A%2F%2Febooking.meituan.com%2Fgw%2Faccount%2Fbiz%2Fsettoken%3Fredirect_uri%3Dhttps%253A%252F%252Febooking.meituan.com%252Febk%252Flogin%252Fsettoken.html%253Fredirect%253Dhttps%25253A%25252F%25252Febooking.meituan.com%25252Febooking%25252Fnew-workbench%25252Findex.html", ""],
          "aM": "",
          "broP": ["Chrome PDF Plugin", "Chrome PDF Viewer", "Google文档、表格及幻灯片的Office编辑扩展程序", "Native Client"],
          "cV": "a1b4c8734df3338a79119795e871e9c8",
          "wV": "WebKit",
          "wR": "WebKit WebGL",
          "wVU": "Google Inc. (ATI Technologies Inc.)",
          "wRU": "ANGLE (ATI Technologies Inc., AMD Radeon Pro 560 OpenGL Engine, OpenGL 4.1)",
          "aF": "",
          "wI": 2383829648,
          "wC": "{\"platform\":\"MacIntel\",\"userAgent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36\",\"contextName\":\"webgl2\",\"glVersion\":\"WebGL 2.0 (OpenGL ES 3.0 Chromium)\",\"shadingLanguageVersion\":\"WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.0 Chromium)\",\"vendor\":\"WebKit\",\"renderer\":\"WebKit WebGL\",\"unMaskedVendor\":\"Google Inc. (ATI Technologies Inc.)\",\"unMaskedRenderer\":\"ANGLE (ATI Technologies Inc., AMD Radeon Pro 560 OpenGL Engine, OpenGL 4.1)\",\"antialias\":\"Available\",\"angle\":\"No\",\"majorPerformanceCaveat\":\"No\",\"maxColorBuffers\":8,\"redBits\":8,\"greenBits\":8,\"blueBits\":8,\"alphaBits\":8,\"depthBits\":24,\"stencilBits\":8,\"maxRenderBufferSize\":16384,\"maxCombinedTextureImageUnits\":32,\"maxCubeMapTextureSize\":16384,\"maxFragmentUniformVectors\":1024,\"maxTextureImageUnits\":16,\"maxTextureSize\":16384,\"maxVaryingVectors\":32,\"maxVertexAttributes\":16,\"maxVertexTextureImageUnits\":16,\"maxVertexUniformVectors\":1024,\"aliasedLineWidthRange\":\"[1, 1]\",\"aliasedPointSizeRange\":\"[1, 8191]\",\"maxViewportDimensions\":\"[16384, 16384]\",\"maxAnisotropy\":16,\"vertexShaderBestPrecision\":\"[-1.7014118346046923e+38, 1.7014118346046923e+38] (23 bit mantissa)\",\"fragmentShaderBestPrecision\":\"[-1.7014118346046923e+38, 1.7014118346046923e+38] (23 bit mantissa)\",\"fragmentShaderFloatIntPrecision\":\"highp/highp\",\"webglExtensions\":[\"ANGLE_instanced_arrays\",\"EXT_blend_minmax\",\"EXT_color_buffer_half_float\",\"EXT_disjoint_timer_query\",\"EXT_float_blend\",\"EXT_frag_depth\",\"EXT_shader_texture_lod\",\"EXT_texture_compression_rgtc\",\"EXT_texture_filter_anisotropic\",\"EXT_sRGB\",\"KHR_parallel_shader_compile\",\"OES_element_index_uint\",\"OES_fbo_render_mipmap\",\"OES_standard_derivatives\",\"OES_texture_float\",\"OES_texture_float_linear\",\"OES_texture_half_float\",\"OES_texture_half_float_linear\",\"OES_vertex_array_object\",\"WEBGL_color_buffer_float\",\"WEBGL_compressed_texture_s3tc\",\"WEBGL_compressed_texture_s3tc_srgb\",\"WEBGL_debug_renderer_info\",\"WEBGL_debug_shaders\",\"WEBGL_depth_texture\",\"WEBGL_draw_buffers\",\"WEBGL_lose_context\",\"WEBGL_multi_draw\"],\"maxColorBuffers2\":1,\"webgl2Extensions\":[\"EXT_color_buffer_float\",\"EXT_color_buffer_half_float\",\"EXT_disjoint_timer_query_webgl2\",\"EXT_float_blend\",\"EXT_texture_compression_rgtc\",\"EXT_texture_filter_anisotropic\",\"EXT_texture_norm16\",\"KHR_parallel_shader_compile\",\"OES_draw_buffers_indexed\",\"OES_texture_float_linear\",\"WEBGL_compressed_texture_s3tc\",\"WEBGL_compressed_texture_s3tc_srgb\",\"WEBGL_debug_renderer_info\",\"WEBGL_debug_shaders\",\"WEBGL_lose_context\",\"WEBGL_multi_draw\"],\"maxVertexUniformComponents\":4096,\"maxVertexUniformBlocks\":16,\"maxVertexOutputComponents\":128,\"maxVaryingComponents\":128,\"maxFragmentUniformComponents\":4096,\"maxFragmentUniformBlocks\":16,\"maxFragmentInputComponents\":128,\"minProgramTexelOffset\":-8,\"maxProgramTexelOffset\":7,\"maxDrawBuffers\":8,\"maxColorAttachments\":8,\"maxSamples\":4,\"max3dTextureSize\":16384,\"maxArrayTextureLayers\":2048,\"maxTextureLodBias\":16,\"maxUniformBufferBindings\":72,\"maxUniformBlockSize\":65536,\"uniformBufferOffsetAlignment\":256,\"maxCombinedUniformBlocks\":32,\"maxCombinedVertexUniformComponents\":266240,\"maxCombinedFragmentUniformComponents\":266240,\"maxTransformFeedbackInterleavedComponents\":64,\"maxTransformFeedbackSeparateAttribs\":4,\"maxTransformFeedbackSeparateComponents\":4,\"maxElementIndex\":4294967295,\"maxServerWaitTimeout\":0,\"webgl2Functions\":[\"copyBufferSubData\",\"getBufferSubData\",\"blitFramebuffer\",\"framebufferTextureLayer\",\"getInternalformatParameter\",\"invalidateFramebuffer\",\"invalidateSubFramebuffer\",\"readBuffer\",\"renderbufferStorageMultisample\",\"texStorage2D\",\"texStorage3D\",\"texImage3D\",\"texSubImage3D\",\"copyTexSubImage3D\",\"compressedTexImage3D\",\"compressedTexSubImage3D\",\"getFragDataLocation\",\"uniform1ui\",\"uniform2ui\",\"uniform3ui\",\"uniform4ui\",\"uniform1uiv\",\"uniform2uiv\",\"uniform3uiv\",\"uniform4uiv\",\"uniformMatrix2x3fv\",\"uniformMatrix3x2fv\",\"uniformMatrix2x4fv\",\"uniformMatrix4x2fv\",\"uniformMatrix3x4fv\",\"uniformMatrix4x3fv\",\"vertexAttribI4i\",\"vertexAttribI4iv\",\"vertexAttribI4ui\",\"vertexAttribI4uiv\",\"vertexAttribIPointer\",\"vertexAttribDivisor\",\"drawArraysInstanced\",\"drawElementsInstanced\",\"drawRangeElements\",\"drawBuffers\",\"clearBufferiv\",\"clearBufferuiv\",\"clearBufferfv\",\"clearBufferfi\",\"createQuery\",\"deleteQuery\",\"isQuery\",\"beginQuery\",\"endQuery\",\"getQuery\",\"getQueryParameter\",\"createSampler\",\"deleteSampler\",\"isSampler\",\"bindSampler\",\"samplerParameteri\",\"samplerParameterf\",\"getSamplerParameter\",\"fenceSync\",\"isSync\",\"deleteSync\",\"clientWaitSync\",\"waitSync\",\"getSyncParameter\",\"createTransformFeedback\",\"deleteTransformFeedback\",\"isTransformFeedback\",\"bindTransformFeedback\",\"beginTransformFeedback\",\"endTransformFeedback\",\"transformFeedbackVaryings\",\"getTransformFeedbackVarying\",\"pauseTransformFeedback\",\"resumeTransformFeedback\",\"bindBufferBase\",\"bindBufferRange\",\"getIndexedParameter\",\"getUniformIndices\",\"getActiveUniforms\",\"getUniformBlockIndex\",\"getActiveUniformBlockParameter\",\"getActiveUniformBlockName\",\"uniformBlockBinding\",\"createVertexArray\",\"deleteVertexArray\",\"isVertexArray\",\"bindVertexArray\"]}",
          "fL": "daa2af0fe355479cb96b2ed5961c9cdc",
          "aG": "325",
          "wA": "390933e72e6096e878c1b972bac13f16",
          "fT": ["1074,180,799", "1063,180,782", "1049,181,765", "1038,181,749", "1026,181,732", "1015,181,714", "998,181,699", "969,181,681", "938,181,666", "909,182,649", "884,182,632", "874,182,615", "870,182,599", "870,182,533", "870,183,515", "871,185,499", "872,187,482", "874,191,465", "876,195,448", "876,199,432", "877,203,415", "877,206,398", "878,211,381", "878,213,365", "879,216,349", "879,217,342", "879,217,217", "879,217,191", "879,219,121"],
          "mT": [],
          "kT": [],
          "aT": [],
          "tT": [],
          "dT": ["870,182,DIV,556"],
          "sT": [],
          "inputs": [],
          "buttons": []
        };

        if(window['seed']['config']['debug'] && window['seed']['config']['debug']['token']){
          tk = window['seed']['config']['debug']['token'];
        }
        console.debug('token', JSON.stringify(tk));
        return xI(tk);
      };
      var xi = {};
      return xi["reload"] = xx["reload"], xi;
    };

    function YE(xf, xc, xK) {
      var xY = window["KNB"], xb = window["YODA_Bridge"],
        xI = xb && typeof xb["version"] === "number" && xb["version"] === 0x1;
      if (xY && xY["env"] && xY["env"]["isNative"] && xY["env"]["isTitans"]) {
        var xs = {};
        xs["contentType"] = "application/x-www-form-urlencoded", xs["contentEncoding"] = "gzip", xY["addRequestSignature"]({
          'method': "POST",
          'url': xf,
          'body': xc,
          'header': xs,
          'success': function xk(xa) {
            if (typeof xa["mtgsig"] === "string") {
              var xM = JSON["parse"](xa["mtgsig"])["mtgsig"];
              xK(xM);
            } else {
              if (K4(xa["mtgsig"]) === "object") {
                var xM = xa["mtgsig"]["mtgsig"];
                xK(xM);
              } else xK(''), window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "nativeSign sign v3 fail", xa["url"], "info");
            }
          },
          'fail': function xa(xM) {
            window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "nativeSign sign fail", JSON["stringify"](xM), "info"), xK('');
          }
        });
      } else {
        if (xI) {
          var xx = {};
          xx["contentType"] = "application/x-www-form-urlencoded", xx["contentEncoding"] = "gzip", xx["userAgent"] = navigator["userAgent"];
          var xi = {};
          xi["method"] = "POST", xi["url"] = xf, xi["body"] = xc, xi["header"] = xx;
          var xv = {};
          xv["action"] = "addRequestSignature", xv["data"] = xi;
          var xR = xv, xe = JSON["stringify"](xR), xy = window["prompt"](xe, xe) || '';
          xK(xy);
        } else xK('');
      }
    }

    function YC(xf) {
      return parseInt(xf, 0xa) === xf;
    }

    function Yr(xf) {
      if (!YC(xf["length"])) return ![];
      var xc;
      for (xc = 0x0; xc < xf["length"]; xc++) {
        if (!YC(xf[xc]) || xf[xc] < 0x0 || xf[xc] > 0xff) return ![];
      }
      return !![];
    }

    function YZ(xf, xc) {
      if (xf["buffer"] && xf["name"] === "Uint8Array") return xc && (xf["slice"] ? xf = xf["slice"]() : xf = Array["prototype"]["slice"]["call"](xf)), xf;
      if (Array["isArray"](xf)) {
        if (!Yr(xf)) throw new Error("Array contains invalid value: " + xf);
        return new Uint8Array(xf);
      }
      if (YC(xf["length"]) && Yr(xf)) return new Uint8Array(xf);
      throw new Error("unsupported array-like object");
    }

    function Yu(xf) {
      return new Uint8Array(xf);
    }

    function Yn(xf, xc, xK, xY, xb) {
      (xY != null || xb != null) && (xf["slice"] ? xf = xf["slice"](xY, xb) : xf = Array["prototype"]["slice"]["call"](xf, xY, xb)), xc["set"](xf, xK);
    }

    var YS = (function () {
      function xf(xY) {
        var xb = [], xI = 0x0;
        xY = encodeURI(xY);
        while (xI < xY["length"]) {
          var xs = xY["charCodeAt"](xI++);
          xs === 0x25 ? (xb["push"](parseInt(xY["substr"](xI, 0x2), 0x10)), xI += 0x2) : xb["push"](xs);
        }
        return YZ(xb);
      }

      function xc(xY) {
        var xb = [], xI = 0x0;
        while (xI < xY["length"]) {
          var xs = xY[xI];
          if (xs < 0x80) xb["push"](String["fromCharCode"](xs)), xI++; else xs > 0xbf && xs < 0xe0 ? (xb["push"](String["fromCharCode"]((xs & 0x1f) << 0x6 | xY[xI + 0x1] & 0x3f)), xI += 0x2) : (xb["push"](String["fromCharCode"]((xs & 0xf) << 0xc | (xY[xI + 0x1] & 0x3f) << 0x6 | xY[xI + 0x2] & 0x3f)), xI += 0x3);
        }
        return xb["join"]('');
      }

      var xK = {};
      return xK["toBytes"] = xf, xK["fromBytes"] = xc, xK;
    }()), Yl = (function () {
      function xf(xb) {
        var xI = [];
        for (var xs = 0x0; xs < xb["length"]; xs += 0x2) {
          xI["push"](parseInt(xb["substr"](xs, 0x2), 0x10));
        }
        return xI;
      }

      var xc = "0123456789abcdef";

      function xK(xb) {
        var xI = [];
        for (var xs = 0x0; xs < xb["length"]; xs++) {
          var xx = xb[xs];
          xI["push"](xc[(xx & 0xf0) >> 0x4] + xc[xx & 0xf]);
        }
        return xI["join"]('');
      }

      var xY = {};
      return xY["toBytes"] = xf, xY["fromBytes"] = xK, xY;
    }()), Yh = {};
    Yh['16'] = 0xa, Yh['24'] = 0xc, Yh['32'] = 0xe;
    var YV = Yh,
      YQ = [0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91],
      YL = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x1, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x4, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x5, 0x9a, 0x7, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x9, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x0, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x2, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0xc, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0xb, 0xdb, 0xe0, 0x32, 0x3a, 0xa, 0x49, 0x6, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x8, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x3, 0xf6, 0xe, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0xd, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0xf, 0xb0, 0x54, 0xbb, 0x16],
      YB = [0x52, 0x9, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb, 0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb, 0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0xb, 0x42, 0xfa, 0xc3, 0x4e, 0x8, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25, 0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92, 0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84, 0x90, 0xd8, 0xab, 0x0, 0x8c, 0xbc, 0xd3, 0xa, 0xf7, 0xe4, 0x58, 0x5, 0xb8, 0xb3, 0x45, 0x6, 0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0xf, 0x2, 0xc1, 0xaf, 0xbd, 0x3, 0x1, 0x13, 0x8a, 0x6b, 0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73, 0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e, 0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0xe, 0xaa, 0x18, 0xbe, 0x1b, 0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4, 0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x7, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f, 0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0xd, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef, 0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61, 0x17, 0x2b, 0x4, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0xc, 0x7d],
      YW = [0xc66363a5, 0xf87c7c84, 0xee777799, 0xf67b7b8d, 0xfff2f20d, 0xd66b6bbd, 0xde6f6fb1, 0x91c5c554, 0x60303050, 0x2010103, 0xce6767a9, 0x562b2b7d, 0xe7fefe19, 0xb5d7d762, 0x4dababe6, 0xec76769a, 0x8fcaca45, 0x1f82829d, 0x89c9c940, 0xfa7d7d87, 0xeffafa15, 0xb25959eb, 0x8e4747c9, 0xfbf0f00b, 0x41adadec, 0xb3d4d467, 0x5fa2a2fd, 0x45afafea, 0x239c9cbf, 0x53a4a4f7, 0xe4727296, 0x9bc0c05b, 0x75b7b7c2, 0xe1fdfd1c, 0x3d9393ae, 0x4c26266a, 0x6c36365a, 0x7e3f3f41, 0xf5f7f702, 0x83cccc4f, 0x6834345c, 0x51a5a5f4, 0xd1e5e534, 0xf9f1f108, 0xe2717193, 0xabd8d873, 0x62313153, 0x2a15153f, 0x804040c, 0x95c7c752, 0x46232365, 0x9dc3c35e, 0x30181828, 0x379696a1, 0xa05050f, 0x2f9a9ab5, 0xe070709, 0x24121236, 0x1b80809b, 0xdfe2e23d, 0xcdebeb26, 0x4e272769, 0x7fb2b2cd, 0xea75759f, 0x1209091b, 0x1d83839e, 0x582c2c74, 0x341a1a2e, 0x361b1b2d, 0xdc6e6eb2, 0xb45a5aee, 0x5ba0a0fb, 0xa45252f6, 0x763b3b4d, 0xb7d6d661, 0x7db3b3ce, 0x5229297b, 0xdde3e33e, 0x5e2f2f71, 0x13848497, 0xa65353f5, 0xb9d1d168, 0x0, 0xc1eded2c, 0x40202060, 0xe3fcfc1f, 0x79b1b1c8, 0xb65b5bed, 0xd46a6abe, 0x8dcbcb46, 0x67bebed9, 0x7239394b, 0x944a4ade, 0x984c4cd4, 0xb05858e8, 0x85cfcf4a, 0xbbd0d06b, 0xc5efef2a, 0x4faaaae5, 0xedfbfb16, 0x864343c5, 0x9a4d4dd7, 0x66333355, 0x11858594, 0x8a4545cf, 0xe9f9f910, 0x4020206, 0xfe7f7f81, 0xa05050f0, 0x783c3c44, 0x259f9fba, 0x4ba8a8e3, 0xa25151f3, 0x5da3a3fe, 0x804040c0, 0x58f8f8a, 0x3f9292ad, 0x219d9dbc, 0x70383848, 0xf1f5f504, 0x63bcbcdf, 0x77b6b6c1, 0xafdada75, 0x42212163, 0x20101030, 0xe5ffff1a, 0xfdf3f30e, 0xbfd2d26d, 0x81cdcd4c, 0x180c0c14, 0x26131335, 0xc3ecec2f, 0xbe5f5fe1, 0x359797a2, 0x884444cc, 0x2e171739, 0x93c4c457, 0x55a7a7f2, 0xfc7e7e82, 0x7a3d3d47, 0xc86464ac, 0xba5d5de7, 0x3219192b, 0xe6737395, 0xc06060a0, 0x19818198, 0x9e4f4fd1, 0xa3dcdc7f, 0x44222266, 0x542a2a7e, 0x3b9090ab, 0xb888883, 0x8c4646ca, 0xc7eeee29, 0x6bb8b8d3, 0x2814143c, 0xa7dede79, 0xbc5e5ee2, 0x160b0b1d, 0xaddbdb76, 0xdbe0e03b, 0x64323256, 0x743a3a4e, 0x140a0a1e, 0x924949db, 0xc06060a, 0x4824246c, 0xb85c5ce4, 0x9fc2c25d, 0xbdd3d36e, 0x43acacef, 0xc46262a6, 0x399191a8, 0x319595a4, 0xd3e4e437, 0xf279798b, 0xd5e7e732, 0x8bc8c843, 0x6e373759, 0xda6d6db7, 0x18d8d8c, 0xb1d5d564, 0x9c4e4ed2, 0x49a9a9e0, 0xd86c6cb4, 0xac5656fa, 0xf3f4f407, 0xcfeaea25, 0xca6565af, 0xf47a7a8e, 0x47aeaee9, 0x10080818, 0x6fbabad5, 0xf0787888, 0x4a25256f, 0x5c2e2e72, 0x381c1c24, 0x57a6a6f1, 0x73b4b4c7, 0x97c6c651, 0xcbe8e823, 0xa1dddd7c, 0xe874749c, 0x3e1f1f21, 0x964b4bdd, 0x61bdbddc, 0xd8b8b86, 0xf8a8a85, 0xe0707090, 0x7c3e3e42, 0x71b5b5c4, 0xcc6666aa, 0x904848d8, 0x6030305, 0xf7f6f601, 0x1c0e0e12, 0xc26161a3, 0x6a35355f, 0xae5757f9, 0x69b9b9d0, 0x17868691, 0x99c1c158, 0x3a1d1d27, 0x279e9eb9, 0xd9e1e138, 0xebf8f813, 0x2b9898b3, 0x22111133, 0xd26969bb, 0xa9d9d970, 0x78e8e89, 0x339494a7, 0x2d9b9bb6, 0x3c1e1e22, 0x15878792, 0xc9e9e920, 0x87cece49, 0xaa5555ff, 0x50282878, 0xa5dfdf7a, 0x38c8c8f, 0x59a1a1f8, 0x9898980, 0x1a0d0d17, 0x65bfbfda, 0xd7e6e631, 0x844242c6, 0xd06868b8, 0x824141c3, 0x299999b0, 0x5a2d2d77, 0x1e0f0f11, 0x7bb0b0cb, 0xa85454fc, 0x6dbbbbd6, 0x2c16163a],
      Yg = [0xa5c66363, 0x84f87c7c, 0x99ee7777, 0x8df67b7b, 0xdfff2f2, 0xbdd66b6b, 0xb1de6f6f, 0x5491c5c5, 0x50603030, 0x3020101, 0xa9ce6767, 0x7d562b2b, 0x19e7fefe, 0x62b5d7d7, 0xe64dabab, 0x9aec7676, 0x458fcaca, 0x9d1f8282, 0x4089c9c9, 0x87fa7d7d, 0x15effafa, 0xebb25959, 0xc98e4747, 0xbfbf0f0, 0xec41adad, 0x67b3d4d4, 0xfd5fa2a2, 0xea45afaf, 0xbf239c9c, 0xf753a4a4, 0x96e47272, 0x5b9bc0c0, 0xc275b7b7, 0x1ce1fdfd, 0xae3d9393, 0x6a4c2626, 0x5a6c3636, 0x417e3f3f, 0x2f5f7f7, 0x4f83cccc, 0x5c683434, 0xf451a5a5, 0x34d1e5e5, 0x8f9f1f1, 0x93e27171, 0x73abd8d8, 0x53623131, 0x3f2a1515, 0xc080404, 0x5295c7c7, 0x65462323, 0x5e9dc3c3, 0x28301818, 0xa1379696, 0xf0a0505, 0xb52f9a9a, 0x90e0707, 0x36241212, 0x9b1b8080, 0x3ddfe2e2, 0x26cdebeb, 0x694e2727, 0xcd7fb2b2, 0x9fea7575, 0x1b120909, 0x9e1d8383, 0x74582c2c, 0x2e341a1a, 0x2d361b1b, 0xb2dc6e6e, 0xeeb45a5a, 0xfb5ba0a0, 0xf6a45252, 0x4d763b3b, 0x61b7d6d6, 0xce7db3b3, 0x7b522929, 0x3edde3e3, 0x715e2f2f, 0x97138484, 0xf5a65353, 0x68b9d1d1, 0x0, 0x2cc1eded, 0x60402020, 0x1fe3fcfc, 0xc879b1b1, 0xedb65b5b, 0xbed46a6a, 0x468dcbcb, 0xd967bebe, 0x4b723939, 0xde944a4a, 0xd4984c4c, 0xe8b05858, 0x4a85cfcf, 0x6bbbd0d0, 0x2ac5efef, 0xe54faaaa, 0x16edfbfb, 0xc5864343, 0xd79a4d4d, 0x55663333, 0x94118585, 0xcf8a4545, 0x10e9f9f9, 0x6040202, 0x81fe7f7f, 0xf0a05050, 0x44783c3c, 0xba259f9f, 0xe34ba8a8, 0xf3a25151, 0xfe5da3a3, 0xc0804040, 0x8a058f8f, 0xad3f9292, 0xbc219d9d, 0x48703838, 0x4f1f5f5, 0xdf63bcbc, 0xc177b6b6, 0x75afdada, 0x63422121, 0x30201010, 0x1ae5ffff, 0xefdf3f3, 0x6dbfd2d2, 0x4c81cdcd, 0x14180c0c, 0x35261313, 0x2fc3ecec, 0xe1be5f5f, 0xa2359797, 0xcc884444, 0x392e1717, 0x5793c4c4, 0xf255a7a7, 0x82fc7e7e, 0x477a3d3d, 0xacc86464, 0xe7ba5d5d, 0x2b321919, 0x95e67373, 0xa0c06060, 0x98198181, 0xd19e4f4f, 0x7fa3dcdc, 0x66442222, 0x7e542a2a, 0xab3b9090, 0x830b8888, 0xca8c4646, 0x29c7eeee, 0xd36bb8b8, 0x3c281414, 0x79a7dede, 0xe2bc5e5e, 0x1d160b0b, 0x76addbdb, 0x3bdbe0e0, 0x56643232, 0x4e743a3a, 0x1e140a0a, 0xdb924949, 0xa0c0606, 0x6c482424, 0xe4b85c5c, 0x5d9fc2c2, 0x6ebdd3d3, 0xef43acac, 0xa6c46262, 0xa8399191, 0xa4319595, 0x37d3e4e4, 0x8bf27979, 0x32d5e7e7, 0x438bc8c8, 0x596e3737, 0xb7da6d6d, 0x8c018d8d, 0x64b1d5d5, 0xd29c4e4e, 0xe049a9a9, 0xb4d86c6c, 0xfaac5656, 0x7f3f4f4, 0x25cfeaea, 0xafca6565, 0x8ef47a7a, 0xe947aeae, 0x18100808, 0xd56fbaba, 0x88f07878, 0x6f4a2525, 0x725c2e2e, 0x24381c1c, 0xf157a6a6, 0xc773b4b4, 0x5197c6c6, 0x23cbe8e8, 0x7ca1dddd, 0x9ce87474, 0x213e1f1f, 0xdd964b4b, 0xdc61bdbd, 0x860d8b8b, 0x850f8a8a, 0x90e07070, 0x427c3e3e, 0xc471b5b5, 0xaacc6666, 0xd8904848, 0x5060303, 0x1f7f6f6, 0x121c0e0e, 0xa3c26161, 0x5f6a3535, 0xf9ae5757, 0xd069b9b9, 0x91178686, 0x5899c1c1, 0x273a1d1d, 0xb9279e9e, 0x38d9e1e1, 0x13ebf8f8, 0xb32b9898, 0x33221111, 0xbbd26969, 0x70a9d9d9, 0x89078e8e, 0xa7339494, 0xb62d9b9b, 0x223c1e1e, 0x92158787, 0x20c9e9e9, 0x4987cece, 0xffaa5555, 0x78502828, 0x7aa5dfdf, 0x8f038c8c, 0xf859a1a1, 0x80098989, 0x171a0d0d, 0xda65bfbf, 0x31d7e6e6, 0xc6844242, 0xb8d06868, 0xc3824141, 0xb0299999, 0x775a2d2d, 0x111e0f0f, 0xcb7bb0b0, 0xfca85454, 0xd66dbbbb, 0x3a2c1616],
      YJ = [0x63a5c663, 0x7c84f87c, 0x7799ee77, 0x7b8df67b, 0xf20dfff2, 0x6bbdd66b, 0x6fb1de6f, 0xc55491c5, 0x30506030, 0x1030201, 0x67a9ce67, 0x2b7d562b, 0xfe19e7fe, 0xd762b5d7, 0xabe64dab, 0x769aec76, 0xca458fca, 0x829d1f82, 0xc94089c9, 0x7d87fa7d, 0xfa15effa, 0x59ebb259, 0x47c98e47, 0xf00bfbf0, 0xadec41ad, 0xd467b3d4, 0xa2fd5fa2, 0xafea45af, 0x9cbf239c, 0xa4f753a4, 0x7296e472, 0xc05b9bc0, 0xb7c275b7, 0xfd1ce1fd, 0x93ae3d93, 0x266a4c26, 0x365a6c36, 0x3f417e3f, 0xf702f5f7, 0xcc4f83cc, 0x345c6834, 0xa5f451a5, 0xe534d1e5, 0xf108f9f1, 0x7193e271, 0xd873abd8, 0x31536231, 0x153f2a15, 0x40c0804, 0xc75295c7, 0x23654623, 0xc35e9dc3, 0x18283018, 0x96a13796, 0x50f0a05, 0x9ab52f9a, 0x7090e07, 0x12362412, 0x809b1b80, 0xe23ddfe2, 0xeb26cdeb, 0x27694e27, 0xb2cd7fb2, 0x759fea75, 0x91b1209, 0x839e1d83, 0x2c74582c, 0x1a2e341a, 0x1b2d361b, 0x6eb2dc6e, 0x5aeeb45a, 0xa0fb5ba0, 0x52f6a452, 0x3b4d763b, 0xd661b7d6, 0xb3ce7db3, 0x297b5229, 0xe33edde3, 0x2f715e2f, 0x84971384, 0x53f5a653, 0xd168b9d1, 0x0, 0xed2cc1ed, 0x20604020, 0xfc1fe3fc, 0xb1c879b1, 0x5bedb65b, 0x6abed46a, 0xcb468dcb, 0xbed967be, 0x394b7239, 0x4ade944a, 0x4cd4984c, 0x58e8b058, 0xcf4a85cf, 0xd06bbbd0, 0xef2ac5ef, 0xaae54faa, 0xfb16edfb, 0x43c58643, 0x4dd79a4d, 0x33556633, 0x85941185, 0x45cf8a45, 0xf910e9f9, 0x2060402, 0x7f81fe7f, 0x50f0a050, 0x3c44783c, 0x9fba259f, 0xa8e34ba8, 0x51f3a251, 0xa3fe5da3, 0x40c08040, 0x8f8a058f, 0x92ad3f92, 0x9dbc219d, 0x38487038, 0xf504f1f5, 0xbcdf63bc, 0xb6c177b6, 0xda75afda, 0x21634221, 0x10302010, 0xff1ae5ff, 0xf30efdf3, 0xd26dbfd2, 0xcd4c81cd, 0xc14180c, 0x13352613, 0xec2fc3ec, 0x5fe1be5f, 0x97a23597, 0x44cc8844, 0x17392e17, 0xc45793c4, 0xa7f255a7, 0x7e82fc7e, 0x3d477a3d, 0x64acc864, 0x5de7ba5d, 0x192b3219, 0x7395e673, 0x60a0c060, 0x81981981, 0x4fd19e4f, 0xdc7fa3dc, 0x22664422, 0x2a7e542a, 0x90ab3b90, 0x88830b88, 0x46ca8c46, 0xee29c7ee, 0xb8d36bb8, 0x143c2814, 0xde79a7de, 0x5ee2bc5e, 0xb1d160b, 0xdb76addb, 0xe03bdbe0, 0x32566432, 0x3a4e743a, 0xa1e140a, 0x49db9249, 0x60a0c06, 0x246c4824, 0x5ce4b85c, 0xc25d9fc2, 0xd36ebdd3, 0xacef43ac, 0x62a6c462, 0x91a83991, 0x95a43195, 0xe437d3e4, 0x798bf279, 0xe732d5e7, 0xc8438bc8, 0x37596e37, 0x6db7da6d, 0x8d8c018d, 0xd564b1d5, 0x4ed29c4e, 0xa9e049a9, 0x6cb4d86c, 0x56faac56, 0xf407f3f4, 0xea25cfea, 0x65afca65, 0x7a8ef47a, 0xaee947ae, 0x8181008, 0xbad56fba, 0x7888f078, 0x256f4a25, 0x2e725c2e, 0x1c24381c, 0xa6f157a6, 0xb4c773b4, 0xc65197c6, 0xe823cbe8, 0xdd7ca1dd, 0x749ce874, 0x1f213e1f, 0x4bdd964b, 0xbddc61bd, 0x8b860d8b, 0x8a850f8a, 0x7090e070, 0x3e427c3e, 0xb5c471b5, 0x66aacc66, 0x48d89048, 0x3050603, 0xf601f7f6, 0xe121c0e, 0x61a3c261, 0x355f6a35, 0x57f9ae57, 0xb9d069b9, 0x86911786, 0xc15899c1, 0x1d273a1d, 0x9eb9279e, 0xe138d9e1, 0xf813ebf8, 0x98b32b98, 0x11332211, 0x69bbd269, 0xd970a9d9, 0x8e89078e, 0x94a73394, 0x9bb62d9b, 0x1e223c1e, 0x87921587, 0xe920c9e9, 0xce4987ce, 0x55ffaa55, 0x28785028, 0xdf7aa5df, 0x8c8f038c, 0xa1f859a1, 0x89800989, 0xd171a0d, 0xbfda65bf, 0xe631d7e6, 0x42c68442, 0x68b8d068, 0x41c38241, 0x99b02999, 0x2d775a2d, 0xf111e0f, 0xb0cb7bb0, 0x54fca854, 0xbbd66dbb, 0x163a2c16],
      YP = [0x6363a5c6, 0x7c7c84f8, 0x777799ee, 0x7b7b8df6, 0xf2f20dff, 0x6b6bbdd6, 0x6f6fb1de, 0xc5c55491, 0x30305060, 0x1010302, 0x6767a9ce, 0x2b2b7d56, 0xfefe19e7, 0xd7d762b5, 0xababe64d, 0x76769aec, 0xcaca458f, 0x82829d1f, 0xc9c94089, 0x7d7d87fa, 0xfafa15ef, 0x5959ebb2, 0x4747c98e, 0xf0f00bfb, 0xadadec41, 0xd4d467b3, 0xa2a2fd5f, 0xafafea45, 0x9c9cbf23, 0xa4a4f753, 0x727296e4, 0xc0c05b9b, 0xb7b7c275, 0xfdfd1ce1, 0x9393ae3d, 0x26266a4c, 0x36365a6c, 0x3f3f417e, 0xf7f702f5, 0xcccc4f83, 0x34345c68, 0xa5a5f451, 0xe5e534d1, 0xf1f108f9, 0x717193e2, 0xd8d873ab, 0x31315362, 0x15153f2a, 0x4040c08, 0xc7c75295, 0x23236546, 0xc3c35e9d, 0x18182830, 0x9696a137, 0x5050f0a, 0x9a9ab52f, 0x707090e, 0x12123624, 0x80809b1b, 0xe2e23ddf, 0xebeb26cd, 0x2727694e, 0xb2b2cd7f, 0x75759fea, 0x9091b12, 0x83839e1d, 0x2c2c7458, 0x1a1a2e34, 0x1b1b2d36, 0x6e6eb2dc, 0x5a5aeeb4, 0xa0a0fb5b, 0x5252f6a4, 0x3b3b4d76, 0xd6d661b7, 0xb3b3ce7d, 0x29297b52, 0xe3e33edd, 0x2f2f715e, 0x84849713, 0x5353f5a6, 0xd1d168b9, 0x0, 0xeded2cc1, 0x20206040, 0xfcfc1fe3, 0xb1b1c879, 0x5b5bedb6, 0x6a6abed4, 0xcbcb468d, 0xbebed967, 0x39394b72, 0x4a4ade94, 0x4c4cd498, 0x5858e8b0, 0xcfcf4a85, 0xd0d06bbb, 0xefef2ac5, 0xaaaae54f, 0xfbfb16ed, 0x4343c586, 0x4d4dd79a, 0x33335566, 0x85859411, 0x4545cf8a, 0xf9f910e9, 0x2020604, 0x7f7f81fe, 0x5050f0a0, 0x3c3c4478, 0x9f9fba25, 0xa8a8e34b, 0x5151f3a2, 0xa3a3fe5d, 0x4040c080, 0x8f8f8a05, 0x9292ad3f, 0x9d9dbc21, 0x38384870, 0xf5f504f1, 0xbcbcdf63, 0xb6b6c177, 0xdada75af, 0x21216342, 0x10103020, 0xffff1ae5, 0xf3f30efd, 0xd2d26dbf, 0xcdcd4c81, 0xc0c1418, 0x13133526, 0xecec2fc3, 0x5f5fe1be, 0x9797a235, 0x4444cc88, 0x1717392e, 0xc4c45793, 0xa7a7f255, 0x7e7e82fc, 0x3d3d477a, 0x6464acc8, 0x5d5de7ba, 0x19192b32, 0x737395e6, 0x6060a0c0, 0x81819819, 0x4f4fd19e, 0xdcdc7fa3, 0x22226644, 0x2a2a7e54, 0x9090ab3b, 0x8888830b, 0x4646ca8c, 0xeeee29c7, 0xb8b8d36b, 0x14143c28, 0xdede79a7, 0x5e5ee2bc, 0xb0b1d16, 0xdbdb76ad, 0xe0e03bdb, 0x32325664, 0x3a3a4e74, 0xa0a1e14, 0x4949db92, 0x6060a0c, 0x24246c48, 0x5c5ce4b8, 0xc2c25d9f, 0xd3d36ebd, 0xacacef43, 0x6262a6c4, 0x9191a839, 0x9595a431, 0xe4e437d3, 0x79798bf2, 0xe7e732d5, 0xc8c8438b, 0x3737596e, 0x6d6db7da, 0x8d8d8c01, 0xd5d564b1, 0x4e4ed29c, 0xa9a9e049, 0x6c6cb4d8, 0x5656faac, 0xf4f407f3, 0xeaea25cf, 0x6565afca, 0x7a7a8ef4, 0xaeaee947, 0x8081810, 0xbabad56f, 0x787888f0, 0x25256f4a, 0x2e2e725c, 0x1c1c2438, 0xa6a6f157, 0xb4b4c773, 0xc6c65197, 0xe8e823cb, 0xdddd7ca1, 0x74749ce8, 0x1f1f213e, 0x4b4bdd96, 0xbdbddc61, 0x8b8b860d, 0x8a8a850f, 0x707090e0, 0x3e3e427c, 0xb5b5c471, 0x6666aacc, 0x4848d890, 0x3030506, 0xf6f601f7, 0xe0e121c, 0x6161a3c2, 0x35355f6a, 0x5757f9ae, 0xb9b9d069, 0x86869117, 0xc1c15899, 0x1d1d273a, 0x9e9eb927, 0xe1e138d9, 0xf8f813eb, 0x9898b32b, 0x11113322, 0x6969bbd2, 0xd9d970a9, 0x8e8e8907, 0x9494a733, 0x9b9bb62d, 0x1e1e223c, 0x87879215, 0xe9e920c9, 0xcece4987, 0x5555ffaa, 0x28287850, 0xdfdf7aa5, 0x8c8c8f03, 0xa1a1f859, 0x89898009, 0xd0d171a, 0xbfbfda65, 0xe6e631d7, 0x4242c684, 0x6868b8d0, 0x4141c382, 0x9999b029, 0x2d2d775a, 0xf0f111e, 0xb0b0cb7b, 0x5454fca8, 0xbbbbd66d, 0x16163a2c],
      Yq = [0x51f4a750, 0x7e416553, 0x1a17a4c3, 0x3a275e96, 0x3bab6bcb, 0x1f9d45f1, 0xacfa58ab, 0x4be30393, 0x2030fa55, 0xad766df6, 0x88cc7691, 0xf5024c25, 0x4fe5d7fc, 0xc52acbd7, 0x26354480, 0xb562a38f, 0xdeb15a49, 0x25ba1b67, 0x45ea0e98, 0x5dfec0e1, 0xc32f7502, 0x814cf012, 0x8d4697a3, 0x6bd3f9c6, 0x38f5fe7, 0x15929c95, 0xbf6d7aeb, 0x955259da, 0xd4be832d, 0x587421d3, 0x49e06929, 0x8ec9c844, 0x75c2896a, 0xf48e7978, 0x99583e6b, 0x27b971dd, 0xbee14fb6, 0xf088ad17, 0xc920ac66, 0x7dce3ab4, 0x63df4a18, 0xe51a3182, 0x97513360, 0x62537f45, 0xb16477e0, 0xbb6bae84, 0xfe81a01c, 0xf9082b94, 0x70486858, 0x8f45fd19, 0x94de6c87, 0x527bf8b7, 0xab73d323, 0x724b02e2, 0xe31f8f57, 0x6655ab2a, 0xb2eb2807, 0x2fb5c203, 0x86c57b9a, 0xd33708a5, 0x302887f2, 0x23bfa5b2, 0x2036aba, 0xed16825c, 0x8acf1c2b, 0xa779b492, 0xf307f2f0, 0x4e69e2a1, 0x65daf4cd, 0x605bed5, 0xd134621f, 0xc4a6fe8a, 0x342e539d, 0xa2f355a0, 0x58ae132, 0xa4f6eb75, 0xb83ec39, 0x4060efaa, 0x5e719f06, 0xbd6e1051, 0x3e218af9, 0x96dd063d, 0xdd3e05ae, 0x4de6bd46, 0x91548db5, 0x71c45d05, 0x406d46f, 0x605015ff, 0x1998fb24, 0xd6bde997, 0x894043cc, 0x67d99e77, 0xb0e842bd, 0x7898b88, 0xe7195b38, 0x79c8eedb, 0xa17c0a47, 0x7c420fe9, 0xf8841ec9, 0x0, 0x9808683, 0x322bed48, 0x1e1170ac, 0x6c5a724e, 0xfd0efffb, 0xf853856, 0x3daed51e, 0x362d3927, 0xa0fd964, 0x685ca621, 0x9b5b54d1, 0x24362e3a, 0xc0a67b1, 0x9357e70f, 0xb4ee96d2, 0x1b9b919e, 0x80c0c54f, 0x61dc20a2, 0x5a774b69, 0x1c121a16, 0xe293ba0a, 0xc0a02ae5, 0x3c22e043, 0x121b171d, 0xe090d0b, 0xf28bc7ad, 0x2db6a8b9, 0x141ea9c8, 0x57f11985, 0xaf75074c, 0xee99ddbb, 0xa37f60fd, 0xf701269f, 0x5c72f5bc, 0x44663bc5, 0x5bfb7e34, 0x8b432976, 0xcb23c6dc, 0xb6edfc68, 0xb8e4f163, 0xd731dcca, 0x42638510, 0x13972240, 0x84c61120, 0x854a247d, 0xd2bb3df8, 0xaef93211, 0xc729a16d, 0x1d9e2f4b, 0xdcb230f3, 0xd8652ec, 0x77c1e3d0, 0x2bb3166c, 0xa970b999, 0x119448fa, 0x47e96422, 0xa8fc8cc4, 0xa0f03f1a, 0x567d2cd8, 0x223390ef, 0x87494ec7, 0xd938d1c1, 0x8ccaa2fe, 0x98d40b36, 0xa6f581cf, 0xa57ade28, 0xdab78e26, 0x3fadbfa4, 0x2c3a9de4, 0x5078920d, 0x6a5fcc9b, 0x547e4662, 0xf68d13c2, 0x90d8b8e8, 0x2e39f75e, 0x82c3aff5, 0x9f5d80be, 0x69d0937c, 0x6fd52da9, 0xcf2512b3, 0xc8ac993b, 0x10187da7, 0xe89c636e, 0xdb3bbb7b, 0xcd267809, 0x6e5918f4, 0xec9ab701, 0x834f9aa8, 0xe6956e65, 0xaaffe67e, 0x21bccf08, 0xef15e8e6, 0xbae79bd9, 0x4a6f36ce, 0xea9f09d4, 0x29b07cd6, 0x31a4b2af, 0x2a3f2331, 0xc6a59430, 0x35a266c0, 0x744ebc37, 0xfc82caa6, 0xe090d0b0, 0x33a7d815, 0xf104984a, 0x41ecdaf7, 0x7fcd500e, 0x1791f62f, 0x764dd68d, 0x43efb04d, 0xccaa4d54, 0xe49604df, 0x9ed1b5e3, 0x4c6a881b, 0xc12c1fb8, 0x4665517f, 0x9d5eea04, 0x18c355d, 0xfa877473, 0xfb0b412e, 0xb3671d5a, 0x92dbd252, 0xe9105633, 0x6dd64713, 0x9ad7618c, 0x37a10c7a, 0x59f8148e, 0xeb133c89, 0xcea927ee, 0xb761c935, 0xe11ce5ed, 0x7a47b13c, 0x9cd2df59, 0x55f2733f, 0x1814ce79, 0x73c737bf, 0x53f7cdea, 0x5ffdaa5b, 0xdf3d6f14, 0x7844db86, 0xcaaff381, 0xb968c43e, 0x3824342c, 0xc2a3405f, 0x161dc372, 0xbce2250c, 0x283c498b, 0xff0d9541, 0x39a80171, 0x80cb3de, 0xd8b4e49c, 0x6456c190, 0x7bcb8461, 0xd532b670, 0x486c5c74, 0xd0b85742],
      YX = [0x5051f4a7, 0x537e4165, 0xc31a17a4, 0x963a275e, 0xcb3bab6b, 0xf11f9d45, 0xabacfa58, 0x934be303, 0x552030fa, 0xf6ad766d, 0x9188cc76, 0x25f5024c, 0xfc4fe5d7, 0xd7c52acb, 0x80263544, 0x8fb562a3, 0x49deb15a, 0x6725ba1b, 0x9845ea0e, 0xe15dfec0, 0x2c32f75, 0x12814cf0, 0xa38d4697, 0xc66bd3f9, 0xe7038f5f, 0x9515929c, 0xebbf6d7a, 0xda955259, 0x2dd4be83, 0xd3587421, 0x2949e069, 0x448ec9c8, 0x6a75c289, 0x78f48e79, 0x6b99583e, 0xdd27b971, 0xb6bee14f, 0x17f088ad, 0x66c920ac, 0xb47dce3a, 0x1863df4a, 0x82e51a31, 0x60975133, 0x4562537f, 0xe0b16477, 0x84bb6bae, 0x1cfe81a0, 0x94f9082b, 0x58704868, 0x198f45fd, 0x8794de6c, 0xb7527bf8, 0x23ab73d3, 0xe2724b02, 0x57e31f8f, 0x2a6655ab, 0x7b2eb28, 0x32fb5c2, 0x9a86c57b, 0xa5d33708, 0xf2302887, 0xb223bfa5, 0xba02036a, 0x5ced1682, 0x2b8acf1c, 0x92a779b4, 0xf0f307f2, 0xa14e69e2, 0xcd65daf4, 0xd50605be, 0x1fd13462, 0x8ac4a6fe, 0x9d342e53, 0xa0a2f355, 0x32058ae1, 0x75a4f6eb, 0x390b83ec, 0xaa4060ef, 0x65e719f, 0x51bd6e10, 0xf93e218a, 0x3d96dd06, 0xaedd3e05, 0x464de6bd, 0xb591548d, 0x571c45d, 0x6f0406d4, 0xff605015, 0x241998fb, 0x97d6bde9, 0xcc894043, 0x7767d99e, 0xbdb0e842, 0x8807898b, 0x38e7195b, 0xdb79c8ee, 0x47a17c0a, 0xe97c420f, 0xc9f8841e, 0x0, 0x83098086, 0x48322bed, 0xac1e1170, 0x4e6c5a72, 0xfbfd0eff, 0x560f8538, 0x1e3daed5, 0x27362d39, 0x640a0fd9, 0x21685ca6, 0xd19b5b54, 0x3a24362e, 0xb10c0a67, 0xf9357e7, 0xd2b4ee96, 0x9e1b9b91, 0x4f80c0c5, 0xa261dc20, 0x695a774b, 0x161c121a, 0xae293ba, 0xe5c0a02a, 0x433c22e0, 0x1d121b17, 0xb0e090d, 0xadf28bc7, 0xb92db6a8, 0xc8141ea9, 0x8557f119, 0x4caf7507, 0xbbee99dd, 0xfda37f60, 0x9ff70126, 0xbc5c72f5, 0xc544663b, 0x345bfb7e, 0x768b4329, 0xdccb23c6, 0x68b6edfc, 0x63b8e4f1, 0xcad731dc, 0x10426385, 0x40139722, 0x2084c611, 0x7d854a24, 0xf8d2bb3d, 0x11aef932, 0x6dc729a1, 0x4b1d9e2f, 0xf3dcb230, 0xec0d8652, 0xd077c1e3, 0x6c2bb316, 0x99a970b9, 0xfa119448, 0x2247e964, 0xc4a8fc8c, 0x1aa0f03f, 0xd8567d2c, 0xef223390, 0xc787494e, 0xc1d938d1, 0xfe8ccaa2, 0x3698d40b, 0xcfa6f581, 0x28a57ade, 0x26dab78e, 0xa43fadbf, 0xe42c3a9d, 0xd507892, 0x9b6a5fcc, 0x62547e46, 0xc2f68d13, 0xe890d8b8, 0x5e2e39f7, 0xf582c3af, 0xbe9f5d80, 0x7c69d093, 0xa96fd52d, 0xb3cf2512, 0x3bc8ac99, 0xa710187d, 0x6ee89c63, 0x7bdb3bbb, 0x9cd2678, 0xf46e5918, 0x1ec9ab7, 0xa8834f9a, 0x65e6956e, 0x7eaaffe6, 0x821bccf, 0xe6ef15e8, 0xd9bae79b, 0xce4a6f36, 0xd4ea9f09, 0xd629b07c, 0xaf31a4b2, 0x312a3f23, 0x30c6a594, 0xc035a266, 0x37744ebc, 0xa6fc82ca, 0xb0e090d0, 0x1533a7d8, 0x4af10498, 0xf741ecda, 0xe7fcd50, 0x2f1791f6, 0x8d764dd6, 0x4d43efb0, 0x54ccaa4d, 0xdfe49604, 0xe39ed1b5, 0x1b4c6a88, 0xb8c12c1f, 0x7f466551, 0x49d5eea, 0x5d018c35, 0x73fa8774, 0x2efb0b41, 0x5ab3671d, 0x5292dbd2, 0x33e91056, 0x136dd647, 0x8c9ad761, 0x7a37a10c, 0x8e59f814, 0x89eb133c, 0xeecea927, 0x35b761c9, 0xede11ce5, 0x3c7a47b1, 0x599cd2df, 0x3f55f273, 0x791814ce, 0xbf73c737, 0xea53f7cd, 0x5b5ffdaa, 0x14df3d6f, 0x867844db, 0x81caaff3, 0x3eb968c4, 0x2c382434, 0x5fc2a340, 0x72161dc3, 0xcbce225, 0x8b283c49, 0x41ff0d95, 0x7139a801, 0xde080cb3, 0x9cd8b4e4, 0x906456c1, 0x617bcb84, 0x70d532b6, 0x74486c5c, 0x42d0b857],
      YU = [0xa75051f4, 0x65537e41, 0xa4c31a17, 0x5e963a27, 0x6bcb3bab, 0x45f11f9d, 0x58abacfa, 0x3934be3, 0xfa552030, 0x6df6ad76, 0x769188cc, 0x4c25f502, 0xd7fc4fe5, 0xcbd7c52a, 0x44802635, 0xa38fb562, 0x5a49deb1, 0x1b6725ba, 0xe9845ea, 0xc0e15dfe, 0x7502c32f, 0xf012814c, 0x97a38d46, 0xf9c66bd3, 0x5fe7038f, 0x9c951592, 0x7aebbf6d, 0x59da9552, 0x832dd4be, 0x21d35874, 0x692949e0, 0xc8448ec9, 0x896a75c2, 0x7978f48e, 0x3e6b9958, 0x71dd27b9, 0x4fb6bee1, 0xad17f088, 0xac66c920, 0x3ab47dce, 0x4a1863df, 0x3182e51a, 0x33609751, 0x7f456253, 0x77e0b164, 0xae84bb6b, 0xa01cfe81, 0x2b94f908, 0x68587048, 0xfd198f45, 0x6c8794de, 0xf8b7527b, 0xd323ab73, 0x2e2724b, 0x8f57e31f, 0xab2a6655, 0x2807b2eb, 0xc2032fb5, 0x7b9a86c5, 0x8a5d337, 0x87f23028, 0xa5b223bf, 0x6aba0203, 0x825ced16, 0x1c2b8acf, 0xb492a779, 0xf2f0f307, 0xe2a14e69, 0xf4cd65da, 0xbed50605, 0x621fd134, 0xfe8ac4a6, 0x539d342e, 0x55a0a2f3, 0xe132058a, 0xeb75a4f6, 0xec390b83, 0xefaa4060, 0x9f065e71, 0x1051bd6e, 0x8af93e21, 0x63d96dd, 0x5aedd3e, 0xbd464de6, 0x8db59154, 0x5d0571c4, 0xd46f0406, 0x15ff6050, 0xfb241998, 0xe997d6bd, 0x43cc8940, 0x9e7767d9, 0x42bdb0e8, 0x8b880789, 0x5b38e719, 0xeedb79c8, 0xa47a17c, 0xfe97c42, 0x1ec9f884, 0x0, 0x86830980, 0xed48322b, 0x70ac1e11, 0x724e6c5a, 0xfffbfd0e, 0x38560f85, 0xd51e3dae, 0x3927362d, 0xd9640a0f, 0xa621685c, 0x54d19b5b, 0x2e3a2436, 0x67b10c0a, 0xe70f9357, 0x96d2b4ee, 0x919e1b9b, 0xc54f80c0, 0x20a261dc, 0x4b695a77, 0x1a161c12, 0xba0ae293, 0x2ae5c0a0, 0xe0433c22, 0x171d121b, 0xd0b0e09, 0xc7adf28b, 0xa8b92db6, 0xa9c8141e, 0x198557f1, 0x74caf75, 0xddbbee99, 0x60fda37f, 0x269ff701, 0xf5bc5c72, 0x3bc54466, 0x7e345bfb, 0x29768b43, 0xc6dccb23, 0xfc68b6ed, 0xf163b8e4, 0xdccad731, 0x85104263, 0x22401397, 0x112084c6, 0x247d854a, 0x3df8d2bb, 0x3211aef9, 0xa16dc729, 0x2f4b1d9e, 0x30f3dcb2, 0x52ec0d86, 0xe3d077c1, 0x166c2bb3, 0xb999a970, 0x48fa1194, 0x642247e9, 0x8cc4a8fc, 0x3f1aa0f0, 0x2cd8567d, 0x90ef2233, 0x4ec78749, 0xd1c1d938, 0xa2fe8cca, 0xb3698d4, 0x81cfa6f5, 0xde28a57a, 0x8e26dab7, 0xbfa43fad, 0x9de42c3a, 0x920d5078, 0xcc9b6a5f, 0x4662547e, 0x13c2f68d, 0xb8e890d8, 0xf75e2e39, 0xaff582c3, 0x80be9f5d, 0x937c69d0, 0x2da96fd5, 0x12b3cf25, 0x993bc8ac, 0x7da71018, 0x636ee89c, 0xbb7bdb3b, 0x7809cd26, 0x18f46e59, 0xb701ec9a, 0x9aa8834f, 0x6e65e695, 0xe67eaaff, 0xcf0821bc, 0xe8e6ef15, 0x9bd9bae7, 0x36ce4a6f, 0x9d4ea9f, 0x7cd629b0, 0xb2af31a4, 0x23312a3f, 0x9430c6a5, 0x66c035a2, 0xbc37744e, 0xcaa6fc82, 0xd0b0e090, 0xd81533a7, 0x984af104, 0xdaf741ec, 0x500e7fcd, 0xf62f1791, 0xd68d764d, 0xb04d43ef, 0x4d54ccaa, 0x4dfe496, 0xb5e39ed1, 0x881b4c6a, 0x1fb8c12c, 0x517f4665, 0xea049d5e, 0x355d018c, 0x7473fa87, 0x412efb0b, 0x1d5ab367, 0xd25292db, 0x5633e910, 0x47136dd6, 0x618c9ad7, 0xc7a37a1, 0x148e59f8, 0x3c89eb13, 0x27eecea9, 0xc935b761, 0xe5ede11c, 0xb13c7a47, 0xdf599cd2, 0x733f55f2, 0xce791814, 0x37bf73c7, 0xcdea53f7, 0xaa5b5ffd, 0x6f14df3d, 0xdb867844, 0xf381caaf, 0xc43eb968, 0x342c3824, 0x405fc2a3, 0xc372161d, 0x250cbce2, 0x498b283c, 0x9541ff0d, 0x17139a8, 0xb3de080c, 0xe49cd8b4, 0xc1906456, 0x84617bcb, 0xb670d532, 0x5c74486c, 0x5742d0b8],
      Yz = [0xf4a75051, 0x4165537e, 0x17a4c31a, 0x275e963a, 0xab6bcb3b, 0x9d45f11f, 0xfa58abac, 0xe303934b, 0x30fa5520, 0x766df6ad, 0xcc769188, 0x24c25f5, 0xe5d7fc4f, 0x2acbd7c5, 0x35448026, 0x62a38fb5, 0xb15a49de, 0xba1b6725, 0xea0e9845, 0xfec0e15d, 0x2f7502c3, 0x4cf01281, 0x4697a38d, 0xd3f9c66b, 0x8f5fe703, 0x929c9515, 0x6d7aebbf, 0x5259da95, 0xbe832dd4, 0x7421d358, 0xe0692949, 0xc9c8448e, 0xc2896a75, 0x8e7978f4, 0x583e6b99, 0xb971dd27, 0xe14fb6be, 0x88ad17f0, 0x20ac66c9, 0xce3ab47d, 0xdf4a1863, 0x1a3182e5, 0x51336097, 0x537f4562, 0x6477e0b1, 0x6bae84bb, 0x81a01cfe, 0x82b94f9, 0x48685870, 0x45fd198f, 0xde6c8794, 0x7bf8b752, 0x73d323ab, 0x4b02e272, 0x1f8f57e3, 0x55ab2a66, 0xeb2807b2, 0xb5c2032f, 0xc57b9a86, 0x3708a5d3, 0x2887f230, 0xbfa5b223, 0x36aba02, 0x16825ced, 0xcf1c2b8a, 0x79b492a7, 0x7f2f0f3, 0x69e2a14e, 0xdaf4cd65, 0x5bed506, 0x34621fd1, 0xa6fe8ac4, 0x2e539d34, 0xf355a0a2, 0x8ae13205, 0xf6eb75a4, 0x83ec390b, 0x60efaa40, 0x719f065e, 0x6e1051bd, 0x218af93e, 0xdd063d96, 0x3e05aedd, 0xe6bd464d, 0x548db591, 0xc45d0571, 0x6d46f04, 0x5015ff60, 0x98fb2419, 0xbde997d6, 0x4043cc89, 0xd99e7767, 0xe842bdb0, 0x898b8807, 0x195b38e7, 0xc8eedb79, 0x7c0a47a1, 0x420fe97c, 0x841ec9f8, 0x0, 0x80868309, 0x2bed4832, 0x1170ac1e, 0x5a724e6c, 0xefffbfd, 0x8538560f, 0xaed51e3d, 0x2d392736, 0xfd9640a, 0x5ca62168, 0x5b54d19b, 0x362e3a24, 0xa67b10c, 0x57e70f93, 0xee96d2b4, 0x9b919e1b, 0xc0c54f80, 0xdc20a261, 0x774b695a, 0x121a161c, 0x93ba0ae2, 0xa02ae5c0, 0x22e0433c, 0x1b171d12, 0x90d0b0e, 0x8bc7adf2, 0xb6a8b92d, 0x1ea9c814, 0xf1198557, 0x75074caf, 0x99ddbbee, 0x7f60fda3, 0x1269ff7, 0x72f5bc5c, 0x663bc544, 0xfb7e345b, 0x4329768b, 0x23c6dccb, 0xedfc68b6, 0xe4f163b8, 0x31dccad7, 0x63851042, 0x97224013, 0xc6112084, 0x4a247d85, 0xbb3df8d2, 0xf93211ae, 0x29a16dc7, 0x9e2f4b1d, 0xb230f3dc, 0x8652ec0d, 0xc1e3d077, 0xb3166c2b, 0x70b999a9, 0x9448fa11, 0xe9642247, 0xfc8cc4a8, 0xf03f1aa0, 0x7d2cd856, 0x3390ef22, 0x494ec787, 0x38d1c1d9, 0xcaa2fe8c, 0xd40b3698, 0xf581cfa6, 0x7ade28a5, 0xb78e26da, 0xadbfa43f, 0x3a9de42c, 0x78920d50, 0x5fcc9b6a, 0x7e466254, 0x8d13c2f6, 0xd8b8e890, 0x39f75e2e, 0xc3aff582, 0x5d80be9f, 0xd0937c69, 0xd52da96f, 0x2512b3cf, 0xac993bc8, 0x187da710, 0x9c636ee8, 0x3bbb7bdb, 0x267809cd, 0x5918f46e, 0x9ab701ec, 0x4f9aa883, 0x956e65e6, 0xffe67eaa, 0xbccf0821, 0x15e8e6ef, 0xe79bd9ba, 0x6f36ce4a, 0x9f09d4ea, 0xb07cd629, 0xa4b2af31, 0x3f23312a, 0xa59430c6, 0xa266c035, 0x4ebc3774, 0x82caa6fc, 0x90d0b0e0, 0xa7d81533, 0x4984af1, 0xecdaf741, 0xcd500e7f, 0x91f62f17, 0x4dd68d76, 0xefb04d43, 0xaa4d54cc, 0x9604dfe4, 0xd1b5e39e, 0x6a881b4c, 0x2c1fb8c1, 0x65517f46, 0x5eea049d, 0x8c355d01, 0x877473fa, 0xb412efb, 0x671d5ab3, 0xdbd25292, 0x105633e9, 0xd647136d, 0xd7618c9a, 0xa10c7a37, 0xf8148e59, 0x133c89eb, 0xa927eece, 0x61c935b7, 0x1ce5ede1, 0x47b13c7a, 0xd2df599c, 0xf2733f55, 0x14ce7918, 0xc737bf73, 0xf7cdea53, 0xfdaa5b5f, 0x3d6f14df, 0x44db8678, 0xaff381ca, 0x68c43eb9, 0x24342c38, 0xa3405fc2, 0x1dc37216, 0xe2250cbc, 0x3c498b28, 0xd9541ff, 0xa8017139, 0xcb3de08, 0xb4e49cd8, 0x56c19064, 0xcb84617b, 0x32b670d5, 0x6c5c7448, 0xb85742d0],
      Yd = [0x0, 0xe090d0b, 0x1c121a16, 0x121b171d, 0x3824342c, 0x362d3927, 0x24362e3a, 0x2a3f2331, 0x70486858, 0x7e416553, 0x6c5a724e, 0x62537f45, 0x486c5c74, 0x4665517f, 0x547e4662, 0x5a774b69, 0xe090d0b0, 0xee99ddbb, 0xfc82caa6, 0xf28bc7ad, 0xd8b4e49c, 0xd6bde997, 0xc4a6fe8a, 0xcaaff381, 0x90d8b8e8, 0x9ed1b5e3, 0x8ccaa2fe, 0x82c3aff5, 0xa8fc8cc4, 0xa6f581cf, 0xb4ee96d2, 0xbae79bd9, 0xdb3bbb7b, 0xd532b670, 0xc729a16d, 0xc920ac66, 0xe31f8f57, 0xed16825c, 0xff0d9541, 0xf104984a, 0xab73d323, 0xa57ade28, 0xb761c935, 0xb968c43e, 0x9357e70f, 0x9d5eea04, 0x8f45fd19, 0x814cf012, 0x3bab6bcb, 0x35a266c0, 0x27b971dd, 0x29b07cd6, 0x38f5fe7, 0xd8652ec, 0x1f9d45f1, 0x119448fa, 0x4be30393, 0x45ea0e98, 0x57f11985, 0x59f8148e, 0x73c737bf, 0x7dce3ab4, 0x6fd52da9, 0x61dc20a2, 0xad766df6, 0xa37f60fd, 0xb16477e0, 0xbf6d7aeb, 0x955259da, 0x9b5b54d1, 0x894043cc, 0x87494ec7, 0xdd3e05ae, 0xd33708a5, 0xc12c1fb8, 0xcf2512b3, 0xe51a3182, 0xeb133c89, 0xf9082b94, 0xf701269f, 0x4de6bd46, 0x43efb04d, 0x51f4a750, 0x5ffdaa5b, 0x75c2896a, 0x7bcb8461, 0x69d0937c, 0x67d99e77, 0x3daed51e, 0x33a7d815, 0x21bccf08, 0x2fb5c203, 0x58ae132, 0xb83ec39, 0x1998fb24, 0x1791f62f, 0x764dd68d, 0x7844db86, 0x6a5fcc9b, 0x6456c190, 0x4e69e2a1, 0x4060efaa, 0x527bf8b7, 0x5c72f5bc, 0x605bed5, 0x80cb3de, 0x1a17a4c3, 0x141ea9c8, 0x3e218af9, 0x302887f2, 0x223390ef, 0x2c3a9de4, 0x96dd063d, 0x98d40b36, 0x8acf1c2b, 0x84c61120, 0xaef93211, 0xa0f03f1a, 0xb2eb2807, 0xbce2250c, 0xe6956e65, 0xe89c636e, 0xfa877473, 0xf48e7978, 0xdeb15a49, 0xd0b85742, 0xc2a3405f, 0xccaa4d54, 0x41ecdaf7, 0x4fe5d7fc, 0x5dfec0e1, 0x53f7cdea, 0x79c8eedb, 0x77c1e3d0, 0x65daf4cd, 0x6bd3f9c6, 0x31a4b2af, 0x3fadbfa4, 0x2db6a8b9, 0x23bfa5b2, 0x9808683, 0x7898b88, 0x15929c95, 0x1b9b919e, 0xa17c0a47, 0xaf75074c, 0xbd6e1051, 0xb3671d5a, 0x99583e6b, 0x97513360, 0x854a247d, 0x8b432976, 0xd134621f, 0xdf3d6f14, 0xcd267809, 0xc32f7502, 0xe9105633, 0xe7195b38, 0xf5024c25, 0xfb0b412e, 0x9ad7618c, 0x94de6c87, 0x86c57b9a, 0x88cc7691, 0xa2f355a0, 0xacfa58ab, 0xbee14fb6, 0xb0e842bd, 0xea9f09d4, 0xe49604df, 0xf68d13c2, 0xf8841ec9, 0xd2bb3df8, 0xdcb230f3, 0xcea927ee, 0xc0a02ae5, 0x7a47b13c, 0x744ebc37, 0x6655ab2a, 0x685ca621, 0x42638510, 0x4c6a881b, 0x5e719f06, 0x5078920d, 0xa0fd964, 0x406d46f, 0x161dc372, 0x1814ce79, 0x322bed48, 0x3c22e043, 0x2e39f75e, 0x2030fa55, 0xec9ab701, 0xe293ba0a, 0xf088ad17, 0xfe81a01c, 0xd4be832d, 0xdab78e26, 0xc8ac993b, 0xc6a59430, 0x9cd2df59, 0x92dbd252, 0x80c0c54f, 0x8ec9c844, 0xa4f6eb75, 0xaaffe67e, 0xb8e4f163, 0xb6edfc68, 0xc0a67b1, 0x2036aba, 0x10187da7, 0x1e1170ac, 0x342e539d, 0x3a275e96, 0x283c498b, 0x26354480, 0x7c420fe9, 0x724b02e2, 0x605015ff, 0x6e5918f4, 0x44663bc5, 0x4a6f36ce, 0x587421d3, 0x567d2cd8, 0x37a10c7a, 0x39a80171, 0x2bb3166c, 0x25ba1b67, 0xf853856, 0x18c355d, 0x13972240, 0x1d9e2f4b, 0x47e96422, 0x49e06929, 0x5bfb7e34, 0x55f2733f, 0x7fcd500e, 0x71c45d05, 0x63df4a18, 0x6dd64713, 0xd731dcca, 0xd938d1c1, 0xcb23c6dc, 0xc52acbd7, 0xef15e8e6, 0xe11ce5ed, 0xf307f2f0, 0xfd0efffb, 0xa779b492, 0xa970b999, 0xbb6bae84, 0xb562a38f, 0x9f5d80be, 0x91548db5, 0x834f9aa8, 0x8d4697a3],
      YD = [0x0, 0xb0e090d, 0x161c121a, 0x1d121b17, 0x2c382434, 0x27362d39, 0x3a24362e, 0x312a3f23, 0x58704868, 0x537e4165, 0x4e6c5a72, 0x4562537f, 0x74486c5c, 0x7f466551, 0x62547e46, 0x695a774b, 0xb0e090d0, 0xbbee99dd, 0xa6fc82ca, 0xadf28bc7, 0x9cd8b4e4, 0x97d6bde9, 0x8ac4a6fe, 0x81caaff3, 0xe890d8b8, 0xe39ed1b5, 0xfe8ccaa2, 0xf582c3af, 0xc4a8fc8c, 0xcfa6f581, 0xd2b4ee96, 0xd9bae79b, 0x7bdb3bbb, 0x70d532b6, 0x6dc729a1, 0x66c920ac, 0x57e31f8f, 0x5ced1682, 0x41ff0d95, 0x4af10498, 0x23ab73d3, 0x28a57ade, 0x35b761c9, 0x3eb968c4, 0xf9357e7, 0x49d5eea, 0x198f45fd, 0x12814cf0, 0xcb3bab6b, 0xc035a266, 0xdd27b971, 0xd629b07c, 0xe7038f5f, 0xec0d8652, 0xf11f9d45, 0xfa119448, 0x934be303, 0x9845ea0e, 0x8557f119, 0x8e59f814, 0xbf73c737, 0xb47dce3a, 0xa96fd52d, 0xa261dc20, 0xf6ad766d, 0xfda37f60, 0xe0b16477, 0xebbf6d7a, 0xda955259, 0xd19b5b54, 0xcc894043, 0xc787494e, 0xaedd3e05, 0xa5d33708, 0xb8c12c1f, 0xb3cf2512, 0x82e51a31, 0x89eb133c, 0x94f9082b, 0x9ff70126, 0x464de6bd, 0x4d43efb0, 0x5051f4a7, 0x5b5ffdaa, 0x6a75c289, 0x617bcb84, 0x7c69d093, 0x7767d99e, 0x1e3daed5, 0x1533a7d8, 0x821bccf, 0x32fb5c2, 0x32058ae1, 0x390b83ec, 0x241998fb, 0x2f1791f6, 0x8d764dd6, 0x867844db, 0x9b6a5fcc, 0x906456c1, 0xa14e69e2, 0xaa4060ef, 0xb7527bf8, 0xbc5c72f5, 0xd50605be, 0xde080cb3, 0xc31a17a4, 0xc8141ea9, 0xf93e218a, 0xf2302887, 0xef223390, 0xe42c3a9d, 0x3d96dd06, 0x3698d40b, 0x2b8acf1c, 0x2084c611, 0x11aef932, 0x1aa0f03f, 0x7b2eb28, 0xcbce225, 0x65e6956e, 0x6ee89c63, 0x73fa8774, 0x78f48e79, 0x49deb15a, 0x42d0b857, 0x5fc2a340, 0x54ccaa4d, 0xf741ecda, 0xfc4fe5d7, 0xe15dfec0, 0xea53f7cd, 0xdb79c8ee, 0xd077c1e3, 0xcd65daf4, 0xc66bd3f9, 0xaf31a4b2, 0xa43fadbf, 0xb92db6a8, 0xb223bfa5, 0x83098086, 0x8807898b, 0x9515929c, 0x9e1b9b91, 0x47a17c0a, 0x4caf7507, 0x51bd6e10, 0x5ab3671d, 0x6b99583e, 0x60975133, 0x7d854a24, 0x768b4329, 0x1fd13462, 0x14df3d6f, 0x9cd2678, 0x2c32f75, 0x33e91056, 0x38e7195b, 0x25f5024c, 0x2efb0b41, 0x8c9ad761, 0x8794de6c, 0x9a86c57b, 0x9188cc76, 0xa0a2f355, 0xabacfa58, 0xb6bee14f, 0xbdb0e842, 0xd4ea9f09, 0xdfe49604, 0xc2f68d13, 0xc9f8841e, 0xf8d2bb3d, 0xf3dcb230, 0xeecea927, 0xe5c0a02a, 0x3c7a47b1, 0x37744ebc, 0x2a6655ab, 0x21685ca6, 0x10426385, 0x1b4c6a88, 0x65e719f, 0xd507892, 0x640a0fd9, 0x6f0406d4, 0x72161dc3, 0x791814ce, 0x48322bed, 0x433c22e0, 0x5e2e39f7, 0x552030fa, 0x1ec9ab7, 0xae293ba, 0x17f088ad, 0x1cfe81a0, 0x2dd4be83, 0x26dab78e, 0x3bc8ac99, 0x30c6a594, 0x599cd2df, 0x5292dbd2, 0x4f80c0c5, 0x448ec9c8, 0x75a4f6eb, 0x7eaaffe6, 0x63b8e4f1, 0x68b6edfc, 0xb10c0a67, 0xba02036a, 0xa710187d, 0xac1e1170, 0x9d342e53, 0x963a275e, 0x8b283c49, 0x80263544, 0xe97c420f, 0xe2724b02, 0xff605015, 0xf46e5918, 0xc544663b, 0xce4a6f36, 0xd3587421, 0xd8567d2c, 0x7a37a10c, 0x7139a801, 0x6c2bb316, 0x6725ba1b, 0x560f8538, 0x5d018c35, 0x40139722, 0x4b1d9e2f, 0x2247e964, 0x2949e069, 0x345bfb7e, 0x3f55f273, 0xe7fcd50, 0x571c45d, 0x1863df4a, 0x136dd647, 0xcad731dc, 0xc1d938d1, 0xdccb23c6, 0xd7c52acb, 0xe6ef15e8, 0xede11ce5, 0xf0f307f2, 0xfbfd0eff, 0x92a779b4, 0x99a970b9, 0x84bb6bae, 0x8fb562a3, 0xbe9f5d80, 0xb591548d, 0xa8834f9a, 0xa38d4697],
      Yw = [0x0, 0xd0b0e09, 0x1a161c12, 0x171d121b, 0x342c3824, 0x3927362d, 0x2e3a2436, 0x23312a3f, 0x68587048, 0x65537e41, 0x724e6c5a, 0x7f456253, 0x5c74486c, 0x517f4665, 0x4662547e, 0x4b695a77, 0xd0b0e090, 0xddbbee99, 0xcaa6fc82, 0xc7adf28b, 0xe49cd8b4, 0xe997d6bd, 0xfe8ac4a6, 0xf381caaf, 0xb8e890d8, 0xb5e39ed1, 0xa2fe8cca, 0xaff582c3, 0x8cc4a8fc, 0x81cfa6f5, 0x96d2b4ee, 0x9bd9bae7, 0xbb7bdb3b, 0xb670d532, 0xa16dc729, 0xac66c920, 0x8f57e31f, 0x825ced16, 0x9541ff0d, 0x984af104, 0xd323ab73, 0xde28a57a, 0xc935b761, 0xc43eb968, 0xe70f9357, 0xea049d5e, 0xfd198f45, 0xf012814c, 0x6bcb3bab, 0x66c035a2, 0x71dd27b9, 0x7cd629b0, 0x5fe7038f, 0x52ec0d86, 0x45f11f9d, 0x48fa1194, 0x3934be3, 0xe9845ea, 0x198557f1, 0x148e59f8, 0x37bf73c7, 0x3ab47dce, 0x2da96fd5, 0x20a261dc, 0x6df6ad76, 0x60fda37f, 0x77e0b164, 0x7aebbf6d, 0x59da9552, 0x54d19b5b, 0x43cc8940, 0x4ec78749, 0x5aedd3e, 0x8a5d337, 0x1fb8c12c, 0x12b3cf25, 0x3182e51a, 0x3c89eb13, 0x2b94f908, 0x269ff701, 0xbd464de6, 0xb04d43ef, 0xa75051f4, 0xaa5b5ffd, 0x896a75c2, 0x84617bcb, 0x937c69d0, 0x9e7767d9, 0xd51e3dae, 0xd81533a7, 0xcf0821bc, 0xc2032fb5, 0xe132058a, 0xec390b83, 0xfb241998, 0xf62f1791, 0xd68d764d, 0xdb867844, 0xcc9b6a5f, 0xc1906456, 0xe2a14e69, 0xefaa4060, 0xf8b7527b, 0xf5bc5c72, 0xbed50605, 0xb3de080c, 0xa4c31a17, 0xa9c8141e, 0x8af93e21, 0x87f23028, 0x90ef2233, 0x9de42c3a, 0x63d96dd, 0xb3698d4, 0x1c2b8acf, 0x112084c6, 0x3211aef9, 0x3f1aa0f0, 0x2807b2eb, 0x250cbce2, 0x6e65e695, 0x636ee89c, 0x7473fa87, 0x7978f48e, 0x5a49deb1, 0x5742d0b8, 0x405fc2a3, 0x4d54ccaa, 0xdaf741ec, 0xd7fc4fe5, 0xc0e15dfe, 0xcdea53f7, 0xeedb79c8, 0xe3d077c1, 0xf4cd65da, 0xf9c66bd3, 0xb2af31a4, 0xbfa43fad, 0xa8b92db6, 0xa5b223bf, 0x86830980, 0x8b880789, 0x9c951592, 0x919e1b9b, 0xa47a17c, 0x74caf75, 0x1051bd6e, 0x1d5ab367, 0x3e6b9958, 0x33609751, 0x247d854a, 0x29768b43, 0x621fd134, 0x6f14df3d, 0x7809cd26, 0x7502c32f, 0x5633e910, 0x5b38e719, 0x4c25f502, 0x412efb0b, 0x618c9ad7, 0x6c8794de, 0x7b9a86c5, 0x769188cc, 0x55a0a2f3, 0x58abacfa, 0x4fb6bee1, 0x42bdb0e8, 0x9d4ea9f, 0x4dfe496, 0x13c2f68d, 0x1ec9f884, 0x3df8d2bb, 0x30f3dcb2, 0x27eecea9, 0x2ae5c0a0, 0xb13c7a47, 0xbc37744e, 0xab2a6655, 0xa621685c, 0x85104263, 0x881b4c6a, 0x9f065e71, 0x920d5078, 0xd9640a0f, 0xd46f0406, 0xc372161d, 0xce791814, 0xed48322b, 0xe0433c22, 0xf75e2e39, 0xfa552030, 0xb701ec9a, 0xba0ae293, 0xad17f088, 0xa01cfe81, 0x832dd4be, 0x8e26dab7, 0x993bc8ac, 0x9430c6a5, 0xdf599cd2, 0xd25292db, 0xc54f80c0, 0xc8448ec9, 0xeb75a4f6, 0xe67eaaff, 0xf163b8e4, 0xfc68b6ed, 0x67b10c0a, 0x6aba0203, 0x7da71018, 0x70ac1e11, 0x539d342e, 0x5e963a27, 0x498b283c, 0x44802635, 0xfe97c42, 0x2e2724b, 0x15ff6050, 0x18f46e59, 0x3bc54466, 0x36ce4a6f, 0x21d35874, 0x2cd8567d, 0xc7a37a1, 0x17139a8, 0x166c2bb3, 0x1b6725ba, 0x38560f85, 0x355d018c, 0x22401397, 0x2f4b1d9e, 0x642247e9, 0x692949e0, 0x7e345bfb, 0x733f55f2, 0x500e7fcd, 0x5d0571c4, 0x4a1863df, 0x47136dd6, 0xdccad731, 0xd1c1d938, 0xc6dccb23, 0xcbd7c52a, 0xe8e6ef15, 0xe5ede11c, 0xf2f0f307, 0xfffbfd0e, 0xb492a779, 0xb999a970, 0xae84bb6b, 0xa38fb562, 0x80be9f5d, 0x8db59154, 0x9aa8834f, 0x97a38d46],
      YT = [0x0, 0x90d0b0e, 0x121a161c, 0x1b171d12, 0x24342c38, 0x2d392736, 0x362e3a24, 0x3f23312a, 0x48685870, 0x4165537e, 0x5a724e6c, 0x537f4562, 0x6c5c7448, 0x65517f46, 0x7e466254, 0x774b695a, 0x90d0b0e0, 0x99ddbbee, 0x82caa6fc, 0x8bc7adf2, 0xb4e49cd8, 0xbde997d6, 0xa6fe8ac4, 0xaff381ca, 0xd8b8e890, 0xd1b5e39e, 0xcaa2fe8c, 0xc3aff582, 0xfc8cc4a8, 0xf581cfa6, 0xee96d2b4, 0xe79bd9ba, 0x3bbb7bdb, 0x32b670d5, 0x29a16dc7, 0x20ac66c9, 0x1f8f57e3, 0x16825ced, 0xd9541ff, 0x4984af1, 0x73d323ab, 0x7ade28a5, 0x61c935b7, 0x68c43eb9, 0x57e70f93, 0x5eea049d, 0x45fd198f, 0x4cf01281, 0xab6bcb3b, 0xa266c035, 0xb971dd27, 0xb07cd629, 0x8f5fe703, 0x8652ec0d, 0x9d45f11f, 0x9448fa11, 0xe303934b, 0xea0e9845, 0xf1198557, 0xf8148e59, 0xc737bf73, 0xce3ab47d, 0xd52da96f, 0xdc20a261, 0x766df6ad, 0x7f60fda3, 0x6477e0b1, 0x6d7aebbf, 0x5259da95, 0x5b54d19b, 0x4043cc89, 0x494ec787, 0x3e05aedd, 0x3708a5d3, 0x2c1fb8c1, 0x2512b3cf, 0x1a3182e5, 0x133c89eb, 0x82b94f9, 0x1269ff7, 0xe6bd464d, 0xefb04d43, 0xf4a75051, 0xfdaa5b5f, 0xc2896a75, 0xcb84617b, 0xd0937c69, 0xd99e7767, 0xaed51e3d, 0xa7d81533, 0xbccf0821, 0xb5c2032f, 0x8ae13205, 0x83ec390b, 0x98fb2419, 0x91f62f17, 0x4dd68d76, 0x44db8678, 0x5fcc9b6a, 0x56c19064, 0x69e2a14e, 0x60efaa40, 0x7bf8b752, 0x72f5bc5c, 0x5bed506, 0xcb3de08, 0x17a4c31a, 0x1ea9c814, 0x218af93e, 0x2887f230, 0x3390ef22, 0x3a9de42c, 0xdd063d96, 0xd40b3698, 0xcf1c2b8a, 0xc6112084, 0xf93211ae, 0xf03f1aa0, 0xeb2807b2, 0xe2250cbc, 0x956e65e6, 0x9c636ee8, 0x877473fa, 0x8e7978f4, 0xb15a49de, 0xb85742d0, 0xa3405fc2, 0xaa4d54cc, 0xecdaf741, 0xe5d7fc4f, 0xfec0e15d, 0xf7cdea53, 0xc8eedb79, 0xc1e3d077, 0xdaf4cd65, 0xd3f9c66b, 0xa4b2af31, 0xadbfa43f, 0xb6a8b92d, 0xbfa5b223, 0x80868309, 0x898b8807, 0x929c9515, 0x9b919e1b, 0x7c0a47a1, 0x75074caf, 0x6e1051bd, 0x671d5ab3, 0x583e6b99, 0x51336097, 0x4a247d85, 0x4329768b, 0x34621fd1, 0x3d6f14df, 0x267809cd, 0x2f7502c3, 0x105633e9, 0x195b38e7, 0x24c25f5, 0xb412efb, 0xd7618c9a, 0xde6c8794, 0xc57b9a86, 0xcc769188, 0xf355a0a2, 0xfa58abac, 0xe14fb6be, 0xe842bdb0, 0x9f09d4ea, 0x9604dfe4, 0x8d13c2f6, 0x841ec9f8, 0xbb3df8d2, 0xb230f3dc, 0xa927eece, 0xa02ae5c0, 0x47b13c7a, 0x4ebc3774, 0x55ab2a66, 0x5ca62168, 0x63851042, 0x6a881b4c, 0x719f065e, 0x78920d50, 0xfd9640a, 0x6d46f04, 0x1dc37216, 0x14ce7918, 0x2bed4832, 0x22e0433c, 0x39f75e2e, 0x30fa5520, 0x9ab701ec, 0x93ba0ae2, 0x88ad17f0, 0x81a01cfe, 0xbe832dd4, 0xb78e26da, 0xac993bc8, 0xa59430c6, 0xd2df599c, 0xdbd25292, 0xc0c54f80, 0xc9c8448e, 0xf6eb75a4, 0xffe67eaa, 0xe4f163b8, 0xedfc68b6, 0xa67b10c, 0x36aba02, 0x187da710, 0x1170ac1e, 0x2e539d34, 0x275e963a, 0x3c498b28, 0x35448026, 0x420fe97c, 0x4b02e272, 0x5015ff60, 0x5918f46e, 0x663bc544, 0x6f36ce4a, 0x7421d358, 0x7d2cd856, 0xa10c7a37, 0xa8017139, 0xb3166c2b, 0xba1b6725, 0x8538560f, 0x8c355d01, 0x97224013, 0x9e2f4b1d, 0xe9642247, 0xe0692949, 0xfb7e345b, 0xf2733f55, 0xcd500e7f, 0xc45d0571, 0xdf4a1863, 0xd647136d, 0x31dccad7, 0x38d1c1d9, 0x23c6dccb, 0x2acbd7c5, 0x15e8e6ef, 0x1ce5ede1, 0x7f2f0f3, 0xefffbfd, 0x79b492a7, 0x70b999a9, 0x6bae84bb, 0x62a38fb5, 0x5d80be9f, 0x548db591, 0x4f9aa883, 0x4697a38d];

    function YO(xf) {
      var xc = [];
      for (var xK = 0x0; xK < xf["length"]; xK += 0x4) {
        xc["push"](xf[xK] << 0x18 | xf[xK + 0x1] << 0x10 | xf[xK + 0x2] << 0x8 | xf[xK + 0x3]);
      }
      return xc;
    }

    function Yp(xf) {
      xf = YZ(xf, !![]);
      var xc = 0x10 - xf["length"] % 0x10, xK = Yu(xf["length"] + xc);
      Yn(xf, xK);
      for (var xY = xf["length"]; xY < xK["length"]; xY++) {
        xK[xY] = xc;
      }
      return xK;
    }

    function Ym(xf) {
      xf = YZ(xf, !![]);
      if (xf["length"] < 0x10) throw new Error("PKCS#7 invalid length");
      var xc = xf[xf["length"] - 0x1];
      if (xc > 0x10) throw new Error("PKCS#7 padding byte out of range");
      var xK = xf["length"] - xc;
      for (var xY = 0x0; xY < xc; xY++) {
        if (xf[xK + xY] !== xc) throw new Error("PKCS#7 invalid padding byte");
      }
      var xb = Yu(xK);
      return Yn(xf, xb, 0x0, 0x0, xK), xb;
    }

    var YF = function xf(xc) {
      if (!(this instanceof xf)) throw Error("AES must be instanitated with `new`");
      Object["defineProperty"](this, "key", {'value': YZ(xc, !![])}), this["_prepare"]();
    };
    YF["prototype"]["_prepare"] = function () {
      var xc = YV[this["key"]["length"]];
      if (xc == null) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this["_Ke"] = [], this["_Kd"] = [];
      for (var xK = 0x0; xK <= xc; xK++) {
        this["_Ke"]["push"]([0x0, 0x0, 0x0, 0x0]), this["_Kd"]["push"]([0x0, 0x0, 0x0, 0x0]);
      }
      var xY = (xc + 0x1) * 0x4, xb = this["key"]["length"] / 0x4,
        xI = YO(this["key"]), xs;
      for (var xK = 0x0; xK < xb; xK++) {
        xs = xK >> 0x2, this["_Ke"][xs][xK % 0x4] = xI[xK], this["_Kd"][xc - xs][xK % 0x4] = xI[xK];
      }
      var xx = 0x0, xi = xb, xv;
      while (xi < xY) {
        xv = xI[xb - 0x1], xI[0x0] ^= YL[xv >> 0x10 & 0xff] << 0x18 ^ YL[xv >> 0x8 & 0xff] << 0x10 ^ YL[xv & 0xff] << 0x8 ^ YL[xv >> 0x18 & 0xff] ^ YQ[xx] << 0x18, xx += 0x1;
        if (xb !== 0x8) for (var xR = 0x1; xR < xb; xR++) {
          xI[xR] ^= xI[xR - 0x1];
        } else {
          for (var xe = 0x1; xe < xb / 0x2; xe++) {
            xI[xe] ^= xI[xe - 0x1];
          }
          xv = xI[xb / 0x2 - 0x1], xI[xb / 0x2] ^= YL[xv & 0xff] ^ YL[xv >> 0x8 & 0xff] << 0x8 ^ YL[xv >> 0x10 & 0xff] << 0x10 ^ YL[xv >> 0x18 & 0xff] << 0x18;
          for (var xy = xb / 0x2 + 0x1; xy < xb; xy++) {
            xI[xy] ^= xI[xy - 0x1];
          }
        }
        var xK = 0x0, xk = void 0x0, xa = void 0x0;
        while (xK < xb && xi < xY) {
          xk = xi >> 0x2, xa = xi % 0x4, this["_Ke"][xk][xa] = xI[xK], this["_Kd"][xc - xk][xa] = xI[xK++], xi++;
        }
      }
      for (var xk = 0x1; xk < xc; xk++) {
        for (var xa = 0x0; xa < 0x4; xa++) {
          xv = this["_Kd"][xk][xa], this["_Kd"][xk][xa] = Yd[xv >> 0x18 & 0xff] ^ YD[xv >> 0x10 & 0xff] ^ Yw[xv >> 0x8 & 0xff] ^ YT[xv & 0xff];
        }
      }
    }, YF["prototype"]["encrypt"] = function (xc) {
      if (xc["length"] !== 0x10) throw new Error("invalid plaintext size (must be 16 bytes)");
      var xK = this["_Ke"]["length"] - 0x1, xY = [0x0, 0x0, 0x0, 0x0], xb = YO(xc);
      for (var xI = 0x0; xI < 0x4; xI++) {
        xb[xI] ^= this["_Ke"][0x0][xI];
      }
      for (var xs = 0x1; xs < xK; xs++) {
        for (var xI = 0x0; xI < 0x4; xI++) {
          xY[xI] = YW[xb[xI] >> 0x18 & 0xff] ^ Yg[xb[(xI + 0x1) % 0x4] >> 0x10 & 0xff] ^ YJ[xb[(xI + 0x2) % 0x4] >> 0x8 & 0xff] ^ YP[xb[(xI + 0x3) % 0x4] & 0xff] ^ this["_Ke"][xs][xI];
        }
        xb = xY["slice"]();
      }
      var xx = Yu(0x10), xi;
      for (var xI = 0x0; xI < 0x4; xI++) {
        xi = this["_Ke"][xK][xI], xx[0x4 * xI] = (YL[xb[xI] >> 0x18 & 0xff] ^ xi >> 0x18) & 0xff, xx[0x4 * xI + 0x1] = (YL[xb[(xI + 0x1) % 0x4] >> 0x10 & 0xff] ^ xi >> 0x10) & 0xff, xx[0x4 * xI + 0x2] = (YL[xb[(xI + 0x2) % 0x4] >> 0x8 & 0xff] ^ xi >> 0x8) & 0xff, xx[0x4 * xI + 0x3] = (YL[xb[(xI + 0x3) % 0x4] & 0xff] ^ xi) & 0xff;
      }
      return xx;
    }, YF["prototype"]["decrypt"] = function (xc) {
      if (xc["length"] !== 0x10) throw new Error("invalid ciphertext size (must be 16 bytes)");
      var xK = this["_Kd"]["length"] - 0x1, xY = [0x0, 0x0, 0x0, 0x0], xb = YO(xc);
      for (var xI = 0x0; xI < 0x4; xI++) {
        xb[xI] ^= this["_Kd"][0x0][xI];
      }
      for (var xs = 0x1; xs < xK; xs++) {
        for (var xI = 0x0; xI < 0x4; xI++) {
          xY[xI] = Yq[xb[xI] >> 0x18 & 0xff] ^ YX[xb[(xI + 0x3) % 0x4] >> 0x10 & 0xff] ^ YU[xb[(xI + 0x2) % 0x4] >> 0x8 & 0xff] ^ Yz[xb[(xI + 0x1) % 0x4] & 0xff] ^ this["_Kd"][xs][xI];
        }
        xb = xY["slice"]();
      }
      var xx = Yu(0x10), xi;
      for (var xI = 0x0; xI < 0x4; xI++) {
        xi = this["_Kd"][xK][xI], xx[0x4 * xI] = (YB[xb[xI] >> 0x18 & 0xff] ^ xi >> 0x18) & 0xff, xx[0x4 * xI + 0x1] = (YB[xb[(xI + 0x3) % 0x4] >> 0x10 & 0xff] ^ xi >> 0x10) & 0xff, xx[0x4 * xI + 0x2] = (YB[xb[(xI + 0x2) % 0x4] >> 0x8 & 0xff] ^ xi >> 0x8) & 0xff, xx[0x4 * xI + 0x3] = (YB[xb[(xI + 0x1) % 0x4] & 0xff] ^ xi) & 0xff;
      }
      return xx;
    };
    var YG = function xc(xK, xY) {
      if (!(this instanceof xc)) throw Error("AES must be instanitated with `new`");
      this["description"] = "Cipher Block Chaining", this["name"] = "cbc";
      if (!xY) xY = Yu(0x10); else {
        if (xY["length"] !== 0x10) throw new Error("invalid initialation vector size (must be 16 bytes)");
      }
      this["_lastCipherblock"] = YZ(xY, !![]), this["_aes"] = new YF(xK);
    };
    YG["prototype"]["encrypt"] = function (xK) {
      xK = YZ(xK);
      if (xK["length"] % 0x10 !== 0x0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      var xY = Yu(xK["length"]), xb = Yu(0x10);
      for (var xI = 0x0; xI < xK["length"]; xI += 0x10) {
        Yn(xK, xb, 0x0, xI, xI + 0x10);
        for (var xs = 0x0; xs < 0x10; xs++) {
          xb[xs] ^= this["_lastCipherblock"][xs];
        }
        this["_lastCipherblock"] = this["_aes"]["encrypt"](xb), Yn(this["_lastCipherblock"], xY, xI);
      }
      return xY;
    }, YG["prototype"]["decrypt"] = function (xK) {
      xK = YZ(xK);
      if (xK["length"] % 0x10 !== 0x0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      var xY = Yu(xK["length"]), xb = Yu(0x10);
      for (var xI = 0x0; xI < xK["length"]; xI += 0x10) {
        Yn(xK, xb, 0x0, xI, xI + 0x10), xb = this["_aes"]["decrypt"](xb);
        for (var xs = 0x0; xs < 0x10; xs++) {
          xY[xI + xs] = xb[xs] ^ this["_lastCipherblock"][xs];
        }
        Yn(xK, this["_lastCipherblock"], 0x0, xI, xI + 0x10);
      }
      return xY;
    };
    var YN = {};
    YN["cbc"] = YG;
    var Yo = {};
    Yo["hex"] = Yl, Yo["utf8"] = YS;
    var YA = {};
    YA["pad"] = Yp, YA["strip"] = Ym;
    var b0 = {};
    b0["pkcs7"] = YA;
    var b1 = {};
    b1["AES"] = YF, b1["ModeOfOperation"] = YN, b1["utils"] = Yo, b1["padding"] = b0;
    var b2 = b1;

    function b3(xK, xY) {
      if (xK === undefined || xK === null || xK["length"] === 0x0) return xK;
      return xK = b4(xK), xY = b4(xY), b5(b8(b6(xK, !![]), b7(b6(xY, ![]))), ![]);
    }

    function b4(xK) {
      if (/^[\x00-\x7f]*$/["test"](xK)) return xK;
      var xY = [], xb = xK["length"];
      for (var xI = 0x0, xs = 0x0; xI < xb; ++xI, ++xs) {
        var xx = xK["charCodeAt"](xI);
        if (xx < 0x80) xY[xs] = xK["charAt"](xI); else {
          if (xx < 0x800) xY[xs] = String["fromCharCode"](0xc0 | xx >> 0x6, 0x80 | xx & 0x3f); else {
            if (xx < 0xd800 || xx > 0xdfff) xY[xs] = String["fromCharCode"](0xe0 | xx >> 0xc, 0x80 | xx >> 0x6 & 0x3f, 0x80 | xx & 0x3f); else {
              if (xI + 0x1 < xb) {
                var xi = xK["charCodeAt"](xI + 0x1);
                if (xx < 0xdc00 && 0xdc00 <= xi && xi <= 0xdfff) {
                  var xv = ((xx & 0x3ff) << 0xa | xi & 0x3ff) + 0x10000;
                  xY[xs] = String["fromCharCode"](0xf0 | xv >> 0x12 & 0x3f, 0x80 | xv >> 0xc & 0x3f, 0x80 | xv >> 0x6 & 0x3f, 0x80 | xv & 0x3f), ++xI;
                  continue;
                }
              }
            }
          }
        }
      }
      return xY["join"]('');
    }

    function b5(xK, xY) {
      var xb = xK["length"], xI = xb << 0x2;
      if (xY) {
        var xs = xK[xb - 0x1];
        xI -= 0x4;
        if (xs < xI - 0x3 || xs > xI) return null;
        xI = xs;
      }
      for (var xx = 0x0; xx < xb; xx++) {
        xK[xx] = String["fromCharCode"](xK[xx] & 0xff, xK[xx] >>> 0x8 & 0xff, xK[xx] >>> 0x10 & 0xff, xK[xx] >>> 0x18 & 0xff);
      }
      var xi = xK["join"]('');
      if (xY) return xi["substring"](0x0, xI);
      return xi;
    }

    function b6(xK, xY) {
      var xb = xK["length"], xI = xb >> 0x2;
      (xb & 0x3) !== 0x0 && ++xI;
      var xs;
      xY ? (xs = new Array(xI + 0x1), xs[xI] = xb) : xs = new Array(xI);
      for (var xx = 0x0; xx < xb; ++xx) {
        xs[xx >> 0x2] |= xK["charCodeAt"](xx) << ((xx & 0x3) << 0x3);
      }
      return xs;
    }

    function b7(xK) {
      return xK["length"] < 0x4 && (xK["length"] = 0x4), xK;
    }

    function b8(xK, xY) {
      var xb = xK["length"], xI = xb - 0x1, xs, xx, xi, xv, xR, xe;
      xx = xK[xI], xi = 0x0;
      for (xe = Math["floor"](0x6 + 0x34 / xb) | 0x0; xe > 0x0; --xe) {
        xi = xi + 0x9e3779b9 & 0xffffffff, xv = xi >>> 0x2 & 0x3;
        for (xR = 0x0; xR < xI; ++xR) {
          xs = xK[xR + 0x1], xx = xK[xR] = xK[xR] + ((xx >>> 0x5 ^ xs << 0x2) + (xs >>> 0x3 ^ xx << 0x4) ^ (xi ^ xs) + (xY[xR & 0x3 ^ xv] ^ xx)) & 0xffffffff;
        }
        xs = xK[0x0], xx = xK[xI] = xK[xI] + ((xx >>> 0x5 ^ xs << 0x2) + (xs >>> 0x3 ^ xx << 0x4) ^ (xi ^ xs) + (xY[xI & 0x3 ^ xv] ^ xx)) & 0xffffffff;
      }
      return xK;
    }

    var base64encode = (function () {
      var xK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"["split"]('');
      return function (xY) {
        var xb, xI, xs, xx, xi, xv, xR;
        xI = xs = 0x0, xx = xY["length"], xi = xx % 0x3, xx = xx - xi, xv = xx / 0x3 << 0x2;
        xi > 0x0 && (xv += 0x4);
        xb = new Array(xv);
        while (xI < xx) {
          xR = xY["charCodeAt"](xI++) << 0x10 | xY["charCodeAt"](xI++) << 0x8 | xY["charCodeAt"](xI++), xb[xs++] = xK[xR >> 0x12] + xK[xR >> 0xc & 0x3f] + xK[xR >> 0x6 & 0x3f] + xK[xR & 0x3f];
        }
        if (xi === 0x1) xR = xY["charCodeAt"](xI++), xb[xs++] = xK[xR >> 0x2] + xK[(xR & 0x3) << 0x4] + '=='; else xi === 0x2 && (xR = xY["charCodeAt"](xI++) << 0x8 | xY["charCodeAt"](xI++), xb[xs++] = xK[xR >> 0xa] + xK[xR >> 0x4 & 0x3f] + xK[(xR & 0xf) << 0x2] + '=');
        return xb["join"]('');
      };
    }());

    function Kaito(xK, xY) {
      return base64encode(b3(xK, xY));
    }

    var bf = {};
    bf["Kaito"] = Kaito;
    var bc = bf;

    function bK(xK, xY) {
      var xb = [], xI = [], xs = 0x0;

      function xx(xC, xr) {
        var xZ = [];
        try {
          window["Reflect"] ? (xZ = window["Reflect"]["ownKeys"](xC), (typeof xC === "undefined" ? "undefined" : K4(xC)) === "object" && (xZ = xZ["concat"](window["Reflect"]["ownKeys"](Object["getPrototypeOf"](xC))))) : (xZ = Object["getOwnPropertyNames"](xC), (typeof xC === "undefined" ? "undefined" : K4(xC)) === "object" && (xZ = xZ["concat"](Object["getOwnPropertyNames"](Object["getPrototypeOf"](xC)))));
        } catch (xh) {
        }
        try {
          for (var xu = 0x0; xu < xZ["length"]; xu++) {
            var xn = xZ[xu], xS = K4(xC[xn]), xl = xr + '.' + xn["toString"]();
            switch (xS) {
              case "undefined":
                xI["push"](xl + " : undefined"), xs = 0x0;
                break;
              case "function":
                xI["push"](xl + " : function"), xs = 0x0;
                break;
              case "boolean":
              case "number":
              case "string":
              case "symbol":
                xI["push"](xl + " : " + xC[xn]), xs = 0x0;
                break;
              case "object":
                if (xn === null || xC[xn] === null) xI["push"](xl + " : null"), xs = 0x0; else xC !== xC[xn] && xb["indexOf"](xn["toString"]()) === -0x1 && xn !== "document" && xn !== "event" && (xb["push"](xn["toString"]()), xI["push"](xl + " : object"), xs++, xs < 0x4 && xx(xC[xn], xl));
                break;
              default:
                break;
            }
          }
        } catch (xV) {
        }
      }

      try {
        var xi = window["btoa"](window["navigator"]["userAgent"]);
        if (window["localStorage"] && xi !== window["localStorage"]["getItem"]("__yoda_api_ua__")) {
          var xv = {};
          xv["location"] = window["location"], xv["navigator"] = window["navigator"], xv["history"] = window["history"], xv["localStorage"] = window["localStorage"], xv["sessionStorage"] = window["sessionStorage"], xv["screen"] = window["screen"], xv["crypto"] = window["crypto"], xv["customElements"] = window["customElements"], xv["chrome"] = window["chrome"], xv["safari"] = window["safari"];
          var xR = xv;
          xx(xR, 'w');
          var xe = xI["join"](" | "), xy = 0x1194,
            xk = Math["ceil"](xe["length"] / xy), xa = [];
          for (var xM = 0x0; xM < xk; xM++) {
            var xt = xe["substr"](xM * xy, xy), xH = xt["indexOf"]('|'),
              xE = xt["lastIndexOf"]('|');
            xa["push"](xt["substring"](0x0, xH)), xa["push"](xt["substring"](xE, xy)), bY(xK, xt["substring"](xH, xE), xY);
          }
          bY(xK, " | " + xa["join"](''), xY), window["localStorage"]["setItem"]("__yoda_api_ua__", xi);
        }
        return !![];
      } catch (xC) {
        return ![];
      }
    }

    function bY(xK, xY, xb) {
      var xI = {};
      xI["wapi"] = xY, xI["method"] = xK, xI["requestCode"] = xb;
      var xs = {};
      xs["custom"] = xI;
      var xx = xs;
      window["Yoda"]['LX']["report"]("c_techportal_verify", "b_techportal_property_mv", xx);
    }

    function bb() {
      var xK, xY = window["navigator"]["userAgent"];
      if (xY["indexOf"]("MicroMessenger") > -0x1) xK = "MicroMessenger"; else {
        if (xY["indexOf"]("Firefox") > -0x1) xK = "Firefox"; else {
          if (xY["indexOf"]("Opera") > -0x1 || xY["indexOf"]("OPR") > -0x1) xK = "Opera"; else {
            if (xY["indexOf"]("Trident") > -0x1) xK = 'IE'; else {
              if (xY["indexOf"]("Edge") > -0x1) xK = "Edge"; else {
                if (xY["indexOf"]("Chrome") > -0x1) xK = "Chrome"; else xY["indexOf"]("Safari") > -0x1 ? xK = "Safari" : xK = "unknown";
              }
            }
          }
        }
      }
      return xK;
    }

    var bI = function xK(xY, xb) {
      var xI = new Uint8Array(xY["length"]);
      for (var xs = 0x0; xs < xY["length"]; xs++) {
        xI[xs] = xY["charCodeAt"](xs);
      }
      return [xI["subarray"](0x0, xb), xI["subarray"](xb)];
    }, bs = function xY() {
      var xb = window["seed"]["config"]["session"];
      if (!xb) return;
      try {
        var xI = Date["now"](), xs = by(function () {
          return new Function(window["atob"](xb))();
        });
        if (xs && xs instanceof Array && xs[0x0] === 0x3) {
          var xx = 0x10,
            xi = window["atob"](window["seed"]["config"]["sign"]),
            xv = by(function () {
              return bI(xi, xx);
            }), xR = by(function () {
              return new Function(xs[0x1])()(b2["ModeOfOperation"]["cbc"], xv[0x0], Uint8Array);
            }), xe = by(function () {
              return xR["decrypt"](xv[0x1]);
            }), xy = by(function () {
              return b2["padding"]["pkcs7"]["strip"](xe);
            });
          xy = by(function () {
            return b2["utils"]["utf8"]["fromBytes"](xy);
          }),
            by(function () {
            new Function('window', xy)(window);
          }), ba(), window['_f'];
        }
        var xk = {
          'kvs': {'encryptTime': [Date["now"]() - xI]},
          'tags': {'type': 0x3, 'ua': bb()},
          'ts': Date["now"]()
        };
        window["Yoda"]["CAT"]["metric"](xk);
      } catch (xa) {
        console.debug('error',xa);
        bk(xa["message"], xa["stack"]);
      }
    }, bx = function xb(xI, xs) {
      try {
        var xx = 0x10,
          xi = window["atob"](window["seed"]["config"]["sign"]),
          xv = bI(xi, xx),
          xR = new Function(xs)()(b2["ModeOfOperation"]["cbc"], xv[0x0], Uint8Array),
          xe = xR["decrypt"](xv[0x1]),
          xy = b2["padding"]["pkcs7"]["strip"](xe),
          xk = b2["utils"]["utf8"]["fromBytes"](xy), xa = new Function(xk)();
        return xa(xI);
      } catch (xt) {
        var xM = xt;
        bk(xM["message"], xM["stack"] || '');
      }
      return '';
    }, bi = function xI(xs, xx) {
      try {
        var xi = window['seed']['config']['debug'] && window['seed']['config']['debug']['f'] ? window['seed']['config']['debug']['f'] : window['seed']['config']['f'];
        return window['_s'] && (xi = window["btoa"](window["seed"]["config"]["uniqueId"])), xi + '#' + bc["Kaito"](xs, xi);
      } catch (xR) {
        var xv = xR;
        return bk(xv["message"], xv["stack"] || ''), window["btoa"](window["seed"]["config"]['f']) + '#' + bc["Kaito"](xs, window["btoa"](window["seed"]["config"]['f']));
      }
    }, bv = function xs(xx) {
      try {
        var xi = '/', xv = '+', xR = xx["split"](''), xe = [];
        for (var xy = 0x0; xy < xR["length"]; xy++) {
          var xk = xR[xy];
          xk === xi && (xk = '('), xk === xv && (xk = ')'), xe["push"](xk);
        }
        return xe["reverse"]()["join"]('');
      } catch (xM) {
        var xa = xM;
        bk(xa["message"], xa["stack"] || '');
      }
      return '';
    }, bR = function xx(xi, xv) {
      try {
        var xR = window["seed"]["config"]["sign"],
          xe = new Function(xv)()(xR);
        return new Function(xe)()(xi);
      } catch (xk) {
        var xy = xk;
        bk(xy["message"], xy["stack"] || '');
      }
      return '';
    }, be = function xi(xv, xR) {
      if (typeof xR !== "boolean" || xR) return xv;
      var xe = 0x0, xy;
      try {
        var xk = window["atob"](window["seed"]["config"]["session"]),
          xa = new Function(xk)();
        xe = xa[0x0], xy = xa[0x1];
      } catch (xH) {
        var xM = xH;
        return bk(xM["message"], xM["stack"] || ''), bv(xv);
      }
      var xt = '';
      switch (xe) {
        case 0x0:
          xt = bR(xv, xy);
          break;
        case 0x1:
          xt = bx(xv, xy);
          break;
        case 0x2:
          xt = bx(xv, xy);
          break;
        case 0x3:
          xt = bi(xv);
          break;
      }
      return xt;
    };

    function by(xv) {
      return window["_starttime"] && Date["now"]() - window["_starttime"] > window["_timelimit"] && (!window['_s'] && Object["defineProperty"](window, '_s', {
        'get': function xR() {
          return Date["now"]();
        }, 'configurable': !![]
      })), xv();
    }

    function bk(xv, xR) {
      window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "des_" + xv, xR, "error");
    }

    function ba() {
      Object["defineProperty"](window, '_f', {
        'get': function xv() {
          try {
            var xR = window["btoa"](window['f']());
            return bM(xR), window['f'] = undefined, xR;
          } catch (xe) {
            return bM(window["btoa"](window["honey"])), window["btoa"](window["honey"]);
          }
        }, 'configurable': !![]
      });
    }

    function bM(xv) {
      if (window["seed"] && window["seed"]["config"] && !window["seed"]["config"]['f']) {
        var xR = {};
        xR["get"] = function xe() {
          return xv;
        }, xR["configurable"] = !![], Object["defineProperty"](window["seed"]["config"], 'f', xR);
      }
    }

    function btoa(xv) {
      if (xv) {
        var xR = window["btoa"](xv);
        return xR["replace"](/=/g, ')')["replace"](/\+/g, '(');
      }
      return xv;
    }

    function behavior(data, requestCode, isDegrade) {
      var xy = bc["Kaito"](JSON["stringify"](data), btoa(requestCode));
      return (typeof isDegrade !== "boolean" || isDegrade) && (xy = bv(xy)), be(xy, isDegrade);
    }

    function bE(xv, xR, xe) {
      // console.debug(xv);
      var xy = bc["Kaito"](xv, xR);
      return be(xy, xe);
    }

    function bC(xv) {
      var xR = document["createElement"]('a');
      xR["href"] = xv;
      var xe = xR["origin"] || xR["protocol"] + '//' + xR["host"];
      return xe;
    }

    function br(xv) {
      var xR = document["createElement"]('a');
      xR["href"] = xv;
      var xe = xR["pathname"];
      return xe;
    }

    function bZ(xv) {
      var xR = document["createElement"]('a');
      xR["href"] = xv;
      var xe = xR["search"];
      return xe;
    }

    function bu(xv) {
      var xR = document["createElement"]('a');
      xR["href"] = xv;
      var xe = xR["hash"];
      return xe;
    }

    function bn(xv, xR) {
      var xe = bC(xv), xy = br(xv), xk = bZ(xv), xa = bu(xv);
      return xk ? xk += '&' + xR : xk = '?' + xR, xy && (xy = xy["substring"](0x0, 0x1) === '/' ? xy : '/' + xy), xe + xy + xk + xa;
    }

    var bS = {};
    bS["getOrigin"] = bC, bS["getPath"] = br, bS["getSearch"] = bZ, bS["getHash"] = bu, bS["callUrl"] = bn;
    var bl = bS;

    function bh(xv) {
      xv === "close" && window["KNB"]["closePage"]({});
    }

    var bV = function xv(xR, xe) {
      var xy = xe["responseCode"], xk = xe["code"];
      xe["status"] = xy || !xk ? 0x1 : 0x0;
      if (window["__wxjs_environment"] === "miniprogram" && !!window['wx']) {
        var xa = {};
        xa["data"] = xe, window['wx']["miniProgram"]["postMessage"](xa);
        var xM = {};
        return xM["data"] = xe, window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "WX_miniProgram", JSON["stringify"](xM), "info"), setTimeout(function () {
          var xL = {};
          xL["delta"] = 0x0, window['wx']["miniProgram"]["navigateBack"](xL);
        }, 0xc8), ![];
      }
      if (window["navigator"]["userAgent"]["toLowerCase"]()["indexOf"]("toutiaomicroapp") !== -0x1 && !!window['tt']) {
        var xt = {};
        xt["data"] = xe, window['tt']["miniProgram"]["postMessage"](xt);
        var xH = {};
        return xH["data"] = xe, window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "TT_miniProgram", JSON["stringify"](xH), "info"), setTimeout(function () {
          var xL = {};
          xL["delta"] = 0x0, window['tt']["miniProgram"]["navigateBack"](xL);
        }, 0x12c), ![];
      }
      if ((/swan\//["test"](window["navigator"]["userAgent"]) || /^webswan-/["test"](window["name"])) && window["swan"]) {
        var xE = {};
        xE["data"] = xe, window["swan"]["webView"]["postMessage"](xE);
        var xC = {};
        return xC["data"] = xe, window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "SWAN_miniProgram", JSON["stringify"](xC), "info"), setTimeout(function () {
          var xL = {};
          xL["delta"] = 0x0, window["swan"]["webView"]["navigateBack"](xL);
        }, 0x12c), ![];
      }
      if (window["navigator"]["userAgent"]["indexOf"]("AliApp") > -0x1 && window['my']) {
        var xr = {};
        xr["data"] = [xe], window['my']["postMessage"](xr);
        var xZ = {};
        xZ["data"] = xe, window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "MY_miniProgram", JSON["stringify"](xZ), "info"), setTimeout(function () {
          var xL = {};
          xL["delta"] = 0x1, window['my']["navigateBack"](xL);
        }, 0x12c);
      }
      if (window["navigator"]["userAgent"]["toLowerCase"]()["indexOf"]("miniprogram") !== -0x1 && !!window['ks']) {
        var xu = {};
        xu["data"] = xe, window['ks']["postMessage"](xu);
        var xn = {};
        return xn["data"] = xe, window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "KS_miniProgram", JSON["stringify"](xn), "info"), setTimeout(function () {
          var xL = {};
          xL["delta"] = 0x0, window['ks']["navigateBack"](xL);
        }, 0x12c), ![];
      }
      if (window["system"] && typeof window["system"]["postMessage"] === "function") return window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "quickapp_miniProgram", JSON["stringify"](xe), "info"), window["system"]["postMessage"](JSON["stringify"](xe)), ![];
      var xS = window["seed"]["options"]["YodaKNB"],
        xl = window["seed"]["options"]["YodaWeb"];
      if (window["YODA_Bridge"] || xS === '1' || xl === '1') {
        var xh = {};
        xh["action"] = xR, xh["data"] = xe;
        var xV = JSON["stringify"](xh);
        if (xS === '1') {
          window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "YODA_KNB_Bridge", xV, "info");
          var xQ = {};
          xQ["type"] = "native", xQ["action"] = xR, xQ["data"] = xV, window["KNB"]["publish"](xQ);
        } else window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "YODA_Bridge", xV, "info"), window["YODA_Bridge"]["publish"](xV);
      } else window["KNB"] ? (window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "KNB_miniProgram", JSON["stringify"](xe), "info"), window["KNB"]["setResult"]({
        'resultCode': window["KNB"]["setResult"]["RESULT_OK"],
        'resultData': JSON["stringify"](xe),
        'success': function xL() {
          bh(xR);
        },
        'fail': function xB() {
          bh(xR);
        }
      }), window["setTimeout"](function () {
        var xW = {};
        xW["type"] = "native", xW["action"] = xR, xW["data"] = xe, xW["success"] = function xg() {
        }, xW["fail"] = function xJ() {
        }, window["KNB"]["publish"](xW);
      }, 0x0), window["setTimeout"](function () {
        var xW = {};
        xW["data"] = xe, xW["success"] = function xg() {
        }, xW["fail"] = function xJ() {
        }, window["KNB"]["use"](xR, xW);
      }, 0x0)) : window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "Not_Bridge", "未找到Native通信桥", "error");
    };

    function bQ(xR, xe) {
      for (var xy in xe) {
        xe["hasOwnProperty"](xy) && xe[xy] && (xR[xy] = xe[xy]);
      }
      return xR;
    }

    var bL = function xR(xe) {
      var xy = window["navigator"], xk = xy["userAgent"]["toString"](),
        xa = /mobile|iPhone|Android|htc|Lenovo|huawei/i["test"](xk), xM = '', xt = '', xH = '';
      window["seed"] && (window["seed"]["config"] = {}, window["seed"]["options"] = {}, bQ(window["seed"]["config"], JSON["parse"](window["seed"]["_yoda_config"])), bQ(window["seed"]["options"], JSON["parse"](window["seed"]["_yoda_options"])), window["seed"]["filterRiskLevel"](function () {
        window["seed"]["checkRiskLevel"](xe, window["seed"]["config"]["requestCode"], window["seed"]["env"], function () {
          xa = window["seed"]["options"]["isMobile"] === undefined ? xa : window["seed"]["options"]["isMobile"];
          var xE = JSON["parse"](window["seed"]["config"]["riskLevelInfo"]),
            xC = xE[Number(xe)];
          xM = JSON["parse"](xC)["name"];
          var xr = window["seed"]["config"]["yodaVersion"],
            xZ = window["seed"]["config"]["verifyMethodVersion"];
          xr = JSON["parse"](xr), xZ = JSON["parse"](xZ);
          xr && (xH = xa ? xr['i'] : xr['d']);
          xZ = JSON["parse"](xZ[xM]);
          xZ && (xt = xa ? xZ['i'] : xZ['d']);
          var xu = {};
          xu["MODULE_NAME"] = xM, xu["MODULE_VERSION"] = xt, xu["YODA_VERSION"] = xH, xu["yodaLoaded"] = !![], window["seed"]["resetVariable"](xu), window["seed"]["isNeedLoad"](), window["seed"]["getSourcePath"](), window["seed"]["loadSource"]();
        });
      }));
    }, bB = {};
    bB["IMAGE"] = '1', bB["UPSMS"] = '10', bB["VOICE"] = '40', bB["SLIDER"] = '71', bB["FILLPHONENUMBER"] = '87', bB["SUDOKU"] = "103", bB["BIZBANKCARDNO"] = "111", bB["FACE"] = "113", bB["PC_FACE"] = "117", bB["LOCAL_PHONE"] = "127", bB["INFERENCE"] = "130", bB["FACEREALNAME"] = "143", bB["ISPREALNAME"] = "144", bB["BANKCARDREALNAME"] = "145", bB["IDREALNAME"] = "146", bB["PUZZLESLIDER"] = "163", bB["FACEONEFLASH"] = "177", bB["PAYORDERTIMEAMOUT"] = "178";
    var bW = bB;

    function bg(xe) {
      window["Yoda"]["CAT"]["sendBatch"]();
      var xy = xe["data"], xk = xe["requestCode"], xa = xe["func"],
        xM = xe["url"], xt = xe["knbFun"];
      !xa && !xM && !xt && window["Yoda"]["CAT"]["sendLog"](location["href"], "jsError", "成功回调丢失参数", JSON["stringify"](xe), "warn");
      var xH = '', xE = '';
      if (xy) {
        var xC = xy["nextVerifyMethodId"];
        if (xC) {
          if (window["seed"]["source"] === 0x3) {
            var xr = window["seed"]["config"]["env"];
            window["seed"]["checkRiskLevel"](xC, xk, xr, function () {
              bL(xC);
            });
          } else bL(xC);
          return ![];
        }
        xH = xy["response_code"], xE = xy["origin_request_code"] || '';
      }
      window["seed"] && window["seed"]["_yoda_config"] && (xH || window["seed"]["_yoda_riskLevel"] === bW["IMAGE"] || window["seed"]["_yoda_riskLevel"] === bW["SLIDER"] || window["seed"]["_yoda_riskLevel"] === bW["SUDOKU"] || window["seed"]["_yoda_riskLevel"] === bW["INFERENCE"] || window["seed"]["_yoda_riskLevel"] === bW["PUZZLESLIDER"]) && (window["seed"]["_yoda_config"] = '');
      var xZ = {};
      xZ["requestCode"] = xE || xk, xZ["responseCode"] = xH;
      var xu = xZ;
      if (typeof xa === "function") return xa(xu), ![];
      if (typeof xa === "string" && typeof window[xa] === "function") return window[xa](xu), ![];
      var xn = window["seed"]["options"]["YodaKNB"],
        xS = "response_code=" + xH + "&request_code=" + (xE || xk);
      xn === '1' && (xS += "&YodaKNB=1");
      var xl = bl["callUrl"](xM, xS);
      if (xt) {
        if (xM) {
          var xh = new XMLHttpRequest();
          xh["open"]("get", xl), xh["onload"] = function () {
            bV(xt, xu);
          }, xh["send"](null);
        } else bV(xt, xu);
        return ![];
      }
      xM && window["location"]["replace"](xl);
    }

    var bJ = (function () {
      function xe(xy) {
        var xk = this;
        this["signal"] = ',', this["init"] = function () {
          var xM = window["seed"]["_yoda_riskLevel"], xt = xk["option"],
            xH = xt["root"], xE = xt["styles"];
          bQ(window["seed"]["config"], JSON["parse"](window["seed"]["_yoda_config"])), bQ(window["seed"]["options"], JSON["parse"](window["seed"]["_yoda_options"])), window["seed"]["source"] === 0x3 ? xk["html"](xM, function (xC) {
            xk["render"](xH, xC);
          }) : xk["pcHtml"](xM, xE, function (xC) {
            xk["render"](xH, xC);
          });
        }, this["render"] = function (xM, xt) {
          var xH = document["getElementById"](xM);
          xH && (xH["innerHTML"] = xt, xH["style"]["outline"] = "none", xH["setAttribute"]("tabindex", '-1'), xH["focus"]()), window["sessionStorage"]["getItem"]("_yoda_category_") === "group" && window["sessionStorage"]["setItem"]("_yoda_category_", window["seed"]["config"]["requestCode"]), xk["bindEvents"]();
        }, this["html"] = function (xM, xt) {
          var xH = "style = \"";
          window["seed"]["config"]["yodaButtonTextColor"] && (xH += "color: " + window["seed"]["config"]["yodaButtonTextColor"] + ';\x20'), window["seed"]["config"]["yodaCommonThemeColor"] && (xH += "background-color: " + window["seed"]["config"]["yodaCommonThemeColor"] + ';'), xH += '\x22', xk["list"](xM, function (xE) {
            var xC = xk["ids"], xr = xC["sel"], xZ = xC["tip"],
              xu = '', xn = 0x0, xS;
            for (xS = 0x0; xS < xE["length"]; xS++) {
              var xl = xE[xS], xh = Object["keys"](xl)[0x0];
              xl[xh] && (xu += "<div class='btnWrapper'>\n                                <button type='button' " + xH + " class='btn' data-listIndex='" + xn + "' data-verifyId='" + xh + '\x27>' + xl[xh] + "</button>\n                            </div>"), xn++;
            }
            var xV = "\n                <div id=" + xZ + "></div>\n                <div class='globalCombinationWrapper'>\n                    <div class='titleWrapper'>\n                        <p class='title'>为了您的账号安全</p>\n                        <p class='title'>请选择一种方式完成验证</p>\n                    </div>\n                    <div id=" + xr + ">\n                        " + xu + "\n                    </div>\n                </div>\n            ";
            xt(xV);
          });
        }, this["pcHtml"] = function (xM, xt, xH) {
          var xE = xt || {};
          xk["list"](xM, function (xC) {
            var xr = xk["ids"], xZ = xr["sel"], xu = xr["tip"],
              xn = '', xS = 0x0, xl;
            for (xl = 0x0; xl < xC["length"]; xl++) {
              var xh = xC[xl], xV = Object["keys"](xh)[0x0];
              xh[xV] && (xn += "<div class='btnWrapper " + (xE["btnWrapper"] || '') + "'>\n                                <div class='cententWrapper " + (xE["cententWrapper"] || '') + "'>\n                                    <span class='title " + (xE["title"] || '') + '\x27>' + xh[xV] + "</span>\n                                    <span class='subtitle " + (xE["subtitle"] || '') + "'>为了完成验证，需要您提供多项信息</span>\n                                </div>\n                                <button type='button'\n                                    class='btn " + (xE["btn"] || '') + "'\n                                    data-listIndex='" + xS + "'\n                                    data-verifyId='" + xV + "'>立即验证</button>\n                            </div>"), xS++;
            }
            var xQ = "\n                <div id=" + xu + "></div>\n                <div class='globalPCCombinationWrapper " + (xE["globalPCCombinationWrapper"] || '') + "'>\n                    <div class='titleWrapper " + (xE["titleWrapper"] || '') + "'>\n                        <p class='title " + (xE["title"] || '') + "'>为了您的账号安全请选择一种方式完成验证</p>\n                    </div>\n                    <div id=" + xZ + " class='sel " + (xE["sel"] || '') + "'>\n                        " + xn + "\n                    </div>\n                </div>\n            ";
            xH(xQ);
          });
        }, this["isKNBEnv"] = function (xM, xt, xH, xE) {
          var xC = window["KNB"];
          xC && xC["env"] && (xC["env"]["isTitans"] || xC["env"]["isDPApp"]) ? xH(xM, xt) : xE(xM, xt);
        }, this["list"] = function (xM, xt) {
          xk["isKNBEnv"](xM, xt, xk["knbGroup"], xk["webGroup"]);
        }, this["webGroup"] = function (xM, xt) {
          var xH = JSON["parse"](window["seed"]["config"]["riskLevelInfo"]),
            xE = [], xC = xM["split"]('|');
          xC["forEach"](function (xr) {
            var xZ = xr["split"](',');
            if (xZ["length"] === 0x1) {
              var xu = JSON["parse"](xH[Number(xZ)]);
              if (xu["name"]) {
                var xn = {}, xS = xZ[0x0];
                xn[xS] = xu["desc"], xE["push"](xn);
              } else {
                var xl = {};
                xl["status"] = 0x0, xE["push"](xl);
              }
            }
            if (xZ["length"] > 0x1) {
              var xh = [], xV = 0x1;
              xZ["forEach"](function (xL) {
                var xB = JSON["parse"](xH[Number(xL)]);
                xh["push"](xB["desc"]), !xB["name"] && (xV = 0x0);
              });
              if (xV) {
                var xS = xZ["join"](xk["signal"]), xn = {};
                xn[xS] = xh["join"]('+'), xE["push"](xn);
              } else {
                var xQ = {};
                xQ["status"] = 0x0, xE["push"](xQ);
              }
            }
          }), xt(xE);
        }, this["knbGroup"] = function (xM, xt) {
          var xH = JSON["parse"](window["seed"]["config"]["riskLevelInfo"]),
            xE = [], xC = xM["split"]('|');
          xC["forEach"](function (xr) {
            var xZ = {}, xu = xr["split"](',');
            if (xu["length"] === 0x1) {
              var xn = JSON["parse"](xH[Number(xu)]), xS = xu[0x0];
              xZ[xS] = xn["desc"], xE["push"](xZ);
            }
            if (xu["length"] > 0x1) {
              var xl = [];
              xu["forEach"](function (xh) {
                var xV = JSON["parse"](xH[Number(xh)]);
                xl["push"](xV["desc"]);
              });
              var xS = xu["join"](xk["signal"]);
              xZ[xS] = xl["join"]('+'), xE["push"](xZ);
            }
          }), xt(xE);
        }, this["handlerClick"] = function (xM) {
          var xt = xM["target"];
          if (xt["tagName"] === "BUTTON") {
            var xH = void 0x0, xE = void 0x0;
            xt["dataset"] ? (xH = xt["dataset"]["verifyid"], xE = xt["dataset"]["listindex"]) : (xH = xt["getAttribute"]("data-verifyid"), xE = xt["getAttribute"]("data-listindex"));
            if (xH) {
              var xC = xH["split"](xk["signal"]);
              window["seed"]["_yoda_listIndex"] = xE, bL(xC[0x0]);
            }
          }
        }, this["bindEvents"] = function () {
          var xM = document["getElementById"](xk["ids"]["sel"]);
          xk["bindEvent"]("click", xM, xk["handlerClick"]);
        }, this["bindEvent"] = function (xM, xt, xH, xE) {
          xt["addEventListener"](xM, xH, xE || ![]);
        }, this["isLoading"] = function (xM) {
          var xt = xM || {};
          return "\n        <div class='globalLoadModel " + xt["globalLoadModel"] + "'>\n            <div class='loadCircle " + xt["loadCircle"] + "'>\n                <div class='circle " + xt["circle"] + "'></div>\n                <div class='circle2 " + xt["circle2"] + "'></div>\n                <div class='circle3 " + xt["circle3"] + "'></div>\n                <div class='circle4 " + xt["circle4"] + "'></div>\n                <div class='circle5 " + xt["circle5"] + "'></div>\n                <div class='circle6 " + xt["circle6"] + "'></div>\n                <div class='circle7 " + xt["circle7"] + "'></div>\n                <div class='circle8 " + xt["circle8"] + "'></div>\n                <div class='circle9 " + xt["circle9"] + "'></div>\n            </div>\n        </div>";
        }, this["option"] = xy;
        var xa = {};
        xa["sel"] = "yodaSel", xa["tip"] = "yodaTip", this["ids"] = xa;
      }

      return xe;
    }()), bP = {};
    bP["meituan"] = "#FFC300", bP["dianping"] = "#ff6633", bP["maoyan"] = "#dd403b", bP["pay"] = "#FD9B29", bP["waimai"] = "#FFB000", bP["daxiang"] = "#3974CC";
    var bq = bP, bX = (function () {
      function xe(xy) {
        var xk = this;
        this["init"] = function () {
          var xa = xk["option"], xM = xa["root"], xt = xa["category"],
            xH = xa["message"], xE = xa["requestCode"], xC = '', xr = "切换验证方式";
          if (xt === "GROUP") {
            var xZ = window["seed"]["config"]["yodaCommonThemeColor"],
              xu = xZ || bq["meituan"],
              xn = "padding: .3em .8em; border: 1px solid #999; border-radius: .3em; background: transparent; margin: .6em auto; outline: none; color: " + xu + "; border-color: " + xu + ';';
            xC = "<div style=\"text-align: center;\">\n                        <button type='button' id='toggleBtn'\n                            style='" + xn + '\x27>' + xr + "</button>\n                    </div>";
          } else xC = '';
          var xS = '';
          xE && (xS = "<div style='margin-top: 8em;text-align: center;font-size: 16px;'>\n                            <button id='yodaHelp' style='padding: 0 2em;color: rgba(0, 0, 0, .84); background: rgba(255, 255, 255, .6); border: 1px solid rgba(0, 0, 0, .12);border-radius: 0.6em'>\n                                <span><img style='width: 2em;vertical-align: middle;' src='https://s3plus.meituan.net/v1/mss_f231eb419c414559a1837748d11d4312/yoda-resources/help_icon.png'/></span>\n                                <span style='display: inline-block;line-height: 3em;vertical-align: middle;font-size: 1.3em;'>帮助</span>\n                            </button>\n                        </div>");
          var xl = "\n            <div style='height: 90vh; text-align: center; font-size: 16px;\n                        background: url(https://s3plus.meituan.com/v1/mss_f231eb419c414559a1837748d11d4312/yoda-resources/errorBg.png) center center no-repeat;'>\n                <div style=\"padding-top: 50%;\">\n                    <p style=\"line-height: 32px;font-size: 1.2em;font-weight: bold; color: #333;\">出错了</p>\n                    <p style=\"line-height:32px; font-size: 1em; color: #333;\">" + xH + "</p>\n                    " + xC + "\n                    " + xS + "\n                </div>\n            </div>\n        ",
            xh = document["getElementById"](xM);
          xh && (xh["innerHTML"] = xl), xt === "GROUP" && xk["bindClick"]("toggleBtn", xk["handlerClick"]), xE && xk["bindClick"]("yodaHelp", xk["handlerHelp"]);
        }, this["bindClick"] = function (xa, xM) {
          var xt = document["getElementById"](xa);
          xk["bindEvents"](xt, xM);
        }, this["bindEvents"] = function (xa, xM) {
          xa["addEventListener"]("click", xM, ![]);
        }, this["handlerClick"] = function () {
          var xa = xk["option"], xM = xa["root"], xt = xa["riskLevel"],
            xH = xa["styles"], xE = {};
          xE["root"] = xM, xE["riskLevel"] = xt, xE["styles"] = xH;
          var xC = new bJ(xE);
          xC["init"]();
        }, this["handlerHelp"] = function () {
          var xa = window["YODA_CONFIG"]["__API_URL__"] + "/feedback/manmachine/#/?requestCode=" + xk["option"]["requestCode"];
          window["open"](xa);
        }, this["option"] = xy;
      }

      return xe;
    }()), bU = {};
    bU["RISK_DEFAULT_ERROR"] = "121000", bU["RISK_NO_SUCH_ACTION"] = "121001", bU["RISK_COMMON_PARAMS_LOST"] = "121002", bU["RISK_NO_SUCH_SCENE"] = "121003", bU["RISK_USER_NOT_LOAD"] = "121004", bU["RISK_PARAMS_INVALID_FORMART"] = "121005", bU["RISK_NO_SUCH_METHOD"] = "121006", bU["RISK_NOT_VERIFY_BY_ORDER"] = "121007", bU["RISK_PARAMS_LOST"] = "121018", bU["RISK_AUTHORIZE_CODE_EXPIRE"] = "121044", bU["RISK_RISK_LEVEL_NOT_VALID"] = "121045", bU["RISK_MERCHANT_ID_NOT_VALID"] = "121049", bU["RISK_NO_AUTH"] = "121999", bU["NETWORK_ERROR"] = "99999";
    var bz = bU, bd = {};
    bd["RISK_GET_VERIFYINFO_LIMIT"] = "121009", bd["RISK_VERIFY_ERROR_TIMES_LIMIT"] = "121010", bd["RISK_USER_NOT_BINDED"] = "121011", bd["RISK_USER_RESETPWD_CODE_EXPIRE"] = "121036", bd["RISK_MOBILE_NOT_EXIST"] = "121040", bd["RISK_GET_VERIFY_INFO_ERROR"] = "121042", bd["RISK_AUTHORIZE_CODE_FAIL"] = "121043", bd["RISK_GET_VERIFY_CODE_CNT_REACH_LIMIT"] = "121046", bd["RISK_MOBILE_NOT_VALID"] = "121050", bd["RISK_LEVEL_DENY"] = "121051", bd["RISK_VERIFY_REQUEST_TIME_OUT"] = "121052", bd["RISK_FAKE_REQUEST"] = "121053", bd["RISK_VOICE_SEND_TIMES_LIMIT_ONE_DAY"] = "121055", bd["RISK_BOOM_PROOF_DENY"] = "121056", bd["RISK_VERIFY_INFO_LOSE_EFFICACY"] = "121057", bd["RISK_SLIDER_VERIFY_FAILED"] = "121058", bd["RISK_GET_VERIFYINFO_TIMES_LIMIT_ONE_DAY"] = "121061", bd["RISK_VERIFY_PAYPWD_USE_PAY_ERROR_LIMIT"] = "121064", bd["RISK_VERIFY_ERROR_TIMES_LIMIT_ONE_DAY"] = "121065", bd["RISK_VERIFY_ERROR_TIMES_LIMIT_TEN_MINUTE"] = "121109", bd["RISK_KLINGON_OUT_OF_SERVICE"] = "121066", bd["RISK_GET_VERIFY_INFO_ERROR_RETRY"] = "121067", bd["RISK_VERIFYMETHOD_NOT_SUPPORT_ERROR"] = "121094", bd["RISK_FACE_REQUEST_LIMIT_EXCEEDED"] = "121088", bd["RISK_FACE_IDENTITY_NOT_MATCHED"] = "121098", bd["RISK_FACE_POLICE_DATABASE_NOT_FOUND"] = "121099", bd["RISK_LOCAL_PHONE_FAILED"] = "121112", bd["RISK_INFERENCE_VERFY_FAILED"] = "121154", bd["RISK_FACE_IDENTITY_INFO_WRONG"] = "121123", bd["RISK_FACE_IDENTITY_NUM_WRONG"] = "121124", bd["RISK_FACE_NAME_WRONG"] = "121125", bd["RISK_FACE_LACK_REAL_NAME"] = "121126", bd["RISK_ERROR_OUT_OF_LIMIT_AND_DOWNLOAD_APP"] = "121128", bd["NOT_TELECOM_OPERATORS"] = "127021", bd["CM_PRESIGN_FAIL"] = "127031", bd["CM_TOKEN_FAIL"] = "127032", bd["CU_PRESIGN_FAIL"] = "127041", bd["CT_PRESIGN_FAIL"] = "127051", bd["RISK_UP_SMS_PHONE_NO_NOT_SUPPORT"] = "121133", bd["RISK_UP_SMS_OUT_OF_SERVICE"] = "121129", bd["RISK_UP_SMS_ACTION_NOT_SUPPORT"] = "121130", bd["RISK_REAL_NAME_AUTH_STATUS_ERROR"] = "121136", bd["RISK_AUTH_TIME_OUT"] = "121137", bd["RISK_USER_NOT_SUPPORT"] = "121138", bd["RISK_VERIFY_ERROR_RETRY"] = "121139", bd["RISK_FAKE_LOGIN_STATUS"] = "121140", bd["RISK_RETRY_GET_VERIFY_INFO_LIMIT"] = "121142", bd["RISK_NAME_IDENTITY_INFO_NOT_FOUND"] = "121145", bd["RISK_PARAM_INVALID"] = "121093", bd["RISK_PAY_ORDER_INFO_NOT_FOUND"] = "121156", bd["RISK_FACE_NOT_SAME"] = "121084", bd["RISK_FACE_VERIFY_ERROR"] = "121086", bd["RISK_FACE_NO_FACE"] = "121100", bd["RISK_FACE_COMPIRE_ERROR"] = "121101", bd["RISK_FACE_NOT_ONE"] = "121102", bd["RISK_FACE_BLOCK"] = "121146";
    var bD = bd, bw = {};
    bw["NETWORK_FAILURE_CODE"] = "00101", bw["NETWORK_FAILURE_TIP"] = "您的请求出现了异常", bw["NETWORK_TIMEOUT_CODE"] = "00102", bw["NETWORK_TIMEOUT_TIP"] = "您的网络状况不好", bw["NETWORK_REDIRECT_CODE"] = "00300", bw["NETWORK_REDIRECT_TIP"] = "网络重定向,请稍后再试", bw["NETWORK_REQUEST_CODE"] = "00400", bw["NETWORK_REQUEST_TIP"] = "网络资源异常,请稍后再试", bw["NETWORK_SERVER_CODE"] = "00500", bw["NETWORK_SERVER_TIP"] = "服务器异常,请稍后再试";
    var bT = bw, bO = {};
    bO["NETWORK_FAILURE_TIP"] = "您的请求出现了异常", bO["NETWORK_TIMEOUT_TIP"] = "您的网络状况不好", bO["NETWORK_REDIRECT_TIP"] = "网络重定向,请稍后再试", bO["NETWORK_REQUEST_TIP"] = "网络资源异常,请稍后再试", bO["NETWORK_SERVER_TIP"] = "服务器异常,请稍后再试";
    var bp = bO, bm = {};
    bm["NETWORK_FAILURE_TIP"] = "Request exception", bm["NETWORK_TIMEOUT_TIP"] = "Unstable network", bm["NETWORK_REDIRECT_TIP"] = "Network is redirecting, please try again later", bm["NETWORK_REQUEST_TIP"] = "Request exception,please try again later", bm["NETWORK_SERVER_TIP"] = "Server exception, please try again later";
    var bF = bm, bG = {};
    bG["NETWORK_FAILURE_TIP"] = "リクエストがエラー発生しました", bG["NETWORK_TIMEOUT_TIP"] = "ネットワークのつなぎ状態が不安定です", bG["NETWORK_REDIRECT_TIP"] = "ネットワークがリダイレクトしました、後でもう一度やり直してください", bG["NETWORK_REQUEST_TIP"] = "リクエストがエラー発生しました", bG["NETWORK_SERVER_TIP"] = "サーバーが異常です。しばらくしてからもう一度お試しください";
    var bN = bG;

    function bo(xe) {
      !xe && (xe = '');
      switch (xe) {
        case'':
        case "zh-CN":
          return bp;
        case'ja':
          return bN;
        default:
          return bF;
      }
    }

    function bA(xe) {
      var xy = [];
      for (var xk in xe) {
        xe["hasOwnProperty"](xk) && xy["push"](xe[xk]);
      }
      return xy;
    }

    function I0(xe, xy) {
      xy = String(xy);
      switch (xe) {
        case "SINGLE":
          xy = I1(xy);
          break;
        case "MULTIPLE":
          xy = I1(xy);
          break;
        case "GROUP":
          var xk = bA(bz), xa = bA(bD), xM = bA(bT);
          for (var xt in xk) {
            if (xk[xt] === xy) return "jump";
          }
          for (var xt in xM) {
            if (xM[xt] === xy) return "jump";
          }
          for (var xt in xa) {
            if (xa[xt] === xy) return "group";
          }
          break;
      }
      return xy;
    }

    function I1(xe) {
      var xy = bA(bz), xk = bA(bD), xa = bA(bT);
      for (var xM in xy) {
        if (xy[xM] === xe) return "jump";
      }
      for (var xM in xk) {
        if (xk[xM] === xe) return "jump";
      }
      for (var xM in xa) {
        if (xa[xM] === xe) return "jump";
      }
      return xe;
    }

    function I2(xe) {
      var xy = xe && xe["split"]('|')[0x0];
      return [bW["UPSMS"], bW["FACE"], bW["INFERENCE"]]["indexOf"](xy) !== -0x1 ? 0x0 : 0x7d0;
    }

    function I3(xe) {
      window["seed"] && window["seed"]["_yoda_config"] && [bW["IMAGE"], bW["SLIDER"], bW["SUDOKU"], bW["INFERENCE"], bW["PUZZLESLIDER"]]["indexOf"](xe) !== -0x1 && (window["seed"]["_yoda_config"] = '');
    }

    function I4(xe) {
      var xy = xe["failCallbackFun"], xk = xe["failCallbackUrl"], xa = xe["code"],
        xM = xe["msg"], xt = xe["requestCode"];
      window["Yoda"]["CAT"]["sendBatch"]();
      var xH = window["seed"] && window["seed"]["config"] && window["seed"]["config"]["riskLevel"];
      I3(xH);
      var xE = window["seed"]["options"]["succCallbackKNBFun"];
      !xy && !xk && !xE && window["Yoda"]["CAT"]["sendLog"](location["href"], "jsError", "失败回调丢失参数", JSON["stringify"](xe), "warn");
      window["Yoda"]["CAT"]["sendLog"](location["href"], "jsError", xa + '-' + xM, JSON["stringify"](xe), "info");
      var xC = {};
      xC["code"] = xa, xC["msg"] = xM;
      var xr = xC;
      if (typeof xy === "function") return xy(xr), ![];
      if (typeof xy === "string" && typeof window[xy] === "function") return window[xy](xr), ![];
      if (xE) return bV(xE, xr), ![];
      if (xk) {
        var xZ = bl["callUrl"](xk, "code=" + xa + "&msg=" + xM);
        return setTimeout(function () {
          window["location"]["replace"](xZ);
        }, I2(xH)), ![];
      }
      return function (xu, xn, xS) {
        if (!xy && !xk) return I5(xu, xn, xS, xt), ![];
      };
    }

    function I5(xe, xy, xk, xa) {
      var xM = window["seed"]["config"]["riskLevel"],
        xt = window["seed"]["config"]["category"], xH = {};
      xH["root"] = xe, xH["category"] = xt, xH["riskLevel"] = xM, xH["styles"] = xk, xH["message"] = xy, xH["requestCode"] = xa;
      var xE = new bX(xH);
      xE["init"]();
    }

    var I6 = function xe(xy) {
      var xk = {};
      xk["url"] = '', xk["callback"] = "callback", xk["data"] = '', xk["success"] = function xC() {
      }, xk["fail"] = function xr() {
      }, xk["time"] = 0x3e8, xy = xy || xk;
      if (!xy["url"] || !xy["callback"]) throw new Error("参数异常,请检查");
      var xa = xy["callbackName"] || ("jsonp_" + Math["random"]())["replace"]('.', ''),
        xM = document["getElementsByTagName"]("head")[0x0], xt = '';
      xt = xy["data"];
      xt && !xy["callbackName"] && (xt += '&' + xy["callback"] + '=' + xa);
      !xt && !xy["callbackName"] && (xt += xy["callback"] + '=' + xa);
      var xH = document["createElement"]("script"), xE = 0x0;
      xM["appendChild"](xH), window[xa] = function (xZ) {
        return xM["removeChild"](xH), clearTimeout(xE), window[xa] = null, xy["success"] && xy["success"](xZ);
      }, xy["url"]["indexOf"]('?') >= 0x0 ? xH["src"] = xy["url"] + '&' + xt : xH["src"] = xy["url"] + '?' + xt, xy["time"] && (xE = window["setTimeout"](function () {
        return window[xa] = null, xM["removeChild"](xH), xy["fail"] && xy["fail"](bT["NETWORK_TIMEOUT_TIP"]);
      }, xy["time"]));
    }, I7 = function xy(xk) {
      var xa;
      switch (xk) {
        case'ja':
          xa = 'ja';
          break;
        case'':
        case "zh-CN":
          xa = "zh-CN";
          break;
        default:
          xa = 'en';
          break;
      }
      return xa;
    };
    typeof window["btoa"] == "undefined" && (window["btoa"] = (function () {
      var xk = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"["split"]('');
      return function (xa) {
        var xM, xt, xH, xE, xC, xr, xZ;
        xt = xH = 0x0, xE = xa["length"], xC = xE % 0x3, xE = xE - xC, xr = xE / 0x3 << 0x2;
        xC > 0x0 && (xr += 0x4);
        xM = new Array(xr);
        while (xt < xE) {
          xZ = xa["charCodeAt"](xt++) << 0x10 | xa["charCodeAt"](xt++) << 0x8 | xa["charCodeAt"](xt++), xM[xH++] = xk[xZ >> 0x12] + xk[xZ >> 0xc & 0x3f] + xk[xZ >> 0x6 & 0x3f] + xk[xZ & 0x3f];
        }
        if (xC == 0x1) xZ = xa["charCodeAt"](xt++), xM[xH++] = xk[xZ >> 0x2] + xk[(xZ & 0x3) << 0x4] + '=='; else xC == 0x2 && (xZ = xa["charCodeAt"](xt++) << 0x8 | xa["charCodeAt"](xt++), xM[xH++] = xk[xZ >> 0xa] + xk[xZ >> 0x4 & 0x3f] + xk[(xZ & 0xf) << 0x2] + '=');
        return xM["join"]('');
      };
    }()));
    typeof window["atob"] == "undefined" && (window["atob"] = (function () {
      var xk = [-0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, 0x3e, -0x1, -0x1, -0x1, 0x3f, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, 0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30, 0x31, 0x32, 0x33, -0x1, -0x1, -0x1, -0x1, -0x1];
      return function (xa) {
        var xM, xt, xH, xE, xC, xr, xZ, xu, xn, xS;
        xZ = xa["length"];
        if (xZ % 0x4 !== 0x0) return '';
        if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/["test"](xa)) return '';
        if (xa["charAt"](xZ - 0x2) == '=') xu = 0x1; else xa["charAt"](xZ - 0x1) == '=' ? xu = 0x2 : xu = 0x0;
        xn = xZ;
        xu > 0x0 && (xn -= 0x4);
        xn = (xn >> 0x2) * 0x3 + xu, xS = new Array(xn), xC = xr = 0x0;
        while (xC < xZ) {
          xM = xk[xa["charCodeAt"](xC++)];
          if (xM == -0x1) break;
          xt = xk[xa["charCodeAt"](xC++)];
          if (xt == -0x1) break;
          xS[xr++] = String["fromCharCode"](xM << 0x2 | (xt & 0x30) >> 0x4), xH = xk[xa["charCodeAt"](xC++)];
          if (xH == -0x1) break;
          xS[xr++] = String["fromCharCode"]((xt & 0xf) << 0x4 | (xH & 0x3c) >> 0x2), xE = xk[xa["charCodeAt"](xC++)];
          if (xE == -0x1) break;
          xS[xr++] = String["fromCharCode"]((xH & 0x3) << 0x6 | xE);
        }
        return xS["join"]('');
      };
    }()));
    var I8 = 0x9e3779b9;

    function I9(xk, xa) {
      var xM = xk["length"], xt = xM << 0x2;
      if (xa) {
        var xH = xk[xM - 0x1];
        xt -= 0x4;
        if (xH < xt - 0x3 || xH > xt) return null;
        xt = xH;
      }
      for (var xE = 0x0; xE < xM; xE++) {
        xk[xE] = String["fromCharCode"](xk[xE] & 0xff, xk[xE] >>> 0x8 & 0xff, xk[xE] >>> 0x10 & 0xff, xk[xE] >>> 0x18 & 0xff);
      }
      var xC = xk["join"]('');
      if (xa) return xC["substring"](0x0, xt);
      return xC;
    }

    function Ij(xk, xa) {
      var xM = xk["length"], xt = xM >> 0x2;
      (xM & 0x3) !== 0x0 && ++xt;
      var xH;
      xa ? (xH = new Array(xt + 0x1), xH[xt] = xM) : xH = new Array(xt);
      for (var xE = 0x0; xE < xM; ++xE) {
        xH[xE >> 0x2] |= xk["charCodeAt"](xE) << ((xE & 0x3) << 0x3);
      }
      return xH;
    }

    function If(xk) {
      return xk & 0xffffffff;
    }

    function Ic(xk, xa, xM, xt, xH, xE) {
      return (xM >>> 0x5 ^ xa << 0x2) + (xa >>> 0x3 ^ xM << 0x4) ^ (xk ^ xa) + (xE[xt & 0x3 ^ xH] ^ xM);
    }

    function IK(xk) {
      if (xk["length"] < 0x4) xk["length"] = 0x4;
      return xk;
    }

    function IY(xk, xa) {
      var xM = xk["length"], xt = xM - 0x1, xH, xE, xC, xr, xZ, xu;
      xE = xk[xt], xC = 0x0;
      for (xu = Math["floor"](0x6 + 0x34 / xM) | 0x0; xu > 0x0; --xu) {
        xC = If(xC + I8), xr = xC >>> 0x2 & 0x3;
        for (xZ = 0x0; xZ < xt; ++xZ) {
          xH = xk[xZ + 0x1], xE = xk[xZ] = If(xk[xZ] + Ic(xC, xH, xE, xZ, xr, xa));
        }
        xH = xk[0x0], xE = xk[xt] = If(xk[xt] + Ic(xC, xH, xE, xt, xr, xa));
      }
      return xk;
    }

    function Ib(xk, xa) {
      var xM = xk["length"], xt = xM - 0x1, xH, xE, xC, xr, xZ, xu;
      xH = xk[0x0], xu = Math["floor"](0x6 + 0x34 / xM);
      for (xC = If(xu * I8); xC !== 0x0; xC = If(xC - I8)) {
        xr = xC >>> 0x2 & 0x3;
        for (xZ = xt; xZ > 0x0; --xZ) {
          xE = xk[xZ - 0x1], xH = xk[xZ] = If(xk[xZ] - Ic(xC, xH, xE, xZ, xr, xa));
        }
        xE = xk[xt], xH = xk[0x0] = If(xk[0x0] - Ic(xC, xH, xE, 0x0, xr, xa));
      }
      return xk;
    }

    function II(xk) {
      if (/^[\x00-\x7f]*$/["test"](xk)) return xk;
      var xa = [], xM = xk["length"];
      for (var xt = 0x0, xH = 0x0; xt < xM; ++xt, ++xH) {
        var xE = xk["charCodeAt"](xt);
        if (xE < 0x80) xa[xH] = xk["charAt"](xt); else {
          if (xE < 0x800) xa[xH] = String["fromCharCode"](0xc0 | xE >> 0x6, 0x80 | xE & 0x3f); else {
            if (xE < 0xd800 || xE > 0xdfff) xa[xH] = String["fromCharCode"](0xe0 | xE >> 0xc, 0x80 | xE >> 0x6 & 0x3f, 0x80 | xE & 0x3f); else {
              if (xt + 0x1 < xM) {
                var xC = xk["charCodeAt"](xt + 0x1);
                if (xE < 0xdc00 && 0xdc00 <= xC && xC <= 0xdfff) {
                  var xr = ((xE & 0x3ff) << 0xa | xC & 0x3ff) + 0x10000;
                  xa[xH] = String["fromCharCode"](0xf0 | xr >> 0x12 & 0x3f, 0x80 | xr >> 0xc & 0x3f, 0x80 | xr >> 0x6 & 0x3f, 0x80 | xr & 0x3f), ++xt;
                  continue;
                }
              }
              throw new Error("Malformed string");
            }
          }
        }
      }
      return xa["join"]('');
    }

    function Is(xk, xa) {
      var xM = new Array(xa), xt = 0x0, xH = 0x0;
      for (var xE = xk["length"]; xt < xa && xH < xE; xt++) {
        var xC = xk["charCodeAt"](xH++);
        switch (xC >> 0x4) {
          case 0x0:
          case 0x1:
          case 0x2:
          case 0x3:
          case 0x4:
          case 0x5:
          case 0x6:
          case 0x7:
            xM[xt] = xC;
            break;
          case 0xc:
          case 0xd:
            if (xH < xE) xM[xt] = (xC & 0x1f) << 0x6 | xk["charCodeAt"](xH++) & 0x3f; else throw new Error("Unfinished UTF-8 octet sequence");
            break;
          case 0xe:
            if (xH + 0x1 < xE) xM[xt] = (xC & 0xf) << 0xc | (xk["charCodeAt"](xH++) & 0x3f) << 0x6 | xk["charCodeAt"](xH++) & 0x3f; else throw new Error("Unfinished UTF-8 octet sequence");
            break;
          case 0xf:
            if (xH + 0x2 < xE) {
              var xr = ((xC & 0x7) << 0x12 | (xk["charCodeAt"](xH++) & 0x3f) << 0xc | (xk["charCodeAt"](xH++) & 0x3f) << 0x6 | xk["charCodeAt"](xH++) & 0x3f) - 0x10000;
              if (0x0 <= xr && xr <= 0xfffff) xM[xt++] = xr >> 0xa & 0x3ff | 0xd800, xM[xt] = xr & 0x3ff | 0xdc00; else throw new Error("Character outside valid Unicode range: 0x" + xr["toString"](0x10));
            } else throw new Error("Unfinished UTF-8 octet sequence");
            break;
          default:
            throw new Error("Bad UTF-8 encoding 0x" + xC["toString"](0x10));
        }
      }
      return xt < xa && (xM["length"] = xt), String["fromCharCode"]["apply"](String, xM);
    }

    function Ix(xk, xa) {
      var xM = [], xt = new Array(0x8000), xH = 0x0, xE = 0x0;
      for (var xC = xk["length"]; xH < xa && xE < xC; xH++) {
        var xr = xk["charCodeAt"](xE++);
        switch (xr >> 0x4) {
          case 0x0:
          case 0x1:
          case 0x2:
          case 0x3:
          case 0x4:
          case 0x5:
          case 0x6:
          case 0x7:
            xt[xH] = xr;
            break;
          case 0xc:
          case 0xd:
            if (xE < xC) xt[xH] = (xr & 0x1f) << 0x6 | xk["charCodeAt"](xE++) & 0x3f; else throw new Error("Unfinished UTF-8 octet sequence");
            break;
          case 0xe:
            if (xE + 0x1 < xC) xt[xH] = (xr & 0xf) << 0xc | (xk["charCodeAt"](xE++) & 0x3f) << 0x6 | xk["charCodeAt"](xE++) & 0x3f; else throw new Error("Unfinished UTF-8 octet sequence");
            break;
          case 0xf:
            if (xE + 0x2 < xC) {
              var xZ = ((xr & 0x7) << 0x12 | (xk["charCodeAt"](xE++) & 0x3f) << 0xc | (xk["charCodeAt"](xE++) & 0x3f) << 0x6 | xk["charCodeAt"](xE++) & 0x3f) - 0x10000;
              if (0x0 <= xZ && xZ <= 0xfffff) xt[xH++] = xZ >> 0xa & 0x3ff | 0xd800, xt[xH] = xZ & 0x3ff | 0xdc00; else throw new Error("Character outside valid Unicode range: 0x" + xZ["toString"](0x10));
            } else throw new Error("Unfinished UTF-8 octet sequence");
            break;
          default:
            throw new Error("Bad UTF-8 encoding 0x" + xr["toString"](0x10));
        }
        if (xH >= 0x7fff - 0x1) {
          var xu = xH + 0x1;
          xt["length"] = xu, xM[xM["length"]] = String["fromCharCode"]["apply"](String, xt), xa -= xu, xH = -0x1;
        }
      }
      return xH > 0x0 && (xt["length"] = xH, xM[xM["length"]] = String["fromCharCode"]["apply"](String, xt)), xM["join"]('');
    }

    function Ii(xk, xa) {
      if (xa === undefined || xa === null || xa < 0x0) xa = xk["length"];
      if (xa === 0x0) return '';
      if (/^[\x00-\x7f]*$/["test"](xk) || !/^[\x00-\xff]*$/["test"](xk)) {
        if (xa === xk["length"]) return xk;
        return xk["substr"](0x0, xa);
      }
      return xa < 0x7fff ? Is(xk, xa) : Ix(xk, xa);
    }

    function Iv(xk, xa) {
      if (xk === undefined || xk === null || xk["length"] === 0x0) return xk;
      return xk = II(xk), xa = II(xa), I9(IY(Ij(xk, !![]), IK(Ij(xa, ![]))), ![]);
    }

    function IR(xk, xa) {
      return window["btoa"](Iv(xk, xa));
    }

    function Ie(xk, xa) {
      if (xk === undefined || xk === null || xk["length"] === 0x0) return xk;
      return xa = II(xa), Ii(I9(Ib(Ij(xk, ![]), IK(Ij(xa, ![]))), !![]));
    }

    function Iy(xk, xa) {
      if (xk === undefined || xk === null || xk["length"] === 0x0) return xk;
      return Ie(window["atob"](xk), xa);
    }

    var Ik = {};
    Ik["utf8Encode"] = II, Ik["utf8Decode"] = Ii, Ik["encrypt"] = Iv, Ik["encryptToBase64"] = IR, Ik["decrypt"] = Ie, Ik["decryptFromBase64"] = Iy;
    var Ia = Ik;

    function IM(xk) {
      if (!xk) return '';
      var xa = [];
      return Object["keys"](xk)["forEach"](function (xM) {
        xa["push"](xM + '=' + xk[xM]);
      }), Kv(xa["join"]('&'));
    }

    function It(xk) {
      if (!xk) return '';
      var xa = [];
      return Object["keys"](xk)["sort"]()["forEach"](function (xM) {
        xa["push"](xM + '=' + xk[xM]);
      }), Kv(xa["join"]('&'));
    }

    function IH(xk, xa) {
      if (!xk) return '';
      return Ia["encrypt"](xk, xa);
    }

    var IE = "52a39d693bdd2760", IC = "163,71";

    function Ir(xk) {
      function xa(xr) {
        return function (xZ) {
          function xu(xV, xQ) {
            return (Array(xQ)["join"](0x0) + xV)["slice"](-xQ);
          }

          function xn() {
            for (var xV = 0x0; xV < localStorage["length"]; xV++) {
              var xQ = localStorage["key"](xV);
              xQ["indexOf"]("__dsc__") !== -0x1 && xQ !== xl && localStorage["removeItem"](xQ);
            }
          }

          var xS = new Date(),
            xl = "__dsc__" + (xS["getFullYear"]() - 0x7d0) + xu(xS["getMonth"](), 0x2) + xu(xS["getDate"](), 0x2);
          xn();
          var xh = localStorage["getItem"](xl) || 0x0;
          return localStorage["setItem"](xl, ++xh), '' + xh;
        }();
      }

      xk["body"]["l_d_s_c"] = 43;//xa();

      function xM(xr) {
        return function (xZ) {
          var xu = localStorage["getItem"]("__sc__") || 0x0;
          return localStorage["setItem"]("__sc__", ++xu), '' + xu;
        }();
      }

      xk["body"]["l_s_c"] =43;// xM();

      function xt(xr) {
        return function (xZ) {
          var xu = sessionStorage["getItem"]("__sc__") || 0x0;
          return sessionStorage["setItem"]("__sc__", ++xu), '' + xu;
        }();
      }

      xk["body"]["s_s_c"] = 42;//xt();

      function xH(xr) {
        return function (xZ) {
          return xZ["env"]["versionCode"];
        }(xr);
      }

      xk["body"]["v_c"] = '52a39d693bdd2760';//xH(xk);

      function xE(xr) {
        return function (xZ) {
          return xZ["env"]["jsVersion"];
        }(xr);
      }

      xk["body"]["j_v"] = '243a0f0144';//xE(xk);

      function xC(xr) {
        return function (xZ) {
          return xZ["body"]["request_code"]["substring"](0xf, 0x17);
        }(xr);
      }

      return xk["body"]["3eac9809"] = xC(xk), xk;
    }

    function IZ(xk) {
      function xa(xM) {
        return function (xt) {
          var xH = xt["body"], xE = [];
          for (var xC in xH) {
            xE["push"](xC);
          }
          return xE["sort"]()["reverse"](), xE["map"](function (xr) {
            return xr + '=' + xH[xr];
          })["join"]('&');
        }(xM);
      }

      return xk = xa(xk), xk;
    }

    function Iu(xk) {
      function xa(xC) {
        return function (xr) {
          var xZ = 0x8;

          function xu(xg, xJ) {
            xg[xJ >> 0x5] |= 0x80 << xJ % 0x20, xg[(xJ + 0x40 >>> 0x9 << 0x4) + 0xe] = xJ;
            var xP = 0x67452301, xq = -0x10325477, xX = -0x67452302, xU = 0x10325476;
            for (var xz = 0x0; xz < xg["length"]; xz += 0x10) {
              var xd = xP, xD = xq, xw = xX, xT = xU;
              xP = xS(xP, xq, xX, xU, xg[xz + 0x0], 0x7, -0x28955b88), xU = xS(xU, xP, xq, xX, xg[xz + 0x1], 0xc, -0x173848aa), xX = xS(xX, xU, xP, xq, xg[xz + 0x2], 0x11, 0x242070db), xq = xS(xq, xX, xU, xP, xg[xz + 0x3], 0x16, -0x3e423112), xP = xS(xP, xq, xX, xU, xg[xz + 0x4], 0x7, -0xa83f051), xU = xS(xU, xP, xq, xX, xg[xz + 0x5], 0xc, 0x4787c62a), xX = xS(xX, xU, xP, xq, xg[xz + 0x6], 0x11, -0x57cfb9ed), xq = xS(xq, xX, xU, xP, xg[xz + 0x7], 0x16, -0x2b96aff), xP = xS(xP, xq, xX, xU, xg[xz + 0x8], 0x7, 0x698098d8), xU = xS(xU, xP, xq, xX, xg[xz + 0x9], 0xc, -0x74bb0851), xX = xS(xX, xU, xP, xq, xg[xz + 0xa], 0x11, -0xa44f), xq = xS(xq, xX, xU, xP, xg[xz + 0xb], 0x16, -0x76a32842), xP = xS(xP, xq, xX, xU, xg[xz + 0xc], 0x7, 0x6b901122), xU = xS(xU, xP, xq, xX, xg[xz + 0xd], 0xc, -0x2678e6d), xX = xS(xX, xU, xP, xq, xg[xz + 0xe], 0x11, -0x5986bc72), xq = xS(xq, xX, xU, xP, xg[xz + 0xf], 0x16, 0x49b40821), xP = xl(xP, xq, xX, xU, xg[xz + 0x1], 0x5, -0x9e1da9e), xU = xl(xU, xP, xq, xX, xg[xz + 0x6], 0x9, -0x3fbf4cc0), xX = xl(xX, xU, xP, xq, xg[xz + 0xb], 0xe, 0x265e5a51), xq = xl(xq, xX, xU, xP, xg[xz + 0x0], 0x14, -0x16493856), xP = xl(xP, xq, xX, xU, xg[xz + 0x5], 0x5, -0x29d0efa3), xU = xl(xU, xP, xq, xX, xg[xz + 0xa], 0x9, 0x2441453), xX = xl(xX, xU, xP, xq, xg[xz + 0xf], 0xe, -0x275e197f), xq = xl(xq, xX, xU, xP, xg[xz + 0x4], 0x14, -0x182c0438), xP = xl(xP, xq, xX, xU, xg[xz + 0x9], 0x5, 0x21e1cde6), xU = xl(xU, xP, xq, xX, xg[xz + 0xe], 0x9, -0x3cc8f82a), xX = xl(xX, xU, xP, xq, xg[xz + 0x3], 0xe, -0xb2af279), xq = xl(xq, xX, xU, xP, xg[xz + 0x8], 0x14, 0x455a14ed), xP = xl(xP, xq, xX, xU, xg[xz + 0xd], 0x5, -0x561c16fb), xU = xl(xU, xP, xq, xX, xg[xz + 0x2], 0x9, -0x3105c08), xX = xl(xX, xU, xP, xq, xg[xz + 0x7], 0xe, 0x676f02d9), xq = xl(xq, xX, xU, xP, xg[xz + 0xc], 0x14, -0x72d5b376), xP = xh(xP, xq, xX, xU, xg[xz + 0x5], 0x4, -0x5c6be), xU = xh(xU, xP, xq, xX, xg[xz + 0x8], 0xb, -0x788e097f), xX = xh(xX, xU, xP, xq, xg[xz + 0xb], 0x10, 0x6d9d6122), xq = xh(xq, xX, xU, xP, xg[xz + 0xe], 0x17, -0x21ac7f4), xP = xh(xP, xq, xX, xU, xg[xz + 0x1], 0x4, -0x5b4115bc), xU = xh(xU, xP, xq, xX, xg[xz + 0x4], 0xb, 0x4bdecfa9), xX = xh(xX, xU, xP, xq, xg[xz + 0x7], 0x10, -0x944b4a0), xq = xh(xq, xX, xU, xP, xg[xz + 0xa], 0x17, -0x41404390), xP = xh(xP, xq, xX, xU, xg[xz + 0xd], 0x4, 0x289b7ec6), xU = xh(xU, xP, xq, xX, xg[xz + 0x0], 0xb, -0x155ed806), xX = xh(xX, xU, xP, xq, xg[xz + 0x3], 0x10, -0x2b10cf7b), xq = xh(xq, xX, xU, xP, xg[xz + 0x6], 0x17, 0x4881d05), xP = xh(xP, xq, xX, xU, xg[xz + 0x9], 0x4, -0x262b2fc7), xU = xh(xU, xP, xq, xX, xg[xz + 0xc], 0xb, -0x1924661b), xX = xh(xX, xU, xP, xq, xg[xz + 0xf], 0x10, 0x1fa27cf8), xq = xh(xq, xX, xU, xP, xg[xz + 0x2], 0x17, -0x3b53a99b), xP = xV(xP, xq, xX, xU, xg[xz + 0x0], 0x6, -0xbd6ddbc), xU = xV(xU, xP, xq, xX, xg[xz + 0x7], 0xa, 0x432aff97), xX = xV(xX, xU, xP, xq, xg[xz + 0xe], 0xf, -0x546bdc59), xq = xV(xq, xX, xU, xP, xg[xz + 0x5], 0x15, -0x36c5fc7), xP = xV(xP, xq, xX, xU, xg[xz + 0xc], 0x6, 0x655b59c3), xU = xV(xU, xP, xq, xX, xg[xz + 0x3], 0xa, -0x70f3336e), xX = xV(xX, xU, xP, xq, xg[xz + 0xa], 0xf, -0x100b83), xq = xV(xq, xX, xU, xP, xg[xz + 0x1], 0x15, -0x7a7ba22f), xP = xV(xP, xq, xX, xU, xg[xz + 0x8], 0x6, 0x6fa87e4f), xU = xV(xU, xP, xq, xX, xg[xz + 0xf], 0xa, -0x1d31920), xX = xV(xX, xU, xP, xq, xg[xz + 0x6], 0xf, -0x5cfebcec), xq = xV(xq, xX, xU, xP, xg[xz + 0xd], 0x15, 0x4e0811a1), xP = xV(xP, xq, xX, xU, xg[xz + 0x4], 0x6, -0x8ac817e), xU = xV(xU, xP, xq, xX, xg[xz + 0xb], 0xa, -0x42c50dcb), xX = xV(xX, xU, xP, xq, xg[xz + 0x2], 0xf, 0x2ad7d2bb), xq = xV(xq, xX, xU, xP, xg[xz + 0x9], 0x15, -0x14792c6f), xP = xQ(xP, xd), xq = xQ(xq, xD), xX = xQ(xX, xw), xU = xQ(xU, xT);
            }
            return Array(xP, xq, xX, xU);
          }

          function xn(xg, xJ, xP, xq, xX, xU) {
            return xQ(xL(xQ(xQ(xJ, xg), xQ(xq, xU)), xX), xP);
          }

          function xS(xg, xJ, xP, xq, xX, xU, xz) {
            return xn(xJ & xP | ~xJ & xq, xg, xJ, xX, xU, xz);
          }

          function xl(xg, xJ, xP, xq, xX, xU, xz) {
            return xn(xJ & xq | xP & ~xq, xg, xJ, xX, xU, xz);
          }

          function xh(xg, xJ, xP, xq, xX, xU, xz) {
            return xn(xJ ^ xP ^ xq, xg, xJ, xX, xU, xz);
          }

          function xV(xg, xJ, xP, xq, xX, xU, xz) {
            return xn(xP ^ (xJ | ~xq), xg, xJ, xX, xU, xz);
          }

          function xQ(xg, xJ) {
            var xP = (xg & 0xffff) + (xJ & 0xffff), xq = (xg >> 0x10) + (xJ >> 0x10) + (xP >> 0x10);
            return xq << 0x10 | xP & 0xffff;
          }

          function xL(xg, xJ) {
            return xg << xJ | xg >>> 0x20 - xJ;
          }

          function xB(xg) {
            var xJ = Array(), xP = (0x1 << xZ) - 0x1;
            for (var xq = 0x0; xq < xg["length"] * xZ; xq += xZ) {
              xJ[xq >> 0x5] |= (xg["charCodeAt"](xq / xZ) & xP) << xq % 0x20;
            }
            return xJ;
          }

          function xW(xg) {
            var xJ = "0123456789abcdef", xP = '';
            for (var xq = 0x0; xq < xg["length"] * 0x4; xq++) {
              xP += xJ["charAt"](xg[xq >> 0x2] >> xq % 0x4 * 0x8 + 0x4 & 0xf) + xJ["charAt"](xg[xq >> 0x2] >> xq % 0x4 * 0x8 & 0xf);
            }
            return xP;
          }

          return xW(xu(xB(xr), xr["length"] * xZ));
        }(xC);
      }

      xk = xa(xk);

      function xM(xC) {
        return function (xr) {
          var xZ = 0x8;

          function xu(xX, xU) {
            var xz = (xX & 0xffff) + (xU & 0xffff), xd = (xX >> 0x10) + (xU >> 0x10) + (xz >> 0x10);
            return xd << 0x10 | xz & 0xffff;
          }

          function xn(xX, xU) {
            return xX >>> xU | xX << 0x20 - xU;
          }

          function xS(xX, xU) {
            return xX >>> xU;
          }

          function xl(xX, xU, xz) {
            return xX & xU ^ ~xX & xz;
          }

          function xh(xX, xU, xz) {
            return xX & xU ^ xX & xz ^ xU & xz;
          }

          function xV(xX) {
            return xn(xX, 0x2) ^ xn(xX, 0xd) ^ xn(xX, 0x16);
          }

          function xQ(xX) {
            return xn(xX, 0x6) ^ xn(xX, 0xb) ^ xn(xX, 0x19);
          }

          function xL(xX) {
            return xn(xX, 0x7) ^ xn(xX, 0x12) ^ xS(xX, 0x3);
          }

          function xB(xX) {
            return xn(xX, 0x11) ^ xn(xX, 0x13) ^ xS(xX, 0xa);
          }

          function xW(xX, xU) {
            var xz = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2],
              xd = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19],
              xD = new Array(0x40), xw = void 0x0, xT = void 0x0, xO = void 0x0, xp = void 0x0, xm = void 0x0,
              xF = void 0x0, xG = void 0x0, xN = void 0x0, xo = void 0x0, xA = void 0x0, i0 = void 0x0, i1 = void 0x0;
            xX[xU >> 0x5] |= 0x80 << 0x18 - xU % 0x20, xX[(xU + 0x40 >> 0x9 << 0x4) + 0xf] = xU;
            for (xo = 0x0; xo < xX["length"]; xo += 0x10) {
              xw = xd[0x0], xT = xd[0x1], xO = xd[0x2], xp = xd[0x3], xm = xd[0x4], xF = xd[0x5], xG = xd[0x6], xN = xd[0x7];
              for (xA = 0x0; xA < 0x40; xA++) {
                xA < 0x10 ? xD[xA] = xX[xA + xo] : xD[xA] = xu(xu(xu(xB(xD[xA - 0x2]), xD[xA - 0x7]), xL(xD[xA - 0xf])), xD[xA - 0x10]), i0 = xu(xu(xu(xu(xN, xQ(xm)), xl(xm, xF, xG)), xz[xA]), xD[xA]), i1 = xu(xV(xw), xh(xw, xT, xO)), xN = xG, xG = xF, xF = xm, xm = xu(xp, i0), xp = xO, xO = xT, xT = xw, xw = xu(i0, i1);
              }
              xd[0x0] = xu(xw, xd[0x0]), xd[0x1] = xu(xT, xd[0x1]), xd[0x2] = xu(xO, xd[0x2]), xd[0x3] = xu(xp, xd[0x3]), xd[0x4] = xu(xm, xd[0x4]), xd[0x5] = xu(xF, xd[0x5]), xd[0x6] = xu(xG, xd[0x6]), xd[0x7] = xu(xN, xd[0x7]);
            }
            return xd;
          }

          function xg(xX) {
            var xU = [], xz = (0x1 << xZ) - 0x1;
            for (var xd = 0x0; xd < xX["length"] * xZ; xd += xZ) {
              xU[xd >> 0x5] |= (xX["charCodeAt"](xd / xZ) & xz) << 0x18 - xd % 0x20;
            }
            return xU;
          }

          function xJ(xX) {
            xX = xX["replace"](/\r\n/g, '\x0a');
            var xU = '';
            for (var xz = 0x0; xz < xX["length"]; xz++) {
              var xd = xX["charCodeAt"](xz);
              if (xd < 0x80) xU += String["fromCharCode"](xd); else xd > 0x7f && xd < 0x800 ? (xU += String["fromCharCode"](xd >> 0x6 | 0xc0), xU += String["fromCharCode"](xd & 0x3f | 0x80)) : (xU += String["fromCharCode"](xd >> 0xc | 0xe0), xU += String["fromCharCode"](xd >> 0x6 & 0x3f | 0x80), xU += String["fromCharCode"](xd & 0x3f | 0x80));
            }
            return xU;
          }

          function xP(xX) {
            var xU = "0123456789abcdef", xz = '';
            for (var xd = 0x0; xd < xX["length"] * 0x4; xd++) {
              xz += xU["charAt"](xX[xd >> 0x2] >> (0x3 - xd % 0x4) * 0x8 + 0x4 & 0xf) + xU["charAt"](xX[xd >> 0x2] >> (0x3 - xd % 0x4) * 0x8 & 0xf);
            }
            return xz;
          }

          var xq = xJ(xr);
          return xP(xW(xg(xq), xq["length"] * xZ));
        }(xC);
      }

      xk = xM(xk);

      function xt(xC) {
        return function (xr) {
          var xZ = 0x0;

          function xu(xz) {
            return xS(xn(xl(xz)));
          }

          function xn(xz) {
            return xV(xL(xh(xz), xz["length"] * 0x8));
          }

          function xS(xz) {
            try {
              xZ;
            } catch (xO) {
              xZ = 0x0;
            }
            var xd = xZ ? "0123456789ABCDEF" : "0123456789abcdef", xD = '', xw;
            for (var xT = 0x0; xT < xz["length"]; xT++) {
              xw = xz["charCodeAt"](xT), xD += xd["charAt"](xw >>> 0x4 & 0xf) + xd["charAt"](xw & 0xf);
            }
            return xD;
          }

          function xl(xz) {
            var xd = '', xD = -0x1, xw, xT;
            while (++xD < xz["length"]) {
              xw = xz["charCodeAt"](xD), xT = xD + 0x1 < xz["length"] ? xz["charCodeAt"](xD + 0x1) : 0x0;
              0xd800 <= xw && xw <= 0xdbff && 0xdc00 <= xT && xT <= 0xdfff && (xw = 0x10000 + ((xw & 0x3ff) << 0xa) + (xT & 0x3ff), xD++);
              if (xw <= 0x7f) xd += String["fromCharCode"](xw); else {
                if (xw <= 0x7ff) xd += String["fromCharCode"](0xc0 | xw >>> 0x6 & 0x1f, 0x80 | xw & 0x3f); else {
                  if (xw <= 0xffff) xd += String["fromCharCode"](0xe0 | xw >>> 0xc & 0xf, 0x80 | xw >>> 0x6 & 0x3f, 0x80 | xw & 0x3f); else {
                    if (xw <= 0x1fffff) xd += String["fromCharCode"](0xf0 | xw >>> 0x12 & 0x7, 0x80 | xw >>> 0xc & 0x3f, 0x80 | xw >>> 0x6 & 0x3f, 0x80 | xw & 0x3f);
                  }
                }
              }
            }
            return xd;
          }

          function xh(xz) {
            var xd = Array(xz["length"] >> 0x2);
            for (var xD = 0x0; xD < xd["length"]; xD++) {
              xd[xD] = 0x0;
            }
            for (var xD = 0x0; xD < xz["length"] * 0x8; xD += 0x8) {
              xd[xD >> 0x5] |= (xz["charCodeAt"](xD / 0x8) & 0xff) << 0x18 - xD % 0x20;
            }
            return xd;
          }

          function xV(xz) {
            var xd = '';
            for (var xD = 0x0; xD < xz["length"] * 0x20; xD += 0x8) {
              xd += String["fromCharCode"](xz[xD >> 0x5] >>> 0x18 - xD % 0x20 & 0xff);
            }
            return xd;
          }

          var xQ;

          function xL(xz, xd) {
            xQ == undefined && (xQ = new Array(new xB(0x428a2f98, -0x28d751de), new xB(0x71374491, 0x23ef65cd), new xB(-0x4a3f0431, -0x13b2c4d1), new xB(-0x164a245b, -0x7e762444), new xB(0x3956c25b, -0xcb74ac8), new xB(0x59f111f1, -0x49fa2fe7), new xB(-0x6dc07d5c, -0x50e6b065), new xB(-0x54e3a12b, -0x25927ee8), new xB(-0x27f85568, -0x5cfcfdbe), new xB(0x12835b01, 0x45706fbe), new xB(0x243185be, 0x4ee4b28c), new xB(0x550c7dc3, -0x2a004b1e), new xB(0x72be5d74, -0xd847691), new xB(-0x7f214e02, 0x3b1696b1), new xB(-0x6423f959, 0x25c71235), new xB(-0x3e640e8c, -0x3096d96c), new xB(-0x1b64963f, -0x610eb52e), new xB(-0x1041b87a, 0x384f25e3), new xB(0xfc19dc6, -0x74732a4b), new xB(0x240ca1cc, 0x77ac9c65), new xB(0x2de92c6f, 0x592b0275), new xB(0x4a7484aa, 0x6ea6e483), new xB(0x5cb0a9dc, -0x42be042c), new xB(0x76f988da, -0x7ceeac4b), new xB(-0x67c1aeae, -0x11992055), new xB(-0x57ce3993, 0x2db43210), new xB(-0x4ffcd838, -0x6704dec1), new xB(-0x40a68039, -0x4110f11c), new xB(-0x391ff40d, 0x3da88fc2), new xB(-0x2a586eb9, -0x6cf558db), new xB(0x6ca6351, -0x1ffc7d91), new xB(0x14292967, 0xa0e6e70), new xB(0x27b70a85, 0x46d22ffc), new xB(0x2e1b2138, 0x5c26c926), new xB(0x4d2c6dfc, 0x5ac42aed), new xB(0x53380d13, -0x626a4c21), new xB(0x650a7354, -0x74509c22), new xB(0x766a0abb, 0x3c77b2a8), new xB(-0x7e3d36d2, 0x47edaee6), new xB(-0x6d8dd37b, 0x1482353b), new xB(-0x5d40175f, 0x4cf10364), new xB(-0x57e599b5, -0x43bdcfff), new xB(-0x3db47490, -0x2f07686f), new xB(-0x3893ae5d, 0x654be30), new xB(-0x2e6d17e7, -0x2910ade8), new xB(-0x2966f9dc, 0x5565a910), new xB(-0xbf1ca7b, 0x5771202a), new xB(0x106aa070, 0x32bbd1b8), new xB(0x19a4c116, -0x472d2f38), new xB(0x1e376c08, 0x5141ab53), new xB(0x2748774c, -0x20711467), new xB(0x34b0bcb5, -0x1e64b758), new xB(0x391c0cb3, -0x3a36a59d), new xB(0x4ed8aa4a, -0x1cbe7535), new xB(0x5b9cca4f, 0x7763e373), new xB(0x682e6ff3, -0x294d475d), new xB(0x748f82ee, 0x5defb2fc), new xB(0x78a5636f, 0x43172f60), new xB(-0x7b3787ec, -0x5e0f548e), new xB(-0x7338fdf8, 0x1a6439ec), new xB(-0x6f410006, 0x23631e28), new xB(-0x5baf9315, -0x217d4217), new xB(-0x41065c09, -0x4d3986eb), new xB(-0x398e870e, -0x1c8dacd5), new xB(-0x35d8c132, -0x15d99e64), new xB(-0x2e794739, 0x21c0c207), new xB(-0x1525822a, -0x321f14e2), new xB(-0xa82b081, -0x11912e88), new xB(0x6f067aa, 0x72176fba), new xB(0xa637dc5, -0x5d37675a), new xB(0x113f9804, -0x4106f252), new xB(0x1b710b35, 0x131c471b), new xB(0x28db77f5, 0x23047d84), new xB(0x32caab7b, 0x40c72493), new xB(0x3c9ebe0a, 0x15c9bebc), new xB(0x431d67c4, -0x63eff2b4), new xB(0x4cc5d4be, -0x34c1bd4a), new xB(0x597f299c, -0x39a81d6), new xB(0x5fcb6fab, 0x3ad6faec), new xB(0x6c44198c, 0x4a475817)));
            var xD = new Array(new xB(0x6a09e667, -0xc4336f8), new xB(-0x4498517b, -0x7b3558c5), new xB(0x3c6ef372, -0x16b07d5), new xB(-0x5ab00ac6, 0x5f1d36f1), new xB(0x510e527f, -0x52197d2f), new xB(-0x64fa9774, 0x2b3e6c1f), new xB(0x1f83d9ab, -0x4be4295), new xB(0x5be0cd19, 0x137e2179)),
              xw = new xB(0x0, 0x0), xT = new xB(0x0, 0x0), xO = new xB(0x0, 0x0), xp = new xB(0x0, 0x0),
              xm = new xB(0x0, 0x0), xF = new xB(0x0, 0x0), xG = new xB(0x0, 0x0), xN = new xB(0x0, 0x0),
              xo = new xB(0x0, 0x0), xA = new xB(0x0, 0x0), i0 = new xB(0x0, 0x0), i1 = new xB(0x0, 0x0),
              i2 = new xB(0x0, 0x0), i3 = new xB(0x0, 0x0), i4 = new xB(0x0, 0x0), i5 = new xB(0x0, 0x0),
              i6 = new xB(0x0, 0x0), i7, i8, i9 = new Array(0x50);
            for (i8 = 0x0; i8 < 0x50; i8++) {
              i9[i8] = new xB(0x0, 0x0);
            }
            xz[xd >> 0x5] |= 0x80 << 0x18 - (xd & 0x1f), xz[(xd + 0x80 >> 0xa << 0x5) + 0x1f] = xd;
            for (i8 = 0x0; i8 < xz["length"]; i8 += 0x20) {
              xW(xO, xD[0x0]), xW(xp, xD[0x1]), xW(xm, xD[0x2]), xW(xF, xD[0x3]), xW(xG, xD[0x4]), xW(xN, xD[0x5]), xW(xo, xD[0x6]), xW(xA, xD[0x7]);
              for (i7 = 0x0; i7 < 0x10; i7++) {
                i9[i7]['h'] = xz[i8 + 0x2 * i7], i9[i7]['l'] = xz[i8 + 0x2 * i7 + 0x1];
              }
              for (i7 = 0x10; i7 < 0x50; i7++) {
                xg(i4, i9[i7 - 0x2], 0x13), xJ(i5, i9[i7 - 0x2], 0x1d), xP(i6, i9[i7 - 0x2], 0x6), i1['l'] = i4['l'] ^ i5['l'] ^ i6['l'], i1['h'] = i4['h'] ^ i5['h'] ^ i6['h'], xg(i4, i9[i7 - 0xf], 0x1), xg(i5, i9[i7 - 0xf], 0x8), xP(i6, i9[i7 - 0xf], 0x7), i0['l'] = i4['l'] ^ i5['l'] ^ i6['l'], i0['h'] = i4['h'] ^ i5['h'] ^ i6['h'], xX(i9[i7], i1, i9[i7 - 0x7], i0, i9[i7 - 0x10]);
              }
              for (i7 = 0x0; i7 < 0x50; i7++) {
                i2['l'] = xG['l'] & xN['l'] ^ ~xG['l'] & xo['l'], i2['h'] = xG['h'] & xN['h'] ^ ~xG['h'] & xo['h'], xg(i4, xG, 0xe), xg(i5, xG, 0x12), xJ(i6, xG, 0x9), i1['l'] = i4['l'] ^ i5['l'] ^ i6['l'], i1['h'] = i4['h'] ^ i5['h'] ^ i6['h'], xg(i4, xO, 0x1c), xJ(i5, xO, 0x2), xJ(i6, xO, 0x7), i0['l'] = i4['l'] ^ i5['l'] ^ i6['l'], i0['h'] = i4['h'] ^ i5['h'] ^ i6['h'], i3['l'] = xO['l'] & xp['l'] ^ xO['l'] & xm['l'] ^ xp['l'] & xm['l'], i3['h'] = xO['h'] & xp['h'] ^ xO['h'] & xm['h'] ^ xp['h'] & xm['h'], xU(xw, xA, i1, i2, xQ[i7], i9[i7]), xq(xT, i0, i3), xW(xA, xo), xW(xo, xN), xW(xN, xG), xq(xG, xF, xw), xW(xF, xm), xW(xm, xp), xW(xp, xO), xq(xO, xw, xT);
              }
              xq(xD[0x0], xD[0x0], xO), xq(xD[0x1], xD[0x1], xp), xq(xD[0x2], xD[0x2], xm), xq(xD[0x3], xD[0x3], xF), xq(xD[0x4], xD[0x4], xG), xq(xD[0x5], xD[0x5], xN), xq(xD[0x6], xD[0x6], xo), xq(xD[0x7], xD[0x7], xA);
            }
            var ij = new Array(0x10);
            for (i8 = 0x0; i8 < 0x8; i8++) {
              ij[0x2 * i8] = xD[i8]['h'], ij[0x2 * i8 + 0x1] = xD[i8]['l'];
            }
            return ij;
          }

          function xB(xz, xd) {
            this['h'] = xz, this['l'] = xd;
          }

          function xW(xz, xd) {
            xz['h'] = xd['h'], xz['l'] = xd['l'];
          }

          function xg(xz, xd, xD) {
            xz['l'] = xd['l'] >>> xD | xd['h'] << 0x20 - xD, xz['h'] = xd['h'] >>> xD | xd['l'] << 0x20 - xD;
          }

          function xJ(xz, xd, xD) {
            xz['l'] = xd['h'] >>> xD | xd['l'] << 0x20 - xD, xz['h'] = xd['l'] >>> xD | xd['h'] << 0x20 - xD;
          }

          function xP(xz, xd, xD) {
            xz['l'] = xd['l'] >>> xD | xd['h'] << 0x20 - xD, xz['h'] = xd['h'] >>> xD;
          }

          function xq(xz, xd, xD) {
            var xw = (xd['l'] & 0xffff) + (xD['l'] & 0xffff),
              xT = (xd['l'] >>> 0x10) + (xD['l'] >>> 0x10) + (xw >>> 0x10),
              xO = (xd['h'] & 0xffff) + (xD['h'] & 0xffff) + (xT >>> 0x10),
              xp = (xd['h'] >>> 0x10) + (xD['h'] >>> 0x10) + (xO >>> 0x10);
            xz['l'] = xw & 0xffff | xT << 0x10, xz['h'] = xO & 0xffff | xp << 0x10;
          }

          function xX(xz, xd, xD, xw, xT) {
            var xO = (xd['l'] & 0xffff) + (xD['l'] & 0xffff) + (xw['l'] & 0xffff) + (xT['l'] & 0xffff),
              xp = (xd['l'] >>> 0x10) + (xD['l'] >>> 0x10) + (xw['l'] >>> 0x10) + (xT['l'] >>> 0x10) + (xO >>> 0x10),
              xm = (xd['h'] & 0xffff) + (xD['h'] & 0xffff) + (xw['h'] & 0xffff) + (xT['h'] & 0xffff) + (xp >>> 0x10),
              xF = (xd['h'] >>> 0x10) + (xD['h'] >>> 0x10) + (xw['h'] >>> 0x10) + (xT['h'] >>> 0x10) + (xm >>> 0x10);
            xz['l'] = xO & 0xffff | xp << 0x10, xz['h'] = xm & 0xffff | xF << 0x10;
          }

          function xU(xz, xd, xD, xw, xT, xO) {
            var xp = (xd['l'] & 0xffff) + (xD['l'] & 0xffff) + (xw['l'] & 0xffff) + (xT['l'] & 0xffff) + (xO['l'] & 0xffff),
              xm = (xd['l'] >>> 0x10) + (xD['l'] >>> 0x10) + (xw['l'] >>> 0x10) + (xT['l'] >>> 0x10) + (xO['l'] >>> 0x10) + (xp >>> 0x10),
              xF = (xd['h'] & 0xffff) + (xD['h'] & 0xffff) + (xw['h'] & 0xffff) + (xT['h'] & 0xffff) + (xO['h'] & 0xffff) + (xm >>> 0x10),
              xG = (xd['h'] >>> 0x10) + (xD['h'] >>> 0x10) + (xw['h'] >>> 0x10) + (xT['h'] >>> 0x10) + (xO['h'] >>> 0x10) + (xF >>> 0x10);
            xz['l'] = xp & 0xffff | xm << 0x10, xz['h'] = xF & 0xffff | xG << 0x10;
          }

          return xu(xr)["toLowerCase"]();
        }(xC);
      }

      xk = xt(xk);

      function xH(xC) {
        return function (xr) {
          var xZ = 0x0;

          function xu(xz) {
            return xS(xn(xl(xz)));
          }

          function xn(xz) {
            return xV(xL(xh(xz), xz["length"] * 0x8));
          }

          function xS(xz) {
            try {
              xZ;
            } catch (xO) {
              xZ = 0x0;
            }
            var xd = xZ ? "0123456789ABCDEF" : "0123456789abcdef", xD = '', xw;
            for (var xT = 0x0; xT < xz["length"]; xT++) {
              xw = xz["charCodeAt"](xT), xD += xd["charAt"](xw >>> 0x4 & 0xf) + xd["charAt"](xw & 0xf);
            }
            return xD;
          }

          function xl(xz) {
            var xd = '', xD = -0x1, xw, xT;
            while (++xD < xz["length"]) {
              xw = xz["charCodeAt"](xD), xT = xD + 0x1 < xz["length"] ? xz["charCodeAt"](xD + 0x1) : 0x0;
              0xd800 <= xw && xw <= 0xdbff && 0xdc00 <= xT && xT <= 0xdfff && (xw = 0x10000 + ((xw & 0x3ff) << 0xa) + (xT & 0x3ff), xD++);
              if (xw <= 0x7f) xd += String["fromCharCode"](xw); else {
                if (xw <= 0x7ff) xd += String["fromCharCode"](0xc0 | xw >>> 0x6 & 0x1f, 0x80 | xw & 0x3f); else {
                  if (xw <= 0xffff) xd += String["fromCharCode"](0xe0 | xw >>> 0xc & 0xf, 0x80 | xw >>> 0x6 & 0x3f, 0x80 | xw & 0x3f); else {
                    if (xw <= 0x1fffff) xd += String["fromCharCode"](0xf0 | xw >>> 0x12 & 0x7, 0x80 | xw >>> 0xc & 0x3f, 0x80 | xw >>> 0x6 & 0x3f, 0x80 | xw & 0x3f);
                  }
                }
              }
            }
            return xd;
          }

          function xh(xz) {
            var xd = Array(xz["length"] >> 0x2);
            for (var xD = 0x0; xD < xd["length"]; xD++) {
              xd[xD] = 0x0;
            }
            for (var xD = 0x0; xD < xz["length"] * 0x8; xD += 0x8) {
              xd[xD >> 0x5] |= (xz["charCodeAt"](xD / 0x8) & 0xff) << 0x18 - xD % 0x20;
            }
            return xd;
          }

          function xV(xz) {
            var xd = '';
            for (var xD = 0x0; xD < xz["length"] * 0x20; xD += 0x8) {
              xd += String["fromCharCode"](xz[xD >> 0x5] >>> 0x18 - xD % 0x20 & 0xff);
            }
            return xd;
          }

          var xQ;

          function xL(xz, xd) {
            xQ == undefined && (xQ = new Array(new xB(0x428a2f98, -0x28d751de), new xB(0x71374491, 0x23ef65cd), new xB(-0x4a3f0431, -0x13b2c4d1), new xB(-0x164a245b, -0x7e762444), new xB(0x3956c25b, -0xcb74ac8), new xB(0x59f111f1, -0x49fa2fe7), new xB(-0x6dc07d5c, -0x50e6b065), new xB(-0x54e3a12b, -0x25927ee8), new xB(-0x27f85568, -0x5cfcfdbe), new xB(0x12835b01, 0x45706fbe), new xB(0x243185be, 0x4ee4b28c), new xB(0x550c7dc3, -0x2a004b1e), new xB(0x72be5d74, -0xd847691), new xB(-0x7f214e02, 0x3b1696b1), new xB(-0x6423f959, 0x25c71235), new xB(-0x3e640e8c, -0x3096d96c), new xB(-0x1b64963f, -0x610eb52e), new xB(-0x1041b87a, 0x384f25e3), new xB(0xfc19dc6, -0x74732a4b), new xB(0x240ca1cc, 0x77ac9c65), new xB(0x2de92c6f, 0x592b0275), new xB(0x4a7484aa, 0x6ea6e483), new xB(0x5cb0a9dc, -0x42be042c), new xB(0x76f988da, -0x7ceeac4b), new xB(-0x67c1aeae, -0x11992055), new xB(-0x57ce3993, 0x2db43210), new xB(-0x4ffcd838, -0x6704dec1), new xB(-0x40a68039, -0x4110f11c), new xB(-0x391ff40d, 0x3da88fc2), new xB(-0x2a586eb9, -0x6cf558db), new xB(0x6ca6351, -0x1ffc7d91), new xB(0x14292967, 0xa0e6e70), new xB(0x27b70a85, 0x46d22ffc), new xB(0x2e1b2138, 0x5c26c926), new xB(0x4d2c6dfc, 0x5ac42aed), new xB(0x53380d13, -0x626a4c21), new xB(0x650a7354, -0x74509c22), new xB(0x766a0abb, 0x3c77b2a8), new xB(-0x7e3d36d2, 0x47edaee6), new xB(-0x6d8dd37b, 0x1482353b), new xB(-0x5d40175f, 0x4cf10364), new xB(-0x57e599b5, -0x43bdcfff), new xB(-0x3db47490, -0x2f07686f), new xB(-0x3893ae5d, 0x654be30), new xB(-0x2e6d17e7, -0x2910ade8), new xB(-0x2966f9dc, 0x5565a910), new xB(-0xbf1ca7b, 0x5771202a), new xB(0x106aa070, 0x32bbd1b8), new xB(0x19a4c116, -0x472d2f38), new xB(0x1e376c08, 0x5141ab53), new xB(0x2748774c, -0x20711467), new xB(0x34b0bcb5, -0x1e64b758), new xB(0x391c0cb3, -0x3a36a59d), new xB(0x4ed8aa4a, -0x1cbe7535), new xB(0x5b9cca4f, 0x7763e373), new xB(0x682e6ff3, -0x294d475d), new xB(0x748f82ee, 0x5defb2fc), new xB(0x78a5636f, 0x43172f60), new xB(-0x7b3787ec, -0x5e0f548e), new xB(-0x7338fdf8, 0x1a6439ec), new xB(-0x6f410006, 0x23631e28), new xB(-0x5baf9315, -0x217d4217), new xB(-0x41065c09, -0x4d3986eb), new xB(-0x398e870e, -0x1c8dacd5), new xB(-0x35d8c132, -0x15d99e64), new xB(-0x2e794739, 0x21c0c207), new xB(-0x1525822a, -0x321f14e2), new xB(-0xa82b081, -0x11912e88), new xB(0x6f067aa, 0x72176fba), new xB(0xa637dc5, -0x5d37675a), new xB(0x113f9804, -0x4106f252), new xB(0x1b710b35, 0x131c471b), new xB(0x28db77f5, 0x23047d84), new xB(0x32caab7b, 0x40c72493), new xB(0x3c9ebe0a, 0x15c9bebc), new xB(0x431d67c4, -0x63eff2b4), new xB(0x4cc5d4be, -0x34c1bd4a), new xB(0x597f299c, -0x39a81d6), new xB(0x5fcb6fab, 0x3ad6faec), new xB(0x6c44198c, 0x4a475817)));
            var xD = new Array(new xB(0x6a09e667, -0xc4336f8), new xB(-0x4498517b, -0x7b3558c5), new xB(0x3c6ef372, -0x16b07d5), new xB(-0x5ab00ac6, 0x5f1d36f1), new xB(0x510e527f, -0x52197d2f), new xB(-0x64fa9774, 0x2b3e6c1f), new xB(0x1f83d9ab, -0x4be4295), new xB(0x5be0cd19, 0x137e2179)),
              xw = new xB(0x0, 0x0), xT = new xB(0x0, 0x0), xO = new xB(0x0, 0x0), xp = new xB(0x0, 0x0),
              xm = new xB(0x0, 0x0), xF = new xB(0x0, 0x0), xG = new xB(0x0, 0x0), xN = new xB(0x0, 0x0),
              xo = new xB(0x0, 0x0), xA = new xB(0x0, 0x0), i0 = new xB(0x0, 0x0), i1 = new xB(0x0, 0x0),
              i2 = new xB(0x0, 0x0), i3 = new xB(0x0, 0x0), i4 = new xB(0x0, 0x0), i5 = new xB(0x0, 0x0),
              i6 = new xB(0x0, 0x0), i7, i8, i9 = new Array(0x50);
            for (i8 = 0x0; i8 < 0x50; i8++) {
              i9[i8] = new xB(0x0, 0x0);
            }
            xz[xd >> 0x5] |= 0x80 << 0x18 - (xd & 0x1f), xz[(xd + 0x80 >> 0xa << 0x5) + 0x1f] = xd;
            for (i8 = 0x0; i8 < xz["length"]; i8 += 0x20) {
              xW(xO, xD[0x0]), xW(xp, xD[0x1]), xW(xm, xD[0x2]), xW(xF, xD[0x3]), xW(xG, xD[0x4]), xW(xN, xD[0x5]), xW(xo, xD[0x6]), xW(xA, xD[0x7]);
              for (i7 = 0x0; i7 < 0x10; i7++) {
                i9[i7]['h'] = xz[i8 + 0x2 * i7], i9[i7]['l'] = xz[i8 + 0x2 * i7 + 0x1];
              }
              for (i7 = 0x10; i7 < 0x50; i7++) {
                xg(i4, i9[i7 - 0x2], 0x13), xJ(i5, i9[i7 - 0x2], 0x1d), xP(i6, i9[i7 - 0x2], 0x6), i1['l'] = i4['l'] ^ i5['l'] ^ i6['l'], i1['h'] = i4['h'] ^ i5['h'] ^ i6['h'], xg(i4, i9[i7 - 0xf], 0x1), xg(i5, i9[i7 - 0xf], 0x8), xP(i6, i9[i7 - 0xf], 0x7), i0['l'] = i4['l'] ^ i5['l'] ^ i6['l'], i0['h'] = i4['h'] ^ i5['h'] ^ i6['h'], xX(i9[i7], i1, i9[i7 - 0x7], i0, i9[i7 - 0x10]);
              }
              for (i7 = 0x0; i7 < 0x50; i7++) {
                i2['l'] = xG['l'] & xN['l'] ^ ~xG['l'] & xo['l'], i2['h'] = xG['h'] & xN['h'] ^ ~xG['h'] & xo['h'], xg(i4, xG, 0xe), xg(i5, xG, 0x12), xJ(i6, xG, 0x9), i1['l'] = i4['l'] ^ i5['l'] ^ i6['l'], i1['h'] = i4['h'] ^ i5['h'] ^ i6['h'], xg(i4, xO, 0x1c), xJ(i5, xO, 0x2), xJ(i6, xO, 0x7), i0['l'] = i4['l'] ^ i5['l'] ^ i6['l'], i0['h'] = i4['h'] ^ i5['h'] ^ i6['h'], i3['l'] = xO['l'] & xp['l'] ^ xO['l'] & xm['l'] ^ xp['l'] & xm['l'], i3['h'] = xO['h'] & xp['h'] ^ xO['h'] & xm['h'] ^ xp['h'] & xm['h'], xU(xw, xA, i1, i2, xQ[i7], i9[i7]), xq(xT, i0, i3), xW(xA, xo), xW(xo, xN), xW(xN, xG), xq(xG, xF, xw), xW(xF, xm), xW(xm, xp), xW(xp, xO), xq(xO, xw, xT);
              }
              xq(xD[0x0], xD[0x0], xO), xq(xD[0x1], xD[0x1], xp), xq(xD[0x2], xD[0x2], xm), xq(xD[0x3], xD[0x3], xF), xq(xD[0x4], xD[0x4], xG), xq(xD[0x5], xD[0x5], xN), xq(xD[0x6], xD[0x6], xo), xq(xD[0x7], xD[0x7], xA);
            }
            var ij = new Array(0x10);
            for (i8 = 0x0; i8 < 0x8; i8++) {
              ij[0x2 * i8] = xD[i8]['h'], ij[0x2 * i8 + 0x1] = xD[i8]['l'];
            }
            return ij;
          }

          function xB(xz, xd) {
            this['h'] = xz, this['l'] = xd;
          }

          function xW(xz, xd) {
            xz['h'] = xd['h'], xz['l'] = xd['l'];
          }

          function xg(xz, xd, xD) {
            xz['l'] = xd['l'] >>> xD | xd['h'] << 0x20 - xD, xz['h'] = xd['h'] >>> xD | xd['l'] << 0x20 - xD;
          }

          function xJ(xz, xd, xD) {
            xz['l'] = xd['h'] >>> xD | xd['l'] << 0x20 - xD, xz['h'] = xd['l'] >>> xD | xd['h'] << 0x20 - xD;
          }

          function xP(xz, xd, xD) {
            xz['l'] = xd['l'] >>> xD | xd['h'] << 0x20 - xD, xz['h'] = xd['h'] >>> xD;
          }

          function xq(xz, xd, xD) {
            var xw = (xd['l'] & 0xffff) + (xD['l'] & 0xffff),
              xT = (xd['l'] >>> 0x10) + (xD['l'] >>> 0x10) + (xw >>> 0x10),
              xO = (xd['h'] & 0xffff) + (xD['h'] & 0xffff) + (xT >>> 0x10),
              xp = (xd['h'] >>> 0x10) + (xD['h'] >>> 0x10) + (xO >>> 0x10);
            xz['l'] = xw & 0xffff | xT << 0x10, xz['h'] = xO & 0xffff | xp << 0x10;
          }

          function xX(xz, xd, xD, xw, xT) {
            var xO = (xd['l'] & 0xffff) + (xD['l'] & 0xffff) + (xw['l'] & 0xffff) + (xT['l'] & 0xffff),
              xp = (xd['l'] >>> 0x10) + (xD['l'] >>> 0x10) + (xw['l'] >>> 0x10) + (xT['l'] >>> 0x10) + (xO >>> 0x10),
              xm = (xd['h'] & 0xffff) + (xD['h'] & 0xffff) + (xw['h'] & 0xffff) + (xT['h'] & 0xffff) + (xp >>> 0x10),
              xF = (xd['h'] >>> 0x10) + (xD['h'] >>> 0x10) + (xw['h'] >>> 0x10) + (xT['h'] >>> 0x10) + (xm >>> 0x10);
            xz['l'] = xO & 0xffff | xp << 0x10, xz['h'] = xm & 0xffff | xF << 0x10;
          }

          function xU(xz, xd, xD, xw, xT, xO) {
            var xp = (xd['l'] & 0xffff) + (xD['l'] & 0xffff) + (xw['l'] & 0xffff) + (xT['l'] & 0xffff) + (xO['l'] & 0xffff),
              xm = (xd['l'] >>> 0x10) + (xD['l'] >>> 0x10) + (xw['l'] >>> 0x10) + (xT['l'] >>> 0x10) + (xO['l'] >>> 0x10) + (xp >>> 0x10),
              xF = (xd['h'] & 0xffff) + (xD['h'] & 0xffff) + (xw['h'] & 0xffff) + (xT['h'] & 0xffff) + (xO['h'] & 0xffff) + (xm >>> 0x10),
              xG = (xd['h'] >>> 0x10) + (xD['h'] >>> 0x10) + (xw['h'] >>> 0x10) + (xT['h'] >>> 0x10) + (xO['h'] >>> 0x10) + (xF >>> 0x10);
            xz['l'] = xp & 0xffff | xm << 0x10, xz['h'] = xF & 0xffff | xG << 0x10;
          }

          return xu(xr)["toLowerCase"]();
        }(xC);
      }

      xk = xH(xk);

      function xE(xC) {
        return function (xr) {
          function xZ(xL) {
            return xQ(xu(xV(xL)));
          }

          function xu(xL) {
            var xB = xL, xW = Array(0x50), xg = 0x67452301, xJ = -0x10325477, xP = -0x67452302, xq = 0x10325476,
              xX = -0x3c2d1e10;
            for (var xU = 0x0; xU < xB["length"]; xU += 0x10) {
              var xz = xg, xd = xJ, xD = xP, xw = xq, xT = xX;
              for (var xO = 0x0; xO < 0x50; xO++) {
                if (xO < 0x10) xW[xO] = xB[xU + xO]; else xW[xO] = xh(xW[xO - 0x3] ^ xW[xO - 0x8] ^ xW[xO - 0xe] ^ xW[xO - 0x10], 0x1);
                var xp = xl(xl(xh(xg, 0x5), xn(xO, xJ, xP, xq)), xl(xl(xX, xW[xO]), xS(xO)));
                xX = xq, xq = xP, xP = xh(xJ, 0x1e), xJ = xg, xg = xp;
              }
              xg = xl(xg, xz), xJ = xl(xJ, xd), xP = xl(xP, xD), xq = xl(xq, xw), xX = xl(xX, xT);
            }
            return new Array(xg, xJ, xP, xq, xX);
          }

          function xn(xL, xB, xW, xg) {
            if (xL < 0x14) return xB & xW | ~xB & xg;
            if (xL < 0x28) return xB ^ xW ^ xg;
            if (xL < 0x3c) return xB & xW | xB & xg | xW & xg;
            return xB ^ xW ^ xg;
          }

          function xS(xL) {
            return xL < 0x14 ? 0x5a827999 : xL < 0x28 ? 0x6ed9eba1 : xL < 0x3c ? -0x70e44324 : -0x359d3e2a;
          }

          function xl(xL, xB) {
            var xW = (xL & 0xffff) + (xB & 0xffff), xg = (xL >> 0x10) + (xB >> 0x10) + (xW >> 0x10);
            return xg << 0x10 | xW & 0xffff;
          }

          function xh(xL, xB) {
            return xL << xB | xL >>> 0x20 - xB;
          }

          function xV(xL) {
            var xB = (xL["length"] + 0x8 >> 0x6) + 0x1, xW = new Array(xB * 0x10);
            for (var xg = 0x0; xg < xB * 0x10; xg++) {
              xW[xg] = 0x0;
            }
            for (xg = 0x0; xg < xL["length"]; xg++) {
              xW[xg >> 0x2] |= xL["charCodeAt"](xg) << 0x18 - (xg & 0x3) * 0x8;
            }
            return xW[xg >> 0x2] |= 0x80 << 0x18 - (xg & 0x3) * 0x8, xW[xB * 0x10 - 0x1] = xL["length"] * 0x8, xW;
          }

          function xQ(xL) {
            var xB = "0123456789abcdef", xW = '';
            for (var xg = 0x0; xg < xL["length"] * 0x4; xg++) {
              xW += xB["charAt"](xL[xg >> 0x2] >> (0x3 - xg % 0x4) * 0x8 + 0x4 & 0xf) + xB["charAt"](xL[xg >> 0x2] >> (0x3 - xg % 0x4) * 0x8 & 0xf);
            }
            return xW;
          }

          return xZ(xr);
        }(xC);
      }

      return xk = xE(xk), xk;
    }

    var In = bT, IS = '';

    function Il(xk) {
      var xa,
        xM = /mobile|iPhone|Android|htc|Lenovo|huawei/i["test"](window["navigator"]["userAgent"]),
        xt = '', xH = '', xE = String(xk), xC = xM ? 'i' : 'd';
      if ((xa = window["seed"]) === null || xa === void 0x0 ? void 0x0 : xa["config"]) try {
        var xr = window["seed"]["config"], xZ = xr["yodaVersion"],
          xu = xr["verifyMethodVersion"], xn = xr["riskLevelInfo"], xS = xr["isMobile"];
        xS !== undefined && (xC = xS ? 'i' : 'd');
        var xl = JSON["parse"](xn)[xE], xh = JSON["parse"](xl)["name"],
          xV = JSON["parse"](xu), xQ = JSON["parse"](xZ),
          xL = JSON["parse"](xV[xh]);
        xQ && (xt = xQ[xC]), xV && (xH = xL[xC]);
      } catch (xW) {
        console["log"](xW);
      }
      var xB = {};
      return xB["YODA_VERSION"] = xt, xB["MODULE_VERSION"] = xH, xB["RISK_LEVEL"] = xE, xB["PLATFORM"] = xC, xB;
    }

    function Ih(xk) {
      var xa = [];
      for (var xM in xk) {
        xk["hasOwnProperty"](xM) && xa["push"](encodeURIComponent(xM) + '=' + encodeURIComponent(xk[xM]));
      }
      return xa["join"]('&');
    }

    function IV(xk, xa, xM, xt) {
      return K9(this, void 0x0, void 0x0, function () {
        var xH;
        return Kj(this, function (xE) {
          return xH = "facespeech", xt = xt || {}, [0x2, new Promise(function (xC, xr) {
            var xZ = Date["now"](), xu = new XMLHttpRequest();
            if ("withCredentials" in xu) {
              xu["open"](xa, xk, !![]);
              if (xt) for (var xn in xt) {
                xt["hasOwnProperty"](xn) && xu["setRequestHeader"](xn, xt[xn]);
              }
              if (window["seed"] && window["seed"]["config"] && window["seed"]["config"]["language"]) {
                IS = window["seed"]["config"]["language"], In = bo(IS);
                var xS = I7(IS);
                xu["setRequestHeader"]("yoda-language", '' + xS);
              }
              xk["indexOf"](xH) !== -0x1 ? xu["timeout"] = 0xc350 : xu["timeout"] = 0x2710, xu["onload"] = function () {
                if (xu["readyState"] === 0x4) {
                  if (xu["status"] >= 0xc8 && xu["status"] < 0x12c) {
                    if (xu["response"] && xu["response"] !== "null") {
                      var xl = JSON["parse"](xu["response"]);
                      window["Yoda"] && window["Yoda"]["CAT"] && window["Yoda"]["CAT"]["postBatch"](xk, 0x0, xu["response"]["length"], Date["now"]() - xZ, "200|" + (xl["status"] | 0x1), "ajax"), xC(xl);
                    } else {
                      if (xu["response"] === "null") {
                        window["Yoda"]["CAT"]["sendLog"](xk, "ajaxError", "request_null", xu["response"], "error");
                        var xh = {};
                        xh["code"] = bz["RISK_DEFAULT_ERROR"], xh["message"] = "请求数据返回异常";
                        var xV = {};
                        xV["status"] = 0x0, xV["error"] = xh, xC(xV);
                      } else xC();
                    }
                  } else window["Yoda"]["CAT"]["postBatch"](xk, 0x0, 0x0, Date["now"]() - xZ, xu["status"] + '|' + 0x0, "ajax"), window["Yoda"]["CAT"]["sendLog"](xk, "ajaxError", "request_status", "当前请求状态" + xu["status"], "error"), IP(xu["status"], xC);
                }
              }, xu["ontimeout"] = function () {
                window["Yoda"]["CAT"]["postBatch"](xk, 0x0, 0x0, Date["now"]() - xZ, xu["status"] + '|' + 0x0, "ajax"), window["Yoda"]["CAT"]["sendLog"](xk, "ajaxError", "request_timeout", '耗时' + (Date["now"]() - xZ), "error");
                var xl = {};
                xl["code"] = bT["NETWORK_TIMEOUT_CODE"], xl["message"] = In["NETWORK_TIMEOUT_TIP"];
                var xh = {};
                xh["status"] = 0x0, xh["error"] = xl, xC(xh);
              }, xu["onerror"] = function (xl) {
                window["Yoda"]["CAT"]["postBatch"](xk, 0x0, 0x0, Date["now"]() - xZ, xu["status"] + '|' + 0x0, "ajax"), window["Yoda"]["CAT"]["sendLog"](xk, "ajaxError", "request_" + xl["message"], '耗时' + (Date["now"]() - xZ) + ',' + xl["toString"](), "error");
                var xh = {};
                xh["code"] = bT["NETWORK_FAILURE_CODE"], xh["message"] = In["NETWORK_FAILURE_TIP"];
                var xV = {};
                xV["status"] = 0x0, xV["error"] = xh, xC(xV);
              }, xu["send"](xM);
            } else typeof window["XDomainRequest"] !== "undefined" ? I6({
              'url': xk,
              'callback': "callback",
              'data': xM,
              'success': function xl(xh) {
                xC(xh);
              },
              'fail': function xh(xV) {
                xr(new Error(xV));
              },
              'time': 0x2710
            }) : (window["Yoda"]["CAT"]["sendLog"](xk, "ajaxError", "创建请求对象失败", "创建XMLHttpRequest对象失败", "info"), xr(new Error("创建请求对象失败")));
          })["catch"](function (xC) {
            window["Yoda"]["CAT"]["sendLog"](xk, "jsError", xC["message"], xC["stack"], "error");
            throw new Error("HTTP请求失败");
          })];
        });
      });
    }

    function IQ(xk) {
      return IV(xk, "GET", null, {});
    }

    function IL(xk, xa, xM, xt) {
      window["Yoda"]["CAT"]["sendLog"](xk, "动态签名", "使用新版签名", JSON["stringify"](xa), "info");
      var xH = xa['id'], xE = Il(xH), xC = xE["MODULE_VERSION"], xr = xE["PLATFORM"],
        xZ = xE["YODA_VERSION"], xu = {};
      xu["versionCode"] = IE, xu["jsVersion"] = xC, xu["jsCode"] = xH, xu["jsType"] = xr, xu["yodaVersion"] = xZ;
      var xn = {};
      xn["env"] = xu, xn["body"] = xa;
      var xS = xn, xl = Ir(xS);
      var xh = IZ(xl), xV = Kv(xh),
        xQ = xk["indexOf"]("http") === 0x0 ? xk : '' + location["protocol"] + xk,
        xL = "HTTPMethod=POST&Content-MD5=" + xV + "&Content-Type=" + xM["Content-Type"] + "&Date=" + xt + "&Url=" + xQ,
        xB = Iu(xL);

      xM["Authencation"] = xB, xM["TimesTamp"] = '' + xt;

      // console.debug('Authencation1', xl);
      console.debug('Authencation1', xh);
      console.debug('Authencation2', xL);
      console.debug('Authencation', xB);
      console.debug('f', window["seed"]["config"]['f']);

      var xW = {};
      return xW["request"] = xS, xW["defenseForm"] = xh, xW["requestContent"] = xL, xW["sign"] = xB, window["Yoda"]["CAT"]["sendLog"](xk, "动态签名", "新版签名正常", JSON["stringify"](xW), "info"), Ih(xl["body"]);
    }
    window.addAuth = IL;

    function IB(xk, xa, xM, xt) {
      var xH = Ih(xa), xE = It(xa),
        xC = xk["indexOf"]("http") === 0x0 ? xk : '' + location["protocol"] + xk,
        xr = {};
      xr["HTTPMethod"] = "POST", xr["Content-MD5"] = xE, xr["Content-Type"] = xM["Content-Type"], xr["Date"] = xt, xr["Url"] = xC;
      var xZ = xr, xu = IM(xZ), xn = IH(xu, xa["request_code"]);
      return xM["Authencation"] = window["btoa"](xn), xM["TimesTamp"] = '' + xt, xH;
    }

    function IW(xk, xa, xM, xt) {
      return K9(this, void 0x0, void 0x0, function () {
        var xH, xE, xC, xr;
        return Kj(this, function (xZ) {
          switch (xZ["label"]) {
            case 0x0:
              !xM["Content-Type"] && (xM["Content-Type"] = "application/x-www-form-urlencoded");
              xH = '';
              if (xa !== null && (typeof xa === "undefined" ? "undefined" : K4(xa)) === "object" && !(xa instanceof String || window["FormData"] && xa instanceof window["FormData"])) {
                xH = Ih(xa);
                if (xt && xa["request_code"]) try {
                  xE = IC["split"](','), xE["indexOf"]('' + xa['id']) > -0x1 ? xH = IL(xk, xa, xM, xt) : xH = IB(xk, xa, xM, xt);
                } catch (xu) {
                  xC = '' + (xu || "fontend sign error"), window["Yoda"]["CAT"]["sendLog"](xk, "动态签名", "新版签名异常", xC, "error"), window["Yoda"]["CAT"]["sendLog"](xk, "动态签名", "新版签名异常" + xu["message"], xu["stack"], "error"), xa["f_e_s_e"] = encodeURIComponent(xC), xH = IB(xk, xa, xM, xt);
                }
              } else xH = xa;
              if (!([bW["IMAGE"], bW["SLIDER"], bW["INFERENCE"], bW["PUZZLESLIDER"]]["indexOf"](xa['id']) !== -0x1)) return [0x3, 0x2];
              return [0x4, new Promise(function (xn) {
                YE(xk, xH, function (xS) {
                  xn(xS);
                });
              })["then"](function (xn) {
                return xn;
              })];
            case 0x1:
              xr = xZ["sent"]();
              xr && xr["length"] > 0x1 && (xM["mtgsig"] = xr);
              xZ["label"] = 0x2;
            case 0x2:
              return [0x2, IV(xk, "POST", xH, xM)];
          }
        });
      });
    }

    function Ig(xk, xa, xM) {
      return IV(xk, "POST", xa, xM);
    }

    function IJ(xk, xa) {
      return IV(xk, "HEAD", null, xa);
    }

    function IP(xk, xa) {
      if (xk >= 0x12c && xk < 0x190) {
        var xM = {};
        xM["code"] = bT["NETWORK_REDIRECT_CODE"], xM["message"] = In["NETWORK_REDIRECT_TIP"];
        var xt = {};
        xt["status"] = 0x0, xt["error"] = xM, xa(xt);
      } else {
        if (xk >= 0x190 && xk < 0x1f4) {
          var xH = {};
          xH["code"] = bT["NETWORK_REQUEST_CODE"], xH["message"] = In["NETWORK_REQUEST_TIP"];
          var xE = {};
          xE["status"] = 0x0, xE["error"] = xH, xa(xE);
        } else {
          if (xk >= 0x1f4 && xk < 0x258) {
            var xC = {};
            xC["code"] = bT["NETWORK_SERVER_CODE"], xC["message"] = In["NETWORK_SERVER_TIP"];
            var xr = {};
            xr["status"] = 0x0, xr["error"] = xC, xa(xr);
          }
        }
      }
    }

    var Iq = {};
    Iq["post"] = IW, Iq["get"] = IQ, Iq["head"] = IJ, Iq["formDataPost"] = Ig;
    var IX = Iq;

    function IU(xk) {
      xk && typeof xk === "function" && xk();
    }

    function Iz(xk) {
      return parseFloat(xk["toFixed"](0x3));
    }

    function Id(xk) {
      var xa = {};
      xa["custom"] = xk;
      var xM = xa;
      window["Yoda"]['LX']["report"]("c_techportal_verify", "b_techportal_whiteDuration_mv", xM);
    }

    function ID(xk) {
      var xa = {};
      xa["custom"] = xk;
      var xM = xa;
      window["Yoda"]['LX']["report"]("c_techportal_verify", "b_techportal_454uvzut_mv", xM);
    }

    function Iw(xk) {
      var xa = {};
      xa["custom"] = xk;
      var xM = xa;
      window["Yoda"]['LX']["report"]("c_techportal_verify", "b_techportal_verify_mv", xM);
    }

    function IT(xk) {
      xk['ts'] = Date["now"](), window["Yoda"]["CAT"]["metric"](xk);
    }

    function IO() {
      var xk = 0x1, xa = 0x3, xM = window["navigator"],
        xt = xM["userAgent"]["toString"](),
        xH = /mobile|iPhone|Android|Lenovo|huawei/i["test"](xt),
        xE = window["seed"]["options"],
        xC = xE["isMobile"] === undefined ? xH : xE["isMobile"];
      return xC ? xa : xk;
    }

    function Ip(xk) {
      return xk || window["seed"]["_yoda_listIndex"] || 0x0;
    }

    function Im(xk, xa, xM) {
      var xt = {};
      xt["data"] = xk, xt["requestCode"] = xM, xt["func"] = xa["succCallbackFun"], xt["url"] = xa["succCallbackUrl"], xt["knbFun"] = xa["succCallbackKNBFun"];
      var xH = xt;
      bg(xH);
    }

    function IF(xk, xa) {
      var xM = window["seed"]["options"]["succCallbackKNBFun"], xt = {};
      xt["status"] = 0x2, xt["requestCode"] = xa;
      var xH = {};
      xH["action"] = xM, xH["data"] = xt;
      var xE = JSON["stringify"](xH);
      if (xk["YodaKNB"] && xk["YodaKNB"]["toString"]() === '1') {
        window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "KNB_Bridge_publish swap", xE, "warn");
        var xC = {};
        xC["type"] = "native", xC["action"] = xM, xC["data"] = xE, window["KNB"]["publish"](xC);
      }
      window["YODA_Bridge"] && (window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", "YODA_Bridge_publish swap", xE, "warn"), window["YODA_Bridge"]["publish"](xE));
    }

    function IG(xk, xa) {
      var xM = window["seed"]["options"]["succCallbackKNBFun"];
      if (window["KNB"] && xM && (xk["YodaKNB"] || window["YODA_Bridge"])) return IF(xk, xa), ![];
      try {
        var xt = {};
        xt["requestCode"] = xa, xt["root"] = xk["root"], xt["succCallbackFun"] = xk["succCallbackFun"], xt["succCallbackUrl"] = xk["succCallbackUrl"], xt["failCallbackFun"] = xk["failCallbackFun"], xt["failCallbackUrl"] = xk["failCallbackUrl"], xt["yodaButtonTextColor"] = xk["yodaButtonTextColor"] || '', xt["yodaCommonThemeColor"] = xk["yodaCommonThemeColor"] || '';
        var xH = xt;
        xk["listIndex"] && (xH["listIndex"] = xk["listIndex"]), xk["next"] && (xH["next"] = xk["next"]), xk["YodaKNB"] && (xH["YodaKNB"] = xk["YodaKNB"]), xk["succCallbackKNBFun"] && (xH["succCallbackKNBFun"] = xk["succCallbackKNBFun"]), xk["font"] && (xH["font"] = xk["font"]), xk["style"] && (xH["style"] = xk["style"]), xk["theme"] && (xH["theme"] = xk["theme"]), xk["isMobile"] && (xH["isMobile"] = xk["isMobile"]), xk["layer"] && (xH["layer"] = xk["layer"]), xk["language"] && (xH["language"] = xk["language"]), setTimeout(function () {
          window["YodaSeed"](xH, window["seed"]["env"]);
        }, 0x0);
      } catch (xC) {
        var xE = xC;
        window["Yoda"]["CAT"]["sendLog"](window["location"]["href"], "jsError", xE["message"], xE["stack"]);
      }
    }

    function IN(xk, xa, xM, xt) {
      var xH = xM["code"], xE = xM["message"];
      if (xa === "jump") {
        var xC = {};
        xC["code"] = xH, xC["failCallbackFun"] = xk["failCallbackFun"], xC["failCallbackUrl"] = xk["failCallbackUrl"], xC["msg"] = xE, xC["requestCode"] = xt;
        var xr = I4(xC);
        typeof xr === "function" && xr(xk["root"], xE, xk["style"]);
      }
      xa === "group" && I5(xk["root"], xE, xk["style"], xt);
    }

    function Io(xk, xa, xM) {
      var xt = null;
      if (xk && xk["status"] === 0x1) setTimeout(function () {
        Im(xk["data"] || null, xa, xM);
      }, 0x64); else {
        var xH = xk["error"], xE = {};
        xE["code"] = "jump", xE["message"] = '', xt = xE;
        if (xH) {
          xt["message"] = xH["message"];
          var xC = I0(xa["category"], xH["code"]);
          if (xC === "jump" || xC === "group") setTimeout(function () {
            IN(xa, xC, xH, xM);
          }, 0x7d0); else switch (xH["code"]) {
            case 0x1d91d:
              setTimeout(function () {
                IG(xa, xH["request_code"]);
              }, 0x3e8);
              break;
            default:
              xt = xH;
              break;
          }
          xH["code"] === 0x1d8e0 && (xt["code"] = xH["code"]);
        }
      }
      return xt;
    }

    function IA(xk) {
      return K9(this, void 0x0, Promise, function () {
        var xa, xM, xt;
        return Kj(this, function (xH) {
          switch (xH["label"]) {
            case 0x0:
              xk["listIndex"] = 0,Ip(xk["listIndex"]), xk["source"] = 1,IO(), xa = window["YODA_CONFIG"]["__API_URL__"] + "/v2/ext_api/" + xk["action"] + "/verify";
              var xE = {};
              xE["method"] = xk['id'], xE["action"] = xk["action"], xE["requestCode"] = xk["request_code"], xM = xE, Iw(xM), xt = xk["timestamp"], delete xk["timestamp"];
              return [0x4, IX["post"](xa, xk, {}, xt)];
            case 0x1:
              return [0x2, xH["sent"]()];
          }
        });
      });
    }

    function s0(xk) {
      return K9(this, void 0x0, Promise, function () {
        var xa, xM;
        return Kj(this, function (xt) {
          switch (xt["label"]) {
            case 0x0:
              xk["listIndex"] = Ip(xk["listIndex"]), xk["source"] = IO(), xa = window["YODA_CONFIG"]["__API_URL__"] + "/v2/ext_api/" + xk["action"] + "/info";
              var xH = {};
              xH["method"] = xk['id'], xH["action"] = xk["action"], xH["requestCode"] = xk["request_code"], xM = xH, ID(xM);
              return [0x4, IX["post"](xa, xk, {})];
            case 0x1:
              return [0x2, xt["sent"]()];
          }
        });
      });
    }

    var s1 = {};
    s1["onVerifySuccess"] = Im, s1["postVerify"] = IA, s1["postInfo"] = s0, s1["callHandle"] = Io, s1["onErrorHandle"] = IN, s1["swap"] = IG;
    var s2 = s1, s3 = (function () {
      function xk(xa) {
        bs(), this["token"] = YH(), this["page"] = xa;
      }

      return xk["prototype"]["createbgImage"] = function (xa, xM) {
        return new Promise(function (xt, xH) {
          var xE = new Image();
          xE["onload"] = function () {
            xt(xE);
          }, xE["onerror"] = function (xC) {
            window["Yoda"]["CAT"]["sendLog"](location["href"], "ajaxError", "image_" + xM + "加载图片失败", "错误信息:" + xC + " \n 请求地址" + xa, "error"), xH();
          }, xE["src"] = xa;
        });
      }, xk["prototype"]["verify"] = function (xa, xM) {
        console.log('verify');
        return K9(this, void 0x0, void 0x0, function () {
          function xt(xr, xZ) {
            var xu = window["decodeURIComponent"](window["atob"](xZ));
            return bE(xu, xa, xr);
          }

          var xH, xE, xC;
          return Kj(this, function (xr) {
            switch (xr["label"]) {
              case 0x0:
                xH = this["token"], xE = this["page"]["isDegrade"], xM["_token"] = xt(xE, xH["reload"]()), xM["timestamp"] = this["page"]["timestamp"];
                this["page"]["succModule"] && (xM["listIndex"] = '0');
                return [0x4, s2["postVerify"](xM)];
              case 0x1:
                xC = xr["sent"]();
                return [0x2, s2["callHandle"](xC, this["page"], xa)];
            }
          });
        });
      }, xk["prototype"]["sliderH5Point"] = function (xa) {
        var xM = {};
        xM["action"] = this["page"]["action"], xM["requestCode"] = this["page"]["requestCode"], xM["content"] = xa;
        var xt = xM;
        window["Yoda"]['LX']["report"]("c_techportal_gn2c4ki7", "b_techportal_7nezp2sy_mc", xt);
      }, xk["prototype"]["sliderPCPoint"] = function (xa) {
        var xM = {};
        xM["action"] = this["page"]["action"], xM["requestCode"] = this["page"]["requestCode"], xM["content"] = xa;
        var xt = xM;
        window["Yoda"]['LX']["report"]("c_techportal_gn2c4ki7", "b_techportal_k4nhr58y_mc", xt);
      }, xk;
    }()), s4 = window["seed"]["env"] || "pro";

    function s5(xk) {
      var xa = {};
      for (var xM in xk) {
        if (xk["hasOwnProperty"](xM)) {
          var xt = xk[xM];
          xa[xM] = document["getElementById"](xt);
        }
      }
      return xa;
    }

    function s6(xk, xa) {
      var xM = document["getElementById"](xk);
      xM && (xM["innerHTML"] = xa);
    }

    function s7(xk, xa, xM, xt) {
      if ((xk /= xt / 0x2) < 0x1) return xM / 0x2 * xk * xk * xk + xa;
      return xM / 0x2 * ((xk -= 0x2) * xk * xk + 0x2) + xa;
    }

    var s8 = {};
    s8["easeOutCubic"] = s7;
    var s9 = s8, sj = null, sf = null, sc = {}, sK, sY, sb, sI = function xk(xa) {
      var xM = xa["touches"][0x0];
      sj = Date["now"](), sf = sj - (sc["last"] || sj), clearTimeout(sK), sf > 0x0 && sf <= 0xfa && (sc["isDoubleTap"] = !![]), sc["last"] = sj, sY = xM["clientX"], sb = xM["clientY"];
    }, ss, sx = {
      'tap': {
        'addHandler': function xa(xM, xt) {
          ss = function xC(xr) {
            var xZ = xr["changedTouches"][0x0], xu = xZ["clientX"], xn = xZ["clientY"];
            if (Math["abs"](sY - xu) < 0x6 && Math["abs"](sb - xn) < 0x6) {
              if (sc["isDoubleTap"]) return sc["isDoubleTap"] = ![], sY = 0x0, sb = 0x0, xu = 0x0, xn = 0x0, ![]; else sK = setTimeout(function () {
                xt(xr), sK = null, sY = 0x0, sb = 0x0, xu = 0x0, xn = 0x0, sc = {};
              }, 0xfa);
            } else return xr["defaultPrevented"] && xr["preventDefault"](), sc = {}, sY = 0x0, sb = 0x0, xu = 0x0, xn = 0x0, ![];
          };
          var xH = {};
          xH["passive"] = !![], xM["addEventListener"]("touchstart", sI, xH);
          var xE = {};
          xE["passive"] = !![], xM["addEventListener"]("touchend", ss, xE);
        }, 'removeHandler': function xM(xt, xH, xE) {
          var xC = {};
          xC["capture"] = ![], xt["removeEventListener"]("touchstart", sI, xC);
          var xr = {};
          xr["capture"] = ![], xt["removeEventListener"]("touchend", ss, xr);
        }
      }
    }, si = function xt(xH, xE, xC) {
      switch (xE) {
        case "tap":
          sx[xE]["addHandler"](xH, xC);
          break;
        default:
          var xr = {};
          xr["passive"] = ![], xH?xH["addEventListener"](xE, xC, xr):null;
      }
    }, sv = function xH(xE, xC, xr) {
      switch (xC) {
        case "tap":
          sx[xC]["removeHandler"](xE, xC, xr);
          break;
        default:
          var xZ = {};
          xZ["capture"] = ![], xE["removeEventListener"](xC, xr, xZ);
      }
    }, sR = function xE(xC) {
      xC["preventDefault"]();
    };

    function se(xC, xr) {
      for (var xZ in xr) {
        if (xr["hasOwnProperty"](xZ)) switch (xZ) {
          case "display":
            xC["style"]["display"] = xr[xZ];
            break;
          case "outline":
            xC["style"]["outline"] = xr[xZ];
            break;
          case "content":
            xC["innerHTML"] = xr[xZ];
            break;
          default:
            xC[xZ] = xr[xZ];
        }
      }
    }

    function sy(xC) {
      var xr = {};
      xr["display"] = "none", se(xC, xr);
    }

    function sk(xC) {
      var xr = {};
      xr["display"] = "block", se(xC, xr);
    }

    var sa = function (xC) {
      K8(xr, xC);

      function xr(xZ) {
        var xu = xC["call"](this, xZ) || this;
        xu["doms"] = {}, xu["count"] = 0x0, xu["globalTimer"] = 0x0, xu["timeoutCount"] = 0x0, xu["firstTimeStamp"] = 0x0, xu["moveingBarX"] = 0x0, xu["moveingBarY"] = 0x0, xu["maxLeft"] = 0x0, xu['_x'] = 0x0, xu['_y'] = 0x0, xu["actualMove"] = 0x0, xu["initTimeStamp"] = Date["now"](), xu["isDrag"] = ![];
        var xn = {};
        xn["Type"] = 0x0, xn['Return'] = 0x0, xn["zone"] = [], xn["client"] = [], xn["Timestamp"] = [], xn["count"] = 0x0, xn["timeout"] = 0x0;
        var xS = {};
        xS["trajectory"] = [], xS["env"] = xn, xu["data"] = xS, xu["customStyle"] = {};
        var xl = {};
        xl["help"] = "yodaHelp", xl["boxWrapper"] = "yodaBoxWrapper", xl["box"] = "yodaBox", xl["moveingbar"] = "yodaMoveingBar", xl["tip"] = "yodaSliderTip", xu["ids"] = xl, xu["whiteDuration"] = 0x0, xu["sliderMaxLenth"] = 0x64, xu["sliderType"] = 0x0, xu["sliderReturn"] = 0x0, xu["oceanPoint"] = [], xu["init"] = function () {
          xu["customStyle"] = xu["config"]["style"] || {};
          K4(xu["customStyle"]["slider"]) === "object" && (xu["customStyle"] = xu["customStyle"]["slider"]);
          var xV = new Kx(),
            xQ = xV["template"](xu["ids"], xu["customStyle"] || {}, xu["config"]["language"] || '');
          s6(xu["config"]["root"], xQ), xu["whiteDuration"] = Date["now"]() - xu["config"]["yodaInitTime"], xu["doms"] = s5(xu["ids"]);
          typeof xu["config"]['t'] === "number" && (xu["sliderType"] = xu["config"]['t']);
          var xL = function xz(xd, xD) {
            return Math["round"](Math["random"]() * (xD - xd)) + xd;
          };
          if (xu["config"]['t'] === 0x1) ;
          if (xu["config"]['t'] === 0x2) {
            var xB = xu["doms"]["boxWrapper"],
              xW = xB["getBoundingClientRect"]()["width"],
              xg = Math["ceil"](xW / 0x64 * 0x46), xJ = Math["floor"](xW / 0x64) * 0x64,
              xP = xL(xg, xJ);
            xB["style"]["width"] = xP + 'px';
          }
          if (xu["config"]['t'] === 0x3) {
            var xq = xL(0x32, 0x46);
            xu["sliderMaxLenth"] = xq;
          }
          var xX = xu["config"]["action"];
          xu["initSlider"](xu["doms"]["box"], xu["doms"]["boxWrapper"]);
          var xU = {};
          xU["duration"] = xu["whiteDuration"], xU["method"] = bW["SLIDER"], xU["mtaction"] = "loading", xU["action"] = xX, xU["requestCode"] = xu["config"]["requestCode"], Id(xU), xu["config"]["mounted"] && IU(xu["config"]["mounted"]), xu["createbgImage"]?xu["createbgImage"]("https://s3plus.meituan.net/v1/mss_f231eb419c414559a1837748d11d4312/yoda-resources/slider/m_loading.png", xX)["then"](function () {
          }):null, setTimeout(function () {
            try {
              bK("slider", xu["config"]["requestCode"]);
            } catch (xD) {
              var xd = xD;
              window["Yoda"]["CAT"]["sendLog"](location["href"], "jsError", xd["message"], xd["stack"] || '', "info");
            }
          }, 0x0);
        }, xu["initSlider"] = function (xV, xQ) {
          xu["drag"] = xV, xu["moveingBar"] = xu["doms"]["moveingbar"], xu["maxContainer"] = xQ, si(xu["doms"]["box"], "mousedown", xu["startDrag"]), si(xu["doms"]["box"], "touchstart", xu["startDrag"]), si(xu["doms"]["box"], "touchstart", function () {
            window["Yoda"]["CAT"]["sendLog"](location["href"], "jsError", "PC上显示了i版的滑动", "使用了touchstart事件触发了滑块", "info");
          });
          var xL = Date["now"]() - xu["config"]["yodaInitTime"], xB = {};
          xB["firstPaint"] = xu["whiteDuration"], xB["domReady"] = xL;
          var xW = {
            'key': xB,
            'tags': {
              'action': xu["config"]["action"],
              'type': xu["config"]["type"],
              'ua': bb()
            }
          };
          IT(xW), typeof xu["config"]["mounted"] === "function" && xu["config"]["mounted"]();
        }, xu["help"] = function () {
          var xV = "https://verify.inf.test.meituan.com/feedback/manmachine/#/?requestCode=" + xu["config"]["requestCode"];
          window["open"](xV);
        }, xu["startDrag"] = function (xV) {
          xu["count"]++, clearTimeout(xu["globalTimer"]), xu["timeoutListen"]();
          !xu["firstTimeStamp"] && (xu["firstTimeStamp"] = Date["now"]());
          xu["moveingBarX"] = xu["moveingBar"]["clientWidth"], xu["maxLeft"] = xu["maxContainer"]["clientWidth"] - xu["drag"]["offsetWidth"];
          xV["clientX"] ? (xu['_x'] = xV["clientX"], xu['_y'] = xV["clientY"]) : (xu['_x'] = xV["targetTouches"][0x0]["clientX"], xu['_y'] = xV["targetTouches"][0x0]["clientY"]);
          si(document, "mousemove", xu["moveDrag"]), si(document, "mouseup", xu["stopDrag"]), si(document, "touchmove", xu["moveDrag"]), si(document, "touchend", xu["stopDrag"]), si(document, "mousemove", xu["sliderMoveDrag"]), si(document, "mouseup", xu["sliderStopDrag"]), si(document, "touchmove", xu["sliderMoveDrag"]), si(document, "touchend", xu["sliderStopDrag"]), sv(xu["doms"]["box"], "mousedown", xu["startDrag"]), sv(xu["doms"]["box"], "touchstart", xu["startDrag"]);
          var xQ = xu["maxContainer"], xL = {
            'startX': Iz(xu['_x']),
            'startY': Iz(xu['_y']),
            'w': Iz(xQ["clientWidth"]),
            'h': Iz(xQ["clientHeight"]),
            'clientX': Iz(xQ["getBoundingClientRect"]()["left"]),
            'clientY': Iz(xQ["getBoundingClientRect"]()["top"])
          };
          xu["onStart"](xL), sR(xV);
        }, xu["timeoutListen"] = function () {
          xu["globalTimer"] = window["setTimeout"](function () {
            clearTimeout(xu["globalTimer"]), !xu["isDrag"] && (xu["stopDrag"](), xu["data"] && xu["delLastItem"](xu["data"]["trajectory"]), xu["timeoutCount"]++);
          }, 0xbb8);
        }, xu["move"] = function (xV) {
          var xQ = 0x0, xL = 0x0;
          if (xV["clientX"]) xQ = xV["clientX"], xL = xV["clientY"]; else xV["targetTouches"] && (xQ = xV["targetTouches"][0x0]["clientX"], xL = xV["targetTouches"][0x0]["clientY"]);
          var xB = {};
          return xB["clientX"] = xQ, xB["clientY"] = xL, xB;
        }, xu["sliderMoveDrag"] = function (xV) {
          var xQ = xu["move"](xV), xL = xQ["clientX"], xB = xQ["clientY"];
          xu["oceanPoint"]["push"]([0x0, xL, xB, Date["now"]() - xu["initTimeStamp"]]);
        }, xu["sliderStopDrag"] = function (xV) {
          var xQ = xu["move"](xV), xL = xQ["clientX"], xB = xQ["clientY"];
          xu["oceanPoint"]["push"]([0x0, xL, xB, Date["now"]() - xu["initTimeStamp"]]), sv(document, "touchmove", xu["sliderMoveDrag"]), sv(document, "touchend", xu["sliderStopDrag"]), sv(document, "mousemove", xu["sliderMoveDrag"]), sv(document, "mouseup", xu["sliderStopDrag"]), xu["sliderH5Point"](JSON["stringify"](xu["oceanPoint"])), xu["oceanPoint"]["splice"](0x0);
        }, xu["moveDrag"] = function (xV) {
          var xQ = xu["move"](xV), xL = xQ["clientX"], xB = xQ["clientY"],
            xW = xL - xu['_x'], xg = xB - xu['_y'];
          if (Math["abs"](xW) < 0x6 && Math["abs"](xg) < 0x6) return ![];
          xW < 0x0 && (xW = 0x0), xW > xu["maxLeft"] && (xW = xu["maxLeft"]), xu["sliderMaxLenth"] !== 0x64 && xW / xu["maxContainer"]["clientWidth"] * 0x64 > xu["sliderMaxLenth"] && (xu["sliderReturn"] = xW, xu["sliderMaxLenth"] = 0x64, xW = 0x0, sR(xV), xu["stopDrag"]()), xu["setBoxPosition"](xW), xu["onMove"](Iz(xL), Iz(xB)), xW === xu["maxLeft"] && xu["stopDrag"](), sR(xV);
        }, xu["stopDrag"] = function () {
          sv(document, "mousemove", xu["moveDrag"]), sv(document, "mouseup", xu["stopDrag"]), sv(document, "touchmove", xu["moveDrag"]), sv(document, "touchend", xu["stopDrag"]), xu["dealMove"]();
        }, xu["setBoxPosition"] = function (xV) {
          xu["drag"]["style"]["left"] = xV + 'px', xu["moveingBar"]["style"]["width"] = xu["moveingBarX"] + xV + 'px', xu["actualMove"] = xV;
        }, xu["dealMove"] = function () {
          if (xu["actualMove"] === xu["maxLeft"]) return xu["isDrag"] = !![], sv(xu["drag"], "mousedown", xu["startDrag"]), sv(xu["drag"], "touchstart", xu["startDrag"]), xu["actualMove"] = 0x0, xu["drag"]["className"] = "boxLoading " + (xu["customStyle"]["boxLoading"] || ''), xu["onStop"](), ![];
          xu["backToStart"]();
        }, xu["boxOk"] = function () {
          xu["drag"]["className"] = "boxOk " + (xu["customStyle"]["boxOk"] || '');
        }, xu["boxStatic"] = function () {
          xu["drag"]["innerHTML"] = '', xu["drag"]["className"] = "boxStatic " + (xu["customStyle"]["boxStatic"] || ''), xu["moveingBar"]["className"] = "moveingBar " + (xu["customStyle"]["moveingBar"] || '');
        }, xu["boxError"] = function () {
          xu["drag"]["className"] = "boxError " + (xu["customStyle"]["boxError"] || ''), xu["moveingBar"]["className"] = "moveingBarError " + (xu["customStyle"]["moveingBarError"] || '');
        }, xu["backToStart"] = function () {
          var xV = 0x0, xQ = setInterval(function () {
            var xL = s9["easeOutCubic"](xV * 0x11, 0x0, xu["actualMove"], 0x1f4),
              xB = xu["actualMove"] - xL;
            xu["drag"]["style"]["left"] = xB + 'px', xu["drag"]["style"]["left"] = xB + 'px', xu["moveingBar"]["style"]["width"] = xu["moveingBarX"] + xB + 'px', xB <= 0x0 && (xu["drag"]["style"]["left"] = "0px", xu["drag"]["style"]["left"] = "0px", xu["moveingBar"]["style"]["width"] = xu["moveingBarX"] + 'px', xu["actualMove"] = 0x0, clearInterval(xQ), si(xu["drag"], "mousedown", xu["startDrag"]), si(xu["drag"], "touchstart", xu["startDrag"])), xV++, xu["boxStatic"]();
          }, 0x11);
        }, xu["onStart"] = function (xV) {
          var xQ = xV["startX"], xL = xV["startY"], xB = xV['w'], xW = xV['h'],
            xg = xV["clientX"], xJ = xV["clientY"];
          xu["data"]["env"]["zone"] = [xB, xW], xu["data"]["env"]["client"] = [xg, xJ];
          var xP = {};
          xP["orientation"] = 'h', xu["data"]["trajectory"]["push"]({
            'point': [[0x0, xQ, xL, Date["now"]() - xu["initTimeStamp"]]],
            'vector': xP
          }), xu["oceanPoint"]["push"]([0x0, xQ, xL, Date["now"]() - xu["initTimeStamp"]]);
        }, xu["onMove"] = function (xV, xQ) {
          var xL = xu["data"]["trajectory"];
          Array["isArray"](xL) && xL["length"] && xL[xL["length"] - 0x1]["point"]["push"]([0x0, xV, xQ, Date["now"]() - xu["initTimeStamp"]]);
        }, xu["showMessage"] = function (xV) {
          xu["doms"]["tip"]["textContent"] = xV, sk(xu["doms"]["tip"]);
          var xQ = window["setTimeout"](function () {
            clearTimeout(xQ), sy(xu["doms"]["tip"]);
          }, 0xbb8);
        }, xu["config"] = xZ;
        var xh = xZ["theme"] || "meituan";
        return typeof window["yodaTheme"] === "function" && window["yodaTheme"](xh), xu["init"](), xu;
      }
      window.md5 = mymd5?mymd5:Kv;
      return window.Yoda.run = xr["prototype"]["onStop"] = function () {
        var xZ = this, xu = this["data"]["trajectory"]["length"] - 0x3;

        if (isNode) {
          this['data'] = window.YodaData
        } else {
          this["data"]["trajectory"] = this["data"]["trajectory"]["slice"](xu > 0x0 ? xu : 0x0);
          this["data"]["env"]["Timestamp"] = [this["initTimeStamp"], this["firstTimeStamp"]];
          this["data"]["env"]["count"] = this["count"];
          this["data"]["env"]["timeout"] = this["timeoutCount"];
          this["data"]["env"]["Type"] = this["sliderType"];
          this["data"]["env"]['Return'] = Number(this["sliderReturn"]["toFixed"](0x0));
        }

        if(window['seed']['config']['debug'] && window['seed']['config']['debug']['behavior']){
          this['data'] = window['seed']['config']['debug']['behavior'];
        }

        var requestCode = this["config"]["requestCode"];
        console.debug('behavior', JSON.stringify(this["data"]));
        window.yodaResult = {
          'id': bW["SLIDER"],
          'request_code': requestCode,
          'behavior': behavior(this["data"], requestCode, this["config"]["isDegrade"]),
          'fingerprint': '',
          'action': this["config"]["action"]
        };
        if (this["verify"]) {
          this["verify"](requestCode, window.yodaResult)["then"](function (xl) {
            if (xl) {
              var xh = xl["message"], xV = xl["code"];
              xZ["showMessage"](xh), xZ["boxError"](), xV !== "jump" && xV !== 0x1d8e0 && setTimeout(function () {
                xZ["backToStart"]();
              }, 0x3e8);
            } else xZ["boxOk"]();
          });
        } else {
          this['verify2'] = function (requestCode, data) {

            data['_token'] = be(bc["Kaito"](decodeURIComponent(window["atob"](this['token']['reload']())), requestCode), false);
            data['timestamp'] = this['page']['timestamp'];
            data['listIndex'] = 0;

            console.debug('yodaResult', data);

            return data;
          }
          return this['verify2'](requestCode, window.yodaResult)
        }

      }, xr["prototype"]["delLastItem"] = function (xZ) {
        Array["isArray"](xZ) && xZ["length"] && (xZ["length"] = xZ["length"] - 0x1);
      }, xr;
    }(s3);
    K5(window), !window["btoa"] && (window["btoa"] = K6["encode"]), !window["atob"] && (window["atob"] = K6["decode"]), window["Yoda"]["slider"] = sa;
  }()));
;


(function () {
  var styleElementsInsertedAtTop = [];
  var insertStyleElement = function (styleElement, options) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var lastStyleElementInsertedAtTop =
      styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
    options = options || {};
    options.insertAt = options.insertAt || 'bottom';
    if (options.insertAt === 'top') {
      if (!lastStyleElementInsertedAtTop) {
        head.insertBefore(styleElement, head.firstChild);
      } else if (lastStyleElementInsertedAtTop.nextSibling) {
        head.insertBefore(
          styleElement,
          lastStyleElementInsertedAtTop.nextSibling
        );
      } else {
        head.appendChild(styleElement);
      }
      styleElementsInsertedAtTop.push(styleElement);
    } else if (options.insertAt === 'bottom') {
      head.appendChild(styleElement);
    } else {
      throw new Error(
        "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
      );
    }
  };
  var createStyle = function (cssText, attributes, extraOptions) {
    extraOptions = extraOptions || {};
    var style = document.createElement('style');
    style.type = 'text/css';
    for (var key in attributes) {
      if (!attributes.hasOwnProperty(key)) {
        continue;
      }
      var value = attributes[key];
      style.setAttribute('data-' + key, value);
    }
    if (style.sheet) {
      style.innerHTML = cssText;
      style.sheet.cssText = cssText;
      insertStyleElement(style, {insertAt: extraOptions.insertAt});
    } else if (style.styleSheet) {
      insertStyleElement(style, {insertAt: extraOptions.insertAt});
      style.styleSheet.cssText = cssText;
    } else {
      style.appendChild(document.createTextNode(cssText));
      insertStyleElement(style, {insertAt: extraOptions.insertAt});
    }
  };
  var css = "input::-ms-clear{display:none}input::-ms-reveal{display:none}.mt-disabled-theme{color:rgba(34,34,34,.5);background-image:linear-gradient(135deg,#fff5ca 0,#fff2cc 100%)}.mt-normal-theme{color:#222;background-color:#ffc300}.mt-highlighted-theme{background-image:linear-gradient(135deg,#e6bc01 0,#e5aa00 100%)}*{-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent}.submitBase{display:inline-block;width:100%;line-height:1;margin:0;padding:1.1em;border-radius:10px;border:0;font-family:PingFangSC-Semibold;font-size:.875em;text-align:center;vertical-align:middle;letter-spacing:2px;outline:0;-webkit-user-select:none}.clearIcon{position:absolute;display:none;top:50%;transform:translateY(-50%);right:0;width:2.06em;height:2.06em;background:url(https://s3plus.sankuai.com/v1/mss_f231eb419c414559a1837748d11d4312/yoda-resources/slider/clear.png) no-repeat center center;background-size:1em 1em;-webkit-tap-highlight-color:rgba(255,255,255,0)}@media screen and (max-width:768px){.globalErrorWrapper{width:100vw;height:100vh}.globalErrorWrapper .cententWrapper{position:absolute;top:55%;transform:translateY(-40%);width:100vw}}@media screen and (min-width:769px){.globalErrorWrapper{width:100%;height:360px}.globalErrorWrapper .cententWrapper{position:relative;transform:translateY(40%);height:inherit}}.globalErrorWrapper{background-position:50% 20%;background-repeat:no-repeat;background-size:50%}.globalErrorWrapper .errorTitle{margin:0;line-height:2em;font-size:1.2em;font-weight:700;color:#333;text-align:center}.globalErrorWrapper .errorTip{margin:0 1.3em;line-height:2em;font-size:1em;color:#333;text-align:center}.globalErrorWrapper .btnWrapper{text-align:center}.globalErrorWrapper .btnWrapper .toogleBtn{padding:.3em .8em;font-size:1.2em;color:#333;border:1px solid #999;border-radius:.3em;background:0 0;margin:.6em auto;outline:0}.globalCombinationWrapper{width:100vw;height:100vh;background:#f4f4f4;text-align:center}.globalCombinationWrapper .titleWrapper{padding-top:2em}.globalCombinationWrapper .titleWrapper .title{margin:0;padding:0;line-height:1.8em;font-size:1.2em;color:#222}.globalCombinationWrapper .btnWrapper{margin:1.2em;text-align:center}.globalCombinationWrapper .btnWrapper .btn{width:95%;padding:.5em 0;color:#222;font-size:1.2em;border:none;border-radius:.3em;background:#ffc300;outline:0;opacity:.87}.globalCombinationWrapper .btnWrapper .btn:active{opacity:1}.globalPCCombinationWrapper{display:block;margin:20px auto}.globalPCCombinationWrapper .titleWrapper{display:block;margin:0 auto}.globalPCCombinationWrapper .titleWrapper .title{margin:0 0 20px 0;font-family:PingFangSC-Semibold;font-size:20px;color:#333;letter-spacing:0;line-height:18px}.globalPCCombinationWrapper .sel{margin:0 auto;width:1008px}.globalPCCombinationWrapper .btnWrapper{display:inline-block;width:500px;height:100px;background:#fff;border:1px solid #e5e5e5;margin:0 0 -1px -1px}.globalPCCombinationWrapper .btnWrapper .cententWrapper{display:inline-block;width:250px;margin-top:20px;vertical-align:middle}.globalPCCombinationWrapper .btnWrapper .title{display:block;margin:10px;font-family:PingFangSC-Semibold;font-size:16px;color:#333;letter-spacing:0;line-height:18px}.globalPCCombinationWrapper .btnWrapper .subtitle{display:block;margin:10px;font-family:PingFangSC-Regular;font-size:12px;color:#999;letter-spacing:0;line-height:12px}.globalPCCombinationWrapper .btnWrapper .btn{display:inline-block;width:120px;height:40px;margin:10px;font-family:PingFangSC-Medium;font-size:14px;color:#fff;background:#13d1be;border-radius:100px;vertical-align:bottom;border:none;outline:0;cursor:pointer}.globalSwitchWrapper{line-height:3em;text-align:center}.globalSwitchWrapper .btn{font-family:PingFangSC-Regular;font-size:1em;color:#ffc300;text-align:center;line-height:16px;border:none;outline:0;background:0 0;cursor:pointer;opacity:.87;text-decoration:none}.globalSwitchWrapper .btn:active{opacity:1}.yoda-slider-wrapper{position:absolute;width:260px;height:160px;font-size:16px;top:50%;left:50%;margin-left:-130px;margin-top:-80px;text-align:center;box-sizing:content-box;background:#fff;border-radius:5px}.yoda-slider-wrapper .slider-help-wrapper{position:absolute;top:8px;right:14px;display:none}.yoda-slider-wrapper .slider-help{width:24px;display:inline-block;overflow:hidden;cursor:pointer;vertical-align:middle}.yoda-slider-wrapper .slider-title{position:relative;font-size:18px;color:#030303;margin:20px auto;text-align:center}.yoda-slider-wrapper .yoda-slider-tip{position:absolute;display:none;top:50%;width:100%;margin-top:-30px;line-height:18px;font-size:12px;color:#f76120;text-align:center}.yoda-slider-wrapper .box-wrapper{position:relative;width:230px;height:33px;margin:31px auto;border:1px solid #cfcfcf;background:#d4d4d4 url(https://s3plus.meituan.net/v1/mss_f231eb419c414559a1837748d11d4312/yoda-resources/slider/m_unlock.png) no-repeat 96% center;background-size:16px}.yoda-slider-wrapper .box-wrapper .bg-tip{position:absolute;top:0;left:10%;display:block;line-height:32px;width:160px;font-size:12px;color:#999;border:none;overflow:hidden;white-space:nowrap}.yoda-slider-wrapper .preBoxWrapper{height:33px;border:1px solid #cfcfcf;background:#d4d4d4}.yoda-slider-wrapper .wait{margin:12px auto;font-size:12px;text-align:left;color:#999;width:40px;padding-left:16px;background:#d4d4d4 url(https://s3plus.meituan.net/v1/mss_f231eb419c414559a1837748d11d4312/yoda-resources/slider/m_loading.png) no-repeat 0 center;background-size:16px}.yoda-slider-wrapper .moveingBar{position:absolute;width:12px;height:33px;z-index:1;background:#fcd000;background-image:linear-gradient(135deg,#ffd000 0,#ffbd00 100%)}.yoda-slider-wrapper .moveingBarError{position:absolute;width:12px;height:33px;z-index:1;background:#fcd000;background-image:linear-gradient(135deg,#ffd000 0,#ffbd00 100%);background:#b2b2b1;background:linear-gradient(-45deg,#b2b2b1 25%,#acacab 0,#acacab 50%,#b2b2b1 0,#b2b2b1 75%,#acacab 0);background-size:16px 16px}.yoda-slider-wrapper .box{position:absolute;left:0;margin:0;width:33px;height:33px;z-index:2;cursor:move}.yoda-slider-wrapper .boxStatic{position:absolute;left:0;margin:0;width:33px;height:33px;z-index:2;cursor:move;background:#fff url(https://s3plus.meituan.net/v1/mss_f231eb419c414559a1837748d11d4312/yoda-resources/slider/m_key.png) no-repeat center center;background-size:22px}.yoda-slider-wrapper .boxOk{position:absolute;left:0;margin:0;width:33px;height:33px;z-index:2;cursor:move;background:#fff url(https://s3plus.meituan.net/v1/mss_f231eb419c414559a1837748d11d4312/yoda-resources/slider/m_boxOk.png) no-repeat center center;background-size:22px}.yoda-slider-wrapper .boxLoading{position:absolute;left:0;margin:0;width:33px;height:33px;z-index:2;cursor:move;background:#fff url(https://s3plus.meituan.com/v1/mss_f231eb419c414559a1837748d11d4312/yoda-resources/slider/m_loading.png) no-repeat center center;background-size:22px}.yoda-slider-wrapper .boxError{position:absolute;left:0;margin:0;width:33px;height:33px;z-index:2;cursor:move;background:#fff url(https://s3plus.meituan.net/v1/mss_f231eb419c414559a1837748d11d4312/yoda-resources/slider/m_error.png) no-repeat center center;background-size:22px}";
  createStyle(css, {"href": "slider.css"}, false);
})();

window.yodaSlide = function (config) {
  window.seed.config = config;
  config.requestCode = config.request_code;

  window.Yoda.CAT = {
    sendLog: () => {
    },
    metric: () => {
    }
  };

  window.Yoda.LX = {
    report: () => {
    },
  };
  var param = window.Yoda.slider(config);

  window.YodaData = window.Yoda.data = behaviors.mock();
  // console.debug(JSON.stringify(window.YodaData));
  // return;
  var body = window.Yoda.run();
  body['source'] = 1;
  let timestamp = body['timestamp'];
  delete body['timestamp'];

  let headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  };

  window.addAuth('https://verify.meituan.com/v2/ext_api/merchantlogin/verify', body, headers, timestamp)
  console.debug('headers',headers);

//   var str = [
//     'HTTPMethod=POST',
//     'Content-MD5='+sortMd5(body),
//     'Content-Type=ap1plication/x-www-form-urlencoded',
//     'Date='+timestamp,
//     'Url=https://verify.meituan.com/v2/ext_api/merchantlogin/verify'
//   ].join("&");
// console.debug('Authencation123123',str, window.base64Encode(config.request_code));
//   var auth = window.authEncrypt(str, window.base64Encode(config.request_code));

  // window.Yoda = {};


  headers['Host'] = 'verify.meituan.com';
  headers['Connection'] = 'keep-alive';
  headers['Pragma'] = 'no-cache';
  headers['Cache-Control'] = 'no-cache';
  headers['sec-ch-ua'] = '"Not_A Brand";v="99"; "Google Chrome";v="109"; "Chromium";v="109"';
  headers['yoda-language'] = 'zh-CN';
  headers['sec-ch-ua-mobile'] = '?0';
  headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36';
  headers['sec-ch-ua-platform'] = '"macOS"';
  headers['Accept'] = '*/*';
  headers['Origin'] = 'https://epassport.meituan.com';
  headers['Sec-Fetch-Site'] = 'same-site';
  headers['Sec-Fetch-Mode'] = 'cors';
  headers['Sec-Fetch-Dest'] = 'empty';
  headers['Referer'] = 'https://epassport.meituan.com/';
  headers['Accept-Language'] = 'zh;en;q=0.9;zh-CN;q=0.8;sq;q=0.7';
  headers['dnt'] = '1';
  headers['sec-gpc'] = '1';

  return {
    body: body,
    headers: headers,
    // headers2: {
    //   Authencation: auth,
    //   TimesTamp: timestamp+"",
    //   'Content-Type':'application/x-www-form-urlencoded',
    //   'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.3',
    //   'Origin': 'https://epassport.meituan.com',
    //   'Referer': 'https://epassport.meituan.com/',
    //   'yoda-language': 'zh-CN',
    // }
  }
};




if(isNode){
  exports.slide = window.yodaSlide;
}
