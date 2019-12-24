define(['exports', '../common/widget-base', '../common/constants', '../common/decorators', '../common/common'], function (exports, _widgetBase, _constants, _decorators, _common) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ejTimePicker = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var _dec, _dec2, _dec3, _class;

  var ejTimePicker = exports.ejTimePicker = (_dec = (0, _common.customAttribute)(_constants.constants.attributePrefix + 'time-picker'), _dec2 = (0, _decorators.generateBindables)('ejTimePicker', ['cssClass', 'disableTimeRanges', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'height', 'hourInterval', 'htmlAttributes', 'interval', 'locale', 'maxTime', 'minTime', 'minutesInterval', 'popupHeight', 'popupWidth', 'readOnly', 'secondsInterval', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'validationMessages', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), _dec3 = (0, _common.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = function (_WidgetBase) {
    _inherits(ejTimePicker, _WidgetBase);

    function ejTimePicker(element) {
      _classCallCheck(this, ejTimePicker);

      var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

      _this.isEditor = true;
      _this.element = element;
      return _this;
    }

    return ejTimePicker;
  }(_widgetBase.WidgetBase)) || _class) || _class) || _class);
});