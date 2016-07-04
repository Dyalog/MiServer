System.register(['../common/common', 'ej.dialog.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejDialog;

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
    }, function (_ejDialogMin) {}],
    execute: function () {
      ejDialog = (function (_WidgetBase) {
        _inherits(ejDialog, _WidgetBase);

        function ejDialog(element) {
          _classCallCheck(this, _ejDialog);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejDialog = ejDialog;
        ejDialog = inject(Element)(ejDialog) || ejDialog;
        ejDialog = generateBindables('ejDialog', ['actionButtons', 'allowDraggable', 'allowKeyboardNavigation', 'animation', 'closeOnEscape', 'containment', 'contentType', 'contentUrl', 'cssClass', 'enableAnimation', 'enabled', 'enableModal', 'enablePersistence', 'enableResize', 'enableRTL', 'faviconCSS', 'height', 'isResponsive', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'position', 'showHeader', 'showOnInit', 'showRoundedCorner', 'target', 'title', 'tooltip', 'width', 'zIndex'], [], { 'enableRTL': 'enableRtl' })(ejDialog) || ejDialog;
        ejDialog = inlineView('<template><content></content></template>')(ejDialog) || ejDialog;
        ejDialog = customElement(constants.elementPrefix + 'dialog')(ejDialog) || ejDialog;
        return ejDialog;
      })(WidgetBase);

      _export('ejDialog', ejDialog);
    }
  };
});