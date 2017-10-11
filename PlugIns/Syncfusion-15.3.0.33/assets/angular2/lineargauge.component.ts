import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.lineargauge.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-markerpointers>e-markerpointer',
})
export class LinearGaugeMarkerPointerDirective extends ComplexTagElement {

	@Input('backgroundColor') backgroundColor: any;
	@Input('border') border: any;
	@Input('border.color') border_color: any;
	@Input('border.width') border_width: any;
	@Input('distanceFromScale') distanceFromScale: any;
	@Input('gradients') gradients: any;
	@Input('length') length: any;
	@Input('opacity') opacity: any;
	@Input('placement') placement: any;
	@Input('type') type: any;
	@Input('value') value: any;
	@Input('width') width: any;

    
    constructor( @Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-scales>e-markerpointers',
    queries: {
        children: new ContentChildren(LinearGaugeMarkerPointerDirective)
    }
})
export class LinearGaugeMarkerPointersDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super('markerPointers')
        }
}

@Directive({
    selector: 'e-barpointers>e-barpointer',
})
export class LinearGaugeBarPointerDirective extends ComplexTagElement {

	@Input('backgroundColor') backgroundColor: any;
	@Input('border') border: any;
	@Input('border.color') border_color: any;
	@Input('border.width') border_width: any;
	@Input('distanceFromScale') distanceFromScale: any;
	@Input('gradients') gradients: any;
	@Input('opacity') opacity: any;
	@Input('value') value: any;
	@Input('width') width: any;

    
    constructor( @Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-scales>e-barpointers',
    queries: {
        children: new ContentChildren(LinearGaugeBarPointerDirective)
    }
})
export class LinearGaugeBarPointersDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super('barPointers')
        }
}

@Directive({
    selector: 'e-ranges>e-range',
})
export class LinearGaugeRangeDirective extends ComplexTagElement {

	@Input('backgroundColor') backgroundColor: any;
	@Input('border') border: any;
	@Input('border.color') border_color: any;
	@Input('border.width') border_width: any;
	@Input('distanceFromScale') distanceFromScale: any;
	@Input('endValue') endValue: any;
	@Input('endWidth') endWidth: any;
	@Input('gradients') gradients: any;
	@Input('opacity') opacity: any;
	@Input('placement') placement: any;
	@Input('startValue') startValue: any;
	@Input('startWidth') startWidth: any;

    
    constructor( @Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-scales>e-ranges',
    queries: {
        children: new ContentChildren(LinearGaugeRangeDirective)
    }
})
export class LinearGaugeRangesDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super('ranges')
        }
}

@Directive({
    selector: 'e-ticks>e-tick',
})
export class LinearGaugeTickDirective extends ComplexTagElement {

	@Input('angle') angle: any;
	@Input('color') color: any;
	@Input('distanceFromScale') distanceFromScale: any;
	@Input('distanceFromScale.x') distanceFromScale_x: any;
	@Input('distanceFromScale.y') distanceFromScale_y: any;
	@Input('height') height: any;
	@Input('opacity') opacity: any;
	@Input('placement') placement: any;
	@Input('type') type: any;
	@Input('width') width: any;

    
    constructor( @Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-scales>e-ticks',
    queries: {
        children: new ContentChildren(LinearGaugeTickDirective)
    }
})
export class LinearGaugeTicksDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super('ticks')
        }
}

@Directive({
    selector: 'e-stateranges>e-staterange',
})
export class LinearGaugeStateRangeDirective extends ComplexTagElement {

	@Input('backgroundColor') backgroundColor: any;
	@Input('borderColor') borderColor: any;
	@Input('endValue') endValue: any;
	@Input('startValue') startValue: any;
	@Input('text') text: any;
	@Input('textColor') textColor: any;

    
    constructor( @Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-indicators>e-stateranges',
    queries: {
        children: new ContentChildren(LinearGaugeStateRangeDirective)
    }
})
export class LinearGaugeStateRangesDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super('stateRanges')
        }
}

@Directive({
    selector: 'e-indicators>e-indicator',
})
export class LinearGaugeIndicatorDirective extends ComplexTagElement {

	@Input('backgroundColor') backgroundColor: any;
	@Input('border') border: any;
	@Input('border.color') border_color: any;
	@Input('border.width') border_width: any;
	@Input('font') font: any;
	@Input('font.fontFamily') font_fontFamily: any;
	@Input('font.fontStyle') font_fontStyle: any;
	@Input('font.size') font_size: any;
	@Input('height') height: any;
	@Input('opacity') opacity: any;
	@Input('position') position: any;
	@Input('position.x') position_x: any;
	@Input('position.y') position_y: any;
	@Input('stateRanges') stateRanges: any;
	@Input('textLocation') textLocation: any;
	@Input('textLocation.x') textLocation_x: any;
	@Input('textLocation.y') textLocation_y: any;
	@Input('type') type: any;
	@Input('width') width: any;

	@ContentChild(LinearGaugeStateRangesDirective) tag_stateRanges: any;
    
    constructor( @Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super(['stateRanges']);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-scales>e-indicators',
    queries: {
        children: new ContentChildren(LinearGaugeIndicatorDirective)
    }
})
export class LinearGaugeIndicatorsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super('indicators')
        }
}

@Directive({
    selector: 'e-labels>e-label',
})
export class LinearGaugeLabelDirective extends ComplexTagElement {

	@Input('angle') angle: any;
	@Input('distanceFromScale') distanceFromScale: any;
	@Input('distanceFromScale.x') distanceFromScale_x: any;
	@Input('distanceFromScale.y') distanceFromScale_y: any;
	@Input('font') font: any;
	@Input('font.fontFamily') font_fontFamily: any;
	@Input('font.fontStyle') font_fontStyle: any;
	@Input('font.size') font_size: any;
	@Input('includeFirstValue') includeFirstValue: any;
	@Input('opacity') opacity: any;
	@Input('placement') placement: any;
	@Input('textColor') textColor: any;
	@Input('type') type: any;
	@Input('unitText') unitText: any;
	@Input('unitTextPlacement') unitTextPlacement: any;

    
    constructor( @Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-scales>e-labels',
    queries: {
        children: new ContentChildren(LinearGaugeLabelDirective)
    }
})
export class LinearGaugeLabelsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super('labels')
        }
}

@Directive({
    selector: 'e-scales>e-scale',
})
export class LinearGaugeScaleDirective extends ComplexTagElement {

	@Input('backgroundColor') backgroundColor: any;
	@Input('barPointers') barPointers: any;
	@Input('border') border: any;
	@Input('border.color') border_color: any;
	@Input('border.width') border_width: any;
	@Input('customLabels') customLabels: any;
	@Input('direction') direction: any;
	@Input('indicators') indicators: any;
	@Input('labels') labels: any;
	@Input('length') length: any;
	@Input('majorIntervalValue') majorIntervalValue: any;
	@Input('markerPointers') markerPointers: any;
	@Input('maximum') maximum: any;
	@Input('minimum') minimum: any;
	@Input('minorIntervalValue') minorIntervalValue: any;
	@Input('opacity') opacity: any;
	@Input('position') position: any;
	@Input('position.x') position_x: any;
	@Input('position.y') position_y: any;
	@Input('ranges') ranges: any;
	@Input('shadowOffset') shadowOffset: any;
	@Input('showBarPointers') showBarPointers: any;
	@Input('showCustomLabels') showCustomLabels: any;
	@Input('showIndicators') showIndicators: any;
	@Input('showLabels') showLabels: any;
	@Input('showMarkerPointers') showMarkerPointers: any;
	@Input('showRanges') showRanges: any;
	@Input('showTicks') showTicks: any;
	@Input('ticks') ticks: any;
	@Input('type') type: any;
	@Input('width') width: any;

	@ContentChild(LinearGaugeMarkerPointersDirective) tag_markerPointers: any;
	@ContentChild(LinearGaugeBarPointersDirective) tag_barPointers: any;
	@ContentChild(LinearGaugeRangesDirective) tag_ranges: any;
	@ContentChild(LinearGaugeTicksDirective) tag_ticks: any;
	@ContentChild(LinearGaugeIndicatorsDirective) tag_indicators: any;
	@ContentChild(LinearGaugeLabelsDirective) tag_labels: any;
    
    constructor( @Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super(['markerPointers', 'barPointers', 'ranges', 'ticks', 'indicators', 'labels']);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-lineargauge>e-scales',
    queries: {
        children: new ContentChildren(LinearGaugeScaleDirective)
    }
})
export class LinearGaugeScalesDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => LinearGaugeComponent)) widget: EJComponents<any, any>) {
        super('scales')
        }
}




@Component({
    selector: 'ej-lineargauge',
    template: ''})
export class LinearGaugeComponent extends EJComponents<any, any> {
	@Input('animationSpeed') animationSpeed_input: any;
	@Input('backgroundColor') backgroundColor_input: any;
	@Input('borderColor') borderColor_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enableMarkerPointerAnimation') enableMarkerPointerAnimation_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('enableGroupSeparator') enableGroupSeparator_input: any;
	@Input('enableResize') enableResize_input: any;
	@Input('frame') frame_input: any;
	@Input('height') height_input: any;
	@Input('labelColor') labelColor_input: any;
	@Input('locale') locale_input: any;
	@Input('orientation') orientation_input: any;
	@Input('outerCustomLabelPosition') outerCustomLabelPosition_input: any;
	@Input('pointerGradient1') pointerGradient1_input: any;
	@Input('pointerGradient2') pointerGradient2_input: any;
	@Input('readOnly') readOnly_input: any;
	@Input('theme') theme_input: any;
	@Input('tickColor') tickColor_input: any;
	@Input('tooltip') tooltip_input: any;
	@Input('width') width_input: any;
	@Input('frame.backgroundImageUrl') frame_backgroundImageUrl_input: any;
	@Input('frame.innerWidth') frame_innerWidth_input: any;
	@Input('frame.outerWidth') frame_outerWidth_input: any;
	@Input('tooltip.showCustomLabelTooltip') tooltip_showCustomLabelTooltip_input: any;
	@Input('tooltip.showLabelTooltip') tooltip_showLabelTooltip_input: any;
	@Input('tooltip.templateID') tooltip_templateID_input: any;
	@Input('scales') scales_input: any;
	@Input('scales.indicators.stateRanges') scales_indicators_stateRanges_input: any;

	@Input('value') value_two: any;
	@Output('valueChange') value_twoChange = new EventEmitter<any>();
	@Input('minimum') minimum_two: any;
	@Output('minimumChange') minimum_twoChange = new EventEmitter<any>();
	@Input('maximum') maximum_two: any;
	@Output('maximumChange') maximum_twoChange = new EventEmitter<any>();

	@Output('drawBarPointers') drawBarPointers_output = new EventEmitter();
	@Output('drawCustomLabel') drawCustomLabel_output = new EventEmitter();
	@Output('drawIndicators') drawIndicators_output = new EventEmitter();
	@Output('drawLabels') drawLabels_output = new EventEmitter();
	@Output('drawMarkerPointers') drawMarkerPointers_output = new EventEmitter();
	@Output('drawRange') drawRange_output = new EventEmitter();
	@Output('drawTicks') drawTicks_output = new EventEmitter();
	@Output('init') init_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('mouseClick') mouseClick_output = new EventEmitter();
	@Output('mouseClickMove') mouseClickMove_output = new EventEmitter();
	@Output('mouseClickUp') mouseClickUp_output = new EventEmitter();
	@Output('renderComplete') renderComplete_output = new EventEmitter();

	@ContentChild(LinearGaugeScalesDirective) tag_scales: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('LinearGauge', el, cdRef, ['scales']);
    }



}

export var EJ_LINEARGAUGE_COMPONENTS: Type<any>[] = [LinearGaugeComponent
, LinearGaugeMarkerPointersDirective, LinearGaugeBarPointersDirective, LinearGaugeRangesDirective, LinearGaugeTicksDirective, LinearGaugeStateRangesDirective, LinearGaugeIndicatorsDirective, LinearGaugeLabelsDirective, LinearGaugeScalesDirective, LinearGaugeMarkerPointerDirective, LinearGaugeBarPointerDirective, LinearGaugeRangeDirective, LinearGaugeTickDirective, LinearGaugeStateRangeDirective, LinearGaugeIndicatorDirective, LinearGaugeLabelDirective, LinearGaugeScaleDirective];


