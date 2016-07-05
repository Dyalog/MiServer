import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.pivotschemadesigner.min';

@customElement(`${constants.elementPrefix}pivot-schema-designer`)
@inlineView('<template><content></content></template>')
@generateBindables('ejPivotSchemaDesigner', ['cssClass', 'customObject', 'enableWrapper', 'filters', 'height', 'locale', 'pivotCalculations', 'pivotColumns', 'pivotControl', 'pivotRows', 'pivotTableFields', 'serviceMethod', 'url', 'width'])
@inject(Element)
export class ejPivotSchemaDesigner extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

