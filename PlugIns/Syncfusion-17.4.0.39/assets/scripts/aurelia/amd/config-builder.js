define(['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.EjConfigBuilder = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var EjConfigBuilder = exports.EjConfigBuilder = function () {
    function EjConfigBuilder() {
      _classCallCheck(this, EjConfigBuilder);

      this.resources = [];
      this.useGlobalResources = true;
    }

    EjConfigBuilder.prototype.useAll = function useAll() {
      this.ejGrid().ejChart().ejSunburstChart().ejMap().ejTreeMap().ejRangeNavigator().ejDiagram().ejHeatMap().ejHeatMapLegend().ejSparkline().ejSymbolPalette().ejOverview().ejPager().ejBulletGraph().ejCircularGauge().ejLinearGauge().ejDigitalGauge().ejSplitter().ejDatePicker().ejGantt().ejTreeGrid().ejColorPicker().ejDialog().ejScroller().ejBarcode().ejPdfViewer().ejNumericTextbox().ejCurrencyTextbox().ejPercentageTextbox().ejTimePicker().ejToolbar().ejMenu().ejMaskEdit().ejTreeView().ejKanban().ejRibbon().ejSpreadsheet().ejRating().ejListBox().ejListView().ejNavigationDrawer().ejRotator().ejRTE().ejDropDownList().ejComboBox().ejAutocomplete().ejRadialMenu().ejRadialSlider().ejTile().ejAccordion().ejTab().ejCheckBox().ejRadioButton().ejToggleButton().ejSplitButton().ejGroupButton().ejDateTimePicker().ejDateRangePicker().ejProgressBar().ejTagCloud().ejButton().ejSlider().ejFileExplorer().ejPivotGrid().ejPivotChart().ejPivotGauge().ejPivotSchemaDesigner().ejPivotTreeMap().ejWaitingPopup().ejReportViewer().ejSchedule().ejUploadbox().ejSignature().ejTooltip().ejSpellCheck().ejTemplate();
      return this;
    };

    EjConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
      this.useGlobalResources = false;
      return this;
    };

    EjConfigBuilder.prototype.ejGrid = function ejGrid() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./grid/grid'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./grid/column'));
      return this;
    };

    EjConfigBuilder.prototype.ejChart = function ejChart() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./chart/chart'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./chart/series'));
      return this;
    };

    EjConfigBuilder.prototype.ejSunburstChart = function ejSunburstChart() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./sunburstchart/sunburstchart'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./sunburstchart/sunburstlevels'));
      return this;
    };

    EjConfigBuilder.prototype.ejMap = function ejMap() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./map/map'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./map/layer'));
      return this;
    };

    EjConfigBuilder.prototype.ejTreeMap = function ejTreeMap() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./treemap/treemap'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./treemap/level'));
      return this;
    };

    EjConfigBuilder.prototype.ejRangeNavigator = function ejRangeNavigator() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./rangenavigator/rangenavigator'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./rangenavigator/rangeseries'));
      return this;
    };

    EjConfigBuilder.prototype.ejDiagram = function ejDiagram() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./diagram/diagram'));
      return this;
    };

    EjConfigBuilder.prototype.ejHeatMap = function ejHeatMap() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./heatmap/heatmap'));
      return this;
    };

    EjConfigBuilder.prototype.ejHeatMapLegend = function ejHeatMapLegend() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./heatmaplegend/heatmaplegend'));
      return this;
    };

    EjConfigBuilder.prototype.ejSparkline = function ejSparkline() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./sparkline/sparkline'));
      return this;
    };

    EjConfigBuilder.prototype.ejSymbolPalette = function ejSymbolPalette() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./symbolpalette/symbolpalette'));
      return this;
    };

    EjConfigBuilder.prototype.ejOverview = function ejOverview() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./overview/overview'));
      return this;
    };

    EjConfigBuilder.prototype.ejPager = function ejPager() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./pager/pager'));
      return this;
    };

    EjConfigBuilder.prototype.ejBulletGraph = function ejBulletGraph() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./bulletgraph/bulletgraph'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./bulletgraph/qualitativerange'));
      return this;
    };

    EjConfigBuilder.prototype.ejCircularGauge = function ejCircularGauge() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./circulargauge/circulargauge'));
      return this;
    };

    EjConfigBuilder.prototype.ejLinearGauge = function ejLinearGauge() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./lineargauge/lineargauge'));
      return this;
    };

    EjConfigBuilder.prototype.ejDigitalGauge = function ejDigitalGauge() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./digitalgauge/digitalgauge'));
      return this;
    };

    EjConfigBuilder.prototype.ejSplitter = function ejSplitter() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./splitter/splitter'));
      return this;
    };

    EjConfigBuilder.prototype.ejDatePicker = function ejDatePicker() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./datepicker/datepicker'));
      return this;
    };

    EjConfigBuilder.prototype.ejGantt = function ejGantt() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./gantt/gantt'));
      return this;
    };

    EjConfigBuilder.prototype.ejTreeGrid = function ejTreeGrid() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./treegrid/treegrid'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./treegrid/treegridcolumn'));
      return this;
    };

    EjConfigBuilder.prototype.ejColorPicker = function ejColorPicker() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./colorpicker/colorpicker'));
      return this;
    };

    EjConfigBuilder.prototype.ejDialog = function ejDialog() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./dialog/dialog'));
      return this;
    };

    EjConfigBuilder.prototype.ejScroller = function ejScroller() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./scroller/scroller'));
      return this;
    };

    EjConfigBuilder.prototype.ejBarcode = function ejBarcode() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./barcode/barcode'));
      return this;
    };

    EjConfigBuilder.prototype.ejPdfViewer = function ejPdfViewer() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./pdfviewer/pdfviewer'));
      return this;
    };

    EjConfigBuilder.prototype.ejNumericTextbox = function ejNumericTextbox() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./numerictextbox/numerictextbox'));
      return this;
    };

    EjConfigBuilder.prototype.ejCurrencyTextbox = function ejCurrencyTextbox() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./currencytextbox/currencytextbox'));
      return this;
    };

    EjConfigBuilder.prototype.ejPercentageTextbox = function ejPercentageTextbox() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./percentagetextbox/percentagetextbox'));
      return this;
    };

    EjConfigBuilder.prototype.ejTimePicker = function ejTimePicker() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./timepicker/timepicker'));
      return this;
    };

    EjConfigBuilder.prototype.ejToolbar = function ejToolbar() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./toolbar/toolbar'));
      return this;
    };

    EjConfigBuilder.prototype.ejMenu = function ejMenu() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./menu/menu'));
      return this;
    };

    EjConfigBuilder.prototype.ejMaskEdit = function ejMaskEdit() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./maskedit/maskedit'));
      return this;
    };

    EjConfigBuilder.prototype.ejTreeView = function ejTreeView() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./treeview/treeview'));
      return this;
    };

    EjConfigBuilder.prototype.ejKanban = function ejKanban() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./kanban/kanban'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./kanban/kanbancolumn'));
      return this;
    };

    EjConfigBuilder.prototype.ejRibbon = function ejRibbon() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./ribbon/ribbon'));
      return this;
    };

    EjConfigBuilder.prototype.ejSpreadsheet = function ejSpreadsheet() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./spreadsheet/spreadsheet'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./spreadsheet/sheet'));
      return this;
    };

    EjConfigBuilder.prototype.ejRating = function ejRating() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./rating/rating'));
      return this;
    };

    EjConfigBuilder.prototype.ejListBox = function ejListBox() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./listbox/listbox'));
      return this;
    };

    EjConfigBuilder.prototype.ejListView = function ejListView() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./listview/listview'));
      return this;
    };

    EjConfigBuilder.prototype.ejNavigationDrawer = function ejNavigationDrawer() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./navigationdrawer/navigationdrawer'));
      return this;
    };

    EjConfigBuilder.prototype.ejRotator = function ejRotator() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./rotator/rotator'));
      return this;
    };

    EjConfigBuilder.prototype.ejRTE = function ejRTE() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./rte/rte'));
      return this;
    };

    EjConfigBuilder.prototype.ejDropDownList = function ejDropDownList() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./dropdownlist/dropdownlist'));
      return this;
    };

    EjConfigBuilder.prototype.ejComboBox = function ejComboBox() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./combobox/combobox'));
      return this;
    };

    EjConfigBuilder.prototype.ejAutocomplete = function ejAutocomplete() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./autocomplete/autocomplete'));
      return this;
    };

    EjConfigBuilder.prototype.ejRadialMenu = function ejRadialMenu() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./radialmenu/radialmenu'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./radialmenu/item'));
      return this;
    };

    EjConfigBuilder.prototype.ejRadialSlider = function ejRadialSlider() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./radialslider/radialslider'));
      return this;
    };

    EjConfigBuilder.prototype.ejTile = function ejTile() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./tile/tile'));
      return this;
    };

    EjConfigBuilder.prototype.ejAccordion = function ejAccordion() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./accordion/accordion'));
      return this;
    };

    EjConfigBuilder.prototype.ejTab = function ejTab() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./tab/tab'));
      return this;
    };

    EjConfigBuilder.prototype.ejCheckBox = function ejCheckBox() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./checkbox/checkbox'));
      return this;
    };

    EjConfigBuilder.prototype.ejRadioButton = function ejRadioButton() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./radiobutton/radiobutton'));
      return this;
    };

    EjConfigBuilder.prototype.ejToggleButton = function ejToggleButton() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./togglebutton/togglebutton'));
      return this;
    };

    EjConfigBuilder.prototype.ejSplitButton = function ejSplitButton() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./splitbutton/splitbutton'));
      return this;
    };

    EjConfigBuilder.prototype.ejGroupButton = function ejGroupButton() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./groupbutton/groupbutton'));
      return this;
    };

    EjConfigBuilder.prototype.ejDateTimePicker = function ejDateTimePicker() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./datetimepicker/datetimepicker'));
      return this;
    };

    EjConfigBuilder.prototype.ejDateRangePicker = function ejDateRangePicker() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./daterangepicker/daterangepicker'));
      return this;
    };

    EjConfigBuilder.prototype.ejProgressBar = function ejProgressBar() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./progressbar/progressbar'));
      return this;
    };

    EjConfigBuilder.prototype.ejTagCloud = function ejTagCloud() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./tagcloud/tagcloud'));
      return this;
    };

    EjConfigBuilder.prototype.ejButton = function ejButton() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./button/button'));
      return this;
    };

    EjConfigBuilder.prototype.ejSlider = function ejSlider() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./slider/slider'));
      return this;
    };

    EjConfigBuilder.prototype.ejFileExplorer = function ejFileExplorer() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./fileexplorer/fileexplorer'));
      return this;
    };

    EjConfigBuilder.prototype.ejPivotGrid = function ejPivotGrid() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivotgrid/pivotgrid'));
      return this;
    };

    EjConfigBuilder.prototype.ejPivotChart = function ejPivotChart() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivotchart/pivotchart'));
      return this;
    };

    EjConfigBuilder.prototype.ejPivotGauge = function ejPivotGauge() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivotgauge/pivotgauge'));
      return this;
    };

    EjConfigBuilder.prototype.ejPivotSchemaDesigner = function ejPivotSchemaDesigner() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivotschemadesigner/pivotschemadesigner'));
      return this;
    };

    EjConfigBuilder.prototype.ejPivotTreeMap = function ejPivotTreeMap() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./pivottreemap/pivottreemap'));
      return this;
    };

    EjConfigBuilder.prototype.ejWaitingPopup = function ejWaitingPopup() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./waitingpopup/waitingpopup'));
      return this;
    };

    EjConfigBuilder.prototype.ejReportViewer = function ejReportViewer() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./reportviewer/reportviewer'));
      return this;
    };

    EjConfigBuilder.prototype.ejSchedule = function ejSchedule() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./schedule/schedule'));
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./schedule/scheduleresource'));
      return this;
    };

    EjConfigBuilder.prototype.ejUploadbox = function ejUploadbox() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./uploadbox/uploadbox'));
      return this;
    };

    EjConfigBuilder.prototype.ejSignature = function ejSignature() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./signature/signature'));
      return this;
    };

    EjConfigBuilder.prototype.ejTooltip = function ejTooltip() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./tooltip/tooltip'));
      return this;
    };

    EjConfigBuilder.prototype.ejSpellCheck = function ejSpellCheck() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./spellcheck/spellcheck'));
      return this;
    };

    EjConfigBuilder.prototype.ejTemplate = function ejTemplate() {
      this.resources.push(_aureliaPal.PLATFORM.moduleName('./common/template'));
      return this;
    };

    return EjConfigBuilder;
  }();
});