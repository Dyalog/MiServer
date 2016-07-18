import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'datavisualization/ej.barcode.min';

@customElement(`${constants.elementPrefix}barcode`)
@inlineView('<template><content></content></template>')
@generateBindables('ejBarcode', ['barcodeToTextGapHeight', 'barHeight', 'darkBarColor', 'displayText', 'enabled', 'encodeStartStopSymbol', 'lightBarColor', 'narrowBarWidth', 'quietZone', 'symbologyType', 'text', 'textColor', 'wideBarWidth', 'xDimension'])
@inject(Element)
export class ejBarcode extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

