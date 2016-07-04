System.register(['../common/common', 'ej.pivotgauge.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejPivotGauge;

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
    }, function (_ejPivotgaugeMin) {}],
    execute: function () {
      ejPivotGauge = (function (_WidgetBase) {
        _inherits(ejPivotGauge, _WidgetBase);

        function ejPivotGauge(element) {
          _classCallCheck(this, _ejPivotGauge);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejPivotGauge = ejPivotGauge;
        ejPivotGauge = inject(Element)(ejPivotGauge) || ejPivotGauge;
        ejPivotGauge = generateBindables('ejPivotGauge', ['backgroundColor', 'columnsCount', 'cssClass', 'customObject', 'dataSource', 'enableTooltip', 'isResponsive', 'labelFormatSettings', 'locale', 'rowsCount', 'scales', 'serviceMethodSettings', 'showHeaderLabel', 'url'])(ejPivotGauge) || ejPivotGauge;
        ejPivotGauge = inlineView('<template><content></content></template>')(ejPivotGauge) || ejPivotGauge;
        ejPivotGauge = customElement(constants.elementPrefix + 'pivot-gauge')(ejPivotGauge) || ejPivotGauge;
        return ejPivotGauge;
      })(WidgetBase);

      _export('ejPivotGauge', ejPivotGauge);
    }
  };
});