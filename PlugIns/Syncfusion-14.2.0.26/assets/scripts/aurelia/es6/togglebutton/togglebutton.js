import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.togglebutton.min';

@customAttribute(`${constants.attributePrefix}toggle-button`)
@generateBindables('ejToggleButton', ['activePrefixIcon', 'activeSuffixIcon', 'activeText', 'contentType', 'cssClass', 'defaultPrefixIcon', 'defaultSuffixIcon', 'defaultText', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'preventToggle', 'showRoundedCorner', 'size', 'toggleState', 'type', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejToggleButton extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

