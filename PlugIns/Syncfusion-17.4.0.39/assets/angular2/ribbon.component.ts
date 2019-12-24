import 'syncfusion-javascript/Scripts/ej/web/ej.ribbon.min';
import { CommonModule } from '@angular/common';
import { EJComponents, ArrayTagElement, ComplexTagElement } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders, Directive, forwardRef, ContentChild, ContentChildren, Inject } from '@angular/core';
@Directive({
    selector: 'e-applicationtab-backstagesettings-pages>e-page',
})
export class RibbonPageDirective extends ComplexTagElement {

	@Input('id') id: any;
	@Input('text') text: any;
	@Input('itemType') itemType: any;
	@Input('contentID') contentID: any;
	@Input('enableSeparator') enableSeparator: any;

    
    constructor( @Inject(forwardRef(() => RibbonComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-ribbon>e-applicationtab-backstagesettings-pages',
    queries: {
        children: new ContentChildren(RibbonPageDirective)
    }
})
export class RibbonApplicationTabBackstageSettingsPagesDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => RibbonComponent)) widget: EJComponents<any, any>) {
        super('applicationTab.backstageSettings.pages')
        }
}

@Directive({
    selector: 'e-contentgroups>e-contentgroup',
})
export class RibbonContentGroupDirective extends ComplexTagElement {

	@Input('isMobileOnly') isMobileOnly: any;
	@Input('buttonSettings') buttonSettings: any;
	@Input('columns') columns: any;
	@Input('contentID') contentID: any;
	@Input('cssClass') cssClass: any;
	@Input('customGalleryItems') customGalleryItems: any;
	@Input('customToolTip') customToolTip: any;
	@Input('customToolTip.content') customToolTip_content: any;
	@Input('customToolTip.prefixIcon') customToolTip_prefixIcon: any;
	@Input('customToolTip.title') customToolTip_title: any;
	@Input('dropdownSettings') dropdownSettings: any;
	@Input('enableSeparator') enableSeparator: any;
	@Input('expandedColumns') expandedColumns: any;
	@Input('galleryItems') galleryItems: any;
	@Input('id') id: any;
	@Input('isBig') isBig: any;
	@Input('itemHeight') itemHeight: any;
	@Input('itemWidth') itemWidth: any;
	@Input('splitButtonSettings') splitButtonSettings: any;
	@Input('text') text: any;
	@Input('toggleButtonSettings') toggleButtonSettings: any;
	@Input('toolTip') toolTip: any;
	@Input('quickAccessMode') quickAccessMode: any;
	@Input('type') type: any;

    
    constructor( @Inject(forwardRef(() => RibbonComponent)) widget: EJComponents<any, any>) {
        super([]);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-content>e-contentgroups',
    queries: {
        children: new ContentChildren(RibbonContentGroupDirective)
    }
})
export class RibbonContentGroupsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => RibbonComponent)) widget: EJComponents<any, any>) {
        super('groups')
        }
}

@Directive({
    selector: 'e-contents>e-content',
})
export class RibbonContentDirective extends ComplexTagElement {

	@Input('defaults') defaults: any;
	@Input('defaults.height') defaults_height: any;
	@Input('defaults.width') defaults_width: any;
	@Input('defaults.type') defaults_type: any;
	@Input('defaults.isBig') defaults_isBig: any;
	@Input('groups') groups: any;

	@ContentChild(RibbonContentGroupsDirective) tag_groups: any;
    
    constructor( @Inject(forwardRef(() => RibbonComponent)) widget: EJComponents<any, any>) {
        super(['groups']);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-groups>e-contents',
    queries: {
        children: new ContentChildren(RibbonContentDirective)
    }
})
export class RibbonContentsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => RibbonComponent)) widget: EJComponents<any, any>) {
        super('content')
        }
}

@Directive({
    selector: 'e-groups>e-group',
})
export class RibbonGroupDirective extends ComplexTagElement {

	@Input('alignType') alignType: any;
	@Input('content') content: any;
	@Input('contentID') contentID: any;
	@Input('customContent') customContent: any;
	@Input('enableGroupExpander') enableGroupExpander: any;
	@Input('groupExpanderSettings') groupExpanderSettings: any;
	@Input('groupExpanderSettings.toolTip') groupExpanderSettings_toolTip: any;
	@Input('groupExpanderSettings.customToolTip') groupExpanderSettings_customToolTip: any;
	@Input('text') text: any;
	@Input('type') type: any;

	@ContentChild(RibbonContentsDirective) tag_content: any;
    
    constructor( @Inject(forwardRef(() => RibbonComponent)) widget: EJComponents<any, any>) {
        super(['content']);
        this.parent = widget;
    }
}


@Directive({
    selector: 'e-tabs>e-groups',
    queries: {
        children: new ContentChildren(RibbonGroupDirective)
    }
})
export class RibbonGroupsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => RibbonComponent)) widget: EJComponents<any, any>) {
        super('groups')
        }
}

@Directive({
    selector: 'e-tabs>e-tab',
})
export class RibbonTabDirective extends ComplexTagElement {

	@Input('groups') groups: any;
	@Input('id') id: any;
	@Input('text') text: any;

	@ContentChild(RibbonGroupsDirective) tag_groups: any;
    
    constructor( @Inject(forwardRef(() => RibbonComponent)) widget: EJComponents<any, any>) {
        super(['groups']);
        this.parent = widget;
    }
}


@Directive({
    selector: 'ej-ribbon>e-tabs',
    queries: {
        children: new ContentChildren(RibbonTabDirective)
    }
})
export class RibbonTabsDirective extends ArrayTagElement<ComplexTagElement> {
    constructor(@Inject(forwardRef(() => RibbonComponent)) widget: EJComponents<any, any>) {
        super('tabs')
        }
}




@Component({
    selector: 'ej-ribbon',
    template: ''})
export class RibbonComponent extends EJComponents<any, any> {
	@Input('allowResizing') allowResizing_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('buttonDefaults') buttonDefaults_input: any;
	@Input('showQAT') showQAT_input: any;
	@Input('cssClass') cssClass_input: any;
	@Input('collapsePinSettings') collapsePinSettings_input: any;
	@Input('enableOnDemand') enableOnDemand_input: any;
	@Input('collapsible') collapsible_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('expandPinSettings') expandPinSettings_input: any;
	@Input('applicationTab') applicationTab_input: any;
	@Input('disabledItemIndex') disabledItemIndex_input: any;
	@Input('enabledItemIndex') enabledItemIndex_input: any;
	@Input('selectedItemIndex') selectedItemIndex_input: any;
	@Input('locale') locale_input: any;
	@Input('width') width_input: any;
	@Input('collapsePinSettings.toolTip') collapsePinSettings_toolTip_input: any;
	@Input('collapsePinSettings.customToolTip') collapsePinSettings_customToolTip_input: any;
	@Input('expandPinSettings.toolTip') expandPinSettings_toolTip_input: any;
	@Input('expandPinSettings.customToolTip') expandPinSettings_customToolTip_input: any;
	@Input('applicationTab.backstageSettings') applicationTab_backstageSettings_input: any;
	@Input('applicationTab.backstageSettings.text') applicationTab_backstageSettings_text_input: any;
	@Input('applicationTab.backstageSettings.height') applicationTab_backstageSettings_height_input: any;
	@Input('applicationTab.backstageSettings.width') applicationTab_backstageSettings_width_input: any;
	@Input('applicationTab.backstageSettings.headerWidth') applicationTab_backstageSettings_headerWidth_input: any;
	@Input('applicationTab.menuItemID') applicationTab_menuItemID_input: any;
	@Input('applicationTab.menuSettings') applicationTab_menuSettings_input: any;
	@Input('applicationTab.type') applicationTab_type_input: any;
	@Input('contextualTabs') contextualTabs_input: any;
	@Input('tabs') tabs_input: any;
	@Input('applicationTab.backstageSettings.pages') applicationTab_backstageSettings_pages_input: any;
	@Input('tabs.groups.content') tabs_groups_content_input: any;
	@Input('tabs.groups.content.groups.customGalleryItems') tabs_groups_content_groups_customGalleryItems_input: any;
	@Input('tabs.groups.content.groups.galleryItems') tabs_groups_content_groups_galleryItems_input: any;
    @Input('options') options: any;


	@Output('beforeTabRemove') beforeTabRemove_output = new EventEmitter();
	@Output('create') create_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();
	@Output('groupClick') groupClick_output = new EventEmitter();
	@Output('groupExpand') groupExpand_output = new EventEmitter();
	@Output('galleryItemClick') galleryItemClick_output = new EventEmitter();
	@Output('backstageItemClick') backstageItemClick_output = new EventEmitter();
	@Output('collapse') collapse_output = new EventEmitter();
	@Output('expand') expand_output = new EventEmitter();
	@Output('load') load_output = new EventEmitter();
	@Output('tabAdd') tabAdd_output = new EventEmitter();
	@Output('tabClick') tabClick_output = new EventEmitter();
	@Output('tabCreate') tabCreate_output = new EventEmitter();
	@Output('tabRemove') tabRemove_output = new EventEmitter();
	@Output('tabSelect') tabSelect_output = new EventEmitter();
	@Output('toggleButtonClick') toggleButtonClick_output = new EventEmitter();
	@Output('qatMenuItemClick') qatMenuItemClick_output = new EventEmitter();

	@ContentChild(RibbonApplicationTabBackstageSettingsPagesDirective) tag_applicationTab_backstageSettings_pages: any;
	@ContentChild(RibbonTabsDirective) tag_tabs: any;
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('Ribbon', el, cdRef, ['applicationTab.backstageSettings.pages', 'tabs'], _ejIterableDiffers, _ejkeyvaluediffers);
    }



}

export var EJ_RIBBON_COMPONENTS: Type<any>[] = [RibbonComponent
, RibbonApplicationTabBackstageSettingsPagesDirective, RibbonContentGroupsDirective, RibbonContentsDirective, RibbonGroupsDirective, RibbonTabsDirective, RibbonPageDirective, RibbonContentGroupDirective, RibbonContentDirective, RibbonGroupDirective, RibbonTabDirective];


