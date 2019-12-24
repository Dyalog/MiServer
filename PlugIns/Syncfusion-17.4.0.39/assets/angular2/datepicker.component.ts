import 'syncfusion-javascript/Scripts/ej/web/ej.datepicker.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const DatePickerValueAccessor: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DatePickerComponent),
	multi: true
};

@Component({
    selector: '[ej-datepicker]',
    template: '',
    host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
	providers: [DatePickerValueAccessor]
})
export class DatePickerComponent extends EJComponents<any, any> implements ControlValueAccessor
{
	@Input('allowEdit') allowEdit_input: any;
	@Input('allowDrillDown') allowDrillDown_input: any;
	@Input('blackoutDates') blackoutDates_input: any;
	@Input('buttonText') buttonText_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('dateFormat') dateFormat_input: any;
	@Input('dayHeaderFormat') dayHeaderFormat_input: any;
	@Input('depthLevel') depthLevel_input: any;
	@Input('displayInline') displayInline_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableStrictMode') enableStrictMode_input: any;
	@Input('fields') fields_input: any;
	@Input('headerFormat') headerFormat_input: any;
	@Input('height') height_input: any;
	@Input('highlightSection') highlightSection_input: any;
	@Input('highlightWeekend') highlightWeekend_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('locale') locale_input: any;
	@Input('maxDate') maxDate_input: any;
	@Input('minDate') minDate_input: any;
	@Input('readOnly') readOnly_input: any;
	@Input('showDisabledRange') showDisabledRange_input: any;
	@Input('showFooter') showFooter_input: any;
	@Input('showOtherMonths') showOtherMonths_input: any;
	@Input('showPopupButton') showPopupButton_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('showTooltip') showTooltip_input: any;
	@Input('specialDates') specialDates_input: any;
	@Input('startDay') startDay_input: any;
	@Input('startLevel') startLevel_input: any;
	@Input('stepMonths') stepMonths_input: any;
	@Input('tooltipFormat') tooltipFormat_input: any;
	@Input('validationMessage') validationMessage_input: any;
	@Input('validationRules') validationRules_input: any;
	@Input('value') value_input: any;
	@Input('watermarkText') watermarkText_input: any;
	@Input('weekNumber') weekNumber_input: any;
	@Input('width') width_input: any;
	@Input('fields.date') fields_date_input: any;
	@Input('fields.iconClass') fields_iconClass_input: any;
	@Input('fields.tooltip') fields_tooltip_input: any;
	@Input('fields.cssClass') fields_cssClass_input: any;
    @Input('options') options: any;


	@Output('beforeClose') beforeClose_output = new EventEmitter();
	@Output('beforeDateCreate') beforeDateCreate_output = new EventEmitter();
	@Output('beforeOpen') beforeOpen_output = new EventEmitter();
	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('close') close_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('focusIn') focusIn_output = new EventEmitter();
	@Output('focusOut') focusOut_output = new EventEmitter();
	@Output('navigate') navigate_output = new EventEmitter();
	@Output('open') open_output = new EventEmitter();
	@Output('select') select_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('DatePicker', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
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

export var EJ_DATEPICKER_COMPONENTS: Type<any>[] = [DatePickerComponent
];


