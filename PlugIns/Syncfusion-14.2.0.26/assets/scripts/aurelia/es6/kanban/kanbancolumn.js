import {inlineView, customElement, constants, generateBindables} from '../common/common';

@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}kanban-column`)
@generateBindables('columns', ['headerText', 'key', 'isCollapsed', 'constraints', 'headerTemplate', 'width', 'visible', 'showAddButton'])

export class KanbanColumn {
}

