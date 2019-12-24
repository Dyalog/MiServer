import 'syncfusion-javascript/Scripts/ej/web/ej.radialslider.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-radialslider',
    template: ''})
export class RadialSliderComponent extends EJComponents<any, any> {
	@Input('autoOpen') autoOpen_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enableRoundOff') enableRoundOff_input: any;
	@Input('endAngle') endAngle_input: any;
	@Input('inline') inline_input: any;
	@Input('innerCircleImageClass') innerCircleImageClass_input: any;
	@Input('innerCircleImageUrl') innerCircleImageUrl_input: any;
	@Input('labelSpace') labelSpace_input: any;
	@Input('locale') locale_input: any;
	@Input('radius') radius_input: any;
	@Input('showInnerCircle') showInnerCircle_input: any;
	@Input('startAngle') startAngle_input: any;
	@Input('strokeWidth') strokeWidth_input: any;
	@Input('ticks') ticks_input: any;
    @Input('options') options: any;

	@Input('value') value_two: any;
	@Output('valueChange') value_twoChange = new EventEmitter<any>();

	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('mouseover') mouseover_output = new EventEmitter();
	@Output('slide') slide_output = new EventEmitter();
	@Output('start') start_output = new EventEmitter();
	@Output('stop') stop_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('RadialSlider', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_RADIALSLIDER_COMPONENTS: Type<any>[] = [RadialSliderComponent
];


