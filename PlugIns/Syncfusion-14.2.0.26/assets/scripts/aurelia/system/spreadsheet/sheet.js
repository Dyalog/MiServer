System.register(['../common/common'], function (_export) {
  'use strict';

  var inlineView, customElement, constants, generateBindables, Sheet;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }],
    execute: function () {
      Sheet = (function () {
        function Sheet() {
          _classCallCheck(this, _Sheet);
        }

        var _Sheet = Sheet;
        Sheet = generateBindables('sheets', ['colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'headerStyles', 'primaryKey', 'query', 'rangeSettings', 'rowCount', 'sheetName', 'showGridlines', 'showHeader', 'showHeadings', 'startCell'])(Sheet) || Sheet;
        Sheet = customElement(constants.elementPrefix + 'sheet')(Sheet) || Sheet;
        Sheet = inlineView('<template><content></content></template>')(Sheet) || Sheet;
        return Sheet;
      })();

      _export('Sheet', Sheet);
    }
  };
});