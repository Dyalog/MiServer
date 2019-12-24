import 'syncfusion-javascript/Scripts/ej/web/ej.rte.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const RTEValueAccessor: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => RTEComponent),
	multi: true
};

@Component({
    selector: '[ej-rte]',
    template: '',
    host: { '(ejchange)': 'onChange($event.value)', '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
	providers: [RTEValueAccessor]
})
export class RTEComponent extends EJComponents<any, any> implements ControlValueAccessor
{
	@Input('allowEditing') allowEditing_input: any;
	@Input('allowKeyboardNavigation') allowKeyboardNavigation_input: any;
	@Input('autoFocus') autoFocus_input: any;
	@Input('autoHeight') autoHeight_input: any;
	@Input('pasteCleanupSettings') pasteCleanupSettings_input: any;
	@Input('colorCode') colorCode_input: any;
	@Input('colorPaletteColumns') colorPaletteColumns_input: any;
	@Input('colorPaletteRows') colorPaletteRows_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('enabled') enabled_input: any;
	@Input('enableHtmlEncode') enableHtmlEncode_input: any;
	@Input('enablePersistence') enablePersistence_input: any;
	@Input('enableResize') enableResize_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('enableXHTML') enableXHTML_input: any;
	@Input('enableTabKeyNavigation') enableTabKeyNavigation_input: any;
	@Input('exportToPdfSettings') exportToPdfSettings_input: any;
	@Input('exportToWordSettings') exportToWordSettings_input: any;
	@Input('externalCSS') externalCSS_input: any;
	@Input('fileBrowser') fileBrowser_input: any;
	@Input('fontName') fontName_input: any;
	@Input('fontSize') fontSize_input: any;
	@Input('format') format_input: any;
	@Input('height') height_input: any;
	@Input('htmlAttributes') htmlAttributes_input: any;
	@Input('iframeAttributes') iframeAttributes_input: any;
	@Input('imageBrowser') imageBrowser_input: any;
	@Input('importSettings') importSettings_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('locale') locale_input: any;
	@Input('maxHeight') maxHeight_input: any;
	@Input('maxLength') maxLength_input: any;
	@Input('maxWidth') maxWidth_input: any;
	@Input('minHeight') minHeight_input: any;
	@Input('minWidth') minWidth_input: any;
	@Input('name') name_input: any;
	@Input('showClearAll') showClearAll_input: any;
	@Input('showClearFormat') showClearFormat_input: any;
	@Input('showCustomTable') showCustomTable_input: any;
	@Input('showContextMenu') showContextMenu_input: any;
	@Input('showDimensions') showDimensions_input: any;
	@Input('showFontOption') showFontOption_input: any;
	@Input('showFooter') showFooter_input: any;
	@Input('showHtmlSource') showHtmlSource_input: any;
	@Input('showHtmlTagInfo') showHtmlTagInfo_input: any;
	@Input('showToolbar') showToolbar_input: any;
	@Input('showCharCount') showCharCount_input: any;
	@Input('showRoundedCorner') showRoundedCorner_input: any;
	@Input('showWordCount') showWordCount_input: any;
	@Input('tableColumns') tableColumns_input: any;
	@Input('tableRows') tableRows_input: any;
	@Input('tools') tools_input: any;
	@Input('toolsList') toolsList_input: any;
	@Input('toolbarOverflowMode') toolbarOverflowMode_input: any;
	@Input('tooltipSettings') tooltipSettings_input: any;
	@Input('undoStackLimit') undoStackLimit_input: any;
	@Input('validationRules') validationRules_input: any;
	@Input('validationMessage') validationMessage_input: any;
	@Input('width') width_input: any;
	@Input('zoomStep') zoomStep_input: any;
	@Input('pasteCleanupSettings.listConversion') pasteCleanupSettings_listConversion_input: any;
	@Input('pasteCleanupSettings.cleanCSS') pasteCleanupSettings_cleanCSS_input: any;
	@Input('pasteCleanupSettings.removeStyles') pasteCleanupSettings_removeStyles_input: any;
	@Input('pasteCleanupSettings.cleanElements') pasteCleanupSettings_cleanElements_input: any;
	@Input('exportToPdfSettings.url') exportToPdfSettings_url_input: any;
	@Input('exportToPdfSettings.fileName') exportToPdfSettings_fileName_input: any;
	@Input('exportToWordSettings.url') exportToWordSettings_url_input: any;
	@Input('exportToWordSettings.fileName') exportToWordSettings_fileName_input: any;
	@Input('fileBrowser.ajaxAction') fileBrowser_ajaxAction_input: any;
	@Input('fileBrowser.extensionAllow') fileBrowser_extensionAllow_input: any;
	@Input('fileBrowser.filePath') fileBrowser_filePath_input: any;
	@Input('imageBrowser.ajaxAction') imageBrowser_ajaxAction_input: any;
	@Input('imageBrowser.extensionAllow') imageBrowser_extensionAllow_input: any;
	@Input('imageBrowser.filePath') imageBrowser_filePath_input: any;
	@Input('importSettings.url') importSettings_url_input: any;
	@Input('tools.alignment') tools_alignment_input: any;
	@Input('tools.casing') tools_casing_input: any;
	@Input('tools.clear') tools_clear_input: any;
	@Input('tools.clipboard') tools_clipboard_input: any;
	@Input('tools.edit') tools_edit_input: any;
	@Input('tools.doAction') tools_doAction_input: any;
	@Input('tools.effects') tools_effects_input: any;
	@Input('tools.font') tools_font_input: any;
	@Input('tools.formatStyle') tools_formatStyle_input: any;
	@Input('tools.images') tools_images_input: any;
	@Input('tools.indenting') tools_indenting_input: any;
	@Input('tools.links') tools_links_input: any;
	@Input('tools.lists') tools_lists_input: any;
	@Input('tools.media') tools_media_input: any;
	@Input('tools.style') tools_style_input: any;
	@Input('tools.tables') tools_tables_input: any;
	@Input('tools.view') tools_view_input: any;
	@Input('tools.print') tools_print_input: any;
	@Input('tools.importExport') tools_importExport_input: any;
	@Input('tools.customOrderedList') tools_customOrderedList_input: any;
	@Input('tools.customUnorderedList') tools_customUnorderedList_input: any;
    @Input('options') options: any;

	@Input('value') value_two: any;
	@Output('valueChange') value_twoChange = new EventEmitter<any>();

	@Output('change') change_output = new EventEmitter();
	@Output('ejchange') ejchange_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('contextMenuClick') contextMenuClick_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('execute') execute_output = new EventEmitter();
	@Output('keydown') keydown_output = new EventEmitter();
	@Output('keyup') keyup_output = new EventEmitter();
	@Output('preRender') preRender_output = new EventEmitter();
	@Output('select') select_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('RTE', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }


    onChange: (_: any) => void = noop;
	onTouched: () => void = noop;

	writeValue(value: any): void {
		if (this.widget) {
			this.widget.option('model.value', value);
		} else {
			this.model.value = value;
		}
	}

	registerOnChange(fn: (_: any) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

}

export var EJ_RTE_COMPONENTS: Type<any>[] = [RTEComponent
];


