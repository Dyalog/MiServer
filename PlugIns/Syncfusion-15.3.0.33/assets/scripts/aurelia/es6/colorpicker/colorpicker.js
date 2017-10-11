import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customAttribute, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/web/ej.colorpicker.min';

@customAttribute(`${constants.attributePrefix}color-picker`)
@generateBindables('ejColorPicker', ['buttonText', 'buttonMode', 'columns', 'cssClass', 'custom', 'displayInline', 'enabled', 'enableOpacity', 'htmlAttributes', 'locale', 'modelType', 'opacityValue', 'palette', 'presetType', 'showApplyCancel', 'showClearButton', 'showPreview', 'showRecentColors', 'showSwitcher', 'showTooltip', 'toolIcon', 'tooltipText', 'value'], ['value', 'opacityValue'])
@inject(Element)
export class ejColorPicker extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

