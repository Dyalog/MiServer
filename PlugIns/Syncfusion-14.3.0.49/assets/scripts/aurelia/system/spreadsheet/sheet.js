'use strict';

System.register(['../common/common'], function (_export, _context) {
  "use strict";

  var inlineView, customElement, constants, generateBindables, _dec, _dec2, _dec3, _class, Sheet;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }],
    execute: function () {
      _export('Sheet', Sheet = (_dec = inlineView('' + constants.aureliaTemplateString), _dec2 = customElement(constants.elementPrefix + 'sheet'), _dec3 = generateBindables('sheets', ['border', 'cFormatRule', 'colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'headerStyles', 'hideColumns', 'hideRows', 'mergeCells', 'primaryKey', 'query', 'rangeSettings', 'rowCount', 'rows', 'showGridlines', 'showHeader', 'showHeadings', 'startCell']), _dec(_class = _dec2(_class = _dec3(_class = function Sheet() {
        _classCallCheck(this, Sheet);
      }) || _class) || _class) || _class));

      _export('Sheet', Sheet);
    }
  };
});