System.register(['../common/common', 'datavisualization/ej.diagram.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejDiagram;

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
      ejDiagram = (function (_WidgetBase) {
        _inherits(ejDiagram, _WidgetBase);

        function ejDiagram(element) {
          _classCallCheck(this, _ejDiagram);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejDiagram = ejDiagram;
        ejDiagram = inject(Element)(ejDiagram) || ejDiagram;
        ejDiagram = generateBindables('ejDiagram', ['backgroundColor', 'backgroundImage', 'bridgeDirection', 'commandManager', 'connectors', 'connectorTemplate', 'constraints', 'contextMenu', 'dataSourceSettings', 'defaultSettings', 'drawType', 'enableAutoScroll', 'enableContextMenu', 'height', 'historyManager', 'layout', 'locale', 'nodes', 'nodeTemplate', 'pageSettings', 'scrollSettings', 'selectedItems', 'showTooltip', 'snapSettings', 'tool', 'tooltip', 'width', 'zoomFactor'])(ejDiagram) || ejDiagram;
        ejDiagram = inlineView('<template><content></content></template>')(ejDiagram) || ejDiagram;
        ejDiagram = customElement(constants.elementPrefix + 'diagram')(ejDiagram) || ejDiagram;
        return ejDiagram;
      })(WidgetBase);

      _export('ejDiagram', ejDiagram);
    }
  };
});