System.register(['../common/common', 'ej.datepicker.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejDatePicker;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejDatepickerMin) {}],
    execute: function () {
      ejDatePicker = (function (_WidgetBase) {
        _inherits(ejDatePicker, _WidgetBase);

        function ejDatePicker(element) {
          _classCallCheck(this, _ejDatePicker);

          _WidgetBase.call(this);
          this.isEditor = true;
          this.element = element;
        }

        var _ejDatePicker = ejDatePicker;
        ejDatePicker = inject(Element)(ejDatePicker) || ejDatePicker;
        ejDatePicker = generateBindables('ejDatePicker', ['allowEdit', 'allowDrillDown', 'buttonText', 'cssClass', 'dateFormat', 'dayHeaderFormat', 'depthLevel', 'displayInline', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'fields', 'headerFormat', 'height', 'highlightSection', 'highlightWeekend', 'htmlAttributes', 'locale', 'maxDate', 'minDate', 'readOnly', 'showFooter', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'showTooltip', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'tooltipFormat', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': 'enableRtl' })(ejDatePicker) || ejDatePicker;
        ejDatePicker = customAttribute(constants.attributePrefix + 'date-picker')(ejDatePicker) || ejDatePicker;
        return ejDatePicker;
      })(WidgetBase);

      _export('ejDatePicker', ejDatePicker);
    }
  };
});