System.register(['../common/common', 'datavisualization/ej.barcode.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejBarcode;

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
    }, function (_datavisualizationEjBarcodeMin) {}],
    execute: function () {
      ejBarcode = (function (_WidgetBase) {
        _inherits(ejBarcode, _WidgetBase);

        function ejBarcode(element) {
          _classCallCheck(this, _ejBarcode);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejBarcode = ejBarcode;
        ejBarcode = inject(Element)(ejBarcode) || ejBarcode;
        ejBarcode = generateBindables('ejBarcode', ['barcodeToTextGapHeight', 'barHeight', 'darkBarColor', 'displayText', 'enabled', 'encodeStartStopSymbol', 'lightBarColor', 'narrowBarWidth', 'quietZone', 'symbologyType', 'text', 'textColor', 'wideBarWidth', 'xDimension'])(ejBarcode) || ejBarcode;
        ejBarcode = inlineView('<template><content></content></template>')(ejBarcode) || ejBarcode;
        ejBarcode = customElement(constants.elementPrefix + 'barcode')(ejBarcode) || ejBarcode;
        return ejBarcode;
      })(WidgetBase);

      _export('ejBarcode', ejBarcode);
    }
  };
});