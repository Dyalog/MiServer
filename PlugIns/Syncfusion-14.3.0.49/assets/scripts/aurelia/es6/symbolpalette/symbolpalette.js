import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'datavisualization/ej.diagram.min';

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

