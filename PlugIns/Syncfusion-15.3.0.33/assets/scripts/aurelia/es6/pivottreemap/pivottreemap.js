import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/web/ej.pivottreemap.min';

@customElement(`${constants.elementPrefix}pivot-tree-map`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotTreeMap', ['cssClass', 'dataSource', 'customObject', 'isResponsive', 'locale', 'operationalMode', 'serviceMethodSettings', 'url'])
@inject(Element)
export class ejPivotTreeMap extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

