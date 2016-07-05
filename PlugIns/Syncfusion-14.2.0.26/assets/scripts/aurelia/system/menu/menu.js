System.register(['../common/common', 'ej.menu.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejMenu;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejMenuMin) {}],
    execute: function () {
      ejMenu = (function (_WidgetBase) {
        _inherits(ejMenu, _WidgetBase);

        function ejMenu(element) {
          _classCallCheck(this, _ejMenu);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejMenu = ejMenu;
        ejMenu = inject(Element)(ejMenu) || ejMenu;
        ejMenu = generateBindables('ejMenu', ['animationType', 'contextMenuTarget', 'cssClass', 'enableAnimation', 'enableCenterAlign', 'enabled', 'enableRTL', 'enableSeparator', 'excludeTarget', 'fields', 'height', 'htmlAttributes', 'menuType', 'openOnClick', 'orientation', 'showRootLevelArrows', 'showSubLevelArrows', 'subMenuDirection', 'titleText', 'width'], [], { 'enableRTL': 'enableRtl' })(ejMenu) || ejMenu;
        ejMenu = customAttribute(constants.attributePrefix + 'menu')(ejMenu) || ejMenu;
        return ejMenu;
      })(WidgetBase);

      _export('ejMenu', ejMenu);
    }
  };
});