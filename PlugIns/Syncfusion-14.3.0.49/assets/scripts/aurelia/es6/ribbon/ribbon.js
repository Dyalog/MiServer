import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.ribbon.min';

@customElement(`${constants.elementPrefix}ribbon`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejRibbon', ['allowResizing', 'isResponsive', 'isMobileOnly', 'buttonDefaults', 'showQAT', 'collapsePinSettings', 'enableRTL', 'expandPinSettings', 'applicationTab', 'contextualTabs', 'disabledItemIndex', 'enabledItemIndex', 'selectedItemIndex', 'tabs', 'locale', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejRibbon extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

