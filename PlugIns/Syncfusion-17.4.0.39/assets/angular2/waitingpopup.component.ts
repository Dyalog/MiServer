import 'syncfusion-javascript/Scripts/ej/web/ej.waitingpopup.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-waitingpopup',
    template: ''})
export class WaitingPopupComponent extends EJComponents<any, any> {
	@Input('cssClass') cssClass_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('showImage') showImage_input: any;
	@Input('showOnInit') showOnInit_input: any;
	@Input('target') target_input: any;
	@Input('appendTo') appendTo_input: any;
	@Input('template') template_input: any;
	@Input('text') text_input: any;
    @Input('options') options: any;


	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('WaitingPopup', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_WAITINGPOPUP_COMPONENTS: Type<any>[] = [WaitingPopupComponent
];


