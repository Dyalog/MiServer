import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/web/ej.pager.min';

@customElement(`${constants.elementPrefix}pager`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPager', ['customText', 'currentPage', 'enableExternalMessage', 'enableQueryString', 'enableRTL', 'externalMessage', 'locale', 'pageCount', 'pageSize', 'pageSizeList', 'totalPages', 'totalRecordsCount', 'showPageInfo'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPager extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

