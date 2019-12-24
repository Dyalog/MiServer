import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

@customElement(`${constants.elementPrefix}pager`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPager', ['customText', 'currentPage', 'cssClass', 'enabled', 'enableExternalMessage', 'enableQueryString', 'enableRTL', 'externalMessage', 'isResponsive', 'locale', 'pageCount', 'pageSize', 'pageSizeList', 'pageSizeMessage', 'template', 'totalPages', 'totalRecordsCount', 'showPageInfo'], [], {'enableRTL': ['enableRtl']})
@inject(Element)
export class ejPager extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

