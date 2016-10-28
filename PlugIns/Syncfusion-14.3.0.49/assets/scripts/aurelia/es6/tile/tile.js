import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.tile.min';

@customElement(`${constants.elementPrefix}tile`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejTile', ['badge', 'caption', 'cssClass', 'enablePersistence', 'height', 'imageClass', 'imagePosition', 'imageTemplateId', 'imageUrl', 'liveTile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection', 'backgroundColor'])
@inject(Element)
export class ejTile extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

