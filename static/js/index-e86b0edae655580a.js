(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    3685: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(1878);
        },
      ]);
    },
    1878: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n(5893),
        l = n(9008),
        a = n(9583);
      function s() {
        return (0, r.jsxs)("div", {
          className: "",
          children: [
            (0, r.jsxs)(l.default, {
              children: [
                (0, r.jsx)("title", { children: "$toad coin" }),
                (0, r.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
                (0, r.jsx)("link", {
                  href: "https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin&family=Rampart+One&display=swap",
                  rel: "stylesheet",
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className:
                "container mx-auto max-w-[1280px] w-full px-6 py-16 lg:py-24",
              children: (0, r.jsxs)("div", {
                className:
                  "flex flex-wrap lg:flex-nowrap gap-16 justify-between items-center",
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("h1", {
                        className:
                          "font-heading text-2xl sm:text-3xl lg:text-5xl max-w-[700px] leading-tight sm:leading-tight lg:leading-tight w-full",
                        children: "Welcome to TOAD Coin",
                      }),
                      (0, r.jsx)("div", {
                        className: "max-w-[600px] w-full mt-4",
                        children:
                          "There's a TOAD in town. We are taking on the likes of $TOAD to become the top token expert.",
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex flex-wrap gap-4 items-center mt-4",
                        children: [
                          (0, r.jsx)("a", {
                            target: "_blank",
                            href: "https://app.uniswap.org/tokens/ethereum/0X000000000000000000000000000",
                            className:
                              "py-2 px-8 bg-black text-white rounded-full",
                            children: "Buy Now",
                          }),
                          (0, r.jsx)("a", {
                            target: "_blank",
                            href: "chartlink",
                            className:
                              "py-2 px-8 bg-black text-white rounded-full",
                            children: "Chart",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex flex-wrap gap-4 items-center mt-4",
                        children: [
                          (0, r.jsx)("a", {
                            target: "_blank",
                            href: "tglink",
                            className: "p-3 bg-black text-white rounded-full",
                            children: (0, r.jsx)(a.AGi, {}),
                          }),
                          (0, r.jsx)("a", {
                            target: "_blank",
                            href: "https://twitter.com/toad_erc",
                            className: "p-3 bg-black text-white rounded-full",
                            children: (0, r.jsx)(a.fWC, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("img", {
                        src: "static/picture/logo.png",
                        className: "max-w-[500px] w-full",
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "py-2 px-4 bg-black rounded-full text-center text-white",
                        children: [
                          "CA:",
                          " ",
                          (0, r.jsx)("span", {
                            className: "text-xs sm:text-base",
                            children: "0X000000000000000000000000000",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    9008: function (e, t, n) {
      e.exports = n(5443);
    },
    8357: function (e, t, n) {
      "use strict";
      n.d(t, {
        w_: function () {
          return o;
        },
      });
      var r = n(7294),
        l = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = r.createContext && r.createContext(l),
        s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var l in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
              return e;
            }).apply(this, arguments);
        },
        i = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var l = 0;
            for (r = Object.getOwnPropertySymbols(e); l < r.length; l++)
              t.indexOf(r[l]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
                (n[r[l]] = e[r[l]]);
          }
          return n;
        };
      function c(e) {
        return (
          e &&
          e.map(function (e, t) {
            return r.createElement(e.tag, s({ key: t }, e.attr), c(e.child));
          })
        );
      }
      function o(e) {
        return function (t) {
          return r.createElement(d, s({ attr: s({}, e.attr) }, t), c(e.child));
        };
      }
      function d(e) {
        var t = function (t) {
          var n,
            l = e.attr,
            a = e.size,
            c = e.title,
            o = i(e, ["attr", "size", "title"]),
            d = a || t.size || "1em";
          return (
            t.className && (n = t.className),
            e.className && (n = (n ? n + " " : "") + e.className),
            r.createElement(
              "svg",
              s(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                l,
                o,
                {
                  className: n,
                  style: s(s({ color: e.color || t.color }, t.style), e.style),
                  height: d,
                  width: d,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              c && r.createElement("title", null, c),
              e.children
            )
          );
        };
        return void 0 !== a
          ? r.createElement(a.Consumer, null, function (e) {
              return t(e);
            })
          : t(l);
      }
    },
  },
  function (e) {
    e.O(0, [445, 774, 888, 179], function () {
      return (t = 3685), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
