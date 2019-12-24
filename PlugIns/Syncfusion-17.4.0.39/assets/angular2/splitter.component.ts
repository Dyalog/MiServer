import 'syncfusion-javascript/Scripts/ej/web/ej.splitter.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-splitter',
    template: '<ng-content></ng-content>'})
export class SplitterComponent extends EJComponents<any, any> {
	@Input('allowKeyboardNavigation') allowKeyboardNavigation_input: any;
	@Input('animationSpeed') animationSpeed_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('expanderTemplate') expanderTemplate_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('orientation') orientation_input: any;
	@Input('properties') properties_input: any;
	@Input('width') width_input: any;
    @Input('options') options: any;


	@Output('beforeExpandCollapse') beforeExpandCollapse_output = new EventEmitter();
	@Output('clickOnExpander') clickOnExpander_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('expandCollapse') expandCollapse_output = new EventEmitter();
	@Output('resize') resize_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('Splitter', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_SPLITTER_COMPONENTS: Type<any>[] = [SplitterComponent
];


