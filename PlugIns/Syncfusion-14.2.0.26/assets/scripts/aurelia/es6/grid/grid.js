import {inject, WidgetBase, constants, generateBindables, inlineView, customElement, children, TemplatingEngine, TemplateProcessor} from '../common/common';

import 'ej.grid.min';

@customElement(`${constants.elementPrefix}grid`)
@inlineView('<template><content></content></template>')
@generateBindables('ejGrid', ['allowCellMerging', 'allowGrouping', 'allowKeyboardNavigation', 'allowFiltering', 'allowSorting', 'allowMultiSorting', 'allowPaging', 'allowReordering', 'allowResizeToFit', 'allowResizing', 'allowRowDragAndDrop', 'allowScrolling', 'allowSearching', 'allowSelection', 'allowTextWrap', 'allowMultipleExporting', 'commonWidth', 'gridLines', 'childGrid', 'columnLayout', 'columns', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'editSettings', 'enableAltRow', 'enableAutoSaveOnSelectionChange', 'enableHeaderHover', 'enablePersistence', 'enableResponsiveRow', 'enableRowHover', 'enableRTL', 'enableTouch', 'filterSettings', 'groupSettings', 'isResponsive', 'keySettings', 'locale', 'minWidth', 'pageSettings', 'query', 'rowTemplate', 'rowDropSettings', 'searchSettings', 'selectedRecords', 'selectedRowIndex', 'selectionSettings', 'selectionType', 'scrollSettings', 'showColumnChooser', 'showStackedHeader', 'showSummary', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'textWrapSettings', 'toolbarSettings'], ['dataSource'], {'enableRTL': 'enableRtl'})
@inject(Element, TemplatingEngine)
export class ejGrid extends WidgetBase {
  @children(`${constants.elementPrefix}column`) columns
  constructor(element, templateEngine) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'columns';
    this.templateProcessor = new TemplateProcessor(this, templateEngine);
    this.templateProcessor.initTemplate();
  }
}

