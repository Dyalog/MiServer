define(['exports', '../common/common', 'ej.fileexplorer.min'], function (exports, _commonCommon, _ejFileexplorerMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejFileExplorer = (function (_WidgetBase) {
    _inherits(ejFileExplorer, _WidgetBase);

    function ejFileExplorer(element) {
      _classCallCheck(this, _ejFileExplorer);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejFileExplorer = ejFileExplorer;
    ejFileExplorer = _commonCommon.inject(Element)(ejFileExplorer) || ejFileExplorer;
    ejFileExplorer = _commonCommon.generateBindables('ejFileExplorer', ['ajaxAction', 'ajaxDataType', 'ajaxSettings', 'allowMultiSelection', 'cssClass', 'enableResize', 'enableRTL', 'fileTypes', 'filterSettings', 'gridSettings', 'height', 'isResponsive', 'layout', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'path', 'selectedFolder', 'selectedItems', 'showCheckbox', 'showContextMenu', 'showFooter', 'showRoundedCorner', 'showThumbnail', 'showToolbar', 'showNavigationPane', 'tools', 'toolsList', 'uploadSettings', 'width'], [], { 'enableRTL': 'enableRtl' })(ejFileExplorer) || ejFileExplorer;
    ejFileExplorer = _commonCommon.inlineView('<template><content></content></template>')(ejFileExplorer) || ejFileExplorer;
    ejFileExplorer = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'file-explorer')(ejFileExplorer) || ejFileExplorer;
    return ejFileExplorer;
  })(_commonCommon.WidgetBase);

  exports.ejFileExplorer = ejFileExplorer;
});