'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.datetimepicker.min');

var ejDateTimePicker = (function (_WidgetBase) {
  _inherits(ejDateTimePicker, _WidgetBase);

  function ejDateTimePicker(element) {
    _classCallCheck(this, _ejDateTimePicker);

    _WidgetBase.call(this);
    this.isEditor = true;
    this.element = element;
  }

  var _ejDateTimePicker = ejDateTimePicker;
  ejDateTimePicker = _commonCommon.inject(Element)(ejDateTimePicker) || ejDateTimePicker;
  ejDateTimePicker = _commonCommon.generateBindables('ejDateTimePicker', ['buttonText', 'cssClass', 'dateTimeFormat', 'dayHeaderFormat', 'depthLevel', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'headerFormat', 'height', 'htmlAttributes', 'interval', 'locale', 'maxDateTime', 'minDateTime', 'popupPosition', 'readOnly', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'startDay', 'startLevel', 'stepMonths', 'timeDisplayFormat', 'timeDrillDown', 'timePopupWidth', 'validationMessage', 'validationRules', 'value', 'width'], ['value'], { 'enableRTL': 'enableRtl' })(ejDateTimePicker) || ejDateTimePicker;
  ejDateTimePicker = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'date-time-picker')(ejDateTimePicker) || ejDateTimePicker;
  return ejDateTimePicker;
})(_commonCommon.WidgetBase);

exports.ejDateTimePicker = ejDateTimePicker;