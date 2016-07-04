define(['exports', '../common/common', 'ej.editor.min'], function (exports, _commonCommon, _ejEditorMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejNumericTextbox = (function (_WidgetBase) {
    _inherits(ejNumericTextbox, _WidgetBase);

    function ejNumericTextbox(element) {
      _classCallCheck(this, _ejNumericTextbox);

      _WidgetBase.call(this);
      this.isEditor = true;
      this.element = element;
    }

    var _ejNumericTextbox = ejNumericTextbox;
    ejNumericTextbox = _commonCommon.inject(Element)(ejNumericTextbox) || ejNumericTextbox;
    ejNumericTextbox = _commonCommon.generateBindables('ejNumericTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], [], { 'enableRTL': 'enableRtl' })(ejNumericTextbox) || ejNumericTextbox;
    ejNumericTextbox = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'numeric-textbox')(ejNumericTextbox) || ejNumericTextbox;
    return ejNumericTextbox;
  })(_commonCommon.WidgetBase);

  exports.ejNumericTextbox = ejNumericTextbox;
});