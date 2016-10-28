import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.rotator.min';

@customAttribute(`${constants.attributePrefix}rotator`)
@generateBindables('ejRotator', ['allowKeyboardNavigation', 'animationSpeed', 'animationType', 'circularMode', 'cssClass', 'dataSource', 'delay', 'displayItemsCount', 'enableAutoPlay', 'enabled', 'enableRTL', 'fields', 'frameSpace', 'isResponsive', 'navigateSteps', 'orientation', 'pagerPosition', 'query', 'showCaption', 'showNavigateButton', 'showPager', 'showPlayButton', 'showThumbnail', 'slideHeight', 'slideWidth', 'startIndex', 'stopOnHover', 'template', 'thumbnailSourceID'], [], {'enableRTL': 'enableRtl', 'thumbnailSourceID': 'thumbnailSourceId'})
@inject(Element)
export class ejRotator extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

