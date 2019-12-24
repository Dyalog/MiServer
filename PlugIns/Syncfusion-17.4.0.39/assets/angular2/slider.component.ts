import 'syncfusion-javascript/Scripts/ej/web/ej.slider.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-slider',
    template: ''})
export class SliderComponent extends EJComponents<any, any> {
	@Input('allowMouseWheel') allowMouseWheel_input: any;
	@Input('animationSpeed') animationSpeed_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('incrementStep') incrementStep_input: any;
	@Input('largeStep') largeStep_input: any;
	@Input('maxValue') maxValue_input: any;
	@Input('minValue') minValue_input: any;
	@Input('orientation') orientation_input: any;
	@Input('readOnly') readOnly_input: any;
	@Input('showButtons') showButtons_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('showScale') showScale_input: any;
	@Input('showSmallTicks') showSmallTicks_input: any;
	@Input('showTooltip') showTooltip_input: any;
	@Input('sliderType') sliderType_input: any;
	@Input('smallStep') smallStep_input: any;
	@Input('values') values_input: any;
	@Input('width') width_input: any;
    @Input('options') options: any;

	@Input('value') value_two: any;
	@Output('valueChange') value_twoChange = new EventEmitter<any>();

	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('renderingTicks') renderingTicks_output = new EventEmitter();
	@Output('slide') slide_output = new EventEmitter();
	@Output('start') start_output = new EventEmitter();
	@Output('stop') stop_output = new EventEmitter();
	@Output('tooltipChange') tooltipChange_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('Slider', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_SLIDER_COMPONENTS: Type<any>[] = [SliderComponent
];


