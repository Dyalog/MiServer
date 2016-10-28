import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'datavisualization/ej.circulargauge.min';

@customElement(`${constants.elementPrefix}circular-gauge`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejCircularGauge', ['animationSpeed', 'backgroundColor', 'distanceFromCorner', 'enableAnimation', 'frame', 'gaugePosition', 'height', 'interiorGradient', 'isRadialGradient', 'isResponsive', 'maximum', 'minimum', 'outerCustomLabelPosition', 'radius', 'readOnly', 'scales', 'theme', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])
@inject(Element)
export class ejCircularGauge extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

