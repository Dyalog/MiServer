import 'syncfusion-javascript/Scripts/ej/web/ej.grid.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-commands>e-command',
})
export class GridCommandDirective extends ComplexTagElement {

	@Input('buttonOptions') buttonOptions: any;
	@Input('type') type: any;

    
    constructor( @Inject(forwardRef(() => GridComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-columns>e-commands',
    queries: {
        children: new ContentChildren(GridCommandDirective)
    }
})
export class GridCommandsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => GridComponent)) widget: EJComponents<any, any>) {
        super('commands')
        }
}

@Directive({
    selector: 'e-columns>e-column',
})
export class GridColumnDirective extends ComplexTagElement {

	@Input('clipMode') clipMode: any;
	@Input('allowEditing') allowEditing: any;
	@Input('allowFiltering') allowFiltering: any;
	@Input('allowGrouping') allowGrouping: any;
	@Input('allowSorting') allowSorting: any;
	@Input('allowResizing') allowResizing: any;
	@Input('commands') commands: any;
	@Input('cssClass') cssClass: any;
	@Input('customAttributes') customAttributes: any;
	@Input('dataSource') dataSource: any;
	@Input('defaultValue') defaultValue: any;
	@Input('disableHtmlEncode') disableHtmlEncode: any;
	@Input('displayAsCheckbox') displayAsCheckbox: any;
	@Input('editParams') editParams: any;
	@Input('editTemplate') editTemplate: any;
	@Input('editType') editType: any;
	@Input('enableGroupByFormat') enableGroupByFormat: any;
	@Input('field') field: any;
	@Input('filterBarTemplate') filterBarTemplate: any;
	@Input('filterType') filterType: any;
	@Input('foreignKeyField') foreignKeyField: any;
	@Input('foreignKeyValue') foreignKeyValue: any;
	@Input('format') format: any;
	@Input('headerTemplateID') headerTemplateID: any;
	@Input('headerText') headerText: any;
	@Input('headerTextAlign') headerTextAlign: any;
	@Input('headerTooltip') headerTooltip: any;
	@Input('isFrozen') isFrozen: any;
	@Input('isIdentity') isIdentity: any;
	@Input('isPrimaryKey') isPrimaryKey: any;
	@Input('priority') priority: any;
	@Input('showInColumnChooser') showInColumnChooser: any;
	@Input('template') template: any;
	@Input('textAlign') textAlign: any;
	@Input('tooltip') tooltip: any;
	@Input('type') type: any;
	@Input('validationRules') validationRules: any;
	@Input('visible') visible: any;
	@Input('width') width: any;

	@ContentChild(GridCommandsDirective) tag_commands: any;
    
    constructor( @Inject(forwardRef(() => GridComponent)) widget: EJComponents<any, any>) {
        super(['commands']);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-grid>e-columns',
    queries: {
        children: new ContentChildren(GridColumnDirective)
    }
})
export class GridColumnsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => GridComponent)) widget: EJComponents<any, any>) {
        super('columns')
        }
}

@Directive({
    selector: 'e-summarycolumns>e-summarycolumn',
})
export class GridSummaryColumnDirective extends ComplexTagElement {

	@Input('customSummaryValue') customSummaryValue: any;
	@Input('dataMember') dataMember: any;
	@Input('displayColumn') displayColumn: any;
	@Input('format') format: any;
	@Input('prefix') prefix: any;
	@Input('suffix') suffix: any;
	@Input('summaryType') summaryType: any;
	@Input('template') template: any;

    
    constructor( @Inject(forwardRef(() => GridComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-summaryrows>e-summarycolumns',
    queries: {
        children: new ContentChildren(GridSummaryColumnDirective)
    }
})
export class GridSummaryColumnsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => GridComponent)) widget: EJComponents<any, any>) {
        super('summaryColumns')
        }
}

@Directive({
    selector: 'e-summaryrows>e-summaryrow',
})
export class GridSummaryRowDirective extends ComplexTagElement {

	@Input('showCaptionSummary') showCaptionSummary: any;
	@Input('showGroupSummary') showGroupSummary: any;
	@Input('showTotalSummary') showTotalSummary: any;
	@Input('summaryColumns') summaryColumns: any;
	@Input('title') title: any;
	@Input('titleColumn') titleColumn: any;

	@ContentChild(GridSummaryColumnsDirective) tag_summaryColumns: any;
    
    constructor( @Inject(forwardRef(() => GridComponent)) widget: EJComponents<any, any>) {
        super(['summaryColumns']);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-grid>e-summaryrows',
    queries: {
        children: new ContentChildren(GridSummaryRowDirective)
    }
})
export class GridSummaryRowsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => GridComponent)) widget: EJComponents<any, any>) {
        super('summaryRows')
        }
}

@Directive({
    selector: 'e-stackedheadercolumns>e-stackedheadercolumn',
})
export class GridStackedHeaderColumnDirective extends ComplexTagElement {

	@Input('column') column: any;
	@Input('cssClass') cssClass: any;
	@Input('headerText') headerText: any;
	@Input('textAlign') textAlign: any;
	@Input('tooltip') tooltip: any;

    
    constructor( @Inject(forwardRef(() => GridComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-stackedheaderrows>e-stackedheadercolumns',
    queries: {
        children: new ContentChildren(GridStackedHeaderColumnDirective)
    }
})
export class GridStackedHeaderColumnsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => GridComponent)) widget: EJComponents<any, any>) {
        super('stackedHeaderColumns')
        }
}

@Directive({
    selector: 'e-stackedheaderrows>e-stackedheaderrow',
})
export class GridStackedHeaderRowDirective extends ComplexTagElement {

	@Input('stackedHeaderColumns') stackedHeaderColumns: any;

	@ContentChild(GridStackedHeaderColumnsDirective) tag_stackedHeaderColumns: any;
    
    constructor( @Inject(forwardRef(() => GridComponent)) widget: EJComponents<any, any>) {
        super(['stackedHeaderColumns']);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-grid>e-stackedheaderrows',
    queries: {
        children: new ContentChildren(GridStackedHeaderRowDirective)
    }
})
export class GridStackedHeaderRowsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => GridComponent)) widget: EJComponents<any, any>) {
        super('stackedHeaderRows')
        }
}




@Component({
    selector: 'ej-grid',
    template: ''})
export class GridComponent extends EJComponents<any, any> {
	@Input('allowCellMerging') allowCellMerging_input: any;
	@Input('allowGrouping') allowGrouping_input: any;
	@Input('allowKeyboardNavigation') allowKeyboardNavigation_input: any;
	@Input('allowFiltering') allowFiltering_input: any;
	@Input('allowSorting') allowSorting_input: any;
	@Input('allowMultiSorting') allowMultiSorting_input: any;
	@Input('allowPaging') allowPaging_input: any;
	@Input('allowReordering') allowReordering_input: any;
	@Input('allowResizeToFit') allowResizeToFit_input: any;
	@Input('allowResizing') allowResizing_input: any;
	@Input('allowRowDragAndDrop') allowRowDragAndDrop_input: any;
	@Input('allowScrolling') allowScrolling_input: any;
	@Input('allowSearching') allowSearching_input: any;
	@Input('allowSelection') allowSelection_input: any;
	@Input('allowTextWrap') allowTextWrap_input: any;
	@Input('allowMultipleExporting') allowMultipleExporting_input: any;
	@Input('commonWidth') commonWidth_input: any;
	@Input('gridLines') gridLines_input: any;
	@Input('childGrid') childGrid_input: any;
	@Input('columnLayout') columnLayout_input: any;
	@Input('contextMenuSettings') contextMenuSettings_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('detailsTemplate') detailsTemplate_input: any;
	@Input('editSettings') editSettings_input: any;
	@Input('enableAltRow') enableAltRow_input: any;
	@Input('enableAutoSaveOnSelectionChange') enableAutoSaveOnSelectionChange_input: any;
	@Input('enableHeaderHover') enableHeaderHover_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableResponsiveRow') enableResponsiveRow_input: any;
	@Input('enableRowHover') enableRowHover_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableTouch') enableTouch_input: any;
	@Input('enableToolbarItems') enableToolbarItems_input: any;
	@Input('exportToExcelAction') exportToExcelAction_input: any;
	@Input('exportToPdfAction') exportToPdfAction_input: any;
	@Input('exportToWordAction') exportToWordAction_input: any;
	@Input('filterSettings') filterSettings_input: any;
	@Input('groupSettings') groupSettings_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('keySettings') keySettings_input: any;
	@Input('locale') locale_input: any;
	@Input('minWidth') minWidth_input: any;
	@Input('pageSettings') pageSettings_input: any;
	@Input('query') query_input: any;
	@Input('resizeSettings') resizeSettings_input: any;
	@Input('rowTemplate') rowTemplate_input: any;
	@Input('rowDropSettings') rowDropSettings_input: any;
	@Input('searchSettings') searchSettings_input: any;
	@Input('selectedRecords') selectedRecords_input: any;
	@Input('selectedRowIndex') selectedRowIndex_input: any;
	@Input('selectedRowIndices') selectedRowIndices_input: any;
	@Input('selectionSettings') selectionSettings_input: any;
	@Input('selectionType') selectionType_input: any;
	@Input('scrollSettings') scrollSettings_input: any;
	@Input('showColumnChooser') showColumnChooser_input: any;
	@Input('showStackedHeader') showStackedHeader_input: any;
	@Input('showSummary') showSummary_input: any;
	@Input('sortSettings') sortSettings_input: any;
	@Input('textWrapSettings') textWrapSettings_input: any;
	@Input('toolbarSettings') toolbarSettings_input: any;
	@Input('contextMenuSettings.contextMenuItems') contextMenuSettings_contextMenuItems_input: any;
	@Input('contextMenuSettings.customContextMenuItems') contextMenuSettings_customContextMenuItems_input: any;
	@Input('contextMenuSettings.enableContextMenu') contextMenuSettings_enableContextMenu_input: any;
	@Input('contextMenuSettings.disableDefaultItems') contextMenuSettings_disableDefaultItems_input: any;
	@Input('editSettings.allowAdding') editSettings_allowAdding_input: any;
	@Input('editSettings.allowDeleting') editSettings_allowDeleting_input: any;
	@Input('editSettings.allowEditing') editSettings_allowEditing_input: any;
	@Input('editSettings.allowEditOnDblClick') editSettings_allowEditOnDblClick_input: any;
	@Input('editSettings.dialogEditorTemplateID') editSettings_dialogEditorTemplateID_input: any;
	@Input('editSettings.editMode') editSettings_editMode_input: any;
	@Input('editSettings.externalFormTemplateID') editSettings_externalFormTemplateID_input: any;
	@Input('editSettings.formPosition') editSettings_formPosition_input: any;
	@Input('editSettings.inlineFormTemplateID') editSettings_inlineFormTemplateID_input: any;
	@Input('editSettings.rowPosition') editSettings_rowPosition_input: any;
	@Input('editSettings.showConfirmDialog') editSettings_showConfirmDialog_input: any;
	@Input('editSettings.showDeleteConfirmDialog') editSettings_showDeleteConfirmDialog_input: any;
	@Input('editSettings.titleColumn') editSettings_titleColumn_input: any;
	@Input('editSettings.showAddNewRow') editSettings_showAddNewRow_input: any;
	@Input('filterSettings.enableCaseSensitivity') filterSettings_enableCaseSensitivity_input: any;
	@Input('filterSettings.enableInterDeterminateState') filterSettings_enableInterDeterminateState_input: any;
	@Input('filterSettings.filterBarMode') filterSettings_filterBarMode_input: any;
	@Input('filterSettings.filterType') filterSettings_filterType_input: any;
	@Input('filterSettings.immediateModeDelay') filterSettings_immediateModeDelay_input: any;
	@Input('filterSettings.maxFilterChoices') filterSettings_maxFilterChoices_input: any;
	@Input('filterSettings.showFilterBarStatus') filterSettings_showFilterBarStatus_input: any;
	@Input('filterSettings.showPredicate') filterSettings_showPredicate_input: any;
	@Input('groupSettings.captionFormat') groupSettings_captionFormat_input: any;
	@Input('groupSettings.enableDropAreaAutoSizing') groupSettings_enableDropAreaAutoSizing_input: any;
	@Input('groupSettings.groupedColumns') groupSettings_groupedColumns_input: any;
	@Input('groupSettings.showDropArea') groupSettings_showDropArea_input: any;
	@Input('groupSettings.showGroupedColumn') groupSettings_showGroupedColumn_input: any;
	@Input('groupSettings.showToggleButton') groupSettings_showToggleButton_input: any;
	@Input('groupSettings.showUngroupButton') groupSettings_showUngroupButton_input: any;
	@Input('pageSettings.enableQueryString') pageSettings_enableQueryString_input: any;
	@Input('pageSettings.enableTemplates') pageSettings_enableTemplates_input: any;
	@Input('pageSettings.pageCount') pageSettings_pageCount_input: any;
	@Input('pageSettings.pageSize') pageSettings_pageSize_input: any;
	@Input('pageSettings.pageSizeList') pageSettings_pageSizeList_input: any;
	@Input('pageSettings.showDefaults') pageSettings_showDefaults_input: any;
	@Input('pageSettings.template') pageSettings_template_input: any;
	@Input('pageSettings.totalPages') pageSettings_totalPages_input: any;
	@Input('pageSettings.totalRecordsCount') pageSettings_totalRecordsCount_input: any;
	@Input('pageSettings.printMode') pageSettings_printMode_input: any;
	@Input('resizeSettings.resizeMode') resizeSettings_resizeMode_input: any;
	@Input('rowDropSettings.dropTargetID') rowDropSettings_dropTargetID_input: any;
	@Input('rowDropSettings.dragMapper') rowDropSettings_dragMapper_input: any;
	@Input('rowDropSettings.dropMapper') rowDropSettings_dropMapper_input: any;
	@Input('rowDropSettings.dragBehavior') rowDropSettings_dragBehavior_input: any;
	@Input('searchSettings.fields') searchSettings_fields_input: any;
	@Input('searchSettings.key') searchSettings_key_input: any;
	@Input('searchSettings.operator') searchSettings_operator_input: any;
	@Input('searchSettings.ignoreCase') searchSettings_ignoreCase_input: any;
	@Input('selectionSettings.cellSelectionMode') selectionSettings_cellSelectionMode_input: any;
	@Input('selectionSettings.enableToggle') selectionSettings_enableToggle_input: any;
	@Input('selectionSettings.allowDragSelection') selectionSettings_allowDragSelection_input: any;
	@Input('selectionSettings.selectionMode') selectionSettings_selectionMode_input: any;
	@Input('scrollSettings.allowVirtualScrolling') scrollSettings_allowVirtualScrolling_input: any;
	@Input('scrollSettings.autoHide') scrollSettings_autoHide_input: any;
	@Input('scrollSettings.buttonSize') scrollSettings_buttonSize_input: any;
	@Input('scrollSettings.enableTouchScroll') scrollSettings_enableTouchScroll_input: any;
	@Input('scrollSettings.frozenColumns') scrollSettings_frozenColumns_input: any;
	@Input('scrollSettings.frozenRows') scrollSettings_frozenRows_input: any;
	@Input('scrollSettings.height') scrollSettings_height_input: any;
	@Input('scrollSettings.scrollerSize') scrollSettings_scrollerSize_input: any;
	@Input('scrollSettings.virtualScrollMode') scrollSettings_virtualScrollMode_input: any;
	@Input('scrollSettings.enableVirtualization') scrollSettings_enableVirtualization_input: any;
	@Input('scrollSettings.width') scrollSettings_width_input: any;
	@Input('scrollSettings.scrollOneStepBy') scrollSettings_scrollOneStepBy_input: any;
	@Input('textWrapSettings.wrapMode') textWrapSettings_wrapMode_input: any;
	@Input('toolbarSettings.showToolbar') toolbarSettings_showToolbar_input: any;
	@Input('toolbarSettings.toolbarItems') toolbarSettings_toolbarItems_input: any;
	@Input('columns') columns_input: any;
	@Input('stackedHeaderRows') stackedHeaderRows_input: any;
	@Input('summaryRows') summaryRows_input: any;
	@Input('contextMenuSettings.subContextMenu') contextMenuSettings_subContextMenu_input: any;
	@Input('filterSettings.filteredColumns') filterSettings_filteredColumns_input: any;
	@Input('sortSettings.sortedColumns') sortSettings_sortedColumns_input: any;
	@Input('toolbarSettings.customToolbarItems') toolbarSettings_customToolbarItems_input: any;
    @Input('options') options: any;

	@Input('dataSource') dataSource_two: any;
	@Output('dataSourceChange') dataSource_twoChange = new EventEmitter<any>();
	@Input('pageSettings.currentPage') pageSettings_currentPage_two: any;
	@Output('pageSettings.currentPageChange') pageSettings_currentPage_twoChange = new EventEmitter<any>();

	@Output('actionBegin') actionBegin_output = new EventEmitter();
	@Output('actionComplete') actionComplete_output = new EventEmitter();
	@Output('actionFailure') actionFailure_output = new EventEmitter();
	@Output('batchAdd') batchAdd_output = new EventEmitter();
	@Output('batchDelete') batchDelete_output = new EventEmitter();
	@Output('beforeBatchAdd') beforeBatchAdd_output = new EventEmitter();
	@Output('beforeBatchDelete') beforeBatchDelete_output = new EventEmitter();
	@Output('beforeBatchSave') beforeBatchSave_output = new EventEmitter();
	@Output('beforePrint') beforePrint_output = new EventEmitter();
	@Output('beforeRowDrop') beforeRowDrop_output = new EventEmitter();
	@Output('beginEdit') beginEdit_output = new EventEmitter();
	@Output('cellEdit') cellEdit_output = new EventEmitter();
	@Output('cellSave') cellSave_output = new EventEmitter();
	@Output('cellSelected') cellSelected_output = new EventEmitter();
	@Output('cellSelecting') cellSelecting_output = new EventEmitter();
	@Output('cellDeselected') cellDeselected_output = new EventEmitter();
	@Output('cellDeselecting') cellDeselecting_output = new EventEmitter();
	@Output('columnDrag') columnDrag_output = new EventEmitter();
	@Output('columnDragStart') columnDragStart_output = new EventEmitter();
	@Output('columnDrop') columnDrop_output = new EventEmitter();
	@Output('columnSelected') columnSelected_output = new EventEmitter();
	@Output('columnSelecting') columnSelecting_output = new EventEmitter();
	@Output('columnDeselected') columnDeselected_output = new EventEmitter();
	@Output('columnDeselecting') columnDeselecting_output = new EventEmitter();
	@Output('contextClick') contextClick_output = new EventEmitter();
	@Output('contextOpen') contextOpen_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('dataBound') dataBound_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('detailsCollapse') detailsCollapse_output = new EventEmitter();
	@Output('detailsDataBound') detailsDataBound_output = new EventEmitter();
	@Output('detailsExpand') detailsExpand_output = new EventEmitter();
	@Output('endAdd') endAdd_output = new EventEmitter();
	@Output('endDelete') endDelete_output = new EventEmitter();
	@Output('endEdit') endEdit_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('mergeHeaderCellInfo') mergeHeaderCellInfo_output = new EventEmitter();
	@Output('mergeCellInfo') mergeCellInfo_output = new EventEmitter();
	@Output('queryCellInfo') queryCellInfo_output = new EventEmitter();
	@Output('recordClick') recordClick_output = new EventEmitter();
	@Output('recordDoubleClick') recordDoubleClick_output = new EventEmitter();
	@Output('resized') resized_output = new EventEmitter();
	@Output('resizeEnd') resizeEnd_output = new EventEmitter();
	@Output('resizeStart') resizeStart_output = new EventEmitter();
	@Output('rightClick') rightClick_output = new EventEmitter();
	@Output('rowDataBound') rowDataBound_output = new EventEmitter();
	@Output('rowSelected') rowSelected_output = new EventEmitter();
	@Output('rowSelecting') rowSelecting_output = new EventEmitter();
	@Output('rowDeselected') rowDeselected_output = new EventEmitter();
	@Output('rowDeselecting') rowDeselecting_output = new EventEmitter();
	@Output('rowDrag') rowDrag_output = new EventEmitter();
	@Output('rowDragStart') rowDragStart_output = new EventEmitter();
	@Output('rowDrop') rowDrop_output = new EventEmitter();
	@Output('rowHover') rowHover_output = new EventEmitter();
	@Output('templateRefresh') templateRefresh_output = new EventEmitter();
	@Output('toolbarClick') toolbarClick_output = new EventEmitter();

	@ContentChild(GridColumnsDirective) tag_columns: any;
	@ContentChild(GridSummaryRowsDirective) tag_summaryRows: any;
	@ContentChild(GridStackedHeaderRowsDirective) tag_stackedHeaderRows: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('Grid', el, cdRef, ['columns', 'summaryRows', 'stackedHeaderRows'], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_GRID_COMPONENTS: Type<any>[] = [GridComponent
, GridCommandsDirective, GridColumnsDirective, GridSummaryColumnsDirective, GridSummaryRowsDirective, GridStackedHeaderColumnsDirective, GridStackedHeaderRowsDirective, GridCommandDirective, GridColumnDirective, GridSummaryColumnDirective, GridSummaryRowDirective, GridStackedHeaderColumnDirective, GridStackedHeaderRowDirective];


