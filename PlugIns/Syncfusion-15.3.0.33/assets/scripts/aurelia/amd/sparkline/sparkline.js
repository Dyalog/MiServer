define(['exports', '../common/widget-base', '../common/constants', '../common/decorators', '../common/common', 'syncfusion-javascript/Scripts/ej/datavisualization/ej.sparkline.min'], function (exports, _widgetBase, _constants, _decorators, _common) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ejSparkline = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _class;

  var ejSparkline = exports.ejSparkline = (_dec = (0, _common.customElement)(_constants.constants.elementPrefix + 'sparkline'), _dec2 = (0, _common.inlineView)('' + _constants.constants.aureliaTemplateString), _dec3 = (0, _decorators.generateBindables)('ejSparkline', ['background', 'fill', 'stroke', 'border', 'width', 'opacity', 'highPointColor', 'lowPointColor', 'startPointColor', 'endPointColor', 'negativePointColor', 'rangeBandSettings', 'locale', 'palette', 'isResponsive', 'enableCanvasRendering', 'enableGroupSeparator', 'dataSource', 'xName', 'yName', 'padding', 'type', 'theme', 'tooltip', 'markerSettings', 'size', 'axisLineSettings']), _dec4 = (0, _common.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = function (_WidgetBase) {
    _inherits(ejSparkline, _WidgetBase);

    function ejSparkline(element) {
      _classCallCheck(this, ejSparkline);

      var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

      _this.element = element;
      return _this;
    }

    return ejSparkline;
  }(_widgetBase.WidgetBase)) || _class) || _class) || _class) || _class);
});