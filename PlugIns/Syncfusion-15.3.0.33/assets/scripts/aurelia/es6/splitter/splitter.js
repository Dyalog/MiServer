import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/web/ej.splitter.min';

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

