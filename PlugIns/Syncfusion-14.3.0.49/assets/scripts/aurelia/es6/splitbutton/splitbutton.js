import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.splitbutton.min';

@customAttribute(`${constants.attributePrefix}split-button`)
@generateBindables('ejSplitButton', ['arrowPosition', 'buttonMode', 'contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'showRoundedCorner', 'size', 'suffixIcon', 'targetID', 'text', 'width'], [], {'enableRTL': 'enableRtl', 'targetID': 'targetId'})
@inject(Element)
export class ejSplitButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

