import {inlineView, customElement, constants, generateBindables} from '../common/common';

@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}schedule-resource`)
@generateBindables('resources', ['field', 'title', 'name', 'allowMultiple', 'resourceSettings'])

export class ScheduleResource {
}

