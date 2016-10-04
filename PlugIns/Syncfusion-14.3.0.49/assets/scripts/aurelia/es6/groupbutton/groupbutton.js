import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.groupbutton.min';

@customAttribute(`${constants.attributePrefix}group-button`)
@generateBindables('ejGroupButton', ['cssClass', 'dataSource', 'enableRTL', 'enabled', 'fields', 'groupButtonMode', 'height', 'htmlAttributes', 'orientation', 'query', 'selectedItemIndex', 'showRoundedCorner', 'size', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejGroupButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

