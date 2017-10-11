import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.sunburstchart.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-sunburstchart',
    template: ''})
export class SunburstChartComponent extends EJComponents<any, any> {
	@Input('background') background_input: any;
	@Input('valueMemberPath') valueMemberPath_input: any;
	@Input('border') border_input: any;
	@Input('segmentBorder') segmentBorder_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('palette') palette_input: any;
	@Input('parentNode') parentNode_input: any;
	@Input('xName') xName_input: any;
	@Input('yName') yName_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('size') size_input: any;
	@Input('visible') visible_input: any;
	@Input('tooltip') tooltip_input: any;
	@Input('points') points_input: any;
	@Input('startAngle') startAngle_input: any;
	@Input('endAngle') endAngle_input: any;
	@Input('radius') radius_input: any;
	@Input('innerRadius') innerRadius_input: any;
	@Input('dataLabelSettings') dataLabelSettings_input: any;
	@Input('title') title_input: any;
	@Input('highlightSettings') highlightSettings_input: any;
	@Input('selectionSettings') selectionSettings_input: any;
	@Input('legend') legend_input: any;
	@Input('theme') theme_input: any;
	@Input('margin') margin_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('opacity') opacity_input: any;
	@Input('zoomSettings') zoomSettings_input: any;
	@Input('animationType') animationType_input: any;
	@Input('border.color') border_color_input: any;
	@Input('border.width') border_width_input: any;
	@Input('segmentBorder.color') segmentBorder_color_input: any;
	@Input('segmentBorder.width') segmentBorder_width_input: any;
	@Input('size.height') size_height_input: any;
	@Input('size.width') size_width_input: any;
	@Input('tooltip.visible') tooltip_visible_input: any;
	@Input('tooltip.border') tooltip_border_input: any;
	@Input('tooltip.border.color') tooltip_border_color_input: any;
	@Input('tooltip.border.width') tooltip_border_width_input: any;
	@Input('tooltip.fill') tooltip_fill_input: any;
	@Input('tooltip.font') tooltip_font_input: any;
	@Input('tooltip.font.color') tooltip_font_color_input: any;
	@Input('tooltip.font.fontFamily') tooltip_font_fontFamily_input: any;
	@Input('tooltip.font.fontStyle') tooltip_font_fontStyle_input: any;
	@Input('tooltip.font.fontWeight') tooltip_font_fontWeight_input: any;
	@Input('tooltip.font.opacity') tooltip_font_opacity_input: any;
	@Input('tooltip.font.size') tooltip_font_size_input: any;
	@Input('tooltip.template') tooltip_template_input: any;
	@Input('tooltip.format') tooltip_format_input: any;
	@Input('tooltip.opacity') tooltip_opacity_input: any;
	@Input('points.x') points_x_input: any;
	@Input('points.y') points_y_input: any;
	@Input('points.text') points_text_input: any;
	@Input('points.fill') points_fill_input: any;
	@Input('dataLabelSettings.visible') dataLabelSettings_visible_input: any;
	@Input('dataLabelSettings.labelRotationMode') dataLabelSettings_labelRotationMode_input: any;
	@Input('dataLabelSettings.font') dataLabelSettings_font_input: any;
	@Input('dataLabelSettings.font.fontFamily') dataLabelSettings_font_fontFamily_input: any;
	@Input('dataLabelSettings.font.fontStyle') dataLabelSettings_font_fontStyle_input: any;
	@Input('dataLabelSettings.font.fontWeight') dataLabelSettings_font_fontWeight_input: any;
	@Input('dataLabelSettings.font.opacity') dataLabelSettings_font_opacity_input: any;
	@Input('dataLabelSettings.font.color') dataLabelSettings_font_color_input: any;
	@Input('dataLabelSettings.font.size') dataLabelSettings_font_size_input: any;
	@Input('dataLabelSettings.template') dataLabelSettings_template_input: any;
	@Input('dataLabelSettings.fill') dataLabelSettings_fill_input: any;
	@Input('dataLabelSettings.labelOverflowMode') dataLabelSettings_labelOverflowMode_input: any;
	@Input('title.text') title_text_input: any;
	@Input('title.visible') title_visible_input: any;
	@Input('title.textAlignment') title_textAlignment_input: any;
	@Input('title.font') title_font_input: any;
	@Input('title.font.fontFamily') title_font_fontFamily_input: any;
	@Input('title.font.fontStyle') title_font_fontStyle_input: any;
	@Input('title.font.fontWeight') title_font_fontWeight_input: any;
	@Input('title.font.opacity') title_font_opacity_input: any;
	@Input('title.font.size') title_font_size_input: any;
	@Input('title.subtitle') title_subtitle_input: any;
	@Input('title.subtitle.text') title_subtitle_text_input: any;
	@Input('title.subtitle.visible') title_subtitle_visible_input: any;
	@Input('title.subtitle.textAlignment') title_subtitle_textAlignment_input: any;
	@Input('title.subtitle.font') title_subtitle_font_input: any;
	@Input('highlightSettings.enable') highlightSettings_enable_input: any;
	@Input('highlightSettings.mode') highlightSettings_mode_input: any;
	@Input('highlightSettings.color') highlightSettings_color_input: any;
	@Input('highlightSettings.opacity') highlightSettings_opacity_input: any;
	@Input('highlightSettings.type') highlightSettings_type_input: any;
	@Input('selectionSettings.enable') selectionSettings_enable_input: any;
	@Input('selectionSettings.mode') selectionSettings_mode_input: any;
	@Input('selectionSettings.color') selectionSettings_color_input: any;
	@Input('selectionSettings.opacity') selectionSettings_opacity_input: any;
	@Input('selectionSettings.type') selectionSettings_type_input: any;
	@Input('legend.visible') legend_visible_input: any;
	@Input('legend.clickAction') legend_clickAction_input: any;
	@Input('legend.alignment') legend_alignment_input: any;
	@Input('legend.border') legend_border_input: any;
	@Input('legend.border.color') legend_border_color_input: any;
	@Input('legend.border.width') legend_border_width_input: any;
	@Input('legend.columnCount') legend_columnCount_input: any;
	@Input('legend.rowCount') legend_rowCount_input: any;
	@Input('legend.font') legend_font_input: any;
	@Input('legend.font.fontFamily') legend_font_fontFamily_input: any;
	@Input('legend.font.fontStyle') legend_font_fontStyle_input: any;
	@Input('legend.font.fontWeight') legend_font_fontWeight_input: any;
	@Input('legend.font.size') legend_font_size_input: any;
	@Input('legend.itemPadding') legend_itemPadding_input: any;
	@Input('legend.itemStyle') legend_itemStyle_input: any;
	@Input('legend.itemStyle.height') legend_itemStyle_height_input: any;
	@Input('legend.itemStyle.width') legend_itemStyle_width_input: any;
	@Input('legend.location') legend_location_input: any;
	@Input('legend.location.x') legend_location_x_input: any;
	@Input('legend.location.y') legend_location_y_input: any;
	@Input('legend.position') legend_position_input: any;
	@Input('legend.shape') legend_shape_input: any;
	@Input('legend.size') legend_size_input: any;
	@Input('legend.size.height') legend_size_height_input: any;
	@Input('legend.size.width') legend_size_width_input: any;
	@Input('legend.title') legend_title_input: any;
	@Input('legend.title.font') legend_title_font_input: any;
	@Input('legend.title.visible') legend_title_visible_input: any;
	@Input('legend.title.text') legend_title_text_input: any;
	@Input('legend.title.textAlignment') legend_title_textAlignment_input: any;
	@Input('margin.left') margin_left_input: any;
	@Input('margin.right') margin_right_input: any;
	@Input('margin.top') margin_top_input: any;
	@Input('margin.bottom') margin_bottom_input: any;
	@Input('zoomSettings.enable') zoomSettings_enable_input: any;
	@Input('zoomSettings.toolbarHorizontalAlignment') zoomSettings_toolbarHorizontalAlignment_input: any;
	@Input('zoomSettings.toolbarVerticalAlignment') zoomSettings_toolbarVerticalAlignment_input: any;
	@Input('levels') levels_input: any;


	@Output('load') load_output = new EventEmitter();
	@Output('preRender') preRender_output = new EventEmitter();
	@Output('loaded') loaded_output = new EventEmitter();
	@Output('dataLabelRendering') dataLabelRendering_output = new EventEmitter();
	@Output('segmentRendering') segmentRendering_output = new EventEmitter();
	@Output('titleRendering') titleRendering_output = new EventEmitter();
	@Output('tooltipInitialize') tooltipInitialize_output = new EventEmitter();
	@Output('pointRegionClick') pointRegionClick_output = new EventEmitter();
	@Output('pointRegionMouseMove') pointRegionMouseMove_output = new EventEmitter();
	@Output('drillDownClick') drillDownClick_output = new EventEmitter();
	@Output('drillDownBack') drillDownBack_output = new EventEmitter();
	@Output('drillDownReset') drillDownReset_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('SunburstChart', el, cdRef, []);
    }



}

export var EJ_SUNBURSTCHART_COMPONENTS: Type<any>[] = [SunburstChartComponent
];


