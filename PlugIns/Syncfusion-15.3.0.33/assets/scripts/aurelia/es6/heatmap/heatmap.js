import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.heatmap.min';

@customElement(`${constants.elementPrefix}heat-map`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejHeatMap', ['width', 'height', 'id', 'showTooltip', 'tooltipSettings', 'itemsSource', 'heatMapCell', 'isResponsive', 'enableVirtualization', 'defaultColumnStyle', 'legendCollection', 'itemsMapping', 'colorMappingCollection'])
@inject(Element)
export class ejHeatMap extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

