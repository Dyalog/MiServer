'use strict';

System.register(['../common/widget-base', '../common/constants', '../common/decorators', '../common/common', 'syncfusion-javascript/Scripts/ej/web/ej.pivotgauge.min'], function (_export, _context) {
  "use strict";

  var WidgetBase, constants, generateBindables, customElement, inlineView, inject, _dec, _dec2, _dec3, _dec4, _class, ejPivotGauge;

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

  return {
    setters: [function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonCommon) {
      customElement = _commonCommon.customElement;
      inlineView = _commonCommon.inlineView;
      inject = _commonCommon.inject;
    }, function (_syncfusionJavascriptScriptsEjWebEjPivotgaugeMin) {}],
    execute: function () {
      _export('ejPivotGauge', ejPivotGauge = (_dec = customElement(constants.elementPrefix + 'pivot-gauge'), _dec2 = inlineView('' + constants.aureliaTemplateString), _dec3 = generateBindables('ejPivotGauge', ['columnsCount', 'cssClass', 'customObject', 'dataSource', 'enableAnimation', 'enableTooltip', 'enableRTL', 'isResponsive', 'labelFormatSettings', 'locale', 'rowsCount', 'scales', 'serviceMethodSettings', 'showHeaderLabel', 'url', 'analysisMode', 'operationalMode'], [], { 'enableRTL': 'enableRtl' }), _dec4 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = function (_WidgetBase) {
        _inherits(ejPivotGauge, _WidgetBase);

        function ejPivotGauge(element) {
          _classCallCheck(this, ejPivotGauge);

          var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

          _this.element = element;
          return _this;
        }

        return ejPivotGauge;
      }(WidgetBase)) || _class) || _class) || _class) || _class));

      _export('ejPivotGauge', ejPivotGauge);
    }
  };
});