import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.barcode.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-barcode',
    template: ''})
export class BarcodeComponent extends EJComponents<any, any> {
	@Input('barcodeToTextGapHeight') barcodeToTextGapHeight_input: any;
	@Input('barHeight') barHeight_input: any;
	@Input('darkBarColor') darkBarColor_input: any;
	@Input('displayText') displayText_input: any;
	@Input('enabled') enabled_input: any;
	@Input('encodeStartStopSymbol') encodeStartStopSymbol_input: any;
	@Input('lightBarColor') lightBarColor_input: any;
	@Input('narrowBarWidth') narrowBarWidth_input: any;
	@Input('quietZone') quietZone_input: any;
	@Input('symbologyType') symbologyType_input: any;
	@Input('text') text_input: any;
	@Input('textColor') textColor_input: any;
	@Input('wideBarWidth') wideBarWidth_input: any;
	@Input('xDimension') xDimension_input: any;
	@Input('quietZone.all') quietZone_all_input: any;
	@Input('quietZone.bottom') quietZone_bottom_input: any;
	@Input('quietZone.left') quietZone_left_input: any;
	@Input('quietZone.right') quietZone_right_input: any;
	@Input('quietZone.top') quietZone_top_input: any;


	@Output('load') load_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('Barcode', el, cdRef, []);
    }



}

export var EJ_BARCODE_COMPONENTS: Type<any>[] = [BarcodeComponent
];


