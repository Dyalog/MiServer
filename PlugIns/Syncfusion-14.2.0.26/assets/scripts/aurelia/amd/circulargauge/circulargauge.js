define(['exports', '../common/common', 'datavisualization/ej.circulargauge.min'], function (exports, _commonCommon, _datavisualizationEjCirculargaugeMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejCircularGauge = (function (_WidgetBase) {
    _inherits(ejCircularGauge, _WidgetBase);

    function ejCircularGauge(element) {
      _classCallCheck(this, _ejCircularGauge);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejCircularGauge = ejCircularGauge;
    ejCircularGauge = _commonCommon.inject(Element)(ejCircularGauge) || ejCircularGauge;
    ejCircularGauge = _commonCommon.generateBindables('ejCircularGauge', ['animationSpeed', 'backgroundColor', 'distanceFromCorner', 'enableAnimation', 'frame', 'gaugePosition', 'height', 'interiorGradient', 'isRadialGradient', 'isResponsive', 'maximum', 'minimum', 'outerCustomLabelPosition', 'radius', 'readOnly', 'scales', 'theme', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])(ejCircularGauge) || ejCircularGauge;
    ejCircularGauge = _commonCommon.inlineView('<template><content></content></template>')(ejCircularGauge) || ejCircularGauge;
    ejCircularGauge = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'circular-gauge')(ejCircularGauge) || ejCircularGauge;
    return ejCircularGauge;
  })(_commonCommon.WidgetBase);

  exports.ejCircularGauge = ejCircularGauge;
});