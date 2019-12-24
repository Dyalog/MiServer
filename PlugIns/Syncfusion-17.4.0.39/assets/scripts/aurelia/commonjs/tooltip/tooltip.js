'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ejTooltip = undefined;

var _dec, _dec2, _dec3, _class;

var _widgetBase = require('../common/widget-base');

var _constants = require('../common/constants');

var _decorators = require('../common/decorators');

var _common = require('../common/common');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ejTooltip = exports.ejTooltip = (_dec = (0, _common.customAttribute)(_constants.constants.attributePrefix + 'tooltip'), _dec2 = (0, _decorators.generateBindables)('ejTooltip', ['allowKeyboardNavigation', 'animation', 'associate', 'autoCloseTimeout', 'closeMode', 'collision', 'containment', 'content', 'cssClass', 'enabled', 'enableRTL', 'height', 'isBalloon', 'position', 'showRoundedCorner', 'showShadow', 'target', 'tip', 'title', 'trigger', 'width'], [], { 'enableRTL': ['enableRtl'] }), _dec3 = (0, _common.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = function (_WidgetBase) {
  _inherits(ejTooltip, _WidgetBase);

  function ejTooltip(element) {
    _classCallCheck(this, ejTooltip);

    var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

    _this.element = element;
    return _this;
  }

  return ejTooltip;
}(_widgetBase.WidgetBase)) || _class) || _class) || _class);