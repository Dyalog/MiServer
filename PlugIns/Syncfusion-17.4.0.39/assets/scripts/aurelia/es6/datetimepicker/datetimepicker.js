import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customAttribute, inject} from '../common/common';

@customAttribute(`${constants.attributePrefix}date-time-picker`)
    @generateBindables('ejDateTimePicker', ['allowEdit', 'buttonText', 'blackoutDates', 'cssClass', 'dateTimeFormat', 'dayHeaderFormat', 'depthLevel', 'disableTimeRanges', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'headerFormat', 'height', 'htmlAttributes', 'interval', 'locale', 'maxDateTime', 'minDateTime', 'popupPosition', 'readOnly', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'timeDisplayFormat', 'timeDrillDown', 'timePopupWidth', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejDateTimePicker extends WidgetBase {
  constructor(element) {
    super();
    this.isEditor = true;
    this.element = element;
  }
}

