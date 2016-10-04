define(['exports', '../common/common'], function (exports, _common) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Layer = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Layer = exports.Layer = (_dec = (0, _common.inlineView)('' + _common.constants.aureliaTemplateString), _dec2 = (0, _common.customElement)(_common.constants.elementPrefix + 'layer'), _dec3 = (0, _common.generateBindables)('layers', ['bingMapType', 'bubbleSettings', 'dataSource', 'shapeDataPath', 'shapePropertyPath', 'enableMouseHover', 'enableSelection', 'key', 'labelSettings', 'layerType', 'legendSettings', 'mapItemsTemplate', 'markers', 'markerTemplate', 'selectedMapShapes', 'selectionMode', 'shapeData', 'shapeSettings', 'showMapItems', 'showTooltip', 'tooltipTemplate', 'urlTemplate']), _dec(_class = _dec2(_class = _dec3(_class = function Layer() {
    _classCallCheck(this, Layer);
  }) || _class) || _class) || _class);
});