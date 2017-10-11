import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customAttribute, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/web/ej.groupbutton.min';

@customAttribute(`${constants.attributePrefix}group-button`)
@generateBindables('ejGroupButton', ['cssClass', 'dataSource', 'enableRTL', 'enabled', 'fields', 'groupButtonMode', 'height', 'htmlAttributes', 'orientation', 'query', 'selectedItemIndex', 'showRoundedCorner', 'size', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejGroupButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

