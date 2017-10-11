'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ejPivotSchemaDesigner = undefined;

var _dec, _dec2, _dec3, _dec4, _class;

var _widgetBase = require('../common/widget-base');

var _constants = require('../common/constants');

var _decorators = require('../common/decorators');

var _common = require('../common/common');

require('syncfusion-javascript/Scripts/ej/web/ej.pivotschemadesigner.min');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ejPivotSchemaDesigner = exports.ejPivotSchemaDesigner = (_dec = (0, _common.customElement)(_constants.constants.elementPrefix + 'pivot-schema-designer'), _dec2 = (0, _common.inlineView)('' + _constants.constants.aureliaTemplateString), _dec3 = (0, _decorators.generateBindables)('ejPivotSchemaDesigner', ['cssClass', 'customObject', 'enableWrapper', 'enableRTL', 'olap', 'enableDragDrop', 'height', 'locale', 'pivotControl', 'serviceMethods', 'url', 'width', 'layout'], [], { 'enableRTL': 'enableRtl' }), _dec4 = (0, _common.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = function (_WidgetBase) {
  _inherits(ejPivotSchemaDesigner, _WidgetBase);

  function ejPivotSchemaDesigner(element) {
    _classCallCheck(this, ejPivotSchemaDesigner);

    var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

    _this.element = element;
    return _this;
  }

  return ejPivotSchemaDesigner;
}(_widgetBase.WidgetBase)) || _class) || _class) || _class) || _class);