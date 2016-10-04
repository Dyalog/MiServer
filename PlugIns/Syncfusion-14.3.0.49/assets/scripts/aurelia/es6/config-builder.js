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
    .ejMap()
    .ejTreeMap()
    .ejRangeNavigator()
    .ejDiagram()
    .ejHeatMap()
    .ejHeatMapLegend()
    .ejSparkline()
    .ejSymbolPalette()
    .ejOverview()
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
    .ejTooltip()
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
  ejTooltip(): EjConfigBuilder {
    this.resources.push('./tooltip/tooltip');
    return this;
  }
  ejTemplate(): EjConfigBuilder {
    this.resources.push('./common/template');
    return this;
  }
}

