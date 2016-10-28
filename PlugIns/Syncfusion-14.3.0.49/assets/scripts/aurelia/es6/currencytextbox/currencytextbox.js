import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.editor.min';

@customAttribute(`${constants.attributePrefix}currency-textbox`)
@generateBindables('ejCurrencyTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejCurrencyTextbox extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}

