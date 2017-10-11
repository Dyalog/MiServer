import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

import 'syncfusion-javascript/Scripts/ej/web/ej.uploadbox.min';

@customElement(`${constants.elementPrefix}uploadbox`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejUploadbox', ['allowDragAndDrop', 'asyncUpload', 'autoUpload', 'buttonText', 'cssClass', 'customFileDetails', 'dialogAction', 'dialogPosition', 'dialogText', 'dropAreaText', 'dropAreaHeight', 'dropAreaWidth', 'enabled', 'enableRTL', 'extensionsAllow', 'extensionsDeny', 'fileSize', 'height', 'htmlAttributes', 'locale', 'multipleFilesSelection', 'pushFile', 'removeUrl', 'saveUrl', 'showBrowseButton', 'showFileDetails', 'showRoundedCorner', 'uploadName', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejUploadbox extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

