'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('common/ej.scroller.min');

var ejScroller = (function (_WidgetBase) {
  _inherits(ejScroller, _WidgetBase);

  function ejScroller(element) {
    _classCallCheck(this, _ejScroller);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejScroller = ejScroller;
  ejScroller = _commonCommon.inject(Element)(ejScroller) || ejScroller;
  ejScroller = _commonCommon.generateBindables('ejScroller', ['autoHide', 'buttonSize', 'enabled', 'enablePersistence', 'enableRTL', 'enableTouchScroll', 'height', 'scrollerSize', 'scrollLeft', 'scrollOneStepBy', 'scrollTop', 'targetPane', 'width'], ['scrollLeft', 'scrollTop'], { 'enableRTL': 'enableRtl' })(ejScroller) || ejScroller;
  ejScroller = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'scroller')(ejScroller) || ejScroller;
  return ejScroller;
})(_commonCommon.WidgetBase);

exports.ejScroller = ejScroller;