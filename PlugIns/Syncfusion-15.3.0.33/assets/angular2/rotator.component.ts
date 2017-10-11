import 'syncfusion-javascript/Scripts/ej/web/ej.rotator.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: '[ej-rotator]',
    template: '<ng-content></ng-content>'})
export class RotatorComponent extends EJComponents<any, any> {
	@Input('allowKeyboardNavigation') allowKeyboardNavigation_input: any;
	@Input('animationSpeed') animationSpeed_input: any;
	@Input('animationType') animationType_input: any;
	@Input('circularMode') circularMode_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('delay') delay_input: any;
	@Input('displayItemsCount') displayItemsCount_input: any;
	@Input('enableAutoPlay') enableAutoPlay_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('fields') fields_input: any;
	@Input('frameSpace') frameSpace_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('navigateSteps') navigateSteps_input: any;
	@Input('orientation') orientation_input: any;
	@Input('pagerPosition') pagerPosition_input: any;
	@Input('query') query_input: any;
	@Input('showCaption') showCaption_input: any;
	@Input('showNavigateButton') showNavigateButton_input: any;
	@Input('showPager') showPager_input: any;
	@Input('showPlayButton') showPlayButton_input: any;
	@Input('showThumbnail') showThumbnail_input: any;
	@Input('slideHeight') slideHeight_input: any;
	@Input('slideWidth') slideWidth_input: any;
	@Input('startIndex') startIndex_input: any;
	@Input('stopOnHover') stopOnHover_input: any;
	@Input('template') template_input: any;
	@Input('templateId') templateId_input: any;
	@Input('thumbnailSourceID') thumbnailSourceID_input: any;
	@Input('fields.linkAttribute') fields_linkAttribute_input: any;
	@Input('fields.targetAttribute') fields_targetAttribute_input: any;
	@Input('fields.text') fields_text_input: any;
	@Input('fields.thumbnailText') fields_thumbnailText_input: any;
	@Input('fields.thumbnailUrl') fields_thumbnailUrl_input: any;
	@Input('fields.url') fields_url_input: any;


	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('pagerClick') pagerClick_output = new EventEmitter();
	@Output('start') start_output = new EventEmitter();
	@Output('stop') stop_output = new EventEmitter();
	@Output('thumbItemClick') thumbItemClick_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('Rotator', el, cdRef, []);
    }



}

export var EJ_ROTATOR_COMPONENTS: Type<any>[] = [RotatorComponent
];


