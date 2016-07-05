define(['exports', '../common/common', 'datavisualization/ej.digitalgauge.min'], function (exports, _commonCommon, _datavisualizationEjDigitalgaugeMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejDigitalGauge = (function (_WidgetBase) {
    _inherits(ejDigitalGauge, _WidgetBase);

    function ejDigitalGauge(element) {
      _classCallCheck(this, _ejDigitalGauge);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejDigitalGauge = ejDigitalGauge;
    ejDigitalGauge = _commonCommon.inject(Element)(ejDigitalGauge) || ejDigitalGauge;
    ejDigitalGauge = _commonCommon.generateBindables('ejDigitalGauge', ['frame', 'height', 'isResponsive', 'items', 'matrixSegmentData', 'segmentData', 'themes', 'value', 'width'], ['value'])(ejDigitalGauge) || ejDigitalGauge;
    ejDigitalGauge = _commonCommon.inlineView('<template><content></content></template>')(ejDigitalGauge) || ejDigitalGauge;
    ejDigitalGauge = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'digital-gauge')(ejDigitalGauge) || ejDigitalGauge;
    return ejDigitalGauge;
  })(_commonCommon.WidgetBase);

  exports.ejDigitalGauge = ejDigitalGauge;
});