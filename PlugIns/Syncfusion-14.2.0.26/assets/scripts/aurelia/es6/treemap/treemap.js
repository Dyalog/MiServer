import {inject, WidgetBase, constants, generateBindables, inlineView, customElement, children} from '../common/common';

import 'datavisualization/ej.treemap.min';

@customElement(`${constants.elementPrefix}tree-map`)
@inlineView('<template><content></content></template>')
@generateBindables('ejTreeMap', ['borderBrush', 'borderThickness', 'uniColorMapping', 'desaturationColorMapping', 'paletteColorMapping', 'colorValuePath', 'dataSource', 'dockPosition', 'drillDownHeaderColor', 'drillDownSelectionColor', 'enableDrillDown', 'enableResize', 'groupColorMapping', 'legendSettings', 'highlightBorderBrush', 'highlightBorderThickness', 'highlightGroupBorderBrush', 'highlightGroupBorderThickness', 'highlightGroupOnSelection', 'highlightOnSelection', 'itemsLayoutMode', 'leafItemSettings', 'rangeColorMapping', 'groupSelectionMode', 'showLegend', 'showTooltip', 'tooltipTemplate', 'treeMapItems', 'levels', 'weightValuePath'], ['dataSource', 'weightValuePath'])
@inject(Element)
export class ejTreeMap extends WidgetBase {
  @children(`${constants.elementPrefix}level`) levels
  constructor(element) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'levels';
  }
}

