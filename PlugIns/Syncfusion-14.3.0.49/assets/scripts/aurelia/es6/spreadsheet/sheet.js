import {inlineView, customElement, constants, generateBindables} from '../common/common';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}sheet`)
@generateBindables('sheets', ['border', 'cFormatRule', 'colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'headerStyles', 'hideColumns', 'hideRows', 'mergeCells', 'primaryKey', 'query', 'rangeSettings', 'rowCount', 'rows', 'showGridlines', 'showHeader', 'showHeadings', 'startCell'])

export class Sheet {
}

