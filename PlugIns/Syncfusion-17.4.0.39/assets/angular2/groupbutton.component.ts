import 'syncfusion-javascript/Scripts/ej/web/ej.groupbutton.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-groupbutton',
    template: '<ng-content></ng-content>'})
export class GroupButtonComponent extends EJComponents<any, any> {
	@Input('cssClass') cssClass_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enabled') enabled_input: any;
	@Input('fields') fields_input: any;
	@Input('groupButtonMode') groupButtonMode_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('orientation') orientation_input: any;
	@Input('query') query_input: any;
	@Input('selectedItemIndex') selectedItemIndex_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('size') size_input: any;
	@Input('width') width_input: any;
    @Input('options') options: any;


	@Output('beforeSelect') beforeSelect_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('keyPress') keyPress_output = new EventEmitter();
	@Output('select') select_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('GroupButton', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_GROUPBUTTON_COMPONENTS: Type<any>[] = [GroupButtonComponent
];


