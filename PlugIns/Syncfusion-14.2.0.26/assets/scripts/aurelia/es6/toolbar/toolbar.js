import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.toolbar.min';

@customAttribute(`${constants.attributePrefix}toolbar`)
@generateBindables('ejToolbar', ['cssClass', 'dataSource', 'enabled', 'enableRTL', 'enableSeparator', 'fields', 'height', 'hide', 'isResponsive', 'orientation', 'query', 'showRoundedCorner', 'targetID', 'width'], [], {'enableRTL': 'enableRtl', 'targetID': 'targetId'})
@inject(Element)
export class ejToolbar extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

