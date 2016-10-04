'use strict';

System.register(['../common/common'], function (_export, _context) {
  "use strict";

  var inlineView, customElement, constants, generateBindables, _dec, _dec2, _dec3, _class, Series;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }],
    execute: function () {
      _export('Series', Series = (_dec = inlineView('' + constants.aureliaTemplateString), _dec2 = customElement(constants.elementPrefix + 'series'), _dec3 = generateBindables('series', ['bearFillColor', 'border', 'bullFillColor', 'columnWidth', 'columnSpacing', 'dashArray', 'dataSource', 'doughnutCoefficient', 'doughnutSize', 'drawType', 'enableAnimation', 'enableSmartLabels', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'fill', 'font', 'funnelHeight', 'funnelWidth', 'gapRatio', 'isClosed', 'isStacking', 'isTransposed', 'labelPosition', 'lineCap', 'lineJoin', 'marker', 'name', 'opacity', 'palette', 'pieCoefficient', 'emptyPointSettings', 'positiveFill', 'connectorLine', 'errorBar', 'points', 'pyramidMode', 'query', 'startAngle', 'tooltip', 'type', 'visibility', 'visibleOnLegend', 'xAxisName', 'xName', 'yAxisName', 'yName', 'high', 'low', 'open', 'close', 'pointColorMappingName', 'zOrder', 'size', 'trendlines', 'highlightSettings', 'selectionSettings']), _dec(_class = _dec2(_class = _dec3(_class = function Series() {
        _classCallCheck(this, Series);
      }) || _class) || _class) || _class));

      _export('Series', Series);
    }
  };
});