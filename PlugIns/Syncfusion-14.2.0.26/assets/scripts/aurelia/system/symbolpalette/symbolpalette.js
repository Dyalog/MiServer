System.register(['../common/common', 'datavisualization/ej.diagram.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejSymbolPalette;

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
    }, function (_datavisualizationEjDiagramMin) {}],
    execute: function () {
      ejSymbolPalette = (function (_WidgetBase) {
        _inherits(ejSymbolPalette, _WidgetBase);

        function ejSymbolPalette(element) {
          _classCallCheck(this, _ejSymbolPalette);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejSymbolPalette = ejSymbolPalette;
        ejSymbolPalette = inject(Element)(ejSymbolPalette) || ejSymbolPalette;
        ejSymbolPalette = generateBindables('ejSymbolPalette', ['allowDrag', 'cssClass', 'defaultSettings', 'diagramId', 'headerHeight', 'height', 'paletteItemHeight', 'paletteItemWidth', 'palettes', 'previewHeight', 'previewOffset', 'previewWidth', 'showPaletteItemText', 'width'])(ejSymbolPalette) || ejSymbolPalette;
        ejSymbolPalette = inlineView('<template><content></content></template>')(ejSymbolPalette) || ejSymbolPalette;
        ejSymbolPalette = customElement(constants.elementPrefix + 'symbol-palette')(ejSymbolPalette) || ejSymbolPalette;
        return ejSymbolPalette;
      })(WidgetBase);

      _export('ejSymbolPalette', ejSymbolPalette);
    }
  };
});