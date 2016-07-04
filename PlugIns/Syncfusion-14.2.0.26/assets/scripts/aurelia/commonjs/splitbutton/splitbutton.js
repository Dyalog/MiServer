'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.splitbutton.min');

var ejSplitButton = (function (_WidgetBase) {
  _inherits(ejSplitButton, _WidgetBase);

  function ejSplitButton(element) {
    _classCallCheck(this, _ejSplitButton);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejSplitButton = ejSplitButton;
  ejSplitButton = _commonCommon.inject(Element)(ejSplitButton) || ejSplitButton;
  ejSplitButton = _commonCommon.generateBindables('ejSplitButton', ['arrowPosition', 'buttonMode', 'contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'showRoundedCorner', 'size', 'suffixIcon', 'targetID', 'text', 'width'], [], { 'enableRTL': 'enableRtl', 'targetID': 'targetId' })(ejSplitButton) || ejSplitButton;
  ejSplitButton = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'split-button')(ejSplitButton) || ejSplitButton;
  return ejSplitButton;
})(_commonCommon.WidgetBase);

exports.ejSplitButton = ejSplitButton;