System.register(['../common/common', 'datavisualization/ej.diagram.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejOverview;

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
    }, function (_datavisualizationEjDiagramMin) {}],
    execute: function () {
      ejOverview = (function (_WidgetBase) {
        _inherits(ejOverview, _WidgetBase);

        function ejOverview(element) {
          _classCallCheck(this, _ejOverview);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejOverview = ejOverview;
        ejOverview = inject(Element)(ejOverview) || ejOverview;
        ejOverview = generateBindables('ejOverview', ['sourceID', 'height', 'width'], [], { 'sourceID': 'sourceId' })(ejOverview) || ejOverview;
        ejOverview = inlineView('<template><content></content></template>')(ejOverview) || ejOverview;
        ejOverview = customElement(constants.elementPrefix + 'overview')(ejOverview) || ejOverview;
        return ejOverview;
      })(WidgetBase);

      _export('ejOverview', ejOverview);
    }
  };
});