'use strict';

System.register(['../common/constants', '../common/decorators', '../common/common'], function (_export, _context) {
  "use strict";

  var constants, generateBindables, inlineView, customElement, _dec, _dec2, _dec3, _class, Sheet;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
    }],
    execute: function () {
      _export('Sheet', Sheet = (_dec = inlineView('' + constants.aureliaTemplateString), _dec2 = customElement(constants.elementPrefix + 'sheet'), _dec3 = generateBindables('sheets', ['border', 'border', 'border', 'border', 'cellTypes', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'cFormatRule', 'colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'frozenRows', 'frozenColumns', 'headerStyles', 'hideColumns', 'hideRows', 'mergeCells', 'primaryKey', 'query', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rangeSettings', 'rowCount', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'rows', 'showGridlines', 'showHeader', 'showHeadings', 'sheetName', 'startCell']), _dec(_class = _dec2(_class = _dec3(_class = function Sheet() {
        _classCallCheck(this, Sheet);
      }) || _class) || _class) || _class));

      _export('Sheet', Sheet);
    }
  };
});