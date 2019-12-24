import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.diagram.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-overview',
    template: ''})
export class OverviewComponent extends EJComponents<any, any> {
	@Input('sourceID') sourceID_input: any;
	@Input('height') height_input: any;
	@Input('width') width_input: any;
    @Input('options') options: any;



    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('Overview', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_OVERVIEW_COMPONENTS: Type<any>[] = [OverviewComponent
];


