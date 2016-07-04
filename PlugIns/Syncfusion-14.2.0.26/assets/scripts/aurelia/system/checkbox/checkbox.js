System.register(['../common/common', 'ej.checkbox.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejCheckBox;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejCheckboxMin) {}],
    execute: function () {
      ejCheckBox = (function (_WidgetBase) {
        _inherits(ejCheckBox, _WidgetBase);

        function ejCheckBox(element) {
          _classCallCheck(this, _ejCheckBox);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejCheckBox = ejCheckBox;
        ejCheckBox = inject(Element)(ejCheckBox) || ejCheckBox;
        ejCheckBox = generateBindables('ejCheckBox', ['checked', 'checkState', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage', 'validationRules', 'value'], ['checked'], { 'enableRTL': 'enableRtl' })(ejCheckBox) || ejCheckBox;
        ejCheckBox = customAttribute(constants.attributePrefix + 'check-box')(ejCheckBox) || ejCheckBox;
        return ejCheckBox;
      })(WidgetBase);

      _export('ejCheckBox', ejCheckBox);
    }
  };
});