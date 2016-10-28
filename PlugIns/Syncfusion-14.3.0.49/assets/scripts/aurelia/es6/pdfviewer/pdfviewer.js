import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.pdfviewer.min';

@customElement(`${constants.elementPrefix}pdf-viewer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPdfViewer', ['locale', 'toolbarSettings', 'toolbarItems', 'serviceUrl', 'pageCount', 'currentPageNumber', 'zoomPercentage', 'pdfService', 'hyperlinkOpenState', 'isResponsive', 'fileName'])
@inject(Element)
export class ejPdfViewer extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

