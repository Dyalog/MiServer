System.register(['../common/common', 'ej.radialslider.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejRadialSlider;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customElement = _commonCommon.customElement;
      inlineView = _commonCommon.inlineView;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejRadialsliderMin) {}],
    execute: function () {
      ejRadialSlider = (function (_WidgetBase) {
        _inherits(ejRadialSlider, _WidgetBase);

        function ejRadialSlider(element) {
          _classCallCheck(this, _ejRadialSlider);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejRadialSlider = ejRadialSlider;
        ejRadialSlider = inject(Element)(ejRadialSlider) || ejRadialSlider;
        ejRadialSlider = generateBindables('ejRadialSlider', ['autoOpen', 'cssClass', 'enableAnimation', 'enableRoundOff', 'endAngle', 'inline', 'innerCircleImageClass', 'innerCircleImageUrl', 'radius', 'strokeWidth'])(ejRadialSlider) || ejRadialSlider;
        ejRadialSlider = inlineView('<template><content></content></template>')(ejRadialSlider) || ejRadialSlider;
        ejRadialSlider = customElement(constants.elementPrefix + 'radial-slider')(ejRadialSlider) || ejRadialSlider;
        return ejRadialSlider;
      })(WidgetBase);

      _export('ejRadialSlider', ejRadialSlider);
    }
  };
});