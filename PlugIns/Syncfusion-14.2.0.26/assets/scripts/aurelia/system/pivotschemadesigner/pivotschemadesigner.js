System.register(['../common/common', 'ej.pivotschemadesigner.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejPivotSchemaDesigner;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customElement = _commonCommon.customElement;
      inlineView = _commonCommon.inlineView;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejPivotschemadesignerMin) {}],
    execute: function () {
      ejPivotSchemaDesigner = (function (_WidgetBase) {
        _inherits(ejPivotSchemaDesigner, _WidgetBase);

        function ejPivotSchemaDesigner(element) {
          _classCallCheck(this, _ejPivotSchemaDesigner);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejPivotSchemaDesigner = ejPivotSchemaDesigner;
        ejPivotSchemaDesigner = inject(Element)(ejPivotSchemaDesigner) || ejPivotSchemaDesigner;
        ejPivotSchemaDesigner = generateBindables('ejPivotSchemaDesigner', ['cssClass', 'customObject', 'enableWrapper', 'filters', 'height', 'locale', 'pivotCalculations', 'pivotColumns', 'pivotControl', 'pivotRows', 'pivotTableFields', 'serviceMethod', 'url', 'width'])(ejPivotSchemaDesigner) || ejPivotSchemaDesigner;
        ejPivotSchemaDesigner = inlineView('<template><content></content></template>')(ejPivotSchemaDesigner) || ejPivotSchemaDesigner;
        ejPivotSchemaDesigner = customElement(constants.elementPrefix + 'pivot-schema-designer')(ejPivotSchemaDesigner) || ejPivotSchemaDesigner;
        return ejPivotSchemaDesigner;
      })(WidgetBase);

      _export('ejPivotSchemaDesigner', ejPivotSchemaDesigner);
    }
  };
});