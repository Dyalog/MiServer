import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'datavisualization/ej.diagram.min';

@customElement(`${constants.elementPrefix}overview`)
@inlineView('<template><content></content></template>')
@generateBindables('ejOverview', ['sourceID', 'height', 'width'], [], {'sourceID': 'sourceId'})
@inject(Element)
export class ejOverview extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

