System.register(['../common/common', 'datavisualization/ej.digitalgauge.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejDigitalGauge;

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
    }, function (_datavisualizationEjDigitalgaugeMin) {}],
    execute: function () {
      ejDigitalGauge = (function (_WidgetBase) {
        _inherits(ejDigitalGauge, _WidgetBase);

        function ejDigitalGauge(element) {
          _classCallCheck(this, _ejDigitalGauge);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejDigitalGauge = ejDigitalGauge;
        ejDigitalGauge = inject(Element)(ejDigitalGauge) || ejDigitalGauge;
        ejDigitalGauge = generateBindables('ejDigitalGauge', ['frame', 'height', 'isResponsive', 'items', 'matrixSegmentData', 'segmentData', 'themes', 'value', 'width'], ['value'])(ejDigitalGauge) || ejDigitalGauge;
        ejDigitalGauge = inlineView('<template><content></content></template>')(ejDigitalGauge) || ejDigitalGauge;
        ejDigitalGauge = customElement(constants.elementPrefix + 'digital-gauge')(ejDigitalGauge) || ejDigitalGauge;
        return ejDigitalGauge;
      })(WidgetBase);

      _export('ejDigitalGauge', ejDigitalGauge);
    }
  };
});