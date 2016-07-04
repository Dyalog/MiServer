define(['exports', '../common/common', 'ej.listview.min'], function (exports, _commonCommon, _ejListviewMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejListView = (function (_WidgetBase) {
    _inherits(ejListView, _WidgetBase);

    function ejListView(element) {
      _classCallCheck(this, _ejListView);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejListView = ejListView;
    ejListView = _commonCommon.inject(Element)(ejListView) || ejListView;
    ejListView = _commonCommon.generateBindables('ejListView', ['cssClass', 'dataSource', 'enableAjax', 'enableCache', 'enableCheckMark', 'enableFiltering', 'enableGroupList', 'enablePersistence', 'fieldSettings', 'headerBackButtonText', 'headerTitle', 'height', 'persistSelection', 'preventSelection', 'query', 'renderTemplate', 'selectedItemIndex', 'showHeader', 'templateId', 'width'], ['dataSource', 'selectedItemIndex'])(ejListView) || ejListView;
    ejListView = _commonCommon.inlineView('<template><content></content></template>')(ejListView) || ejListView;
    ejListView = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'list-view')(ejListView) || ejListView;
    return ejListView;
  })(_commonCommon.WidgetBase);

  exports.ejListView = ejListView;
});