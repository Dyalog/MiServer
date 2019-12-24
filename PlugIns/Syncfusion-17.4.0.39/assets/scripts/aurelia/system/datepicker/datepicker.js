'use strict';

System.register(['../common/widget-base', '../common/constants', '../common/decorators', '../common/common'], function (_export, _context) {
  "use strict";

  var WidgetBase, constants, generateBindables, customAttribute, inject, _dec, _dec2, _dec3, _class, ejDatePicker;

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

  return {
    setters: [function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
    }],
    execute: function () {
      _export('ejDatePicker', ejDatePicker = (_dec = customAttribute(constants.attributePrefix + 'date-picker'), _dec2 = generateBindables('ejDatePicker', ['allowEdit', 'allowDrillDown', 'blackoutDates', 'buttonText', 'cssClass', 'dateFormat', 'dayHeaderFormat', 'depthLevel', 'displayInline', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'fields', 'headerFormat', 'height', 'highlightSection', 'highlightWeekend', 'htmlAttributes', 'locale', 'maxDate', 'minDate', 'readOnly', 'showDisabledRange', 'showFooter', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'showTooltip', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'tooltipFormat', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'weekNumber', 'width'], ['value'], { 'enableRTL': ['enableRtl'] }), _dec3 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = function (_WidgetBase) {
        _inherits(ejDatePicker, _WidgetBase);

        function ejDatePicker(element) {
          _classCallCheck(this, ejDatePicker);

          var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

          _this.isEditor = true;
          _this.element = element;
          return _this;
        }

        return ejDatePicker;
      }(WidgetBase)) || _class) || _class) || _class));

      _export('ejDatePicker', ejDatePicker);
    }
  };
});