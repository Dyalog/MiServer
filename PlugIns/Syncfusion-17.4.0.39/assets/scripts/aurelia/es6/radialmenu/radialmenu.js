import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {inject, inlineView, customElement, children, TemplatingEngine} from '../common/common';
import {TemplateProcessor} from '../common/template-processor';

@customElement(`${constants.elementPrefix}radial-menu`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'items', 'radius', 'targetElementId', 'position'])
@inject(Element, TemplatingEngine)
export class ejRadialMenu extends WidgetBase {
  @children(`${constants.elementPrefix}item`) items = [];
  constructor(element, templateEngine) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'items';
    this.templateProcessor = new TemplateProcessor(this, templateEngine);
    this.templateProcessor.initTemplate();
  }
}

