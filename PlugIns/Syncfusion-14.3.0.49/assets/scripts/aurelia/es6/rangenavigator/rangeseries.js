import {inlineView, customElement, constants, generateBindables} from '../common/common';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}range-series`)
@generateBindables('series', ['xName', 'yName', 'dataSource', 'type', 'enableAnimation', 'fill'])

export class RangeSeries {
}

