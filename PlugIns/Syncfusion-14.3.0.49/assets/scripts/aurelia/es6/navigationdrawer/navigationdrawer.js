import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.navigationdrawer.min';

@customElement(`${constants.elementPrefix}navigation-drawer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejNavigationDrawer', ['contentId', 'cssClass', 'direction', 'enableListView', 'items', 'listViewSettings', 'position', 'targetId', 'type', 'width'])
@inject(Element)
export class ejNavigationDrawer extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

