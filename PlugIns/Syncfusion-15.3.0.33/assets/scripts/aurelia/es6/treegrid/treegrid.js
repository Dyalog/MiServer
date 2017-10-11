import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {inject, inlineView, customElement, children, TemplatingEngine} from '../common/common';
import {TemplateProcessor} from '../common/template-processor';

import 'syncfusion-javascript/Scripts/ej/web/ej.treegrid.min';

@customElement(`${constants.elementPrefix}tree-grid`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejTreeGrid', ['allowColumnResize', 'allowColumnReordering', 'allowDragAndDrop', 'allowFiltering', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowSelection', 'allowSorting', 'allowPaging', 'allowTextWrap', 'altRowTemplateID', 'expandStateMapping', 'childMapping', 'columns', 'columnDialogFields', 'contextMenuSettings', 'cssClass', 'dataSource', 'headerTextOverflow', 'dragTooltip', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableResize', 'enableVirtualization', 'enableLoadOnDemand', 'columnResizeSettings', 'commonWidth', 'filterSettings', 'locale', 'parseRowTemplate', 'idMapping', 'isResponsive', 'parentIdMapping', 'pageSettings', 'cellTooltipTemplate', 'query', 'rowHeight', 'rowTemplateID', 'selectedRowIndex', 'selectedCellIndexes', 'selectionSettings', 'showColumnOptions', 'showColumnChooser', 'showDetailsRow', 'showDetailsRowInfoColumn', 'detailsTemplate', 'detailsRowHeight', 'showSummaryRow', 'showTotalSummary', 'summaryRows', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'sizeSettings', 'sortSettings', 'toolbarSettings', 'treeColumnIndex'], ['dataSource', 'selectedRowIndex', 'selectedCellIndexes', 'pageSettings.currentPage'], {'altRowTemplateID': 'altRowTemplateId', 'rowTemplateID': 'rowTemplateId'})
@inject(Element, TemplatingEngine)
export class ejTreeGrid extends WidgetBase {
  @children(`${constants.elementPrefix}tree-grid-column`) columns = [];
  constructor(element, templateEngine) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'columns';
    this.templateProcessor = new TemplateProcessor(this, templateEngine);
    this.templateProcessor.initTemplate();
  }
}

