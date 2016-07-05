define(['exports', '../common/common', 'ej.tab.min'], function (exports, _commonCommon, _ejTabMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejTab = (function (_WidgetBase) {
    _inherits(ejTab, _WidgetBase);

    function ejTab(element) {
      _classCallCheck(this, _ejTab);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejTab = ejTab;
    ejTab = _commonCommon.inject(Element)(ejTab) || ejTab;
    ejTab = _commonCommon.generateBindables('ejTab', ['ajaxSettings', 'allowKeyboardNavigation', 'collapsible', 'cssClass', 'disabledItemIndex', 'enableAnimation', 'enabled', 'enabledItemIndex', 'enablePersistence', 'enableRTL', 'enableTabScroll', 'events', 'headerPosition', 'headerSize', 'height', 'heightAdjustMode', 'hiddenItemIndex', 'htmlAttributes', 'idPrefix', 'selectedItemIndex', 'showCloseButton', 'showReloadIcon', 'showRoundedCorner', 'width'], ['selectedItemIndex'], { 'enableRTL': 'enableRtl' })(ejTab) || ejTab;
    ejTab = _commonCommon.inlineView('<template><content></content></template>')(ejTab) || ejTab;
    ejTab = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'tab')(ejTab) || ejTab;
    return ejTab;
  })(_commonCommon.WidgetBase);

  exports.ejTab = ejTab;
});