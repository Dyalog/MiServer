import {PLATFORM} from 'aurelia-pal';
import {customAttribute,bindable,customElement,children,TemplatingEngine,inlineView,BindableProperty,HtmlBehaviorResource,noView,processContent,TargetInstruction} from 'aurelia-templating';
import {inject,Container} from 'aurelia-dependency-injection';
import {metadata} from 'aurelia-metadata';
import {TaskQueue} from 'aurelia-task-queue';
import {bindingMode,BindingEngine} from 'aurelia-binding';

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
    .ejComboBox()
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
    this.resources.push(PLATFORM.moduleName('./grid/grid'));
    this.resources.push(PLATFORM.moduleName('./grid/column'));
    return this;
  }
  ejChart(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./chart/chart'));
    this.resources.push(PLATFORM.moduleName('./chart/series'));
    return this;
  }
  ejSunburstChart(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./sunburstchart/sunburstchart'));
    this.resources.push(PLATFORM.moduleName('./sunburstchart/sunburstlevels'));
    return this;
  }
  ejMap(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./map/map'));
    this.resources.push(PLATFORM.moduleName('./map/layer'));
    return this;
  }
  ejTreeMap(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./treemap/treemap'));
    this.resources.push(PLATFORM.moduleName('./treemap/level'));
    return this;
  }
  ejRangeNavigator(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./rangenavigator/rangenavigator'));
    this.resources.push(PLATFORM.moduleName('./rangenavigator/rangeseries'));
    return this;
  }
  ejDiagram(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./diagram/diagram'));
    return this;
  }
  ejHeatMap(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./heatmap/heatmap'));
    return this;
  }
  ejHeatMapLegend(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./heatmaplegend/heatmaplegend'));
    return this;
  }
  ejSparkline(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./sparkline/sparkline'));
    return this;
  }
  ejSymbolPalette(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./symbolpalette/symbolpalette'));
    return this;
  }
  ejOverview(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./overview/overview'));
    return this;
  }
  ejPager(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pager/pager'));
    return this;
  }
  ejBulletGraph(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./bulletgraph/bulletgraph'));
    this.resources.push(PLATFORM.moduleName('./bulletgraph/qualitativerange'));
    return this;
  }
  ejCircularGauge(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./circulargauge/circulargauge'));
    return this;
  }
  ejLinearGauge(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./lineargauge/lineargauge'));
    return this;
  }
  ejDigitalGauge(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./digitalgauge/digitalgauge'));
    return this;
  }
  ejSplitter(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./splitter/splitter'));
    return this;
  }
  ejDatePicker(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./datepicker/datepicker'));
    return this;
  }
  ejGantt(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./gantt/gantt'));
    return this;
  }
  ejTreeGrid(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./treegrid/treegrid'));
    this.resources.push(PLATFORM.moduleName('./treegrid/treegridcolumn'));
    return this;
  }
  ejColorPicker(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./colorpicker/colorpicker'));
    return this;
  }
  ejDialog(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./dialog/dialog'));
    return this;
  }
  ejScroller(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./scroller/scroller'));
    return this;
  }
  ejBarcode(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./barcode/barcode'));
    return this;
  }
  ejPdfViewer(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pdfviewer/pdfviewer'));
    return this;
  }
  ejNumericTextbox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./numerictextbox/numerictextbox'));
    return this;
  }
  ejCurrencyTextbox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./currencytextbox/currencytextbox'));
    return this;
  }
  ejPercentageTextbox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./percentagetextbox/percentagetextbox'));
    return this;
  }
  ejTimePicker(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./timepicker/timepicker'));
    return this;
  }
  ejToolbar(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./toolbar/toolbar'));
    return this;
  }
  ejMenu(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./menu/menu'));
    return this;
  }
  ejMaskEdit(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./maskedit/maskedit'));
    return this;
  }
  ejTreeView(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./treeview/treeview'));
    return this;
  }
  ejKanban(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./kanban/kanban'));
    this.resources.push(PLATFORM.moduleName('./kanban/kanbancolumn'));
    return this;
  }
  ejRibbon(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./ribbon/ribbon'));
    return this;
  }
  ejSpreadsheet(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./spreadsheet/spreadsheet'));
    this.resources.push(PLATFORM.moduleName('./spreadsheet/sheet'));
    return this;
  }
  ejRating(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./rating/rating'));
    return this;
  }
  ejListBox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./listbox/listbox'));
    return this;
  }
  ejListView(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./listview/listview'));
    return this;
  }
  ejNavigationDrawer(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./navigationdrawer/navigationdrawer'));
    return this;
  }
  ejRotator(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./rotator/rotator'));
    return this;
  }
  ejRTE(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./rte/rte'));
    return this;
  }
  ejDropDownList(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./dropdownlist/dropdownlist'));
    return this;
  }
  ejComboBox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./combobox/combobox'));
    return this;
  }
  ejAutocomplete(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./autocomplete/autocomplete'));
    return this;
  }
  ejRadialMenu(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./radialmenu/radialmenu'));
    this.resources.push(PLATFORM.moduleName('./radialmenu/item'));
    return this;
  }
  ejRadialSlider(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./radialslider/radialslider'));
    return this;
  }
  ejTile(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./tile/tile'));
    return this;
  }
  ejAccordion(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./accordion/accordion'));
    return this;
  }
  ejTab(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./tab/tab'));
    return this;
  }
  ejCheckBox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./checkbox/checkbox'));
    return this;
  }
  ejRadioButton(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./radiobutton/radiobutton'));
    return this;
  }
  ejToggleButton(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./togglebutton/togglebutton'));
    return this;
  }
  ejSplitButton(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./splitbutton/splitbutton'));
    return this;
  }
  ejGroupButton(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./groupbutton/groupbutton'));
    return this;
  }
  ejDateTimePicker(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./datetimepicker/datetimepicker'));
    return this;
  }
  ejDateRangePicker(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./daterangepicker/daterangepicker'));
    return this;
  }
  ejProgressBar(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./progressbar/progressbar'));
    return this;
  }
  ejTagCloud(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./tagcloud/tagcloud'));
    return this;
  }
  ejButton(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./button/button'));
    return this;
  }
  ejSlider(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./slider/slider'));
    return this;
  }
  ejFileExplorer(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./fileexplorer/fileexplorer'));
    return this;
  }
  ejPivotGrid(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pivotgrid/pivotgrid'));
    return this;
  }
  ejPivotChart(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pivotchart/pivotchart'));
    return this;
  }
  ejPivotGauge(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pivotgauge/pivotgauge'));
    return this;
  }
  ejPivotSchemaDesigner(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pivotschemadesigner/pivotschemadesigner'));
    return this;
  }
  ejPivotTreeMap(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./pivottreemap/pivottreemap'));
    return this;
  }
  ejWaitingPopup(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./waitingpopup/waitingpopup'));
    return this;
  }
  ejReportViewer(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./reportviewer/reportviewer'));
    return this;
  }
  ejSchedule(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./schedule/schedule'));
    this.resources.push(PLATFORM.moduleName('./schedule/scheduleresource'));
    return this;
  }
  ejUploadbox(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./uploadbox/uploadbox'));
    return this;
  }
  ejSignature(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./signature/signature'));
    return this;
  }
  ejTooltip(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./tooltip/tooltip'));
    return this;
  }
  ejSpellCheck(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./spellcheck/spellcheck'));
    return this;
  }
  ejTemplate(): EjConfigBuilder {
    this.resources.push(PLATFORM.moduleName('./common/template'));
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

@customElement(`${constants.elementPrefix}accordion`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejAccordion', ['ajaxSettings', 'allowKeyboardNavigation', 'collapseSpeed', 'collapsible', 'cssClass', 'customIcon', 'disabledItems', 'enableAnimation', 'enabled', 'enabledItems', 'enableMultipleOpen', 'enablePersistence', 'enableRTL', 'events', 'expandSpeed', 'headerSize', 'height', 'heightAdjustMode', 'htmlAttributes', 'selectedItemIndex', 'selectedItems', 'showCloseButton', 'showRoundedCorner', 'width'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejAccordion extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}autocomplete`)
    @generateBindables('ejAutocomplete', ['addNewText', 'allowAddNew', 'allowSorting', 'animateType', 'autoFocus', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delaySuggestionTimeout', 'delimiterChar', 'emptyResultText', 'enableAutoFill', 'enabled', 'enableDistinct', 'enablePersistence', 'enableRTL', 'fields', 'filterType', 'height', 'highlightSearch', 'itemsCount', 'ignoreAccent', 'locale', 'minCharacter', 'multiColumnSettings', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectValueByKey', 'showEmptyResultText', 'showLoadingIcon', 'showPopupButton', 'showRoundedCorner', 'showResetIcon', 'sortOrder', 'template', 'validationMessage', 'validationRules', 'value', 'visible', 'watermarkText', 'width'], ['value', 'selectValueByKey'], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejAutocomplete extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


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


@customAttribute(`${constants.attributePrefix}button`)
@generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text', 'timeInterval', 'type', 'width'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}chart`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejChart', ['annotations', 'background', 'backGroundImageUrl', 'border', 'exportSettings', 'chartArea', 'columnDefinitions', 'commonSeriesOptions', 'selectedDataPointIndexes', 'crosshair', 'depth', 'enable3D', 'enableCanvasRendering', 'initSeriesRender', 'enableRotation', 'indicators', 'isResponsive', 'legend', 'locale', 'palette', 'margin', 'perspectiveAngle', 'primaryXAxis', 'axes', 'primaryYAxis', 'rotation', 'rowDefinitions', 'series', 'sideBySideSeriesPlacement', 'size', 'theme', 'tilt', 'title', 'wallSize', 'zooming'])
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

@generateBindables('series', ['bearFillColor', 'border', 'border', 'border', 'border', 'animationDuration', 'bullFillColor', 'columnFacet', 'columnWidth', 'columnSpacing', 'stackingGroup', 'dashArray', 'dataSource', 'cardinalSplineTension', 'doughnutCoefficient', 'doughnutSize', 'drawType', 'enableAnimation', 'enableSmartLabels', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'fill', 'font', 'font', 'font', 'font', 'font', 'font', 'font', 'funnelHeight', 'funnelWidth', 'gapRatio', 'isClosed', 'isStacking', 'isTransposed', 'showMedian', 'labelPosition', 'splitMode', 'boxPlotMode', 'bubbleOptions', 'bubbleOptions', 'bubbleOptions', 'bubbleOptions', 'splineType', 'lineCap', 'lineJoin', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'marker', 'name', 'opacity', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'outlierSettings', 'palette', 'pieCoefficient', 'pieOfPieCoefficient', 'splitValue', 'gapWidth', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'emptyPointSettings', 'positiveFill', 'connectorLine', 'connectorLine', 'connectorLine', 'connectorLine', 'connectorLine', 'dragSettings', 'dragSettings', 'dragSettings', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'errorBar', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'points', 'pyramidMode', 'query', 'startAngle', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'cornerRadius', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'tooltip', 'type', 'visibility', 'visibleOnLegend', 'xAxisName', 'xName', 'yAxisName', 'yName', 'high', 'low', 'open', 'close', 'pointColorMappingName', 'zOrder', 'size', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'trendlines', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'highlightSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings', 'selectionSettings'])

export class Series {
}


@customAttribute(`${constants.attributePrefix}check-box`)
    @generateBindables('ejCheckBox', ['checked', 'checkState', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage', 'validationRules', 'value'], ['checked', 'checkState'], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejCheckBox extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}circular-gauge`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejCircularGauge', ['animationSpeed', 'backgroundColor', 'distanceFromCorner', 'rangeZOrder', 'enableAnimation', 'enableGroupSeparator', 'enableResize', 'exportSettings', 'frame', 'gaugePosition', 'height', 'interiorGradient', 'isRadialGradient', 'isResponsive', 'locale', 'maximum', 'minimum', 'outerCustomLabelPosition', 'radius', 'readOnly', 'scales', 'theme', 'legend', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])
@inject(Element)
export class ejCircularGauge extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}color-picker`)
@generateBindables('ejColorPicker', ['buttonText', 'buttonMode', 'columns', 'cssClass', 'custom', 'displayInline', 'enabled', 'enableOpacity', 'htmlAttributes', 'locale', 'modelType', 'opacityValue', 'palette', 'presetType', 'showApplyCancel', 'showClearButton', 'showPreview', 'showRecentColors', 'showSwitcher', 'showTooltip', 'toolIcon', 'tooltipText', 'value'], ['value', 'opacityValue'])
@inject(Element)
export class ejColorPicker extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}combo-box`)
@generateBindables('ejComboBox', ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enableRtl', 'enabled', 'fields', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'width'], ['value'])
@inject(Element)
export class ejComboBox extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
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

export function generateBindables(controlName, inputs, twoWayProperties, abbrevProperties, observerCollection) {
  return function(target, key, descriptor) {
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let container = (Container.instance || new Container());
    let util = container.get(Util);
    let bindingInstance = container.get(BindingEngine);
    inputs.push('options');
    inputs.push('widget');
    let len = inputs.length;
    if (observerCollection) {
      target.prototype.arrayObserver = [];
      observerCollection.forEach((element) => {
        target.prototype.arrayObserver.push(util.getBindablePropertyName(element));
      });
      target.prototype.bindingInstance = bindingInstance;
    }
    target.prototype.controlName = controlName;
    target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
    target.prototype.abbrevProperties = abbrevProperties ? abbrevProperties : [];
    if (len) {
      target.prototype.controlProperties = inputs;
      for (let i = 0; i < len; i++) {
        let option = inputs[i];
        if (abbrevProperties && option in abbrevProperties) {
          option = abbrevProperties[option];
          option.forEach((prop) => {
            registerProp(util, prop, target, behaviorResource, descriptor);
          });
        } else {
          registerProp(util, option, target, behaviorResource, descriptor);
        }
      }
    }
  };
}

function registerProp(util, option, target, behaviorResource, descriptor) {
  let nameOrConfigOrTarget = {
    name: util.getBindablePropertyName(option)
  };

  if (option === 'widget') {
    nameOrConfigOrTarget.defaultBindingMode = bindingMode.twoWay;
  }

  let prop = new BindableProperty(nameOrConfigOrTarget);
  prop.registerWith(target, behaviorResource, descriptor);
}

export function delayed() {
  return function(target, key, descriptor) {
    let taskQueue = (Container.instance || new Container()).get(TaskQueue);
    let ptr = descriptor.value;

    descriptor.value = function(...args) {
      if (this.childPropertyName) {
        taskQueue.queueTask(() => ptr.apply(this, args));
      } else {
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
        model.abbrevProperties[prop].some(property => {
          value = model[this.getBindablePropertyName(property)];
          return this.hasValue(value);
        });
      } else {
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
      if (options.abbrevProperties && prop in options.abbrevProperties && options.abbrevProperties.hasOwnProperty(prop)) {
        options.abbrevProperties[prop].some(props => {
          property = propertyName === this.getBindablePropertyName(props) ? prop : undefined;
          return property;
        });
        if (property) break;
      } else if (propertyName === this.getBindablePropertyName(prop)) {
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
    if (this.widget && this.widget.element && this.isEditor) {
      this.widget.option('value', (this.eValue === undefined ? null : this.eValue));
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

  unsubscribe() {
    if (this.subscription) {
      this.subscription.dispose();
      this.subscription = null;
    }
  }

  unbind() {
    this.unsubscribe();
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
      this.unsubscribe();
      if (this.arrayObserver) {
        this.arrayObserver.forEach((arrayProp) => {
          if (this[arrayProp] instanceof Array) {
            this.subscription = this.bindingInstance.collectionObserver(this[arrayProp]).subscribe((e) => {
              this.update(e);
            });
          }
        });
      }
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

  update(e) {
    let modelValue;
    let newVal;
    if (e.length) {
      this.arrayObserver.forEach((arrayProp) => {
        if (this[arrayProp] instanceof Array) {
          let prop = this.util.getControlPropertyName(this, arrayProp);
          modelValue = this.widget.model[prop];
          if (typeof modelValue === 'function') {
            modelValue = modelValue();
            newVal = modelValue;
            newVal = this.addTwoways(prop);
            this.widget.option(prop, newVal);
          } else {
            this.widget.option(prop, modelValue);
          }
        }
      });
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

@customAttribute(`${constants.attributePrefix}currency-textbox`)
    @generateBindables('ejCurrencyTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejCurrencyTextbox extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}date-picker`)
    @generateBindables('ejDatePicker', ['allowEdit', 'allowDrillDown', 'blackoutDates', 'buttonText', 'cssClass', 'dateFormat', 'dayHeaderFormat', 'depthLevel', 'displayInline', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'fields', 'headerFormat', 'height', 'highlightSection', 'highlightWeekend', 'htmlAttributes', 'locale', 'maxDate', 'minDate', 'readOnly', 'showDisabledRange', 'showFooter', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'showTooltip', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'tooltipFormat', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'weekNumber', 'width'], ['value'], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejDatePicker extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}date-range-picker`)
@generateBindables('ejDateRangePicker', ['allowEdit', 'buttonText', 'cssClass', 'dateFormat', 'enableTimePicker', 'enabled', 'enablePersistence', 'endDate', 'height', 'locale', 'maxDate', 'minDate', 'ranges', 'separator', 'startDate', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'value', 'watermarkText', 'width'], ['value'])
@inject(Element)
export class ejDateRangePicker extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}date-time-picker`)
    @generateBindables('ejDateTimePicker', ['allowEdit', 'buttonText', 'blackoutDates', 'cssClass', 'dateTimeFormat', 'dayHeaderFormat', 'depthLevel', 'disableTimeRanges', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'headerFormat', 'height', 'htmlAttributes', 'interval', 'locale', 'maxDateTime', 'minDateTime', 'popupPosition', 'readOnly', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'timeDisplayFormat', 'timeDrillDown', 'timePopupWidth', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejDateTimePicker extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}diagram`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejDiagram', ['backgroundColor', 'backgroundImage', 'bridgeDirection', 'commandManager', 'connectors', 'connectorTemplate', 'constraints', 'contextMenu', 'dataSourceSettings', 'defaultSettings', 'drawType', 'enableAutoScroll', 'enableContextMenu', 'height', 'historyManager', 'labelRenderingMode', 'layout', 'locale', 'nodes', 'layers', 'nodeTemplate', 'pageSettings', 'scrollSettings', 'selectedItems', 'showTooltip', 'serializationSettings', 'rulerSettings', 'snapSettings', 'tool', 'tooltip', 'width', 'zoomFactor'])
@inject(Element)
export class ejDiagram extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}dialog`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejDialog', ['actionButtons', 'ajaxSettings', 'allowDraggable', 'allowKeyboardNavigation', 'animation', 'backgroundScroll', 'closeOnEscape', 'containment', 'contentType', 'contentUrl', 'cssClass', 'enableAnimation', 'enabled', 'enableModal', 'enablePersistence', 'enableResize', 'enableRTL', 'faviconCSS', 'height', 'htmlAttributes', 'isResponsive', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'position', 'showHeader', 'showOnInit', 'showRoundedCorner', 'target', 'title', 'tooltip', 'width', 'zIndex', 'showFooter', 'footerTemplateId'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejDialog extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}digital-gauge`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejDigitalGauge', ['exportSettings', 'frame', 'height', 'isResponsive', 'enableResize', 'items', 'matrixSegmentData', 'segmentData', 'themes', 'value', 'width'], ['value'])
@inject(Element)
export class ejDigitalGauge extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}drop-down-list`)
    @generateBindables('ejDropDownList', ['allowVirtualScrolling', 'cascadeTo', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delimiterChar', 'enableAnimation', 'enabled', 'enableIncrementalSearch', 'enableFilterSearch', 'enableServerFiltering', 'enablePersistence', 'enablePopupResize', 'enableRTL', 'enableSorting', 'loadOnDemand', 'fields', 'filterType', 'headerTemplate', 'height', 'htmlAttributes', 'itemsCount', 'locale', 'maxPopupHeight', 'minPopupHeight', 'maxPopupWidth', 'minPopupWidth', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showPopupOnLoad', 'showRoundedCorner', 'sortOrder', 'targetID', 'template', 'text', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width', 'virtualScrollMode'], ['value'], {'enableRTL': ['enableRtl'], 'targetID': ['targetId']})
@inject(Element)
export class ejDropDownList extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}file-explorer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejFileExplorer', ['ajaxAction', 'ajaxDataType', 'ajaxSettings', 'allowDragAndDrop', 'allowKeyboardNavigation', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'enablePersistence', 'enableResize', 'enableRTL', 'enableThumbnailCompress', 'fileTypes', 'filterSettings', 'gridSettings', 'height', 'isResponsive', 'layout', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'path', 'rootFolderName', 'selectedFolder', 'selectedItems', 'showCheckbox', 'showContextMenu', 'showFooter', 'showRoundedCorner', 'showThumbnail', 'showToolbar', 'showNavigationPane', 'tools', 'toolsList', 'uploadSettings', 'virtualItemCount', 'width'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejFileExplorer extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}gantt`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejGantt', ['addDialogFields', 'allowColumnResize', 'allowDragAndDrop', 'allowGanttChartEditing', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowMultipleExporting', 'allowSelection', 'allowSorting', 'allowUnscheduledTask', 'baselineColor', 'baselineEndDateMapping', 'baselineStartDateMapping', 'cellTooltipTemplate', 'childMapping', 'columnDialogFields', 'connectorLineBackground', 'connectorlineWidth', 'cssClass', 'dataSource', 'dateFormat', 'dayWorkingTime', 'dragTooltip', 'durationMapping', 'durationUnit', 'durationUnitMapping', 'editDialogFields', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableContextMenu', 'enablePredecessorValidation', 'enableProgressBarResizing', 'enableResize', 'enableSerialNumber', 'enableTaskbarDragTooltip', 'enableTaskbarTooltip', 'enableVirtualization', 'enableWBS', 'enableWBSPredecessor', 'endDateMapping', 'expandStateMapping', 'filterSettings', 'groupCollection', 'groupIdMapping', 'groupNameMapping', 'highlightNonWorkingTime', 'highlightWeekends', 'holidays', 'includeWeekend', 'isResponsive', 'leftTaskLabelMapping', 'leftTaskLabelTemplate', 'locale', 'milestoneMapping', 'milestoneTemplate', 'nonWorkingBackground', 'notesMapping', 'parentProgressbarBackground', 'parentTaskIdMapping', 'parentTaskbarBackground', 'parentTaskbarTemplate', 'predecessorMapping', 'predecessorTooltipTemplate', 'progressMapping', 'progressbarBackground', 'progressbarHeight', 'progressbarTooltipTemplate', 'progressbarTooltipTemplateId', 'query', 'readOnly', 'renderBaseline', 'resourceCollectionMapping', 'resourceIdMapping', 'resourceInfoMapping', 'resourceNameMapping', 'resourceUnitMapping', 'resources', 'rightTaskLabelMapping', 'rightTaskLabelTemplate', 'roundOffDayworkingTime', 'rowHeight', 'scheduleEndDate', 'scheduleHeaderSettings', 'scheduleStartDate', 'selectedCellIndexes', 'selectedRowIndex', 'selectionType', 'selectionMode', 'showColumnChooser', 'showColumnOptions', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'showProgressStatus', 'showResourceNames', 'showTaskNames', 'sizeSettings', 'sortSettings', 'splitterPosition', 'splitterSettings', 'startDateMapping', 'stripLines', 'taskCollectionMapping', 'taskIdMapping', 'taskNameMapping', 'taskSchedulingMode', 'taskSchedulingModeMapping', 'taskType', 'taskbarBackground', 'taskbarEditingTooltipTemplate', 'taskbarEditingTooltipTemplateId', 'taskbarHeight', 'taskbarTemplate', 'taskbarTooltipTemplate', 'taskbarTooltipTemplateId', 'toolbarSettings', 'treeColumnIndex', 'validateManualTasksOnLinking', 'viewType', 'weekendBackground', 'workMapping', 'workUnit', 'workWeek', 'workingTimeScale'], ['dataSource', 'selectedRowIndex', 'selectedCellIndexes'], {}, ['dataSource'])
@inject(Element)
export class ejGantt extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}column`)

@generateBindables('columns', ['clipMode', 'allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting', 'allowResizing', 'commands', 'commands', 'commands', 'cssClass', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckbox', 'editParams', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filterBarTemplate', 'filterType', 'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'priority', 'showInColumnChooser', 'template', 'textAlign', 'tooltip', 'type', 'validationRules', 'visible', 'width'], [], {'headerTemplateID': ['headerTemplateId', 'headerTemplateID']})

export class Column {
  @children(`${constants.elementPrefix}template`) template = [];
  setTemplates() {
    if (this.template[0]) {
      let util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  }
}


@customElement(`${constants.elementPrefix}grid`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejGrid', ['allowCellMerging', 'allowGrouping', 'allowKeyboardNavigation', 'allowFiltering', 'allowSorting', 'allowMultiSorting', 'allowPaging', 'allowReordering', 'allowResizeToFit', 'allowResizing', 'allowRowDragAndDrop', 'allowScrolling', 'allowSearching', 'allowSelection', 'allowTextWrap', 'allowMultipleExporting', 'commonWidth', 'gridLines', 'childGrid', 'columnLayout', 'columns', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'editSettings', 'enableAltRow', 'enableAutoSaveOnSelectionChange', 'enableHeaderHover', 'enablePersistence', 'enableResponsiveRow', 'enableRowHover', 'enableRTL', 'enableTouch', 'enableToolbarItems', 'exportToExcelAction', 'exportToPdfAction', 'exportToWordAction', 'filterSettings', 'groupSettings', 'isResponsive', 'keySettings', 'locale', 'minWidth', 'pageSettings', 'query', 'resizeSettings', 'rowTemplate', 'rowDropSettings', 'searchSettings', 'selectedRecords', 'selectedRowIndex', 'selectedRowIndices', 'selectionSettings', 'selectionType', 'scrollSettings', 'showColumnChooser', 'showStackedHeader', 'showSummary', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'textWrapSettings', 'toolbarSettings'], ['dataSource', 'selectedRowIndices'], {'enableRTL': ['enableRtl']}, ['dataSource'])
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


@customAttribute(`${constants.attributePrefix}group-button`)
@generateBindables('ejGroupButton', ['cssClass', 'dataSource', 'enableRTL', 'enabled', 'fields', 'groupButtonMode', 'height', 'htmlAttributes', 'orientation', 'query', 'selectedItemIndex', 'showRoundedCorner', 'size', 'width'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejGroupButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


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


@customElement(`${constants.elementPrefix}kanban`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejKanban', ['allowDragAndDrop', 'allowExternalDragAndDrop', 'allowTitle', 'swimlaneSettings', 'allowToggleColumn', 'allowSearching', 'allowFiltering', 'allowSelection', 'allowHover', 'allowKeyboardNavigation', 'allowScrolling', 'allowPrinting', 'contextMenuSettings', 'columns', 'cardSettings', 'customToolbarItems', 'cssClass', 'dataSource', 'enableTouch', 'enableRTL', 'enableTotalCount', 'editSettings', 'fields', 'keyField', 'isResponsive', 'minWidth', 'filterSettings', 'query', 'keySettings', 'scrollSettings', 'searchSettings', 'selectionType', 'stackedHeaderRows', 'tooltipSettings', 'workflows', 'locale', 'showColumnWhenEmpty'], ['dataSource'], {'enableRTL': ['enableRtl']}, ['dataSource'])
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

@generateBindables('columns', ['headerText', 'totalCount', 'totalCount', 'key', 'allowDrop', 'allowDrag', 'isCollapsed', 'constraints', 'constraints', 'constraints', 'constraints', 'headerTemplate', 'width', 'visible', 'showAddButton'])

export class KanbanColumn {
}


@customElement(`${constants.elementPrefix}linear-gauge`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejLinearGauge', ['animationSpeed', 'backgroundColor', 'borderColor', 'enableAnimation', 'enableMarkerPointerAnimation', 'exportSettings', 'isResponsive', 'enableGroupSeparator', 'enableResize', 'frame', 'height', 'labelColor', 'locale', 'maximum', 'minimum', 'orientation', 'outerCustomLabelPosition', 'pointerGradient1', 'pointerGradient2', 'readOnly', 'scales', 'theme', 'tickColor', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])
@inject(Element)
export class ejLinearGauge extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}list-box`)
    @generateBindables('ejListBox', ['allowDrag', 'allowDrop', 'allowMultiSelection', 'allowVirtualScrolling', 'caseSensitiveSearch', 'cascadeTo', 'checkedIndices', 'cssClass', 'dataSource', 'enabled', 'enableIncrementalSearch', 'enablePersistence', 'enableRTL', 'enableWordWrap', 'fields', 'height', 'itemHeight', 'itemsCount', 'totalItemsCount', 'itemRequestCount', 'loadDataOnInit', 'query', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showRoundedCorner', 'sortOrder', 'template', 'value', 'virtualScrollMode', 'width', 'targetID'], ['value', 'dataSource'], {'enableRTL': ['enableRtl'], 'targetID': ['targetId']})
@inject(Element)
export class ejListBox extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}list-view`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejListView', ['ajaxSettings', 'checkedIndices', 'cssClass', 'dataSource', 'enableAjax', 'enableCache', 'enableCheckMark', 'enableFiltering', 'enableGroupList', 'enablePersistence', 'fieldSettings', 'items', 'headerBackButtonText', 'headerTitle', 'height', 'locale', 'persistSelection', 'preventSelection', 'query', 'renderTemplate', 'selectedItemIndex', 'showHeader', 'showHeaderBackButton', 'templateId', 'width', 'itemRequestCount', 'totalItemsCount', 'allowVirtualScrolling', 'virtualScrollMode'], ['dataSource', 'selectedItemIndex'], {}, ['dataSource'])
@inject(Element)
export class ejListView extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}layer`)

@generateBindables('layers', ['bingMapType', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'dataSource', 'shapeDataPath', 'shapePropertyPath', 'enableMouseHover', 'enableSelection', 'key', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'geometryType', 'layerType', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'mapItemsTemplate', 'markers', 'markerTemplate', 'selectedMapShapes', 'selectionMode', 'shapeData', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'showMapItems', 'showTooltip', 'tooltipTemplate', 'urlTemplate', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers'])

export class Layer {
}


@customElement(`${constants.elementPrefix}map`)
@inlineView(`${constants.aureliaTemplateString}`)
    @generateBindables('ejMap', ['background', 'baseMapIndex', 'centerPosition', 'draggingOnSelection', 'enableAnimation', 'enableRTL', 'enableLayerChangeAnimation', 'enablePan', 'enableResize', 'isResponsive', 'zoomSettings', 'navigationControl', 'locale', 'layers'], ['baseMapIndex', 'enablePan', 'enableResize', 'enableAnimation', 'zoomSettings.level', 'zoomSettings.minValue', 'zoomSettings.maxValue', 'zoomSettings.factor', 'zoomSettings.enableZoom', 'zoomSettings.enableZoomOnSelection', 'navigationControl.enableNavigation', 'navigationControl.orientation', 'navigationControl.absolutePosition', 'navigationControl.dockPosition'], {'enableRTL': ['enableRtl']})
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


@customAttribute(`${constants.attributePrefix}menu`)
@generateBindables('ejMenu', ['animationType', 'contextMenuTarget', 'container', 'cssClass', 'enableAnimation', 'enableCenterAlign', 'enabled', 'enableRTL', 'enableSeparator', 'excludeTarget', 'fields', 'height', 'htmlAttributes', 'isResponsive', 'menuType', 'openOnClick', 'orientation', 'showRootLevelArrows', 'showSubLevelArrows', 'subMenuDirection', 'titleText', 'width', 'overflowHeight', 'overflowWidth'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejMenu extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


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


@customAttribute(`${constants.attributePrefix}numeric-textbox`)
    @generateBindables('ejNumericTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejNumericTextbox extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}pager`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPager', ['customText', 'currentPage', 'cssClass', 'enabled', 'enableExternalMessage', 'enableQueryString', 'enableRTL', 'externalMessage', 'isResponsive', 'locale', 'pageCount', 'pageSize', 'pageSizeList', 'pageSizeMessage', 'template', 'totalPages', 'totalRecordsCount', 'showPageInfo'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejPager extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}overview`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejOverview', ['sourceID', 'height', 'width'], [], {'sourceID': ['sourceId']})
@inject(Element)
export class ejOverview extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}pdf-viewer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPdfViewer', ['locale', 'toolbarSettings', 'serverActionSettings', 'serviceUrl', 'documentPath', 'enableTextMarkupAnnotations', 'enableHighlightAnnotation', 'enableUnderlineAnnotation', 'enableStrikethroughAnnotation', 'enableSignature', 'strikethroughSettings', 'underlineSettings', 'highlightSettings', 'signatureSettings', 'textSelectionContextMenu', 'annotationContextMenu', 'annotationType', 'pageCount', 'currentPageNumber', 'zoomPercentage', 'pdfService', 'interactionMode', 'bufferingMode', 'hyperlinkOpenState', 'enableHyperlink', 'enableTextSelection', 'isResponsive', 'isDocumentEdited', 'allowClientBuffering', 'fileName'])
@inject(Element)
export class ejPdfViewer extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}percentage-textbox`)
    @generateBindables('ejPercentageTextbox', ['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejPercentageTextbox extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}pivot-chart`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotChart', ['analysisMode', 'cssClass', 'zooming', 'commonSeriesOptions', 'dataSource', 'customObject', 'enable3D', 'enableRTL', 'enableMultiLevelLabels', 'isResponsive', 'legend', 'locale', 'operationalMode', 'axes', 'primaryXAxis', 'primaryYAxis', 'rotation', 'enableContextMenu', 'serviceMethodSettings', 'size', 'title', 'url', 'enableXHRCredentials'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejPivotChart extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}pivot-gauge`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotGauge', ['columnsCount', 'cssClass', 'customObject', 'dataSource', 'enableAnimation', 'enableTooltip', 'enableRTL', 'frame', 'isResponsive', 'labelFormatSettings', 'locale', 'rowsCount', 'scales', 'serviceMethodSettings', 'showHeaderLabel', 'url', 'analysisMode', 'operationalMode', 'enableXHRCredentials'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejPivotGauge extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}pivot-grid`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotGrid', ['analysisMode', 'cssClass', 'pivotTableFieldListID', 'dataSource', 'valueSortSettings', 'frozenHeaderSettings', 'headerSettings', 'showUniqueNameOnPivotButton', 'customObject', 'collapsedMembers', 'enableCellContext', 'enableCellSelection', 'enableDrillThrough', 'enableCellClick', 'enableCellDoubleClick', 'enableCellEditing', 'enableCollapseByDefault', 'enableColumnGrandTotal', 'enableConditionalFormatting', 'enableAdvancedFilter', 'enableDeferUpdate', 'enableGroupingBar', 'maxNodeLimitInMemberEditor', 'enableMemberEditorPaging', 'memberEditorPageSize', 'enableMemberEditorSorting', 'enableGrandTotal', 'enableJSONRendering', 'enablePivotFieldList', 'enableRowGrandTotal', 'enableRTL', 'enableToolTip', 'enableToolTipAnimation', 'enableColumnResizing', 'resizeColumnsToFit', 'enableContextMenu', 'enableVirtualScrolling', 'enablePaging', 'hyperlinkSettings', 'isResponsive', 'jsonRecords', 'layout', 'locale', 'operationalMode', 'serviceMethodSettings', 'url', 'enableCompleteDataExport', 'enableXHRCredentials'], [], {'pivotTableFieldListID': ['pivotTableFieldListId'], 'enableRTL': ['enableRtl']})
@inject(Element)
export class ejPivotGrid extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}pivot-schema-designer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotSchemaDesigner', ['cssClass', 'customObject', 'enableWrapper', 'enableRTL', 'olap', 'enableDragDrop', 'height', 'locale', 'pivotControl', 'serviceMethods', 'url', 'width', 'layout'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejPivotSchemaDesigner extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}pivot-tree-map`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotTreeMap', ['cssClass', 'dataSource', 'customObject', 'isResponsive', 'locale', 'operationalMode', 'serviceMethodSettings', 'url', 'enableXHRCredentials'])
@inject(Element)
export class ejPivotTreeMap extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}progress-bar`)
@generateBindables('ejProgressBar', ['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'maxValue', 'minValue', 'percentage', 'showRoundedCorner', 'text', 'value', 'width'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejProgressBar extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}item`)

@generateBindables('items', ['imageUrl', 'prependTo', 'text', 'enabled', 'click', 'badge', 'badge', 'badge', 'type', 'sliderSettings', 'sliderSettings', 'sliderSettings', 'sliderSettings', 'items'])

export class Item {
  @children(`${constants.elementPrefix}template`) template = [];
  setTemplates() {
    if (this.template[0]) {
      let util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  }
}


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


@customElement(`${constants.elementPrefix}range-navigator`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejRangeNavigator', ['allowSnapping', 'allowNextValue', 'border', 'dataSource', 'series', 'seriesSettings', 'enableDeferredUpdate', 'enableScrollbar', 'enableAutoResizing', 'enableRTL', 'isResponsive', 'labelSettings', 'locale', 'navigatorStyleSettings', 'padding', 'rangePadding', 'rangeSettings', 'selectedData', 'selectedRangeSettings', 'scrollRangeSettings', 'sizeSettings', 'theme', 'tooltipSettings', 'valueAxisSettings', 'valueType', 'xName', 'yName'], [], {'enableRTL': ['enableRtl']})
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


@customAttribute(`${constants.attributePrefix}radio-button`)
@generateBindables('ejRadioButton', ['checked', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'htmlAttributes', 'id', 'idPrefix', 'name', 'size', 'text', 'validationMessage', 'validationRules', 'value'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejRadioButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}rating`)
@generateBindables('ejRating', ['allowReset', 'cssClass', 'enabled', 'enablePersistence', 'height', 'htmlAttributes', 'incrementStep', 'maxValue', 'minValue', 'orientation', 'precision', 'readOnly', 'shapeHeight', 'shapeWidth', 'showTooltip', 'value', 'width'], ['value'])
@inject(Element)
export class ejRating extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}report-viewer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejReportViewer', ['dataSources', 'enablePageCache', 'exportSettings', 'isResponsive', 'locale', 'pageSettings', 'parameters', 'parameterSettings', 'printMode', 'printOption', 'processingMode', 'renderMode', 'reportPath', 'reportServerUrl', 'reportServiceUrl', 'toolbarSettings', 'zoomFactor', 'serviceAuthorizationToken', 'enableParameterBlockScroller', 'enableDatasourceBlockScroller', 'sizeToReportContent', 'autoRender', 'enableNotificationBar', 'enableDropDownSearch', 'enablePageVirtualization', 'showExceptionsInDialog'])
@inject(Element)
export class ejReportViewer extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}ribbon`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejRibbon', ['allowResizing', 'isResponsive', 'buttonDefaults', 'showQAT', 'cssClass', 'collapsePinSettings', 'enableOnDemand', 'collapsible', 'enableRTL', 'expandPinSettings', 'applicationTab', 'contextualTabs', 'disabledItemIndex', 'enabledItemIndex', 'selectedItemIndex', 'tabs', 'locale', 'width'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejRibbon extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}rotator`)
@generateBindables('ejRotator', ['allowKeyboardNavigation', 'animationSpeed', 'animationType', 'circularMode', 'cssClass', 'dataSource', 'delay', 'displayItemsCount', 'enableAutoPlay', 'enabled', 'enableRTL', 'fields', 'frameSpace', 'isResponsive', 'navigateSteps', 'orientation', 'pagerPosition', 'query', 'showCaption', 'showNavigateButton', 'showPager', 'showPlayButton', 'showThumbnail', 'slideHeight', 'slideWidth', 'startIndex', 'stopOnHover', 'template', 'templateId', 'thumbnailSourceID'], [], {'enableRTL': ['enableRtl'], 'thumbnailSourceID': ['thumbnailSourceId']})
@inject(Element)
export class ejRotator extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}rte`)
    @generateBindables('ejRTE', ['allowEditing', 'allowKeyboardNavigation', 'autoFocus', 'autoHeight', 'pasteCleanupSettings', 'colorCode', 'colorPaletteColumns', 'colorPaletteRows', 'cssClass', 'enabled', 'enableHtmlEncode', 'enablePersistence', 'enableResize', 'enableRTL', 'enableXHTML', 'enableTabKeyNavigation', 'exportToPdfSettings', 'exportToWordSettings', 'externalCSS', 'fileBrowser', 'fontName', 'fontSize', 'format', 'height', 'htmlAttributes', 'iframeAttributes', 'imageBrowser', 'importSettings', 'isResponsive', 'locale', 'maxHeight', 'maxLength', 'maxWidth', 'minHeight', 'minWidth', 'name', 'showClearAll', 'showClearFormat', 'showCustomTable', 'showContextMenu', 'showDimensions', 'showFontOption', 'showFooter', 'showHtmlSource', 'showHtmlTagInfo', 'showToolbar', 'showCharCount', 'showRoundedCorner', 'showWordCount', 'tableColumns', 'tableRows', 'tools', 'toolsList', 'toolbarOverflowMode', 'tooltipSettings', 'undoStackLimit', 'value', 'validationRules', 'validationMessage', 'width', 'zoomStep'], ['value'], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejRte extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}schedule`)
@inlineView(`${constants.aureliaTemplateString}`)
    @generateBindables('ejSchedule', ['allowDragAndDrop', 'allowInline', 'allowDelete', 'allowKeyboardNavigation', 'appointmentSettings', 'appointmentTemplateId', 'cssClass', 'categorizeSettings', 'cellHeight', 'cellWidth', 'contextMenuSettings', 'currentDate', 'currentView', 'dateFormat', 'showAppointmentNavigator', 'enableAppointmentResize', 'enableLoadOnDemand', 'enablePersistence', 'enableRTL', 'endHour', 'group', 'height', 'workHours', 'isDST', 'isResponsive', 'locale', 'maxDate', 'minDate', 'orientation', 'prioritySettings', 'readOnly', 'reminderSettings', 'renderDates', 'resourceHeaderTemplateId', 'resources', 'showAllDayRow', 'showWeekend', 'showCurrentTimeIndicator', 'showHeaderBar', 'showLocationField', 'showTimeZoneFields', 'showQuickWindow', 'startHour', 'timeMode', 'timeZone', 'timeZoneCollection', 'views', 'width', 'enableRecurrenceValidation', 'agendaViewSettings', 'firstDayOfWeek', 'workWeek', 'tooltipSettings', 'timeScale', 'showDeleteConfirmationDialog', 'allDayCellsTemplateId', 'workCellsTemplateId', 'dateHeaderTemplateId', 'showOverflowButton', 'appointmentDragArea', 'showNextPrevMonth', 'blockoutSettings'], ['currentView', 'currentDate'], {'enableRTL': ['enableRtl']})
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

@generateBindables('resources', ['field', 'title', 'name', 'allowMultiple', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings', 'resourceSettings'])

export class ScheduleResource {
}


@customAttribute(`${constants.attributePrefix}scroller`)
    @generateBindables('ejScroller', ['animationSpeed', 'autoHide', 'buttonSize', 'enabled', 'enablePersistence', 'enableRTL', 'enableTouchScroll', 'height', 'scrollerSize', 'scrollLeft', 'scrollOneStepBy', 'scrollTop', 'targetPane', 'width'], ['scrollLeft', 'scrollTop'], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejScroller extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


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


@customAttribute(`${constants.attributePrefix}slider`)
    @generateBindables('ejSlider', ['allowMouseWheel', 'animationSpeed', 'cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'incrementStep', 'largeStep', 'maxValue', 'minValue', 'orientation', 'readOnly', 'showButtons', 'showRoundedCorner', 'showScale', 'showSmallTicks', 'showTooltip', 'sliderType', 'smallStep', 'value', 'values', 'width'], ['value'], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejSlider extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


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


@customElement(`${constants.elementPrefix}spell-check`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSpellCheck', ['dictionarySettings', 'misspellWordCss', 'locale', 'maxSuggestionCount', 'ignoreWords', 'contextMenuSettings', 'ignoreSettings', 'isResponsive', 'enableValidateOnType', 'controlsToValidate', 'enableAsync', 'ajaxRequestType', 'ajaxDataType'])
@inject(Element)
export class ejSpellCheck extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}split-button`)
@generateBindables('ejSplitButton', ['arrowPosition', 'buttonMode', 'contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'showRoundedCorner', 'size', 'suffixIcon', 'targetID', 'target', 'text', 'width'], [], {'enableRTL': ['enableRtl'], 'targetID': ['targetId']})
@inject(Element)
export class ejSplitButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}splitter`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSplitter', ['allowKeyboardNavigation', 'animationSpeed', 'cssClass', 'enableAnimation', 'enableRTL', 'expanderTemplate', 'height', 'htmlAttributes', 'isResponsive', 'orientation', 'properties', 'width'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejSplitter extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}sheet`)

@generateBindables('sheets', ['border', 'border', 'border', 'border', 'cellTypes', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'frozenRows', 'frozenColumns', 'headerStyles', 'hideColumns', 'hideRows', 'mergeCells', 'primaryKey', 'query', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rowCount', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'showGridlines', 'showHeader', 'showHeadings', 'sheetName', 'startCell'])

export class Sheet {
}


@customElement(`${constants.elementPrefix}spreadsheet`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSpreadsheet', ['activeSheetIndex', 'allowAutoCellType', 'allowAutoFill', 'allowAutoSum', 'allowCellFormatting', 'allowCellType', 'allowCharts', 'allowClear', 'allowClipboard', 'allowComments', 'allowConditionalFormats', 'allowDataValidation', 'allowDelete', 'allowDragAndDrop', 'allowEditing', 'allowFiltering', 'allowFormatAsTable', 'allowFormatPainter', 'allowFormulaBar', 'allowFreezing', 'allowHyperlink', 'allowImport', 'allowInsert', 'allowKeyboardNavigation', 'allowLockCell', 'allowMerging', 'allowOverflow', 'allowResizing', 'allowSearching', 'allowSelection', 'allowSorting', 'allowSparkline', 'allowUndoRedo', 'allowWrap', 'apWidth', 'autoFillSettings', 'chartSettings', 'columnCount', 'columnWidth', 'cssClass', 'customFormulas', 'enableContextMenu', 'enablePivotTable', 'enableTouch', 'exportSettings', 'formatSettings', 'importSettings', 'isImport', 'isReadOnly', 'locale', 'nameManager', 'pictureSettings', 'printSettings', 'ribbonSettings', 'rowCount', 'rowHeight', 'scrollSettings', 'selectionSettings', 'sheetCount', 'sheets', 'showPager', 'showRibbon', 'undoRedoStep', 'userName'])
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


@customElement(`${constants.elementPrefix}tab`)
@inlineView(`${constants.aureliaTemplateString}`)
    @generateBindables('ejTab', ['ajaxSettings', 'allowKeyboardNavigation', 'collapsible', 'cssClass', 'disabledItemIndex', 'enableAnimation', 'enabled', 'enabledItemIndex', 'enablePersistence', 'enableRTL', 'enableTabScroll', 'events', 'headerPosition', 'headerSize', 'height', 'heightAdjustMode', 'hiddenItemIndex', 'htmlAttributes', 'idPrefix', 'selectedItemIndex', 'showCloseButton', 'showReloadIcon', 'showRoundedCorner', 'width'], ['selectedItemIndex'], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejTab extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}tag-cloud`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejTagCloud', ['cssClass', 'dataSource', 'enableRTL', 'fields', 'htmlAttributes', 'format', 'maxFontSize', 'minFontSize', 'query', 'showTitle', 'titleImage', 'titleText'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejTagCloud extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


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


@customAttribute(`${constants.attributePrefix}toggle-button`)
@generateBindables('ejToggleButton', ['activePrefixIcon', 'activeSuffixIcon', 'activeText', 'contentType', 'cssClass', 'defaultPrefixIcon', 'defaultSuffixIcon', 'defaultText', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'preventToggle', 'showRoundedCorner', 'size', 'toggleState', 'type', 'width'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejToggleButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}time-picker`)
    @generateBindables('ejTimePicker', ['cssClass', 'disableTimeRanges', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'height', 'hourInterval', 'htmlAttributes', 'interval', 'locale', 'maxTime', 'minTime', 'minutesInterval', 'popupHeight', 'popupWidth', 'readOnly', 'secondsInterval', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'validationMessages', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejTimePicker extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}toolbar`)
@generateBindables('ejToolbar', ['cssClass', 'dataSource', 'disabledItemIndices', 'enabled', 'enabledItemIndices', 'enableRTL', 'enableSeparator', 'fields', 'height', 'htmlAttributes', 'hide', 'isResponsive', 'Items', 'orientation', 'query', 'responsiveType', 'showRoundedCorner', 'width'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejToolbar extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}tree-grid`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejTreeGrid', ['allowColumnReordering', 'allowColumnResize', 'allowDragAndDrop', 'allowFiltering', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowPaging', 'allowSearching', 'allowSelection', 'allowSorting', 'allowTextWrap', 'altRowTemplateID', 'cellTooltipTemplate', 'childMapping', 'collapsibleTotalSummary', 'columnDialogFields', 'columnResizeSettings', 'columns', 'commonWidth', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'detailsRowHeight', 'dragTooltip', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableLoadOnDemand', 'enableResize', 'enableVirtualization', 'expandStateMapping', 'filterSettings', 'headerTextOverflow', 'idMapping', 'isResponsive', 'locale', 'pageSettings', 'parentIdMapping', 'parseRowTemplate', 'query', 'rowHeight', 'rowTemplateID', 'searchSettings', 'selectedCellIndexes', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnOptions', 'showDetailsRow', 'showDetailsRowInfoColumn', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'showStackedHeader', 'showSummaryRow', 'showTotalSummary', 'sizeSettings', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'toolbarSettings', 'totalSummaryHeight', 'treeColumnIndex'], ['dataSource', 'selectedRowIndex', 'selectedCellIndexes', 'pageSettings.currentPage'], {'altRowTemplateID': ['altRowTemplateId'], 'rowTemplateID': ['rowTemplateId']}, ['dataSource'])
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

@generateBindables('columns', ['allowCellSelection', 'allowEditing', 'allowFiltering', 'allowFilteringBlankContent', 'allowFreezing', 'allowSorting', 'angularTemplate', 'clipMode', 'commands', 'commands', 'commands', 'displayAsCheckbox', 'dropdownData', 'editParams', 'editTemplate', 'editType', 'field', 'filterEditType', 'filterType', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isTemplateColumn', 'priority', 'showCheckbox', 'showInColumnChooser', 'template', 'templateID', 'textAlign', 'tooltip', 'validationRules', 'visible', 'width'], [], {'headerTemplateID': ['headerTemplateId', 'headerTemplateID'], 'templateID': ['templateId', 'templateID']})

export class TreeGridColumn {
  @children(`${constants.elementPrefix}template`) angularTemplate = [];
  setTemplates() {
    if (this.angularTemplate[0]) {
      let util = new Util();
      this[util.getBindablePropertyName('angularTemplate')] = this.angularTemplate[0].template;
    }
  }
}


@customAttribute(`${constants.attributePrefix}tooltip`)
@generateBindables('ejTooltip', ['allowKeyboardNavigation', 'animation', 'associate', 'autoCloseTimeout', 'closeMode', 'collision', 'containment', 'content', 'cssClass', 'enabled', 'enableRTL', 'height', 'isBalloon', 'position', 'showRoundedCorner', 'showShadow', 'target', 'tip', 'title', 'trigger', 'width'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejTooltip extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}level`)

@generateBindables('levels', ['groupBackground', 'groupBorderColor', 'groupBorderThickness', 'groupGap', 'groupPadding', 'groupPath', 'headerHeight', 'headerTemplate', 'headerVisibilityMode', 'labelPosition', 'textOverflow', 'labelTemplate', 'labelVisibilityMode', 'showHeader', 'showLabels'])

export class Level {
}


@customElement(`${constants.elementPrefix}tree-map`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejTreeMap', ['borderBrush', 'borderThickness', 'uniColorMapping', 'desaturationColorMapping', 'paletteColorMapping', 'colorValuePath', 'colorPath', 'dataSource', 'dockPosition', 'drillDownHeaderColor', 'drillDownSelectionColor', 'isHierarchicalDatasource', 'header', 'enableDrillDown', 'drillDownValue', 'drillDownLevel', 'isResponsive', 'enableResize', 'draggingOnSelection', 'draggingGroupOnSelection', 'groupColorMapping', 'legendSettings', 'highlightBorderBrush', 'highlightBorderThickness', 'highlightGroupBorderBrush', 'highlightGroupBorderThickness', 'highlightGroupOnSelection', 'highlightOnSelection', 'itemsLayoutMode', 'enableGroupSeparator', 'locale', 'leafItemSettings', 'rangeColorMapping', 'selectionMode', 'groupSelectionMode', 'showLegend', 'enableGradient', 'showTooltip', 'tooltipTemplate', 'treeMapItems', 'levels', 'weightValuePath'], ['dataSource', 'weightValuePath'], {}, ['dataSource'])
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


@customAttribute(`${constants.attributePrefix}tree-view`)
@generateBindables('ejTreeView', ['allowDragAndDrop', 'allowDragAndDropAcrossControl', 'allowDropSibling', 'allowDropChild', 'allowEditing', 'allowKeyboardNavigation', 'allowMultiSelection', 'autoCheck', 'autoCheckParentNode', 'checkedNodes', 'cssClass', 'enableAnimation', 'enabled', 'enableMultipleExpand', 'enablePersistence', 'enableRTL', 'expandedNodes', 'expandOn', 'fields', 'fullRowSelect', 'height', 'htmlAttributes', 'loadOnDemand', 'selectedNode', 'selectedNodes', 'showCheckbox', 'sortSettings', 'template', 'width'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejTreeView extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customElement(`${constants.elementPrefix}uploadbox`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejUploadbox', ['allowDragAndDrop', 'asyncUpload', 'autoUpload', 'buttonText', 'cssClass', 'customFileDetails', 'dialogAction', 'dialogPosition', 'dialogText', 'dropAreaText', 'dropAreaHeight', 'dropAreaWidth', 'enabled', 'enableRTL', 'extensionsAllow', 'extensionsDeny', 'fileSize', 'height', 'htmlAttributes', 'locale', 'multipleFilesSelection', 'pushFile', 'removeUrl', 'saveUrl', 'showBrowseButton', 'showFileDetails', 'showRoundedCorner', 'uploadName', 'width'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejUploadbox extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}


@customAttribute(`${constants.attributePrefix}waiting-popup`)
@generateBindables('ejWaitingPopup', ['cssClass', 'htmlAttributes', 'showImage', 'showOnInit', 'target', 'appendTo', 'template', 'text'])
@inject(Element)
export class ejWaitingPopup extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

