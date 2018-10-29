webpackJsonp([2],{

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(254)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(256)
/* template */
var __vue_template__ = __webpack_require__(262)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/pages/admin/issueance.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2421c48f", Component.options)
  } else {
    hotAPI.reload("data-v-2421c48f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(232)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(234)
/* template */
var __vue_template__ = __webpack_require__(235)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/admin/tables/items.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-240c34e1", Component.options)
  } else {
    hotAPI.reload("data-v-240c34e1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(233);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("161980ba", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-240c34e1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./items.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-240c34e1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./items.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        items: {
            required: true
        }
    },
    methods: {
        handleEdit: function handleEdit(item) {
            var payload = {
                id: item.id,
                item_code: item.item_code,
                item_name: item.item_name,
                price: item.price,
                quantity: item.quantity,
                unit: item.unit.id,
                site: item.site.id,
                dr_number: item.dr_number
            };
            this.$root.setFormType('EDIT_ITEM');
            this.$store.commit('ITEMS_MODULE/SET_ITEM', payload);
        },
        handleRemove: function handleRemove(item) {
            var bool = confirm('Delete ' + item.item_name + ' ?');

            if (bool) {
                this.$store.dispatch('ITEMS_MODULE/DELETE_ITEM', item.id);
            }
        }
    }
};

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    { staticClass: "table table-bordered", attrs: { id: "example" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.items.data, function(item, i) {
          return _vm.items.data.length != 0
            ? _c("tr", { key: i }, [
                _c("td", [_vm._v(_vm._s(item.item_name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.item_code))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.unit.unit_name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.quantity))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.price))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.site.site_name))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(_vm._f("humanReadableFormat")(item.create_at)))
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.dr_number))]),
                _vm._v(" "),
                _c("td", { attrs: { align: "center" } }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-primary waves-effect waves-light m-1",
                      attrs: {
                        type: "button",
                        "data-toggle": "modal",
                        "data-target": "#addmodal"
                      },
                      on: {
                        click: function($event) {
                          _vm.handleEdit(item)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-plus-circle" }),
                      _vm._v(" "),
                      _c("span", [_vm._v("UPDATE")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary waves-effect waves-light",
                      attrs: { type: "button", id: "confirm-btn-alert4" },
                      on: {
                        click: function($event) {
                          _vm.handleRemove(item)
                        }
                      }
                    },
                    [_vm._v("REMOVE\n                ")]
                  )
                ])
              ])
            : _c("tr", [_vm._m(1)])
        })
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-primary shadow-primary" }, [
      _c("tr", [
        _c("th", [_vm._v("Item Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Item Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unit")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Site")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date Added")]),
        _vm._v(" "),
        _c("th", [_vm._v("DR Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "9" } }, [
      _c("span", [_vm._v("Loading....")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-240c34e1", module.exports)
  }
}

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(255);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("793a098b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2421c48f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./issueance.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2421c48f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./issueance.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _issuance = __webpack_require__(257);

var _issuance2 = _interopRequireDefault(_issuance);

var _items = __webpack_require__(231);

var _items2 = _interopRequireDefault(_items);

var _index = __webpack_require__(280);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        next(function (vm) {
            vm.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS_LIST'); //items for select box
            vm.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS'); //items data table
        });
    },

    components: {
        IssuanceForm: _issuance2.default,
        IssuanceTable: _items2.default,
        IssuanceCart: _index2.default
    },
    computed: {
        stocks: function stocks() {
            return this.$store.getters['ITEMS_MODULE/GET_ITEMS'];
        }
    }
}; //
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

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(258)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(260)
/* template */
var __vue_template__ = __webpack_require__(261)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/form-modal/issuance.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c9930ab", Component.options)
  } else {
    hotAPI.reload("data-v-1c9930ab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(259);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5f7e7a68", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c9930ab\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./issuance.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c9930ab\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./issuance.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            isLoading: false,
            response: [],
            customer_types: [{ value: 'faculty', label: 'Faculty' }, { value: 'student', label: 'Student' }, { value: 'others', label: 'Others' }]
        };
    },
    computed: {
        customer: function customer() {
            return this.$store.getters['SALES_MODULE/GET_CUSTOMER'];
        },
        items: function items() {
            return this.$store.getters['ITEMS_MODULE/GET_ITEMS_LIST'];
        }
    },
    methods: {
        handleSubmit: function handleSubmit(form) {
            var _this = this;

            this.$validator.validateAll(form).then(function (response) {
                if (response) {
                    _this.isLoading = true;
                    var payload = {
                        customer_type: _this.customer.customer_type,
                        customer_id: _this.customer.customer_id,
                        fullname: _this.customer.fullname,
                        department: _this.customer.department,
                        item_id: _this.customer.item_id,
                        quantity: _this.customer.quantity,
                        remarks: _this.customer.remarks
                    };

                    _this.$store.dispatch('SALES_MODULE/STORE_SALE', payload).then(function (response) {
                        _this.isLoading = false;
                        _this.response = [];
                        _this.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS');
                        var baseURL = window.location.protocol + "//" + window.location.host;
                        window.open(baseURL + '/receipt?or_no=' + response.data.sales_no, 'Receipt', 'width=700,heigth=300');
                    }).catch(function (error) {
                        // toastr.error('Error', error.response.data);
                        _this.response = [];
                        _this.response = error.response;
                        _this.isLoading = false;
                    });
                }
            });
        }
    }
};

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      staticClass: "color-form",
      attrs: { "data-vv-scope": "SALES_FORM" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.handleSubmit("SALES_FORM")
        }
      }
    },
    [
      _c("div", { staticClass: "form-group row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _vm.response != null && _vm.response.status == 422
            ? _c(
                "div",
                {
                  staticClass: "alert alert-danger alert-dismissible",
                  attrs: { role: "alert" }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button", "data-dismiss": "alert" }
                    },
                    [_vm._v("×")]
                  ),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "alert-message" }, [
                    _c("p", [
                      _c("strong", [_vm._v(_vm._s(_vm.response.data.message))])
                    ]),
                    _vm._v(" "),
                    _vm.response.data.errors
                      ? _c(
                          "ul",
                          [
                            _vm.response.data.errors.customer_type
                              ? _vm._l(
                                  _vm.response.data.errors.customer_type,
                                  function(e) {
                                    return _c("li", { key: e }, [
                                      _vm._v(_vm._s(e))
                                    ])
                                  }
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.response.data.errors.quantity
                              ? _vm._l(
                                  _vm.response.data.errors.quantity,
                                  function(e) {
                                    return _c("li", { key: e }, [
                                      _vm._v(_vm._s(e))
                                    ])
                                  }
                                )
                              : _vm._e()
                          ],
                          2
                        )
                      : _vm._e()
                  ])
                ]
              )
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-sm-12 col-form-label",
            attrs: { for: "input-38" }
          },
          [_vm._v("Customer Type")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                },
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customer.customer_type,
                  expression: "customer.customer_type"
                }
              ],
              staticClass: "form-control",
              attrs: {
                name: "customer_type",
                "data-vv-as": "customer type",
                id: "basic-select"
              },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.customer,
                    "customer_type",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c(
                "option",
                { staticStyle: { color: "gray" }, attrs: { value: "" } },
                [_vm._v("Please Select Item")]
              ),
              _vm._v(" "),
              _vm._l(_vm.customer_types, function(item) {
                return _c(
                  "option",
                  { key: item.value, domProps: { value: item.value } },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(item.label) +
                        "\n                    "
                    )
                  ]
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "small",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("SALES_FORM.customer_type"),
                  expression: "errors.has('SALES_FORM.customer_type')"
                }
              ],
              staticClass: "form-text text-danger"
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.errors.first("SALES_FORM.customer_type")) +
                  "\n            "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-sm-12 col-form-label",
            attrs: { for: "input-36" }
          },
          [
            _vm.customer.customer_type == "student"
              ? _c("span", [
                  _vm._v("\n                Student ID\n            ")
                ])
              : _vm.customer.customer_type == "faculty"
                ? _c("span", [_vm._v(" Faculty ID")])
                : _c("span", [_vm._v("Customer ID")])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.customer.customer_id,
                expression: "customer.customer_id"
              }
            ],
            staticClass: "form-control",
            attrs: {
              name: "customer_id",
              type: "text",
              id: "input-36",
              placeholder: "Enter Student Number"
            },
            domProps: { value: _vm.customer.customer_id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.customer, "customer_id", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-sm-12 col-form-label",
            attrs: { for: "input-33" }
          },
          [_vm._v("Full Name")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
          _c("input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              },
              {
                name: "model",
                rawName: "v-model",
                value: _vm.customer.fullname,
                expression: "customer.fullname"
              }
            ],
            staticClass: "form-control",
            attrs: {
              name: "fullname",
              type: "text",
              id: "input-33",
              placeholder: "Enter customer full name"
            },
            domProps: { value: _vm.customer.fullname },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.customer, "fullname", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "small",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("SALES_FORM.fullname"),
                  expression: "errors.has('SALES_FORM.fullname')"
                }
              ],
              staticClass: "form-text text-danger"
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.errors.first("SALES_FORM.fullname")) +
                  "\n            "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-sm-12 col-form-label",
            attrs: { for: "input-35" }
          },
          [_vm._v("Department")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.customer.department,
                expression: "customer.department"
              }
            ],
            staticClass: "form-control",
            attrs: {
              name: "department",
              type: "text",
              id: "input-35",
              placeholder: "Enter Department"
            },
            domProps: { value: _vm.customer.department },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.customer, "department", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-sm-12 col-form-label",
            attrs: { for: "input-38" }
          },
          [_vm._v("Remarks\n            (Optional)")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.customer.remarks,
                expression: "customer.remarks"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              id: "input-38",
              placeholder: "Enter Remarks"
            },
            domProps: { value: _vm.customer.remarks },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.customer, "remarks", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-link bg-white text-info shadow px-5",
              attrs: { disabled: _vm.isLoading, type: "submit" }
            },
            [
              _c("i", { staticClass: "icon-check" }),
              _vm._v(" "),
              !_vm.isLoading
                ? _c("span", [_vm._v("Submit")])
                : _c("span", [_vm._v("Submitting ...")])
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert-icon" }, [
      _c("i", { staticClass: "icon-close" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1c9930ab", module.exports)
  }
}

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body table-responsive" },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-12 mx-auto" }, [
                  _c("div", { staticClass: "card bg-primary shadow-primary" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-5" },
                          [_c("IssuanceForm")],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-7" },
                          [_c("IssuanceCart")],
                          1
                        )
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("IssuanceTable", { attrs: { items: _vm.stocks } })
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-2 pb-2" }, [
      _c("div", { staticClass: "col-sm-9" }, [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "javaScript:void();" } }, [_vm._v("Home")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "javaScript:void();" } }, [
              _vm._v("User Account")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "javaScript:void();" } }, [
              _vm._v("Register")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-3" }, [
        _c("div", { staticClass: "btn-group float-sm-right" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-outline-primary waves-effect waves-light",
              attrs: { type: "button" }
            },
            [
              _c("i", { staticClass: "fa fa-cog mr-1" }),
              _vm._v("\n                    Setting")
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "btn btn-outline-primary dropdown-toggle dropdown-toggle-split waves-effect waves-light",
              attrs: { type: "button", "data-toggle": "dropdown" }
            },
            [_c("span", { staticClass: "caret" })]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-menu" }, [
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javaScript:void();" }
              },
              [_vm._v("Action")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javaScript:void();" }
              },
              [_vm._v("Another action")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javaScript:void();" }
              },
              [_vm._v("Something else here")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-divider" }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javaScript:void();" }
              },
              [_vm._v("Separated link")]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("i", { staticClass: "fa fa-clone" }),
      _vm._v(" My Inventory")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-title text-uppercase text-white" }, [
      _c("i", { staticClass: "\tfa fa-share-square-o" }),
      _vm._v("\n                                        Supplies Issuance")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2421c48f", module.exports)
  }
}

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(281)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(283)
/* template */
var __vue_template__ = __webpack_require__(284)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/admin/cart/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b1f86a4", Component.options)
  } else {
    hotAPI.reload("data-v-6b1f86a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(282);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("37e6a6ae", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b1f86a4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b1f86a4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    computed: {
        items: function items() {
            return this.$store.getters['ITEMS_MODULE/GET_ITEMS_LIST'];
        },
        cart: function cart() {
            return this.$store.getters['CART_MODULE/GET_CART_ITEMS'];
        },
        cart_item: function cart_item() {
            return this.$store.getters['CART_MODULE/GET_CART_ITEM'];
        }
    },
    methods: {
        addToCart: function addToCart(form) {
            var _this = this;

            this.$validator.validateAll(form).then(function (result) {
                if (result) {
                    var payload = {
                        item_id: _this.cart_item.item,
                        quantity: _this.cart_item.quantity
                    };
                }
            });
        }
    }
};

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12" }, [
      _c(
        "form",
        {
          attrs: { "data-vv-scope": "CART_FORM" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.addToCart("CART_FORM")
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "form-group col-md-5" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.cart_item.item,
                      expression: "cart_item.item"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { name: "item", id: "basic-select" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.cart_item,
                        "item",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c(
                    "option",
                    { staticStyle: { color: "gray" }, attrs: { value: "" } },
                    [_vm._v("Please Select Item")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.items, function(item) {
                    return _c(
                      "option",
                      { key: item.item_name, domProps: { value: item.id } },
                      [_vm._v(" " + _vm._s(item.item_name) + " ")]
                    )
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "small",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("CART_FORM.item"),
                      expression: "errors.has('CART_FORM.item')"
                    }
                  ],
                  staticClass: "form-text text-danger"
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.errors.first("CART_FORM.item")) +
                      "\n                    "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.cart_item.quantity,
                    expression: "cart_item.quantity"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required|min_value:1|numeric",
                    expression: "'required|min_value:1|numeric'"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  name: "quantity",
                  type: "number",
                  id: "input-37",
                  placeholder: "Enter Quantity"
                },
                domProps: { value: _vm.cart_item.quantity },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.cart_item, "quantity", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "small",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("CART_FORM.quantity"),
                      expression: "errors.has('CART_FORM.quantity')"
                    }
                  ],
                  staticClass: "form-text text-danger"
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.errors.first("CART_FORM.quantity")) +
                      "\n                    "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _vm._m(1)
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("h3", [_vm._v("Cart Items")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group col-md-3" }, [
      _c(
        "button",
        { staticClass: "btn btn-success btn-sm", attrs: { type: "submit" } },
        [_vm._v("Add to Cart")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 mt-3" }, [
      _c("table", { staticClass: "table table-sm table-light" }, [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("ITEM")]),
            _vm._v(" "),
            _c("th", [_vm._v("QTY")]),
            _vm._v(" "),
            _c("th", [_vm._v("PRICE")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("BAG")]),
            _vm._v(" "),
            _c("td", [_vm._v("10")]),
            _vm._v(" "),
            _c("td", [_vm._v("123.00")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("BAG")]),
            _vm._v(" "),
            _c("td", [_vm._v("10")]),
            _vm._v(" "),
            _c("td", [_vm._v("123.00")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("BAG")]),
            _vm._v(" "),
            _c("td", [_vm._v("10")]),
            _vm._v(" "),
            _c("td", [_vm._v("123.00")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6b1f86a4", module.exports)
  }
}

/***/ })

});