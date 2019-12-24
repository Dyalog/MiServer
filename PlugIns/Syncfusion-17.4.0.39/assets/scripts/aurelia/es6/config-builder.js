/**
* Plugin configuration builder
*/

import { PLATFORM } from 'aurelia-pal';

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

