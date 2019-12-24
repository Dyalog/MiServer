import 'syncfusion-javascript/Scripts/ej/web/ej.pivotgauge.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-pivotgauge',
    template: ''})
export class PivotGaugeComponent extends EJComponents<any, any> {
	@Input('columnsCount') columnsCount_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('customObject') customObject_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enableTooltip') enableTooltip_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('frame') frame_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('labelFormatSettings') labelFormatSettings_input: any;
	@Input('locale') locale_input: any;
	@Input('rowsCount') rowsCount_input: any;
	@Input('scales') scales_input: any;
	@Input('serviceMethodSettings') serviceMethodSettings_input: any;
	@Input('showHeaderLabel') showHeaderLabel_input: any;
	@Input('url') url_input: any;
	@Input('analysisMode') analysisMode_input: any;
	@Input('operationalMode') operationalMode_input: any;
	@Input('enableXHRCredentials') enableXHRCredentials_input: any;
	@Input('dataSource.cube') dataSource_cube_input: any;
	@Input('dataSource.sourceInfo') dataSource_sourceInfo_input: any;
	@Input('dataSource.providerName') dataSource_providerName_input: any;
	@Input('dataSource.data') dataSource_data_input: any;
	@Input('dataSource.catalog') dataSource_catalog_input: any;
	@Input('frame.frameType') frame_frameType_input: any;
	@Input('frame.halfCircleFrameEndAngle') frame_halfCircleFrameEndAngle_input: any;
	@Input('frame.halfCircleFrameStartAngle') frame_halfCircleFrameStartAngle_input: any;
	@Input('labelFormatSettings.numberFormat') labelFormatSettings_numberFormat_input: any;
	@Input('labelFormatSettings.decimalPlaces') labelFormatSettings_decimalPlaces_input: any;
	@Input('labelFormatSettings.prefixText') labelFormatSettings_prefixText_input: any;
	@Input('labelFormatSettings.suffixText') labelFormatSettings_suffixText_input: any;
	@Input('serviceMethodSettings.initialize') serviceMethodSettings_initialize_input: any;
	@Input('dataSource.columns') dataSource_columns_input: any;
	@Input('dataSource.rows') dataSource_rows_input: any;
	@Input('dataSource.values') dataSource_values_input: any;
	@Input('dataSource.filters') dataSource_filters_input: any;
    @Input('options') options: any;


	@Output('afterServiceInvoke') afterServiceInvoke_output = new EventEmitter();
	@Output('beforeServiceInvoke') beforeServiceInvoke_output = new EventEmitter();
	@Output('beforePivotEnginePopulate') beforePivotEnginePopulate_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('renderComplete') renderComplete_output = new EventEmitter();
	@Output('renderFailure') renderFailure_output = new EventEmitter();
	@Output('renderSuccess') renderSuccess_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('PivotGauge', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_PIVOTGAUGE_COMPONENTS: Type<any>[] = [PivotGaugeComponent
];


