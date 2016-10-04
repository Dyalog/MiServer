import {inject, WidgetBase, constants, generateBindables, inlineView, customElement, children} from '../common/common';

import 'ej.kanban.min';

@customElement(`${constants.elementPrefix}kanban`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejKanban', ['allowDragAndDrop', 'allowTitle', 'swimlaneSettings', 'allowToggleColumn', 'allowSearching', 'allowFiltering', 'allowSelection', 'allowHover', 'allowKeyboardNavigation', 'allowScrolling', 'allowPrinting', 'contextMenuSettings', 'columns', 'cardSettings', 'customToolbarItems', 'cssClass', 'dataSource', 'enableTouch', 'enableRTL', 'enableTotalCount', 'editSettings', 'fields', 'keyField', 'isResponsive', 'minWidth', 'filterSettings', 'query', 'keySettings', 'scrollSettings', 'searchSettings', 'selectionType', 'stackedHeaderRows', 'tooltipSettings', 'workflows', 'locale'], ['dataSource'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejKanban extends WidgetBase {
  @children(`${constants.elementPrefix}kanban-column`) columns = [];
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'columns';
  }
}

