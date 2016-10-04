define(['exports', '../common/common', 'ej.pivotgrid.min'], function (exports, _common) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ejPivotGrid = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var _dec, _dec2, _dec3, _dec4, _class;

  var ejPivotGrid = exports.ejPivotGrid = (_dec = (0, _common.customElement)(_common.constants.elementPrefix + 'pivot-grid'), _dec2 = (0, _common.inlineView)('' + _common.constants.aureliaTemplateString), _dec3 = (0, _common.generateBindables)('ejPivotGrid', ['analysisMode', 'cssClass', 'currentReport', 'dataSource', 'drilledItems', 'customObject', 'enableCellContext', 'enableCellSelection', 'enableDrillThrough', 'enableCellDoubleClick', 'enableCellEditing', 'enableCollapseByDefault', 'enableColumnGrandTotal', 'enableConditionalFormatting', 'enableDeferUpdate', 'enableGroupingBar', 'enableGrandTotal', 'enableJSONRendering', 'enablePivotFieldList', 'enableRowGrandTotal', 'enableRTL', 'enableToolTip', 'enableToolTipAnimation', 'enableVirtualScrolling', 'hyperlinkSettings', 'isNamedSets', 'isResponsive', 'jsonRecords', 'layout', 'locale', 'operationalMode', 'serviceMethodSettings', 'url'], [], { 'enableRTL': 'enableRtl' }), _dec4 = (0, _common.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = function (_WidgetBase) {
    _inherits(ejPivotGrid, _WidgetBase);

    function ejPivotGrid(element) {
      _classCallCheck(this, ejPivotGrid);

      var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

      _this.element = element;
      return _this;
    }

    return ejPivotGrid;
  }(_common.WidgetBase)) || _class) || _class) || _class) || _class);
});