define(['exports', '../common/common', 'ej.uploadbox.min'], function (exports, _commonCommon, _ejUploadboxMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejUploadbox = (function (_WidgetBase) {
    _inherits(ejUploadbox, _WidgetBase);

    function ejUploadbox(element) {
      _classCallCheck(this, _ejUploadbox);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejUploadbox = ejUploadbox;
    ejUploadbox = _commonCommon.inject(Element)(ejUploadbox) || ejUploadbox;
    ejUploadbox = _commonCommon.generateBindables('ejUploadbox', ['allowDragAndDrop', 'asyncUpload', 'autoUpload', 'buttonText', 'cssClass', 'customFileDetails', 'dialogAction', 'dialogPosition', 'dialogText', 'dropAreaText', 'dropAreaHeight', 'dropAreaWidth', 'enabled', 'enableRTL', 'extensionsAllow', 'extensionsDeny', 'fileSize', 'height', 'locale', 'multipleFilesSelection', 'pushFile', 'removeUrl', 'saveUrl', 'showBrowseButton', 'showFileDetails', 'uploadName', 'width'], [], { 'enableRTL': 'enableRtl' })(ejUploadbox) || ejUploadbox;
    ejUploadbox = _commonCommon.inlineView('<template><content></content></template>')(ejUploadbox) || ejUploadbox;
    ejUploadbox = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'uploadbox')(ejUploadbox) || ejUploadbox;
    return ejUploadbox;
  })(_commonCommon.WidgetBase);

  exports.ejUploadbox = ejUploadbox;
});