import 'syncfusion-javascript/Scripts/ej/web/ej.pdfviewer.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-pdfviewer',
    template: ''})
export class PdfViewerComponent extends EJComponents<any, any> {
	@Input('locale') locale_input: any;
	@Input('toolbarSettings') toolbarSettings_input: any;
	@Input('serverActionSettings') serverActionSettings_input: any;
	@Input('serviceUrl') serviceUrl_input: any;
	@Input('documentPath') documentPath_input: any;
	@Input('enableTextMarkupAnnotations') enableTextMarkupAnnotations_input: any;
	@Input('enableHighlightAnnotation') enableHighlightAnnotation_input: any;
	@Input('enableUnderlineAnnotation') enableUnderlineAnnotation_input: any;
	@Input('enableStrikethroughAnnotation') enableStrikethroughAnnotation_input: any;
	@Input('enableSignature') enableSignature_input: any;
	@Input('strikethroughSettings') strikethroughSettings_input: any;
	@Input('underlineSettings') underlineSettings_input: any;
	@Input('highlightSettings') highlightSettings_input: any;
	@Input('signatureSettings') signatureSettings_input: any;
	@Input('textSelectionContextMenu') textSelectionContextMenu_input: any;
	@Input('annotationContextMenu') annotationContextMenu_input: any;
	@Input('annotationType') annotationType_input: any;
	@Input('pageCount') pageCount_input: any;
	@Input('currentPageNumber') currentPageNumber_input: any;
	@Input('zoomPercentage') zoomPercentage_input: any;
	@Input('pdfService') pdfService_input: any;
	@Input('interactionMode') interactionMode_input: any;
	@Input('bufferingMode') bufferingMode_input: any;
	@Input('hyperlinkOpenState') hyperlinkOpenState_input: any;
	@Input('enableHyperlink') enableHyperlink_input: any;
	@Input('enableTextSelection') enableTextSelection_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('isDocumentEdited') isDocumentEdited_input: any;
	@Input('allowClientBuffering') allowClientBuffering_input: any;
	@Input('fileName') fileName_input: any;
	@Input('toolbarSettings.showToolTip') toolbarSettings_showToolTip_input: any;
	@Input('toolbarSettings.toolbarItem') toolbarSettings_toolbarItem_input: any;
	@Input('serverActionSettings.load') serverActionSettings_load_input: any;
	@Input('serverActionSettings.fileUpload') serverActionSettings_fileUpload_input: any;
	@Input('serverActionSettings.print') serverActionSettings_print_input: any;
	@Input('serverActionSettings.download') serverActionSettings_download_input: any;
	@Input('strikethroughSettings.color') strikethroughSettings_color_input: any;
	@Input('strikethroughSettings.author') strikethroughSettings_author_input: any;
	@Input('strikethroughSettings.opacity') strikethroughSettings_opacity_input: any;
	@Input('strikethroughSettings.subject') strikethroughSettings_subject_input: any;
	@Input('strikethroughSettings.modifiedDate') strikethroughSettings_modifiedDate_input: any;
	@Input('strikethroughSettings.isLocked') strikethroughSettings_isLocked_input: any;
	@Input('underlineSettings.color') underlineSettings_color_input: any;
	@Input('underlineSettings.author') underlineSettings_author_input: any;
	@Input('underlineSettings.opacity') underlineSettings_opacity_input: any;
	@Input('underlineSettings.subject') underlineSettings_subject_input: any;
	@Input('underlineSettings.modifiedDate') underlineSettings_modifiedDate_input: any;
	@Input('underlineSettings.isLocked') underlineSettings_isLocked_input: any;
	@Input('highlightSettings.color') highlightSettings_color_input: any;
	@Input('highlightSettings.author') highlightSettings_author_input: any;
	@Input('highlightSettings.opacity') highlightSettings_opacity_input: any;
	@Input('highlightSettings.subject') highlightSettings_subject_input: any;
	@Input('highlightSettings.modifiedDate') highlightSettings_modifiedDate_input: any;
	@Input('highlightSettings.isLocked') highlightSettings_isLocked_input: any;
	@Input('signatureSettings.color') signatureSettings_color_input: any;
	@Input('signatureSettings.opacity') signatureSettings_opacity_input: any;
	@Input('textSelectionContextMenu.isEnable') textSelectionContextMenu_isEnable_input: any;
	@Input('textSelectionContextMenu.isCopyEnable') textSelectionContextMenu_isCopyEnable_input: any;
	@Input('textSelectionContextMenu.isSearchEnable') textSelectionContextMenu_isSearchEnable_input: any;
	@Input('textSelectionContextMenu.isHighlightEnable') textSelectionContextMenu_isHighlightEnable_input: any;
	@Input('textSelectionContextMenu.isStrikeoutEnable') textSelectionContextMenu_isStrikeoutEnable_input: any;
	@Input('annotationContextMenu.isEnable') annotationContextMenu_isEnable_input: any;
	@Input('annotationContextMenu.isPopupEnable') annotationContextMenu_isPopupEnable_input: any;
	@Input('annotationContextMenu.isDeleteEnable') annotationContextMenu_isDeleteEnable_input: any;
	@Input('annotationContextMenu.isPropertiesEnable') annotationContextMenu_isPropertiesEnable_input: any;
    @Input('options') options: any;


	@Output('documentLoad') documentLoad_output = new EventEmitter();
	@Output('documentUnload') documentUnload_output = new EventEmitter();
	@Output('pageChange') pageChange_output = new EventEmitter();
	@Output('ajaxRequestFailure') ajaxRequestFailure_output = new EventEmitter();
	@Output('ajaxRequestSuccess') ajaxRequestSuccess_output = new EventEmitter();
	@Output('zoomChange') zoomChange_output = new EventEmitter();
	@Output('hyperlinkClick') hyperlinkClick_output = new EventEmitter();
	@Output('beforePrint') beforePrint_output = new EventEmitter();
	@Output('afterPrint') afterPrint_output = new EventEmitter();
	@Output('pageClick') pageClick_output = new EventEmitter();
	@Output('annotationAdd') annotationAdd_output = new EventEmitter();
	@Output('annotationRemove') annotationRemove_output = new EventEmitter();
	@Output('annotationPropertiesChange') annotationPropertiesChange_output = new EventEmitter();
	@Output('signatureAdd') signatureAdd_output = new EventEmitter();
	@Output('signatureDelete') signatureDelete_output = new EventEmitter();
	@Output('signaturePropertiesChange') signaturePropertiesChange_output = new EventEmitter();
	@Output('signatureResize') signatureResize_output = new EventEmitter();
	@Output('bufferStart') bufferStart_output = new EventEmitter();
	@Output('bufferEnd') bufferEnd_output = new EventEmitter();
	@Output('downloadStart') downloadStart_output = new EventEmitter();
	@Output('downloadEnd') downloadEnd_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('PdfViewer', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_PDFVIEWER_COMPONENTS: Type<any>[] = [PdfViewerComponent
];


