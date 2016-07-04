define(['exports', '../common/common', 'ej.menu.min'], function (exports, _commonCommon, _ejMenuMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejMenu = (function (_WidgetBase) {
    _inherits(ejMenu, _WidgetBase);

    function ejMenu(element) {
      _classCallCheck(this, _ejMenu);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejMenu = ejMenu;
    ejMenu = _commonCommon.inject(Element)(ejMenu) || ejMenu;
    ejMenu = _commonCommon.generateBindables('ejMenu', ['animationType', 'contextMenuTarget', 'cssClass', 'enableAnimation', 'enableCenterAlign', 'enabled', 'enableRTL', 'enableSeparator', 'excludeTarget', 'fields', 'height', 'htmlAttributes', 'menuType', 'openOnClick', 'orientation', 'showRootLevelArrows', 'showSubLevelArrows', 'subMenuDirection', 'titleText', 'width'], [], { 'enableRTL': 'enableRtl' })(ejMenu) || ejMenu;
    ejMenu = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'menu')(ejMenu) || ejMenu;
    return ejMenu;
  })(_commonCommon.WidgetBase);

  exports.ejMenu = ejMenu;
});