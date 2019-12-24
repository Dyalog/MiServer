import 'syncfusion-javascript/Scripts/ej/web/ej.splitbutton.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-splitbutton',
    template: ''})
export class SplitButtonComponent extends EJComponents<any, any> {
	@Input('arrowPosition') arrowPosition_input: any;
	@Input('buttonMode') buttonMode_input: any;
	@Input('contentType') contentType_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('imagePosition') imagePosition_input: any;
	@Input('prefixIcon') prefixIcon_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('size') size_input: any;
	@Input('suffixIcon') suffixIcon_input: any;
	@Input('targetID') targetID_input: any;
	@Input('target') target_input: any;
	@Input('text') text_input: any;
	@Input('width') width_input: any;
    @Input('options') options: any;


	@Output('beforeOpen') beforeOpen_output = new EventEmitter();
	@Output('click') click_output = new EventEmitter();
	@Output('ejclick') ejclick_output = new EventEmitter();
	@Output('close') close_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('itemMouseOut') itemMouseOut_output = new EventEmitter();
	@Output('itemMouseOver') itemMouseOver_output = new EventEmitter();
	@Output('itemSelected') itemSelected_output = new EventEmitter();
	@Output('open') open_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('SplitButton', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_SPLITBUTTON_COMPONENTS: Type<any>[] = [SplitButtonComponent
];


