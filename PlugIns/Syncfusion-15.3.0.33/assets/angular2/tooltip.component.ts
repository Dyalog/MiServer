import 'syncfusion-javascript/Scripts/ej/web/ej.tooltip.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-tooltip',
    template: '<ng-content></ng-content>'})
export class TooltipComponent extends EJComponents<any, any> {
	@Input('allowKeyboardNavigation') allowKeyboardNavigation_input: any;
	@Input('animation') animation_input: any;
	@Input('associate') associate_input: any;
	@Input('autoCloseTimeout') autoCloseTimeout_input: any;
	@Input('closeMode') closeMode_input: any;
	@Input('collision') collision_input: any;
	@Input('containment') containment_input: any;
	@Input('content') content_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('height') height_input: any;
	@Input('isBalloon') isBalloon_input: any;
	@Input('position') position_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('showShadow') showShadow_input: any;
	@Input('target') target_input: any;
	@Input('tip') tip_input: any;
	@Input('title') title_input: any;
	@Input('trigger') trigger_input: any;
	@Input('width') width_input: any;
	@Input('animation.effect') animation_effect_input: any;
	@Input('animation.speed') animation_speed_input: any;
	@Input('position.target') position_target_input: any;
	@Input('position.target.horizontal') position_target_horizontal_input: any;
	@Input('position.target.vertical') position_target_vertical_input: any;
	@Input('position.stem') position_stem_input: any;
	@Input('position.stem.horizontal') position_stem_horizontal_input: any;
	@Input('position.stem.vertical') position_stem_vertical_input: any;
	@Input('tip.size') tip_size_input: any;
	@Input('tip.size.width') tip_size_width_input: any;
	@Input('tip.size.height') tip_size_height_input: any;
	@Input('tip.adjust') tip_adjust_input: any;
	@Input('tip.adjust.xValue') tip_adjust_xValue_input: any;
	@Input('tip.adjust.yValue') tip_adjust_yValue_input: any;


	@Output('beforeClose') beforeClose_output = new EventEmitter();
	@Output('beforeOpen') beforeOpen_output = new EventEmitter();
	@Output('click') click_output = new EventEmitter();
	@Output('ejclick') ejclick_output = new EventEmitter();
	@Output('close') close_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('hover') hover_output = new EventEmitter();
	@Output('open') open_output = new EventEmitter();
	@Output('tracking') tracking_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('Tooltip', el, cdRef, []);
    }



}

export var EJ_TOOLTIP_COMPONENTS: Type<any>[] = [TooltipComponent
];


