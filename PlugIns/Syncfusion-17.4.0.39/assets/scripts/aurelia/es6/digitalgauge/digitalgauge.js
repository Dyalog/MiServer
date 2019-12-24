import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

@customElement(`${constants.elementPrefix}digital-gauge`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejDigitalGauge', ['exportSettings', 'frame', 'height', 'isResponsive', 'enableResize', 'items', 'matrixSegmentData', 'segmentData', 'themes', 'value', 'width'], ['value'])
@inject(Element)
export class ejDigitalGauge extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

