System.register(['../common/common', 'ej.reportviewer.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejReportViewer;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customElement = _commonCommon.customElement;
      inlineView = _commonCommon.inlineView;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejReportviewerMin) {}],
    execute: function () {
      ejReportViewer = (function (_WidgetBase) {
        _inherits(ejReportViewer, _WidgetBase);

        function ejReportViewer(element) {
          _classCallCheck(this, _ejReportViewer);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejReportViewer = ejReportViewer;
        ejReportViewer = inject(Element)(ejReportViewer) || ejReportViewer;
        ejReportViewer = generateBindables('ejReportViewer', ['dataSources', 'enablePageCache', 'exportSettings', 'isResponsive', 'locale', 'pageSettings', 'parameters', 'printMode', 'printOptions', 'processingMode', 'renderMode', 'reportPath', 'reportServerUrl', 'reportServiceUrl', 'toolbarSettings', 'zoomFactor'])(ejReportViewer) || ejReportViewer;
        ejReportViewer = inlineView('<template><content></content></template>')(ejReportViewer) || ejReportViewer;
        ejReportViewer = customElement(constants.elementPrefix + 'report-viewer')(ejReportViewer) || ejReportViewer;
        return ejReportViewer;
      })(WidgetBase);

      _export('ejReportViewer', ejReportViewer);
    }
  };
});