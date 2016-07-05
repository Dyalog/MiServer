'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.pivotschemadesigner.min');

var ejPivotSchemaDesigner = (function (_WidgetBase) {
  _inherits(ejPivotSchemaDesigner, _WidgetBase);

  function ejPivotSchemaDesigner(element) {
    _classCallCheck(this, _ejPivotSchemaDesigner);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejPivotSchemaDesigner = ejPivotSchemaDesigner;
  ejPivotSchemaDesigner = _commonCommon.inject(Element)(ejPivotSchemaDesigner) || ejPivotSchemaDesigner;
  ejPivotSchemaDesigner = _commonCommon.generateBindables('ejPivotSchemaDesigner', ['cssClass', 'customObject', 'enableWrapper', 'filters', 'height', 'locale', 'pivotCalculations', 'pivotColumns', 'pivotControl', 'pivotRows', 'pivotTableFields', 'serviceMethod', 'url', 'width'])(ejPivotSchemaDesigner) || ejPivotSchemaDesigner;
  ejPivotSchemaDesigner = _commonCommon.inlineView('<template><content></content></template>')(ejPivotSchemaDesigner) || ejPivotSchemaDesigner;
  ejPivotSchemaDesigner = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'pivot-schema-designer')(ejPivotSchemaDesigner) || ejPivotSchemaDesigner;
  return ejPivotSchemaDesigner;
})(_commonCommon.WidgetBase);

exports.ejPivotSchemaDesigner = ejPivotSchemaDesigner;