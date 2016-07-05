System.register(['../common/common', 'ej.colorpicker.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejColorPicker;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejColorpickerMin) {}],
    execute: function () {
      ejColorPicker = (function (_WidgetBase) {
        _inherits(ejColorPicker, _WidgetBase);

        function ejColorPicker(element) {
          _classCallCheck(this, _ejColorPicker);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejColorPicker = ejColorPicker;
        ejColorPicker = inject(Element)(ejColorPicker) || ejColorPicker;
        ejColorPicker = generateBindables('ejColorPicker', ['buttonText', 'buttonMode', 'columns', 'cssClass', 'custom', 'displayInline', 'enabled', 'enableOpacity', 'htmlAttributes', 'modelType', 'opacityValue', 'palette', 'presetType', 'showApplyCancel', 'showClearButton', 'showPreview', 'showRecentColors', 'showSwitcher', 'showTooltip', 'toolIcon', 'tooltipText', 'value'], ['value', 'opacityValue'])(ejColorPicker) || ejColorPicker;
        ejColorPicker = customAttribute(constants.attributePrefix + 'color-picker')(ejColorPicker) || ejColorPicker;
        return ejColorPicker;
      })(WidgetBase);

      _export('ejColorPicker', ejColorPicker);
    }
  };
});