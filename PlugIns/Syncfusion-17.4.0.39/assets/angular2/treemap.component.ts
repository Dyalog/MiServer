import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.treemap.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-levels>e-level',
})
export class TreeMapLevelDirective extends ComplexTagElement {

	@Input('groupBackground') groupBackground: any;
	@Input('groupBorderColor') groupBorderColor: any;
	@Input('groupBorderThickness') groupBorderThickness: any;
	@Input('groupGap') groupGap: any;
	@Input('groupPadding') groupPadding: any;
	@Input('groupPath') groupPath: any;
	@Input('headerHeight') headerHeight: any;
	@Input('headerTemplate') headerTemplate: any;
	@Input('headerVisibilityMode') headerVisibilityMode: any;
	@Input('labelPosition') labelPosition: any;
	@Input('textOverflow') textOverflow: any;
	@Input('labelTemplate') labelTemplate: any;
	@Input('labelVisibilityMode') labelVisibilityMode: any;
	@Input('showHeader') showHeader: any;
	@Input('showLabels') showLabels: any;

    
    constructor( @Inject(forwardRef(() => TreeMapComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-treemap>e-levels',
    queries: {
        children: new ContentChildren(TreeMapLevelDirective)
    }
})
export class TreeMapLevelsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => TreeMapComponent)) widget: EJComponents<any, any>) {
        super('levels')
        }
}

@Directive({
    selector: 'e-rangecolormapping>e-rangecolor',
})
export class TreeMapRangeColorDirective extends ComplexTagElement {

	@Input('color') color: any;
	@Input('gradientColors') gradientColors: any;
	@Input('from') from: any;
	@Input('legendLabel') legendLabel: any;
	@Input('to') to: any;

    
    constructor( @Inject(forwardRef(() => TreeMapComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-treemap>e-rangecolormapping',
    queries: {
        children: new ContentChildren(TreeMapRangeColorDirective)
    }
})
export class TreeMapRangeColorMappingDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => TreeMapComponent)) widget: EJComponents<any, any>) {
        super('rangeColorMapping')
        }
}




@Component({
    selector: 'ej-treemap',
    template: ''})
export class TreeMapComponent extends EJComponents<any, any> {
	@Input('borderBrush') borderBrush_input: any;
	@Input('borderThickness') borderThickness_input: any;
	@Input('uniColorMapping') uniColorMapping_input: any;
	@Input('desaturationColorMapping') desaturationColorMapping_input: any;
	@Input('paletteColorMapping') paletteColorMapping_input: any;
	@Input('colorValuePath') colorValuePath_input: any;
	@Input('colorPath') colorPath_input: any;
	@Input('dockPosition') dockPosition_input: any;
	@Input('drillDownHeaderColor') drillDownHeaderColor_input: any;
	@Input('drillDownSelectionColor') drillDownSelectionColor_input: any;
	@Input('isHierarchicalDatasource') isHierarchicalDatasource_input: any;
	@Input('header') header_input: any;
	@Input('enableDrillDown') enableDrillDown_input: any;
	@Input('drillDownValue') drillDownValue_input: any;
	@Input('drillDownLevel') drillDownLevel_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('enableResize') enableResize_input: any;
	@Input('draggingOnSelection') draggingOnSelection_input: any;
	@Input('draggingGroupOnSelection') draggingGroupOnSelection_input: any;
	@Input('legendSettings') legendSettings_input: any;
	@Input('highlightBorderBrush') highlightBorderBrush_input: any;
	@Input('highlightBorderThickness') highlightBorderThickness_input: any;
	@Input('highlightGroupBorderBrush') highlightGroupBorderBrush_input: any;
	@Input('highlightGroupBorderThickness') highlightGroupBorderThickness_input: any;
	@Input('highlightGroupOnSelection') highlightGroupOnSelection_input: any;
	@Input('highlightOnSelection') highlightOnSelection_input: any;
	@Input('itemsLayoutMode') itemsLayoutMode_input: any;
	@Input('enableGroupSeparator') enableGroupSeparator_input: any;
	@Input('locale') locale_input: any;
	@Input('leafItemSettings') leafItemSettings_input: any;
	@Input('selectionMode') selectionMode_input: any;
	@Input('groupSelectionMode') groupSelectionMode_input: any;
	@Input('showLegend') showLegend_input: any;
	@Input('enableGradient') enableGradient_input: any;
	@Input('showTooltip') showTooltip_input: any;
	@Input('tooltipTemplate') tooltipTemplate_input: any;
	@Input('treeMapItems') treeMapItems_input: any;
	@Input('uniColorMapping.color') uniColorMapping_color_input: any;
	@Input('desaturationColorMapping.to') desaturationColorMapping_to_input: any;
	@Input('desaturationColorMapping.color') desaturationColorMapping_color_input: any;
	@Input('desaturationColorMapping.from') desaturationColorMapping_from_input: any;
	@Input('desaturationColorMapping.rangeMaximum') desaturationColorMapping_rangeMaximum_input: any;
	@Input('desaturationColorMapping.rangeMinimum') desaturationColorMapping_rangeMinimum_input: any;
	@Input('paletteColorMapping.colors') paletteColorMapping_colors_input: any;
	@Input('legendSettings.height') legendSettings_height_input: any;
	@Input('legendSettings.width') legendSettings_width_input: any;
	@Input('legendSettings.iconHeight') legendSettings_iconHeight_input: any;
	@Input('legendSettings.iconWidth') legendSettings_iconWidth_input: any;
	@Input('legendSettings.template') legendSettings_template_input: any;
	@Input('legendSettings.mode') legendSettings_mode_input: any;
	@Input('legendSettings.title') legendSettings_title_input: any;
	@Input('legendSettings.leftLabel') legendSettings_leftLabel_input: any;
	@Input('legendSettings.rightLabel') legendSettings_rightLabel_input: any;
	@Input('legendSettings.dockPosition') legendSettings_dockPosition_input: any;
	@Input('legendSettings.alignment') legendSettings_alignment_input: any;
	@Input('legendSettings.columnCount') legendSettings_columnCount_input: any;
	@Input('leafItemSettings.borderBrush') leafItemSettings_borderBrush_input: any;
	@Input('leafItemSettings.borderThickness') leafItemSettings_borderThickness_input: any;
	@Input('leafItemSettings.gap') leafItemSettings_gap_input: any;
	@Input('leafItemSettings.itemTemplate') leafItemSettings_itemTemplate_input: any;
	@Input('leafItemSettings.labelPath') leafItemSettings_labelPath_input: any;
	@Input('leafItemSettings.labelPosition') leafItemSettings_labelPosition_input: any;
	@Input('leafItemSettings.textOverflow') leafItemSettings_textOverflow_input: any;
	@Input('leafItemSettings.labelVisibilityMode') leafItemSettings_labelVisibilityMode_input: any;
	@Input('leafItemSettings.showLabels') leafItemSettings_showLabels_input: any;
	@Input('groupColorMapping') groupColorMapping_input: any;
	@Input('rangeColorMapping') rangeColorMapping_input: any;
	@Input('levels') levels_input: any;
    @Input('options') options: any;

	@Input('dataSource') dataSource_two: any;
	@Output('dataSourceChange') dataSource_twoChange = new EventEmitter<any>();
	@Input('weightValuePath') weightValuePath_two: any;
	@Output('weightValuePathChange') weightValuePath_twoChange = new EventEmitter<any>();

	@Output('treeMapItemSelected') treeMapItemSelected_output = new EventEmitter();
	@Output('itemRendering') itemRendering_output = new EventEmitter();
	@Output('legendItemRendering') legendItemRendering_output = new EventEmitter();
	@Output('drillStarted') drillStarted_output = new EventEmitter();
	@Output('drillDownItemSelected') drillDownItemSelected_output = new EventEmitter();
	@Output('headerTemplateRendering') headerTemplateRendering_output = new EventEmitter();
	@Output('refreshed') refreshed_output = new EventEmitter();
	@Output('treeMapGroupSelected') treeMapGroupSelected_output = new EventEmitter();
	@Output('Click') Click_output = new EventEmitter();
	@Output('doubleClick') doubleClick_output = new EventEmitter();
	@Output('rightClick') rightClick_output = new EventEmitter();

	@ContentChild(TreeMapLevelsDirective) tag_levels: any;
	@ContentChild(TreeMapRangeColorMappingDirective) tag_rangeColorMapping: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('TreeMap', el, cdRef, ['levels', 'rangeColorMapping'], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_TREEMAP_COMPONENTS: Type<any>[] = [TreeMapComponent
, TreeMapLevelsDirective, TreeMapRangeColorMappingDirective, TreeMapLevelDirective, TreeMapRangeColorDirective];


