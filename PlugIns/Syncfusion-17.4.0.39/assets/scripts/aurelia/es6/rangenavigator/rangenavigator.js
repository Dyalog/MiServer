import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {inject, inlineView, customElement, children} from '../common/common';

@customElement(`${constants.elementPrefix}range-navigator`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejRangeNavigator', ['allowSnapping', 'allowNextValue', 'border', 'dataSource', 'series', 'seriesSettings', 'enableDeferredUpdate', 'enableScrollbar', 'enableAutoResizing', 'enableRTL', 'isResponsive', 'labelSettings', 'locale', 'navigatorStyleSettings', 'padding', 'rangePadding', 'rangeSettings', 'selectedData', 'selectedRangeSettings', 'scrollRangeSettings', 'sizeSettings', 'theme', 'tooltipSettings', 'valueAxisSettings', 'valueType', 'xName', 'yName'], [], {'enableRTL': ['enableRtl']})
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

