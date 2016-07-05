System.register(['../common/common', 'ej.listview.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejListView;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customElement = _commonCommon.customElement;
      inlineView = _commonCommon.inlineView;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejListviewMin) {}],
    execute: function () {
      ejListView = (function (_WidgetBase) {
        _inherits(ejListView, _WidgetBase);

        function ejListView(element) {
          _classCallCheck(this, _ejListView);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejListView = ejListView;
        ejListView = inject(Element)(ejListView) || ejListView;
        ejListView = generateBindables('ejListView', ['cssClass', 'dataSource', 'enableAjax', 'enableCache', 'enableCheckMark', 'enableFiltering', 'enableGroupList', 'enablePersistence', 'fieldSettings', 'headerBackButtonText', 'headerTitle', 'height', 'persistSelection', 'preventSelection', 'query', 'renderTemplate', 'selectedItemIndex', 'showHeader', 'templateId', 'width'], ['dataSource', 'selectedItemIndex'])(ejListView) || ejListView;
        ejListView = inlineView('<template><content></content></template>')(ejListView) || ejListView;
        ejListView = customElement(constants.elementPrefix + 'list-view')(ejListView) || ejListView;
        return ejListView;
      })(WidgetBase);

      _export('ejListView', ejListView);
    }
  };
});