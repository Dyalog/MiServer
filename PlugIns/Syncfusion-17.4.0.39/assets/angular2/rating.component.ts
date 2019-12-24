import 'syncfusion-javascript/Scripts/ej/web/ej.rating.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-rating',
    template: ''})
export class RatingComponent extends EJComponents<any, any> {
	@Input('allowReset') allowReset_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('incrementStep') incrementStep_input: any;
	@Input('maxValue') maxValue_input: any;
	@Input('minValue') minValue_input: any;
	@Input('orientation') orientation_input: any;
	@Input('precision') precision_input: any;
	@Input('readOnly') readOnly_input: any;
	@Input('shapeHeight') shapeHeight_input: any;
	@Input('shapeWidth') shapeWidth_input: any;
	@Input('showTooltip') showTooltip_input: any;
	@Input('width') width_input: any;
    @Input('options') options: any;

	@Input('value') value_two: any;
	@Output('valueChange') value_twoChange = new EventEmitter<any>();

	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('click') click_output = new EventEmitter();
	@Output('ejclick') ejclick_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('mouseout') mouseout_output = new EventEmitter();
	@Output('mousemove') mousemove_output = new EventEmitter();
	@Output('mouseover') mouseover_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('Rating', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_RATING_COMPONENTS: Type<any>[] = [RatingComponent
];


