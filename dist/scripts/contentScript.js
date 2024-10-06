/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/translator/translator.js":
/*!**************************************!*\
  !*** ./src/translator/translator.js ***!
  \**************************************/
/***/ ((module) => {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// src/translator/translator.js
var Translator = /*#__PURE__*/function () {
  function Translator() {
    _classCallCheck(this, Translator);
  }
  return _createClass(Translator, [{
    key: "translateText",
    value: function () {
      var _translateText = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(text, options) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              throw new Error("translateText method must be implemented");
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function translateText(_x, _x2) {
        return _translateText.apply(this, arguments);
      }
      return translateText;
    }()
  }]);
}();
var DeepLTranslator = /*#__PURE__*/function (_Translator) {
  function DeepLTranslator(apiKey) {
    var _this;
    _classCallCheck(this, DeepLTranslator);
    _this = _callSuper(this, DeepLTranslator);
    _this.apiKey = apiKey;
    _this.urls = ["https://api-free.deepl.com/v2/translate", "https://api.deepl.com/v2/translate"];
    return _this;
  }
  _inherits(DeepLTranslator, _Translator);
  return _createClass(DeepLTranslator, [{
    key: "translateText",
    value: function () {
      var _translateText2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(text) {
        var options,
          _options$targetLangua,
          targetLanguage,
          _options$formality,
          formality,
          _options$splitSentenc,
          splitSentences,
          _options$preserveForm,
          preserveFormatting,
          lastError,
          _iterator,
          _step,
          url,
          params,
          response,
          data,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              _options$targetLangua = options.targetLanguage, targetLanguage = _options$targetLangua === void 0 ? "EN-US" : _options$targetLangua, _options$formality = options.formality, formality = _options$formality === void 0 ? "default" : _options$formality, _options$splitSentenc = options.splitSentences, splitSentences = _options$splitSentenc === void 0 ? 0 : _options$splitSentenc, _options$preserveForm = options.preserveFormatting, preserveFormatting = _options$preserveForm === void 0 ? 0 : _options$preserveForm;
              _iterator = _createForOfIteratorHelper(this.urls);
              _context2.prev = 3;
              _iterator.s();
            case 5:
              if ((_step = _iterator.n()).done) {
                _context2.next = 35;
                break;
              }
              url = _step.value;
              _context2.prev = 7;
              params = new URLSearchParams();
              params.append("auth_key", this.apiKey);
              params.append("text", text);
              params.append("target_lang", targetLanguage);
              params.append("formality", formality);
              params.append("split_sentences", splitSentences);
              params.append("preserve_formatting", preserveFormatting);
              params.append("tag_handling", "html");
              params.append("ignore_tags", "img");
              _context2.next = 19;
              return fetch(url, {
                method: "POST",
                body: params
              });
            case 19:
              response = _context2.sent;
              _context2.next = 22;
              return response.json();
            case 22:
              data = _context2.sent;
              if (!response.ok) {
                _context2.next = 27;
                break;
              }
              return _context2.abrupt("return", data.translations[0].text);
            case 27:
              // Use data.message or data['message'] to access the error message
              lastError = new Error(data.message || data["message"] || "Translation failed");
            case 28:
              _context2.next = 33;
              break;
            case 30:
              _context2.prev = 30;
              _context2.t0 = _context2["catch"](7);
              lastError = _context2.t0;
            case 33:
              _context2.next = 5;
              break;
            case 35:
              _context2.next = 40;
              break;
            case 37:
              _context2.prev = 37;
              _context2.t1 = _context2["catch"](3);
              _iterator.e(_context2.t1);
            case 40:
              _context2.prev = 40;
              _iterator.f();
              return _context2.finish(40);
            case 43:
              throw lastError;
            case 44:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[3, 37, 40, 43], [7, 30]]);
      }));
      function translateText(_x3) {
        return _translateText2.apply(this, arguments);
      }
      return translateText;
    }()
  }]);
}(Translator);
module.exports = {
  Translator: Translator,
  DeepLTranslator: DeepLTranslator
};

/***/ }),

/***/ "./src/utils/logger.js":
/*!*****************************!*\
  !*** ./src/utils/logger.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// src/utils/logger.js

var _require = __webpack_require__(/*! ./storage.js */ "./src/utils/storage.js"),
  getSetting = _require.getSetting;
var debugEnabled = false;
_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return getSetting("debug_enabled");
      case 2:
        _context.t0 = _context.sent;
        if (_context.t0) {
          _context.next = 5;
          break;
        }
        _context.t0 = false;
      case 5:
        debugEnabled = _context.t0;
      case 6:
      case "end":
        return _context.stop();
    }
  }, _callee);
}))();
function debugLog() {
  if (debugEnabled) {
    var _console;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    (_console = console).log.apply(_console, ["[Twitter-DeepL]"].concat(args));
  }
}
module.exports = {
  debugLog: debugLog
};

/***/ }),

/***/ "./src/utils/storage.js":
/*!******************************!*\
  !*** ./src/utils/storage.js ***!
  \******************************/
/***/ ((module) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// src/utils/storage.js
function getSetting(_x) {
  return _getSetting.apply(this, arguments);
}
function _getSetting() {
  _getSetting = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(key) {
    var result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return browser.storage.sync.get(key);
        case 2:
          result = _context.sent;
          return _context.abrupt("return", result[key]);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getSetting.apply(this, arguments);
}
function setSetting(_x2, _x3) {
  return _setSetting.apply(this, arguments);
}
function _setSetting() {
  _setSetting = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(key, value) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return browser.storage.sync.set(_defineProperty({}, key, value));
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _setSetting.apply(this, arguments);
}
module.exports = {
  getSetting: getSetting,
  setSetting: setSetting
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/scripts/twitter.js ***!
  \********************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// src/scripts/twitter.js

var _require = __webpack_require__(/*! ../utils/storage.js */ "./src/utils/storage.js"),
  getSetting = _require.getSetting;
var _require2 = __webpack_require__(/*! ../utils/logger.js */ "./src/utils/logger.js"),
  debugLog = _require2.debugLog;
var _require3 = __webpack_require__(/*! ../translator/translator.js */ "./src/translator/translator.js"),
  DeepLTranslator = _require3.DeepLTranslator;

// Load localization
var localization = {};
_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
  var translationState, observer, removeTwitterTranslateButtonSetting, twitterLang, loadLocalization, _loadLocalization, observeContent, processTextElement, isNoteTextElement, findContainerElement, removeExistingTranslateButtons, removeTwitterTranslateButton, isTranslatePostButton, insertTranslateButton, handleTranslateButtonClick, _handleTranslateButtonClick, updateButtonText, restoreOriginalText, updateTextWithTranslation, createTranslateTweetButton, createTranslateNoteButton, applyButtonStyles, applySpanStyles, applySpanStylesNote;
  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        applySpanStylesNote = function _applySpanStylesNote(span) {
          span.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
          span.style.fontSize = "15px";
          span.style.lineHeight = "20px";
          span.style.textDecoration = "none";
          span.style.marginLeft = "10px";
        };
        applySpanStyles = function _applySpanStyles(span) {
          span.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
          span.style.fontSize = "15px";
          span.style.lineHeight = "20px";
          span.style.textDecoration = "none";
        };
        applyButtonStyles = function _applyButtonStyles(button) {
          button.style.display = "inline-flex";
          button.style.alignItems = "center";
          button.style.cursor = "pointer";
          button.style.background = "none";
          button.style.border = "none";
          button.style.padding = "0";
          button.style.margin = "0";
          button.style.font = "inherit";
          button.style.verticalAlign = "baseline";
          button.style.width = "auto";
          button.style.maxWidth = "none";
          button.style.flexShrink = "0";
          button.style.alignSelf = "flex-start";
          button.style.color = "rgb(29, 155, 240)";
          button.addEventListener("mouseover", function () {
            var span = button.querySelector("span");
            if (span) span.style.textDecoration = "underline";
          });
          button.addEventListener("mouseout", function () {
            var span = button.querySelector("span");
            if (span) span.style.textDecoration = "none";
          });
        };
        createTranslateNoteButton = function _createTranslateNoteB() {
          var buttonText = localization.translateNoteWithDeepL || "Translate note with DeepL";
          var button = document.createElement("button");
          button.setAttribute("type", "button");
          button.classList.add("deepl-translate-button");
          button.dataset.originalText = buttonText;
          applyButtonStyles(button);
          var span = document.createElement("span");
          span.innerText = buttonText;
          applySpanStylesNote(span);
          button.appendChild(span);
          return button;
        };
        createTranslateTweetButton = function _createTranslateTweet() {
          var buttonText = localization.translateWithDeepL || "Translate with DeepL";
          var button = document.createElement("button");
          button.setAttribute("type", "button");
          button.classList.add("deepl-translate-button");
          button.dataset.originalText = buttonText;
          applyButtonStyles(button);
          var span = document.createElement("span");
          span.innerText = buttonText;
          applySpanStyles(span);
          button.appendChild(span);
          return button;
        };
        updateTextWithTranslation = function _updateTextWithTransl(textElement, state) {
          textElement.innerHTML = state.translatedText;

          // Reattach the "Show more" element if it exists
          if (state.showMoreElement) {
            var parentNode = textElement.parentNode;
            parentNode.insertBefore(state.showMoreElement, textElement.nextSibling);
          }
        };
        restoreOriginalText = function _restoreOriginalText(textElement, state) {
          textElement.innerHTML = state.originalText;

          // Reattach the "Show more" element if it exists
          if (state.showMoreElement) {
            var parentNode = textElement.parentNode;
            parentNode.insertBefore(state.showMoreElement, textElement.nextSibling);
          }
        };
        updateButtonText = function _updateButtonText(button, isTranslated) {
          var span = button.querySelector("span");
          if (span) {
            if (isTranslated) {
              span.innerText = localization.showOriginal || "Show Original";
            } else {
              span.innerText = button.dataset.originalText;
            }
          }
        };
        _handleTranslateButtonClick = function _handleTranslateButto2() {
          _handleTranslateButtonClick = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(textElement, translateButton) {
            var state, apiKey, translator, targetLanguage, formality, splitSentences, preserveFormatting, clonedTextElement, showMoreLink;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  state = translationState.get(textElement);
                  if (state) {
                    _context3.next = 5;
                    break;
                  }
                  debugLog("No translation state found for this text element");
                  return _context3.abrupt("return");
                case 5:
                  if (!state.isTranslated) {
                    _context3.next = 11;
                    break;
                  }
                  restoreOriginalText(textElement, state);
                  state.isTranslated = false;
                  updateButtonText(translateButton, false);
                  _context3.next = 64;
                  break;
                case 11:
                  if (state.translatedText) {
                    _context3.next = 61;
                    break;
                  }
                  _context3.next = 14;
                  return getSetting("api_key");
                case 14:
                  apiKey = _context3.sent;
                  if (apiKey) {
                    _context3.next = 18;
                    break;
                  }
                  alert("Please set your DeepL API Key in the extension options.");
                  return _context3.abrupt("return");
                case 18:
                  translator = new DeepLTranslator(apiKey);
                  _context3.next = 21;
                  return getSetting("target_language");
                case 21:
                  _context3.t0 = _context3.sent;
                  if (_context3.t0) {
                    _context3.next = 24;
                    break;
                  }
                  _context3.t0 = "EN-US";
                case 24:
                  targetLanguage = _context3.t0;
                  _context3.next = 27;
                  return getSetting("formality");
                case 27:
                  _context3.t1 = _context3.sent;
                  if (_context3.t1) {
                    _context3.next = 30;
                    break;
                  }
                  _context3.t1 = "default";
                case 30:
                  formality = _context3.t1;
                  _context3.next = 33;
                  return getSetting("split_sentences");
                case 33:
                  if (!_context3.sent) {
                    _context3.next = 37;
                    break;
                  }
                  _context3.t2 = 1;
                  _context3.next = 38;
                  break;
                case 37:
                  _context3.t2 = 0;
                case 38:
                  splitSentences = _context3.t2;
                  _context3.next = 41;
                  return getSetting("preserve_formatting");
                case 41:
                  if (!_context3.sent) {
                    _context3.next = 45;
                    break;
                  }
                  _context3.t3 = 1;
                  _context3.next = 46;
                  break;
                case 45:
                  _context3.t3 = 0;
                case 46:
                  preserveFormatting = _context3.t3;
                  // Clone the textElement to manipulate it without affecting the DOM
                  clonedTextElement = textElement.cloneNode(true); // Remove the "Show more" link from the cloned element
                  showMoreLink = clonedTextElement.querySelector('[data-testid="tweet-text-show-more-link"]');
                  if (showMoreLink) {
                    showMoreLink.remove();
                  }

                  // Now capture the original text without the "Show more" link
                  state.originalText = clonedTextElement.innerHTML;
                  _context3.prev = 51;
                  _context3.next = 54;
                  return translator.translateText(state.originalText, {
                    targetLanguage: targetLanguage,
                    formality: formality,
                    splitSentences: splitSentences,
                    preserveFormatting: preserveFormatting
                  });
                case 54:
                  state.translatedText = _context3.sent;
                  _context3.next = 61;
                  break;
                case 57:
                  _context3.prev = 57;
                  _context3.t4 = _context3["catch"](51);
                  alert("An error occurred while translating the text: ".concat(_context3.t4.message));
                  return _context3.abrupt("return");
                case 61:
                  // Update the textElement with the translated text
                  updateTextWithTranslation(textElement, state);
                  state.isTranslated = true;
                  updateButtonText(translateButton, true);
                case 64:
                  _context3.next = 69;
                  break;
                case 66:
                  _context3.prev = 66;
                  _context3.t5 = _context3["catch"](0);
                  debugLog("Error in handleTranslateButtonClick:", _context3.t5);
                case 69:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, null, [[0, 66], [51, 57]]);
          }));
          return _handleTranslateButtonClick.apply(this, arguments);
        };
        handleTranslateButtonClick = function _handleTranslateButto(_x2, _x3) {
          return _handleTranslateButtonClick.apply(this, arguments);
        };
        insertTranslateButton = function _insertTranslateButto(textElement, translateButton, isNote) {
          var buttonContainer = document.createElement("div");
          buttonContainer.style.display = "inline-block";
          buttonContainer.style.width = "auto";
          buttonContainer.style.marginTop = "8px";
          if (isNote && window.location.pathname.startsWith("/i/birdwatch")) {
            // For notes on /i/birdwatch, wrap the button and add a line break
            var container = document.createElement("div");
            container.appendChild(translateButton);
            var lineBreak = document.createElement("br");
            container.appendChild(lineBreak);
            buttonContainer.appendChild(container);
            var containerElement = findContainerElement(textElement, true);
            containerElement.appendChild(buttonContainer);
          } else {
            buttonContainer.appendChild(translateButton);
            var parentNode = textElement.parentNode;

            // Try to find the "Show more" link that follows the textElement
            var showMoreLink = parentNode.querySelector('[data-testid="tweet-text-show-more-link"]');
            if (showMoreLink) {
              // Insert after the "Show more" link
              parentNode.insertBefore(buttonContainer, showMoreLink.nextSibling);
            } else {
              // Insert after the text element
              parentNode.insertBefore(buttonContainer, textElement.nextSibling);
            }
          }
        };
        isTranslatePostButton = function _isTranslatePostButto(element) {
          if (element.tagName !== "BUTTON") return false;
          if (element.getAttribute("role") !== "button") return false;
          var span = element.querySelector("span");
          var translatePostText = localization.translatePost || "Translate post";
          var translateNoteText = localization.translateNote || "Translate note";
          return span && (span.innerText.trim() === translatePostText || span.innerText.trim() === translateNoteText);
        };
        removeTwitterTranslateButton = function _removeTwitterTransla(container) {
          var translateButtons = container.querySelectorAll('button[role="button"]');
          translateButtons.forEach(function (button) {
            if (isTranslatePostButton(button)) {
              button.remove();
            }
          });
        };
        removeExistingTranslateButtons = function _removeExistingTransl(container) {
          var translateButtons = container.querySelectorAll("button.deepl-translate-button");
          translateButtons.forEach(function (button) {
            // Remove the button's container div
            if (button.parentElement) {
              button.parentElement.remove();
            } else {
              button.remove();
            }
          });
        };
        findContainerElement = function _findContainerElement(textElement, isNote) {
          if (isNote) {
            if (window.location.pathname.startsWith("/i/birdwatch")) {
              return textElement.closest("div.css-175oi2r.r-1471scf.r-18u37iz.r-iphfwy.r-1h8ys4a");
            } else {
              return textElement.closest('div[data-testid="birdwatch-pivot"]');
            }
          } else {
            return textElement.closest('article[data-testid="tweet"], div[data-testid="tweet"], div[role="article"], div');
          }
        };
        isNoteTextElement = function _isNoteTextElement(element) {
          return (
            // Note on the tweet's page (/status/)
            element.matches('div[dir="ltr"].css-146c3p1') && element.parentElement && element.parentElement.matches('div[data-testid="birdwatch-pivot"]') ||
            // Notes on the /i/birdwatch/ page
            element.matches('div[dir="ltr"].css-146c3p1') && element.parentElement && element.parentElement.matches("div.css-175oi2r.r-1471scf.r-18u37iz.r-iphfwy.r-1h8ys4a")
          );
        };
        processTextElement = function _processTextElement(textElement) {
          if (textElement.dataset.deeplProcessed) return;
          var isNote = isNoteTextElement(textElement);
          var container = findContainerElement(textElement, isNote);
          if (!container) {
            debugLog("Container element not found");
            return;
          }
          translationState.set(textElement, {
            isTranslated: false,
            originalText: null,
            translatedText: null,
            showMoreElement: null // To preserve the "Show more" element
          });
          textElement.dataset.deeplProcessed = "true";
          removeExistingTranslateButtons(container);
          if (removeTwitterTranslateButtonSetting) {
            removeTwitterTranslateButton(container); // Remove Twitter's "Translate post/note" button
          }
          var translateButton = isNote ? createTranslateNoteButton() : createTranslateTweetButton();
          insertTranslateButton(textElement, translateButton, isNote);
          translateButton.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return handleTranslateButtonClick(textElement, translateButton);
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        };
        observeContent = function _observeContent() {
          debugLog("Initializing observer for tweets and notes");
          var tweetTextSelector = 'div[data-testid="tweetText"]';
          var noteTextSelector = [
          // Notes on the tweet's page (/status/)
          'div[data-testid="birdwatch-pivot"] > div[dir="ltr"].css-146c3p1',
          // Notes on the /i/birdwatch/ page
          'div.css-175oi2r.r-1471scf.r-18u37iz.r-iphfwy.r-1h8ys4a > div[dir="ltr"].css-146c3p1'].join(", ");

          // Process existing tweets and notes
          document.querySelectorAll("".concat(tweetTextSelector, ", ").concat(noteTextSelector)).forEach(processTextElement);
          observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
              mutation.addedNodes.forEach(function (node) {
                if (node.nodeType !== Node.ELEMENT_NODE) return;
                if (removeTwitterTranslateButtonSetting) {
                  // Remove "Translate post" or "Translate note" button if it appears
                  if (isTranslatePostButton(node)) {
                    node.remove();
                  }
                }

                // Process tweets and notes
                if (node.matches(tweetTextSelector) || isNoteTextElement(node)) {
                  processTextElement(node);
                }

                // Process nested elements
                node.querySelectorAll("".concat(tweetTextSelector, ":not([data-deepl-processed]), ").concat(noteTextSelector, ":not([data-deepl-processed])")).forEach(processTextElement);
                if (removeTwitterTranslateButtonSetting) {
                  // Remove "Translate post" or "Translate note" buttons inside nested elements
                  node.querySelectorAll('button[role="button"]').forEach(function (button) {
                    if (isTranslatePostButton(button)) {
                      button.remove();
                    }
                  });
                }
              });
            });
          });
          observer.observe(document.body, {
            childList: true,
            subtree: true
          });
        };
        _loadLocalization = function _loadLocalization3() {
          _loadLocalization = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(langCode) {
            var response, allLocalizations;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return fetch(browser.runtime.getURL("../locales/lang.json"));
                case 3:
                  response = _context2.sent;
                  if (!response.ok) {
                    _context2.next = 11;
                    break;
                  }
                  _context2.next = 7;
                  return response.json();
                case 7:
                  allLocalizations = _context2.sent;
                  // Try to get the localization for the detected language
                  localization = allLocalizations[langCode] || allLocalizations["en"];
                  _context2.next = 13;
                  break;
                case 11:
                  console.error("Error loading lang.json:", response.status);
                  localization = {};
                case 13:
                  _context2.next = 19;
                  break;
                case 15:
                  _context2.prev = 15;
                  _context2.t0 = _context2["catch"](0);
                  console.error("Error loading localization:", _context2.t0);
                  localization = {};
                case 19:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[0, 15]]);
          }));
          return _loadLocalization.apply(this, arguments);
        };
        loadLocalization = function _loadLocalization2(_x) {
          return _loadLocalization.apply(this, arguments);
        };
        debugLog("Extension script started");
        translationState = new WeakMap();
        removeTwitterTranslateButtonSetting = true; // default value
        // Get settings
        _context4.next = 25;
        return getSetting("remove_twitter_translate_button");
      case 25:
        _context4.t0 = _context4.sent;
        removeTwitterTranslateButtonSetting = _context4.t0 !== false;
        // Detect Twitter's language
        twitterLang = document.documentElement.lang || "en";
        _context4.next = 30;
        return loadLocalization(twitterLang);
      case 30:
        // Start observing tweets and notes
        observeContent();

        /**
         * Loads localization strings based on the provided language code.
         * @param {string} langCode - The language code (e.g., 'en', 'fr').
         */

        /**
         * Initializes the MutationObserver to monitor tweets and notes.
         */

        /**
         * Processes a text element (tweet or note) by adding the translate button.
         * @param {HTMLElement} textElement - The tweet or note text element.
         */

        /**
         * Checks if an element is a note text element.
         * @param {HTMLElement} element - The DOM element to check.
         * @returns {boolean} True if the element is a note text element.
         */

        /**
         * Finds the container element for a text element.
         * @param {HTMLElement} textElement - The text element.
         * @param {boolean} isNote - Whether the text element is a note.
         * @returns {HTMLElement|null} The container element or null if not found.
         */

        /**
         * Removes existing translate buttons from a container.
         * @param {HTMLElement} container - The container element.
         */

        /**
         * Inserts the translate button into the DOM.
         * @param {HTMLElement} textElement - The text element.
         * @param {HTMLElement} translateButton - The translate button element.
         * @param {boolean} isNote - Whether the text element is a note.
         */

        /**
         * Handles the click event on the translate button.
         * @param {HTMLElement} textElement - The text element.
         * @param {HTMLElement} translateButton - The translate button element.
         */

        /**
         * Updates the button text based on translation state.
         * @param {HTMLElement} button - The translate button element.
         * @param {boolean} isTranslated - Whether the text is currently translated.
         */

        /**
         * Restores the original text of the text element.
         * @param {HTMLElement} textElement - The text element.
         * @param {Object} state - The translation state.
         */

        /**
         * Updates the text element with the translated text.
         * @param {HTMLElement} textElement - The text element.
         * @param {Object} state - The translation state.
         */

        /**
         * Creates a translate button for tweets.
         * @returns {HTMLElement} The translate button element.
         */

        /**
         * Creates a translate button for notes.
         * @returns {HTMLElement} The translate button element.
         */

        /**
         * Applies common styles to the translate button element.
         * @param {HTMLElement} button - The button element.
         */

        /**
         * Applies common styles to the span element inside the button.
         * @param {HTMLElement} span - The span element.
         */

        /**
         * Applies common styles to the span NOTE element inside the button.
         * @param {HTMLElement} span - The span element.
         */
      case 31:
      case "end":
        return _context4.stop();
    }
  }, _callee4);
}))();
})();

/******/ })()
;
//# sourceMappingURL=contentScript.js.map