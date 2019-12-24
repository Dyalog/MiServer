import 'syncfusion-javascript/Scripts/ej/web/ej.reportviewer.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-reportviewer',
    template: ''})
export class ReportViewerComponent extends EJComponents<any, any> {
	@Input('enablePageCache') enablePageCache_input: any;
	@Input('exportSettings') exportSettings_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('locale') locale_input: any;
	@Input('pageSettings') pageSettings_input: any;
	@Input('parameterSettings') parameterSettings_input: any;
	@Input('printMode') printMode_input: any;
	@Input('printOption') printOption_input: any;
	@Input('processingMode') processingMode_input: any;
	@Input('renderMode') renderMode_input: any;
	@Input('reportPath') reportPath_input: any;
	@Input('reportServerUrl') reportServerUrl_input: any;
	@Input('reportServiceUrl') reportServiceUrl_input: any;
	@Input('toolbarSettings') toolbarSettings_input: any;
	@Input('zoomFactor') zoomFactor_input: any;
	@Input('serviceAuthorizationToken') serviceAuthorizationToken_input: any;
	@Input('enableParameterBlockScroller') enableParameterBlockScroller_input: any;
	@Input('enableDatasourceBlockScroller') enableDatasourceBlockScroller_input: any;
	@Input('sizeToReportContent') sizeToReportContent_input: any;
	@Input('autoRender') autoRender_input: any;
	@Input('enableNotificationBar') enableNotificationBar_input: any;
	@Input('enableDropDownSearch') enableDropDownSearch_input: any;
	@Input('enablePageVirtualization') enablePageVirtualization_input: any;
	@Input('showExceptionsInDialog') showExceptionsInDialog_input: any;
	@Input('exportSettings.exportOptions') exportSettings_exportOptions_input: any;
	@Input('exportSettings.excelFormat') exportSettings_excelFormat_input: any;
	@Input('exportSettings.wordFormat') exportSettings_wordFormat_input: any;
	@Input('exportSettings.pptFormat') exportSettings_pptFormat_input: any;
	@Input('exportSettings.customItems') exportSettings_customItems_input: any;
	@Input('pageSettings.orientation') pageSettings_orientation_input: any;
	@Input('pageSettings.paperSize') pageSettings_paperSize_input: any;
	@Input('parameterSettings.delimiterChar') parameterSettings_delimiterChar_input: any;
	@Input('parameterSettings.popupHeight') parameterSettings_popupHeight_input: any;
	@Input('parameterSettings.popupWidth') parameterSettings_popupWidth_input: any;
	@Input('parameterSettings.itemWidth') parameterSettings_itemWidth_input: any;
	@Input('parameterSettings.labelWidth') parameterSettings_labelWidth_input: any;
	@Input('toolbarSettings.click') toolbarSettings_click_input: any;
	@Input('toolbarSettings.items') toolbarSettings_items_input: any;
	@Input('toolbarSettings.showToolbar') toolbarSettings_showToolbar_input: any;
	@Input('toolbarSettings.showTooltip') toolbarSettings_showTooltip_input: any;
	@Input('toolbarSettings.templateId') toolbarSettings_templateId_input: any;
	@Input('toolbarSettings.customItems') toolbarSettings_customItems_input: any;
	@Input('toolbarSettings.customGroups') toolbarSettings_customGroups_input: any;
	@Input('dataSources') dataSources_input: any;
	@Input('parameters') parameters_input: any;
    @Input('options') options: any;


	@Output('destroy') destroy_output = new EventEmitter();
	@Output('drillThrough') drillThrough_output = new EventEmitter();
	@Output('renderingBegin') renderingBegin_output = new EventEmitter();
	@Output('renderingComplete') renderingComplete_output = new EventEmitter();
	@Output('reportError') reportError_output = new EventEmitter();
	@Output('reportExport') reportExport_output = new EventEmitter();
	@Output('reportLoaded') reportLoaded_output = new EventEmitter();
	@Output('showError') showError_output = new EventEmitter();
	@Output('viewReportClick') viewReportClick_output = new EventEmitter();
	@Output('exportProgressChanged') exportProgressChanged_output = new EventEmitter();
	@Output('printProgressChanged') printProgressChanged_output = new EventEmitter();
	@Output('exportItemClick') exportItemClick_output = new EventEmitter();
	@Output('toolbarRendering') toolbarRendering_output = new EventEmitter();
	@Output('toolBarItemClick') toolBarItemClick_output = new EventEmitter();
	@Output('hyperlink') hyperlink_output = new EventEmitter();
	@Output('reportPrint') reportPrint_output = new EventEmitter();
	@Output('ajaxBeforeLoad') ajaxBeforeLoad_output = new EventEmitter();
	@Output('ajaxSuccess') ajaxSuccess_output = new EventEmitter();
	@Output('ajaxError') ajaxError_output = new EventEmitter();
	@Output('parameterUpdateStateChange') parameterUpdateStateChange_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('ReportViewer', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_REPORTVIEWER_COMPONENTS: Type<any>[] = [ReportViewerComponent
];


