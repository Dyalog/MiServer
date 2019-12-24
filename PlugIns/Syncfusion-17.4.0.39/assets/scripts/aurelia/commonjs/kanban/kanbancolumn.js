'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KanbanColumn = undefined;

var _dec, _dec2, _dec3, _class;

var _constants = require('../common/constants');

var _decorators = require('../common/decorators');

var _common = require('../common/common');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KanbanColumn = exports.KanbanColumn = (_dec = (0, _common.inlineView)('' + _constants.constants.aureliaTemplateString), _dec2 = (0, _common.customElement)(_constants.constants.elementPrefix + 'kanban-column'), _dec3 = (0, _decorators.generateBindables)('columns', ['headerText', 'totalCount', 'totalCount', 'key', 'allowDrop', 'allowDrag', 'isCollapsed', 'constraints', 'constraints', 'constraints', 'constraints', 'headerTemplate', 'width', 'visible', 'showAddButton']), _dec(_class = _dec2(_class = _dec3(_class = function KanbanColumn() {
  _classCallCheck(this, KanbanColumn);
}) || _class) || _class) || _class);