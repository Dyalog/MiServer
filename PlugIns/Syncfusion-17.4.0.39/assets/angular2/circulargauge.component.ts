import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.circulargauge.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-pointers>e-pointer',
})
export class CircularGaugePointerDirective extends ComplexTagElement {

	@Input('backgroundColor') backgroundColor: any;
	@Input('backNeedleLength') backNeedleLength: any;
	@Input('border') border: any;
	@Input('border.color') border_color: any;
	@Input('border.width') border_width: any;
	@Input('distanceFromScale') distanceFromScale: any;
	@Input('gradients') gradients: any;
	@Input('imageUrl') imageUrl: any;
	@Input('length') length: any;
	@Input('markerType') markerType: any;
	@Input('needleType') needleType: any;
	@Input('opacity') opacity: any;
	@Input('radius') radius: any;
	@Input('placement') placement: any;
	@Input('pointerValueText') pointerValueText: any;
	@Input('pointerValueText.angle') pointerValueText_angle: any;
	@Input('pointerValueText.autoAngle') pointerValueText_autoAngle: any;
	@Input('pointerValueText.color') pointerValueText_color: any;
	@Input('pointerValueText.distance') pointerValueText_distance: any;
	@Input('pointerValueText.font') pointerValueText_font: any;
	@Input('pointerValueText.font.fontFamily') pointerValueText_font_fontFamily: any;
	@Input('pointerValueText.font.fontStyle') pointerValueText_font_fontStyle: any;
	@Input('pointerValueText.font.size') pointerValueText_font_size: any;
	@Input('pointerValueText.opacity') pointerValueText_opacity: any;
	@Input('pointerValueText.showValue') pointerValueText_showValue: any;
	@Input('showBackNeedle') showBackNeedle: any;
	@Input('type') type: any;
	@Input('value') value: any;
	@Input('width') width: any;

    
    constructor( @Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-scales>e-pointers',
    queries: {
        children: new ContentChildren(CircularGaugePointerDirective)
    }
})
export class CircularGaugePointersDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super('pointers')
        }
}

@Directive({
    selector: 'e-labels>e-label',
})
export class CircularGaugeLabelDirective extends ComplexTagElement {

	@Input('angle') angle: any;
	@Input('autoAngle') autoAngle: any;
	@Input('color') color: any;
	@Input('distanceFromScale') distanceFromScale: any;
	@Input('font') font: any;
	@Input('font.fontFamily') font_fontFamily: any;
	@Input('font.fontStyle') font_fontStyle: any;
	@Input('font.size') font_size: any;
	@Input('includeFirstValue') includeFirstValue: any;
	@Input('opacity') opacity: any;
	@Input('placement') placement: any;
	@Input('type') type: any;
	@Input('unitText') unitText: any;
	@Input('unitTextPosition') unitTextPosition: any;

    
    constructor( @Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-scales>e-labels',
    queries: {
        children: new ContentChildren(CircularGaugeLabelDirective)
    }
})
export class CircularGaugeLabelsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super('labels')
        }
}

@Directive({
    selector: 'e-ticks>e-tick',
})
export class CircularGaugeTickDirective extends ComplexTagElement {

	@Input('angle') angle: any;
	@Input('color') color: any;
	@Input('distanceFromScale') distanceFromScale: any;
	@Input('height') height: any;
	@Input('placement') placement: any;
	@Input('type') type: any;
	@Input('width') width: any;

    
    constructor( @Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-scales>e-ticks',
    queries: {
        children: new ContentChildren(CircularGaugeTickDirective)
    }
})
export class CircularGaugeTicksDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super('ticks')
        }
}

@Directive({
    selector: 'e-ranges>e-range',
})
export class CircularGaugeRangeDirective extends ComplexTagElement {

	@Input('backgroundColor') backgroundColor: any;
	@Input('legendText') legendText: any;
	@Input('border') border: any;
	@Input('border.color') border_color: any;
	@Input('border.width') border_width: any;
	@Input('distanceFromScale') distanceFromScale: any;
	@Input('endValue') endValue: any;
	@Input('endWidth') endWidth: any;
	@Input('gradients') gradients: any;
	@Input('opacity') opacity: any;
	@Input('placement') placement: any;
	@Input('size') size: any;
	@Input('startValue') startValue: any;
	@Input('startWidth') startWidth: any;

    
    constructor( @Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-scales>e-ranges',
    queries: {
        children: new ContentChildren(CircularGaugeRangeDirective)
    }
})
export class CircularGaugeRangesDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super('ranges')
        }
}

@Directive({
    selector: 'e-stateranges>e-staterange',
})
export class CircularGaugeStateRangeDirective extends ComplexTagElement {

	@Input('backgroundColor') backgroundColor: any;
	@Input('borderColor') borderColor: any;
	@Input('endValue') endValue: any;
	@Input('font') font: any;
	@Input('startValue') startValue: any;
	@Input('text') text: any;
	@Input('textColor') textColor: any;

    
    constructor( @Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-indicators>e-stateranges',
    queries: {
        children: new ContentChildren(CircularGaugeStateRangeDirective)
    }
})
export class CircularGaugeStateRangesDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super('stateRanges')
        }
}

@Directive({
    selector: 'e-indicators>e-indicator',
})
export class CircularGaugeIndicatorDirective extends ComplexTagElement {

	@Input('height') height: any;
	@Input('imageUrl') imageUrl: any;
	@Input('position') position: any;
	@Input('position.x') position_x: any;
	@Input('position.y') position_y: any;
	@Input('stateRanges') stateRanges: any;
	@Input('type') type: any;
	@Input('width') width: any;

	@ContentChild(CircularGaugeStateRangesDirective) tag_stateRanges: any;
    
    constructor( @Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super(['stateRanges']);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-scales>e-indicators',
    queries: {
        children: new ContentChildren(CircularGaugeIndicatorDirective)
    }
})
export class CircularGaugeIndicatorsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super('indicators')
        }
}

@Directive({
    selector: 'e-subgauges>e-subgauge',
})
export class CircularGaugeSubGaugeDirective extends ComplexTagElement {

	@Input('height') height: any;
	@Input('position') position: any;
	@Input('position.x') position_x: any;
	@Input('position.y') position_y: any;
	@Input('width') width: any;

    
    constructor( @Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-scales>e-subgauges',
    queries: {
        children: new ContentChildren(CircularGaugeSubGaugeDirective)
    }
})
export class CircularGaugeSubGaugesDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super('subGauges')
        }
}

@Directive({
    selector: 'e-scales>e-scale',
})
export class CircularGaugeScaleDirective extends ComplexTagElement {

	@Input('backgroundColor') backgroundColor: any;
	@Input('border') border: any;
	@Input('border.color') border_color: any;
	@Input('border.width') border_width: any;
	@Input('direction') direction: any;
	@Input('customLabels') customLabels: any;
	@Input('indicators') indicators: any;
	@Input('labels') labels: any;
	@Input('majorIntervalValue') majorIntervalValue: any;
	@Input('maximum') maximum: any;
	@Input('minimum') minimum: any;
	@Input('minorIntervalValue') minorIntervalValue: any;
	@Input('opacity') opacity: any;
	@Input('pointerCap') pointerCap: any;
	@Input('pointerCap.backgroundColor') pointerCap_backgroundColor: any;
	@Input('pointerCap.borderColor') pointerCap_borderColor: any;
	@Input('pointerCap.borderWidth') pointerCap_borderWidth: any;
	@Input('pointerCap.interiorGradient') pointerCap_interiorGradient: any;
	@Input('pointerCap.radius') pointerCap_radius: any;
	@Input('pointers') pointers: any;
	@Input('radius') radius: any;
	@Input('ranges') ranges: any;
	@Input('shadowOffset') shadowOffset: any;
	@Input('showIndicators') showIndicators: any;
	@Input('showLabels') showLabels: any;
	@Input('showPointers') showPointers: any;
	@Input('showRanges') showRanges: any;
	@Input('showScaleBar') showScaleBar: any;
	@Input('showTicks') showTicks: any;
	@Input('size') size: any;
	@Input('startAngle') startAngle: any;
	@Input('subGauges') subGauges: any;
	@Input('sweepAngle') sweepAngle: any;
	@Input('ticks') ticks: any;

	@ContentChild(CircularGaugePointersDirective) tag_pointers: any;
	@ContentChild(CircularGaugeLabelsDirective) tag_labels: any;
	@ContentChild(CircularGaugeTicksDirective) tag_ticks: any;
	@ContentChild(CircularGaugeRangesDirective) tag_ranges: any;
	@ContentChild(CircularGaugeIndicatorsDirective) tag_indicators: any;
	@ContentChild(CircularGaugeSubGaugesDirective) tag_subGauges: any;
    
    constructor( @Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super(['pointers', 'labels', 'ticks', 'ranges', 'indicators', 'subGauges']);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-circulargauge>e-scales',
    queries: {
        children: new ContentChildren(CircularGaugeScaleDirective)
    }
})
export class CircularGaugeScalesDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => CircularGaugeComponent)) widget: EJComponents<any, any>) {
        super('scales')
        }
}




@Component({
    selector: 'ej-circulargauge',
    template: ''})
export class CircularGaugeComponent extends EJComponents<any, any> {
	@Input('animationSpeed') animationSpeed_input: any;
	@Input('backgroundColor') backgroundColor_input: any;
	@Input('distanceFromCorner') distanceFromCorner_input: any;
	@Input('rangeZOrder') rangeZOrder_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enableGroupSeparator') enableGroupSeparator_input: any;
	@Input('enableResize') enableResize_input: any;
	@Input('exportSettings') exportSettings_input: any;
	@Input('frame') frame_input: any;
	@Input('gaugePosition') gaugePosition_input: any;
	@Input('height') height_input: any;
	@Input('interiorGradient') interiorGradient_input: any;
	@Input('isRadialGradient') isRadialGradient_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('locale') locale_input: any;
	@Input('outerCustomLabelPosition') outerCustomLabelPosition_input: any;
	@Input('radius') radius_input: any;
	@Input('readOnly') readOnly_input: any;
	@Input('theme') theme_input: any;
	@Input('legend') legend_input: any;
	@Input('tooltip') tooltip_input: any;
	@Input('width') width_input: any;
	@Input('exportSettings.filename') exportSettings_filename_input: any;
	@Input('exportSettings.type') exportSettings_type_input: any;
	@Input('exportSettings.action') exportSettings_action_input: any;
	@Input('exportSettings.mode') exportSettings_mode_input: any;
	@Input('frame.backgroundImageUrl') frame_backgroundImageUrl_input: any;
	@Input('frame.frameType') frame_frameType_input: any;
	@Input('frame.halfCircleFrameEndAngle') frame_halfCircleFrameEndAngle_input: any;
	@Input('frame.halfCircleFrameStartAngle') frame_halfCircleFrameStartAngle_input: any;
	@Input('legend.visible') legend_visible_input: any;
	@Input('legend.toggleVisibility') legend_toggleVisibility_input: any;
	@Input('legend.alignment') legend_alignment_input: any;
	@Input('legend.border') legend_border_input: any;
	@Input('legend.border.color') legend_border_color_input: any;
	@Input('legend.border.width') legend_border_width_input: any;
	@Input('legend.fill') legend_fill_input: any;
	@Input('legend.itemPadding') legend_itemPadding_input: any;
	@Input('legend.itemStyle') legend_itemStyle_input: any;
	@Input('legend.itemStyle.border') legend_itemStyle_border_input: any;
	@Input('legend.itemStyle.height') legend_itemStyle_height_input: any;
	@Input('legend.itemStyle.width') legend_itemStyle_width_input: any;
	@Input('legend.opacity') legend_opacity_input: any;
	@Input('legend.position') legend_position_input: any;
	@Input('legend.shape') legend_shape_input: any;
	@Input('legend.size') legend_size_input: any;
	@Input('legend.size.height') legend_size_height_input: any;
	@Input('legend.size.width') legend_size_width_input: any;
	@Input('legend.font') legend_font_input: any;
	@Input('legend.font.fontFamily') legend_font_fontFamily_input: any;
	@Input('legend.font.fontStyle') legend_font_fontStyle_input: any;
	@Input('legend.font.fontWeight') legend_font_fontWeight_input: any;
	@Input('legend.font.size') legend_font_size_input: any;
	@Input('legend.font.color') legend_font_color_input: any;
	@Input('tooltip.showCustomLabelTooltip') tooltip_showCustomLabelTooltip_input: any;
	@Input('tooltip.showLabelTooltip') tooltip_showLabelTooltip_input: any;
	@Input('tooltip.templateID') tooltip_templateID_input: any;
	@Input('scales') scales_input: any;
	@Input('scales.indicators.stateRanges') scales_indicators_stateRanges_input: any;
    @Input('options') options: any;

	@Input('value') value_two: any;
	@Output('valueChange') value_twoChange = new EventEmitter<any>();
	@Input('minimum') minimum_two: any;
	@Output('minimumChange') minimum_twoChange = new EventEmitter<any>();
	@Input('maximum') maximum_two: any;
	@Output('maximumChange') maximum_twoChange = new EventEmitter<any>();

	@Output('legendItemRender') legendItemRender_output = new EventEmitter();
	@Output('legendItemClick') legendItemClick_output = new EventEmitter();
	@Output('rangeMouseMove') rangeMouseMove_output = new EventEmitter();
	@Output('drawCustomLabel') drawCustomLabel_output = new EventEmitter();
	@Output('drawIndicators') drawIndicators_output = new EventEmitter();
	@Output('drawLabels') drawLabels_output = new EventEmitter();
	@Output('drawPointerCap') drawPointerCap_output = new EventEmitter();
	@Output('drawPointers') drawPointers_output = new EventEmitter();
	@Output('drawRange') drawRange_output = new EventEmitter();
	@Output('drawTicks') drawTicks_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('mouseClick') mouseClick_output = new EventEmitter();
	@Output('mouseClickMove') mouseClickMove_output = new EventEmitter();
	@Output('mouseClickUp') mouseClickUp_output = new EventEmitter();
	@Output('renderComplete') renderComplete_output = new EventEmitter();
	@Output('doubleClick') doubleClick_output = new EventEmitter();
	@Output('rightClick') rightClick_output = new EventEmitter();

	@ContentChild(CircularGaugeScalesDirective) tag_scales: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('CircularGauge', el, cdRef, ['scales'], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_CIRCULARGAUGE_COMPONENTS: Type<any>[] = [CircularGaugeComponent
, CircularGaugePointersDirective, CircularGaugeLabelsDirective, CircularGaugeTicksDirective, CircularGaugeRangesDirective, CircularGaugeStateRangesDirective, CircularGaugeIndicatorsDirective, CircularGaugeSubGaugesDirective, CircularGaugeScalesDirective, CircularGaugePointerDirective, CircularGaugeLabelDirective, CircularGaugeTickDirective, CircularGaugeRangeDirective, CircularGaugeStateRangeDirective, CircularGaugeIndicatorDirective, CircularGaugeSubGaugeDirective, CircularGaugeScaleDirective];


