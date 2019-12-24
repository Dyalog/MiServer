import 'syncfusion-javascript/Scripts/ej/web/ej.fileexplorer.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-fileexplorer',
    template: ''})
export class FileExplorerComponent extends EJComponents<any, any> {
	@Input('ajaxAction') ajaxAction_input: any;
	@Input('ajaxDataType') ajaxDataType_input: any;
	@Input('ajaxSettings') ajaxSettings_input: any;
	@Input('allowDragAndDrop') allowDragAndDrop_input: any;
	@Input('allowKeyboardNavigation') allowKeyboardNavigation_input: any;
	@Input('allowMultiSelection') allowMultiSelection_input: any;
	@Input('contextMenuSettings') contextMenuSettings_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableResize') enableResize_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableThumbnailCompress') enableThumbnailCompress_input: any;
	@Input('fileTypes') fileTypes_input: any;
	@Input('filterSettings') filterSettings_input: any;
	@Input('gridSettings') gridSettings_input: any;
	@Input('height') height_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('layout') layout_input: any;
	@Input('locale') locale_input: any;
	@Input('maxHeight') maxHeight_input: any;
	@Input('maxWidth') maxWidth_input: any;
	@Input('minHeight') minHeight_input: any;
	@Input('minWidth') minWidth_input: any;
	@Input('path') path_input: any;
	@Input('rootFolderName') rootFolderName_input: any;
	@Input('selectedFolder') selectedFolder_input: any;
	@Input('selectedItems') selectedItems_input: any;
	@Input('showCheckbox') showCheckbox_input: any;
	@Input('showContextMenu') showContextMenu_input: any;
	@Input('showFooter') showFooter_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('showThumbnail') showThumbnail_input: any;
	@Input('showToolbar') showToolbar_input: any;
	@Input('showNavigationPane') showNavigationPane_input: any;
	@Input('tools') tools_input: any;
	@Input('toolsList') toolsList_input: any;
	@Input('uploadSettings') uploadSettings_input: any;
	@Input('virtualItemCount') virtualItemCount_input: any;
	@Input('width') width_input: any;
	@Input('contextMenuSettings.items') contextMenuSettings_items_input: any;
	@Input('contextMenuSettings.customMenuFields') contextMenuSettings_customMenuFields_input: any;
	@Input('filterSettings.allowSearchOnTyping') filterSettings_allowSearchOnTyping_input: any;
	@Input('filterSettings.caseSensitiveSearch') filterSettings_caseSensitiveSearch_input: any;
	@Input('filterSettings.filterType') filterSettings_filterType_input: any;
	@Input('gridSettings.allowResizing') gridSettings_allowResizing_input: any;
	@Input('gridSettings.allowSorting') gridSettings_allowSorting_input: any;
	@Input('gridSettings.columns') gridSettings_columns_input: any;
	@Input('uploadSettings.allowMultipleFile') uploadSettings_allowMultipleFile_input: any;
	@Input('uploadSettings.autoUpload') uploadSettings_autoUpload_input: any;
	@Input('uploadSettings.dialogAction') uploadSettings_dialogAction_input: any;
	@Input('uploadSettings.dialogPosition') uploadSettings_dialogPosition_input: any;
	@Input('uploadSettings.maxFileSize') uploadSettings_maxFileSize_input: any;
	@Input('uploadSettings.showFileDetails') uploadSettings_showFileDetails_input: any;
    @Input('options') options: any;


	@Output('beforeAjaxRequest') beforeAjaxRequest_output = new EventEmitter();
	@Output('beforeDownload') beforeDownload_output = new EventEmitter();
	@Output('beforeGetImage') beforeGetImage_output = new EventEmitter();
	@Output('beforeOpen') beforeOpen_output = new EventEmitter();
	@Output('beforeUpload') beforeUpload_output = new EventEmitter();
	@Output('beforeUploadDialogOpen') beforeUploadDialogOpen_output = new EventEmitter();
	@Output('beforeUploadSend') beforeUploadSend_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('copy') copy_output = new EventEmitter();
	@Output('createFolder') createFolder_output = new EventEmitter();
	@Output('cut') cut_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('dragStart') dragStart_output = new EventEmitter();
	@Output('drag') drag_output = new EventEmitter();
	@Output('dragStop') dragStop_output = new EventEmitter();
	@Output('drop') drop_output = new EventEmitter();
	@Output('getImage') getImage_output = new EventEmitter();
	@Output('keydown') keydown_output = new EventEmitter();
	@Output('layoutChange') layoutChange_output = new EventEmitter();
	@Output('menuBeforeOpen') menuBeforeOpen_output = new EventEmitter();
	@Output('menuClick') menuClick_output = new EventEmitter();
	@Output('menuOpen') menuOpen_output = new EventEmitter();
	@Output('open') open_output = new EventEmitter();
	@Output('paste') paste_output = new EventEmitter();
	@Output('remove') remove_output = new EventEmitter();
	@Output('resize') resize_output = new EventEmitter();
	@Output('resizeStart') resizeStart_output = new EventEmitter();
	@Output('resizeStop') resizeStop_output = new EventEmitter();
	@Output('select') select_output = new EventEmitter();
	@Output('templateRefresh') templateRefresh_output = new EventEmitter();
	@Output('unselect') unselect_output = new EventEmitter();
	@Output('uploadComplete') uploadComplete_output = new EventEmitter();
	@Output('uploadError') uploadError_output = new EventEmitter();
	@Output('uploadSuccess') uploadSuccess_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('FileExplorer', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_FILEEXPLORER_COMPONENTS: Type<any>[] = [FileExplorerComponent
];


