import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.treeview.min';

@customAttribute(`${constants.attributePrefix}tree-view`)
@generateBindables('ejTreeView', ['allowDragAndDrop', 'allowDragAndDropAcrossControl', 'allowDropSibling', 'allowDropChild', 'allowEditing', 'allowKeyboardNavigation', 'autoCheck', 'autoCheckParentNode', 'checkedNodes', 'cssClass', 'enableAnimation', 'enabled', 'enableMultipleExpand', 'enablePersistence', 'enableRTL', 'expandedNodes', 'expandOn', 'fields', 'height', 'htmlAttributes', 'loadOnDemand', 'selectedNode', 'showCheckbox', 'sortSettings', 'template', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejTreeView extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

