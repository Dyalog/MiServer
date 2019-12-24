import 'syncfusion-javascript/Scripts/ej/web/ej.treegrid.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-treegrid-columns>e-treegrid-column',
})
export class TreeGridColumnDirective extends ComplexTagElement {

	@Input('allowCellSelection') allowCellSelection: any;
	@Input('allowEditing') allowEditing: any;
	@Input('allowFiltering') allowFiltering: any;
	@Input('allowFilteringBlankContent') allowFilteringBlankContent: any;
	@Input('allowFreezing') allowFreezing: any;
	@Input('allowSorting') allowSorting: any;
	@Input('angularTemplate') angularTemplate: any;
	@Input('clipMode') clipMode: any;
	@Input('commands') commands: any;
	@Input('displayAsCheckbox') displayAsCheckbox: any;
	@Input('dropdownData') dropdownData: any;
	@Input('editParams') editParams: any;
	@Input('editTemplate') editTemplate: any;
	@Input('editType') editType: any;
	@Input('field') field: any;
	@Input('filterEditType') filterEditType: any;
	@Input('filterType') filterType: any;
	@Input('format') format: any;
	@Input('headerTemplateID') headerTemplateID: any;
	@Input('headerText') headerText: any;
	@Input('headerTextAlign') headerTextAlign: any;
	@Input('headerTooltip') headerTooltip: any;
	@Input('isFrozen') isFrozen: any;
	@Input('isTemplateColumn') isTemplateColumn: any;
	@Input('priority') priority: any;
	@Input('showCheckbox') showCheckbox: any;
	@Input('showInColumnChooser') showInColumnChooser: any;
	@Input('template') template: any;
	@Input('templateID') templateID: any;
	@Input('textAlign') textAlign: any;
	@Input('tooltip') tooltip: any;
	@Input('validationRules') validationRules: any;
	@Input('visible') visible: any;
	@Input('width') width: any;

    
    constructor( @Inject(forwardRef(() => TreeGridComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-treegrid>e-treegrid-columns',
    queries: {
        children: new ContentChildren(TreeGridColumnDirective)
    }
})
export class TreeGridColumnsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => TreeGridComponent)) widget: EJComponents<any, any>) {
        super('columns')
        }
}




@Component({
    selector: 'ej-treegrid',
    template: ''})
export class TreeGridComponent extends EJComponents<any, any> {
	@Input('allowColumnReordering') allowColumnReordering_input: any;
	@Input('allowColumnResize') allowColumnResize_input: any;
	@Input('allowDragAndDrop') allowDragAndDrop_input: any;
	@Input('allowFiltering') allowFiltering_input: any;
	@Input('allowKeyboardNavigation') allowKeyboardNavigation_input: any;
	@Input('allowMultiSorting') allowMultiSorting_input: any;
	@Input('allowPaging') allowPaging_input: any;
	@Input('allowSearching') allowSearching_input: any;
	@Input('allowSelection') allowSelection_input: any;
	@Input('allowSorting') allowSorting_input: any;
	@Input('allowTextWrap') allowTextWrap_input: any;
	@Input('altRowTemplateID') altRowTemplateID_input: any;
	@Input('cellTooltipTemplate') cellTooltipTemplate_input: any;
	@Input('childMapping') childMapping_input: any;
	@Input('collapsibleTotalSummary') collapsibleTotalSummary_input: any;
	@Input('columnDialogFields') columnDialogFields_input: any;
	@Input('columnResizeSettings') columnResizeSettings_input: any;
	@Input('commonWidth') commonWidth_input: any;
	@Input('contextMenuSettings') contextMenuSettings_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('detailsTemplate') detailsTemplate_input: any;
	@Input('detailsRowHeight') detailsRowHeight_input: any;
	@Input('dragTooltip') dragTooltip_input: any;
	@Input('editSettings') editSettings_input: any;
	@Input('enableAltRow') enableAltRow_input: any;
	@Input('enableCollapseAll') enableCollapseAll_input: any;
	@Input('enableLoadOnDemand') enableLoadOnDemand_input: any;
	@Input('enableResize') enableResize_input: any;
	@Input('enableVirtualization') enableVirtualization_input: any;
	@Input('expandStateMapping') expandStateMapping_input: any;
	@Input('filterSettings') filterSettings_input: any;
	@Input('headerTextOverflow') headerTextOverflow_input: any;
	@Input('idMapping') idMapping_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('locale') locale_input: any;
	@Input('pageSettings') pageSettings_input: any;
	@Input('parentIdMapping') parentIdMapping_input: any;
	@Input('parseRowTemplate') parseRowTemplate_input: any;
	@Input('query') query_input: any;
	@Input('rowHeight') rowHeight_input: any;
	@Input('rowTemplateID') rowTemplateID_input: any;
	@Input('searchSettings') searchSettings_input: any;
	@Input('selectionSettings') selectionSettings_input: any;
	@Input('showColumnChooser') showColumnChooser_input: any;
	@Input('showColumnOptions') showColumnOptions_input: any;
	@Input('showDetailsRow') showDetailsRow_input: any;
	@Input('showDetailsRowInfoColumn') showDetailsRowInfoColumn_input: any;
	@Input('showGridCellTooltip') showGridCellTooltip_input: any;
	@Input('showGridExpandCellTooltip') showGridExpandCellTooltip_input: any;
	@Input('showStackedHeader') showStackedHeader_input: any;
	@Input('showSummaryRow') showSummaryRow_input: any;
	@Input('showTotalSummary') showTotalSummary_input: any;
	@Input('sizeSettings') sizeSettings_input: any;
	@Input('sortSettings') sortSettings_input: any;
	@Input('toolbarSettings') toolbarSettings_input: any;
	@Input('totalSummaryHeight') totalSummaryHeight_input: any;
	@Input('treeColumnIndex') treeColumnIndex_input: any;
	@Input('columnResizeSettings.columnResizeMode') columnResizeSettings_columnResizeMode_input: any;
	@Input('contextMenuSettings.contextMenuItems') contextMenuSettings_contextMenuItems_input: any;
	@Input('contextMenuSettings.showContextMenu') contextMenuSettings_showContextMenu_input: any;
	@Input('dragTooltip.showTooltip') dragTooltip_showTooltip_input: any;
	@Input('dragTooltip.tooltipItems') dragTooltip_tooltipItems_input: any;
	@Input('dragTooltip.tooltipTemplate') dragTooltip_tooltipTemplate_input: any;
	@Input('editSettings.allowAdding') editSettings_allowAdding_input: any;
	@Input('editSettings.allowDeleting') editSettings_allowDeleting_input: any;
	@Input('editSettings.allowEditing') editSettings_allowEditing_input: any;
	@Input('editSettings.batchEditSettings') editSettings_batchEditSettings_input: any;
	@Input('editSettings.batchEditSettings.editMode') editSettings_batchEditSettings_editMode_input: any;
	@Input('editSettings.beginEditAction') editSettings_beginEditAction_input: any;
	@Input('editSettings.dialogEditorTemplateID') editSettings_dialogEditorTemplateID_input: any;
	@Input('editSettings.editMode') editSettings_editMode_input: any;
	@Input('editSettings.rowPosition') editSettings_rowPosition_input: any;
	@Input('editSettings.showDeleteConfirmDialog') editSettings_showDeleteConfirmDialog_input: any;
	@Input('filterSettings.enableCaseSensitivity') filterSettings_enableCaseSensitivity_input: any;
	@Input('filterSettings.enableComplexBlankFilter') filterSettings_enableComplexBlankFilter_input: any;
	@Input('filterSettings.filterBarMode') filterSettings_filterBarMode_input: any;
	@Input('filterSettings.filterHierarchyMode') filterSettings_filterHierarchyMode_input: any;
	@Input('filterSettings.filterType') filterSettings_filterType_input: any;
	@Input('filterSettings.maxFilterChoices') filterSettings_maxFilterChoices_input: any;
	@Input('pageSettings.currentPage') pageSettings_currentPage_input: any;
	@Input('pageSettings.pageCount') pageSettings_pageCount_input: any;
	@Input('pageSettings.pageSize') pageSettings_pageSize_input: any;
	@Input('pageSettings.pageSizeMode') pageSettings_pageSizeMode_input: any;
	@Input('pageSettings.printMode') pageSettings_printMode_input: any;
	@Input('pageSettings.template') pageSettings_template_input: any;
	@Input('pageSettings.totalRecordsCount') pageSettings_totalRecordsCount_input: any;
	@Input('searchSettings.fields') searchSettings_fields_input: any;
	@Input('searchSettings.ignoreCase') searchSettings_ignoreCase_input: any;
	@Input('searchSettings.key') searchSettings_key_input: any;
	@Input('searchSettings.operator') searchSettings_operator_input: any;
	@Input('searchSettings.searchHierarchyMode') searchSettings_searchHierarchyMode_input: any;
	@Input('selectionSettings.enableHierarchySelection') selectionSettings_enableHierarchySelection_input: any;
	@Input('selectionSettings.enableSelectAll') selectionSettings_enableSelectAll_input: any;
	@Input('selectionSettings.selectionMode') selectionSettings_selectionMode_input: any;
	@Input('selectionSettings.selectionType') selectionSettings_selectionType_input: any;
	@Input('sizeSettings.height') sizeSettings_height_input: any;
	@Input('sizeSettings.width') sizeSettings_width_input: any;
	@Input('toolbarSettings.showToolbar') toolbarSettings_showToolbar_input: any;
	@Input('toolbarSettings.toolbarItems') toolbarSettings_toolbarItems_input: any;
	@Input('columns') columns_input: any;
	@Input('selectedCellIndexes') selectedCellIndexes_input: any;
	@Input('stackedHeaderRows') stackedHeaderRows_input: any;
	@Input('summaryRows') summaryRows_input: any;
	@Input('filterSettings.filteredColumns') filterSettings_filteredColumns_input: any;
	@Input('sortSettings.sortedColumns') sortSettings_sortedColumns_input: any;
	@Input('toolbarSettings.customToolbarItems') toolbarSettings_customToolbarItems_input: any;
    @Input('options') options: any;

	@Input('dataSource') dataSource_two: any;
	@Output('dataSourceChange') dataSource_twoChange = new EventEmitter<any>();
	@Input('selectedRowIndex') selectedRowIndex_two: any;
	@Output('selectedRowIndexChange') selectedRowIndex_twoChange = new EventEmitter<any>();

	@Output('actionBegin') actionBegin_output = new EventEmitter();
	@Output('actionComplete') actionComplete_output = new EventEmitter();
	@Output('beforePrint') beforePrint_output = new EventEmitter();
	@Output('beginEdit') beginEdit_output = new EventEmitter();
	@Output('cellSelected') cellSelected_output = new EventEmitter();
	@Output('cellSelecting') cellSelecting_output = new EventEmitter();
	@Output('collapsed') collapsed_output = new EventEmitter();
	@Output('collapsing') collapsing_output = new EventEmitter();
	@Output('columnDrag') columnDrag_output = new EventEmitter();
	@Output('columnDragStart') columnDragStart_output = new EventEmitter();
	@Output('columnDrop') columnDrop_output = new EventEmitter();
	@Output('columnResizeEnd') columnResizeEnd_output = new EventEmitter();
	@Output('columnResizeStart') columnResizeStart_output = new EventEmitter();
	@Output('columnResized') columnResized_output = new EventEmitter();
	@Output('contextMenuOpen') contextMenuOpen_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('detailsDataBound') detailsDataBound_output = new EventEmitter();
	@Output('detailsHidden') detailsHidden_output = new EventEmitter();
	@Output('detailsShown') detailsShown_output = new EventEmitter();
	@Output('endEdit') endEdit_output = new EventEmitter();
	@Output('expanded') expanded_output = new EventEmitter();
	@Output('expanding') expanding_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('queryCellInfo') queryCellInfo_output = new EventEmitter();
	@Output('recordClick') recordClick_output = new EventEmitter();
	@Output('recordDoubleClick') recordDoubleClick_output = new EventEmitter();
	@Output('rowDataBound') rowDataBound_output = new EventEmitter();
	@Output('rowDrag') rowDrag_output = new EventEmitter();
	@Output('rowDragStart') rowDragStart_output = new EventEmitter();
	@Output('rowDragStop') rowDragStop_output = new EventEmitter();
	@Output('rowDropActionBegin') rowDropActionBegin_output = new EventEmitter();
	@Output('rowSelected') rowSelected_output = new EventEmitter();
	@Output('rowSelecting') rowSelecting_output = new EventEmitter();
	@Output('toolbarClick') toolbarClick_output = new EventEmitter();

	@ContentChild(TreeGridColumnsDirective) tag_columns: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('TreeGrid', el, cdRef, ['columns'], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_TREEGRID_COMPONENTS: Type<any>[] = [TreeGridComponent
, TreeGridColumnsDirective, TreeGridColumnDirective];


