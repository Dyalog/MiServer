System.register(['../common/common', 'ej.groupbutton.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejGroupButton;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejGroupbuttonMin) {}],
    execute: function () {
      ejGroupButton = (function (_WidgetBase) {
        _inherits(ejGroupButton, _WidgetBase);

        function ejGroupButton(element) {
          _classCallCheck(this, _ejGroupButton);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejGroupButton = ejGroupButton;
        ejGroupButton = inject(Element)(ejGroupButton) || ejGroupButton;
        ejGroupButton = generateBindables('ejGroupButton', ['cssClass', 'enableRTL', 'enabled', 'groupButtonMode', 'height', 'htmlAttributes', 'orientation', 'selectedItemIndex', 'showRoundedCorner', 'size', 'width'], [], { 'enableRTL': 'enableRtl' })(ejGroupButton) || ejGroupButton;
        ejGroupButton = customAttribute(constants.attributePrefix + 'group-button')(ejGroupButton) || ejGroupButton;
        return ejGroupButton;
      })(WidgetBase);

      _export('ejGroupButton', ejGroupButton);
    }
  };
});