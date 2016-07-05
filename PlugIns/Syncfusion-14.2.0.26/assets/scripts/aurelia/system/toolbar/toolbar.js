System.register(['../common/common', 'ej.toolbar.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejToolbar;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejToolbarMin) {}],
    execute: function () {
      ejToolbar = (function (_WidgetBase) {
        _inherits(ejToolbar, _WidgetBase);

        function ejToolbar(element) {
          _classCallCheck(this, _ejToolbar);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejToolbar = ejToolbar;
        ejToolbar = inject(Element)(ejToolbar) || ejToolbar;
        ejToolbar = generateBindables('ejToolbar', ['cssClass', 'dataSource', 'enabled', 'enableRTL', 'enableSeparator', 'fields', 'height', 'hide', 'isResponsive', 'orientation', 'query', 'showRoundedCorner', 'targetID', 'width'], [], { 'enableRTL': 'enableRtl', 'targetID': 'targetId' })(ejToolbar) || ejToolbar;
        ejToolbar = customAttribute(constants.attributePrefix + 'toolbar')(ejToolbar) || ejToolbar;
        return ejToolbar;
      })(WidgetBase);

      _export('ejToolbar', ejToolbar);
    }
  };
});