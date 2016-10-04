import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'datavisualization/ej.heatmap.min';

@customElement(`${constants.elementPrefix}heat-map`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejHeatMap', ['width', 'height', 'id', 'itemsSource', 'heatMapCell', 'isResponsive', 'enableVirtualization', 'defaultColumnStyle', 'legendCollection', 'itemsMapping', 'colorMappingCollection'])
@inject(Element)
export class ejHeatMap extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

