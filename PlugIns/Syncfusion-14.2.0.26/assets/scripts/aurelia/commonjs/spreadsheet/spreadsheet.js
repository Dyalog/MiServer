'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _commonCommon = require('../common/common');

require('ej.spreadsheet.min');

var ejSpreadsheet = (function (_WidgetBase) {
  var _instanceInitializers = {};

  _inherits(ejSpreadsheet, _WidgetBase);

  _createDecoratedClass(ejSpreadsheet, [{
    key: 'sheets',
    decorators: [_commonCommon.children(_commonCommon.constants.elementPrefix + 'sheet')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function ejSpreadsheet(element) {
    _classCallCheck(this, _ejSpreadsheet);

    _WidgetBase.call(this);

    _defineDecoratedPropertyDescriptor(this, 'sheets', _instanceInitializers);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'sheets';
  }

  var _ejSpreadsheet = ejSpreadsheet;
  ejSpreadsheet = _commonCommon.inject(Element)(ejSpreadsheet) || ejSpreadsheet;
  ejSpreadsheet = _commonCommon.generateBindables('ejSpreadsheet', ['activeSheetIndex', 'allowAutoCellType', 'allowAutoFill', 'allowAutoSum', 'allowCellFormatting', 'allowCellType', 'allowCharts', 'allowClipboard', 'allowComments', 'allowConditionalFormats', 'allowDataValidation', 'allowDelete', 'allowDragAndDrop', 'allowEditing', 'allowFiltering', 'allowFormatAsTable', 'allowFormatPainter', 'allowFormulaBar', 'allowFreezing', 'allowHyperlink', 'allowImport', 'allowInsert', 'allowKeyboardNavigation', 'allowLockCell', 'allowMerging', 'allowResizing', 'allowSearching', 'allowSelection', 'allowSorting', 'allowUndoRedo', 'allowWrap', 'apWidth', 'autoFillSettings', 'chartSettings', 'columnCount', 'columnWidth', 'cssClass', 'customFormulas', 'enableContextMenu', 'enablePivotTable', 'exportSettings', 'formatSettings', 'importOnLoad', 'importSettings', 'locale', 'pictureSettings', 'printSettings', 'rowCount', 'rowHeight', 'scrollSettings', 'selectionSettings', 'sheetCount', 'sheets', 'showRibbon', 'undoRedoStep', 'userName'])(ejSpreadsheet) || ejSpreadsheet;
  ejSpreadsheet = _commonCommon.inlineView('<template><content></content></template>')(ejSpreadsheet) || ejSpreadsheet;
  ejSpreadsheet = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'spreadsheet')(ejSpreadsheet) || ejSpreadsheet;
  return ejSpreadsheet;
})(_commonCommon.WidgetBase);

exports.ejSpreadsheet = ejSpreadsheet;