import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {inlineView, customElement} from '../common/common';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}sunburst-levels`)
@generateBindables('levels', ['groupMemberPath'])

export class SunburstLevels {
}

