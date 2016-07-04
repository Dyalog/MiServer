define(['exports', '../common/common', 'ej.pivotgauge.min'], function (exports, _commonCommon, _ejPivotgaugeMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejPivotGauge = (function (_WidgetBase) {
    _inherits(ejPivotGauge, _WidgetBase);

    function ejPivotGauge(element) {
      _classCallCheck(this, _ejPivotGauge);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejPivotGauge = ejPivotGauge;
    ejPivotGauge = _commonCommon.inject(Element)(ejPivotGauge) || ejPivotGauge;
    ejPivotGauge = _commonCommon.generateBindables('ejPivotGauge', ['backgroundColor', 'columnsCount', 'cssClass', 'customObject', 'dataSource', 'enableTooltip', 'isResponsive', 'labelFormatSettings', 'locale', 'rowsCount', 'scales', 'serviceMethodSettings', 'showHeaderLabel', 'url'])(ejPivotGauge) || ejPivotGauge;
    ejPivotGauge = _commonCommon.inlineView('<template><content></content></template>')(ejPivotGauge) || ejPivotGauge;
    ejPivotGauge = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'pivot-gauge')(ejPivotGauge) || ejPivotGauge;
    return ejPivotGauge;
  })(_commonCommon.WidgetBase);

  exports.ejPivotGauge = ejPivotGauge;
});