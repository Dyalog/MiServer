import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.map.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-layers>e-layer',
})
export class MapLayerDirective extends ComplexTagElement {

	@Input('bingMapType') bingMapType: any;
	@Input('bubbleSettings') bubbleSettings: any;
	@Input('bubbleSettings.bubbleOpacity') bubbleSettings_bubbleOpacity: any;
	@Input('bubbleSettings.color') bubbleSettings_color: any;
	@Input('bubbleSettings.colorMappings') bubbleSettings_colorMappings: any;
	@Input('bubbleSettings.colorMappings.rangeColorMapping') bubbleSettings_colorMappings_rangeColorMapping: any;
	@Input('bubbleSettings.colorValuePath') bubbleSettings_colorValuePath: any;
	@Input('bubbleSettings.maxValue') bubbleSettings_maxValue: any;
	@Input('bubbleSettings.minValue') bubbleSettings_minValue: any;
	@Input('bubbleSettings.showBubble') bubbleSettings_showBubble: any;
	@Input('bubbleSettings.showTooltip') bubbleSettings_showTooltip: any;
	@Input('bubbleSettings.tooltipTemplate') bubbleSettings_tooltipTemplate: any;
	@Input('bubbleSettings.valuePath') bubbleSettings_valuePath: any;
	@Input('dataSource') dataSource: any;
	@Input('shapeDataPath') shapeDataPath: any;
	@Input('shapePropertyPath') shapePropertyPath: any;
	@Input('enableMouseHover') enableMouseHover: any;
	@Input('enableSelection') enableSelection: any;
	@Input('key') key: any;
	@Input('labelSettings') labelSettings: any;
	@Input('labelSettings.enableSmartLabel') labelSettings_enableSmartLabel: any;
	@Input('labelSettings.labelLength') labelSettings_labelLength: any;
	@Input('labelSettings.labelPath') labelSettings_labelPath: any;
	@Input('labelSettings.showLabels') labelSettings_showLabels: any;
	@Input('labelSettings.smartLabelSize') labelSettings_smartLabelSize: any;
	@Input('labelSettings.font') labelSettings_font: any;
	@Input('labelSettings.font.fontFamily') labelSettings_font_fontFamily: any;
	@Input('labelSettings.font.fontStyle') labelSettings_font_fontStyle: any;
	@Input('labelSettings.font.fontWeight') labelSettings_font_fontWeight: any;
	@Input('labelSettings.font.opacity') labelSettings_font_opacity: any;
	@Input('labelSettings.font.color') labelSettings_font_color: any;
	@Input('labelSettings.font.size') labelSettings_font_size: any;
	@Input('geometryType') geometryType: any;
	@Input('layerType') layerType: any;
	@Input('legendSettings') legendSettings: any;
	@Input('legendSettings.dockOnMap') legendSettings_dockOnMap: any;
	@Input('legendSettings.dockPosition') legendSettings_dockPosition: any;
	@Input('legendSettings.height') legendSettings_height: any;
	@Input('legendSettings.icon') legendSettings_icon: any;
	@Input('legendSettings.iconHeight') legendSettings_iconHeight: any;
	@Input('legendSettings.iconWidth') legendSettings_iconWidth: any;
	@Input('legendSettings.labelOrientation') legendSettings_labelOrientation: any;
	@Input('legendSettings.leftLabel') legendSettings_leftLabel: any;
	@Input('legendSettings.textPath') legendSettings_textPath: any;
	@Input('legendSettings.mode') legendSettings_mode: any;
	@Input('legendSettings.position') legendSettings_position: any;
	@Input('legendSettings.positionX') legendSettings_positionX: any;
	@Input('legendSettings.positionY') legendSettings_positionY: any;
	@Input('legendSettings.rightLabel') legendSettings_rightLabel: any;
	@Input('legendSettings.showLabels') legendSettings_showLabels: any;
	@Input('legendSettings.showLegend') legendSettings_showLegend: any;
	@Input('legendSettings.toggleVisibility') legendSettings_toggleVisibility: any;
	@Input('legendSettings.title') legendSettings_title: any;
	@Input('legendSettings.type') legendSettings_type: any;
	@Input('legendSettings.width') legendSettings_width: any;
	@Input('mapItemsTemplate') mapItemsTemplate: any;
	@Input('markers') markers: any;
	@Input('markerTemplate') markerTemplate: any;
	@Input('selectedMapShapes') selectedMapShapes: any;
	@Input('selectionMode') selectionMode: any;
	@Input('shapeData') shapeData: any;
	@Input('shapeSettings') shapeSettings: any;
	@Input('shapeSettings.autoFill') shapeSettings_autoFill: any;
	@Input('shapeSettings.colorMappings') shapeSettings_colorMappings: any;
	@Input('shapeSettings.colorMappings.rangeColorMapping') shapeSettings_colorMappings_rangeColorMapping: any;
	@Input('shapeSettings.colorMappings.equalColorMapping') shapeSettings_colorMappings_equalColorMapping: any;
	@Input('shapeSettings.colorPalette') shapeSettings_colorPalette: any;
	@Input('shapeSettings.colorValuePath') shapeSettings_colorValuePath: any;
	@Input('shapeSettings.colorPath') shapeSettings_colorPath: any;
	@Input('shapeSettings.enableGradient') shapeSettings_enableGradient: any;
	@Input('shapeSettings.fill') shapeSettings_fill: any;
	@Input('shapeSettings.highlightBorderWidth') shapeSettings_highlightBorderWidth: any;
	@Input('shapeSettings.highlightColor') shapeSettings_highlightColor: any;
	@Input('shapeSettings.highlightStroke') shapeSettings_highlightStroke: any;
	@Input('shapeSettings.selectionColor') shapeSettings_selectionColor: any;
	@Input('shapeSettings.selectionStroke') shapeSettings_selectionStroke: any;
	@Input('shapeSettings.selectionStrokeWidth') shapeSettings_selectionStrokeWidth: any;
	@Input('shapeSettings.stroke') shapeSettings_stroke: any;
	@Input('shapeSettings.strokeThickness') shapeSettings_strokeThickness: any;
	@Input('shapeSettings.valuePath') shapeSettings_valuePath: any;
	@Input('showMapItems') showMapItems: any;
	@Input('showTooltip') showTooltip: any;
	@Input('tooltipTemplate') tooltipTemplate: any;
	@Input('urlTemplate') urlTemplate: any;
	@Input('subLayers') subLayers: any;

    
    constructor( @Inject(forwardRef(() => MapComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-map>e-layers',
    queries: {
        children: new ContentChildren(MapLayerDirective)
    }
})
export class MapLayersDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => MapComponent)) widget: EJComponents<any, any>) {
        super('layers')
        }
}




@Component({
    selector: 'ej-map',
    template: ''})
export class MapComponent extends EJComponents<any, any> {
	@Input('background') background_input: any;
	@Input('centerPosition') centerPosition_input: any;
	@Input('draggingOnSelection') draggingOnSelection_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableLayerChangeAnimation') enableLayerChangeAnimation_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('zoomSettings') zoomSettings_input: any;
	@Input('navigationControl') navigationControl_input: any;
	@Input('locale') locale_input: any;
	@Input('zoomSettings.animationDuration') zoomSettings_animationDuration_input: any;
	@Input('zoomSettings.enableMouseWheelZoom') zoomSettings_enableMouseWheelZoom_input: any;
	@Input('navigationControl.content') navigationControl_content_input: any;
	@Input('layers') layers_input: any;
	@Input('layers.bubbleSettings.colorMappings.rangeColorMapping') layers_bubbleSettings_colorMappings_rangeColorMapping_input: any;
	@Input('layers.shapeSettings.colorMappings.rangeColorMapping') layers_shapeSettings_colorMappings_rangeColorMapping_input: any;
	@Input('layers.shapeSettings.colorMappings.equalColorMapping') layers_shapeSettings_colorMappings_equalColorMapping_input: any;
	@Input('layers.subLayers.bubbleSettings.colorMappings.rangeColorMapping') layers_subLayers_bubbleSettings_colorMappings_rangeColorMapping_input: any;
	@Input('layers.subLayers.shapeSettings.colorMappings.rangeColorMapping') layers_subLayers_shapeSettings_colorMappings_rangeColorMapping_input: any;
	@Input('layers.subLayers.shapeSettings.colorMappings.equalColorMapping') layers_subLayers_shapeSettings_colorMappings_equalColorMapping_input: any;
    @Input('options') options: any;

	@Input('baseMapIndex') baseMapIndex_two: any;
	@Output('baseMapIndexChange') baseMapIndex_twoChange = new EventEmitter<any>();
	@Input('enablePan') enablePan_two: any;
	@Output('enablePanChange') enablePan_twoChange = new EventEmitter<any>();
	@Input('enableResize') enableResize_two: any;
	@Output('enableResizeChange') enableResize_twoChange = new EventEmitter<any>();
	@Input('enableAnimation') enableAnimation_two: any;
	@Output('enableAnimationChange') enableAnimation_twoChange = new EventEmitter<any>();
	@Input('zoomSettings.level') zoomSettings_level_two: any;
	@Output('zoomSettings.levelChange') zoomSettings_level_twoChange = new EventEmitter<any>();
	@Input('zoomSettings.minValue') zoomSettings_minValue_two: any;
	@Output('zoomSettings.minValueChange') zoomSettings_minValue_twoChange = new EventEmitter<any>();
	@Input('zoomSettings.maxValue') zoomSettings_maxValue_two: any;
	@Output('zoomSettings.maxValueChange') zoomSettings_maxValue_twoChange = new EventEmitter<any>();
	@Input('zoomSettings.factor') zoomSettings_factor_two: any;
	@Output('zoomSettings.factorChange') zoomSettings_factor_twoChange = new EventEmitter<any>();
	@Input('zoomSettings.enableZoom') zoomSettings_enableZoom_two: any;
	@Output('zoomSettings.enableZoomChange') zoomSettings_enableZoom_twoChange = new EventEmitter<any>();
	@Input('zoomSettings.enableZoomOnSelection') zoomSettings_enableZoomOnSelection_two: any;
	@Output('zoomSettings.enableZoomOnSelectionChange') zoomSettings_enableZoomOnSelection_twoChange = new EventEmitter<any>();
	@Input('navigationControl.enableNavigation') navigationControl_enableNavigation_two: any;
	@Output('navigationControl.enableNavigationChange') navigationControl_enableNavigation_twoChange = new EventEmitter<any>();
	@Input('navigationControl.orientation') navigationControl_orientation_two: any;
	@Output('navigationControl.orientationChange') navigationControl_orientation_twoChange = new EventEmitter<any>();
	@Input('navigationControl.absolutePosition') navigationControl_absolutePosition_two: any;
	@Output('navigationControl.absolutePositionChange') navigationControl_absolutePosition_twoChange = new EventEmitter<any>();
	@Input('navigationControl.dockPosition') navigationControl_dockPosition_two: any;
	@Output('navigationControl.dockPositionChange') navigationControl_dockPosition_twoChange = new EventEmitter<any>();

	@Output('markerSelected') markerSelected_output = new EventEmitter();
	@Output('legendItemRendering') legendItemRendering_output = new EventEmitter();
	@Output('bubbleRendering') bubbleRendering_output = new EventEmitter();
	@Output('shapeRendering') shapeRendering_output = new EventEmitter();
	@Output('mouseleave') mouseleave_output = new EventEmitter();
	@Output('mouseover') mouseover_output = new EventEmitter();
	@Output('onRenderComplete') onRenderComplete_output = new EventEmitter();
	@Output('panned') panned_output = new EventEmitter();
	@Output('shapeSelected') shapeSelected_output = new EventEmitter();
	@Output('zoomedIn') zoomedIn_output = new EventEmitter();
	@Output('zoomedOut') zoomedOut_output = new EventEmitter();
	@Output('Click') Click_output = new EventEmitter();
	@Output('legendItemClick') legendItemClick_output = new EventEmitter();
	@Output('doubleClick') doubleClick_output = new EventEmitter();
	@Output('rightClick') rightClick_output = new EventEmitter();
	@Output('onLoad') onLoad_output = new EventEmitter();
	@Output('markerEnter') markerEnter_output = new EventEmitter();
	@Output('markerLeave') markerLeave_output = new EventEmitter();
	@Output('refreshed') refreshed_output = new EventEmitter();
	@Output('displayTextRendering') displayTextRendering_output = new EventEmitter();

	@ContentChild(MapLayersDirective) tag_layers: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('Map', el, cdRef, ['layers'], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_MAP_COMPONENTS: Type<any>[] = [MapComponent
, MapLayersDirective, MapLayerDirective];


