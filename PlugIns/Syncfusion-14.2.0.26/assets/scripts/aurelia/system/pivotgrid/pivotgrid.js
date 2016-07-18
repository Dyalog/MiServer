System.register(['../common/common', 'ej.pivotgrid.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejPivotGrid;

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
    }, function (_ejPivotgridMin) {}],
    execute: function () {
      ejPivotGrid = (function (_WidgetBase) {
        _inherits(ejPivotGrid, _WidgetBase);

        function ejPivotGrid(element) {
          _classCallCheck(this, _ejPivotGrid);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejPivotGrid = ejPivotGrid;
        ejPivotGrid = inject(Element)(ejPivotGrid) || ejPivotGrid;
        ejPivotGrid = generateBindables('ejPivotGrid', ['analysisMode', 'cssClass', 'currentReport', 'dataSource', 'drilledItems', 'customObject', 'enableCellContext', 'enableCellSelection', 'enableCollapseByDefault', 'enableColumnGrandTotal', 'enableConditionalFormatting', 'enableDeferUpdate', 'enableGroupingBar', 'enableGrandTotal', 'enableJSONRendering', 'enablePivotFieldList', 'enableRowGrandTotal', 'enableRTL', 'enableToolTip', 'enableVirtualScrolling', 'hyperlinkSettings', 'isNamedSets', 'isResponsive', 'jsonRecords', 'layout', 'locale', 'operationalMode', 'serviceMethodSettings', 'url'], [], { 'enableRTL': 'enableRtl' })(ejPivotGrid) || ejPivotGrid;
        ejPivotGrid = inlineView('<template><content></content></template>')(ejPivotGrid) || ejPivotGrid;
        ejPivotGrid = customElement(constants.elementPrefix + 'pivot-grid')(ejPivotGrid) || ejPivotGrid;
        return ejPivotGrid;
      })(WidgetBase);

      _export('ejPivotGrid', ejPivotGrid);
    }
  };
});