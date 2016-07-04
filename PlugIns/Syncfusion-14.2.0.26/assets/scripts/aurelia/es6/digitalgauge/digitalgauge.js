import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'datavisualization/ej.digitalgauge.min';

@customElement(`${constants.elementPrefix}digital-gauge`)
@inlineView('<template><content></content></template>')
@generateBindables('ejDigitalGauge', ['frame', 'height', 'isResponsive', 'items', 'matrixSegmentData', 'segmentData', 'themes', 'value', 'width'], ['value'])
@inject(Element)
export class ejDigitalGauge extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

