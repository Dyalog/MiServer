System.register(['../common/common', 'ej.datetimepicker.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejDateTimePicker;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejDatetimepickerMin) {}],
    execute: function () {
      ejDateTimePicker = (function (_WidgetBase) {
        _inherits(ejDateTimePicker, _WidgetBase);

        function ejDateTimePicker(element) {
          _classCallCheck(this, _ejDateTimePicker);

          _WidgetBase.call(this);
          this.isEditor = true;
          this.element = element;
        }

        var _ejDateTimePicker = ejDateTimePicker;
        ejDateTimePicker = inject(Element)(ejDateTimePicker) || ejDateTimePicker;
        ejDateTimePicker = generateBindables('ejDateTimePicker', ['buttonText', 'cssClass', 'dateTimeFormat', 'dayHeaderFormat', 'depthLevel', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'headerFormat', 'height', 'htmlAttributes', 'interval', 'locale', 'maxDateTime', 'minDateTime', 'popupPosition', 'readOnly', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'startDay', 'startLevel', 'stepMonths', 'timeDisplayFormat', 'timeDrillDown', 'timePopupWidth', 'validationMessage', 'validationRules', 'value', 'width'], ['value'], { 'enableRTL': 'enableRtl' })(ejDateTimePicker) || ejDateTimePicker;
        ejDateTimePicker = customAttribute(constants.attributePrefix + 'date-time-picker')(ejDateTimePicker) || ejDateTimePicker;
        return ejDateTimePicker;
      })(WidgetBase);

      _export('ejDateTimePicker', ejDateTimePicker);
    }
  };
});