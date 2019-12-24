import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {inject, inlineView, customElement, children} from '../common/common';

@customElement(`${constants.elementPrefix}chart`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejChart', ['annotations', 'background', 'backGroundImageUrl', 'border', 'exportSettings', 'chartArea', 'columnDefinitions', 'commonSeriesOptions', 'selectedDataPointIndexes', 'crosshair', 'depth', 'enable3D', 'enableCanvasRendering', 'initSeriesRender', 'enableRotation', 'indicators', 'isResponsive', 'legend', 'locale', 'palette', 'margin', 'perspectiveAngle', 'primaryXAxis', 'axes', 'primaryYAxis', 'rotation', 'rowDefinitions', 'series', 'sideBySideSeriesPlacement', 'size', 'theme', 'tilt', 'title', 'wallSize', 'zooming'])
@inject(Element)
export class ejChart extends WidgetBase {
  @children(`${constants.elementPrefix}series`) series = [];
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'series';
  }
}

