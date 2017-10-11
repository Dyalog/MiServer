declare module 'aurelia-binding' {
export class Lexer {}
export class ParserImplementation {}
}
declare module 'aurelia-syncfusion-bridge' {
  import {
    customAttribute,
    bindable,
    customElement,
    children,
    TemplatingEngine,
    inlineView,
    BindableProperty,
    HtmlBehaviorResource,
    noView,
    processContent,
    TargetInstruction
  } from 'aurelia-templating';
  import {
    inject,
    Container
  } from 'aurelia-dependency-injection';
  import {
    metadata
  } from 'aurelia-metadata';
  import {
    TaskQueue
  } from 'aurelia-task-queue';
  import {
    bindingMode
  } from 'aurelia-binding';
  import 'syncfusion-javascript/Scripts/ej/web/ej.accordion.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.autocomplete.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.barcode.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.bulletgraph.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.button.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.chart.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.checkbox.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.circulargauge.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.colorpicker.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.editor.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.datepicker.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.daterangepicker.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.datetimepicker.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.diagram.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.dialog.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.dropdownlist.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.digitalgauge.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.fileexplorer.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.gantt.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.grid.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.groupbutton.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.heatmap.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.heatmap.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.kanban.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.lineargauge.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.listbox.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.listview.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.map.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.maskedit.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.menu.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.navigationdrawer.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.editor.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.diagram.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.pager.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.pdfviewer.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.editor.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.pivotchart.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.pivotgauge.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.pivotgrid.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.pivotschemadesigner.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.pivottreemap.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.progressbar.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.radialmenu.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.radialslider.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.radiobutton.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.rangenavigator.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.rating.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.reportviewer.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.ribbon.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.rotator.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.rte.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.schedule.min';
  import 'syncfusion-javascript/Scripts/ej/common/ej.scroller.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.signature.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.slider.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.sparkline.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.spellcheck.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.splitbutton.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.splitter.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.spreadsheet.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.sunburstchart.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.diagram.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.tab.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.tagcloud.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.tile.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.timepicker.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.togglebutton.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.toolbar.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.tooltip.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.treegrid.min';
  import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.treemap.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.treeview.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.uploadbox.min';
  import 'syncfusion-javascript/Scripts/ej/web/ej.waitingpopup.min';
  
  /**
  * Plugin configuration builder
  */
  export class EjConfigBuilder {
    resources: string[];
    useGlobalResources: boolean;
    
    /**
      * Globally register all EJ wrappers including templating support
      */
    useAll(): EjConfigBuilder;
    
    /**
      * Don't globalize any resources
      * Allows you to import wrappers yourself via <require></require>
      */
    withoutGlobalResources(): EjConfigBuilder;
    ejGrid(): EjConfigBuilder;
    ejChart(): EjConfigBuilder;
    ejSunburstChart(): EjConfigBuilder;
    ejMap(): EjConfigBuilder;
    ejTreeMap(): EjConfigBuilder;
    ejRangeNavigator(): EjConfigBuilder;
    ejDiagram(): EjConfigBuilder;
    ejHeatMap(): EjConfigBuilder;
    ejHeatMapLegend(): EjConfigBuilder;
    ejSparkline(): EjConfigBuilder;
    ejSymbolPalette(): EjConfigBuilder;
    ejOverview(): EjConfigBuilder;
    ejPager(): EjConfigBuilder;
    ejBulletGraph(): EjConfigBuilder;
    ejCircularGauge(): EjConfigBuilder;
    ejLinearGauge(): EjConfigBuilder;
    ejDigitalGauge(): EjConfigBuilder;
    ejSplitter(): EjConfigBuilder;
    ejDatePicker(): EjConfigBuilder;
    ejGantt(): EjConfigBuilder;
    ejTreeGrid(): EjConfigBuilder;
    ejColorPicker(): EjConfigBuilder;
    ejDialog(): EjConfigBuilder;
    ejScroller(): EjConfigBuilder;
    ejBarcode(): EjConfigBuilder;
    ejPdfViewer(): EjConfigBuilder;
    ejNumericTextbox(): EjConfigBuilder;
    ejCurrencyTextbox(): EjConfigBuilder;
    ejPercentageTextbox(): EjConfigBuilder;
    ejTimePicker(): EjConfigBuilder;
    ejToolbar(): EjConfigBuilder;
    ejMenu(): EjConfigBuilder;
    ejMaskEdit(): EjConfigBuilder;
    ejTreeView(): EjConfigBuilder;
    ejKanban(): EjConfigBuilder;
    ejRibbon(): EjConfigBuilder;
    ejSpreadsheet(): EjConfigBuilder;
    ejRating(): EjConfigBuilder;
    ejListBox(): EjConfigBuilder;
    ejListView(): EjConfigBuilder;
    ejNavigationDrawer(): EjConfigBuilder;
    ejRotator(): EjConfigBuilder;
    ejRTE(): EjConfigBuilder;
    ejDropDownList(): EjConfigBuilder;
    ejAutocomplete(): EjConfigBuilder;
    ejRadialMenu(): EjConfigBuilder;
    ejRadialSlider(): EjConfigBuilder;
    ejTile(): EjConfigBuilder;
    ejAccordion(): EjConfigBuilder;
    ejTab(): EjConfigBuilder;
    ejCheckBox(): EjConfigBuilder;
    ejRadioButton(): EjConfigBuilder;
    ejToggleButton(): EjConfigBuilder;
    ejSplitButton(): EjConfigBuilder;
    ejGroupButton(): EjConfigBuilder;
    ejDateTimePicker(): EjConfigBuilder;
    ejDateRangePicker(): EjConfigBuilder;
    ejProgressBar(): EjConfigBuilder;
    ejTagCloud(): EjConfigBuilder;
    ejButton(): EjConfigBuilder;
    ejSlider(): EjConfigBuilder;
    ejFileExplorer(): EjConfigBuilder;
    ejPivotGrid(): EjConfigBuilder;
    ejPivotChart(): EjConfigBuilder;
    ejPivotGauge(): EjConfigBuilder;
    ejPivotSchemaDesigner(): EjConfigBuilder;
    ejPivotTreeMap(): EjConfigBuilder;
    ejWaitingPopup(): EjConfigBuilder;
    ejReportViewer(): EjConfigBuilder;
    ejSchedule(): EjConfigBuilder;
    ejUploadbox(): EjConfigBuilder;
    ejSignature(): EjConfigBuilder;
    ejTooltip(): EjConfigBuilder;
    ejSpellCheck(): EjConfigBuilder;
    ejTemplate(): EjConfigBuilder;
  }
  export function configure(aurelia: any, configCallback?: ((builder: EjConfigBuilder) => void)): any;
  export class ejAccordion extends WidgetBase {
    constructor(element?: any);
  }
  export class ejAutocomplete extends WidgetBase {
    constructor(element?: any);
  }
  export class ejBarcode extends WidgetBase {
    constructor(element?: any);
  }
  export class ejBulletGraph extends WidgetBase {
    qualitativeRanges: any;
    constructor(element?: any);
  }
  export class QualitativeRange {
  
  }
  export class ejButton extends WidgetBase {
    constructor(element?: any);
  }
  export class ejChart extends WidgetBase {
    series: any;
    constructor(element?: any);
  }
  export class Series {
  
  }
  export class ejCheckBox extends WidgetBase {
    constructor(element?: any);
  }
  export class ejCircularGauge extends WidgetBase {
    constructor(element?: any);
  }
  export class ejColorPicker extends WidgetBase {
    constructor(element?: any);
  }
  export {
    customAttribute,
    bindable,
    inject,
    inlineView,
    customElement,
    children,
    TemplatingEngine
  };
  export const constants: any;
  export function generateBindables(controlName?: any, inputs?: any, twoWayProperties?: any, abbrevProperties?: any): any;
  export function delayed(): any;
  
  /**
  * To get binded events from the element
  * @param element The Element from which events acquired
  */
  export function getEventOption(element?: any): any;
  
  /**
  * Fire DOM event on an element
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name
  * @param data Addition data to attach to an event
  */
  export function fireEvent(element: Element, name: string, data?: any): any;
  export class TemplateProcessor {
    constructor(context?: any, templateEngine?: any);
    initTemplate(): any;
    initWidgetDependancies(): any;
    renderStringTemplate(self?: any, selector?: any, data?: any, index?: any): any;
    compileTemplate(element?: any): any;
    clearTempalte(): any;
    unbindViews(obj?: any): any;
  }
  export class Template {
    template: any;
    constructor(target?: any);
  }
  export class Util {
    getBindablePropertyName(propertyName: string): string;
    _unhyphenate(name: string): string;
    getOptions(model?: any, properties?: any): any;
    getControlPropertyName(options?: any, propertyName?: any): any;
    hasValue(prop?: any): any;
    processData(value?: any): any;
  }
  export class WidgetBase {
    
    /**
    * To Create an widget
    * @param option Object which contains  Element in which  widget will be created
    */
    createWidget(option?: any): any;
    bind(ctx?: any, overrideCtx?: any): any;
    createTwoWays(): any;
    addTwoways(prop?: any): any;
    
    /**
    * To get property and event options from the element
    * @param element Element from which options are acquired
    */
    getWidgetOptions(element?: any): any;
    getChildProperties(options?: any): any;
    attached(): any;
    
    /**
     * To change widget model value
     * @param property The viewModel property name
     * @param newValue New value of the property
     * @param oldvalue Pld value of the property
     */
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    detached(): any;
  }
  export class ejCurrencyTextbox extends WidgetBase {
    constructor(element?: any);
  }
  export class ejDatePicker extends WidgetBase {
    constructor(element?: any);
  }
  export class ejDateRangePicker extends WidgetBase {
    constructor(element?: any);
  }
  export class ejDateTimePicker extends WidgetBase {
    constructor(element?: any);
  }
  export class ejDiagram extends WidgetBase {
    constructor(element?: any);
  }
  export class ejDialog extends WidgetBase {
    constructor(element?: any);
  }
  export class ejDropDownList extends WidgetBase {
    constructor(element?: any);
  }
  export class ejDigitalGauge extends WidgetBase {
    constructor(element?: any);
  }
  export class ejFileExplorer extends WidgetBase {
    constructor(element?: any);
  }
  export class ejGantt extends WidgetBase {
    constructor(element?: any);
  }
  export class Column {
    template: any;
    setTemplates(): any;
  }
  export class ejGrid extends WidgetBase {
    columns: any;
    constructor(element?: any, templateEngine?: any);
  }
  export class ejGroupButton extends WidgetBase {
    constructor(element?: any);
  }
  export class ejHeatMap extends WidgetBase {
    constructor(element?: any);
  }
  export class ejHeatMapLegend extends WidgetBase {
    constructor(element?: any);
  }
  export class ejKanban extends WidgetBase {
    columns: any;
    constructor(element?: any);
  }
  export class KanbanColumn {
  
  }
  export class ejLinearGauge extends WidgetBase {
    constructor(element?: any);
  }
  export class ejListBox extends WidgetBase {
    constructor(element?: any);
  }
  export class ejListView extends WidgetBase {
    constructor(element?: any);
  }
  export class Layer {
  
  }
  export class ejMap extends WidgetBase {
    layers: any;
    constructor(element?: any);
  }
  export class ejMaskEdit extends WidgetBase {
    constructor(element?: any);
  }
  export class ejMenu extends WidgetBase {
    constructor(element?: any);
  }
  export class ejNavigationDrawer extends WidgetBase {
    constructor(element?: any);
  }
  export class ejNumericTextbox extends WidgetBase {
    constructor(element?: any);
  }
  export class ejOverview extends WidgetBase {
    constructor(element?: any);
  }
  export class ejPager extends WidgetBase {
    constructor(element?: any);
  }
  export class ejPdfViewer extends WidgetBase {
    constructor(element?: any);
  }
  export class ejPercentageTextbox extends WidgetBase {
    constructor(element?: any);
  }
  export class ejPivotChart extends WidgetBase {
    constructor(element?: any);
  }
  export class ejPivotGauge extends WidgetBase {
    constructor(element?: any);
  }
  export class ejPivotGrid extends WidgetBase {
    constructor(element?: any);
  }
  export class ejPivotSchemaDesigner extends WidgetBase {
    constructor(element?: any);
  }
  export class ejPivotTreeMap extends WidgetBase {
    constructor(element?: any);
  }
  export class ejProgressBar extends WidgetBase {
    constructor(element?: any);
  }
  export class Item {
    template: any;
    setTemplates(): any;
  }
  export class ejRadialMenu extends WidgetBase {
    items: any;
    constructor(element?: any, templateEngine?: any);
  }
  export class ejRadialSlider extends WidgetBase {
    constructor(element?: any);
  }
  export class ejRadioButton extends WidgetBase {
    constructor(element?: any);
  }
  export class ejRangeNavigator extends WidgetBase {
    series: any;
    constructor(element?: any);
  }
  export class RangeSeries {
  
  }
  export class ejRating extends WidgetBase {
    constructor(element?: any);
  }
  export class ejReportViewer extends WidgetBase {
    constructor(element?: any);
  }
  export class ejRibbon extends WidgetBase {
    constructor(element?: any);
  }
  export class ejRotator extends WidgetBase {
    constructor(element?: any);
  }
  export class ejRte extends WidgetBase {
    constructor(element?: any);
  }
  export class ejSchedule extends WidgetBase {
    resources: any;
    constructor(element?: any);
  }
  export class ScheduleResource {
  
  }
  export class ejScroller extends WidgetBase {
    constructor(element?: any);
  }
  export class ejSignature extends WidgetBase {
    constructor(element?: any);
  }
  export class ejSlider extends WidgetBase {
    constructor(element?: any);
  }
  export class ejSparkline extends WidgetBase {
    constructor(element?: any);
  }
  export class ejSpellCheck extends WidgetBase {
    constructor(element?: any);
  }
  export class ejSplitButton extends WidgetBase {
    constructor(element?: any);
  }
  export class ejSplitter extends WidgetBase {
    constructor(element?: any);
  }
  export class Sheet {
  
  }
  export class ejSpreadsheet extends WidgetBase {
    sheets: any;
    constructor(element?: any);
  }
  export class ejSunburstChart extends WidgetBase {
    levels: any;
    constructor(element?: any);
  }
  export class SunburstLevels {
  
  }
  export class ejSymbolPalette extends WidgetBase {
    constructor(element?: any);
  }
  export class ejTab extends WidgetBase {
    constructor(element?: any);
  }
  export class ejTagCloud extends WidgetBase {
    constructor(element?: any);
  }
  export class ejTile extends WidgetBase {
    constructor(element?: any);
  }
  export class ejTimePicker extends WidgetBase {
    constructor(element?: any);
  }
  export class ejToggleButton extends WidgetBase {
    constructor(element?: any);
  }
  export class ejToolbar extends WidgetBase {
    constructor(element?: any);
  }
  export class ejTooltip extends WidgetBase {
    constructor(element?: any);
  }
  export class ejTreeGrid extends WidgetBase {
    columns: any;
    constructor(element?: any, templateEngine?: any);
  }
  export class TreeGridColumn {
    angularTemplate: any;
    setTemplates(): any;
  }
  export class Level {
  
  }
  export class ejTreeMap extends WidgetBase {
    levels: any;
    constructor(element?: any);
  }
  export class ejTreeView extends WidgetBase {
    constructor(element?: any);
  }
  export class ejUploadbox extends WidgetBase {
    constructor(element?: any);
  }
  export class ejWaitingPopup extends WidgetBase {
    constructor(element?: any);
  }
}