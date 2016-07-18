System.register(['../common/common', 'ej.timepicker.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejTimePicker;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejTimepickerMin) {}],
    execute: function () {
      ejTimePicker = (function (_WidgetBase) {
        _inherits(ejTimePicker, _WidgetBase);

        function ejTimePicker(element) {
          _classCallCheck(this, _ejTimePicker);

          _WidgetBase.call(this);
          this.isEditor = true;
          this.element = element;
        }

        var _ejTimePicker = ejTimePicker;
        ejTimePicker = inject(Element)(ejTimePicker) || ejTimePicker;
        ejTimePicker = generateBindables('ejTimePicker', ['cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'disableTimeRanges', 'height', 'hourInterval', 'htmlAttributes', 'interval', 'locale', 'maxTime', 'minTime', 'minutesInterval', 'popupHeight', 'popupWidth', 'readOnly', 'secondsInterval', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'value', 'width'], ['value'], { 'enableRTL': 'enableRtl' })(ejTimePicker) || ejTimePicker;
        ejTimePicker = customAttribute(constants.attributePrefix + 'time-picker')(ejTimePicker) || ejTimePicker;
        return ejTimePicker;
      })(WidgetBase);

      _export('ejTimePicker', ejTimePicker);
    }
  };
});