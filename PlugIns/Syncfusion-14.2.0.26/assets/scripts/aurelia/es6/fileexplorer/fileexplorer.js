import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.fileexplorer.min';

@customElement(`${constants.elementPrefix}file-explorer`)
@inlineView('<template><content></content></template>')
@generateBindables('ejFileExplorer', ['ajaxAction', 'ajaxDataType', 'ajaxSettings', 'allowMultiSelection', 'cssClass', 'enableResize', 'enableRTL', 'fileTypes', 'filterSettings', 'gridSettings', 'height', 'isResponsive', 'layout', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'path', 'selectedFolder', 'selectedItems', 'showCheckbox', 'showContextMenu', 'showFooter', 'showRoundedCorner', 'showThumbnail', 'showToolbar', 'showNavigationPane', 'tools', 'toolsList', 'uploadSettings', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejFileExplorer extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

