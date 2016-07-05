import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'datavisualization/ej.sparkline.min';

@customElement(`${constants.elementPrefix}sparkline`)
@inlineView('<template><content></content></template>')
@generateBindables('ejSparkline', ['background', 'fill', 'stroke', 'strokeWidth', 'opacity', 'bandOpacity', 'highPointColor', 'lowPointColor', 'startPointColor', 'endPointColor', 'negativePointColor', 'startRange', 'endRange', 'enableCanvasRendering', 'dataSource', 'xName', 'yName', 'padding', 'type', 'theme', 'tooltip', 'markerSettings', 'size', 'border', 'showAxis', 'axisLine'])
@inject(Element)
export class ejSparkline extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

