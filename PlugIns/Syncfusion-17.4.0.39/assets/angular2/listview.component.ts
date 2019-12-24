import 'syncfusion-javascript/Scripts/ej/web/ej.listview.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-listview',
    template: '<ng-content></ng-content>'})
export class ListViewComponent extends EJComponents<any, any> {
	@Input('ajaxSettings') ajaxSettings_input: any;
	@Input('checkedIndices') checkedIndices_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enableAjax') enableAjax_input: any;
	@Input('enableCache') enableCache_input: any;
	@Input('enableCheckMark') enableCheckMark_input: any;
	@Input('enableFiltering') enableFiltering_input: any;
	@Input('enableGroupList') enableGroupList_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('fieldSettings') fieldSettings_input: any;
	@Input('items') items_input: any;
	@Input('headerBackButtonText') headerBackButtonText_input: any;
	@Input('headerTitle') headerTitle_input: any;
	@Input('height') height_input: any;
	@Input('locale') locale_input: any;
	@Input('persistSelection') persistSelection_input: any;
	@Input('preventSelection') preventSelection_input: any;
	@Input('query') query_input: any;
	@Input('renderTemplate') renderTemplate_input: any;
	@Input('selectedItemIndex') selectedItemIndex_input: any;
	@Input('showHeader') showHeader_input: any;
	@Input('showHeaderBackButton') showHeaderBackButton_input: any;
	@Input('templateId') templateId_input: any;
	@Input('width') width_input: any;
	@Input('itemRequestCount') itemRequestCount_input: any;
	@Input('totalItemsCount') totalItemsCount_input: any;
	@Input('allowVirtualScrolling') allowVirtualScrolling_input: any;
	@Input('virtualScrollMode') virtualScrollMode_input: any;
	@Input('ajaxSettings.async') ajaxSettings_async_input: any;
	@Input('ajaxSettings.cache') ajaxSettings_cache_input: any;
	@Input('ajaxSettings.contentType') ajaxSettings_contentType_input: any;
	@Input('ajaxSettings.data') ajaxSettings_data_input: any;
	@Input('ajaxSettings.dataType') ajaxSettings_dataType_input: any;
	@Input('ajaxSettings.type') ajaxSettings_type_input: any;
	@Input('fieldSettings.checked') fieldSettings_checked_input: any;
	@Input('fieldSettings.navigateUrl') fieldSettings_navigateUrl_input: any;
	@Input('fieldSettings.attributes') fieldSettings_attributes_input: any;
	@Input('fieldSettings.id') fieldSettings_id_input: any;
	@Input('fieldSettings.imageUrl') fieldSettings_imageUrl_input: any;
	@Input('fieldSettings.imageClass') fieldSettings_imageClass_input: any;
	@Input('fieldSettings.preventSelection') fieldSettings_preventSelection_input: any;
	@Input('fieldSettings.persistSelection') fieldSettings_persistSelection_input: any;
	@Input('fieldSettings.primaryKey') fieldSettings_primaryKey_input: any;
	@Input('fieldSettings.parentPrimaryKey') fieldSettings_parentPrimaryKey_input: any;
	@Input('fieldSettings.text') fieldSettings_text_input: any;
	@Input('fieldSettings.mouseUP') fieldSettings_mouseUP_input: any;
	@Input('fieldSettings.mouseDown') fieldSettings_mouseDown_input: any;
    @Input('options') options: any;

	@Input('dataSource') dataSource_two: any;
	@Output('dataSourceChange') dataSource_twoChange = new EventEmitter<any>();

	@Output('ajaxBeforeLoad') ajaxBeforeLoad_output = new EventEmitter();
	@Output('ajaxComplete') ajaxComplete_output = new EventEmitter();
	@Output('ajaxError') ajaxError_output = new EventEmitter();
	@Output('ajaxSuccess') ajaxSuccess_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('loadComplete') loadComplete_output = new EventEmitter();
	@Output('mouseDown') mouseDown_output = new EventEmitter();
	@Output('mouseUp') mouseUp_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('ListView', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_LISTVIEW_COMPONENTS: Type<any>[] = [ListViewComponent
];


