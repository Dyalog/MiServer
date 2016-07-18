System.register(['../common/common', 'ej.pivotchart.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejPivotChart;

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
    }, function (_ejPivotchartMin) {}],
    execute: function () {
      ejPivotChart = (function (_WidgetBase) {
        _inherits(ejPivotChart, _WidgetBase);

        function ejPivotChart(element) {
          _classCallCheck(this, _ejPivotChart);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejPivotChart = ejPivotChart;
        ejPivotChart = inject(Element)(ejPivotChart) || ejPivotChart;
        ejPivotChart = generateBindables('ejPivotChart', ['analysisMode', 'cssClass', 'commonSeriesOptions', 'currentReport', 'dataSource', 'customObject', 'enable3D', 'isResponsive', 'legend', 'locale', 'operationalMode', 'primaryXAxis', 'primaryYAxis', 'rotation', 'serviceMethodSettings', 'size', 'url'])(ejPivotChart) || ejPivotChart;
        ejPivotChart = inlineView('<template><content></content></template>')(ejPivotChart) || ejPivotChart;
        ejPivotChart = customElement(constants.elementPrefix + 'pivot-chart')(ejPivotChart) || ejPivotChart;
        return ejPivotChart;
      })(WidgetBase);

      _export('ejPivotChart', ejPivotChart);
    }
  };
});