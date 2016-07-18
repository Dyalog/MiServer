'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.timepicker.min');

var ejTimePicker = (function (_WidgetBase) {
  _inherits(ejTimePicker, _WidgetBase);

  function ejTimePicker(element) {
    _classCallCheck(this, _ejTimePicker);

    _WidgetBase.call(this);
    this.isEditor = true;
    this.element = element;
  }

  var _ejTimePicker = ejTimePicker;
  ejTimePicker = _commonCommon.inject(Element)(ejTimePicker) || ejTimePicker;
  ejTimePicker = _commonCommon.generateBindables('ejTimePicker', ['cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'disableTimeRanges', 'height', 'hourInterval', 'htmlAttributes', 'interval', 'locale', 'maxTime', 'minTime', 'minutesInterval', 'popupHeight', 'popupWidth', 'readOnly', 'secondsInterval', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'value', 'width'], ['value'], { 'enableRTL': 'enableRtl' })(ejTimePicker) || ejTimePicker;
  ejTimePicker = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'time-picker')(ejTimePicker) || ejTimePicker;
  return ejTimePicker;
})(_commonCommon.WidgetBase);

exports.ejTimePicker = ejTimePicker;