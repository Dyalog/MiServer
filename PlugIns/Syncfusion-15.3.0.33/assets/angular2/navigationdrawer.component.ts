import 'syncfusion-javascript/Scripts/ej/web/ej.navigationdrawer.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: '[ej-navigationdrawer]',
    template: '<ng-content></ng-content>'})
export class NavigationDrawerComponent extends EJComponents<any, any> {
	@Input('ajaxSettings') ajaxSettings_input: any;
	@Input('contentId') contentId_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('direction') direction_input: any;
	@Input('enableListView') enableListView_input: any;
	@Input('items') items_input: any;
	@Input('listViewSettings') listViewSettings_input: any;
	@Input('position') position_input: any;
	@Input('targetId') targetId_input: any;
	@Input('type') type_input: any;
	@Input('width') width_input: any;
	@Input('isPaneOpen') isPaneOpen_input: any;
	@Input('ajaxSettings.async') ajaxSettings_async_input: any;
	@Input('ajaxSettings.cache') ajaxSettings_cache_input: any;
	@Input('ajaxSettings.contentType') ajaxSettings_contentType_input: any;
	@Input('ajaxSettings.data') ajaxSettings_data_input: any;
	@Input('ajaxSettings.dataType') ajaxSettings_dataType_input: any;
	@Input('ajaxSettings.type') ajaxSettings_type_input: any;


	@Output('ajaxComplete') ajaxComplete_output = new EventEmitter();
	@Output('ajaxError') ajaxError_output = new EventEmitter();
	@Output('ajaxSuccess') ajaxSuccess_output = new EventEmitter();
	@Output('beforeClose') beforeClose_output = new EventEmitter();
	@Output('open') open_output = new EventEmitter();
	@Output('swipe') swipe_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('NavigationDrawer', el, cdRef, []);
    }



}

export var EJ_NAVIGATIONDRAWER_COMPONENTS: Type<any>[] = [NavigationDrawerComponent
];


