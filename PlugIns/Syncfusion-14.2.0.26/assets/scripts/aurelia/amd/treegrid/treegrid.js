define(['exports', '../common/common', 'ej.treegrid.min'], function (exports, _commonCommon, _ejTreegridMin) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var ejTreeGrid = (function (_WidgetBase) {
    var _instanceInitializers = {};

    _inherits(ejTreeGrid, _WidgetBase);

    _createDecoratedClass(ejTreeGrid, [{
      key: 'columns',
      decorators: [_commonCommon.children(_commonCommon.constants.elementPrefix + 'tree-grid-column')],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function ejTreeGrid(element, templateEngine) {
      _classCallCheck(this, _ejTreeGrid);

      _WidgetBase.call(this);

      _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers);

      this.element = element;
      this.hasChildProperty = true;
      this.childPropertyName = 'columns';
      this.templateProcessor = new _commonCommon.TemplateProcessor(this, templateEngine);
      this.templateProcessor.initTemplate();
    }

    var _ejTreeGrid = ejTreeGrid;
    ejTreeGrid = _commonCommon.inject(Element, _commonCommon.TemplatingEngine)(ejTreeGrid) || ejTreeGrid;
    ejTreeGrid = _commonCommon.generateBindables('ejTreeGrid', ['allowColumnResize', 'allowDragAndDrop', 'allowFiltering', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowSelection', 'allowSorting', 'altRowTemplateID', 'childMapping', 'columns', 'contextMenuSettings', 'dataSource', 'headerTextOverflow', 'dragTooltip', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableResize', 'enableVirtualization', 'filterBarMode', 'idMapping', 'parentIdMapping', 'query', 'rowHeight', 'rowTemplateID', 'selectedRowIndex', 'selectionType', 'showColumnChooser', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'sizeSettings', 'sortSettings', 'toolbarSettings', 'treeColumnIndex'], ['dataSource', 'selectedRowIndex'], { 'altRowTemplateID': 'altRowTemplateId', 'rowTemplateID': 'rowTemplateId' })(ejTreeGrid) || ejTreeGrid;
    ejTreeGrid = _commonCommon.inlineView('<template><content></content></template>')(ejTreeGrid) || ejTreeGrid;
    ejTreeGrid = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'tree-grid')(ejTreeGrid) || ejTreeGrid;
    return ejTreeGrid;
  })(_commonCommon.WidgetBase);

  exports.ejTreeGrid = ejTreeGrid;
});