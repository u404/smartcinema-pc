/*! For license information please see output.js.LICENSE.txt */
!(function (n, e) {
  for (var t in e) n[t] = e[t];
})(
  window,
  (function (n) {
    var e = {};
    function t(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return n[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    return (
      (t.m = n),
      (t.c = e),
      (t.d = function (n, e, r) {
        t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: r });
      }),
      (t.r = function (n) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(n, "__esModule", { value: !0 });
      }),
      (t.t = function (n, e) {
        if ((1 & e && (n = t(n)), 8 & e)) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (
          (t.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: n }),
          2 & e && "string" != typeof n)
        )
          for (var o in n)
            t.d(
              r,
              o,
              function (e) {
                return n[e];
              }.bind(null, o)
            );
        return r;
      }),
      (t.n = function (n) {
        var e =
          n && n.__esModule
            ? function () {
                return n.default;
              }
            : function () {
                return n;
              };
        return t.d(e, "a", e), e;
      }),
      (t.o = function (n, e) {
        return {}.hasOwnProperty.call(n, e);
      }),
      (t.p = ""),
      t((t.s = 14))
    );
  })([
    function (n, e, t) {
      "use strict";
      n.exports = function (n) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var t = (function (n, e) {
                var t,
                  r,
                  o = n[1] || "",
                  i = n[3];
                if (!i) return o;
                if (e && "function" == typeof btoa) {
                  var a =
                      ((t = btoa(
                        unescape(encodeURIComponent(JSON.stringify(i)))
                      )),
                      (r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        t
                      )),
                      "/*# ".concat(r, " */")),
                    u = i.sources.map(function (n) {
                      return "/*# sourceURL="
                        .concat(i.sourceRoot || "")
                        .concat(n, " */");
                    });
                  return [o].concat(u).concat([a]).join("\n");
                }
                return [o].join("\n");
              })(e, n);
              return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t;
            }).join("");
          }),
          (e.i = function (n, t, r) {
            "string" == typeof n && (n = [[null, n, ""]]);
            var o = {};
            if (r)
              for (var i = 0; i < this.length; i++) {
                var a = this[i][0];
                null != a && (o[a] = !0);
              }
            for (var u = 0; u < n.length; u++) {
              var l = [].concat(n[u]);
              (r && o[l[0]]) ||
                (t && (l[2] = l[2] ? "".concat(t, " and ").concat(l[2]) : t),
                e.push(l));
            }
          }),
          e
        );
      };
    },
    function (n, e, t) {
      "use strict";
      var r = {};
      function o(n) {
        n.forEach(function (n) {
          if (--r[n] <= 0) {
            var e = document.getElementById(n);
            e && e.parentNode.removeChild(e);
          }
        });
      }
      n.exports = function (n, e) {
        for (
          var t,
            i = void 0 === e ? {} : e,
            a = i.replace,
            u = void 0 !== a && a,
            l = i.prepend,
            c = void 0 !== l && l,
            s = i.prefix,
            d = void 0 === s ? "s" : s,
            f = [],
            p = 0;
          p < n.length;
          p++
        ) {
          var h = n[p],
            m = h[1],
            g = h[2],
            y = h[3],
            w = "" + d + h[0] + "-" + p;
          if ((f.push(w), !r[w] || u)) {
            r[w] = 1;
            var v = document.getElementById(w),
              b = !1;
            v ||
              ((b = !0),
              (v = document.createElement("style")).setAttribute(
                "type",
                "text/css"
              ),
              (v.id = w),
              g && v.setAttribute("media", g));
            var C = m;
            y &&
              "function" == typeof btoa &&
              ((C +=
                "\n/*# sourceMappingURL=data:application/json;base64," +
                ((t = JSON.stringify(y)),
                btoa(
                  encodeURIComponent(t).replace(
                    /%([0-9A-F]{2})/g,
                    function (n, e) {
                      return String.fromCharCode("0x" + e);
                    }
                  )
                ) + "*/")),
              (C += "\n/*# sourceURL=" + y.file + "?" + w + "*/")),
              "textContent" in v
                ? (v.textContent = C)
                : (v.styleSheet.cssText = C),
              b &&
                (c
                  ? document.head.insertBefore(v, document.head.childNodes[0])
                  : document.head.appendChild(v));
          } else r[w]++;
        }
        return o.bind(null, f);
      };
    },
    function (n, e, t) {
      var r = t(9),
        o = t(1),
        i = "string" == typeof r ? [[n.i, r, ""]] : r;
      ((e = n.exports = r.locals || {})._getContent = function () {
        return i;
      }),
        (e._getCss = function () {
          return "" + r;
        }),
        (e._insertCss = function (n) {
          return o(i, n);
        });
    },
    function (n, e, t) {
      var r = t(8),
        o = t(1),
        i = "string" == typeof r ? [[n.i, r, ""]] : r;
      ((e = n.exports = r.locals || {})._getContent = function () {
        return i;
      }),
        (e._getCss = function () {
          return "" + r;
        }),
        (e._insertCss = function (n) {
          return o(i, n);
        });
    },
    function (n, e, t) {
      var r = t(10),
        o = t(1),
        i = "string" == typeof r ? [[n.i, r, ""]] : r;
      ((e = n.exports = r.locals || {})._getContent = function () {
        return i;
      }),
        (e._getCss = function () {
          return "" + r;
        }),
        (e._insertCss = function (n) {
          return o(i, n);
        });
    },
    function (n, e, t) {
      var r = t(11),
        o = t(1),
        i = "string" == typeof r ? [[n.i, r, ""]] : r;
      ((e = n.exports = r.locals || {})._getContent = function () {
        return i;
      }),
        (e._getCss = function () {
          return "" + r;
        }),
        (e._insertCss = function (n) {
          return o(i, n);
        });
    },
    function (n, e, t) {
      var r = t(12),
        o = t(1),
        i = "string" == typeof r ? [[n.i, r, ""]] : r;
      ((e = n.exports = r.locals || {})._getContent = function () {
        return i;
      }),
        (e._getCss = function () {
          return "" + r;
        }),
        (e._insertCss = function (n) {
          return o(i, n);
        });
    },
    function (n, e, t) {
      var r = t(13),
        o = t(1),
        i = "string" == typeof r ? [[n.i, r, ""]] : r;
      ((e = n.exports = r.locals || {})._getContent = function () {
        return i;
      }),
        (e._getCss = function () {
          return "" + r;
        }),
        (e._insertCss = function (n) {
          return o(i, n);
        });
    },
    function (n, e, t) {
      (e = t(0)(!1)).push([
        n.i,
        ".placeholder[data-v-56bb4eac]{display:inline-block;color:transparent;background:#fff;opacity:0.15;border-radius:2px;animation:1s loading-placeholder-data-v-56bb4eac ease-in-out infinite;position:relative;top:10%;height:80%}.placeholder.color-black[data-v-56bb4eac]{background:#000}.placeholder.color-white[data-v-56bb4eac]{background:#fff}@keyframes loading-placeholder-data-v-56bb4eac{0%{opacity:0.15}50%{opacity:0.3}100%{opacity:0.15}}\n",
        "",
      ]),
        (n.exports = e);
    },
    function (n, e, t) {
      (e = t(0)(!1)).push([
        n.i,
        ".wallet-label[data-v-ea5d27f0]{display:block;height:100%;text-align:center}.wallet-label *[data-v-ea5d27f0]{display:inline-block;vertical-align:middle;height:100%}.wallet-label .divider[data-v-ea5d27f0]{margin:0 5px;opacity:0.2}.wallet-label .paypal-wordmark[data-v-ea5d27f0]{display:none}.wallet-label .card-art[data-v-ea5d27f0]{border-radius:3px}.wallet-label .label[data-v-ea5d27f0]{max-width:40%}.wallet-label .label .limit[data-v-ea5d27f0]{display:block;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 249px){.wallet-label .paypal-mark[data-v-ea5d27f0],.wallet-label .paypal-wordmark[data-v-ea5d27f0]{display:inline-block}.wallet-label .label[data-v-ea5d27f0],.wallet-label .divider[data-v-ea5d27f0],.wallet-label .card-art[data-v-ea5d27f0],.wallet-label .pay-label[data-v-ea5d27f0],.wallet-label .logo[data-v-ea5d27f0]{display:none}}.wallet-label-new[data-v-ea5d27f0]{display:flex;height:100%;width:100%;text-align:left}.wallet-label-new *[data-v-ea5d27f0]{display:inline-block;vertical-align:top;height:100%}.wallet-label-new .paypal-wordmark[data-v-ea5d27f0]{display:none}.wallet-label-new .card-art[data-v-ea5d27f0]{border-radius:3px}.wallet-label-new .logo[data-v-ea5d27f0]{margin-left:auto}@media only screen and (max-width: 150px){.wallet-label-new[data-v-ea5d27f0]{text-align:center;display:inline-block}.wallet-label-new .logo[data-v-ea5d27f0]{display:none}.wallet-label-new .pay-label[data-v-ea5d27f0]{display:none}}\n",
        "",
      ]),
        (n.exports = e);
    },
    function (n, e, t) {
      (e = t(0)(!1)).push([
        n.i,
        ".wallet-label-venmo[data-v-f9810cc3]{height:100%;width:100%;text-align:center}.wallet-label-venmo .divider[data-v-f9810cc3]{margin:0 5px;opacity:0.2}.wallet-label-venmo *[data-v-f9810cc3]{display:inline-block;vertical-align:top;height:100%}.wallet-label-venmo .logo[data-v-f9810cc3]{margin-left:auto}.wallet-label-venmo .label[data-v-f9810cc3]{max-width:40%}.wallet-label-venmo .label .limit[data-v-f9810cc3]{display:block;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 150px){.wallet-label-venmo[data-v-f9810cc3]{text-align:center;display:inline-block}.wallet-label-venmo .logo[data-v-f9810cc3]{display:none}}\n",
        "",
      ]),
        (n.exports = e);
    },
    function (n, e, t) {
      (e = t(0)(!1)).push([
        n.i,
        ".paypal-mark .paypal-logo-applepay[data-v-79e3ea8c]{height:30px}\n",
        "",
      ]),
        (n.exports = e);
    },
    function (n, e, t) {
      (e = t(0)(!1)).push([n.i, "", ""]), (n.exports = e);
    },
    function (n, e, t) {
      (e = t(0)(!1)).push([
        n.i,
        ".menu-button[data-v-302115c5]{position:relative;display:inline-block;margin-left:2px;cursor:pointer}.menu-button[data-v-302115c5]:focus{outline:none;box-shadow:0 0 0 2px rgba(50,50,50,0.9) inset}.menu-button img[data-v-302115c5]{height:30%;width:30%;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}\n",
        "",
      ]),
        (n.exports = e);
    },
    function (n, e, t) {
      "use strict";
      t.r(e);
      var r = {};
      t.r(r),
        t.d(r, "FUNDING", function () {
          return nt;
        }),
        t.d(r, "getCorrelationID", function () {
          return at;
        }),
        t.d(r, "setup", function () {
          return tr;
        });
      var o = {};
      t.r(o),
        t.d(o, "Promise", function () {
          return _;
        }),
        t.d(o, "TYPES", function () {
          return Xr;
        }),
        t.d(o, "ProxyWindow", function () {
          return Pr;
        }),
        t.d(o, "setup", function () {
          return Yr;
        }),
        t.d(o, "destroy", function () {
          return Jr;
        }),
        t.d(o, "serializeMessage", function () {
          return qr;
        }),
        t.d(o, "deserializeMessage", function () {
          return Gr;
        }),
        t.d(o, "createProxyWindow", function () {
          return Kr;
        }),
        t.d(o, "toProxyWindow", function () {
          return Vr;
        }),
        t.d(o, "on", function () {
          return Wr;
        }),
        t.d(o, "once", function () {
          return Zr;
        }),
        t.d(o, "send", function () {
          return zr;
        }),
        t.d(o, "markWindowKnown", function () {
          return mr;
        }),
        t.d(o, "cleanUpWindow", function () {
          return $r;
        }),
        t.d(o, "bridge", function () {});
      var i = {};
      t.r(i),
        t.d(i, "Buttons", function () {
          return Ou;
        }),
        t.d(i, "Checkout", function () {
          return Pu;
        }),
        t.d(i, "CardFields", function () {
          return Nu;
        }),
        t.d(i, "Menu", function () {
          return Tu;
        }),
        t.d(i, "Modal", function () {
          return Su;
        }),
        t.d(i, "Installments", function () {
          return ku;
        }),
        t.d(i, "QRCode", function () {
          return _u;
        }),
        t.d(i, "ButtonsTemplate", function () {
          return Au;
        }),
        t.d(i, "PopupOpenError", function () {
          return Fu;
        }),
        t.d(i, "allowIframe", function () {
          return Ru;
        }),
        t.d(i, "forceIframe", function () {
          return Mu;
        }),
        t.d(i, "destroyAll", function () {
          return Iu;
        }),
        t.d(i, "setup", function () {
          return Du;
        }),
        t.d(i, "destroy", function () {
          return ju;
        });
      var a = {};
      t.r(a),
        t.d(a, "ThreeDomainSecure", function () {
          return Bu;
        }),
        t.d(a, "postRobot", function () {
          return Uu;
        });
      var u = {};
      t.r(u),
        t.d(u, "rememberFunding", function () {
          return $i;
        }),
        t.d(u, "getFundingSources", function () {
          return ta;
        }),
        t.d(u, "isFundingEligible", function () {
          return ra;
        });
      var l = {};
      function c(n, e) {
        if (null == n) return {};
        var t,
          r,
          o = {},
          i = Object.keys(n);
        for (r = 0; r < i.length; r++)
          e.indexOf((t = i[r])) >= 0 || (o[t] = n[t]);
        return o;
      }
      t.r(l),
        t.d(l, "setup", function () {
          return Wu;
        });
      var s = {
        926: {
          device: "iPhone 12 Pro Max",
          textSizeHeights: [752, 748, 744, 738],
          zoomHeight: {
            1.15: [752, 747, 744, 738],
            1.25: [753, 748, 744, 738],
            1.5: [752, 749, 744, 738],
            1.75: [753, 747, 744, 739],
            2: [752, 748, 744],
            2.5: [753, 748],
            3: [753, 744],
          },
          maybeSafari: { 2: [738], 2.5: [745, 738], 3: [747, 738] },
        },
        896: {
          device: "iPhone XS Max, iPhone 11 Pro Max, iPhone XR, iPhone 11",
          textSizeHeights: [721, 717, 713, 707],
          zoomHeight: {
            1.15: [721, 716, 713, 707],
            1.25: [721, 718, 713, 708],
            1.5: [722, 717, 713],
            1.75: [721, 718, 712, 707],
            2: [722, 718, 714, 708],
            2.5: [720, 718, 713, 708],
            3: [720, 717, 708],
          },
          maybeSafari: { 1.5: [707], 3: [714] },
        },
        844: {
          device: "iPhone 12, iPhone 12 Pro",
          textSizeHeights: [670, 666, 662, 656],
          zoomHeight: {
            1.15: [670, 666, 662],
            1.25: [670, 666, 663, 656],
            1.5: [671, 666, 662],
            1.75: [670, 667, 662, 656],
            2: [670, 666, 662],
            2.5: [670, 663],
            3: [669, 666, 663, 657],
          },
          maybeSafari: {
            1.15: [656],
            1.5: [656],
            2: [656],
            2.5: [665, 655],
            3: [663],
          },
        },
        812: {
          device: "iPhone X, iPhone XS, iPhone 11 Pro, iPhone 12 Mini",
          textSizeHeights: [641, 637, 633, 627],
          zoomHeight: {
            1.15: [641, 637, 633, 627],
            1.25: [641, 638, 633, 628],
            1.5: [641, 638, 633, 627],
            1.75: [641, 637, 634],
            2: [642, 638, 634, 628],
            2.5: [640, 638, 633, 628],
            3: [642, 633],
          },
          maybeSafari: { 1.75: [627], 3: [636, 627] },
        },
        736: {
          device: "iPhone 6 Plus, iPhone 6S Plus, iPhone 7 Plus, iPhone 8 Plus",
          textSizeHeights: [628, 624, 620, 614],
          zoomHeight: {
            1.15: [628, 624, 620, 614],
            1.25: [628, 624, 620, 614],
            1.5: [629, 624, 620],
            1.75: [628, 625, 620, 614],
            2: [628, 624, 620],
            2.5: [628, 625, 620, 615],
            3: [627, 624, 615],
          },
          maybeSafari: { 1.5: [614], 2: [614], 3: [621] },
        },
        667: {
          device: "iPhone 6, iPhone 6S, iPhone 7, iPhone 8,  iPhone SE2",
          textSizeHeights: [559, 555, 551, 545],
          zoomHeight: {
            1.15: [559, 555, 551, 545],
            1.25: [559, 555, 551, 545],
            1.5: [560, 555, 551],
            1.75: [558, 555, 551],
            2: [560, 556, 552, 546],
            2.5: [560, 555, 550],
            3: [558, 555, 546],
          },
          maybeSafari: { 1.5: [545], 1.75: [544], 2.5: [545], 3: [552] },
        },
      };
      function d() {
        return window.navigator.mockUserAgent || window.navigator.userAgent;
      }
      function f(n) {
        return (
          void 0 === n && (n = d()),
          !!n.match(
            /Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i
          )
        );
      }
      function p(n) {
        return void 0 === n && (n = d()), /Opera Mini/i.test(n);
      }
      function h(n) {
        return void 0 === n && (n = d()), /Android/.test(n);
      }
      function m(n) {
        return void 0 === n && (n = d()), /iPhone|iPod|iPad/.test(n);
      }
      function g(n) {
        return (
          void 0 === n && (n = d()),
          !(
            (function (n) {
              return (
                void 0 === n && (n = d()),
                !!m(n) &&
                  (!!(function (n) {
                    return void 0 === n && (n = d()), /\bGSA\b/.test(n);
                  })(n) ||
                    /.+AppleWebKit(?!.*Safari)|.*WKWebView/.test(n))
              );
            })(n) ||
            (function (n) {
              return (
                void 0 === n && (n = d()),
                !!h(n) && /Version\/[\d.]+/.test(n) && !p(n)
              );
            })(n) ||
            p(n) ||
            (function (n) {
              return void 0 === n && (n = d()), /FxiOS/i.test(n);
            })(n) ||
            (function (n) {
              return void 0 === n && (n = d()), /EdgiOS/i.test(n);
            })(n) ||
            (function (n) {
              return (
                void 0 === n && (n = d()), /FBAN/.test(n) || /FBAV/.test(n)
              );
            })(n) ||
            (function (n) {
              return void 0 === n && (n = d()), /QQBrowser/.test(n);
            })(n) ||
            ("undefined" != typeof process &&
              process.versions &&
              process.versions.electron) ||
            ((e = d()), /Macintosh.*AppleWebKit(?!.*Safari)/i.test(e)) ||
            !0 === window.navigator.standalone ||
            window.matchMedia("(display-mode: standalone)").matches
          )
        );
        var e;
      }
      function y(n) {
        return void 0 === n && (n = d()), /Chrome|Chromium|CriOS/.test(n);
      }
      function w(n) {
        return void 0 === n && (n = d()), /Safari/.test(n) && !y(n);
      }
      function v() {
        try {
          if (
            window.ApplePaySession &&
            window.ApplePaySession.supportsVersion(3) &&
            window.ApplePaySession.canMakePayments()
          )
            return !0;
        } catch (n) {
          return !1;
        }
        return !1;
      }
      function b(n, e) {
        return (b =
          Object.setPrototypeOf ||
          function (n, e) {
            return (n.__proto__ = e), n;
          })(n, e);
      }
      function C(n, e) {
        (n.prototype = Object.create(e.prototype)),
          (n.prototype.constructor = n),
          b(n, e);
      }
      function E() {
        return (E =
          Object.assign ||
          function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var r in t) ({}.hasOwnProperty.call(t, r) && (n[r] = t[r]));
            }
            return n;
          }).apply(this, arguments);
      }
      function L(n) {
        try {
          if (!n) return !1;
          if ("undefined" != typeof Promise && n instanceof Promise) return !0;
          if (
            "undefined" != typeof window &&
            "function" == typeof window.Window &&
            n instanceof window.Window
          )
            return !1;
          if (
            "undefined" != typeof window &&
            "function" == typeof window.constructor &&
            n instanceof window.constructor
          )
            return !1;
          var e = {}.toString;
          if (e) {
            var t = e.call(n);
            if (
              "[object Window]" === t ||
              "[object global]" === t ||
              "[object DOMWindow]" === t
            )
              return !1;
          }
          if ("function" == typeof n.then) return !0;
        } catch (n) {
          return !1;
        }
        return !1;
      }
      var x,
        O = [],
        P = [],
        N = 0;
      function T() {
        if (!N && x) {
          var n = x;
          (x = null), n.resolve();
        }
      }
      function S() {
        N += 1;
      }
      function k() {
        (N -= 1), T();
      }
      var _ = (function () {
        function n(n) {
          var e = this;
          if (
            ((this.resolved = void 0),
            (this.rejected = void 0),
            (this.errorHandled = void 0),
            (this.value = void 0),
            (this.error = void 0),
            (this.handlers = void 0),
            (this.dispatching = void 0),
            (this.stack = void 0),
            (this.resolved = !1),
            (this.rejected = !1),
            (this.errorHandled = !1),
            (this.handlers = []),
            n)
          ) {
            var t,
              r,
              o = !1,
              i = !1,
              a = !1;
            S();
            try {
              n(
                function (n) {
                  a ? e.resolve(n) : ((o = !0), (t = n));
                },
                function (n) {
                  a ? e.reject(n) : ((i = !0), (r = n));
                }
              );
            } catch (n) {
              return k(), void this.reject(n);
            }
            k(), (a = !0), o ? this.resolve(t) : i && this.reject(r);
          }
        }
        var e = n.prototype;
        return (
          (e.resolve = function (n) {
            if (this.resolved || this.rejected) return this;
            if (L(n))
              throw new Error("Can not resolve promise with another promise");
            return (
              (this.resolved = !0), (this.value = n), this.dispatch(), this
            );
          }),
          (e.reject = function (n) {
            var e = this;
            if (this.resolved || this.rejected) return this;
            if (L(n))
              throw new Error("Can not reject promise with another promise");
            if (!n) {
              var t =
                n && "function" == typeof n.toString
                  ? n.toString()
                  : {}.toString.call(n);
              n = new Error(
                "Expected reject to be called with Error, got " + t
              );
            }
            return (
              (this.rejected = !0),
              (this.error = n),
              this.errorHandled ||
                setTimeout(function () {
                  e.errorHandled ||
                    (function (n, e) {
                      if (-1 === O.indexOf(n)) {
                        O.push(n),
                          setTimeout(function () {
                            throw n;
                          }, 1);
                        for (var t = 0; t < P.length; t++) P[t](n, e);
                      }
                    })(n, e);
                }, 1),
              this.dispatch(),
              this
            );
          }),
          (e.asyncReject = function (n) {
            return (this.errorHandled = !0), this.reject(n), this;
          }),
          (e.dispatch = function () {
            var e = this.resolved,
              t = this.rejected,
              r = this.handlers;
            if (!this.dispatching && (e || t)) {
              (this.dispatching = !0), S();
              for (
                var o = function (n, e) {
                    return n.then(
                      function (n) {
                        e.resolve(n);
                      },
                      function (n) {
                        e.reject(n);
                      }
                    );
                  },
                  i = 0;
                i < r.length;
                i++
              ) {
                var a = r[i],
                  u = a.onSuccess,
                  l = a.onError,
                  c = a.promise,
                  s = void 0;
                if (e)
                  try {
                    s = u ? u(this.value) : this.value;
                  } catch (n) {
                    c.reject(n);
                    continue;
                  }
                else if (t) {
                  if (!l) {
                    c.reject(this.error);
                    continue;
                  }
                  try {
                    s = l(this.error);
                  } catch (n) {
                    c.reject(n);
                    continue;
                  }
                }
                s instanceof n && (s.resolved || s.rejected)
                  ? (s.resolved ? c.resolve(s.value) : c.reject(s.error),
                    (s.errorHandled = !0))
                  : L(s)
                  ? s instanceof n && (s.resolved || s.rejected)
                    ? s.resolved
                      ? c.resolve(s.value)
                      : c.reject(s.error)
                    : o(s, c)
                  : c.resolve(s);
              }
              (r.length = 0), (this.dispatching = !1), k();
            }
          }),
          (e.then = function (e, t) {
            if (e && "function" != typeof e && !e.call)
              throw new Error(
                "Promise.then expected a function for success handler"
              );
            if (t && "function" != typeof t && !t.call)
              throw new Error(
                "Promise.then expected a function for error handler"
              );
            var r = new n();
            return (
              this.handlers.push({ promise: r, onSuccess: e, onError: t }),
              (this.errorHandled = !0),
              this.dispatch(),
              r
            );
          }),
          (e.catch = function (n) {
            return this.then(void 0, n);
          }),
          (e.finally = function (e) {
            if (e && "function" != typeof e && !e.call)
              throw new Error("Promise.finally expected a function");
            return this.then(
              function (t) {
                return n.try(e).then(function () {
                  return t;
                });
              },
              function (t) {
                return n.try(e).then(function () {
                  throw t;
                });
              }
            );
          }),
          (e.timeout = function (n, e) {
            var t = this;
            if (this.resolved || this.rejected) return this;
            var r = setTimeout(function () {
              t.resolved ||
                t.rejected ||
                t.reject(e || new Error("Promise timed out after " + n + "ms"));
            }, n);
            return this.then(function (n) {
              return clearTimeout(r), n;
            });
          }),
          (e.toPromise = function () {
            if ("undefined" == typeof Promise)
              throw new TypeError("Could not find Promise");
            return Promise.resolve(this);
          }),
          (n.resolve = function (e) {
            return e instanceof n
              ? e
              : L(e)
              ? new n(function (n, t) {
                  return e.then(n, t);
                })
              : new n().resolve(e);
          }),
          (n.reject = function (e) {
            return new n().reject(e);
          }),
          (n.asyncReject = function (e) {
            return new n().asyncReject(e);
          }),
          (n.all = function (e) {
            var t = new n(),
              r = e.length,
              o = [];
            if (!r) return t.resolve(o), t;
            for (
              var i = function (n, e, i) {
                  return e.then(
                    function (e) {
                      (o[n] = e), 0 == (r -= 1) && t.resolve(o);
                    },
                    function (n) {
                      i.reject(n);
                    }
                  );
                },
                a = 0;
              a < e.length;
              a++
            ) {
              var u = e[a];
              if (u instanceof n) {
                if (u.resolved) {
                  (o[a] = u.value), (r -= 1);
                  continue;
                }
              } else if (!L(u)) {
                (o[a] = u), (r -= 1);
                continue;
              }
              i(a, n.resolve(u), t);
            }
            return 0 === r && t.resolve(o), t;
          }),
          (n.hash = function (e) {
            var t = {},
              r = [],
              o = function (n) {
                if (e.hasOwnProperty(n)) {
                  var o = e[n];
                  L(o)
                    ? r.push(
                        o.then(function (e) {
                          t[n] = e;
                        })
                      )
                    : (t[n] = o);
                }
              };
            for (var i in e) o(i);
            return n.all(r).then(function () {
              return t;
            });
          }),
          (n.map = function (e, t) {
            return n.all(e.map(t));
          }),
          (n.onPossiblyUnhandledException = function (n) {
            return (function (n) {
              return (
                P.push(n),
                {
                  cancel: function () {
                    P.splice(P.indexOf(n), 1);
                  },
                }
              );
            })(n);
          }),
          (n.try = function (e, t, r) {
            if (e && "function" != typeof e && !e.call)
              throw new Error("Promise.try expected a function");
            var o;
            S();
            try {
              o = e.apply(t, r || []);
            } catch (e) {
              return k(), n.reject(e);
            }
            return k(), n.resolve(o);
          }),
          (n.delay = function (e) {
            return new n(function (n) {
              setTimeout(n, e);
            });
          }),
          (n.isPromise = function (e) {
            return !!(e && e instanceof n) || L(e);
          }),
          (n.flush = function () {
            return (e = x = x || new n()), T(), e;
            var e;
          }),
          n
        );
      })();
      function A(n) {
        return "[object RegExp]" === {}.toString.call(n);
      }
      var F = { IFRAME: "iframe", POPUP: "popup" },
        R = "Call was rejected by callee.\r\n";
      function M(n) {
        return void 0 === n && (n = window), "about:" === n.location.protocol;
      }
      function I(n) {
        if ((void 0 === n && (n = window), n))
          try {
            if (n.parent && n.parent !== n) return n.parent;
          } catch (n) {}
      }
      function D(n) {
        if ((void 0 === n && (n = window), n && !I(n)))
          try {
            return n.opener;
          } catch (n) {}
      }
      function j(n) {
        try {
          return !0;
        } catch (n) {}
        return !1;
      }
      function H(n) {
        void 0 === n && (n = window);
        var e = n.location;
        if (!e) throw new Error("Can not read window location");
        var t = e.protocol;
        if (!t) throw new Error("Can not read window protocol");
        if ("file:" === t) return "file://";
        if ("about:" === t) {
          var r = I(n);
          return r && j() ? H(r) : "about://";
        }
        var o = e.host;
        if (!o) throw new Error("Can not read window host");
        return t + "//" + o;
      }
      function B(n) {
        void 0 === n && (n = window);
        var e = H(n);
        return e && n.mockDomain && 0 === n.mockDomain.indexOf("mock:")
          ? n.mockDomain
          : e;
      }
      function U(n) {
        if (
          !(function (n) {
            try {
              if (n === window) return !0;
            } catch (n) {}
            try {
              var e = Object.getOwnPropertyDescriptor(n, "location");
              if (e && !1 === e.enumerable) return !1;
            } catch (n) {}
            try {
              if (M(n) && j()) return !0;
            } catch (n) {}
            try {
              if (H(n) === H(window)) return !0;
            } catch (n) {}
            return !1;
          })(n)
        )
          return !1;
        try {
          if (n === window) return !0;
          if (M(n) && j()) return !0;
          if (B(window) === B(n)) return !0;
        } catch (n) {}
        return !1;
      }
      function W(n) {
        if (!U(n)) throw new Error("Expected window to be same domain");
        return n;
      }
      function Z(n, e) {
        if (!n || !e) return !1;
        var t = I(e);
        return t
          ? t === n
          : -1 !==
              (function (n) {
                var e = [];
                try {
                  for (; n.parent !== n; ) e.push(n.parent), (n = n.parent);
                } catch (n) {}
                return e;
              })(e).indexOf(n);
      }
      function z(n) {
        var e,
          t,
          r = [];
        try {
          e = n.frames;
        } catch (t) {
          e = n;
        }
        try {
          t = e.length;
        } catch (n) {}
        if (0 === t) return r;
        if (t) {
          for (var o = 0; o < t; o++) {
            var i = void 0;
            try {
              i = e[o];
            } catch (n) {
              continue;
            }
            r.push(i);
          }
          return r;
        }
        for (var a = 0; a < 100; a++) {
          var u = void 0;
          try {
            u = e[a];
          } catch (n) {
            return r;
          }
          if (!u) return r;
          r.push(u);
        }
        return r;
      }
      function q(n) {
        for (var e = [], t = 0, r = z(n); t < r.length; t++) {
          var o = r[t];
          e.push(o);
          for (var i = 0, a = q(o); i < a.length; i++) e.push(a[i]);
        }
        return e;
      }
      function G(n) {
        void 0 === n && (n = window);
        try {
          if (n.top) return n.top;
        } catch (n) {}
        if (I(n) === n) return n;
        try {
          if (Z(window, n) && window.top) return window.top;
        } catch (n) {}
        try {
          if (Z(n, window) && window.top) return window.top;
        } catch (n) {}
        for (var e = 0, t = q(n); e < t.length; e++) {
          var r = t[e];
          try {
            if (r.top) return r.top;
          } catch (n) {}
          if (I(r) === r) return r;
        }
      }
      function K(n) {
        var e = G(n);
        if (!e) throw new Error("Can not determine top window");
        var t = [].concat(q(e), [e]);
        return -1 === t.indexOf(n) && (t = [].concat(t, [n], q(n))), t;
      }
      var V = [],
        Y = [];
      function J(n, e) {
        void 0 === e && (e = !0);
        try {
          if (n === window) return !1;
        } catch (n) {
          return !0;
        }
        try {
          if (!n) return !0;
        } catch (n) {
          return !0;
        }
        try {
          if (n.closed) return !0;
        } catch (n) {
          return !n || n.message !== R;
        }
        if (e && U(n))
          try {
            if (n.mockclosed) return !0;
          } catch (n) {}
        try {
          if (!n.parent || !n.top) return !0;
        } catch (n) {}
        var t = (function (n, e) {
          for (var t = 0; t < n.length; t++)
            try {
              if (n[t] === e) return t;
            } catch (n) {}
          return -1;
        })(V, n);
        if (-1 !== t) {
          var r = Y[t];
          if (
            r &&
            (function (n) {
              if (!n.contentWindow) return !0;
              if (!n.parentNode) return !0;
              var e = n.ownerDocument;
              if (e && e.documentElement && !e.documentElement.contains(n)) {
                for (var t = n; t.parentNode && t.parentNode !== t; )
                  t = t.parentNode;
                if (!t.host || !e.documentElement.contains(t.host)) return !0;
              }
              return !1;
            })(r)
          )
            return !0;
        }
        return !1;
      }
      function X(n) {
        return (
          void 0 === n && (n = window), D((n = n || window)) || I(n) || void 0
        );
      }
      function $(n, e) {
        for (var t = 0; t < n.length; t++)
          for (var r = n[t], o = 0; o < e.length; o++)
            if (r === e[o]) return !0;
        return !1;
      }
      function Q(n) {
        void 0 === n && (n = window);
        for (var e = 0, t = n; t; ) (t = I(t)) && (e += 1);
        return e;
      }
      function nn(n, e) {
        var t = G(n) || n,
          r = G(e) || e;
        try {
          if (t && r) return t === r;
        } catch (n) {}
        var o = K(n),
          i = K(e);
        if ($(o, i)) return !0;
        var a = D(t),
          u = D(r);
        return (a && $(K(a), i)) || (u && $(K(u), o)), !1;
      }
      function en(n, e) {
        if ("string" == typeof n) {
          if ("string" == typeof e) return "*" === n || e === n;
          if (A(e)) return !1;
          if (Array.isArray(e)) return !1;
        }
        return A(n)
          ? A(e)
            ? n.toString() === e.toString()
            : !Array.isArray(e) && Boolean(e.match(n))
          : !!Array.isArray(n) &&
              (Array.isArray(e)
                ? JSON.stringify(n) === JSON.stringify(e)
                : !A(e) &&
                  n.some(function (n) {
                    return en(n, e);
                  }));
      }
      function tn(n) {
        return n.match(/^(https?|mock|file):\/\//)
          ? n.split("/").slice(0, 3).join("/")
          : B();
      }
      function rn(n, e, t, r) {
        var o;
        return (
          void 0 === t && (t = 1e3),
          void 0 === r && (r = 1 / 0),
          (function i() {
            if (J(n)) return o && clearTimeout(o), e();
            r <= 0 ? clearTimeout(o) : ((r -= t), (o = setTimeout(i, t)));
          })(),
          {
            cancel: function () {
              o && clearTimeout(o);
            },
          }
        );
      }
      function on(n) {
        try {
          if (n === window) return !0;
        } catch (n) {
          if (n && n.message === R) return !0;
        }
        try {
          if ("[object Window]" === {}.toString.call(n)) return !0;
        } catch (n) {
          if (n && n.message === R) return !0;
        }
        try {
          if (window.Window && n instanceof window.Window) return !0;
        } catch (n) {
          if (n && n.message === R) return !0;
        }
        try {
          if (n && n.self === n) return !0;
        } catch (n) {
          if (n && n.message === R) return !0;
        }
        try {
          if (n && n.parent === n) return !0;
        } catch (n) {
          if (n && n.message === R) return !0;
        }
        try {
          if (n && n.top === n) return !0;
        } catch (n) {
          if (n && n.message === R) return !0;
        }
        try {
          if (
            n &&
            "__unlikely_value__" === n.__cross_domain_utils_window_check__
          )
            return !1;
        } catch (n) {
          return !0;
        }
        try {
          if ("postMessage" in n && "self" in n && "location" in n) return !0;
        } catch (n) {}
        return !1;
      }
      function an(n) {
        try {
          n.close();
        } catch (n) {}
      }
      function un(n, e) {
        for (var t = 0; t < n.length; t++)
          try {
            if (n[t] === e) return t;
          } catch (n) {}
        return -1;
      }
      var ln,
        cn = (function () {
          function n() {
            if (
              ((this.name = void 0),
              (this.weakmap = void 0),
              (this.keys = void 0),
              (this.values = void 0),
              (this.name = "__weakmap_" + ((1e9 * Math.random()) >>> 0) + "__"),
              (function () {
                if ("undefined" == typeof WeakMap) return !1;
                if (void 0 === Object.freeze) return !1;
                try {
                  var n = new WeakMap(),
                    e = {};
                  return (
                    Object.freeze(e),
                    n.set(e, "__testvalue__"),
                    "__testvalue__" === n.get(e)
                  );
                } catch (n) {
                  return !1;
                }
              })())
            )
              try {
                this.weakmap = new WeakMap();
              } catch (n) {}
            (this.keys = []), (this.values = []);
          }
          var e = n.prototype;
          return (
            (e._cleanupClosedWindows = function () {
              for (
                var n = this.weakmap, e = this.keys, t = 0;
                t < e.length;
                t++
              ) {
                var r = e[t];
                if (on(r) && J(r)) {
                  if (n)
                    try {
                      n.delete(r);
                    } catch (n) {}
                  e.splice(t, 1), this.values.splice(t, 1), (t -= 1);
                }
              }
            }),
            (e.isSafeToReadWrite = function (n) {
              return !on(n);
            }),
            (e.set = function (n, e) {
              if (!n) throw new Error("WeakMap expected key");
              var t = this.weakmap;
              if (t)
                try {
                  t.set(n, e);
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var r = this.name,
                    o = n[r];
                  return void (o && o[0] === n
                    ? (o[1] = e)
                    : Object.defineProperty(n, r, {
                        value: [n, e],
                        writable: !0,
                      }));
                } catch (n) {}
              this._cleanupClosedWindows();
              var i = this.keys,
                a = this.values,
                u = un(i, n);
              -1 === u ? (i.push(n), a.push(e)) : (a[u] = e);
            }),
            (e.get = function (n) {
              if (!n) throw new Error("WeakMap expected key");
              var e = this.weakmap;
              if (e)
                try {
                  if (e.has(n)) return e.get(n);
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var t = n[this.name];
                  return t && t[0] === n ? t[1] : void 0;
                } catch (n) {}
              this._cleanupClosedWindows();
              var r = un(this.keys, n);
              if (-1 !== r) return this.values[r];
            }),
            (e.delete = function (n) {
              if (!n) throw new Error("WeakMap expected key");
              var e = this.weakmap;
              if (e)
                try {
                  e.delete(n);
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var t = n[this.name];
                  t && t[0] === n && (t[0] = t[1] = void 0);
                } catch (n) {}
              this._cleanupClosedWindows();
              var r = this.keys,
                o = un(r, n);
              -1 !== o && (r.splice(o, 1), this.values.splice(o, 1));
            }),
            (e.has = function (n) {
              if (!n) throw new Error("WeakMap expected key");
              var e = this.weakmap;
              if (e)
                try {
                  if (e.has(n)) return !0;
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var t = n[this.name];
                  return !(!t || t[0] !== n);
                } catch (n) {}
              return this._cleanupClosedWindows(), -1 !== un(this.keys, n);
            }),
            (e.getOrSet = function (n, e) {
              if (this.has(n)) return this.get(n);
              var t = e();
              return this.set(n, t), t;
            }),
            n
          );
        })();
      function sn(n) {
        return (sn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
      }
      function dn() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (n) {
          return !1;
        }
      }
      function fn(n, e, t) {
        return (fn = dn()
          ? Reflect.construct
          : function (n, e, t) {
              var r = [null];
              r.push.apply(r, e);
              var o = new (Function.bind.apply(n, r))();
              return t && b(o, t.prototype), o;
            }).apply(null, arguments);
      }
      function pn(n) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (pn = function (n) {
          if (
            null === n ||
            -1 === Function.toString.call(n).indexOf("[native code]")
          )
            return n;
          if ("function" != typeof n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== e) {
            if (e.has(n)) return e.get(n);
            e.set(n, t);
          }
          function t() {
            return fn(n, arguments, sn(this).constructor);
          }
          return (
            (t.prototype = Object.create(n.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            b(t, n)
          );
        })(n);
      }
      function hn(n) {
        return n.name || n.__name__ || n.displayName || "anonymous";
      }
      function mn(n, e) {
        try {
          delete n.name, (n.name = e);
        } catch (n) {}
        return (n.__name__ = n.displayName = e), n;
      }
      function gn(n) {
        if ("function" == typeof btoa)
          return btoa(
            encodeURIComponent(n).replace(/%([0-9A-F]{2})/g, function (n, e) {
              return String.fromCharCode(parseInt(e, 16));
            })
          ).replace(/[=]/g, "");
        if ("undefined" != typeof Buffer)
          return Buffer.from(n, "utf8").toString("base64").replace(/[=]/g, "");
        throw new Error("Can not find window.btoa or Buffer");
      }
      function yn(n) {
        if ("function" == typeof atob)
          return decodeURIComponent(
            [].map
              .call(atob(n), function (n) {
                return "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2);
              })
              .join("")
          );
        if ("undefined" != typeof Buffer)
          return Buffer.from(n, "base64").toString("utf8");
        throw new Error("Can not find window.atob or Buffer");
      }
      function wn() {
        var n = "0123456789abcdef";
        return (
          "uid_" +
          "xxxxxxxxxx".replace(/./g, function () {
            return n.charAt(Math.floor(Math.random() * n.length));
          }) +
          "_" +
          gn(new Date().toISOString().slice(11, 19).replace("T", "."))
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase()
        );
      }
      function vn() {
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("No global found");
      }
      function bn(n) {
        try {
          return JSON.stringify([].slice.call(n), function (n, e) {
            return "function" == typeof e
              ? "memoize[" +
                  (function (n) {
                    if (
                      ((ln = ln || new cn()),
                      null == n ||
                        ("object" != typeof n && "function" != typeof n))
                    )
                      throw new Error("Invalid object");
                    var e = ln.get(n);
                    return e || ((e = typeof n + ":" + wn()), ln.set(n, e)), e;
                  })(e) +
                  "]"
              : e;
          });
        } catch (n) {
          throw new Error(
            "Arguments not serializable -- can not be used to memoize"
          );
        }
      }
      function Cn() {
        return {};
      }
      var En = 0,
        Ln = 0;
      function xn(n, e) {
        void 0 === e && (e = {});
        var t,
          r,
          o = e.thisNamespace,
          i = void 0 !== o && o,
          a = e.time,
          u = En;
        En += 1;
        var l = function () {
          for (var e = arguments.length, o = new Array(e), l = 0; l < e; l++)
            o[l] = arguments[l];
          var c;
          u < Ln && ((t = null), (r = null), (u = En), (En += 1)),
            (c = i ? (r = r || new cn()).getOrSet(this, Cn) : (t = t || {}));
          var s = bn(o),
            d = c[s];
          if (
            (d && a && Date.now() - d.time < a && (delete c[s], (d = null)), d)
          )
            return d.value;
          var f = Date.now(),
            p = n.apply(this, arguments);
          return (c[s] = { time: f, value: p }), p;
        };
        return (
          (l.reset = function () {
            (t = null), (r = null);
          }),
          mn(l, (e.name || hn(n)) + "::memoized")
        );
      }
      function On(n) {
        var e = {};
        function t() {
          for (
            var t = arguments,
              r = this,
              o = arguments.length,
              i = new Array(o),
              a = 0;
            a < o;
            a++
          )
            i[a] = arguments[a];
          var u = bn(i);
          return (
            e.hasOwnProperty(u) ||
              (e[u] = _.try(function () {
                return n.apply(r, t);
              }).finally(function () {
                delete e[u];
              })),
            e[u]
          );
        }
        return (
          (t.reset = function () {
            e = {};
          }),
          mn(t, hn(n) + "::promiseMemoized")
        );
      }
      function Pn(n, e, t) {
        void 0 === t && (t = []);
        var r = (n.__inline_memoize_cache__ = n.__inline_memoize_cache__ || {}),
          o = bn(t);
        return r.hasOwnProperty(o) ? r[o] : (r[o] = e.apply(void 0, t));
      }
      function Nn() {}
      function Tn(n) {
        var e = !1;
        return mn(function () {
          if (!e) return (e = !0), n.apply(this, arguments);
        }, hn(n) + "::once");
      }
      function Sn(n, e) {
        if ((void 0 === e && (e = 1), e >= 3))
          return "stringifyError stack overflow";
        try {
          if (!n) return "<unknown error: " + {}.toString.call(n) + ">";
          if ("string" == typeof n) return n;
          if (n instanceof Error) {
            var t = n && n.stack,
              r = n && n.message;
            if (t && r) return -1 !== t.indexOf(r) ? t : r + "\n" + t;
            if (t) return t;
            if (r) return r;
          }
          return n && n.toString && "function" == typeof n.toString
            ? n.toString()
            : {}.toString.call(n);
        } catch (n) {
          return "Error while stringifying error: " + Sn(n, e + 1);
        }
      }
      function kn(n) {
        var e = "<unknown error: " + {}.toString.call(n) + ">";
        return n
          ? n instanceof Error
            ? n.message || e
            : ("string" == typeof n.message && n.message) || e
          : e;
      }
      function _n(n) {
        return "string" == typeof n
          ? n
          : n && n.toString && "function" == typeof n.toString
          ? n.toString()
          : {}.toString.call(n);
      }
      function An(n, e) {
        if (!e) return n;
        if (Object.assign) return Object.assign(n, e);
        for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
        return n;
      }
      xn.clear = function () {
        Ln = En;
      };
      var Fn = function (n) {
        if (Object.values) return Object.values(n);
        var e = [];
        for (var t in n) n.hasOwnProperty(t) && e.push(n[t]);
        return e;
      };
      function Rn(n, e) {
        return Math.round((n * e) / 100);
      }
      function Mn() {
        return Math.max.apply(Math, arguments);
      }
      function In(n) {
        return "data:image/svg+xml;base64," + gn(n);
      }
      function Dn(n, e) {
        void 0 === e && (e = Boolean);
        var t = {};
        for (var r in n) n.hasOwnProperty(r) && e(n[r], r) && (t[r] = n[r]);
        return t;
      }
      function jn(n) {
        return n;
      }
      function Hn(n, e) {
        var t;
        return (
          (function r() {
            t = setTimeout(function () {
              n(), r();
            }, e);
          })(),
          {
            cancel: function () {
              clearTimeout(t);
            },
          }
        );
      }
      function Bn() {
        var n = {},
          e = {};
        return {
          on: function (n, t) {
            var r = (e[n] = e[n] || []);
            r.push(t);
            var o = !1;
            return {
              cancel: function () {
                o || ((o = !0), r.splice(r.indexOf(t), 1));
              },
            };
          },
          once: function (n, e) {
            var t = this.on(n, function () {
              t.cancel(), e();
            });
            return t;
          },
          trigger: function (n) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
              o < t;
              o++
            )
              r[o - 1] = arguments[o];
            var i = e[n],
              a = [];
            if (i)
              for (
                var u = function (n) {
                    var e = i[n];
                    a.push(
                      _.try(function () {
                        return e.apply(void 0, r);
                      })
                    );
                  },
                  l = 0;
                l < i.length;
                l++
              )
                u(l);
            return _.all(a).then(Nn);
          },
          triggerOnce: function (e) {
            if (n[e]) return _.resolve();
            n[e] = !0;
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
              o < t;
              o++
            )
              r[o - 1] = arguments[o];
            return this.trigger.apply(this, [e].concat(r));
          },
          reset: function () {
            e = {};
          },
        };
      }
      function Un(n) {
        return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
      }
      function Wn(n, e, t) {
        if (Array.isArray(n)) {
          if ("number" != typeof e)
            throw new TypeError("Array key must be number");
        } else if ("object" == typeof n && null !== n && "string" != typeof e)
          throw new TypeError("Object key must be string");
        Object.defineProperty(n, e, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            delete n[e];
            var r = t();
            return (n[e] = r), r;
          },
          set: function (t) {
            delete n[e], (n[e] = t);
          },
        });
      }
      function Zn(n) {
        return [].slice.call(n);
      }
      function zn(n) {
        return (
          "object" == typeof (e = n) &&
          null !== e &&
          "[object Object]" === {}.toString.call(n)
        );
        var e;
      }
      function qn(n) {
        if (!zn(n)) return !1;
        var e = n.constructor;
        if ("function" != typeof e) return !1;
        var t = e.prototype;
        return !!zn(t) && !!t.hasOwnProperty("isPrototypeOf");
      }
      function Gn(n, e, t) {
        if ((void 0 === t && (t = ""), Array.isArray(n))) {
          for (
            var r = n.length,
              o = [],
              i = function (r) {
                Wn(o, r, function () {
                  var o = t ? t + "." + r : "" + r,
                    i = e(n[r], r, o);
                  return (qn(i) || Array.isArray(i)) && (i = Gn(i, e, o)), i;
                });
              },
              a = 0;
            a < r;
            a++
          )
            i(a);
          return o;
        }
        if (qn(n)) {
          var u = {},
            l = function (r) {
              if (!n.hasOwnProperty(r)) return "continue";
              Wn(u, r, function () {
                var o = t ? t + "." + r : "" + r,
                  i = e(n[r], r, o);
                return (qn(i) || Array.isArray(i)) && (i = Gn(i, e, o)), i;
              });
            };
          for (var c in n) l(c);
          return u;
        }
        throw new Error("Pass an object or array");
      }
      function Kn(n) {
        return null != n;
      }
      function Vn(n) {
        return "[object RegExp]" === {}.toString.call(n);
      }
      function Yn(n, e, t) {
        if (n.hasOwnProperty(e)) return n[e];
        var r = t();
        return (n[e] = r), r;
      }
      function Jn(n) {
        var e,
          t = [],
          r = !1;
        return {
          set: function (e, t) {
            return (
              r ||
                ((n[e] = t),
                this.register(function () {
                  delete n[e];
                })),
              t
            );
          },
          register: function (n) {
            r
              ? n(e)
              : t.push(
                  Tn(function () {
                    return n(e);
                  })
                );
          },
          all: function (n) {
            e = n;
            var o = [];
            for (r = !0; t.length; ) {
              var i = t.shift();
              o.push(i());
            }
            return _.all(o).then(Nn);
          },
        };
      }
      function Xn(n, e) {
        if (null == e) throw new Error("Expected " + n + " to be present");
        return e;
      }
      xn(Fn);
      var $n = (function (n) {
        function e(e) {
          var t;
          return (
            ((t = n.call(this, e) || this).name = t.constructor.name),
            "function" == typeof Error.captureStackTrace
              ? Error.captureStackTrace(
                  (function (n) {
                    if (void 0 === n)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return n;
                  })(t),
                  t.constructor
                )
              : (t.stack = new Error(e).stack),
            t
          );
        }
        return C(e, n), e;
      })(pn(Error));
      function Qn() {
        return Boolean(document.body) && "complete" === document.readyState;
      }
      function ne() {
        return Boolean(document.body) && "interactive" === document.readyState;
      }
      function ee(n) {
        return encodeURIComponent(n);
      }
      function te() {
        return Pn(te, function () {
          return new _(function (n) {
            Qn() && n(),
              window.addEventListener("load", function () {
                return n();
              });
          });
        });
      }
      function re(n) {
        return Pn(
          re,
          function () {
            var e = {};
            if (!n) return e;
            if (-1 === n.indexOf("=")) return e;
            for (var t = 0, r = n.split("&"); t < r.length; t++) {
              var o = r[t];
              (o = o.split("="))[0] &&
                o[1] &&
                (e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]));
            }
            return e;
          },
          [n]
        );
      }
      function oe(n, e) {
        return (
          void 0 === e && (e = {}),
          e && Object.keys(e).length
            ? (void 0 === (t = E({}, re(n), e)) && (t = {}),
              Object.keys(t)
                .filter(function (n) {
                  return "string" == typeof t[n] || "boolean" == typeof t[n];
                })
                .map(function (n) {
                  var e = t[n];
                  if ("string" != typeof e && "boolean" != typeof e)
                    throw new TypeError("Invalid type for query");
                  return ee(n) + "=" + ee(e.toString());
                })
                .join("&"))
            : n
        );
        var t;
      }
      function ie(n, e) {
        var t,
          r,
          o = e.query || {},
          i = e.hash || {},
          a = n.split("#");
        r = a[1];
        var u = (t = a[0]).split("?");
        t = u[0];
        var l = oe(u[1], o),
          c = oe(r, i);
        return l && (t = t + "?" + l), c && (t = t + "#" + c), t;
      }
      function ae() {
        return Pn(ae, function () {
          var n = window.performance;
          if (
            n &&
            n.now &&
            n.timing &&
            n.timing.connectEnd &&
            n.timing.navigationStart &&
            Math.abs(n.now() - Date.now()) > 1e3 &&
            n.now() - (n.timing.connectEnd - n.timing.navigationStart) > 0
          )
            return n;
        });
      }
      function ue() {
        return "undefined" != typeof window && void 0 !== window.location;
      }
      function le() {
        return Pn(le, function () {
          try {
            if ("undefined" == typeof window) return !1;
            if (window.localStorage) {
              var n = Math.random().toString();
              window.localStorage.setItem("__test__localStorage__", n);
              var e = window.localStorage.getItem("__test__localStorage__");
              if (
                (window.localStorage.removeItem("__test__localStorage__"),
                n === e)
              )
                return !0;
            }
          } catch (n) {}
          return !1;
        });
      }
      function ce() {
        var n = window.navigator,
          e = n.languages ? [].concat(n.languages) : [];
        return (
          n.language && e.push(n.language),
          n.userLanguage && e.push(n.userLanguage),
          e
            .map(function (n) {
              if (n && n.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
                var e = n.split(/[-_]/);
                return { country: e[1], lang: e[0] };
              }
              return n && n.match(/^[a-z]{2}$/) ? { lang: n } : null;
            })
            .filter(Boolean)
        );
      }
      function se(n, e) {
        n.appendChild(e);
      }
      function de(n) {
        return (
          n instanceof window.Element ||
          (null !== n &&
            "object" == typeof n &&
            1 === n.nodeType &&
            "object" == typeof n.style &&
            "object" == typeof n.ownerDocument)
        );
      }
      function fe(n, e) {
        return (
          void 0 === e && (e = document),
          de(n) ? n : "string" == typeof n ? e.querySelector(n) : void 0
        );
      }
      function pe(n, e) {
        void 0 === e && (e = document);
        var t = fe(n, e);
        if (t) return t;
        throw new Error("Can not find element: " + _n(n));
      }
      function he(n) {
        return new _(function (e, t) {
          var r = _n(n),
            o = fe(n);
          if (o) return e(o);
          if (Qn())
            return t(
              new Error(
                "Document is ready and element " + r + " does not exist"
              )
            );
          var i = setInterval(function () {
            return (o = fe(n))
              ? (clearInterval(i), e(o))
              : Qn()
              ? (clearInterval(i),
                t(
                  new Error(
                    "Document is ready and element " + r + " does not exist"
                  )
                ))
              : void 0;
          }, 10);
        });
      }
      xn(function () {
        return new _(function (n) {
          if (Qn() || ne()) return n();
          var e = setInterval(function () {
            if (Qn() || ne()) return clearInterval(e), n();
          }, 10);
        });
      });
      var me,
        ge = (function (n) {
          function e() {
            return n.apply(this, arguments) || this;
          }
          return C(e, n), e;
        })($n);
      function ye(n, e) {
        var t = (e = e || {}).width,
          r = e.height,
          o = 0,
          i = 0;
        t &&
          (window.outerWidth
            ? (i = Math.round((window.outerWidth - t) / 2) + window.screenX)
            : window.screen.width &&
              (i = Math.round((window.screen.width - t) / 2))),
          r &&
            (window.outerHeight
              ? (o = Math.round((window.outerHeight - r) / 2) + window.screenY)
              : window.screen.height &&
                (o = Math.round((window.screen.height - r) / 2))),
          t &&
            r &&
            (e = E(
              {
                top: o,
                left: i,
                width: t,
                height: r,
                status: 1,
                toolbar: 0,
                menubar: 0,
                resizable: 1,
                scrollbars: 1,
              },
              e
            ));
        var a = e.name || "";
        delete e.name;
        var u,
          l,
          c = Object.keys(e)
            .map(function (n) {
              if (null != e[n]) return n + "=" + _n(e[n]);
            })
            .filter(Boolean)
            .join(",");
        try {
          u = window.open(n, a, c);
        } catch (l) {
          throw new ge("Can not open popup window - " + (l.stack || l.message));
        }
        if (J(u)) throw new ge("Can not open popup window - blocked");
        return (
          window.addEventListener("unload", function () {
            return u.close();
          }),
          u
        );
      }
      function we(n, e) {
        var t = e.tagName.toLowerCase();
        if ("html" !== t)
          throw new Error("Expected element to be html, got " + t);
        for (
          var r = n.document.documentElement, o = 0, i = Zn(r.children);
          o < i.length;
          o++
        )
          r.removeChild(i[o]);
        for (var a = 0, u = Zn(e.children); a < u.length; a++)
          r.appendChild(u[a]);
      }
      function ve(n) {
        if ((me = me || new cn()).has(n)) {
          var e = me.get(n);
          if (e) return e;
        }
        var t = new _(function (e, t) {
          n.addEventListener("load", function () {
            (function (n) {
              if (
                ((function () {
                  for (var n = 0; n < V.length; n++) {
                    var e = !1;
                    try {
                      e = V[n].closed;
                    } catch (n) {}
                    e && (Y.splice(n, 1), V.splice(n, 1));
                  }
                })(),
                n && n.contentWindow)
              )
                try {
                  V.push(n.contentWindow), Y.push(n);
                } catch (n) {}
            })(n),
              e(n);
          }),
            n.addEventListener("error", function (r) {
              n.contentWindow ? e(n) : t(r);
            });
        });
        return me.set(n, t), t;
      }
      function be(n) {
        return ve(n).then(function (n) {
          if (!n.contentWindow)
            throw new Error("Could not find window in iframe");
          return n.contentWindow;
        });
      }
      function Ce(n, e) {
        void 0 === n && (n = {});
        var t = n.style || {},
          r = (function (n, e, t) {
            void 0 === n && (n = "div"),
              void 0 === e && (e = {}),
              (n = n.toLowerCase());
            var r,
              o,
              i,
              a = document.createElement(n);
            if (
              (e.style && An(a.style, e.style),
              e.class && (a.className = e.class.join(" ")),
              e.id && a.setAttribute("id", e.id),
              e.attributes)
            )
              for (
                var u = 0, l = Object.keys(e.attributes);
                u < l.length;
                u++
              ) {
                var c = l[u];
                a.setAttribute(c, e.attributes[c]);
              }
            if (
              (e.styleSheet &&
                ((r = a),
                (o = e.styleSheet),
                void 0 === i && (i = window.document),
                r.styleSheet
                  ? (r.styleSheet.cssText = o)
                  : r.appendChild(i.createTextNode(o))),
              e.html)
            ) {
              if ("iframe" === n)
                throw new Error(
                  "Iframe html can not be written unless container provided and iframe in DOM"
                );
              a.innerHTML = e.html;
            }
            return a;
          })("iframe", {
            attributes: E({ allowTransparency: "true" }, n.attributes || {}),
            style: E({ backgroundColor: "transparent", border: "none" }, t),
            html: n.html,
            class: n.class,
          }),
          o = window.navigator.userAgent.match(/MSIE|Edge/i);
        return (
          r.hasAttribute("id") || r.setAttribute("id", wn()),
          ve(r),
          e && pe(e).appendChild(r),
          (n.url || o) && r.setAttribute("src", n.url || "about:blank"),
          r
        );
      }
      function Ee(n, e, t) {
        return (
          n.addEventListener(e, t),
          {
            cancel: function () {
              n.removeEventListener(e, t);
            },
          }
        );
      }
      function Le(n, e, t) {
        t = Tn(t);
        for (var r = 0; r < e.length; r++) n.addEventListener(e[r], t);
        return {
          cancel: Tn(function () {
            for (var r = 0; r < e.length; r++) n.removeEventListener(e[r], t);
          }),
        };
      }
      var xe = ["webkit", "moz", "ms", "o"],
        Oe = [
          "animationstart",
          "webkitAnimationStart",
          "oAnimationStart",
          "MSAnimationStart",
        ],
        Pe = [
          "animationend",
          "webkitAnimationEnd",
          "oAnimationEnd",
          "MSAnimationEnd",
        ];
      function Ne(n, e, t, r) {
        return (
          void 0 === r && (r = 1e3),
          new _(function (o, i) {
            var a = pe(n);
            if (!a) return o();
            var u,
              l,
              c,
              s,
              d = !1;
            function f() {
              clearTimeout(u), clearTimeout(l), c.cancel(), s.cancel();
            }
            (c = Le(a, Oe, function (n) {
              n.target === a &&
                n.animationName === e &&
                (clearTimeout(u),
                n.stopPropagation(),
                c.cancel(),
                (d = !0),
                (l = setTimeout(function () {
                  f(), o();
                }, r)));
            })),
              (s = Le(a, Pe, function (n) {
                if (n.target === a && n.animationName === e)
                  return (
                    f(),
                    "string" == typeof n.animationName && n.animationName !== e
                      ? i(
                          "Expected animation name to be " +
                            e +
                            ", found " +
                            n.animationName
                        )
                      : o()
                  );
              })),
              (function (n, e, t) {
                n.style[e] = t;
                for (var r = Un(e), o = 0; o < xe.length; o++)
                  n.style["" + xe[o] + r] = t;
              })(a, "animationName", e),
              (u = setTimeout(function () {
                if (!d) return f(), o();
              }, 200)),
              t && t(f);
          })
        );
      }
      function Te(n) {
        n.style.setProperty("display", "");
      }
      function Se(n) {
        n.style.setProperty("display", "none", "important");
      }
      function ke(n) {
        n && n.parentNode && n.parentNode.removeChild(n);
      }
      function _e(n) {
        return !(
          n &&
          n.parentNode &&
          n.ownerDocument &&
          n.ownerDocument.documentElement &&
          n.ownerDocument.documentElement.contains(n)
        );
      }
      function Ae(n, e, t) {
        var r = void 0 === t ? {} : t,
          o = r.width,
          i = void 0 === o || o,
          a = r.height,
          u = void 0 === a || a,
          l = r.interval,
          c = void 0 === l ? 100 : l,
          s = r.win,
          d = void 0 === s ? window : s,
          f = n.offsetWidth,
          p = n.offsetHeight,
          h = !1;
        e({ width: f, height: p });
        var m,
          g,
          y = function () {
            if (
              !h &&
              (function (n) {
                return Boolean(
                  n.offsetWidth || n.offsetHeight || n.getClientRects().length
                );
              })(n)
            ) {
              var t = n.offsetWidth,
                r = n.offsetHeight;
              ((i && t !== f) || (u && r !== p)) && e({ width: t, height: r }),
                (f = t),
                (p = r);
            }
          };
        return (
          d.addEventListener("resize", y),
          void 0 !== d.ResizeObserver
            ? ((m = new d.ResizeObserver(y)).observe(n), (g = Hn(y, 10 * c)))
            : void 0 !== d.MutationObserver
            ? ((m = new d.MutationObserver(y)).observe(n, {
                attributes: !0,
                childList: !0,
                subtree: !0,
                characterData: !1,
              }),
              (g = Hn(y, 10 * c)))
            : (g = Hn(y, c)),
          {
            cancel: function () {
              (h = !0),
                m.disconnect(),
                window.removeEventListener("resize", y),
                g.cancel();
            },
          }
        );
      }
      function Fe(n) {
        for (; n.parentNode; ) n = n.parentNode;
        return "[object ShadowRoot]" === n.toString();
      }
      var Re = "undefined" != typeof document ? document.currentScript : null,
        Me = xn(function () {
          if (Re) return Re;
          if (
            (Re = (function () {
              try {
                var n = (function () {
                    try {
                      throw new Error("_");
                    } catch (n) {
                      return n.stack || "";
                    }
                  })(),
                  e = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(n),
                  t = e && e[1];
                if (!t) return;
                for (
                  var r = 0,
                    o = [].slice
                      .call(document.getElementsByTagName("script"))
                      .reverse();
                  r < o.length;
                  r++
                ) {
                  var i = o[r];
                  if (i.src && i.src === t) return i;
                }
              } catch (n) {}
            })())
          )
            return Re;
          throw new Error("Can not determine current script");
        }),
        Ie = wn(),
        De = xn(function () {
          var n;
          try {
            n = Me();
          } catch (n) {
            return Ie;
          }
          var e = n.getAttribute("data-uid");
          if (e && "string" == typeof e) return e;
          if ((e = n.getAttribute("data-uid-auto")) && "string" == typeof e)
            return e;
          if (n.src) {
            var t = (function (n) {
              for (var e = "", t = 0; t < n.length; t++) {
                var r = n[t].charCodeAt(0) * t;
                n[t + 1] && (r += n[t + 1].charCodeAt(0) * (t - 1)),
                  (e += String.fromCharCode(97 + (Math.abs(r) % 26)));
              }
              return e;
            })(JSON.stringify({ src: n.src, dataset: n.dataset }));
            e = "uid_" + t.slice(t.length - 30);
          } else e = wn();
          return n.setAttribute("data-uid-auto", e), e;
        });
      function je(n) {
        var e = n.name,
          t = n.lifetime,
          r = void 0 === t ? 12e5 : t;
        return Pn(
          je,
          function () {
            var n,
              t = "__" + e + "_storage__",
              o = wn();
            function i(e) {
              var r,
                i = le();
              if ((n && (r = n), !r && i)) {
                var a = window.localStorage.getItem(t);
                a && (r = JSON.parse(a));
              }
              r || (r = vn()[t]),
                r || (r = { id: o }),
                r.id || (r.id = o),
                (n = r);
              var u = e(r);
              return (
                i
                  ? window.localStorage.setItem(t, JSON.stringify(r))
                  : (vn()[t] = r),
                (n = null),
                u
              );
            }
            function a() {
              return i(function (n) {
                return n.id;
              });
            }
            function u(n) {
              return i(function (e) {
                var t = e.__session__,
                  o = Date.now();
                return (
                  t && o - t.created > r && (t = null),
                  t || (t = { guid: wn(), created: o }),
                  (e.__session__ = t),
                  n(t)
                );
              });
            }
            return {
              getState: i,
              getID: a,
              isStateFresh: function () {
                return a() === o;
              },
              getSessionState: function (n) {
                return u(function (e) {
                  return (e.state = e.state || {}), n(e.state);
                });
              },
              getSessionID: function () {
                return u(function (n) {
                  return n.guid;
                });
              },
            };
          },
          [{ name: e, lifetime: r }]
        );
      }
      function He() {
        return je({ name: "belter_experiment" });
      }
      function Be(n) {
        return He().getSessionState(function (e) {
          return (
            (e.loggedBeacons = e.loggedBeacons || []),
            -1 === e.loggedBeacons.indexOf(n) && (e.loggedBeacons.push(n), !0)
          );
        });
      }
      function Ue(n) {
        return Math.floor(Math.random() * n);
      }
      var We = [];
      function Ze(n) {
        var e = n.url,
          t = n.method,
          r = void 0 === t ? "get" : t,
          o = n.headers,
          i = void 0 === o ? {} : o,
          a = n.json,
          u = n.data,
          l = n.body,
          c = n.win,
          s = void 0 === c ? window : c,
          d = n.timeout,
          f = void 0 === d ? 0 : d;
        return new _(function (n, t) {
          if ((a && u) || (a && l) || (u && a))
            throw new Error(
              "Only options.json or options.data or options.body should be passed"
            );
          for (var o = {}, c = 0, d = Object.keys(i); c < d.length; c++) {
            var p = d[c];
            o[p.toLowerCase()] = i[p];
          }
          a
            ? (o["content-type"] = o["content-type"] || "application/json")
            : (u || l) &&
              (o["content-type"] =
                o["content-type"] ||
                "application/x-www-form-urlencoded; charset=utf-8"),
            (o.accept = o.accept || "application/json");
          for (var h = 0; h < We.length; h++)
            for (
              var m = (0, We[h])(), g = 0, y = Object.keys(m);
              g < y.length;
              g++
            ) {
              var w = y[g];
              o[w.toLowerCase()] = m[w];
            }
          var v = new s.XMLHttpRequest();
          for (var b in (v.addEventListener(
            "load",
            function () {
              var o = (function (n) {
                void 0 === n && (n = "");
                for (
                  var e = {}, t = 0, r = n.trim().split("\n");
                  t < r.length;
                  t++
                ) {
                  var o = r[t].split(":"),
                    i = o[0],
                    a = o.slice(1);
                  e[i.toLowerCase()] = a.join(":").trim();
                }
                return e;
              })(this.getAllResponseHeaders());
              if (!this.status)
                return t(
                  new Error(
                    "Request to " +
                      r.toLowerCase() +
                      " " +
                      e +
                      " failed: no response status code."
                  )
                );
              var i = o["content-type"],
                a =
                  i &&
                  (0 === i.indexOf("application/json") ||
                    0 === i.indexOf("text/json")),
                u = this.responseText;
              try {
                u = JSON.parse(u);
              } catch (n) {
                if (a)
                  return t(
                    new Error("Invalid json: " + this.responseText + ".")
                  );
              }
              return n({ status: this.status, headers: o, body: u });
            },
            !1
          ),
          v.addEventListener(
            "error",
            function (n) {
              t(
                new Error(
                  "Request to " +
                    r.toLowerCase() +
                    " " +
                    e +
                    " failed: " +
                    n.toString() +
                    "."
                )
              );
            },
            !1
          ),
          v.open(r, e, !0),
          o))
            o.hasOwnProperty(b) && v.setRequestHeader(b, o[b]);
          a
            ? (l = JSON.stringify(a))
            : u &&
              (l = Object.keys(u)
                .map(function (n) {
                  return (
                    encodeURIComponent(n) +
                    "=" +
                    (u ? encodeURIComponent(u[n]) : "")
                  );
                })
                .join("&")),
            (v.timeout = f),
            (v.ontimeout = function () {
              t(
                new Error(
                  "Request to " + r.toLowerCase() + " " + e + " has timed out"
                )
              );
            }),
            v.send(l);
        });
      }
      function ze(n) {
        return "string" == typeof n && /^[0-9]+%$/.test(n);
      }
      function qe(n) {
        if ("number" == typeof n) return n;
        var e = n.match(/^([0-9]+)(px|%)$/);
        if (!e) throw new Error("Could not match css value from " + n);
        return parseInt(e[1], 10);
      }
      function Ge(n) {
        return qe(n) + "px";
      }
      function Ke(n) {
        return "number" == typeof n ? Ge(n) : ze(n) ? n : Ge(n);
      }
      function Ve(n, e) {
        if ("number" == typeof n) return n;
        if (ze(n))
          return (function (n, e) {
            return parseInt((n * qe(e)) / 100, 10);
          })(e, n);
        if ("string" == typeof (t = n) && /^[0-9]+px$/.test(t)) return qe(n);
        var t;
        throw new Error("Can not normalize dimension: " + n);
      }
      var Ye = {
          AD: "AD",
          AE: "AE",
          AG: "AG",
          AI: "AI",
          AL: "AL",
          AM: "AM",
          AN: "AN",
          AO: "AO",
          AR: "AR",
          AT: "AT",
          AU: "AU",
          AW: "AW",
          AZ: "AZ",
          BA: "BA",
          BB: "BB",
          BE: "BE",
          BF: "BF",
          BG: "BG",
          BH: "BH",
          BI: "BI",
          BJ: "BJ",
          BM: "BM",
          BN: "BN",
          BO: "BO",
          BR: "BR",
          BS: "BS",
          BT: "BT",
          BW: "BW",
          BY: "BY",
          BZ: "BZ",
          CA: "CA",
          CD: "CD",
          CG: "CG",
          CH: "CH",
          CI: "CI",
          CK: "CK",
          CL: "CL",
          CM: "CM",
          CN: "CN",
          CO: "CO",
          CR: "CR",
          CV: "CV",
          CY: "CY",
          CZ: "CZ",
          DE: "DE",
          DJ: "DJ",
          DK: "DK",
          DM: "DM",
          DO: "DO",
          DZ: "DZ",
          EC: "EC",
          EE: "EE",
          EG: "EG",
          ER: "ER",
          ES: "ES",
          ET: "ET",
          FI: "FI",
          FJ: "FJ",
          FK: "FK",
          FM: "FM",
          FO: "FO",
          FR: "FR",
          GA: "GA",
          GB: "GB",
          GD: "GD",
          GE: "GE",
          GF: "GF",
          GI: "GI",
          GL: "GL",
          GM: "GM",
          GN: "GN",
          GP: "GP",
          GR: "GR",
          GT: "GT",
          GW: "GW",
          GY: "GY",
          HK: "HK",
          HN: "HN",
          HR: "HR",
          HU: "HU",
          ID: "ID",
          IE: "IE",
          IL: "IL",
          IN: "IN",
          IS: "IS",
          IT: "IT",
          JM: "JM",
          JO: "JO",
          JP: "JP",
          KE: "KE",
          KG: "KG",
          KH: "KH",
          KI: "KI",
          KM: "KM",
          KN: "KN",
          KR: "KR",
          KW: "KW",
          KY: "KY",
          KZ: "KZ",
          LA: "LA",
          LC: "LC",
          LI: "LI",
          LK: "LK",
          LS: "LS",
          LT: "LT",
          LU: "LU",
          LV: "LV",
          MA: "MA",
          MC: "MC",
          MD: "MD",
          ME: "ME",
          MG: "MG",
          MH: "MH",
          MK: "MK",
          ML: "ML",
          MN: "MN",
          MQ: "MQ",
          MR: "MR",
          MS: "MS",
          MT: "MT",
          MU: "MU",
          MV: "MV",
          MW: "MW",
          MX: "MX",
          MY: "MY",
          MZ: "MZ",
          NA: "NA",
          NC: "NC",
          NE: "NE",
          NF: "NF",
          NG: "NG",
          NI: "NI",
          NL: "NL",
          NO: "NO",
          NP: "NP",
          NR: "NR",
          NU: "NU",
          NZ: "NZ",
          OM: "OM",
          PA: "PA",
          PE: "PE",
          PF: "PF",
          PG: "PG",
          PH: "PH",
          PL: "PL",
          PM: "PM",
          PN: "PN",
          PT: "PT",
          PW: "PW",
          PY: "PY",
          QA: "QA",
          RE: "RE",
          RO: "RO",
          RS: "RS",
          RU: "RU",
          RW: "RW",
          SA: "SA",
          SB: "SB",
          SC: "SC",
          SE: "SE",
          SG: "SG",
          SH: "SH",
          SI: "SI",
          SJ: "SJ",
          SK: "SK",
          SL: "SL",
          SM: "SM",
          SN: "SN",
          SO: "SO",
          SR: "SR",
          ST: "ST",
          SV: "SV",
          SZ: "SZ",
          TC: "TC",
          TD: "TD",
          TG: "TG",
          TH: "TH",
          TJ: "TJ",
          TM: "TM",
          TN: "TN",
          TO: "TO",
          TR: "TR",
          TT: "TT",
          TV: "TV",
          TW: "TW",
          TZ: "TZ",
          UA: "UA",
          UG: "UG",
          US: "US",
          UY: "UY",
          VA: "VA",
          VC: "VC",
          VE: "VE",
          VG: "VG",
          VN: "VN",
          VU: "VU",
          WF: "WF",
          WS: "WS",
          YE: "YE",
          YT: "YT",
          ZA: "ZA",
          ZM: "ZM",
          ZW: "ZW",
        },
        Je = {
          AR: "ar",
          BG: "bg",
          CS: "cs",
          DA: "da",
          DE: "de",
          EL: "el",
          EN: "en",
          ES: "es",
          ET: "et",
          FI: "fi",
          FR: "fr",
          HE: "he",
          HU: "hu",
          ID: "id",
          IT: "it",
          JA: "ja",
          KO: "ko",
          LT: "lt",
          LV: "lv",
          MS: "ms",
          NL: "nl",
          NO: "no",
          PL: "pl",
          PT: "pt",
          RO: "ro",
          RU: "ru",
          SI: "si",
          SK: "sk",
          SL: "sl",
          SQ: "sq",
          SV: "sv",
          TH: "th",
          TL: "tl",
          TR: "tr",
          VI: "vi",
          ZH: "zh",
        },
        Xe = {
          AD: [Je.EN, Je.FR, Je.ES, Je.ZH],
          AE: [Je.EN, Je.FR, Je.ES, Je.ZH, Je.AR],
          AG: [Je.EN, Je.FR, Je.ES, Je.ZH],
          AI: [Je.EN, Je.FR, Je.ES, Je.ZH],
          AL: [Je.SQ, Je.EN],
          AM: [Je.EN, Je.FR, Je.ES, Je.ZH],
          AN: [Je.EN, Je.FR, Je.ES, Je.ZH],
          AO: [Je.EN, Je.FR, Je.ES, Je.ZH],
          AR: [Je.ES, Je.EN],
          AT: [Je.DE, Je.EN],
          AU: [Je.EN],
          AW: [Je.EN, Je.FR, Je.ES, Je.ZH],
          AZ: [Je.EN, Je.FR, Je.ES, Je.ZH],
          BA: [Je.EN],
          BB: [Je.EN, Je.FR, Je.ES, Je.ZH],
          BE: [Je.EN, Je.NL, Je.FR],
          BF: [Je.FR, Je.EN, Je.ES, Je.ZH],
          BG: [Je.BG, Je.EN],
          BH: [Je.AR, Je.EN, Je.FR, Je.ES, Je.ZH],
          BI: [Je.FR, Je.EN, Je.ES, Je.ZH],
          BJ: [Je.FR, Je.EN, Je.ES, Je.ZH],
          BM: [Je.EN, Je.FR, Je.ES, Je.ZH],
          BN: [Je.MS, Je.EN],
          BO: [Je.ES, Je.EN, Je.FR, Je.ZH],
          BR: [Je.PT, Je.EN],
          BS: [Je.EN, Je.FR, Je.ES, Je.ZH],
          BT: [Je.EN],
          BW: [Je.EN, Je.FR, Je.ES, Je.ZH],
          BY: [Je.EN],
          BZ: [Je.EN, Je.ES, Je.FR, Je.ZH],
          CA: [Je.EN, Je.FR],
          CD: [Je.FR, Je.EN, Je.ES, Je.ZH],
          CG: [Je.EN, Je.FR, Je.ES, Je.ZH],
          CH: [Je.DE, Je.FR, Je.EN],
          CI: [Je.FR, Je.EN],
          CK: [Je.EN, Je.FR, Je.ES, Je.ZH],
          CL: [Je.ES, Je.EN, Je.FR, Je.ZH],
          CM: [Je.FR, Je.EN],
          CN: [Je.ZH],
          CO: [Je.ES, Je.EN, Je.FR, Je.ZH],
          CR: [Je.ES, Je.EN, Je.FR, Je.ZH],
          CV: [Je.EN, Je.FR, Je.ES, Je.ZH],
          CY: [Je.EN],
          CZ: [Je.CS, Je.EN, Je.FR, Je.ES, Je.ZH],
          DE: [Je.DE, Je.EN],
          DJ: [Je.FR, Je.EN, Je.ES, Je.ZH],
          DK: [Je.DA, Je.EN],
          DM: [Je.EN, Je.FR, Je.ES, Je.ZH],
          DO: [Je.ES, Je.EN, Je.FR, Je.ZH],
          DZ: [Je.AR, Je.EN, Je.FR, Je.ES, Je.ZH],
          EC: [Je.ES, Je.EN, Je.FR, Je.ZH],
          EE: [Je.ET, Je.EN, Je.RU, Je.FR, Je.ES, Je.ZH],
          EG: [Je.AR, Je.EN, Je.FR, Je.ES, Je.ZH],
          ER: [Je.EN, Je.FR, Je.ES, Je.ZH],
          ES: [Je.ES, Je.EN],
          ET: [Je.EN, Je.FR, Je.ES, Je.ZH],
          FI: [Je.FI, Je.EN, Je.FR, Je.ES, Je.ZH],
          FJ: [Je.EN, Je.FR, Je.ES, Je.ZH],
          FK: [Je.EN, Je.FR, Je.ES, Je.ZH],
          FM: [Je.EN],
          FO: [Je.DA, Je.EN, Je.FR, Je.ES, Je.ZH],
          FR: [Je.FR, Je.EN],
          GA: [Je.FR, Je.EN, Je.ES, Je.ZH],
          GB: [Je.EN],
          GD: [Je.EN, Je.FR, Je.ES, Je.ZH],
          GE: [Je.EN, Je.FR, Je.ES, Je.ZH],
          GF: [Je.EN, Je.FR, Je.ES, Je.ZH],
          GI: [Je.EN, Je.FR, Je.ES, Je.ZH],
          GL: [Je.DA, Je.EN, Je.FR, Je.ES, Je.ZH],
          GM: [Je.EN, Je.FR, Je.ES, Je.ZH],
          GN: [Je.FR, Je.EN, Je.ES, Je.ZH],
          GP: [Je.EN, Je.FR, Je.ES, Je.ZH],
          GR: [Je.EL, Je.EN, Je.FR, Je.ES, Je.ZH],
          GT: [Je.ES, Je.EN, Je.FR, Je.ZH],
          GW: [Je.EN, Je.FR, Je.ES, Je.ZH],
          GY: [Je.EN, Je.FR, Je.ES, Je.ZH],
          HK: [Je.EN, Je.ZH],
          HN: [Je.ES, Je.EN, Je.FR, Je.ZH],
          HR: [Je.EN],
          HU: [Je.HU, Je.EN, Je.FR, Je.ES, Je.ZH],
          ID: [Je.ID, Je.EN],
          IE: [Je.EN, Je.FR, Je.ES, Je.ZH],
          IL: [Je.HE, Je.EN],
          IN: [Je.EN],
          IS: [Je.EN],
          IT: [Je.IT, Je.EN],
          JM: [Je.EN, Je.ES, Je.FR, Je.ZH],
          JO: [Je.AR, Je.EN, Je.FR, Je.ES, Je.ZH],
          JP: [Je.JA, Je.EN],
          KE: [Je.EN, Je.FR, Je.ES, Je.ZH],
          KG: [Je.EN, Je.FR, Je.ES, Je.ZH],
          KH: [Je.EN],
          KI: [Je.EN, Je.FR, Je.ES, Je.ZH],
          KM: [Je.FR, Je.EN, Je.ES, Je.ZH],
          KN: [Je.EN, Je.FR, Je.ES, Je.ZH],
          KR: [Je.KO, Je.EN],
          KW: [Je.AR, Je.EN, Je.FR, Je.ES, Je.ZH],
          KY: [Je.EN, Je.FR, Je.ES, Je.ZH],
          KZ: [Je.EN, Je.FR, Je.ES, Je.ZH],
          LA: [Je.EN],
          LC: [Je.EN, Je.FR, Je.ES, Je.ZH],
          LI: [Je.EN, Je.FR, Je.ES, Je.ZH],
          LK: [Je.SI, Je.EN],
          LS: [Je.EN, Je.FR, Je.ES, Je.ZH],
          LT: [Je.LT, Je.EN, Je.RU, Je.FR, Je.ES, Je.ZH],
          LU: [Je.EN, Je.DE, Je.FR, Je.ES, Je.ZH],
          LV: [Je.LV, Je.EN, Je.RU, Je.FR, Je.ES, Je.ZH],
          MA: [Je.AR, Je.EN, Je.FR, Je.ES, Je.ZH],
          MC: [Je.FR, Je.EN],
          MD: [Je.EN],
          ME: [Je.EN],
          MG: [Je.EN, Je.FR, Je.ES, Je.ZH],
          MH: [Je.EN, Je.FR, Je.ES, Je.ZH],
          MK: [Je.EN],
          ML: [Je.FR, Je.EN, Je.ES, Je.ZH],
          MN: [Je.EN],
          MQ: [Je.EN, Je.FR, Je.ES, Je.ZH],
          MR: [Je.EN, Je.FR, Je.ES, Je.ZH],
          MS: [Je.EN, Je.FR, Je.ES, Je.ZH],
          MT: [Je.EN],
          MU: [Je.EN, Je.FR, Je.ES, Je.ZH],
          MV: [Je.EN],
          MW: [Je.EN, Je.FR, Je.ES, Je.ZH],
          MX: [Je.ES, Je.EN],
          MY: [Je.MS, Je.EN],
          MZ: [Je.EN, Je.FR, Je.ES, Je.ZH],
          NA: [Je.EN, Je.FR, Je.ES, Je.ZH],
          NC: [Je.EN, Je.FR, Je.ES, Je.ZH],
          NE: [Je.FR, Je.EN, Je.ES, Je.ZH],
          NF: [Je.EN, Je.FR, Je.ES, Je.ZH],
          NG: [Je.EN],
          NI: [Je.ES, Je.EN, Je.FR, Je.ZH],
          NL: [Je.NL, Je.EN],
          NO: [Je.NO, Je.EN],
          NP: [Je.EN],
          NR: [Je.EN, Je.FR, Je.ES, Je.ZH],
          NU: [Je.EN, Je.FR, Je.ES, Je.ZH],
          NZ: [Je.EN, Je.FR, Je.ES, Je.ZH],
          OM: [Je.AR, Je.EN, Je.FR, Je.ES, Je.ZH],
          PA: [Je.ES, Je.EN, Je.FR, Je.ZH],
          PE: [Je.ES, Je.EN, Je.FR, Je.ZH],
          PF: [Je.EN, Je.FR, Je.ES, Je.ZH],
          PG: [Je.EN, Je.FR, Je.ES, Je.ZH],
          PH: [Je.TL, Je.EN],
          PL: [Je.PL, Je.EN],
          PM: [Je.EN, Je.FR, Je.ES, Je.ZH],
          PN: [Je.EN, Je.FR, Je.ES, Je.ZH],
          PT: [Je.PT, Je.EN],
          PW: [Je.EN, Je.FR, Je.ES, Je.ZH],
          PY: [Je.ES, Je.EN],
          QA: [Je.EN, Je.FR, Je.ES, Je.ZH, Je.AR],
          RE: [Je.EN, Je.FR, Je.ES, Je.ZH],
          RO: [Je.RO, Je.EN, Je.FR, Je.ES, Je.ZH],
          RS: [Je.EN, Je.FR, Je.ES, Je.ZH],
          RU: [Je.RU, Je.EN],
          RW: [Je.FR, Je.EN, Je.ES, Je.ZH],
          SA: [Je.AR, Je.EN, Je.FR, Je.ES, Je.ZH],
          SB: [Je.EN, Je.FR, Je.ES, Je.ZH],
          SC: [Je.FR, Je.EN, Je.ES, Je.ZH],
          SE: [Je.SV, Je.EN],
          SG: [Je.EN],
          SH: [Je.EN, Je.FR, Je.ES, Je.ZH],
          SI: [Je.SL, Je.EN, Je.FR, Je.ES, Je.ZH],
          SJ: [Je.EN, Je.FR, Je.ES, Je.ZH],
          SK: [Je.SK, Je.EN, Je.FR, Je.ES, Je.ZH],
          SL: [Je.EN, Je.FR, Je.ES, Je.ZH],
          SM: [Je.EN, Je.FR, Je.ES, Je.ZH],
          SN: [Je.FR, Je.EN, Je.ES, Je.ZH],
          SO: [Je.EN, Je.FR, Je.ES, Je.ZH],
          SR: [Je.EN, Je.FR, Je.ES, Je.ZH],
          ST: [Je.EN, Je.FR, Je.ES, Je.ZH],
          SV: [Je.ES, Je.EN, Je.FR, Je.ZH],
          SZ: [Je.EN, Je.FR, Je.ES, Je.ZH],
          TC: [Je.EN, Je.FR, Je.ES, Je.ZH],
          TD: [Je.FR, Je.EN, Je.ES, Je.ZH],
          TG: [Je.FR, Je.EN, Je.ES, Je.ZH],
          TH: [Je.TH, Je.EN],
          TJ: [Je.EN, Je.FR, Je.ES, Je.ZH],
          TM: [Je.EN, Je.FR, Je.ES, Je.ZH],
          TN: [Je.AR, Je.EN, Je.FR, Je.ES, Je.ZH],
          TO: [Je.EN],
          TR: [Je.TR, Je.EN],
          TT: [Je.EN, Je.FR, Je.ES, Je.ZH],
          TV: [Je.EN, Je.FR, Je.ES, Je.ZH],
          TW: [Je.ZH, Je.EN],
          TZ: [Je.EN, Je.FR, Je.ES, Je.ZH],
          UA: [Je.EN, Je.RU, Je.FR, Je.ES, Je.ZH],
          UG: [Je.EN, Je.FR, Je.ES, Je.ZH],
          US: [Je.EN, Je.FR, Je.ES, Je.ZH],
          UY: [Je.ES, Je.EN, Je.FR, Je.ZH],
          VA: [Je.EN, Je.FR, Je.ES, Je.ZH],
          VC: [Je.EN, Je.FR, Je.ES, Je.ZH],
          VE: [Je.ES, Je.EN, Je.FR, Je.ZH],
          VG: [Je.EN, Je.FR, Je.ES, Je.ZH],
          VN: [Je.VI, Je.EN],
          VU: [Je.EN, Je.FR, Je.ES, Je.ZH],
          WF: [Je.EN, Je.FR, Je.ES, Je.ZH],
          WS: [Je.EN],
          YE: [Je.AR, Je.EN, Je.FR, Je.ES, Je.ZH],
          YT: [Je.EN, Je.FR, Je.ES, Je.ZH],
          ZA: [Je.EN, Je.FR, Je.ES, Je.ZH],
          ZM: [Je.EN, Je.FR, Je.ES, Je.ZH],
          ZW: [Je.EN],
        },
        $e = {
          HOME: "home",
          PRODUCT: "product",
          CART: "cart",
          CHECKOUT: "checkout",
          PRODUCT_LISTING: "product-listing",
          SEARCH_RESULTS: "search-results",
          PRODUCT_DETAILS: "product-details",
          MINI_CART: "mini-cart",
        },
        Qe = {
          LOCAL: "local",
          STAGE: "stage",
          SANDBOX: "sandbox",
          PRODUCTION: "production",
          TEST: "test",
        },
        nt = {
          PAYPAL: "paypal",
          VENMO: "venmo",
          APPLEPAY: "applepay",
          ITAU: "itau",
          CREDIT: "credit",
          PAYLATER: "paylater",
          CARD: "card",
          IDEAL: "ideal",
          SEPA: "sepa",
          BANCONTACT: "bancontact",
          GIROPAY: "giropay",
          SOFORT: "sofort",
          EPS: "eps",
          MYBANK: "mybank",
          P24: "p24",
          VERKKOPANKKI: "verkkopankki",
          PAYU: "payu",
          BLIK: "blik",
          TRUSTLY: "trustly",
          ZIMPLER: "zimpler",
          MAXIMA: "maxima",
          OXXO: "oxxo",
          BOLETO: "boleto",
          WECHATPAY: "wechatpay",
          MERCADOPAGO: "mercadopago",
        },
        et = { DESKTOP: "desktop", MOBILE: "mobile" };
      function tt() {
        return "sandbox";
      }
      function rt() {}
      function ot() {}
      function it() {
        return "5.0.235";
      }
      function at() {
        return "3d29ccf0b1c58";
      }
      function ut() {
        return !1;
      }
      function lt() {
        return ["buttons", "funding-eligibility"];
      }
      function ct() {
        return Object({
          paypal: Object({ eligible: !0, vaultable: !0 }),
          paylater: Object({
            eligible: !1,
            products: Object({
              payIn4: Object({ eligible: !1, variant: null }),
              paylater: Object({ eligible: !1, variant: null }),
            }),
          }),
          card: Object({
            eligible: !0,
            branded: !0,
            installments: !1,
            vendors: Object({
              visa: Object({ eligible: !0, vaultable: !0 }),
              mastercard: Object({ eligible: !0, vaultable: !0 }),
              amex: Object({ eligible: !0, vaultable: !0 }),
              discover: Object({ eligible: !1, vaultable: !0 }),
              hiper: Object({ eligible: !1, vaultable: !1 }),
              elo: Object({ eligible: !1, vaultable: !0 }),
              jcb: Object({ eligible: !1, vaultable: !0 }),
            }),
          }),
          venmo: Object({ eligible: !1 }),
          itau: Object({ eligible: !1 }),
          credit: Object({ eligible: !1 }),
          applepay: Object({ eligible: !1 }),
          sepa: Object({ eligible: !1 }),
          ideal: Object({ eligible: !1 }),
          bancontact: Object({ eligible: !1 }),
          giropay: Object({ eligible: !1 }),
          eps: Object({ eligible: !1 }),
          sofort: Object({ eligible: !1 }),
          mybank: Object({ eligible: !1 }),
          p24: Object({ eligible: !1 }),
          zimpler: Object({ eligible: !1 }),
          wechatpay: Object({ eligible: !1 }),
          payu: Object({ eligible: !1 }),
          blik: Object({ eligible: !1 }),
          trustly: Object({ eligible: !1 }),
          oxxo: Object({ eligible: !1 }),
          maxima: Object({ eligible: !1 }),
          boleto: Object({ eligible: !1 }),
          mercadopago: Object({ eligible: !1 }),
        });
      }
      function st() {
        return f() ? et.MOBILE : et.DESKTOP;
      }
      var dt =
          "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R",
        ft = { sandbox: dt, sb: dt, test: dt },
        pt = xn(function () {
          try {
            return Me();
          } catch (n) {
            throw new Error(
              'PayPal Payments SDK script not found on page! Expected to find <script src="https://www.sandbox.paypal.com/sdk/js">\n\n' +
                Sn(n)
            );
          }
        }),
        ht = xn(function () {
          for (var n = {}, e = 0, t = pt().attributes; e < t.length; e++) {
            var r = t[e];
            0 === r.name.indexOf("data-") && (n[r.name] = r.value);
          }
          return (n["data-uid"] = De()), n;
        });
      function mt(n, e) {
        return ht()[n] || e;
      }
      var gt = function (n, e) {
        return re(pt().src.split("?")[1] || "")[n] || e;
      };
      function yt(n, e) {
        return "true" === gt(n, e ? e.toString() : "false");
      }
      function wt() {
        var n = gt("client-id");
        if (!n) throw new Error("Expected client-id parameter in sdk url");
        return ft[n] ? ft[n] : n;
      }
      function vt() {
        var n = gt("merchant-id");
        if ("*" === n) {
          var e = mt("data-merchant-id");
          if (!e)
            throw new Error(
              "Must pass data-merchant-id when merchant-id=* passed in url"
            );
          var t = e.split(",");
          if (t.length <= 1)
            throw new Error(
              "Must pass multiple merchant ids to data-merchant-id. If passing a single id, pass merchant-id=XYZ in url"
            );
          if (
            t.some(function (n, e) {
              return t && t.indexOf(n) !== e;
            })
          )
            throw new Error(
              "Duplicates data-merchant-id. Must pass unique merchant ids to data-merchant-id."
            );
          return t;
        }
        return n ? n.split(",") : [];
      }
      function bt() {
        return gt("intent", "capture");
      }
      function Ct() {
        return yt("commit", (bt(), !0));
      }
      function Et() {
        return yt("vault", !1);
      }
      function Lt() {
        return gt("currency", "USD");
      }
      function xt() {
        var n = gt("enable-funding");
        return n ? n.split(",") : [];
      }
      function Ot() {
        var n = gt("disable-funding");
        return n ? n.split(",") : [];
      }
      function Pt() {
        var n = gt("disable-card");
        return n ? n.split(",") : [];
      }
      function Nt() {
        return gt("buyer-country");
      }
      function Tt() {
        return mt("data-namespace") || "paypal";
      }
      function St() {
        var n = mt("data-amount");
        if (n && !n.match(/^\d+\.\d\d$/))
          throw new Error("Invalid amount: " + n);
        return n;
      }
      function kt() {
        return mt("data-user-id-token");
      }
      function _t() {
        var n = mt("data-client-token");
        if (n) return JSON.parse(yn(n)).paypal.accessToken;
      }
      function At() {
        return mt("data-partner-attribution-id");
      }
      function Ft() {
        var n = gt("locale");
        if (n) {
          var e = n.split("_");
          return { lang: e[0], country: e[1] };
        }
        for (
          var t = function (n, e) {
              var t = e[n],
                r = t.country,
                o = t.lang;
              if (
                ((r = r && Ye[r]),
                (o = o && Je[o.toUpperCase()]),
                r && o && Xe[r] && -1 !== Xe[r].indexOf(o))
              )
                return { v: { country: r, lang: o } };
              if (o) {
                var i = Object.keys(Xe).filter(function (n) {
                  return Xe[n].some(function (n) {
                    return n === o;
                  });
                });
                if (1 === i.length) return { v: { country: i[0], lang: o } };
              }
            },
            r = 0,
            o = ce();
          r < o.length;
          r++
        ) {
          var i = t(r, o);
          if ("object" == typeof i) return i.v;
        }
        for (var a = 0, u = ce(); a < u.length; a++) {
          var l = u[a].country;
          if (Xe.hasOwnProperty(l)) return { country: l, lang: Xe[l][0] };
        }
        return { lang: Je.EN, country: Ye.US };
      }
      function Rt() {
        return mt("data-csp-nonce") || "";
      }
      function Mt() {
        return ht().hasOwnProperty("data-enable-3ds");
      }
      function It() {
        return mt("data-user-experience-flow");
      }
      function Dt(n) {
        var e = (function (n, e) {
          if ("object" != typeof n || null === n) return n;
          var t = n[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(n, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(n);
        })(n);
        return "symbol" == typeof e ? e : String(e);
      }
      var jt = ["warn", "error"],
        Ht = ["error", "warn", "info", "debug"];
      function Bt(n) {
        var e = n.url,
          t = n.method,
          r = n.headers,
          o = n.json,
          i = n.enableSendBeacon,
          a = void 0 !== i && i;
        return _.try(function () {
          var n = r && Object.keys(r).length;
          if (window && window.navigator.sendBeacon && !n && a && window.Blob)
            try {
              var i = new Blob([JSON.stringify(o)], {
                type: "application/json",
              });
              return window.navigator.sendBeacon(e, i);
            } catch (n) {}
          return Ze({ url: e, method: t, headers: r, json: o });
        }).then(Nn);
      }
      function Ut(n, e) {
        for (var t in e) e.hasOwnProperty(t) && e[t] && !n[t] && (n[t] = e[t]);
      }
      function Wt() {
        if ("sandbox" === Qe.LOCAL) return "https://www.sandbox.paypal.com";
        if ("sandbox" === Qe.STAGE) throw new Error("No stage host found");
        if ("sandbox" === Qe.SANDBOX)
          return "sandbox_v2" === gt("env")
            ? "https://www-v2.sandbox.paypal.com"
            : "https://www.sandbox.paypal.com";
        if ("sandbox" === Qe.PRODUCTION) return "https://www.paypal.com";
        if ("sandbox" === Qe.TEST) return "mock://www.paypal.com";
        throw new Error("Can not get paypal domain for env: sandbox");
      }
      function Zt() {
        return "sandbox" === Qe.LOCAL ? /.*loca.*/ : /\.paypal\.com(:\d+)?$/;
      }
      function zt() {
        return Boolean(B().match(Zt()));
      }
      var qt = xn(function () {
          return (function (n) {
            var e = n.url,
              t = n.prefix,
              r = n.logLevel,
              o = void 0 === r ? "warn" : r,
              i = n.transport,
              a = void 0 === i ? Bt : i,
              u = n.amplitudeApiKey,
              l = n.flushInterval,
              c = void 0 === l ? 6e4 : l,
              s = n.enableSendBeacon,
              d = void 0 !== s && s,
              f = [],
              p = [],
              h = [],
              m = [],
              g = [],
              y = [];
            function w(n, e, t) {
              if (
                ue() &&
                window.console &&
                window.console.log &&
                !(Ht.indexOf(n) > Ht.indexOf(o))
              ) {
                var r = [e];
                r.push(t),
                  (t.error || t.warning) &&
                    r.push("\n\n", t.error || t.warning);
                try {
                  window.console[n] && window.console[n].apply
                    ? window.console[n].apply(window.console, r)
                    : window.console.log &&
                      window.console.log.apply &&
                      window.console.log.apply(window.console, r);
                } catch (n) {}
              }
            }
            function v() {
              return _.try(function () {
                if (
                  ue() &&
                  "file:" !== window.location.protocol &&
                  (f.length || p.length)
                ) {
                  for (var n = {}, t = 0; t < m.length; t++)
                    Ut(n, (0, m[t])(n));
                  for (var r, o = {}, i = 0; i < y.length; i++)
                    Ut(o, (0, y[i])(o));
                  return (
                    e &&
                      (r = a({
                        method: "POST",
                        url: e,
                        headers: o,
                        json: { events: f, meta: n, tracking: p },
                        enableSendBeacon: d,
                      }).catch(Nn)),
                    u &&
                      a({
                        method: "POST",
                        url: "https://api2.amplitude.com/2/httpapi",
                        headers: { "content-type": "application/json" },
                        json: {
                          api_key: u,
                          events: p.map(function (n) {
                            return E(
                              {
                                event_type: n.transition_name || "event",
                                event_properties: n,
                              },
                              n
                            );
                          }),
                        },
                      }).catch(Nn),
                    (f = []),
                    (p = []),
                    _.resolve(r).then(Nn)
                  );
                }
              });
            }
            var b,
              C,
              L,
              x,
              O =
                (void 0 === C && (C = 50),
                mn(function () {
                  x && clearTimeout(x);
                  var n = (L = L || new _());
                  return (
                    (x = setTimeout(function () {
                      (L = null),
                        (x = null),
                        _.try(b).then(
                          function (e) {
                            n.resolve(e);
                          },
                          function (e) {
                            n.reject(e);
                          }
                        );
                    }, C)),
                    n
                  );
                }, hn((b = v)) + "::promiseDebounced"));
            function P(n, e, r) {
              if ((void 0 === r && (r = {}), !ue())) return T;
              t && (e = t + "_" + e);
              for (
                var o = E({}, Dn(r), { timestamp: Date.now().toString() }),
                  i = 0;
                i < h.length;
                i++
              )
                Ut(o, (0, h[i])(o));
              return (
                (function (n, e, t) {
                  f.push({ level: n, event: e, payload: t }),
                    -1 !== jt.indexOf(n) && O();
                })(n, e, o),
                w(n, e, o),
                T
              );
            }
            function N(n, e) {
              return n.push(e), T;
            }
            ue() && Hn(O, c),
              "object" == typeof window &&
                (window.addEventListener("beforeunload", function () {
                  v();
                }),
                window.addEventListener("unload", function () {
                  v();
                }));
            var T = {
              debug: function (n, e) {
                return P("debug", n, e);
              },
              info: function (n, e) {
                return P("info", n, e);
              },
              warn: function (n, e) {
                return P("warn", n, e);
              },
              error: function (n, e) {
                return P("error", n, e);
              },
              track: function (n) {
                if ((void 0 === n && (n = {}), !ue())) return T;
                for (var e = Dn(n), t = 0; t < g.length; t++)
                  Ut(e, (0, g[t])(e));
                return w("debug", "track", e), p.push(e), T;
              },
              flush: O,
              immediateFlush: v,
              addPayloadBuilder: function (n) {
                return N(h, n);
              },
              addMetaBuilder: function (n) {
                return N(m, n);
              },
              addTrackingBuilder: function (n) {
                return N(g, n);
              },
              addHeaderBuilder: function (n) {
                return N(y, n);
              },
              setTransport: function (n) {
                return (a = n), T;
              },
              configure: function (n) {
                return (
                  n.url && (e = n.url),
                  n.prefix && (t = n.prefix),
                  n.logLevel && (o = n.logLevel),
                  n.transport && (a = n.transport),
                  n.amplitudeApiKey && (u = n.amplitudeApiKey),
                  n.flushInterval && (c = n.flushInterval),
                  n.enableSendBeacon && (d = n.enableSendBeacon),
                  T
                );
              },
            };
            return T;
          })({
            url:
              ((n = "/xoplatform/logger/api/logger"),
              void 0 === n && (n = ""),
              "" + Wt() + n),
          });
          var n;
        }),
        Gt = [
          "data-amount",
          "data-merchant-id",
          "data-partner-attribution-id",
          "data-enable-3ds",
          "data-sdk-integration-source",
          "data-client-metadata-id",
          "data-uid",
          "data-csp-nonce",
        ];
      function Kt() {
        for (
          var n = (function () {
              var n = pt().getAttribute("src");
              if (!n) throw new Error("Can not find src for sdk script");
              return n;
            })(),
            e = ht(),
            t = {},
            r = 0,
            o = Object.keys(e);
          r < o.length;
          r++
        ) {
          var i = o[r];
          -1 !== Gt.indexOf(i) && (t[i] = e[i]);
        }
        return gn(JSON.stringify({ url: n, attrs: t })).replace(/\=+$/, "");
      }
      function Vt(n, e) {
        var t = qt();
        return (function (n) {
          var e,
            t = n.name,
            r = n.sample,
            o = void 0 === r ? 50 : r,
            i = n.logTreatment,
            a = void 0 === i ? Nn : i,
            u = n.logCheckpoint,
            l = void 0 === u ? Nn : u,
            c = n.sticky,
            s =
              void 0 === c || c
                ? (function (n) {
                    return He().getState(function (e) {
                      return (
                        (e.throttlePercentiles = e.throttlePercentiles || {}),
                        (e.throttlePercentiles[n] =
                          e.throttlePercentiles[n] || Ue(100)),
                        e.throttlePercentiles[n]
                      );
                    });
                  })(t)
                : Ue(100),
            d =
              t +
              "_" +
              (e =
                s < o
                  ? "test"
                  : o >= 50 || (o <= s && s < 2 * o)
                  ? "control"
                  : "throttle"),
            f = !1,
            p = !1;
          try {
            window.localStorage && window.localStorage.getItem(t) && (p = !0);
          } catch (n) {}
          return {
            isEnabled: function () {
              return "test" === e || p;
            },
            isDisabled: function () {
              return "test" !== e && !p;
            },
            getTreatment: function () {
              return d;
            },
            log: function (n, e) {
              return (
                void 0 === e && (e = {}),
                f
                  ? (Be(d + "_" + JSON.stringify(e)) &&
                      a({ name: t, treatment: d, payload: e, throttle: s }),
                    Be(d + "_" + n + "_" + JSON.stringify(e)) &&
                      l({
                        name: t,
                        treatment: d,
                        checkpoint: n,
                        payload: e,
                        throttle: s,
                      }),
                    this)
                  : this
              );
            },
            logStart: function (n) {
              return void 0 === n && (n = {}), (f = !0), this.log("start", n);
            },
            logComplete: function (n) {
              return void 0 === n && (n = {}), this.log("complete", n);
            },
          };
        })({
          name: n,
          sample: e,
          logTreatment: function (e) {
            var r,
              o = e.treatment,
              i = e.payload,
              a = E(
                (((r = {}).state_name = "PXP_CHECK"),
                (r.transition_name = "process_pxp_check"),
                (r.pxp_exp_id = n),
                (r.pxp_trtmnt_id = o),
                r),
                i
              );
            t.track(a), t.flush();
          },
          logCheckpoint: function (e) {
            t.info(n + "_" + e.treatment + "_" + e.checkpoint, e.payload),
              t.flush();
          },
        });
      }
      function Yt() {
        return je({ name: Tt() });
      }
      function Jt() {
        return Yt().getSessionID();
      }
      function Xt(n) {
        return Yt().getState(n);
      }
      function $t() {
        return Yt().getID();
      }
      function Qt(n) {
        return Yt().getSessionState(n);
      }
      function nr() {
        return mt("data-client-metadata-id");
      }
      xn(function (n) {
        qt().info("rest_api_create_access_token");
        var e,
          t,
          r = gn(n + ":");
        return Ze({
          method: "post",
          url:
            ((e = "/v1/oauth2/token"),
            void 0 === e && (e = ""),
            "" +
              ((t = Wt()),
              "undefined" != typeof window &&
              void 0 !== window.location &&
              B() === t
                ? Wt()
                : (function () {
                    if ("sandbox" === Qe.LOCAL || "sandbox" === Qe.STAGE)
                      throw new Error("No api stage host found");
                    if ("sandbox" === Qe.SANDBOX)
                      return "sandbox_v2" === gt("env")
                        ? "https://cors.api-v2.sandbox.paypal.com"
                        : "https://cors.api.sandbox.paypal.com";
                    if ("sandbox" === Qe.PRODUCTION)
                      return "https://cors.api.paypal.com";
                    if ("sandbox" === Qe.TEST) return "mock://api.paypal.com";
                    throw new Error(
                      "Can not get paypal api domain for env: sandbox"
                    );
                  })()) +
              e),
          headers: { Authorization: "Basic " + r },
          data: { grant_type: "client_credentials" },
        }).then(function (e) {
          var t = e.body;
          if (t && "invalid_client" === t.error)
            throw new Error(
              "Auth Api invalid client id: " +
                n +
                ":\n\n" +
                JSON.stringify(t, null, 4)
            );
          if (!t || !t.access_token)
            throw new Error(
              "Auth Api response error:\n\n" + JSON.stringify(t, null, 4)
            );
          return t.access_token;
        });
      });
      var er = xn(Bn);
      function tr() {
        var n;
        pt(),
          (n = qt()),
          Date.now(),
          n.addPayloadBuilder(function () {
            return { referer: window.location.host, uid: Jt(), env: "sandbox" };
          }),
          n.addTrackingBuilder(function () {
            var n,
              e = Ft(),
              t = e.lang,
              r = e.country,
              o = vt();
            return (
              ((n = {}).feed_name = "payments_sdk"),
              (n.serverside_data_source = "checkout"),
              (n.client_id = wt()),
              (n.seller_id = o && o.toString()),
              (n.page_session_id = Jt()),
              (n.referer_url = window.location.host),
              (n.locale = t + "_" + r),
              (n.integration_identifier = wt()),
              (n.bn_code = At()),
              (n.pp_placement = (function () {
                var n = mt("data-page-type", "");
                if (-1 === Fn($e).indexOf(n.toLowerCase()) && n.length)
                  throw new Error("Invalid page type, '" + n + "'");
                return n.toLowerCase();
              })()),
              (n.sdk_name = "payments_sdk"),
              (n.sdk_version = "5.0.235"),
              (n.user_agent = window.navigator && window.navigator.userAgent),
              (n.user_action = Ct() ? "commit" : "continue"),
              (n.context_correlation_id = "3d29ccf0b1c58"),
              (n.sdk_integration_source = mt("data-sdk-integration-source")),
              n
            );
          }),
          _.onPossiblyUnhandledException(function (e) {
            var t;
            n.track(
              (((t = {}).ext_error_code = "payments_sdk_error"),
              (t.ext_error_desc = kn(e)),
              t)
            ),
              n.error("unhandled_error", { err: Sn(e) }),
              n.flush().catch(Nn);
          }),
          te().then(function () {
            var e,
              t,
              r = pt(),
              o = (function (n) {
                var e = ae();
                if (e && "function" == typeof e.getEntries)
                  for (var t = e.getEntries(), r = 0; r < t.length; r++) {
                    var o = t[r];
                    if (
                      o &&
                      o.name &&
                      0 === o.name.indexOf(n) &&
                      "number" == typeof o.duration
                    )
                      return Math.floor(o.duration);
                  }
              })(r.src);
            t =
              0 === o
                ? "sdk_client_cache_hit"
                : "number" == typeof o
                ? "sdk_client_cache_miss"
                : "sdk_client_cache_unknown";
            var i = zt() && window.xprops;
            n
              .info("setup_sandbox")
              .info("setup_sandbox_" + "5.0.235".replace(/\./g, "_"))
              .info(
                "sdk_" +
                  (i ? "paypal" : "non_paypal") +
                  "_domain_script_uid_" +
                  (r.hasAttribute("data-uid") ? "present" : "missing")
              )
              .info(t)
              .track(
                ((e = {}),
                (e.transition_name = "process_js_sdk_init_client"),
                (e.sdk_load_time =
                  "number" == typeof o ? o.toString() : void 0),
                (e.sdk_cache = t),
                e)
              )
              .flush(),
              (function () {
                if (window.document.documentMode)
                  try {
                    var n = window.status;
                    return (
                      (window.status = "testIntranetMode"),
                      "testIntranetMode" === window.status &&
                        ((window.status = n), !0)
                    );
                  } catch (n) {
                    return !1;
                  }
                return !1;
              })() && n.warn("ie_intranet_mode");
          });
      }
      function rr() {
        return "__post_robot_10_0_42___" + De();
      }
      function or(n) {
        void 0 === n && (n = window);
        var e = rr();
        return n !== window ? n[e] : (n[e] = n[e] || {});
      }
      var ir = function () {
        return {};
      };
      function ar(n, e) {
        return (
          void 0 === n && (n = "store"),
          void 0 === e && (e = ir),
          Yn(or(), n, function () {
            var n = e();
            return {
              has: function (e) {
                return n.hasOwnProperty(e);
              },
              get: function (e, t) {
                return n.hasOwnProperty(e) ? n[e] : t;
              },
              set: function (e, t) {
                return (n[e] = t), t;
              },
              del: function (e) {
                delete n[e];
              },
              getOrSet: function (e, t) {
                return Yn(n, e, t);
              },
              reset: function () {
                n = e();
              },
              keys: function () {
                return Object.keys(n);
              },
            };
          })
        );
      }
      var ur,
        lr = function () {};
      function cr() {
        var n = or();
        return (
          (n.WINDOW_WILDCARD = n.WINDOW_WILDCARD || new lr()), n.WINDOW_WILDCARD
        );
      }
      function sr(n, e) {
        return (
          void 0 === n && (n = "store"),
          void 0 === e && (e = ir),
          ar("windowStore").getOrSet(n, function () {
            var t = new cn(),
              r = function (n) {
                return t.getOrSet(n, e);
              };
            return {
              has: function (e) {
                return r(e).hasOwnProperty(n);
              },
              get: function (e, t) {
                var o = r(e);
                return o.hasOwnProperty(n) ? o[n] : t;
              },
              set: function (e, t) {
                return (r(e)[n] = t), t;
              },
              del: function (e) {
                delete r(e)[n];
              },
              getOrSet: function (e, t) {
                return Yn(r(e), n, t);
              },
            };
          })
        );
      }
      function dr() {
        return ar("instance").getOrSet("instanceID", wn);
      }
      function fr(n, e) {
        var t = e.domain,
          r = sr("helloPromises"),
          o = r.get(n);
        o && o.resolve({ domain: t });
        var i = _.resolve({ domain: t });
        return r.set(n, i), i;
      }
      function pr(n, e) {
        return (0, e.send)(
          n,
          "postrobot_hello",
          { instanceID: dr() },
          { domain: "*", timeout: -1 }
        ).then(function (e) {
          var t = e.origin,
            r = e.data.instanceID;
          return fr(n, { domain: t }), { win: n, domain: t, instanceID: r };
        });
      }
      function hr(n, e) {
        var t = e.send;
        return sr("windowInstanceIDPromises").getOrSet(n, function () {
          return pr(n, { send: t }).then(function (n) {
            return n.instanceID;
          });
        });
      }
      function mr(n) {
        sr("knownWindows").set(n, !0);
      }
      function gr(n) {
        return (
          "object" == typeof n && null !== n && "string" == typeof n.__type__
        );
      }
      function yr(n) {
        return void 0 === n
          ? "undefined"
          : null === n
          ? "null"
          : Array.isArray(n)
          ? "array"
          : "function" == typeof n
          ? "function"
          : "object" == typeof n
          ? n instanceof Error
            ? "error"
            : "function" == typeof n.then
            ? "promise"
            : "[object RegExp]" === {}.toString.call(n)
            ? "regex"
            : "[object Date]" === {}.toString.call(n)
            ? "date"
            : "object"
          : "string" == typeof n
          ? "string"
          : "number" == typeof n
          ? "number"
          : "boolean" == typeof n
          ? "boolean"
          : void 0;
      }
      function wr(n, e) {
        return { __type__: n, __val__: e };
      }
      var vr,
        br =
          (((ur = {}).function = function () {}),
          (ur.error = function (n) {
            return wr("error", {
              message: n.message,
              stack: n.stack,
              code: n.code,
              data: n.data,
            });
          }),
          (ur.promise = function () {}),
          (ur.regex = function (n) {
            return wr("regex", n.source);
          }),
          (ur.date = function (n) {
            return wr("date", n.toJSON());
          }),
          (ur.array = function (n) {
            return n;
          }),
          (ur.object = function (n) {
            return n;
          }),
          (ur.string = function (n) {
            return n;
          }),
          (ur.number = function (n) {
            return n;
          }),
          (ur.boolean = function (n) {
            return n;
          }),
          (ur.null = function (n) {
            return n;
          }),
          ur),
        Cr = {},
        Er =
          (((vr = {}).function = function () {
            throw new Error(
              "Function serialization is not implemented; nothing to deserialize"
            );
          }),
          (vr.error = function (n) {
            var e = n.stack,
              t = n.code,
              r = n.data,
              o = new Error(n.message);
            return (
              (o.code = t),
              r && (o.data = r),
              (o.stack = e + "\n\n" + o.stack),
              o
            );
          }),
          (vr.promise = function () {
            throw new Error(
              "Promise serialization is not implemented; nothing to deserialize"
            );
          }),
          (vr.regex = function (n) {
            return new RegExp(n);
          }),
          (vr.date = function (n) {
            return new Date(n);
          }),
          (vr.array = function (n) {
            return n;
          }),
          (vr.object = function (n) {
            return n;
          }),
          (vr.string = function (n) {
            return n;
          }),
          (vr.number = function (n) {
            return n;
          }),
          (vr.boolean = function (n) {
            return n;
          }),
          (vr.null = function (n) {
            return n;
          }),
          vr),
        Lr = {};
      function xr() {
        for (
          var n = ar("idToProxyWindow"), e = 0, t = n.keys();
          e < t.length;
          e++
        ) {
          var r = t[e];
          n.get(r).shouldClean() && n.del(r);
        }
      }
      function Or(n, e) {
        var t = e.send,
          r = e.id,
          o = void 0 === r ? wn() : r,
          i = n.then(function (n) {
            if (U(n)) return W(n).name;
          }),
          a = n.then(function (n) {
            if (J(n))
              throw new Error("Window is closed, can not determine type");
            return D(n) ? F.POPUP : F.IFRAME;
          });
        return (
          i.catch(Nn),
          a.catch(Nn),
          {
            id: o,
            getType: function () {
              return a;
            },
            getInstanceID: On(function () {
              return n.then(function (n) {
                return hr(n, { send: t });
              });
            }),
            close: function () {
              return n.then(an);
            },
            getName: function () {
              return n.then(function (n) {
                if (!J(n)) return U(n) ? W(n).name : i;
              });
            },
            focus: function () {
              return n.then(function (n) {
                n.focus();
              });
            },
            isClosed: function () {
              return n.then(function (n) {
                return J(n);
              });
            },
            setLocation: function (e) {
              return n.then(function (n) {
                var t = window.location.protocol + "//" + window.location.host;
                if (0 === e.indexOf("/")) e = "" + t + e;
                else if (!e.match(/^https?:\/\//) && 0 !== e.indexOf(t))
                  throw new Error(
                    "Expected url to be http or https url, or absolute path, got " +
                      JSON.stringify(e)
                  );
                if (U(n))
                  try {
                    if (n.location && "function" == typeof n.location.replace)
                      return void n.location.replace(e);
                  } catch (n) {}
                n.location = e;
              });
            },
            setName: function (e) {
              return n.then(function (n) {
                var t = U(n),
                  r = (function (n) {
                    if (U(n)) return W(n).frameElement;
                    for (
                      var e = 0, t = document.querySelectorAll("iframe");
                      e < t.length;
                      e++
                    ) {
                      var r = t[e];
                      if (r && r.contentWindow && r.contentWindow === n)
                        return r;
                    }
                  })(n);
                if (!t)
                  throw new Error(
                    "Can not set name for cross-domain window: " + e
                  );
                (W(n).name = e),
                  r && r.setAttribute("name", e),
                  (i = _.resolve(e));
              });
            },
          }
        );
      }
      new _(function (n) {
        if (window.document && window.document.body)
          return n(window.document.body);
        var e = setInterval(function () {
          if (window.document && window.document.body)
            return clearInterval(e), n(window.document.body);
        }, 10);
      });
      var Pr = (function () {
        function n(n) {
          var e = n.send,
            t = n.win,
            r = n.serializedWindow;
          (this.id = void 0),
            (this.isProxyWindow = !0),
            (this.serializedWindow = void 0),
            (this.actualWindow = void 0),
            (this.actualWindowPromise = void 0),
            (this.send = void 0),
            (this.name = void 0),
            (this.actualWindowPromise = new _()),
            (this.serializedWindow =
              r || Or(this.actualWindowPromise, { send: e })),
            ar("idToProxyWindow").set(this.getID(), this),
            t && this.setWindow(t, { send: e });
        }
        var e = n.prototype;
        return (
          (e.getID = function () {
            return this.serializedWindow.id;
          }),
          (e.getType = function () {
            return this.serializedWindow.getType();
          }),
          (e.isPopup = function () {
            return this.getType().then(function (n) {
              return n === F.POPUP;
            });
          }),
          (e.setLocation = function (n) {
            var e = this;
            return this.serializedWindow.setLocation(n).then(function () {
              return e;
            });
          }),
          (e.getName = function () {
            return this.serializedWindow.getName();
          }),
          (e.setName = function (n) {
            var e = this;
            return this.serializedWindow.setName(n).then(function () {
              return e;
            });
          }),
          (e.close = function () {
            var n = this;
            return this.serializedWindow.close().then(function () {
              return n;
            });
          }),
          (e.focus = function () {
            var n = this,
              e = this.isPopup(),
              t = this.getName(),
              r = _.hash({ isPopup: e, name: t }).then(function (n) {
                var e = n.name;
                n.isPopup && e && window.open("", e);
              }),
              o = this.serializedWindow.focus();
            return _.all([r, o]).then(function () {
              return n;
            });
          }),
          (e.isClosed = function () {
            return this.serializedWindow.isClosed();
          }),
          (e.getWindow = function () {
            return this.actualWindow;
          }),
          (e.setWindow = function (n, e) {
            var t = e.send;
            (this.actualWindow = n),
              this.actualWindowPromise.resolve(this.actualWindow),
              (this.serializedWindow = Or(this.actualWindowPromise, {
                send: t,
                id: this.getID(),
              })),
              sr("winToProxyWindow").set(n, this);
          }),
          (e.awaitWindow = function () {
            return this.actualWindowPromise;
          }),
          (e.matchWindow = function (n, e) {
            var t = this,
              r = e.send;
            return _.try(function () {
              return t.actualWindow
                ? n === t.actualWindow
                : _.hash({
                    proxyInstanceID: t.getInstanceID(),
                    knownWindowInstanceID: hr(n, { send: r }),
                  }).then(function (e) {
                    var o = e.proxyInstanceID === e.knownWindowInstanceID;
                    return o && t.setWindow(n, { send: r }), o;
                  });
            });
          }),
          (e.unwrap = function () {
            return this.actualWindow || this;
          }),
          (e.getInstanceID = function () {
            return this.serializedWindow.getInstanceID();
          }),
          (e.shouldClean = function () {
            return Boolean(this.actualWindow && J(this.actualWindow));
          }),
          (e.serialize = function () {
            return this.serializedWindow;
          }),
          (n.unwrap = function (e) {
            return n.isProxyWindow(e) ? e.unwrap() : e;
          }),
          (n.serialize = function (e, t) {
            var r = t.send;
            return xr(), n.toProxyWindow(e, { send: r }).serialize();
          }),
          (n.deserialize = function (e, t) {
            var r = t.send;
            return (
              xr(),
              ar("idToProxyWindow").get(e.id) ||
                new n({ serializedWindow: e, send: r })
            );
          }),
          (n.isProxyWindow = function (n) {
            return Boolean(n && !on(n) && n.isProxyWindow);
          }),
          (n.toProxyWindow = function (e, t) {
            var r = t.send;
            if ((xr(), n.isProxyWindow(e))) return e;
            var o = e;
            return sr("winToProxyWindow").get(o) || new n({ win: o, send: r });
          }),
          n
        );
      })();
      function Nr(n, e, t, r, o) {
        var i = sr("methodStore"),
          a = ar("proxyWindowMethods");
        Pr.isProxyWindow(r)
          ? a.set(n, { val: e, name: t, domain: o, source: r })
          : (a.del(n),
            (i.getOrSet(r, function () {
              return {};
            })[n] = { domain: o, name: t, val: e, source: r }));
      }
      function Tr(n, e) {
        var t = sr("methodStore"),
          r = ar("proxyWindowMethods");
        return (
          t.getOrSet(n, function () {
            return {};
          })[e] || r.get(e)
        );
      }
      function Sr(n, e, t, r, o) {
        var i, a, u;
        (a = (i = { on: o.on, send: o.send }).on),
          (u = i.send),
          ar("builtinListeners").getOrSet("functionCalls", function () {
            return a("postrobot_method", { domain: "*" }, function (n) {
              var e = n.source,
                t = n.origin,
                r = n.data,
                o = r.id,
                i = r.name,
                a = Tr(e, o);
              if (!a)
                throw new Error(
                  "Could not find method '" +
                    i +
                    "' with id: " +
                    r.id +
                    " in " +
                    B(window)
                );
              var l = a.source,
                c = a.domain,
                s = a.val;
              return _.try(function () {
                if (!en(c, t))
                  throw new Error(
                    "Method '" +
                      r.name +
                      "' domain " +
                      JSON.stringify(
                        Vn(a.domain) ? a.domain.source : a.domain
                      ) +
                      " does not match origin " +
                      t +
                      " in " +
                      B(window)
                  );
                if (Pr.isProxyWindow(l))
                  return l.matchWindow(e, { send: u }).then(function (n) {
                    if (!n)
                      throw new Error(
                        "Method call '" +
                          r.name +
                          "' failed - proxy window does not match source in " +
                          B(window)
                      );
                  });
              })
                .then(
                  function () {
                    return s.apply({ source: e, origin: t }, r.args);
                  },
                  function (n) {
                    return _.try(function () {
                      if (s.onError) return s.onError(n);
                    }).then(function () {
                      var e;
                      throw (
                        (n.stack &&
                          (n.stack =
                            "Remote call to " +
                            i +
                            "(" +
                            (void 0 === (e = r.args) && (e = []),
                            Zn(e)
                              .map(function (n) {
                                return "string" == typeof n
                                  ? "'" + n + "'"
                                  : void 0 === n
                                  ? "undefined"
                                  : null === n
                                  ? "null"
                                  : "boolean" == typeof n
                                  ? n.toString()
                                  : Array.isArray(n)
                                  ? "[ ... ]"
                                  : "object" == typeof n
                                  ? "{ ... }"
                                  : "function" == typeof n
                                  ? "() => { ... }"
                                  : "<" + typeof n + ">";
                              })
                              .join(", ") + ") failed\n\n") +
                            n.stack),
                        n)
                      );
                    });
                  }
                )
                .then(function (n) {
                  return { result: n, id: o, name: i };
                });
            });
          });
        var l = t.__id__ || wn();
        n = Pr.unwrap(n);
        var c = t.__name__ || t.name || r;
        return (
          "string" == typeof c &&
            "function" == typeof c.indexOf &&
            0 === c.indexOf("anonymous::") &&
            (c = c.replace("anonymous::", r + "::")),
          Pr.isProxyWindow(n)
            ? (Nr(l, t, c, n, e),
              n.awaitWindow().then(function (n) {
                Nr(l, t, c, n, e);
              }))
            : Nr(l, t, c, n, e),
          wr("cross_domain_function", { id: l, name: c })
        );
      }
      function kr(n, e, t, r) {
        var o,
          i = r.on,
          a = r.send;
        return (function (n, e) {
          void 0 === e && (e = Cr);
          var t = JSON.stringify(n, function (n) {
            var t = this[n];
            if (gr(this)) return t;
            var r = yr(t);
            if (!r) return t;
            var o = e[r] || br[r];
            return o ? o(t, n) : t;
          });
          return void 0 === t ? "undefined" : t;
        })(
          t,
          (((o = {}).promise = function (t, r) {
            return (function (n, e, t, r, o) {
              return wr("cross_domain_zalgo_promise", {
                then: Sr(
                  n,
                  e,
                  function (n, e) {
                    return t.then(n, e);
                  },
                  r,
                  { on: o.on, send: o.send }
                ),
              });
            })(n, e, t, r, { on: i, send: a });
          }),
          (o.function = function (t, r) {
            return Sr(n, e, t, r, { on: i, send: a });
          }),
          (o.object = function (n) {
            return on(n) || Pr.isProxyWindow(n)
              ? wr("cross_domain_window", Pr.serialize(n, { send: a }))
              : n;
          }),
          o)
        );
      }
      function _r(n, e, t, r) {
        var o,
          i = r.send;
        return (function (n, e) {
          if ((void 0 === e && (e = Lr), "undefined" !== n))
            return JSON.parse(n, function (n, t) {
              if (gr(this)) return t;
              var r, o;
              if (
                (gr(t)
                  ? ((r = t.__type__), (o = t.__val__))
                  : ((r = yr(t)), (o = t)),
                !r)
              )
                return o;
              var i = e[r] || Er[r];
              return i ? i(o, n) : o;
            });
        })(
          t,
          (((o = {}).cross_domain_zalgo_promise = function (n) {
            return (function (n, e, t) {
              return new _(t.then);
            })(0, 0, n);
          }),
          (o.cross_domain_function = function (t) {
            return (function (n, e, t, r) {
              var o = t.id,
                i = t.name,
                a = r.send,
                u = function (t) {
                  function r() {
                    var u = arguments;
                    return Pr.toProxyWindow(n, { send: a })
                      .awaitWindow()
                      .then(function (n) {
                        var l = Tr(n, o);
                        if (l && l.val !== r)
                          return l.val.apply(
                            { source: window, origin: B() },
                            u
                          );
                        var c = [].slice.call(u);
                        return t.fireAndForget
                          ? a(
                              n,
                              "postrobot_method",
                              { id: o, name: i, args: c },
                              { domain: e, fireAndForget: !0 }
                            )
                          : a(
                              n,
                              "postrobot_method",
                              { id: o, name: i, args: c },
                              { domain: e, fireAndForget: !1 }
                            ).then(function (n) {
                              return n.data.result;
                            });
                      })
                      .catch(function (n) {
                        throw n;
                      });
                  }
                  return (
                    void 0 === t && (t = {}),
                    (r.__name__ = i),
                    (r.__origin__ = e),
                    (r.__source__ = n),
                    (r.__id__ = o),
                    (r.origin = e),
                    r
                  );
                },
                l = u();
              return (l.fireAndForget = u({ fireAndForget: !0 })), l;
            })(n, e, t, { send: i });
          }),
          (o.cross_domain_window = function (n) {
            return Pr.deserialize(n, { send: i });
          }),
          o)
        );
      }
      var Ar = {};
      function Fr(n, e, t, r) {
        var o = r.on,
          i = r.send;
        return _.try(function () {
          var r = sr().getOrSet(n, function () {
            return {};
          });
          return (
            (r.buffer = r.buffer || []),
            r.buffer.push(t),
            (r.flush =
              r.flush ||
              _.flush().then(function () {
                if (J(n)) throw new Error("Window is closed");
                var t,
                  a,
                  u = kr(
                    n,
                    e,
                    ((t = r.buffer || []), ((a = {})[rr()] = t), a),
                    { on: o, send: i }
                  );
                delete r.buffer;
                for (
                  var l = Object.keys(Ar), c = [], s = 0;
                  s < l.length;
                  s++
                ) {
                  var d = l[s];
                  try {
                    Ar[d](n, u, e);
                  } catch (n) {
                    c.push(n);
                  }
                }
                if (c.length === l.length)
                  throw new Error(
                    "All post-robot messaging strategies failed:\n\n" +
                      c
                        .map(function (n, e) {
                          return e + ". " + Sn(n);
                        })
                        .join("\n\n")
                  );
              })),
            r.flush.then(function () {
              delete r.flush;
            })
          );
        }).then(Nn);
      }
      function Rr(n) {
        return ar("responseListeners").get(n);
      }
      function Mr(n) {
        ar("responseListeners").del(n);
      }
      function Ir(n) {
        return ar("erroredResponseListeners").has(n);
      }
      function Dr(n) {
        var e = n.name,
          t = n.win,
          r = n.domain,
          o = sr("requestListeners");
        if (("*" === t && (t = null), "*" === r && (r = null), !e))
          throw new Error("Name required to get request listener");
        for (var i = 0, a = [t, cr()]; i < a.length; i++) {
          var u = a[i];
          if (u) {
            var l = o.get(u);
            if (l) {
              var c = l[e];
              if (c) {
                if (r && "string" == typeof r) {
                  if (c[r]) return c[r];
                  if (c.__domain_regex__)
                    for (var s = 0, d = c.__domain_regex__; s < d.length; s++) {
                      var f = d[s],
                        p = f.listener;
                      if (en(f.regex, r)) return p;
                    }
                }
                if (c["*"]) return c["*"];
              }
            }
          }
        }
      }
      function jr(n, e, t, r) {
        var o = r.on,
          i = r.send,
          a = Dr({ name: t.name, win: n, domain: e }),
          u =
            "postrobot_method" === t.name &&
            t.data &&
            "string" == typeof t.data.name
              ? t.data.name + "()"
              : t.name;
        function l(r, a, l) {
          return _.flush().then(function () {
            if (!t.fireAndForget && !J(n))
              try {
                return Fr(
                  n,
                  e,
                  {
                    id: wn(),
                    origin: B(window),
                    type: "postrobot_message_response",
                    hash: t.hash,
                    name: t.name,
                    ack: r,
                    data: a,
                    error: l,
                  },
                  { on: o, send: i }
                );
              } catch (n) {
                throw new Error(
                  "Send response message failed for " +
                    u +
                    " in " +
                    B() +
                    "\n\n" +
                    Sn(n)
                );
              }
          });
        }
        return _.all([
          _.flush().then(function () {
            if (!t.fireAndForget && !J(n))
              try {
                return Fr(
                  n,
                  e,
                  {
                    id: wn(),
                    origin: B(window),
                    type: "postrobot_message_ack",
                    hash: t.hash,
                    name: t.name,
                  },
                  { on: o, send: i }
                );
              } catch (n) {
                throw new Error(
                  "Send ack message failed for " +
                    u +
                    " in " +
                    B() +
                    "\n\n" +
                    Sn(n)
                );
              }
          }),
          _.try(function () {
            if (!a)
              throw new Error(
                "No handler found for post message: " +
                  t.name +
                  " from " +
                  e +
                  " in " +
                  window.location.protocol +
                  "//" +
                  window.location.host +
                  window.location.pathname
              );
            if (!en(a.domain, e))
              throw new Error(
                "Request origin " +
                  e +
                  " does not match domain " +
                  a.domain.toString()
              );
            return a.handler({ source: n, origin: e, data: t.data });
          }).then(
            function (n) {
              return l("success", n);
            },
            function (n) {
              return l("error", null, n);
            }
          ),
        ])
          .then(Nn)
          .catch(function (n) {
            if (a && a.handleError) return a.handleError(n);
            throw n;
          });
      }
      function Hr(n, e, t) {
        if (!Ir(t.hash)) {
          var r = Rr(t.hash);
          if (!r)
            throw new Error(
              "No handler found for post message ack for message: " +
                t.name +
                " from " +
                e +
                " in " +
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname
            );
          try {
            if (!en(r.domain, e))
              throw new Error(
                "Ack origin " +
                  e +
                  " does not match domain " +
                  r.domain.toString()
              );
            if (n !== r.win)
              throw new Error("Ack source does not match registered window");
          } catch (n) {
            r.promise.reject(n);
          }
          r.ack = !0;
        }
      }
      function Br(n, e, t) {
        if (!Ir(t.hash)) {
          var r,
            o = Rr(t.hash);
          if (!o)
            throw new Error(
              "No handler found for post message response for message: " +
                t.name +
                " from " +
                e +
                " in " +
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname
            );
          if (!en(o.domain, e))
            throw new Error(
              "Response origin " +
                e +
                " does not match domain " +
                ((r = o.domain),
                Array.isArray(r)
                  ? "(" + r.join(" | ") + ")"
                  : A(r)
                  ? "RegExp(" + r.toString()
                  : r.toString())
            );
          if (n !== o.win)
            throw new Error("Response source does not match registered window");
          Mr(t.hash),
            "error" === t.ack
              ? o.promise.reject(t.error)
              : "success" === t.ack &&
                o.promise.resolve({ source: n, origin: e, data: t.data });
        }
      }
      function Ur(n, e) {
        var t = e.on,
          r = e.send,
          o = ar("receivedMessages");
        try {
          if (!window || window.closed || !n.source) return;
        } catch (n) {
          return;
        }
        var i = n.source,
          a = n.origin,
          u = (function (n, e, t, r) {
            var o,
              i = r.on,
              a = r.send;
            try {
              o = _r(e, t, n, { on: i, send: a });
            } catch (n) {
              return;
            }
            if (o && "object" == typeof o && null !== o) {
              var u = o[rr()];
              if (Array.isArray(u)) return u;
            }
          })(n.data, i, a, { on: t, send: r });
        if (u) {
          mr(i);
          for (var l = 0; l < u.length; l++) {
            var c = u[l];
            if (o.has(c.id)) return;
            if ((o.set(c.id, !0), J(i) && !c.fireAndForget)) return;
            0 === c.origin.indexOf("file:") && (a = "file://");
            try {
              "postrobot_message_request" === c.type
                ? jr(i, a, c, { on: t, send: r })
                : "postrobot_message_response" === c.type
                ? Br(i, a, c)
                : "postrobot_message_ack" === c.type && Hr(i, a, c);
            } catch (n) {
              setTimeout(function () {
                throw n;
              }, 0);
            }
          }
        }
      }
      function Wr(n, e, t) {
        if (!n) throw new Error("Expected name");
        if (("function" == typeof (e = e || {}) && ((t = e), (e = {})), !t))
          throw new Error("Expected handler");
        ((e = e || {}).name = n), (e.handler = t || e.handler);
        var r = e.window,
          o = e.domain,
          i = (function n(e, t) {
            var r = e.name,
              o = e.win,
              i = e.domain,
              a = sr("requestListeners");
            if (!r || "string" != typeof r)
              throw new Error("Name required to add request listener");
            if (Array.isArray(o)) {
              for (var u = [], l = 0, c = o; l < c.length; l++)
                u.push(n({ name: r, domain: i, win: c[l] }, t));
              return {
                cancel: function () {
                  for (var n = 0; n < u.length; n++) u[n].cancel();
                },
              };
            }
            if (Array.isArray(i)) {
              for (var s = [], d = 0, f = i; d < f.length; d++)
                s.push(n({ name: r, win: o, domain: f[d] }, t));
              return {
                cancel: function () {
                  for (var n = 0; n < s.length; n++) s[n].cancel();
                },
              };
            }
            var p = Dr({ name: r, win: o, domain: i });
            if (((o && "*" !== o) || (o = cr()), (i = i || "*"), p))
              throw o && i
                ? new Error(
                    "Request listener already exists for " +
                      r +
                      " on domain " +
                      i.toString() +
                      " for " +
                      (o === cr() ? "wildcard" : "specified") +
                      " window"
                  )
                : o
                ? new Error(
                    "Request listener already exists for " +
                      r +
                      " for " +
                      (o === cr() ? "wildcard" : "specified") +
                      " window"
                  )
                : i
                ? new Error(
                    "Request listener already exists for " +
                      r +
                      " on domain " +
                      i.toString()
                  )
                : new Error("Request listener already exists for " + r);
            var h,
              m,
              g = a.getOrSet(o, function () {
                return {};
              }),
              y = Yn(g, r, function () {
                return {};
              }),
              w = i.toString();
            return (
              Vn(i)
                ? (h = Yn(y, "__domain_regex__", function () {
                    return [];
                  })).push((m = { regex: i, listener: t }))
                : (y[w] = t),
              {
                cancel: function () {
                  delete y[w],
                    m &&
                      (h.splice(h.indexOf(m, 1)),
                      h.length || delete y.__domain_regex__),
                    Object.keys(y).length || delete g[r],
                    o && !Object.keys(g).length && a.del(o);
                },
              }
            );
          })(
            { name: n, win: r, domain: o },
            {
              handler: e.handler,
              handleError:
                e.errorHandler ||
                function (n) {
                  throw n;
                },
              window: r,
              domain: o || "*",
              name: n,
            }
          );
        return {
          cancel: function () {
            i.cancel();
          },
        };
      }
      function Zr(n, e, t) {
        "function" == typeof (e = e || {}) && ((t = e), (e = {}));
        var r,
          o = new _();
        return (
          (e.errorHandler = function (n) {
            r.cancel(), o.reject(n);
          }),
          (r = Wr(n, e, function (n) {
            if ((r.cancel(), o.resolve(n), t)) return t(n);
          })),
          (o.cancel = r.cancel),
          o
        );
      }
      (Ar.postrobot_post_message = function (n, e, t) {
        0 === t.indexOf("file:") && (t = "*"), n.postMessage(e, t);
      }),
        (Ar.postrobot_global = function (n, e) {
          if (
            !(function (n) {
              return (
                (n = n || window).navigator.mockUserAgent ||
                n.navigator.userAgent
              );
            })(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)
          )
            throw new Error("Global messaging not needed for browser");
          if (!U(n))
            throw new Error(
              "Post message through global disabled between different domain windows"
            );
          if (!1 !== nn(window, n))
            throw new Error(
              "Can only use global to communicate between two different windows, not between frames"
            );
          var t = or(n);
          if (!t)
            throw new Error("Can not find postRobot global on foreign window");
          t.receiveMessage({ source: window, origin: B(), data: e });
        });
      var zr = function n(e, t, r, o) {
        var i = (o = o || {}).domain || "*",
          a = o.timeout || -1,
          u = o.timeout || 5e3,
          l = o.fireAndForget || !1;
        return _.try(function () {
          if (
            ((function (n, e, t) {
              if (!n) throw new Error("Expected name");
              if (t && "string" != typeof t && !Array.isArray(t) && !Vn(t))
                throw new TypeError(
                  "Can not send " +
                    n +
                    ". Expected domain " +
                    JSON.stringify(t) +
                    " to be a string, array, or regex"
                );
              if (J(e))
                throw new Error(
                  "Can not send " + n + ". Target window is closed"
                );
            })(t, e, i),
            (function (n, e) {
              var t = X(e);
              if (t) return t === n;
              if (e === n) return !1;
              if (G(e) === e) return !1;
              for (var r = 0, o = z(n); r < o.length; r++)
                if (o[r] === e) return !0;
              return !1;
            })(window, e))
          )
            return (function (n, e, t) {
              void 0 === e && (e = 5e3), void 0 === t && (t = "Window");
              var r = (function (n) {
                return sr("helloPromises").getOrSet(n, function () {
                  return new _();
                });
              })(n);
              return (
                -1 !== e &&
                  (r = r.timeout(
                    e,
                    new Error(t + " did not load after " + e + "ms")
                  )),
                r
              );
            })(e, u);
        })
          .then(function (t) {
            return (function (n, e, t, r) {
              var o = r.send;
              return _.try(function () {
                return "string" == typeof e
                  ? e
                  : _.try(function () {
                      return (
                        t ||
                        pr(n, { send: o }).then(function (n) {
                          return n.domain;
                        })
                      );
                    }).then(function (n) {
                      if (!en(e, e))
                        throw new Error(
                          "Domain " + _n(e) + " does not match " + _n(e)
                        );
                      return n;
                    });
              });
            })(e, i, (void 0 === t ? {} : t).domain, { send: n });
          })
          .then(function (o) {
            var i = o,
              u =
                "postrobot_method" === t && r && "string" == typeof r.name
                  ? r.name + "()"
                  : t,
              c = new _(),
              s = t + "_" + wn();
            if (!l) {
              var d = { name: t, win: e, domain: i, promise: c };
              !(function (n, e) {
                ar("responseListeners").set(n, e);
              })(s, d);
              var f = sr("requestPromises").getOrSet(e, function () {
                return [];
              });
              f.push(c),
                c.catch(function () {
                  !(function (n) {
                    ar("erroredResponseListeners").set(n, !0);
                  })(s),
                    Mr(s);
                });
              var p = (function (n) {
                  return sr("knownWindows").get(n, !1);
                })(e)
                  ? 1e4
                  : 2e3,
                h = a,
                m = p,
                g = h,
                y = Hn(function () {
                  return J(e)
                    ? c.reject(
                        new Error(
                          "Window closed for " +
                            t +
                            " before " +
                            (d.ack ? "response" : "ack")
                        )
                      )
                    : d.cancelled
                    ? c.reject(
                        new Error("Response listener was cancelled for " + t)
                      )
                    : ((m = Math.max(m - 500, 0)),
                      -1 !== g && (g = Math.max(g - 500, 0)),
                      d.ack || 0 !== m
                        ? 0 === g
                          ? c.reject(
                              new Error(
                                "No response for postMessage " +
                                  u +
                                  " in " +
                                  B() +
                                  " in " +
                                  h +
                                  "ms"
                              )
                            )
                          : void 0
                        : c.reject(
                            new Error(
                              "No ack for postMessage " +
                                u +
                                " in " +
                                B() +
                                " in " +
                                p +
                                "ms"
                            )
                          ));
                }, 500);
              c.finally(function () {
                y.cancel(), f.splice(f.indexOf(c, 1));
              }).catch(Nn);
            }
            return Fr(
              e,
              i,
              {
                id: wn(),
                origin: B(window),
                type: "postrobot_message_request",
                hash: s,
                name: t,
                data: r,
                fireAndForget: l,
              },
              { on: Wr, send: n }
            ).then(
              function () {
                return l ? c.resolve() : c;
              },
              function (n) {
                throw new Error(
                  "Send request message failed for " +
                    u +
                    " in " +
                    B() +
                    "\n\n" +
                    Sn(n)
                );
              }
            );
          });
      };
      function qr(n, e, t) {
        return kr(n, e, t, { on: Wr, send: zr });
      }
      function Gr(n, e, t) {
        return _r(n, e, t, { on: Wr, send: zr });
      }
      function Kr(n) {
        return new Pr({ send: zr, win: n });
      }
      function Vr(n) {
        return Pr.toProxyWindow(n, { send: zr });
      }
      function Yr() {
        var n, e, t;
        or().initialized ||
          ((or().initialized = !0),
          (function (n) {
            var e = n.on,
              t = n.send,
              r = or();
            r.receiveMessage =
              r.receiveMessage ||
              function (n) {
                return Ur(n, { on: e, send: t });
              };
          })({ on: Wr, send: zr }),
          (e = (n = { on: Wr, send: zr }).on),
          (t = n.send),
          ar().getOrSet("postMessageListener", function () {
            return Ee(window, "message", function (n) {
              !(function (n, e) {
                var t = e.on,
                  r = e.send;
                _.try(function () {
                  var e = n.source || n.sourceElement,
                    o = n.origin || (n.originalEvent && n.originalEvent.origin),
                    i = n.data;
                  if (("null" === o && (o = "file://"), e)) {
                    if (!o)
                      throw new Error(
                        "Post message did not have origin domain"
                      );
                    Ur({ source: e, origin: o, data: i }, { on: t, send: r });
                  }
                });
              })(n, { on: e, send: t });
            });
          }),
          (function (n) {
            var e = n.on,
              t = n.send;
            ar("builtinListeners").getOrSet("helloListener", function () {
              var n = e("postrobot_hello", { domain: "*" }, function (n) {
                  return (
                    fr(n.source, { domain: n.origin }), { instanceID: dr() }
                  );
                }),
                r = X();
              return r && pr(r, { send: t }).catch(function (n) {}), n;
            });
          })({ on: Wr, send: zr }));
      }
      function Jr() {
        var n, e;
        !(function () {
          for (
            var n = ar("responseListeners"), e = 0, t = n.keys();
            e < t.length;
            e++
          ) {
            var r = t[e],
              o = n.get(r);
            o && (o.cancelled = !0), n.del(r);
          }
        })(),
          (n = ar().get("postMessageListener")) && n.cancel(),
          (e = rr()),
          delete window[e];
      }
      var Xr = !0;
      function $r(n) {
        for (var e = 0, t = sr("requestPromises").get(n, []); e < t.length; e++)
          t[e]
            .reject(
              new Error(
                "Window " +
                  (J(n) ? "closed" : "cleaned up") +
                  " before response"
              )
            )
            .catch(Nn);
      }
      function Qr() {
        return "__zoid_9_0_65___" + De();
      }
      function no(n) {
        void 0 === n && (n = window);
        var e = Qr();
        if (!U(n))
          throw new Error("Can not get global for window on different domain");
        return n[e] || (n[e] = {}), n[e];
      }
      function eo(n) {
        return {
          get: function () {
            var e = this;
            return _.try(function () {
              if (e.source && e.source !== window)
                throw new Error(
                  "Can not call get on proxy object from a remote window"
                );
              return n;
            });
          },
        };
      }
      Yr();
      var to = F;
      function ro(n, e, t, r, o) {
        if (!n.hasOwnProperty(t)) return r;
        var i = n[t];
        return "function" == typeof i.childDecorate
          ? i.childDecorate({
              value: r,
              uid: o.uid,
              close: o.close,
              focus: o.focus,
              onError: o.onError,
              onProps: o.onProps,
              resize: o.resize,
              getParent: o.getParent,
              getParentDomain: o.getParentDomain,
              show: o.show,
              hide: o.hide,
            })
          : r;
      }
      function oo(n) {
        return Pn(
          oo,
          function () {
            if (!n) throw new Error("No window name");
            var e = n.split("__"),
              t = e[1],
              r = e[2],
              o = e[3];
            if ("zoid" !== t)
              throw new Error("Window not rendered by zoid - got " + t);
            if (!r) throw new Error("Expected component name");
            if (!o) throw new Error("Expected encoded payload");
            try {
              return JSON.parse(yn(o));
            } catch (n) {
              throw new Error(
                "Can not decode window name payload: " + o + ": " + Sn(n)
              );
            }
          },
          [n]
        );
      }
      function io() {
        try {
          return oo(window.name);
        } catch (n) {}
      }
      function ao() {
        return _.try(function () {
          window.focus();
        });
      }
      function uo() {
        return _.try(function () {
          window.close();
        });
      }
      function lo(n, e, t) {
        return _.try(function () {
          return "function" == typeof n.queryParam
            ? n.queryParam({ value: t })
            : "string" == typeof n.queryParam
            ? n.queryParam
            : e;
        });
      }
      function co(n, e, t) {
        return _.try(function () {
          return "function" == typeof n.queryValue && Kn(t)
            ? n.queryValue({ value: t })
            : t;
        });
      }
      function so(n, e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = window);
        var r,
          o,
          i,
          a = n.propsDef,
          u = n.containerTemplate,
          l = n.prerenderTemplate,
          c = n.tag,
          s = n.name,
          d = n.attributes,
          f = n.dimensions,
          p = n.autoResize,
          h = n.url,
          m = n.domain,
          g = new _(),
          y = [],
          w = Jn(),
          v = {},
          b = { visible: !0 },
          C = e.event ? e.event : Bn(),
          L = e.props ? e.props : {},
          x = e.onError,
          O = e.getProxyContainer,
          P = e.show,
          N = e.hide,
          T = e.close,
          S = e.renderContainer,
          k = e.getProxyWindow,
          A = e.setProxyWin,
          F = e.openFrame,
          R = e.openPrerenderFrame,
          M = e.prerender,
          I = e.open,
          D = e.openPrerender,
          j = e.watchForUnload,
          H = e.getInternalState,
          Z = e.setInternalState,
          z = function (n) {
            for (var e = {}, t = 0, r = Object.keys(L); t < r.length; t++) {
              var o = r[t],
                i = a[o];
              (i && !1 === i.sendToChild) ||
                (i && i.sameDomain && !en(n, B(window))) ||
                (e[o] = L[o]);
            }
            return _.hash(e);
          },
          q = function () {
            return _.try(function () {
              return H ? H() : b;
            });
          },
          G = function (n) {
            return _.try(function () {
              return Z ? Z(n) : (b = E({}, b, n));
            });
          },
          K = function () {
            return k
              ? k()
              : _.try(function () {
                  var n = L.window;
                  if (n) {
                    var e = Vr(n);
                    return (
                      w.register(function () {
                        return n.close();
                      }),
                      e
                    );
                  }
                  return new Pr({ send: zr });
                });
          },
          V = function (n) {
            return O
              ? O(n)
              : _.try(function () {
                  return he(n);
                }).then(function (n) {
                  return (
                    Fe(n) &&
                      (n = (function n(e) {
                        var t = (function (n) {
                          var e = (function (n) {
                            for (; n.parentNode; ) n = n.parentNode;
                            if (Fe(n)) return n;
                          })(n);
                          if (e && e.host) return e.host;
                        })(e);
                        if (!t) throw new Error("Element is not in shadow dom");
                        var r = "shadow-slot-" + wn(),
                          o = document.createElement("slot");
                        o.setAttribute("name", r), e.appendChild(o);
                        var i = document.createElement("div");
                        return (
                          i.setAttribute("slot", r),
                          t.appendChild(i),
                          Fe(t) ? n(i) : i
                        );
                      })(n)),
                    eo(n)
                  );
                });
          },
          Y = function (n) {
            return A
              ? A(n)
              : _.try(function () {
                  r = n;
                });
          },
          X = function () {
            return P
              ? P()
              : _.hash({
                  setState: G({ visible: !0 }),
                  showElement: o ? o.get().then(Te) : null,
                }).then(Nn);
          },
          $ = function () {
            return N
              ? N()
              : _.hash({
                  setState: G({ visible: !1 }),
                  showElement: o ? o.get().then(Se) : null,
                }).then(Nn);
          },
          on = function () {
            return "function" == typeof h ? h({ props: L }) : h;
          },
          un = function () {
            return "function" == typeof d ? d({ props: L }) : d;
          },
          ln = function () {
            return m && "string" == typeof m ? m : tn(on());
          },
          cn = function () {
            return m && Vn(m) ? m : ln();
          },
          sn = function (n, e) {
            var t = e.windowName;
            return F
              ? F(n, { windowName: t })
              : _.try(function () {
                  if (n === to.IFRAME)
                    return eo(
                      Ce({ attributes: E({ name: t, title: s }, un().iframe) })
                    );
                });
          },
          dn = function (n) {
            return R
              ? R(n)
              : _.try(function () {
                  if (n === to.IFRAME)
                    return eo(
                      Ce({
                        attributes: E(
                          {
                            name:
                              "__zoid_prerender_frame__" +
                              s +
                              "_" +
                              wn() +
                              "__",
                            title: "prerender__" + s,
                          },
                          un().iframe
                        ),
                      })
                    );
                });
          },
          fn = function (n, e, t) {
            return D
              ? D(n, e, t)
              : _.try(function () {
                  if (n === to.IFRAME) {
                    if (!t)
                      throw new Error("Expected proxy frame to be passed");
                    return t.get().then(function (n) {
                      return (
                        w.register(function () {
                          return ke(n);
                        }),
                        be(n)
                          .then(function (n) {
                            return W(n);
                          })
                          .then(function (n) {
                            return Vr(n);
                          })
                      );
                    });
                  }
                  if (n === to.POPUP) return e;
                  throw new Error("No render context available for " + n);
                });
          },
          pn = function () {
            return _.try(function () {
              if (r)
                return _.all([C.trigger("zoid-focus"), r.focus()]).then(Nn);
            });
          },
          hn = function (n, e, t, r) {
            if (e === B(window)) {
              var o = no(window);
              return (
                (o.windows = o.windows || {}),
                (o.windows[t] = window),
                w.register(function () {
                  delete o.windows[t];
                }),
                { type: "global", uid: t }
              );
            }
            return r === to.POPUP
              ? { type: "opener" }
              : { type: "parent", distance: Q(window) };
          },
          mn = function (n) {
            return _.try(function () {
              (i = n),
                g.resolve(),
                w.register(function () {
                  return n.close.fireAndForget().catch(Nn);
                });
            });
          },
          yn = function (n) {
            var e = n.width,
              t = n.height;
            return _.try(function () {
              C.trigger("zoid-resize", { width: e, height: t });
            });
          },
          vn = function (n) {
            return _.try(function () {
              return C.trigger("zoid-destroy");
            })
              .catch(Nn)
              .then(function () {
                return w.all(n);
              })
              .then(function () {
                g.asyncReject(n || new Error("Component destroyed"));
              });
          },
          bn = xn(function (n) {
            return _.try(function () {
              if (T) {
                if (J(T.__source__)) return;
                return T();
              }
              return _.try(function () {
                return C.trigger("zoid-close");
              }).then(function () {
                return vn(n || new Error("Component closed"));
              });
            });
          }),
          Cn = function (n, e) {
            var t = e.proxyWin,
              r = e.proxyFrame,
              o = e.windowName;
            return I
              ? I(n, { proxyWin: t, proxyFrame: r, windowName: o })
              : _.try(function () {
                  if (n === to.IFRAME) {
                    if (!r)
                      throw new Error("Expected proxy frame to be passed");
                    return r.get().then(function (n) {
                      return be(n).then(function (e) {
                        return (
                          w.register(function () {
                            return ke(n);
                          }),
                          w.register(function () {
                            return $r(e);
                          }),
                          e
                        );
                      });
                    });
                  }
                  if (n === to.POPUP) {
                    var e = f.width,
                      t = f.height;
                    (e = Ve(e, window.outerWidth)),
                      (t = Ve(t, window.outerWidth));
                    var i = ye(
                      "",
                      E({ name: o, width: e, height: t }, un().popup)
                    );
                    return (
                      w.register(function () {
                        return an(i);
                      }),
                      w.register(function () {
                        return $r(i);
                      }),
                      i
                    );
                  }
                  throw new Error("No render context available for " + n);
                }).then(function (n) {
                  return t.setWindow(n, { send: zr }), t;
                });
          },
          En = function () {
            return _.try(function () {
              var n = Ee(
                  window,
                  "unload",
                  Tn(function () {
                    vn(new Error("Window navigated away"));
                  })
                ),
                e = rn(t, vn, 3e3);
              if ((w.register(e.cancel), w.register(n.cancel), j)) return j();
            });
          },
          Ln = function (n) {
            var e = !1;
            return n
              .isClosed()
              .then(function (t) {
                return t
                  ? ((e = !0), bn(new Error("Detected component window close")))
                  : _.delay(200)
                      .then(function () {
                        return n.isClosed();
                      })
                      .then(function (n) {
                        if (n)
                          return (
                            (e = !0),
                            bn(new Error("Detected component window close"))
                          );
                      });
              })
              .then(function () {
                return e;
              });
          },
          On = function (n) {
            return x
              ? x(n)
              : _.try(function () {
                  if (-1 === y.indexOf(n))
                    return (
                      y.push(n), g.asyncReject(n), C.trigger("zoid-error", n)
                    );
                });
          };
        mn.onError = On;
        var Pn = function (n, e) {
            return n({
              container: e.container,
              context: e.context,
              uid: e.uid,
              doc: e.doc,
              frame: e.frame,
              prerenderFrame: e.prerenderFrame,
              focus: pn,
              close: bn,
              state: v,
              props: L,
              tag: c,
              dimensions: f,
              event: C,
            });
          },
          kn = function (n, e) {
            var t = e.context,
              r = e.uid;
            return M
              ? M(n, { context: t, uid: r })
              : _.try(function () {
                  if (l) {
                    var e = n.getWindow();
                    if (
                      e &&
                      U(e) &&
                      (function (n) {
                        try {
                          if (!n.location.href) return !0;
                          if ("about:blank" === n.location.href) return !0;
                        } catch (n) {}
                        return !1;
                      })(e)
                    ) {
                      var o = (e = W(e)).document,
                        i = Pn(l, { context: t, uid: r, doc: o });
                      if (i) {
                        if (i.ownerDocument !== o)
                          throw new Error(
                            "Expected prerender template to have been created with document from child window"
                          );
                        we(e, i);
                        var a = p.width,
                          u = void 0 !== a && a,
                          c = p.height,
                          s = void 0 !== c && c,
                          d = p.element,
                          f = void 0 === d ? "body" : d;
                        if ((f = fe(f, o)) && (u || s)) {
                          var h = Ae(
                            f,
                            function (n) {
                              yn({
                                width: u ? n.width : void 0,
                                height: s ? n.height : void 0,
                              });
                            },
                            { width: u, height: s, win: e }
                          );
                          C.on("zoid-rendered", h.cancel);
                        }
                      }
                    }
                  }
                });
          },
          _n = function (n, e) {
            var t = e.proxyFrame,
              r = e.proxyPrerenderFrame,
              i = e.context,
              a = e.uid;
            return S
              ? S(n, {
                  proxyFrame: t,
                  proxyPrerenderFrame: r,
                  context: i,
                  uid: a,
                })
              : _.hash({
                  container: n.get(),
                  frame: t ? t.get() : null,
                  prerenderFrame: r ? r.get() : null,
                  internalState: q(),
                }).then(function (n) {
                  var e = n.container,
                    t = n.internalState.visible,
                    r = Pn(u, {
                      context: i,
                      uid: a,
                      container: e,
                      frame: n.frame,
                      prerenderFrame: n.prerenderFrame,
                      doc: document,
                    });
                  if (r) {
                    t || Se(r), se(e, r);
                    var l = (function (n, e) {
                      e = Tn(e);
                      var t,
                        r,
                        o,
                        i = !1,
                        a = [],
                        u = function () {
                          i = !0;
                          for (var n = 0; n < a.length; n++) a[n].disconnect();
                          t && t.cancel(),
                            o && o.removeEventListener("unload", l),
                            r && ke(r);
                        },
                        l = function () {
                          i || (e(), u());
                        };
                      if (_e(n)) return l(), { cancel: u };
                      if (window.MutationObserver)
                        for (var c = n.parentElement; c; ) {
                          var s = new window.MutationObserver(function () {
                            _e(n) && l();
                          });
                          s.observe(c, { childList: !0 }),
                            a.push(s),
                            (c = c.parentElement);
                        }
                      return (
                        (r = document.createElement("iframe")).setAttribute(
                          "name",
                          "__detect_close_" + wn() + "__"
                        ),
                        (r.style.display = "none"),
                        be(r).then(function (n) {
                          (o = W(n)).addEventListener("unload", l);
                        }),
                        n.appendChild(r),
                        (t = Hn(function () {
                          _e(n) && l();
                        }, 1e3)),
                        { cancel: u }
                      );
                    })(r, function () {
                      return bn(
                        new Error("Detected container element removed from DOM")
                      );
                    });
                    return (
                      w.register(function () {
                        return l.cancel();
                      }),
                      w.register(function () {
                        return ke(r);
                      }),
                      (o = eo(r))
                    );
                  }
                });
          },
          Fn = function () {
            return {
              state: v,
              event: C,
              close: bn,
              focus: pn,
              resize: yn,
              onError: On,
              updateProps: Mn,
              show: X,
              hide: $,
            };
          },
          Rn = function (n, e) {
            void 0 === e && (e = !1);
            var t = Fn();
            !(function (n, e, t, r, o) {
              void 0 === o && (o = !1), An(e, (t = t || {}));
              for (
                var i = o ? [] : [].concat(Object.keys(n)),
                  a = 0,
                  u = Object.keys(t);
                a < u.length;
                a++
              ) {
                var l = u[a];
                -1 === i.indexOf(l) && i.push(l);
              }
              for (
                var c = [],
                  s = r.state,
                  d = r.close,
                  f = r.focus,
                  p = r.event,
                  h = r.onError,
                  m = 0;
                m < i.length;
                m++
              ) {
                var g = i[m],
                  y = n[g],
                  w = t[g];
                if (y) {
                  var v = y.alias;
                  if (
                    (v && (!Kn(w) && Kn(t[v]) && (w = t[v]), c.push(v)),
                    y.value &&
                      (w = y.value({
                        props: e,
                        state: s,
                        close: d,
                        focus: f,
                        event: p,
                        onError: h,
                      })),
                    !Kn(w) &&
                      y.default &&
                      (w = y.default({
                        props: e,
                        state: s,
                        close: d,
                        focus: f,
                        event: p,
                        onError: h,
                      })),
                    Kn(w) &&
                      ("array" === y.type
                        ? !Array.isArray(w)
                        : typeof w !== y.type))
                  )
                    throw new TypeError(
                      "Prop is not of type " + y.type + ": " + g
                    );
                  e[g] = w;
                }
              }
              for (var b = 0; b < c.length; b++) delete e[c[b]];
              for (var C = 0, E = Object.keys(e); C < E.length; C++) {
                var L = E[C],
                  x = n[L],
                  O = e[L];
                x &&
                  Kn(O) &&
                  x.decorate &&
                  (e[L] = x.decorate({
                    value: O,
                    props: e,
                    state: s,
                    close: d,
                    focus: f,
                    event: p,
                    onError: h,
                  }));
              }
              for (var P = 0, N = Object.keys(n); P < N.length; P++) {
                var T = N[P];
                if (!1 !== n[T].required && !Kn(e[T]))
                  throw new Error('Expected prop "' + T + '" to be defined');
              }
            })(a, L, n, t, e);
          },
          Mn = function (n) {
            return (
              Rn(n, !0),
              g.then(function () {
                var n = i,
                  e = r;
                if (n && e)
                  return z(cn()).then(function (t) {
                    return n.updateProps(t).catch(function (n) {
                      return Ln(e).then(function (e) {
                        if (!e) throw n;
                      });
                    });
                  });
              })
            );
          };
        return {
          init: function () {
            C.on("zoid-render", function () {
              return L.onRender();
            }),
              C.on("zoid-display", function () {
                return L.onDisplay();
              }),
              C.on("zoid-rendered", function () {
                return L.onRendered();
              }),
              C.on("zoid-close", function () {
                return L.onClose();
              }),
              C.on("zoid-destroy", function () {
                return L.onDestroy();
              }),
              C.on("zoid-resize", function () {
                return L.onResize();
              }),
              C.on("zoid-focus", function () {
                return L.onFocus();
              }),
              C.on("zoid-props", function (n) {
                return L.onProps(n);
              }),
              C.on("zoid-error", function (n) {
                return L && L.onError
                  ? L.onError(n)
                  : g.reject(n).then(function () {
                      setTimeout(function () {
                        throw n;
                      }, 1);
                    });
              }),
              w.register(C.reset);
          },
          render: function (n, e, t) {
            return _.try(function () {
              var o = "zoid-" + c + "-" + wn(),
                i = cn(),
                u = ln();
              !(function (n, e, t) {
                if (n !== window) {
                  if (!nn(window, n))
                    throw new Error("Can only renderTo an adjacent frame");
                  var r = B();
                  if (!en(e, r) && !U(n))
                    throw new Error(
                      "Can not render remotely to " +
                        e.toString() +
                        " - can only render to " +
                        r
                    );
                  if (t && "string" != typeof t)
                    throw new Error(
                      "Container passed to renderTo must be a string selector, got " +
                        typeof t +
                        " }"
                    );
                }
              })(n, i, e);
              var l = _.try(function () {
                  if (n !== window)
                    return (function (n, e) {
                      for (
                        var t = {}, r = 0, o = Object.keys(L);
                        r < o.length;
                        r++
                      ) {
                        var i = o[r],
                          u = a[i];
                        u && u.allowDelegate && (t[i] = L[i]);
                      }
                      var l = zr(e, "zoid_delegate_" + s, {
                        overrides: {
                          props: t,
                          event: C,
                          close: bn,
                          onError: On,
                          getInternalState: q,
                          setInternalState: G,
                        },
                      })
                        .then(function (n) {
                          var t = n.data.parent;
                          return (
                            w.register(function (n) {
                              if (!J(e)) return t.destroy(n);
                            }),
                            t.getDelegateOverrides()
                          );
                        })
                        .catch(function (n) {
                          throw new Error(
                            "Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" +
                              Sn(n)
                          );
                        });
                      return (
                        (O = function () {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return l.then(function (n) {
                            return n.getProxyContainer.apply(n, e);
                          });
                        }),
                        (S = function () {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return l.then(function (n) {
                            return n.renderContainer.apply(n, e);
                          });
                        }),
                        (P = function () {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return l.then(function (n) {
                            return n.show.apply(n, e);
                          });
                        }),
                        (N = function () {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return l.then(function (n) {
                            return n.hide.apply(n, e);
                          });
                        }),
                        (j = function () {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return l.then(function (n) {
                            return n.watchForUnload.apply(n, e);
                          });
                        }),
                        n === to.IFRAME
                          ? ((k = function () {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return l.then(function (n) {
                                return n.getProxyWindow.apply(n, e);
                              });
                            }),
                            (F = function () {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return l.then(function (n) {
                                return n.openFrame.apply(n, e);
                              });
                            }),
                            (R = function () {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return l.then(function (n) {
                                return n.openPrerenderFrame.apply(n, e);
                              });
                            }),
                            (M = function () {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return l.then(function (n) {
                                return n.prerender.apply(n, e);
                              });
                            }),
                            (I = function () {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return l.then(function (n) {
                                return n.open.apply(n, e);
                              });
                            }),
                            (D = function () {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return l.then(function (n) {
                                return n.openPrerender.apply(n, e);
                              });
                            }))
                          : n === to.POPUP &&
                            (A = function () {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return l.then(function (n) {
                                return n.setProxyWin.apply(n, e);
                              });
                            }),
                        l
                      );
                    })(t, n);
                }),
                d = L.window,
                f = En(),
                p = (function (n, e) {
                  var t = {},
                    r = Object.keys(e);
                  return _.all(
                    r.map(function (r) {
                      var o = n[r];
                      if (o)
                        return _.resolve()
                          .then(function () {
                            var n = e[r];
                            if (null != n && o.queryParam) return n;
                          })
                          .then(function (n) {
                            if (null != n)
                              return _.all([lo(o, r, n), co(o, 0, n)]).then(
                                function (n) {
                                  var e,
                                    i = n[0],
                                    a = n[1];
                                  if ("boolean" == typeof a) e = a.toString();
                                  else if ("string" == typeof a)
                                    e = a.toString();
                                  else if ("object" == typeof a && null !== a) {
                                    if ("json" === o.serialization)
                                      e = JSON.stringify(a);
                                    else if ("base64" === o.serialization)
                                      e = gn(JSON.stringify(a));
                                    else if (
                                      "dotify" === o.serialization ||
                                      !o.serialization
                                    ) {
                                      e = (function n(e, t, r) {
                                        for (var o in (void 0 === t && (t = ""),
                                        void 0 === r && (r = {}),
                                        (t = t ? t + "." : t),
                                        e))
                                          e.hasOwnProperty(o) &&
                                            null != e[o] &&
                                            "function" != typeof e[o] &&
                                            (e[o] &&
                                            Array.isArray(e[o]) &&
                                            e[o].length &&
                                            e[o].every(function (n) {
                                              return "object" != typeof n;
                                            })
                                              ? (r["" + t + o + "[]"] = e[
                                                  o
                                                ].join(","))
                                              : e[o] && "object" == typeof e[o]
                                              ? (r = n(e[o], "" + t + o, r))
                                              : (r["" + t + o] = e[
                                                  o
                                                ].toString()));
                                        return r;
                                      })(a, r);
                                      for (
                                        var u = 0, l = Object.keys(e);
                                        u < l.length;
                                        u++
                                      ) {
                                        var c = l[u];
                                        t[c] = e[c];
                                      }
                                      return;
                                    }
                                  } else
                                    "number" == typeof a && (e = a.toString());
                                  t[i] = e;
                                }
                              );
                          });
                    })
                  ).then(function () {
                    return t;
                  });
                })(a, L).then(function (n) {
                  return ie(
                    (function (n) {
                      if (0 !== tn(n).indexOf("mock:")) return n;
                      throw new Error(
                        "Mock urls not supported out of test mode"
                      );
                    })(on()),
                    { query: n }
                  );
                }),
                h = C.trigger("zoid-render"),
                m = V(e),
                y = K(),
                v = y.then(function (e) {
                  return (function (n) {
                    var e = void 0 === n ? {} : n,
                      t = e.proxyWin,
                      r = e.childDomain,
                      o = e.domain,
                      i = (void 0 === e.target && window, e.context),
                      a = e.uid;
                    return (function (n, e, t, r) {
                      return z(t).then(function (o) {
                        var i = qr(n, t, o),
                          a =
                            e === B()
                              ? { type: "uid", uid: r }
                              : { type: "raw", value: i };
                        if ("uid" === a.type) {
                          var u = no(window);
                          (u.props = u.props || {}),
                            (u.props[r] = i),
                            w.register(function () {
                              delete u.props[r];
                            });
                        }
                        return a;
                      });
                    })(t, r, o, a).then(function (n) {
                      return {
                        uid: a,
                        context: i,
                        tag: c,
                        version: "9_0_65",
                        childDomain: r,
                        parentDomain: B(window),
                        parent: hn(0, r, a, i),
                        props: n,
                        exports: qr(
                          t,
                          o,
                          ((e = t),
                          {
                            init: mn,
                            close: bn,
                            checkClose: function () {
                              return Ln(e);
                            },
                            resize: yn,
                            onError: On,
                            show: X,
                            hide: $,
                          })
                        ),
                      };
                      var e;
                    });
                  })({
                    proxyWin: (r = {
                      proxyWin: e,
                      childDomain: u,
                      domain: i,
                      target: n,
                      context: t,
                      uid: o,
                    }).proxyWin,
                    childDomain: r.childDomain,
                    domain: r.domain,
                    target: r.target,
                    context: r.context,
                    uid: r.uid,
                  }).then(function (n) {
                    return "__zoid__" + s + "__" + gn(JSON.stringify(n)) + "__";
                  });
                  var r;
                }),
                b = v.then(function (n) {
                  return sn(t, { windowName: n });
                }),
                E = dn(t),
                x = _.hash({
                  proxyContainer: m,
                  proxyFrame: b,
                  proxyPrerenderFrame: E,
                })
                  .then(function (n) {
                    return _n(n.proxyContainer, {
                      context: t,
                      uid: o,
                      proxyFrame: n.proxyFrame,
                      proxyPrerenderFrame: n.proxyPrerenderFrame,
                    });
                  })
                  .then(function (n) {
                    return n;
                  }),
                T = _.hash({ windowName: v, proxyFrame: b, proxyWin: y }).then(
                  function (n) {
                    var e = n.proxyWin;
                    return d
                      ? e
                      : Cn(t, {
                          windowName: n.windowName,
                          proxyWin: e,
                          proxyFrame: n.proxyFrame,
                        });
                  }
                ),
                H = _.hash({ proxyWin: T, proxyPrerenderFrame: E }).then(
                  function (n) {
                    return fn(t, n.proxyWin, n.proxyPrerenderFrame);
                  }
                ),
                W = T.then(function (n) {
                  return (r = n), Y(n);
                }),
                Z = _.hash({ proxyPrerenderWin: H, state: W }).then(function (
                  n
                ) {
                  return kn(n.proxyPrerenderWin, { context: t, uid: o });
                }),
                Q = _.hash({ proxyWin: T, windowName: v }).then(function (n) {
                  if (d) return n.proxyWin.setName(n.windowName);
                }),
                rn = _.hash({
                  proxyWin: T,
                  builtUrl: p,
                  windowName: Q,
                  prerender: Z,
                }).then(function (n) {
                  return n.proxyWin.setLocation(n.builtUrl);
                }),
                an = T.then(function (n) {
                  !(function n(e, t) {
                    var r = !1;
                    return (
                      w.register(function () {
                        r = !0;
                      }),
                      _.delay(2e3)
                        .then(function () {
                          return e.isClosed();
                        })
                        .then(function (o) {
                          return o
                            ? bn(new Error("Detected " + t + " close"))
                            : r
                            ? void 0
                            : n(e, t);
                        })
                    );
                  })(n, t);
                }),
                un = _.hash({ container: x, prerender: Z }).then(function () {
                  return C.trigger("zoid-display");
                }),
                pn = T.then(function (n) {}),
                vn = rn.then(function () {
                  return _.try(function () {
                    var n = L.timeout;
                    if (n)
                      return g.timeout(
                        n,
                        new Error(
                          "Loading component timed out after " +
                            n +
                            " milliseconds"
                        )
                      );
                  });
                }),
                xn = g.then(function () {
                  return C.trigger("zoid-rendered");
                });
              return _.hash({
                initPromise: g,
                buildUrlPromise: p,
                onRenderPromise: h,
                getProxyContainerPromise: m,
                openFramePromise: b,
                openPrerenderFramePromise: E,
                renderContainerPromise: x,
                openPromise: T,
                openPrerenderPromise: H,
                setStatePromise: W,
                prerenderPromise: Z,
                loadUrlPromise: rn,
                buildWindowNamePromise: v,
                setWindowNamePromise: Q,
                watchForClosePromise: an,
                onDisplayPromise: un,
                openBridgePromise: pn,
                runTimeoutPromise: vn,
                onRenderedPromise: xn,
                delegatePromise: l,
                watchForUnloadPromise: f,
              });
            })
              .catch(function (n) {
                return _.all([On(n), vn(n)]).then(
                  function () {
                    throw n;
                  },
                  function () {
                    throw n;
                  }
                );
              })
              .then(Nn);
          },
          destroy: vn,
          setProps: Rn,
          getHelpers: Fn,
          getDelegateOverrides: function () {
            return _.try(function () {
              return {
                getProxyContainer: V,
                show: X,
                hide: $,
                renderContainer: _n,
                getProxyWindow: K,
                watchForUnload: En,
                openFrame: sn,
                openPrerenderFrame: dn,
                prerender: kn,
                open: Cn,
                openPrerender: fn,
                setProxyWin: Y,
              };
            });
          },
        };
      }
      var fo = {
          register: function (n, e, t, r) {
            var o = r.React,
              i = r.ReactDOM;
            return (function (n) {
              function e() {
                return n.apply(this, arguments) || this;
              }
              C(e, n);
              var r = e.prototype;
              return (
                (r.render = function () {
                  return o.createElement("div", null);
                }),
                (r.componentDidMount = function () {
                  var n = i.findDOMNode(this),
                    e = t(An({}, this.props));
                  e.render(n, to.IFRAME), this.setState({ parent: e });
                }),
                (r.componentDidUpdate = function () {
                  this.state &&
                    this.state.parent &&
                    this.state.parent.updateProps(An({}, this.props)).catch(Nn);
                }),
                e
              );
            })(o.Component);
          },
        },
        po = {
          register: function (n, e, t, r) {
            return r.component(n, {
              render: function (n) {
                return n("div");
              },
              inheritAttrs: !1,
              mounted: function () {
                var n = this.$el;
                (this.parent = t(E({}, this.$attrs))),
                  this.parent.render(n, to.IFRAME);
              },
              watch: {
                $attrs: {
                  handler: function () {
                    this.parent &&
                      this.$attrs &&
                      this.parent.updateProps(E({}, this.$attrs)).catch(Nn);
                  },
                  deep: !0,
                },
              },
            });
          },
        },
        ho = {
          register: function (n, e, t, r) {
            return r.module(n, []).directive(
              n.replace(/-([a-z])/g, function (n) {
                return n[1].toUpperCase();
              }),
              function () {
                for (var n = {}, r = 0, o = Object.keys(e); r < o.length; r++)
                  n[o[r]] = "=";
                return (
                  (n.props = "="),
                  {
                    scope: n,
                    restrict: "E",
                    controller: [
                      "$scope",
                      "$element",
                      function (n, e) {
                        function r() {
                          if (
                            "$apply" !== n.$root.$$phase &&
                            "$digest" !== n.$root.$$phase
                          )
                            try {
                              n.$apply();
                            } catch (n) {}
                        }
                        var o = function () {
                            return Gn(n.props, function (n) {
                              return "function" == typeof n
                                ? function () {
                                    var e = n.apply(this, arguments);
                                    return r(), e;
                                  }
                                : n;
                            });
                          },
                          i = t(o());
                        i.render(e[0], to.IFRAME),
                          n.$watch(function () {
                            i.updateProps(o()).catch(Nn);
                          });
                      },
                    ],
                  }
                );
              }
            );
          },
        },
        mo = {
          register: function (n, e, t, r) {
            var o = r.NgModule,
              i = r.ElementRef,
              a = r.NgZone,
              u = function (n) {
                return Gn(E({}, n.internalProps, n.props), function (e) {
                  return "function" == typeof e
                    ? function () {
                        var t = arguments,
                          r = this;
                        return n.zone.run(function () {
                          return e.apply(r, t);
                        });
                      }
                    : e;
                });
              },
              l = (0, r.Component)({
                selector: n,
                template: "<div></div>",
                inputs: ["props"],
              }).Class({
                constructor: [
                  i,
                  a,
                  function (n, e) {
                    (this._props = {}), (this.elementRef = n), (this.zone = e);
                  },
                ],
                ngOnInit: function () {
                  var n = this.elementRef.nativeElement;
                  (this.parent = t(u(this))), this.parent.render(n, to.IFRAME);
                },
                ngDoCheck: function () {
                  this.parent &&
                    !(function (n, e) {
                      var t = {};
                      for (var r in n)
                        if (n.hasOwnProperty(r) && ((t[r] = !0), n[r] !== e[r]))
                          return !1;
                      for (var o in e) if (!t[o]) return !1;
                      return !0;
                    })(this._props, this.props) &&
                    ((this._props = E({}, this.props)),
                    this.parent.updateProps(u(this)));
                },
              });
            return o({ declarations: [l], exports: [l] }).Class({
              constructor: function () {},
            });
          },
        };
      function go(n) {
        var e = n.uid,
          t = n.frame,
          r = n.prerenderFrame,
          o = n.doc,
          i = n.props,
          a = n.event,
          u = n.dimensions,
          l = u.width,
          c = u.height;
        if (t && r) {
          var s = o.createElement("div");
          s.setAttribute("id", e);
          var d = o.createElement("style");
          return (
            i.cspNonce && d.setAttribute("nonce", i.cspNonce),
            d.appendChild(
              o.createTextNode(
                "\n            #" +
                  e +
                  " {\n                display: inline-block;\n                position: relative;\n                width: " +
                  l +
                  ";\n                height: " +
                  c +
                  ";\n            }\n\n            #" +
                  e +
                  " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" +
                  e +
                  " > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #" +
                  e +
                  " > iframe.zoid-visible {\n                opacity: 1;\n        }\n        "
              )
            ),
            s.appendChild(t),
            s.appendChild(r),
            s.appendChild(d),
            r.classList.add("zoid-visible"),
            t.classList.add("zoid-invisible"),
            a.on("zoid-rendered", function () {
              r.classList.remove("zoid-visible"),
                r.classList.add("zoid-invisible"),
                t.classList.remove("zoid-invisible"),
                t.classList.add("zoid-visible"),
                setTimeout(function () {
                  ke(r);
                }, 1);
            }),
            a.on("zoid-resize", function (n) {
              var e = n.width,
                t = n.height;
              "number" == typeof e && (s.style.width = Ke(e)),
                "number" == typeof t && (s.style.height = Ke(t));
            }),
            s
          );
        }
      }
      function yo(n) {
        var e = n.doc,
          t = n.props,
          r = e.createElement("html"),
          o = e.createElement("body"),
          i = e.createElement("style"),
          a = e.createElement("div");
        return (
          a.classList.add("spinner"),
          t.cspNonce && i.setAttribute("nonce", t.cspNonce),
          r.appendChild(o),
          o.appendChild(a),
          o.appendChild(i),
          i.appendChild(
            e.createTextNode(
              "\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        "
            )
          ),
          r
        );
      }
      var wo = function () {
          return Nn;
        },
        vo = function (n) {
          return Tn(n.value);
        },
        bo = Jn(),
        Co = Jn();
      function Eo(n) {
        var e,
          t,
          r = (function (n) {
            var e = n.tag,
              t = n.url,
              r = n.domain,
              o = n.bridgeUrl,
              i = n.props,
              a = void 0 === i ? {} : i,
              u = n.dimensions,
              l = void 0 === u ? {} : u,
              c = n.autoResize,
              s = void 0 === c ? {} : c,
              d = n.allowedParentDomains,
              f = void 0 === d ? "*" : d,
              p = n.attributes,
              h = void 0 === p ? {} : p,
              m = n.defaultContext,
              g = void 0 === m ? to.IFRAME : m,
              y = n.containerTemplate,
              w = void 0 === y ? go : y,
              v = n.prerenderTemplate,
              b = void 0 === v ? yo : v,
              C = n.validate,
              L = n.eligible,
              x =
                void 0 === L
                  ? function () {
                      return { eligible: !0 };
                    }
                  : L,
              O = n.logger,
              P = void 0 === O ? { info: Nn } : O,
              N = e.replace(/-/g, "_"),
              T = l.width,
              S = void 0 === T ? "300px" : T,
              k = l.height,
              _ = void 0 === k ? "150px" : k;
            if (
              ((a = E(
                {},
                {
                  window: {
                    type: "object",
                    sendToChild: !1,
                    required: !1,
                    allowDelegate: !0,
                    validate: function (n) {
                      var e = n.value;
                      if (!on(e) && !Pr.isProxyWindow(e))
                        throw new Error("Expected Window or ProxyWindow");
                      if (on(e)) {
                        if (J(e)) throw new Error("Window is closed");
                        if (!U(e)) throw new Error("Window is not same domain");
                      }
                    },
                    decorate: function (n) {
                      return Vr(n.value);
                    },
                  },
                  timeout: { type: "number", required: !1, sendToChild: !1 },
                  close: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.close;
                    },
                  },
                  focus: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.focus;
                    },
                  },
                  resize: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.resize;
                    },
                  },
                  uid: {
                    type: "string",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.uid;
                    },
                  },
                  cspNonce: { type: "string", required: !1 },
                  getParent: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.getParent;
                    },
                  },
                  getParentDomain: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.getParentDomain;
                    },
                  },
                  show: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.show;
                    },
                  },
                  hide: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.hide;
                    },
                  },
                  onDisplay: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: wo,
                    decorate: vo,
                  },
                  onRendered: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    default: wo,
                    decorate: vo,
                  },
                  onRender: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    default: wo,
                    decorate: vo,
                  },
                  onClose: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: wo,
                    decorate: vo,
                  },
                  onDestroy: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: wo,
                    decorate: vo,
                  },
                  onResize: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: wo,
                  },
                  onFocus: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: wo,
                  },
                  onError: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function (n) {
                      return n.onError;
                    },
                  },
                  onProps: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    default: wo,
                    childDecorate: function (n) {
                      return n.onProps;
                    },
                  },
                },
                a
              )),
              !w)
            )
              throw new Error("Container template required");
            return {
              name: N,
              tag: e,
              url: t,
              domain: r,
              bridgeUrl: o,
              propsDef: a,
              dimensions: { width: S, height: _ },
              autoResize: s,
              allowedParentDomains: f,
              attributes: h,
              defaultContext: g,
              containerTemplate: w,
              prerenderTemplate: b,
              validate: C,
              logger: P,
              eligible: x,
            };
          })(n),
          o = r.name,
          i = r.tag,
          a = r.defaultContext,
          u = r.propsDef,
          l = r.eligible,
          c = no(),
          s = {},
          d = [],
          f = function () {
            var n = io();
            return Boolean(n && n.tag === i && n.childDomain === B());
          },
          p = xn(function () {
            if (f()) {
              if (window.xprops)
                throw (
                  (delete c.components[i],
                  new Error(
                    "Can not register " +
                      o +
                      " as child - child already registered"
                  ))
                );
              var n = (function (n) {
                var e,
                  t = n.propsDef,
                  r = n.autoResize,
                  o = n.allowedParentDomains,
                  i = [],
                  a = io();
                if (!a) throw new Error("No child payload found");
                if ("9_0_65" !== a.version)
                  throw new Error(
                    "Parent window has zoid version " +
                      a.version +
                      ", child window has version 9_0_65"
                  );
                var u = a.uid,
                  l = a.parentDomain,
                  c = a.exports,
                  s = a.context,
                  d = a.props,
                  f = (function (n) {
                    var e,
                      t,
                      r = n.type;
                    if ("opener" === r) return Xn("opener", D(window));
                    if ("parent" === r && "number" == typeof n.distance)
                      return Xn(
                        "parent",
                        ((e = window),
                        void 0 === (t = n.distance) && (t = 1),
                        (function (n, e) {
                          void 0 === e && (e = 1);
                          for (var t = n, r = 0; r < e; r++) {
                            if (!t) return;
                            t = I(t);
                          }
                          return t;
                        })(e, Q(e) - t))
                      );
                    if ("global" === r && n.uid && "string" == typeof n.uid) {
                      var o = n.uid,
                        i = X(window);
                      if (!i) throw new Error("Can not find ancestor window");
                      for (var a = 0, u = K(i); a < u.length; a++) {
                        var l = u[a];
                        if (U(l)) {
                          var c = no(l);
                          if (c && c.windows && c.windows[o])
                            return c.windows[o];
                        }
                      }
                    }
                    throw new Error(
                      "Unable to find " + r + " parent component window"
                    );
                  })(a.parent),
                  p = Gr(f, l, c),
                  h = p.show,
                  m = p.hide,
                  g = p.close,
                  y = function () {
                    return f;
                  },
                  w = function () {
                    return l;
                  },
                  v = function (n) {
                    i.push(n);
                  },
                  b = function (n) {
                    return _.try(function () {
                      if (p && p.onError) return p.onError(n);
                      throw n;
                    });
                  },
                  C = function (n) {
                    return p.resize.fireAndForget({
                      width: n.width,
                      height: n.height,
                    });
                  },
                  E = function (n, r, o) {
                    void 0 === o && (o = !1);
                    var a = (function (n, e, t, r, o, i) {
                      void 0 === i && (i = !1);
                      for (
                        var a = {}, u = 0, l = Object.keys(t);
                        u < l.length;
                        u++
                      ) {
                        var c = l[u],
                          s = e[c];
                        if (!s || !s.sameDomain || (r === B(window) && U(n))) {
                          var d = ro(e, 0, c, t[c], o);
                          (a[c] = d),
                            s && s.alias && !a[s.alias] && (a[s.alias] = d);
                        }
                      }
                      if (!i)
                        for (var f = 0, p = Object.keys(e); f < p.length; f++) {
                          var h = p[f];
                          t.hasOwnProperty(h) ||
                            (a[h] = ro(e, 0, h, void 0, o));
                        }
                      return a;
                    })(
                      f,
                      t,
                      n,
                      r,
                      {
                        show: h,
                        hide: m,
                        close: g,
                        focus: ao,
                        onError: b,
                        resize: C,
                        onProps: v,
                        getParent: y,
                        getParentDomain: w,
                        uid: u,
                      },
                      o
                    );
                    e ? An(e, a) : (e = a);
                    for (var l = 0; l < i.length; l++) (0, i[l])(e);
                  },
                  L = function (n) {
                    return _.try(function () {
                      return E(n, l, !0);
                    });
                  };
                return {
                  init: function () {
                    return _.try(function () {
                      return (
                        (function (n, e) {
                          if (!en(n, e))
                            throw new Error(
                              "Can not be rendered by domain: " + e
                            );
                        })(o, l),
                        mr(f),
                        window.addEventListener("beforeunload", function () {
                          p.checkClose.fireAndForget();
                        }),
                        window.addEventListener("unload", function () {
                          p.checkClose.fireAndForget();
                        }),
                        rn(f, function () {
                          uo();
                        }),
                        p.init({ updateProps: L, close: uo })
                      );
                    })
                      .then(function () {
                        return ((n = r.width),
                        (e = void 0 !== n && n),
                        (t = r.height),
                        (o = void 0 !== t && t),
                        (i = r.element),
                        he(void 0 === i ? "body" : i)
                          .catch(Nn)
                          .then(function (n) {
                            return { width: e, height: o, element: n };
                          })).then(function (n) {
                          var e = n.width,
                            t = n.height,
                            r = n.element;
                          r &&
                            (e || t) &&
                            s !== to.POPUP &&
                            Ae(
                              r,
                              function (n) {
                                C({
                                  width: e ? n.width : void 0,
                                  height: t ? n.height : void 0,
                                });
                              },
                              { width: e, height: t }
                            );
                        });
                        var n, e, t, o, i;
                      })
                      .catch(function (n) {
                        b(n);
                      });
                  },
                  getProps: function () {
                    return (
                      e ||
                      (E(
                        (function (n, e, t) {
                          var r,
                            o = t.type,
                            i = t.uid;
                          if ("raw" === o) r = t.value;
                          else if ("uid" === o) {
                            if (!U(n))
                              throw new Error(
                                "Parent component window is on a different domain - expected " +
                                  B() +
                                  " - can not retrieve props"
                              );
                            var a = no(n);
                            r = Xn("props", a && a.props[i]);
                          }
                          if (!r) throw new Error("Could not find props");
                          return Gr(n, e, r);
                        })(f, l, d),
                        l
                      ),
                      e)
                    );
                  },
                };
              })(r);
              return n.init(), n;
            }
          }),
          h = function n(e) {
            var t,
              i = l({ props: (e = e || {}) }),
              u = i.eligible,
              c = i.reason,
              s = e.onDestroy;
            e.onDestroy = function () {
              if ((t && u && d.splice(d.indexOf(t), 1), s))
                return s.apply(void 0, arguments);
            };
            var f = so(r);
            f.init(),
              u ? f.setProps(e) : e.onDestroy && e.onDestroy(),
              bo.register(function (n) {
                f.destroy(n || new Error("zoid destroyed all components"));
              });
            var p = function (n, t, r) {
              return _.try(function () {
                if (!u) {
                  var t = new Error(c || o + " component is not eligible");
                  return f.destroy(t).then(function () {
                    throw t;
                  });
                }
                if (!on(n)) throw new Error("Must pass window to renderTo");
                return (function (n, e) {
                  return _.try(function () {
                    if (n.window) return Vr(n.window).getType();
                    if (e) {
                      if (e !== to.IFRAME && e !== to.POPUP)
                        throw new Error("Unrecognized context: " + e);
                      return e;
                    }
                    return a;
                  });
                })(e, r);
              })
                .then(function (e) {
                  return (
                    (t = (function (n, e) {
                      if (e) {
                        if ("string" != typeof e && !de(e))
                          throw new TypeError(
                            "Expected string or element selector to be passed"
                          );
                        return e;
                      }
                      if (n === to.POPUP) return "body";
                      throw new Error(
                        "Expected element to be passed to render iframe"
                      );
                    })(e, t)),
                    f.render(n, t, e)
                  );
                })
                .catch(function (n) {
                  return f.destroy(n).then(function () {
                    throw n;
                  });
                });
            };
            return (
              (t = E({}, f.getHelpers(), {
                isEligible: function () {
                  return u;
                },
                clone: function (t) {
                  var r = (void 0 === t ? {} : t).decorate;
                  return n((void 0 === r ? jn : r)(e));
                },
                render: function (n, e) {
                  return p(window, n, e);
                },
                renderTo: function (n, e, t) {
                  return p(n, e, t);
                },
              })),
              u && d.push(t),
              t
            );
          };
        if (
          (p(),
          (e = Wr("zoid_allow_delegate_" + o, function () {
            return !0;
          })),
          (t = Wr("zoid_delegate_" + o, function (n) {
            return { parent: so(r, n.data.overrides, n.source) };
          })),
          Co.register(e.cancel),
          Co.register(t.cancel),
          (c.components = c.components || {}),
          c.components[i])
        )
          throw new Error(
            "Can not register multiple components with the same tag: " + i
          );
        return (
          (c.components[i] = !0),
          {
            init: h,
            instances: d,
            driver: function (n, e) {
              var t = { react: fo, angular: ho, vue: po, angular2: mo };
              if (!t[n])
                throw new Error("Could not find driver for framework: " + n);
              return s[n] || (s[n] = t[n].register(i, u, h, e)), s[n];
            },
            isChild: f,
            canRenderTo: function (n) {
              return zr(n, "zoid_allow_delegate_" + o)
                .then(function (n) {
                  return n.data;
                })
                .catch(function () {
                  return !1;
                });
            },
            registerChild: p,
          }
        );
      }
      function Lo(n) {
        Yr();
        var e = Eo(n),
          t = function (n) {
            return e.init(n);
          };
        (t.driver = function (n, t) {
          return e.driver(n, t);
        }),
          (t.isChild = function () {
            return e.isChild();
          }),
          (t.canRenderTo = function (n) {
            return e.canRenderTo(n);
          }),
          (t.instances = e.instances);
        var r = e.registerChild();
        return r && (window.xprops = t.xprops = r.getProps()), t;
      }
      function xo(n) {
        var e = bo.all(n);
        return (bo = Jn()), e;
      }
      var Oo = xo,
        Po = (function (n) {
          function e(e) {
            var t;
            return (
              ((t = n.call(this, e) || this).code = void 0),
              (t.name = "ValidationError"),
              (t.code = "validation_error"),
              t
            );
          }
          return C(e, n), e;
        })(pn(Error));
      function No() {
        if (!zt())
          throw new Error(
            "Can only determine if iframe rendering is allowed on paypal domain"
          );
        if (!g()) return !0;
        var n = window.xprops && window.xprops.getParent();
        return !(!n || !U(n));
      }
      function To() {
        return window.xprops && window.xprops.sessionID
          ? window.xprops.sessionID
          : Jt();
      }
      var So = {
          get: function (n) {
            return Xt(function (e) {
              return _.resolve(e[n]);
            });
          },
          set: function (n, e) {
            return Xt(function (t) {
              return (t[n] = e), _.resolve(e);
            });
          },
        },
        ko = {
          get: function (n) {
            return Qt(function (e) {
              return _.resolve(e[n]);
            });
          },
          set: function (n, e) {
            return Qt(function (t) {
              return (t[n] = e), _.resolve(e);
            });
          },
        };
      function _o(n, e) {
        for (var t = [], r = 0; r < n.length; r++) {
          var o = n[r].render(e);
          if (o)
            if (Array.isArray(o))
              for (var i = 0; i < o.length; i++) {
                var a = o[i];
                a && t.push(a);
              }
            else t.push(o);
        }
        return t;
      }
      var Ao = (function () {
          function n(n, e, t) {
            (this.type = "element"),
              (this.name = void 0),
              (this.props = void 0),
              (this.children = void 0),
              (this.onRender = void 0),
              (this.name = n),
              (this.props = e || {}),
              (this.children = t);
            var r = this.props.onRender;
            "function" == typeof r && ((this.onRender = r), delete e.onRender);
          }
          var e = n.prototype;
          return (
            (e.render = function (n) {
              var e = n(this);
              return this.onRender && this.onRender(e), e;
            }),
            (e.renderChildren = function (n) {
              return _o(this.children, n);
            }),
            n
          );
        })(),
        Fo = (function () {
          function n(n) {
            (this.type = "fragment"),
              (this.children = void 0),
              (this.children = n);
          }
          return (
            (n.prototype.render = function (n) {
              return _o(this.children, n);
            }),
            n
          );
        })(),
        Ro = (function () {
          function n(n) {
            (this.type = "text"), (this.text = void 0), (this.text = n);
          }
          return (
            (n.prototype.render = function (n) {
              return n(this);
            }),
            n
          );
        })(),
        Mo = (function () {
          function n(n, e, t) {
            (this.type = "component"),
              (this.component = void 0),
              (this.props = void 0),
              (this.children = void 0),
              (this.component = n),
              (this.props = e || {}),
              (this.children = t),
              (this.props.children = t);
          }
          var e = n.prototype;
          return (
            (e.renderComponent = function (n) {
              var e = (function (n) {
                var e = Io(Array.isArray(n) ? n : [n]);
                return 1 === e.length
                  ? e[0]
                  : e.length > 1
                  ? new Fo(e)
                  : void 0;
              })(this.component(this.props, this.children));
              if (e) return e.render(n);
            }),
            (e.render = function (n) {
              return n(this);
            }),
            (e.renderChildren = function (n) {
              return _o(this.children, n);
            }),
            n
          );
        })();
      function Io(n) {
        for (var e = [], t = 0; t < n.length; t++) {
          var r = n[t];
          if (r)
            if ("string" == typeof r || "number" == typeof r)
              e.push(new Ro(r.toString()));
            else {
              if ("boolean" == typeof r) continue;
              if (Array.isArray(r))
                for (var o = 0, i = Io(r); o < i.length; o++) e.push(i[o]);
              else {
                if (
                  !r ||
                  ("element" !== r.type &&
                    "text" !== r.type &&
                    "component" !== r.type)
                )
                  throw new TypeError("Unrecognized node type: " + typeof r);
                e.push(r);
              }
            }
        }
        return e;
      }
      var Do,
        jo = function (n, e) {
          for (
            var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), o = 2;
            o < t;
            o++
          )
            r[o - 2] = arguments[o];
          if (((r = Io(r)), "string" == typeof n)) return new Ao(n, e, r);
          if ("function" == typeof n) return new Mo(n, e, r);
          throw new TypeError(
            "Expected jsx element to be a string or a function"
          );
        },
        Ho = function (n, e) {
          return e;
        },
        Bo =
          (((Do = {}).iframe = function (n, e) {
            var t = e.children[0];
            if (
              1 !== e.children.length ||
              !t ||
              "element" !== t.type ||
              "html" !== t.name
            )
              throw new Error(
                "Expected only single html element node as child of iframe element"
              );
            n.addEventListener("load", function () {
              var e = n.contentWindow;
              if (!e) throw new Error("Expected frame to have contentWindow");
              for (
                var r = e.document, o = r.documentElement;
                o.children && o.children.length;

              )
                o.removeChild(o.children[0]);
              for (var i = t.render(Uo({ doc: r })); i.children.length; )
                o.appendChild(i.children[0]);
            });
          }),
          (Do.script = function (n, e) {
            var t = e.children[0];
            if (1 !== e.children.length || !t || "text" !== t.type)
              throw new Error(
                "Expected only single text node as child of script element"
              );
            n.text = t.text;
          }),
          (Do.default = function (n, e, t) {
            for (var r = 0, o = e.renderChildren(t); r < o.length; r++)
              n.appendChild(o[r]);
          }),
          Do);
      function Uo(n) {
        void 0 === n && (n = {});
        var e = n.doc,
          t = void 0 === e ? document : e;
        return function n(e) {
          if ("component" === e.type) return e.renderComponent(n);
          if ("text" === e.type)
            return (function (n, e) {
              return n.createTextNode(e.text);
            })(t, e);
          if ("element" === e.type) {
            var r = (function (n, e) {
              return e.props.el ? e.props.el : n.createElement(e.name);
            })(t, e);
            return (
              (function (n, e) {
                for (
                  var t = e.props, r = 0, o = Object.keys(t);
                  r < o.length;
                  r++
                ) {
                  var i = o[r],
                    a = t[i];
                  null != a &&
                    "el" !== i &&
                    "innerHTML" !== i &&
                    (i.match(/^on[A-Z][a-z]/) && "function" == typeof a
                      ? n.addEventListener(i.slice(2).toLowerCase(), a)
                      : "string" == typeof a || "number" == typeof a
                      ? n.setAttribute(i, a.toString())
                      : "boolean" == typeof a &&
                        !0 === a &&
                        n.setAttribute(i, ""));
                }
                "iframe" !== n.tagName.toLowerCase() ||
                  t.id ||
                  n.setAttribute(
                    "id",
                    "jsx-iframe-" +
                      "xxxxxxxxxx".replace(/./g, function () {
                        return "0123456789abcdef".charAt(
                          Math.floor(Math.random() * "0123456789abcdef".length)
                        );
                      })
                  );
              })(r, e),
              (function (n, e, t, r) {
                if (e.props.hasOwnProperty("innerHTML")) {
                  if (e.children.length)
                    throw new Error(
                      "Expected no children to be passed when innerHTML prop is set"
                    );
                  var o = e.props.innerHTML;
                  if ("string" != typeof o)
                    throw new TypeError("innerHTML prop must be string");
                  "script" === e.name
                    ? (n.text = o)
                    : ((n.innerHTML = o),
                      (function (n, e) {
                        void 0 === e && (e = window.document);
                        for (
                          var t = 0, r = n.querySelectorAll("script");
                          t < r.length;
                          t++
                        ) {
                          var o = r[t],
                            i = o.parentNode;
                          if (i) {
                            var a = e.createElement("script");
                            (a.text = o.textContent), i.replaceChild(a, o);
                          }
                        }
                      })(n, t));
                } else (Bo[e.name] || Bo.default)(n, e, r);
              })(r, e, t, n),
              r
            );
          }
          throw new TypeError("Unhandleable node");
        };
      }
      var Wo = { br: !0 };
      function Zo(n) {
        return n
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/\//g, "&#x2F;");
      }
      function zo(n) {
        var e = n.css,
          t = n.nonce,
          r = n.children;
        return jo(
          Ho,
          null,
          jo("style", {
            innerHTML: "string" == typeof e ? e : e._getCss(),
            nonce: t,
          }),
          r
        );
      }
      var qo,
        Go,
        Ko = ["svg"],
        Vo = ["render", "name", "logoColor"],
        Yo = ["render", "name"];
      function Jo(n) {
        var e = n.svg,
          t = c(n, Ko);
        if (!e) throw new TypeError("Expected svg prop");
        if (
          "string" !=
          typeof (e = e.render(function n(e) {
            if ("component" === e.type)
              return [].concat(e.renderComponent(n)).join("");
            if ("element" === e.type) {
              var t =
                ((o = e.props),
                (i = Object.keys(o).filter(function (n) {
                  var e = o[n];
                  return (
                    "innerHTML" !== n &&
                    ("string" == typeof e || "number" == typeof e || !0 === e)
                  );
                })).length
                  ? " " +
                    i
                      .map(function (n) {
                        var e = o[n];
                        if (!0 === e) return "" + Zo(n);
                        if ("string" != typeof e && "number" != typeof e)
                          throw new TypeError(
                            "Unexpected prop type: " + typeof e
                          );
                        return "" === e
                          ? Zo(n)
                          : Zo(n) + '="' + Zo(e.toString()) + '"';
                      })
                      .join(" ")
                  : "");
              if (Wo[e.name]) return "<" + e.name + t + " />";
              var r =
                "string" == typeof e.props.innerHTML
                  ? e.props.innerHTML
                  : e.renderChildren(n).join("");
              return "<" + e.name + t + ">" + r + "</" + e.name + ">";
            }
            var o, i;
            if ("text" === e.type) return Zo(e.text);
            throw new TypeError("Unhandleable node: " + e.type);
          }))
        )
          throw new TypeError("Expected svg prop to be a string or jsx node");
        var r = E({ src: In(e) }, t);
        return jo("img", r);
      }
      function Xo(n) {
        var e = n.render,
          t = n.name,
          r = n.logoColor,
          o = c(n, Vo);
        return jo(
          Jo,
          E({}, o, {
            svg: e(),
            alt: "",
            class:
              "paypal-logo paypal-logo-" +
              t +
              " " +
              (r ? "paypal-logo-color-" + r : ""),
          })
        );
      }
      function $o(n) {
        var e = n.render,
          t = n.name,
          r = c(n, Yo);
        return jo(
          Jo,
          E({}, r, {
            svg: e(),
            alt: Un(t),
            class: "paypal-logo-card paypal-logo-card-" + t,
          })
        );
      }
      function Qo(n, e, t) {
        var r;
        if ((t && (r = e[t]), r || (r = e.default), !r))
          throw new Error(
            "No " + (t || "default") + " logo available for " + n
          );
        return r;
      }
      ((qo = {}).default = { primary: "#ffffff", secondary: "#ffffff" }),
        (qo.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (qo.black = { primary: "#000000", secondary: "#000000" }),
        ((Go = {}).default = { primary: "#005498", secondary: "#FFD800" }),
        (Go.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (Go.black = { primary: "#005498", secondary: "#FFD800" });
      var ni,
        ei = ["logoColor"],
        ti =
          (((ni = {}).default = { primary: "#333030" }),
          (ni.white = { primary: "#ffffff" }),
          (ni.black = { primary: "#333030" }),
          ni);
      function ri(n) {
        var e = void 0 === n ? {} : n,
          t = e.logoColor,
          r = c(e, ei),
          o = Qo("bank", ti, t).primary;
        return jo(
          Xo,
          E({}, r, {
            name: "bank",
            render: function () {
              return jo(
                "svg",
                {
                  width: "19px",
                  height: "18px",
                  viewBox: "0 0 19 18",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                jo(
                  "g",
                  {
                    transform:
                      "matrix(0.755484, 0, 0, 0.755484, 0.58609, -0.136891)",
                  },
                  jo(
                    "g",
                    { transform: "translate(-3.000000, -3.000000)", fill: o },
                    jo("path", {
                      d:
                        "M7.5,11.25 L4.375,11.25 C3.73824612,11.25 3.50927246,10.4091381 4.05811242,10.0862911 L14.0493373,4.20910003 C14.6361169,3.86393557 15.3638831,3.86393557 15.9506627,4.20910003 L25.9418876,10.0862911 C26.4907275,10.4091381 26.2617539,11.25 25.625,11.25 L22.5,11.25 L22.5,18.1459005 C22.5,18.4910785 22.220178,18.7709005 21.875,18.7709005 C21.529822,18.7709005 21.25,18.4910785 21.25,18.1459005 L21.25,10.625 C21.25,10.279822 21.529822,10 21.875,10 L23.3298073,10 L15.3168875,5.28651779 C15.1212944,5.17146298 14.8787056,5.17146298 14.6831125,5.2865178 L6.67019269,10 L16.875,10 C17.9105339,10 18.75,10.8394661 18.75,11.875 L18.75,18.1459005 C18.75,18.4910785 18.470178,18.7709005 18.125,18.7709005 C17.779822,18.7709005 17.5,18.4910785 17.5,18.1459005 L17.5,11.875 C17.5,11.5298221 17.2201779,11.25 16.875,11.25 L13.7537575,11.25 L13.7537575,20.9375 C13.7537575,21.110089 13.8936685,21.25 14.0662575,21.25 L23.125,21.25 C23.470178,21.25 23.75,21.529822 23.75,21.875 L23.75,22.4947548 L25.625,22.4947548 C25.970178,22.4947548 26.25,22.7745768 26.25,23.1197548 L26.25,25.625 C26.25,25.970178 25.970178,26.25 25.625,26.25 L4.375,26.25 C4.02982203,26.25 3.75,25.970178 3.75,25.625 L3.75,23.1197548 C3.75,22.7745768 4.02982203,22.4947548 4.375,22.4947548 L6.25,22.4947548 L6.25,21.875 C6.25,21.529822 6.52982203,21.25 6.875,21.25 L9.30555555,21.25 C9.65073352,21.25 9.93055555,21.529822 9.93055555,21.875 C9.93055555,22.220178 9.65073352,22.5 9.30555555,22.5 L7.5,22.5 L7.5,23.1197548 C7.5,23.4649327 7.22017797,23.7447548 6.875,23.7447548 L5,23.7447548 L5,25 L25,25 L25,23.7447548 L23.125,23.7447548 C22.779822,23.7447548 22.5,23.4649327 22.5,23.1197548 L22.5,22.5 L14.0662575,22.5 C13.2033125,22.5 12.5037575,21.800445 12.5037575,20.9375 L12.5037575,11.25 L8.75,11.25 L8.75,18.1622438 C8.75,18.5074217 8.47017797,18.7872438 8.125,18.7872438 C7.77982203,18.7872438 7.5,18.5074217 7.5,18.1622438 L7.5,11.25 Z",
                    })
                  )
                )
              );
            },
          })
        );
      }
      function oi(n) {
        var e = E({}, void 0 === n ? {} : n);
        return jo(
          $o,
          E({}, e, {
            name: "amex",
            render: function () {
              return jo(
                "svg",
                {
                  width: "40",
                  height: "24",
                  viewBox: "0 0 40 24",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                jo("path", {
                  d:
                    "M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z",
                  fill: "rgb(20, 119, 190)",
                }),
                jo("path", {
                  d:
                    "M6.26 12.32h2.313L7.415 9.66M27.353 9.977h-3.738v1.23h3.666v1.384h-3.675v1.385h3.821v1.005c.623-.77 1.33-1.466 2.025-2.235l.707-.77c-.934-1.004-1.87-2.08-2.804-3.075v1.077z",
                  fill: "rgb(255, 255, 255)",
                }),
                jo("path", {
                  d:
                    "M38.25 7h-5.605l-1.328 1.4L30.072 7H16.984l-1.017 2.416L14.877 7h-9.58L1.25 16.5h4.826l.623-1.556h1.4l.623 1.556H29.99l1.327-1.483 1.328 1.483h5.605l-4.36-4.667L38.25 7zm-17.685 8.1h-1.557V9.883L16.673 15.1h-1.33L13.01 9.883l-.084 5.217H9.73l-.623-1.556h-3.27L5.132 15.1H3.42l2.884-6.772h2.42l2.645 6.233V8.33h2.646l2.107 4.51 1.868-4.51h2.575V15.1zm14.727 0h-2.024l-2.024-2.26-2.023 2.26H22.06V8.328H29.53l1.795 2.177 2.024-2.177h2.025L32.26 11.75l3.032 3.35z",
                  fill: "rgb(255, 255, 255)",
                })
              );
            },
          })
        );
      }
      function ii(n) {
        var e = E({}, void 0 === n ? {} : n);
        return jo(
          $o,
          E({}, e, {
            name: "mastercard",
            render: function () {
              return jo(
                "svg",
                {
                  width: "40",
                  height: "24",
                  viewBox: "0 0 40 24",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                jo("path", {
                  d:
                    "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
                  fill: "rgb(62, 57, 57)",
                }),
                jo("path", {
                  fill: "rgb(255, 95, 0)",
                  d:
                    "M 22.205 3.901 L 15.688 3.901 L 15.688 15.589 L 22.205 15.589",
                }),
                jo("path", {
                  d:
                    "M 16.1 9.747 C 16.1 7.371 17.218 5.265 18.935 3.901 C 17.67 2.912 16.078 2.312 14.342 2.312 C 10.223 2.312 6.892 5.636 6.892 9.746 C 6.892 13.853 10.223 17.178 14.342 17.178 C 16.078 17.178 17.67 16.58 18.935 15.588 C 17.216 14.246 16.099 12.119 16.099 9.745 Z",
                  fill: "rgb(235, 0, 27)",
                }),
                jo("path", {
                  d:
                    "M 30.996 9.747 C 30.996 13.854 27.663 17.179 23.547 17.179 C 21.81 17.179 20.216 16.581 18.954 15.589 C 20.691 14.227 21.788 12.12 21.788 9.746 C 21.788 7.37 20.671 5.264 18.954 3.9 C 20.216 2.911 21.81 2.311 23.547 2.311 C 27.663 2.311 30.996 5.657 30.996 9.745 Z",
                  fill: "rgb(247, 158, 27)",
                }),
                jo("path", {
                  d:
                    "M 7.167 22.481 L 7.167 20.43 C 7.167 19.641 6.685 19.127 5.857 19.127 C 5.443 19.127 4.993 19.262 4.683 19.71 C 4.44 19.332 4.096 19.127 3.579 19.127 C 3.233 19.127 2.888 19.23 2.612 19.607 L 2.612 19.197 L 1.886 19.197 L 1.886 22.481 L 2.612 22.481 L 2.612 20.668 C 2.612 20.086 2.921 19.812 3.406 19.812 C 3.888 19.812 4.131 20.121 4.131 20.669 L 4.131 22.481 L 4.856 22.481 L 4.856 20.668 C 4.856 20.086 5.204 19.812 5.651 19.812 C 6.137 19.812 6.377 20.121 6.377 20.669 L 6.377 22.481 L 7.171 22.481 Z M 17.909 19.197 L 16.734 19.197 L 16.734 18.204 L 16.007 18.204 L 16.007 19.197 L 15.352 19.197 L 15.352 19.845 L 16.007 19.845 L 16.007 21.351 C 16.007 22.106 16.319 22.551 17.146 22.551 C 17.459 22.551 17.804 22.449 18.044 22.309 L 17.839 21.695 C 17.632 21.831 17.389 21.867 17.216 21.867 C 16.872 21.867 16.734 21.66 16.734 21.319 L 16.734 19.847 L 17.909 19.847 L 17.909 19.198 Z M 24.053 19.127 C 23.639 19.127 23.364 19.332 23.191 19.607 L 23.191 19.197 L 22.465 19.197 L 22.465 22.481 L 23.191 22.481 L 23.191 20.633 C 23.191 20.086 23.434 19.777 23.882 19.777 C 24.018 19.777 24.192 19.812 24.33 19.847 L 24.538 19.162 C 24.401 19.127 24.192 19.127 24.052 19.127 Z M 14.765 19.469 C 14.42 19.229 13.937 19.127 13.418 19.127 C 12.588 19.127 12.036 19.538 12.036 20.188 C 12.036 20.736 12.453 21.044 13.175 21.146 L 13.524 21.181 C 13.903 21.249 14.108 21.351 14.108 21.523 C 14.108 21.765 13.832 21.934 13.35 21.934 C 12.864 21.934 12.484 21.764 12.244 21.592 L 11.898 22.139 C 12.278 22.411 12.794 22.549 13.313 22.549 C 14.28 22.549 14.831 22.105 14.831 21.488 C 14.831 20.908 14.383 20.599 13.692 20.496 L 13.348 20.462 C 13.037 20.428 12.795 20.36 12.795 20.155 C 12.795 19.914 13.038 19.777 13.418 19.777 C 13.83 19.777 14.245 19.949 14.453 20.052 L 14.764 19.469 Z M 34.033 19.127 C 33.618 19.127 33.342 19.332 33.171 19.607 L 33.171 19.197 L 32.445 19.197 L 32.445 22.481 L 33.171 22.481 L 33.171 20.633 C 33.171 20.086 33.414 19.777 33.862 19.777 C 33.998 19.777 34.17 19.812 34.307 19.847 L 34.515 19.162 C 34.38 19.127 34.172 19.127 34.033 19.127 Z M 24.779 20.838 C 24.779 21.834 25.47 22.551 26.54 22.551 C 27.025 22.551 27.369 22.449 27.715 22.173 L 27.369 21.593 C 27.092 21.798 26.816 21.901 26.504 21.901 C 25.919 21.901 25.505 21.49 25.505 20.84 C 25.505 20.226 25.919 19.813 26.507 19.78 C 26.816 19.78 27.092 19.883 27.369 20.089 L 27.715 19.507 C 27.369 19.233 27.024 19.13 26.54 19.13 C 25.47 19.13 24.779 19.85 24.779 20.841 Z M 31.478 20.838 L 31.478 19.198 L 30.75 19.198 L 30.75 19.608 C 30.51 19.3 30.165 19.128 29.717 19.128 C 28.784 19.128 28.058 19.848 28.058 20.84 C 28.058 21.835 28.784 22.552 29.716 22.552 C 30.197 22.552 30.543 22.382 30.748 22.074 L 30.748 22.484 L 31.477 22.484 L 31.477 20.84 Z M 28.818 20.838 C 28.818 20.259 29.196 19.779 29.819 19.779 C 30.406 19.779 30.821 20.224 30.821 20.84 C 30.821 21.424 30.406 21.902 29.819 21.902 C 29.196 21.869 28.818 21.424 28.818 20.841 Z M 20.148 19.128 C 19.183 19.128 18.494 19.813 18.494 20.84 C 18.494 21.869 19.183 22.552 20.185 22.552 C 20.671 22.552 21.154 22.417 21.533 22.108 L 21.188 21.595 C 20.914 21.799 20.565 21.937 20.222 21.937 C 19.772 21.937 19.323 21.732 19.219 21.149 L 21.671 21.149 L 21.671 20.878 C 21.705 19.815 21.083 19.13 20.15 19.13 Z M 20.148 19.748 C 20.6 19.748 20.911 20.019 20.98 20.532 L 19.253 20.532 C 19.321 20.087 19.633 19.748 20.148 19.748 Z M 38.141 20.84 L 38.141 17.898 L 37.412 17.898 L 37.412 19.61 C 37.173 19.302 36.828 19.13 36.38 19.13 C 35.446 19.13 34.721 19.85 34.721 20.841 C 34.721 21.837 35.446 22.554 36.379 22.554 C 36.861 22.554 37.206 22.383 37.41 22.076 L 37.41 22.486 L 38.14 22.486 L 38.14 20.841 Z M 35.481 20.84 C 35.481 20.261 35.861 19.78 36.484 19.78 C 37.069 19.78 37.486 20.226 37.486 20.841 C 37.486 21.426 37.069 21.904 36.484 21.904 C 35.861 21.87 35.481 21.426 35.481 20.843 Z M 11.237 20.84 L 11.237 19.2 L 10.515 19.2 L 10.515 19.61 C 10.272 19.302 9.928 19.13 9.478 19.13 C 8.545 19.13 7.82 19.85 7.82 20.841 C 7.82 21.837 8.545 22.554 9.477 22.554 C 9.96 22.554 10.304 22.383 10.512 22.076 L 10.512 22.486 L 11.236 22.486 L 11.236 20.841 Z M 8.546 20.84 C 8.546 20.261 8.926 19.78 9.548 19.78 C 10.134 19.78 10.55 20.226 10.55 20.841 C 10.55 21.426 10.134 21.904 9.548 21.904 C 8.926 21.87 8.546 21.426 8.546 20.843 Z",
                  fill: "rgb(255, 255, 255)",
                })
              );
            },
          })
        );
      }
      function ai(n) {
        var e = E({}, void 0 === n ? {} : n);
        return jo(
          $o,
          E({}, e, {
            name: "visa",
            render: function () {
              return jo(
                "svg",
                {
                  width: "40",
                  height: "24",
                  viewBox: "0 0 40 24",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                jo("path", {
                  d:
                    "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
                  fill: "rgb(33, 86, 154)",
                }),
                jo("path", {
                  d:
                    "M19.596 7.885l-2.11 9.478H14.93l2.11-9.478h2.554zm10.743 6.12l1.343-3.56.773 3.56H30.34zm2.85 3.358h2.36l-2.063-9.478H31.31c-.492 0-.905.274-1.088.695l-3.832 8.783h2.682l.532-1.415h3.276l.31 1.415zm-6.667-3.094c.01-2.502-3.6-2.64-3.577-3.76.008-.338.345-.7 1.083-.793.365-.045 1.373-.08 2.517.425l.448-2.01c-.615-.214-1.405-.42-2.39-.42-2.523 0-4.3 1.288-4.313 3.133-.016 1.364 1.268 2.125 2.234 2.58.996.464 1.33.762 1.325 1.177-.006.636-.793.918-1.526.928-1.285.02-2.03-.333-2.623-.6l-.462 2.08c.598.262 1.7.49 2.84.502 2.682 0 4.437-1.273 4.445-3.243zM15.948 7.884l-4.138 9.478h-2.7L7.076 9.8c-.123-.466-.23-.637-.606-.834-.615-.32-1.63-.62-2.52-.806l.06-.275h4.345c.554 0 1.052.354 1.178.966l1.076 5.486 2.655-6.45h2.683z",
                  fill: "rgb(255, 255, 255)",
                })
              );
            },
          })
        );
      }
      var ui,
        li,
        ci,
        si,
        di,
        fi,
        pi,
        hi = ["logoColor"],
        mi =
          (((ui = {}).default = { primary: "#333030" }),
          (ui.white = { primary: "#ffffff" }),
          (ui.black = { primary: "#333030" }),
          ui);
      function gi(n) {
        var e = void 0 === n ? {} : n,
          t = e.logoColor,
          r = c(e, hi),
          o = Qo("card", mi, t).primary;
        return jo(
          $o,
          E({}, r, {
            name: "",
            render: function () {
              return jo(
                "svg",
                {
                  width: "24px",
                  height: "18px",
                  viewBox: "0 0 24 18",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                jo(
                  "g",
                  {
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd",
                  },
                  jo(
                    "g",
                    {
                      transform: "translate(-3.000000, -6.000000)",
                      fill: o,
                      "fill-rule": "nonzero",
                    },
                    jo("path", {
                      d:
                        "M8.27521338,12.5122653 C7.93003542,12.5122653 7.65021338,12.2324432 7.65021338,11.8872653 C7.65021338,11.5420873 7.93003542,11.2622653 8.27521338,11.2622653 L24.7879042,11.2622653 C25.5955939,11.2622653 26.25,11.9175905 26.25,12.7255368 L26.25,22.2867284 C26.25,23.0946748 25.5955939,23.75 24.7879042,23.75 L5.21231302,23.75 C4.40462325,23.75 3.75,23.0946748 3.75,22.2867397 L3.75,7.71327152 C3.75,6.90532518 4.40440608,6.25 5.21227212,6.25 L24.7880664,6.25552163 C25.5956079,6.25573147 26.25,6.91099507 26.25,7.71870362 L26.25,9.23577161 C26.25,9.58094958 25.9702675,9.86081168 25.6250895,9.86086112 C25.2799115,9.86091055 25.0000494,9.5811286 25,9.23595063 L24.9997827,7.71879313 C24.9997827,7.60083189 24.9046611,7.50555197 24.7877278,7.50552158 L5.21209583,7.49999998 C5.09515506,7.49999998 5,7.59528868 5,7.71326028 L5.00021718,22.2867284 C5.00021718,22.4047113 5.09537223,22.5 5.21231302,22.5 L24.7879042,22.5 C24.904845,22.5 25,22.4047113 25,22.2867284 L25,12.7255368 C25,12.607554 24.9048449,12.5122653 24.7879042,12.5122653 L8.27521338,12.5122653 Z",
                      id: "Stroke-1",
                    })
                  )
                )
              );
            },
          })
        );
      }
      function yi(n) {
        var e = E({}, n);
        return jo(
          Xo,
          E({}, e, {
            name: "credit",
            render: function () {
              return jo(
                "svg",
                {
                  width: "48px",
                  height: "30px",
                  viewBox: "0 0 48 30",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                jo(
                  "defs",
                  null,
                  jo(
                    "radialGradient",
                    {
                      cx: "21.8145957%",
                      cy: "17.9147256%",
                      fx: "21.8145957%",
                      fy: "17.9147256%",
                      r: "154.485751%",
                      gradientTransform:
                        "translate(0.218146,0.179147),scale(0.625000,1.000000),rotate(49.902048),scale(1.000000,1.092475),translate(-0.218146,-0.179147)",
                      id: "radialGradient-1",
                    },
                    jo("stop", { "stop-color": "#FFFFFF", offset: "0%" }),
                    jo("stop", { "stop-color": "#EFF0F4", offset: "100%" })
                  )
                ),
                jo(
                  "g",
                  {
                    id: "PPC-Card-art",
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd",
                  },
                  jo(
                    "g",
                    {
                      id: "New-PPC-card-art---2",
                      transform: "translate(-49.000000, -452.000000)",
                    },
                    jo(
                      "g",
                      {
                        id: "Cards",
                        transform: "translate(16.000000, 375.000000)",
                      },
                      jo(
                        "g",
                        {
                          id: "PayPal-Credit-Card",
                          transform: "translate(33.000000, 77.000000)",
                        },
                        jo("rect", {
                          id: "Rectangle",
                          stroke: "#EAECED",
                          fill: "url(#radialGradient-1)",
                          x: "0.5",
                          y: "0.5",
                          width: "47",
                          height: "29",
                          rx: "2",
                        }),
                        jo(
                          "g",
                          {
                            id:
                              "Logos/PayPal-Credit/paypal-credit-logo-monotone-transparent",
                            transform: "translate(9.000000, 7.500000)",
                            fill: "#003087",
                            "fill-rule": "nonzero",
                          },
                          jo(
                            "g",
                            {
                              id: "paypal-credit-logo-monotone-transparent",
                              transform: "translate(0.629340, 0.629340)",
                            },
                            jo(
                              "g",
                              {
                                id: "Group",
                                transform: "translate(0.553819, 0.629340)",
                              },
                              jo("path", {
                                d:
                                  "M17.8103299,6.32486979 L15.7335069,6.32486979 C15.6391059,6.32486979 15.5447049,6.41927083 15.5132378,6.51367188 L14.6006944,12.3350694 C14.6006944,12.3350694 14.6006944,12.3350694 14.6006944,12.3665365 C14.6006944,12.4294705 14.6636285,12.4924045 14.7265625,12.4924045 L16.8348524,12.4924045 C18.5340712,12.4924045 20.1703559,11.1393229 20.453559,9.40863715 C20.7052951,7.67795139 19.5095486,6.32486979 17.8103299,6.32486979 Z M18.7858073,9.37717014 C18.5970052,10.5729167 17.6844618,11.1078559 16.7404514,11.1078559 L16.3628472,11.1078559 L16.8977865,7.77235243 C16.8977865,7.7094184 16.9607205,7.67795139 17.0236545,7.67795139 L17.2753906,7.67795139 C18.3138021,7.67795139 18.9431424,8.27582465 18.7858073,9.37717014 Z",
                                id: "Shape",
                              }),
                              jo("path", {
                                d:
                                  "M13.0273437,7.67795139 L14.5377604,7.67795139 C14.6321615,7.67795139 14.7265625,7.58355035 14.7580295,7.48914931 L14.9153646,6.48220486 C14.9153646,6.48220486 14.9153646,6.45073785 14.9153646,6.45073785 C14.9153646,6.38780382 14.8524306,6.32486979 14.7894965,6.32486979 L11.6427951,6.32486979 C11.5483941,6.32486979 11.4539931,6.41927083 11.422526,6.51367188 L10.5099826,12.3036024 C10.5099826,12.3036024 10.5099826,12.3036024 10.5099826,12.3350694 C10.5099826,12.3980035 10.5729167,12.4609375 10.6358507,12.4609375 L13.7825521,12.4609375 C13.8769531,12.4609375 13.9713542,12.3665365 14.0028212,12.2721354 L14.1601562,11.265191 C14.1601562,11.265191 14.1601562,11.265191 14.1601562,11.233724 C14.1601562,11.1707899 14.0972222,11.1078559 14.0342882,11.1078559 L12.2721354,11.1078559 L12.3980035,10.2267795 C12.4294705,10.1323785 12.4924045,10.0379774 12.6182726,10.0379774 L14.0342882,10.0379774 C14.1286892,10.0379774 14.2230903,9.94357639 14.2545573,9.84917535 L14.4118924,8.8422309 C14.4118924,8.8422309 14.4118924,8.81076389 14.4118924,8.81076389 C14.4118924,8.74782986 14.3489583,8.68489583 14.2860243,8.68489583 L12.6497396,8.68489583 L12.7756076,7.83528646 C12.8385417,7.74088542 12.9329427,7.67795139 13.0273437,7.67795139 Z",
                                id: "Path",
                              }),
                              jo("path", {
                                d:
                                  "M22.8450521,6.32486979 L21.5863715,6.32486979 C21.4919705,6.32486979 21.3975694,6.41927083 21.3661024,6.51367188 L20.453559,12.3036024 C20.453559,12.3036024 20.453559,12.3350694 20.453559,12.3350694 C20.453559,12.3980035 20.5164931,12.4609375 20.5794271,12.4609375 L21.8381076,12.4609375 C21.9325087,12.4609375 22.0583767,12.3665365 22.0583767,12.2721354 L22.9709201,6.45073785 C22.9709201,6.45073785 22.9709201,6.45073785 22.9709201,6.41927083 C22.9709201,6.35633681 22.9394531,6.32486979 22.8450521,6.32486979 Z",
                                id: "Path",
                              }),
                              jo("path", {
                                d:
                                  "M8.55902778,6.32486979 L6.32486979,6.32486979 C6.23046875,6.32486979 6.16753472,6.38780382 6.13606771,6.48220486 L5.22352431,12.3350694 C5.22352431,12.3350694 5.22352431,12.3665365 5.22352431,12.3665365 C5.22352431,12.4294705 5.28645833,12.4924045 5.34939236,12.4924045 L6.63953993,12.4924045 C6.73394097,12.4924045 6.796875,12.4294705 6.82834201,12.3350694 L7.17447917,10.1323785 L7.20594618,10.1323785 L8.27582465,12.3980035 C8.30729167,12.4609375 8.37022569,12.4924045 8.43315972,12.4924045 L10.0694444,12.4924045 C10.1009115,12.4924045 10.1009115,12.4924045 10.1323785,12.4609375 C10.1953125,12.4294705 10.2267795,12.3350694 10.1638455,12.2721354 L8.74782986,9.94357639 C9.62890625,9.78624132 10.2267795,9.0625 10.3841146,8.21289062 C10.6043837,6.89127604 9.78624132,6.32486979 8.55902778,6.32486979 Z M8.71636285,8.30729167 C8.62196181,8.96809896 7.99262153,9.0625 7.48914931,9.0625 L7.33181424,9.0625 L7.55208333,7.64648437 C7.55208333,7.58355035 7.61501736,7.52061632 7.67795139,7.52061632 L7.89822049,7.52061632 C8.49609375,7.55208333 8.8422309,7.61501736 8.71636285,8.30729167 Z",
                                id: "Shape",
                              }),
                              jo("path", {
                                d:
                                  "M27.5651042,6.32486979 L23.6631944,6.32486979 C23.5687934,6.32486979 23.4743924,6.41927083 23.4429253,6.51367188 L23.2855903,7.52061632 C23.2855903,7.52061632 23.2855903,7.52061632 23.2855903,7.55208333 C23.2855903,7.61501736 23.3485243,7.67795139 23.4114583,7.67795139 L24.5757378,7.67795139 L23.8519965,12.3350694 C23.8519965,12.3350694 23.8519965,12.3665365 23.8519965,12.3665365 C23.8519965,12.4294705 23.9149306,12.4924045 23.9778646,12.4924045 L25.2365451,12.4924045 C25.3309462,12.4924045 25.4253472,12.3980035 25.4568142,12.3036024 L26.1805556,7.7094184 L27.3133681,7.7094184 C27.4077691,7.7094184 27.5021701,7.61501736 27.5336372,7.52061632 L27.6909722,6.51367188 C27.6909722,6.51367188 27.6909722,6.51367188 27.6909722,6.48220486 C27.6909722,6.35633681 27.6280382,6.32486979 27.5651042,6.32486979 Z",
                                id: "Path",
                              }),
                              jo("path", {
                                d:
                                  "M5.31792535,8.05555556 L5.53819444,6.67100694 C5.56966146,6.54513889 5.47526042,6.41927083 5.38085938,6.35633681 C5.00325521,6.23046875 4.59418403,6.13606771 4.18511285,6.13606771 C2.83203125,6.07313368 0.660807292,6.67100694 0.283203125,9.37717014 C0.157335069,10.3526476 0.56640625,12.5868056 3.20963542,12.5868056 C3.65017361,12.5868056 4.02777778,12.4924045 4.53125,12.3350694 C4.62565104,12.3036024 4.68858507,12.2406684 4.68858507,12.1777344 L4.90885417,10.7617188 C4.90885417,10.7302517 4.90885417,10.6987847 4.87738715,10.6673177 C4.84592014,10.6043837 4.7515191,10.6043837 4.68858507,10.6358507 C4.34244792,10.8875868 3.90190972,11.0449219 3.49283854,11.0449219 C2.4858941,11.0449219 1.95095486,10.3526476 2.07682292,9.37717014 C2.23415799,8.43315972 3.02083333,7.67795139 3.96484375,7.67795139 C4.37391493,7.67795139 4.78298611,7.83528646 5.06618924,8.11848958 C5.09765625,8.1499566 5.09765625,8.1499566 5.16059028,8.1499566 C5.22352431,8.18142361 5.28645833,8.11848958 5.31792535,8.05555556 Z",
                                id: "Path",
                              }),
                              jo("path", {
                                d:
                                  "M11.233724,3.99631076 C11.233724,3.99631076 11.233724,3.99631076 11.233724,3.99631076 L11.9574653,3.99631076 C12.0203993,3.99631076 12.0833333,3.96484375 12.0833333,3.90190972 L12.2406684,2.89496528 C12.2721354,2.80056424 12.3350694,2.73763021 12.4294705,2.73763021 L12.8700087,2.73763021 C13.7825521,2.73763021 14.3174913,2.29709201 14.4433594,1.41601562 C14.5062934,1.03841146 14.4433594,0.723741319 14.2860243,0.534939236 C14.0972222,0.283203125 13.7510851,0.188802083 13.2790799,0.188802083 L11.8945312,0.188802083 C11.8001302,0.188802083 11.7371962,0.251736111 11.7057292,0.346137153 L11.1393229,3.90190972 C11.1393229,3.93337674 11.1707899,3.99631076 11.233724,3.99631076 Z M12.5553385,1.00694444 C12.5553385,0.944010417 12.6182726,0.912543403 12.6497396,0.912543403 L12.7441406,0.912543403 C12.9958767,0.912543403 13.2161458,0.912543403 13.3420139,1.06987847 C13.4049479,1.16427951 13.4364149,1.29014757 13.4049479,1.44748264 C13.3420139,1.95095486 12.9644097,1.95095486 12.5868056,1.95095486 L12.3665365,1.95095486 L12.5553385,1.00694444 Z",
                                id: "Shape",
                              }),
                              jo("path", {
                                d:
                                  "M1.3530816,3.99631076 C1.3530816,3.99631076 1.3530816,3.99631076 1.3530816,3.99631076 L2.0453559,3.99631076 C2.13975694,3.99631076 2.23415799,3.93337674 2.23415799,3.83897569 L2.39149306,2.89496528 C2.42296007,2.80056424 2.4858941,2.73763021 2.58029514,2.73763021 L3.02083333,2.73763021 C3.93337674,2.73763021 4.46831597,2.29709201 4.59418403,1.41601562 C4.65711806,1.03841146 4.59418403,0.723741319 4.43684896,0.534939236 C4.24804687,0.314670139 3.90190972,0.188802083 3.42990451,0.188802083 L2.0453559,0.188802083 C1.95095486,0.188802083 1.88802083,0.251736111 1.85655382,0.346137153 L1.25868056,3.87044271 C1.25868056,3.93337674 1.29014757,3.99631076 1.3530816,3.99631076 Z M2.67469618,1.00694444 C2.67469618,0.944010417 2.73763021,0.912543403 2.76909722,0.912543403 L2.86349826,0.912543403 C3.11523437,0.912543403 3.33550347,0.912543403 3.46137153,1.06987847 C3.52430556,1.16427951 3.55577257,1.29014757 3.52430556,1.44748264 C3.46137153,1.95095486 3.08376736,1.95095486 2.70616319,1.95095486 L2.51736111,1.95095486 L2.67469618,1.00694444 Z",
                                id: "Shape",
                              }),
                              jo("path", {
                                d:
                                  "M4.65711806,3.71310764 C4.84592014,3.96484375 5.16059028,4.05924479 5.50672743,4.05924479 C5.85286458,4.05924479 6.16753472,3.93337674 6.41927083,3.68164063 L6.38780382,3.87044271 C6.38780382,3.93337674 6.41927083,3.99631076 6.48220486,3.99631076 C6.48220486,3.99631076 6.48220486,3.99631076 6.51367188,3.99631076 L7.11154514,3.99631076 C7.20594618,3.99631076 7.26888021,3.93337674 7.30034722,3.83897569 L7.64648437,1.57335069 C7.64648437,1.51041667 7.61501736,1.44748264 7.55208333,1.44748264 C7.55208333,1.44748264 7.52061632,1.44748264 7.52061632,1.44748264 L6.85980903,1.44748264 C6.796875,1.44748264 6.76540799,1.47894965 6.76540799,1.54188368 L6.73394097,1.73068576 L6.70247396,1.66775174 C6.54513889,1.44748264 6.23046875,1.38454861 5.91579861,1.38454861 C5.19205729,1.38454861 4.56271701,1.95095486 4.43684896,2.70616319 C4.34244792,3.05230035 4.43684896,3.42990451 4.65711806,3.71310764 Z M5.31792535,2.70616319 C5.38085938,2.32855903 5.69552951,2.07682292 6.07313368,2.07682292 C6.23046875,2.07682292 6.38780382,2.13975694 6.51367188,2.265625 C6.60807292,2.39149306 6.67100694,2.58029514 6.60807292,2.73763021 C6.54513889,3.11523437 6.23046875,3.3984375 5.85286458,3.36697049 C5.56966146,3.3984375 5.31792535,3.1781684 5.28645833,2.89496528 C5.28645833,2.83203125 5.28645833,2.76909722 5.31792535,2.70616319 Z",
                                id: "Shape",
                              }),
                              jo("path", {
                                d:
                                  "M14.5377604,3.71310764 C14.7265625,3.96484375 15.0412326,4.05924479 15.3873698,4.05924479 C15.7335069,4.05924479 16.0481771,3.93337674 16.2999132,3.68164062 L16.2684462,3.87044271 C16.2684462,3.93337674 16.2999132,3.99631076 16.3628472,3.99631076 C16.3628472,3.99631076 16.3628472,3.99631076 16.3943142,3.99631076 L16.9921875,3.99631076 C17.0865885,3.99631076 17.1495226,3.93337674 17.1809896,3.83897569 L17.5271267,1.57335069 C17.5271267,1.51041667 17.4956597,1.44748264 17.4327257,1.44748264 C17.4327257,1.44748264 17.4012587,1.44748264 17.4012587,1.44748264 L16.7404514,1.44748264 C16.6775174,1.44748264 16.6460503,1.47894965 16.6460503,1.54188368 L16.6145833,1.73068576 L16.5831163,1.66775174 C16.4257813,1.44748264 16.1111111,1.38454861 15.796441,1.38454861 C15.0726997,1.38454861 14.4433594,1.95095486 14.3174913,2.70616319 C14.2230903,3.05230035 14.3174913,3.42990451 14.5377604,3.71310764 Z M15.1671007,2.70616319 C15.2300347,2.32855903 15.5447049,2.07682292 15.922309,2.07682292 C16.0796441,2.07682292 16.2369792,2.13975694 16.3628472,2.265625 C16.4572483,2.39149306 16.5201823,2.58029514 16.4572483,2.73763021 C16.3943142,3.11523437 16.0796441,3.3984375 15.7020399,3.36697049 C15.5447049,3.36697049 15.3873698,3.30403646 15.2615017,3.1781684 C15.1671007,3.05230035 15.1356337,2.86349826 15.1671007,2.70616319 Z",
                                id: "Shape",
                              }),
                              jo("path", {
                                d:
                                  "M8.71636285,3.74457465 L8.02408854,4.72005208 C7.99262153,4.78298611 7.99262153,4.84592014 8.05555556,4.87738715 C8.08702257,4.90885417 8.08702257,4.90885417 8.11848958,4.90885417 L8.77929687,4.90885417 C8.8422309,4.90885417 8.90516493,4.87738715 8.93663194,4.81445312 L11.1393229,1.60481771 C11.1707899,1.54188368 11.1707899,1.47894965 11.1078559,1.44748264 C11.0763889,1.44748264 11.0763889,1.41601562 11.0449219,1.41601562 L10.3841146,1.41601562 C10.3211806,1.41601562 10.2582465,1.44748264 10.2267795,1.51041667 L9.31423611,2.86349826 L8.93663194,1.57335069 C8.90516493,1.47894965 8.8422309,1.44748264 8.74782986,1.44748264 L8.08702257,1.44748264 C8.02408854,1.44748264 7.96115451,1.51041667 7.96115451,1.57335069 C7.96115451,1.57335069 7.96115451,1.60481771 7.96115451,1.60481771 L8.71636285,3.74457465 Z",
                                id: "Path",
                              }),
                              jo("path", {
                                d:
                                  "M17.7159288,3.99631076 C17.7159288,3.99631076 17.7159288,3.99631076 17.7159288,3.99631076 L18.3138021,3.99631076 C18.4082031,3.99631076 18.4711372,3.93337674 18.5026042,3.83897569 L19.0690104,0.283203125 C19.0690104,0.220269097 19.0375434,0.157335069 18.9746094,0.157335069 C18.9746094,0.157335069 18.9746094,0.157335069 18.9431424,0.157335069 L18.3138021,0.157335069 C18.2508681,0.157335069 18.219401,0.188802083 18.187934,0.251736111 L17.6215278,3.87044271 C17.5900608,3.93337674 17.6529948,3.99631076 17.7159288,3.99631076 Z",
                                id: "Path",
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              );
            },
          })
        );
      }
      ((li = {}).default = { primary: "#003087" }),
        (li.blue = { primary: "#003087" }),
        (li.white = { primary: "#ffffff" }),
        (li.black = { primary: "#333030" }),
        ((ci = {}).default = { primary: "#c8036f", secondary: "#71706f" }),
        (ci.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (ci.black = { primary: "#71706F", secondary: "#C8036F" }),
        ((si = {}).default = {
          primary: "#ED1C24",
          secondary: "#ffffff",
          tertiary: "#003a7d",
          quaternary: "#FFFFFF",
        }),
        (si.white = {
          primary: "#FFFFFF",
          secondary: "#000000",
          tertiary: "#FFFFFF",
          quaternary: "#FFFFFF",
        }),
        (si.black = {
          primary: "#ED1C24",
          secondary: "#FFFFFF",
          tertiary: "#003a7d",
          quaternary: "#FFFFFF",
        }),
        ((di = {}).default = {
          primary: "#000000",
          secondary: "#cd0067",
          tertiary: "#ffffff",
        }),
        (di.white = {
          primary: "#ffffff",
          secondary: "#ffffff",
          tertiary: "#ffffff",
        }),
        (di.black = {
          primary: "#000000",
          secondary: "#FFFFFF",
          tertiary: "#CD0067",
        }),
        ((fi = {}).default = { primary: "#00C0EE", secondary: "#1a4b67" }),
        (fi.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (fi.black = { primary: "#1A4B67", secondary: "#00C0EE" }),
        ((pi = {}).default = { primary: "#d03238", secondary: "#b3b1b1" }),
        (pi.white = { primary: "#ffffff", secondary: "#ffffff" }),
        (pi.black = { primary: "#d03238", secondary: "#b3b1b1" });
      var wi,
        vi,
        bi = ["logoColor"],
        Ci = ["logoColor"],
        Ei =
          (((wi = {}).default = { primary: "#003087", secondary: "#009cde" }),
          (wi.blue = { primary: "#003087", secondary: "#009cde" }),
          (wi.white = { primary: "#ffffff", secondary: "#ffffff" }),
          (wi.black = { primary: "#333030", secondary: "#636363" }),
          (wi.monochrome = { primary: "#000000", secondary: "#000000" }),
          wi);
      function Li(n) {
        var e = n.logoColor,
          t = void 0 === e ? "default" : e,
          r = c(n, bi),
          o = Qo("paypal", Ei, t),
          i = o.primary,
          a = o.secondary;
        return jo(
          Xo,
          E({}, r, r, {
            name: "paypal",
            alt: "PayPal",
            "aria-label": "PayPal",
            logoColor: t,
            render: function () {
              return jo(
                "svg",
                {
                  width: "101px",
                  height: "32",
                  viewBox: "0 0 101 32",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                jo("path", {
                  fill: i,
                  d:
                    "M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z",
                }),
                jo("path", {
                  fill: i,
                  d:
                    "M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z",
                }),
                jo("path", {
                  fill: i,
                  d:
                    "M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z",
                }),
                jo("path", {
                  fill: a,
                  d:
                    "M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z",
                }),
                jo("path", {
                  fill: a,
                  d:
                    "M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z",
                }),
                jo("path", {
                  fill: a,
                  d:
                    "M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z",
                })
              );
            },
          })
        );
      }
      var xi,
        Oi,
        Pi,
        Ni,
        Ti,
        Si,
        ki,
        _i =
          (((vi = {}).default = {
            primary: "#009cde",
            secondary: "#012169",
            tertiary: "#003087",
          }),
          (vi.blue = {
            primary: "#009cde",
            secondary: "#012169",
            tertiary: "#003087",
          }),
          (vi.white = {
            primary: "#ffffff",
            primaryOpacity: "0.7",
            secondary: "#ffffff",
            secondaryOpacity: "0.7",
            tertiary: "#ffffff",
          }),
          (vi.black = {
            primary: "#808080",
            secondary: "#000000",
            tertiary: "#1a1a1a",
          }),
          vi);
      function Ai(n) {
        var e = n.logoColor,
          t = void 0 === e ? "default" : e,
          r = c(n, Ci),
          o = Qo("pp", _i, t),
          i = o.primary,
          a = o.secondary,
          u = o.tertiary,
          l = o.primaryOpacity,
          s = void 0 === l ? "1" : l,
          d = o.secondaryOpacity,
          f = void 0 === d ? "1" : d,
          p = o.tertiaryOpacity,
          h = void 0 === p ? "1" : p;
        return jo(
          Xo,
          E({}, r, r, {
            name: "pp",
            alt: "PP",
            "aria-label": "PP",
            logoColor: t,
            render: function () {
              return jo(
                "svg",
                {
                  width: "24",
                  height: "32",
                  viewBox: "0 0 24 32",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                jo("path", {
                  fill: i,
                  opacity: s,
                  d:
                    "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 6.694 26.557 C 6.6 26.957 6.881 27.257 7.255 27.257 L 11.375 27.257 C 11.844 27.257 12.311 26.957 12.405 26.457 L 12.405 26.157 L 13.247 20.957 L 13.247 20.757 C 13.341 20.257 13.809 19.857 14.277 19.857 L 14.84 19.857 C 18.864 19.857 21.954 18.157 22.89 13.157 C 23.358 11.057 23.172 9.357 22.048 8.157 C 21.767 7.757 21.298 7.457 20.924 7.157 L 20.924 7.157",
                }),
                jo("path", {
                  fill: a,
                  opacity: f,
                  d:
                    "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 8.192 16.357 C 8.286 15.757 8.754 15.357 9.315 15.357 L 11.655 15.357 C 16.243 15.357 19.801 13.357 20.924 7.757 C 20.831 7.457 20.924 7.357 20.924 7.157",
                }),
                jo("path", {
                  fill: u,
                  opacity: h,
                  d:
                    "M 9.504 7.157 C 9.596 6.857 9.784 6.557 10.065 6.357 C 10.251 6.357 10.345 6.257 10.532 6.257 L 16.711 6.257 C 17.461 6.257 18.208 6.357 18.772 6.457 C 18.958 6.457 19.146 6.457 19.333 6.557 C 19.52 6.657 19.707 6.657 19.801 6.757 C 19.894 6.757 19.987 6.757 20.082 6.757 C 20.362 6.857 20.643 7.057 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.257 C 18.677 0.857 16.525 0.257 13.809 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.657 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 9.504 7.157 Z",
                })
              );
            },
          })
        );
      }
      function Fi(n) {
        var e = E({}, n);
        return jo(
          Xo,
          E({}, e, {
            name: "pp",
            render: function () {
              return jo(
                "svg",
                {
                  width: "40px",
                  height: "25px",
                  viewBox: "0 0 40 25",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                jo("title", null, "Group 53"),
                jo(
                  "defs",
                  null,
                  jo(
                    "radialGradient",
                    {
                      cx: "21.8145957%",
                      cy: "17.9147256%",
                      fx: "21.8145957%",
                      fy: "17.9147256%",
                      r: "154.485751%",
                      gradientTransform:
                        "translate(0.218146,0.179147),scale(0.625000,1.000000),rotate(49.902048),scale(1.000000,1.092475),translate(-0.218146,-0.179147)",
                      id: "radialGradient-1",
                    },
                    jo("stop", { "stop-color": "#FFFFFF", offset: "0%" }),
                    jo("stop", { "stop-color": "#EFF0F4", offset: "100%" })
                  )
                ),
                jo(
                  "g",
                  {
                    id: "Page-1",
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd",
                  },
                  jo(
                    "g",
                    {
                      id: "Group-53",
                      transform: "translate(0.410281, 0.000000)",
                    },
                    jo("rect", {
                      id: "Rectangle",
                      stroke: "#EAECED",
                      fill: "url(#radialGradient-1)",
                      x: "0.5",
                      y: "0.5",
                      width: "38",
                      height: "23.375",
                      rx: "2",
                    }),
                    jo(
                      "g",
                      {
                        id: "Group",
                        transform: "translate(10.968750, 4.875000)",
                      },
                      jo(
                        "g",
                        {
                          id: "paypal-mark-color",
                          transform: "translate(1.650391, 0.660156)",
                        },
                        jo("path", {
                          d:
                            "M11.1896484,3.696875 C11.3876953,2.57460938 11.1896484,1.78242188 10.5625,1.08925781 C9.93535156,0.330078125 8.7140625,0 7.1296875,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054687 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L3.06972656,14.1273438 C3.03671875,14.3583984 3.20175781,14.5234375 3.39980469,14.5234375 L5.74335937,14.5234375 C6.04042969,14.5234375 6.27148437,14.2923828 6.30449219,14.0613281 L6.3375,13.9623047 L6.76660156,11.1896484 L6.79960938,11.0576172 C6.83261719,10.7935547 7.09667969,10.5955078 7.36074219,10.5955078 L7.72382813,10.5955078 C10.0013672,10.5955078 11.7837891,9.67128906 12.3119141,6.99765625 C12.5429687,5.90839844 12.4109375,4.95117188 11.8498047,4.29101563 C11.6847656,3.99394531 11.4537109,3.82890625 11.1896484,3.696875",
                          id: "Fill-8",
                          fill: "#009CDE",
                        }),
                        jo("path", {
                          d:
                            "M11.1896484,3.696875 C11.3876953,2.57460937 11.1896484,1.78242188 10.5625,1.08925781 C9.93535156,0.330078125 8.7140625,0 7.1296875,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054688 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L3.9609375,8.48300781 L3.92792969,8.61503906 C3.99394531,8.28496094 4.29101562,8.05390625 4.58808594,8.05390625 L5.90839844,8.05390625 C8.51601562,8.05390625 10.5294922,6.99765625 11.1566406,3.9609375 C11.1566406,3.86191406 11.1896484,3.76289063 11.1896484,3.696875",
                          id: "Fill-9",
                          fill: "#012169",
                        }),
                        jo("path", {
                          d:
                            "M4.753125,3.696875 C4.78613281,3.49882813 4.88515625,3.36679688 5.08320312,3.26777344 C5.14921875,3.23476563 5.21523438,3.20175781 5.34726562,3.20175781 L8.87910156,3.20175781 C9.27519531,3.23476563 9.67128906,3.26777344 10.0673828,3.30078125 C10.1664062,3.30078125 10.2654297,3.33378906 10.3644531,3.36679688 C10.4634766,3.39980469 10.5625,3.39980469 10.6615234,3.4328125 C10.6945312,3.4328125 10.7275391,3.46582031 10.7935547,3.46582031 C10.9916016,3.53183594 11.1236328,3.56484375 11.2556641,3.696875 C11.4537109,2.57460937 11.2556641,1.78242187 10.6285156,1.08925781 C9.96835937,0.330078125 8.74707031,0 7.16269531,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054688 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L4.753125,3.696875",
                          id: "Fill-10",
                          fill: "#003087",
                        })
                      )
                    )
                  )
                )
              );
            },
          })
        );
      }
      ((xi = {}).default = { main: "#005DA0", card: "#AEB1BC" }),
        (xi.white = { main: "#FFFFFF", card: "#FFFFFF" }),
        (xi.black = { main: "#333030", card: "#333030" }),
        ((Oi = {}).default = { primary: "#FFFFFF", secondary: "#EB6F93" }),
        (Oi.white = { primary: "#FFFFFF", secondary: "#2C2E2F" }),
        (Oi.black = { primary: "#FFFFFF", secondary: "#EB6F93" }),
        ((Pi = {}).default = { primary: "#3D93CE" }),
        (Pi.blue = { primary: "#3D93CE" }),
        (Pi.white = { primary: "#ffffff" }),
        (Pi.black = { primary: "#333030" }),
        ((Ni = {}).default = { primary: "#ffffff" }),
        (Ni.blue = { primary: "#003087" }),
        (Ni.white = { primary: "#ffffff" }),
        (Ni.black = { primary: "#333030" }),
        ((Ti = {}).default = { primary: "#1AAD19", secondary: "#4D4D4D" }),
        (Ti.white = { primary: "#FFFFFF", secondary: "#FFFFFF" }),
        (Ti.black = { primary: "#333030", secondary: "#333030" }),
        ((Si = {}).default = { primary: "#00A599" }),
        (Si.white = { primary: "#FFFFFF" }),
        (Si.black = { primary: "#00A599" }),
        ((ki = {}).default = {
          primary: "#A6d71c",
          secondary: "#3C932A",
          tertiary: "#6CC62E",
          quaternary: "#278D30",
        }),
        (ki.white = {
          primary: "#FFFFFF",
          secondary: "#FFFFFF",
          tertiary: "#000000",
          quaternary: "#FFFFFF",
        }),
        (ki.black = {
          primary: "#333030",
          secondary: "#333030",
          tertiary: "#ffffff",
          quaternary: "#333030",
        });
      var Ri,
        Mi,
        Ii,
        Di,
        ji,
        Hi,
        Bi,
        Ui = ["logoColor"],
        Wi =
          (((Ri = {}).default = {
            primary: "#FFFFFF",
            secondary: "#CACCC8",
            tertiary: "#2D59A1",
            quaternary: "#1F3364",
            quinary: "#4E4E4E",
            senary: "#1B4482",
          }),
          (Ri.white = {
            primary: "#FFFFFF",
            secondary: "#CACCC8",
            tertiary: "#2D59A1",
            quaternary: "#1F3364",
            quinary: "#4E4E4E",
            senary: "#1B4482",
          }),
          (Ri.black = {
            primary: "#000000",
            secondary: "#000000",
            tertiary: "#FFFFFF",
            quaternary: "#FFFFFF",
            quinary: "#000000",
            senary: "#000000",
          }),
          Ri);
      function Zi(n) {
        var e,
          t = n.context,
          r = n.close,
          o = n.focus,
          i = n.event,
          a = n.frame,
          u = n.prerenderFrame,
          l = n.content,
          c = void 0 === l ? {} : l,
          s = n.autoResize,
          f = n.hideCloseButton,
          p = n.nonce,
          h = "paypal-overlay-" + wn(),
          y = function (n) {
            return function (e) {
              i.on("zoid-display", function () {
                return Ne(e, "show-" + n, Nn);
              }),
                i.on("zoid-close", function () {
                  return Ne(e, "hide-" + n, Nn);
                });
            };
          };
        return (
          a &&
            u &&
            (a.classList.add("component-frame"),
            u.classList.add("prerender-frame"),
            u.classList.add("visible"),
            a.classList.add("invisible"),
            i.on("zoid-rendered", function () {
              u.classList.remove("visible"),
                u.classList.add("invisible"),
                a.classList.remove("invisible"),
                a.classList.add("visible"),
                setTimeout(function () {
                  ke(u);
                }, 1);
            }),
            (e = jo(
              "div",
              {
                class: "outlet",
                onRender: function (n) {
                  y("component")(n),
                    s &&
                      (function (n) {
                        i.on("zoid-resize", function (e) {
                          var t = e.width,
                            r = e.height;
                          "number" == typeof t && (n.style.width = Ke(t)),
                            "number" == typeof r && (n.style.height = Ke(r));
                        });
                      })(n);
                },
              },
              jo("node", { el: a }),
              jo("node", { el: u })
            ))),
          jo(
            "div",
            {
              id: h,
              onRender: y("container"),
              class: "paypal-checkout-sandbox",
            },
            jo(
              "style",
              { nonce: p },
              (function (n) {
                var e = n.uid;
                return (
                  "\n        #" +
                  e +
                  ".paypal-checkout-sandbox {\n            display: block;\n            position: fixed;\n            top: 0;\n            left: 0;\n\n            width: 100%;\n            height: 100%;\n            width: 100vw;\n            height: 100vh;\n            max-width: 100%;\n            max-height: 100%;\n            min-width: 100%;\n            min-height: 100%;\n\n            z-index: 2147483647;\n\n            animation-duration: 0.3s;\n            animation-iteration-count: 1;\n            animation-fill-mode: forwards !important;\n            opacity: 0;\n        }\n\n        #" +
                  e +
                  ".paypal-checkout-sandbox .paypal-checkout-sandbox-iframe {\n            display: block;\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-container {\n            from {\n                opacity: 0;\n            }\n\n            to {\n                opacity: 1;\n            }\n        }\n\n        @keyframes hide-container {\n            from {\n                opacity: 1;\n            }\n\n            50% {\n                opacity: 1;\n            }\n\n            to {\n                opacity: 0;\n            }\n        }\n    "
                );
              })({ uid: h })
            ),
            jo(
              "iframe",
              {
                title: "PayPal Checkout Overlay",
                name: "__paypal_checkout_sandbox_" + h + "__",
                scrolling: "no",
                class: "paypal-checkout-sandbox-iframe",
              },
              jo(
                "html",
                null,
                jo(
                  "body",
                  null,
                  jo(
                    "div",
                    {
                      id: h,
                      onClick: function (n) {
                        var e;
                        n.preventDefault(),
                          n.stopPropagation(),
                          g() &&
                            (m()
                              ? window.alert(
                                  "Please switch tabs to reactivate the PayPal window"
                                )
                              : (void 0 === e && (e = d()),
                                /Firefox/i.test(e)
                                  ? window.alert(
                                      'Don\'t see the popup window?\n\nSelect "Window" in your toolbar to find "Log in to your PayPal account"'
                                    )
                                  : o()));
                      },
                      class:
                        "paypal-overlay-context-" +
                        t +
                        " paypal-checkout-overlay",
                    },
                    !f &&
                      jo("a", {
                        href: "#",
                        class: "paypal-checkout-close",
                        onClick: function (n) {
                          n.preventDefault(), n.stopPropagation(), r();
                        },
                        "aria-label": "close",
                        role: "button",
                      }),
                    jo(
                      "div",
                      { class: "paypal-checkout-modal" },
                      jo(
                        "div",
                        { class: "paypal-checkout-logo" },
                        jo(Ai, { logoColor: "white" }),
                        jo(Li, { logoColor: "white" })
                      ),
                      c.windowMessage &&
                        jo(
                          "div",
                          { class: "paypal-checkout-message" },
                          c.windowMessage
                        ),
                      c.continueMessage &&
                        jo(
                          "div",
                          { class: "paypal-checkout-continue" },
                          jo("a", { onClick: o, href: "#" }, c.continueMessage)
                        ),
                      jo(
                        "div",
                        { class: "paypal-checkout-loader" },
                        jo("div", { class: "paypal-spinner" })
                      )
                    ),
                    jo("div", { class: "paypal-checkout-iframe-container" }, e),
                    jo(
                      "style",
                      { nonce: p },
                      (function (n) {
                        var e = n.uid;
                        return (
                          "\n        #" +
                          e +
                          " {\n            position: absolute;\n            z-index: 2147483647;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n\n            transform: translate3d(0, 0, 0);\n\n            background-color: black;\n            background-color: rgba(0, 0, 0, 0.8);\n            background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n\n            color: #fff;\n        }\n\n        #" +
                          e +
                          " a {\n            color: #fff;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:before,\n        #" +
                          e +
                          " .paypal-checkout-close:after {\n            background-color: #fff;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.POPUP +
                          " {\n            cursor: pointer;\n        }\n\n        #" +
                          e +
                          " a {\n            text-decoration: none;\n        }\n\n        #" +
                          e +
                          ' .paypal-checkout-modal {\n            font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;\n            font-size: 14px;\n            text-align: center;\n\n            box-sizing: border-box;\n            max-width: 350px;\n            top: 50%;\n            left: 50%;\n            position: absolute;\n            transform: translateX(-50%) translateY(-50%);\n            cursor: pointer;\n            text-align: center;\n        }\n\n        #' +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-message, #" +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-continue {\n            display: none;\n        }\n\n        .paypal-checkout-loader {\n            display: none;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-loader {\n            display: block;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-logo {\n            cursor: pointer;\n            margin-bottom: 30px;\n            display: inline-block;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-logo img {\n            height: 36px;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-logo img.paypal-checkout-logo-pp {\n            margin-right: 10px;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-message {\n            font-size: 15px;\n            line-height: 1.5;\n            padding: 10px 0;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .paypal-checkout-message, #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .paypal-checkout-continue {\n            display: none;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-continue {\n            font-size: 15px;\n            line-height: 1.35;\n            padding: 10px 0;\n            font-weight: bold;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-continue a {\n            border-bottom: 1px solid white;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close {\n            position: absolute;\n            right: 16px;\n            top: 16px;\n            width: 16px;\n            height: 16px;\n            opacity: 0.6;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-close {\n            display: none;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:hover {\n            opacity: 1;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:before, .paypal-checkout-close:after {\n            position: absolute;\n            left: 8px;\n            content: ' ';\n            height: 16px;\n            width: 2px;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:before {\n            transform: rotate(45deg);\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:after {\n            transform: rotate(-45deg);\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-iframe-container {\n            display: none;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .paypal-checkout-iframe-container,\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .paypal-checkout-iframe-container > .outlet,\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .paypal-checkout-iframe-container > .outlet > iframe {\n            max-height: 95vh;\n            max-width: 95vw;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .paypal-checkout-iframe-container {\n\n            display: block;\n\n            position: absolute;\n\n            top: 50%;\n            left: 50%;\n\n            min-width: 450px;\n\n            transform: translate(-50%, -50%);\n            transform: translate3d(-50%, -50%, 0);\n\n            border-radius: 10px;\n            overflow: hidden;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .outlet {\n\n            position: relative;\n\n            transition: all 0.3s ease;\n            animation-duration: 0.3s;\n            animation-fill-mode: forwards !important;\n\n            min-width: 450px;\n            max-width: 450px;\n            width: 450px;\n            height: 535px;\n\n            background-color: white;\n\n            overflow: auto;\n\n            opacity: 0;\n            transform: scale3d(.3, .3, .3);\n\n            -webkit-overflow-scrolling: touch;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .outlet > iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            transition: opacity .4s ease-in-out;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .outlet > iframe.component-frame {\n            z-index: 100;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .outlet > iframe.prerender-frame {\n            z-index: 200;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .outlet > iframe.visible {\n            opacity: 1;\n            z-index: 200;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .outlet > iframe.invisible {\n            opacity: 0;\n            z-index: 100;\n        }\n\n        @media screen and (max-width: 470px) {\n\n            #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .paypal-checkout-iframe-container,\n            #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .outlet {\n                min-width: 100%;\n                min-width: calc(100% - 20px);\n\n                max-width: 100%;\n                max-width: calc(100% - 20px);\n            }\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          to.IFRAME +
                          " .outlet iframe {\n            width: 1px;\n            min-width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-component {\n            from {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n\n            to {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n        }\n\n        @keyframes hide-component {\n            from {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n\n            to {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n        }\n\n        .paypal-spinner {\n            height: 30px;\n            width: 30px;\n            display: inline-block;\n            box-sizing: content-box;\n            opacity: 1;\n            filter: alpha(opacity=100);\n            animation: rotation .7s infinite linear;\n            border-left: 8px solid rgba(0, 0, 0, .2);\n            border-right: 8px solid rgba(0, 0, 0, .2);\n            border-bottom: 8px solid rgba(0, 0, 0, .2);\n            border-top: 8px solid #fff;\n            border-radius: 100%\n        }\n\n        @keyframes rotation {\n            from {\n                transform: rotate(0deg)\n            }\n            to {\n                transform: rotate(359deg)\n            }\n        }\n    "
                        );
                      })({ uid: h })
                    )
                  )
                )
              )
            )
          )
        );
      }
      ((Mi = {}).default = {
        primary: "#4D4D4F",
        secondary: "#000000",
        tertiary: "#FF0000",
        quaternary: "#E83E49",
        quinary: "#FF00FF",
        senary: "#FFFFFF",
      }),
        (Mi.white = {
          primary: "#FFFFFF",
          secondary: "#FFFFFF",
          tertiary: "#000000",
          quaternary: "#000000",
          quinary: "#000000",
          senary: "#000000",
        }),
        (Mi.black = {
          primary: "#4D4D4F",
          secondary: "#000000",
          tertiary: "#FF0000",
          quaternary: "#E83E49",
          quinary: "#FF00FF",
          senary: "#FFFFFF",
        }),
        ((Ii = {}).default = { primary: "#020202", secondary: "#64CC07" }),
        (Ii.white = { primary: "#FFFFFF", secondary: "#FFFFFF" }),
        (Ii.black = { primary: "#000000", secondary: "#000000" }),
        ((Di = {}).default = {
          primary: "#EC1D24",
          secondary: "#EDA42D",
          tertiary: "#FEFEFE",
        }),
        (Di.white = {
          primary: "#EC1D24",
          secondary: "#EDA42D",
          tertiary: "#FEFEFE",
        }),
        (Di.black = {
          primary: "#EC1D24",
          secondary: "#EDA42D",
          tertiary: "#FEFEFE",
        }),
        ((ji = {}).default = { primary: "#1A1919", secondary: "#FFFFFE" }),
        (ji.white = { primary: "#1A1919", secondary: "#FFFFFE" }),
        (ji.black = { primary: "#1A1919", secondary: "#FFFFFE" }),
        ((Hi = {}).default = { primary: "#004A91", secondary: "#ED1921" }),
        (Hi.white = { primary: "#004A91", secondary: "#ED1921" }),
        (Hi.black = { primary: "#004A91", secondary: "#ED1921" }),
        ((Bi = {}).default = {
          primary: "#2D3277",
          secondary: "#FFFFFF",
          tertiary: "#009EE3",
          quaternary: "#009EE3",
        }),
        (Bi.white = {
          primary: "#FFFFFF",
          secondary: "#000000",
          tertiary: "#FFFFFF",
          quaternary: "#000000",
        }),
        (Bi.black = {
          primary: "#2D3277",
          secondary: "#FFFFFF",
          tertiary: "#009EE3",
          quaternary: "#009EE3",
        });
      function zi() {
        return Wt() + "/webapps/helios";
      }
      function qi() {
        return Pn(qi, function () {
          var n = Lo({
            tag: "three-domain-secure",
            url: zi,
            attributes: { iframe: { scrolling: "no" } },
            containerTemplate: function (n) {
              var e = n.doc,
                t = n.props;
              return jo(Zi, {
                context: n.context,
                close: n.close,
                focus: n.focus,
                event: n.event,
                frame: n.frame,
                prerenderFrame: n.prerenderFrame,
                content: t.content,
                nonce: t.nonce,
              }).render(Uo({ doc: e }));
            },
            props: {
              action: {
                type: "string",
                queryParam: !0,
                value: function () {
                  return "verify";
                },
              },
              xcomponent: {
                type: "string",
                queryParam: !0,
                value: function () {
                  return "1";
                },
              },
              flow: {
                type: "string",
                queryParam: !0,
                value: function () {
                  return "3ds";
                },
              },
              createOrder: {
                type: "function",
                queryParam: "cart_id",
                queryValue: function (n) {
                  return _.try(n.value);
                },
              },
              clientID: { type: "string", value: wt, queryParam: !0 },
              onSuccess: {
                type: "function",
                alias: "onContingencyResult",
                decorate: function (n) {
                  var e = n.value,
                    t = n.onError;
                  return function (n, r) {
                    return n ? t(n) : e(r);
                  };
                },
              },
              sdkMeta: {
                type: "string",
                queryParam: !0,
                sendToChild: !1,
                value: Kt,
              },
              content: { type: "object", required: !1 },
              userType: { type: "string", required: !1 },
              nonce: { type: "string", default: Rt },
            },
          });
          return (
            n.isChild() && (window.xchild = { props: n.xprops, close: Nn }), n
          );
        });
      }
      function Gi(n) {
        return jo(
          "div",
          { class: "preloader spinner" },
          jo("style", {
            nonce: n.nonce,
            innerHTML:
              "\n\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n\n    .spinner .spinWrap {\n        width: 200px;\n        height: 100px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        margin-top: -50px\n    }\n\n    .spinner .loader,\n    .spinner .spinnerImage {\n        height: 100px;\n        width: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        opacity: 1;\n        filter: alpha(opacity=100)\n    }\n\n    .spinner .spinnerImage {\n        margin: 28px 0 0 -25px;\n        background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n    }\n\n    .spinner .loader {\n        margin: 0 0 0 -55px;\n        background-color: transparent;\n        animation: rotation .7s infinite linear;\n        border-left: 5px solid #cbcbca;\n        border-right: 5px solid #cbcbca;\n        border-bottom: 5px solid #cbcbca;\n        border-top: 5px solid #2380be;\n        border-radius: 100%\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n",
          }),
          jo(
            "div",
            { class: "spinWrap" },
            jo("p", { class: "spinnerImage" }),
            jo("p", { class: "loader" })
          )
        );
      }
      function Ki(n, e) {
        var t = n.nonce;
        return jo(
          "html",
          null,
          jo(
            "head",
            null,
            jo("title", null, "PayPal"),
            jo("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
            })
          ),
          jo("body", null, jo(Gi, { nonce: t }), e)
        );
      }
      var Vi = {
        ar: {
          windowMessage:
            "لا ترى متصفح PayPal الآمن؟ سنساعدك في إعادة فتح النافذة لاستكمال مشترياتك",
          continueMessage: "متابعة",
        },
        bg: {
          windowMessage:
            "Не виждате защитения браузър на PayPal? Ще ви помогнем да отворите отново прозореца, за да завършите покупката си",
          continueMessage: "Щракнете, за да продължите",
        },
        cs: {
          windowMessage:
            "Nezobrazuje se vám bezpečný prohlížeč PayPal? Pomůžeme vám okno znovu otevřít, abyste mohli nákup dokončit",
          continueMessage: "Pokračovat",
        },
        da: {
          windowMessage:
            "Kan du ikke se PayPals sikre browser? Vi hjælper dig med at genstarte vinduet, så du kan betale",
          continueMessage: "Fortsæt",
        },
        de: {
          windowMessage:
            "Sie sehen das sichere Browserfenster von PayPal nicht? Hier können Sie es wieder öffnen und Ihren Einkauf abschließen",
          continueMessage: "Weiter",
        },
        el: {
          windowMessage:
            "Δεν βλέπετε το ασφαλές πρόγραμμα περιήγησης PayPal; Θα σας βοηθήσουμε να επανεκκινήσετε το παράθυρο για να ολοκληρώσετε την αγορά σας",
          continueMessage: "Συνέχεια",
        },
        en: {
          windowMessage:
            "Don’t see the secure PayPal browser? We’ll help you re-launch the window to complete your purchase",
          continueMessage: "Click to Continue",
        },
        es: {
          windowMessage:
            "¿No ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra",
          continueMessage: "Continuar",
        },
        et: {
          windowMessage:
            "Kas te ei näe turvalist PayPali lehitsejat? Aitame teil ostu lõpuleviimiseks akna uuesti avada.",
          continueMessage: "Jätkamiseks klõpsake",
        },
        fi: {
          windowMessage:
            "Eikö suojattua PayPal-selainta näy? Autamme avaamaan ikkunan uudelleen oston viimeistelyä varten",
          continueMessage: "Jatka",
        },
        fr: {
          windowMessage:
            "Le navigateur sécurisé de PayPal n’apparaît pas ? Nous allons vous aider à rouvrir la fenêtre pour finaliser votre achat",
          continueMessage: "Continuer",
        },
        he: {
          windowMessage:
            "לא רואה את דפדפן PayPal המאובטח? נעזור לך לפתוח מחדש את החלון כדי להשלים את הקנייה שלך",
          continueMessage: "המשך",
        },
        hu: {
          windowMessage:
            "Nem látja a biztonságos PayPal-böngészőt? Segítünk újra betölteni az ablakot, hogy befejezhesse a vásárlást",
          continueMessage: "Folytatás",
        },
        id: {
          windowMessage:
            "Browser PayPal yang aman tidak terlihat? Kami akan membantu menampilkan ulang jendela untuk menyelesaikan pembayaran Anda",
          continueMessage: "Lanjutkan",
        },
        it: {
          windowMessage:
            "Non vedi la pagina sicura di PayPal? Ti aiuteremo a riaprire la finestra per completare l’acquisto",
          continueMessage: "Continua",
        },
        ja: {
          windowMessage:
            "セキュアなブラウザが表示されない場合は、ウィンドウを再起動して、支払いを完了できるようお手伝いいたします",
          continueMessage: "続行",
        },
        ko: {
          windowMessage:
            "보안 PayPal 브라우저가 보이지 않으신가요? 창을 다시 실행하여 결제를 완료할 수 있도록 도와드리겠습니다",
          continueMessage: "계속",
        },
        lt: {
          windowMessage:
            "Nematote saugios „PayPal“ naršyklės? Padėsime iš naujo paleisti langą, kad užbaigtumėte pirkimą",
          continueMessage: "Paspauskite, jei norite tęsti",
        },
        lv: {
          windowMessage:
            "Vai neredzat drošo PayPal pārlūkprogrammu? Mēs palīdzēsim jums atkārtoti palaist logu, lai pabeigtu pirkumu.",
          continueMessage: "Noklikšķiniet, lai turpinātu",
        },
        ms: {
          windowMessage:
            "Tidak melihat pelayar PayPal yang selamat? Kami akan membantu anda melancarkan semula tetingkap untuk melengkapkan pembelian anda",
          continueMessage: "Klik untuk Meneruskan",
        },
        no: {
          windowMessage:
            "Ser du ikke den sikre PayPal-nettleseren? Vi hjelper deg med å starte vinduet på nytt så du kan fullføre kjøpet",
          continueMessage: "Fortsett",
        },
        nl: {
          windowMessage:
            "Ziet u de beveiligde PayPal-browser niet? We helpen u het venster opnieuw te openen om uw aankoop te voltooien",
          continueMessage: "Doorgaan",
        },
        pl: {
          windowMessage:
            "Nie widzisz bezpiecznej przeglądarki PayPal? Pomożemy Ci ponownie uruchomić to okno w celu dokonania zakupu",
          continueMessage: "Kontynuuj",
        },
        pt: {
          windowMessage:
            "Não está vendo o navegador seguro do PayPal? Ajudaremos você a reabrir a janela para concluir a compra",
          continueMessage: "Continuar",
        },
        ro: {
          windowMessage:
            "Nu vezi browser-ul securizat PayPal? Te vom ajuta să lansezi din nou fereastra pentru a finaliza achiziția",
          continueMessage: "Dă clic pentru a continua",
        },
        ru: {
          windowMessage:
            "Не отображается безопасная страница PayPal в браузере? Мы поможем вам повторно загрузить окно, чтобы завершить покупку",
          continueMessage: "Продолжить",
        },
        si: {
          windowMessage:
            "ආරක්ෂිත PayPal බ්‍රව්සරය නොපෙනේ ද? ඔබේ මිල දී ගැනීම සම්පූර්ණ කිරීම සඳහා අපි ඔබට කවුළුව නැවත දියත් කිරීමට උපකාර කරන්නෙමු",
          continueMessage: "ඉදිරියට යාමට ක්ලික් කරන්න",
        },
        sk: {
          windowMessage:
            "Nezobrazuje sa vám zabezpečený prehliadač PayPal? Pomôžeme vám znova otvoriť okno, aby ste mohli nákup dokončiť",
          continueMessage: "Pokračovať",
        },
        sl: {
          windowMessage:
            "Ne vidite PayPalovega varnega brskalnika? Pomagali vam bomo ponovno zagnati okno za dokončanje nakupa",
          continueMessage: "Kliknite za nadaljevanje",
        },
        sq: {
          windowMessage:
            "Nuk e shikon shfletuesin e sigurt të PayPal? Do të të ndihmojmë të rihapësh dritaren për të përfunduar blerjen",
          continueMessage: "Kliko për të vazhduar",
        },
        sv: {
          windowMessage:
            "Ser du inte den säkra PayPal-webbläsaren? Vi hjälper dig att starta om fönstret för att slutföra ditt köp",
          continueMessage: "Fortsätt",
        },
        th: {
          windowMessage:
            "ถ้าคุณไม่เห็นเบราว์เซอร์ที่มีระบบความปลอดภัยของ PayPal เราจะช่วยคุณเปิดหน้าต่างอีกครั้งเพื่อชำระเงินให้เรียบร้อย",
          continueMessage: "ดำเนินการต่อ",
        },
        tl: {
          windowMessage:
            "Hindi nakikita ang secure na PayPal browser? Tutulungan ka naming i-launch ulit ang window para makumpleto ang pagbili mo.",
          continueMessage: "I-click para Magpatuloy",
        },
        tr: {
          windowMessage:
            "Güvenli PayPal tarayıcısını görmüyor musunuz? Alışverişinizi tamamlamak için pencereyi yeniden başlatmanıza yardımcı olacağız",
          continueMessage: "Devam",
        },
        vi: {
          windowMessage:
            "Bạn không thấy trình duyệt PayPal bảo mật? Chúng tôi sẽ giúp bạn mở lại cửa sổ để hoàn tất giao dịch mua hàng",
          continueMessage: "Nhấp để tiếp tục",
        },
        zh: {
          windowMessage:
            "没有找到安全的PayPal浏览器？我们将帮助您重启窗口以完成付款",
          continueMessage: "继续",
        },
      };
      function Yi() {
        return Pn(Yi, function () {
          var n = Lo({
            tag: "paypal-checkout",
            url: function () {
              return "" + Wt() + (window.__CHECKOUT_URI__ || "/checkoutnow");
            },
            attributes: { iframe: { scrolling: "yes" } },
            defaultContext: g() ? to.POPUP : to.IFRAME,
            domain: Zt(),
            logger: qt(),
            prerenderTemplate: function (n) {
              var e = n.doc;
              return jo(Ki, { nonce: n.props.nonce }).render(Uo({ doc: e }));
            },
            containerTemplate: function (n) {
              var e = n.doc,
                t = n.props;
              return jo(Zi, {
                context: n.context,
                close: n.close,
                focus: n.focus,
                event: n.event,
                frame: n.frame,
                prerenderFrame: n.prerenderFrame,
                content: Vi[t.locale.lang],
                nonce: t.nonce,
              }).render(Uo({ doc: e }));
            },
            props: {
              clientID: {
                type: "string",
                value: function () {
                  return wt();
                },
                queryParam: !0,
              },
              sessionID: { type: "string", value: To, queryParam: !0 },
              buttonSessionID: { type: "string", queryParam: !0, required: !1 },
              env: { type: "string", queryParam: !0, value: tt },
              sdkMeta: { type: "string", queryParam: !0, value: Kt },
              nonce: {
                type: "string",
                required: !1,
                value: Rt,
                allowDelegate: !0,
              },
              createAuthCode: {
                type: "function",
                queryParam: "code",
                required: !1,
                queryValue: function (n) {
                  return _.try(n.value);
                },
                decorate: function (n) {
                  return xn(n.value);
                },
              },
              buyerCountry: {
                type: "string",
                queryParam: !0,
                required: !1,
                default: Nt,
              },
              locale: {
                type: "object",
                queryParam: "locale.x",
                allowDelegate: !0,
                queryValue: function (n) {
                  var e = n.value;
                  return e.lang + "_" + e.country;
                },
                value: Ft,
              },
              createOrder: {
                type: "function",
                queryParam: "token",
                alias: "payment",
                queryValue: function (n) {
                  return _.try(n.value);
                },
                decorate: function (n) {
                  return xn(n.value);
                },
              },
              xcomponent: {
                type: "string",
                queryParam: !0,
                value: function () {
                  return "1";
                },
              },
              version: { type: "string", queryParam: !0, value: it },
              commit: { type: "boolean", queryParam: !0, value: Ct },
              fundingSource: {
                type: "string",
                queryParam: !0,
                default: function () {
                  return nt.PAYPAL;
                },
              },
              standaloneFundingSource: {
                type: "string",
                queryParam: !0,
                required: !1,
              },
              branded: { type: "boolean", queryParam: !0, required: !1 },
              enableFunding: { type: "array", queryParam: !0, required: !1 },
              onApprove: { type: "function", alias: "onAuthorize" },
              onShippingChange: { type: "function", required: !1 },
              clientMetadataID: {
                type: "string",
                required: !1,
                default: nr,
                queryParam: "client-metadata-id",
              },
              onAuth: { type: "function", required: !1, sameDomain: !0 },
              accessToken: { type: "string", required: !1 },
              onCancel: { type: "function", required: !1 },
              onFocused: {
                type: "function",
                value: function (n) {
                  var e = n.event;
                  return function (n) {
                    return e.on("zoid-focus", n);
                  };
                },
              },
              test: {
                type: "object",
                default: function () {
                  return window.__test__ || { action: "checkout" };
                },
              },
            },
            dimensions: f()
              ? { width: "100%", height: "590px" }
              : { width: "500px", height: "590px" },
          });
          return (
            n.isChild() &&
              ((window.xchild = { props: n.xprops, show: Nn, hide: Nn }),
              (function () {
                try {
                  if (!window.injector) return;
                  var n = window.injector.get("$util");
                  if (!n || !n.redirect) return;
                  var e = n.redirect;
                  n.redirect = function (n) {
                    try {
                      -1 !== n.indexOf("/ppcreditapply") &&
                        -1 !== n.indexOf("key=") &&
                        -1 === n.indexOf("sdkMeta") &&
                        (n += "&sdkMeta=" + Kt());
                    } catch (n) {}
                    for (
                      var t = arguments.length,
                        r = new Array(t > 1 ? t - 1 : 0),
                        o = 1;
                      o < t;
                      o++
                    )
                      r[o - 1] = arguments[o];
                    return e.call.apply(e, [this, n].concat(r));
                  };
                } catch (n) {}
              })()),
            n
          );
        });
      }
      var Ji = [
          nt.PAYPAL,
          nt.VENMO,
          nt.ITAU,
          nt.CREDIT,
          nt.PAYLATER,
          nt.APPLEPAY,
          nt.IDEAL,
          nt.SEPA,
          nt.BANCONTACT,
          nt.GIROPAY,
          nt.EPS,
          nt.SOFORT,
          nt.MYBANK,
          nt.BLIK,
          nt.P24,
          nt.ZIMPLER,
          nt.WECHATPAY,
          nt.PAYU,
          nt.VERKKOPANKKI,
          nt.TRUSTLY,
          nt.OXXO,
          nt.BOLETO,
          nt.MAXIMA,
          nt.MERCADOPAGO,
          nt.CARD,
        ],
        Xi = [nt.PAYPAL, nt.ITAU];
      function $i(n, e) {
        void 0 === e && (e = {});
        var t = Fn(nt),
          r = e.cookie,
          o = void 0 === r || r,
          i = e.expiry;
        if (!n || !n.length) throw new Error("Pass array of funding sources");
        for (var a = 0; a < n.length; a++) {
          var u = n[a];
          if (-1 === t.indexOf(u))
            throw new Error("Invalid funding source: " + u);
        }
        o &&
          !zt() &&
          (function (n, e) {
            var t;
            void 0 === e && (e = {});
            var r = e.expiry,
              o = document.createElement("iframe");
            (o.style.display = "none"),
              o.setAttribute("sandbox", "allow-scripts"),
              o.setAttribute(
                "src",
                ie(Wt() + "/smart/funding/remember", {
                  query:
                    ((t = {}),
                    (t.domain = B()),
                    (t["client-id"] = wt()),
                    (t.sdkMeta = Kt()),
                    (t["funding-sources"] = n.join(",")),
                    (t.expiry = (r || "").toString()),
                    t),
                })
              );
            var i = document.body;
            if (!i) throw new Error("Can not find body");
            i.appendChild(o);
          })(n, { expiry: i }),
          Xt(function (e) {
            e.funding = e.fundingConfig || {};
            for (var t = 0; t < n.length; t++) {
              var r = n[t],
                o = (e.funding[r] = e.funding[r] || {});
              (o.remembered = !0), i && (o.expiry = Date.now() + 1e3 * i);
            }
          });
      }
      var Qi = function () {
        return Xt(function (n) {
          return (
            (n.funding = n.funding || {}),
            Object.keys(n.funding).filter(function (e) {
              var t = n.funding[e];
              return !(
                (t.expiry && Date.now() > t.expiry) ||
                !n.funding[e].remembered
              );
            })
          );
        });
      };
      function na(n) {
        return -1 !== Qi().indexOf(n);
      }
      var ea = function () {
        for (var n = ct(), e = 0; e < Xi.length; e++) {
          var t,
            r = Xi[e];
          if (na(r)) {
            var o = n[r];
            o &&
              (n = E(
                {},
                n,
                (((t = {})[r] = E({}, o, { eligible: !0, recommended: !0 })), t)
              ));
          }
        }
        return n;
      };
      function ta() {
        return Ji;
      }
      function ra(n) {
        if (-1 === Fn(nt).indexOf(n))
          throw new Error("Funding source " + n + " is not supported");
        var e = ea();
        return Boolean(e[n] && e[n].eligible);
      }
      var oa,
        ia,
        aa,
        ua,
        la = {
          PAYPAL: "paypal",
          CHECKOUT: "checkout",
          BUYNOW: "buynow",
          PAY: "pay",
          INSTALLMENT: "installment",
          SUBSCRIBE: "subscribe",
        },
        ca = {
          TINY: "tiny",
          SMALL: "small",
          MEDIUM: "medium",
          LARGE: "large",
          HUGE: "huge",
          RESPONSIVE: "responsive",
        },
        sa = { HORIZONTAL: "horizontal", VERTICAL: "vertical" },
        da = {
          CONTAINER: "paypal-button-container",
          BUTTON_ROW: "paypal-button-row",
          BUTTON: "paypal-button",
          BUTTON_LABEL: "paypal-button-label-container",
          LABEL: "paypal-button-label",
          COLOR: "paypal-button-color",
          TEXT_COLOR: "paypal-button-text-color",
          SHAPE: "paypal-button-shape",
          LAYOUT: "paypal-button-layout",
          NUMBER: "paypal-button-number",
          ENV: "paypal-button-env",
          WALLET: "paypal-button-wallet",
          WALLET_MENU: "paypal-button-wallet-menu",
          LOADING: "paypal-button-loading",
          SPINNER: "paypal-button-spinner",
          TAGLINE: "paypal-button-tagline",
          POWERED_BY: "paypal-powered-by",
          TEXT: "paypal-button-text",
          SPACE: "paypal-button-space",
          CARD: "paypal-button-card",
          PERSONALIZATION_TEXT: "paypal-personalization-text",
          VAULT_LABEL: "paypal-vault-label",
          VAULT_HEADER: "paypal-vault-header",
          SEPARATOR: "paypal-separator",
          DOM_READY: "dom-ready",
          HIDDEN: "hidden",
          IMMEDIATE: "immediate",
        },
        fa = t(3),
        pa = t.n(fa),
        ha = ["optional", "className", "animate"];
      function ma(n, e) {
        var t = n.optional,
          r = n.className,
          o = void 0 === r ? [] : r,
          i = n.animate,
          a = c(n, ha);
        return jo(
          "span",
          E(
            {
              class: [da.TEXT]
                .concat(o, [i || da.IMMEDIATE])
                .filter(Boolean)
                .join(" "),
              optional: t,
            },
            a,
            { "data-v-56bb4eac": "" }
          ),
          e
        );
      }
      function ga() {
        return jo(
          "span",
          { class: [da.SPACE].join(" "), "data-v-56bb4eac": "" },
          " "
        );
      }
      function ya(n) {
        var e = n.chars,
          t = n.color;
        return jo(
          zo,
          { css: pa.a, "data-v-56bb4eac": "" },
          jo(
            "div",
            {
              class: [
                "placeholder",
                "color-" + (void 0 === t ? "white" : t),
              ].join(" "),
              "data-v-56bb4eac": "",
            },
            new Array(e).fill("x").join("")
          )
        );
      }
      function wa(n) {
        return n.logo;
      }
      var va = {
        enabled: !0,
        automatic: !0,
        layouts: [sa.VERTICAL],
        platforms: [et.DESKTOP, et.MOBILE],
        flows: ["purchase"],
        colors: ["silver", "black", "white"],
        logoColors: ((oa = {}), (oa.black = "white"), oa),
        shapes: ["rect", "pill"],
        textColors:
          ((ia = {}),
          (ia.default = "black"),
          (ia.blue = "white"),
          (ia.black = "white"),
          (ia.darkblue = "white"),
          ia),
        secondaryColors:
          ((aa = {}),
          (aa.default = "silver"),
          (aa.black = "black"),
          (aa.white = "white"),
          aa),
        secondaryVaultColors:
          ((ua = {}),
          (ua.default = "silver"),
          (ua.black = "black"),
          (ua.white = "white"),
          ua),
        Logo: function () {
          throw new Error("Not implemented");
        },
        Label: wa,
        showWalletMenu: function () {
          return !0;
        },
      };
      function ba(n) {
        var e = n.url;
        return jo(
          Ho,
          null,
          jo("style", {
            nonce: n.nonce,
            innerHTML:
              "\n                    .tracking-beacon {\n                        visibility: hidden;\n                        position: absolute;\n                        height: 1px;\n                        width: 1px;\n                    }\n                ",
          }),
          jo("img", { class: "tracking-beacon", src: e })
        );
      }
      var Ca,
        Ea,
        La,
        xa = "\n    max-width: 0%;\n    opacity: 0;\n    overflow: hidden;\n",
        Oa = "\n    max-width: 100%;\n    opacity: 1;\n",
        Pa = "\n    position: static;\n    visibility: visible;\n",
        Na =
          "\n\n    ." +
          da.BUTTON +
          " ." +
          da.TEXT +
          " {\n        height: 100%;\n        \n    position: absolute;\n    visibility: hidden;\n\n    }\n\n    ." +
          da.BUTTON +
          " ." +
          da.TEXT +
          "." +
          da.IMMEDIATE +
          ":not(." +
          da.PERSONALIZATION_TEXT +
          "):not(." +
          da.HIDDEN +
          ") {\n        " +
          Pa +
          "\n        " +
          Oa +
          "\n    }\n\n    ." +
          da.BUTTON +
          " ." +
          da.VAULT_LABEL +
          " {\n        max-width: 60%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n    }\n\n    ." +
          da.DOM_READY +
          " ." +
          da.BUTTON +
          " ." +
          da.TEXT +
          ":not(." +
          da.IMMEDIATE +
          "):not(." +
          da.PERSONALIZATION_TEXT +
          "):not(." +
          da.HIDDEN +
          ") {\n        " +
          Pa +
          "\n        " +
          xa +
          "\n        animation: show-text 1s 0s forwards;\n    }\n\n    @keyframes show-text {\n        0% { " +
          xa +
          " }\n        100% { " +
          Oa +
          " }\n    }\n",
        Ta = t(2),
        Sa = t.n(Ta);
      function ka(n) {
        return jo(Li, { logoColor: n.logoColor, "data-v-ea5d27f0": "" });
      }
      function _a(n) {}
      function Aa(n) {
        return jo(
          Ho,
          { "data-v-ea5d27f0": "" },
          jo(wa, E({}, n, { "data-v-ea5d27f0": "" })),
          jo(_a, E({}, n, { "data-v-ea5d27f0": "" }))
        );
      }
      function Fa(n) {
        var e = n.logoColor,
          t = n.instrument,
          r = n.content,
          o = n.commit,
          i = n.vault,
          a = n.textColor,
          u = n.fundingSource;
        if (!t || t.type) {
          var l, c, s;
          (s =
            t && "boolean" == typeof t.branded
              ? t.branded
              : u === nt.PAYPAL || u === nt.CREDIT || u !== nt.CARD),
            t &&
              ("card" === t.type && t.label
                ? ((l = t.logoUrl
                    ? jo("img", {
                        class: "card-art",
                        src: t.logoUrl,
                        "data-v-ea5d27f0": "",
                      })
                    : jo(gi, { logoColor: e, "data-v-ea5d27f0": "" })),
                  (c = t.label.replace("••••", "••")))
                : "bank" === t.type && t.label
                ? ((l = t.logoUrl
                    ? jo("img", {
                        class: "card-art",
                        src: t.logoUrl,
                        "data-v-ea5d27f0": "",
                      })
                    : jo(ri, { logoColor: e, "data-v-ea5d27f0": "" })),
                  (c = t.label.replace("••••", "••")))
                : "credit" === t.type
                ? ((l = jo(yi, { "data-v-ea5d27f0": "" })), (c = r && r.credit))
                : "balance" === t.type
                ? ((l = jo(Fi, { "data-v-ea5d27f0": "" })),
                  (c = r && r.balance))
                : t.label && (c = t.label));
          var d = Boolean(t && t.oneClick && o && !i),
            f = {};
          return (
            d && (f["data-pay-now"] = !0),
            jo(
              zo,
              { css: Sa.a, "data-v-ea5d27f0": "" },
              jo(
                "div",
                E({ class: "wallet-label-new" }, f, { "data-v-ea5d27f0": "" }),
                s
                  ? jo(
                      "div",
                      { class: "paypal-mark", "data-v-ea5d27f0": "" },
                      jo(Ai, { logoColor: e, "data-v-ea5d27f0": "" }),
                      jo(ga, { "data-v-ea5d27f0": "" })
                    )
                  : null,
                jo(
                  "div",
                  { class: "pay-label", optional: 2, "data-v-ea5d27f0": "" },
                  jo(ga, { "data-v-ea5d27f0": "" }),
                  jo(
                    ma,
                    { "data-v-ea5d27f0": "" },
                    t && r
                      ? d
                        ? r.payNow
                        : r.payWith
                      : jo(ya, { chars: 7, color: a, "data-v-ea5d27f0": "" })
                  ),
                  jo(ga, { "data-v-ea5d27f0": "" })
                ),
                jo(
                  "div",
                  { class: "logo", optional: 1, "data-v-ea5d27f0": "" },
                  t && l
                    ? l
                    : jo(
                        ma,
                        { "data-v-ea5d27f0": "" },
                        jo(ya, { chars: 4, color: a, "data-v-ea5d27f0": "" })
                      )
                ),
                jo(
                  "div",
                  { class: "label", "data-v-ea5d27f0": "" },
                  jo(ga, { "data-v-ea5d27f0": "" }),
                  jo(
                    ma,
                    { "data-v-ea5d27f0": "" },
                    t && c
                      ? c
                      : jo(ya, { chars: 6, color: a, "data-v-ea5d27f0": "" })
                  )
                )
              )
            )
          );
        }
      }
      function Ra(n) {
        return null;
      }
      function Ma() {
        return Pn(Ma, function () {
          var n, e;
          return (
            ((n = {})[nt.PAYPAL] = E({}, va, {
              flows: ["purchase", "billing_setup", "subscription_setup"],
              layouts: [sa.VERTICAL, sa.HORIZONTAL],
              colors: ["gold", "blue", "silver", "black", "white"],
              logoColors:
                ((e = {}),
                (e.gold = "blue"),
                (e.silver = "blue"),
                (e.blue = "white"),
                (e.black = "white"),
                (e.white = "blue"),
                e),
              labelText: "PayPal",
              Logo: ka,
              Label: Aa,
              WalletLabel: Fa,
              Tag: Ra,
            })),
            (n[nt.VENMO] = null),
            (n[nt.APPLEPAY] = null),
            (n[nt.ITAU] = null),
            (n[nt.CREDIT] = null),
            (n[nt.PAYLATER] = null),
            (n[nt.CARD] = (function () {
              var n,
                e,
                t,
                r,
                o =
                  (((r = {}).visa = { Label: ai }),
                  (r.amex = { Label: oi }),
                  (r.mastercard = { Label: ii }),
                  (r.discover = null),
                  (r.jcb = null),
                  (r.elo = null),
                  (r.hiper = null),
                  r),
                i = (((n = {})[Ye.BR] = 5), n);
              return E({}, va, {
                eligible: function (n) {
                  var e = n.fundingSource,
                    t = n.wallet,
                    r = n.fundingEligibility.card,
                    o = Boolean(-1 !== n.components.indexOf("hosted-fields")),
                    i = Boolean(r && r.eligible),
                    a = Boolean(r && r.branded),
                    u = Boolean(
                      t &&
                        t.card &&
                        t.card.instruments &&
                        t.card.instruments.length
                    );
                  return !(!i || (!a && !u && e !== nt.CARD && o));
                },
                flows: ["purchase", "billing_setup", "subscription_setup"],
                layouts: [sa.VERTICAL],
                maxCards: i,
                vendors: o,
                colors: ["black", "white"],
                secondaryColors: E(
                  {},
                  va.secondaryColors,
                  ((e = {}), (e.default = "black"), e)
                ),
                logoColors:
                  ((t = {}), (t.white = "black"), (t.default = "white"), t),
                labelText: function (n) {
                  return nt.CARD;
                },
                Logo: function (n) {
                  return jo(gi, { logoColor: n.logoColor });
                },
                Label: function (n) {
                  return jo(Ho, null, null, n.logo, null);
                },
                WalletLabel: Fa,
                showWalletMenu: function (n) {
                  return !n.instrument.branded;
                },
              });
            })()),
            (n[nt.IDEAL] = null),
            (n[nt.SEPA] = null),
            (n[nt.BANCONTACT] = null),
            (n[nt.GIROPAY] = null),
            (n[nt.SOFORT] = null),
            (n[nt.EPS] = null),
            (n[nt.MYBANK] = null),
            (n[nt.P24] = null),
            (n[nt.PAYU] = null),
            (n[nt.VERKKOPANKKI] =
              void 0 !==
                Object({
                  paypal: Object({ eligible: !0, vaultable: !0 }),
                  paylater: Object({
                    eligible: !1,
                    products: Object({
                      payIn4: Object({ eligible: !1, variant: null }),
                      paylater: Object({ eligible: !1, variant: null }),
                    }),
                  }),
                  card: Object({
                    eligible: !0,
                    branded: !0,
                    installments: !1,
                    vendors: Object({
                      visa: Object({ eligible: !0, vaultable: !0 }),
                      mastercard: Object({ eligible: !0, vaultable: !0 }),
                      amex: Object({ eligible: !0, vaultable: !0 }),
                      discover: Object({ eligible: !1, vaultable: !0 }),
                      hiper: Object({ eligible: !1, vaultable: !1 }),
                      elo: Object({ eligible: !1, vaultable: !0 }),
                      jcb: Object({ eligible: !1, vaultable: !0 }),
                    }),
                  }),
                  venmo: Object({ eligible: !1 }),
                  itau: Object({ eligible: !1 }),
                  credit: Object({ eligible: !1 }),
                  applepay: Object({ eligible: !1 }),
                  sepa: Object({ eligible: !1 }),
                  ideal: Object({ eligible: !1 }),
                  bancontact: Object({ eligible: !1 }),
                  giropay: Object({ eligible: !1 }),
                  eps: Object({ eligible: !1 }),
                  sofort: Object({ eligible: !1 }),
                  mybank: Object({ eligible: !1 }),
                  p24: Object({ eligible: !1 }),
                  zimpler: Object({ eligible: !1 }),
                  wechatpay: Object({ eligible: !1 }),
                  payu: Object({ eligible: !1 }),
                  blik: Object({ eligible: !1 }),
                  trustly: Object({ eligible: !1 }),
                  oxxo: Object({ eligible: !1 }),
                  maxima: Object({ eligible: !1 }),
                  boleto: Object({ eligible: !1 }),
                  mercadopago: Object({ eligible: !1 }),
                }).verkkopankki &&
              Object({
                paypal: Object({ eligible: !0, vaultable: !0 }),
                paylater: Object({
                  eligible: !1,
                  products: Object({
                    payIn4: Object({ eligible: !1, variant: null }),
                    paylater: Object({ eligible: !1, variant: null }),
                  }),
                }),
                card: Object({
                  eligible: !0,
                  branded: !0,
                  installments: !1,
                  vendors: Object({
                    visa: Object({ eligible: !0, vaultable: !0 }),
                    mastercard: Object({ eligible: !0, vaultable: !0 }),
                    amex: Object({ eligible: !0, vaultable: !0 }),
                    discover: Object({ eligible: !1, vaultable: !0 }),
                    hiper: Object({ eligible: !1, vaultable: !1 }),
                    elo: Object({ eligible: !1, vaultable: !0 }),
                    jcb: Object({ eligible: !1, vaultable: !0 }),
                  }),
                }),
                venmo: Object({ eligible: !1 }),
                itau: Object({ eligible: !1 }),
                credit: Object({ eligible: !1 }),
                applepay: Object({ eligible: !1 }),
                sepa: Object({ eligible: !1 }),
                ideal: Object({ eligible: !1 }),
                bancontact: Object({ eligible: !1 }),
                giropay: Object({ eligible: !1 }),
                eps: Object({ eligible: !1 }),
                sofort: Object({ eligible: !1 }),
                mybank: Object({ eligible: !1 }),
                p24: Object({ eligible: !1 }),
                zimpler: Object({ eligible: !1 }),
                wechatpay: Object({ eligible: !1 }),
                payu: Object({ eligible: !1 }),
                blik: Object({ eligible: !1 }),
                trustly: Object({ eligible: !1 }),
                oxxo: Object({ eligible: !1 }),
                maxima: Object({ eligible: !1 }),
                boleto: Object({ eligible: !1 }),
                mercadopago: Object({ eligible: !1 }),
              }).verkkopankki.eligible
                ? E({}, va, {
                    automatic: !1,
                    layouts: [sa.VERTICAL],
                    shippingChange: !1,
                    Logo: function (n) {
                      return (function (n) {
                        var e = n.logoColor,
                          t = void 0 === e ? "default" : e,
                          r = c(n, Ui),
                          o = Qo("verkkopankki", Wi, t),
                          i = o.primary,
                          a = o.secondary,
                          u = o.tertiary,
                          l = o.quaternary,
                          s = o.quinary,
                          d = o.senary;
                        return jo(
                          Xo,
                          E({}, r, {
                            name: "verkkopankki",
                            logoColor: t,
                            render: function () {
                              return jo(
                                "svg",
                                {
                                  width: "83px",
                                  height: "32px",
                                  viewBox: "0 0 83 32",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                                jo(
                                  "defs",
                                  null,
                                  jo("path", {
                                    d:
                                      "M6.75,0.0879407407 C3.0375,0.0879407407 0,2.96794074 0,6.48794074 L0,6.48794074 L0,24.5027556 C0,28.0227556 3.0375,30.9027556 6.75,30.9027556 L6.75,30.9027556 L25.75025,30.9027556 C29.4625,30.9027556 32.5,28.0227556 32.5,24.5027556 L32.5,24.5027556 L32.5,6.48794074 C32.5,2.96794074 29.4625,0.0879407407 25.75025,0.0879407407 L25.75025,0.0879407407 L6.75,0.0879407407 Z",
                                    id: "path-1",
                                  }),
                                  jo(
                                    "linearGradient",
                                    {
                                      x1: "80.3415915%",
                                      y1: "2.75555705%",
                                      x2: "19.6584085%",
                                      y2: "97.2445831%",
                                      id: "linearGradient-3",
                                    },
                                    jo("stop", {
                                      "stop-color": i,
                                      offset: "0%",
                                    }),
                                    jo("stop", {
                                      "stop-color": a,
                                      offset: "100%",
                                    })
                                  ),
                                  jo("path", {
                                    d:
                                      "M6.6155,0.206459259 C3.04575,0.206459259 0.125,2.97576296 0.125,6.36041481 L0.125,6.36041481 L0.125,23.6821333 C0.125,27.0670222 3.04575,29.8360889 6.6155,29.8360889 L6.6155,29.8360889 L24.8845,29.8360889 C28.45425,29.8360889 31.375,27.0670222 31.375,23.6821333 L31.375,23.6821333 L31.375,6.36041481 C31.375,2.97576296 28.45425,0.206459259 24.8845,0.206459259 L24.8845,0.206459259 L6.6155,0.206459259 Z",
                                    id: "path-4",
                                  }),
                                  jo(
                                    "linearGradient",
                                    {
                                      x1: "6.10096128%",
                                      y1: "89.4646408%",
                                      x2: "93.8990386%",
                                      y2: "10.5354941%",
                                      id: "linearGradient-6",
                                    },
                                    jo("stop", {
                                      "stop-color": i,
                                      offset: "0%",
                                    }),
                                    jo("stop", {
                                      "stop-color": a,
                                      offset: "100%",
                                    })
                                  ),
                                  jo("polygon", {
                                    id: "path-7",
                                    points:
                                      "6.5 0.206459259 6.5 10.8330667 0.125 10.8330667 0.125 19.129363 6.5 19.129363 6.5 29.8360889 15.25 29.8360889 15.25 19.129363 31.375 19.129363 31.375 10.8330667 15.25 10.8330667 15.25 0.206459259",
                                  }),
                                  jo(
                                    "linearGradient",
                                    {
                                      x1: "6.26612168%",
                                      y1: "82.243184%",
                                      x2: "78.1338463%",
                                      y2: "17.635184%",
                                      id: "linearGradient-9",
                                    },
                                    jo("stop", {
                                      "stop-color": u,
                                      offset: "0%",
                                    }),
                                    jo("stop", {
                                      "stop-color": l,
                                      offset: "100%",
                                    })
                                  ),
                                  jo("polygon", {
                                    id: "path-10",
                                    points:
                                      "0.106675 0.228266667 3.17249309 0.228266667 3.17249309 6.24822519 0.106675 6.24822519",
                                  }),
                                  jo("polygon", {
                                    id: "path-12",
                                    points:
                                      "0.2434 0.228266667 3.30921809 0.228266667 3.30921809 6.24822519 0.2434 6.24822519",
                                  }),
                                  jo("polygon", {
                                    id: "path-14",
                                    points:
                                      "0.0454 0.228266667 3.11102683 0.228266667 3.11102683 6.24822519 0.0454 6.24822519",
                                  }),
                                  jo("polygon", {
                                    id: "path-16",
                                    points:
                                      "0.181875 0.228266667 3.24775183 0.228266667 3.24775183 6.24822519 0.181875 6.24822519",
                                  }),
                                  jo("polygon", {
                                    id: "path-18",
                                    points:
                                      "0.1455 0.211057778 0.90525 0.211057778 0.90525 1.20969481 0.1455 1.20969481",
                                  }),
                                  jo("polygon", {
                                    id: "path-20",
                                    points:
                                      "0 31.762963 82.90525 31.762963 82.90525 0.228266667 0 0.228266667",
                                  })
                                ),
                                jo(
                                  "g",
                                  {
                                    stroke: "none",
                                    "stroke-width": "1",
                                    fill: "none",
                                    "fill-rule": "evenodd",
                                  },
                                  jo(
                                    "g",
                                    {
                                      transform:
                                        "translate(-219.000000, -536.000000)",
                                    },
                                    jo(
                                      "g",
                                      {
                                        transform:
                                          "translate(219.000000, 536.000000)",
                                      },
                                      jo(
                                        "g",
                                        {
                                          transform:
                                            "translate(0.000000, 0.482844)",
                                        },
                                        jo(
                                          "mask",
                                          { fill: i },
                                          jo("use", { href: "#path-1" })
                                        ),
                                        jo("path", {
                                          d:
                                            "M6.75,0.0879407407 C3.0375,0.0879407407 0,2.96794074 0,6.48794074 L0,6.48794074 L0,24.5027556 C0,28.0227556 3.0375,30.9027556 6.75,30.9027556 L6.75,30.9027556 L25.75025,30.9027556 C29.4625,30.9027556 32.5,28.0227556 32.5,24.5027556 L32.5,24.5027556 L32.5,6.48794074 C32.5,2.96794074 29.4625,0.0879407407 25.75025,0.0879407407 L25.75025,0.0879407407 L6.75,0.0879407407 Z",
                                          fill: "url(#linearGradient-3)",
                                          mask: "url(#mask-2)",
                                        })
                                      ),
                                      jo(
                                        "g",
                                        {
                                          transform:
                                            "translate(0.500000, 0.956919)",
                                        },
                                        jo(
                                          "mask",
                                          { fill: i },
                                          jo("use", { href: "#path-4" })
                                        ),
                                        jo("path", {
                                          d:
                                            "M6.6155,0.206459259 C3.04575,0.206459259 0.125,2.97576296 0.125,6.36041481 L0.125,6.36041481 L0.125,23.6821333 C0.125,27.0670222 3.04575,29.8360889 6.6155,29.8360889 L6.6155,29.8360889 L24.8845,29.8360889 C28.45425,29.8360889 31.375,27.0670222 31.375,23.6821333 L31.375,23.6821333 L31.375,6.36041481 C31.375,2.97576296 28.45425,0.206459259 24.8845,0.206459259 L24.8845,0.206459259 L6.6155,0.206459259 Z",
                                          fill: "url(#linearGradient-6)",
                                          mask: "url(#mask-5)",
                                        })
                                      ),
                                      jo(
                                        "g",
                                        {
                                          transform:
                                            "translate(0.500000, 0.956919)",
                                        },
                                        jo(
                                          "mask",
                                          { id: "mask-8", fill: i },
                                          jo("use", { href: "#path-7" })
                                        ),
                                        jo("polygon", {
                                          id: "Fill-7",
                                          fill: "url(#linearGradient-9)",
                                          mask: "url(#mask-8)",
                                          points:
                                            "6.5 0.206459259 6.5 10.8330667 0.125 10.8330667 0.125 19.129363 6.5 19.129363 6.5 29.8360889 15.25 29.8360889 15.25 19.129363 31.375 19.129363 31.375 10.8330667 15.25 10.8330667 15.25 0.206459259",
                                        })
                                      ),
                                      jo(
                                        "g",
                                        {
                                          transform:
                                            "translate(0.000000, 0.008770)",
                                        },
                                        jo("path", {
                                          d:
                                            "M41.86625,0.448142222 L41.4055,0.448142222 C41.353,0.448142222 41.30625,0.480142222 41.2895,0.527312593 L39.593,5.31949037 L37.89675,0.527312593 C37.88,0.480142222 37.83325,0.448142222 37.7805,0.448142222 L37.312,0.448142222 C37.2725,0.448142222 37.2355,0.466157037 37.2125,0.496734815 C37.1895,0.527075556 37.1835,0.566186667 37.196,0.601505185 L39.18525,6.16926815 C39.202,6.21643852 39.24875,6.24820148 39.30125,6.24820148 L39.877,6.24820148 C39.9295,6.24820148 39.97625,6.21643852 39.993,6.16926815 L41.98225,0.601505185 C41.995,0.566186667 41.9887546,0.527075556 41.96575,0.496734815 C41.94275,0.466157037 41.90575,0.448142222 41.86625,0.448142222",
                                          fill: s,
                                        }),
                                        jo("path", {
                                          d:
                                            "M42.770925,3.87662222 C42.776925,3.51656296 42.812175,3.23591111 42.875675,3.04106667 C42.940925,2.84148148 43.045425,2.7058963 43.194675,2.62648889 C43.352175,2.54305185 43.589175,2.50085926 43.899175,2.50085926 C44.163925,2.50085926 44.371675,2.52764444 44.515675,2.58026667 C44.645425,2.62767407 44.736675,2.70684444 44.795175,2.82228148 C44.858175,2.94625185 44.890175,3.12853333 44.890175,3.3632 C44.890175,3.5634963 44.845925,3.69884444 44.758675,3.76616296 C44.663925,3.83964444 44.498675,3.87662222 44.267925,3.87662222 L42.770925,3.87662222 Z M45.209425,4.16983704 C45.430425,3.99845926 45.542675,3.72681481 45.542675,3.3632 C45.542675,3.01238519 45.483675,2.72865185 45.366925,2.52005926 C45.245425,2.30364444 45.058675,2.14767407 44.811175,2.05641481 C44.578175,1.97084444 44.271425,1.92722963 43.899175,1.92722963 C43.455925,1.92722963 43.099425,1.99312593 42.840175,2.12278519 C42.569425,2.25742222 42.372675,2.48995556 42.255175,2.81374815 C42.143675,3.12047407 42.087175,3.55306667 42.087175,4.09896296 C42.087175,4.64035556 42.140925,5.07105185 42.246925,5.37896296 C42.358175,5.70417778 42.548675,5.94168889 42.813175,6.08462222 C43.068925,6.22305185 43.426425,6.29345185 43.876175,6.29345185 C44.339425,6.29345185 44.832675,6.26500741 45.341925,6.2093037 C45.403675,6.20266667 45.450425,6.15312593 45.450425,6.09386667 L45.450425,5.82838519 C45.450425,5.76438519 45.395425,5.71223704 45.327925,5.71223704 L43.975925,5.71223704 C43.640425,5.71223704 43.385175,5.66767407 43.217675,5.57925926 C43.057675,5.49463704 42.949425,5.36260741 42.886925,5.17511111 C42.826425,4.99377778 42.790425,4.74014815 42.780175,4.41991111 L44.298675,4.41991111 C44.689925,4.41991111 44.996175,4.33576296 45.209425,4.16983704 L45.209425,4.16983704 Z",
                                          fill: s,
                                        }),
                                        jo("path", {
                                          d:
                                            "M48.8798,1.97755259 C48.7618,1.94413037 48.6158,1.92730074 48.4458,1.92730074 C48.1323,1.92730074 47.8433,2.00196741 47.58705,2.14893037 C47.40355,2.25441185 47.2248,2.39118222 47.0538,2.55734519 L46.97705,2.0716563 C46.96805,2.01476741 46.9163,1.97257481 46.8558,1.97257481 L46.52555,1.97257481 C46.4578,1.97257481 46.40305,2.02472296 46.40305,2.08896 L46.40305,6.1318637 C46.40305,6.19610074 46.4578,6.24824889 46.52555,6.24824889 L46.97105,6.24824889 C47.0388,6.24824889 47.09355,6.19610074 47.09355,6.1318637 L47.09355,3.20730074 C47.32605,2.99610074 47.5388,2.84178963 47.7263,2.74934519 C47.9178,2.65476741 48.1468,2.60712296 48.40705,2.60712296 C48.5178,2.60712296 48.65755,2.62181926 48.82255,2.65073778 C48.85805,2.65713778 48.8953,2.64789333 48.9233,2.62584889 C48.95105,2.60380444 48.96755,2.57109333 48.96755,2.53648593 L48.96755,2.08896 C48.96755,2.03752296 48.9318,1.99224889 48.8798,1.97755259",
                                          fill: s,
                                        }),
                                        jo(
                                          "g",
                                          {
                                            transform:
                                              "translate(49.500000, 0.000000)",
                                          },
                                          jo(
                                            "mask",
                                            { id: "mask-11", fill: i },
                                            jo("use", { href: "#path-10" })
                                          ),
                                          jo("path", {
                                            d:
                                              "M1.301675,3.9731437 L3.039925,2.16715852 C3.072675,2.13302519 3.080925,2.08395852 3.061425,2.04200296 C3.041925,2.00004741 2.997925,1.97278815 2.949425,1.97278815 L2.373425,1.97278815 C2.338925,1.97278815 2.306425,1.98629926 2.283175,2.01047704 L0.797175,3.54979556 L0.797175,0.344343704 C0.797175,0.280343704 0.742425,0.228195556 0.674675,0.228195556 L0.229175,0.228195556 C0.161425,0.228195556 0.106675,0.280343704 0.106675,0.344343704 L0.106675,6.13184 C0.106675,6.19607704 0.161425,6.24822519 0.229175,6.24822519 L0.674675,6.24822519 C0.742425,6.24822519 0.797175,6.19607704 0.797175,6.13184 L0.797175,4.41948444 L2.370925,6.20650667 C2.394175,6.23281778 2.428675,6.24822519 2.464925,6.24822519 L3.049925,6.24822519 C3.097675,6.24822519 3.140675,6.22191407 3.160925,6.18090667 C3.181175,6.14037333 3.174425,6.09178074 3.143925,6.05741037 L1.301675,3.9731437 Z",
                                            fill: s,
                                            mask: "url(#mask-11)",
                                          })
                                        ),
                                        jo(
                                          "g",
                                          {
                                            transform:
                                              "translate(53.250000, 0.000000)",
                                          },
                                          jo(
                                            "mask",
                                            { id: "mask-13", fill: i },
                                            jo("use", { href: "#path-12" })
                                          ),
                                          jo("path", {
                                            d:
                                              "M1.4384,3.9731437 L3.1764,2.16715852 C3.20915,2.13302519 3.2174,2.08395852 3.1979,2.04200296 C3.1784,2.00004741 3.1344,1.97278815 3.0859,1.97278815 L2.51015,1.97278815 C2.47565,1.97278815 2.44315,1.98629926 2.4199,2.01047704 L0.9339,3.54979556 L0.9339,0.344343704 C0.9339,0.280343704 0.87915,0.228195556 0.8114,0.228195556 L0.3659,0.228195556 C0.29815,0.228195556 0.2434,0.280343704 0.2434,0.344343704 L0.2434,6.13184 C0.2434,6.19607704 0.29815,6.24822519 0.3659,6.24822519 L0.8114,6.24822519 C0.87915,6.24822519 0.9339,6.19607704 0.9339,6.13184 L0.9339,4.41948444 L2.5074,6.20650667 C2.53065,6.23281778 2.56515,6.24822519 2.6014,6.24822519 L3.18665,6.24822519 C3.2344,6.24822519 3.2774,6.22191407 3.29765,6.18090667 C3.3179,6.14037333 3.31115,6.09178074 3.28065,6.05741037 L1.4384,3.9731437 Z",
                                            fill: s,
                                            mask: "url(#mask-13)",
                                          })
                                        ),
                                        jo(
                                          "g",
                                          {
                                            transform:
                                              "translate(74.500000, 0.000000)",
                                          },
                                          jo(
                                            "mask",
                                            { id: "mask-15", fill: i },
                                            jo("use", { href: "#path-14" })
                                          ),
                                          jo("path", {
                                            d:
                                              "M1.2404,3.9731437 L2.9784,2.16715852 C3.01115,2.13302519 3.0194,2.08395852 2.9999,2.04200296 C2.9804,2.00004741 2.9364,1.97278815 2.8879,1.97278815 L2.3119,1.97278815 C2.2774,1.97278815 2.2449,1.98629926 2.22165,2.01047704 L0.7359,3.54955852 L0.7359,0.344343704 C0.7359,0.280343704 0.68115,0.228195556 0.6134,0.228195556 L0.1679,0.228195556 C0.10015,0.228195556 0.0454,0.280343704 0.0454,0.344343704 L0.0454,6.13184 C0.0454,6.19607704 0.10015,6.24822519 0.1679,6.24822519 L0.6134,6.24822519 C0.68115,6.24822519 0.7359,6.19607704 0.7359,6.13184 L0.7359,4.41995852 L2.3094,6.20650667 C2.33265,6.23281778 2.36715,6.24822519 2.4034,6.24822519 L2.9884,6.24822519 C3.03615,6.24822519 3.07915,6.22191407 3.09965,6.18090667 C3.11965,6.14037333 3.1129,6.09178074 3.0824,6.05741037 L1.2404,3.9731437 Z",
                                            fill: s,
                                            mask: "url(#mask-15)",
                                          })
                                        ),
                                        jo(
                                          "g",
                                          {
                                            transform:
                                              "translate(78.250000, 0.000000)",
                                          },
                                          jo(
                                            "mask",
                                            { id: "mask-17", fill: i },
                                            jo("use", { href: "#path-16" })
                                          ),
                                          jo("path", {
                                            d:
                                              "M1.377125,3.9731437 L3.115125,2.16715852 C3.147875,2.13302519 3.156125,2.08395852 3.136625,2.04200296 C3.117125,2.00004741 3.073125,1.97278815 3.024625,1.97278815 L2.448625,1.97278815 C2.414125,1.97278815 2.381625,1.98629926 2.358375,2.01047704 L0.872375,3.54979556 L0.872375,0.344343704 C0.872375,0.280343704 0.817625,0.228195556 0.749875,0.228195556 L0.304375,0.228195556 C0.236625,0.228195556 0.181875,0.280343704 0.181875,0.344343704 L0.181875,6.13184 C0.181875,6.19607704 0.236625,6.24822519 0.304375,6.24822519 L0.749875,6.24822519 C0.817625,6.24822519 0.872375,6.19607704 0.872375,6.13184 L0.872375,4.41948444 L2.446125,6.20650667 C2.469375,6.23281778 2.503875,6.24822519 2.540125,6.24822519 L3.125125,6.24822519 C3.172875,6.24822519 3.215875,6.22191407 3.236375,6.18090667 C3.256375,6.14037333 3.249625,6.09178074 3.219125,6.05741037 L1.377125,3.9731437 Z",
                                            fill: s,
                                            mask: "url(#mask-17)",
                                          })
                                        ),
                                        jo("path", {
                                          d:
                                            "M58.732575,5.68936296 C58.439825,5.68936296 58.209325,5.65238519 58.047825,5.57937778 C57.899325,5.51253333 57.782075,5.37078519 57.699325,5.15863704 C57.610075,4.9298963 57.564825,4.576 57.564825,4.10642963 C57.564825,3.63733333 57.610075,3.28201481 57.699325,3.05042963 C57.781825,2.83685926 57.898825,2.69534815 58.046575,2.63063704 C58.209075,2.55952593 58.439825,2.52373333 58.732575,2.52373333 C59.020325,2.52373333 59.250075,2.55952593 59.415075,2.63063704 C59.565825,2.69582222 59.685075,2.83757037 59.769575,3.05161481 C59.861575,3.28248889 59.907825,3.63733333 59.907825,4.10642963 C59.907825,4.57576296 59.861575,4.92942222 59.769825,5.15768889 C59.685075,5.37007407 59.565075,5.51205926 59.414325,5.57914074 C59.249825,5.65238519 59.020575,5.68936296 58.732575,5.68936296 M59.771825,2.10512593 C59.508075,1.98731852 59.158325,1.92734815 58.732575,1.92734815 C58.306325,1.92734815 57.958325,1.9858963 57.697825,2.1010963 C57.424575,2.22222222 57.215075,2.44835556 57.075325,2.77333333 C56.942075,3.08432593 56.874325,3.5328 56.874325,4.10642963 C56.874325,4.6701037 56.942075,5.11478519 57.075325,5.42814815 C57.214825,5.7554963 57.425075,5.98542222 57.700075,6.11128889 C57.964575,6.23217778 58.311575,6.29357037 58.732575,6.29357037 C59.158575,6.29357037 59.508575,6.23217778 59.772825,6.11128889 C60.048325,5.98518519 60.258325,5.75668148 60.397325,5.43217778 C60.530575,5.12118519 60.598575,4.67508148 60.598575,4.10642963 C60.598575,3.53848889 60.530575,3.09238519 60.397325,2.78068148 C60.258075,2.45617778 60.047825,2.22885926 59.771825,2.10512593",
                                          fill: s,
                                        }),
                                        jo("path", {
                                          d:
                                            "M64.20645,4.09908148 C64.20645,5.1693037 63.87745,5.68936296 63.19995,5.68936296 C62.8272,5.68936296 62.43195,5.5808 62.0247,5.36651852 L62.0247,2.85771852 C62.2282,2.75958519 62.4192,2.67922963 62.59295,2.61902222 C62.7757,2.5554963 62.97995,2.52373333 63.19995,2.52373333 C63.4832,2.52373333 63.7147,2.64557037 63.90745,2.89682963 C64.10595,3.15591111 64.20645,3.56077037 64.20645,4.09908148 M63.2997,1.92734815 C63.0547,1.92734815 62.78745,1.98115556 62.5057,2.08734815 C62.30445,2.16296296 62.12945,2.24284444 61.9832,2.32533333 L61.92195,2.06364444 C61.9097,2.01031111 61.8597,1.97262222 61.80245,1.97262222 L61.4567,1.97262222 C61.38895,1.97262222 61.3342,2.02477037 61.3342,2.08900741 L61.3342,7.9296 C61.3342,7.99383704 61.38895,8.04574815 61.4567,8.04574815 L61.9022,8.04574815 C61.96995,8.04574815 62.0247,7.99383704 62.0247,7.9296 L62.0247,5.96077037 C62.19345,6.04562963 62.3712,6.11721481 62.55545,6.17386667 C62.8122,6.25327407 63.0627,6.29357037 63.2997,6.29357037 C64.35945,6.29357037 64.8972,5.5552 64.8972,4.09908148 C64.8972,3.49985185 64.77145,2.98808889 64.52345,2.57754074 C64.2632,2.14613333 63.85145,1.92734815 63.2997,1.92734815",
                                          fill: s,
                                        }),
                                        jo("path", {
                                          d:
                                            "M67.38835,5.62915556 C66.91085,5.75265185 66.61485,5.74459259 66.3756,5.56325926 C66.2516,5.46915556 66.19135,5.31531852 66.19135,5.0925037 L66.19135,4.90311111 C66.19135,4.69973333 66.25035,4.54234074 66.37235,4.42216296 C66.4921,4.30364444 66.6886,4.23917037 66.95685,4.23016296 L68.2581,4.18204444 L68.2581,5.35348148 L67.9846,5.45042963 C67.8086,5.51253333 67.6081,5.5725037 67.38835,5.62915556 M67.4206,1.90435556 C66.95785,1.90435556 66.46885,1.93801481 65.96735,2.00414815 C65.90685,2.01220741 65.86185,2.06127407 65.86185,2.11911111 L65.86185,2.38459259 C65.86185,2.44882963 65.9166,2.50097778 65.98435,2.50097778 L67.26685,2.50097778 C67.6521,2.50097778 67.9166,2.56379259 68.05385,2.68847407 C68.18935,2.8114963 68.2581,3.00562963 68.2581,3.26447407 L68.2581,3.70962963 L66.8831,3.70962963 C66.4486,3.70962963 66.1066,3.81700741 65.86635,4.02915556 C65.62385,4.2432 65.50085,4.53475556 65.50085,4.89528889 L65.50085,5.16859259 C65.50085,5.51324444 65.61035,5.7901037 65.8256,5.99087407 C66.04035,6.19164444 66.3211,6.29357037 66.66035,6.29357037 C66.8921,6.29357037 67.14185,6.2546963 67.40285,6.17813333 C67.65735,6.10394074 67.88985,6.02168889 68.0931,5.93422222 C68.1851,5.89463704 68.2541,5.86405926 68.30635,5.83988148 L68.3676,6.15324444 C68.37835,6.208 68.42885,6.24805926 68.48785,6.24805926 L68.82585,6.24805926 C68.8936,6.24805926 68.94835,6.19614815 68.94835,6.13191111 L68.94835,3.24195556 C68.94835,2.79585185 68.8216,2.45712593 68.5716,2.23573333 C68.32385,2.016 67.93635,1.90435556 67.4206,1.90435556",
                                          fill: s,
                                        }),
                                        jo("path", {
                                          d:
                                            "M72.05925,1.90440296 C71.77425,1.90440296 71.48575,1.95702519 71.20125,2.0601363 C70.9805,2.14049185 70.7715,2.2393363 70.5785,2.35477333 L70.50425,2.06179556 C70.49125,2.00941037 70.44175,1.97266963 70.38525,1.97266963 L70.055,1.97266963 C69.9875,1.97266963 69.9325,2.02481778 69.9325,2.08881778 L69.9325,6.13195852 C69.9325,6.19595852 69.9875,6.24810667 70.055,6.24810667 L70.5005,6.24810667 C70.568,6.24810667 70.623,6.19595852 70.623,6.13195852 L70.623,2.91536593 C70.86175,2.78926222 71.07525,2.69515852 71.2585,2.63471407 C71.4525,2.57118815 71.6805,2.53895111 71.9365,2.53895111 C72.18875,2.53895111 72.3835,2.61646222 72.53225,2.77646222 C72.68475,2.94049185 72.75875,3.14481778 72.75875,3.40105481 L72.75875,6.13195852 C72.75875,6.19595852 72.81375,6.24810667 72.88125,6.24810667 L73.3265,6.24810667 C73.39425,6.24810667 73.44925,6.19595852 73.44925,6.13195852 L73.44925,3.3555437 C73.44925,2.9561363 73.33025,2.61243259 73.096,2.33462519 C72.855,2.04923259 72.506,1.90440296 72.05925,1.90440296",
                                          fill: s,
                                        }),
                                        jo("path", {
                                          d:
                                            "M82.751875,1.97269333 L82.306375,1.97269333 C82.238625,1.97269333 82.183875,2.02484148 82.183875,2.08884148 L82.183875,6.13198222 C82.183875,6.19598222 82.238625,6.24813037 82.306375,6.24813037 L82.751875,6.24813037 C82.819625,6.24813037 82.874375,6.19598222 82.874375,6.13198222 L82.874375,2.08884148 C82.874375,2.02484148 82.819625,1.97269333 82.751875,1.97269333",
                                          fill: s,
                                        }),
                                        jo(
                                          "g",
                                          {
                                            transform:
                                              "translate(82.000000, 0.237037)",
                                          },
                                          jo(
                                            "mask",
                                            { id: "mask-19", fill: i },
                                            jo("use", { href: "#path-18" })
                                          ),
                                          jo("path", {
                                            d:
                                              "M0.68275,0.211057778 L0.38325,0.211057778 C0.239,0.211057778 0.1455,0.301368889 0.1455,0.441220741 L0.1455,0.979531852 C0.1455,1.0617837 0.1805,1.11393185 0.21,1.14308741 C0.2405,1.17342815 0.29525,1.20969481 0.38325,1.20969481 L0.68275,1.20969481 C0.78525,1.20969481 0.90525,1.14925037 0.90525,0.979531852 L0.90525,0.441220741 C0.90525,0.271502222 0.78525,0.211057778 0.68275,0.211057778 L0.68275,0.211057778 Z",
                                            fill: s,
                                            mask: "url(#mask-19)",
                                          })
                                        ),
                                        jo("polygon", {
                                          fill: d,
                                          points:
                                            "54.410575 25.6368119 53.503075 25.6368119 51.980825 27.2138193 51.980825 23.8924563 51.290325 23.8924563 51.290325 29.9122489 51.980825 29.9122489 51.980825 28.0835081 53.591325 29.9122489 54.496075 29.9122489 52.485575 27.6371674",
                                        }),
                                        jo("path", {
                                          d:
                                            "M38.2935,12.7641126 L40.91225,12.7261867 L40.91225,12.171283 L38.2935,12.133357 L38.2935,10.654957 C38.2935,10.4489719 38.344,10.2948978 38.4435,10.1967644 C38.5435,10.098157 38.68275,10.0505126 38.86975,10.0505126 L41.235,10.0505126 L41.235,9.48233481 L41.1185,9.47688296 C40.2725,9.43658667 39.47975,9.41596444 38.76225,9.41596444 C38.44075,9.41596444 38.16525,9.51149037 37.9435,9.69969778 C37.7175,9.89146074 37.603,10.1948681 37.603,10.6016237 L37.603,15.2160237 L38.2935,15.2160237 L38.2935,12.7641126 Z",
                                          fill: d,
                                        }),
                                        jo("path", {
                                          d:
                                            "M42.21085,10.3483733 C42.24135,10.3787141 42.2961,10.4145067 42.3836,10.4145067 L42.68335,10.4145067 C42.78585,10.4145067 42.9056,10.3540622 42.9056,10.1845807 L42.9056,9.64603259 C42.9056,9.47631407 42.78585,9.41586963 42.68335,9.41586963 L42.3836,9.41586963 C42.23935,9.41586963 42.1461,9.50618074 42.1461,9.64603259 L42.1461,10.1845807 C42.1461,10.2665956 42.1811,10.3189807 42.2106,10.3481363 L42.21085,10.3483733 Z",
                                          fill: d,
                                        }),
                                        jo(
                                          "mask",
                                          { id: "mask-21", fill: i },
                                          jo("use", { href: "#path-20" })
                                        ),
                                        jo("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "42.1845 15.2158815 42.875 15.2158815 42.875 10.9404444 42.1845 10.9404444",
                                        }),
                                        jo("path", {
                                          d:
                                            "M47.4611,15.2159763 L47.4611,12.3236504 C47.4611,11.9240059 47.3421,11.5805393 47.10785,11.3027319 C46.86635,11.0171022 46.5176,10.8722726 46.07085,10.8722726 C45.78635,10.8722726 45.4976,10.9246578 45.21335,11.0280059 C44.9921,11.1083615 44.7831,11.2072059 44.59035,11.322643 L44.49335,10.9405393 L43.94435,10.9405393 L43.94435,15.2159763 L44.6346,15.2159763 L44.6346,11.8829985 C44.8736,11.7568948 45.08735,11.6627911 45.2701,11.6028207 C45.46435,11.5388207 45.6926,11.5068207 45.9481,11.5068207 C46.20035,11.5068207 46.39535,11.5843319 46.5441,11.7443319 C46.6966,11.9083615 46.7706,12.1126874 46.7706,12.3689244 L46.7706,15.2159763 L47.4611,15.2159763 Z",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("path", {
                                          d:
                                            "M51.33365,15.2159763 L52.02415,15.2159763 L52.02415,12.3236504 C52.02415,11.9240059 51.90515,11.5805393 51.67115,11.3027319 C51.42965,11.0171022 51.0809,10.8722726 50.63415,10.8722726 C50.34915,10.8722726 50.06065,10.9246578 49.7764,11.0280059 C49.5554,11.1083615 49.3464,11.2072059 49.1534,11.322643 L49.05665,10.9405393 L48.50715,10.9405393 L48.50715,15.2159763 L49.1979,15.2159763 L49.1979,11.8829985 C49.4369,11.7568948 49.65065,11.6627911 49.83365,11.6028207 C50.02715,11.5388207 50.2554,11.5068207 50.5114,11.5068207 C50.76365,11.5068207 50.9584,11.5843319 51.10715,11.7443319 C51.25965,11.9083615 51.33365,12.1126874 51.33365,12.3689244 L51.33365,15.2159763 Z",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "53.07025 15.2158815 53.761 15.2158815 53.761 10.9404444 53.07025 10.9404444",
                                        }),
                                        jo("path", {
                                          d:
                                            "M53.2697,10.4145778 L53.5692,10.4145778 C53.6717,10.4145778 53.7917,10.3541333 53.7917,10.1844148 L53.7917,9.6461037 C53.7917,9.47638519 53.6717,9.41594074 53.5692,9.41594074 L53.2697,9.41594074 C53.12545,9.41594074 53.03195,9.50625185 53.03195,9.6461037 L53.03195,10.1844148 C53.03195,10.2666667 53.06695,10.3190519 53.0967,10.3482074 C53.1272,10.3785481 53.1817,10.4145778 53.2697,10.4145778",
                                          id: "Fill-52",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("path", {
                                          d:
                                            "M55.15935,13.1527822 C55.3896,13.3137304 55.7216,13.3952711 56.1461,13.3952711 L56.6991,13.3952711 C56.9451,13.3952711 57.12785,13.4412563 57.24285,13.5318044 C57.3526,13.6180859 57.40585,13.7439526 57.40585,13.9165156 L57.40585,14.1137304 C57.40585,14.3467378 57.34735,14.4984415 57.23135,14.5638637 C57.0951,14.6409007 56.87735,14.6800119 56.5836,14.6800119 L54.82535,14.6800119 L54.82535,15.1588267 L54.9261,15.1761304 C55.0501,15.1972267 55.28985,15.2164267 55.65985,15.2346785 C56.0211,15.2522193 56.3111,15.2614637 56.52235,15.2614637 C56.99485,15.2614637 57.36685,15.1813452 57.6286,15.0234785 C57.90835,14.8549452 58.05035,14.5565156 58.05035,14.1362489 L58.05035,13.8785896 C58.05035,13.5313304 57.93135,13.2580267 57.6966,13.0662637 C57.46735,12.8790044 57.15235,12.7837156 56.76035,12.7837156 L56.19985,12.7837156 C55.9266,12.7837156 55.7246,12.7474489 55.59885,12.6751526 C55.49285,12.6147081 55.43935,12.4812563 55.43935,12.2781156 L55.43935,12.1034193 C55.43935,11.8753896 55.4986,11.717997 55.6161,11.6357452 C55.74485,11.54496 55.95435,11.4989748 56.2381,11.4989748 L57.8966,11.4989748 L57.8966,11.0111526 L57.7936,10.9952711 C57.6266,10.9696711 57.3876,10.9473896 57.08285,10.9293748 C56.77935,10.9118341 56.5161,10.9028267 56.29985,10.9028267 C55.78935,10.9028267 55.42085,10.9971674 55.17335,11.1910637 C54.92235,11.3880415 54.79485,11.6950044 54.79485,12.1034193 L54.79485,12.3082193 C54.79485,12.6998044 54.9176,12.9840119 55.15935,13.1527822",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("path", {
                                          d:
                                            "M61.668375,12.3615763 L61.668375,15.2159763 L62.358875,15.2159763 L62.358875,12.3236504 C62.358875,11.9138133 62.238125,11.5672652 62.000375,11.2939615 C61.756875,11.0140207 61.409875,10.8722726 60.968875,10.8722726 C60.683875,10.8722726 60.394125,10.9246578 60.107625,11.0277689 C59.902625,11.1017244 59.709875,11.1910874 59.532625,11.2944356 L59.532625,9.1961837 L58.841875,9.1961837 L58.841875,15.2159763 L59.532625,15.2159763 L59.532625,11.8829985 C59.771625,11.7571319 59.985125,11.6630281 60.167875,11.6028207 C60.361625,11.5388207 60.590125,11.5068207 60.846125,11.5068207 C61.098375,11.5068207 61.293125,11.5843319 61.441625,11.7440948 C61.594125,11.9085985 61.668375,12.1105541 61.668375,12.3615763",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("path", {
                                          d:
                                            "M41.2896,19.6944356 C41.2896,20.3666726 41.2346,20.874643 41.1261,21.2031763 C41.0241,21.5127467 40.8696,21.7208652 40.66735,21.821843 C40.45385,21.9285096 40.13585,21.9825541 39.72235,21.9825541 C39.2936,21.9825541 38.96785,21.9285096 38.7541,21.821843 C38.5526,21.7211022 38.40235,21.515117 38.3076,21.2093393 C38.20635,20.8829393 38.1551,20.3730726 38.1551,19.6944356 C38.1551,19.0020504 38.2151,18.4784356 38.33335,18.1380504 C38.44535,17.815443 38.6046,17.6018726 38.80685,17.5032652 C39.0211,17.3982578 39.3291,17.3453985 39.72235,17.3453985 C40.13585,17.3453985 40.4541,17.3982578 40.6686,17.5032652 C40.86985,17.6013985 41.02385,17.8116504 41.12585,18.1280948 C41.23435,18.4646874 41.2896,18.9916207 41.2896,19.6944356 M41.01035,16.9474133 C40.6946,16.7957096 40.26135,16.7184356 39.72235,16.7184356 C39.19885,16.7184356 38.77185,16.7957096 38.45385,16.9471763 C38.1241,17.1045689 37.87285,17.4070281 37.70635,17.8460207 C37.5461,18.2684207 37.46485,18.8904059 37.46485,19.6944356 C37.46485,20.4982281 37.54485,21.1149985 37.7026,21.527917 C37.86685,21.9579022 38.11535,22.2501689 38.44085,22.3971319 C38.75285,22.5379319 39.18385,22.609517 39.72235,22.609517 C40.2606,22.609517 40.6916,22.5379319 41.00385,22.3971319 C41.3296,22.2499319 41.57785,21.9576652 41.7421,21.527917 C41.89985,21.1149985 41.97985,20.4982281 41.97985,19.6944356 C41.97985,18.8863763 41.90135,18.263443 41.74635,17.8429393 C41.5851,17.406317 41.3376,17.1048059 41.01035,16.9474133",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("path", {
                                          d:
                                            "M45.212575,18.2203733 C44.927325,18.2203733 44.638825,18.2729956 44.354825,18.3761067 C44.133575,18.4564622 43.924825,18.5553067 43.731825,18.6705067 L43.634825,18.28864 L43.085575,18.28864 L43.085575,22.564077 L43.776325,22.564077 L43.776325,19.2313363 C44.015325,19.1049956 44.228825,19.0108919 44.411825,18.9509215 C44.605575,18.8871585 44.833825,18.8549215 45.089825,18.8549215 C45.342325,18.8549215 45.536825,18.9324326 45.685575,19.0924326 C45.838075,19.2566993 45.912325,19.4610252 45.912325,19.7170252 L45.912325,22.564077 L46.602825,22.564077 L46.602825,19.6717511 C46.602825,19.2723437 46.483825,18.928877 46.249075,18.6508326 C46.007825,18.365203 45.658825,18.2203733 45.212575,18.2203733",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("path", {
                                          d:
                                            "M50.09245,16.7641126 L49.79295,16.7641126 C49.64845,16.7641126 49.55495,16.8544237 49.55495,16.9942756 L49.55495,17.5325867 C49.55495,17.6143644 49.5897,17.6665126 49.61895,17.6959052 L49.61995,17.6968533 C49.65045,17.726957 49.70545,17.7627496 49.79295,17.7627496 L50.09245,17.7627496 C50.19495,17.7627496 50.31495,17.7023052 50.31495,17.5325867 L50.31495,16.9942756 C50.31495,16.824557 50.19495,16.7641126 50.09245,16.7641126",
                                          id: "Fill-57",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "49.59325 22.5640296 50.284 22.5640296 50.284 18.2885926 49.59325 18.2885926",
                                        }),
                                        jo("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "47.71725 22.5640296 48.408 22.5640296 48.408 16.544 47.71725 16.544",
                                        }),
                                        jo("path", {
                                          d:
                                            "M53.753575,18.2203733 C53.468325,18.2203733 53.179825,18.2729956 52.895825,18.3761067 C52.674575,18.4564622 52.465825,18.5553067 52.272825,18.6705067 L52.175825,18.28864 L51.626575,18.28864 L51.626575,22.564077 L52.317325,22.564077 L52.317325,19.2313363 C52.556325,19.1052326 52.769575,19.0111289 52.952575,18.9509215 C53.146325,18.8871585 53.374575,18.8549215 53.630825,18.8549215 C53.883075,18.8549215 54.077575,18.9324326 54.226325,19.0924326 C54.378825,19.2566993 54.453075,19.4610252 54.453075,19.7170252 L54.453075,22.564077 L55.143575,22.564077 L55.143575,19.6717511 C55.143575,19.2723437 55.024575,18.928877 54.790075,18.6508326 C54.548825,18.365203 54.200075,18.2203733 53.753575,18.2203733",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("path", {
                                          d:
                                            "M58.651775,19.6791704 C58.651775,19.8792296 58.607525,20.0148148 58.520275,20.0821333 C58.425525,20.1556148 58.260275,20.1925926 58.029275,20.1925926 L56.532025,20.1925926 C56.538275,19.8330074 56.573525,19.5523556 56.637025,19.357037 C56.702275,19.1572148 56.806525,19.0218667 56.956025,18.9426963 C57.114025,18.8590222 57.351025,18.8168296 57.660775,18.8168296 C57.925525,18.8168296 58.133025,18.8436148 58.276775,18.896237 C58.406775,18.9438815 58.498025,19.0230519 58.556275,19.1382519 C58.619775,19.2629333 58.651775,19.4452148 58.651775,19.6791704 M59.103275,22.5252741 L59.211525,22.5134222 L59.211525,22.0282074 L57.737525,22.0282074 C57.401775,22.0282074 57.146525,21.9836444 56.979025,21.8952296 C56.818775,21.8106074 56.710775,21.6785778 56.648275,21.4913185 C56.588025,21.3095111 56.552275,21.0558815 56.541775,20.7361185 L58.060275,20.7361185 C58.451025,20.7361185 58.757525,20.6519704 58.970775,20.4858074 C59.191775,20.3146667 59.303775,20.0430222 59.303775,19.6791704 C59.303775,19.3285926 59.244775,19.0446222 59.128275,18.8360296 C59.007025,18.6196148 58.820275,18.4636444 58.572775,18.3723852 C58.339025,18.2868148 58.032275,18.2432 57.660775,18.2432 C57.217775,18.2432 56.861275,18.3090963 56.601275,18.4387556 C56.330525,18.5741037 56.133775,18.8064 56.016775,19.1294815 C55.905275,19.4359704 55.848525,19.868563 55.848525,20.4149333 C55.848525,20.9563259 55.902275,21.3867852 56.008275,21.6949333 C56.119775,22.0203852 56.310525,22.2578963 56.574525,22.4008296 C56.830275,22.5392593 57.188025,22.6094222 57.637525,22.6094222 C58.101025,22.6094222 58.594025,22.5809778 59.103275,22.5252741",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("path", {
                                          d:
                                            "M38.2935,26.6307793 L38.2935,24.7392237 L39.707,24.7392237 C40.294,24.7392237 40.5675,25.0253274 40.5675,25.6392533 C40.5675,25.94432 40.489,26.1901274 40.334,26.3700385 C40.183,26.545683 39.993,26.6307793 39.753,26.6307793 L38.2935,26.6307793 Z M38.2935,27.2195793 L39.7685,27.2195793 C40.061,27.2195793 40.29575,27.3034904 40.4865,27.4755793 C40.6755,27.646483 40.76725,27.87712 40.76725,28.1805274 C40.76725,28.6060089 40.68275,28.8994607 40.51625,29.0528237 C40.349,29.2071348 40.09725,29.285357 39.7685,29.285357 L38.2935,29.285357 L38.2935,27.2195793 Z M40.63425,26.8919941 C40.76925,26.8064237 40.88875,26.6893274 40.99175,26.5416533 C41.158,26.3034311 41.2425,26.0023941 41.2425,25.6470756 C41.2425,24.6429867 40.71425,24.1124978 39.71475,24.1124978 L37.603,24.1124978 L37.603,29.91232 L39.77625,29.91232 C40.313,29.91232 40.7285,29.7857422 41.0115,29.5361422 C41.29725,29.2844089 41.44225,28.8513422 41.44225,28.2487941 C41.44225,27.8166756 41.327,27.4762904 41.0995,27.2380681 C40.95575,27.0873126 40.80025,26.9714015 40.63425,26.8919941 L40.63425,26.8919941 Z",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("path", {
                                          d:
                                            "M44.049475,29.2935111 C43.567225,29.4170074 43.274725,29.4084741 43.036725,29.2276148 C42.912725,29.1337481 42.852725,28.9801481 42.852725,28.7568593 L42.852725,28.5674667 C42.852725,28.3636148 42.911725,28.2064593 43.033475,28.0862815 C43.152975,27.968 43.349475,27.9035259 43.617975,27.8945185 L44.919225,27.8464 L44.919225,29.017837 L44.645225,29.1145481 C44.471975,29.1759407 44.271725,29.2361481 44.049475,29.2935111 M44.081725,25.5687111 C43.617225,25.5687111 43.128225,25.6023704 42.628475,25.6685037 L42.522975,25.6827259 L42.522975,26.1653333 L43.927975,26.1653333 C44.313225,26.1653333 44.577975,26.2281481 44.714975,26.3528296 C44.850475,26.4758519 44.919225,26.6699852 44.919225,26.9288296 L44.919225,27.3739852 L43.544225,27.3739852 C43.109475,27.3739852 42.767475,27.4816 42.527475,27.6935111 C42.284975,27.9073185 42.161975,28.1988741 42.161975,28.5596444 L42.161975,28.8329481 C42.161975,29.1771259 42.271225,29.4537481 42.486475,29.6549926 C42.701475,29.856 42.982475,29.9579259 43.321475,29.9579259 C43.552225,29.9579259 43.801975,29.9190519 44.063975,29.8424889 C44.318475,29.7682963 44.550975,29.6860444 44.754475,29.5985778 C44.846475,29.5589926 44.915225,29.5281778 44.967475,29.504237 L45.047225,29.9121778 L45.609475,29.9121778 L45.609475,26.9063111 C45.609475,26.4602074 45.482725,26.1214815 45.232725,25.8998519 C44.984975,25.6801185 44.597725,25.5687111 44.081725,25.5687111",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("path", {
                                          d:
                                            "M48.907625,25.5687585 C48.622625,25.5687585 48.334125,25.6213807 48.049875,25.7244919 C47.828875,25.8046104 47.620125,25.9034548 47.426875,26.0191289 L47.329875,25.6370252 L46.780625,25.6370252 L46.780625,29.9122252 L47.471375,29.9122252 L47.471375,26.5797215 C47.709125,26.4538548 47.922875,26.3597511 48.107125,26.2990696 C48.300125,26.2355437 48.528125,26.2033067 48.784875,26.2033067 C49.037125,26.2033067 49.231875,26.2808178 49.380625,26.4408178 C49.533125,26.6046104 49.607125,26.8089363 49.607125,27.0654104 L49.607125,29.9122252 L50.297625,29.9122252 L50.297625,27.0198993 C50.297625,26.6204919 50.178625,26.2772622 49.944375,25.9989807 C49.703375,25.7135881 49.354375,25.5687585 48.907625,25.5687585",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "55.21725 29.9121778 55.908 29.9121778 55.908 25.6369778 55.21725 25.6369778",
                                        }),
                                        jo("path", {
                                          d:
                                            "M55.716225,24.1124978 L55.416725,24.1124978 C55.272475,24.1124978 55.178975,24.2028089 55.178975,24.3424237 L55.178975,24.8809719 C55.178975,24.9632237 55.213975,25.0153719 55.243475,25.0445274 C55.273975,25.0751052 55.328475,25.1108978 55.416725,25.1108978 L55.716225,25.1108978 C55.818725,25.1108978 55.938725,25.0506904 55.938725,24.8809719 L55.938725,24.3424237 C55.938725,24.1727052 55.818725,24.1124978 55.716225,24.1124978",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("path", {
                                          d:
                                            "M59.166675,25.5687585 C58.881425,25.5687585 58.592925,25.6213807 58.308925,25.7244919 C58.087675,25.8048474 57.878675,25.9036919 57.685675,26.0191289 L57.588675,25.6370252 L57.039675,25.6370252 L57.039675,29.9122252 L57.730425,29.9122252 L57.730425,26.5797215 C57.967675,26.4540919 58.181175,26.3599881 58.365675,26.2990696 C58.559175,26.2355437 58.787175,26.2033067 59.043925,26.2033067 C59.296175,26.2033067 59.490675,26.2808178 59.639425,26.4408178 C59.791925,26.6046104 59.865925,26.8089363 59.865925,27.0654104 L59.865925,29.9122252 L60.556425,29.9122252 L60.556425,27.0198993 C60.556425,26.6204919 60.437425,26.2767881 60.203175,25.9989807 C59.962175,25.7135881 59.613175,25.5687585 59.166675,25.5687585",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        }),
                                        jo("path", {
                                          d:
                                            "M62.08805,30.3800889 C62.08805,30.1537185 62.16505,29.9894519 62.32305,29.8778074 C62.49205,29.7581037 62.6943,29.7000296 62.94105,29.7000296 L64.07005,29.7000296 C64.4113,29.7000296 64.65005,29.7550222 64.7798,29.8640593 C64.90705,29.9707259 64.9688,30.1274074 64.9688,30.342163 L64.9688,30.5166222 C64.9688,30.7420444 64.89005,30.9063111 64.7278,31.0179556 C64.55505,31.1367111 64.3028,31.1969185 63.97805,31.1969185 L62.98705,31.1969185 C62.6868,31.1969185 62.4558,31.1454815 62.30055,31.0433185 C62.1573,30.9489778 62.08805,30.7941926 62.08805,30.5697185 L62.08805,30.3800889 Z M64.54655,27.1184593 C64.54655,27.6655407 64.2463,27.9201185 63.60155,27.9201185 L63.13305,27.9201185 C62.5773,27.9201185 62.31855,27.6463407 62.31855,27.0577778 C62.31855,26.7550815 62.3953,26.5367704 62.5463,26.4087704 C62.7018,26.2772148 62.93555,26.2106074 63.24055,26.2106074 L63.6783,26.2106074 C64.27055,26.2106074 64.54655,26.4990815 64.54655,27.1184593 L64.54655,27.1184593 Z M65.62855,25.6293926 L63.3248,25.6293926 C61.9478,25.6293926 61.6588,26.3978667 61.6588,27.0426074 C61.6588,27.3180444 61.72155,27.5721481 61.8453,27.7980444 C61.9318,27.9552 62.05855,28.0865185 62.22355,28.1912889 C61.8153,28.3617185 61.72005,28.6679704 61.72005,28.9161481 C61.72005,29.0702222 61.76205,29.2079407 61.8443,29.3257481 C61.88505,29.3838222 61.9348,29.4359704 61.9928,29.4814815 C61.85355,29.561363 61.73455,29.6623407 61.6378,29.7825185 C61.4938,29.9614815 61.42055,30.1831111 61.42055,30.4407704 L61.42055,30.6379852 C61.42055,31.0037333 61.56005,31.2874667 61.8348,31.481837 C62.0983,31.6683852 62.45505,31.762963 62.89505,31.762963 L64.01605,31.762963 C64.52405,31.762963 64.92255,31.6532148 65.20005,31.4368 C65.4843,31.2146963 65.62855,30.8977778 65.62855,30.4938667 L65.62855,30.3118222 C65.62855,29.9185778 65.50005,29.6168296 65.24705,29.4153481 C64.99955,29.2183704 64.6218,29.1185778 64.1238,29.1185778 L62.6953,29.1185778 C62.59755,29.1185778 62.51655,29.0958222 62.4473,29.049363 C62.41205,29.0251852 62.36455,28.9796741 62.36455,28.8632889 C62.36455,28.6926222 62.4413,28.6312296 62.49905,28.5997037 C62.61005,28.5394963 62.78455,28.5089185 63.01805,28.5089185 L63.64755,28.5089185 C64.1883,28.5089185 64.58855,28.3761778 64.8368,28.1137778 C65.08205,27.8554074 65.2063,27.5358815 65.2063,27.1642074 C65.2063,26.918163 65.1723,26.7121778 65.1053,26.5521778 C65.03605,26.3872 64.95555,26.2665481 64.85905,26.1833481 C64.8503,26.1755259 64.8413,26.1677037 64.83205,26.1601185 L65.62855,26.1124741 L65.62855,25.6293926 Z",
                                          fill: d,
                                          mask: "url(#mask-21)",
                                        })
                                      )
                                    )
                                  )
                                )
                              );
                            },
                          })
                        );
                      })({ logoColor: n.logoColor, optional: n.optional });
                    },
                  })
                : null),
            (n[nt.BLIK] = null),
            (n[nt.TRUSTLY] = null),
            (n[nt.ZIMPLER] = null),
            (n[nt.WECHATPAY] = null),
            (n[nt.OXXO] = null),
            (n[nt.BOLETO] = null),
            (n[nt.MAXIMA] = null),
            (n[nt.MERCADOPAGO] = null),
            n
          );
        });
      }
      function Ia(n, e) {
        var t = e.layout,
          r = e.platform,
          o = e.fundingSource,
          i = e.fundingEligibility,
          a = e.components,
          u = e.onShippingChange,
          l = e.flow,
          c = e.wallet,
          s = e.applePaySupport,
          d = e.supportsPopups,
          f = e.supportedNativeBrowser,
          p = e.experiment;
        if (!i[n] || !i[n].eligible) return !1;
        var h = Ma()[n];
        if (!h) return !1;
        if (!h.enabled) return !1;
        if (!h.automatic && n !== o) return !1;
        if (
          h.eligible &&
          !h.eligible({
            components: a,
            fundingSource: o,
            fundingEligibility: i,
            layout: t,
            wallet: c,
          })
        )
          return !1;
        if (
          t &&
          h.layouts &&
          -1 === h.layouts.indexOf(t) &&
          (!o || t !== sa.HORIZONTAL)
        )
          return !1;
        if (h.platforms && -1 === h.platforms.indexOf(r)) return !1;
        if (h.requires) {
          if (!0 === h.requires.popup && !1 === d) return !1;
          if (!0 === h.requires.applepay && !1 === s) return !1;
          if (!0 === h.requires.native && !1 === f) return !1;
        }
        return !(
          (!1 === h.shippingChange && u) ||
          (h.flows && l && -1 === h.flows.indexOf(l)) ||
          (n === nt.VENMO && p && !1 === p.enableVenmo)
        );
      }
      t(4), t(5), t(6);
      var Da =
          (((Ca = {})[sa.HORIZONTAL] = ca.SMALL),
          (Ca[sa.VERTICAL] = ca.MEDIUM),
          Ca),
        ja =
          (((Ea = {})[sa.HORIZONTAL] = ca.HUGE),
          (Ea[sa.VERTICAL] = ca.HUGE),
          Ea),
        Ha =
          (((La = {})[ca.TINY] = {
            defaultWidth: 75,
            defaultHeight: 25,
            minWidth: 75,
            maxWidth: 150,
            minHeight: 25,
            maxHeight: 30,
          }),
          (La[ca.SMALL] = {
            defaultWidth: 150,
            defaultHeight: 25,
            minWidth: 150,
            maxWidth: 200,
            minHeight: 25,
            maxHeight: 55,
          }),
          (La[ca.MEDIUM] = {
            defaultWidth: 250,
            defaultHeight: 35,
            minWidth: 200,
            maxWidth: 300,
            minHeight: 35,
            maxHeight: 55,
          }),
          (La[ca.LARGE] = {
            defaultWidth: 350,
            defaultHeight: 45,
            minWidth: 300,
            maxWidth: 500,
            minHeight: 30,
            maxHeight: 55,
          }),
          (La[ca.HUGE] = {
            defaultWidth: 500,
            defaultHeight: 55,
            minWidth: 500,
            maxWidth: 750,
            minHeight: 40,
            maxHeight: 55,
          }),
          La),
        Ba = {
          LOCALE: { country: Ye.US, lang: Je.EN },
          COMMIT: !0,
          VAULT: !1,
          INTENT: "capture",
          ENV: Qe.PRODUCTION,
          PLATFORM: et.DESKTOP,
        };
      function Ua(n, e) {
        if (!e) throw new Error("Expected props.style to be set");
        var t = (n = n || {}).fundingSource,
          r = Ma(),
          o = r[t || nt.PAYPAL] || r[nt.PAYPAL];
        if (!o)
          throw new Error("Expected " + (t || nt.PAYPAL) + " to be eligible");
        var i = e.label,
          a = e.layout,
          u = void 0 === a ? (t ? sa.HORIZONTAL : o.layouts[0]) : a,
          l = e.shape,
          c = void 0 === l ? o.shapes[0] : l,
          s = e.tagline,
          d = void 0 === s ? u === sa.HORIZONTAL && !t : s,
          f = e.height,
          p = e.period,
          h = e.color ? e.color : o.colors[0];
        if (-1 === Fn(sa).indexOf(u)) throw new Error("Invalid layout: " + u);
        if (i && -1 === Fn(la).indexOf(i))
          throw new Error("Invalid label: " + i);
        if (h && -1 === o.colors.indexOf(h))
          throw new Error(
            "Unexpected style.color for " +
              (t || nt.PAYPAL) +
              " button: " +
              h +
              ", expected " +
              o.colors.join(", ")
          );
        if (c && -1 === o.shapes.indexOf(c))
          throw new Error(
            "Unexpected style.shape for " +
              (t || nt.PAYPAL) +
              " button: " +
              c +
              ", expected " +
              o.shapes.join(", ")
          );
        if (void 0 !== f) {
          if ("number" != typeof f)
            throw new TypeError(
              "Expected style.height to be a number, got: " + f
            );
          var m = [Ha[ca.SMALL].minHeight, Ha[ca.HUGE].maxHeight],
            g = m[0],
            y = m[1];
          if (f < g || f > y)
            throw new Error(
              "Expected style.height to be between " +
                g +
                "px and " +
                y +
                "px - got " +
                f +
                "px"
            );
        }
        if (u === sa.VERTICAL && d)
          throw new Error(
            "style.tagline is not allowed for " + sa.VERTICAL + " layout"
          );
        return {
          label: i,
          layout: u,
          color: h,
          shape: c,
          tagline: d,
          height: f,
          period: p,
        };
      }
      var Wa = Fn(Ye),
        Za = Fn(nt),
        za = Fn(Qe),
        qa = Fn(et);
      function Ga(n) {
        var e,
          t = n.uid,
          r = n.props,
          o = n.tag,
          i = n.context,
          a = n.frame,
          u = n.prerenderFrame,
          l = n.doc,
          c = n.container,
          s = n.event;
        if (a && u) {
          if (c && "button" === c.tagName.toLowerCase())
            throw new Error(
              "Do not render the PayPal button into a button element"
            );
          a.classList.add("component-frame"),
            u.classList.add("prerender-frame"),
            a.classList.add("invisible"),
            u.classList.add("visible"),
            s.on("zoid-rendered", function () {
              u.classList.remove("visible"),
                u.classList.add("invisible"),
                a.classList.remove("invisible"),
                a.classList.add("visible"),
                setTimeout(function () {
                  ke(u);
                }, 1e3);
            });
          var d = r.style,
            f = r.nonce,
            p = d.label,
            h = d.layout,
            m = d.height,
            g = Da[h],
            y = ja[h];
          if (m) {
            var w = Fn(ca).filter(function (n) {
              return Ha[n] && m && Ha[n].minHeight <= m && Ha[n].maxHeight >= m;
            });
            w.sort(function (n, e) {
              return Ha[n].defaultWidth - Ha[e].defaultWidth;
            }),
              (g = w[0]);
          }
          var v = jo(
            "div",
            E(
              {
                id: t,
                class:
                  o +
                  " " +
                  o +
                  "-context-" +
                  i +
                  " " +
                  o +
                  "-label-" +
                  p +
                  " " +
                  o +
                  "-layout-" +
                  h,
              },
              ((e = {}),
              (e["data-paypal-smart-button-version"] = "5.0.235"),
              e),
              {
                onRender: function (n) {
                  s.on("zoid-resize", function (e) {
                    var t = e.width,
                      r = e.height;
                    "number" == typeof t && (n.style.width = Ke(t)),
                      "number" == typeof r && (n.style.height = Ke(r));
                  });
                },
              }
            ),
            jo(
              "style",
              { nonce: f },
              "\n                    #" +
                t +
                " {\n                        position: relative;\n                        display: inline-block;\n                        width: 100%;\n                        min-height: " +
                Ha[g].minHeight +
                "px;\n                        min-width: " +
                Ha[g].minWidth +
                "px;\n                        max-width: " +
                Ha[y].maxWidth +
                "px;\n                        font-size: 0;\n                    }\n\n                    #" +
                t +
                " > iframe {\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                    }\n\n                    #" +
                t +
                " > iframe.component-frame {\n                        z-index: 100;\n                    }\n\n                    #" +
                t +
                " > iframe.prerender-frame {\n                        transition: opacity .2s linear;\n                        z-index: 200;\n                    }\n\n                    #" +
                t +
                " > iframe.visible {\n                        opacity: 1;\n                    }\n\n                    #" +
                t +
                " > iframe.invisible {\n                        opacity: 0;\n                        pointer-events: none;\n                    }\n\n                    #" +
                t +
                " > .smart-menu {\n                        position: absolute;\n                        z-index: 300;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                    }\n                "
            ),
            jo("node", { el: a }),
            jo("node", { el: u }),
            jo("div", { id: "smart-menu", class: "smart-menu" }),
            jo("div", { id: "installments-modal", class: "installments-modal" })
          ).render(Uo({ doc: l }));
          return (
            s.on("zoid-rendered", function () {
              setTimeout(function () {
                v.style.transition = "all 0.2s ease-in-out";
              }, 1e3);
            }),
            v
          );
        }
      }
      var Ka =
          "\n    html, body {\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        overflow: hidden;\n        text-align: left;\n    }\n\n    body {\n        display: inline-block;\n        vertical-align: top;\n        border-collapse: collapse;\n    }\n\n    * {\n        touch-callout: none;\n        user-select: none;\n        cursor: default;\n        box-sizing: border-box;\n    }\n\n    span {\n        display: inline-block;\n    }\n\n    ." +
          da.HIDDEN +
          " {\n        position: absolute !important;\n        visibility: hidden !important;\n    }\n\n    ." +
          da.HIDDEN +
          " * {\n        visibility: hidden !important;\n    }\n",
        Va =
          "\n\n    ." +
          da.CONTAINER +
          ' {\n        display: block;\n        white-space: nowrap;\n        margin: 0;\n        background: 0;\n        border: 0;\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        text-transform: none;\n        font-weight: 500;\n        font-smoothing: antialiased;\n        z-index: 0;\n        font-size: 0;\n        width: 100%;\n        box-sizing: border-box;\n    }\n\n    .' +
          da.BUTTON +
          " {\n        border: 1px solid transparent;\n        border-radius: 0 3px 3px 0;\n        position: relative;\n        width: 100%;\n        box-sizing: border-box;\n        border: none;\n        vertical-align: top;\n        cursor: pointer;\n        overflow: hidden;\n    }\n\n    ." +
          da.BUTTON +
          " * {\n        cursor: pointer;\n    }\n\n    ." +
          da.CONTAINER +
          "." +
          da.ENV +
          "-" +
          Qe.TEST +
          " ." +
          da.TEXT +
          " {\n        font-family: Arial !important;\n        background: rgba(0, 0, 0, 0.5) !important;\n        color: transparent  !important;\n        text-shadow: none  !important;\n    }\n\n    ." +
          da.CARD +
          " {\n        cursor: pointer;\n    }\n\n    .paypal-logo {\n        padding: 0;\n        display: inline-block;\n        background: none;\n        border: none;\n        width: auto;\n    }\n\n    ." +
          da.TEXT +
          ", ." +
          da.SPACE +
          " {\n        display: inline-block;\n        white-space: pre;\n        vertical-align: top;\n    }\n\n    ." +
          da.BUTTON +
          " > ." +
          da.BUTTON_LABEL +
          " {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n\n    ." +
          da.BUTTON +
          " > ." +
          da.BUTTON_LABEL +
          " * {\n        vertical-align: middle;\n        height: 100%;\n        text-align: left;\n    }\n    \n    ." +
          da.TAGLINE +
          " {\n        max-width: 100%;\n        font-size: initial;\n        font-weight: normal;\n        display: block;\n        text-align: center;\n        width: auto;\n    }\n\n    ." +
          da.BUTTON +
          " ." +
          da.SPINNER +
          " {\n        position: absolute;\n        height: 40px;\n        width: 40px;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        box-sizing: border-box;\n        border: 3px solid rgba(0, 0, 0, .2);\n        border-top-color: rgba(33, 128, 192, 0.8);\n        border-radius: 100%;\n        animation: " +
          da.SPINNER +
          "-rotation .7s infinite linear;\n    }\n\n    @keyframes " +
          da.SPINNER +
          "-rotation {\n        from {\n            transform: translateX(-50%) translateY(-50%) rotate(0deg);\n        }\n        to {\n            transform: translateX(-50%) translateY(-50%) rotate(359deg);\n        }\n    }\n\n    ." +
          da.BUTTON +
          " ." +
          da.SPINNER +
          " {\n        display: none !important;\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.LOADING +
          " * {\n        display: none !important;\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.LOADING +
          " ." +
          da.SPINNER +
          " {\n        display: block !important;\n    }\n\n    ." +
          da.CONTAINER +
          " ." +
          da.VAULT_HEADER +
          " {\n        margin-top: 10px;\n    }\n",
        Ya =
          "\n\n\n    ." +
          da.BUTTON +
          "." +
          da.TEXT_COLOR +
          "-black {\n        color: #2C2E2F;\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.TEXT_COLOR +
          "-white {\n        color: #fff;\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.TEXT_COLOR +
          "-black ." +
          da.SPINNER +
          " {\n        border: 3px solid rgba(100, 100, 100, .2);\n        border-top-color: rgba(33, 128, 192, 0.8);\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.TEXT_COLOR +
          "-white ." +
          da.SPINNER +
          " {\n        border: 3px solid rgba(200, 200, 200, 0.2);\n        border-top-color: rgba(255, 255, 255, .85);\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-gold,\n    ." +
          da.BUTTON_ROW +
          "." +
          da.COLOR +
          "-gold .menu-button {\n        background: #ffc439;\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-gold:hover {\n        filter: brightness(0.95);\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-gold:focus {\n        outline: none;\n    }\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-gold:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-blue,\n    ." +
          da.BUTTON_ROW +
          "." +
          da.COLOR +
          "-blue .menu-button {\n        background: #0070ba;\n    }\n\n    ." +
          da.BUTTON +
          "[data-funding-source=" +
          nt.VENMO +
          "]." +
          da.COLOR +
          "-blue {\n        background: #008CFF;\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-blue:hover {\n        filter: brightness(0.95);\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-blue:focus {\n        outline: none;\n    }\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-blue:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #0000a6;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #009cde;\n        pointer-events: none;\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-silver,\n    ." +
          da.BUTTON_ROW +
          "." +
          da.COLOR +
          "-silver .menu-button {\n        background: #eee;\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-silver:hover {\n        filter: brightness(0.95);\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-silver:focus {\n        outline: none;\n    }\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-silver:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-darkblue,\n    ." +
          da.BUTTON_ROW +
          "." +
          da.COLOR +
          "-darkblue .menu-button {\n        background: #003087;\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-darkblue:hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-darkblue:focus {\n        outline: none;\n    }\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-darkblue:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-black,\n    ." +
          da.BUTTON_ROW +
          "." +
          da.COLOR +
          "-black .menu-button {\n        background: #2C2E2F;\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-black:hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-black:focus {\n        outline: none;\n    }\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-black:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-white,\n    ." +
          da.BUTTON_ROW +
          "." +
          da.COLOR +
          "-white .menu-button {\n        background: #fff;\n        border: 1px solid #555;\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-white:hover {\n        filter: brightness(0.95);\n    }\n\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-white:focus {\n        outline: none;\n    }\n    ." +
          da.BUTTON +
          "." +
          da.COLOR +
          "-white:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n\n    ." +
          da.BUTTON +
          " ." +
          da.CARD +
          " {\n        position: relative;\n    }\n\n    ." +
          da.BUTTON +
          " ." +
          da.CARD +
          "::after {\n        content: '';\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    ." +
          da.BUTTON +
          " ." +
          da.CARD +
          ":hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
          da.BUTTON +
          " ." +
          da.CARD +
          ":focus {\n        outline: none;\n    }\n\n    ." +
          da.BUTTON +
          " ." +
          da.CARD +
          ":focus::after {\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n";
      function Ja(n) {
        var e = n.nonce,
          t = (function (n) {
            return (
              "\n        " +
              Ka +
              "\n        " +
              Va +
              "\n        " +
              Ya +
              "\n        " +
              Na +
              "\n        " +
              (function (n) {
                var e = n.height;
                return Object.keys(Ha)
                  .map(function (n) {
                    var t,
                      r,
                      o = Ha[n],
                      i = e || o.defaultHeight,
                      a = Math.max(Math.round(2.2 * i * (100 / 60)), 300),
                      u = Mn((r = (t = Rn(i, 35) + 5) % 2) ? t - r + 2 : t, 12);
                    return (
                      "\n\n            @media only screen and (min-width: " +
                      o.minWidth +
                      "px) {\n\n                ." +
                      da.CONTAINER +
                      " {\n                    min-width: " +
                      o.minWidth +
                      "px;\n                    max-width: " +
                      o.maxWidth +
                      "px;\n                }\n\n                ." +
                      da.CONTAINER +
                      " ." +
                      da.BUTTON_ROW +
                      " ." +
                      da.TEXT +
                      ", ." +
                      da.CONTAINER +
                      " ." +
                      da.BUTTON_ROW +
                      " ." +
                      da.SPACE +
                      " {\n                    font-size: " +
                      Mn(Rn(i, 36), 10) +
                      "px;\n                    margin-top: -" +
                      Rn(Mn(Rn(i, 36), 10), 10) +
                      "px;\n                    line-height: " +
                      u +
                      "px;\n                }\n\n                ." +
                      da.CONTAINER +
                      " ." +
                      da.BUTTON_ROW +
                      " ." +
                      da.TEXT +
                      " * {\n                    margin-top: " +
                      Rn(Mn(Rn(i, 36), 10), 10) +
                      "px;\n                }\n\n                ." +
                      da.BUTTON_ROW +
                      " {\n                    height: " +
                      i +
                      "px;\n                    vertical-align: top;\n                    min-height: " +
                      (e || o.minHeight) +
                      "px;\n                    max-height: " +
                      (e || o.maxHeight) +
                      "px;\n                }\n\n                ." +
                      da.BUTTON_ROW +
                      "." +
                      da.LAYOUT +
                      "-" +
                      sa.VERTICAL +
                      " {\n                    margin-bottom: " +
                      Rn(i, 30) +
                      "px;\n                }\n\n                ." +
                      da.BUTTON_ROW +
                      "." +
                      da.LAYOUT +
                      "-" +
                      sa.VERTICAL +
                      ":last-of-type {\n                    margin-bottom: 0;\n                }\n\n                ." +
                      da.BUTTON +
                      " {\n                    display: inline-block;\n                    text-align: center;\n                    height: 100%;\n                }\n                \n                ." +
                      da.BUTTON +
                      " ." +
                      da.SPINNER +
                      " {\n                    height: " +
                      Rn(i, 50) +
                      "px;\n                    width: " +
                      Rn(i, 50) +
                      "px;\n                }\n\n                ." +
                      da.BUTTON +
                      " > ." +
                      da.BUTTON_LABEL +
                      " {\n                    margin: 0px 4vw;\n                    height: " +
                      u +
                      "px;\n                }\n\n                ." +
                      da.BUTTON +
                      "[data-funding-source=" +
                      nt.APPLEPAY +
                      "] ." +
                      da.BUTTON_LABEL +
                      " {\n                    height: " +
                      (Rn(i, 80) + 5) +
                      "px;\n                }\n\n                ." +
                      da.BUTTON +
                      "[data-funding-source=" +
                      nt.APPLEPAY +
                      "] ." +
                      da.BUTTON_LABEL +
                      " ." +
                      da.TEXT +
                      " {\n                    line-height: " +
                      (Rn(i, 80) + 5) +
                      "px;\n                }\n\n                ." +
                      da.BUTTON +
                      "[data-funding-source=" +
                      nt.EPS +
                      "] ." +
                      da.BUTTON_LABEL +
                      ",\n                ." +
                      da.BUTTON +
                      "[data-funding-source=" +
                      nt.MYBANK +
                      "] ." +
                      da.BUTTON_LABEL +
                      " {\n                    height: " +
                      (Rn(i, 50) + 5) +
                      "px;\n                }\n\n                ." +
                      da.BUTTON +
                      "[data-funding-source=" +
                      nt.EPS +
                      "] ." +
                      da.BUTTON_LABEL +
                      " ." +
                      da.TEXT +
                      ",\n                ." +
                      da.BUTTON +
                      "[data-funding-source=" +
                      nt.EPS +
                      "] ." +
                      da.BUTTON_LABEL +
                      " ." +
                      da.SPACE +
                      ",\n                ." +
                      da.BUTTON +
                      "[data-funding-source=" +
                      nt.MYBANK +
                      "] ." +
                      da.BUTTON_LABEL +
                      " ." +
                      da.TEXT +
                      ",\n                ." +
                      da.BUTTON +
                      "[data-funding-source=" +
                      nt.MYBANK +
                      "] ." +
                      da.BUTTON_LABEL +
                      " ." +
                      da.SPACE +
                      " {\n                    line-height: " +
                      (Rn(i, 50) + 5) +
                      "px;\n                }\n\n                ." +
                      da.BUTTON +
                      "." +
                      da.SHAPE +
                      "-rect {\n                    border-radius: 4px;\n                }\n\n                ." +
                      da.BUTTON +
                      "." +
                      da.SHAPE +
                      "-pill {\n                    border-radius: " +
                      Math.ceil(i / 2) +
                      "px;\n                }\n\n                ." +
                      da.BUTTON_ROW +
                      "." +
                      da.SHAPE +
                      "-rect .menu-button {\n                    border-top-right-radius: 4px;\n                    border-bottom-right-radius: 4px;\n                }\n\n                ." +
                      da.BUTTON_ROW +
                      "." +
                      da.SHAPE +
                      "-pill .menu-button {\n                    border-top-right-radius: " +
                      Math.ceil(i / 2) +
                      "px;\n                    border-bottom-right-radius: " +
                      Math.ceil(i / 2) +
                      "px;\n                }\n                \n                ." +
                      da.TAGLINE +
                      " ." +
                      da.TEXT +
                      " {\n                    height: " +
                      Rn(i, 50) +
                      "px;\n                    line-height: " +
                      Rn(i, 50) +
                      "px;\n                }\n\n                ." +
                      da.CARD +
                      " {\n                    display: inline-block;\n                    height: 100%;\n                }\n\n                ." +
                      da.BUTTON_ROW +
                      "." +
                      da.WALLET +
                      "." +
                      da.WALLET_MENU +
                      " ." +
                      da.BUTTON +
                      " {\n                    width: calc(100% - " +
                      (i + 2) +
                      "px);\n                    border-top-right-radius: 0px;\n                    border-bottom-right-radius: 0px;\n                }\n\n                .menu-button {\n                    height: " +
                      i +
                      "px;\n                    width: " +
                      i +
                      "px;\n                }\n            }\n\n            @media only screen and (min-width: " +
                      o.minWidth +
                      "px) and (max-width: " +
                      a +
                      "px) {\n\n                ." +
                      da.BUTTON_ROW +
                      "." +
                      da.LAYOUT +
                      "-" +
                      sa.HORIZONTAL +
                      "." +
                      da.NUMBER +
                      "-multiple." +
                      da.NUMBER +
                      "-0 {\n                    width: 100%;\n                    margin-right: 0;\n                }\n\n                ." +
                      da.BUTTON_ROW +
                      "." +
                      da.LAYOUT +
                      "-" +
                      sa.HORIZONTAL +
                      "." +
                      da.NUMBER +
                      "-multiple." +
                      da.NUMBER +
                      "-1 {\n                    display: none;\n                }\n\n                ." +
                      da.CONTAINER +
                      "." +
                      da.LAYOUT +
                      "-" +
                      sa.HORIZONTAL +
                      "." +
                      da.NUMBER +
                      "-multiple ." +
                      da.TAGLINE +
                      " {\n                    display: none;\n                }\n            }\n\n            @media only screen and (min-width: " +
                      Mn(o.minWidth, a) +
                      "px) {\n\n                ." +
                      da.BUTTON_ROW +
                      "." +
                      da.LAYOUT +
                      "-" +
                      sa.HORIZONTAL +
                      "." +
                      da.NUMBER +
                      "-multiple." +
                      da.NUMBER +
                      "-0 {\n                    display: inline-block;\n                    width: calc(50% - " +
                      Rn(i, 7) +
                      "px);\n                    margin-right: " +
                      2 * Rn(i, 7) +
                      "px;\n                }\n\n                ." +
                      da.BUTTON_ROW +
                      "." +
                      da.LAYOUT +
                      "-" +
                      sa.HORIZONTAL +
                      "." +
                      da.NUMBER +
                      "-multiple." +
                      da.NUMBER +
                      "-1 {\n                    display: inline-block;\n                    width: calc(50% - " +
                      Rn(i, 7) +
                      "px);\n                }\n\n                ." +
                      da.CONTAINER +
                      "." +
                      da.WALLET +
                      " ." +
                      da.BUTTON_ROW +
                      "." +
                      da.WALLET +
                      "." +
                      da.LAYOUT +
                      "-" +
                      sa.HORIZONTAL +
                      "." +
                      da.NUMBER +
                      "-multiple {\n                    width: calc(60% - " +
                      Rn(i, 7) +
                      "px);\n                }\n\n                ." +
                      da.CONTAINER +
                      "." +
                      da.WALLET +
                      " ." +
                      da.BUTTON_ROW +
                      ":not(." +
                      da.WALLET +
                      ")." +
                      da.LAYOUT +
                      "-" +
                      sa.HORIZONTAL +
                      "." +
                      da.NUMBER +
                      "-multiple {\n                    width: calc(40% - " +
                      Rn(i, 7) +
                      "px);\n                }\n\n                ." +
                      da.CONTAINER +
                      "." +
                      da.LAYOUT +
                      "-" +
                      sa.HORIZONTAL +
                      "." +
                      da.NUMBER +
                      "-multiple ." +
                      da.TAGLINE +
                      " {\n                    display: block;\n                }\n            }\n        "
                    );
                  })
                  .join("\n");
              })({ height: n.height }) +
              "\n    "
            );
          })({ height: n.style.height });
        return jo("style", { nonce: e, innerHTML: t });
      }
      function Xa() {
        return jo("div", { class: da.SPINNER });
      }
      var $a = ["color"];
      function Qa(n) {
        var e = void 0 === n ? {} : n,
          t = e.color,
          r = void 0 === t ? "#848484" : t,
          o = c(e, $a);
        return jo(
          Xo,
          E({}, o, {
            name: "chevron",
            render: function () {
              return jo(
                "svg",
                {
                  width: "256",
                  height: "158.18601989746094",
                  viewBox: "-1.935 0.221 256 158.186",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                jo("polygon", {
                  points:
                    "223.878 0.221 126.065 98.034 28.252 0.221 -1.935 30.407 126.065 158.407 254.065 30.407",
                  transform: "matrix(1, 0, 0, 1, 0, 0)",
                  fill: r,
                })
              );
            },
          })
        );
      }
      var nu = t(7),
        eu = t.n(nu);
      function tu(n) {
        var e,
          t = (void 0 === n ? {} : n).textColor,
          r = void 0 === t ? "black" : t;
        return jo(
          zo,
          { css: eu.a, "data-v-302115c5": "" },
          jo(
            "div",
            E({}, (((e = {})["data-menu"] = !0), e), {
              tabindex: "0",
              class: "menu-button",
              "data-v-302115c5": "",
            }),
            jo(Qa, { color: r, "data-v-302115c5": "" })
          )
        );
      }
      function ru(n) {
        var e,
          t = n.fundingSource,
          r = n.style,
          o = n.multiple,
          i = n.locale,
          a = n.env,
          u = n.fundingEligibility,
          l = n.i,
          c = n.nonce,
          s = n.flow,
          d = n.vault,
          f = n.userIDToken,
          p = n.personalization,
          h = n.onClick,
          m = void 0 === h ? Nn : h,
          g = n.content,
          y = n.tagline,
          w = n.commit,
          v = n.experiment,
          b = n.instrument,
          C = Ma()[t];
        if (!C) throw new Error("Can not find funding config for " + t);
        var L = C.colors,
          x = C.secondaryColors || {},
          O = r.color,
          P = void 0 === O ? L[0] : O,
          N = r.period,
          T = r.label;
        o &&
          l > 0 &&
          (P =
            x[P] && L.indexOf(-1 !== x[P])
              ? x[P]
              : -1 !== L.indexOf(x.default)
              ? x.default
              : L[0]);
        var S = C.logoColors,
          k = C.textColors,
          _ = S[P] || S.default || "default",
          A = k[P] || k.default || "default",
          F = C.Label,
          R = C.WalletLabel,
          M = C.Logo,
          I = C.showWalletMenu,
          D = function (n, e) {
            n.preventDefault(),
              n.stopPropagation(),
              m(n, E({ fundingSource: t }, e));
          },
          j = function (n, e) {
            (13 !== n.keyCode && 32 !== n.keyCode) || D(n, e);
          },
          H = r.layout,
          B = r.shape,
          U =
            "function" == typeof C.labelText
              ? C.labelText({ content: g })
              : C.labelText || t,
          W = jo(M, {
            label: T,
            locale: i,
            logoColor: _,
            fundingEligibility: u,
            onClick: D,
            onKeyPress: j,
            nonce: c,
            experiment: v,
            env: a,
          }),
          Z = jo(F, {
            i: l,
            logo: W,
            label: T,
            nonce: c,
            locale: i,
            logoColor: _,
            period: N,
            layout: H,
            multiple: o,
            fundingEligibility: u,
            onClick: D,
            onKeyPress: j,
            personalization: p,
            tagline: y,
            content: g,
          }),
          z = !1;
        R &&
          "purchase" === s &&
          (b || (f && (t === nt.PAYPAL || t === nt.VENMO))) &&
          ((Z = jo(R, {
            nonce: c,
            logoColor: _,
            instrument: b,
            locale: i,
            content: g,
            commit: w,
            experiment: v,
            vault: d,
            textColor: A,
            fundingSource: t,
          })),
          (z = !0));
        var q = z && b && I({ instrument: b });
        return jo(
          "div",
          {
            class: [
              da.BUTTON_ROW,
              da.NUMBER + "-" + l,
              da.LAYOUT + "-" + H,
              da.SHAPE + "-" + B,
              da.NUMBER + "-" + (o ? "multiple" : "single"),
              da.ENV + "-" + a,
              da.COLOR + "-" + P,
              da.TEXT_COLOR + "-" + A,
              "paypal-logo-color-" + _,
              "" + (z ? da.WALLET : ""),
              "" + (q ? da.WALLET_MENU : ""),
            ].join(" "),
          },
          jo(
            "div",
            E(
              { role: "button" },
              (((e = {})["data-button"] = !0),
              (e["data-funding-source"] = t),
              (e["data-payment-method-id"] = b ? b.tokenID : null),
              (e["data-instrument-id"] = b ? b.instrumentID : null),
              (e["data-instrument-type"] = b ? b.type : null),
              e),
              {
                class: [
                  da.BUTTON,
                  da.NUMBER + "-" + l,
                  da.LAYOUT + "-" + H,
                  da.SHAPE + "-" + B,
                  da.NUMBER + "-" + (o ? "multiple" : "single"),
                  da.ENV + "-" + a,
                  da.COLOR + "-" + P,
                  da.TEXT_COLOR + "-" + A,
                  "paypal-logo-color-" + _,
                  "" + (z ? da.WALLET : ""),
                ].join(" "),
                onClick: D,
                onRender: function (n) {
                  ue() &&
                    de(n) &&
                    (function (n) {
                      var e = function e(t) {
                        return (
                          n.removeEventListener("focus", e),
                          t.preventDefault(),
                          n.blur(),
                          !1
                        );
                      };
                      n.addEventListener("mousedown", function () {
                        n.addEventListener("focus", e),
                          setTimeout(function () {
                            n.removeEventListener("focus", e);
                          }, 1);
                      });
                    })(n);
                },
                onKeyPress: j,
                tabindex: "0",
                "aria-label": U,
              }
            ),
            jo("div", { class: da.BUTTON_LABEL }, Z),
            jo(Xa, null)
          ),
          q ? jo(tu, { textColor: A }) : null
        );
      }
      function ou(n) {
        var e = n.fundingSource,
          t = n.locale,
          r = n.multiple,
          o = n.nonce,
          i = n.personalization,
          a = Ma()[e];
        if (!a) throw new Error("Can not get config for " + e);
        var u = a.Tag;
        if (u) {
          var l = i && i.tagline;
          return jo(
            "div",
            { class: da.TAGLINE },
            l && !r
              ? jo(
                  Ho,
                  null,
                  jo(
                    "span",
                    null,
                    l.Component ? jo(l.Component, null) : l.text
                  ),
                  l.tracking &&
                    l.tracking.impression &&
                    jo(ba, { url: l.tracking.impression, nonce: o })
                )
              : jo(u, { locale: t, multiple: r })
          );
        }
      }
      function iu(n) {
        return jo("script", {
          nonce: n.nonce,
          innerHTML:
            "(" +
            function () {
              var n = "[optional]";
              function e(n) {
                return [].slice.call(n);
              }
              function t(n) {
                return e(n).filter(function (n) {
                  return "style" !== n.tagName.toLowerCase();
                });
              }
              function r(n, e) {
                return t((e = e || document).querySelectorAll(n));
              }
              function o(n) {
                return parseInt(n.getAttribute("optional") || 0, 10);
              }
              function i(n) {
                return (function (n) {
                  for (var e = 0, t = 0; t < n.length; t++) e += n[t];
                  return e;
                })(
                  n.map(function (n) {
                    return n.offsetWidth;
                  })
                );
              }
              var a = (function (n) {
                for (var e = [], t = 0; t < n.length; t++) {
                  var r = n[t];
                  -1 === e.indexOf(r) && e.push(r);
                }
                return e;
              })(
                r(n)
                  .map(function (n) {
                    return n.parentElement;
                  })
                  .filter(Boolean)
              ).map(function (i) {
                return {
                  optionalParent: i,
                  allChildren: t(i.children),
                  optionalChildren: e(r(n, i)).sort(function (n, e) {
                    return o(n) - o(e);
                  }),
                };
              });
              function u() {
                for (var n = 0; n < a.length; n++)
                  for (
                    var e = a[n],
                      t = e.optionalChildren,
                      r = e.optionalParent.offsetWidth,
                      o = i(e.allChildren) - i(t),
                      u = 0;
                    u < t.length;
                    u++
                  ) {
                    var l = t[u];
                    (o += l.offsetWidth) > r
                      ? l.classList.add("hidden")
                      : l.classList.remove("hidden");
                  }
              }
              var l,
                c,
                s,
                d = (function (n) {
                  var e = !1;
                  return function () {
                    e || ((e = !0), n.apply(void 0, arguments));
                  };
                })(
                  ((l = function () {
                    window.addEventListener("resize", u),
                      setTimeout(u),
                      document.body && document.body.classList.add("dom-ready");
                  }),
                  void 0 === c && (c = 50),
                  function () {
                    for (
                      var n = arguments.length, e = new Array(n), t = 0;
                      t < n;
                      t++
                    )
                      e[t] = arguments[t];
                    clearTimeout(s),
                      (s = setTimeout(function () {
                        l.apply(void 0, e);
                      }, c));
                  })
                ),
                f = function () {
                  u(), d();
                };
              u(),
                document.addEventListener("DOMContentLoaded", f),
                window.addEventListener("load", f),
                window.addEventListener("resize", f);
            }.toString() +
            ")()",
        });
      }
      var au,
        uu =
          "\n    ." +
          da.POWERED_BY +
          ' {\n        text-align: center;\n        margin: 10px auto;\n        height: 14px;\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        font-size: 11px;\n        font-weight: normal;\n        font-style: italic;\n        font-stretch: normal;\n        color: #7b8388;\n        position: relative;\n        margin-right: 3px;\n        bottom: 3px;\n    }\n    \n    .' +
          da.POWERED_BY +
          " > ." +
          da.TEXT +
          ",\n    ." +
          da.POWERED_BY +
          " > .paypal-logo {\n        display: inline-block;\n        vertical-align: middle;\n        height: 16px;\n        line-height: 16px;\n        font-size: 11px;\n    }\n";
      function lu(n) {
        return jo(
          "div",
          { class: da.POWERED_BY },
          jo("style", { innerHTML: uu }),
          jo(ma, null)
        );
      }
      function cu(n) {
        var e = n.wallet;
        if (
          (t = { wallet: e, onShippingChange: n.onShippingChange }).wallet &&
          !t.onShippingChange
        ) {
          var t,
            r = e && e && e[n.fundingSource.toString()],
            o = r && r.instruments;
          if (o && o.length) return o[0];
        }
      }
      var su = (((au = {})[nt.CREDIT] = "credit"), au);
      function du(n) {
        var e = n.onClick,
          t = void 0 === e ? Nn : e,
          r = (function (n) {
            if (!n) throw new Error("Expected props");
            var e = n.clientID,
              t = n.fundingSource,
              r = n.style,
              o = void 0 === r ? {} : r,
              i = n.remembered,
              a = void 0 === i ? [] : i,
              u = n.locale,
              l = void 0 === u ? Ba.LOCALE : u,
              c = n.env,
              s = void 0 === c ? Ba.ENV : c,
              d = n.platform,
              f = void 0 === d ? Ba.PLATFORM : d,
              p = n.commit,
              h = void 0 === p ? Ba.COMMIT : p,
              m = n.fundingEligibility,
              g = n.sessionID,
              y = void 0 === g ? wn() : g,
              w = n.buttonSessionID,
              v = void 0 === w ? wn() : w,
              b = n.components,
              C = void 0 === b ? ["buttons"] : b,
              E = n.nonce,
              L = n.onShippingChange,
              x = n.personalization,
              O = n.clientAccessToken,
              P = n.content,
              N = n.wallet,
              T = n.flow,
              S = void 0 === T ? "purchase" : T,
              k = n.experiment,
              _ = void 0 === k ? {} : k,
              A = n.vault,
              F = n.userIDToken,
              R = n.applePay,
              M = n.applePaySupport,
              I = void 0 !== M && M,
              D = n.supportsPopups,
              j = void 0 !== D && D,
              H = n.supportedNativeBrowser,
              B = void 0 !== H && H,
              U = l.country,
              W = l.lang;
            if (!U || -1 === Wa.indexOf(U))
              throw new Error(
                "Expected valid country, got " + (U || "undefined")
              );
            if (!W || -1 === Xe[U].indexOf(W))
              throw new Error("Expected valid lang, got " + (W || "undefined"));
            if (
              a.some(function (n) {
                return -1 === Za.indexOf(n);
              })
            )
              throw new Error(
                "Expected valid funding sources, got " + JSON.stringify(a)
              );
            if (-1 === za.indexOf(s))
              throw new Error("Expected valid env, got " + (s || "undefined"));
            if (!m) throw new Error("Expected fundingEligibility");
            if (-1 === qa.indexOf(f))
              throw new Error(
                "Expected valid platform, got " + (f || "undefined")
              );
            if (t) {
              if (-1 === Ji.indexOf(t))
                throw new Error("Invalid funding source: " + t);
              if (
                !Ia(t, {
                  platform: f,
                  fundingSource: t,
                  fundingEligibility: m,
                  components: C,
                  onShippingChange: L,
                  flow: S,
                  wallet: N,
                  applePaySupport: I,
                  supportsPopups: j,
                  supportedNativeBrowser: B,
                })
              )
                throw new Error("Funding Source not eligible: " + t);
            }
            return {
              clientID: e,
              fundingSource: t,
              style: (o = Ua(n, o)),
              locale: l,
              remembered: a,
              env: s,
              fundingEligibility: m,
              platform: f,
              clientAccessToken: O,
              buttonSessionID: v,
              commit: h,
              sessionID: y,
              nonce: E,
              components: C,
              onShippingChange: L,
              personalization: x,
              content: P,
              wallet: N,
              flow: S,
              experiment: _,
              vault: A,
              userIDToken: F,
              applePay: R,
              applePaySupport: I,
              supportsPopups: j,
              supportedNativeBrowser: B,
            };
          })(n),
          o = r.wallet,
          i = r.fundingSource,
          a = r.style,
          u = r.locale,
          l = r.env,
          c = r.fundingEligibility,
          s = r.commit,
          d = r.vault,
          f = r.nonce,
          p = r.onShippingChange,
          h = r.personalization,
          m = r.userIDToken,
          g = r.content,
          y = r.flow,
          w = r.experiment,
          v = a.layout,
          b = a.shape,
          C = a.tagline,
          E = (function (n) {
            var e = n.fundingSource,
              t = n.layout,
              r = n.platform,
              o = n.fundingEligibility,
              i = n.components,
              a = n.onShippingChange,
              u = n.flow,
              l = n.wallet,
              c = n.applePaySupport,
              s = n.supportsPopups,
              d = n.supportedNativeBrowser,
              f = n.experiment;
            if (e) return [e];
            var p = Ji.filter(function (n) {
              return Ia(n, {
                layout: t,
                platform: r,
                fundingSource: e,
                fundingEligibility: o,
                components: i,
                onShippingChange: a,
                flow: u,
                wallet: l,
                applePaySupport: c,
                supportsPopups: s,
                supportedNativeBrowser: d,
                experiment: f,
              });
            });
            return (
              t === sa.HORIZONTAL
                ? (p = p.slice(0, 2))
                : t === sa.VERTICAL && (p = p.slice(0, 6)),
              p
            );
          })({
            fundingSource: i,
            layout: v,
            remembered: r.remembered,
            platform: r.platform,
            fundingEligibility: c,
            components: r.components,
            onShippingChange: p,
            flow: y,
            wallet: o,
            applePaySupport: r.applePaySupport,
            supportsPopups: r.supportsPopups,
            supportedNativeBrowser: r.supportedNativeBrowser,
            experiment: w,
          }),
          L = E.length > 1;
        if (!E.length)
          throw new Po(
            "No eligible funding fundingSources found to render buttons:\n\n" +
              JSON.stringify(c, null, 4)
          );
        -1 !== E.indexOf(nt.CARD) &&
          (E = E.filter(function (n) {
            return n !== nt.CARD;
          }).concat([nt.CARD]));
        var x = (function (n) {
            for (
              var e = n.wallet,
                t = n.layout,
                r = n.fundingSources,
                o = n.onShippingChange,
                i = {},
                a = 0;
              a < r.length;
              a++
            ) {
              var u = r[a],
                l = cu({ wallet: e, fundingSource: u, onShippingChange: o });
              l && (i[u] = l);
            }
            for (var c = 0, s = Object.keys(i); c < s.length; c++)
              for (
                var d = s[c], f = 0, p = Object.keys(su);
                f < p.length;
                f++
              ) {
                var h = p[f];
                d !== h &&
                  -1 !== r.indexOf(h) &&
                  i[d] &&
                  i[d].type === su[h] &&
                  delete i[d];
              }
            if (t === sa.HORIZONTAL)
              for (var m = !1, g = 0; g < r.length; g++) {
                var y = r[g];
                i[y] && (m ? delete i[y] : (m = !0));
              }
            return i;
          })({ wallet: o, fundingSources: E, layout: v, onShippingChange: p }),
          O = m || Object.keys(x).length;
        return jo(
          "div",
          {
            class: [
              da.CONTAINER,
              da.LAYOUT + "-" + v,
              da.SHAPE + "-" + b,
              da.NUMBER + "-" + (L ? "multiple" : "single"),
              da.ENV + "-" + l,
              "" + (O ? da.WALLET : ""),
            ].join(" "),
          },
          jo(Ja, { nonce: f, style: a }),
          E.map(function (n, e) {
            return jo(ru, {
              content: g,
              i: e,
              style: a,
              merchantFundingSource: i,
              fundingSource: n,
              multiple: L,
              env: l,
              locale: u,
              nonce: f,
              fundingEligibility: c,
              wallet: o,
              onShippingChange: p,
              onClick: t,
              userIDToken: m,
              personalization: h,
              tagline: C,
              commit: s,
              experiment: w,
              flow: y,
              vault: d,
              instrument: x[n],
            });
          }),
          C && v === sa.HORIZONTAL && !i
            ? jo(ou, {
                fundingSource: E[0],
                style: a,
                locale: u,
                multiple: L,
                nonce: f,
                personalization: h,
              })
            : null,
          -1 !== E.indexOf(nt.CARD)
            ? jo("div", {
                id: "card-fields-container",
                class: "card-fields-container",
              })
            : null,
          v === sa.VERTICAL && -1 !== E.indexOf(nt.CARD)
            ? jo(lu, { locale: u })
            : null,
          jo(iu, { nonce: f })
        );
      }
      function fu(n) {
        var e,
          t = n.nonce,
          r = n.onRenderCheckout,
          o = n.props;
        return jo(
          "html",
          null,
          jo(
            "body",
            null,
            jo(
              du,
              E({}, o, {
                onClick: function (n, i) {
                  var a,
                    u = i.fundingSource,
                    l = i.card;
                  if (
                    (qt()
                      .info("button_prerender_click")
                      .track(
                        ((a = {}),
                        (a.button_session_id = o.buttonSessionID),
                        (a.context_type = "button_session_id"),
                        (a.context_id = o.buttonSessionID),
                        (a.transition_name = "process_button_prerender_click"),
                        a)
                      )
                      .flush(),
                    g())
                  ) {
                    (e && !e.closed) ||
                      (e = W(ye("", { width: 500, height: 590 })));
                    var c = window.document,
                      s = jo(Ki, { nonce: t }).render(Uo({ doc: c }));
                    we(e, s), r({ win: e, fundingSource: u, card: l });
                  } else r({ fundingSource: u, card: l });
                },
              })
            )
          )
        );
      }
      function pu(n) {
        return n.createBillingAgreement
          ? "billing_setup"
          : n.createSubscription
          ? "subscription_setup"
          : "purchase";
      }
      function hu() {
        return !(
          "undefined" == typeof window ||
          !g() ||
          (function (n) {
            if ((void 0 === n && (n = d()), m(n))) {
              var e = s[window.outerHeight];
              if (!e) return !1;
              var t = window.innerHeight,
                r =
                  Math.round((window.screen.width / window.innerWidth) * 100) /
                  100,
                o = Math.round(t * r);
              return r > 1 && e.zoomHeight[r]
                ? -1 !== e.zoomHeight[r].indexOf(o)
                : -1 !== e.textSizeHeights.indexOf(o);
            }
            return !1;
          })() ||
          ((!m() || !w()) && (!h() || !y()))
        );
      }
      function mu(n) {
        var e = xt(),
          t = e && -1 !== e.indexOf(nt.VENMO),
          r = n && n.isEnabled();
        return { enableVenmo: Boolean(r || t) };
      }
      function gu() {
        try {
          if (!window.ApplePaySession) return;
          var n = function (n) {
            return n.errors && n.errors.length
              ? n.errors.map(function (n) {
                  return new window.ApplePayError(
                    n.code,
                    n.contactField,
                    n.message
                  );
                })
              : n;
          };
          return function (e, t) {
            var r = new window.ApplePaySession(e, t),
              o = {};
            return (
              (r.onvalidatemerchant = function (n) {
                o.validatemerchant({ validationURL: n.validationURL });
              }),
              (r.onpaymentmethodselected = function (n) {
                o.paymentmethodselected({ paymentMethod: n.paymentMethod });
              }),
              (r.onshippingmethodselected = function (n) {
                o.shippingmethodselected({ shippingMethod: n.shippingMethod });
              }),
              (r.onshippingcontactselected = function (n) {
                o.shippingcontactselected({
                  shippingContact: n.shippingContact,
                });
              }),
              (r.onpaymentauthorized = function (n) {
                o.paymentauthorized({ payment: n.payment });
              }),
              (r.oncancel = function () {
                o.cancel();
              }),
              {
                addEventListener: function (n, e) {
                  o[n] = e;
                },
                completeMerchantValidation: function (n) {
                  r.completeMerchantValidation(n);
                },
                completePaymentMethodSelection: function (n) {
                  r.completePaymentMethodSelection(n);
                },
                completeShippingMethodSelection: function (n) {
                  r.completeShippingMethodSelection(n);
                },
                completeShippingContactSelection: function (e) {
                  var t = n(e);
                  r.completeShippingContactSelection(t);
                },
                completePayment: function (e) {
                  var t = n(e);
                  r.completePayment(t);
                },
                begin: function () {
                  return r.begin();
                },
              }
            );
          };
        } catch (n) {
          return;
        }
      }
      var yu = xn(function () {
        var n = (function () {
            var n = xt(),
              e = n && -1 !== n.indexOf(nt.VENMO),
              t = ct();
            if (t && t[nt.VENMO] && t[nt.VENMO].eligible && !e)
              return m() && w()
                ? Vt("enable_venmo_ios", 90)
                : h() && y()
                ? Vt("enable_venmo_android", 90)
                : void 0;
          })(),
          e = [];
        return Lo({
          tag: "paypal-buttons",
          url: function () {
            return "" + Wt() + (window.__CHECKOUT_URI__ || "/smart/buttons");
          },
          domain: Zt(),
          autoResize: { width: !1, height: !0 },
          containerTemplate: Ga,
          logger: qt(),
          prerenderTemplate: function (n) {
            var e = n.state,
              t = n.props,
              r = n.doc;
            return jo(fu, {
              nonce: t.nonce,
              props: t,
              onRenderCheckout: function (n) {
                e.prerenderDetails = {
                  win: n.win,
                  fundingSource: n.fundingSource,
                  card: n.card,
                };
              },
            }).render(Uo({ doc: r }));
          },
          attributes: {
            iframe: {
              allowpaymentrequest: "allowpaymentrequest",
              scrolling: "no",
              title: "PayPal",
            },
          },
          eligible: function (t) {
            var r = t.props,
              o = r.fundingSource,
              i = r.onShippingChange,
              a = r.style,
              u = void 0 === a ? {} : a,
              l = r.applePaySupport,
              c = void 0 === l ? v() : l,
              s = r.fundingEligibility,
              d = void 0 === s ? ea() : s,
              f = r.supportsPopups,
              p = void 0 === f ? g() : f,
              h = r.supportedNativeBrowser,
              m = void 0 === h ? hu() : h,
              y = r.experiment,
              w = void 0 === y ? mu(n) : y,
              b = pu(r);
            return o
              ? (-1 === e.indexOf(o) && e.push(o),
                Ia(o, {
                  layout: u.layout,
                  platform: st(),
                  fundingSource: o,
                  fundingEligibility: d,
                  components: ["buttons", "funding-eligibility"],
                  onShippingChange: i,
                  flow: b,
                  applePaySupport: c,
                  supportsPopups: p,
                  supportedNativeBrowser: m,
                  experiment: w,
                })
                  ? { eligible: !0 }
                  : { eligible: !1, reason: o + " is not eligible" })
              : { eligible: !0 };
          },
          props: {
            fundingSource: {
              type: "string",
              queryParam: !0,
              required: !1,
              validate: function (n) {
                var e = n.props,
                  t = e.fundingSource,
                  r = e.onShippingChange,
                  o = e.style,
                  i = void 0 === o ? {} : o,
                  a = e.fundingEligibility,
                  u = void 0 === a ? ea() : a,
                  l = e.applePaySupport,
                  c = e.supportsPopups,
                  s = e.supportedNativeBrowser,
                  d = pu(e),
                  f = i.layout,
                  p = st();
                if (
                  t &&
                  !Ia(t, {
                    layout: f,
                    platform: p,
                    fundingSource: t,
                    fundingEligibility: u,
                    components: ["buttons", "funding-eligibility"],
                    onShippingChange: r,
                    flow: d,
                    applePaySupport: l,
                    supportsPopups: c,
                    supportedNativeBrowser: s,
                  })
                )
                  throw new Error(t + " is not eligible");
              },
            },
            style: {
              type: "object",
              queryParam: !0,
              required: !1,
              decorate: function (n) {
                return Ua(n.props, n.value);
              },
              validate: function (n) {
                var e = n.value;
                Ua(n.props, void 0 === e ? {} : e);
              },
              default: function () {
                return {};
              },
            },
            storageState: {
              type: "object",
              value: function () {
                return So;
              },
            },
            sessionState: {
              type: "object",
              value: function () {
                return ko;
              },
            },
            components: { type: "array", queryParam: !0, value: lt },
            locale: { type: "object", queryParam: !0, value: Ft },
            sdkMeta: {
              type: "string",
              queryParam: !0,
              sendToChild: !1,
              value: Kt,
            },
            createOrder: { type: "function", required: !1 },
            createBillingAgreement: { type: "function", required: !1 },
            createSubscription: { type: "function", required: !1 },
            onApprove: { type: "function", required: !1 },
            onShippingChange: {
              type: "function",
              required: !1,
              queryParam: !0,
              queryValue: function (n) {
                return n.value ? "true" : "false";
              },
            },
            onCancel: { type: "function", required: !1 },
            onClick: { type: "function", required: !1 },
            getPrerenderDetails: {
              type: "function",
              value: function (n) {
                var e = n.state;
                return function () {
                  return e.prerenderDetails;
                };
              },
            },
            getPopupBridge: {
              type: "function",
              required: !1,
              value: function () {
                return function () {
                  if (window.popupBridge)
                    return {
                      nativeUrl: window.popupBridge.getReturnUrlPrefix(),
                      start: function (n) {
                        return new _(function (e, t) {
                          (window.popupBridge.onComplete = function (n, r) {
                            return n ? t(n) : e(r.queryItems);
                          }),
                            window.popupBridge.open(n);
                        });
                      },
                    };
                };
              },
            },
            onInit: {
              type: "function",
              required: !1,
              default: function () {
                return Nn;
              },
              decorate: function (e) {
                var t = e.props,
                  r = e.value,
                  o = void 0 === r ? Nn : r;
                return function () {
                  var e;
                  return (
                    n &&
                      n.logStart(
                        (((e = {}).button_session_id = t.buttonSessionID), e)
                      ),
                    o.apply(void 0, arguments)
                  );
                };
              },
            },
            getQueriedEligibleFunding: {
              type: "function",
              value: function () {
                return function () {
                  return e;
                };
              },
            },
            clientID: { type: "string", value: wt, queryParam: !0 },
            clientAccessToken: {
              type: "string",
              required: !1,
              queryParam: !0,
              value: _t,
            },
            partnerAttributionID: { type: "string", required: !1, value: At },
            enableThreeDomainSecure: { type: "boolean", value: Mt },
            sdkCorrelationID: {
              type: "string",
              required: !1,
              value: at,
              queryParam: !0,
            },
            storageID: { type: "string", value: $t, queryParam: !0 },
            sessionID: { type: "string", value: To, queryParam: !0 },
            buttonSessionID: { type: "string", value: wn, queryParam: !0 },
            enableVault: { type: "boolean", required: !1, queryParam: !0 },
            env: { type: "string", queryParam: !0, value: tt },
            amount: { type: "string", required: !1, queryParam: !0, value: St },
            stageHost: { type: "string", value: rt, required: !1 },
            apiStageHost: { type: "string", value: ot, required: !1 },
            fundingEligibility: {
              type: "object",
              default: ea,
              value: "sandbox" === Qe.LOCAL ? void 0 : ea,
              queryParam: !0,
              serialization: "base64",
            },
            platform: { type: "string", queryParam: !0, value: st },
            remembered: { type: "array", queryParam: !0, value: Qi },
            experiment: {
              type: "object",
              queryParam: !0,
              value: function () {
                return mu(n);
              },
            },
            flow: {
              type: "string",
              queryParam: !0,
              value: function (n) {
                return pu(n.props);
              },
            },
            remember: {
              type: "function",
              value: function () {
                return function (n) {
                  return $i(n, { cookie: !1 });
                };
              },
            },
            currency: { type: "string", queryParam: !0, value: Lt },
            intent: { type: "string", queryParam: !0, value: bt },
            buyerCountry: {
              type: "string",
              queryParam: !0,
              required: !1,
              value: Nt,
            },
            commit: { type: "boolean", queryParam: !0, value: Ct },
            vault: { type: "boolean", queryParam: !0, value: Et },
            enableFunding: { type: "array", queryParam: !0, value: xt },
            disableFunding: { type: "array", queryParam: !0, value: Ot },
            disableCard: { type: "array", queryParam: !0, value: Pt },
            merchantID: { type: "array", queryParam: !0, value: vt },
            csp: {
              type: "object",
              required: !1,
              value: function () {
                return { nonce: Rt() };
              },
            },
            nonce: { type: "string", default: Rt },
            getPageUrl: {
              type: "function",
              value: function () {
                return function () {
                  return window.location.href;
                };
              },
            },
            userIDToken: {
              type: "string",
              default: kt,
              required: !1,
              queryParam: !0,
            },
            clientMetadataID: {
              type: "string",
              required: !1,
              default: nr,
              queryParam: !0,
            },
            debug: { type: "boolean", value: ut, queryParam: !0 },
            test: {
              type: "object",
              default: function () {
                return { action: "checkout" };
              },
            },
            wallet: {
              type: "object",
              required: !1,
              default: function () {
                return window.__TEST_WALLET__;
              },
            },
            paymentMethodNonce: {
              type: "string",
              queryParam: !0,
              required: !1,
            },
            branded: { type: "boolean", queryParam: !0, required: !1 },
            applePaySupport: { type: "boolean", value: v, queryParam: !0 },
            supportsPopups: {
              type: "boolean",
              value: function () {
                return g();
              },
              queryParam: !0,
            },
            supportedNativeBrowser: {
              type: "boolean",
              value: hu,
              queryParam: !0,
            },
            userExperienceFlow: { type: "string", required: !1, value: It },
            applePay: { type: "function", required: !1, value: gu },
          },
        });
      });
      function wu() {
        return Pn(wu, function () {
          return Lo({
            tag: "paypal-card-fields",
            url: function () {
              return (
                "" + Wt() + (window.__CHECKOUT_URI__ || "/smart/card-fields")
              );
            },
            dimensions: { height: "300px", width: "100%" },
            attributes: {
              iframe: {
                allowpaymentrequest: "allowpaymentrequest",
                scrolling: "no",
              },
            },
            autoResize: { height: !0, width: !1 },
            props: {
              sessionID: {
                type: "string",
                required: !1,
                default: To,
                queryParam: !0,
              },
              createOrder: {
                type: "function",
                queryParam: "token",
                alias: "payment",
                queryValue: function (n) {
                  return _.try(n.value);
                },
              },
              buttonSessionID: { type: "string", queryParam: !0 },
              commit: { type: "boolean", queryParam: !0, value: Ct },
              env: { type: "string", queryParam: !0, value: tt },
              locale: {
                type: "object",
                queryParam: "locale.x",
                allowDelegate: !0,
                queryValue: function (n) {
                  var e = n.value;
                  return e.lang + "_" + e.country;
                },
                value: Ft,
              },
              onApprove: { type: "function", alias: "onAuthorize" },
              onAuth: { type: "function", required: !1, sameDomain: !0 },
              onCancel: { type: "function", required: !1 },
              sdkMeta: { type: "string", queryParam: !0, value: Kt },
              style: { type: "object", required: !1, queryParam: !0 },
              disableCard: {
                type: "array",
                queryParam: "disable-card",
                allowDelegate: !0,
                queryValue: function (n) {
                  return n.value.join(",");
                },
                value: Pt,
              },
            },
          });
        });
      }
      function vu() {
        return Pn(vu, function () {
          return Lo({
            tag: "paypal-menu",
            url: function () {
              return "" + Wt() + (window.__CHECKOUT_URI__ || "/smart/menu");
            },
            domain: Zt(),
            autoResize: { width: !1, height: !0 },
            dimensions: { width: "100%", height: "150px" },
            logger: qt(),
            prerenderTemplate: function () {
              return null;
            },
            attributes: { iframe: { scrolling: "no" } },
            props: {
              sdkMeta: {
                type: "string",
                queryParam: !0,
                sendToChild: !1,
                value: Kt,
              },
              clientID: { type: "string", queryParam: !0 },
            },
          });
        });
      }
      function bu() {
        return Pn(bu, function () {
          return Lo({
            tag: "paypal-installments",
            url: function () {
              return (
                "" + Wt() + (window.__CHECKOUT_URI__ || "/smart/installments")
              );
            },
            domain: Zt(),
            autoResize: { width: !1, height: !0 },
            dimensions: { width: "100%", height: "100%" },
            logger: qt(),
            prerenderTemplate: function (n) {
              var e = n.doc,
                t = n.props.nonce || Rt();
              return jo(Ki, { nonce: t }).render(Uo({ doc: e }));
            },
            containerTemplate: function (n) {
              var e = n.doc;
              return jo(Zi, {
                context: n.context,
                close: n.close,
                focus: n.focus,
                event: n.event,
                frame: n.frame,
                prerenderFrame: n.prerenderFrame,
                autoResize: !0,
                hideCloseButton: !0,
                nonce: n.props.nonce,
              }).render(Uo({ doc: e }));
            },
            props: {
              sdkMeta: {
                type: "string",
                queryParam: !0,
                sendToChild: !1,
                value: Kt,
              },
              clientID: { type: "string", queryParam: !0 },
              locale: { type: "object", queryParam: !0, value: Ft },
              nonce: { type: "string", default: Rt, required: !1 },
            },
          });
        });
      }
      function Cu() {
        return Pn(Cu, function () {
          return Lo({
            tag: "paypal-qr-modal",
            url: function (n) {
              var e = n.props;
              return Wt() + "/smart/qrcode?" + e.qrPath;
            },
            domain: Zt(),
            dimensions: { width: "100%", height: "100%" },
            logger: qt(),
            prerenderTemplate: function (n) {
              var e = n.doc;
              return jo(Ki, { nonce: n.props.cspNonce }).render(Uo({ doc: e }));
            },
            containerTemplate: function (n) {
              var e = n.frame,
                t = n.prerenderFrame,
                r = n.doc;
              if (e && t)
                return jo(Eu, {
                  uid: n.uid,
                  cspNonce: n.props.cspNonce,
                  close: n.close,
                  event: n.event,
                  frame: e,
                  prerenderFrame: t,
                }).render(Uo({ doc: r }));
            },
            autoResize: { width: !0, height: !0 },
            attributes: { iframe: { scrolling: "no" } },
            props: {
              qrPath: { type: "string", queryParam: !0, required: !0 },
              cspNonce: {
                type: "string",
                queryParam: !1,
                required: !1,
                value: Rt,
              },
              demo: { type: "boolean", queryParam: !0, required: !1 },
            },
          });
        });
      }
      function Eu(n) {
        var e = n.uid,
          t = n.frame,
          r = n.prerenderFrame,
          o = n.event,
          i = n.cspNonce,
          a = n.close;
        if (!t || !r) throw new Error("Expected frame and prerenderframe");
        return (
          t.classList.add("component-frame"),
          r.classList.add("prerender-frame"),
          t.classList.add("invisible"),
          r.classList.add("visible"),
          o.on("zoid-rendered", function () {
            r.classList.remove("visible"),
              r.classList.add("invisible"),
              t.classList.remove("invisible"),
              t.classList.add("visible"),
              setTimeout(function () {
                ke(r);
              }, 1e3);
          }),
          jo(
            "div",
            { id: e },
            jo("style", {
              nonce: i,
              innerHTML:
                "\n            * {\n                box-sizing: border-box;\n            }\n        \n            #" +
                e +
                " {\n                display: flex;\n                position: fixed;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                z-index: 20000;\n                align-items: center;\n                justify-content: center;\n                background-color: rgba(0, 0, 0, 0.4); \n            }\n            #" +
                e +
                " iframe {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n            #qrModal {\n                background: #2F3033;\n                box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);\n                border-radius: 16px;                        \n                width: 720px;\n                height: 480px;  \n                display: flex;\n                align-items: center;\n                justify-content: center;\n                flex-direction: column;\n                position: relative;\n            }\n            #close {\n                position: absolute;\n                right: 16px;\n                top: 16px;\n                width: 16px;\n                height: 16px;\n                opacity: 0.6;\n                z-index: 10;\n            }\n            #close:hover {\n                opacity: 1;\n            }\n            #close:before, #close:after {\n                position: absolute;\n                left: 8px;\n                content: ' ';\n                height: 16px;\n                width: 2px;\n                background-color: #FFF;\n            }\n            #close:before {\n                transform: rotate(45deg);\n            }\n            #close:after {\n                transform: rotate(-45deg);\n            }        \n            ",
            }),
            jo(
              "div",
              { id: "qrModal" },
              jo("a", {
                href: "#",
                id: "close",
                "aria-label": "close",
                role: "button",
                onClick: a,
              }),
              jo("node", { el: r }),
              jo("node", { el: t })
            )
          )
        );
      }
      function Lu() {
        return Pn(Lu, function () {
          return Lo({
            tag: "paypal-modal",
            url: function () {
              return "" + Wt() + (window.__CHECKOUT_URI__ || "/smart/modal");
            },
            domain: Zt(),
            dimensions: { width: "100%", height: "100%" },
            logger: qt(),
            containerTemplate: function (n) {
              var e = n.frame,
                t = n.prerenderFrame,
                r = n.doc,
                o = n.uid,
                i = n.event;
              if (e && t) {
                var a = n.props.cspNonce;
                return (
                  t.classList.add("visible"),
                  e.classList.add("invisible"),
                  i.on("zoid-rendered", function () {
                    t.classList.remove("visible"),
                      t.classList.add("invisible"),
                      e.classList.remove("invisible"),
                      e.classList.add("visible"),
                      setTimeout(function () {
                        ke(t);
                      }, 1);
                  }),
                  jo(
                    "div",
                    {
                      id: o,
                      onRender: function (n) {
                        i.on("zoid-resize", function (e) {
                          var t = e.width,
                            r = e.height;
                          "number" == typeof t && (n.style.width = Ke(t)),
                            "number" == typeof r && (n.style.height = Ke(r));
                        });
                      },
                    },
                    jo("style", {
                      nonce: a,
                      innerHTML:
                        "\n                                #" +
                        o +
                        " {\n                                    display: block;\n                                    position: fixed;\n                                    width: 100%;\n                                    height: 100%;\n                                    top: 0;\n                                    left: 0;\n                                    z-index: 200000;\n                                }\n\n                                #" +
                        o +
                        " > iframe {\n                                    display: inline-block;\n                                    position: absolute;\n                                    width: 100%;\n                                    height: 100%;\n                                    top: 0;\n                                    left: 0;\n                                    transition: opacity .2s ease-in-out;\n                                }\n                                #" +
                        o +
                        " > iframe.invisible {\n                                    opacity: 0;\n                                }\n                                #" +
                        o +
                        " > iframe.visible {\n                                    opacity: 1;\n                                }\n                            ",
                    }),
                    jo("node", { el: e }),
                    jo("node", { el: t })
                  ).render(Uo({ doc: r }))
                );
              }
            },
            prerenderTemplate: function () {
              return null;
            },
            attributes: { iframe: { scrolling: "no" } },
            props: {
              sdkMeta: {
                type: "string",
                queryParam: !0,
                sendToChild: !1,
                value: Kt,
              },
              clientID: { type: "string", queryParam: !0 },
              orderID: { type: "string", queryParam: !0 },
              customerID: { type: "string", queryParam: !0 },
            },
          });
        });
      }
      function xu(n) {
        if (zt()) return n;
      }
      var Ou = {
          __get__: function () {
            return yu();
          },
        },
        Pu = {
          __get__: function () {
            return xu(Yi());
          },
        },
        Nu = {
          __get__: function () {
            return xu(wu());
          },
        },
        Tu = {
          __get__: function () {
            return xu(vu());
          },
        },
        Su = {
          __get__: function () {
            return xu(Lu());
          },
        },
        ku = {
          __get__: function () {
            return xu(bu());
          },
        },
        _u = {
          __get__: function () {
            return Cu();
          },
        },
        Au = {
          __get__: function () {
            return xu(du);
          },
        },
        Fu = {
          __get__: function () {
            return xu(ge);
          },
        },
        Ru = {
          __get__: function () {
            return xu(No);
          },
        },
        Mu = {
          __get__: function () {
            return xu(No);
          },
        },
        Iu = {
          __get__: function () {
            return xu(xo);
          },
        };
      function Du() {
        yu(), Yi();
      }
      function ju(n) {
        !(function (n) {
          var e;
          Oo(), (e = Qr()), delete window[e], Jr(), Co.all(n);
        })(n);
      }
      function Hu(n) {
        if (zt()) return n;
      }
      var Bu = {
          __get__: function () {
            return Hu(qi());
          },
        },
        Uu = {
          __get__: function () {
            return Hu(o);
          },
        };
      function Wu() {
        (function (n, e) {
          void 0 === n && (n = "sandbox"), void 0 === e && (e = !1);
          try {
            if ("mock://www.paypal.com" !== window.mockDomain && !zt()) {
              if (n === Qe.SANDBOX && !0 !== e) return;
              var t = (function () {
                  var n = vt();
                  if (n.length && "unknown" !== n[0]) return n[0];
                })(),
                r = wt(),
                o = window.location.hostname,
                i = Wt(),
                a = document.createElement("script"),
                u = document.querySelector("head"),
                l = (function (n, e, t, r) {
                  var o =
                    n +
                    "/tagmanager/pptm.js?id=" +
                    r +
                    "&t=xo&v=5.0.235&source=payments_sdk";
                  return (
                    e && (o += "&mrid=" + e),
                    t && (o += "&client_id=" + t),
                    gt("components") &&
                      (o += "&comp=" + String(gt("components"))),
                    o + "&vault=" + String(Et())
                  );
                })(i, t, r, o);
              (a.src = l),
                (a.id = "xo-pptm"),
                (a.async = !0),
                u && u.appendChild(a);
            }
          } catch (n) {
            !(function (n, e) {
              try {
                var t,
                  r = qt();
                r.track(
                  (((t = {}).ext_error_code = "paypal-muse-components"),
                  (t.ext_error_desc = JSON.stringify({
                    name: n,
                    error: kn(e),
                  })),
                  t)
                ),
                  r.error(n, { err: Sn(e) }),
                  r.flush().catch(Nn);
              } catch (e) {
                var o,
                  i = qt();
                i.track(
                  (((o = {}).ext_error_code = "paypal-muse-components"),
                  (o.ext_error_desc = "Error logging error event for " + n),
                  o)
                ),
                  i.error("logger_error", { err: Sn(e) }),
                  i.flush().catch(Nn);
              }
            })("insertPPTM", n);
          }
        })("sandbox", !1),
          er().on("button_render", function () {
            (window.paypalDDL = window.paypalDDL || []),
              0 ===
                window.paypalDDL.filter(function (n) {
                  return "paypalButtonRender" === n.event;
                }).length &&
                window.paypalDDL.push({ event: "paypalButtonRender" });
          });
      }
      !(function (n) {
        var e = Tt(),
          t = window[e];
        if (t) {
          if (!t.__internal_destroy__)
            throw new Error(
              "Attempted to load sdk version 5.0.235 on page, but window." +
                e +
                " at version " +
                (t && t.version) +
                ' already loaded.\n\nTo load this sdk alongside the existing version, please specify a different namespace in the script tag, e.g. <script src="https://www.paypal.com/sdk/js?client-id=CLIENT_ID" data-namespace="paypal_sdk"></script>, then use the paypal_sdk namespace in place of paypal in your code.'
            );
          t.__internal_destroy__(
            new Error(
              "New SDK instance loaded, existing instance destroyed (" +
                e +
                " / 5.0.235)"
            )
          ),
            delete window[e];
        }
        (window[e] = window[e] || {}), (window[e].version = "5.0.235");
        for (
          var r = [],
            o = function (t) {
              var o = n[t],
                i = o.name,
                a = o.requirer,
                u = o.setupHandler;
              try {
                var l = a(),
                  s = l[u],
                  d = l.setup,
                  f = l.destroy,
                  p = c(l, [u, "setup", "destroy"].map(Dt));
                s ? s() : d && d(), f && r.push(f);
                for (var h = 0, m = Object.keys(p); h < m.length; h++) {
                  var g = m[h],
                    y = p[g];
                  y && y.__get__ && (y = y.__get__()), y && (window[e][g] = y);
                }
              } catch (n) {
                return (
                  setTimeout(function () {
                    throw new Error(
                      "Bootstrap Error for " +
                        i +
                        ":\n\n" +
                        n.message +
                        "\n\n" +
                        n.stack
                    );
                  }, 1),
                  "continue"
                );
              }
            },
            i = 0;
          i < n.length;
          i++
        )
          o(i);
        Object.defineProperty(window[e], "__internal_destroy__", {
          enumerable: !1,
          value: function (n) {
            void 0 === n &&
              (n = new Error("SDK instance destroyed (" + e + " / 5.0.235)")),
              r.forEach(function (e) {
                return e(n);
              }),
              ke(pt()),
              delete window[e];
          },
        });
      })([
        {
          name: "__paypal-sdk-client__",
          setupHandler: "setupClient",
          requirer: function () {
            return r;
          },
        },
        {
          name: "buttons",
          setupHandler: "setupButtons",
          requirer: function () {
            return i;
          },
        },
        {
          name: "common",
          setupHandler: null,
          requirer: function () {
            return a;
          },
        },
        {
          name: "funding-eligibility",
          setupHandler: null,
          requirer: function () {
            return u;
          },
        },
        {
          name: "muse",
          setupHandler: null,
          requirer: function () {
            return l;
          },
        },
      ]);
    },
  ])
);