'use strict';

System.register(['../common/constants', '../common/decorators', '../common/common'], function (_export, _context) {
  "use strict";

  var constants, generateBindables, inlineView, customElement, _dec, _dec2, _dec3, _class, Layer;

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
      _export('Layer', Layer = (_dec = inlineView('' + constants.aureliaTemplateString), _dec2 = customElement(constants.elementPrefix + 'layer'), _dec3 = generateBindables('layers', ['bingMapType', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'dataSource', 'shapeDataPath', 'shapePropertyPath', 'enableMouseHover', 'enableSelection', 'key', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'geometryType', 'layerType', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'mapItemsTemplate', 'markers', 'markerTemplate', 'selectedMapShapes', 'selectionMode', 'shapeData', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'showMapItems', 'showTooltip', 'tooltipTemplate', 'urlTemplate', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers']), _dec(_class = _dec2(_class = _dec3(_class = function Layer() {
        _classCallCheck(this, Layer);
      }) || _class) || _class) || _class));

      _export('Layer', Layer);
    }
  };
});