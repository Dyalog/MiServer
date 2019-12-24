import 'syncfusion-javascript/Scripts/ej/web/ej.treeview.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-treeview',
    template: '<ng-content></ng-content>'})
export class TreeViewComponent extends EJComponents<any, any> {
	@Input('allowDragAndDrop') allowDragAndDrop_input: any;
	@Input('allowDragAndDropAcrossControl') allowDragAndDropAcrossControl_input: any;
	@Input('allowDropSibling') allowDropSibling_input: any;
	@Input('allowDropChild') allowDropChild_input: any;
	@Input('allowEditing') allowEditing_input: any;
	@Input('allowKeyboardNavigation') allowKeyboardNavigation_input: any;
	@Input('allowMultiSelection') allowMultiSelection_input: any;
	@Input('autoCheck') autoCheck_input: any;
	@Input('autoCheckParentNode') autoCheckParentNode_input: any;
	@Input('checkedNodes') checkedNodes_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enableMultipleExpand') enableMultipleExpand_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('expandedNodes') expandedNodes_input: any;
	@Input('expandOn') expandOn_input: any;
	@Input('fields') fields_input: any;
	@Input('fullRowSelect') fullRowSelect_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('loadOnDemand') loadOnDemand_input: any;
	@Input('selectedNode') selectedNode_input: any;
	@Input('selectedNodes') selectedNodes_input: any;
	@Input('showCheckbox') showCheckbox_input: any;
	@Input('sortSettings') sortSettings_input: any;
	@Input('template') template_input: any;
	@Input('width') width_input: any;
	@Input('fields.child') fields_child_input: any;
	@Input('fields.expanded') fields_expanded_input: any;
	@Input('fields.hasChild') fields_hasChild_input: any;
	@Input('fields.htmlAttribute') fields_htmlAttribute_input: any;
	@Input('fields.id') fields_id_input: any;
	@Input('fields.imageAttribute') fields_imageAttribute_input: any;
	@Input('fields.imageUrl') fields_imageUrl_input: any;
	@Input('fields.isChecked') fields_isChecked_input: any;
	@Input('fields.linkAttribute') fields_linkAttribute_input: any;
	@Input('fields.parentId') fields_parentId_input: any;
	@Input('fields.query') fields_query_input: any;
	@Input('fields.selected') fields_selected_input: any;
	@Input('fields.spriteCssClass') fields_spriteCssClass_input: any;
	@Input('fields.tableName') fields_tableName_input: any;
	@Input('fields.text') fields_text_input: any;
	@Input('sortSettings.allowSorting') sortSettings_allowSorting_input: any;
	@Input('sortSettings.sortOrder') sortSettings_sortOrder_input: any;
    @Input('options') options: any;

	@Input('fields.dataSource') fields_dataSource_two: any;
	@Output('fields.dataSourceChange') fields_dataSource_twoChange = new EventEmitter<any>();

	@Output('beforeAdd') beforeAdd_output = new EventEmitter();
	@Output('beforeCollapse') beforeCollapse_output = new EventEmitter();
	@Output('beforeCut') beforeCut_output = new EventEmitter();
	@Output('beforeDelete') beforeDelete_output = new EventEmitter();
	@Output('beforeEdit') beforeEdit_output = new EventEmitter();
	@Output('beforeExpand') beforeExpand_output = new EventEmitter();
	@Output('beforeLoad') beforeLoad_output = new EventEmitter();
	@Output('beforePaste') beforePaste_output = new EventEmitter();
	@Output('beforeSelect') beforeSelect_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('inlineEditValidation') inlineEditValidation_output = new EventEmitter();
	@Output('keyPress') keyPress_output = new EventEmitter();
	@Output('loadError') loadError_output = new EventEmitter();
	@Output('loadSuccess') loadSuccess_output = new EventEmitter();
	@Output('nodeAdd') nodeAdd_output = new EventEmitter();
	@Output('nodeCheck') nodeCheck_output = new EventEmitter();
	@Output('nodeClick') nodeClick_output = new EventEmitter();
	@Output('nodeCollapse') nodeCollapse_output = new EventEmitter();
	@Output('nodeCut') nodeCut_output = new EventEmitter();
	@Output('nodeDelete') nodeDelete_output = new EventEmitter();
	@Output('nodeDrag') nodeDrag_output = new EventEmitter();
	@Output('nodeDragStart') nodeDragStart_output = new EventEmitter();
	@Output('nodeDragStop') nodeDragStop_output = new EventEmitter();
	@Output('nodeDropped') nodeDropped_output = new EventEmitter();
	@Output('nodeEdit') nodeEdit_output = new EventEmitter();
	@Output('nodeExpand') nodeExpand_output = new EventEmitter();
	@Output('nodePaste') nodePaste_output = new EventEmitter();
	@Output('nodeSelect') nodeSelect_output = new EventEmitter();
	@Output('nodeUncheck') nodeUncheck_output = new EventEmitter();
	@Output('nodeUnselect') nodeUnselect_output = new EventEmitter();
	@Output('ready') ready_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('TreeView', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_TREEVIEW_COMPONENTS: Type<any>[] = [TreeViewComponent
];


