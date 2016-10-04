import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.slider.min';

@customAttribute(`${constants.attributePrefix}slider`)
@generateBindables('ejSlider', ['allowMouseWheel', 'animationSpeed', 'cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'incrementStep', 'largeStep', 'maxValue', 'minValue', 'orientation', 'readOnly', 'showRoundedCorner', 'showScale', 'showSmallTicks', 'showTooltip', 'sliderType', 'smallStep', 'value', 'values', 'width'], ['value'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejSlider extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

