import 'syncfusion-javascript/Scripts/ej/web/ej.daterangepicker.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const DateRangePickerValueAccessor: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DateRangePickerComponent),
	multi: true
};

@Component({
    selector: '[ej-daterangepicker]',
    template: '',
    host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
	providers: [DateRangePickerValueAccessor]
})
export class DateRangePickerComponent extends EJComponents<any, any> implements ControlValueAccessor
{
	@Input('allowEdit') allowEdit_input: any;
	@Input('buttonText') buttonText_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('dateFormat') dateFormat_input: any;
	@Input('enableTimePicker') enableTimePicker_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('endDate') endDate_input: any;
	@Input('height') height_input: any;
	@Input('locale') locale_input: any;
	@Input('maxDate') maxDate_input: any;
	@Input('minDate') minDate_input: any;
	@Input('ranges') ranges_input: any;
	@Input('separator') separator_input: any;
	@Input('startDate') startDate_input: any;
	@Input('showPopupButton') showPopupButton_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('timeFormat') timeFormat_input: any;
	@Input('value') value_input: any;
	@Input('watermarkText') watermarkText_input: any;
	@Input('width') width_input: any;
    @Input('options') options: any;


	@Output('beforeClose') beforeClose_output = new EventEmitter();
	@Output('beforeOpen') beforeOpen_output = new EventEmitter();
	@Output('Change') Change_output = new EventEmitter();
	@Output('close') close_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('open') open_output = new EventEmitter();
	@Output('select') select_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('DateRangePicker', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
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

export var EJ_DATERANGEPICKER_COMPONENTS: Type<any>[] = [DateRangePickerComponent
];


