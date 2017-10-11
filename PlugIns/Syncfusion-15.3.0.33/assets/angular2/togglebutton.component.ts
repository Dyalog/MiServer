import 'syncfusion-javascript/Scripts/ej/web/ej.togglebutton.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-togglebutton',
    template: ''})
export class ToggleButtonComponent extends EJComponents<any, any> {
	@Input('activePrefixIcon') activePrefixIcon_input: any;
	@Input('activeSuffixIcon') activeSuffixIcon_input: any;
	@Input('activeText') activeText_input: any;
	@Input('contentType') contentType_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('defaultPrefixIcon') defaultPrefixIcon_input: any;
	@Input('defaultSuffixIcon') defaultSuffixIcon_input: any;
	@Input('defaultText') defaultText_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('imagePosition') imagePosition_input: any;
	@Input('preventToggle') preventToggle_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('size') size_input: any;
	@Input('toggleState') toggleState_input: any;
	@Input('type') type_input: any;
	@Input('width') width_input: any;


	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('click') click_output = new EventEmitter();
	@Output('ejclick') ejclick_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('ToggleButton', el, cdRef, []);
    }



}

export var EJ_TOGGLEBUTTON_COMPONENTS: Type<any>[] = [ToggleButtonComponent
];


