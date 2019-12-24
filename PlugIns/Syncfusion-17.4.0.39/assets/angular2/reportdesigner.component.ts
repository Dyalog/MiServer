import 'syncfusion-javascript/Scripts/ej/web/ej.reportdesigner.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-reportdesigner',
    template: ''})
export class ReportDesignerComponent extends EJComponents<any, any> {
	@Input('configurePaneSettings') configurePaneSettings_input: any;
	@Input('locale') locale_input: any;
	@Input('permissionSettings') permissionSettings_input: any;
	@Input('reportPath') reportPath_input: any;
	@Input('reportType') reportType_input: any;
	@Input('reportServerUrl') reportServerUrl_input: any;
	@Input('serviceAuthorizationToken') serviceAuthorizationToken_input: any;
	@Input('serviceUrl') serviceUrl_input: any;
	@Input('tenantName') tenantName_input: any;
	@Input('toolbarSettings') toolbarSettings_input: any;
	@Input('configurePaneSettings.items') configurePaneSettings_items_input: any;
	@Input('configurePaneSettings.showConfigurePane') configurePaneSettings_showConfigurePane_input: any;
	@Input('permissionSettings.dataSource') permissionSettings_dataSource_input: any;
	@Input('toolbarSettings.items') toolbarSettings_items_input: any;
	@Input('toolbarSettings.showToolbar') toolbarSettings_showToolbar_input: any;
	@Input('toolbarSettings.templateId') toolbarSettings_templateId_input: any;
	@Input('reportDataExtensions') reportDataExtensions_input: any;
	@Input('reportItemExtensions') reportItemExtensions_input: any;
    @Input('options') options: any;


	@Output('ajaxBeforeLoad') ajaxBeforeLoad_output = new EventEmitter();
	@Output('ajaxError') ajaxError_output = new EventEmitter();
	@Output('ajaxSuccess') ajaxSuccess_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('newDataClick') newDataClick_output = new EventEmitter();
	@Output('openReportClick') openReportClick_output = new EventEmitter();
	@Output('previewReport') previewReport_output = new EventEmitter();
	@Output('reportModified') reportModified_output = new EventEmitter();
	@Output('reportOpened') reportOpened_output = new EventEmitter();
	@Output('reportSaved') reportSaved_output = new EventEmitter();
	@Output('saveReportClick') saveReportClick_output = new EventEmitter();
	@Output('toolbarClick') toolbarClick_output = new EventEmitter();
	@Output('toolbarRendering') toolbarRendering_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('ReportDesigner', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_REPORTDESIGNER_COMPONENTS: Type<any>[] = [ReportDesignerComponent
];


