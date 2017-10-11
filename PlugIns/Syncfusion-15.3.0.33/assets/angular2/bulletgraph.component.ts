import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.bulletgraph.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-qualitativeranges>e-qualitativerange',
})
export class BulletGraphQualitativeRangeDirective extends ComplexTagElement {

	@Input('rangeEnd') rangeEnd: any;
	@Input('rangeOpacity') rangeOpacity: any;
	@Input('rangeStroke') rangeStroke: any;

    
    constructor( @Inject(forwardRef(() => BulletGraphComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-bulletgraph>e-qualitativeranges',
    queries: {
        children: new ContentChildren(BulletGraphQualitativeRangeDirective)
    }
})
export class BulletGraphQualitativeRangesDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => BulletGraphComponent)) widget: EJComponents<any, any>) {
        super('qualitativeRanges')
        }
}

@Directive({
    selector: 'e-quantitativescalesettings-featuremeasures>e-quantitativescalesettings-featuremeasure',
})
export class BulletGraphQuantitativeScaleSettingsFeatureMeasureDirective extends ComplexTagElement {

	@Input('category') category: any;
	@Input('comparativeMeasureValue') comparativeMeasureValue: any;
	@Input('value') value: any;

    
    constructor( @Inject(forwardRef(() => BulletGraphComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-bulletgraph>e-quantitativescalesettings-featuremeasures',
    queries: {
        children: new ContentChildren(BulletGraphQuantitativeScaleSettingsFeatureMeasureDirective)
    }
})
export class BulletGraphQuantitativeScaleSettingsFeatureMeasuresDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => BulletGraphComponent)) widget: EJComponents<any, any>) {
        super('quantitativeScaleSettings.featureMeasures')
        }
}




@Component({
    selector: 'ej-bulletgraph',
    template: ''})
export class BulletGraphComponent extends EJComponents<any, any> {
	@Input('applyRangeStrokeToLabels') applyRangeStrokeToLabels_input: any;
	@Input('applyRangeStrokeToTicks') applyRangeStrokeToTicks_input: any;
	@Input('captionSettings') captionSettings_input: any;
	@Input('comparativeMeasureValue') comparativeMeasureValue_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enableResizing') enableResizing_input: any;
	@Input('flowDirection') flowDirection_input: any;
	@Input('height') height_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('enableGroupSeparator') enableGroupSeparator_input: any;
	@Input('locale') locale_input: any;
	@Input('orientation') orientation_input: any;
	@Input('qualitativeRangeSize') qualitativeRangeSize_input: any;
	@Input('quantitativeScaleLength') quantitativeScaleLength_input: any;
	@Input('quantitativeScaleSettings') quantitativeScaleSettings_input: any;
	@Input('theme') theme_input: any;
	@Input('tooltipSettings') tooltipSettings_input: any;
	@Input('value') value_input: any;
	@Input('width') width_input: any;
	@Input('captionSettings.enableTrim') captionSettings_enableTrim_input: any;
	@Input('captionSettings.font') captionSettings_font_input: any;
	@Input('captionSettings.font.color') captionSettings_font_color_input: any;
	@Input('captionSettings.font.fontFamily') captionSettings_font_fontFamily_input: any;
	@Input('captionSettings.font.fontStyle') captionSettings_font_fontStyle_input: any;
	@Input('captionSettings.font.fontWeight') captionSettings_font_fontWeight_input: any;
	@Input('captionSettings.font.opacity') captionSettings_font_opacity_input: any;
	@Input('captionSettings.font.size') captionSettings_font_size_input: any;
	@Input('captionSettings.indicator') captionSettings_indicator_input: any;
	@Input('captionSettings.indicator.font') captionSettings_indicator_font_input: any;
	@Input('captionSettings.indicator.location') captionSettings_indicator_location_input: any;
	@Input('captionSettings.indicator.padding') captionSettings_indicator_padding_input: any;
	@Input('captionSettings.indicator.symbol') captionSettings_indicator_symbol_input: any;
	@Input('captionSettings.indicator.text') captionSettings_indicator_text_input: any;
	@Input('captionSettings.indicator.textAlignment') captionSettings_indicator_textAlignment_input: any;
	@Input('captionSettings.indicator.textAnchor') captionSettings_indicator_textAnchor_input: any;
	@Input('captionSettings.indicator.textAngle') captionSettings_indicator_textAngle_input: any;
	@Input('captionSettings.indicator.textPosition') captionSettings_indicator_textPosition_input: any;
	@Input('captionSettings.indicator.textSpacing') captionSettings_indicator_textSpacing_input: any;
	@Input('captionSettings.indicator.visible') captionSettings_indicator_visible_input: any;
	@Input('captionSettings.location') captionSettings_location_input: any;
	@Input('captionSettings.location.x') captionSettings_location_x_input: any;
	@Input('captionSettings.location.y') captionSettings_location_y_input: any;
	@Input('captionSettings.padding') captionSettings_padding_input: any;
	@Input('captionSettings.subTitle') captionSettings_subTitle_input: any;
	@Input('captionSettings.subTitle.font') captionSettings_subTitle_font_input: any;
	@Input('captionSettings.subTitle.location') captionSettings_subTitle_location_input: any;
	@Input('captionSettings.subTitle.padding') captionSettings_subTitle_padding_input: any;
	@Input('captionSettings.subTitle.text') captionSettings_subTitle_text_input: any;
	@Input('captionSettings.subTitle.textAlignment') captionSettings_subTitle_textAlignment_input: any;
	@Input('captionSettings.subTitle.textAnchor') captionSettings_subTitle_textAnchor_input: any;
	@Input('captionSettings.subTitle.textAngle') captionSettings_subTitle_textAngle_input: any;
	@Input('captionSettings.subTitle.textPosition') captionSettings_subTitle_textPosition_input: any;
	@Input('captionSettings.text') captionSettings_text_input: any;
	@Input('captionSettings.textAlignment') captionSettings_textAlignment_input: any;
	@Input('captionSettings.textAnchor') captionSettings_textAnchor_input: any;
	@Input('captionSettings.textAngle') captionSettings_textAngle_input: any;
	@Input('captionSettings.textPosition') captionSettings_textPosition_input: any;
	@Input('quantitativeScaleSettings.comparativeMeasureSettings') quantitativeScaleSettings_comparativeMeasureSettings_input: any;
	@Input('quantitativeScaleSettings.comparativeMeasureSettings.stroke') quantitativeScaleSettings_comparativeMeasureSettings_stroke_input: any;
	@Input('quantitativeScaleSettings.comparativeMeasureSettings.width') quantitativeScaleSettings_comparativeMeasureSettings_width_input: any;
	@Input('quantitativeScaleSettings.featuredMeasureSettings') quantitativeScaleSettings_featuredMeasureSettings_input: any;
	@Input('quantitativeScaleSettings.featuredMeasureSettings.stroke') quantitativeScaleSettings_featuredMeasureSettings_stroke_input: any;
	@Input('quantitativeScaleSettings.featuredMeasureSettings.width') quantitativeScaleSettings_featuredMeasureSettings_width_input: any;
	@Input('quantitativeScaleSettings.fields') quantitativeScaleSettings_fields_input: any;
	@Input('quantitativeScaleSettings.fields.category') quantitativeScaleSettings_fields_category_input: any;
	@Input('quantitativeScaleSettings.fields.comparativeMeasure') quantitativeScaleSettings_fields_comparativeMeasure_input: any;
	@Input('quantitativeScaleSettings.fields.dataSource') quantitativeScaleSettings_fields_dataSource_input: any;
	@Input('quantitativeScaleSettings.fields.featureMeasures') quantitativeScaleSettings_fields_featureMeasures_input: any;
	@Input('quantitativeScaleSettings.fields.query') quantitativeScaleSettings_fields_query_input: any;
	@Input('quantitativeScaleSettings.fields.tableName') quantitativeScaleSettings_fields_tableName_input: any;
	@Input('quantitativeScaleSettings.interval') quantitativeScaleSettings_interval_input: any;
	@Input('quantitativeScaleSettings.labelSettings') quantitativeScaleSettings_labelSettings_input: any;
	@Input('quantitativeScaleSettings.labelSettings.font') quantitativeScaleSettings_labelSettings_font_input: any;
	@Input('quantitativeScaleSettings.labelSettings.labelPlacement') quantitativeScaleSettings_labelSettings_labelPlacement_input: any;
	@Input('quantitativeScaleSettings.labelSettings.labelPrefix') quantitativeScaleSettings_labelSettings_labelPrefix_input: any;
	@Input('quantitativeScaleSettings.labelSettings.labelSuffix') quantitativeScaleSettings_labelSettings_labelSuffix_input: any;
	@Input('quantitativeScaleSettings.labelSettings.offset') quantitativeScaleSettings_labelSettings_offset_input: any;
	@Input('quantitativeScaleSettings.labelSettings.position') quantitativeScaleSettings_labelSettings_position_input: any;
	@Input('quantitativeScaleSettings.labelSettings.size') quantitativeScaleSettings_labelSettings_size_input: any;
	@Input('quantitativeScaleSettings.labelSettings.stroke') quantitativeScaleSettings_labelSettings_stroke_input: any;
	@Input('quantitativeScaleSettings.location') quantitativeScaleSettings_location_input: any;
	@Input('quantitativeScaleSettings.location.x') quantitativeScaleSettings_location_x_input: any;
	@Input('quantitativeScaleSettings.location.y') quantitativeScaleSettings_location_y_input: any;
	@Input('quantitativeScaleSettings.majorTickSettings') quantitativeScaleSettings_majorTickSettings_input: any;
	@Input('quantitativeScaleSettings.majorTickSettings.size') quantitativeScaleSettings_majorTickSettings_size_input: any;
	@Input('quantitativeScaleSettings.majorTickSettings.stroke') quantitativeScaleSettings_majorTickSettings_stroke_input: any;
	@Input('quantitativeScaleSettings.majorTickSettings.width') quantitativeScaleSettings_majorTickSettings_width_input: any;
	@Input('quantitativeScaleSettings.maximum') quantitativeScaleSettings_maximum_input: any;
	@Input('quantitativeScaleSettings.minimum') quantitativeScaleSettings_minimum_input: any;
	@Input('quantitativeScaleSettings.minorTickSettings') quantitativeScaleSettings_minorTickSettings_input: any;
	@Input('quantitativeScaleSettings.minorTickSettings.size') quantitativeScaleSettings_minorTickSettings_size_input: any;
	@Input('quantitativeScaleSettings.minorTickSettings.stroke') quantitativeScaleSettings_minorTickSettings_stroke_input: any;
	@Input('quantitativeScaleSettings.minorTickSettings.width') quantitativeScaleSettings_minorTickSettings_width_input: any;
	@Input('quantitativeScaleSettings.minorTicksPerInterval') quantitativeScaleSettings_minorTicksPerInterval_input: any;
	@Input('quantitativeScaleSettings.tickPlacement') quantitativeScaleSettings_tickPlacement_input: any;
	@Input('quantitativeScaleSettings.tickPosition') quantitativeScaleSettings_tickPosition_input: any;
	@Input('tooltipSettings.captionTemplate') tooltipSettings_captionTemplate_input: any;
	@Input('tooltipSettings.enableCaptionTooltip') tooltipSettings_enableCaptionTooltip_input: any;
	@Input('tooltipSettings.template') tooltipSettings_template_input: any;
	@Input('tooltipSettings.visible') tooltipSettings_visible_input: any;
	@Input('qualitativeRanges') qualitativeRanges_input: any;
	@Input('quantitativeScaleSettings.featureMeasures') quantitativeScaleSettings_featureMeasures_input: any;


	@Output('drawCaption') drawCaption_output = new EventEmitter();
	@Output('drawCategory') drawCategory_output = new EventEmitter();
	@Output('drawComparativeMeasureSymbol') drawComparativeMeasureSymbol_output = new EventEmitter();
	@Output('drawFeatureMeasureBar') drawFeatureMeasureBar_output = new EventEmitter();
	@Output('drawIndicator') drawIndicator_output = new EventEmitter();
	@Output('drawLabels') drawLabels_output = new EventEmitter();
	@Output('drawTicks') drawTicks_output = new EventEmitter();
	@Output('drawQualitativeRanges') drawQualitativeRanges_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();

	@ContentChild(BulletGraphQualitativeRangesDirective) tag_qualitativeRanges: any;
	@ContentChild(BulletGraphQuantitativeScaleSettingsFeatureMeasuresDirective) tag_quantitativeScaleSettings_featureMeasures: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('BulletGraph', el, cdRef, ['qualitativeRanges', 'quantitativeScaleSettings.featureMeasures']);
    }



}

export var EJ_BULLETGRAPH_COMPONENTS: Type<any>[] = [BulletGraphComponent
, BulletGraphQualitativeRangesDirective, BulletGraphQuantitativeScaleSettingsFeatureMeasuresDirective, BulletGraphQualitativeRangeDirective, BulletGraphQuantitativeScaleSettingsFeatureMeasureDirective];


