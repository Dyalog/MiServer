import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.diagram.min';

@customElement(`${constants.elementPrefix}symbol-palette`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSymbolPalette', ['allowDrag', 'cssClass', 'defaultSettings', 'diagramId', 'headerHeight', 'height', 'paletteItemHeight', 'paletteItemWidth', 'palettes', 'previewHeight', 'previewOffset', 'previewWidth', 'showPaletteItemText', 'width'])
@inject(Element)
export class ejSymbolPalette extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

