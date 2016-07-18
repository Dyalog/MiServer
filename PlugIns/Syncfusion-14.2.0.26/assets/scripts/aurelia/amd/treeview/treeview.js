define(['exports', '../common/common', 'ej.treeview.min'], function (exports, _commonCommon, _ejTreeviewMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejTreeView = (function (_WidgetBase) {
    _inherits(ejTreeView, _WidgetBase);

    function ejTreeView(element) {
      _classCallCheck(this, _ejTreeView);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejTreeView = ejTreeView;
    ejTreeView = _commonCommon.inject(Element)(ejTreeView) || ejTreeView;
    ejTreeView = _commonCommon.generateBindables('ejTreeView', ['allowDragAndDrop', 'allowDragAndDropAcrossControl', 'allowDropSibling', 'allowDropChild', 'allowEditing', 'allowKeyboardNavigation', 'autoCheck', 'autoCheckParentNode', 'checkedNodes', 'cssClass', 'enableAnimation', 'enabled', 'enableMultipleExpand', 'enablePersistence', 'enableRTL', 'expandedNodes', 'expandOn', 'fields', 'height', 'htmlAttributes', 'loadOnDemand', 'selectedNode', 'showCheckbox', 'sortSettings', 'template', 'width'], [], { 'enableRTL': 'enableRtl' })(ejTreeView) || ejTreeView;
    ejTreeView = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'tree-view')(ejTreeView) || ejTreeView;
    return ejTreeView;
  })(_commonCommon.WidgetBase);

  exports.ejTreeView = ejTreeView;
});