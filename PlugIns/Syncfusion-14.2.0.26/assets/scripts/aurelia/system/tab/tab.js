System.register(['../common/common', 'ej.tab.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejTab;

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
    }, function (_ejTabMin) {}],
    execute: function () {
      ejTab = (function (_WidgetBase) {
        _inherits(ejTab, _WidgetBase);

        function ejTab(element) {
          _classCallCheck(this, _ejTab);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejTab = ejTab;
        ejTab = inject(Element)(ejTab) || ejTab;
        ejTab = generateBindables('ejTab', ['ajaxSettings', 'allowKeyboardNavigation', 'collapsible', 'cssClass', 'disabledItemIndex', 'enableAnimation', 'enabled', 'enabledItemIndex', 'enablePersistence', 'enableRTL', 'enableTabScroll', 'events', 'headerPosition', 'headerSize', 'height', 'heightAdjustMode', 'hiddenItemIndex', 'htmlAttributes', 'idPrefix', 'selectedItemIndex', 'showCloseButton', 'showReloadIcon', 'showRoundedCorner', 'width'], ['selectedItemIndex'], { 'enableRTL': 'enableRtl' })(ejTab) || ejTab;
        ejTab = inlineView('<template><content></content></template>')(ejTab) || ejTab;
        ejTab = customElement(constants.elementPrefix + 'tab')(ejTab) || ejTab;
        return ejTab;
      })(WidgetBase);

      _export('ejTab', ejTab);
    }
  };
});