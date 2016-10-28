import {inject, WidgetBase, constants, generateBindables, inlineView, customElement, children} from '../common/common';

import 'datavisualization/ej.rangenavigator.min';

@customElement(`${constants.elementPrefix}range-navigator`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejRangeNavigator', ['allowSnapping', 'border', 'dataSource', 'series', 'enableDeferredUpdate', 'enableScrollbar', 'enableRTL', 'isResponsive', 'labelSettings', 'locale', 'navigatorStyleSettings', 'padding', 'rangePadding', 'rangeSettings', 'selectedData', 'selectedRangeSettings', 'scrollRangeSettings', 'sizeSettings', 'theme', 'tooltipSettings', 'valueAxisSettings', 'valueType', 'xName', 'yName'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejRangeNavigator extends WidgetBase {
  @children(`${constants.elementPrefix}range-series`) series = [];
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'series';
  }
}

