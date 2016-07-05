'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.pdfviewer.min');

var ejPdfViewer = (function (_WidgetBase) {
  _inherits(ejPdfViewer, _WidgetBase);

  function ejPdfViewer(element) {
    _classCallCheck(this, _ejPdfViewer);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejPdfViewer = ejPdfViewer;
  ejPdfViewer = _commonCommon.inject(Element)(ejPdfViewer) || ejPdfViewer;
  ejPdfViewer = _commonCommon.generateBindables('ejPdfViewer', ['locale', 'toolbarSettings', 'toolbarItems', 'serviceUrl', 'pageCount', 'currentPageNumber', 'zoomPercentage', 'pdfService'])(ejPdfViewer) || ejPdfViewer;
  ejPdfViewer = _commonCommon.inlineView('<template><content></content></template>')(ejPdfViewer) || ejPdfViewer;
  ejPdfViewer = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'pdf-viewer')(ejPdfViewer) || ejPdfViewer;
  return ejPdfViewer;
})(_commonCommon.WidgetBase);

exports.ejPdfViewer = ejPdfViewer;