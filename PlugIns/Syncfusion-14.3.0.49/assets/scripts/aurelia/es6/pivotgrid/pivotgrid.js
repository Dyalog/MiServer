import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.pivotgrid.min';

@customElement(`${constants.elementPrefix}pivot-grid`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotGrid', ['analysisMode', 'cssClass', 'currentReport', 'dataSource', 'drilledItems', 'customObject', 'enableCellContext', 'enableCellSelection', 'enableDrillThrough', 'enableCellDoubleClick', 'enableCellEditing', 'enableCollapseByDefault', 'enableColumnGrandTotal', 'enableConditionalFormatting', 'enableDeferUpdate', 'enableGroupingBar', 'enableGrandTotal', 'enableJSONRendering', 'enablePivotFieldList', 'enableRowGrandTotal', 'enableRTL', 'enableToolTip', 'enableToolTipAnimation', 'enableVirtualScrolling', 'hyperlinkSettings', 'isNamedSets', 'isResponsive', 'jsonRecords', 'layout', 'locale', 'operationalMode', 'serviceMethodSettings', 'url'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPivotGrid extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

