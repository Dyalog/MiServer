define(['exports', '../common/common', 'datavisualization/ej.diagram.min'], function (exports, _commonCommon, _datavisualizationEjDiagramMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejSymbolPalette = (function (_WidgetBase) {
    _inherits(ejSymbolPalette, _WidgetBase);

    function ejSymbolPalette(element) {
      _classCallCheck(this, _ejSymbolPalette);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejSymbolPalette = ejSymbolPalette;
    ejSymbolPalette = _commonCommon.inject(Element)(ejSymbolPalette) || ejSymbolPalette;
    ejSymbolPalette = _commonCommon.generateBindables('ejSymbolPalette', ['allowDrag', 'cssClass', 'defaultSettings', 'diagramId', 'headerHeight', 'height', 'paletteItemHeight', 'paletteItemWidth', 'palettes', 'previewHeight', 'previewOffset', 'previewWidth', 'showPaletteItemText', 'width'])(ejSymbolPalette) || ejSymbolPalette;
    ejSymbolPalette = _commonCommon.inlineView('<template><content></content></template>')(ejSymbolPalette) || ejSymbolPalette;
    ejSymbolPalette = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'symbol-palette')(ejSymbolPalette) || ejSymbolPalette;
    return ejSymbolPalette;
  })(_commonCommon.WidgetBase);

  exports.ejSymbolPalette = ejSymbolPalette;
});