import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.rating.min';

@customAttribute(`${constants.attributePrefix}rating`)
@generateBindables('ejRating', ['allowReset', 'cssClass', 'enabled', 'enablePersistence', 'height', 'incrementStep', 'maxValue', 'minValue', 'orientation', 'precision', 'readOnly', 'shapeHeight', 'shapeWidth', 'showTooltip', 'value', 'width'], ['value'])
@inject(Element)
export class ejRating extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

