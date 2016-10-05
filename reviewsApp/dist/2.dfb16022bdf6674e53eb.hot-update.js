webpackHotUpdate(2,{

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(376)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nhtml,\nbody {\n  height: 100%;\n  background: #F4FAFA; }\n\nbody {\n  margin: 0; }\n\nmd-card {\n  margin: 25px; }\n\n/**\n * Set up a decent box model on the root element\n */\nhtml {\n  box-sizing: border-box; }\n\n/**\n * Make all elements from the DOM inherit from the parent box-sizing\n * Since `*` has a specificity of 0, it does not override the `html` value\n * making all elements inheriting from the root box-sizing value\n * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/\n */\n*, *::before, *::after {\n  box-sizing: inherit; }\n\n/**\n * Basic styles for links\n */\na {\n  color: #e50050;\n  text-decoration: none; }\n  a:hover, a:active, a:focus {\n    color: #222222;\n    text-decoration: underline; }\n\n.margin-15 {\n  margin: 15px !important; }\n\n.margin-20 {\n  margin: 20px !important; }\n\n/**\n * Basic typography style for copy text\n */\nbody {\n  color: #222222;\n  font: normal 125%/1.4 \"Open Sans\", \"Helvetica Neue Light\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; }\n\n/**\n * Clear inner floats\n */\n.clearfix::after {\n  clear: both;\n  content: '';\n  display: table; }\n\n/**\n * Main content containers\n * 1. Make the container full-width with a maximum width\n * 2. Center it in the viewport\n * 3. Leave some space on the edges, especially valuable on small screens\n */\n.container {\n  max-width: 1180px;\n  /* 1 */\n  margin-left: auto;\n  /* 2 */\n  margin-right: auto;\n  /* 2 */\n  padding-left: 20px;\n  /* 3 */\n  padding-right: 20px;\n  /* 3 */\n  width: 100%;\n  /* 1 */ }\n\n/**\n * Hide text while making it readable for screen readers\n * 1. Needed in WebKit-based browsers because of an implementation bug;\n *    See: https://code.google.com/p/chromium/issues/detail?id=457146\n */\n.hide-text {\n  overflow: hidden;\n  padding: 0;\n  /* 1 */\n  text-indent: 101%;\n  white-space: nowrap; }\n\n/**\n * Hide element while making it readable for screen readers\n * Shamelessly borrowed from HTML5Boilerplate:\n * https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L119-L133\n */\n.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\nmd-toolbar ul {\n  display: inline;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 60px; }\n\nmd-toolbar li {\n  display: inline; }\n\nmd-toolbar li.active {\n  background-color: lightgray; }\n\nfooter {\n  flex: 0 0 60px;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff; }\n\nbutton.active {\n  background: #fff;\n  color: #009688; }\n\nbutton.active:hover {\n  color: #fff; }\n\n.fill {\n  flex: 1 1 auto; }\n\n.app-state {\n  margin: 15px;\n  flex: 1;\n  max-height: 9.969rem; }\n\n.home {\n  flex: 1; }\n\nmd-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.card-container {\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n  border: 2px dashed #FBC02D; }\n\n.sample-content {\n  flex: 1; }\n\n.card-container md-card {\n  margin: 5px; }\n\n/*\r\n * Start Bootstrap - Landing Page (http://startbootstrap.com/)\r\n * Copyright 2013-2016 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\r\n */\nbody,\nhtml {\n  width: 100%;\n  height: 100%; }\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-weight: 700; }\n\n.topnav {\n  font-size: 14px; }\n\n.lead {\n  font-size: 18px;\n  font-weight: 400; }\n\n.intro-header {\n  padding-top: 50px;\n  /* If you're making other pages, make sure there is 50px of padding to make sure the navbar doesn't overlap content! */\n  padding-bottom: 50px;\n  text-align: center;\n  color: #f8f8f8;\n  background: url(" + __webpack_require__(497) + ") no-repeat center center;\n  background-size: cover;\n  position: relative; }\n  .intro-header .search-section {\n    background-color: rgba(0, 0, 0, 0.3);\n    position: absolute;\n    bottom: 0;\n    height: 100px;\n    width: 100%;\n    padding: 30px 0; }\n  .intro-header.small-header {\n    padding-bottom: 0px; }\n    .intro-header.small-header .search-section {\n      background-color: rgba(0, 0, 0, 0.4);\n      position: relative;\n      height: auto;\n      padding: 20px 0; }\n\n.intro-message {\n  position: relative;\n  padding-top: 10%;\n  padding-bottom: 10%; }\n\n.intro-message > h1 {\n  margin: 0;\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n  font-size: 5em; }\n\n.intro-divider {\n  width: 400px;\n  border-top: 1px solid #f8f8f8;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2); }\n\n.intro-message > h3 {\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6); }\n\n@media (max-width: 767px) {\n  .intro-message {\n    padding-bottom: 15%; }\n  .intro-message > h1 {\n    font-size: 3em; }\n  ul.intro-social-buttons > li {\n    display: block;\n    margin-bottom: 20px;\n    padding: 0; }\n  ul.intro-social-buttons > li:last-child {\n    margin-bottom: 0; }\n  .intro-divider {\n    width: 100%; } }\n\n.network-name {\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 2px; }\n\n.content-section-a {\n  padding: 50px 0;\n  background-color: #f8f8f8; }\n\n.content-section-b {\n  padding: 50px 0;\n  border-top: 1px solid #e7e7e7;\n  border-bottom: 1px solid #e7e7e7; }\n\n.section-heading {\n  margin-bottom: 30px; }\n\n.section-heading-spacer {\n  float: left;\n  width: 200px;\n  border-top: 3px solid #e7e7e7; }\n\n.banner {\n  padding: 100px 0;\n  color: #f8f8f8;\n  background: url(" + __webpack_require__(496) + ") no-repeat center center;\n  background-size: cover; }\n\n.banner h2 {\n  margin: 0;\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n  font-size: 3em; }\n\n.banner ul {\n  margin-bottom: 0; }\n\n.banner-social-buttons {\n  float: right;\n  margin-top: 0; }\n\n@media (max-width: 1199px) {\n  ul.banner-social-buttons {\n    float: left;\n    margin-top: 15px; } }\n\n@media (max-width: 767px) {\n  .banner h2 {\n    margin: 0;\n    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n    font-size: 3em; }\n  ul.banner-social-buttons > li {\n    display: block;\n    margin-bottom: 20px;\n    padding: 0; }\n  ul.banner-social-buttons > li:last-child {\n    margin-bottom: 0; } }\n\nfooter {\n  padding: 50px 0;\n  background-color: #f5f5f5; }\n\np.copyright {\n  margin: 15px 0 0; }\n\n.no-margin {\n  margin: 0; }\n\n.margin-top-15 {\n  margin-top: 15px !important; }\n\n.margin-bottom-15 {\n  margin-bottom: 15px !important; }\n\n.search-results-stats {\n  background-color: #eee;\n  padding: 20px 0;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd; }\n\n/*test*/\n.glyphicon {\n  margin-right: 5px; }\n\n.thumbnail {\n  margin-bottom: 20px;\n  padding: 0px;\n  -webkit-border-radius: 0px;\n  -moz-border-radius: 0px;\n  border-radius: 0px;\n  position: relative; }\n  .thumbnail .rating {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 10px;\n    background-color: rgba(229, 110, 0, 0.6);\n    color: white;\n    font-size: 1.5em;\n    text-align: center; }\n    .thumbnail .rating.rate-1 {\n      background: rgba(229, 110, 0, 0.6); }\n    .thumbnail .rating.rate-2 {\n      background: rgba(229, 186, 0, 0.6); }\n    .thumbnail .rating.rate-3 {\n      background: rgba(195, 229, 0, 0.6); }\n    .thumbnail .rating.rate-4 {\n      background: rgba(119, 229, 0, 0.6); }\n    .thumbnail .rating.rate-5 {\n      background: rgba(43, 229, 0, 0.6); }\n    .thumbnail .rating span {\n      display: block;\n      font-size: 0.5em; }\n  .thumbnail .list-group-item-heading {\n    line-height: 1.4;\n    font-size: 12pt; }\n  .thumbnail .caption {\n    min-height: 125px;\n    padding-bottom: 45px;\n    position: relative; }\n    .thumbnail .caption .rating-source {\n      position: absolute;\n      bottom: 10px;\n      right: 10px; }\n", ""]);

	// exports


/***/ }

})
//# sourceMappingURL=main.map