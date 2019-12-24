import 'syncfusion-javascript/Scripts/ej/web/ej.checkbox.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-checkbox',
    template: ''})
export class CheckBoxComponent extends EJComponents<any, any> {
	@Input('cssClass') cssClass_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableTriState') enableTriState_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('id') id_input: any;
	@Input('idPrefix') idPrefix_input: any;
	@Input('name') name_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('size') size_input: any;
	@Input('text') text_input: any;
	@Input('validationMessage') validationMessage_input: any;
	@Input('validationRules') validationRules_input: any;
	@Input('value') value_input: any;
    @Input('options') options: any;

	@Input('checked') checked_two: any;
	@Output('checkedChange') checked_twoChange = new EventEmitter<any>();
	@Input('checkState') checkState_two: any;
	@Output('checkStateChange') checkState_twoChange = new EventEmitter<any>();

	@Output('beforeChange') beforeChange_output = new EventEmitter();
	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('CheckBox', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_CHECKBOX_COMPONENTS: Type<any>[] = [CheckBoxComponent
];


