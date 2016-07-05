import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.rte.min';

@customAttribute(`${constants.attributePrefix}rte`)
@generateBindables('ejRTE', ['allowEditing', 'allowKeyboardNavigation', 'autoFocus', 'autoHeight', 'colorCode', 'colorPaletteColumns', 'colorPaletteRows', 'cssClass', 'enabled', 'enableHtmlEncode', 'enablePersistence', 'enableResize', 'enableRTL', 'enableXHTML', 'enableTabKeyNavigation', 'externalCSS', 'fileBrowser', 'fontName', 'fontSize', 'format', 'height', 'htmlAttributes', 'iframeAttributes', 'imageBrowser', 'isResponsive', 'locale', 'maxHeight', 'maxLength', 'maxWidth', 'minHeight', 'minWidth', 'name', 'showClearAll', 'showClearFormat', 'showCustomTable', 'showContextMenu', 'showDimensions', 'showFontOption', 'showFooter', 'showHtmlSource', 'showHtmlTagInfo', 'showToolbar', 'showCharCount', 'showWordCount', 'tableColumns', 'tableRows', 'tools', 'toolsList', 'undoStackLimit', 'value', 'validationRules', 'validationMessage', 'width', 'zoomStep'], ['value'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejRte extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

