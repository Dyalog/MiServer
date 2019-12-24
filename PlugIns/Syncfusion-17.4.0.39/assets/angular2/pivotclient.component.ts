import 'syncfusion-javascript/Scripts/ej/web/ej.pivotclient.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-pivotclient',
    template: ''})
export class PivotClientComponent extends EJComponents<any, any> {
	@Input('analysisMode') analysisMode_input: any;
	@Input('chartType') chartType_input: any;
	@Input('clientExportMode') clientExportMode_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('customObject') customObject_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('enableDrillThrough') enableDrillThrough_input: any;
	@Input('displaySettings') displaySettings_input: any;
	@Input('toolbarIconSettings') toolbarIconSettings_input: any;
	@Input('showUniqueNameOnPivotButton') showUniqueNameOnPivotButton_input: any;
	@Input('showReportCollection') showReportCollection_input: any;
	@Input('enableSplitter') enableSplitter_input: any;
	@Input('enableAdvancedFilter') enableAdvancedFilter_input: any;
	@Input('enableDeferUpdate') enableDeferUpdate_input: any;
	@Input('enableLocalStorage') enableLocalStorage_input: any;
	@Input('enablePaging') enablePaging_input: any;
	@Input('enablePivotTreeMap') enablePivotTreeMap_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableMeasureGroups') enableMeasureGroups_input: any;
	@Input('enableCellClick') enableCellClick_input: any;
	@Input('enableCellDoubleClick') enableCellDoubleClick_input: any;
	@Input('enableVirtualScrolling') enableVirtualScrolling_input: any;
	@Input('maxNodeLimitInMemberEditor') maxNodeLimitInMemberEditor_input: any;
	@Input('enableMemberEditorPaging') enableMemberEditorPaging_input: any;
	@Input('memberEditorPageSize') memberEditorPageSize_input: any;
	@Input('enableMemberEditorSorting') enableMemberEditorSorting_input: any;
	@Input('gridLayout') gridLayout_input: any;
	@Input('collapseCubeBrowserByDefault') collapseCubeBrowserByDefault_input: any;
	@Input('enableKPI') enableKPI_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('size') size_input: any;
	@Input('locale') locale_input: any;
	@Input('operationalMode') operationalMode_input: any;
	@Input('serviceMethodSettings') serviceMethodSettings_input: any;
	@Input('valueSortSettings') valueSortSettings_input: any;
	@Input('title') title_input: any;
	@Input('url') url_input: any;
	@Input('enableCompleteDataExport') enableCompleteDataExport_input: any;
	@Input('enableXHRCredentials') enableXHRCredentials_input: any;
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
	@Input('displaySettings.controlPlacement') displaySettings_controlPlacement_input: any;
	@Input('displaySettings.defaultView') displaySettings_defaultView_input: any;
	@Input('displaySettings.enableFullScreen') displaySettings_enableFullScreen_input: any;
	@Input('displaySettings.enableTogglePanel') displaySettings_enableTogglePanel_input: any;
	@Input('displaySettings.mode') displaySettings_mode_input: any;
	@Input('toolbarIconSettings.enableAddReport') toolbarIconSettings_enableAddReport_input: any;
	@Input('toolbarIconSettings.enableNewReport') toolbarIconSettings_enableNewReport_input: any;
	@Input('toolbarIconSettings.enableRenameReport') toolbarIconSettings_enableRenameReport_input: any;
	@Input('toolbarIconSettings.enableDBManipulation') toolbarIconSettings_enableDBManipulation_input: any;
	@Input('toolbarIconSettings.enableWordExport') toolbarIconSettings_enableWordExport_input: any;
	@Input('toolbarIconSettings.enableExcelExport') toolbarIconSettings_enableExcelExport_input: any;
	@Input('toolbarIconSettings.enablePdfExport') toolbarIconSettings_enablePdfExport_input: any;
	@Input('toolbarIconSettings.enableMDXQuery') toolbarIconSettings_enableMDXQuery_input: any;
	@Input('toolbarIconSettings.enableDeferUpdate') toolbarIconSettings_enableDeferUpdate_input: any;
	@Input('toolbarIconSettings.enableFullScreen') toolbarIconSettings_enableFullScreen_input: any;
	@Input('toolbarIconSettings.enableSortOrFilterColumn') toolbarIconSettings_enableSortOrFilterColumn_input: any;
	@Input('toolbarIconSettings.enableSortOrFilterRow') toolbarIconSettings_enableSortOrFilterRow_input: any;
	@Input('toolbarIconSettings.enableToggleAxis') toolbarIconSettings_enableToggleAxis_input: any;
	@Input('toolbarIconSettings.enableChartTypes') toolbarIconSettings_enableChartTypes_input: any;
	@Input('toolbarIconSettings.enableRemoveReport') toolbarIconSettings_enableRemoveReport_input: any;
	@Input('toolbarIconSettings.enableCalculatedMember') toolbarIconSettings_enableCalculatedMember_input: any;
	@Input('serviceMethodSettings.cubeChanged') serviceMethodSettings_cubeChanged_input: any;
	@Input('serviceMethodSettings.exportPivotClient') serviceMethodSettings_exportPivotClient_input: any;
	@Input('serviceMethodSettings.fetchMemberTreeNodes') serviceMethodSettings_fetchMemberTreeNodes_input: any;
	@Input('serviceMethodSettings.fetchReportList') serviceMethodSettings_fetchReportList_input: any;
	@Input('serviceMethodSettings.filterElement') serviceMethodSettings_filterElement_input: any;
	@Input('serviceMethodSettings.initialize') serviceMethodSettings_initialize_input: any;
	@Input('serviceMethodSettings.loadReport') serviceMethodSettings_loadReport_input: any;
	@Input('serviceMethodSettings.removeDBReport') serviceMethodSettings_removeDBReport_input: any;
	@Input('serviceMethodSettings.renameDBReport') serviceMethodSettings_renameDBReport_input: any;
	@Input('serviceMethodSettings.mdxQuery') serviceMethodSettings_mdxQuery_input: any;
	@Input('serviceMethodSettings.measureGroupChanged') serviceMethodSettings_measureGroupChanged_input: any;
	@Input('serviceMethodSettings.memberExpand') serviceMethodSettings_memberExpand_input: any;
	@Input('serviceMethodSettings.nodeDropped') serviceMethodSettings_nodeDropped_input: any;
	@Input('serviceMethodSettings.removeSplitButton') serviceMethodSettings_removeSplitButton_input: any;
	@Input('serviceMethodSettings.saveReport') serviceMethodSettings_saveReport_input: any;
	@Input('serviceMethodSettings.toggleAxis') serviceMethodSettings_toggleAxis_input: any;
	@Input('serviceMethodSettings.toolbarServices') serviceMethodSettings_toolbarServices_input: any;
	@Input('serviceMethodSettings.updateReport') serviceMethodSettings_updateReport_input: any;
	@Input('serviceMethodSettings.paging') serviceMethodSettings_paging_input: any;
	@Input('serviceMethodSettings.calculatedMember') serviceMethodSettings_calculatedMember_input: any;
	@Input('serviceMethodSettings.valueSorting') serviceMethodSettings_valueSorting_input: any;
	@Input('serviceMethodSettings.drillThroughHierarchies') serviceMethodSettings_drillThroughHierarchies_input: any;
	@Input('serviceMethodSettings.drillThroughDataTable') serviceMethodSettings_drillThroughDataTable_input: any;
	@Input('valueSortSettings.headerText') valueSortSettings_headerText_input: any;
	@Input('valueSortSettings.headerDelimiters') valueSortSettings_headerDelimiters_input: any;
	@Input('valueSortSettings.sortOrder') valueSortSettings_sortOrder_input: any;
	@Input('dataSource.columns') dataSource_columns_input: any;
	@Input('dataSource.rows') dataSource_rows_input: any;
	@Input('dataSource.values') dataSource_values_input: any;
	@Input('dataSource.filters') dataSource_filters_input: any;
    @Input('options') options: any;


	@Output('afterServiceInvoke') afterServiceInvoke_output = new EventEmitter();
	@Output('beforeServiceInvoke') beforeServiceInvoke_output = new EventEmitter();
	@Output('saveReport') saveReport_output = new EventEmitter();
	@Output('loadReport') loadReport_output = new EventEmitter();
	@Output('fetchReport') fetchReport_output = new EventEmitter();
	@Output('beforeExport') beforeExport_output = new EventEmitter();
	@Output('chartLoad') chartLoad_output = new EventEmitter();
	@Output('schemaLoad') schemaLoad_output = new EventEmitter();
	@Output('treeMapLoad') treeMapLoad_output = new EventEmitter();
	@Output('valueCellHyperlinkClick') valueCellHyperlinkClick_output = new EventEmitter();
	@Output('cellClick') cellClick_output = new EventEmitter();
	@Output('pointRegionClick') pointRegionClick_output = new EventEmitter();
	@Output('axesLabelRendering') axesLabelRendering_output = new EventEmitter();
	@Output('drillThrough') drillThrough_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('renderComplete') renderComplete_output = new EventEmitter();
	@Output('renderFailure') renderFailure_output = new EventEmitter();
	@Output('renderSuccess') renderSuccess_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('PivotClient', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_PIVOTCLIENT_COMPONENTS: Type<any>[] = [PivotClientComponent
];


