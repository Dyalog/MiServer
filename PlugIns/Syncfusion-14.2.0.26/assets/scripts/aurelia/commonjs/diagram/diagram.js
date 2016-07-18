'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('datavisualization/ej.diagram.min');

var ejDiagram = (function (_WidgetBase) {
  _inherits(ejDiagram, _WidgetBase);

  function ejDiagram(element) {
    _classCallCheck(this, _ejDiagram);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejDiagram = ejDiagram;
  ejDiagram = _commonCommon.inject(Element)(ejDiagram) || ejDiagram;
  ejDiagram = _commonCommon.generateBindables('ejDiagram', ['backgroundColor', 'backgroundImage', 'bridgeDirection', 'commandManager', 'connectors', 'connectorTemplate', 'constraints', 'contextMenu', 'dataSourceSettings', 'defaultSettings', 'drawType', 'enableAutoScroll', 'enableContextMenu', 'height', 'historyManager', 'layout', 'locale', 'nodes', 'nodeTemplate', 'pageSettings', 'scrollSettings', 'selectedItems', 'showTooltip', 'snapSettings', 'tool', 'tooltip', 'width', 'zoomFactor'])(ejDiagram) || ejDiagram;
  ejDiagram = _commonCommon.inlineView('<template><content></content></template>')(ejDiagram) || ejDiagram;
  ejDiagram = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'diagram')(ejDiagram) || ejDiagram;
  return ejDiagram;
})(_commonCommon.WidgetBase);

exports.ejDiagram = ejDiagram;