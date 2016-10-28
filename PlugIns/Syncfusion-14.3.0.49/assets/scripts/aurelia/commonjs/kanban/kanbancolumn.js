'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KanbanColumn = undefined;

var _dec, _dec2, _dec3, _class;

var _common = require('../common/common');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KanbanColumn = exports.KanbanColumn = (_dec = (0, _common.inlineView)('' + _common.constants.aureliaTemplateString), _dec2 = (0, _common.customElement)(_common.constants.elementPrefix + 'kanban-column'), _dec3 = (0, _common.generateBindables)('columns', ['headerText', 'totalCount', 'key', 'allowDrop', 'allowDrag', 'isCollapsed', 'constraints', 'headerTemplate', 'width', 'visible', 'showAddButton']), _dec(_class = _dec2(_class = _dec3(_class = function KanbanColumn() {
  _classCallCheck(this, KanbanColumn);
}) || _class) || _class) || _class);