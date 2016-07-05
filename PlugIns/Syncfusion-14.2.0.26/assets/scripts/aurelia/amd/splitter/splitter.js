define(['exports', '../common/common', 'ej.splitter.min'], function (exports, _commonCommon, _ejSplitterMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejSplitter = (function (_WidgetBase) {
    _inherits(ejSplitter, _WidgetBase);

    function ejSplitter(element) {
      _classCallCheck(this, _ejSplitter);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejSplitter = ejSplitter;
    ejSplitter = _commonCommon.inject(Element)(ejSplitter) || ejSplitter;
    ejSplitter = _commonCommon.generateBindables('ejSplitter', ['allowKeyboardNavigation', 'animationSpeed', 'cssClass', 'enableAnimation', 'enableRTL', 'height', 'htmlAttributes', 'isResponsive', 'orientation', 'properties', 'width'], [], { 'enableRTL': 'enableRtl' })(ejSplitter) || ejSplitter;
    ejSplitter = _commonCommon.inlineView('<template><content></content></template>')(ejSplitter) || ejSplitter;
    ejSplitter = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'splitter')(ejSplitter) || ejSplitter;
    return ejSplitter;
  })(_commonCommon.WidgetBase);

  exports.ejSplitter = ejSplitter;
});