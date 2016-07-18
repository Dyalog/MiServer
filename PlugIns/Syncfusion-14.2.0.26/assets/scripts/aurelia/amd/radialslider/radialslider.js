define(['exports', '../common/common', 'ej.radialslider.min'], function (exports, _commonCommon, _ejRadialsliderMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejRadialSlider = (function (_WidgetBase) {
    _inherits(ejRadialSlider, _WidgetBase);

    function ejRadialSlider(element) {
      _classCallCheck(this, _ejRadialSlider);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejRadialSlider = ejRadialSlider;
    ejRadialSlider = _commonCommon.inject(Element)(ejRadialSlider) || ejRadialSlider;
    ejRadialSlider = _commonCommon.generateBindables('ejRadialSlider', ['autoOpen', 'cssClass', 'enableAnimation', 'enableRoundOff', 'endAngle', 'inline', 'innerCircleImageClass', 'innerCircleImageUrl', 'radius', 'strokeWidth'])(ejRadialSlider) || ejRadialSlider;
    ejRadialSlider = _commonCommon.inlineView('<template><content></content></template>')(ejRadialSlider) || ejRadialSlider;
    ejRadialSlider = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'radial-slider')(ejRadialSlider) || ejRadialSlider;
    return ejRadialSlider;
  })(_commonCommon.WidgetBase);

  exports.ejRadialSlider = ejRadialSlider;
});