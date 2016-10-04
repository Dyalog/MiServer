import {inlineView, customElement, constants, generateBindables} from '../common/common';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}qualitative-range`)
@generateBindables('qualitativeRanges', ['rangeEnd', 'rangeOpacity', 'rangeStroke'])

export class QualitativeRange {
}

