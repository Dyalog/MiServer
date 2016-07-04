System.register(['../common/common', 'datavisualization/ej.lineargauge.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejLinearGauge;

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
    }, function (_datavisualizationEjLineargaugeMin) {}],
    execute: function () {
      ejLinearGauge = (function (_WidgetBase) {
        _inherits(ejLinearGauge, _WidgetBase);

        function ejLinearGauge(element) {
          _classCallCheck(this, _ejLinearGauge);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejLinearGauge = ejLinearGauge;
        ejLinearGauge = inject(Element)(ejLinearGauge) || ejLinearGauge;
        ejLinearGauge = generateBindables('ejLinearGauge', ['animationSpeed', 'backgroundColor', 'borderColor', 'enableAnimation', 'enableMarkerPointerAnimation', 'isResponsive', 'frame', 'height', 'labelColor', 'maximum', 'minimum', 'orientation', 'outerCustomLabelPosition', 'pointerGradient1', 'pointerGradient2', 'readOnly', 'scales', 'theme', 'tickColor', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])(ejLinearGauge) || ejLinearGauge;
        ejLinearGauge = inlineView('<template><content></content></template>')(ejLinearGauge) || ejLinearGauge;
        ejLinearGauge = customElement(constants.elementPrefix + 'linear-gauge')(ejLinearGauge) || ejLinearGauge;
        return ejLinearGauge;
      })(WidgetBase);

      _export('ejLinearGauge', ejLinearGauge);
    }
  };
});