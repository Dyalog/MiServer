define(['exports', '../common/common', 'ej.checkbox.min'], function (exports, _commonCommon, _ejCheckboxMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejCheckBox = (function (_WidgetBase) {
    _inherits(ejCheckBox, _WidgetBase);

    function ejCheckBox(element) {
      _classCallCheck(this, _ejCheckBox);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejCheckBox = ejCheckBox;
    ejCheckBox = _commonCommon.inject(Element)(ejCheckBox) || ejCheckBox;
    ejCheckBox = _commonCommon.generateBindables('ejCheckBox', ['checked', 'checkState', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage', 'validationRules', 'value'], ['checked'], { 'enableRTL': 'enableRtl' })(ejCheckBox) || ejCheckBox;
    ejCheckBox = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'check-box')(ejCheckBox) || ejCheckBox;
    return ejCheckBox;
  })(_commonCommon.WidgetBase);

  exports.ejCheckBox = ejCheckBox;
});