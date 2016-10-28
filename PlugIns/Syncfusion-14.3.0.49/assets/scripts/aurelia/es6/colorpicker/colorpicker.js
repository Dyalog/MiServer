import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.colorpicker.min';

@customAttribute(`${constants.attributePrefix}color-picker`)
@generateBindables('ejColorPicker', ['buttonText', 'buttonMode', 'columns', 'cssClass', 'custom', 'displayInline', 'enabled', 'enableOpacity', 'htmlAttributes', 'modelType', 'opacityValue', 'palette', 'presetType', 'showApplyCancel', 'showClearButton', 'showPreview', 'showRecentColors', 'showSwitcher', 'showTooltip', 'toolIcon', 'tooltipText', 'value'], ['value', 'opacityValue'])
@inject(Element)
export class ejColorPicker extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

