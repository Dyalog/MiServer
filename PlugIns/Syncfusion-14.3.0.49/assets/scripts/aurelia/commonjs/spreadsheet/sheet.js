'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sheet = undefined;

var _dec, _dec2, _dec3, _class;

var _common = require('../common/common');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sheet = exports.Sheet = (_dec = (0, _common.inlineView)('' + _common.constants.aureliaTemplateString), _dec2 = (0, _common.customElement)(_common.constants.elementPrefix + 'sheet'), _dec3 = (0, _common.generateBindables)('sheets', ['border', 'cFormatRule', 'colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'headerStyles', 'hideColumns', 'hideRows', 'mergeCells', 'primaryKey', 'query', 'rangeSettings', 'rowCount', 'rows', 'showGridlines', 'showHeader', 'showHeadings', 'startCell']), _dec(_class = _dec2(_class = _dec3(_class = function Sheet() {
  _classCallCheck(this, Sheet);
}) || _class) || _class) || _class);