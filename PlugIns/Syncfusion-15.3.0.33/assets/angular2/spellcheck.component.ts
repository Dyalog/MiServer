import 'syncfusion-javascript/Scripts/ej/web/ej.spellcheck.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-spellcheck',
    template: '<ng-content></ng-content>'})
export class SpellCheckComponent extends EJComponents<any, any> {
	@Input('dictionarySettings') dictionarySettings_input: any;
	@Input('misspellWordCss') misspellWordCss_input: any;
	@Input('locale') locale_input: any;
	@Input('maxSuggestionCount') maxSuggestionCount_input: any;
	@Input('ignoreWords') ignoreWords_input: any;
	@Input('contextMenuSettings') contextMenuSettings_input: any;
	@Input('ignoreSettings') ignoreSettings_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('enableValidateOnType') enableValidateOnType_input: any;
	@Input('controlsToValidate') controlsToValidate_input: any;
	@Input('enableAsync') enableAsync_input: any;
	@Input('dictionarySettings.dictionaryUrl') dictionarySettings_dictionaryUrl_input: any;
	@Input('dictionarySettings.customDictionaryUrl') dictionarySettings_customDictionaryUrl_input: any;
	@Input('contextMenuSettings.enable') contextMenuSettings_enable_input: any;
	@Input('contextMenuSettings.menuItems') contextMenuSettings_menuItems_input: any;
	@Input('ignoreSettings.ignoreAlphaNumericWords') ignoreSettings_ignoreAlphaNumericWords_input: any;
	@Input('ignoreSettings.ignoreEmailAddress') ignoreSettings_ignoreEmailAddress_input: any;
	@Input('ignoreSettings.ignoreMixedCaseWords') ignoreSettings_ignoreMixedCaseWords_input: any;
	@Input('ignoreSettings.ignoreUpperCase') ignoreSettings_ignoreUpperCase_input: any;
	@Input('ignoreSettings.ignoreUrl') ignoreSettings_ignoreUrl_input: any;
	@Input('ignoreSettings.ignoreFileNames') ignoreSettings_ignoreFileNames_input: any;


	@Output('actionSuccess') actionSuccess_output = new EventEmitter();
	@Output('actionBegin') actionBegin_output = new EventEmitter();
	@Output('actionFailure') actionFailure_output = new EventEmitter();
	@Output('start') start_output = new EventEmitter();
	@Output('complete') complete_output = new EventEmitter();
	@Output('contextOpen') contextOpen_output = new EventEmitter();
	@Output('contextClick') contextClick_output = new EventEmitter();
	@Output('dialogBeforeOpen') dialogBeforeOpen_output = new EventEmitter();
	@Output('dialogOpen') dialogOpen_output = new EventEmitter();
	@Output('dialogClose') dialogClose_output = new EventEmitter();
	@Output('validating') validating_output = new EventEmitter();
	@Output('targetUpdating') targetUpdating_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('SpellCheck', el, cdRef, []);
    }



}

export var EJ_SPELLCHECK_COMPONENTS: Type<any>[] = [SpellCheckComponent
];


