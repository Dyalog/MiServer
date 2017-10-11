import {customAttribute,bindable,customElement,children,TemplatingEngine,inlineView,BindableProperty,HtmlBehaviorResource,noView,processContent,TargetInstruction} from 'aurelia-templating';
import {inject,Container} from 'aurelia-dependency-injection';
import {metadata} from 'aurelia-metadata';
import {TaskQueue} from 'aurelia-task-queue';
import {bindingMode} from 'aurelia-binding';

/**
* Plugin configuration builder
*/
export class EjConfigBuilder {

  resources: string[] = [];
  useGlobalResources: boolean = true;

  /**
  * Globally register all EJ wrappers including templating support
  */
  useAll() : EjConfigBuilder {
    this.ejGrid()
    .ejChart()
    .ejSunburstChart()
    .ejMap()
    .ejTreeMap()
    .ejRangeNavigator()
    .ejDiagram()
    .ejHeatMap()
    .ejHeatMapLegend()
    .ejSparkline()
    .ejSymbolPalette()
    .ejOverview()
    .ejPager()
    .ejBulletGraph()
    .ejCircularGauge()
    .ejLinearGauge()
    .ejDigitalGauge()
    .ejSplitter()
    .ejDatePicker()
    .ejGantt()
    .ejTreeGrid()
    .ejColorPicker()
    .ejDialog()
    .ejScroller()
    .ejBarcode()
    .ejPdfViewer()
    .ejNumericTextbox()
    .ejCurrencyTextbox()
    .ejPercentageTextbox()
    .ejTimePicker()
    .ejToolbar()
    .ejMenu()
    .ejMaskEdit()
    .ejTreeView()
    .ejKanban()
    .ejRibbon()
    .ejSpreadsheet()
    .ejRating()
    .ejListBox()
    .ejListView()
    .ejNavigationDrawer()
    .ejRotator()
    .ejRTE()
    .ejDropDownList()
    .ejAutocomplete()
    .ejRadialMenu()
    .ejRadialSlider()
    .ejTile()
    .ejAccordion()
    .ejTab()
    .ejCheckBox()
    .ejRadioButton()
    .ejToggleButton()
    .ejSplitButton()
    .ejGroupButton()
    .ejDateTimePicker()
    .ejDateRangePicker()
    .ejProgressBar()
    .ejTagCloud()
    .ejButton()
    .ejSlider()
    .ejFileExplorer()
    .ejPivotGrid()
    .ejPivotChart()
    .ejPivotGauge()
    .ejPivotSchemaDesigner()
    .ejPivotTreeMap()
    .ejWaitingPopup()
    .ejReportViewer()
    .ejSchedule()
    .ejUploadbox()
    .ejSignature()
    .ejTooltip()
    .ejSpellCheck()
    .ejTemplate();
    return this;
  }
 /**
  * Don't globalize any resources
  * Allows you to import wrappers yourself via <require></require>
  */
  withoutGlobalResources(): EjConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }
  ejGrid(): EjConfigBuilder {
    this.resources.push('./grid/grid');
    this.resources.push('./grid/column');
    return this;
  }
  ejChart(): EjConfigBuilder {
    this.resources.push('./chart/chart');
    this.resources.push('./chart/series');
    return this;
  }
  ejSunburstChart(): EjConfigBuilder {
    this.resources.push('./sunburstchart/sunburstchart');
    this.resources.push('./sunburstchart/sunburstlevels');
    return this;
  }
  ejMap(): EjConfigBuilder {
    this.resources.push('./map/map');
    this.resources.push('./map/layer');
    return this;
  }
  ejTreeMap(): EjConfigBuilder {
    this.resources.push('./treemap/treemap');
    this.resources.push('./treemap/level');
    return this;
  }
  ejRangeNavigator(): EjConfigBuilder {
    this.resources.push('./rangenavigator/rangenavigator');
    this.resources.push('./rangenavigator/rangeseries');
    return this;
  }
  ejDiagram(): EjConfigBuilder {
    this.resources.push('./diagram/diagram');
    return this;
  }
  ejHeatMap(): EjConfigBuilder {
    this.resources.push('./heatmap/heatmap');
    return this;
  }
  ejHeatMapLegend(): EjConfigBuilder {
    this.resources.push('./heatmaplegend/heatmaplegend');
    return this;
  }
  ejSparkline(): EjConfigBuilder {
    this.resources.push('./sparkline/sparkline');
    return this;
  }
  ejSymbolPalette(): EjConfigBuilder {
    this.resources.push('./symbolpalette/symbolpalette');
    return this;
  }
  ejOverview(): EjConfigBuilder {
    this.resources.push('./overview/overview');
    return this;
  }
  ejPager(): EjConfigBuilder {
    this.resources.push('./pager/pager');
    return this;
  }
  ejBulletGraph(): EjConfigBuilder {
    this.resources.push('./bulletgraph/bulletgraph');
    this.resources.push('./bulletgraph/qualitativerange');
    return this;
  }
  ejCircularGauge(): EjConfigBuilder {
    this.resources.push('./circulargauge/circulargauge');
    return this;
  }
  ejLinearGauge(): EjConfigBuilder {
    this.resources.push('./lineargauge/lineargauge');
    return this;
  }
  ejDigitalGauge(): EjConfigBuilder {
    this.resources.push('./digitalgauge/digitalgauge');
    return this;
  }
  ejSplitter(): EjConfigBuilder {
    this.resources.push('./splitter/splitter');
    return this;
  }
  ejDatePicker(): EjConfigBuilder {
    this.resources.push('./datepicker/datepicker');
    return this;
  }
  ejGantt(): EjConfigBuilder {
    this.resources.push('./gantt/gantt');
    return this;
  }
  ejTreeGrid(): EjConfigBuilder {
    this.resources.push('./treegrid/treegrid');
    this.resources.push('./treegrid/treegridcolumn');
    return this;
  }
  ejColorPicker(): EjConfigBuilder {
    this.resources.push('./colorpicker/colorpicker');
    return this;
  }
  ejDialog(): EjConfigBuilder {
    this.resources.push('./dialog/dialog');
    return this;
  }
  ejScroller(): EjConfigBuilder {
    this.resources.push('./scroller/scroller');
    return this;
  }
  ejBarcode(): EjConfigBuilder {
    this.resources.push('./barcode/barcode');
    return this;
  }
  ejPdfViewer(): EjConfigBuilder {
    this.resources.push('./pdfviewer/pdfviewer');
    return this;
  }
  ejNumericTextbox(): EjConfigBuilder {
    this.resources.push('./numerictextbox/numerictextbox');
    return this;
  }
  ejCurrencyTextbox(): EjConfigBuilder {
    this.resources.push('./currencytextbox/currencytextbox');
    return this;
  }
  ejPercentageTextbox(): EjConfigBuilder {
    this.resources.push('./percentagetextbox/percentagetextbox');
    return this;
  }
  ejTimePicker(): EjConfigBuilder {
    this.resources.push('./timepicker/timepicker');
    return this;
  }
  ejToolbar(): EjConfigBuilder {
    this.resources.push('./toolbar/toolbar');
    return this;
  }
  ejMenu(): EjConfigBuilder {
    this.resources.push('./menu/menu');
    return this;
  }
  ejMaskEdit(): EjConfigBuilder {
    this.resources.push('./maskedit/maskedit');
    return this;
  }
  ejTreeView(): EjConfigBuilder {
    this.resources.push('./treeview/treeview');
    return this;
  }
  ejKanban(): EjConfigBuilder {
    this.resources.push('./kanban/kanban');
    this.resources.push('./kanban/kanbancolumn');
    return this;
  }
  ejRibbon(): EjConfigBuilder {
    this.resources.push('./ribbon/ribbon');
    return this;
  }
  ejSpreadsheet(): EjConfigBuilder {
    this.resources.push('./spreadsheet/spreadsheet');
    this.resources.push('./spreadsheet/sheet');
    return this;
  }
  ejRating(): EjConfigBuilder {
    this.resources.push('./rating/rating');
    return this;
  }
  ejListBox(): EjConfigBuilder {
    this.resources.push('./listbox/listbox');
    return this;
  }
  ejListView(): EjConfigBuilder {
    this.resources.push('./listview/listview');
    return this;
  }
  ejNavigationDrawer(): EjConfigBuilder {
    this.resources.push('./navigationdrawer/navigationdrawer');
    return this;
  }
  ejRotator(): EjConfigBuilder {
    this.resources.push('./rotator/rotator');
    return this;
  }
  ejRTE(): EjConfigBuilder {
    this.resources.push('./rte/rte');
    return this;
  }
  ejDropDownList(): EjConfigBuilder {
    this.resources.push('./dropdownlist/dropdownlist');
    return this;
  }
  ejAutocomplete(): EjConfigBuilder {
    this.resources.push('./autocomplete/autocomplete');
    return this;
  }
  ejRadialMenu(): EjConfigBuilder {
    this.resources.push('./radialmenu/radialmenu');
    this.resources.push('./radialmenu/item');
    return this;
  }
  ejRadialSlider(): EjConfigBuilder {
    this.resources.push('./radialslider/radialslider');
    return this;
  }
  ejTile(): EjConfigBuilder {
    this.resources.push('./tile/tile');
    return this;
  }
  ejAccordion(): EjConfigBuilder {
    this.resources.push('./accordion/accordion');
    return this;
  }
  ejTab(): EjConfigBuilder {
    this.resources.push('./tab/tab');
    return this;
  }
  ejCheckBox(): EjConfigBuilder {
    this.resources.push('./checkbox/checkbox');
    return this;
  }
  ejRadioButton(): EjConfigBuilder {
    this.resources.push('./radiobutton/radiobutton');
    return this;
  }
  ejToggleButton(): EjConfigBuilder {
    this.resources.push('./togglebutton/togglebutton');
    return this;
  }
  ejSplitButton(): EjConfigBuilder {
    this.resources.push('./splitbutton/splitbutton');
    return this;
  }
  ejGroupButton(): EjConfigBuilder {
    this.resources.push('./groupbutton/groupbutton');
    return this;
  }
  ejDateTimePicker(): EjConfigBuilder {
    this.resources.push('./datetimepicker/datetimepicker');
    return this;
  }
  ejDateRangePicker(): EjConfigBuilder {
    this.resources.push('./daterangepicker/daterangepicker');
    return this;
  }
  ejProgressBar(): EjConfigBuilder {
    this.resources.push('./progressbar/progressbar');
    return this;
  }
  ejTagCloud(): EjConfigBuilder {
    this.resources.push('./tagcloud/tagcloud');
    return this;
  }
  ejButton(): EjConfigBuilder {
    this.resources.push('./button/button');
    return this;
  }
  ejSlider(): EjConfigBuilder {
    this.resources.push('./slider/slider');
    return this;
  }
  ejFileExplorer(): EjConfigBuilder {
    this.resources.push('./fileexplorer/fileexplorer');
    return this;
  }
  ejPivotGrid(): EjConfigBuilder {
    this.resources.push('./pivotgrid/pivotgrid');
    return this;
  }
  ejPivotChart(): EjConfigBuilder {
    this.resources.push('./pivotchart/pivotchart');
    return this;
  }
  ejPivotGauge(): EjConfigBuilder {
    this.resources.push('./pivotgauge/pivotgauge');
    return this;
  }
  ejPivotSchemaDesigner(): EjConfigBuilder {
    this.resources.push('./pivotschemadesigner/pivotschemadesigner');
    return this;
  }
  ejPivotTreeMap(): EjConfigBuilder {
    this.resources.push('./pivottreemap/pivottreemap');
    return this;
  }
  ejWaitingPopup(): EjConfigBuilder {
    this.resources.push('./waitingpopup/waitingpopup');
    return this;
  }
  ejReportViewer(): EjConfigBuilder {
    this.resources.push('./reportviewer/reportviewer');
    return this;
  }
  ejSchedule(): EjConfigBuilder {
    this.resources.push('./schedule/schedule');
    this.resources.push('./schedule/scheduleresource');
    return this;
  }
  ejUploadbox(): EjConfigBuilder {
    this.resources.push('./uploadbox/uploadbox');
    return this;
  }
  ejSignature(): EjConfigBuilder {
    this.resources.push('./signature/signature');
    return this;
  }
  ejTooltip(): EjConfigBuilder {
    this.resources.push('./tooltip/tooltip');
    return this;
  }
  ejSpellCheck(): EjConfigBuilder {
    this.resources.push('./spellcheck/spellcheck');
    return this;
  }
  ejTemplate(): EjConfigBuilder {
    this.resources.push('./common/template');
    return this;
  }
}


export function configure(aurelia, configCallback?: (builder: EjConfigBuilder) => void) {
  let builder = new EjConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

      // Pull the data off the builder
  let resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}

import 'syncfusion-javascript/Scripts/ej/web/ej.accordion.min';

@customElement(`${constants.elementPrefix}accordion`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejAccordion', ['ajaxSettings', 'allowKeyboardNavigation', 'collapseSpeed', 'collapsible', 'cssClass', 'customIcon', 'disabledItems', 'enableAnimation', 'enabled', 'enabledItems', 'enableMultipleOpen', 'enablePersistence', 'enableRTL', 'events', 'expandSpeed', 'headerSize', 'height', 'heightAdjustMode', 'htmlAttributes', 'selectedItemIndex', 'selectedItems', 'showCloseButton', 'showRoundedCorner', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejAccordion extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.autocomplete.min';

@customAttribute(`${constants.attributePrefix}autocomplete`)
@generateBindables('ejAutocomplete', ['addNewText', 'allowAddNew', 'allowSorting', 'animateType', 'autoFocus', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delaySuggestionTimeout', 'delimiterChar', 'emptyResultText', 'enableAutoFill', 'enabled', 'enableDistinct', 'enablePersistence', 'enableRTL', 'fields', 'filterType', 'height', 'highlightSearch', 'itemsCount', 'locale', 'minCharacter', 'multiColumnSettings', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectValueByKey', 'showEmptyResultText', 'showLoadingIcon', 'showPopupButton', 'showRoundedCorner', 'showResetIcon', 'sortOrder', 'template', 'validationMessage', 'validationRules', 'value', 'visible', 'watermarkText', 'width'], ['value', 'selectValueByKey'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejAutocomplete extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.barcode.min';

@customElement(`${constants.elementPrefix}barcode`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejBarcode', ['barcodeToTextGapHeight', 'barHeight', 'darkBarColor', 'displayText', 'enabled', 'encodeStartStopSymbol', 'lightBarColor', 'narrowBarWidth', 'quietZone', 'symbologyType', 'text', 'textColor', 'wideBarWidth', 'xDimension'])
@inject(Element)
export class ejBarcode extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.bulletgraph.min';

@customElement(`${constants.elementPrefix}bullet-graph`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejBulletGraph', ['applyRangeStrokeToLabels', 'applyRangeStrokeToTicks', 'captionSettings', 'comparativeMeasureValue', 'enableAnimation', 'enableResizing', 'flowDirection', 'height', 'isResponsive', 'enableGroupSeparator', 'locale', 'orientation', 'qualitativeRanges', 'qualitativeRangeSize', 'quantitativeScaleLength', 'quantitativeScaleSettings', 'theme', 'tooltipSettings', 'value', 'width'])
@inject(Element)
export class ejBulletGraph extends WidgetBase {
  @children(`${constants.elementPrefix}qualitative-range`) qualitativeRanges = [];
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'qualitativeRanges';
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}qualitative-range`)
@generateBindables('qualitativeRanges', ['rangeEnd', 'rangeOpacity', 'rangeStroke'])

export class QualitativeRange {
}


import 'syncfusion-javascript/Scripts/ej/web/ej.button.min';

@customAttribute(`${constants.attributePrefix}button`)
@generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text', 'timeInterval', 'type', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.chart.min';

@customElement(`${constants.elementPrefix}chart`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejChart', ['annotations', 'background', 'backGroundImageUrl', 'border', 'exportSettings', 'chartArea', 'columnDefinitions', 'commonSeriesOptions', 'selectedDataPointIndexes', 'crosshair', 'depth', 'enable3D', 'enableCanvasRendering', 'initSeriesRender', 'enableRotation', 'indicators', 'isResponsive', 'legend', 'locale', 'palette', 'Margin', 'perspectiveAngle', 'primaryXAxis', 'axes', 'primaryYAxis', 'rotation', 'rowDefinitions', 'series', 'sideBySideSeriesPlacement', 'size', 'theme', 'tilt', 'title', 'wallSize', 'zooming'])
@inject(Element)
export class ejChart extends WidgetBase {
  @children(`${constants.elementPrefix}series`) series = [];
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'series';
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}series`)
@generateBindables('series', ['bearFillColor', 'border', 'animationDuration', 'bullFillColor', 'columnFacet', 'columnWidth', 'columnSpacing', 'stackingGroup', 'dashArray', 'dataSource', 'cardinalSplineTension', 'doughnutCoefficient', 'doughnutSize', 'drawType', 'enableAnimation', 'enableSmartLabels', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'fill', 'font', 'funnelHeight', 'funnelWidth', 'gapRatio', 'isClosed', 'isStacking', 'isTransposed', 'showMedian', 'labelPosition', 'splitMode', 'boxPlotMode', 'bubbleOptions', 'splineType', 'lineCap', 'lineJoin', 'marker', 'name', 'opacity', 'outlierSettings', 'palette', 'pieCoefficient', 'pieOfPieCoefficient', 'splitValue', 'gapWidth', 'emptyPointSettings', 'positiveFill', 'connectorLine', 'dragSettings', 'errorBar', 'points', 'pyramidMode', 'query', 'startAngle', 'cornerRadius', 'tooltip', 'type', 'visibility', 'visibleOnLegend', 'xAxisName', 'xName', 'yAxisName', 'yName', 'high', 'low', 'open', 'close', 'pointColorMappingName', 'zOrder', 'size', 'trendlines', 'highlightSettings', 'selectionSettings'])

export class Series {
}


import 'syncfusion-javascript/Scripts/ej/web/ej.checkbox.min';

@customAttribute(`${constants.attributePrefix}check-box`)
@generateBindables('ejCheckBox', ['checked', 'checkState', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage', 'validationRules', 'value'], ['checked', 'checkState'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejCheckBox extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.circulargauge.min';

@customElement(`${constants.elementPrefix}circular-gauge`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejCircularGauge', ['animationSpeed', 'backgroundColor', 'distanceFromCorner', 'rangeZOrder', 'enableAnimation', 'enableGroupSeparator', 'enableResize', 'frame', 'gaugePosition', 'height', 'interiorGradient', 'isRadialGradient', 'isResponsive', 'locale', 'maximum', 'minimum', 'outerCustomLabelPosition', 'radius', 'readOnly', 'scales', 'theme', 'legend', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])
@inject(Element)
export class ejCircularGauge extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.colorpicker.min';

@customAttribute(`${constants.attributePrefix}color-picker`)
@generateBindables('ejColorPicker', ['buttonText', 'buttonMode', 'columns', 'cssClass', 'custom', 'displayInline', 'enabled', 'enableOpacity', 'htmlAttributes', 'locale', 'modelType', 'opacityValue', 'palette', 'presetType', 'showApplyCancel', 'showClearButton', 'showPreview', 'showRecentColors', 'showSwitcher', 'showTooltip', 'toolIcon', 'tooltipText', 'value'], ['value', 'opacityValue'])
@inject(Element)
export class ejColorPicker extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


export {customAttribute, bindable, inject, inlineView, customElement, children, TemplatingEngine};

export const constants = {
  eventPrefix: 'e-on-',
  bindablePrefix: 'e-',
  attributePrefix: 'ej-',
  elementPrefix: 'ej-',
  aureliaTemplateString: '<template><slot></slot></template>'
};

export function generateBindables(controlName, inputs, twoWayProperties, abbrevProperties) {
  return function(target, key, descriptor) {
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let container = (Container.instance || new Container());
    let util = container.get(Util);
    inputs.push('options');
    inputs.push('widget');
    let len = inputs.length;
    target.prototype.controlName = controlName;
    target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
    target.prototype.abbrevProperties = abbrevProperties ? abbrevProperties : [];
    if (len) {
      target.prototype.controlProperties = inputs;
      for (let i = 0; i < len; i++) {
        let option = inputs[i];
        if (abbrevProperties && option in abbrevProperties) {
          option = abbrevProperties[option];
        }
        let nameOrConfigOrTarget = {
          name: util.getBindablePropertyName(option)
        };

        if (option === 'widget') {
          nameOrConfigOrTarget.defaultBindingMode = bindingMode.twoWay;
        }

        let prop = new BindableProperty(nameOrConfigOrTarget);
        prop.registerWith(target, behaviorResource, descriptor);
      }
    }
  };
}

export function delayed() {
  return function(target, key, descriptor) {
    let taskQueue = (Container.instance || new Container()).get(TaskQueue);
    let ptr = descriptor.value;

    descriptor.value = function(...args) {
      if (this.childPropertyName) {
        taskQueue.queueTask(() => ptr.apply(this, args));
      }else {
        ptr.apply(this, args);
      }
    };

    return descriptor;
  };
}

/**
* To get binded events from the element
* @param element The Element from which events acquired
*/
export function getEventOption(element) {
  let name;
  let attr;
  let attributes = element.attributes;
  let option = {};
  let container = (Container.instance || new Container());
  let util = container.get(Util);
  for (let i = 0, len = attributes.length; i < len; i++) {
    attr = attributes[i];
    name = attr.name;
    if (!name.startsWith(constants.eventPrefix)) {
      continue;
    }
    let actualEventName = name.split('.')[0];//Event name with constants event prefix
    let eventName = util._unhyphenate(actualEventName.split(constants.eventPrefix)[1]);
    option[eventName] = e => fireEvent(element, actualEventName, e);  // eslint-disable-line no-loop-func
  }
  return option;
}
/**
* Fire DOM event on an element
* @param element The Element which the DOM event will be fired on
* @param name The Event's name
* @param data Addition data to attach to an event
*/
export function fireEvent(element: Element, name: string, data? = {}) {
  let event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);
  return event;
}

@inject(TemplatingEngine, Util)
export class TemplateProcessor {

  constructor(context, templateEngine) {
    this.context = context;
    this.templatingEngine = templateEngine;
    this.util = new Util();
  }

  initTemplate() {
    let proxy = this;
    ej.template.render = function(self, selector, data, index) {
      return proxy.renderStringTemplate(self, selector, data, index);
    };
  }

  initWidgetDependancies() {
    if ( this.context.widget.aureliaTemplate) {
      this.compileTemplate(this.context.widget.element);
    }
    let proxy =  this.context;
    let element =  this.context.widget.element;
    element.on( this.context.widget.pluginName + 'refresh', function() {
      if (proxy.widget.aureliaTemplate) {
        proxy.templateProcessor.compileTemplate(element);
      }
    });
  }

  renderStringTemplate(self, selector, data, index) {
    let templateObject = self.aureliaTemplate;
    if (!templateObject || !templateObject[selector]) {
      templateObject = templateObject || {};
      templateObject[selector] = { key: ej.getGuid('aurtmpl'), itemData: [], views: [] };
      self.aureliaTemplate = templateObject;
    }
    let scope = templateObject[selector];
    if (this.util.hasValue(index)) {
      scope.itemData[index] = data;
    } else {
      scope.itemData = [data];
    }
    let actElement = $(selector).html();
    let tempElement = "<div ej-prop='" + index + "' class='" + templateObject[selector].key + " ej-aurelia-template'>" + actElement + '</div>';
    return tempElement;
  }

  compileTemplate(element) {
    let templates = $(element).find('.ej-aurelia-template');
    let templateObject =  this.context.widget.aureliaTemplate;
    for (let template in templateObject) {
      let tmplElement = templates.filter('.' + templateObject[template].key);
      if (tmplElement.length) {
        for (let i = 0; i < tmplElement.length; i++) {
          let dataIndex = parseInt($(tmplElement[i]).attr('ej-prop'));// eslint-disable-line radix
          let view = this.templatingEngine.enhance(tmplElement[i]);
          view.bind(templateObject[template].itemData[dataIndex], this.context.parentCtx);
          templateObject[template].views[dataIndex] = view;
        }
      } else {
        this.unbindViews(templateObject[template]);
        delete templateObject[template];
      }
    }
  }

  clearTempalte() {
    let templateObject =  this.context.widget.aureliaTemplate;
    if (templateObject && Object.keys(templateObject).length) {
      for (let t in templateObject) {
        this.unbindViews(templateObject[t]);
        delete templateObject[t];
      }
    }
  }

  unbindViews(obj) {
    for (let i = 0; i < obj.views.length; i++) {
      let view = obj.views[i];
      view.unbind();
    }
  }

}

@customElement(`${constants.elementPrefix}template`)
@noView()
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }
  element.innerHTML = '';
})
@inject(TargetInstruction)
export class Template {
  @bindable template;
  constructor(target) {
    this.template = target.elementInstruction.template;
  }

}

export class Util {

  getBindablePropertyName(propertyName: string): string {
    let name = `${constants.bindablePrefix}${propertyName}`;
    return this._unhyphenate(name);
  }

  _unhyphenate(name: string): string {
    return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  }

  getOptions(model, properties ) {
    let bindableproperites = {};
    let value;
    for (let prop of properties) {
      if (model.abbrevProperties && prop in model.abbrevProperties && model.abbrevProperties.hasOwnProperty(prop)) {
        value = model[this.getBindablePropertyName(model.abbrevProperties[prop])];
      }else {
        value = model[this.getBindablePropertyName(prop)];
      }
      if (this.hasValue(value)) {
        if (typeof value === 'string' ) {
          value = this.processData(value);
        }
        bindableproperites[prop] = value;
      }
    }
    return bindableproperites;
  }

  getControlPropertyName(options, propertyName) {
    let property;
    for (let prop of options.controlProperties) {
      if (propertyName === this.getBindablePropertyName(prop)) {
        property = prop;
        break;
      }
    }
    return property;
  }

  hasValue(prop) {
    return typeof (prop) !== 'undefined' && prop !== null;
  }

  processData(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (+value + '' === value) {
      return +value;
    }
    return value;
  }
}

let firstValue = {};
export class WidgetBase {
/**
* To Create an widget
* @param option Object which contains  Element in which  widget will be created
*/
  createWidget(option) {
    this.allOption = this.getWidgetOptions(option.element);
    if (!this.ejOptions && !this.isEditor) {
      this.createTwoWays();
    }
    this.eWidget = this.widget = jQuery($(option.element))[this.controlName](this.allOption).data(this.controlName);
    if (this.templateProcessor) {
      this.templateProcessor.initWidgetDependancies();
    }
    if (this.isEditor) {
      this.widget.model._change = (evt) => {
        if ('eValue' in this) {
          this[this.util.getBindablePropertyName('value')] = evt.value;
        }
      };
    }
  }

  bind(ctx, overrideCtx) {
    this.parentCtx = overrideCtx;
    if (this.widget && this.isEditor) {
      this.widget.option('value', this.eValue);
    }
  }

  createTwoWays() {
    let model = this.allOption;
    let twoWays = this.twoWays;
    let len = twoWays.length;
    for (let i = 0; i < len; i++) {
      let prop = twoWays[i];
      ej.createObject(prop, this.addTwoways(prop), model);
    }
  }

  addTwoways(prop) {
    let model = this;
    let value = firstValue;
    return function(newVal, isApp) {
      if (value === firstValue) {
        let viewModelProp = model.util.getBindablePropertyName(prop);
        value = model[viewModelProp];
        if (value === undefined) {
          value = this.defaults[prop];
        }
        return value;
      }
      if (newVal === undefined) {
        return value;
      }
      if (value === newVal) {
        return null;
      }
      value = newVal;
      if (!isApp && model.util.hasValue(newVal) ) {
        let viewModelProp = model.util.getBindablePropertyName(prop);
        model[viewModelProp] = newVal;
      }
      return null;
    };
  }
/**
* To get property and event options from the element
* @param element Element from which options are acquired
*/
  getWidgetOptions(element) {
    let propOptions;
    if (this.ejOptions) {
      propOptions = this.ejOptions;
    } else {
      propOptions = this.util.getOptions(this, this.controlProperties);
    }
    let eventOption = getEventOption(element);
    if (this.hasChildProperty) {
      this.getChildProperties(propOptions);
    }
    return Object.assign({}, propOptions, eventOption);
  }

  getChildProperties(options) {
    let PropertyName = this.childPropertyName;
    let childCollection = this[PropertyName];
    let len = childCollection.length;
    if (len) {
      options[PropertyName] = [];
      let childProperties = childCollection[0].controlProperties;
      for (let i = 0; i < len; i++) {
        options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
      }
    }
  }

  @delayed()
  attached() {
    if (this.templateProcessor) {
      this[this.childPropertyName].forEach(template => template.setTemplates());
    }
    this.util = new Util();
    this.createWidget({ element: this.element });
  }
/**
 * To change widget model value
 * @param property The viewModel property name
 * @param newValue New value of the property
 * @param oldvalue Pld value of the property
 */
  propertyChanged(property, newValue, oldValue) {
    if (this.widget) {
      let modelValue;
      let prop = this.util.getControlPropertyName(this, property);
      if (prop) {
        if (prop === 'widget') {
          return;
        } else if (prop !== 'options') {
          modelValue = this.widget.model[prop];
          let isTwoway = typeof modelValue === 'function';
          if (isTwoway) {
            modelValue = modelValue();
          }
          if (modelValue !== newValue) {
            if (isTwoway) {
              newValue = this.addTwoways(prop);
            }
            this.widget.option(prop, newValue);
          }
        } else {
          this.widget.option(newValue);
        }
      }
    }
  }
  detached() {
    if (this.templateProcessor) {
      this.templateProcessor.clearTempalte();
    }
    if (this.widget) {
      this.widget.destroy();
    }
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.editor.min';

@customAttribute(`${constants.attributePrefix}currency-textbox`)
@generateBindables('ejCurrencyTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejCurrencyTextbox extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.datepicker.min';

@customAttribute(`${constants.attributePrefix}date-picker`)
@generateBindables('ejDatePicker', ['allowEdit', 'allowDrillDown', 'blackoutDates', 'buttonText', 'cssClass', 'dateFormat', 'dayHeaderFormat', 'depthLevel', 'displayInline', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'fields', 'headerFormat', 'height', 'highlightSection', 'highlightWeekend', 'htmlAttributes', 'locale', 'maxDate', 'minDate', 'readOnly', 'showDisabledRange', 'showFooter', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'showTooltip', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'tooltipFormat', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'weekNumber', 'width'], ['value'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejDatePicker extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.daterangepicker.min';

@customAttribute(`${constants.attributePrefix}date-range-picker`)
@generateBindables('ejDateRangePicker', ['allowEdit', 'buttonText', 'cssClass', 'dateFormat', 'enableTimePicker', 'enabled', 'enablePersistence', 'endDate', 'height', 'locale', 'ranges', 'separator', 'startDate', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'value', 'watermarkText', 'width'], ['value'])
@inject(Element)
export class ejDateRangePicker extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.datetimepicker.min';

@customAttribute(`${constants.attributePrefix}date-time-picker`)
@generateBindables('ejDateTimePicker', ['allowEdit', 'buttonText', 'cssClass', 'dateTimeFormat', 'dayHeaderFormat', 'depthLevel', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'headerFormat', 'height', 'htmlAttributes', 'interval', 'locale', 'maxDateTime', 'minDateTime', 'popupPosition', 'readOnly', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'startDay', 'startLevel', 'stepMonths', 'timeDisplayFormat', 'timeDrillDown', 'timePopupWidth', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejDateTimePicker extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.diagram.min';

@customElement(`${constants.elementPrefix}diagram`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejDiagram', ['backgroundColor', 'backgroundImage', 'bridgeDirection', 'commandManager', 'connectors', 'connectorTemplate', 'constraints', 'contextMenu', 'dataSourceSettings', 'defaultSettings', 'drawType', 'enableAutoScroll', 'enableContextMenu', 'height', 'historyManager', 'labelRenderingMode', 'layout', 'locale', 'nodes', 'nodeTemplate', 'pageSettings', 'scrollSettings', 'selectedItems', 'showTooltip', 'rulerSettings', 'snapSettings', 'tool', 'tooltip', 'width', 'zoomFactor'])
@inject(Element)
export class ejDiagram extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.dialog.min';

@customElement(`${constants.elementPrefix}dialog`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejDialog', ['actionButtons', 'ajaxSettings', 'allowDraggable', 'allowKeyboardNavigation', 'animation', 'backgroundScroll', 'closeOnEscape', 'containment', 'contentType', 'contentUrl', 'cssClass', 'enableAnimation', 'enabled', 'enableModal', 'enablePersistence', 'enableResize', 'enableRTL', 'faviconCSS', 'height', 'htmlAttributes', 'isResponsive', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'position', 'showHeader', 'showOnInit', 'showRoundedCorner', 'target', 'title', 'tooltip', 'width', 'zIndex', 'showFooter', 'footerTemplateId'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejDialog extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.dropdownlist.min';

@customAttribute(`${constants.attributePrefix}drop-down-list`)
@generateBindables('ejDropDownList', ['allowVirtualScrolling', 'cascadeTo', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delimiterChar', 'enableAnimation', 'enabled', 'enableIncrementalSearch', 'enableFilterSearch', 'enableServerFiltering', 'enablePersistence', 'enablePopupResize', 'enableRTL', 'enableSorting', 'fields', 'filterType', 'headerTemplate', 'height', 'htmlAttributes', 'itemsCount', 'locale', 'maxPopupHeight', 'minPopupHeight', 'maxPopupWidth', 'minPopupWidth', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showPopupOnLoad', 'showRoundedCorner', 'sortOrder', 'targetID', 'template', 'text', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width', 'virtualScrollMode'], ['value'], {'enableRTL': 'enableRtl', 'targetID': 'targetId'})
@inject(Element)
export class ejDropDownList extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.digitalgauge.min';

@customElement(`${constants.elementPrefix}digital-gauge`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejDigitalGauge', ['frame', 'height', 'isResponsive', 'enableResize', 'items', 'matrixSegmentData', 'segmentData', 'themes', 'value', 'width'], ['value'])
@inject(Element)
export class ejDigitalGauge extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.fileexplorer.min';

@customElement(`${constants.elementPrefix}file-explorer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejFileExplorer', ['ajaxAction', 'ajaxDataType', 'ajaxSettings', 'allowDragAndDrop', 'allowKeyboardNavigation', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'enablePersistence', 'enableResize', 'enableRTL', 'enableThumbnailCompress', 'fileTypes', 'filterSettings', 'gridSettings', 'height', 'isResponsive', 'layout', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'path', 'rootFolderName', 'selectedFolder', 'selectedItems', 'showCheckbox', 'showContextMenu', 'showFooter', 'showRoundedCorner', 'showThumbnail', 'showToolbar', 'showNavigationPane', 'tools', 'toolsList', 'uploadSettings', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejFileExplorer extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.gantt.min';

@customElement(`${constants.elementPrefix}gantt`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejGantt', ['addDialogFields', 'allowColumnResize', 'allowGanttChartEditing', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowMultipleExporting', 'allowSelection', 'allowSorting', 'allowDragAndDrop', 'enablePredecessorValidation', 'baselineColor', 'workMapping', 'expandStateMapping', 'baselineEndDateMapping', 'baselineStartDateMapping', 'childMapping', 'columnDialogFields', 'connectorLineBackground', 'connectorlineWidth', 'cssClass', 'cellTooltipTemplate', 'dragTooltip', 'dataSource', 'dateFormat', 'dayWorkingTime', 'durationMapping', 'durationUnit', 'editDialogFields', 'isResponsive', 'splitterSettings', 'editSettings', 'enableAltRow', 'enableWBS', 'enableWBSPredecessor', 'enableCollapseAll', 'leftTaskLabelMapping', 'rightTaskLabelMapping', 'leftTaskLabelTemplate', 'rightTaskLabelTemplate', 'enableContextMenu', 'enableProgressBarResizing', 'enableResize', 'enableTaskbarDragTooltip', 'enableTaskbarTooltip', 'enableVirtualization', 'endDateMapping', 'highlightWeekends', 'holidays', 'includeWeekend', 'locale', 'milestoneMapping', 'showColumnOptions', 'parentTaskbarTemplate', 'taskType', 'workUnit', 'taskSchedulingMode', 'selectionType', 'parentProgressbarBackground', 'resourceUnitMapping', 'notesMapping', 'taskSchedulingModeMapping', 'durationUnitMapping', 'parentTaskbarBackground', 'parentTaskIdMapping', 'predecessorMapping', 'progressbarBackground', 'progressbarHeight', 'progressbarTooltipTemplate', 'progressbarTooltipTemplateId', 'progressMapping', 'query', 'renderBaseline', 'resourceIdMapping', 'resourceInfoMapping', 'resourceNameMapping', 'resources', 'roundOffDayworkingTime', 'rowHeight', 'scheduleEndDate', 'scheduleHeaderSettings', 'scheduleStartDate', 'selectedRowIndex', 'showColumnChooser', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'showProgressStatus', 'showResourceNames', 'showTaskNames', 'sizeSettings', 'selectedCellIndexes', 'sortSettings', 'splitterPosition', 'startDateMapping', 'stripLines', 'taskbarBackground', 'taskbarEditingTooltipTemplate', 'taskbarEditingTooltipTemplateId', 'taskbarHeight', 'taskbarTooltipTemplate', 'taskbarTemplate', 'milestoneTemplate', 'readOnly', 'taskbarTooltipTemplateId', 'taskIdMapping', 'taskNameMapping', 'toolbarSettings', 'treeColumnIndex', 'selectionMode', 'validateManualTasksOnLinking', 'weekendBackground', 'workingTimeScale', 'workWeek'], ['dataSource', 'selectedRowIndex', 'selectedCellIndexes'])
@inject(Element)
export class ejGantt extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}column`)
@generateBindables('columns', ['clipMode', 'allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting', 'allowResizing', 'commands', 'cssClass', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckbox', 'editParams', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filterBarTemplate', 'filterType', 'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'priority', 'showInColumnChooser', 'template', 'textAlign', 'tooltip', 'type', 'validationRules', 'visible', 'width'])

export class Column {
  @children(`${constants.elementPrefix}template`) template = [];
  setTemplates() {
    if (this.template[0]) {
      let util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.grid.min';

@customElement(`${constants.elementPrefix}grid`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejGrid', ['allowCellMerging', 'allowGrouping', 'allowKeyboardNavigation', 'allowFiltering', 'allowSorting', 'allowMultiSorting', 'allowPaging', 'allowReordering', 'allowResizeToFit', 'allowResizing', 'allowRowDragAndDrop', 'allowScrolling', 'allowSearching', 'allowSelection', 'allowTextWrap', 'allowMultipleExporting', 'commonWidth', 'gridLines', 'childGrid', 'columnLayout', 'columns', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'editSettings', 'enableAltRow', 'enableAutoSaveOnSelectionChange', 'enableHeaderHover', 'enablePersistence', 'enableResponsiveRow', 'enableRowHover', 'enableRTL', 'enableTouch', 'enableToolbarItems', 'exportToExcelAction', 'exportToPdfAction', 'exportToWordAction', 'filterSettings', 'groupSettings', 'isResponsive', 'keySettings', 'locale', 'minWidth', 'pageSettings', 'query', 'resizeSettings', 'rowTemplate', 'rowDropSettings', 'searchSettings', 'selectedRecords', 'selectedRowIndex', 'selectedRowIndices', 'selectionSettings', 'selectionType', 'scrollSettings', 'showColumnChooser', 'showStackedHeader', 'showSummary', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'textWrapSettings', 'toolbarSettings'], ['dataSource', 'selectedRowIndices'], {'enableRTL': 'enableRtl'})
@inject(Element, TemplatingEngine)
export class ejGrid extends WidgetBase {
  @children(`${constants.elementPrefix}column`) columns = [];
  constructor(element, templateEngine) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'columns';
    this.templateProcessor = new TemplateProcessor(this, templateEngine);
    this.templateProcessor.initTemplate();
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.groupbutton.min';

@customAttribute(`${constants.attributePrefix}group-button`)
@generateBindables('ejGroupButton', ['cssClass', 'dataSource', 'enableRTL', 'enabled', 'fields', 'groupButtonMode', 'height', 'htmlAttributes', 'orientation', 'query', 'selectedItemIndex', 'showRoundedCorner', 'size', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejGroupButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.heatmap.min';

@customElement(`${constants.elementPrefix}heat-map`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejHeatMap', ['width', 'height', 'id', 'showTooltip', 'tooltipSettings', 'itemsSource', 'heatMapCell', 'isResponsive', 'enableVirtualization', 'defaultColumnStyle', 'legendCollection', 'itemsMapping', 'colorMappingCollection'])
@inject(Element)
export class ejHeatMap extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.heatmap.min';

@customElement(`${constants.elementPrefix}heat-map-legend`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejHeatMapLegend', ['width', 'height', 'isResponsive', 'showLabel', 'colorMappingCollection', 'orientation', 'legendMode'])
@inject(Element)
export class ejHeatMapLegend extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.kanban.min';

@customElement(`${constants.elementPrefix}kanban`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejKanban', ['allowDragAndDrop', 'allowTitle', 'swimlaneSettings', 'allowToggleColumn', 'allowSearching', 'allowFiltering', 'allowSelection', 'allowHover', 'allowKeyboardNavigation', 'allowScrolling', 'allowPrinting', 'contextMenuSettings', 'columns', 'cardSettings', 'customToolbarItems', 'cssClass', 'dataSource', 'enableTouch', 'enableRTL', 'enableTotalCount', 'editSettings', 'fields', 'keyField', 'isResponsive', 'minWidth', 'filterSettings', 'query', 'keySettings', 'scrollSettings', 'searchSettings', 'selectionType', 'stackedHeaderRows', 'tooltipSettings', 'workflows', 'locale'], ['dataSource'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejKanban extends WidgetBase {
  @children(`${constants.elementPrefix}kanban-column`) columns = [];
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'columns';
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}kanban-column`)
@generateBindables('columns', ['headerText', 'totalCount', 'key', 'allowDrop', 'allowDrag', 'isCollapsed', 'constraints', 'headerTemplate', 'width', 'visible', 'showAddButton'])

export class KanbanColumn {
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.lineargauge.min';

@customElement(`${constants.elementPrefix}linear-gauge`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejLinearGauge', ['animationSpeed', 'backgroundColor', 'borderColor', 'enableAnimation', 'enableMarkerPointerAnimation', 'isResponsive', 'enableGroupSeparator', 'enableResize', 'frame', 'height', 'labelColor', 'locale', 'maximum', 'minimum', 'orientation', 'outerCustomLabelPosition', 'pointerGradient1', 'pointerGradient2', 'readOnly', 'scales', 'theme', 'tickColor', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])
@inject(Element)
export class ejLinearGauge extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.listbox.min';

@customAttribute(`${constants.attributePrefix}list-box`)
@generateBindables('ejListBox', ['allowDrag', 'allowDrop', 'allowMultiSelection', 'allowVirtualScrolling', 'caseSensitiveSearch', 'cascadeTo', 'checkedIndices', 'cssClass', 'dataSource', 'enabled', 'enableIncrementalSearch', 'enablePersistence', 'enableRTL', 'enableWordWrap', 'fields', 'height', 'itemHeight', 'itemsCount', 'totalItemsCount', 'itemRequestCount', 'loadDataOnInit', 'query', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showRoundedCorner', 'sortOrder', 'template', 'value', 'virtualScrollMode', 'width', 'targetID'], ['value', 'dataSource'], {'enableRTL': 'enableRtl', 'targetID': 'targetId'})
@inject(Element)
export class ejListBox extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.listview.min';

@customElement(`${constants.elementPrefix}list-view`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejListView', ['ajaxSettings', 'checkedIndices', 'cssClass', 'dataSource', 'enableAjax', 'enableCache', 'enableCheckMark', 'enableFiltering', 'enableGroupList', 'enablePersistence', 'fieldSettings', 'items', 'headerBackButtonText', 'headerTitle', 'height', 'locale', 'persistSelection', 'preventSelection', 'query', 'renderTemplate', 'selectedItemIndex', 'showHeader', 'showHeaderBackButton', 'templateId', 'width', 'itemRequestCount', 'totalItemsCount', 'allowVirtualScrolling', 'virtualScrollMode'], ['dataSource', 'selectedItemIndex'])
@inject(Element)
export class ejListView extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}layer`)
@generateBindables('layers', ['bingMapType', 'bubbleSettings', 'dataSource', 'shapeDataPath', 'shapePropertyPath', 'enableMouseHover', 'enableSelection', 'key', 'labelSettings', 'geometryType', 'layerType', 'legendSettings', 'mapItemsTemplate', 'markers', 'markerTemplate', 'selectedMapShapes', 'selectionMode', 'shapeData', 'shapeSettings', 'showMapItems', 'showTooltip', 'tooltipTemplate', 'urlTemplate', 'subLayers'])

export class Layer {
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.map.min';

@customElement(`${constants.elementPrefix}map`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejMap', ['background', 'baseMapIndex', 'centerPosition', 'draggingOnSelection', 'enableAnimation', 'enableLayerChangeAnimation', 'enablePan', 'enableResize', 'isResponsive', 'zoomSettings', 'navigationControl', 'locale', 'layers'], ['baseMapIndex', 'enablePan', 'enableResize', 'enableAnimation', 'zoomSettings.level', 'zoomSettings.minValue', 'zoomSettings.maxValue', 'zoomSettings.factor', 'zoomSettings.enableZoom', 'zoomSettings.enableZoomOnSelection', 'navigationControl.enableNavigation', 'navigationControl.orientation', 'navigationControl.absolutePosition', 'navigationControl.dockPosition'])
@inject(Element)
export class ejMap extends WidgetBase {
  @children(`${constants.elementPrefix}layer`) layers = [];
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'layers';
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.maskedit.min';

@customAttribute(`${constants.attributePrefix}mask-edit`)
@generateBindables('ejMaskEdit', ['cssClass', 'customCharacter', 'enabled', 'enablePersistence', 'height', 'hidePromptOnLeave', 'htmlAttributes', 'inputMode', 'locale', 'maskFormat', 'name', 'readOnly', 'showError', 'showPromptChar', 'showRoundedCorner', 'textAlign', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'])
@inject(Element)
export class ejMaskEdit extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.menu.min';

@customAttribute(`${constants.attributePrefix}menu`)
@generateBindables('ejMenu', ['animationType', 'contextMenuTarget', 'container', 'cssClass', 'enableAnimation', 'enableCenterAlign', 'enabled', 'enableRTL', 'enableSeparator', 'excludeTarget', 'fields', 'height', 'htmlAttributes', 'isResponsive', 'menuType', 'openOnClick', 'orientation', 'showRootLevelArrows', 'showSubLevelArrows', 'subMenuDirection', 'titleText', 'width', 'overflowHeight', 'overflowWidth'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejMenu extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.navigationdrawer.min';

@customElement(`${constants.elementPrefix}navigation-drawer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejNavigationDrawer', ['ajaxSettings', 'contentId', 'cssClass', 'direction', 'enableListView', 'items', 'listViewSettings', 'position', 'targetId', 'type', 'width', 'isPaneOpen'])
@inject(Element)
export class ejNavigationDrawer extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.editor.min';

@customAttribute(`${constants.attributePrefix}numeric-textbox`)
@generateBindables('ejNumericTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejNumericTextbox extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.diagram.min';

@customElement(`${constants.elementPrefix}overview`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejOverview', ['sourceID', 'height', 'width'], [], {'sourceID': 'sourceId'})
@inject(Element)
export class ejOverview extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.pager.min';

@customElement(`${constants.elementPrefix}pager`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPager', ['customText', 'currentPage', 'enableExternalMessage', 'enableQueryString', 'enableRTL', 'externalMessage', 'locale', 'pageCount', 'pageSize', 'pageSizeList', 'totalPages', 'totalRecordsCount', 'showPageInfo'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPager extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.pdfviewer.min';

@customElement(`${constants.elementPrefix}pdf-viewer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPdfViewer', ['locale', 'toolbarSettings', 'serverActionSettings', 'serviceUrl', 'documentPath', 'enableTextMarkupAnnotations', 'enableHighlightAnnotation', 'enableUnderlineAnnotation', 'enableStrikethroughAnnotation', 'enableSignature', 'strikethroughSettings', 'underlineSettings', 'highlightSettings', 'signatureSettings', 'annotationType', 'pageCount', 'currentPageNumber', 'zoomPercentage', 'pdfService', 'interactionMode', 'hyperlinkOpenState', 'enableHyperlink', 'enableTextSelection', 'isResponsive', 'isDocumentEdited', 'allowClientBuffering', 'fileName'])
@inject(Element)
export class ejPdfViewer extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.editor.min';

@customAttribute(`${constants.attributePrefix}percentage-textbox`)
@generateBindables('ejPercentageTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPercentageTextbox extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.pivotchart.min';

@customElement(`${constants.elementPrefix}pivot-chart`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotChart', ['analysisMode', 'cssClass', 'zooming', 'commonSeriesOptions', 'dataSource', 'customObject', 'enable3D', 'enableRTL', 'enableMultiLevelLabels', 'isResponsive', 'legend', 'locale', 'operationalMode', 'primaryXAxis', 'primaryYAxis', 'rotation', 'enableContextMenu', 'serviceMethodSettings', 'size', 'url'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPivotChart extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.pivotgauge.min';

@customElement(`${constants.elementPrefix}pivot-gauge`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotGauge', ['columnsCount', 'cssClass', 'customObject', 'dataSource', 'enableAnimation', 'enableTooltip', 'enableRTL', 'isResponsive', 'labelFormatSettings', 'locale', 'rowsCount', 'scales', 'serviceMethodSettings', 'showHeaderLabel', 'url', 'analysisMode', 'operationalMode'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPivotGauge extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.pivotgrid.min';

@customElement(`${constants.elementPrefix}pivot-grid`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotGrid', ['analysisMode', 'cssClass', 'pivotTableFieldListID', 'dataSource', 'valueSortSettings', 'frozenHeaderSettings', 'headerSettings', 'showUniqueNameOnPivotButton', 'customObject', 'collapsedMembers', 'enableCellContext', 'enableCellSelection', 'enableDrillThrough', 'enableCellDoubleClick', 'enableCellEditing', 'enableCollapseByDefault', 'enableColumnGrandTotal', 'enableConditionalFormatting', 'enableAdvancedFilter', 'enableDeferUpdate', 'enableGroupingBar', 'enableMemberEditorPaging', 'memberEditorPageSize', 'enableGrandTotal', 'enableJSONRendering', 'enablePivotFieldList', 'enableRowGrandTotal', 'enableRTL', 'enableToolTip', 'enableToolTipAnimation', 'enableColumnResizing', 'resizeColumnsToFit', 'enableContextMenu', 'enableVirtualScrolling', 'enablePaging', 'hyperlinkSettings', 'isResponsive', 'jsonRecords', 'layout', 'locale', 'operationalMode', 'serviceMethodSettings', 'url'], [], {'pivotTableFieldListID': 'pivotTableFieldListId', 'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPivotGrid extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.pivotschemadesigner.min';

@customElement(`${constants.elementPrefix}pivot-schema-designer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotSchemaDesigner', ['cssClass', 'customObject', 'enableWrapper', 'enableRTL', 'olap', 'enableDragDrop', 'height', 'locale', 'pivotControl', 'serviceMethods', 'url', 'width', 'layout'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPivotSchemaDesigner extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.pivottreemap.min';

@customElement(`${constants.elementPrefix}pivot-tree-map`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotTreeMap', ['cssClass', 'dataSource', 'customObject', 'isResponsive', 'locale', 'operationalMode', 'serviceMethodSettings', 'url'])
@inject(Element)
export class ejPivotTreeMap extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.progressbar.min';

@customAttribute(`${constants.attributePrefix}progress-bar`)
@generateBindables('ejProgressBar', ['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'maxValue', 'minValue', 'percentage', 'showRoundedCorner', 'text', 'value', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejProgressBar extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}item`)
@generateBindables('items', ['imageUrl', 'prependTo', 'text', 'enabled', 'click', 'badge', 'type', 'sliderSettings', 'items'])

export class Item {
  @children(`${constants.elementPrefix}template`) template = [];
  setTemplates() {
    if (this.template[0]) {
      let util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.radialmenu.min';

@customElement(`${constants.elementPrefix}radial-menu`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'items', 'radius', 'targetElementId', 'position'])
@inject(Element, TemplatingEngine)
export class ejRadialMenu extends WidgetBase {
  @children(`${constants.elementPrefix}item`) items = [];
  constructor(element, templateEngine) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'items';
    this.templateProcessor = new TemplateProcessor(this, templateEngine);
    this.templateProcessor.initTemplate();
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.radialslider.min';

@customElement(`${constants.elementPrefix}radial-slider`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejRadialSlider', ['autoOpen', 'cssClass', 'enableAnimation', 'enableRoundOff', 'endAngle', 'inline', 'innerCircleImageClass', 'innerCircleImageUrl', 'labelSpace', 'locale', 'radius', 'showInnerCircle', 'startAngle', 'strokeWidth', 'ticks', 'value'], ['value', 'ticks'])
@inject(Element)
export class ejRadialSlider extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.radiobutton.min';

@customAttribute(`${constants.attributePrefix}radio-button`)
@generateBindables('ejRadioButton', ['checked', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'htmlAttributes', 'id', 'idPrefix', 'name', 'size', 'text', 'validationMessage', 'validationRules', 'value'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejRadioButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.rangenavigator.min';

@customElement(`${constants.elementPrefix}range-navigator`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejRangeNavigator', ['allowSnapping', 'border', 'dataSource', 'series', 'seriesSettings', 'enableDeferredUpdate', 'enableScrollbar', 'enableAutoResizing', 'enableRTL', 'isResponsive', 'labelSettings', 'locale', 'navigatorStyleSettings', 'padding', 'rangePadding', 'rangeSettings', 'selectedData', 'selectedRangeSettings', 'scrollRangeSettings', 'sizeSettings', 'theme', 'tooltipSettings', 'valueAxisSettings', 'valueType', 'xName', 'yName'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejRangeNavigator extends WidgetBase {
  @children(`${constants.elementPrefix}range-series`) series = [];
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'series';
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}range-series`)
@generateBindables('series', ['xName', 'yName', 'dataSource', 'type', 'enableAnimation', 'fill'])

export class RangeSeries {
}


import 'syncfusion-javascript/Scripts/ej/web/ej.rating.min';

@customAttribute(`${constants.attributePrefix}rating`)
@generateBindables('ejRating', ['allowReset', 'cssClass', 'enabled', 'enablePersistence', 'height', 'htmlAttributes', 'incrementStep', 'maxValue', 'minValue', 'orientation', 'precision', 'readOnly', 'shapeHeight', 'shapeWidth', 'showTooltip', 'value', 'width'], ['value'])
@inject(Element)
export class ejRating extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.reportviewer.min';

@customElement(`${constants.elementPrefix}report-viewer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejReportViewer', ['dataSources', 'enablePageCache', 'exportSettings', 'isResponsive', 'locale', 'pageSettings', 'parameters', 'printMode', 'printOptions', 'processingMode', 'renderMode', 'reportPath', 'reportServerUrl', 'reportServiceUrl', 'toolbarSettings', 'zoomFactor'])
@inject(Element)
export class ejReportViewer extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.ribbon.min';

@customElement(`${constants.elementPrefix}ribbon`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejRibbon', ['allowResizing', 'isResponsive', 'buttonDefaults', 'showQAT', 'cssClass', 'collapsePinSettings', 'enableOnDemand', 'collapsible', 'enableRTL', 'expandPinSettings', 'applicationTab', 'contextualTabs', 'disabledItemIndex', 'enabledItemIndex', 'selectedItemIndex', 'tabs', 'locale', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejRibbon extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.rotator.min';

@customAttribute(`${constants.attributePrefix}rotator`)
@generateBindables('ejRotator', ['allowKeyboardNavigation', 'animationSpeed', 'animationType', 'circularMode', 'cssClass', 'dataSource', 'delay', 'displayItemsCount', 'enableAutoPlay', 'enabled', 'enableRTL', 'fields', 'frameSpace', 'isResponsive', 'navigateSteps', 'orientation', 'pagerPosition', 'query', 'showCaption', 'showNavigateButton', 'showPager', 'showPlayButton', 'showThumbnail', 'slideHeight', 'slideWidth', 'startIndex', 'stopOnHover', 'template', 'templateId', 'thumbnailSourceID'], [], {'enableRTL': 'enableRtl', 'thumbnailSourceID': 'thumbnailSourceId'})
@inject(Element)
export class ejRotator extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.rte.min';

@customAttribute(`${constants.attributePrefix}rte`)
@generateBindables('ejRTE', ['allowEditing', 'allowKeyboardNavigation', 'autoFocus', 'autoHeight', 'pasteCleanupSettings', 'colorCode', 'colorPaletteColumns', 'colorPaletteRows', 'cssClass', 'enabled', 'enableHtmlEncode', 'enablePersistence', 'enableResize', 'enableRTL', 'enableXHTML', 'enableTabKeyNavigation', 'exportToPdfSettings', 'exportToWordSettings', 'externalCSS', 'fileBrowser', 'fontName', 'fontSize', 'format', 'height', 'htmlAttributes', 'iframeAttributes', 'imageBrowser', 'importSettings', 'isResponsive', 'locale', 'maxHeight', 'maxLength', 'maxWidth', 'minHeight', 'minWidth', 'name', 'showClearAll', 'showClearFormat', 'showCustomTable', 'showContextMenu', 'showDimensions', 'showFontOption', 'showFooter', 'showHtmlSource', 'showHtmlTagInfo', 'showToolbar', 'showCharCount', 'showRoundedCorner', 'showWordCount', 'tableColumns', 'tableRows', 'tools', 'toolsList', 'toolbarOverflowMode', 'tooltipSettings', 'undoStackLimit', 'value', 'validationRules', 'validationMessage', 'width', 'zoomStep'], ['value'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejRte extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.schedule.min';

@customElement(`${constants.elementPrefix}schedule`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSchedule', ['allowDragAndDrop', 'allowInline', 'allowKeyboardNavigation', 'appointmentSettings', 'appointmentTemplateId', 'cssClass', 'categorizeSettings', 'cellHeight', 'cellWidth', 'contextMenuSettings', 'currentDate', 'currentView', 'dateFormat', 'showAppointmentNavigator', 'enableAppointmentResize', 'enableLoadOnDemand', 'enablePersistence', 'enableRTL', 'endHour', 'group', 'height', 'workHours', 'isDST', 'isResponsive', 'locale', 'maxDate', 'minDate', 'orientation', 'prioritySettings', 'readOnly', 'reminderSettings', 'renderDates', 'resourceHeaderTemplateId', 'resources', 'showAllDayRow', 'showWeekend', 'showCurrentTimeIndicator', 'showHeaderBar', 'showLocationField', 'showTimeZoneFields', 'showQuickWindow', 'startHour', 'timeMode', 'timeZone', 'timeZoneCollection', 'views', 'width', 'enableRecurrenceValidation', 'agendaViewSettings', 'firstDayOfWeek', 'workWeek', 'tooltipSettings', 'timeScale', 'showDeleteConfirmationDialog', 'allDayCellsTemplateId', 'workCellsTemplateId', 'dateHeaderTemplateId', 'showOverflowButton', 'appointmentDragArea', 'showNextPrevMonth', 'blockoutSettings'], ['currentView', 'currentDate'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejSchedule extends WidgetBase {
  @children(`${constants.elementPrefix}schedule-resource`) resources = [];
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'resources';
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}schedule-resource`)
@generateBindables('resources', ['field', 'title', 'name', 'allowMultiple', 'resourceSettings'])

export class ScheduleResource {
}


import 'syncfusion-javascript/Scripts/ej/common/ej.scroller.min';

@customAttribute(`${constants.attributePrefix}scroller`)
@generateBindables('ejScroller', ['animationSpeed', 'autoHide', 'buttonSize', 'enabled', 'enablePersistence', 'enableRTL', 'enableTouchScroll', 'height', 'scrollerSize', 'scrollLeft', 'scrollOneStepBy', 'scrollTop', 'targetPane', 'width'], ['scrollLeft', 'scrollTop'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejScroller extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.signature.min';

@customElement(`${constants.elementPrefix}signature`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSignature', ['backgroundColor', 'backgroundImage', 'enabled', 'height', 'isResponsive', 'saveImageFormat', 'saveWithBackground', 'showRoundedCorner', 'strokeColor', 'strokeWidth', 'width'])
@inject(Element)
export class ejSignature extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.slider.min';

@customAttribute(`${constants.attributePrefix}slider`)
@generateBindables('ejSlider', ['allowMouseWheel', 'animationSpeed', 'cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'incrementStep', 'largeStep', 'maxValue', 'minValue', 'orientation', 'readOnly', 'showRoundedCorner', 'showScale', 'showSmallTicks', 'showTooltip', 'sliderType', 'smallStep', 'value', 'values', 'width'], ['value'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejSlider extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.sparkline.min';

@customElement(`${constants.elementPrefix}sparkline`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSparkline', ['background', 'fill', 'stroke', 'border', 'width', 'opacity', 'highPointColor', 'lowPointColor', 'startPointColor', 'endPointColor', 'negativePointColor', 'rangeBandSettings', 'locale', 'palette', 'isResponsive', 'enableCanvasRendering', 'enableGroupSeparator', 'dataSource', 'xName', 'yName', 'padding', 'type', 'theme', 'tooltip', 'markerSettings', 'size', 'axisLineSettings'])
@inject(Element)
export class ejSparkline extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.spellcheck.min';

@customElement(`${constants.elementPrefix}spell-check`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSpellCheck', ['dictionarySettings', 'misspellWordCss', 'locale', 'maxSuggestionCount', 'ignoreWords', 'contextMenuSettings', 'ignoreSettings', 'isResponsive', 'enableValidateOnType', 'controlsToValidate', 'enableAsync'])
@inject(Element)
export class ejSpellCheck extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.splitbutton.min';

@customAttribute(`${constants.attributePrefix}split-button`)
@generateBindables('ejSplitButton', ['arrowPosition', 'buttonMode', 'contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'showRoundedCorner', 'size', 'suffixIcon', 'targetID', 'target', 'text', 'width'], [], {'enableRTL': 'enableRtl', 'targetID': 'targetId'})
@inject(Element)
export class ejSplitButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.splitter.min';

@customElement(`${constants.elementPrefix}splitter`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSplitter', ['allowKeyboardNavigation', 'animationSpeed', 'cssClass', 'enableAnimation', 'enableRTL', 'height', 'htmlAttributes', 'isResponsive', 'orientation', 'properties', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejSplitter extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}sheet`)
@generateBindables('sheets', ['border', 'cellTypes', 'cFormatRule', 'colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'frozenRows', 'frozenColumns', 'headerStyles', 'hideColumns', 'hideRows', 'mergeCells', 'primaryKey', 'query', 'rangeSettings', 'rowCount', 'rows', 'showGridlines', 'showHeader', 'showHeadings', 'sheetName', 'startCell'])

export class Sheet {
}


import 'syncfusion-javascript/Scripts/ej/web/ej.spreadsheet.min';

@customElement(`${constants.elementPrefix}spreadsheet`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSpreadsheet', ['activeSheetIndex', 'allowAutoCellType', 'allowAutoFill', 'allowAutoSum', 'allowCellFormatting', 'allowCellType', 'allowCharts', 'allowClear', 'allowClipboard', 'allowComments', 'allowConditionalFormats', 'allowDataValidation', 'allowDelete', 'allowDragAndDrop', 'allowEditing', 'allowFiltering', 'allowFormatAsTable', 'allowFormatPainter', 'allowFormulaBar', 'allowFreezing', 'allowHyperlink', 'allowImport', 'allowInsert', 'allowKeyboardNavigation', 'allowLockCell', 'allowMerging', 'allowOverflow', 'allowResizing', 'allowSearching', 'allowSelection', 'allowSorting', 'allowUndoRedo', 'allowWrap', 'apWidth', 'autoFillSettings', 'chartSettings', 'columnCount', 'columnWidth', 'cssClass', 'customFormulas', 'enableContextMenu', 'enablePivotTable', 'enableTouch', 'exportSettings', 'formatSettings', 'importSettings', 'isReadOnly', 'locale', 'nameManager', 'pictureSettings', 'printSettings', 'ribbonSettings', 'rowCount', 'rowHeight', 'scrollSettings', 'selectionSettings', 'sheetCount', 'sheets', 'showPager', 'showRibbon', 'undoRedoStep', 'userName'])
@inject(Element)
export class ejSpreadsheet extends WidgetBase {
  @children(`${constants.elementPrefix}sheet`) sheets = [];
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'sheets';
  }
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.sunburstchart.min';

@customElement(`${constants.elementPrefix}sunburst-chart`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSunburstChart', ['background', 'valueMemberPath', 'border', 'segmentBorder', 'dataSource', 'palette', 'parentNode', 'xName', 'yName', 'isResponsive', 'size', 'visible', 'tooltip', 'points', 'startAngle', 'endAngle', 'radius', 'innerRadius', 'dataLabelSettings', 'title', 'highlightSettings', 'selectionSettings', 'levels', 'legend', 'theme', 'margin', 'enableAnimation', 'opacity', 'zoomSettings', 'animationType'])
@inject(Element)
export class ejSunburstChart extends WidgetBase {
  @children(`${constants.elementPrefix}sunburst-levels`) levels = [];
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'levels';
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}sunburst-levels`)
@generateBindables('levels', ['groupMemberPath'])

export class SunburstLevels {
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.diagram.min';

@customElement(`${constants.elementPrefix}symbol-palette`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSymbolPalette', ['allowDrag', 'cssClass', 'defaultSettings', 'diagramId', 'headerHeight', 'height', 'paletteItemHeight', 'paletteItemWidth', 'palettes', 'previewHeight', 'previewOffset', 'previewWidth', 'showPaletteItemText', 'width'])
@inject(Element)
export class ejSymbolPalette extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.tab.min';

@customElement(`${constants.elementPrefix}tab`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejTab', ['ajaxSettings', 'allowKeyboardNavigation', 'collapsible', 'cssClass', 'disabledItemIndex', 'enableAnimation', 'enabled', 'enabledItemIndex', 'enablePersistence', 'enableRTL', 'enableTabScroll', 'events', 'headerPosition', 'headerSize', 'height', 'heightAdjustMode', 'hiddenItemIndex', 'htmlAttributes', 'idPrefix', 'selectedItemIndex', 'showCloseButton', 'showReloadIcon', 'showRoundedCorner', 'width'], ['selectedItemIndex'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejTab extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.tagcloud.min';

@customElement(`${constants.elementPrefix}tag-cloud`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejTagCloud', ['cssClass', 'dataSource', 'enableRTL', 'fields', 'htmlAttributes', 'format', 'maxFontSize', 'minFontSize', 'query', 'showTitle', 'titleImage', 'titleText'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejTagCloud extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.tile.min';

@customElement(`${constants.elementPrefix}tile`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejTile', ['badge', 'caption', 'cssClass', 'enablePersistence', 'height', 'imageClass', 'imagePosition', 'imageTemplateId', 'imageUrl', 'locale', 'liveTile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection', 'backgroundColor'])
@inject(Element)
export class ejTile extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.timepicker.min';

@customAttribute(`${constants.attributePrefix}time-picker`)
@generateBindables('ejTimePicker', ['cssClass', 'disableTimeRanges', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'height', 'hourInterval', 'htmlAttributes', 'interval', 'locale', 'maxTime', 'minTime', 'minutesInterval', 'popupHeight', 'popupWidth', 'readOnly', 'secondsInterval', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'value', 'width'], ['value'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejTimePicker extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.togglebutton.min';

@customAttribute(`${constants.attributePrefix}toggle-button`)
@generateBindables('ejToggleButton', ['activePrefixIcon', 'activeSuffixIcon', 'activeText', 'contentType', 'cssClass', 'defaultPrefixIcon', 'defaultSuffixIcon', 'defaultText', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'preventToggle', 'showRoundedCorner', 'size', 'toggleState', 'type', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejToggleButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.toolbar.min';

@customAttribute(`${constants.attributePrefix}toolbar`)
@generateBindables('ejToolbar', ['cssClass', 'dataSource', 'disabledItemIndices', 'enabled', 'enabledItemIndices', 'enableRTL', 'enableSeparator', 'fields', 'height', 'htmlAttributes', 'hide', 'isResponsive', 'Items', 'orientation', 'query', 'responsiveType', 'showRoundedCorner', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejToolbar extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.tooltip.min';

@customAttribute(`${constants.attributePrefix}tooltip`)
@generateBindables('ejTooltip', ['allowKeyboardNavigation', 'animation', 'associate', 'autoCloseTimeout', 'closeMode', 'collision', 'containment', 'content', 'cssClass', 'enabled', 'enableRTL', 'height', 'isBalloon', 'position', 'showRoundedCorner', 'showShadow', 'target', 'tip', 'title', 'trigger', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejTooltip extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.treegrid.min';

@customElement(`${constants.elementPrefix}tree-grid`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejTreeGrid', ['allowColumnResize', 'allowColumnReordering', 'allowDragAndDrop', 'allowFiltering', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowSelection', 'allowSorting', 'allowPaging', 'allowTextWrap', 'altRowTemplateID', 'expandStateMapping', 'childMapping', 'columns', 'columnDialogFields', 'contextMenuSettings', 'cssClass', 'dataSource', 'headerTextOverflow', 'dragTooltip', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableResize', 'enableVirtualization', 'enableLoadOnDemand', 'columnResizeSettings', 'commonWidth', 'filterSettings', 'locale', 'parseRowTemplate', 'idMapping', 'isResponsive', 'parentIdMapping', 'pageSettings', 'cellTooltipTemplate', 'query', 'rowHeight', 'rowTemplateID', 'selectedRowIndex', 'selectedCellIndexes', 'selectionSettings', 'showColumnOptions', 'showColumnChooser', 'showDetailsRow', 'showDetailsRowInfoColumn', 'detailsTemplate', 'detailsRowHeight', 'showSummaryRow', 'showTotalSummary', 'summaryRows', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'sizeSettings', 'sortSettings', 'toolbarSettings', 'treeColumnIndex'], ['dataSource', 'selectedRowIndex', 'selectedCellIndexes', 'pageSettings.currentPage'], {'altRowTemplateID': 'altRowTemplateId', 'rowTemplateID': 'rowTemplateId'})
@inject(Element, TemplatingEngine)
export class ejTreeGrid extends WidgetBase {
  @children(`${constants.elementPrefix}tree-grid-column`) columns = [];
  constructor(element, templateEngine) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'columns';
    this.templateProcessor = new TemplateProcessor(this, templateEngine);
    this.templateProcessor.initTemplate();
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}tree-grid-column`)
@generateBindables('columns', ['allowFiltering', 'allowFilteringBlankContent', 'allowSorting', 'allowCellSelection', 'editParams', 'editTemplate', 'editType', 'dropdownData', 'field', 'template', 'templateID', 'angularTemplate', 'filterEditType', 'headerText', 'displayAsCheckbox', 'showCheckbox', 'visible', 'width', 'headerTemplateID', 'format', 'isTemplateColumn', 'headerTextAlign', 'isFrozen', 'textAlign', 'allowEditing', 'commands', 'showInColumnChooser', 'clipMode', 'tooltip', 'headerTooltip', 'validationRules', 'priority', 'allowFreezing'])

export class TreeGridColumn {
  @children(`${constants.elementPrefix}template`) angularTemplate = [];
  setTemplates() {
    if (this.angularTemplate[0]) {
      let util = new Util();
      this[util.getBindablePropertyName('angularTemplate')] = this.angularTemplate[0].template;
    }
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}level`)
@generateBindables('levels', ['groupBackground', 'groupBorderColor', 'groupBorderThickness', 'groupGap', 'groupPadding', 'groupPath', 'headerHeight', 'headerTemplate', 'headerVisibilityMode', 'labelPosition', 'textOverflow', 'labelTemplate', 'labelVisibilityMode', 'showHeader', 'showLabels'])

export class Level {
}


import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.treemap.min';

@customElement(`${constants.elementPrefix}tree-map`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejTreeMap', ['borderBrush', 'borderThickness', 'uniColorMapping', 'desaturationColorMapping', 'paletteColorMapping', 'colorValuePath', 'dataSource', 'dockPosition', 'drillDownHeaderColor', 'drillDownSelectionColor', 'isHierarchicalDatasource', 'header', 'enableDrillDown', 'isResponsive', 'enableResize', 'draggingOnSelection', 'draggingGroupOnSelection', 'groupColorMapping', 'legendSettings', 'highlightBorderBrush', 'highlightBorderThickness', 'highlightGroupBorderBrush', 'highlightGroupBorderThickness', 'highlightGroupOnSelection', 'highlightOnSelection', 'itemsLayoutMode', 'enableGroupSeparator', 'locale', 'leafItemSettings', 'rangeColorMapping', 'selectionMode', 'groupSelectionMode', 'showLegend', 'enableGradient', 'showTooltip', 'tooltipTemplate', 'treeMapItems', 'levels', 'weightValuePath'], ['dataSource', 'weightValuePath'])
@inject(Element)
export class ejTreeMap extends WidgetBase {
  @children(`${constants.elementPrefix}level`) levels = [];
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'levels';
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.treeview.min';

@customAttribute(`${constants.attributePrefix}tree-view`)
@generateBindables('ejTreeView', ['allowDragAndDrop', 'allowDragAndDropAcrossControl', 'allowDropSibling', 'allowDropChild', 'allowEditing', 'allowKeyboardNavigation', 'allowMultiSelection', 'autoCheck', 'autoCheckParentNode', 'checkedNodes', 'cssClass', 'enableAnimation', 'enabled', 'enableMultipleExpand', 'enablePersistence', 'enableRTL', 'expandedNodes', 'expandOn', 'fields', 'fullRowSelect', 'height', 'htmlAttributes', 'loadOnDemand', 'selectedNode', 'selectedNodes', 'showCheckbox', 'sortSettings', 'template', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejTreeView extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.uploadbox.min';

@customElement(`${constants.elementPrefix}uploadbox`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejUploadbox', ['allowDragAndDrop', 'asyncUpload', 'autoUpload', 'buttonText', 'cssClass', 'customFileDetails', 'dialogAction', 'dialogPosition', 'dialogText', 'dropAreaText', 'dropAreaHeight', 'dropAreaWidth', 'enabled', 'enableRTL', 'extensionsAllow', 'extensionsDeny', 'fileSize', 'height', 'htmlAttributes', 'locale', 'multipleFilesSelection', 'pushFile', 'removeUrl', 'saveUrl', 'showBrowseButton', 'showFileDetails', 'showRoundedCorner', 'uploadName', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejUploadbox extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


import 'syncfusion-javascript/Scripts/ej/web/ej.waitingpopup.min';

@customAttribute(`${constants.attributePrefix}waiting-popup`)
@generateBindables('ejWaitingPopup', ['cssClass', 'htmlAttributes', 'showImage', 'showOnInit', 'target', 'appendTo', 'template', 'text'])
@inject(Element)
export class ejWaitingPopup extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

