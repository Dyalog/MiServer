System.register(['../common/common', 'datavisualization/ej.sparkline.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejSparkline;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customElement = _commonCommon.customElement;
      inlineView = _commonCommon.inlineView;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_datavisualizationEjSparklineMin) {}],
    execute: function () {
      ejSparkline = (function (_WidgetBase) {
        _inherits(ejSparkline, _WidgetBase);

        function ejSparkline(element) {
          _classCallCheck(this, _ejSparkline);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejSparkline = ejSparkline;
        ejSparkline = inject(Element)(ejSparkline) || ejSparkline;
        ejSparkline = generateBindables('ejSparkline', ['background', 'fill', 'stroke', 'strokeWidth', 'opacity', 'bandOpacity', 'highPointColor', 'lowPointColor', 'startPointColor', 'endPointColor', 'negativePointColor', 'startRange', 'endRange', 'enableCanvasRendering', 'dataSource', 'xName', 'yName', 'padding', 'type', 'theme', 'tooltip', 'markerSettings', 'size', 'border', 'showAxis', 'axisLine'])(ejSparkline) || ejSparkline;
        ejSparkline = inlineView('<template><content></content></template>')(ejSparkline) || ejSparkline;
        ejSparkline = customElement(constants.elementPrefix + 'sparkline')(ejSparkline) || ejSparkline;
        return ejSparkline;
      })(WidgetBase);

      _export('ejSparkline', ejSparkline);
    }
  };
});