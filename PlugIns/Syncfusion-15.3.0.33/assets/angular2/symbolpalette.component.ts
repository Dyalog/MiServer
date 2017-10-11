import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.diagram.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-symbolpalette',
    template: ''})
export class SymbolPaletteComponent extends EJComponents<any, any> {
	@Input('allowDrag') allowDrag_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('defaultSettings') defaultSettings_input: any;
	@Input('diagramId') diagramId_input: any;
	@Input('headerHeight') headerHeight_input: any;
	@Input('height') height_input: any;
	@Input('paletteItemHeight') paletteItemHeight_input: any;
	@Input('paletteItemWidth') paletteItemWidth_input: any;
	@Input('previewHeight') previewHeight_input: any;
	@Input('previewOffset') previewOffset_input: any;
	@Input('previewWidth') previewWidth_input: any;
	@Input('showPaletteItemText') showPaletteItemText_input: any;
	@Input('width') width_input: any;
	@Input('defaultSettings.node') defaultSettings_node_input: any;
	@Input('defaultSettings.connector') defaultSettings_connector_input: any;
	@Input('palettes') palettes_input: any;


	@Output('selectionChange') selectionChange_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('SymbolPalette', el, cdRef, []);
    }



}

export var EJ_SYMBOLPALETTE_COMPONENTS: Type<any>[] = [SymbolPaletteComponent
];


