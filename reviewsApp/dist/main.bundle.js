webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	//# Providers provided by Angular
	var platform_browser_dynamic_1 = __webpack_require__(309);
	//## Platform and Environment
	//
	//** our providers/directives/pipes **
	var browser_1 = __webpack_require__(485);
	var environment_1 = __webpack_require__(488);
	//## App Component
	//
	//** our top level component that holds all of our components **
	var app_1 = __webpack_require__(482);
	// Bootstrap our Angular app with a top level component `App` and inject
	// our Services and Providers into Angular's dependency injection
	function main(initialHmrState) {
	    return platform_browser_dynamic_1.bootstrap(app_1.App, browser_1.PROVIDERS.concat(environment_1.ENV_PROVIDERS, browser_1.DIRECTIVES, browser_1.PIPES, app_1.APP_PROVIDERS, app_1.APP_STORES))
	        .catch(function (err) { return console.error(err); });
	}
	exports.main = main;
	//## Vendors
	//
	// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
	// You can also import them in vendors to ensure that they are bundled in one file
	// Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
	//## Hot Module Reload
	//
	// experimental version
	if (false) {
	    // activate hot module reload
	    var ngHmr = require('angular2-hmr');
	    ngHmr.hotModuleReplacement(main, module);
	}
	else {
	    // bootstrap when documetn is ready
	    document.addEventListener('DOMContentLoaded', function () { return main(); });
	}
	

/***/ },

/***/ 129:
/***/ function(module, exports) {

	"use strict";
	var OpaqueToken = (function () {
	    function OpaqueToken(_desc) {
	        this._desc = _desc;
	    }
	    OpaqueToken.prototype.toString = function () { return "Token " + this._desc; };
	    return OpaqueToken;
	}());
	exports.OpaqueToken = OpaqueToken;
	exports.HMR_STATE = new OpaqueToken('hmrState');
	var HmrStore = (function () {
	    function HmrStore() {
	    }
	    HmrStore.set = function (prop, value) {
	        HmrStore._state[prop] = value;
	        return HmrStore._state[prop];
	    };
	    HmrStore.get = function (prop) {
	        return HmrStore._state[prop];
	    };
	    HmrStore.select = function (name, getState) {
	        HmrStore._states.push({ name: name, getState: getState });
	        var defaultData = getState();
	        var currentData = HmrStore.get(name);
	        if (defaultData && !currentData) {
	            return HmrStore.set(name, defaultData);
	        }
	        else if (defaultData && currentData) {
	            return HmrStore.set(name, Object.assign({}, defaultData, currentData));
	        }
	        else {
	            return HmrStore.set(name, currentData || defaultData);
	        }
	    };
	    HmrStore.dispose = function () {
	        HmrStore._states = [];
	        HmrStore._state = {};
	        HmrStore._initialValues = {};
	    };
	    HmrStore.getState = function () {
	        var initialState = Object.assign({}, HmrStore._state);
	        return HmrStore._states
	            .reduce(function (memo, item) {
	            memo[item.name] = item.getState();
	            return memo;
	        }, initialState);
	    };
	    HmrStore.toJSON = function () {
	        return HmrStore.getState();
	    };
	    HmrStore.dev = false;
	    HmrStore._state = {};
	    HmrStore._initialValues = {};
	    HmrStore._states = [];
	    return HmrStore;
	}());
	exports.HmrStore = HmrStore;
	

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var angular2_hmr_1 = __webpack_require__(544);
	var AppState = (function () {
	    function AppState() {
	        // `HmrState` is used by `HMR` to track the any `state` during reloading
	        this._state = {};
	    }
	    Object.defineProperty(AppState.prototype, "state", {
	        // Already return a `clone` of the current `state`
	        get: function () {
	            return this._state = this._clone(this._state);
	        },
	        // Never allow mutation
	        set: function (value) {
	            throw new Error('Do not mutate the `.state` directly!');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AppState.prototype.get = function (prop) {
	        // Use our `state` getter for the `clone`
	        var state = this.state;
	        return state[prop] || state;
	    };
	    AppState.prototype.set = function (prop, value) {
	        // Internally mutate our `state`
	        return this._state[prop] = value;
	    };
	    AppState.prototype._clone = function (object) {
	        // Simple object `clone`
	        return JSON.parse(JSON.stringify(object));
	    };
	    __decorate([
	        angular2_hmr_1.HmrState(), 
	        __metadata('design:type', Object)
	    ], AppState.prototype, "_state", void 0);
	    AppState = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], AppState);
	    return AppState;
	}());
	exports.AppState = AppState;
	

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(375)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nhtml,\nbody {\n  height: 100%;\n  background: #F4FAFA; }\n\nbody {\n  margin: 0; }\n\nmd-card {\n  margin: 25px; }\n\n/**\n * Set up a decent box model on the root element\n */\nhtml {\n  box-sizing: border-box; }\n\n/**\n * Make all elements from the DOM inherit from the parent box-sizing\n * Since `*` has a specificity of 0, it does not override the `html` value\n * making all elements inheriting from the root box-sizing value\n * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/\n */\n*, *::before, *::after {\n  box-sizing: inherit; }\n\n/**\n * Basic styles for links\n */\na {\n  color: #e50050;\n  text-decoration: none; }\n  a:hover, a:active, a:focus {\n    color: #222222;\n    text-decoration: underline; }\n\n.margin-15 {\n  margin: 15px !important; }\n\n.margin-20 {\n  margin: 20px !important; }\n\n/**\n * Basic typography style for copy text\n */\nbody {\n  color: #222222;\n  font: normal 125%/1.4 \"Open Sans\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; }\n\n/**\n * Clear inner floats\n */\n.clearfix::after {\n  clear: both;\n  content: '';\n  display: table; }\n\n/**\n * Main content containers\n * 1. Make the container full-width with a maximum width\n * 2. Center it in the viewport\n * 3. Leave some space on the edges, especially valuable on small screens\n */\n.container {\n  max-width: 1180px;\n  /* 1 */\n  margin-left: auto;\n  /* 2 */\n  margin-right: auto;\n  /* 2 */\n  padding-left: 20px;\n  /* 3 */\n  padding-right: 20px;\n  /* 3 */\n  width: 100%;\n  /* 1 */ }\n\n/**\n * Hide text while making it readable for screen readers\n * 1. Needed in WebKit-based browsers because of an implementation bug;\n *    See: https://code.google.com/p/chromium/issues/detail?id=457146\n */\n.hide-text {\n  overflow: hidden;\n  padding: 0;\n  /* 1 */\n  text-indent: 101%;\n  white-space: nowrap; }\n\n/**\n * Hide element while making it readable for screen readers\n * Shamelessly borrowed from HTML5Boilerplate:\n * https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L119-L133\n */\n.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\nmd-toolbar ul {\n  display: inline;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 60px; }\n\nmd-toolbar li {\n  display: inline; }\n\nmd-toolbar li.active {\n  background-color: lightgray; }\n\nfooter {\n  flex: 0 0 60px;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff; }\n\nbutton.active {\n  background: #fff;\n  color: #009688; }\n\nbutton.active:hover {\n  color: #fff; }\n\n.fill {\n  flex: 1 1 auto; }\n\n.app-state {\n  margin: 15px;\n  flex: 1;\n  max-height: 9.969rem; }\n\n.home {\n  flex: 1; }\n\nmd-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.card-container {\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n  border: 2px dashed #FBC02D; }\n\n.sample-content {\n  flex: 1; }\n\n.card-container md-card {\n  margin: 5px; }\n\n/*\n * Start Bootstrap - Landing Page (http://startbootstrap.com/)\n * Copyright 2013-2016 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n */\nbody,\nhtml {\n  width: 100%;\n  height: 100%; }\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Lato\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-weight: 700; }\n\n.topnav {\n  font-size: 14px; }\n\n.lead {\n  font-size: 18px;\n  font-weight: 400; }\n\n.intro-header {\n  padding-top: 50px;\n  /* If you're making other pages, make sure there is 50px of padding to make sure the navbar doesn't overlap content! */\n  padding-bottom: 50px;\n  text-align: center;\n  color: #f8f8f8;\n  background: url(" + __webpack_require__(493) + ") no-repeat center center;\n  background-size: cover;\n  position: relative; }\n  .intro-header .search-section {\n    background-color: rgba(0, 0, 0, 0.3);\n    position: absolute;\n    bottom: 0;\n    height: 100px;\n    width: 100%;\n    padding: 30px 0; }\n\n.intro-message {\n  position: relative;\n  padding-top: 10%;\n  padding-bottom: 10%; }\n\n.intro-message > h1 {\n  margin: 0;\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n  font-size: 5em; }\n\n.intro-divider {\n  width: 400px;\n  border-top: 1px solid #f8f8f8;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2); }\n\n.intro-message > h3 {\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6); }\n\n@media (max-width: 767px) {\n  .intro-message {\n    padding-bottom: 15%; }\n  .intro-message > h1 {\n    font-size: 3em; }\n  ul.intro-social-buttons > li {\n    display: block;\n    margin-bottom: 20px;\n    padding: 0; }\n  ul.intro-social-buttons > li:last-child {\n    margin-bottom: 0; }\n  .intro-divider {\n    width: 100%; } }\n\n.network-name {\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 2px; }\n\n.content-section-a {\n  padding: 50px 0;\n  background-color: #f8f8f8; }\n\n.content-section-b {\n  padding: 50px 0;\n  border-top: 1px solid #e7e7e7;\n  border-bottom: 1px solid #e7e7e7; }\n\n.section-heading {\n  margin-bottom: 30px; }\n\n.section-heading-spacer {\n  float: left;\n  width: 200px;\n  border-top: 3px solid #e7e7e7; }\n\n.banner {\n  padding: 100px 0;\n  color: #f8f8f8;\n  background: url(" + __webpack_require__(492) + ") no-repeat center center;\n  background-size: cover; }\n\n.banner h2 {\n  margin: 0;\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n  font-size: 3em; }\n\n.banner ul {\n  margin-bottom: 0; }\n\n.banner-social-buttons {\n  float: right;\n  margin-top: 0; }\n\n@media (max-width: 1199px) {\n  ul.banner-social-buttons {\n    float: left;\n    margin-top: 15px; } }\n\n@media (max-width: 767px) {\n  .banner h2 {\n    margin: 0;\n    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n    font-size: 3em; }\n  ul.banner-social-buttons > li {\n    display: block;\n    margin-bottom: 20px;\n    padding: 0; }\n  ul.banner-social-buttons > li:last-child {\n    margin-bottom: 0; } }\n\nfooter {\n  padding: 50px 0;\n  background-color: #f5f5f5; }\n\np.copyright {\n  margin: 15px 0 0; }\n\n.no-margin {\n  margin: 0; }\n", ""]);

	// exports


/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(91);
	var error_1 = __webpack_require__(73);
	var Observable_1 = __webpack_require__(10);
	__webpack_require__(512);
	__webpack_require__(513);
	__webpack_require__(339);
	__webpack_require__(516);
	__webpack_require__(515);
	__webpack_require__(519);
	__webpack_require__(517);
	__webpack_require__(514);
	/** Exception thrown when attempting to load an icon with a name that cannot be found. */
	var MdIconNameNotFoundError = (function (_super) {
	    __extends(MdIconNameNotFoundError, _super);
	    function MdIconNameNotFoundError(iconName) {
	        _super.call(this, "Unable to find icon with the name \"" + iconName + "\"");
	    }
	    return MdIconNameNotFoundError;
	}(error_1.MdError));
	exports.MdIconNameNotFoundError = MdIconNameNotFoundError;
	/**
	 * Exception thrown when attempting to load SVG content that does not contain the expected
	 * <svg> tag.
	 */
	var MdIconSvgTagNotFoundError = (function (_super) {
	    __extends(MdIconSvgTagNotFoundError, _super);
	    function MdIconSvgTagNotFoundError() {
	        _super.call(this, '<svg> tag not found');
	    }
	    return MdIconSvgTagNotFoundError;
	}(error_1.MdError));
	exports.MdIconSvgTagNotFoundError = MdIconSvgTagNotFoundError;
	/**
	  * Configuration for an icon, including the URL and possibly the cached SVG element.
	  * @internal
	  */
	var SvgIconConfig = (function () {
	    function SvgIconConfig(url) {
	        this.url = url;
	        this.svgElement = null;
	    }
	    return SvgIconConfig;
	}());
	/** Returns the cache key to use for an icon namespace and name. */
	var iconKey = function (namespace, name) { return namespace + ':' + name; };
	/**
	 * Service to register and display icons used by the <md-icon> component.
	 * - Registers icon URLs by namespace and name.
	 * - Registers icon set URLs by namespace.
	 * - Registers aliases for CSS classes, for use with icon fonts.
	 * - Loads icons from URLs and extracts individual icons from icon sets.
	 */
	var MdIconRegistry = (function () {
	    function MdIconRegistry(_http) {
	        this._http = _http;
	        /**
	         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
	         */
	        this._svgIconConfigs = new Map();
	        /**
	         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
	         * Multiple icon sets can be registered under the same namespace.
	         */
	        this._iconSetConfigs = new Map();
	        /** Cache for icons loaded by direct URLs. */
	        this._cachedIconsByUrl = new Map();
	        /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
	        this._inProgressUrlFetches = new Map();
	        /** Map from font identifiers to their CSS class names. Used for icon fonts. */
	        this._fontCssClassesByAlias = new Map();
	        /**
	         * The CSS class to apply when an <md-icon> component has no icon name, url, or font specified.
	         * The default 'material-icons' value assumes that the material icon font has been loaded as
	         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
	         */
	        this._defaultFontSetClass = 'material-icons';
	    }
	    /** Registers an icon by URL in the default namespace. */
	    MdIconRegistry.prototype.addSvgIcon = function (iconName, url) {
	        return this.addSvgIconInNamespace('', iconName, url);
	    };
	    /** Registers an icon by URL in the specified namespace. */
	    MdIconRegistry.prototype.addSvgIconInNamespace = function (namespace, iconName, url) {
	        var key = iconKey(namespace, iconName);
	        this._svgIconConfigs.set(key, new SvgIconConfig(url));
	        return this;
	    };
	    /** Registers an icon set by URL in the default namespace. */
	    MdIconRegistry.prototype.addSvgIconSet = function (url) {
	        return this.addSvgIconSetInNamespace('', url);
	    };
	    /** Registers an icon set by URL in the specified namespace. */
	    MdIconRegistry.prototype.addSvgIconSetInNamespace = function (namespace, url) {
	        var config = new SvgIconConfig(url);
	        if (this._iconSetConfigs.has(namespace)) {
	            this._iconSetConfigs.get(namespace).push(config);
	        }
	        else {
	            this._iconSetConfigs.set(namespace, [config]);
	        }
	        return this;
	    };
	    /**
	     * Defines an alias for a CSS class name to be used for icon fonts. Creating an mdIcon
	     * component with the alias as the fontSet input will cause the class name to be applied
	     * to the <md-icon> element.
	     */
	    MdIconRegistry.prototype.registerFontClassAlias = function (alias, className) {
	        if (className === void 0) { className = alias; }
	        this._fontCssClassesByAlias.set(alias, className);
	        return this;
	    };
	    /**
	     * Returns the CSS class name associated with the alias by a previous call to
	     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
	     */
	    MdIconRegistry.prototype.classNameForFontAlias = function (alias) {
	        return this._fontCssClassesByAlias.get(alias) || alias;
	    };
	    /**
	     * Sets the CSS class name to be used for icon fonts when an <md-icon> component does not
	     * have a fontSet input value, and is not loading an icon by name or URL.
	     */
	    MdIconRegistry.prototype.setDefaultFontSetClass = function (className) {
	        this._defaultFontSetClass = className;
	        return this;
	    };
	    /**
	     * Returns the CSS class name to be used for icon fonts when an <md-icon> component does not
	     * have a fontSet input value, and is not loading an icon by name or URL.
	     */
	    MdIconRegistry.prototype.getDefaultFontSetClass = function () {
	        return this._defaultFontSetClass;
	    };
	    /**
	     * Returns an Observable that produces the icon (as an <svg> DOM element) from the given URL.
	     * The response from the URL may be cached so this will not always cause an HTTP request, but
	     * the produced element will always be a new copy of the originally fetched icon. (That is,
	     * it will not contain any modifications made to elements previously returned).
	     */
	    MdIconRegistry.prototype.getSvgIconFromUrl = function (url) {
	        var _this = this;
	        if (this._cachedIconsByUrl.has(url)) {
	            return Observable_1.Observable.of(cloneSvg(this._cachedIconsByUrl.get(url)));
	        }
	        return this._loadSvgIconFromConfig(new SvgIconConfig(url))
	            .do(function (svg) { return _this._cachedIconsByUrl.set(url, svg); })
	            .map(function (svg) { return cloneSvg(svg); });
	    };
	    /**
	     * Returns an Observable that produces the icon (as an <svg> DOM element) with the given name
	     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
	     * if not, the Observable will throw an MdIconNameNotFoundError.
	     */
	    MdIconRegistry.prototype.getNamedSvgIcon = function (name, namespace) {
	        if (namespace === void 0) { namespace = ''; }
	        // Return (copy of) cached icon if possible.
	        var key = iconKey(namespace, name);
	        if (this._svgIconConfigs.has(key)) {
	            return this._getSvgFromConfig(this._svgIconConfigs.get(key));
	        }
	        // See if we have any icon sets registered for the namespace.
	        var iconSetConfigs = this._iconSetConfigs.get(namespace);
	        if (iconSetConfigs) {
	            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
	        }
	        return Observable_1.Observable.throw(new MdIconNameNotFoundError(key));
	    };
	    /**
	     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
	     */
	    MdIconRegistry.prototype._getSvgFromConfig = function (config) {
	        if (config.svgElement) {
	            // We already have the SVG element for this icon, return a copy.
	            return Observable_1.Observable.of(cloneSvg(config.svgElement));
	        }
	        else {
	            // Fetch the icon from the config's URL, cache it, and return a copy.
	            return this._loadSvgIconFromConfig(config)
	                .do(function (svg) { return config.svgElement = svg; })
	                .map(function (svg) { return cloneSvg(svg); });
	        }
	    };
	    /**
	     * Attempts to find an icon with the specified name in any of the SVG icon sets.
	     * First searches the available cached icons for a nested element with a matching name, and
	     * if found copies the element to a new <svg> element. If not found, fetches all icon sets
	     * that have not been cached, and searches again after all fetches are completed.
	     * The returned Observable produces the SVG element if possible, and throws
	     * MdIconNameNotFoundError if no icon with the specified name can be found.
	     */
	    MdIconRegistry.prototype._getSvgFromIconSetConfigs = function (name, iconSetConfigs) {
	        var _this = this;
	        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
	        // requested name.
	        var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
	        if (namedIcon) {
	            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
	            // time anyway, there's probably not much advantage compared to just always extracting
	            // it from the icon set.
	            return Observable_1.Observable.of(namedIcon);
	        }
	        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
	        // fetched, fetch them now and look for iconName in the results.
	        var iconSetFetchRequests = iconSetConfigs
	            .filter(function (iconSetConfig) { return !iconSetConfig.svgElement; })
	            .map(function (iconSetConfig) {
	            return _this._loadSvgIconSetFromConfig(iconSetConfig)
	                .catch(function (err, caught) {
	                // Swallow errors fetching individual URLs so the combined Observable won't
	                // necessarily fail.
	                console.log("Loading icon set URL: " + iconSetConfig.url + " failed: " + err);
	                return Observable_1.Observable.of(null);
	            })
	                .do(function (svg) {
	                // Cache SVG element.
	                if (svg) {
	                    iconSetConfig.svgElement = svg;
	                }
	            });
	        });
	        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
	        // cached SVG element (unless the request failed), and we can check again for the icon.
	        return Observable_1.Observable.forkJoin(iconSetFetchRequests)
	            .map(function (ignoredResults) {
	            var foundIcon = _this._extractIconWithNameFromAnySet(name, iconSetConfigs);
	            if (!foundIcon) {
	                throw new MdIconNameNotFoundError(name);
	            }
	            return foundIcon;
	        });
	    };
	    /**
	     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
	     * tag matches the specified name. If found, copies the nested element to a new SVG element and
	     * returns it. Returns null if no matching element is found.
	     */
	    MdIconRegistry.prototype._extractIconWithNameFromAnySet = function (iconName, iconSetConfigs) {
	        // Iterate backwards, so icon sets added later have precedence.
	        for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
	            var config = iconSetConfigs[i];
	            if (config.svgElement) {
	                var foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName, config);
	                if (foundIcon) {
	                    return foundIcon;
	                }
	            }
	        }
	        return null;
	    };
	    /**
	     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
	     * from it.
	     */
	    MdIconRegistry.prototype._loadSvgIconFromConfig = function (config) {
	        var _this = this;
	        return this._fetchUrl(config.url)
	            .map(function (svgText) { return _this._createSvgElementForSingleIcon(svgText, config); });
	    };
	    /**
	     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
	     * from it.
	     */
	    MdIconRegistry.prototype._loadSvgIconSetFromConfig = function (config) {
	        var _this = this;
	        // TODO: Document that icons should only be loaded from trusted sources.
	        return this._fetchUrl(config.url)
	            .map(function (svgText) { return _this._svgElementFromString(svgText); });
	    };
	    /**
	     * Creates a DOM element from the given SVG string, and adds default attributes.
	     */
	    MdIconRegistry.prototype._createSvgElementForSingleIcon = function (responseText, config) {
	        var svg = this._svgElementFromString(responseText);
	        this._setSvgAttributes(svg, config);
	        return svg;
	    };
	    /**
	     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
	     * tag matches the specified name. If found, copies the nested element to a new SVG element and
	     * returns it. Returns null if no matching element is found.
	     */
	    MdIconRegistry.prototype._extractSvgIconFromSet = function (iconSet, iconName, config) {
	        var iconNode = iconSet.querySelector('#' + iconName);
	        if (!iconNode) {
	            return null;
	        }
	        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
	        // the content of a new <svg> node.
	        if (iconNode.tagName.toLowerCase() == 'svg') {
	            return this._setSvgAttributes(iconNode.cloneNode(true), config);
	        }
	        // createElement('SVG') doesn't work as expected; the DOM ends up with
	        // the correct nodes, but the SVG content doesn't render. Instead we
	        // have to create an empty SVG node using innerHTML and append its content.
	        // Elements created using DOMParser.parseFromString have the same problem.
	        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
	        var svg = this._svgElementFromString('<svg></svg>');
	        // Clone the node so we don't remove it from the parent icon set element.
	        svg.appendChild(iconNode.cloneNode(true));
	        return this._setSvgAttributes(svg, config);
	    };
	    /**
	     * Creates a DOM element from the given SVG string.
	     */
	    MdIconRegistry.prototype._svgElementFromString = function (str) {
	        // TODO: Is there a better way than innerHTML? Renderer doesn't appear to have a method for
	        // creating an element from an HTML string.
	        var div = document.createElement('DIV');
	        div.innerHTML = str;
	        var svg = div.querySelector('svg');
	        if (!svg) {
	            throw new MdIconSvgTagNotFoundError();
	        }
	        return svg;
	    };
	    /**
	     * Sets the default attributes for an SVG element to be used as an icon.
	     */
	    MdIconRegistry.prototype._setSvgAttributes = function (svg, config) {
	        if (!svg.getAttribute('xmlns')) {
	            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	        }
	        svg.setAttribute('fit', '');
	        svg.setAttribute('height', '100%');
	        svg.setAttribute('width', '100%');
	        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
	        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
	        return svg;
	    };
	    /**
	     * Returns an Observable which produces the string contents of the given URL. Results may be
	     * cached, so future calls with the same URL may not cause another HTTP request.
	     */
	    MdIconRegistry.prototype._fetchUrl = function (url) {
	        var _this = this;
	        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
	        // already a request in progress for that URL. It's necessary to call share() on the
	        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
	        if (this._inProgressUrlFetches.has(url)) {
	            return this._inProgressUrlFetches.get(url);
	        }
	        // TODO(jelbourn): for some reason, the `finally` operator "loses" the generic type on the
	        // Observable. Figure out why and fix it.
	        var req = this._http.get(url)
	            .map(function (response) { return response.text(); })
	            .finally(function () {
	            _this._inProgressUrlFetches.delete(url);
	        })
	            .share();
	        this._inProgressUrlFetches.set(url, req);
	        return req;
	    };
	    MdIconRegistry = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], MdIconRegistry);
	    return MdIconRegistry;
	}());
	exports.MdIconRegistry = MdIconRegistry;
	/** Clones an SVGElement while preserving type information. */
	function cloneSvg(svg) {
	    return svg.cloneNode(true);
	}
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-IydvmmBU.tmp/0/components/icon/icon-registry.js.map

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var button_1 = __webpack_require__(227);
	var card_1 = __webpack_require__(228);
	var checkbox_1 = __webpack_require__(229);
	var grid_list_1 = __webpack_require__(142);
	var icon_1 = __webpack_require__(384);
	var input_1 = __webpack_require__(232);
	var list_1 = __webpack_require__(233);
	var progress_bar_1 = __webpack_require__(234);
	var progress_circle_1 = __webpack_require__(235);
	var radio_1 = __webpack_require__(236);
	var sidenav_1 = __webpack_require__(238);
	var slide_toggle_1 = __webpack_require__(239);
	var tabs_1 = __webpack_require__(240);
	var toolbar_1 = __webpack_require__(241);
	/*
	 * we are grouping the module so we only need to manage the imports in one location
	 */
	exports.MATERIAL_PIPES = [];
	exports.MATERIAL_DIRECTIVES = [
	    button_1.MdAnchor,
	    button_1.MdButton,
	    checkbox_1.MdCheckbox,
	    icon_1.MdIcon,
	    progress_bar_1.MdProgressBar,
	    progress_circle_1.MdProgressCircle,
	    radio_1.MdRadioButton,
	    radio_1.MdRadioGroup,
	    progress_circle_1.MdSpinner,
	    toolbar_1.MdToolbar
	].concat(card_1.MD_CARD_DIRECTIVES, grid_list_1.MD_GRID_LIST_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, sidenav_1.MD_SIDENAV_DIRECTIVES, slide_toggle_1.MD_SLIDE_TOGGLE_DIRECTIVES, tabs_1.MD_TABS_DIRECTIVES);
	exports.MATERIAL_PROVIDERS = [
	    icon_1.MdIconRegistry,
	    radio_1.MdRadioDispatcher
	];
	

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(10);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var EmptyObservable = (function (_super) {
	    __extends(EmptyObservable, _super);
	    function EmptyObservable(scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits a complete notification.
	     *
	     * <span class="informal">Just emits 'complete', and nothing else.
	     * </span>
	     *
	     * <img src="./img/empty.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the complete notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then complete.</caption>
	     * var result = Rx.Observable.empty().startWith(7);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
	     * );
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link never}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the complete notification.
	     * @return {Observable} An "empty" Observable: emits only the complete
	     * notification.
	     * @static true
	     * @name empty
	     * @owner Observable
	     */
	    EmptyObservable.create = function (scheduler) {
	        return new EmptyObservable(scheduler);
	    };
	    EmptyObservable.dispatch = function (arg) {
	        var subscriber = arg.subscriber;
	        subscriber.complete();
	    };
	    EmptyObservable.prototype._subscribe = function (subscriber) {
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	        }
	        else {
	            subscriber.complete();
	        }
	    };
	    return EmptyObservable;
	}(Observable_1.Observable));
	exports.EmptyObservable = EmptyObservable;
	//# sourceMappingURL=EmptyObservable.js.map

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var error_1 = __webpack_require__(73);
	var icon_registry_1 = __webpack_require__(231);
	var icon_registry_2 = __webpack_require__(231);
	exports.MdIconRegistry = icon_registry_2.MdIconRegistry;
	/** Exception thrown when an invalid icon name is passed to an md-icon component. */
	var MdIconInvalidNameError = (function (_super) {
	    __extends(MdIconInvalidNameError, _super);
	    function MdIconInvalidNameError(iconName) {
	        _super.call(this, "Invalid icon name: \"" + name + "\"");
	    }
	    return MdIconInvalidNameError;
	}(error_1.MdError));
	exports.MdIconInvalidNameError = MdIconInvalidNameError;
	/**
	 * Component to display an icon. It can be used in the following ways:
	 * - Specify the svgSrc input to load an SVG icon from a URL. The SVG content is directly inlined
	 *   as a child of the <md-icon> component, so that CSS styles can easily be applied to it.
	 *   The URL is loaded via an XMLHttpRequest, so it must be on the same domain as the page or its
	 *   server must be configured to allow cross-domain requests.
	 *   Example:
	 *     <md-icon svgSrc="assets/arrow.svg"></md-icon>
	 *
	 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
	 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
	 *   MdIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
	 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
	 *   Examples:
	 *     <md-icon svgIcon="left-arrow"></md-icon>
	 *     <md-icon svgIcon="animals:cat"></md-icon>
	 *
	 * - Use a font ligature as an icon by putting the ligature text in the content of the <md-icon>
	 *   component. By default the Material icons font is used as described at
	 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
	 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
	 *   desired font, or to an alias previously registered with MdIconRegistry.registerFontClassAlias.
	 *   Examples:
	 *     <md-icon>home</md-icon>
	 *     <md-icon fontSet="myfont">sun</md-icon>
	 *
	 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
	 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
	 *   CSS class which causes the glyph to be displayed via a :before selector, as in
	 *   https://fortawesome.github.io/Font-Awesome/examples/
	 *   Example:
	 *     <md-icon fontSet="fa" fontIcon="alarm"></md-icon>
	 */
	var MdIcon = (function () {
	    function MdIcon(_element, _renderer, _mdIconRegistry) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._mdIconRegistry = _mdIconRegistry;
	        this.hostAriaLabel = '';
	    }
	    /**
	     * Splits an svgIcon binding value into its icon set and icon name components.
	     * Returns a 2-element array of [(icon set), (icon name)].
	     * The separator for the two fields is ':'. If there is no separator, an empty
	     * string is returned for the icon set and the entire value is returned for
	     * the icon name. If the argument is falsy, returns an array of two empty strings.
	     * Throws a MdIconInvalidNameError if the name contains two or more ':' separators.
	     * Examples:
	     *   'social:cake' -> ['social', 'cake']
	     *   'penguin' -> ['', 'penguin']
	     *   null -> ['', '']
	     *   'a:b:c' -> (throws MdIconInvalidNameError)
	     */
	    MdIcon.prototype._splitIconName = function (iconName) {
	        if (!iconName) {
	            return ['', ''];
	        }
	        var parts = iconName.split(':');
	        switch (parts.length) {
	            case 1:
	                // Use default namespace.
	                return ['', parts[0]];
	            case 2:
	                return parts;
	            default:
	                throw new MdIconInvalidNameError(iconName);
	        }
	    };
	    /** @internal */
	    MdIcon.prototype.ngOnChanges = function (changes) {
	        var _this = this;
	        var changedInputs = Object.keys(changes);
	        // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
	        if (changedInputs.indexOf('svgIcon') != -1 || changedInputs.indexOf('svgSrc') != -1) {
	            if (this.svgIcon) {
	                var _a = this._splitIconName(this.svgIcon), namespace = _a[0], iconName = _a[1];
	                this._mdIconRegistry.getNamedSvgIcon(iconName, namespace).subscribe(function (svg) { return _this._setSvgElement(svg); }, function (err) { return console.log("Error retrieving icon: " + err); });
	            }
	            else if (this.svgSrc) {
	                this._mdIconRegistry.getSvgIconFromUrl(this.svgSrc).subscribe(function (svg) { return _this._setSvgElement(svg); }, function (err) { return console.log("Error retrieving icon: " + err); });
	            }
	        }
	        if (this._usingFontIcon()) {
	            this._updateFontIconClasses();
	        }
	        this._updateAriaLabel();
	    };
	    /** @internal */
	    MdIcon.prototype.ngOnInit = function () {
	        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
	        // e.g. <md-icon>arrow</md-icon>. In this case we need to add a CSS class for the default font.
	        if (this._usingFontIcon()) {
	            this._updateFontIconClasses();
	        }
	    };
	    /** @internal */
	    MdIcon.prototype.ngAfterViewChecked = function () {
	        // Update aria label here because it may depend on the projected text content.
	        // (e.g. <md-icon>home</md-icon> should use 'home').
	        this._updateAriaLabel();
	    };
	    MdIcon.prototype._updateAriaLabel = function () {
	        var ariaLabel = this._getAriaLabel();
	        if (ariaLabel) {
	            this._renderer.setElementAttribute(this._element.nativeElement, 'aria-label', ariaLabel);
	        }
	    };
	    MdIcon.prototype._getAriaLabel = function () {
	        // If the parent provided an aria-label attribute value, use it as-is. Otherwise look for a
	        // reasonable value from the alt attribute, font icon name, SVG icon name, or (for ligatures)
	        // the text content of the directive.
	        var label = this.hostAriaLabel ||
	            this.alt ||
	            this.fontIcon ||
	            this._splitIconName(this.svgIcon)[1];
	        if (label) {
	            return label;
	        }
	        // The "content" of an SVG icon is not a useful label.
	        if (this._usingFontIcon()) {
	            var text = this._element.nativeElement.textContent;
	            if (text) {
	                return text;
	            }
	        }
	        // TODO: Warn here in dev mode.
	        return null;
	    };
	    MdIcon.prototype._usingFontIcon = function () {
	        return !(this.svgIcon || this.svgSrc);
	    };
	    MdIcon.prototype._setSvgElement = function (svg) {
	        var layoutElement = this._element.nativeElement;
	        // Remove existing child nodes and add the new SVG element.
	        // We would use renderer.detachView(Array.from(layoutElement.childNodes)) here,
	        // but it fails in IE11: https://github.com/angular/angular/issues/6327
	        layoutElement.innerHTML = '';
	        this._renderer.projectNodes(layoutElement, [svg]);
	    };
	    MdIcon.prototype._updateFontIconClasses = function () {
	        if (!this._usingFontIcon()) {
	            return;
	        }
	        var elem = this._element.nativeElement;
	        var fontSetClass = this.fontSet ?
	            this._mdIconRegistry.classNameForFontAlias(this.fontSet) :
	            this._mdIconRegistry.getDefaultFontSetClass();
	        if (fontSetClass != this._previousFontSetClass) {
	            if (this._previousFontSetClass) {
	                this._renderer.setElementClass(elem, this._previousFontSetClass, false);
	            }
	            if (fontSetClass) {
	                this._renderer.setElementClass(elem, fontSetClass, true);
	            }
	            this._previousFontSetClass = fontSetClass;
	        }
	        if (this.fontIcon != this._previousFontIconClass) {
	            if (this._previousFontIconClass) {
	                this._renderer.setElementClass(elem, this._previousFontIconClass, false);
	            }
	            if (this.fontIcon) {
	                this._renderer.setElementClass(elem, this.fontIcon, true);
	            }
	            this._previousFontIconClass = this.fontIcon;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "svgSrc", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "svgIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "fontSet", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "fontIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "alt", void 0);
	    __decorate([
	        core_1.Input('aria-label'), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "hostAriaLabel", void 0);
	    MdIcon = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            template: '<ng-content></ng-content>',
	            selector: 'md-icon',
	            styles: ["/** The width/height of the icon element. */ /** This works because we're using ViewEncapsulation.None. If we used the default encapsulation, the selector would need to be \":host\". */ md-icon { background-repeat: no-repeat; display: inline-block; fill: currentColor; height: 24px; width: 24px; } "],
	            host: {
	                'role': 'img',
	            },
	            encapsulation: core_1.ViewEncapsulation.None,
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, icon_registry_1.MdIconRegistry])
	    ], MdIcon);
	    return MdIcon;
	}());
	exports.MdIcon = MdIcon;
	exports.MD_ICON_DIRECTIVES = [MdIcon];
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-IydvmmBU.tmp/0/components/icon/icon.js.map

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	// ```
	// app.ts
	// (c) 2016 David Newman
	// blackshuriken@hotmail.com
	// app.ts may be freely distributed under the MIT license
	// ```
	"use strict";
	// *src/app/app.ts*
	// This file contains the main class as well as the necessary
	// decorators for creating the primary `app` `component`
	/*
	 * Angular 2 decorators and services
	 */
	var core_1 = __webpack_require__(1);
	var router_deprecated_1 = __webpack_require__(95);
	var app_service_1 = __webpack_require__(201);
	var router_active_directive_1 = __webpack_require__(483);
	var home_1 = __webpack_require__(479);
	// Import NgFor directive
	var common_1 = __webpack_require__(25);
	// Import Todo component
	//import {Todo} from './todo/todo.component';
	// Import Recipes component
	//import {Recipes} from './recipes/recipes.component';
	/*
	 * App Component
	 * Top Level Component
	 */
	var App = (function () {
	    // Pass in our application `state`
	    // Alternative to using `redux`
	    function App(appState) {
	        this.appState = appState;
	        this.angularLogo = 'assets/img/angular-logo.png';
	        this.name = 'Reviews';
	        this.url = '';
	    }
	    // Fire off upon initialization
	    App.prototype.ngOnInit = function () {
	        console.log('Initial App State', this.appState.state);
	    };
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            providers: [],
	            directives: [common_1.NgFor,
	                router_active_directive_1.RouterActive],
	            encapsulation: core_1.ViewEncapsulation.None,
	            pipes: [],
	            // Load our main `Sass` file into our `app` `component`
	            styleUrls: [__webpack_require__(704)],
	            template: __webpack_require__(506)
	        }),
	        router_deprecated_1.RouteConfig([
	            { path: '/', name: 'Index', component: home_1.Home, useAsDefault: true }
	        ]), 
	        __metadata('design:paramtypes', [app_service_1.AppState])
	    ], App);
	    return App;
	}());
	exports.App = App;
	/*
	 * For help or questions please contact us at @datatype_void on twitter
	 * or our chat on Slack at http://www.davidniciforovic.com/wp-login.php?action=slack-invitation
	 */
	

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(476));
	

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	/*
	 * Directive
	 * XLarge is a simple directive to show how one is made
	 */
	var XLarge = (function () {
	    function XLarge(element, renderer) {
	        // simple DOM manipulation to set font size to x-large
	        // `nativeElement` is the direct reference to the DOM element
	        // element.nativeElement.style.fontSize = 'x-large';
	        // for server/webworker support use the renderer
	        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
	    }
	    XLarge = __decorate([
	        core_1.Directive({
	            selector: '[x-large]' // using [ ] means selecting attributes
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], XLarge);
	    return XLarge;
	}());
	exports.XLarge = XLarge;
	

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var title_1 = __webpack_require__(480);
	var x_large_1 = __webpack_require__(475);
	var home_service_1 = __webpack_require__(478);
	// Import NgFor directive
	var common_1 = __webpack_require__(25);
	var Home = (function () {
	    function Home(homeService) {
	        this.homeService = homeService;
	        this.searchData = {
	            searchTerm: ''
	        };
	        this.reviews = [];
	    }
	    Home.prototype.onSubmit = function () {
	        var _this = this;
	        this.homeService.getAll(this.searchData.searchTerm)
	            .subscribe(function (result) {
	            _this.reviews = result;
	            //this.reviews = _.map(result, function (element) {
	            //    return _.extend({}, element, { avgRating: this.average(element.scrapeResults.map(x => x.rating)) });
	            //});
	        });
	    };
	    Home.prototype.ngOnInit = function () {
	        console.log('hello `Home` component');
	    };
	    Home = __decorate([
	        core_1.Component({
	            // The selector is what angular internally uses
	            // for `document.querySelectorAll(selector)` in our index.html
	            // where, in this case, selector is the string 'home'
	            selector: 'home',
	            // We need to tell Angular's Dependency Injection which providers are in our app.
	            providers: [
	                title_1.Title,
	                home_service_1.HomeService
	            ],
	            // We need to tell Angular's compiler which directives are in our template.
	            // Doing so will allow Angular to attach our behavior to an element
	            directives: [
	                x_large_1.XLarge,
	                common_1.NgFor
	            ],
	            // We need to tell Angular's compiler which custom pipes are in our template.
	            pipes: [],
	            // Our list of styles in our component. We may add more to compose many styles together
	            styles: [__webpack_require__(507)],
	            // Every Angular template is first compiled by the browser before Angular runs it's compiler
	            template: __webpack_require__(508)
	        }), 
	        __metadata('design:paramtypes', [home_service_1.HomeService])
	    ], Home);
	    return Home;
	}());
	exports.Home = Home;
	var Review = (function () {
	    function Review(name, rating) {
	        this.name = name;
	        this.rating = rating;
	    }
	    return Review;
	}());
	exports.Review = Review;
	

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(91);
	var HomeService = (function () {
	    function HomeService(http) {
	        this.http = http;
	    }
	    HomeService.prototype.getAll = function (searchTerm) {
	        var params = new http_1.URLSearchParams();
	        params.set('q', searchTerm);
	        return this.http.get('/api/review', { search: params })
	            .map(function (res) { return res.json(); });
	    };
	    HomeService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], HomeService);
	    return HomeService;
	}());
	exports.HomeService = HomeService;
	

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(477));
	

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(481));
	

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(91);
	var Title = (function () {
	    function Title(http) {
	        this.http = http;
	        this.value = 'Angular 2';
	    }
	    Title.prototype.getData = function () {
	        console.log('Title#getData(): Get Data');
	        // return this.http.get('/assets/data.json')
	        // .map(res => res.json());
	        return {
	            value: 'Angular 2 MEAN Webpack Starter'
	        };
	    };
	    Title = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], Title);
	    return Title;
	}());
	exports.Title = Title;
	

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	// App
	__export(__webpack_require__(474));
	__export(__webpack_require__(201));
	var app_service_2 = __webpack_require__(201);
	// Application wide providers
	exports.APP_PROVIDERS = [
	    app_service_2.AppState
	];
	// Import all of the files necessary for our `recipes` component
	//import {RecipeService} from './recipes/recipe.service';
	//import {recipes} from './recipes/recipes.reducer';
	//import {selectedRecipe} from './recipes/selected-recipe.reducer';
	//# Application Redux Stores
	//
	//** Redux stores for use with our Angular 2 app **
	exports.APP_STORES = [];
	

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(4);
	var router_deprecated_1 = __webpack_require__(95);
	/*
	 * RouterActive dynamically finds the first element with routerLink and toggles the active class
	 *
	 * ## Use
	 *
	 * ```
	 * <li router-active="active"><a [routerLink]=" ['/Home'] ">Home</a></li>
	 * <li [routerActive]=" activeStringValue "><a [routerLink]=" ['/Home'] ">Home</a></li>
	 * ```
	 */
	var RouterActive = (function () {
	    function RouterActive(router, element, renderer, routerLink, routerActiveAttr) {
	        this.router = router;
	        this.element = element;
	        this.renderer = renderer;
	        this.routerLink = routerLink;
	        this.routerActive = undefined;
	        this.routerActiveAttr = 'active';
	        this.routerActiveAttr = this._defaultAttrValue(routerActiveAttr);
	    }
	    RouterActive.prototype.ngOnInit = function () {
	        var _this = this;
	        this.routerLink.changes.subscribe(function () {
	            if (_this.routerLink.first) {
	                _this._updateClass();
	                _this._findRootRouter().subscribe(function () {
	                    _this._updateClass();
	                });
	            }
	        });
	    };
	    RouterActive.prototype._findRootRouter = function () {
	        var router = this.router;
	        while (lang_1.isPresent(router.parent)) {
	            router = router.parent;
	        }
	        return router;
	    };
	    RouterActive.prototype._updateClass = function () {
	        var active = this.routerLink.first.isRouteActive;
	        this.renderer.setElementClass(this.element.nativeElement, this._attrOrProp(), active);
	    };
	    RouterActive.prototype._defaultAttrValue = function (attr) {
	        return this.routerActiveAttr = attr || this.routerActiveAttr;
	    };
	    RouterActive.prototype._attrOrProp = function () {
	        return lang_1.isPresent(this.routerActive) ? this.routerActive : this.routerActiveAttr;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], RouterActive.prototype, "routerActive", void 0);
	    RouterActive = __decorate([
	        core_1.Directive({
	            selector: '[router-active]'
	        }),
	        __param(3, core_1.Query(router_deprecated_1.RouterLink)),
	        __param(4, core_1.Optional()),
	        __param(4, core_1.Attribute('router-active')), 
	        __metadata('design:paramtypes', [router_deprecated_1.Router, core_1.ElementRef, core_1.Renderer, core_1.QueryList, String])
	    ], RouterActive);
	    return RouterActive;
	}());
	exports.RouterActive = RouterActive;
	

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	//# Global Directives
	//
	//** These `directives` are available in any template **
	"use strict";
	var core_1 = __webpack_require__(1);
	// Angular 2 Router
	var router_deprecated_1 = __webpack_require__(95);
	// Angular 2 Material 2
	//
	// TODO(datatypevoid): replace with @angular2-material/all
	var angular2_material2_1 = __webpack_require__(336);
	// APPLICATION_DIRECTIVES
	//
	// directives that are global through out the application
	exports.APPLICATION_DIRECTIVES = router_deprecated_1.ROUTER_DIRECTIVES.concat(angular2_material2_1.MATERIAL_DIRECTIVES);
	exports.DIRECTIVES = [
	    { provide: core_1.PLATFORM_DIRECTIVES, multi: true, useValue: exports.APPLICATION_DIRECTIVES }
	];
	

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(484));
	__export(__webpack_require__(486));
	__export(__webpack_require__(487));
	

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	//# Global Pipes
	//
	//** These `pipes` are available in any template **
	"use strict";
	var core_1 = __webpack_require__(1);
	//# APPLICATION_PIPES
	//
	//** Pipes that are global throughout our application **
	exports.APPLICATION_PIPES = [];
	exports.PIPES = [
	    { provide: core_1.PLATFORM_PIPES, multi: true, useValue: exports.APPLICATION_PIPES }
	];
	

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	//# Global Providers
	//
	//** These `providers` are available in any template **
	"use strict";
	// Angular 2
	var common_1 = __webpack_require__(25);
	// Angular 2 Http
	var http_1 = __webpack_require__(91);
	// Angular 2 Router
	var router_deprecated_1 = __webpack_require__(95);
	// Angular 2 Material 2
	//
	// TODO:(datatypevoid): replace with @angular2-material/all
	var angular2_material2_1 = __webpack_require__(336);
	//# Application Providers/Directives/Pipes
	//
	//** providers/directives/pipes that only live in our browser environment **
	exports.APPLICATION_PROVIDERS = common_1.FORM_PROVIDERS.concat(http_1.HTTP_PROVIDERS, angular2_material2_1.MATERIAL_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS, [
	    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
	]);
	exports.PROVIDERS = exports.APPLICATION_PROVIDERS.slice();
	

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Angular 2
	var core_1 = __webpack_require__(1);
	// Environment Providers
	var PROVIDERS = [];
	if (false) {
	    // Production
	    core_1.enableProdMode();
	    PROVIDERS = PROVIDERS.slice();
	}
	else {
	    // Development
	    PROVIDERS = PROVIDERS.slice();
	}
	exports.ENV_PROVIDERS = PROVIDERS.slice();
	

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ef05e42f7cf5f63a807d2273da70932d.jpg";

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9f8a06001dd6acf9102c85074da70b4b.jpg";

/***/ },

/***/ 506:
/***/ function(module, exports) {

	module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-default navbar-fixed-top topnav\" role=\"navigation\">\r\n    <div class=\"container topnav\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <!--<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>-->\r\n            <a class=\"navbar-brand topnav\" href=\"#\">Reviews</a>\r\n        </div>\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <!--<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a href=\"#about\">About</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#services\">Services</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#contact\">Contact</a>\r\n                </li>\r\n            </ul>\r\n        </div>-->\r\n        <!-- /.navbar-collapse -->\r\n    </div>\r\n    <!-- /.container -->\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n<hr class=\"no-margin\"/>\r\n<!-- Footer -->\r\n<footer>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 text-center\">\r\n                <!--<ul class=\"list-inline\">\r\n                    <li>\r\n                        <a href=\"#\">Home</a>\r\n                    </li>\r\n                    <li class=\"footer-menu-divider\">&sdot;</li>\r\n                    <li>\r\n                        <a href=\"#about\">About</a>\r\n                    </li>\r\n                    <li class=\"footer-menu-divider\">&sdot;</li>\r\n                    <li>\r\n                        <a href=\"#services\">Services</a>\r\n                    </li>\r\n                    <li class=\"footer-menu-divider\">&sdot;</li>\r\n                    <li>\r\n                        <a href=\"#contact\">Contact</a>\r\n                    </li>\r\n                </ul>-->\r\n                <p class=\"copyright text-muted small\">Copyright &copy; JZee 2016. All Rights Reserved</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ },

/***/ 507:
/***/ function(module, exports) {

	module.exports = ""

/***/ },

/***/ 508:
/***/ function(module, exports) {

	module.exports = "<!-- Header -->\r\n<a name=\"about\"></a>\r\n<div class=\"intro-header\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"intro-message\">\r\n                    <h1>Reviews</h1>\r\n                    <h3>Buying new product? Check avarage rating in the net!</h3>\r\n                    <hr class=\"intro-divider\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"search-section\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 col-sm-offset-3\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"search-query form-control input-lg\" placeholder=\"Search\" [(ngModel)]=\"searchData.searchTerm\" />\r\n                        <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-primary btn-lg\" type=\"button\" (click)=\"onSubmit()\">\r\n                                <span class=\"glyphicon glyphicon-search\"></span>\r\n                            </button>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <!-- /.container -->\r\n</div>\r\n\r\n\r\n<div class=\"content-section-a\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 col-sm-offset-4\">\r\n                <div class=\"media\" *ngFor=\"let review of reviews\">\r\n                    <div class=\"media-left\">\r\n                        <a href=\"#\">\r\n                            <img class=\"media-object\" src=\"...\" alt=\"...\">\r\n                        </a>\r\n                    </div>\r\n\r\n                    <div class=\"media-body\">\r\n                        <h4 class=\"media-heading\">{{ review.name }}</h4>\r\n                        <p>Rating: {{review.rating}}</p>\r\n                        <div *ngFor=\"let scrapeResult of review.scrapeResults\">\r\n                            <p>{{scrapeResult.url}}</p>\r\n                            <p>{{scrapeResult.rating}}</p>\r\n                            <p>{{scrapeResult.website}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- /.intro-header -->\r\n<!-- Page Content -->\r\n<a name=\"services\"></a>\r\n<div class=\"content-section-a\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 text-center\">\r\n                <div class=\"clearfix\"></div>\r\n                <h2 class=\"section-heading\">How does it work?</h2>\r\n                <p class=\"lead\">Lorem ipsum...</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.container -->\r\n</div>\r\n\r\n\r\n"

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(10);
	var forkJoin_1 = __webpack_require__(524);
	Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
	//# sourceMappingURL=forkJoin.js.map

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(10);
	var of_1 = __webpack_require__(525);
	Observable_1.Observable.of = of_1.of;
	//# sourceMappingURL=of.js.map

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(10);
	var catch_1 = __webpack_require__(526);
	Observable_1.Observable.prototype.catch = catch_1._catch;
	//# sourceMappingURL=catch.js.map

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(10);
	var do_1 = __webpack_require__(527);
	Observable_1.Observable.prototype.do = do_1._do;
	//# sourceMappingURL=do.js.map

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(10);
	var filter_1 = __webpack_require__(528);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(10);
	var finally_1 = __webpack_require__(529);
	Observable_1.Observable.prototype.finally = finally_1._finally;
	//# sourceMappingURL=finally.js.map

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(10);
	var share_1 = __webpack_require__(533);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(10);
	var ScalarObservable_1 = __webpack_require__(523);
	var EmptyObservable_1 = __webpack_require__(340);
	var isScheduler_1 = __webpack_require__(539);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayObservable = (function (_super) {
	    __extends(ArrayObservable, _super);
	    function ArrayObservable(array, scheduler) {
	        _super.call(this);
	        this.array = array;
	        this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            this._isScalar = true;
	            this.value = array[0];
	        }
	    }
	    ArrayObservable.create = function (array, scheduler) {
	        return new ArrayObservable(array, scheduler);
	    };
	    /**
	     * Creates an Observable that emits some values you specify as arguments,
	     * immediately one after the other, and then emits a complete notification.
	     *
	     * <span class="informal">Emits the arguments you provide, then completes.
	     * </span>
	     *
	     * <img src="./img/of.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the arguments given, and the complete notification thereafter. It can
	     * be used for composing with other Observables, such as with {@link concat}.
	     * By default, it uses a `null` Scheduler, which means the `next`
	     * notifications are sent synchronously, although with a different Scheduler
	     * it is possible to determine when those notifications will be delivered.
	     *
	     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
	     * var numbers = Rx.Observable.of(10, 20, 30);
	     * var letters = Rx.Observable.of('a', 'b', 'c');
	     * var interval = Rx.Observable.interval(1000);
	     * var result = numbers.concat(letters).concat(interval);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link throw}
	     *
	     * @param {...T} values Arguments that represent `next` values to be emitted.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emissions of the `next` notifications.
	     * @return {Observable<T>} An Observable that emits each given input value.
	     * @static true
	     * @name of
	     * @owner Observable
	     */
	    ArrayObservable.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i - 0] = arguments[_i];
	        }
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        }
	        else {
	            scheduler = null;
	        }
	        var len = array.length;
	        if (len > 1) {
	            return new ArrayObservable(array, scheduler);
	        }
	        else if (len === 1) {
	            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
	        }
	        else {
	            return new EmptyObservable_1.EmptyObservable(scheduler);
	        }
	    };
	    ArrayObservable.dispatch = function (state) {
	        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(array[index]);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var array = this.array;
	        var count = array.length;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                array: array, index: index, count: count, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
	                subscriber.next(array[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayObservable;
	}(Observable_1.Observable));
	exports.ArrayObservable = ArrayObservable;
	//# sourceMappingURL=ArrayObservable.js.map

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(10);
	var Subscriber_1 = __webpack_require__(38);
	var Subscription_1 = __webpack_require__(96);
	/**
	 * @class ConnectableObservable<T>
	 */
	var ConnectableObservable = (function (_super) {
	    __extends(ConnectableObservable, _super);
	    function ConnectableObservable(source, subjectFactory) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	    }
	    ConnectableObservable.prototype._subscribe = function (subscriber) {
	        return this.getSubject().subscribe(subscriber);
	    };
	    ConnectableObservable.prototype.getSubject = function () {
	        var subject = this.subject;
	        if (subject && !subject.isUnsubscribed) {
	            return subject;
	        }
	        return (this.subject = this.subjectFactory());
	    };
	    ConnectableObservable.prototype.connect = function () {
	        var source = this.source;
	        var subscription = this.subscription;
	        if (subscription && !subscription.isUnsubscribed) {
	            return subscription;
	        }
	        subscription = source.subscribe(this.getSubject());
	        subscription.add(new ConnectableSubscription(this));
	        return (this.subscription = subscription);
	    };
	    ConnectableObservable.prototype.refCount = function () {
	        return new RefCountObservable(this);
	    };
	    /**
	     * This method is opened for `ConnectableSubscription`.
	     * Not to call from others.
	     */
	    ConnectableObservable.prototype._closeSubscription = function () {
	        this.subject = null;
	        this.subscription = null;
	    };
	    return ConnectableObservable;
	}(Observable_1.Observable));
	exports.ConnectableObservable = ConnectableObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ConnectableSubscription = (function (_super) {
	    __extends(ConnectableSubscription, _super);
	    function ConnectableSubscription(connectable) {
	        _super.call(this);
	        this.connectable = connectable;
	    }
	    ConnectableSubscription.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        connectable._closeSubscription();
	        this.connectable = null;
	    };
	    return ConnectableSubscription;
	}(Subscription_1.Subscription));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RefCountObservable = (function (_super) {
	    __extends(RefCountObservable, _super);
	    function RefCountObservable(connectable, refCount) {
	        if (refCount === void 0) { refCount = 0; }
	        _super.call(this);
	        this.connectable = connectable;
	        this.refCount = refCount;
	    }
	    RefCountObservable.prototype._subscribe = function (subscriber) {
	        var connectable = this.connectable;
	        var refCountSubscriber = new RefCountSubscriber(subscriber, this);
	        var subscription = connectable.subscribe(refCountSubscriber);
	        if (!subscription.isUnsubscribed && ++this.refCount === 1) {
	            refCountSubscriber.connection = this.connection = connectable.connect();
	        }
	        return subscription;
	    };
	    return RefCountObservable;
	}(Observable_1.Observable));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RefCountSubscriber = (function (_super) {
	    __extends(RefCountSubscriber, _super);
	    function RefCountSubscriber(destination, refCountObservable) {
	        _super.call(this, null);
	        this.destination = destination;
	        this.refCountObservable = refCountObservable;
	        this.connection = refCountObservable.connection;
	        destination.add(this);
	    }
	    RefCountSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    RefCountSubscriber.prototype._error = function (err) {
	        this._resetConnectable();
	        this.destination.error(err);
	    };
	    RefCountSubscriber.prototype._complete = function () {
	        this._resetConnectable();
	        this.destination.complete();
	    };
	    RefCountSubscriber.prototype._resetConnectable = function () {
	        var observable = this.refCountObservable;
	        var obsConnection = observable.connection;
	        var subConnection = this.connection;
	        if (subConnection && subConnection === obsConnection) {
	            observable.refCount = 0;
	            obsConnection.unsubscribe();
	            observable.connection = null;
	            this.unsubscribe();
	        }
	    };
	    RefCountSubscriber.prototype._unsubscribe = function () {
	        var observable = this.refCountObservable;
	        if (observable.refCount === 0) {
	            return;
	        }
	        if (--observable.refCount === 0) {
	            var obsConnection = observable.connection;
	            var subConnection = this.connection;
	            if (subConnection && subConnection === obsConnection) {
	                obsConnection.unsubscribe();
	                observable.connection = null;
	            }
	        }
	    };
	    return RefCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(10);
	var EmptyObservable_1 = __webpack_require__(340);
	var isArray_1 = __webpack_require__(205);
	var subscribeToResult_1 = __webpack_require__(344);
	var OuterSubscriber_1 = __webpack_require__(338);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ForkJoinObservable = (function (_super) {
	    __extends(ForkJoinObservable, _super);
	    function ForkJoinObservable(sources, resultSelector) {
	        _super.call(this);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	    }
	    /**
	     * @param sources
	     * @return {any}
	     * @static true
	     * @name forkJoin
	     * @owner Observable
	     */
	    ForkJoinObservable.create = function () {
	        var sources = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sources[_i - 0] = arguments[_i];
	        }
	        if (sources === null || arguments.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        var resultSelector = null;
	        if (typeof sources[sources.length - 1] === 'function') {
	            resultSelector = sources.pop();
	        }
	        // if the first and only other argument besides the resultSelector is an array
	        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
	        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
	            sources = sources[0];
	        }
	        if (sources.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        return new ForkJoinObservable(sources, resultSelector);
	    };
	    ForkJoinObservable.prototype._subscribe = function (subscriber) {
	        return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
	    };
	    return ForkJoinObservable;
	}(Observable_1.Observable));
	exports.ForkJoinObservable = ForkJoinObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ForkJoinSubscriber = (function (_super) {
	    __extends(ForkJoinSubscriber, _super);
	    function ForkJoinSubscriber(destination, sources, resultSelector) {
	        _super.call(this, destination);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	        this.completed = 0;
	        this.haveValues = 0;
	        var len = sources.length;
	        this.total = len;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            var source = sources[i];
	            var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
	            if (innerSubscription) {
	                innerSubscription.outerIndex = i;
	                this.add(innerSubscription);
	            }
	        }
	    }
	    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        if (!innerSub._hasValue) {
	            innerSub._hasValue = true;
	            this.haveValues++;
	        }
	    };
	    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
	        var destination = this.destination;
	        var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
	        var len = values.length;
	        if (!innerSub._hasValue) {
	            destination.complete();
	            return;
	        }
	        this.completed++;
	        if (this.completed !== len) {
	            return;
	        }
	        if (haveValues === len) {
	            var value = resultSelector ? resultSelector.apply(this, values) : values;
	            destination.next(value);
	        }
	        destination.complete();
	    };
	    return ForkJoinSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=ForkJoinObservable.js.map

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(10);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ScalarObservable = (function (_super) {
	    __extends(ScalarObservable, _super);
	    function ScalarObservable(value, scheduler) {
	        _super.call(this);
	        this.value = value;
	        this.scheduler = scheduler;
	        this._isScalar = true;
	    }
	    ScalarObservable.create = function (value, scheduler) {
	        return new ScalarObservable(value, scheduler);
	    };
	    ScalarObservable.dispatch = function (state) {
	        var done = state.done, value = state.value, subscriber = state.subscriber;
	        if (done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.done = true;
	        this.schedule(state);
	    };
	    ScalarObservable.prototype._subscribe = function (subscriber) {
	        var value = this.value;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                done: false, value: value, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.next(value);
	            if (!subscriber.isUnsubscribed) {
	                subscriber.complete();
	            }
	        }
	    };
	    return ScalarObservable;
	}(Observable_1.Observable));
	exports.ScalarObservable = ScalarObservable;
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ForkJoinObservable_1 = __webpack_require__(522);
	exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
	//# sourceMappingURL=forkJoin.js.map

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(520);
	exports.of = ArrayObservable_1.ArrayObservable.of;
	//# sourceMappingURL=of.js.map

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(38);
	/**
	 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
	 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
	 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
	 *  is returned by the `selector` will be used to continue the observable chain.
	 * @return {Observable} an observable that originates from either the source or the observable returned by the
	 *  catch `selector` function.
	 * @method catch
	 * @owner Observable
	 */
	function _catch(selector) {
	    var operator = new CatchOperator(selector);
	    var caught = this.lift(operator);
	    return (operator.caught = caught);
	}
	exports._catch = _catch;
	var CatchOperator = (function () {
	    function CatchOperator(selector) {
	        this.selector = selector;
	    }
	    CatchOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
	    };
	    return CatchOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CatchSubscriber = (function (_super) {
	    __extends(CatchSubscriber, _super);
	    function CatchSubscriber(destination, selector, caught) {
	        _super.call(this, destination);
	        this.selector = selector;
	        this.caught = caught;
	    }
	    // NOTE: overriding `error` instead of `_error` because we don't want
	    // to have this flag this subscriber as `isStopped`.
	    CatchSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var result = void 0;
	            try {
	                result = this.selector(err, this.caught);
	            }
	            catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this._innerSub(result);
	        }
	    };
	    CatchSubscriber.prototype._innerSub = function (result) {
	        this.unsubscribe();
	        this.destination.remove(this);
	        result.subscribe(this.destination);
	    };
	    return CatchSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=catch.js.map

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(38);
	/**
	 * Perform a side effect for every emission on the source Observable, but return
	 * an Observable that is identical to the source.
	 *
	 * <span class="informal">Intercepts each emission on the source and runs a
	 * function, but returns an output which is identical to the source.</span>
	 *
	 * <img src="./img/do.png" width="100%">
	 *
	 * Returns a mirrored Observable of the source Observable, but modified so that
	 * the provided Observer is called to perform a side effect for every value,
	 * error, and completion emitted by the source. Any errors that are thrown in
	 * the aforementioned Observer or handlers are safely sent down the error path
	 * of the output Observable.
	 *
	 * This operator is useful for debugging your Observables for the correct values
	 * or performing other side effects.
	 *
	 * Note: this is different to a `subscribe` on the Observable. If the Observable
	 * returned by `do` is not subscribed, the side effects specified by the
	 * Observer will never happen. `do` therefore simply spies on existing
	 * execution, it does not trigger an execution to happen like `subscribe` does.
	 *
	 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks
	 *   .do(ev => console.log(ev))
	 *   .map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 * @see {@link subscribe}
	 *
	 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
	 * callback for `next`.
	 * @param {function} [error] Callback for errors in the source.
	 * @param {function} [complete] Callback for the completion of the source.
	 * @return {Observable} An Observable identical to the source, but runs the
	 * specified Observer or callback(s) for each item.
	 * @method do
	 * @name do
	 * @owner Observable
	 */
	function _do(nextOrObserver, error, complete) {
	    return this.lift(new DoOperator(nextOrObserver, error, complete));
	}
	exports._do = _do;
	var DoOperator = (function () {
	    function DoOperator(nextOrObserver, error, complete) {
	        this.nextOrObserver = nextOrObserver;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
	    };
	    return DoOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DoSubscriber = (function (_super) {
	    __extends(DoSubscriber, _super);
	    function DoSubscriber(destination, nextOrObserver, error, complete) {
	        _super.call(this, destination);
	        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	        safeSubscriber.syncErrorThrowable = true;
	        this.add(safeSubscriber);
	        this.safeSubscriber = safeSubscriber;
	    }
	    DoSubscriber.prototype._next = function (value) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.next(value);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.next(value);
	        }
	    };
	    DoSubscriber.prototype._error = function (err) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.error(err);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.error(err);
	        }
	    };
	    DoSubscriber.prototype._complete = function () {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.complete();
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    return DoSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=do.js.map

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(38);
	/**
	 * Filter items emitted by the source Observable by only emitting those that
	 * satisfy a specified predicate.
	 *
	 * <span class="informal">Like
	 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
	 * it only emits a value from the source if it passes a criterion function.</span>
	 *
	 * <img src="./img/filter.png" width="100%">
	 *
	 * Similar to the well-known `Array.prototype.filter` method, this operator
	 * takes values from the source Observable, passes them through a `predicate`
	 * function and only emits those values that yielded `true`.
	 *
	 * @example <caption>Emit only click events whose target was a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
	 * clicksOnDivs.subscribe(x => console.log(x));
	 *
	 * @see {@link distinct}
	 * @see {@link distinctKey}
	 * @see {@link distinctUntilChanged}
	 * @see {@link distinctUntilKeyChanged}
	 * @see {@link ignoreElements}
	 * @see {@link partition}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted, if `false` the value is not passed to the output
	 * Observable. The `index` parameter is the number `i` for the i-th source
	 * emission that has happened since the subscription, starting from the number
	 * `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of values from the source that were
	 * allowed by the `predicate` function.
	 * @method filter
	 * @owner Observable
	 */
	function filter(predicate, thisArg) {
	    return this.lift(new FilterOperator(predicate, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(predicate, thisArg) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	    };
	    return FilterOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, predicate, thisArg) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.predicate = predicate;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=filter.js.map

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(38);
	var Subscription_1 = __webpack_require__(96);
	/**
	 * Returns an Observable that mirrors the source Observable, but will call a specified function when
	 * the source terminates on complete or error.
	 * @param {function} finallySelector function to be called when source terminates.
	 * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
	 * @method finally
	 * @owner Observable
	 */
	function _finally(finallySelector) {
	    return this.lift(new FinallyOperator(finallySelector));
	}
	exports._finally = _finally;
	var FinallyOperator = (function () {
	    function FinallyOperator(finallySelector) {
	        this.finallySelector = finallySelector;
	    }
	    FinallyOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FinallySubscriber(subscriber, this.finallySelector));
	    };
	    return FinallyOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FinallySubscriber = (function (_super) {
	    __extends(FinallySubscriber, _super);
	    function FinallySubscriber(destination, finallySelector) {
	        _super.call(this, destination);
	        this.add(new Subscription_1.Subscription(finallySelector));
	    }
	    return FinallySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=finally.js.map

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ConnectableObservable_1 = __webpack_require__(521);
	/**
	 * Returns an Observable that emits the results of invoking a specified selector on items
	 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
	 *
	 * <img src="./img/multicast.png" width="100%">
	 *
	 * @param {Function} selector - a function that can use the multicasted source stream
	 * as many times as needed, without causing multiple subscriptions to the source stream.
	 * Subscribers to the given source will receive all notifications of the source from the
	 * time of the subscription forward.
	 * @return {Observable} an Observable that emits the results of invoking the selector
	 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
	 * the underlying stream.
	 * @method multicast
	 * @owner Observable
	 */
	function multicast(subjectOrSubjectFactory) {
	    var subjectFactory;
	    if (typeof subjectOrSubjectFactory === 'function') {
	        subjectFactory = subjectOrSubjectFactory;
	    }
	    else {
	        subjectFactory = function subjectFactory() {
	            return subjectOrSubjectFactory;
	        };
	    }
	    return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
	}
	exports.multicast = multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var multicast_1 = __webpack_require__(532);
	var Subject_1 = __webpack_require__(47);
	function shareSubjectFactory() {
	    return new Subject_1.Subject();
	}
	/**
	 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
	 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
	 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
	 * This is an alias for .publish().refCount().
	 *
	 * <img src="./img/share.png" width="100%">
	 *
	 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
	 * @method share
	 * @owner Observable
	 */
	function share() {
	    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
	}
	exports.share = share;
	;
	//# sourceMappingURL=share.js.map

/***/ },

/***/ 539:
/***/ function(module, exports) {

	"use strict";
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var hmr_store_1 = __webpack_require__(129);
	// noop in parentNode
	// TODO: find a better way to noop
	var _env = typeof process !== 'undefined' &&
	    process &&
	    ({"ENV":"development","NODE_ENV":"development","HMR":false}) &&
	    (("development") ||
	        ("development"));
	var _dev = ((_env &&
	    typeof _env === 'string' &&
	    (_env.indexOf('dev') > -1)) ||
	    _env === undefined);
	function setDev(newDev) {
	    if (typeof newDev === 'string') {
	        return _dev = (newDev.indexOf('dev') > -1);
	    }
	    else if (typeof newDev === 'boolean') {
	        return _dev = newDev;
	    }
	    throw new Error('Please provide a string or boolean');
	}
	exports.setDev = setDev;
	function HmrState(namespaceOrConfig, config) {
	    function decoratorFactory(target, decoratedPropertyName, descriptor) {
	        if (!_dev) {
	            return descriptor;
	        }
	        var key = namespaceOrConfig || target.constructor.name + '#' + decoratedPropertyName;
	        hmr_store_1.HmrStore.select(key, function () { return hmr_store_1.HmrStore.get(key); });
	        Object.defineProperty(target, decoratedPropertyName, {
	            get: function () { return hmr_store_1.HmrStore.get(key); },
	            set: function (newValue) {
	                var currentValue = hmr_store_1.HmrStore.get(key);
	                if (!currentValue) {
	                    hmr_store_1.HmrStore._initialValues[key] = newValue;
	                }
	                else {
	                    newValue = Object.assign(newValue, currentValue);
	                }
	                return hmr_store_1.HmrStore.set(key, newValue);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return descriptor;
	    }
	    return decoratorFactory;
	}
	exports.HmrState = HmrState;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(376)))

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var hmr_store_1 = __webpack_require__(129);
	__export(__webpack_require__(545));
	__export(__webpack_require__(543));
	__export(__webpack_require__(129));
	function provideHmrState(initialState) {
	    if (initialState === void 0) { initialState = {}; }
	    return [
	        { provide: hmr_store_1.HMR_STATE, useValue: initialState },
	        { provide: hmr_store_1.HmrStore, useValue: hmr_store_1.HmrStore }
	    ];
	}
	exports.provideHmrState = provideHmrState;
	

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var hmr_store_1 = __webpack_require__(129);
	function hotModuleReplacement(bootloader, module, options) {
	    if (options === void 0) { options = {}; }
	    if (!module.hot) {
	        console.warn('Warning: please use webpack hot flag');
	        return document.addEventListener('DOMContentLoaded', function () { return bootloader(); });
	    }
	    hmr_store_1.HmrStore.dev = true;
	    var LOCALSTORAGE_KEY = options.LOCALSTORAGE_KEY || '@@WEBPACK_INITIAL_DATA';
	    var LOCAL = options.localStorage || false;
	    var TOKEN = options.storeToken || hmr_store_1.HmrStore;
	    var DISPOSE = options.globalDispose || 'WEBPACK_HMR_beforeunload';
	    var GET_STATE = options.getState || getState;
	    var DATA = options.data || module.hot.data && module.hot.data.state;
	    var COMPONENT_REF = null;
	    var disposed = false;
	    function getState(appState) {
	        var json = appState.toJSON();
	        if (LOCAL) {
	            console.time('localStorage');
	            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(appState));
	            console.timeEnd('localStorage');
	        }
	        return json;
	    }
	    console.log('DATA', DATA);
	    if (!DATA && LOCAL) {
	        try {
	            console.time('start localStorage');
	            DATA = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || DATA;
	            console.timeEnd('start localStorage');
	        }
	        catch (e) {
	            console.log('JSON.parse Error', e);
	        }
	    }
	    console.time('bootstrap');
	    if (document.readyState === 'complete') {
	        bootloader(DATA)
	            .then(function (cmpRef) { return COMPONENT_REF = cmpRef; })
	            .then((function (cmpRef) { return (console.timeEnd('bootstrap'), cmpRef); }));
	    }
	    else {
	        document.addEventListener('DOMContentLoaded', function () {
	            bootloader(DATA)
	                .then(function (cmpRef) { return COMPONENT_REF = cmpRef; })
	                .then((function (cmpRef) { return (console.timeEnd('bootstrap'), cmpRef); }));
	        });
	    }
	    function beforeunload(event) {
	        var injector = COMPONENT_REF.injector;
	        var appState;
	        if ('getOptional' in injector) {
	            appState = COMPONENT_REF.injector.getOptional(TOKEN) || TOKEN;
	        }
	        else {
	            appState = COMPONENT_REF.injector.get(TOKEN, TOKEN);
	        }
	        return GET_STATE(appState);
	    }
	    window[DISPOSE] = function () {
	        disposed = true;
	        window.removeEventListener('beforeunload', beforeunload);
	        if (LOCAL) {
	            localStorage.removeItem(LOCALSTORAGE_KEY);
	        }
	    };
	    module.hot.accept();
	    window.addEventListener('beforeunload', beforeunload);
	    module.hot.dispose(function (data) {
	        console.time('dispose');
	        var componentNode = COMPONENT_REF.location.nativeElement;
	        var newNode = document.createElement(componentNode.tagName);
	        // display none
	        var currentDisplay = newNode.style.display;
	        newNode.style.display = 'none';
	        var parentNode = componentNode.parentNode;
	        parentNode.insertBefore(newNode, componentNode);
	        var injector = COMPONENT_REF.injector;
	        var appState;
	        if ('getOptional' in injector) {
	            appState = COMPONENT_REF.injector.getOptional(TOKEN) || TOKEN;
	        }
	        else {
	            appState = COMPONENT_REF.injector.get(TOKEN, TOKEN);
	        }
	        var json = GET_STATE(appState, COMPONENT_REF);
	        data.state = json;
	        if ('destroy' in COMPONENT_REF) {
	            COMPONENT_REF.destroy();
	        }
	        else if ('dispose' in COMPONENT_REF) {
	            COMPONENT_REF.dispose();
	        }
	        newNode.style.display = currentDisplay;
	        if (!disposed) {
	            window.removeEventListener('beforeunload', beforeunload);
	        }
	        disposed = true;
	        console.timeEnd('dispose');
	    });
	}
	exports.hotModuleReplacement = hotModuleReplacement;
	

/***/ },

/***/ 704:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(203);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(377)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(203, function() {
				var newContent = __webpack_require__(203);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});
//# sourceMappingURL=main.map