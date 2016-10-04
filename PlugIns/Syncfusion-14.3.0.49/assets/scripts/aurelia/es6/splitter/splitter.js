import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.splitter.min';

@customElement(`${constants.elementPrefix}splitter`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSplitter', ['allowKeyboardNavigation', 'animationSpeed', 'cssClass', 'enableAnimation', 'enableRTL', 'height', 'htmlAttributes', 'isResponsive', 'orientation', 'properties', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejSplitter extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

