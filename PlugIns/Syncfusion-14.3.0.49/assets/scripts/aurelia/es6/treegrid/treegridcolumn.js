import {inlineView, customElement, children, constants, generateBindables, Util} from '../common/common';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}tree-grid-column`)
@generateBindables('columns', ['allowFiltering', 'allowSorting', 'allowCellSelection', 'editType', 'field', 'filterEditType', 'headerText', 'visible', 'headerTemplateID', 'format', 'isTemplateColumn', 'headerTextAlign', 'isFrozen', 'textAlign', 'templateID', 'allowEditing', 'allowFreezing'])

export class TreeGridColumn {
  @children(`${constants.elementPrefix}template`) template = [];
  setTemplates() {
    if (this.template[0]) {
      let util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  }
}

