(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u);
  new MutationObserver((u) => {
    for (const d of u)
      if (d.type === "childList")
        for (const f of d.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && a(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(u) {
    const d = {};
    return (
      u.integrity && (d.integrity = u.integrity),
      u.referrerPolicy && (d.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function a(u) {
    if (u.ep) return;
    u.ep = !0;
    const d = s(u);
    fetch(u.href, d);
  }
})();
var Qa = { exports: {} },
  ui = {},
  qa = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd;
function Ty() {
  if (hd) return se;
  hd = 1;
  var n = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    x = Symbol.iterator;
  function S(P) {
    return P === null || typeof P != "object"
      ? null
      : ((P = (x && P[x]) || P["@@iterator"]),
        typeof P == "function" ? P : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    j = Object.assign,
    D = {};
  function A(P, R, re) {
    ((this.props = P),
      (this.context = R),
      (this.refs = D),
      (this.updater = re || M));
  }
  ((A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (P, R) {
      if (typeof P != "object" && typeof P != "function" && P != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, P, R, "setState");
    }),
    (A.prototype.forceUpdate = function (P) {
      this.updater.enqueueForceUpdate(this, P, "forceUpdate");
    }));
  function I() {}
  I.prototype = A.prototype;
  function B(P, R, re) {
    ((this.props = P),
      (this.context = R),
      (this.refs = D),
      (this.updater = re || M));
  }
  var O = (B.prototype = new I());
  ((O.constructor = B), j(O, A.prototype), (O.isPureReactComponent = !0));
  var b = Array.isArray,
    q = Object.prototype.hasOwnProperty,
    ae = { current: null },
    de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(P, R, re) {
    var oe,
      ue = {},
      ce = null,
      ye = null;
    if (R != null)
      for (oe in (R.ref !== void 0 && (ye = R.ref),
      R.key !== void 0 && (ce = "" + R.key),
      R))
        q.call(R, oe) && !de.hasOwnProperty(oe) && (ue[oe] = R[oe]);
    var he = arguments.length - 2;
    if (he === 1) ue.children = re;
    else if (1 < he) {
      for (var Pe = Array(he), ct = 0; ct < he; ct++)
        Pe[ct] = arguments[ct + 2];
      ue.children = Pe;
    }
    if (P && P.defaultProps)
      for (oe in ((he = P.defaultProps), he))
        ue[oe] === void 0 && (ue[oe] = he[oe]);
    return {
      $$typeof: n,
      type: P,
      key: ce,
      ref: ye,
      props: ue,
      _owner: ae.current,
    };
  }
  function ge(P, R) {
    return {
      $$typeof: n,
      type: P.type,
      key: R,
      ref: P.ref,
      props: P.props,
      _owner: P._owner,
    };
  }
  function Z(P) {
    return typeof P == "object" && P !== null && P.$$typeof === n;
  }
  function me(P) {
    var R = { "=": "=0", ":": "=2" };
    return (
      "$" +
      P.replace(/[=:]/g, function (re) {
        return R[re];
      })
    );
  }
  var we = /\/+/g;
  function Le(P, R) {
    return typeof P == "object" && P !== null && P.key != null
      ? me("" + P.key)
      : R.toString(36);
  }
  function Ae(P, R, re, oe, ue) {
    var ce = typeof P;
    (ce === "undefined" || ce === "boolean") && (P = null);
    var ye = !1;
    if (P === null) ye = !0;
    else
      switch (ce) {
        case "string":
        case "number":
          ye = !0;
          break;
        case "object":
          switch (P.$$typeof) {
            case n:
            case r:
              ye = !0;
          }
      }
    if (ye)
      return (
        (ye = P),
        (ue = ue(ye)),
        (P = oe === "" ? "." + Le(ye, 0) : oe),
        b(ue)
          ? ((re = ""),
            P != null && (re = P.replace(we, "$&/") + "/"),
            Ae(ue, R, re, "", function (ct) {
              return ct;
            }))
          : ue != null &&
            (Z(ue) &&
              (ue = ge(
                ue,
                re +
                  (!ue.key || (ye && ye.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(we, "$&/") + "/") +
                  P,
              )),
            R.push(ue)),
        1
      );
    if (((ye = 0), (oe = oe === "" ? "." : oe + ":"), b(P)))
      for (var he = 0; he < P.length; he++) {
        ce = P[he];
        var Pe = oe + Le(ce, he);
        ye += Ae(ce, R, re, Pe, ue);
      }
    else if (((Pe = S(P)), typeof Pe == "function"))
      for (P = Pe.call(P), he = 0; !(ce = P.next()).done; )
        ((ce = ce.value),
          (Pe = oe + Le(ce, he++)),
          (ye += Ae(ce, R, re, Pe, ue)));
    else if (ce === "object")
      throw (
        (R = String(P)),
        Error(
          "Objects are not valid as a React child (found: " +
            (R === "[object Object]"
              ? "object with keys {" + Object.keys(P).join(", ") + "}"
              : R) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return ye;
  }
  function Ie(P, R, re) {
    if (P == null) return P;
    var oe = [],
      ue = 0;
    return (
      Ae(P, oe, "", "", function (ce) {
        return R.call(re, ce, ue++);
      }),
      oe
    );
  }
  function Se(P) {
    if (P._status === -1) {
      var R = P._result;
      ((R = R()),
        R.then(
          function (re) {
            (P._status === 0 || P._status === -1) &&
              ((P._status = 1), (P._result = re));
          },
          function (re) {
            (P._status === 0 || P._status === -1) &&
              ((P._status = 2), (P._result = re));
          },
        ),
        P._status === -1 && ((P._status = 0), (P._result = R)));
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var Ce = { current: null },
    F = { transition: null },
    G = {
      ReactCurrentDispatcher: Ce,
      ReactCurrentBatchConfig: F,
      ReactCurrentOwner: ae,
    };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (se.Children = {
      map: Ie,
      forEach: function (P, R, re) {
        Ie(
          P,
          function () {
            R.apply(this, arguments);
          },
          re,
        );
      },
      count: function (P) {
        var R = 0;
        return (
          Ie(P, function () {
            R++;
          }),
          R
        );
      },
      toArray: function (P) {
        return (
          Ie(P, function (R) {
            return R;
          }) || []
        );
      },
      only: function (P) {
        if (!Z(P))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return P;
      },
    }),
    (se.Component = A),
    (se.Fragment = s),
    (se.Profiler = u),
    (se.PureComponent = B),
    (se.StrictMode = a),
    (se.Suspense = m),
    (se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
    (se.act = U),
    (se.cloneElement = function (P, R, re) {
      if (P == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            P +
            ".",
        );
      var oe = j({}, P.props),
        ue = P.key,
        ce = P.ref,
        ye = P._owner;
      if (R != null) {
        if (
          (R.ref !== void 0 && ((ce = R.ref), (ye = ae.current)),
          R.key !== void 0 && (ue = "" + R.key),
          P.type && P.type.defaultProps)
        )
          var he = P.type.defaultProps;
        for (Pe in R)
          q.call(R, Pe) &&
            !de.hasOwnProperty(Pe) &&
            (oe[Pe] = R[Pe] === void 0 && he !== void 0 ? he[Pe] : R[Pe]);
      }
      var Pe = arguments.length - 2;
      if (Pe === 1) oe.children = re;
      else if (1 < Pe) {
        he = Array(Pe);
        for (var ct = 0; ct < Pe; ct++) he[ct] = arguments[ct + 2];
        oe.children = he;
      }
      return {
        $$typeof: n,
        type: P.type,
        key: ue,
        ref: ce,
        props: oe,
        _owner: ye,
      };
    }),
    (se.createContext = function (P) {
      return (
        (P = {
          $$typeof: f,
          _currentValue: P,
          _currentValue2: P,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (P.Provider = { $$typeof: d, _context: P }),
        (P.Consumer = P)
      );
    }),
    (se.createElement = te),
    (se.createFactory = function (P) {
      var R = te.bind(null, P);
      return ((R.type = P), R);
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (P) {
      return { $$typeof: p, render: P };
    }),
    (se.isValidElement = Z),
    (se.lazy = function (P) {
      return { $$typeof: g, _payload: { _status: -1, _result: P }, _init: Se };
    }),
    (se.memo = function (P, R) {
      return { $$typeof: y, type: P, compare: R === void 0 ? null : R };
    }),
    (se.startTransition = function (P) {
      var R = F.transition;
      F.transition = {};
      try {
        P();
      } finally {
        F.transition = R;
      }
    }),
    (se.unstable_act = U),
    (se.useCallback = function (P, R) {
      return Ce.current.useCallback(P, R);
    }),
    (se.useContext = function (P) {
      return Ce.current.useContext(P);
    }),
    (se.useDebugValue = function () {}),
    (se.useDeferredValue = function (P) {
      return Ce.current.useDeferredValue(P);
    }),
    (se.useEffect = function (P, R) {
      return Ce.current.useEffect(P, R);
    }),
    (se.useId = function () {
      return Ce.current.useId();
    }),
    (se.useImperativeHandle = function (P, R, re) {
      return Ce.current.useImperativeHandle(P, R, re);
    }),
    (se.useInsertionEffect = function (P, R) {
      return Ce.current.useInsertionEffect(P, R);
    }),
    (se.useLayoutEffect = function (P, R) {
      return Ce.current.useLayoutEffect(P, R);
    }),
    (se.useMemo = function (P, R) {
      return Ce.current.useMemo(P, R);
    }),
    (se.useReducer = function (P, R, re) {
      return Ce.current.useReducer(P, R, re);
    }),
    (se.useRef = function (P) {
      return Ce.current.useRef(P);
    }),
    (se.useState = function (P) {
      return Ce.current.useState(P);
    }),
    (se.useSyncExternalStore = function (P, R, re) {
      return Ce.current.useSyncExternalStore(P, R, re);
    }),
    (se.useTransition = function () {
      return Ce.current.useTransition();
    }),
    (se.version = "18.3.1"),
    se
  );
}
var pd;
function Ul() {
  return (pd || ((pd = 1), (qa.exports = Ty())), qa.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md;
function Py() {
  if (md) return ui;
  md = 1;
  var n = Ul(),
    r = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, y) {
    var g,
      x = {},
      S = null,
      M = null;
    (y !== void 0 && (S = "" + y),
      m.key !== void 0 && (S = "" + m.key),
      m.ref !== void 0 && (M = m.ref));
    for (g in m) a.call(m, g) && !d.hasOwnProperty(g) && (x[g] = m[g]);
    if (p && p.defaultProps)
      for (g in ((m = p.defaultProps), m)) x[g] === void 0 && (x[g] = m[g]);
    return {
      $$typeof: r,
      type: p,
      key: S,
      ref: M,
      props: x,
      _owner: u.current,
    };
  }
  return ((ui.Fragment = s), (ui.jsx = f), (ui.jsxs = f), ui);
}
var gd;
function Ey() {
  return (gd || ((gd = 1), (Qa.exports = Py())), Qa.exports);
}
var w = Ey(),
  Vs = {},
  Za = { exports: {} },
  ut = {},
  Ja = { exports: {} },
  el = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd;
function Cy() {
  return (
    yd ||
      ((yd = 1),
      (function (n) {
        function r(F, G) {
          var U = F.length;
          F.push(G);
          e: for (; 0 < U; ) {
            var P = (U - 1) >>> 1,
              R = F[P];
            if (0 < u(R, G)) ((F[P] = G), (F[U] = R), (U = P));
            else break e;
          }
        }
        function s(F) {
          return F.length === 0 ? null : F[0];
        }
        function a(F) {
          if (F.length === 0) return null;
          var G = F[0],
            U = F.pop();
          if (U !== G) {
            F[0] = U;
            e: for (var P = 0, R = F.length, re = R >>> 1; P < re; ) {
              var oe = 2 * (P + 1) - 1,
                ue = F[oe],
                ce = oe + 1,
                ye = F[ce];
              if (0 > u(ue, U))
                ce < R && 0 > u(ye, ue)
                  ? ((F[P] = ye), (F[ce] = U), (P = ce))
                  : ((F[P] = ue), (F[oe] = U), (P = oe));
              else if (ce < R && 0 > u(ye, U))
                ((F[P] = ye), (F[ce] = U), (P = ce));
              else break e;
            }
          }
          return G;
        }
        function u(F, G) {
          var U = F.sortIndex - G.sortIndex;
          return U !== 0 ? U : F.id - G.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            p = f.now();
          n.unstable_now = function () {
            return f.now() - p;
          };
        }
        var m = [],
          y = [],
          g = 1,
          x = null,
          S = 3,
          M = !1,
          j = !1,
          D = !1,
          A = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          B = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O(F) {
          for (var G = s(y); G !== null; ) {
            if (G.callback === null) a(y);
            else if (G.startTime <= F)
              (a(y), (G.sortIndex = G.expirationTime), r(m, G));
            else break;
            G = s(y);
          }
        }
        function b(F) {
          if (((D = !1), O(F), !j))
            if (s(m) !== null) ((j = !0), Se(q));
            else {
              var G = s(y);
              G !== null && Ce(b, G.startTime - F);
            }
        }
        function q(F, G) {
          ((j = !1), D && ((D = !1), I(te), (te = -1)), (M = !0));
          var U = S;
          try {
            for (
              O(G), x = s(m);
              x !== null && (!(x.expirationTime > G) || (F && !me()));
            ) {
              var P = x.callback;
              if (typeof P == "function") {
                ((x.callback = null), (S = x.priorityLevel));
                var R = P(x.expirationTime <= G);
                ((G = n.unstable_now()),
                  typeof R == "function"
                    ? (x.callback = R)
                    : x === s(m) && a(m),
                  O(G));
              } else a(m);
              x = s(m);
            }
            if (x !== null) var re = !0;
            else {
              var oe = s(y);
              (oe !== null && Ce(b, oe.startTime - G), (re = !1));
            }
            return re;
          } finally {
            ((x = null), (S = U), (M = !1));
          }
        }
        var ae = !1,
          de = null,
          te = -1,
          ge = 5,
          Z = -1;
        function me() {
          return !(n.unstable_now() - Z < ge);
        }
        function we() {
          if (de !== null) {
            var F = n.unstable_now();
            Z = F;
            var G = !0;
            try {
              G = de(!0, F);
            } finally {
              G ? Le() : ((ae = !1), (de = null));
            }
          } else ae = !1;
        }
        var Le;
        if (typeof B == "function")
          Le = function () {
            B(we);
          };
        else if (typeof MessageChannel < "u") {
          var Ae = new MessageChannel(),
            Ie = Ae.port2;
          ((Ae.port1.onmessage = we),
            (Le = function () {
              Ie.postMessage(null);
            }));
        } else
          Le = function () {
            A(we, 0);
          };
        function Se(F) {
          ((de = F), ae || ((ae = !0), Le()));
        }
        function Ce(F, G) {
          te = A(function () {
            F(n.unstable_now());
          }, G);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            j || M || ((j = !0), Se(q));
          }),
          (n.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ge = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(m);
          }),
          (n.unstable_next = function (F) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = S;
            }
            var U = S;
            S = G;
            try {
              return F();
            } finally {
              S = U;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (F, G) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var U = S;
            S = F;
            try {
              return G();
            } finally {
              S = U;
            }
          }),
          (n.unstable_scheduleCallback = function (F, G, U) {
            var P = n.unstable_now();
            switch (
              (typeof U == "object" && U !== null
                ? ((U = U.delay),
                  (U = typeof U == "number" && 0 < U ? P + U : P))
                : (U = P),
              F)
            ) {
              case 1:
                var R = -1;
                break;
              case 2:
                R = 250;
                break;
              case 5:
                R = 1073741823;
                break;
              case 4:
                R = 1e4;
                break;
              default:
                R = 5e3;
            }
            return (
              (R = U + R),
              (F = {
                id: g++,
                callback: G,
                priorityLevel: F,
                startTime: U,
                expirationTime: R,
                sortIndex: -1,
              }),
              U > P
                ? ((F.sortIndex = U),
                  r(y, F),
                  s(m) === null &&
                    F === s(y) &&
                    (D ? (I(te), (te = -1)) : (D = !0), Ce(b, U - P)))
                : ((F.sortIndex = R), r(m, F), j || M || ((j = !0), Se(q))),
              F
            );
          }),
          (n.unstable_shouldYield = me),
          (n.unstable_wrapCallback = function (F) {
            var G = S;
            return function () {
              var U = S;
              S = G;
              try {
                return F.apply(this, arguments);
              } finally {
                S = U;
              }
            };
          }));
      })(el)),
    el
  );
}
var vd;
function Ny() {
  return (vd || ((vd = 1), (Ja.exports = Cy())), Ja.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xd;
function My() {
  if (xd) return ut;
  xd = 1;
  var n = Ul(),
    r = Ny();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        i = 1;
      i < arguments.length;
      i++
    )
      t += "&args[]=" + encodeURIComponent(arguments[i]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var a = new Set(),
    u = {};
  function d(e, t) {
    (f(e, t), f(e + "Capture", t));
  }
  function f(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var p = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    y =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    x = {};
  function S(e) {
    return m.call(x, e)
      ? !0
      : m.call(g, e)
        ? !1
        : y.test(e)
          ? (x[e] = !0)
          : ((g[e] = !0), !1);
  }
  function M(e, t, i, o) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o
          ? !1
          : i !== null
            ? !i.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function j(e, t, i, o) {
    if (t === null || typeof t > "u" || M(e, t, i, o)) return !0;
    if (o) return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function D(e, t, i, o, l, c, h) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = l),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = h));
  }
  var A = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      A[e] = new D(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      A[t] = new D(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        A[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      A[e] = new D(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        A[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      A[e] = new D(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      A[e] = new D(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      A[e] = new D(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      A[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var I = /[\-:]([a-z])/g;
  function B(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(I, B);
      A[t] = new D(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(I, B);
        A[t] = new D(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(I, B);
      A[t] = new D(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      A[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (A.xlinkHref = new D(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      A[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function O(e, t, i, o) {
    var l = A.hasOwnProperty(t) ? A[t] : null;
    (l !== null
      ? l.type !== 0
      : o ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (j(t, i, l, o) && (i = null),
      o || l === null
        ? S(t) &&
          (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i))
        : l.mustUseProperty
          ? (e[l.propertyName] = i === null ? (l.type === 3 ? !1 : "") : i)
          : ((t = l.attributeName),
            (o = l.attributeNamespace),
            i === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (i = l === 3 || (l === 4 && i === !0) ? "" : "" + i),
                o ? e.setAttributeNS(o, t, i) : e.setAttribute(t, i))));
  }
  var b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    q = Symbol.for("react.element"),
    ae = Symbol.for("react.portal"),
    de = Symbol.for("react.fragment"),
    te = Symbol.for("react.strict_mode"),
    ge = Symbol.for("react.profiler"),
    Z = Symbol.for("react.provider"),
    me = Symbol.for("react.context"),
    we = Symbol.for("react.forward_ref"),
    Le = Symbol.for("react.suspense"),
    Ae = Symbol.for("react.suspense_list"),
    Ie = Symbol.for("react.memo"),
    Se = Symbol.for("react.lazy"),
    Ce = Symbol.for("react.offscreen"),
    F = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (F && e[F]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var U = Object.assign,
    P;
  function R(e) {
    if (P === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        P = (t && t[1]) || "";
      }
    return (
      `
` +
      P +
      e
    );
  }
  var re = !1;
  function oe(e, t) {
    if (!e || re) return "";
    re = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (N) {
            var o = N;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (N) {
            o = N;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (N) {
          o = N;
        }
        e();
      }
    } catch (N) {
      if (N && o && typeof N.stack == "string") {
        for (
          var l = N.stack.split(`
`),
            c = o.stack.split(`
`),
            h = l.length - 1,
            v = c.length - 1;
          1 <= h && 0 <= v && l[h] !== c[v];
        )
          v--;
        for (; 1 <= h && 0 <= v; h--, v--)
          if (l[h] !== c[v]) {
            if (h !== 1 || v !== 1)
              do
                if ((h--, v--, 0 > v || l[h] !== c[v])) {
                  var k =
                    `
` + l[h].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      k.includes("<anonymous>") &&
                      (k = k.replace("<anonymous>", e.displayName)),
                    k
                  );
                }
              while (1 <= h && 0 <= v);
            break;
          }
      }
    } finally {
      ((re = !1), (Error.prepareStackTrace = i));
    }
    return (e = e ? e.displayName || e.name : "") ? R(e) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return R(e.type);
      case 16:
        return R("Lazy");
      case 13:
        return R("Suspense");
      case 19:
        return R("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = oe(e.type, !1)), e);
      case 11:
        return ((e = oe(e.type.render, !1)), e);
      case 1:
        return ((e = oe(e.type, !0)), e);
      default:
        return "";
    }
  }
  function ce(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case de:
        return "Fragment";
      case ae:
        return "Portal";
      case ge:
        return "Profiler";
      case te:
        return "StrictMode";
      case Le:
        return "Suspense";
      case Ae:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case me:
          return (e.displayName || "Context") + ".Consumer";
        case Z:
          return (e._context.displayName || "Context") + ".Provider";
        case we:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ie:
          return (
            (t = e.displayName || null),
            t !== null ? t : ce(e.type) || "Memo"
          );
        case Se:
          ((t = e._payload), (e = e._init));
          try {
            return ce(e(t));
          } catch {}
      }
    return null;
  }
  function ye(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ce(t);
      case 8:
        return t === te ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function he(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Pe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ct(e) {
    var t = Pe(e) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var l = i.get,
        c = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (h) {
            ((o = "" + h), c.call(this, h));
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (h) {
            o = "" + h;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Pi(e) {
    e._valueTracker || (e._valueTracker = ct(e));
  }
  function vu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      o = "";
    return (
      e && (o = Pe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== i ? (t.setValue(e), !0) : !1
    );
  }
  function Ei(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function no(e, t) {
    var i = t.checked;
    return U({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function xu(e, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    ((i = he(t.value != null ? t.value : i)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: i,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function wu(e, t) {
    ((t = t.checked), t != null && O(e, "checked", t, !1));
  }
  function ro(e, t) {
    wu(e, t);
    var i = he(t.value),
      o = t.type;
    if (i != null)
      o === "number"
        ? ((i === 0 && e.value === "") || e.value != i) && (e.value = "" + i)
        : e.value !== "" + i && (e.value = "" + i);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? io(e, t.type, i)
      : t.hasOwnProperty("defaultValue") && io(e, t.type, he(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Su(e, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (
        !(
          (o !== "submit" && o !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        i || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((i = e.name),
      i !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      i !== "" && (e.name = i));
  }
  function io(e, t, i) {
    (t !== "number" || Ei(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var Pr = Array.isArray;
  function bn(e, t, i, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < i.length; l++) t["$" + i[l]] = !0;
      for (i = 0; i < e.length; i++)
        ((l = t.hasOwnProperty("$" + e[i].value)),
          e[i].selected !== l && (e[i].selected = l),
          l && o && (e[i].defaultSelected = !0));
    } else {
      for (i = "" + he(i), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === i) {
          ((e[l].selected = !0), o && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function so(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return U({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ku(e, t) {
    var i = t.value;
    if (i == null) {
      if (((i = t.children), (t = t.defaultValue), i != null)) {
        if (t != null) throw Error(s(92));
        if (Pr(i)) {
          if (1 < i.length) throw Error(s(93));
          i = i[0];
        }
        t = i;
      }
      (t == null && (t = ""), (i = t));
    }
    e._wrapperState = { initialValue: he(i) };
  }
  function Tu(e, t) {
    var i = he(t.value),
      o = he(t.defaultValue);
    (i != null &&
      ((i = "" + i),
      i !== e.value && (e.value = i),
      t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      o != null && (e.defaultValue = "" + o));
  }
  function Pu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Eu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function oo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Eu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Ci,
    Cu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, i, o, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, i, o, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ci = Ci || document.createElement("div"),
            Ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ci.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Er(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Cr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Nm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Cr).forEach(function (e) {
    Nm.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cr[t] = Cr[e]));
    });
  });
  function Nu(e, t, i) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : i || typeof t != "number" || t === 0 || (Cr.hasOwnProperty(e) && Cr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Mu(e, t) {
    e = e.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var o = i.indexOf("--") === 0,
          l = Nu(i, t[i], o);
        (i === "float" && (i = "cssFloat"),
          o ? e.setProperty(i, l) : (e[i] = l));
      }
  }
  var Mm = U(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function ao(e, t) {
    if (t) {
      if (Mm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function lo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var uo = null;
  function co(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var fo = null,
    Un = null,
    Wn = null;
  function ju(e) {
    if ((e = Xr(e))) {
      if (typeof fo != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Yi(t)), fo(e.stateNode, e.type, t));
    }
  }
  function Au(e) {
    Un ? (Wn ? Wn.push(e) : (Wn = [e])) : (Un = e);
  }
  function Du() {
    if (Un) {
      var e = Un,
        t = Wn;
      if (((Wn = Un = null), ju(e), t)) for (e = 0; e < t.length; e++) ju(t[e]);
    }
  }
  function Ru(e, t) {
    return e(t);
  }
  function Lu() {}
  var ho = !1;
  function Vu(e, t, i) {
    if (ho) return e(t, i);
    ho = !0;
    try {
      return Ru(e, t, i);
    } finally {
      ((ho = !1), (Un !== null || Wn !== null) && (Lu(), Du()));
    }
  }
  function Nr(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = Yi(i);
    if (o === null) return null;
    i = o[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((o = !o.disabled) ||
          ((e = e.type),
          (o = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !o));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(s(231, t, typeof i));
    return i;
  }
  var po = !1;
  if (p)
    try {
      var Mr = {};
      (Object.defineProperty(Mr, "passive", {
        get: function () {
          po = !0;
        },
      }),
        window.addEventListener("test", Mr, Mr),
        window.removeEventListener("test", Mr, Mr));
    } catch {
      po = !1;
    }
  function jm(e, t, i, o, l, c, h, v, k) {
    var N = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, N);
    } catch (V) {
      this.onError(V);
    }
  }
  var jr = !1,
    Ni = null,
    Mi = !1,
    mo = null,
    Am = {
      onError: function (e) {
        ((jr = !0), (Ni = e));
      },
    };
  function Dm(e, t, i, o, l, c, h, v, k) {
    ((jr = !1), (Ni = null), jm.apply(Am, arguments));
  }
  function Rm(e, t, i, o, l, c, h, v, k) {
    if ((Dm.apply(this, arguments), jr)) {
      if (jr) {
        var N = Ni;
        ((jr = !1), (Ni = null));
      } else throw Error(s(198));
      Mi || ((Mi = !0), (mo = N));
    }
  }
  function kn(e) {
    var t = e,
      i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (i = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function _u(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Iu(e) {
    if (kn(e) !== e) throw Error(s(188));
  }
  function Lm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = kn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var i = e, o = t; ; ) {
      var l = i.return;
      if (l === null) break;
      var c = l.alternate;
      if (c === null) {
        if (((o = l.return), o !== null)) {
          i = o;
          continue;
        }
        break;
      }
      if (l.child === c.child) {
        for (c = l.child; c; ) {
          if (c === i) return (Iu(l), e);
          if (c === o) return (Iu(l), t);
          c = c.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== o.return) ((i = l), (o = c));
      else {
        for (var h = !1, v = l.child; v; ) {
          if (v === i) {
            ((h = !0), (i = l), (o = c));
            break;
          }
          if (v === o) {
            ((h = !0), (o = l), (i = c));
            break;
          }
          v = v.sibling;
        }
        if (!h) {
          for (v = c.child; v; ) {
            if (v === i) {
              ((h = !0), (i = c), (o = l));
              break;
            }
            if (v === o) {
              ((h = !0), (o = c), (i = l));
              break;
            }
            v = v.sibling;
          }
          if (!h) throw Error(s(189));
        }
      }
      if (i.alternate !== o) throw Error(s(190));
    }
    if (i.tag !== 3) throw Error(s(188));
    return i.stateNode.current === i ? e : t;
  }
  function Fu(e) {
    return ((e = Lm(e)), e !== null ? zu(e) : null);
  }
  function zu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = zu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ou = r.unstable_scheduleCallback,
    Bu = r.unstable_cancelCallback,
    Vm = r.unstable_shouldYield,
    _m = r.unstable_requestPaint,
    Ve = r.unstable_now,
    Im = r.unstable_getCurrentPriorityLevel,
    go = r.unstable_ImmediatePriority,
    bu = r.unstable_UserBlockingPriority,
    ji = r.unstable_NormalPriority,
    Fm = r.unstable_LowPriority,
    Uu = r.unstable_IdlePriority,
    Ai = null,
    Vt = null;
  function zm(e) {
    if (Vt && typeof Vt.onCommitFiberRoot == "function")
      try {
        Vt.onCommitFiberRoot(Ai, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Pt = Math.clz32 ? Math.clz32 : bm,
    Om = Math.log,
    Bm = Math.LN2;
  function bm(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Om(e) / Bm) | 0)) | 0);
  }
  var Di = 64,
    Ri = 4194304;
  function Ar(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Li(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0,
      l = e.suspendedLanes,
      c = e.pingedLanes,
      h = i & 268435455;
    if (h !== 0) {
      var v = h & ~l;
      v !== 0 ? (o = Ar(v)) : ((c &= h), c !== 0 && (o = Ar(c)));
    } else ((h = i & ~l), h !== 0 ? (o = Ar(h)) : c !== 0 && (o = Ar(c)));
    if (o === 0) return 0;
    if (
      t !== 0 &&
      t !== o &&
      (t & l) === 0 &&
      ((l = o & -o), (c = t & -t), l >= c || (l === 16 && (c & 4194240) !== 0))
    )
      return t;
    if (((o & 4) !== 0 && (o |= i & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t; )
        ((i = 31 - Pt(t)), (l = 1 << i), (o |= e[i]), (t &= ~l));
    return o;
  }
  function Um(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Wm(e, t) {
    for (
      var i = e.suspendedLanes,
        o = e.pingedLanes,
        l = e.expirationTimes,
        c = e.pendingLanes;
      0 < c;
    ) {
      var h = 31 - Pt(c),
        v = 1 << h,
        k = l[h];
      (k === -1
        ? ((v & i) === 0 || (v & o) !== 0) && (l[h] = Um(v, t))
        : k <= t && (e.expiredLanes |= v),
        (c &= ~v));
    }
  }
  function yo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Wu() {
    var e = Di;
    return ((Di <<= 1), (Di & 4194240) === 0 && (Di = 64), e);
  }
  function vo(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function Dr(e, t, i) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Pt(t)),
      (e[t] = i));
  }
  function Hm(e, t) {
    var i = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var l = 31 - Pt(i),
        c = 1 << l;
      ((t[l] = 0), (o[l] = -1), (e[l] = -1), (i &= ~c));
    }
  }
  function xo(e, t) {
    var i = (e.entangledLanes |= t);
    for (e = e.entanglements; i; ) {
      var o = 31 - Pt(i),
        l = 1 << o;
      ((l & t) | (e[o] & t) && (e[o] |= t), (i &= ~l));
    }
  }
  var pe = 0;
  function Hu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var $u,
    wo,
    Ku,
    Gu,
    Xu,
    So = !1,
    Vi = [],
    Qt = null,
    qt = null,
    Zt = null,
    Rr = new Map(),
    Lr = new Map(),
    Jt = [],
    $m =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Yu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Qt = null;
        break;
      case "dragenter":
      case "dragleave":
        qt = null;
        break;
      case "mouseover":
      case "mouseout":
        Zt = null;
        break;
      case "pointerover":
      case "pointerout":
        Rr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Lr.delete(t.pointerId);
    }
  }
  function Vr(e, t, i, o, l, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: i,
          eventSystemFlags: o,
          nativeEvent: c,
          targetContainers: [l],
        }),
        t !== null && ((t = Xr(t)), t !== null && wo(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Km(e, t, i, o, l) {
    switch (t) {
      case "focusin":
        return ((Qt = Vr(Qt, e, t, i, o, l)), !0);
      case "dragenter":
        return ((qt = Vr(qt, e, t, i, o, l)), !0);
      case "mouseover":
        return ((Zt = Vr(Zt, e, t, i, o, l)), !0);
      case "pointerover":
        var c = l.pointerId;
        return (Rr.set(c, Vr(Rr.get(c) || null, e, t, i, o, l)), !0);
      case "gotpointercapture":
        return (
          (c = l.pointerId),
          Lr.set(c, Vr(Lr.get(c) || null, e, t, i, o, l)),
          !0
        );
    }
    return !1;
  }
  function Qu(e) {
    var t = Tn(e.target);
    if (t !== null) {
      var i = kn(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = _u(i)), t !== null)) {
            ((e.blockedOn = t),
              Xu(e.priority, function () {
                Ku(i);
              }));
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function _i(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = To(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(i.type, i);
        ((uo = o), i.target.dispatchEvent(o), (uo = null));
      } else return ((t = Xr(i)), t !== null && wo(t), (e.blockedOn = i), !1);
      t.shift();
    }
    return !0;
  }
  function qu(e, t, i) {
    _i(e) && i.delete(t);
  }
  function Gm() {
    ((So = !1),
      Qt !== null && _i(Qt) && (Qt = null),
      qt !== null && _i(qt) && (qt = null),
      Zt !== null && _i(Zt) && (Zt = null),
      Rr.forEach(qu),
      Lr.forEach(qu));
  }
  function _r(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      So ||
        ((So = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, Gm)));
  }
  function Ir(e) {
    function t(l) {
      return _r(l, e);
    }
    if (0 < Vi.length) {
      _r(Vi[0], e);
      for (var i = 1; i < Vi.length; i++) {
        var o = Vi[i];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      Qt !== null && _r(Qt, e),
        qt !== null && _r(qt, e),
        Zt !== null && _r(Zt, e),
        Rr.forEach(t),
        Lr.forEach(t),
        i = 0;
      i < Jt.length;
      i++
    )
      ((o = Jt[i]), o.blockedOn === e && (o.blockedOn = null));
    for (; 0 < Jt.length && ((i = Jt[0]), i.blockedOn === null); )
      (Qu(i), i.blockedOn === null && Jt.shift());
  }
  var Hn = b.ReactCurrentBatchConfig,
    Ii = !0;
  function Xm(e, t, i, o) {
    var l = pe,
      c = Hn.transition;
    Hn.transition = null;
    try {
      ((pe = 1), ko(e, t, i, o));
    } finally {
      ((pe = l), (Hn.transition = c));
    }
  }
  function Ym(e, t, i, o) {
    var l = pe,
      c = Hn.transition;
    Hn.transition = null;
    try {
      ((pe = 4), ko(e, t, i, o));
    } finally {
      ((pe = l), (Hn.transition = c));
    }
  }
  function ko(e, t, i, o) {
    if (Ii) {
      var l = To(e, t, i, o);
      if (l === null) (Bo(e, t, o, Fi, i), Yu(e, o));
      else if (Km(l, e, t, i, o)) o.stopPropagation();
      else if ((Yu(e, o), t & 4 && -1 < $m.indexOf(e))) {
        for (; l !== null; ) {
          var c = Xr(l);
          if (
            (c !== null && $u(c),
            (c = To(e, t, i, o)),
            c === null && Bo(e, t, o, Fi, i),
            c === l)
          )
            break;
          l = c;
        }
        l !== null && o.stopPropagation();
      } else Bo(e, t, o, null, i);
    }
  }
  var Fi = null;
  function To(e, t, i, o) {
    if (((Fi = null), (e = co(o)), (e = Tn(e)), e !== null))
      if (((t = kn(e)), t === null)) e = null;
      else if (((i = t.tag), i === 13)) {
        if (((e = _u(t)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Fi = e), null);
  }
  function Zu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Im()) {
          case go:
            return 1;
          case bu:
            return 4;
          case ji:
          case Fm:
            return 16;
          case Uu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var en = null,
    Po = null,
    zi = null;
  function Ju() {
    if (zi) return zi;
    var e,
      t = Po,
      i = t.length,
      o,
      l = "value" in en ? en.value : en.textContent,
      c = l.length;
    for (e = 0; e < i && t[e] === l[e]; e++);
    var h = i - e;
    for (o = 1; o <= h && t[i - o] === l[c - o]; o++);
    return (zi = l.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Oi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Bi() {
    return !0;
  }
  function ec() {
    return !1;
  }
  function ft(e) {
    function t(i, o, l, c, h) {
      ((this._reactName = i),
        (this._targetInst = l),
        (this.type = o),
        (this.nativeEvent = c),
        (this.target = h),
        (this.currentTarget = null));
      for (var v in e)
        e.hasOwnProperty(v) && ((i = e[v]), (this[v] = i ? i(c) : c[v]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Bi
          : ec),
        (this.isPropagationStopped = ec),
        this
      );
    }
    return (
      U(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = Bi));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = Bi));
        },
        persist: function () {},
        isPersistent: Bi,
      }),
      t
    );
  }
  var $n = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Eo = ft($n),
    Fr = U({}, $n, { view: 0, detail: 0 }),
    Qm = ft(Fr),
    Co,
    No,
    zr,
    bi = U({}, Fr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: jo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== zr &&
              (zr && e.type === "mousemove"
                ? ((Co = e.screenX - zr.screenX), (No = e.screenY - zr.screenY))
                : (No = Co = 0),
              (zr = e)),
            Co);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : No;
      },
    }),
    tc = ft(bi),
    qm = U({}, bi, { dataTransfer: 0 }),
    Zm = ft(qm),
    Jm = U({}, Fr, { relatedTarget: 0 }),
    Mo = ft(Jm),
    eg = U({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    tg = ft(eg),
    ng = U({}, $n, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    rg = ft(ng),
    ig = U({}, $n, { data: 0 }),
    nc = ft(ig),
    sg = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    og = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    ag = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function lg(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = ag[e])
        ? !!t[e]
        : !1;
  }
  function jo() {
    return lg;
  }
  var ug = U({}, Fr, {
      key: function (e) {
        if (e.key) {
          var t = sg[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Oi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? og[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: jo,
      charCode: function (e) {
        return e.type === "keypress" ? Oi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Oi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    cg = ft(ug),
    fg = U({}, bi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    rc = ft(fg),
    dg = U({}, Fr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: jo,
    }),
    hg = ft(dg),
    pg = U({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mg = ft(pg),
    gg = U({}, bi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    yg = ft(gg),
    vg = [9, 13, 27, 32],
    Ao = p && "CompositionEvent" in window,
    Or = null;
  p && "documentMode" in document && (Or = document.documentMode);
  var xg = p && "TextEvent" in window && !Or,
    ic = p && (!Ao || (Or && 8 < Or && 11 >= Or)),
    sc = " ",
    oc = !1;
  function ac(e, t) {
    switch (e) {
      case "keyup":
        return vg.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function lc(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Kn = !1;
  function wg(e, t) {
    switch (e) {
      case "compositionend":
        return lc(t);
      case "keypress":
        return t.which !== 32 ? null : ((oc = !0), sc);
      case "textInput":
        return ((e = t.data), e === sc && oc ? null : e);
      default:
        return null;
    }
  }
  function Sg(e, t) {
    if (Kn)
      return e === "compositionend" || (!Ao && ac(e, t))
        ? ((e = Ju()), (zi = Po = en = null), (Kn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ic && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var kg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function uc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!kg[e.type] : t === "textarea";
  }
  function cc(e, t, i, o) {
    (Au(o),
      (t = Ki(t, "onChange")),
      0 < t.length &&
        ((i = new Eo("onChange", "change", null, i, o)),
        e.push({ event: i, listeners: t })));
  }
  var Br = null,
    br = null;
  function Tg(e) {
    Mc(e, 0);
  }
  function Ui(e) {
    var t = qn(e);
    if (vu(t)) return e;
  }
  function Pg(e, t) {
    if (e === "change") return t;
  }
  var fc = !1;
  if (p) {
    var Do;
    if (p) {
      var Ro = "oninput" in document;
      if (!Ro) {
        var dc = document.createElement("div");
        (dc.setAttribute("oninput", "return;"),
          (Ro = typeof dc.oninput == "function"));
      }
      Do = Ro;
    } else Do = !1;
    fc = Do && (!document.documentMode || 9 < document.documentMode);
  }
  function hc() {
    Br && (Br.detachEvent("onpropertychange", pc), (br = Br = null));
  }
  function pc(e) {
    if (e.propertyName === "value" && Ui(br)) {
      var t = [];
      (cc(t, br, e, co(e)), Vu(Tg, t));
    }
  }
  function Eg(e, t, i) {
    e === "focusin"
      ? (hc(), (Br = t), (br = i), Br.attachEvent("onpropertychange", pc))
      : e === "focusout" && hc();
  }
  function Cg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ui(br);
  }
  function Ng(e, t) {
    if (e === "click") return Ui(t);
  }
  function Mg(e, t) {
    if (e === "input" || e === "change") return Ui(t);
  }
  function jg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Et = typeof Object.is == "function" ? Object.is : jg;
  function Ur(e, t) {
    if (Et(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var i = Object.keys(e),
      o = Object.keys(t);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var l = i[o];
      if (!m.call(t, l) || !Et(e[l], t[l])) return !1;
    }
    return !0;
  }
  function mc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function gc(e, t) {
    var i = mc(e);
    e = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (((o = e + i.textContent.length), e <= t && o >= t))
          return { node: i, offset: t - e };
        e = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = mc(i);
    }
  }
  function yc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? yc(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function vc() {
    for (var e = window, t = Ei(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = Ei(e.document);
    }
    return t;
  }
  function Lo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Ag(e) {
    var t = vc(),
      i = e.focusedElem,
      o = e.selectionRange;
    if (
      t !== i &&
      i &&
      i.ownerDocument &&
      yc(i.ownerDocument.documentElement, i)
    ) {
      if (o !== null && Lo(i)) {
        if (
          ((t = o.start),
          (e = o.end),
          e === void 0 && (e = t),
          "selectionStart" in i)
        )
          ((i.selectionStart = t),
            (i.selectionEnd = Math.min(e, i.value.length)));
        else if (
          ((e = ((t = i.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = i.textContent.length,
            c = Math.min(o.start, l);
          ((o = o.end === void 0 ? c : Math.min(o.end, l)),
            !e.extend && c > o && ((l = o), (o = c), (c = l)),
            (l = gc(i, c)));
          var h = gc(i, o);
          l &&
            h &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== h.node ||
              e.focusOffset !== h.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            c > o
              ? (e.addRange(t), e.extend(h.node, h.offset))
              : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = i; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++)
        ((e = t[i]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Dg = p && "documentMode" in document && 11 >= document.documentMode,
    Gn = null,
    Vo = null,
    Wr = null,
    _o = !1;
  function xc(e, t, i) {
    var o =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    _o ||
      Gn == null ||
      Gn !== Ei(o) ||
      ((o = Gn),
      "selectionStart" in o && Lo(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Wr && Ur(Wr, o)) ||
        ((Wr = o),
        (o = Ki(Vo, "onSelect")),
        0 < o.length &&
          ((t = new Eo("onSelect", "select", null, t, i)),
          e.push({ event: t, listeners: o }),
          (t.target = Gn))));
  }
  function Wi(e, t) {
    var i = {};
    return (
      (i[e.toLowerCase()] = t.toLowerCase()),
      (i["Webkit" + e] = "webkit" + t),
      (i["Moz" + e] = "moz" + t),
      i
    );
  }
  var Xn = {
      animationend: Wi("Animation", "AnimationEnd"),
      animationiteration: Wi("Animation", "AnimationIteration"),
      animationstart: Wi("Animation", "AnimationStart"),
      transitionend: Wi("Transition", "TransitionEnd"),
    },
    Io = {},
    wc = {};
  p &&
    ((wc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Xn.animationend.animation,
      delete Xn.animationiteration.animation,
      delete Xn.animationstart.animation),
    "TransitionEvent" in window || delete Xn.transitionend.transition);
  function Hi(e) {
    if (Io[e]) return Io[e];
    if (!Xn[e]) return e;
    var t = Xn[e],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in wc) return (Io[e] = t[i]);
    return e;
  }
  var Sc = Hi("animationend"),
    kc = Hi("animationiteration"),
    Tc = Hi("animationstart"),
    Pc = Hi("transitionend"),
    Ec = new Map(),
    Cc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function tn(e, t) {
    (Ec.set(e, t), d(t, [e]));
  }
  for (var Fo = 0; Fo < Cc.length; Fo++) {
    var zo = Cc[Fo],
      Rg = zo.toLowerCase(),
      Lg = zo[0].toUpperCase() + zo.slice(1);
    tn(Rg, "on" + Lg);
  }
  (tn(Sc, "onAnimationEnd"),
    tn(kc, "onAnimationIteration"),
    tn(Tc, "onAnimationStart"),
    tn("dblclick", "onDoubleClick"),
    tn("focusin", "onFocus"),
    tn("focusout", "onBlur"),
    tn(Pc, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Hr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Vg = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Hr),
    );
  function Nc(e, t, i) {
    var o = e.type || "unknown-event";
    ((e.currentTarget = i), Rm(o, t, void 0, e), (e.currentTarget = null));
  }
  function Mc(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i],
        l = o.event;
      o = o.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var h = o.length - 1; 0 <= h; h--) {
            var v = o[h],
              k = v.instance,
              N = v.currentTarget;
            if (((v = v.listener), k !== c && l.isPropagationStopped()))
              break e;
            (Nc(l, v, N), (c = k));
          }
        else
          for (h = 0; h < o.length; h++) {
            if (
              ((v = o[h]),
              (k = v.instance),
              (N = v.currentTarget),
              (v = v.listener),
              k !== c && l.isPropagationStopped())
            )
              break e;
            (Nc(l, v, N), (c = k));
          }
      }
    }
    if (Mi) throw ((e = mo), (Mi = !1), (mo = null), e);
  }
  function ke(e, t) {
    var i = t[Ko];
    i === void 0 && (i = t[Ko] = new Set());
    var o = e + "__bubble";
    i.has(o) || (jc(t, e, 2, !1), i.add(o));
  }
  function Oo(e, t, i) {
    var o = 0;
    (t && (o |= 4), jc(i, e, o, t));
  }
  var $i = "_reactListening" + Math.random().toString(36).slice(2);
  function $r(e) {
    if (!e[$i]) {
      ((e[$i] = !0),
        a.forEach(function (i) {
          i !== "selectionchange" && (Vg.has(i) || Oo(i, !1, e), Oo(i, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$i] || ((t[$i] = !0), Oo("selectionchange", !1, t));
    }
  }
  function jc(e, t, i, o) {
    switch (Zu(t)) {
      case 1:
        var l = Xm;
        break;
      case 4:
        l = Ym;
        break;
      default:
        l = ko;
    }
    ((i = l.bind(null, t, i, e)),
      (l = void 0),
      !po ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      o
        ? l !== void 0
          ? e.addEventListener(t, i, { capture: !0, passive: l })
          : e.addEventListener(t, i, !0)
        : l !== void 0
          ? e.addEventListener(t, i, { passive: l })
          : e.addEventListener(t, i, !1));
  }
  function Bo(e, t, i, o, l) {
    var c = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var h = o.tag;
        if (h === 3 || h === 4) {
          var v = o.stateNode.containerInfo;
          if (v === l || (v.nodeType === 8 && v.parentNode === l)) break;
          if (h === 4)
            for (h = o.return; h !== null; ) {
              var k = h.tag;
              if (
                (k === 3 || k === 4) &&
                ((k = h.stateNode.containerInfo),
                k === l || (k.nodeType === 8 && k.parentNode === l))
              )
                return;
              h = h.return;
            }
          for (; v !== null; ) {
            if (((h = Tn(v)), h === null)) return;
            if (((k = h.tag), k === 5 || k === 6)) {
              o = c = h;
              continue e;
            }
            v = v.parentNode;
          }
        }
        o = o.return;
      }
    Vu(function () {
      var N = c,
        V = co(i),
        _ = [];
      e: {
        var L = Ec.get(e);
        if (L !== void 0) {
          var W = Eo,
            $ = e;
          switch (e) {
            case "keypress":
              if (Oi(i) === 0) break e;
            case "keydown":
            case "keyup":
              W = cg;
              break;
            case "focusin":
              (($ = "focus"), (W = Mo));
              break;
            case "focusout":
              (($ = "blur"), (W = Mo));
              break;
            case "beforeblur":
            case "afterblur":
              W = Mo;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              W = tc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = Zm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = hg;
              break;
            case Sc:
            case kc:
            case Tc:
              W = tg;
              break;
            case Pc:
              W = mg;
              break;
            case "scroll":
              W = Qm;
              break;
            case "wheel":
              W = yg;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = rg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = rc;
          }
          var X = (t & 4) !== 0,
            _e = !X && e === "scroll",
            E = X ? (L !== null ? L + "Capture" : null) : L;
          X = [];
          for (var T = N, C; T !== null; ) {
            C = T;
            var z = C.stateNode;
            if (
              (C.tag === 5 &&
                z !== null &&
                ((C = z),
                E !== null &&
                  ((z = Nr(T, E)), z != null && X.push(Kr(T, z, C)))),
              _e)
            )
              break;
            T = T.return;
          }
          0 < X.length &&
            ((L = new W(L, $, null, i, V)), _.push({ event: L, listeners: X }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (W = e === "mouseout" || e === "pointerout"),
            L &&
              i !== uo &&
              ($ = i.relatedTarget || i.fromElement) &&
              (Tn($) || $[Ut]))
          )
            break e;
          if (
            (W || L) &&
            ((L =
              V.window === V
                ? V
                : (L = V.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            W
              ? (($ = i.relatedTarget || i.toElement),
                (W = N),
                ($ = $ ? Tn($) : null),
                $ !== null &&
                  ((_e = kn($)), $ !== _e || ($.tag !== 5 && $.tag !== 6)) &&
                  ($ = null))
              : ((W = null), ($ = N)),
            W !== $)
          ) {
            if (
              ((X = tc),
              (z = "onMouseLeave"),
              (E = "onMouseEnter"),
              (T = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((X = rc),
                (z = "onPointerLeave"),
                (E = "onPointerEnter"),
                (T = "pointer")),
              (_e = W == null ? L : qn(W)),
              (C = $ == null ? L : qn($)),
              (L = new X(z, T + "leave", W, i, V)),
              (L.target = _e),
              (L.relatedTarget = C),
              (z = null),
              Tn(V) === N &&
                ((X = new X(E, T + "enter", $, i, V)),
                (X.target = C),
                (X.relatedTarget = _e),
                (z = X)),
              (_e = z),
              W && $)
            )
              t: {
                for (X = W, E = $, T = 0, C = X; C; C = Yn(C)) T++;
                for (C = 0, z = E; z; z = Yn(z)) C++;
                for (; 0 < T - C; ) ((X = Yn(X)), T--);
                for (; 0 < C - T; ) ((E = Yn(E)), C--);
                for (; T--; ) {
                  if (X === E || (E !== null && X === E.alternate)) break t;
                  ((X = Yn(X)), (E = Yn(E)));
                }
                X = null;
              }
            else X = null;
            (W !== null && Ac(_, L, W, X, !1),
              $ !== null && _e !== null && Ac(_, _e, $, X, !0));
          }
        }
        e: {
          if (
            ((L = N ? qn(N) : window),
            (W = L.nodeName && L.nodeName.toLowerCase()),
            W === "select" || (W === "input" && L.type === "file"))
          )
            var Y = Pg;
          else if (uc(L))
            if (fc) Y = Mg;
            else {
              Y = Cg;
              var J = Eg;
            }
          else
            (W = L.nodeName) &&
              W.toLowerCase() === "input" &&
              (L.type === "checkbox" || L.type === "radio") &&
              (Y = Ng);
          if (Y && (Y = Y(e, N))) {
            cc(_, Y, i, V);
            break e;
          }
          (J && J(e, L, N),
            e === "focusout" &&
              (J = L._wrapperState) &&
              J.controlled &&
              L.type === "number" &&
              io(L, "number", L.value));
        }
        switch (((J = N ? qn(N) : window), e)) {
          case "focusin":
            (uc(J) || J.contentEditable === "true") &&
              ((Gn = J), (Vo = N), (Wr = null));
            break;
          case "focusout":
            Wr = Vo = Gn = null;
            break;
          case "mousedown":
            _o = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((_o = !1), xc(_, i, V));
            break;
          case "selectionchange":
            if (Dg) break;
          case "keydown":
          case "keyup":
            xc(_, i, V);
        }
        var ee;
        if (Ao)
          e: {
            switch (e) {
              case "compositionstart":
                var ne = "onCompositionStart";
                break e;
              case "compositionend":
                ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ne = "onCompositionUpdate";
                break e;
            }
            ne = void 0;
          }
        else
          Kn
            ? ac(e, i) && (ne = "onCompositionEnd")
            : e === "keydown" &&
              i.keyCode === 229 &&
              (ne = "onCompositionStart");
        (ne &&
          (ic &&
            i.locale !== "ko" &&
            (Kn || ne !== "onCompositionStart"
              ? ne === "onCompositionEnd" && Kn && (ee = Ju())
              : ((en = V),
                (Po = "value" in en ? en.value : en.textContent),
                (Kn = !0))),
          (J = Ki(N, ne)),
          0 < J.length &&
            ((ne = new nc(ne, e, null, i, V)),
            _.push({ event: ne, listeners: J }),
            ee
              ? (ne.data = ee)
              : ((ee = lc(i)), ee !== null && (ne.data = ee)))),
          (ee = xg ? wg(e, i) : Sg(e, i)) &&
            ((N = Ki(N, "onBeforeInput")),
            0 < N.length &&
              ((V = new nc("onBeforeInput", "beforeinput", null, i, V)),
              _.push({ event: V, listeners: N }),
              (V.data = ee))));
      }
      Mc(_, t);
    });
  }
  function Kr(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function Ki(e, t) {
    for (var i = t + "Capture", o = []; e !== null; ) {
      var l = e,
        c = l.stateNode;
      (l.tag === 5 &&
        c !== null &&
        ((l = c),
        (c = Nr(e, i)),
        c != null && o.unshift(Kr(e, c, l)),
        (c = Nr(e, t)),
        c != null && o.push(Kr(e, c, l))),
        (e = e.return));
    }
    return o;
  }
  function Yn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ac(e, t, i, o, l) {
    for (var c = t._reactName, h = []; i !== null && i !== o; ) {
      var v = i,
        k = v.alternate,
        N = v.stateNode;
      if (k !== null && k === o) break;
      (v.tag === 5 &&
        N !== null &&
        ((v = N),
        l
          ? ((k = Nr(i, c)), k != null && h.unshift(Kr(i, k, v)))
          : l || ((k = Nr(i, c)), k != null && h.push(Kr(i, k, v)))),
        (i = i.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var _g = /\r\n?/g,
    Ig = /\u0000|\uFFFD/g;
  function Dc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        _g,
        `
`,
      )
      .replace(Ig, "");
  }
  function Gi(e, t, i) {
    if (((t = Dc(t)), Dc(e) !== t && i)) throw Error(s(425));
  }
  function Xi() {}
  var bo = null,
    Uo = null;
  function Wo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ho = typeof setTimeout == "function" ? setTimeout : void 0,
    Fg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Rc = typeof Promise == "function" ? Promise : void 0,
    zg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Rc < "u"
          ? function (e) {
              return Rc.resolve(null).then(e).catch(Og);
            }
          : Ho;
  function Og(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function $o(e, t) {
    var i = t,
      o = 0;
    do {
      var l = i.nextSibling;
      if ((e.removeChild(i), l && l.nodeType === 8))
        if (((i = l.data), i === "/$")) {
          if (o === 0) {
            (e.removeChild(l), Ir(t));
            return;
          }
          o--;
        } else (i !== "$" && i !== "$?" && i !== "$!") || o++;
      i = l;
    } while (i);
    Ir(t);
  }
  function nn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Lc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (t === 0) return e;
          t--;
        } else i === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Qn = Math.random().toString(36).slice(2),
    _t = "__reactFiber$" + Qn,
    Gr = "__reactProps$" + Qn,
    Ut = "__reactContainer$" + Qn,
    Ko = "__reactEvents$" + Qn,
    Bg = "__reactListeners$" + Qn,
    bg = "__reactHandles$" + Qn;
  function Tn(e) {
    var t = e[_t];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if ((t = i[Ut] || i[_t])) {
        if (
          ((i = t.alternate),
          t.child !== null || (i !== null && i.child !== null))
        )
          for (e = Lc(e); e !== null; ) {
            if ((i = e[_t])) return i;
            e = Lc(e);
          }
        return t;
      }
      ((e = i), (i = e.parentNode));
    }
    return null;
  }
  function Xr(e) {
    return (
      (e = e[_t] || e[Ut]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function qn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Yi(e) {
    return e[Gr] || null;
  }
  var Go = [],
    Zn = -1;
  function rn(e) {
    return { current: e };
  }
  function Te(e) {
    0 > Zn || ((e.current = Go[Zn]), (Go[Zn] = null), Zn--);
  }
  function ve(e, t) {
    (Zn++, (Go[Zn] = e.current), (e.current = t));
  }
  var sn = {},
    Qe = rn(sn),
    it = rn(!1),
    Pn = sn;
  function Jn(e, t) {
    var i = e.type.contextTypes;
    if (!i) return sn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
      return o.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      c;
    for (c in i) l[c] = t[c];
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function st(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Qi() {
    (Te(it), Te(Qe));
  }
  function Vc(e, t, i) {
    if (Qe.current !== sn) throw Error(s(168));
    (ve(Qe, t), ve(it, i));
  }
  function _c(e, t, i) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function"))
      return i;
    o = o.getChildContext();
    for (var l in o) if (!(l in t)) throw Error(s(108, ye(e) || "Unknown", l));
    return U({}, i, o);
  }
  function qi(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        sn),
      (Pn = Qe.current),
      ve(Qe, e),
      ve(it, it.current),
      !0
    );
  }
  function Ic(e, t, i) {
    var o = e.stateNode;
    if (!o) throw Error(s(169));
    (i
      ? ((e = _c(e, t, Pn)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        Te(it),
        Te(Qe),
        ve(Qe, e))
      : Te(it),
      ve(it, i));
  }
  var Wt = null,
    Zi = !1,
    Xo = !1;
  function Fc(e) {
    Wt === null ? (Wt = [e]) : Wt.push(e);
  }
  function Ug(e) {
    ((Zi = !0), Fc(e));
  }
  function on() {
    if (!Xo && Wt !== null) {
      Xo = !0;
      var e = 0,
        t = pe;
      try {
        var i = Wt;
        for (pe = 1; e < i.length; e++) {
          var o = i[e];
          do o = o(!0);
          while (o !== null);
        }
        ((Wt = null), (Zi = !1));
      } catch (l) {
        throw (Wt !== null && (Wt = Wt.slice(e + 1)), Ou(go, on), l);
      } finally {
        ((pe = t), (Xo = !1));
      }
    }
    return null;
  }
  var er = [],
    tr = 0,
    Ji = null,
    es = 0,
    gt = [],
    yt = 0,
    En = null,
    Ht = 1,
    $t = "";
  function Cn(e, t) {
    ((er[tr++] = es), (er[tr++] = Ji), (Ji = e), (es = t));
  }
  function zc(e, t, i) {
    ((gt[yt++] = Ht), (gt[yt++] = $t), (gt[yt++] = En), (En = e));
    var o = Ht;
    e = $t;
    var l = 32 - Pt(o) - 1;
    ((o &= ~(1 << l)), (i += 1));
    var c = 32 - Pt(t) + l;
    if (30 < c) {
      var h = l - (l % 5);
      ((c = (o & ((1 << h) - 1)).toString(32)),
        (o >>= h),
        (l -= h),
        (Ht = (1 << (32 - Pt(t) + l)) | (i << l) | o),
        ($t = c + e));
    } else ((Ht = (1 << c) | (i << l) | o), ($t = e));
  }
  function Yo(e) {
    e.return !== null && (Cn(e, 1), zc(e, 1, 0));
  }
  function Qo(e) {
    for (; e === Ji; )
      ((Ji = er[--tr]), (er[tr] = null), (es = er[--tr]), (er[tr] = null));
    for (; e === En; )
      ((En = gt[--yt]),
        (gt[yt] = null),
        ($t = gt[--yt]),
        (gt[yt] = null),
        (Ht = gt[--yt]),
        (gt[yt] = null));
  }
  var dt = null,
    ht = null,
    Ee = !1,
    Ct = null;
  function Oc(e, t) {
    var i = St(5, null, null, 0);
    ((i.elementType = "DELETED"),
      (i.stateNode = t),
      (i.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [i]), (e.flags |= 16)) : t.push(i));
  }
  function Bc(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (t =
            t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (dt = e), (ht = nn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (dt = e), (ht = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((i = En !== null ? { id: Ht, overflow: $t } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: i,
                retryLane: 1073741824,
              }),
              (i = St(18, null, null, 0)),
              (i.stateNode = t),
              (i.return = e),
              (e.child = i),
              (dt = e),
              (ht = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function qo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Zo(e) {
    if (Ee) {
      var t = ht;
      if (t) {
        var i = t;
        if (!Bc(e, t)) {
          if (qo(e)) throw Error(s(418));
          t = nn(i.nextSibling);
          var o = dt;
          t && Bc(e, t)
            ? Oc(o, i)
            : ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (dt = e));
        }
      } else {
        if (qo(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (dt = e));
      }
    }
  }
  function bc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    dt = e;
  }
  function ts(e) {
    if (e !== dt) return !1;
    if (!Ee) return (bc(e), (Ee = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Wo(e.type, e.memoizedProps))),
      t && (t = ht))
    ) {
      if (qo(e)) throw (Uc(), Error(s(418)));
      for (; t; ) (Oc(e, t), (t = nn(t.nextSibling)));
    }
    if ((bc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (t === 0) {
                ht = nn(e.nextSibling);
                break e;
              }
              t--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ht = null;
      }
    } else ht = dt ? nn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Uc() {
    for (var e = ht; e; ) e = nn(e.nextSibling);
  }
  function nr() {
    ((ht = dt = null), (Ee = !1));
  }
  function Jo(e) {
    Ct === null ? (Ct = [e]) : Ct.push(e);
  }
  var Wg = b.ReactCurrentBatchConfig;
  function Yr(e, t, i) {
    if (
      ((e = i.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(s(309));
          var o = i.stateNode;
        }
        if (!o) throw Error(s(147, e));
        var l = o,
          c = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === c
          ? t.ref
          : ((t = function (h) {
              var v = l.refs;
              h === null ? delete v[c] : (v[c] = h);
            }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!i._owner) throw Error(s(290, e));
    }
    return e;
  }
  function ns(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function Wc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Hc(e) {
    function t(E, T) {
      if (e) {
        var C = E.deletions;
        C === null ? ((E.deletions = [T]), (E.flags |= 16)) : C.push(T);
      }
    }
    function i(E, T) {
      if (!e) return null;
      for (; T !== null; ) (t(E, T), (T = T.sibling));
      return null;
    }
    function o(E, T) {
      for (E = new Map(); T !== null; )
        (T.key !== null ? E.set(T.key, T) : E.set(T.index, T), (T = T.sibling));
      return E;
    }
    function l(E, T) {
      return ((E = pn(E, T)), (E.index = 0), (E.sibling = null), E);
    }
    function c(E, T, C) {
      return (
        (E.index = C),
        e
          ? ((C = E.alternate),
            C !== null
              ? ((C = C.index), C < T ? ((E.flags |= 2), T) : C)
              : ((E.flags |= 2), T))
          : ((E.flags |= 1048576), T)
      );
    }
    function h(E) {
      return (e && E.alternate === null && (E.flags |= 2), E);
    }
    function v(E, T, C, z) {
      return T === null || T.tag !== 6
        ? ((T = Ha(C, E.mode, z)), (T.return = E), T)
        : ((T = l(T, C)), (T.return = E), T);
    }
    function k(E, T, C, z) {
      var Y = C.type;
      return Y === de
        ? V(E, T, C.props.children, z, C.key)
        : T !== null &&
            (T.elementType === Y ||
              (typeof Y == "object" &&
                Y !== null &&
                Y.$$typeof === Se &&
                Wc(Y) === T.type))
          ? ((z = l(T, C.props)), (z.ref = Yr(E, T, C)), (z.return = E), z)
          : ((z = Cs(C.type, C.key, C.props, null, E.mode, z)),
            (z.ref = Yr(E, T, C)),
            (z.return = E),
            z);
    }
    function N(E, T, C, z) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== C.containerInfo ||
        T.stateNode.implementation !== C.implementation
        ? ((T = $a(C, E.mode, z)), (T.return = E), T)
        : ((T = l(T, C.children || [])), (T.return = E), T);
    }
    function V(E, T, C, z, Y) {
      return T === null || T.tag !== 7
        ? ((T = Vn(C, E.mode, z, Y)), (T.return = E), T)
        : ((T = l(T, C)), (T.return = E), T);
    }
    function _(E, T, C) {
      if ((typeof T == "string" && T !== "") || typeof T == "number")
        return ((T = Ha("" + T, E.mode, C)), (T.return = E), T);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case q:
            return (
              (C = Cs(T.type, T.key, T.props, null, E.mode, C)),
              (C.ref = Yr(E, null, T)),
              (C.return = E),
              C
            );
          case ae:
            return ((T = $a(T, E.mode, C)), (T.return = E), T);
          case Se:
            var z = T._init;
            return _(E, z(T._payload), C);
        }
        if (Pr(T) || G(T))
          return ((T = Vn(T, E.mode, C, null)), (T.return = E), T);
        ns(E, T);
      }
      return null;
    }
    function L(E, T, C, z) {
      var Y = T !== null ? T.key : null;
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return Y !== null ? null : v(E, T, "" + C, z);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case q:
            return C.key === Y ? k(E, T, C, z) : null;
          case ae:
            return C.key === Y ? N(E, T, C, z) : null;
          case Se:
            return ((Y = C._init), L(E, T, Y(C._payload), z));
        }
        if (Pr(C) || G(C)) return Y !== null ? null : V(E, T, C, z, null);
        ns(E, C);
      }
      return null;
    }
    function W(E, T, C, z, Y) {
      if ((typeof z == "string" && z !== "") || typeof z == "number")
        return ((E = E.get(C) || null), v(T, E, "" + z, Y));
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case q:
            return (
              (E = E.get(z.key === null ? C : z.key) || null),
              k(T, E, z, Y)
            );
          case ae:
            return (
              (E = E.get(z.key === null ? C : z.key) || null),
              N(T, E, z, Y)
            );
          case Se:
            var J = z._init;
            return W(E, T, C, J(z._payload), Y);
        }
        if (Pr(z) || G(z)) return ((E = E.get(C) || null), V(T, E, z, Y, null));
        ns(T, z);
      }
      return null;
    }
    function $(E, T, C, z) {
      for (
        var Y = null, J = null, ee = T, ne = (T = 0), $e = null;
        ee !== null && ne < C.length;
        ne++
      ) {
        ee.index > ne ? (($e = ee), (ee = null)) : ($e = ee.sibling);
        var fe = L(E, ee, C[ne], z);
        if (fe === null) {
          ee === null && (ee = $e);
          break;
        }
        (e && ee && fe.alternate === null && t(E, ee),
          (T = c(fe, T, ne)),
          J === null ? (Y = fe) : (J.sibling = fe),
          (J = fe),
          (ee = $e));
      }
      if (ne === C.length) return (i(E, ee), Ee && Cn(E, ne), Y);
      if (ee === null) {
        for (; ne < C.length; ne++)
          ((ee = _(E, C[ne], z)),
            ee !== null &&
              ((T = c(ee, T, ne)),
              J === null ? (Y = ee) : (J.sibling = ee),
              (J = ee)));
        return (Ee && Cn(E, ne), Y);
      }
      for (ee = o(E, ee); ne < C.length; ne++)
        (($e = W(ee, E, ne, C[ne], z)),
          $e !== null &&
            (e &&
              $e.alternate !== null &&
              ee.delete($e.key === null ? ne : $e.key),
            (T = c($e, T, ne)),
            J === null ? (Y = $e) : (J.sibling = $e),
            (J = $e)));
      return (
        e &&
          ee.forEach(function (mn) {
            return t(E, mn);
          }),
        Ee && Cn(E, ne),
        Y
      );
    }
    function X(E, T, C, z) {
      var Y = G(C);
      if (typeof Y != "function") throw Error(s(150));
      if (((C = Y.call(C)), C == null)) throw Error(s(151));
      for (
        var J = (Y = null), ee = T, ne = (T = 0), $e = null, fe = C.next();
        ee !== null && !fe.done;
        ne++, fe = C.next()
      ) {
        ee.index > ne ? (($e = ee), (ee = null)) : ($e = ee.sibling);
        var mn = L(E, ee, fe.value, z);
        if (mn === null) {
          ee === null && (ee = $e);
          break;
        }
        (e && ee && mn.alternate === null && t(E, ee),
          (T = c(mn, T, ne)),
          J === null ? (Y = mn) : (J.sibling = mn),
          (J = mn),
          (ee = $e));
      }
      if (fe.done) return (i(E, ee), Ee && Cn(E, ne), Y);
      if (ee === null) {
        for (; !fe.done; ne++, fe = C.next())
          ((fe = _(E, fe.value, z)),
            fe !== null &&
              ((T = c(fe, T, ne)),
              J === null ? (Y = fe) : (J.sibling = fe),
              (J = fe)));
        return (Ee && Cn(E, ne), Y);
      }
      for (ee = o(E, ee); !fe.done; ne++, fe = C.next())
        ((fe = W(ee, E, ne, fe.value, z)),
          fe !== null &&
            (e &&
              fe.alternate !== null &&
              ee.delete(fe.key === null ? ne : fe.key),
            (T = c(fe, T, ne)),
            J === null ? (Y = fe) : (J.sibling = fe),
            (J = fe)));
      return (
        e &&
          ee.forEach(function (ky) {
            return t(E, ky);
          }),
        Ee && Cn(E, ne),
        Y
      );
    }
    function _e(E, T, C, z) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === de &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case q:
            e: {
              for (var Y = C.key, J = T; J !== null; ) {
                if (J.key === Y) {
                  if (((Y = C.type), Y === de)) {
                    if (J.tag === 7) {
                      (i(E, J.sibling),
                        (T = l(J, C.props.children)),
                        (T.return = E),
                        (E = T));
                      break e;
                    }
                  } else if (
                    J.elementType === Y ||
                    (typeof Y == "object" &&
                      Y !== null &&
                      Y.$$typeof === Se &&
                      Wc(Y) === J.type)
                  ) {
                    (i(E, J.sibling),
                      (T = l(J, C.props)),
                      (T.ref = Yr(E, J, C)),
                      (T.return = E),
                      (E = T));
                    break e;
                  }
                  i(E, J);
                  break;
                } else t(E, J);
                J = J.sibling;
              }
              C.type === de
                ? ((T = Vn(C.props.children, E.mode, z, C.key)),
                  (T.return = E),
                  (E = T))
                : ((z = Cs(C.type, C.key, C.props, null, E.mode, z)),
                  (z.ref = Yr(E, T, C)),
                  (z.return = E),
                  (E = z));
            }
            return h(E);
          case ae:
            e: {
              for (J = C.key; T !== null; ) {
                if (T.key === J)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === C.containerInfo &&
                    T.stateNode.implementation === C.implementation
                  ) {
                    (i(E, T.sibling),
                      (T = l(T, C.children || [])),
                      (T.return = E),
                      (E = T));
                    break e;
                  } else {
                    i(E, T);
                    break;
                  }
                else t(E, T);
                T = T.sibling;
              }
              ((T = $a(C, E.mode, z)), (T.return = E), (E = T));
            }
            return h(E);
          case Se:
            return ((J = C._init), _e(E, T, J(C._payload), z));
        }
        if (Pr(C)) return $(E, T, C, z);
        if (G(C)) return X(E, T, C, z);
        ns(E, C);
      }
      return (typeof C == "string" && C !== "") || typeof C == "number"
        ? ((C = "" + C),
          T !== null && T.tag === 6
            ? (i(E, T.sibling), (T = l(T, C)), (T.return = E), (E = T))
            : (i(E, T), (T = Ha(C, E.mode, z)), (T.return = E), (E = T)),
          h(E))
        : i(E, T);
    }
    return _e;
  }
  var rr = Hc(!0),
    $c = Hc(!1),
    rs = rn(null),
    is = null,
    ir = null,
    ea = null;
  function ta() {
    ea = ir = is = null;
  }
  function na(e) {
    var t = rs.current;
    (Te(rs), (e._currentValue = t));
  }
  function ra(e, t, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function sr(e, t) {
    ((is = e),
      (ea = ir = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (ot = !0), (e.firstContext = null)));
  }
  function vt(e) {
    var t = e._currentValue;
    if (ea !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), ir === null)) {
        if (is === null) throw Error(s(308));
        ((ir = e), (is.dependencies = { lanes: 0, firstContext: e }));
      } else ir = ir.next = e;
    return t;
  }
  var Nn = null;
  function ia(e) {
    Nn === null ? (Nn = [e]) : Nn.push(e);
  }
  function Kc(e, t, i, o) {
    var l = t.interleaved;
    return (
      l === null ? ((i.next = i), ia(t)) : ((i.next = l.next), (l.next = i)),
      (t.interleaved = i),
      Kt(e, o)
    );
  }
  function Kt(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (i = e.alternate),
        i !== null && (i.childLanes |= t),
        (i = e),
        (e = e.return));
    return i.tag === 3 ? i.stateNode : null;
  }
  var an = !1;
  function sa(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Gc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Gt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function ln(e, t, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (le & 2) !== 0)) {
      var l = o.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (o.pending = t),
        Kt(e, i)
      );
    }
    return (
      (l = o.interleaved),
      l === null ? ((t.next = t), ia(o)) : ((t.next = l.next), (l.next = t)),
      (o.interleaved = t),
      Kt(e, i)
    );
  }
  function ss(e, t, i) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194240) !== 0))
    ) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (i |= o), (t.lanes = i), xo(e, i));
    }
  }
  function Xc(e, t) {
    var i = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), i === o)) {
      var l = null,
        c = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var h = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          (c === null ? (l = c = h) : (c = c.next = h), (i = i.next));
        } while (i !== null);
        c === null ? (l = c = t) : (c = c.next = t);
      } else l = c = t;
      ((i = {
        baseState: o.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: c,
        shared: o.shared,
        effects: o.effects,
      }),
        (e.updateQueue = i));
      return;
    }
    ((e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = t) : (e.next = t),
      (i.lastBaseUpdate = t));
  }
  function os(e, t, i, o) {
    var l = e.updateQueue;
    an = !1;
    var c = l.firstBaseUpdate,
      h = l.lastBaseUpdate,
      v = l.shared.pending;
    if (v !== null) {
      l.shared.pending = null;
      var k = v,
        N = k.next;
      ((k.next = null), h === null ? (c = N) : (h.next = N), (h = k));
      var V = e.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (v = V.lastBaseUpdate),
        v !== h &&
          (v === null ? (V.firstBaseUpdate = N) : (v.next = N),
          (V.lastBaseUpdate = k)));
    }
    if (c !== null) {
      var _ = l.baseState;
      ((h = 0), (V = N = k = null), (v = c));
      do {
        var L = v.lane,
          W = v.eventTime;
        if ((o & L) === L) {
          V !== null &&
            (V = V.next =
              {
                eventTime: W,
                lane: 0,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null,
              });
          e: {
            var $ = e,
              X = v;
            switch (((L = t), (W = i), X.tag)) {
              case 1:
                if ((($ = X.payload), typeof $ == "function")) {
                  _ = $.call(W, _, L);
                  break e;
                }
                _ = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = X.payload),
                  (L = typeof $ == "function" ? $.call(W, _, L) : $),
                  L == null)
                )
                  break e;
                _ = U({}, _, L);
                break e;
              case 2:
                an = !0;
            }
          }
          v.callback !== null &&
            v.lane !== 0 &&
            ((e.flags |= 64),
            (L = l.effects),
            L === null ? (l.effects = [v]) : L.push(v));
        } else
          ((W = {
            eventTime: W,
            lane: L,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            V === null ? ((N = V = W), (k = _)) : (V = V.next = W),
            (h |= L));
        if (((v = v.next), v === null)) {
          if (((v = l.shared.pending), v === null)) break;
          ((L = v),
            (v = L.next),
            (L.next = null),
            (l.lastBaseUpdate = L),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (V === null && (k = _),
        (l.baseState = k),
        (l.firstBaseUpdate = N),
        (l.lastBaseUpdate = V),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((h |= l.lane), (l = l.next));
        while (l !== t);
      } else c === null && (l.shared.lanes = 0);
      ((An |= h), (e.lanes = h), (e.memoizedState = _));
    }
  }
  function Yc(e, t, i) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          l = o.callback;
        if (l !== null) {
          if (((o.callback = null), (o = i), typeof l != "function"))
            throw Error(s(191, l));
          l.call(o);
        }
      }
  }
  var Qr = {},
    It = rn(Qr),
    qr = rn(Qr),
    Zr = rn(Qr);
  function Mn(e) {
    if (e === Qr) throw Error(s(174));
    return e;
  }
  function oa(e, t) {
    switch ((ve(Zr, t), ve(qr, e), ve(It, Qr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : oo(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = oo(t, e)));
    }
    (Te(It), ve(It, t));
  }
  function or() {
    (Te(It), Te(qr), Te(Zr));
  }
  function Qc(e) {
    Mn(Zr.current);
    var t = Mn(It.current),
      i = oo(t, e.type);
    t !== i && (ve(qr, e), ve(It, i));
  }
  function aa(e) {
    qr.current === e && (Te(It), Te(qr));
  }
  var Ne = rn(0);
  function as(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var la = [];
  function ua() {
    for (var e = 0; e < la.length; e++)
      la[e]._workInProgressVersionPrimary = null;
    la.length = 0;
  }
  var ls = b.ReactCurrentDispatcher,
    ca = b.ReactCurrentBatchConfig,
    jn = 0,
    Me = null,
    Be = null,
    We = null,
    us = !1,
    Jr = !1,
    ei = 0,
    Hg = 0;
  function qe() {
    throw Error(s(321));
  }
  function fa(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
      if (!Et(e[i], t[i])) return !1;
    return !0;
  }
  function da(e, t, i, o, l, c) {
    if (
      ((jn = c),
      (Me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ls.current = e === null || e.memoizedState === null ? Xg : Yg),
      (e = i(o, l)),
      Jr)
    ) {
      c = 0;
      do {
        if (((Jr = !1), (ei = 0), 25 <= c)) throw Error(s(301));
        ((c += 1),
          (We = Be = null),
          (t.updateQueue = null),
          (ls.current = Qg),
          (e = i(o, l)));
      } while (Jr);
    }
    if (
      ((ls.current = ds),
      (t = Be !== null && Be.next !== null),
      (jn = 0),
      (We = Be = Me = null),
      (us = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function ha() {
    var e = ei !== 0;
    return ((ei = 0), e);
  }
  function Ft() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (We === null ? (Me.memoizedState = We = e) : (We = We.next = e), We);
  }
  function xt() {
    if (Be === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var t = We === null ? Me.memoizedState : We.next;
    if (t !== null) ((We = t), (Be = e));
    else {
      if (e === null) throw Error(s(310));
      ((Be = e),
        (e = {
          memoizedState: Be.memoizedState,
          baseState: Be.baseState,
          baseQueue: Be.baseQueue,
          queue: Be.queue,
          next: null,
        }),
        We === null ? (Me.memoizedState = We = e) : (We = We.next = e));
    }
    return We;
  }
  function ti(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function pa(e) {
    var t = xt(),
      i = t.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var o = Be,
      l = o.baseQueue,
      c = i.pending;
    if (c !== null) {
      if (l !== null) {
        var h = l.next;
        ((l.next = c.next), (c.next = h));
      }
      ((o.baseQueue = l = c), (i.pending = null));
    }
    if (l !== null) {
      ((c = l.next), (o = o.baseState));
      var v = (h = null),
        k = null,
        N = c;
      do {
        var V = N.lane;
        if ((jn & V) === V)
          (k !== null &&
            (k = k.next =
              {
                lane: 0,
                action: N.action,
                hasEagerState: N.hasEagerState,
                eagerState: N.eagerState,
                next: null,
              }),
            (o = N.hasEagerState ? N.eagerState : e(o, N.action)));
        else {
          var _ = {
            lane: V,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          };
          (k === null ? ((v = k = _), (h = o)) : (k = k.next = _),
            (Me.lanes |= V),
            (An |= V));
        }
        N = N.next;
      } while (N !== null && N !== c);
      (k === null ? (h = o) : (k.next = v),
        Et(o, t.memoizedState) || (ot = !0),
        (t.memoizedState = o),
        (t.baseState = h),
        (t.baseQueue = k),
        (i.lastRenderedState = o));
    }
    if (((e = i.interleaved), e !== null)) {
      l = e;
      do ((c = l.lane), (Me.lanes |= c), (An |= c), (l = l.next));
      while (l !== e);
    } else l === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function ma(e) {
    var t = xt(),
      i = t.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch,
      l = i.pending,
      c = t.memoizedState;
    if (l !== null) {
      i.pending = null;
      var h = (l = l.next);
      do ((c = e(c, h.action)), (h = h.next));
      while (h !== l);
      (Et(c, t.memoizedState) || (ot = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (i.lastRenderedState = c));
    }
    return [c, o];
  }
  function qc() {}
  function Zc(e, t) {
    var i = Me,
      o = xt(),
      l = t(),
      c = !Et(o.memoizedState, l);
    if (
      (c && ((o.memoizedState = l), (ot = !0)),
      (o = o.queue),
      ga(tf.bind(null, i, o, e), [e]),
      o.getSnapshot !== t || c || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        ni(9, ef.bind(null, i, o, l, t), void 0, null),
        He === null)
      )
        throw Error(s(349));
      (jn & 30) !== 0 || Jc(i, t, l);
    }
    return l;
  }
  function Jc(e, t, i) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: i }),
      (t = Me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Me.updateQueue = t),
          (t.stores = [e]))
        : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e)));
  }
  function ef(e, t, i, o) {
    ((t.value = i), (t.getSnapshot = o), nf(t) && rf(e));
  }
  function tf(e, t, i) {
    return i(function () {
      nf(t) && rf(e);
    });
  }
  function nf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !Et(e, i);
    } catch {
      return !0;
    }
  }
  function rf(e) {
    var t = Kt(e, 1);
    t !== null && At(t, e, 1, -1);
  }
  function sf(e) {
    var t = Ft();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ti,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Gg.bind(null, Me, e)),
      [t.memoizedState, e]
    );
  }
  function ni(e, t, i, o) {
    return (
      (e = { tag: e, create: t, destroy: i, deps: o, next: null }),
      (t = Me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Me.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((i = t.lastEffect),
          i === null
            ? (t.lastEffect = e.next = e)
            : ((o = i.next), (i.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function of() {
    return xt().memoizedState;
  }
  function cs(e, t, i, o) {
    var l = Ft();
    ((Me.flags |= e),
      (l.memoizedState = ni(1 | t, i, void 0, o === void 0 ? null : o)));
  }
  function fs(e, t, i, o) {
    var l = xt();
    o = o === void 0 ? null : o;
    var c = void 0;
    if (Be !== null) {
      var h = Be.memoizedState;
      if (((c = h.destroy), o !== null && fa(o, h.deps))) {
        l.memoizedState = ni(t, i, c, o);
        return;
      }
    }
    ((Me.flags |= e), (l.memoizedState = ni(1 | t, i, c, o)));
  }
  function af(e, t) {
    return cs(8390656, 8, e, t);
  }
  function ga(e, t) {
    return fs(2048, 8, e, t);
  }
  function lf(e, t) {
    return fs(4, 2, e, t);
  }
  function uf(e, t) {
    return fs(4, 4, e, t);
  }
  function cf(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ff(e, t, i) {
    return (
      (i = i != null ? i.concat([e]) : null),
      fs(4, 4, cf.bind(null, t, e), i)
    );
  }
  function ya() {}
  function df(e, t) {
    var i = xt();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return o !== null && t !== null && fa(t, o[1])
      ? o[0]
      : ((i.memoizedState = [e, t]), e);
  }
  function hf(e, t) {
    var i = xt();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return o !== null && t !== null && fa(t, o[1])
      ? o[0]
      : ((e = e()), (i.memoizedState = [e, t]), e);
  }
  function pf(e, t, i) {
    return (jn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (ot = !0)), (e.memoizedState = i))
      : (Et(i, t) ||
          ((i = Wu()), (Me.lanes |= i), (An |= i), (e.baseState = !0)),
        t);
  }
  function $g(e, t) {
    var i = pe;
    ((pe = i !== 0 && 4 > i ? i : 4), e(!0));
    var o = ca.transition;
    ca.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((pe = i), (ca.transition = o));
    }
  }
  function mf() {
    return xt().memoizedState;
  }
  function Kg(e, t, i) {
    var o = dn(e);
    if (
      ((i = {
        lane: o,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gf(e))
    )
      yf(t, i);
    else if (((i = Kc(e, t, i, o)), i !== null)) {
      var l = tt();
      (At(i, e, o, l), vf(i, t, o));
    }
  }
  function Gg(e, t, i) {
    var o = dn(e),
      l = {
        lane: o,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (gf(e)) yf(t, l);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var h = t.lastRenderedState,
            v = c(h, i);
          if (((l.hasEagerState = !0), (l.eagerState = v), Et(v, h))) {
            var k = t.interleaved;
            (k === null
              ? ((l.next = l), ia(t))
              : ((l.next = k.next), (k.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((i = Kc(e, t, l, o)),
        i !== null && ((l = tt()), At(i, e, o, l), vf(i, t, o)));
    }
  }
  function gf(e) {
    var t = e.alternate;
    return e === Me || (t !== null && t === Me);
  }
  function yf(e, t) {
    Jr = us = !0;
    var i = e.pending;
    (i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (e.pending = t));
  }
  function vf(e, t, i) {
    if ((i & 4194240) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (i |= o), (t.lanes = i), xo(e, i));
    }
  }
  var ds = {
      readContext: vt,
      useCallback: qe,
      useContext: qe,
      useEffect: qe,
      useImperativeHandle: qe,
      useInsertionEffect: qe,
      useLayoutEffect: qe,
      useMemo: qe,
      useReducer: qe,
      useRef: qe,
      useState: qe,
      useDebugValue: qe,
      useDeferredValue: qe,
      useTransition: qe,
      useMutableSource: qe,
      useSyncExternalStore: qe,
      useId: qe,
      unstable_isNewReconciler: !1,
    },
    Xg = {
      readContext: vt,
      useCallback: function (e, t) {
        return ((Ft().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: vt,
      useEffect: af,
      useImperativeHandle: function (e, t, i) {
        return (
          (i = i != null ? i.concat([e]) : null),
          cs(4194308, 4, cf.bind(null, t, e), i)
        );
      },
      useLayoutEffect: function (e, t) {
        return cs(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return cs(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var i = Ft();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (i.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, i) {
        var o = Ft();
        return (
          (t = i !== void 0 ? i(t) : t),
          (o.memoizedState = o.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (o.queue = e),
          (e = e.dispatch = Kg.bind(null, Me, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ft();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: sf,
      useDebugValue: ya,
      useDeferredValue: function (e) {
        return (Ft().memoizedState = e);
      },
      useTransition: function () {
        var e = sf(!1),
          t = e[0];
        return ((e = $g.bind(null, e[1])), (Ft().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, i) {
        var o = Me,
          l = Ft();
        if (Ee) {
          if (i === void 0) throw Error(s(407));
          i = i();
        } else {
          if (((i = t()), He === null)) throw Error(s(349));
          (jn & 30) !== 0 || Jc(o, t, i);
        }
        l.memoizedState = i;
        var c = { value: i, getSnapshot: t };
        return (
          (l.queue = c),
          af(tf.bind(null, o, c, e), [e]),
          (o.flags |= 2048),
          ni(9, ef.bind(null, o, c, i, t), void 0, null),
          i
        );
      },
      useId: function () {
        var e = Ft(),
          t = He.identifierPrefix;
        if (Ee) {
          var i = $t,
            o = Ht;
          ((i = (o & ~(1 << (32 - Pt(o) - 1))).toString(32) + i),
            (t = ":" + t + "R" + i),
            (i = ei++),
            0 < i && (t += "H" + i.toString(32)),
            (t += ":"));
        } else ((i = Hg++), (t = ":" + t + "r" + i.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Yg = {
      readContext: vt,
      useCallback: df,
      useContext: vt,
      useEffect: ga,
      useImperativeHandle: ff,
      useInsertionEffect: lf,
      useLayoutEffect: uf,
      useMemo: hf,
      useReducer: pa,
      useRef: of,
      useState: function () {
        return pa(ti);
      },
      useDebugValue: ya,
      useDeferredValue: function (e) {
        var t = xt();
        return pf(t, Be.memoizedState, e);
      },
      useTransition: function () {
        var e = pa(ti)[0],
          t = xt().memoizedState;
        return [e, t];
      },
      useMutableSource: qc,
      useSyncExternalStore: Zc,
      useId: mf,
      unstable_isNewReconciler: !1,
    },
    Qg = {
      readContext: vt,
      useCallback: df,
      useContext: vt,
      useEffect: ga,
      useImperativeHandle: ff,
      useInsertionEffect: lf,
      useLayoutEffect: uf,
      useMemo: hf,
      useReducer: ma,
      useRef: of,
      useState: function () {
        return ma(ti);
      },
      useDebugValue: ya,
      useDeferredValue: function (e) {
        var t = xt();
        return Be === null ? (t.memoizedState = e) : pf(t, Be.memoizedState, e);
      },
      useTransition: function () {
        var e = ma(ti)[0],
          t = xt().memoizedState;
        return [e, t];
      },
      useMutableSource: qc,
      useSyncExternalStore: Zc,
      useId: mf,
      unstable_isNewReconciler: !1,
    };
  function Nt(e, t) {
    if (e && e.defaultProps) {
      ((t = U({}, t)), (e = e.defaultProps));
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function va(e, t, i, o) {
    ((t = e.memoizedState),
      (i = i(o, t)),
      (i = i == null ? t : U({}, t, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i));
  }
  var hs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? kn(e) === e : !1;
    },
    enqueueSetState: function (e, t, i) {
      e = e._reactInternals;
      var o = tt(),
        l = dn(e),
        c = Gt(o, l);
      ((c.payload = t),
        i != null && (c.callback = i),
        (t = ln(e, c, l)),
        t !== null && (At(t, e, l, o), ss(t, e, l)));
    },
    enqueueReplaceState: function (e, t, i) {
      e = e._reactInternals;
      var o = tt(),
        l = dn(e),
        c = Gt(o, l);
      ((c.tag = 1),
        (c.payload = t),
        i != null && (c.callback = i),
        (t = ln(e, c, l)),
        t !== null && (At(t, e, l, o), ss(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var i = tt(),
        o = dn(e),
        l = Gt(i, o);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = ln(e, l, o)),
        t !== null && (At(t, e, o, i), ss(t, e, o)));
    },
  };
  function xf(e, t, i, o, l, c, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, c, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ur(i, o) || !Ur(l, c)
          : !0
    );
  }
  function wf(e, t, i) {
    var o = !1,
      l = sn,
      c = t.contextType;
    return (
      typeof c == "object" && c !== null
        ? (c = vt(c))
        : ((l = st(t) ? Pn : Qe.current),
          (o = t.contextTypes),
          (c = (o = o != null) ? Jn(e, l) : sn)),
      (t = new t(i, c)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = hs),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function Sf(e, t, i, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(i, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(i, o),
      t.state !== e && hs.enqueueReplaceState(t, t.state, null));
  }
  function xa(e, t, i, o) {
    var l = e.stateNode;
    ((l.props = i), (l.state = e.memoizedState), (l.refs = {}), sa(e));
    var c = t.contextType;
    (typeof c == "object" && c !== null
      ? (l.context = vt(c))
      : ((c = st(t) ? Pn : Qe.current), (l.context = Jn(e, c))),
      (l.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == "function" && (va(e, t, c, i), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && hs.enqueueReplaceState(l, l.state, null),
        os(e, i, l, o),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function ar(e, t) {
    try {
      var i = "",
        o = t;
      do ((i += ue(o)), (o = o.return));
      while (o);
      var l = i;
    } catch (c) {
      l =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function wa(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function Sa(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var qg = typeof WeakMap == "function" ? WeakMap : Map;
  function kf(e, t, i) {
    ((i = Gt(-1, i)), (i.tag = 3), (i.payload = { element: null }));
    var o = t.value;
    return (
      (i.callback = function () {
        (ws || ((ws = !0), (Ia = o)), Sa(e, t));
      }),
      i
    );
  }
  function Tf(e, t, i) {
    ((i = Gt(-1, i)), (i.tag = 3));
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var l = t.value;
      ((i.payload = function () {
        return o(l);
      }),
        (i.callback = function () {
          Sa(e, t);
        }));
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == "function" &&
        (i.callback = function () {
          (Sa(e, t),
            typeof o != "function" &&
              (cn === null ? (cn = new Set([this])) : cn.add(this)));
          var h = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: h !== null ? h : "",
          });
        }),
      i
    );
  }
  function Pf(e, t, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new qg();
      var l = new Set();
      o.set(t, l);
    } else ((l = o.get(t)), l === void 0 && ((l = new Set()), o.set(t, l)));
    l.has(i) || (l.add(i), (e = fy.bind(null, e, t, i)), t.then(e, e));
  }
  function Ef(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Cf(e, t, i, o, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null
                ? (i.tag = 17)
                : ((t = Gt(-1, 1)), (t.tag = 2), ln(i, t, 1))),
            (i.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Zg = b.ReactCurrentOwner,
    ot = !1;
  function et(e, t, i, o) {
    t.child = e === null ? $c(t, null, i, o) : rr(t, e.child, i, o);
  }
  function Nf(e, t, i, o, l) {
    i = i.render;
    var c = t.ref;
    return (
      sr(t, l),
      (o = da(e, t, i, o, c, l)),
      (i = ha()),
      e !== null && !ot
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Xt(e, t, l))
        : (Ee && i && Yo(t), (t.flags |= 1), et(e, t, o, l), t.child)
    );
  }
  function Mf(e, t, i, o, l) {
    if (e === null) {
      var c = i.type;
      return typeof c == "function" &&
        !Wa(c) &&
        c.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), jf(e, t, c, o, l))
        : ((e = Cs(i.type, null, o, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), (e.lanes & l) === 0)) {
      var h = c.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : Ur), i(h, o) && e.ref === t.ref)
      )
        return Xt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = pn(c, o)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function jf(e, t, i, o, l) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Ur(c, o) && e.ref === t.ref)
        if (((ot = !1), (t.pendingProps = o = c), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (ot = !0);
        else return ((t.lanes = e.lanes), Xt(e, t, l));
    }
    return ka(e, t, i, o, l);
  }
  function Af(e, t, i) {
    var o = t.pendingProps,
      l = o.children,
      c = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ve(ur, pt),
          (pt |= i));
      else {
        if ((i & 1073741824) === 0)
          return (
            (e = c !== null ? c.baseLanes | i : i),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ve(ur, pt),
            (pt |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (o = c !== null ? c.baseLanes : i),
          ve(ur, pt),
          (pt |= o));
      }
    else
      (c !== null ? ((o = c.baseLanes | i), (t.memoizedState = null)) : (o = i),
        ve(ur, pt),
        (pt |= o));
    return (et(e, t, l, i), t.child);
  }
  function Df(e, t) {
    var i = t.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ka(e, t, i, o, l) {
    var c = st(i) ? Pn : Qe.current;
    return (
      (c = Jn(t, c)),
      sr(t, l),
      (i = da(e, t, i, o, c, l)),
      (o = ha()),
      e !== null && !ot
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Xt(e, t, l))
        : (Ee && o && Yo(t), (t.flags |= 1), et(e, t, i, l), t.child)
    );
  }
  function Rf(e, t, i, o, l) {
    if (st(i)) {
      var c = !0;
      qi(t);
    } else c = !1;
    if ((sr(t, l), t.stateNode === null))
      (ms(e, t), wf(t, i, o), xa(t, i, o, l), (o = !0));
    else if (e === null) {
      var h = t.stateNode,
        v = t.memoizedProps;
      h.props = v;
      var k = h.context,
        N = i.contextType;
      typeof N == "object" && N !== null
        ? (N = vt(N))
        : ((N = st(i) ? Pn : Qe.current), (N = Jn(t, N)));
      var V = i.getDerivedStateFromProps,
        _ =
          typeof V == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function";
      (_ ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== o || k !== N) && Sf(t, h, o, N)),
        (an = !1));
      var L = t.memoizedState;
      ((h.state = L),
        os(t, o, h, l),
        (k = t.memoizedState),
        v !== o || L !== k || it.current || an
          ? (typeof V == "function" && (va(t, i, V, o), (k = t.memoizedState)),
            (v = an || xf(t, i, v, o, L, k, N))
              ? (_ ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof h.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = k)),
            (h.props = o),
            (h.state = k),
            (h.context = N),
            (o = v))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
            (o = !1)));
    } else {
      ((h = t.stateNode),
        Gc(e, t),
        (v = t.memoizedProps),
        (N = t.type === t.elementType ? v : Nt(t.type, v)),
        (h.props = N),
        (_ = t.pendingProps),
        (L = h.context),
        (k = i.contextType),
        typeof k == "object" && k !== null
          ? (k = vt(k))
          : ((k = st(i) ? Pn : Qe.current), (k = Jn(t, k))));
      var W = i.getDerivedStateFromProps;
      ((V =
        typeof W == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function") ||
        (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
          typeof h.componentWillReceiveProps != "function") ||
        ((v !== _ || L !== k) && Sf(t, h, o, k)),
        (an = !1),
        (L = t.memoizedState),
        (h.state = L),
        os(t, o, h, l));
      var $ = t.memoizedState;
      v !== _ || L !== $ || it.current || an
        ? (typeof W == "function" && (va(t, i, W, o), ($ = t.memoizedState)),
          (N = an || xf(t, i, N, o, L, $, k) || !1)
            ? (V ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(o, $, k),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(o, $, k)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (v === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = $)),
          (h.props = o),
          (h.state = $),
          (h.context = k),
          (o = N))
        : (typeof h.componentDidUpdate != "function" ||
            (v === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (v === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return Ta(e, t, i, o, c, l);
  }
  function Ta(e, t, i, o, l, c) {
    Df(e, t);
    var h = (t.flags & 128) !== 0;
    if (!o && !h) return (l && Ic(t, i, !1), Xt(e, t, c));
    ((o = t.stateNode), (Zg.current = t));
    var v =
      h && typeof i.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && h
        ? ((t.child = rr(t, e.child, null, c)), (t.child = rr(t, null, v, c)))
        : et(e, t, v, c),
      (t.memoizedState = o.state),
      l && Ic(t, i, !0),
      t.child
    );
  }
  function Lf(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Vc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Vc(e, t.context, !1),
      oa(e, t.containerInfo));
  }
  function Vf(e, t, i, o, l) {
    return (nr(), Jo(l), (t.flags |= 256), et(e, t, i, o), t.child);
  }
  var Pa = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ea(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function _f(e, t, i) {
    var o = t.pendingProps,
      l = Ne.current,
      c = !1,
      h = (t.flags & 128) !== 0,
      v;
    if (
      ((v = h) ||
        (v = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      v
        ? ((c = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ve(Ne, l & 1),
      e === null)
    )
      return (
        Zo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((h = o.children),
            (e = o.fallback),
            c
              ? ((o = t.mode),
                (c = t.child),
                (h = { mode: "hidden", children: h }),
                (o & 1) === 0 && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = h))
                  : (c = Ns(h, o, 0, null)),
                (e = Vn(e, o, i, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = Ea(i)),
                (t.memoizedState = Pa),
                e)
              : Ca(t, h))
      );
    if (((l = e.memoizedState), l !== null && ((v = l.dehydrated), v !== null)))
      return Jg(e, t, h, o, v, l, i);
    if (c) {
      ((c = o.fallback), (h = t.mode), (l = e.child), (v = l.sibling));
      var k = { mode: "hidden", children: o.children };
      return (
        (h & 1) === 0 && t.child !== l
          ? ((o = t.child),
            (o.childLanes = 0),
            (o.pendingProps = k),
            (t.deletions = null))
          : ((o = pn(l, k)), (o.subtreeFlags = l.subtreeFlags & 14680064)),
        v !== null ? (c = pn(v, c)) : ((c = Vn(c, h, i, null)), (c.flags |= 2)),
        (c.return = t),
        (o.return = t),
        (o.sibling = c),
        (t.child = o),
        (o = c),
        (c = t.child),
        (h = e.child.memoizedState),
        (h =
          h === null
            ? Ea(i)
            : {
                baseLanes: h.baseLanes | i,
                cachePool: null,
                transitions: h.transitions,
              }),
        (c.memoizedState = h),
        (c.childLanes = e.childLanes & ~i),
        (t.memoizedState = Pa),
        o
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (o = pn(c, { mode: "visible", children: o.children })),
      (t.mode & 1) === 0 && (o.lanes = i),
      (o.return = t),
      (o.sibling = null),
      e !== null &&
        ((i = t.deletions),
        i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    );
  }
  function Ca(e, t) {
    return (
      (t = Ns({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ps(e, t, i, o) {
    return (
      o !== null && Jo(o),
      rr(t, e.child, null, i),
      (e = Ca(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Jg(e, t, i, o, l, c, h) {
    if (i)
      return t.flags & 256
        ? ((t.flags &= -257), (o = wa(Error(s(422)))), ps(e, t, h, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((c = o.fallback),
            (l = t.mode),
            (o = Ns({ mode: "visible", children: o.children }, l, 0, null)),
            (c = Vn(c, l, h, null)),
            (c.flags |= 2),
            (o.return = t),
            (c.return = t),
            (o.sibling = c),
            (t.child = o),
            (t.mode & 1) !== 0 && rr(t, e.child, null, h),
            (t.child.memoizedState = Ea(h)),
            (t.memoizedState = Pa),
            c);
    if ((t.mode & 1) === 0) return ps(e, t, h, null);
    if (l.data === "$!") {
      if (((o = l.nextSibling && l.nextSibling.dataset), o)) var v = o.dgst;
      return (
        (o = v),
        (c = Error(s(419))),
        (o = wa(c, o, void 0)),
        ps(e, t, h, o)
      );
    }
    if (((v = (h & e.childLanes) !== 0), ot || v)) {
      if (((o = He), o !== null)) {
        switch (h & -h) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (o.suspendedLanes | h)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== c.retryLane &&
            ((c.retryLane = l), Kt(e, l), At(o, e, l, -1)));
      }
      return (Ua(), (o = wa(Error(s(421)))), ps(e, t, h, o));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = dy.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (ht = nn(l.nextSibling)),
        (dt = t),
        (Ee = !0),
        (Ct = null),
        e !== null &&
          ((gt[yt++] = Ht),
          (gt[yt++] = $t),
          (gt[yt++] = En),
          (Ht = e.id),
          ($t = e.overflow),
          (En = t)),
        (t = Ca(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function If(e, t, i) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), ra(e.return, t, i));
  }
  function Na(e, t, i, o, l) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: i,
          tailMode: l,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = o),
        (c.tail = i),
        (c.tailMode = l));
  }
  function Ff(e, t, i) {
    var o = t.pendingProps,
      l = o.revealOrder,
      c = o.tail;
    if ((et(e, t, o.children, i), (o = Ne.current), (o & 2) !== 0))
      ((o = (o & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && If(e, i, t);
          else if (e.tag === 19) If(e, i, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      o &= 1;
    }
    if ((ve(Ne, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (i = t.child, l = null; i !== null; )
            ((e = i.alternate),
              e !== null && as(e) === null && (l = i),
              (i = i.sibling));
          ((i = l),
            i === null
              ? ((l = t.child), (t.child = null))
              : ((l = i.sibling), (i.sibling = null)),
            Na(t, !1, l, i, c));
          break;
        case "backwards":
          for (i = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && as(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = i), (i = l), (l = e));
          }
          Na(t, !0, i, null, c);
          break;
        case "together":
          Na(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ms(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Xt(e, t, i) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (An |= t.lanes),
      (i & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, i = pn(e, e.pendingProps), t.child = i, i.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (i = i.sibling = pn(e, e.pendingProps)),
          (i.return = t));
      i.sibling = null;
    }
    return t.child;
  }
  function ey(e, t, i) {
    switch (t.tag) {
      case 3:
        (Lf(t), nr());
        break;
      case 5:
        Qc(t);
        break;
      case 1:
        st(t.type) && qi(t);
        break;
      case 4:
        oa(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          l = t.memoizedProps.value;
        (ve(rs, o._currentValue), (o._currentValue = l));
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (ve(Ne, Ne.current & 1), (t.flags |= 128), null)
            : (i & t.child.childLanes) !== 0
              ? _f(e, t, i)
              : (ve(Ne, Ne.current & 1),
                (e = Xt(e, t, i)),
                e !== null ? e.sibling : null);
        ve(Ne, Ne.current & 1);
        break;
      case 19:
        if (((o = (i & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return Ff(e, t, i);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ve(Ne, Ne.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Af(e, t, i));
    }
    return Xt(e, t, i);
  }
  var zf, Ma, Of, Bf;
  ((zf = function (e, t) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        ((i.child.return = i), (i = i.child));
        continue;
      }
      if (i === t) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === t) return;
        i = i.return;
      }
      ((i.sibling.return = i.return), (i = i.sibling));
    }
  }),
    (Ma = function () {}),
    (Of = function (e, t, i, o) {
      var l = e.memoizedProps;
      if (l !== o) {
        ((e = t.stateNode), Mn(It.current));
        var c = null;
        switch (i) {
          case "input":
            ((l = no(e, l)), (o = no(e, o)), (c = []));
            break;
          case "select":
            ((l = U({}, l, { value: void 0 })),
              (o = U({}, o, { value: void 0 })),
              (c = []));
            break;
          case "textarea":
            ((l = so(e, l)), (o = so(e, o)), (c = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof o.onClick == "function" &&
              (e.onclick = Xi);
        }
        ao(i, o);
        var h;
        i = null;
        for (N in l)
          if (!o.hasOwnProperty(N) && l.hasOwnProperty(N) && l[N] != null)
            if (N === "style") {
              var v = l[N];
              for (h in v) v.hasOwnProperty(h) && (i || (i = {}), (i[h] = ""));
            } else
              N !== "dangerouslySetInnerHTML" &&
                N !== "children" &&
                N !== "suppressContentEditableWarning" &&
                N !== "suppressHydrationWarning" &&
                N !== "autoFocus" &&
                (u.hasOwnProperty(N)
                  ? c || (c = [])
                  : (c = c || []).push(N, null));
        for (N in o) {
          var k = o[N];
          if (
            ((v = l != null ? l[N] : void 0),
            o.hasOwnProperty(N) && k !== v && (k != null || v != null))
          )
            if (N === "style")
              if (v) {
                for (h in v)
                  !v.hasOwnProperty(h) ||
                    (k && k.hasOwnProperty(h)) ||
                    (i || (i = {}), (i[h] = ""));
                for (h in k)
                  k.hasOwnProperty(h) &&
                    v[h] !== k[h] &&
                    (i || (i = {}), (i[h] = k[h]));
              } else (i || (c || (c = []), c.push(N, i)), (i = k));
            else
              N === "dangerouslySetInnerHTML"
                ? ((k = k ? k.__html : void 0),
                  (v = v ? v.__html : void 0),
                  k != null && v !== k && (c = c || []).push(N, k))
                : N === "children"
                  ? (typeof k != "string" && typeof k != "number") ||
                    (c = c || []).push(N, "" + k)
                  : N !== "suppressContentEditableWarning" &&
                    N !== "suppressHydrationWarning" &&
                    (u.hasOwnProperty(N)
                      ? (k != null && N === "onScroll" && ke("scroll", e),
                        c || v === k || (c = []))
                      : (c = c || []).push(N, k));
        }
        i && (c = c || []).push("style", i);
        var N = c;
        (t.updateQueue = N) && (t.flags |= 4);
      }
    }),
    (Bf = function (e, t, i, o) {
      i !== o && (t.flags |= 4);
    }));
  function ri(e, t) {
    if (!Ee)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var i = null; t !== null; )
            (t.alternate !== null && (i = t), (t = t.sibling));
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = e.tail;
          for (var o = null; i !== null; )
            (i.alternate !== null && (o = i), (i = i.sibling));
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      o = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((i |= l.lanes | l.childLanes),
          (o |= l.subtreeFlags & 14680064),
          (o |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((i |= l.lanes | l.childLanes),
          (o |= l.subtreeFlags),
          (o |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= o), (e.childLanes = i), t);
  }
  function ty(e, t, i) {
    var o = t.pendingProps;
    switch ((Qo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ze(t), null);
      case 1:
        return (st(t.type) && Qi(), Ze(t), null);
      case 3:
        return (
          (o = t.stateNode),
          or(),
          Te(it),
          Te(Qe),
          ua(),
          o.pendingContext &&
            ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (ts(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ct !== null && (Oa(Ct), (Ct = null)))),
          Ma(e, t),
          Ze(t),
          null
        );
      case 5:
        aa(t);
        var l = Mn(Zr.current);
        if (((i = t.type), e !== null && t.stateNode != null))
          (Of(e, t, i, o, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(s(166));
            return (Ze(t), null);
          }
          if (((e = Mn(It.current)), ts(t))) {
            ((o = t.stateNode), (i = t.type));
            var c = t.memoizedProps;
            switch (((o[_t] = t), (o[Gr] = c), (e = (t.mode & 1) !== 0), i)) {
              case "dialog":
                (ke("cancel", o), ke("close", o));
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", o);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Hr.length; l++) ke(Hr[l], o);
                break;
              case "source":
                ke("error", o);
                break;
              case "img":
              case "image":
              case "link":
                (ke("error", o), ke("load", o));
                break;
              case "details":
                ke("toggle", o);
                break;
              case "input":
                (xu(o, c), ke("invalid", o));
                break;
              case "select":
                ((o._wrapperState = { wasMultiple: !!c.multiple }),
                  ke("invalid", o));
                break;
              case "textarea":
                (ku(o, c), ke("invalid", o));
            }
            (ao(i, c), (l = null));
            for (var h in c)
              if (c.hasOwnProperty(h)) {
                var v = c[h];
                h === "children"
                  ? typeof v == "string"
                    ? o.textContent !== v &&
                      (c.suppressHydrationWarning !== !0 &&
                        Gi(o.textContent, v, e),
                      (l = ["children", v]))
                    : typeof v == "number" &&
                      o.textContent !== "" + v &&
                      (c.suppressHydrationWarning !== !0 &&
                        Gi(o.textContent, v, e),
                      (l = ["children", "" + v]))
                  : u.hasOwnProperty(h) &&
                    v != null &&
                    h === "onScroll" &&
                    ke("scroll", o);
              }
            switch (i) {
              case "input":
                (Pi(o), Su(o, c, !0));
                break;
              case "textarea":
                (Pi(o), Pu(o));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (o.onclick = Xi);
            }
            ((o = l), (t.updateQueue = o), o !== null && (t.flags |= 4));
          } else {
            ((h = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Eu(i)),
              e === "http://www.w3.org/1999/xhtml"
                ? i === "script"
                  ? ((e = h.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == "string"
                    ? (e = h.createElement(i, { is: o.is }))
                    : ((e = h.createElement(i)),
                      i === "select" &&
                        ((h = e),
                        o.multiple
                          ? (h.multiple = !0)
                          : o.size && (h.size = o.size)))
                : (e = h.createElementNS(e, i)),
              (e[_t] = t),
              (e[Gr] = o),
              zf(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((h = lo(i, o)), i)) {
                case "dialog":
                  (ke("cancel", e), ke("close", e), (l = o));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (ke("load", e), (l = o));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Hr.length; l++) ke(Hr[l], e);
                  l = o;
                  break;
                case "source":
                  (ke("error", e), (l = o));
                  break;
                case "img":
                case "image":
                case "link":
                  (ke("error", e), ke("load", e), (l = o));
                  break;
                case "details":
                  (ke("toggle", e), (l = o));
                  break;
                case "input":
                  (xu(e, o), (l = no(e, o)), ke("invalid", e));
                  break;
                case "option":
                  l = o;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!o.multiple }),
                    (l = U({}, o, { value: void 0 })),
                    ke("invalid", e));
                  break;
                case "textarea":
                  (ku(e, o), (l = so(e, o)), ke("invalid", e));
                  break;
                default:
                  l = o;
              }
              (ao(i, l), (v = l));
              for (c in v)
                if (v.hasOwnProperty(c)) {
                  var k = v[c];
                  c === "style"
                    ? Mu(e, k)
                    : c === "dangerouslySetInnerHTML"
                      ? ((k = k ? k.__html : void 0), k != null && Cu(e, k))
                      : c === "children"
                        ? typeof k == "string"
                          ? (i !== "textarea" || k !== "") && Er(e, k)
                          : typeof k == "number" && Er(e, "" + k)
                        : c !== "suppressContentEditableWarning" &&
                          c !== "suppressHydrationWarning" &&
                          c !== "autoFocus" &&
                          (u.hasOwnProperty(c)
                            ? k != null && c === "onScroll" && ke("scroll", e)
                            : k != null && O(e, c, k, h));
                }
              switch (i) {
                case "input":
                  (Pi(e), Su(e, o, !1));
                  break;
                case "textarea":
                  (Pi(e), Pu(e));
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + he(o.value));
                  break;
                case "select":
                  ((e.multiple = !!o.multiple),
                    (c = o.value),
                    c != null
                      ? bn(e, !!o.multiple, c, !1)
                      : o.defaultValue != null &&
                        bn(e, !!o.multiple, o.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Xi);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Ze(t), null);
      case 6:
        if (e && t.stateNode != null) Bf(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
          if (((i = Mn(Zr.current)), Mn(It.current), ts(t))) {
            if (
              ((o = t.stateNode),
              (i = t.memoizedProps),
              (o[_t] = t),
              (c = o.nodeValue !== i) && ((e = dt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Gi(o.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Gi(o.nodeValue, i, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else
            ((o = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(o)),
              (o[_t] = t),
              (t.stateNode = o));
        }
        return (Ze(t), null);
      case 13:
        if (
          (Te(Ne),
          (o = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ee && ht !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Uc(), nr(), (t.flags |= 98560), (c = !1));
          else if (((c = ts(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(s(317));
              c[_t] = t;
            } else
              (nr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ze(t), (c = !1));
          } else (Ct !== null && (Oa(Ct), (Ct = null)), (c = !0));
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = i), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ne.current & 1) !== 0
                  ? be === 0 && (be = 3)
                  : Ua())),
            t.updateQueue !== null && (t.flags |= 4),
            Ze(t),
            null);
      case 4:
        return (
          or(),
          Ma(e, t),
          e === null && $r(t.stateNode.containerInfo),
          Ze(t),
          null
        );
      case 10:
        return (na(t.type._context), Ze(t), null);
      case 17:
        return (st(t.type) && Qi(), Ze(t), null);
      case 19:
        if ((Te(Ne), (c = t.memoizedState), c === null)) return (Ze(t), null);
        if (((o = (t.flags & 128) !== 0), (h = c.rendering), h === null))
          if (o) ri(c, !1);
          else {
            if (be !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((h = as(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      ri(c, !1),
                      o = h.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = i,
                      i = t.child;
                    i !== null;
                  )
                    ((c = i),
                      (e = o),
                      (c.flags &= 14680066),
                      (h = c.alternate),
                      h === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = h.childLanes),
                          (c.lanes = h.lanes),
                          (c.child = h.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = h.memoizedProps),
                          (c.memoizedState = h.memoizedState),
                          (c.updateQueue = h.updateQueue),
                          (c.type = h.type),
                          (e = h.dependencies),
                          (c.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (i = i.sibling));
                  return (ve(Ne, (Ne.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Ve() > cr &&
              ((t.flags |= 128), (o = !0), ri(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = as(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (i = e.updateQueue),
                i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                ri(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !h.alternate &&
                  !Ee)
              )
                return (Ze(t), null);
            } else
              2 * Ve() - c.renderingStartTime > cr &&
                i !== 1073741824 &&
                ((t.flags |= 128), (o = !0), ri(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((i = c.last),
              i !== null ? (i.sibling = h) : (t.child = h),
              (c.last = h));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Ve()),
            (t.sibling = null),
            (i = Ne.current),
            ve(Ne, o ? (i & 1) | 2 : i & 1),
            t)
          : (Ze(t), null);
      case 22:
      case 23:
        return (
          ba(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (pt & 1073741824) !== 0 &&
              (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ze(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function ny(e, t) {
    switch ((Qo(t), t.tag)) {
      case 1:
        return (
          st(t.type) && Qi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          or(),
          Te(it),
          Te(Qe),
          ua(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (aa(t), null);
      case 13:
        if (
          (Te(Ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          nr();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (Te(Ne), null);
      case 4:
        return (or(), null);
      case 10:
        return (na(t.type._context), null);
      case 22:
      case 23:
        return (ba(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var gs = !1,
    Je = !1,
    ry = typeof WeakSet == "function" ? WeakSet : Set,
    H = null;
  function lr(e, t) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (o) {
          De(e, t, o);
        }
      else i.current = null;
  }
  function ja(e, t, i) {
    try {
      i();
    } catch (o) {
      De(e, t, o);
    }
  }
  var bf = !1;
  function iy(e, t) {
    if (((bo = Ii), (e = vc()), Lo(e))) {
      if ("selectionStart" in e)
        var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var l = o.anchorOffset,
              c = o.focusNode;
            o = o.focusOffset;
            try {
              (i.nodeType, c.nodeType);
            } catch {
              i = null;
              break e;
            }
            var h = 0,
              v = -1,
              k = -1,
              N = 0,
              V = 0,
              _ = e,
              L = null;
            t: for (;;) {
              for (
                var W;
                _ !== i || (l !== 0 && _.nodeType !== 3) || (v = h + l),
                  _ !== c || (o !== 0 && _.nodeType !== 3) || (k = h + o),
                  _.nodeType === 3 && (h += _.nodeValue.length),
                  (W = _.firstChild) !== null;
              )
                ((L = _), (_ = W));
              for (;;) {
                if (_ === e) break t;
                if (
                  (L === i && ++N === l && (v = h),
                  L === c && ++V === o && (k = h),
                  (W = _.nextSibling) !== null)
                )
                  break;
                ((_ = L), (L = _.parentNode));
              }
              _ = W;
            }
            i = v === -1 || k === -1 ? null : { start: v, end: k };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      Uo = { focusedElem: e, selectionRange: i }, Ii = !1, H = t;
      H !== null;
    )
      if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (H = e));
      else
        for (; H !== null; ) {
          t = H;
          try {
            var $ = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if ($ !== null) {
                    var X = $.memoizedProps,
                      _e = $.memoizedState,
                      E = t.stateNode,
                      T = E.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? X : Nt(t.type, X),
                        _e,
                      );
                    E.__reactInternalSnapshotBeforeUpdate = T;
                  }
                  break;
                case 3:
                  var C = t.stateNode.containerInfo;
                  C.nodeType === 1
                    ? (C.textContent = "")
                    : C.nodeType === 9 &&
                      C.documentElement &&
                      C.removeChild(C.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (z) {
            De(t, t.return, z);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (H = e));
            break;
          }
          H = t.return;
        }
    return (($ = bf), (bf = !1), $);
  }
  function ii(e, t, i) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var l = (o = o.next);
      do {
        if ((l.tag & e) === e) {
          var c = l.destroy;
          ((l.destroy = void 0), c !== void 0 && ja(t, i, c));
        }
        l = l.next;
      } while (l !== o);
    }
  }
  function ys(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var i = (t = t.next);
      do {
        if ((i.tag & e) === e) {
          var o = i.create;
          i.destroy = o();
        }
        i = i.next;
      } while (i !== t);
    }
  }
  function Aa(e) {
    var t = e.ref;
    if (t !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = i;
          break;
        default:
          e = i;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Uf(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Uf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[_t],
          delete t[Gr],
          delete t[Ko],
          delete t[Bg],
          delete t[bg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Wf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Hf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wf(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Da(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      ((e = e.stateNode),
        t
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, t)
            : i.insertBefore(e, t)
          : (i.nodeType === 8
              ? ((t = i.parentNode), t.insertBefore(e, i))
              : ((t = i), t.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || t.onclick !== null || (t.onclick = Xi)));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Da(e, t, i), e = e.sibling; e !== null; )
        (Da(e, t, i), (e = e.sibling));
  }
  function Ra(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      ((e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Ra(e, t, i), e = e.sibling; e !== null; )
        (Ra(e, t, i), (e = e.sibling));
  }
  var Ke = null,
    Mt = !1;
  function un(e, t, i) {
    for (i = i.child; i !== null; ) ($f(e, t, i), (i = i.sibling));
  }
  function $f(e, t, i) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function")
      try {
        Vt.onCommitFiberUnmount(Ai, i);
      } catch {}
    switch (i.tag) {
      case 5:
        Je || lr(i, t);
      case 6:
        var o = Ke,
          l = Mt;
        ((Ke = null),
          un(e, t, i),
          (Ke = o),
          (Mt = l),
          Ke !== null &&
            (Mt
              ? ((e = Ke),
                (i = i.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(i)
                  : e.removeChild(i))
              : Ke.removeChild(i.stateNode)));
        break;
      case 18:
        Ke !== null &&
          (Mt
            ? ((e = Ke),
              (i = i.stateNode),
              e.nodeType === 8
                ? $o(e.parentNode, i)
                : e.nodeType === 1 && $o(e, i),
              Ir(e))
            : $o(Ke, i.stateNode));
        break;
      case 4:
        ((o = Ke),
          (l = Mt),
          (Ke = i.stateNode.containerInfo),
          (Mt = !0),
          un(e, t, i),
          (Ke = o),
          (Mt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Je &&
          ((o = i.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
        ) {
          l = o = o.next;
          do {
            var c = l,
              h = c.destroy;
            ((c = c.tag),
              h !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && ja(i, t, h),
              (l = l.next));
          } while (l !== o);
        }
        un(e, t, i);
        break;
      case 1:
        if (
          !Je &&
          (lr(i, t),
          (o = i.stateNode),
          typeof o.componentWillUnmount == "function")
        )
          try {
            ((o.props = i.memoizedProps),
              (o.state = i.memoizedState),
              o.componentWillUnmount());
          } catch (v) {
            De(i, t, v);
          }
        un(e, t, i);
        break;
      case 21:
        un(e, t, i);
        break;
      case 22:
        i.mode & 1
          ? ((Je = (o = Je) || i.memoizedState !== null), un(e, t, i), (Je = o))
          : un(e, t, i);
        break;
      default:
        un(e, t, i);
    }
  }
  function Kf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      (i === null && (i = e.stateNode = new ry()),
        t.forEach(function (o) {
          var l = hy.bind(null, e, o);
          i.has(o) || (i.add(o), o.then(l, l));
        }));
    }
  }
  function jt(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var l = i[o];
        try {
          var c = e,
            h = t,
            v = h;
          e: for (; v !== null; ) {
            switch (v.tag) {
              case 5:
                ((Ke = v.stateNode), (Mt = !1));
                break e;
              case 3:
                ((Ke = v.stateNode.containerInfo), (Mt = !0));
                break e;
              case 4:
                ((Ke = v.stateNode.containerInfo), (Mt = !0));
                break e;
            }
            v = v.return;
          }
          if (Ke === null) throw Error(s(160));
          ($f(c, h, l), (Ke = null), (Mt = !1));
          var k = l.alternate;
          (k !== null && (k.return = null), (l.return = null));
        } catch (N) {
          De(l, t, N);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (Gf(t, e), (t = t.sibling));
  }
  function Gf(e, t) {
    var i = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((jt(t, e), zt(e), o & 4)) {
          try {
            (ii(3, e, e.return), ys(3, e));
          } catch (X) {
            De(e, e.return, X);
          }
          try {
            ii(5, e, e.return);
          } catch (X) {
            De(e, e.return, X);
          }
        }
        break;
      case 1:
        (jt(t, e), zt(e), o & 512 && i !== null && lr(i, i.return));
        break;
      case 5:
        if (
          (jt(t, e),
          zt(e),
          o & 512 && i !== null && lr(i, i.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Er(l, "");
          } catch (X) {
            De(e, e.return, X);
          }
        }
        if (o & 4 && ((l = e.stateNode), l != null)) {
          var c = e.memoizedProps,
            h = i !== null ? i.memoizedProps : c,
            v = e.type,
            k = e.updateQueue;
          if (((e.updateQueue = null), k !== null))
            try {
              (v === "input" &&
                c.type === "radio" &&
                c.name != null &&
                wu(l, c),
                lo(v, h));
              var N = lo(v, c);
              for (h = 0; h < k.length; h += 2) {
                var V = k[h],
                  _ = k[h + 1];
                V === "style"
                  ? Mu(l, _)
                  : V === "dangerouslySetInnerHTML"
                    ? Cu(l, _)
                    : V === "children"
                      ? Er(l, _)
                      : O(l, V, _, N);
              }
              switch (v) {
                case "input":
                  ro(l, c);
                  break;
                case "textarea":
                  Tu(l, c);
                  break;
                case "select":
                  var L = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!c.multiple;
                  var W = c.value;
                  W != null
                    ? bn(l, !!c.multiple, W, !1)
                    : L !== !!c.multiple &&
                      (c.defaultValue != null
                        ? bn(l, !!c.multiple, c.defaultValue, !0)
                        : bn(l, !!c.multiple, c.multiple ? [] : "", !1));
              }
              l[Gr] = c;
            } catch (X) {
              De(e, e.return, X);
            }
        }
        break;
      case 6:
        if ((jt(t, e), zt(e), o & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((l = e.stateNode), (c = e.memoizedProps));
          try {
            l.nodeValue = c;
          } catch (X) {
            De(e, e.return, X);
          }
        }
        break;
      case 3:
        if (
          (jt(t, e), zt(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            Ir(t.containerInfo);
          } catch (X) {
            De(e, e.return, X);
          }
        break;
      case 4:
        (jt(t, e), zt(e));
        break;
      case 13:
        (jt(t, e),
          zt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((c = l.memoizedState !== null),
            (l.stateNode.isHidden = c),
            !c ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (_a = Ve())),
          o & 4 && Kf(e));
        break;
      case 22:
        if (
          ((V = i !== null && i.memoizedState !== null),
          e.mode & 1 ? ((Je = (N = Je) || V), jt(t, e), (Je = N)) : jt(t, e),
          zt(e),
          o & 8192)
        ) {
          if (
            ((N = e.memoizedState !== null),
            (e.stateNode.isHidden = N) && !V && (e.mode & 1) !== 0)
          )
            for (H = e, V = e.child; V !== null; ) {
              for (_ = H = V; H !== null; ) {
                switch (((L = H), (W = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ii(4, L, L.return);
                    break;
                  case 1:
                    lr(L, L.return);
                    var $ = L.stateNode;
                    if (typeof $.componentWillUnmount == "function") {
                      ((o = L), (i = L.return));
                      try {
                        ((t = o),
                          ($.props = t.memoizedProps),
                          ($.state = t.memoizedState),
                          $.componentWillUnmount());
                      } catch (X) {
                        De(o, i, X);
                      }
                    }
                    break;
                  case 5:
                    lr(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      Qf(_);
                      continue;
                    }
                }
                W !== null ? ((W.return = L), (H = W)) : Qf(_);
              }
              V = V.sibling;
            }
          e: for (V = null, _ = e; ; ) {
            if (_.tag === 5) {
              if (V === null) {
                V = _;
                try {
                  ((l = _.stateNode),
                    N
                      ? ((c = l.style),
                        typeof c.setProperty == "function"
                          ? c.setProperty("display", "none", "important")
                          : (c.display = "none"))
                      : ((v = _.stateNode),
                        (k = _.memoizedProps.style),
                        (h =
                          k != null && k.hasOwnProperty("display")
                            ? k.display
                            : null),
                        (v.style.display = Nu("display", h))));
                } catch (X) {
                  De(e, e.return, X);
                }
              }
            } else if (_.tag === 6) {
              if (V === null)
                try {
                  _.stateNode.nodeValue = N ? "" : _.memoizedProps;
                } catch (X) {
                  De(e, e.return, X);
                }
            } else if (
              ((_.tag !== 22 && _.tag !== 23) ||
                _.memoizedState === null ||
                _ === e) &&
              _.child !== null
            ) {
              ((_.child.return = _), (_ = _.child));
              continue;
            }
            if (_ === e) break e;
            for (; _.sibling === null; ) {
              if (_.return === null || _.return === e) break e;
              (V === _ && (V = null), (_ = _.return));
            }
            (V === _ && (V = null),
              (_.sibling.return = _.return),
              (_ = _.sibling));
          }
        }
        break;
      case 19:
        (jt(t, e), zt(e), o & 4 && Kf(e));
        break;
      case 21:
        break;
      default:
        (jt(t, e), zt(e));
    }
  }
  function zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (Wf(i)) {
              var o = i;
              break e;
            }
            i = i.return;
          }
          throw Error(s(160));
        }
        switch (o.tag) {
          case 5:
            var l = o.stateNode;
            o.flags & 32 && (Er(l, ""), (o.flags &= -33));
            var c = Hf(e);
            Ra(e, c, l);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo,
              v = Hf(e);
            Da(e, v, h);
            break;
          default:
            throw Error(s(161));
        }
      } catch (k) {
        De(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function sy(e, t, i) {
    ((H = e), Xf(e));
  }
  function Xf(e, t, i) {
    for (var o = (e.mode & 1) !== 0; H !== null; ) {
      var l = H,
        c = l.child;
      if (l.tag === 22 && o) {
        var h = l.memoizedState !== null || gs;
        if (!h) {
          var v = l.alternate,
            k = (v !== null && v.memoizedState !== null) || Je;
          v = gs;
          var N = Je;
          if (((gs = h), (Je = k) && !N))
            for (H = l; H !== null; )
              ((h = H),
                (k = h.child),
                h.tag === 22 && h.memoizedState !== null
                  ? qf(l)
                  : k !== null
                    ? ((k.return = h), (H = k))
                    : qf(l));
          for (; c !== null; ) ((H = c), Xf(c), (c = c.sibling));
          ((H = l), (gs = v), (Je = N));
        }
        Yf(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && c !== null
          ? ((c.return = l), (H = c))
          : Yf(e);
    }
  }
  function Yf(e) {
    for (; H !== null; ) {
      var t = H;
      if ((t.flags & 8772) !== 0) {
        var i = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Je || ys(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !Je)
                  if (i === null) o.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? i.memoizedProps
                        : Nt(t.type, i.memoizedProps);
                    o.componentDidUpdate(
                      l,
                      i.memoizedState,
                      o.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var c = t.updateQueue;
                c !== null && Yc(t, c, o);
                break;
              case 3:
                var h = t.updateQueue;
                if (h !== null) {
                  if (((i = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        i = t.child.stateNode;
                        break;
                      case 1:
                        i = t.child.stateNode;
                    }
                  Yc(t, h, i);
                }
                break;
              case 5:
                var v = t.stateNode;
                if (i === null && t.flags & 4) {
                  i = v;
                  var k = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && i.focus();
                      break;
                    case "img":
                      k.src && (i.src = k.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var N = t.alternate;
                  if (N !== null) {
                    var V = N.memoizedState;
                    if (V !== null) {
                      var _ = V.dehydrated;
                      _ !== null && Ir(_);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          Je || (t.flags & 512 && Aa(t));
        } catch (L) {
          De(t, t.return, L);
        }
      }
      if (t === e) {
        H = null;
        break;
      }
      if (((i = t.sibling), i !== null)) {
        ((i.return = t.return), (H = i));
        break;
      }
      H = t.return;
    }
  }
  function Qf(e) {
    for (; H !== null; ) {
      var t = H;
      if (t === e) {
        H = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        ((i.return = t.return), (H = i));
        break;
      }
      H = t.return;
    }
  }
  function qf(e) {
    for (; H !== null; ) {
      var t = H;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              ys(4, t);
            } catch (k) {
              De(t, i, k);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var l = t.return;
              try {
                o.componentDidMount();
              } catch (k) {
                De(t, l, k);
              }
            }
            var c = t.return;
            try {
              Aa(t);
            } catch (k) {
              De(t, c, k);
            }
            break;
          case 5:
            var h = t.return;
            try {
              Aa(t);
            } catch (k) {
              De(t, h, k);
            }
        }
      } catch (k) {
        De(t, t.return, k);
      }
      if (t === e) {
        H = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        ((v.return = t.return), (H = v));
        break;
      }
      H = t.return;
    }
  }
  var oy = Math.ceil,
    vs = b.ReactCurrentDispatcher,
    La = b.ReactCurrentOwner,
    wt = b.ReactCurrentBatchConfig,
    le = 0,
    He = null,
    Fe = null,
    Ge = 0,
    pt = 0,
    ur = rn(0),
    be = 0,
    si = null,
    An = 0,
    xs = 0,
    Va = 0,
    oi = null,
    at = null,
    _a = 0,
    cr = 1 / 0,
    Yt = null,
    ws = !1,
    Ia = null,
    cn = null,
    Ss = !1,
    fn = null,
    ks = 0,
    ai = 0,
    Fa = null,
    Ts = -1,
    Ps = 0;
  function tt() {
    return (le & 6) !== 0 ? Ve() : Ts !== -1 ? Ts : (Ts = Ve());
  }
  function dn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (le & 2) !== 0 && Ge !== 0
        ? Ge & -Ge
        : Wg.transition !== null
          ? (Ps === 0 && (Ps = Wu()), Ps)
          : ((e = pe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Zu(e.type))),
            e);
  }
  function At(e, t, i, o) {
    if (50 < ai) throw ((ai = 0), (Fa = null), Error(s(185)));
    (Dr(e, i, o),
      ((le & 2) === 0 || e !== He) &&
        (e === He && ((le & 2) === 0 && (xs |= i), be === 4 && hn(e, Ge)),
        lt(e, o),
        i === 1 &&
          le === 0 &&
          (t.mode & 1) === 0 &&
          ((cr = Ve() + 500), Zi && on())));
  }
  function lt(e, t) {
    var i = e.callbackNode;
    Wm(e, t);
    var o = Li(e, e === He ? Ge : 0);
    if (o === 0)
      (i !== null && Bu(i), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((i != null && Bu(i), t === 1))
        (e.tag === 0 ? Ug(Jf.bind(null, e)) : Fc(Jf.bind(null, e)),
          zg(function () {
            (le & 6) === 0 && on();
          }),
          (i = null));
      else {
        switch (Hu(o)) {
          case 1:
            i = go;
            break;
          case 4:
            i = bu;
            break;
          case 16:
            i = ji;
            break;
          case 536870912:
            i = Uu;
            break;
          default:
            i = ji;
        }
        i = ad(i, Zf.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = i));
    }
  }
  function Zf(e, t) {
    if (((Ts = -1), (Ps = 0), (le & 6) !== 0)) throw Error(s(327));
    var i = e.callbackNode;
    if (fr() && e.callbackNode !== i) return null;
    var o = Li(e, e === He ? Ge : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Es(e, o);
    else {
      t = o;
      var l = le;
      le |= 2;
      var c = td();
      (He !== e || Ge !== t) && ((Yt = null), (cr = Ve() + 500), Rn(e, t));
      do
        try {
          uy();
          break;
        } catch (v) {
          ed(e, v);
        }
      while (!0);
      (ta(),
        (vs.current = c),
        (le = l),
        Fe !== null ? (t = 0) : ((He = null), (Ge = 0), (t = be)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = yo(e)), l !== 0 && ((o = l), (t = za(e, l)))),
        t === 1)
      )
        throw ((i = si), Rn(e, 0), hn(e, o), lt(e, Ve()), i);
      if (t === 6) hn(e, o);
      else {
        if (
          ((l = e.current.alternate),
          (o & 30) === 0 &&
            !ay(l) &&
            ((t = Es(e, o)),
            t === 2 && ((c = yo(e)), c !== 0 && ((o = c), (t = za(e, c)))),
            t === 1))
        )
          throw ((i = si), Rn(e, 0), hn(e, o), lt(e, Ve()), i);
        switch (((e.finishedWork = l), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Ln(e, at, Yt);
            break;
          case 3:
            if (
              (hn(e, o),
              (o & 130023424) === o && ((t = _a + 500 - Ve()), 10 < t))
            ) {
              if (Li(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & o) !== o)) {
                (tt(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Ho(Ln.bind(null, e, at, Yt), t);
              break;
            }
            Ln(e, at, Yt);
            break;
          case 4:
            if ((hn(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, l = -1; 0 < o; ) {
              var h = 31 - Pt(o);
              ((c = 1 << h), (h = t[h]), h > l && (l = h), (o &= ~c));
            }
            if (
              ((o = l),
              (o = Ve() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                    ? 480
                    : 1080 > o
                      ? 1080
                      : 1920 > o
                        ? 1920
                        : 3e3 > o
                          ? 3e3
                          : 4320 > o
                            ? 4320
                            : 1960 * oy(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = Ho(Ln.bind(null, e, at, Yt), o);
              break;
            }
            Ln(e, at, Yt);
            break;
          case 5:
            Ln(e, at, Yt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (lt(e, Ve()), e.callbackNode === i ? Zf.bind(null, e) : null);
  }
  function za(e, t) {
    var i = oi;
    return (
      e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256),
      (e = Es(e, t)),
      e !== 2 && ((t = at), (at = i), t !== null && Oa(t)),
      e
    );
  }
  function Oa(e) {
    at === null ? (at = e) : at.push.apply(at, e);
  }
  function ay(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var o = 0; o < i.length; o++) {
            var l = i[o],
              c = l.getSnapshot;
            l = l.value;
            try {
              if (!Et(c(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = t.child), t.subtreeFlags & 16384 && i !== null))
        ((i.return = t), (t = i));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function hn(e, t) {
    for (
      t &= ~Va,
        t &= ~xs,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var i = 31 - Pt(t),
        o = 1 << i;
      ((e[i] = -1), (t &= ~o));
    }
  }
  function Jf(e) {
    if ((le & 6) !== 0) throw Error(s(327));
    fr();
    var t = Li(e, 0);
    if ((t & 1) === 0) return (lt(e, Ve()), null);
    var i = Es(e, t);
    if (e.tag !== 0 && i === 2) {
      var o = yo(e);
      o !== 0 && ((t = o), (i = za(e, o)));
    }
    if (i === 1) throw ((i = si), Rn(e, 0), hn(e, t), lt(e, Ve()), i);
    if (i === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Ln(e, at, Yt),
      lt(e, Ve()),
      null
    );
  }
  function Ba(e, t) {
    var i = le;
    le |= 1;
    try {
      return e(t);
    } finally {
      ((le = i), le === 0 && ((cr = Ve() + 500), Zi && on()));
    }
  }
  function Dn(e) {
    fn !== null && fn.tag === 0 && (le & 6) === 0 && fr();
    var t = le;
    le |= 1;
    var i = wt.transition,
      o = pe;
    try {
      if (((wt.transition = null), (pe = 1), e)) return e();
    } finally {
      ((pe = o), (wt.transition = i), (le = t), (le & 6) === 0 && on());
    }
  }
  function ba() {
    ((pt = ur.current), Te(ur));
  }
  function Rn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), Fg(i)), Fe !== null))
      for (i = Fe.return; i !== null; ) {
        var o = i;
        switch ((Qo(o), o.tag)) {
          case 1:
            ((o = o.type.childContextTypes), o != null && Qi());
            break;
          case 3:
            (or(), Te(it), Te(Qe), ua());
            break;
          case 5:
            aa(o);
            break;
          case 4:
            or();
            break;
          case 13:
            Te(Ne);
            break;
          case 19:
            Te(Ne);
            break;
          case 10:
            na(o.type._context);
            break;
          case 22:
          case 23:
            ba();
        }
        i = i.return;
      }
    if (
      ((He = e),
      (Fe = e = pn(e.current, null)),
      (Ge = pt = t),
      (be = 0),
      (si = null),
      (Va = xs = An = 0),
      (at = oi = null),
      Nn !== null)
    ) {
      for (t = 0; t < Nn.length; t++)
        if (((i = Nn[t]), (o = i.interleaved), o !== null)) {
          i.interleaved = null;
          var l = o.next,
            c = i.pending;
          if (c !== null) {
            var h = c.next;
            ((c.next = l), (o.next = h));
          }
          i.pending = o;
        }
      Nn = null;
    }
    return e;
  }
  function ed(e, t) {
    do {
      var i = Fe;
      try {
        if ((ta(), (ls.current = ds), us)) {
          for (var o = Me.memoizedState; o !== null; ) {
            var l = o.queue;
            (l !== null && (l.pending = null), (o = o.next));
          }
          us = !1;
        }
        if (
          ((jn = 0),
          (We = Be = Me = null),
          (Jr = !1),
          (ei = 0),
          (La.current = null),
          i === null || i.return === null)
        ) {
          ((be = 1), (si = t), (Fe = null));
          break;
        }
        e: {
          var c = e,
            h = i.return,
            v = i,
            k = t;
          if (
            ((t = Ge),
            (v.flags |= 32768),
            k !== null && typeof k == "object" && typeof k.then == "function")
          ) {
            var N = k,
              V = v,
              _ = V.tag;
            if ((V.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var L = V.alternate;
              L
                ? ((V.updateQueue = L.updateQueue),
                  (V.memoizedState = L.memoizedState),
                  (V.lanes = L.lanes))
                : ((V.updateQueue = null), (V.memoizedState = null));
            }
            var W = Ef(h);
            if (W !== null) {
              ((W.flags &= -257),
                Cf(W, h, v, c, t),
                W.mode & 1 && Pf(c, N, t),
                (t = W),
                (k = N));
              var $ = t.updateQueue;
              if ($ === null) {
                var X = new Set();
                (X.add(k), (t.updateQueue = X));
              } else $.add(k);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Pf(c, N, t), Ua());
                break e;
              }
              k = Error(s(426));
            }
          } else if (Ee && v.mode & 1) {
            var _e = Ef(h);
            if (_e !== null) {
              ((_e.flags & 65536) === 0 && (_e.flags |= 256),
                Cf(_e, h, v, c, t),
                Jo(ar(k, v)));
              break e;
            }
          }
          ((c = k = ar(k, v)),
            be !== 4 && (be = 2),
            oi === null ? (oi = [c]) : oi.push(c),
            (c = h));
          do {
            switch (c.tag) {
              case 3:
                ((c.flags |= 65536), (t &= -t), (c.lanes |= t));
                var E = kf(c, k, t);
                Xc(c, E);
                break e;
              case 1:
                v = k;
                var T = c.type,
                  C = c.stateNode;
                if (
                  (c.flags & 128) === 0 &&
                  (typeof T.getDerivedStateFromError == "function" ||
                    (C !== null &&
                      typeof C.componentDidCatch == "function" &&
                      (cn === null || !cn.has(C))))
                ) {
                  ((c.flags |= 65536), (t &= -t), (c.lanes |= t));
                  var z = Tf(c, v, t);
                  Xc(c, z);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        rd(i);
      } catch (Y) {
        ((t = Y), Fe === i && i !== null && (Fe = i = i.return));
        continue;
      }
      break;
    } while (!0);
  }
  function td() {
    var e = vs.current;
    return ((vs.current = ds), e === null ? ds : e);
  }
  function Ua() {
    ((be === 0 || be === 3 || be === 2) && (be = 4),
      He === null ||
        ((An & 268435455) === 0 && (xs & 268435455) === 0) ||
        hn(He, Ge));
  }
  function Es(e, t) {
    var i = le;
    le |= 2;
    var o = td();
    (He !== e || Ge !== t) && ((Yt = null), Rn(e, t));
    do
      try {
        ly();
        break;
      } catch (l) {
        ed(e, l);
      }
    while (!0);
    if ((ta(), (le = i), (vs.current = o), Fe !== null)) throw Error(s(261));
    return ((He = null), (Ge = 0), be);
  }
  function ly() {
    for (; Fe !== null; ) nd(Fe);
  }
  function uy() {
    for (; Fe !== null && !Vm(); ) nd(Fe);
  }
  function nd(e) {
    var t = od(e.alternate, e, pt);
    ((e.memoizedProps = e.pendingProps),
      t === null ? rd(e) : (Fe = t),
      (La.current = null));
  }
  function rd(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((i = ty(i, t, pt)), i !== null)) {
          Fe = i;
          return;
        }
      } else {
        if (((i = ny(i, t)), i !== null)) {
          ((i.flags &= 32767), (Fe = i));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((be = 6), (Fe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Fe = t;
        return;
      }
      Fe = t = e;
    } while (t !== null);
    be === 0 && (be = 5);
  }
  function Ln(e, t, i) {
    var o = pe,
      l = wt.transition;
    try {
      ((wt.transition = null), (pe = 1), cy(e, t, i, o));
    } finally {
      ((wt.transition = l), (pe = o));
    }
    return null;
  }
  function cy(e, t, i, o) {
    do fr();
    while (fn !== null);
    if ((le & 6) !== 0) throw Error(s(327));
    i = e.finishedWork;
    var l = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current))
      throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var c = i.lanes | i.childLanes;
    if (
      (Hm(e, c),
      e === He && ((Fe = He = null), (Ge = 0)),
      ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
        Ss ||
        ((Ss = !0),
        ad(ji, function () {
          return (fr(), null);
        })),
      (c = (i.flags & 15990) !== 0),
      (i.subtreeFlags & 15990) !== 0 || c)
    ) {
      ((c = wt.transition), (wt.transition = null));
      var h = pe;
      pe = 1;
      var v = le;
      ((le |= 4),
        (La.current = null),
        iy(e, i),
        Gf(i, e),
        Ag(Uo),
        (Ii = !!bo),
        (Uo = bo = null),
        (e.current = i),
        sy(i),
        _m(),
        (le = v),
        (pe = h),
        (wt.transition = c));
    } else e.current = i;
    if (
      (Ss && ((Ss = !1), (fn = e), (ks = l)),
      (c = e.pendingLanes),
      c === 0 && (cn = null),
      zm(i.stateNode),
      lt(e, Ve()),
      t !== null)
    )
      for (o = e.onRecoverableError, i = 0; i < t.length; i++)
        ((l = t[i]), o(l.value, { componentStack: l.stack, digest: l.digest }));
    if (ws) throw ((ws = !1), (e = Ia), (Ia = null), e);
    return (
      (ks & 1) !== 0 && e.tag !== 0 && fr(),
      (c = e.pendingLanes),
      (c & 1) !== 0 ? (e === Fa ? ai++ : ((ai = 0), (Fa = e))) : (ai = 0),
      on(),
      null
    );
  }
  function fr() {
    if (fn !== null) {
      var e = Hu(ks),
        t = wt.transition,
        i = pe;
      try {
        if (((wt.transition = null), (pe = 16 > e ? 16 : e), fn === null))
          var o = !1;
        else {
          if (((e = fn), (fn = null), (ks = 0), (le & 6) !== 0))
            throw Error(s(331));
          var l = le;
          for (le |= 4, H = e.current; H !== null; ) {
            var c = H,
              h = c.child;
            if ((H.flags & 16) !== 0) {
              var v = c.deletions;
              if (v !== null) {
                for (var k = 0; k < v.length; k++) {
                  var N = v[k];
                  for (H = N; H !== null; ) {
                    var V = H;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ii(8, V, c);
                    }
                    var _ = V.child;
                    if (_ !== null) ((_.return = V), (H = _));
                    else
                      for (; H !== null; ) {
                        V = H;
                        var L = V.sibling,
                          W = V.return;
                        if ((Uf(V), V === N)) {
                          H = null;
                          break;
                        }
                        if (L !== null) {
                          ((L.return = W), (H = L));
                          break;
                        }
                        H = W;
                      }
                  }
                }
                var $ = c.alternate;
                if ($ !== null) {
                  var X = $.child;
                  if (X !== null) {
                    $.child = null;
                    do {
                      var _e = X.sibling;
                      ((X.sibling = null), (X = _e));
                    } while (X !== null);
                  }
                }
                H = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && h !== null)
              ((h.return = c), (H = h));
            else
              e: for (; H !== null; ) {
                if (((c = H), (c.flags & 2048) !== 0))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ii(9, c, c.return);
                  }
                var E = c.sibling;
                if (E !== null) {
                  ((E.return = c.return), (H = E));
                  break e;
                }
                H = c.return;
              }
          }
          var T = e.current;
          for (H = T; H !== null; ) {
            h = H;
            var C = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && C !== null)
              ((C.return = h), (H = C));
            else
              e: for (h = T; H !== null; ) {
                if (((v = H), (v.flags & 2048) !== 0))
                  try {
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ys(9, v);
                    }
                  } catch (Y) {
                    De(v, v.return, Y);
                  }
                if (v === h) {
                  H = null;
                  break e;
                }
                var z = v.sibling;
                if (z !== null) {
                  ((z.return = v.return), (H = z));
                  break e;
                }
                H = v.return;
              }
          }
          if (
            ((le = l),
            on(),
            Vt && typeof Vt.onPostCommitFiberRoot == "function")
          )
            try {
              Vt.onPostCommitFiberRoot(Ai, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        ((pe = i), (wt.transition = t));
      }
    }
    return !1;
  }
  function id(e, t, i) {
    ((t = ar(i, t)),
      (t = kf(e, t, 1)),
      (e = ln(e, t, 1)),
      (t = tt()),
      e !== null && (Dr(e, 1, t), lt(e, t)));
  }
  function De(e, t, i) {
    if (e.tag === 3) id(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          id(t, e, i);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (cn === null || !cn.has(o)))
          ) {
            ((e = ar(i, e)),
              (e = Tf(t, e, 1)),
              (t = ln(t, e, 1)),
              (e = tt()),
              t !== null && (Dr(t, 1, e), lt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function fy(e, t, i) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (t = tt()),
      (e.pingedLanes |= e.suspendedLanes & i),
      He === e &&
        (Ge & i) === i &&
        (be === 4 || (be === 3 && (Ge & 130023424) === Ge && 500 > Ve() - _a)
          ? Rn(e, 0)
          : (Va |= i)),
      lt(e, t));
  }
  function sd(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ri), (Ri <<= 1), (Ri & 130023424) === 0 && (Ri = 4194304)));
    var i = tt();
    ((e = Kt(e, t)), e !== null && (Dr(e, t, i), lt(e, i)));
  }
  function dy(e) {
    var t = e.memoizedState,
      i = 0;
    (t !== null && (i = t.retryLane), sd(e, i));
  }
  function hy(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          l = e.memoizedState;
        l !== null && (i = l.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    (o !== null && o.delete(t), sd(e, i));
  }
  var od;
  od = function (e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || it.current) ot = !0;
      else {
        if ((e.lanes & i) === 0 && (t.flags & 128) === 0)
          return ((ot = !1), ey(e, t, i));
        ot = (e.flags & 131072) !== 0;
      }
    else ((ot = !1), Ee && (t.flags & 1048576) !== 0 && zc(t, es, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        (ms(e, t), (e = t.pendingProps));
        var l = Jn(t, Qe.current);
        (sr(t, i), (l = da(null, t, o, e, l, i)));
        var c = ha();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              st(o) ? ((c = !0), qi(t)) : (c = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              sa(t),
              (l.updater = hs),
              (t.stateNode = l),
              (l._reactInternals = t),
              xa(t, o, e, i),
              (t = Ta(null, t, o, !0, c, i)))
            : ((t.tag = 0), Ee && c && Yo(t), et(null, t, l, i), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (ms(e, t),
            (e = t.pendingProps),
            (l = o._init),
            (o = l(o._payload)),
            (t.type = o),
            (l = t.tag = my(o)),
            (e = Nt(o, e)),
            l)
          ) {
            case 0:
              t = ka(null, t, o, e, i);
              break e;
            case 1:
              t = Rf(null, t, o, e, i);
              break e;
            case 11:
              t = Nf(null, t, o, e, i);
              break e;
            case 14:
              t = Mf(null, t, o, Nt(o.type, e), i);
              break e;
          }
          throw Error(s(306, o, ""));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (l = t.pendingProps),
          (l = t.elementType === o ? l : Nt(o, l)),
          ka(e, t, o, l, i)
        );
      case 1:
        return (
          (o = t.type),
          (l = t.pendingProps),
          (l = t.elementType === o ? l : Nt(o, l)),
          Rf(e, t, o, l, i)
        );
      case 3:
        e: {
          if ((Lf(t), e === null)) throw Error(s(387));
          ((o = t.pendingProps),
            (c = t.memoizedState),
            (l = c.element),
            Gc(e, t),
            os(t, o, null, i));
          var h = t.memoizedState;
          if (((o = h.element), c.isDehydrated))
            if (
              ((c = {
                element: o,
                isDehydrated: !1,
                cache: h.cache,
                pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                transitions: h.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              ((l = ar(Error(s(423)), t)), (t = Vf(e, t, o, i, l)));
              break e;
            } else if (o !== l) {
              ((l = ar(Error(s(424)), t)), (t = Vf(e, t, o, i, l)));
              break e;
            } else
              for (
                ht = nn(t.stateNode.containerInfo.firstChild),
                  dt = t,
                  Ee = !0,
                  Ct = null,
                  i = $c(t, null, o, i),
                  t.child = i;
                i;
              )
                ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
          else {
            if ((nr(), o === l)) {
              t = Xt(e, t, i);
              break e;
            }
            et(e, t, o, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Qc(t),
          e === null && Zo(t),
          (o = t.type),
          (l = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (h = l.children),
          Wo(o, l) ? (h = null) : c !== null && Wo(o, c) && (t.flags |= 32),
          Df(e, t),
          et(e, t, h, i),
          t.child
        );
      case 6:
        return (e === null && Zo(t), null);
      case 13:
        return _f(e, t, i);
      case 4:
        return (
          oa(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = rr(t, null, o, i)) : et(e, t, o, i),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (l = t.pendingProps),
          (l = t.elementType === o ? l : Nt(o, l)),
          Nf(e, t, o, l, i)
        );
      case 7:
        return (et(e, t, t.pendingProps, i), t.child);
      case 8:
        return (et(e, t, t.pendingProps.children, i), t.child);
      case 12:
        return (et(e, t, t.pendingProps.children, i), t.child);
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (l = t.pendingProps),
            (c = t.memoizedProps),
            (h = l.value),
            ve(rs, o._currentValue),
            (o._currentValue = h),
            c !== null)
          )
            if (Et(c.value, h)) {
              if (c.children === l.children && !it.current) {
                t = Xt(e, t, i);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null; ) {
                var v = c.dependencies;
                if (v !== null) {
                  h = c.child;
                  for (var k = v.firstContext; k !== null; ) {
                    if (k.context === o) {
                      if (c.tag === 1) {
                        ((k = Gt(-1, i & -i)), (k.tag = 2));
                        var N = c.updateQueue;
                        if (N !== null) {
                          N = N.shared;
                          var V = N.pending;
                          (V === null
                            ? (k.next = k)
                            : ((k.next = V.next), (V.next = k)),
                            (N.pending = k));
                        }
                      }
                      ((c.lanes |= i),
                        (k = c.alternate),
                        k !== null && (k.lanes |= i),
                        ra(c.return, i, t),
                        (v.lanes |= i));
                      break;
                    }
                    k = k.next;
                  }
                } else if (c.tag === 10) h = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((h = c.return), h === null)) throw Error(s(341));
                  ((h.lanes |= i),
                    (v = h.alternate),
                    v !== null && (v.lanes |= i),
                    ra(h, i, t),
                    (h = c.sibling));
                } else h = c.child;
                if (h !== null) h.return = c;
                else
                  for (h = c; h !== null; ) {
                    if (h === t) {
                      h = null;
                      break;
                    }
                    if (((c = h.sibling), c !== null)) {
                      ((c.return = h.return), (h = c));
                      break;
                    }
                    h = h.return;
                  }
                c = h;
              }
          (et(e, t, l.children, i), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (o = t.pendingProps.children),
          sr(t, i),
          (l = vt(l)),
          (o = o(l)),
          (t.flags |= 1),
          et(e, t, o, i),
          t.child
        );
      case 14:
        return (
          (o = t.type),
          (l = Nt(o, t.pendingProps)),
          (l = Nt(o.type, l)),
          Mf(e, t, o, l, i)
        );
      case 15:
        return jf(e, t, t.type, t.pendingProps, i);
      case 17:
        return (
          (o = t.type),
          (l = t.pendingProps),
          (l = t.elementType === o ? l : Nt(o, l)),
          ms(e, t),
          (t.tag = 1),
          st(o) ? ((e = !0), qi(t)) : (e = !1),
          sr(t, i),
          wf(t, o, l),
          xa(t, o, l, i),
          Ta(null, t, o, !0, e, i)
        );
      case 19:
        return Ff(e, t, i);
      case 22:
        return Af(e, t, i);
    }
    throw Error(s(156, t.tag));
  };
  function ad(e, t) {
    return Ou(e, t);
  }
  function py(e, t, i, o) {
    ((this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function St(e, t, i, o) {
    return new py(e, t, i, o);
  }
  function Wa(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function my(e) {
    if (typeof e == "function") return Wa(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === we)) return 11;
      if (e === Ie) return 14;
    }
    return 2;
  }
  function pn(e, t) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = St(e.tag, t, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = t),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 14680064),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (i.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      i
    );
  }
  function Cs(e, t, i, o, l, c) {
    var h = 2;
    if (((o = e), typeof e == "function")) Wa(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else
      e: switch (e) {
        case de:
          return Vn(i.children, l, c, t);
        case te:
          ((h = 8), (l |= 8));
          break;
        case ge:
          return (
            (e = St(12, i, t, l | 2)),
            (e.elementType = ge),
            (e.lanes = c),
            e
          );
        case Le:
          return (
            (e = St(13, i, t, l)),
            (e.elementType = Le),
            (e.lanes = c),
            e
          );
        case Ae:
          return (
            (e = St(19, i, t, l)),
            (e.elementType = Ae),
            (e.lanes = c),
            e
          );
        case Ce:
          return Ns(i, l, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Z:
                h = 10;
                break e;
              case me:
                h = 9;
                break e;
              case we:
                h = 11;
                break e;
              case Ie:
                h = 14;
                break e;
              case Se:
                ((h = 16), (o = null));
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = St(h, i, t, l)),
      (t.elementType = e),
      (t.type = o),
      (t.lanes = c),
      t
    );
  }
  function Vn(e, t, i, o) {
    return ((e = St(7, e, o, t)), (e.lanes = i), e);
  }
  function Ns(e, t, i, o) {
    return (
      (e = St(22, e, o, t)),
      (e.elementType = Ce),
      (e.lanes = i),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ha(e, t, i) {
    return ((e = St(6, e, null, t)), (e.lanes = i), e);
  }
  function $a(e, t, i) {
    return (
      (t = St(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = i),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function gy(e, t, i, o, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = vo(0)),
      (this.expirationTimes = vo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vo(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Ka(e, t, i, o, l, c, h, v, k) {
    return (
      (e = new gy(e, t, i, v, k)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = St(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: o,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      sa(c),
      e
    );
  }
  function yy(e, t, i) {
    var o =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ae,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: i,
    };
  }
  function ld(e) {
    if (!e) return sn;
    e = e._reactInternals;
    e: {
      if (kn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (st(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (st(i)) return _c(e, i, t);
    }
    return t;
  }
  function ud(e, t, i, o, l, c, h, v, k) {
    return (
      (e = Ka(i, o, !0, e, l, c, h, v, k)),
      (e.context = ld(null)),
      (i = e.current),
      (o = tt()),
      (l = dn(i)),
      (c = Gt(o, l)),
      (c.callback = t ?? null),
      ln(i, c, l),
      (e.current.lanes = l),
      Dr(e, l, o),
      lt(e, o),
      e
    );
  }
  function Ms(e, t, i, o) {
    var l = t.current,
      c = tt(),
      h = dn(l);
    return (
      (i = ld(i)),
      t.context === null ? (t.context = i) : (t.pendingContext = i),
      (t = Gt(c, h)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = ln(l, t, h)),
      e !== null && (At(e, l, h, c), ss(e, l, h)),
      h
    );
  }
  function js(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function cd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Ga(e, t) {
    (cd(e, t), (e = e.alternate) && cd(e, t));
  }
  function vy() {
    return null;
  }
  var fd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Xa(e) {
    this._internalRoot = e;
  }
  ((As.prototype.render = Xa.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Ms(e, t, null, null);
    }),
    (As.prototype.unmount = Xa.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Dn(function () {
            Ms(null, e, null, null);
          }),
            (t[Ut] = null));
        }
      }));
  function As(e) {
    this._internalRoot = e;
  }
  As.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Gu();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < Jt.length && t !== 0 && t < Jt[i].priority; i++);
      (Jt.splice(i, 0, e), i === 0 && Qu(e));
    }
  };
  function Ya(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ds(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function dd() {}
  function xy(e, t, i, o, l) {
    if (l) {
      if (typeof o == "function") {
        var c = o;
        o = function () {
          var N = js(h);
          c.call(N);
        };
      }
      var h = ud(t, o, e, 0, null, !1, !1, "", dd);
      return (
        (e._reactRootContainer = h),
        (e[Ut] = h.current),
        $r(e.nodeType === 8 ? e.parentNode : e),
        Dn(),
        h
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof o == "function") {
      var v = o;
      o = function () {
        var N = js(k);
        v.call(N);
      };
    }
    var k = Ka(e, 0, !1, null, null, !1, !1, "", dd);
    return (
      (e._reactRootContainer = k),
      (e[Ut] = k.current),
      $r(e.nodeType === 8 ? e.parentNode : e),
      Dn(function () {
        Ms(t, k, i, o);
      }),
      k
    );
  }
  function Rs(e, t, i, o, l) {
    var c = i._reactRootContainer;
    if (c) {
      var h = c;
      if (typeof l == "function") {
        var v = l;
        l = function () {
          var k = js(h);
          v.call(k);
        };
      }
      Ms(t, h, e, l);
    } else h = xy(i, t, e, l, o);
    return js(h);
  }
  (($u = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = Ar(t.pendingLanes);
          i !== 0 &&
            (xo(t, i | 1),
            lt(t, Ve()),
            (le & 6) === 0 && ((cr = Ve() + 500), on()));
        }
        break;
      case 13:
        (Dn(function () {
          var o = Kt(e, 1);
          if (o !== null) {
            var l = tt();
            At(o, e, 1, l);
          }
        }),
          Ga(e, 1));
    }
  }),
    (wo = function (e) {
      if (e.tag === 13) {
        var t = Kt(e, 134217728);
        if (t !== null) {
          var i = tt();
          At(t, e, 134217728, i);
        }
        Ga(e, 134217728);
      }
    }),
    (Ku = function (e) {
      if (e.tag === 13) {
        var t = dn(e),
          i = Kt(e, t);
        if (i !== null) {
          var o = tt();
          At(i, e, t, o);
        }
        Ga(e, t);
      }
    }),
    (Gu = function () {
      return pe;
    }),
    (Xu = function (e, t) {
      var i = pe;
      try {
        return ((pe = e), t());
      } finally {
        pe = i;
      }
    }),
    (fo = function (e, t, i) {
      switch (t) {
        case "input":
          if ((ro(e, i), (t = i.name), i.type === "radio" && t != null)) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < i.length;
              t++
            ) {
              var o = i[t];
              if (o !== e && o.form === e.form) {
                var l = Yi(o);
                if (!l) throw Error(s(90));
                (vu(o), ro(o, l));
              }
            }
          }
          break;
        case "textarea":
          Tu(e, i);
          break;
        case "select":
          ((t = i.value), t != null && bn(e, !!i.multiple, t, !1));
      }
    }),
    (Ru = Ba),
    (Lu = Dn));
  var wy = { usingClientEntryPoint: !1, Events: [Xr, qn, Yi, Au, Du, Ba] },
    li = {
      findFiberByHostInstance: Tn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Sy = {
      bundleType: li.bundleType,
      version: li.version,
      rendererPackageName: li.rendererPackageName,
      rendererConfig: li.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: b.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Fu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: li.findFiberByHostInstance || vy,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ls.isDisabled && Ls.supportsFiber)
      try {
        ((Ai = Ls.inject(Sy)), (Vt = Ls));
      } catch {}
  }
  return (
    (ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wy),
    (ut.createPortal = function (e, t) {
      var i =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ya(t)) throw Error(s(200));
      return yy(e, t, null, i);
    }),
    (ut.createRoot = function (e, t) {
      if (!Ya(e)) throw Error(s(299));
      var i = !1,
        o = "",
        l = fd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (i = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ka(e, 1, !1, null, null, i, !1, o, l)),
        (e[Ut] = t.current),
        $r(e.nodeType === 8 ? e.parentNode : e),
        new Xa(t)
      );
    }),
    (ut.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return ((e = Fu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (ut.flushSync = function (e) {
      return Dn(e);
    }),
    (ut.hydrate = function (e, t, i) {
      if (!Ds(t)) throw Error(s(200));
      return Rs(null, e, t, !0, i);
    }),
    (ut.hydrateRoot = function (e, t, i) {
      if (!Ya(e)) throw Error(s(405));
      var o = (i != null && i.hydratedSources) || null,
        l = !1,
        c = "",
        h = fd;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (l = !0),
          i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (h = i.onRecoverableError)),
        (t = ud(t, null, e, 1, i ?? null, l, !1, c, h)),
        (e[Ut] = t.current),
        $r(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          ((i = o[e]),
            (l = i._getVersion),
            (l = l(i._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [i, l])
              : t.mutableSourceEagerHydrationData.push(i, l));
      return new As(t);
    }),
    (ut.render = function (e, t, i) {
      if (!Ds(t)) throw Error(s(200));
      return Rs(null, e, t, !1, i);
    }),
    (ut.unmountComponentAtNode = function (e) {
      if (!Ds(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (Dn(function () {
            Rs(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ut] = null));
            });
          }),
          !0)
        : !1;
    }),
    (ut.unstable_batchedUpdates = Ba),
    (ut.unstable_renderSubtreeIntoContainer = function (e, t, i, o) {
      if (!Ds(i)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Rs(e, t, i, !1, o);
    }),
    (ut.version = "18.3.1-next-f1338f8080-20240426"),
    ut
  );
}
var wd;
function jy() {
  if (wd) return Za.exports;
  wd = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return (n(), (Za.exports = My()), Za.exports);
}
var Sd;
function Ay() {
  if (Sd) return Vs;
  Sd = 1;
  var n = jy();
  return ((Vs.createRoot = n.createRoot), (Vs.hydrateRoot = n.hydrateRoot), Vs);
}
var Dy = Ay(),
  Q = Ul();
const zh = Q.createContext({});
function Ry(n) {
  const r = Q.useRef(null);
  return (r.current === null && (r.current = n()), r.current);
}
const Ly = typeof window < "u",
  Vy = Ly ? Q.useLayoutEffect : Q.useEffect,
  Wl = Q.createContext(null);
function Hl(n, r) {
  n.indexOf(r) === -1 && n.push(r);
}
function $s(n, r) {
  const s = n.indexOf(r);
  s > -1 && n.splice(s, 1);
}
const bt = (n, r, s) => (s > r ? r : s < n ? n : s);
let $l = () => {};
const xn = {},
  Oh = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function Bh(n) {
  return typeof n == "object" && n !== null;
}
const bh = (n) => /^0[^.\s]+$/u.test(n);
function Uh(n) {
  let r;
  return () => (r === void 0 && (r = n()), r);
}
const Tt = (n) => n,
  _y = (n, r) => (s) => r(n(s)),
  wi = (...n) => n.reduce(_y),
  gi = (n, r, s) => {
    const a = r - n;
    return a === 0 ? 1 : (s - n) / a;
  };
class Kl {
  constructor() {
    this.subscriptions = [];
  }
  add(r) {
    return (Hl(this.subscriptions, r), () => $s(this.subscriptions, r));
  }
  notify(r, s, a) {
    const u = this.subscriptions.length;
    if (u)
      if (u === 1) this.subscriptions[0](r, s, a);
      else
        for (let d = 0; d < u; d++) {
          const f = this.subscriptions[d];
          f && f(r, s, a);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const mt = (n) => n * 1e3,
  kt = (n) => n / 1e3;
function Wh(n, r) {
  return r ? n * (1e3 / r) : 0;
}
const Hh = (n, r, s) =>
    (((1 - 3 * s + 3 * r) * n + (3 * s - 6 * r)) * n + 3 * r) * n,
  Iy = 1e-7,
  Fy = 12;
function zy(n, r, s, a, u) {
  let d,
    f,
    p = 0;
  do ((f = r + (s - r) / 2), (d = Hh(f, a, u) - n), d > 0 ? (s = f) : (r = f));
  while (Math.abs(d) > Iy && ++p < Fy);
  return f;
}
function Si(n, r, s, a) {
  if (n === r && s === a) return Tt;
  const u = (d) => zy(d, 0, 1, n, s);
  return (d) => (d === 0 || d === 1 ? d : Hh(u(d), r, a));
}
const $h = (n) => (r) => (r <= 0.5 ? n(2 * r) / 2 : (2 - n(2 * (1 - r))) / 2),
  Kh = (n) => (r) => 1 - n(1 - r),
  Gh = Si(0.33, 1.53, 0.69, 0.99),
  Gl = Kh(Gh),
  Xh = $h(Gl),
  Yh = (n) =>
    n >= 1
      ? 1
      : (n *= 2) < 1
        ? 0.5 * Gl(n)
        : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
  Xl = (n) => 1 - Math.sin(Math.acos(n)),
  Qh = Kh(Xl),
  qh = $h(Xl),
  Oy = Si(0.42, 0, 1, 1),
  By = Si(0, 0, 0.58, 1),
  Zh = Si(0.42, 0, 0.58, 1),
  by = (n) => Array.isArray(n) && typeof n[0] != "number",
  Jh = (n) => Array.isArray(n) && typeof n[0] == "number",
  Uy = {
    linear: Tt,
    easeIn: Oy,
    easeInOut: Zh,
    easeOut: By,
    circIn: Xl,
    circInOut: qh,
    circOut: Qh,
    backIn: Gl,
    backInOut: Xh,
    backOut: Gh,
    anticipate: Yh,
  },
  Wy = (n) => typeof n == "string",
  kd = (n) => {
    if (Jh(n)) {
      $l(n.length === 4);
      const [r, s, a, u] = n;
      return Si(r, s, a, u);
    } else if (Wy(n)) return Uy[n];
    return n;
  },
  _s = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Hy(n, r) {
  let s = new Set(),
    a = new Set(),
    u = !1,
    d = !1;
  const f = new WeakSet();
  let p = { delta: 0, timestamp: 0, isProcessing: !1 };
  function m(g) {
    (f.has(g) && (y.schedule(g), n()), g(p));
  }
  const y = {
    schedule: (g, x = !1, S = !1) => {
      const j = S && u ? s : a;
      return (x && f.add(g), j.add(g), g);
    },
    cancel: (g) => {
      (a.delete(g), f.delete(g));
    },
    process: (g) => {
      if (((p = g), u)) {
        d = !0;
        return;
      }
      u = !0;
      const x = s;
      ((s = a),
        (a = x),
        s.forEach(m),
        s.clear(),
        (u = !1),
        d && ((d = !1), y.process(g)));
    },
  };
  return y;
}
const $y = 40;
function ep(n, r) {
  let s = !1,
    a = !0;
  const u = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (s = !0),
    f = _s.reduce((O, b) => ((O[b] = Hy(d)), O), {}),
    {
      setup: p,
      read: m,
      resolveKeyframes: y,
      preUpdate: g,
      update: x,
      preRender: S,
      render: M,
      postRender: j,
    } = f,
    D = () => {
      const O = xn.useManualTiming,
        b = O ? u.timestamp : performance.now();
      ((s = !1),
        O ||
          (u.delta = a ? 1e3 / 60 : Math.max(Math.min(b - u.timestamp, $y), 1)),
        (u.timestamp = b),
        (u.isProcessing = !0),
        p.process(u),
        m.process(u),
        y.process(u),
        g.process(u),
        x.process(u),
        S.process(u),
        M.process(u),
        j.process(u),
        (u.isProcessing = !1),
        s && r && ((a = !1), n(D)));
    },
    A = () => {
      ((s = !0), (a = !0), u.isProcessing || n(D));
    };
  return {
    schedule: _s.reduce((O, b) => {
      const q = f[b];
      return (
        (O[b] = (ae, de = !1, te = !1) => (s || A(), q.schedule(ae, de, te))),
        O
      );
    }, {}),
    cancel: (O) => {
      for (let b = 0; b < _s.length; b++) f[_s[b]].cancel(O);
    },
    state: u,
    steps: f,
  };
}
const {
  schedule: xe,
  cancel: wn,
  state: Xe,
  steps: tl,
} = ep(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Tt, !0);
let Os;
function Ky() {
  Os = void 0;
}
const nt = {
    now: () => (
      Os === void 0 &&
        nt.set(
          Xe.isProcessing || xn.useManualTiming
            ? Xe.timestamp
            : performance.now(),
        ),
      Os
    ),
    set: (n) => {
      ((Os = n), queueMicrotask(Ky));
    },
  },
  tp = (n) => (r) => typeof r == "string" && r.startsWith(n),
  np = tp("--"),
  Gy = tp("var(--"),
  Yl = (n) => (Gy(n) ? Xy.test(n.split("/*")[0].trim()) : !1),
  Xy =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Td(n) {
  return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--");
}
const wr = {
    test: (n) => typeof n == "number",
    parse: parseFloat,
    transform: (n) => n,
  },
  yi = { ...wr, transform: (n) => bt(0, 1, n) },
  Is = { ...wr, default: 1 },
  di = (n) => Math.round(n * 1e5) / 1e5,
  Ql = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Yy(n) {
  return n == null;
}
const Qy =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ql = (n, r) => (s) =>
    !!(
      (typeof s == "string" && Qy.test(s) && s.startsWith(n)) ||
      (r && !Yy(s) && Object.prototype.hasOwnProperty.call(s, r))
    ),
  rp = (n, r, s) => (a) => {
    if (typeof a != "string") return a;
    const [u, d, f, p] = a.match(Ql);
    return {
      [n]: parseFloat(u),
      [r]: parseFloat(d),
      [s]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  qy = (n) => bt(0, 255, n),
  nl = { ...wr, transform: (n) => Math.round(qy(n)) },
  Fn = {
    test: ql("rgb", "red"),
    parse: rp("red", "green", "blue"),
    transform: ({ red: n, green: r, blue: s, alpha: a = 1 }) =>
      "rgba(" +
      nl.transform(n) +
      ", " +
      nl.transform(r) +
      ", " +
      nl.transform(s) +
      ", " +
      di(yi.transform(a)) +
      ")",
  };
function Zy(n) {
  let r = "",
    s = "",
    a = "",
    u = "";
  return (
    n.length > 5
      ? ((r = n.substring(1, 3)),
        (s = n.substring(3, 5)),
        (a = n.substring(5, 7)),
        (u = n.substring(7, 9)))
      : ((r = n.substring(1, 2)),
        (s = n.substring(2, 3)),
        (a = n.substring(3, 4)),
        (u = n.substring(4, 5)),
        (r += r),
        (s += s),
        (a += a),
        (u += u)),
    {
      red: parseInt(r, 16),
      green: parseInt(s, 16),
      blue: parseInt(a, 16),
      alpha: u ? parseInt(u, 16) / 255 : 1,
    }
  );
}
const yl = { test: ql("#"), parse: Zy, transform: Fn.transform },
  ki = (n) => ({
    test: (r) =>
      typeof r == "string" && r.endsWith(n) && r.split(" ").length === 1,
    parse: parseFloat,
    transform: (r) => `${r}${n}`,
  }),
  gn = ki("deg"),
  Bt = ki("%"),
  K = ki("px"),
  Jy = ki("vh"),
  e0 = ki("vw"),
  Pd = {
    ...Bt,
    parse: (n) => Bt.parse(n) / 100,
    transform: (n) => Bt.transform(n * 100),
  },
  hr = {
    test: ql("hsl", "hue"),
    parse: rp("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: r, lightness: s, alpha: a = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      Bt.transform(di(r)) +
      ", " +
      Bt.transform(di(s)) +
      ", " +
      di(yi.transform(a)) +
      ")",
  },
  ze = {
    test: (n) => Fn.test(n) || yl.test(n) || hr.test(n),
    parse: (n) =>
      Fn.test(n) ? Fn.parse(n) : hr.test(n) ? hr.parse(n) : yl.parse(n),
    transform: (n) =>
      typeof n == "string"
        ? n
        : n.hasOwnProperty("red")
          ? Fn.transform(n)
          : hr.transform(n),
    getAnimatableNone: (n) => {
      const r = ze.parse(n);
      return ((r.alpha = 0), ze.transform(r));
    },
  },
  t0 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function n0(n) {
  var r, s;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((r = n.match(Ql)) == null ? void 0 : r.length) || 0) +
      (((s = n.match(t0)) == null ? void 0 : s.length) || 0) >
      0
  );
}
const ip = "number",
  sp = "color",
  r0 = "var",
  i0 = "var(",
  Ed = "${}",
  s0 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function vr(n) {
  const r = n.toString(),
    s = [],
    a = { color: [], number: [], var: [] },
    u = [];
  let d = 0;
  const p = r
    .replace(
      s0,
      (m) => (
        ze.test(m)
          ? (a.color.push(d), u.push(sp), s.push(ze.parse(m)))
          : m.startsWith(i0)
            ? (a.var.push(d), u.push(r0), s.push(m))
            : (a.number.push(d), u.push(ip), s.push(parseFloat(m))),
        ++d,
        Ed
      ),
    )
    .split(Ed);
  return { values: s, split: p, indexes: a, types: u };
}
function o0(n) {
  return vr(n).values;
}
function op({ split: n, types: r }) {
  const s = n.length;
  return (a) => {
    let u = "";
    for (let d = 0; d < s; d++)
      if (((u += n[d]), a[d] !== void 0)) {
        const f = r[d];
        f === ip
          ? (u += di(a[d]))
          : f === sp
            ? (u += ze.transform(a[d]))
            : (u += a[d]);
      }
    return u;
  };
}
function a0(n) {
  return op(vr(n));
}
const l0 = (n) =>
    typeof n == "number" ? 0 : ze.test(n) ? ze.getAnimatableNone(n) : n,
  u0 = (n, r) =>
    typeof n == "number"
      ? r != null && r.trim().endsWith("/")
        ? n
        : 0
      : l0(n);
function c0(n) {
  const r = vr(n);
  return op(r)(r.values.map((a, u) => u0(a, r.split[u])));
}
const Lt = {
  test: n0,
  parse: o0,
  createTransformer: a0,
  getAnimatableNone: c0,
};
function rl(n, r, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6
      ? n + (r - n) * 6 * s
      : s < 1 / 2
        ? r
        : s < 2 / 3
          ? n + (r - n) * (2 / 3 - s) * 6
          : n
  );
}
function f0({ hue: n, saturation: r, lightness: s, alpha: a }) {
  ((n /= 360), (r /= 100), (s /= 100));
  let u = 0,
    d = 0,
    f = 0;
  if (!r) u = d = f = s;
  else {
    const p = s < 0.5 ? s * (1 + r) : s + r - s * r,
      m = 2 * s - p;
    ((u = rl(m, p, n + 1 / 3)), (d = rl(m, p, n)), (f = rl(m, p, n - 1 / 3)));
  }
  return {
    red: Math.round(u * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: a,
  };
}
function Ks(n, r) {
  return (s) => (s > 0 ? r : n);
}
const je = (n, r, s) => n + (r - n) * s,
  il = (n, r, s) => {
    const a = n * n,
      u = s * (r * r - a) + a;
    return u < 0 ? 0 : Math.sqrt(u);
  },
  d0 = [yl, Fn, hr],
  h0 = (n) => d0.find((r) => r.test(n));
function Cd(n) {
  const r = h0(n);
  if (!r) return !1;
  let s = r.parse(n);
  return (r === hr && (s = f0(s)), s);
}
const Nd = (n, r) => {
    const s = Cd(n),
      a = Cd(r);
    if (!s || !a) return Ks(n, r);
    const u = { ...s };
    return (d) => (
      (u.red = il(s.red, a.red, d)),
      (u.green = il(s.green, a.green, d)),
      (u.blue = il(s.blue, a.blue, d)),
      (u.alpha = je(s.alpha, a.alpha, d)),
      Fn.transform(u)
    );
  },
  vl = new Set(["none", "hidden"]);
function p0(n, r) {
  return vl.has(n) ? (s) => (s <= 0 ? n : r) : (s) => (s >= 1 ? r : n);
}
function m0(n, r) {
  return (s) => je(n, r, s);
}
function Zl(n) {
  return typeof n == "number"
    ? m0
    : typeof n == "string"
      ? Yl(n)
        ? Ks
        : ze.test(n)
          ? Nd
          : v0
      : Array.isArray(n)
        ? ap
        : typeof n == "object"
          ? ze.test(n)
            ? Nd
            : g0
          : Ks;
}
function ap(n, r) {
  const s = [...n],
    a = s.length,
    u = n.map((d, f) => Zl(d)(d, r[f]));
  return (d) => {
    for (let f = 0; f < a; f++) s[f] = u[f](d);
    return s;
  };
}
function g0(n, r) {
  const s = { ...n, ...r },
    a = {};
  for (const u in s)
    n[u] !== void 0 && r[u] !== void 0 && (a[u] = Zl(n[u])(n[u], r[u]));
  return (u) => {
    for (const d in a) s[d] = a[d](u);
    return s;
  };
}
function y0(n, r) {
  const s = [],
    a = { color: 0, var: 0, number: 0 };
  for (let u = 0; u < r.values.length; u++) {
    const d = r.types[u],
      f = n.indexes[d][a[d]],
      p = n.values[f] ?? 0;
    ((s[u] = p), a[d]++);
  }
  return s;
}
const v0 = (n, r) => {
  const s = Lt.createTransformer(r),
    a = vr(n),
    u = vr(r);
  return a.indexes.var.length === u.indexes.var.length &&
    a.indexes.color.length === u.indexes.color.length &&
    a.indexes.number.length >= u.indexes.number.length
    ? (vl.has(n) && !u.values.length) || (vl.has(r) && !a.values.length)
      ? p0(n, r)
      : wi(ap(y0(a, u), u.values), s)
    : Ks(n, r);
};
function lp(n, r, s) {
  return typeof n == "number" && typeof r == "number" && typeof s == "number"
    ? je(n, r, s)
    : Zl(n)(n, r);
}
const x0 = (n) => {
    const r = ({ timestamp: s }) => n(s);
    return {
      start: (s = !0) => xe.update(r, s),
      stop: () => wn(r),
      now: () => (Xe.isProcessing ? Xe.timestamp : nt.now()),
    };
  },
  up = (n, r, s = 10) => {
    let a = "";
    const u = Math.max(Math.round(r / s), 2);
    for (let d = 0; d < u; d++)
      a += Math.round(n(d / (u - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${a.substring(0, a.length - 2)})`;
  },
  Gs = 2e4;
function Jl(n) {
  let r = 0;
  const s = 50;
  let a = n.next(r);
  for (; !a.done && r < Gs; ) ((r += s), (a = n.next(r)));
  return r >= Gs ? 1 / 0 : r;
}
function w0(n, r = 100, s) {
  const a = s({ ...n, keyframes: [0, r] }),
    u = Math.min(Jl(a), Gs);
  return {
    type: "keyframes",
    ease: (d) => a.next(u * d).value / r,
    duration: kt(u),
  };
}
const Re = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function xl(n, r) {
  return n * Math.sqrt(1 - r * r);
}
const S0 = 12;
function k0(n, r, s) {
  let a = s;
  for (let u = 1; u < S0; u++) a = a - n(a) / r(a);
  return a;
}
const sl = 0.001;
function T0({
  duration: n = Re.duration,
  bounce: r = Re.bounce,
  velocity: s = Re.velocity,
  mass: a = Re.mass,
}) {
  let u,
    d,
    f = 1 - r;
  ((f = bt(Re.minDamping, Re.maxDamping, f)),
    (n = bt(Re.minDuration, Re.maxDuration, kt(n))),
    f < 1
      ? ((u = (y) => {
          const g = y * f,
            x = g * n,
            S = g - s,
            M = xl(y, f),
            j = Math.exp(-x);
          return sl - (S / M) * j;
        }),
        (d = (y) => {
          const x = y * f * n,
            S = x * s + s,
            M = Math.pow(f, 2) * Math.pow(y, 2) * n,
            j = Math.exp(-x),
            D = xl(Math.pow(y, 2), f);
          return ((-u(y) + sl > 0 ? -1 : 1) * ((S - M) * j)) / D;
        }))
      : ((u = (y) => {
          const g = Math.exp(-y * n),
            x = (y - s) * n + 1;
          return -sl + g * x;
        }),
        (d = (y) => {
          const g = Math.exp(-y * n),
            x = (s - y) * (n * n);
          return g * x;
        })));
  const p = 5 / n,
    m = k0(u, d, p);
  if (((n = mt(n)), isNaN(m)))
    return { stiffness: Re.stiffness, damping: Re.damping, duration: n };
  {
    const y = Math.pow(m, 2) * a;
    return { stiffness: y, damping: f * 2 * Math.sqrt(a * y), duration: n };
  }
}
const P0 = ["duration", "bounce"],
  E0 = ["stiffness", "damping", "mass"];
function Md(n, r) {
  return r.some((s) => n[s] !== void 0);
}
function C0(n) {
  let r = {
    velocity: Re.velocity,
    stiffness: Re.stiffness,
    damping: Re.damping,
    mass: Re.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Md(n, E0) && Md(n, P0))
    if (((r.velocity = 0), n.visualDuration)) {
      const s = n.visualDuration,
        a = (2 * Math.PI) / (s * 1.2),
        u = a * a,
        d = 2 * bt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u);
      r = { ...r, mass: Re.mass, stiffness: u, damping: d };
    } else {
      const s = T0({ ...n, velocity: 0 });
      ((r = { ...r, ...s, mass: Re.mass }), (r.isResolvedFromDuration = !0));
    }
  return r;
}
function Xs(n = Re.visualDuration, r = Re.bounce) {
  const s =
    typeof n != "object"
      ? { visualDuration: n, keyframes: [0, 1], bounce: r }
      : n;
  let { restSpeed: a, restDelta: u } = s;
  const d = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: y,
      mass: g,
      duration: x,
      velocity: S,
      isResolvedFromDuration: M,
    } = C0({ ...s, velocity: -kt(s.velocity || 0) }),
    j = S || 0,
    D = y / (2 * Math.sqrt(m * g)),
    A = f - d,
    I = kt(Math.sqrt(m / g)),
    B = Math.abs(A) < 5;
  (a || (a = B ? Re.restSpeed.granular : Re.restSpeed.default),
    u || (u = B ? Re.restDelta.granular : Re.restDelta.default));
  let O, b, q, ae, de, te;
  if (D < 1)
    ((q = xl(I, D)),
      (ae = (j + D * I * A) / q),
      (O = (Z) => {
        const me = Math.exp(-D * I * Z);
        return f - me * (ae * Math.sin(q * Z) + A * Math.cos(q * Z));
      }),
      (de = D * I * ae + A * q),
      (te = D * I * A - ae * q),
      (b = (Z) =>
        Math.exp(-D * I * Z) * (de * Math.sin(q * Z) + te * Math.cos(q * Z))));
  else if (D === 1) {
    O = (me) => f - Math.exp(-I * me) * (A + (j + I * A) * me);
    const Z = j + I * A;
    b = (me) => Math.exp(-I * me) * (I * Z * me - j);
  } else {
    const Z = I * Math.sqrt(D * D - 1);
    O = (Ae) => {
      const Ie = Math.exp(-D * I * Ae),
        Se = Math.min(Z * Ae, 300);
      return (
        f - (Ie * ((j + D * I * A) * Math.sinh(Se) + Z * A * Math.cosh(Se))) / Z
      );
    };
    const me = (j + D * I * A) / Z,
      we = D * I * me - A * Z,
      Le = D * I * A - me * Z;
    b = (Ae) => {
      const Ie = Math.exp(-D * I * Ae),
        Se = Math.min(Z * Ae, 300);
      return Ie * (we * Math.sinh(Se) + Le * Math.cosh(Se));
    };
  }
  const ge = {
    calculatedDuration: (M && x) || null,
    velocity: (Z) => mt(b(Z)),
    next: (Z) => {
      if (!M && D < 1) {
        const we = Math.exp(-D * I * Z),
          Le = Math.sin(q * Z),
          Ae = Math.cos(q * Z),
          Ie = f - we * (ae * Le + A * Ae),
          Se = mt(we * (de * Le + te * Ae));
        return (
          (p.done = Math.abs(Se) <= a && Math.abs(f - Ie) <= u),
          (p.value = p.done ? f : Ie),
          p
        );
      }
      const me = O(Z);
      if (M) p.done = Z >= x;
      else {
        const we = mt(b(Z));
        p.done = Math.abs(we) <= a && Math.abs(f - me) <= u;
      }
      return ((p.value = p.done ? f : me), p);
    },
    toString: () => {
      const Z = Math.min(Jl(ge), Gs),
        me = up((we) => ge.next(Z * we).value, Z, 30);
      return Z + "ms " + me;
    },
    toTransition: () => {},
  };
  return ge;
}
Xs.applyToOptions = (n) => {
  const r = w0(n, 100, Xs);
  return (
    (n.ease = r.ease),
    (n.duration = mt(r.duration)),
    (n.type = "keyframes"),
    n
  );
};
const N0 = 5;
function cp(n, r, s) {
  const a = Math.max(r - N0, 0);
  return Wh(s - n(a), r - a);
}
function wl({
  keyframes: n,
  velocity: r = 0,
  power: s = 0.8,
  timeConstant: a = 325,
  bounceDamping: u = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: p,
  max: m,
  restDelta: y = 0.5,
  restSpeed: g,
}) {
  const x = n[0],
    S = { done: !1, value: x },
    M = (te) => (p !== void 0 && te < p) || (m !== void 0 && te > m),
    j = (te) =>
      p === void 0
        ? m
        : m === void 0 || Math.abs(p - te) < Math.abs(m - te)
          ? p
          : m;
  let D = s * r;
  const A = x + D,
    I = f === void 0 ? A : f(A);
  I !== A && (D = I - x);
  const B = (te) => -D * Math.exp(-te / a),
    O = (te) => I + B(te),
    b = (te) => {
      const ge = B(te),
        Z = O(te);
      ((S.done = Math.abs(ge) <= y), (S.value = S.done ? I : Z));
    };
  let q, ae;
  const de = (te) => {
    M(S.value) &&
      ((q = te),
      (ae = Xs({
        keyframes: [S.value, j(S.value)],
        velocity: cp(O, te, S.value),
        damping: u,
        stiffness: d,
        restDelta: y,
        restSpeed: g,
      })));
  };
  return (
    de(0),
    {
      calculatedDuration: null,
      next: (te) => {
        let ge = !1;
        return (
          !ae && q === void 0 && ((ge = !0), b(te), de(te)),
          q !== void 0 && te >= q ? ae.next(te - q) : (!ge && b(te), S)
        );
      },
    }
  );
}
function M0(n, r, s) {
  const a = [],
    u = s || xn.mix || lp,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let p = u(n[f], n[f + 1]);
    if (r) {
      const m = Array.isArray(r) ? r[f] || Tt : r;
      p = wi(m, p);
    }
    a.push(p);
  }
  return a;
}
function j0(n, r, { clamp: s = !0, ease: a, mixer: u } = {}) {
  const d = n.length;
  if (($l(d === r.length), d === 1)) return () => r[0];
  if (d === 2 && r[0] === r[1]) return () => r[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (r = [...r].reverse()));
  const p = M0(r, a, u),
    m = p.length,
    y = (g) => {
      if (f && g < n[0]) return r[0];
      let x = 0;
      if (m > 1) for (; x < n.length - 2 && !(g < n[x + 1]); x++);
      const S = gi(n[x], n[x + 1], g);
      return p[x](S);
    };
  return s ? (g) => y(bt(n[0], n[d - 1], g)) : y;
}
function A0(n, r) {
  const s = n[n.length - 1];
  for (let a = 1; a <= r; a++) {
    const u = gi(0, r, a);
    n.push(je(s, 1, u));
  }
}
function D0(n) {
  const r = [0];
  return (A0(r, n.length - 1), r);
}
function R0(n, r) {
  return n.map((s) => s * r);
}
function L0(n, r) {
  return n.map(() => r || Zh).splice(0, n.length - 1);
}
function hi({
  duration: n = 300,
  keyframes: r,
  times: s,
  ease: a = "easeInOut",
}) {
  const u = by(a) ? a.map(kd) : kd(a),
    d = { done: !1, value: r[0] },
    f = R0(s && s.length === r.length ? s : D0(r), n),
    p = j0(f, r, { ease: Array.isArray(u) ? u : L0(r, u) });
  return {
    calculatedDuration: n,
    next: (m) => ((d.value = p(m)), (d.done = m >= n), d),
  };
}
const V0 = (n) => n !== null;
function eu(n, { repeat: r, repeatType: s = "loop" }, a, u = 1) {
  const d = n.filter(V0),
    p = u < 0 || (r && s !== "loop" && r % 2 === 1) ? 0 : d.length - 1;
  return !p || a === void 0 ? d[p] : a;
}
const _0 = { decay: wl, inertia: wl, tween: hi, keyframes: hi, spring: Xs };
function fp(n) {
  typeof n.type == "string" && (n.type = _0[n.type]);
}
class tu {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((r) => {
      this.resolve = r;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(r, s) {
    return this.finished.then(r, s);
  }
}
const I0 = (n) => n / 100;
class nu extends tu {
  constructor(r) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var a, u;
        const { motionValue: s } = this.options;
        (s && s.updatedAt !== nt.now() && this.tick(nt.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (u = (a = this.options).onStop) == null || u.call(a)));
      }),
      (this.options = r),
      this.initAnimation(),
      this.play(),
      r.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: r } = this;
    fp(r);
    const {
      type: s = hi,
      repeat: a = 0,
      repeatDelay: u = 0,
      repeatType: d,
      velocity: f = 0,
    } = r;
    let { keyframes: p } = r;
    const m = s || hi;
    m !== hi &&
      typeof p[0] != "number" &&
      ((this.mixKeyframes = wi(I0, lp(p[0], p[1]))), (p = [0, 100]));
    const y = m({ ...r, keyframes: p });
    (d === "mirror" &&
      (this.mirroredGenerator = m({
        ...r,
        keyframes: [...p].reverse(),
        velocity: -f,
      })),
      y.calculatedDuration === null && (y.calculatedDuration = Jl(y)));
    const { calculatedDuration: g } = y;
    ((this.calculatedDuration = g),
      (this.resolvedDuration = g + u),
      (this.totalDuration = this.resolvedDuration * (a + 1) - u),
      (this.generator = y));
  }
  updateTime(r) {
    const s = Math.round(r - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = s);
  }
  tick(r, s = !1) {
    const {
      generator: a,
      totalDuration: u,
      mixKeyframes: d,
      mirroredGenerator: f,
      resolvedDuration: p,
      calculatedDuration: m,
    } = this;
    if (this.startTime === null) return a.next(0);
    const {
      delay: y = 0,
      keyframes: g,
      repeat: x,
      repeatType: S,
      repeatDelay: M,
      type: j,
      onUpdate: D,
      finalKeyframe: A,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, r))
      : this.speed < 0 &&
        (this.startTime = Math.min(r - u / this.speed, this.startTime)),
      s ? (this.currentTime = r) : this.updateTime(r));
    const I = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1),
      B = this.playbackSpeed >= 0 ? I < 0 : I > u;
    ((this.currentTime = Math.max(I, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = u));
    let O = this.currentTime,
      b = a;
    if (x) {
      const te = Math.min(this.currentTime, u) / p;
      let ge = Math.floor(te),
        Z = te % 1;
      (!Z && te >= 1 && (Z = 1),
        Z === 1 && ge--,
        (ge = Math.min(ge, x + 1)),
        !!(ge % 2) &&
          (S === "reverse"
            ? ((Z = 1 - Z), M && (Z -= M / p))
            : S === "mirror" && (b = f)),
        (O = bt(0, 1, Z) * p));
    }
    const q = B ? { done: !1, value: g[0] } : b.next(O);
    d && !B && (q.value = d(q.value));
    let { done: ae } = q;
    !B &&
      m !== null &&
      (ae =
        this.playbackSpeed >= 0
          ? this.currentTime >= u
          : this.currentTime <= 0);
    const de =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && ae));
    return (
      de && j !== wl && (q.value = eu(g, this.options, A, this.speed)),
      D && D(q.value),
      de && this.finish(),
      q
    );
  }
  then(r, s) {
    return this.finished.then(r, s);
  }
  get duration() {
    return kt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: r = 0 } = this.options || {};
    return this.duration + kt(r);
  }
  get time() {
    return kt(this.currentTime);
  }
  set time(r) {
    ((r = mt(r)),
      (this.currentTime = r),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = r)
        : this.driver &&
          (this.startTime = this.driver.now() - r / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = r),
          this.tick(r)));
  }
  getGeneratorVelocity() {
    const r = this.currentTime;
    if (r <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(r);
    const s = this.generator.next(r).value;
    return cp((a) => this.generator.next(a).value, r, s);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(r) {
    const s = this.playbackSpeed !== r;
    (s && this.driver && this.updateTime(nt.now()),
      (this.playbackSpeed = r),
      s && this.driver && (this.time = kt(this.currentTime)));
  }
  play() {
    var u, d;
    if (this.isStopped) return;
    const { driver: r = x0, startTime: s } = this.options;
    (this.driver || (this.driver = r((f) => this.tick(f))),
      (d = (u = this.options).onPlay) == null || d.call(u));
    const a = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = a))
      : this.holdTime !== null
        ? (this.startTime = a - this.holdTime)
        : this.startTime || (this.startTime = s ?? a),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(nt.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var r, s;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (s = (r = this.options).onComplete) == null || s.call(r));
  }
  cancel() {
    var r, s;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (s = (r = this.options).onCancel) == null || s.call(r));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(r) {
    return ((this.startTime = 0), this.tick(r, !0));
  }
  attachTimeline(r) {
    var s;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (s = this.driver) == null || s.stop(),
      r.observe(this)
    );
  }
}
function F0(n) {
  for (let r = 1; r < n.length; r++) n[r] ?? (n[r] = n[r - 1]);
}
const zn = (n) => (n * 180) / Math.PI,
  Sl = (n) => {
    const r = zn(Math.atan2(n[1], n[0]));
    return kl(r);
  },
  z0 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: Sl,
    rotateZ: Sl,
    skewX: (n) => zn(Math.atan(n[1])),
    skewY: (n) => zn(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  kl = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  jd = Sl,
  Ad = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  Dd = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  O0 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Ad,
    scaleY: Dd,
    scale: (n) => (Ad(n) + Dd(n)) / 2,
    rotateX: (n) => kl(zn(Math.atan2(n[6], n[5]))),
    rotateY: (n) => kl(zn(Math.atan2(-n[2], n[0]))),
    rotateZ: jd,
    rotate: jd,
    skewX: (n) => zn(Math.atan(n[4])),
    skewY: (n) => zn(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function Tl(n) {
  return n.includes("scale") ? 1 : 0;
}
function Pl(n, r) {
  if (!n || n === "none") return Tl(r);
  const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let a, u;
  if (s) ((a = O0), (u = s));
  else {
    const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((a = z0), (u = p));
  }
  if (!u) return Tl(r);
  const d = a[r],
    f = u[1].split(",").map(b0);
  return typeof d == "function" ? d(f) : f[d];
}
const B0 = (n, r) => {
  const { transform: s = "none" } = getComputedStyle(n);
  return Pl(s, r);
};
function b0(n) {
  return parseFloat(n.trim());
}
const Sr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  kr = new Set(Sr),
  Rd = (n) => n === wr || n === K,
  U0 = new Set(["x", "y", "z"]),
  W0 = Sr.filter((n) => !U0.has(n));
function H0(n) {
  const r = [];
  return (
    W0.forEach((s) => {
      const a = n.getValue(s);
      a !== void 0 &&
        (r.push([s, a.get()]), a.set(s.startsWith("scale") ? 1 : 0));
    }),
    r
  );
}
const vn = {
  width: (
    { x: n },
    { paddingLeft: r = "0", paddingRight: s = "0", boxSizing: a },
  ) => {
    const u = n.max - n.min;
    return a === "border-box" ? u : u - parseFloat(r) - parseFloat(s);
  },
  height: (
    { y: n },
    { paddingTop: r = "0", paddingBottom: s = "0", boxSizing: a },
  ) => {
    const u = n.max - n.min;
    return a === "border-box" ? u : u - parseFloat(r) - parseFloat(s);
  },
  top: (n, { top: r }) => parseFloat(r),
  left: (n, { left: r }) => parseFloat(r),
  bottom: ({ y: n }, { top: r }) => parseFloat(r) + (n.max - n.min),
  right: ({ x: n }, { left: r }) => parseFloat(r) + (n.max - n.min),
  x: (n, { transform: r }) => Pl(r, "x"),
  y: (n, { transform: r }) => Pl(r, "y"),
};
vn.translateX = vn.x;
vn.translateY = vn.y;
const On = new Set();
let El = !1,
  Cl = !1,
  Nl = !1;
function dp() {
  if (Cl) {
    const n = Array.from(On).filter((a) => a.needsMeasurement),
      r = new Set(n.map((a) => a.element)),
      s = new Map();
    (r.forEach((a) => {
      const u = H0(a);
      u.length && (s.set(a, u), a.render());
    }),
      n.forEach((a) => a.measureInitialState()),
      r.forEach((a) => {
        a.render();
        const u = s.get(a);
        u &&
          u.forEach(([d, f]) => {
            var p;
            (p = a.getValue(d)) == null || p.set(f);
          });
      }),
      n.forEach((a) => a.measureEndState()),
      n.forEach((a) => {
        a.suspendedScrollY !== void 0 && window.scrollTo(0, a.suspendedScrollY);
      }));
  }
  ((Cl = !1), (El = !1), On.forEach((n) => n.complete(Nl)), On.clear());
}
function hp() {
  On.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (Cl = !0));
  });
}
function $0() {
  ((Nl = !0), hp(), dp(), (Nl = !1));
}
class ru {
  constructor(r, s, a, u, d, f = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...r]),
      (this.onComplete = s),
      (this.name = a),
      (this.motionValue = u),
      (this.element = d),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (On.add(this),
          El || ((El = !0), xe.read(hp), xe.resolveKeyframes(dp)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: r,
      name: s,
      element: a,
      motionValue: u,
    } = this;
    if (r[0] === null) {
      const d = u == null ? void 0 : u.get(),
        f = r[r.length - 1];
      if (d !== void 0) r[0] = d;
      else if (a && s) {
        const p = a.readValue(s, f);
        p != null && (r[0] = p);
      }
      (r[0] === void 0 && (r[0] = f), u && d === void 0 && u.set(r[0]));
    }
    F0(r);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(r = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, r),
      On.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (On.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const K0 = (n) => n.startsWith("--");
function pp(n, r, s) {
  K0(r) ? n.style.setProperty(r, s) : (n.style[r] = s);
}
const G0 = {};
function mp(n, r) {
  const s = Uh(n);
  return () => G0[r] ?? s();
}
const X0 = mp(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  gp = mp(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  fi = ([n, r, s, a]) => `cubic-bezier(${n}, ${r}, ${s}, ${a})`,
  Ld = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: fi([0, 0.65, 0.55, 1]),
    circOut: fi([0.55, 0, 1, 0.45]),
    backIn: fi([0.31, 0.01, 0.66, -0.59]),
    backOut: fi([0.33, 1.53, 0.69, 0.99]),
  };
function yp(n, r) {
  if (n)
    return typeof n == "function"
      ? gp()
        ? up(n, r)
        : "ease-out"
      : Jh(n)
        ? fi(n)
        : Array.isArray(n)
          ? n.map((s) => yp(s, r) || Ld.easeOut)
          : Ld[n];
}
function Y0(
  n,
  r,
  s,
  {
    delay: a = 0,
    duration: u = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: p = "easeOut",
    times: m,
  } = {},
  y = void 0,
) {
  const g = { [r]: s };
  m && (g.offset = m);
  const x = yp(p, u);
  Array.isArray(x) && (g.easing = x);
  const S = {
    delay: a,
    duration: u,
    easing: Array.isArray(x) ? "linear" : x,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return (y && (S.pseudoElement = y), n.animate(g, S));
}
function vp(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function Q0({ type: n, ...r }) {
  return vp(n) && gp()
    ? n.applyToOptions(r)
    : (r.duration ?? (r.duration = 300), r.ease ?? (r.ease = "easeOut"), r);
}
class xp extends tu {
  constructor(r) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !r)
    )
      return;
    const {
      element: s,
      name: a,
      keyframes: u,
      pseudoElement: d,
      allowFlatten: f = !1,
      finalKeyframe: p,
      onComplete: m,
    } = r;
    ((this.isPseudoElement = !!d),
      (this.allowFlatten = f),
      (this.options = r),
      $l(typeof r.type != "string"));
    const y = Q0(r);
    ((this.animation = Y0(s, a, u, y, d)),
      y.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const g = eu(u, this.options, p, this.speed);
          (this.updateMotionValue && this.updateMotionValue(g),
            pp(s, a, g),
            this.animation.cancel());
        }
        (m == null || m(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var r, s;
    (s = (r = this.animation).finish) == null || s.call(r);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: r } = this;
    r === "idle" ||
      r === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var s, a, u;
    const r = (s = this.options) == null ? void 0 : s.element;
    !this.isPseudoElement &&
      r != null &&
      r.isConnected &&
      ((u = (a = this.animation).commitStyles) == null || u.call(a));
  }
  get duration() {
    var s, a;
    const r =
      ((a =
        (s = this.animation.effect) == null ? void 0 : s.getComputedTiming) ==
      null
        ? void 0
        : a.call(s).duration) || 0;
    return kt(Number(r));
  }
  get iterationDuration() {
    const { delay: r = 0 } = this.options || {};
    return this.duration + kt(r);
  }
  get time() {
    return kt(Number(this.animation.currentTime) || 0);
  }
  set time(r) {
    const s = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = mt(r)),
      s && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(r) {
    (r < 0 && (this.finishedTime = null), (this.animation.playbackRate = r));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(r) {
    this.manualStartTime = this.animation.startTime = r;
  }
  attachTimeline({ timeline: r, rangeStart: s, rangeEnd: a, observe: u }) {
    var d;
    return (
      this.allowFlatten &&
        ((d = this.animation.effect) == null ||
          d.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      r && X0()
        ? ((this.animation.timeline = r),
          s && (this.animation.rangeStart = s),
          a && (this.animation.rangeEnd = a),
          Tt)
        : u(this)
    );
  }
}
const wp = { anticipate: Yh, backInOut: Xh, circInOut: qh };
function q0(n) {
  return n in wp;
}
function Z0(n) {
  typeof n.ease == "string" && q0(n.ease) && (n.ease = wp[n.ease]);
}
const ol = 10;
class J0 extends xp {
  constructor(r) {
    (Z0(r),
      fp(r),
      super(r),
      r.startTime !== void 0 &&
        r.autoplay !== !1 &&
        (this.startTime = r.startTime),
      (this.options = r));
  }
  updateMotionValue(r) {
    const {
      motionValue: s,
      onUpdate: a,
      onComplete: u,
      element: d,
      ...f
    } = this.options;
    if (!s) return;
    if (r !== void 0) {
      s.set(r);
      return;
    }
    const p = new nu({ ...f, autoplay: !1 }),
      m = Math.max(ol, nt.now() - this.startTime),
      y = bt(0, ol, m - ol),
      g = p.sample(m).value,
      { name: x } = this.options;
    (d && x && pp(d, x, g),
      s.setWithVelocity(p.sample(Math.max(0, m - y)).value, g, y),
      p.stop());
  }
}
const Vd = (n, r) =>
  r === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" &&
          (Lt.test(n) || n === "0") &&
          !n.startsWith("url("))
      );
function ev(n) {
  const r = n[0];
  if (n.length === 1) return !0;
  for (let s = 0; s < n.length; s++) if (n[s] !== r) return !0;
}
function tv(n, r, s, a) {
  const u = n[0];
  if (u === null) return !1;
  if (r === "display" || r === "visibility") return !0;
  const d = n[n.length - 1],
    f = Vd(u, r),
    p = Vd(d, r);
  return !f || !p ? !1 : ev(n) || ((s === "spring" || vp(s)) && a);
}
function Ml(n) {
  ((n.duration = 0), (n.type = "keyframes"));
}
const nv = new Set(["opacity", "clipPath", "filter", "transform"]),
  rv = Uh(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function iv(n) {
  var g;
  const {
    motionValue: r,
    name: s,
    repeatDelay: a,
    repeatType: u,
    damping: d,
    type: f,
  } = n;
  if (
    !(
      ((g = r == null ? void 0 : r.owner) == null
        ? void 0
        : g.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: m, transformTemplate: y } = r.owner.getProps();
  return (
    rv() &&
    s &&
    nv.has(s) &&
    (s !== "transform" || !y) &&
    !m &&
    !a &&
    u !== "mirror" &&
    d !== 0 &&
    f !== "inertia"
  );
}
const sv = 40;
class ov extends tu {
  constructor({
    autoplay: r = !0,
    delay: s = 0,
    type: a = "keyframes",
    repeat: u = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    keyframes: p,
    name: m,
    motionValue: y,
    element: g,
    ...x
  }) {
    var j;
    (super(),
      (this.stop = () => {
        var D, A;
        (this._animation &&
          (this._animation.stop(),
          (D = this.stopTimeline) == null || D.call(this)),
          (A = this.keyframeResolver) == null || A.cancel());
      }),
      (this.createdAt = nt.now()));
    const S = {
        autoplay: r,
        delay: s,
        type: a,
        repeat: u,
        repeatDelay: d,
        repeatType: f,
        name: m,
        motionValue: y,
        element: g,
        ...x,
      },
      M = (g == null ? void 0 : g.KeyframeResolver) || ru;
    ((this.keyframeResolver = new M(
      p,
      (D, A, I) => this.onKeyframesResolved(D, A, S, !I),
      m,
      y,
      g,
    )),
      (j = this.keyframeResolver) == null || j.scheduleResolve());
  }
  onKeyframesResolved(r, s, a, u) {
    var I, B;
    this.keyframeResolver = void 0;
    const {
      name: d,
      type: f,
      velocity: p,
      delay: m,
      isHandoff: y,
      onUpdate: g,
    } = a;
    this.resolvedAt = nt.now();
    let x = !0;
    tv(r, d, f, p) ||
      ((x = !1),
      (xn.instantAnimations || !m) && (g == null || g(eu(r, a, s))),
      (r[0] = r[r.length - 1]),
      Ml(a),
      (a.repeat = 0));
    const M = {
        startTime: u
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > sv
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: s,
        ...a,
        keyframes: r,
      },
      j = x && !y && iv(M),
      D =
        (B = (I = M.motionValue) == null ? void 0 : I.owner) == null
          ? void 0
          : B.current,
      A = j ? new J0({ ...M, element: D }) : new nu(M);
    (A.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Tt),
      this.pendingTimeline &&
        ((this.stopTimeline = A.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = A));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(r, s) {
    return this.finished.finally(r).then(() => {});
  }
  get animation() {
    var r;
    return (
      this._animation ||
        ((r = this.keyframeResolver) == null || r.resume(), $0()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(r) {
    this.animation.time = r;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(r) {
    this.animation.speed = r;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(r) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(r))
        : (this.pendingTimeline = r),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var r;
    (this._animation && this.animation.cancel(),
      (r = this.keyframeResolver) == null || r.cancel());
  }
}
function Sp(n, r, s, a = 0, u = 1) {
  const d = Array.from(n)
      .sort((y, g) => y.sortNodePosition(g))
      .indexOf(r),
    f = n.size,
    p = (f - 1) * a;
  return typeof s == "function" ? s(d, f) : u === 1 ? d * a : p - d * a;
}
const av = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function lv(n) {
  const r = av.exec(n);
  if (!r) return [,];
  const [, s, a, u] = r;
  return [`--${s ?? a}`, u];
}
function kp(n, r, s = 1) {
  const [a, u] = lv(n);
  if (!a) return;
  const d = window.getComputedStyle(r).getPropertyValue(a);
  if (d) {
    const f = d.trim();
    return Oh(f) ? parseFloat(f) : f;
  }
  return Yl(u) ? kp(u, r, s + 1) : u;
}
const uv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  cv = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  fv = { type: "keyframes", duration: 0.8 },
  dv = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  hv = (n, { keyframes: r }) =>
    r.length > 2
      ? fv
      : kr.has(n)
        ? n.startsWith("scale")
          ? cv(r[1])
          : uv
        : dv,
  pv = (n) => n !== null;
function mv(n, { repeat: r, repeatType: s = "loop" }, a) {
  const u = n.filter(pv),
    d = r && s !== "loop" && r % 2 === 1 ? 0 : u.length - 1;
  return u[d];
}
function Tp(n, r) {
  if (n != null && n.inherit && r) {
    const { inherit: s, ...a } = n;
    return { ...r, ...a };
  }
  return n;
}
function iu(n, r) {
  const s =
    (n == null ? void 0 : n[r]) ?? (n == null ? void 0 : n.default) ?? n;
  return s !== n ? Tp(s, n) : s;
}
function gv({
  when: n,
  delay: r,
  delayChildren: s,
  staggerChildren: a,
  staggerDirection: u,
  repeat: d,
  repeatType: f,
  repeatDelay: p,
  from: m,
  elapsed: y,
  ...g
}) {
  return !!Object.keys(g).length;
}
const su =
  (n, r, s, a = {}, u, d) =>
  (f) => {
    const p = iu(a, n) || {},
      m = p.delay || a.delay || 0;
    let { elapsed: y = 0 } = a;
    y = y - mt(m);
    const g = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: "easeOut",
      velocity: r.getVelocity(),
      ...p,
      delay: -y,
      onUpdate: (S) => {
        (r.set(S), p.onUpdate && p.onUpdate(S));
      },
      onComplete: () => {
        (f(), p.onComplete && p.onComplete());
      },
      name: n,
      motionValue: r,
      element: d ? void 0 : u,
    };
    (gv(p) || Object.assign(g, hv(n, g)),
      g.duration && (g.duration = mt(g.duration)),
      g.repeatDelay && (g.repeatDelay = mt(g.repeatDelay)),
      g.from !== void 0 && (g.keyframes[0] = g.from));
    let x = !1;
    if (
      ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
        (Ml(g), g.delay === 0 && (x = !0)),
      (xn.instantAnimations ||
        xn.skipAnimations ||
        (u != null && u.shouldSkipAnimations)) &&
        ((x = !0), Ml(g), (g.delay = 0)),
      (g.allowFlatten = !p.type && !p.ease),
      x && !d && r.get() !== void 0)
    ) {
      const S = mv(g.keyframes, p);
      if (S !== void 0) {
        xe.update(() => {
          (g.onUpdate(S), g.onComplete());
        });
        return;
      }
    }
    return p.isSync ? new nu(g) : new ov(g);
  };
function _d(n) {
  const r = [{}, {}];
  return (
    n == null ||
      n.values.forEach((s, a) => {
        ((r[0][a] = s.get()), (r[1][a] = s.getVelocity()));
      }),
    r
  );
}
function ou(n, r, s, a) {
  if (typeof r == "function") {
    const [u, d] = _d(a);
    r = r(s !== void 0 ? s : n.custom, u, d);
  }
  if (
    (typeof r == "string" && (r = n.variants && n.variants[r]),
    typeof r == "function")
  ) {
    const [u, d] = _d(a);
    r = r(s !== void 0 ? s : n.custom, u, d);
  }
  return r;
}
function Bn(n, r, s) {
  const a = n.getProps();
  return ou(a, r, s !== void 0 ? s : a.custom, n);
}
const Pp = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Sr,
  ]),
  Id = 30,
  yv = (n) => !isNaN(parseFloat(n));
class vv {
  constructor(r, s = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (a) => {
        var d;
        const u = nt.now();
        if (
          (this.updatedAt !== u && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(a),
          this.current !== this.prev &&
            ((d = this.events.change) == null || d.notify(this.current),
            this.dependents))
        )
          for (const f of this.dependents) f.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(r),
      (this.owner = s.owner));
  }
  setCurrent(r) {
    ((this.current = r),
      (this.updatedAt = nt.now()),
      this.canTrackVelocity === null &&
        r !== void 0 &&
        (this.canTrackVelocity = yv(this.current)));
  }
  setPrevFrameValue(r = this.current) {
    ((this.prevFrameValue = r), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(r) {
    return this.on("change", r);
  }
  on(r, s) {
    this.events[r] || (this.events[r] = new Kl());
    const a = this.events[r].add(s);
    return r === "change"
      ? () => {
          (a(),
            xe.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : a;
  }
  clearListeners() {
    for (const r in this.events) this.events[r].clear();
  }
  attach(r, s) {
    ((this.passiveEffect = r), (this.stopPassiveEffect = s));
  }
  set(r) {
    this.passiveEffect
      ? this.passiveEffect(r, this.updateAndNotify)
      : this.updateAndNotify(r);
  }
  setWithVelocity(r, s, a) {
    (this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = r),
      (this.prevUpdatedAt = this.updatedAt - a));
  }
  jump(r, s = !0) {
    (this.updateAndNotify(r),
      (this.prev = r),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var r;
    (r = this.events.change) == null || r.notify(this.current);
  }
  addDependent(r) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(r));
  }
  removeDependent(r) {
    this.dependents && this.dependents.delete(r);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const r = nt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      r - this.updatedAt > Id
    )
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Id);
    return Wh(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(r) {
    return (
      this.stop(),
      new Promise((s) => {
        ((this.hasAnimated = !0),
          (this.animation = r(s)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var r, s;
    ((r = this.dependents) == null || r.clear(),
      (s = this.events.destroy) == null || s.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function xr(n, r) {
  return new vv(n, r);
}
const jl = (n) => Array.isArray(n);
function xv(n, r, s) {
  n.hasValue(r) ? n.getValue(r).set(s) : n.addValue(r, xr(s));
}
function wv(n) {
  return jl(n) ? n[n.length - 1] || 0 : n;
}
function Sv(n, r) {
  const s = Bn(n, r);
  let { transitionEnd: a = {}, transition: u = {}, ...d } = s || {};
  d = { ...d, ...a };
  for (const f in d) {
    const p = wv(d[f]);
    xv(n, f, p);
  }
}
const Ye = (n) => !!(n && n.getVelocity);
function kv(n) {
  return !!(Ye(n) && n.add);
}
function Al(n, r) {
  const s = n.getValue("willChange");
  if (kv(s)) return s.add(r);
  if (!s && xn.WillChange) {
    const a = new xn.WillChange("auto");
    (n.addValue("willChange", a), a.add(r));
  }
}
function au(n) {
  return n.replace(/([A-Z])/g, (r) => `-${r.toLowerCase()}`);
}
const Tv = "framerAppearId",
  Ep = "data-" + au(Tv);
function Cp(n) {
  return n.props[Ep];
}
function Pv({ protectedKeys: n, needsAnimating: r }, s) {
  const a = n.hasOwnProperty(s) && r[s] !== !0;
  return ((r[s] = !1), a);
}
function Np(n, r, { delay: s = 0, transitionOverride: a, type: u } = {}) {
  let { transition: d, transitionEnd: f, ...p } = r;
  const m = n.getDefaultTransition();
  d = d ? Tp(d, m) : m;
  const y = d == null ? void 0 : d.reduceMotion;
  a && (d = a);
  const g = [],
    x = u && n.animationState && n.animationState.getState()[u];
  for (const S in p) {
    const M = n.getValue(S, n.latestValues[S] ?? null),
      j = p[S];
    if (j === void 0 || (x && Pv(x, S))) continue;
    const D = { delay: s, ...iu(d || {}, S) },
      A = M.get();
    if (
      A !== void 0 &&
      !M.isAnimating &&
      !Array.isArray(j) &&
      j === A &&
      !D.velocity
    )
      continue;
    let I = !1;
    if (window.MotionHandoffAnimation) {
      const b = Cp(n);
      if (b) {
        const q = window.MotionHandoffAnimation(b, S, xe);
        q !== null && ((D.startTime = q), (I = !0));
      }
    }
    Al(n, S);
    const B = y ?? n.shouldReduceMotion;
    M.start(su(S, M, j, B && Pp.has(S) ? { type: !1 } : D, n, I));
    const O = M.animation;
    O && g.push(O);
  }
  if (f) {
    const S = () =>
      xe.update(() => {
        f && Sv(n, f);
      });
    g.length ? Promise.all(g).then(S) : S();
  }
  return g;
}
function Dl(n, r, s = {}) {
  var m;
  const a = Bn(
    n,
    r,
    s.type === "exit"
      ? (m = n.presenceContext) == null
        ? void 0
        : m.custom
      : void 0,
  );
  let { transition: u = n.getDefaultTransition() || {} } = a || {};
  s.transitionOverride && (u = s.transitionOverride);
  const d = a ? () => Promise.all(Np(n, a, s)) : () => Promise.resolve(),
    f =
      n.variantChildren && n.variantChildren.size
        ? (y = 0) => {
            const {
              delayChildren: g = 0,
              staggerChildren: x,
              staggerDirection: S,
            } = u;
            return Ev(n, r, y, g, x, S, s);
          }
        : () => Promise.resolve(),
    { when: p } = u;
  if (p) {
    const [y, g] = p === "beforeChildren" ? [d, f] : [f, d];
    return y().then(() => g());
  } else return Promise.all([d(), f(s.delay)]);
}
function Ev(n, r, s = 0, a = 0, u = 0, d = 1, f) {
  const p = [];
  for (const m of n.variantChildren)
    (m.notify("AnimationStart", r),
      p.push(
        Dl(m, r, {
          ...f,
          delay:
            s +
            (typeof a == "function" ? 0 : a) +
            Sp(n.variantChildren, m, a, u, d),
        }).then(() => m.notify("AnimationComplete", r)),
      ));
  return Promise.all(p);
}
function Cv(n, r, s = {}) {
  n.notify("AnimationStart", r);
  let a;
  if (Array.isArray(r)) {
    const u = r.map((d) => Dl(n, d, s));
    a = Promise.all(u);
  } else if (typeof r == "string") a = Dl(n, r, s);
  else {
    const u = typeof r == "function" ? Bn(n, r, s.custom) : r;
    a = Promise.all(Np(n, u, s));
  }
  return a.then(() => {
    n.notify("AnimationComplete", r);
  });
}
const Nv = { test: (n) => n === "auto", parse: (n) => n },
  Mp = (n) => (r) => r.test(n),
  jp = [wr, K, Bt, gn, e0, Jy, Nv],
  Fd = (n) => jp.find(Mp(n));
function Mv(n) {
  return typeof n == "number"
    ? n === 0
    : n !== null
      ? n === "none" || n === "0" || bh(n)
      : !0;
}
const jv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Av(n) {
  const [r, s] = n.slice(0, -1).split("(");
  if (r === "drop-shadow") return n;
  const [a] = s.match(Ql) || [];
  if (!a) return n;
  const u = s.replace(a, "");
  let d = jv.has(r) ? 1 : 0;
  return (a !== s && (d *= 100), r + "(" + d + u + ")");
}
const Dv = /\b([a-z-]*)\(.*?\)/gu,
  Rl = {
    ...Lt,
    getAnimatableNone: (n) => {
      const r = n.match(Dv);
      return r ? r.map(Av).join(" ") : n;
    },
  },
  Ll = {
    ...Lt,
    getAnimatableNone: (n) => {
      const r = Lt.parse(n);
      return Lt.createTransformer(n)(
        r.map((a) =>
          typeof a == "number"
            ? 0
            : typeof a == "object"
              ? { ...a, alpha: 1 }
              : a,
        ),
      );
    },
  },
  zd = { ...wr, transform: Math.round },
  Rv = {
    rotate: gn,
    rotateX: gn,
    rotateY: gn,
    rotateZ: gn,
    scale: Is,
    scaleX: Is,
    scaleY: Is,
    scaleZ: Is,
    skew: gn,
    skewX: gn,
    skewY: gn,
    distance: K,
    translateX: K,
    translateY: K,
    translateZ: K,
    x: K,
    y: K,
    z: K,
    perspective: K,
    transformPerspective: K,
    opacity: yi,
    originX: Pd,
    originY: Pd,
    originZ: K,
  },
  lu = {
    borderWidth: K,
    borderTopWidth: K,
    borderRightWidth: K,
    borderBottomWidth: K,
    borderLeftWidth: K,
    borderRadius: K,
    borderTopLeftRadius: K,
    borderTopRightRadius: K,
    borderBottomRightRadius: K,
    borderBottomLeftRadius: K,
    width: K,
    maxWidth: K,
    height: K,
    maxHeight: K,
    top: K,
    right: K,
    bottom: K,
    left: K,
    inset: K,
    insetBlock: K,
    insetBlockStart: K,
    insetBlockEnd: K,
    insetInline: K,
    insetInlineStart: K,
    insetInlineEnd: K,
    padding: K,
    paddingTop: K,
    paddingRight: K,
    paddingBottom: K,
    paddingLeft: K,
    paddingBlock: K,
    paddingBlockStart: K,
    paddingBlockEnd: K,
    paddingInline: K,
    paddingInlineStart: K,
    paddingInlineEnd: K,
    margin: K,
    marginTop: K,
    marginRight: K,
    marginBottom: K,
    marginLeft: K,
    marginBlock: K,
    marginBlockStart: K,
    marginBlockEnd: K,
    marginInline: K,
    marginInlineStart: K,
    marginInlineEnd: K,
    fontSize: K,
    backgroundPositionX: K,
    backgroundPositionY: K,
    ...Rv,
    zIndex: zd,
    fillOpacity: yi,
    strokeOpacity: yi,
    numOctaves: zd,
  },
  Lv = {
    ...lu,
    color: ze,
    backgroundColor: ze,
    outlineColor: ze,
    fill: ze,
    stroke: ze,
    borderColor: ze,
    borderTopColor: ze,
    borderRightColor: ze,
    borderBottomColor: ze,
    borderLeftColor: ze,
    filter: Rl,
    WebkitFilter: Rl,
    mask: Ll,
    WebkitMask: Ll,
  },
  Ap = (n) => Lv[n],
  Vv = new Set([Rl, Ll]);
function Dp(n, r) {
  let s = Ap(n);
  return (
    Vv.has(s) || (s = Lt),
    s.getAnimatableNone ? s.getAnimatableNone(r) : void 0
  );
}
const _v = new Set(["auto", "none", "0"]);
function Iv(n, r, s) {
  let a = 0,
    u;
  for (; a < n.length && !u; ) {
    const d = n[a];
    (typeof d == "string" && !_v.has(d) && vr(d).values.length && (u = n[a]),
      a++);
  }
  if (u && s) for (const d of r) n[d] = Dp(s, u);
}
class Fv extends ru {
  constructor(r, s, a, u, d) {
    super(r, s, a, u, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: r, element: s, name: a } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let g = 0; g < r.length; g++) {
      let x = r[g];
      if (typeof x == "string" && ((x = x.trim()), Yl(x))) {
        const S = kp(x, s.current);
        (S !== void 0 && (r[g] = S),
          g === r.length - 1 && (this.finalKeyframe = x));
      }
    }
    if ((this.resolveNoneKeyframes(), !Pp.has(a) || r.length !== 2)) return;
    const [u, d] = r,
      f = Fd(u),
      p = Fd(d),
      m = Td(u),
      y = Td(d);
    if (m !== y && vn[a]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== p)
      if (Rd(f) && Rd(p))
        for (let g = 0; g < r.length; g++) {
          const x = r[g];
          typeof x == "string" && (r[g] = parseFloat(x));
        }
      else vn[a] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: r, name: s } = this,
      a = [];
    for (let u = 0; u < r.length; u++) (r[u] === null || Mv(r[u])) && a.push(u);
    a.length && Iv(r, a, s);
  }
  measureInitialState() {
    const { element: r, unresolvedKeyframes: s, name: a } = this;
    if (!r || !r.current) return;
    (a === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = vn[a](
        r.measureViewportBox(),
        window.getComputedStyle(r.current),
      )),
      (s[0] = this.measuredOrigin));
    const u = s[s.length - 1];
    u !== void 0 && r.getValue(a, u).jump(u, !1);
  }
  measureEndState() {
    var p;
    const { element: r, name: s, unresolvedKeyframes: a } = this;
    if (!r || !r.current) return;
    const u = r.getValue(s);
    u && u.jump(this.measuredOrigin, !1);
    const d = a.length - 1,
      f = a[d];
    ((a[d] = vn[s](r.measureViewportBox(), window.getComputedStyle(r.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (p = this.removedTransforms) != null &&
        p.length &&
        this.removedTransforms.forEach(([m, y]) => {
          r.getValue(m).set(y);
        }),
      this.resolveNoneKeyframes());
  }
}
const zv = new Set(["opacity", "clipPath", "filter", "transform"]);
function Rp(n, r, s) {
  if (n == null) return [];
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    let a = document;
    const u = (s == null ? void 0 : s[n]) ?? a.querySelectorAll(n);
    return u ? Array.from(u) : [];
  }
  return Array.from(n).filter((a) => a != null);
}
const Lp = (n, r) => (r && typeof n == "number" ? r.transform(n) : n);
function Ov(n) {
  return Bh(n) && "offsetHeight" in n && !("ownerSVGElement" in n);
}
const { schedule: uu } = ep(queueMicrotask, !1),
  Rt = { x: !1, y: !1 };
function Vp() {
  return Rt.x || Rt.y;
}
function Bv(n) {
  return n === "x" || n === "y"
    ? Rt[n]
      ? null
      : ((Rt[n] = !0),
        () => {
          Rt[n] = !1;
        })
    : Rt.x || Rt.y
      ? null
      : ((Rt.x = Rt.y = !0),
        () => {
          Rt.x = Rt.y = !1;
        });
}
function _p(n, r) {
  const s = Rp(n),
    a = new AbortController(),
    u = { passive: !0, ...r, signal: a.signal };
  return [s, u, () => a.abort()];
}
function bv(n) {
  return !(n.pointerType === "touch" || Vp());
}
function Uv(n, r, s = {}) {
  const [a, u, d] = _p(n, s);
  return (
    a.forEach((f) => {
      let p = !1,
        m = !1,
        y;
      const g = () => {
          f.removeEventListener("pointerleave", j);
        },
        x = (A) => {
          (y && (y(A), (y = void 0)), g());
        },
        S = (A) => {
          ((p = !1),
            window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", S),
            m && ((m = !1), x(A)));
        },
        M = () => {
          ((p = !0),
            window.addEventListener("pointerup", S, u),
            window.addEventListener("pointercancel", S, u));
        },
        j = (A) => {
          if (A.pointerType !== "touch") {
            if (p) {
              m = !0;
              return;
            }
            x(A);
          }
        },
        D = (A) => {
          if (!bv(A)) return;
          m = !1;
          const I = r(f, A);
          typeof I == "function" &&
            ((y = I), f.addEventListener("pointerleave", j, u));
        };
      (f.addEventListener("pointerenter", D, u),
        f.addEventListener("pointerdown", M, u));
    }),
    d
  );
}
const Ip = (n, r) => (r ? (n === r ? !0 : Ip(n, r.parentElement)) : !1),
  cu = (n) =>
    n.pointerType === "mouse"
      ? typeof n.button != "number" || n.button <= 0
      : n.isPrimary !== !1,
  Wv = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Hv(n) {
  return Wv.has(n.tagName) || n.isContentEditable === !0;
}
const $v = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function Kv(n) {
  return $v.has(n.tagName) || n.isContentEditable === !0;
}
const Bs = new WeakSet();
function Od(n) {
  return (r) => {
    r.key === "Enter" && n(r);
  };
}
function al(n, r) {
  n.dispatchEvent(
    new PointerEvent("pointer" + r, { isPrimary: !0, bubbles: !0 }),
  );
}
const Gv = (n, r) => {
  const s = n.currentTarget;
  if (!s) return;
  const a = Od(() => {
    if (Bs.has(s)) return;
    al(s, "down");
    const u = Od(() => {
        al(s, "up");
      }),
      d = () => al(s, "cancel");
    (s.addEventListener("keyup", u, r), s.addEventListener("blur", d, r));
  });
  (s.addEventListener("keydown", a, r),
    s.addEventListener("blur", () => s.removeEventListener("keydown", a), r));
};
function Bd(n) {
  return cu(n) && !Vp();
}
const bd = new WeakSet();
function Xv(n, r, s = {}) {
  const [a, u, d] = _p(n, s),
    f = (p) => {
      const m = p.currentTarget;
      if (!Bd(p) || bd.has(p)) return;
      (Bs.add(m), s.stopPropagation && bd.add(p));
      const y = r(m, p),
        g = (M, j) => {
          (window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", S),
            Bs.has(m) && Bs.delete(m),
            Bd(M) && typeof y == "function" && y(M, { success: j }));
        },
        x = (M) => {
          g(
            M,
            m === window ||
              m === document ||
              s.useGlobalTarget ||
              Ip(m, M.target),
          );
        },
        S = (M) => {
          g(M, !1);
        };
      (window.addEventListener("pointerup", x, u),
        window.addEventListener("pointercancel", S, u));
    };
  return (
    a.forEach((p) => {
      ((s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, u),
        Ov(p) &&
          (p.addEventListener("focus", (y) => Gv(y, u)),
          !Hv(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0)));
    }),
    d
  );
}
function fu(n) {
  return Bh(n) && "ownerSVGElement" in n;
}
const bs = new WeakMap();
let yn;
const Fp = (n, r, s) => (a, u) =>
    u && u[0]
      ? u[0][n + "Size"]
      : fu(a) && "getBBox" in a
        ? a.getBBox()[r]
        : a[s],
  Yv = Fp("inline", "width", "offsetWidth"),
  Qv = Fp("block", "height", "offsetHeight");
function qv({ target: n, borderBoxSize: r }) {
  var s;
  (s = bs.get(n)) == null ||
    s.forEach((a) => {
      a(n, {
        get width() {
          return Yv(n, r);
        },
        get height() {
          return Qv(n, r);
        },
      });
    });
}
function Zv(n) {
  n.forEach(qv);
}
function Jv() {
  typeof ResizeObserver > "u" || (yn = new ResizeObserver(Zv));
}
function ex(n, r) {
  yn || Jv();
  const s = Rp(n);
  return (
    s.forEach((a) => {
      let u = bs.get(a);
      (u || ((u = new Set()), bs.set(a, u)),
        u.add(r),
        yn == null || yn.observe(a));
    }),
    () => {
      s.forEach((a) => {
        const u = bs.get(a);
        (u == null || u.delete(r),
          (u != null && u.size) || yn == null || yn.unobserve(a));
      });
    }
  );
}
const Us = new Set();
let pr;
function tx() {
  ((pr = () => {
    const n = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Us.forEach((r) => r(n));
  }),
    window.addEventListener("resize", pr));
}
function nx(n) {
  return (
    Us.add(n),
    pr || tx(),
    () => {
      (Us.delete(n),
        !Us.size &&
          typeof pr == "function" &&
          (window.removeEventListener("resize", pr), (pr = void 0)));
    }
  );
}
function Ud(n, r) {
  return typeof n == "function" ? nx(n) : ex(n, r);
}
function rx(n) {
  return fu(n) && n.tagName === "svg";
}
const ix = [...jp, ze, Lt],
  sx = (n) => ix.find(Mp(n)),
  Wd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  mr = () => ({ x: Wd(), y: Wd() }),
  Hd = () => ({ min: 0, max: 0 }),
  Ue = () => ({ x: Hd(), y: Hd() }),
  ox = new WeakMap();
function Js(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function vi(n) {
  return typeof n == "string" || Array.isArray(n);
}
const du = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  hu = ["initial", ...du];
function eo(n) {
  return Js(n.animate) || hu.some((r) => vi(n[r]));
}
function zp(n) {
  return !!(eo(n) || n.variants);
}
function ax(n, r, s) {
  for (const a in r) {
    const u = r[a],
      d = s[a];
    if (Ye(u)) n.addValue(a, u);
    else if (Ye(d)) n.addValue(a, xr(u, { owner: n }));
    else if (d !== u)
      if (n.hasValue(a)) {
        const f = n.getValue(a);
        f.liveStyle === !0 ? f.jump(u) : f.hasAnimated || f.set(u);
      } else {
        const f = n.getStaticValue(a);
        n.addValue(a, xr(f !== void 0 ? f : u, { owner: n }));
      }
  }
  for (const a in s) r[a] === void 0 && n.removeValue(a);
  return r;
}
const Vl = { current: null },
  Op = { current: !1 },
  lx = typeof window < "u";
function ux() {
  if (((Op.current = !0), !!lx))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        r = () => (Vl.current = n.matches);
      (n.addEventListener("change", r), r());
    } else Vl.current = !1;
}
const $d = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Ys = {};
function Bp(n) {
  Ys = n;
}
function cx() {
  return Ys;
}
class fx {
  scrapeMotionValuesFromProps(r, s, a) {
    return {};
  }
  constructor(
    {
      parent: r,
      props: s,
      presenceContext: a,
      reducedMotionConfig: u,
      skipAnimations: d,
      blockInitialAnimation: f,
      visualState: p,
    },
    m = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = ru),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const M = nt.now();
        this.renderScheduledAt < M &&
          ((this.renderScheduledAt = M), xe.render(this.render, !1, !0));
      }));
    const { latestValues: y, renderState: g } = p;
    ((this.latestValues = y),
      (this.baseTarget = { ...y }),
      (this.initialValues = s.initial ? { ...y } : {}),
      (this.renderState = g),
      (this.parent = r),
      (this.props = s),
      (this.presenceContext = a),
      (this.depth = r ? r.depth + 1 : 0),
      (this.reducedMotionConfig = u),
      (this.skipAnimationsConfig = d),
      (this.options = m),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = eo(s)),
      (this.isVariantNode = zp(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(r && r.current)));
    const { willChange: x, ...S } = this.scrapeMotionValuesFromProps(
      s,
      {},
      this,
    );
    for (const M in S) {
      const j = S[M];
      y[M] !== void 0 && Ye(j) && j.set(y[M]);
    }
  }
  mount(r) {
    var s, a;
    if (this.hasBeenMounted)
      for (const u in this.initialValues)
        ((s = this.values.get(u)) == null || s.jump(this.initialValues[u]),
          (this.latestValues[u] = this.initialValues[u]));
    ((this.current = r),
      ox.set(r, this),
      this.projection && !this.projection.instance && this.projection.mount(r),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((u, d) => this.bindToMotionValue(d, u)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (Op.current || ux(), (this.shouldReduceMotion = Vl.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (a = this.parent) == null || a.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var r;
    (this.projection && this.projection.unmount(),
      wn(this.notifyUpdate),
      wn(this.render),
      this.valueSubscriptions.forEach((s) => s()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (r = this.parent) == null || r.removeChild(this));
    for (const s in this.events) this.events[s].clear();
    for (const s in this.features) {
      const a = this.features[s];
      a && (a.unmount(), (a.isMounted = !1));
    }
    this.current = null;
  }
  addChild(r) {
    (this.children.add(r),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(r));
  }
  removeChild(r) {
    (this.children.delete(r),
      this.enteringChildren && this.enteringChildren.delete(r));
  }
  bindToMotionValue(r, s) {
    if (
      (this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)(),
      s.accelerate && zv.has(r) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: f,
          keyframes: p,
          times: m,
          ease: y,
          duration: g,
        } = s.accelerate,
        x = new xp({
          element: this.current,
          name: r,
          keyframes: p,
          times: m,
          ease: y,
          duration: mt(g),
        }),
        S = f(x);
      this.valueSubscriptions.set(r, () => {
        (S(), x.cancel());
      });
      return;
    }
    const a = kr.has(r);
    a && this.onBindTransform && this.onBindTransform();
    const u = s.on("change", (f) => {
      ((this.latestValues[r] = f),
        this.props.onUpdate && xe.preRender(this.notifyUpdate),
        a && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let d;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, r, s)),
      this.valueSubscriptions.set(r, () => {
        (u(), d && d(), s.owner && s.stop());
      }));
  }
  sortNodePosition(r) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== r.type
      ? 0
      : this.sortInstanceNodePosition(this.current, r.current);
  }
  updateFeatures() {
    let r = "animation";
    for (r in Ys) {
      const s = Ys[r];
      if (!s) continue;
      const { isEnabled: a, Feature: u } = s;
      if (
        (!this.features[r] &&
          u &&
          a(this.props) &&
          (this.features[r] = new u(this)),
        this.features[r])
      ) {
        const d = this.features[r];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ue();
  }
  getStaticValue(r) {
    return this.latestValues[r];
  }
  setStaticValue(r, s) {
    this.latestValues[r] = s;
  }
  update(r, s) {
    ((r.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = r),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s));
    for (let a = 0; a < $d.length; a++) {
      const u = $d[a];
      this.propEventSubscriptions[u] &&
        (this.propEventSubscriptions[u](),
        delete this.propEventSubscriptions[u]);
      const d = "on" + u,
        f = r[d];
      f && (this.propEventSubscriptions[u] = this.on(u, f));
    }
    ((this.prevMotionValues = ax(
      this,
      this.scrapeMotionValuesFromProps(r, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(r) {
    return this.props.variants ? this.props.variants[r] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(r) {
    const s = this.getClosestVariantNode();
    if (s)
      return (
        s.variantChildren && s.variantChildren.add(r),
        () => s.variantChildren.delete(r)
      );
  }
  addValue(r, s) {
    const a = this.values.get(r);
    s !== a &&
      (a && this.removeValue(r),
      this.bindToMotionValue(r, s),
      this.values.set(r, s),
      (this.latestValues[r] = s.get()));
  }
  removeValue(r) {
    this.values.delete(r);
    const s = this.valueSubscriptions.get(r);
    (s && (s(), this.valueSubscriptions.delete(r)),
      delete this.latestValues[r],
      this.removeValueFromRenderState(r, this.renderState));
  }
  hasValue(r) {
    return this.values.has(r);
  }
  getValue(r, s) {
    if (this.props.values && this.props.values[r]) return this.props.values[r];
    let a = this.values.get(r);
    return (
      a === void 0 &&
        s !== void 0 &&
        ((a = xr(s === null ? void 0 : s, { owner: this })),
        this.addValue(r, a)),
      a
    );
  }
  readValue(r, s) {
    let a =
      this.latestValues[r] !== void 0 || !this.current
        ? this.latestValues[r]
        : (this.getBaseTargetFromProps(this.props, r) ??
          this.readValueFromInstance(this.current, r, this.options));
    return (
      a != null &&
        (typeof a == "string" && (Oh(a) || bh(a))
          ? (a = parseFloat(a))
          : !sx(a) && Lt.test(s) && (a = Dp(r, s)),
        this.setBaseTarget(r, Ye(a) ? a.get() : a)),
      Ye(a) ? a.get() : a
    );
  }
  setBaseTarget(r, s) {
    this.baseTarget[r] = s;
  }
  getBaseTarget(r) {
    var d;
    const { initial: s } = this.props;
    let a;
    if (typeof s == "string" || typeof s == "object") {
      const f = ou(
        this.props,
        s,
        (d = this.presenceContext) == null ? void 0 : d.custom,
      );
      f && (a = f[r]);
    }
    if (s && a !== void 0) return a;
    const u = this.getBaseTargetFromProps(this.props, r);
    return u !== void 0 && !Ye(u)
      ? u
      : this.initialValues[r] !== void 0 && a === void 0
        ? void 0
        : this.baseTarget[r];
  }
  on(r, s) {
    return (
      this.events[r] || (this.events[r] = new Kl()),
      this.events[r].add(s)
    );
  }
  notify(r, ...s) {
    this.events[r] && this.events[r].notify(...s);
  }
  scheduleRenderMicrotask() {
    uu.render(this.render);
  }
}
class bp extends fx {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Fv));
  }
  sortInstanceNodePosition(r, s) {
    return r.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(r, s) {
    const a = r.style;
    return a ? a[s] : void 0;
  }
  removeValueFromRenderState(r, { vars: s, style: a }) {
    (delete s[r], delete a[r]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: r } = this.props;
    Ye(r) &&
      (this.childSubscription = r.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
class Sn {
  constructor(r) {
    ((this.isMounted = !1), (this.node = r));
  }
  update() {}
}
function Up({ top: n, left: r, right: s, bottom: a }) {
  return { x: { min: r, max: s }, y: { min: n, max: a } };
}
function dx({ x: n, y: r }) {
  return { top: r.min, right: n.max, bottom: r.max, left: n.min };
}
function hx(n, r) {
  if (!r) return n;
  const s = r({ x: n.left, y: n.top }),
    a = r({ x: n.right, y: n.bottom });
  return { top: s.y, left: s.x, bottom: a.y, right: a.x };
}
function ll(n) {
  return n === void 0 || n === 1;
}
function _l({ scale: n, scaleX: r, scaleY: s }) {
  return !ll(n) || !ll(r) || !ll(s);
}
function In(n) {
  return (
    _l(n) ||
    Wp(n) ||
    n.z ||
    n.rotate ||
    n.rotateX ||
    n.rotateY ||
    n.skewX ||
    n.skewY
  );
}
function Wp(n) {
  return Kd(n.x) || Kd(n.y);
}
function Kd(n) {
  return n && n !== "0%";
}
function Qs(n, r, s) {
  const a = n - s,
    u = r * a;
  return s + u;
}
function Gd(n, r, s, a, u) {
  return (u !== void 0 && (n = Qs(n, u, a)), Qs(n, s, a) + r);
}
function Il(n, r = 0, s = 1, a, u) {
  ((n.min = Gd(n.min, r, s, a, u)), (n.max = Gd(n.max, r, s, a, u)));
}
function Hp(n, { x: r, y: s }) {
  (Il(n.x, r.translate, r.scale, r.originPoint),
    Il(n.y, s.translate, s.scale, s.originPoint));
}
const Xd = 0.999999999999,
  Yd = 1.0000000000001;
function px(n, r, s, a = !1) {
  var p;
  const u = s.length;
  if (!u) return;
  r.x = r.y = 1;
  let d, f;
  for (let m = 0; m < u; m++) {
    ((d = s[m]), (f = d.projectionDelta));
    const { visualElement: y } = d.options;
    (y && y.props.style && y.props.style.display === "contents") ||
      (a &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        yr(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      f && ((r.x *= f.x.scale), (r.y *= f.y.scale), Hp(n, f)),
      a &&
        In(d.latestValues) &&
        yr(n, d.latestValues, (p = d.layout) == null ? void 0 : p.layoutBox));
  }
  (r.x < Yd && r.x > Xd && (r.x = 1), r.y < Yd && r.y > Xd && (r.y = 1));
}
function gr(n, r) {
  ((n.min = n.min + r), (n.max = n.max + r));
}
function Qd(n, r, s, a, u = 0.5) {
  const d = je(n.min, n.max, u);
  Il(n, r, s, d, a);
}
function qd(n, r) {
  return typeof n == "string" ? (parseFloat(n) / 100) * (r.max - r.min) : n;
}
function yr(n, r, s) {
  const a = s ?? n;
  (Qd(n.x, qd(r.x, a.x), r.scaleX, r.scale, r.originX),
    Qd(n.y, qd(r.y, a.y), r.scaleY, r.scale, r.originY));
}
function $p(n, r) {
  return Up(hx(n.getBoundingClientRect(), r));
}
function mx(n, r, s) {
  const a = $p(n, s),
    { scroll: u } = r;
  return (u && (gr(a.x, u.offset.x), gr(a.y, u.offset.y)), a);
}
const gx = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  yx = Sr.length;
function vx(n, r, s) {
  let a = "",
    u = !0;
  for (let d = 0; d < yx; d++) {
    const f = Sr[d],
      p = n[f];
    if (p === void 0) continue;
    let m = !0;
    if (typeof p == "number") m = p === (f.startsWith("scale") ? 1 : 0);
    else {
      const y = parseFloat(p);
      m = f.startsWith("scale") ? y === 1 : y === 0;
    }
    if (!m || s) {
      const y = Lp(p, lu[f]);
      if (!m) {
        u = !1;
        const g = gx[f] || f;
        a += `${g}(${y}) `;
      }
      s && (r[f] = y);
    }
  }
  return ((a = a.trim()), s ? (a = s(r, u ? "" : a)) : u && (a = "none"), a);
}
function pu(n, r, s) {
  const { style: a, vars: u, transformOrigin: d } = n;
  let f = !1,
    p = !1;
  for (const m in r) {
    const y = r[m];
    if (kr.has(m)) {
      f = !0;
      continue;
    } else if (np(m)) {
      u[m] = y;
      continue;
    } else {
      const g = Lp(y, lu[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = g)) : (a[m] = g);
    }
  }
  if (
    (r.transform ||
      (f || s
        ? (a.transform = vx(r, n.transform, s))
        : a.transform && (a.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: y = "50%", originZ: g = 0 } = d;
    a.transformOrigin = `${m} ${y} ${g}`;
  }
}
function Kp(n, { style: r, vars: s }, a, u) {
  const d = n.style;
  let f;
  for (f in r) d[f] = r[f];
  u == null || u.applyProjectionStyles(d, a);
  for (f in s) d.setProperty(f, s[f]);
}
function Zd(n, r) {
  return r.max === r.min ? 0 : (n / (r.max - r.min)) * 100;
}
const ci = {
    correct: (n, r) => {
      if (!r.target) return n;
      if (typeof n == "string")
        if (K.test(n)) n = parseFloat(n);
        else return n;
      const s = Zd(n, r.target.x),
        a = Zd(n, r.target.y);
      return `${s}% ${a}%`;
    },
  },
  xx = {
    correct: (n, { treeScale: r, projectionDelta: s }) => {
      const a = n,
        u = Lt.parse(n);
      if (u.length > 5) return a;
      const d = Lt.createTransformer(n),
        f = typeof u[0] != "number" ? 1 : 0,
        p = s.x.scale * r.x,
        m = s.y.scale * r.y;
      ((u[0 + f] /= p), (u[1 + f] /= m));
      const y = je(p, m, 0.5);
      return (
        typeof u[2 + f] == "number" && (u[2 + f] /= y),
        typeof u[3 + f] == "number" && (u[3 + f] /= y),
        d(u)
      );
    },
  },
  Fl = {
    borderRadius: {
      ...ci,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ci,
    borderTopRightRadius: ci,
    borderBottomLeftRadius: ci,
    borderBottomRightRadius: ci,
    boxShadow: xx,
  };
function Gp(n, { layout: r, layoutId: s }) {
  return (
    kr.has(n) ||
    n.startsWith("origin") ||
    ((r || s !== void 0) && (!!Fl[n] || n === "opacity"))
  );
}
function mu(n, r, s) {
  var f;
  const a = n.style,
    u = r == null ? void 0 : r.style,
    d = {};
  if (!a) return d;
  for (const p in a)
    (Ye(a[p]) ||
      (u && Ye(u[p])) ||
      Gp(p, n) ||
      ((f = s == null ? void 0 : s.getValue(p)) == null
        ? void 0
        : f.liveStyle) !== void 0) &&
      (d[p] = a[p]);
  return d;
}
function wx(n) {
  return window.getComputedStyle(n);
}
class Sx extends bp {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Kp));
  }
  readValueFromInstance(r, s) {
    var a;
    if (kr.has(s))
      return (a = this.projection) != null && a.isProjecting ? Tl(s) : B0(r, s);
    {
      const u = wx(r),
        d = (np(s) ? u.getPropertyValue(s) : u[s]) || 0;
      return typeof d == "string" ? d.trim() : d;
    }
  }
  measureInstanceViewportBox(r, { transformPagePoint: s }) {
    return $p(r, s);
  }
  build(r, s, a) {
    pu(r, s, a.transformTemplate);
  }
  scrapeMotionValuesFromProps(r, s, a) {
    return mu(r, s, a);
  }
}
const kx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Tx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Px(n, r, s = 1, a = 0, u = !0) {
  n.pathLength = 1;
  const d = u ? kx : Tx;
  ((n[d.offset] = `${-a}`), (n[d.array] = `${r} ${s}`));
}
const Ex = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Xp(
  n,
  {
    attrX: r,
    attrY: s,
    attrScale: a,
    pathLength: u,
    pathSpacing: d = 1,
    pathOffset: f = 0,
    ...p
  },
  m,
  y,
  g,
) {
  if ((pu(n, p, y), m)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: x, style: S } = n;
  (x.transform && ((S.transform = x.transform), delete x.transform),
    (S.transform || x.transformOrigin) &&
      ((S.transformOrigin = x.transformOrigin ?? "50% 50%"),
      delete x.transformOrigin),
    S.transform &&
      ((S.transformBox = (g == null ? void 0 : g.transformBox) ?? "fill-box"),
      delete x.transformBox));
  for (const M of Ex) x[M] !== void 0 && ((S[M] = x[M]), delete x[M]);
  (r !== void 0 && (x.x = r),
    s !== void 0 && (x.y = s),
    a !== void 0 && (x.scale = a),
    u !== void 0 && Px(x, u, d, f, !1));
}
const Yp = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Qp = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function Cx(n, r, s, a) {
  Kp(n, r, void 0, a);
  for (const u in r.attrs) n.setAttribute(Yp.has(u) ? u : au(u), r.attrs[u]);
}
function qp(n, r, s) {
  const a = mu(n, r, s);
  for (const u in n)
    if (Ye(n[u]) || Ye(r[u])) {
      const d =
        Sr.indexOf(u) !== -1
          ? "attr" + u.charAt(0).toUpperCase() + u.substring(1)
          : u;
      a[d] = n[u];
    }
  return a;
}
class Nx extends bp {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ue));
  }
  getBaseTargetFromProps(r, s) {
    return r[s];
  }
  readValueFromInstance(r, s) {
    if (kr.has(s)) {
      const a = Ap(s);
      return (a && a.default) || 0;
    }
    return ((s = Yp.has(s) ? s : au(s)), r.getAttribute(s));
  }
  scrapeMotionValuesFromProps(r, s, a) {
    return qp(r, s, a);
  }
  build(r, s, a) {
    Xp(r, s, this.isSVGTag, a.transformTemplate, a.style);
  }
  renderInstance(r, s, a, u) {
    Cx(r, s, a, u);
  }
  mount(r) {
    ((this.isSVGTag = Qp(r.tagName)), super.mount(r));
  }
}
const Mx = hu.length;
function Zp(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const s = n.parent ? Zp(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
  }
  const r = {};
  for (let s = 0; s < Mx; s++) {
    const a = hu[s],
      u = n.props[a];
    (vi(u) || u === !1) && (r[a] = u);
  }
  return r;
}
function Jp(n, r) {
  if (!Array.isArray(r)) return !1;
  const s = r.length;
  if (s !== n.length) return !1;
  for (let a = 0; a < s; a++) if (r[a] !== n[a]) return !1;
  return !0;
}
const jx = [...du].reverse(),
  Ax = du.length;
function Dx(n) {
  return (r) =>
    Promise.all(r.map(({ animation: s, options: a }) => Cv(n, s, a)));
}
function Rx(n) {
  let r = Dx(n),
    s = Jd(),
    a = !0,
    u = !1;
  const d = (y) => (g, x) => {
    var M;
    const S = Bn(
      n,
      x,
      y === "exit"
        ? (M = n.presenceContext) == null
          ? void 0
          : M.custom
        : void 0,
    );
    if (S) {
      const { transition: j, transitionEnd: D, ...A } = S;
      g = { ...g, ...A, ...D };
    }
    return g;
  };
  function f(y) {
    r = y(n);
  }
  function p(y) {
    const { props: g } = n,
      x = Zp(n.parent) || {},
      S = [],
      M = new Set();
    let j = {},
      D = 1 / 0;
    for (let I = 0; I < Ax; I++) {
      const B = jx[I],
        O = s[B],
        b = g[B] !== void 0 ? g[B] : x[B],
        q = vi(b),
        ae = B === y ? O.isActive : null;
      ae === !1 && (D = I);
      let de = b === x[B] && b !== g[B] && q;
      if (
        (de && (a || u) && n.manuallyAnimateOnMount && (de = !1),
        (O.protectedKeys = { ...j }),
        (!O.isActive && ae === null) ||
          (!b && !O.prevProp) ||
          Js(b) ||
          typeof b == "boolean")
      )
        continue;
      if (B === "exit" && O.isActive && ae !== !0) {
        O.prevResolvedValues && (j = { ...j, ...O.prevResolvedValues });
        continue;
      }
      const te = Lx(O.prevProp, b);
      let ge = te || (B === y && O.isActive && !de && q) || (I > D && q),
        Z = !1;
      const me = Array.isArray(b) ? b : [b];
      let we = me.reduce(d(B), {});
      ae === !1 && (we = {});
      const { prevResolvedValues: Le = {} } = O,
        Ae = { ...Le, ...we },
        Ie = (F) => {
          ((ge = !0),
            M.has(F) && ((Z = !0), M.delete(F)),
            (O.needsAnimating[F] = !0));
          const G = n.getValue(F);
          G && (G.liveStyle = !1);
        };
      for (const F in Ae) {
        const G = we[F],
          U = Le[F];
        if (j.hasOwnProperty(F)) continue;
        let P = !1;
        (jl(G) && jl(U) ? (P = !Jp(G, U)) : (P = G !== U),
          P
            ? G != null
              ? Ie(F)
              : M.add(F)
            : G !== void 0 && M.has(F)
              ? Ie(F)
              : (O.protectedKeys[F] = !0));
      }
      ((O.prevProp = b),
        (O.prevResolvedValues = we),
        O.isActive && (j = { ...j, ...we }),
        (a || u) && n.blockInitialAnimation && (ge = !1));
      const Se = de && te;
      ge &&
        (!Se || Z) &&
        S.push(
          ...me.map((F) => {
            const G = { type: B };
            if (
              typeof F == "string" &&
              (a || u) &&
              !Se &&
              n.manuallyAnimateOnMount &&
              n.parent
            ) {
              const { parent: U } = n,
                P = Bn(U, F);
              if (U.enteringChildren && P) {
                const { delayChildren: R } = P.transition || {};
                G.delay = Sp(U.enteringChildren, n, R);
              }
            }
            return { animation: F, options: G };
          }),
        );
    }
    if (M.size) {
      const I = {};
      if (typeof g.initial != "boolean") {
        const B = Bn(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        B && B.transition && (I.transition = B.transition);
      }
      (M.forEach((B) => {
        const O = n.getBaseTarget(B),
          b = n.getValue(B);
        (b && (b.liveStyle = !0), (I[B] = O ?? null));
      }),
        S.push({ animation: I }));
    }
    let A = !!S.length;
    return (
      a &&
        (g.initial === !1 || g.initial === g.animate) &&
        !n.manuallyAnimateOnMount &&
        (A = !1),
      (a = !1),
      (u = !1),
      A ? r(S) : Promise.resolve()
    );
  }
  function m(y, g) {
    var S;
    if (s[y].isActive === g) return Promise.resolve();
    ((S = n.variantChildren) == null ||
      S.forEach((M) => {
        var j;
        return (j = M.animationState) == null ? void 0 : j.setActive(y, g);
      }),
      (s[y].isActive = g));
    const x = p(y);
    for (const M in s) s[M].protectedKeys = {};
    return x;
  }
  return {
    animateChanges: p,
    setActive: m,
    setAnimateFunction: f,
    getState: () => s,
    reset: () => {
      ((s = Jd()), (u = !0));
    },
  };
}
function Lx(n, r) {
  return typeof r == "string" ? r !== n : Array.isArray(r) ? !Jp(r, n) : !1;
}
function _n(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Jd() {
  return {
    animate: _n(!0),
    whileInView: _n(),
    whileHover: _n(),
    whileTap: _n(),
    whileDrag: _n(),
    whileFocus: _n(),
    exit: _n(),
  };
}
function zl(n, r) {
  ((n.min = r.min), (n.max = r.max));
}
function Dt(n, r) {
  (zl(n.x, r.x), zl(n.y, r.y));
}
function eh(n, r) {
  ((n.translate = r.translate),
    (n.scale = r.scale),
    (n.originPoint = r.originPoint),
    (n.origin = r.origin));
}
const em = 1e-4,
  Vx = 1 - em,
  _x = 1 + em,
  tm = 0.01,
  Ix = 0 - tm,
  Fx = 0 + tm;
function rt(n) {
  return n.max - n.min;
}
function zx(n, r, s) {
  return Math.abs(n - r) <= s;
}
function th(n, r, s, a = 0.5) {
  ((n.origin = a),
    (n.originPoint = je(r.min, r.max, n.origin)),
    (n.scale = rt(s) / rt(r)),
    (n.translate = je(s.min, s.max, n.origin) - n.originPoint),
    ((n.scale >= Vx && n.scale <= _x) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= Ix && n.translate <= Fx) || isNaN(n.translate)) &&
      (n.translate = 0));
}
function pi(n, r, s, a) {
  (th(n.x, r.x, s.x, a ? a.originX : void 0),
    th(n.y, r.y, s.y, a ? a.originY : void 0));
}
function nh(n, r, s) {
  ((n.min = s.min + r.min), (n.max = n.min + rt(r)));
}
function Ox(n, r, s) {
  (nh(n.x, r.x, s.x), nh(n.y, r.y, s.y));
}
function rh(n, r, s) {
  ((n.min = r.min - s.min), (n.max = n.min + rt(r)));
}
function qs(n, r, s) {
  (rh(n.x, r.x, s.x), rh(n.y, r.y, s.y));
}
function ih(n, r, s, a, u) {
  return (
    (n -= r),
    (n = Qs(n, 1 / s, a)),
    u !== void 0 && (n = Qs(n, 1 / u, a)),
    n
  );
}
function Bx(n, r = 0, s = 1, a = 0.5, u, d = n, f = n) {
  if (
    (Bt.test(r) &&
      ((r = parseFloat(r)), (r = je(f.min, f.max, r / 100) - f.min)),
    typeof r != "number")
  )
    return;
  let p = je(d.min, d.max, a);
  (n === d && (p -= r),
    (n.min = ih(n.min, r, s, p, u)),
    (n.max = ih(n.max, r, s, p, u)));
}
function sh(n, r, [s, a, u], d, f) {
  Bx(n, r[s], r[a], r[u], r.scale, d, f);
}
const bx = ["x", "scaleX", "originX"],
  Ux = ["y", "scaleY", "originY"];
function oh(n, r, s, a) {
  (sh(n.x, r, bx, s ? s.x : void 0, a ? a.x : void 0),
    sh(n.y, r, Ux, s ? s.y : void 0, a ? a.y : void 0));
}
function ah(n) {
  return n.translate === 0 && n.scale === 1;
}
function nm(n) {
  return ah(n.x) && ah(n.y);
}
function lh(n, r) {
  return n.min === r.min && n.max === r.max;
}
function Wx(n, r) {
  return lh(n.x, r.x) && lh(n.y, r.y);
}
function uh(n, r) {
  return (
    Math.round(n.min) === Math.round(r.min) &&
    Math.round(n.max) === Math.round(r.max)
  );
}
function rm(n, r) {
  return uh(n.x, r.x) && uh(n.y, r.y);
}
function ch(n) {
  return rt(n.x) / rt(n.y);
}
function fh(n, r) {
  return (
    n.translate === r.translate &&
    n.scale === r.scale &&
    n.originPoint === r.originPoint
  );
}
function Ot(n) {
  return [n("x"), n("y")];
}
function Hx(n, r, s) {
  let a = "";
  const u = n.x.translate / r.x,
    d = n.y.translate / r.y,
    f = (s == null ? void 0 : s.z) || 0;
  if (
    ((u || d || f) && (a = `translate3d(${u}px, ${d}px, ${f}px) `),
    (r.x !== 1 || r.y !== 1) && (a += `scale(${1 / r.x}, ${1 / r.y}) `),
    s)
  ) {
    const {
      transformPerspective: y,
      rotate: g,
      rotateX: x,
      rotateY: S,
      skewX: M,
      skewY: j,
    } = s;
    (y && (a = `perspective(${y}px) ${a}`),
      g && (a += `rotate(${g}deg) `),
      x && (a += `rotateX(${x}deg) `),
      S && (a += `rotateY(${S}deg) `),
      M && (a += `skewX(${M}deg) `),
      j && (a += `skewY(${j}deg) `));
  }
  const p = n.x.scale * r.x,
    m = n.y.scale * r.y;
  return ((p !== 1 || m !== 1) && (a += `scale(${p}, ${m})`), a || "none");
}
const im = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  $x = im.length,
  dh = (n) => (typeof n == "string" ? parseFloat(n) : n),
  hh = (n) => typeof n == "number" || K.test(n);
function Kx(n, r, s, a, u, d) {
  u
    ? ((n.opacity = je(0, s.opacity ?? 1, Gx(a))),
      (n.opacityExit = je(r.opacity ?? 1, 0, Xx(a))))
    : d && (n.opacity = je(r.opacity ?? 1, s.opacity ?? 1, a));
  for (let f = 0; f < $x; f++) {
    const p = `border${im[f]}Radius`;
    let m = ph(r, p),
      y = ph(s, p);
    if (m === void 0 && y === void 0) continue;
    (m || (m = 0),
      y || (y = 0),
      m === 0 || y === 0 || hh(m) === hh(y)
        ? ((n[p] = Math.max(je(dh(m), dh(y), a), 0)),
          (Bt.test(y) || Bt.test(m)) && (n[p] += "%"))
        : (n[p] = y));
  }
  (r.rotate || s.rotate) && (n.rotate = je(r.rotate || 0, s.rotate || 0, a));
}
function ph(n, r) {
  return n[r] !== void 0 ? n[r] : n.borderRadius;
}
const Gx = sm(0, 0.5, Qh),
  Xx = sm(0.5, 0.95, Tt);
function sm(n, r, s) {
  return (a) => (a < n ? 0 : a > r ? 1 : s(gi(n, r, a)));
}
function Yx(n, r, s) {
  const a = Ye(n) ? n : xr(n);
  return (a.start(su("", a, r, s)), a.animation);
}
function xi(n, r, s, a = { passive: !0 }) {
  return (n.addEventListener(r, s, a), () => n.removeEventListener(r, s));
}
const Qx = (n, r) => n.depth - r.depth;
class qx {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(r) {
    (Hl(this.children, r), (this.isDirty = !0));
  }
  remove(r) {
    ($s(this.children, r), (this.isDirty = !0));
  }
  forEach(r) {
    (this.isDirty && this.children.sort(Qx),
      (this.isDirty = !1),
      this.children.forEach(r));
  }
}
function Zx(n, r) {
  const s = nt.now(),
    a = ({ timestamp: u }) => {
      const d = u - s;
      d >= r && (wn(a), n(d - r));
    };
  return (xe.setup(a, !0), () => wn(a));
}
function Ws(n) {
  return Ye(n) ? n.get() : n;
}
class Jx {
  constructor() {
    this.members = [];
  }
  add(r) {
    Hl(this.members, r);
    for (let s = this.members.length - 1; s >= 0; s--) {
      const a = this.members[s];
      if (a === r || a === this.lead || a === this.prevLead) continue;
      const u = a.instance;
      (!u || u.isConnected === !1) &&
        !a.snapshot &&
        ($s(this.members, a), a.unmount());
    }
    r.scheduleRender();
  }
  remove(r) {
    if (
      ($s(this.members, r),
      r === this.prevLead && (this.prevLead = void 0),
      r === this.lead)
    ) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(r) {
    var s;
    for (let a = this.members.indexOf(r) - 1; a >= 0; a--) {
      const u = this.members[a];
      if (
        u.isPresent !== !1 &&
        ((s = u.instance) == null ? void 0 : s.isConnected) !== !1
      )
        return (this.promote(u), !0);
    }
    return !1;
  }
  promote(r, s) {
    var u;
    const a = this.lead;
    if (r !== a && ((this.prevLead = a), (this.lead = r), r.show(), a)) {
      (a.updateSnapshot(), r.scheduleRender());
      const { layoutDependency: d } = a.options,
        { layoutDependency: f } = r.options;
      ((d === void 0 || d !== f) &&
        ((r.resumeFrom = a),
        s && (a.preserveOpacity = !0),
        a.snapshot &&
          ((r.snapshot = a.snapshot),
          (r.snapshot.latestValues = a.animationValues || a.latestValues)),
        (u = r.root) != null && u.isUpdating && (r.isLayoutDirty = !0)),
        r.options.crossfade === !1 && a.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((r) => {
      var s, a, u, d, f;
      ((a = (s = r.options).onExitComplete) == null || a.call(s),
        (f =
          (u = r.resumingFrom) == null
            ? void 0
            : (d = u.options).onExitComplete) == null || f.call(d));
    });
  }
  scheduleRender() {
    this.members.forEach((r) => r.instance && r.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var r;
    (r = this.lead) != null && r.snapshot && (this.lead.snapshot = void 0);
  }
}
const Hs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  ul = ["", "X", "Y", "Z"],
  e1 = 1e3;
let t1 = 0;
function cl(n, r, s, a) {
  const { latestValues: u } = r;
  u[n] && ((s[n] = u[n]), r.setStaticValue(n, 0), a && (a[n] = 0));
}
function om(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: r } = n.options;
  if (!r) return;
  const s = Cp(r);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: u, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(s, "transform", xe, !(u || d));
  }
  const { parent: a } = n;
  a && !a.hasCheckedOptimisedAppear && om(a);
}
function am({
  attachResizeListener: n,
  defaultParent: r,
  measureScroll: s,
  checkIsScrollRoot: a,
  resetTransform: u,
}) {
  return class {
    constructor(f = {}, p = r == null ? void 0 : r()) {
      ((this.id = t1++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(i1),
            this.nodes.forEach(l1),
            this.nodes.forEach(u1),
            this.nodes.forEach(s1));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = p ? p.root || p : this),
        (this.path = p ? [...p.path, p] : []),
        (this.parent = p),
        (this.depth = p ? p.depth + 1 : 0));
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new qx());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Kl()),
        this.eventHandlers.get(f).add(p)
      );
    }
    notifyListeners(f, ...p) {
      const m = this.eventHandlers.get(f);
      m && m.notify(...p);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      ((this.isSVG = fu(f) && !rx(f)), (this.instance = f));
      const { layoutId: p, layout: m, visualElement: y } = this.options;
      if (
        (y && !y.current && y.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (m || p) && (this.isLayoutDirty = !0),
        n)
      ) {
        let g,
          x = 0;
        const S = () => (this.root.updateBlockedByResize = !1);
        (xe.read(() => {
          x = window.innerWidth;
        }),
          n(f, () => {
            const M = window.innerWidth;
            M !== x &&
              ((x = M),
              (this.root.updateBlockedByResize = !0),
              g && g(),
              (g = Zx(S, 250)),
              Hs.hasAnimatedSinceResize &&
                ((Hs.hasAnimatedSinceResize = !1), this.nodes.forEach(yh)));
          }));
      }
      (p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          y &&
          (p || m) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: g,
              hasLayoutChanged: x,
              hasRelativeLayoutChanged: S,
              layout: M,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const j =
                  this.options.transition || y.getDefaultTransition() || p1,
                { onLayoutAnimationStart: D, onLayoutAnimationComplete: A } =
                  y.getProps(),
                I = !this.targetLayout || !rm(this.targetLayout, M),
                B = !x && S;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                B ||
                (x && (I || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const O = { ...iu(j, "layout"), onPlay: D, onComplete: A };
                ((y.shouldReduceMotion || this.options.layoutRoot) &&
                  ((O.delay = 0), (O.type = !1)),
                  this.startAnimation(O),
                  this.setAnimationOrigin(g, B));
              } else
                (x || yh(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = M;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        wn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(c1),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          om(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const x = this.path[g];
        ((x.shouldResetTransform = !0),
          (typeof x.latestValues.x == "string" ||
            typeof x.latestValues.y == "string") &&
            (x.isLayoutDirty = !0),
          x.updateScroll("snapshot"),
          x.options.layoutRoot && x.willUpdate(!1));
      }
      const { layoutId: p, layout: m } = this.options;
      if (p === void 0 && !m) return;
      const y = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = y
        ? y(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(mh));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(gh);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(a1),
            this.nodes.forEach(n1),
            this.nodes.forEach(r1))
          : this.nodes.forEach(gh),
        this.clearAllSnapshots());
      const p = nt.now();
      ((Xe.delta = bt(0, 1e3 / 60, p - Xe.timestamp)),
        (Xe.timestamp = p),
        (Xe.isProcessing = !0),
        tl.update.process(Xe),
        tl.preRender.process(Xe),
        tl.render.process(Xe),
        (Xe.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), uu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(o1), this.sharedNodes.forEach(f1));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        xe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      xe.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !rt(this.snapshot.measuredBox.x) &&
          !rt(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll();
      const f = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = Ue()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: p } = this.options;
      p &&
        p.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0,
        );
    }
    updateScroll(f = "measure") {
      let p = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (p = !1),
        p && this.instance)
      ) {
        const m = a(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: m,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m,
        };
      }
    }
    resetTransform() {
      if (!u) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        p = this.projectionDelta && !nm(this.projectionDelta),
        m = this.getTransformTemplate(),
        y = m ? m(this.latestValues, "") : void 0,
        g = y !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (p || In(this.latestValues) || g) &&
        (u(this.instance, y),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return (
        f && (m = this.removeTransform(m)),
        m1(m),
        {
          animationId: this.root.animationId,
          measuredBox: p,
          layoutBox: m,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var y;
      const { visualElement: f } = this.options;
      if (!f) return Ue();
      const p = f.measureViewportBox();
      if (
        !(
          ((y = this.scroll) == null ? void 0 : y.wasRoot) || this.path.some(g1)
        )
      ) {
        const { scroll: g } = this.root;
        g && (gr(p.x, g.offset.x), gr(p.y, g.offset.y));
      }
      return p;
    }
    removeElementScroll(f) {
      var m;
      const p = Ue();
      if ((Dt(p, f), (m = this.scroll) != null && m.wasRoot)) return p;
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y],
          { scroll: x, options: S } = g;
        g !== this.root &&
          x &&
          S.layoutScroll &&
          (x.wasRoot && Dt(p, f), gr(p.x, x.offset.x), gr(p.y, x.offset.y));
      }
      return p;
    }
    applyTransform(f, p = !1) {
      var y, g;
      const m = Ue();
      Dt(m, f);
      for (let x = 0; x < this.path.length; x++) {
        const S = this.path[x];
        (!p &&
          S.options.layoutScroll &&
          S.scroll &&
          S !== S.root &&
          yr(m, { x: -S.scroll.offset.x, y: -S.scroll.offset.y }),
          In(S.latestValues) &&
            yr(
              m,
              S.latestValues,
              (y = S.layout) == null ? void 0 : y.layoutBox,
            ));
      }
      return (
        In(this.latestValues) &&
          yr(
            m,
            this.latestValues,
            (g = this.layout) == null ? void 0 : g.layoutBox,
          ),
        m
      );
    }
    removeTransform(f) {
      var m;
      const p = Ue();
      Dt(p, f);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        if (!In(g.latestValues)) continue;
        let x;
        (g.instance &&
          (_l(g.latestValues) && g.updateSnapshot(),
          (x = Ue()),
          Dt(x, g.measurePageBox())),
          oh(
            p,
            g.latestValues,
            (m = g.snapshot) == null ? void 0 : m.layoutBox,
            x,
          ));
      }
      return (In(this.latestValues) && oh(p, this.latestValues), p);
    }
    setTargetDelta(f) {
      ((this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Xe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var M;
      const p = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = p.isSharedProjectionDirty));
      const m = !!this.resumingFrom || this !== p;
      if (
        !(
          f ||
          (m && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((M = this.parent) != null && M.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: g, layoutId: x } = this.options;
      if (!this.layout || !(g || x)) return;
      this.resolvedRelativeTargetAt = Xe.timestamp;
      const S = this.getClosestProjectingParent();
      (S &&
        this.linkedParentVersion !== S.layoutVersion &&
        !S.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (S && S.layout
            ? this.createRelativeTarget(
                S,
                this.layout.layoutBox,
                S.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ue()), (this.targetWithTransforms = Ue())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Ox(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Dt(this.target, this.layout.layoutBox),
                Hp(this.target, this.targetDelta))
              : Dt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            S &&
            !!S.resumingFrom == !!this.resumingFrom &&
            !S.options.layoutScroll &&
            S.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(S, this.target, S.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          _l(this.parent.latestValues) ||
          Wp(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, p, m) {
      ((this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Ue()),
        (this.relativeTargetOrigin = Ue()),
        qs(this.relativeTargetOrigin, p, m),
        Dt(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var j;
      const f = this.getLead(),
        p = !!this.resumingFrom || this !== f;
      let m = !0;
      if (
        ((this.isProjectionDirty ||
          ((j = this.parent) != null && j.isProjectionDirty)) &&
          (m = !1),
        p &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (m = !1),
        this.resolvedRelativeTargetAt === Xe.timestamp && (m = !1),
        m)
      )
        return;
      const { layout: y, layoutId: g } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(y || g))
      )
        return;
      Dt(this.layoutCorrected, this.layout.layoutBox);
      const x = this.treeScale.x,
        S = this.treeScale.y;
      (px(this.layoutCorrected, this.treeScale, this.path, p),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Ue())));
      const { target: M } = f;
      if (!M) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (eh(this.prevProjectionDelta.x, this.projectionDelta.x),
          eh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        pi(this.projectionDelta, this.layoutCorrected, M, this.latestValues),
        (this.treeScale.x !== x ||
          this.treeScale.y !== S ||
          !fh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !fh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", M)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var p;
      if (((p = this.options.visualElement) == null || p.scheduleRender(), f)) {
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = mr()),
        (this.projectionDelta = mr()),
        (this.projectionDeltaWithTransform = mr()));
    }
    setAnimationOrigin(f, p = !1) {
      const m = this.snapshot,
        y = m ? m.latestValues : {},
        g = { ...this.latestValues },
        x = mr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const S = Ue(),
        M = m ? m.source : void 0,
        j = this.layout ? this.layout.source : void 0,
        D = M !== j,
        A = this.getStack(),
        I = !A || A.members.length <= 1,
        B = !!(D && !I && this.options.crossfade === !0 && !this.path.some(h1));
      this.animationProgress = 0;
      let O;
      ((this.mixTargetDelta = (b) => {
        const q = b / 1e3;
        (vh(x.x, f.x, q),
          vh(x.y, f.y, q),
          this.setTargetDelta(x),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (qs(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            d1(this.relativeTarget, this.relativeTargetOrigin, S, q),
            O && Wx(this.relativeTarget, O) && (this.isProjectionDirty = !1),
            O || (O = Ue()),
            Dt(O, this.relativeTarget)),
          D &&
            ((this.animationValues = g), Kx(g, y, this.latestValues, q, B, I)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = q));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      var p, m, y;
      (this.notifyListeners("animationStart"),
        (p = this.currentAnimation) == null || p.stop(),
        (y = (m = this.resumingFrom) == null ? void 0 : m.currentAnimation) ==
          null || y.stop(),
        this.pendingAnimation &&
          (wn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = xe.update(() => {
          ((Hs.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = xr(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = Yx(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (g) => {
                (this.mixTargetDelta(g), f.onUpdate && f.onUpdate(g));
              },
              onStop: () => {},
              onComplete: () => {
                (f.onComplete && f.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      (f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(e1),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: p,
        target: m,
        layout: y,
        latestValues: g,
      } = f;
      if (!(!p || !m || !y)) {
        if (
          this !== f &&
          this.layout &&
          y &&
          lm(this.options.animationType, this.layout.layoutBox, y.layoutBox)
        ) {
          m = this.target || Ue();
          const x = rt(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + x));
          const S = rt(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + S));
        }
        (Dt(p, m),
          yr(p, g),
          pi(this.projectionDeltaWithTransform, this.layoutCorrected, p, g));
      }
    }
    registerSharedNode(f, p) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new Jx()),
        this.sharedNodes.get(f).add(p));
      const y = p.options.initialPromotionConfig;
      p.promote({
        transition: y ? y.transition : void 0,
        preserveFollowOpacity:
          y && y.shouldPreserveFollowOpacity
            ? y.shouldPreserveFollowOpacity(p)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var p;
      const { layoutId: f } = this.options;
      return f
        ? ((p = this.getStack()) == null ? void 0 : p.lead) || this
        : this;
    }
    getPrevLead() {
      var p;
      const { layoutId: f } = this.options;
      return f ? ((p = this.getStack()) == null ? void 0 : p.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: p, preserveFollowOpacity: m } = {}) {
      const y = this.getStack();
      (y && y.promote(this, m),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        p && this.setOptions({ transition: p }));
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let p = !1;
      const { latestValues: m } = f;
      if (
        ((m.z ||
          m.rotate ||
          m.rotateX ||
          m.rotateY ||
          m.rotateZ ||
          m.skewX ||
          m.skewY) &&
          (p = !0),
        !p)
      )
        return;
      const y = {};
      m.z && cl("z", f, y, this.animationValues);
      for (let g = 0; g < ul.length; g++)
        (cl(`rotate${ul[g]}`, f, y, this.animationValues),
          cl(`skew${ul[g]}`, f, y, this.animationValues));
      f.render();
      for (const g in y)
        (f.setStaticValue(g, y[g]),
          this.animationValues && (this.animationValues[g] = y[g]));
      f.scheduleRender();
    }
    applyProjectionStyles(f, p) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const m = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = Ws(p == null ? void 0 : p.pointerEvents) || ""),
          (f.transform = m ? m(this.latestValues, "") : "none"));
        return;
      }
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        (this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = Ws(p == null ? void 0 : p.pointerEvents) || "")),
          this.hasProjected &&
            !In(this.latestValues) &&
            ((f.transform = m ? m({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const g = y.animationValues || y.latestValues;
      this.applyTransformsToTarget();
      let x = Hx(this.projectionDeltaWithTransform, this.treeScale, g);
      (m && (x = m(g, x)), (f.transform = x));
      const { x: S, y: M } = this.projectionDelta;
      ((f.transformOrigin = `${S.origin * 100}% ${M.origin * 100}% 0`),
        y.animationValues
          ? (f.opacity =
              y === this
                ? (g.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : g.opacityExit)
          : (f.opacity =
              y === this
                ? g.opacity !== void 0
                  ? g.opacity
                  : ""
                : g.opacityExit !== void 0
                  ? g.opacityExit
                  : 0));
      for (const j in Fl) {
        if (g[j] === void 0) continue;
        const { correct: D, applyTo: A, isCSSVariable: I } = Fl[j],
          B = x === "none" ? g[j] : D(g[j], y);
        if (A) {
          const O = A.length;
          for (let b = 0; b < O; b++) f[A[b]] = B;
        } else
          I ? (this.options.visualElement.renderState.vars[j] = B) : (f[j] = B);
      }
      this.options.layoutId &&
        (f.pointerEvents =
          y === this ? Ws(p == null ? void 0 : p.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => {
        var p;
        return (p = f.currentAnimation) == null ? void 0 : p.stop();
      }),
        this.root.nodes.forEach(mh),
        this.root.sharedNodes.clear());
    }
  };
}
function n1(n) {
  n.updateLayout();
}
function r1(n) {
  var s;
  const r = ((s = n.resumeFrom) == null ? void 0 : s.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && r && n.hasListeners("didUpdate")) {
    const { layoutBox: a, measuredBox: u } = n.layout,
      { animationType: d } = n.options,
      f = r.source !== n.layout.source;
    if (d === "size")
      Ot((x) => {
        const S = f ? r.measuredBox[x] : r.layoutBox[x],
          M = rt(S);
        ((S.min = a[x].min), (S.max = S.min + M));
      });
    else if (d === "x" || d === "y") {
      const x = d === "x" ? "y" : "x";
      zl(f ? r.measuredBox[x] : r.layoutBox[x], a[x]);
    } else
      lm(d, r.layoutBox, a) &&
        Ot((x) => {
          const S = f ? r.measuredBox[x] : r.layoutBox[x],
            M = rt(a[x]);
          ((S.max = S.min + M),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[x].max = n.relativeTarget[x].min + M)));
        });
    const p = mr();
    pi(p, a, r.layoutBox);
    const m = mr();
    f ? pi(m, n.applyTransform(u, !0), r.measuredBox) : pi(m, a, r.layoutBox);
    const y = !nm(p);
    let g = !1;
    if (!n.resumeFrom) {
      const x = n.getClosestProjectingParent();
      if (x && !x.resumeFrom) {
        const { snapshot: S, layout: M } = x;
        if (S && M) {
          const j = Ue();
          qs(j, r.layoutBox, S.layoutBox);
          const D = Ue();
          (qs(D, a, M.layoutBox),
            rm(j, D) || (g = !0),
            x.options.layoutRoot &&
              ((n.relativeTarget = D),
              (n.relativeTargetOrigin = j),
              (n.relativeParent = x)));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: a,
      snapshot: r,
      delta: m,
      layoutDelta: p,
      hasLayoutChanged: y,
      hasRelativeLayoutChanged: g,
    });
  } else if (n.isLead()) {
    const { onExitComplete: a } = n.options;
    a && a();
  }
  n.options.transition = void 0;
}
function i1(n) {
  n.parent &&
    (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty ||
      (n.isSharedProjectionDirty = !!(
        n.isProjectionDirty ||
        n.parent.isProjectionDirty ||
        n.parent.isSharedProjectionDirty
      )),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function s1(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function o1(n) {
  n.clearSnapshot();
}
function mh(n) {
  n.clearMeasurements();
}
function gh(n) {
  n.isLayoutDirty = !1;
}
function a1(n) {
  const { visualElement: r } = n.options;
  (r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"),
    n.resetTransform());
}
function yh(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function l1(n) {
  n.resolveTargetDelta();
}
function u1(n) {
  n.calcProjection();
}
function c1(n) {
  n.resetSkewAndRotation();
}
function f1(n) {
  n.removeLeadSnapshot();
}
function vh(n, r, s) {
  ((n.translate = je(r.translate, 0, s)),
    (n.scale = je(r.scale, 1, s)),
    (n.origin = r.origin),
    (n.originPoint = r.originPoint));
}
function xh(n, r, s, a) {
  ((n.min = je(r.min, s.min, a)), (n.max = je(r.max, s.max, a)));
}
function d1(n, r, s, a) {
  (xh(n.x, r.x, s.x, a), xh(n.y, r.y, s.y, a));
}
function h1(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const p1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  wh = (n) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(n),
  Sh = wh("applewebkit/") && !wh("chrome/") ? Math.round : Tt;
function kh(n) {
  ((n.min = Sh(n.min)), (n.max = Sh(n.max)));
}
function m1(n) {
  (kh(n.x), kh(n.y));
}
function lm(n, r, s) {
  return (
    n === "position" || (n === "preserve-aspect" && !zx(ch(r), ch(s), 0.2))
  );
}
function g1(n) {
  var r;
  return n !== n.root && ((r = n.scroll) == null ? void 0 : r.wasRoot);
}
const y1 = am({
    attachResizeListener: (n, r) => xi(n, "resize", r),
    measureScroll: () => {
      var n, r;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((n = document.body) == null ? void 0 : n.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((r = document.body) == null ? void 0 : r.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  fl = { current: void 0 },
  um = am({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!fl.current) {
        const n = new y1({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (fl.current = n));
      }
      return fl.current;
    },
    resetTransform: (n, r) => {
      n.style.transform = r !== void 0 ? r : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  cm = Q.createContext({
    transformPagePoint: (n) => n,
    isStatic: !1,
    reducedMotion: "never",
  });
function v1(n = !0) {
  const r = Q.useContext(Wl);
  if (r === null) return [!0, null];
  const { isPresent: s, onExitComplete: a, register: u } = r,
    d = Q.useId();
  Q.useEffect(() => {
    if (n) return u(d);
  }, [n]);
  const f = Q.useCallback(() => n && a && a(d), [d, a, n]);
  return !s && a ? [!1, f] : [!0];
}
const fm = Q.createContext({ strict: !1 }),
  Th = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let Ph = !1;
function x1() {
  if (Ph) return;
  const n = {};
  for (const r in Th) n[r] = { isEnabled: (s) => Th[r].some((a) => !!s[a]) };
  (Bp(n), (Ph = !0));
}
function dm() {
  return (x1(), cx());
}
function w1(n) {
  const r = dm();
  for (const s in n) r[s] = { ...r[s], ...n[s] };
  Bp(r);
}
const S1 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Zs(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    S1.has(n)
  );
}
let hm = (n) => !Zs(n);
function k1(n) {
  typeof n == "function" && (hm = (r) => (r.startsWith("on") ? !Zs(r) : n(r)));
}
try {
  k1(require("@emotion/is-prop-valid").default);
} catch {}
function T1(n, r, s) {
  const a = {};
  for (const u in n)
    (u === "values" && typeof n.values == "object") ||
      Ye(n[u]) ||
      ((hm(u) ||
        (s === !0 && Zs(u)) ||
        (!r && !Zs(u)) ||
        (n.draggable && u.startsWith("onDrag"))) &&
        (a[u] = n[u]));
  return a;
}
const to = Q.createContext({});
function P1(n, r) {
  if (eo(n)) {
    const { initial: s, animate: a } = n;
    return {
      initial: s === !1 || vi(s) ? s : void 0,
      animate: vi(a) ? a : void 0,
    };
  }
  return n.inherit !== !1 ? r : {};
}
function E1(n) {
  const { initial: r, animate: s } = P1(n, Q.useContext(to));
  return Q.useMemo(() => ({ initial: r, animate: s }), [Eh(r), Eh(s)]);
}
function Eh(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const gu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function pm(n, r, s) {
  for (const a in r) !Ye(r[a]) && !Gp(a, s) && (n[a] = r[a]);
}
function C1({ transformTemplate: n }, r) {
  return Q.useMemo(() => {
    const s = gu();
    return (pu(s, r, n), Object.assign({}, s.vars, s.style));
  }, [r]);
}
function N1(n, r) {
  const s = n.style || {},
    a = {};
  return (pm(a, s, n), Object.assign(a, C1(n, r)), a);
}
function M1(n, r) {
  const s = {},
    a = N1(n, r);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((s.draggable = !1),
      (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
      (a.touchAction =
        n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 &&
      (n.onTap || n.onTapStart || n.whileTap) &&
      (s.tabIndex = 0),
    (s.style = a),
    s
  );
}
const mm = () => ({ ...gu(), attrs: {} });
function j1(n, r, s, a) {
  const u = Q.useMemo(() => {
    const d = mm();
    return (
      Xp(d, r, Qp(a), n.transformTemplate, n.style),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [r]);
  if (n.style) {
    const d = {};
    (pm(d, n.style, n), (u.style = { ...d, ...u.style }));
  }
  return u;
}
const A1 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function yu(n) {
  return typeof n != "string" || n.includes("-")
    ? !1
    : !!(A1.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function D1(n, r, s, { latestValues: a }, u, d = !1, f) {
  const m = ((f ?? yu(n)) ? j1 : M1)(r, a, u, n),
    y = T1(r, typeof n == "string", d),
    g = n !== Q.Fragment ? { ...y, ...m, ref: s } : {},
    { children: x } = r,
    S = Q.useMemo(() => (Ye(x) ? x.get() : x), [x]);
  return Q.createElement(n, { ...g, children: S });
}
function R1({ scrapeMotionValuesFromProps: n, createRenderState: r }, s, a, u) {
  return { latestValues: L1(s, a, u, n), renderState: r() };
}
function L1(n, r, s, a) {
  const u = {},
    d = a(n, {});
  for (const S in d) u[S] = Ws(d[S]);
  let { initial: f, animate: p } = n;
  const m = eo(n),
    y = zp(n);
  r &&
    y &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = r.initial), p === void 0 && (p = r.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || f === !1;
  const x = g ? p : f;
  if (x && typeof x != "boolean" && !Js(x)) {
    const S = Array.isArray(x) ? x : [x];
    for (let M = 0; M < S.length; M++) {
      const j = ou(n, S[M]);
      if (j) {
        const { transitionEnd: D, transition: A, ...I } = j;
        for (const B in I) {
          let O = I[B];
          if (Array.isArray(O)) {
            const b = g ? O.length - 1 : 0;
            O = O[b];
          }
          O !== null && (u[B] = O);
        }
        for (const B in D) u[B] = D[B];
      }
    }
  }
  return u;
}
const gm = (n) => (r, s) => {
    const a = Q.useContext(to),
      u = Q.useContext(Wl),
      d = () => R1(n, r, a, u);
    return s ? d() : Ry(d);
  },
  V1 = gm({ scrapeMotionValuesFromProps: mu, createRenderState: gu }),
  _1 = gm({ scrapeMotionValuesFromProps: qp, createRenderState: mm }),
  I1 = Symbol.for("motionComponentSymbol");
function F1(n, r, s) {
  const a = Q.useRef(s);
  Q.useInsertionEffect(() => {
    a.current = s;
  });
  const u = Q.useRef(null);
  return Q.useCallback(
    (d) => {
      var p;
      d && ((p = n.onMount) == null || p.call(n, d));
      const f = a.current;
      if (typeof f == "function")
        if (d) {
          const m = f(d);
          typeof m == "function" && (u.current = m);
        } else u.current ? (u.current(), (u.current = null)) : f(d);
      else f && (f.current = d);
      r && (d ? r.mount(d) : r.unmount());
    },
    [r],
  );
}
const ym = Q.createContext({});
function dr(n) {
  return (
    n &&
    typeof n == "object" &&
    Object.prototype.hasOwnProperty.call(n, "current")
  );
}
function z1(n, r, s, a, u, d) {
  var O, b;
  const { visualElement: f } = Q.useContext(to),
    p = Q.useContext(fm),
    m = Q.useContext(Wl),
    y = Q.useContext(cm),
    g = y.reducedMotion,
    x = y.skipAnimations,
    S = Q.useRef(null),
    M = Q.useRef(!1);
  ((a = a || p.renderer),
    !S.current &&
      a &&
      ((S.current = a(n, {
        visualState: r,
        parent: f,
        props: s,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g,
        skipAnimations: x,
        isSVG: d,
      })),
      M.current && S.current && (S.current.manuallyAnimateOnMount = !0)));
  const j = S.current,
    D = Q.useContext(ym);
  j &&
    !j.projection &&
    u &&
    (j.type === "html" || j.type === "svg") &&
    O1(S.current, s, u, D);
  const A = Q.useRef(!1);
  Q.useInsertionEffect(() => {
    j && A.current && j.update(s, m);
  });
  const I = s[Ep],
    B = Q.useRef(
      !!I &&
        typeof window < "u" &&
        !((O = window.MotionHandoffIsComplete) != null && O.call(window, I)) &&
        ((b = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : b.call(window, I)),
    );
  return (
    Vy(() => {
      ((M.current = !0),
        j &&
          ((A.current = !0),
          (window.MotionIsMounted = !0),
          j.updateFeatures(),
          j.scheduleRenderMicrotask(),
          B.current && j.animationState && j.animationState.animateChanges()));
    }),
    Q.useEffect(() => {
      j &&
        (!B.current && j.animationState && j.animationState.animateChanges(),
        B.current &&
          (queueMicrotask(() => {
            var q;
            (q = window.MotionHandoffMarkAsComplete) == null ||
              q.call(window, I);
          }),
          (B.current = !1)),
        (j.enteringChildren = void 0));
    }),
    j
  );
}
function O1(n, r, s, a) {
  const {
    layoutId: u,
    layout: d,
    drag: f,
    dragConstraints: p,
    layoutScroll: m,
    layoutRoot: y,
    layoutCrossfade: g,
  } = r;
  ((n.projection = new s(
    n.latestValues,
    r["data-framer-portal-id"] ? void 0 : vm(n.parent),
  )),
    n.projection.setOptions({
      layoutId: u,
      layout: d,
      alwaysMeasureLayout: !!f || (p && dr(p)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: a,
      crossfade: g,
      layoutScroll: m,
      layoutRoot: y,
    }));
}
function vm(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : vm(n.parent);
}
function dl(n, { forwardMotionProps: r = !1, type: s } = {}, a, u) {
  a && w1(a);
  const d = s ? s === "svg" : yu(n),
    f = d ? _1 : V1;
  function p(y, g) {
    let x;
    const S = { ...Q.useContext(cm), ...y, layoutId: B1(y) },
      { isStatic: M } = S,
      j = E1(y),
      D = f(y, M);
    if (!M && typeof window < "u") {
      b1();
      const A = U1(S);
      ((x = A.MeasureLayout),
        (j.visualElement = z1(n, D, S, u, A.ProjectionNode, d)));
    }
    return w.jsxs(to.Provider, {
      value: j,
      children: [
        x && j.visualElement
          ? w.jsx(x, { visualElement: j.visualElement, ...S })
          : null,
        D1(n, y, F1(D, j.visualElement, g), D, M, r, d),
      ],
    });
  }
  p.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const m = Q.forwardRef(p);
  return ((m[I1] = n), m);
}
function B1({ layoutId: n }) {
  const r = Q.useContext(zh).id;
  return r && n !== void 0 ? r + "-" + n : n;
}
function b1(n, r) {
  Q.useContext(fm).strict;
}
function U1(n) {
  const r = dm(),
    { drag: s, layout: a } = r;
  if (!s && !a) return {};
  const u = { ...s, ...a };
  return {
    MeasureLayout:
      (s != null && s.isEnabled(n)) || (a != null && a.isEnabled(n))
        ? u.MeasureLayout
        : void 0,
    ProjectionNode: u.ProjectionNode,
  };
}
function W1(n, r) {
  if (typeof Proxy > "u") return dl;
  const s = new Map(),
    a = (d, f) => dl(d, f, n, r),
    u = (d, f) => a(d, f);
  return new Proxy(u, {
    get: (d, f) =>
      f === "create"
        ? a
        : (s.has(f) || s.set(f, dl(f, void 0, n, r)), s.get(f)),
  });
}
const H1 = (n, r) =>
  (r.isSVG ?? yu(n))
    ? new Nx(r)
    : new Sx(r, { allowProjection: n !== Q.Fragment });
class $1 extends Sn {
  constructor(r) {
    (super(r), r.animationState || (r.animationState = Rx(r)));
  }
  updateAnimationControlsSubscription() {
    const { animate: r } = this.node.getProps();
    Js(r) && (this.unmountControls = r.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: r } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {};
    r !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var r;
    (this.node.animationState.reset(),
      (r = this.unmountControls) == null || r.call(this));
  }
}
let K1 = 0;
class G1 extends Sn {
  constructor() {
    (super(...arguments), (this.id = K1++), (this.isExitComplete = !1));
  }
  update() {
    var d;
    if (!this.node.presenceContext) return;
    const { isPresent: r, onExitComplete: s } = this.node.presenceContext,
      { isPresent: a } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || r === a) return;
    if (r && a === !1) {
      if (this.isExitComplete) {
        const { initial: f, custom: p } = this.node.getProps();
        if (typeof f == "string") {
          const m = Bn(this.node, f, p);
          if (m) {
            const { transition: y, transitionEnd: g, ...x } = m;
            for (const S in x)
              (d = this.node.getValue(S)) == null || d.jump(x[S]);
          }
        }
        (this.node.animationState.reset(),
          this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const u = this.node.animationState.setActive("exit", !r);
    s &&
      !r &&
      u.then(() => {
        ((this.isExitComplete = !0), s(this.id));
      });
  }
  mount() {
    const { register: r, onExitComplete: s } = this.node.presenceContext || {};
    (s && s(this.id), r && (this.unmount = r(this.id)));
  }
  unmount() {}
}
const X1 = { animation: { Feature: $1 }, exit: { Feature: G1 } };
function Ti(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const Y1 = (n) => (r) => cu(r) && n(r, Ti(r));
function mi(n, r, s, a) {
  return xi(n, r, Y1(s), a);
}
const xm = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Ch = (n, r) => Math.abs(n - r);
function Q1(n, r) {
  const s = Ch(n.x, r.x),
    a = Ch(n.y, r.y);
  return Math.sqrt(s ** 2 + a ** 2);
}
const Nh = new Set(["auto", "scroll"]);
class wm {
  constructor(
    r,
    s,
    {
      transformPagePoint: a,
      contextWindow: u = window,
      dragSnapToOrigin: d = !1,
      distanceThreshold: f = 3,
      element: p,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (M) => {
        this.handleScroll(M.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Fs(
            this.lastRawMoveEventInfo,
            this.transformPagePoint,
          ));
        const M = hl(this.lastMoveEventInfo, this.history),
          j = this.startEvent !== null,
          D = Q1(M.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!j && !D) return;
        const { point: A } = M,
          { timestamp: I } = Xe;
        this.history.push({ ...A, timestamp: I });
        const { onStart: B, onMove: O } = this.handlers;
        (j ||
          (B && B(this.lastMoveEvent, M),
          (this.startEvent = this.lastMoveEvent)),
          O && O(this.lastMoveEvent, M));
      }),
      (this.handlePointerMove = (M, j) => {
        ((this.lastMoveEvent = M),
          (this.lastRawMoveEventInfo = j),
          (this.lastMoveEventInfo = Fs(j, this.transformPagePoint)),
          xe.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (M, j) => {
        this.end();
        const { onEnd: D, onSessionEnd: A, resumeAnimation: I } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && I && I(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const B = hl(
          M.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Fs(j, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && D && D(M, B), A && A(M, B));
      }),
      !cu(r))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = s),
      (this.transformPagePoint = a),
      (this.distanceThreshold = f),
      (this.contextWindow = u || window));
    const m = Ti(r),
      y = Fs(m, this.transformPagePoint),
      { point: g } = y,
      { timestamp: x } = Xe;
    this.history = [{ ...g, timestamp: x }];
    const { onSessionStart: S } = s;
    (S && S(r, hl(y, this.history)),
      (this.removeListeners = wi(
        mi(this.contextWindow, "pointermove", this.handlePointerMove),
        mi(this.contextWindow, "pointerup", this.handlePointerUp),
        mi(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      p && this.startScrollTracking(p));
  }
  startScrollTracking(r) {
    let s = r.parentElement;
    for (; s; ) {
      const a = getComputedStyle(s);
      ((Nh.has(a.overflowX) || Nh.has(a.overflowY)) &&
        this.scrollPositions.set(s, { x: s.scrollLeft, y: s.scrollTop }),
        (s = s.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(r) {
    const s = this.scrollPositions.get(r);
    if (!s) return;
    const a = r === window,
      u = a
        ? { x: window.scrollX, y: window.scrollY }
        : { x: r.scrollLeft, y: r.scrollTop },
      d = { x: u.x - s.x, y: u.y - s.y };
    (d.x === 0 && d.y === 0) ||
      (a
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += d.x),
          (this.lastMoveEventInfo.point.y += d.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= d.x), (this.history[0].y -= d.y)),
      this.scrollPositions.set(r, u),
      xe.update(this.updatePoint, !0));
  }
  updateHandlers(r) {
    this.handlers = r;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      wn(this.updatePoint));
  }
}
function Fs(n, r) {
  return r ? { point: r(n.point) } : n;
}
function Mh(n, r) {
  return { x: n.x - r.x, y: n.y - r.y };
}
function hl({ point: n }, r) {
  return {
    point: n,
    delta: Mh(n, Sm(r)),
    offset: Mh(n, q1(r)),
    velocity: Z1(r, 0.1),
  };
}
function q1(n) {
  return n[0];
}
function Sm(n) {
  return n[n.length - 1];
}
function Z1(n, r) {
  if (n.length < 2) return { x: 0, y: 0 };
  let s = n.length - 1,
    a = null;
  const u = Sm(n);
  for (; s >= 0 && ((a = n[s]), !(u.timestamp - a.timestamp > mt(r))); ) s--;
  if (!a) return { x: 0, y: 0 };
  a === n[0] &&
    n.length > 2 &&
    u.timestamp - a.timestamp > mt(r) * 2 &&
    (a = n[1]);
  const d = kt(u.timestamp - a.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (u.x - a.x) / d, y: (u.y - a.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function J1(n, { min: r, max: s }, a) {
  return (
    r !== void 0 && n < r
      ? (n = a ? je(r, n, a.min) : Math.max(n, r))
      : s !== void 0 && n > s && (n = a ? je(s, n, a.max) : Math.min(n, s)),
    n
  );
}
function jh(n, r, s) {
  return {
    min: r !== void 0 ? n.min + r : void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
  };
}
function ew(n, { top: r, left: s, bottom: a, right: u }) {
  return { x: jh(n.x, s, u), y: jh(n.y, r, a) };
}
function Ah(n, r) {
  let s = r.min - n.min,
    a = r.max - n.max;
  return (
    r.max - r.min < n.max - n.min && ([s, a] = [a, s]),
    { min: s, max: a }
  );
}
function tw(n, r) {
  return { x: Ah(n.x, r.x), y: Ah(n.y, r.y) };
}
function nw(n, r) {
  let s = 0.5;
  const a = rt(n),
    u = rt(r);
  return (
    u > a
      ? (s = gi(r.min, r.max - a, n.min))
      : a > u && (s = gi(n.min, n.max - u, r.min)),
    bt(0, 1, s)
  );
}
function rw(n, r) {
  const s = {};
  return (
    r.min !== void 0 && (s.min = r.min - n.min),
    r.max !== void 0 && (s.max = r.max - n.min),
    s
  );
}
const Ol = 0.35;
function iw(n = Ol) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Ol),
    { x: Dh(n, "left", "right"), y: Dh(n, "top", "bottom") }
  );
}
function Dh(n, r, s) {
  return { min: Rh(n, r), max: Rh(n, s) };
}
function Rh(n, r) {
  return typeof n == "number" ? n : n[r] || 0;
}
const sw = new WeakMap();
class ow {
  constructor(r) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ue()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = r));
  }
  start(r, { snapToCursor: s = !1, distanceThreshold: a } = {}) {
    const { presenceContext: u } = this.visualElement;
    if (u && u.isPresent === !1) return;
    const d = (x) => {
        (s && this.snapToCursor(Ti(x).point), this.stopAnimation());
      },
      f = (x, S) => {
        const { drag: M, dragPropagation: j, onDragStart: D } = this.getProps();
        if (
          M &&
          !j &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Bv(M)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = x),
          (this.latestPanInfo = S),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ot((I) => {
            let B = this.getAxisMotionValue(I).get() || 0;
            if (Bt.test(B)) {
              const { projection: O } = this.visualElement;
              if (O && O.layout) {
                const b = O.layout.layoutBox[I];
                b && (B = rt(b) * (parseFloat(B) / 100));
              }
            }
            this.originPoint[I] = B;
          }),
          D && xe.update(() => D(x, S), !1, !0),
          Al(this.visualElement, "transform"));
        const { animationState: A } = this.visualElement;
        A && A.setActive("whileDrag", !0);
      },
      p = (x, S) => {
        ((this.latestPointerEvent = x), (this.latestPanInfo = S));
        const {
          dragPropagation: M,
          dragDirectionLock: j,
          onDirectionLock: D,
          onDrag: A,
        } = this.getProps();
        if (!M && !this.openDragLock) return;
        const { offset: I } = S;
        if (j && this.currentDirection === null) {
          ((this.currentDirection = lw(I)),
            this.currentDirection !== null && D && D(this.currentDirection));
          return;
        }
        (this.updateAxis("x", S.point, I),
          this.updateAxis("y", S.point, I),
          this.visualElement.render(),
          A && xe.update(() => A(x, S), !1, !0));
      },
      m = (x, S) => {
        ((this.latestPointerEvent = x),
          (this.latestPanInfo = S),
          this.stop(x, S),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      y = () => {
        const { dragSnapToOrigin: x } = this.getProps();
        (x || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new wm(
      r,
      {
        onSessionStart: d,
        onStart: f,
        onMove: p,
        onSessionEnd: m,
        resumeAnimation: y,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        distanceThreshold: a,
        contextWindow: xm(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(r, s) {
    const a = r || this.latestPointerEvent,
      u = s || this.latestPanInfo,
      d = this.isDragging;
    if ((this.cancel(), !d || !u || !a)) return;
    const { velocity: f } = u;
    this.startAnimation(f);
    const { onDragEnd: p } = this.getProps();
    p && xe.postRender(() => p(a, u));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: r, animationState: s } = this.visualElement;
    (r && (r.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: a } = this.getProps();
    (!a &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(r, s, a) {
    const { drag: u } = this.getProps();
    if (!a || !zs(r, u, this.currentDirection)) return;
    const d = this.getAxisMotionValue(r);
    let f = this.originPoint[r] + a[r];
    (this.constraints &&
      this.constraints[r] &&
      (f = J1(f, this.constraints[r], this.elastic[r])),
      d.set(f));
  }
  resolveConstraints() {
    var d;
    const { dragConstraints: r, dragElastic: s } = this.getProps(),
      a =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (d = this.visualElement.projection) == null
            ? void 0
            : d.layout,
      u = this.constraints;
    (r && dr(r)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : r && a
        ? (this.constraints = ew(a.layoutBox, r))
        : (this.constraints = !1),
      (this.elastic = iw(s)),
      u !== this.constraints &&
        !dr(r) &&
        a &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ot((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = rw(a.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: r, onMeasureDragConstraints: s } = this.getProps();
    if (!r || !dr(r)) return !1;
    const a = r.current,
      { projection: u } = this.visualElement;
    if (!u || !u.layout) return !1;
    const d = mx(a, u.root, this.visualElement.getTransformPagePoint());
    let f = tw(u.layout.layoutBox, d);
    if (s) {
      const p = s(dx(f));
      ((this.hasMutatedConstraints = !!p), p && (f = Up(p)));
    }
    return f;
  }
  startAnimation(r) {
    const {
        drag: s,
        dragMomentum: a,
        dragElastic: u,
        dragTransition: d,
        dragSnapToOrigin: f,
        onDragTransitionEnd: p,
      } = this.getProps(),
      m = this.constraints || {},
      y = Ot((g) => {
        if (!zs(g, s, this.currentDirection)) return;
        let x = (m && m[g]) || {};
        (f === !0 || f === g) && (x = { min: 0, max: 0 });
        const S = u ? 200 : 1e6,
          M = u ? 40 : 1e7,
          j = {
            type: "inertia",
            velocity: a ? r[g] : 0,
            bounceStiffness: S,
            bounceDamping: M,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...x,
          };
        return this.startAxisValueAnimation(g, j);
      });
    return Promise.all(y).then(p);
  }
  startAxisValueAnimation(r, s) {
    const a = this.getAxisMotionValue(r);
    return (
      Al(this.visualElement, r),
      a.start(su(r, a, 0, s, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ot((r) => this.getAxisMotionValue(r).stop());
  }
  getAxisMotionValue(r) {
    const s = `_drag${r.toUpperCase()}`,
      a = this.visualElement.getProps(),
      u = a[s];
    return (
      u ||
      this.visualElement.getValue(r, (a.initial ? a.initial[r] : void 0) || 0)
    );
  }
  snapToCursor(r) {
    Ot((s) => {
      const { drag: a } = this.getProps();
      if (!zs(s, a, this.currentDirection)) return;
      const { projection: u } = this.visualElement,
        d = this.getAxisMotionValue(s);
      if (u && u.layout) {
        const { min: f, max: p } = u.layout.layoutBox[s],
          m = d.get() || 0;
        d.set(r[s] - je(f, p, 0.5) + m);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: r, dragConstraints: s } = this.getProps(),
      { projection: a } = this.visualElement;
    if (!dr(s) || !a || !this.constraints) return;
    this.stopAnimation();
    const u = { x: 0, y: 0 };
    Ot((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        u[f] = nw({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      a.root && a.root.updateScroll(),
      a.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Ot((f) => {
        if (!zs(f, r, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: m, max: y } = this.constraints[f];
        p.set(je(m, y, u[f]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    sw.set(this.visualElement, this);
    const r = this.visualElement.current,
      s = mi(r, "pointerdown", (y) => {
        const { drag: g, dragListener: x = !0 } = this.getProps(),
          S = y.target,
          M = S !== r && Kv(S);
        g && x && !M && this.start(y);
      });
    let a;
    const u = () => {
        const { dragConstraints: y } = this.getProps();
        dr(y) &&
          y.current &&
          ((this.constraints = this.resolveRefConstraints()),
          a ||
            (a = aw(r, y.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: d } = this.visualElement,
      f = d.addEventListener("measure", u);
    (d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()),
      xe.read(u));
    const p = xi(window, "resize", () => this.scalePositionWithinConstraints()),
      m = d.addEventListener(
        "didUpdate",
        ({ delta: y, hasLayoutChanged: g }) => {
          this.isDragging &&
            g &&
            (Ot((x) => {
              const S = this.getAxisMotionValue(x);
              S &&
                ((this.originPoint[x] += y[x].translate),
                S.set(S.get() + y[x].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (p(), s(), f(), m && m(), a && a());
    };
  }
  getProps() {
    const r = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: a = !1,
        dragPropagation: u = !1,
        dragConstraints: d = !1,
        dragElastic: f = Ol,
        dragMomentum: p = !0,
      } = r;
    return {
      ...r,
      drag: s,
      dragDirectionLock: a,
      dragPropagation: u,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: p,
    };
  }
}
function Lh(n) {
  let r = !0;
  return () => {
    if (r) {
      r = !1;
      return;
    }
    n();
  };
}
function aw(n, r, s) {
  const a = Ud(n, Lh(s)),
    u = Ud(r, Lh(s));
  return () => {
    (a(), u());
  };
}
function zs(n, r, s) {
  return (r === !0 || r === n) && (s === null || s === n);
}
function lw(n, r = 10) {
  let s = null;
  return (Math.abs(n.y) > r ? (s = "y") : Math.abs(n.x) > r && (s = "x"), s);
}
class uw extends Sn {
  constructor(r) {
    (super(r),
      (this.removeGroupControls = Tt),
      (this.removeListeners = Tt),
      (this.controls = new ow(r)));
  }
  mount() {
    const { dragControls: r } = this.node.getProps();
    (r && (this.removeGroupControls = r.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Tt));
  }
  update() {
    const { dragControls: r } = this.node.getProps(),
      { dragControls: s } = this.node.prevProps || {};
    r !== s &&
      (this.removeGroupControls(),
      r && (this.removeGroupControls = r.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const pl = (n) => (r, s) => {
  n && xe.update(() => n(r, s), !1, !0);
};
class cw extends Sn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Tt));
  }
  onPointerDown(r) {
    this.session = new wm(r, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: xm(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: r,
      onPanStart: s,
      onPan: a,
      onPanEnd: u,
    } = this.node.getProps();
    return {
      onSessionStart: pl(r),
      onStart: pl(s),
      onMove: pl(a),
      onEnd: (d, f) => {
        (delete this.session, u && xe.postRender(() => u(d, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = mi(this.node.current, "pointerdown", (r) =>
      this.onPointerDown(r),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let ml = !1;
class fw extends Q.Component {
  componentDidMount() {
    const {
        visualElement: r,
        layoutGroup: s,
        switchLayoutGroup: a,
        layoutId: u,
      } = this.props,
      { projection: d } = r;
    (d &&
      (s.group && s.group.add(d),
      a && a.register && u && a.register(d),
      ml && d.root.didUpdate(),
      d.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      d.setOptions({
        ...d.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Hs.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(r) {
    const {
        layoutDependency: s,
        visualElement: a,
        drag: u,
        isPresent: d,
      } = this.props,
      { projection: f } = a;
    return (
      f &&
        ((f.isPresent = d),
        r.layoutDependency !== s &&
          f.setOptions({ ...f.options, layoutDependency: s }),
        (ml = !0),
        u || r.layoutDependency !== s || s === void 0 || r.isPresent !== d
          ? f.willUpdate()
          : this.safeToRemove(),
        r.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              xe.postRender(() => {
                const p = f.getStack();
                (!p || !p.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: r } = this.props.visualElement;
    r &&
      (r.root.didUpdate(),
      uu.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: r,
        layoutGroup: s,
        switchLayoutGroup: a,
      } = this.props,
      { projection: u } = r;
    ((ml = !0),
      u &&
        (u.scheduleCheckAfterUnmount(),
        s && s.group && s.group.remove(u),
        a && a.deregister && a.deregister(u)));
  }
  safeToRemove() {
    const { safeToRemove: r } = this.props;
    r && r();
  }
  render() {
    return null;
  }
}
function km(n) {
  const [r, s] = v1(),
    a = Q.useContext(zh);
  return w.jsx(fw, {
    ...n,
    layoutGroup: a,
    switchLayoutGroup: Q.useContext(ym),
    isPresent: r,
    safeToRemove: s,
  });
}
const dw = {
  pan: { Feature: cw },
  drag: { Feature: uw, ProjectionNode: um, MeasureLayout: km },
};
function Vh(n, r, s) {
  const { props: a } = n;
  n.animationState &&
    a.whileHover &&
    n.animationState.setActive("whileHover", s === "Start");
  const u = "onHover" + s,
    d = a[u];
  d && xe.postRender(() => d(r, Ti(r)));
}
class hw extends Sn {
  mount() {
    const { current: r } = this.node;
    r &&
      (this.unmount = Uv(
        r,
        (s, a) => (Vh(this.node, a, "Start"), (u) => Vh(this.node, u, "End")),
      ));
  }
  unmount() {}
}
class pw extends Sn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let r = !1;
    try {
      r = this.node.current.matches(":focus-visible");
    } catch {
      r = !0;
    }
    !r ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = wi(
      xi(this.node.current, "focus", () => this.onFocus()),
      xi(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function _h(n, r, s) {
  const { props: a } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState &&
    a.whileTap &&
    n.animationState.setActive("whileTap", s === "Start");
  const u = "onTap" + (s === "End" ? "" : s),
    d = a[u];
  d && xe.postRender(() => d(r, Ti(r)));
}
class mw extends Sn {
  mount() {
    const { current: r } = this.node;
    if (!r) return;
    const { globalTapTarget: s, propagate: a } = this.node.props;
    this.unmount = Xv(
      r,
      (u, d) => (
        _h(this.node, d, "Start"),
        (f, { success: p }) => _h(this.node, f, p ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: s,
        stopPropagation: (a == null ? void 0 : a.tap) === !1,
      },
    );
  }
  unmount() {}
}
const Bl = new WeakMap(),
  gl = new WeakMap(),
  gw = (n) => {
    const r = Bl.get(n.target);
    r && r(n);
  },
  yw = (n) => {
    n.forEach(gw);
  };
function vw({ root: n, ...r }) {
  const s = n || document;
  gl.has(s) || gl.set(s, {});
  const a = gl.get(s),
    u = JSON.stringify(r);
  return (
    a[u] || (a[u] = new IntersectionObserver(yw, { root: n, ...r })),
    a[u]
  );
}
function xw(n, r, s) {
  const a = vw(r);
  return (
    Bl.set(n, s),
    a.observe(n),
    () => {
      (Bl.delete(n), a.unobserve(n));
    }
  );
}
const ww = { some: 0, all: 1 };
class Sw extends Sn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: r = {} } = this.node.getProps(),
      { root: s, margin: a, amount: u = "some", once: d } = r,
      f = {
        root: s ? s.current : void 0,
        rootMargin: a,
        threshold: typeof u == "number" ? u : ww[u],
      },
      p = (m) => {
        const { isIntersecting: y } = m;
        if (
          this.isInView === y ||
          ((this.isInView = y), d && !y && this.hasEnteredView)
        )
          return;
        (y && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", y));
        const { onViewportEnter: g, onViewportLeave: x } = this.node.getProps(),
          S = y ? g : x;
        S && S(m);
      };
    return xw(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: r, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(kw(r, s)) && this.startObserver();
  }
  unmount() {}
}
function kw({ viewport: n = {} }, { viewport: r = {} } = {}) {
  return (s) => n[s] !== r[s];
}
const Tw = {
    inView: { Feature: Sw },
    tap: { Feature: mw },
    focus: { Feature: pw },
    hover: { Feature: hw },
  },
  Pw = { layout: { ProjectionNode: um, MeasureLayout: km } },
  Ew = { ...X1, ...Tw, ...dw, ...Pw },
  ie = W1(Ew, H1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cw = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Nw = (n) =>
    n.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, s, a) =>
      a ? a.toUpperCase() : s.toLowerCase(),
    ),
  Ih = (n) => {
    const r = Nw(n);
    return r.charAt(0).toUpperCase() + r.slice(1);
  },
  Tm = (...n) =>
    n
      .filter((r, s, a) => !!r && r.trim() !== "" && a.indexOf(r) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Mw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jw = Q.forwardRef(
  (
    {
      color: n = "currentColor",
      size: r = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: a,
      className: u = "",
      children: d,
      iconNode: f,
      ...p
    },
    m,
  ) =>
    Q.createElement(
      "svg",
      {
        ref: m,
        ...Mw,
        width: r,
        height: r,
        stroke: n,
        strokeWidth: a ? (Number(s) * 24) / Number(r) : s,
        className: Tm("lucide", u),
        ...p,
      },
      [
        ...f.map(([y, g]) => Q.createElement(y, g)),
        ...(Array.isArray(d) ? d : [d]),
      ],
    ),
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oe = (n, r) => {
  const s = Q.forwardRef(({ className: a, ...u }, d) =>
    Q.createElement(jw, {
      ref: d,
      iconNode: r,
      className: Tm(`lucide-${Cw(Ih(n))}`, `lucide-${n}`, a),
      ...u,
    }),
  );
  return ((s.displayName = Ih(n)), s);
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Aw = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  Dw = Oe("award", Aw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rw = [
    [
      "path",
      {
        d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
        key: "l5xja",
      },
    ],
    [
      "path",
      {
        d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
        key: "ep3f8r",
      },
    ],
    [
      "path",
      { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" },
    ],
    ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
    ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
    ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
    ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
    ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
    ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
  ],
  Lw = Oe("brain", Rw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vw = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  bl = Oe("calendar", Vw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _w = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Iw = Oe("chevron-down", _w);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fw = [
    [
      "path",
      {
        d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
        key: "p7xjir",
      },
    ],
  ],
  zw = Oe("cloud", Fw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ow = [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
  ],
  Bw = Oe("code-xml", Ow);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bw = [
    ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
    ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
  ],
  Uw = Oe("code", bw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ww = [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
  ],
  Fh = Oe("database", Ww);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hw = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  $w = Oe("external-link", Hw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kw = [
    ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
    ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }],
  ],
  Gw = Oe("git-branch", Kw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xw = [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
  ],
  Pm = Oe("github", Xw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yw = [
    [
      "path",
      {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0",
      },
    ],
    ["path", { d: "M22 10v6", key: "1lu8f3" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
  ],
  Qw = Oe("graduation-cap", Yw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qw = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  Em = Oe("linkedin", qw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zw = [
    [
      "rect",
      { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
    ],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ],
  Cm = Oe("mail", Zw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jw = [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ],
  eS = Oe("menu", Jw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tS = [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M9 21V9", key: "1oto5p" }],
  ],
  nS = Oe("panels-top-left", tS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rS = [
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5",
      },
    ],
  ],
  iS = Oe("phone", rS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sS = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  oS = Oe("send", sS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aS = [
    [
      "path",
      {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
        key: "cbrjhi",
      },
    ],
  ],
  lS = Oe("wrench", aS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uS = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  cS = Oe("x", uS);
function fS() {
  return w.jsxs("section", {
    id: "home",
    className:
      "min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-6",
    children: [
      w.jsxs("div", {
        className: "absolute inset-0",
        children: [
          w.jsx("div", {
            className:
              "absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse",
          }),
          w.jsx("div", {
            className:
              "absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000",
          }),
        ],
      }),
      w.jsx("div", {
        className: "max-w-7xl mx-auto py-20 relative z-10 w-full",
        children: w.jsxs("div", {
          className: "text-center",
          children: [
            w.jsxs(ie.div, {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              children: [
                w.jsx(ie.p, {
                  className: "text-blue-400 text-base md:text-lg mb-4",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.2 },
                  children: "Hi, my name is",
                }),
                w.jsx(ie.h1, {
                  className:
                    "text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent px-2",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.3, duration: 0.8 },
                  children: "Pankaj Mahajan",
                }),
                w.jsx(ie.h2, {
                  className:
                    "text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-6 px-2",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4, duration: 0.8 },
                  children: "Backend Developer",
                }),
                w.jsx(ie.p, {
                  className:
                    "text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 leading-relaxed px-4",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.5, duration: 0.8 },
                  children:
                    "Building scalable RESTful APIs and microservices with Node.js and Express.js. Passionate about creating secure, efficient backend systems that power modern applications.",
                }),
                w.jsxs(ie.div, {
                  className: "flex gap-4 md:gap-6 justify-center mb-12",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.6 },
                  children: [
                    w.jsx(ie.a, {
                      href: "https://www.linkedin.com/in/pankaj-mahajan-26a369223",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "p-2.5 md:p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-400/50 transition-all",
                      whileHover: { scale: 1.1, rotate: 5 },
                      whileTap: { scale: 0.95 },
                      children: w.jsx(Em, {
                        className: "w-5 h-5 md:w-6 md:h-6 text-blue-400",
                      }),
                    }),
                    w.jsx(ie.a, {
                      href: "https://github.com/pankajmahajan",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "p-2.5 md:p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-400/50 transition-all",
                      whileHover: { scale: 1.1, rotate: -5 },
                      whileTap: { scale: 0.95 },
                      children: w.jsx(Pm, {
                        className: "w-5 h-5 md:w-6 md:h-6 text-purple-400",
                      }),
                    }),
                    w.jsx(ie.a, {
                      href: "mailto:mahajianmag05@gmail.com",
                      className:
                        "p-2.5 md:p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-pink-400/50 transition-all",
                      whileHover: { scale: 1.1, rotate: 5 },
                      whileTap: { scale: 0.95 },
                      children: w.jsx(Cm, {
                        className: "w-5 h-5 md:w-6 md:h-6 text-pink-400",
                      }),
                    }),
                  ],
                }),
                w.jsx(ie.a, {
                  href: "#contact",
                  className:
                    "inline-block px-6 md:px-8 py-3 md:py-4 text-sm md:text-base bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.7 },
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: "Get In Touch",
                }),
              ],
            }),
            w.jsx(ie.div, {
              className:
                "absolute bottom-10 left-1/2 transform -translate-x-1/2",
              animate: { y: [0, 10, 0] },
              transition: { repeat: 1 / 0, duration: 2 },
              children: w.jsx(Iw, {
                className: "w-6 h-6 md:w-8 md:h-8 text-gray-500",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Tr(n = {}) {
  const [r, s] = Q.useState(!1),
    a = Q.useRef(null);
  return (
    Q.useEffect(() => {
      const u = new IntersectionObserver(
          ([f]) => {
            f.isIntersecting && s(!0);
          },
          { threshold: n.threshold || 0.1, rootMargin: n.rootMargin || "0px" },
        ),
        d = a.current;
      return (
        d && u.observe(d),
        () => {
          d && u.unobserve(d);
        }
      );
    }, [n.threshold, n.rootMargin]),
    [a, r]
  );
}
function dS() {
  const [n, r] = Tr({ threshold: 0.2 });
  return w.jsx("section", {
    id: "about",
    className: "py-12 md:py-20 px-4 md:px-6",
    ref: n,
    children: w.jsx("div", {
      className: "max-w-6xl mx-auto",
      children: w.jsxs(ie.div, {
        initial: { opacity: 0, y: 50 },
        animate: r ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.8 },
        children: [
          w.jsxs("h2", {
            className:
              "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 flex items-center gap-2 md:gap-4",
            children: [
              w.jsx("span", {
                className: "text-blue-400 text-2xl md:text-3xl",
                children: "01.",
              }),
              w.jsx("span", { children: "About Me" }),
              w.jsx("span", {
                className:
                  "flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-2 md:ml-4",
              }),
            ],
          }),
          w.jsxs("div", {
            className: "grid md:grid-cols-2 gap-8 md:gap-12 items-start",
            children: [
              w.jsxs(ie.div, {
                initial: { opacity: 0, x: -50 },
                animate: r ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.2 },
                children: [
                  w.jsx("p", {
                    className:
                      "text-gray-400 text-base md:text-lg leading-relaxed mb-4 md:mb-6",
                    children:
                      "I'm a passionate Backend Developer with 1 year of experience specializing in building scalable RESTful APIs and microservices. My expertise lies in creating secure, high-performance backend systems that power modern web applications.",
                  }),
                  w.jsxs("p", {
                    className:
                      "text-gray-400 text-base md:text-lg leading-relaxed mb-4 md:mb-6",
                    children: [
                      "I work extensively with ",
                      w.jsx("span", {
                        className: "text-blue-400",
                        children: "Node.js",
                      }),
                      " and",
                      " ",
                      w.jsx("span", {
                        className: "text-blue-400",
                        children: "Express.js",
                      }),
                      ", implementing robust authentication systems with Firebase, and optimizing performance using Redis caching. I'm experienced in managing both SQL and NoSQL databases, ensuring data integrity and efficiency.",
                    ],
                  }),
                  w.jsxs("p", {
                    className:
                      "text-gray-400 text-base md:text-lg leading-relaxed mb-4 md:mb-6",
                    children: [
                      "Beyond backend development, I'm diving into the exciting world of",
                      " ",
                      w.jsx("span", {
                        className: "text-pink-400",
                        children: "AI and Machine Learning",
                      }),
                      ". I've completed Data Science training where I gained hands-on experience in data analysis, visualization, and applying machine learning algorithms using Python. I'm passionate about integrating AI capabilities into web applications to create intelligent, data-driven solutions.",
                    ],
                  }),
                  w.jsx("p", {
                    className:
                      "text-gray-400 text-base md:text-lg leading-relaxed",
                    children:
                      "My focus is on delivering production-ready solutions that scale. I'm proficient in cloud deployment with AWS, and I follow best practices in version control and collaborative development using Git/GitHub.",
                  }),
                ],
              }),
              w.jsx(ie.div, {
                initial: { opacity: 0, x: 50 },
                animate: r ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.4 },
                className: "relative",
                children: w.jsxs("div", {
                  className: "relative group",
                  children: [
                    w.jsx("div", {
                      className:
                        "absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000",
                    }),
                    w.jsxs("div", {
                      className:
                        "relative bg-[#0f0f0f] p-6 md:p-8 rounded-lg border border-white/10",
                      children: [
                        w.jsx("h3", {
                          className:
                            "text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent",
                          children: "Quick Facts",
                        }),
                        w.jsxs("ul", {
                          className:
                            "space-y-3 text-gray-400 text-sm md:text-base",
                          children: [
                            w.jsxs("li", {
                              className: "flex items-start gap-3",
                              children: [
                                w.jsx("span", {
                                  className: "text-blue-400 mt-1 flex-shrink-0",
                                  children: "▹",
                                }),
                                w.jsx("span", {
                                  children:
                                    "1+ years of professional experience",
                                }),
                              ],
                            }),
                            w.jsxs("li", {
                              className: "flex items-start gap-3",
                              children: [
                                w.jsx("span", {
                                  className: "text-blue-400 mt-1 flex-shrink-0",
                                  children: "▹",
                                }),
                                w.jsx("span", {
                                  children:
                                    "Specialized in backend development & microservices",
                                }),
                              ],
                            }),
                            w.jsxs("li", {
                              className: "flex items-start gap-3",
                              children: [
                                w.jsx("span", {
                                  className: "text-pink-400 mt-1 flex-shrink-0",
                                  children: "▹",
                                }),
                                w.jsx("span", {
                                  children: "AI & Machine Learning enthusiast",
                                }),
                              ],
                            }),
                            w.jsxs("li", {
                              className: "flex items-start gap-3",
                              children: [
                                w.jsx("span", {
                                  className:
                                    "text-purple-400 mt-1 flex-shrink-0",
                                  children: "▹",
                                }),
                                w.jsx("span", {
                                  children:
                                    "Data Science certified (Python, ML)",
                                }),
                              ],
                            }),
                            w.jsxs("li", {
                              className: "flex items-start gap-3",
                              children: [
                                w.jsx("span", {
                                  className: "text-blue-400 mt-1 flex-shrink-0",
                                  children: "▹",
                                }),
                                w.jsx("span", {
                                  children: "Cloud deployment expert (AWS)",
                                }),
                              ],
                            }),
                            w.jsxs("li", {
                              className: "flex items-start gap-3",
                              children: [
                                w.jsx("span", {
                                  className: "text-blue-400 mt-1 flex-shrink-0",
                                  children: "▹",
                                }),
                                w.jsx("span", {
                                  children:
                                    "B.Tech in Computer Science (CGPA: 7.5)",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function hS() {
  const [n, r] = Tr({ threshold: 0.2 }),
    s = [
      {
        title: "Languages",
        icon: Bw,
        skills: ["JavaScript", "Java", "Python", "HTML5", "CSS3"],
        color: "from-blue-400 to-blue-600",
      },
      {
        title: "Backend",
        icon: Fh,
        skills: ["Node.js", "Express.js", "RESTful APIs", "Microservices"],
        color: "from-green-400 to-green-600",
      },
      {
        title: "Frontend",
        icon: nS,
        skills: ["React.js", "Tailwind CSS", "Responsive Design", "UI/UX"],
        color: "from-cyan-400 to-cyan-600",
      },
      {
        title: "Databases",
        icon: Fh,
        skills: ["MySQL", "MongoDB", "Redis", "Database Design"],
        color: "from-purple-400 to-purple-600",
      },
      {
        title: "AI & Data Science",
        icon: Lw,
        skills: [
          "Machine Learning",
          "Data Analysis",
          "Data Visualization",
          "Python ML",
        ],
        color: "from-pink-400 to-pink-600",
      },
      {
        title: "Cloud & BaaS",
        icon: zw,
        skills: ["AWS", "Firebase", "Cloud Deployment", "Scalability"],
        color: "from-orange-400 to-orange-600",
      },
      {
        title: "Version Control",
        icon: Gw,
        skills: ["Git", "GitHub", "Collaboration", "CI/CD"],
        color: "from-rose-400 to-rose-600",
      },
      {
        title: "Tools & Others",
        icon: lS,
        skills: ["Razorpay", "Stripe", "Postman", "VS Code"],
        color: "from-yellow-400 to-yellow-600",
      },
      {
        title: "Web Development",
        icon: Uw,
        skills: [
          "Full Stack",
          "Web Security",
          "Performance Optimization",
          "API Integration",
        ],
        color: "from-indigo-400 to-indigo-600",
      },
    ];
  return w.jsx("section", {
    id: "skills",
    className: "py-12 md:py-20 px-4 md:px-6 bg-[#0f0f0f]/50",
    ref: n,
    children: w.jsx("div", {
      className: "max-w-6xl mx-auto",
      children: w.jsxs(ie.div, {
        initial: { opacity: 0, y: 50 },
        animate: r ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.8 },
        children: [
          w.jsxs("h2", {
            className:
              "text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 flex items-center gap-2 md:gap-4",
            children: [
              w.jsx("span", {
                className: "text-blue-400 text-2xl md:text-3xl",
                children: "02.",
              }),
              w.jsx("span", { children: "Technical Skills" }),
              w.jsx("span", {
                className:
                  "flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-2 md:ml-4",
              }),
            ],
          }),
          w.jsx("div", {
            className:
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
            children: s.map((a, u) =>
              w.jsxs(
                ie.div,
                {
                  initial: { opacity: 0, y: 50 },
                  animate: r ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.5, delay: u * 0.1 },
                  className: "relative group",
                  children: [
                    w.jsx("div", {
                      className: `absolute -inset-0.5 bg-gradient-to-r ${a.color} rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300`,
                    }),
                    w.jsxs("div", {
                      className:
                        "relative bg-[#0a0a0a] p-4 md:p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all h-full",
                      children: [
                        w.jsxs("div", {
                          className: "flex items-center gap-3 mb-4",
                          children: [
                            w.jsx("div", {
                              className: `p-2 rounded-lg bg-gradient-to-r ${a.color}`,
                              children: w.jsx(a.icon, {
                                className: "w-4 h-4 md:w-5 md:h-5 text-white",
                              }),
                            }),
                            w.jsx("h3", {
                              className: "text-lg md:text-xl font-bold",
                              children: a.title,
                            }),
                          ],
                        }),
                        w.jsx("div", {
                          className: "flex flex-wrap gap-2",
                          children: a.skills.map((d) =>
                            w.jsx(
                              ie.span,
                              {
                                className:
                                  "px-2.5 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all",
                                whileHover: { scale: 1.05 },
                                children: d,
                              },
                              d,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                },
                a.title,
              ),
            ),
          }),
        ],
      }),
    }),
  });
}
function pS() {
  const [n, r] = Tr({ threshold: 0.2 }),
    s = {
      company: "Ideal IT Techno",
      position: "Backend Developer",
      period: "Apr 2024 - Present",
      responsibilities: [
        "Contributed to backend development of automation systems using Node.js",
        "Improved operational workflows through optimized backend logic and data handling",
        "Assisted in implementing monitoring and preventive maintenance logic to reduce downtime",
      ],
    },
    a = {
      program: "Data Science Trainee",
      organization: "Grow Tech - Dr. Reddy's Foundation",
      period: "Sep 2024 - Dec 2024",
      achievements: [
        "Gained hands-on experience in data cleaning, analysis, and visualization using Python",
        "Applied basic machine learning concepts and statistical techniques on sample datasets",
        "Learned Python, Data Analysis, Data Visualization, and Machine Learning fundamentals",
      ],
    };
  return w.jsx("section", {
    id: "experience",
    className: "py-12 md:py-20 px-4 md:px-6",
    ref: n,
    children: w.jsx("div", {
      className: "max-w-6xl mx-auto",
      children: w.jsxs(ie.div, {
        initial: { opacity: 0, y: 50 },
        animate: r ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.8 },
        children: [
          w.jsxs("h2", {
            className:
              "text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 flex items-center gap-2 md:gap-4",
            children: [
              w.jsx("span", {
                className: "text-blue-400 text-2xl md:text-3xl",
                children: "03.",
              }),
              w.jsx("span", { children: "Experience" }),
              w.jsx("span", {
                className:
                  "flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-2 md:ml-4",
              }),
            ],
          }),
          w.jsxs("div", {
            className: "space-y-6 md:space-y-8",
            children: [
              w.jsxs(ie.div, {
                initial: { opacity: 0, x: -50 },
                animate: r ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.2 },
                className: "relative group",
                children: [
                  w.jsx("div", {
                    className:
                      "absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300",
                  }),
                  w.jsxs("div", {
                    className:
                      "relative bg-[#0f0f0f] p-6 md:p-8 rounded-lg border border-white/10",
                    children: [
                      w.jsxs("div", {
                        className:
                          "flex flex-col md:flex-row md:items-center md:justify-between mb-4",
                        children: [
                          w.jsxs("div", {
                            children: [
                              w.jsx("h3", {
                                className:
                                  "text-xl md:text-2xl font-bold text-white mb-2",
                                children: s.position,
                              }),
                              w.jsx("p", {
                                className: "text-base md:text-lg text-blue-400",
                                children: s.company,
                              }),
                            ],
                          }),
                          w.jsxs("div", {
                            className:
                              "flex items-center gap-2 text-gray-400 text-sm md:text-base mt-2 md:mt-0",
                            children: [
                              w.jsx(bl, { className: "w-4 h-4 flex-shrink-0" }),
                              w.jsx("span", { children: s.period }),
                            ],
                          }),
                        ],
                      }),
                      w.jsx("ul", {
                        className: "space-y-3 mt-6",
                        children: s.responsibilities.map((u, d) =>
                          w.jsxs(
                            ie.li,
                            {
                              initial: { opacity: 0, x: -20 },
                              animate: r ? { opacity: 1, x: 0 } : {},
                              transition: { delay: 0.3 + d * 0.1 },
                              className:
                                "flex items-start gap-3 text-gray-400 text-sm md:text-base",
                              children: [
                                w.jsx("span", {
                                  className: "text-blue-400 mt-1 flex-shrink-0",
                                  children: "▹",
                                }),
                                w.jsx("span", { children: u }),
                              ],
                            },
                            d,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              w.jsxs(ie.div, {
                initial: { opacity: 0, x: -50 },
                animate: r ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.4 },
                className: "relative group",
                children: [
                  w.jsx("div", {
                    className:
                      "absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300",
                  }),
                  w.jsxs("div", {
                    className:
                      "relative bg-[#0f0f0f] p-6 md:p-8 rounded-lg border border-white/10",
                    children: [
                      w.jsxs("div", {
                        className:
                          "flex flex-col md:flex-row md:items-center md:justify-between mb-4",
                        children: [
                          w.jsxs("div", {
                            children: [
                              w.jsx("h3", {
                                className:
                                  "text-xl md:text-2xl font-bold text-white mb-2",
                                children: a.program,
                              }),
                              w.jsx("p", {
                                className:
                                  "text-base md:text-lg text-purple-400",
                                children: a.organization,
                              }),
                            ],
                          }),
                          w.jsxs("div", {
                            className:
                              "flex items-center gap-2 text-gray-400 text-sm md:text-base mt-2 md:mt-0",
                            children: [
                              w.jsx(bl, { className: "w-4 h-4 flex-shrink-0" }),
                              w.jsx("span", { children: a.period }),
                            ],
                          }),
                        ],
                      }),
                      w.jsx("ul", {
                        className: "space-y-3 mt-6",
                        children: a.achievements.map((u, d) =>
                          w.jsxs(
                            ie.li,
                            {
                              initial: { opacity: 0, x: -20 },
                              animate: r ? { opacity: 1, x: 0 } : {},
                              transition: { delay: 0.5 + d * 0.1 },
                              className:
                                "flex items-start gap-3 text-gray-400 text-sm md:text-base",
                              children: [
                                w.jsx("span", {
                                  className:
                                    "text-purple-400 mt-1 flex-shrink-0",
                                  children: "▹",
                                }),
                                w.jsx("span", { children: u }),
                              ],
                            },
                            d,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function mS() {
  const [n, r] = Tr({ threshold: 0.2 }),
    s = [
      {
        title: "visualible - AI-Based eBook Platform",
        description:
          "A comprehensive eBook platform with AI-driven features, payment integration, and real-time content delivery.",
        technologies: [
          "Node.js",
          "Express.js",
          "Firebase",
          "Razorpay",
          "Stripe",
          "Redis",
          "MySQL",
          "MongoDB",
          "AWS",
        ],
        highlights: [
          "Developed RESTful APIs for content delivery, user interactions, and secure access using Firebase Authentication",
          "Integrated payment gateways (Razorpay/Stripe) to handle eBook purchases and subscriptions with order management",
          "Built scalable microservices for real-time content retrieval and AI-driven supplemental information",
          "Optimized performance using Redis caching and managed data with MySQL/MongoDB",
          "Deployed services on AWS for high scalability and availability",
        ],
        link: "https://visualible.com",
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "Syntra - Dating Application",
        description:
          "A modern dating application with secure authentication, real-time features, and microservices architecture.",
        technologies: [
          "Node.js",
          "Express.js",
          "Firebase",
          "MongoDB",
          "AWS",
          "Git/GitHub",
        ],
        highlights: [
          "Developed and maintained RESTful APIs to support core application features and user interactions",
          "Implemented Firebase Authentication and Authorization for secure user login and session management",
          "Utilized MongoDB for efficient storage and management of user data",
          "Built microservices for real-time content retrieval and data aggregation",
          "Deployed and monitored backend services on AWS ensuring scalability and availability",
          "Used Git/GitHub for version control, bug fixes, and collaborative development",
        ],
        link: "https://syntra.co.in",
        gradient: "from-purple-500 to-pink-500",
      },
    ];
  return w.jsx("section", {
    id: "projects",
    className: "py-12 md:py-20 px-4 md:px-6 bg-[#0f0f0f]/50",
    ref: n,
    children: w.jsx("div", {
      className: "max-w-6xl mx-auto",
      children: w.jsxs(ie.div, {
        initial: { opacity: 0, y: 50 },
        animate: r ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.8 },
        children: [
          w.jsxs("h2", {
            className:
              "text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 flex items-center gap-2 md:gap-4",
            children: [
              w.jsx("span", {
                className: "text-blue-400 text-2xl md:text-3xl",
                children: "04.",
              }),
              w.jsx("span", { children: "Featured Projects" }),
              w.jsx("span", {
                className:
                  "flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-2 md:ml-4",
              }),
            ],
          }),
          w.jsx("div", {
            className: "space-y-8 md:space-y-12",
            children: s.map((a, u) =>
              w.jsxs(
                ie.div,
                {
                  initial: { opacity: 0, y: 50 },
                  animate: r ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8, delay: u * 0.2 },
                  className: "relative group",
                  children: [
                    w.jsx("div", {
                      className: `absolute -inset-0.5 bg-gradient-to-r ${a.gradient} rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300`,
                    }),
                    w.jsxs("div", {
                      className:
                        "relative bg-[#0a0a0a] p-6 md:p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all",
                      children: [
                        w.jsxs("div", {
                          className:
                            "flex flex-col md:flex-row md:items-start md:justify-between mb-4",
                          children: [
                            w.jsxs("div", {
                              className: "flex-1",
                              children: [
                                w.jsx("h3", {
                                  className:
                                    "text-xl md:text-2xl font-bold text-white mb-2",
                                  children: a.title,
                                }),
                                w.jsx("p", {
                                  className:
                                    "text-gray-400 text-sm md:text-base mb-4",
                                  children: a.description,
                                }),
                              ],
                            }),
                            w.jsx("div", {
                              className: "flex gap-3 mb-4 md:mb-0",
                              children: w.jsx(ie.a, {
                                href: a.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-400/50 transition-all",
                                whileHover: { scale: 1.1 },
                                whileTap: { scale: 0.95 },
                                children: w.jsx($w, {
                                  className:
                                    "w-4 h-4 md:w-5 md:h-5 text-blue-400",
                                }),
                              }),
                            }),
                          ],
                        }),
                        w.jsx("ul", {
                          className: "space-y-2 mb-6",
                          children: a.highlights.map((d, f) =>
                            w.jsxs(
                              ie.li,
                              {
                                initial: { opacity: 0, x: -20 },
                                animate: r ? { opacity: 1, x: 0 } : {},
                                transition: { delay: 0.3 + f * 0.1 },
                                className:
                                  "flex items-start gap-3 text-gray-400 text-xs md:text-sm",
                                children: [
                                  w.jsx("span", {
                                    className: `bg-gradient-to-r ${a.gradient} bg-clip-text text-transparent mt-1 flex-shrink-0`,
                                    children: "▹",
                                  }),
                                  w.jsx("span", { children: d }),
                                ],
                              },
                              f,
                            ),
                          ),
                        }),
                        w.jsx("div", {
                          className: "flex flex-wrap gap-2",
                          children: a.technologies.map((d) =>
                            w.jsx(
                              "span",
                              {
                                className:
                                  "px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400",
                                children: d,
                              },
                              d,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                },
                a.title,
              ),
            ),
          }),
        ],
      }),
    }),
  });
}
function gS() {
  const [n, r] = Tr({ threshold: 0.2 }),
    s = {
      degree: "Bachelor of Technology - Computer Science Engineering",
      institution: "Sushila Devi Bansal College Indore",
      period: "Jun 2020 - Jun 2024",
      cgpa: "7.5",
    };
  return w.jsx("section", {
    id: "education",
    className: "py-12 md:py-20 px-4 md:px-6",
    ref: n,
    children: w.jsx("div", {
      className: "max-w-6xl mx-auto",
      children: w.jsxs(ie.div, {
        initial: { opacity: 0, y: 50 },
        animate: r ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.8 },
        children: [
          w.jsxs("h2", {
            className:
              "text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 flex items-center gap-2 md:gap-4",
            children: [
              w.jsx("span", {
                className: "text-blue-400 text-2xl md:text-3xl",
                children: "05.",
              }),
              w.jsx("span", { children: "Education" }),
              w.jsx("span", {
                className:
                  "flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-2 md:ml-4",
              }),
            ],
          }),
          w.jsxs(ie.div, {
            initial: { opacity: 0, y: 50 },
            animate: r ? { opacity: 1, y: 0 } : {},
            transition: { duration: 0.8, delay: 0.2 },
            className: "relative group",
            children: [
              w.jsx("div", {
                className:
                  "absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300",
              }),
              w.jsx("div", {
                className:
                  "relative bg-[#0f0f0f] p-6 md:p-8 rounded-lg border border-white/10",
                children: w.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row items-start gap-4 md:gap-6",
                  children: [
                    w.jsx(ie.div, {
                      className:
                        "p-3 md:p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg",
                      whileHover: { rotate: 360 },
                      transition: { duration: 0.5 },
                      children: w.jsx(Qw, {
                        className: "w-6 h-6 md:w-8 md:h-8 text-white",
                      }),
                    }),
                    w.jsxs("div", {
                      className: "flex-1",
                      children: [
                        w.jsx("h3", {
                          className:
                            "text-lg md:text-2xl font-bold text-white mb-2",
                          children: s.degree,
                        }),
                        w.jsx("p", {
                          className: "text-base md:text-lg text-blue-400 mb-4",
                          children: s.institution,
                        }),
                        w.jsxs("div", {
                          className:
                            "flex flex-wrap gap-4 md:gap-6 mb-4 text-sm md:text-base",
                          children: [
                            w.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-gray-400",
                              children: [
                                w.jsx(bl, {
                                  className: "w-4 h-4 flex-shrink-0",
                                }),
                                w.jsx("span", { children: s.period }),
                              ],
                            }),
                            w.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-gray-400",
                              children: [
                                w.jsx(Dw, {
                                  className: "w-4 h-4 flex-shrink-0",
                                }),
                                w.jsxs("span", {
                                  children: ["CGPA: ", s.cgpa, "/10"],
                                }),
                              ],
                            }),
                          ],
                        }),
                        w.jsxs("div", {
                          className:
                            "bg-[#0a0a0a] p-4 rounded-lg border border-white/10 mt-6",
                          children: [
                            w.jsx("h4", {
                              className:
                                "text-base md:text-lg font-bold text-white mb-3",
                              children: "Key Achievements",
                            }),
                            w.jsxs("ul", {
                              className: "space-y-2",
                              children: [
                                w.jsxs("li", {
                                  className:
                                    "flex items-start gap-3 text-gray-400 text-sm md:text-base",
                                  children: [
                                    w.jsx("span", {
                                      className:
                                        "text-blue-400 mt-1 flex-shrink-0",
                                      children: "▹",
                                    }),
                                    w.jsx("span", {
                                      children:
                                        "Strong foundation in Computer Science fundamentals",
                                    }),
                                  ],
                                }),
                                w.jsxs("li", {
                                  className:
                                    "flex items-start gap-3 text-gray-400 text-sm md:text-base",
                                  children: [
                                    w.jsx("span", {
                                      className:
                                        "text-blue-400 mt-1 flex-shrink-0",
                                      children: "▹",
                                    }),
                                    w.jsx("span", {
                                      children:
                                        "Specialized in backend development and system design",
                                    }),
                                  ],
                                }),
                                w.jsxs("li", {
                                  className:
                                    "flex items-start gap-3 text-gray-400 text-sm md:text-base",
                                  children: [
                                    w.jsx("span", {
                                      className:
                                        "text-blue-400 mt-1 flex-shrink-0",
                                      children: "▹",
                                    }),
                                    w.jsx("span", {
                                      children:
                                        "Completed multiple real-world projects during academic tenure",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function yS() {
  const [n, r] = Tr({ threshold: 0.2 }),
    s = [
      {
        icon: Cm,
        label: "Email",
        value: "mahajanpankaj615@gmail.com",
        link: "mailto:mahajanpankaj615@gmail.com",
        color: "from-blue-400 to-blue-600",
      },
      {
        icon: iS,
        label: "Phone",
        value: "+91 6263545855",
        link: "tel:+916263545855",
        color: "from-green-400 to-green-600",
      },
      {
        icon: Em,
        label: "LinkedIn",
        value: "pankaj-mahajan",
        link: "https://www.linkedin.com/in/pankaj-mahajan-26a369223",
        color: "from-blue-500 to-blue-700",
      },
      {
        icon: Pm,
        label: "GitHub",
        value: "pankajmahajan",
        link: "https://github.com/pankajmahajan",
        color: "from-purple-400 to-purple-600",
      },
    ];
  return w.jsx("section", {
    id: "contact",
    className: "py-12 md:py-20 px-4 md:px-6 bg-[#0f0f0f]/50",
    ref: n,
    children: w.jsx("div", {
      className: "max-w-6xl mx-auto",
      children: w.jsxs(ie.div, {
        initial: { opacity: 0, y: 50 },
        animate: r ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.8 },
        children: [
          w.jsxs("h2", {
            className:
              "text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 flex items-center gap-2 md:gap-4",
            children: [
              w.jsx("span", {
                className: "text-blue-400 text-2xl md:text-3xl",
                children: "06.",
              }),
              w.jsx("span", { children: "Get In Touch" }),
              w.jsx("span", {
                className:
                  "flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-2 md:ml-4",
              }),
            ],
          }),
          w.jsxs("div", {
            className: "grid md:grid-cols-2 gap-8 md:gap-12",
            children: [
              w.jsxs(ie.div, {
                initial: { opacity: 0, x: -50 },
                animate: r ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.2 },
                children: [
                  w.jsx("h3", {
                    className: "text-xl md:text-2xl font-bold mb-4 md:mb-6",
                    children: "Let's Connect",
                  }),
                  w.jsx("p", {
                    className:
                      "text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed",
                    children:
                      "I'm currently looking for new opportunities and exciting projects. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!",
                  }),
                  w.jsx("div", {
                    className: "space-y-4",
                    children: s.map((a, u) =>
                      w.jsxs(
                        ie.a,
                        {
                          href: a.link,
                          target: a.link.startsWith("http") ? "_blank" : void 0,
                          rel: a.link.startsWith("http")
                            ? "noopener noreferrer"
                            : void 0,
                          initial: { opacity: 0, x: -20 },
                          animate: r ? { opacity: 1, x: 0 } : {},
                          transition: { delay: 0.3 + u * 0.1 },
                          className:
                            "flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a0a] border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/5 transition-all group",
                          whileHover: { scale: 1.02 },
                          children: [
                            w.jsx("div", {
                              className: `p-2 md:p-3 bg-gradient-to-r ${a.color} rounded-lg group-hover:scale-110 transition-transform flex-shrink-0`,
                              children: w.jsx(a.icon, {
                                className: "w-4 h-4 md:w-5 md:h-5 text-white",
                              }),
                            }),
                            w.jsxs("div", {
                              className: "min-w-0",
                              children: [
                                w.jsx("p", {
                                  className: "text-xs md:text-sm text-gray-500",
                                  children: a.label,
                                }),
                                w.jsx("p", {
                                  className:
                                    "text-sm md:text-base text-white truncate",
                                  children: a.value,
                                }),
                              ],
                            }),
                          ],
                        },
                        a.label,
                      ),
                    ),
                  }),
                ],
              }),
              w.jsx(ie.div, {
                initial: { opacity: 0, x: 50 },
                animate: r ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.4 },
                className: "relative",
                children: w.jsxs("div", {
                  className: "relative group h-full",
                  children: [
                    w.jsx("div", {
                      className:
                        "absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000",
                    }),
                    w.jsxs("div", {
                      className:
                        "relative bg-[#0a0a0a] p-6 md:p-8 rounded-lg border border-white/10 h-full flex flex-col justify-center",
                      children: [
                        w.jsx("h3", {
                          className:
                            "text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent",
                          children: "Ready to collaborate?",
                        }),
                        w.jsx("p", {
                          className:
                            "text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed",
                          children:
                            "I'm passionate about building scalable backend solutions and always excited to work on challenging projects. Let's build something amazing together!",
                        }),
                        w.jsxs(ie.a, {
                          href: "mailto:mahajianmag05@gmail.com",
                          className:
                            "inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all w-fit",
                          whileHover: { scale: 1.05 },
                          whileTap: { scale: 0.95 },
                          children: [
                            w.jsx(oS, { className: "w-4 h-4 md:w-5 md:h-5" }),
                            w.jsx("span", { children: "Send me a message" }),
                          ],
                        }),
                        w.jsxs("div", {
                          className:
                            "mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10",
                          children: [
                            w.jsx("p", {
                              className:
                                "text-gray-500 text-xs md:text-sm mb-2 md:mb-3",
                              children: "Based in",
                            }),
                            w.jsx("p", {
                              className: "text-white text-base md:text-lg",
                              children: "Indore, India",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          w.jsxs(ie.div, {
            initial: { opacity: 0 },
            animate: r ? { opacity: 1 } : {},
            transition: { delay: 0.6 },
            className:
              "mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/10 text-center",
            children: [
              w.jsxs("p", {
                className: "text-gray-500 text-sm md:text-base",
                children: [
                  "Designed & Built by",
                  " ",
                  w.jsx("span", {
                    className: "text-blue-400",
                    children: "Pankaj Mahajan",
                  }),
                ],
              }),
              w.jsx("p", {
                className: "text-gray-600 text-xs md:text-sm mt-2",
                children: "© 2026 All rights reserved.",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function vS() {
  const [n, r] = Q.useState(!1),
    [s, a] = Q.useState(!1);
  Q.useEffect(() => {
    const d = () => {
      r(window.scrollY > 50);
    };
    return (
      window.addEventListener("scroll", d),
      () => window.removeEventListener("scroll", d)
    );
  }, []);
  const u = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];
  return w.jsx(ie.nav, {
    initial: { y: -100 },
    animate: { y: 0 },
    transition: { duration: 0.5 },
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${n ? "bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/5" : "bg-transparent"}`,
    children: w.jsxs("div", {
      className: "max-w-7xl mx-auto px-6 py-4",
      children: [
        w.jsxs("div", {
          className: "flex justify-between items-center",
          children: [
            w.jsx(ie.a, {
              href: "#home",
              className:
                "text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",
              whileHover: { scale: 1.05 },
              children: "PM",
            }),
            w.jsx("div", {
              className: "hidden md:flex gap-8",
              children: u.map((d, f) =>
                w.jsxs(
                  ie.a,
                  {
                    href: d.href,
                    className:
                      "text-gray-300 hover:text-white transition-colors relative group",
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: f * 0.1 },
                    children: [
                      d.name,
                      w.jsx("span", {
                        className:
                          "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transition-all group-hover:w-full",
                      }),
                    ],
                  },
                  d.name,
                ),
              ),
            }),
            w.jsx("button", {
              className: "md:hidden text-white",
              onClick: () => a(!s),
              children: s ? w.jsx(cS, { size: 24 }) : w.jsx(eS, { size: 24 }),
            }),
          ],
        }),
        s &&
          w.jsx(ie.div, {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "md:hidden mt-4 pb-4",
            children: u.map((d) =>
              w.jsx(
                "a",
                {
                  href: d.href,
                  className:
                    "block py-2 text-gray-300 hover:text-white transition-colors",
                  onClick: () => a(!1),
                  children: d.name,
                },
                d.name,
              ),
            ),
          }),
      ],
    }),
  });
}
function xS() {
  const n = Q.useRef(null);
  return (
    Q.useEffect(() => {
      const r = n.current;
      if (!r) return;
      const s = r.getContext("2d");
      if (!s) return;
      const a = () => {
        ((r.width = window.innerWidth),
          (r.height = document.documentElement.scrollHeight));
      };
      (a(), window.addEventListener("resize", a));
      class u {
        constructor() {
          ((this.x = Math.random() * r.width),
            (this.y = Math.random() * r.height),
            (this.baseX = this.x),
            (this.baseY = this.y),
            (this.vx = (Math.random() - 0.5) * 0.5),
            (this.vy = (Math.random() - 0.5) * 0.5),
            (this.size = Math.random() * 2 + 1),
            (this.opacity = Math.random() * 0.5 + 0.2));
        }
        update(M, j) {
          ((this.baseX += this.vx),
            (this.baseY += this.vy),
            (this.baseX < 0 || this.baseX > r.width) && (this.vx *= -1),
            (this.baseY < 0 || this.baseY > r.height) && (this.vy *= -1));
          const D = M - this.baseX,
            A = j - this.baseY,
            I = Math.sqrt(D * D + A * A),
            B = 150;
          if (I < B) {
            const O = (B - I) / B,
              b = Math.atan2(A, D);
            ((this.x = this.baseX - Math.cos(b) * O * 50),
              (this.y = this.baseY - Math.sin(b) * O * 50));
          } else
            ((this.x += (this.baseX - this.x) * 0.05),
              (this.y += (this.baseY - this.y) * 0.05));
        }
        draw() {
          s &&
            (s.beginPath(),
            s.arc(this.x, this.y, this.size, 0, Math.PI * 2),
            (s.fillStyle = `rgba(96, 165, 250, ${this.opacity})`),
            s.fill());
        }
      }
      const d = Math.floor((window.innerWidth * window.innerHeight) / 15e3),
        f = [];
      for (let S = 0; S < d; S++) f.push(new u());
      let p = -1e3,
        m = -1e3;
      const y = (S) => {
          ((p = S.clientX), (m = S.clientY + window.scrollY));
        },
        g = () => {
          ((p = -1e3), (m = -1e3));
        };
      (window.addEventListener("mousemove", y),
        window.addEventListener("mouseleave", g));
      const x = () => {
        (s.clearRect(0, 0, r.width, r.height),
          f.forEach((S) => {
            (S.update(p, m), S.draw());
          }),
          f.forEach((S, M) => {
            f.slice(M + 1).forEach((j) => {
              const D = S.x - j.x,
                A = S.y - j.y,
                I = Math.sqrt(D * D + A * A);
              I < 100 &&
                (s.beginPath(),
                s.moveTo(S.x, S.y),
                s.lineTo(j.x, j.y),
                (s.strokeStyle = `rgba(96, 165, 250, ${0.1 * (1 - I / 100)})`),
                (s.lineWidth = 0.5),
                s.stroke());
            });
          }),
          requestAnimationFrame(x));
      };
      return (
        x(),
        () => {
          (window.removeEventListener("resize", a),
            window.removeEventListener("mousemove", y),
            window.removeEventListener("mouseleave", g));
        }
      );
    }, []),
    w.jsx("canvas", {
      ref: n,
      className: "fixed top-0 left-0 w-full h-full pointer-events-none z-0",
      style: { background: "transparent" },
    })
  );
}
function wS() {
  return w.jsxs("div", {
    className:
      "bg-[#0a0a0a] min-h-screen text-white relative overflow-x-hidden",
    children: [
      w.jsx(xS, {}),
      w.jsxs("div", {
        className: "relative z-10",
        children: [
          w.jsx(vS, {}),
          w.jsx(fS, {}),
          w.jsx(dS, {}),
          w.jsx(hS, {}),
          w.jsx(pS, {}),
          w.jsx(mS, {}),
          w.jsx(gS, {}),
          w.jsx(yS, {}),
        ],
      }),
    ],
  });
}
Dy.createRoot(document.getElementById("root")).render(w.jsx(wS, {}));
