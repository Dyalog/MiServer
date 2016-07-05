System.register(['../common/common', 'ej.splitbutton.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejSplitButton;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejSplitbuttonMin) {}],
    execute: function () {
      ejSplitButton = (function (_WidgetBase) {
        _inherits(ejSplitButton, _WidgetBase);

        function ejSplitButton(element) {
          _classCallCheck(this, _ejSplitButton);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejSplitButton = ejSplitButton;
        ejSplitButton = inject(Element)(ejSplitButton) || ejSplitButton;
        ejSplitButton = generateBindables('ejSplitButton', ['arrowPosition', 'buttonMode', 'contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'showRoundedCorner', 'size', 'suffixIcon', 'targetID', 'text', 'width'], [], { 'enableRTL': 'enableRtl', 'targetID': 'targetId' })(ejSplitButton) || ejSplitButton;
        ejSplitButton = customAttribute(constants.attributePrefix + 'split-button')(ejSplitButton) || ejSplitButton;
        return ejSplitButton;
      })(WidgetBase);

      _export('ejSplitButton', ejSplitButton);
    }
  };
});