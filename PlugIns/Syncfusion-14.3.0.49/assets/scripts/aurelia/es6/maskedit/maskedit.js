import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.maskedit.min';

@customAttribute(`${constants.attributePrefix}mask-edit`)
@generateBindables('ejMaskEdit', ['cssClass', 'customCharacter', 'enabled', 'enablePersistence', 'height', 'hidePromptOnLeave', 'htmlAttributes', 'inputMode', 'maskFormat', 'name', 'readOnly', 'showError', 'showPromptChar', 'showRoundedCorner', 'textAlign', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'])
@inject(Element)
export class ejMaskEdit extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}

