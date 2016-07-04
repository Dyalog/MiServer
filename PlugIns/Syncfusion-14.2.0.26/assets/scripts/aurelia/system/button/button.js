System.register(['../common/common', 'ej.button.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejButton;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejButtonMin) {}],
    execute: function () {
      ejButton = (function (_WidgetBase) {
        _inherits(ejButton, _WidgetBase);

        function ejButton(element) {
          _classCallCheck(this, _ejButton);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejButton = ejButton;
        ejButton = inject(Element)(ejButton) || ejButton;
        ejButton = generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text', 'timeInterval', 'type', 'width'], [], { 'enableRTL': 'enableRtl' })(ejButton) || ejButton;
        ejButton = customAttribute(constants.attributePrefix + 'button')(ejButton) || ejButton;
        return ejButton;
      })(WidgetBase);

      _export('ejButton', ejButton);
    }
  };
});