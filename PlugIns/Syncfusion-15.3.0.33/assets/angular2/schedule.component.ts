import 'syncfusion-javascript/Scripts/ej/web/ej.schedule.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-resources>e-resource',
})
export class ScheduleResourceDirective extends ComplexTagElement {

	@Input('field') field: any;
	@Input('title') title: any;
	@Input('name') name: any;
	@Input('allowMultiple') allowMultiple: any;
	@Input('resourceSettings') resourceSettings: any;
	@Input('resourceSettings.dataSource') resourceSettings_dataSource: any;
	@Input('resourceSettings.text') resourceSettings_text: any;
	@Input('resourceSettings.id') resourceSettings_id: any;
	@Input('resourceSettings.groupId') resourceSettings_groupId: any;
	@Input('resourceSettings.color') resourceSettings_color: any;
	@Input('resourceSettings.start') resourceSettings_start: any;
	@Input('resourceSettings.end') resourceSettings_end: any;
	@Input('resourceSettings.workWeek') resourceSettings_workWeek: any;
	@Input('resourceSettings.appointmentClass') resourceSettings_appointmentClass: any;

    
    constructor( @Inject(forwardRef(() => ScheduleComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-schedule>e-resources',
    queries: {
        children: new ContentChildren(ScheduleResourceDirective)
    }
})
export class ScheduleResourcesDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => ScheduleComponent)) widget: EJComponents<any, any>) {
        super('resources')
        }
}




@Component({
    selector: 'ej-schedule',
    template: ''})
export class ScheduleComponent extends EJComponents<any, any> {
	@Input('allowDragAndDrop') allowDragAndDrop_input: any;
	@Input('allowInline') allowInline_input: any;
	@Input('allowKeyboardNavigation') allowKeyboardNavigation_input: any;
	@Input('appointmentSettings') appointmentSettings_input: any;
	@Input('appointmentTemplateId') appointmentTemplateId_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('categorizeSettings') categorizeSettings_input: any;
	@Input('cellHeight') cellHeight_input: any;
	@Input('cellWidth') cellWidth_input: any;
	@Input('contextMenuSettings') contextMenuSettings_input: any;
	@Input('dateFormat') dateFormat_input: any;
	@Input('showAppointmentNavigator') showAppointmentNavigator_input: any;
	@Input('enableAppointmentResize') enableAppointmentResize_input: any;
	@Input('enableLoadOnDemand') enableLoadOnDemand_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('endHour') endHour_input: any;
	@Input('group') group_input: any;
	@Input('height') height_input: any;
	@Input('workHours') workHours_input: any;
	@Input('isDST') isDST_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('locale') locale_input: any;
	@Input('maxDate') maxDate_input: any;
	@Input('minDate') minDate_input: any;
	@Input('orientation') orientation_input: any;
	@Input('prioritySettings') prioritySettings_input: any;
	@Input('readOnly') readOnly_input: any;
	@Input('reminderSettings') reminderSettings_input: any;
	@Input('renderDates') renderDates_input: any;
	@Input('resourceHeaderTemplateId') resourceHeaderTemplateId_input: any;
	@Input('showAllDayRow') showAllDayRow_input: any;
	@Input('showWeekend') showWeekend_input: any;
	@Input('showCurrentTimeIndicator') showCurrentTimeIndicator_input: any;
	@Input('showHeaderBar') showHeaderBar_input: any;
	@Input('showLocationField') showLocationField_input: any;
	@Input('showTimeZoneFields') showTimeZoneFields_input: any;
	@Input('showQuickWindow') showQuickWindow_input: any;
	@Input('startHour') startHour_input: any;
	@Input('timeMode') timeMode_input: any;
	@Input('timeZone') timeZone_input: any;
	@Input('timeZoneCollection') timeZoneCollection_input: any;
	@Input('views') views_input: any;
	@Input('width') width_input: any;
	@Input('enableRecurrenceValidation') enableRecurrenceValidation_input: any;
	@Input('agendaViewSettings') agendaViewSettings_input: any;
	@Input('firstDayOfWeek') firstDayOfWeek_input: any;
	@Input('workWeek') workWeek_input: any;
	@Input('tooltipSettings') tooltipSettings_input: any;
	@Input('timeScale') timeScale_input: any;
	@Input('showDeleteConfirmationDialog') showDeleteConfirmationDialog_input: any;
	@Input('allDayCellsTemplateId') allDayCellsTemplateId_input: any;
	@Input('workCellsTemplateId') workCellsTemplateId_input: any;
	@Input('dateHeaderTemplateId') dateHeaderTemplateId_input: any;
	@Input('showOverflowButton') showOverflowButton_input: any;
	@Input('appointmentDragArea') appointmentDragArea_input: any;
	@Input('showNextPrevMonth') showNextPrevMonth_input: any;
	@Input('blockoutSettings') blockoutSettings_input: any;
	@Input('appointmentSettings.query') appointmentSettings_query_input: any;
	@Input('appointmentSettings.tableName') appointmentSettings_tableName_input: any;
	@Input('appointmentSettings.applyTimeOffset') appointmentSettings_applyTimeOffset_input: any;
	@Input('appointmentSettings.editFutureEventsOnly') appointmentSettings_editFutureEventsOnly_input: any;
	@Input('appointmentSettings.id') appointmentSettings_id_input: any;
	@Input('appointmentSettings.startTime') appointmentSettings_startTime_input: any;
	@Input('appointmentSettings.endTime') appointmentSettings_endTime_input: any;
	@Input('appointmentSettings.subject') appointmentSettings_subject_input: any;
	@Input('appointmentSettings.description') appointmentSettings_description_input: any;
	@Input('appointmentSettings.recurrence') appointmentSettings_recurrence_input: any;
	@Input('appointmentSettings.recurrenceRule') appointmentSettings_recurrenceRule_input: any;
	@Input('appointmentSettings.allDay') appointmentSettings_allDay_input: any;
	@Input('appointmentSettings.resourceFields') appointmentSettings_resourceFields_input: any;
	@Input('appointmentSettings.categorize') appointmentSettings_categorize_input: any;
	@Input('appointmentSettings.location') appointmentSettings_location_input: any;
	@Input('appointmentSettings.priority') appointmentSettings_priority_input: any;
	@Input('appointmentSettings.startTimeZone') appointmentSettings_startTimeZone_input: any;
	@Input('appointmentSettings.endTimeZone') appointmentSettings_endTimeZone_input: any;
	@Input('categorizeSettings.allowMultiple') categorizeSettings_allowMultiple_input: any;
	@Input('categorizeSettings.enable') categorizeSettings_enable_input: any;
	@Input('categorizeSettings.dataSource') categorizeSettings_dataSource_input: any;
	@Input('categorizeSettings.id') categorizeSettings_id_input: any;
	@Input('categorizeSettings.text') categorizeSettings_text_input: any;
	@Input('categorizeSettings.color') categorizeSettings_color_input: any;
	@Input('categorizeSettings.fontColor') categorizeSettings_fontColor_input: any;
	@Input('contextMenuSettings.enable') contextMenuSettings_enable_input: any;
	@Input('contextMenuSettings.menuItems') contextMenuSettings_menuItems_input: any;
	@Input('contextMenuSettings.menuItems.appointment') contextMenuSettings_menuItems_appointment_input: any;
	@Input('contextMenuSettings.menuItems.cells') contextMenuSettings_menuItems_cells_input: any;
	@Input('group.resources') group_resources_input: any;
	@Input('workHours.highlight') workHours_highlight_input: any;
	@Input('workHours.start') workHours_start_input: any;
	@Input('workHours.end') workHours_end_input: any;
	@Input('prioritySettings.enable') prioritySettings_enable_input: any;
	@Input('prioritySettings.dataSource') prioritySettings_dataSource_input: any;
	@Input('prioritySettings.text') prioritySettings_text_input: any;
	@Input('prioritySettings.value') prioritySettings_value_input: any;
	@Input('prioritySettings.template') prioritySettings_template_input: any;
	@Input('reminderSettings.enable') reminderSettings_enable_input: any;
	@Input('reminderSettings.alertBefore') reminderSettings_alertBefore_input: any;
	@Input('renderDates.start') renderDates_start_input: any;
	@Input('renderDates.end') renderDates_end_input: any;
	@Input('timeZoneCollection.dataSource') timeZoneCollection_dataSource_input: any;
	@Input('timeZoneCollection.text') timeZoneCollection_text_input: any;
	@Input('timeZoneCollection.id') timeZoneCollection_id_input: any;
	@Input('timeZoneCollection.value') timeZoneCollection_value_input: any;
	@Input('agendaViewSettings.daysInAgenda') agendaViewSettings_daysInAgenda_input: any;
	@Input('agendaViewSettings.dateColumnTemplateId') agendaViewSettings_dateColumnTemplateId_input: any;
	@Input('agendaViewSettings.timeColumnTemplateId') agendaViewSettings_timeColumnTemplateId_input: any;
	@Input('tooltipSettings.enable') tooltipSettings_enable_input: any;
	@Input('tooltipSettings.templateId') tooltipSettings_templateId_input: any;
	@Input('timeScale.enable') timeScale_enable_input: any;
	@Input('timeScale.minorSlotCount') timeScale_minorSlotCount_input: any;
	@Input('timeScale.majorSlot') timeScale_majorSlot_input: any;
	@Input('timeScale.minorSlotTemplateId') timeScale_minorSlotTemplateId_input: any;
	@Input('timeScale.majorSlotTemplateId') timeScale_majorSlotTemplateId_input: any;
	@Input('blockoutSettings.enable') blockoutSettings_enable_input: any;
	@Input('blockoutSettings.templateId') blockoutSettings_templateId_input: any;
	@Input('blockoutSettings.dataSource') blockoutSettings_dataSource_input: any;
	@Input('blockoutSettings.query') blockoutSettings_query_input: any;
	@Input('blockoutSettings.tableName') blockoutSettings_tableName_input: any;
	@Input('blockoutSettings.id') blockoutSettings_id_input: any;
	@Input('blockoutSettings.startTime') blockoutSettings_startTime_input: any;
	@Input('blockoutSettings.endTime') blockoutSettings_endTime_input: any;
	@Input('blockoutSettings.subject') blockoutSettings_subject_input: any;
	@Input('blockoutSettings.isBlockAppointment') blockoutSettings_isBlockAppointment_input: any;
	@Input('blockoutSettings.isAllDay') blockoutSettings_isAllDay_input: any;
	@Input('blockoutSettings.resourceId') blockoutSettings_resourceId_input: any;
	@Input('blockoutSettings.groupId') blockoutSettings_groupId_input: any;
	@Input('blockoutSettings.customStyle') blockoutSettings_customStyle_input: any;
	@Input('resources') resources_input: any;

	@Input('appointmentSettings.dataSource') appointmentSettings_dataSource_two: any;
	@Output('appointmentSettings.dataSourceChange') appointmentSettings_dataSource_twoChange = new EventEmitter<any>();
	@Input('currentView') currentView_two: any;
	@Output('currentViewChange') currentView_twoChange = new EventEmitter<any>();
	@Input('currentDate') currentDate_two: any;
	@Output('currentDateChange') currentDate_twoChange = new EventEmitter<any>();

	@Output('actionBegin') actionBegin_output = new EventEmitter();
	@Output('actionComplete') actionComplete_output = new EventEmitter();
	@Output('appointmentClick') appointmentClick_output = new EventEmitter();
	@Output('beforeAppointmentRemove') beforeAppointmentRemove_output = new EventEmitter();
	@Output('beforeAppointmentChange') beforeAppointmentChange_output = new EventEmitter();
	@Output('appointmentHover') appointmentHover_output = new EventEmitter();
	@Output('beforeAppointmentCreate') beforeAppointmentCreate_output = new EventEmitter();
	@Output('appointmentWindowOpen') appointmentWindowOpen_output = new EventEmitter();
	@Output('beforeContextMenuOpen') beforeContextMenuOpen_output = new EventEmitter();
	@Output('cellClick') cellClick_output = new EventEmitter();
	@Output('cellDoubleClick') cellDoubleClick_output = new EventEmitter();
	@Output('cellHover') cellHover_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('drag') drag_output = new EventEmitter();
	@Output('dragStart') dragStart_output = new EventEmitter();
	@Output('dragStop') dragStop_output = new EventEmitter();
	@Output('menuItemClick') menuItemClick_output = new EventEmitter();
	@Output('navigation') navigation_output = new EventEmitter();
	@Output('queryCellInfo') queryCellInfo_output = new EventEmitter();
	@Output('reminder') reminder_output = new EventEmitter();
	@Output('resize') resize_output = new EventEmitter();
	@Output('resizeStart') resizeStart_output = new EventEmitter();
	@Output('resizeStop') resizeStop_output = new EventEmitter();
	@Output('overflowButtonClick') overflowButtonClick_output = new EventEmitter();
	@Output('overflowButtonHover') overflowButtonHover_output = new EventEmitter();
	@Output('keyDown') keyDown_output = new EventEmitter();
	@Output('appointmentCreated') appointmentCreated_output = new EventEmitter();
	@Output('appointmentChanged') appointmentChanged_output = new EventEmitter();
	@Output('appointmentRemoved') appointmentRemoved_output = new EventEmitter();

	@ContentChild(ScheduleResourcesDirective) tag_resources: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('Schedule', el, cdRef, ['resources']);
    }



}

export var EJ_SCHEDULE_COMPONENTS: Type<any>[] = [ScheduleComponent
, ScheduleResourcesDirective, ScheduleResourceDirective];


