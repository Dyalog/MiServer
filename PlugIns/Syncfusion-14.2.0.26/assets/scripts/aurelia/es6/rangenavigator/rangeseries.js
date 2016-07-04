import {inlineView, customElement, constants, generateBindables} from '../common/common';

@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}range-series`)
@generateBindables('series', [])

export class RangeSeries {
}

