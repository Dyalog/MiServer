import 'syncfusion-javascript/Scripts/ej/web/ej.datetimepicker.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const DateTimePickerValueAccessor: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DateTimePickerComponent),
	multi: true
};

@Component({
    selector: '[ej-datetimepicker]',
    template: '',
    host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
	providers: [DateTimePickerValueAccessor]
})
export class DateTimePickerComponent extends EJComponents<any, any> implements ControlValueAccessor
{
	@Input('allowEdit') allowEdit_input: any;
	@Input('buttonText') buttonText_input: any;
	@Input('blackoutDates') blackoutDates_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('dateTimeFormat') dateTimeFormat_input: any;
	@Input('dayHeaderFormat') dayHeaderFormat_input: any;
	@Input('depthLevel') depthLevel_input: any;
	@Input('disableTimeRanges') disableTimeRanges_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableStrictMode') enableStrictMode_input: any;
	@Input('headerFormat') headerFormat_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('interval') interval_input: any;
	@Input('locale') locale_input: any;
	@Input('maxDateTime') maxDateTime_input: any;
	@Input('minDateTime') minDateTime_input: any;
	@Input('popupPosition') popupPosition_input: any;
	@Input('readOnly') readOnly_input: any;
	@Input('showOtherMonths') showOtherMonths_input: any;
	@Input('showPopupButton') showPopupButton_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('specialDates') specialDates_input: any;
	@Input('startDay') startDay_input: any;
	@Input('startLevel') startLevel_input: any;
	@Input('stepMonths') stepMonths_input: any;
	@Input('timeDisplayFormat') timeDisplayFormat_input: any;
	@Input('timeDrillDown') timeDrillDown_input: any;
	@Input('timePopupWidth') timePopupWidth_input: any;
	@Input('validationMessage') validationMessage_input: any;
	@Input('validationRules') validationRules_input: any;
	@Input('value') value_input: any;
	@Input('watermarkText') watermarkText_input: any;
	@Input('width') width_input: any;
	@Input('buttonText.done') buttonText_done_input: any;
	@Input('buttonText.timeNow') buttonText_timeNow_input: any;
	@Input('buttonText.timeTitle') buttonText_timeTitle_input: any;
	@Input('buttonText.today') buttonText_today_input: any;
	@Input('timeDrillDown.enabled') timeDrillDown_enabled_input: any;
	@Input('timeDrillDown.interval') timeDrillDown_interval_input: any;
	@Input('timeDrillDown.showMeridian') timeDrillDown_showMeridian_input: any;
	@Input('timeDrillDown.autoClose') timeDrillDown_autoClose_input: any;
    @Input('options') options: any;


	@Output('beforeClose') beforeClose_output = new EventEmitter();
	@Output('beforeOpen') beforeOpen_output = new EventEmitter();
	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('close') close_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('focusIn') focusIn_output = new EventEmitter();
	@Output('focusOut') focusOut_output = new EventEmitter();
	@Output('open') open_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('DateTimePicker', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
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

export var EJ_DATETIMEPICKER_COMPONENTS: Type<any>[] = [DateTimePickerComponent
];


