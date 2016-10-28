import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.button.min';

@customAttribute(`${constants.attributePrefix}button`)
@generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text', 'timeInterval', 'type', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

