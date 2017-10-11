import 'syncfusion-javascript/Scripts/ej/web/ej.listbox.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-listbox',
    template: '<ng-content></ng-content>'})
export class ListBoxComponent extends EJComponents<any, any> {
	@Input('allowDrag') allowDrag_input: any;
	@Input('allowDrop') allowDrop_input: any;
	@Input('allowMultiSelection') allowMultiSelection_input: any;
	@Input('allowVirtualScrolling') allowVirtualScrolling_input: any;
	@Input('caseSensitiveSearch') caseSensitiveSearch_input: any;
	@Input('cascadeTo') cascadeTo_input: any;
	@Input('checkedIndices') checkedIndices_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enableIncrementalSearch') enableIncrementalSearch_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableWordWrap') enableWordWrap_input: any;
	@Input('fields') fields_input: any;
	@Input('height') height_input: any;
	@Input('itemHeight') itemHeight_input: any;
	@Input('itemsCount') itemsCount_input: any;
	@Input('totalItemsCount') totalItemsCount_input: any;
	@Input('itemRequestCount') itemRequestCount_input: any;
	@Input('loadDataOnInit') loadDataOnInit_input: any;
	@Input('query') query_input: any;
	@Input('selectedIndex') selectedIndex_input: any;
	@Input('selectedIndices') selectedIndices_input: any;
	@Input('showCheckbox') showCheckbox_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('sortOrder') sortOrder_input: any;
	@Input('template') template_input: any;
	@Input('virtualScrollMode') virtualScrollMode_input: any;
	@Input('width') width_input: any;
	@Input('targetID') targetID_input: any;
	@Input('fields.checkBy') fields_checkBy_input: any;
	@Input('fields.groupBy') fields_groupBy_input: any;
	@Input('fields.htmlAttributes') fields_htmlAttributes_input: any;
	@Input('fields.id') fields_id_input: any;
	@Input('fields.imageUrl') fields_imageUrl_input: any;
	@Input('fields.imageAttributes') fields_imageAttributes_input: any;
	@Input('fields.selectBy') fields_selectBy_input: any;
	@Input('fields.spriteCssClass') fields_spriteCssClass_input: any;
	@Input('fields.tableName') fields_tableName_input: any;
	@Input('fields.text') fields_text_input: any;
	@Input('fields.value') fields_value_input: any;

	@Input('value') value_two: any;
	@Output('valueChange') value_twoChange = new EventEmitter<any>();

	@Output('actionBegin') actionBegin_output = new EventEmitter();
	@Output('actionSuccess') actionSuccess_output = new EventEmitter();
	@Output('actionComplete') actionComplete_output = new EventEmitter();
	@Output('actionFailure') actionFailure_output = new EventEmitter();
	@Output('actionBeforeSuccess') actionBeforeSuccess_output = new EventEmitter();
	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('checkChange') checkChange_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('focusIn') focusIn_output = new EventEmitter();
	@Output('focusOut') focusOut_output = new EventEmitter();
	@Output('itemDrag') itemDrag_output = new EventEmitter();
	@Output('itemDragStart') itemDragStart_output = new EventEmitter();
	@Output('itemDragStop') itemDragStop_output = new EventEmitter();
	@Output('itemDrop') itemDrop_output = new EventEmitter();
	@Output('select') select_output = new EventEmitter();
	@Output('unselect') unselect_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('ListBox', el, cdRef, []);
    }



}

export var EJ_LISTBOX_COMPONENTS: Type<any>[] = [ListBoxComponent
];


