import 'syncfusion-javascript/Scripts/ej/web/ej.uploadbox.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-uploadbox',
    template: ''})
export class UploadboxComponent extends EJComponents<any, any> {
	@Input('allowDragAndDrop') allowDragAndDrop_input: any;
	@Input('asyncUpload') asyncUpload_input: any;
	@Input('autoUpload') autoUpload_input: any;
	@Input('buttonText') buttonText_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('customFileDetails') customFileDetails_input: any;
	@Input('dialogAction') dialogAction_input: any;
	@Input('dialogPosition') dialogPosition_input: any;
	@Input('dialogText') dialogText_input: any;
	@Input('dropAreaText') dropAreaText_input: any;
	@Input('dropAreaHeight') dropAreaHeight_input: any;
	@Input('dropAreaWidth') dropAreaWidth_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('extensionsAllow') extensionsAllow_input: any;
	@Input('extensionsDeny') extensionsDeny_input: any;
	@Input('fileSize') fileSize_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('locale') locale_input: any;
	@Input('multipleFilesSelection') multipleFilesSelection_input: any;
	@Input('pushFile') pushFile_input: any;
	@Input('removeUrl') removeUrl_input: any;
	@Input('saveUrl') saveUrl_input: any;
	@Input('showBrowseButton') showBrowseButton_input: any;
	@Input('showFileDetails') showFileDetails_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('uploadName') uploadName_input: any;
	@Input('width') width_input: any;
	@Input('buttonText.browse') buttonText_browse_input: any;
	@Input('buttonText.cancel') buttonText_cancel_input: any;
	@Input('buttonText.Close') buttonText_Close_input: any;
	@Input('buttonText.upload') buttonText_upload_input: any;
	@Input('customFileDetails.action') customFileDetails_action_input: any;
	@Input('customFileDetails.name') customFileDetails_name_input: any;
	@Input('customFileDetails.size') customFileDetails_size_input: any;
	@Input('customFileDetails.status') customFileDetails_status_input: any;
	@Input('customFileDetails.title') customFileDetails_title_input: any;
	@Input('dialogAction.closeOnComplete') dialogAction_closeOnComplete_input: any;
	@Input('dialogAction.content') dialogAction_content_input: any;
	@Input('dialogAction.drag') dialogAction_drag_input: any;
	@Input('dialogAction.modal') dialogAction_modal_input: any;
	@Input('dialogText.name') dialogText_name_input: any;
	@Input('dialogText.size') dialogText_size_input: any;
	@Input('dialogText.status') dialogText_status_input: any;
	@Input('dialogText.title') dialogText_title_input: any;
    @Input('options') options: any;


	@Output('beforeSend') beforeSend_output = new EventEmitter();
	@Output('begin') begin_output = new EventEmitter();
	@Output('cancel') cancel_output = new EventEmitter();
	@Output('complete') complete_output = new EventEmitter();
	@Output('success') success_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('error') error_output = new EventEmitter();
	@Output('fileSelect') fileSelect_output = new EventEmitter();
	@Output('inProgress') inProgress_output = new EventEmitter();
	@Output('remove') remove_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('Uploadbox', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_UPLOADBOX_COMPONENTS: Type<any>[] = [UploadboxComponent
];


