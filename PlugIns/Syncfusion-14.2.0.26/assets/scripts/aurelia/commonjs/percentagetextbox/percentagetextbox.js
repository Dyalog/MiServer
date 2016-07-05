'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.editor.min');

var ejPercentageTextbox = (function (_WidgetBase) {
  _inherits(ejPercentageTextbox, _WidgetBase);

  function ejPercentageTextbox(element) {
    _classCallCheck(this, _ejPercentageTextbox);

    _WidgetBase.call(this);
    this.isEditor = true;
    this.element = element;
  }

  var _ejPercentageTextbox = ejPercentageTextbox;
  ejPercentageTextbox = _commonCommon.inject(Element)(ejPercentageTextbox) || ejPercentageTextbox;
  ejPercentageTextbox = _commonCommon.generateBindables('ejPercentageTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], [], { 'enableRTL': 'enableRtl' })(ejPercentageTextbox) || ejPercentageTextbox;
  ejPercentageTextbox = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'percentage-textbox')(ejPercentageTextbox) || ejPercentageTextbox;
  return ejPercentageTextbox;
})(_commonCommon.WidgetBase);

exports.ejPercentageTextbox = ejPercentageTextbox;