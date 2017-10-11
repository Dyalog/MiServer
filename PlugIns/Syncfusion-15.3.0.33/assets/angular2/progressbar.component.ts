import 'syncfusion-javascript/Scripts/ej/web/ej.progressbar.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-progressbar',
    template: ''})
export class ProgressBarComponent extends EJComponents<any, any> {
	@Input('cssClass') cssClass_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('maxValue') maxValue_input: any;
	@Input('minValue') minValue_input: any;
	@Input('percentage') percentage_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('text') text_input: any;
	@Input('value') value_input: any;
	@Input('width') width_input: any;


	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('complete') complete_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('start') start_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('ProgressBar', el, cdRef, []);
    }



}

export var EJ_PROGRESSBAR_COMPONENTS: Type<any>[] = [ProgressBarComponent
];


