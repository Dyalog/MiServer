'use strict';

System.register(['../common/common', 'ej.editor.min'], function (_export, _context) {
  "use strict";

  var customAttribute, inject, WidgetBase, constants, generateBindables, _dec, _dec2, _dec3, _class, ejCurrencyTextbox;

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
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejEditorMin) {}],
    execute: function () {
      _export('ejCurrencyTextbox', ejCurrencyTextbox = (_dec = customAttribute(constants.attributePrefix + 'currency-textbox'), _dec2 = generateBindables('ejCurrencyTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec3 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = function (_WidgetBase) {
        _inherits(ejCurrencyTextbox, _WidgetBase);

        function ejCurrencyTextbox(element) {
          _classCallCheck(this, ejCurrencyTextbox);

          var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

          _this.isEditor = true;
          _this.element = element;
          return _this;
        }

        return ejCurrencyTextbox;
      }(WidgetBase)) || _class) || _class) || _class));

      _export('ejCurrencyTextbox', ejCurrencyTextbox);
    }
  };
});