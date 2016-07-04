'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.pivotchart.min');

var ejPivotChart = (function (_WidgetBase) {
  _inherits(ejPivotChart, _WidgetBase);

  function ejPivotChart(element) {
    _classCallCheck(this, _ejPivotChart);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejPivotChart = ejPivotChart;
  ejPivotChart = _commonCommon.inject(Element)(ejPivotChart) || ejPivotChart;
  ejPivotChart = _commonCommon.generateBindables('ejPivotChart', ['analysisMode', 'cssClass', 'commonSeriesOptions', 'currentReport', 'dataSource', 'customObject', 'enable3D', 'isResponsive', 'legend', 'locale', 'operationalMode', 'primaryXAxis', 'primaryYAxis', 'rotation', 'serviceMethodSettings', 'size', 'url'])(ejPivotChart) || ejPivotChart;
  ejPivotChart = _commonCommon.inlineView('<template><content></content></template>')(ejPivotChart) || ejPivotChart;
  ejPivotChart = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'pivot-chart')(ejPivotChart) || ejPivotChart;
  return ejPivotChart;
})(_commonCommon.WidgetBase);

exports.ejPivotChart = ejPivotChart;