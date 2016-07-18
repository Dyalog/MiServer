define(['exports', '../common/common'], function (exports, _commonCommon) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Series = (function () {
    function Series() {
      _classCallCheck(this, _Series);
    }

    var _Series = Series;
    Series = _commonCommon.generateBindables('series', ['bearFillColor', 'border', 'bullFillColor', 'dashArray', 'dataSource', 'doughnutCoefficient', 'doughnutSize', 'drawType', 'enableAnimation', 'enableSmartLabels', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'fill', 'font', 'funnelHeight', 'funnelWidth', 'gapRatio', 'isClosed', 'isStacking', 'isTransposed', 'labelPosition', 'lineCap', 'lineJoin', 'marker', 'name', 'opacity', 'palette', 'pieCoefficient', 'emptyPointSettings', 'positiveFill', 'connectorLine', 'errorBar', 'points', 'pyramidMode', 'query', 'startAngle', 'tooltip', 'type', 'visibility', 'visibleOnLegend', 'xAxisName', 'xName', 'yAxisName', 'yName', 'high', 'low', 'open', 'close', 'size', 'trendlines', 'highlightSettings', 'selectionSettings'])(Series) || Series;
    Series = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'series')(Series) || Series;
    Series = _commonCommon.inlineView('<template><content></content></template>')(Series) || Series;
    return Series;
  })();

  exports.Series = Series;
});