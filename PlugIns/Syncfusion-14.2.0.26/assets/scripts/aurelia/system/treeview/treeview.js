System.register(['../common/common', 'ej.treeview.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejTreeView;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejTreeviewMin) {}],
    execute: function () {
      ejTreeView = (function (_WidgetBase) {
        _inherits(ejTreeView, _WidgetBase);

        function ejTreeView(element) {
          _classCallCheck(this, _ejTreeView);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejTreeView = ejTreeView;
        ejTreeView = inject(Element)(ejTreeView) || ejTreeView;
        ejTreeView = generateBindables('ejTreeView', ['allowDragAndDrop', 'allowDragAndDropAcrossControl', 'allowDropSibling', 'allowDropChild', 'allowEditing', 'allowKeyboardNavigation', 'autoCheck', 'autoCheckParentNode', 'checkedNodes', 'cssClass', 'enableAnimation', 'enabled', 'enableMultipleExpand', 'enablePersistence', 'enableRTL', 'expandedNodes', 'expandOn', 'fields', 'height', 'htmlAttributes', 'loadOnDemand', 'selectedNode', 'showCheckbox', 'sortSettings', 'template', 'width'], [], { 'enableRTL': 'enableRtl' })(ejTreeView) || ejTreeView;
        ejTreeView = customAttribute(constants.attributePrefix + 'tree-view')(ejTreeView) || ejTreeView;
        return ejTreeView;
      })(WidgetBase);

      _export('ejTreeView', ejTreeView);
    }
  };
});