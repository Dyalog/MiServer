import 'syncfusion-javascript/Scripts/ej/web/ej.menu.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-menu',
    template: '<ng-content></ng-content>'})
export class MenuComponent extends EJComponents<any, any> {
	@Input('animationType') animationType_input: any;
	@Input('contextMenuTarget') contextMenuTarget_input: any;
	@Input('container') container_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enableCenterAlign') enableCenterAlign_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableSeparator') enableSeparator_input: any;
	@Input('excludeTarget') excludeTarget_input: any;
	@Input('fields') fields_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('menuType') menuType_input: any;
	@Input('openOnClick') openOnClick_input: any;
	@Input('orientation') orientation_input: any;
	@Input('showRootLevelArrows') showRootLevelArrows_input: any;
	@Input('showSubLevelArrows') showSubLevelArrows_input: any;
	@Input('subMenuDirection') subMenuDirection_input: any;
	@Input('titleText') titleText_input: any;
	@Input('width') width_input: any;
	@Input('overflowHeight') overflowHeight_input: any;
	@Input('overflowWidth') overflowWidth_input: any;
	@Input('fields.child') fields_child_input: any;
	@Input('fields.dataSource') fields_dataSource_input: any;
	@Input('fields.htmlAttribute') fields_htmlAttribute_input: any;
	@Input('fields.id') fields_id_input: any;
	@Input('fields.imageAttribute') fields_imageAttribute_input: any;
	@Input('fields.imageUrl') fields_imageUrl_input: any;
	@Input('fields.linkAttribute') fields_linkAttribute_input: any;
	@Input('fields.parentId') fields_parentId_input: any;
	@Input('fields.query') fields_query_input: any;
	@Input('fields.spriteCssClass') fields_spriteCssClass_input: any;
	@Input('fields.tableName') fields_tableName_input: any;
	@Input('fields.text') fields_text_input: any;
	@Input('fields.url') fields_url_input: any;
    @Input('options') options: any;


	@Output('beforeOpen') beforeOpen_output = new EventEmitter();
	@Output('click') click_output = new EventEmitter();
	@Output('ejclick') ejclick_output = new EventEmitter();
	@Output('close') close_output = new EventEmitter();
	@Output('open') open_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('keydown') keydown_output = new EventEmitter();
	@Output('mouseout') mouseout_output = new EventEmitter();
	@Output('mouseover') mouseover_output = new EventEmitter();
	@Output('overflowOpen') overflowOpen_output = new EventEmitter();
	@Output('overflowClose') overflowClose_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('Menu', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_MENU_COMPONENTS: Type<any>[] = [MenuComponent
];


