define(['exports', '../common/common', 'ej.editor.min'], function (exports, _commonCommon, _ejEditorMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejCurrencyTextbox = (function (_WidgetBase) {
    _inherits(ejCurrencyTextbox, _WidgetBase);

    function ejCurrencyTextbox(element) {
      _classCallCheck(this, _ejCurrencyTextbox);

      _WidgetBase.call(this);
      this.isEditor = true;
      this.element = element;
    }

    var _ejCurrencyTextbox = ejCurrencyTextbox;
    ejCurrencyTextbox = _commonCommon.inject(Element)(ejCurrencyTextbox) || ejCurrencyTextbox;
    ejCurrencyTextbox = _commonCommon.generateBindables('ejCurrencyTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], [], { 'enableRTL': 'enableRtl' })(ejCurrencyTextbox) || ejCurrencyTextbox;
    ejCurrencyTextbox = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'currency-textbox')(ejCurrencyTextbox) || ejCurrencyTextbox;
    return ejCurrencyTextbox;
  })(_commonCommon.WidgetBase);

  exports.ejCurrencyTextbox = ejCurrencyTextbox;
});