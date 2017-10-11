import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {inlineView, customElement} from '../common/common';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}range-series`)
@generateBindables('series', ['xName', 'yName', 'dataSource', 'type', 'enableAnimation', 'fill'])

export class RangeSeries {
}

