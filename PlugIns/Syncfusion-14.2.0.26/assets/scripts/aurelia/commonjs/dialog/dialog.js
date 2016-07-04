'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.dialog.min');

var ejDialog = (function (_WidgetBase) {
  _inherits(ejDialog, _WidgetBase);

  function ejDialog(element) {
    _classCallCheck(this, _ejDialog);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejDialog = ejDialog;
  ejDialog = _commonCommon.inject(Element)(ejDialog) || ejDialog;
  ejDialog = _commonCommon.generateBindables('ejDialog', ['actionButtons', 'allowDraggable', 'allowKeyboardNavigation', 'animation', 'closeOnEscape', 'containment', 'contentType', 'contentUrl', 'cssClass', 'enableAnimation', 'enabled', 'enableModal', 'enablePersistence', 'enableResize', 'enableRTL', 'faviconCSS', 'height', 'isResponsive', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'position', 'showHeader', 'showOnInit', 'showRoundedCorner', 'target', 'title', 'tooltip', 'width', 'zIndex'], [], { 'enableRTL': 'enableRtl' })(ejDialog) || ejDialog;
  ejDialog = _commonCommon.inlineView('<template><content></content></template>')(ejDialog) || ejDialog;
  ejDialog = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'dialog')(ejDialog) || ejDialog;
  return ejDialog;
})(_commonCommon.WidgetBase);

exports.ejDialog = ejDialog;