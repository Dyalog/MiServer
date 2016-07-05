'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _commonCommon = require('../common/common');

var Sheet = (function () {
  function Sheet() {
    _classCallCheck(this, _Sheet);
  }

  var _Sheet = Sheet;
  Sheet = _commonCommon.generateBindables('sheets', ['colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'headerStyles', 'primaryKey', 'query', 'rangeSettings', 'rowCount', 'sheetName', 'showGridlines', 'showHeader', 'showHeadings', 'startCell'])(Sheet) || Sheet;
  Sheet = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'sheet')(Sheet) || Sheet;
  Sheet = _commonCommon.inlineView('<template><content></content></template>')(Sheet) || Sheet;
  return Sheet;
})();

exports.Sheet = Sheet;