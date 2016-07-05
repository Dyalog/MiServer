'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _commonCommon = require('../common/common');

var Layer = (function () {
  function Layer() {
    _classCallCheck(this, _Layer);
  }

  var _Layer = Layer;
  Layer = _commonCommon.generateBindables('layers', ['bingMapType', 'bubbleSettings', 'dataSource', 'shapeDataPath', 'shapePropertyPath', 'enableMouseHover', 'enableSelection', 'key', 'labelSettings', 'layerType', 'legendSettings', 'mapItemsTemplate', 'markers', 'markerTemplate', 'selectedMapShapes', 'selectionMode', 'shapeData', 'shapeSettings', 'showMapItems', 'showTooltip', 'tooltipTemplate', 'urlTemplate'])(Layer) || Layer;
  Layer = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'layer')(Layer) || Layer;
  Layer = _commonCommon.inlineView('<template><content></content></template>')(Layer) || Layer;
  return Layer;
})();

exports.Layer = Layer;