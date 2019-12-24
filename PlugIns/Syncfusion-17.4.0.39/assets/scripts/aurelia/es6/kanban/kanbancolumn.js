import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {inlineView, customElement} from '../common/common';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}kanban-column`)

@generateBindables('columns', ['headerText', 'totalCount', 'totalCount', 'key', 'allowDrop', 'allowDrag', 'isCollapsed', 'constraints', 'constraints', 'constraints', 'constraints', 'headerTemplate', 'width', 'visible', 'showAddButton'])

export class KanbanColumn {
}

