import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/web/ej.pivotchart.min';

@customElement(`${constants.elementPrefix}pivot-chart`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotChart', ['analysisMode', 'cssClass', 'zooming', 'commonSeriesOptions', 'dataSource', 'customObject', 'enable3D', 'enableRTL', 'enableMultiLevelLabels', 'isResponsive', 'legend', 'locale', 'operationalMode', 'primaryXAxis', 'primaryYAxis', 'rotation', 'enableContextMenu', 'serviceMethodSettings', 'size', 'url'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPivotChart extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

