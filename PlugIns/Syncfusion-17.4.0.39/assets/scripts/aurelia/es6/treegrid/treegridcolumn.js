import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {inlineView, customElement, children} from '../common/common';
import {Util} from '../common/util';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}tree-grid-column`)

@generateBindables('columns', ['allowCellSelection', 'allowEditing', 'allowFiltering', 'allowFilteringBlankContent', 'allowFreezing', 'allowSorting', 'angularTemplate', 'clipMode', 'commands', 'commands', 'commands', 'displayAsCheckbox', 'dropdownData', 'editParams', 'editTemplate', 'editType', 'field', 'filterEditType', 'filterType', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isTemplateColumn', 'priority', 'showCheckbox', 'showInColumnChooser', 'template', 'templateID', 'textAlign', 'tooltip', 'validationRules', 'visible', 'width'], [], {'headerTemplateID': ['headerTemplateId', 'headerTemplateID'], 'templateID': ['templateId', 'templateID']})

export class TreeGridColumn {
  @children(`${constants.elementPrefix}template`) angularTemplate = [];
  setTemplates() {
    if (this.angularTemplate[0]) {
      let util = new Util();
      this[util.getBindablePropertyName('angularTemplate')] = this.angularTemplate[0].template;
    }
  }
}

