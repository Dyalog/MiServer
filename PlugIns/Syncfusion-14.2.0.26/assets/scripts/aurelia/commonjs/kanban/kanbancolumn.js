'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _commonCommon = require('../common/common');

var KanbanColumn = (function () {
  function KanbanColumn() {
    _classCallCheck(this, _KanbanColumn);
  }

  var _KanbanColumn = KanbanColumn;
  KanbanColumn = _commonCommon.generateBindables('columns', ['headerText', 'key', 'isCollapsed', 'constraints', 'headerTemplate', 'width', 'visible', 'showAddButton'])(KanbanColumn) || KanbanColumn;
  KanbanColumn = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'kanban-column')(KanbanColumn) || KanbanColumn;
  KanbanColumn = _commonCommon.inlineView('<template><content></content></template>')(KanbanColumn) || KanbanColumn;
  return KanbanColumn;
})();

exports.KanbanColumn = KanbanColumn;