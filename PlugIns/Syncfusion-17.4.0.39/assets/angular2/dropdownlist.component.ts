import 'syncfusion-javascript/Scripts/ej/web/ej.dropdownlist.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const DropDownListValueAccessor: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DropDownListComponent),
	multi: true
};

@Component({
    selector: '[ej-dropdownlist]',
    template: '',
    host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
	providers: [DropDownListValueAccessor]
})
export class DropDownListComponent extends EJComponents<any, any> implements ControlValueAccessor
{
	@Input('allowVirtualScrolling') allowVirtualScrolling_input: any;
	@Input('cascadeTo') cascadeTo_input: any;
	@Input('caseSensitiveSearch') caseSensitiveSearch_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('delimiterChar') delimiterChar_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enableIncrementalSearch') enableIncrementalSearch_input: any;
	@Input('enableFilterSearch') enableFilterSearch_input: any;
	@Input('enableServerFiltering') enableServerFiltering_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enablePopupResize') enablePopupResize_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableSorting') enableSorting_input: any;
	@Input('loadOnDemand') loadOnDemand_input: any;
	@Input('fields') fields_input: any;
	@Input('filterType') filterType_input: any;
	@Input('headerTemplate') headerTemplate_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('itemsCount') itemsCount_input: any;
	@Input('locale') locale_input: any;
	@Input('maxPopupHeight') maxPopupHeight_input: any;
	@Input('minPopupHeight') minPopupHeight_input: any;
	@Input('maxPopupWidth') maxPopupWidth_input: any;
	@Input('minPopupWidth') minPopupWidth_input: any;
	@Input('multiSelectMode') multiSelectMode_input: any;
	@Input('popupHeight') popupHeight_input: any;
	@Input('popupWidth') popupWidth_input: any;
	@Input('query') query_input: any;
	@Input('readOnly') readOnly_input: any;
	@Input('selectedIndex') selectedIndex_input: any;
	@Input('selectedIndices') selectedIndices_input: any;
	@Input('showCheckbox') showCheckbox_input: any;
	@Input('showPopupOnLoad') showPopupOnLoad_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('sortOrder') sortOrder_input: any;
	@Input('targetID') targetID_input: any;
	@Input('template') template_input: any;
	@Input('text') text_input: any;
	@Input('validationMessage') validationMessage_input: any;
	@Input('validationRules') validationRules_input: any;
	@Input('watermarkText') watermarkText_input: any;
	@Input('width') width_input: any;
	@Input('virtualScrollMode') virtualScrollMode_input: any;
	@Input('fields.groupBy') fields_groupBy_input: any;
	@Input('fields.htmlAttributes') fields_htmlAttributes_input: any;
	@Input('fields.id') fields_id_input: any;
	@Input('fields.imageAttributes') fields_imageAttributes_input: any;
	@Input('fields.imageUrl') fields_imageUrl_input: any;
	@Input('fields.selected') fields_selected_input: any;
	@Input('fields.spriteCssClass') fields_spriteCssClass_input: any;
	@Input('fields.tableName') fields_tableName_input: any;
	@Input('fields.text') fields_text_input: any;
	@Input('fields.value') fields_value_input: any;
    @Input('options') options: any;

	@Input('value') value_two: any;
	@Output('valueChange') value_twoChange = new EventEmitter<any>();

	@Output('actionBegin') actionBegin_output = new EventEmitter();
	@Output('actionComplete') actionComplete_output = new EventEmitter();
	@Output('actionFailure') actionFailure_output = new EventEmitter();
	@Output('actionSuccess') actionSuccess_output = new EventEmitter();
	@Output('beforePopupHide') beforePopupHide_output = new EventEmitter();
	@Output('beforePopupShown') beforePopupShown_output = new EventEmitter();
	@Output('cascade') cascade_output = new EventEmitter();
	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('checkChange') checkChange_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('dataBound') dataBound_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('focusIn') focusIn_output = new EventEmitter();
	@Output('focusOut') focusOut_output = new EventEmitter();
	@Output('popupHide') popupHide_output = new EventEmitter();
	@Output('popupResize') popupResize_output = new EventEmitter();
	@Output('popupShown') popupShown_output = new EventEmitter();
	@Output('popupResizeStart') popupResizeStart_output = new EventEmitter();
	@Output('popupResizeStop') popupResizeStop_output = new EventEmitter();
	@Output('search') search_output = new EventEmitter();
	@Output('select') select_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('DropDownList', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }


    onChange: (_: any) => void = noop;
	onTouched: () => void = noop;

	writeValue(value: any): void {
		if (this.widget) {
			this.widget.option('model.value', value);
		} else {
			this.model.value = value;
		}
	}

	registerOnChange(fn: (_: any) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

}

export var EJ_DROPDOWNLIST_COMPONENTS: Type<any>[] = [DropDownListComponent
];


