import 'syncfusion-javascript/Scripts/ej/web/ej.pivottreemap.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-pivottreemap',
    template: ''})
export class PivotTreeMapComponent extends EJComponents<any, any> {
	@Input('cssClass') cssClass_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('customObject') customObject_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('locale') locale_input: any;
	@Input('operationalMode') operationalMode_input: any;
	@Input('serviceMethodSettings') serviceMethodSettings_input: any;
	@Input('url') url_input: any;
	@Input('enableXHRCredentials') enableXHRCredentials_input: any;
	@Input('dataSource.data') dataSource_data_input: any;
	@Input('dataSource.cube') dataSource_cube_input: any;
	@Input('dataSource.sourceInfo') dataSource_sourceInfo_input: any;
	@Input('dataSource.providerName') dataSource_providerName_input: any;
	@Input('dataSource.catalog') dataSource_catalog_input: any;
	@Input('serviceMethodSettings.initialize') serviceMethodSettings_initialize_input: any;
	@Input('serviceMethodSettings.drillDown') serviceMethodSettings_drillDown_input: any;
	@Input('dataSource.columns') dataSource_columns_input: any;
	@Input('dataSource.rows') dataSource_rows_input: any;
	@Input('dataSource.values') dataSource_values_input: any;
	@Input('dataSource.filters') dataSource_filters_input: any;
    @Input('options') options: any;


	@Output('afterServiceInvoke') afterServiceInvoke_output = new EventEmitter();
	@Output('beforeServiceInvoke') beforeServiceInvoke_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('drillSuccess') drillSuccess_output = new EventEmitter();
	@Output('renderComplete') renderComplete_output = new EventEmitter();
	@Output('renderFailure') renderFailure_output = new EventEmitter();
	@Output('renderSuccess') renderSuccess_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('PivotTreeMap', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_PIVOTTREEMAP_COMPONENTS: Type<any>[] = [PivotTreeMapComponent
];


