import 'syncfusion-javascript/Scripts/ej/web/ej.editor.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const NumericTextboxValueAccessor: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => NumericTextboxComponent),
	multi: true
};

@Component({
    selector: '[ej-numerictextbox]',
    template: '',
    host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
	providers: [NumericTextboxValueAccessor]
})
export class NumericTextboxComponent extends EJComponents<any, any> implements ControlValueAccessor
{
	@Input('currencySymbol') currencySymbol_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('decimalPlaces') decimalPlaces_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableStrictMode') enableStrictMode_input: any;
	@Input('groupSize') groupSize_input: any;
	@Input('groupSeparator') groupSeparator_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('incrementStep') incrementStep_input: any;
	@Input('locale') locale_input: any;
	@Input('maxValue') maxValue_input: any;
	@Input('minValue') minValue_input: any;
	@Input('name') name_input: any;
	@Input('negativePattern') negativePattern_input: any;
	@Input('positivePattern') positivePattern_input: any;
	@Input('readOnly') readOnly_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('showSpinButton') showSpinButton_input: any;
	@Input('validateOnType') validateOnType_input: any;
	@Input('validationMessage') validationMessage_input: any;
	@Input('validationRules') validationRules_input: any;
	@Input('value') value_input: any;
	@Input('watermarkText') watermarkText_input: any;
	@Input('width') width_input: any;
    @Input('options') options: any;


	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('focusIn') focusIn_output = new EventEmitter();
	@Output('focusOut') focusOut_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('NumericTextbox', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
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

export var EJ_NUMERICTEXTBOX_COMPONENTS: Type<any>[] = [NumericTextboxComponent
];


