import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.heatmap.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-colormappingcollection>e-colormapping',
})
export class HeatMapColorMappingDirective extends ComplexTagElement {

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

    
    constructor( @Inject(forwardRef(() => HeatMapComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-heatmap>e-colormappingcollection',
    queries: {
        children: new ContentChildren(HeatMapColorMappingDirective)
    }
})
export class HeatMapColorMappingCollectionDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => HeatMapComponent)) widget: EJComponents<any, any>) {
        super('colorMappingCollection')
        }
}




@Component({
    selector: 'ej-heatmap',
    template: ''})
export class HeatMapComponent extends EJComponents<any, any> {
	@Input('width') width_input: any;
	@Input('height') height_input: any;
	@Input('id') id_input: any;
	@Input('showTooltip') showTooltip_input: any;
	@Input('tooltipSettings') tooltipSettings_input: any;
	@Input('itemsSource') itemsSource_input: any;
	@Input('heatMapCell') heatMapCell_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('enableVirtualization') enableVirtualization_input: any;
	@Input('defaultColumnStyle') defaultColumnStyle_input: any;
	@Input('legendCollection') legendCollection_input: any;
	@Input('itemsMapping') itemsMapping_input: any;
	@Input('tooltipSettings.templateId') tooltipSettings_templateId_input: any;
	@Input('tooltipSettings.associate') tooltipSettings_associate_input: any;
	@Input('tooltipSettings.isBalloon') tooltipSettings_isBalloon_input: any;
	@Input('tooltipSettings.position') tooltipSettings_position_input: any;
	@Input('tooltipSettings.position.target') tooltipSettings_position_target_input: any;
	@Input('tooltipSettings.position.stem') tooltipSettings_position_stem_input: any;
	@Input('tooltipSettings.trigger') tooltipSettings_trigger_input: any;
	@Input('tooltipSettings.animation') tooltipSettings_animation_input: any;
	@Input('tooltipSettings.animation.effect') tooltipSettings_animation_effect_input: any;
	@Input('tooltipSettings.animation.speed') tooltipSettings_animation_speed_input: any;
	@Input('heatMapCell.showContent') heatMapCell_showContent_input: any;
	@Input('heatMapCell.showColor') heatMapCell_showColor_input: any;
	@Input('defaultColumnStyle.textAlign') defaultColumnStyle_textAlign_input: any;
	@Input('defaultColumnStyle.headerTemplateID') defaultColumnStyle_headerTemplateID_input: any;
	@Input('defaultColumnStyle.templateID') defaultColumnStyle_templateID_input: any;
	@Input('itemsMapping.columnStyle') itemsMapping_columnStyle_input: any;
	@Input('itemsMapping.columnStyle.width') itemsMapping_columnStyle_width_input: any;
	@Input('itemsMapping.columnStyle.textAlign') itemsMapping_columnStyle_textAlign_input: any;
	@Input('itemsMapping.columnStyle.headerTemplateID') itemsMapping_columnStyle_headerTemplateID_input: any;
	@Input('itemsMapping.columnStyle.templateID') itemsMapping_columnStyle_templateID_input: any;
	@Input('itemsMapping.column') itemsMapping_column_input: any;
	@Input('itemsMapping.column.propertyName') itemsMapping_column_propertyName_input: any;
	@Input('itemsMapping.column.displayName') itemsMapping_column_displayName_input: any;
	@Input('itemsMapping.row') itemsMapping_row_input: any;
	@Input('itemsMapping.row.propertyName') itemsMapping_row_propertyName_input: any;
	@Input('itemsMapping.row.displayName') itemsMapping_row_displayName_input: any;
	@Input('itemsMapping.value') itemsMapping_value_input: any;
	@Input('itemsMapping.value.propertyName') itemsMapping_value_propertyName_input: any;
	@Input('itemsMapping.value.displayName') itemsMapping_value_displayName_input: any;
	@Input('itemsMapping.headerMapping') itemsMapping_headerMapping_input: any;
	@Input('itemsMapping.headerMapping.propertyName') itemsMapping_headerMapping_propertyName_input: any;
	@Input('itemsMapping.headerMapping.displayName') itemsMapping_headerMapping_displayName_input: any;
	@Input('itemsMapping.headerMapping.columnStyle') itemsMapping_headerMapping_columnStyle_input: any;
	@Input('itemsMapping.columnMapping') itemsMapping_columnMapping_input: any;
	@Input('colorMappingCollection') colorMappingCollection_input: any;
    @Input('options') options: any;


	@Output('cellMouseOver') cellMouseOver_output = new EventEmitter();
	@Output('cellMouseEnter') cellMouseEnter_output = new EventEmitter();
	@Output('cellMouseLeave') cellMouseLeave_output = new EventEmitter();
	@Output('cellSelected') cellSelected_output = new EventEmitter();

	@ContentChild(HeatMapColorMappingCollectionDirective) tag_colorMappingCollection: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('HeatMap', el, cdRef, ['colorMappingCollection'], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_HEATMAP_COMPONENTS: Type<any>[] = [HeatMapComponent
, HeatMapColorMappingCollectionDirective, HeatMapColorMappingDirective];


