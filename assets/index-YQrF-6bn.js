(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = t(l);
    fetch(l.href, i);
  }
})();
function Ec(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var as = { exports: {} },
  fl = {},
  cs = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var or = Symbol.for("react.element"),
  Cc = Symbol.for("react.portal"),
  Nc = Symbol.for("react.fragment"),
  zc = Symbol.for("react.strict_mode"),
  Pc = Symbol.for("react.profiler"),
  Lc = Symbol.for("react.provider"),
  Ic = Symbol.for("react.context"),
  Tc = Symbol.for("react.forward_ref"),
  Oc = Symbol.for("react.suspense"),
  Rc = Symbol.for("react.memo"),
  Mc = Symbol.for("react.lazy"),
  Go = Symbol.iterator;
function Dc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Go && e[Go]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ds = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  fs = Object.assign,
  ps = {};
function vt(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = ps),
    (this.updater = t || ds);
}
vt.prototype.isReactComponent = {};
vt.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
vt.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hs() {}
hs.prototype = vt.prototype;
function Ji(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = ps),
    (this.updater = t || ds);
}
var bi = (Ji.prototype = new hs());
bi.constructor = Ji;
fs(bi, vt.prototype);
bi.isPureReactComponent = !0;
var Zo = Array.isArray,
  ms = Object.prototype.hasOwnProperty,
  eo = { current: null },
  vs = { key: !0, ref: !0, __self: !0, __source: !0 };
function gs(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (o = n.ref),
    n.key !== void 0 && (i = "" + n.key),
    n))
      ms.call(n, r) && !vs.hasOwnProperty(r) && (l[r] = n[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = t;
  else if (1 < s) {
    for (var a = Array(s), d = 0; d < s; d++) a[d] = arguments[d + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: or,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: eo.current,
  };
}
function Fc(e, n) {
  return {
    $$typeof: or,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function no(e) {
  return typeof e == "object" && e !== null && e.$$typeof === or;
}
function Bc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Jo = /\/+/g;
function Il(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? Bc("" + e.key)
    : n.toString(36);
}
function Lr(e, n, t, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case or:
          case Cc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Il(o, 0) : r),
      Zo(l)
        ? ((t = ""),
          e != null && (t = e.replace(Jo, "$&/") + "/"),
          Lr(l, n, t, "", function (d) {
            return d;
          }))
        : l != null &&
          (no(l) &&
            (l = Fc(
              l,
              t +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Jo, "$&/") + "/") +
                e
            )),
          n.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Zo(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + Il(i, s);
      o += Lr(i, n, t, a, l);
    }
  else if (((a = Dc(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Il(i, s++)), (o += Lr(i, n, t, a, l));
  else if (i === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function pr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Lr(e, r, "", "", function (i) {
      return n.call(t, i, l++);
    }),
    r
  );
}
function $c(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var fe = { current: null },
  Ir = { transition: null },
  Uc = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: Ir,
    ReactCurrentOwner: eo,
  };
L.Children = {
  map: pr,
  forEach: function (e, n, t) {
    pr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      pr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      pr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!no(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = vt;
L.Fragment = Nc;
L.Profiler = Pc;
L.PureComponent = Ji;
L.StrictMode = zc;
L.Suspense = Oc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uc;
L.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = fs({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((i = n.ref), (o = eo.current)),
      n.key !== void 0 && (l = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in n)
      ms.call(n, a) &&
        !vs.hasOwnProperty(a) &&
        (r[a] = n[a] === void 0 && s !== void 0 ? s[a] : n[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = t;
  else if (1 < a) {
    s = Array(a);
    for (var d = 0; d < a; d++) s[d] = arguments[d + 2];
    r.children = s;
  }
  return { $$typeof: or, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ic,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Lc, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = gs;
L.createFactory = function (e) {
  var n = gs.bind(null, e);
  return (n.type = e), n;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: Tc, render: e };
};
L.isValidElement = no;
L.lazy = function (e) {
  return { $$typeof: Mc, _payload: { _status: -1, _result: e }, _init: $c };
};
L.memo = function (e, n) {
  return { $$typeof: Rc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function (e) {
  var n = Ir.transition;
  Ir.transition = {};
  try {
    e();
  } finally {
    Ir.transition = n;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, n) {
  return fe.current.useCallback(e, n);
};
L.useContext = function (e) {
  return fe.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
L.useEffect = function (e, n) {
  return fe.current.useEffect(e, n);
};
L.useId = function () {
  return fe.current.useId();
};
L.useImperativeHandle = function (e, n, t) {
  return fe.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function (e, n) {
  return fe.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function (e, n) {
  return fe.current.useLayoutEffect(e, n);
};
L.useMemo = function (e, n) {
  return fe.current.useMemo(e, n);
};
L.useReducer = function (e, n, t) {
  return fe.current.useReducer(e, n, t);
};
L.useRef = function (e) {
  return fe.current.useRef(e);
};
L.useState = function (e) {
  return fe.current.useState(e);
};
L.useSyncExternalStore = function (e, n, t) {
  return fe.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function () {
  return fe.current.useTransition();
};
L.version = "18.2.0";
cs.exports = L;
var $ = cs.exports;
const fn = Ec($);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vc = $,
  Ac = Symbol.for("react.element"),
  Wc = Symbol.for("react.fragment"),
  Hc = Object.prototype.hasOwnProperty,
  Qc = Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  qc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ys(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  t !== void 0 && (i = "" + t),
    n.key !== void 0 && (i = "" + n.key),
    n.ref !== void 0 && (o = n.ref);
  for (r in n) Hc.call(n, r) && !qc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: Ac,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Qc.current,
  };
}
fl.Fragment = Wc;
fl.jsx = ys;
fl.jsxs = ys;
as.exports = fl;
var u = as.exports,
  ii = {},
  _s = { exports: {} },
  Se = {},
  xs = { exports: {} },
  ws = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(j, z) {
    var P = j.length;
    j.push(z);
    e: for (; 0 < P; ) {
      var q = (P - 1) >>> 1,
        J = j[q];
      if (0 < l(J, z)) (j[q] = z), (j[P] = J), (P = q);
      else break e;
    }
  }
  function t(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var z = j[0],
      P = j.pop();
    if (P !== z) {
      j[0] = P;
      e: for (var q = 0, J = j.length, dr = J >>> 1; q < dr; ) {
        var Nn = 2 * (q + 1) - 1,
          Ll = j[Nn],
          zn = Nn + 1,
          fr = j[zn];
        if (0 > l(Ll, P))
          zn < J && 0 > l(fr, Ll)
            ? ((j[q] = fr), (j[zn] = P), (q = zn))
            : ((j[q] = Ll), (j[Nn] = P), (q = Nn));
        else if (zn < J && 0 > l(fr, P)) (j[q] = fr), (j[zn] = P), (q = zn);
        else break e;
      }
    }
    return z;
  }
  function l(j, z) {
    var P = j.sortIndex - z.sortIndex;
    return P !== 0 ? P : j.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var a = [],
    d = [],
    v = 1,
    m = null,
    h = 3,
    _ = !1,
    x = !1,
    w = !1,
    B = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(j) {
    for (var z = t(d); z !== null; ) {
      if (z.callback === null) r(d);
      else if (z.startTime <= j)
        r(d), (z.sortIndex = z.expirationTime), n(a, z);
      else break;
      z = t(d);
    }
  }
  function g(j) {
    if (((w = !1), p(j), !x))
      if (t(a) !== null) (x = !0), zl(S);
      else {
        var z = t(d);
        z !== null && Pl(g, z.startTime - j);
      }
  }
  function S(j, z) {
    (x = !1), w && ((w = !1), f(N), (N = -1)), (_ = !0);
    var P = h;
    try {
      for (
        p(z), m = t(a);
        m !== null && (!(m.expirationTime > z) || (j && !Ie()));

      ) {
        var q = m.callback;
        if (typeof q == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var J = q(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof J == "function" ? (m.callback = J) : m === t(a) && r(a),
            p(z);
        } else r(a);
        m = t(a);
      }
      if (m !== null) var dr = !0;
      else {
        var Nn = t(d);
        Nn !== null && Pl(g, Nn.startTime - z), (dr = !1);
      }
      return dr;
    } finally {
      (m = null), (h = P), (_ = !1);
    }
  }
  var E = !1,
    C = null,
    N = -1,
    Q = 5,
    I = -1;
  function Ie() {
    return !(e.unstable_now() - I < Q);
  }
  function _t() {
    if (C !== null) {
      var j = e.unstable_now();
      I = j;
      var z = !0;
      try {
        z = C(!0, j);
      } finally {
        z ? xt() : ((E = !1), (C = null));
      }
    } else E = !1;
  }
  var xt;
  if (typeof c == "function")
    xt = function () {
      c(_t);
    };
  else if (typeof MessageChannel < "u") {
    var Xo = new MessageChannel(),
      jc = Xo.port2;
    (Xo.port1.onmessage = _t),
      (xt = function () {
        jc.postMessage(null);
      });
  } else
    xt = function () {
      B(_t, 0);
    };
  function zl(j) {
    (C = j), E || ((E = !0), xt());
  }
  function Pl(j, z) {
    N = B(function () {
      j(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || _ || ((x = !0), zl(S));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Q = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(a);
    }),
    (e.unstable_next = function (j) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = h;
      }
      var P = h;
      h = z;
      try {
        return j();
      } finally {
        h = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, z) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var P = h;
      h = j;
      try {
        return z();
      } finally {
        h = P;
      }
    }),
    (e.unstable_scheduleCallback = function (j, z, P) {
      var q = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? q + P : q))
          : (P = q),
        j)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = P + J),
        (j = {
          id: v++,
          callback: z,
          priorityLevel: j,
          startTime: P,
          expirationTime: J,
          sortIndex: -1,
        }),
        P > q
          ? ((j.sortIndex = P),
            n(d, j),
            t(a) === null &&
              j === t(d) &&
              (w ? (f(N), (N = -1)) : (w = !0), Pl(g, P - q)))
          : ((j.sortIndex = J), n(a, j), x || _ || ((x = !0), zl(S))),
        j
      );
    }),
    (e.unstable_shouldYield = Ie),
    (e.unstable_wrapCallback = function (j) {
      var z = h;
      return function () {
        var P = h;
        h = z;
        try {
          return j.apply(this, arguments);
        } finally {
          h = P;
        }
      };
    });
})(ws);
xs.exports = ws;
var Kc = xs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ks = $,
  ke = Kc;
function y(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ss = new Set(),
  Wt = {};
function An(e, n) {
  at(e, n), at(e + "Capture", n);
}
function at(e, n) {
  for (Wt[e] = n, e = 0; e < n.length; e++) Ss.add(n[e]);
}
var Je = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  oi = Object.prototype.hasOwnProperty,
  Yc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bo = {},
  eu = {};
function Xc(e) {
  return oi.call(eu, e)
    ? !0
    : oi.call(bo, e)
    ? !1
    : Yc.test(e)
    ? (eu[e] = !0)
    : ((bo[e] = !0), !1);
}
function Gc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Zc(e, n, t, r) {
  if (n === null || typeof n > "u" || Gc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function pe(e, n, t, r, l, i, o) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ie[n] = new pe(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var to = /[\-:]([a-z])/g;
function ro(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(to, ro);
    ie[n] = new pe(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(to, ro);
    ie[n] = new pe(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(to, ro);
  ie[n] = new pe(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function lo(e, n, t, r) {
  var l = ie.hasOwnProperty(n) ? ie[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Zc(n, t, l, r) && (t = null),
    r || l === null
      ? Xc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var tn = ks.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hr = Symbol.for("react.element"),
  Qn = Symbol.for("react.portal"),
  qn = Symbol.for("react.fragment"),
  io = Symbol.for("react.strict_mode"),
  ui = Symbol.for("react.profiler"),
  js = Symbol.for("react.provider"),
  Es = Symbol.for("react.context"),
  oo = Symbol.for("react.forward_ref"),
  si = Symbol.for("react.suspense"),
  ai = Symbol.for("react.suspense_list"),
  uo = Symbol.for("react.memo"),
  on = Symbol.for("react.lazy"),
  Cs = Symbol.for("react.offscreen"),
  nu = Symbol.iterator;
function wt(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (nu && e[nu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Tl;
function Lt(e) {
  if (Tl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      Tl = (n && n[1]) || "";
    }
  return (
    `
` +
    Tl +
    e
  );
}
var Ol = !1;
function Rl(e, n) {
  if (!e || Ol) return "";
  Ol = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (d) {
          r = d;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          s = i.length - 1;
        1 <= o && 0 <= s && l[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (l[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || l[o] !== i[s])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (Ol = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? Lt(e) : "";
}
function Jc(e) {
  switch (e.tag) {
    case 5:
      return Lt(e.type);
    case 16:
      return Lt("Lazy");
    case 13:
      return Lt("Suspense");
    case 19:
      return Lt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Rl(e.type, !1)), e;
    case 11:
      return (e = Rl(e.type.render, !1)), e;
    case 1:
      return (e = Rl(e.type, !0)), e;
    default:
      return "";
  }
}
function ci(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qn:
      return "Fragment";
    case Qn:
      return "Portal";
    case ui:
      return "Profiler";
    case io:
      return "StrictMode";
    case si:
      return "Suspense";
    case ai:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Es:
        return (e.displayName || "Context") + ".Consumer";
      case js:
        return (e._context.displayName || "Context") + ".Provider";
      case oo:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case uo:
        return (
          (n = e.displayName || null), n !== null ? n : ci(e.type) || "Memo"
        );
      case on:
        (n = e._payload), (e = e._init);
        try {
          return ci(e(n));
        } catch {}
    }
  return null;
}
function bc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ci(n);
    case 8:
      return n === io ? "StrictMode" : "Mode";
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
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function kn(e) {
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
function Ns(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function ed(e) {
  var n = Ns(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var l = t.get,
      i = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function mr(e) {
  e._valueTracker || (e._valueTracker = ed(e));
}
function zs(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = Ns(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Ar(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function di(e, n) {
  var t = n.checked;
  return W({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function tu(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = kn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function Ps(e, n) {
  (n = n.checked), n != null && lo(e, "checked", n, !1);
}
function fi(e, n) {
  Ps(e, n);
  var t = kn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? pi(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && pi(e, n.type, kn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function ru(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function pi(e, n, t) {
  (n !== "number" || Ar(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var It = Array.isArray;
function rt(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + kn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function hi(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return W({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function lu(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (It(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: kn(t) };
}
function Ls(e, n) {
  var t = kn(n.value),
    r = kn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function iu(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function Is(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mi(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Is(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var vr,
  Ts = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        vr = vr || document.createElement("div"),
          vr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = vr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Ht(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Rt = {
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
  nd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rt).forEach(function (e) {
  nd.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Rt[n] = Rt[e]);
  });
});
function Os(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (Rt.hasOwnProperty(e) && Rt[e])
    ? ("" + n).trim()
    : n + "px";
}
function Rs(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = Os(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var td = W(
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
function vi(e, n) {
  if (n) {
    if (td[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function gi(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
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
var yi = null;
function so(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var _i = null,
  lt = null,
  it = null;
function ou(e) {
  if ((e = ar(e))) {
    if (typeof _i != "function") throw Error(y(280));
    var n = e.stateNode;
    n && ((n = gl(n)), _i(e.stateNode, e.type, n));
  }
}
function Ms(e) {
  lt ? (it ? it.push(e) : (it = [e])) : (lt = e);
}
function Ds() {
  if (lt) {
    var e = lt,
      n = it;
    if (((it = lt = null), ou(e), n)) for (e = 0; e < n.length; e++) ou(n[e]);
  }
}
function Fs(e, n) {
  return e(n);
}
function Bs() {}
var Ml = !1;
function $s(e, n, t) {
  if (Ml) return e(n, t);
  Ml = !0;
  try {
    return Fs(e, n, t);
  } finally {
    (Ml = !1), (lt !== null || it !== null) && (Bs(), Ds());
  }
}
function Qt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = gl(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
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
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var xi = !1;
if (Je)
  try {
    var kt = {};
    Object.defineProperty(kt, "passive", {
      get: function () {
        xi = !0;
      },
    }),
      window.addEventListener("test", kt, kt),
      window.removeEventListener("test", kt, kt);
  } catch {
    xi = !1;
  }
function rd(e, n, t, r, l, i, o, s, a) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, d);
  } catch (v) {
    this.onError(v);
  }
}
var Mt = !1,
  Wr = null,
  Hr = !1,
  wi = null,
  ld = {
    onError: function (e) {
      (Mt = !0), (Wr = e);
    },
  };
function id(e, n, t, r, l, i, o, s, a) {
  (Mt = !1), (Wr = null), rd.apply(ld, arguments);
}
function od(e, n, t, r, l, i, o, s, a) {
  if ((id.apply(this, arguments), Mt)) {
    if (Mt) {
      var d = Wr;
      (Mt = !1), (Wr = null);
    } else throw Error(y(198));
    Hr || ((Hr = !0), (wi = d));
  }
}
function Wn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Us(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function uu(e) {
  if (Wn(e) !== e) throw Error(y(188));
}
function ud(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = Wn(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t) return uu(l), e;
        if (i === r) return uu(l), n;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) (t = l), (r = i);
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === t) {
          (o = !0), (t = l), (r = i);
          break;
        }
        if (s === r) {
          (o = !0), (r = l), (t = i);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === t) {
            (o = !0), (t = i), (r = l);
            break;
          }
          if (s === r) {
            (o = !0), (r = i), (t = l);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Vs(e) {
  return (e = ud(e)), e !== null ? As(e) : null;
}
function As(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = As(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Ws = ke.unstable_scheduleCallback,
  su = ke.unstable_cancelCallback,
  sd = ke.unstable_shouldYield,
  ad = ke.unstable_requestPaint,
  K = ke.unstable_now,
  cd = ke.unstable_getCurrentPriorityLevel,
  ao = ke.unstable_ImmediatePriority,
  Hs = ke.unstable_UserBlockingPriority,
  Qr = ke.unstable_NormalPriority,
  dd = ke.unstable_LowPriority,
  Qs = ke.unstable_IdlePriority,
  pl = null,
  Qe = null;
function fd(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function")
    try {
      Qe.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : md,
  pd = Math.log,
  hd = Math.LN2;
function md(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pd(e) / hd) | 0)) | 0;
}
var gr = 64,
  yr = 4194304;
function Tt(e) {
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
function qr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? (r = Tt(s)) : ((i &= o), i !== 0 && (r = Tt(i)));
  } else (o = t & ~l), o !== 0 ? (r = Tt(o)) : i !== 0 && (r = Tt(i));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (i = n & -n), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Be(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function vd(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
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
      return n + 5e3;
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
function gd(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Be(i),
      s = 1 << o,
      a = l[o];
    a === -1
      ? (!(s & t) || s & r) && (l[o] = vd(s, n))
      : a <= n && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function ki(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function qs() {
  var e = gr;
  return (gr <<= 1), !(gr & 4194240) && (gr = 64), e;
}
function Dl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function ur(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Be(n)),
    (e[n] = t);
}
function yd(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Be(t),
      i = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~i);
  }
}
function co(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Be(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var O = 0;
function Ks(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ys,
  fo,
  Xs,
  Gs,
  Zs,
  Si = !1,
  _r = [],
  pn = null,
  hn = null,
  mn = null,
  qt = new Map(),
  Kt = new Map(),
  sn = [],
  _d =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function au(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      pn = null;
      break;
    case "dragenter":
    case "dragleave":
      hn = null;
      break;
    case "mouseover":
    case "mouseout":
      mn = null;
      break;
    case "pointerover":
    case "pointerout":
      qt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kt.delete(n.pointerId);
  }
}
function St(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      n !== null && ((n = ar(n)), n !== null && fo(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function xd(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (pn = St(pn, e, n, t, r, l)), !0;
    case "dragenter":
      return (hn = St(hn, e, n, t, r, l)), !0;
    case "mouseover":
      return (mn = St(mn, e, n, t, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return qt.set(i, St(qt.get(i) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Kt.set(i, St(Kt.get(i) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Js(e) {
  var n = Tn(e.target);
  if (n !== null) {
    var t = Wn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Us(t)), n !== null)) {
          (e.blockedOn = n),
            Zs(e.priority, function () {
              Xs(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Tr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = ji(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (yi = r), t.target.dispatchEvent(r), (yi = null);
    } else return (n = ar(t)), n !== null && fo(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function cu(e, n, t) {
  Tr(e) && t.delete(n);
}
function wd() {
  (Si = !1),
    pn !== null && Tr(pn) && (pn = null),
    hn !== null && Tr(hn) && (hn = null),
    mn !== null && Tr(mn) && (mn = null),
    qt.forEach(cu),
    Kt.forEach(cu);
}
function jt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    Si ||
      ((Si = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, wd)));
}
function Yt(e) {
  function n(l) {
    return jt(l, e);
  }
  if (0 < _r.length) {
    jt(_r[0], e);
    for (var t = 1; t < _r.length; t++) {
      var r = _r[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pn !== null && jt(pn, e),
      hn !== null && jt(hn, e),
      mn !== null && jt(mn, e),
      qt.forEach(n),
      Kt.forEach(n),
      t = 0;
    t < sn.length;
    t++
  )
    (r = sn[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < sn.length && ((t = sn[0]), t.blockedOn === null); )
    Js(t), t.blockedOn === null && sn.shift();
}
var ot = tn.ReactCurrentBatchConfig,
  Kr = !0;
function kd(e, n, t, r) {
  var l = O,
    i = ot.transition;
  ot.transition = null;
  try {
    (O = 1), po(e, n, t, r);
  } finally {
    (O = l), (ot.transition = i);
  }
}
function Sd(e, n, t, r) {
  var l = O,
    i = ot.transition;
  ot.transition = null;
  try {
    (O = 4), po(e, n, t, r);
  } finally {
    (O = l), (ot.transition = i);
  }
}
function po(e, n, t, r) {
  if (Kr) {
    var l = ji(e, n, t, r);
    if (l === null) ql(e, n, r, Yr, t), au(e, r);
    else if (xd(l, e, n, t, r)) r.stopPropagation();
    else if ((au(e, r), n & 4 && -1 < _d.indexOf(e))) {
      for (; l !== null; ) {
        var i = ar(l);
        if (
          (i !== null && Ys(i),
          (i = ji(e, n, t, r)),
          i === null && ql(e, n, r, Yr, t),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ql(e, n, r, null, t);
  }
}
var Yr = null;
function ji(e, n, t, r) {
  if (((Yr = null), (e = so(r)), (e = Tn(e)), e !== null))
    if (((n = Wn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Us(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Yr = e), null;
}
function bs(e) {
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
      switch (cd()) {
        case ao:
          return 1;
        case Hs:
          return 4;
        case Qr:
        case dd:
          return 16;
        case Qs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var cn = null,
  ho = null,
  Or = null;
function ea() {
  if (Or) return Or;
  var e,
    n = ho,
    t = n.length,
    r,
    l = "value" in cn ? cn.value : cn.textContent,
    i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[i - r]; r++);
  return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Rr(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xr() {
  return !0;
}
function du() {
  return !1;
}
function je(e) {
  function n(t, r, l, i, o) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((t = e[s]), (this[s] = t ? t(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? xr
        : du),
      (this.isPropagationStopped = du),
      this
    );
  }
  return (
    W(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = xr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = xr));
      },
      persist: function () {},
      isPersistent: xr,
    }),
    n
  );
}
var gt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  mo = je(gt),
  sr = W({}, gt, { view: 0, detail: 0 }),
  jd = je(sr),
  Fl,
  Bl,
  Et,
  hl = W({}, sr, {
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
    getModifierState: vo,
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
        : (e !== Et &&
            (Et && e.type === "mousemove"
              ? ((Fl = e.screenX - Et.screenX), (Bl = e.screenY - Et.screenY))
              : (Bl = Fl = 0),
            (Et = e)),
          Fl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Bl;
    },
  }),
  fu = je(hl),
  Ed = W({}, hl, { dataTransfer: 0 }),
  Cd = je(Ed),
  Nd = W({}, sr, { relatedTarget: 0 }),
  $l = je(Nd),
  zd = W({}, gt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Pd = je(zd),
  Ld = W({}, gt, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Id = je(Ld),
  Td = W({}, gt, { data: 0 }),
  pu = je(Td),
  Od = {
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
  Rd = {
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
  Md = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Dd(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Md[e]) ? !!n[e] : !1;
}
function vo() {
  return Dd;
}
var Fd = W({}, sr, {
    key: function (e) {
      if (e.key) {
        var n = Od[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = Rr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Rd[e.keyCode] || "Unidentified"
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
    getModifierState: vo,
    charCode: function (e) {
      return e.type === "keypress" ? Rr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Rr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Bd = je(Fd),
  $d = W({}, hl, {
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
  hu = je($d),
  Ud = W({}, sr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vo,
  }),
  Vd = je(Ud),
  Ad = W({}, gt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wd = je(Ad),
  Hd = W({}, hl, {
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
  Qd = je(Hd),
  qd = [9, 13, 27, 32],
  go = Je && "CompositionEvent" in window,
  Dt = null;
Je && "documentMode" in document && (Dt = document.documentMode);
var Kd = Je && "TextEvent" in window && !Dt,
  na = Je && (!go || (Dt && 8 < Dt && 11 >= Dt)),
  mu = " ",
  vu = !1;
function ta(e, n) {
  switch (e) {
    case "keyup":
      return qd.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ra(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kn = !1;
function Yd(e, n) {
  switch (e) {
    case "compositionend":
      return ra(n);
    case "keypress":
      return n.which !== 32 ? null : ((vu = !0), mu);
    case "textInput":
      return (e = n.data), e === mu && vu ? null : e;
    default:
      return null;
  }
}
function Xd(e, n) {
  if (Kn)
    return e === "compositionend" || (!go && ta(e, n))
      ? ((e = ea()), (Or = ho = cn = null), (Kn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return na && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Gd = {
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
function gu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Gd[e.type] : n === "textarea";
}
function la(e, n, t, r) {
  Ms(r),
    (n = Xr(n, "onChange")),
    0 < n.length &&
      ((t = new mo("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Ft = null,
  Xt = null;
function Zd(e) {
  ma(e, 0);
}
function ml(e) {
  var n = Gn(e);
  if (zs(n)) return e;
}
function Jd(e, n) {
  if (e === "change") return n;
}
var ia = !1;
if (Je) {
  var Ul;
  if (Je) {
    var Vl = "oninput" in document;
    if (!Vl) {
      var yu = document.createElement("div");
      yu.setAttribute("oninput", "return;"),
        (Vl = typeof yu.oninput == "function");
    }
    Ul = Vl;
  } else Ul = !1;
  ia = Ul && (!document.documentMode || 9 < document.documentMode);
}
function _u() {
  Ft && (Ft.detachEvent("onpropertychange", oa), (Xt = Ft = null));
}
function oa(e) {
  if (e.propertyName === "value" && ml(Xt)) {
    var n = [];
    la(n, Xt, e, so(e)), $s(Zd, n);
  }
}
function bd(e, n, t) {
  e === "focusin"
    ? (_u(), (Ft = n), (Xt = t), Ft.attachEvent("onpropertychange", oa))
    : e === "focusout" && _u();
}
function ef(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ml(Xt);
}
function nf(e, n) {
  if (e === "click") return ml(n);
}
function tf(e, n) {
  if (e === "input" || e === "change") return ml(n);
}
function rf(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Ue = typeof Object.is == "function" ? Object.is : rf;
function Gt(e, n) {
  if (Ue(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!oi.call(n, l) || !Ue(e[l], n[l])) return !1;
  }
  return !0;
}
function xu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function wu(e, n) {
  var t = xu(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = xu(t);
  }
}
function ua(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? ua(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function sa() {
  for (var e = window, n = Ar(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Ar(e.document);
  }
  return n;
}
function yo(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function lf(e) {
  var n = sa(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    ua(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && yo(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = wu(t, i));
        var o = wu(t, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(n), e.extend(o.node, o.offset))
            : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var of = Je && "documentMode" in document && 11 >= document.documentMode,
  Yn = null,
  Ei = null,
  Bt = null,
  Ci = !1;
function ku(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Ci ||
    Yn == null ||
    Yn !== Ar(r) ||
    ((r = Yn),
    "selectionStart" in r && yo(r)
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
    (Bt && Gt(Bt, r)) ||
      ((Bt = r),
      (r = Xr(Ei, "onSelect")),
      0 < r.length &&
        ((n = new mo("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = Yn))));
}
function wr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var Xn = {
    animationend: wr("Animation", "AnimationEnd"),
    animationiteration: wr("Animation", "AnimationIteration"),
    animationstart: wr("Animation", "AnimationStart"),
    transitionend: wr("Transition", "TransitionEnd"),
  },
  Al = {},
  aa = {};
Je &&
  ((aa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Xn.animationend.animation,
    delete Xn.animationiteration.animation,
    delete Xn.animationstart.animation),
  "TransitionEvent" in window || delete Xn.transitionend.transition);
function vl(e) {
  if (Al[e]) return Al[e];
  if (!Xn[e]) return e;
  var n = Xn[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in aa) return (Al[e] = n[t]);
  return e;
}
var ca = vl("animationend"),
  da = vl("animationiteration"),
  fa = vl("animationstart"),
  pa = vl("transitionend"),
  ha = new Map(),
  Su =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function jn(e, n) {
  ha.set(e, n), An(n, [e]);
}
for (var Wl = 0; Wl < Su.length; Wl++) {
  var Hl = Su[Wl],
    uf = Hl.toLowerCase(),
    sf = Hl[0].toUpperCase() + Hl.slice(1);
  jn(uf, "on" + sf);
}
jn(ca, "onAnimationEnd");
jn(da, "onAnimationIteration");
jn(fa, "onAnimationStart");
jn("dblclick", "onDoubleClick");
jn("focusin", "onFocus");
jn("focusout", "onBlur");
jn(pa, "onTransitionEnd");
at("onMouseEnter", ["mouseout", "mouseover"]);
at("onMouseLeave", ["mouseout", "mouseover"]);
at("onPointerEnter", ["pointerout", "pointerover"]);
at("onPointerLeave", ["pointerout", "pointerover"]);
An(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
An(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
An("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
An(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
An(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
An(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ot =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  af = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ot));
function ju(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), od(r, n, void 0, e), (e.currentTarget = null);
}
function ma(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            a = s.instance,
            d = s.currentTarget;
          if (((s = s.listener), a !== i && l.isPropagationStopped())) break e;
          ju(l, s, d), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (a = s.instance),
            (d = s.currentTarget),
            (s = s.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          ju(l, s, d), (i = a);
        }
    }
  }
  if (Hr) throw ((e = wi), (Hr = !1), (wi = null), e);
}
function D(e, n) {
  var t = n[Ii];
  t === void 0 && (t = n[Ii] = new Set());
  var r = e + "__bubble";
  t.has(r) || (va(n, e, 2, !1), t.add(r));
}
function Ql(e, n, t) {
  var r = 0;
  n && (r |= 4), va(t, e, r, n);
}
var kr = "_reactListening" + Math.random().toString(36).slice(2);
function Zt(e) {
  if (!e[kr]) {
    (e[kr] = !0),
      Ss.forEach(function (t) {
        t !== "selectionchange" && (af.has(t) || Ql(t, !1, e), Ql(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[kr] || ((n[kr] = !0), Ql("selectionchange", !1, n));
  }
}
function va(e, n, t, r) {
  switch (bs(n)) {
    case 1:
      var l = kd;
      break;
    case 4:
      l = Sd;
      break;
    default:
      l = po;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !xi ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function ql(e, n, t, r, l) {
  var i = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = Tn(s)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  $s(function () {
    var d = i,
      v = so(t),
      m = [];
    e: {
      var h = ha.get(e);
      if (h !== void 0) {
        var _ = mo,
          x = e;
        switch (e) {
          case "keypress":
            if (Rr(t) === 0) break e;
          case "keydown":
          case "keyup":
            _ = Bd;
            break;
          case "focusin":
            (x = "focus"), (_ = $l);
            break;
          case "focusout":
            (x = "blur"), (_ = $l);
            break;
          case "beforeblur":
          case "afterblur":
            _ = $l;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            _ = fu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = Cd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = Vd;
            break;
          case ca:
          case da:
          case fa:
            _ = Pd;
            break;
          case pa:
            _ = Wd;
            break;
          case "scroll":
            _ = jd;
            break;
          case "wheel":
            _ = Qd;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = Id;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = hu;
        }
        var w = (n & 4) !== 0,
          B = !w && e === "scroll",
          f = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              f !== null && ((g = Qt(c, f)), g != null && w.push(Jt(c, g, p)))),
            B)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((h = new _(h, x, null, t, v)), m.push({ event: h, listeners: w }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (_ = e === "mouseout" || e === "pointerout"),
          h &&
            t !== yi &&
            (x = t.relatedTarget || t.fromElement) &&
            (Tn(x) || x[be]))
        )
          break e;
        if (
          (_ || h) &&
          ((h =
            v.window === v
              ? v
              : (h = v.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          _
            ? ((x = t.relatedTarget || t.toElement),
              (_ = d),
              (x = x ? Tn(x) : null),
              x !== null &&
                ((B = Wn(x)), x !== B || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((_ = null), (x = d)),
          _ !== x)
        ) {
          if (
            ((w = fu),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = hu),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (B = _ == null ? h : Gn(_)),
            (p = x == null ? h : Gn(x)),
            (h = new w(g, c + "leave", _, t, v)),
            (h.target = B),
            (h.relatedTarget = p),
            (g = null),
            Tn(v) === d &&
              ((w = new w(f, c + "enter", x, t, v)),
              (w.target = p),
              (w.relatedTarget = B),
              (g = w)),
            (B = g),
            _ && x)
          )
            n: {
              for (w = _, f = x, c = 0, p = w; p; p = Hn(p)) c++;
              for (p = 0, g = f; g; g = Hn(g)) p++;
              for (; 0 < c - p; ) (w = Hn(w)), c--;
              for (; 0 < p - c; ) (f = Hn(f)), p--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break n;
                (w = Hn(w)), (f = Hn(f));
              }
              w = null;
            }
          else w = null;
          _ !== null && Eu(m, h, _, w, !1),
            x !== null && B !== null && Eu(m, B, x, w, !0);
        }
      }
      e: {
        if (
          ((h = d ? Gn(d) : window),
          (_ = h.nodeName && h.nodeName.toLowerCase()),
          _ === "select" || (_ === "input" && h.type === "file"))
        )
          var S = Jd;
        else if (gu(h))
          if (ia) S = tf;
          else {
            S = ef;
            var E = bd;
          }
        else
          (_ = h.nodeName) &&
            _.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = nf);
        if (S && (S = S(e, d))) {
          la(m, S, t, v);
          break e;
        }
        E && E(e, h, d),
          e === "focusout" &&
            (E = h._wrapperState) &&
            E.controlled &&
            h.type === "number" &&
            pi(h, "number", h.value);
      }
      switch (((E = d ? Gn(d) : window), e)) {
        case "focusin":
          (gu(E) || E.contentEditable === "true") &&
            ((Yn = E), (Ei = d), (Bt = null));
          break;
        case "focusout":
          Bt = Ei = Yn = null;
          break;
        case "mousedown":
          Ci = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ci = !1), ku(m, t, v);
          break;
        case "selectionchange":
          if (of) break;
        case "keydown":
        case "keyup":
          ku(m, t, v);
      }
      var C;
      if (go)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Kn
          ? ta(e, t) && (N = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (na &&
          t.locale !== "ko" &&
          (Kn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Kn && (C = ea())
            : ((cn = v),
              (ho = "value" in cn ? cn.value : cn.textContent),
              (Kn = !0))),
        (E = Xr(d, N)),
        0 < E.length &&
          ((N = new pu(N, e, null, t, v)),
          m.push({ event: N, listeners: E }),
          C ? (N.data = C) : ((C = ra(t)), C !== null && (N.data = C)))),
        (C = Kd ? Yd(e, t) : Xd(e, t)) &&
          ((d = Xr(d, "onBeforeInput")),
          0 < d.length &&
            ((v = new pu("onBeforeInput", "beforeinput", null, t, v)),
            m.push({ event: v, listeners: d }),
            (v.data = C)));
    }
    ma(m, n);
  });
}
function Jt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Xr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Qt(e, t)),
      i != null && r.unshift(Jt(e, i, l)),
      (i = Qt(e, n)),
      i != null && r.push(Jt(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Hn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Eu(e, n, t, r, l) {
  for (var i = n._reactName, o = []; t !== null && t !== r; ) {
    var s = t,
      a = s.alternate,
      d = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      d !== null &&
      ((s = d),
      l
        ? ((a = Qt(t, i)), a != null && o.unshift(Jt(t, a, s)))
        : l || ((a = Qt(t, i)), a != null && o.push(Jt(t, a, s)))),
      (t = t.return);
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var cf = /\r\n?/g,
  df = /\u0000|\uFFFD/g;
function Cu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      cf,
      `
`
    )
    .replace(df, "");
}
function Sr(e, n, t) {
  if (((n = Cu(n)), Cu(e) !== n && t)) throw Error(y(425));
}
function Gr() {}
var Ni = null,
  zi = null;
function Pi(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var Li = typeof setTimeout == "function" ? setTimeout : void 0,
  ff = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Nu = typeof Promise == "function" ? Promise : void 0,
  pf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Nu < "u"
      ? function (e) {
          return Nu.resolve(null).then(e).catch(hf);
        }
      : Li;
function hf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Kl(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), Yt(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  Yt(n);
}
function vn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function zu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var yt = Math.random().toString(36).slice(2),
  He = "__reactFiber$" + yt,
  bt = "__reactProps$" + yt,
  be = "__reactContainer$" + yt,
  Ii = "__reactEvents$" + yt,
  mf = "__reactListeners$" + yt,
  vf = "__reactHandles$" + yt;
function Tn(e) {
  var n = e[He];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[be] || t[He])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = zu(e); e !== null; ) {
          if ((t = e[He])) return t;
          e = zu(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function ar(e) {
  return (
    (e = e[He] || e[be]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function gl(e) {
  return e[bt] || null;
}
var Ti = [],
  Zn = -1;
function En(e) {
  return { current: e };
}
function F(e) {
  0 > Zn || ((e.current = Ti[Zn]), (Ti[Zn] = null), Zn--);
}
function M(e, n) {
  Zn++, (Ti[Zn] = e.current), (e.current = n);
}
var Sn = {},
  ae = En(Sn),
  ve = En(!1),
  Fn = Sn;
function ct(e, n) {
  var t = e.type.contextTypes;
  if (!t) return Sn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in t) l[i] = n[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function Zr() {
  F(ve), F(ae);
}
function Pu(e, n, t) {
  if (ae.current !== Sn) throw Error(y(168));
  M(ae, n), M(ve, t);
}
function ga(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, bc(e) || "Unknown", l));
  return W({}, t, r);
}
function Jr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Sn),
    (Fn = ae.current),
    M(ae, e),
    M(ve, ve.current),
    !0
  );
}
function Lu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t
    ? ((e = ga(e, n, Fn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(ve),
      F(ae),
      M(ae, e))
    : F(ve),
    M(ve, t);
}
var Ye = null,
  yl = !1,
  Yl = !1;
function ya(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
function gf(e) {
  (yl = !0), ya(e);
}
function Cn() {
  if (!Yl && Ye !== null) {
    Yl = !0;
    var e = 0,
      n = O;
    try {
      var t = Ye;
      for (O = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ye = null), (yl = !1);
    } catch (l) {
      throw (Ye !== null && (Ye = Ye.slice(e + 1)), Ws(ao, Cn), l);
    } finally {
      (O = n), (Yl = !1);
    }
  }
  return null;
}
var Jn = [],
  bn = 0,
  br = null,
  el = 0,
  Ee = [],
  Ce = 0,
  Bn = null,
  Xe = 1,
  Ge = "";
function Ln(e, n) {
  (Jn[bn++] = el), (Jn[bn++] = br), (br = e), (el = n);
}
function _a(e, n, t) {
  (Ee[Ce++] = Xe), (Ee[Ce++] = Ge), (Ee[Ce++] = Bn), (Bn = e);
  var r = Xe;
  e = Ge;
  var l = 32 - Be(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var i = 32 - Be(n) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Xe = (1 << (32 - Be(n) + l)) | (t << l) | r),
      (Ge = i + e);
  } else (Xe = (1 << i) | (t << l) | r), (Ge = e);
}
function _o(e) {
  e.return !== null && (Ln(e, 1), _a(e, 1, 0));
}
function xo(e) {
  for (; e === br; )
    (br = Jn[--bn]), (Jn[bn] = null), (el = Jn[--bn]), (Jn[bn] = null);
  for (; e === Bn; )
    (Bn = Ee[--Ce]),
      (Ee[Ce] = null),
      (Ge = Ee[--Ce]),
      (Ee[Ce] = null),
      (Xe = Ee[--Ce]),
      (Ee[Ce] = null);
}
var we = null,
  xe = null,
  U = !1,
  Fe = null;
function xa(e, n) {
  var t = Ne(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function Iu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (we = e), (xe = vn(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (we = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = Bn !== null ? { id: Xe, overflow: Ge } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = Ne(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (we = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Oi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ri(e) {
  if (U) {
    var n = xe;
    if (n) {
      var t = n;
      if (!Iu(e, n)) {
        if (Oi(e)) throw Error(y(418));
        n = vn(t.nextSibling);
        var r = we;
        n && Iu(e, n)
          ? xa(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (we = e));
      }
    } else {
      if (Oi(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (we = e);
    }
  }
}
function Tu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function jr(e) {
  if (e !== we) return !1;
  if (!U) return Tu(e), (U = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !Pi(e.type, e.memoizedProps))),
    n && (n = xe))
  ) {
    if (Oi(e)) throw (wa(), Error(y(418)));
    for (; n; ) xa(e, n), (n = vn(n.nextSibling));
  }
  if ((Tu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              xe = vn(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = we ? vn(e.stateNode.nextSibling) : null;
  return !0;
}
function wa() {
  for (var e = xe; e; ) e = vn(e.nextSibling);
}
function dt() {
  (xe = we = null), (U = !1);
}
function wo(e) {
  Fe === null ? (Fe = [e]) : Fe.push(e);
}
var yf = tn.ReactCurrentBatchConfig;
function Re(e, n) {
  if (e && e.defaultProps) {
    (n = W({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var nl = En(null),
  tl = null,
  et = null,
  ko = null;
function So() {
  ko = et = tl = null;
}
function jo(e) {
  var n = nl.current;
  F(nl), (e._currentValue = n);
}
function Mi(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function ut(e, n) {
  (tl = e),
    (ko = et = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (me = !0), (e.firstContext = null));
}
function Pe(e) {
  var n = e._currentValue;
  if (ko !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), et === null)) {
      if (tl === null) throw Error(y(308));
      (et = e), (tl.dependencies = { lanes: 0, firstContext: e });
    } else et = et.next = e;
  return n;
}
var On = null;
function Eo(e) {
  On === null ? (On = [e]) : On.push(e);
}
function ka(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), Eo(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    en(e, r)
  );
}
function en(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var un = !1;
function Co(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Sa(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ze(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function gn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), T & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      en(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), Eo(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    en(e, t)
  );
}
function Mr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), co(e, t);
  }
}
function Ou(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (t = t.next);
      } while (t !== null);
      i === null ? (l = i = n) : (i = i.next = n);
    } else l = i = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function rl(e, n, t, r) {
  var l = e.updateQueue;
  un = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s,
      d = a.next;
    (a.next = null), o === null ? (i = d) : (o.next = d), (o = a);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (s = v.lastBaseUpdate),
      s !== o &&
        (s === null ? (v.firstBaseUpdate = d) : (s.next = d),
        (v.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (v = d = a = null), (s = i);
    do {
      var h = s.lane,
        _ = s.eventTime;
      if ((r & h) === h) {
        v !== null &&
          (v = v.next =
            {
              eventTime: _,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var x = e,
            w = s;
          switch (((h = n), (_ = t), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                m = x.call(_, m, h);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (h = typeof x == "function" ? x.call(_, m, h) : x),
                h == null)
              )
                break e;
              m = W({}, m, h);
              break e;
            case 2:
              un = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [s]) : h.push(s));
      } else
        (_ = {
          eventTime: _,
          lane: h,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          v === null ? ((d = v = _), (a = m)) : (v = v.next = _),
          (o |= h);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (h = s),
          (s = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (a = m),
      (l.baseState = a),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = v),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (o |= l.lane), (l = l.next);
      while (l !== n);
    } else i === null && (l.shared.lanes = 0);
    (Un |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function Ru(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var ja = new ks.Component().refs;
function Di(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : W({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var _l = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = de(),
      l = _n(e),
      i = Ze(r, l);
    (i.payload = n),
      t != null && (i.callback = t),
      (n = gn(e, i, l)),
      n !== null && ($e(n, e, l, r), Mr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = de(),
      l = _n(e),
      i = Ze(r, l);
    (i.tag = 1),
      (i.payload = n),
      t != null && (i.callback = t),
      (n = gn(e, i, l)),
      n !== null && ($e(n, e, l, r), Mr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = de(),
      r = _n(e),
      l = Ze(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = gn(e, l, r)),
      n !== null && ($e(n, e, r, t), Mr(n, e, r));
  },
};
function Mu(e, n, t, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : n.prototype && n.prototype.isPureReactComponent
      ? !Gt(t, r) || !Gt(l, i)
      : !0
  );
}
function Ea(e, n, t) {
  var r = !1,
    l = Sn,
    i = n.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Pe(i))
      : ((l = ge(n) ? Fn : ae.current),
        (r = n.contextTypes),
        (i = (r = r != null) ? ct(e, l) : Sn)),
    (n = new n(t, i)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = _l),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function Du(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && _l.enqueueReplaceState(n, n.state, null);
}
function Fi(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = ja), Co(e);
  var i = n.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Pe(i))
    : ((i = ge(n) ? Fn : ae.current), (l.context = ct(e, i))),
    (l.state = e.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == "function" && (Di(e, n, i, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && _l.enqueueReplaceState(l, l.state, null),
      rl(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ct(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (o) {
            var s = l.refs;
            s === ja && (s = l.refs = {}),
              o === null ? delete s[i] : (s[i] = o);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function Er(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function Fu(e) {
  var n = e._init;
  return n(e._payload);
}
function Ca(e) {
  function n(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function t(f, c) {
    if (!e) return null;
    for (; c !== null; ) n(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = xn(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, p, g) {
    return c === null || c.tag !== 6
      ? ((c = ni(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function a(f, c, p, g) {
    var S = p.type;
    return S === qn
      ? v(f, c, p.props.children, g, p.key)
      : c !== null &&
        (c.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === on &&
            Fu(S) === c.type))
      ? ((g = l(c, p.props)), (g.ref = Ct(f, c, p)), (g.return = f), g)
      : ((g = Vr(p.type, p.key, p.props, null, f.mode, g)),
        (g.ref = Ct(f, c, p)),
        (g.return = f),
        g);
  }
  function d(f, c, p, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = ti(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function v(f, c, p, g, S) {
    return c === null || c.tag !== 7
      ? ((c = Dn(p, f.mode, g, S)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function m(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ni("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case hr:
          return (
            (p = Vr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = Ct(f, null, c)),
            (p.return = f),
            p
          );
        case Qn:
          return (c = ti(c, f.mode, p)), (c.return = f), c;
        case on:
          var g = c._init;
          return m(f, g(c._payload), p);
      }
      if (It(c) || wt(c))
        return (c = Dn(c, f.mode, p, null)), (c.return = f), c;
      Er(f, c);
    }
    return null;
  }
  function h(f, c, p, g) {
    var S = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : s(f, c, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hr:
          return p.key === S ? a(f, c, p, g) : null;
        case Qn:
          return p.key === S ? d(f, c, p, g) : null;
        case on:
          return (S = p._init), h(f, c, S(p._payload), g);
      }
      if (It(p) || wt(p)) return S !== null ? null : v(f, c, p, g, null);
      Er(f, p);
    }
    return null;
  }
  function _(f, c, p, g, S) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(p) || null), s(c, f, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case hr:
          return (f = f.get(g.key === null ? p : g.key) || null), a(c, f, g, S);
        case Qn:
          return (f = f.get(g.key === null ? p : g.key) || null), d(c, f, g, S);
        case on:
          var E = g._init;
          return _(f, c, p, E(g._payload), S);
      }
      if (It(g) || wt(g)) return (f = f.get(p) || null), v(c, f, g, S, null);
      Er(c, g);
    }
    return null;
  }
  function x(f, c, p, g) {
    for (
      var S = null, E = null, C = c, N = (c = 0), Q = null;
      C !== null && N < p.length;
      N++
    ) {
      C.index > N ? ((Q = C), (C = null)) : (Q = C.sibling);
      var I = h(f, C, p[N], g);
      if (I === null) {
        C === null && (C = Q);
        break;
      }
      e && C && I.alternate === null && n(f, C),
        (c = i(I, c, N)),
        E === null ? (S = I) : (E.sibling = I),
        (E = I),
        (C = Q);
    }
    if (N === p.length) return t(f, C), U && Ln(f, N), S;
    if (C === null) {
      for (; N < p.length; N++)
        (C = m(f, p[N], g)),
          C !== null &&
            ((c = i(C, c, N)), E === null ? (S = C) : (E.sibling = C), (E = C));
      return U && Ln(f, N), S;
    }
    for (C = r(f, C); N < p.length; N++)
      (Q = _(C, f, N, p[N], g)),
        Q !== null &&
          (e && Q.alternate !== null && C.delete(Q.key === null ? N : Q.key),
          (c = i(Q, c, N)),
          E === null ? (S = Q) : (E.sibling = Q),
          (E = Q));
    return (
      e &&
        C.forEach(function (Ie) {
          return n(f, Ie);
        }),
      U && Ln(f, N),
      S
    );
  }
  function w(f, c, p, g) {
    var S = wt(p);
    if (typeof S != "function") throw Error(y(150));
    if (((p = S.call(p)), p == null)) throw Error(y(151));
    for (
      var E = (S = null), C = c, N = (c = 0), Q = null, I = p.next();
      C !== null && !I.done;
      N++, I = p.next()
    ) {
      C.index > N ? ((Q = C), (C = null)) : (Q = C.sibling);
      var Ie = h(f, C, I.value, g);
      if (Ie === null) {
        C === null && (C = Q);
        break;
      }
      e && C && Ie.alternate === null && n(f, C),
        (c = i(Ie, c, N)),
        E === null ? (S = Ie) : (E.sibling = Ie),
        (E = Ie),
        (C = Q);
    }
    if (I.done) return t(f, C), U && Ln(f, N), S;
    if (C === null) {
      for (; !I.done; N++, I = p.next())
        (I = m(f, I.value, g)),
          I !== null &&
            ((c = i(I, c, N)), E === null ? (S = I) : (E.sibling = I), (E = I));
      return U && Ln(f, N), S;
    }
    for (C = r(f, C); !I.done; N++, I = p.next())
      (I = _(C, f, N, I.value, g)),
        I !== null &&
          (e && I.alternate !== null && C.delete(I.key === null ? N : I.key),
          (c = i(I, c, N)),
          E === null ? (S = I) : (E.sibling = I),
          (E = I));
    return (
      e &&
        C.forEach(function (_t) {
          return n(f, _t);
        }),
      U && Ln(f, N),
      S
    );
  }
  function B(f, c, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === qn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case hr:
          e: {
            for (var S = p.key, E = c; E !== null; ) {
              if (E.key === S) {
                if (((S = p.type), S === qn)) {
                  if (E.tag === 7) {
                    t(f, E.sibling),
                      (c = l(E, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === on &&
                    Fu(S) === E.type)
                ) {
                  t(f, E.sibling),
                    (c = l(E, p.props)),
                    (c.ref = Ct(f, E, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                t(f, E);
                break;
              } else n(f, E);
              E = E.sibling;
            }
            p.type === qn
              ? ((c = Dn(p.props.children, f.mode, g, p.key)),
                (c.return = f),
                (f = c))
              : ((g = Vr(p.type, p.key, p.props, null, f.mode, g)),
                (g.ref = Ct(f, c, p)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case Qn:
          e: {
            for (E = p.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  t(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  t(f, c);
                  break;
                }
              else n(f, c);
              c = c.sibling;
            }
            (c = ti(p, f.mode, g)), (c.return = f), (f = c);
          }
          return o(f);
        case on:
          return (E = p._init), B(f, c, E(p._payload), g);
      }
      if (It(p)) return x(f, c, p, g);
      if (wt(p)) return w(f, c, p, g);
      Er(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (t(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (t(f, c), (c = ni(p, f.mode, g)), (c.return = f), (f = c)),
        o(f))
      : t(f, c);
  }
  return B;
}
var ft = Ca(!0),
  Na = Ca(!1),
  cr = {},
  qe = En(cr),
  er = En(cr),
  nr = En(cr);
function Rn(e) {
  if (e === cr) throw Error(y(174));
  return e;
}
function No(e, n) {
  switch ((M(nr, n), M(er, e), M(qe, cr), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : mi(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = mi(n, e));
  }
  F(qe), M(qe, n);
}
function pt() {
  F(qe), F(er), F(nr);
}
function za(e) {
  Rn(nr.current);
  var n = Rn(qe.current),
    t = mi(n, e.type);
  n !== t && (M(er, e), M(qe, t));
}
function zo(e) {
  er.current === e && (F(qe), F(er));
}
var V = En(0);
function ll(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Xl = [];
function Po() {
  for (var e = 0; e < Xl.length; e++)
    Xl[e]._workInProgressVersionPrimary = null;
  Xl.length = 0;
}
var Dr = tn.ReactCurrentDispatcher,
  Gl = tn.ReactCurrentBatchConfig,
  $n = 0,
  A = null,
  G = null,
  ee = null,
  il = !1,
  $t = !1,
  tr = 0,
  _f = 0;
function oe() {
  throw Error(y(321));
}
function Lo(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Ue(e[t], n[t])) return !1;
  return !0;
}
function Io(e, n, t, r, l, i) {
  if (
    (($n = i),
    (A = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Dr.current = e === null || e.memoizedState === null ? Sf : jf),
    (e = t(r, l)),
    $t)
  ) {
    i = 0;
    do {
      if ((($t = !1), (tr = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (ee = G = null),
        (n.updateQueue = null),
        (Dr.current = Ef),
        (e = t(r, l));
    } while ($t);
  }
  if (
    ((Dr.current = ol),
    (n = G !== null && G.next !== null),
    ($n = 0),
    (ee = G = A = null),
    (il = !1),
    n)
  )
    throw Error(y(300));
  return e;
}
function To() {
  var e = tr !== 0;
  return (tr = 0), e;
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (A.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function Le() {
  if (G === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var n = ee === null ? A.memoizedState : ee.next;
  if (n !== null) (ee = n), (G = e);
  else {
    if (e === null) throw Error(y(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      ee === null ? (A.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function rr(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Zl(e) {
  var n = Le(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (t.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var s = (o = null),
      a = null,
      d = i;
    do {
      var v = d.lane;
      if (($n & v) === v)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var m = {
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        a === null ? ((s = a = m), (o = r)) : (a = a.next = m),
          (A.lanes |= v),
          (Un |= v);
      }
      d = d.next;
    } while (d !== null && d !== i);
    a === null ? (o = r) : (a.next = s),
      Ue(r, n.memoizedState) || (me = !0),
      (n.memoizedState = r),
      (n.baseState = o),
      (n.baseQueue = a),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (A.lanes |= i), (Un |= i), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Jl(e) {
  var n = Le(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ue(i, n.memoizedState) || (me = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, r];
}
function Pa() {}
function La(e, n) {
  var t = A,
    r = Le(),
    l = n(),
    i = !Ue(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (me = !0)),
    (r = r.queue),
    Oo(Oa.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || i || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      lr(9, Ta.bind(null, t, r, l, n), void 0, null),
      ne === null)
    )
      throw Error(y(349));
    $n & 30 || Ia(t, n, l);
  }
  return l;
}
function Ia(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = A.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (A.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function Ta(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), Ra(n) && Ma(e);
}
function Oa(e, n, t) {
  return t(function () {
    Ra(n) && Ma(e);
  });
}
function Ra(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Ue(e, t);
  } catch {
    return !0;
  }
}
function Ma(e) {
  var n = en(e, 1);
  n !== null && $e(n, e, 1, -1);
}
function Bu(e) {
  var n = We();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rr,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = kf.bind(null, A, e)),
    [n.memoizedState, e]
  );
}
function lr(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = A.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (A.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function Da() {
  return Le().memoizedState;
}
function Fr(e, n, t, r) {
  var l = We();
  (A.flags |= e),
    (l.memoizedState = lr(1 | n, t, void 0, r === void 0 ? null : r));
}
function xl(e, n, t, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var o = G.memoizedState;
    if (((i = o.destroy), r !== null && Lo(r, o.deps))) {
      l.memoizedState = lr(n, t, i, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = lr(1 | n, t, i, r));
}
function $u(e, n) {
  return Fr(8390656, 8, e, n);
}
function Oo(e, n) {
  return xl(2048, 8, e, n);
}
function Fa(e, n) {
  return xl(4, 2, e, n);
}
function Ba(e, n) {
  return xl(4, 4, e, n);
}
function $a(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function Ua(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), xl(4, 4, $a.bind(null, n, e), t)
  );
}
function Ro() {}
function Va(e, n) {
  var t = Le();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Lo(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Aa(e, n) {
  var t = Le();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Lo(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Wa(e, n, t) {
  return $n & 21
    ? (Ue(t, n) || ((t = qs()), (A.lanes |= t), (Un |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = t));
}
function xf(e, n) {
  var t = O;
  (O = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Gl.transition;
  Gl.transition = {};
  try {
    e(!1), n();
  } finally {
    (O = t), (Gl.transition = r);
  }
}
function Ha() {
  return Le().memoizedState;
}
function wf(e, n, t) {
  var r = _n(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qa(e))
  )
    qa(n, t);
  else if (((t = ka(e, n, t, r)), t !== null)) {
    var l = de();
    $e(t, e, r, l), Ka(t, n, r);
  }
}
function kf(e, n, t) {
  var r = _n(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Qa(e)) qa(n, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var o = n.lastRenderedState,
          s = i(o, t);
        if (((l.hasEagerState = !0), (l.eagerState = s), Ue(s, o))) {
          var a = n.interleaved;
          a === null
            ? ((l.next = l), Eo(n))
            : ((l.next = a.next), (a.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = ka(e, n, l, r)),
      t !== null && ((l = de()), $e(t, e, r, l), Ka(t, n, r));
  }
}
function Qa(e) {
  var n = e.alternate;
  return e === A || (n !== null && n === A);
}
function qa(e, n) {
  $t = il = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function Ka(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), co(e, t);
  }
}
var ol = {
    readContext: Pe,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  Sf = {
    readContext: Pe,
    useCallback: function (e, n) {
      return (We().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Pe,
    useEffect: $u,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Fr(4194308, 4, $a.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return Fr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Fr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = We();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = We();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = wf.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = We();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: Bu,
    useDebugValue: Ro,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = Bu(!1),
        n = e[0];
      return (e = xf.bind(null, e[1])), (We().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = A,
        l = We();
      if (U) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), ne === null)) throw Error(y(349));
        $n & 30 || Ia(r, n, t);
      }
      l.memoizedState = t;
      var i = { value: t, getSnapshot: n };
      return (
        (l.queue = i),
        $u(Oa.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        lr(9, Ta.bind(null, r, i, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = We(),
        n = ne.identifierPrefix;
      if (U) {
        var t = Ge,
          r = Xe;
        (t = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = tr++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = _f++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  jf = {
    readContext: Pe,
    useCallback: Va,
    useContext: Pe,
    useEffect: Oo,
    useImperativeHandle: Ua,
    useInsertionEffect: Fa,
    useLayoutEffect: Ba,
    useMemo: Aa,
    useReducer: Zl,
    useRef: Da,
    useState: function () {
      return Zl(rr);
    },
    useDebugValue: Ro,
    useDeferredValue: function (e) {
      var n = Le();
      return Wa(n, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(rr)[0],
        n = Le().memoizedState;
      return [e, n];
    },
    useMutableSource: Pa,
    useSyncExternalStore: La,
    useId: Ha,
    unstable_isNewReconciler: !1,
  },
  Ef = {
    readContext: Pe,
    useCallback: Va,
    useContext: Pe,
    useEffect: Oo,
    useImperativeHandle: Ua,
    useInsertionEffect: Fa,
    useLayoutEffect: Ba,
    useMemo: Aa,
    useReducer: Jl,
    useRef: Da,
    useState: function () {
      return Jl(rr);
    },
    useDebugValue: Ro,
    useDeferredValue: function (e) {
      var n = Le();
      return G === null ? (n.memoizedState = e) : Wa(n, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Jl(rr)[0],
        n = Le().memoizedState;
      return [e, n];
    },
    useMutableSource: Pa,
    useSyncExternalStore: La,
    useId: Ha,
    unstable_isNewReconciler: !1,
  };
function ht(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Jc(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function bl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Bi(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var Cf = typeof WeakMap == "function" ? WeakMap : Map;
function Ya(e, n, t) {
  (t = Ze(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      sl || ((sl = !0), (Yi = r)), Bi(e, n);
    }),
    t
  );
}
function Xa(e, n, t) {
  (t = Ze(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Bi(e, n);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        Bi(e, n),
          typeof r != "function" &&
            (yn === null ? (yn = new Set([this])) : yn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    t
  );
}
function Uu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Cf();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = Uf.bind(null, e, n, t)), n.then(e, e));
}
function Vu(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Au(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = Ze(-1, 1)), (n.tag = 2), gn(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var Nf = tn.ReactCurrentOwner,
  me = !1;
function ce(e, n, t, r) {
  n.child = e === null ? Na(n, null, t, r) : ft(n, e.child, t, r);
}
function Wu(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return (
    ut(n, l),
    (r = Io(e, n, t, r, i, l)),
    (t = To()),
    e !== null && !me
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        nn(e, n, l))
      : (U && t && _o(n), (n.flags |= 1), ce(e, n, r, l), n.child)
  );
}
function Hu(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == "function" &&
      !Ao(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), Ga(e, n, i, r, l))
      : ((e = Vr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Gt), t(o, r) && e.ref === n.ref)
    )
      return nn(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = xn(i, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Ga(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Gt(i, r) && e.ref === n.ref)
      if (((me = !1), (n.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (me = !0);
      else return (n.lanes = e.lanes), nn(e, n, l);
  }
  return $i(e, n, t, r, l);
}
function Za(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(tt, _e),
        (_e |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          M(tt, _e),
          (_e |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        M(tt, _e),
        (_e |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | t), (n.memoizedState = null)) : (r = t),
      M(tt, _e),
      (_e |= r);
  return ce(e, n, l, t), n.child;
}
function Ja(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function $i(e, n, t, r, l) {
  var i = ge(t) ? Fn : ae.current;
  return (
    (i = ct(n, i)),
    ut(n, l),
    (t = Io(e, n, t, r, i, l)),
    (r = To()),
    e !== null && !me
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        nn(e, n, l))
      : (U && r && _o(n), (n.flags |= 1), ce(e, n, t, l), n.child)
  );
}
function Qu(e, n, t, r, l) {
  if (ge(t)) {
    var i = !0;
    Jr(n);
  } else i = !1;
  if ((ut(n, l), n.stateNode === null))
    Br(e, n), Ea(n, t, r), Fi(n, t, r, l), (r = !0);
  else if (e === null) {
    var o = n.stateNode,
      s = n.memoizedProps;
    o.props = s;
    var a = o.context,
      d = t.contextType;
    typeof d == "object" && d !== null
      ? (d = Pe(d))
      : ((d = ge(t) ? Fn : ae.current), (d = ct(n, d)));
    var v = t.getDerivedStateFromProps,
      m =
        typeof v == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || a !== d) && Du(n, o, r, d)),
      (un = !1);
    var h = n.memoizedState;
    (o.state = h),
      rl(n, r, o, l),
      (a = n.memoizedState),
      s !== r || h !== a || ve.current || un
        ? (typeof v == "function" && (Di(n, t, v, r), (a = n.memoizedState)),
          (s = un || Mu(n, t, s, r, h, a, d))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = d),
          (r = s))
        : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (o = n.stateNode),
      Sa(e, n),
      (s = n.memoizedProps),
      (d = n.type === n.elementType ? s : Re(n.type, s)),
      (o.props = d),
      (m = n.pendingProps),
      (h = o.context),
      (a = t.contextType),
      typeof a == "object" && a !== null
        ? (a = Pe(a))
        : ((a = ge(t) ? Fn : ae.current), (a = ct(n, a)));
    var _ = t.getDerivedStateFromProps;
    (v =
      typeof _ == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== m || h !== a) && Du(n, o, r, a)),
      (un = !1),
      (h = n.memoizedState),
      (o.state = h),
      rl(n, r, o, l);
    var x = n.memoizedState;
    s !== m || h !== x || ve.current || un
      ? (typeof _ == "function" && (Di(n, t, _, r), (x = n.memoizedState)),
        (d = un || Mu(n, t, d, r, h, x, a) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, a)),
            typeof o.componentDidUpdate == "function" && (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = a),
        (r = d))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Ui(e, n, t, r, i, l);
}
function Ui(e, n, t, r, l, i) {
  Ja(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o) return l && Lu(n, t, !1), nn(e, n, i);
  (r = n.stateNode), (Nf.current = n);
  var s =
    o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && o
      ? ((n.child = ft(n, e.child, null, i)), (n.child = ft(n, null, s, i)))
      : ce(e, n, s, i),
    (n.memoizedState = r.state),
    l && Lu(n, t, !0),
    n.child
  );
}
function ba(e) {
  var n = e.stateNode;
  n.pendingContext
    ? Pu(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && Pu(e, n.context, !1),
    No(e, n.containerInfo);
}
function qu(e, n, t, r, l) {
  return dt(), wo(l), (n.flags |= 256), ce(e, n, t, r), n.child;
}
var Vi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ai(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ec(e, n, t) {
  var r = n.pendingProps,
    l = V.current,
    i = !1,
    o = (n.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((i = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M(V, l & 1),
    e === null)
  )
    return (
      Ri(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = n.mode),
              (i = n.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Sl(o, r, 0, null)),
              (e = Dn(e, r, t, null)),
              (i.return = n),
              (e.return = n),
              (i.sibling = e),
              (n.child = i),
              (n.child.memoizedState = Ai(t)),
              (n.memoizedState = Vi),
              e)
            : Mo(n, o))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return zf(e, n, o, r, s, l, t);
  if (i) {
    (i = r.fallback), (o = n.mode), (l = e.child), (s = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (n.deletions = null))
        : ((r = xn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (i = xn(s, i)) : ((i = Dn(i, o, t, null)), (i.flags |= 2)),
      (i.return = n),
      (r.return = n),
      (r.sibling = i),
      (n.child = r),
      (r = i),
      (i = n.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ai(t)
          : {
              baseLanes: o.baseLanes | t,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~t),
      (n.memoizedState = Vi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = xn(i, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function Mo(e, n) {
  return (
    (n = Sl({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function Cr(e, n, t, r) {
  return (
    r !== null && wo(r),
    ft(n, e.child, null, t),
    (e = Mo(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function zf(e, n, t, r, l, i, o) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = bl(Error(y(422)))), Cr(e, n, o, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((i = r.fallback),
        (l = n.mode),
        (r = Sl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Dn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = n),
        (i.return = n),
        (r.sibling = i),
        (n.child = r),
        n.mode & 1 && ft(n, e.child, null, o),
        (n.child.memoizedState = Ai(o)),
        (n.memoizedState = Vi),
        i);
  if (!(n.mode & 1)) return Cr(e, n, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(y(419))), (r = bl(i, r, void 0)), Cr(e, n, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), me || s)) {
    if (((r = ne), r !== null)) {
      switch (o & -o) {
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
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), en(e, l), $e(r, e, l, -1));
    }
    return Vo(), (r = bl(Error(y(421)))), Cr(e, n, o, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = Vf.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = i.treeContext),
      (xe = vn(l.nextSibling)),
      (we = n),
      (U = !0),
      (Fe = null),
      e !== null &&
        ((Ee[Ce++] = Xe),
        (Ee[Ce++] = Ge),
        (Ee[Ce++] = Bn),
        (Xe = e.id),
        (Ge = e.overflow),
        (Bn = n)),
      (n = Mo(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Ku(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Mi(e.return, n, t);
}
function ei(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = l));
}
function nc(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ce(e, n, r.children, t), (r = V.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ku(e, t, n);
        else if (e.tag === 19) Ku(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((M(V, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && ll(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          ei(n, !1, l, t, i);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ll(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        ei(n, !0, t, null, i);
        break;
      case "together":
        ei(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Br(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function nn(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Un |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (
      e = n.child, t = xn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = xn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function Pf(e, n, t) {
  switch (n.tag) {
    case 3:
      ba(n), dt();
      break;
    case 5:
      za(n);
      break;
    case 1:
      ge(n.type) && Jr(n);
      break;
    case 4:
      No(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      M(nl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M(V, V.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? ec(e, n, t)
          : (M(V, V.current & 1),
            (e = nn(e, n, t)),
            e !== null ? e.sibling : null);
      M(V, V.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return nc(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        M(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Za(e, n, t);
  }
  return nn(e, n, t);
}
var tc, Wi, rc, lc;
tc = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Wi = function () {};
rc = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), Rn(qe.current);
    var i = null;
    switch (t) {
      case "input":
        (l = di(e, l)), (r = di(e, r)), (i = []);
        break;
      case "select":
        (l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = hi(e, l)), (r = hi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Gr);
    }
    vi(t, r);
    var o;
    t = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var s = l[d];
          for (o in s) s.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Wt.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in r) {
      var a = r[d];
      if (
        ((s = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && a !== s && (a != null || s != null))
      )
        if (d === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (t || (t = {}), (t[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                s[o] !== a[o] &&
                (t || (t = {}), (t[o] = a[o]));
          } else t || (i || (i = []), i.push(d, t)), (t = a);
        else
          d === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(d, a))
            : d === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(d, "" + a)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Wt.hasOwnProperty(d)
                ? (a != null && d === "onScroll" && D("scroll", e),
                  i || s === a || (i = []))
                : (i = i || []).push(d, a));
    }
    t && (i = i || []).push("style", t);
    var d = i;
    (n.updateQueue = d) && (n.flags |= 4);
  }
};
lc = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function Nt(e, n) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function Lf(e, n, t) {
  var r = n.pendingProps;
  switch ((xo(n), n.tag)) {
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
      return ue(n), null;
    case 1:
      return ge(n.type) && Zr(), ue(n), null;
    case 3:
      return (
        (r = n.stateNode),
        pt(),
        F(ve),
        F(ae),
        Po(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (jr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Fe !== null && (Zi(Fe), (Fe = null)))),
        Wi(e, n),
        ue(n),
        null
      );
    case 5:
      zo(n);
      var l = Rn(nr.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        rc(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return ue(n), null;
        }
        if (((e = Rn(qe.current)), jr(n))) {
          (r = n.stateNode), (t = n.type);
          var i = n.memoizedProps;
          switch (((r[He] = n), (r[bt] = i), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ot.length; l++) D(Ot[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              tu(r, i), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              lu(r, i), D("invalid", r);
          }
          vi(t, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Sr(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Sr(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Wt.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  D("scroll", r);
            }
          switch (t) {
            case "input":
              mr(r), ru(r, i, !0);
              break;
            case "textarea":
              mr(r), iu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Gr);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Is(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(t, { is: r.is }))
                : ((e = o.createElement(t)),
                  t === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, t)),
            (e[He] = n),
            (e[bt] = r),
            tc(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((o = gi(t, r)), t)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ot.length; l++) D(Ot[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                tu(e, r), (l = di(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                lu(e, r), (l = hi(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            vi(t, l), (s = l);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? Rs(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ts(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (t !== "textarea" || a !== "") && Ht(e, a)
                    : typeof a == "number" && Ht(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Wt.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && D("scroll", e)
                      : a != null && lo(e, i, a, o));
              }
            switch (t) {
              case "input":
                mr(e), ru(e, r, !1);
                break;
              case "textarea":
                mr(e), iu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? rt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      rt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Gr);
            }
            switch (t) {
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
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return ue(n), null;
    case 6:
      if (e && n.stateNode != null) lc(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (((t = Rn(nr.current)), Rn(qe.current), jr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[He] = n),
            (i = r.nodeValue !== t) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                Sr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Sr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[He] = n),
            (n.stateNode = r);
      }
      return ue(n), null;
    case 13:
      if (
        (F(V),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && xe !== null && n.mode & 1 && !(n.flags & 128))
          wa(), dt(), (n.flags |= 98560), (i = !1);
        else if (((i = jr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[He] = n;
          } else
            dt(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          ue(n), (i = !1);
        } else Fe !== null && (Zi(Fe), (Fe = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || V.current & 1 ? Z === 0 && (Z = 3) : Vo())),
          n.updateQueue !== null && (n.flags |= 4),
          ue(n),
          null);
    case 4:
      return (
        pt(), Wi(e, n), e === null && Zt(n.stateNode.containerInfo), ue(n), null
      );
    case 10:
      return jo(n.type._context), ue(n), null;
    case 17:
      return ge(n.type) && Zr(), ue(n), null;
    case 19:
      if ((F(V), (i = n.memoizedState), i === null)) return ue(n), null;
      if (((r = (n.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Nt(i, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((o = ll(e)), o !== null)) {
                for (
                  n.flags |= 128,
                    Nt(i, !1),
                    r = o.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (i = t),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return M(V, (V.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > mt &&
            ((n.flags |= 128), (r = !0), Nt(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ll(o)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              Nt(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
            )
              return ue(n), null;
          } else
            2 * K() - i.renderingStartTime > mt &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), Nt(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = n.child), (n.child = o))
          : ((t = i.last),
            t !== null ? (t.sibling = o) : (n.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = K()),
          (n.sibling = null),
          (t = V.current),
          M(V, r ? (t & 1) | 2 : t & 1),
          n)
        : (ue(n), null);
    case 22:
    case 23:
      return (
        Uo(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? _e & 1073741824 && (ue(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : ue(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function If(e, n) {
  switch ((xo(n), n.tag)) {
    case 1:
      return (
        ge(n.type) && Zr(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        pt(),
        F(ve),
        F(ae),
        Po(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return zo(n), null;
    case 13:
      if ((F(V), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        dt();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return F(V), null;
    case 4:
      return pt(), null;
    case 10:
      return jo(n.type._context), null;
    case 22:
    case 23:
      return Uo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nr = !1,
  se = !1,
  Tf = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function nt(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        H(e, n, r);
      }
    else t.current = null;
}
function Hi(e, n, t) {
  try {
    t();
  } catch (r) {
    H(e, n, r);
  }
}
var Yu = !1;
function Of(e, n) {
  if (((Ni = Kr), (e = sa()), yo(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0,
            s = -1,
            a = -1,
            d = 0,
            v = 0,
            m = e,
            h = null;
          n: for (;;) {
            for (
              var _;
              m !== t || (l !== 0 && m.nodeType !== 3) || (s = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (a = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (_ = m.firstChild) !== null;

            )
              (h = m), (m = _);
            for (;;) {
              if (m === e) break n;
              if (
                (h === t && ++d === l && (s = o),
                h === i && ++v === r && (a = o),
                (_ = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = _;
          }
          t = s === -1 || a === -1 ? null : { start: s, end: a };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (zi = { focusedElem: e, selectionRange: t }, Kr = !1, k = n; k !== null; )
    if (((n = k), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (k = e);
    else
      for (; k !== null; ) {
        n = k;
        try {
          var x = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    B = x.memoizedState,
                    f = n.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? w : Re(n.type, w),
                      B
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = n.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          H(n, n.return, g);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (k = e);
          break;
        }
        k = n.return;
      }
  return (x = Yu), (Yu = !1), x;
}
function Ut(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Hi(n, t, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function wl(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Qi(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function ic(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), ic(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[He], delete n[bt], delete n[Ii], delete n[mf], delete n[vf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function oc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || oc(e.return)) return null;
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
function qi(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Gr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qi(e, n, t), e = e.sibling; e !== null; ) qi(e, n, t), (e = e.sibling);
}
function Ki(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ki(e, n, t), e = e.sibling; e !== null; ) Ki(e, n, t), (e = e.sibling);
}
var re = null,
  Me = !1;
function rn(e, n, t) {
  for (t = t.child; t !== null; ) uc(e, n, t), (t = t.sibling);
}
function uc(e, n, t) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function")
    try {
      Qe.onCommitFiberUnmount(pl, t);
    } catch {}
  switch (t.tag) {
    case 5:
      se || nt(t, n);
    case 6:
      var r = re,
        l = Me;
      (re = null),
        rn(e, n, t),
        (re = r),
        (Me = l),
        re !== null &&
          (Me
            ? ((e = re),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : re.removeChild(t.stateNode));
      break;
    case 18:
      re !== null &&
        (Me
          ? ((e = re),
            (t = t.stateNode),
            e.nodeType === 8
              ? Kl(e.parentNode, t)
              : e.nodeType === 1 && Kl(e, t),
            Yt(e))
          : Kl(re, t.stateNode));
      break;
    case 4:
      (r = re),
        (l = Me),
        (re = t.stateNode.containerInfo),
        (Me = !0),
        rn(e, n, t),
        (re = r),
        (Me = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Hi(t, n, o),
            (l = l.next);
        } while (l !== r);
      }
      rn(e, n, t);
      break;
    case 1:
      if (
        !se &&
        (nt(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          H(t, n, s);
        }
      rn(e, n, t);
      break;
    case 21:
      rn(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((se = (r = se) || t.memoizedState !== null), rn(e, n, t), (se = r))
        : rn(e, n, t);
      break;
    default:
      rn(e, n, t);
  }
}
function Gu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Tf()),
      n.forEach(function (r) {
        var l = Af.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function Te(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var i = e,
          o = n,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (re = s.stateNode), (Me = !1);
              break e;
            case 3:
              (re = s.stateNode.containerInfo), (Me = !0);
              break e;
            case 4:
              (re = s.stateNode.containerInfo), (Me = !0);
              break e;
          }
          s = s.return;
        }
        if (re === null) throw Error(y(160));
        uc(i, o, l), (re = null), (Me = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (d) {
        H(l, n, d);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) sc(n, e), (n = n.sibling);
}
function sc(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(n, e), Ae(e), r & 4)) {
        try {
          Ut(3, e, e.return), wl(3, e);
        } catch (w) {
          H(e, e.return, w);
        }
        try {
          Ut(5, e, e.return);
        } catch (w) {
          H(e, e.return, w);
        }
      }
      break;
    case 1:
      Te(n, e), Ae(e), r & 512 && t !== null && nt(t, t.return);
      break;
    case 5:
      if (
        (Te(n, e),
        Ae(e),
        r & 512 && t !== null && nt(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Ht(l, "");
        } catch (w) {
          H(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = t !== null ? t.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Ps(l, i),
              gi(s, o);
            var d = gi(s, i);
            for (o = 0; o < a.length; o += 2) {
              var v = a[o],
                m = a[o + 1];
              v === "style"
                ? Rs(l, m)
                : v === "dangerouslySetInnerHTML"
                ? Ts(l, m)
                : v === "children"
                ? Ht(l, m)
                : lo(l, v, m, d);
            }
            switch (s) {
              case "input":
                fi(l, i);
                break;
              case "textarea":
                Ls(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var _ = i.value;
                _ != null
                  ? rt(l, !!i.multiple, _, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? rt(l, !!i.multiple, i.defaultValue, !0)
                      : rt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[bt] = i;
          } catch (w) {
            H(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Te(n, e), Ae(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          H(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Te(n, e), Ae(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Yt(n.containerInfo);
        } catch (w) {
          H(e, e.return, w);
        }
      break;
    case 4:
      Te(n, e), Ae(e);
      break;
    case 13:
      Te(n, e),
        Ae(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Bo = K())),
        r & 4 && Gu(e);
      break;
    case 22:
      if (
        ((v = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((se = (d = se) || v), Te(n, e), (se = d)) : Te(n, e),
        Ae(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !v && e.mode & 1)
        )
          for (k = e, v = e.child; v !== null; ) {
            for (m = k = v; k !== null; ) {
              switch (((h = k), (_ = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ut(4, h, h.return);
                  break;
                case 1:
                  nt(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = h), (t = h.return);
                    try {
                      (n = r),
                        (x.props = n.memoizedProps),
                        (x.state = n.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      H(r, t, w);
                    }
                  }
                  break;
                case 5:
                  nt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Ju(m);
                    continue;
                  }
              }
              _ !== null ? ((_.return = h), (k = _)) : Ju(m);
            }
            v = v.sibling;
          }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                (l = m.stateNode),
                  d
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = m.stateNode),
                      (a = m.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Os("display", o)));
              } catch (w) {
                H(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (v === null)
              try {
                m.stateNode.nodeValue = d ? "" : m.memoizedProps;
              } catch (w) {
                H(e, e.return, w);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            v === m && (v = null), (m = m.return);
          }
          v === m && (v = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Te(n, e), Ae(e), r & 4 && Gu(e);
      break;
    case 21:
      break;
    default:
      Te(n, e), Ae(e);
  }
}
function Ae(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (oc(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ht(l, ""), (r.flags &= -33));
          var i = Xu(e);
          Ki(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = Xu(e);
          qi(e, s, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (a) {
      H(e, e.return, a);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Rf(e, n, t) {
  (k = e), ac(e);
}
function ac(e, n, t) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Nr;
      if (!o) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || se;
        s = Nr;
        var d = se;
        if (((Nr = o), (se = a) && !d))
          for (k = l; k !== null; )
            (o = k),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? bu(l)
                : a !== null
                ? ((a.return = o), (k = a))
                : bu(l);
        for (; i !== null; ) (k = i), ac(i), (i = i.sibling);
        (k = l), (Nr = s), (se = d);
      }
      Zu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (k = i)) : Zu(e);
  }
}
function Zu(e) {
  for (; k !== null; ) {
    var n = k;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              se || wl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !se)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Re(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = n.updateQueue;
              i !== null && Ru(n, i, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                Ru(n, o, t);
              }
              break;
            case 5:
              var s = n.stateNode;
              if (t === null && n.flags & 4) {
                t = s;
                var a = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && t.focus();
                    break;
                  case "img":
                    a.src && (t.src = a.src);
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
              if (n.memoizedState === null) {
                var d = n.alternate;
                if (d !== null) {
                  var v = d.memoizedState;
                  if (v !== null) {
                    var m = v.dehydrated;
                    m !== null && Yt(m);
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
              throw Error(y(163));
          }
        se || (n.flags & 512 && Qi(n));
      } catch (h) {
        H(n, n.return, h);
      }
    }
    if (n === e) {
      k = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function Ju(e) {
  for (; k !== null; ) {
    var n = k;
    if (n === e) {
      k = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function bu(e) {
  for (; k !== null; ) {
    var n = k;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            wl(4, n);
          } catch (a) {
            H(n, t, a);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (a) {
              H(n, l, a);
            }
          }
          var i = n.return;
          try {
            Qi(n);
          } catch (a) {
            H(n, i, a);
          }
          break;
        case 5:
          var o = n.return;
          try {
            Qi(n);
          } catch (a) {
            H(n, o, a);
          }
      }
    } catch (a) {
      H(n, n.return, a);
    }
    if (n === e) {
      k = null;
      break;
    }
    var s = n.sibling;
    if (s !== null) {
      (s.return = n.return), (k = s);
      break;
    }
    k = n.return;
  }
}
var Mf = Math.ceil,
  ul = tn.ReactCurrentDispatcher,
  Do = tn.ReactCurrentOwner,
  ze = tn.ReactCurrentBatchConfig,
  T = 0,
  ne = null,
  X = null,
  le = 0,
  _e = 0,
  tt = En(0),
  Z = 0,
  ir = null,
  Un = 0,
  kl = 0,
  Fo = 0,
  Vt = null,
  he = null,
  Bo = 0,
  mt = 1 / 0,
  Ke = null,
  sl = !1,
  Yi = null,
  yn = null,
  zr = !1,
  dn = null,
  al = 0,
  At = 0,
  Xi = null,
  $r = -1,
  Ur = 0;
function de() {
  return T & 6 ? K() : $r !== -1 ? $r : ($r = K());
}
function _n(e) {
  return e.mode & 1
    ? T & 2 && le !== 0
      ? le & -le
      : yf.transition !== null
      ? (Ur === 0 && (Ur = qs()), Ur)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bs(e.type))),
        e)
    : 1;
}
function $e(e, n, t, r) {
  if (50 < At) throw ((At = 0), (Xi = null), Error(y(185)));
  ur(e, t, r),
    (!(T & 2) || e !== ne) &&
      (e === ne && (!(T & 2) && (kl |= t), Z === 4 && an(e, le)),
      ye(e, r),
      t === 1 && T === 0 && !(n.mode & 1) && ((mt = K() + 500), yl && Cn()));
}
function ye(e, n) {
  var t = e.callbackNode;
  gd(e, n);
  var r = qr(e, e === ne ? le : 0);
  if (r === 0)
    t !== null && su(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && su(t), n === 1))
      e.tag === 0 ? gf(es.bind(null, e)) : ya(es.bind(null, e)),
        pf(function () {
          !(T & 6) && Cn();
        }),
        (t = null);
    else {
      switch (Ks(r)) {
        case 1:
          t = ao;
          break;
        case 4:
          t = Hs;
          break;
        case 16:
          t = Qr;
          break;
        case 536870912:
          t = Qs;
          break;
        default:
          t = Qr;
      }
      t = gc(t, cc.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function cc(e, n) {
  if ((($r = -1), (Ur = 0), T & 6)) throw Error(y(327));
  var t = e.callbackNode;
  if (st() && e.callbackNode !== t) return null;
  var r = qr(e, e === ne ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = cl(e, r);
  else {
    n = r;
    var l = T;
    T |= 2;
    var i = fc();
    (ne !== e || le !== n) && ((Ke = null), (mt = K() + 500), Mn(e, n));
    do
      try {
        Bf();
        break;
      } catch (s) {
        dc(e, s);
      }
    while (!0);
    So(),
      (ul.current = i),
      (T = l),
      X !== null ? (n = 0) : ((ne = null), (le = 0), (n = Z));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = ki(e)), l !== 0 && ((r = l), (n = Gi(e, l)))), n === 1)
    )
      throw ((t = ir), Mn(e, 0), an(e, r), ye(e, K()), t);
    if (n === 6) an(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Df(l) &&
          ((n = cl(e, r)),
          n === 2 && ((i = ki(e)), i !== 0 && ((r = i), (n = Gi(e, i)))),
          n === 1))
      )
        throw ((t = ir), Mn(e, 0), an(e, r), ye(e, K()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          In(e, he, Ke);
          break;
        case 3:
          if (
            (an(e, r), (r & 130023424) === r && ((n = Bo + 500 - K()), 10 < n))
          ) {
            if (qr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Li(In.bind(null, e, he, Ke), n);
            break;
          }
          In(e, he, Ke);
          break;
        case 4:
          if ((an(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Be(r);
            (i = 1 << o), (o = n[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
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
                : 1960 * Mf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Li(In.bind(null, e, he, Ke), r);
            break;
          }
          In(e, he, Ke);
          break;
        case 5:
          In(e, he, Ke);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return ye(e, K()), e.callbackNode === t ? cc.bind(null, e) : null;
}
function Gi(e, n) {
  var t = Vt;
  return (
    e.current.memoizedState.isDehydrated && (Mn(e, n).flags |= 256),
    (e = cl(e, n)),
    e !== 2 && ((n = he), (he = t), n !== null && Zi(n)),
    e
  );
}
function Zi(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function Df(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ue(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function an(e, n) {
  for (
    n &= ~Fo,
      n &= ~kl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Be(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function es(e) {
  if (T & 6) throw Error(y(327));
  st();
  var n = qr(e, 0);
  if (!(n & 1)) return ye(e, K()), null;
  var t = cl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = ki(e);
    r !== 0 && ((n = r), (t = Gi(e, r)));
  }
  if (t === 1) throw ((t = ir), Mn(e, 0), an(e, n), ye(e, K()), t);
  if (t === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    In(e, he, Ke),
    ye(e, K()),
    null
  );
}
function $o(e, n) {
  var t = T;
  T |= 1;
  try {
    return e(n);
  } finally {
    (T = t), T === 0 && ((mt = K() + 500), yl && Cn());
  }
}
function Vn(e) {
  dn !== null && dn.tag === 0 && !(T & 6) && st();
  var n = T;
  T |= 1;
  var t = ze.transition,
    r = O;
  try {
    if (((ze.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (ze.transition = t), (T = n), !(T & 6) && Cn();
  }
}
function Uo() {
  (_e = tt.current), F(tt);
}
function Mn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), ff(t)), X !== null))
    for (t = X.return; t !== null; ) {
      var r = t;
      switch ((xo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zr();
          break;
        case 3:
          pt(), F(ve), F(ae), Po();
          break;
        case 5:
          zo(r);
          break;
        case 4:
          pt();
          break;
        case 13:
          F(V);
          break;
        case 19:
          F(V);
          break;
        case 10:
          jo(r.type._context);
          break;
        case 22:
        case 23:
          Uo();
      }
      t = t.return;
    }
  if (
    ((ne = e),
    (X = e = xn(e.current, null)),
    (le = _e = n),
    (Z = 0),
    (ir = null),
    (Fo = kl = Un = 0),
    (he = Vt = null),
    On !== null)
  ) {
    for (n = 0; n < On.length; n++)
      if (((t = On[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          i = t.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        t.pending = r;
      }
    On = null;
  }
  return e;
}
function dc(e, n) {
  do {
    var t = X;
    try {
      if ((So(), (Dr.current = ol), il)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        il = !1;
      }
      if (
        (($n = 0),
        (ee = G = A = null),
        ($t = !1),
        (tr = 0),
        (Do.current = null),
        t === null || t.return === null)
      ) {
        (Z = 1), (ir = n), (X = null);
        break;
      }
      e: {
        var i = e,
          o = t.return,
          s = t,
          a = n;
        if (
          ((n = le),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var d = a,
            v = s,
            m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = v.alternate;
            h
              ? ((v.updateQueue = h.updateQueue),
                (v.memoizedState = h.memoizedState),
                (v.lanes = h.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var _ = Vu(o);
          if (_ !== null) {
            (_.flags &= -257),
              Au(_, o, s, i, n),
              _.mode & 1 && Uu(i, d, n),
              (n = _),
              (a = d);
            var x = n.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(a), (n.updateQueue = w);
            } else x.add(a);
            break e;
          } else {
            if (!(n & 1)) {
              Uu(i, d, n), Vo();
              break e;
            }
            a = Error(y(426));
          }
        } else if (U && s.mode & 1) {
          var B = Vu(o);
          if (B !== null) {
            !(B.flags & 65536) && (B.flags |= 256),
              Au(B, o, s, i, n),
              wo(ht(a, s));
            break e;
          }
        }
        (i = a = ht(a, s)),
          Z !== 4 && (Z = 2),
          Vt === null ? (Vt = [i]) : Vt.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var f = Ya(i, a, n);
              Ou(i, f);
              break e;
            case 1:
              s = a;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (yn === null || !yn.has(p))))
              ) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var g = Xa(i, s, n);
                Ou(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      hc(t);
    } catch (S) {
      (n = S), X === t && t !== null && (X = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function fc() {
  var e = ul.current;
  return (ul.current = ol), e === null ? ol : e;
}
function Vo() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    ne === null || (!(Un & 268435455) && !(kl & 268435455)) || an(ne, le);
}
function cl(e, n) {
  var t = T;
  T |= 2;
  var r = fc();
  (ne !== e || le !== n) && ((Ke = null), Mn(e, n));
  do
    try {
      Ff();
      break;
    } catch (l) {
      dc(e, l);
    }
  while (!0);
  if ((So(), (T = t), (ul.current = r), X !== null)) throw Error(y(261));
  return (ne = null), (le = 0), Z;
}
function Ff() {
  for (; X !== null; ) pc(X);
}
function Bf() {
  for (; X !== null && !sd(); ) pc(X);
}
function pc(e) {
  var n = vc(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    n === null ? hc(e) : (X = n),
    (Do.current = null);
}
function hc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = If(t, n)), t !== null)) {
        (t.flags &= 32767), (X = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (X = null);
        return;
      }
    } else if (((t = Lf(t, n, _e)), t !== null)) {
      X = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      X = n;
      return;
    }
    X = n = e;
  } while (n !== null);
  Z === 0 && (Z = 5);
}
function In(e, n, t) {
  var r = O,
    l = ze.transition;
  try {
    (ze.transition = null), (O = 1), $f(e, n, t, r);
  } finally {
    (ze.transition = l), (O = r);
  }
  return null;
}
function $f(e, n, t, r) {
  do st();
  while (dn !== null);
  if (T & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (yd(e, i),
    e === ne && ((X = ne = null), (le = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      zr ||
      ((zr = !0),
      gc(Qr, function () {
        return st(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    (i = ze.transition), (ze.transition = null);
    var o = O;
    O = 1;
    var s = T;
    (T |= 4),
      (Do.current = null),
      Of(e, t),
      sc(t, e),
      lf(zi),
      (Kr = !!Ni),
      (zi = Ni = null),
      (e.current = t),
      Rf(t),
      ad(),
      (T = s),
      (O = o),
      (ze.transition = i);
  } else e.current = t;
  if (
    (zr && ((zr = !1), (dn = e), (al = l)),
    (i = e.pendingLanes),
    i === 0 && (yn = null),
    fd(t.stateNode),
    ye(e, K()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (sl) throw ((sl = !1), (e = Yi), (Yi = null), e);
  return (
    al & 1 && e.tag !== 0 && st(),
    (i = e.pendingLanes),
    i & 1 ? (e === Xi ? At++ : ((At = 0), (Xi = e))) : (At = 0),
    Cn(),
    null
  );
}
function st() {
  if (dn !== null) {
    var e = Ks(al),
      n = ze.transition,
      t = O;
    try {
      if (((ze.transition = null), (O = 16 > e ? 16 : e), dn === null))
        var r = !1;
      else {
        if (((e = dn), (dn = null), (al = 0), T & 6)) throw Error(y(331));
        var l = T;
        for (T |= 4, k = e.current; k !== null; ) {
          var i = k,
            o = i.child;
          if (k.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var d = s[a];
                for (k = d; k !== null; ) {
                  var v = k;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ut(8, v, i);
                  }
                  var m = v.child;
                  if (m !== null) (m.return = v), (k = m);
                  else
                    for (; k !== null; ) {
                      v = k;
                      var h = v.sibling,
                        _ = v.return;
                      if ((ic(v), v === d)) {
                        k = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = _), (k = h);
                        break;
                      }
                      k = _;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var B = w.sibling;
                    (w.sibling = null), (w = B);
                  } while (w !== null);
                }
              }
              k = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (k = o);
          else
            e: for (; k !== null; ) {
              if (((i = k), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ut(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (k = f);
                break e;
              }
              k = i.return;
            }
        }
        var c = e.current;
        for (k = c; k !== null; ) {
          o = k;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (k = p);
          else
            e: for (o = c; k !== null; ) {
              if (((s = k), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wl(9, s);
                  }
                } catch (S) {
                  H(s, s.return, S);
                }
              if (s === o) {
                k = null;
                break e;
              }
              var g = s.sibling;
              if (g !== null) {
                (g.return = s.return), (k = g);
                break e;
              }
              k = s.return;
            }
        }
        if (
          ((T = l), Cn(), Qe && typeof Qe.onPostCommitFiberRoot == "function")
        )
          try {
            Qe.onPostCommitFiberRoot(pl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = t), (ze.transition = n);
    }
  }
  return !1;
}
function ns(e, n, t) {
  (n = ht(t, n)),
    (n = Ya(e, n, 1)),
    (e = gn(e, n, 1)),
    (n = de()),
    e !== null && (ur(e, 1, n), ye(e, n));
}
function H(e, n, t) {
  if (e.tag === 3) ns(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        ns(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yn === null || !yn.has(r)))
        ) {
          (e = ht(t, e)),
            (e = Xa(n, e, 1)),
            (n = gn(n, e, 1)),
            (e = de()),
            n !== null && (ur(n, 1, e), ye(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Uf(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = de()),
    (e.pingedLanes |= e.suspendedLanes & t),
    ne === e &&
      (le & t) === t &&
      (Z === 4 || (Z === 3 && (le & 130023424) === le && 500 > K() - Bo)
        ? Mn(e, 0)
        : (Fo |= t)),
    ye(e, n);
}
function mc(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = yr), (yr <<= 1), !(yr & 130023424) && (yr = 4194304))
      : (n = 1));
  var t = de();
  (e = en(e, n)), e !== null && (ur(e, n, t), ye(e, t));
}
function Vf(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), mc(e, t);
}
function Af(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), mc(e, t);
}
var vc;
vc = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || ve.current) me = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (me = !1), Pf(e, n, t);
      me = !!(e.flags & 131072);
    }
  else (me = !1), U && n.flags & 1048576 && _a(n, el, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      Br(e, n), (e = n.pendingProps);
      var l = ct(n, ae.current);
      ut(n, t), (l = Io(null, n, r, e, l, t));
      var i = To();
      return (
        (n.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            ge(r) ? ((i = !0), Jr(n)) : (i = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Co(n),
            (l.updater = _l),
            (n.stateNode = l),
            (l._reactInternals = n),
            Fi(n, r, e, t),
            (n = Ui(null, n, r, !0, i, t)))
          : ((n.tag = 0), U && i && _o(n), ce(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (Br(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = Hf(r)),
          (e = Re(r, e)),
          l)
        ) {
          case 0:
            n = $i(null, n, r, e, t);
            break e;
          case 1:
            n = Qu(null, n, r, e, t);
            break e;
          case 11:
            n = Wu(null, n, r, e, t);
            break e;
          case 14:
            n = Hu(null, n, r, Re(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Re(r, l)),
        $i(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Re(r, l)),
        Qu(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((ba(n), e === null)) throw Error(y(387));
        (r = n.pendingProps),
          (i = n.memoizedState),
          (l = i.element),
          Sa(e, n),
          rl(n, r, null, t);
        var o = n.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            (l = ht(Error(y(423)), n)), (n = qu(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = ht(Error(y(424)), n)), (n = qu(e, n, r, t, l));
            break e;
          } else
            for (
              xe = vn(n.stateNode.containerInfo.firstChild),
                we = n,
                U = !0,
                Fe = null,
                t = Na(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((dt(), r === l)) {
            n = nn(e, n, t);
            break e;
          }
          ce(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        za(n),
        e === null && Ri(n),
        (r = n.type),
        (l = n.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Pi(r, l) ? (o = null) : i !== null && Pi(r, i) && (n.flags |= 32),
        Ja(e, n),
        ce(e, n, o, t),
        n.child
      );
    case 6:
      return e === null && Ri(n), null;
    case 13:
      return ec(e, n, t);
    case 4:
      return (
        No(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = ft(n, null, r, t)) : ce(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Re(r, l)),
        Wu(e, n, r, l, t)
      );
    case 7:
      return ce(e, n, n.pendingProps, t), n.child;
    case 8:
      return ce(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ce(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (i = n.memoizedProps),
          (o = l.value),
          M(nl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ue(i.value, o)) {
            if (i.children === l.children && !ve.current) {
              n = nn(e, n, t);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                o = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Ze(-1, t & -t)), (a.tag = 2);
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var v = d.pending;
                        v === null
                          ? (a.next = a)
                          : ((a.next = v.next), (v.next = a)),
                          (d.pending = a);
                      }
                    }
                    (i.lanes |= t),
                      (a = i.alternate),
                      a !== null && (a.lanes |= t),
                      Mi(i.return, t, n),
                      (s.lanes |= t);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= t),
                  (s = o.alternate),
                  s !== null && (s.lanes |= t),
                  Mi(o, t, n),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ce(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        ut(n, t),
        (l = Pe(l)),
        (r = r(l)),
        (n.flags |= 1),
        ce(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = Re(r, n.pendingProps)),
        (l = Re(r.type, l)),
        Hu(e, n, r, l, t)
      );
    case 15:
      return Ga(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Re(r, l)),
        Br(e, n),
        (n.tag = 1),
        ge(r) ? ((e = !0), Jr(n)) : (e = !1),
        ut(n, t),
        Ea(n, r, l),
        Fi(n, r, l, t),
        Ui(null, n, r, !0, e, t)
      );
    case 19:
      return nc(e, n, t);
    case 22:
      return Za(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function gc(e, n) {
  return Ws(e, n);
}
function Wf(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
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
function Ne(e, n, t, r) {
  return new Wf(e, n, t, r);
}
function Ao(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Hf(e) {
  if (typeof e == "function") return Ao(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === oo)) return 11;
    if (e === uo) return 14;
  }
  return 2;
}
function xn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = Ne(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Vr(e, n, t, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ao(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case qn:
        return Dn(t.children, l, i, n);
      case io:
        (o = 8), (l |= 8);
        break;
      case ui:
        return (
          (e = Ne(12, t, n, l | 2)), (e.elementType = ui), (e.lanes = i), e
        );
      case si:
        return (e = Ne(13, t, n, l)), (e.elementType = si), (e.lanes = i), e;
      case ai:
        return (e = Ne(19, t, n, l)), (e.elementType = ai), (e.lanes = i), e;
      case Cs:
        return Sl(t, l, i, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case js:
              o = 10;
              break e;
            case Es:
              o = 9;
              break e;
            case oo:
              o = 11;
              break e;
            case uo:
              o = 14;
              break e;
            case on:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = Ne(o, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = i), n
  );
}
function Dn(e, n, t, r) {
  return (e = Ne(7, e, r, n)), (e.lanes = t), e;
}
function Sl(e, n, t, r) {
  return (
    (e = Ne(22, e, r, n)),
    (e.elementType = Cs),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ni(e, n, t) {
  return (e = Ne(6, e, null, n)), (e.lanes = t), e;
}
function ti(e, n, t) {
  return (
    (n = Ne(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function Qf(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Dl(0)),
    (this.expirationTimes = Dl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Dl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Wo(e, n, t, r, l, i, o, s, a) {
  return (
    (e = new Qf(e, n, t, s, a)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = Ne(3, null, null, n)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Co(i),
    e
  );
}
function qf(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function yc(e) {
  if (!e) return Sn;
  e = e._reactInternals;
  e: {
    if (Wn(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (ge(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (ge(t)) return ga(e, t, n);
  }
  return n;
}
function _c(e, n, t, r, l, i, o, s, a) {
  return (
    (e = Wo(t, r, !0, e, l, i, o, s, a)),
    (e.context = yc(null)),
    (t = e.current),
    (r = de()),
    (l = _n(t)),
    (i = Ze(r, l)),
    (i.callback = n ?? null),
    gn(t, i, l),
    (e.current.lanes = l),
    ur(e, l, r),
    ye(e, r),
    e
  );
}
function jl(e, n, t, r) {
  var l = n.current,
    i = de(),
    o = _n(l);
  return (
    (t = yc(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = Ze(i, o)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = gn(l, n, o)),
    e !== null && ($e(e, l, o, i), Mr(e, l, o)),
    o
  );
}
function dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ts(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Ho(e, n) {
  ts(e, n), (e = e.alternate) && ts(e, n);
}
function Kf() {
  return null;
}
var xc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qo(e) {
  this._internalRoot = e;
}
El.prototype.render = Qo.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  jl(e, n, null, null);
};
El.prototype.unmount = Qo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Vn(function () {
      jl(null, e, null, null);
    }),
      (n[be] = null);
  }
};
function El(e) {
  this._internalRoot = e;
}
El.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Gs();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < sn.length && n !== 0 && n < sn[t].priority; t++);
    sn.splice(t, 0, e), t === 0 && Js(e);
  }
};
function qo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Cl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function rs() {}
function Yf(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var d = dl(o);
        i.call(d);
      };
    }
    var o = _c(n, r, e, 0, null, !1, !1, "", rs);
    return (
      (e._reactRootContainer = o),
      (e[be] = o.current),
      Zt(e.nodeType === 8 ? e.parentNode : e),
      Vn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var d = dl(a);
      s.call(d);
    };
  }
  var a = Wo(e, 0, !1, null, null, !1, !1, "", rs);
  return (
    (e._reactRootContainer = a),
    (e[be] = a.current),
    Zt(e.nodeType === 8 ? e.parentNode : e),
    Vn(function () {
      jl(n, a, t, r);
    }),
    a
  );
}
function Nl(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var a = dl(o);
        s.call(a);
      };
    }
    jl(n, o, e, l);
  } else o = Yf(t, n, e, l, r);
  return dl(o);
}
Ys = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Tt(n.pendingLanes);
        t !== 0 &&
          (co(n, t | 1), ye(n, K()), !(T & 6) && ((mt = K() + 500), Cn()));
      }
      break;
    case 13:
      Vn(function () {
        var r = en(e, 1);
        if (r !== null) {
          var l = de();
          $e(r, e, 1, l);
        }
      }),
        Ho(e, 1);
  }
};
fo = function (e) {
  if (e.tag === 13) {
    var n = en(e, 134217728);
    if (n !== null) {
      var t = de();
      $e(n, e, 134217728, t);
    }
    Ho(e, 134217728);
  }
};
Xs = function (e) {
  if (e.tag === 13) {
    var n = _n(e),
      t = en(e, n);
    if (t !== null) {
      var r = de();
      $e(t, e, n, r);
    }
    Ho(e, n);
  }
};
Gs = function () {
  return O;
};
Zs = function (e, n) {
  var t = O;
  try {
    return (O = e), n();
  } finally {
    O = t;
  }
};
_i = function (e, n, t) {
  switch (n) {
    case "input":
      if ((fi(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = gl(r);
            if (!l) throw Error(y(90));
            zs(r), fi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ls(e, t);
      break;
    case "select":
      (n = t.value), n != null && rt(e, !!t.multiple, n, !1);
  }
};
Fs = $o;
Bs = Vn;
var Xf = { usingClientEntryPoint: !1, Events: [ar, Gn, gl, Ms, Ds, $o] },
  zt = {
    findFiberByHostInstance: Tn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Gf = {
    bundleType: zt.bundleType,
    version: zt.version,
    rendererPackageName: zt.rendererPackageName,
    rendererConfig: zt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Vs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zt.findFiberByHostInstance || Kf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pr.isDisabled && Pr.supportsFiber)
    try {
      (pl = Pr.inject(Gf)), (Qe = Pr);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xf;
Se.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qo(n)) throw Error(y(200));
  return qf(e, n, null, t);
};
Se.createRoot = function (e, n) {
  if (!qo(e)) throw Error(y(299));
  var t = !1,
    r = "",
    l = xc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Wo(e, 1, !1, null, null, t, !1, r, l)),
    (e[be] = n.current),
    Zt(e.nodeType === 8 ? e.parentNode : e),
    new Qo(n)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Vs(n)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return Vn(e);
};
Se.hydrate = function (e, n, t) {
  if (!Cl(n)) throw Error(y(200));
  return Nl(null, e, n, !0, t);
};
Se.hydrateRoot = function (e, n, t) {
  if (!qo(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    i = "",
    o = xc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (n = _c(n, null, e, 1, t ?? null, l, !1, i, o)),
    (e[be] = n.current),
    Zt(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new El(n);
};
Se.render = function (e, n, t) {
  if (!Cl(n)) throw Error(y(200));
  return Nl(null, e, n, !1, t);
};
Se.unmountComponentAtNode = function (e) {
  if (!Cl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Vn(function () {
        Nl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[be] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = $o;
Se.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!Cl(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return Nl(e, n, t, !1, r);
};
Se.version = "18.2.0-next-9e3b772b8-20220608";
function wc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wc);
    } catch (e) {
      console.error(e);
    }
}
wc(), (_s.exports = Se);
var Zf = _s.exports,
  ls = Zf;
(ii.createRoot = ls.createRoot), (ii.hydrateRoot = ls.hydrateRoot);
const Jf = "_wrapper_1lpr5_1",
  bf = "_menu__hamburger_1lpr5_11",
  ep = "_headerOpen_1lpr5_1",
  np = "_container__button_1lpr5_33",
  tp = "_wrapper__container_1lpr5_47",
  rp = "_container__logo_1lpr5_53",
  lp = "_container__linksBar_1lpr5_64",
  Pn = {
    wrapper: Jf,
    menu__hamburger: bf,
    headerOpen: ep,
    container__button: np,
    wrapper__container: tp,
    container__logo: rp,
    container__linksBar: lp,
  };
var kc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  is = fn.createContext && fn.createContext(kc),
  wn = function () {
    return (
      (wn =
        Object.assign ||
        function (e) {
          for (var n, t = 1, r = arguments.length; t < r; t++) {
            n = arguments[t];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
          }
          return e;
        }),
      wn.apply(this, arguments)
    );
  },
  ip = function (e, n) {
    var t = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        n.indexOf(r) < 0 &&
        (t[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
        n.indexOf(r[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
          (t[r[l]] = e[r[l]]);
    return t;
  };
function Sc(e) {
  return (
    e &&
    e.map(function (n, t) {
      return fn.createElement(n.tag, wn({ key: t }, n.attr), Sc(n.child));
    })
  );
}
function Ve(e) {
  return function (n) {
    return fn.createElement(op, wn({ attr: wn({}, e.attr) }, n), Sc(e.child));
  };
}
function op(e) {
  var n = function (t) {
    var r = e.attr,
      l = e.size,
      i = e.title,
      o = ip(e, ["attr", "size", "title"]),
      s = l || t.size || "1em",
      a;
    return (
      t.className && (a = t.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      fn.createElement(
        "svg",
        wn(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          t.attr,
          r,
          o,
          {
            className: a,
            style: wn(wn({ color: e.color || t.color }, t.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && fn.createElement("title", null, i),
        e.children
      )
    );
  };
  return is !== void 0
    ? fn.createElement(is.Consumer, null, function (t) {
        return n(t);
      })
    : n(kc);
}
function ri(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: { id: "Calendar_Date" },
        child: [
          {
            tag: "path",
            attr: {
              d: `M18.435,4.955h-1.94v-1.41c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-7v-1.41
            c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-1.93c-1.38,0-2.5,1.12-2.5,2.5v11c0,1.38,1.12,2.5,2.5,2.5h12.87
            c1.38,0,2.5-1.12,2.5-2.5v-11C20.935,6.075,19.815,4.955,18.435,4.955z M19.935,18.455c0,0.83-0.67,1.5-1.5,1.5H5.565
            c-0.83,0-1.5-0.67-1.5-1.5v-8.42h15.87V18.455z M19.935,9.035H4.065v-1.58c0-0.83,0.67-1.5,1.5-1.5h1.93v0.59
            c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59h7v0.59c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59
            h1.94c0.83,0,1.5,0.67,1.5,1.5V9.035z`,
            },
          },
          {
            tag: "path",
            attr: {
              d: `M11.492,17.173v-3.46c0-0.059-0.064-0.095-0.114-0.064l-0.638,0.392
            c-0.1,0.061-0.228-0.01-0.228-0.128v-0.651c0-0.105,0.055-0.203,0.146-0.257l0.764-0.457c0.047-0.028,0.1-0.043,0.154-0.043h0.626
            c0.166,0,0.3,0.134,0.3,0.3v4.367c0,0.166-0.134,0.3-0.3,0.3h-0.409C11.626,17.473,11.492,17.339,11.492,17.173z`,
            },
          },
        ],
      },
    ],
  })(e);
}
function up(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: { id: "Menu_Fries" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z",
            },
          },
          {
            tag: "path",
            attr: {
              d: "M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z",
            },
          },
          {
            tag: "path",
            attr: {
              d: "M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z",
            },
          },
        ],
      },
    ],
  })(e);
}
function sp(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",
          fill: "currentColor",
        },
      },
    ],
  })(e);
}
function os() {
  return window.innerWidth;
}
function ap() {
  const [e, n] = $.useState(!1),
    [t, r] = $.useState(os());
  return (
    $.useEffect(() => {
      function l() {
        r(os());
      }
      return (
        window.addEventListener("resize", l),
        () => {
          window.removeEventListener("resize", l);
        }
      );
    }, []),
    e
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible"),
    u.jsxs("div", {
      className: Pn.wrapper,
      children: [
        e
          ? u.jsx(u.Fragment, {
              children: u.jsxs("div", {
                className: Pn.menu__hamburger,
                onClick: () => n(!1),
                children: [
                  u.jsx("a", { href: "", children: "Цены и сроки" }),
                  u.jsx("a", { href: "", children: "Услуги" }),
                  u.jsx("a", { href: "", children: "О компании" }),
                  u.jsx("a", { href: "", children: "Контакты" }),
                  u.jsx("a", { href: "", children: "Оформить груз" }),
                  u.jsx("button", {
                    className: Pn.container__button,
                    children: "Оставить заявку",
                  }),
                ],
              }),
            })
          : "",
        u.jsxs("div", {
          className: Pn.wrapper__container,
          children: [
            u.jsx("div", {
              className: Pn.container__logo,
              children: u.jsx("img", { src: "./logo.png", alt: "" }),
            }),
            t < 950
              ? u.jsx(u.Fragment, {
                  children: e
                    ? u.jsx(sp, { onClick: () => n(!e) })
                    : u.jsx(up, { onClick: () => n(!e) }),
                })
              : u.jsxs(u.Fragment, {
                  children: [
                    u.jsxs("div", {
                      className: Pn.container__linksBar,
                      children: [
                        u.jsx("a", { href: "", children: "Цены и сроки" }),
                        u.jsx("a", { href: "", children: "Услуги" }),
                        u.jsx("a", { href: "", children: "О компании" }),
                        u.jsx("a", { href: "", children: "Контакты" }),
                        u.jsx("a", { href: "", children: "Оформить груз" }),
                      ],
                    }),
                    u.jsx("button", {
                      className: Pn.container__button,
                      children: "Оставить заявку",
                    }),
                  ],
                }),
          ],
        }),
      ],
    })
  );
}
const cp = "_wrapper_1c2a4_1",
  dp = "_wrapper__container_1c2a4_6",
  fp = "_container__arrs_1c2a4_18",
  pp = "_container__text_1c2a4_33",
  hp = "_container__countSlide_1c2a4_87",
  Pt = {
    wrapper: cp,
    wrapper__container: dp,
    container__arrs: fp,
    container__text: pp,
    container__countSlide: hp,
  };
function Ko(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: { d: "M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" },
      },
    ],
  })(e);
}
function Yo(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
      {
        tag: "path",
        attr: { d: "M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z" },
      },
    ],
  })(e);
}
function De(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M262.62 336L342 256l-79.38-80m68.35 80H170",
        },
      },
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeMiterlimit: "10",
          strokeWidth: "32",
          d: "M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z",
        },
      },
    ],
  })(e);
}
function mp() {
  const [e, n] = $.useState(0),
    t = [
      {
        photo: "./slider/slider3.png",
        h1: "Прямое КАРГО из Китая",
        h3: "Доставляем любые грузы из Китая по честной цене",
        key: 0,
      },
      {
        photo: "./slider/slider.png",
        h1: "Гарантируем сроки!",
        h3: "Если мы не уложимся в обозначенные сроки, доставка груза со скидкой до 90%",
        key: 1,
      },
      {
        photo: "./slider/slider4.png",
        h1: "Выкуп товара с ТаоБао, 1688",
        h3: "Выкуп и доставка товаров с китайских торговых площадок. ",
        key: 2,
      },
      {
        photo: "./slider/slider2.png",
        h1: "Экспресс авто доставка",
        h3: "Доставка автотранспортом из Китая в Россию от 15 дней, от $0,5/кг",
        key: 3,
      },
    ],
    r = (i) => {
      if (i >= 3) {
        n(0);
        let o = document.getElementById("0");
        (o.style.backgroundColor = "white"),
          (o = document.getElementById("1")),
          (o.style.backgroundColor = "transparent"),
          (o = document.getElementById("2")),
          (o.style.backgroundColor = "transparent"),
          (o = document.getElementById("3")),
          (o.style.backgroundColor = "transparent");
      } else {
        n(e + 1);
        let o = document.getElementById(i + 1 + "");
        (o.style.backgroundColor = "white"),
          (o = document.getElementById(i + "")),
          (o.style.backgroundColor = "transparent"),
          (o = document.getElementById(i + 2 + "")),
          (o.style.backgroundColor = "transparent"),
          (o = document.getElementById(i + 3 + "")),
          (o.style.backgroundColor = "transparent");
      }
    };
  setTimeout(function () {
    r(t[e].key);
  }, 2500);
  const l = (i) => {
    if (i <= 0) {
      n(3);
      let o = document.getElementById("3");
      (o.style.backgroundColor = "white"),
        (o = document.getElementById("0")),
        (o.style.backgroundColor = "transparent"),
        (o = document.getElementById("1")),
        (o.style.backgroundColor = "transparent"),
        (o = document.getElementById("2")),
        (o.style.backgroundColor = "transparent");
    } else {
      n(e - 1);
      let o = document.getElementById(i - 1 + "");
      (o.style.backgroundColor = "white"),
        (o = document.getElementById(i + "")),
        (o.style.backgroundColor = "transparent"),
        (o = document.getElementById(i - 2 + "")),
        (o.style.backgroundColor = "transparent"),
        (o = document.getElementById(i - 3 + "")),
        (o.style.backgroundColor = "transparent");
    }
  };
  return u.jsx("div", {
    className: Pt.wrapper,
    children: u.jsxs("div", {
      className: Pt.wrapper__container,
      style: { backgroundImage: "url(" + t[e].photo + ")" },
      children: [
        u.jsxs("div", {
          className: Pt.container__arrs,
          children: [
            u.jsx(Ko, { onClick: () => l(t[e].key) }),
            u.jsx(Yo, { onClick: () => r(t[e].key) }),
          ],
        }),
        u.jsxs("div", {
          className: Pt.container__text,
          children: [
            u.jsx("h1", { children: t[e].h1 }),
            u.jsx("h3", { children: t[e].h3 }),
            u.jsxs("button", {
              children: ["Рассчитать стоимость ", u.jsx(De, {})],
            }),
          ],
        }),
        u.jsxs("div", {
          className: Pt.container__countSlide,
          children: [
            u.jsx("div", { id: "0" }),
            u.jsx("div", { id: "1" }),
            u.jsx("div", { id: "2" }),
            u.jsx("div", { id: "3" }),
          ],
        }),
      ],
    }),
  });
}
const vp = "_wrapper_1p36e_1",
  gp = "_wrapper__container_1p36e_9",
  yp = "_container__content_1p36e_22",
  _p = "_content__calculator_1p36e_28",
  xp = "_calculator__steps_1p36e_42",
  wp = "_calculator__grid_1p36e_65",
  kp = "_checkboxes_1p36e_98",
  Sp = "_uploadImage_1p36e_120",
  jp = "_spans_1p36e_125",
  Ep = "_button__nextStep_1p36e_160",
  Cp = "_calculator__secStep_1p36e_183",
  Np = "_calculator__threeStep_1p36e_227",
  zp = "_contacts_1p36e_275",
  Pp = "_final_1p36e_282",
  Lp = "_content__image_1p36e_296",
  te = {
    wrapper: vp,
    wrapper__container: gp,
    container__content: yp,
    content__calculator: _p,
    calculator__steps: xp,
    calculator__grid: wp,
    checkboxes: kp,
    uploadImage: Sp,
    spans: jp,
    button__nextStep: Ep,
    calculator__secStep: Cp,
    calculator__threeStep: Np,
    contacts: zp,
    final: Pp,
    content__image: Lp,
  };
function Ip(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z",
        },
      },
    ],
  })(e);
}
function Tp() {
  const [e, n] = $.useState(0),
    t = (i) => {
      if (i == 2) {
        n(e + 1);
        let o = document.getElementById("calc");
        (o.style.backgroundColor = "transparent"),
          (o.style.boxShadow = "none"),
          (o = document.getElementById("steps")),
          (o.style.display = "none");
      } else n(e + 1);
    },
    r = (i) => {
      if (i == 0) {
        let o = document.getElementById("step2");
        (o.style.backgroundColor = "rgba(137, 194, 73, 1)"),
          (o = document.getElementById("step1")),
          (o.style.backgroundColor = "rgba(40, 43, 56, 1);"),
          (o = document.getElementById("step3")),
          (o.style.backgroundColor = "rgba(40, 43, 56, 1);");
      } else if (i == 1) {
        let o = document.getElementById("step3");
        (o.style.backgroundColor = "rgba(137, 194, 73, 1)"),
          (o = document.getElementById("step1")),
          (o.style.backgroundColor = "rgba(40, 43, 56, 1);"),
          (o = document.getElementById("step2")),
          (o.style.backgroundColor = "rgba(40, 43, 56, 1);");
      } else if (i == 2) {
        let o = document.getElementById("step1");
        (o.style.backgroundColor = "rgba(137, 194, 73, 1)"),
          (o = document.getElementById("step3")),
          (o.style.backgroundColor = "rgba(40, 43, 56, 1);"),
          (o = document.getElementById("step2")),
          (o.style.backgroundColor = "rgba(40, 43, 56, 1);");
      }
    },
    l = () => {
      t(e), r(e);
    };
  return u.jsx("div", {
    className: te.wrapper,
    children: u.jsxs("div", {
      className: te.wrapper__container,
      id: "calculator",
      children: [
        u.jsx("h1", {
          id: "title",
          children: "Получить рассчет стоимости доставки вашего груза",
        }),
        u.jsxs("div", {
          className: te.container__content,
          children: [
            u.jsxs("div", {
              className: te.content__calculator,
              id: "calc",
              children: [
                u.jsxs("div", {
                  className: te.calculator__steps,
                  id: "steps",
                  children: [
                    u.jsx("div", {
                      id: "step1",
                      style: { backgroundColor: "rgba(137, 194, 73, 1)" },
                      children: "1",
                    }),
                    u.jsx("div", { id: "step2", children: "2" }),
                    u.jsx("div", { id: "step3", children: "3" }),
                  ],
                }),
                e == 0
                  ? u.jsxs(u.Fragment, {
                      children: [
                        u.jsxs("div", {
                          className: te.calculator__grid,
                          children: [
                            u.jsxs("div", {
                              children: [
                                u.jsx("h3", { children: "Категория товара:" }),
                                u.jsx("input", { type: "text" }),
                              ],
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("h3", { children: "Стоимость груза:" }),
                                u.jsx("input", { type: "text" }),
                              ],
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("h3", { children: "Вес груза (кг):" }),
                                u.jsx("input", { type: "text" }),
                              ],
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("h3", { children: "Объем груза (м3):" }),
                                u.jsx("input", { type: "text" }),
                              ],
                            }),
                            u.jsxs("div", {
                              className: te.checkboxes,
                              children: [
                                u.jsxs("div", {
                                  children: [
                                    u.jsx("input", { type: "checkbox" }),
                                    u.jsx("span", { children: "Страховка" }),
                                  ],
                                }),
                                u.jsxs("div", {
                                  children: [
                                    u.jsx("input", { type: "checkbox" }),
                                    u.jsx("span", {
                                      children: "Таможенное оформление",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("h3", { children: "Код ТН ВЭД:" }),
                                u.jsx("input", { type: "text" }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: te.uploadImage,
                          children: [
                            u.jsxs("div", {
                              className: te.spans,
                              children: [
                                u.jsx("span", { children: "фотография.jpeg" }),
                                u.jsx("a", {
                                  href: "",
                                  children: "Удалить фото",
                                }),
                              ],
                            }),
                            u.jsx("button", {
                              children: "Загрузить фото товара",
                            }),
                          ],
                        }),
                        u.jsxs("button", {
                          className: te.button__nextStep,
                          onClick: () => l(),
                          children: ["Следующий шаг ", u.jsx(De, {})],
                        }),
                      ],
                    })
                  : u.jsx(u.Fragment, {}),
                e == 1
                  ? u.jsxs("div", {
                      className: te.calculator__secStep,
                      children: [
                        u.jsx("h1", { children: "Рассчитать объем" }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("h4", { children: "Единица измерения:" }),
                            u.jsx("input", { type: "text" }),
                          ],
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("h4", { children: "Длина:" }),
                            u.jsx("input", { type: "text" }),
                          ],
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("h4", { children: "Ширина:" }),
                            u.jsx("input", { type: "text" }),
                          ],
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("h4", { children: "Высота:" }),
                            u.jsx("input", { type: "text" }),
                          ],
                        }),
                        u.jsxs("button", {
                          className: te.button__nextStep,
                          onClick: () => l(),
                          children: ["Рассчитать ", u.jsx(De, {})],
                        }),
                      ],
                    })
                  : "",
                e == 2
                  ? u.jsxs("div", {
                      className: te.calculator__threeStep,
                      children: [
                        u.jsx("h1", { children: "Оставьте заявку" }),
                        u.jsx("h5", {
                          children:
                            "Заполните заявку, сообщите наименование товара/груза и наш специалист свяжется с Вами в рабочее время.",
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("h4", { children: "Имя:" }),
                            u.jsx("input", {
                              type: "text",
                              placeholder: "Ваше имя *",
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: te.contacts,
                          children: [
                            u.jsxs("div", {
                              children: [
                                u.jsx("h4", { children: "Номер телефона:" }),
                                u.jsx("input", {
                                  type: "text",
                                  placeholder: "+7 (___) ___ - __ - __ *",
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("h4", { children: "Email:" }),
                                u.jsx("input", {
                                  type: "text",
                                  placeholder: "Введите e-mail *",
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("h4", { children: "Примечание:" }),
                            u.jsx("textarea", {
                              style: { height: 70 },
                              placeholder:
                                "Сообщите здесь наименование товара/груза, количество или примерный вес, а так же укажите вопросы которые вас интересуют *",
                            }),
                          ],
                        }),
                        u.jsx("h5", { children: "* - обязательные поля" }),
                        u.jsxs("button", {
                          className: te.button__nextStep,
                          onClick: () => l(),
                          children: ["Рассчитать ", u.jsx(De, {})],
                        }),
                      ],
                    })
                  : "",
                e == 3
                  ? u.jsxs("div", {
                      className: te.final,
                      children: [
                        u.jsx(Ip, {}),
                        u.jsx("h1", { children: "Спасибо за заявку!" }),
                        u.jsx("h3", {
                          children: "Мы обязатальено свяжемся с вами.",
                        }),
                        u.jsx("h2", {
                          children: "Так же для вас может быть полезно:",
                        }),
                        u.jsxs("ul", {
                          children: [
                            u.jsx("li", { children: "Услуги" }),
                            u.jsx("li", { children: "Примеры грузоперевозок" }),
                            u.jsx("li", { children: "Поиск товаров в Китае" }),
                          ],
                        }),
                      ],
                    })
                  : "",
              ],
            }),
            u.jsx("div", { className: te.content__image }),
          ],
        }),
      ],
    }),
  });
}
const Op = "_wrapper_q7nge_1",
  Rp = "_wrapper__container_q7nge_5",
  Mp = "_container__line_q7nge_26",
  Dp = "_container__grid_q7nge_31",
  Fp = "_grid__elem_q7nge_38",
  Bp = "_elem__circle_q7nge_46",
  Y = {
    wrapper: Op,
    wrapper__container: Rp,
    container__line: Mp,
    container__grid: Dp,
    grid__elem: Fp,
    elem__circle: Bp,
  };
function $p() {
  return u.jsx("div", {
    className: Y.wrapper,
    children: u.jsxs("div", {
      className: Y.wrapper__container,
      children: [
        u.jsx("h1", { children: "Почему стоит выбрать именно нас?" }),
        u.jsx("div", { className: Y.container__line }),
        u.jsxs("div", {
          className: Y.container__grid,
          children: [
            u.jsxs("div", {
              className: Y.grid__elem,
              children: [
                u.jsx("div", {
                  className: Y.elem__circle,
                  children: u.jsx("div", {
                    style: { backgroundImage: "url('./adv/adv(1).png')" },
                  }),
                }),
                u.jsx("h3", { children: "Таможенное оформление груза" }),
              ],
            }),
            u.jsxs("div", {
              className: Y.grid__elem,
              children: [
                u.jsx("div", {
                  className: Y.elem__circle,
                  children: u.jsx("div", {
                    style: { backgroundImage: "url('./adv/adv(8).png')" },
                  }),
                }),
                u.jsx("h3", { children: "Страховка груза" }),
              ],
            }),
            u.jsxs("div", {
              className: Y.grid__elem,
              children: [
                u.jsx("div", {
                  className: Y.elem__circle,
                  children: u.jsx("div", {
                    style: { backgroundImage: "url('./adv/adv(7).png')" },
                  }),
                }),
                u.jsx("h3", { children: "Проверка товара на брак" }),
              ],
            }),
            u.jsxs("div", {
              className: Y.grid__elem,
              children: [
                u.jsx("div", {
                  className: Y.elem__circle,
                  children: u.jsx("div", {
                    style: { backgroundImage: "url('./adv/adv(6).png')" },
                  }),
                }),
                u.jsx("h3", { children: "Доставка в любой город РФ" }),
              ],
            }),
            u.jsxs("div", {
              className: Y.grid__elem,
              children: [
                u.jsx("div", {
                  className: Y.elem__circle,
                  children: u.jsx("div", {
                    style: { backgroundImage: "url('./adv/adv(5).png')" },
                  }),
                }),
                u.jsx("h3", { children: "Консолидация на складе" }),
              ],
            }),
            u.jsxs("div", {
              className: Y.grid__elem,
              children: [
                u.jsx("div", {
                  className: Y.elem__circle,
                  children: u.jsx("div", {
                    style: { backgroundImage: "url('./adv/adv(4).png')" },
                  }),
                }),
                u.jsx("h3", { children: "Ответственное хранение груза" }),
              ],
            }),
            u.jsxs("div", {
              className: Y.grid__elem,
              children: [
                u.jsx("div", {
                  className: Y.elem__circle,
                  children: u.jsx("div", {
                    style: { backgroundImage: "url('./adv/adv(3).png')" },
                  }),
                }),
                u.jsx("h3", { children: "Помощь в оплате товара" }),
              ],
            }),
            u.jsxs("div", {
              className: Y.grid__elem,
              children: [
                u.jsx("div", {
                  className: Y.elem__circle,
                  children: u.jsx("div", {
                    style: { backgroundImage: "url('./adv/adv(2).png')" },
                  }),
                }),
                u.jsx("h3", {
                  children:
                    "Упаковка, переупаковка, паллетирование груза к международной перевозке",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Up = "_wrapper_ujodl_1",
  Vp = "_wrapper__container_ujodl_5",
  Ap = "_container__line_ujodl_22",
  Wp = "_container__slider_ujodl_27",
  Hp = "_slider__arrs_ujodl_36",
  Qp = "_slider__items_ujodl_52",
  qp = "_item_ujodl_57",
  Kp = "_item__photo_ujodl_64",
  Yp = "_item__price_ujodl_86",
  Xp = "_buttonsBar_ujodl_97",
  b = {
    wrapper: Up,
    wrapper__container: Vp,
    container__line: Ap,
    container__slider: Wp,
    slider__arrs: Hp,
    slider__items: Qp,
    item: qp,
    item__photo: Kp,
    item__price: Yp,
    buttonsBar: Xp,
  };
function li(e) {
  return Ve({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "M16.5 9.4 7.55 4.24" } },
      {
        tag: "path",
        attr: {
          d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
        },
      },
      { tag: "polyline", attr: { points: "3.29 7 12 12 20.71 7" } },
      { tag: "line", attr: { x1: "12", x2: "12", y1: "22", y2: "12" } },
    ],
  })(e);
}
function us() {
  return window.innerWidth;
}
function Gp() {
  const [e, n] = $.useState(us());
  $.useEffect(() => {
    function m() {
      n(us());
    }
    return (
      window.addEventListener("resize", m),
      () => {
        window.removeEventListener("resize", m);
      }
    );
  }, []);
  const [t, r] = $.useState(0),
    [l, i] = $.useState(1),
    [o, s] = $.useState(2),
    a = [
      {
        photo: "url('./photoVars/5.png')",
        name: "Авто - обычная",
        days: "9-15 дней",
        weight: "от 5кг",
        price: "2,5",
      },
      {
        photo: "url('./photoVars/4.png')",
        name: "Авто - ускоренная",
        days: "9-12 дней",
        weight: "от 5кг",
        price: "5",
      },
      {
        photo: "url('./photoVars/3.png')",
        name: "Авиа",
        days: "5-10 дней",
        weight: "от 5кг",
        price: "10",
      },
      {
        photo: "url('./photoVars/2.png')",
        name: "Ж/д",
        days: "7-10 дней",
        weight: "от 5кг",
        price: "10",
      },
      {
        photo: "url('./photoVars/1.png')",
        name: "Море",
        days: "5-10 дней",
        weight: "от 5кг",
        price: "10",
      },
    ];
  e < 1e3 &&
    setTimeout(function () {
      t == 4 ? r(0) : r(t + 1);
    }, 2500);
  const d = () => {
      t == 0
        ? (r(1), i(2), s(3))
        : t == 1
        ? (r(2), i(3), s(4))
        : t == 2
        ? (r(3), i(4), s(0))
        : t == 3
        ? (r(4), i(0), s(1))
        : t == 4 && (r(0), i(1), s(2));
    },
    v = () => {
      t == 0
        ? (r(4), i(0), s(1))
        : t == 4
        ? (r(3), i(4), s(0))
        : t == 3
        ? (r(2), i(3), s(4))
        : t == 2
        ? (r(1), i(2), s(3))
        : t == 1 && (r(0), i(1), s(2));
    };
  return u.jsx("div", {
    className: b.wrapper,
    children: u.jsxs("div", {
      className: b.wrapper__container,
      children: [
        u.jsx("h1", { children: "Варианты доставки грузов из Китая" }),
        u.jsx("div", { className: b.container__line }),
        u.jsxs("div", {
          className: b.container__slider,
          children: [
            u.jsxs("div", {
              className: b.slider__arrs,
              children: [
                u.jsx(Ko, { onClick: () => v() }),
                u.jsx(Yo, { onClick: () => d() }),
              ],
            }),
            u.jsxs("div", {
              className: b.slider__items,
              children: [
                u.jsxs("div", {
                  className: b.item,
                  children: [
                    u.jsx("div", {
                      className: b.item__photo,
                      style: { backgroundImage: a[t].photo },
                    }),
                    u.jsx("h1", { children: a[t].name }),
                    u.jsxs("div", {
                      children: [
                        u.jsxs("div", {
                          children: [u.jsx(ri, {}), a[t].days, " "],
                        }),
                        u.jsxs("div", {
                          children: [u.jsx(li, {}), " ", a[t].weight, " "],
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: b.item__price,
                      children: [
                        u.jsx("span", { children: "от" }),
                        u.jsx("h1", { children: a[t].price }),
                        u.jsx("span", { children: "$/кг" }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: b.buttonsBar,
                      children: [
                        u.jsx("a", {
                          href: "#calculator",
                          children: "Оставить заявку",
                        }),
                        u.jsx("a", { children: "Подробнее" }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: b.item,
                  children: [
                    u.jsx("div", {
                      className: b.item__photo,
                      style: { backgroundImage: a[l].photo },
                    }),
                    u.jsx("h1", { children: a[l].name }),
                    u.jsxs("div", {
                      children: [
                        u.jsxs("div", {
                          children: [u.jsx(ri, {}), a[l].days, " "],
                        }),
                        u.jsxs("div", {
                          children: [u.jsx(li, {}), " ", a[l].weight, " "],
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: b.item__price,
                      children: [
                        u.jsx("span", { children: "от" }),
                        u.jsx("h1", { children: a[l].price }),
                        u.jsx("span", { children: "$/кг" }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: b.buttonsBar,
                      children: [
                        u.jsx("a", {
                          href: "#calculator",
                          children: "Оставить заявку",
                        }),
                        u.jsx("a", { children: "Подробнее" }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: b.item,
                  children: [
                    u.jsx("div", {
                      className: b.item__photo,
                      style: { backgroundImage: a[o].photo },
                    }),
                    u.jsx("h1", { children: a[o].name }),
                    u.jsxs("div", {
                      children: [
                        u.jsxs("div", {
                          children: [u.jsx(ri, {}), a[o].days, " "],
                        }),
                        u.jsxs("div", {
                          children: [u.jsx(li, {}), " ", a[o].weight, " "],
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: b.item__price,
                      children: [
                        u.jsx("span", { children: "от" }),
                        u.jsx("h1", { children: a[o].price }),
                        u.jsx("span", { children: "$/кг" }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: b.buttonsBar,
                      children: [
                        u.jsx("a", {
                          href: "#calculator",
                          children: "Оставить заявку",
                        }),
                        u.jsx("a", { children: "Подробнее" }),
                      ],
                    }),
                  ],
                }),
                " ",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Zp = "_wrapper_15ldl_1",
  Jp = "_wrapper__container_15ldl_5",
  bp = "_line_15ldl_27",
  e1 = "_container__slider_15ldl_32",
  n1 = "_slider__arrs_15ldl_39",
  t1 = "_item__slider_15ldl_55",
  r1 = "_item__slider__photo_15ldl_175",
  ln = {
    wrapper: Zp,
    wrapper__container: Jp,
    line: bp,
    container__slider: e1,
    slider__arrs: n1,
    item__slider: t1,
    item__slider__photo: r1,
  };
function ss() {
  return window.innerWidth;
}
function l1() {
  const [e, n] = $.useState(ss());
  $.useEffect(() => {
    function m() {
      n(ss());
    }
    return (
      window.addEventListener("resize", m),
      () => {
        window.removeEventListener("resize", m);
      }
    );
  }, []);
  const [t, r] = $.useState(0),
    [l, i] = $.useState(1),
    [o, s] = $.useState(2),
    a = [
      {
        photo: "url('./services/serv(4).png')",
        h1: "Выкуп товара",
        h3: "Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия. ",
      },
      {
        photo: "url('./services/serv(3).png')",
        h1: "Страховка груза",
        h3: "Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия. ",
      },
      {
        photo: "url('./services/serv(2).png')",
        h1: "Аренда склада",
        h3: "Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия. ",
      },
      {
        photo: "url('./services/serv(1).png')",
        h1: "Перевод денежных средств",
        h3: "Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия. ",
      },
    ];
  e < 1e3 &&
    setTimeout(function () {
      o == 3 ? s(0) : s(o + 1);
    }, 2500);
  const d = () => {
      t == 0
        ? (r(1), i(2), s(3))
        : t == 1
        ? (r(2), i(3), s(0))
        : t == 2
        ? (r(3), i(0), s(1))
        : t == 3 && (r(0), i(1), s(2));
    },
    v = () => {
      t == 0
        ? (r(3), i(0), s(1))
        : t == 3
        ? (r(2), i(3), s(0))
        : t == 2
        ? (r(1), i(2), s(3))
        : t == 1 && (r(0), i(1), s(2));
    };
  return u.jsx("div", {
    className: ln.wrapper,
    children: u.jsxs("div", {
      className: ln.wrapper__container,
      children: [
        u.jsx("h1", { children: "Услуги" }),
        u.jsx("div", { className: ln.line }),
        u.jsxs("div", {
          className: ln.container__slider,
          children: [
            u.jsxs("div", {
              className: ln.slider__arrs,
              children: [
                u.jsx(Ko, { onClick: () => v() }),
                u.jsx(Yo, { onClick: () => d() }),
              ],
            }),
            u.jsxs("div", {
              className: ln.item__slider,
              style: { backgroundImage: a[t].photo },
              children: [
                u.jsx("h1", { children: a[t].h1 }),
                u.jsx("h3", { children: a[t].h3 }),
                u.jsx("button", { children: "Подробнее" }),
              ],
            }),
            u.jsxs("div", {
              className: ln.item__slider,
              style: { backgroundImage: a[l].photo },
              children: [
                u.jsx("h1", { children: a[l].h1 }),
                u.jsx("h3", { children: a[l].h3 }),
                u.jsx("button", { children: "Подробнее" }),
              ],
            }),
            u.jsxs("div", {
              className: ln.item__slider,
              style: { backgroundImage: a[o].photo },
              children: [
                u.jsx("h1", { children: a[o].h1 }),
                u.jsx("h3", { children: a[o].h3 }),
                u.jsx("button", { children: "Подробнее" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const i1 = "_wrapper_1tl2p_1",
  o1 = "_wrapper__container_1tl2p_5",
  u1 = "_container__about_1tl2p_14",
  s1 = "_about__text_1tl2p_21",
  a1 = "_about__textLine_1tl2p_36",
  c1 = "_about__photo_1tl2p_49",
  d1 = "_container__que_1tl2p_58",
  f1 = "_que__Line_1tl2p_72",
  p1 = "_que__flexblock_1tl2p_77",
  h1 = "_flexBlock__que_1tl2p_80",
  m1 = "_que__item_1tl2p_86",
  v1 = "_closeQue_1tl2p_1",
  g1 = "_que__item__active_1tl2p_98",
  y1 = "_openQue_1tl2p_1",
  _1 = "_arr_1tl2p_1",
  x1 = "_block__goReg_1tl2p_167",
  w1 = "_goReg__Line_1tl2p_195",
  k1 = "_goReg__grid_1tl2p_200",
  R = {
    wrapper: i1,
    wrapper__container: o1,
    container__about: u1,
    about__text: s1,
    about__textLine: a1,
    about__photo: c1,
    container__que: d1,
    que__Line: f1,
    que__flexblock: p1,
    flexBlock__que: h1,
    que__item: m1,
    closeQue: v1,
    que__item__active: g1,
    openQue: y1,
    arr: _1,
    block__goReg: x1,
    goReg__Line: w1,
    goReg__grid: k1,
  };
function S1() {
  const [e, n] = $.useState(!1),
    [t, r] = $.useState(!1),
    [l, i] = $.useState(!1),
    [o, s] = $.useState(!1),
    [a, d] = $.useState(!1),
    [v, m] = $.useState(!1),
    h = (_) => {
      switch (_) {
        case 1:
          n(!e);
          break;
        case 2:
          r(!t);
          break;
        case 3:
          i(!l);
          break;
        case 4:
          s(!o);
          break;
        case 5:
          d(!a);
          break;
        case 6:
          m(!v);
          break;
      }
    };
  return u.jsx("div", {
    className: R.wrapper,
    children: u.jsxs("div", {
      className: R.wrapper__container,
      children: [
        u.jsxs("div", {
          className: R.container__about,
          children: [
            u.jsxs("div", {
              className: R.about__text,
              children: [
                u.jsx("h1", { children: "О компании" }),
                u.jsx("div", { className: R.about__textLine }),
                u.jsxs("h3", {
                  children: [
                    "Компания Азия Карго - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия. Для вашего удобства есть тарифы на лёгкий и тяжелый куб. Мы работаем на рынке более 4 лет, а руководители компании занимаются логистикой уже более 11 лет. ",
                    u.jsx("br", {}),
                    " ",
                    u.jsx("br", {}),
                    " Мы стремимся предоставить лучшие условия доставки и лучший сервис своим клиентам. Выбирая нас - вы выбираете качественную доставку оптимальную по цене и времени! Убедитесь в этом сами!",
                  ],
                }),
              ],
            }),
            u.jsx("div", {
              className: R.about__photo,
              children: u.jsx("img", { src: "./img.png", alt: "" }),
            }),
          ],
        }),
        u.jsxs("div", {
          className: R.container__que,
          children: [
            u.jsx("h1", { children: "Часто задаваемые вопросы" }),
            u.jsx("div", { className: R.que__Line }),
            u.jsx("div", {
              className: R.que__flexblock,
              children: u.jsxs("div", {
                className: R.flexBlock__que,
                children: [
                  u.jsxs("div", {
                    className: e ? R.que__item__active : R.que__item,
                    children: [
                      u.jsxs("div", {
                        children: [
                          u.jsx("h1", {
                            children: "Как рассчитывается стоимость доставки?",
                          }),
                          u.jsx(De, { onClick: () => h(1) }),
                        ],
                      }),
                      e
                        ? u.jsx("h3", {
                            children:
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt harum porro, atque in hic eum itaque perferendis consequuntur tenetur ipsa eligendi labore. Ipsa doloremque ducimus id necessitatibus ratione numquam at?",
                          })
                        : "",
                    ],
                  }),
                  u.jsxs("div", {
                    className: t ? R.que__item__active : R.que__item,
                    children: [
                      u.jsxs("div", {
                        children: [
                          u.jsx("h1", {
                            children:
                              "Как происходит оплата за доставку груза?",
                          }),
                          u.jsx(De, { onClick: () => h(2) }),
                        ],
                      }),
                      t
                        ? u.jsx("h3", {
                            children:
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt harum porro, atque in hic eum itaque perferendis consequuntur tenetur ipsa eligendi labore. Ipsa doloremque ducimus id necessitatibus ratione numquam at?",
                          })
                        : "",
                    ],
                  }),
                  u.jsxs("div", {
                    className: l ? R.que__item__active : R.que__item,
                    children: [
                      u.jsxs("div", {
                        children: [
                          u.jsx("h1", {
                            children:
                              "Как быстро оформить заказ на доставку из Китая в Россию?",
                          }),
                          u.jsx(De, { onClick: () => h(3) }),
                        ],
                      }),
                      l
                        ? u.jsx("h3", {
                            children:
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt harum porro, atque in hic eum itaque perferendis consequuntur tenetur ipsa eligendi labore. Ipsa doloremque ducimus id necessitatibus ratione numquam at?",
                          })
                        : "",
                    ],
                  }),
                  u.jsxs("div", {
                    className: o ? R.que__item__active : R.que__item,
                    children: [
                      u.jsxs("div", {
                        children: [
                          u.jsx("h1", {
                            children:
                              "Можно ли через вас оплатить товар поставщику?",
                          }),
                          u.jsx(De, { onClick: () => h(4) }),
                        ],
                      }),
                      o
                        ? u.jsx("h3", {
                            children:
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt harum porro, atque in hic eum itaque perferendis consequuntur tenetur ipsa eligendi labore. Ipsa doloremque ducimus id necessitatibus ratione numquam at?",
                          })
                        : "",
                    ],
                  }),
                  u.jsxs("div", {
                    className: a ? R.que__item__active : R.que__item,
                    children: [
                      u.jsxs("div", {
                        children: [
                          u.jsx("h1", {
                            children:
                              "В чём особенность КАРГО доставки из Китая",
                          }),
                          u.jsx(De, { onClick: () => h(5) }),
                        ],
                      }),
                      a
                        ? u.jsx("h3", {
                            children:
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt harum porro, atque in hic eum itaque perferendis consequuntur tenetur ipsa eligendi labore. Ipsa doloremque ducimus id necessitatibus ratione numquam at?",
                          })
                        : "",
                    ],
                  }),
                  u.jsxs("div", {
                    className: v ? R.que__item__active : R.que__item,
                    children: [
                      u.jsxs("div", {
                        children: [
                          u.jsx("h1", {
                            children: "Какой срок доставки из Китая?",
                          }),
                          u.jsx(De, { onClick: () => h(6) }),
                        ],
                      }),
                      v
                        ? u.jsx("h3", {
                            children:
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt harum porro, atque in hic eum itaque perferendis consequuntur tenetur ipsa eligendi labore. Ipsa doloremque ducimus id necessitatibus ratione numquam at?",
                          })
                        : "",
                    ],
                  }),
                ],
              }),
            }),
            u.jsxs("div", {
              className: R.block__goReg,
              children: [
                u.jsx("h1", { children: "Готовы к сотрудничеству?" }),
                u.jsx("h3", { children: "Зарегистрируйте груз!" }),
                u.jsx("div", { className: R.goReg__Line }),
                u.jsxs("div", {
                  className: R.goReg__grid,
                  children: [
                    u.jsxs("span", {
                      children: [
                        "• Для того, чтобы начать сотрудничество, необходимо оформить груз указав информацию о содержимом груза, его стоимость и количество. А так-же прикрепив фотографии к заявке.",
                        u.jsx("br", {}),
                        u.jsx("br", {}),
                        '• Если требуется проверка товара на соответсвие количеству, то при оформлении груза на нашем сайте укажите это в графе "Примечание". Данная услуга платная и составляет 3 юаня за одну позицию в заказе. Любые дополнительные проверки груза обсуждаются индивидуально в том числе и их стоимость.',
                        u.jsx("br", {}),
                        u.jsx("br", {}),
                        "• До отправки груза на наш склад в Китае обязательно позаботьтесь о том, чтобы сделать маркировку, с номером Вашего заказа у нас на сайте, для каждой внешней коробки, чтобы мы смогли определить именно Ваш груз. Если у Вас нет возможности сделать это самостоятельно, то попросите об этом своего поставщика.",
                      ],
                    }),
                    u.jsx("div", { className: R.photo }),
                    u.jsx("div", { className: R.photo }),
                    u.jsxs("span", {
                      children: [
                        "• После отправки груза на наш склад в Китае, Вам обязательно нужно указать трек-номер для отслеживания посылок по Китаю для каждой позиции в заказе. Внести трек-номер можно на странице заказа. Трек-номер - это ещё одна мера для идентификации Вашего груза на нашем складе. ",
                        u.jsx("br", {}),
                        u.jsx("br", {}),
                        ' • Если Вы оформили груз по нашей инструкции и сделали все правильно, то при получении Вашего груза на складе в Китае статус заказа изменится на "На складе".',
                        u.jsxs("button", {
                          children: ["Оформить груз ", u.jsx(De, {})],
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
  });
}
const j1 = "_wrapper_7jbqo_1",
  E1 = "_wrapper__container_7jbqo_7",
  C1 = "_footer__line_7jbqo_12",
  N1 = "_footer_links_7jbqo_17",
  z1 = "_column_7jbqo_25",
  P1 = "_column__logo_7jbqo_37",
  L1 = "_column__contacts_7jbqo_41",
  I1 = "_column__social_7jbqo_53",
  Oe = {
    wrapper: j1,
    wrapper__container: E1,
    footer__line: C1,
    footer_links: N1,
    column: z1,
    column__logo: P1,
    column__contacts: L1,
    column__social: I1,
  };
function T1(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
      },
    ],
  })(e);
}
function O1(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z",
        },
      },
    ],
  })(e);
}
function R1(e) {
  return Ve({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M3 248c0-38 26-53 58-55l149 1c9 0 17 6 20 15 34 110 76 178 126 255 3 6 8 9 13 9 4 0 8-2 11-7l3-11 1-173c0-25-12-29-40-33-11-2-18-12-18-22 0-2 0-4 1-6 14-43 58-65 120-65l56-1c46 0 88 20 88 79v227c4 3 8 5 13 5 8 0 18-5 26-18 52-73 111-160 119-206 0-2 1-3 2-5 11-22 39-37 51-41 2-1 5-2 9-2h155l10 1c15 0 26 10 31 19 9 14 7 29 8 35v7c-15 91-119 193-163 259-6 8-9 15-9 22 0 6 3 12 8 18l146 184c8 11 12 24 12 35 0 33-31 52-61 55l-17 1H779c-3 0-5 1-8 1-17 0-31-9-41-19-32-39-63-79-94-118-6-8-8-9-14-13-7 29-13 59-20 89l-3 17c-5 18-18 37-42 42l-14 1h-98C272 830 117 584 8 277c-3-8-5-19-5-29zm601 259c-26 0-55-15-55-43V234c0-27-12-37-45-37l-57 2c-32 0-50 5-65 15 23 11 44 26 44 68v176c-3 35-32 58-60 58-19 0-36-11-46-29-45-68-83-132-116-224l-9-26-133-1c-18 0-16 1-16 10 0 6 1 14 2 19l21 56c109 282 246 467 376 467h100c14 0 13-17 16-27l19-88c4-9 7-17 14-24 8-8 17-11 26-11 19 0 37 15 49 29l85 108c7 11 13 13 17 13h165c16 0 30-5 30-15 0-3-1-7-3-10L818 582c-12-15-17-30-17-45 0-16 6-32 16-46 42-63 132-153 153-227l3-13c-1-5-1-9-2-14H814c-10 4-18 10-24 18l-6 19c-23 64-86 152-131 213-15 14-32 20-49 20z",
        },
      },
    ],
  })(e);
}
function M1() {
  return u.jsx("div", {
    className: Oe.wrapper,
    children: u.jsxs("div", {
      className: Oe.wrapper__container,
      children: [
        u.jsx("div", { className: Oe.footer__line }),
        u.jsxs("div", {
          className: Oe.footer_links,
          children: [
            u.jsxs("div", {
              className: Oe.column,
              children: [
                u.jsx("div", {
                  className: Oe.column__logo,
                  children: u.jsx("img", { src: "./logo.png", alt: "" }),
                }),
                u.jsxs("div", {
                  className: Oe.column__contacts,
                  children: [
                    u.jsx("span", { children: "8(800)600-18-69" }),
                    u.jsx("span", { children: "info@cargoasia.info" }),
                    u.jsx("span", { children: "Адрес в Китае:" }),
                    u.jsx("span", {
                      children:
                        "浙江省金华市义乌市后宅街道洪华小区5 栋一单元一楼RT789库房 高建军 电话15966660379",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: Oe.column__social,
                  children: [
                    u.jsx(T1, {}),
                    " ",
                    u.jsx(O1, {}),
                    " ",
                    u.jsx(R1, {}),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: Oe.column,
              children: [
                u.jsx("h1", { children: "Грузоперевозки" }),
                u.jsx("a", { href: "", children: "Цены и сроки" }),
                u.jsx("a", { href: "", children: "Услуги" }),
                u.jsx("a", { href: "", children: "О компании" }),
                u.jsx("a", { href: "", children: "Контакты" }),
                u.jsx("a", { href: "", children: "Оформить груз" }),
              ],
            }),
            u.jsxs("div", {
              className: Oe.column,
              children: [
                u.jsx("h1", { children: "Услуги" }),
                u.jsx("a", { href: "", children: "Выкуп товара" }),
                u.jsx("a", { href: "", children: "Страховка груза" }),
                u.jsx("a", { href: "", children: "Аренда склада" }),
                u.jsx("a", { href: "", children: "Перевод денежных средств" }),
              ],
            }),
            u.jsxs("div", {
              className: Oe.column,
              children: [
                u.jsx("h1", { children: "Информация" }),
                u.jsx("a", { href: "", children: "Отзывы" }),
                u.jsx("a", { href: "", children: "Требования к грузу" }),
                u.jsx("a", { href: "", children: "Договор-оферта" }),
                u.jsx("a", { href: "", children: "Как заключить договор" }),
                u.jsx("a", { href: "", children: "Способы оплаты услуг" }),
                u.jsx("a", { href: "", children: "Документы" }),
                u.jsx("a", { href: "", children: "Статьи" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
ii.createRoot(document.getElementById("root")).render(
  u.jsxs(fn.StrictMode, {
    children: [
      u.jsx(ap, {}),
      u.jsx(mp, {}),
      u.jsx(Tp, {}),
      u.jsx($p, {}),
      u.jsx(Gp, {}),
      u.jsx(l1, {}),
      u.jsx(S1, {}),
      u.jsx(M1, {}),
    ],
  })
);
