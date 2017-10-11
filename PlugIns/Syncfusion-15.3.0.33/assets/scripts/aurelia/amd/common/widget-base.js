define(['exports', './events', '../common/util', '../common/decorators'], function (exports, _events, _util, _decorators) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.WidgetBase = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  var _dec, _desc, _value, _class;

  var firstValue = {};
  var WidgetBase = exports.WidgetBase = (_dec = (0, _decorators.delayed)(), (_class = function () {
    function WidgetBase() {
      _classCallCheck(this, WidgetBase);
    }

    WidgetBase.prototype.createWidget = function createWidget(option) {
      var _this = this;

      this.allOption = this.getWidgetOptions(option.element);
      if (!this.ejOptions && !this.isEditor) {
        this.createTwoWays();
      }
      this.eWidget = this.widget = jQuery($(option.element))[this.controlName](this.allOption).data(this.controlName);
      if (this.templateProcessor) {
        this.templateProcessor.initWidgetDependancies();
      }
      if (this.isEditor) {
        this.widget.model._change = function (evt) {
          if ('eValue' in _this) {
            _this[_this.util.getBindablePropertyName('value')] = evt.value;
          }
        };
      }
    };

    WidgetBase.prototype.bind = function bind(ctx, overrideCtx) {
      this.parentCtx = overrideCtx;
      if (this.widget && this.isEditor) {
        this.widget.option('value', this.eValue);
      }
    };

    WidgetBase.prototype.createTwoWays = function createTwoWays() {
      var model = this.allOption;
      var twoWays = this.twoWays;
      var len = twoWays.length;
      for (var i = 0; i < len; i++) {
        var prop = twoWays[i];
        ej.createObject(prop, this.addTwoways(prop), model);
      }
    };

    WidgetBase.prototype.addTwoways = function addTwoways(prop) {
      var model = this;
      var value = firstValue;
      return function (newVal, isApp) {
        if (value === firstValue) {
          var viewModelProp = model.util.getBindablePropertyName(prop);
          value = model[viewModelProp];
          if (value === undefined) {
            value = this.defaults[prop];
          }
          return value;
        }
        if (newVal === undefined) {
          return value;
        }
        if (value === newVal) {
          return null;
        }
        value = newVal;
        if (!isApp && model.util.hasValue(newVal)) {
          var _viewModelProp = model.util.getBindablePropertyName(prop);
          model[_viewModelProp] = newVal;
        }
        return null;
      };
    };

    WidgetBase.prototype.getWidgetOptions = function getWidgetOptions(element) {
      var propOptions = void 0;
      if (this.ejOptions) {
        propOptions = this.ejOptions;
      } else {
        propOptions = this.util.getOptions(this, this.controlProperties);
      }
      var eventOption = (0, _events.getEventOption)(element);
      if (this.hasChildProperty) {
        this.getChildProperties(propOptions);
      }
      return Object.assign({}, propOptions, eventOption);
    };

    WidgetBase.prototype.getChildProperties = function getChildProperties(options) {
      var PropertyName = this.childPropertyName;
      var childCollection = this[PropertyName];
      var len = childCollection.length;
      if (len) {
        options[PropertyName] = [];
        var childProperties = childCollection[0].controlProperties;
        for (var i = 0; i < len; i++) {
          options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
        }
      }
    };

    WidgetBase.prototype.attached = function attached() {
      if (this.templateProcessor) {
        this[this.childPropertyName].forEach(function (template) {
          return template.setTemplates();
        });
      }
      this.util = new _util.Util();
      this.createWidget({ element: this.element });
    };

    WidgetBase.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
      if (this.widget) {
        var modelValue = void 0;
        var prop = this.util.getControlPropertyName(this, property);
        if (prop) {
          if (prop === 'widget') {
            return;
          } else if (prop !== 'options') {
            modelValue = this.widget.model[prop];
            var isTwoway = typeof modelValue === 'function';
            if (isTwoway) {
              modelValue = modelValue();
            }
            if (modelValue !== newValue) {
              if (isTwoway) {
                newValue = this.addTwoways(prop);
              }
              this.widget.option(prop, newValue);
            }
          } else {
            this.widget.option(newValue);
          }
        }
      }
    };

    WidgetBase.prototype.detached = function detached() {
      if (this.templateProcessor) {
        this.templateProcessor.clearTempalte();
      }
      if (this.widget) {
        this.widget.destroy();
      }
    };

    return WidgetBase;
  }(), (_applyDecoratedDescriptor(_class.prototype, 'attached', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'attached'), _class.prototype)), _class));
});