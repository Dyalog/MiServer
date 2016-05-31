declare module "ej/core" {
    import { EventEmitter, QueryList, Type, ElementRef, SimpleChange, ChangeDetectorRef } from 'angular2/core';
    export { ContentChild, Type, forwardRef } from 'angular2/core';
    export interface IParentTag {
        tags: Array<any>;
    }
    export interface IChildChange {
        index: number;
        change: any;
    }
    export interface IChangeSet {
        [key: string]: Array<IChildChange>;
    }
    /** Internal Helpers */
    export class Utils {
        static IterateAndGetChanges(obj: IParentTag): IChangeSet;
        static AngularizeInputs(inputs: Array<string>, twoways: Array<string>): Array<string>;
    }
    export class EJComponents<W, T> implements IParentTag {
        protected name: string;
        protected el: ElementRef;
        protected cdRef: ChangeDetectorRef;
        tags: Array<any>;
        model: T;
        widget: W;
        protected outputs: Array<string>;
        protected twoways: Array<string>;
        protected __shadow: DocumentFragment;
        protected complexProperties: Array<string>;
        private _firstCheck;
        constructor(name: string, el: ElementRef, cdRef: ChangeDetectorRef);
        protected createEvents(events: Array<string>): void;
        protected createTwoways(twoways: Array<string>): void;
        protected addTwoways(prop: any): Function;
        ngAfterContentInit(): void;
        private static bindAndRaiseEvent(instance, model, event);
        ngOnChanges(changes: {
            [key: string]: SimpleChange;
        }): void;
        ngAfterContentChecked(): void;
        ngOnDestroy(): void;
    }
    export class ComplexTagElement {
        recentChanges: any;
        hasChanges: boolean;
        __firstChange: boolean;
        __index: number;
        __valueChange: EventEmitter<any>;
        protected complexProperties: Array<string>;
        property: string;
        __parent: EJComponents<any, any>;
        tags: Array<string>;
        constructor();
        ngOnInit(): void;
        ensureCleanObject(): void;
        ngOnChanges(changes: {
            [key: string]: SimpleChange;
        }): void;
        getChangesAndReset(): any;
        ngAfterContentChecked(): void;
    }
    export class ArrayTagElement<T extends ComplexTagElement> {
        propertyName: string;
        list: Array<T>;
        children: QueryList<T>;
        recentChanges: Array<IChildChange>;
        hasChanges: boolean;
        constructor(propertyName: string);
        ngAfterContentInit(): void;
        ngOnChanges(changes: any): void;
        getList(): T[];
        getChangesAndReset(): Array<IChildChange>;
        ngAfterContentChecked(): void;
    }
    export function CreateComplexDirective(args: {
        selector: string;
        inputs: Array<string>;
        outputs?: Array<string>;
        queries?: {
            [key: string]: any;
        };
    }, ejArgs: any): Type;
    export function CreateArrayTagDirective(property: string, selector: string, type: any): Type;
    export function CreateComponent(name: string, componentArgs: {
        selector: string;
        inputs: Array<string>;
        outputs: Array<string>;
        template: string;
        changeDetection?: any;
        queries: {
            [key: string]: any;
        };
    }, ejArgs: any): Type;
    export function CreateControlValueAccessor(selector: string, component: Type): Type;
}
declare module "ej/accordion.component" {
    import { Type } from "ej/core";
    export var AccordionComponent: Type;
    export const EJ_ACCORDION_COMPONENTS: Type[];
}
declare module "ej/autocomplete.component" {
    import { Type } from "ej/core";
    export var AutocompleteComponent: Type;
    export var AutocompleteValueAccessor: Type;
    export const EJ_AUTOCOMPLETE_COMPONENTS: Type[];
}
declare module "ej/barcode.component" {
    import { Type } from "ej/core";
    export var BarcodeComponent: Type;
    export const EJ_BARCODE_COMPONENTS: Type[];
}
declare module "ej/bulletgraph.component" {
    import { Type } from "ej/core";
    export var QualitativeRangeDirective: any;
    export var QualitativeRangesDirective: any;
    export var QuantitativeScaleSettingsFeatureMeasureDirective: any;
    export var QuantitativeScaleSettingsFeatureMeasuresDirective: any;
    export var BulletGraphComponent: any;
    export const EJ_BULLETGRAPH_COMPONENTS: Type[];
}
declare module "ej/button.component" {
    import { Type } from "ej/core";
    export var ButtonComponent: Type;
    export const EJ_BUTTON_COMPONENTS: Type[];
}
declare module "ej/chart.component" {
    import { Type } from "ej/core";
    export var TrendlineDirective: any;
    export var TrendlinesDirective: any;
    export var PointDirective: any;
    export var PointsDirective: any;
    export var SeriesDirective: any;
    export var SeriesCollectionDirective: any;
    export var IndicatorDirective: any;
    export var IndicatorsDirective: any;
    export var AnnotationDirective: any;
    export var AnnotationsDirective: any;
    export var PrimaryXAxisStripLineDirective: any;
    export var PrimaryXAxisStripLineCollectionDirective: any;
    export var PrimaryYAxisStripLineDirective: any;
    export var PrimaryYAxisStripLineCollectionDirective: any;
    export var RowDefinitionDirective: any;
    export var RowDefinitionsDirective: any;
    export var ColumnDefinitionDirective: any;
    export var ColumnDefinitionsDirective: any;
    export var ChartComponent: any;
    export const EJ_CHART_COMPONENTS: Type[];
}
declare module "ej/checkbox.component" {
    import { Type } from "ej/core";
    export var CheckBoxComponent: Type;
    export const EJ_CHECKBOX_COMPONENTS: Type[];
}
declare module "ej/circulargauge.component" {
    import { Type } from "ej/core";
    export var PointerDirective: any;
    export var PointersDirective: any;
    export var LabelDirective: any;
    export var LabelsDirective: any;
    export var TickDirective: any;
    export var TicksDirective: any;
    export var RangeDirective: any;
    export var RangesDirective: any;
    export var StateRangeDirective: any;
    export var StateRangesDirective: any;
    export var IndicatorDirective: any;
    export var IndicatorsDirective: any;
    export var SubGaugeDirective: any;
    export var SubGaugesDirective: any;
    export var ScaleDirective: any;
    export var ScalesDirective: any;
    export var CircularGaugeComponent: any;
    export const EJ_CIRCULARGAUGE_COMPONENTS: Type[];
}
declare module "ej/colorpicker.component" {
    import { Type } from "ej/core";
    export var ColorPickerComponent: Type;
    export var ColorPickerValueAccessor: Type;
    export const EJ_COLORPICKER_COMPONENTS: Type[];
}
declare module "ej/currencytextbox.component" {
    import { Type } from "ej/core";
    export var CurrencyTextboxComponent: Type;
    export var CurrencyTextboxValueAccessor: Type;
    export const EJ_CURRENCYTEXTBOX_COMPONENTS: Type[];
}
declare module "ej/datepicker.component" {
    import { Type } from "ej/core";
    export var DatePickerComponent: Type;
    export var DatePickerValueAccessor: Type;
    export const EJ_DATEPICKER_COMPONENTS: Type[];
}
declare module "ej/datetimepicker.component" {
    import { Type } from "ej/core";
    export var DateTimePickerComponent: Type;
    export var DateTimePickerValueAccessor: Type;
    export const EJ_DATETIMEPICKER_COMPONENTS: Type[];
}
declare module "ej/dialog.component" {
    import { Type } from "ej/core";
    export var DialogComponent: Type;
    export const EJ_DIALOG_COMPONENTS: Type[];
}
declare module "ej/digitalgauge.component" {
    import { Type } from "ej/core";
    export var ItemDirective: any;
    export var ItemsDirective: any;
    export var DigitalGaugeComponent: any;
    export const EJ_DIGITALGAUGE_COMPONENTS: Type[];
}
declare module "ej/dropdownlist.component" {
    import { Type } from "ej/core";
    export var DropDownListComponent: Type;
    export var DropDownListValueAccessor: Type;
    export const EJ_DROPDOWNLIST_COMPONENTS: Type[];
}
declare module "ej/fileexplorer.component" {
    import { Type } from "ej/core";
    export var FileExplorerComponent: Type;
    export const EJ_FILEEXPLORER_COMPONENTS: Type[];
}
declare module "ej/gantt.component" {
    import { Type } from "ej/core";
    export var GanttComponent: Type;
    export const EJ_GANTT_COMPONENTS: Type[];
}
declare module "ej/grid.component" {
    import { Type } from "ej/core";
    export var ColumnDirective: any;
    export var ColumnsDirective: any;
    export var SummaryColumnDirective: any;
    export var SummaryColumnsDirective: any;
    export var SummaryRowDirective: any;
    export var SummaryRowsDirective: any;
    export var StackedHeaderColumnDirective: any;
    export var StackedHeaderColumnsDirective: any;
    export var StackedHeaderRowDirective: any;
    export var StackedHeaderRowsDirective: any;
    export var GridComponent: any;
    export const EJ_GRID_COMPONENTS: Type[];
}
declare module "ej/kanban.component" {
    import { Type } from "ej/core";
    export var ColumnDirective: any;
    export var ColumnsDirective: any;
    export var KanbanComponent: any;
    export const EJ_KANBAN_COMPONENTS: Type[];
}
declare module "ej/lineargauge.component" {
    import { Type } from "ej/core";
    export var MarkerPointerDirective: any;
    export var MarkerPointersDirective: any;
    export var BarPointerDirective: any;
    export var BarPointersDirective: any;
    export var RangeDirective: any;
    export var RangesDirective: any;
    export var TickDirective: any;
    export var TicksDirective: any;
    export var StateRangeDirective: any;
    export var StateRangesDirective: any;
    export var IndicatorDirective: any;
    export var IndicatorsDirective: any;
    export var LabelDirective: any;
    export var LabelsDirective: any;
    export var ScaleDirective: any;
    export var ScalesDirective: any;
    export var LinearGaugeComponent: any;
    export const EJ_LINEARGAUGE_COMPONENTS: Type[];
}
declare module "ej/listbox.component" {
    import { Type } from "ej/core";
    export var ListBoxComponent: Type;
    export const EJ_LISTBOX_COMPONENTS: Type[];
}
declare module "ej/listview.component" {
    import { Type } from "ej/core";
    export var ListViewComponent: Type;
    export const EJ_LISTVIEW_COMPONENTS: Type[];
}
declare module "ej/maskedit.component" {
    import { Type } from "ej/core";
    export var MaskEditComponent: Type;
    export var MaskEditValueAccessor: Type;
    export const EJ_MASKEDIT_COMPONENTS: Type[];
}
declare module "ej/menu.component" {
    import { Type } from "ej/core";
    export var MenuComponent: Type;
    export const EJ_MENU_COMPONENTS: Type[];
}
declare module "ej/numerictextbox.component" {
    import { Type } from "ej/core";
    export var NumericTextboxComponent: Type;
    export var NumericTextboxValueAccessor: Type;
    export const EJ_NUMERICTEXTBOX_COMPONENTS: Type[];
}
declare module "ej/pdfviewer.component" {
    import { Type } from "ej/core";
    export var PdfViewerComponent: Type;
    export const EJ_PDFVIEWER_COMPONENTS: Type[];
}
declare module "ej/percentagetextbox.component" {
    import { Type } from "ej/core";
    export var PercentageTextboxComponent: Type;
    export var PercentageTextboxValueAccessor: Type;
    export const EJ_PERCENTAGETEXTBOX_COMPONENTS: Type[];
}
declare module "ej/pivotgrid.component" {
    import { Type } from "ej/core";
    export var PivotGridComponent: Type;
    export const EJ_PIVOTGRID_COMPONENTS: Type[];
}
declare module "ej/progressbar.component" {
    import { Type } from "ej/core";
    export var ProgressBarComponent: Type;
    export const EJ_PROGRESSBAR_COMPONENTS: Type[];
}
declare module "ej/radialmenu.component" {
    import { Type } from "ej/core";
    export var RadialMenuComponent: Type;
    export const EJ_RADIALMENU_COMPONENTS: Type[];
}
declare module "ej/radiobutton.component" {
    import { Type } from "ej/core";
    export var RadioButtonComponent: Type;
    export var RadioButtonValueAccessor: Type;
    export const EJ_RADIOBUTTON_COMPONENTS: Type[];
}
declare module "ej/rangenavigator.component" {
    import { Type } from "ej/core";
    export var RangeNavigatorComponent: Type;
    export const EJ_RANGENAVIGATOR_COMPONENTS: Type[];
}
declare module "ej/rating.component" {
    import { Type } from "ej/core";
    export var RatingComponent: Type;
    export const EJ_RATING_COMPONENTS: Type[];
}
declare module "ej/reportviewer.component" {
    import { Type } from "ej/core";
    export var ReportViewerComponent: Type;
    export const EJ_REPORTVIEWER_COMPONENTS: Type[];
}
declare module "ej/ribbon.component" {
    import { Type } from "ej/core";
    export var PageDirective: any;
    export var ApplicationTabBackstageSettingsPagesDirective: any;
    export var ContentGroupDirective: any;
    export var ContentGroupsDirective: any;
    export var ContentDirective: any;
    export var ContentsDirective: any;
    export var GroupDirective: any;
    export var GroupsDirective: any;
    export var TabDirective: any;
    export var TabsDirective: any;
    export var RibbonComponent: any;
    export const EJ_RIBBON_COMPONENTS: Type[];
}
declare module "ej/rotator.component" {
    import { Type } from "ej/core";
    export var RotatorComponent: Type;
    export const EJ_ROTATOR_COMPONENTS: Type[];
}
declare module "ej/rte.component" {
    import { Type } from "ej/core";
    export var RTEComponent: Type;
    export var RTEValueAccessor: Type;
    export const EJ_RTE_COMPONENTS: Type[];
}
declare module "ej/schedule.component" {
    import { Type } from "ej/core";
    export var ResourceDirective: any;
    export var ResourcesDirective: any;
    export var ScheduleComponent: any;
    export const EJ_SCHEDULE_COMPONENTS: Type[];
}
declare module "ej/scroller.component" {
    import { Type } from "ej/core";
    export var ScrollerComponent: Type;
    export const EJ_SCROLLER_COMPONENTS: Type[];
}
declare module "ej/slider.component" {
    import { Type } from "ej/core";
    export var SliderComponent: Type;
    export const EJ_SLIDER_COMPONENTS: Type[];
}
declare module "ej/splitter.component" {
    import { Type } from "ej/core";
    export var SplitterComponent: Type;
    export const EJ_SPLITTER_COMPONENTS: Type[];
}
declare module "ej/spreadsheet.component" {
    import { Type } from "ej/core";
    export var RangeSettingDirective: any;
    export var RangeSettingsDirective: any;
    export var SheetDirective: any;
    export var SheetsDirective: any;
    export var SpreadsheetComponent: any;
    export const EJ_SPREADSHEET_COMPONENTS: Type[];
}
declare module "ej/tab.component" {
    import { Type } from "ej/core";
    export var TabComponent: Type;
    export const EJ_TAB_COMPONENTS: Type[];
}
declare module "ej/tagcloud.component" {
    import { Type } from "ej/core";
    export var TagCloudComponent: Type;
    export const EJ_TAGCLOUD_COMPONENTS: Type[];
}
declare module "ej/timepicker.component" {
    import { Type } from "ej/core";
    export var TimePickerComponent: Type;
    export var TimePickerValueAccessor: Type;
    export const EJ_TIMEPICKER_COMPONENTS: Type[];
}
declare module "ej/togglebutton.component" {
    import { Type } from "ej/core";
    export var ToggleButtonComponent: Type;
    export const EJ_TOGGLEBUTTON_COMPONENTS: Type[];
}
declare module "ej/toolbar.component" {
    import { Type } from "ej/core";
    export var ToolbarComponent: Type;
    export const EJ_TOOLBAR_COMPONENTS: Type[];
}
declare module "ej/tooltip.component" {
    import { Type } from "ej/core";
    export var TooltipComponent: Type;
    export const EJ_TOOLTIP_COMPONENTS: Type[];
}
declare module "ej/treegrid.component" {
    import { Type } from "ej/core";
    export var ColumnDirective: any;
    export var ColumnsDirective: any;
    export var TreeGridComponent: any;
    export const EJ_TREEGRID_COMPONENTS: Type[];
}
declare module "ej/treeview.component" {
    import { Type } from "ej/core";
    export var TreeViewComponent: Type;
    export const EJ_TREEVIEW_COMPONENTS: Type[];
}
declare module "ej/web.all" {
    import { Type } from "ej/core";
    import * as GridAll from "ej/grid.component";
    export var Grid: typeof GridAll;
    export var EJ_GRID_COMPONENTS: Type[];
    import * as ChartAll from "ej/chart.component";
    export var Chart: typeof ChartAll;
    export var EJ_CHART_COMPONENTS: Type[];
    import * as RangenavigatorAll from "ej/rangenavigator.component";
    export var Rangenavigator: typeof RangenavigatorAll;
    export var EJ_RANGENAVIGATOR_COMPONENTS: Type[];
    import * as BulletgraphAll from "ej/bulletgraph.component";
    export var Bulletgraph: typeof BulletgraphAll;
    export var EJ_BULLETGRAPH_COMPONENTS: Type[];
    import * as CirculargaugeAll from "ej/circulargauge.component";
    export var Circulargauge: typeof CirculargaugeAll;
    export var EJ_CIRCULARGAUGE_COMPONENTS: Type[];
    import * as LineargaugeAll from "ej/lineargauge.component";
    export var Lineargauge: typeof LineargaugeAll;
    export var EJ_LINEARGAUGE_COMPONENTS: Type[];
    import * as DigitalgaugeAll from "ej/digitalgauge.component";
    export var Digitalgauge: typeof DigitalgaugeAll;
    export var EJ_DIGITALGAUGE_COMPONENTS: Type[];
    import * as SpreadsheetAll from "ej/spreadsheet.component";
    export var Spreadsheet: typeof SpreadsheetAll;
    export var EJ_SPREADSHEET_COMPONENTS: Type[];
    import * as DatepickerAll from "ej/datepicker.component";
    export var Datepicker: typeof DatepickerAll;
    export var EJ_DATEPICKER_COMPONENTS: Type[];
    import * as GanttAll from "ej/gantt.component";
    export var Gantt: typeof GanttAll;
    export var EJ_GANTT_COMPONENTS: Type[];
    import * as TreegridAll from "ej/treegrid.component";
    export var Treegrid: typeof TreegridAll;
    export var EJ_TREEGRID_COMPONENTS: Type[];
    import * as ColorpickerAll from "ej/colorpicker.component";
    export var Colorpicker: typeof ColorpickerAll;
    export var EJ_COLORPICKER_COMPONENTS: Type[];
    import * as DialogAll from "ej/dialog.component";
    export var Dialog: typeof DialogAll;
    export var EJ_DIALOG_COMPONENTS: Type[];
    import * as ScrollerAll from "ej/scroller.component";
    export var Scroller: typeof ScrollerAll;
    export var EJ_SCROLLER_COMPONENTS: Type[];
    import * as BarcodeAll from "ej/barcode.component";
    export var Barcode: typeof BarcodeAll;
    export var EJ_BARCODE_COMPONENTS: Type[];
    import * as PdfviewerAll from "ej/pdfviewer.component";
    export var Pdfviewer: typeof PdfviewerAll;
    export var EJ_PDFVIEWER_COMPONENTS: Type[];
    import * as NumerictextboxAll from "ej/numerictextbox.component";
    export var Numerictextbox: typeof NumerictextboxAll;
    export var EJ_NUMERICTEXTBOX_COMPONENTS: Type[];
    import * as CurrencytextboxAll from "ej/currencytextbox.component";
    export var Currencytextbox: typeof CurrencytextboxAll;
    export var EJ_CURRENCYTEXTBOX_COMPONENTS: Type[];
    import * as PercentagetextboxAll from "ej/percentagetextbox.component";
    export var Percentagetextbox: typeof PercentagetextboxAll;
    export var EJ_PERCENTAGETEXTBOX_COMPONENTS: Type[];
    import * as TimepickerAll from "ej/timepicker.component";
    export var Timepicker: typeof TimepickerAll;
    export var EJ_TIMEPICKER_COMPONENTS: Type[];
    import * as ToolbarAll from "ej/toolbar.component";
    export var Toolbar: typeof ToolbarAll;
    export var EJ_TOOLBAR_COMPONENTS: Type[];
    import * as MenuAll from "ej/menu.component";
    export var Menu: typeof MenuAll;
    export var EJ_MENU_COMPONENTS: Type[];
    import * as AutocompleteAll from "ej/autocomplete.component";
    export var Autocomplete: typeof AutocompleteAll;
    export var EJ_AUTOCOMPLETE_COMPONENTS: Type[];
    import * as MaskeditAll from "ej/maskedit.component";
    export var Maskedit: typeof MaskeditAll;
    export var EJ_MASKEDIT_COMPONENTS: Type[];
    import * as TreeviewAll from "ej/treeview.component";
    export var Treeview: typeof TreeviewAll;
    export var EJ_TREEVIEW_COMPONENTS: Type[];
    import * as ScheduleAll from "ej/schedule.component";
    export var Schedule: typeof ScheduleAll;
    export var EJ_SCHEDULE_COMPONENTS: Type[];
    import * as KanbanAll from "ej/kanban.component";
    export var Kanban: typeof KanbanAll;
    export var EJ_KANBAN_COMPONENTS: Type[];
    import * as RibbonAll from "ej/ribbon.component";
    export var Ribbon: typeof RibbonAll;
    export var EJ_RIBBON_COMPONENTS: Type[];
    import * as PivotgridAll from "ej/pivotgrid.component";
    export var Pivotgrid: typeof PivotgridAll;
    export var EJ_PIVOTGRID_COMPONENTS: Type[];
    import * as RatingAll from "ej/rating.component";
    export var Rating: typeof RatingAll;
    export var EJ_RATING_COMPONENTS: Type[];
    import * as ListboxAll from "ej/listbox.component";
    export var Listbox: typeof ListboxAll;
    export var EJ_LISTBOX_COMPONENTS: Type[];
    import * as ListviewAll from "ej/listview.component";
    export var Listview: typeof ListviewAll;
    export var EJ_LISTVIEW_COMPONENTS: Type[];
    import * as RotatorAll from "ej/rotator.component";
    export var Rotator: typeof RotatorAll;
    export var EJ_ROTATOR_COMPONENTS: Type[];
    import * as RteAll from "ej/rte.component";
    export var Rte: typeof RteAll;
    export var EJ_RTE_COMPONENTS: Type[];
    import * as DropdownlistAll from "ej/dropdownlist.component";
    export var Dropdownlist: typeof DropdownlistAll;
    export var EJ_DROPDOWNLIST_COMPONENTS: Type[];
    import * as RadialmenuAll from "ej/radialmenu.component";
    export var Radialmenu: typeof RadialmenuAll;
    export var EJ_RADIALMENU_COMPONENTS: Type[];
    import * as AccordionAll from "ej/accordion.component";
    export var Accordion: typeof AccordionAll;
    export var EJ_ACCORDION_COMPONENTS: Type[];
    import * as TabAll from "ej/tab.component";
    export var Tab: typeof TabAll;
    export var EJ_TAB_COMPONENTS: Type[];
    import * as CheckboxAll from "ej/checkbox.component";
    export var Checkbox: typeof CheckboxAll;
    export var EJ_CHECKBOX_COMPONENTS: Type[];
    import * as RadiobuttonAll from "ej/radiobutton.component";
    export var Radiobutton: typeof RadiobuttonAll;
    export var EJ_RADIOBUTTON_COMPONENTS: Type[];
    import * as TogglebuttonAll from "ej/togglebutton.component";
    export var Togglebutton: typeof TogglebuttonAll;
    export var EJ_TOGGLEBUTTON_COMPONENTS: Type[];
    import * as DatetimepickerAll from "ej/datetimepicker.component";
    export var Datetimepicker: typeof DatetimepickerAll;
    export var EJ_DATETIMEPICKER_COMPONENTS: Type[];
    import * as ProgressbarAll from "ej/progressbar.component";
    export var Progressbar: typeof ProgressbarAll;
    export var EJ_PROGRESSBAR_COMPONENTS: Type[];
    import * as TagcloudAll from "ej/tagcloud.component";
    export var Tagcloud: typeof TagcloudAll;
    export var EJ_TAGCLOUD_COMPONENTS: Type[];
    import * as ButtonAll from "ej/button.component";
    export var Button: typeof ButtonAll;
    export var EJ_BUTTON_COMPONENTS: Type[];
    import * as TooltipAll from "ej/tooltip.component";
    export var Tooltip: typeof TooltipAll;
    export var EJ_TOOLTIP_COMPONENTS: Type[];
    import * as SliderAll from "ej/slider.component";
    export var Slider: typeof SliderAll;
    export var EJ_SLIDER_COMPONENTS: Type[];
    import * as FileexplorerAll from "ej/fileexplorer.component";
    export var Fileexplorer: typeof FileexplorerAll;
    export var EJ_FILEEXPLORER_COMPONENTS: Type[];
    import * as ReportviewerAll from "ej/reportviewer.component";
    export var Reportviewer: typeof ReportviewerAll;
    export var EJ_REPORTVIEWER_COMPONENTS: Type[];
    import * as SplitterAll from "ej/splitter.component";
    export var Splitter: typeof SplitterAll;
    export var EJ_SPLITTER_COMPONENTS: Type[];
}
