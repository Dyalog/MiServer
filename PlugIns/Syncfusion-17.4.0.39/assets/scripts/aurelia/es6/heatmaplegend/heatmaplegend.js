import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

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

