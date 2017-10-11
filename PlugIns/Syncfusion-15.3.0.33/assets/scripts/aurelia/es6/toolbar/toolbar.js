import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customAttribute, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/web/ej.toolbar.min';

@customAttribute(`${constants.attributePrefix}toolbar`)
@generateBindables('ejToolbar', ['cssClass', 'dataSource', 'disabledItemIndices', 'enabled', 'enabledItemIndices', 'enableRTL', 'enableSeparator', 'fields', 'height', 'htmlAttributes', 'hide', 'isResponsive', 'Items', 'orientation', 'query', 'responsiveType', 'showRoundedCorner', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejToolbar extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

