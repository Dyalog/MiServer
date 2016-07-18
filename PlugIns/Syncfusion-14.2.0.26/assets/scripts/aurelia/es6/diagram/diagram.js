import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'datavisualization/ej.diagram.min';

@customElement(`${constants.elementPrefix}diagram`)
@inlineView('<template><content></content></template>')
@generateBindables('ejDiagram', ['backgroundColor', 'backgroundImage', 'bridgeDirection', 'commandManager', 'connectors', 'connectorTemplate', 'constraints', 'contextMenu', 'dataSourceSettings', 'defaultSettings', 'drawType', 'enableAutoScroll', 'enableContextMenu', 'height', 'historyManager', 'layout', 'locale', 'nodes', 'nodeTemplate', 'pageSettings', 'scrollSettings', 'selectedItems', 'showTooltip', 'snapSettings', 'tool', 'tooltip', 'width', 'zoomFactor'])
@inject(Element)
export class ejDiagram extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

