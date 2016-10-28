import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.waitingpopup.min';

@customAttribute(`${constants.attributePrefix}waiting-popup`)
@generateBindables('ejWaitingPopup', ['cssClass', 'htmlAttributes', 'showImage', 'showOnInit', 'target', 'appendTo', 'template', 'text'])
@inject(Element)
export class ejWaitingPopup extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

