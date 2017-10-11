import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {inlineView, customElement, children} from '../common/common';
import {Util} from '../common/util';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}item`)
@generateBindables('items', ['imageUrl', 'prependTo', 'text', 'enabled', 'click', 'badge', 'type', 'sliderSettings', 'items'])

export class Item {
  @children(`${constants.elementPrefix}template`) template = [];
  setTemplates() {
    if (this.template[0]) {
      let util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  }
}

