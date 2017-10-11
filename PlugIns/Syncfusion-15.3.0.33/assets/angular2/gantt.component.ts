import 'syncfusion-javascript/Scripts/ej/web/ej.gantt.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-gantt',
    template: ''})
export class GanttComponent extends EJComponents<any, any> {
	@Input('allowColumnResize') allowColumnResize_input: any;
	@Input('allowGanttChartEditing') allowGanttChartEditing_input: any;
	@Input('allowKeyboardNavigation') allowKeyboardNavigation_input: any;
	@Input('allowMultiSorting') allowMultiSorting_input: any;
	@Input('allowMultipleExporting') allowMultipleExporting_input: any;
	@Input('allowSelection') allowSelection_input: any;
	@Input('allowSorting') allowSorting_input: any;
	@Input('allowDragAndDrop') allowDragAndDrop_input: any;
	@Input('enablePredecessorValidation') enablePredecessorValidation_input: any;
	@Input('baselineColor') baselineColor_input: any;
	@Input('workMapping') workMapping_input: any;
	@Input('expandStateMapping') expandStateMapping_input: any;
	@Input('baselineEndDateMapping') baselineEndDateMapping_input: any;
	@Input('baselineStartDateMapping') baselineStartDateMapping_input: any;
	@Input('childMapping') childMapping_input: any;
	@Input('columnDialogFields') columnDialogFields_input: any;
	@Input('connectorLineBackground') connectorLineBackground_input: any;
	@Input('connectorlineWidth') connectorlineWidth_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('cellTooltipTemplate') cellTooltipTemplate_input: any;
	@Input('dragTooltip') dragTooltip_input: any;
	@Input('dateFormat') dateFormat_input: any;
	@Input('dayWorkingTime') dayWorkingTime_input: any;
	@Input('durationMapping') durationMapping_input: any;
	@Input('durationUnit') durationUnit_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('splitterSettings') splitterSettings_input: any;
	@Input('editSettings') editSettings_input: any;
	@Input('enableAltRow') enableAltRow_input: any;
	@Input('enableWBS') enableWBS_input: any;
	@Input('enableWBSPredecessor') enableWBSPredecessor_input: any;
	@Input('enableCollapseAll') enableCollapseAll_input: any;
	@Input('leftTaskLabelMapping') leftTaskLabelMapping_input: any;
	@Input('rightTaskLabelMapping') rightTaskLabelMapping_input: any;
	@Input('leftTaskLabelTemplate') leftTaskLabelTemplate_input: any;
	@Input('rightTaskLabelTemplate') rightTaskLabelTemplate_input: any;
	@Input('enableContextMenu') enableContextMenu_input: any;
	@Input('enableProgressBarResizing') enableProgressBarResizing_input: any;
	@Input('enableResize') enableResize_input: any;
	@Input('enableTaskbarDragTooltip') enableTaskbarDragTooltip_input: any;
	@Input('enableTaskbarTooltip') enableTaskbarTooltip_input: any;
	@Input('enableVirtualization') enableVirtualization_input: any;
	@Input('endDateMapping') endDateMapping_input: any;
	@Input('highlightWeekends') highlightWeekends_input: any;
	@Input('includeWeekend') includeWeekend_input: any;
	@Input('locale') locale_input: any;
	@Input('milestoneMapping') milestoneMapping_input: any;
	@Input('showColumnOptions') showColumnOptions_input: any;
	@Input('parentTaskbarTemplate') parentTaskbarTemplate_input: any;
	@Input('taskType') taskType_input: any;
	@Input('workUnit') workUnit_input: any;
	@Input('taskSchedulingMode') taskSchedulingMode_input: any;
	@Input('selectionType') selectionType_input: any;
	@Input('parentProgressbarBackground') parentProgressbarBackground_input: any;
	@Input('resourceUnitMapping') resourceUnitMapping_input: any;
	@Input('notesMapping') notesMapping_input: any;
	@Input('taskSchedulingModeMapping') taskSchedulingModeMapping_input: any;
	@Input('durationUnitMapping') durationUnitMapping_input: any;
	@Input('parentTaskbarBackground') parentTaskbarBackground_input: any;
	@Input('parentTaskIdMapping') parentTaskIdMapping_input: any;
	@Input('predecessorMapping') predecessorMapping_input: any;
	@Input('progressbarBackground') progressbarBackground_input: any;
	@Input('progressbarHeight') progressbarHeight_input: any;
	@Input('progressbarTooltipTemplate') progressbarTooltipTemplate_input: any;
	@Input('progressbarTooltipTemplateId') progressbarTooltipTemplateId_input: any;
	@Input('progressMapping') progressMapping_input: any;
	@Input('query') query_input: any;
	@Input('renderBaseline') renderBaseline_input: any;
	@Input('resourceIdMapping') resourceIdMapping_input: any;
	@Input('resourceInfoMapping') resourceInfoMapping_input: any;
	@Input('resourceNameMapping') resourceNameMapping_input: any;
	@Input('resources') resources_input: any;
	@Input('roundOffDayworkingTime') roundOffDayworkingTime_input: any;
	@Input('rowHeight') rowHeight_input: any;
	@Input('scheduleEndDate') scheduleEndDate_input: any;
	@Input('scheduleHeaderSettings') scheduleHeaderSettings_input: any;
	@Input('scheduleStartDate') scheduleStartDate_input: any;
	@Input('showColumnChooser') showColumnChooser_input: any;
	@Input('showGridCellTooltip') showGridCellTooltip_input: any;
	@Input('showGridExpandCellTooltip') showGridExpandCellTooltip_input: any;
	@Input('showProgressStatus') showProgressStatus_input: any;
	@Input('showResourceNames') showResourceNames_input: any;
	@Input('showTaskNames') showTaskNames_input: any;
	@Input('sizeSettings') sizeSettings_input: any;
	@Input('sortSettings') sortSettings_input: any;
	@Input('splitterPosition') splitterPosition_input: any;
	@Input('startDateMapping') startDateMapping_input: any;
	@Input('taskbarBackground') taskbarBackground_input: any;
	@Input('taskbarEditingTooltipTemplate') taskbarEditingTooltipTemplate_input: any;
	@Input('taskbarEditingTooltipTemplateId') taskbarEditingTooltipTemplateId_input: any;
	@Input('taskbarHeight') taskbarHeight_input: any;
	@Input('taskbarTooltipTemplate') taskbarTooltipTemplate_input: any;
	@Input('taskbarTemplate') taskbarTemplate_input: any;
	@Input('milestoneTemplate') milestoneTemplate_input: any;
	@Input('readOnly') readOnly_input: any;
	@Input('taskbarTooltipTemplateId') taskbarTooltipTemplateId_input: any;
	@Input('taskIdMapping') taskIdMapping_input: any;
	@Input('taskNameMapping') taskNameMapping_input: any;
	@Input('toolbarSettings') toolbarSettings_input: any;
	@Input('treeColumnIndex') treeColumnIndex_input: any;
	@Input('selectionMode') selectionMode_input: any;
	@Input('validateManualTasksOnLinking') validateManualTasksOnLinking_input: any;
	@Input('weekendBackground') weekendBackground_input: any;
	@Input('workingTimeScale') workingTimeScale_input: any;
	@Input('workWeek') workWeek_input: any;
	@Input('dragTooltip.showTooltip') dragTooltip_showTooltip_input: any;
	@Input('dragTooltip.tooltipItems') dragTooltip_tooltipItems_input: any;
	@Input('dragTooltip.tooltipTemplate') dragTooltip_tooltipTemplate_input: any;
	@Input('splitterSettings.index') splitterSettings_index_input: any;
	@Input('editSettings.allowAdding') editSettings_allowAdding_input: any;
	@Input('editSettings.allowDeleting') editSettings_allowDeleting_input: any;
	@Input('editSettings.allowEditing') editSettings_allowEditing_input: any;
	@Input('editSettings.allowIndent') editSettings_allowIndent_input: any;
	@Input('editSettings.allowOutdent') editSettings_allowOutdent_input: any;
	@Input('editSettings.beginEditAction') editSettings_beginEditAction_input: any;
	@Input('editSettings.editMode') editSettings_editMode_input: any;
	@Input('editSettings.rowPosition') editSettings_rowPosition_input: any;
	@Input('scheduleHeaderSettings.dayHeaderFormat') scheduleHeaderSettings_dayHeaderFormat_input: any;
	@Input('scheduleHeaderSettings.hourHeaderFormat') scheduleHeaderSettings_hourHeaderFormat_input: any;
	@Input('scheduleHeaderSettings.minutesPerInterval') scheduleHeaderSettings_minutesPerInterval_input: any;
	@Input('scheduleHeaderSettings.monthHeaderFormat') scheduleHeaderSettings_monthHeaderFormat_input: any;
	@Input('scheduleHeaderSettings.scheduleHeaderType') scheduleHeaderSettings_scheduleHeaderType_input: any;
	@Input('scheduleHeaderSettings.timescaleStartDateMode') scheduleHeaderSettings_timescaleStartDateMode_input: any;
	@Input('scheduleHeaderSettings.weekendBackground') scheduleHeaderSettings_weekendBackground_input: any;
	@Input('scheduleHeaderSettings.weekHeaderFormat') scheduleHeaderSettings_weekHeaderFormat_input: any;
	@Input('scheduleHeaderSettings.yearHeaderFormat') scheduleHeaderSettings_yearHeaderFormat_input: any;
	@Input('scheduleHeaderSettings.timescaleUnitSize') scheduleHeaderSettings_timescaleUnitSize_input: any;
	@Input('scheduleHeaderSettings.weekStartDay') scheduleHeaderSettings_weekStartDay_input: any;
	@Input('sizeSettings.height') sizeSettings_height_input: any;
	@Input('sizeSettings.width') sizeSettings_width_input: any;
	@Input('toolbarSettings.showToolbar') toolbarSettings_showToolbar_input: any;
	@Input('toolbarSettings.toolbarItems') toolbarSettings_toolbarItems_input: any;
	@Input('addDialogFields') addDialogFields_input: any;
	@Input('editDialogFields') editDialogFields_input: any;
	@Input('holidays') holidays_input: any;
	@Input('selectedCellIndexes') selectedCellIndexes_input: any;
	@Input('stripLines') stripLines_input: any;
	@Input('sortSettings.sortedColumns') sortSettings_sortedColumns_input: any;
	@Input('toolbarSettings.customToolbarItems') toolbarSettings_customToolbarItems_input: any;

	@Input('dataSource') dataSource_two: any;
	@Output('dataSourceChange') dataSource_twoChange = new EventEmitter<any>();
	@Input('selectedRowIndex') selectedRowIndex_two: any;
	@Output('selectedRowIndexChange') selectedRowIndex_twoChange = new EventEmitter<any>();
	@Input('splitterSettings.position') splitterSettings_position_two: any;
	@Output('splitterSettings.positionChange') splitterSettings_position_twoChange = new EventEmitter<any>();

	@Output('actionBegin') actionBegin_output = new EventEmitter();
	@Output('actionComplete') actionComplete_output = new EventEmitter();
	@Output('beginEdit') beginEdit_output = new EventEmitter();
	@Output('cellSelecting') cellSelecting_output = new EventEmitter();
	@Output('cellSelected') cellSelected_output = new EventEmitter();
	@Output('rowDrag') rowDrag_output = new EventEmitter();
	@Output('rowDragStart') rowDragStart_output = new EventEmitter();
	@Output('rowDragStop') rowDragStop_output = new EventEmitter();
	@Output('collapsed') collapsed_output = new EventEmitter();
	@Output('collapsing') collapsing_output = new EventEmitter();
	@Output('contextMenuOpen') contextMenuOpen_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('endEdit') endEdit_output = new EventEmitter();
	@Output('expanded') expanded_output = new EventEmitter();
	@Output('expanding') expanding_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('queryCellInfo') queryCellInfo_output = new EventEmitter();
	@Output('queryTaskbarInfo') queryTaskbarInfo_output = new EventEmitter();
	@Output('rowDataBound') rowDataBound_output = new EventEmitter();
	@Output('rowSelected') rowSelected_output = new EventEmitter();
	@Output('rowSelecting') rowSelecting_output = new EventEmitter();
	@Output('taskbarEdited') taskbarEdited_output = new EventEmitter();
	@Output('taskbarEditing') taskbarEditing_output = new EventEmitter();
	@Output('taskbarClick') taskbarClick_output = new EventEmitter();
	@Output('toolbarClick') toolbarClick_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('Gantt', el, cdRef, []);
    }



}

export var EJ_GANTT_COMPONENTS: Type<any>[] = [GanttComponent
];


