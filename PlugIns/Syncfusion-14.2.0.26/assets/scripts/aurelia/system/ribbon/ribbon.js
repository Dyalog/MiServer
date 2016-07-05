System.register(['../common/common', 'ej.ribbon.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejRibbon;

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
    }, function (_ejRibbonMin) {}],
    execute: function () {
      ejRibbon = (function (_WidgetBase) {
        _inherits(ejRibbon, _WidgetBase);

        function ejRibbon(element) {
          _classCallCheck(this, _ejRibbon);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejRibbon = ejRibbon;
        ejRibbon = inject(Element)(ejRibbon) || ejRibbon;
        ejRibbon = generateBindables('ejRibbon', ['allowResizing', 'buttonDefaults', 'showQAT', 'collapsePinSettings', 'expandPinSettings', 'applicationTab', 'contextualTabs', 'disabledItemIndex', 'enabledItemIndex', 'selectedItemIndex', 'tabs', 'locale', 'width'])(ejRibbon) || ejRibbon;
        ejRibbon = inlineView('<template><content></content></template>')(ejRibbon) || ejRibbon;
        ejRibbon = customElement(constants.elementPrefix + 'ribbon')(ejRibbon) || ejRibbon;
        return ejRibbon;
      })(WidgetBase);

      _export('ejRibbon', ejRibbon);
    }
  };
});