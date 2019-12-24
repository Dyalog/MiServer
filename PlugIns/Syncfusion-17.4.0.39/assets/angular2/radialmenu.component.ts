import 'syncfusion-javascript/Scripts/ej/web/ej.radialmenu.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-items>e-item',
})
export class RadialMenuItemDirective extends ComplexTagElement {

	@Input('imageUrl') imageUrl: any;
	@Input('prependTo') prependTo: any;
	@Input('text') text: any;
	@Input('enabled') enabled: any;
	@Input('click') click: any;
	@Input('badge') badge: any;
	@Input('badge.enabled') badge_enabled: any;
	@Input('badge.value') badge_value: any;
	@Input('type') type: any;
	@Input('sliderSettings') sliderSettings: any;
	@Input('sliderSettings.ticks') sliderSettings_ticks: any;
	@Input('sliderSettings.strokeWidth') sliderSettings_strokeWidth: any;
	@Input('sliderSettings.labelSpace') sliderSettings_labelSpace: any;
	@Input('items') items: any;

    
    constructor( @Inject(forwardRef(() => RadialMenuComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-radialmenu>e-items',
    queries: {
        children: new ContentChildren(RadialMenuItemDirective)
    }
})
export class RadialMenuItemsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => RadialMenuComponent)) widget: EJComponents<any, any>) {
        super('items')
        }
}




@Component({
    selector: 'ej-radialmenu',
    template: ''})
export class RadialMenuComponent extends EJComponents<any, any> {
	@Input('autoOpen') autoOpen_input: any;
	@Input('backImageClass') backImageClass_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('imageClass') imageClass_input: any;
	@Input('radius') radius_input: any;
	@Input('targetElementId') targetElementId_input: any;
	@Input('position') position_input: any;
	@Input('items') items_input: any;
    @Input('options') options: any;


	@Output('click') click_output = new EventEmitter();
	@Output('ejclick') ejclick_output = new EventEmitter();
	@Output('open') open_output = new EventEmitter();
	@Output('close') close_output = new EventEmitter();

	@ContentChild(RadialMenuItemsDirective) tag_items: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('RadialMenu', el, cdRef, ['items'], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_RADIALMENU_COMPONENTS: Type<any>[] = [RadialMenuComponent
, RadialMenuItemsDirective, RadialMenuItemDirective];


