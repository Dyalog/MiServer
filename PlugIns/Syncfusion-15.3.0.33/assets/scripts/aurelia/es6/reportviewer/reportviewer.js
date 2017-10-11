import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/web/ej.reportviewer.min';

@customElement(`${constants.elementPrefix}report-viewer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejReportViewer', ['dataSources', 'enablePageCache', 'exportSettings', 'isResponsive', 'locale', 'pageSettings', 'parameters', 'printMode', 'printOptions', 'processingMode', 'renderMode', 'reportPath', 'reportServerUrl', 'reportServiceUrl', 'toolbarSettings', 'zoomFactor'])
@inject(Element)
export class ejReportViewer extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

