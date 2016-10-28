import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.pivotchart.min';

@customElement(`${constants.elementPrefix}pivot-chart`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotChart', ['analysisMode', 'cssClass', 'commonSeriesOptions', 'currentReport', 'dataSource', 'customObject', 'enable3D', 'enableRTL', 'isResponsive', 'legend', 'locale', 'operationalMode', 'primaryXAxis', 'primaryYAxis', 'rotation', 'serviceMethodSettings', 'size', 'url'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPivotChart extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

