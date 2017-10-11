import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.sparkline.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-sparkline',
    template: ''})
export class SparklineComponent extends EJComponents<any, any> {
	@Input('background') background_input: any;
	@Input('fill') fill_input: any;
	@Input('stroke') stroke_input: any;
	@Input('border') border_input: any;
	@Input('width') width_input: any;
	@Input('opacity') opacity_input: any;
	@Input('highPointColor') highPointColor_input: any;
	@Input('lowPointColor') lowPointColor_input: any;
	@Input('startPointColor') startPointColor_input: any;
	@Input('endPointColor') endPointColor_input: any;
	@Input('negativePointColor') negativePointColor_input: any;
	@Input('rangeBandSettings') rangeBandSettings_input: any;
	@Input('locale') locale_input: any;
	@Input('palette') palette_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('enableCanvasRendering') enableCanvasRendering_input: any;
	@Input('enableGroupSeparator') enableGroupSeparator_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('xName') xName_input: any;
	@Input('yName') yName_input: any;
	@Input('padding') padding_input: any;
	@Input('type') type_input: any;
	@Input('theme') theme_input: any;
	@Input('tooltip') tooltip_input: any;
	@Input('markerSettings') markerSettings_input: any;
	@Input('size') size_input: any;
	@Input('axisLineSettings') axisLineSettings_input: any;
	@Input('border.color') border_color_input: any;
	@Input('border.width') border_width_input: any;
	@Input('rangeBandSettings.startRange') rangeBandSettings_startRange_input: any;
	@Input('rangeBandSettings.endRange') rangeBandSettings_endRange_input: any;
	@Input('rangeBandSettings.opacity') rangeBandSettings_opacity_input: any;
	@Input('rangeBandSettings.color') rangeBandSettings_color_input: any;
	@Input('tooltip.visible') tooltip_visible_input: any;
	@Input('tooltip.fill') tooltip_fill_input: any;
	@Input('tooltip.template') tooltip_template_input: any;
	@Input('tooltip.border') tooltip_border_input: any;
	@Input('tooltip.border.color') tooltip_border_color_input: any;
	@Input('tooltip.border.width') tooltip_border_width_input: any;
	@Input('tooltip.font') tooltip_font_input: any;
	@Input('tooltip.font.color') tooltip_font_color_input: any;
	@Input('tooltip.font.fontFamily') tooltip_font_fontFamily_input: any;
	@Input('tooltip.font.fontStyle') tooltip_font_fontStyle_input: any;
	@Input('tooltip.font.fontWeight') tooltip_font_fontWeight_input: any;
	@Input('tooltip.font.opacity') tooltip_font_opacity_input: any;
	@Input('tooltip.font.size') tooltip_font_size_input: any;
	@Input('markerSettings.opacity') markerSettings_opacity_input: any;
	@Input('markerSettings.visible') markerSettings_visible_input: any;
	@Input('markerSettings.width') markerSettings_width_input: any;
	@Input('markerSettings.fill') markerSettings_fill_input: any;
	@Input('markerSettings.border') markerSettings_border_input: any;
	@Input('markerSettings.border.color') markerSettings_border_color_input: any;
	@Input('markerSettings.border.opacity') markerSettings_border_opacity_input: any;
	@Input('markerSettings.border.width') markerSettings_border_width_input: any;
	@Input('size.height') size_height_input: any;
	@Input('size.width') size_width_input: any;
	@Input('axisLineSettings.visible') axisLineSettings_visible_input: any;
	@Input('axisLineSettings.color') axisLineSettings_color_input: any;
	@Input('axisLineSettings.width') axisLineSettings_width_input: any;
	@Input('axisLineSettings.dashArray') axisLineSettings_dashArray_input: any;


	@Output('load') load_output = new EventEmitter();
	@Output('loaded') loaded_output = new EventEmitter();
	@Output('tooltipInitialize') tooltipInitialize_output = new EventEmitter();
	@Output('seriesRendering') seriesRendering_output = new EventEmitter();
	@Output('pointRegionMouseMove') pointRegionMouseMove_output = new EventEmitter();
	@Output('pointRegionMouseClick') pointRegionMouseClick_output = new EventEmitter();
	@Output('sparklineMouseMove') sparklineMouseMove_output = new EventEmitter();
	@Output('sparklineMouseLeave') sparklineMouseLeave_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('Sparkline', el, cdRef, []);
    }



}

export var EJ_SPARKLINE_COMPONENTS: Type<any>[] = [SparklineComponent
];


