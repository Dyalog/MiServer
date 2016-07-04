'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.button.min');

var ejButton = (function (_WidgetBase) {
  _inherits(ejButton, _WidgetBase);

  function ejButton(element) {
    _classCallCheck(this, _ejButton);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejButton = ejButton;
  ejButton = _commonCommon.inject(Element)(ejButton) || ejButton;
  ejButton = _commonCommon.generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text', 'timeInterval', 'type', 'width'], [], { 'enableRTL': 'enableRtl' })(ejButton) || ejButton;
  ejButton = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'button')(ejButton) || ejButton;
  return ejButton;
})(_commonCommon.WidgetBase);

exports.ejButton = ejButton;