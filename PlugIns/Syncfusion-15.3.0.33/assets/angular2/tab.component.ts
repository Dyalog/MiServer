import 'syncfusion-javascript/Scripts/ej/web/ej.tab.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-tab',
    template: '<ng-content></ng-content>'})
export class TabComponent extends EJComponents<any, any> {
	@Input('ajaxSettings') ajaxSettings_input: any;
	@Input('allowKeyboardNavigation') allowKeyboardNavigation_input: any;
	@Input('collapsible') collapsible_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('disabledItemIndex') disabledItemIndex_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enabledItemIndex') enabledItemIndex_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableTabScroll') enableTabScroll_input: any;
	@Input('events') events_input: any;
	@Input('headerPosition') headerPosition_input: any;
	@Input('headerSize') headerSize_input: any;
	@Input('height') height_input: any;
	@Input('heightAdjustMode') heightAdjustMode_input: any;
	@Input('hiddenItemIndex') hiddenItemIndex_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('idPrefix') idPrefix_input: any;
	@Input('showCloseButton') showCloseButton_input: any;
	@Input('showReloadIcon') showReloadIcon_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('width') width_input: any;
	@Input('ajaxSettings.async') ajaxSettings_async_input: any;
	@Input('ajaxSettings.cache') ajaxSettings_cache_input: any;
	@Input('ajaxSettings.contentType') ajaxSettings_contentType_input: any;
	@Input('ajaxSettings.data') ajaxSettings_data_input: any;
	@Input('ajaxSettings.dataType') ajaxSettings_dataType_input: any;
	@Input('ajaxSettings.type') ajaxSettings_type_input: any;

	@Input('selectedItemIndex') selectedItemIndex_two: any;
	@Output('selectedItemIndexChange') selectedItemIndex_twoChange = new EventEmitter<any>();

	@Output('itemActive') itemActive_output = new EventEmitter();
	@Output('ajaxBeforeLoad') ajaxBeforeLoad_output = new EventEmitter();
	@Output('ajaxError') ajaxError_output = new EventEmitter();
	@Output('ajaxLoad') ajaxLoad_output = new EventEmitter();
	@Output('ajaxSuccess') ajaxSuccess_output = new EventEmitter();
	@Output('beforeActive') beforeActive_output = new EventEmitter();
	@Output('beforeItemRemove') beforeItemRemove_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('itemAdd') itemAdd_output = new EventEmitter();
	@Output('itemRemove') itemRemove_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('Tab', el, cdRef, []);
    }



}

export var EJ_TAB_COMPONENTS: Type<any>[] = [TabComponent
];


