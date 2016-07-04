'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.datepicker.min');

var ejDatePicker = (function (_WidgetBase) {
  _inherits(ejDatePicker, _WidgetBase);

  function ejDatePicker(element) {
    _classCallCheck(this, _ejDatePicker);

    _WidgetBase.call(this);
    this.isEditor = true;
    this.element = element;
  }

  var _ejDatePicker = ejDatePicker;
  ejDatePicker = _commonCommon.inject(Element)(ejDatePicker) || ejDatePicker;
  ejDatePicker = _commonCommon.generateBindables('ejDatePicker', ['allowEdit', 'allowDrillDown', 'buttonText', 'cssClass', 'dateFormat', 'dayHeaderFormat', 'depthLevel', 'displayInline', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'fields', 'headerFormat', 'height', 'highlightSection', 'highlightWeekend', 'htmlAttributes', 'locale', 'maxDate', 'minDate', 'readOnly', 'showFooter', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'showTooltip', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'tooltipFormat', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': 'enableRtl' })(ejDatePicker) || ejDatePicker;
  ejDatePicker = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'date-picker')(ejDatePicker) || ejDatePicker;
  return ejDatePicker;
})(_commonCommon.WidgetBase);

exports.ejDatePicker = ejDatePicker;