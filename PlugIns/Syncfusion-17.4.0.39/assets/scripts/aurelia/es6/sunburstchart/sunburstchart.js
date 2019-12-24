import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {inject, inlineView, customElement, children} from '../common/common';

@customElement(`${constants.elementPrefix}sunburst-chart`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSunburstChart', ['background', 'valueMemberPath', 'border', 'segmentBorder', 'dataSource', 'palette', 'parentNode', 'xName', 'yName', 'isResponsive', 'size', 'visible', 'tooltip', 'points', 'startAngle', 'endAngle', 'radius', 'innerRadius', 'dataLabelSettings', 'title', 'highlightSettings', 'selectionSettings', 'levels', 'legend', 'theme', 'margin', 'enableAnimation', 'opacity', 'zoomSettings', 'animationType'])
@inject(Element)
export class ejSunburstChart extends WidgetBase {
  @children(`${constants.elementPrefix}sunburst-levels`) levels = [];
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'levels';
  }
}

