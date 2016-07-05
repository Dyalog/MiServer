System.register(['../common/common'], function (_export) {
  'use strict';

  var inlineView, customElement, constants, generateBindables, Layer;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }],
    execute: function () {
      Layer = (function () {
        function Layer() {
          _classCallCheck(this, _Layer);
        }

        var _Layer = Layer;
        Layer = generateBindables('layers', ['bingMapType', 'bubbleSettings', 'dataSource', 'shapeDataPath', 'shapePropertyPath', 'enableMouseHover', 'enableSelection', 'key', 'labelSettings', 'layerType', 'legendSettings', 'mapItemsTemplate', 'markers', 'markerTemplate', 'selectedMapShapes', 'selectionMode', 'shapeData', 'shapeSettings', 'showMapItems', 'showTooltip', 'tooltipTemplate', 'urlTemplate'])(Layer) || Layer;
        Layer = customElement(constants.elementPrefix + 'layer')(Layer) || Layer;
        Layer = inlineView('<template><content></content></template>')(Layer) || Layer;
        return Layer;
      })();

      _export('Layer', Layer);
    }
  };
});