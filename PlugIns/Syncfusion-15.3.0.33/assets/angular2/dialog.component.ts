import 'syncfusion-javascript/Scripts/ej/web/ej.dialog.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-dialog',
    template: '<ng-content></ng-content>'})
export class DialogComponent extends EJComponents<any, any> {
	@Input('actionButtons') actionButtons_input: any;
	@Input('ajaxSettings') ajaxSettings_input: any;
	@Input('allowDraggable') allowDraggable_input: any;
	@Input('allowKeyboardNavigation') allowKeyboardNavigation_input: any;
	@Input('animation') animation_input: any;
	@Input('backgroundScroll') backgroundScroll_input: any;
	@Input('closeOnEscape') closeOnEscape_input: any;
	@Input('containment') containment_input: any;
	@Input('contentType') contentType_input: any;
	@Input('contentUrl') contentUrl_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enableAnimation') enableAnimation_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enableModal') enableModal_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableResize') enableResize_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('faviconCSS') faviconCSS_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('locale') locale_input: any;
	@Input('maxHeight') maxHeight_input: any;
	@Input('maxWidth') maxWidth_input: any;
	@Input('minHeight') minHeight_input: any;
	@Input('minWidth') minWidth_input: any;
	@Input('position') position_input: any;
	@Input('showHeader') showHeader_input: any;
	@Input('showOnInit') showOnInit_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('target') target_input: any;
	@Input('title') title_input: any;
	@Input('tooltip') tooltip_input: any;
	@Input('width') width_input: any;
	@Input('zIndex') zIndex_input: any;
	@Input('showFooter') showFooter_input: any;
	@Input('footerTemplateId') footerTemplateId_input: any;
	@Input('ajaxSettings.async') ajaxSettings_async_input: any;
	@Input('ajaxSettings.cache') ajaxSettings_cache_input: any;
	@Input('ajaxSettings.contentType') ajaxSettings_contentType_input: any;
	@Input('ajaxSettings.data') ajaxSettings_data_input: any;
	@Input('ajaxSettings.dataType') ajaxSettings_dataType_input: any;
	@Input('ajaxSettings.type') ajaxSettings_type_input: any;


	@Output('beforeOpen') beforeOpen_output = new EventEmitter();
	@Output('ajaxError') ajaxError_output = new EventEmitter();
	@Output('ajaxSuccess') ajaxSuccess_output = new EventEmitter();
	@Output('beforeClose') beforeClose_output = new EventEmitter();
	@Output('close') close_output = new EventEmitter();
	@Output('contentLoad') contentLoad_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('drag') drag_output = new EventEmitter();
	@Output('dragStart') dragStart_output = new EventEmitter();
	@Output('dragStop') dragStop_output = new EventEmitter();
	@Output('open') open_output = new EventEmitter();
	@Output('resize') resize_output = new EventEmitter();
	@Output('resizeStart') resizeStart_output = new EventEmitter();
	@Output('resizeStop') resizeStop_output = new EventEmitter();
	@Output('expand') expand_output = new EventEmitter();
	@Output('collapse') collapse_output = new EventEmitter();
	@Output('actionButtonClick') actionButtonClick_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('Dialog', el, cdRef, []);
    }



}

export var EJ_DIALOG_COMPONENTS: Type<any>[] = [DialogComponent
];


