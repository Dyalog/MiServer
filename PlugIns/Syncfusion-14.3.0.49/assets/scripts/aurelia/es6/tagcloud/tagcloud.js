import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.tagcloud.min';

@customElement(`${constants.elementPrefix}tag-cloud`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejTagCloud', ['cssClass', 'dataSource', 'enableRTL', 'fields', 'htmlAttributes', 'format', 'maxFontSize', 'minFontSize', 'query', 'showTitle', 'titleImage', 'titleText'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejTagCloud extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

