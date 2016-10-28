import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'datavisualization/ej.heatmap.min';

@customElement(`${constants.elementPrefix}heat-map-legend`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejHeatMapLegend', ['width', 'height', 'isResponsive', 'showLabel', 'colorMappingCollection', 'orientation', 'legendMode'])
@inject(Element)
export class ejHeatMapLegend extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

