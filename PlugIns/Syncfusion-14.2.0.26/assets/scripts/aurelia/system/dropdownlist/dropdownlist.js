System.register(['../common/common', 'ej.dropdownlist.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejDropDownList;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejDropdownlistMin) {}],
    execute: function () {
      ejDropDownList = (function (_WidgetBase) {
        _inherits(ejDropDownList, _WidgetBase);

        function ejDropDownList(element) {
          _classCallCheck(this, _ejDropDownList);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejDropDownList = ejDropDownList;
        ejDropDownList = inject(Element)(ejDropDownList) || ejDropDownList;
        ejDropDownList = generateBindables('ejDropDownList', ['cascadeTo', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delimiterChar', 'enableAnimation', 'enabled', 'enableIncrementalSearch', 'enableFilterSearch', 'enablePersistence', 'enablePopupResize', 'enableRTL', 'enableSorting', 'fields', 'filterType', 'headerTemplate', 'height', 'htmlAttributes', 'itemsCount', 'maxPopupHeight', 'minPopupHeight', 'maxPopupWidth', 'minPopupWidth', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showPopupOnLoad', 'showRoundedCorner', 'sortOrder', 'targetID', 'template', 'text', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width', 'virtualScrollMode'], ['value'], { 'enableRTL': 'enableRtl', 'targetID': 'targetId' })(ejDropDownList) || ejDropDownList;
        ejDropDownList = customAttribute(constants.attributePrefix + 'drop-down-list')(ejDropDownList) || ejDropDownList;
        return ejDropDownList;
      })(WidgetBase);

      _export('ejDropDownList', ejDropDownList);
    }
  };
});