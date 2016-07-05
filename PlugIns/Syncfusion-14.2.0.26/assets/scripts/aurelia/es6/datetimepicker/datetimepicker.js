import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.datetimepicker.min';

@customAttribute(`${constants.attributePrefix}date-time-picker`)
@generateBindables('ejDateTimePicker', ['buttonText', 'cssClass', 'dateTimeFormat', 'dayHeaderFormat', 'depthLevel', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'headerFormat', 'height', 'htmlAttributes', 'interval', 'locale', 'maxDateTime', 'minDateTime', 'popupPosition', 'readOnly', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'startDay', 'startLevel', 'stepMonths', 'timeDisplayFormat', 'timeDrillDown', 'timePopupWidth', 'validationMessage', 'validationRules', 'value', 'width'], ['value'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejDateTimePicker extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}

