import {inlineView, customElement, children, constants, generateBindables, Util} from '../common/common';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}item`)
@generateBindables('items', ['imageUrl', 'text', 'enabled', 'click', 'badge', 'type', 'sliderSettings', 'items'])

export class Item {
  @children(`${constants.elementPrefix}template`) template = [];
  setTemplates() {
    if (this.template[0]) {
      let util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  }
}

