import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.pivotgauge.min';

@customElement(`${constants.elementPrefix}pivot-gauge`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotGauge', ['backgroundColor', 'columnsCount', 'cssClass', 'customObject', 'dataSource', 'enableTooltip', 'enableRTL', 'isResponsive', 'labelFormatSettings', 'locale', 'rowsCount', 'scales', 'serviceMethodSettings', 'showHeaderLabel', 'url'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPivotGauge extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

