import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'datavisualization/ej.lineargauge.min';

@customElement(`${constants.elementPrefix}linear-gauge`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejLinearGauge', ['animationSpeed', 'backgroundColor', 'borderColor', 'enableAnimation', 'enableMarkerPointerAnimation', 'isResponsive', 'frame', 'height', 'labelColor', 'maximum', 'minimum', 'orientation', 'outerCustomLabelPosition', 'pointerGradient1', 'pointerGradient2', 'readOnly', 'scales', 'theme', 'tickColor', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])
@inject(Element)
export class ejLinearGauge extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

