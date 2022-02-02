/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-polyfill/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/babel-polyfill/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(/*! core-js/shim */ "./node_modules/core-js/shim.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/fn/regexp/escape */ "./node_modules/core-js/fn/regexp/escape.js");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/fn/regexp/escape.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/regexp/escape.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/core.regexp.escape */ "./node_modules/core-js/modules/core.regexp.escape.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").RegExp.escape;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-to-json.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-to-json.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-scale.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-scale.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-forced-pam.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-forced-pam.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js")[K];
});


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_replacer.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_replacer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
  var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/core.regexp.escape.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/core.regexp.escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $re = __webpack_require__(/*! ./_replacer */ "./node_modules/core-js/modules/_replacer.js")(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var _isFinite = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer;
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV, {
  DataView: __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flatten.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flatten.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatten');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.asap.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/es7.asap.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var process = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").process;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.error.is-error.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.error.is-error.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.global.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.global.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.G, { global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.clamp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.clamp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.deg-per-rad.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.deg-per-rad.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.degrees.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.degrees.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.fscale.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.fscale.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var scale = __webpack_require__(/*! ./_math-scale */ "./node_modules/core-js/modules/_math-scale.js");
var fround = __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js");

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.iaddh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.iaddh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.imulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.imulh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.isubh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.isubh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.rad-per-deg.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.rad-per-deg.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.radians.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.radians.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.scale.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.scale.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { scale: __webpack_require__(/*! ./_math-scale */ "./node_modules/core-js/modules/_math-scale.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.signbit.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.signbit.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.umulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.umulh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-getter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-setter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.observable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.observable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var OBSERVABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('observable');
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Observable');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.try.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.try.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.at.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.at.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.match-all.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.match-all.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var getFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.observable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.system.global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.system.global.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'System', { global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('WeakMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('WeakMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('WeakSet');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('WeakSet');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/shim.js":
/*!**************************************!*\
  !*** ./node_modules/core-js/shim.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ./modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ./modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ./modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ./modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ./modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ./modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ./modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ./modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ./modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ./modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ./modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ./modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ./modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ./modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ./modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ./modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ./modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ./modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ./modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ./modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ./modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ./modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ./modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ./modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ./modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ./modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ./modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ./modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ./modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ./modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ./modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ./modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ./modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ./modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ./modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ./modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ./modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ./modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ./modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ./modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ./modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ./modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ./modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ./modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ./modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ./modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ./modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ./modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ./modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ./modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ./modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ./modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ./modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ./modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ./modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ./modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ./modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ./modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ./modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ./modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ./modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ./modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ./modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ./modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ./modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ./modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ./modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ./modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ./modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ./modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ./modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ./modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ./modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ./modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ./modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ./modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ./modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ./modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ./modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ./modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ./modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ./modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ./modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ./modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ./modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ./modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ./modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ./modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ./modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ./modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ./modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ./modules/es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
__webpack_require__(/*! ./modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ./modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ./modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ./modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ./modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ./modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ./modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ./modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ./modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ./modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ./modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ./modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ./modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ./modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ./modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ./modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ./modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ./modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ./modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ./modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ./modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ./modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ./modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ./modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ./modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ./modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ./modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
__webpack_require__(/*! ./modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
__webpack_require__(/*! ./modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");
__webpack_require__(/*! ./modules/es7.array.flatten */ "./node_modules/core-js/modules/es7.array.flatten.js");
__webpack_require__(/*! ./modules/es7.string.at */ "./node_modules/core-js/modules/es7.string.at.js");
__webpack_require__(/*! ./modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
__webpack_require__(/*! ./modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
__webpack_require__(/*! ./modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");
__webpack_require__(/*! ./modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");
__webpack_require__(/*! ./modules/es7.string.match-all */ "./node_modules/core-js/modules/es7.string.match-all.js");
__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ./modules/es7.symbol.observable */ "./node_modules/core-js/modules/es7.symbol.observable.js");
__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
__webpack_require__(/*! ./modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
__webpack_require__(/*! ./modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
__webpack_require__(/*! ./modules/es7.object.define-getter */ "./node_modules/core-js/modules/es7.object.define-getter.js");
__webpack_require__(/*! ./modules/es7.object.define-setter */ "./node_modules/core-js/modules/es7.object.define-setter.js");
__webpack_require__(/*! ./modules/es7.object.lookup-getter */ "./node_modules/core-js/modules/es7.object.lookup-getter.js");
__webpack_require__(/*! ./modules/es7.object.lookup-setter */ "./node_modules/core-js/modules/es7.object.lookup-setter.js");
__webpack_require__(/*! ./modules/es7.map.to-json */ "./node_modules/core-js/modules/es7.map.to-json.js");
__webpack_require__(/*! ./modules/es7.set.to-json */ "./node_modules/core-js/modules/es7.set.to-json.js");
__webpack_require__(/*! ./modules/es7.map.of */ "./node_modules/core-js/modules/es7.map.of.js");
__webpack_require__(/*! ./modules/es7.set.of */ "./node_modules/core-js/modules/es7.set.of.js");
__webpack_require__(/*! ./modules/es7.weak-map.of */ "./node_modules/core-js/modules/es7.weak-map.of.js");
__webpack_require__(/*! ./modules/es7.weak-set.of */ "./node_modules/core-js/modules/es7.weak-set.of.js");
__webpack_require__(/*! ./modules/es7.map.from */ "./node_modules/core-js/modules/es7.map.from.js");
__webpack_require__(/*! ./modules/es7.set.from */ "./node_modules/core-js/modules/es7.set.from.js");
__webpack_require__(/*! ./modules/es7.weak-map.from */ "./node_modules/core-js/modules/es7.weak-map.from.js");
__webpack_require__(/*! ./modules/es7.weak-set.from */ "./node_modules/core-js/modules/es7.weak-set.from.js");
__webpack_require__(/*! ./modules/es7.global */ "./node_modules/core-js/modules/es7.global.js");
__webpack_require__(/*! ./modules/es7.system.global */ "./node_modules/core-js/modules/es7.system.global.js");
__webpack_require__(/*! ./modules/es7.error.is-error */ "./node_modules/core-js/modules/es7.error.is-error.js");
__webpack_require__(/*! ./modules/es7.math.clamp */ "./node_modules/core-js/modules/es7.math.clamp.js");
__webpack_require__(/*! ./modules/es7.math.deg-per-rad */ "./node_modules/core-js/modules/es7.math.deg-per-rad.js");
__webpack_require__(/*! ./modules/es7.math.degrees */ "./node_modules/core-js/modules/es7.math.degrees.js");
__webpack_require__(/*! ./modules/es7.math.fscale */ "./node_modules/core-js/modules/es7.math.fscale.js");
__webpack_require__(/*! ./modules/es7.math.iaddh */ "./node_modules/core-js/modules/es7.math.iaddh.js");
__webpack_require__(/*! ./modules/es7.math.isubh */ "./node_modules/core-js/modules/es7.math.isubh.js");
__webpack_require__(/*! ./modules/es7.math.imulh */ "./node_modules/core-js/modules/es7.math.imulh.js");
__webpack_require__(/*! ./modules/es7.math.rad-per-deg */ "./node_modules/core-js/modules/es7.math.rad-per-deg.js");
__webpack_require__(/*! ./modules/es7.math.radians */ "./node_modules/core-js/modules/es7.math.radians.js");
__webpack_require__(/*! ./modules/es7.math.scale */ "./node_modules/core-js/modules/es7.math.scale.js");
__webpack_require__(/*! ./modules/es7.math.umulh */ "./node_modules/core-js/modules/es7.math.umulh.js");
__webpack_require__(/*! ./modules/es7.math.signbit */ "./node_modules/core-js/modules/es7.math.signbit.js");
__webpack_require__(/*! ./modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
__webpack_require__(/*! ./modules/es7.promise.try */ "./node_modules/core-js/modules/es7.promise.try.js");
__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
__webpack_require__(/*! ./modules/es7.asap */ "./node_modules/core-js/modules/es7.asap.js");
__webpack_require__(/*! ./modules/es7.observable */ "./node_modules/core-js/modules/es7.observable.js");
__webpack_require__(/*! ./modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ./modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ./modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ./modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/main.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/main.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation {\n  max-width: none;\n  width: 100%; }\n  .h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation .large-navigation-list {\n    height: auto; }\n\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-chapter-accordion {\n  opacity: 0;\n  visibility: hidden; }\n\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-chapter-button {\n  background-color: #fff; }\n  .h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-chapter-button.h5p-interactive-book-navigation-current {\n    border-bottom: solid 1px #e9e4ed; }\n\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-sectionlist {\n  max-height: none;\n  overflow: inherit;\n  transition: max-height .5s ease-in;\n  visibility: inherit;\n  padding-left: 0.3rem; }\n\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-content {\n  display: none; }\n\n.h5p-interactive-book.h5p-scrollable-fullscreen.h5p-semi-fullscreen {\n  overflow-y: scroll;\n  /* has to be scroll, not auto */\n  -webkit-overflow-scrolling: touch; }\n\n.h5p-interactive-book .h5p-scrollable-fullscreen {\n  overflow-y: auto; }\n\n.h5p-interactive-book.h5p-fullscreen {\n  background-color: #fff; }\n\n.h5p-interactive-book .h5p-content-controls {\n  display: none; }\n\n.h5p-interactive-book ::-webkit-scrollbar {\n  width: 6px;\n  background: rgba(108, 121, 146, 0.35); }\n\n.h5p-interactive-book ::-webkit-scrollbar-thumb {\n  background: rgba(108, 121, 146, 0.75);\n  border-radius: 4px; }\n\n.h5p-interactive-book ::-webkit-scrollbar-thumb:hover {\n  background: #6C7992; }\n\n.h5p-interactive-book-main {\n  display: flex;\n  flex: 1;\n  overflow: hidden; }\n  .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation {\n    max-width: 16.563em;\n    width: 16.563em; }\n\n.h5p-content-hidden .h5p-interactive-book-cover-present {\n  display: none; }\n\n.h5p-fullscreen .h5p-interactive-book,\n.h5p-semi-fullscreen .h5p-interactive-book {\n  display: flex;\n  flex-direction: column; }\n  .h5p-fullscreen .h5p-interactive-book.edge-18 .h5p-interactive-book-status,\n  .h5p-semi-fullscreen .h5p-interactive-book.edge-18 .h5p-interactive-book-status {\n    padding-right: 9em; }\n  .h5p-fullscreen .h5p-interactive-book .h5p-interactive-book-content,\n  .h5p-semi-fullscreen .h5p-interactive-book .h5p-interactive-book-content {\n    padding-bottom: 4.5em; }\n  .h5p-fullscreen .h5p-interactive-book .h5p-interactive-book-status-footer,\n  .h5p-semi-fullscreen .h5p-interactive-book .h5p-interactive-book-status-footer {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    left: 0; }\n\n.h5p-fullscreen .h5p-interactive-book-main,\n.h5p-semi-fullscreen .h5p-interactive-book-main {\n  flex: 1;\n  overflow: auto; }\n  .h5p-fullscreen .h5p-interactive-book-main .h5p-interactive-book-content,\n  .h5p-semi-fullscreen .h5p-interactive-book-main .h5p-interactive-book-content {\n    overflow-x: hidden;\n    overflow-y: auto;\n    min-height: calc(100% - 5.5em); }\n\n.h5p-fullscreen .h5p-interactive-book-navigation,\n.h5p-semi-fullscreen .h5p-interactive-book-navigation {\n  display: flex;\n  flex-direction: column; }\n  .h5p-fullscreen .h5p-interactive-book-navigation .navigation-list,\n  .h5p-semi-fullscreen .h5p-interactive-book-navigation .navigation-list {\n    flex: 1;\n    overflow-x: hidden;\n    overflow-y: auto; }\n  .h5p-fullscreen .h5p-interactive-book-navigation .large-navigation-list,\n  .h5p-semi-fullscreen .h5p-interactive-book-navigation .large-navigation-list {\n    min-height: 1px; }\n\n.h5p-interactive-book-chapter {\n  display: none;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translateX(0);\n  transition: .25s;\n  width: 100%; }\n  .h5p-interactive-book-chapter.h5p-interactive-book-previous {\n    transform: translateX(-100%); }\n  .h5p-interactive-book-chapter.h5p-interactive-book-current {\n    display: block;\n    transform: translateX(0); }\n  .h5p-interactive-book-chapter.h5p-interactive-book-next {\n    transform: translateX(100%); }\n  .h5p-interactive-book-chapter > div {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 1058px; }\n\n.h5p-interactive-book-animate {\n  display: block;\n  transition: transform .25s ease-in-out; }\n\n.h5p-interactive-book-content {\n  padding: 1rem;\n  overflow: hidden;\n  position: relative;\n  width: 100%; }\n  .h5p-interactive-book-content.hidden {\n    display: none; }\n  .h5p-interactive-book-content .h5p-column-content {\n    max-height: 9999999px; }\n    .h5p-interactive-book-content .h5p-column-content:first-child {\n      margin-top: 0; }\n      .h5p-interactive-book-content .h5p-column-content:first-child > p {\n        margin-top: 0; }\n\n.h5p-interactive-book-status-progress-marker {\n  align-items: center;\n  border-top: 1px solid #eee;\n  display: flex;\n  padding: 1em 0 0 1em;\n  clear: both;\n  cursor: pointer; }\n  .h5p-interactive-book-status-progress-marker input[type='checkbox'] {\n    transform: scale(1.75);\n    cursor: pointer; }\n  .h5p-interactive-book-status-progress-marker p {\n    color: #4c4452;\n    font-weight: bold;\n    margin: 0;\n    padding-left: 1em; }\n\n.h5p-content-hidden {\n  display: none; }\n\n/* Help Course Presentation to resize properly with initial height of max-width / 9 * 16 */\n.h5p-course-presentation .h5p-wrapper {\n  height: 596px; }\n\n.h5p-interactive-book-status {\n  align-items: center;\n  background-color: #fff;\n  background-size: cover;\n  border: 0;\n  border-color: #1a73d9;\n  border-style: solid;\n  box-shadow: 10px 10px 30px rgba(166, 166, 166, 0.2);\n  display: flex;\n  overflow: hidden;\n  padding: .5em; }\n  .h5p-interactive-book-status .h5p-interactive-book-status-button {\n    align-items: center;\n    border-radius: 3px;\n    display: flex;\n    height: 3.6em;\n    padding: 0;\n    width: 3.6em; }\n\n.h5p-interactive-book-status-button {\n  border-radius: 3px; }\n  .h5p-interactive-book-status-button:hover {\n    background-color: rgba(26, 115, 217, 0.1);\n    background-size: cover;\n    cursor: pointer; }\n  .h5p-interactive-book-status-button:active {\n    background-color: rgba(26, 115, 217, 0.2);\n    background-size: cover; }\n  .h5p-interactive-book-status-button[disabled]:hover {\n    background-color: transparent;\n    cursor: default; }\n\n.h5p-interactive-book-status-fullscreen {\n  background-color: rgba(26, 115, 217, 0.05);\n  background-size: cover;\n  border: 0.125em solid #fff;\n  flex-shrink: 0;\n  justify-content: center; }\n  .h5p-interactive-book-status-fullscreen.h5p-interactive-book-enter-fullscreen::before {\n    color: #1a73d9;\n    content: '\\e90b';\n    font-family: 'h5p-book';\n    font-size: 1.2em; }\n  .h5p-interactive-book-status-fullscreen.h5p-interactive-book-exit-fullscreen::before {\n    font-size: 1.2em;\n    color: #1a73d9;\n    content: '\\e90c';\n    font-family: 'h5p-book'; }\n\n.h5p-interactive-book-status-menu {\n  background-color: #fff;\n  background-size: cover;\n  border: 2px solid #fff;\n  border-radius: 3px;\n  flex-shrink: 0; }\n  .h5p-interactive-book-status-menu .icon-menu {\n    color: #1a73d9;\n    font-size: 1.5em;\n    margin: auto; }\n  .h5p-interactive-book-status-menu.h5p-interactive-book-status-menu-active {\n    background-color: #1a73d9;\n    opacity: 20;\n    position: relative; }\n    .h5p-interactive-book-status-menu.h5p-interactive-book-status-menu-active .icon-menu {\n      color: #fff;\n      left: 50%;\n      position: absolute;\n      top: 50%;\n      transform: translate(-50%, -50%); }\n    .h5p-interactive-book-status-menu.h5p-interactive-book-status-menu-active:hover {\n      background-color: rgba(26, 115, 217, 0.9);\n      background-size: cover;\n      cursor: pointer; }\n    .h5p-interactive-book-status-menu.h5p-interactive-book-status-menu-active:active {\n      background-color: rgba(26, 115, 217, 0.95);\n      background-size: cover; }\n\n.h5p-interactive-book-status-progress {\n  flex-shrink: 0;\n  margin: 0;\n  white-space: nowrap;\n  width: 86px; }\n  .h5p-interactive-book-status-progress .hidden-but-read {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px; }\n\n.h5p-interactive-book-status-progress-number {\n  color: #1a73d9;\n  font-family: Arial;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: right;\n  text-decoration: none solid #1a73d9; }\n\n.h5p-interactive-book-status-progress-divider {\n  color: #4c4452;\n  font-family: Arial;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: right;\n  text-decoration: none solid #4c4452; }\n\n.h5p-interactive-book-status-progressbar-back {\n  background-color: rgba(26, 115, 217, 0.2);\n  background-size: cover;\n  width: 100%; }\n\n.h5p-interactive-book-status-progressbar-front {\n  background-color: #1a73d9;\n  height: .313em;\n  transition: 1s; }\n\n.h5p-interactive-book-status-chapter {\n  flex-grow: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  .h5p-interactive-book-status-chapter .title {\n    color: #4c4452;\n    font-family: Arial;\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0;\n    overflow: hidden;\n    padding: 0 1rem;\n    text-decoration: none solid #4c4452;\n    text-overflow: ellipsis; }\n\n.h5p-interactive-book-status-arrow {\n  background-color: rgba(26, 115, 217, 0.05);\n  background-size: cover;\n  border: 0.125em solid #fff;\n  border-radius: 3px;\n  flex-shrink: 0;\n  height: 2.75em;\n  width: 2.75em; }\n  .h5p-interactive-book-status-arrow .navigation-button {\n    background: transparent;\n    border: 0;\n    color: #1a73d9;\n    font-size: 1.5em;\n    margin: auto; }\n    .h5p-interactive-book-status-arrow .navigation-button.disabled {\n      opacity: .5; }\n\n.h5p-interactive-book-status-header {\n  -webkit-position: sticky;\n  position: sticky;\n  background: #fff;\n  top: 0;\n  z-index: 2; }\n  .h5p-interactive-book-status-header .h5p-interactive-book-status-to-top {\n    display: none; }\n\n.h5p-interactive-book-status-footer {\n  bottom: 0; }\n  .h5p-interactive-book-status-footer .h5p-interactive-book-status-menu {\n    display: none; }\n  .h5p-interactive-book-status-footer.footer-hidden {\n    display: none; }\n\n.h5p-interactive-book-navigation {\n  background-color: #fff;\n  background-size: cover;\n  box-shadow: 0.625em 0.625em 1.875em rgba(166, 166, 166, 0.2);\n  max-width: 0;\n  min-height: 19em;\n  overflow: hidden;\n  position: sticky;\n  top: 0;\n  transition: width .15s linear, flex-basis .15s linear, max-width .15s linear;\n  width: 0;\n  z-index: 1;\n  display: flex;\n  flex-direction: column; }\n  .h5p-interactive-book-navigation .lock-page-navigation > button[disabled] {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .h5p-interactive-book-navigation > a {\n    font-weight: bold; }\n  .h5p-interactive-book-navigation > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .h5p-interactive-book-navigation .navigation-list {\n    margin: 0;\n    padding: 0; }\n  .h5p-interactive-book-navigation .large-navigation-list {\n    height: 0;\n    overflow-y: auto;\n    flex: 1 1 auto;\n    min-height: 58em; }\n\n.h5p-interactive-book-navigation-sectionlist {\n  background-color: #fff;\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n  transition: max-height .5s ease-in; }\n  .h5p-interactive-book-navigation-sectionlist > :first-child {\n    margin-top: .5em; }\n  .h5p-interactive-book-navigation-sectionlist > :last-child {\n    border-bottom: solid 1px #e9e4ed;\n    padding-bottom: .5em; }\n  .h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section {\n    background: transparent;\n    color: #4c4452;\n    font-size: .875em;\n    font-weight: 400;\n    line-height: 1.8;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n    .h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section .section-button {\n      position: relative;\n      background: transparent;\n      border: 0;\n      padding: 0 1.125em;\n      max-width: 100%; }\n    .h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section .h5p-interactive-book-navigation-section-icon {\n      position: absolute;\n      color: #000;\n      font-size: 5px;\n      visibility: hidden;\n      width: 2.17em;\n      top: 50%;\n      transform: translateY(-50%); }\n      .h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section .h5p-interactive-book-navigation-section-icon.h5p-interactive-book-navigation-section-task {\n        visibility: inherit; }\n    .h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section .h5p-interactive-book-navigation-section-title {\n      font-size: .85em;\n      margin-left: 15px;\n      margin-right: 2em;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n  .h5p-interactive-book-navigation-sectionlist :hover {\n    color: #1a73d9;\n    cursor: pointer; }\n\n.h5p-interactive-book-navigation-closed .h5p-interactive-book-navigation-chapter-button {\n  background-color: #fff; }\n  .h5p-interactive-book-navigation-closed .h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-title-text {\n    color: #4c4452; }\n\n.h5p-interactive-book-navigation-closed .h5p-interactive-book-navigation-sectionlist {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height .5s ease-out;\n  visibility: hidden; }\n\n.h5p-interactive-book-navigation-chapter {\n  list-style: none; }\n\n.h5p-interactive-book-navigation-chapter-button {\n  align-items: center;\n  background-color: rgba(26, 115, 217, 0.1);\n  background-size: cover;\n  border: 0;\n  border-bottom: solid 1px #e9e4ed;\n  color: #4c4452;\n  display: flex;\n  font-family: Arial;\n  height: 3.438em;\n  margin: 0;\n  padding: 0 1.125em;\n  text-align: initial;\n  text-decoration: none solid #4c4452;\n  width: 100%;\n  position: relative; }\n  .h5p-interactive-book-navigation-chapter-button.h5p-interactive-book-navigation-current {\n    background-color: rgba(26, 115, 217, 0.1);\n    border-bottom-color: white; }\n  .h5p-interactive-book-navigation-chapter-button:hover {\n    background-color: rgba(26, 115, 217, 0.05);\n    cursor: pointer; }\n  .h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-title-text {\n    background-color: transparent;\n    color: #1a73d9;\n    font-family: Arial;\n    font-size: 1em;\n    font-weight: 700;\n    line-height: 1.5em;\n    padding-left: 1.5em;\n    padding-right: 2em;\n    overflow: hidden;\n    text-decoration: none solid #1a73d9;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-accordion {\n    align-self: center;\n    font-size: .65em;\n    width: 1em;\n    position: absolute;\n    left: 15px;\n    top: 17px; }\n    .h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-accordion.hidden {\n      opacity: 0;\n      visibility: none; }\n  .h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-progress {\n    align-self: center;\n    font-size: .75em;\n    position: absolute;\n    right: 15px;\n    top: 17px; }\n  .h5p-interactive-book-navigation-chapter-button:active {\n    background-color: rgba(26, 115, 217, 0.1); }\n\n.h5p-interactive-book-navigation-maintitle {\n  background-color: #1a73d9;\n  background-size: cover; }\n  .h5p-interactive-book-navigation-maintitle .navigation-title {\n    align-self: center;\n    color: #fff;\n    font-family: Arial;\n    font-size: 1em;\n    font-weight: 400;\n    overflow: hidden;\n    padding-left: 1.25em;\n    text-decoration: none solid #fff;\n    text-overflow: ellipsis; }\n\n.h5p-interactive-book-cover {\n  align-items: center;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  font-family: Arial;\n  height: 100%;\n  left: 0;\n  padding-bottom: 200px;\n  position: relative;\n  top: 0;\n  width: 100%;\n  z-index: 3; }\n  .h5p-interactive-book-cover.h5p-cover-nographics {\n    padding-top: 120px; }\n  .h5p-interactive-book-cover p {\n    margin: 0 0 .5em; }\n\n.h5p-interactive-book-cover-graphics {\n  align-items: center;\n  display: flex;\n  height: 15em;\n  margin: 4.375em 0;\n  position: relative;\n  width: 100%; }\n\n.h5p-interactive-book-cover-bar {\n  background-color: rgba(26, 115, 217, 0.05);\n  background-size: cover;\n  height: 70%;\n  width: inherit; }\n\n.h5p-interactive-book-cover-image {\n  box-shadow: 10px 4px 47px 0 rgba(0, 0, 0, 0.2);\n  height: 100%;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 3; }\n\n.h5p-interactive-book-cover-title {\n  color: #363636;\n  font-size: 2.188em;\n  font-weight: 700;\n  text-align: center;\n  text-decoration: none solid #363636; }\n\n.h5p-interactive-book-cover-description {\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 400;\n  margin-bottom: .5em;\n  max-width: 80%;\n  text-align: center;\n  text-decoration: none solid #363636; }\n\n.h5p-interactive-book-cover-readbutton {\n  margin-top: .5em; }\n  .h5p-interactive-book-cover-readbutton button {\n    background-color: #1a73d9;\n    background-size: cover;\n    border: 0;\n    border-radius: 3px;\n    color: #fff;\n    cursor: pointer;\n    font-family: Arial;\n    font-size: 20px;\n    font-weight: 400;\n    padding: 10px 40px;\n    text-align: center;\n    text-decoration: none solid #fff; }\n    .h5p-interactive-book-cover-readbutton button:hover {\n      background-color: rgba(26, 115, 217, 0.9);\n      background-size: cover;\n      cursor: pointer; }\n    .h5p-interactive-book-cover-readbutton button:active {\n      background-color: rgba(26, 115, 217, 0.95);\n      background-size: cover; }\n    .h5p-interactive-book-cover-readbutton button:focus {\n      outline-style: double; }\n\n.h5p-container.covered .h5p-content-controls {\n  display: none; }\n\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-box-summary-progress {\n  display: block; }\n  .h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-box-summary-progress > div {\n    width: 100%;\n    margin-bottom: 0.6rem; }\n\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-menu-button {\n  justify-content: center;\n  border-width: 0.125rem; }\n\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-menu-button-arrow {\n  visibility: visible;\n  opacity: 1;\n  right: 0.6875rem; }\n\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-buttons {\n  display: flex; }\n  .h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-button {\n    margin-right: initial;\n    justify-content: center;\n    padding: 1rem; }\n  .h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submit {\n    flex-grow: 6; }\n  .h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-restart {\n    flex-grow: 4;\n    margin-left: 0.5rem; }\n\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-score-bar {\n  margin-top: 1.25rem; }\n\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-page {\n  padding: 0.5rem; }\n\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-chapter-button.h5p-interactive-book-navigation-current[aria-expanded=\"true\"] {\n  border-bottom-color: #0E7C57;\n  border-bottom-width: 2px; }\n\n.h5p-interactive-book-summary {\n  padding: 0 1.125rem;\n  margin: 0.7rem auto; }\n\n.h5p-interactive-book-summary-menu-button {\n  border: 1px solid #0E7C57;\n  border-radius: 2px;\n  background-color: #ffffff;\n  font-size: 0.8rem;\n  color: #0d736e;\n  font-weight: 700;\n  line-height: 1rem;\n  justify-content: space-between;\n  height: 100%;\n  padding: 0.5rem; }\n  .h5p-interactive-book-summary-menu-button.h5p-interactive-book-navigation-chapter-button.h5p-interactive-book-navigation-current {\n    background-color: #f1f9f8;\n    border-bottom-color: #0E7C57; }\n  .h5p-interactive-book-summary-menu-button:hover {\n    background-color: #f1f9f8; }\n    .h5p-interactive-book-summary-menu-button:hover .h5p-interactive-book-summary-menu-button-arrow {\n      opacity: 1;\n      visibility: visible;\n      transform: rotate(90deg) translateY(-10px); }\n  .h5p-interactive-book-summary-menu-button[data-book-completed=\"true\"], .h5p-interactive-book-summary-menu-button:active {\n    box-shadow: 0 0 0.625rem #0cc9a7; }\n  .h5p-interactive-book-summary-menu-button .h5p-interactive-book-summary-text {\n    white-space: normal;\n    text-align: left;\n    height: 100%;\n    flex-grow: 2;\n    margin-right: 0.75rem; }\n  .h5p-interactive-book-summary-menu-button .h5p-interactive-book-summary-icon {\n    margin-right: 0.25rem;\n    margin-left: auto;\n    font-size: 1.1em; }\n  .h5p-interactive-book-summary-menu-button .h5p-interactive-book-summary-menu-button-arrow {\n    transform: rotate(90deg);\n    position: absolute;\n    right: 25px;\n    visibility: hidden;\n    opacity: 0;\n    height: auto;\n    font-weight: normal;\n    transition: transform 0.4s, opacity 0.2s, visibility 0.2s; }\n  .h5p-interactive-book-summary-menu-button[disabled] {\n    opacity: 0.5;\n    cursor: not-allowed; }\n\n.h5p-interactive-book-navigation-summary-button {\n  padding: 1.125rem 0.5rem; }\n\n.h5p-interactive-book-summary-page {\n  padding: 1.25rem; }\n  .h5p-interactive-book-summary-page ol,\n  .h5p-interactive-book-summary-page ul,\n  .h5p-interactive-book-summary-page li {\n    padding-left: 0; }\n  .h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress {\n    display: flex;\n    justify-content: space-between;\n    color: #273C59; }\n    .h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progress-container {\n      background-color: rgba(219, 219, 219, 0.3);\n      width: 49%;\n      padding: 1rem;\n      box-sizing: border-box;\n      border-radius: 5px;\n      display: flex;\n      align-items: center;\n      margin-right: 1em; }\n      .h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progress-container .absolute-value {\n        color: #273C59;\n        font-size: 1.25em; }\n      .h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progress-container .separator {\n        color: #273C59;\n        font-size: 0.75em;\n        margin: auto 0.4em;\n        vertical-align: top; }\n      .h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progress-container:last-child {\n        margin-right: 0; }\n    .h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress h3 {\n      font-size: 0.875rem;\n      font-style: italic;\n      line-height: 1.25rem;\n      margin-top: 0; }\n    .h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progressbox-bigtext {\n      font-size: 1.375rem;\n      color: #2d7ad2;\n      margin: 0.4375rem auto;\n      font-weight: bold; }\n    .h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progressbox-smalltext {\n      font-size: 0.875rem;\n      color: #273c59;\n      font-style: italic;\n      line-height: 1.25rem;\n      margin: 0; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons {\n    margin-top: 1rem;\n    flex-wrap: wrap; }\n    .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-button {\n      border-radius: 4px;\n      padding: 0.6125rem 0.8125rem;\n      display: inline-flex;\n      align-items: center;\n      flex-direction: row-reverse;\n      font-weight: bold;\n      margin-right: 1rem;\n      font-size: 0.75rem;\n      cursor: pointer; }\n      .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-button .icon-restart,\n      .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-button .icon-paper-pencil {\n        margin-right: 0.5rem;\n        font-size: 1.1875rem; }\n    .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submit {\n      background-color: #0E7C57;\n      color: #ffffff;\n      border: 1px solid #0E7C57;\n      transition: background-color 150ms; }\n      .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submit:hover {\n        background-color: #0c694a; }\n    .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-restart {\n      color: #757575;\n      border: 1px solid #ebebeb;\n      background-color: #ffffff;\n      transition: background-color 150ms; }\n      .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-restart:hover {\n        background-color: #ebebeb; }\n    .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted {\n      transform: translateY(100%);\n      transition: transform 0.4s;\n      position: absolute;\n      opacity: 0;\n      border-radius: 4px;\n      background-color: #d3ede9;\n      display: flex;\n      padding: 0.4375rem;\n      align-items: center;\n      flex: auto;\n      left: 2000px; }\n      .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted .icon-chapter-done {\n        font-size: 2rem;\n        margin: 0.5625rem 1rem;\n        color: #0e8275; }\n      .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted p {\n        font-weight: bold;\n        margin: 0;\n        font-size: 0.875rem;\n        color: #0e8275; }\n      .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted .h5p-interactive-book-summary-restart {\n        margin-left: auto;\n        padding: 0.5615rem;\n        flex-grow: initial; }\n      .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted button {\n        display: none; }\n    .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons.submitted > button {\n      display: none; }\n    .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons.submitted .h5p-interactive-book-summary-submitted {\n      transform: translateY(0);\n      opacity: 1;\n      position: static; }\n      .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons.submitted .h5p-interactive-book-summary-submitted button {\n        display: flex; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n    .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-header select {\n      margin: auto 0 auto auto;\n      max-height: 1.5rem; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list {\n    display: flex;\n    flex-direction: column;\n    line-height: 1.9375rem; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-only-unanswered .h5p-interactive-book-summary-overview-section-details-task-done,\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-only-unanswered .h5p-interactive-book-summary-no-interactions {\n    display: none; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section, .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty {\n    padding: 0.875rem 1.25rem;\n    border: 1px solid #e8e8e8;\n    border-bottom: 0;\n    display: block; }\n    .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section h4, .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty h4 {\n      margin: 0;\n      display: flex;\n      align-items: center;\n      color: #000;\n      cursor: pointer; }\n      .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section h4:hover, .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty h4:hover {\n        color: #2d7ad2; }\n      .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section h4 span[class^='icon-'], .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty h4 span[class^='icon-'],\n      .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section h4 span[class*=' icon-'],\n      .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty h4 span[class*=' icon-'] {\n        margin-left: auto;\n        color: #2d7ad2;\n        font-weight: 100;\n        cursor: pointer; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section:first-of-type, .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty:first-of-type,\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-top-section {\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section:last-of-type, .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty:last-of-type,\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-bottom-section {\n    border-bottom: 1px solid #ebebeb;\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-score-header {\n    display: flex; }\n    .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-score-header div {\n      font-size: 0.875rem;\n      margin-left: auto;\n      line-height: 2rem; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty {\n    display: none; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-details {\n    display: flex;\n    border-top: 1px solid #ebebeb;\n    padding: 0.25rem; }\n    .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-details:hover {\n      background: #f3f3f3; }\n    .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-details .h5p-interactive-book-summary-section-title {\n      font-size: 0.875rem;\n      border: 0;\n      background-color: transparent;\n      padding: 0;\n      text-align: left;\n      width: 100%;\n      cursor: pointer; }\n    .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-details .h5p-interactive-book-summary-section-score {\n      margin-left: auto;\n      white-space: nowrap;\n      font-size: 0.875rem; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-section-icon {\n    margin-right: 0.6125rem;\n    color: #2d7ad2;\n    font-size: 0.8125rem;\n    align-items: center;\n    display: flex; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-chapter-subheader {\n    font-style: italic;\n    color: #737285;\n    font-size: 0.875rem;\n    line-height: 0.9375rem; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-progress-circle {\n    width: 3rem;\n    height: 3rem;\n    min-height: 3rem;\n    min-width: 3rem;\n    border-radius: 50%;\n    border: 6px solid #F4F4F4;\n    box-shadow: 0 0 0 4px rgba(228, 228, 237, 0.5);\n    margin-left: auto;\n    position: relative; }\n    .h5p-interactive-book-summary-page .h5p-interactive-book-summary-progress-circle canvas {\n      position: absolute;\n      max-width: 100%;\n      max-height: 100%; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-score-bar {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 3rem; }\n  .h5p-interactive-book-summary-page .h5p-interactive-book-summary-no-chapter-interactions p:first-child {\n    font-size: 1.2rem;\n    font-weight: bold; }\n\n.h5p-interactive-book-summary-footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #ffffff;\n  height: 5rem;\n  box-shadow: -5px -5px 10px rgba(166, 166, 166, 0.4);\n  display: flex;\n  padding: 1rem;\n  box-sizing: border-box;\n  transform: translateY(120%);\n  transition: transform 0.5s;\n  z-index: 1; }\n  .h5p-interactive-book-summary-footer.show-footer {\n    transform: translateY(0); }\n  .h5p-interactive-book-summary-footer.menu-open {\n    display: none; }\n  .h5p-interactive-book-summary-footer button {\n    flex: auto; }\n\n.h5p-interactive-book-summary-dropdown {\n  position: relative;\n  max-width: 200px;\n  border: 1px solid #e8e8e8;\n  border-radius: 4px;\n  background-color: #ffffff;\n  margin-left: auto 0.0625rem auto auto;\n  font-size: 0.875rem;\n  min-width: 12rem; }\n  .h5p-interactive-book-summary-dropdown > button {\n    cursor: pointer; }\n  .h5p-interactive-book-summary-dropdown[active] .h5p-interactive-book-summary-dropdown-menu {\n    display: block;\n    box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.1); }\n    .h5p-interactive-book-summary-dropdown[active] .h5p-interactive-book-summary-dropdown-menu button {\n      background-color: #ffffff; }\n  .h5p-interactive-book-summary-dropdown[active] button {\n    background-color: #fafafa;\n    cursor: pointer;\n    text-align: left; }\n  .h5p-interactive-book-summary-dropdown .h5p-interactive-book-summary-dropdown-menu {\n    position: absolute;\n    list-style: none;\n    display: none;\n    left: 0;\n    right: 0;\n    overflow: hidden;\n    cursor: pointer;\n    background-color: inherit; }\n  .h5p-interactive-book-summary-dropdown button {\n    display: flex;\n    width: 100%;\n    border: 0;\n    background: transparent;\n    align-items: center;\n    font-size: inherit;\n    padding: 0.5rem 0.6875rem; }\n    .h5p-interactive-book-summary-dropdown button .icon-expanded {\n      margin-left: auto;\n      font-size: 0.5rem; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/style.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/style.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../fonts/h5p-interactive-book.eot?a3wrpr */ "./src/fonts/h5p-interactive-book.eot?a3wrpr") + "#iefix");
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../fonts/h5p-interactive-book.ttf?a3wrpr */ "./src/fonts/h5p-interactive-book.ttf?a3wrpr"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../fonts/h5p-interactive-book.woff?a3wrpr */ "./src/fonts/h5p-interactive-book.woff?a3wrpr"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../fonts/h5p-interactive-book.svg?a3wrpr */ "./src/fonts/h5p-interactive-book.svg?a3wrpr") + "#h5p-interactive-book");

// Module
exports.push([module.i, "@font-face {\n  font-family: 'h5p-book';\n  font-style: normal;\n  font-weight: normal;\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"svg\"); }\n\n.h5p-interactive-book [class^='icon-'],\n.h5p-interactive-book [class*=' icon-'] {\n  font-family: 'h5p-book';\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  line-height: 1;\n  text-transform: none; }\n\n.icon-close ::before {\n  content: '\\e900'; }\n\n.icon-expanded::before {\n  content: '\\e901'; }\n\n.icon-collapsed::before {\n  content: '\\e902'; }\n\n.icon-chapter-started::before {\n  content: '\\e903'; }\n\n.icon-chapter-done::before {\n  content: '\\e90a'; }\n\n.icon-check-mark::before {\n  content: '\\e910'; }\n\n.icon-chapter-blank::before {\n  content: '\\e905'; }\n\n.icon-menu::before {\n  content: '\\e906'; }\n\n.icon-previous::before {\n  content: '\\e907'; }\n\n.icon-next::before {\n  content: '\\e908'; }\n\n.icon-up::before {\n  content: '\\e909'; }\n\n.icon-question-answered::before {\n  content: '\\e90a'; }\n\n.icon-enable-fullscreen::before {\n  content: '\\e90b'; }\n\n.icon-disable-fullscreen::before {\n  content: '\\e90c'; }\n\n.icon-restart::before {\n  content: '\\e90d'; }\n\n.icon-paper-pencil::before {\n  content: '\\e90e'; }\n\n.icon-paper::before {\n  content: '\\e90f'; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/element-scroll-polyfill/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/element-scroll-polyfill/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
    var normalizeNonFiniteValue = function (value) {
        value = +value;
        return (isNaN(value) || value == Infinity || value == -Infinity) ? 0 : value;
    }
    
    var isBodyPotentiallyScrollable = function (body) {
        body = body ? body : document.getElementsByTagName("BODY")[0];
    
        var bodyComputedStyle = window.getComputedStyle(body);
        var parentComputedStyle =  window.getComputedStyle(body.parent);
        var bodyComputedOverflowX = bodyComputedStyle.overflowX;
        var bodyComputedOverflowY = bodyComputedStyle.overflowY;
        var parentComputedOverflowX = parentComputedStyle.overflowX;
        var parentComputedOverflowY = parentComputedStyle.overflowY;
    
        return (
            (
                bodyComputedStyle.display == "table-column" || 
                bodyComputedStyle.display == "table-column-group"
            ) && (
                parentComputedOverflowX != "visible" && 
                parentComputedOverflowX != "clip" && 
                parentComputedOverflowY != "visible" && 
                parentComputedOverflowY != "clip"
            ) && (
                bodyComputedOverflowX != "visible" && 
                bodyComputedOverflowX != "clip" && 
                bodyComputedOverflowY != "visible" && 
                bodyComputedOverflowY != "clip"
            )
        );
    }
    
    if (!Element.prototype.scroll) {
        Element.prototype.scroll = function () {
            var argsLength = arguments.length;
            var doc = this.ownerDocument;
            var win = doc.defaultView;
            var quirksMode = (doc.compatMode == "BackCompat");
            var body = document.getElementsByTagName("BODY")[0];
            var options = {};
            var x, y;
    
            if (doc != window.document) return;
            if (!win) return;
    
            if (argsLength === 0) {
                return;
            } else if (argsLength === 1) {
                var arg = arguments[0];
                if (typeof arg != "object") throw "Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.";
        
                if ('left' in arg) {
                    options.left = normalizeNonFiniteValue(arg.left);
                }
        
                if ('top' in arg) {
                    options.top = normalizeNonFiniteValue(arg.top);
                }
    
                x = (('left' in options) ? options.left : this.scrollLeft);
                y = (('top' in options) ? options.top : this.scrollTop);
            } else {
                options.left = x = normalizeNonFiniteValue(arguments[0]);
                options.top = y = normalizeNonFiniteValue(arguments[1]);
            }
    
            if (this == document.documentElement) {
                if (quirksMode) return;
    
                win.scroll(('scrollX' in win) ? win.scrollX : (('pageXOffset' in win) ? win.pageXOffset : this.scrollLeft), y);
                return;
            }
    
            if (this == body && quirksMode && !isBodyPotentiallyScrollable(body)) {
                win.scroll(options.left, options.top);
                return;
            }
            
            this.scrollLeft = x;
            this.scrollTop = y;
        };
    }
    
    if (!Element.prototype.scrollTo) {
        Element.prototype.scrollTo = Element.prototype.scroll;
    }
    
    if (!Element.prototype.scrollBy) {
        Element.prototype.scrollBy = function () {
            var argsLength = arguments.length;
            var options = {};
    
            if (argsLength === 0) {
                return;
            } else if (argsLength === 1) {
                var arg = arguments[0];
                if (typeof arg != "object") throw "Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.";
    
                if ('left' in arg) {
                    options.left = normalizeNonFiniteValue(arg.left);
                }
    
                if ('top' in arg) {
                    options.top = normalizeNonFiniteValue(arg.top);
                }
            } else {
                options.left = normalizeNonFiniteValue(arguments[0]);
                options.top = normalizeNonFiniteValue(arguments[1]);
            }
    
            options.left = (('left' in options) ? options.left + this.scrollLeft : this.scrollLeft);
            options.top = (('top' in options) ? options.top + this.scrollTop : this.scrollTop);
            this.scroll(options);
        };
    }
})();


/***/ }),

/***/ "./node_modules/jquery-circle-progress/dist/circle-progress.js":
/*!*********************************************************************!*\
  !*** ./node_modules/jquery-circle-progress/dist/circle-progress.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
// UMD factory - https://github.com/umdjs/umd/blob/d31bb6ee7098715e019f52bdfe27b3e4bfd2b97e/templates/jqueryPlugin.js
// Uses AMD, CommonJS or browser globals to create a jQuery plugin.
(function(factory) {
  if (true) {
    // AMD - register as an anonymous module
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var $; }
})(function($) {
  /**
   * Inner implementation of the circle progress bar.
   * The class is not exposed _yet_ but you can create an instance through jQuery method call.
   *
   * @param {object} config - You can customize any class member (property or method).
   * @class
   * @alias CircleProgress
   */
  function CircleProgress(config) {
    this.init(config);
  }

  CircleProgress.prototype = {
    //--------------------------------------- public options ---------------------------------------
    /**
     * This is the only required option. It should be from `0.0` to `1.0`.
     * @type {number}
     * @default 0.0
     */
    value: 0.0,

    /**
     * Size of the canvas in pixels.
     * It's a square so we need only one dimension.
     * @type {number}
     * @default 100.0
     */
    size: 100.0,

    /**
     * Initial angle for `0.0` value in radians.
     * @type {number}
     * @default -Math.PI
     */
    startAngle: -Math.PI,

    /**
     * Width of the arc in pixels.
     * If it's `'auto'` - the value is calculated as `[this.size]{@link CircleProgress#size} / 14`.
     * @type {number|string}
     * @default 'auto'
     */
    thickness: 'auto',

    /**
     * Fill of the arc. You may set it to:
     *
     *   - solid color:
     *     - `'#3aeabb'`
     *     - `{ color: '#3aeabb' }`
     *     - `{ color: 'rgba(255, 255, 255, .3)' }`
     *   - linear gradient _(left to right)_:
     *     - `{ gradient: ['#3aeabb', '#fdd250'], gradientAngle: Math.PI / 4 }`
     *     - `{ gradient: ['red', 'green', 'blue'], gradientDirection: [x0, y0, x1, y1] }`
     *     - `{ gradient: [["red", .2], ["green", .3], ["blue", .8]] }`
     *   - image:
     *     - `{ image: 'http://i.imgur.com/pT0i89v.png' }`
     *     - `{ image: imageObject }`
     *     - `{ color: 'lime', image: 'http://i.imgur.com/pT0i89v.png' }` -
     *       color displayed until the image is loaded
     *
     * @default {gradient: ['#3aeabb', '#fdd250']}
     */
    fill: {
      gradient: ['#3aeabb', '#fdd250']
    },

    /**
     * Color of the "empty" arc. Only a color fill supported by now.
     * @type {string}
     * @default 'rgba(0, 0, 0, .1)'
     */
    emptyFill: 'rgba(0, 0, 0, .1)',

    /**
     * jQuery Animation config.
     * You can pass `false` to disable the animation.
     * @see http://api.jquery.com/animate/
     * @type {object|boolean}
     * @default {duration: 1200, easing: 'circleProgressEasing'}
     */
    animation: {
      duration: 1200,
      easing: 'circleProgressEasing'
    },

    /**
     * Default animation starts at `0.0` and ends at specified `value`. Let's call this _direct animation_.
     * If you want to make _reversed animation_ - set `animationStartValue: 1.0`.
     * Also you may specify any other value from `0.0` to `1.0`.
     * @type {number}
     * @default 0.0
     */
    animationStartValue: 0.0,

    /**
     * Reverse animation and arc draw.
     * By default, the arc is filled from `0.0` to `value`, _clockwise_.
     * With `reverse: true` the arc is filled from `1.0` to `value`, _counter-clockwise_.
     * @type {boolean}
     * @default false
     */
    reverse: false,

    /**
     * Arc line cap: `'butt'`, `'round'` or `'square'` -
     * [read more]{@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.lineCap}.
     * @type {string}
     * @default 'butt'
     */
    lineCap: 'butt',

    /**
     * Canvas insertion mode: append or prepend it into the parent element?
     * @type {string}
     * @default 'prepend'
     */
    insertMode: 'prepend',

    //------------------------------ protected properties and methods ------------------------------
    /**
     * Link to {@link CircleProgress} constructor.
     * @protected
     */
    constructor: CircleProgress,

    /**
     * Container element. Should be passed into constructor config.
     * @protected
     * @type {jQuery}
     */
    el: null,

    /**
     * Canvas element. Automatically generated and prepended to [this.el]{@link CircleProgress#el}.
     * @protected
     * @type {HTMLCanvasElement}
     */
    canvas: null,

    /**
     * 2D-context of [this.canvas]{@link CircleProgress#canvas}.
     * @protected
     * @type {CanvasRenderingContext2D}
     */
    ctx: null,

    /**
     * Radius of the outer circle. Automatically calculated as `[this.size]{@link CircleProgress#size} / 2`.
     * @protected
     * @type {number}
     */
    radius: 0.0,

    /**
     * Fill of the main arc. Automatically calculated, depending on [this.fill]{@link CircleProgress#fill} option.
     * @protected
     * @type {string|CanvasGradient|CanvasPattern}
     */
    arcFill: null,

    /**
     * Last rendered frame value.
     * @protected
     * @type {number}
     */
    lastFrameValue: 0.0,

    /**
     * Init/re-init the widget.
     *
     * Throws a jQuery event:
     *
     * - `circle-inited(jqEvent)`
     *
     * @param {object} config - You can customize any class member (property or method).
     */
    init: function(config) {
      $.extend(this, config);
      this.radius = this.size / 2;
      this.initWidget();
      this.initFill();
      this.draw();
      this.el.trigger('circle-inited');
    },

    /**
     * Initialize `<canvas>`.
     * @protected
     */
    initWidget: function() {
      if (!this.canvas)
        this.canvas = $('<canvas>')[this.insertMode == 'prepend' ? 'prependTo' : 'appendTo'](this.el)[0];

      var canvas = this.canvas;
      canvas.width = this.size;
      canvas.height = this.size;
      this.ctx = canvas.getContext('2d');

      if (window.devicePixelRatio > 1) {
        var scaleBy = window.devicePixelRatio;
        canvas.style.width = canvas.style.height = this.size + 'px';
        canvas.width = canvas.height = this.size * scaleBy;
        this.ctx.scale(scaleBy, scaleBy);
      }
    },

    /**
     * This method sets [this.arcFill]{@link CircleProgress#arcFill}.
     * It could do this async (on image load).
     * @protected
     */
    initFill: function() {
      var self = this,
        fill = this.fill,
        ctx = this.ctx,
        size = this.size;

      if (!fill)
        throw Error("The fill is not specified!");

      if (typeof fill == 'string')
        fill = {color: fill};

      if (fill.color)
        this.arcFill = fill.color;

      if (fill.gradient) {
        var gr = fill.gradient;

        if (gr.length == 1) {
          this.arcFill = gr[0];
        } else if (gr.length > 1) {
          var ga = fill.gradientAngle || 0, // gradient direction angle; 0 by default
            gd = fill.gradientDirection || [
                size / 2 * (1 - Math.cos(ga)), // x0
                size / 2 * (1 + Math.sin(ga)), // y0
                size / 2 * (1 + Math.cos(ga)), // x1
                size / 2 * (1 - Math.sin(ga))  // y1
              ];

          var lg = ctx.createLinearGradient.apply(ctx, gd);

          for (var i = 0; i < gr.length; i++) {
            var color = gr[i],
              pos = i / (gr.length - 1);

            if ($.isArray(color)) {
              pos = color[1];
              color = color[0];
            }

            lg.addColorStop(pos, color);
          }

          this.arcFill = lg;
        }
      }

      if (fill.image) {
        var img;

        if (fill.image instanceof Image) {
          img = fill.image;
        } else {
          img = new Image();
          img.src = fill.image;
        }

        if (img.complete)
          setImageFill();
        else
          img.onload = setImageFill;
      }

      function setImageFill() {
        var bg = $('<canvas>')[0];
        bg.width = self.size;
        bg.height = self.size;
        bg.getContext('2d').drawImage(img, 0, 0, size, size);
        self.arcFill = self.ctx.createPattern(bg, 'no-repeat');
        self.drawFrame(self.lastFrameValue);
      }
    },

    /**
     * Draw the circle.
     * @protected
     */
    draw: function() {
      if (this.animation)
        this.drawAnimated(this.value);
      else
        this.drawFrame(this.value);
    },

    /**
     * Draw a single animation frame.
     * @protected
     * @param {number} v - Frame value.
     */
    drawFrame: function(v) {
      this.lastFrameValue = v;
      this.ctx.clearRect(0, 0, this.size, this.size);
      this.drawEmptyArc(v);
      this.drawArc(v);
    },

    /**
     * Draw the arc (part of the circle).
     * @protected
     * @param {number} v - Frame value.
     */
    drawArc: function(v) {
      if (v === 0)
        return;

      var ctx = this.ctx,
        r = this.radius,
        t = this.getThickness(),
        a = this.startAngle;

      ctx.save();
      ctx.beginPath();

      if (!this.reverse) {
        ctx.arc(r, r, r - t / 2, a, a + Math.PI * 2 * v);
      } else {
        ctx.arc(r, r, r - t / 2, a - Math.PI * 2 * v, a);
      }

      ctx.lineWidth = t;
      ctx.lineCap = this.lineCap;
      ctx.strokeStyle = this.arcFill;
      ctx.stroke();
      ctx.restore();
    },

    /**
     * Draw the _empty (background)_ arc (part of the circle).
     * @protected
     * @param {number} v - Frame value.
     */
    drawEmptyArc: function(v) {
      var ctx = this.ctx,
        r = this.radius,
        t = this.getThickness(),
        a = this.startAngle;

      if (v < 1) {
        ctx.save();
        ctx.beginPath();

        if (v <= 0) {
          ctx.arc(r, r, r - t / 2, 0, Math.PI * 2);
        } else {
          if (!this.reverse) {
            ctx.arc(r, r, r - t / 2, a + Math.PI * 2 * v, a);
          } else {
            ctx.arc(r, r, r - t / 2, a, a - Math.PI * 2 * v);
          }
        }

        ctx.lineWidth = t;
        ctx.strokeStyle = this.emptyFill;
        ctx.stroke();
        ctx.restore();
      }
    },

    /**
     * Animate the progress bar.
     *
     * Throws 3 jQuery events:
     *
     * - `circle-animation-start(jqEvent)`
     * - `circle-animation-progress(jqEvent, animationProgress, stepValue)` - multiple event
     *   animationProgress: from `0.0` to `1.0`; stepValue: from `0.0` to `value`
     * - `circle-animation-end(jqEvent)`
     *
     * @protected
     * @param {number} v - Final value.
     */
    drawAnimated: function(v) {
      var self = this,
        el = this.el,
        canvas = $(this.canvas);

      // stop previous animation before new "start" event is triggered
      canvas.stop(true, false);
      el.trigger('circle-animation-start');

      canvas
        .css({animationProgress: 0})
        .animate({animationProgress: 1}, $.extend({}, this.animation, {
          step: function(animationProgress) {
            var stepValue = self.animationStartValue * (1 - animationProgress) + v * animationProgress;
            self.drawFrame(stepValue);
            el.trigger('circle-animation-progress', [animationProgress, stepValue]);
          }
        }))
        .promise()
        .always(function() {
          // trigger on both successful & failure animation end
          el.trigger('circle-animation-end');
        });
    },

    /**
     * Get the circle thickness.
     * @see CircleProgress#thickness
     * @protected
     * @returns {number}
     */
    getThickness: function() {
      return $.isNumeric(this.thickness) ? this.thickness : this.size / 14;
    },

    /**
     * Get current value.
     * @protected
     * @return {number}
     */
    getValue: function() {
      return this.value;
    },

    /**
     * Set current value (with smooth animation transition).
     * @protected
     * @param {number} newValue
     */
    setValue: function(newValue) {
      if (this.animation)
        this.animationStartValue = this.lastFrameValue;
      this.value = newValue;
      this.draw();
    }
  };

  //----------------------------------- Initiating jQuery plugin -----------------------------------
  $.circleProgress = {
    // Default options (you may override them)
    defaults: CircleProgress.prototype
  };

  // ease-in-out-cubic
  $.easing.circleProgressEasing = function(x) {
    if (x < 0.5) {
      x = 2 * x;
      return 0.5 * x * x * x;
    } else {
      x = 2 - 2 * x;
      return 1 - 0.5 * x * x * x;
    }
  };

  /**
   * Creates an instance of {@link CircleProgress}.
   * Produces [init event]{@link CircleProgress#init} and [animation events]{@link CircleProgress#drawAnimated}.
   *
   * @param {object} [configOrCommand] - Config object or command name.
   *
   * Config example (you can specify any {@link CircleProgress} property):
   *
   * ```js
   * { value: 0.75, size: 50, animation: false }
   * ```
   *
   * Commands:
   *
   * ```js
   * el.circleProgress('widget'); // get the <canvas>
   * el.circleProgress('value'); // get the value
   * el.circleProgress('value', newValue); // update the value
   * el.circleProgress('redraw'); // redraw the circle
   * el.circleProgress(); // the same as 'redraw'
   * ```
   *
   * @param {string} [commandArgument] - Some commands (like `'value'`) may require an argument.
   * @see CircleProgress
   * @alias "$(...).circleProgress"
   */
  $.fn.circleProgress = function(configOrCommand, commandArgument) {
    var dataName = 'circle-progress',
      firstInstance = this.data(dataName);

    if (configOrCommand == 'widget') {
      if (!firstInstance)
        throw Error('Calling "widget" method on not initialized instance is forbidden');
      return firstInstance.canvas;
    }

    if (configOrCommand == 'value') {
      if (!firstInstance)
        throw Error('Calling "value" method on not initialized instance is forbidden');
      if (typeof commandArgument == 'undefined') {
        return firstInstance.getValue();
      } else {
        var newValue = arguments[1];
        return this.each(function() {
          $(this).data(dataName).setValue(newValue);
        });
      }
    }

    return this.each(function() {
      var el = $(this),
        instance = el.data(dataName),
        config = $.isPlainObject(configOrCommand) ? configOrCommand : {};

      if (instance) {
        instance.init(config);
      } else {
        var initialConfig = $.extend({}, el.data());
        if (typeof initialConfig.fill == 'string')
          initialConfig.fill = JSON.parse(initialConfig.fill);
        if (typeof initialConfig.animation == 'string')
          initialConfig.animation = JSON.parse(initialConfig.animation);
        config = $.extend(initialConfig, config);
        config.el = el;
        instance = new CircleProgress(config);
        el.data(dataName, instance);
      }
    });
  };
});


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/*!************************************************!*\
  !*** ./node_modules/style-loader/addStyles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/entries/main.js":
/*!*****************************!*\
  !*** ./src/entries/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/app */ "./src/scripts/app.js");



 // Load library

H5P = H5P || {};
H5P.InteractiveBook = _scripts_app__WEBPACK_IMPORTED_MODULE_3__["default"];

/***/ }),

/***/ "./src/fonts/h5p-interactive-book.eot?a3wrpr":
/*!***************************************************!*\
  !*** ./src/fonts/h5p-interactive-book.eot?a3wrpr ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,HBEAAHQQAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAxwlbHQAAAAAAAAAAAAAAAAAAAAAAABAAaAA1AHAALQBiAG8AbwBrAAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADIAAAAQAGgANQBwAC0AYgBvAG8AawAAAAAAAAEAAAALAIAAAwAwT1MvMg8SBhsAAAC8AAAAYGNtYXAXVtKXAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZvjuOnsAAAF4AAAMTGhlYWQZQtf5AAANxAAAADZoaGVhB8MD1wAADfwAAAAkaG10eEnKA4MAAA4gAAAAVGxvY2EV3hi6AAAOdAAAACxtYXhwAB0BBgAADqAAAAAgbmFtZfBITmQAAA7AAAABknBvc3QAAwAAAAAQVAAAACAAAwPhAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpEAPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6RD//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAD/wAQAA8AACwAAAScJAQcJARcJATcBBABn/mf+Z2cBmf5nZwGZAZln/mcDWWf+ZwGZZ/5n/mdnAZn+Z2cBmQAAAAEAAACwA+4C4AAVAAAlATY0Jy4BIyEiBgcUFhcBHgE3PgE3Ai4BwBITCRcM/H8aJQEKCQHAETQTAQEBswHAEjYTCAokGg0YCf5AEwIRAQEBAAAAAAEA4P/AAxADrgAUAAAJASYiBw4BFREUFhcyNjcBPgEnLgEDDf5AEjYTCAokGg0YCQHAEwIRAQEB7gHAEhMJFwz8fxolAQoJAcARNBMBAQAAAgAA/8AEAAPAABQAOQAAJS4BJyYnJjQ3Njc+ATc+ARcRBiYnAS4BJy4BIyIGBw4BBw4BFRQWFx4BFx4BMzI2Nz4BNz4BNTQmJwFKKUMYGAwMDAwYGEMpKlwwMFwqAnEiXzo6gkREgjo6XyIiIyIiIl87OoJERII6Ol8iIiMjIoYYQykqLy5eLi8qKUMYGBkB/SwBGRgCOjpfIiIjIyIiXzo6gkREgjo6XyIiIyIiIl87OoJERII6AAIAAP/ABAADwAAmAEsAAAEUBgcBDgEjIiYvAS4BNTQ2PwE2MhcyMBUXAT4BFxYwFRceAQc5ATcuAScuASMiBgcOAQcOARUUFhceARceATMyNjc+ATc+ATU0JicDWAYG/pYGEAkIEAbxBgYGBj0MIwwBlwEPDCMMAT0GBwFjIl86OoJERII6Ol8iIiMiIiJfOzqCRESCOjpfIiIjIyICLAgQBv6WBgYGBvEGEAgJEAY8DQwBlgEODQEMAQE8BhAIlDpfIiIjIyIiXzo6gkREgjo6XyIiIyIiIl87OoJERII6AAAAAAIAAP/ABAADwAAoAE0AAAEeARcWFxYUBwYHDgEHBgcGIicmJy4BJyYnJjQ3Njc+ATc2NzYyFxYXBS4BJy4BIyIGBw4BBw4BFRQWFx4BFx4BMzI2Nz4BNz4BNTQmJwK2KUMYGAwMDAwYGEMpKi8uXi4vKilDGBgMDAwMGBhDKSovLl4uLyoBBSJfOjqCRESCOjpfIiIjIiIiXzs6gkREgjo6XyIiIyMiAvoYQykqLy5eLi8qKUMYGAwMDAwYGEMpKi8uXi4vKilDGBgMDAwMGDo6XyIiIyMiIl86OoJERII6Ol8iIiMiIiJfOzqCRESCOgAAAAADAAAAawQAAxUAAwAHAAsAADchNSE1ITUhERUhNQAEAPwABAD8AAQAa4WNhgEShYUAAAAAAQDE/8ADPAPAAAUAACUJAScJAQM8/nkBh3j+AAIAOAGIAYh4/gD+AAAAAAABAMT/wAM8A8AABQAANwkBNwkBxAGH/nl4AgD+ADgBiAGIeP4A/gAAAQAA/8AEAAPAAAkAABMXAREzEQE3CQEAWgFmgAFlW/4A/gABwFoBZfz1Awv+mlsCAP4AAAEAAP/ABAADwAAkAAABLgEnLgEjIgYHDgEHDgEVFBYXHgEXHgE3MjY3PgE3PgEnNCYnA7siXzo6gkREgjo6XyIiIyIiIl87OoJERII6Ol8iIiQBIyICwDpfIiIjIyIiXzo6gkREgjo6XyIiJAEiIiJfOzqCRESCOgAAAAAEAAD/wAQBA8EAPQCBAL8BAwAAJTQmIzEiBhUcAR0BJy4BJy4BBw4BFRQWFx4BFx4BFx4BFzMqASMqASMiBhUUFhceATM6ATM6ATMyNjU8ATUBJy4BJzQmMToBMzoBMzI2NS4BIyYiIyIGFRwBFRQWFx4BMz4BNTwBNTwBNTQ2NR4BHwEeARceATsBMjY3NiYnLgEnMQMyNjUxNCYjKgErATc+ATc2NCcuASMiBgcOAQcOAQcOAQcxPAE1PAE1NCYjIgYHDgEVHAEVHAEVFBYzFjIzATc+ATcyNDMcARUcARUUFjM+ATU2NCc0JiMqASMiBgcOARUUFhc6ATM6ATMyFjMOAQ8BDgEHDgEVMRQWFxY2Nz4BNzEEARQXFhXtEiIZERwPCQgJCi9TKh4+IgMGAwEIEAcYLRYXFgUFBhAMGjgdGzgeGRX9FnYDBgQBCBAIGC8XFRQBGQ49eTUSFQYFBRELFRUBAwUDbS5cNAoRCAEHDwgPAxExVysMGRYXGBYrGCDtEyIYERAIDgcIDwovUyoePiIDBwQVFgsQBQUGFRgxbEACGnYDBgQBARYVGhABARQRQnU3CQ4EBgUUFBIlEgsVCwMFAwMFAm4vWzQKCgkJEBsSMVcryxkWFhkVLBgg7RMiGBEBEAkOBwcQCi9TKh4+IgMHBBUWCxAFBQYVGDFsQAIadgMGBAEBFhUaEAEVEUF2NwkNBQYFARMUEiUSCxYLAgUDAwUCbi5cNAoKCQkQGxIxVyv82xUWFxTtEyIYERwQCAgJCi5UKR4/IgMGAwgPBxgtFxcVBQUFEQsbNx0bOR4ZFAEC6nYDBgQBCBAIGC8WFRUBGg09eTUSFQUFBhELFRQBAQMFAm4uXDQKEQgIDwgPAxExVysAAAIADv/QBAEDwAA+AIIAACUUFjMxMjY1PAE9ARceARcWMjc+ATU0JicuAScuAScuAScjOgEzOgEzMjY1NCYnLgEjKgEjKgEjIgYVBhQVMQEXHgEXFDIVKgEjKgEjIgYVHgEzFjI3MjY1PAE1NCYnLgEjDgEHHAEVHAEVFAYVLgEvAS4BJy4BKwEiBgcGFhceARcxAiQUFxYV7RIiGREcDwkICQovUyoePiIDBgMBCBAHGC0WFxYFBQYQDBo4HRs4HhkUAf6idgMGBAEIEAgYLxcVFAEaDT15NRIVBQUGEQsVFAEBAwUCbi5cNAoRCAEHDwgPAxExVyuSGRUWGBYsFyDtEiIZERAIDgcIEAovUykePyIDBgQVFgsQBQYFFRgwbEECLHUDBwQBARYVGhABARQSQXY3CA4FBQYBFBMTJBILFgsCBQMDBANtL1s0CwkJCRAbEjFXKwAAAQBm/8ADmgPAAC8AAAE1CQE1MhceARcWFRQHDgEHBiMiJy4BJyY1IxQXHgEXFjMyNz4BNzY1NCcuAScmIwIA/wABAEA3OFQYGBgYVDg3QEA3OFQYGGchIG9LSlVVSktvICEhIG9LSlUC883/AP8AzRgZUzg4P0A4OFMYGRkYUzg4QFVLSnAgICAgcEpLVVRLS28gIAAAAAAHAGH/wAOIA8AAAgA7AFEAVgBaAF4AYgAAARUzExYXHgEVFAcOAScuAScmNDU0NicuAScOAQcGFhceARc+ATcuATU0Njc+ATc2JicuAScuAScVHgEXAzU+ATc+AT8BFx4BFxEjNSERITQ2NwEzFSM1EyM1MzchNSE1ITUhAht4ewgIBwkIBxcUFhgFAQEBARQTDBYKAgUDG0oGKUsnBQsMBQMJAxQbNgoVDRkbEBUVCdIHEQgDBgMLKwIGA7r+cgHZAQH+k7Ky7+/vfP6VAWv+lQFrA6p3/uAUJydXJycTERYBARkUBw8HFy0XERgFLFcrCBIIRoNOBw0HGi8XGDAYEyYTZphaESIMGhcKVQ8qGP7vASBCIAsXCysLAQIBATi6/S4FCgUB5C0t/qctMC0wLQAAAAcARv/AA40DwAAMACUAPgBCAEYASgBOAAABFRQWMTMyNiMnJgYVEyEiJjERNDYxITIWMRUUFjEzMhYxERQGIyUhMjYxETQmMSMiJjE1NCYxISYGFREUFjMTMxUjFSEVIRUhFSE1IRUhAuwGgwUGBYMECJv8xQUBBgJBBQEG7gUBAQX9AALFBAIG6AUBBv4vBAgIBGvv7wHp/hcBQv6+Aen+FwOugwQCDIMFBgX8EgYD9AUBBugFAQb9BgkDPAUCgwUBBu8EAQUGBPyCBAECgzxZPL48uTwAAAMAAP/ABAADwAAFACEAPgAAAScHFwEnAyIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJgMiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYjAbJtJZIBNyXEal1diykoKCmLXV1qal1diykoKCiLXl1qYlZWgCUlJSWAVlZiYlZWgCUlJSWAVlZiAVlsJZABNyUBVCgpi11dampdXYspKCgpi11dampdXYspKPwoJSWAVlZiYlZWgCUlJSWAVlZiYlZWgCUlAAAAAQAAAAEzMx1bCcdfDzz1AAsEAAAAAADbETAkAAAAANsRMCQAAP/ABAEDwQAAAAgAAgAAAAAAAAABAAADwP/AAAAEAQAAAAAEAQABAAAAAAAAAAAAAAAAAAAAFQQAAAAAAAAAAAAAAAIAAAAEAAAABAAAAAQAAOAEAAAABAAAAAQAAAAEAAAABAAAxAQAAMQEAAAABAAAAAQBAAAEAQAOBAAAZgP1AGED0wBGBAAAAAAAAAAACgAUAB4AQABqAJIA7gFgAdoB9AIKAh4COAJ2A8QEcAS8BVYFwgYmAAEAAAAVAQQABwAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAIAAAAAQAAAAAAAgAHALcAAQAAAAAAAwAIAIcAAQAAAAAABAAIAMwAAQAAAAAABQALAGYAAQAAAAAABgAIAJ8AAQAAAAAACgAaABgAAwABBAkAAQAQAAgAAwABBAkAAgAOAL4AAwABBAkAAwAQAI8AAwABBAkABAAQANQAAwABBAkABQAWAHEAAwABBAkABgAQAKcAAwABBAkACgA0ADJoNXAtYm9vawBoADUAcAAtAGIAbwBvAGtGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC5WZXJzaW9uIDEuMgBWAGUAcgBzAGkAbwBuACAAMQAuADJoNXAtYm9vawBoADUAcAAtAGIAbwBvAGtoNXAtYm9vawBoADUAcAAtAGIAbwBvAGtSZWd1bGFyAFIAZQBnAHUAbABhAHJoNXAtYm9vawBoADUAcAAtAGIAbwBvAGsAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

/***/ }),

/***/ "./src/fonts/h5p-interactive-book.svg?a3wrpr":
/*!***************************************************!*\
  !*** ./src/fonts/h5p-interactive-book.svg?a3wrpr ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIiA+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8bWV0YWRhdGE+DQo8anNvbj4NCjwhW0NEQVRBWw0Kew0KCSJmb250RmFtaWx5IjogImg1cC1ib29rIiwNCgkiZGVzY3JpcHRpb24iOiAiRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4iLA0KCSJtYWpvclZlcnNpb24iOiAxLA0KCSJtaW5vclZlcnNpb24iOiAyLA0KCSJ2ZXJzaW9uIjogIlZlcnNpb24gMS4yIiwNCgkiZm9udElkIjogImg1cC1ib29rIiwNCgkicHNOYW1lIjogImg1cC1ib29rIiwNCgkic3ViRmFtaWx5IjogIlJlZ3VsYXIiLA0KCSJmdWxsTmFtZSI6ICJoNXAtYm9vayINCn0NCl1dPg0KPC9qc29uPg0KPC9tZXRhZGF0YT4NCjxkZWZzPg0KPGZvbnQgaWQ9Img1cC1ib29rIiBob3Jpei1hZHYteD0iMTAyNCI+DQo8Zm9udC1mYWNlIHVuaXRzLXBlci1lbT0iMTAyNCIgYXNjZW50PSI5NjAiIGRlc2NlbnQ9Ii02NCIgLz4NCjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDI0IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeDIwOyIgaG9yaXotYWR2LXg9IjUxMiIgZD0iIiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDA7IiBnbHlwaC1uYW1lPSJjbG9zZSIgZGF0YS10YWdzPSJjbG9zZSIgZD0iTTEwMjQgODU2Ljg2OWwtMTAzLjEzMSAxMDMuMTMxLTQwOC44NjktNDA4Ljg2OS00MDguODY5IDQwOC44NjktMTAzLjEzMS0xMDMuMTMxIDQwOC44NjktNDA4Ljg2OS00MDguODY5LTQwOC44NjkgMTAzLjEzMS0xMDMuMTMxIDQwOC44NjkgNDA4Ljg2OSA0MDguODY5LTQwOC44NjkgMTAzLjEzMSAxMDMuMTMxLTQwOC44NjkgNDA4Ljg2OXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMTsiIGdseXBoLW5hbWU9ImV4cGFuZGVkIiBkYXRhLXRhZ3M9ImV4cGFuZGVkIiBkPSJNNTU4LjEwNCAxNzguOTQ2bDQ0Ny42MzcgNDQ3LjYzN2MyNC45NzUgMjQuOTc1IDI0LjAxNiA2Ni4yODEtMC45NjEgOTEuMjU1LTExLjUyNyAxMS41MjctMjcuODU2IDE4LjI1Mi00NC4xODggMTguMjUyaC04OTYuMjMyYy0zNC41ODEgMC02My4zOTktMjcuODU2LTY0LjM2LTYyLjQzOCAwLTE3LjI5MSA2LjcyNS0zMy42MiAxOS4yMTEtNDYuMTA4bDQ0Ny42MzctNDQ3LjYzN2MyMy4wNTQtMjQuOTc1IDYyLjQzOC0yNi44OTcgODguMzc0LTMuODQzIDAuOTYxIDAuOTYxIDEuOTIgMS45MiAyLjg4MiAyLjg4MnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMjsiIGdseXBoLW5hbWU9ImNvbGxhcHNlZCIgZGF0YS10YWdzPSJjb2xsYXBzZWQiIGQ9Ik03ODEuMDU0IDQ5NC4xMDRsLTQ0Ny42MzcgNDQ3LjYzN2MtMjQuOTc1IDI0Ljk3NS02Ni4yODEgMjQuMDE2LTkxLjI1NS0wLjk2MS0xMS41MjctMTEuNTI3LTE4LjI1Mi0yNy44NTYtMTguMjUyLTQ0LjE4OHYtODk2LjIzMmMwLTM0LjU4MSAyNy44NTYtNjMuMzk5IDYyLjQzOC02NC4zNiAxNy4yOTEgMCAzMy42MiA2LjcyNSA0Ni4xMDggMTkuMjExbDQ0Ny42MzcgNDQ3LjYzN2MyNC45NzUgMjMuMDU0IDI2Ljg5NyA2Mi40MzggMy44NDMgODguMzc0LTAuOTYxIDAuOTYxLTEuOTIgMS45Mi0yLjg4MiAyLjg4MnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMzsiIGdseXBoLW5hbWU9ImNoYXB0ZXItc3RhcnRlZCIgZGF0YS10YWdzPSJjaGFwdGVyLXN0YXJ0ZWQiIGQ9Ik0zMzAuMjQ4IDEzNC40MDhjLTU0LjM5OSAzMS4zNi0xMDAuNDc4IDc3LjQzOC0xMzEuODM2IDEzMS44MzYtNjQuNjM4IDExMi42MzctNjQuNjM4IDI1MC44NzMgMCAzNjMuNTExIDMxLjM2IDU0LjM5OSA3Ny40MzggMTAwLjQ3OCAxMzEuODM2IDEzMS44MzYgNTUuMDM4IDMxLjk5OSAxMTcuNzU3IDQ5LjI3OCAxODEuNzU1IDQ4LjYzOXYtNzI0LjQ2MWMtNjMuOTk5LTAuNjQtMTI2LjcxNyAxNi42MzktMTgxLjc1NSA0OC42Mzl6TTk1NC44NzEgNzAzLjk5NGMtNDQuNzk5IDc3LjQzOC0xMDkuNDM3IDE0Mi4wNzYtMTg2Ljg3NiAxODYuODc2LTc3LjQzOCA0NS40MzgtMTY1Ljc1NiA2OS43NTktMjU1Ljk5NCA2OS4xMTgtOTAuMjM4IDAuNjQtMTc4LjU1NS0yMy42OC0yNTUuOTk0LTY5LjExOC03Ny40MzgtNDQuNzk5LTE0Mi4wNzYtMTA5LjQzNy0xODYuODc2LTE4Ni44NzYtNDUuNDM4LTc3LjQzOC02OS43NTktMTY1Ljc1Ni02OS4xMTgtMjU1Ljk5NC0wLjY0LTkwLjIzOCAyMy4wMzktMTc4LjU1NSA2OC40NzgtMjU1Ljk5NCA0NC43OTktNzcuNDM4IDEwOS40MzctMTQyLjA3NiAxODcuNTE1LTE4Ni44NzYgNzcuNDM4LTQ1LjQzOCAxNjUuNzU2LTY5Ljc1OSAyNTUuOTk0LTY5LjExOCA5MC4yMzgtMC42NCAxNzguNTU1IDIzLjAzOSAyNTUuOTk0IDY4LjQ3OCA3Ny40MzggNDQuNzk5IDE0Mi4wNzYgMTA5LjQzNyAxODYuODc2IDE4Ny41MTUgNDUuNDM4IDc3LjQzOCA2OS43NTkgMTY1Ljc1NiA2OS4xMTggMjU1Ljk5NCAwLjY0IDkwLjIzOC0yMy42OCAxNzguNTU1LTY5LjExOCAyNTUuOTk0eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOTA0OyIgZ2x5cGgtbmFtZT0iY2hhcHRlci1kb25lIiBkYXRhLXRhZ3M9ImNoYXB0ZXItZG9uZSIgZD0iTTg1NS42NzQgNTU2LjE1OGMwLTExLjUyLTMuODQtMjIuMzk5LTEyLjE2LTMwLjA3OWwtMzYxLjU5MS0zNjEuNTkxYy04LjMyLTguMzItMTkuMTk5LTEyLjc5OS0zMC43MTktMTIuNzk5cy0yMi4zOTkgNC40OC0zMC4wNzkgMTIuNzk5bC0yNDAuNjM0IDI0MC42MzRjLTguMzIgNy42OC0xMi4xNiAxOC41NTktMTIuMTYgMzAuMDc5LTAuNjQgMTEuNTIgMy44NCAyMi4zOTkgMTIuMTYgMzAuNzE5bDYwLjc5OCA2MC4xNTljMTYgMTYuNjM5IDQyLjIzOSAxNy4yOCA1OC44NzggMS4yNzkgMC42NC0wLjY0IDAuNjQtMC42NCAxLjI3OS0xLjI3OWwxNTAuMzk3LTE1MC4zOTcgMjcxLjM1MyAyNzAuNzEzYzE2IDE2LjYzOSA0Mi4yMzkgMTcuMjggNTguODc4IDEuMjc5IDAuNjQtMC42NCAwLjY0LTAuNjQgMS4yNzktMS4yNzlsNjAuNzk4LTYwLjE1OWM4LjMyLTguMzIgMTIuNzk5LTE5LjE5OSAxMi4xNi0zMC43MTl2MGwtMC42NCAwLjY0ek05NTQuODcxIDcwMy45OTRjLTQ0Ljc5OSA3Ny40MzgtMTA5LjQzNyAxNDIuMDc2LTE4Ni44NzYgMTg2Ljg3Ni03Ny40MzggNDUuNDM4LTE2NS43NTYgNjkuNzU5LTI1NS45OTQgNjkuMTE4LTkwLjIzOCAwLjY0LTE3OC41NTUtMjMuNjgtMjU1Ljk5NC02OS4xMTgtNzcuNDM4LTQ0Ljc5OS0xNDIuMDc2LTEwOS40MzctMTg2Ljg3Ni0xODYuODc2LTQ1LjQzOC03Ny40MzgtNjkuNzU5LTE2NS43NTYtNjkuMTE4LTI1NS45OTQtMC42NC05MC4yMzggMjMuMDM5LTE3OC41NTUgNjguNDc4LTI1NS45OTQgNDQuNzk5LTc3LjQzOCAxMDkuNDM3LTE0Mi4wNzYgMTg3LjUxNS0xODYuODc2IDc3LjQzOC00NS40MzggMTY1Ljc1Ni02OS43NTkgMjU1Ljk5NC02OS4xMTggOTAuMjM4LTAuNjQgMTc4LjU1NSAyMy4wMzkgMjU1Ljk5NCA2OC40NzggNzcuNDM4IDQ0Ljc5OSAxNDIuMDc2IDEwOS40MzcgMTg2Ljg3NiAxODcuNTE1IDQ1LjQzOCA3Ny40MzggNjkuNzU5IDE2NS43NTYgNjkuMTE4IDI1NS45OTQgMC42NCA5MC4yMzgtMjMuNjggMTc4LjU1NS02OS4xMTggMjU1Ljk5NHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNTsiIGdseXBoLW5hbWU9ImNoYXB0ZXItYmxhbmsiIGRhdGEtdGFncz0iY2hhcHRlci1ibGFuayIgZD0iTTY5My43NTUgNzYxLjU5MmM1NC4zOTktMzEuMzYgMTAwLjQ3OC03Ny40MzggMTMxLjgzNi0xMzEuODM2IDY0LjYzOC0xMTIuNjM3IDY0LjYzOC0yNTAuODczIDAtMzYzLjUxMS0zMS4zNi01NC4zOTktNzcuNDM4LTEwMC40NzgtMTMxLjgzNi0xMzEuODM2LTExMi42MzctNjQuNjM4LTI1MC44NzMtNjQuNjM4LTM2My41MTEgMC01NC4zOTkgMzEuMzYtMTAwLjQ3OCA3Ny40MzgtMTMxLjgzNiAxMzEuODM2LTY0LjYzOCAxMTIuNjM3LTY0LjYzOCAyNTAuODczIDAgMzYzLjUxMSAzMS4zNiA1NC4zOTkgNzcuNDM4IDEwMC40NzggMTMxLjgzNiAxMzEuODM2IDExMi42MzcgNjQuNjM4IDI1MC44NzMgNjQuNjM4IDM2My41MTEgMHpNOTU0Ljg2OCA3MDMuOTk0Yy00NC43OTkgNzcuNDM4LTEwOS40MzcgMTQyLjA3Ni0xODYuODc2IDE4Ni44NzYtNzcuNDM4IDQ1LjQzOC0xNjUuNzU2IDY5Ljc1OS0yNTUuOTk0IDY5LjExOC05MC4yMzggMC42NC0xNzguNTU1LTIzLjY4LTI1NS45OTQtNjkuMTE4LTc3LjQzOC00NC43OTktMTQyLjA3Ni0xMDkuNDM3LTE4Ni44NzYtMTg2Ljg3Ni00NS40MzgtNzcuNDM4LTY5Ljc1OS0xNjUuNzU2LTY5LjExOC0yNTUuOTk0LTAuNjQtOTAuMjM4IDIzLjAzOS0xNzguNTU1IDY4LjQ3OC0yNTUuOTk0IDQ0Ljc5OS03Ny40MzggMTA5LjQzNy0xNDIuMDc2IDE4Ny41MTUtMTg2Ljg3NiA3Ny40MzgtNDUuNDM4IDE2NS43NTYtNjkuNzU5IDI1NS45OTQtNjkuMTE4IDkwLjIzOC0wLjY0IDE3OC41NTUgMjMuMDM5IDI1NS45OTQgNjguNDc4IDc3LjQzOCA0NC43OTkgMTQyLjA3NiAxMDkuNDM3IDE4Ni44NzYgMTg3LjUxNSA0NS40MzggNzcuNDM4IDY5Ljc1OSAxNjUuNzU2IDY5LjExOCAyNTUuOTk0IDAuNjQgOTAuMjM4LTIzLjY4IDE3OC41NTUtNjkuMTE4IDI1NS45OTR6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDY7IiBnbHlwaC1uYW1lPSJtZW51IiBkYXRhLXRhZ3M9Im1lbnUiIGQ9Ik0wIDEwNi43aDEwMjR2MTMzLjdoLTEwMjR2LTEzMy43ek0wIDM4MS4xaDEwMjR2MTMzLjhoLTEwMjR2LTEzMy44ek0wIDc4OS4zdi0xMzMuOGgxMDI0djEzMy44aC0xMDI0eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOTA3OyIgZ2x5cGgtbmFtZT0icHJldmlvdXMiIGRhdGEtdGFncz0icHJldmlvdXMiIGQ9Ik04MjguMTYgNTYuMzJsLTM5MC44MjYgMzkxLjY4IDM5MC44MjYgMzkxLjY4LTEyMC4zMiAxMjAuMzItNTEyLTUxMiA1MTItNTEyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOTA4OyIgZ2x5cGgtbmFtZT0ibmV4dCIgZGF0YS10YWdzPSJuZXh0IiBkPSJNMTk1Ljg0IDU2LjMybDM5MC44MjYgMzkxLjY4LTM5MC44MjYgMzkxLjY4IDEyMC4zMiAxMjAuMzIgNTEyLTUxMi01MTItNTEyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOTA5OyIgZ2x5cGgtbmFtZT0idXAiIGRhdGEtdGFncz0idXAiIGQ9Ik0wIDQ0OGw5MC4yNC05MC4yNCAzNTcuNzYgMzU3LjEydi03NzguODc5aDEyNy45OTl2Nzc4Ljg3OWwzNTcuMTItMzU3Ljc2IDkwLjg4IDkwLjg4LTUxMS45OTkgNTExLjk5OS01MTEuOTk5LTUxMS45OTl6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGE7IiBnbHlwaC1uYW1lPSJxdWVzdGlvbi1hbnN3ZXJlZCIgZGF0YS10YWdzPSJxdWVzdGlvbi1hbnN3ZXJlZCIgZD0iTTk1NC45IDcwNGMtNDQuOCA3Ny40LTEwOS41IDE0Mi4xLTE4Ni45IDE4Ni45LTc3LjQgNDUuNC0xNjUuOCA2OS43LTI1NiA2OS4xLTkwLjIgMC42LTE3OC42LTIzLjctMjU2LTY5LjEtNzcuNC00NC44LTE0Mi4xLTEwOS41LTE4Ni45LTE4Ni45LTQ1LjQtNzcuNC02OS43LTE2NS44LTY5LjEtMjU2LTAuNi05MC4yIDIzLTE3OC42IDY4LjUtMjU2IDQ0LjgtNzcuNCAxMDkuNC0xNDIuMSAxODcuNS0xODYuOSA3Ny40LTQ1LjQgMTY1LjgtNjkuOCAyNTYtNjkuMSA5MC4yLTAuNiAxNzguNiAyMyAyNTYgNjguNSA3Ny40IDQ0LjggMTQyLjEgMTA5LjQgMTg2LjkgMTg3LjUgNDUuNCA3Ny40IDY5LjggMTY1LjggNjkuMSAyNTYgMC42IDkwLjItMjMuNyAxNzguNi02OS4xIDI1NnYweiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOTBiOyIgZ2x5cGgtbmFtZT0iZnVsbC1zY3JlZW4tZW50ZXIiIGRhdGEtdGFncz0iZnVsbC1zY3JlZW4tZW50ZXIiIGhvcml6LWFkdi14PSIxMDI1IiBkPSJNMTAyNSAyMDMuM2MwIDMyLjktMTIuNyA0Ni42LTQzIDQ2LjZ2MGMtMjkuOSAwLTQyLjUtMTQuMi00My00Ni42IDAtMjguOSAwLTU3LjcgMC04OS4xdi0zMS45bC0yMzYuOSAyMzYuOWMtMjQuOCAyNC44LTQ0LjUgNDQuNS03Ni45IDc2LjktMjIuOCAyMi44LTM5LjUgMjIuOC02MC43IDEuNS0xMS4xLTExLjEtMTYuMi0yMC4yLTE2LjItMjkuNCAwLTEwLjEgNS42LTIwLjIgMTguNy0zMy40IDYyLjMtNjIuOCAxMTYuNC0xMTYuNCAxNzEuNi0xNzEuNiA0MC00MCA4MS04MSAxMjYuNS0xMjYuNSA0LTQgNy42LTguMSAxMi4xLTEzLjJsMC41LTAuNWMtMTAuNiAwLTIwLjggMC0zMC45IDAtMzEuNCAwLTYxLjIgMC05MS4xIDAtMzAuOSAwLTQ0LjUtMTMuMi00NC41LTQyLjUgMC0xNC43IDMtMjUuOCAxMC4xLTMyLjQgNy4xLTcuMSAxOC4yLTEwLjYgMzMuNC0xMC42IDM1LjQgMCA3Mi40IDAgMTEwLjkgMCAzNS45IDAgNzMuOSAwIDExMy45IDAgMzIuNCAwIDQ1LjEgMTIuNyA0NS4xIDQ0LjUgMC40IDY0LjkgMC40IDEzNS43IDAuNCAyMjEuM3Ywek0yNzguOSA3NDEuM2wtMTE3LjQgMTE3LjVjLTQgNC04LjEgOC4xLTEzLjIgMTMuNy0wLjUgMC41LTEgMS0xLjUgMS41IDExLjEgMCAyMS44IDAgMzIuNCAwIDMyLjQgMCA2My4zIDAgOTMuNiAwIDI3LjggMC41IDQxLjUgMTQuNyA0MSA0My41LTAuNSAzNC40LTIxLjggNDItMzkuNSA0Mi04MiAwLjUtMTY0LjUgMC41LTIzNS4zIDAtMjMuOCAwLTM4LjUtMTQuMi0zOC41LTM3LjUtMC41LTg3LTAuNS0xNjQuNSAwLTIzNy45IDAtMTEuNiAzLjUtMjAuOCAxMC4xLTI3LjMgNy42LTcuNiAxOC43LTEwLjYgMzMuOS0xMC42IDI3LjMgMC41IDQxIDEzLjcgNDEuNSA0MCAwLjUgMjQuMyAwLjUgNDkuMSAwLjUgNzIuOSAwIDE0LjcgMCAyOC45IDAgNDMuNSAwIDMgMC41IDYuMSAxIDEwLjEgNC0zLjUgNy4xLTYuNiAxMC4xLTkuNmwxMDkuOC0xMDkuOGM2MS4yLTYyLjMgMTIwLjUtMTIxIDE4OS44LTE5MC4zIDEzLjctMTMuNyAyNC4zLTE5LjcgMzQuOS0xOS43aDAuNWMxMC4xIDAgMTkuNyA1LjYgMzAuOSAxOC4yIDE5LjIgMjEuMyAxNy43IDM3LTUuNiA2MC43LTY1LjEgNjUuMi0xMjEuMyAxMjEuNC0xNzkgMTc5LjF2MHpNMjY3LjEtNjMuN2MzMi45IDAgNDYuNiAxMi43IDQ2LjYgNDN2MGMwIDI5LjktMTQuMiA0Mi41LTQ2LjYgNDMtMjguOSAwLTU3LjcgMC04OS4xIDBoLTMxLjlsMjM2LjkgMjM2LjljMjQuOCAyNC44IDQ0LjUgNDQuNSA3Ni45IDc2LjkgMjIuOCAyMi44IDIyLjggMzkuNSAxLjUgNjAuNy0xMS4xIDExLjEtMjAuMiAxNi4yLTI5LjQgMTYuMi0xMC4xIDAtMjAuMi01LjYtMzMuNC0xOC43LTYyLjYtNjIuMi0xMTYuMy0xMTYuNC0xNzEuNS0xNzEuNi00MC00MC04MS04MS0xMjYuNS0xMjYuNS00LTQtOC4xLTcuNi0xMy4yLTEyLjFsLTAuNS0wLjVjMCAxMC42IDAgMjAuOCAwIDMwLjkgMCAzMS40IDAgNjEuMiAwIDkxLjEgMCAzMC45LTEzLjIgNDQuNS00Mi41IDQ0LjUtMTQuNyAwLTI1LjgtMy0zMi40LTEwLjEtNy4xLTcuMS0xMC42LTE4LjItMTAuNi0zMy40IDAtMzUuNCAwLTcyLjQgMC0xMTAuOSAwLTM1LjkgMC03My45IDAtMTEzLjkgMC0zMi40IDEyLjctNDUuMSA0NC41LTQ1LjEgNjQuOC0wLjQgMTM1LjctMC40IDIyMS4yLTAuNHYwek04MDUuMiA2ODIuNGwxMTcuNCAxMTcuNGM0IDQgOC4xIDguMSAxMy43IDEzLjIgMC41IDAuNSAxIDEgMS41IDEuNSAwLTExLjEgMC0yMS44IDAtMzIuNCAwLTMyLjQgMC02My4zIDAtOTMuNiAwLjUtMjcuOCAxNC43LTQxLjUgNDMuNS00MSAzNC40IDAuNSA0MiAyMS44IDQyIDM5LjUgMC41IDgyIDAuNSAxNjQuNSAwIDIzNS40IDAgMjMuOC0xNC4yIDM4LjUtMzcuNSAzOC41LTg3LjEgMC41LTE2NC41IDAuNS0yMzcuOSAwLTExLjYgMC0yMC44LTMuNS0yNy4zLTEwLjEtNy41LTcuOC0xMC42LTE4LjktMTAuNi0zNC4xIDAuNS0yNy4zIDEzLjctNDEgNDAtNDEuNSAyNC4zLTAuNSA0OS4xLTAuNSA3Mi45LTAuNSAxNC43IDAgMjguOSAwIDQzLjUgMCAzIDAgNi4xLTAuNSAxMC4xLTEtMy41LTQtNi42LTcuMS05LjYtMTAuMWwtMTA5LjgtMTA5LjljLTYyLjMtNjEuMi0xMjEtMTIwLjUtMTkwLjMtMTg5LjgtMTMuNy0xMy43LTE5LjctMjQuMy0xOS43LTM0Ljl2LTAuNWMwLTEwLjEgNS42LTE5LjcgMTguMi0zMC45IDIxLjMtMTkuMiAzNy0xNy43IDYwLjcgNS42IDY1LjMgNjUuMyAxMjEuNSAxMjEuNSAxNzkuMiAxNzkuMnYweiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOTBjOyIgZ2x5cGgtbmFtZT0iZnVsbC1zY3JlZW4tZXhpdCIgZGF0YS10YWdzPSJmdWxsLXNjcmVlbi1leGl0IiBob3Jpei1hZHYteD0iMTAyNSIgZD0iTTU0OCAxNDYuMWMwLTMyLjkgMTIuNy00Ni42IDQzLTQ2LjZ2MGMyOS45IDAgNDIuNSAxNC4yIDQzIDQ2LjYgMCAyOC45IDAgNTcuNyAwIDg5LjF2MzEuOWwyMzYuOS0yMzYuOWMyNC44LTI0LjggNDQuNS00NC41IDc2LjktNzYuOSAyMi44LTIyLjggMzkuNS0yMi44IDYwLjctMS41IDExLjEgMTEuMSAxNi4yIDIwLjIgMTYuMiAyOS40IDAgMTAuMS01LjYgMjAuMi0xOC43IDMzLjQtNjIuMyA2Mi44LTExNi40IDExNi40LTE3MS42IDE3MS42LTQwIDQwLTgxIDgxLTEyNi41IDEyNi41LTQgNC03LjYgOC4xLTEyLjEgMTMuMmwtMC41IDAuNWMxMC42IDAgMjAuOCAwIDMwLjkgMCAzMS40IDAgNjEuMiAwIDkxLjEgMCAzMC45IDAgNDQuNSAxMy4yIDQ0LjUgNDIuNSAwIDE0LjctMyAyNS44LTEwLjEgMzIuNC03LjEgNy4xLTE4LjIgMTAuNi0zMy40IDEwLjYtMzUuNCAwLTcyLjQgMC0xMTAuOSAwLTM1LjkgMC03My45IDAtMTEzLjkgMC0zMi40IDAtNDUtMTIuNy00NS00NC41LTEtNjQuNC0xLTEzNS4zLTAuNS0yMjEuM3Ywek0xOTguMiA3MDEuOWwxMTcuNC0xMTcuNGM0LTQgOC4xLTguMSAxMy4yLTEzLjcgMC41LTAuNSAxLTEgMS41LTEuNS0xMS4xIDAtMjEuOCAwLTMyLjQgMC0zMi40IDAtNjMuMyAwLTkzLjYgMC0yNy44LTAuNS00MS41LTE0LjctNDEtNDMuNSAwLjUtMzQuNCAyMS44LTQyIDM5LjUtNDIgODItMC41IDE2NC41LTAuNSAyMzUuNCAwIDI0LjMgMCAzOC41IDE0LjIgMzguNSAzOCAwLjUgODYuNiAwLjUgMTY0LjUgMCAyMzcuOSAwIDExLjYtMy41IDIwLjgtMTAuMSAyNy4zLTcuNiA3LjEtMTguNyAxMC42LTMzLjkgMTAuNi0yNy4zLTAuNS00MS0xMy43LTQxLjUtNDAtMC41LTI0LjMtMC41LTQ5LjEtMC41LTcyLjkgMC0xNC43IDAtMjguOSAwLTQzLjUgMC0zLTAuNS02LjEtMS0xMC4xLTQgMy41LTcuMSA2LjYtMTAuMSA5LjZsLTEwOS41IDEwOS4zYy02MS44IDYyLjMtMTIxIDEyMS0xOTAuMyAxOTAuMy0xMy43IDEzLjctMjQuMyAxOS43LTM1IDE5LjdoLTAuNWMtMTAuMSAwLTE5LjctNS41LTMwLjgtMTguMi0xOS4zLTIxLjItMTcuOC0zNi45IDUuNS02MC43IDY1LjMtNjUuMyAxMjEtMTIxLjUgMTc5LjItMTc5LjJ2MHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwZDsiIGdseXBoLW5hbWU9Ikljb242IiBkYXRhLXRhZ3M9Ikljb24gNiIgZD0iTTUxMiA3NTUuMTk5djIwNC44MDFsLTI1Ni0yNTYgMjU2LTI1NnYyMDQuODAxYzE2OS40NzMgMCAzMDcuMi0xMzcuNzI4IDMwNy4yLTMwNy4ycy0xMzcuNzI4LTMwNy4yLTMwNy4yLTMwNy4yLTMwNy4yIDEzNy43MjgtMzA3LjIgMzA3LjJoLTEwMi40YzAtMjI2LjMwNSAxODMuMjk3LTQwOS42IDQwOS42LTQwOS42czQwOS42IDE4My4yOTcgNDA5LjYgNDA5LjYtMTgzLjI5NyA0MDkuNi00MDkuNiA0MDkuNnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwZTsiIGdseXBoLW5hbWU9InJlcG9ydGljb24tdjItZnVsbDEiIGRhdGEtdGFncz0icmVwb3J0IGljb24tdjItZnVsbCAoMSkiIGhvcml6LWFkdi14PSIxMDEzIiBkPSJNNTM5LjEyNyA5MzguMDI2di0xMTkuNTI0aDExOS41MjR6TTc4Mi40NjUgNTMwLjY3N2MyMC4wOTktNTIuMjU4IDQ0LjQ4Ny0yMzAuMjA2IDIzLjU4NC0yODEuNjYxLTkuMTEyLTIyLjUxMS0yMy4zMTUtMzkuNjYzLTUwLjExNC0zOC4wNTUtMjguNjc1IDEuNjA4LTQ1LjAyMyAxOS4wMjctNTAuNjUxIDQ2LjM2My0xLjg3NiA5LjM4LTAuODA0IDE5LjI5Ni0wLjgwNCAyOC45NDMtMC4yNjggMzAuMjg0IDEuMzQgNjAuNTY2LTAuNTM2IDkwLjU4MS0xLjM0IDIyLjc3OS0xMy45MzUgMzkuMzk1LTQwLjE5OSA0Ni4wOTUtMTUuMDA4LTU4Ljk1OC0zMC4yODQtMTE2LjMwOS00My42ODItMTc0LjE5Ni0yLjE0NC0xMC4xODQgMS44NzYtMjMuMDQ3IDUuODk2LTMzLjQ5OSAzNi4xNzktOTMuMjYyIDk5LjE1Ny0xNzUuNTM1IDEwNi45MjktMjc5LjI0OSA1NC42NyA5LjY0NyAxMDIuOTA5IDE4LjIyMyAxNTQuOSAyNy4zMzUtNi4xNjQgMzQuMzAzLTE2LjA3OSA2NS4xMjItMTUuODEyIDk1Ljk0MiAwLjI2OCAzMS44OTEgMTAuNDUyIDYzLjUxNCAxNi42MTUgOTUuNDA2IDUuMDkyIDI1LjQ1OSAxMC45ODggNTAuNjUxIDE1LjgxMiA3Ni4xMSAyNS45OTYgMTM2LjQwOSAxMS4yNTYgMjI0LjU3OC02MS42MzkgMzQ0LjEwMy0xMy40IDIyLjI0My0yNi43OTkgNDYuNjMxLTQzLjQxNCA2My41MTQtMzMuNDk5IDMzLjc2Ny00Ni44OTkgNDUuNTU4LTY4LjYwNyA1OC40MjJ2LTg1LjIyMmMyOC4xNC0xOS44MzIgMzkuMzk1LTQ5LjA0MyA1MS43MjMtODAuOTM0ek01NzEuNTU0IDI1Ny44NmwwLjI2OCAwLjgwNGMxMC4xODQgNDMuNjgyIDIxLjQ0IDg3LjkwMSAzMi40MjcgMTMwLjc4IDMuNzUyIDE0Ljc0IDcuNTAzIDI5LjQ3OSAxMS41MjQgNDQuNDg3bDEwLjk4OCA0Mi44NzkgNDIuODc5LTEwLjk4OGMzLjc1Mi0xLjA3MSA3LjUwMy0yLjE0NCAxMC45ODgtMy40ODR2MzExLjY3NmgtMTg1Ljk4N3YxODUuOTg3aC0zOTcuOTd2LTcyMS43MDVoNDczLjI3NWMtMC4yNjggNi40MzIgMC4yNjggMTIuODY0IDEuNjA4IDE5LjU2NHpNMjA3LjM1MiA3NDEuNTg4aDE3Ny45NDd2LTQ0LjQ4N2gtMTc3Ljk0N3Y0NC40ODd6TTQ0Ni4xMzQgMzk3LjIxN2gtMjM4Ljc4MnY0NC40ODdoMjM4Ljc4MnYtNDQuNDg3ek01NjkuOTQ2IDQ5MC4yMTFoLTM2Mi41OTV2NDQuNDg3aDM2Mi41OTV2LTQ0LjQ4N3pNNTY5Ljk0NiA1ODMuMjA0aC0zNjIuNTk1djQ0LjQ4N2gzNjIuNTk1di00NC40ODd6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGY7IiBnbHlwaC1uYW1lPSJyZXBvcnRpY29uLXYyLWZ1bGwiIGRhdGEtdGFncz0icmVwb3J0IGljb24tdjItZnVsbCIgaG9yaXotYWR2LXg9Ijk3OSIgZD0iTTc0OC40NzcgOTQyLjEzOXYtMTMwLjk3N2MwLTUuOTUzIDUuOTUzLTUuOTUzIDUuOTUzLTUuOTUzaDEzMC45NzdjNS45NTMgMCAxMS45MDcgMTEuOTA3IDUuOTUzIDExLjkwN2wtMTMwLjk3NyAxMzAuOTc3Yy01Ljk1MyA1Ljk1My0xMS45MDcgMC0xMS45MDctNS45NTN6TTkwMy4yNjctNjRoLTgyNy41MzVjLTUuOTUzIDAtNS45NTMgNS45NTMtNS45NTMgNS45NTN2MTAxMi4wOTNjMCA1Ljk1MyA1Ljk1MyA1Ljk1MyA1Ljk1MyA1Ljk1M2g1NzcuNDg4YzUuOTUzIDAgNS45NTMtNS45NTMgNS45NTMtNS45NTN2LTIzMi4xODZjMC01Ljk1MyA1Ljk1My01Ljk1MyA1Ljk1My01Ljk1M2gyMzguMTRjNS45NTMgMCA1Ljk1My01Ljk1MyA1Ljk1My01Ljk1M3YtNzYyLjA0NmMwLTExLjkwNyAwLTExLjkwNy01Ljk1My0xMS45MDd6TTEzNS4yNjctNC40NjVoNzA4LjQ2NWM1Ljk1MyAwIDUuOTUzIDUuOTUzIDUuOTUzIDUuOTUzdjY0Mi45NzdjMCA1Ljk1My01Ljk1MyA1Ljk1My01Ljk1MyA1Ljk1M2gtMjMyLjE4NmMtNS45NTMgMC01Ljk1MyA1Ljk1My01Ljk1MyA1Ljk1M3YyMzguMTRjMCA1Ljk1My01Ljk1MyA1Ljk1My01Ljk1MyA1Ljk1M2gtNDY0LjM3MmMtNS45NTMgNS45NTMtMTEuOTA3IDAtMTEuOTA3LTUuOTUzdi04OTMuMDIzYzAtNS45NTMgNS45NTMtNS45NTMgMTEuOTA3LTUuOTUzek0yNDIuNDMgNjM4LjUxMmgyMzguMTR2LTU5LjUzNWgtMjM4LjE0djU5LjUzNXpNMjQyLjQzIDQ4OS42NzRoNDg4LjE4NnYtNTkuNTM1aC00ODguMTg2djU5LjUzNXpNMjQyLjQzIDIzOS42MjhoMzIxLjQ4OHYtNTkuNTM1aC0zMjEuNDg4djU5LjUzNXpNMjQyLjQzIDM2NC42NTFoNDg4LjE4NnYtNTkuNTM1aC00ODguMTg2djU5LjUzNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxMDsiIGdseXBoLW5hbWU9InN1Y2Nlc3MiIGRhdGEtdGFncz0ic3VjY2VzcyIgZD0iTTQzMy45NDMgMzQ0LjgwNmwtMTA4LjQ4NiAxMDguNDg2LTM3LjA0NC0zNy4wNDQgMTQ1LjUzLTE0NC4yMDcgMzEwLjkwNCAzMTAuOTA0LTM3LjA0NCAzNy4wNDR6TTUxMiA5NjBjLTI4MS43OTggMC01MTItMjMwLjIwMi01MTItNTEyczIzMC4yMDItNTEyIDUxMi01MTJjMjgxLjc5OCAwIDUxMiAyMzAuMjAyIDUxMiA1MTJzLTIyOC44NzkgNTEyLTUxMiA1MTJ6TTUxMi0yNC4zMWMtMjYwLjYzIDAtNDcyLjMxIDIxMS42OC00NzIuMzEgNDcyLjMxczIxMS42OCA0NzIuMzEgNDcyLjMxIDQ3Mi4zMSA0NzIuMzEtMjExLjY4IDQ3Mi4zMS00NzIuMzEtMjExLjY4LTQ3Mi4zMS00NzIuMzEtNDcyLjMxeiIgLz4NCjwvZm9udD48L2RlZnM+PC9zdmc+"

/***/ }),

/***/ "./src/fonts/h5p-interactive-book.ttf?a3wrpr":
/*!***************************************************!*\
  !*** ./src/fonts/h5p-interactive-book.ttf?a3wrpr ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,AAEAAAALAIAAAwAwT1MvMg8SBhsAAAC8AAAAYGNtYXAXVtKXAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZvjuOnsAAAF4AAAMTGhlYWQZQtf5AAANxAAAADZoaGVhB8MD1wAADfwAAAAkaG10eEnKA4MAAA4gAAAAVGxvY2EV3hi6AAAOdAAAACxtYXhwAB0BBgAADqAAAAAgbmFtZfBITmQAAA7AAAABknBvc3QAAwAAAAAQVAAAACAAAwPhAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpEAPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6RD//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAD/wAQAA8AACwAAAScJAQcJARcJATcBBABn/mf+Z2cBmf5nZwGZAZln/mcDWWf+ZwGZZ/5n/mdnAZn+Z2cBmQAAAAEAAACwA+4C4AAVAAAlATY0Jy4BIyEiBgcUFhcBHgE3PgE3Ai4BwBITCRcM/H8aJQEKCQHAETQTAQEBswHAEjYTCAokGg0YCf5AEwIRAQEBAAAAAAEA4P/AAxADrgAUAAAJASYiBw4BFREUFhcyNjcBPgEnLgEDDf5AEjYTCAokGg0YCQHAEwIRAQEB7gHAEhMJFwz8fxolAQoJAcARNBMBAQAAAgAA/8AEAAPAABQAOQAAJS4BJyYnJjQ3Njc+ATc+ARcRBiYnAS4BJy4BIyIGBw4BBw4BFRQWFx4BFx4BMzI2Nz4BNz4BNTQmJwFKKUMYGAwMDAwYGEMpKlwwMFwqAnEiXzo6gkREgjo6XyIiIyIiIl87OoJERII6Ol8iIiMjIoYYQykqLy5eLi8qKUMYGBkB/SwBGRgCOjpfIiIjIyIiXzo6gkREgjo6XyIiIyIiIl87OoJERII6AAIAAP/ABAADwAAmAEsAAAEUBgcBDgEjIiYvAS4BNTQ2PwE2MhcyMBUXAT4BFxYwFRceAQc5ATcuAScuASMiBgcOAQcOARUUFhceARceATMyNjc+ATc+ATU0JicDWAYG/pYGEAkIEAbxBgYGBj0MIwwBlwEPDCMMAT0GBwFjIl86OoJERII6Ol8iIiMiIiJfOzqCRESCOjpfIiIjIyICLAgQBv6WBgYGBvEGEAgJEAY8DQwBlgEODQEMAQE8BhAIlDpfIiIjIyIiXzo6gkREgjo6XyIiIyIiIl87OoJERII6AAAAAAIAAP/ABAADwAAoAE0AAAEeARcWFxYUBwYHDgEHBgcGIicmJy4BJyYnJjQ3Njc+ATc2NzYyFxYXBS4BJy4BIyIGBw4BBw4BFRQWFx4BFx4BMzI2Nz4BNz4BNTQmJwK2KUMYGAwMDAwYGEMpKi8uXi4vKilDGBgMDAwMGBhDKSovLl4uLyoBBSJfOjqCRESCOjpfIiIjIiIiXzs6gkREgjo6XyIiIyMiAvoYQykqLy5eLi8qKUMYGAwMDAwYGEMpKi8uXi4vKilDGBgMDAwMGDo6XyIiIyMiIl86OoJERII6Ol8iIiMiIiJfOzqCRESCOgAAAAADAAAAawQAAxUAAwAHAAsAADchNSE1ITUhERUhNQAEAPwABAD8AAQAa4WNhgEShYUAAAAAAQDE/8ADPAPAAAUAACUJAScJAQM8/nkBh3j+AAIAOAGIAYh4/gD+AAAAAAABAMT/wAM8A8AABQAANwkBNwkBxAGH/nl4AgD+ADgBiAGIeP4A/gAAAQAA/8AEAAPAAAkAABMXAREzEQE3CQEAWgFmgAFlW/4A/gABwFoBZfz1Awv+mlsCAP4AAAEAAP/ABAADwAAkAAABLgEnLgEjIgYHDgEHDgEVFBYXHgEXHgE3MjY3PgE3PgEnNCYnA7siXzo6gkREgjo6XyIiIyIiIl87OoJERII6Ol8iIiQBIyICwDpfIiIjIyIiXzo6gkREgjo6XyIiJAEiIiJfOzqCRESCOgAAAAAEAAD/wAQBA8EAPQCBAL8BAwAAJTQmIzEiBhUcAR0BJy4BJy4BBw4BFRQWFx4BFx4BFx4BFzMqASMqASMiBhUUFhceATM6ATM6ATMyNjU8ATUBJy4BJzQmMToBMzoBMzI2NS4BIyYiIyIGFRwBFRQWFx4BMz4BNTwBNTwBNTQ2NR4BHwEeARceATsBMjY3NiYnLgEnMQMyNjUxNCYjKgErATc+ATc2NCcuASMiBgcOAQcOAQcOAQcxPAE1PAE1NCYjIgYHDgEVHAEVHAEVFBYzFjIzATc+ATcyNDMcARUcARUUFjM+ATU2NCc0JiMqASMiBgcOARUUFhc6ATM6ATMyFjMOAQ8BDgEHDgEVMRQWFxY2Nz4BNzEEARQXFhXtEiIZERwPCQgJCi9TKh4+IgMGAwEIEAcYLRYXFgUFBhAMGjgdGzgeGRX9FnYDBgQBCBAIGC8XFRQBGQ49eTUSFQYFBRELFRUBAwUDbS5cNAoRCAEHDwgPAxExVysMGRYXGBYrGCDtEyIYERAIDgcIDwovUyoePiIDBwQVFgsQBQUGFRgxbEACGnYDBgQBARYVGhABARQRQnU3CQ4EBgUUFBIlEgsVCwMFAwMFAm4vWzQKCgkJEBsSMVcryxkWFhkVLBgg7RMiGBEBEAkOBwcQCi9TKh4+IgMHBBUWCxAFBQYVGDFsQAIadgMGBAEBFhUaEAEVEUF2NwkNBQYFARMUEiUSCxYLAgUDAwUCbi5cNAoKCQkQGxIxVyv82xUWFxTtEyIYERwQCAgJCi5UKR4/IgMGAwgPBxgtFxcVBQUFEQsbNx0bOR4ZFAEC6nYDBgQBCBAIGC8WFRUBGg09eTUSFQUFBhELFRQBAQMFAm4uXDQKEQgIDwgPAxExVysAAAIADv/QBAEDwAA+AIIAACUUFjMxMjY1PAE9ARceARcWMjc+ATU0JicuAScuAScuAScjOgEzOgEzMjY1NCYnLgEjKgEjKgEjIgYVBhQVMQEXHgEXFDIVKgEjKgEjIgYVHgEzFjI3MjY1PAE1NCYnLgEjDgEHHAEVHAEVFAYVLgEvAS4BJy4BKwEiBgcGFhceARcxAiQUFxYV7RIiGREcDwkICQovUyoePiIDBgMBCBAHGC0WFxYFBQYQDBo4HRs4HhkUAf6idgMGBAEIEAgYLxcVFAEaDT15NRIVBQUGEQsVFAEBAwUCbi5cNAoRCAEHDwgPAxExVyuSGRUWGBYsFyDtEiIZERAIDgcIEAovUykePyIDBgQVFgsQBQYFFRgwbEECLHUDBwQBARYVGhABARQSQXY3CA4FBQYBFBMTJBILFgsCBQMDBANtL1s0CwkJCRAbEjFXKwAAAQBm/8ADmgPAAC8AAAE1CQE1MhceARcWFRQHDgEHBiMiJy4BJyY1IxQXHgEXFjMyNz4BNzY1NCcuAScmIwIA/wABAEA3OFQYGBgYVDg3QEA3OFQYGGchIG9LSlVVSktvICEhIG9LSlUC883/AP8AzRgZUzg4P0A4OFMYGRkYUzg4QFVLSnAgICAgcEpLVVRLS28gIAAAAAAHAGH/wAOIA8AAAgA7AFEAVgBaAF4AYgAAARUzExYXHgEVFAcOAScuAScmNDU0NicuAScOAQcGFhceARc+ATcuATU0Njc+ATc2JicuAScuAScVHgEXAzU+ATc+AT8BFx4BFxEjNSERITQ2NwEzFSM1EyM1MzchNSE1ITUhAht4ewgIBwkIBxcUFhgFAQEBARQTDBYKAgUDG0oGKUsnBQsMBQMJAxQbNgoVDRkbEBUVCdIHEQgDBgMLKwIGA7r+cgHZAQH+k7Ky7+/vfP6VAWv+lQFrA6p3/uAUJydXJycTERYBARkUBw8HFy0XERgFLFcrCBIIRoNOBw0HGi8XGDAYEyYTZphaESIMGhcKVQ8qGP7vASBCIAsXCysLAQIBATi6/S4FCgUB5C0t/qctMC0wLQAAAAcARv/AA40DwAAMACUAPgBCAEYASgBOAAABFRQWMTMyNiMnJgYVEyEiJjERNDYxITIWMRUUFjEzMhYxERQGIyUhMjYxETQmMSMiJjE1NCYxISYGFREUFjMTMxUjFSEVIRUhFSE1IRUhAuwGgwUGBYMECJv8xQUBBgJBBQEG7gUBAQX9AALFBAIG6AUBBv4vBAgIBGvv7wHp/hcBQv6+Aen+FwOugwQCDIMFBgX8EgYD9AUBBugFAQb9BgkDPAUCgwUBBu8EAQUGBPyCBAECgzxZPL48uTwAAAMAAP/ABAADwAAFACEAPgAAAScHFwEnAyIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJgMiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYjAbJtJZIBNyXEal1diykoKCmLXV1qal1diykoKCiLXl1qYlZWgCUlJSWAVlZiYlZWgCUlJSWAVlZiAVlsJZABNyUBVCgpi11dampdXYspKCgpi11dampdXYspKPwoJSWAVlZiYlZWgCUlJSWAVlZiYlZWgCUlAAAAAQAAAAEzMx1bCcdfDzz1AAsEAAAAAADbETAkAAAAANsRMCQAAP/ABAEDwQAAAAgAAgAAAAAAAAABAAADwP/AAAAEAQAAAAAEAQABAAAAAAAAAAAAAAAAAAAAFQQAAAAAAAAAAAAAAAIAAAAEAAAABAAAAAQAAOAEAAAABAAAAAQAAAAEAAAABAAAxAQAAMQEAAAABAAAAAQBAAAEAQAOBAAAZgP1AGED0wBGBAAAAAAAAAAACgAUAB4AQABqAJIA7gFgAdoB9AIKAh4COAJ2A8QEcAS8BVYFwgYmAAEAAAAVAQQABwAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAIAAAAAQAAAAAAAgAHALcAAQAAAAAAAwAIAIcAAQAAAAAABAAIAMwAAQAAAAAABQALAGYAAQAAAAAABgAIAJ8AAQAAAAAACgAaABgAAwABBAkAAQAQAAgAAwABBAkAAgAOAL4AAwABBAkAAwAQAI8AAwABBAkABAAQANQAAwABBAkABQAWAHEAAwABBAkABgAQAKcAAwABBAkACgA0ADJoNXAtYm9vawBoADUAcAAtAGIAbwBvAGtGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC5WZXJzaW9uIDEuMgBWAGUAcgBzAGkAbwBuACAAMQAuADJoNXAtYm9vawBoADUAcAAtAGIAbwBvAGtoNXAtYm9vawBoADUAcAAtAGIAbwBvAGtSZWd1bGFyAFIAZQBnAHUAbABhAHJoNXAtYm9vawBoADUAcAAtAGIAbwBvAGsAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

/***/ }),

/***/ "./src/fonts/h5p-interactive-book.woff?a3wrpr":
/*!****************************************************!*\
  !*** ./src/fonts/h5p-interactive-book.woff?a3wrpr ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,d09GRgABAAAAABDAAAsAAAAAEHQAAQACAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGG2NtYXAAAAFoAAAAVAAAAFQXVtKXZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAADEwAAAxM+O46e2hlYWQAAA4QAAAANgAAADYZQtf5aGhlYQAADkgAAAAkAAAAJAfDA9dobXR4AAAObAAAAFQAAABUScoDg2xvY2EAAA7AAAAALAAAACwV3hi6bWF4cAAADuwAAAAgAAAAIAAdAQZuYW1lAAAPDAAAAZIAAAGS8EhOZHBvc3QAABCgAAAAIAAAACAAAwAAAAMD4QGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6RADwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkQ//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAA/8AEAAPAAAsAAAEnCQEHCQEXCQE3AQQAZ/5n/mdnAZn+Z2cBmQGZZ/5nA1ln/mcBmWf+Z/5nZwGZ/mdnAZkAAAABAAAAsAPuAuAAFQAAJQE2NCcuASMhIgYHFBYXAR4BNz4BNwIuAcASEwkXDPx/GiUBCgkBwBE0EwEBAbMBwBI2EwgKJBoNGAn+QBMCEQEBAQAAAAABAOD/wAMQA64AFAAACQEmIgcOARURFBYXMjY3AT4BJy4BAw3+QBI2EwgKJBoNGAkBwBMCEQEBAe4BwBITCRcM/H8aJQEKCQHAETQTAQEAAAIAAP/ABAADwAAUADkAACUuAScmJyY0NzY3PgE3PgEXEQYmJwEuAScuASMiBgcOAQcOARUUFhceARceATMyNjc+ATc+ATU0JicBSilDGBgMDAwMGBhDKSpcMDBcKgJxIl86OoJERII6Ol8iIiMiIiJfOzqCRESCOjpfIiIjIyKGGEMpKi8uXi4vKilDGBgZAf0sARkYAjo6XyIiIyMiIl86OoJERII6Ol8iIiMiIiJfOzqCRESCOgACAAD/wAQAA8AAJgBLAAABFAYHAQ4BIyImLwEuATU0Nj8BNjIXMjAVFwE+ARcWMBUXHgEHOQE3LgEnLgEjIgYHDgEHDgEVFBYXHgEXHgEzMjY3PgE3PgE1NCYnA1gGBv6WBhAJCBAG8QYGBgY9DCMMAZcBDwwjDAE9BgcBYyJfOjqCRESCOjpfIiIjIiIiXzs6gkREgjo6XyIiIyMiAiwIEAb+lgYGBgbxBhAICRAGPA0MAZYBDg0BDAEBPAYQCJQ6XyIiIyMiIl86OoJERII6Ol8iIiMiIiJfOzqCRESCOgAAAAACAAD/wAQAA8AAKABNAAABHgEXFhcWFAcGBw4BBwYHBiInJicuAScmJyY0NzY3PgE3Njc2MhcWFwUuAScuASMiBgcOAQcOARUUFhceARceATMyNjc+ATc+ATU0JicCtilDGBgMDAwMGBhDKSovLl4uLyopQxgYDAwMDBgYQykqLy5eLi8qAQUiXzo6gkREgjo6XyIiIyIiIl87OoJERII6Ol8iIiMjIgL6GEMpKi8uXi4vKilDGBgMDAwMGBhDKSovLl4uLyopQxgYDAwMDBg6Ol8iIiMjIiJfOjqCRESCOjpfIiIjIiIiXzs6gkREgjoAAAAAAwAAAGsEAAMVAAMABwALAAA3ITUhNSE1IREVITUABAD8AAQA/AAEAGuFjYYBEoWFAAAAAAEAxP/AAzwDwAAFAAAlCQEnCQEDPP55AYd4/gACADgBiAGIeP4A/gAAAAAAAQDE/8ADPAPAAAUAADcJATcJAcQBh/55eAIA/gA4AYgBiHj+AP4AAAEAAP/ABAADwAAJAAATFwERMxEBNwkBAFoBZoABZVv+AP4AAcBaAWX89QML/ppbAgD+AAABAAD/wAQAA8AAJAAAAS4BJy4BIyIGBw4BBw4BFRQWFx4BFx4BNzI2Nz4BNz4BJzQmJwO7Il86OoJERII6Ol8iIiMiIiJfOzqCRESCOjpfIiIkASMiAsA6XyIiIyMiIl86OoJERII6Ol8iIiQBIiIiXzs6gkREgjoAAAAABAAA/8AEAQPBAD0AgQC/AQMAACU0JiMxIgYVHAEdAScuAScuAQcOARUUFhceARceARceARczKgEjKgEjIgYVFBYXHgEzOgEzOgEzMjY1PAE1AScuASc0JjE6ATM6ATMyNjUuASMmIiMiBhUcARUUFhceATM+ATU8ATU8ATU0NjUeAR8BHgEXHgE7ATI2NzYmJy4BJzEDMjY1MTQmIyoBKwE3PgE3NjQnLgEjIgYHDgEHDgEHDgEHMTwBNTwBNTQmIyIGBw4BFRwBFRwBFRQWMxYyMwE3PgE3MjQzHAEVHAEVFBYzPgE1NjQnNCYjKgEjIgYHDgEVFBYXOgEzOgEzMhYzDgEPAQ4BBw4BFTEUFhcWNjc+ATcxBAEUFxYV7RIiGREcDwkICQovUyoePiIDBgMBCBAHGC0WFxYFBQYQDBo4HRs4HhkV/RZ2AwYEAQgQCBgvFxUUARkOPXk1EhUGBQURCxUVAQMFA20uXDQKEQgBBw8IDwMRMVcrDBkWFxgWKxgg7RMiGBEQCA4HCA8KL1MqHj4iAwcEFRYLEAUFBhUYMWxAAhp2AwYEAQEWFRoQAQEUEUJ1NwkOBAYFFBQSJRILFQsDBQMDBQJuL1s0CgoJCRAbEjFXK8sZFhYZFSwYIO0TIhgRARAJDgcHEAovUyoePiIDBwQVFgsQBQUGFRgxbEACGnYDBgQBARYVGhABFRFBdjcJDQUGBQETFBIlEgsWCwIFAwMFAm4uXDQKCgkJEBsSMVcr/NsVFhcU7RMiGBEcEAgICQouVCkePyIDBgMIDwcYLRcXFQUFBRELGzcdGzkeGRQBAup2AwYEAQgQCBgvFhUVARoNPXk1EhUFBQYRCxUUAQEDBQJuLlw0ChEICA8IDwMRMVcrAAACAA7/0AQBA8AAPgCCAAAlFBYzMTI2NTwBPQEXHgEXFjI3PgE1NCYnLgEnLgEnLgEnIzoBMzoBMzI2NTQmJy4BIyoBIyoBIyIGFQYUFTEBFx4BFxQyFSoBIyoBIyIGFR4BMxYyNzI2NTwBNTQmJy4BIw4BBxwBFRwBFRQGFS4BLwEuAScuASsBIgYHBhYXHgEXMQIkFBcWFe0SIhkRHA8JCAkKL1MqHj4iAwYDAQgQBxgtFhcWBQUGEAwaOB0bOB4ZFAH+onYDBgQBCBAIGC8XFRQBGg09eTUSFQUFBhELFRQBAQMFAm4uXDQKEQgBBw8IDwMRMVcrkhkVFhgWLBcg7RIiGREQCA4HCBAKL1MpHj8iAwYEFRYLEAUGBRUYMGxBAix1AwcEAQEWFRoQAQEUEkF2NwgOBQUGARQTEyQSCxYLAgUDAwQDbS9bNAsJCQkQGxIxVysAAAEAZv/AA5oDwAAvAAABNQkBNTIXHgEXFhUUBw4BBwYjIicuAScmNSMUFx4BFxYzMjc+ATc2NTQnLgEnJiMCAP8AAQBANzhUGBgYGFQ4N0BANzhUGBhnISBvS0pVVUpLbyAhISBvS0pVAvPN/wD/AM0YGVM4OD9AODhTGBkZGFM4OEBVS0pwICAgIHBKS1VUS0tvICAAAAAABwBh/8ADiAPAAAIAOwBRAFYAWgBeAGIAAAEVMxMWFx4BFRQHDgEnLgEnJjQ1NDYnLgEnDgEHBhYXHgEXPgE3LgE1NDY3PgE3NiYnLgEnLgEnFR4BFwM1PgE3PgE/ARceARcRIzUhESE0NjcBMxUjNRMjNTM3ITUhNSE1IQIbeHsICAcJCAcXFBYYBQEBAQEUEwwWCgIFAxtKBilLJwULDAUDCQMUGzYKFQ0ZGxAVFQnSBxEIAwYDCysCBgO6/nIB2QEB/pOysu/v73z+lQFr/pUBawOqd/7gFCcnVycnExEWAQEZFAcPBxctFxEYBSxXKwgSCEaDTgcNBxovFxgwGBMmE2aYWhEiDBoXClUPKhj+7wEgQiALFwsrCwECAQE4uv0uBQoFAeQtLf6nLTAtMC0AAAAHAEb/wAONA8AADAAlAD4AQgBGAEoATgAAARUUFjEzMjYjJyYGFRMhIiYxETQ2MSEyFjEVFBYxMzIWMREUBiMlITI2MRE0JjEjIiYxNTQmMSEmBhURFBYzEzMVIxUhFSEVIRUhNSEVIQLsBoMFBgWDBAib/MUFAQYCQQUBBu4FAQEF/QACxQQCBugFAQb+LwQICARr7+8B6f4XAUL+vgHp/hcDroMEAgyDBQYF/BIGA/QFAQboBQEG/QYJAzwFAoMFAQbvBAEFBgT8ggQBAoM8WTy+PLk8AAADAAD/wAQAA8AABQAhAD4AAAEnBxcBJwMiBw4BBwYVFBceARcWMzI3PgE3NjU0Jy4BJyYDIicuAScmNTQ3PgE3NjMyFx4BFxYVFAcOAQcGIwGybSWSATclxGpdXYspKCgpi11dampdXYspKCgoi15damJWVoAlJSUlgFZWYmJWVoAlJSUlgFZWYgFZbCWQATclAVQoKYtdXWpqXV2LKSgoKYtdXWpqXV2LKSj8KCUlgFZWYmJWVoAlJSUlgFZWYmJWVoAlJQAAAAEAAAABMzMdWwnHXw889QALBAAAAAAA2xEwJAAAAADbETAkAAD/wAQBA8EAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAEAAAAABAEAAQAAAAAAAAAAAAAAAAAAABUEAAAAAAAAAAAAAAACAAAABAAAAAQAAAAEAADgBAAAAAQAAAAEAAAABAAAAAQAAMQEAADEBAAAAAQAAAAEAQAABAEADgQAAGYD9QBhA9MARgQAAAAAAAAAAAoAFAAeAEAAagCSAO4BYAHaAfQCCgIeAjgCdgPEBHAEvAVWBcIGJgABAAAAFQEEAAcAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEACAAAAAEAAAAAAAIABwC3AAEAAAAAAAMACACHAAEAAAAAAAQACADMAAEAAAAAAAUACwBmAAEAAAAAAAYACACfAAEAAAAAAAoAGgAYAAMAAQQJAAEAEAAIAAMAAQQJAAIADgC+AAMAAQQJAAMAEACPAAMAAQQJAAQAEADUAAMAAQQJAAUAFgBxAAMAAQQJAAYAEACnAAMAAQQJAAoANAAyaDVwLWJvb2sAaAA1AHAALQBiAG8AbwBrRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuVmVyc2lvbiAxLjIAVgBlAHIAcwBpAG8AbgAgADEALgAyaDVwLWJvb2sAaAA1AHAALQBiAG8AbwBraDVwLWJvb2sAaAA1AHAALQBiAG8AbwBrUmVndWxhcgBSAGUAZwB1AGwAYQByaDVwLWJvb2sAaAA1AHAALQBiAG8AbwBrAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="

/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InteractiveBook; });
/* harmony import */ var _urltools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urltools */ "./src/scripts/urltools.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/scripts/sidebar.js");
/* harmony import */ var _statusbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statusbar */ "./src/scripts/statusbar.js");
/* harmony import */ var _cover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover */ "./src/scripts/cover.js");
/* harmony import */ var _pagecontent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagecontent */ "./src/scripts/pagecontent.js");
/* harmony import */ var element_scroll_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! element-scroll-polyfill */ "./node_modules/element-scroll-polyfill/index.js");
/* harmony import */ var element_scroll_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(element_scroll_polyfill__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var InteractiveBook =
/*#__PURE__*/
function (_H5P$EventDispatcher) {
  _inherits(InteractiveBook, _H5P$EventDispatcher);

  /**
   * @constructor
   *
   * @param {object} config
   * @param {string} contentId
   * @param {object} contentData
   */
  function InteractiveBook(config, contentId) {
    var _this;

    var contentData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, InteractiveBook);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InteractiveBook).call(this));

    var self = _assertThisInitialized(_assertThisInitialized(_this));

    _this.contentId = contentId;
    _this.activeChapter = 0;
    _this.newHandler = {};
    _this.completed = false;
    _this.params = InteractiveBook.sanitizeConfig(config);
    _this.l10n = _this.params.l10n;
    _this.params.behaviour = _this.params.behaviour || {};
    _this.mainWrapper = null;
    _this.currentRatio = null;
    _this.smallSurface = 'h5p-interactive-book-small';
    _this.mediumSurface = 'h5p-interactive-book-medium';
    _this.largeSurface = 'h5p-interactive-book-large';
    _this.chapters = [];
    /*
     * this.params.behaviour.enableSolutionsButton and this.params.behaviour.enableRetry
     * are used by H5P's question type contract.
     * @see {@link https://h5p.org/documentation/developers/contracts#guides-header-8}
     * @see {@link https://h5p.org/documentation/developers/contracts#guides-header-9}
     */

    _this.params.behaviour.enableSolutionsButton = false;
    _this.params.behaviour.enableRetry = false;
    /**
     * Check if result has been submitted or input has been given.
     *
     * @return {boolean} True, if answer was given.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-1}
     */

    _this.getAnswerGiven = function () {
      return _this.chapters.reduce(function (accu, current) {
        if (typeof current.instance.getAnswerGiven === 'function') {
          return accu && current.instance.getAnswerGiven();
        }

        return accu;
      }, true);
    };
    /**
     * Get latest score.
     *
     * @return {number} Latest score.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-2}
     */


    _this.getScore = function () {
      return _this.chapters.reduce(function (accu, current) {
        if (typeof current.instance.getScore === 'function') {
          return accu + current.instance.getScore();
        }

        return accu;
      }, 0);
    };
    /**
     * Get maximum possible score.
     *
     * @return {number} Score necessary for mastering.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-3}
     */


    _this.getMaxScore = function () {
      return _this.chapters.reduce(function (accu, current) {
        if (typeof current.instance.getMaxScore === 'function') {
          return accu + current.instance.getMaxScore();
        }

        return accu;
      }, 0);
    };
    /**
     * Show solutions.
     *
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-4}
     */


    _this.showSolutions = function () {
      _this.chapters.forEach(function (chapter) {
        if (typeof chapter.instance.toggleReadSpeaker === 'function') {
          chapter.instance.toggleReadSpeaker(true);
        }

        if (typeof chapter.instance.showSolutions === 'function') {
          chapter.instance.showSolutions();
        }

        if (typeof chapter.instance.toggleReadSpeaker === 'function') {
          chapter.instance.toggleReadSpeaker(false);
        }
      });
    };
    /**
     * Reset task.
     *
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-5}
     */


    _this.resetTask = function () {
      if (_this.hasValidChapters()) {
        _this.chapters.forEach(function (chapter, index) {
          if (!chapter.isInitialized || chapter.isSummary) {
            return;
          }

          if (typeof chapter.instance.resetTask === 'function') {
            chapter.instance.resetTask();
          }

          chapter.tasksLeft = chapter.maxTasks;
          chapter.sections.forEach(function (section) {
            return section.taskDone = false;
          });

          _this.setChapterRead(index, false);
        });

        _this.pageContent.resetChapters();

        _this.sideBar.resetIndicators();

        _this.trigger('newChapter', {
          h5pbookid: _this.contentId,
          chapter: _this.pageContent.columnNodes[0].id,
          section: "top"
        });

        if (_this.hasCover()) {
          _this.displayCover(_this.mainWrapper);
        }
      }
    };
    /**
     * Get xAPI data.
     *
     * @return {object} xAPI statement.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
     */


    _this.getXAPIData = function () {
      var xAPIEvent = _this.createXAPIEventTemplate('answered');

      _this.addQuestionToXAPI(xAPIEvent);

      xAPIEvent.setScoredResult(_this.getScore(), _this.getMaxScore(), _assertThisInitialized(_assertThisInitialized(_this)), true, _this.getScore() === _this.getMaxScore());
      return {
        statement: xAPIEvent.data.statement,
        children: _this.getXAPIDataFromChildren(_this.chapters.map(function (chapter) {
          return chapter.instance;
        }))
      };
    };
    /**
     * Get xAPI data from sub content types.
     *
     * @param {object[]} instances H5P instances.
     * @return {object[]} xAPI data objects used to build a report.
     */


    _this.getXAPIDataFromChildren = function (instances) {
      return instances.map(function (instance) {
        if (typeof instance.getXAPIData === 'function') {
          return instance.getXAPIData();
        }
      }).filter(function (data) {
        return !!data;
      });
    };
    /**
     * Add question itself to the definition part of an xAPIEvent.
     *
     * @param {H5P.XAPIEvent} xAPIEvent.
     */


    _this.addQuestionToXAPI = function (xAPIEvent) {
      var definition = xAPIEvent.getVerifiedStatementValue(['object', 'definition']);

      _extends(definition, _this.getxAPIDefinition());
    };
    /**
     * Generate xAPI object definition used in xAPI statements.
     *
     * @return {object} xAPI definition.
     */


    _this.getxAPIDefinition = function () {
      return {
        interactionType: 'compound',
        type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
        description: {
          'en-US': ''
        }
      };
    };
    /**
     * Check if there's a cover.
     *
     * @return {boolean} True, if there's a cover.
     */


    _this.hasCover = function () {
      return _this.cover && _this.cover.container;
    };
    /**
     * Check if the configs are set to use summary
     * @param chapters
     * @return {*|boolean}
     */


    _this.hasSummary = function () {
      var chapters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.chapters;
      return _this.hasChaptersTasks(chapters) && _this.params.behaviour.displaySummary && _this.params.behaviour.displaySummary === true;
    };
    /**
     * Check if chapters has tasks
     *
     * @param {Array} chapters
     * @return {boolean}
     */


    _this.hasChaptersTasks = function (chapters) {
      return chapters.filter(function (chapter) {
        return chapter.sections.filter(function (section) {
          return section.isTask === true;
        }).length > 0;
      }).length > 0;
    };
    /**
     * Check if there are valid chapters.
     *
     * @return {boolean} True, if there are valid(not empty) chapters.
     */


    _this.hasValidChapters = function () {
      return _this.params.chapters.length > 0;
    };
    /**
     * Get number of active chapter.
     *
     * @return {number} Number of active chapter.
     */


    _this.getActiveChapter = function () {
      var getActualChapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return !getActualChapter ? _this.activeChapter : _this.chapters[_this.activeChapter];
    };
    /**
     * Set number of active chapter.
     *
     * @param {number} chapterId Number of active chapter.
     */


    _this.setActiveChapter = function (chapterId) {
      chapterId = parseInt(chapterId);

      if (!isNaN(chapterId)) {
        _this.activeChapter = chapterId;
      }
    };
    /**
     * Validate fragments.
     *
     * @param {object} fragments Fragments object from URL.
     * @return {boolean} True, if fragments are valid.
     */


    _this.validateFragments = function (fragments) {
      return fragments.chapter !== undefined && String(fragments.h5pbookid) === String(self.contentId);
    };
    /**
     * Bubble events from child to parent
     *
     * @param {object} origin Origin of the Event
     * @param {string} eventName Name of the Event
     * @param {object} target Target to trigger event on
     */


    _this.bubbleUp = function (origin, eventName, target) {
      origin.on(eventName, function (event) {
        // Prevent target from sending event back down
        target.bubblingUpwards = true; // Trigger event

        target.trigger(eventName, event); // Reset

        target.bubblingUpwards = false;
      });
    };
    /**
     * Check if menu is open
     * @return {boolean}
     */


    _this.isMenuOpen = function () {
      return _this.statusBarHeader.isMenuOpen();
    };
    /**
     * Detect if wrapper is a small surface
     * @return {*}
     */


    _this.isSmallSurface = function () {
      return _this.mainWrapper && _this.mainWrapper.hasClass(_this.smallSurface);
    };
    /**
     * Get the ratio of the wrapper
     *
     * @return {number}
     */


    _this.getRatio = function () {
      return _this.mainWrapper.width() / parseFloat(_this.mainWrapper.css('font-size'));
    };
    /**
     * Add/remove classname based on the ratio
     * @param {jQuery} wrapper
     * @param {number} ratio
     */


    _this.setWrapperClassFromRatio = function (wrapper) {
      var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.getRatio();

      if (ratio === _this.currentRatio) {
        return;
      }

      _this.breakpoints().forEach(function (item) {
        if (item.shouldAdd(ratio)) {
          _this.mainWrapper.addClass(item.className);
        } else {
          _this.mainWrapper.removeClass(item.className);
        }
      });

      _this.currentRatio = ratio;
    };
    /**
     * Handle resizing of the content
     */


    _this.resize = function () {
      if (!_this.pageContent || !_this.hasValidChapters() || !_this.mainWrapper) {
        return;
      }

      _this.setWrapperClassFromRatio(_this.mainWrapper);

      var currentChapterId = _this.getActiveChapter();

      var currentNode = _this.pageContent.columnNodes[currentChapterId]; // Only resize the visible column

      if (currentNode.offsetParent !== null) {
        // Prevent re-resizing if called by instance
        if (!_this.bubblingUpwards) {
          _this.pageContent.chapters[currentChapterId].instance.trigger('resize');
        } // Resize if necessary and not animating


        if (_this.pageContent.content.style.height !== "".concat(currentNode.offsetHeight, "px") && !currentNode.classList.contains('h5p-interactive-book-animate')) {
          _this.pageContent.content.style.height = "".concat(currentNode.offsetHeight, "px");

          _this.pageContent.updateFooter(); // Add some slack time before resizing again.


          setTimeout(function () {
            _this.trigger('resize');
          }, 10);
        }
      }
    };
    /*
     * Establish all triggers
     */


    _this.on('resize', _this.resize, _assertThisInitialized(_assertThisInitialized(_this)));

    _this.on('toggleMenu', function () {
      _this.pageContent.toggleNavigationMenu(); // Update the menu button


      _this.statusBarHeader.menuToggleButton.setAttribute('aria-expanded', _this.statusBarHeader.menuToggleButton.classList.toggle('h5p-interactive-book-status-menu-active') ? 'true' : 'false'); // We need to resize the whole book since the interactions are getting
      // more width and those with a static ratio will increase their height.


      setTimeout(function () {
        _this.trigger('resize');
      }, 150);
    });

    _this.on('scrollToTop', function () {
      if (H5P.isFullscreen === true) {
        var container = _this.pageContent.container;
        container.scrollBy(0, -container.scrollHeight);
      } else {
        _this.statusBarHeader.wrapper.scrollIntoView(true);
      }
    });

    _this.on('newChapter', function (event) {
      if (_this.pageContent.columnNodes[_this.getActiveChapter()].classList.contains('h5p-interactive-book-animate')) {
        return;
      }

      _this.newHandler = event.data; // Create the new hash

      event.data.newHash = _urltools__WEBPACK_IMPORTED_MODULE_0__["default"].createFragmentsString(_this.newHandler); // Assert that the module itself is asking for a redirect

      _this.newHandler.redirectFromComponent = true;

      if (_this.getChapterId(event.data.chapter) === _this.activeChapter) {
        var fragmentsEqual = _urltools__WEBPACK_IMPORTED_MODULE_0__["default"].areFragmentsEqual(event.data, _urltools__WEBPACK_IMPORTED_MODULE_0__["default"].extractFragmentsFromURL(_this.validateFragments, _this.hashWindow), ['h5pbookid', 'chapter', 'section', 'headerNumber']);

        if (fragmentsEqual) {
          // only trigger section redirect without changing hash
          _this.pageContent.changeChapter(false, event.data);

          return;
        }
      }
      /*
       * Set final chapter read on entering automatically if it doesn't
       * contain tasks and if all other chapters have been completed
       */


      if (_this.params.behaviour.progressAuto) {
        var id = _this.getChapterId(_this.newHandler.chapter);

        if (_this.isFinalChapterWithoutTask(id)) {
          _this.setChapterRead(id);
        }
      }

      H5P.trigger(_assertThisInitialized(_assertThisInitialized(_this)), 'changeHash', event.data);
      H5P.trigger(_assertThisInitialized(_assertThisInitialized(_this)), 'scrollToTop');
    });
    /**
     * Check if the current chapter is read.
     *
     * @returns {boolean} True, if current chapter was read.
     */


    _this.isCurrentChapterRead = function () {
      return _this.isChapterRead(_this.chapters[_this.activeChapter], _this.params.behaviour.progressAuto);
    };
    /**
     * Checks if a chapter is read
     *
     * @param chapter
     * @param {boolean} autoProgress
     * @returns {boolean}
     */


    _this.isChapterRead = function (chapter) {
      var autoProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.params.behaviour.progressAuto;
      return chapter.isInitialized && (chapter.completed || autoProgress && chapter.tasksLeft === 0);
    };
    /**
     * Check if chapter is final one, has no tasks and all other chapters are done.
     *
     * @param {number} chapterId Chapter id.
     * @return {boolean} True, if final chapter without tasks and other chapters done.
     */


    _this.isFinalChapterWithoutTask = function (chapterId) {
      return _this.chapters[chapterId].maxTasks === 0 && _this.chapters.slice(0, chapterId).concat(_this.chapters.slice(chapterId + 1)).every(function (chapter) {
        return chapter.tasksLeft === 0;
      });
    };
    /**
     * Set the current chapter as completed.
     *
     * @param {number} [chapterId] Chapter Id, defaults to current chapter.
     * @param {boolean} [read=true] True for chapter read, false for not read.
     */


    _this.setChapterRead = function () {
      var chapterId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.activeChapter;
      var read = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.handleChapterCompletion(chapterId, read);

      _this.sideBar.updateChapterProgressIndicator(chapterId, read ? 'DONE' : _this.hasChapterStartedTasks(_this.chapters[chapterId]) ? 'STARTED' : 'BLANK');
    };
    /**
     * Checks if chapter has started on any of the sections
     *
     * @param chapter
     * @return {boolean}
     */


    _this.hasChapterStartedTasks = function (chapter) {
      return chapter.sections.filter(function (section) {
        return section.taskDone;
      }).length > 0;
    };
    /**
     * Get textual status for chapter
     *
     * @param chapter
     * @param {boolean} progressAuto
     * @return {string}
     */


    _this.getChapterStatus = function (chapter) {
      var progressAuto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.params.behaviour.progressAuto;
      var status = 'BLANK';

      if (_this.isChapterRead(chapter, progressAuto)) {
        status = "DONE";
      } else if (_this.hasChapterStartedTasks(chapter)) {
        status = 'STARTED';
      }

      return status;
    };
    /**
     * Update statistics on the main chapter.
     *
     * @param {number} chapterId Chapter Id.
     * @param {boolean} hasChangedChapter
     */


    _this.updateChapterProgress = function (chapterId) {
      var hasChangedChapter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!_this.params.behaviour.progressIndicators) {
        return;
      }

      var chapter = _this.chapters[chapterId];
      var status;

      if (chapter.maxTasks) {
        status = _this.getChapterStatus(chapter);
      } else {
        if (_this.isChapterRead(chapter) && hasChangedChapter) {
          status = 'DONE';
        } else {
          status = 'BLANK';
        }
      }

      if (status === 'DONE') {
        _this.handleChapterCompletion(chapterId);
      }

      _this.sideBar.updateChapterProgressIndicator(chapterId, status);

      var lockedPage = _this.params.chapters.find(function (chapter) {
        return chapter.hasOwnProperty('lockPage') && chapter.lockPage === true ? true : false;
      });

      if (lockedPage !== undefined) {
        _this.sequentialLogic(chapterId, status);
      }
    };
    /**
     * perform sequential logic on chapter progress.
     *
     * @param {number} chapterId Chapter Id.
     * @param {string} status Status.
     */


    _this.sequentialLogic = function (chapterId, status) {
      var chapterLastIndex = _this.params.chapters.length - 1;

      if (chapterId === chapterLastIndex && status === 'DONE') {
        //if it is a summary
        _this.sideBar.updateSequentialLogicIndicator(chapterId + 1, status, true);
      } else if (chapterId > -1 && chapterId < chapterLastIndex && status === 'DONE') {
        // unlock next chapter / page after current 
        _this.sideBar.updateSequentialLogicIndicator(chapterId + 1, status);
      }
    };
    /**
     * Get id of chapter.
     *
     * @param {string} chapterUUID ChapterUUID.
     * @return {number} Chapter Id.
     */


    _this.getChapterId = function (chapterUUID) {
      chapterUUID = chapterUUID.replace('h5p-interactive-book-chapter-', '');
      return _this.chapters.map(function (chapter) {
        return chapter.instance.subContentId;
      }).indexOf(chapterUUID);
    };
    /**
     * Handle chapter completion, e.g. trigger xAPI statements
     *
     * @param {number} chapterId Id of the chapter that was completed.
     * @param {boolean} [completed=true] True for completed, false for uncompleted.
     */


    _this.handleChapterCompletion = function (chapterId) {
      var completed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var chapter = _this.chapters[chapterId];

      if (chapter.isSummary === true) {
        return;
      }

      if (!completed) {
        // Reset chapter and book completion.
        chapter.completed = false;
        _this.completed = false;

        _this.trigger('bookCompleted', {
          completed: _this.completed
        });

        return;
      } // New chapter completed


      if (!chapter.completed) {
        chapter.completed = true; //chapter.instance.triggerXAPIScored(chapter.instance.getScore(), chapter.instance.getMaxScore(), 'completed');
      } // All chapters completed


      if (!_this.completed && _this.chapters.filter(function (chapter) {
        return !chapter.isSummary;
      }).every(function (chapter) {
        return chapter.completed;
      })) {
        _this.completed = true;

        _this.trigger('bookCompleted', {
          completed: _this.completed
        });
      }
    };
    /**
     * Check if the content height exceeds the window.
     */


    _this.shouldFooterBeHidden = function () {
      // Always show except for in fullscreen
      // Ideally we'd check on the top window size but we can't always get it.
      return _this.isFullscreen;
    };
    /**
     * Get content container width.
     * @return {number} Container width or 0.
     */


    _this.getContainerWidth = function () {
      return _this.pageContent && _this.pageContent.container ? _this.pageContent.container.offsetWidth : 0;
    };
    /**
     * Change the current active chapter.
     *
     * @param {boolean} redirectOnLoad Is this a redirect which happens immediately?
     */


    _this.changeChapter = function (redirectOnLoad) {
      _this.pageContent.changeChapter(redirectOnLoad, _this.newHandler);

      _this.statusBarHeader.updateStatusBar();

      _this.statusBarFooter.updateStatusBar();

      _this.newHandler.redirectFromComponent = false;
    };
    /**
     * Get list of classname and conditions for when to add the classname to the content type
     *
     * @return {[{className: string, shouldAdd: (function(*): boolean)}, {className: string, shouldAdd: (function(*): boolean|boolean)}, {className: string, shouldAdd: (function(*): boolean)}]}
     */


    _this.breakpoints = function () {
      return [{
        "className": _this.smallSurface,
        "shouldAdd": function shouldAdd(ratio) {
          return ratio < 43;
        }
      }, {
        "className": _this.mediumSurface,
        "shouldAdd": function shouldAdd(ratio) {
          return ratio >= 43 && ratio < 60;
        }
      }, {
        "className": _this.largeSurface,
        "shouldAdd": function shouldAdd(ratio) {
          return ratio >= 60;
        }
      }];
    };
    /**
     * Triggers whenever the hash changes, indicating that a chapter redirect is happening
     */


    H5P.on(_assertThisInitialized(_assertThisInitialized(_this)), 'respondChangeHash', function () {
      var payload = _urltools__WEBPACK_IMPORTED_MODULE_0__["default"].extractFragmentsFromURL(self.validateFragments, _this.hashWindow);

      if (payload.h5pbookid && String(payload.h5pbookid) === String(self.contentId)) {
        _this.redirectChapter(payload);
      }
    });
    H5P.on(_assertThisInitialized(_assertThisInitialized(_this)), 'changeHash', function (event) {
      if (String(event.data.h5pbookid) === String(_this.contentId)) {
        _this.hashWindow.location.hash = event.data.newHash;
      }
    });
    H5P.externalDispatcher.on('xAPI', function (event) {
      var actionVerbs = ['answered', 'completed', 'interacted', 'attempted'];
      var isActionVerb = actionVerbs.indexOf(event.getVerb()) > -1; // Some content types may send xAPI events when they are initialized,
      // so check that chapter is initialized before setting any section change

      var isInitialized = self.chapters.length;

      if (self !== this && isActionVerb && isInitialized) {
        self.setSectionStatusByID(this.subContentId || this.contentData.subContentId, self.activeChapter);
      }
    });
    /**
     * Redirect chapter.
     *
     * @param {object} target Target data.
     * @param {string} target.h5pbookid Book id.
     * @param {string} target.chapter Chapter UUID.
     * @param {string} target.section Section UUID.
     */

    _this.redirectChapter = function (target) {
      /**
       * If true, we already have information regarding redirect in newHandler
       * When using browser history, a convert is neccecary
       */
      if (!_this.newHandler.redirectFromComponent) {
        // Assert that the handler actually is from this content type.
        if (target.h5pbookid && String(target.h5pbookid) === String(self.contentId)) {
          self.newHandler = target;
          /**
           * H5p-context switch on no newhash = history backwards
           * Redirect to first chapter
           */
        } else {
          self.newHandler = {
            chapter: "h5p-interactive-book-chapter-".concat(self.chapters[0].instance.subContentId),
            h5pbookid: self.h5pbookid
          };
        }
      }

      self.changeChapter(false);
    };
    /**
     * Set a section progress indicator.
     *
     * @param {string} sectionUUID UUID of target section.
     * @param {number} chapterId Number of targetchapter.
     */


    _this.setSectionStatusByID = function (sectionUUID, chapterId) {
      _this.chapters[chapterId].sections.forEach(function (section, index) {
        var sectionInstance = section.instance;
        var dealQuestionnaire = sectionInstance.libraryInfo.machineName === 'H5P.Questionnaire';

        if (sectionInstance.subContentId === sectionUUID && !section.taskDone && !dealQuestionnaire) {
          // Check if instance has given an answer
          section.taskDone = sectionInstance.getAnswerGiven ? sectionInstance.getAnswerGiven() : true;

          _this.sideBar.setSectionMarker(chapterId, index);

          if (section.taskDone) {
            _this.chapters[chapterId].tasksLeft -= 1;
          }

          _this.updateChapterProgress(chapterId);
        } else if (sectionInstance.subContentId === sectionUUID && !section.taskDone && dealQuestionnaire) {
          // this block set progress for Questionnaire when it is submitted/finished.
          var instanceState = section.instance.getCurrentState();

          if (instanceState.progress === section.instance.state.questionnaireElements.length - 1) {
            section.taskDone = true; // iteratre over "Questionnaire Set" to update the progress

            section.instance.state.questionnaireElements.forEach(function (questionnaireElement) {
              if (questionnaireElement.answered === true) {
                _this.sideBar.setSectionMarker(chapterId, index);

                if (section.taskDone) {
                  _this.chapters[chapterId].tasksLeft -= 1;
                }

                _this.updateChapterProgress(chapterId);
              }
            });
          }
        }
      });
    };
    /**
     * Add listener for hash changes to specified window
     */


    _this.addHashListener = function (hashWindow) {
      hashWindow.addEventListener('hashchange', function (event) {
        H5P.trigger(_assertThisInitialized(_assertThisInitialized(_this)), 'respondChangeHash', event);
      });
      _this.hashWindow = hashWindow;
    };

    try {
      _this.addHashListener(top);
    } catch (e) {
      if (e instanceof DOMException) {
        // Use iframe window to store book location hash
        _this.addHashListener(window);
      } else {
        throw e;
      }
    }
    /**
     * Display book cover
     *
     * @param wrapper
     */


    _this.displayCover = function (wrapper) {
      _this.hideAllElements(true);

      wrapper.append(_this.cover.container);
      wrapper.addClass('covered');
    };
    /**
     * Attach library to wrapper
     * @param {jQuery} $wrapper
     */


    _this.attach = function ($wrapper) {
      _this.mainWrapper = $wrapper; // Needed to enable scrolling in fullscreen

      $wrapper.addClass('h5p-interactive-book h5p-scrollable-fullscreen');

      if (_this.isEdge18orEarlier()) {
        $wrapper.addClass('edge-18');
      }

      _this.setWrapperClassFromRatio(_this.mainWrapper);

      if (_this.cover) {
        _this.displayCover($wrapper);
      }

      $wrapper.append(_this.statusBarHeader.wrapper);
      var first = _this.pageContent.container.firstChild;

      if (first) {
        _this.pageContent.container.insertBefore(_this.sideBar.container, first);
      }

      $wrapper.append(_this.pageContent.container);
      $wrapper.append(_this.statusBarFooter.wrapper);
      _this.$wrapper = $wrapper;

      if (_this.params.behaviour.defaultTableOfContents && !_this.isSmallSurface()) {
        _this.trigger('toggleMenu');
      }

      _this.pageContent.updateFooter();
    };
    /**
     * Checks if browser is IE Edge version 18 or earlier
     */


    _this.isEdge18orEarlier = function () {
      var ua = window.navigator.userAgent;
      var edgeIndex = ua.indexOf('Edge/');

      if (edgeIndex < 0) {
        return false;
      }

      var edgeVersion = ua.substring(edgeIndex + 5, ua.indexOf('.', edgeIndex));
      return parseInt(edgeVersion) <= 18;
    };
    /**
     * Hide all elements.
     *
     * @param {boolean} hide True to hide elements.
     */


    _this.hideAllElements = function (hide) {
      var nodes = [this.statusBarHeader.wrapper, this.statusBarFooter.wrapper, this.pageContent.container];

      if (hide) {
        nodes.forEach(function (node) {
          node.classList.add('h5p-content-hidden');
          node.classList.add('h5p-interactive-book-cover-present');
        });
      } else {
        nodes.forEach(function (node) {
          node.classList.remove('h5p-content-hidden');
          node.classList.remove('h5p-interactive-book-cover-present');
        });
      }
    }; // Initialize the support components


    if (_this.params.showCoverPage) {
      _this.cover = new _cover__WEBPACK_IMPORTED_MODULE_3__["default"](_this.params.bookCover, contentData.metadata.title, _this.l10n.read, contentId, _assertThisInitialized(_assertThisInitialized(_this)));
    }

    var childContentData = _objectSpread({}, contentData, {
      parent: _assertThisInitialized(_assertThisInitialized(_this))
    });

    _this.pageContent = new _pagecontent__WEBPACK_IMPORTED_MODULE_4__["default"](_this.params, contentId, childContentData, _assertThisInitialized(_assertThisInitialized(_this)), {
      l10n: {
        markAsFinished: _this.l10n.markAsFinished
      },
      behaviour: _this.params.behaviour
    });
    _this.chapters = _this.pageContent.getChapters();
    _this.sideBar = new _sidebar__WEBPACK_IMPORTED_MODULE_1__["default"](_this.params, contentId, contentData.metadata.title, _assertThisInitialized(_assertThisInitialized(_this)));
    _this.statusBarHeader = new _statusbar__WEBPACK_IMPORTED_MODULE_2__["default"](contentId, _this.chapters.length, _assertThisInitialized(_assertThisInitialized(_this)), {
      l10n: _this.l10n,
      a11y: _this.params.a11y,
      behaviour: _this.params.behaviour,
      displayFullScreenButton: true
    }, 'h5p-interactive-book-status-header');
    _this.statusBarFooter = new _statusbar__WEBPACK_IMPORTED_MODULE_2__["default"](contentId, _this.chapters.length, _assertThisInitialized(_assertThisInitialized(_this)), {
      l10n: _this.l10n,
      a11y: _this.params.a11y,
      behaviour: _this.params.behaviour
    }, 'h5p-interactive-book-status-footer');

    if (_this.hasCover()) {
      _this.hideAllElements(true);

      _this.on('coverRemoved', function () {
        _this.hideAllElements(false);

        _this.trigger('resize'); // This will happen also on retry, but that doesn't matter, since
        // setActivityStarted() checks if it has been run before


        _this.setActivityStarted(); // Focus header progress bar when cover is removed


        _this.statusBarHeader.progressBar.progress.focus();
      });
    } else {
      _this.setActivityStarted();
    }

    if (_this.hasValidChapters()) {
      // Kickstart the statusbar
      _this.statusBarHeader.updateStatusBar();

      _this.statusBarFooter.updateStatusBar();
    }

    return _this;
  }
  /**
   * Make sure that the config used is in a good state. This includes default values for all language strings
   *
   * @param originalConfig
   * @return {*}
   */


  _createClass(InteractiveBook, null, [{
    key: "sanitizeConfig",
    value: function sanitizeConfig(originalConfig) {
      var _originalConfig$read = originalConfig.read,
          read = _originalConfig$read === void 0 ? "Read" : _originalConfig$read,
          _originalConfig$displ = originalConfig.displayTOC,
          displayTOC = _originalConfig$displ === void 0 ? "Display &#039;Table of contents&#039;" : _originalConfig$displ,
          _originalConfig$hideT = originalConfig.hideTOC,
          hideTOC = _originalConfig$hideT === void 0 ? "Hide &#039;Table of contents&#039;" : _originalConfig$hideT,
          _originalConfig$nextP = originalConfig.nextPage,
          nextPage = _originalConfig$nextP === void 0 ? "Next page" : _originalConfig$nextP,
          _originalConfig$previ = originalConfig.previousPage,
          previousPage = _originalConfig$previ === void 0 ? "Previous page" : _originalConfig$previ,
          _originalConfig$chapt = originalConfig.chapterCompleted,
          chapterCompleted = _originalConfig$chapt === void 0 ? "Page completed!" : _originalConfig$chapt,
          _originalConfig$partC = originalConfig.partCompleted,
          partCompleted = _originalConfig$partC === void 0 ? "@pages of @total completed" : _originalConfig$partC,
          _originalConfig$incom = originalConfig.incompleteChapter,
          incompleteChapter = _originalConfig$incom === void 0 ? "Incomplete page" : _originalConfig$incom,
          _originalConfig$navig = originalConfig.navigateToTop,
          navigateToTop = _originalConfig$navig === void 0 ? "Navigate to the top" : _originalConfig$navig,
          _originalConfig$markA = originalConfig.markAsFinished,
          markAsFinished = _originalConfig$markA === void 0 ? "I have finished this page" : _originalConfig$markA,
          _originalConfig$fulls = originalConfig.fullscreen,
          fullscreen = _originalConfig$fulls === void 0 ? "Fullscreen" : _originalConfig$fulls,
          _originalConfig$exitF = originalConfig.exitFullscreen,
          exitFullscreen = _originalConfig$exitF === void 0 ? "Exit fullscreen" : _originalConfig$exitF,
          _originalConfig$bookP = originalConfig.bookProgressSubtext,
          bookProgressSubtext = _originalConfig$bookP === void 0 ? "@count of @total pages" : _originalConfig$bookP,
          _originalConfig$inter = originalConfig.interactionsProgressSubtext,
          interactionsProgressSubtext = _originalConfig$inter === void 0 ? "@count of @total interactions" : _originalConfig$inter,
          _originalConfig$submi = originalConfig.submitReport,
          submitReport = _originalConfig$submi === void 0 ? "Submit Report" : _originalConfig$submi,
          _originalConfig$resta = originalConfig.restartLabel,
          restartLabel = _originalConfig$resta === void 0 ? "Restart" : _originalConfig$resta,
          _originalConfig$summa = originalConfig.summaryHeader,
          summaryHeader = _originalConfig$summa === void 0 ? "Summary" : _originalConfig$summa,
          _originalConfig$allIn = originalConfig.allInteractions,
          allInteractions = _originalConfig$allIn === void 0 ? "All interactions" : _originalConfig$allIn,
          _originalConfig$unans = originalConfig.unansweredInteractions,
          unansweredInteractions = _originalConfig$unans === void 0 ? "Unanswered interactions" : _originalConfig$unans,
          _originalConfig$score = originalConfig.scoreText,
          scoreText = _originalConfig$score === void 0 ? "@score / @maxscore" : _originalConfig$score,
          _originalConfig$leftO = originalConfig.leftOutOfTotalCompleted,
          leftOutOfTotalCompleted = _originalConfig$leftO === void 0 ? "@left of @max interactinos completed" : _originalConfig$leftO,
          _originalConfig$noInt = originalConfig.noInteractions,
          noInteractions = _originalConfig$noInt === void 0 ? "No interactions" : _originalConfig$noInt,
          _originalConfig$score2 = originalConfig.score,
          score = _originalConfig$score2 === void 0 ? "Score" : _originalConfig$score2,
          _originalConfig$summa2 = originalConfig.summaryAndSubmit,
          summaryAndSubmit = _originalConfig$summa2 === void 0 ? "Summary & submit" : _originalConfig$summa2,
          _originalConfig$noCha = originalConfig.noChapterInteractionBoldText,
          noChapterInteractionBoldText = _originalConfig$noCha === void 0 ? "You have not interacted with any pages." : _originalConfig$noCha,
          _originalConfig$noCha2 = originalConfig.noChapterInteractionText,
          noChapterInteractionText = _originalConfig$noCha2 === void 0 ? "You have to interact with at least one page before you can see the summary." : _originalConfig$noCha2,
          _originalConfig$yourA = originalConfig.yourAnswersAreSubmittedForReview,
          yourAnswersAreSubmittedForReview = _originalConfig$yourA === void 0 ? "Your answers are submitted for review!" : _originalConfig$yourA,
          _originalConfig$bookP2 = originalConfig.bookProgress,
          bookProgress = _originalConfig$bookP2 === void 0 ? "Book progress" : _originalConfig$bookP2,
          _originalConfig$inter2 = originalConfig.interactionsProgress,
          interactionsProgress = _originalConfig$inter2 === void 0 ? "Interactions progress" : _originalConfig$inter2,
          _originalConfig$total = originalConfig.totalScoreLabel,
          totalScoreLabel = _originalConfig$total === void 0 ? 'Total score' : _originalConfig$total,
          config = _objectWithoutProperties(originalConfig, ["read", "displayTOC", "hideTOC", "nextPage", "previousPage", "chapterCompleted", "partCompleted", "incompleteChapter", "navigateToTop", "markAsFinished", "fullscreen", "exitFullscreen", "bookProgressSubtext", "interactionsProgressSubtext", "submitReport", "restartLabel", "summaryHeader", "allInteractions", "unansweredInteractions", "scoreText", "leftOutOfTotalCompleted", "noInteractions", "score", "summaryAndSubmit", "noChapterInteractionBoldText", "noChapterInteractionText", "yourAnswersAreSubmittedForReview", "bookProgress", "interactionsProgress", "totalScoreLabel"]);

      config.chapters = config.chapters.map(function (chapter) {
        if (chapter.hasOwnProperty('chapter')) {
          var chapterObj = _objectSpread({}, chapter, chapter.chapter);

          chapter = chapterObj;
          chapter.params.content = chapter.params.content.filter(function (content) {
            return content.content;
          });
        } else {
          chapter.params.content = chapter.params.content.filter(function (content) {
            return content.content;
          });
        } // original code to set chapter params
        //chapter.params.content = chapter.params.content.filter(content => content.content);


        return chapter;
      }).filter(function (chapter) {
        return chapter.params.content && chapter.params.content.length > 0;
      });
      config.behaviour.displaySummary = config.behaviour.displaySummary === undefined || config.behaviour.displaySummary;
      config.l10n = {
        read: read,
        displayTOC: displayTOC,
        hideTOC: hideTOC,
        nextPage: nextPage,
        previousPage: previousPage,
        chapterCompleted: chapterCompleted,
        partCompleted: partCompleted,
        incompleteChapter: incompleteChapter,
        navigateToTop: navigateToTop,
        markAsFinished: markAsFinished,
        fullscreen: fullscreen,
        exitFullscreen: exitFullscreen,
        bookProgressSubtext: bookProgressSubtext,
        interactionsProgressSubtext: interactionsProgressSubtext,
        submitReport: submitReport,
        restartLabel: restartLabel,
        summaryHeader: summaryHeader,
        allInteractions: allInteractions,
        unansweredInteractions: unansweredInteractions,
        scoreText: scoreText,
        leftOutOfTotalCompleted: leftOutOfTotalCompleted,
        noInteractions: noInteractions,
        score: score,
        summaryAndSubmit: summaryAndSubmit,
        noChapterInteractionBoldText: noChapterInteractionBoldText,
        noChapterInteractionText: noChapterInteractionText,
        yourAnswersAreSubmittedForReview: yourAnswersAreSubmittedForReview,
        bookProgress: bookProgress,
        interactionsProgress: interactionsProgress,
        totalScoreLabel: totalScoreLabel
      };
      return config;
    }
  }]);

  return InteractiveBook;
}(H5P.EventDispatcher);



/***/ }),

/***/ "./src/scripts/cover.js":
/*!******************************!*\
  !*** ./src/scripts/cover.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The introduction module
 * Constructor function.
 */
var Cover =
/*#__PURE__*/
function (_H5P$EventDispatcher) {
  _inherits(Cover, _H5P$EventDispatcher);

  function Cover(params, titleText, readText, contentId, parent) {
    var _this;

    _classCallCheck(this, Cover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cover).call(this));
    _this.parent = parent; // Container

    _this.container = _this.createContainer(); // Visual header

    if (params.coverImage) {
      _this.container.appendChild(_this.createVisualsElement(params, contentId));
    } else {
      _this.container.classList.add('h5p-cover-nographics');
    } // Title


    _this.container.appendChild(_this.createTitleElement(titleText)); // Description text


    if (params.coverDescription) {
      _this.container.appendChild(_this.createDescriptionElement(params.coverDescription));
    } // Read button


    _this.container.appendChild(_this.createReadButton(readText));

    return _this;
  }
  /**
   * Create the top level element.
   *
   * @return {HTMLElement} Cover.
   */


  _createClass(Cover, [{
    key: "createContainer",
    value: function createContainer() {
      var container = document.createElement('div');
      container.classList.add('h5p-interactive-book-cover');
      return container;
    }
    /**
     * Create an element which contains both the cover image and a background bar.
     *
     * @param {object} coverImage Image object.
     * @param {number} contentId Content Id.
     */

  }, {
    key: "createVisualsElement",
    value: function createVisualsElement(params, contentId) {
      if (!params || !params.coverImage) {
        return null;
      }

      var visuals = document.createElement('div');
      visuals.classList.add('h5p-interactive-book-cover-graphics');
      visuals.appendChild(this.createImage(params.coverImage.path, contentId, params.coverAltText));
      visuals.appendChild(this.createCoverBar());
      return visuals;
    }
    /**
     * Create Image.
     *
     * @param {string} path Relative image path.
     * @param {number} contentId Content id.
     * @param {string|null} altText
     */

  }, {
    key: "createImage",
    value: function createImage(path, contentId, altText) {
      var img = document.createElement('img');
      img.classList.add('h5p-interactive-book-cover-image');
      img.src = H5P.getPath(path, contentId);
      img.setAttribute('draggable', 'false');

      if (altText) {
        img.alt = altText;
      }

      return img;
    }
    /**
     * Create an element responsible for the bar behind an image.
     *
     * @return {HTMLElement} Horizontal bar in the background.
     */

  }, {
    key: "createCoverBar",
    value: function createCoverBar() {
      var coverBar = document.createElement('div');
      coverBar.classList.add('h5p-interactive-book-cover-bar');
      return coverBar;
    }
    /**
     * Create title.
     *
     * @param {string} titleText Text for title element.
     * @return {HTMLElement} Title element.
     */

  }, {
    key: "createTitleElement",
    value: function createTitleElement(titleText) {
      var title = document.createElement('p');
      title.innerHTML = titleText;
      var titleWrapper = document.createElement('div');
      titleWrapper.classList.add('h5p-interactive-book-cover-title');
      titleWrapper.appendChild(title);
      return titleWrapper;
    }
    /**
     * Create description.
     *
     * @param {string} descriptionText Text for description element.
     * @return {HTMLElement} Description element.
     */

  }, {
    key: "createDescriptionElement",
    value: function createDescriptionElement(descriptionText) {
      if (!descriptionText) {
        return null;
      }

      var descriptionElement = document.createElement('div');
      descriptionElement.classList.add('h5p-interactive-book-cover-description');
      descriptionElement.innerHTML = descriptionText;
      return descriptionElement;
    }
    /**
     * Create a button element.
     *
     * @param {string} buttonText Button text.
     * @return {HTMLElement} Read button element.
     */

  }, {
    key: "createReadButton",
    value: function createReadButton(buttonText) {
      var _this2 = this;

      var button = document.createElement('button');
      button.innerHTML = buttonText;

      button.onclick = function () {
        _this2.removeCover();
      };

      var buttonWrapper = document.createElement('div');
      buttonWrapper.classList.add('h5p-interactive-book-cover-readbutton');
      buttonWrapper.appendChild(button);
      return buttonWrapper;
    }
    /**
     * Remove cover.
     */

  }, {
    key: "removeCover",
    value: function removeCover() {
      this.container.parentElement.classList.remove('covered');
      this.container.parentElement.removeChild(this.container);
      this.hidden = true;
      this.parent.trigger('coverRemoved');
    }
  }]);

  return Cover;
}(H5P.EventDispatcher);

/* harmony default export */ __webpack_exports__["default"] = (Cover);

/***/ }),

/***/ "./src/scripts/pagecontent.js":
/*!************************************!*\
  !*** ./src/scripts/pagecontent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _urltools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urltools */ "./src/scripts/urltools.js");
/* harmony import */ var _summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary */ "./src/scripts/summary.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var PageContent =
/*#__PURE__*/
function (_H5P$EventDispatcher) {
  _inherits(PageContent, _H5P$EventDispatcher);

  /**
   * @constructor
   *
   * @param {object} config
   * @param {string} contentId
   * @param {object} contentData
   * @param {object} parent
   * @param {object} params
   */
  function PageContent(config, contentId, contentData, parent, params) {
    var _this;

    _classCallCheck(this, PageContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageContent).call(this));
    _this.parent = parent;
    _this.behaviour = config.behaviour;
    _this.params = params;
    _this.targetPage = {};
    _this.targetPage.redirectFromComponent = false;
    _this.columnNodes = [];
    _this.shouldAutoplay = [];
    _this.chapters = [];
    _this.l10n = config.l10n;

    if (parent.hasValidChapters()) {
      var startChapter = _this.createColumns(config, contentId, contentData);

      _this.preloadChapter(startChapter);
    }

    _this.content = _this.createPageContent();
    _this.container = document.createElement('div');

    _this.container.classList.add('h5p-interactive-book-main');

    _this.container.appendChild(_this.content);

    _this.parent.on('coverRemoved', function () {
      _this.handleChapterChange(_this.parent.getActiveChapter());
    });

    return _this;
  }
  /**
   * Get chapters for the page
   *
   * @param {boolean} includeSummary
   * @return {object[]} Chapters.
   */


  _createClass(PageContent, [{
    key: "getChapters",
    value: function getChapters() {
      var includeSummary = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return this.chapters.filter(function (chapter) {
        return !chapter.isSummary || chapter.isSummary && !!includeSummary;
      });
    }
    /**
     * Reset all the chapters
     */

  }, {
    key: "resetChapters",
    value: function resetChapters() {
      if (this.behaviour.progressIndicators && !this.behaviour.progressAuto) {
        this.columnNodes.forEach(function (columnNode) {
          Array.from(columnNode.querySelectorAll('.h5p-interactive-book-status-progress-marker > input[type=checkbox]')).forEach(function (element) {
            return element.checked = false;
          });
        });
      }
    }
    /**
     * Create page content.
     *
     * @return {HTMLElement} Page content.
     */

  }, {
    key: "createPageContent",
    value: function createPageContent() {
      var content = document.createElement('div');
      content.classList.add('h5p-interactive-book-content');
      this.columnNodes.forEach(function (element) {
        content.appendChild(element);
      });
      this.setChapterOrder(this.parent.getActiveChapter());
      return content;
    }
  }, {
    key: "setChapterOrder",
    value: function setChapterOrder(currentId) {
      if (currentId < 0 || currentId > this.columnNodes.length - 1) {
        return;
      }

      this.columnNodes.forEach(function (element, index) {
        element.classList.remove('h5p-interactive-book-previous');
        element.classList.remove('h5p-interactive-book-current');
        element.classList.remove('h5p-interactive-book-next');

        if (index === currentId - 1) {// element.classList.add('h5p-interactive-book-previous');
        } else if (index === currentId) {
          element.classList.add('h5p-interactive-book-current');
        } else if (index === currentId + 1) {// element.classList.add('h5p-interactive-book-next');
        }
      });
    }
    /**
     * Create page read checkbox.
     *
     * @return {HTMLElement} Checkbox for marking a chapter as read.
     */

  }, {
    key: "createChapterReadCheckbox",
    value: function createChapterReadCheckbox() {
      var _this2 = this;

      var checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');

      checkbox.onclick = function (event) {
        _this2.parent.setChapterRead(undefined, event.target.checked);
      };

      var checkText = document.createElement('p');
      checkText.innerHTML = this.params.l10n.markAsFinished;
      var wrapper = document.createElement('label');
      wrapper.classList.add('h5p-interactive-book-status-progress-marker');
      wrapper.appendChild(checkbox);
      wrapper.appendChild(checkText);
      return wrapper;
    }
    /**
     * Inject section instance UUID into DOM.
     *
     * @param {object[]} sections Sections.
     * @param {HTMLElement} columnNode Column element.
     */

  }, {
    key: "injectSectionId",
    value: function injectSectionId(sections, columnNode) {
      var columnContent = columnNode.getElementsByClassName('h5p-column-content');

      for (var i = 0; i < sections.length; i++) {
        columnContent[i].id = "h5p-interactive-book-section-".concat(sections[i].instance.subContentId);
      }
    }
    /**
     * Preload current chapter and the next one
     * @param {number} chapterIndex
     */

  }, {
    key: "preloadChapter",
    value: function preloadChapter(chapterIndex) {
      this.initializeChapter(chapterIndex);
      this.initializeChapter(chapterIndex + 1);
    }
    /**
     * Initialize chapter
     * @param {number} chapterIndex
     */

  }, {
    key: "initializeChapter",
    value: function initializeChapter(chapterIndex) {
      // Out of bound
      if (chapterIndex < 0 || chapterIndex > this.chapters.length - 1) {
        return;
      }

      var chapter = this.chapters[chapterIndex];

      if (chapter.isSummary) {
        var columnNode = this.columnNodes[chapterIndex];

        if (chapter.isInitialized) {
          chapter.instance.setChapters(this.getChapters(false));
          columnNode.innerHTML = "";
        } // Attach


        chapter.instance.addSummaryPage(H5P.jQuery(columnNode));
        chapter.isInitialized = true;
        return;
      }

      if (!chapter.isInitialized) {
        var _columnNode = this.columnNodes[chapterIndex]; // Attach

        chapter.instance.attach(H5P.jQuery(_columnNode));
        this.injectSectionId(chapter.sections, _columnNode);

        if (this.behaviour.progressIndicators && !this.behaviour.progressAuto) {
          _columnNode.appendChild(this.createChapterReadCheckbox());
        }

        chapter.isInitialized = true;
      }
    }
    /**
     * Create Column instances.
     *
     * @param {object} config Parameters.
     * @param {number} contentId Content id.
     * @param {object} contentData Content data.
     * @return {number} start chapter
     */

  }, {
    key: "createColumns",
    value: function createColumns(config, contentId, contentData) {
      var _this3 = this;

      contentData = _extends({}, contentData);
      var urlFragments = _urltools__WEBPACK_IMPORTED_MODULE_0__["default"].extractFragmentsFromURL(this.parent.validateFragments, this.parent.hashWindow);
      var chapters = [];
      this.chapters = chapters; // Go through all columns and initialise them

      var _loop = function _loop(i) {
        var columnNode = document.createElement('div');

        _this3.overrideParameters(i, config.chapters[i]);

        var instanceContentData = _objectSpread({}, contentData, {
          metadata: _objectSpread({}, contentData.metadata)
        });

        var newInstance = H5P.newRunnable(config.chapters[i], contentId, undefined, undefined, instanceContentData);

        _this3.parent.bubbleUp(newInstance, 'resize', _this3.parent);

        var chapter = {
          isInitialized: false,
          instance: newInstance,
          title: config.chapters[i].metadata.title,
          completed: false,
          tasksLeft: 0,
          isSummary: false,
          sections: newInstance.getInstances().map(function (instance, contentIndex) {
            return {
              content: config.chapters[i].params.content[contentIndex].content,
              instance: instance,
              isTask: false
            };
          })
        };
        columnNode.classList.add('h5p-interactive-book-chapter');
        columnNode.id = "h5p-interactive-book-chapter-".concat(newInstance.subContentId); // Find sections with tasks and tracks them

        chapter.sections.forEach(function (section) {
          if (H5P.Column.isTask(section.instance)) {
            section.isTask = true;

            if (_this3.behaviour.progressIndicators) {
              section.taskDone = false;
              chapter.tasksLeft += 1;
            }
          }

          var dealQuestionnaire = !section.isTask && section.instance.libraryInfo.machineName === 'H5P.Questionnaire';

          if (dealQuestionnaire) {
            section.isTask = true;
            section.content.params.questionnaireElements.forEach(function (el) {
              if (_this3.behaviour.progressIndicators) {
                section.taskDone = false;
                chapter.tasksLeft += 1;
              }
            });
          }
        });
        chapter.maxTasks = chapter.tasksLeft; // Register both the HTML-element and the H5P-element

        chapters.push(chapter);

        _this3.columnNodes.push(columnNode);
      };

      for (var i = 0; i < config.chapters.length; i++) {
        _loop(i);
      }

      if (this.parent.hasSummary(chapters)) {
        var columnNode = document.createElement('div');
        var newInstance = new _summary__WEBPACK_IMPORTED_MODULE_1__["default"](_objectSpread({}, config), this.parent, this.getChapters(false));
        this.parent.bubbleUp(newInstance, 'resize', this.parent);
        var chapter = {
          isInitialized: false,
          instance: newInstance,
          title: this.l10n.summaryHeader,
          isSummary: true,
          sections: []
        };
        columnNode.classList.add('h5p-interactive-book-chapter');
        columnNode.id = "h5p-interactive-book-chapter-summary";
        chapter.maxTasks = chapter.tasksLeft;
        chapters.push(chapter);
        this.columnNodes.push(columnNode);
      } // First chapter should be visible, except if the URL says otherwise.


      var startChapter = 0;

      if (urlFragments.chapter && urlFragments.h5pbookid == this.parent.contentId) {
        var chapterIndex = this.findChapterIndex(urlFragments.chapter);
        startChapter = chapterIndex;
        this.parent.setActiveChapter(chapterIndex);
        var headerNumber = urlFragments.headerNumber;

        if (urlFragments.section) {
          setTimeout(function () {
            _this3.redirectSection(urlFragments.section, headerNumber);

            if (_this3.parent.hasCover()) {
              _this3.parent.cover.removeCover();
            }
          }, 1000);
        }
      }

      return startChapter;
    }
    /**
     * Redirect section.
     *
     * @param {string} sectionUUID Section UUID or top.
     * @param {number} headerNumber Header index within section
     */

  }, {
    key: "redirectSection",
    value: function redirectSection(sectionUUID) {
      var headerNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (sectionUUID === 'top') {
        this.parent.trigger('scrollToTop');
      } else {
        var section = document.getElementById(sectionUUID);

        if (section) {
          if (headerNumber !== null) {
            // find header within section
            var headers = section.querySelectorAll('h2, h3');

            if (headers[headerNumber]) {
              // Set section to the header
              section = headers[headerNumber];
            }
          }

          var focusHandler = document.createElement('div');
          focusHandler.setAttribute('tabindex', '-1');
          section.parentNode.insertBefore(focusHandler, section);
          focusHandler.focus();
          focusHandler.addEventListener('blur', function () {
            focusHandler.parentNode.removeChild(focusHandler);
          });
          this.targetPage.redirectFromComponent = false;
          setTimeout(function () {
            section.scrollIntoView(true);
          }, 100);
        }
      }
    }
    /**
     * Find chapter index.
     *
     * @param {string} chapterUUID Chapter UUID.
     * @return {number} Chapter id.
     */

  }, {
    key: "findChapterIndex",
    value: function findChapterIndex(chapterUUID) {
      var position = -1;
      this.columnNodes.forEach(function (element, index) {
        if (position !== -1) {
          return; // Skip
        }

        if (element.id === chapterUUID) {
          position = index;
        }
      });
      return position;
    }
    /**
     * Change chapter.
     *
     * @param {boolean} redirectOnLoad True if should redirect on load.
     * @param {object} target Target.
     */

  }, {
    key: "changeChapter",
    value: function changeChapter(redirectOnLoad, target) {
      var _this4 = this;

      if (this.columnNodes[this.parent.getActiveChapter()].classList.contains('h5p-interactive-book-animate')) {
        return;
      }

      this.targetPage = target;
      var chapterIdOld = this.parent.getActiveChapter();
      var chapterIdNew = this.parent.getChapterId(this.targetPage.chapter);
      var hasChangedChapter = chapterIdOld !== chapterIdNew;

      if (!redirectOnLoad) {
        this.parent.updateChapterProgress(chapterIdOld, hasChangedChapter);
      }

      this.preloadChapter(chapterIdNew);

      if (chapterIdNew < this.columnNodes.length) {
        var oldChapter = this.columnNodes[chapterIdOld];
        var targetChapter = this.columnNodes[chapterIdNew];

        if (hasChangedChapter && !redirectOnLoad) {
          this.parent.setActiveChapter(chapterIdNew);
          var direction = chapterIdOld < chapterIdNew ? 'next' : 'previous';
          /*
           * Animation done by making the current and the target node
           * visible and then applying the correct translation in x-direction
           */

          targetChapter.classList.add("h5p-interactive-book-".concat(direction));
          targetChapter.classList.add('h5p-interactive-book-animate');
          oldChapter.classList.add('h5p-interactive-book-animate'); // Start the animation

          setTimeout(function () {
            if (direction === 'previous') {
              oldChapter.classList.add('h5p-interactive-book-next');
            } else {
              oldChapter.classList.remove('h5p-interactive-book-current');
              oldChapter.classList.add('h5p-interactive-book-previous');
            }

            targetChapter.classList.remove("h5p-interactive-book-".concat(direction));
          }, 1); // End the animation

          setTimeout(function () {
            oldChapter.classList.remove('h5p-interactive-book-next');
            oldChapter.classList.remove('h5p-interactive-book-previous');
            oldChapter.classList.remove('h5p-interactive-book-current');
            targetChapter.classList.add('h5p-interactive-book-current');
            targetChapter.classList.remove('h5p-interactive-book-animate');
            oldChapter.classList.remove('h5p-interactive-book-animate');

            _this4.redirectSection(_this4.targetPage.section, _this4.targetPage.headerNumber);

            _this4.parent.trigger('resize');
          }, 250);
          this.handleChapterChange(chapterIdNew, chapterIdOld);
        } else {
          if (this.parent.cover && !this.parent.cover.hidden) {
            this.parent.on('coverRemoved', function () {
              _this4.redirectSection(_this4.targetPage.section, _this4.targetPage.headerNumber);
            });
          } else {
            this.redirectSection(this.targetPage.section, this.targetPage.headerNumber);
          }
        }

        this.parent.sideBar.redirectHandler(chapterIdNew);
      }
    }
    /**
     * Update footer.
     */

  }, {
    key: "updateFooter",
    value: function updateFooter() {
      if (this.chapters.length === 0) {
        return;
      }

      var activeChapter = this.parent.getActiveChapter();
      var column = this.columnNodes[activeChapter];
      var moveFooterInsideContent = this.parent.shouldFooterBeHidden(column.clientHeight); // Move status bar footer to content in fullscreen

      var footerParent = this.parent.statusBarFooter.wrapper.parentNode;

      if (moveFooterInsideContent) {
        // Add status bar footer to page content
        if (footerParent !== this.content) {
          this.content.appendChild(this.parent.statusBarFooter.wrapper);
        }
      } else {
        // Re-attach to shared bottom of book when exiting fullscreen
        if (footerParent !== this.parent.$wrapper) {
          this.parent.$wrapper.append(this.parent.statusBarFooter.wrapper);
        }
      }
    }
    /**
     * Handles chapter change events.
     *
     * @param {number} newId
     * @param {number} oldId
     */

  }, {
    key: "handleChapterChange",
    value: function handleChapterChange(newId, oldId) {
      var i;

      if (oldId !== undefined) {
        // Stop any playback
        for (i = 0; i < this.chapters[oldId].sections.length; i++) {
          this.pauseMedia(this.chapters[oldId].sections[i].instance);
        }
      } // Start autoplay


      if (this.shouldAutoplay[newId]) {
        for (i = 0; i < this.shouldAutoplay[newId].length; i++) {
          var shouldAutoplay = this.shouldAutoplay[newId][i];

          if (this.chapters[newId].sections[shouldAutoplay] !== undefined) {
            this.chapters[newId].sections[shouldAutoplay].instance.play();
          }
        }
      }
    }
    /**
     * Disables autoplay for all interactions not on the first chapter.
     *
     * @param {number} chapterId
     * @param {Object} chapter
     */

  }, {
    key: "overrideParameters",
    value: function overrideParameters(chapterId, chapter) {
      var currentChapterId = this.parent.getActiveChapter();

      for (var i = 0; i < chapter.params.content.length; i++) {
        if (this.hasAutoplay(chapter.params.content[i].content.params, chapterId !== currentChapterId || this.parent.hasCover())) {
          if (this.shouldAutoplay[chapterId] === undefined) {
            this.shouldAutoplay[chapterId] = [i];
          } else {
            this.shouldAutoplay[chapterId].push(i);
          }
        }
      }
    }
    /**
     * Check if interaction has autoplay enabled
     *
     * @param {Object} params
     * @return {boolean}
     */

  }, {
    key: "hasAutoplay",
    value: function hasAutoplay(params, prevent) {
      if (params.autoplay) {
        if (prevent) {
          params.autoplay = false;
        }

        return true;
      } else if (params.playback && params.playback.autoplay) {
        if (prevent) {
          params.playback.autoplay = false;
        }

        return true;
      } else if (params.media && params.media.params && params.media.params.playback && params.media.params.playback.autoplay) {
        if (prevent) {
          params.media.params.playback.autoplay = false;
        }

        return true;
      } else if (params.media && params.media.params && params.media.params.autoplay) {
        if (prevent) {
          params.media.params.autoplay = false;
        }

        return true;
      }

      return false;
    }
    /**
     * Stop the given element's playback if any.
     *
     * @param {object} instance
     */

  }, {
    key: "pauseMedia",
    value: function pauseMedia(instance) {
      try {
        if (instance.pause !== undefined && (instance.pause instanceof Function || typeof instance.pause === 'function')) {
          instance.pause();
        } else if (instance.video !== undefined && instance.video.pause !== undefined && (instance.video.pause instanceof Function || typeof instance.video.pause === 'function')) {
          instance.video.pause();
        } else if (instance.stop !== undefined && (instance.stop instanceof Function || typeof instance.stop === 'function')) {
          instance.stop();
        }
      } catch (err) {
        // Prevent crashing, but tell developers there's something wrong.
        H5P.error(err);
      }
    }
    /**
     * Toggle the navigation menu.
     */

  }, {
    key: "toggleNavigationMenu",
    value: function toggleNavigationMenu() {
      this.container.classList.toggle('h5p-interactive-book-navigation-open');
    }
  }]);

  return PageContent;
}(H5P.EventDispatcher);

/* harmony default export */ __webpack_exports__["default"] = (PageContent);

/***/ }),

/***/ "./src/scripts/sidebar.js":
/*!********************************!*\
  !*** ./src/scripts/sidebar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A component which helps in navigation
 * Constructor function.
 */
var SideBar =
/*#__PURE__*/
function (_H5P$EventDispatcher) {
  _inherits(SideBar, _H5P$EventDispatcher);

  function SideBar(config, contentId, mainTitle, parent) {
    var _this;

    _classCallCheck(this, SideBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideBar).call(this));
    _this.id = contentId;
    _this.parent = parent;
    _this.behaviour = config.behaviour;
    _this.content = document.createElement('div');

    _this.content.classList.add('navigation-list');

    _this.container = _this.addSideBar();
    _this.l10n = config.l10n;
    _this.chapters = _this.findAllChapters(config.chapters);
    _this.chapterNodes = _this.getChapterNodes();

    if (mainTitle) {
      _this.titleElem = _this.addMainTitle(mainTitle);

      _this.container.appendChild(_this.titleElem);
    }

    _this.chapterNodes.forEach(function (element) {
      _this.content.appendChild(element);
    });

    if (_this.chapters.length > 20) {
      _this.content.classList.add('large-navigation-list');
    }

    _this.container.appendChild(_this.content);

    _this.addTransformListener();

    _this.initializeNavigationControls();

    return _this;
  }

  _createClass(SideBar, [{
    key: "initializeNavigationControls",
    value: function initializeNavigationControls() {
      var _this2 = this;

      var keyCodes = Object.freeze({
        'UP': 38,
        'DOWN': 40
      });
      this.chapterNodes.forEach(function (chapter, i) {
        var chapterButton = chapter.querySelector('.h5p-interactive-book-navigation-chapter-button');
        chapterButton.addEventListener('keydown', function (e) {
          switch (e.keyCode) {
            case keyCodes.UP:
              _this2.setFocusToChapterItem(i, -1);

              e.preventDefault();
              break;

            case keyCodes.DOWN:
              _this2.setFocusToChapterItem(i, 1);

              e.preventDefault();
              break;
          }
        });
        var sections = chapter.querySelectorAll('.h5p-interactive-book-navigation-section');

        var _loop = function _loop(sectionIndex) {
          var section = sections[sectionIndex];
          var sectionButton = section.querySelector('.section-button');
          sectionButton.addEventListener('keydown', function (e) {
            switch (e.keyCode) {
              case keyCodes.UP:
                _this2.setFocusToSectionItem(i, sectionIndex, -1);

                e.preventDefault();
                break;

              case keyCodes.DOWN:
                _this2.setFocusToSectionItem(i, sectionIndex, 1);

                e.preventDefault();
                break;
            }
          });
        };

        for (var sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
          _loop(sectionIndex);
        }
      });
    }
  }, {
    key: "setFocusToChapterItem",
    value: function setFocusToChapterItem(index) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var nextIndex = index + direction;

      if (nextIndex < 0) {
        nextIndex = this.chapterNodes.length - 1;
      } else if (nextIndex > this.chapterNodes.length - 1) {
        nextIndex = 0;
      } // Check if we should navigate to a section


      if (direction) {
        var chapterIndex = direction > 0 ? index : nextIndex;
        var chapter = this.chapterNodes[chapterIndex];

        if (!chapter.classList.contains('h5p-interactive-book-navigation-closed')) {
          var sections = chapter.querySelectorAll('.h5p-interactive-book-navigation-section');

          if (sections.length) {
            var sectionItemIndex = direction > 0 ? 0 : sections.length - 1;
            this.setFocusToSectionItem(chapterIndex, sectionItemIndex);
            return;
          }
        }
      }

      var nextChapter = this.chapterNodes[nextIndex];
      var chapterButton = nextChapter.querySelector('.h5p-interactive-book-navigation-chapter-button');
      this.setFocusToItem(chapterButton, nextIndex);
    }
  }, {
    key: "setFocusToSectionItem",
    value: function setFocusToSectionItem(chapterIndex, index) {
      var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var chapter = this.chapterNodes[chapterIndex];
      var sections = chapter.querySelectorAll('.h5p-interactive-book-navigation-section'); // Navigate chapter if outside of section bounds

      var nextIndex = index + direction;

      if (nextIndex > sections.length - 1) {
        this.setFocusToChapterItem(chapterIndex + 1);
        return;
      } else if (nextIndex < 0) {
        this.setFocusToChapterItem(chapterIndex);
        return;
      }

      var section = sections[nextIndex];
      var sectionButton = section.querySelector('.section-button');
      this.setFocusToItem(sectionButton, chapterIndex);
    }
  }, {
    key: "setFocusToItem",
    value: function setFocusToItem(element, chapterIndex) {
      var skipFocusing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // Remove focus from all other elements
      this.chapterNodes.forEach(function (chapter, index) {
        var chapterButton = chapter.querySelector('.h5p-interactive-book-navigation-chapter-button'); // Highlight current chapter

        if (index === chapterIndex) {
          chapterButton.classList.add('h5p-interactive-book-navigation-current');
        } else {
          chapterButton.classList.remove('h5p-interactive-book-navigation-current');
        }

        chapterButton.setAttribute('tabindex', '-1');
        var sections = chapter.querySelectorAll('.h5p-interactive-book-navigation-section');

        for (var i = 0; i < sections.length; i++) {
          var section = sections[i];
          var sectionButton = section.querySelector('.section-button');
          sectionButton.setAttribute('tabindex', '-1');
        }
      });
      element.setAttribute('tabindex', '0');
      this.focusedChapter = chapterIndex;

      if (!skipFocusing) {
        element.focus();
      }
    }
    /**
     * Get sidebar DOM.
     *
     * @return {HTMLElement} DOM for sidebar.
     */

  }, {
    key: "addSideBar",
    value: function addSideBar() {
      var container = document.createElement('div');
      container.id = 'h5p-interactive-book-navigation-menu';
      container.classList.add('h5p-interactive-book-navigation');
      return container;
    }
    /**
     * Get main title.
     *
     * @param {string} title Title.
     * @return {HTMLElement} Title element.
     */

  }, {
    key: "addMainTitle",
    value: function addMainTitle(titleText) {
      var title = document.createElement('h2');
      title.classList.add('navigation-title');
      title.innerHTML = titleText;
      title.setAttribute('title', titleText);
      var titleWrapper = document.createElement('div');
      titleWrapper.classList.add('h5p-interactive-book-navigation-maintitle');
      titleWrapper.appendChild(title);
      return titleWrapper;
    }
    /**
     * Find sections in chapter.
     *
     * @param {object} columnData Column data.
     * @return {object[]} Sections data.
     */

  }, {
    key: "findSectionsInChapter",
    value: function findSectionsInChapter(columnData) {
      var sectionsData = [];
      var sections = columnData.params.content;

      for (var j = 0; j < sections.length; j++) {
        var content = sections[j].content;
        var title = '';

        switch (content.library.split(' ')[0]) {
          case 'H5P.Link':
            if (content.params.title) {
              title = content.params.title;
            } else {
              title = 'New link';
            }

            break;

          default:
            title = content.metadata.title;
        }

        sectionsData.push({
          title: title,
          id: content.subContentId ? "h5p-interactive-book-section-".concat(content.subContentId) : undefined
        });
      }

      return sectionsData;
    }
    /**
     * Find all chapters.
     *
     * @param {object[]} columnsData Columns data.
     * @return {object[]} Chapters data.
     */

  }, {
    key: "findAllChapters",
    value: function findAllChapters(columnsData) {
      var chapters = [];

      for (var i = 0; i < columnsData.length; i++) {
        var sections = this.findSectionsInChapter(columnsData[i]);
        var chapterTitle = columnsData[i].metadata.title;
        var id = "h5p-interactive-book-chapter-".concat(columnsData[i].subContentId);
        var lockPage = null;

        if (columnsData[i].hasOwnProperty('lockPage')) {
          lockPage = columnsData[i].lockPage === true ? true : false;
        }

        chapters.push({
          sections: sections,
          title: chapterTitle,
          id: id,
          isSummary: false,
          lockPage: lockPage
        });
      }

      if (this.parent.hasSummary()) {
        var lockedPage = chapters.find(function (chapter) {
          return chapter.hasOwnProperty('lockPage') && chapter.lockPage === true ? true : false;
        });
        chapters.push({
          sections: [],
          title: this.l10n.summaryHeader,
          id: "h5p-interactive-book-chapter-summary",
          isSummary: true,
          lockPage: lockedPage !== undefined && lockedPage.lockPage === true ? true : false
        });
      }

      return chapters;
    }
    /**
     * Toggle chapter menu.
     *
     * @param {HTMLElement} chapterNode Chapter.
     * @param {boolean} collapse If true, will collapse chapter.
     */

  }, {
    key: "toggleChapter",
    value: function toggleChapter(chapterNode, collapse) {
      collapse = collapse !== undefined ? collapse : !chapterNode.classList.contains('h5p-interactive-book-navigation-closed');
      var arrow = chapterNode.getElementsByClassName('h5p-interactive-book-navigation-chapter-accordion')[0];
      var chapterButton = chapterNode.querySelector('.h5p-interactive-book-navigation-chapter-button');
      chapterButton.setAttribute('aria-expanded', (!collapse).toString());

      if (collapse === true) {
        chapterNode.classList.add('h5p-interactive-book-navigation-closed');

        if (arrow) {
          arrow.classList.remove('icon-expanded');
          arrow.classList.add('icon-collapsed');
        }
      } else {
        chapterNode.classList.remove('h5p-interactive-book-navigation-closed');

        if (arrow) {
          arrow.classList.remove('icon-collapsed');
          arrow.classList.add('icon-expanded');
        }
      }
    }
    /**
     * Fires whenever a redirect is happening in parent
     * All chapters will be collapsed except for the active
     *
     * @param {number} chapterId The chapter that should stay open in the menu.
     */

  }, {
    key: "redirectHandler",
    value: function redirectHandler(chapterId) {
      var _this3 = this;

      this.chapterNodes.forEach(function (node, index) {
        _this3.toggleChapter(node, index !== chapterId);
      }); // Trigger resize after toggling all chapters

      this.parent.trigger('resize'); // Focus new chapter button if active chapter was closed

      if (chapterId !== this.focusedChapter) {
        var chapterButton = this.chapterNodes[chapterId].querySelector('.h5p-interactive-book-navigation-chapter-button');
        this.setFocusToItem(chapterButton, chapterId, true);
      }
    }
    /**
     * Reset indicators.
     */

  }, {
    key: "resetIndicators",
    value: function resetIndicators() {
      var _this4 = this;

      this.chapterNodes.forEach(function (node, index) {
        // Reset chapter
        _this4.updateChapterProgressIndicator(index, 'BLANK'); // Reset sections


        var sections = node.getElementsByClassName('h5p-interactive-book-navigation-section');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var section = _step.value;
            var icon = section.querySelector('.h5p-interactive-book-navigation-section-icon');

            if (icon) {
              icon.classList.remove('icon-question-answered');
              icon.classList.add('icon-chapter-blank');
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
    }
    /**
     * Update the indicator on a specific chapter.
     *
     * @param {number} chapterId The chapter that should be updated.
     * @param {string} status Status.
     */

  }, {
    key: "updateChapterProgressIndicator",
    value: function updateChapterProgressIndicator(chapterId, status) {
      if (!this.behaviour.progressIndicators) {
        return;
      }

      var chapter = this.chapters[chapterId];

      if (chapter.isSummary) {
        return;
      }

      var progressIndicator = this.chapterNodes[chapterId].getElementsByClassName('h5p-interactive-book-navigation-chapter-progress')[0];

      if (status === 'BLANK') {
        progressIndicator.classList.remove('icon-chapter-started');
        progressIndicator.classList.remove('icon-chapter-done');
        progressIndicator.classList.add('icon-chapter-blank');
      } else if (status === 'DONE') {
        progressIndicator.classList.remove('icon-chapter-blank');
        progressIndicator.classList.remove('icon-chapter-started');
        progressIndicator.classList.add('icon-chapter-done');
      } else if (status === 'STARTED') {
        progressIndicator.classList.remove('icon-chapter-blank');
        progressIndicator.classList.remove('icon-chapter-done');
        progressIndicator.classList.add('icon-chapter-started');
      }
    }
    /**
     * Update the sequential logic indicator on a specific chapter.
     *
     * @param {number} chapterId The chapter that should be updated.
     * @param {string} status Status.
     */

  }, {
    key: "updateSequentialLogicIndicator",
    value: function updateSequentialLogicIndicator(chapterId, status) {
      var handleSummary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var completedChapters = this.chapterNodes.filter(function (node) {
        return node.querySelector('.icon-chapter-done');
      });
      var numberOfChapters = this.chapterNodes.length - 1; // if all chapters are completed

      if (status === 'DONE' && completedChapters.length === numberOfChapters) {
        chapterId = this.chapterNodes.length - 1; // set chapterId for Summary

        var _chapterButton = this.chapterNodes[chapterId].querySelector('button');

        _chapterButton.removeAttribute('disabled');

        this.chapterNodes[chapterId].classList.remove('lock-page-navigation');
        return;
      }

      var chapterButton = this.chapterNodes[chapterId].querySelector('button');

      if (status === 'DONE' && !handleSummary) {
        chapterButton.removeAttribute('disabled');
        this.chapterNodes[chapterId].classList.remove('lock-page-navigation');
      }
    }
    /**
     * Set section marker.
     *
     * @param {number} chapterId Chapter Id.
     * @param {number} sectionId Section Id.
     */

  }, {
    key: "setSectionMarker",
    value: function setSectionMarker(chapterId, sectionId) {
      var icon = this.chapterNodes[chapterId].querySelector('.h5p-interactive-book-navigation-section-' + sectionId + ' .h5p-interactive-book-navigation-section-icon');

      if (icon) {
        icon.classList.remove('icon-chapter-blank');
        icon.classList.add('icon-question-answered');
      }
    }
    /**
     * Create chapter.
     *
     * @param {object} chapter Chapter data.
     * @param {number} chapterId Chapter Id.
     * @return {HTMLElement} Chapter node.
     */

  }, {
    key: "getNodesFromChapter",
    value: function getNodesFromChapter(chapter, chapterId) {
      var _this5 = this;

      var chapterNode = document.createElement('li');
      chapterNode.classList.add('h5p-interactive-book-navigation-chapter');

      if (chapter.lockPage === true && chapterId > 0) {
        chapterNode.classList.add('lock-page-navigation');
      }

      if (chapter.isSummary) {
        chapterNode.classList.add('h5p-interactive-book-navigation-summary-button');
        var summary = this.parent.chapters[chapterId];
        var summaryButton = summary.instance.summaryMenuButton;
        summaryButton.classList.add('h5p-interactive-book-navigation-chapter-button');
        chapterNode.appendChild(summaryButton);

        if (chapterId > 0 && chapter.lockPage === true) {
          summaryButton.setAttribute('disabled', 'disabled');
        }

        return chapterNode;
      } // TODO: Clean this up. Will require to receive chapter info from parent instead of building itself


      var chapterCollapseIcon = document.createElement('div');
      chapterCollapseIcon.classList.add('h5p-interactive-book-navigation-chapter-accordion');
      var chapterTitleText = document.createElement('div');
      chapterTitleText.classList.add('h5p-interactive-book-navigation-chapter-title-text');
      chapterTitleText.innerHTML = chapter.title;
      chapterTitleText.setAttribute('title', chapter.title);
      var chapterCompletionIcon = document.createElement('div');

      if (this.behaviour.progressIndicators) {
        chapterCompletionIcon.classList.add('icon-chapter-blank');
        chapterCompletionIcon.classList.add('h5p-interactive-book-navigation-chapter-progress');
      }

      var chapterNodeTitle = document.createElement('button');

      if (chapterId > 0 && chapter.lockPage === true) {
        chapterNodeTitle.setAttribute('disabled', 'disabled');
      }

      chapterNodeTitle.setAttribute('tabindex', chapterId === 0 ? '0' : '-1');
      chapterNodeTitle.classList.add('h5p-interactive-book-navigation-chapter-button');

      if (this.parent.activeChapter !== chapterId) {
        chapterCollapseIcon.classList.add('icon-collapsed');
        chapterNodeTitle.setAttribute('aria-expanded', 'false');
      } else {
        chapterCollapseIcon.classList.add('icon-expanded');
        chapterNodeTitle.setAttribute('aria-expanded', 'true');
      }

      chapterNodeTitle.setAttribute('aria-controls', sectionsDivId);

      chapterNodeTitle.onclick = function (event) {
        var accordion = event.currentTarget.querySelector('.h5p-interactive-book-navigation-chapter-accordion');
        var isExpandable = !accordion.classList.contains('hidden');
        var isExpanded = event.currentTarget.getAttribute('aria-expanded') === 'true';

        if (_this5.isOpenOnMobile()) {
          _this5.parent.trigger('toggleMenu');
        } // Open chapter in main content


        if (chapterId !== _this5.focusedChapter && (_this5.isOpenOnMobile() || !isExpandable || !isExpanded)) {
          var newChapter = {
            h5pbookid: _this5.parent.contentId,
            chapter: _this5.chapters[chapterId].id,
            section: 0
          };

          _this5.parent.trigger('newChapter', newChapter);
        } // Expand chapter in menu


        if (isExpandable) {
          _this5.toggleChapter(event.currentTarget.parentElement);

          _this5.parent.trigger('resize');
        }
      };

      chapterNodeTitle.appendChild(chapterCollapseIcon);
      chapterNodeTitle.appendChild(chapterTitleText);
      chapterNodeTitle.appendChild(chapterCompletionIcon);
      chapterNode.appendChild(chapterNodeTitle); // Collapse all but current chapters in menu and highlight current

      if (this.parent.activeChapter === chapterId) {
        chapterNode.querySelector('.h5p-interactive-book-navigation-chapter-button').classList.add('h5p-interactive-book-navigation-current');
      } else {
        this.toggleChapter(chapterNode, true);
      }

      var sectionsWrapper = document.createElement('ul');
      sectionsWrapper.classList.add('h5p-interactive-book-navigation-sectionlist');
      var sectionsDivId = 'h5p-interactive-book-sectionlist-' + chapterId;
      sectionsWrapper.id = sectionsDivId;
      var sectionLinks = []; // Add sections to the chapter

      for (var i = 0; i < this.chapters[chapterId].sections.length; i++) {
        // Non-tasks will only get section links if they have headers
        if (!this.parent.chapters[chapterId].sections[i].isTask) {
          // Check text content for headers
          var chapterParams = this.parent.params.chapters[chapterId];
          var sectionParams = chapterParams.params.content[i].content;
          var isText = sectionParams.library.split(' ')[0] === 'H5P.AdvancedText';

          if (isText) {
            var text = document.createElement('div');
            text.innerHTML = sectionParams.params.text;
            var headers = text.querySelectorAll('h2, h3');

            for (var j = 0; j < headers.length; j++) {
              var header = headers[j];
              var sectionNode = this.createSectionLink(chapterId, i, header.textContent, j);
              sectionLinks.push(sectionNode);
              sectionsWrapper.appendChild(sectionNode);
            }
          }
        } else {
          var _sectionNode = this.createSectionLink(chapterId, i);

          sectionLinks.push(_sectionNode);
          sectionsWrapper.appendChild(_sectionNode);
        }
      }

      if (chapter.tasksLeft) {
        chapter.maxTasks = chapter.tasksLeft;
      } // Don't show collapse arrow if there are no sections or on mobile


      if (sectionLinks.length === 0) {
        var arrowIconElement = chapterNode.querySelector('.h5p-interactive-book-navigation-chapter-accordion');

        if (arrowIconElement) {
          arrowIconElement.classList.add('hidden');
        }
      }

      chapterNode.appendChild(sectionsWrapper);
      return chapterNode;
    }
    /**
     * Create a section link
     * @param chapterId
     * @param i Index of section
     * @param [title] Force title
     * @param [headerNumber] Set header index within section to link to.
     * @returns {Element} Section node containing the link
     */

  }, {
    key: "createSectionLink",
    value: function createSectionLink(chapterId, i) {
      var _this6 = this;

      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var headerNumber = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var section = this.chapters[chapterId].sections[i];
      var sectionTitleText = document.createElement('div');
      sectionTitleText.innerHTML = title || section.title;
      sectionTitleText.setAttribute('title', title || section.title);
      sectionTitleText.classList.add('h5p-interactive-book-navigation-section-title');
      var sectionCompletionIcon = document.createElement('div');
      sectionCompletionIcon.classList.add('h5p-interactive-book-navigation-section-icon');
      sectionCompletionIcon.classList.add('icon-chapter-blank');

      if (this.parent.chapters[chapterId].sections[i].isTask) {
        sectionCompletionIcon.classList.add('h5p-interactive-book-navigation-section-task');
      }

      var sectionLink = document.createElement('button');
      sectionLink.classList.add('section-button');
      sectionLink.setAttribute('tabindex', '-1');

      sectionLink.onclick = function (event) {
        var newChapter = {
          h5pbookid: _this6.parent.contentId,
          chapter: _this6.chapters[chapterId].id,
          section: section.id
        };

        if (headerNumber !== null) {
          newChapter.headerNumber = headerNumber;
        }

        _this6.parent.trigger('newChapter', newChapter);

        if (_this6.isOpenOnMobile()) {
          _this6.parent.trigger('toggleMenu');
        }

        event.preventDefault();
      };

      sectionLink.appendChild(sectionCompletionIcon);
      sectionLink.appendChild(sectionTitleText);
      var sectionNode = document.createElement('li');
      sectionNode.classList.add('h5p-interactive-book-navigation-section');
      sectionNode.classList.add('h5p-interactive-book-navigation-section-' + i);
      sectionNode.appendChild(sectionLink);
      return sectionNode;
    }
    /**
     * Get chapter elements.
     *
     * @return {HTMLElement[]} Chapter elements.
     */

  }, {
    key: "getChapterNodes",
    value: function getChapterNodes() {
      var _this7 = this;

      return this.chapters.map(function (chapter, index) {
        return _this7.getNodesFromChapter(chapter, index);
      });
    }
    /**
     * Detect whether navigation is open on a small surface(pc or mobile).
     * @return {boolean} True, if navigation is open on mobile view.
     */

  }, {
    key: "isOpenOnMobile",
    value: function isOpenOnMobile() {
      return this.parent.isMenuOpen() && this.parent.isSmallSurface();
    }
    /**
     * Add transform listener.
     */

  }, {
    key: "addTransformListener",
    value: function addTransformListener() {
      var _this8 = this;

      this.container.addEventListener('transitionend', function (event) {
        // propertyName is used trigger once, not for every property that has transitionend
        if (event.propertyName === 'flex-basis') {
          _this8.parent.trigger('resize');
        }
      });
    }
  }]);

  return SideBar;
}(H5P.EventDispatcher);

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./src/scripts/statusbar.js":
/*!**********************************!*\
  !*** ./src/scripts/statusbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Constructor function.
 */
var StatusBar =
/*#__PURE__*/
function (_H5P$EventDispatcher) {
  _inherits(StatusBar, _H5P$EventDispatcher);

  function StatusBar(contentId, totalChapters, parent, params, styleClassName) {
    var _this;

    _classCallCheck(this, StatusBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StatusBar).call(this));
    _this.id = contentId;
    _this.parent = parent;
    _this.params = params || {};
    _this.params.l10n = params.l10n;
    _this.params.a11y = _extends({
      progress: 'Page @page of @total',
      menu: 'Toggle navigation menu'
    }, _this.params.a11y || {});
    _this.totalChapters = totalChapters;
    _this.arrows = _this.addArrows();

    var lockedPage = _this.parent.params.chapters.find(function (chapter) {
      return chapter.hasOwnProperty('lockPage') && chapter.lockPage === true ? true : false;
    });

    _this.hasLockedPage = lockedPage === undefined ? false : true;
    /**
     * Top row initializer
     */

    _this.progressBar = _this.createProgressBar();
    _this.progressIndicator = _this.createProgressIndicator();
    _this.chapterTitle = _this.addChapterTitle();
    _this.menuToggleButton = _this.createMenuToggleButton();
    var wrapperInfo = document.createElement('div');
    wrapperInfo.classList.add('h5p-interactive-book-status');
    wrapperInfo.appendChild(_this.menuToggleButton);
    wrapperInfo.appendChild(_this.createToTopButton());
    wrapperInfo.appendChild(_this.chapterTitle.wrapper);
    wrapperInfo.appendChild(_this.progressIndicator.wrapper);

    if (!_this.hasLockedPage) {
      wrapperInfo.appendChild(_this.arrows.buttonWrapperPrevious);
      wrapperInfo.appendChild(_this.arrows.buttonWrapperNext);
    }

    if (_this.params.displayFullScreenButton && H5P.fullscreenSupported) {
      wrapperInfo.appendChild(_this.createFullScreenButton());
    }

    _this.wrapper = document.createElement('div');

    _this.wrapper.classList.add(styleClassName);

    _this.wrapper.setAttribute('tabindex', '-1');

    _this.wrapper.appendChild(_this.progressBar.wrapper);

    _this.wrapper.appendChild(wrapperInfo);

    _this.on('updateStatusBar', _this.updateStatusBar);
    /**
     * Sequential traversal of chapters
     * Event should be either 'next' or 'prev'
     */


    _this.on('seqChapter', function (event) {
      var eventInput = {
        h5pbookid: _this.parent.contentId
      };

      if (event.data.toTop) {
        eventInput.section = 'top';
      }

      if (event.data.direction === 'next') {
        if (_this.parent.activeChapter + 1 < _this.parent.chapters.length) {
          eventInput.chapter = "h5p-interactive-book-chapter-".concat(_this.parent.chapters[_this.parent.activeChapter + 1].instance.subContentId);
        } else if (_this.parent.hasSummary() && _this.parent.activeChapter + 1 === _this.parent.chapters.length) {
          _this.parent.trigger('viewSummary', eventInput);
        }
      } else if (event.data.direction === 'prev') {
        if (_this.parent.activeChapter > 0) {
          eventInput.chapter = "h5p-interactive-book-chapter-".concat(_this.parent.chapters[_this.parent.activeChapter - 1].instance.subContentId);
        }
      }

      if (eventInput.chapter) {
        _this.parent.trigger('newChapter', eventInput);
      }
    });

    return _this;
  }
  /**
   * Update progress bar.
   *
   * @param {number} chapterId Chapter Id.
   */


  _createClass(StatusBar, [{
    key: "updateProgressBar",
    value: function updateProgressBar(chapter) {
      var barWidth = "".concat(chapter / this.totalChapters * 100, "%");
      this.progressBar.progress.style.width = barWidth;
      var title = this.params.a11y.progress.replace('@page', chapter).replace('@total', this.totalChapters);
      this.progressBar.progress.title = title;
    }
    /**
     * Update aria label of progress text
     * @param {number} chapterId Index of chapter
     */

  }, {
    key: "updateA11yProgress",
    value: function updateA11yProgress(chapterId) {
      this.progressIndicator.hiddenButRead.innerHTML = this.params.a11y.progress.replace('@page', chapterId).replace('@total', this.totalChapters);
    }
    /**
     * Update status bar.
     */

  }, {
    key: "updateStatusBar",
    value: function updateStatusBar() {
      var currentChapter = this.parent.getActiveChapter() + 1;
      var chapterTitle = this.parent.chapters[currentChapter - 1].title;
      this.progressIndicator.current.innerHTML = currentChapter;
      this.updateA11yProgress(currentChapter);
      this.updateProgressBar(currentChapter);
      this.chapterTitle.text.innerHTML = chapterTitle;
      this.chapterTitle.text.setAttribute('title', chapterTitle); //assure that the buttons are valid in terms of chapter edges

      if (this.parent.activeChapter <= 0) {
        this.setButtonStatus('Previous', true);
      } else {
        this.setButtonStatus('Previous', false);
      }

      if (this.parent.activeChapter + 1 >= this.totalChapters) {
        this.setButtonStatus('Next', true);
      } else {
        this.setButtonStatus('Next', false);
      }
    }
    /**
     * Add traversal buttons for sequential travel (next and previous chapter)
     */

  }, {
    key: "addArrows",
    value: function addArrows() {
      var _this2 = this;

      var acm = {}; // Initialize elements

      acm.buttonPrevious = document.createElement('div');
      acm.buttonPrevious.classList.add('navigation-button');
      acm.buttonPrevious.classList.add('icon-previous');
      acm.buttonPrevious.setAttribute('title', this.params.l10n.previousPage);
      acm.buttonWrapperPrevious = document.createElement('button');
      acm.buttonWrapperPrevious.classList.add('h5p-interactive-book-status-arrow');
      acm.buttonWrapperPrevious.classList.add('h5p-interactive-book-status-button');

      acm.buttonWrapperPrevious.onclick = function () {
        _this2.trigger('seqChapter', {
          direction: 'prev',
          toTop: true
        });
      };

      acm.buttonWrapperPrevious.appendChild(acm.buttonPrevious);
      acm.buttonNext = document.createElement('div');
      acm.buttonNext.classList.add('navigation-button');
      acm.buttonNext.classList.add('icon-next');
      acm.buttonNext.setAttribute('title', this.params.l10n.nextPage);
      acm.buttonWrapperNext = document.createElement('button');
      acm.buttonWrapperNext.classList.add('h5p-interactive-book-status-arrow');
      acm.buttonWrapperNext.classList.add('h5p-interactive-book-status-button');

      acm.buttonWrapperNext.onclick = function () {
        _this2.trigger('seqChapter', {
          direction: 'next',
          toTop: true
        });
      };

      acm.buttonWrapperNext.appendChild(acm.buttonNext);
      return acm;
    }
    /**
     * Add a menu button which hides and shows the navigation bar.
     *
     * @return {HTMLElement} Button node.
     */

  }, {
    key: "createMenuToggleButton",
    value: function createMenuToggleButton() {
      var _this3 = this;

      var button = document.createElement('a');
      button.classList.add('icon-menu');
      var buttonWrapperMenu = document.createElement('button');
      buttonWrapperMenu.classList.add('h5p-interactive-book-status-menu');
      buttonWrapperMenu.classList.add('h5p-interactive-book-status-button');
      buttonWrapperMenu.title = this.params.a11y.menu;
      buttonWrapperMenu.setAttribute('aria-expanded', 'false');
      buttonWrapperMenu.setAttribute('aria-controls', 'h5p-interactive-book-navigation-menu');

      buttonWrapperMenu.onclick = function () {
        _this3.parent.trigger('toggleMenu');
      };

      buttonWrapperMenu.appendChild(button);
      return buttonWrapperMenu;
    }
    /**
     * Check if menu is active/open
     *
     * @return {boolean}
     */

  }, {
    key: "isMenuOpen",
    value: function isMenuOpen() {
      return this.menuToggleButton.classList.contains('h5p-interactive-book-status-menu-active');
    }
    /**
     * Add progress bar.
     *
     * @return {object} Progress bar elements.
     */

  }, {
    key: "createProgressBar",
    value: function createProgressBar() {
      var progress = document.createElement('div');
      progress.classList.add('h5p-interactive-book-status-progressbar-front');
      progress.setAttribute('tabindex', '-1');
      var wrapper = document.createElement('div');
      wrapper.classList.add('h5p-interactive-book-status-progressbar-back');
      wrapper.appendChild(progress);
      return {
        wrapper: wrapper,
        progress: progress
      };
    }
    /**
     * Add a paragraph which indicates which chapter is active.
     *
     * @return {object} Chapter title elements.
     */

  }, {
    key: "addChapterTitle",
    value: function addChapterTitle() {
      var text = document.createElement('h1');
      text.classList.add('title');
      var wrapper = document.createElement('div');
      wrapper.classList.add('h5p-interactive-book-status-chapter');
      wrapper.appendChild(text);
      return {
        wrapper: wrapper,
        text: text
      };
    }
    /**
     * Add a button which scrolls to the top of the page.
     *
     * @return {HTMLElement} Button.
     */

  }, {
    key: "createToTopButton",
    value: function createToTopButton() {
      var _this4 = this;

      var button = document.createElement('div');
      button.classList.add('icon-up');
      button.classList.add('navigation-button');
      var wrapper = document.createElement('button');
      wrapper.classList.add('h5p-interactive-book-status-to-top');
      wrapper.classList.add('h5p-interactive-book-status-button');
      wrapper.classList.add('h5p-interactive-book-status-arrow');
      wrapper.setAttribute('title', this.params.l10n.navigateToTop);

      wrapper.onclick = function () {
        _this4.parent.trigger('scrollToTop');
      };

      wrapper.appendChild(button);
      return wrapper;
    }
    /**
     * Set the visibility.
     *
     * @param {boolean} hide True will hide the bar.
     */

  }, {
    key: "setVisibility",
    value: function setVisibility(hide) {
      if (hide) {
        this.wrapper.classList.add('footer-hidden');
      } else {
        this.wrapper.classList.remove('footer-hidden');
      }
    }
    /**
     * Add a status-button which shows current and total chapters.
     *
     * @return {object} Progress elements.
     */

  }, {
    key: "createProgressIndicator",
    value: function createProgressIndicator() {
      var current = document.createElement('span');
      current.classList.add('h5p-interactive-book-status-progress-number');
      current.setAttribute('aria-hidden', 'true');
      var divider = document.createElement('span');
      divider.classList.add('h5p-interactive-book-status-progress-divider');
      divider.innerHTML = ' / ';
      divider.setAttribute('aria-hidden', 'true');
      var total = document.createElement('span');
      total.classList.add('h5p-interactive-book-status-progress-number');
      total.innerHTML = this.totalChapters;
      total.setAttribute('aria-hidden', 'true');
      var hiddenButRead = document.createElement('p');
      hiddenButRead.classList.add('hidden-but-read');
      var progressText = document.createElement('p');
      progressText.classList.add('h5p-interactive-book-status-progress');
      progressText.appendChild(current);
      progressText.appendChild(divider);
      progressText.appendChild(total);
      progressText.appendChild(hiddenButRead);
      var wrapper = document.createElement('div');
      wrapper.appendChild(progressText);
      return {
        wrapper: wrapper,
        current: current,
        total: total,
        divider: divider,
        progressText: progressText,
        hiddenButRead: hiddenButRead
      };
    }
    /**
     * Edit button state on both the top and bottom bar.
     *
     * @param {string} target Prev or Next.
     * @param {boolean} disable True will disable the target button.
     */

  }, {
    key: "setButtonStatus",
    value: function setButtonStatus(target, disable) {
      if (disable) {
        this.arrows['buttonWrapper' + target].setAttribute('disabled', 'disabled');
        this.arrows['button' + target].classList.add('disabled');
      } else {
        this.arrows['buttonWrapper' + target].removeAttribute('disabled');
        this.arrows['button' + target].classList.remove('disabled');
      }
    }
    /**
     * Creates the fullscreen button.
     *
     * @returns {Element} The button dom element
     */

  }, {
    key: "createFullScreenButton",
    value: function createFullScreenButton() {
      var _this5 = this;

      var toggleFullScreen = function toggleFullScreen() {
        if (H5P.isFullscreen === true) {
          H5P.exitFullScreen();
        } else {
          H5P.fullScreen(_this5.parent.mainWrapper, _this5.parent);
        }
      };

      var fullScreenButton = document.createElement('button');
      fullScreenButton.classList.add('h5p-interactive-book-status-fullscreen');
      fullScreenButton.classList.add('h5p-interactive-book-status-button');
      fullScreenButton.classList.add('h5p-interactive-book-enter-fullscreen');
      fullScreenButton.setAttribute('title', this.params.l10n.fullscreen);
      fullScreenButton.setAttribute('aria-label', this.params.l10n.fullscreen);
      fullScreenButton.addEventListener('click', toggleFullScreen);
      fullScreenButton.addEventListener('keyPress', function (event) {
        if (event.which === 13 || event.which === 32) {
          toggleFullScreen();
          event.preventDefault();
        }
      });
      this.parent.on('enterFullScreen', function () {
        _this5.parent.isFullscreen = true;
        fullScreenButton.classList.remove('h5p-interactive-book-enter-fullscreen');
        fullScreenButton.classList.add('h5p-interactive-book-exit-fullscreen');
        fullScreenButton.setAttribute('title', _this5.params.l10n.exitFullscreen);
        fullScreenButton.setAttribute('aria-label', _this5.params.l10n.exitFullScreen);

        _this5.parent.pageContent.updateFooter();
      });
      this.parent.on('exitFullScreen', function () {
        _this5.parent.isFullscreen = false;
        fullScreenButton.classList.remove('h5p-interactive-book-exit-fullscreen');
        fullScreenButton.classList.add('h5p-interactive-book-enter-fullscreen');
        fullScreenButton.setAttribute('title', _this5.params.l10n.fullscreen);
        fullScreenButton.setAttribute('aria-label', _this5.params.l10n.fullscreen);

        _this5.parent.pageContent.updateFooter();
      });
      return fullScreenButton;
    }
  }]);

  return StatusBar;
}(H5P.EventDispatcher);

/* harmony default export */ __webpack_exports__["default"] = (StatusBar);

/***/ }),

/***/ "./src/scripts/summary.js":
/*!********************************!*\
  !*** ./src/scripts/summary.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_circle_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-circle-progress */ "./node_modules/jquery-circle-progress/dist/circle-progress.js");
/* harmony import */ var jquery_circle_progress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_circle_progress__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Summary =
/*#__PURE__*/
function (_H5P$EventDispatcher) {
  _inherits(Summary, _H5P$EventDispatcher);

  /**
   * @constructor
   *
   * @param {object} config
   * @param {object} parent
   * @param {object} params
   */
  function Summary(config, parent, chapters) {
    var _this;

    _classCallCheck(this, Summary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Summary).call(this));
    _this.parent = parent;
    _this.behaviour = config.behaviour;
    _this.l10n = config.l10n;
    _this.chapters = chapters || [];
    _this.chaptersWithConfig = _this.setChaptersConfig(config.chapters);
    _this.subContentId = 'summary';
    _this.wrapper = null;
    _this.summaryMenuButton = _this.createSummaryButton();
    _this.filterActionAll = 'all';
    _this.filterActionUnanswered = 'unanswered';
    _this.bookCompleted = false;
    parent.on('bookCompleted', function (event) {
      return _this.setBookComplete(event.data.completed);
    });
    parent.on('toggleMenu', function () {
      var footer = document.querySelector('.h5p-interactive-book-summary-footer');

      if (footer && _this.bookCompleted) {
        if (_this.parent.isMenuOpen()) {
          footer.classList.add('menu-open');
        } else {
          footer.classList.remove('menu-open');
        }
      }
    });
    return _this;
  }
  /**
   * set chapters config.
   *
   * @param {object[]} columnsData Columns data.
   * @return {object[]} Chapters data.
   */


  _createClass(Summary, [{
    key: "setChaptersConfig",
    value: function setChaptersConfig(columnsData) {
      var chapters = [];

      for (var i = 0; i < columnsData.length; i++) {
        var chapterTitle = columnsData[i].metadata.title;
        var id = "h5p-interactive-book-chapter-".concat(columnsData[i].subContentId);
        var lockPage = null;

        if (columnsData[i].hasOwnProperty('lockPage')) {
          lockPage = columnsData[i].lockPage === true ? true : false;
        }

        chapters.push({
          title: chapterTitle,
          id: id,
          isSummary: false,
          lockPage: lockPage
        });
      }

      if (this.parent.hasSummary()) {
        var lockedPage = chapters.find(function (chapter) {
          return chapter.hasOwnProperty('lockPage') && chapter.lockPage === true ? true : false;
        });
        chapters.push({
          title: this.l10n.summaryHeader,
          id: "h5p-interactive-book-chapter-summary",
          isSummary: true,
          lockPage: lockedPage !== undefined && lockedPage.lockPage === true ? true : false
        });
      }

      return chapters;
    }
    /**
     *
     * @param {boolean} complete
     */

  }, {
    key: "setBookComplete",
    value: function setBookComplete(complete) {
      var summaryFooter = this.parent.mainWrapper[0].querySelector('.h5p-interactive-book-summary-footer');

      if (!summaryFooter && this.parent.isSmallSurface()) {
        summaryFooter = document.createElement("div");
        summaryFooter.classList.add('h5p-interactive-book-summary-footer');
        summaryFooter.appendChild(this.createSummaryButton());
        this.parent.mainWrapper.append(summaryFooter);
      }

      if (summaryFooter && complete) {
        setTimeout(function () {
          return summaryFooter.classList.add('show-footer');
        }, 0);
      }

      this.bookCompleted = complete;
      Array.from(document.querySelectorAll('.h5p-interactive-book-summary-menu-button')).forEach(function (button) {
        return button.setAttribute('data-book-completed', complete.toString());
      });
    }
    /**
     * Set chapters for the summary
     * @param chapters
     */

  }, {
    key: "setChapters",
    value: function setChapters(chapters) {
      this.chapters = Array.isArray(chapters) ? chapters : [];
    }
    /**
     * Enable/disable the summary button
     *
     * @param disabled
     */

  }, {
    key: "setSummaryMenuButtonDisabled",
    value: function setSummaryMenuButtonDisabled() {
      var disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.summaryMenuButton.disabled = disabled;
    }
    /**
     * Apply the filter of resources in the summary
     *
     * @param filter
     */

  }, {
    key: "setFilter",
    value: function setFilter(filter) {
      var _this2 = this;

      var overviewList = this.wrapper.querySelector('.h5p-interactive-book-summary-overview-list');
      var sectionList = Array.from(overviewList.querySelectorAll('.h5p-interactive-book-summary-overview-section'));
      sectionList.forEach(function (section) {
        section.classList.remove('h5p-interactive-book-summary-top-section');
        section.classList.remove('h5p-interactive-book-summary-bottom-section');
      });
      var emptyContainer = overviewList.querySelector('.h5p-interactive-book-summary-overview-list-empty');
      emptyContainer.style.display = 'none';

      if (filter === this.filterActionUnanswered) {
        overviewList.classList.add('h5p-interactive-book-summary-overview-list-only-unanswered');
        var filteredSectionList = sectionList.filter(function (section) {
          return !section.classList.contains('h5p-interactive-book-summary-no-interactions');
        });

        if (filteredSectionList.length) {
          filteredSectionList[0].classList.add('h5p-interactive-book-summary-top-section');
          filteredSectionList[filteredSectionList.length - 1].classList.add('h5p-interactive-book-summary-bottom-section');
        } else {
          emptyContainer.style.display = 'block';
        }
      } else if (filter === this.filterActionAll) {
        overviewList.classList.remove('h5p-interactive-book-summary-overview-list-only-unanswered');
      }

      setTimeout(function () {
        return _this2.trigger('resize');
      }, 1);
    }
    /**
     *  Create a "Summary & Submit" button
     *
     * @return {HTMLButtonElement}
     */

  }, {
    key: "createSummaryButton",
    value: function createSummaryButton() {
      var _this3 = this;

      var button = document.createElement('button');
      button.classList.add('h5p-interactive-book-summary-menu-button');

      button.onclick = function () {
        var newChapter = {
          h5pbookid: _this3.parent.contentId,
          chapter: "h5p-interactive-book-chapter-summary",
          section: "top"
        };

        _this3.parent.trigger('newChapter', newChapter);

        if (_this3.parent.isMenuOpen() && _this3.parent.isSmallSurface()) {
          _this3.parent.trigger('toggleMenu');
        }
      }; //button.disabled = true;


      var paperIcon = document.createElement('span');
      paperIcon.classList.add('h5p-interactive-book-summary-icon');
      paperIcon.classList.add('icon-paper');
      paperIcon.setAttribute('aria-hidden', "true");
      var text = document.createElement('span');
      text.classList.add('h5p-interactive-book-summary-text');
      text.innerHTML = this.l10n.summaryAndSubmit;
      var arrowIcon = document.createElement('span');
      arrowIcon.classList.add('h5p-interactive-book-summary-menu-button-arrow');
      arrowIcon.classList.add('icon-up');
      arrowIcon.setAttribute('aria-hidden', "true");
      button.appendChild(paperIcon);
      button.appendChild(text);
      button.appendChild(arrowIcon);
      return button;
    }
    /**
     * Create the process circle
     *
     * @param progress
     * @return {HTMLDivElement}
     */

  }, {
    key: "createCircle",
    value: function createCircle(progress) {
      var circleProgress = document.createElement("div");
      circleProgress.classList.add('h5p-interactive-book-summary-progress-circle');
      circleProgress.setAttribute('data-value', progress);
      circleProgress.setAttribute('data-start-angle', -Math.PI / 3);
      circleProgress.setAttribute('data-thickness', 13);
      circleProgress.setAttribute('data-empty-fill', "rgba(45, 122, 210, .1)");
      circleProgress.setAttribute('data-fill', JSON.stringify({
        color: '#2d7ad2'
      }));
      return circleProgress;
    }
    /**
     * Create a progress box used at the top of the summary
     *
     * @param title
     * @param smallText
     * @param progressCounter
     * @param progressTotal
     * @param {boolean} [isAbsoluteValues] Use absolute values for progress instead of percentage
     * @param {number} [smallProgress] Progress for small text if it differs from the progress counter
     * @param {number} [smallProgressTotal] Total progress for small text if it differs from the total progress counter
     * @return {HTMLDivElement}
     */

  }, {
    key: "createProgress",
    value: function createProgress(title, smallText, progressCounter, progressTotal) {
      var isAbsoluteValues = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var smallProgress = arguments.length > 5 ? arguments[5] : undefined;
      var smallProgressTotal = arguments.length > 6 ? arguments[6] : undefined;
      var box = document.createElement("div");
      var header = document.createElement("h3");
      header.innerHTML = title;
      var progressPercentage = progressCounter * 100 / progressTotal;

      if (smallProgress === undefined) {
        smallProgress = progressCounter;
      }

      if (smallProgressTotal === undefined) {
        smallProgressTotal = progressTotal;
      }

      var progressBigText = document.createElement("p");
      progressBigText.classList.add('h5p-interactive-book-summary-progressbox-bigtext');
      progressBigText.innerHTML = Math.round(progressPercentage) + '%';

      if (isAbsoluteValues) {
        var progress = document.createElement('span');
        progress.classList.add('absolute-value');
        progress.innerHTML = progressCounter;
        var separator = document.createElement('span');
        separator.classList.add('separator');
        separator.innerHTML = '/';
        var total = document.createElement('span');
        total.classList.add('absolute-value');
        total.innerHTML = progressTotal;
        progressBigText.innerHTML = '';
        progressBigText.appendChild(progress);
        progressBigText.appendChild(separator);
        progressBigText.appendChild(total);
      }

      var progressSmallText = document.createElement("span");
      progressSmallText.classList.add('h5p-interactive-book-summary-progressbox-smalltext');
      progressSmallText.innerHTML = smallText.replace('@count', smallProgress).replace('@total', smallProgressTotal);
      box.appendChild(header);
      box.appendChild(progressBigText);

      if (title.toLowerCase() !== 'total score') {
        box.appendChild(progressSmallText);
      }

      var container = document.createElement("div");
      container.appendChild(box);
      container.appendChild(this.createCircle(progressCounter / progressTotal));
      return container;
    }
    /**
     * Create total score progress container
     *
     * @returns {HTMLDivElement}
     */

  }, {
    key: "addScoreProgress",
    value: function addScoreProgress() {
      var totalInteractions = 0,
          uncompletedInteractions = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.chapters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var chapter = _step.value;
          totalInteractions += chapter.maxTasks;
          uncompletedInteractions += chapter.tasksLeft;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var box = this.createProgress(this.l10n.totalScoreLabel, this.l10n.interactionsProgressSubtext, this.parent.getScore(), this.parent.getMaxScore(), true, Math.max(totalInteractions - uncompletedInteractions, 0), totalInteractions);
      box.classList.add('h5p-interactive-book-summary-progress-container');
      box.classList.add('h5p-interactive-book-summary-score-progress');
      var circle = box.querySelector('.h5p-interactive-book-summary-progress-circle');
      circle.setAttribute('data-empty-fill', "rgb(198, 220, 212)");
      circle.setAttribute('data-fill', JSON.stringify({
        color: '#0e7c57'
      }));
      return box;
    }
    /**
     * Creates the book progress container
     *
     * @return {HTMLDivElement}
     */

  }, {
    key: "addBookProgress",
    value: function addBookProgress() {
      var box = this.createProgress(this.l10n.bookProgress, this.l10n.bookProgressSubtext, this.chapters.filter(function (chapter) {
        return chapter.completed;
      }).length, this.chapters.length);
      box.classList.add("h5p-interactive-book-summary-progress-container");
      box.classList.add("h5p-interactive-book-summary-book-progress");
      return box;
    }
    /**
     * Creates the interactions progress container
     *
     * @return {HTMLDivElement}
     */

  }, {
    key: "addInteractionsProgress",
    value: function addInteractionsProgress() {
      var totalInteractions = 0,
          uncompletedInteractions = 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.chapters[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var chapter = _step2.value;
          totalInteractions += chapter.maxTasks;
          uncompletedInteractions += chapter.tasksLeft;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var box = this.createProgress(this.l10n.interactionsProgress, this.l10n.interactionsProgressSubtext, Math.max(totalInteractions - uncompletedInteractions, 0), totalInteractions);
      box.classList.add("h5p-interactive-book-summary-progress-container");
      box.classList.add("h5p-interactive-book-summary-interactions-progress");
      return box;
    }
    /**
     * Grouping function that creates all the progress containers, if the settings allow it
     */

  }, {
    key: "addProgressIndicators",
    value: function addProgressIndicators() {
      if (!this.behaviour.progressIndicators) {
        return;
      }

      var progressBox = document.createElement("div");
      progressBox.classList.add('h5p-interactive-box-summary-progress');
      progressBox.appendChild(this.addScoreProgress());
      progressBox.appendChild(this.addBookProgress());
      progressBox.appendChild(this.addInteractionsProgress());
      setTimeout(function () {
        return H5P.jQuery('.h5p-interactive-book-summary-progress-circle').circleProgress();
      }, 100);
      this.wrapper.appendChild(progressBox);
    }
    /**
     * Add the container with the action buttons
     */

  }, {
    key: "addActionButtons",
    value: function addActionButtons() {
      var _this4 = this;

      var wrapper = document.createElement("div");
      wrapper.classList.add('h5p-interactive-book-summary-buttons');

      if (H5PIntegration.reportingIsEnabled) {
        var submitButton = this.addButton('icon-paper-pencil', this.l10n.submitReport);
        submitButton.classList.add('h5p-interactive-book-summary-submit');

        submitButton.onclick = function () {
          _this4.trigger('submitted');

          _this4.parent.triggerXAPIScored(_this4.parent.getScore(), _this4.parent.getMaxScore(), 'completed');

          _this4.triggerSkipped();

          _this4.triggerSkippedQuestioneer();

          wrapper.classList.add('submitted');
        };

        wrapper.appendChild(submitButton);
      }

      var lockedPage = this.chaptersWithConfig.find(function (chapter) {
        return chapter.hasOwnProperty('lockPage') && chapter.lockPage === true ? true : false;
      });

      if (lockedPage === undefined) {
        wrapper.appendChild(this.createRestartButton());
      }

      wrapper.appendChild(this.createSubmittedConfirmation());
      this.wrapper.appendChild(wrapper);
    }
    /**
    * Fetch unanswered statements
    */

  }, {
    key: "triggerSkipped",
    value: function triggerSkipped() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.chapters[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var chapter = _step3.value;
          var sections = chapter.sections.filter(function (section) {
            return section.isTask;
          });
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = sections[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var section = _step4.value;

              if (!section.taskDone) {
                this.skippedStatement(section);
              }
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
    /**
     * Fetch unInteracted Questioneer
     */

  }, {
    key: "triggerSkippedQuestioneer",
    value: function triggerSkippedQuestioneer() {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this.chapters[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var chapter = _step5.value;
          var sections = chapter.sections.filter(function (section) {
            return section.content.metadata.contentType == "Questionnaire";
          });
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = sections[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var section = _step6.value;

              if (!section.taskDone) {
                var rwa = this.createXAPIEventTemplate("answered");
                var definition = rwa.getVerifiedStatementValue(['object', 'definition']);

                _extends(definition, {
                  interactionType: 'compound',
                  type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
                  description: {
                    'en-US': ''
                  },
                  name: {
                    'en-US': section.metadata.title
                  }
                });

                rwa.data.statement.object.id = "https://dev.currikistudio.org/h5p/embed/" + section.instance.contentId + "?subContentId=" + section.content.subContentId;
                rwa.data.statement.object.objectType = "Activity";
                rwa.data.statement.verb.id = "http://id.tincanapi.com/verb/skipped";
                rwa.data.statement.verb.display["en-US"] = "skipped";
                this.trigger(rwa);
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
    /**
     * To trigger the XAPI statement
     * @param {*} section 
     */

  }, {
    key: "skippedStatement",
    value: function skippedStatement(section) {
      var api_data = section.instance.getXAPIData();
      console.log(api_data);
      api_data.statement.context.platform = "Google Classroom";
      var rwa = this.createXAPIEventTemplate("answered");
      rwa.data.statement.verb.id = "http://id.tincanapi.com/verb/skipped";
      rwa.data.statement.verb.display["en-US"] = "skipped";
      rwa.data.statement.object = api_data.statement.object;
      rwa.data.statement.context = api_data.statement.context;
      rwa.data.statement.result = api_data.statement.result;
      this.trigger(rwa);
    }
    /**
     * Create the restart button
     * @return {HTMLButtonElement}
     */

  }, {
    key: "createRestartButton",
    value: function createRestartButton() {
      var _this5 = this;

      var restartButton = this.addButton('icon-restart', this.l10n.restartLabel);
      restartButton.classList.add('h5p-interactive-book-summary-restart');

      restartButton.onclick = function () {
        return _this5.parent.resetTask();
      };

      return restartButton;
    }
    /**
     * Create the confirmation box displayed after the user submits the report
     * @return {HTMLDivElement}
     */

  }, {
    key: "createSubmittedConfirmation",
    value: function createSubmittedConfirmation() {
      var submittedContainer = document.createElement("div");
      submittedContainer.classList.add('h5p-interactive-book-summary-submitted');
      var icon = document.createElement("span");
      icon.classList.add('icon-chapter-done');
      icon.classList.add('icon-check-mark');
      submittedContainer.appendChild(icon);
      var text = document.createElement("p");
      text.innerHTML = this.l10n.yourAnswersAreSubmittedForReview;
      submittedContainer.appendChild(text);
      var lockedPage = this.chaptersWithConfig.find(function (chapter) {
        return chapter.hasOwnProperty('lockPage') && chapter.lockPage === true ? true : false;
      });

      if (lockedPage === undefined) {
        submittedContainer.appendChild(this.createRestartButton());
      }

      return submittedContainer;
    }
    /**
     * Function to create the actual button element used for the action buttons
     *
     * @param iconClass
     * @param label
     * @return {HTMLButtonElement}
     */

  }, {
    key: "addButton",
    value: function addButton(iconClass, label) {
      var buttonElement = document.createElement("button");
      buttonElement.type = 'button';
      buttonElement.classList.add('h5p-interactive-book-summary-button');
      buttonElement.innerHTML = label;
      var icon = document.createElement("span");
      icon.classList.add(iconClass);
      icon.setAttribute('aria-hidden', "true");
      buttonElement.appendChild(icon);
      return buttonElement;
    }
    /**
     * Create the overview of the sections
     *
     * @param sections
     * @param chapterId
     * @return {{hasUnansweredInteractions: boolean, sectionElements: []}}
     */

  }, {
    key: "createSectionList",
    value: function createSectionList(sections, chapterId) {
      var _this6 = this;

      var sectionElements = [],
          hasUnansweredInteractions = false;
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        var _loop = function _loop() {
          var section = _step7.value;
          var sectionRow = document.createElement("li");
          sectionRow.classList.add('h5p-interactive-book-summary-overview-section-details');

          if (_this6.behaviour.progressIndicators) {
            var icon = document.createElement("span");
            icon.classList.add('h5p-interactive-book-summary-section-icon');
            icon.classList.add(section.taskDone ? 'icon-chapter-done' : 'icon-chapter-blank');
            sectionRow.appendChild(icon);
          }

          var title = document.createElement("button");
          title.type = "button";
          title.classList.add('h5p-interactive-book-summary-section-title');

          title.onclick = function () {
            var newChapter = {
              h5pbookid: _this6.parent.contentId,
              chapter: "h5p-interactive-book-chapter-".concat(chapterId),
              section: "h5p-interactive-book-section-".concat(section.instance.subContentId)
            };

            _this6.parent.trigger("newChapter", newChapter);
          }; // We can't expect the content type to always have set contentData as a property on their instance


          var contentDataTitle = section.instance.contentData && section.instance.contentData.metadata && section.instance.contentData.metadata.title; // Try to get title from params

          var metadataTitle = section.content && section.content.metadata && section.content.metadata.title;
          title.innerHTML = contentDataTitle ? contentDataTitle : metadataTitle ? metadataTitle : 'Untitled';
          var score = document.createElement("div");
          score.classList.add('h5p-interactive-book-summary-section-score');
          score.innerHTML = '-';

          if (typeof section.instance.getScore === 'function') {
            score.innerHTML = _this6.l10n.scoreText.replace('@score', section.instance.getScore()).replace('@maxscore', section.instance.getMaxScore());
          }

          if (section.taskDone) {
            sectionRow.classList.add('h5p-interactive-book-summary-overview-section-details-task-done');
          } else {
            hasUnansweredInteractions = true;
          }

          sectionRow.appendChild(title);
          sectionRow.appendChild(score);
          sectionElements.push(sectionRow);
        };

        for (var _iterator7 = sections[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      if (sectionElements.length) {
        var sectionRow = document.createElement("div");
        sectionRow.classList.add('h5p-interactive-book-summary-overview-section-score-header');
        var scoreHeader = document.createElement("div");
        scoreHeader.innerHTML = this.l10n.score;
        sectionRow.appendChild(scoreHeader);
        sectionElements.unshift(sectionRow);
      }

      return {
        hasUnansweredInteractions: hasUnansweredInteractions,
        sectionElements: sectionElements
      };
    }
    /**
     * Create the chapter progress container
     *
     * @param chapter
     * @return {HTMLLIElement}
     */

  }, {
    key: "createChapterOverview",
    value: function createChapterOverview(chapter) {
      var _this7 = this;

      var wrapper = document.createElement("li");
      wrapper.classList.add('h5p-interactive-book-summary-overview-section');
      var header = document.createElement("h4");

      header.onclick = function () {
        var newChapter = {
          h5pbookid: _this7.parent.contentId,
          chapter: "h5p-interactive-book-chapter-".concat(chapter.instance.subContentId),
          section: "top"
        };

        _this7.parent.trigger("newChapter", newChapter);
      };

      var chapterTitle = document.createElement("span");
      chapterTitle.innerHTML = chapter.title;
      header.appendChild(chapterTitle);

      if (this.behaviour.progressIndicators) {
        var chapterIcon = document.createElement("span");
        var chapterStatus = this.parent.getChapterStatus(chapter);
        chapterIcon.classList.add("icon-chapter-".concat(chapterStatus.toLowerCase()));
        header.appendChild(chapterIcon);
      }

      wrapper.appendChild(header);

      var _this$createSectionLi = this.createSectionList(chapter.sections.filter(function (section) {
        return section.isTask;
      }), chapter.instance.subContentId),
          sections = _this$createSectionLi.sectionElements,
          hasUnansweredInteractions = _this$createSectionLi.hasUnansweredInteractions;

      if (hasUnansweredInteractions === false) {
        wrapper.classList.add('h5p-interactive-book-summary-no-interactions');
      }

      var sectionSubheader = document.createElement("div");
      sectionSubheader.classList.add('h5p-interactive-book-summary-chapter-subheader');

      if (chapter.maxTasks) {
        sectionSubheader.innerHTML = this.l10n.leftOutOfTotalCompleted.replace('@left', Math.max(chapter.maxTasks - chapter.tasksLeft, 0)).replace('@max', chapter.maxTasks);
      } else {
        sectionSubheader.innerHTML = this.l10n.noInteractions;
      }

      wrapper.appendChild(sectionSubheader);
      var sectionsContainer = document.createElement("ul");

      if (sections.length) {
        sections.map(function (section) {
          return sectionsContainer.appendChild(section);
        });
      }

      wrapper.appendChild(sectionsContainer);
      return wrapper;
    }
    /**
     * Create the dropdown menu to filter sections by interactions
     *
     * @return {HTMLDivElement}
     */

  }, {
    key: "createFilterDropdown",
    value: function createFilterDropdown() {
      var _this8 = this;

      var createElement = function createElement(text, value) {
        var listElement = document.createElement("li");
        listElement.role = "menuitem";
        var actionButton = document.createElement("button");
        actionButton.textContent = text;
        actionButton.type = "button";

        actionButton.onclick = function (event) {
          _this8.setFilter(value);

          container.removeAttribute('active');
          selectButton.setAttribute('aria-expanded', "false");
          buttonText.textContent = event.currentTarget.innerHTML;
        };

        listElement.appendChild(actionButton);
        return listElement;
      };

      var container = document.createElement("div");
      container.classList.add('h5p-interactive-book-summary-dropdown');
      var selectButton = document.createElement("button");
      selectButton.setAttribute('aria-haspopup', "true");
      selectButton.setAttribute('aria-expanded', "false");
      selectButton.type = 'button';

      selectButton.onclick = function () {
        if (container.hasAttribute('active')) {
          container.removeAttribute('active');
          selectButton.setAttribute('aria-expanded', "false");
        } else {
          container.setAttribute('active', "");
          selectButton.setAttribute('aria-expanded', "true");
          selectButton.focus();
        }
      };

      var buttonText = document.createElement("span");
      buttonText.textContent = this.l10n.allInteractions;
      selectButton.appendChild(buttonText);
      var caretIcon = document.createElement("span");
      caretIcon.classList.add('h5p-interactive-book-summary-dropdown-icon');
      caretIcon.classList.add('icon-expanded');
      caretIcon.setAttribute('aria-hidden', "true");
      selectButton.appendChild(caretIcon);
      var dropdownMenu = document.createElement("ul");
      dropdownMenu.role = "menu";
      dropdownMenu.classList.add('h5p-interactive-book-summary-dropdown-menu');
      var allInteractions = createElement(this.l10n.allInteractions, this.filterActionAll);
      var unansweredInteractions = createElement(this.l10n.unansweredInteractions, this.filterActionUnanswered);
      dropdownMenu.appendChild(allInteractions);
      dropdownMenu.appendChild(unansweredInteractions);
      container.appendChild(selectButton);
      container.appendChild(dropdownMenu);
      return container;
    }
    /**
     * Add the container for the list of chapters and sections
     */

  }, {
    key: "addSummaryOverview",
    value: function addSummaryOverview() {
      var wrapper = document.createElement("ul");
      wrapper.classList.add('h5p-interactive-book-summary-list');
      var summaryHeader = document.createElement("li");
      summaryHeader.classList.add('h5p-interactive-book-summary-overview-header');
      var header = document.createElement("h3");
      header.innerHTML = this.l10n.summaryHeader;
      summaryHeader.appendChild(header);
      summaryHeader.appendChild(this.createFilterDropdown());
      wrapper.appendChild(summaryHeader);
      var summaryList = document.createElement("ol");
      summaryList.classList.add('h5p-interactive-book-summary-overview-list');
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = this.chapters[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var chapter = _step8.value;
          summaryList.appendChild(this.createChapterOverview(chapter));
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      var emptySummaryList = document.createElement("p");
      emptySummaryList.classList.add('h5p-interactive-book-summary-overview-list-empty');
      emptySummaryList.classList.add('h5p-interactive-book-summary-top-section');
      emptySummaryList.classList.add('h5p-interactive-book-summary-bottom-section');
      emptySummaryList.innerHTML = this.l10n.noInteractions;
      summaryList.appendChild(emptySummaryList);
      wrapper.appendChild(summaryList);
      this.wrapper.appendChild(wrapper);
    }
    /**
     * Add the score bar for the book
     */

  }, {
    key: "addScoreBar",
    value: function addScoreBar() {
      var scorebar = document.createElement("div");
      scorebar.classList.add('h5p-interactive-book-summary-score-bar');
      var scoreBar = H5P.JoubelUI.createScoreBar(this.parent.getMaxScore());
      scoreBar.setScore(this.parent.getScore());
      scoreBar.appendTo(scorebar);
      this.wrapper.appendChild(scorebar);
    }
    /**
     * Add a container to display when no interactions are made in the book
     */

  }, {
    key: "noChapterInteractions",
    value: function noChapterInteractions() {
      var wrapper = document.createElement("div");
      wrapper.classList.add('h5p-interactive-book-summary-no-chapter-interactions');
      var boldText = document.createElement('p');
      boldText.innerHTML = this.l10n.noChapterInteractionBoldText;
      var normalText = document.createElement('p');
      normalText.classList.add('h5p-interactive-book-summary-no-initialized-chapters');
      normalText.innerHTML = this.l10n.noChapterInteractionText;
      wrapper.appendChild(boldText);
      wrapper.appendChild(normalText);
      this.wrapper.appendChild(wrapper);
    }
    /**
     * Add the summary page to a container
     *
     * @param {jQuery} container
     * @return {jQuery}
     */

  }, {
    key: "addSummaryPage",
    value: function addSummaryPage(container) {
      this.wrapper = document.createElement('div');
      this.wrapper.classList.add('h5p-interactive-book-summary-page');

      if (this.chapters.filter(function (chapter) {
        return chapter.isInitialized;
      }).length > 0) {
        this.addProgressIndicators();
        this.addActionButtons();
        this.addSummaryOverview();
        this.addScoreBar();
      } else {
        this.noChapterInteractions();
      }

      Array.from(document.querySelectorAll('.h5p-interactive-book-summary-footer')).forEach(function (element) {
        return element.remove();
      });
      container.append(this.wrapper);
      return container;
    }
  }]);

  return Summary;
}(H5P.EventDispatcher);

/* harmony default export */ __webpack_exports__["default"] = (Summary);

/***/ }),

/***/ "./src/scripts/urltools.js":
/*!*********************************!*\
  !*** ./src/scripts/urltools.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Class representing URL related functions */
var URLTools =
/*#__PURE__*/
function () {
  function URLTools() {
    _classCallCheck(this, URLTools);
  }

  _createClass(URLTools, null, [{
    key: "extractFragmentsFromURL",

    /**
     * Extract fragments from browser URL.
     *
     * @return {object} Fragments.
     */
    value: function extractFragmentsFromURL(validate, hashWindow) {
      if (!hashWindow.location.hash) {
        return {};
      } // Convert fragment string to object with properties


      var fragments = {};
      hashWindow.location.hash.replace('#', '').split('&').forEach(function (fragment) {
        if (fragment.indexOf('=') === -1) {
          return; // Skip if incomplete pair
        }

        var argPair = fragment.split('=');
        fragments[argPair[0]] = argPair[1];
      }); // Optionally validate and ignore fragments

      if (typeof validate === 'function' && !validate(fragments)) {
        return {};
      }

      return fragments;
    }
    /**
     * Create fragments string from fragments object.
     *
     * @param {object} fragments Fragments.
     * @return {string} Fragments string.
     */

  }, {
    key: "createFragmentsString",
    value: function createFragmentsString(fragments) {
      var parts = [];

      for (var fragment in fragments) {
        parts.push("".concat(fragment, "=").concat(fragments[fragment]));
      }

      return "#".concat(parts.join('&'));
    }
    /**
     * Determine whether two fragment objects are equal.
     *
     * @param {object} fragment1 Fragment 1.
     * @param {object} fragment2 Fragment 2.
     * @param {string[]} [limitTo] Keys to limit equality check to.
     * @return {boolean} True, if fragments are equal.
     */

  }, {
    key: "areFragmentsEqual",
    value: function areFragmentsEqual(fragment1, fragment2) {
      var limitTo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      for (var key in fragment1) {
        if (fragment1.hasOwnProperty(key)) {
          if (limitTo.length > 0 && limitTo.indexOf(key) === -1) {
            continue;
          }

          if (!fragment2[key] || fragment1[key].toString() !== fragment2[key].toString()) {
            return false;
          }
        }
      }

      return true;
    }
  }]);

  return URLTools;
}();

/* harmony default export */ __webpack_exports__["default"] = (URLTools);

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/main.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/style.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "jquery":
/*!*****************************!*\
  !*** external "H5P.jQuery" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = H5P.jQuery;

/***/ })

/******/ });