System.register(['../common/common'], function (_export) {
  'use strict';

  var inlineView, customElement, constants, generateBindables, KanbanColumn;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }],
    execute: function () {
      KanbanColumn = (function () {
        function KanbanColumn() {
          _classCallCheck(this, _KanbanColumn);
        }

        var _KanbanColumn = KanbanColumn;
        KanbanColumn = generateBindables('columns', ['headerText', 'key', 'isCollapsed', 'constraints', 'headerTemplate', 'width', 'visible', 'showAddButton'])(KanbanColumn) || KanbanColumn;
        KanbanColumn = customElement(constants.elementPrefix + 'kanban-column')(KanbanColumn) || KanbanColumn;
        KanbanColumn = inlineView('<template><content></content></template>')(KanbanColumn) || KanbanColumn;
        return KanbanColumn;
      })();

      _export('KanbanColumn', KanbanColumn);
    }
  };
});