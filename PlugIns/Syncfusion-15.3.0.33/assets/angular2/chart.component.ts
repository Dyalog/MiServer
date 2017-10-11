import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.chart.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-trendlines>e-trendline',
})
export class ChartTrendlineDirective extends ComplexTagElement {

	@Input('visibility') visibility: any;
	@Input('type') type: any;
	@Input('name') name: any;
	@Input('fill') fill: any;
	@Input('width') width: any;
	@Input('opacity') opacity: any;
	@Input('dashArray') dashArray: any;
	@Input('forwardForecast') forwardForecast: any;
	@Input('backwardForecast') backwardForecast: any;
	@Input('polynomialOrder') polynomialOrder: any;
	@Input('period') period: any;
	@Input('tooltip') tooltip: any;
	@Input('tooltip.border') tooltip_border: any;
	@Input('tooltip.border.color') tooltip_border_color: any;
	@Input('tooltip.border.width') tooltip_border_width: any;
	@Input('tooltip.rx') tooltip_rx: any;
	@Input('tooltip.ry') tooltip_ry: any;
	@Input('tooltip.duration') tooltip_duration: any;
	@Input('tooltip.enableAnimation') tooltip_enableAnimation: any;
	@Input('tooltip.fill') tooltip_fill: any;
	@Input('tooltip.format') tooltip_format: any;
	@Input('tooltip.opacity') tooltip_opacity: any;
	@Input('visibleOnLegend') visibleOnLegend: any;
	@Input('intercept') intercept: any;

    
    constructor( @Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-series>e-trendlines',
    queries: {
        children: new ContentChildren(ChartTrendlineDirective)
    }
})
export class ChartTrendlinesDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super('trendlines')
        }
}

@Directive({
    selector: 'e-points>e-point',
})
export class ChartPointDirective extends ComplexTagElement {

	@Input('border') border: any;
	@Input('border.color') border_color: any;
	@Input('border.width') border_width: any;
	@Input('visibleOnLegend') visibleOnLegend: any;
	@Input('showIntermediateSum') showIntermediateSum: any;
	@Input('showTotalSum') showTotalSum: any;
	@Input('close') close: any;
	@Input('size') size: any;
	@Input('fill') fill: any;
	@Input('high') high: any;
	@Input('low') low: any;
	@Input('marker') marker: any;
	@Input('marker.border') marker_border: any;
	@Input('marker.border.color') marker_border_color: any;
	@Input('marker.border.width') marker_border_width: any;
	@Input('marker.dataLabel') marker_dataLabel: any;
	@Input('marker.dataLabel.angle') marker_dataLabel_angle: any;
	@Input('marker.dataLabel.border') marker_dataLabel_border: any;
	@Input('marker.dataLabel.border.color') marker_dataLabel_border_color: any;
	@Input('marker.dataLabel.border.width') marker_dataLabel_border_width: any;
	@Input('marker.dataLabel.connectorLine') marker_dataLabel_connectorLine: any;
	@Input('marker.dataLabel.connectorLine.type') marker_dataLabel_connectorLine_type: any;
	@Input('marker.dataLabel.connectorLine.width') marker_dataLabel_connectorLine_width: any;
	@Input('marker.dataLabel.fill') marker_dataLabel_fill: any;
	@Input('marker.dataLabel.font') marker_dataLabel_font: any;
	@Input('marker.dataLabel.font.fontFamily') marker_dataLabel_font_fontFamily: any;
	@Input('marker.dataLabel.font.fontStyle') marker_dataLabel_font_fontStyle: any;
	@Input('marker.dataLabel.font.fontWeight') marker_dataLabel_font_fontWeight: any;
	@Input('marker.dataLabel.font.opacity') marker_dataLabel_font_opacity: any;
	@Input('marker.dataLabel.font.size') marker_dataLabel_font_size: any;
	@Input('marker.dataLabel.horizontalTextAlignment') marker_dataLabel_horizontalTextAlignment: any;
	@Input('marker.dataLabel.margin') marker_dataLabel_margin: any;
	@Input('marker.dataLabel.margin.bottom') marker_dataLabel_margin_bottom: any;
	@Input('marker.dataLabel.margin.left') marker_dataLabel_margin_left: any;
	@Input('marker.dataLabel.margin.right') marker_dataLabel_margin_right: any;
	@Input('marker.dataLabel.margin.top') marker_dataLabel_margin_top: any;
	@Input('marker.dataLabel.opacity') marker_dataLabel_opacity: any;
	@Input('marker.dataLabel.shape') marker_dataLabel_shape: any;
	@Input('marker.dataLabel.textPosition') marker_dataLabel_textPosition: any;
	@Input('marker.dataLabel.verticalTextAlignment') marker_dataLabel_verticalTextAlignment: any;
	@Input('marker.dataLabel.visible') marker_dataLabel_visible: any;
	@Input('marker.dataLabel.template') marker_dataLabel_template: any;
	@Input('marker.dataLabel.offset') marker_dataLabel_offset: any;
	@Input('marker.fill') marker_fill: any;
	@Input('marker.imageUrl') marker_imageUrl: any;
	@Input('marker.opacity') marker_opacity: any;
	@Input('marker.shape') marker_shape: any;
	@Input('marker.size') marker_size: any;
	@Input('marker.size.height') marker_size_height: any;
	@Input('marker.size.width') marker_size_width: any;
	@Input('marker.visible') marker_visible: any;
	@Input('open') open: any;
	@Input('text') text: any;
	@Input('x') x: any;
	@Input('y') y: any;

    
    constructor( @Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-series>e-points',
    queries: {
        children: new ContentChildren(ChartPointDirective)
    }
})
export class ChartPointsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super('points')
        }
}

@Directive({
    selector: 'e-seriescollection>e-series',
})
export class ChartSeriesDirective extends ComplexTagElement {

	@Input('bearFillColor') bearFillColor: any;
	@Input('border') border: any;
	@Input('border.color') border_color: any;
	@Input('border.width') border_width: any;
	@Input('border.dashArray') border_dashArray: any;
	@Input('animationDuration') animationDuration: any;
	@Input('bullFillColor') bullFillColor: any;
	@Input('columnFacet') columnFacet: any;
	@Input('columnWidth') columnWidth: any;
	@Input('columnSpacing') columnSpacing: any;
	@Input('stackingGroup') stackingGroup: any;
	@Input('dashArray') dashArray: any;
	@Input('dataSource') dataSource: any;
	@Input('cardinalSplineTension') cardinalSplineTension: any;
	@Input('doughnutCoefficient') doughnutCoefficient: any;
	@Input('doughnutSize') doughnutSize: any;
	@Input('drawType') drawType: any;
	@Input('enableAnimation') enableAnimation: any;
	@Input('enableSmartLabels') enableSmartLabels: any;
	@Input('endAngle') endAngle: any;
	@Input('explode') explode: any;
	@Input('explodeAll') explodeAll: any;
	@Input('explodeIndex') explodeIndex: any;
	@Input('explodeOffset') explodeOffset: any;
	@Input('fill') fill: any;
	@Input('font') font: any;
	@Input('font.color') font_color: any;
	@Input('font.fontFamily') font_fontFamily: any;
	@Input('font.fontStyle') font_fontStyle: any;
	@Input('font.fontWeight') font_fontWeight: any;
	@Input('font.opacity') font_opacity: any;
	@Input('font.size') font_size: any;
	@Input('funnelHeight') funnelHeight: any;
	@Input('funnelWidth') funnelWidth: any;
	@Input('gapRatio') gapRatio: any;
	@Input('isClosed') isClosed: any;
	@Input('isStacking') isStacking: any;
	@Input('isTransposed') isTransposed: any;
	@Input('showMedian') showMedian: any;
	@Input('labelPosition') labelPosition: any;
	@Input('splitMode') splitMode: any;
	@Input('boxPlotMode') boxPlotMode: any;
	@Input('bubbleOptions') bubbleOptions: any;
	@Input('bubbleOptions.radiusMode') bubbleOptions_radiusMode: any;
	@Input('bubbleOptions.minRadius') bubbleOptions_minRadius: any;
	@Input('bubbleOptions.maxRadius') bubbleOptions_maxRadius: any;
	@Input('splineType') splineType: any;
	@Input('lineCap') lineCap: any;
	@Input('lineJoin') lineJoin: any;
	@Input('marker') marker: any;
	@Input('marker.border') marker_border: any;
	@Input('marker.border.color') marker_border_color: any;
	@Input('marker.border.width') marker_border_width: any;
	@Input('marker.dataLabel') marker_dataLabel: any;
	@Input('marker.dataLabel.angle') marker_dataLabel_angle: any;
	@Input('marker.dataLabel.maximumLabelWidth') marker_dataLabel_maximumLabelWidth: any;
	@Input('marker.dataLabel.enableWrap') marker_dataLabel_enableWrap: any;
	@Input('marker.dataLabel.enableContrastColor') marker_dataLabel_enableContrastColor: any;
	@Input('marker.dataLabel.border') marker_dataLabel_border: any;
	@Input('marker.dataLabel.border.color') marker_dataLabel_border_color: any;
	@Input('marker.dataLabel.border.width') marker_dataLabel_border_width: any;
	@Input('marker.dataLabel.connectorLine') marker_dataLabel_connectorLine: any;
	@Input('marker.dataLabel.connectorLine.type') marker_dataLabel_connectorLine_type: any;
	@Input('marker.dataLabel.connectorLine.width') marker_dataLabel_connectorLine_width: any;
	@Input('marker.dataLabel.connectorLine.color') marker_dataLabel_connectorLine_color: any;
	@Input('marker.dataLabel.connectorLine.height') marker_dataLabel_connectorLine_height: any;
	@Input('marker.dataLabel.fill') marker_dataLabel_fill: any;
	@Input('marker.dataLabel.font') marker_dataLabel_font: any;
	@Input('marker.dataLabel.font.fontFamily') marker_dataLabel_font_fontFamily: any;
	@Input('marker.dataLabel.font.color') marker_dataLabel_font_color: any;
	@Input('marker.dataLabel.font.fontStyle') marker_dataLabel_font_fontStyle: any;
	@Input('marker.dataLabel.font.fontWeight') marker_dataLabel_font_fontWeight: any;
	@Input('marker.dataLabel.font.opacity') marker_dataLabel_font_opacity: any;
	@Input('marker.dataLabel.font.size') marker_dataLabel_font_size: any;
	@Input('marker.dataLabel.horizontalTextAlignment') marker_dataLabel_horizontalTextAlignment: any;
	@Input('marker.dataLabel.margin') marker_dataLabel_margin: any;
	@Input('marker.dataLabel.margin.bottom') marker_dataLabel_margin_bottom: any;
	@Input('marker.dataLabel.margin.left') marker_dataLabel_margin_left: any;
	@Input('marker.dataLabel.margin.right') marker_dataLabel_margin_right: any;
	@Input('marker.dataLabel.margin.top') marker_dataLabel_margin_top: any;
	@Input('marker.dataLabel.opacity') marker_dataLabel_opacity: any;
	@Input('marker.dataLabel.shape') marker_dataLabel_shape: any;
	@Input('marker.dataLabel.textMappingName') marker_dataLabel_textMappingName: any;
	@Input('marker.dataLabel.textPosition') marker_dataLabel_textPosition: any;
	@Input('marker.dataLabel.verticalTextAlignment') marker_dataLabel_verticalTextAlignment: any;
	@Input('marker.dataLabel.visible') marker_dataLabel_visible: any;
	@Input('marker.dataLabel.template') marker_dataLabel_template: any;
	@Input('marker.dataLabel.offset') marker_dataLabel_offset: any;
	@Input('marker.dataLabel.offset.x') marker_dataLabel_offset_x: any;
	@Input('marker.dataLabel.offset.y') marker_dataLabel_offset_y: any;
	@Input('marker.fill') marker_fill: any;
	@Input('marker.imageUrl') marker_imageUrl: any;
	@Input('marker.opacity') marker_opacity: any;
	@Input('marker.shape') marker_shape: any;
	@Input('marker.size') marker_size: any;
	@Input('marker.size.height') marker_size_height: any;
	@Input('marker.size.width') marker_size_width: any;
	@Input('marker.visible') marker_visible: any;
	@Input('name') name: any;
	@Input('opacity') opacity: any;
	@Input('outlierSettings') outlierSettings: any;
	@Input('outlierSettings.shape') outlierSettings_shape: any;
	@Input('outlierSettings.size') outlierSettings_size: any;
	@Input('outlierSettings.size.height') outlierSettings_size_height: any;
	@Input('outlierSettings.size.width') outlierSettings_size_width: any;
	@Input('palette') palette: any;
	@Input('pieCoefficient') pieCoefficient: any;
	@Input('pieOfPieCoefficient') pieOfPieCoefficient: any;
	@Input('splitValue') splitValue: any;
	@Input('gapWidth') gapWidth: any;
	@Input('emptyPointSettings') emptyPointSettings: any;
	@Input('emptyPointSettings.visible') emptyPointSettings_visible: any;
	@Input('emptyPointSettings.displayMode') emptyPointSettings_displayMode: any;
	@Input('emptyPointSettings.style') emptyPointSettings_style: any;
	@Input('emptyPointSettings.style.color') emptyPointSettings_style_color: any;
	@Input('emptyPointSettings.style.border') emptyPointSettings_style_border: any;
	@Input('emptyPointSettings.style.border.color') emptyPointSettings_style_border_color: any;
	@Input('emptyPointSettings.style.border.width') emptyPointSettings_style_border_width: any;
	@Input('positiveFill') positiveFill: any;
	@Input('connectorLine') connectorLine: any;
	@Input('connectorLine.width') connectorLine_width: any;
	@Input('connectorLine.color') connectorLine_color: any;
	@Input('connectorLine.dashArray') connectorLine_dashArray: any;
	@Input('connectorLine.opacity') connectorLine_opacity: any;
	@Input('dragSettings') dragSettings: any;
	@Input('dragSettings.enable') dragSettings_enable: any;
	@Input('dragSettings.type') dragSettings_type: any;
	@Input('errorBar') errorBar: any;
	@Input('errorBar.visibility') errorBar_visibility: any;
	@Input('errorBar.type') errorBar_type: any;
	@Input('errorBar.mode') errorBar_mode: any;
	@Input('errorBar.direction') errorBar_direction: any;
	@Input('errorBar.verticalErrorValue') errorBar_verticalErrorValue: any;
	@Input('errorBar.horizontalErrorValue') errorBar_horizontalErrorValue: any;
	@Input('errorBar.horizontalPositiveErrorValue') errorBar_horizontalPositiveErrorValue: any;
	@Input('errorBar.horizontalNegativeErrorValue') errorBar_horizontalNegativeErrorValue: any;
	@Input('errorBar.verticalPositiveErrorValue') errorBar_verticalPositiveErrorValue: any;
	@Input('errorBar.verticalNegativeErrorValue') errorBar_verticalNegativeErrorValue: any;
	@Input('errorBar.fill') errorBar_fill: any;
	@Input('errorBar.width') errorBar_width: any;
	@Input('errorBar.cap') errorBar_cap: any;
	@Input('errorBar.cap.visible') errorBar_cap_visible: any;
	@Input('errorBar.cap.width') errorBar_cap_width: any;
	@Input('errorBar.cap.length') errorBar_cap_length: any;
	@Input('errorBar.cap.fill') errorBar_cap_fill: any;
	@Input('points') points: any;
	@Input('pyramidMode') pyramidMode: any;
	@Input('query') query: any;
	@Input('startAngle') startAngle: any;
	@Input('cornerRadius') cornerRadius: any;
	@Input('cornerRadius.topLeft') cornerRadius_topLeft: any;
	@Input('cornerRadius.topRight') cornerRadius_topRight: any;
	@Input('cornerRadius.bottomLeft') cornerRadius_bottomLeft: any;
	@Input('cornerRadius.bottomRight') cornerRadius_bottomRight: any;
	@Input('tooltip') tooltip: any;
	@Input('tooltip.border') tooltip_border: any;
	@Input('tooltip.border.color') tooltip_border_color: any;
	@Input('tooltip.border.width') tooltip_border_width: any;
	@Input('tooltip.rx') tooltip_rx: any;
	@Input('tooltip.ry') tooltip_ry: any;
	@Input('tooltip.duration') tooltip_duration: any;
	@Input('tooltip.enableAnimation') tooltip_enableAnimation: any;
	@Input('tooltip.fill') tooltip_fill: any;
	@Input('tooltip.format') tooltip_format: any;
	@Input('tooltip.opacity') tooltip_opacity: any;
	@Input('tooltip.template') tooltip_template: any;
	@Input('tooltip.visible') tooltip_visible: any;
	@Input('type') type: any;
	@Input('visibility') visibility: any;
	@Input('visibleOnLegend') visibleOnLegend: any;
	@Input('xAxisName') xAxisName: any;
	@Input('xName') xName: any;
	@Input('yAxisName') yAxisName: any;
	@Input('yName') yName: any;
	@Input('high') high: any;
	@Input('low') low: any;
	@Input('open') open: any;
	@Input('close') close: any;
	@Input('pointColorMappingName') pointColorMappingName: any;
	@Input('zOrder') zOrder: any;
	@Input('size') size: any;
	@Input('trendlines') trendlines: any;
	@Input('highlightSettings') highlightSettings: any;
	@Input('highlightSettings.enable') highlightSettings_enable: any;
	@Input('highlightSettings.mode') highlightSettings_mode: any;
	@Input('highlightSettings.color') highlightSettings_color: any;
	@Input('highlightSettings.opacity') highlightSettings_opacity: any;
	@Input('highlightSettings.border') highlightSettings_border: any;
	@Input('highlightSettings.border.color') highlightSettings_border_color: any;
	@Input('highlightSettings.border.width') highlightSettings_border_width: any;
	@Input('highlightSettings.pattern') highlightSettings_pattern: any;
	@Input('highlightSettings.customPattern') highlightSettings_customPattern: any;
	@Input('selectionSettings') selectionSettings: any;
	@Input('selectionSettings.enable') selectionSettings_enable: any;
	@Input('selectionSettings.mode') selectionSettings_mode: any;
	@Input('selectionSettings.type') selectionSettings_type: any;
	@Input('selectionSettings.rangeType') selectionSettings_rangeType: any;
	@Input('selectionSettings.color') selectionSettings_color: any;
	@Input('selectionSettings.opacity') selectionSettings_opacity: any;
	@Input('selectionSettings.border') selectionSettings_border: any;
	@Input('selectionSettings.border.color') selectionSettings_border_color: any;
	@Input('selectionSettings.border.width') selectionSettings_border_width: any;
	@Input('selectionSettings.pattern') selectionSettings_pattern: any;
	@Input('selectionSettings.customPattern') selectionSettings_customPattern: any;

	@ContentChild(ChartTrendlinesDirective) tag_Trendlines: any;
	@ContentChild(ChartPointsDirective) tag_points: any;
    
    constructor( @Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super(['Trendlines', 'points']);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-chart>e-seriescollection',
    queries: {
        children: new ContentChildren(ChartSeriesDirective)
    }
})
export class ChartSeriesCollectionDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super('series')
        }
}

@Directive({
    selector: 'e-chart-indicators>e-chart-indicator',
})
export class ChartIndicatorDirective extends ComplexTagElement {

	@Input('dPeriod') dPeriod: any;
	@Input('enableAnimation') enableAnimation: any;
	@Input('animationDuration') animationDuration: any;
	@Input('fill') fill: any;
	@Input('histogram') histogram: any;
	@Input('histogram.border') histogram_border: any;
	@Input('histogram.border.color') histogram_border_color: any;
	@Input('histogram.border.width') histogram_border_width: any;
	@Input('histogram.fill') histogram_fill: any;
	@Input('histogram.opacity') histogram_opacity: any;
	@Input('kPeriod') kPeriod: any;
	@Input('longPeriod') longPeriod: any;
	@Input('lowerLine') lowerLine: any;
	@Input('lowerLine.fill') lowerLine_fill: any;
	@Input('lowerLine.width') lowerLine_width: any;
	@Input('macdLine') macdLine: any;
	@Input('macdLine.fill') macdLine_fill: any;
	@Input('macdLine.width') macdLine_width: any;
	@Input('macdType') macdType: any;
	@Input('period') period: any;
	@Input('periodLine') periodLine: any;
	@Input('periodLine.fill') periodLine_fill: any;
	@Input('periodLine.width') periodLine_width: any;
	@Input('seriesName') seriesName: any;
	@Input('shortPeriod') shortPeriod: any;
	@Input('standardDeviations') standardDeviations: any;
	@Input('tooltip') tooltip: any;
	@Input('tooltip.border') tooltip_border: any;
	@Input('tooltip.border.color') tooltip_border_color: any;
	@Input('tooltip.border.width') tooltip_border_width: any;
	@Input('tooltip.duration') tooltip_duration: any;
	@Input('tooltip.enableAnimation') tooltip_enableAnimation: any;
	@Input('tooltip.format') tooltip_format: any;
	@Input('tooltip.fill') tooltip_fill: any;
	@Input('tooltip.opacity') tooltip_opacity: any;
	@Input('tooltip.visible') tooltip_visible: any;
	@Input('trigger') trigger: any;
	@Input('visibility') visibility: any;
	@Input('type') type: any;
	@Input('upperLine') upperLine: any;
	@Input('upperLine.fill') upperLine_fill: any;
	@Input('upperLine.width') upperLine_width: any;
	@Input('width') width: any;
	@Input('xAxisName') xAxisName: any;
	@Input('yAxisName') yAxisName: any;

    
    constructor( @Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-chart>e-chart-indicators',
    queries: {
        children: new ContentChildren(ChartIndicatorDirective)
    }
})
export class ChartIndicatorsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super('indicators')
        }
}

@Directive({
    selector: 'e-annotations>e-annotation',
})
export class ChartAnnotationDirective extends ComplexTagElement {

	@Input('angle') angle: any;
	@Input('content') content: any;
	@Input('coordinateUnit') coordinateUnit: any;
	@Input('horizontalAlignment') horizontalAlignment: any;
	@Input('margin') margin: any;
	@Input('margin.bottom') margin_bottom: any;
	@Input('margin.left') margin_left: any;
	@Input('margin.right') margin_right: any;
	@Input('margin.top') margin_top: any;
	@Input('opacity') opacity: any;
	@Input('region') region: any;
	@Input('verticalAlignment') verticalAlignment: any;
	@Input('visible') visible: any;
	@Input('x') x: any;
	@Input('xAxisName') xAxisName: any;
	@Input('y') y: any;
	@Input('yAxisName') yAxisName: any;

    
    constructor( @Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-chart>e-annotations',
    queries: {
        children: new ContentChildren(ChartAnnotationDirective)
    }
})
export class ChartAnnotationsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super('annotations')
        }
}

@Directive({
    selector: 'e-primaryxaxis-striplinecollection>e-primaryxaxis-stripline',
})
export class ChartPrimaryXAxisStripLineDirective extends ComplexTagElement {

	@Input('borderColor') borderColor: any;
	@Input('color') color: any;
	@Input('end') end: any;
	@Input('font') font: any;
	@Input('font.color') font_color: any;
	@Input('font.fontFamily') font_fontFamily: any;
	@Input('font.fontStyle') font_fontStyle: any;
	@Input('font.fontWeight') font_fontWeight: any;
	@Input('font.opacity') font_opacity: any;
	@Input('font.size') font_size: any;
	@Input('start') start: any;
	@Input('startFromAxis') startFromAxis: any;
	@Input('text') text: any;
	@Input('textAlignment') textAlignment: any;
	@Input('visible') visible: any;
	@Input('width') width: any;
	@Input('zIndex') zIndex: any;

    
    constructor( @Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-chart>e-primaryxaxis-striplinecollection',
    queries: {
        children: new ContentChildren(ChartPrimaryXAxisStripLineDirective)
    }
})
export class ChartPrimaryXAxisStripLineCollectionDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super('primaryXAxis.stripLine')
        }
}

@Directive({
    selector: 'e-primaryyaxis-striplinecollection>e-primaryyaxis-stripline',
})
export class ChartPrimaryYAxisStripLineDirective extends ComplexTagElement {

	@Input('borderColor') borderColor: any;
	@Input('color') color: any;
	@Input('end') end: any;
	@Input('font') font: any;
	@Input('font.color') font_color: any;
	@Input('font.fontFamily') font_fontFamily: any;
	@Input('font.fontStyle') font_fontStyle: any;
	@Input('font.fontWeight') font_fontWeight: any;
	@Input('font.opacity') font_opacity: any;
	@Input('font.size') font_size: any;
	@Input('start') start: any;
	@Input('startFromAxis') startFromAxis: any;
	@Input('text') text: any;
	@Input('textAlignment') textAlignment: any;
	@Input('visible') visible: any;
	@Input('width') width: any;
	@Input('zIndex') zIndex: any;

    
    constructor( @Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-chart>e-primaryyaxis-striplinecollection',
    queries: {
        children: new ContentChildren(ChartPrimaryYAxisStripLineDirective)
    }
})
export class ChartPrimaryYAxisStripLineCollectionDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super('primaryYAxis.stripLine')
        }
}

@Directive({
    selector: 'e-rowdefinitions>e-rowdefinition',
})
export class ChartRowDefinitionDirective extends ComplexTagElement {

	@Input('unit') unit: any;
	@Input('rowHeight') rowHeight: any;
	@Input('lineColor') lineColor: any;
	@Input('lineWidth') lineWidth: any;

    
    constructor( @Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-chart>e-rowdefinitions',
    queries: {
        children: new ContentChildren(ChartRowDefinitionDirective)
    }
})
export class ChartRowDefinitionsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super('rowDefinitions')
        }
}

@Directive({
    selector: 'e-columndefinitions>e-columndefinition',
})
export class ChartColumnDefinitionDirective extends ComplexTagElement {

	@Input('unit') unit: any;
	@Input('columnWidth') columnWidth: any;
	@Input('lineColor') lineColor: any;
	@Input('lineWidth') lineWidth: any;

    
    constructor( @Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-chart>e-columndefinitions',
    queries: {
        children: new ContentChildren(ChartColumnDefinitionDirective)
    }
})
export class ChartColumnDefinitionsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => ChartComponent)) widget: EJComponents<any, any>) {
        super('columnDefinitions')
        }
}




@Component({
    selector: 'ej-chart',
    template: ''})
export class ChartComponent extends EJComponents<any, any> {
	@Input('background') background_input: any;
	@Input('backGroundImageUrl') backGroundImageUrl_input: any;
	@Input('border') border_input: any;
	@Input('exportSettings') exportSettings_input: any;
	@Input('chartArea') chartArea_input: any;
	@Input('commonSeriesOptions') commonSeriesOptions_input: any;
	@Input('selectedDataPointIndexes') selectedDataPointIndexes_input: any;
	@Input('crosshair') crosshair_input: any;
	@Input('depth') depth_input: any;
	@Input('enable3D') enable3D_input: any;
	@Input('enableCanvasRendering') enableCanvasRendering_input: any;
	@Input('initSeriesRender') initSeriesRender_input: any;
	@Input('enableRotation') enableRotation_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('legend') legend_input: any;
	@Input('locale') locale_input: any;
	@Input('palette') palette_input: any;
	@Input('Margin') Margin_input: any;
	@Input('perspectiveAngle') perspectiveAngle_input: any;
	@Input('primaryXAxis') primaryXAxis_input: any;
	@Input('primaryYAxis') primaryYAxis_input: any;
	@Input('rotation') rotation_input: any;
	@Input('sideBySideSeriesPlacement') sideBySideSeriesPlacement_input: any;
	@Input('size') size_input: any;
	@Input('theme') theme_input: any;
	@Input('tilt') tilt_input: any;
	@Input('title') title_input: any;
	@Input('wallSize') wallSize_input: any;
	@Input('zooming') zooming_input: any;
	@Input('border.color') border_color_input: any;
	@Input('border.opacity') border_opacity_input: any;
	@Input('border.width') border_width_input: any;
	@Input('exportSettings.filename') exportSettings_filename_input: any;
	@Input('exportSettings.action') exportSettings_action_input: any;
	@Input('exportSettings.angle') exportSettings_angle_input: any;
	@Input('exportSettings.type') exportSettings_type_input: any;
	@Input('exportSettings.orientation') exportSettings_orientation_input: any;
	@Input('exportSettings.mode') exportSettings_mode_input: any;
	@Input('exportSettings.multipleExport') exportSettings_multipleExport_input: any;
	@Input('chartArea.background') chartArea_background_input: any;
	@Input('chartArea.border') chartArea_border_input: any;
	@Input('chartArea.border.color') chartArea_border_color_input: any;
	@Input('chartArea.border.opacity') chartArea_border_opacity_input: any;
	@Input('chartArea.border.width') chartArea_border_width_input: any;
	@Input('commonSeriesOptions.animationDuration') commonSeriesOptions_animationDuration_input: any;
	@Input('commonSeriesOptions.border') commonSeriesOptions_border_input: any;
	@Input('commonSeriesOptions.border.color') commonSeriesOptions_border_color_input: any;
	@Input('commonSeriesOptions.border.dashArray') commonSeriesOptions_border_dashArray_input: any;
	@Input('commonSeriesOptions.border.width') commonSeriesOptions_border_width_input: any;
	@Input('commonSeriesOptions.columnFacet') commonSeriesOptions_columnFacet_input: any;
	@Input('commonSeriesOptions.columnWidth') commonSeriesOptions_columnWidth_input: any;
	@Input('commonSeriesOptions.columnSpacing') commonSeriesOptions_columnSpacing_input: any;
	@Input('commonSeriesOptions.visibleOnLegend') commonSeriesOptions_visibleOnLegend_input: any;
	@Input('commonSeriesOptions.stackingGroup') commonSeriesOptions_stackingGroup_input: any;
	@Input('commonSeriesOptions.dashArray') commonSeriesOptions_dashArray_input: any;
	@Input('commonSeriesOptions.dataSource') commonSeriesOptions_dataSource_input: any;
	@Input('commonSeriesOptions.cardinalSplineTension') commonSeriesOptions_cardinalSplineTension_input: any;
	@Input('commonSeriesOptions.doughnutCoefficient') commonSeriesOptions_doughnutCoefficient_input: any;
	@Input('commonSeriesOptions.doughnutSize') commonSeriesOptions_doughnutSize_input: any;
	@Input('commonSeriesOptions.drawType') commonSeriesOptions_drawType_input: any;
	@Input('commonSeriesOptions.enableAnimation') commonSeriesOptions_enableAnimation_input: any;
	@Input('commonSeriesOptions.enableSmartLabels') commonSeriesOptions_enableSmartLabels_input: any;
	@Input('commonSeriesOptions.endAngle') commonSeriesOptions_endAngle_input: any;
	@Input('commonSeriesOptions.explode') commonSeriesOptions_explode_input: any;
	@Input('commonSeriesOptions.explodeAll') commonSeriesOptions_explodeAll_input: any;
	@Input('commonSeriesOptions.explodeIndex') commonSeriesOptions_explodeIndex_input: any;
	@Input('commonSeriesOptions.explodeOffset') commonSeriesOptions_explodeOffset_input: any;
	@Input('commonSeriesOptions.fill') commonSeriesOptions_fill_input: any;
	@Input('commonSeriesOptions.font') commonSeriesOptions_font_input: any;
	@Input('commonSeriesOptions.font.color') commonSeriesOptions_font_color_input: any;
	@Input('commonSeriesOptions.font.fontFamily') commonSeriesOptions_font_fontFamily_input: any;
	@Input('commonSeriesOptions.font.fontStyle') commonSeriesOptions_font_fontStyle_input: any;
	@Input('commonSeriesOptions.font.fontWeight') commonSeriesOptions_font_fontWeight_input: any;
	@Input('commonSeriesOptions.font.opacity') commonSeriesOptions_font_opacity_input: any;
	@Input('commonSeriesOptions.font.size') commonSeriesOptions_font_size_input: any;
	@Input('commonSeriesOptions.funnelHeight') commonSeriesOptions_funnelHeight_input: any;
	@Input('commonSeriesOptions.funnelWidth') commonSeriesOptions_funnelWidth_input: any;
	@Input('commonSeriesOptions.gapRatio') commonSeriesOptions_gapRatio_input: any;
	@Input('commonSeriesOptions.isClosed') commonSeriesOptions_isClosed_input: any;
	@Input('commonSeriesOptions.isStacking') commonSeriesOptions_isStacking_input: any;
	@Input('commonSeriesOptions.isTransposed') commonSeriesOptions_isTransposed_input: any;
	@Input('commonSeriesOptions.showMedian') commonSeriesOptions_showMedian_input: any;
	@Input('commonSeriesOptions.labelPosition') commonSeriesOptions_labelPosition_input: any;
	@Input('commonSeriesOptions.splitMode') commonSeriesOptions_splitMode_input: any;
	@Input('commonSeriesOptions.boxPlotMode') commonSeriesOptions_boxPlotMode_input: any;
	@Input('commonSeriesOptions.bubbleOptions') commonSeriesOptions_bubbleOptions_input: any;
	@Input('commonSeriesOptions.bubbleOptions.radiusMode') commonSeriesOptions_bubbleOptions_radiusMode_input: any;
	@Input('commonSeriesOptions.bubbleOptions.minRadius') commonSeriesOptions_bubbleOptions_minRadius_input: any;
	@Input('commonSeriesOptions.bubbleOptions.maxRadius') commonSeriesOptions_bubbleOptions_maxRadius_input: any;
	@Input('commonSeriesOptions.splineType') commonSeriesOptions_splineType_input: any;
	@Input('commonSeriesOptions.lineCap') commonSeriesOptions_lineCap_input: any;
	@Input('commonSeriesOptions.lineJoin') commonSeriesOptions_lineJoin_input: any;
	@Input('commonSeriesOptions.marker') commonSeriesOptions_marker_input: any;
	@Input('commonSeriesOptions.marker.border') commonSeriesOptions_marker_border_input: any;
	@Input('commonSeriesOptions.marker.dataLabel') commonSeriesOptions_marker_dataLabel_input: any;
	@Input('commonSeriesOptions.marker.fill') commonSeriesOptions_marker_fill_input: any;
	@Input('commonSeriesOptions.marker.imageUrl') commonSeriesOptions_marker_imageUrl_input: any;
	@Input('commonSeriesOptions.marker.opacity') commonSeriesOptions_marker_opacity_input: any;
	@Input('commonSeriesOptions.marker.shape') commonSeriesOptions_marker_shape_input: any;
	@Input('commonSeriesOptions.marker.size') commonSeriesOptions_marker_size_input: any;
	@Input('commonSeriesOptions.marker.visible') commonSeriesOptions_marker_visible_input: any;
	@Input('commonSeriesOptions.opacity') commonSeriesOptions_opacity_input: any;
	@Input('commonSeriesOptions.outlierSettings') commonSeriesOptions_outlierSettings_input: any;
	@Input('commonSeriesOptions.outlierSettings.shape') commonSeriesOptions_outlierSettings_shape_input: any;
	@Input('commonSeriesOptions.outlierSettings.size') commonSeriesOptions_outlierSettings_size_input: any;
	@Input('commonSeriesOptions.palette') commonSeriesOptions_palette_input: any;
	@Input('commonSeriesOptions.pieCoefficient') commonSeriesOptions_pieCoefficient_input: any;
	@Input('commonSeriesOptions.pieOfPieCoefficient') commonSeriesOptions_pieOfPieCoefficient_input: any;
	@Input('commonSeriesOptions.splitValue') commonSeriesOptions_splitValue_input: any;
	@Input('commonSeriesOptions.gapWidth') commonSeriesOptions_gapWidth_input: any;
	@Input('commonSeriesOptions.pointColorMappingName') commonSeriesOptions_pointColorMappingName_input: any;
	@Input('commonSeriesOptions.pyramidMode') commonSeriesOptions_pyramidMode_input: any;
	@Input('commonSeriesOptions.startAngle') commonSeriesOptions_startAngle_input: any;
	@Input('commonSeriesOptions.cornerRadius') commonSeriesOptions_cornerRadius_input: any;
	@Input('commonSeriesOptions.cornerRadius.topLeft') commonSeriesOptions_cornerRadius_topLeft_input: any;
	@Input('commonSeriesOptions.cornerRadius.topRight') commonSeriesOptions_cornerRadius_topRight_input: any;
	@Input('commonSeriesOptions.cornerRadius.bottomLeft') commonSeriesOptions_cornerRadius_bottomLeft_input: any;
	@Input('commonSeriesOptions.cornerRadius.bottomRight') commonSeriesOptions_cornerRadius_bottomRight_input: any;
	@Input('commonSeriesOptions.tooltip') commonSeriesOptions_tooltip_input: any;
	@Input('commonSeriesOptions.tooltip.border') commonSeriesOptions_tooltip_border_input: any;
	@Input('commonSeriesOptions.tooltip.rx') commonSeriesOptions_tooltip_rx_input: any;
	@Input('commonSeriesOptions.tooltip.ry') commonSeriesOptions_tooltip_ry_input: any;
	@Input('commonSeriesOptions.tooltip.duration') commonSeriesOptions_tooltip_duration_input: any;
	@Input('commonSeriesOptions.tooltip.enableAnimation') commonSeriesOptions_tooltip_enableAnimation_input: any;
	@Input('commonSeriesOptions.tooltip.fill') commonSeriesOptions_tooltip_fill_input: any;
	@Input('commonSeriesOptions.tooltip.format') commonSeriesOptions_tooltip_format_input: any;
	@Input('commonSeriesOptions.tooltip.opacity') commonSeriesOptions_tooltip_opacity_input: any;
	@Input('commonSeriesOptions.tooltip.template') commonSeriesOptions_tooltip_template_input: any;
	@Input('commonSeriesOptions.tooltip.visible') commonSeriesOptions_tooltip_visible_input: any;
	@Input('commonSeriesOptions.type') commonSeriesOptions_type_input: any;
	@Input('commonSeriesOptions.xAxisName') commonSeriesOptions_xAxisName_input: any;
	@Input('commonSeriesOptions.xName') commonSeriesOptions_xName_input: any;
	@Input('commonSeriesOptions.yAxisName') commonSeriesOptions_yAxisName_input: any;
	@Input('commonSeriesOptions.yName') commonSeriesOptions_yName_input: any;
	@Input('commonSeriesOptions.high') commonSeriesOptions_high_input: any;
	@Input('commonSeriesOptions.low') commonSeriesOptions_low_input: any;
	@Input('commonSeriesOptions.open') commonSeriesOptions_open_input: any;
	@Input('commonSeriesOptions.close') commonSeriesOptions_close_input: any;
	@Input('commonSeriesOptions.zOrder') commonSeriesOptions_zOrder_input: any;
	@Input('commonSeriesOptions.size') commonSeriesOptions_size_input: any;
	@Input('commonSeriesOptions.emptyPointSettings') commonSeriesOptions_emptyPointSettings_input: any;
	@Input('commonSeriesOptions.emptyPointSettings.visible') commonSeriesOptions_emptyPointSettings_visible_input: any;
	@Input('commonSeriesOptions.emptyPointSettings.displayMode') commonSeriesOptions_emptyPointSettings_displayMode_input: any;
	@Input('commonSeriesOptions.emptyPointSettings.style') commonSeriesOptions_emptyPointSettings_style_input: any;
	@Input('commonSeriesOptions.positiveFill') commonSeriesOptions_positiveFill_input: any;
	@Input('commonSeriesOptions.connectorLine') commonSeriesOptions_connectorLine_input: any;
	@Input('commonSeriesOptions.connectorLine.width') commonSeriesOptions_connectorLine_width_input: any;
	@Input('commonSeriesOptions.connectorLine.color') commonSeriesOptions_connectorLine_color_input: any;
	@Input('commonSeriesOptions.connectorLine.dashArray') commonSeriesOptions_connectorLine_dashArray_input: any;
	@Input('commonSeriesOptions.connectorLine.opacity') commonSeriesOptions_connectorLine_opacity_input: any;
	@Input('commonSeriesOptions.dragSettings') commonSeriesOptions_dragSettings_input: any;
	@Input('commonSeriesOptions.dragSettings.enable') commonSeriesOptions_dragSettings_enable_input: any;
	@Input('commonSeriesOptions.dragSettings.type') commonSeriesOptions_dragSettings_type_input: any;
	@Input('commonSeriesOptions.errorBar') commonSeriesOptions_errorBar_input: any;
	@Input('commonSeriesOptions.errorBar.visibility') commonSeriesOptions_errorBar_visibility_input: any;
	@Input('commonSeriesOptions.errorBar.type') commonSeriesOptions_errorBar_type_input: any;
	@Input('commonSeriesOptions.errorBar.mode') commonSeriesOptions_errorBar_mode_input: any;
	@Input('commonSeriesOptions.errorBar.direction') commonSeriesOptions_errorBar_direction_input: any;
	@Input('commonSeriesOptions.errorBar.verticalErrorValue') commonSeriesOptions_errorBar_verticalErrorValue_input: any;
	@Input('commonSeriesOptions.errorBar.horizontalErrorValue') commonSeriesOptions_errorBar_horizontalErrorValue_input: any;
	@Input('commonSeriesOptions.errorBar.horizontalPositiveErrorValue') commonSeriesOptions_errorBar_horizontalPositiveErrorValue_input: any;
	@Input('commonSeriesOptions.errorBar.horizontalNegativeErrorValue') commonSeriesOptions_errorBar_horizontalNegativeErrorValue_input: any;
	@Input('commonSeriesOptions.errorBar.verticalPositiveErrorValue') commonSeriesOptions_errorBar_verticalPositiveErrorValue_input: any;
	@Input('commonSeriesOptions.errorBar.verticalNegativeErrorValue') commonSeriesOptions_errorBar_verticalNegativeErrorValue_input: any;
	@Input('commonSeriesOptions.errorBar.fill') commonSeriesOptions_errorBar_fill_input: any;
	@Input('commonSeriesOptions.errorBar.width') commonSeriesOptions_errorBar_width_input: any;
	@Input('commonSeriesOptions.errorBar.cap') commonSeriesOptions_errorBar_cap_input: any;
	@Input('commonSeriesOptions.highlightSettings') commonSeriesOptions_highlightSettings_input: any;
	@Input('commonSeriesOptions.highlightSettings.enable') commonSeriesOptions_highlightSettings_enable_input: any;
	@Input('commonSeriesOptions.highlightSettings.mode') commonSeriesOptions_highlightSettings_mode_input: any;
	@Input('commonSeriesOptions.highlightSettings.color') commonSeriesOptions_highlightSettings_color_input: any;
	@Input('commonSeriesOptions.highlightSettings.opacity') commonSeriesOptions_highlightSettings_opacity_input: any;
	@Input('commonSeriesOptions.highlightSettings.border') commonSeriesOptions_highlightSettings_border_input: any;
	@Input('commonSeriesOptions.highlightSettings.pattern') commonSeriesOptions_highlightSettings_pattern_input: any;
	@Input('commonSeriesOptions.highlightSettings.customPattern') commonSeriesOptions_highlightSettings_customPattern_input: any;
	@Input('commonSeriesOptions.selectionSettings') commonSeriesOptions_selectionSettings_input: any;
	@Input('commonSeriesOptions.selectionSettings.enable') commonSeriesOptions_selectionSettings_enable_input: any;
	@Input('commonSeriesOptions.selectionSettings.type') commonSeriesOptions_selectionSettings_type_input: any;
	@Input('commonSeriesOptions.selectionSettings.mode') commonSeriesOptions_selectionSettings_mode_input: any;
	@Input('commonSeriesOptions.selectionSettings.rangeType') commonSeriesOptions_selectionSettings_rangeType_input: any;
	@Input('commonSeriesOptions.selectionSettings.color') commonSeriesOptions_selectionSettings_color_input: any;
	@Input('commonSeriesOptions.selectionSettings.opacity') commonSeriesOptions_selectionSettings_opacity_input: any;
	@Input('commonSeriesOptions.selectionSettings.border') commonSeriesOptions_selectionSettings_border_input: any;
	@Input('commonSeriesOptions.selectionSettings.pattern') commonSeriesOptions_selectionSettings_pattern_input: any;
	@Input('commonSeriesOptions.selectionSettings.customPattern') commonSeriesOptions_selectionSettings_customPattern_input: any;
	@Input('crosshair.trackballTooltipSettings') crosshair_trackballTooltipSettings_input: any;
	@Input('crosshair.trackballTooltipSettings.border') crosshair_trackballTooltipSettings_border_input: any;
	@Input('crosshair.trackballTooltipSettings.fill') crosshair_trackballTooltipSettings_fill_input: any;
	@Input('crosshair.trackballTooltipSettings.rx') crosshair_trackballTooltipSettings_rx_input: any;
	@Input('crosshair.trackballTooltipSettings.ry') crosshair_trackballTooltipSettings_ry_input: any;
	@Input('crosshair.trackballTooltipSettings.opacity') crosshair_trackballTooltipSettings_opacity_input: any;
	@Input('crosshair.trackballTooltipSettings.mode') crosshair_trackballTooltipSettings_mode_input: any;
	@Input('crosshair.marker') crosshair_marker_input: any;
	@Input('crosshair.marker.border') crosshair_marker_border_input: any;
	@Input('crosshair.marker.opacity') crosshair_marker_opacity_input: any;
	@Input('crosshair.marker.size') crosshair_marker_size_input: any;
	@Input('crosshair.marker.visible') crosshair_marker_visible_input: any;
	@Input('crosshair.line') crosshair_line_input: any;
	@Input('crosshair.line.color') crosshair_line_color_input: any;
	@Input('crosshair.line.width') crosshair_line_width_input: any;
	@Input('crosshair.type') crosshair_type_input: any;
	@Input('crosshair.visible') crosshair_visible_input: any;
	@Input('legend.alignment') legend_alignment_input: any;
	@Input('legend.background') legend_background_input: any;
	@Input('legend.border') legend_border_input: any;
	@Input('legend.border.color') legend_border_color_input: any;
	@Input('legend.border.width') legend_border_width_input: any;
	@Input('legend.columnCount') legend_columnCount_input: any;
	@Input('legend.enableScrollbar') legend_enableScrollbar_input: any;
	@Input('legend.fill') legend_fill_input: any;
	@Input('legend.font') legend_font_input: any;
	@Input('legend.font.fontFamily') legend_font_fontFamily_input: any;
	@Input('legend.font.fontStyle') legend_font_fontStyle_input: any;
	@Input('legend.font.fontWeight') legend_font_fontWeight_input: any;
	@Input('legend.font.size') legend_font_size_input: any;
	@Input('legend.itemPadding') legend_itemPadding_input: any;
	@Input('legend.itemStyle') legend_itemStyle_input: any;
	@Input('legend.itemStyle.border') legend_itemStyle_border_input: any;
	@Input('legend.itemStyle.height') legend_itemStyle_height_input: any;
	@Input('legend.itemStyle.width') legend_itemStyle_width_input: any;
	@Input('legend.location') legend_location_input: any;
	@Input('legend.location.x') legend_location_x_input: any;
	@Input('legend.location.y') legend_location_y_input: any;
	@Input('legend.opacity') legend_opacity_input: any;
	@Input('legend.position') legend_position_input: any;
	@Input('legend.rowCount') legend_rowCount_input: any;
	@Input('legend.shape') legend_shape_input: any;
	@Input('legend.size') legend_size_input: any;
	@Input('legend.size.height') legend_size_height_input: any;
	@Input('legend.size.width') legend_size_width_input: any;
	@Input('legend.title') legend_title_input: any;
	@Input('legend.title.font') legend_title_font_input: any;
	@Input('legend.title.text') legend_title_text_input: any;
	@Input('legend.title.textAlignment') legend_title_textAlignment_input: any;
	@Input('legend.textOverflow') legend_textOverflow_input: any;
	@Input('legend.textWidth') legend_textWidth_input: any;
	@Input('legend.visible') legend_visible_input: any;
	@Input('legend.toggleSeriesVisibility') legend_toggleSeriesVisibility_input: any;
	@Input('primaryXAxis.alternateGridBand') primaryXAxis_alternateGridBand_input: any;
	@Input('primaryXAxis.alternateGridBand.even') primaryXAxis_alternateGridBand_even_input: any;
	@Input('primaryXAxis.alternateGridBand.odd') primaryXAxis_alternateGridBand_odd_input: any;
	@Input('primaryXAxis.crossesAt') primaryXAxis_crossesAt_input: any;
	@Input('primaryXAxis.crossesInAxis') primaryXAxis_crossesInAxis_input: any;
	@Input('primaryXAxis.isIndexed') primaryXAxis_isIndexed_input: any;
	@Input('primaryXAxis.enableAutoIntervalOnZooming') primaryXAxis_enableAutoIntervalOnZooming_input: any;
	@Input('primaryXAxis.axisLine') primaryXAxis_axisLine_input: any;
	@Input('primaryXAxis.axisLine.dashArray') primaryXAxis_axisLine_dashArray_input: any;
	@Input('primaryXAxis.axisLine.offset') primaryXAxis_axisLine_offset_input: any;
	@Input('primaryXAxis.axisLine.visible') primaryXAxis_axisLine_visible_input: any;
	@Input('primaryXAxis.axisLine.color') primaryXAxis_axisLine_color_input: any;
	@Input('primaryXAxis.axisLine.width') primaryXAxis_axisLine_width_input: any;
	@Input('primaryXAxis.columnIndex') primaryXAxis_columnIndex_input: any;
	@Input('primaryXAxis.columnSpan') primaryXAxis_columnSpan_input: any;
	@Input('primaryXAxis.crosshairLabel') primaryXAxis_crosshairLabel_input: any;
	@Input('primaryXAxis.crosshairLabel.visible') primaryXAxis_crosshairLabel_visible_input: any;
	@Input('primaryXAxis.desiredIntervals') primaryXAxis_desiredIntervals_input: any;
	@Input('primaryXAxis.labelPlacement') primaryXAxis_labelPlacement_input: any;
	@Input('primaryXAxis.edgeLabelPlacement') primaryXAxis_edgeLabelPlacement_input: any;
	@Input('primaryXAxis.enableTrim') primaryXAxis_enableTrim_input: any;
	@Input('primaryXAxis.font') primaryXAxis_font_input: any;
	@Input('primaryXAxis.font.fontFamily') primaryXAxis_font_fontFamily_input: any;
	@Input('primaryXAxis.font.fontStyle') primaryXAxis_font_fontStyle_input: any;
	@Input('primaryXAxis.font.fontWeight') primaryXAxis_font_fontWeight_input: any;
	@Input('primaryXAxis.font.opacity') primaryXAxis_font_opacity_input: any;
	@Input('primaryXAxis.font.size') primaryXAxis_font_size_input: any;
	@Input('primaryXAxis.intervalType') primaryXAxis_intervalType_input: any;
	@Input('primaryXAxis.isInversed') primaryXAxis_isInversed_input: any;
	@Input('primaryXAxis.labelFormat') primaryXAxis_labelFormat_input: any;
	@Input('primaryXAxis.labelIntersectAction') primaryXAxis_labelIntersectAction_input: any;
	@Input('primaryXAxis.labelPosition') primaryXAxis_labelPosition_input: any;
	@Input('primaryXAxis.alignment') primaryXAxis_alignment_input: any;
	@Input('primaryXAxis.labelRotation') primaryXAxis_labelRotation_input: any;
	@Input('primaryXAxis.logBase') primaryXAxis_logBase_input: any;
	@Input('primaryXAxis.majorGridLines') primaryXAxis_majorGridLines_input: any;
	@Input('primaryXAxis.majorGridLines.dashArray') primaryXAxis_majorGridLines_dashArray_input: any;
	@Input('primaryXAxis.majorGridLines.color') primaryXAxis_majorGridLines_color_input: any;
	@Input('primaryXAxis.majorGridLines.opacity') primaryXAxis_majorGridLines_opacity_input: any;
	@Input('primaryXAxis.majorGridLines.visible') primaryXAxis_majorGridLines_visible_input: any;
	@Input('primaryXAxis.majorGridLines.width') primaryXAxis_majorGridLines_width_input: any;
	@Input('primaryXAxis.majorTickLines') primaryXAxis_majorTickLines_input: any;
	@Input('primaryXAxis.majorTickLines.size') primaryXAxis_majorTickLines_size_input: any;
	@Input('primaryXAxis.majorTickLines.visible') primaryXAxis_majorTickLines_visible_input: any;
	@Input('primaryXAxis.majorTickLines.width') primaryXAxis_majorTickLines_width_input: any;
	@Input('primaryXAxis.maximumLabels') primaryXAxis_maximumLabels_input: any;
	@Input('primaryXAxis.maximumLabelWidth') primaryXAxis_maximumLabelWidth_input: any;
	@Input('primaryXAxis.minorGridLines') primaryXAxis_minorGridLines_input: any;
	@Input('primaryXAxis.minorGridLines.dashArray') primaryXAxis_minorGridLines_dashArray_input: any;
	@Input('primaryXAxis.minorGridLines.visible') primaryXAxis_minorGridLines_visible_input: any;
	@Input('primaryXAxis.minorGridLines.width') primaryXAxis_minorGridLines_width_input: any;
	@Input('primaryXAxis.minorTickLines') primaryXAxis_minorTickLines_input: any;
	@Input('primaryXAxis.minorTickLines.size') primaryXAxis_minorTickLines_size_input: any;
	@Input('primaryXAxis.minorTickLines.visible') primaryXAxis_minorTickLines_visible_input: any;
	@Input('primaryXAxis.minorTickLines.width') primaryXAxis_minorTickLines_width_input: any;
	@Input('primaryXAxis.minorTicksPerInterval') primaryXAxis_minorTicksPerInterval_input: any;
	@Input('primaryXAxis.name') primaryXAxis_name_input: any;
	@Input('primaryXAxis.opposedPosition') primaryXAxis_opposedPosition_input: any;
	@Input('primaryXAxis.orientation') primaryXAxis_orientation_input: any;
	@Input('primaryXAxis.plotOffset') primaryXAxis_plotOffset_input: any;
	@Input('primaryXAxis.range') primaryXAxis_range_input: any;
	@Input('primaryXAxis.range.min') primaryXAxis_range_min_input: any;
	@Input('primaryXAxis.range.max') primaryXAxis_range_max_input: any;
	@Input('primaryXAxis.range.interval') primaryXAxis_range_interval_input: any;
	@Input('primaryXAxis.rangePadding') primaryXAxis_rangePadding_input: any;
	@Input('primaryXAxis.roundingPlaces') primaryXAxis_roundingPlaces_input: any;
	@Input('primaryXAxis.showNextToAxisLine') primaryXAxis_showNextToAxisLine_input: any;
	@Input('primaryXAxis.tickLinesPosition') primaryXAxis_tickLinesPosition_input: any;
	@Input('primaryXAxis.labelBorder') primaryXAxis_labelBorder_input: any;
	@Input('primaryXAxis.labelBorder.color') primaryXAxis_labelBorder_color_input: any;
	@Input('primaryXAxis.labelBorder.width') primaryXAxis_labelBorder_width_input: any;
	@Input('primaryXAxis.title') primaryXAxis_title_input: any;
	@Input('primaryXAxis.title.enableTrim') primaryXAxis_title_enableTrim_input: any;
	@Input('primaryXAxis.title.font') primaryXAxis_title_font_input: any;
	@Input('primaryXAxis.title.maximumTitleWidth') primaryXAxis_title_maximumTitleWidth_input: any;
	@Input('primaryXAxis.title.text') primaryXAxis_title_text_input: any;
	@Input('primaryXAxis.title.visible') primaryXAxis_title_visible_input: any;
	@Input('primaryXAxis.title.offset') primaryXAxis_title_offset_input: any;
	@Input('primaryXAxis.title.position') primaryXAxis_title_position_input: any;
	@Input('primaryXAxis.title.alignment') primaryXAxis_title_alignment_input: any;
	@Input('primaryXAxis.valueType') primaryXAxis_valueType_input: any;
	@Input('primaryXAxis.visible') primaryXAxis_visible_input: any;
	@Input('primaryXAxis.zoomFactor') primaryXAxis_zoomFactor_input: any;
	@Input('primaryXAxis.zoomPosition') primaryXAxis_zoomPosition_input: any;
	@Input('primaryXAxis.scrollbarSettings') primaryXAxis_scrollbarSettings_input: any;
	@Input('primaryXAxis.scrollbarSettings.visible') primaryXAxis_scrollbarSettings_visible_input: any;
	@Input('primaryXAxis.scrollbarSettings.canResize') primaryXAxis_scrollbarSettings_canResize_input: any;
	@Input('primaryXAxis.scrollbarSettings.range') primaryXAxis_scrollbarSettings_range_input: any;
	@Input('primaryXAxis.scrollbarSettings.pointsLength') primaryXAxis_scrollbarSettings_pointsLength_input: any;
	@Input('primaryYAxis.alternateGridBand') primaryYAxis_alternateGridBand_input: any;
	@Input('primaryYAxis.alternateGridBand.even') primaryYAxis_alternateGridBand_even_input: any;
	@Input('primaryYAxis.alternateGridBand.odd') primaryYAxis_alternateGridBand_odd_input: any;
	@Input('primaryYAxis.enableAutoIntervalOnZooming') primaryYAxis_enableAutoIntervalOnZooming_input: any;
	@Input('primaryYAxis.axisLine') primaryYAxis_axisLine_input: any;
	@Input('primaryYAxis.axisLine.dashArray') primaryYAxis_axisLine_dashArray_input: any;
	@Input('primaryYAxis.axisLine.offset') primaryYAxis_axisLine_offset_input: any;
	@Input('primaryYAxis.axisLine.visible') primaryYAxis_axisLine_visible_input: any;
	@Input('primaryYAxis.axisLine.color') primaryYAxis_axisLine_color_input: any;
	@Input('primaryYAxis.axisLine.width') primaryYAxis_axisLine_width_input: any;
	@Input('primaryYAxis.crossesAt') primaryYAxis_crossesAt_input: any;
	@Input('primaryYAxis.crossesInAxis') primaryYAxis_crossesInAxis_input: any;
	@Input('primaryYAxis.crosshairLabel') primaryYAxis_crosshairLabel_input: any;
	@Input('primaryYAxis.crosshairLabel.visible') primaryYAxis_crosshairLabel_visible_input: any;
	@Input('primaryYAxis.desiredIntervals') primaryYAxis_desiredIntervals_input: any;
	@Input('primaryYAxis.labelPlacement') primaryYAxis_labelPlacement_input: any;
	@Input('primaryYAxis.edgeLabelPlacement') primaryYAxis_edgeLabelPlacement_input: any;
	@Input('primaryYAxis.enableTrim') primaryYAxis_enableTrim_input: any;
	@Input('primaryYAxis.font') primaryYAxis_font_input: any;
	@Input('primaryYAxis.font.fontFamily') primaryYAxis_font_fontFamily_input: any;
	@Input('primaryYAxis.font.fontStyle') primaryYAxis_font_fontStyle_input: any;
	@Input('primaryYAxis.font.fontWeight') primaryYAxis_font_fontWeight_input: any;
	@Input('primaryYAxis.font.opacity') primaryYAxis_font_opacity_input: any;
	@Input('primaryYAxis.font.size') primaryYAxis_font_size_input: any;
	@Input('primaryYAxis.intervalType') primaryYAxis_intervalType_input: any;
	@Input('primaryYAxis.isInversed') primaryYAxis_isInversed_input: any;
	@Input('primaryYAxis.labelFormat') primaryYAxis_labelFormat_input: any;
	@Input('primaryYAxis.labelIntersectAction') primaryYAxis_labelIntersectAction_input: any;
	@Input('primaryYAxis.labelPosition') primaryYAxis_labelPosition_input: any;
	@Input('primaryYAxis.alignment') primaryYAxis_alignment_input: any;
	@Input('primaryYAxis.logBase') primaryYAxis_logBase_input: any;
	@Input('primaryYAxis.majorGridLines') primaryYAxis_majorGridLines_input: any;
	@Input('primaryYAxis.majorGridLines.dashArray') primaryYAxis_majorGridLines_dashArray_input: any;
	@Input('primaryYAxis.majorGridLines.color') primaryYAxis_majorGridLines_color_input: any;
	@Input('primaryYAxis.majorGridLines.opacity') primaryYAxis_majorGridLines_opacity_input: any;
	@Input('primaryYAxis.majorGridLines.visible') primaryYAxis_majorGridLines_visible_input: any;
	@Input('primaryYAxis.majorGridLines.width') primaryYAxis_majorGridLines_width_input: any;
	@Input('primaryYAxis.majorTickLines') primaryYAxis_majorTickLines_input: any;
	@Input('primaryYAxis.majorTickLines.size') primaryYAxis_majorTickLines_size_input: any;
	@Input('primaryYAxis.majorTickLines.visible') primaryYAxis_majorTickLines_visible_input: any;
	@Input('primaryYAxis.majorTickLines.width') primaryYAxis_majorTickLines_width_input: any;
	@Input('primaryYAxis.maximumLabels') primaryYAxis_maximumLabels_input: any;
	@Input('primaryYAxis.maximumLabelWidth') primaryYAxis_maximumLabelWidth_input: any;
	@Input('primaryYAxis.minorGridLines') primaryYAxis_minorGridLines_input: any;
	@Input('primaryYAxis.minorGridLines.dashArray') primaryYAxis_minorGridLines_dashArray_input: any;
	@Input('primaryYAxis.minorGridLines.visible') primaryYAxis_minorGridLines_visible_input: any;
	@Input('primaryYAxis.minorGridLines.width') primaryYAxis_minorGridLines_width_input: any;
	@Input('primaryYAxis.minorTickLines') primaryYAxis_minorTickLines_input: any;
	@Input('primaryYAxis.minorTickLines.size') primaryYAxis_minorTickLines_size_input: any;
	@Input('primaryYAxis.minorTickLines.visible') primaryYAxis_minorTickLines_visible_input: any;
	@Input('primaryYAxis.minorTickLines.width') primaryYAxis_minorTickLines_width_input: any;
	@Input('primaryYAxis.minorTicksPerInterval') primaryYAxis_minorTicksPerInterval_input: any;
	@Input('primaryYAxis.name') primaryYAxis_name_input: any;
	@Input('primaryYAxis.opposedPosition') primaryYAxis_opposedPosition_input: any;
	@Input('primaryYAxis.orientation') primaryYAxis_orientation_input: any;
	@Input('primaryYAxis.plotOffset') primaryYAxis_plotOffset_input: any;
	@Input('primaryYAxis.range') primaryYAxis_range_input: any;
	@Input('primaryYAxis.range.min') primaryYAxis_range_min_input: any;
	@Input('primaryYAxis.range.max') primaryYAxis_range_max_input: any;
	@Input('primaryYAxis.range.interval') primaryYAxis_range_interval_input: any;
	@Input('primaryYAxis.rangePadding') primaryYAxis_rangePadding_input: any;
	@Input('primaryYAxis.roundingPlaces') primaryYAxis_roundingPlaces_input: any;
	@Input('primaryYAxis.rowIndex') primaryYAxis_rowIndex_input: any;
	@Input('primaryYAxis.rowSpan') primaryYAxis_rowSpan_input: any;
	@Input('primaryYAxis.showNextToAxisLine') primaryYAxis_showNextToAxisLine_input: any;
	@Input('primaryYAxis.scrollbarSettings') primaryYAxis_scrollbarSettings_input: any;
	@Input('primaryYAxis.scrollbarSettings.visible') primaryYAxis_scrollbarSettings_visible_input: any;
	@Input('primaryYAxis.scrollbarSettings.canResize') primaryYAxis_scrollbarSettings_canResize_input: any;
	@Input('primaryYAxis.scrollbarSettings.range') primaryYAxis_scrollbarSettings_range_input: any;
	@Input('primaryYAxis.scrollbarSettings.pointsLength') primaryYAxis_scrollbarSettings_pointsLength_input: any;
	@Input('primaryYAxis.tickLinesPosition') primaryYAxis_tickLinesPosition_input: any;
	@Input('primaryYAxis.labelBorder') primaryYAxis_labelBorder_input: any;
	@Input('primaryYAxis.labelBorder.color') primaryYAxis_labelBorder_color_input: any;
	@Input('primaryYAxis.labelBorder.width') primaryYAxis_labelBorder_width_input: any;
	@Input('primaryYAxis.title') primaryYAxis_title_input: any;
	@Input('primaryYAxis.title.enableTrim') primaryYAxis_title_enableTrim_input: any;
	@Input('primaryYAxis.title.font') primaryYAxis_title_font_input: any;
	@Input('primaryYAxis.title.maximumTitleWidth') primaryYAxis_title_maximumTitleWidth_input: any;
	@Input('primaryYAxis.title.text') primaryYAxis_title_text_input: any;
	@Input('primaryYAxis.title.visible') primaryYAxis_title_visible_input: any;
	@Input('primaryYAxis.title.offset') primaryYAxis_title_offset_input: any;
	@Input('primaryYAxis.title.position') primaryYAxis_title_position_input: any;
	@Input('primaryYAxis.title.alignment') primaryYAxis_title_alignment_input: any;
	@Input('primaryYAxis.valueType') primaryYAxis_valueType_input: any;
	@Input('primaryYAxis.visible') primaryYAxis_visible_input: any;
	@Input('primaryYAxis.zoomFactor') primaryYAxis_zoomFactor_input: any;
	@Input('primaryYAxis.zoomPosition') primaryYAxis_zoomPosition_input: any;
	@Input('size.height') size_height_input: any;
	@Input('size.width') size_width_input: any;
	@Input('title.background') title_background_input: any;
	@Input('title.border') title_border_input: any;
	@Input('title.border.width') title_border_width_input: any;
	@Input('title.border.color') title_border_color_input: any;
	@Input('title.border.opacity') title_border_opacity_input: any;
	@Input('title.border.cornerRadius') title_border_cornerRadius_input: any;
	@Input('title.font') title_font_input: any;
	@Input('title.font.fontFamily') title_font_fontFamily_input: any;
	@Input('title.font.fontStyle') title_font_fontStyle_input: any;
	@Input('title.font.fontWeight') title_font_fontWeight_input: any;
	@Input('title.font.opacity') title_font_opacity_input: any;
	@Input('title.font.size') title_font_size_input: any;
	@Input('title.visible') title_visible_input: any;
	@Input('title.enableTrim') title_enableTrim_input: any;
	@Input('title.maximumWidth') title_maximumWidth_input: any;
	@Input('title.textOverflow') title_textOverflow_input: any;
	@Input('title.subTitle') title_subTitle_input: any;
	@Input('title.subTitle.font') title_subTitle_font_input: any;
	@Input('title.subTitle.background') title_subTitle_background_input: any;
	@Input('title.subTitle.border') title_subTitle_border_input: any;
	@Input('title.subTitle.text') title_subTitle_text_input: any;
	@Input('title.subTitle.textAlignment') title_subTitle_textAlignment_input: any;
	@Input('title.subTitle.visible') title_subTitle_visible_input: any;
	@Input('title.subTitle.enableTrim') title_subTitle_enableTrim_input: any;
	@Input('title.subTitle.maximumWidth') title_subTitle_maximumWidth_input: any;
	@Input('title.subTitle.textOverflow') title_subTitle_textOverflow_input: any;
	@Input('title.text') title_text_input: any;
	@Input('title.textAlignment') title_textAlignment_input: any;
	@Input('zooming.enable') zooming_enable_input: any;
	@Input('zooming.enablePinching') zooming_enablePinching_input: any;
	@Input('zooming.enableDeferredZoom') zooming_enableDeferredZoom_input: any;
	@Input('zooming.enableMouseWheel') zooming_enableMouseWheel_input: any;
	@Input('zooming.type') zooming_type_input: any;
	@Input('zooming.enableScrollbar') zooming_enableScrollbar_input: any;
	@Input('zooming.toolbarItems') zooming_toolbarItems_input: any;
	@Input('annotations') annotations_input: any;
	@Input('columnDefinitions') columnDefinitions_input: any;
	@Input('indicators') indicators_input: any;
	@Input('axes') axes_input: any;
	@Input('rowDefinitions') rowDefinitions_input: any;
	@Input('series') series_input: any;
	@Input('commonSeriesOptions.trendlines') commonSeriesOptions_trendlines_input: any;
	@Input('primaryXAxis.multiLevelLabels') primaryXAxis_multiLevelLabels_input: any;
	@Input('primaryXAxis.stripLine') primaryXAxis_stripLine_input: any;
	@Input('primaryYAxis.multiLevelLabels') primaryYAxis_multiLevelLabels_input: any;
	@Input('primaryYAxis.stripLine') primaryYAxis_stripLine_input: any;


	@Output('animationComplete') animationComplete_output = new EventEmitter();
	@Output('axesLabelRendering') axesLabelRendering_output = new EventEmitter();
	@Output('axesLabelsInitialize') axesLabelsInitialize_output = new EventEmitter();
	@Output('axesRangeCalculate') axesRangeCalculate_output = new EventEmitter();
	@Output('axesTitleRendering') axesTitleRendering_output = new EventEmitter();
	@Output('chartAreaBoundsCalculate') chartAreaBoundsCalculate_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('displayTextRendering') displayTextRendering_output = new EventEmitter();
	@Output('legendBoundsCalculate') legendBoundsCalculate_output = new EventEmitter();
	@Output('legendItemClick') legendItemClick_output = new EventEmitter();
	@Output('legendItemMouseMove') legendItemMouseMove_output = new EventEmitter();
	@Output('legendItemRendering') legendItemRendering_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('zoomed') zoomed_output = new EventEmitter();
	@Output('rangeSelected') rangeSelected_output = new EventEmitter();
	@Output('pointRegionClick') pointRegionClick_output = new EventEmitter();
	@Output('pointRegionMouseMove') pointRegionMouseMove_output = new EventEmitter();
	@Output('preRender') preRender_output = new EventEmitter();
	@Output('seriesRegionClick') seriesRegionClick_output = new EventEmitter();
	@Output('seriesRendering') seriesRendering_output = new EventEmitter();
	@Output('symbolRendering') symbolRendering_output = new EventEmitter();
	@Output('titleRendering') titleRendering_output = new EventEmitter();
	@Output('toolTipInitialize') toolTipInitialize_output = new EventEmitter();
	@Output('trackAxisToolTip') trackAxisToolTip_output = new EventEmitter();
	@Output('trackToolTip') trackToolTip_output = new EventEmitter();
	@Output('axisLabelClick') axisLabelClick_output = new EventEmitter();
	@Output('axisLabelMouseMove') axisLabelMouseMove_output = new EventEmitter();
	@Output('chartClick') chartClick_output = new EventEmitter();
	@Output('multiLevelLabelClick') multiLevelLabelClick_output = new EventEmitter();
	@Output('chartMouseMove') chartMouseMove_output = new EventEmitter();
	@Output('chartDoubleClick') chartDoubleClick_output = new EventEmitter();
	@Output('chartMouseLeave') chartMouseLeave_output = new EventEmitter();
	@Output('annotationClick') annotationClick_output = new EventEmitter();
	@Output('afterResize') afterResize_output = new EventEmitter();
	@Output('beforeResize') beforeResize_output = new EventEmitter();
	@Output('errorBarRendering') errorBarRendering_output = new EventEmitter();
	@Output('multiLevelLabelRendering') multiLevelLabelRendering_output = new EventEmitter();
	@Output('trendlineRendering') trendlineRendering_output = new EventEmitter();
	@Output('scrollChanged') scrollChanged_output = new EventEmitter();
	@Output('scrollStart') scrollStart_output = new EventEmitter();
	@Output('scrollEnd') scrollEnd_output = new EventEmitter();
	@Output('dragStart') dragStart_output = new EventEmitter();
	@Output('dragging') dragging_output = new EventEmitter();
	@Output('dragEnd') dragEnd_output = new EventEmitter();
	@Output('subTitleRendering') subTitleRendering_output = new EventEmitter();

	@ContentChild(ChartSeriesCollectionDirective) tag_series: any;
	@ContentChild(ChartIndicatorsDirective) tag_indicators: any;
	@ContentChild(ChartAnnotationsDirective) tag_annotations: any;
	@ContentChild(ChartPrimaryXAxisStripLineCollectionDirective) tag_primaryXAxis_stripLine: any;
	@ContentChild(ChartPrimaryYAxisStripLineCollectionDirective) tag_primaryYAxis_stripLine: any;
	@ContentChild(ChartRowDefinitionsDirective) tag_rowDefinitions: any;
	@ContentChild(ChartColumnDefinitionsDirective) tag_columnDefinitions: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('Chart', el, cdRef, ['series', 'indicators', 'annotations', 'primaryXAxis.stripLine', 'primaryYAxis.stripLine', 'rowDefinitions', 'columnDefinitions']);
    }



}

export var EJ_CHART_COMPONENTS: Type<any>[] = [ChartComponent
, ChartTrendlinesDirective, ChartPointsDirective, ChartSeriesCollectionDirective, ChartIndicatorsDirective, ChartAnnotationsDirective, ChartPrimaryXAxisStripLineCollectionDirective, ChartPrimaryYAxisStripLineCollectionDirective, ChartRowDefinitionsDirective, ChartColumnDefinitionsDirective, ChartTrendlineDirective, ChartPointDirective, ChartSeriesDirective, ChartIndicatorDirective, ChartAnnotationDirective, ChartPrimaryXAxisStripLineDirective, ChartPrimaryYAxisStripLineDirective, ChartRowDefinitionDirective, ChartColumnDefinitionDirective];


