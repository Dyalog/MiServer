import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customAttribute, inject} from '../common/common';

@customAttribute(`${constants.attributePrefix}radio-button`)
@generateBindables('ejRadioButton', ['checked', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'htmlAttributes', 'id', 'idPrefix', 'name', 'size', 'text', 'validationMessage', 'validationRules', 'value'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejRadioButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

