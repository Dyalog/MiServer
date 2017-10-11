import 'syncfusion-javascript/Scripts/ej/web/ej.tagcloud.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-tagcloud',
    template: ''})
export class TagCloudComponent extends EJComponents<any, any> {
	@Input('cssClass') cssClass_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('fields') fields_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('format') format_input: any;
	@Input('maxFontSize') maxFontSize_input: any;
	@Input('minFontSize') minFontSize_input: any;
	@Input('query') query_input: any;
	@Input('showTitle') showTitle_input: any;
	@Input('titleImage') titleImage_input: any;
	@Input('titleText') titleText_input: any;
	@Input('fields.frequency') fields_frequency_input: any;
	@Input('fields.htmlAttributes') fields_htmlAttributes_input: any;
	@Input('fields.text') fields_text_input: any;
	@Input('fields.url') fields_url_input: any;


	@Output('click') click_output = new EventEmitter();
	@Output('ejclick') ejclick_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('mouseout') mouseout_output = new EventEmitter();
	@Output('mouseover') mouseover_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('TagCloud', el, cdRef, []);
    }



}

export var EJ_TAGCLOUD_COMPONENTS: Type<any>[] = [TagCloudComponent
];


