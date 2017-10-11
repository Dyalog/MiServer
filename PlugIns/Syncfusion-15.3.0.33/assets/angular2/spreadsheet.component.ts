import 'syncfusion-javascript/Scripts/ej/web/ej.spreadsheet.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-rangesettings>e-rangesetting',
})
export class SpreadsheetRangeSettingDirective extends ComplexTagElement {

	@Input('dataSource') dataSource: any;
	@Input('headerStyles') headerStyles: any;
	@Input('primaryKey') primaryKey: any;
	@Input('query') query: any;
	@Input('showHeader') showHeader: any;
	@Input('startCell') startCell: any;

    
    constructor( @Inject(forwardRef(() => SpreadsheetComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-sheets>e-rangesettings',
    queries: {
        children: new ContentChildren(SpreadsheetRangeSettingDirective)
    }
})
export class SpreadsheetRangeSettingsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => SpreadsheetComponent)) widget: EJComponents<any, any>) {
        super('rangeSettings')
        }
}

@Directive({
    selector: 'e-sheets>e-sheet',
})
export class SpreadsheetSheetDirective extends ComplexTagElement {

	@Input('border') border: any;
	@Input('cellTypes') cellTypes: any;
	@Input('cFormatRule') cFormatRule: any;
	@Input('colCount') colCount: any;
	@Input('columnWidth') columnWidth: any;
	@Input('dataSource') dataSource: any;
	@Input('fieldAsColumnHeader') fieldAsColumnHeader: any;
	@Input('frozenRows') frozenRows: any;
	@Input('frozenColumns') frozenColumns: any;
	@Input('headerStyles') headerStyles: any;
	@Input('hideColumns') hideColumns: any;
	@Input('hideRows') hideRows: any;
	@Input('mergeCells') mergeCells: any;
	@Input('primaryKey') primaryKey: any;
	@Input('query') query: any;
	@Input('rangeSettings') rangeSettings: any;
	@Input('rowCount') rowCount: any;
	@Input('rows') rows: any;
	@Input('showGridlines') showGridlines: any;
	@Input('showHeader') showHeader: any;
	@Input('showHeadings') showHeadings: any;
	@Input('sheetName') sheetName: any;
	@Input('startCell') startCell: any;

	@ContentChild(SpreadsheetRangeSettingsDirective) tag_rangeSettings: any;
    
    constructor( @Inject(forwardRef(() => SpreadsheetComponent)) widget: EJComponents<any, any>) {
        super(['rangeSettings']);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-spreadsheet>e-sheets',
    queries: {
        children: new ContentChildren(SpreadsheetSheetDirective)
    }
})
export class SpreadsheetSheetsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => SpreadsheetComponent)) widget: EJComponents<any, any>) {
        super('sheets')
        }
}




@Component({
    selector: 'ej-spreadsheet',
    template: ''})
export class SpreadsheetComponent extends EJComponents<any, any> {
	@Input('activeSheetIndex') activeSheetIndex_input: any;
	@Input('allowAutoCellType') allowAutoCellType_input: any;
	@Input('allowAutoFill') allowAutoFill_input: any;
	@Input('allowAutoSum') allowAutoSum_input: any;
	@Input('allowCellFormatting') allowCellFormatting_input: any;
	@Input('allowCellType') allowCellType_input: any;
	@Input('allowCharts') allowCharts_input: any;
	@Input('allowClear') allowClear_input: any;
	@Input('allowClipboard') allowClipboard_input: any;
	@Input('allowComments') allowComments_input: any;
	@Input('allowConditionalFormats') allowConditionalFormats_input: any;
	@Input('allowDataValidation') allowDataValidation_input: any;
	@Input('allowDelete') allowDelete_input: any;
	@Input('allowDragAndDrop') allowDragAndDrop_input: any;
	@Input('allowEditing') allowEditing_input: any;
	@Input('allowFiltering') allowFiltering_input: any;
	@Input('allowFormatAsTable') allowFormatAsTable_input: any;
	@Input('allowFormatPainter') allowFormatPainter_input: any;
	@Input('allowFormulaBar') allowFormulaBar_input: any;
	@Input('allowFreezing') allowFreezing_input: any;
	@Input('allowHyperlink') allowHyperlink_input: any;
	@Input('allowImport') allowImport_input: any;
	@Input('allowInsert') allowInsert_input: any;
	@Input('allowKeyboardNavigation') allowKeyboardNavigation_input: any;
	@Input('allowLockCell') allowLockCell_input: any;
	@Input('allowMerging') allowMerging_input: any;
	@Input('allowOverflow') allowOverflow_input: any;
	@Input('allowResizing') allowResizing_input: any;
	@Input('allowSearching') allowSearching_input: any;
	@Input('allowSelection') allowSelection_input: any;
	@Input('allowSorting') allowSorting_input: any;
	@Input('allowUndoRedo') allowUndoRedo_input: any;
	@Input('allowWrap') allowWrap_input: any;
	@Input('apWidth') apWidth_input: any;
	@Input('autoFillSettings') autoFillSettings_input: any;
	@Input('chartSettings') chartSettings_input: any;
	@Input('columnCount') columnCount_input: any;
	@Input('columnWidth') columnWidth_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('customFormulas') customFormulas_input: any;
	@Input('enableContextMenu') enableContextMenu_input: any;
	@Input('enablePivotTable') enablePivotTable_input: any;
	@Input('enableTouch') enableTouch_input: any;
	@Input('exportSettings') exportSettings_input: any;
	@Input('formatSettings') formatSettings_input: any;
	@Input('importSettings') importSettings_input: any;
	@Input('isReadOnly') isReadOnly_input: any;
	@Input('locale') locale_input: any;
	@Input('pictureSettings') pictureSettings_input: any;
	@Input('printSettings') printSettings_input: any;
	@Input('ribbonSettings') ribbonSettings_input: any;
	@Input('rowCount') rowCount_input: any;
	@Input('rowHeight') rowHeight_input: any;
	@Input('scrollSettings') scrollSettings_input: any;
	@Input('selectionSettings') selectionSettings_input: any;
	@Input('sheetCount') sheetCount_input: any;
	@Input('showPager') showPager_input: any;
	@Input('showRibbon') showRibbon_input: any;
	@Input('undoRedoStep') undoRedoStep_input: any;
	@Input('userName') userName_input: any;
	@Input('autoFillSettings.fillType') autoFillSettings_fillType_input: any;
	@Input('autoFillSettings.showFillOptions') autoFillSettings_showFillOptions_input: any;
	@Input('chartSettings.height') chartSettings_height_input: any;
	@Input('chartSettings.width') chartSettings_width_input: any;
	@Input('exportSettings.allowExporting') exportSettings_allowExporting_input: any;
	@Input('exportSettings.csvUrl') exportSettings_csvUrl_input: any;
	@Input('exportSettings.excelUrl') exportSettings_excelUrl_input: any;
	@Input('exportSettings.password') exportSettings_password_input: any;
	@Input('exportSettings.pdfUrl') exportSettings_pdfUrl_input: any;
	@Input('formatSettings.allowCellBorder') formatSettings_allowCellBorder_input: any;
	@Input('formatSettings.allowDecimalPlaces') formatSettings_allowDecimalPlaces_input: any;
	@Input('formatSettings.allowFontFamily') formatSettings_allowFontFamily_input: any;
	@Input('importSettings.importMapper') importSettings_importMapper_input: any;
	@Input('importSettings.importOnLoad') importSettings_importOnLoad_input: any;
	@Input('importSettings.importUrl') importSettings_importUrl_input: any;
	@Input('importSettings.password') importSettings_password_input: any;
	@Input('pictureSettings.allowPictures') pictureSettings_allowPictures_input: any;
	@Input('pictureSettings.height') pictureSettings_height_input: any;
	@Input('pictureSettings.width') pictureSettings_width_input: any;
	@Input('printSettings.allowPageSetup') printSettings_allowPageSetup_input: any;
	@Input('printSettings.allowPageSize') printSettings_allowPageSize_input: any;
	@Input('printSettings.allowPrinting') printSettings_allowPrinting_input: any;
	@Input('ribbonSettings.applicationTab') ribbonSettings_applicationTab_input: any;
	@Input('ribbonSettings.applicationTab.type') ribbonSettings_applicationTab_type_input: any;
	@Input('ribbonSettings.applicationTab.menuSettings') ribbonSettings_applicationTab_menuSettings_input: any;
	@Input('scrollSettings.allowScrolling') scrollSettings_allowScrolling_input: any;
	@Input('scrollSettings.allowSheetOnDemand') scrollSettings_allowSheetOnDemand_input: any;
	@Input('scrollSettings.allowVirtualScrolling') scrollSettings_allowVirtualScrolling_input: any;
	@Input('scrollSettings.height') scrollSettings_height_input: any;
	@Input('scrollSettings.isResponsive') scrollSettings_isResponsive_input: any;
	@Input('scrollSettings.scrollMode') scrollSettings_scrollMode_input: any;
	@Input('scrollSettings.width') scrollSettings_width_input: any;
	@Input('selectionSettings.activeCell') selectionSettings_activeCell_input: any;
	@Input('selectionSettings.animationTime') selectionSettings_animationTime_input: any;
	@Input('selectionSettings.enableAnimation') selectionSettings_enableAnimation_input: any;
	@Input('selectionSettings.selectionType') selectionSettings_selectionType_input: any;
	@Input('selectionSettings.selectionUnit') selectionSettings_selectionUnit_input: any;
	@Input('nameManager') nameManager_input: any;
	@Input('sheets') sheets_input: any;
	@Input('sheets.rows.cells') sheets_rows_cells_input: any;


	@Output('actionBegin') actionBegin_output = new EventEmitter();
	@Output('actionComplete') actionComplete_output = new EventEmitter();
	@Output('autoFillBegin') autoFillBegin_output = new EventEmitter();
	@Output('autoFillComplete') autoFillComplete_output = new EventEmitter();
	@Output('beforeBatchSave') beforeBatchSave_output = new EventEmitter();
	@Output('beforeCellFormat') beforeCellFormat_output = new EventEmitter();
	@Output('beforeCellSelect') beforeCellSelect_output = new EventEmitter();
	@Output('beforeDrop') beforeDrop_output = new EventEmitter();
	@Output('beforeEditComment') beforeEditComment_output = new EventEmitter();
	@Output('beforeOpen') beforeOpen_output = new EventEmitter();
	@Output('beforePanelOpen') beforePanelOpen_output = new EventEmitter();
	@Output('cellClick') cellClick_output = new EventEmitter();
	@Output('cellEdit') cellEdit_output = new EventEmitter();
	@Output('cellFormatting') cellFormatting_output = new EventEmitter();
	@Output('cellHover') cellHover_output = new EventEmitter();
	@Output('cellSave') cellSave_output = new EventEmitter();
	@Output('cellSelected') cellSelected_output = new EventEmitter();
	@Output('contextMenuClick') contextMenuClick_output = new EventEmitter();
	@Output('drag') drag_output = new EventEmitter();
	@Output('dragShape') dragShape_output = new EventEmitter();
	@Output('dragStart') dragStart_output = new EventEmitter();
	@Output('drop') drop_output = new EventEmitter();
	@Output('editRangeBegin') editRangeBegin_output = new EventEmitter();
	@Output('editRangeComplete') editRangeComplete_output = new EventEmitter();
	@Output('keyDown') keyDown_output = new EventEmitter();
	@Output('keyUp') keyUp_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('loadComplete') loadComplete_output = new EventEmitter();
	@Output('menuClick') menuClick_output = new EventEmitter();
	@Output('onImport') onImport_output = new EventEmitter();
	@Output('openFailure') openFailure_output = new EventEmitter();
	@Output('pagerClick') pagerClick_output = new EventEmitter();
	@Output('resizeStart') resizeStart_output = new EventEmitter();
	@Output('resizeEnd') resizeEnd_output = new EventEmitter();
	@Output('ribbonClick') ribbonClick_output = new EventEmitter();
	@Output('seriesRendering') seriesRendering_output = new EventEmitter();
	@Output('tabClick') tabClick_output = new EventEmitter();
	@Output('tabSelect') tabSelect_output = new EventEmitter();

	@ContentChild(SpreadsheetSheetsDirective) tag_sheets: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('Spreadsheet', el, cdRef, ['sheets']);
    }



}

export var EJ_SPREADSHEET_COMPONENTS: Type<any>[] = [SpreadsheetComponent
, SpreadsheetRangeSettingsDirective, SpreadsheetSheetsDirective, SpreadsheetRangeSettingDirective, SpreadsheetSheetDirective];


