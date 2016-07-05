define(['exports', '../common/common', 'ej.navigationdrawer.min'], function (exports, _commonCommon, _ejNavigationdrawerMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejNavigationDrawer = (function (_WidgetBase) {
    _inherits(ejNavigationDrawer, _WidgetBase);

    function ejNavigationDrawer(element) {
      _classCallCheck(this, _ejNavigationDrawer);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejNavigationDrawer = ejNavigationDrawer;
    ejNavigationDrawer = _commonCommon.inject(Element)(ejNavigationDrawer) || ejNavigationDrawer;
    ejNavigationDrawer = _commonCommon.generateBindables('ejNavigationDrawer', ['contentId', 'cssClass', 'direction', 'enableListView', 'items', 'listViewSettings', 'position', 'targetId', 'type', 'width'])(ejNavigationDrawer) || ejNavigationDrawer;
    ejNavigationDrawer = _commonCommon.inlineView('<template><content></content></template>')(ejNavigationDrawer) || ejNavigationDrawer;
    ejNavigationDrawer = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'navigation-drawer')(ejNavigationDrawer) || ejNavigationDrawer;
    return ejNavigationDrawer;
  })(_commonCommon.WidgetBase);

  exports.ejNavigationDrawer = ejNavigationDrawer;
});