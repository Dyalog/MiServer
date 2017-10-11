import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customAttribute, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/web/ej.progressbar.min';

@customAttribute(`${constants.attributePrefix}progress-bar`)
@generateBindables('ejProgressBar', ['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'maxValue', 'minValue', 'percentage', 'showRoundedCorner', 'text', 'value', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejProgressBar extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

