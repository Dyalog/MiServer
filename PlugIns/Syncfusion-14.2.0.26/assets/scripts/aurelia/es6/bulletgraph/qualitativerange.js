import {inlineView, customElement, constants, generateBindables} from '../common/common';

@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}qualitative-range`)
@generateBindables('qualitativeRanges', ['rangeEnd', 'rangeOpacity', 'rangeStroke'])

export class QualitativeRange {
}

