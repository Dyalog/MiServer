import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.pivotschemadesigner.min';

@customElement(`${constants.elementPrefix}pivot-schema-designer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotSchemaDesigner', ['cssClass', 'customObject', 'enableWrapper', 'enableRTL', 'showKPI', 'showNamedSets', 'enableDragDrop', 'filters', 'height', 'locale', 'pivotCalculations', 'pivotColumns', 'pivotControl', 'pivotRows', 'pivotTableFields', 'serviceMethod', 'url', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPivotSchemaDesigner extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

