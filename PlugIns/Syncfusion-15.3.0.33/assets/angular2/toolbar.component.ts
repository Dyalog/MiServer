import 'syncfusion-javascript/Scripts/ej/web/ej.toolbar.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-toolbar',
    template: '<ng-content></ng-content>'})
export class ToolbarComponent extends EJComponents<any, any> {
	@Input('cssClass') cssClass_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('disabledItemIndices') disabledItemIndices_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enabledItemIndices') enabledItemIndices_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableSeparator') enableSeparator_input: any;
	@Input('fields') fields_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('hide') hide_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('Items') Items_input: any;
	@Input('orientation') orientation_input: any;
	@Input('query') query_input: any;
	@Input('responsiveType') responsiveType_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('width') width_input: any;
	@Input('fields.group') fields_group_input: any;
	@Input('fields.htmlAttributes') fields_htmlAttributes_input: any;
	@Input('fields.id') fields_id_input: any;
	@Input('fields.imageAttributes') fields_imageAttributes_input: any;
	@Input('fields.imageUrl') fields_imageUrl_input: any;
	@Input('fields.spriteCssClass') fields_spriteCssClass_input: any;
	@Input('fields.text') fields_text_input: any;
	@Input('fields.tooltipText') fields_tooltipText_input: any;
	@Input('fields.template') fields_template_input: any;
	@Input('Items.group') Items_group_input: any;
	@Input('Items.htmlAttributes') Items_htmlAttributes_input: any;
	@Input('Items.id') Items_id_input: any;
	@Input('Items.imageAttributes') Items_imageAttributes_input: any;
	@Input('Items.imageUrl') Items_imageUrl_input: any;
	@Input('Items.spriteCssClass') Items_spriteCssClass_input: any;
	@Input('Items.text') Items_text_input: any;
	@Input('Items.tooltipText') Items_tooltipText_input: any;
	@Input('Items.template') Items_template_input: any;


	@Output('click') click_output = new EventEmitter();
	@Output('ejclick') ejclick_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('focusOut') focusOut_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('itemHover') itemHover_output = new EventEmitter();
	@Output('itemLeave') itemLeave_output = new EventEmitter();
	@Output('overflowOpen') overflowOpen_output = new EventEmitter();
	@Output('overflowClose') overflowClose_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('Toolbar', el, cdRef, []);
    }



}

export var EJ_TOOLBAR_COMPONENTS: Type<any>[] = [ToolbarComponent
];


