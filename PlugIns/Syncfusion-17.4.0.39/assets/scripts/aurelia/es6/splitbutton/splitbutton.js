import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customAttribute, inject} from '../common/common';

@customAttribute(`${constants.attributePrefix}split-button`)
@generateBindables('ejSplitButton', ['arrowPosition', 'buttonMode', 'contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'showRoundedCorner', 'size', 'suffixIcon', 'targetID', 'target', 'text', 'width'], [], {'enableRTL': ['enableRtl'], 'targetID': ['targetId']})
@inject(Element)
export class ejSplitButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

