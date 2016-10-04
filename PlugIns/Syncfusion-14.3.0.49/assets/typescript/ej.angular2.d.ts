declare module "ej/core" {
    import { EventEmitter, QueryList, Type, ElementRef, SimpleChange, ChangeDetectorRef } from '@angular/core';
    export { ContentChild, Type, forwardRef } from '@angular/core';
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
    }, ejArgs: any): Type<any>;
    export function CreateArrayTagDirective(property: string, selector: string, type: any): Type<any>;
    export function CreateComponent(name: string, componentArgs: {
        selector: string;
        inputs: Array<string>;
        outputs: Array<string>;
        template: string;
        changeDetection?: any;
        queries: {
            [key: string]: any;
        };
    }, ejArgs: any): Type<any>;
    export function CreateControlValueAccessor(selector: string, component: Type<any>): Type<any>;
}
declare module "ej/accordion.component" {
    import { Type } from "ej/core";
    export var AccordionComponent: Type<any>;
    export const EJ_ACCORDION_COMPONENTS: Type<any>[];
}
declare module "ej/autocomplete.component" {
    import { Type } from "ej/core";
    export var AutocompleteComponent: Type<any>;
    export var AutocompleteValueAccessor: Type<any>;
    export const EJ_AUTOCOMPLETE_COMPONENTS: Type<any>[];
}
declare module "ej/barcode.component" {
    import { Type } from "ej/core";
    export var BarcodeComponent: Type<any>;
    export const EJ_BARCODE_COMPONENTS: Type<any>[];
}
declare module "ej/bulletgraph.component" {
    import { Type } from "ej/core";
    export var QualitativeRangeDirective: any;
    export var QualitativeRangesDirective: any;
    export var QuantitativeScaleSettingsFeatureMeasureDirective: any;
    export var QuantitativeScaleSettingsFeatureMeasuresDirective: any;
    export var BulletGraphComponent: any;
    export const EJ_BULLETGRAPH_COMPONENTS: Type<any>[];
}
declare module "ej/button.component" {
    import { Type } from "ej/core";
    export var ButtonComponent: Type<any>;
    export var ButtonValueAccessor: Type<any>;
    export const EJ_BUTTON_COMPONENTS: Type<any>[];
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
    export const EJ_CHART_COMPONENTS: Type<any>[];
}
declare module "ej/checkbox.component" {
    import { Type } from "ej/core";
    export var CheckBoxComponent: Type<any>;
    export const EJ_CHECKBOX_COMPONENTS: Type<any>[];
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
    export const EJ_CIRCULARGAUGE_COMPONENTS: Type<any>[];
}
declare module "ej/colorpicker.component" {
    import { Type } from "ej/core";
    export var ColorPickerComponent: Type<any>;
    export var ColorPickerValueAccessor: Type<any>;
    export const EJ_COLORPICKER_COMPONENTS: Type<any>[];
}
declare module "ej/currencytextbox.component" {
    import { Type } from "ej/core";
    export var CurrencyTextboxComponent: Type<any>;
    export var CurrencyTextboxValueAccessor: Type<any>;
    export const EJ_CURRENCYTEXTBOX_COMPONENTS: Type<any>[];
}
declare module "ej/datepicker.component" {
    import { Type } from "ej/core";
    export var DatePickerComponent: Type<any>;
    export var DatePickerValueAccessor: Type<any>;
    export const EJ_DATEPICKER_COMPONENTS: Type<any>[];
}
declare module "ej/datetimepicker.component" {
    import { Type } from "ej/core";
    export var DateTimePickerComponent: Type<any>;
    export var DateTimePickerValueAccessor: Type<any>;
    export const EJ_DATETIMEPICKER_COMPONENTS: Type<any>[];
}
declare module "ej/diagram.component" {
    import { Type } from "ej/core";
    export var CommandManagerCommandDirective: any;
    export var CommandManagerCommandsDirective: any;
    export var SegmentDirective: any;
    export var SegmentsDirective: any;
    export var ConnectorLabelDirective: any;
    export var ConnectorLabelsDirective: any;
    export var ConnectorDirective: any;
    export var ConnectorsDirective: any;
    export var NodeLabelDirective: any;
    export var NodeLabelsDirective: any;
    export var PhaseDirective: any;
    export var PhasesDirective: any;
    export var PortDirective: any;
    export var PortsDirective: any;
    export var NodeDirective: any;
    export var NodesDirective: any;
    export var DiagramComponent: any;
    export const EJ_DIAGRAM_COMPONENTS: Type<any>[];
}
declare module "ej/dialog.component" {
    import { Type } from "ej/core";
    export var DialogComponent: Type<any>;
    export const EJ_DIALOG_COMPONENTS: Type<any>[];
}
declare module "ej/digitalgauge.component" {
    import { Type } from "ej/core";
    export var ItemDirective: any;
    export var ItemsDirective: any;
    export var DigitalGaugeComponent: any;
    export const EJ_DIGITALGAUGE_COMPONENTS: Type<any>[];
}
declare module "ej/dropdownlist.component" {
    import { Type } from "ej/core";
    export var DropDownListComponent: Type<any>;
    export var DropDownListValueAccessor: Type<any>;
    export const EJ_DROPDOWNLIST_COMPONENTS: Type<any>[];
}
declare module "ej/fileexplorer.component" {
    import { Type } from "ej/core";
    export var FileExplorerComponent: Type<any>;
    export const EJ_FILEEXPLORER_COMPONENTS: Type<any>[];
}
declare module "ej/gantt.component" {
    import { Type } from "ej/core";
    export var GanttComponent: Type<any>;
    export const EJ_GANTT_COMPONENTS: Type<any>[];
}
declare module "ej/grid.component" {
    import { Type } from "ej/core";
    export var CommandDirective: any;
    export var CommandsDirective: any;
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
    export const EJ_GRID_COMPONENTS: Type<any>[];
}
declare module "ej/heatmap.component" {
    import { Type } from "ej/core";
    export var ColorMappingDirective: any;
    export var ColorMappingCollectionDirective: any;
    export var HeatMapComponent: any;
    export const EJ_HEATMAP_COMPONENTS: Type<any>[];
}
declare module "ej/heatmaplegend.component" {
    import { Type } from "ej/core";
    export var LegendcolorMappingDirective: any;
    export var LegendcolorMappingsDirective: any;
    export var HeatMapLegendComponent: any;
    export const EJ_HEATMAPLEGEND_COMPONENTS: Type<any>[];
}
declare module "ej/kanban.component" {
    import { Type } from "ej/core";
    export var ColumnDirective: any;
    export var ColumnsDirective: any;
    export var KanbanComponent: any;
    export const EJ_KANBAN_COMPONENTS: Type<any>[];
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
    export const EJ_LINEARGAUGE_COMPONENTS: Type<any>[];
}
declare module "ej/listbox.component" {
    import { Type } from "ej/core";
    export var ListBoxComponent: Type<any>;
    export const EJ_LISTBOX_COMPONENTS: Type<any>[];
}
declare module "ej/listview.component" {
    import { Type } from "ej/core";
    export var ListViewComponent: Type<any>;
    export const EJ_LISTVIEW_COMPONENTS: Type<any>[];
}
declare module "ej/map.component" {
    import { Type } from "ej/core";
    export var LayerDirective: any;
    export var LayersDirective: any;
    export var MapComponent: any;
    export const EJ_MAP_COMPONENTS: Type<any>[];
}
declare module "ej/maskedit.component" {
    import { Type } from "ej/core";
    export var MaskEditComponent: Type<any>;
    export var MaskEditValueAccessor: Type<any>;
    export const EJ_MASKEDIT_COMPONENTS: Type<any>[];
}
declare module "ej/menu.component" {
    import { Type } from "ej/core";
    export var MenuComponent: Type<any>;
    export const EJ_MENU_COMPONENTS: Type<any>[];
}
declare module "ej/navigationdrawer.component" {
    import { Type } from "ej/core";
    export var NavigationDrawerComponent: Type<any>;
    export const EJ_NAVIGATIONDRAWER_COMPONENTS: Type<any>[];
}
declare module "ej/numerictextbox.component" {
    import { Type } from "ej/core";
    export var NumericTextboxComponent: Type<any>;
    export var NumericTextboxValueAccessor: Type<any>;
    export const EJ_NUMERICTEXTBOX_COMPONENTS: Type<any>[];
}
declare module "ej/overview.component" {
    import { Type } from "ej/core";
    export var OverviewComponent: Type<any>;
    export const EJ_OVERVIEW_COMPONENTS: Type<any>[];
}
declare module "ej/pdfviewer.component" {
    import { Type } from "ej/core";
    export var PdfViewerComponent: Type<any>;
    export const EJ_PDFVIEWER_COMPONENTS: Type<any>[];
}
declare module "ej/percentagetextbox.component" {
    import { Type } from "ej/core";
    export var PercentageTextboxComponent: Type<any>;
    export var PercentageTextboxValueAccessor: Type<any>;
    export const EJ_PERCENTAGETEXTBOX_COMPONENTS: Type<any>[];
}
declare module "ej/pivotchart.component" {
    import { Type } from "ej/core";
    export var PivotChartComponent: Type<any>;
    export const EJ_PIVOTCHART_COMPONENTS: Type<any>[];
}
declare module "ej/pivotgauge.component" {
    import { Type } from "ej/core";
    export var PivotGaugeComponent: Type<any>;
    export const EJ_PIVOTGAUGE_COMPONENTS: Type<any>[];
}
declare module "ej/pivotgrid.component" {
    import { Type } from "ej/core";
    export var PivotGridComponent: Type<any>;
    export const EJ_PIVOTGRID_COMPONENTS: Type<any>[];
}
declare module "ej/pivotschemadesigner.component" {
    import { Type } from "ej/core";
    export var PivotSchemaDesignerComponent: Type<any>;
    export const EJ_PIVOTSCHEMADESIGNER_COMPONENTS: Type<any>[];
}
declare module "ej/pivottreemap.component" {
    import { Type } from "ej/core";
    export var PivotTreeMapComponent: Type<any>;
    export const EJ_PIVOTTREEMAP_COMPONENTS: Type<any>[];
}
declare module "ej/progressbar.component" {
    import { Type } from "ej/core";
    export var ProgressBarComponent: Type<any>;
    export const EJ_PROGRESSBAR_COMPONENTS: Type<any>[];
}
declare module "ej/radialmenu.component" {
    import { Type } from "ej/core";
    export var ItemDirective: any;
    export var ItemsDirective: any;
    export var RadialMenuComponent: any;
    export const EJ_RADIALMENU_COMPONENTS: Type<any>[];
}
declare module "ej/radialslider.component" {
    import { Type } from "ej/core";
    export var RadialSliderComponent: Type<any>;
    export const EJ_RADIALSLIDER_COMPONENTS: Type<any>[];
}
declare module "ej/radiobutton.component" {
    import { Type } from "ej/core";
    export var RadioButtonComponent: Type<any>;
    export var RadioButtonValueAccessor: Type<any>;
    export const EJ_RADIOBUTTON_COMPONENTS: Type<any>[];
}
declare module "ej/rangenavigator.component" {
    import { Type } from "ej/core";
    export var RangeNavigatorComponent: Type<any>;
    export const EJ_RANGENAVIGATOR_COMPONENTS: Type<any>[];
}
declare module "ej/rating.component" {
    import { Type } from "ej/core";
    export var RatingComponent: Type<any>;
    export const EJ_RATING_COMPONENTS: Type<any>[];
}
declare module "ej/reportviewer.component" {
    import { Type } from "ej/core";
    export var ReportViewerComponent: Type<any>;
    export const EJ_REPORTVIEWER_COMPONENTS: Type<any>[];
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
    export const EJ_RIBBON_COMPONENTS: Type<any>[];
}
declare module "ej/rotator.component" {
    import { Type } from "ej/core";
    export var RotatorComponent: Type<any>;
    export const EJ_ROTATOR_COMPONENTS: Type<any>[];
}
declare module "ej/rte.component" {
    import { Type } from "ej/core";
    export var RTEComponent: Type<any>;
    export var RTEValueAccessor: Type<any>;
    export const EJ_RTE_COMPONENTS: Type<any>[];
}
declare module "ej/schedule.component" {
    import { Type } from "ej/core";
    export var ResourceDirective: any;
    export var ResourcesDirective: any;
    export var ScheduleComponent: any;
    export const EJ_SCHEDULE_COMPONENTS: Type<any>[];
}
declare module "ej/scroller.component" {
    import { Type } from "ej/core";
    export var ScrollerComponent: Type<any>;
    export const EJ_SCROLLER_COMPONENTS: Type<any>[];
}
declare module "ej/slider.component" {
    import { Type } from "ej/core";
    export var SliderComponent: Type<any>;
    export const EJ_SLIDER_COMPONENTS: Type<any>[];
}
declare module "ej/sparkline.component" {
    import { Type } from "ej/core";
    export var SparklineComponent: Type<any>;
    export const EJ_SPARKLINE_COMPONENTS: Type<any>[];
}
declare module "ej/splitter.component" {
    import { Type } from "ej/core";
    export var SplitterComponent: Type<any>;
    export const EJ_SPLITTER_COMPONENTS: Type<any>[];
}
declare module "ej/spreadsheet.component" {
    import { Type } from "ej/core";
    export var RangeSettingDirective: any;
    export var RangeSettingsDirective: any;
    export var SheetDirective: any;
    export var SheetsDirective: any;
    export var SpreadsheetComponent: any;
    export const EJ_SPREADSHEET_COMPONENTS: Type<any>[];
}
declare module "ej/tab.component" {
    import { Type } from "ej/core";
    export var TabComponent: Type<any>;
    export const EJ_TAB_COMPONENTS: Type<any>[];
}
declare module "ej/tagcloud.component" {
    import { Type } from "ej/core";
    export var TagCloudComponent: Type<any>;
    export const EJ_TAGCLOUD_COMPONENTS: Type<any>[];
}
declare module "ej/tile.component" {
    import { Type } from "ej/core";
    export var TileComponent: Type<any>;
    export const EJ_TILE_COMPONENTS: Type<any>[];
}
declare module "ej/timepicker.component" {
    import { Type } from "ej/core";
    export var TimePickerComponent: Type<any>;
    export var TimePickerValueAccessor: Type<any>;
    export const EJ_TIMEPICKER_COMPONENTS: Type<any>[];
}
declare module "ej/togglebutton.component" {
    import { Type } from "ej/core";
    export var ToggleButtonComponent: Type<any>;
    export const EJ_TOGGLEBUTTON_COMPONENTS: Type<any>[];
}
declare module "ej/toolbar.component" {
    import { Type } from "ej/core";
    export var ToolbarComponent: Type<any>;
    export const EJ_TOOLBAR_COMPONENTS: Type<any>[];
}
declare module "ej/tooltip.component" {
    import { Type } from "ej/core";
    export var TooltipComponent: Type<any>;
    export const EJ_TOOLTIP_COMPONENTS: Type<any>[];
}
declare module "ej/treegrid.component" {
    import { Type } from "ej/core";
    export var ColumnDirective: any;
    export var ColumnsDirective: any;
    export var TreeGridComponent: any;
    export const EJ_TREEGRID_COMPONENTS: Type<any>[];
}
declare module "ej/treemap.component" {
    import { Type } from "ej/core";
    export var LevelDirective: any;
    export var LevelsDirective: any;
    export var RangeColorDirective: any;
    export var RangeColorMappingDirective: any;
    export var TreeMapComponent: any;
    export const EJ_TREEMAP_COMPONENTS: Type<any>[];
}
declare module "ej/treeview.component" {
    import { Type } from "ej/core";
    export var TreeViewComponent: Type<any>;
    export const EJ_TREEVIEW_COMPONENTS: Type<any>[];
}
declare module "ej/uploadbox.component" {
    import { Type } from "ej/core";
    export var UploadboxComponent: Type<any>;
    export const EJ_UPLOADBOX_COMPONENTS: Type<any>[];
}
declare module "ej/waitingpopup.component" {
    import { Type } from "ej/core";
    export var WaitingPopupComponent: Type<any>;
    export const EJ_WAITINGPOPUP_COMPONENTS: Type<any>[];
}
declare module "ej/web.all" {
    import { Type } from "ej/core";
    import * as GridAll from "ej/grid.component";
    export var Grid: typeof GridAll;
    export var EJ_GRID_COMPONENTS: Type<any>[];
    import * as ChartAll from "ej/chart.component";
    export var Chart: typeof ChartAll;
    export var EJ_CHART_COMPONENTS: Type<any>[];
    import * as DiagramAll from "ej/diagram.component";
    export var Diagram: typeof DiagramAll;
    export var EJ_DIAGRAM_COMPONENTS: Type<any>[];
    import * as OverviewAll from "ej/overview.component";
    export var Overview: typeof OverviewAll;
    export var EJ_OVERVIEW_COMPONENTS: Type<any>[];
    import * as HeatmapAll from "ej/heatmap.component";
    export var Heatmap: typeof HeatmapAll;
    export var EJ_HEATMAP_COMPONENTS: Type<any>[];
    import * as HeatmaplegendAll from "ej/heatmaplegend.component";
    export var Heatmaplegend: typeof HeatmaplegendAll;
    export var EJ_HEATMAPLEGEND_COMPONENTS: Type<any>[];
    import * as RangenavigatorAll from "ej/rangenavigator.component";
    export var Rangenavigator: typeof RangenavigatorAll;
    export var EJ_RANGENAVIGATOR_COMPONENTS: Type<any>[];
    import * as SparklineAll from "ej/sparkline.component";
    export var Sparkline: typeof SparklineAll;
    export var EJ_SPARKLINE_COMPONENTS: Type<any>[];
    import * as BulletgraphAll from "ej/bulletgraph.component";
    export var Bulletgraph: typeof BulletgraphAll;
    export var EJ_BULLETGRAPH_COMPONENTS: Type<any>[];
    import * as CirculargaugeAll from "ej/circulargauge.component";
    export var Circulargauge: typeof CirculargaugeAll;
    export var EJ_CIRCULARGAUGE_COMPONENTS: Type<any>[];
    import * as LineargaugeAll from "ej/lineargauge.component";
    export var Lineargauge: typeof LineargaugeAll;
    export var EJ_LINEARGAUGE_COMPONENTS: Type<any>[];
    import * as MapAll from "ej/map.component";
    export var Map: typeof MapAll;
    export var EJ_MAP_COMPONENTS: Type<any>[];
    import * as TreemapAll from "ej/treemap.component";
    export var Treemap: typeof TreemapAll;
    export var EJ_TREEMAP_COMPONENTS: Type<any>[];
    import * as DigitalgaugeAll from "ej/digitalgauge.component";
    export var Digitalgauge: typeof DigitalgaugeAll;
    export var EJ_DIGITALGAUGE_COMPONENTS: Type<any>[];
    import * as SpreadsheetAll from "ej/spreadsheet.component";
    export var Spreadsheet: typeof SpreadsheetAll;
    export var EJ_SPREADSHEET_COMPONENTS: Type<any>[];
    import * as DatepickerAll from "ej/datepicker.component";
    export var Datepicker: typeof DatepickerAll;
    export var EJ_DATEPICKER_COMPONENTS: Type<any>[];
    import * as GanttAll from "ej/gantt.component";
    export var Gantt: typeof GanttAll;
    export var EJ_GANTT_COMPONENTS: Type<any>[];
    import * as TreegridAll from "ej/treegrid.component";
    export var Treegrid: typeof TreegridAll;
    export var EJ_TREEGRID_COMPONENTS: Type<any>[];
    import * as ColorpickerAll from "ej/colorpicker.component";
    export var Colorpicker: typeof ColorpickerAll;
    export var EJ_COLORPICKER_COMPONENTS: Type<any>[];
    import * as DialogAll from "ej/dialog.component";
    export var Dialog: typeof DialogAll;
    export var EJ_DIALOG_COMPONENTS: Type<any>[];
    import * as ScrollerAll from "ej/scroller.component";
    export var Scroller: typeof ScrollerAll;
    export var EJ_SCROLLER_COMPONENTS: Type<any>[];
    import * as BarcodeAll from "ej/barcode.component";
    export var Barcode: typeof BarcodeAll;
    export var EJ_BARCODE_COMPONENTS: Type<any>[];
    import * as PdfviewerAll from "ej/pdfviewer.component";
    export var Pdfviewer: typeof PdfviewerAll;
    export var EJ_PDFVIEWER_COMPONENTS: Type<any>[];
    import * as NumerictextboxAll from "ej/numerictextbox.component";
    export var Numerictextbox: typeof NumerictextboxAll;
    export var EJ_NUMERICTEXTBOX_COMPONENTS: Type<any>[];
    import * as CurrencytextboxAll from "ej/currencytextbox.component";
    export var Currencytextbox: typeof CurrencytextboxAll;
    export var EJ_CURRENCYTEXTBOX_COMPONENTS: Type<any>[];
    import * as PercentagetextboxAll from "ej/percentagetextbox.component";
    export var Percentagetextbox: typeof PercentagetextboxAll;
    export var EJ_PERCENTAGETEXTBOX_COMPONENTS: Type<any>[];
    import * as TimepickerAll from "ej/timepicker.component";
    export var Timepicker: typeof TimepickerAll;
    export var EJ_TIMEPICKER_COMPONENTS: Type<any>[];
    import * as ToolbarAll from "ej/toolbar.component";
    export var Toolbar: typeof ToolbarAll;
    export var EJ_TOOLBAR_COMPONENTS: Type<any>[];
    import * as MenuAll from "ej/menu.component";
    export var Menu: typeof MenuAll;
    export var EJ_MENU_COMPONENTS: Type<any>[];
    import * as AutocompleteAll from "ej/autocomplete.component";
    export var Autocomplete: typeof AutocompleteAll;
    export var EJ_AUTOCOMPLETE_COMPONENTS: Type<any>[];
    import * as MaskeditAll from "ej/maskedit.component";
    export var Maskedit: typeof MaskeditAll;
    export var EJ_MASKEDIT_COMPONENTS: Type<any>[];
    import * as TreeviewAll from "ej/treeview.component";
    export var Treeview: typeof TreeviewAll;
    export var EJ_TREEVIEW_COMPONENTS: Type<any>[];
    import * as ScheduleAll from "ej/schedule.component";
    export var Schedule: typeof ScheduleAll;
    export var EJ_SCHEDULE_COMPONENTS: Type<any>[];
    import * as KanbanAll from "ej/kanban.component";
    export var Kanban: typeof KanbanAll;
    export var EJ_KANBAN_COMPONENTS: Type<any>[];
    import * as RibbonAll from "ej/ribbon.component";
    export var Ribbon: typeof RibbonAll;
    export var EJ_RIBBON_COMPONENTS: Type<any>[];
    import * as PivotgridAll from "ej/pivotgrid.component";
    export var Pivotgrid: typeof PivotgridAll;
    export var EJ_PIVOTGRID_COMPONENTS: Type<any>[];
    import * as PivotchartAll from "ej/pivotchart.component";
    export var Pivotchart: typeof PivotchartAll;
    export var EJ_PIVOTCHART_COMPONENTS: Type<any>[];
    import * as PivotschemadesignerAll from "ej/pivotschemadesigner.component";
    export var Pivotschemadesigner: typeof PivotschemadesignerAll;
    export var EJ_PIVOTSCHEMADESIGNER_COMPONENTS: Type<any>[];
    import * as PivottreemapAll from "ej/pivottreemap.component";
    export var Pivottreemap: typeof PivottreemapAll;
    export var EJ_PIVOTTREEMAP_COMPONENTS: Type<any>[];
    import * as PivotgaugeAll from "ej/pivotgauge.component";
    export var Pivotgauge: typeof PivotgaugeAll;
    export var EJ_PIVOTGAUGE_COMPONENTS: Type<any>[];
    import * as RatingAll from "ej/rating.component";
    export var Rating: typeof RatingAll;
    export var EJ_RATING_COMPONENTS: Type<any>[];
    import * as ListboxAll from "ej/listbox.component";
    export var Listbox: typeof ListboxAll;
    export var EJ_LISTBOX_COMPONENTS: Type<any>[];
    import * as ListviewAll from "ej/listview.component";
    export var Listview: typeof ListviewAll;
    export var EJ_LISTVIEW_COMPONENTS: Type<any>[];
    import * as RotatorAll from "ej/rotator.component";
    export var Rotator: typeof RotatorAll;
    export var EJ_ROTATOR_COMPONENTS: Type<any>[];
    import * as RteAll from "ej/rte.component";
    export var Rte: typeof RteAll;
    export var EJ_RTE_COMPONENTS: Type<any>[];
    import * as DropdownlistAll from "ej/dropdownlist.component";
    export var Dropdownlist: typeof DropdownlistAll;
    export var EJ_DROPDOWNLIST_COMPONENTS: Type<any>[];
    import * as RadialmenuAll from "ej/radialmenu.component";
    export var Radialmenu: typeof RadialmenuAll;
    export var EJ_RADIALMENU_COMPONENTS: Type<any>[];
    import * as RadialsliderAll from "ej/radialslider.component";
    export var Radialslider: typeof RadialsliderAll;
    export var EJ_RADIALSLIDER_COMPONENTS: Type<any>[];
    import * as TileAll from "ej/tile.component";
    export var Tile: typeof TileAll;
    export var EJ_TILE_COMPONENTS: Type<any>[];
    import * as NavigationdrawerAll from "ej/navigationdrawer.component";
    export var Navigationdrawer: typeof NavigationdrawerAll;
    export var EJ_NAVIGATIONDRAWER_COMPONENTS: Type<any>[];
    import * as AccordionAll from "ej/accordion.component";
    export var Accordion: typeof AccordionAll;
    export var EJ_ACCORDION_COMPONENTS: Type<any>[];
    import * as TabAll from "ej/tab.component";
    export var Tab: typeof TabAll;
    export var EJ_TAB_COMPONENTS: Type<any>[];
    import * as CheckboxAll from "ej/checkbox.component";
    export var Checkbox: typeof CheckboxAll;
    export var EJ_CHECKBOX_COMPONENTS: Type<any>[];
    import * as RadiobuttonAll from "ej/radiobutton.component";
    export var Radiobutton: typeof RadiobuttonAll;
    export var EJ_RADIOBUTTON_COMPONENTS: Type<any>[];
    import * as TogglebuttonAll from "ej/togglebutton.component";
    export var Togglebutton: typeof TogglebuttonAll;
    export var EJ_TOGGLEBUTTON_COMPONENTS: Type<any>[];
    import * as DatetimepickerAll from "ej/datetimepicker.component";
    export var Datetimepicker: typeof DatetimepickerAll;
    export var EJ_DATETIMEPICKER_COMPONENTS: Type<any>[];
    import * as ProgressbarAll from "ej/progressbar.component";
    export var Progressbar: typeof ProgressbarAll;
    export var EJ_PROGRESSBAR_COMPONENTS: Type<any>[];
    import * as TagcloudAll from "ej/tagcloud.component";
    export var Tagcloud: typeof TagcloudAll;
    export var EJ_TAGCLOUD_COMPONENTS: Type<any>[];
    import * as ButtonAll from "ej/button.component";
    export var Button: typeof ButtonAll;
    export var EJ_BUTTON_COMPONENTS: Type<any>[];
    import * as TooltipAll from "ej/tooltip.component";
    export var Tooltip: typeof TooltipAll;
    export var EJ_TOOLTIP_COMPONENTS: Type<any>[];
    import * as SliderAll from "ej/slider.component";
    export var Slider: typeof SliderAll;
    export var EJ_SLIDER_COMPONENTS: Type<any>[];
    import * as FileexplorerAll from "ej/fileexplorer.component";
    export var Fileexplorer: typeof FileexplorerAll;
    export var EJ_FILEEXPLORER_COMPONENTS: Type<any>[];
    import * as ReportviewerAll from "ej/reportviewer.component";
    export var Reportviewer: typeof ReportviewerAll;
    export var EJ_REPORTVIEWER_COMPONENTS: Type<any>[];
    import * as SplitterAll from "ej/splitter.component";
    export var Splitter: typeof SplitterAll;
    export var EJ_SPLITTER_COMPONENTS: Type<any>[];
    import * as UploadboxAll from "ej/uploadbox.component";
    export var Uploadbox: typeof UploadboxAll;
    export var EJ_UPLOADBOX_COMPONENTS: Type<any>[];
    import * as WaitingpopupAll from "ej/waitingpopup.component";
    export var Waitingpopup: typeof WaitingpopupAll;
    export var EJ_WAITINGPOPUP_COMPONENTS: Type<any>[];
}
