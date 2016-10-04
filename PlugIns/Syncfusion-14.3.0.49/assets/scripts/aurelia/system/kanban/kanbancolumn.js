'use strict';

System.register(['../common/common'], function (_export, _context) {
  "use strict";

  var inlineView, customElement, constants, generateBindables, _dec, _dec2, _dec3, _class, KanbanColumn;

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
      _export('KanbanColumn', KanbanColumn = (_dec = inlineView('' + constants.aureliaTemplateString), _dec2 = customElement(constants.elementPrefix + 'kanban-column'), _dec3 = generateBindables('columns', ['headerText', 'totalCount', 'key', 'allowDrop', 'allowDrag', 'isCollapsed', 'constraints', 'headerTemplate', 'width', 'visible', 'showAddButton']), _dec(_class = _dec2(_class = _dec3(_class = function KanbanColumn() {
        _classCallCheck(this, KanbanColumn);
      }) || _class) || _class) || _class));

      _export('KanbanColumn', KanbanColumn);
    }
  };
});