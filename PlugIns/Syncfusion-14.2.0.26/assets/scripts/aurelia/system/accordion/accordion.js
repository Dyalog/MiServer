System.register(['../common/common', 'ej.accordion.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejAccordion;

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
    }, function (_ejAccordionMin) {}],
    execute: function () {
      ejAccordion = (function (_WidgetBase) {
        _inherits(ejAccordion, _WidgetBase);

        function ejAccordion(element) {
          _classCallCheck(this, _ejAccordion);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejAccordion = ejAccordion;
        ejAccordion = inject(Element)(ejAccordion) || ejAccordion;
        ejAccordion = generateBindables('ejAccordion', ['ajaxSettings', 'allowKeyboardNavigation', 'collapseSpeed', 'collapsible', 'cssClass', 'customIcon', 'disabledItems', 'enableAnimation', 'enabled', 'enabledItems', 'enableMultipleOpen', 'enablePersistence', 'enableRTL', 'events', 'expandSpeed', 'headerSize', 'height', 'heightAdjustMode', 'htmlAttributes', 'selectedItemIndex', 'selectedItems', 'showCloseButton', 'showRoundedCorner', 'width'], [], { 'enableRTL': 'enableRtl' })(ejAccordion) || ejAccordion;
        ejAccordion = inlineView('<template><content></content></template>')(ejAccordion) || ejAccordion;
        ejAccordion = customElement(constants.elementPrefix + 'accordion')(ejAccordion) || ejAccordion;
        return ejAccordion;
      })(WidgetBase);

      _export('ejAccordion', ejAccordion);
    }
  };
});