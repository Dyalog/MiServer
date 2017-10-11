import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.rangenavigator.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-rangenavigator',
    template: ''})
export class RangeNavigatorComponent extends EJComponents<any, any> {
	@Input('allowSnapping') allowSnapping_input: any;
	@Input('border') border_input: any;
	@Input('dataSource') dataSource_input: any;
	@Input('enableDeferredUpdate') enableDeferredUpdate_input: any;
	@Input('enableScrollbar') enableScrollbar_input: any;
	@Input('enableAutoResizing') enableAutoResizing_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('labelSettings') labelSettings_input: any;
	@Input('locale') locale_input: any;
	@Input('navigatorStyleSettings') navigatorStyleSettings_input: any;
	@Input('padding') padding_input: any;
	@Input('rangePadding') rangePadding_input: any;
	@Input('rangeSettings') rangeSettings_input: any;
	@Input('selectedData') selectedData_input: any;
	@Input('selectedRangeSettings') selectedRangeSettings_input: any;
	@Input('scrollRangeSettings') scrollRangeSettings_input: any;
	@Input('sizeSettings') sizeSettings_input: any;
	@Input('theme') theme_input: any;
	@Input('tooltipSettings') tooltipSettings_input: any;
	@Input('valueAxisSettings') valueAxisSettings_input: any;
	@Input('valueType') valueType_input: any;
	@Input('xName') xName_input: any;
	@Input('yName') yName_input: any;
	@Input('border.color') border_color_input: any;
	@Input('border.opacity') border_opacity_input: any;
	@Input('border.width') border_width_input: any;
	@Input('labelSettings.higherLevel') labelSettings_higherLevel_input: any;
	@Input('labelSettings.higherLevel.border') labelSettings_higherLevel_border_input: any;
	@Input('labelSettings.higherLevel.fill') labelSettings_higherLevel_fill_input: any;
	@Input('labelSettings.higherLevel.gridLineStyle') labelSettings_higherLevel_gridLineStyle_input: any;
	@Input('labelSettings.higherLevel.intervalType') labelSettings_higherLevel_intervalType_input: any;
	@Input('labelSettings.higherLevel.labelPlacement') labelSettings_higherLevel_labelPlacement_input: any;
	@Input('labelSettings.higherLevel.position') labelSettings_higherLevel_position_input: any;
	@Input('labelSettings.higherLevel.style') labelSettings_higherLevel_style_input: any;
	@Input('labelSettings.higherLevel.visible') labelSettings_higherLevel_visible_input: any;
	@Input('labelSettings.lowerLevel') labelSettings_lowerLevel_input: any;
	@Input('labelSettings.lowerLevel.border') labelSettings_lowerLevel_border_input: any;
	@Input('labelSettings.lowerLevel.fill') labelSettings_lowerLevel_fill_input: any;
	@Input('labelSettings.lowerLevel.gridLineStyle') labelSettings_lowerLevel_gridLineStyle_input: any;
	@Input('labelSettings.lowerLevel.intervalType') labelSettings_lowerLevel_intervalType_input: any;
	@Input('labelSettings.lowerLevel.labelPlacement') labelSettings_lowerLevel_labelPlacement_input: any;
	@Input('labelSettings.lowerLevel.position') labelSettings_lowerLevel_position_input: any;
	@Input('labelSettings.lowerLevel.style') labelSettings_lowerLevel_style_input: any;
	@Input('labelSettings.lowerLevel.visible') labelSettings_lowerLevel_visible_input: any;
	@Input('labelSettings.style') labelSettings_style_input: any;
	@Input('labelSettings.style.font') labelSettings_style_font_input: any;
	@Input('labelSettings.style.horizontalAlignment') labelSettings_style_horizontalAlignment_input: any;
	@Input('navigatorStyleSettings.background') navigatorStyleSettings_background_input: any;
	@Input('navigatorStyleSettings.border') navigatorStyleSettings_border_input: any;
	@Input('navigatorStyleSettings.border.color') navigatorStyleSettings_border_color_input: any;
	@Input('navigatorStyleSettings.border.dashArray') navigatorStyleSettings_border_dashArray_input: any;
	@Input('navigatorStyleSettings.border.width') navigatorStyleSettings_border_width_input: any;
	@Input('navigatorStyleSettings.leftThumbTemplate') navigatorStyleSettings_leftThumbTemplate_input: any;
	@Input('navigatorStyleSettings.majorGridLineStyle') navigatorStyleSettings_majorGridLineStyle_input: any;
	@Input('navigatorStyleSettings.majorGridLineStyle.color') navigatorStyleSettings_majorGridLineStyle_color_input: any;
	@Input('navigatorStyleSettings.majorGridLineStyle.visible') navigatorStyleSettings_majorGridLineStyle_visible_input: any;
	@Input('navigatorStyleSettings.minorGridLineStyle') navigatorStyleSettings_minorGridLineStyle_input: any;
	@Input('navigatorStyleSettings.minorGridLineStyle.color') navigatorStyleSettings_minorGridLineStyle_color_input: any;
	@Input('navigatorStyleSettings.minorGridLineStyle.visible') navigatorStyleSettings_minorGridLineStyle_visible_input: any;
	@Input('navigatorStyleSettings.opacity') navigatorStyleSettings_opacity_input: any;
	@Input('navigatorStyleSettings.rightThumbTemplate') navigatorStyleSettings_rightThumbTemplate_input: any;
	@Input('navigatorStyleSettings.selectedRegionColor') navigatorStyleSettings_selectedRegionColor_input: any;
	@Input('navigatorStyleSettings.selectedRegionOpacity') navigatorStyleSettings_selectedRegionOpacity_input: any;
	@Input('navigatorStyleSettings.thumbColor') navigatorStyleSettings_thumbColor_input: any;
	@Input('navigatorStyleSettings.thumbRadius') navigatorStyleSettings_thumbRadius_input: any;
	@Input('navigatorStyleSettings.thumbStroke') navigatorStyleSettings_thumbStroke_input: any;
	@Input('navigatorStyleSettings.unselectedRegionColor') navigatorStyleSettings_unselectedRegionColor_input: any;
	@Input('navigatorStyleSettings.unselectedRegionOpacity') navigatorStyleSettings_unselectedRegionOpacity_input: any;
	@Input('navigatorStyleSettings.highlightSettings') navigatorStyleSettings_highlightSettings_input: any;
	@Input('navigatorStyleSettings.highlightSettings.enable') navigatorStyleSettings_highlightSettings_enable_input: any;
	@Input('navigatorStyleSettings.highlightSettings.color') navigatorStyleSettings_highlightSettings_color_input: any;
	@Input('navigatorStyleSettings.highlightSettings.opacity') navigatorStyleSettings_highlightSettings_opacity_input: any;
	@Input('navigatorStyleSettings.highlightSettings.border') navigatorStyleSettings_highlightSettings_border_input: any;
	@Input('navigatorStyleSettings.selectionSettings') navigatorStyleSettings_selectionSettings_input: any;
	@Input('navigatorStyleSettings.selectionSettings.enable') navigatorStyleSettings_selectionSettings_enable_input: any;
	@Input('navigatorStyleSettings.selectionSettings.color') navigatorStyleSettings_selectionSettings_color_input: any;
	@Input('navigatorStyleSettings.selectionSettings.opacity') navigatorStyleSettings_selectionSettings_opacity_input: any;
	@Input('navigatorStyleSettings.selectionSettings.border') navigatorStyleSettings_selectionSettings_border_input: any;
	@Input('rangeSettings.end') rangeSettings_end_input: any;
	@Input('rangeSettings.start') rangeSettings_start_input: any;
	@Input('selectedRangeSettings.end') selectedRangeSettings_end_input: any;
	@Input('selectedRangeSettings.start') selectedRangeSettings_start_input: any;
	@Input('scrollRangeSettings.end') scrollRangeSettings_end_input: any;
	@Input('scrollRangeSettings.start') scrollRangeSettings_start_input: any;
	@Input('sizeSettings.height') sizeSettings_height_input: any;
	@Input('sizeSettings.width') sizeSettings_width_input: any;
	@Input('tooltipSettings.backgroundColor') tooltipSettings_backgroundColor_input: any;
	@Input('tooltipSettings.font') tooltipSettings_font_input: any;
	@Input('tooltipSettings.font.color') tooltipSettings_font_color_input: any;
	@Input('tooltipSettings.font.family') tooltipSettings_font_family_input: any;
	@Input('tooltipSettings.font.fontStyle') tooltipSettings_font_fontStyle_input: any;
	@Input('tooltipSettings.font.opacity') tooltipSettings_font_opacity_input: any;
	@Input('tooltipSettings.font.size') tooltipSettings_font_size_input: any;
	@Input('tooltipSettings.font.weight') tooltipSettings_font_weight_input: any;
	@Input('tooltipSettings.labelFormat') tooltipSettings_labelFormat_input: any;
	@Input('tooltipSettings.tooltipDisplayMode') tooltipSettings_tooltipDisplayMode_input: any;
	@Input('tooltipSettings.visible') tooltipSettings_visible_input: any;
	@Input('valueAxisSettings.axisLine') valueAxisSettings_axisLine_input: any;
	@Input('valueAxisSettings.axisLine.visible') valueAxisSettings_axisLine_visible_input: any;
	@Input('valueAxisSettings.font') valueAxisSettings_font_input: any;
	@Input('valueAxisSettings.font.size') valueAxisSettings_font_size_input: any;
	@Input('valueAxisSettings.majorGridLines') valueAxisSettings_majorGridLines_input: any;
	@Input('valueAxisSettings.majorGridLines.visible') valueAxisSettings_majorGridLines_visible_input: any;
	@Input('valueAxisSettings.majorTickLines') valueAxisSettings_majorTickLines_input: any;
	@Input('valueAxisSettings.majorTickLines.size') valueAxisSettings_majorTickLines_size_input: any;
	@Input('valueAxisSettings.majorTickLines.visible') valueAxisSettings_majorTickLines_visible_input: any;
	@Input('valueAxisSettings.majorTickLines.width') valueAxisSettings_majorTickLines_width_input: any;
	@Input('valueAxisSettings.range') valueAxisSettings_range_input: any;
	@Input('valueAxisSettings.range.min') valueAxisSettings_range_min_input: any;
	@Input('valueAxisSettings.range.max') valueAxisSettings_range_max_input: any;
	@Input('valueAxisSettings.range.interval') valueAxisSettings_range_interval_input: any;
	@Input('valueAxisSettings.rangePadding') valueAxisSettings_rangePadding_input: any;
	@Input('valueAxisSettings.visible') valueAxisSettings_visible_input: any;
	@Input('series') series_input: any;
	@Input('seriesSettings') seriesSettings_input: any;


	@Output('load') load_output = new EventEmitter();
	@Output('loaded') loaded_output = new EventEmitter();
	@Output('rangeChanged') rangeChanged_output = new EventEmitter();
	@Output('scrollChanged') scrollChanged_output = new EventEmitter();
	@Output('scrollStart') scrollStart_output = new EventEmitter();
	@Output('selectedRangeStart') selectedRangeStart_output = new EventEmitter();
	@Output('selectedRangeEnd') selectedRangeEnd_output = new EventEmitter();
	@Output('scrollEnd') scrollEnd_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('RangeNavigator', el, cdRef, []);
    }



}

export var EJ_RANGENAVIGATOR_COMPONENTS: Type<any>[] = [RangeNavigatorComponent
];


