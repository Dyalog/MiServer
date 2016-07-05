define(['exports', '../common/common', 'ej.pivotgrid.min'], function (exports, _commonCommon, _ejPivotgridMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejPivotGrid = (function (_WidgetBase) {
    _inherits(ejPivotGrid, _WidgetBase);

    function ejPivotGrid(element) {
      _classCallCheck(this, _ejPivotGrid);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejPivotGrid = ejPivotGrid;
    ejPivotGrid = _commonCommon.inject(Element)(ejPivotGrid) || ejPivotGrid;
    ejPivotGrid = _commonCommon.generateBindables('ejPivotGrid', ['analysisMode', 'cssClass', 'currentReport', 'dataSource', 'drilledItems', 'customObject', 'enableCellContext', 'enableCellSelection', 'enableCollapseByDefault', 'enableColumnGrandTotal', 'enableConditionalFormatting', 'enableDeferUpdate', 'enableGroupingBar', 'enableGrandTotal', 'enableJSONRendering', 'enablePivotFieldList', 'enableRowGrandTotal', 'enableRTL', 'enableToolTip', 'enableVirtualScrolling', 'hyperlinkSettings', 'isNamedSets', 'isResponsive', 'jsonRecords', 'layout', 'locale', 'operationalMode', 'serviceMethodSettings', 'url'], [], { 'enableRTL': 'enableRtl' })(ejPivotGrid) || ejPivotGrid;
    ejPivotGrid = _commonCommon.inlineView('<template><content></content></template>')(ejPivotGrid) || ejPivotGrid;
    ejPivotGrid = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'pivot-grid')(ejPivotGrid) || ejPivotGrid;
    return ejPivotGrid;
  })(_commonCommon.WidgetBase);

  exports.ejPivotGrid = ejPivotGrid;
});