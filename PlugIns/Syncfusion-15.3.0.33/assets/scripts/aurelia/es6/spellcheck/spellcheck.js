import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/web/ej.spellcheck.min';

@customElement(`${constants.elementPrefix}spell-check`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSpellCheck', ['dictionarySettings', 'misspellWordCss', 'locale', 'maxSuggestionCount', 'ignoreWords', 'contextMenuSettings', 'ignoreSettings', 'isResponsive', 'enableValidateOnType', 'controlsToValidate', 'enableAsync'])
@inject(Element)
export class ejSpellCheck extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

