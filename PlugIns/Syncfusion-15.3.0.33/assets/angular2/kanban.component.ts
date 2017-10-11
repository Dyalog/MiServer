import 'syncfusion-javascript/Scripts/ej/web/ej.kanban.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-kanban-columns>e-kanban-column',
})
export class KanbanColumnDirective extends ComplexTagElement {

	@Input('headerText') headerText: any;
	@Input('totalCount') totalCount: any;
	@Input('totalCount.text') totalCount_text: any;
	@Input('key') key: any;
	@Input('allowDrop') allowDrop: any;
	@Input('allowDrag') allowDrag: any;
	@Input('isCollapsed') isCollapsed: any;
	@Input('constraints') constraints: any;
	@Input('constraints.type') constraints_type: any;
	@Input('constraints.min') constraints_min: any;
	@Input('constraints.max') constraints_max: any;
	@Input('headerTemplate') headerTemplate: any;
	@Input('width') width: any;
	@Input('visible') visible: any;
	@Input('showAddButton') showAddButton: any;

    
    constructor( @Inject(forwardRef(() => KanbanComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-kanban>e-kanban-columns',
    queries: {
        children: new ContentChildren(KanbanColumnDirective)
    }
})
export class KanbanColumnsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => KanbanComponent)) widget: EJComponents<any, any>) {
        super('columns')
        }
}




@Component({
    selector: 'ej-kanban',
    template: ''})
export class KanbanComponent extends EJComponents<any, any> {
	@Input('allowDragAndDrop') allowDragAndDrop_input: any;
	@Input('allowTitle') allowTitle_input: any;
	@Input('swimlaneSettings') swimlaneSettings_input: any;
	@Input('allowToggleColumn') allowToggleColumn_input: any;
	@Input('allowSearching') allowSearching_input: any;
	@Input('allowFiltering') allowFiltering_input: any;
	@Input('allowSelection') allowSelection_input: any;
	@Input('allowHover') allowHover_input: any;
	@Input('allowKeyboardNavigation') allowKeyboardNavigation_input: any;
	@Input('allowScrolling') allowScrolling_input: any;
	@Input('allowPrinting') allowPrinting_input: any;
	@Input('contextMenuSettings') contextMenuSettings_input: any;
	@Input('cardSettings') cardSettings_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enableTouch') enableTouch_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableTotalCount') enableTotalCount_input: any;
	@Input('editSettings') editSettings_input: any;
	@Input('fields') fields_input: any;
	@Input('keyField') keyField_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('minWidth') minWidth_input: any;
	@Input('query') query_input: any;
	@Input('keySettings') keySettings_input: any;
	@Input('scrollSettings') scrollSettings_input: any;
	@Input('searchSettings') searchSettings_input: any;
	@Input('selectionType') selectionType_input: any;
	@Input('tooltipSettings') tooltipSettings_input: any;
	@Input('locale') locale_input: any;
	@Input('swimlaneSettings.showCount') swimlaneSettings_showCount_input: any;
	@Input('swimlaneSettings.allowDragAndDrop') swimlaneSettings_allowDragAndDrop_input: any;
	@Input('swimlaneSettings.unassignedGroup') swimlaneSettings_unassignedGroup_input: any;
	@Input('swimlaneSettings.unassignedGroup.enable') swimlaneSettings_unassignedGroup_enable_input: any;
	@Input('swimlaneSettings.unassignedGroup.keys') swimlaneSettings_unassignedGroup_keys_input: any;
	@Input('contextMenuSettings.enable') contextMenuSettings_enable_input: any;
	@Input('contextMenuSettings.disableDefaultItems') contextMenuSettings_disableDefaultItems_input: any;
	@Input('contextMenuSettings.menuItems') contextMenuSettings_menuItems_input: any;
	@Input('cardSettings.template') cardSettings_template_input: any;
	@Input('cardSettings.colorMapping') cardSettings_colorMapping_input: any;
	@Input('editSettings.allowEditing') editSettings_allowEditing_input: any;
	@Input('editSettings.allowAdding') editSettings_allowAdding_input: any;
	@Input('editSettings.dialogTemplate') editSettings_dialogTemplate_input: any;
	@Input('editSettings.editMode') editSettings_editMode_input: any;
	@Input('editSettings.externalFormTemplate') editSettings_externalFormTemplate_input: any;
	@Input('editSettings.formPosition') editSettings_formPosition_input: any;
	@Input('fields.primaryKey') fields_primaryKey_input: any;
	@Input('fields.swimlaneKey') fields_swimlaneKey_input: any;
	@Input('fields.priority') fields_priority_input: any;
	@Input('fields.content') fields_content_input: any;
	@Input('fields.tag') fields_tag_input: any;
	@Input('fields.title') fields_title_input: any;
	@Input('fields.color') fields_color_input: any;
	@Input('fields.imageUrl') fields_imageUrl_input: any;
	@Input('fields.collapsibleCards') fields_collapsibleCards_input: any;
	@Input('fields.collapsibleCards.field') fields_collapsibleCards_field_input: any;
	@Input('fields.collapsibleCards.key') fields_collapsibleCards_key_input: any;
	@Input('scrollSettings.height') scrollSettings_height_input: any;
	@Input('scrollSettings.width') scrollSettings_width_input: any;
	@Input('scrollSettings.allowFreezeSwimlane') scrollSettings_allowFreezeSwimlane_input: any;
	@Input('searchSettings.fields') searchSettings_fields_input: any;
	@Input('searchSettings.key') searchSettings_key_input: any;
	@Input('searchSettings.operator') searchSettings_operator_input: any;
	@Input('searchSettings.ignoreCase') searchSettings_ignoreCase_input: any;
	@Input('tooltipSettings.enable') tooltipSettings_enable_input: any;
	@Input('tooltipSettings.template') tooltipSettings_template_input: any;
	@Input('columns') columns_input: any;
	@Input('customToolbarItems') customToolbarItems_input: any;
	@Input('filterSettings') filterSettings_input: any;
	@Input('stackedHeaderRows') stackedHeaderRows_input: any;
	@Input('workflows') workflows_input: any;
	@Input('contextMenuSettings.customMenuItems') contextMenuSettings_customMenuItems_input: any;
	@Input('editSettings.editItems') editSettings_editItems_input: any;

	@Input('dataSource') dataSource_two: any;
	@Output('dataSourceChange') dataSource_twoChange = new EventEmitter<any>();

	@Output('actionBegin') actionBegin_output = new EventEmitter();
	@Output('actionComplete') actionComplete_output = new EventEmitter();
	@Output('actionFailure') actionFailure_output = new EventEmitter();
	@Output('beginEdit') beginEdit_output = new EventEmitter();
	@Output('beforeCardSelect') beforeCardSelect_output = new EventEmitter();
	@Output('cardClick') cardClick_output = new EventEmitter();
	@Output('cardDrag') cardDrag_output = new EventEmitter();
	@Output('cardDragStart') cardDragStart_output = new EventEmitter();
	@Output('cardDragStop') cardDragStop_output = new EventEmitter();
	@Output('cardDrop') cardDrop_output = new EventEmitter();
	@Output('cardSelect') cardSelect_output = new EventEmitter();
	@Output('cardDoubleClick') cardDoubleClick_output = new EventEmitter();
	@Output('cardSelecting') cardSelecting_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('cellClick') cellClick_output = new EventEmitter();
	@Output('contextOpen') contextOpen_output = new EventEmitter();
	@Output('contextClick') contextClick_output = new EventEmitter();
	@Output('dataBound') dataBound_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('endDelete') endDelete_output = new EventEmitter();
	@Output('endEdit') endEdit_output = new EventEmitter();
	@Output('headerClick') headerClick_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('swimlaneClick') swimlaneClick_output = new EventEmitter();
	@Output('queryCellInfo') queryCellInfo_output = new EventEmitter();
	@Output('toolbarClick') toolbarClick_output = new EventEmitter();

	@ContentChild(KanbanColumnsDirective) tag_columns: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('Kanban', el, cdRef, ['columns']);
    }



}

export var EJ_KANBAN_COMPONENTS: Type<any>[] = [KanbanComponent
, KanbanColumnsDirective, KanbanColumnDirective];


