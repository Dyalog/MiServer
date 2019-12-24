import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.heatmap.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-legendcolormappings>e-legendcolormapping',
})
export class HeatMapLegendLegendcolorMappingDirective extends ComplexTagElement {

	@Input('color') color: any;
	@Input('value') value: any;
	@Input('label') label: any;
	@Input('label.bold') label_bold: any;
	@Input('label.italic') label_italic: any;
	@Input('label.text') label_text: any;
	@Input('label.textDecoration') label_textDecoration: any;
	@Input('label.fontSize') label_fontSize: any;
	@Input('label.fontFamily') label_fontFamily: any;
	@Input('label.fontColor') label_fontColor: any;

    
    constructor( @Inject(forwardRef(() => HeatMapLegendComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-heatmaplegend>e-legendcolormappings',
    queries: {
        children: new ContentChildren(HeatMapLegendLegendcolorMappingDirective)
    }
})
export class HeatMapLegendLegendcolorMappingsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => HeatMapLegendComponent)) widget: EJComponents<any, any>) {
        super('colorMappingCollection')
        }
}




@Component({
    selector: 'ej-heatmaplegend',
    template: ''})
export class HeatMapLegendComponent extends EJComponents<any, any> {
	@Input('width') width_input: any;
	@Input('height') height_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('showLabel') showLabel_input: any;
	@Input('orientation') orientation_input: any;
	@Input('legendMode') legendMode_input: any;
	@Input('colorMappingCollection') colorMappingCollection_input: any;
    @Input('options') options: any;



	@ContentChild(HeatMapLegendLegendcolorMappingsDirective) tag_colorMappingCollection: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('HeatMapLegend', el, cdRef, ['colorMappingCollection'], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_HEATMAPLEGEND_COMPONENTS: Type<any>[] = [HeatMapLegendComponent
, HeatMapLegendLegendcolorMappingsDirective, HeatMapLegendLegendcolorMappingDirective];


