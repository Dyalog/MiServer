System.register(['../common/common', 'datavisualization/ej.circulargauge.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejCircularGauge;

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
    }, function (_datavisualizationEjCirculargaugeMin) {}],
    execute: function () {
      ejCircularGauge = (function (_WidgetBase) {
        _inherits(ejCircularGauge, _WidgetBase);

        function ejCircularGauge(element) {
          _classCallCheck(this, _ejCircularGauge);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejCircularGauge = ejCircularGauge;
        ejCircularGauge = inject(Element)(ejCircularGauge) || ejCircularGauge;
        ejCircularGauge = generateBindables('ejCircularGauge', ['animationSpeed', 'backgroundColor', 'distanceFromCorner', 'enableAnimation', 'frame', 'gaugePosition', 'height', 'interiorGradient', 'isRadialGradient', 'isResponsive', 'maximum', 'minimum', 'outerCustomLabelPosition', 'radius', 'readOnly', 'scales', 'theme', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])(ejCircularGauge) || ejCircularGauge;
        ejCircularGauge = inlineView('<template><content></content></template>')(ejCircularGauge) || ejCircularGauge;
        ejCircularGauge = customElement(constants.elementPrefix + 'circular-gauge')(ejCircularGauge) || ejCircularGauge;
        return ejCircularGauge;
      })(WidgetBase);

      _export('ejCircularGauge', ejCircularGauge);
    }
  };
});