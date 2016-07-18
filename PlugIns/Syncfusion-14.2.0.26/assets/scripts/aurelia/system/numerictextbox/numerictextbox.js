System.register(['../common/common', 'ej.editor.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejNumericTextbox;

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
      ejNumericTextbox = (function (_WidgetBase) {
        _inherits(ejNumericTextbox, _WidgetBase);

        function ejNumericTextbox(element) {
          _classCallCheck(this, _ejNumericTextbox);

          _WidgetBase.call(this);
          this.isEditor = true;
          this.element = element;
        }

        var _ejNumericTextbox = ejNumericTextbox;
        ejNumericTextbox = inject(Element)(ejNumericTextbox) || ejNumericTextbox;
        ejNumericTextbox = generateBindables('ejNumericTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], [], { 'enableRTL': 'enableRtl' })(ejNumericTextbox) || ejNumericTextbox;
        ejNumericTextbox = customAttribute(constants.attributePrefix + 'numeric-textbox')(ejNumericTextbox) || ejNumericTextbox;
        return ejNumericTextbox;
      })(WidgetBase);

      _export('ejNumericTextbox', ejNumericTextbox);
    }
  };
});