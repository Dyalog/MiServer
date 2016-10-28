import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'common/ej.scroller.min';

@customAttribute(`${constants.attributePrefix}scroller`)
@generateBindables('ejScroller', ['animationSpeed', 'autoHide', 'buttonSize', 'enabled', 'enablePersistence', 'enableRTL', 'enableTouchScroll', 'height', 'scrollerSize', 'scrollLeft', 'scrollOneStepBy', 'scrollTop', 'targetPane', 'width'], ['scrollLeft', 'scrollTop'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejScroller extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

