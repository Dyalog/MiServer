System.register(['../common/common', 'ej.listbox.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejListBox;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejListboxMin) {}],
    execute: function () {
      ejListBox = (function (_WidgetBase) {
        _inherits(ejListBox, _WidgetBase);

        function ejListBox(element) {
          _classCallCheck(this, _ejListBox);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejListBox = ejListBox;
        ejListBox = inject(Element)(ejListBox) || ejListBox;
        ejListBox = generateBindables('ejListBox', ['allowDrag', 'allowDrop', 'allowMultiSelection', 'allowVirtualScrolling', 'caseSensitiveSearch', 'cascadeTo', 'checkedIndices', 'cssClass', 'dataSource', 'enabled', 'enableIncrementalSearch', 'enablePersistence', 'enableRTL', 'fields', 'height', 'itemsCount', 'totalItemsCount', 'itemRequestCount', 'loadDataOnInit', 'query', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showRoundedCorner', 'template', 'value', 'virtualScrollMode', 'width', 'targetID'], ['value'], { 'enableRTL': 'enableRtl', 'targetID': 'targetId' })(ejListBox) || ejListBox;
        ejListBox = customAttribute(constants.attributePrefix + 'list-box')(ejListBox) || ejListBox;
        return ejListBox;
      })(WidgetBase);

      _export('ejListBox', ejListBox);
    }
  };
});