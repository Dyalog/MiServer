import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

@customElement(`${constants.elementPrefix}tag-cloud`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejTagCloud', ['cssClass', 'dataSource', 'enableRTL', 'fields', 'htmlAttributes', 'format', 'maxFontSize', 'minFontSize', 'query', 'showTitle', 'titleImage', 'titleText'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejTagCloud extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

