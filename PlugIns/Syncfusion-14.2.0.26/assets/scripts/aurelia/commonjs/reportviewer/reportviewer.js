'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.reportviewer.min');

var ejReportViewer = (function (_WidgetBase) {
  _inherits(ejReportViewer, _WidgetBase);

  function ejReportViewer(element) {
    _classCallCheck(this, _ejReportViewer);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejReportViewer = ejReportViewer;
  ejReportViewer = _commonCommon.inject(Element)(ejReportViewer) || ejReportViewer;
  ejReportViewer = _commonCommon.generateBindables('ejReportViewer', ['dataSources', 'enablePageCache', 'exportSettings', 'isResponsive', 'locale', 'pageSettings', 'parameters', 'printMode', 'printOptions', 'processingMode', 'renderMode', 'reportPath', 'reportServerUrl', 'reportServiceUrl', 'toolbarSettings', 'zoomFactor'])(ejReportViewer) || ejReportViewer;
  ejReportViewer = _commonCommon.inlineView('<template><content></content></template>')(ejReportViewer) || ejReportViewer;
  ejReportViewer = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'report-viewer')(ejReportViewer) || ejReportViewer;
  return ejReportViewer;
})(_commonCommon.WidgetBase);

exports.ejReportViewer = ejReportViewer;