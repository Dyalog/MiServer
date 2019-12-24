define(['exports', '../common/constants', '../common/decorators', '../common/common'], function (exports, _constants, _decorators, _common) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Sheet = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Sheet = exports.Sheet = (_dec = (0, _common.inlineView)('' + _constants.constants.aureliaTemplateString), _dec2 = (0, _common.customElement)(_constants.constants.elementPrefix + 'sheet'), _dec3 = (0, _decorators.generateBindables)('sheets', ['border', 'border', 'border', 'border', 'cellTypes', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'frozenRows', 'frozenColumns', 'headerStyles', 'hideColumns', 'hideRows', 'mergeCells', 'primaryKey', 'query', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rowCount', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'showGridlines', 'showHeader', 'showHeadings', 'sheetName', 'startCell']), _dec(_class = _dec2(_class = _dec3(_class = function Sheet() {
    _classCallCheck(this, Sheet);
  }) || _class) || _class) || _class);
});