(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Gc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ks = { exports: {} },
  zl = {},
  _s = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kr = Symbol.for("react.element"),
  Zc = Symbol.for("react.portal"),
  Jc = Symbol.for("react.fragment"),
  qc = Symbol.for("react.strict_mode"),
  bc = Symbol.for("react.profiler"),
  ef = Symbol.for("react.provider"),
  tf = Symbol.for("react.context"),
  nf = Symbol.for("react.forward_ref"),
  rf = Symbol.for("react.suspense"),
  lf = Symbol.for("react.memo"),
  of = Symbol.for("react.lazy"),
  cu = Symbol.iterator;
function uf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (cu && e[cu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Es = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xs = Object.assign,
  Cs = {};
function Ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cs),
    (this.updater = n || Es);
}
Ln.prototype.isReactComponent = {};
Ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ps() {}
Ps.prototype = Ln.prototype;
function pi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cs),
    (this.updater = n || Es);
}
var vi = (pi.prototype = new Ps());
vi.constructor = pi;
xs(vi, Ln.prototype);
vi.isPureReactComponent = !0;
var fu = Array.isArray,
  Ts = Object.prototype.hasOwnProperty,
  mi = { current: null },
  Ns = { key: !0, ref: !0, __self: !0, __source: !0 };
function zs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ts.call(t, r) && !Ns.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), f = 0; f < u; f++) a[f] = arguments[f + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: kr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: mi.current,
  };
}
function sf(e, t) {
  return {
    $$typeof: kr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === kr;
}
function af(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var du = /\/+/g;
function Kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? af("" + e.key)
    : t.toString(36);
}
function Qr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case kr:
          case Zc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Kl(i, 0) : r),
      fu(l)
        ? ((n = ""),
          e != null && (n = e.replace(du, "$&/") + "/"),
          Qr(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (hi(l) &&
            (l = sf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(du, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), fu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Kl(o, u);
      i += Qr(o, t, n, a, l);
    }
  else if (((a = uf(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Kl(o, u++)), (i += Qr(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Qr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function cf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Se = { current: null },
  Kr = { transition: null },
  ff = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: Kr,
    ReactCurrentOwner: mi,
  };
W.Children = {
  map: Nr,
  forEach: function (e, t, n) {
    Nr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
W.Component = Ln;
W.Fragment = Jc;
W.Profiler = bc;
W.PureComponent = pi;
W.StrictMode = qc;
W.Suspense = rf;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ff;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = xs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = mi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      Ts.call(t, a) &&
        !Ns.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var f = 0; f < a; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: kr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: tf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ef, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = zs;
W.createFactory = function (e) {
  var t = zs.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: nf, render: e };
};
W.isValidElement = hi;
W.lazy = function (e) {
  return { $$typeof: of, _payload: { _status: -1, _result: e }, _init: cf };
};
W.memo = function (e, t) {
  return { $$typeof: lf, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = Kr.transition;
  Kr.transition = {};
  try {
    e();
  } finally {
    Kr.transition = t;
  }
};
W.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
W.useCallback = function (e, t) {
  return Se.current.useCallback(e, t);
};
W.useContext = function (e) {
  return Se.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return Se.current.useEffect(e, t);
};
W.useId = function () {
  return Se.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return Se.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return Se.current.useRef(e);
};
W.useState = function (e) {
  return Se.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return Se.current.useTransition();
};
W.version = "18.2.0";
_s.exports = W;
var hn = _s.exports;
const Et = Gc(hn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var df = hn,
  pf = Symbol.for("react.element"),
  vf = Symbol.for("react.fragment"),
  mf = Object.prototype.hasOwnProperty,
  hf = df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ls(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) mf.call(t, r) && !gf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: pf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: hf.current,
  };
}
zl.Fragment = vf;
zl.jsx = Ls;
zl.jsxs = Ls;
ks.exports = zl;
var X = ks.exports,
  So = {},
  Os = { exports: {} },
  Oe = {},
  As = { exports: {} },
  Is = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, I) {
    var M = T.length;
    T.push(I);
    e: for (; 0 < M; ) {
      var Q = (M - 1) >>> 1,
        te = T[Q];
      if (0 < l(te, I)) (T[Q] = I), (T[M] = te), (M = Q);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var I = T[0],
      M = T.pop();
    if (M !== I) {
      T[0] = M;
      e: for (var Q = 0, te = T.length, Wt = te >>> 1; Q < Wt; ) {
        var Ue = 2 * (Q + 1) - 1,
          nt = T[Ue],
          rt = Ue + 1,
          tn = T[rt];
        if (0 > l(nt, M))
          rt < te && 0 > l(tn, nt)
            ? ((T[Q] = tn), (T[rt] = M), (Q = rt))
            : ((T[Q] = nt), (T[Ue] = M), (Q = Ue));
        else if (rt < te && 0 > l(tn, M)) (T[Q] = tn), (T[rt] = M), (Q = rt);
        else break e;
      }
    }
    return I;
  }
  function l(T, I) {
    var M = T.sortIndex - I.sortIndex;
    return M !== 0 ? M : T.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    f = [],
    w = 1,
    g = null,
    m = 3,
    _ = !1,
    E = !1,
    x = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    s = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function c(T) {
    for (var I = n(f); I !== null; ) {
      if (I.callback === null) r(f);
      else if (I.startTime <= T)
        r(f), (I.sortIndex = I.expirationTime), t(a, I);
      else break;
      I = n(f);
    }
  }
  function h(T) {
    if (((x = !1), c(T), !E))
      if (n(a) !== null) (E = !0), Mn(S);
      else {
        var I = n(f);
        I !== null && en(h, I.startTime - T);
      }
  }
  function S(T, I) {
    (E = !1), x && ((x = !1), d(L), (L = -1)), (_ = !0);
    var M = m;
    try {
      for (
        c(I), g = n(a);
        g !== null && (!(g.expirationTime > I) || (T && !se()));

      ) {
        var Q = g.callback;
        if (typeof Q == "function") {
          (g.callback = null), (m = g.priorityLevel);
          var te = Q(g.expirationTime <= I);
          (I = e.unstable_now()),
            typeof te == "function" ? (g.callback = te) : g === n(a) && r(a),
            c(I);
        } else r(a);
        g = n(a);
      }
      if (g !== null) var Wt = !0;
      else {
        var Ue = n(f);
        Ue !== null && en(h, Ue.startTime - I), (Wt = !1);
      }
      return Wt;
    } finally {
      (g = null), (m = M), (_ = !1);
    }
  }
  var C = !1,
    P = null,
    L = -1,
    V = 5,
    j = -1;
  function se() {
    return !(e.unstable_now() - j < V);
  }
  function Fe() {
    if (P !== null) {
      var T = e.unstable_now();
      j = T;
      var I = !0;
      try {
        I = P(!0, T);
      } finally {
        I ? vt() : ((C = !1), (P = null));
      }
    } else C = !1;
  }
  var vt;
  if (typeof s == "function")
    vt = function () {
      s(Fe);
    };
  else if (typeof MessageChannel < "u") {
    var bt = new MessageChannel(),
      In = bt.port2;
    (bt.port1.onmessage = Fe),
      (vt = function () {
        In.postMessage(null);
      });
  } else
    vt = function () {
      F(Fe, 0);
    };
  function Mn(T) {
    (P = T), C || ((C = !0), vt());
  }
  function en(T, I) {
    L = F(function () {
      T(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      E || _ || ((E = !0), Mn(S));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = m;
      }
      var M = m;
      m = I;
      try {
        return T();
      } finally {
        m = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, I) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var M = m;
      m = T;
      try {
        return I();
      } finally {
        m = M;
      }
    }),
    (e.unstable_scheduleCallback = function (T, I, M) {
      var Q = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? Q + M : Q))
          : (M = Q),
        T)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = M + te),
        (T = {
          id: w++,
          callback: I,
          priorityLevel: T,
          startTime: M,
          expirationTime: te,
          sortIndex: -1,
        }),
        M > Q
          ? ((T.sortIndex = M),
            t(f, T),
            n(a) === null &&
              T === n(f) &&
              (x ? (d(L), (L = -1)) : (x = !0), en(h, M - Q)))
          : ((T.sortIndex = te), t(a, T), E || _ || ((E = !0), Mn(S))),
        T
      );
    }),
    (e.unstable_shouldYield = se),
    (e.unstable_wrapCallback = function (T) {
      var I = m;
      return function () {
        var M = m;
        m = I;
        try {
          return T.apply(this, arguments);
        } finally {
          m = M;
        }
      };
    });
})(Is);
As.exports = Is;
var yf = As.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ms = hn,
  Le = yf;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var js = new Set(),
  lr = {};
function Jt(e, t) {
  En(e, t), En(e + "Capture", t);
}
function En(e, t) {
  for (lr[e] = t, e = 0; e < t.length; e++) js.add(t[e]);
}
var at = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ko = Object.prototype.hasOwnProperty,
  wf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pu = {},
  vu = {};
function Sf(e) {
  return ko.call(vu, e)
    ? !0
    : ko.call(pu, e)
    ? !1
    : wf.test(e)
    ? (vu[e] = !0)
    : ((pu[e] = !0), !1);
}
function kf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _f(e, t, n, r) {
  if (t === null || typeof t > "u" || kf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function ke(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var gi = /[\-:]([a-z])/g;
function yi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gi, yi);
    fe[t] = new ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gi, yi);
    fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(gi, yi);
  fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wi(e, t, n, r) {
  var l = fe.hasOwnProperty(t) ? fe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_f(t, n, l, r) && (n = null),
    r || l === null
      ? Sf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pt = Ms.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zr = Symbol.for("react.element"),
  rn = Symbol.for("react.portal"),
  ln = Symbol.for("react.fragment"),
  Si = Symbol.for("react.strict_mode"),
  _o = Symbol.for("react.profiler"),
  Rs = Symbol.for("react.provider"),
  Ws = Symbol.for("react.context"),
  ki = Symbol.for("react.forward_ref"),
  Eo = Symbol.for("react.suspense"),
  xo = Symbol.for("react.suspense_list"),
  _i = Symbol.for("react.memo"),
  gt = Symbol.for("react.lazy"),
  Ds = Symbol.for("react.offscreen"),
  mu = Symbol.iterator;
function Wn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mu && e[mu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J = Object.assign,
  Yl;
function Qn(e) {
  if (Yl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yl = (t && t[1]) || "";
    }
  return (
    `
` +
    Yl +
    e
  );
}
var Xl = !1;
function Gl(e, t) {
  if (!e || Xl) return "";
  Xl = !0;
  var n = Error.prepareStackTrace;
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
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Xl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Qn(e) : "";
}
function Ef(e) {
  switch (e.tag) {
    case 5:
      return Qn(e.type);
    case 16:
      return Qn("Lazy");
    case 13:
      return Qn("Suspense");
    case 19:
      return Qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Gl(e.type, !1)), e;
    case 11:
      return (e = Gl(e.type.render, !1)), e;
    case 1:
      return (e = Gl(e.type, !0)), e;
    default:
      return "";
  }
}
function Co(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ln:
      return "Fragment";
    case rn:
      return "Portal";
    case _o:
      return "Profiler";
    case Si:
      return "StrictMode";
    case Eo:
      return "Suspense";
    case xo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ws:
        return (e.displayName || "Context") + ".Consumer";
      case Rs:
        return (e._context.displayName || "Context") + ".Provider";
      case ki:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case _i:
        return (
          (t = e.displayName || null), t !== null ? t : Co(e.type) || "Memo"
        );
      case gt:
        (t = e._payload), (e = e._init);
        try {
          return Co(e(t));
        } catch {}
    }
  return null;
}
function xf(e) {
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
      return Co(t);
    case 8:
      return t === Si ? "StrictMode" : "Mode";
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
function At(e) {
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
function Fs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Cf(e) {
  var t = Fs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Lr(e) {
  e._valueTracker || (e._valueTracker = Cf(e));
}
function Us(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Fs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function rl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Po(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function hu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = At(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Bs(e, t) {
  (t = t.checked), t != null && wi(e, "checked", t, !1);
}
function To(e, t) {
  Bs(e, t);
  var n = At(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? No(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && No(e, t.type, At(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function gu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function No(e, t, n) {
  (t !== "number" || rl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Kn = Array.isArray;
function gn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + At(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function zo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function yu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Kn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: At(n) };
}
function Vs(e, t) {
  var n = At(t.value),
    r = At(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function wu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Lo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Hs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Or,
  $s = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Or = Or || document.createElement("div"),
          Or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Or.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function or(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Gn = {
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
  Pf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gn).forEach(function (e) {
  Pf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gn[t] = Gn[e]);
  });
});
function Qs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Gn.hasOwnProperty(e) && Gn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ks(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Qs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Tf = J(
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
  }
);
function Oo(e, t) {
  if (t) {
    if (Tf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Ao(e, t) {
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
var Io = null;
function Ei(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Mo = null,
  yn = null,
  wn = null;
function Su(e) {
  if ((e = xr(e))) {
    if (typeof Mo != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Ml(t)), Mo(e.stateNode, e.type, t));
  }
}
function Ys(e) {
  yn ? (wn ? wn.push(e) : (wn = [e])) : (yn = e);
}
function Xs() {
  if (yn) {
    var e = yn,
      t = wn;
    if (((wn = yn = null), Su(e), t)) for (e = 0; e < t.length; e++) Su(t[e]);
  }
}
function Gs(e, t) {
  return e(t);
}
function Zs() {}
var Zl = !1;
function Js(e, t, n) {
  if (Zl) return e(t, n);
  Zl = !0;
  try {
    return Gs(e, t, n);
  } finally {
    (Zl = !1), (yn !== null || wn !== null) && (Zs(), Xs());
  }
}
function ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ml(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var jo = !1;
if (at)
  try {
    var Dn = {};
    Object.defineProperty(Dn, "passive", {
      get: function () {
        jo = !0;
      },
    }),
      window.addEventListener("test", Dn, Dn),
      window.removeEventListener("test", Dn, Dn);
  } catch {
    jo = !1;
  }
function Nf(e, t, n, r, l, o, i, u, a) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (w) {
    this.onError(w);
  }
}
var Zn = !1,
  ll = null,
  ol = !1,
  Ro = null,
  zf = {
    onError: function (e) {
      (Zn = !0), (ll = e);
    },
  };
function Lf(e, t, n, r, l, o, i, u, a) {
  (Zn = !1), (ll = null), Nf.apply(zf, arguments);
}
function Of(e, t, n, r, l, o, i, u, a) {
  if ((Lf.apply(this, arguments), Zn)) {
    if (Zn) {
      var f = ll;
      (Zn = !1), (ll = null);
    } else throw Error(k(198));
    ol || ((ol = !0), (Ro = f));
  }
}
function qt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function qs(e) {
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
function ku(e) {
  if (qt(e) !== e) throw Error(k(188));
}
function Af(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qt(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return ku(l), e;
        if (o === r) return ku(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function bs(e) {
  return (e = Af(e)), e !== null ? ea(e) : null;
}
function ea(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ea(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ta = Le.unstable_scheduleCallback,
  _u = Le.unstable_cancelCallback,
  If = Le.unstable_shouldYield,
  Mf = Le.unstable_requestPaint,
  ee = Le.unstable_now,
  jf = Le.unstable_getCurrentPriorityLevel,
  xi = Le.unstable_ImmediatePriority,
  na = Le.unstable_UserBlockingPriority,
  il = Le.unstable_NormalPriority,
  Rf = Le.unstable_LowPriority,
  ra = Le.unstable_IdlePriority,
  Ll = null,
  et = null;
function Wf(e) {
  if (et && typeof et.onCommitFiberRoot == "function")
    try {
      et.onCommitFiberRoot(Ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : Uf,
  Df = Math.log,
  Ff = Math.LN2;
function Uf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Df(e) / Ff) | 0)) | 0;
}
var Ar = 64,
  Ir = 4194304;
function Yn(e) {
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
function ul(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Yn(u)) : ((o &= i), o !== 0 && (r = Yn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Yn(i)) : o !== 0 && (r = Yn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ye(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Bf(e, t) {
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
function Vf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ye(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = Bf(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Wo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function la() {
  var e = Ar;
  return (Ar <<= 1), !(Ar & 4194240) && (Ar = 64), e;
}
function Jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function _r(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ye(t)),
    (e[t] = n);
}
function Hf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ye(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ci(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ye(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var U = 0;
function oa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ia,
  Pi,
  ua,
  sa,
  aa,
  Do = !1,
  Mr = [],
  xt = null,
  Ct = null,
  Pt = null,
  ur = new Map(),
  sr = new Map(),
  wt = [],
  $f =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Eu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ct = null;
      break;
    case "mouseover":
    case "mouseout":
      Pt = null;
      break;
    case "pointerover":
    case "pointerout":
      ur.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      sr.delete(t.pointerId);
  }
}
function Fn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = xr(t)), t !== null && Pi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Qf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (xt = Fn(xt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Ct = Fn(Ct, e, t, n, r, l)), !0;
    case "mouseover":
      return (Pt = Fn(Pt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return ur.set(o, Fn(ur.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), sr.set(o, Fn(sr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ca(e) {
  var t = Bt(e.target);
  if (t !== null) {
    var n = qt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = qs(n)), t !== null)) {
          (e.blockedOn = t),
            aa(e.priority, function () {
              ua(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Yr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Io = r), n.target.dispatchEvent(r), (Io = null);
    } else return (t = xr(n)), t !== null && Pi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function xu(e, t, n) {
  Yr(e) && n.delete(t);
}
function Kf() {
  (Do = !1),
    xt !== null && Yr(xt) && (xt = null),
    Ct !== null && Yr(Ct) && (Ct = null),
    Pt !== null && Yr(Pt) && (Pt = null),
    ur.forEach(xu),
    sr.forEach(xu);
}
function Un(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Do ||
      ((Do = !0),
      Le.unstable_scheduleCallback(Le.unstable_NormalPriority, Kf)));
}
function ar(e) {
  function t(l) {
    return Un(l, e);
  }
  if (0 < Mr.length) {
    Un(Mr[0], e);
    for (var n = 1; n < Mr.length; n++) {
      var r = Mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xt !== null && Un(xt, e),
      Ct !== null && Un(Ct, e),
      Pt !== null && Un(Pt, e),
      ur.forEach(t),
      sr.forEach(t),
      n = 0;
    n < wt.length;
    n++
  )
    (r = wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wt.length && ((n = wt[0]), n.blockedOn === null); )
    ca(n), n.blockedOn === null && wt.shift();
}
var Sn = pt.ReactCurrentBatchConfig,
  sl = !0;
function Yf(e, t, n, r) {
  var l = U,
    o = Sn.transition;
  Sn.transition = null;
  try {
    (U = 1), Ti(e, t, n, r);
  } finally {
    (U = l), (Sn.transition = o);
  }
}
function Xf(e, t, n, r) {
  var l = U,
    o = Sn.transition;
  Sn.transition = null;
  try {
    (U = 4), Ti(e, t, n, r);
  } finally {
    (U = l), (Sn.transition = o);
  }
}
function Ti(e, t, n, r) {
  if (sl) {
    var l = Fo(e, t, n, r);
    if (l === null) uo(e, t, r, al, n), Eu(e, r);
    else if (Qf(l, e, t, n, r)) r.stopPropagation();
    else if ((Eu(e, r), t & 4 && -1 < $f.indexOf(e))) {
      for (; l !== null; ) {
        var o = xr(l);
        if (
          (o !== null && ia(o),
          (o = Fo(e, t, n, r)),
          o === null && uo(e, t, r, al, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else uo(e, t, r, null, n);
  }
}
var al = null;
function Fo(e, t, n, r) {
  if (((al = null), (e = Ei(r)), (e = Bt(e)), e !== null))
    if (((t = qt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = qs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (al = e), null;
}
function fa(e) {
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
      switch (jf()) {
        case xi:
          return 1;
        case na:
          return 4;
        case il:
        case Rf:
          return 16;
        case ra:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kt = null,
  Ni = null,
  Xr = null;
function da() {
  if (Xr) return Xr;
  var e,
    t = Ni,
    n = t.length,
    r,
    l = "value" in kt ? kt.value : kt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Xr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Gr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function jr() {
  return !0;
}
function Cu() {
  return !1;
}
function Ae(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? jr
        : Cu),
      (this.isPropagationStopped = Cu),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = jr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = jr));
      },
      persist: function () {},
      isPersistent: jr,
    }),
    t
  );
}
var On = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zi = Ae(On),
  Er = J({}, On, { view: 0, detail: 0 }),
  Gf = Ae(Er),
  ql,
  bl,
  Bn,
  Ol = J({}, Er, {
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
    getModifierState: Li,
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
        : (e !== Bn &&
            (Bn && e.type === "mousemove"
              ? ((ql = e.screenX - Bn.screenX), (bl = e.screenY - Bn.screenY))
              : (bl = ql = 0),
            (Bn = e)),
          ql);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bl;
    },
  }),
  Pu = Ae(Ol),
  Zf = J({}, Ol, { dataTransfer: 0 }),
  Jf = Ae(Zf),
  qf = J({}, Er, { relatedTarget: 0 }),
  eo = Ae(qf),
  bf = J({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ed = Ae(bf),
  td = J({}, On, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  nd = Ae(td),
  rd = J({}, On, { data: 0 }),
  Tu = Ae(rd),
  ld = {
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
  od = {
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
  id = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ud(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = id[e]) ? !!t[e] : !1;
}
function Li() {
  return ud;
}
var sd = J({}, Er, {
    key: function (e) {
      if (e.key) {
        var t = ld[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Gr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? od[e.keyCode] || "Unidentified"
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
    getModifierState: Li,
    charCode: function (e) {
      return e.type === "keypress" ? Gr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Gr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ad = Ae(sd),
  cd = J({}, Ol, {
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
  Nu = Ae(cd),
  fd = J({}, Er, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Li,
  }),
  dd = Ae(fd),
  pd = J({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vd = Ae(pd),
  md = J({}, Ol, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  hd = Ae(md),
  gd = [9, 13, 27, 32],
  Oi = at && "CompositionEvent" in window,
  Jn = null;
at && "documentMode" in document && (Jn = document.documentMode);
var yd = at && "TextEvent" in window && !Jn,
  pa = at && (!Oi || (Jn && 8 < Jn && 11 >= Jn)),
  zu = String.fromCharCode(32),
  Lu = !1;
function va(e, t) {
  switch (e) {
    case "keyup":
      return gd.indexOf(t.keyCode) !== -1;
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
function ma(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var on = !1;
function wd(e, t) {
  switch (e) {
    case "compositionend":
      return ma(t);
    case "keypress":
      return t.which !== 32 ? null : ((Lu = !0), zu);
    case "textInput":
      return (e = t.data), e === zu && Lu ? null : e;
    default:
      return null;
  }
}
function Sd(e, t) {
  if (on)
    return e === "compositionend" || (!Oi && va(e, t))
      ? ((e = da()), (Xr = Ni = kt = null), (on = !1), e)
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
      return pa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var kd = {
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
function Ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!kd[e.type] : t === "textarea";
}
function ha(e, t, n, r) {
  Ys(r),
    (t = cl(t, "onChange")),
    0 < t.length &&
      ((n = new zi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var qn = null,
  cr = null;
function _d(e) {
  Ta(e, 0);
}
function Al(e) {
  var t = an(e);
  if (Us(t)) return e;
}
function Ed(e, t) {
  if (e === "change") return t;
}
var ga = !1;
if (at) {
  var to;
  if (at) {
    var no = "oninput" in document;
    if (!no) {
      var Au = document.createElement("div");
      Au.setAttribute("oninput", "return;"),
        (no = typeof Au.oninput == "function");
    }
    to = no;
  } else to = !1;
  ga = to && (!document.documentMode || 9 < document.documentMode);
}
function Iu() {
  qn && (qn.detachEvent("onpropertychange", ya), (cr = qn = null));
}
function ya(e) {
  if (e.propertyName === "value" && Al(cr)) {
    var t = [];
    ha(t, cr, e, Ei(e)), Js(_d, t);
  }
}
function xd(e, t, n) {
  e === "focusin"
    ? (Iu(), (qn = t), (cr = n), qn.attachEvent("onpropertychange", ya))
    : e === "focusout" && Iu();
}
function Cd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Al(cr);
}
function Pd(e, t) {
  if (e === "click") return Al(t);
}
function Td(e, t) {
  if (e === "input" || e === "change") return Al(t);
}
function Nd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ge = typeof Object.is == "function" ? Object.is : Nd;
function fr(e, t) {
  if (Ge(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ko.call(t, l) || !Ge(e[l], t[l])) return !1;
  }
  return !0;
}
function Mu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ju(e, t) {
  var n = Mu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Mu(n);
  }
}
function wa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? wa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Sa() {
  for (var e = window, t = rl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = rl(e.document);
  }
  return t;
}
function Ai(e) {
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
function zd(e) {
  var t = Sa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    wa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ai(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = ju(n, o));
        var i = ju(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ld = at && "documentMode" in document && 11 >= document.documentMode,
  un = null,
  Uo = null,
  bn = null,
  Bo = !1;
function Ru(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bo ||
    un == null ||
    un !== rl(r) ||
    ((r = un),
    "selectionStart" in r && Ai(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (bn && fr(bn, r)) ||
      ((bn = r),
      (r = cl(Uo, "onSelect")),
      0 < r.length &&
        ((t = new zi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = un))));
}
function Rr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var sn = {
    animationend: Rr("Animation", "AnimationEnd"),
    animationiteration: Rr("Animation", "AnimationIteration"),
    animationstart: Rr("Animation", "AnimationStart"),
    transitionend: Rr("Transition", "TransitionEnd"),
  },
  ro = {},
  ka = {};
at &&
  ((ka = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete sn.animationend.animation,
    delete sn.animationiteration.animation,
    delete sn.animationstart.animation),
  "TransitionEvent" in window || delete sn.transitionend.transition);
function Il(e) {
  if (ro[e]) return ro[e];
  if (!sn[e]) return e;
  var t = sn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ka) return (ro[e] = t[n]);
  return e;
}
var _a = Il("animationend"),
  Ea = Il("animationiteration"),
  xa = Il("animationstart"),
  Ca = Il("transitionend"),
  Pa = new Map(),
  Wu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Mt(e, t) {
  Pa.set(e, t), Jt(t, [e]);
}
for (var lo = 0; lo < Wu.length; lo++) {
  var oo = Wu[lo],
    Od = oo.toLowerCase(),
    Ad = oo[0].toUpperCase() + oo.slice(1);
  Mt(Od, "on" + Ad);
}
Mt(_a, "onAnimationEnd");
Mt(Ea, "onAnimationIteration");
Mt(xa, "onAnimationStart");
Mt("dblclick", "onDoubleClick");
Mt("focusin", "onFocus");
Mt("focusout", "onBlur");
Mt(Ca, "onTransitionEnd");
En("onMouseEnter", ["mouseout", "mouseover"]);
En("onMouseLeave", ["mouseout", "mouseover"]);
En("onPointerEnter", ["pointerout", "pointerover"]);
En("onPointerLeave", ["pointerout", "pointerover"]);
Jt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Jt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Jt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Jt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Xn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Id = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xn));
function Du(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Of(r, t, void 0, e), (e.currentTarget = null);
}
function Ta(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          Du(l, u, f), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          Du(l, u, f), (o = a);
        }
    }
  }
  if (ol) throw ((e = Ro), (ol = !1), (Ro = null), e);
}
function H(e, t) {
  var n = t[Ko];
  n === void 0 && (n = t[Ko] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Na(t, e, 2, !1), n.add(r));
}
function io(e, t, n) {
  var r = 0;
  t && (r |= 4), Na(n, e, r, t);
}
var Wr = "_reactListening" + Math.random().toString(36).slice(2);
function dr(e) {
  if (!e[Wr]) {
    (e[Wr] = !0),
      js.forEach(function (n) {
        n !== "selectionchange" && (Id.has(n) || io(n, !1, e), io(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wr] || ((t[Wr] = !0), io("selectionchange", !1, t));
  }
}
function Na(e, t, n, r) {
  switch (fa(t)) {
    case 1:
      var l = Yf;
      break;
    case 4:
      l = Xf;
      break;
    default:
      l = Ti;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !jo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function uo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Bt(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Js(function () {
    var f = o,
      w = Ei(n),
      g = [];
    e: {
      var m = Pa.get(e);
      if (m !== void 0) {
        var _ = zi,
          E = e;
        switch (e) {
          case "keypress":
            if (Gr(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = ad;
            break;
          case "focusin":
            (E = "focus"), (_ = eo);
            break;
          case "focusout":
            (E = "blur"), (_ = eo);
            break;
          case "beforeblur":
          case "afterblur":
            _ = eo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            _ = Pu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = Jf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = dd;
            break;
          case _a:
          case Ea:
          case xa:
            _ = ed;
            break;
          case Ca:
            _ = vd;
            break;
          case "scroll":
            _ = Gf;
            break;
          case "wheel":
            _ = hd;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = nd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = Nu;
        }
        var x = (t & 4) !== 0,
          F = !x && e === "scroll",
          d = x ? (m !== null ? m + "Capture" : null) : m;
        x = [];
        for (var s = f, c; s !== null; ) {
          c = s;
          var h = c.stateNode;
          if (
            (c.tag === 5 &&
              h !== null &&
              ((c = h),
              d !== null && ((h = ir(s, d)), h != null && x.push(pr(s, h, c)))),
            F)
          )
            break;
          s = s.return;
        }
        0 < x.length &&
          ((m = new _(m, E, null, n, w)), g.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (_ = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Io &&
            (E = n.relatedTarget || n.fromElement) &&
            (Bt(E) || E[ct]))
        )
          break e;
        if (
          (_ || m) &&
          ((m =
            w.window === w
              ? w
              : (m = w.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          _
            ? ((E = n.relatedTarget || n.toElement),
              (_ = f),
              (E = E ? Bt(E) : null),
              E !== null &&
                ((F = qt(E)), E !== F || (E.tag !== 5 && E.tag !== 6)) &&
                (E = null))
            : ((_ = null), (E = f)),
          _ !== E)
        ) {
          if (
            ((x = Pu),
            (h = "onMouseLeave"),
            (d = "onMouseEnter"),
            (s = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Nu),
              (h = "onPointerLeave"),
              (d = "onPointerEnter"),
              (s = "pointer")),
            (F = _ == null ? m : an(_)),
            (c = E == null ? m : an(E)),
            (m = new x(h, s + "leave", _, n, w)),
            (m.target = F),
            (m.relatedTarget = c),
            (h = null),
            Bt(w) === f &&
              ((x = new x(d, s + "enter", E, n, w)),
              (x.target = c),
              (x.relatedTarget = F),
              (h = x)),
            (F = h),
            _ && E)
          )
            t: {
              for (x = _, d = E, s = 0, c = x; c; c = nn(c)) s++;
              for (c = 0, h = d; h; h = nn(h)) c++;
              for (; 0 < s - c; ) (x = nn(x)), s--;
              for (; 0 < c - s; ) (d = nn(d)), c--;
              for (; s--; ) {
                if (x === d || (d !== null && x === d.alternate)) break t;
                (x = nn(x)), (d = nn(d));
              }
              x = null;
            }
          else x = null;
          _ !== null && Fu(g, m, _, x, !1),
            E !== null && F !== null && Fu(g, F, E, x, !0);
        }
      }
      e: {
        if (
          ((m = f ? an(f) : window),
          (_ = m.nodeName && m.nodeName.toLowerCase()),
          _ === "select" || (_ === "input" && m.type === "file"))
        )
          var S = Ed;
        else if (Ou(m))
          if (ga) S = Td;
          else {
            S = Cd;
            var C = xd;
          }
        else
          (_ = m.nodeName) &&
            _.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (S = Pd);
        if (S && (S = S(e, f))) {
          ha(g, S, n, w);
          break e;
        }
        C && C(e, m, f),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            No(m, "number", m.value);
      }
      switch (((C = f ? an(f) : window), e)) {
        case "focusin":
          (Ou(C) || C.contentEditable === "true") &&
            ((un = C), (Uo = f), (bn = null));
          break;
        case "focusout":
          bn = Uo = un = null;
          break;
        case "mousedown":
          Bo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bo = !1), Ru(g, n, w);
          break;
        case "selectionchange":
          if (Ld) break;
        case "keydown":
        case "keyup":
          Ru(g, n, w);
      }
      var P;
      if (Oi)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        on
          ? va(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (pa &&
          n.locale !== "ko" &&
          (on || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && on && (P = da())
            : ((kt = w),
              (Ni = "value" in kt ? kt.value : kt.textContent),
              (on = !0))),
        (C = cl(f, L)),
        0 < C.length &&
          ((L = new Tu(L, e, null, n, w)),
          g.push({ event: L, listeners: C }),
          P ? (L.data = P) : ((P = ma(n)), P !== null && (L.data = P)))),
        (P = yd ? wd(e, n) : Sd(e, n)) &&
          ((f = cl(f, "onBeforeInput")),
          0 < f.length &&
            ((w = new Tu("onBeforeInput", "beforeinput", null, n, w)),
            g.push({ event: w, listeners: f }),
            (w.data = P)));
    }
    Ta(g, t);
  });
}
function pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function cl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = ir(e, n)),
      o != null && r.unshift(pr(e, o, l)),
      (o = ir(e, t)),
      o != null && r.push(pr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function nn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Fu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      f = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      f !== null &&
      ((u = f),
      l
        ? ((a = ir(n, o)), a != null && i.unshift(pr(n, a, u)))
        : l || ((a = ir(n, o)), a != null && i.push(pr(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Md = /\r\n?/g,
  jd = /\u0000|\uFFFD/g;
function Uu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Md,
      `
`
    )
    .replace(jd, "");
}
function Dr(e, t, n) {
  if (((t = Uu(t)), Uu(e) !== t && n)) throw Error(k(425));
}
function fl() {}
var Vo = null,
  Ho = null;
function $o(e, t) {
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
var Qo = typeof setTimeout == "function" ? setTimeout : void 0,
  Rd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Bu = typeof Promise == "function" ? Promise : void 0,
  Wd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Bu < "u"
      ? function (e) {
          return Bu.resolve(null).then(e).catch(Dd);
        }
      : Qo;
function Dd(e) {
  setTimeout(function () {
    throw e;
  });
}
function so(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), ar(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  ar(t);
}
function Tt(e) {
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
function Vu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var An = Math.random().toString(36).slice(2),
  be = "__reactFiber$" + An,
  vr = "__reactProps$" + An,
  ct = "__reactContainer$" + An,
  Ko = "__reactEvents$" + An,
  Fd = "__reactListeners$" + An,
  Ud = "__reactHandles$" + An;
function Bt(e) {
  var t = e[be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ct] || n[be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vu(e); e !== null; ) {
          if ((n = e[be])) return n;
          e = Vu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function xr(e) {
  return (
    (e = e[be] || e[ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function an(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Ml(e) {
  return e[vr] || null;
}
var Yo = [],
  cn = -1;
function jt(e) {
  return { current: e };
}
function $(e) {
  0 > cn || ((e.current = Yo[cn]), (Yo[cn] = null), cn--);
}
function B(e, t) {
  cn++, (Yo[cn] = e.current), (e.current = t);
}
var It = {},
  he = jt(It),
  xe = jt(!1),
  Kt = It;
function xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return It;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ce(e) {
  return (e = e.childContextTypes), e != null;
}
function dl() {
  $(xe), $(he);
}
function Hu(e, t, n) {
  if (he.current !== It) throw Error(k(168));
  B(he, t), B(xe, n);
}
function za(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, xf(e) || "Unknown", l));
  return J({}, n, r);
}
function pl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
    (Kt = he.current),
    B(he, e),
    B(xe, xe.current),
    !0
  );
}
function $u(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = za(e, t, Kt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(xe),
      $(he),
      B(he, e))
    : $(xe),
    B(xe, n);
}
var ot = null,
  jl = !1,
  ao = !1;
function La(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
function Bd(e) {
  (jl = !0), La(e);
}
function Rt() {
  if (!ao && ot !== null) {
    ao = !0;
    var e = 0,
      t = U;
    try {
      var n = ot;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ot = null), (jl = !1);
    } catch (l) {
      throw (ot !== null && (ot = ot.slice(e + 1)), ta(xi, Rt), l);
    } finally {
      (U = t), (ao = !1);
    }
  }
  return null;
}
var fn = [],
  dn = 0,
  vl = null,
  ml = 0,
  Ie = [],
  Me = 0,
  Yt = null,
  it = 1,
  ut = "";
function Ft(e, t) {
  (fn[dn++] = ml), (fn[dn++] = vl), (vl = e), (ml = t);
}
function Oa(e, t, n) {
  (Ie[Me++] = it), (Ie[Me++] = ut), (Ie[Me++] = Yt), (Yt = e);
  var r = it;
  e = ut;
  var l = 32 - Ye(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ye(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (it = (1 << (32 - Ye(t) + l)) | (n << l) | r),
      (ut = o + e);
  } else (it = (1 << o) | (n << l) | r), (ut = e);
}
function Ii(e) {
  e.return !== null && (Ft(e, 1), Oa(e, 1, 0));
}
function Mi(e) {
  for (; e === vl; )
    (vl = fn[--dn]), (fn[dn] = null), (ml = fn[--dn]), (fn[dn] = null);
  for (; e === Yt; )
    (Yt = Ie[--Me]),
      (Ie[Me] = null),
      (ut = Ie[--Me]),
      (Ie[Me] = null),
      (it = Ie[--Me]),
      (Ie[Me] = null);
}
var ze = null,
  Ne = null,
  Y = !1,
  Ke = null;
function Aa(e, t) {
  var n = je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ze = e), (Ne = Tt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (Ne = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yt !== null ? { id: it, overflow: ut } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ze = e),
            (Ne = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Xo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Go(e) {
  if (Y) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!Qu(e, t)) {
        if (Xo(e)) throw Error(k(418));
        t = Tt(n.nextSibling);
        var r = ze;
        t && Qu(e, t)
          ? Aa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (ze = e));
      }
    } else {
      if (Xo(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (Y = !1), (ze = e);
    }
  }
}
function Ku(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function Fr(e) {
  if (e !== ze) return !1;
  if (!Y) return Ku(e), (Y = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$o(e.type, e.memoizedProps))),
    t && (t = Ne))
  ) {
    if (Xo(e)) throw (Ia(), Error(k(418)));
    for (; t; ) Aa(e, t), (t = Tt(t.nextSibling));
  }
  if ((Ku(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = Tt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = ze ? Tt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ia() {
  for (var e = Ne; e; ) e = Tt(e.nextSibling);
}
function Cn() {
  (Ne = ze = null), (Y = !1);
}
function ji(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
var Vd = pt.ReactCurrentBatchConfig;
function $e(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var hl = jt(null),
  gl = null,
  pn = null,
  Ri = null;
function Wi() {
  Ri = pn = gl = null;
}
function Di(e) {
  var t = hl.current;
  $(hl), (e._currentValue = t);
}
function Zo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function kn(e, t) {
  (gl = e),
    (Ri = pn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ee = !0), (e.firstContext = null));
}
function We(e) {
  var t = e._currentValue;
  if (Ri !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), pn === null)) {
      if (gl === null) throw Error(k(308));
      (pn = e), (gl.dependencies = { lanes: 0, firstContext: e });
    } else pn = pn.next = e;
  return t;
}
var Vt = null;
function Fi(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function Ma(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Fi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ft(e, r)
  );
}
function ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var yt = !1;
function Ui(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ja(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function st(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Nt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ft(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Fi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ft(e, n)
  );
}
function Zr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ci(e, n);
  }
}
function Yu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function yl(e, t, n, r) {
  var l = e.updateQueue;
  yt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      f = a.next;
    (a.next = null), i === null ? (o = f) : (i.next = f), (i = a);
    var w = e.alternate;
    w !== null &&
      ((w = w.updateQueue),
      (u = w.lastBaseUpdate),
      u !== i &&
        (u === null ? (w.firstBaseUpdate = f) : (u.next = f),
        (w.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var g = l.baseState;
    (i = 0), (w = f = a = null), (u = o);
    do {
      var m = u.lane,
        _ = u.eventTime;
      if ((r & m) === m) {
        w !== null &&
          (w = w.next =
            {
              eventTime: _,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var E = e,
            x = u;
          switch (((m = t), (_ = n), x.tag)) {
            case 1:
              if (((E = x.payload), typeof E == "function")) {
                g = E.call(_, g, m);
                break e;
              }
              g = E;
              break e;
            case 3:
              E.flags = (E.flags & -65537) | 128;
            case 0:
              if (
                ((E = x.payload),
                (m = typeof E == "function" ? E.call(_, g, m) : E),
                m == null)
              )
                break e;
              g = J({}, g, m);
              break e;
            case 2:
              yt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (_ = {
          eventTime: _,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          w === null ? ((f = w = _), (a = g)) : (w = w.next = _),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (w === null && (a = g),
      (l.baseState = a),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = w),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Gt |= i), (e.lanes = i), (e.memoizedState = g);
  }
}
function Xu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var Ra = new Ms.Component().refs;
function Jo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Rl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      l = Lt(e),
      o = st(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Nt(e, o, l)),
      t !== null && (Xe(t, e, l, r), Zr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      l = Lt(e),
      o = st(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Nt(e, o, l)),
      t !== null && (Xe(t, e, l, r), Zr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = Lt(e),
      l = st(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Nt(e, l, r)),
      t !== null && (Xe(t, e, r, n), Zr(t, e, r));
  },
};
function Gu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !fr(n, r) || !fr(l, o)
      : !0
  );
}
function Wa(e, t, n) {
  var r = !1,
    l = It,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = We(o))
      : ((l = Ce(t) ? Kt : he.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? xn(e, l) : It)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Rl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Zu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
}
function qo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Ra), Ui(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = We(o))
    : ((o = Ce(t) ? Kt : he.current), (l.context = xn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Jo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Rl.enqueueReplaceState(l, l.state, null),
      yl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Ra && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Ur(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ju(e) {
  var t = e._init;
  return t(e._payload);
}
function Da(e) {
  function t(d, s) {
    if (e) {
      var c = d.deletions;
      c === null ? ((d.deletions = [s]), (d.flags |= 16)) : c.push(s);
    }
  }
  function n(d, s) {
    if (!e) return null;
    for (; s !== null; ) t(d, s), (s = s.sibling);
    return null;
  }
  function r(d, s) {
    for (d = new Map(); s !== null; )
      s.key !== null ? d.set(s.key, s) : d.set(s.index, s), (s = s.sibling);
    return d;
  }
  function l(d, s) {
    return (d = Ot(d, s)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, s, c) {
    return (
      (d.index = c),
      e
        ? ((c = d.alternate),
          c !== null
            ? ((c = c.index), c < s ? ((d.flags |= 2), s) : c)
            : ((d.flags |= 2), s))
        : ((d.flags |= 1048576), s)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, s, c, h) {
    return s === null || s.tag !== 6
      ? ((s = go(c, d.mode, h)), (s.return = d), s)
      : ((s = l(s, c)), (s.return = d), s);
  }
  function a(d, s, c, h) {
    var S = c.type;
    return S === ln
      ? w(d, s, c.props.children, h, c.key)
      : s !== null &&
        (s.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === gt &&
            Ju(S) === s.type))
      ? ((h = l(s, c.props)), (h.ref = Vn(d, s, c)), (h.return = d), h)
      : ((h = nl(c.type, c.key, c.props, null, d.mode, h)),
        (h.ref = Vn(d, s, c)),
        (h.return = d),
        h);
  }
  function f(d, s, c, h) {
    return s === null ||
      s.tag !== 4 ||
      s.stateNode.containerInfo !== c.containerInfo ||
      s.stateNode.implementation !== c.implementation
      ? ((s = yo(c, d.mode, h)), (s.return = d), s)
      : ((s = l(s, c.children || [])), (s.return = d), s);
  }
  function w(d, s, c, h, S) {
    return s === null || s.tag !== 7
      ? ((s = Qt(c, d.mode, h, S)), (s.return = d), s)
      : ((s = l(s, c)), (s.return = d), s);
  }
  function g(d, s, c) {
    if ((typeof s == "string" && s !== "") || typeof s == "number")
      return (s = go("" + s, d.mode, c)), (s.return = d), s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case zr:
          return (
            (c = nl(s.type, s.key, s.props, null, d.mode, c)),
            (c.ref = Vn(d, null, s)),
            (c.return = d),
            c
          );
        case rn:
          return (s = yo(s, d.mode, c)), (s.return = d), s;
        case gt:
          var h = s._init;
          return g(d, h(s._payload), c);
      }
      if (Kn(s) || Wn(s))
        return (s = Qt(s, d.mode, c, null)), (s.return = d), s;
      Ur(d, s);
    }
    return null;
  }
  function m(d, s, c, h) {
    var S = s !== null ? s.key : null;
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return S !== null ? null : u(d, s, "" + c, h);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case zr:
          return c.key === S ? a(d, s, c, h) : null;
        case rn:
          return c.key === S ? f(d, s, c, h) : null;
        case gt:
          return (S = c._init), m(d, s, S(c._payload), h);
      }
      if (Kn(c) || Wn(c)) return S !== null ? null : w(d, s, c, h, null);
      Ur(d, c);
    }
    return null;
  }
  function _(d, s, c, h, S) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (d = d.get(c) || null), u(s, d, "" + h, S);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case zr:
          return (d = d.get(h.key === null ? c : h.key) || null), a(s, d, h, S);
        case rn:
          return (d = d.get(h.key === null ? c : h.key) || null), f(s, d, h, S);
        case gt:
          var C = h._init;
          return _(d, s, c, C(h._payload), S);
      }
      if (Kn(h) || Wn(h)) return (d = d.get(c) || null), w(s, d, h, S, null);
      Ur(s, h);
    }
    return null;
  }
  function E(d, s, c, h) {
    for (
      var S = null, C = null, P = s, L = (s = 0), V = null;
      P !== null && L < c.length;
      L++
    ) {
      P.index > L ? ((V = P), (P = null)) : (V = P.sibling);
      var j = m(d, P, c[L], h);
      if (j === null) {
        P === null && (P = V);
        break;
      }
      e && P && j.alternate === null && t(d, P),
        (s = o(j, s, L)),
        C === null ? (S = j) : (C.sibling = j),
        (C = j),
        (P = V);
    }
    if (L === c.length) return n(d, P), Y && Ft(d, L), S;
    if (P === null) {
      for (; L < c.length; L++)
        (P = g(d, c[L], h)),
          P !== null &&
            ((s = o(P, s, L)), C === null ? (S = P) : (C.sibling = P), (C = P));
      return Y && Ft(d, L), S;
    }
    for (P = r(d, P); L < c.length; L++)
      (V = _(P, d, L, c[L], h)),
        V !== null &&
          (e && V.alternate !== null && P.delete(V.key === null ? L : V.key),
          (s = o(V, s, L)),
          C === null ? (S = V) : (C.sibling = V),
          (C = V));
    return (
      e &&
        P.forEach(function (se) {
          return t(d, se);
        }),
      Y && Ft(d, L),
      S
    );
  }
  function x(d, s, c, h) {
    var S = Wn(c);
    if (typeof S != "function") throw Error(k(150));
    if (((c = S.call(c)), c == null)) throw Error(k(151));
    for (
      var C = (S = null), P = s, L = (s = 0), V = null, j = c.next();
      P !== null && !j.done;
      L++, j = c.next()
    ) {
      P.index > L ? ((V = P), (P = null)) : (V = P.sibling);
      var se = m(d, P, j.value, h);
      if (se === null) {
        P === null && (P = V);
        break;
      }
      e && P && se.alternate === null && t(d, P),
        (s = o(se, s, L)),
        C === null ? (S = se) : (C.sibling = se),
        (C = se),
        (P = V);
    }
    if (j.done) return n(d, P), Y && Ft(d, L), S;
    if (P === null) {
      for (; !j.done; L++, j = c.next())
        (j = g(d, j.value, h)),
          j !== null &&
            ((s = o(j, s, L)), C === null ? (S = j) : (C.sibling = j), (C = j));
      return Y && Ft(d, L), S;
    }
    for (P = r(d, P); !j.done; L++, j = c.next())
      (j = _(P, d, L, j.value, h)),
        j !== null &&
          (e && j.alternate !== null && P.delete(j.key === null ? L : j.key),
          (s = o(j, s, L)),
          C === null ? (S = j) : (C.sibling = j),
          (C = j));
    return (
      e &&
        P.forEach(function (Fe) {
          return t(d, Fe);
        }),
      Y && Ft(d, L),
      S
    );
  }
  function F(d, s, c, h) {
    if (
      (typeof c == "object" &&
        c !== null &&
        c.type === ln &&
        c.key === null &&
        (c = c.props.children),
      typeof c == "object" && c !== null)
    ) {
      switch (c.$$typeof) {
        case zr:
          e: {
            for (var S = c.key, C = s; C !== null; ) {
              if (C.key === S) {
                if (((S = c.type), S === ln)) {
                  if (C.tag === 7) {
                    n(d, C.sibling),
                      (s = l(C, c.props.children)),
                      (s.return = d),
                      (d = s);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === gt &&
                    Ju(S) === C.type)
                ) {
                  n(d, C.sibling),
                    (s = l(C, c.props)),
                    (s.ref = Vn(d, C, c)),
                    (s.return = d),
                    (d = s);
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            c.type === ln
              ? ((s = Qt(c.props.children, d.mode, h, c.key)),
                (s.return = d),
                (d = s))
              : ((h = nl(c.type, c.key, c.props, null, d.mode, h)),
                (h.ref = Vn(d, s, c)),
                (h.return = d),
                (d = h));
          }
          return i(d);
        case rn:
          e: {
            for (C = c.key; s !== null; ) {
              if (s.key === C)
                if (
                  s.tag === 4 &&
                  s.stateNode.containerInfo === c.containerInfo &&
                  s.stateNode.implementation === c.implementation
                ) {
                  n(d, s.sibling),
                    (s = l(s, c.children || [])),
                    (s.return = d),
                    (d = s);
                  break e;
                } else {
                  n(d, s);
                  break;
                }
              else t(d, s);
              s = s.sibling;
            }
            (s = yo(c, d.mode, h)), (s.return = d), (d = s);
          }
          return i(d);
        case gt:
          return (C = c._init), F(d, s, C(c._payload), h);
      }
      if (Kn(c)) return E(d, s, c, h);
      if (Wn(c)) return x(d, s, c, h);
      Ur(d, c);
    }
    return (typeof c == "string" && c !== "") || typeof c == "number"
      ? ((c = "" + c),
        s !== null && s.tag === 6
          ? (n(d, s.sibling), (s = l(s, c)), (s.return = d), (d = s))
          : (n(d, s), (s = go(c, d.mode, h)), (s.return = d), (d = s)),
        i(d))
      : n(d, s);
  }
  return F;
}
var Pn = Da(!0),
  Fa = Da(!1),
  Cr = {},
  tt = jt(Cr),
  mr = jt(Cr),
  hr = jt(Cr);
function Ht(e) {
  if (e === Cr) throw Error(k(174));
  return e;
}
function Bi(e, t) {
  switch ((B(hr, t), B(mr, e), B(tt, Cr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Lo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Lo(t, e));
  }
  $(tt), B(tt, t);
}
function Tn() {
  $(tt), $(mr), $(hr);
}
function Ua(e) {
  Ht(hr.current);
  var t = Ht(tt.current),
    n = Lo(t, e.type);
  t !== n && (B(mr, e), B(tt, n));
}
function Vi(e) {
  mr.current === e && ($(tt), $(mr));
}
var G = jt(0);
function wl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var co = [];
function Hi() {
  for (var e = 0; e < co.length; e++)
    co[e]._workInProgressVersionPrimary = null;
  co.length = 0;
}
var Jr = pt.ReactCurrentDispatcher,
  fo = pt.ReactCurrentBatchConfig,
  Xt = 0,
  Z = null,
  le = null,
  ie = null,
  Sl = !1,
  er = !1,
  gr = 0,
  Hd = 0;
function pe() {
  throw Error(k(321));
}
function $i(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ge(e[n], t[n])) return !1;
  return !0;
}
function Qi(e, t, n, r, l, o) {
  if (
    ((Xt = o),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Jr.current = e === null || e.memoizedState === null ? Yd : Xd),
    (e = n(r, l)),
    er)
  ) {
    o = 0;
    do {
      if (((er = !1), (gr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (ie = le = null),
        (t.updateQueue = null),
        (Jr.current = Gd),
        (e = n(r, l));
    } while (er);
  }
  if (
    ((Jr.current = kl),
    (t = le !== null && le.next !== null),
    (Xt = 0),
    (ie = le = Z = null),
    (Sl = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Ki() {
  var e = gr !== 0;
  return (gr = 0), e;
}
function qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ie === null ? (Z.memoizedState = ie = e) : (ie = ie.next = e), ie;
}
function De() {
  if (le === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = ie === null ? Z.memoizedState : ie.next;
  if (t !== null) (ie = t), (le = e);
  else {
    if (e === null) throw Error(k(310));
    (le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      ie === null ? (Z.memoizedState = ie = e) : (ie = ie.next = e);
  }
  return ie;
}
function yr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function po(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = le,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      f = o;
    do {
      var w = f.lane;
      if ((Xt & w) === w)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var g = {
          lane: w,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        a === null ? ((u = a = g), (i = r)) : (a = a.next = g),
          (Z.lanes |= w),
          (Gt |= w);
      }
      f = f.next;
    } while (f !== null && f !== o);
    a === null ? (i = r) : (a.next = u),
      Ge(r, t.memoizedState) || (Ee = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (Z.lanes |= o), (Gt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function vo(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ge(o, t.memoizedState) || (Ee = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ba() {}
function Va(e, t) {
  var n = Z,
    r = De(),
    l = t(),
    o = !Ge(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ee = !0)),
    (r = r.queue),
    Yi(Qa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      wr(9, $a.bind(null, n, r, l, t), void 0, null),
      ue === null)
    )
      throw Error(k(349));
    Xt & 30 || Ha(n, t, l);
  }
  return l;
}
function Ha(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $a(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ka(t) && Ya(e);
}
function Qa(e, t, n) {
  return n(function () {
    Ka(t) && Ya(e);
  });
}
function Ka(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ge(e, n);
  } catch {
    return !0;
  }
}
function Ya(e) {
  var t = ft(e, 1);
  t !== null && Xe(t, e, 1, -1);
}
function qu(e) {
  var t = qe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Kd.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function wr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Xa() {
  return De().memoizedState;
}
function qr(e, t, n, r) {
  var l = qe();
  (Z.flags |= e),
    (l.memoizedState = wr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Wl(e, t, n, r) {
  var l = De();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (le !== null) {
    var i = le.memoizedState;
    if (((o = i.destroy), r !== null && $i(r, i.deps))) {
      l.memoizedState = wr(t, n, o, r);
      return;
    }
  }
  (Z.flags |= e), (l.memoizedState = wr(1 | t, n, o, r));
}
function bu(e, t) {
  return qr(8390656, 8, e, t);
}
function Yi(e, t) {
  return Wl(2048, 8, e, t);
}
function Ga(e, t) {
  return Wl(4, 2, e, t);
}
function Za(e, t) {
  return Wl(4, 4, e, t);
}
function Ja(e, t) {
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
function qa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Wl(4, 4, Ja.bind(null, t, e), n)
  );
}
function Xi() {}
function ba(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $i(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ec(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $i(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function tc(e, t, n) {
  return Xt & 21
    ? (Ge(n, t) || ((n = la()), (Z.lanes |= n), (Gt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ee = !0)), (e.memoizedState = n));
}
function $d(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = fo.transition;
  fo.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (fo.transition = r);
  }
}
function nc() {
  return De().memoizedState;
}
function Qd(e, t, n) {
  var r = Lt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    rc(e))
  )
    lc(t, n);
  else if (((n = Ma(e, t, n, r)), n !== null)) {
    var l = we();
    Xe(n, e, r, l), oc(n, t, r);
  }
}
function Kd(e, t, n) {
  var r = Lt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rc(e)) lc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ge(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Fi(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ma(e, t, l, r)),
      n !== null && ((l = we()), Xe(n, e, r, l), oc(n, t, r));
  }
}
function rc(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function lc(e, t) {
  er = Sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function oc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ci(e, n);
  }
}
var kl = {
    readContext: We,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  Yd = {
    readContext: We,
    useCallback: function (e, t) {
      return (qe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: We,
    useEffect: bu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qr(4194308, 4, Ja.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return qr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = qe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = qe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Qd.bind(null, Z, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = qe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: qu,
    useDebugValue: Xi,
    useDeferredValue: function (e) {
      return (qe().memoizedState = e);
    },
    useTransition: function () {
      var e = qu(!1),
        t = e[0];
      return (e = $d.bind(null, e[1])), (qe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Z,
        l = qe();
      if (Y) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(k(349));
        Xt & 30 || Ha(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        bu(Qa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        wr(9, $a.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = qe(),
        t = ue.identifierPrefix;
      if (Y) {
        var n = ut,
          r = it;
        (n = (r & ~(1 << (32 - Ye(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = gr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Hd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xd = {
    readContext: We,
    useCallback: ba,
    useContext: We,
    useEffect: Yi,
    useImperativeHandle: qa,
    useInsertionEffect: Ga,
    useLayoutEffect: Za,
    useMemo: ec,
    useReducer: po,
    useRef: Xa,
    useState: function () {
      return po(yr);
    },
    useDebugValue: Xi,
    useDeferredValue: function (e) {
      var t = De();
      return tc(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = po(yr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: Ba,
    useSyncExternalStore: Va,
    useId: nc,
    unstable_isNewReconciler: !1,
  },
  Gd = {
    readContext: We,
    useCallback: ba,
    useContext: We,
    useEffect: Yi,
    useImperativeHandle: qa,
    useInsertionEffect: Ga,
    useLayoutEffect: Za,
    useMemo: ec,
    useReducer: vo,
    useRef: Xa,
    useState: function () {
      return vo(yr);
    },
    useDebugValue: Xi,
    useDeferredValue: function (e) {
      var t = De();
      return le === null ? (t.memoizedState = e) : tc(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = vo(yr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: Ba,
    useSyncExternalStore: Va,
    useId: nc,
    unstable_isNewReconciler: !1,
  };
function Nn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ef(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function mo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Zd = typeof WeakMap == "function" ? WeakMap : Map;
function ic(e, t, n) {
  (n = st(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      El || ((El = !0), (ai = r)), bo(e, t);
    }),
    n
  );
}
function uc(e, t, n) {
  (n = st(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        bo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        bo(e, t),
          typeof r != "function" &&
            (zt === null ? (zt = new Set([this])) : zt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function es(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = cp.bind(null, e, t, n)), t.then(e, e));
}
function ts(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ns(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = st(-1, 1)), (t.tag = 2), Nt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Jd = pt.ReactCurrentOwner,
  Ee = !1;
function ye(e, t, n, r) {
  t.child = e === null ? Fa(t, null, n, r) : Pn(t, e.child, n, r);
}
function rs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    kn(t, l),
    (r = Qi(e, t, n, r, o, l)),
    (n = Ki()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        dt(e, t, l))
      : (Y && n && Ii(t), (t.flags |= 1), ye(e, t, r, l), t.child)
  );
}
function ls(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !nu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), sc(e, t, o, r, l))
      : ((e = nl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : fr), n(i, r) && e.ref === t.ref)
    )
      return dt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Ot(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (fr(o, r) && e.ref === t.ref)
      if (((Ee = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ee = !0);
      else return (t.lanes = e.lanes), dt(e, t, l);
  }
  return ei(e, t, n, r, l);
}
function ac(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(mn, Te),
        (Te |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          B(mn, Te),
          (Te |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        B(mn, Te),
        (Te |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(mn, Te),
      (Te |= r);
  return ye(e, t, l, n), t.child;
}
function cc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ei(e, t, n, r, l) {
  var o = Ce(n) ? Kt : he.current;
  return (
    (o = xn(t, o)),
    kn(t, l),
    (n = Qi(e, t, n, r, o, l)),
    (r = Ki()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        dt(e, t, l))
      : (Y && r && Ii(t), (t.flags |= 1), ye(e, t, n, l), t.child)
  );
}
function os(e, t, n, r, l) {
  if (Ce(n)) {
    var o = !0;
    pl(t);
  } else o = !1;
  if ((kn(t, l), t.stateNode === null))
    br(e, t), Wa(t, n, r), qo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = We(f))
      : ((f = Ce(n) ? Kt : he.current), (f = xn(t, f)));
    var w = n.getDerivedStateFromProps,
      g =
        typeof w == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== f) && Zu(t, i, r, f)),
      (yt = !1);
    var m = t.memoizedState;
    (i.state = m),
      yl(t, r, i, l),
      (a = t.memoizedState),
      u !== r || m !== a || xe.current || yt
        ? (typeof w == "function" && (Jo(t, n, w, r), (a = t.memoizedState)),
          (u = yt || Gu(t, n, u, r, m, a, f))
            ? (g ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = f),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ja(e, t),
      (u = t.memoizedProps),
      (f = t.type === t.elementType ? u : $e(t.type, u)),
      (i.props = f),
      (g = t.pendingProps),
      (m = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = We(a))
        : ((a = Ce(n) ? Kt : he.current), (a = xn(t, a)));
    var _ = n.getDerivedStateFromProps;
    (w =
      typeof _ == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== g || m !== a) && Zu(t, i, r, a)),
      (yt = !1),
      (m = t.memoizedState),
      (i.state = m),
      yl(t, r, i, l);
    var E = t.memoizedState;
    u !== g || m !== E || xe.current || yt
      ? (typeof _ == "function" && (Jo(t, n, _, r), (E = t.memoizedState)),
        (f = yt || Gu(t, n, f, r, m, E, a) || !1)
          ? (w ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, E, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, E, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = E)),
        (i.props = r),
        (i.state = E),
        (i.context = a),
        (r = f))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ti(e, t, n, r, o, l);
}
function ti(e, t, n, r, l, o) {
  cc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && $u(t, n, !1), dt(e, t, o);
  (r = t.stateNode), (Jd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Pn(t, e.child, null, o)), (t.child = Pn(t, null, u, o)))
      : ye(e, t, u, o),
    (t.memoizedState = r.state),
    l && $u(t, n, !0),
    t.child
  );
}
function fc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Hu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Hu(e, t.context, !1),
    Bi(e, t.containerInfo);
}
function is(e, t, n, r, l) {
  return Cn(), ji(l), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var ni = { dehydrated: null, treeContext: null, retryLane: 0 };
function ri(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function dc(e, t, n) {
  var r = t.pendingProps,
    l = G.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    B(G, l & 1),
    e === null)
  )
    return (
      Go(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Ul(i, r, 0, null)),
              (e = Qt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ri(n)),
              (t.memoizedState = ni),
              e)
            : Gi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return qd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ot(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Ot(u, o)) : ((o = Qt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ri(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ni),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ot(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Gi(e, t) {
  return (
    (t = Ul({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Br(e, t, n, r) {
  return (
    r !== null && ji(r),
    Pn(t, e.child, null, n),
    (e = Gi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function qd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = mo(Error(k(422)))), Br(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Ul({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Qt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Pn(t, e.child, null, i),
        (t.child.memoizedState = ri(i)),
        (t.memoizedState = ni),
        o);
  if (!(t.mode & 1)) return Br(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(k(419))), (r = mo(o, r, void 0)), Br(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), Ee || u)) {
    if (((r = ue), r !== null)) {
      switch (i & -i) {
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
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), ft(e, l), Xe(r, e, l, -1));
    }
    return tu(), (r = mo(Error(k(421)))), Br(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = fp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ne = Tt(l.nextSibling)),
      (ze = t),
      (Y = !0),
      (Ke = null),
      e !== null &&
        ((Ie[Me++] = it),
        (Ie[Me++] = ut),
        (Ie[Me++] = Yt),
        (it = e.id),
        (ut = e.overflow),
        (Yt = t)),
      (t = Gi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function us(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zo(e.return, t, n);
}
function ho(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function pc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ye(e, t, r.children, n), (r = G.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && us(e, n, t);
        else if (e.tag === 19) us(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((B(G, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && wl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ho(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && wl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ho(t, !0, n, null, o);
        break;
      case "together":
        ho(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function br(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function dt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ot(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function bd(e, t, n) {
  switch (t.tag) {
    case 3:
      fc(t), Cn();
      break;
    case 5:
      Ua(t);
      break;
    case 1:
      Ce(t.type) && pl(t);
      break;
    case 4:
      Bi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      B(hl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(G, G.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? dc(e, t, n)
          : (B(G, G.current & 1),
            (e = dt(e, t, n)),
            e !== null ? e.sibling : null);
      B(G, G.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return pc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        B(G, G.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ac(e, t, n);
  }
  return dt(e, t, n);
}
var vc, li, mc, hc;
vc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
li = function () {};
mc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ht(tt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Po(e, l)), (r = Po(e, r)), (o = []);
        break;
      case "select":
        (l = J({}, l, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = zo(e, l)), (r = zo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = fl);
    }
    Oo(n, r);
    var i;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var u = l[f];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (lr.hasOwnProperty(f)
              ? o || (o = [])
              : (o = o || []).push(f, null));
    for (f in r) {
      var a = r[f];
      if (
        ((u = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && a !== u && (a != null || u != null))
      )
        if (f === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(f, n)), (n = a);
        else
          f === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(f, a))
            : f === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(f, "" + a)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (lr.hasOwnProperty(f)
                ? (a != null && f === "onScroll" && H("scroll", e),
                  o || u === a || (o = []))
                : (o = o || []).push(f, a));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
hc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hn(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ep(e, t, n) {
  var r = t.pendingProps;
  switch ((Mi(t), t.tag)) {
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
      return ve(t), null;
    case 1:
      return Ce(t.type) && dl(), ve(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Tn(),
        $(xe),
        $(he),
        Hi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ke !== null && (di(Ke), (Ke = null)))),
        li(e, t),
        ve(t),
        null
      );
    case 5:
      Vi(t);
      var l = Ht(hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ve(t), null;
        }
        if (((e = Ht(tt.current)), Fr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[be] = t), (r[vr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Xn.length; l++) H(Xn[l], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              hu(r, o), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              yu(r, o), H("invalid", r);
          }
          Oo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Dr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Dr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : lr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              Lr(r), gu(r, o, !0);
              break;
            case "textarea":
              Lr(r), wu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = fl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Hs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[be] = t),
            (e[vr] = r),
            vc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ao(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Xn.length; l++) H(Xn[l], e);
                l = r;
                break;
              case "source":
                H("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (l = r);
                break;
              case "details":
                H("toggle", e), (l = r);
                break;
              case "input":
                hu(e, r), (l = Po(e, r)), H("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = J({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                yu(e, r), (l = zo(e, r)), H("invalid", e);
                break;
              default:
                l = r;
            }
            Oo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? Ks(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && $s(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && or(e, a)
                    : typeof a == "number" && or(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (lr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && H("scroll", e)
                      : a != null && wi(e, o, a, i));
              }
            switch (n) {
              case "input":
                Lr(e), gu(e, r, !1);
                break;
              case "textarea":
                Lr(e), wu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + At(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? gn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      gn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = fl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ve(t), null;
    case 6:
      if (e && t.stateNode != null) hc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Ht(hr.current)), Ht(tt.current), Fr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[be] = t),
            (o = r.nodeValue !== n) && ((e = ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                Dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[be] = t),
            (t.stateNode = r);
      }
      return ve(t), null;
    case 13:
      if (
        ($(G),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && Ne !== null && t.mode & 1 && !(t.flags & 128))
          Ia(), Cn(), (t.flags |= 98560), (o = !1);
        else if (((o = Fr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[be] = t;
          } else
            Cn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ve(t), (o = !1);
        } else Ke !== null && (di(Ke), (Ke = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? oe === 0 && (oe = 3) : tu())),
          t.updateQueue !== null && (t.flags |= 4),
          ve(t),
          null);
    case 4:
      return (
        Tn(), li(e, t), e === null && dr(t.stateNode.containerInfo), ve(t), null
      );
    case 10:
      return Di(t.type._context), ve(t), null;
    case 17:
      return Ce(t.type) && dl(), ve(t), null;
    case 19:
      if (($(G), (o = t.memoizedState), o === null)) return ve(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Hn(o, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = wl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Hn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return B(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ee() > zn &&
            ((t.flags |= 128), (r = !0), Hn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = wl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !Y)
            )
              return ve(t), null;
          } else
            2 * ee() - o.renderingStartTime > zn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Hn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ee()),
          (t.sibling = null),
          (n = G.current),
          B(G, r ? (n & 1) | 2 : n & 1),
          t)
        : (ve(t), null);
    case 22:
    case 23:
      return (
        eu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Te & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function tp(e, t) {
  switch ((Mi(t), t.tag)) {
    case 1:
      return (
        Ce(t.type) && dl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Tn(),
        $(xe),
        $(he),
        Hi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Vi(t), null;
    case 13:
      if (($(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Cn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(G), null;
    case 4:
      return Tn(), null;
    case 10:
      return Di(t.type._context), null;
    case 22:
    case 23:
      return eu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Vr = !1,
  me = !1,
  np = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function vn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        b(e, t, r);
      }
    else n.current = null;
}
function oi(e, t, n) {
  try {
    n();
  } catch (r) {
    b(e, t, r);
  }
}
var ss = !1;
function rp(e, t) {
  if (((Vo = sl), (e = Sa()), Ai(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            f = 0,
            w = 0,
            g = e,
            m = null;
          t: for (;;) {
            for (
              var _;
              g !== n || (l !== 0 && g.nodeType !== 3) || (u = i + l),
                g !== o || (r !== 0 && g.nodeType !== 3) || (a = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (_ = g.firstChild) !== null;

            )
              (m = g), (g = _);
            for (;;) {
              if (g === e) break t;
              if (
                (m === n && ++f === l && (u = i),
                m === o && ++w === r && (a = i),
                (_ = g.nextSibling) !== null)
              )
                break;
              (g = m), (m = g.parentNode);
            }
            g = _;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ho = { focusedElem: e, selectionRange: n }, sl = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var E = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (E !== null) {
                  var x = E.memoizedProps,
                    F = E.memoizedState,
                    d = t.stateNode,
                    s = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : $e(t.type, x),
                      F
                    );
                  d.__reactInternalSnapshotBeforeUpdate = s;
                }
                break;
              case 3:
                var c = t.stateNode.containerInfo;
                c.nodeType === 1
                  ? (c.textContent = "")
                  : c.nodeType === 9 &&
                    c.documentElement &&
                    c.removeChild(c.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (h) {
          b(t, t.return, h);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (E = ss), (ss = !1), E;
}
function tr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && oi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Dl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ii(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function gc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), gc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[be], delete t[vr], delete t[Ko], delete t[Fd], delete t[Ud])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function yc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function as(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ui(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = fl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ui(e, t, n), e = e.sibling; e !== null; ) ui(e, t, n), (e = e.sibling);
}
function si(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (si(e, t, n), e = e.sibling; e !== null; ) si(e, t, n), (e = e.sibling);
}
var ae = null,
  Qe = !1;
function ht(e, t, n) {
  for (n = n.child; n !== null; ) wc(e, t, n), (n = n.sibling);
}
function wc(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function")
    try {
      et.onCommitFiberUnmount(Ll, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || vn(n, t);
    case 6:
      var r = ae,
        l = Qe;
      (ae = null),
        ht(e, t, n),
        (ae = r),
        (Qe = l),
        ae !== null &&
          (Qe
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (Qe
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? so(e.parentNode, n)
              : e.nodeType === 1 && so(e, n),
            ar(e))
          : so(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (l = Qe),
        (ae = n.stateNode.containerInfo),
        (Qe = !0),
        ht(e, t, n),
        (ae = r),
        (Qe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && oi(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      ht(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (vn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          b(n, t, u);
        }
      ht(e, t, n);
      break;
    case 21:
      ht(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), ht(e, t, n), (me = r))
        : ht(e, t, n);
      break;
    default:
      ht(e, t, n);
  }
}
function cs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new np()),
      t.forEach(function (r) {
        var l = dp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function He(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ae = u.stateNode), (Qe = !1);
              break e;
            case 3:
              (ae = u.stateNode.containerInfo), (Qe = !0);
              break e;
            case 4:
              (ae = u.stateNode.containerInfo), (Qe = !0);
              break e;
          }
          u = u.return;
        }
        if (ae === null) throw Error(k(160));
        wc(o, i, l), (ae = null), (Qe = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (f) {
        b(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Sc(t, e), (t = t.sibling);
}
function Sc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((He(t, e), Je(e), r & 4)) {
        try {
          tr(3, e, e.return), Dl(3, e);
        } catch (x) {
          b(e, e.return, x);
        }
        try {
          tr(5, e, e.return);
        } catch (x) {
          b(e, e.return, x);
        }
      }
      break;
    case 1:
      He(t, e), Je(e), r & 512 && n !== null && vn(n, n.return);
      break;
    case 5:
      if (
        (He(t, e),
        Je(e),
        r & 512 && n !== null && vn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          or(l, "");
        } catch (x) {
          b(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Bs(l, o),
              Ao(u, i);
            var f = Ao(u, o);
            for (i = 0; i < a.length; i += 2) {
              var w = a[i],
                g = a[i + 1];
              w === "style"
                ? Ks(l, g)
                : w === "dangerouslySetInnerHTML"
                ? $s(l, g)
                : w === "children"
                ? or(l, g)
                : wi(l, w, g, f);
            }
            switch (u) {
              case "input":
                To(l, o);
                break;
              case "textarea":
                Vs(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var _ = o.value;
                _ != null
                  ? gn(l, !!o.multiple, _, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? gn(l, !!o.multiple, o.defaultValue, !0)
                      : gn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[vr] = o;
          } catch (x) {
            b(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((He(t, e), Je(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (x) {
          b(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (He(t, e), Je(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ar(t.containerInfo);
        } catch (x) {
          b(e, e.return, x);
        }
      break;
    case 4:
      He(t, e), Je(e);
      break;
    case 13:
      He(t, e),
        Je(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (qi = ee())),
        r & 4 && cs(e);
      break;
    case 22:
      if (
        ((w = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (f = me) || w), He(t, e), (me = f)) : He(t, e),
        Je(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !w && e.mode & 1)
        )
          for (N = e, w = e.child; w !== null; ) {
            for (g = N = w; N !== null; ) {
              switch (((m = N), (_ = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  tr(4, m, m.return);
                  break;
                case 1:
                  vn(m, m.return);
                  var E = m.stateNode;
                  if (typeof E.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (E.props = t.memoizedProps),
                        (E.state = t.memoizedState),
                        E.componentWillUnmount();
                    } catch (x) {
                      b(r, n, x);
                    }
                  }
                  break;
                case 5:
                  vn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ds(g);
                    continue;
                  }
              }
              _ !== null ? ((_.return = m), (N = _)) : ds(g);
            }
            w = w.sibling;
          }
        e: for (w = null, g = e; ; ) {
          if (g.tag === 5) {
            if (w === null) {
              w = g;
              try {
                (l = g.stateNode),
                  f
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = g.stateNode),
                      (a = g.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = Qs("display", i)));
              } catch (x) {
                b(e, e.return, x);
              }
            }
          } else if (g.tag === 6) {
            if (w === null)
              try {
                g.stateNode.nodeValue = f ? "" : g.memoizedProps;
              } catch (x) {
                b(e, e.return, x);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            w === g && (w = null), (g = g.return);
          }
          w === g && (w = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      He(t, e), Je(e), r & 4 && cs(e);
      break;
    case 21:
      break;
    default:
      He(t, e), Je(e);
  }
}
function Je(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (or(l, ""), (r.flags &= -33));
          var o = as(e);
          si(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = as(e);
          ui(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      b(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lp(e, t, n) {
  (N = e), kc(e);
}
function kc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Vr;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || me;
        u = Vr;
        var f = me;
        if (((Vr = i), (me = a) && !f))
          for (N = l; N !== null; )
            (i = N),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ps(l)
                : a !== null
                ? ((a.return = i), (N = a))
                : ps(l);
        for (; o !== null; ) (N = o), kc(o), (o = o.sibling);
        (N = l), (Vr = u), (me = f);
      }
      fs(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (N = o)) : fs(e);
  }
}
function fs(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : $e(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Xu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                var f = t.alternate;
                if (f !== null) {
                  var w = f.memoizedState;
                  if (w !== null) {
                    var g = w.dehydrated;
                    g !== null && ar(g);
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
              throw Error(k(163));
          }
        me || (t.flags & 512 && ii(t));
      } catch (m) {
        b(t, t.return, m);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function ds(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function ps(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Dl(4, t);
          } catch (a) {
            b(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              b(t, l, a);
            }
          }
          var o = t.return;
          try {
            ii(t);
          } catch (a) {
            b(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ii(t);
          } catch (a) {
            b(t, i, a);
          }
      }
    } catch (a) {
      b(t, t.return, a);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (N = u);
      break;
    }
    N = t.return;
  }
}
var op = Math.ceil,
  _l = pt.ReactCurrentDispatcher,
  Zi = pt.ReactCurrentOwner,
  Re = pt.ReactCurrentBatchConfig,
  D = 0,
  ue = null,
  re = null,
  ce = 0,
  Te = 0,
  mn = jt(0),
  oe = 0,
  Sr = null,
  Gt = 0,
  Fl = 0,
  Ji = 0,
  nr = null,
  _e = null,
  qi = 0,
  zn = 1 / 0,
  lt = null,
  El = !1,
  ai = null,
  zt = null,
  Hr = !1,
  _t = null,
  xl = 0,
  rr = 0,
  ci = null,
  el = -1,
  tl = 0;
function we() {
  return D & 6 ? ee() : el !== -1 ? el : (el = ee());
}
function Lt(e) {
  return e.mode & 1
    ? D & 2 && ce !== 0
      ? ce & -ce
      : Vd.transition !== null
      ? (tl === 0 && (tl = la()), tl)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fa(e.type))),
        e)
    : 1;
}
function Xe(e, t, n, r) {
  if (50 < rr) throw ((rr = 0), (ci = null), Error(k(185)));
  _r(e, n, r),
    (!(D & 2) || e !== ue) &&
      (e === ue && (!(D & 2) && (Fl |= n), oe === 4 && St(e, ce)),
      Pe(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((zn = ee() + 500), jl && Rt()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  Vf(e, t);
  var r = ul(e, e === ue ? ce : 0);
  if (r === 0)
    n !== null && _u(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && _u(n), t === 1))
      e.tag === 0 ? Bd(vs.bind(null, e)) : La(vs.bind(null, e)),
        Wd(function () {
          !(D & 6) && Rt();
        }),
        (n = null);
    else {
      switch (oa(r)) {
        case 1:
          n = xi;
          break;
        case 4:
          n = na;
          break;
        case 16:
          n = il;
          break;
        case 536870912:
          n = ra;
          break;
        default:
          n = il;
      }
      n = zc(n, _c.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function _c(e, t) {
  if (((el = -1), (tl = 0), D & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (_n() && e.callbackNode !== n) return null;
  var r = ul(e, e === ue ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cl(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var o = xc();
    (ue !== e || ce !== t) && ((lt = null), (zn = ee() + 500), $t(e, t));
    do
      try {
        sp();
        break;
      } catch (u) {
        Ec(e, u);
      }
    while (1);
    Wi(),
      (_l.current = o),
      (D = l),
      re !== null ? (t = 0) : ((ue = null), (ce = 0), (t = oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Wo(e)), l !== 0 && ((r = l), (t = fi(e, l)))), t === 1)
    )
      throw ((n = Sr), $t(e, 0), St(e, r), Pe(e, ee()), n);
    if (t === 6) St(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ip(l) &&
          ((t = Cl(e, r)),
          t === 2 && ((o = Wo(e)), o !== 0 && ((r = o), (t = fi(e, o)))),
          t === 1))
      )
        throw ((n = Sr), $t(e, 0), St(e, r), Pe(e, ee()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Ut(e, _e, lt);
          break;
        case 3:
          if (
            (St(e, r), (r & 130023424) === r && ((t = qi + 500 - ee()), 10 < t))
          ) {
            if (ul(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Qo(Ut.bind(null, e, _e, lt), t);
            break;
          }
          Ut(e, _e, lt);
          break;
        case 4:
          if ((St(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ye(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * op(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Qo(Ut.bind(null, e, _e, lt), r);
            break;
          }
          Ut(e, _e, lt);
          break;
        case 5:
          Ut(e, _e, lt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Pe(e, ee()), e.callbackNode === n ? _c.bind(null, e) : null;
}
function fi(e, t) {
  var n = nr;
  return (
    e.current.memoizedState.isDehydrated && ($t(e, t).flags |= 256),
    (e = Cl(e, t)),
    e !== 2 && ((t = _e), (_e = n), t !== null && di(t)),
    e
  );
}
function di(e) {
  _e === null ? (_e = e) : _e.push.apply(_e, e);
}
function ip(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ge(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function St(e, t) {
  for (
    t &= ~Ji,
      t &= ~Fl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ye(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function vs(e) {
  if (D & 6) throw Error(k(327));
  _n();
  var t = ul(e, 0);
  if (!(t & 1)) return Pe(e, ee()), null;
  var n = Cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wo(e);
    r !== 0 && ((t = r), (n = fi(e, r)));
  }
  if (n === 1) throw ((n = Sr), $t(e, 0), St(e, t), Pe(e, ee()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ut(e, _e, lt),
    Pe(e, ee()),
    null
  );
}
function bi(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((zn = ee() + 500), jl && Rt());
  }
}
function Zt(e) {
  _t !== null && _t.tag === 0 && !(D & 6) && _n();
  var t = D;
  D |= 1;
  var n = Re.transition,
    r = U;
  try {
    if (((Re.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (Re.transition = n), (D = t), !(D & 6) && Rt();
  }
}
function eu() {
  (Te = mn.current), $(mn);
}
function $t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Rd(n)), re !== null))
    for (n = re.return; n !== null; ) {
      var r = n;
      switch ((Mi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && dl();
          break;
        case 3:
          Tn(), $(xe), $(he), Hi();
          break;
        case 5:
          Vi(r);
          break;
        case 4:
          Tn();
          break;
        case 13:
          $(G);
          break;
        case 19:
          $(G);
          break;
        case 10:
          Di(r.type._context);
          break;
        case 22:
        case 23:
          eu();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (re = e = Ot(e.current, null)),
    (ce = Te = t),
    (oe = 0),
    (Sr = null),
    (Ji = Fl = Gt = 0),
    (_e = nr = null),
    Vt !== null)
  ) {
    for (t = 0; t < Vt.length; t++)
      if (((n = Vt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Vt = null;
  }
  return e;
}
function Ec(e, t) {
  do {
    var n = re;
    try {
      if ((Wi(), (Jr.current = kl), Sl)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Sl = !1;
      }
      if (
        ((Xt = 0),
        (ie = le = Z = null),
        (er = !1),
        (gr = 0),
        (Zi.current = null),
        n === null || n.return === null)
      ) {
        (oe = 1), (Sr = t), (re = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = ce),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var f = a,
            w = u,
            g = w.tag;
          if (!(w.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = w.alternate;
            m
              ? ((w.updateQueue = m.updateQueue),
                (w.memoizedState = m.memoizedState),
                (w.lanes = m.lanes))
              : ((w.updateQueue = null), (w.memoizedState = null));
          }
          var _ = ts(i);
          if (_ !== null) {
            (_.flags &= -257),
              ns(_, i, u, o, t),
              _.mode & 1 && es(o, f, t),
              (t = _),
              (a = f);
            var E = t.updateQueue;
            if (E === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else E.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              es(o, f, t), tu();
              break e;
            }
            a = Error(k(426));
          }
        } else if (Y && u.mode & 1) {
          var F = ts(i);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              ns(F, i, u, o, t),
              ji(Nn(a, u));
            break e;
          }
        }
        (o = a = Nn(a, u)),
          oe !== 4 && (oe = 2),
          nr === null ? (nr = [o]) : nr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = ic(o, a, t);
              Yu(o, d);
              break e;
            case 1:
              u = a;
              var s = o.type,
                c = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof s.getDerivedStateFromError == "function" ||
                  (c !== null &&
                    typeof c.componentDidCatch == "function" &&
                    (zt === null || !zt.has(c))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var h = uc(o, u, t);
                Yu(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Pc(n);
    } catch (S) {
      (t = S), re === n && n !== null && (re = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function xc() {
  var e = _l.current;
  return (_l.current = kl), e === null ? kl : e;
}
function tu() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    ue === null || (!(Gt & 268435455) && !(Fl & 268435455)) || St(ue, ce);
}
function Cl(e, t) {
  var n = D;
  D |= 2;
  var r = xc();
  (ue !== e || ce !== t) && ((lt = null), $t(e, t));
  do
    try {
      up();
      break;
    } catch (l) {
      Ec(e, l);
    }
  while (1);
  if ((Wi(), (D = n), (_l.current = r), re !== null)) throw Error(k(261));
  return (ue = null), (ce = 0), oe;
}
function up() {
  for (; re !== null; ) Cc(re);
}
function sp() {
  for (; re !== null && !If(); ) Cc(re);
}
function Cc(e) {
  var t = Nc(e.alternate, e, Te);
  (e.memoizedProps = e.pendingProps),
    t === null ? Pc(e) : (re = t),
    (Zi.current = null);
}
function Pc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = tp(n, t)), n !== null)) {
        (n.flags &= 32767), (re = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (oe = 6), (re = null);
        return;
      }
    } else if (((n = ep(n, t, Te)), n !== null)) {
      re = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function Ut(e, t, n) {
  var r = U,
    l = Re.transition;
  try {
    (Re.transition = null), (U = 1), ap(e, t, n, r);
  } finally {
    (Re.transition = l), (U = r);
  }
  return null;
}
function ap(e, t, n, r) {
  do _n();
  while (_t !== null);
  if (D & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Hf(e, o),
    e === ue && ((re = ue = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Hr ||
      ((Hr = !0),
      zc(il, function () {
        return _n(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Re.transition), (Re.transition = null);
    var i = U;
    U = 1;
    var u = D;
    (D |= 4),
      (Zi.current = null),
      rp(e, n),
      Sc(n, e),
      zd(Ho),
      (sl = !!Vo),
      (Ho = Vo = null),
      (e.current = n),
      lp(n),
      Mf(),
      (D = u),
      (U = i),
      (Re.transition = o);
  } else e.current = n;
  if (
    (Hr && ((Hr = !1), (_t = e), (xl = l)),
    (o = e.pendingLanes),
    o === 0 && (zt = null),
    Wf(n.stateNode),
    Pe(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (El) throw ((El = !1), (e = ai), (ai = null), e);
  return (
    xl & 1 && e.tag !== 0 && _n(),
    (o = e.pendingLanes),
    o & 1 ? (e === ci ? rr++ : ((rr = 0), (ci = e))) : (rr = 0),
    Rt(),
    null
  );
}
function _n() {
  if (_t !== null) {
    var e = oa(xl),
      t = Re.transition,
      n = U;
    try {
      if (((Re.transition = null), (U = 16 > e ? 16 : e), _t === null))
        var r = !1;
      else {
        if (((e = _t), (_t = null), (xl = 0), D & 6)) throw Error(k(331));
        var l = D;
        for (D |= 4, N = e.current; N !== null; ) {
          var o = N,
            i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var f = u[a];
                for (N = f; N !== null; ) {
                  var w = N;
                  switch (w.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tr(8, w, o);
                  }
                  var g = w.child;
                  if (g !== null) (g.return = w), (N = g);
                  else
                    for (; N !== null; ) {
                      w = N;
                      var m = w.sibling,
                        _ = w.return;
                      if ((gc(w), w === f)) {
                        N = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = _), (N = m);
                        break;
                      }
                      N = _;
                    }
                }
              }
              var E = o.alternate;
              if (E !== null) {
                var x = E.child;
                if (x !== null) {
                  E.child = null;
                  do {
                    var F = x.sibling;
                    (x.sibling = null), (x = F);
                  } while (x !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (N = i);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    tr(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (N = d);
                break e;
              }
              N = o.return;
            }
        }
        var s = e.current;
        for (N = s; N !== null; ) {
          i = N;
          var c = i.child;
          if (i.subtreeFlags & 2064 && c !== null) (c.return = i), (N = c);
          else
            e: for (i = s; N !== null; ) {
              if (((u = N), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dl(9, u);
                  }
                } catch (S) {
                  b(u, u.return, S);
                }
              if (u === i) {
                N = null;
                break e;
              }
              var h = u.sibling;
              if (h !== null) {
                (h.return = u.return), (N = h);
                break e;
              }
              N = u.return;
            }
        }
        if (
          ((D = l), Rt(), et && typeof et.onPostCommitFiberRoot == "function")
        )
          try {
            et.onPostCommitFiberRoot(Ll, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (Re.transition = t);
    }
  }
  return !1;
}
function ms(e, t, n) {
  (t = Nn(n, t)),
    (t = ic(e, t, 1)),
    (e = Nt(e, t, 1)),
    (t = we()),
    e !== null && (_r(e, 1, t), Pe(e, t));
}
function b(e, t, n) {
  if (e.tag === 3) ms(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ms(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (zt === null || !zt.has(r)))
        ) {
          (e = Nn(n, e)),
            (e = uc(t, e, 1)),
            (t = Nt(t, e, 1)),
            (e = we()),
            t !== null && (_r(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function cp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (ce & n) === n &&
      (oe === 4 || (oe === 3 && (ce & 130023424) === ce && 500 > ee() - qi)
        ? $t(e, 0)
        : (Ji |= n)),
    Pe(e, t);
}
function Tc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ir), (Ir <<= 1), !(Ir & 130023424) && (Ir = 4194304))
      : (t = 1));
  var n = we();
  (e = ft(e, t)), e !== null && (_r(e, t, n), Pe(e, n));
}
function fp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Tc(e, n);
}
function dp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Tc(e, n);
}
var Nc;
Nc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xe.current) Ee = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ee = !1), bd(e, t, n);
      Ee = !!(e.flags & 131072);
    }
  else (Ee = !1), Y && t.flags & 1048576 && Oa(t, ml, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      br(e, t), (e = t.pendingProps);
      var l = xn(t, he.current);
      kn(t, n), (l = Qi(null, t, r, e, l, n));
      var o = Ki();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ce(r) ? ((o = !0), pl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ui(t),
            (l.updater = Rl),
            (t.stateNode = l),
            (l._reactInternals = t),
            qo(t, r, e, n),
            (t = ti(null, t, r, !0, o, n)))
          : ((t.tag = 0), Y && o && Ii(t), ye(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (br(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = vp(r)),
          (e = $e(r, e)),
          l)
        ) {
          case 0:
            t = ei(null, t, r, e, n);
            break e;
          case 1:
            t = os(null, t, r, e, n);
            break e;
          case 11:
            t = rs(null, t, r, e, n);
            break e;
          case 14:
            t = ls(null, t, r, $e(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        ei(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        os(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((fc(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ja(e, t),
          yl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Nn(Error(k(423)), t)), (t = is(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Nn(Error(k(424)), t)), (t = is(e, t, r, n, l));
            break e;
          } else
            for (
              Ne = Tt(t.stateNode.containerInfo.firstChild),
                ze = t,
                Y = !0,
                Ke = null,
                n = Fa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Cn(), r === l)) {
            t = dt(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ua(t),
        e === null && Go(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        $o(r, l) ? (i = null) : o !== null && $o(r, o) && (t.flags |= 32),
        cc(e, t),
        ye(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Go(t), null;
    case 13:
      return dc(e, t, n);
    case 4:
      return (
        Bi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Pn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        rs(e, t, r, l, n)
      );
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          B(hl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ge(o.value, i)) {
            if (o.children === l.children && !xe.current) {
              t = dt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = st(-1, n & -n)), (a.tag = 2);
                      var f = o.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var w = f.pending;
                        w === null
                          ? (a.next = a)
                          : ((a.next = w.next), (w.next = a)),
                          (f.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Zo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Zo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ye(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        kn(t, n),
        (l = We(l)),
        (r = r(l)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = $e(r, t.pendingProps)),
        (l = $e(r.type, l)),
        ls(e, t, r, l, n)
      );
    case 15:
      return sc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        br(e, t),
        (t.tag = 1),
        Ce(r) ? ((e = !0), pl(t)) : (e = !1),
        kn(t, n),
        Wa(t, r, l),
        qo(t, r, l, n),
        ti(null, t, r, !0, e, n)
      );
    case 19:
      return pc(e, t, n);
    case 22:
      return ac(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function zc(e, t) {
  return ta(e, t);
}
function pp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
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
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function je(e, t, n, r) {
  return new pp(e, t, n, r);
}
function nu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function vp(e) {
  if (typeof e == "function") return nu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ki)) return 11;
    if (e === _i) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function nl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) nu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case ln:
        return Qt(n.children, l, o, t);
      case Si:
        (i = 8), (l |= 8);
        break;
      case _o:
        return (
          (e = je(12, n, t, l | 2)), (e.elementType = _o), (e.lanes = o), e
        );
      case Eo:
        return (e = je(13, n, t, l)), (e.elementType = Eo), (e.lanes = o), e;
      case xo:
        return (e = je(19, n, t, l)), (e.elementType = xo), (e.lanes = o), e;
      case Ds:
        return Ul(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Rs:
              i = 10;
              break e;
            case Ws:
              i = 9;
              break e;
            case ki:
              i = 11;
              break e;
            case _i:
              i = 14;
              break e;
            case gt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = je(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Qt(e, t, n, r) {
  return (e = je(7, e, r, t)), (e.lanes = n), e;
}
function Ul(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = Ds),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function go(e, t, n) {
  return (e = je(6, e, null, t)), (e.lanes = n), e;
}
function yo(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function mp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Jl(0)),
    (this.expirationTimes = Jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Jl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ru(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new mp(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = je(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ui(o),
    e
  );
}
function hp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: rn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Lc(e) {
  if (!e) return It;
  e = e._reactInternals;
  e: {
    if (qt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ce(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ce(n)) return za(e, n, t);
  }
  return t;
}
function Oc(e, t, n, r, l, o, i, u, a) {
  return (
    (e = ru(n, r, !0, e, l, o, i, u, a)),
    (e.context = Lc(null)),
    (n = e.current),
    (r = we()),
    (l = Lt(n)),
    (o = st(r, l)),
    (o.callback = t ?? null),
    Nt(n, o, l),
    (e.current.lanes = l),
    _r(e, l, r),
    Pe(e, r),
    e
  );
}
function Bl(e, t, n, r) {
  var l = t.current,
    o = we(),
    i = Lt(l);
  return (
    (n = Lc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = st(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Nt(l, t, i)),
    e !== null && (Xe(e, l, i, o), Zr(e, l, i)),
    i
  );
}
function Pl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function lu(e, t) {
  hs(e, t), (e = e.alternate) && hs(e, t);
}
function gp() {
  return null;
}
var Ac =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ou(e) {
  this._internalRoot = e;
}
Vl.prototype.render = ou.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Bl(e, t, null, null);
};
Vl.prototype.unmount = ou.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zt(function () {
      Bl(null, e, null, null);
    }),
      (t[ct] = null);
  }
};
function Vl(e) {
  this._internalRoot = e;
}
Vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = sa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wt.length && t !== 0 && t < wt[n].priority; n++);
    wt.splice(n, 0, e), n === 0 && ca(e);
  }
};
function iu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function gs() {}
function yp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var f = Pl(i);
        o.call(f);
      };
    }
    var i = Oc(t, r, e, 0, null, !1, !1, "", gs);
    return (
      (e._reactRootContainer = i),
      (e[ct] = i.current),
      dr(e.nodeType === 8 ? e.parentNode : e),
      Zt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var f = Pl(a);
      u.call(f);
    };
  }
  var a = ru(e, 0, !1, null, null, !1, !1, "", gs);
  return (
    (e._reactRootContainer = a),
    (e[ct] = a.current),
    dr(e.nodeType === 8 ? e.parentNode : e),
    Zt(function () {
      Bl(t, a, n, r);
    }),
    a
  );
}
function $l(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = Pl(i);
        u.call(a);
      };
    }
    Bl(t, i, e, l);
  } else i = yp(n, t, e, l, r);
  return Pl(i);
}
ia = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Yn(t.pendingLanes);
        n !== 0 &&
          (Ci(t, n | 1), Pe(t, ee()), !(D & 6) && ((zn = ee() + 500), Rt()));
      }
      break;
    case 13:
      Zt(function () {
        var r = ft(e, 1);
        if (r !== null) {
          var l = we();
          Xe(r, e, 1, l);
        }
      }),
        lu(e, 1);
  }
};
Pi = function (e) {
  if (e.tag === 13) {
    var t = ft(e, 134217728);
    if (t !== null) {
      var n = we();
      Xe(t, e, 134217728, n);
    }
    lu(e, 134217728);
  }
};
ua = function (e) {
  if (e.tag === 13) {
    var t = Lt(e),
      n = ft(e, t);
    if (n !== null) {
      var r = we();
      Xe(n, e, t, r);
    }
    lu(e, t);
  }
};
sa = function () {
  return U;
};
aa = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
Mo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((To(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ml(r);
            if (!l) throw Error(k(90));
            Us(r), To(r, l);
          }
        }
      }
      break;
    case "textarea":
      Vs(e, n);
      break;
    case "select":
      (t = n.value), t != null && gn(e, !!n.multiple, t, !1);
  }
};
Gs = bi;
Zs = Zt;
var wp = { usingClientEntryPoint: !1, Events: [xr, an, Ml, Ys, Xs, bi] },
  $n = {
    findFiberByHostInstance: Bt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Sp = {
    bundleType: $n.bundleType,
    version: $n.version,
    rendererPackageName: $n.rendererPackageName,
    rendererConfig: $n.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = bs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: $n.findFiberByHostInstance || gp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$r.isDisabled && $r.supportsFiber)
    try {
      (Ll = $r.inject(Sp)), (et = $r);
    } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wp;
Oe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!iu(t)) throw Error(k(200));
  return hp(e, t, null, n);
};
Oe.createRoot = function (e, t) {
  if (!iu(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = Ac;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ru(e, 1, !1, null, null, n, !1, r, l)),
    (e[ct] = t.current),
    dr(e.nodeType === 8 ? e.parentNode : e),
    new ou(t)
  );
};
Oe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = bs(t)), (e = e === null ? null : e.stateNode), e;
};
Oe.flushSync = function (e) {
  return Zt(e);
};
Oe.hydrate = function (e, t, n) {
  if (!Hl(t)) throw Error(k(200));
  return $l(null, e, t, !0, n);
};
Oe.hydrateRoot = function (e, t, n) {
  if (!iu(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Ac;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Oc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[ct] = t.current),
    dr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Vl(t);
};
Oe.render = function (e, t, n) {
  if (!Hl(t)) throw Error(k(200));
  return $l(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function (e) {
  if (!Hl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Zt(function () {
        $l(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ct] = null);
        });
      }),
      !0)
    : !1;
};
Oe.unstable_batchedUpdates = bi;
Oe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Hl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return $l(e, t, n, !1, r);
};
Oe.version = "18.2.0-next-9e3b772b8-20220608";
function Ic() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ic);
    } catch (e) {
      console.error(e);
    }
}
Ic(), (Os.exports = Oe);
var kp = Os.exports,
  ys = kp;
(So.createRoot = ys.createRoot), (So.hydrateRoot = ys.hydrateRoot);
var Mc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  ws = Et.createContext && Et.createContext(Mc),
  _p = ["attr", "size", "title"];
function Ep(e, t) {
  if (e == null) return {};
  var n = xp(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (l = 0; l < o.length; l++)
      (r = o[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function xp(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Tl() {
  return (
    (Tl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Tl.apply(this, arguments)
  );
}
function Ss(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Nl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ss(Object(n), !0).forEach(function (r) {
          Cp(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ss(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Cp(e, t, n) {
  return (
    (t = Pp(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Pp(e) {
  var t = Tp(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Tp(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jc(e) {
  return (
    e &&
    e.map((t, n) =>
      Et.createElement(t.tag, Nl({ key: n }, t.attr), jc(t.child))
    )
  );
}
function Pr(e) {
  return (t) =>
    Et.createElement(Np, Tl({ attr: Nl({}, e.attr) }, t), jc(e.child));
}
function Np(e) {
  var t = (n) => {
    var { attr: r, size: l, title: o } = e,
      i = Ep(e, _p),
      u = l || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      Et.createElement(
        "svg",
        Tl(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          i,
          {
            className: a,
            style: Nl(Nl({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && Et.createElement("title", null, o),
        e.children
      )
    );
  };
  return ws !== void 0
    ? Et.createElement(ws.Consumer, null, (n) => t(n))
    : t(Mc);
}
function zp(e) {
  return Pr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z",
        },
        child: [],
      },
    ],
  })(e);
}
function Lp(e) {
  return Pr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z",
        },
        child: [],
      },
    ],
  })(e);
}
function Op(e) {
  return Pr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ap(e) {
  return Pr({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ip(e) {
  return Pr({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z",
        },
        child: [],
      },
    ],
  })(e);
}
const Mp = "./assets/logo-2e8fd5c5.png",
  wo = 3e3,
  jp = 50,
  Rp = 1e3,
  Wp = () => {
    const [e, t] = hn.useState(0),
      [n, r] = hn.useState(wo);
    hn.useEffect(() => {
      const o = setInterval(() => {
        r((i) => Math.min(i + jp, wo));
      }, Rp);
      return () => clearInterval(o);
    }, []);
    const l = () => {
      if (n > 0) {
        t((i) => i + 100), r((i) => Math.max(i - 100, 0));
        const o = document.querySelector(".logo");
        o &&
          (o.classList.add("pop"),
          setTimeout(() => {
            o.classList.remove("pop");
          }, 300));
      }
    };
    return X.jsxs("div", {
      className: "app",
      children: [
        X.jsxs("h1", {
          className: "counter",
          children: [(e / 1e3).toFixed(3), " M"],
        }),
        X.jsxs("h3", {
          children: [
            " ",
            X.jsx(Ap, { className: "title" }),
            "",
            "Elite ",
            ">",
            " ",
          ],
        }),
        X.jsx("img", { src: Mp, alt: "Logo", className: "logo", onClick: l }),
        X.jsx("div", {
          className: "energy-bar",
          children: X.jsx("div", {
            className: "energy",
            style: { width: `${(n / wo) * 100}%` },
          }),
        }),
        X.jsx("b", { style: { color: "white" }, children: n }),
        X.jsxs("nav", {
          className: "bottom-nav",
          children: [
            X.jsxs("div", {
              className: "nav-item active",
              children: [
                X.jsx(Ip, { size: 24 }),
                X.jsx("span", { children: "Ref" }),
              ],
            }),
            X.jsxs("div", {
              className: "nav-item",
              children: [
                X.jsx(Op, { size: 24 }),
                X.jsx("span", { children: "Task" }),
              ],
            }),
            X.jsxs("div", {
              className: "nav-item",
              children: [
                X.jsx(Lp, { size: 24 }),
                X.jsx("span", { children: "Boost" }),
              ],
            }),
            X.jsxs("div", {
              className: "nav-item",
              children: [
                X.jsx(zp, { size: 24 }),
                X.jsx("span", { children: "Stats" }),
              ],
            }),
          ],
        }),
      ],
    });
  };
(function () {
  var e = {},
    t = "";
  try {
    t = location.hash.toString();
  } catch {}
  var n = a(t),
    r = d("initParams");
  if (r) for (var l in r) typeof n[l] > "u" && (n[l] = r[l]);
  F("initParams", n);
  var o = !1,
    i;
  try {
    if (((o = window.parent != null && window != window.parent), o)) {
      window.addEventListener("message", function (s) {
        if (s.source === window.parent) {
          try {
            var c = JSON.parse(s.data);
          } catch {
            return;
          }
          !c ||
            !c.eventType ||
            (c.eventType == "set_custom_style"
              ? (i.innerHTML = c.eventData)
              : m(c.eventType, c.eventData));
        }
      }),
        (i = document.createElement("style")),
        document.head.appendChild(i);
      try {
        window.parent.postMessage(
          JSON.stringify({ eventType: "iframe_ready" }),
          "*"
        );
      } catch {}
    }
  } catch {}
  function u(s) {
    try {
      return (s = s.replace(/\+/g, "%20")), decodeURIComponent(s);
    } catch {
      return s;
    }
  }
  function a(s) {
    s = s.replace(/^#/, "");
    var c = {};
    if (!s.length) return c;
    if (s.indexOf("=") < 0 && s.indexOf("?") < 0) return (c._path = u(s)), c;
    var h = s.indexOf("?");
    if (h >= 0) {
      var S = s.substr(0, h);
      (c._path = u(S)), (s = s.substr(h + 1));
    }
    var C = f(s);
    for (var P in C) c[P] = C[P];
    return c;
  }
  function f(s) {
    var c = {};
    if (!s.length) return c;
    var h = s.split("&"),
      S,
      C,
      P,
      L;
    for (S = 0; S < h.length; S++)
      (C = h[S].split("=")),
        (P = u(C[0])),
        (L = C[1] == null ? null : u(C[1])),
        (c[P] = L);
    return c;
  }
  function w(s, c) {
    var h = s.indexOf("#");
    if (h < 0) return s + "#" + c;
    var S = s.substr(h + 1);
    return S.indexOf("=") >= 0 || S.indexOf("?") >= 0
      ? s + "&" + c
      : S.length > 0
      ? s + "?" + c
      : s + c;
  }
  function g(s, c, h) {
    if (
      (c || (c = function () {}),
      h === void 0 && (h = ""),
      window.TelegramWebviewProxy !== void 0)
    )
      TelegramWebviewProxy.postEvent(s, JSON.stringify(h)), c();
    else if (window.external && "notify" in window.external)
      window.external.notify(JSON.stringify({ eventType: s, eventData: h })),
        c();
    else if (o)
      try {
        var S = "https://web.telegram.org";
        (S = "*"),
          window.parent.postMessage(
            JSON.stringify({ eventType: s, eventData: h }),
            S
          ),
          n.tgWebAppDebug &&
            console.log("[Telegram.WebView] postEvent via postMessage", s, h),
          c();
      } catch (C) {
        c(C);
      }
    else
      n.tgWebAppDebug && console.log("[Telegram.WebView] postEvent", s, h),
        c({ notAvailable: !0 });
  }
  function m(s, c) {
    _(s, function (h) {
      h(s, c);
    });
  }
  function _(s, c) {
    var h = e[s];
    if (!(h === void 0 || !h.length))
      for (var S = 0; S < h.length; S++)
        try {
          c(h[S]);
        } catch {}
  }
  function E(s, c) {
    e[s] === void 0 && (e[s] = []);
    var h = e[s].indexOf(c);
    h === -1 && e[s].push(c);
  }
  function x(s, c) {
    if (e[s] !== void 0) {
      var h = e[s].indexOf(c);
      h !== -1 && e[s].splice(h, 1);
    }
  }
  function F(s, c) {
    try {
      return (
        window.sessionStorage.setItem("__telegram__" + s, JSON.stringify(c)), !0
      );
    } catch {}
    return !1;
  }
  function d(s) {
    try {
      return JSON.parse(window.sessionStorage.getItem("__telegram__" + s));
    } catch {}
    return null;
  }
  window.Telegram || (window.Telegram = {}),
    (window.Telegram.WebView = {
      initParams: n,
      isIframe: o,
      onEvent: E,
      offEvent: x,
      postEvent: g,
      receiveEvent: m,
      callEventCallbacks: _,
    }),
    (window.Telegram.Utils = {
      urlSafeDecode: u,
      urlParseQueryString: f,
      urlParseHashParams: a,
      urlAppendHashParams: w,
      sessionStorageSet: F,
      sessionStorageGet: d,
    }),
    (window.TelegramGameProxy_receiveEvent = m),
    (window.TelegramGameProxy = { receiveEvent: m });
})();
(function () {
  var e = window.Telegram.Utils,
    t = window.Telegram.WebView,
    n = t.initParams,
    r = t.isIframe,
    l = {},
    o = "",
    i = {},
    u = {},
    a = "light",
    f = "6.0",
    w = "unknown";
  if (n.tgWebAppData && n.tgWebAppData.length) {
    (o = n.tgWebAppData), (i = e.urlParseQueryString(o));
    for (var g in i) {
      var m = i[g];
      try {
        ((m.substr(0, 1) == "{" && m.substr(-1) == "}") ||
          (m.substr(0, 1) == "[" && m.substr(-1) == "]")) &&
          (i[g] = JSON.parse(m));
      } catch {}
    }
  }
  if (n.tgWebAppThemeParams && n.tgWebAppThemeParams.length) {
    var _ = n.tgWebAppThemeParams;
    try {
      var E = JSON.parse(_);
      E && V(E);
    } catch {}
  }
  var E = e.sessionStorageGet("themeParams");
  E && V(E),
    n.tgWebAppVersion && (f = n.tgWebAppVersion),
    n.tgWebAppPlatform && (w = n.tgWebAppPlatform);
  function x(p, v) {
    v.theme_params &&
      (V(v.theme_params),
      window.Telegram.WebApp.MainButton.setParams({}),
      Ue(),
      S("themeChanged"));
  }
  var F = window.innerHeight;
  function d(p, v) {
    v.height && (window.removeEventListener("resize", s), bt(v));
  }
  function s(p) {
    F != window.innerHeight &&
      ((F = window.innerHeight), S("viewportChanged", { isStateStable: !0 }));
  }
  function c(p) {
    if (!(p.metaKey || p.ctrlKey)) {
      for (var v = p.target; v.tagName != "A" && v.parentNode; )
        v = v.parentNode;
      v.tagName == "A" &&
        v.target != "_blank" &&
        (v.protocol == "http:" || v.protocol == "https:") &&
        v.hostname == "t.me" &&
        (l.openTgLink(v.href), p.preventDefault());
    }
  }
  function h(p) {
    return p.toString().replace(/^\s+|\s+$/g, "");
  }
  function S(p) {
    var v = Array.prototype.slice.call(arguments);
    (p = v.shift()),
      t.callEventCallbacks("webview:" + p, function (y) {
        y.apply(l, v);
      });
  }
  function C(p, v) {
    t.onEvent("webview:" + p, v);
  }
  function P(p, v) {
    t.offEvent("webview:" + p, v);
  }
  function L(p, v) {
    var y = document.documentElement;
    y && y.style && y.style.setProperty && y.style.setProperty("--tg-" + p, v);
  }
  function V(p) {
    p.bg_color == "#1c1c1d" &&
      p.bg_color == p.secondary_bg_color &&
      (p.secondary_bg_color = "#2c2c2e");
    var v;
    for (var y in p)
      (v = nt(p[y])) &&
        ((u[y] = v),
        y == "bg_color" &&
          ((a = rt(v) ? "dark" : "light"), L("color-scheme", a)),
        (y = "theme-" + y.split("_").join("-")),
        L(y, v));
    e.sessionStorageSet("themeParams", u);
  }
  function j(p) {
    for (
      var v = "",
        y = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        z = y.length,
        R = 0;
      R < p;
      R++
    )
      v += y[Math.floor(Math.random() * z)];
    return v;
  }
  var se = !1,
    Fe = !1,
    vt = !0;
  function bt(p) {
    typeof p < "u" &&
      ((vt = !!p.is_expanded),
      (se = p.height),
      p.is_state_stable && (Fe = p.height),
      S("viewportChanged", { isStateStable: !!p.is_state_stable }));
    var v, y;
    se !== !1
      ? (v = se - Be + "px")
      : (v = Be ? "calc(100vh - " + Be + "px)" : "100vh"),
      Fe !== !1
        ? (y = Fe - Be + "px")
        : (y = Be ? "calc(100vh - " + Be + "px)" : "100vh"),
      L("viewport-height", v),
      L("viewport-stable-height", y);
  }
  var In = !1;
  function Mn(p) {
    if (!ge("6.2")) {
      console.warn(
        "[Telegram.WebApp] Closing confirmation is not supported in version " +
          f
      );
      return;
    }
    (In = !!p),
      t.postEvent("web_app_setup_closing_behavior", !1, {
        need_confirmation: In,
      });
  }
  var en = "bg_color";
  function T() {
    return u[en] || null;
  }
  function I(p) {
    if (!ge("6.1")) {
      console.warn(
        "[Telegram.WebApp] Header color is not supported in version " + f
      );
      return;
    }
    var v;
    if (
      (p == "bg_color" || p == "secondary_bg_color"
        ? (v = p)
        : ((v = nt(p)),
          u.bg_color && u.bg_color == v
            ? (v = "bg_color")
            : u.secondary_bg_color && u.secondary_bg_color == v
            ? (v = "secondary_bg_color")
            : (v = !1)),
      v != "bg_color" && v != "secondary_bg_color")
    )
      throw (
        (console.error(
          "[Telegram.WebApp] Header color key should be one of Telegram.WebApp.themeParams.bg_color, Telegram.WebApp.themeParams.secondary_bg_color, 'bg_color', 'secondary_bg_color'",
          p
        ),
        Error("WebAppHeaderColorKeyInvalid"))
      );
    (en = v), t.postEvent("web_app_set_header_color", !1, { color_key: v });
  }
  var M = "bg_color";
  function Q() {
    return M == "secondary_bg_color"
      ? u.secondary_bg_color
      : M == "bg_color"
      ? u.bg_color
      : M;
  }
  function te(p) {
    if (!ge("6.1")) {
      console.warn(
        "[Telegram.WebApp] Background color is not supported in version " + f
      );
      return;
    }
    var v;
    if (p == "bg_color" || p == "secondary_bg_color") v = p;
    else if (((v = nt(p)), !v))
      throw (
        (console.error(
          "[Telegram.WebApp] Background color format is invalid",
          p
        ),
        Error("WebAppBackgroundColorInvalid"))
      );
    (M = v), Ue();
  }
  var Wt = null;
  function Ue() {
    var p = Q();
    Wt != p &&
      ((Wt = p), t.postEvent("web_app_set_background_color", !1, { color: p }));
  }
  function nt(p) {
    p += "";
    var v;
    if ((v = /^\s*#([0-9a-f]{6})\s*$/i.exec(p)))
      return "#" + v[1].toLowerCase();
    if ((v = /^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(p)))
      return ("#" + v[1] + v[1] + v[2] + v[2] + v[3] + v[3]).toLowerCase();
    if (
      (v =
        /^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(
          p
        ))
    ) {
      var y = parseInt(v[1]),
        z = parseInt(v[2]),
        R = parseInt(v[3]);
      return (
        (y = (y < 16 ? "0" : "") + y.toString(16)),
        (z = (z < 16 ? "0" : "") + z.toString(16)),
        (R = (R < 16 ? "0" : "") + R.toString(16)),
        "#" + y + z + R
      );
    }
    return !1;
  }
  function rt(p) {
    (p = p.replace(/[\s#]/g, "")),
      p.length == 3 && (p = p[0] + p[0] + p[1] + p[1] + p[2] + p[2]);
    var v = parseInt(p.substr(0, 2), 16),
      y = parseInt(p.substr(2, 2), 16),
      z = parseInt(p.substr(4, 2), 16),
      R = Math.sqrt(0.299 * (v * v) + 0.587 * (y * y) + 0.114 * (z * z));
    return R < 120;
  }
  function tn(p, v) {
    typeof p != "string" && (p = ""),
      typeof v != "string" && (v = ""),
      (p = p.replace(/^\s+|\s+$/g, "").split(".")),
      (v = v.replace(/^\s+|\s+$/g, "").split("."));
    var y = Math.max(p.length, v.length),
      z,
      R,
      ne;
    for (z = 0; z < y; z++)
      if (((R = parseInt(p[z]) || 0), (ne = parseInt(v[z]) || 0), R != ne))
        return R > ne ? 1 : -1;
    return 0;
  }
  function ge(p) {
    return tn(f, p) >= 0;
  }
  function Rc(p) {
    if (window.Blob)
      try {
        return new Blob([p]).size;
      } catch {}
    for (var v = p.length, y = p.length - 1; y >= 0; y--) {
      var z = p.charCodeAt(y);
      z > 127 && z <= 2047 ? v++ : z > 2047 && z <= 65535 && (v += 2),
        z >= 56320 && z <= 57343 && y--;
    }
    return v;
  }
  var Wc = (function () {
      var p = !1,
        v = {};
      Object.defineProperty(v, "isVisible", {
        set: function (K) {
          q({ is_visible: K });
        },
        get: function () {
          return p;
        },
        enumerable: !0,
      });
      var y = null;
      t.onEvent("back_button_pressed", z);
      function z() {
        S("backButtonClicked");
      }
      function R() {
        return { is_visible: p };
      }
      function ne(K) {
        return typeof K > "u" && (K = R()), JSON.stringify(K);
      }
      function A() {
        return ge("6.1")
          ? !0
          : (console.warn(
              "[Telegram.WebApp] BackButton is not supported in version " + f
            ),
            !1);
      }
      function Ve() {
        var K = R(),
          de = ne(K);
        y !== de && ((y = de), t.postEvent("web_app_setup_back_button", !1, K));
      }
      function q(K) {
        return (
          A() && (typeof K.is_visible < "u" && (p = !!K.is_visible), Ve()), v
        );
      }
      return (
        (v.onClick = function (K) {
          return A() && C("backButtonClicked", K), v;
        }),
        (v.offClick = function (K) {
          return A() && P("backButtonClicked", K), v;
        }),
        (v.show = function () {
          return q({ is_visible: !0 });
        }),
        (v.hide = function () {
          return q({ is_visible: !1 });
        }),
        v
      );
    })(),
    Be = 0,
    Dc = (function () {
      var p = !1,
        v = !0,
        y = !1,
        z = "CONTINUE",
        R = !1,
        ne = !1,
        A = {};
      Object.defineProperty(A, "text", {
        set: function (O) {
          A.setParams({ text: O });
        },
        get: function () {
          return z;
        },
        enumerable: !0,
      }),
        Object.defineProperty(A, "color", {
          set: function (O) {
            A.setParams({ color: O });
          },
          get: function () {
            return R || u.button_color || "#2481cc";
          },
          enumerable: !0,
        }),
        Object.defineProperty(A, "textColor", {
          set: function (O) {
            A.setParams({ text_color: O });
          },
          get: function () {
            return ne || u.button_text_color || "#ffffff";
          },
          enumerable: !0,
        }),
        Object.defineProperty(A, "isVisible", {
          set: function (O) {
            A.setParams({ is_visible: O });
          },
          get: function () {
            return p;
          },
          enumerable: !0,
        }),
        Object.defineProperty(A, "isProgressVisible", {
          get: function () {
            return y;
          },
          enumerable: !0,
        }),
        Object.defineProperty(A, "isActive", {
          set: function (O) {
            A.setParams({ is_active: O });
          },
          get: function () {
            return v;
          },
          enumerable: !0,
        });
      var Ve = null;
      t.onEvent("main_button_pressed", mt);
      var q = null,
        K = {};
      if (n.tgWebAppDebug) {
        (q = document.createElement("tg-main-button")),
          (K = {
            font: "600 14px/18px sans-serif",
            display: "none",
            width: "100%",
            height: "48px",
            borderRadius: "0",
            background: "no-repeat right center",
            position: "fixed",
            left: "0",
            right: "0",
            bottom: "0",
            margin: "0",
            padding: "15px 20px",
            textAlign: "center",
            boxSizing: "border-box",
            zIndex: "10000",
          });
        for (var de in K) q.style[de] = K[de];
        document.addEventListener("DOMContentLoaded", function O(Ze) {
          document.removeEventListener("DOMContentLoaded", O),
            document.body.appendChild(q),
            q.addEventListener("click", mt, !1);
        });
      }
      function mt() {
        v && S("mainButtonClicked");
      }
      function uu() {
        var O = A.color,
          Ze = A.textColor;
        return p
          ? {
              is_visible: !0,
              is_active: v,
              is_progress_visible: y,
              text: z,
              color: O,
              text_color: Ze,
            }
          : { is_visible: !1 };
      }
      function Kc(O) {
        return typeof O > "u" && (O = uu()), JSON.stringify(O);
      }
      function Ql() {
        var O = uu(),
          Ze = Kc(O);
        Ve !== Ze &&
          ((Ve = Ze),
          t.postEvent("web_app_setup_main_button", !1, O),
          n.tgWebAppDebug && Yc(O));
      }
      function Yc(O) {
        O.is_visible
          ? ((q.style.display = "block"),
            (Be = 48),
            (q.style.opacity = O.is_active ? "1" : "0.8"),
            (q.style.cursor = O.is_active ? "pointer" : "auto"),
            (q.disabled = !O.is_active),
            (q.innerText = O.text),
            (q.style.backgroundImage = O.is_progress_visible
              ? "url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewport%3D%220%200%2048%2048%22%20width%3D%2248px%22%20height%3D%2248px%22%3E%3Ccircle%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222.25%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22%20stroke-dashoffset%3D%22106%22%20r%3D%229%22%20stroke-dasharray%3D%2256.52%22%20rotate%3D%22-90%22%3E%3Canimate%20attributeName%3D%22stroke-dashoffset%22%20attributeType%3D%22XML%22%20dur%3D%22360s%22%20from%3D%220%22%20to%3D%2212500%22%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%3CanimateTransform%20attributeName%3D%22transform%22%20attributeType%3D%22XML%22%20type%3D%22rotate%22%20dur%3D%221s%22%20from%3D%22-90%2024%2024%22%20to%3D%22630%2024%2024%22%20repeatCount%3D%22indefinite%22%3E%3C%2FanimateTransform%3E%3C%2Fcircle%3E%3C%2Fsvg%3E')"
              : "none"),
            (q.style.backgroundColor = O.color),
            (q.style.color = O.text_color))
          : ((q.style.display = "none"), (Be = 0)),
          document.documentElement &&
            ((document.documentElement.style.boxSizing = "border-box"),
            (document.documentElement.style.paddingBottom = Be + "px")),
          bt();
      }
      function Xc(O) {
        if (typeof O.text < "u") {
          var Ze = h(O.text);
          if (!Ze.length)
            throw (
              (console.error(
                "[Telegram.WebApp] Main button text is required",
                O.text
              ),
              Error("WebAppMainButtonParamInvalid"))
            );
          if (Ze.length > 64)
            throw (
              (console.error(
                "[Telegram.WebApp] Main button text is too long",
                Ze
              ),
              Error("WebAppMainButtonParamInvalid"))
            );
          z = Ze;
        }
        if (typeof O.color < "u")
          if (O.color === !1 || O.color === null) R = !1;
          else {
            var su = nt(O.color);
            if (!su)
              throw (
                (console.error(
                  "[Telegram.WebApp] Main button color format is invalid",
                  O.color
                ),
                Error("WebAppMainButtonParamInvalid"))
              );
            R = su;
          }
        if (typeof O.text_color < "u")
          if (O.text_color === !1 || O.text_color === null) ne = !1;
          else {
            var au = nt(O.text_color);
            if (!au)
              throw (
                (console.error(
                  "[Telegram.WebApp] Main button text color format is invalid",
                  O.text_color
                ),
                Error("WebAppMainButtonParamInvalid"))
              );
            ne = au;
          }
        if (typeof O.is_visible < "u") {
          if (O.is_visible && !A.text.length)
            throw (
              (console.error("[Telegram.WebApp] Main button text is required"),
              Error("WebAppMainButtonParamInvalid"))
            );
          p = !!O.is_visible;
        }
        return typeof O.is_active < "u" && (v = !!O.is_active), Ql(), A;
      }
      return (
        (A.setText = function (O) {
          return A.setParams({ text: O });
        }),
        (A.onClick = function (O) {
          return C("mainButtonClicked", O), A;
        }),
        (A.offClick = function (O) {
          return P("mainButtonClicked", O), A;
        }),
        (A.show = function () {
          return A.setParams({ is_visible: !0 });
        }),
        (A.hide = function () {
          return A.setParams({ is_visible: !1 });
        }),
        (A.enable = function () {
          return A.setParams({ is_active: !0 });
        }),
        (A.disable = function () {
          return A.setParams({ is_active: !1 });
        }),
        (A.showProgress = function (O) {
          return (v = !!O), (y = !0), Ql(), A;
        }),
        (A.hideProgress = function () {
          return A.isActive || (v = !0), (y = !1), Ql(), A;
        }),
        (A.setParams = Xc),
        A
      );
    })();
  function Fc() {
    S("settingsButtonClicked");
  }
  t.onEvent("settings_button_pressed", Fc);
  var Uc = (function () {
      var p = {};
      function v(y) {
        if (!ge("6.1"))
          return (
            console.warn(
              "[Telegram.WebApp] HapticFeedback is not supported in version " +
                f
            ),
            p
          );
        if (y.type == "impact") {
          if (
            y.impact_style != "light" &&
            y.impact_style != "medium" &&
            y.impact_style != "heavy" &&
            y.impact_style != "rigid" &&
            y.impact_style != "soft"
          )
            throw (
              (console.error(
                "[Telegram.WebApp] Haptic impact style is invalid",
                y.impact_style
              ),
              Error("WebAppHapticImpactStyleInvalid"))
            );
        } else if (y.type == "notification") {
          if (
            y.notification_type != "error" &&
            y.notification_type != "success" &&
            y.notification_type != "warning"
          )
            throw (
              (console.error(
                "[Telegram.WebApp] Haptic notification type is invalid",
                y.notification_type
              ),
              Error("WebAppHapticNotificationTypeInvalid"))
            );
        } else if (y.type != "selection_change")
          throw (
            (console.error(
              "[Telegram.WebApp] Haptic feedback type is invalid",
              y.type
            ),
            Error("WebAppHapticFeedbackTypeInvalid"))
          );
        return t.postEvent("web_app_trigger_haptic_feedback", !1, y), p;
      }
      return (
        (p.impactOccurred = function (y) {
          return v({ type: "impact", impact_style: y });
        }),
        (p.notificationOccurred = function (y) {
          return v({ type: "notification", notification_type: y });
        }),
        (p.selectionChanged = function () {
          return v({ type: "selection_change" });
        }),
        p
      );
    })(),
    jn = {};
  function Bc(p, v) {
    if (v.slug && jn[v.slug]) {
      var y = jn[v.slug];
      delete jn[v.slug],
        y.callback && y.callback(v.status),
        S("invoiceClosed", { url: y.url, status: v.status });
    }
  }
  var Rn = !1;
  function Vc(p, v) {
    if (Rn) {
      var y = Rn;
      Rn = !1;
      var z = null;
      typeof v.button_id < "u" && (z = v.button_id),
        y.callback && y.callback(z),
        S("popupClosed", { button_id: z });
    }
  }
  var Dt = !1;
  function Hc(p, v) {
    if (Dt) {
      var y = Dt,
        z = null;
      typeof v.data < "u" && (z = v.data),
        y.callback &&
          y.callback(z) &&
          ((Dt = !1), t.postEvent("web_app_close_scan_qr_popup", !1)),
        S("qrTextReceived", { data: z });
    }
  }
  function $c(p, v) {
    Dt = !1;
  }
  var Tr = {};
  function Qc(p, v) {
    if (v.req_id && Tr[v.req_id]) {
      var y = Tr[v.req_id];
      delete Tr[v.req_id];
      var z = null;
      typeof v.data < "u" && (z = v.data),
        y.callback && y.callback(z),
        S("clipboardTextReceived", { data: z });
    }
  }
  window.Telegram || (window.Telegram = {}),
    Object.defineProperty(l, "initData", {
      get: function () {
        return o;
      },
      enumerable: !0,
    }),
    Object.defineProperty(l, "initDataUnsafe", {
      get: function () {
        return i;
      },
      enumerable: !0,
    }),
    Object.defineProperty(l, "version", {
      get: function () {
        return f;
      },
      enumerable: !0,
    }),
    Object.defineProperty(l, "platform", {
      get: function () {
        return w;
      },
      enumerable: !0,
    }),
    Object.defineProperty(l, "colorScheme", {
      get: function () {
        return a;
      },
      enumerable: !0,
    }),
    Object.defineProperty(l, "themeParams", {
      get: function () {
        return u;
      },
      enumerable: !0,
    }),
    Object.defineProperty(l, "isExpanded", {
      get: function () {
        return vt;
      },
      enumerable: !0,
    }),
    Object.defineProperty(l, "viewportHeight", {
      get: function () {
        return (se === !1 ? window.innerHeight : se) - Be;
      },
      enumerable: !0,
    }),
    Object.defineProperty(l, "viewportStableHeight", {
      get: function () {
        return (Fe === !1 ? window.innerHeight : Fe) - Be;
      },
      enumerable: !0,
    }),
    Object.defineProperty(l, "isClosingConfirmationEnabled", {
      set: function (p) {
        Mn(p);
      },
      get: function () {
        return In;
      },
      enumerable: !0,
    }),
    Object.defineProperty(l, "headerColor", {
      set: function (p) {
        I(p);
      },
      get: function () {
        return T();
      },
      enumerable: !0,
    }),
    Object.defineProperty(l, "backgroundColor", {
      set: function (p) {
        te(p);
      },
      get: function () {
        return Q();
      },
      enumerable: !0,
    }),
    Object.defineProperty(l, "BackButton", { value: Wc, enumerable: !0 }),
    Object.defineProperty(l, "MainButton", { value: Dc, enumerable: !0 }),
    Object.defineProperty(l, "HapticFeedback", { value: Uc, enumerable: !0 }),
    (l.setHeaderColor = function (p) {
      l.headerColor = p;
    }),
    (l.setBackgroundColor = function (p) {
      l.backgroundColor = p;
    }),
    (l.enableClosingConfirmation = function () {
      l.isClosingConfirmationEnabled = !0;
    }),
    (l.disableClosingConfirmation = function () {
      l.isClosingConfirmationEnabled = !1;
    }),
    (l.isVersionAtLeast = function (p) {
      return ge(p);
    }),
    (l.onEvent = function (p, v) {
      C(p, v);
    }),
    (l.offEvent = function (p, v) {
      P(p, v);
    }),
    (l.sendData = function (p) {
      if (!p || !p.length)
        throw (
          (console.error("[Telegram.WebApp] Data is required", p),
          Error("WebAppDataInvalid"))
        );
      if (Rc(p) > 4096)
        throw (
          (console.error("[Telegram.WebApp] Data is too long", p),
          Error("WebAppDataInvalid"))
        );
      t.postEvent("web_app_data_send", !1, { data: p });
    }),
    (l.switchInlineQuery = function (p, v) {
      if (!ge("6.6"))
        throw (
          (console.error(
            "[Telegram.WebApp] Method switchInlineQuery is not supported in version " +
              f
          ),
          Error("WebAppMethodUnsupported"))
        );
      if (!n.tgWebAppBotInline)
        throw (
          (console.error(
            "[Telegram.WebApp] Inline mode is disabled for this bot. Read more about inline mode: https://core.telegram.org/bots/inline"
          ),
          Error("WebAppInlineModeDisabled"))
        );
      if (((p = p || ""), p.length > 256))
        throw (
          (console.error("[Telegram.WebApp] Inline query is too long", p),
          Error("WebAppInlineQueryInvalid"))
        );
      var y = [];
      if (v) {
        if (!Array.isArray(v))
          throw (
            (console.error(
              "[Telegram.WebApp] Choose chat types should be an array",
              v
            ),
            Error("WebAppInlineChooseChatTypesInvalid"))
          );
        for (
          var z = { users: 1, bots: 1, groups: 1, channels: 1 }, R = 0;
          R < v.length;
          R++
        ) {
          var ne = v[R];
          if (!z[ne])
            throw (
              (console.error(
                "[Telegram.WebApp] Choose chat type is invalid",
                ne
              ),
              Error("WebAppInlineChooseChatTypeInvalid"))
            );
          z[ne] != 2 && ((z[ne] = 2), y.push(ne));
        }
      }
      t.postEvent("web_app_switch_inline_query", !1, {
        query: p,
        chat_types: y,
      });
    }),
    (l.openLink = function (z, v) {
      var y = document.createElement("A");
      if (((y.href = z), y.protocol != "http:" && y.protocol != "https:"))
        throw (
          (console.error("[Telegram.WebApp] Url protocol is not supported", z),
          Error("WebAppTgUrlInvalid"))
        );
      var z = y.href;
      (v = v || {}),
        ge("6.1")
          ? t.postEvent("web_app_open_link", !1, {
              url: z,
              try_instant_view: ge("6.4") && !!v.try_instant_view,
            })
          : window.open(z, "_blank");
    }),
    (l.openTelegramLink = function (p) {
      var v = document.createElement("A");
      if (((v.href = p), v.protocol != "http:" && v.protocol != "https:"))
        throw (
          (console.error("[Telegram.WebApp] Url protocol is not supported", p),
          Error("WebAppTgUrlInvalid"))
        );
      if (v.hostname != "t.me")
        throw (
          (console.error("[Telegram.WebApp] Url host is not supported", p),
          Error("WebAppTgUrlInvalid"))
        );
      var y = v.pathname + v.search;
      r || ge("6.1")
        ? t.postEvent("web_app_open_tg_link", !1, { path_full: y })
        : (location.href = "https://t.me" + y);
    }),
    (l.openInvoice = function (p, v) {
      var y = document.createElement("A"),
        z,
        R;
      if (
        ((y.href = p),
        (y.protocol != "http:" && y.protocol != "https:") ||
          y.hostname != "t.me" ||
          !(z = y.pathname.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/)) ||
          !(R = z[2]))
      )
        throw (
          (console.error("[Telegram.WebApp] Invoice url is invalid", p),
          Error("WebAppInvoiceUrlInvalid"))
        );
      if (!ge("6.1"))
        throw (
          (console.error(
            "[Telegram.WebApp] Method openInvoice is not supported in version " +
              f
          ),
          Error("WebAppMethodUnsupported"))
        );
      if (jn[R])
        throw (
          (console.error("[Telegram.WebApp] Invoice is already opened"),
          Error("WebAppInvoiceOpened"))
        );
      (jn[R] = { url: p, callback: v }),
        t.postEvent("web_app_open_invoice", !1, { slug: R });
    }),
    (l.showPopup = function (p, v) {
      if (!ge("6.2"))
        throw (
          (console.error(
            "[Telegram.WebApp] Method showPopup is not supported in version " +
              f
          ),
          Error("WebAppMethodUnsupported"))
        );
      if (Rn)
        throw (
          (console.error("[Telegram.WebApp] Popup is already opened"),
          Error("WebAppPopupOpened"))
        );
      var y = "",
        z = "",
        R = [],
        ne = {};
      if (typeof p.title < "u") {
        if (((y = h(p.title)), y.length > 64))
          throw (
            (console.error("[Telegram.WebApp] Popup title is too long", y),
            Error("WebAppPopupParamInvalid"))
          );
        y.length > 0 && (ne.title = y);
      }
      if ((typeof p.message < "u" && (z = h(p.message)), !z.length))
        throw (
          (console.error(
            "[Telegram.WebApp] Popup message is required",
            p.message
          ),
          Error("WebAppPopupParamInvalid"))
        );
      if (z.length > 256)
        throw (
          (console.error("[Telegram.WebApp] Popup message is too long", z),
          Error("WebAppPopupParamInvalid"))
        );
      if (((ne.message = z), typeof p.buttons < "u")) {
        if (!Array.isArray(p.buttons))
          throw (
            (console.error(
              "[Telegram.WebApp] Popup buttons should be an array",
              p.buttons
            ),
            Error("WebAppPopupParamInvalid"))
          );
        for (var A = 0; A < p.buttons.length; A++) {
          var Ve = p.buttons[A],
            q = {},
            K = "";
          if (typeof Ve.id < "u" && ((K = Ve.id.toString()), K.length > 64))
            throw (
              (console.error(
                "[Telegram.WebApp] Popup button id is too long",
                K
              ),
              Error("WebAppPopupParamInvalid"))
            );
          q.id = K;
          var de = Ve.type;
          if (
            (typeof de > "u" && (de = "default"),
            (q.type = de),
            !(de == "ok" || de == "close" || de == "cancel"))
          )
            if (de == "default" || de == "destructive") {
              var mt = "";
              if ((typeof Ve.text < "u" && (mt = h(Ve.text)), !mt.length))
                throw (
                  (console.error(
                    "[Telegram.WebApp] Popup button text is required for type " +
                      de,
                    Ve.text
                  ),
                  Error("WebAppPopupParamInvalid"))
                );
              if (mt.length > 64)
                throw (
                  (console.error(
                    "[Telegram.WebApp] Popup button text is too long",
                    mt
                  ),
                  Error("WebAppPopupParamInvalid"))
                );
              q.text = mt;
            } else
              throw (
                (console.error(
                  "[Telegram.WebApp] Popup button type is invalid",
                  de
                ),
                Error("WebAppPopupParamInvalid"))
              );
          R.push(q);
        }
      } else R.push({ id: "", type: "close" });
      if (R.length < 1)
        throw (
          (console.error(
            "[Telegram.WebApp] Popup should have at least one button"
          ),
          Error("WebAppPopupParamInvalid"))
        );
      if (R.length > 3)
        throw (
          (console.error(
            "[Telegram.WebApp] Popup should not have more than 3 buttons"
          ),
          Error("WebAppPopupParamInvalid"))
        );
      (ne.buttons = R),
        (Rn = { callback: v }),
        t.postEvent("web_app_open_popup", !1, ne);
    }),
    (l.showAlert = function (p, v) {
      l.showPopup(
        { message: p },
        v
          ? function () {
              v();
            }
          : null
      );
    }),
    (l.showConfirm = function (p, v) {
      l.showPopup(
        { message: p, buttons: [{ type: "ok", id: "ok" }, { type: "cancel" }] },
        v
          ? function (y) {
              v(y == "ok");
            }
          : null
      );
    }),
    (l.showScanQrPopup = function (p, v) {
      if (!ge("6.4"))
        throw (
          (console.error(
            "[Telegram.WebApp] Method showScanQrPopup is not supported in version " +
              f
          ),
          Error("WebAppMethodUnsupported"))
        );
      if (Dt)
        throw (
          (console.error("[Telegram.WebApp] Popup is already opened"),
          Error("WebAppScanQrPopupOpened"))
        );
      var y = "",
        z = {};
      if (typeof p.text < "u") {
        if (((y = h(p.text)), y.length > 64))
          throw (
            (console.error(
              "[Telegram.WebApp] Scan QR popup text is too long",
              y
            ),
            Error("WebAppScanQrPopupParamInvalid"))
          );
        y.length > 0 && (z.text = y);
      }
      (Dt = { callback: v }), t.postEvent("web_app_open_scan_qr_popup", !1, z);
    }),
    (l.closeScanQrPopup = function () {
      if (!ge("6.4"))
        throw (
          (console.error(
            "[Telegram.WebApp] Method closeScanQrPopup is not supported in version " +
              f
          ),
          Error("WebAppMethodUnsupported"))
        );
      (Dt = !1), t.postEvent("web_app_close_scan_qr_popup", !1);
    }),
    (l.readTextFromClipboard = function (p) {
      if (!ge("6.4"))
        throw (
          (console.error(
            "[Telegram.WebApp] Method readTextFromClipboard is not supported in version " +
              f
          ),
          Error("WebAppMethodUnsupported"))
        );
      var v = j(16),
        y = { req_id: v };
      (Tr[v] = { callback: p }),
        t.postEvent("web_app_read_text_from_clipboard", !1, y);
    }),
    (l.ready = function () {
      t.postEvent("web_app_ready");
    }),
    (l.expand = function () {
      t.postEvent("web_app_expand");
    }),
    (l.close = function () {
      t.postEvent("web_app_close");
    }),
    (window.Telegram.WebApp = l),
    Ue(),
    bt(),
    window.addEventListener("resize", s),
    r && document.addEventListener("click", c),
    t.onEvent("theme_changed", x),
    t.onEvent("viewport_changed", d),
    t.onEvent("invoice_closed", Bc),
    t.onEvent("popup_closed", Vc),
    t.onEvent("qr_text_received", Hc),
    t.onEvent("scan_qr_popup_closed", $c),
    t.onEvent("clipboard_text_received", Qc),
    t.postEvent("web_app_request_theme"),
    t.postEvent("web_app_request_viewport");
})();
var Dp = window,
  Fp = Dp.Telegram.WebApp;
Fp.ready();
So.createRoot(document.getElementById("root")).render(
  X.jsx(Et.StrictMode, { children: X.jsx(Wp, {}) })
);
