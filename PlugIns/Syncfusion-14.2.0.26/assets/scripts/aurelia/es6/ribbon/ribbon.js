import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.ribbon.min';

@customElement(`${constants.elementPrefix}ribbon`)
@inlineView('<template><content></content></template>')
@generateBindables('ejRibbon', ['allowResizing', 'buttonDefaults', 'showQAT', 'collapsePinSettings', 'expandPinSettings', 'applicationTab', 'contextualTabs', 'disabledItemIndex', 'enabledItemIndex', 'selectedItemIndex', 'tabs', 'locale', 'width'])
@inject(Element)
export class ejRibbon extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

