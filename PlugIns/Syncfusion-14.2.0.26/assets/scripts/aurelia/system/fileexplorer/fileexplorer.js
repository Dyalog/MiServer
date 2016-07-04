System.register(['../common/common', 'ej.fileexplorer.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejFileExplorer;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customElement = _commonCommon.customElement;
      inlineView = _commonCommon.inlineView;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejFileexplorerMin) {}],
    execute: function () {
      ejFileExplorer = (function (_WidgetBase) {
        _inherits(ejFileExplorer, _WidgetBase);

        function ejFileExplorer(element) {
          _classCallCheck(this, _ejFileExplorer);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejFileExplorer = ejFileExplorer;
        ejFileExplorer = inject(Element)(ejFileExplorer) || ejFileExplorer;
        ejFileExplorer = generateBindables('ejFileExplorer', ['ajaxAction', 'ajaxDataType', 'ajaxSettings', 'allowMultiSelection', 'cssClass', 'enableResize', 'enableRTL', 'fileTypes', 'filterSettings', 'gridSettings', 'height', 'isResponsive', 'layout', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'path', 'selectedFolder', 'selectedItems', 'showCheckbox', 'showContextMenu', 'showFooter', 'showRoundedCorner', 'showThumbnail', 'showToolbar', 'showNavigationPane', 'tools', 'toolsList', 'uploadSettings', 'width'], [], { 'enableRTL': 'enableRtl' })(ejFileExplorer) || ejFileExplorer;
        ejFileExplorer = inlineView('<template><content></content></template>')(ejFileExplorer) || ejFileExplorer;
        ejFileExplorer = customElement(constants.elementPrefix + 'file-explorer')(ejFileExplorer) || ejFileExplorer;
        return ejFileExplorer;
      })(WidgetBase);

      _export('ejFileExplorer', ejFileExplorer);
    }
  };
});