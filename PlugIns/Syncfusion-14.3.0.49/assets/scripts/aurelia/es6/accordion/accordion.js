import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.accordion.min';

@customElement(`${constants.elementPrefix}accordion`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejAccordion', ['ajaxSettings', 'allowKeyboardNavigation', 'collapseSpeed', 'collapsible', 'cssClass', 'customIcon', 'disabledItems', 'enableAnimation', 'enabled', 'enabledItems', 'enableMultipleOpen', 'enablePersistence', 'enableRTL', 'events', 'expandSpeed', 'headerSize', 'height', 'heightAdjustMode', 'htmlAttributes', 'selectedItemIndex', 'selectedItems', 'showCloseButton', 'showRoundedCorner', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejAccordion extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

