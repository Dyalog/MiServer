'use strict';

System.register(['../common/constants', '../common/decorators', '../common/common'], function (_export, _context) {
  "use strict";

  var constants, generateBindables, inlineView, customElement, _dec, _dec2, _dec3, _class, Series;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
    }],
    execute: function () {
      _export('Series', Series = (_dec = inlineView('' + constants.aureliaTemplateString), _dec2 = customElement(constants.elementPrefix + 'series'), _dec3 = generateBindables('series', ['bearFillColor', 'border', 'border', 'border', 'border', 'animationDuration', 'bullFillColor', 'columnFacet', 'columnWidth', 'columnSpacing', 'stackingGroup', 'dashArray', 'dataSource', 'cardinalSplineTension', 'doughnutCoefficient', 'doughnutSize', 'drawType', 'enableAnimation', 'enableSmartLabels', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'fill', 'font', 'font', 'font', 'font', 'font', 'font', 'font', 'funnelHeight', 'funnelWidth', 'gapRatio', 'isClosed', 'isStacking', 'isTransposed', 'showMedian', 'labelPosition', 'splitMode', 'boxPlotMode', 'bubbleOptions', 'bubbleOptions', 'bubbleOptions', 'bubbleOptions', 'splineType', 'lineCap', 'lineJoin', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'name', 'opacity', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'palette', 'pieCoefficient', 'pieOfPieCoefficient', 'splitValue', 'gapWidth', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'positiveFill', 'connectorLine', 'connectorLine', 'connectorLine', 'connectorLine', 'connectorLine', 'dragSettings', 'dragSettings', 'dragSettings', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'pyramidMode', 'query', 'startAngle', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'type', 'visibility', 'visibleOnLegend', 'xAxisName', 'xName', 'yAxisName', 'yName', 'high', 'low', 'open', 'close', 'pointColorMappingName', 'zOrder', 'size', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings']), _dec(_class = _dec2(_class = _dec3(_class = function Series() {
        _classCallCheck(this, Series);
      }) || _class) || _class) || _class));

      _export('Series', Series);
    }
  };
});