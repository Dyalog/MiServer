import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

@customElement(`${constants.elementPrefix}pivot-gauge`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotGauge', ['columnsCount', 'cssClass', 'customObject', 'dataSource', 'enableAnimation', 'enableTooltip', 'enableRTL', 'frame', 'isResponsive', 'labelFormatSettings', 'locale', 'rowsCount', 'scales', 'serviceMethodSettings', 'showHeaderLabel', 'url', 'analysisMode', 'operationalMode', 'enableXHRCredentials'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejPivotGauge extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

