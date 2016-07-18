import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.timepicker.min';

@customAttribute(`${constants.attributePrefix}time-picker`)
@generateBindables('ejTimePicker', ['cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'disableTimeRanges', 'height', 'hourInterval', 'htmlAttributes', 'interval', 'locale', 'maxTime', 'minTime', 'minutesInterval', 'popupHeight', 'popupWidth', 'readOnly', 'secondsInterval', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'value', 'width'], ['value'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejTimePicker extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}

