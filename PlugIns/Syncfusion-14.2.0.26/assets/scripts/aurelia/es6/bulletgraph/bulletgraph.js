import {inject, WidgetBase, constants, generateBindables, inlineView, customElement, children} from '../common/common';

import 'datavisualization/ej.bulletgraph.min';

@customElement(`${constants.elementPrefix}bullet-graph`)
@inlineView('<template><content></content></template>')
@generateBindables('ejBulletGraph', ['applyRangeStrokeToLabels', 'applyRangeStrokeToTicks', 'captionSettings', 'comparativeMeasureValue', 'enableAnimation', 'flowDirection', 'height', 'isResponsive', 'orientation', 'qualitativeRanges', 'qualitativeRangeSize', 'quantitativeScaleLength', 'quantitativeScaleSettings', 'theme', 'tooltipSettings', 'value', 'width'])
@inject(Element)
export class ejBulletGraph extends WidgetBase {
  @children(`${constants.elementPrefix}qualitative-range`) qualitativeRanges
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'qualitativeRanges';
  }
}

