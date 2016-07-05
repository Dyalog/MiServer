import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.uploadbox.min';

@customElement(`${constants.elementPrefix}uploadbox`)
@inlineView('<template><content></content></template>')
@generateBindables('ejUploadbox', ['allowDragAndDrop', 'asyncUpload', 'autoUpload', 'buttonText', 'cssClass', 'customFileDetails', 'dialogAction', 'dialogPosition', 'dialogText', 'dropAreaText', 'dropAreaHeight', 'dropAreaWidth', 'enabled', 'enableRTL', 'extensionsAllow', 'extensionsDeny', 'fileSize', 'height', 'locale', 'multipleFilesSelection', 'pushFile', 'removeUrl', 'saveUrl', 'showBrowseButton', 'showFileDetails', 'uploadName', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejUploadbox extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

