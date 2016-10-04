import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.pivottreemap.min';

@customElement(`${constants.elementPrefix}pivot-tree-map`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotTreeMap', ['cssClass', 'currentReport', 'dataSource', 'customObject', 'enableRTL', 'isResponsive', 'locale', 'operationalMode', 'serviceMethodSettings', 'url'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPivotTreeMap extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

