import 'syncfusion-javascript/Scripts/ej/web/ej.autocomplete.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const AutocompleteValueAccessor: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => AutocompleteComponent),
	multi: true
};

@Component({
    selector: '[ej-autocomplete]',
    template: '',
    host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
	providers: [AutocompleteValueAccessor]
})
export class AutocompleteComponent extends EJComponents<any, any> implements ControlValueAccessor
{
	@Input('addNewText') addNewText_input: any;
	@Input('allowAddNew') allowAddNew_input: any;
	@Input('allowSorting') allowSorting_input: any;
	@Input('animateType') animateType_input: any;
	@Input('autoFocus') autoFocus_input: any;
	@Input('caseSensitiveSearch') caseSensitiveSearch_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('delaySuggestionTimeout') delaySuggestionTimeout_input: any;
	@Input('delimiterChar') delimiterChar_input: any;
	@Input('emptyResultText') emptyResultText_input: any;
	@Input('enableAutoFill') enableAutoFill_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enableDistinct') enableDistinct_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('fields') fields_input: any;
	@Input('filterType') filterType_input: any;
	@Input('height') height_input: any;
	@Input('highlightSearch') highlightSearch_input: any;
	@Input('itemsCount') itemsCount_input: any;
	@Input('ignoreAccent') ignoreAccent_input: any;
	@Input('locale') locale_input: any;
	@Input('minCharacter') minCharacter_input: any;
	@Input('multiColumnSettings') multiColumnSettings_input: any;
	@Input('multiSelectMode') multiSelectMode_input: any;
	@Input('popupHeight') popupHeight_input: any;
	@Input('popupWidth') popupWidth_input: any;
	@Input('query') query_input: any;
	@Input('readOnly') readOnly_input: any;
	@Input('selectValueByKey') selectValueByKey_input: any;
	@Input('showEmptyResultText') showEmptyResultText_input: any;
	@Input('showLoadingIcon') showLoadingIcon_input: any;
	@Input('showPopupButton') showPopupButton_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('showResetIcon') showResetIcon_input: any;
	@Input('sortOrder') sortOrder_input: any;
	@Input('template') template_input: any;
	@Input('validationMessage') validationMessage_input: any;
	@Input('validationRules') validationRules_input: any;
	@Input('value') value_input: any;
	@Input('visible') visible_input: any;
	@Input('watermarkText') watermarkText_input: any;
	@Input('width') width_input: any;
	@Input('fields.groupBy') fields_groupBy_input: any;
	@Input('fields.htmlAttributes') fields_htmlAttributes_input: any;
	@Input('fields.key') fields_key_input: any;
	@Input('fields.text') fields_text_input: any;
	@Input('multiColumnSettings.enable') multiColumnSettings_enable_input: any;
	@Input('multiColumnSettings.showHeader') multiColumnSettings_showHeader_input: any;
	@Input('multiColumnSettings.stringFormat') multiColumnSettings_stringFormat_input: any;
	@Input('multiColumnSettings.searchColumnIndices') multiColumnSettings_searchColumnIndices_input: any;
	@Input('multiColumnSettings.columns') multiColumnSettings_columns_input: any;
    @Input('options') options: any;


	@Output('actionBegin') actionBegin_output = new EventEmitter();
	@Output('actionSuccess') actionSuccess_output = new EventEmitter();
	@Output('actionComplete') actionComplete_output = new EventEmitter();
	@Output('actionFailure') actionFailure_output = new EventEmitter();
	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('close') close_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('focusIn') focusIn_output = new EventEmitter();
	@Output('focusOut') focusOut_output = new EventEmitter();
	@Output('open') open_output = new EventEmitter();
	@Output('select') select_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('Autocomplete', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
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

export var EJ_AUTOCOMPLETE_COMPONENTS: Type<any>[] = [AutocompleteComponent
];


