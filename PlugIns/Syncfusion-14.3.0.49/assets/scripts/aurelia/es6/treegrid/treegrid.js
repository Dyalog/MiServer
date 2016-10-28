import {inject, WidgetBase, constants, generateBindables, inlineView, customElement, children, TemplatingEngine, TemplateProcessor} from '../common/common';

import 'ej.treegrid.min';

@customElement(`${constants.elementPrefix}tree-grid`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejTreeGrid', ['allowColumnResize', 'allowDragAndDrop', 'allowFiltering', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowSelection', 'allowSorting', 'allowPaging', 'altRowTemplateID', 'childMapping', 'columns', 'columnDialogFields', 'contextMenuSettings', 'cssClass', 'dataSource', 'headerTextOverflow', 'dragTooltip', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableResize', 'enableVirtualization', 'filterSettings', 'locale', 'idMapping', 'isResponsive', 'parentIdMapping', 'pageSettings', 'cellTooltipTemplate', 'query', 'rowHeight', 'rowTemplateID', 'selectedRowIndex', 'selectionMode', 'selectionType', 'showColumnOptions', 'showColumnChooser', 'showDetailsRow', 'showDetailsRowInfoColumn', 'detailsTemplate', 'detailsRowHeight', 'showSummaryRow', 'showTotalSummary', 'summaryRows', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'sizeSettings', 'sortSettings', 'toolbarSettings', 'treeColumnIndex'], ['dataSource', 'selectedRowIndex', 'pageSettings.currentPage'], {'altRowTemplateID': 'altRowTemplateId', 'rowTemplateID': 'rowTemplateId'})
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

