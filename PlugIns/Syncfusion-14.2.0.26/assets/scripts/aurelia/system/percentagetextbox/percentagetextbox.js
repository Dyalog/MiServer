System.register(['../common/common', 'ej.editor.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejPercentageTextbox;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejEditorMin) {}],
    execute: function () {
      ejPercentageTextbox = (function (_WidgetBase) {
        _inherits(ejPercentageTextbox, _WidgetBase);

        function ejPercentageTextbox(element) {
          _classCallCheck(this, _ejPercentageTextbox);

          _WidgetBase.call(this);
          this.isEditor = true;
          this.element = element;
        }

        var _ejPercentageTextbox = ejPercentageTextbox;
        ejPercentageTextbox = inject(Element)(ejPercentageTextbox) || ejPercentageTextbox;
        ejPercentageTextbox = generateBindables('ejPercentageTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], [], { 'enableRTL': 'enableRtl' })(ejPercentageTextbox) || ejPercentageTextbox;
        ejPercentageTextbox = customAttribute(constants.attributePrefix + 'percentage-textbox')(ejPercentageTextbox) || ejPercentageTextbox;
        return ejPercentageTextbox;
      })(WidgetBase);

      _export('ejPercentageTextbox', ejPercentageTextbox);
    }
  };
});