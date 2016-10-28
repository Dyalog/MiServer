import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.toolbar.min';

@customAttribute(`${constants.attributePrefix}toolbar`)
@generateBindables('ejToolbar', ['cssClass', 'dataSource', 'enabled', 'enableRTL', 'enableSeparator', 'fields', 'height', 'htmlAttributes', 'hide', 'isResponsive', 'orientation', 'query', 'showRoundedCorner', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejToolbar extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

