import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.reportviewer.min';

@customElement(`${constants.elementPrefix}report-viewer`)
@inlineView('<template><content></content></template>')
@generateBindables('ejReportViewer', ['dataSources', 'enablePageCache', 'exportSettings', 'isResponsive', 'locale', 'pageSettings', 'parameters', 'printMode', 'printOptions', 'processingMode', 'renderMode', 'reportPath', 'reportServerUrl', 'reportServiceUrl', 'toolbarSettings', 'zoomFactor'])
@inject(Element)
export class ejReportViewer extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

