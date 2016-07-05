System.register(['../common/common', 'ej.progressbar.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejProgressBar;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejProgressbarMin) {}],
    execute: function () {
      ejProgressBar = (function (_WidgetBase) {
        _inherits(ejProgressBar, _WidgetBase);

        function ejProgressBar(element) {
          _classCallCheck(this, _ejProgressBar);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejProgressBar = ejProgressBar;
        ejProgressBar = inject(Element)(ejProgressBar) || ejProgressBar;
        ejProgressBar = generateBindables('ejProgressBar', ['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'maxValue', 'minValue', 'percentage', 'showRoundedCorner', 'text', 'value', 'width'], [], { 'enableRTL': 'enableRtl' })(ejProgressBar) || ejProgressBar;
        ejProgressBar = customAttribute(constants.attributePrefix + 'progress-bar')(ejProgressBar) || ejProgressBar;
        return ejProgressBar;
      })(WidgetBase);

      _export('ejProgressBar', ejProgressBar);
    }
  };
});