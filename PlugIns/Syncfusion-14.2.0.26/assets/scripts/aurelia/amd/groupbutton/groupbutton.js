define(['exports', '../common/common', 'ej.groupbutton.min'], function (exports, _commonCommon, _ejGroupbuttonMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejGroupButton = (function (_WidgetBase) {
    _inherits(ejGroupButton, _WidgetBase);

    function ejGroupButton(element) {
      _classCallCheck(this, _ejGroupButton);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejGroupButton = ejGroupButton;
    ejGroupButton = _commonCommon.inject(Element)(ejGroupButton) || ejGroupButton;
    ejGroupButton = _commonCommon.generateBindables('ejGroupButton', ['cssClass', 'enableRTL', 'enabled', 'groupButtonMode', 'height', 'htmlAttributes', 'orientation', 'selectedItemIndex', 'showRoundedCorner', 'size', 'width'], [], { 'enableRTL': 'enableRtl' })(ejGroupButton) || ejGroupButton;
    ejGroupButton = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'group-button')(ejGroupButton) || ejGroupButton;
    return ejGroupButton;
  })(_commonCommon.WidgetBase);

  exports.ejGroupButton = ejGroupButton;
});