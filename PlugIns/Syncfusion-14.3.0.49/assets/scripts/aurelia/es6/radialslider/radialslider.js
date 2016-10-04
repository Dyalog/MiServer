import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.radialslider.min';

@customElement(`${constants.elementPrefix}radial-slider`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejRadialSlider', ['autoOpen', 'cssClass', 'enableAnimation', 'enableRoundOff', 'endAngle', 'inline', 'innerCircleImageClass', 'innerCircleImageUrl', 'labelSpace', 'radius', 'showInnerCircle', 'startAngle', 'strokeWidth', 'ticks', 'value'], ['value', 'ticks'])
@inject(Element)
export class ejRadialSlider extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

