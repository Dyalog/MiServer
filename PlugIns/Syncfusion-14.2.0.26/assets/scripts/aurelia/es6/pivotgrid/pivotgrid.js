import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.pivotgrid.min';

@customElement(`${constants.elementPrefix}pivot-grid`)
@inlineView('<template><content></content></template>')
@generateBindables('ejPivotGrid', ['analysisMode', 'cssClass', 'currentReport', 'dataSource', 'drilledItems', 'customObject', 'enableCellContext', 'enableCellSelection', 'enableCollapseByDefault', 'enableColumnGrandTotal', 'enableConditionalFormatting', 'enableDeferUpdate', 'enableGroupingBar', 'enableGrandTotal', 'enableJSONRendering', 'enablePivotFieldList', 'enableRowGrandTotal', 'enableRTL', 'enableToolTip', 'enableVirtualScrolling', 'hyperlinkSettings', 'isNamedSets', 'isResponsive', 'jsonRecords', 'layout', 'locale', 'operationalMode', 'serviceMethodSettings', 'url'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPivotGrid extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

