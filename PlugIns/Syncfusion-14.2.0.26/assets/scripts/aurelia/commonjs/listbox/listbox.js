'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.listbox.min');

var ejListBox = (function (_WidgetBase) {
  _inherits(ejListBox, _WidgetBase);

  function ejListBox(element) {
    _classCallCheck(this, _ejListBox);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejListBox = ejListBox;
  ejListBox = _commonCommon.inject(Element)(ejListBox) || ejListBox;
  ejListBox = _commonCommon.generateBindables('ejListBox', ['allowDrag', 'allowDrop', 'allowMultiSelection', 'allowVirtualScrolling', 'caseSensitiveSearch', 'cascadeTo', 'checkedIndices', 'cssClass', 'dataSource', 'enabled', 'enableIncrementalSearch', 'enablePersistence', 'enableRTL', 'fields', 'height', 'itemsCount', 'totalItemsCount', 'itemRequestCount', 'loadDataOnInit', 'query', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showRoundedCorner', 'template', 'value', 'virtualScrollMode', 'width', 'targetID'], ['value'], { 'enableRTL': 'enableRtl', 'targetID': 'targetId' })(ejListBox) || ejListBox;
  ejListBox = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'list-box')(ejListBox) || ejListBox;
  return ejListBox;
})(_commonCommon.WidgetBase);

exports.ejListBox = ejListBox;