System.register(['../common/common', 'ej.pdfviewer.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejPdfViewer;

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
    }, function (_ejPdfviewerMin) {}],
    execute: function () {
      ejPdfViewer = (function (_WidgetBase) {
        _inherits(ejPdfViewer, _WidgetBase);

        function ejPdfViewer(element) {
          _classCallCheck(this, _ejPdfViewer);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejPdfViewer = ejPdfViewer;
        ejPdfViewer = inject(Element)(ejPdfViewer) || ejPdfViewer;
        ejPdfViewer = generateBindables('ejPdfViewer', ['locale', 'toolbarSettings', 'toolbarItems', 'serviceUrl', 'pageCount', 'currentPageNumber', 'zoomPercentage', 'pdfService'])(ejPdfViewer) || ejPdfViewer;
        ejPdfViewer = inlineView('<template><content></content></template>')(ejPdfViewer) || ejPdfViewer;
        ejPdfViewer = customElement(constants.elementPrefix + 'pdf-viewer')(ejPdfViewer) || ejPdfViewer;
        return ejPdfViewer;
      })(WidgetBase);

      _export('ejPdfViewer', ejPdfViewer);
    }
  };
});