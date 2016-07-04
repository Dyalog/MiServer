define(['exports', '../common/common', 'ej.togglebutton.min'], function (exports, _commonCommon, _ejTogglebuttonMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejToggleButton = (function (_WidgetBase) {
    _inherits(ejToggleButton, _WidgetBase);

    function ejToggleButton(element) {
      _classCallCheck(this, _ejToggleButton);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejToggleButton = ejToggleButton;
    ejToggleButton = _commonCommon.inject(Element)(ejToggleButton) || ejToggleButton;
    ejToggleButton = _commonCommon.generateBindables('ejToggleButton', ['activePrefixIcon', 'activeSuffixIcon', 'activeText', 'contentType', 'cssClass', 'defaultPrefixIcon', 'defaultSuffixIcon', 'defaultText', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'preventToggle', 'showRoundedCorner', 'size', 'toggleState', 'type', 'width'], [], { 'enableRTL': 'enableRtl' })(ejToggleButton) || ejToggleButton;
    ejToggleButton = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'toggle-button')(ejToggleButton) || ejToggleButton;
    return ejToggleButton;
  })(_commonCommon.WidgetBase);

  exports.ejToggleButton = ejToggleButton;
});