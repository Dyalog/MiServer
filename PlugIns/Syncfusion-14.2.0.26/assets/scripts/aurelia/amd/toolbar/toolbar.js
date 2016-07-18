define(['exports', '../common/common', 'ej.toolbar.min'], function (exports, _commonCommon, _ejToolbarMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejToolbar = (function (_WidgetBase) {
    _inherits(ejToolbar, _WidgetBase);

    function ejToolbar(element) {
      _classCallCheck(this, _ejToolbar);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejToolbar = ejToolbar;
    ejToolbar = _commonCommon.inject(Element)(ejToolbar) || ejToolbar;
    ejToolbar = _commonCommon.generateBindables('ejToolbar', ['cssClass', 'dataSource', 'enabled', 'enableRTL', 'enableSeparator', 'fields', 'height', 'hide', 'isResponsive', 'orientation', 'query', 'showRoundedCorner', 'targetID', 'width'], [], { 'enableRTL': 'enableRtl', 'targetID': 'targetId' })(ejToolbar) || ejToolbar;
    ejToolbar = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'toolbar')(ejToolbar) || ejToolbar;
    return ejToolbar;
  })(_commonCommon.WidgetBase);

  exports.ejToolbar = ejToolbar;
});