declare module 'aurelia-binding' {
export class Lexer {}
export class ParserImplementation {}
}
declare module 'aurelia-syncfusion-bridge' {
  import {
    PLATFORM
  } from 'aurelia-pal';
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
    bindingMode,
    BindingEngine
  } from 'aurelia-binding';
  
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
    ejComboBox(): EjConfigBuilder;
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
  export class ejBulletGraph extends WidgetBase {
    qualitativeRanges: any;
    constructor(element?: any);
  }
  export class QualitativeRange {
  
  }
  export class ejBarcode extends WidgetBase {
    constructor(element?: any);
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
  export class ejComboBox extends WidgetBase {
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
  export function generateBindables(controlName?: any, inputs?: any, twoWayProperties?: any, abbrevProperties?: any, observerCollection?: any): any;
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
    unsubscribe(): any;
    unbind(): any;
    
    /**
     * To change widget model value
     * @param property The viewModel property name
     * @param newValue New value of the property
     * @param oldvalue Pld value of the property
     */
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    update(e?: any): any;
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
  export class ejDigitalGauge extends WidgetBase {
    constructor(element?: any);
  }
  export class ejDropDownList extends WidgetBase {
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
  export class ejPager extends WidgetBase {
    constructor(element?: any);
  }
  export class ejOverview extends WidgetBase {
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
  export class ejRangeNavigator extends WidgetBase {
    series: any;
    constructor(element?: any);
  }
  export class RangeSeries {
  
  }
  export class ejRadioButton extends WidgetBase {
    constructor(element?: any);
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
  export class ejToggleButton extends WidgetBase {
    constructor(element?: any);
  }
  export class ejTimePicker extends WidgetBase {
    constructor(element?: any);
  }
  export class ejToolbar extends WidgetBase {
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
  export class ejTooltip extends WidgetBase {
    constructor(element?: any);
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