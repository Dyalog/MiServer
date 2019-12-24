'use strict';

System.register(['../common/widget-base', '../common/constants', '../common/decorators', '../common/common'], function (_export, _context) {
  "use strict";

  var WidgetBase, constants, generateBindables, inject, inlineView, customElement, children, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, ejBulletGraph;

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
    setters: [function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonCommon) {
      inject = _commonCommon.inject;
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      children = _commonCommon.children;
    }],
    execute: function () {
      _export('ejBulletGraph', ejBulletGraph = (_dec = customElement(constants.elementPrefix + 'bullet-graph'), _dec2 = inlineView('' + constants.aureliaTemplateString), _dec3 = generateBindables('ejBulletGraph', ['applyRangeStrokeToLabels', 'applyRangeStrokeToTicks', 'captionSettings', 'comparativeMeasureValue', 'enableAnimation', 'enableResizing', 'flowDirection', 'height', 'isResponsive', 'enableGroupSeparator', 'locale', 'orientation', 'qualitativeRanges', 'qualitativeRangeSize', 'quantitativeScaleLength', 'quantitativeScaleSettings', 'theme', 'tooltipSettings', 'value', 'width']), _dec4 = inject(Element), _dec5 = children(constants.elementPrefix + 'qualitative-range'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = function (_WidgetBase) {
        _inherits(ejBulletGraph, _WidgetBase);

        function ejBulletGraph(element) {
          _classCallCheck(this, ejBulletGraph);

          var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

          _initDefineProp(_this, 'qualitativeRanges', _descriptor, _this);

          _this.element = element;
          _this.hasChildProperty = true;
          _this.childPropertyName = 'qualitativeRanges';
          return _this;
        }

        return ejBulletGraph;
      }(WidgetBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'qualitativeRanges', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      _export('ejBulletGraph', ejBulletGraph);
    }
  };
});