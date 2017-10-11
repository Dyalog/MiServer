import 'syncfusion-javascript/Scripts/ej/web/ej.pivotgrid.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-pivotgrid',
    template: ''})
export class PivotGridComponent extends EJComponents<any, any> {
	@Input('analysisMode') analysisMode_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('pivotTableFieldListID') pivotTableFieldListID_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('valueSortSettings') valueSortSettings_input: any;
	@Input('frozenHeaderSettings') frozenHeaderSettings_input: any;
	@Input('headerSettings') headerSettings_input: any;
	@Input('showUniqueNameOnPivotButton') showUniqueNameOnPivotButton_input: any;
	@Input('customObject') customObject_input: any;
	@Input('collapsedMembers') collapsedMembers_input: any;
	@Input('enableCellContext') enableCellContext_input: any;
	@Input('enableCellSelection') enableCellSelection_input: any;
	@Input('enableDrillThrough') enableDrillThrough_input: any;
	@Input('enableCellDoubleClick') enableCellDoubleClick_input: any;
	@Input('enableCellEditing') enableCellEditing_input: any;
	@Input('enableCollapseByDefault') enableCollapseByDefault_input: any;
	@Input('enableColumnGrandTotal') enableColumnGrandTotal_input: any;
	@Input('enableConditionalFormatting') enableConditionalFormatting_input: any;
	@Input('enableAdvancedFilter') enableAdvancedFilter_input: any;
	@Input('enableDeferUpdate') enableDeferUpdate_input: any;
	@Input('enableGroupingBar') enableGroupingBar_input: any;
	@Input('enableMemberEditorPaging') enableMemberEditorPaging_input: any;
	@Input('memberEditorPageSize') memberEditorPageSize_input: any;
	@Input('enableGrandTotal') enableGrandTotal_input: any;
	@Input('enableJSONRendering') enableJSONRendering_input: any;
	@Input('enablePivotFieldList') enablePivotFieldList_input: any;
	@Input('enableRowGrandTotal') enableRowGrandTotal_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableToolTip') enableToolTip_input: any;
	@Input('enableToolTipAnimation') enableToolTipAnimation_input: any;
	@Input('enableColumnResizing') enableColumnResizing_input: any;
	@Input('resizeColumnsToFit') resizeColumnsToFit_input: any;
	@Input('enableContextMenu') enableContextMenu_input: any;
	@Input('enableVirtualScrolling') enableVirtualScrolling_input: any;
	@Input('enablePaging') enablePaging_input: any;
	@Input('hyperlinkSettings') hyperlinkSettings_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('jsonRecords') jsonRecords_input: any;
	@Input('layout') layout_input: any;
	@Input('locale') locale_input: any;
	@Input('operationalMode') operationalMode_input: any;
	@Input('serviceMethodSettings') serviceMethodSettings_input: any;
	@Input('url') url_input: any;
	@Input('dataSource.cube') dataSource_cube_input: any;
	@Input('dataSource.sourceInfo') dataSource_sourceInfo_input: any;
	@Input('dataSource.providerName') dataSource_providerName_input: any;
	@Input('dataSource.data') dataSource_data_input: any;
	@Input('dataSource.catalog') dataSource_catalog_input: any;
	@Input('dataSource.enableAdvancedFilter') dataSource_enableAdvancedFilter_input: any;
	@Input('dataSource.reportName') dataSource_reportName_input: any;
	@Input('dataSource.pagerOptions') dataSource_pagerOptions_input: any;
	@Input('dataSource.pagerOptions.categoricalPageSize') dataSource_pagerOptions_categoricalPageSize_input: any;
	@Input('dataSource.pagerOptions.seriesPageSize') dataSource_pagerOptions_seriesPageSize_input: any;
	@Input('dataSource.pagerOptions.categoricalCurrentPage') dataSource_pagerOptions_categoricalCurrentPage_input: any;
	@Input('dataSource.pagerOptions.seriesCurrentPage') dataSource_pagerOptions_seriesCurrentPage_input: any;
	@Input('valueSortSettings.headerText') valueSortSettings_headerText_input: any;
	@Input('valueSortSettings.headerDelimiters') valueSortSettings_headerDelimiters_input: any;
	@Input('valueSortSettings.sortOrder') valueSortSettings_sortOrder_input: any;
	@Input('frozenHeaderSettings.enableFrozenRowHeaders') frozenHeaderSettings_enableFrozenRowHeaders_input: any;
	@Input('frozenHeaderSettings.enableFrozenColumnHeaders') frozenHeaderSettings_enableFrozenColumnHeaders_input: any;
	@Input('frozenHeaderSettings.enableFrozenHeaders') frozenHeaderSettings_enableFrozenHeaders_input: any;
	@Input('frozenHeaderSettings.scrollerSize') frozenHeaderSettings_scrollerSize_input: any;
	@Input('headerSettings.showRowItems') headerSettings_showRowItems_input: any;
	@Input('headerSettings.showColumnItems') headerSettings_showColumnItems_input: any;
	@Input('hyperlinkSettings.enableColumnHeaderHyperlink') hyperlinkSettings_enableColumnHeaderHyperlink_input: any;
	@Input('hyperlinkSettings.enableRowHeaderHyperlink') hyperlinkSettings_enableRowHeaderHyperlink_input: any;
	@Input('hyperlinkSettings.enableSummaryCellHyperlink') hyperlinkSettings_enableSummaryCellHyperlink_input: any;
	@Input('hyperlinkSettings.enableValueCellHyperlink') hyperlinkSettings_enableValueCellHyperlink_input: any;
	@Input('serviceMethodSettings.drillDown') serviceMethodSettings_drillDown_input: any;
	@Input('serviceMethodSettings.exportPivotGrid') serviceMethodSettings_exportPivotGrid_input: any;
	@Input('serviceMethodSettings.deferUpdate') serviceMethodSettings_deferUpdate_input: any;
	@Input('serviceMethodSettings.fetchMembers') serviceMethodSettings_fetchMembers_input: any;
	@Input('serviceMethodSettings.filtering') serviceMethodSettings_filtering_input: any;
	@Input('serviceMethodSettings.initialize') serviceMethodSettings_initialize_input: any;
	@Input('serviceMethodSettings.nodeDropped') serviceMethodSettings_nodeDropped_input: any;
	@Input('serviceMethodSettings.nodeStateModified') serviceMethodSettings_nodeStateModified_input: any;
	@Input('serviceMethodSettings.paging') serviceMethodSettings_paging_input: any;
	@Input('serviceMethodSettings.sorting') serviceMethodSettings_sorting_input: any;
	@Input('serviceMethodSettings.memberExpand') serviceMethodSettings_memberExpand_input: any;
	@Input('serviceMethodSettings.cellEditing') serviceMethodSettings_cellEditing_input: any;
	@Input('serviceMethodSettings.saveReport') serviceMethodSettings_saveReport_input: any;
	@Input('serviceMethodSettings.loadReport') serviceMethodSettings_loadReport_input: any;
	@Input('serviceMethodSettings.calculatedField') serviceMethodSettings_calculatedField_input: any;
	@Input('serviceMethodSettings.drillThroughHierarchies') serviceMethodSettings_drillThroughHierarchies_input: any;
	@Input('serviceMethodSettings.drillThroughDataTable') serviceMethodSettings_drillThroughDataTable_input: any;
	@Input('serviceMethodSettings.valueSorting') serviceMethodSettings_valueSorting_input: any;
	@Input('serviceMethodSettings.removeButton') serviceMethodSettings_removeButton_input: any;
	@Input('serviceMethodSettings.writeBack') serviceMethodSettings_writeBack_input: any;
	@Input('dataSource.columns') dataSource_columns_input: any;
	@Input('dataSource.rows') dataSource_rows_input: any;
	@Input('dataSource.values') dataSource_values_input: any;
	@Input('dataSource.filters') dataSource_filters_input: any;


	@Output('afterServiceInvoke') afterServiceInvoke_output = new EventEmitter();
	@Output('beforeServiceInvoke') beforeServiceInvoke_output = new EventEmitter();
	@Output('beforePivotEnginePopulate') beforePivotEnginePopulate_output = new EventEmitter();
	@Output('cellDoubleClick') cellDoubleClick_output = new EventEmitter();
	@Output('cellContext') cellContext_output = new EventEmitter();
	@Output('cellSelection') cellSelection_output = new EventEmitter();
	@Output('columnHeaderHyperlinkClick') columnHeaderHyperlinkClick_output = new EventEmitter();
	@Output('drillSuccess') drillSuccess_output = new EventEmitter();
	@Output('drillThrough') drillThrough_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('renderComplete') renderComplete_output = new EventEmitter();
	@Output('renderFailure') renderFailure_output = new EventEmitter();
	@Output('renderSuccess') renderSuccess_output = new EventEmitter();
	@Output('rowHeaderHyperlinkClick') rowHeaderHyperlinkClick_output = new EventEmitter();
	@Output('summaryCellHyperlinkClick') summaryCellHyperlinkClick_output = new EventEmitter();
	@Output('valueCellHyperlinkClick') valueCellHyperlinkClick_output = new EventEmitter();
	@Output('saveReport') saveReport_output = new EventEmitter();
	@Output('loadReport') loadReport_output = new EventEmitter();
	@Output('beforeExport') beforeExport_output = new EventEmitter();
	@Output('cellEdit') cellEdit_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('PivotGrid', el, cdRef, []);
    }



}

export var EJ_PIVOTGRID_COMPONENTS: Type<any>[] = [PivotGridComponent
];


