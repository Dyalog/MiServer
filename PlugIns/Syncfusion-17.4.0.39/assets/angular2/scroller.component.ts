import 'syncfusion-javascript/Scripts/ej/common/ej.scroller.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-scroller',
    template: '<ng-content></ng-content>'})
export class ScrollerComponent extends EJComponents<any, any> {
	@Input('animationSpeed') animationSpeed_input: any;
	@Input('autoHide') autoHide_input: any;
	@Input('buttonSize') buttonSize_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableTouchScroll') enableTouchScroll_input: any;
	@Input('height') height_input: any;
	@Input('scrollerSize') scrollerSize_input: any;
	@Input('scrollLeft') scrollLeft_input: any;
	@Input('scrollOneStepBy') scrollOneStepBy_input: any;
	@Input('scrollTop') scrollTop_input: any;
	@Input('targetPane') targetPane_input: any;
	@Input('width') width_input: any;
    @Input('options') options: any;


	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('thumbMove') thumbMove_output = new EventEmitter();
	@Output('thumbStart') thumbStart_output = new EventEmitter();
	@Output('thumbEnd') thumbEnd_output = new EventEmitter();
	@Output('wheelMove') wheelMove_output = new EventEmitter();
	@Output('wheelStart') wheelStart_output = new EventEmitter();
	@Output('wheelStop') wheelStop_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('Scroller', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_SCROLLER_COMPONENTS: Type<any>[] = [ScrollerComponent
];


