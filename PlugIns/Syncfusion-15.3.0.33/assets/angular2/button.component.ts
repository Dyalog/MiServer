import 'syncfusion-javascript/Scripts/ej/web/ej.button.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const ButtonValueAccessor: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => ButtonComponent),
	multi: true
};

@Component({
    selector: '[ej-button]',
    template: '',
    host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
	providers: [ButtonValueAccessor]
})
export class ButtonComponent extends EJComponents<any, any> implements ControlValueAccessor
{
	@Input('contentType') contentType_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('imagePosition') imagePosition_input: any;
	@Input('prefixIcon') prefixIcon_input: any;
	@Input('repeatButton') repeatButton_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('size') size_input: any;
	@Input('suffixIcon') suffixIcon_input: any;
	@Input('text') text_input: any;
	@Input('timeInterval') timeInterval_input: any;
	@Input('type') type_input: any;
	@Input('width') width_input: any;


	@Output('click') click_output = new EventEmitter();
	@Output('ejclick') ejclick_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('Button', el, cdRef, []);
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

export var EJ_BUTTON_COMPONENTS: Type<any>[] = [ButtonComponent
];


