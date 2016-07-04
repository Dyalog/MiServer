'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('datavisualization/ej.barcode.min');

var ejBarcode = (function (_WidgetBase) {
  _inherits(ejBarcode, _WidgetBase);

  function ejBarcode(element) {
    _classCallCheck(this, _ejBarcode);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejBarcode = ejBarcode;
  ejBarcode = _commonCommon.inject(Element)(ejBarcode) || ejBarcode;
  ejBarcode = _commonCommon.generateBindables('ejBarcode', ['barcodeToTextGapHeight', 'barHeight', 'darkBarColor', 'displayText', 'enabled', 'encodeStartStopSymbol', 'lightBarColor', 'narrowBarWidth', 'quietZone', 'symbologyType', 'text', 'textColor', 'wideBarWidth', 'xDimension'])(ejBarcode) || ejBarcode;
  ejBarcode = _commonCommon.inlineView('<template><content></content></template>')(ejBarcode) || ejBarcode;
  ejBarcode = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'barcode')(ejBarcode) || ejBarcode;
  return ejBarcode;
})(_commonCommon.WidgetBase);

exports.ejBarcode = ejBarcode;