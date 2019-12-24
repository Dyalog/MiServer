import 'syncfusion-javascript/Scripts/ej/web/ej.timepicker.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const TimePickerValueAccessor: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => TimePickerComponent),
	multi: true
};

@Component({
    selector: '[ej-timepicker]',
    template: '',
    host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
	providers: [TimePickerValueAccessor]
})
export class TimePickerComponent extends EJComponents<any, any> implements ControlValueAccessor
{
	@Input('cssClass') cssClass_input: any;
	@Input('disableTimeRanges') disableTimeRanges_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableStrictMode') enableStrictMode_input: any;
	@Input('height') height_input: any;
	@Input('hourInterval') hourInterval_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('interval') interval_input: any;
	@Input('locale') locale_input: any;
	@Input('maxTime') maxTime_input: any;
	@Input('minTime') minTime_input: any;
	@Input('minutesInterval') minutesInterval_input: any;
	@Input('popupHeight') popupHeight_input: any;
	@Input('popupWidth') popupWidth_input: any;
	@Input('readOnly') readOnly_input: any;
	@Input('secondsInterval') secondsInterval_input: any;
	@Input('showPopupButton') showPopupButton_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('timeFormat') timeFormat_input: any;
	@Input('validationMessages') validationMessages_input: any;
	@Input('validationRules') validationRules_input: any;
	@Input('value') value_input: any;
	@Input('watermarkText') watermarkText_input: any;
	@Input('width') width_input: any;
    @Input('options') options: any;


	@Output('beforeChange') beforeChange_output = new EventEmitter();
	@Output('beforeOpen') beforeOpen_output = new EventEmitter();
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
        super('TimePicker', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
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

export var EJ_TIMEPICKER_COMPONENTS: Type<any>[] = [TimePickerComponent
];


