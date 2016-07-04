System.register(['../common/common', 'ej.navigationdrawer.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejNavigationDrawer;

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
    }, function (_ejNavigationdrawerMin) {}],
    execute: function () {
      ejNavigationDrawer = (function (_WidgetBase) {
        _inherits(ejNavigationDrawer, _WidgetBase);

        function ejNavigationDrawer(element) {
          _classCallCheck(this, _ejNavigationDrawer);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejNavigationDrawer = ejNavigationDrawer;
        ejNavigationDrawer = inject(Element)(ejNavigationDrawer) || ejNavigationDrawer;
        ejNavigationDrawer = generateBindables('ejNavigationDrawer', ['contentId', 'cssClass', 'direction', 'enableListView', 'items', 'listViewSettings', 'position', 'targetId', 'type', 'width'])(ejNavigationDrawer) || ejNavigationDrawer;
        ejNavigationDrawer = inlineView('<template><content></content></template>')(ejNavigationDrawer) || ejNavigationDrawer;
        ejNavigationDrawer = customElement(constants.elementPrefix + 'navigation-drawer')(ejNavigationDrawer) || ejNavigationDrawer;
        return ejNavigationDrawer;
      })(WidgetBase);

      _export('ejNavigationDrawer', ejNavigationDrawer);
    }
  };
});