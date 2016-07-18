System.register(['../common/common', 'ej.slider.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejSlider;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejSliderMin) {}],
    execute: function () {
      ejSlider = (function (_WidgetBase) {
        _inherits(ejSlider, _WidgetBase);

        function ejSlider(element) {
          _classCallCheck(this, _ejSlider);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejSlider = ejSlider;
        ejSlider = inject(Element)(ejSlider) || ejSlider;
        ejSlider = generateBindables('ejSlider', ['allowMouseWheel', 'animationSpeed', 'cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'incrementStep', 'largeStep', 'maxValue', 'minValue', 'orientation', 'readOnly', 'showRoundedCorner', 'showScale', 'showSmallTicks', 'showTooltip', 'sliderType', 'smallStep', 'value', 'values', 'width'], ['value'], { 'enableRTL': 'enableRtl' })(ejSlider) || ejSlider;
        ejSlider = customAttribute(constants.attributePrefix + 'slider')(ejSlider) || ejSlider;
        return ejSlider;
      })(WidgetBase);

      _export('ejSlider', ejSlider);
    }
  };
});