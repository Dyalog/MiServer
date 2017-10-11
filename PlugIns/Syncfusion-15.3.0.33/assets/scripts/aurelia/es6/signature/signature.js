import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/web/ej.signature.min';

@customElement(`${constants.elementPrefix}signature`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSignature', ['backgroundColor', 'backgroundImage', 'enabled', 'height', 'isResponsive', 'saveImageFormat', 'saveWithBackground', 'showRoundedCorner', 'strokeColor', 'strokeWidth', 'width'])
@inject(Element)
export class ejSignature extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

