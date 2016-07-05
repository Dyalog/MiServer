import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.progressbar.min';

@customAttribute(`${constants.attributePrefix}progress-bar`)
@generateBindables('ejProgressBar', ['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'maxValue', 'minValue', 'percentage', 'showRoundedCorner', 'text', 'value', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejProgressBar extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

