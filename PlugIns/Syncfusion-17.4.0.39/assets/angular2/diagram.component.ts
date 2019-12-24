import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.diagram.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-commandmanager-commands>e-commandmanager-command',
})
export class DiagramCommandManagerCommandDirective extends ComplexTagElement {

	@Input('canExecute') canExecute: any;
	@Input('execute') execute: any;
	@Input('gesture') gesture: any;
	@Input('gesture.key') gesture_key: any;
	@Input('gesture.keyModifiers') gesture_keyModifiers: any;
	@Input('parameter') parameter: any;

    
    constructor( @Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-diagram>e-commandmanager-commands',
    queries: {
        children: new ContentChildren(DiagramCommandManagerCommandDirective)
    }
})
export class DiagramCommandManagerCommandsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super('commandManager.commands')
        }
}

@Directive({
    selector: 'e-segments>e-segment',
})
export class DiagramSegmentDirective extends ComplexTagElement {

	@Input('direction') direction: any;
	@Input('length') length: any;
	@Input('point') point: any;
	@Input('point1') point1: any;
	@Input('point2') point2: any;
	@Input('type') type: any;
	@Input('vector1') vector1: any;
	@Input('vector2') vector2: any;

    
    constructor( @Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-connectors>e-segments',
    queries: {
        children: new ContentChildren(DiagramSegmentDirective)
    }
})
export class DiagramSegmentsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super('segments')
        }
}

@Directive({
    selector: 'e-connectorlabels>e-connectorlabel',
})
export class DiagramConnectorLabelDirective extends ComplexTagElement {

	@Input('alignment') alignment: any;
	@Input('bold') bold: any;
	@Input('borderColor') borderColor: any;
	@Input('borderWidth') borderWidth: any;
	@Input('boundaryConstraints') boundaryConstraints: any;
	@Input('constraints') constraints: any;
	@Input('fillColor') fillColor: any;
	@Input('fontColor') fontColor: any;
	@Input('fontFamily') fontFamily: any;
	@Input('fontSize') fontSize: any;
	@Input('height') height: any;
	@Input('horizontalAlignment') horizontalAlignment: any;
	@Input('hyperlink') hyperlink: any;
	@Input('italic') italic: any;
	@Input('mode') mode: any;
	@Input('name') name: any;
	@Input('offset') offset: any;
	@Input('margin') margin: any;
	@Input('margin.right') margin_right: any;
	@Input('margin.left') margin_left: any;
	@Input('margin.top') margin_top: any;
	@Input('margin.bottom') margin_bottom: any;
	@Input('padding') padding: any;
	@Input('dragLimit') dragLimit: any;
	@Input('dragLimit.right') dragLimit_right: any;
	@Input('dragLimit.left') dragLimit_left: any;
	@Input('dragLimit.top') dragLimit_top: any;
	@Input('dragLimit.bottom') dragLimit_bottom: any;
	@Input('opacity') opacity: any;
	@Input('readOnly') readOnly: any;
	@Input('relativeMode') relativeMode: any;
	@Input('rotateAngle') rotateAngle: any;
	@Input('segmentOffset') segmentOffset: any;
	@Input('text') text: any;
	@Input('textAlign') textAlign: any;
	@Input('textDecoration') textDecoration: any;
	@Input('verticalAlignment') verticalAlignment: any;
	@Input('visible') visible: any;
	@Input('width') width: any;
	@Input('wrapping') wrapping: any;

    
    constructor( @Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-connectors>e-connectorlabels',
    queries: {
        children: new ContentChildren(DiagramConnectorLabelDirective)
    }
})
export class DiagramConnectorLabelsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super('labels')
        }
}

@Directive({
    selector: 'e-connectors>e-connector',
})
export class DiagramConnectorDirective extends ComplexTagElement {

	@Input('addInfo') addInfo: any;
	@Input('bridgeSpace') bridgeSpace: any;
	@Input('constraints') constraints: any;
	@Input('cornerRadius') cornerRadius: any;
	@Input('cssClass') cssClass: any;
	@Input('horizontalAlign') horizontalAlign: any;
	@Input('labels') labels: any;
	@Input('lineColor') lineColor: any;
	@Input('lineDashArray') lineDashArray: any;
	@Input('lineHitPadding') lineHitPadding: any;
	@Input('lineWidth') lineWidth: any;
	@Input('marginBottom') marginBottom: any;
	@Input('marginLeft') marginLeft: any;
	@Input('marginRight') marginRight: any;
	@Input('marginTop') marginTop: any;
	@Input('name') name: any;
	@Input('opacity') opacity: any;
	@Input('paletteItem') paletteItem: any;
	@Input('parent') parent: any;
	@Input('segments') segments: any;
	@Input('shape') shape: any;
	@Input('shape.type') shape_type: any;
	@Input('shape.flow') shape_flow: any;
	@Input('shape.association') shape_association: any;
	@Input('shape.message') shape_message: any;
	@Input('shape.sequence') shape_sequence: any;
	@Input('shape.relationship') shape_relationship: any;
	@Input('shape.multiplicity') shape_multiplicity: any;
	@Input('shape.multiplicity.type') shape_multiplicity_type: any;
	@Input('shape.multiplicity.source') shape_multiplicity_source: any;
	@Input('shape.multiplicity.source.optional') shape_multiplicity_source_optional: any;
	@Input('shape.multiplicity.source.lowerBounds') shape_multiplicity_source_lowerBounds: any;
	@Input('shape.multiplicity.source.upperBounds') shape_multiplicity_source_upperBounds: any;
	@Input('shape.multiplicity.target') shape_multiplicity_target: any;
	@Input('shape.ActivityFlow') shape_ActivityFlow: any;
	@Input('sourceDecorator') sourceDecorator: any;
	@Input('sourceDecorator.borderColor') sourceDecorator_borderColor: any;
	@Input('sourceDecorator.borderWidth') sourceDecorator_borderWidth: any;
	@Input('sourceDecorator.cssClass') sourceDecorator_cssClass: any;
	@Input('sourceDecorator.fillColor') sourceDecorator_fillColor: any;
	@Input('sourceDecorator.height') sourceDecorator_height: any;
	@Input('sourceDecorator.pathData') sourceDecorator_pathData: any;
	@Input('sourceDecorator.shape') sourceDecorator_shape: any;
	@Input('sourceDecorator.width') sourceDecorator_width: any;
	@Input('sourceNode') sourceNode: any;
	@Input('sourcePadding') sourcePadding: any;
	@Input('sourcePoint') sourcePoint: any;
	@Input('sourcePoint.x') sourcePoint_x: any;
	@Input('sourcePoint.y') sourcePoint_y: any;
	@Input('sourcePort') sourcePort: any;
	@Input('targetDecorator') targetDecorator: any;
	@Input('targetDecorator.borderColor') targetDecorator_borderColor: any;
	@Input('targetDecorator.cssClass') targetDecorator_cssClass: any;
	@Input('targetDecorator.fillColor') targetDecorator_fillColor: any;
	@Input('targetDecorator.height') targetDecorator_height: any;
	@Input('targetDecorator.pathData') targetDecorator_pathData: any;
	@Input('targetDecorator.shape') targetDecorator_shape: any;
	@Input('targetDecorator.width') targetDecorator_width: any;
	@Input('targetNode') targetNode: any;
	@Input('targetPadding') targetPadding: any;
	@Input('targetPoint') targetPoint: any;
	@Input('targetPort') targetPort: any;
	@Input('tooltip') tooltip: any;
	@Input('verticalAlign') verticalAlign: any;
	@Input('visible') visible: any;
	@Input('zOrder') zOrder: any;

	@ContentChild(DiagramSegmentsDirective) tag_segments: any;
	@ContentChild(DiagramConnectorLabelsDirective) tag_labels: any;
    
    constructor( @Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super(['segments', 'labels']);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-diagram>e-connectors',
    queries: {
        children: new ContentChildren(DiagramConnectorDirective)
    }
})
export class DiagramConnectorsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super('connectors')
        }
}

@Directive({
    selector: 'e-nodelabels>e-nodelabel',
})
export class DiagramNodeLabelDirective extends ComplexTagElement {

	@Input('bold') bold: any;
	@Input('borderColor') borderColor: any;
	@Input('borderWidth') borderWidth: any;
	@Input('cssClass') cssClass: any;
	@Input('constraints') constraints: any;
	@Input('fillColor') fillColor: any;
	@Input('fontColor') fontColor: any;
	@Input('fontFamily') fontFamily: any;
	@Input('fontSize') fontSize: any;
	@Input('height') height: any;
	@Input('horizontalAlignment') horizontalAlignment: any;
	@Input('italic') italic: any;
	@Input('margin') margin: any;
	@Input('mode') mode: any;
	@Input('name') name: any;
	@Input('offset') offset: any;
	@Input('opacity') opacity: any;
	@Input('overflowType') overflowType: any;
	@Input('padding') padding: any;
	@Input('readOnly') readOnly: any;
	@Input('rotateAngle') rotateAngle: any;
	@Input('templateId') templateId: any;
	@Input('text') text: any;
	@Input('textAlign') textAlign: any;
	@Input('textDecoration') textDecoration: any;
	@Input('textOverflow') textOverflow: any;
	@Input('verticalAlignment') verticalAlignment: any;
	@Input('visible') visible: any;
	@Input('width') width: any;
	@Input('wrapping') wrapping: any;

    
    constructor( @Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-nodes>e-nodelabels',
    queries: {
        children: new ContentChildren(DiagramNodeLabelDirective)
    }
})
export class DiagramNodeLabelsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super('labels')
        }
}

@Directive({
    selector: 'e-phases>e-phase',
})
export class DiagramPhaseDirective extends ComplexTagElement {

	@Input('label') label: any;
	@Input('lineColor') lineColor: any;
	@Input('lineDashArray') lineDashArray: any;
	@Input('lineWidth') lineWidth: any;
	@Input('name') name: any;
	@Input('offset') offset: any;
	@Input('orientation') orientation: any;
	@Input('type') type: any;

    
    constructor( @Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-nodes>e-phases',
    queries: {
        children: new ContentChildren(DiagramPhaseDirective)
    }
})
export class DiagramPhasesDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super('phases')
        }
}

@Directive({
    selector: 'e-ports>e-port',
})
export class DiagramPortDirective extends ComplexTagElement {

	@Input('borderColor') borderColor: any;
	@Input('borderWidth') borderWidth: any;
	@Input('connectorPadding') connectorPadding: any;
	@Input('constraints') constraints: any;
	@Input('cssClass') cssClass: any;
	@Input('fillColor') fillColor: any;
	@Input('name') name: any;
	@Input('offset') offset: any;
	@Input('pathData') pathData: any;
	@Input('shape') shape: any;
	@Input('size') size: any;
	@Input('visibility') visibility: any;
	@Input('parent') parent: any;

    
    constructor( @Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-nodes>e-ports',
    queries: {
        children: new ContentChildren(DiagramPortDirective)
    }
})
export class DiagramPortsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super('ports')
        }
}

@Directive({
    selector: 'e-nodes>e-node',
})
export class DiagramNodeDirective extends ComplexTagElement {

	@Input('activity') activity: any;
	@Input('addInfo') addInfo: any;
	@Input('annotation') annotation: any;
	@Input('annotation.angle') annotation_angle: any;
	@Input('annotation.direction') annotation_direction: any;
	@Input('annotation.height') annotation_height: any;
	@Input('annotation.length') annotation_length: any;
	@Input('annotation.text') annotation_text: any;
	@Input('annotation.width') annotation_width: any;
	@Input('borderColor') borderColor: any;
	@Input('borderDashArray') borderDashArray: any;
	@Input('borderWidth') borderWidth: any;
	@Input('canUngroup') canUngroup: any;
	@Input('children') children: any;
	@Input('classifier') classifier: any;
	@Input('class') class: any;
	@Input('class.name') class_name: any;
	@Input('class.attributes') class_attributes: any;
	@Input('class.methods') class_methods: any;
	@Input('collapseIcon') collapseIcon: any;
	@Input('collapseIcon.borderColor') collapseIcon_borderColor: any;
	@Input('collapseIcon.borderWidth') collapseIcon_borderWidth: any;
	@Input('collapseIcon.fillColor') collapseIcon_fillColor: any;
	@Input('collapseIcon.height') collapseIcon_height: any;
	@Input('collapseIcon.horizontalAlignment') collapseIcon_horizontalAlignment: any;
	@Input('collapseIcon.margin') collapseIcon_margin: any;
	@Input('collapseIcon.offset') collapseIcon_offset: any;
	@Input('collapseIcon.shape') collapseIcon_shape: any;
	@Input('collapseIcon.verticalAlignment') collapseIcon_verticalAlignment: any;
	@Input('connectorPadding') connectorPadding: any;
	@Input('constraints') constraints: any;
	@Input('container') container: any;
	@Input('container.orientation') container_orientation: any;
	@Input('container.type') container_type: any;
	@Input('cornerRadius') cornerRadius: any;
	@Input('cssClass') cssClass: any;
	@Input('data') data: any;
	@Input('data.type') data_type: any;
	@Input('data.collection') data_collection: any;
	@Input('enumeration') enumeration: any;
	@Input('enumeration.name') enumeration_name: any;
	@Input('enumeration.members') enumeration_members: any;
	@Input('event') event: any;
	@Input('excludeFromLayout') excludeFromLayout: any;
	@Input('expandIcon') expandIcon: any;
	@Input('expandIcon.borderColor') expandIcon_borderColor: any;
	@Input('expandIcon.borderWidth') expandIcon_borderWidth: any;
	@Input('expandIcon.fillColor') expandIcon_fillColor: any;
	@Input('expandIcon.height') expandIcon_height: any;
	@Input('expandIcon.horizontalAlignment') expandIcon_horizontalAlignment: any;
	@Input('expandIcon.margin') expandIcon_margin: any;
	@Input('expandIcon.offset') expandIcon_offset: any;
	@Input('expandIcon.shape') expandIcon_shape: any;
	@Input('expandIcon.verticalAlignment') expandIcon_verticalAlignment: any;
	@Input('fillColor') fillColor: any;
	@Input('gateway') gateway: any;
	@Input('gradient') gradient: any;
	@Input('gradient.LinearGradient') gradient_LinearGradient: any;
	@Input('gradient.LinearGradient.stops') gradient_LinearGradient_stops: any;
	@Input('gradient.LinearGradient.type') gradient_LinearGradient_type: any;
	@Input('gradient.LinearGradient.x1') gradient_LinearGradient_x1: any;
	@Input('gradient.LinearGradient.x2') gradient_LinearGradient_x2: any;
	@Input('gradient.LinearGradient.y1') gradient_LinearGradient_y1: any;
	@Input('gradient.LinearGradient.y2') gradient_LinearGradient_y2: any;
	@Input('gradient.RadialGradient') gradient_RadialGradient: any;
	@Input('gradient.RadialGradient.type') gradient_RadialGradient_type: any;
	@Input('gradient.RadialGradient.cx') gradient_RadialGradient_cx: any;
	@Input('gradient.RadialGradient.cy') gradient_RadialGradient_cy: any;
	@Input('gradient.RadialGradient.fx') gradient_RadialGradient_fx: any;
	@Input('gradient.RadialGradient.fy') gradient_RadialGradient_fy: any;
	@Input('gradient.RadialGradient.stops') gradient_RadialGradient_stops: any;
	@Input('gradient.Stop') gradient_Stop: any;
	@Input('gradient.Stop.color') gradient_Stop_color: any;
	@Input('gradient.Stop.offset') gradient_Stop_offset: any;
	@Input('gradient.Stop.opacity') gradient_Stop_opacity: any;
	@Input('borderGradient') borderGradient: any;
	@Input('header') header: any;
	@Input('height') height: any;
	@Input('horizontalAlign') horizontalAlign: any;
	@Input('inEdges') inEdges: any;
	@Input('interface') interface: any;
	@Input('interface.name') interface_name: any;
	@Input('interface.attributes') interface_attributes: any;
	@Input('interface.methods') interface_methods: any;
	@Input('isExpanded') isExpanded: any;
	@Input('isSwimlane') isSwimlane: any;
	@Input('labels') labels: any;
	@Input('lanes') lanes: any;
	@Input('marginBottom') marginBottom: any;
	@Input('marginLeft') marginLeft: any;
	@Input('marginRight') marginRight: any;
	@Input('marginTop') marginTop: any;
	@Input('maxHeight') maxHeight: any;
	@Input('maxWidth') maxWidth: any;
	@Input('minHeight') minHeight: any;
	@Input('minWidth') minWidth: any;
	@Input('name') name: any;
	@Input('offsetX') offsetX: any;
	@Input('offsetY') offsetY: any;
	@Input('opacity') opacity: any;
	@Input('orientation') orientation: any;
	@Input('outEdges') outEdges: any;
	@Input('paddingBottom') paddingBottom: any;
	@Input('paddingLeft') paddingLeft: any;
	@Input('paddingRight') paddingRight: any;
	@Input('paddingTop') paddingTop: any;
	@Input('paletteItem') paletteItem: any;
	@Input('paletteItem.enableScale') paletteItem_enableScale: any;
	@Input('paletteItem.height') paletteItem_height: any;
	@Input('paletteItem.label') paletteItem_label: any;
	@Input('paletteItem.margin') paletteItem_margin: any;
	@Input('paletteItem.previewHeight') paletteItem_previewHeight: any;
	@Input('paletteItem.previewWidth') paletteItem_previewWidth: any;
	@Input('paletteItem.width') paletteItem_width: any;
	@Input('parent') parent: any;
	@Input('pathData') pathData: any;
	@Input('phases') phases: any;
	@Input('phaseSize') phaseSize: any;
	@Input('pivot') pivot: any;
	@Input('points') points: any;
	@Input('ports') ports: any;
	@Input('rotateAngle') rotateAngle: any;
	@Input('shadow') shadow: any;
	@Input('shadow.angle') shadow_angle: any;
	@Input('shadow.distance') shadow_distance: any;
	@Input('shadow.opacity') shadow_opacity: any;
	@Input('shape') shape: any;
	@Input('source') source: any;
	@Input('subProcess') subProcess: any;
	@Input('subProcess.adhoc') subProcess_adhoc: any;
	@Input('subProcess.boundary') subProcess_boundary: any;
	@Input('subProcess.compensation') subProcess_compensation: any;
	@Input('subProcess.collapsed') subProcess_collapsed: any;
	@Input('subProcess.event') subProcess_event: any;
	@Input('subProcess.events') subProcess_events: any;
	@Input('subProcess.loop') subProcess_loop: any;
	@Input('subProcess.Processes') subProcess_Processes: any;
	@Input('subProcess.trigger') subProcess_trigger: any;
	@Input('subProcess.type') subProcess_type: any;
	@Input('task') task: any;
	@Input('task.call') task_call: any;
	@Input('task.compensation') task_compensation: any;
	@Input('task.loop') task_loop: any;
	@Input('task.type') task_type: any;
	@Input('task.events') task_events: any;
	@Input('templateId') templateId: any;
	@Input('textBlock') textBlock: any;
	@Input('tooltip') tooltip: any;
	@Input('trigger') trigger: any;
	@Input('type') type: any;
	@Input('verticalAlign') verticalAlign: any;
	@Input('visible') visible: any;
	@Input('width') width: any;
	@Input('zOrder') zOrder: any;

	@ContentChild(DiagramNodeLabelsDirective) tag_labels: any;
	@ContentChild(DiagramPhasesDirective) tag_phases: any;
	@ContentChild(DiagramPortsDirective) tag_ports: any;
    
    constructor( @Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super(['labels', 'phases', 'ports']);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-diagram>e-nodes',
    queries: {
        children: new ContentChildren(DiagramNodeDirective)
    }
})
export class DiagramNodesDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => DiagramComponent)) widget: EJComponents<any, any>) {
        super('nodes')
        }
}




@Component({
    selector: 'ej-diagram',
    template: ''})
export class DiagramComponent extends EJComponents<any, any> {
	@Input('backgroundColor') backgroundColor_input: any;
	@Input('backgroundImage') backgroundImage_input: any;
	@Input('bridgeDirection') bridgeDirection_input: any;
	@Input('commandManager') commandManager_input: any;
	@Input('connectorTemplate') connectorTemplate_input: any;
	@Input('constraints') constraints_input: any;
	@Input('contextMenu') contextMenu_input: any;
	@Input('dataSourceSettings') dataSourceSettings_input: any;
	@Input('defaultSettings') defaultSettings_input: any;
	@Input('drawType') drawType_input: any;
	@Input('enableAutoScroll') enableAutoScroll_input: any;
	@Input('enableContextMenu') enableContextMenu_input: any;
	@Input('height') height_input: any;
	@Input('historyManager') historyManager_input: any;
	@Input('labelRenderingMode') labelRenderingMode_input: any;
	@Input('layout') layout_input: any;
	@Input('locale') locale_input: any;
	@Input('nodeTemplate') nodeTemplate_input: any;
	@Input('pageSettings') pageSettings_input: any;
	@Input('scrollSettings') scrollSettings_input: any;
	@Input('selectedItems') selectedItems_input: any;
	@Input('showTooltip') showTooltip_input: any;
	@Input('serializationSettings') serializationSettings_input: any;
	@Input('rulerSettings') rulerSettings_input: any;
	@Input('snapSettings') snapSettings_input: any;
	@Input('tool') tool_input: any;
	@Input('tooltip') tooltip_input: any;
	@Input('width') width_input: any;
	@Input('zoomFactor') zoomFactor_input: any;
	@Input('backgroundImage.alignment') backgroundImage_alignment_input: any;
	@Input('commandManager.commands') commandManager_commands_input: any;
	@Input('commandManager.commands.canExecute') commandManager_commands_canExecute_input: any;
	@Input('commandManager.commands.execute') commandManager_commands_execute_input: any;
	@Input('commandManager.commands.gesture') commandManager_commands_gesture_input: any;
	@Input('commandManager.commands.parameter') commandManager_commands_parameter_input: any;
	@Input('contextMenu.showCustomMenuItemsOnly') contextMenu_showCustomMenuItemsOnly_input: any;
	@Input('dataSourceSettings.dataSource') dataSourceSettings_dataSource_input: any;
	@Input('dataSourceSettings.id') dataSourceSettings_id_input: any;
	@Input('dataSourceSettings.parent') dataSourceSettings_parent_input: any;
	@Input('dataSourceSettings.query') dataSourceSettings_query_input: any;
	@Input('dataSourceSettings.root') dataSourceSettings_root_input: any;
	@Input('dataSourceSettings.tableName') dataSourceSettings_tableName_input: any;
	@Input('dataSourceSettings.crudAction') dataSourceSettings_crudAction_input: any;
	@Input('dataSourceSettings.crudAction.create') dataSourceSettings_crudAction_create_input: any;
	@Input('dataSourceSettings.crudAction.update') dataSourceSettings_crudAction_update_input: any;
	@Input('dataSourceSettings.crudAction.destroy') dataSourceSettings_crudAction_destroy_input: any;
	@Input('dataSourceSettings.crudAction.read') dataSourceSettings_crudAction_read_input: any;
	@Input('dataSourceSettings.customFields') dataSourceSettings_customFields_input: any;
	@Input('dataSourceSettings.connectionDataSource') dataSourceSettings_connectionDataSource_input: any;
	@Input('dataSourceSettings.connectionDataSource.dataSource') dataSourceSettings_connectionDataSource_dataSource_input: any;
	@Input('dataSourceSettings.connectionDataSource.id') dataSourceSettings_connectionDataSource_id_input: any;
	@Input('dataSourceSettings.connectionDataSource.sourceNode') dataSourceSettings_connectionDataSource_sourceNode_input: any;
	@Input('dataSourceSettings.connectionDataSource.targetNode') dataSourceSettings_connectionDataSource_targetNode_input: any;
	@Input('dataSourceSettings.connectionDataSource.sourcePointX') dataSourceSettings_connectionDataSource_sourcePointX_input: any;
	@Input('dataSourceSettings.connectionDataSource.sourcePointY') dataSourceSettings_connectionDataSource_sourcePointY_input: any;
	@Input('dataSourceSettings.connectionDataSource.targetPointX') dataSourceSettings_connectionDataSource_targetPointX_input: any;
	@Input('dataSourceSettings.connectionDataSource.targetPointY') dataSourceSettings_connectionDataSource_targetPointY_input: any;
	@Input('dataSourceSettings.connectionDataSource.crudAction') dataSourceSettings_connectionDataSource_crudAction_input: any;
	@Input('dataSourceSettings.connectionDataSource.customFields') dataSourceSettings_connectionDataSource_customFields_input: any;
	@Input('defaultSettings.connector') defaultSettings_connector_input: any;
	@Input('defaultSettings.group') defaultSettings_group_input: any;
	@Input('defaultSettings.node') defaultSettings_node_input: any;
	@Input('historyManager.canPop') historyManager_canPop_input: any;
	@Input('historyManager.closeGroupAction') historyManager_closeGroupAction_input: any;
	@Input('historyManager.pop') historyManager_pop_input: any;
	@Input('historyManager.push') historyManager_push_input: any;
	@Input('historyManager.redo') historyManager_redo_input: any;
	@Input('historyManager.redoStack') historyManager_redoStack_input: any;
	@Input('historyManager.stackLimit') historyManager_stackLimit_input: any;
	@Input('historyManager.startGroupAction') historyManager_startGroupAction_input: any;
	@Input('historyManager.undo') historyManager_undo_input: any;
	@Input('historyManager.undoStack') historyManager_undoStack_input: any;
	@Input('layout.bounds') layout_bounds_input: any;
	@Input('layout.fixedNode') layout_fixedNode_input: any;
	@Input('layout.getLayoutInfo') layout_getLayoutInfo_input: any;
	@Input('layout.getConnectorSegments') layout_getConnectorSegments_input: any;
	@Input('layout.horizontalSpacing') layout_horizontalSpacing_input: any;
	@Input('layout.margin') layout_margin_input: any;
	@Input('layout.horizontalAlignment') layout_horizontalAlignment_input: any;
	@Input('layout.verticalAlignment') layout_verticalAlignment_input: any;
	@Input('layout.orientation') layout_orientation_input: any;
	@Input('layout.type') layout_type_input: any;
	@Input('layout.verticalSpacing') layout_verticalSpacing_input: any;
	@Input('layout.root') layout_root_input: any;
	@Input('layout.springLength') layout_springLength_input: any;
	@Input('layout.springFactor') layout_springFactor_input: any;
	@Input('layout.maxIteration') layout_maxIteration_input: any;
	@Input('layout.avoidSegmentOverlapping') layout_avoidSegmentOverlapping_input: any;
	@Input('pageSettings.autoScrollBorder') pageSettings_autoScrollBorder_input: any;
	@Input('pageSettings.multiplePage') pageSettings_multiplePage_input: any;
	@Input('pageSettings.pageBackgroundColor') pageSettings_pageBackgroundColor_input: any;
	@Input('pageSettings.pageBorderColor') pageSettings_pageBorderColor_input: any;
	@Input('pageSettings.pageBorderWidth') pageSettings_pageBorderWidth_input: any;
	@Input('pageSettings.pageHeight') pageSettings_pageHeight_input: any;
	@Input('pageSettings.pageMargin') pageSettings_pageMargin_input: any;
	@Input('pageSettings.pageOrientation') pageSettings_pageOrientation_input: any;
	@Input('pageSettings.pageWidth') pageSettings_pageWidth_input: any;
	@Input('pageSettings.scrollableArea') pageSettings_scrollableArea_input: any;
	@Input('pageSettings.scrollLimit') pageSettings_scrollLimit_input: any;
	@Input('pageSettings.boundaryConstraints') pageSettings_boundaryConstraints_input: any;
	@Input('pageSettings.showPageBreak') pageSettings_showPageBreak_input: any;
	@Input('scrollSettings.currentZoom') scrollSettings_currentZoom_input: any;
	@Input('scrollSettings.horizontalOffset') scrollSettings_horizontalOffset_input: any;
	@Input('scrollSettings.padding') scrollSettings_padding_input: any;
	@Input('scrollSettings.verticalOffset') scrollSettings_verticalOffset_input: any;
	@Input('scrollSettings.viewPortHeight') scrollSettings_viewPortHeight_input: any;
	@Input('scrollSettings.viewPortWidth') scrollSettings_viewPortWidth_input: any;
	@Input('selectedItems.children') selectedItems_children_input: any;
	@Input('selectedItems.constraints') selectedItems_constraints_input: any;
	@Input('selectedItems.getConstraints') selectedItems_getConstraints_input: any;
	@Input('selectedItems.height') selectedItems_height_input: any;
	@Input('selectedItems.offsetX') selectedItems_offsetX_input: any;
	@Input('selectedItems.offsetY') selectedItems_offsetY_input: any;
	@Input('selectedItems.rotateAngle') selectedItems_rotateAngle_input: any;
	@Input('selectedItems.tooltip') selectedItems_tooltip_input: any;
	@Input('selectedItems.width') selectedItems_width_input: any;
	@Input('serializationSettings.preventDefaultValues') serializationSettings_preventDefaultValues_input: any;
	@Input('rulerSettings.showRulers') rulerSettings_showRulers_input: any;
	@Input('rulerSettings.horizontalRuler') rulerSettings_horizontalRuler_input: any;
	@Input('rulerSettings.horizontalRuler.interval') rulerSettings_horizontalRuler_interval_input: any;
	@Input('rulerSettings.horizontalRuler.segmentWidth') rulerSettings_horizontalRuler_segmentWidth_input: any;
	@Input('rulerSettings.horizontalRuler.arrangeTick') rulerSettings_horizontalRuler_arrangeTick_input: any;
	@Input('rulerSettings.horizontalRuler.tickAlignment') rulerSettings_horizontalRuler_tickAlignment_input: any;
	@Input('rulerSettings.horizontalRuler.markerColor') rulerSettings_horizontalRuler_markerColor_input: any;
	@Input('rulerSettings.horizontalRuler.length') rulerSettings_horizontalRuler_length_input: any;
	@Input('rulerSettings.horizontalRuler.thickness') rulerSettings_horizontalRuler_thickness_input: any;
	@Input('rulerSettings.verticalRuler') rulerSettings_verticalRuler_input: any;
	@Input('rulerSettings.verticalRuler.interval') rulerSettings_verticalRuler_interval_input: any;
	@Input('rulerSettings.verticalRuler.segmentWidth') rulerSettings_verticalRuler_segmentWidth_input: any;
	@Input('rulerSettings.verticalRuler.arrangeTick') rulerSettings_verticalRuler_arrangeTick_input: any;
	@Input('rulerSettings.verticalRuler.tickAlignment') rulerSettings_verticalRuler_tickAlignment_input: any;
	@Input('rulerSettings.verticalRuler.markerColor') rulerSettings_verticalRuler_markerColor_input: any;
	@Input('rulerSettings.verticalRuler.length') rulerSettings_verticalRuler_length_input: any;
	@Input('rulerSettings.verticalRuler.thickness') rulerSettings_verticalRuler_thickness_input: any;
	@Input('snapSettings.enableSnapToObject') snapSettings_enableSnapToObject_input: any;
	@Input('snapSettings.horizontalGridLines') snapSettings_horizontalGridLines_input: any;
	@Input('snapSettings.horizontalGridLines.lineColor') snapSettings_horizontalGridLines_lineColor_input: any;
	@Input('snapSettings.horizontalGridLines.lineDashArray') snapSettings_horizontalGridLines_lineDashArray_input: any;
	@Input('snapSettings.horizontalGridLines.linesInterval') snapSettings_horizontalGridLines_linesInterval_input: any;
	@Input('snapSettings.horizontalGridLines.snapInterval') snapSettings_horizontalGridLines_snapInterval_input: any;
	@Input('snapSettings.snapAngle') snapSettings_snapAngle_input: any;
	@Input('snapSettings.snapConstraints') snapSettings_snapConstraints_input: any;
	@Input('snapSettings.snapObjectDistance') snapSettings_snapObjectDistance_input: any;
	@Input('snapSettings.verticalGridLines') snapSettings_verticalGridLines_input: any;
	@Input('snapSettings.verticalGridLines.lineColor') snapSettings_verticalGridLines_lineColor_input: any;
	@Input('snapSettings.verticalGridLines.lineDashArray') snapSettings_verticalGridLines_lineDashArray_input: any;
	@Input('snapSettings.verticalGridLines.linesInterval') snapSettings_verticalGridLines_linesInterval_input: any;
	@Input('snapSettings.verticalGridLines.snapInterval') snapSettings_verticalGridLines_snapInterval_input: any;
	@Input('tooltip.alignment') tooltip_alignment_input: any;
	@Input('tooltip.alignment.horizontal') tooltip_alignment_horizontal_input: any;
	@Input('tooltip.alignment.vertical') tooltip_alignment_vertical_input: any;
	@Input('tooltip.margin') tooltip_margin_input: any;
	@Input('tooltip.relativeMode') tooltip_relativeMode_input: any;
	@Input('tooltip.templateId') tooltip_templateId_input: any;
	@Input('connectors') connectors_input: any;
	@Input('nodes') nodes_input: any;
	@Input('layers') layers_input: any;
	@Input('contextMenu.items') contextMenu_items_input: any;
	@Input('nodes.class.attributes') nodes_class_attributes_input: any;
	@Input('nodes.class.methods') nodes_class_methods_input: any;
	@Input('nodes.enumeration.members') nodes_enumeration_members_input: any;
	@Input('nodes.interface.attributes') nodes_interface_attributes_input: any;
	@Input('nodes.interface.methods') nodes_interface_methods_input: any;
	@Input('nodes.subProcess.events') nodes_subProcess_events_input: any;
	@Input('selectedItems.userHandles') selectedItems_userHandles_input: any;
    @Input('options') options: any;


	@Output('autoScrollChange') autoScrollChange_output = new EventEmitter();
	@Output('click') click_output = new EventEmitter();
	@Output('ejclick') ejclick_output = new EventEmitter();
	@Output('connectionChange') connectionChange_output = new EventEmitter();
	@Output('connectorCollectionChange') connectorCollectionChange_output = new EventEmitter();
	@Output('connectorSourceChange') connectorSourceChange_output = new EventEmitter();
	@Output('connectorTargetChange') connectorTargetChange_output = new EventEmitter();
	@Output('contextMenuBeforeOpen') contextMenuBeforeOpen_output = new EventEmitter();
	@Output('contextMenuClick') contextMenuClick_output = new EventEmitter();
	@Output('doubleClick') doubleClick_output = new EventEmitter();
	@Output('drag') drag_output = new EventEmitter();
	@Output('dragEnter') dragEnter_output = new EventEmitter();
	@Output('dragLeave') dragLeave_output = new EventEmitter();
	@Output('dragOver') dragOver_output = new EventEmitter();
	@Output('drop') drop_output = new EventEmitter();
	@Output('editorFocusChange') editorFocusChange_output = new EventEmitter();
	@Output('groupChange') groupChange_output = new EventEmitter();
	@Output('historyChange') historyChange_output = new EventEmitter();
	@Output('itemClick') itemClick_output = new EventEmitter();
	@Output('mouseEnter') mouseEnter_output = new EventEmitter();
	@Output('mouseLeave') mouseLeave_output = new EventEmitter();
	@Output('mouseOver') mouseOver_output = new EventEmitter();
	@Output('nodeCollectionChange') nodeCollectionChange_output = new EventEmitter();
	@Output('propertyChange') propertyChange_output = new EventEmitter();
	@Output('rotationChange') rotationChange_output = new EventEmitter();
	@Output('scrollChange') scrollChange_output = new EventEmitter();
	@Output('segmentChange') segmentChange_output = new EventEmitter();
	@Output('selectionChange') selectionChange_output = new EventEmitter();
	@Output('sizeChange') sizeChange_output = new EventEmitter();
	@Output('textChange') textChange_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('setTool') setTool_output = new EventEmitter();

	@ContentChild(DiagramCommandManagerCommandsDirective) tag_commandManager_commands: any;
	@ContentChild(DiagramConnectorsDirective) tag_connectors: any;
	@ContentChild(DiagramNodesDirective) tag_nodes: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('Diagram', el, cdRef, ['commandManager.commands', 'connectors', 'nodes'], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_DIAGRAM_COMPONENTS: Type<any>[] = [DiagramComponent
, DiagramCommandManagerCommandsDirective, DiagramSegmentsDirective, DiagramConnectorLabelsDirective, DiagramConnectorsDirective, DiagramNodeLabelsDirective, DiagramPhasesDirective, DiagramPortsDirective, DiagramNodesDirective, DiagramCommandManagerCommandDirective, DiagramSegmentDirective, DiagramConnectorLabelDirective, DiagramConnectorDirective, DiagramNodeLabelDirective, DiagramPhaseDirective, DiagramPortDirective, DiagramNodeDirective];


