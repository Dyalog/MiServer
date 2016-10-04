import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'datavisualization/ej.sparkline.min';

@customElement(`${constants.elementPrefix}sparkline`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejSparkline', ['background', 'fill', 'stroke', 'border', 'width', 'opacity', 'highPointColor', 'lowPointColor', 'startPointColor', 'endPointColor', 'negativePointColor', 'rangeBandSettings', 'palette', 'isResponsive', 'enableCanvasRendering', 'dataSource', 'xName', 'yName', 'padding', 'type', 'theme', 'tooltip', 'markerSettings', 'size', 'axisLineSettings'])
@inject(Element)
export class ejSparkline extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

