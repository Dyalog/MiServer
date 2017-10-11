import 'syncfusion-javascript/Scripts/ej/web/ej.signature.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-signature',
    template: ''})
export class SignatureComponent extends EJComponents<any, any> {
	@Input('backgroundColor') backgroundColor_input: any;
	@Input('backgroundImage') backgroundImage_input: any;
	@Input('enabled') enabled_input: any;
	@Input('height') height_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('saveImageFormat') saveImageFormat_input: any;
	@Input('saveWithBackground') saveWithBackground_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('strokeColor') strokeColor_input: any;
	@Input('strokeWidth') strokeWidth_input: any;
	@Input('width') width_input: any;


	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('mouseDown') mouseDown_output = new EventEmitter();
	@Output('mouseMove') mouseMove_output = new EventEmitter();
	@Output('mouseUp') mouseUp_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('Signature', el, cdRef, []);
    }



}

export var EJ_SIGNATURE_COMPONENTS: Type<any>[] = [SignatureComponent
];


