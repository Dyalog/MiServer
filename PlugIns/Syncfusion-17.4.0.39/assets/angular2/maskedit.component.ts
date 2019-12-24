import 'syncfusion-javascript/Scripts/ej/web/ej.maskedit.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const MaskEditValueAccessor: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => MaskEditComponent),
	multi: true
};

@Component({
    selector: '[ej-maskedit]',
    template: '',
    host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
	providers: [MaskEditValueAccessor]
})
export class MaskEditComponent extends EJComponents<any, any> implements ControlValueAccessor
{
	@Input('cssClass') cssClass_input: any;
	@Input('customCharacter') customCharacter_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('height') height_input: any;
	@Input('hidePromptOnLeave') hidePromptOnLeave_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('inputMode') inputMode_input: any;
	@Input('locale') locale_input: any;
	@Input('maskFormat') maskFormat_input: any;
	@Input('name') name_input: any;
	@Input('readOnly') readOnly_input: any;
	@Input('showError') showError_input: any;
	@Input('showPromptChar') showPromptChar_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('textAlign') textAlign_input: any;
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
	@Output('onKeyDown') onKeyDown_output = new EventEmitter();
	@Output('keyPress') keyPress_output = new EventEmitter();
	@Output('keyUp') keyUp_output = new EventEmitter();
	@Output('mouseOut') mouseOut_output = new EventEmitter();
	@Output('mouseOver') mouseOver_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('MaskEdit', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
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

export var EJ_MASKEDIT_COMPONENTS: Type<any>[] = [MaskEditComponent
];


