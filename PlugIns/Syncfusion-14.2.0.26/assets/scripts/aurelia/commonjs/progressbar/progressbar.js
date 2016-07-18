'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.progressbar.min');

var ejProgressBar = (function (_WidgetBase) {
  _inherits(ejProgressBar, _WidgetBase);

  function ejProgressBar(element) {
    _classCallCheck(this, _ejProgressBar);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejProgressBar = ejProgressBar;
  ejProgressBar = _commonCommon.inject(Element)(ejProgressBar) || ejProgressBar;
  ejProgressBar = _commonCommon.generateBindables('ejProgressBar', ['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'maxValue', 'minValue', 'percentage', 'showRoundedCorner', 'text', 'value', 'width'], [], { 'enableRTL': 'enableRtl' })(ejProgressBar) || ejProgressBar;
  ejProgressBar = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'progress-bar')(ejProgressBar) || ejProgressBar;
  return ejProgressBar;
})(_commonCommon.WidgetBase);

exports.ejProgressBar = ejProgressBar;