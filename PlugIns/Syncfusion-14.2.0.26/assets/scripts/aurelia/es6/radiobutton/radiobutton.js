import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.radiobutton.min';

@customAttribute(`${constants.attributePrefix}radio-button`)
@generateBindables('ejRadioButton', ['checked', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'htmlAttributes', 'id', 'idPrefix', 'name', 'size', 'text', 'validationMessage', 'validationRules', 'value'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejRadioButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

