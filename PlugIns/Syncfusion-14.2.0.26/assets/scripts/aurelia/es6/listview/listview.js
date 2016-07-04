import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.listview.min';

@customElement(`${constants.elementPrefix}list-view`)
@inlineView('<template><content></content></template>')
@generateBindables('ejListView', ['cssClass', 'dataSource', 'enableAjax', 'enableCache', 'enableCheckMark', 'enableFiltering', 'enableGroupList', 'enablePersistence', 'fieldSettings', 'headerBackButtonText', 'headerTitle', 'height', 'persistSelection', 'preventSelection', 'query', 'renderTemplate', 'selectedItemIndex', 'showHeader', 'templateId', 'width'], ['dataSource', 'selectedItemIndex'])
@inject(Element)
export class ejListView extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

