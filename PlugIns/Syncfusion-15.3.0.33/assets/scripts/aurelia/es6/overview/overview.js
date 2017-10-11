import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.diagram.min';

@customElement(`${constants.elementPrefix}overview`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejOverview', ['sourceID', 'height', 'width'], [], {'sourceID': 'sourceId'})
@inject(Element)
export class ejOverview extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

