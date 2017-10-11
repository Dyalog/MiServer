import 'syncfusion-javascript/Scripts/ej/web/ej.pivotchart.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-pivotchart',
    template: ''})
export class PivotChartComponent extends EJComponents<any, any> {
	@Input('analysisMode') analysisMode_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('zooming') zooming_input: any;
	@Input('commonSeriesOptions') commonSeriesOptions_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('customObject') customObject_input: any;
	@Input('enable3D') enable3D_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableMultiLevelLabels') enableMultiLevelLabels_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('legend') legend_input: any;
	@Input('locale') locale_input: any;
	@Input('operationalMode') operationalMode_input: any;
	@Input('primaryXAxis') primaryXAxis_input: any;
	@Input('primaryYAxis') primaryYAxis_input: any;
	@Input('rotation') rotation_input: any;
	@Input('enableContextMenu') enableContextMenu_input: any;
	@Input('serviceMethodSettings') serviceMethodSettings_input: any;
	@Input('size') size_input: any;
	@Input('url') url_input: any;
	@Input('zooming.enableScrollbar') zooming_enableScrollbar_input: any;
	@Input('commonSeriesOptions.type') commonSeriesOptions_type_input: any;
	@Input('dataSource.cube') dataSource_cube_input: any;
	@Input('dataSource.sourceInfo') dataSource_sourceInfo_input: any;
	@Input('dataSource.providerName') dataSource_providerName_input: any;
	@Input('dataSource.data') dataSource_data_input: any;
	@Input('dataSource.catalog') dataSource_catalog_input: any;
	@Input('serviceMethodSettings.drillDown') serviceMethodSettings_drillDown_input: any;
	@Input('serviceMethodSettings.exportPivotChart') serviceMethodSettings_exportPivotChart_input: any;
	@Input('serviceMethodSettings.initialize') serviceMethodSettings_initialize_input: any;
	@Input('serviceMethodSettings.paging') serviceMethodSettings_paging_input: any;
	@Input('dataSource.columns') dataSource_columns_input: any;
	@Input('dataSource.rows') dataSource_rows_input: any;
	@Input('dataSource.values') dataSource_values_input: any;
	@Input('dataSource.filters') dataSource_filters_input: any;


	@Output('load') load_output = new EventEmitter();
	@Output('afterServiceInvoke') afterServiceInvoke_output = new EventEmitter();
	@Output('beforeServiceInvoke') beforeServiceInvoke_output = new EventEmitter();
	@Output('beforePivotEnginePopulate') beforePivotEnginePopulate_output = new EventEmitter();
	@Output('drillSuccess') drillSuccess_output = new EventEmitter();
	@Output('renderComplete') renderComplete_output = new EventEmitter();
	@Output('renderFailure') renderFailure_output = new EventEmitter();
	@Output('renderSuccess') renderSuccess_output = new EventEmitter();
	@Output('beforeExport') beforeExport_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('PivotChart', el, cdRef, []);
    }



}

export var EJ_PIVOTCHART_COMPONENTS: Type<any>[] = [PivotChartComponent
];


