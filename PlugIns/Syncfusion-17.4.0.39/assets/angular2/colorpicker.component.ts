import 'syncfusion-javascript/Scripts/ej/web/ej.colorpicker.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const ColorPickerValueAccessor: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => ColorPickerComponent),
	multi: true
};

@Component({
    selector: '[ej-colorpicker]',
    template: '',
    host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
	providers: [ColorPickerValueAccessor]
})
export class ColorPickerComponent extends EJComponents<any, any> implements ControlValueAccessor
{
	@Input('buttonText') buttonText_input: any;
	@Input('buttonMode') buttonMode_input: any;
	@Input('columns') columns_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('custom') custom_input: any;
	@Input('displayInline') displayInline_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enableOpacity') enableOpacity_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('locale') locale_input: any;
	@Input('modelType') modelType_input: any;
	@Input('palette') palette_input: any;
	@Input('presetType') presetType_input: any;
	@Input('showApplyCancel') showApplyCancel_input: any;
	@Input('showClearButton') showClearButton_input: any;
	@Input('showPreview') showPreview_input: any;
	@Input('showRecentColors') showRecentColors_input: any;
	@Input('showSwitcher') showSwitcher_input: any;
	@Input('showTooltip') showTooltip_input: any;
	@Input('toolIcon') toolIcon_input: any;
	@Input('tooltipText') tooltipText_input: any;
	@Input('buttonText.apply') buttonText_apply_input: any;
	@Input('buttonText.cancel') buttonText_cancel_input: any;
	@Input('buttonText.swatches') buttonText_swatches_input: any;
	@Input('tooltipText.switcher') tooltipText_switcher_input: any;
	@Input('tooltipText.addButton') tooltipText_addButton_input: any;
	@Input('tooltipText.basic') tooltipText_basic_input: any;
	@Input('tooltipText.monoChrome') tooltipText_monoChrome_input: any;
	@Input('tooltipText.flatColors') tooltipText_flatColors_input: any;
	@Input('tooltipText.seaWolf') tooltipText_seaWolf_input: any;
	@Input('tooltipText.webColors') tooltipText_webColors_input: any;
	@Input('tooltipText.sandy') tooltipText_sandy_input: any;
	@Input('tooltipText.pinkShades') tooltipText_pinkShades_input: any;
	@Input('tooltipText.misty') tooltipText_misty_input: any;
	@Input('tooltipText.citrus') tooltipText_citrus_input: any;
	@Input('tooltipText.vintage') tooltipText_vintage_input: any;
	@Input('tooltipText.moonLight') tooltipText_moonLight_input: any;
	@Input('tooltipText.candyCrush') tooltipText_candyCrush_input: any;
	@Input('tooltipText.currentColor') tooltipText_currentColor_input: any;
	@Input('tooltipText.selectedColor') tooltipText_selectedColor_input: any;
    @Input('options') options: any;

	@Input('value') value_two: any;
	@Output('valueChange') value_twoChange = new EventEmitter<any>();
	@Input('opacityValue') opacityValue_two: any;
	@Output('opacityValueChange') opacityValue_twoChange = new EventEmitter<any>();

	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('close') close_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('open') open_output = new EventEmitter();
	@Output('select') select_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('ColorPicker', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
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

export var EJ_COLORPICKER_COMPONENTS: Type<any>[] = [ColorPickerComponent
];


