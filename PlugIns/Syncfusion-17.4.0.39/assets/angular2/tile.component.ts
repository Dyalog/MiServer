import 'syncfusion-javascript/Scripts/ej/web/ej.tile.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-tile',
    template: ''})
export class TileComponent extends EJComponents<any, any> {
	@Input('badge') badge_input: any;
	@Input('caption') caption_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('height') height_input: any;
	@Input('imageClass') imageClass_input: any;
	@Input('imagePosition') imagePosition_input: any;
	@Input('imageTemplateId') imageTemplateId_input: any;
	@Input('imageUrl') imageUrl_input: any;
	@Input('locale') locale_input: any;
	@Input('liveTile') liveTile_input: any;
	@Input('tileSize') tileSize_input: any;
	@Input('width') width_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('allowSelection') allowSelection_input: any;
	@Input('backgroundColor') backgroundColor_input: any;
	@Input('badge.maxValue') badge_maxValue_input: any;
	@Input('badge.minValue') badge_minValue_input: any;
	@Input('caption.enabled') caption_enabled_input: any;
	@Input('caption.alignment') caption_alignment_input: any;
	@Input('caption.position') caption_position_input: any;
	@Input('caption.icon') caption_icon_input: any;
	@Input('liveTile.enabled') liveTile_enabled_input: any;
	@Input('liveTile.imageClass') liveTile_imageClass_input: any;
	@Input('liveTile.imageTemplateId') liveTile_imageTemplateId_input: any;
	@Input('liveTile.imageUrl') liveTile_imageUrl_input: any;
	@Input('liveTile.type') liveTile_type_input: any;
	@Input('liveTile.updateInterval') liveTile_updateInterval_input: any;
	@Input('liveTile.text') liveTile_text_input: any;
    @Input('options') options: any;

	@Input('badge.value') badge_value_two: any;
	@Output('badge.valueChange') badge_value_twoChange = new EventEmitter<any>();
	@Input('badge.enabled') badge_enabled_two: any;
	@Output('badge.enabledChange') badge_enabled_twoChange = new EventEmitter<any>();
	@Input('badge.text') badge_text_two: any;
	@Output('badge.textChange') badge_text_twoChange = new EventEmitter<any>();
	@Input('badge.position') badge_position_two: any;
	@Output('badge.positionChange') badge_position_twoChange = new EventEmitter<any>();
	@Input('caption.text') caption_text_two: any;
	@Output('caption.textChange') caption_text_twoChange = new EventEmitter<any>();

	@Output('mouseDown') mouseDown_output = new EventEmitter();
	@Output('mouseUp') mouseUp_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('Tile', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_TILE_COMPONENTS: Type<any>[] = [TileComponent
];


