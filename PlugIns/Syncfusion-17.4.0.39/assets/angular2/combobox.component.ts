import 'syncfusion-javascript/Scripts/ej/web/ej.combobox.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const ComboBoxValueAccessor: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => ComboBoxComponent),
	multi: true
};

@Component({
    selector: '[ej-combobox]',
    template: '',
    host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
	providers: [ComboBoxValueAccessor]
})
export class ComboBoxComponent extends EJComponents<any, any> implements ControlValueAccessor
{
	@Input('actionFailureTemplate') actionFailureTemplate_input: any;
	@Input('allowCustom') allowCustom_input: any;
	@Input('allowFiltering') allowFiltering_input: any;
	@Input('autofill') autofill_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('enableRtl') enableRtl_input: any;
	@Input('enabled') enabled_input: any;
	@Input('fields') fields_input: any;
	@Input('footerTemplate') footerTemplate_input: any;
	@Input('groupTemplate') groupTemplate_input: any;
	@Input('headerTemplate') headerTemplate_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('index') index_input: any;
	@Input('itemTemplate') itemTemplate_input: any;
	@Input('locale') locale_input: any;
	@Input('noRecordsTemplate') noRecordsTemplate_input: any;
	@Input('placeholder') placeholder_input: any;
	@Input('popupHeight') popupHeight_input: any;
	@Input('popupWidth') popupWidth_input: any;
	@Input('query') query_input: any;
	@Input('readonly') readonly_input: any;
	@Input('showClearButton') showClearButton_input: any;
	@Input('sortOrder') sortOrder_input: any;
	@Input('text') text_input: any;
	@Input('width') width_input: any;
	@Input('fields.groupBy') fields_groupBy_input: any;
	@Input('fields.iconCss') fields_iconCss_input: any;
	@Input('fields.value') fields_value_input: any;
	@Input('fields.text') fields_text_input: any;
    @Input('options') options: any;

	@Input('value') value_two: any;
	@Output('valueChange') value_twoChange = new EventEmitter<any>();

	@Output('actionBegin') actionBegin_output = new EventEmitter();
	@Output('actionComplete') actionComplete_output = new EventEmitter();
	@Output('actionFailure') actionFailure_output = new EventEmitter();
	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('close') close_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('customValueSpecifier') customValueSpecifier_output = new EventEmitter();
	@Output('filtering') filtering_output = new EventEmitter();
	@Output('focus') focus_output = new EventEmitter();
	@Output('open') open_output = new EventEmitter();
	@Output('select') select_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('ComboBox', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
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

export var EJ_COMBOBOX_COMPONENTS: Type<any>[] = [ComboBoxComponent
];


