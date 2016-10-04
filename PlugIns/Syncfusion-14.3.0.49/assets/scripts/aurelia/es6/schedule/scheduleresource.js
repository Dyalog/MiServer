import {inlineView, customElement, constants, generateBindables} from '../common/common';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}schedule-resource`)
@generateBindables('resources', ['field', 'title', 'name', 'allowMultiple', 'resourceSettings'])

export class ScheduleResource {
}

