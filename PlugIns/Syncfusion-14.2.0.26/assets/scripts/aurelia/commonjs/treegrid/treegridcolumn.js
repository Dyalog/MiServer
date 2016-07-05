'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _commonCommon = require('../common/common');

var TreeGridColumn = (function () {
  var _instanceInitializers = {};

  function TreeGridColumn() {
    _classCallCheck(this, _TreeGridColumn);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers);
  }

  TreeGridColumn.prototype.bind = function bind() {
    if (this.template[0]) {
      var util = new _commonCommon.Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  };

  _createDecoratedClass(TreeGridColumn, [{
    key: 'template',
    decorators: [_commonCommon.children(_commonCommon.constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  var _TreeGridColumn = TreeGridColumn;
  TreeGridColumn = _commonCommon.generateBindables('columns', ['allowFiltering', 'allowSorting', 'editType', 'field', 'filterEditType', 'headerText', 'visible', 'headerTemplateID', 'isFrozen', 'allowFreezing'])(TreeGridColumn) || TreeGridColumn;
  TreeGridColumn = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'tree-grid-column')(TreeGridColumn) || TreeGridColumn;
  TreeGridColumn = _commonCommon.inlineView('<template><content></content></template>')(TreeGridColumn) || TreeGridColumn;
  return TreeGridColumn;
})();

exports.TreeGridColumn = TreeGridColumn;