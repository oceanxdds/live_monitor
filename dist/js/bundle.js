(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/dist/js/bundle"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/app.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/app.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var yt_host = "https://www.youtube.com";
var yt_short_host = "https://youtu.be";
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      url: '',
      videos: []
    };
  },
  created: function created() {
    this.addVideo('OYJ3ycwSlik');
  },
  methods: {
    addVideo: function addVideo(code) {
      var temp = '';

      if (!code) {
        if (temp = this.url.match(/^[a-zA-Z0-9]+$/)) {
          code = temp[0];
        }
      }

      if (!code) {
        if (this.url.match(yt_host)) {
          if (temp = this.url.replace(yt_host, "").match(/v=[a-zA-Z0-9]+/)) {
            code = temp[0].replace('v=', '');
          }
        }
      }

      if (!code) {
        if (this.url.match(yt_short_host)) {
          if (temp = this.url.replace(yt_short_host, "").match(/[a-zA-Z0-9]+/)) {
            code = temp[0];
          }
        }
      }

      if (!code) return;
      if (this.videos.filter(function (v) {
        return v.code == code;
      }).length > 0) return;
      this.videos.push({
        code: code,
        focus: false,
        url: 'https://www.youtube.com/embed/' + code
      });
    },
    removeVideo: function removeVideo(code) {
      this.videos = this.videos.filter(function (v) {
        return v.code != code;
      });
    },
    focusVideo: function focusVideo(code) {
      this.videos.map(function (v) {
        v.focus = v.code == code && !v.focus;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/app.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./src/js/app.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n[v-cloak] { display: none;}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/app.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./src/js/app.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/app.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/app.vue?vue&type=template&id=7d73c7f4&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/app.vue?vue&type=template&id=7d73c7f4& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c(
        "b-input-group",
        { staticClass: "my-3", attrs: { prepend: "YouTube" } },
        [
          _c("b-form-input", {
            attrs: { placeholder: "ID, or URL, or Short URL" },
            model: {
              value: _vm.url,
              callback: function($$v) {
                _vm.url = $$v
              },
              expression: "url"
            }
          }),
          _vm._v(" "),
          _c(
            "b-input-group-append",
            [
              _c(
                "b-button",
                {
                  attrs: { size: "sm", text: "Button", variant: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.addVideo()
                    }
                  }
                },
                [_vm._v("Go")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-row my-3" },
        _vm._l(_vm.videos, function(v) {
          return _c(
            "div",
            {
              key: v.code,
              staticClass: "col-12 col-md-6 col-lg-4 col-xl-3",
              class: {
                "col-md-12": v.focus,
                "col-lg-8": v.focus,
                "col-xl-6": v.focus
              }
            },
            [
              _c(
                "div",
                { staticClass: "border" },
                [
                  _vm._v(
                    "\n                " + _vm._s(v.code) + "\n                "
                  ),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "secondary", size: "sm" },
                      on: {
                        click: function($event) {
                          return _vm.focusVideo(v.code)
                        }
                      }
                    },
                    [_vm._v("Focus")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "danger", size: "sm" },
                      on: {
                        click: function($event) {
                          return _vm.removeVideo(v.code)
                        }
                      }
                    },
                    [_vm._v("×")]
                  ),
                  _vm._v(" "),
                  _c("b-embed", {
                    attrs: {
                      type: "iframe",
                      aspect: "16by9",
                      src: v.url,
                      allowfullscreen: ""
                    }
                  })
                ],
                1
              )
            ]
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue */ "./src/js/app.vue");



vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: 'app',
  render: function render(r) {
    return r(_app_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
});

/***/ }),

/***/ "./src/js/app.vue":
/*!************************!*\
  !*** ./src/js/app.vue ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_7d73c7f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=7d73c7f4& */ "./src/js/app.vue?vue&type=template&id=7d73c7f4&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./src/js/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&lang=css& */ "./src/js/app.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_7d73c7f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_7d73c7f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/app.vue?vue&type=script&lang=js&":
/*!*************************************************!*\
  !*** ./src/js/app.vue?vue&type=script&lang=js& ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/app.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************!*\
  !*** ./src/js/app.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/app.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/app.vue?vue&type=template&id=7d73c7f4&":
/*!*******************************************************!*\
  !*** ./src/js/app.vue?vue&type=template&id=7d73c7f4& ***!
  \*******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_7d73c7f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=7d73c7f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/app.vue?vue&type=template&id=7d73c7f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_7d73c7f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_7d73c7f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi @babel/polyfill ./src/js/app.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! d:\oceanx\dev\yt_monitor\src\js\app.js */"./src/js/app.js");


/***/ })

},[[0,"/dist/js/manifest","/dist/js/vendor"]]]);