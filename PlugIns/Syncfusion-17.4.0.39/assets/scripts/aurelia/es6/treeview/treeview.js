import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customAttribute, inject} from '../common/common';

@customAttribute(`${constants.attributePrefix}tree-view`)
@generateBindables('ejTreeView', ['allowDragAndDrop', 'allowDragAndDropAcrossControl', 'allowDropSibling', 'allowDropChild', 'allowEditing', 'allowKeyboardNavigation', 'allowMultiSelection', 'autoCheck', 'autoCheckParentNode', 'checkedNodes', 'cssClass', 'enableAnimation', 'enabled', 'enableMultipleExpand', 'enablePersistence', 'enableRTL', 'expandedNodes', 'expandOn', 'fields', 'fullRowSelect', 'height', 'htmlAttributes', 'loadOnDemand', 'selectedNode', 'selectedNodes', 'showCheckbox', 'sortSettings', 'template', 'width'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejTreeView extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

