define(['exports', '../common/common', 'ej.radiobutton.min'], function (exports, _commonCommon, _ejRadiobuttonMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejRadioButton = (function (_WidgetBase) {
    _inherits(ejRadioButton, _WidgetBase);

    function ejRadioButton(element) {
      _classCallCheck(this, _ejRadioButton);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejRadioButton = ejRadioButton;
    ejRadioButton = _commonCommon.inject(Element)(ejRadioButton) || ejRadioButton;
    ejRadioButton = _commonCommon.generateBindables('ejRadioButton', ['checked', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'htmlAttributes', 'id', 'idPrefix', 'name', 'size', 'text', 'validationMessage', 'validationRules', 'value'], [], { 'enableRTL': 'enableRtl' })(ejRadioButton) || ejRadioButton;
    ejRadioButton = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'radio-button')(ejRadioButton) || ejRadioButton;
    return ejRadioButton;
  })(_commonCommon.WidgetBase);

  exports.ejRadioButton = ejRadioButton;
});