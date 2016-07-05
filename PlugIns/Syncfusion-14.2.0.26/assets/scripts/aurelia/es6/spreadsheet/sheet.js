import {inlineView, customElement, constants, generateBindables} from '../common/common';

@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}sheet`)
@generateBindables('sheets', ['colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'headerStyles', 'primaryKey', 'query', 'rangeSettings', 'rowCount', 'sheetName', 'showGridlines', 'showHeader', 'showHeadings', 'startCell'])

export class Sheet {
}

