import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.digitalgauge.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-digitalgauge-items>e-digitalgauge-item',
})
export class DigitalGaugeItemDirective extends ComplexTagElement {

	@Input('characterSettings') characterSettings: any;
	@Input('characterSettings.count') characterSettings_count: any;
	@Input('characterSettings.opacity') characterSettings_opacity: any;
	@Input('characterSettings.spacing') characterSettings_spacing: any;
	@Input('characterSettings.type') characterSettings_type: any;
	@Input('enableCustomFont') enableCustomFont: any;
	@Input('font') font: any;
	@Input('font.fontFamily') font_fontFamily: any;
	@Input('font.fontStyle') font_fontStyle: any;
	@Input('font.size') font_size: any;
	@Input('position') position: any;
	@Input('position.x') position_x: any;
	@Input('position.y') position_y: any;
	@Input('segmentSettings') segmentSettings: any;
	@Input('segmentSettings.color') segmentSettings_color: any;
	@Input('segmentSettings.gradient') segmentSettings_gradient: any;
	@Input('segmentSettings.length') segmentSettings_length: any;
	@Input('segmentSettings.opacity') segmentSettings_opacity: any;
	@Input('segmentSettings.spacing') segmentSettings_spacing: any;
	@Input('segmentSettings.width') segmentSettings_width: any;
	@Input('shadowBlur') shadowBlur: any;
	@Input('shadowColor') shadowColor: any;
	@Input('shadowOffsetX') shadowOffsetX: any;
	@Input('shadowOffsetY') shadowOffsetY: any;
	@Input('textAlign') textAlign: any;
	@Input('textColor') textColor: any;
	@Input('value') value: any;

    
    constructor( @Inject(forwardRef(() => DigitalGaugeComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-digitalgauge>e-digitalgauge-items',
    queries: {
        children: new ContentChildren(DigitalGaugeItemDirective)
    }
})
export class DigitalGaugeItemsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => DigitalGaugeComponent)) widget: EJComponents<any, any>) {
        super('items')
        }
}




@Component({
    selector: 'ej-digitalgauge',
    template: ''})
export class DigitalGaugeComponent extends EJComponents<any, any> {
	@Input('exportSettings') exportSettings_input: any;
	@Input('frame') frame_input: any;
	@Input('height') height_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('enableResize') enableResize_input: any;
	@Input('matrixSegmentData') matrixSegmentData_input: any;
	@Input('segmentData') segmentData_input: any;
	@Input('themes') themes_input: any;
	@Input('width') width_input: any;
	@Input('exportSettings.filename') exportSettings_filename_input: any;
	@Input('exportSettings.type') exportSettings_type_input: any;
	@Input('exportSettings.action') exportSettings_action_input: any;
	@Input('exportSettings.mode') exportSettings_mode_input: any;
	@Input('frame.backgroundImageUrl') frame_backgroundImageUrl_input: any;
	@Input('frame.innerWidth') frame_innerWidth_input: any;
	@Input('frame.outerWidth') frame_outerWidth_input: any;
	@Input('items') items_input: any;
    @Input('options') options: any;

	@Input('value') value_two: any;
	@Output('valueChange') value_twoChange = new EventEmitter<any>();

	@Output('init') init_output = new EventEmitter();
	@Output('itemRendering') itemRendering_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('renderComplete') renderComplete_output = new EventEmitter();
	@Output('Click') Click_output = new EventEmitter();
	@Output('doubleClick') doubleClick_output = new EventEmitter();
	@Output('rightClick') rightClick_output = new EventEmitter();

	@ContentChild(DigitalGaugeItemsDirective) tag_items: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('DigitalGauge', el, cdRef, ['items'], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_DIGITALGAUGE_COMPONENTS: Type<any>[] = [DigitalGaugeComponent
, DigitalGaugeItemsDirective, DigitalGaugeItemDirective];


