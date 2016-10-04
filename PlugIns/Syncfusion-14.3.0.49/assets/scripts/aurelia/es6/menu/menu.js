import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.menu.min';

@customAttribute(`${constants.attributePrefix}menu`)
@generateBindables('ejMenu', ['animationType', 'contextMenuTarget', 'cssClass', 'enableAnimation', 'enableCenterAlign', 'enabled', 'enableRTL', 'enableSeparator', 'excludeTarget', 'fields', 'height', 'htmlAttributes', 'isResponsive', 'menuType', 'openOnClick', 'orientation', 'showRootLevelArrows', 'showSubLevelArrows', 'subMenuDirection', 'titleText', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejMenu extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

