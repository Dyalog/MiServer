import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

@customElement(`${constants.elementPrefix}diagram`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejDiagram', ['backgroundColor', 'backgroundImage', 'bridgeDirection', 'commandManager', 'connectors', 'connectorTemplate', 'constraints', 'contextMenu', 'dataSourceSettings', 'defaultSettings', 'drawType', 'enableAutoScroll', 'enableContextMenu', 'height', 'historyManager', 'labelRenderingMode', 'layout', 'locale', 'nodes', 'layers', 'nodeTemplate', 'pageSettings', 'scrollSettings', 'selectedItems', 'showTooltip', 'serializationSettings', 'rulerSettings', 'snapSettings', 'tool', 'tooltip', 'width', 'zoomFactor'])
@inject(Element)
export class ejDiagram extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

