'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var EjConfigBuilder;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('EjConfigBuilder', EjConfigBuilder = function () {
        function EjConfigBuilder() {
          _classCallCheck(this, EjConfigBuilder);

          this.resources = [];
          this.useGlobalResources = true;
        }

        EjConfigBuilder.prototype.useAll = function useAll() {
          this.ejGrid().ejChart().ejMap().ejTreeMap().ejRangeNavigator().ejDiagram().ejHeatMap().ejHeatMapLegend().ejSparkline().ejSymbolPalette().ejOverview().ejBulletGraph().ejCircularGauge().ejLinearGauge().ejDigitalGauge().ejSplitter().ejDatePicker().ejGantt().ejTreeGrid().ejColorPicker().ejDialog().ejScroller().ejBarcode().ejPdfViewer().ejNumericTextbox().ejCurrencyTextbox().ejPercentageTextbox().ejTimePicker().ejToolbar().ejMenu().ejMaskEdit().ejTreeView().ejKanban().ejRibbon().ejSpreadsheet().ejRating().ejListBox().ejListView().ejNavigationDrawer().ejRotator().ejRTE().ejDropDownList().ejAutocomplete().ejRadialMenu().ejRadialSlider().ejTile().ejAccordion().ejTab().ejCheckBox().ejRadioButton().ejToggleButton().ejSplitButton().ejGroupButton().ejDateTimePicker().ejProgressBar().ejTagCloud().ejButton().ejSlider().ejFileExplorer().ejPivotGrid().ejPivotChart().ejPivotGauge().ejPivotSchemaDesigner().ejPivotTreeMap().ejWaitingPopup().ejReportViewer().ejSchedule().ejUploadbox().ejTooltip().ejTemplate();
          return this;
        };

        EjConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
          this.useGlobalResources = false;
          return this;
        };

        EjConfigBuilder.prototype.ejGrid = function ejGrid() {
          this.resources.push('./grid/grid');
          this.resources.push('./grid/column');
          return this;
        };

        EjConfigBuilder.prototype.ejChart = function ejChart() {
          this.resources.push('./chart/chart');
          this.resources.push('./chart/series');
          return this;
        };

        EjConfigBuilder.prototype.ejMap = function ejMap() {
          this.resources.push('./map/map');
          this.resources.push('./map/layer');
          return this;
        };

        EjConfigBuilder.prototype.ejTreeMap = function ejTreeMap() {
          this.resources.push('./treemap/treemap');
          this.resources.push('./treemap/level');
          return this;
        };

        EjConfigBuilder.prototype.ejRangeNavigator = function ejRangeNavigator() {
          this.resources.push('./rangenavigator/rangenavigator');
          this.resources.push('./rangenavigator/rangeseries');
          return this;
        };

        EjConfigBuilder.prototype.ejDiagram = function ejDiagram() {
          this.resources.push('./diagram/diagram');
          return this;
        };

        EjConfigBuilder.prototype.ejHeatMap = function ejHeatMap() {
          this.resources.push('./heatmap/heatmap');
          return this;
        };

        EjConfigBuilder.prototype.ejHeatMapLegend = function ejHeatMapLegend() {
          this.resources.push('./heatmaplegend/heatmaplegend');
          return this;
        };

        EjConfigBuilder.prototype.ejSparkline = function ejSparkline() {
          this.resources.push('./sparkline/sparkline');
          return this;
        };

        EjConfigBuilder.prototype.ejSymbolPalette = function ejSymbolPalette() {
          this.resources.push('./symbolpalette/symbolpalette');
          return this;
        };

        EjConfigBuilder.prototype.ejOverview = function ejOverview() {
          this.resources.push('./overview/overview');
          return this;
        };

        EjConfigBuilder.prototype.ejBulletGraph = function ejBulletGraph() {
          this.resources.push('./bulletgraph/bulletgraph');
          this.resources.push('./bulletgraph/qualitativerange');
          return this;
        };

        EjConfigBuilder.prototype.ejCircularGauge = function ejCircularGauge() {
          this.resources.push('./circulargauge/circulargauge');
          return this;
        };

        EjConfigBuilder.prototype.ejLinearGauge = function ejLinearGauge() {
          this.resources.push('./lineargauge/lineargauge');
          return this;
        };

        EjConfigBuilder.prototype.ejDigitalGauge = function ejDigitalGauge() {
          this.resources.push('./digitalgauge/digitalgauge');
          return this;
        };

        EjConfigBuilder.prototype.ejSplitter = function ejSplitter() {
          this.resources.push('./splitter/splitter');
          return this;
        };

        EjConfigBuilder.prototype.ejDatePicker = function ejDatePicker() {
          this.resources.push('./datepicker/datepicker');
          return this;
        };

        EjConfigBuilder.prototype.ejGantt = function ejGantt() {
          this.resources.push('./gantt/gantt');
          return this;
        };

        EjConfigBuilder.prototype.ejTreeGrid = function ejTreeGrid() {
          this.resources.push('./treegrid/treegrid');
          this.resources.push('./treegrid/treegridcolumn');
          return this;
        };

        EjConfigBuilder.prototype.ejColorPicker = function ejColorPicker() {
          this.resources.push('./colorpicker/colorpicker');
          return this;
        };

        EjConfigBuilder.prototype.ejDialog = function ejDialog() {
          this.resources.push('./dialog/dialog');
          return this;
        };

        EjConfigBuilder.prototype.ejScroller = function ejScroller() {
          this.resources.push('./scroller/scroller');
          return this;
        };

        EjConfigBuilder.prototype.ejBarcode = function ejBarcode() {
          this.resources.push('./barcode/barcode');
          return this;
        };

        EjConfigBuilder.prototype.ejPdfViewer = function ejPdfViewer() {
          this.resources.push('./pdfviewer/pdfviewer');
          return this;
        };

        EjConfigBuilder.prototype.ejNumericTextbox = function ejNumericTextbox() {
          this.resources.push('./numerictextbox/numerictextbox');
          return this;
        };

        EjConfigBuilder.prototype.ejCurrencyTextbox = function ejCurrencyTextbox() {
          this.resources.push('./currencytextbox/currencytextbox');
          return this;
        };

        EjConfigBuilder.prototype.ejPercentageTextbox = function ejPercentageTextbox() {
          this.resources.push('./percentagetextbox/percentagetextbox');
          return this;
        };

        EjConfigBuilder.prototype.ejTimePicker = function ejTimePicker() {
          this.resources.push('./timepicker/timepicker');
          return this;
        };

        EjConfigBuilder.prototype.ejToolbar = function ejToolbar() {
          this.resources.push('./toolbar/toolbar');
          return this;
        };

        EjConfigBuilder.prototype.ejMenu = function ejMenu() {
          this.resources.push('./menu/menu');
          return this;
        };

        EjConfigBuilder.prototype.ejMaskEdit = function ejMaskEdit() {
          this.resources.push('./maskedit/maskedit');
          return this;
        };

        EjConfigBuilder.prototype.ejTreeView = function ejTreeView() {
          this.resources.push('./treeview/treeview');
          return this;
        };

        EjConfigBuilder.prototype.ejKanban = function ejKanban() {
          this.resources.push('./kanban/kanban');
          this.resources.push('./kanban/kanbancolumn');
          return this;
        };

        EjConfigBuilder.prototype.ejRibbon = function ejRibbon() {
          this.resources.push('./ribbon/ribbon');
          return this;
        };

        EjConfigBuilder.prototype.ejSpreadsheet = function ejSpreadsheet() {
          this.resources.push('./spreadsheet/spreadsheet');
          this.resources.push('./spreadsheet/sheet');
          return this;
        };

        EjConfigBuilder.prototype.ejRating = function ejRating() {
          this.resources.push('./rating/rating');
          return this;
        };

        EjConfigBuilder.prototype.ejListBox = function ejListBox() {
          this.resources.push('./listbox/listbox');
          return this;
        };

        EjConfigBuilder.prototype.ejListView = function ejListView() {
          this.resources.push('./listview/listview');
          return this;
        };

        EjConfigBuilder.prototype.ejNavigationDrawer = function ejNavigationDrawer() {
          this.resources.push('./navigationdrawer/navigationdrawer');
          return this;
        };

        EjConfigBuilder.prototype.ejRotator = function ejRotator() {
          this.resources.push('./rotator/rotator');
          return this;
        };

        EjConfigBuilder.prototype.ejRTE = function ejRTE() {
          this.resources.push('./rte/rte');
          return this;
        };

        EjConfigBuilder.prototype.ejDropDownList = function ejDropDownList() {
          this.resources.push('./dropdownlist/dropdownlist');
          return this;
        };

        EjConfigBuilder.prototype.ejAutocomplete = function ejAutocomplete() {
          this.resources.push('./autocomplete/autocomplete');
          return this;
        };

        EjConfigBuilder.prototype.ejRadialMenu = function ejRadialMenu() {
          this.resources.push('./radialmenu/radialmenu');
          this.resources.push('./radialmenu/item');
          return this;
        };

        EjConfigBuilder.prototype.ejRadialSlider = function ejRadialSlider() {
          this.resources.push('./radialslider/radialslider');
          return this;
        };

        EjConfigBuilder.prototype.ejTile = function ejTile() {
          this.resources.push('./tile/tile');
          return this;
        };

        EjConfigBuilder.prototype.ejAccordion = function ejAccordion() {
          this.resources.push('./accordion/accordion');
          return this;
        };

        EjConfigBuilder.prototype.ejTab = function ejTab() {
          this.resources.push('./tab/tab');
          return this;
        };

        EjConfigBuilder.prototype.ejCheckBox = function ejCheckBox() {
          this.resources.push('./checkbox/checkbox');
          return this;
        };

        EjConfigBuilder.prototype.ejRadioButton = function ejRadioButton() {
          this.resources.push('./radiobutton/radiobutton');
          return this;
        };

        EjConfigBuilder.prototype.ejToggleButton = function ejToggleButton() {
          this.resources.push('./togglebutton/togglebutton');
          return this;
        };

        EjConfigBuilder.prototype.ejSplitButton = function ejSplitButton() {
          this.resources.push('./splitbutton/splitbutton');
          return this;
        };

        EjConfigBuilder.prototype.ejGroupButton = function ejGroupButton() {
          this.resources.push('./groupbutton/groupbutton');
          return this;
        };

        EjConfigBuilder.prototype.ejDateTimePicker = function ejDateTimePicker() {
          this.resources.push('./datetimepicker/datetimepicker');
          return this;
        };

        EjConfigBuilder.prototype.ejProgressBar = function ejProgressBar() {
          this.resources.push('./progressbar/progressbar');
          return this;
        };

        EjConfigBuilder.prototype.ejTagCloud = function ejTagCloud() {
          this.resources.push('./tagcloud/tagcloud');
          return this;
        };

        EjConfigBuilder.prototype.ejButton = function ejButton() {
          this.resources.push('./button/button');
          return this;
        };

        EjConfigBuilder.prototype.ejSlider = function ejSlider() {
          this.resources.push('./slider/slider');
          return this;
        };

        EjConfigBuilder.prototype.ejFileExplorer = function ejFileExplorer() {
          this.resources.push('./fileexplorer/fileexplorer');
          return this;
        };

        EjConfigBuilder.prototype.ejPivotGrid = function ejPivotGrid() {
          this.resources.push('./pivotgrid/pivotgrid');
          return this;
        };

        EjConfigBuilder.prototype.ejPivotChart = function ejPivotChart() {
          this.resources.push('./pivotchart/pivotchart');
          return this;
        };

        EjConfigBuilder.prototype.ejPivotGauge = function ejPivotGauge() {
          this.resources.push('./pivotgauge/pivotgauge');
          return this;
        };

        EjConfigBuilder.prototype.ejPivotSchemaDesigner = function ejPivotSchemaDesigner() {
          this.resources.push('./pivotschemadesigner/pivotschemadesigner');
          return this;
        };

        EjConfigBuilder.prototype.ejPivotTreeMap = function ejPivotTreeMap() {
          this.resources.push('./pivottreemap/pivottreemap');
          return this;
        };

        EjConfigBuilder.prototype.ejWaitingPopup = function ejWaitingPopup() {
          this.resources.push('./waitingpopup/waitingpopup');
          return this;
        };

        EjConfigBuilder.prototype.ejReportViewer = function ejReportViewer() {
          this.resources.push('./reportviewer/reportviewer');
          return this;
        };

        EjConfigBuilder.prototype.ejSchedule = function ejSchedule() {
          this.resources.push('./schedule/schedule');
          this.resources.push('./schedule/scheduleresource');
          return this;
        };

        EjConfigBuilder.prototype.ejUploadbox = function ejUploadbox() {
          this.resources.push('./uploadbox/uploadbox');
          return this;
        };

        EjConfigBuilder.prototype.ejTooltip = function ejTooltip() {
          this.resources.push('./tooltip/tooltip');
          return this;
        };

        EjConfigBuilder.prototype.ejTemplate = function ejTemplate() {
          this.resources.push('./common/template');
          return this;
        };

        return EjConfigBuilder;
      }());

      _export('EjConfigBuilder', EjConfigBuilder);
    }
  };
});