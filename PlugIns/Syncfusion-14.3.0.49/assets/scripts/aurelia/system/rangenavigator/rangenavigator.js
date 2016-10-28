'use strict';

System.register(['../common/common', 'datavisualization/ej.rangenavigator.min'], function (_export, _context) {
  "use strict";

  var inject, WidgetBase, constants, generateBindables, inlineView, customElement, children, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, ejRangeNavigator;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
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

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_commonCommon) {
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      children = _commonCommon.children;
    }, function (_datavisualizationEjRangenavigatorMin) {}],
    execute: function () {
      _export('ejRangeNavigator', ejRangeNavigator = (_dec = customElement(constants.elementPrefix + 'range-navigator'), _dec2 = inlineView('' + constants.aureliaTemplateString), _dec3 = generateBindables('ejRangeNavigator', ['allowSnapping', 'border', 'dataSource', 'series', 'enableDeferredUpdate', 'enableScrollbar', 'enableRTL', 'isResponsive', 'labelSettings', 'locale', 'navigatorStyleSettings', 'padding', 'rangePadding', 'rangeSettings', 'selectedData', 'selectedRangeSettings', 'scrollRangeSettings', 'sizeSettings', 'theme', 'tooltipSettings', 'valueAxisSettings', 'valueType', 'xName', 'yName'], [], { 'enableRTL': 'enableRtl' }), _dec4 = inject(Element), _dec5 = children(constants.elementPrefix + 'range-series'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = function (_WidgetBase) {
        _inherits(ejRangeNavigator, _WidgetBase);

        function ejRangeNavigator(element) {
          _classCallCheck(this, ejRangeNavigator);

          var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

          _initDefineProp(_this, 'series', _descriptor, _this);

          _this.element = element;
          _this.hasChildProperty = true;
          _this.childPropertyName = 'series';
          return _this;
        }

        return ejRangeNavigator;
      }(WidgetBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'series', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      _export('ejRangeNavigator', ejRangeNavigator);
    }
  };
});