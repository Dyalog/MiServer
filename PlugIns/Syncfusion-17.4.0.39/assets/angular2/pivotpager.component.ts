import 'syncfusion-javascript/Scripts/ej/web/ej.pivotpager.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-pivotpager',
    template: ''})
export class PivotPagerComponent extends EJComponents<any, any> {
	@Input('categoricalCurrentPage') categoricalCurrentPage_input: any;
	@Input('categoricalPageCount') categoricalPageCount_input: any;
	@Input('locale') locale_input: any;
	@Input('mode') mode_input: any;
	@Input('seriesCurrentPage') seriesCurrentPage_input: any;
	@Input('seriesPageCount') seriesPageCount_input: any;
	@Input('targetControlID') targetControlID_input: any;
    @Input('options') options: any;



    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('PivotPager', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_PIVOTPAGER_COMPONENTS: Type<any>[] = [PivotPagerComponent
];


