/*!
*  filename: ej.mobile.all.d.ts
*  version : 13.4.0.53
*  Copyright Syncfusion Inc. 2001 - 2016. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
declare module ej {
	
	var dataUtil: dataUtil;
    function isMobile(): boolean;
    function isIOS(): boolean;
    function isAndroid(): boolean;
    function isFlat(): boolean;
    function isWindows(): boolean;
    function isCssCalc(): boolean;
    function getCurrentPage(): JQuery;
    function isLowerResolution(): boolean;
    function browserInfo(): browserInfoOptions;
    function isTouchDevice(): boolean;
    function addPrefix(style: string): string;
    function animationEndEvent(): string;
    function blockDefaultActions(e: Object): void;
    function buildTag(tag: string, innerHtml: string, styles: Object, attrs: Object): JQuery;
    function cancelEvent(): string;
    function copyObject(): string;
    function createObject(nameSpace: string, value: Object, initIn: string): JQuery;
    function defineClass(className: string, constructor:any, proto: Object, replace: boolean): Object;
    function destroyWidgets(element: Object): void;
    function endEvent(): string;
    function event(type: string, data: any, eventProp: Object): Object;
    function getAndroidVersion(): Object;
    function getAttrVal(ele: Object, val: string, option: Object): Object;
    function getBooleanVal(ele: Object, val: string, option: Object): Object;
    function getClearString(): string;
    function getDimension(element: Object, method: string): Object;
    function getFontString(fontObj: Object): string;
    function getFontStyle(style: string): string;
    function getMaxZindex(): number;
    function getNameSpace(className: string): string;
    function getObject(nameSpace: string): Object;
    function getOffset(ele: string): Object;
    function getRenderMode(): string;
    function getScrollableParents(element: Object): void;
    function getTheme(): string;
    function getZindexPartial(element: Object, popupEle: string): number;
    function hasRenderMode(element: string): void;
    function hasStyle(prop: string): boolean;
    function hasTheme(element: string): string;
    function hexFromRGB(color: string): string;
    function ieClearRemover(element: string): void;
    function isAndroidWebView(): string;
    function isDevice(): boolean;
    function isIOS7(): boolean;
    function isIOSWebView(): boolean;
    function isLowerAndroid(): boolean;
    function isNullOrUndefined(value: Object): boolean;
    function isPlainObject(): JQuery;
    function isPortrait(): any;
    function isTablet(): boolean;
    function isWindowsWebView(): string;
    function listenEvents(selectors:any, eventTypes: any, handlers: any, remove?: any, pluginObj?: any, disableMouse?: boolean): void;
    function listenTouchEvent(selectors:any, eventTypes: any, handlers: any, remove?: any, pluginObj?: any, disableMouse?: boolean): void;
    function logBase(val: string, base: string): number;
    function measureText(text: string, maxwidth: number, font: string): string;
    function moveEvent(): string;
    function print(element: string): void;
    function proxy(fn: Object, context: string, arg: string): boolean;
    function round(value: string, div: string, up: string): any;
    function sendAjaxRequest(ajaxOptions: Object): void;
    function setCaretToPos(nput: string, pos1: string, pos2: string): void;
    function setRenderMode(element: string): void;
    function setTheme(): Object;
    function startEvent(): string;
    function tapEvent(): string;
    function tapHoldEvent(): string;
    function throwError(): Object;
    function transitionEndEvent(): Object;
    function userAgent(): boolean;
    function widget(pluginName: string, className: string, proto: Object): Object;
    function avg(json: Object, filedName: string): any;
    function getGuid(prefix: string): number;
    function group(jsonArray: any, field: string, agg: string, level: number, groupDs: string): Object;
    function isJson(jsonData: string): string;
    function max(jsonArray: any, fieldName: string, comparer: string): any;
    function min(jsonArray: any, fieldName: string, comparer: string): any;
    function merge(first: string, second: string): any;
    function mergeshort(jsonArray: any, fieldName: string, comparer: string): any;
    function parseJson(jsonText: string): string;
    function parseTable(table: number, headerOption: string, headerRowIndex: string): Object;
    function select(jsonArray: any, fields: string): any;
    function setTransition(): boolean;
    function sum(json: string, fieldName: string): string;
    function swap(array: any, x: string, y: string): any; 
    var cssUA: string;
    var serverTimezoneOffset: number;
    var transform: string;
    var transformOrigin: string;
    var transformStyle: string;
    var transition: string;
    var transitionDelay: string;
    var transitionDuration: string;
    var transitionProperty: string;
    var transitionTimingFunction: string;
    export module device {
        function isAndroid(): boolean;
        function isIOS(): boolean;
        function isFlat(): boolean;
        function isIOS7(): boolean;
        function isWindows(): boolean;
    }
    export module widget {
        var autoInit: boolean;
        var registeredInstances: Array<any>;
        var registeredWidgets: Array<any>;
        function register(pluginName: string, className: string, prototype: any): void;
        function destroyAll(elements: Element): void;
        function init(element: Element): void;
        function registerInstance(element: Element, pluginName: string, className: string, prototype: any):void;
    } 
	
	interface browserInfoOptions {
		name: string;
		version: string;
		culture: Object;
		isMSPointerEnabled: boolean;
	}
	class WidgetBase {
        destroy(): void;
        element: JQuery;
        setModel(options: Object, forceSet?: boolean):any;
        option(prop?: Object, value?: Object, forceSet?: boolean): any;
        persistState(): void;
        restoreState(silent: boolean): void;
    }

    class Widget extends WidgetBase {
        constructor(pluginName: string, className: string, proto: any);
        static fn: Widget;
        static extend(widget: Widget): any;
        register(pluginName: string, className: string, prototype: any): void;
        destroyAll(elements: Element): void;      
        model: any;     
    }


    interface BaseEvent {
        cancel: boolean;
        type: string;       
    }
    class DataManager {
        constructor(dataSource?: any, query?: ej.Query, adaptor?: any); 
        setDefaultQuery(query: ej.Query): void;
        executeQuery(query?: ej.Query, done?: any, fail?: any, always?: any): JQueryPromise<any>;
        executeLocal(query?: ej.Query): ej.DataManager;
        saveChanges(changes?: Changes, key?: string, tableName?: string): JQueryDeferred<any>;
        insert(data: Object, tableName: string): JQueryPromise<any>;
        remove(keyField: string, value: any, tableName: string): Object;
        update(keyField: string, value: any, tableName: string): Object;
    }    

    class Query {
        constructor();
        static fn: Query;
        static extend(prototype: Object): Query;
        key(field: string): ej.Query;
        using(dataManager: ej.DataManager): ej.Query;
        execute(dataManager: ej.DataManager, done: any, fail?: string, always?: string): any;
        executeLocal(dataManager: ej.DataManager): ej.DataManager;
        clone(): ej.Query;
        from(tableName: any): ej.Query;
        addParams(key: string, value: string): ej.Query;
        expand(tables: any): ej.Query;
        where(fieldName: string, operator: ej.FilterOperators, value: string, ignoreCase?: boolean): ej.Query;
		where(predicate:ej.Predicate):ej.Query;
        search(searchKey: any, fieldNames?:  any, operator?: string, ignoreCase?: boolean): ej.Query;
        sortBy(fieldName: string, comparer?: ej.SortOrder, isFromGroup?: boolean): ej.Query;
        sortByDesc(fieldName: string): ej.Query;
        group(fieldName: string): ej.Query;
        page(pageIndex: number, pageSize: number): ej.Query;
        take(nos: number): ej.Query;
        skip(nos: number): ej.Query;
        select(fieldNames: any): ej.Query;
        hierarchy(query: ej.Query, selectorFn: any): ej.Query;
        foreignKey(key: string): ej.Query;
        requiresCount(): ej.Query;
        range(start:number, end:number): ej.Query;
    }

    class Adaptor {
        constructor(ds: any);
        pvt: Object;
        type: ej.Adaptor;
        options: AdaptorOptions;
        extend(overrides: any): ej.Adaptor;
        processQuery(dm: ej.DataManager, query: ej.Query):any;
        processResponse(data: Object, ds: any, query: ej.Query, xhr: JQueryXHR, request?: Object, changes?: Changes): Object;
        convertToQueryString(req: any, query: ej.Query, dm: ej.DataManager): JQueryParam;
    }

    interface AdaptorOptions {
        from?: string;
        requestType?: string;
        sortBy?: string;
        select?: string;
        skip?: string;
        group?: string;
        take?: string;
        search?: string;
        count?: string;
        where?: string;
        aggregates?: string;
    }

    class UrlAdaptor extends ej.Adaptor {
        constructor();
        processQuery(dm: ej.DataManager, query: ej.Query, hierarchyFilters?: Object): {
            type: string; url: string; ejPvtData: Object; contentType?: string; data?: Object;
        }
        convertToQueryString(req: Object, query: ej.Query, dm: ej.DataManager): JQueryParam;
        processResponse(data: Object, ds: any, query: ej.Query, xhr: JQueryXHR, request?: Object, changes?: Changes): Object;
        onGroup(e: any): void;
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): void;
        beforeSend(dm: ej.DataManager, request: any, settings?:any): void;
        insert(dm: ej.DataManager, data: Object, tableName: string): { url: string; data: any };
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data?: any };
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data: any };
        getFiltersFrom(data: Object, query: ej.Query): ej.Predicate;
    }

    class ODataAdaptor extends ej.UrlAdaptor {
        constructor();
        options: UrlAdaptorOptions;
        onEachWhere(filter: any, requiresCast: boolean): any;
        onPredicate(pred: ej.Predicate, query: ej.Query, requiresCast: boolean): string;
        onComplexPredicate(pred: ej.Predicate, requiresCast: boolean): string;
        onWhere(filters: Array<string>): string;
        onEachSearch(e: Object): void;
        onSearch(e: Object): string;
        onEachSort(e: Object): string;
        onSortBy(e: Object): string;
        onGroup(e: Object): string;
        onSelect(e: Object): string;
        onCount(e: Object): string;
        beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        processResponse(data: Object, ds: Object, query: ej.Query, xhr:any, request: any, changes: Changes): {
            result: Object; count: number
        };
        convertToQueryString(req: Object, query: ej.Query, dm: ej.DataManager): JQueryParam;
        insert(dm: ej.DataManager, data: Object, tableName: string): { url: string; data: Object; }
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; }
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; data: Object; accept: string; }
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): { url: string; type: string; data: Object; contentType: string; }
        generateDeleteRequest(arr: Array<any>, e: any): string;
        generateInsertRequest(arr: Array<any>, e: any): string;
        generateUpdateRequest(arr: Array<any>, e: any): string;
    }
    interface UrlAdaptorOptions {
        requestType?: string;
        accept?: string;
        multipartAccept?: string;
        sortBy?: string;
        select?: string;
        skip?: string;
        take?: string;
        count?: string;
        where?: string;
        expand?: string;
        batch?: string;
        changeSet?: string;
        batchPre?: string;
        contentId?: string;
        batchContent?: string;
        changeSetContent?: string;
        batchChangeSetContentType?: string;
    }

    class ODataV4Adaptor extends ej.ODataAdaptor {
        constructor();
        options: ODataAdaptorOptions;
        onCount(e: Object): string;
        onEachSearch(e: Object): void;
        onSearch(e: Object): string; 
        beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        processResponse(data: Object, ds: Object, query: ej.Query, xhr:any, request: any, changes: Changes): {
            result: Object; count: number
        };
        
    }
    interface ODataAdaptorOptions {
        requestType?: string;
        accept?: string;
        multipartAccept?: string;
        sortBy?: string;
        select?: string;
        skip?: string;
        take?: string;
        count?: string;
        search?: string;
        where?: string;
        expand?: string;
        batch?: string;
        changeSet?: string;
        batchPre?: string;
        contentId?: string;
        batchContent?: string;
        changeSetContent?: string;
        batchChangeSetContentType?: string;
    }

    class JsonAdaptor extends ej.Adaptor {
        constructor();
        processQuery(ds: Object, query: ej.Query): string;
        batchRequest(dm: ej.DataManager, changes: Changes, e:any): Changes;
        onWhere(ds: Object, e: any): any;
        onSearch(ds: Object, e: any): any
        onSortBy(ds: Object, e: any, query: ej.Query): Object;
        onGroup(ds: Object, e: any, query: ej.Query): Object;
        onPage(ds: Object, e: any, query: ej.Query): Object;
        onRange(ds: Object, e: any): Object;
        onTake(ds: Object, e: any): Object;
        onSkip(ds: Object, e: any): Object;
        onSelect(ds: Object, e: any): Object;
        insert(dm: ej.DataManager, data: any): Object;
        remove(dm: ej.DataManager, keyField: string, value:any, tableName: string): Object;
        update(dm: ej.DataManager, keyField: string, value:any, tableName: string): Object;
    }
    class TableModel {
        constructor(name: string, jsonArray: Array<any>, dataManager: ej.DataManager, modelComputed: any);
        on(eventName: string, handler: any): void;
        off(eventName: string, handler: any): void;
        setDataManager(dataManager: DataManager): void;
        saveChanges(): void;
        rejectChanges(): void;
        insert(json: any): void;
        update(value: any): void;
        remove(key: string): void;
        isDirty(): boolean;
        getChanges(): Changes;
        toArray(): Array<any>;
        setDirty(dirty:any, model:any): void;
        get(index: number): void;
        length(): number;
        bindTo(element: any): void;
    }
    class Model {
        constructor(json: any, table: string, name: string);
        formElements: Array<string>;
        computes(value: any): void;
        on(eventName: string, handler: any): void;
        off(eventName: string, handler: any): void;
        set(field: string, value: any): void;
        get(field: string): any;
        revert(suspendEvent: any): void;
        save(dm: ej.DataManager, key: string): void;
        markCommit(): void;
        markDelete(): void;
        changeState(state: boolean, args: any): void;
        properties(): any;
        bindTo(element: any): void;
        unbind(element: any): void;
    }
    interface Changes {
        changed?: Array<any>;
        added?: Array<any>;
        deleted?: Array<any>;
    }
    class Predicate {
        constructor(field: string, operator: ej.FilterOperators, value: any, ignoreCase: boolean);
        and(field: string, operator: any, value:any, ignoreCase:boolean): void;
        or(field: string, operator: any, value: any, ignoreCase: boolean): void;
        validate(record: Object): boolean;
        toJSON(): {
            isComplex: boolean;
            field: string;
            operator: string;
            value: any;
            ignoreCase: boolean;
            condition: string;
            predicates: any;
        };
    }
    interface dataUtil { 
        swap(array: Array<any>, x: number, y: number): void;
        mergeSort(jsonArray: Array<any>, fieldName: string, comparer:any): Array<any>;
        max(jsonArray: Array<any>, fieldName: string, comparer: string): Array<any>;
        min(jsonArray: Array<any>, fieldName: string, comparer: string): Array<any>;
        distinct(jsonArray: Array<any>, fieldName: string, requiresCompleteRecord:any): Array<any>;
        sum(json:any, fieldName: string): number;
        avg(json:any, fieldName: string): number;
        select(jsonArray: Array<any>, fieldName: string, fields:string): Array<any>;
        group(jsonArray: Array<any>, field: string, /* internal */ level: number): Array<any>;
        parseTable(table: string, headerOption: ej.headerOption, headerRowIndex: number): Object;
    }
    interface AjaxSettings {
        type?: string;
        cache: boolean;
        data?: any;
        dataType?: string;
        contentType?: any;
        async?: boolean;
    }
	enum HatchStyle {
	    None,        
        BackwardDiagonal,        
	    Cross ,
	    DarkDownwardDiagonal ,
	    DarkHorizontal ,
	    DarkUpwardDiagonal ,
	    DarkVertical ,
	    DashedDownwardDiagonal ,
	    DashedHorizontal ,
	    DashedUpwardDiagonal ,
	    DashedVertical ,
	    DiagonalBrick ,
	    DiagonalCross ,
	    Divot ,
	    DottedDiamond ,       
	    DottedGrid ,
	    ForwardDiagonal ,
	    Horizontal ,
	    HorizontalBrick ,
	    LargeCheckerBoard ,
	    LargeConfetti ,
	    LargeGrid ,
	    LightDownwardDiagonal ,
	    LightHorizontal ,
	    LightUpwardDiagonal ,
	    LightVertical ,
	    Max ,
	    Min ,
	    NarrowHorizontal ,
	    NarrowVertical ,
	    OutlinedDiamond ,
	    Percent90 ,
	    Wave ,
	    Weave ,
	    WideDownwardDiagonal ,
	    WideUpwardDiagonal ,
	    ZigZag     
    }
    enum ContentType{ 
    	TextOnly, 
    	ImageOnly, 
    	ImageBoth, 
    	TextAndImage, 
    	ImageTextImage 
    }
    	
    enum ImagePosition{ 
    	ImageRight, 
    	ImageLeft,
    	ImageTop, 
    	ImageBottom
    }
    	
    enum ButtonSize{ 
    	Normal,
    	Mini, 
    	Small,
    	Medium, 
    	Large			
    }
    
    enum ButtonType{ 
    	Button,
    	Reset, 
    	Submit
    }
    enum TextAlign{
    	Center,
        Justify,
        Left,
        Right
    }
   	enum AnimationType {
		Default,
   		None
   	}
	enum ArrowPosition {
		Bottom,
		Left,
		Right,
		Top
	}
	enum ButtonMode {
		Dropdown,
		Split
	}
	enum CheckState {
		Check,
		Indeterminate,
		Uncheck
	}
	enum CheckboxSize {
		Medium,
		Small
	}
	enum Direction {
		Left,
		None,
		Right
	}
	enum FilterOperators {
		contains,
		endsWith,
		equal,
		greaterThan,
		greaterThanOrEqual,
		lessThan,
		lessThanOrEqual,
		notEqual,
		startsWith
	}
	enum Format {
		Cloud,
		List
	}
	enum InputMode {
		Password,
		Text
	}
	enum MatrixDefaults {
		m11,
		m12,
		m21,
		m22,
		offsetX,
		offsetY,
		type
	}
	enum MatrixTypes {
		Identity,
		Scaling,
		Translation,
		Unknown
	}
	enum MenuType {
		ContextMenu,
		NormalMenu
	}
	enum MultiSelectMode {
		Delimiter,
		None,
		VisualMode
	}
	enum Orientation {
		Horizontal,
		Vertical
	}
	enum RadioButtonSize {
		Medium,
		Small
	}
	enum SliderType {
		Default,
		MinRange,
		Range
	}
	enum SortOrder {
		Ascending,
		Descending
	}
	enum VirtualScrollMode {
		Continous,
		Normal
	}
	enum eventType {
		click,
		mouseDown,
		mouseLeave,
		mouseMove,
		mouseUp
	}
	enum headerOption {
		row,
		tHead
	}
		
	enum filterType{
		StartsWith,
		Contains,
		EndsWith,
		LessThan,
		GreaterThan,
		LessThanOrEqual ,
		GreaterThanOrEqual,
		Equal,
		NotEqual
	}
	enum Animation{
		Fade,
		None,
		Slide
	} 
	enum Type{
		Overlay,
		Slide
	}

		var globalize:globalize;
		var cultures:culture;
		function addCulture(name: string, culture ?: any): void;
    	function preferredCulture(culture ?: string): culture;
    	function format(value: any, format: string, culture ?: string): string;
    	function parseInt(value: string, radix?: any, culture ?: string): number;
    	function parseFloat(value: string, radix?: any, culture ?: string): number;
    	function parseDate(value: string, format: string, culture ?: string): Date;
    	function getLocalizedConstants(controlName: string, culture ?: string): any;

interface globalize {  
        addCulture(name: string, culture?: any): void;
        preferredCulture(culture?: string): culture;
        format(value: any, format: string, culture?: string): string; 
        parseInt(value: string, radix?: any, culture?: string): number;
        parseFloat(value: string, radix?: any, culture?: string): number;
        parseDate(value: string, format: string, culture?: string): Date;
        getLocalizedConstants(controlName: string, culture?: string): any;
    }
    interface culture {
        name?: string;
        englishName?: string;
        namtiveName?: string;
        language?: string;
        isRTL: boolean;
        numberFormat?: formatSettings;
        calendars?: calendarsSettings;
    }
    interface formatSettings {
        pattern: Array<string>;
        decimals: number;
        groupSizes: Array<number>;
        percent: percentSettings;
        currency: currencySettings;
    }
    interface percentSettings {
        pattern: Array<string>;
        decimals: number;
        groupSizes: Array<number>;
        symbol: string;
    }
    interface currencySettings {
        pattern: Array<string>;
        decimals: number;
        groupSizes: Array<number>;
        symbol: string;
    }
    interface calendarsSettings {
        standard: standardSettings;
    }
    interface standardSettings {
        firstDay: number;
        days: daySettings;
        months: monthSettings;
        AM: Array<string>;
        PM: Array<string>;
        twoDigitYearMax: number;
        patterns: patternSettings;
    }
    interface daySettings {
        names: Array<string>;
        namesAbbr: Array<string>;
        namesShort: Array<string>;
    }
    interface monthSettings {
        names: Array<string>;
        namesAbbr: Array<string>;
    }
    interface patternSettings {
        d: string;
        D: string;
        t: string;
        T: string;
        f: string;
        F: string;
        M: string;
        Y: string;
        S: string;
    } 
}
declare module App {
	
var addMetaTags: boolean;
    var allowPopState: boolean;
    var allowPushState: boolean;
    var activePage: JQuery;
	var waitingPopUp: JQuery;
    var hashMonitoring: boolean;
    var pageTransition: string;
    var renderEJMControlByDef: boolean;
    function createPage(element: JQuery): void;
    function getLoaction(): string;
    function initPage(): void;
    function loadView(url: string): void;
    function transferPage(fromPage: Object, toPage: Object, options?: any, isFromAjax?: boolean): void;
    function userAgent(): void;
    
    var pageHistory: {
        activeHistory(): string;
        add(url: string, options?: PageOption): void;
        clearForward(): void;
        find(url: string): number;
        lastHistory(): string;
        nextHistory(): string;
        prevHistory(): string;
        makeUrlAbsolute(hashString: string): void;
    }
    //Pageoption type for appview page
    interface PageOption {
        title?: string;
        href?: string;
        hash?: string;
    }
    var route: {
        convertToRelativeUrl(): void;
        hasProtocol(url: string): boolean;
        setPageRenderMode(element: JQuery): void;
        splitUrl(url: string): any;
    }
}
declare module ej.mobile {
	
 //Global Interface
    interface windowsOption {
        renderDefault?: boolean;
    }
	enum RenderMode{
		Auto,
		IOS7,
		Android,
		Windows,
		Flat
	}
	enum Theme{
		Auto,
		Dark,
		Light
	}
class Accordion extends ej.Widget {
    static fn: Accordion;
    constructor(element: JQuery, options?: AccordionOptions);
    model: AccordionOptions;
    validTags: Array<string>;
    defaults: AccordionOptions;
    collapseAll(): void;
    disableItems(itemIndexes: Array<any>): void;
    enableItems(itemIndexes: Array<any>): void;
    selectItems(activeList: Array<any>): void;
    deselectItems(activeList: Array<any>): void;
    expandAll(): void;
    hide(): void;
    show(): void;
    destroy(): void;
    getItemsCount(): number;
}
//ejmAccordion Option
interface AccordionOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    cssClass?: string;
    enableCache?: boolean;
    allowMultipleOpen?: boolean;
    collapsible?: boolean;
    enabled?: boolean;
    enableMultipleOpen?: boolean;
    heightAdjustMode?: ej.mobile.Accordion.HeightAdjustMode;
    windows?: windowsOption;
    enablePersistence?: boolean;
    selectedItems?: Array<any>;
    disabledItems?: Array<any>;
    showHeaderIcon?: boolean;
    spinnerText?: string;
    items?: Array<itemCollection>;
    active? (e: AccordionActiveEventArgs): void;
    ajaxBeforeLoad? (e: AccordionAjaxBeforeLoadEventArgs): void;
    ajaxError? (e: AccordionAjaxErrorEventArgs): void;
    ajaxLoad? (e: AccordionAjaxLoadEventArgs): void;
    ajaxSuccess? (e: AccordionAjaxSuccessEventArgs): void;
    beforeActive? (e: AccordionBeforeActiveEventArgs): void;
    destroy? (e: AccordionEventArgs): void;
    create? (e: AccordionEventArgs): void;
}

interface itemCollection {
    ajaxUrl?: string;
    logoClass?: string;
}
//ejmejmAccordionEvent Arugument
interface AccordionEventArgs {
    cancel: boolean;
    type: string;
    model: AccordionOptions;
}
interface AccordionActiveEventArgs extends AccordionEventArgs {
    items: string;
    lastSelectedItemIndices: number;
    selectedItemIndices: number;
}
interface AccordionAjaxBeforeLoadEventArgs extends AccordionEventArgs {
    url: string;
}
interface AccordionAjaxErrorEventArgs extends AccordionEventArgs {
    title: string;
    data: Object;
    url: string;
}
interface AccordionAjaxLoadEventArgs extends AccordionEventArgs {
}
interface AccordionAjaxSuccessEventArgs extends AccordionEventArgs {
    content: Object;
    data: Object;
    url: string;
}
interface AccordionBeforeActiveEventArgs extends AccordionEventArgs {
    activeItemIndex?: number;
}
export module Accordion {
    enum HeightAdjustMode {
        Content,
        Auto,
        Fill
    }
}
class Autocomplete extends ej.Widget {
    static fn: Autocomplete;
    element: JQuery;
    constructor(element: JQuery, options?: AutocompleteOptions);
    model: AutocompleteOptions;
    defaults: AutocompleteOptions;
    disable(): void;
    enable(): void;
    destroy(): void;
    clearText(): void;
    getSelectedItems(): Array<any>;
    getValue(): string;

}
interface AutocompleteOptions {
    allowScrolling?: boolean;
    filterType?: ej.mobile.Autocomplete.FilterType;
    caseSensitiveSearch?: boolean;
    cssClass?: string;
    enableAutoFill?: boolean;
    delimiterChar?: string;
    enableMultiSelect?: boolean;
    enableCheckbox?: boolean;
    dataSource?: any;
    filterMode?: string;
    itemsCount?: string|number;
    templateId?: string;
    fields?: fieldOptions;
    imageField?: string;
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    mapper?: string;
    watermarkText?: string;
    imageClass?: string;
    allowSorting?: boolean;
    value?: string;
    sortOrder?: ej.mobile.Autocomplete.SortOrder;
    emptyResultText?: string;
    showEmptyResultText?: boolean;
    minCharacter?: number;
    enableDistinct?: boolean;
    enablePersistence?: boolean;
    enabled?: boolean;
    mode?: ej.mobile.Autocomplete.Mode;
    selectedKeys?: string;
    windows?: windowsOption;
    touchEnd? (e: AutocompleteTouchEndEventArgs): void;
    keyPress? (e: AutocompleteKeyPressEventArgs): void;
    select? (e: AutocompleteSelectEventArgs): void;
    change? (e: AutocompleteChangeEventArgs): void;
    focusIn? (e: AutocompleteFocusInEventArgs): void;
    focusOut? (e: AutocompleteFocusOutEventArgs): void;
    destroy? (e: AutocompleteEventArgs): void;
    create? (e: AutocompleteEventArgs): void;
}
interface fieldOptions {
    text?: string;
    key?: string;
}
interface AutocompleteEventArgs {
    cancel: boolean;
    model: AutocompleteOptions;
    type: string;
}
interface AutocompleteTouchEndEventArgs extends AutocompleteEventArgs {
    text: string;
    isChecked: boolean;
    checkedItemsText: Object;
    value: string;
}
interface AutocompleteKeyPressEventArgs extends AutocompleteEventArgs {
    value: string;
}
interface AutocompleteSelectEventArgs extends AutocompleteEventArgs {
    text: string;
    isChecked: boolean;
    checkedItemsText: Object;
    value: string;
}
interface AutocompleteChangeEventArgs extends AutocompleteEventArgs {
    text: string;
    isChecked: boolean;
    checkedItemsText: Object;
    value: string;
}
interface AutocompleteFocusInEventArgs extends AutocompleteEventArgs {
    value: string;
}
interface AutocompleteFocusOutEventArgs extends AutocompleteEventArgs {
    value: string;
}
export module Autocomplete {
    enum FilterType {
        StartsWith,
        Contains
    }
    enum Mode {
        Search,
        Default
    }
    enum SortOrder {
        Ascending,
        Descending
    }
}
class Button extends ej.Widget {
    static fn: Button;
    element: JQuery;
    constructor(element: JQuery, options?: ButtonOptions);
    model: ButtonOptions;
    validTags: Array<string>;
    defaults: ButtonOptions;
    disable(): void;
    enable(): void;
}
class Actionlink extends ej.Widget {
    static fn: Actionlink;
    element: JQuery;
    constructor(element: Element, options?: ButtonOptions);
    model: Object;
    validTags: Array<string>;
    defaults: ButtonOptions;
    disable(): void;
    enable(): void;
}
interface ButtonOptions {
    touchStart?(e: ButtonEventArgs): void;
    touchEnd?(e: ButtonEventArgs): void;
    cssClass?: string;
    enabled?: (boolean | string);
    inline?: (boolean | string);
    renderMode?: (ej.mobile.RenderMode | string);
    text?: string;
    theme?: (ej.mobile.Theme | string);
    imageClass?: string;
    imagePosition?: (ej.mobile.Button.ImagePosition | string);
    contentType?: (ej.mobile.Button.ContentType | string);
    ios7?: ios7ButtonOptions;
    android?: androidButtonOption;
    windows?: windowsButtonOptions;
    flat?: flatButtonOption;
}
interface ButtonEventArgs {
    element: Object;
    text: string;
}
interface ios7ButtonOptions {
    style?: (ej.mobile.Button.IOS7.Style | string);
    color?: (ej.mobile.Button.IOS7.Color | string);
}
interface androidButtonOption {
    style?: (ej.mobile.Button.Android.Style | string);
}
interface windowsButtonOptions extends windowsOption {
    style?: (ej.mobile.Button.Windows.Style | string);
}
interface flatButtonOption {
    style?: (ej.mobile.Button.Flat.Style | string);
}
export module Button{
export module IOS7{
	enum Style{
		Normal,
		Back,
		Header,
		Dialog
	}
	enum Color{
		Gray,
		Black,
		Blue,
		Green,
		Red
	}
	} 
export module Android{
	enum Style{
		Normal,
		Small,
		Dialog
	}

}
export module Windows{
	enum Style{
		Normal,
		Back
		}
}
export module Flat{
	enum Style{
		Normal,
		Back,
		Header
		}
}
	enum ImagePosition{
		Left,
		Right
	}
	enum ContentType{
		Text,
		Image,
		Both
	}
}
class DatePicker extends ej.Widget {
    static fn: DatePicker;
    element: JQuery;
    constructor(element: JQuery, options?: DatePickerOptions);
    model: DatePickerOptions;
    defaults: DatePickerOptions;
    disable(): void;
    enable(): void;
    hide(): void;
    show(): void;
    setCurrentDate(date:string): void;
    getValue(): string;
    destroy(): void;
}

//ejmDatePicker Options
interface DatePickerOptions {
    cssClass?: string;
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    culture?: string;
    dateFormat?: string;
    value?: string;
    enabled?: boolean;
	enablePersistence?: boolean;
    ios7?: ios7Option;
    windows?: windowsOption;
    maxDate?: string;
    minDate?: string;
    load? (e: DatePickerEventArgs): void;
    select? (e: DatePickerEventArgs): void;
    focusIn? (e: DatePickerEventArgs): void;
    focusOut? (e: DatePickerEventArgs): void;
    open? (e: DatePickerEventArgs): void;
    close? (e: DatePickerEventArgs): void;
    change? (e: DatePickerEventArgs): void;
    destroy? (e: DatePickerArgs): void;
    create? (e: DatePickerArgs): void;
}

interface DatePickerArgs {
    type: string;
    model: DatePickerOptions;
    value: string;
}
//ejmDatePickerEvent Arugument
interface DatePickerEventArgs extends DatePickerArgs {
    cancel: boolean;
 
}

interface ios7Option {
    renderDefault: boolean;
}


//Class ejmDropDownList
class DropDownList extends ej.Widget {
    static fn: DropDownList;
    constructor(element: JQuery, options?: DropDownListOptions);
    model: DropDownListOptions;
    defaults: DropDownListOptions;
    show(): void;
    hide(): void;
	getValue():string;
    selectItemByIndex(index:(number|string)): void;
    unselectItemByIndex(index:(number|string)): void;
    selectItemByIndices(indices:Array<any>): void;
    unselectItemByIndices(indices: Array<any>): void;
    destroy(): void;
    getSelectedItemsValue(): Array<string>;
    getSelectedItemValue(): string;
}

//ejmDropDownList WindowsOption
interface windowsDropDownListOption extends windowsOption {
    type?: ej.mobile.DropDownList.WindowsType;
}

interface androidDropDownListOption {
    popUpHeight?: number|string;
}

interface fieldsDropDownListOption {
    text?: string;
    groupBy?: string;
    imageClass?: string;
    imageUrl?: string;
    checkBy?: string;
    enableTemplate?: string;
    templateID?: string;
    value?: string;
}

//ejmDropDownList Option
interface DropDownListOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    cssClass?: string;
    readOnly?: boolean;
    targetID?: string;
    selectedItemIndex?: number|string;
    dataSource?: any;
    fields?: fieldsDropDownListOption;
    query?: string;
    allowVirtualScrolling?: boolean;
    virtualScrollMode?: ej.mobile.DropDownList.VirtualScrollingMode;
    itemRequestCount?: number|string;
    enabled?: boolean;
    enableMultiSelect?: boolean;
    delimiterChar?: string;
    enableGrouping?: boolean;
    mode?: ej.mobile.DropDownList.Mode;
    enableTemplate?: boolean;
    enablePersistence?: boolean;
    windows?: windowsDropDownListOption;
    android?: androidDropDownListOption;
    items?: Array<any>;
    focusIn? (e: DropDownArgs): void;
    focusOut? (e: DropDownArgs): void;
    select? (e: DropDownSelectArgs): void;
    change? (e: DropDownSelectArgs): void;
    checkChange? (e: DropDownListEventArgs): void;
}

interface DropDownArgs {
    cancel: boolean;
    type: string;
    model: DropDownListOptions;
}
//ejmDropDownListEvent Arugument
interface DropDownListEventArgs extends DropDownArgs {
    checked: boolean;
}

interface DropDownSelectArgs extends DropDownArgs {
    selectedText: string;
    value: string;
    selectedItem: Object;
}

export module DropDownList{
	enum VirtualScrollingMode{
		Continuous,
		Normal
	}
	enum WindowsType{
		ComboBox,
		List
	}
    enum Mode {
        Normal,
        Native
    }
}

class Numeric extends ej.Widget {
    static fn: Numeric;
    element: JQuery;
    constructor(element: JQuery, options?: EditorOptions);
    model: EditorOptions;
    ValidTags: Array<string>;
    defaults: EditorOptions;
    disable(): void;
    enable(): void;
    getValue(): any;
    setValue(value:number): void;
    
}

interface EditorOptions {
    cssClass?: string;
    enableStrictMode?: boolean;
    enabled?: boolean;
    showBorder?: boolean;
    showSpinButton?: boolean;
    incrementStep?: number;
    maxValue?: number;
    minValue?: number;
    name?: string;
    enablePersistence?: boolean;
    readOnly?: boolean;
    renderMode?: ej.mobile.RenderMode;
    decimalPlaces?: number;
    theme?: ej.mobile.Theme;
    value?: number;
    watermarkText?: string;   
    windows?: windowsOption;
    change? (e: EditorEventArgs): void;
	focusIn? (e: EditorEventArgs): void;
    focusOut? (e: EditorEventArgs): void;
    destroy?(e:EditorBaseArgs):void;
    create?(e:EditorBaseArgs):void;
}

interface EditorBaseArgs{
    cancel: boolean;
    type: string;
    model: EditorOptions;
}

interface EditorEventArgs extends EditorBaseArgs {    
    value: number;
    element: Object;
}


class Grid extends ej.Widget {
    static fn: Grid;
    element: JQuery;
    constructor(element: JQuery, options?: GridOptions);
    model: GridOptions;
    validTags: Array<string>;
    defaults: GridOptions;
    disable(): void;
    enable(): void;
    destroy(): void;
    getColumnByField(field:string): void;
    getColumnByHeaderText(headerText:string): void;
    getColumnByIndex(index:number): void;
    getColumnFieldNames(): void;
    getColumnIndexByField(field:string): void;
    getColumnMemberByIndex(colIdx:number): void;
    hideColumns(col:string): void;
    refreshContent(requestType:string): void;
    showColumns(col:string): void;
}
interface GridOptions {
    cssClass?: string;
    allowPaging?: boolean;
    allowSorting?: boolean;
    allowFiltering?: boolean;
    allowScrolling?: boolean;
    allowSelection?: boolean;
    dataSource: any;
    caption?: string;
    enablePersistence?: boolean;
    selectedRowIndex?: number;
    showCaption?: boolean;
    allowColumnSelector?: boolean;
    transition?: string;
    columns?: Array<Object>;
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    rowSelecting? (e: GridEventArgs): void;
    rowSelected? (e: GridEventArgs): void;
    actionBegin? (e: GridEventArgs): void;
    actionComplete? (e: GridEventArgs): void;
    actionSuccess? (e: GridEventArgs): void;
    actionFailure? (e: GridEventArgs): void;
    queryCellInfo? (e: GridEventArgs): void;
    rowDataBound? (e: GridEventArgs): void;
    modelChange? (e: GridEventArgs): void;
    load? (e: GridEventArgs): void;
    pageSettings?: PageSettings;
    scrollSettings?: ScrollSettings;
    sortSettings?: SortSettings;
    filterSettings?: FilterSettings;
}

interface PageSettings {
    pageSize?: number;
    currentPage?: number;
    display?: ej.mobile.Grid.PagerDisplay;
    type?: ej.mobile.Grid.PagerType;
    totalRecordsCount?: number;
}
interface ScrollSettings {
    enableColumnScrolling?: boolean;
    height?: any;
    width?: any;
    enableRowScrolling?: boolean;
    enableNativeScrolling?: boolean;
}
interface SortSettings {
    allowMultiSorting?: boolean;
    sortedColumns?: Array<any>;
}
interface FilterSettings {
    isCaseSensitive?: boolean;
    filterBarMode?: ej.mobile.Grid.FilterBarMode;
    interval?: number;
    filteredColumns?: Array<any>;
}

//ejmGridEvent Arugument
interface GridEventArgs {
    cancel: boolean;
    type: string;
    model: GridOptions;
}

export module Grid
{
enum PagerDisplay
{
Normal,
Fixed
}

enum PagerType
{
Normal,
Scrollable
}

enum FilterBarMode
{
Immediate,
OnEnter
}
enum Actions
{
Paging,
Sorting,
Filtering,
Refresh
}
}
class Header extends ej.Widget {
    static fn: Header;
    element: JQuery;
    constructor(element: JQuery, options?: HeaderOptions);
    model: HeaderOptions;
    defaults: HeaderOptions;
    getTitle(): string;
    destroy(): void;
}

interface HeaderOptions {
    hideForUnSupportedDevice?: boolean;
    leftButtonNavigationUrl?: string;
    leftButtonImageClass: string;
    leftButtonImageUrl: string;
    rightButtonNavigationUrl?: string;
	rightButtonImageClass?:string;
	rightButtonImageUrl?:string;
    cssClass?: string;
    title?: string;
    showTitle?: boolean;
    position?: ej.mobile.Header.Position;
    leftButtonCaption?: string;
    rightButtonCaption?: string;
	leftButtonStyle?:ej.mobile.Header.HeaderLeftButtonStyle;	
    rightButtonStyle?:ej.mobile.Header.HeaderRightButtonStyle;
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    showLeftButton?: boolean;
    showRightButton?: boolean;
	enablePersistence?:boolean;
    templateId?: string;
    ios7?: Headerios7Options;
    flat?: HeaderFlatOptions;
    windows?: HeaderWindowsOptions;
    android?: HeaderAndroidOptions;
    leftButtonTap? (e: HeaderLeftButtonTapEventArgs): void;
    rightButtonTap? (e: HeaderRightButtonTapEventArgs): void;
    destroy?(e:HeaderBaseArgs):void;
    create?(e:HeaderBaseArgs):void;
}
interface HeaderWindowsOptions extends windowsOption {
    enableCustomText?: boolean;
    renderDefault?: boolean;
    rightButtonStyle?: ej.mobile.Header.Windows.HeaderRightButtonStyle;
    leftButtonStyle?: ej.mobile.Header.Windows.HeaderLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}
interface HeaderAndroidOptions {
    backButtonImageClass?: string;
    rightButtonStyle?: ej.mobile.Header.Android.HeaderRightButtonStyle;
    leftButtonStyle?: ej.mobile.Header.Android.HeaderLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}
interface Headerios7Options {
    rightButtonStyle?:  ej.mobile.Header.IOS7.HeaderRightButtonStyle;
    leftButtonStyle?:  ej.mobile.Header.IOS7.HeaderLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}
interface HeaderFlatOptions {
    rightButtonStyle?: ej.mobile.Header.Flat.HeaderRightButtonStyle;
    leftButtonStyle?: ej.mobile.Header.Flat.HeaderLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}

interface HeaderBaseArgs{
    cancel: boolean;
    type: string;
    model: FooterOptions;
}
interface HeaderLeftButtonTapEventArgs {
    text: string;
    cancel: boolean;
    model: Object;
    type: string;
    status: boolean;
}
interface HeaderRightButtonTapEventArgs {
    text: string;
    cancel: boolean;
    model: Object;
    type: string;
    status: boolean;
}

export module Header
{
enum Position
{
 Normal,
 Fixed
}
enum HeaderLeftButtonStyle
{
	Back,
	Header,
	Normal

}
enum HeaderRightButtonStyle
{
	Header,
	Normal
}

export module IOS7
{
enum HeaderLeftButtonStyle
{
 Auto,
 Back,
 Header,
 Normal
}
enum HeaderRightButtonStyle
{
 Auto,
 Header,
 Normal
}
}

export module Flat
{
enum HeaderLeftButtonStyle
{
 Auto,
 Back,
 Normal,
 Header
}
enum HeaderRightButtonStyle
{
 Auto,
 Header,
 Normal
}
}

export module Android
{
enum HeaderLeftButtonStyle
{
 Auto,
 Back,
 Normal,
 Header
}
enum HeaderRightButtonStyle
{
 Auto,
 Normal,
 Header
}
}

export module Windows
{
enum HeaderLeftButtonStyle
{
 Auto,
 Back,
 Normal,
 Header
}
enum HeaderRightButtonStyle
{
 Auto,
 Normal,
 Header
}
}
}



/* ListView - Start*/
interface ajaxSettingsOptions {
    type?: string;
    cache?: boolean;
    async?: boolean;
    dataType?: string;   
    contentType?: string;
    url?: string;
    data?: Array<any>;
}
//Class ejmListView
class ListView extends ej.Widget {
    static fn: ListView;
    constructor(element: JQuery, options?: ListViewOptions);
    model: ListViewOptions;
    defaults: ListViewOptions;
    addItem(list?:Object, index?:number,groupid?:any): void;
    checkAllItem(): void;
    checkItem(index:number,childId?:any): void;
    deActive(index:number,childId?:any): void;
    disableItem(index:number,childId?:any): void;
    enableItem(index:number,childId?:any): void;
    getActiveItem(): void;
    getActiveItemText(): void;
    getCheckedItems(): void;
    getCheckedItemsText(): void;
    getItemsCount(): void;
    getItemText(index:number,childId?:any): void;
    hasChild(index:number,childId?:any): boolean;
    hide(): void;
    hideItem(index:number,childId?:any): void;
    isChecked(index:number,childId?:any): boolean;
    loadAjaxContent(): void;
    removeCheckMark(index:number,childId?:any): void;
    removeItem(index:number,childId?:any): void;
    selectItem(index:number,childId?:any): void;
    setActive(index:number,childId?:any): void;
    show(): void;
    showItem(index:number,childId?:any): void;
    unCheckAllItem(): void;
    unCheckItem(index: number, childId?: any): void;
    clear(): void;
    append(data: Object): void;
    getActiveItemData(): void;
    getSelectedItemValue(): void;
    getSelectedItemsValue(): void;
    destroy(): void;
}
//ejmListView IOS7Option
interface Ios7Option {
    inline?: boolean;
}
//ejmListView IOS7Option
interface windowsListViewOption extends windowsOption {
    preventSkew?: boolean;
    enableHeaderCustomText?: boolean;
}

//ejmListView Option
interface ListViewOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    enablePullToRefresh?: boolean;
    refreshThreshold?: number;
    pullToRefreshSettings?: pullToRefreshSettings;
    mode?: ej.mobile.ListView.Mode
    cssClass?: string;
    ios7?: Ios7Option;
    windows?: windowsListViewOption;
    adjustFixedPosition?: boolean;
    ajaxSettings?: ajaxSettingsOptions;
    enableCache?: boolean;
    allowScrolling?: boolean;
    checkDOMChanges?: boolean;
    dataBinding?: boolean;
    dataSource?: any;
    enableAjax?: boolean;
    enableCheckMark?: boolean;
    enableFiltering?: boolean;
    showHeader?: boolean;
    showHeaderBackButton?: boolean;
    enableNativeScrolling?: boolean;
    showScrollbars?: boolean;
    fieldSettings?: fieldSettings;
    enableGroupList?: boolean;
    headerBackButtonText?: string;
    hideHeaderForUnSupportedDevice?: boolean;
    headerTitle?: string;
    height?: number;
    persistSelection?: boolean;
    preventSelection?: boolean;
    query?: string;
    renderTemplate?: boolean;
    selectedItemIndex?: number;
    autoAdjustHeight?: boolean;
    autoAdjustScrollHeight?: boolean;
    templateId?: string;
    transition?: string;
    width?: number;
    items?: Array<any>;
    enablePersistence?: boolean;
    create? (e: ListViewBaseEventArgs): void;
    destroy? (e: ListViewBaseEventArgs): void;
    ajaxComplete? (e: ListViewEventArgs): void;
    ajaxError? (e: ListViewEventArgs): void;
    ajaxSuccess? (e: ListViewEventArgs): void;
    headerBackButtonTap? (e: ListViewEventArgs): void;
    load? (e: ListViewBaseEventArgs): void;
    loadComplete? (e: ListViewBaseEventArgs): void;
    touchEnd? (e: ListViewEventArgs): void;
    touchStart? (e: ListViewEventArgs): void;
    refreshBegin? (e: ListViewBaseEventArgs): void;
    refreshSuccess? (e: ListViewEventArgs): void;
    refreshError? (e: ListViewBaseEventArgs): void;
    refreshComplete? (e: ListViewBaseEventArgs): void;
    ajaxBeforeLoad? (e: ListViewEventArgs): void;
}
interface pullToRefreshSettings{
	pullText?:string;
	releaseText?:string;
	refreshText?:string;
	errorText?:string;
	appendData?:boolean;
	appendPosition?:ej.mobile.ListView.AppendPosition;
}
interface fieldSettings{
	navigateUrl?:string;
	href?:string;
	enableAjax?:string;
	preventSelection?:string;
	persistSelection?:string;
	text?:string;
	enableCheckMark?:string;
	checked?:string;
	primaryKey?:string;
	parentPrimaryKey?:string;
	imageClass?:string;
	imageUrl?:string;
	childHeaderTitle?:string;
	childId?:string;
	childHeaderBackButtonText?:string;
	renderTemplate?:string;
	templateId?:string;
	touchStart?:string;
	touchEnd?:string;
	attributes?:string;
	groupID?:string;
	id?:string; 
    value?: string;
}
//ejmListViewEvent Arugument
interface ListViewBaseEventArgs {
    cancel: boolean;
    type: string;
    model: ListViewOptions;
}
interface ListViewEventArgs extends ListViewBaseEventArgs {   
    ajaxData?: Object;
    data?: Object;
    errorData?: Object;
    successData?: Object;
    text?: string;
    element?: Object;
    id?: string;
    hasChild?: boolean;
    currentItem?: string;
    currentText?: string;
    currentItemIndex?: number;
    isChecked?: boolean;
    checkedItems?: number;
    checkedItemsText?: string;
}
export module ListView{
	enum AppendPosition{
		Bottom,
		Top
    }
    enum Mode {
        Page,
        Container
    }
}

class Menu extends ej.Widget {
    static fn: Menu;
    element: JQuery;
    constructor(element: JQuery, options?: MenuOptions);
    model: MenuOptions;
    defaults: MenuOptions;
    addItem(menu: any, index: number): void;
    disable(): void;
    disableItem(index: number): void;
    disableOverFlow(): void;
    disableOverFlowItem(index: number): void;
    enable(): void;
    enableItem(index: number): void;
    enableOverFlow(): void;
    enableOverFlowItem(index: number): void;
    hide(): void;
    removeItem(index: number): void;
    show(e: any, existing?: boolean): void;
    destroy(): void;
}
//ejmMenu Option
interface MenuOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    cssClass?: string;
    allowScrolling?: boolean;
    showScrollbars?: boolean;
    height?: (number|string);
    renderTemplate?: boolean;
    showOn?: ej.mobile.Menu.ShowOn;
    targetId?: string;
    target?: any;
    enablePersistence?: boolean;
    templateId?: string;
    width?: (number|string);
    items?: Array<any>;
    android?: AndroidOptions;
    ios7?: Ios7Options;
    windows?: WindowsOptions;
    hide? (e: MenuEvent): void;
    load? (e: MenuEvent): void;
    loadComplete? (e: MenuEvent): void;
    show? (e: MenuEvent): void;
    touchStart? (e: MenuTouchEventArgs): void;
    touchEnd? (e: MenuTouchEventArgs): void;
    create? (e: MenuEvent): void;
    destroy? (e: MenuEvent): void;
}
//ejmMenu IOS7 Option
interface Ios7Options {
    cancelButtonColor?: ej.mobile.Menu.IOS7.CancelButtonColor;
    cancelButtonText?: string;
    cancelButtonTouchEnd? (e: MenuCancelButtonTouchEndEventArgs): void;
    type?: ej.mobile.Menu.IOS7.Type;
    title?: string;
    showTitle?: boolean;
    showCancelButton?: boolean;
}

//ejmMenu Android Option
interface AndroidOptions {
    type?: ej.mobile.Menu.Android.Type;
}
interface WindowsOptions {
    type?: ej.mobile.Menu.Windows.Type;
    renderDefault?: boolean;
}
//ejmMenu Event Arugument
interface MenuEvent {
    cancel: boolean;
    type: string;
    model: MenuOptions;
}
interface MenuTouchEventArgs {
    item: Object;
    text: string;
}
interface MenuCancelButtonTouchEndEventArgs extends MenuEvent {
    item: Object;
    text: string;
}

export module Menu {
    export module IOS7 {
        enum Type {
            Auto,
            Animate,
            Normal
        }
        enum CancelButtonColor {
            Blue,
            Gray,
            Black,
            Green,
            Red
        }
    }

    export module Android {
        enum Type {
            Contextual,
            Popup,
            OptionsList,
            OptionsMenu
        }
    }
    export module Windows {
        enum Type {
            Contextual,
            Popup
        }
    }
    enum ShowOn {
        Tap,
        TapHold
    }
}



//Class ejmProgress
class Progress extends ej.Widget {
    static fn: Progress;
    element: JQuery;
    constructor(element: JQuery, options?: ProgressOptions);
    model: ProgressOptions;
    defaults: ProgressOptions;
    getValue(): number;
    getPercentage(): number;
    setCustomText(text: string): void;
    destroy(): void;
}

//ejmProgressbar Option
interface ProgressOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    enableCustomText?: boolean;
    enabled?: boolean;
    height?: number;
    incrementStep?: number;
    maxValue?: number;
    minValue?: number;
    orientation?: ej.mobile.Progress.Orientation;
    percentage?: number;
    enablePersistence?: boolean;
    text?: string;
    value?: number;
    width?: number;
    create? (e: ProgressEvent): void;
    destroy? (e: ProgressEvent): void;
    start? (e: ProgressStartEventArgs): void;
    change? (e: ProgressChangeEvent): void;
    complete? (e: ProgressCompleteEvent): void;
}
//ejmProgressbarEvent Arugument
interface ProgressEvent {
    cancel: boolean;
    type: string;       
    model: ProgressOptions;
}
interface ProgressStartEventArgs extends ProgressEvent {
    value: number;
    percentage: number;
}
interface ProgressChangeEvent extends ProgressEvent {
    value: number;
    element: Object;
    text: string;
    percentage: number;
}
interface ProgressCompleteEvent extends ProgressEvent {
    value: number;
    text: string;
    percentage: number;
}
export module Progress {
    enum Orientation {
        Horizontal,
        Vertical
    }
}

//Class ejmRadioButton
class RadioButton extends ej.Widget {
    static fn: RadioButton;
    element: JQuery;
    constructor(element: JQuery, options?: RadioButtonOptions);
    model: RadioButtonOptions;
    defaults: RadioButtonOptions;
    destroy(): void;
    enable(): void;
    disable(): void;
}

//ejmRadioButton Options
interface RadioButtonOptions {
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    cssClass?: string;
    checked?: boolean;
    text?: string;
    enabled?: boolean;
    enablePersistence?: boolean;
    create? (e: RadioButtonBaseEventArgs): void;
    destroy? (e: RadioButtonBaseEventArgs): void;
    touchStart? (e: RadioButtonEventArgs): void;
    touchEnd? (e: RadioButtonEventArgs): void;
    change? (e: RadioButtonEventArgs): void;   
}
//ejmRadioButtonEvent Arugument
interface RadioButtonBaseEventArgs {
    model: RadioButtonOptions;
    cancel: boolean;
    type: string;
}
interface RadioButtonEventArgs extends RadioButtonBaseEventArgs {   
    value: string;
    isChecked: boolean;   
}
 class Rating extends ej.Widget {
        static fn: Rating;
        element: JQuery;
        constructor(element?: JQuery, options?: RatingOptions);
        model: RatingOptions;
        defaults: RatingOptions;
        show(): void;
        hide(): void;
        getValue(): void
        reset(): void;
        enable(): void;
        disable(): void;
        setValue(value: number): void;
        destroy(): void;
    }

    interface RatingOptions {
        maxValue?: number;
        minValue?: number;
        value?: number;
        incrementStep?: number;
        precision?: ej.mobile.Rating.Precision;
        enabled?: boolean;
        theme?: ej.mobile.Theme;
        renderMode?: ej.mobile.RenderMode;
        shape?: ej.mobile.Rating.Shape;
        shapeWidth?: number;
        shapeHeight?: number;
        spaceBetweenShapes?: number;
        orientation?: ej.mobile.Rating.Orientation;
        readOnly?: boolean;
        backgroundColor?: any;
        selectionColor?: any;
        borderColor?: any;
        hoverColor?: any;
        enablePersistence?: boolean;
        create? (e: RatingBaseEventArgs): void;
        destroy? (e: RatingBaseEventArgs): void;
        tap? (e: RatingEventArgs): void;
        change? (e: RatingEventArgs): void;
        touchMove? (e: RatingEventArgs): void;
    }
 interface RatingBaseEventArgs {
     cancel: boolean;
     type: string;
     model: RatingOptions;
 }
    interface RatingEventArgs extends RatingBaseEventArgs {        
        value: number;
    }
export module Rating{
	enum Precision{
		Full,
		Exact,
		Half
	}
	enum Shape{
		Star,
		Circle,
		Diamond,
		Heart,
		Pentagon,
		Square,
		Triangle
	}
	enum Orientation{
		Horizontal,
		Vertical
	}

}
 class Rotator extends ej.Widget {
        static fn: Rotator;
        element: JQuery;
        constructor(element: JQuery, options?: RotatorOptions);
        model: RotatorOptions;
        validTags: Array<string>;
        defaults: RotatorOptions;
        renderDatasource(data: any): void;
        destroy(): void;
    }
 interface RotatorOptions {
        create? (e: RotatorBaseEventArgs): void;
        destroy? (e: RotatorBaseEventArgs): void;
        swipeLeft? (e: RotatorEventArgs): void;
        swipeRight? (e: RotatorEventArgs): void;
        swipeUp? (e: RotatorEventArgs): void;
        swipeDown? (e: RotatorEventArgs): void;
        change? (e: RotatorEventArgs): void;
        pagerSelect? (e: RotatorEventArgs): void;
        adjustFixedPosition?: boolean;
        targetId?: string;
		cssClass?:string;
		windows?:windowsOption;
		items?:Array<any>;
        renderMode?: ej.mobile.RenderMode;
        targetHeight?: (number|string);
        targetWidth?: (number|string);
		enablePersistence?:boolean;
        theme?: ej.mobile.Theme;
        currentItemIndex?: number;
        showPager?: boolean;
        showHeader?: boolean;
        headerTitle?: string;
        dataBinding?: boolean;
        dataSource?: any;
        orientation?: ej.mobile.Rotator.Orientation;
        pagerPosition?: PagerPosition;
    }
    interface PagerPosition {
        horizontal?: ej.mobile.Rotator.PagerPositionHorizontal;
        vertical?: ej.mobile.Rotator.PagerPositionVertical;
    }
 interface RotatorBaseEventArgs {
     cancel: boolean;
     model: RotatorOptions;
     type: string;
 }
 interface RotatorEventArgs extends RotatorBaseEventArgs {        
        targetElement: Object;
        element: number;
    }
export module Rotator{
	enum Orientation{
		Horizontal,
		Vertical
	}
	enum PagerPositionHorizontal{
		Bottom,
		Top,
	}
	enum PagerPositionVertical{
		Right,
		Left
	}

}
 class Slider extends ej.Widget {
        static fn: Slider;
        element: JQuery;
        constructor(element: JQuery, options?: SliderOptions);
        model: SliderOptions;
        defaults: SliderOptions;
        getValue(): void;
        dispose(): void;
        destroy(): void;
    }
    //ejmSlider Option
    interface SliderOptions {
        theme?: ej.mobile.Theme;
        renderMode?: ej.mobile.RenderMode;
        minValue?: number;
        maxValue?: number;
        value?: number;
        values?: Array<number>;
        orientation?: ej.mobile.Slider.Orientation;
        enableRange?: boolean;
        readOnly?: boolean;
        incrementStep?: number;
        enablePersistence?: boolean;
        enabled?: boolean;
        enableAnimation?: boolean;
        animationSpeed?: number;
        ios7?: Ios7Option;
        windows?: windowsOption;
        create? (e: SliderBaseEventArgs): void;
        destroy? (e: SliderBaseEventArgs): void;
        touchStart? (e: SliderEventArgs): void;
        touchEnd? (e: SliderEventArgs): void;
        load? (e: SliderEventArgs): void;
        change? (e: SliderEventArgs): void;
        slide? (e: SliderEventArgs): void;
    }

    //ejmSlider IOS7 Option
    interface Ios7Option {
        thumbStyle?: ej.mobile.Slider.ThumbStyle;
    }
 //ejmSlider Slide Event Arugument
 interface SliderBaseEventArgs {
     cancel: boolean;
     model: SliderOptions;
     type: string;
 }
 interface SliderEventArgs extends SliderBaseEventArgs {
     value?: number;
     values?: Array<number>;
 }   
export module Slider{
	enum Orientation{
		Horizontal,
		Vertical
	}
	enum ThumbStyle{
		Normal,
		Small
	
	}

}
class Tab extends ej.Widget {
    static fn: Tab;
    constructor(element: JQuery, options?: TabOptions);
    model:TabOptions;
    defaults: TabOptions;
    showBadge(index: (number|string)): void;
    hideBadge(index: (number|string)): void;
    updateBadgeValue(index: (number|string), value: (number|string)): void;
    selectItem(index?: (number|string)): void;
    enableItem(index?: (number|string)): void;
    disableItem(index?: (number|string)): void;
    enableContent(index?: (number|string)): void;
    disableContent(index?: (number|string)): void;
    addItem(tab: Object, index: (number|string)): void;
    addOverflowItem(tab: Object, index: (number|string)): void;
    removeItem(index: (number|string)): void;
    removeOverflowItem(index: (number|string)): void;
    getItemsCount(): number;
    getOverflowItemCount(): number;
    getActiveItemText(): string;
    getActiveItem(): Object;
    destroy(): void;
}

interface TabOptions {
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    cssClass?: string;
    allowScrolling?: boolean;
    enableNativeScrolling?: boolean;
    showScrollbars?: boolean;
    enableAjax?: boolean;
    showAjaxPopup?: boolean;
    badge?: badgeTabOptions;
    ios7?: ios7TabOptions;
    enableCache?: boolean;
    selectedItemIndex?: (number|string);
    enabled?: boolean;
    enablePersistence?: boolean;
    prefetchAjaxContent?: boolean;
    items?: Array<any>;
    overflowBadge?: overflowBadgeTabOptions;
    android?: androidTabOptions;
    windows?: windowsTabOptions;
    flat?: flatTabOptions;
    ajaxSettings?: ajaxSettingsTabOptions;
    prefetchContentLoaded? (e: TabPrefetchEventArgs): void;
    load? (e: TabEventArgs): void;
    loadComplete? (e: TabLoadCompleteEventArgs): void;
    touchStart? (e: TabEventArgs): void;
    touchEnd? (e: TabEventArgs): void;
    ajaxSuccess? (e: TabAjaxLoadSuccessEventArgs): void;
    ajaxError? (e: TabAjaxLoadErrorEventArgs): void;
    ajaxComplete? (e: TabEventArgs): void;
    create? (e: TabEventArgs): void;
    destroy? (e: TabEventArgs): void;
    ajaxBeforeLoad? (e: TabAjaxBeforeLoadEventArgs): void;
}

interface TabItemOptions {
    text?: string;
    href?: string;
    enableAjax?: boolean;
    badge?: badgeTabOptions;
    touchStart? (e: TabEventArgs): void;
    touchEnd? (e: TabEventArgs): void;
    ios7?: ios7TabOptions;
    android?: ios7TabOptions;
}

interface TabEventArgs {
    cancel: boolean;
    type: string;
    model: TabOptions;
}
interface TabAjaxBeforeLoadEventArgs extends TabEventArgs {
    content?: any;
    item?: any;
    index?: number;
    text?: string;
    url?: string;
}
interface TabLoadCompleteEventArgs extends TabEventArgs {
    element: Object;
    id: string;
}
interface TabPrefetchEventArgs extends TabEventArgs {
    item: Object;
    content: string;
    text: string;
    url: string;
    index: number;
}
interface TabAjaxLoadSuccessEventArgs extends TabEventArgs {
    element: Object;
    currentContent: string;
}

interface TabAjaxLoadErrorEventArgs extends TabEventArgs {
    status: boolean;
    error: string;
}
interface badgeTabOptions {
    enabled?: boolean;
    value?: (number|string);
    maxValue?: (number|string);
    minValue?: (number|string);
}
interface ios7TabOptions {
    imageClass?: string;
}
interface overflowBadgeTabOptions {
    enabled?: boolean;
    value?: (number|string);
    maxValue?: (number|string);
    minValue?: (number|string);
}
interface androidTabOptions {
    contentType?: ej.mobile.Tab.Android.ContentType;
    imageClass?: string;
    position?: ej.mobile.Tab.Position;
}
interface windowsTabOptions extends windowsOption {
    enableCustomText?: boolean;
    position?: ej.mobile.Tab.Position;
    enableTouchMove?: boolean;
    preventContentSwipe?: boolean;
}
interface flatTabOptions {
    position?: ej.mobile.Tab.Position;
}
interface ajaxSettingsTabOptions {
    type?: string;
    cache?: boolean;
    async?: boolean;
    dataType?: string;
    contentType?: string;
    url?: string;
    data?:  {};
}

export module Tab{
export module Android{
enum ContentType{
Text,
Image,
Both
}
}
enum Position{
Fixed,
Normal
}
}

class Tile extends ej.Widget {
    static fn: Tile;
    constructor(element: JQuery, options?: TileOptions);
    model: TileOptions;
    defaults: TileOptions;
    updateTemplate(id: string, index: (number|string)): void;
    destroy(): void;
}

interface TileOptions {
    android?: androidTileOptions;
    badge?: tileBadgeOptions;
    cssClass?: string;
    captionTemplateId?: string;
    enablePersistence?: boolean;
    imageClass?: string;
    imagePath?: string;
    imagePosition?: ej.mobile.Tile.ImagePosition;
    imageTemplateId?: string;
    imageUrl?: string;
    backgroundColor?: string;
    ios7?: ios7TileOptions;
    liveTile?: liveTileOptions;
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    showText?: boolean;
    text?: string;
    textAlignment?: ej.mobile.Tile.TextAlignment;
    tileSize?: ej.mobile.Tile.TileSize;
    width?: (number|string);
    height?: (number|string);
    touchEnd? (e: tileTouchEventArgs): void;
    touchStart? (e: tileTouchEventArgs): void;
    create? (e: TileEventArgs): void;
    destroy? (e: TileEventArgs): void;
}
interface TileEventArgs {
    cancel?: boolean;
    model?: TileOptions;
    type?: string;
}
interface tileBadgeOptions {
    enabled?: boolean;
    value?: (number|string);
    maxValue?: (number|string);
    minValue?: (number|string);
    text?: string;
}

interface liveTileOptions {
    enabled?: boolean;
    imageClass?: string;
    imageTemplateId?: string;
    imageUrl?: string[];
    type?: string;
    updateInterval?: number;
}

interface ios7TileOptions {
    textPosition?: ej.mobile.Tile.TextPosition;
}

interface androidTileOptions {
    textPosition?: ej.mobile.Tile.TextPosition;
}

interface tileTouchEventArgs extends TileEventArgs {
    text?: string;
}

export module Tile
{    
enum TextPosition
{
 Inner,
 Outer
}
enum TileSize
{
        Medium,
        Small,
        Large,
        Wide
}
enum TextAlignment
{
 
        Normal,
        Left,
        Right,
        Center
}
enum ImagePosition
{
        Center,
        Top,
        Bottom,
        Right,
        Left,
        TopLeft,
        TopRight,
        BottomRight,
        BottomLeft,
        Fill
}
}


class RadialSlider extends ej.Widget {
    static fn: RadialSlider;
    constructor(element: JQuery, options?: RadialSliderOptions);
    constructor(element: Element, options?: RadialSliderOptions);
	model:RadialSliderOptions;
	defaults:RadialSliderOptions;
    show(): void;
    hide(): void;
    destroy(): void;
}

interface RadialSliderOptions {
    radius?: number;
    endAngle?: number;
    startAngle?: number;
    ticks?: Array<any>;
    enableRoundOff?: boolean;
    value?: number|string;
    strokeWidth?: number;
    autoOpen?: boolean;
    enableAnimation?: boolean;
    cssClass?: string;
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    position?: ej.mobile.RadialSlider.Position;
    labelSpace?: string|number;
    innerCircleImageClass?: string;
    innerCircleImageUrl?: string;
    showInnerCircle?: boolean;
    inline?: boolean;
    stop? (e: RadialSliderStopEventArgs): void;
    start? (e: RadialSliderStartEventArgs): void;
    slide? (e: RadialSliderSlideEventArgs): void;
    change? (e: RadialSliderChangeEventArgs): void;
    mouseover? (e: RadialSliderMouseOverEventArgs): void;
    create? (e: RadialSliderCreateEventArgs): void;
    destroy? (e: RadialSliderCreateEventArgs): void;
}
interface RadialSliderCreateEventArgs {
    cancel: boolean;
    model: RadialSliderOptions;
    type: string;
}
interface RadialSliderStopEventArgs extends RadialSliderCreateEventArgs {
    value: number;
}

interface RadialSliderStartEventArgs extends RadialSliderCreateEventArgs {
    value: number;
}
interface RadialSliderSlideEventArgs extends RadialSliderCreateEventArgs {
    value: number;
    selectedValue: number;
}
interface RadialSliderChangeEventArgs extends RadialSliderCreateEventArgs {
    value: number;
    oldValue: number;
}
interface RadialSliderMouseOverEventArgs extends RadialSliderCreateEventArgs {
    value: number;
    selectedValue: number;
}
export module RadialSlider {
    enum Position {
        RightCenter,
        RightTop,
        RightBottom,
        LeftCenter,
        LeftTop,
        LeftBottom,
        TopLeft,
        TopRight,
        TopCenter,
        BottomLeft,
        BottomRight,
        BottomCenter
    }
}
class TimePicker extends ej.Widget {
    static fn: TimePicker;
    constructor(element: JQuery, options?: TimePickerOptions);
    model: TimePickerOptions;
    defaults: TimePickerOptions;
    show(e?:any): void;
    hide(e?:any): void;
    enable(): void;
    disable(): void;
    getValue(): string;
    setCurrentTime(time: any): void;
    destroy(): void;
}
interface TimePickerOptions {
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    cssClass?: string;
    hourFormat?: ej.mobile.TimePicker.HourFormat;
    value?: string;
    culture?: string;
    timeFormat?: string;
    enabled?: boolean;
	enablePersistence?:boolean;
    ios7?: ios7TimepickerOptions;
    windows?: windowsOption;
    select? (e: TimepickerEventArgs): void;
    load? (e: TimepickerEventArgs): void;
    focusIn? (e: TimepickerEventArgs): void;
    focusOut? (e: TimepickerEventArgs): void;
    open? (e: TimepickerEventArgs): void;
    close? (e: TimepickerEventArgs): void;
    change? (e: TimepickerEventArgs): void;
    create? (e: TimePickerCommonEventArgs): void;
    destroy? (e: TimePickerCommonEventArgs): void;
}
interface TimePickerCommonEventArgs {
    cancel: boolean;
    type: string;
    model: TimePickerOptions;
}
interface TimepickerEventArgs extends TimePickerCommonEventArgs {
    value: string;
}
interface ios7TimepickerOptions {
    renderDefault?: boolean;
}

export module TimePicker{
enum HourFormat{
	TwentyFour,
	Twelve
}
}

//Class ejmToggleButton
class ToggleButton extends ej.Widget {
    static fn: ToggleButton;
    constructor(element: JQuery, options?: ToggleButtonOptions);
    model: ToggleButtonOptions;
    defaults: ToggleButtonOptions;
    enable(): void;
    disable(): void;
    destroy(): void;
}

//ejmToggleButton Option
interface ToggleButtonOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    cssClass?: string;
    animate?: boolean;
    toggleState?: boolean;
    windows?: windowsOption;
    enablePersistence?: boolean;
    enabled?: boolean;
    change? (e: ToggleButtonEventArgs): void;
    touchStart? (e: ToggleButtonEventArgs): void;
    touchEnd? (e: ToggleButtonEventArgs): void;
    create? (e: ToggleButtonCommonEventArgs): void;
    destroy? (e: ToggleButtonCommonEventArgs): void;
}

interface ToggleButtonCommonEventArgs {
    cancel: boolean;
    type: string;
    model: ToggleButtonOptions;
}
//ToggleButtonEvent Arugument
interface ToggleButtonEventArgs extends ToggleButtonCommonEventArgs {
    state: boolean;
}
//Class ejmToolbar
class Toolbar extends ej.Widget {
    static fn: Toolbar;
    constructor(element: JQuery, options?: ToolbarOptions);
    model: ToolbarOptions;
    validTags: Array<string>;
    defaults: ToolbarOptions;
    removeItem(index:number): void;
    addItem(newitem:string): void;
    showEllipsis(): void;
    disableItem(disableIcon:string): void;
    enableItem(enableIcon:string): void;
    hideItem(iconName:string): void;
    hideEllipsis(): void;
    showItem(iconName:string): void;
    hideMenu(): void;
    showMenu(): void;
    destroy(): void;
}

//ejmToolbar Android Options
interface ToolbarAndroidOptions {
    title?: string;
    titleIconUrl?: string;
    showBackNavigator?: boolean;
    showTitleIcon?: boolean;
    enableSplitView?: boolean;
    showEllipsis?: boolean;
    position?: ej.mobile.Toolbar.Position;

}
//ejmToolbar IOS7 Options
interface ToolbarIOS7Options {
    position?: ej.mobile.Toolbar.Position;
}
//ejmToolbar Flat Options
interface ToolbarFlatOptions {
    position?: ej.mobile.Toolbar.Position;
}
//ejmToolbar Windows Options
interface ToolbarWindowsOptions {
    position?: ej.mobile.Toolbar.Position;
}
//ejmToolbar Option
interface ToolbarOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    cssClass?: string;
    items?: Array<ToolbarItems>;
    enabled?: boolean;
	enablePersistence?:boolean;
    hide?: boolean;
    position?: ej.mobile.Toolbar.Position;
    android?: ToolbarAndroidOptions;
    windows?: windowsOption;
    ios7?: ToolbarIOS7Options;
    Flat?: ToolbarFlatOptions;
    templateId?: any;
    titleIconUrl?: any;
    touchStart? (e: ToolbarEventArgs): void;
    touchEnd? (e: ToolbarEventArgs): void;
    create? (e: ToolbarEventArgs): void;
    destroy? (e: ToolbarEventArgs): void;

}
interface ToolbarItems{
	iconName?: ej.mobile.Toolbar.IconName;
	iconUrl?: string;
}
//ejmToolbarEvent Arugument
interface ToolbarEventArgs {
    cancel: boolean;
    type: string;
    model: ToolbarOptions;
}

export module Toolbar{ 
	enum Position{
		Normal,
		Fixed
	}
	enum IconName{
		Add,
		Back,
		Bookmark,
        Close,
        Compose,
        Copy,
        Cut,
        Delete,
        Done,
        Edit,
        Mail,
        Next,
        Refresh,
        Overflow,
        Paste,
        Reply,
        Save,
        Search,
        Settings,
        Share 
	}
}
/*Group button*/
class GroupButton extends ej.Widget {
    static fn: GroupButton;
    element: JQuery;
    constructor(element?: JQuery, options?: GroupButtonOptions);
    model: GroupButtonOptions;
    defaults: GroupButtonOptions;
    destroy(): void;
    //add public functions
}
interface GroupButtonOptions {
    selectedItemIndex?: (number|string);
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    cssClass?: string;
    enablePersistence?: boolean;
    items?: Array<GroupButtonItemsOptions>;
    windows?: windowsOption;
    touchStart? (e: GroupButtonEventArgs): void;
    touchEnd? (e: GroupButtonEventArgs): void;
    destroy? (e: GroupButtonEventArgs): void;
    create? (e: GroupButtonEventArgs): void;
}
interface GroupButtonItemsOptions {
    text?: string;
    type?: string;
    imageClass?: string;
    imageUrl?: string;
}
interface GroupButtonEventArgs {
    cancel: boolean;
    type: string;
    model: GroupButtonOptions;
}
/* SplitPane */
class SplitPane extends ej.Widget {
    static fn: SplitPane;
    constructor(element: JQuery, options?: SplitPaneOptions);
    model:SplitPaneOptions;
    defaults: SplitPaneOptions;
    loadContent(toPage: string, options?: any): void;
    transferPage(toPage: any, options: any, existing: any, newPage: any): void;
    refreshRightScroller(): void;
    refreshLeftScroller(): void;
    destroy(): void;
}
interface SplitPaneOptions {
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    cssClass?: string;
    allowLeftPaneScrolling?: boolean;
    allowRightPaneScrolling?: boolean;
    android?: SplitPaneAndroidOptions;
    windows?: SplitPaneWindowsOptions;
    ios7?: SplitPaneIOS7Options;
    flat?: SplitPaneFlatOptions;
    enablePersistence?: boolean;
    enableSwipe?: boolean;
    overlayLeftPane?: boolean;
    overlayDirection?: ej.mobile.SplitPane.OverlayDirection;
    leftPaneScrollSettings?: Object;
    rightPaneScrollSettings?: Object;
    leftHeaderSettings?: Object;
    rightHeaderSettings?: Object;
    toolbarSettings?: Object;
    create? (e: SplitPaneBaseEventArgs): void;
    destroy? (e: SplitPaneBaseEventArgs): void;
    beforeTransfer? (e: SplitPaneEventArgs): void;
    afterLoadSuccess? (e: SplitPaneEventArgs): void;
}
interface SplitPaneBaseEventArgs {
    cancel: boolean;
    type: string;
    model: SplitPaneOptions;
}
interface SplitPaneEventArgs extends SplitPaneBaseEventArgs {
    element: Object;
    toPage: Object;
    leftPaneheader: Object;
    rightPaneheader: Object;
    toolbar: Object;
}
interface SplitPaneAndroidOptions {
    showToolbar?: boolean;
}
interface SplitPaneWindowsOptions {
    showLeftPaneHeader?: boolean;
    showRightPaneHeader?: boolean;
}
interface SplitPaneIOS7Options {
    showLeftPaneHeader?: boolean;
    showRightPaneHeader?: boolean;
}
interface SplitPaneFlatOptions {
    showLeftPaneHeader?: boolean;
    showRightPaneHeader?: boolean;
}

export module SplitPane{
enum OverlayDirection{
Left,
Right
}
}

class Dialog extends ej.Widget {
    static fn: Dialog;
    element: JQuery;
    constructor(element: JQuery, options?: DialogOptions);
    model: DialogOptions;
    defaults: DialogOptions;
    open(): void;
    close(): void;
    isOpened(): boolean;
    destroy(): void;
}
interface DialogOptions {
    cssClass?: string;
    enableAutoOpen?: boolean;
    title?: string;
    beforeClose? (e: DialogBeforeClose): void;
    open? (e: DialogOpen): void;
    close? (e: DialogClose): void;
    buttonTap? (e: DialogButtonTap): void;
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    enableModal?: boolean;
    showButtons?: boolean;
    allowScrolling?: boolean;
    enableNativeScrolling?: boolean;
    mode?: ej.mobile.Dialog.Mode;
    leftButtonCaption?: string;
    rightButtonCaption?: string;
    checkDOMChanges?: boolean;
    templateId?: string;
    targetHeight?: string|number;
    enablePersistence?: boolean;
    enableAnimation?: boolean;
    windows?: windowsOption;
    destroy? (e: DialogEventArgs): void;
    create? (e: DialogEventArgs): void;
}
interface DialogEventArgs {
    cancel: boolean;
    type: string;
    model: DialogOptions;
}
interface DialogBeforeClose extends DialogEventArgs{
    title: string;
}
interface DialogOpen extends DialogEventArgs {
    element: Object;
    title: string;
}
interface DialogClose extends DialogEventArgs {
    title: string;
    element: Object;
}
interface DialogButtonTap extends DialogEventArgs {
    text: string;
}

export module Dialog{
enum Mode{
        Alert,
        Confirm,
        Normal,
        FullView
}
}

class TextboxCommon extends ej.Widget {
    model: TextBoxOptions;
    disable(): void;
    enable(): void;
    getStrippedValue(): string;
    getUnstrippedValue(): string;
    getValue(): string;
    getWatermarkText(): string;
    refresh(): void;
    destroy(): void;
}
class TextBox extends TextboxCommon {
    static fn: TextBox;
    constructor(element: JQuery, options?: TextBoxOptions);
    defaults: TextBoxOptions;
}
/* Password */
class Password extends TextboxCommon {
    static fn: Password;
    constructor(element: JQuery, options?: TextBoxOptions);
    defaults: TextBoxOptions;
}
/* MaskEdit */
class MaskEdit extends TextboxCommon {
    static fn: MaskEdit;
    constructor(element: JQuery, options?: MaskEditOptions);
    defaults: MaskEditOptions;

}
/* TextArea */
class TextArea extends TextboxCommon {
    static fn: TextArea;
    constructor(element: JQuery, options?: TextBoxOptions);
    defaults: TextBoxOptions;

}
interface TextBoxOptions {
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    cssClass?: string;
    showBorder?: boolean;
    windows?: WindowsTextBoxOptions;
    value?: string;
    watermarkText?: string;
    change? (e: TextBoxChangeEventArgs): void;
    create? (e: TextBoxEventArgs): void;
    destroy? (e: TextBoxEventArgs): void;
    enabled?: boolean;
    enablePersistence?: boolean;
    readOnly?: boolean;
}
interface TextBoxEventArgs {
    cancel: boolean;
    type: string;
    model: TextBoxOptions;
}
interface MaskEditOptions extends TextBoxOptions {
    mask?: string;
}
interface WindowsTextBoxOptions extends windowsOption {
    allowReset?: boolean;
}
interface TextBoxChangeEventArgs extends TextBoxEventArgs {
    element: Object;
    value: string;
    isChecked: boolean;
}
class Footer extends ej.Widget {
    static fn: Footer;
    element: JQuery;
    constructor(element: JQuery, options?: FooterOptions);
    model: FooterOptions;
    defaults: FooterOptions;
    getTitle(): string;
    destroy(): void;
    
}

interface FooterOptions {
    hideForUnSupportedDevice?: boolean;
    leftButtonNavigationUrl?: string;
    rightButtonNavigationUrl?: string;
    title?: string;
    cssClass?: string;
    showTitle?: boolean;
    position?: ej.mobile.Footer.Position;
    leftButtonCaption?: string;
    rightButtonCaption?: string;
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    showLeftButton?: boolean;
    showRightButton?: boolean;
	enablePersistence?:boolean;
	leftButtonStyle?:ej.mobile.Footer.FooterLeftButtonStyle;
	rightButtonStyle?:ej.mobile.Footer.FooterRightButtonStyle;
    ios7?: Footerios7Options;
    flat?: FooterFlatOptions;
    android?: FooterAndroidOptions;
    templateId?: string;
    windows?: FooterWindowsOptions;
    leftButtonTap? (e: FooterLeftButtonTapEventArgs): void;
    rightButtonTap? (e: FooterRightButtonTapEventArgs): void;
    destroy?(e:FooterBaseArgs):void;
    create?(e:FooterBaseArgs):void;
}

interface FooterWindowsOptions extends windowsOption {
    renderDefault?: boolean;
    rightButtonStyle?: ej.mobile.Footer.Windows.FooterRightButtonStyle;
    leftButtonStyle?: ej.mobile.Footer.Windows.FooterLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}
interface Footerios7Options {
    rightButtonStyle?:  ej.mobile.Footer.IOS7.FooterRightButtonStyle;
    leftButtonStyle?: ej.mobile.Footer.IOS7.FooterLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}
interface FooterFlatOptions {
    rightButtonStyle?: ej.mobile.Footer.Flat.FooterRightButtonStyle;
    leftButtonStyle?: ej.mobile.Footer.Flat.FooterLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}
interface FooterAndroidOptions {
    rightButtonStyle?: ej.mobile.Footer.Android.FooterRightButtonStyle;
    leftButtonStyle?: ej.mobile.Footer.Android.FooterLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}

interface FooterBaseArgs{
    cancel: boolean;
    type: string;
    model: FooterOptions;
}

interface FooterLeftButtonTapEventArgs {
    text: string;
    cancel: boolean;
    model: Object;
    type: string;
    status: boolean;
}
interface FooterRightButtonTapEventArgs {
    text: string;
    cancel: boolean;
    model: Object;
    type: string;
    status: boolean;
}

export module Footer{
export module IOS7
{
enum FooterLeftButtonStyle
{
 Auto,
 Back,
 Header,
 Normal
}
enum FooterRightButtonStyle
{
 Auto,
 Header,
 Normal
}
}

export module Flat
{
enum FooterLeftButtonStyle
{
 Auto,
 Back,
 Normal,
 Header
}
enum FooterRightButtonStyle
{
 Auto,
 Header,
 Normal
}
}

export module Android
{
enum FooterLeftButtonStyle
{
 Auto,
 Back,
 Normal,
 Header
}
enum FooterRightButtonStyle
{
 Auto,
 Normal,
 Header
}
}

export module Windows
{
enum FooterLeftButtonStyle
{
 Auto,
 Back,
 Normal,
 Header
}
enum FooterRightButtonStyle
{
 Auto,
 Normal,
 Header
}
} 
enum Position{
 Normal,
 Fixed
}
enum FooterLeftButtonStyle{
Back,
Header,
Normal
}
enum FooterRightButtonStyle{
Header,
Normal
}
}

class CheckBox extends ej.Widget {
    static fn: CheckBox;
    constructor(element: JQuery, options?: CheckBoxOptions);
    model: CheckBoxOptions;
    defaults: CheckBoxOptions;
    isChecked(): boolean;
    destroy(): void;

}
interface CheckBoxOptions {
    touchStart? (e: CheckBoxTouchStart): void;
    touchEnd? (e: CheckBoxTouchEnd): void;
    renderMode?: ej.mobile.RenderMode;
    cssClass?: string;
    preventDefault?: boolean;
    theme?: ej.mobile.Theme;
    enabled?: boolean;
    checked?: boolean;
    enableTriState?: boolean;
    checkState?: ej.mobile.CheckBox.CheckState;
    windows?: windowsOption;
    enablePersistence?: boolean;
    text?: string;
    destroy? (e: checkBoxEventArgs): void;
    create? (e: checkBoxEventArgs): void;
}
interface checkBoxEventArgs {
    cancel: boolean;
    type: string;
    model: CheckBoxOptions;
}
interface CheckBoxTouchStart extends checkBoxEventArgs{
    element: Object;
    value: string;
    isChecked: boolean;
}
interface CheckBoxTouchEnd extends checkBoxEventArgs{
    element: Object;
    value: string;
    isChecked: boolean;
}
export module CheckBox{
	enum CheckState{
		Uncheck,
		Check,
		Indeterminate
	}	
}
class ScrollPanel extends ej.Widget {
        static fn: ScrollPanel;
        constructor(element: JQuery, target: any, options?: ScrollPanelOptions);
        model: ScrollPanelOptions;
        defaults: ScrollPanelOptions;
        refresh(): void;
        disable(): void;
        enable(): void;
        getComputedPosition(): void;
        stop(): void;
        getScrollPosition(): void;
        destroy(): void;
    }
    interface ScrollPanelOptions {
        renderMode?: ej.mobile.RenderMode;
        theme?: ej.mobile.Theme;
        enableResize?: boolean;
        targetHeight?: number;
        targetWidth?: number;
        scrollHeight?: number;
        scrollWidth?: number;
        target: any;
        enableFade?: boolean;
        enableShrink?: (boolean|string);
        autoAdjustHeight?: boolean;
        isRelative?: boolean;
        wheelSpeed?: number;
        enableInteraction?: boolean;
        enabled?: boolean;
		eventPassthrough?:any;
		translateZ?:string;
		mode?:ej.mobile.ScrollPanel.Mode;
        checkDOMChanges?: boolean;
        enableHrScroll?: boolean;
        enableVrScroll?: boolean;
        zoomMin?: number;
        zoomMax?: number;
        adjustFixedPosition?: boolean;
        startZoom?: number;
        startX?: number;
        startY?: number;
		bounceEasing?:string;
		enableDisplacement?:boolean;
		displacementValue?:number;
		displacementTime?:number;
		preventDefaultException?:{tagName?:any}
		deceleration?:any;
        disablePointer?: boolean;
        disableMouse?: boolean;
        disableTouch?: boolean;
        directionLockThreshold?: number;
        momentum?: boolean;
        enableBounce?: boolean;
        bounceTime?: number;
        preventDefault?: boolean;
        enableTransform?: boolean;
        enableTransition?: boolean;
        showScrollbars?: boolean;
        enableMouseWheel?: boolean;
        enableKeys?: boolean;
        enableZoom?: boolean;
        enableNativeScrolling?: boolean;
        invertWheel?: boolean;
        enablePersistence?: boolean;
        create? (e: ScrollPanelBaseEventArgs): void;
        destroy? (e: ScrollPanelBaseEventArgs): void;
        scrollStart? (e: ScrollPanelEventArgs): void;
        scroll? (e: ScrollPanelEventArgs): void;
        scrollEnd? (e: ScrollPanelEventArgs): void;        
        zoomStart? (e: ScrollPanelEventArgs): void;
        zoomEnd? (e: ScrollPanelEventArgs): void;
    }
interface ScrollPanelBaseEventArgs {
    cancel: boolean;
    type: string;
    model: ScrollPanelOptions;
}
interface ScrollPanelEventArgs extends ScrollPanelBaseEventArgs {
    x: number;
    y: number;
    object: Object;
}   
export module ScrollPanel{
	enum Mode{
		Page,
		Container
	}
}
class NavigationDrawer extends ej.Widget {
    static fn: NavigationDrawer;
    element: JQuery;
    constructor(element: JQuery, options?: NavigationDrawerOptions);
    model: NavigationDrawerOptions;
    defaults: NavigationDrawerOptions;
    open(e: any): void;
    close(e: any): void;
    toggle(e: any): void;
    destroy(): void;
}
//ejmNavigationDrawer Option
interface NavigationDrawerOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    cssClass?: string;
    contentId?: string;
    allowScrolling?: boolean;
    scrollSettings?: {};
    considerSubPage?: boolean;
    direction?: ej.mobile.NavigationDrawer.Direction;
    showScrollbars?: boolean;
    targetId?: string;
    position?: ej.mobile.NavigationDrawer.Position;
    enableListView?: boolean;
    listViewSettings?: {};
    type?: ej.mobile.NavigationDrawer.Type;
    width?: string;
    items?: Array<any>;
    swipe? (e: NavigationDrawerSwipeEventArgs): void;
    open? (e: NavigationDrawerOpenBeforeCloseEventArgs): void;
    beforeClose? (e: NavigationDrawerOpenBeforeCloseEventArgs): void;
    create? (e: NavigationDrawerEvent): void;
    destroy? (e: NavigationDrawerEvent): void;
}

interface NavigationDrawerEvent {
    type: string;
    cancel: boolean;
    model: NavigationDrawerOptions;
}

//ejmNavigationDrawer Swipe Event Arugument
interface NavigationDrawerSwipeEventArgs extends NavigationDrawerEvent {
    element: Object;
    targetElement: Object;
    direction: string;
}
//ejmNavigationDrawer Open and BeforeClose Event Arugument
interface NavigationDrawerOpenBeforeCloseEventArgs extends NavigationDrawerEvent {
    element: Object;
}

export module NavigationDrawer {
    enum Direction {
        Left,
        Right
    }
    enum Position {
        Normal,
        Fixed
    }
    enum Type {
        Overlay,
        Slide
    }
}


class RadialMenu extends ej.Widget {
    static fn: RadialMenu;
    constructor(element: JQuery, options?: RadialMenuOptions);
    model: RadialMenuOptions;
    defaults: RadialMenuOptions;
    show(): void;
    hide(): void;
    menuHide(): void;
    hideMenu(): void;
    showMenu(): void;
    enableItemByIndex(index: number): void;
    enableItemsByIndices(itemIndices: Array<number>): void;
    disableItemByIndex(itemIndex: number): void;
    disableItemsByIndices(itemIndices: Array<number>): void;
    updateBadgeValue(index: number, value: number): void;
    showBadge(index: number): void;
    hideBadge(index: number): void;
}

interface RadialMenuOptions {
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    radius?: number;
    cssClass?: string;
    imageClass?: string;
    backImageClass?: string;
    position?: ej.mobile.RadialMenu.Position;
    enableAnimation?: boolean;
    windows?: windowsOption;
    items?: any;
    touch? (e: RadialMenuEventArgs): void;
    open? (e: RadialMenuEventArgs): void;
    close? (e: RadialMenuEventArgs): void;
    select? (e: RadialMenuEventArgs): void;
}
interface RadialMenuEventArgs {
    cancel: boolean;
    model: RadialMenuOptions;
    type: string;
    index: number;
    childIndex: number;
}
export module RadialMenu{
	enum Position{
	RightCenter,
	RightTop,
	RightBottom,
	LeftCenter,
	LeftTop,
	LeftBottom
	}
}


}
declare module ej.datavisualization {
	
class LinearGauge extends ej.Widget {
        static fn: LinearGauge;
        static extend(prototype: Object): LinearGauge;
        constructor(element: JQuery, options?: LinearGaugeOptions);
	model:LinearGaugeOptions;
	defaults:LinearGaugeOptions;
        destroy(): void;
        exportImage(fileName: number, fileType: number): boolean;
		getBarDistanceFromScale(scaleIndex: number, pointerIndex: number): number;
        getBarPointerValue(scaleIndex: number, pointerIndex: number): number;
        getBarWidth(scaleIndex: number, pointerIndex: number): number;
        getCustomLabelAngle(scaleIndex: number, customLabelIndex: number): any;
        getCustomLabelValue(scaleIndex: number, customLabelIndex: number): any;
        getIndicatorValue(scaleIndex: number, indicatorIndex: number): any;
        getLabelAngle(scaleIndex: number, labelIndex: number): any;
        getLabelPlacement(scaleIndex: number, labelIndex: number): any;
        getLabelStyle(scaleIndex: number, labelIndex: number): any;
        getLabelXDistanceFromScale(scaleIndex: number, labelIndex: number): number;
        getLabelYDistanceFromScale(scaleIndex: number, labelIndex: number): number;
        getMajorIntervalValue(scaleIndex: number): any;
        getMarkerStyle(scaleIndex: number, pointerIndex: number): any;
        getMaximumValue(scaleIndex: number): number;
        getMinimumValue(scaleIndex: number): number;
        getMinorIntervalValue(scaleIndex: number): any;
        getPointerDistanceFromScale(scaleIndex: number, pointerIndex: number): any;
        getPointerHeight(scaleIndex: number, pointerIndex: number): number;
        getPointerPlacement(scaleIndex: number, pointerIndex: number): any;
        getPointerWidth(scaleIndex: number, pointerIndex: number): number;
        getRangeBorderWidth(scaleIndex: number, rangeIndex: number): void;
        getRangeDistanceFromScale(scaleIndex: number, rangeIndex: number): void;
        getRangeEndValue(scaleIndex: number, rangeIndex: number): number;
        getRangeEndWidth(scaleIndex: number, rangeIndex: number): number;
        getRangePosition(scaleIndex: number, rangeIndex: number): number;
        getRangeStartValue(scaleIndex: number, rangeIndex: number): number;
        getRangeStartWidth(scaleIndex: number, rangeIndex: number): number;
        getScaleBarLength(scaleIndex: number): number;
        getScaleBarSize(scaleIndex: number): number;
        getScaleBorderWidth(scaleIndex: number): number;
        getScaleDirection(scaleIndex: number): any;
        getScaleLocation(scaleIndex: number): any;
        getScaleStyle(scaleIndex: number): any;
        getTickAngle(scaleIndex: number, TickIndex: number): any;
        getTickHeight(scaleIndex: number, TickIndex: number): number;
        getTickPlacement(scaleIndex: number, TickIndex: number): any;
        getTickStyle(scaleIndex: number, TickIndex: number): any;
        getTickWidth(scaleIndex: number, TickIndex: number): number;
        getTickXDistanceFromScale(scaleIndex: number, TickIndex: number): number;
        getTickYDistanceFromScale(scaleIndex: number, TickIndex: number): number;
        scales(): void;
        setBarDistanceFromScale(scaleIndex: number, pointerIndex: number, value: number): void;
        setBarPointerValue(scaleIndex: number, pointerIndex: number, value: number): void;
        setBarWidth(scaleIndex: number, pointerIndex: number, value: number): void;
        setCustomLabelAngle(scaleIndex: number, customLabelIndex: number, value: number): void;
        setCustomLabelValue(scaleIndex: number, customLabelIndex: number, value: number): void;
        setIndicatorValue(scaleIndex: number, indicatorIndex: number, value: number): void;
        setLabelAngle(scaleIndex: number, labelIndex: number, angle: number): void;
        setLabelPlacement(scaleIndex: number, labelIndex: number, value: number): void;
        setLabelStyle(scaleIndex: number, labelIndex: number, value: string): void;
        setLabelXDistanceFromScale(scaleIndex: number, labelIndex: number, value: number): void;
        setLabelYDistanceFromScale(scaleIndex: number, labelIndex: number, value: number): void;
        setMajorIntervalValue(scaleIndex: number, value: number): void;
        setMarkerStyle(scaleIndex: number, pointerIndex: number, value: string): void;
        setMaximumValue(scaleIndex: number, value: number): void;
        setMinimumValue(scaleIndex: number, value: number): void;
        setMinorIntervalValue(scaleIndex: number, value: number): void;
        setPointerDistanceFromScale(scaleIndex: number, pointerIndex: number, value: number): void;
        setPointerHeight(scaleIndex: number, pointerIndex: number, height: number): void;
        setPointerPlacement(scaleIndex: number, pointerIndex: number, value: number): void;
        setPointerValue(scaleIndex: number, pointerIndex: number, value: number): void;
        setPointerWidth(scaleIndex: number, pointerIndex: number, width: number): void;
        setRangeBorderWidth(scaleIndex: number, rangeIndex: number, value: number): void;
        setRangeDistanceFromScale(scaleIndex: number, rangeIndex: number, value: number): void;
        setRangeEndValue(scaleIndex: number, rangeIndex: number, value: number): void;
        setRangeEndWidth(scaleIndex: number, rangeIndex: number, value: number): void;
        setRangePosition(scaleIndex: number, rangeIndex: number, value: number): void;
        setRangeStartValue(scaleIndex: number, rangeIndex: number, value: number): void;
        setRangeStartWidth(scaleIndex: number, rangeIndex: number, value: number): void;
        setScaleBarLength(scaleIndex: number, rangeIndex: number, value: number): void;
        setScaleBarSize(scaleIndex: number, value: number): void;
        setScaleBorderWidth(scaleIndex: number, value: number): void;
        setScaleDirection(scaleIndex: number, value: number): void;
        setScaleLocation(scaleIndex: number, value: Object): void;
        setScaleStyle(scaleIndex: number, value: number): void;
        setTickAngle(scaleIndex: number, TickIndex: number, angle: number): void;
        setTickHeight(scaleIndex: number, TickIndex: number, value: number): void;
        setTickPlacement(scaleIndex: number, TickIndex: number, value: number): void;
        setTickStyle(scaleIndex: number, TickIndex: number, value: string): void;
        setTickWidth(scaleIndex: number, TickIndex: number, value: number): void;
        setTickXDistanceFromScale(scaleIndex: number, TickIndex: number, value: number): void;
        setTickYDistanceFromScale(scaleIndex: number, TickIndex: number, value: number): void;
    }
   
    //ejLinearGauge Frame Options
    interface LinearGaugeFrameOptions {
        backgroundImageUrl?: string;
        innerWidth?: number;
        outerWidth?: number;
    }
    interface LinearGaugeTooltipOptions {
        showLabelTooltip?: boolean;
        showCustomLabelTooltip?: boolean;
        templateID?: string;
    }
    interface LinearGaugeScaleOptions {
        backgroundColor?: string;
        barPointers?: Array<LinearGaugeScaleBarPointersOptions>;
        border?: LinearGaugeScaleBorderOptions;
        customLabels?: Array<LinearGaugeScaleCustomLabelsOptions>;
        direction?: ej.datavisualization.LinearGauge.Directions;
        indicators?: Array<LinearGaugeScalesIndicatorsOptions>;
        labels?: Array<LinearGaugeScalesLabelsOptions>;
        length?: number;
        majorIntervalValue?: number;
        markerPointers?: Array<LinearGaugeScalesMarkerpointersOptions>;
        maximum?: number;
        minimum?: number;
        minorIntervalValue?: number;
        opacity?: number;
        position?: LinearGaugeScalesPositionOptions;
        ranges?: Array<LinearGaugeScalesRangesOptions>;
        shadowOffset?: number;
        showBarPointers?: boolean;
        showCustomLabels?: boolean;
        showIndicators?: boolean;
        showLabels?: boolean;
        showMarkerPointers?: boolean;
        showRanges?: boolean;
        showTicks?: boolean;
        ticks?: Array<LinearGaugeScalesTicks>;
        type?: ej.datavisualization.LinearGauge.ScaleType;
        width?: number;
    }
    interface LinearGaugeScaleBarPointersOptions {
        backgroundColor?: string;
        border?: LinearGaugeScaleBarPointersBorderOptions;
        distanceFromScale?: number;
        gradients?: Object;
        opacity?: number;
        value?: number;
        width?: number;
    }
    interface LinearGaugeScaleBorderOptions {
        color?: string;
        width?: number;
    }
    interface LinearGaugeScaleCustomLabelsOptions {
        color?: string;
        font?: LinearGaugeCustomLabelFontOptions;
        opacity?: number;
        position?: LinearGaugeCustomLabelsPositionOptions;
        textAngle?: number;
        value?: string;
    }
    interface LinearGaugeCustomLabelFontOptions {
        fontFamily?: string;
        fontStyle?: ej.datavisualization.LinearGauge.FontStyle;
        size?: string;
    }
    interface LinearGaugeCustomLabelsPositionOptions {
        x?: number;
        y?: number;
    }

    interface LinearGaugeScaleBarPointersBorderOptions {
        color?: string;
        width?: number;
    }
    interface LinearGaugeScalesIndicatorsOptions {
        backgroundColor?: string;
        border?: LinearGaugeScalesIndicatorsBorderOptions;
        font?: LinearGaugeScalesIndicatorsFontOptions;
        height?: number;
        opacity?: number;
        position?: LinearGaugeScalesIndicatorsPositionOptions;
        stateRanges?: Array<LinearGaugeScalesIndicatorsStateRangesOptions>;
        textLocation?: LinearGaugeScalesIndicatorsTextLocationOptions;
        type?: string;
        width?: number;
    }
    interface LinearGaugeScalesIndicatorsBorderOptions {
        color?: string;
        width?: number;
    }
    interface LinearGaugeScalesIndicatorsFontOptions {
        fontFamily?: string;
        fontStyle?: ej.datavisualization.LinearGauge.FontStyle;
        size?: string;
    }
    interface LinearGaugeScalesIndicatorsPositionOptions {
        x?: number;
        y?: number;
    }
    interface LinearGaugeScalesIndicatorsStateRangesOptions {
        backgroundColor?: string;
        borderColor?: string;
        endValue?: number;
        startValue?: number;
        text?: string;
        textColor?: string;
    }
    interface LinearGaugeScalesIndicatorsTextLocationOptions {
        x?: number;
        y?: number;
    }
    interface LinearGaugeScalesLabelsOptions {
        angle?: number;
        distanceFromScale?: LinearGaugeScalesLabelsDistanceFromScaleOptions;
        font?: LinearGaugeScalesLabelsFontOptions;
        includeFirstValue?: boolean;
        opacity?: number;
        placement?: ej.datavisualization.LinearGauge.PointerPlacement;
        textColor?: string;
        type?: ej.datavisualization.LinearGauge.LabelsType;
        unitText?: string;
        unitTextPlacement?: ej.datavisualization.LinearGauge.UnitTextPlacement;
    }
    interface LinearGaugeScalesLabelsDistanceFromScaleOptions {
        x?: number;
        y?: number;
    }
    interface LinearGaugeScalesLabelsFontOptions {
        fontFamily?: string;
        fontStyle?: ej.datavisualization.LinearGauge.FontStyle;
        size?: string;
    }
    interface LinearGaugeScalesMarkerpointersOptions {
        backgroundColor?: string;
        border?: LinearGaugeMarkerPointersBorderOption;
        distanceFromScale?: number;
        gradients?: Object;
        length?: number;
        opacity?: number;
        placement?: ej.datavisualization.LinearGauge.PointerPlacement;
        type?: ej.datavisualization.LinearGauge.MarkerType;
        value?: number;
        width?: number;
    }
    interface LinearGaugeMarkerPointersBorderOption {
        color?: string;
    }
    interface LinearGaugeScalesPositionOptions {
        x?: number;
        y?: number;
    }
    interface LinearGaugeScalesRangesOptions {
        backgroundColor?: string;
        border?: LinearGaugeScalesRangesBorderOptions;
        distanceFromScale?: number;
        endValue?: number;
        endWidth?: number;
        gradients?: Object;
        opacity?: number;
        placement?: ej.datavisualization.LinearGauge.RangesPlacement;
        startValue?: number;
        startWidth?: number;
    }
    interface LinearGaugeScalesRangesBorderOptions {
        color?: string;
        width?: number;
    }

    interface LinearGaugeScalesTicks {
        angle?: number;
        color?: string;
        distanceFromScale?: LinearGaugeScalesTicksDistanceFromScale;
        height?: number;
        opacity?: number;
        placement?: ej.datavisualization.LinearGauge.TicksPlacement;
        type?: ej.datavisualization.LinearGauge. TicksType;
        width?: number;
    }
    interface LinearGaugeScalesTicksDistanceFromScale {
        x?: number;
        y?: number;
    }

    //ejLinearGauge Option
    interface LinearGaugeOptions {
        animationSpeed?: number;
        backgroundColor?: string;
        borderColor?: string;
        enableAnimation?: boolean;
        enableResize?: boolean;
        frame?: LinearGaugeFrameOptions;
	    tooltip?: LinearGaugeTooltipOptions;
        height?: (number|string);
        labelColor?: string;
        maximum?: number;
        minimum?: number;
		outerCustomLabelPosition?: ej.datavisualization.LinearGauge.OuterCustomLabelPosition;
        orientation?: string;
        pointerGradient1?: Object;
        pointerGradient2?: Object;
        readOnly?: boolean;
        scales?: Array<LinearGaugeScaleOptions>;
        theme?: ej.datavisualization.LinearGauge.Themes;
        tickColor?: string;
        value?: number;
        width?: (number|string);
        drawBarPointers? (e: LinearGaugeDrawBarPointersEventArgs): void;
        drawCustomLabel? (e: LinearGaugeDrawCustomLabelEventArgs): void;
        drawIndicators? (e: LinearGaugeDrawIndicatorsEventArgs): void;
        drawLabels? (e: LinearGaugeDrawLabelsEventArgs): void;
        drawMarkerPointers? (e: LinearGaugeDrawMarkerPointersEventArgs): void;
        drawRange? (e: LinearGaugeDrawRangeEventArgs): void;
        drawTicks? (e: LinearGaugeDrawTicksEventArgs): void;
        init? (e: LinearGaugeInitEventArgs): void;
        load? (e: LinearGaugeInitEventArgs): void;
        mouseClick? (e: LinearGaugeMouseClickEventArgs): void;
        mouseClickMove? (e: LineargaugeMouseClickMoveEventArgs): void;
        mouseClickUp? (e: LinearGaugeMouseClickEventArgs): void;
        renderComplete? (e: LinearGaugeRenderCompleteEventArgs): void;
    }
    //ejLinearGaugeEvent Arugument
    interface LinearGaugeDrawBarPointersEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        position: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        style: string;
        barElement: Object;
        barPointerIndex: number;
        PointerValue: number;
        type: string;
    }
    interface LinearGaugeDrawCustomLabelEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        position: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        style: string;
        customLabelElement: Object;
        customLabelrangeIndex: number;
        type: string;
    }
    interface LinearGaugeDrawIndicatorsEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        position: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        style: string;
        IndicatorElement: Object;
        IndicatorIndex: number;
        type: string;
    }
    interface LinearGaugeDrawLabelsEventArgs {

        object: Object;
        cancel: boolean;
        context: Object;
        position: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        style: string;
        label: LinearGaugeDrawLabelsInnerLabelEventArgs;
        type: string;
    }
    interface LinearGaugeDrawLabelsInnerLabelEventArgs {
        angle: number;
        element: Object;
        index: number;
        value: number;
    }
    interface LinearGaugeDrawMarkerPointersEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        position: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        style: string;
        markerElement: Object;
        markerPointerIndex: number;
        pointerValue: number;
        pointerAngle: number;
        type: string;
    }
    interface LinearGaugeDrawRangeEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        position: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        style: string;
        rangeElement: Object;
        rangeIndex: number;
        type: string;
    }
    interface LinearGaugeDrawTicksEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        position: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        style: string;
        tick: LinearGaugeDrawTicksTickEventArgs;
        type: string;
    }
    interface LinearGaugeDrawTicksTickEventArgs {
        angle: number;
        element: Object;
        index: number;
        value: number;
    }
    interface LinearGaugeInitEventArgs {
        object: Object;
        cancel: boolean;
        Model: Object;
        scaleElement: Object;
        context: Object;
        type: string;
    }
    interface LinearGaugeMouseClickEventArgs {
        object: Object;
        cancel: boolean;
        model: Object;
        type: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        context: Object;
        index: number;
        element: Object;
        value: number;
        style: string;
        position: Object;
    }
    interface LineargaugeMouseClickMoveEventArgs {
        object: Object;
        cancel: boolean;
        model: Object;
        type: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        context: Object;
        markerpointer: LineargaugeMarkerpointerEventsArgs;
        style: string;
        position: Object;
    }
    interface LineargaugeMarkerpointerEventsArgs {
        index: number;
        element: Object;
        value: number;
    }
    interface LinearGaugeRenderCompleteEventArgs {
        object: Object;
        cancel: boolean;
        model: Object;
        scaleElement: Object;
        context: Object;
        type: string;
    }
export module LinearGauge{
	 enum Directions {
        Clockwise,
        CounterClockwise
    }
    enum ScaleType {
        Rectangle,
        RoundedRectangle,
        Thermometer
    }
    enum Themes {
        flatlight,
        flatdark
    }
    enum FontStyle {
        Bold,
        Italic,
        Regular,
        Strikeout,
        Underline
    }	
    enum PointerPlacement {
        Near,
        Far,
        Center
    }
    enum LabelsType {
        Major,
        Minor
    }
    enum UnitTextPlacement {
        Back,
        Front
    }
    enum MarkerType {
        Rectangle,
        Triangle,
        Ellipse,
        Diamond,
        Pentagon,
        Circle,
        Star,
        Slider,
        Pointer,
        Wedge,
        Trapezoid,
        RoundedRectangle
    }
    enum RangesPlacement {
        Near,
        Far,
        Center
    }
    enum TicksPlacement {
        Near,
        Far,
        Center
    }
    enum TicksType {
        Majorinterval,
        Minorinterval
    }
	enum OuterCustomLabelPosition{
		Left,
		Right,
		Top,
		Bottom
	}
}

 class CircularGauge extends ej.Widget {
        static fn: CircularGauge;
        static extend(prototype: Object): CircularGauge;
        constructor(element: JQuery, options?: CircularGaugeOptions);
		model:CircularGaugeOptions;
        defaults: CircularGaugeOptions;
        /* Medhods */
        getIndicatorValue(scaleIndex: number, indicatorIndex: number): void;
        setIndicatorValue(scaleIndex: number, indicatorIndex: number, value: number): void;
        getPointerValue(scaleIndex: number, pointerIndex: number): void;
        setMarkerDistanceFromScale(scaleIndex: number, pointerIndex: number, value: number): void;
        getMarkerDistanceFromScale(scaleIndex: number, pointerIndex: number): void;
        setPointerLength(scaleIndex: number, pointerIndex: number, value: number): void;
        getPointerLength(scaleIndex: number, pointerIndex: number): void;
        setPointerWidth(scaleIndex: number, pointerIndex: number, value: number): void;
        getPointerWidth(scaleIndex: number, pointerIndex: number): void;
        setBackNeedleLength(scaleIndex: number, pointerIndex: number, value: number): void;
        getBackNeedleLength(scaleIndex: number, pointerIndex: number): void;
        setNeedleStyle(scaleIndex: number, pointerIndex: number, value: number): void;
        getNeedleStyle(scaleIndex: number, pointerIndex: number): void;
        setPointerPlacement(scaleIndex: number, pointerIndex: number, value: number): void;
        getPointerPlacement(scaleIndex: number, pointerIndex: number): void;
        setPointerNeedleType(scaleIndex: number, pointerIndex: number, value: number): void;
        getPointerNeedleType(scaleIndex: number, pointerIndex: number): void;
        setMarkerStyle(scaleIndex: number, pointerIndex: number, value: number): void;
        getMarkerStyle(scaleIndex: number, pointerIndex: number): void;
        setCustomLabelValue(scaleIndex: number, customLabelIndex: number, value: number): void;
        getCustomLabelValue(scaleIndex: number, customLabelIndex: number): void;
        setSubGaugeLocation(scaleIndex: number, GaugeIndex: number, value: number): void;
        getSubGaugeLocation(scaleIndex: number, GaugeIndex: number): void;
        setCustomLabelAngle(scaleIndex: number, customLabelIndex: number, value: number): void;
        getCustomLabelAngle(scaleIndex: number, customLabelIndex: number): void;
        setRangeStartValue(scaleIndex: number, rangeIndex: number, value: number): void;
        getRangeStartValue(scaleIndex: number, rangeIndex: number): void;
        setRangeEndValue(scaleIndex: number, rangeIndex: number, value: number): void;
        getRangeEndValue(scaleIndex: number, rangeIndex: number): void;
        setRangeSize(scaleIndex: number, rangeIndex: number, value: number): void;
        getRangeSize(scaleIndex: number, rangeIndex: number): void;
        setRangeDistanceFromScale(scaleIndex: number, rangeIndex: number, value: number): void;
        getRangeDistanceFromScale(scaleIndex: number, rangeIndex: number): void;
        setRangePosition(scaleIndex: number, rangeIndex: number, value: number): void;
        getRangePosition(scaleIndex: number, rangeIndex: number): void;
        getRangeBorderWidth(scaleIndex: number, rangeIndex: number): void;
        setPointerValue(scaleIndex: number, pointerIndex: number, value: number): void;
        setLabelAngle(scaleIndex: number, labelIndex: number, value: number): void;
        getLabelAngle(scaleIndex: number, labelIndex: number): void;
        setLabelDistanceFromScale(scaleIndex: number, labelIndex: number, value: number): void;
        getLabelDistanceFromScale(scaleIndex: number, labelIndex: number): void;
        setLabelStyle(scaleIndex: number, labelIndex: number, value: number): void;
        getLabelStyle(scaleIndex: number, labelIndex: number): void;
        setLabelPlacement(scaleIndex: number, labelIndex: number, value: number): void;
        getLabelPlacement(scaleIndex: number, labelIndex: number): void;
        setTickAngle(scaleIndex: number, tickIndex: number, value: number): void;
        getTickAngle(scaleIndex: number, tickIndex: number): void;
        setTickStyle(scaleIndex: number, tickIndex: number, value: number): void;
        getTickStyle(scaleIndex: number, tickIndex: number): void;
        setTickPlacement(scaleIndex: number, tickIndex: number, value: number): void;
        getTickPlacement(scaleIndex: number, tickIndex: number): void;
        setTickWidth(scaleIndex: number, tickIndex: number, value: number): void;
        getTickWidth(scaleIndex: number, tickIndex: number): void;
        setTickHeight(scaleIndex: number, tickIndex: number, value: number): void;
        getTickHeight(scaleIndex: number, tickIndex: number): void;
        setTickDistanceFromScale(scaleIndex: number, tickIndex: number, value: number): void;
        getTickDistanceFromScale(scaleIndex: number, tickIndex: number): void;
        setStartAngle(scaleIndex: number, value: number): void;
        getStartAngle(scaleIndex: number): void;
        setSweepAngle(scaleIndex: number, value: number): void;
        getSweepAngle(scaleIndex: number): void;
        setMinimumValue(scaleIndex: number, value: number): void;
        getMinimumValue(scaleIndex: number): void;
        setMaximumValue(scaleIndex: number, value: number): void;
        getMaximumValue(scaleIndex: number): void;
        setScaleBarSize(scaleIndex: number, value: number): void;
        getScaleBarSize(scaleIndex: number): void;
        setScaleRadius(scaleIndex: number, value: number): void;
        getScaleRadius(scaleIndex: number): void;
        setMajorIntervalValue(scaleIndex: number, value: number): void;
        getMajorIntervalValue(scaleIndex: number): void;
        setMinorIntervalValue(scaleIndex: number, value: number): void;
        getMinorIntervalValue(scaleIndex: number): void;
        setPointerCapRadius(scaleIndex: number, value: number): void;
        getPointerCapRadius(scaleIndex: number): void;
        setScaleBorderWidth(scaleIndex: number, value: number): void;
        getScaleBorderWidth(scaleIndex: number): void;
        setPointerCapBorderWidth(scaleIndex: number, value: number): void;
        getPointerCapBorderWidth(scaleIndex: number): void;
        setScaleDirection(scaleIndex: number, value: number): void;
        getScaleDirection(scaleIndex: number): void;
        includeFirstValue(scaleIndex: number, labelIndex: number, value: number): void;
        refreshSubGauge(): void;
        refresh(): void;
        redraw(value?: string):void;
        exportImage(filename: string, filetype: string): void;
        resizeCanvas(): void;
    }

    //CircularGauge Options
    interface CircularGaugeOptions {
        value?: number;
        minimum?: number;
        maximum?: number;
        radius?: number;
        width?: (number|string);
        height?: (number|string);
        frame?: CircularGaugeFrameOptions;
        tooltip?: CircularGaugeTooltipOption;
        backgroundColor?: string;
        interiorGradient?: Object;
        readOnly?: boolean;
        enableAnimation?: boolean;
        animationSpeed?: number;
        theme?: ej.datavisualization.CircularGauge.Themes;
        isRadialGradient?: boolean;
        enableResize?: boolean;
        outerCustomLabelPosition?: ej.datavisualization.CircularGauge.CustomLabelPositionType;
        gaugePosition?: ej.datavisualization.CircularGauge.gaugePosition;
        rangeZOrder?: ej.datavisualization.CircularGauge.RangeZOrderPosition;
        distanceFromCorner?: number;
        scales?: Array<ScaleOption>;
        //Events
        drawTicks? (e: DrawTicksEventArgs): void;
        drawLabels? (e: DrawLabelsEventArgs): void;
        drawPointers? (e: DrawPointersEventArgs): void;
        drawRange? (e: DrawRangeEventArgs): void;
        drawCustomLabel? (e: DrawCustomLabelEventArgs): void;
        drawIndicators? (e: DrawIndicatorsEventArgs): void;
        drawPointerCap? (e: DrawPointerCapEventArgs): void;
        load? (e: CircularGaugeLoadEventArgs): void;
        renderComplete? (e: CircularGaugeLoadEventArgs): void;
        mouseClick? (e: CircularGaugeMouseEventArgs): void;
        mouseClickMove? (e: CircularGaugeMouseEventArgs): void;
        mouseClickUp? (e: CircularGaugeMouseEventArgs): void;
    }

    //CircularGauge Scale Options
    interface ScaleOption {
        backgroundColor?: string;
        border?: CircularGaugeBorderOptions;
        direction?: ej.datavisualization.CircularGauge.Direction;
        indicators?: Array<CircularGaugeIndicatorsOptions>;
        labels?: Array<CircularGaugeLablesOptions>;
        ticks?: Array<CircularGaugeTicksOptions>;
        customLabels?: Array<CircularGaugeCustomLabelsOptions>;
        majorIntervalValue?: number;
        maximum?: number;
        minimum?: number;
        minorIntervalValue?: number;
        opacity?: number;
        pointerCap?: CircularGaugePointerCapOptions;
        pointers?: Array<CircularGaugePointerOptions>;
        radius?: number;
        ranges?: Array<CircularGaugeRangeOptions>;
        shadowOffset?: number;
        showIndicators?: boolean;
        showLabels?: boolean;
        showPointers?: boolean;
        showRanges?: boolean;
        showScaleBar?: boolean;
        showTicks?: boolean;
        showCustomLabels?: boolean;
        size?: number;
        startAngle?: number;
        subGauges?: Array<CircularGaugeSubGaugeOptions>;
        sweepAngle?: number;
    }
    //CircularGauge Ticks Options
    interface CircularGaugeTicksOptions {
        angle?: number;
        distanceFromScale?: number;
        color?: string;
        type?: string;
        placement?: string;
        height?: number;
        width?: number;
    }
    //CircularGauge customlabels Options
    interface CircularGaugeCustomLabelsOptions {
        value?: string;
        textAngle?: number;
        position?: CircularGaugePositionOptions;
        color?: string;
        font?: CircularGaugeFontOptions;
    }
    //CircularGauge Border Options
    interface CircularGaugeBorderOptions {
        color?: string;
        width?: number;
    }
    //CircularGauge indicators Options
    interface CircularGaugeIndicatorsOptions {
        height?: number;
        imageUrl?: string;
        position?: CircularGaugePositionOptions;
        stateRanges?: Array<CircularGaugeStateRangesOptions>;
        type?: string;
        width?: number;
    }
    //CircularGauge lables Options
    interface CircularGaugeLablesOptions {
        angle?: number;
        autoAngle?: boolean;
        color?: string;
        distanceFromScale?: number;
        font?: CircularGaugeFontOptions;
        includeFirstValue?: boolean;
        opacity?: number;
        placement?: string;
        type?: string;
        unitText?: string;
        UnitTextPlacement?: ej.datavisualization.CircularGauge.UnitTextPlacement;
    }
    //CircularGauge pointerCap Options
    interface CircularGaugePointerCapOptions {
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
        interiorGradient?: Object;
        radius?: number;
    }
    //CircularGauge pointer Options
    interface CircularGaugePointerOptions {
        backgroundColor?: string;
        backNeedleLength?: number;
        border?: CircularGaugeBorderOptions;
        distanceFromScale?: number;
        gradients?: Object;
        length?: number;
        markerType?: ej.datavisualization.CircularGauge.MarkerType;
        needleType?: ej.datavisualization.CircularGauge.NeedleType;
        opacity?: number;
        placement?: ej.datavisualization.CircularGauge.PointerPlacement;
        showBackNeedle?: boolean;
        type?: ej.datavisualization.CircularGauge.PointerType;
        value?: number;
        width?: number;
        pointerValueText?: PointerValueTextOptions;
        imageURL?:string;
    }
    //pointer value text Options
    interface PointerValueTextOptions {
        showValue?: boolean;
        distance?: number;
        font?: CircularGaugeFontOptions;
        color?: string;
        opacity?: number;
        autoAngle?: boolean;
        angle?: number;
    }
    //CircularGauge range Options
    interface CircularGaugeRangeOptions {
        backgroundColor?: string;
        border?: CircularGaugeBorderOptions;
        distanceFromScale?: number;
        endValue?: number;
        endWidth?: number;
        gradients?: Object;
        opacity?: number;
        placement?: string;
        size?: number;
        startValue?: number;
        startWidth?: number;
    }
    //CircularGauge subGauge Options
    interface CircularGaugeSubGaugeOptions {
        height?: number;
        position?: CircularGaugePositionOptions
        width?: number;
        controlID?: string;
    }
    //CircularGauge Position Options
    interface CircularGaugePositionOptions {
        x?: number;
        y?: number;
    }
    //CircularGauge font Options
    interface CircularGaugeFontOptions {
        fontFamily?: string;
        fontStyle?: string;
        size?: string;
    }
    //CircularGaugeFrameOptions
    interface CircularGaugeFrameOptions {
        frameType?: ej.datavisualization.CircularGauge.Frame;
        backgroundImageUrl?: string;
        halfCircleFrameStartAngle?: number;
        halfCircleFrameEndAngle?: number;
    }
    //CircularGaugeTooltipOptions
    interface CircularGaugeTooltipOption {
        templateID?: string;
        showLabelTooltip?: boolean;
        showCustomLabelTooltip?: boolean;
    }
    //CircularGaugeFrameOptions
    interface CircularGaugeStateRangesOptions {
        backgroundColor?: string;
        borderColor?: string;
        endValue?: number;
        font?: CircularGaugeFontOptions;
        startValue?: number;
        text?: string;
        textColor?: string;
    }

    //CircularGauge Mouse Arugument
    interface CircularGaugeMouseEventArgs {
        object: Object;
        cancel: boolean;
        model: Object;
        type: Object;
        scaleElement: Object;
        scaleIndex: number;
        context: Object;
        pointer: CircularGaugeMousePointerOption;
        style: string;
        position: Object;
    }
    //CircularGauge drawCustomLabel Arugument
    interface DrawCustomLabelEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        scaleIndex: number;
        position: Object;
        style: string;
        customLabelElement: Object;
        customLabelIndex: number;
    }
    //CircularGauge drawIndicators Arugument
    interface DrawIndicatorsEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        scaleIndex: number;
        position: Object;
        style: string;
        indicatorElement: Object;
        indicatorIndex: number;
    }
    //CircularGauge drawLabels Arugument
    interface DrawLabelsEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        scaleIndex: number;
        position: Object;
        style: string;
        label: Object;
        pointerValue: number;
    }
    //CircularGauge drawPointerCap Arugument
    interface DrawPointerCapEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        position: Object;
        style: string;
    }
    //CircularGauge drawPointers Arugument
    interface DrawPointersEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        scaleIndex: number;
        position: Object;
        style: string;
        pointer: CircularGaugeMousePointerOption;
    }
    //CircularGauge drawRange Arugument
    interface DrawRangeEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        scaleIndex: number;
        position: Object;
        style: string;
        rangeElement: Object;
        rangeIndex: number;
    }
    //CircularGauge drawTicks Arugument
    interface DrawTicksEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        scaleIndex: number;
        position: Object;
        style: string;
        tick: Object;
        pointerValue: number;
    }
    //CircularGauge load Arugument
    interface CircularGaugeLoadEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        style: string;
    }
    //CircularGauge Arguments Options
    interface CircularGaugeMousePointerOption {
        index: number;
        element: Object;
        value: number;
        angle: number;
    }

export module CircularGauge
{ 
enum gaugePosition 
{
        TopLeft,
        TopRight,
        TopCenter,
        MiddleLeft,
        MiddleRight,
        Center,
        BottomLeft,
        BottomRight,
        BottomCenter
}
    
enum RangeZOrderPosition  
{
        Front,
        Rear
}

    
enum OuterCustomLabelPosition
{
        Top,
        Bottom,
        Right,
        Left
}

    
enum Frame
{
        FullCircle,
        HalfCircle
}
    
enum Direction 
{
        Clockwise,
        CounterClockwise
}

    
enum IndicatorType 
{
        Rectangle, 
        Circle, 
        RoundedRectangle, 
        Text, 
        Image
}
    
enum LabelPlacement 
{
        Near,
        Far,
        Center
}
    
enum LabelType 
{
        Major,
        Minor,
}
   
enum MarkerType 
{
        Rectangle,
        Triangle,
        Ellipse,
        Diamond,
        Pentagon,
        Circle,
        Slider,
        Pointer,
        Wedge,
        Trapezoid,
        RoundedRectangle,
        Image
}
    
enum NeedleType 
{
        Triangle,
        Rectangle,
        Trapezoid,
        Arrow,
        Image,
}
    
enum PointerPlacement 
{
        Near,
        Far,
        Center,
}
    
enum PointerType 
{
        Needle,
        Marker,
}
   
enum TickType 
{
        Major,
        Minor,
}
    
enum UnitTextPlacement 
{
        Back,
        Front,
}
   
enum Themes 
{
        flatlight,
        flatdark,
}
    
enum TickPlacement 
{
        Near,
        Far,
        Center,
}
    
enum RangePlacement 
{
        Near,
        Far,
        Center,
}

enum CustomLabelPositionType 
{ 
      Inner,
      Outer
}
}
  class DigitalGauge extends ej.Widget {
        static fn: DigitalGauge;
        element: JQuery;
        constructor(element: JQuery, options?: DigitalGaugeOptions);
        model: DigitalGaugeOptions;
        defaults: DigitalGaugeOptions;
        setValue(itemIndex: number, value: string): void;
        getValue(itemIndex: number): any;
        setPosition(itemIndex: number, value: Object): void;
        getPosition(itemIndex: number): number;
        exportImage(fileName: string, fileType: string): boolean;
        refresh(): void;
        destroy(): void;
    }
    interface DigitalGaugeOptions {
        segmentData?: Object;
        matrixSegmentData?: Object;
        frame?: DigitalGaugeFrameOptions;
        height?: (number|string);
        width?: (number|string);
        enableResize?: boolean;
        theme?: ej.datavisualization.DigitalGauge.Themes;
        items?: Array<DigitalGaugeItemsOptions>;
        value?: string;
        init? (e: DigitalGaugeEventArgs): void;
        load? (e: DigitalGaugeEventArgs): void;
        renderComplete? (e: DigitalGaugeEventArgs): void;
        itemRendering? (e: DigitalGaugeEventArgs): void;
    }
    interface DigitalGaugeFrameOptions {
        backgroundImageUrl?: string;
        innerWidth?: number;
        outerWidth?: number;
    }
    interface DigitalGaugeItemsOptions {
        characterSettings?: DigitalGaugeCharacterSettingsOptions;
        enableCustomFont?: boolean;
        segmentSettings?: DigitalGaugeSegmentSettingsOptions;
        shadowBlur?: number;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
        textAlign?: ej.datavisualization.DigitalGauge.TextAlign;
        font?: DigitalGaugeFontOptions;
        position?: DigitalGaugePositionOptions;
        shadowColor?: string;
        textColor?: string;
        value?: string;
    }
    interface DigitalGaugeCharacterSettingsOptions {
        count?: number;
        opacity?: number;
        spacing?: number;
        type?:ej.datavisualization.DigitalGauge.CharacterType;
    }
    interface DigitalGaugeSegmentSettingsOptions {
        color?: string;
        gradient?: Object;
        length?: number;
        opacity?: number;
        spacing?: number;
        width?: number;
    }
    interface DigitalGaugeFontOptions {
        size?: string;
        fontFamily?: string;
        fontStyle?: ej.datavisualization.DigitalGauge.FontStyle;
    }
    interface DigitalGaugePositionOptions {
        x?: number;
        y?: number;
    }
    interface DigitalGaugeEventArgs {
        object: Object;
        cancel: boolean;
        items: Object;
        context: Object;
        model: Object;
        type: string;
    }

export module DigitalGauge{ 
    enum CharacterType {
        SevenSegment,
        FourteenSegment,
        SixteenSegment,
        EightCrossEightDotMatrix,
        EightCrossEightSquareMatrix
    } 
    enum FontStyle {
        Normal,
        Bold,
        Italic,
        Underline,
        Strikeout
    } 
    enum TextAlign {
        Left,
        Right
    }
    enum Themes {
        flatlight,
        flatdark
    }
}
    class Chart extends ej.Widget {
        static fn: Chart;
        constructor(element: JQuery, options?: ChartOptions);
		model:ChartOptions;
        defaults: ChartOptions;
        redraw(): void;
        destroy(): void;
        export(exportType: ej.datavisualization.Chart.ExportType, actionURL?: string, isMultipleExport?: boolean): void;
        exportChart(): void;
		animate(options?: Series): void;
		seriesRender(): void;
		chartResize(): void;
    }

    interface ChartOptions {
        border?: ChartBorder;
        background?: string;
        chartArea?: { border?: ChartBorder; background?: string };
        primaryXAxis?: Axis;
        primaryYAxis?: Axis;
        axes?: Array<Axis>;
        crosshair?: { marker?: Marker; visible?: boolean; type?: ej.datavisualization.Chart.CrosshairType };
        commonSeriesOptions?: Series;
        series?: Array<Series>;
        indicator?: Array<ChartIndicator>;
		annotations?: Array<Annotations>;
        initSeriesRender?: boolean;
        theme?: ej.datavisualization.Chart.Theme;
        canResize?: boolean;
        zooming?: { enable?: boolean; type?: string; enableMouseWheel?: boolean; toolbarItems?: Array<string> };
        legend?: { visible?: boolean;enableScrollbar?: boolean;toggleSeriesVisibility?: boolean; position?: ej.datavisualization.Chart.Position; title?: { text?: string; textAlignment?: string; font?: Font}; alignmnet?: ej.datavisualization.Chart.Alignment;textOverflow?:ej.datavisualization.Chart.TextOverflow; border?: Border; itemPadding?: number; textWidth?:number;shape?: ej.datavisualization.Chart.Shape; size?: { height ?: string; width ?:string}; location?: { x?: number; y?: Number }; itemStyle?: { height?: number; width?: number; border?: Border;};rowCount?: number; columnCount?: number; background?: string; font?: Font  }
        locale?: string;
        size?: { width?: string; height?: string };
        margin?: Margin;
        title?: { text?: string; font?: Font; textAlignment?: string; background?: string; border?: ChartTitleBorder; subTitle?: { text?: string; textAlignment?: string; background?: string; border?: ChartTitleBorder; font?: Font} };
        depth?: number;
        wallSize?: number;
        tilt?: number;
        rotation?: number;
        perspectiveAngle?: number;
        sideBySideSeriesPlacement?: boolean;
        enableRotation?: boolean;
        enable3D?: boolean;
        enableCanvasRendering?: boolean;
        rowDefinitions?: Array<RowDefinition>;
        columnDefinition?: Array<ColumnDefinition>;
        load? (e: ChartEvent): void;
		 beforeResize? (e: ChartEvent): void;
		 afterResize? (e: ChartEvent): void;
        animationComplete? (e: ChartEvent): void;
		 annotationClick? (e: ChartEvent): void;
        axesLabelRendering? (e: ChartEvent): void;
		 axisLabelClick? (e:ChartEvent): void;
		 axisLabelMouseMove? (e:ChartEvent): void;
        axesRangeCalculate? (e: ChartEvent): void;
        axesTitleRendering? (e: ChartEvent): void;
        chartAreaBoundsCalculate? (e: ChartEvent): void;
		 chartClick? (e: ChartEvent): void;
		 chartDoubleClick? (e: ChartEvent): void;
		 chartMouseMove? (e: ChartEvent): void;
		 chartMouseLeave? (e: ChartEvent): void;
        legendItemRendering? (e: ChartEvent): void;
        legendBoundsCalculate? (e: ChartEvent): void;
        preRender? (e: ChartEvent): void;
        seriesRendering? (e: ChartEvent): void;
		trendlineRendering? (e: ChartEvent): void;
        symbolRendering? (e: ChartEvent): void;
        titleRendering? (e: ChartEvent): void;
        axesLabelsInitialize? (e: ChartEvent): void;
        pointRegionClick? (e: ChartEvent): void;
		seriesRegionClick? (e: ChartEvent): void;
        pointRegionMouseMove? (e: ChartEvent): void;
        legendItemClick? (e: ChartEvent): void;
        legendItemMouseMove? (e: ChartEvent): void;
        displayTextRendering? (e: ChartEvent): void;
        toolTipInitialize? (e: ChartEvent): void;
        trackAxisToolTip? (e: ChartEvent): void;
        trackToolTip? (e: ChartEvent): void;
        destroy? (e: ChartEvent): void;
        create? (e: ChartEvent): void;
    }

    interface ChartBorder {
        color?: string;
        width?: number;
        opacity?: number;
    }

    interface Border {
        color?: string;
        width?: number;
    }

    interface ChartTitleBorder {
        color?: string;
        width?: number;
        opacity?: number;
        cornerRadius?: number;
    }

    interface Axis {
	    range?: { min?: any; max?: any; interval?: number };
        majorGridLines?: { width?: number; dashArray?: string; visible?: boolean; opacity?: number };
        minorGridLines?: { width?: number; dashArray?: string; visible?: boolean };
        minorTickLines?: { width?: number; size?: number; visible?: boolean };
        majorTickLines?: { width?: number; size?: number; visible?: boolean };
        alternateGridBand?: { even?: { fill?: string; opacity?: number }; odd?: { fill?: string; opacity?:number}};
        minorTicksPerInterval?: number;
        columnIndex?: number;
        columnSpan?: number;
        rowIndex?: number;
        rowSpan?: number;
        labelRotation?: number;
        valueType?: ej.datavisualization.Chart.ValueType;
        name?: string;
        labelFormat?: string;
        isInversed?: boolean;
		enableAutoIntervalOnZooming?: boolean;
        desiredIntervals?: number;
        intervalType?: ej.datavisualization.Chart.IntervalType;
        roundingPlaces?: number;
        logBase?: number;
        labelPosition?: ej.datavisualization.Chart.LabelPosition;
        tickLinesPosition?: ej.datavisualization.Chart.TickLinesPosition;
        plotOffset?: number;
        stripLine?: Array<StripLines>;
        title?: Title;
        rangePadding?: ej.datavisualization.Chart.RangePadding;
        orientation?: string;
        maximumLabels?: number;
        opposedPosition?: boolean;
        axisLine?: { visible?: boolean; width?: number; dashArray?: string; offset?: number };
        labelIntersectAction?: ej.datavisualization.Chart.LabelIntersectAction;
        enableTrim?: boolean;
        maximumLabelWidth?: number;
        edgeLabelPlacement?: ej.datavisualization.Chart.EdgeLabelPlacement;
        font?: Font;
        visible?: boolean;
        crosshairLabel?: { visible?: boolean; font?: Font; rx?: number; ry?: number; fill?: string; border?: Border };
        zoomFactor?: number;
        zoomPosition?: number;

    }

    interface Series {
        points?: Array<Point>;
		trendlines?: Array<Trendline>;
        marker?: Marker;
		errorBar?: ErrorBar;
		highlightSettings?: HighlightSettings;
		selectionSettings?: SelectionSettings;
		emptyPointSettings?: EmptyPointSettings;
        tooltip?: { visible?: boolean; format?: string; template?: string; enableAnimation?: boolean; duration?: string; font?: Font; border?: Border; rx?: number; ry?: number; fill?: string };
        font?: Font;
        labelPosition?: ej.datavisualization.Chart.LabelPosition;
		isTransposed?: boolean;
        type?: ej.datavisualization.Chart.Type;
        visibility?: boolean;
        name?: string;
		drawType?: ej.datavisualization.Chart.DrawType;
        yAxisName?: string;
        xAxisName?: string;
        pyramidMode?: ej.datavisualization.Chart.PyramidMode;
        gapRatio?: number;
        doughnutSize?: number;
        pieCoefficient?: number;
        doughnutCoefficient?: number;
        explodeOffset?: number;
        startAngle?: number;
        endAngle?: number;
        explodeIndex?: number;
		funnelWidth?:number;
		funnelHeight?:number;
        enableAnimation?: boolean;
		isClosed?:boolean;
		isStacking?:boolean;
        explodeAll?: boolean;
        drawMode?: ej.datavisualization.Chart.DrawMode;
        bullFillColor?: string;
        bearFillColor?: string;
        enableSmartLabels?: boolean;
        explode?: boolean;
        border?:  { color?: string; width?: number; dashArray?: string};
        dashArray?: string;
        lineJoin?: ej.datavisualization.Chart.LineJoin;
        lineCap?: ej.datavisualization.Chart.LineCap;
        width?: number;
        opacity?: number;
        fill?: string;
        positiveFill?: string;
        connectorLine?: { color?: string; width?: number; opacity?: number; dashArray?: string };
        dataSource?: any;
        xName?: string;
        yName?: string;
        query?: string;
    }
	interface Annotations{
        visible?: boolean;
        content?: string;
        coordinateUnit?: ej.datavisualization.Chart.CoordinateUnit;
        region?: ej.datavisualization.Chart.Region;
        verticalAlignment?: ej.datavisualization.Chart.VerticalAlignment;
        horizontalAlignment?: ej.datavisualization.Chart.HorizontalAlignment;
        x?: number;
        y?: number;
        xAxisName?: string;
        yAxisName?: string;
        opacity?: number;
        angle?: number;
        margin?:Margin;
	}
	interface ChartIndicator {
       points?: Array<Point>;
		tooltip?: { visible?: boolean; format?: string; enableAnimation?: boolean; duration?: string;border?: Border; opacity?: number;fill?: string };
		seriesName?: string;
		font?: Font;
		type?: ej.datavisualization.Chart.IndicatorType;
        period?: number;
        standardDeviations?: number;		
        kPeriod?: number;
        dPeriod?: number;
        periodLine?: { fill?: string; width?: number };
        lowerLine?: { fill?: string; width?: number };
        upperLine?: { fill?: string; width?: number };
        macdLine?: { fill?: string; width?: number };
        histogram?: { fill?: string; opacity?: number; border?: Border };
        fill?: string;
        width?: number;
        xAxisName?: string;
        yAxisName?: string;
        visibility?: boolean;
        macdType?: ej.datavisualization.Chart.MACDType;
        shortPeriod?: number;
        longPeriod?: number;
        trigger?: number;
        enableAnimation?:boolean;
    }

    interface Point {
        x?: any;
        y?: number;
        high?: number;
        low?: number;
        open?: number;
        close?: number;
        size?: number;
        visible?: boolean;
        isEmpty?: boolean;
        interior?: string;
        text?: string;
        offset?: number;
        font?: Font;
        fill?: string;
        opacity?: number;
        border?: Border;
        width?: number;
        marker?: Marker
    }

	interface Trendline {
	  type?: ej.datavisualization.Chart.TrendlinesType;
      visibility?: string;
      name?: string;
      fill?: string;
      width?: number;
      opacity?: number
      dashArray?: string;
      forwardForecast?: number;
      backwardForecast?: number;
      polynomialOrder?: number;
	  period?: number;
	}
	
    interface StripLines {
        visible?: boolean;
        startFromAxis?: boolean;
        text?: string;
        textAlignment?: ej.datavisualization.Chart.TextAlignment;
        font?: Font;
        start?: number;
        end?: number;
        color?: string;
        borderColor?: string;
        zIndex?: ej.datavisualization.Chart.ZIndex;
        borderWidth?: number;
    }

    interface RowDefinition {
        rowHeight?: number;
        lineWidth?: number;
        lineColor?: string;
        unit?: ej.datavisualization.Chart.Unit
    }

    interface ColumnDefinition {
        columnWidth?: number;
        unit?: ej.datavisualization.Chart.Unit
    }

    interface Font {
        fontFamily?: string;
        fontStyle?: ej.datavisualization.Chart.FontStyle;
        fontWeight?: string;
        size?: string;
        color?: string;
        opacity?: number;
    }

    interface Title {
        text?: string;
        font?: Font;
		 visible?:boolean;
		enableTrim?:boolean;
		maximumTitleWidth?:number;
    }

    interface Marker {
        visible?: boolean;
        size?: { width?: number; height?: number };
        opacity?: number;
        shape?: ej.datavisualization.Chart.Shape;
        dataLabel?: DataLabel;
        border?: Border;
        fill?: string;
    }
	
	 interface ErrorBar {
        visibility?: string;
        cap?: { width?: number; length?: number; fill?: string };
        opacity?: number;
        type?: ej.datavisualization.Chart.ErrorBarType;
        mode?: ej.datavisualization.Chart.ErrorBarMode;
        direction?: ej.datavisualization.Chart.ErrorBarDirection;
        width?: number;
        verticalErrorValue?: number;
        horizontalErrorValue?: number;
        horizontalPositiveErrorValue?: number;
        horizontalNegativeErrorValue?: number;
        verticalPositiveErrorValue?: number;
        verticalNegativeErrorValue?: number;
        fill?: string;
    }
	
	interface HighlightSettings {
        enable?: boolean;
        color?: string;
        opacity?: number;
        border?: { width?: number; color?: string };
        mode?: ej.datavisualization.Chart.Mode;
        type?: ej.datavisualization.Chart.SelectionType;
		pattern?: ej.datavisualization.Chart.Pattern;
        customPattern?: string;
    }
	interface EmptyPointSettings {
		visible?: boolean;
		style?:{color?: string; border?: Border};
		displyMode?: ej.datavisualization.Chart.EmptyPointMode;
	}
	interface SelectionSettings {
        enable?: boolean;
        color?: string;
        opacity?: number;
        border?: { width?: number; color?: string };
        mode?: ej.datavisualization.Chart.Mode;
		pattern?: ej.datavisualization.Chart.Pattern;
        customPattern?: string;
    }

    interface DataLabel {
        textPosition?: string;
        horizontalTextAlignment?: ej.datavisualization.Chart.HorizontalTextAlignment;
        verticalTextAlignment?: ej.datavisualization.Chart.VerticalTextAlignment;
        visible?: boolean;
        offset?: any;
        angle?: number;
        template?: string;
        font?: Font;
        shape?: ej.datavisualization.Chart.Shape;
        connectorLine?: { color?: string; width?: number; type?: ej.datavisualization.Chart.ConnectorLineType};
        margin?: Margin;
        border?: Border;
        fill?: string;
        opacity?: number;
    }

    interface Margin {
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
    }

    interface ChartEvent {
        cancel: boolean;
        type: string;
        model: ChartOptions;
    }
export module Chart{
	enum CrosshairType{
        Crosshair,
        TrackBall
	}
	enum EmptyPointMode{
		Gap,
		Zero,
		Average
	}
	enum ExportType{
		Image,
		Excel
	}
	enum ValueType{
		Double,
        DateTime,
        Category,
        Logarithmic
	}
	enum Type{
        Line,
        Spline,
        Column,
        Doughnut,
        Area,
        SplineArea,
        StepLine,
        StepArea,
        Pie,
        Hilo,
        HiloOpenClose,
        Candle,
        Bubble,
        Scatter,
        Bar,
        StackingArea,
        StackingArea100,
        RangeColumn,
        StackingColumn,
        StackingColumn100,
        StackingBar,
        StackingBar100,
        Pyramid,
        Funnel,
        Polar,
        Radar,
        RangeArea,
        Waterfall
	}
	enum TrendlinesType{
		Linear,
        Exponential,
        Logarithmic,
        Power,
        Polynomial,
		MovingAverage
	}
	enum LabelIntersectAction{
		None,
        Rotate90,
        Rotate45,
        Wrap,
		WrapByWord,
        Trim,
        Hide,
        MultipleRows
	}
	enum EdgeLabelPlacement{
		None,
		Shift,
		Hide
	}
	enum Theme{
		Azure, 
        FlatLight,
        Azuredark,
        Lime,
        LimeDark,
        Saffron,
        SaffronDark,
        GradientLight,
        GradientDark
	}
	enum FontStyle{
		Normal,	
		Italic
	}
	enum FontWeight{
		Regular,
		Bold,
		Lighter
	}
	enum IntervalType{
		Days,
		Hours,
		Seconds,
		Milliseconds,
		Minutes,
		Months,
		Years
	}
	enum RangePadding{
		Additional,
		Normal,
		None,
		Round,
		Auto
	}
	enum TextOverflow{
		None,
		Trim,
		Wrap,
		WrapAndTrim
	}
	enum TextAlignment{
		MiddleTop,
        MiddleCenter,
        MiddleBottom
	}
	enum LabelPosition{
		Inside,
		Outside
	}
	enum ZIndex{
		Over,
		Behind
	}
	enum Unit{
		percentage,
        pixel
	}
	enum PyramidMode{
		Linear,
		Surface
	}
	enum DrawType{
		Line,
		Column,
		Area
	}
	enum Pattern{
		None,
        Chessboard,
        Crosshatch,
        Dots,
        Pacman,
        DiagonalBackward,
        DiagonalForward,
        Grid,
        Turquoise,
        Star,
        Triangle,
        Circle,
        Tile,
        HorizontalDash,
        VerticalDash,
        Rectangle,
        Box,
        VerticalStripe,
        HorizontalStripe,
        Bubble,
        Custom 
	}
	enum Mode{
		Series,
        Point,
		Cluster
    }
    enum SelectionType {
        Single,
        Multiple
    }
	enum Shape{ 
        None, 
        LeftArrow, 
        RightArrow, 
        Circle, 
        Cross, 
        HorizLine, 
        VertLine, 
        Diamond, 
        Rectangle, 
        Triangle, 
        InvertedTriangle, 
        Hexagon, 
        Pentagon, 
        Star, 
        Ellipse, 
        Wedge, 
        Trapezoid, 
        UpArrow, 
        DownArrow, 
        Image
	}
	enum ErrorBarType{
	       FixedValue,
		   Percentage,
		   StandardDeviation,
		   StandardError,
		   Custom
		}
	enum ErrorBarMode{
	      Vertical,
		  Horizontal,
		  Both
	}
    enum ErrorBarDirection{
          Both,
          Minus,
          Plus		  
	 }	
	enum DrawMode{
		Both,
		Open,
		Close
	}
	enum LineCap{
		Butt,
		Round,
		Square
	}
	enum LineJoin{
		Round,
		Bevel,
		Miter
	}
	enum Position{
		Top,
		Middle,
		Bottom
	}
	enum Alignment{
		Center,
		Near,
		Far
	}
	enum TickLinesPosition{
		Inside,
		Outside
	}
	enum CoordinateUnit{
		None,
		Pixels,
		Points
	}
	enum HorizontalAlignment{
		Middle,
		Left,
		Right
	}
	enum Region{
		Chart,
        Series
	}
	enum VerticalAlignment{
		Middle,
		Top,
		Bottom
	}
	enum ConnectorLineType{
		Line,
		Bezier
	}
	enum HorizontalTextAlignment{
		Near,
		Far,
		Center
	}
	enum VerticalTextAlignment{
		Near,
		Far,
		Center	
	}
	enum MACDType{
		Line,
		Histogram,
		Both
	}
	enum IndicatorType{
		RSI, 
        Momentum, 
		Bollingerband, 
		Accumulationdistribution, 
		EMA, 
		SMA, 
		Stochastic, 
		ATR, 
		MACD, 
		TMA
	}
}
    class RangeNavigator extends ej.Widget {
        static fn: RangeNavigator;
        constructor(element: JQuery, options?: RangeNavigatorOptions);
        model:RangeNavigatorOptions;
	defaults: RangeNavigatorOptions;
        renderNavigator(evt:any): void;
    }
    interface RangeNavigatorOptions {
        theme?: ej.datavisualization.RangeNavigator.Theme;
        padding?: string;
        enableAutoResizing?: boolean;
        allowSnapping?: boolean;
        rangePadding?: ej.datavisualization.RangeNavigator.RangePadding;
        sizeSettings?: { width?: (number|string); height?: (number|string) };
        locale?: string;
        valueType?: ej.datavisualization.RangeNavigator.ValueType;
        valueAxisSettings?: { rangePadding?: string; visible?: boolean; axisLine: { visible?: boolean }; font: { size?: string }; majorTickLines: { width?: number; size?: number; visible?: boolean }; majorGridLines: { visible?: boolean } }
        enableRTL?: boolean;
        dataSource?: any;
        xName?: string;
        yName?: string;
        tooltipSettings?: { visible?: boolean; labelFormat?: string; tooltipDisplayMode?: string; backgroundColor?: string; font?: RangeFont };
        zoomPosition?: string;
        zoomFactor?: string;
        selectedRangeSettings?: { start?: any; end?: any };
        selectedData?: string;
        rangeSettings?: { start?: string; end?: string };
        series?: Array<RangeSeries>;
        enableDeferredUpdate?: boolean;
        seriesSettings?: { type?: string; animation?: boolean };
        labelSettings?: { higherLevel?: Labels; lowerLevel?: Labels; style?: { font?: RangeFont; horizontalAlignment?: ej.datavisualization.RangeNavigator.HorizontalAlignment} };
        navigatorStyleSettings?: { selectedRegionColor?: string; unselectedRegionColor?: string; thumbColor?: string; thumbRadius?: number; leftThumbTemplate?: string;rightThumbTemplate?: string; thumbStroke?: string; background?: string; border?: { width?: number; stroke?: string; dashArray?: string }; opacity?: number; majorGridLineStyle?: { visible?: boolean; color?: string }; minorGridLineStyle?: { visible?: boolean; color?: string } };
        loaded? (e: RangeNavigatorEvent): void;
        load? (e: RangeNavigatorEvent): void;
        rangeChanged? (e: RangeNavigatorEvent): void;
    }
	
	 interface RangeSeries {
        points?: Array<RangePoint>;		 
        tooltip?: { visible?: boolean; format?: string; template?: string; enableAnimation?: boolean; duration?: string; font?: RangeFont; rx?: number; ry?: number; fill?: string };
        type?: ej.datavisualization.Chart.Type;
        visibility?: boolean;
        name?: string;		 
        width?: number;
        opacity?: number;
        fill?: string;
        dataSource?: any;
        xName?: string;
        yName?: string;
        query?: string;
		enableAnimation?:boolean;
		 marker?: RangeMarker;
    }
	
	  interface RangeMarker {
        visible?: boolean;
        size?: { width?: number; height?: number };
        opacity?: number;
        shape?: ej.datavisualization.Chart.Shape;      
        fill?: string;		
    }
	
	 interface RangePoint {
        x?: any;
        y?: number;
        high?: number;
        low?: number;
        open?: number;
        close?: number;
        size?: number;
        visible?: boolean;
        isEmpty?: boolean;
        interior?: string;
        text?: string;
        offset?: number;
        font?: RangeFont;
        fill?: string;
        opacity?: number;
        width?: number;
      
    }

    interface Labels {
        intervalType?: ej.datavisualization.RangeNavigator.IntervalType;
        style?: { font?: RangeFont; horizontalAlignment?: ej.datavisualization.RangeNavigator.HorizontalAlignment };
        gridLineStyle?: { color?: string; width?: number; stroke?: string; dashArray?:string};
        fill?: string;
        position?: ej.datavisualization.RangeNavigator.Position;
        visible?: boolean;
        labelPlacement?: ej.datavisualization.RangeNavigator.LabelPlacement;
    }

    interface RangeFont {
        family?: string;
        style?: ej.datavisualization.RangeNavigator.FontStyle;
        weight?: ej.datavisualization.RangeNavigator.FontWeight;
        size?: string;
        color?: string;
        opacity?: number;
    }

    interface RangeNavigatorEvent {
        cancel: boolean;
        type: string;
        model: RangeNavigatorOptions;
    }

export module RangeNavigator
{
enum IntervalType{
         Years,
         Quarters,
         Months,
         Weeks,
         Days,
         Hours
}
enum Position
{
  Top,
  Bottom
}
 enum Theme
        {
            Azure,
            FlatLight,
            Azuredark,
            Lime,
            LimeDark,
            Saffron,
            SaffronDark,
            GradientLight,
            GradientDark
        }
enum LabelPlacement{
  Inside,
  Outside
}
enum FontStyle{
  Normal,
  Italic,
  Bold
}
enum FontWeight{
  Regular,
  Bold,
  Lighter
}
enum HorizontalAlignment
{
  Left,
  Right,
  Middle
}
enum ValueType{
  Numeric,
  Datetime
}
enum RangePadding{
         Additional,
         Normal,
         None,
         Round
}
}
    class BulletGraph extends ej.Widget {
        static fn: BulletGraph;
        constructor(element: JQuery, options?: BulletGraphOptions);
		model: BulletGraphOptions;
        defaults: BulletGraphOptions;
        redraw(): void;
        destroy(): void;
        setFeatureMeasureBarValue(index:number, measureValue:number): void;
        setComparativeMeasureSymbol(index:number, measureValue:number): void;
    }

    interface BulletGraphOptions {
        value?: number;
        comparativeMeasureValue?: number;
        width?: (number|string);
        height?: (number|string);
        theme?: ej.datavisualization.BulletGraph.Themes;
		fontStyle?:ej.datavisualization.BulletGraph.FontStyle;
		fontWeight?:ej.datavisualization.BulletGraph.FontWeight;
        orientation?: ej.datavisualization.BulletGraph.Orientation;
        flowDirection?: ej.datavisualization.BulletGraph.FlowDirection;
        qualitativeRangeSize?: number;
        quantitativeScaleLength?: number;
        tooltipSettings?: { visible?: boolean; template?: string; enableCaptionTooltip?:boolean; captionTemplate?:string; };
        quantitativeScaleSettings?: QuantitativeScale;
        fields?: { dataSource?: any; query?: string; tableName?: string; category?: string; featureMeasures?: string; comparativeMeasure?: string; };
        enableAnimation?: boolean;
        enableResizing?: boolean;
        applyRangeStrokeToTicks?: boolean;
        applyRangeStrokeToLabels?: boolean;
        qualitativeRanges?: Array<{ rangeEnd?: number; rangeStroke?: number; rangeOpacity?: number }>;
        captionSettings?: { enableTrim?: boolean;textPosition?:string;textPlacement?:string;textAnchor?:string;textAngle?: number; indicator?: Indicator; location?: { x?: number; y?: number }; text?: string; font?: Font; subTitle?: { textAngle?: number; location?: { x?: number; y?: number }; text?: string; font?: Font;textPosition?:string;textPlacement?:string;textAnchor?:string; } }
        drawTicks? (e: BulletGraphEvent): void;
        drawLabels? (e: BulletGraphEvent): void;
        drawCaption? (e: BulletGraphEvent): void;
        drawQualitativeRanges? (e: BulletGraphEvent): void;
        drawFeatureMeasureBar? (e: BulletGraphEvent): void;
        drawCategory? (e: BulletGraphEvent): void;
        drawIndicator? (e: BulletGraphEvent): void;
        drawComparativeMeasureSymbol? (e: BulletGraphEvent): void;
    }

    interface Indicator {
        visibile?: boolean;
        textAngle?: number;
	    textPosition?:string;
		textPlacement?:string;
		textAnchor?:string;
        text?: string;
        textSpacing?: number;
        symbol?: { border?: { color?: string; width?: number }; color?: string; imageURL?: string; opacity?: number; size?: { height?: number; width?: number }; shape?: ej.datavisualization.BulletGraph.Shape; };
        location?: { x?: number; y?: number };
        font?: Font;
    }
    interface QuantitativeScale {
        location?: { x?: number; y?: number };
        minimum?: number;
        maximum?: number;
        interval?: number;
        minorTicksPerInterval?: number;
        majorTickSettings?: { size?: number; stroke?: number; width?: number };
        minorTickSettings?: { size?: number; stroke?: number; width?: number; };
        tickPosition?: ej.datavisualization.BulletGraph.TickPosition;
		tickPlacement?: ej.datavisualization.BulletGraph.TickPlacement;
        labelSettings?: { labelPrefix?: string; labelSuffix?: string; stroke?: string; size?: number; offset?: number; font?: Font; labelPosition?:ej.datavisualization.BulletGraph.LabelPosition; labelPlacement?:ej.datavisualization.BulletGraph.LabelPlacement;};
        featuredMeasureSettings?: { stroke?: number; width?: number };
        comparativeMeasureSettings?: { stroke?: number; width?: number };
        featureMeasures?: Array<{ value?: number; comparativeMeasureValue?: number; category?: string }>;
    }

    interface BulletGraphEvent {
        cancel: boolean;
        type: string;
        model: BulletGraphOptions;
    }
export module BulletGraph{
	enum Orientation{
		Horizontal,
		Vertical
	}
	enum TickPlacement{
		Inside,
		Outside
	}
	enum LabelPlacement{
		Inside,
		Outside
	}
	enum Shape{
		Circle,
        Cross,
        Diamond,
        DownArrow,
        Ellipse,
        HorizontalLine,
        Image,
        InvertedTriangle,
        LeftArrow,
        Pentagon,
        Rectangle,
        RightArrow,
        Star,
        Trapezoid,
        Triangle,
        UpArrow,
        VerticalLine,
        Wedge 
	}
	enum TickPosition{
		Far,
		Near,
		Center
	}
	enum LabelPosition{
		Below,
		Above
	}
	enum FlowDirection{
		Forward,
		Backward
	}
	enum FontStyle{
		Normal,
		Italic,
		Oblique
	}
	enum FontWeight{
		Normal,
		Bold,
		Bolder,
		Lighter
	}
	enum Themes{
		flatlight,
		flatdark
	}


}

    class Barcode extends ej.Widget {
        static fn: Barcode;
        constructor(element: JQuery, options?: BarcodeOptions);
		model: BarcodeOptions;
        defaults: BarcodeOptions;
    }

    interface BarcodeOptions {
        displayText?: boolean;
        text?: string;
        symbologyType?: ej.datavisualization.Barcode.SymbologyType;
        textColor?: string;
        lightBarColor?: string;
        darkBarColor?: string;
		quietZone?:quietZone;
        narrowBarWidth?: number;
        wideBarWidth?: number;
        barHeight?: number;
        barcodeToTextGapHeight?: number;
        xDimension?: number;
        encodeStartStopSymbol?: boolean;
        enabled?: boolean;
        load? (e: BarcodeEvent): void;
    }

    interface BarcodeEvent {
        cancel: boolean;
        type: string;
        model: BarcodeOptions;
    }
	interface quietZone{
		left?:number;
		top?:number;
		right?:number;
		bottom?:number;
		all?:number;
	}

export module Barcode
{
enum SymbologyType 
{
        code39,
        code39Extended,
        code11,
        codabar,
        code32,
        code93,
        code93Extended,
        code128A,
        code128B,
        code128C,
        dataMatrix,
        qrBarcode

}
}

	 class Map extends ej.Widget {
        static fn: Map;
        constructor(element?: JQuery, options?: MapOptions);
        constructor(element?: Element, options?: MapOptions);
        model: MapOptions;
        defaults: MapOptions;
        navigateTo(latitude:number, longitude:number, level:number, isAnimate:boolean): void;
        pan(direction:string): void;
        refresh(): void;
        refreshLayers(): void;
        refreshNavigationControl(navigation:any): void;
        zoom(level:number, isAnimate:boolean): void;
    }

    interface MapOptions {
        enablePan?: boolean;
        baseMapIndex?: number;
        enableAnimation?: boolean;
        layers?: Array<ShapeLayer>;
        zoomSettings?: ZoomSettings;
        background?: string;
        enableResize?: boolean;
		draggingOnSelection?: boolean;
        enableLayerChangeAnimation?: boolean;
        navigationControl?: NavigationControl;
        dataSource?: any;
        centerPosition?: ShapePoint;
        zoomedIn? (e:MapZoomEvent): void;
		zoomedOut? (e:MapZoomEvent): void;
		panned? (e:MapEvent): void;
		shapeSelected? (e:MapSelectEvent): void;
		onRenderComplete? (e:MapRenderCompleteEvent): void;
		mouseover? (e:MapShapeMouseEvent): void;
		mouseleave? (e:MapShapeMouseEvent): void;
		markerSelected? (e:MapSelectEvent): void;
    }

    interface ZoomSettings {
        minValue?: number;
        maxValue?: number;
        factor?: number;
        level?: number;
        enableZoomOnSelection?: boolean;
        enableZoom?: boolean;
    }

    interface BubbleSetting {
		showBubble?: boolean;
		bubbleOpacity?: string;
        minValue?: number;
        maxValue?: number;
        color?: string;
        colorValuePath?: string;
        valuePath?: string;
        tooltipTemplate?: string;
        colorMappings?: ColorMapping;
        showToolTip?: boolean
    }

    interface ColorMapping {
        color?: string;
    }

    interface RangeColorMapping extends ColorMapping {
        from?: number;
        to?: number;
        gradientColors?: Array<string>;
        legendLabel?: string;
    }

    interface EqualColorMapping extends ColorMapping {
        value?: any;
    }

    interface MapLabelSetting {
        showLabels?: boolean;
        enableSmartLabel?: boolean;
        labelPath?: string;
        smartLabelSize?: ej.datavisualization.Map.LabelSize;
        labelLength?: number;
    }

    interface MapLegendSetting {
        showLegend?: boolean;
		showLabels?: boolean;
		legendPadding?: number;
        positionX?: number;
        positionY?: number;
        width?: number;
        height?: number;
		iconHeight?: number;
		iconWidth?: number;
        type?: ej.datavisualization.Map.LegendType;
		labelOrientation?: ej.datavisualization.Map.LabelOrientation;
        title?: string;
        leftLabel?: string;
        rightLabel?: string;
        icon?: ej.datavisualization.Map.LegendIcons;
        mode?: ej.datavisualization.Map.LegendMode;
        position?: ej.datavisualization.Map.Position;
		dockOnMap?: boolean;
		dockPosition?: ej.datavisualization.Map.DockPosition;
		alignment?: ej.datavisualization.Map.Alignment;
		columnCount?: number;
    }
	   
    interface NavigationControl {
        enableNavigation?: boolean;
		content?:any;
        orientation?: ej.datavisualization.Map.Orientation;
        dockPosition?: ej.datavisualization.Map.DockPosition;
        absolutePosition?: ShapePoint;
    }

    interface ShapeSetting {
        highlightColor?: string;
        highlightBorderWidth?: number;
        selectionColor?: string;
        fill?: string;
        strokeThickness?: number;
        selectionStrokeWidth?: number;
        stroke?: string;
        selectionStroke?: string;
        highlightStroke?: string;
        colorValuePath?: string;
        valuePath?: string;
        colorMappings?: ColorMapping
		autoFill?: boolean;
        enableGradient?: boolean;
        colorPalette?: ej.datavisualization.Map.ColorPalette;
		customPalette?: Array<string>;
    }

    interface MapMarkers {
        mapMarker?: MapMarkers
    }

    interface ShapePoint {
        X?: number;
        Y?: number;
    }

    interface ShapeLayer {
        enableSelection?: boolean;
        selectionMode?: ej.datavisualization.Map.SelectionMode;
        enableMouseHover?: boolean;
        showToolTip?: boolean;
        enableAnimation?: boolean;
        showMapItems?: boolean;
        shapeData?: any;
        dataSource?: any;
        markerTemplate?: string;
        tooltipTemplate?: string;
        mapItemsTemplate?: string;
        shapePropertyPath?: string;
        shapeDataPath?: string;
        markers?: Array<MapMarkers>;
        subLayers?: Array<ShapeLayer>;
        shapeSettings?: ShapeSetting;
        bubbleSettings?: BubbleSetting;
        labelSettings?: MapLabelSetting;
        urlTemplate?: string;
        contribution?: string;
        legendSettings?: MapLegendSetting;
        layerType?: ej.datavisualization.Map.LayerType;
		key?: string;
		bingMapType?: ej.datavisualization.Map.BingMapType;
		prevPaletteIndex?: number;
    }

    interface MapEvent extends ej.BaseEvent {
        model: MapOptions;
    }

    interface MapZoomEvent extends ej.BaseEvent, MapEvent {
        data: any;
    }
    interface MapSelectEvent extends ej.BaseEvent, MapEvent {
        data: any;
    }
    interface MapRenderCompleteEvent extends ej.BaseEvent, MapEvent {
        data: any;
    }
    interface MapShapeMouseEvent extends ej.BaseEvent, MapEvent {
        data: string;
    }

	export module Map
	{
		enum BingMapType 
		{
			Aerial,
			AerialWithLabel,
			Road
		}
	    
		enum DockPosition 
		{
			Top,	
			Bottom,    
			Right,    
			Left
		}

		enum LegendIcons 
		{
			Rectangle,
			Circle
		}

		enum LabelSize 
		{
			Fixed,
			Default
		}

		enum LegendMode 
		{
			Default,
			Interactive       
		}
	
		enum LegendType 
		{
			Layers,
			Bubbles
		}

		enum LayerType 
		{
			Geometry,
			OSM,
			Bing
		}
	
		enum SelectionMode 
		{
			Default,
			Multiple
		}
	
		enum LabelOrientation 
		{
			Horizontal,
			Vertical
		}

		enum ColorPalette 
		{
			Palette1,
			Palette2,
			Palette3,
			CustomPalette
		}
	
		enum Position 
		{
			None,
			TopLeft,
			TopCenter,
			TopRight,
			CenterLeft,
			Center,
			CenterRight,
			BottomLeft,
			BottomCenter,
			BottomRight
		}

		enum Orientation 
		{
			Vertical,
			horizontal
		}

		enum Alignment
		{
			Near,
			Center,
			Far
		}
	}



     class TreeMap extends ej.Widget {
        static fn: TreeMap;
        element: JQuery;
        constructor(element?: Element, options?: TreeMapOptions);
        constructor(element?: JQuery, options?: TreeMapOptions);
        model: TreeMapOptions;
        defaults: TreeMapOptions;
        refresh(): void;
    }

    interface TreeMapOptions {
        dataSource?: any;
        colorValuePath?: string;
        weightValuePath?: string;
        treeMapItems?: Array<TreeMapItem>;
        showLegend?: boolean;
        enableResize?: boolean;
        leafItemSettings?: LeafItemsSetting;
        itemsLayoutMode?: ej.datavisualization.TreeMap.ItemsLayoutMode;
		textVisibilityMode?: string;
        levels?: Array<TreeMapLevel>;
        treeMapLegend?: TreeMapLegend;
        highlightOnSelection?: boolean;
		selectionMode?: ej.datavisualization.TreeMap.SelectionMode;
		highlightGroupOnSelection?:boolean;
		groupSelectionMode?: ej.datavisualization.TreeMap.GroupSelectionMode;
		enableDrillDown?:boolean;
		drillDownHeaderColor?: string;
		drillDownSelectionColor?: string;
		draggingOnSelection?: boolean;
		draggingGroupOnSelection?: boolean;
        showTooltip?: boolean;
        tooltipTemplate?: string;
        highlightBorderThickness?: number;
		highlightGroupBorderThickness?: number;
        highlightBorderBrush?: string;
		highlightGroupBorderBrush?: string;
        rangeColorMapping?: Array<TreeMapRangeColorMapping>;
        desaturationColorMapping?: TreeMapDesaturationColorMapping;
        paletteColorMapping?: TreeMapPaletteColorMapping;
        uniColorMapping?: TreeMapUniColorMapping;
        treeMapItemSelected? (e: TreeMapSelectEvent): void;
    }

    interface TreeMapItem {
    }

    interface LeafItemsSetting {
				
        showLabels?: boolean;
        headerTemplate?: string;
        itemTemplate?: string;
        groupBackground?: string;
        groupBorderColor?: string;
        groupBorderThickness?: number;
        groupPadding?: number;
        treeMapItems?: Array<TreeMapItem>;
		
    }		

    interface TreeMapRangeColorMapping extends TreeMapPaletteColorMapping {
        from?: number;
        to?: number;
        legendLabel?: string;
    }

    interface TreeMapDesaturationColorMapping extends TreeMapPaletteColorMapping {
        from?: number;
        to?: number;
        rangeMinimum?: number;
        rangeMaximum?: number;
    }

    interface TreeMapUniColorMapping extends TreeMapPaletteColorMapping {
        color?: string;
    }

    interface TreeMapPaletteColorMapping {
        colors?: Array<string>;
    }

    interface TreeMapLegend {
        template?: string;
        iconHeight?: number;
        iconWidth?: number;
		height?: number;
		width?: number;		
		dockPosition?: ej.datavisualization.TreeMap.DockPosition;
		alignment?:ej.datavisualization.TreeMap.Alignment;
		columnCount?: number;
    }

    interface TreeMapLevel {
        groupPath?: string;
        groupGap?: number;
        headerHeight?: number;
        showLabels?: boolean;
		showHeader?: boolean;
		labelPosition?:ej.datavisualization.TreeMap.Position;
        labelVisibilityMode?:ej.datavisualization.TreeMap.VisibilityMode;
        headerVisibilityMode?:ej.datavisualization.TreeMap.VisibilityMode;
        headerTemplate?: string;
        labelTemplate?: string;
        groupBackground?: string;
        groupBorderColor?: string;
        groupBorderThickness?: number;
        groupPadding?: number;
        treeMapItems?: Array<TreeMapItem>;
    }

    interface TreeMapEvent extends ej.BaseEvent {
        model: TreeMapOptions;
    }
    interface TreeMapSelectEvent extends ej.BaseEvent, TreeMapEvent {
        data: any;
    }

	export module TreeMap{
		enum VisibilityMode {
			Visible,
			HideOnExceededLength
		}
	    
		enum Position {
			TopLeft,
            TopCenter,
            TopRight,
            CenterLeft,
            Center,
            CenterRight,
			BottomLeft,
			BottomCenter,
            BottomRight		
		}
	    
		enum ItemsLayoutMode {
			Squarified,        
			SliceAndDiceHorizontal,         
			SliceAndDiceVertical,         
			SliceAndDiceAuto
		}

		enum Alignment{
			Near,
			Center,
			Far
		}

		enum DockPosition{
			Top,
			Bottom,
			Right,
			Left
		}

		enum SelectionMode
		{
			Default,
			Multiple
		}

		enum GroupSelectionMode
		{
			Default,
			Multiple
		}
	}


//SymbolPalette
class SymbolPalette extends ej.Widget {
    static fn: SymbolPalette;
    element: JQuery;
    constructor(element: Element, options?: SymbolPaletteOptions);
    model: SymbolPaletteOptions;
    validTags: Array<string>;
    defaults: SymbolPaletteOptions;
    disable(): void;
    enable(): void;
    destroy(): void;
}

interface SymbolPaletteOptions {
    width?: any;
    height?: any;
    paletteItemWidth?: number;
    paletteItemHeight?: number;
    previewWidth?: number;
    previewHeight?: number;
    previewOffset?: PreviewOffsetOption;
    diagramId?: string;
    headerHeight?: number;
    cssClass?: string;
    showPaletteItemText?: boolean;
    allowDrag?: boolean;
    palettes?: Array<Object>;
    defaultSettings?: DefaultSettingsOption;
    selectionChange? (e: PaletteSelectionChangeEvent): void;
    create? (e: CreateEvent): void;
    destroy? (e: DestoryEvent): void;
}

interface PaletteSelectionChangeEvent extends DiagramBaseEvent {
    oldElement?: Object;
    newElement?: Object;
}

interface PreviewOffsetOption {
    x?: number;
    y?: number;
}

//Diagram
class Diagram extends ej.Widget {
    static fn: Diagram;
    constructor(element: JQuery, options?: DiagramOptions);
    constructor(element: Element, options?: DiagramOptions);
    model: Object;
    validTags: Array<string>;
    defaults: DiagramOptions;
    disable(): void;
    enable(): void;
    destroy(): void;
    add(node: Object): Object;
    addLabel(nodeName: string, label: Object): void;
    addPhase(name: string, options: Object): void;
    addPorts(nodeName: string, ports: Array<Object>): void;
    addSelection(node: Object, clearSelection?: boolean): void;
    align(direction: string): void;
    bringIntoView(bounds: Object): void;
    bringToCenter(rect: Object): void;
    bringToFront(): void;
    clear(): void;
    clearSelection(): void;
    copy(): void;
    cut(): void;
    exportDiagram(options?: Object): void;
    findNode(name: string): Object;
    fitToPage(mode?: ej.datavisualization.Diagram.FitMode, region?: ej.datavisualization.Diagram.Region, margin?: MarginOption): void;
    getObjectType(element: Object): string;
    group(): void;
    insertLabel(nodeName: string, label: Object, index: number): void;
    layout(): void;
    load(data: Object): void;
    moveForward(): void;
    nudge(direction: string, delta?: number): void;
    paste(object?: Object, rename?: boolean): void;
    print(): void;
    redo(): void;
    refresh(): void;
    remove(node: Object): void;
    removeSelection(node: Object): void;
    sameHeight(): void;
    sameSize(): void;
    sameWidth(): void;
    save(): Object;
    scrollToNode(node: Object): void;
    selectAll(): void;
    sendBackward(): void;
    sendToBack(): void;
    spaceDown(): void;
    spaceAcross(): void;
    startLabelEdit(node: Object, label: Object): void;
    undo(): void;
    ungroup(): void;
    update(options: Object): void;
    updateConnector(name: string, options: Object): void;
    updateLabel(nodeName: string, label: Object, options: Object): void;
    updateNode(name: string, options: Object): void;
    updatePort(nodeName: string, port: Object, options: Object): void;
    updateSelection(showUserHandles?: boolean): void;
    updateUserHandles(node: Object): void;
    updateViewPort(): void;
    zoomTo(zoom: Object): void;
}

interface DiagramOptions {
    width?: string;
    height?: string;
    nodes?: Array<Object>;
    connectors?: Array<Object>;
    defaultSettings?: DefaultSettingsOption;
    nodeTemplate?: Function;
    connectorTemplate?: Function;
    dataSourceSettings?: DataSourceSettingsOption;
    snapSettings?: SnapSettingsOption;
    scrollSettings?: ScrollSettingsOption;
    pageSettings?: PageSettingsOption;
    locale?: string;
    contextMenu?: ContextMenuOption;
    enableContextMenu?: boolean;
    enableAutoScroll?: boolean;
    tooltip?: TooltipOption;
    layout?: LayoutOptions;
    backgroundImage?: string;
    backgroundColor?: string;
    bridgeDirection?: string;
    constraints?: ej.datavisualization.Diagram.Constraints;
    tool?: ej.datavisualization.Diagram.Tool;
    drawType?: Object;
    selectedItems?: SelectedItemsOption;
    commandManager?: CommandManagerOption;
    historyManager?: HistoryManagerOption;
    nodeCollectionChange? (e: NodeCollectionChangeEvent): void;
    autoScrollChange? (e: AutoScrollChangeEvent): void;
    itemClick? (e: ItemClickEvent): void;
    connectorCollectionChange? (e: ConnectorCollectionChangeEvent): void;
    selectionChange? (e: SelectionChangeEvent): void;
    mouseLeave? (e: MouseEvent): void;
    mouseEnter? (e: MouseEvent): void;
    mouseHover? (e: MouseEvent): void;
    click? (e: ClickEvent): void;
    doubleClick? (e: DoubleClickEvent): void;
    dragEnter? (e: DragEnterEvent): void;
    dragOver? (e: DragOverEvent): void;
    dragLeave? (e: DragLeaveEvent): void;
    drop? (e: DropEvent): void;
    drag? (e: DragEvent): void;
    textChange? (e: TextChangeEvent): void;
    nodeSizeChange? (e: SizeChangeEvent): void;
    connectionChange? (e: ConnectionChangeEvent): void;
    rotationChange? (e: RotationChangeEvent): void;
    contextMenuClick? (e: ContextMenuClickEvent): void;
    contextMenuBeforeOpen? (e: ContextMenuBeforeOpenEvent): void;
    connectorSourceChange? (e: ConnectorEndPointChange): void;
    connectorTargetChange? (e: ConnectorEndPointChange): void;
    scrollChange? (e: ScrollChangeEvent): void;
    segmentChange? (e: SegmentChangeEvent): void;
    propertyChange? (e: PropertyChangeEvent): void;
    groupChange? (e: GroupChangeEvent): void;
    create? (e: CreateEvent): void;
    destroy? (e: DestoryEvent): void;
}

interface DefaultSettingsOption {
    node?: Object;
    connector?: Object;
    group?: Object;
}

interface DataSourceSettingsOption {
    dataSource?: Object;
    query?: Object;
    tableName?: string;
    id?: string;
    parent?: string;
    nodes?: Array<Object>;
    connectors?: Array<Object>;
    root?: string;
}

interface SnapSettingsOption {
    horizontalGridLines?: GridLinesOptions;
    verticalGridLines?: GridLinesOptions;
    snapConstraints?: ej.datavisualization.Diagram.SnapConstraints;
    enableSnapToObject?: boolean;
    snapAngle?: number;
    snapObjectDistance?: number;
}

interface ScrollSettingsOption {
    horizontalOffset?: number;
    verticalOffset?: number;
    zoomFactor?: number;
    padding?: PaddingOption;
}

interface PageSettingsOption {
    pageWidth?: number;
    pageHeight?: number;
    multiplePage?: boolean;
    pageBorderWidth?: number;
    pageBackgroundColor?: string;
    pageBorderColor?: string;
    pageMargin?: number;
    showPageBreak?: boolean;
    pageOrientation?: ej.datavisualization.Diagram.PageOrientation;
    scrollLimit?: ej.datavisualization.Diagram.ScrollLimit;
    scrollableArea?: ScrollableAreaOption;
    autoScrollBorder?: AutoScrollBorderOption;
    boundaryConstraints?: ej.datavisualization.Diagram.BoundaryConstraints;
}

interface ContextMenuOption {
    items?: Array<Object>;
    showCustomMenuItemsOnly?: boolean;
}

interface TooltipOption {
    templateId?: string;
    relativeMode?: ej.datavisualization.Diagram.RelativeMode;
    alignment?: AlignmentOption;
    margin?: MarginOption;
}

interface LayoutOptions {
    type?: string;
    orientation?: string;
    horizontalSpacing?: number;
    verticalSpacing?: number;
    marginX?: number;
    marginY?: number;
    fixedNode?: string;
    getLayoutInfo?: Function;
}

interface SelectedItemsOption {
    offsetX?: number;
    offsetY?: number;
    width?: number;
    height?: number;
    rotateAngle?: number;
    children?: Array<Object>;
    constraints?: ej.datavisualization.Diagram.SelectorConstraints;
    userHandles?: Array<Object>;
    tooltip?: TooltipOption;
}

interface CommandManagerOption {
    commands?: Object;
}

interface HistoryManagerOption {
    push?: Object;
    pop?: Object;
    canPop?: boolean;
    undo?: Function;
    redo?: Function;
    startGroupAction?: Function;
    closeGroupAction?: Function;
}

interface GridLinesOptions {
    linesInterval?: Array<number>;
    snapInterval?: Array<number>;
    lineDashArray?: string;
    lineColor?: string;
}

interface PaddingOption {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}

interface ScrollableAreaOption {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}

interface AutoScrollBorderOption {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}

interface AlignmentOption {
    horizontal?: ej.datavisualization.Diagram.HorizontalAlignment;
    vertical?: ej.datavisualization.Diagram.VerticalAlignment;
}

interface MarginOption {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}

interface DiagramBaseEvent {
    model: DiagramOptions;
    type: string;
}

interface NodeCollectionChangeEvent extends DiagramBaseEvent {
    changetype?: string;
    element?: Object;
    cancel?: boolean;
}

interface AutoScrollChangeEvent extends DiagramBaseEvent {
    delay?: number;
}

interface ItemClickEvent extends DiagramBaseEvent {
    actualObject?: Object;
    selectedObject?: Object;
}

interface ConnectorCollectionChangeEvent extends DiagramBaseEvent {
    changeType?: string;
    element?: Object;
    cancel?: boolean;
}

interface SelectionChangeEvent extends DiagramBaseEvent {
    oldItems?: Array<Object>;
    newItems?: Array<Object>;
    selectedItems?: Array<Object>;
    cancel?: boolean;
}

interface MouseEvent extends DiagramBaseEvent {
    element?: Object;
    source?: Object;
    target?: Object;
}

interface ClickEvent extends DiagramBaseEvent {
    element?: Object;
    count?: number;
    event?: Object;
}

interface DoubleClickEvent extends DiagramBaseEvent {
    element?: Object;
    actualObject?: Object;
}

interface DragEnterEvent extends DiagramBaseEvent {
    element?: Object;
    cancel?: boolean;
}

interface DragOverEvent extends DiagramBaseEvent {
    element?: Object;
    allowDrop?: boolean;
    target?: Object;
}

interface DragLeaveEvent extends DiagramBaseEvent {
    cancel?: boolean;
    element?: Object;
}

interface DropEvent extends DiagramBaseEvent {
    element?: Object;
    cancel?: boolean;
    source?: Object;
    target?: Object;
}

interface DragEvent extends DiagramBaseEvent {
    element?: Object;
    oldValue?: Object;
    newValue?: Object;
    dragState?: ej.datavisualization.Diagram.DragState;
    cancel?: boolean;
}

interface TextChangeEvent extends DiagramBaseEvent {
    cancel?: boolean;
    element?: Object;
    value?: string;
}

interface SizeChangeEvent extends DiagramBaseEvent {
    element?: Object;
    cancel?: boolean;
    newValue?: Object;
    oldValue?: Object;
    resizeState?: ej.datavisualization.Diagram.ResizeState;
}

interface ConnectionChangeEvent extends DiagramBaseEvent {
    element?: Object;
    connection?: Object;
    port?: Object;
    cancel?: boolean;
}

interface RotationChangeEvent extends DiagramBaseEvent {
    element?: Object;
    oldValue?: Object;
    newValue?: Object;
    cancel?: boolean;
}

interface ContextMenuClickEvent extends DiagramBaseEvent {
    id?: string;
    text?: string;
    parentId?: string;
    parentText?: string;
    target?: Object;
    canExecute?: boolean;
}

interface ContextMenuBeforeOpenEvent extends DiagramBaseEvent {
    diagram?: Object;
    contextmenu?: Object;
}

interface ConnectorEndPointChange extends DiagramBaseEvent {
    element?: Object;
    point?: Object;
    port?: Object;
    dragState?: ej.datavisualization.Diagram.DragState;
    cancel?: boolean;
}

interface ScrollChangeEvent extends DiagramBaseEvent {
    newValues?: Object;
    oldValues?: Object;
}

interface SegmentChangeEvent extends DiagramBaseEvent {
    element?: Object;
    dragState?: ej.datavisualization.Diagram.DragState;
    point?: Object;
}

interface PropertyChangeEvent extends DiagramBaseEvent {
    element?: Object;
    newValue?: Object;
    oldValue?: Object;
    propertyName?: string;
}

interface GroupChangeEvent extends DiagramBaseEvent {
    element?: Object;
    oldParent?: Object;
    newParent?: Object;
    cause?: string;
}

interface CreateEvent extends DiagramBaseEvent {
    cancel?: boolean;
}

interface DestoryEvent extends DiagramBaseEvent {
    cancel?: boolean;
}

interface SizeChangeOffsetOption {
    height?: number;
    width?: number;
}

interface DragOffsetOption {
    x?: number;
    y?: number;
}

interface Node {
    name?: string;
    width?: number;
    height?: number;
    offsetX?: number;
    offsetY?: number;
    visible?: boolean;
    zOrder?: number;
    excludeFromLayout?: boolean;
    constraints?: ej.datavisualization.Diagram.NodeConstraints;
    labels?: Array<Label>;
    ports?: Array<Port>;
    rotateAngle?: number;
    pivot?: DiagramPoint;
    addInfo?: Object;
    marginLeft?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    horizontalAlign?: ej.datavisualization.Diagram.HorizontalAlignment;
    verticalAlign?: ej.datavisualization.Diagram.VerticalAlignment;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    connectorPadding?: number;
    cornerRadius?: number;
    paletteItem?: PaletteItem;
    fillColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderDashArray?: string;
    opacity?: number;
    gradient?: Object;
    type?: ej.datavisualization.Diagram.Shapes;
    isExpanded?: boolean;
    shadow?: Shadow;
    cssClass?: string;
}

interface BasicShape extends Node {
    shape?: ej.datavisualization.Diagram.BasicShapes;
    cornerRadius?: number;
    pathData?: string;
    points?: Array<DiagramPoint>;
}

interface FlowShape extends Node {
    shape?: ej.datavisualization.Diagram.FlowShapes;
}

interface BPMNNode extends Node {
    shape?: ej.datavisualization.Diagram.BPMNShapes;
    event?: ej.datavisualization.Diagram.BPMNEvents;
    trigger?: ej.datavisualization.Diagram.BPMNTriggers;
    activity?: ej.datavisualization.Diagram.BPMNActivity;
    collection?: boolean;
    task?: BPMNTask;
    subProcess?: BPMNSubProcess;
    gateway?: ej.datavisualization.Diagram.BPMNGateways;
    direction?: ej.datavisualization.Diagram.BPMNDirections;
}

interface ImageNode extends Node {
    source: string;
}

interface HtmlNode extends Node {
    templateId: string;
}

interface NativeNode extends Node {
    templateId: string;
}

interface TextNode extends Node {
    textBlock: TextBlock;
}

interface BPMNTask {
    loop?: ej.datavisualization.Diagram.BPMNLoops;
    type?: ej.datavisualization.Diagram.BPMNTasks;
    call?: boolean;
    compensation?: boolean;
}

interface BPMNSubProcess {
    loop?: ej.datavisualization.Diagram.BPMNLoops;
    boundary?: ej.datavisualization.Diagram.BPMNBoundary;
    adhoc?: boolean;
    compensation?: boolean;
}

interface Connector {
    name?: string;
    visible?: boolean;
    lineDashArray?: string;
    targetDecorator?: Decorator;
    sourceDecorator?: Decorator;
    segments?: Array<Segment>;
    sourcePoint?: DiagramPoint;
    targetPoint?: DiagramPoint;
    lineColor?: string;
    lineWidth?: number;
    constraints?: ej.datavisualization.Diagram.ConnectorConstraints;
    opacity?: number;
    labels?: Array<Label>;
    zOrder?: number;
    lineHitPadding?: number;
    addInfo?: Object;
    targetNode?: string;
    targetPort?: string;
    sourceNode?: string;
    sourcePort?: string;
    marginLeft?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    horizontalAlign?: ej.datavisualization.Diagram.HorizontalAlignment;
    verticalAlign?: ej.datavisualization.Diagram.VerticalAlignment;
    cornerRadius?: number;
    bridgeSpace?: number;
    sourcePadding?: number;
    targetPadding?: number;
    type?: string;
    cssClass?: string;
}

interface Group {
    name?: string;
    width?: number;
    height?: number;
    offsetX?: number;
    offsetY?: number;
    visible?: boolean;
    zOrder?: number;
    excludeFromLayout?: boolean;
    constraints?: ej.datavisualization.Diagram.NodeConstraints;
    labels?: Array<Label>;
    ports?: Array<Port>;
    rotateAngle?: number;
    pivot?: DiagramPoint;
    addInfo?: Object;
    marginLeft?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    horizontalAlign?: ej.datavisualization.Diagram.HorizontalAlignment;
    verticalAlign?: ej.datavisualization.Diagram.VerticalAlignment;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    connectorPadding?: number;
    cornerRadius?: number;
    paletteItem?: PaletteItem;
    children?: Array<Object>;
    canUngroup?: boolean;
    allowDrop?: boolean;
    container?: Container;
    paddingLeft?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    type?: string;
}

interface Container {
    type?: ej.datavisualization.Diagram.ContainerType;
    orientation?: string;
}

interface Segment {
    type?: ej.datavisualization.Diagram.Segments;
    point?: DiagramPoint;
    point1?: DiagramPoint;
    point2?: DiagramPoint;
    vector1?: DiagramPoint;
    vector2?: DiagramPoint;
    length?: number;
    direction?: string;
}

interface Decorator {
    shape?: ej.datavisualization.Diagram.DecoratorShapes;
    width?: number;
    height?: number;
    borderColor?: string;
    borderWidth?: number;
    fillColor?: string;
    pathData?: string;
    cssClass?: string;
}

interface PaletteItem {
    height?: number;
    enableScale?: boolean;
    previewHeight?: number;
    previewWidth?: number;
    margin?: MarginOption;
}

interface Shadow {
    distance?: number;
    angle?: number;
    opacity?: number;
}

interface Stop {
    color?: string;
    offset?: number;
    opacity?: number;
}

interface LinearGradient {
    type?: string;
    x1?: number;
    x2?: number;
    y1?: number;
    y2?: number;
    stops: Array<Stop>;
}

interface RadialGradient {
    type?: string;
    cx?: number;
    cy?: number;
    fx?: number;
    fy?: number;
    r?: number;
    stops: Array<Stop>;
}

interface ZoomOption {
    zoomFactor?: number;
    focusPoint?: DiagramPoint;
    zoomCommand?: ej.datavisualization.Diagram.ZoomCommand;
}

interface UserHandle {
    name?: string;
    pathData?: string;
    borderColor?: string;
    backgroundColor?: string;
    position?: ej.datavisualization.Diagram.UserHandlePositions;
    pathColor?: string;
    tool?: string;
    size?: number;
    visible?: boolean;
    enableMultiSelection?: boolean;
}

interface Palette {
    name?: string;
    expanded?: boolean;
    items?: Array<Object>;
}

interface Rectangle {
    x?: number; y?: number; width?: number; height?: number
}

interface DiagramPoint {
    x: number;
    y: number;
}

interface Label extends TextBlock {
    name?: string;
    visible?: boolean;
    borderColor?: string;
    borderWidth?: number;
    fillColor?: string;
    cssClass?: string;
}

interface Swimlane {
    header?: Label;
    fillColor?: string;
    orientation?: string;
    type?: string;
    isSwimlane?: boolean;
    offsetX?: number;
    offsetY?: number;
    minHeight?: number;
    maxHeight?: number;
    minWidth?: number;
    maxWidth?: number;
    height?: number;
    width?: number;
    lanes?: Array<Lane>;
    phases?: Array<Phase>;
    phaseSize?: number;
    constraints?: ej.datavisualization.Diagram.NodeConstraints;
    addInfo?: Object;
    cssClass?: string;
}

interface Lane {
    header?: Label;
    name?: string;
    children?: Array<Object>;
    isLane?: boolean;
    orientation?: string;
    fillColor?: string;
    labels?: Array<Label>;
    addInfo?: Object;
    constraints?: ej.datavisualization.Diagram.NodeConstraints;
    cssClass?: string;
}

interface Phase {
    name?: string;
    type?: string;
    offset?: number;
    lineWidth?: number;
    lineDashArray?: string;
    lineColor?: string;
    parent?: string;
    orientation?: string;
    label?: Label;
}

interface TextBlock {
    readOnly?: boolean;
    bold?: boolean;
    italic?: boolean;
    text?: string;
    textDecoration?: ej.datavisualization.Diagram.TextDecorations;
    fontSize?: number;
    fontFamily?: string;
    fontColor?: string;
    offset?: DiagramPoint;
    textAlign?: ej.datavisualization.Diagram.TextAlign;
    horizontalAlignment?: ej.datavisualization.Diagram.HorizontalAlignment;
    verticalAlignment?: ej.datavisualization.Diagram.VerticalAlignment;
    wrapping?: ej.datavisualization.Diagram.TextWrapping;
    margin?: MarginOption;
    mode?: ej.datavisualization.Diagram.LabelEditMode;
    width?: number;
    rotateAngle?: number;
}

interface Port {
    name?: string;
    visibility?: ej.datavisualization.Diagram.PortVisibility;
    constraints?: ej.datavisualization.Diagram.PortConstraints;
    size?: number;
    offset?: DiagramPoint;
    borderColor?: string;
    borderWidth?: number;
    fillColor?: string;
    shape?: ej.datavisualization.Diagram.PortShapes;
    pathData?: string;
    connectorPadding?: number;
    cssClass?: number;
}

export module Diagram {
    function Point(options?: DiagramPoint): DiagramPoint;
    function Size(width?: number, height?: number): Object;
    function Rectangle(options?: Rectangle): Rectangle;
    function Margin(options?: MarginOption): MarginOption;
    function Tooltip(options?: TooltipOption): TooltipOption;
    function Node(options?: Node): Node;
    function Connector(options?: Connector): Connector;
    function Port(options?: Port): Port;
    function Label(options?: Label): Label;
    function TextBlock(options?: TextBlock): TextBlock;
    function Decorator(options?: Decorator): Decorator;
    function Shadow(options?: Shadow): Shadow;
    function PaletteItem(options?: PaletteItem): PaletteItem;
    function Group(options?: Group): Object;
    function BasicShape(options?: BasicShape): BasicShape;
    function FlowShape(options?: FlowShape): FlowShape;
    function BPMNShape(options?: BPMNNode): BPMNNode;
    function BPMNTask(options?: BPMNTask): BPMNTask;
    function BPMNSubProcess(options?: BPMNSubProcess): BPMNSubProcess;
    function Segment(options?: Segment): Segment;
    function Stop(options?: Stop): Stop;
    function LinearGradient(options?: LinearGradient): LinearGradient;
    function RadialGradient(options?: RadialGradient): RadialGradient;
    function Zoom(options?: ZoomOption): ZoomOption;
    function UserHandle(options?: UserHandle): UserHandle;
    function Palette(options?: Palette): Palette;
    function Container(options?: Container): Container;
    function SwimLane(options?: Swimlane): Swimlane;
    function Lane(options?: Lane): Lane;
    function Phase(options?: Phase): Phase;




    var Util: {
        randomId(): any;
    }

    enum DecoratorShapes {
        None,
        Arrow,
        OpenArrow,
        Circle,
        Diamond,
        Path,
    }
    enum ActionType {
        Unknown,
        Nudge
    }
    enum ContainerType {
        Canvas,
        Stack
    }
    enum PortShapes {
        X,
        Circle,
        Square,
        Path
    }
    enum PortVisibility {
        Visible,
        Hidden,
        Hover,
        Connect,
        Default
    }
    enum TextAlign {
        Left,
        Center,
        Right,
        Justify
    }
    enum HorizontalAlignment {
        Left,
        Center,
        Right
    }
    enum LabelEditMode {
        Edit,
        View
    }
    enum RelativeMode {
        Object,
        Mouse
    }
    enum TextWrapping {
        NoWrap,
        Wrap,
        WrapWithOverflow,
    }
    enum VerticalAlignment {
        Top,
        Center,
        Bottom
    }
    enum TextDecorations {
        Underline,
        Overline,
        LineThrough,
        None
    }

    enum Segments {
        Straight,
        Orthogonal,
        Bezier
    }

    enum NodeConstraints {
        None,
        Select,
        Delete,
        Drag,
        Rotate,
        Connect,
        ResizeNorthEast,
        ResizeEast,
        ResizeSouthEast,
        ResizeSouth,
        ResizeSouthWest,
        ResizeWest,
        ResizeNorthWest,
        ResizeNorth,
        Resize,
        Shadow,
        DragLabel,
        AllowPan,
        AspectRatio,
        AllowDrop,
        InheritTooltip,
        MultiSelect,
        PointerVisibility,
        Default
    }

    enum ConnectorConstraints {
        None,
        Select,
        Delete,
        Drag,
        DragSourceEnd,
        DragTargetEnd,
        DragSegmentThumb,
        Bridging,
        DragLabel,
        InheritBridging,
        AllowDrop,
        InheritTooltip,
        Default
    }

    enum PortConstraints {
        Connect,
        None
    }

    enum SelectorConstraints {
        None,
        Rotator,
        Resizer,
        UserHandles,
        Tooltip,
        All
    }

    enum UserHandlePositions {
        TopLeft,
        TopCenter,
        TopRight,
        MiddleLeft,
        MiddleRight,
        BottomLeft,
        BottomCenter,
        BottomRight
    }

    enum SnapConstraints {
        None,
        SnapToHorizontalLines,
        SnapToVerticalLines,
        SnapToLines,
        ShowHorizontalLines,
        ShowVerticalLines,
        ShowLines,
        All,
    }

    enum PageOrientation {
        Landscape,
        Portrait
    }

    enum ScrollLimit {
        Infinite,
        Diagram,
        Limited
    }

    enum BoundaryConstraints {
        Infinite,
        Diagram,
        Page
    }

    enum LayoutOrientations {
        TopToBottom,
        BottomToTop,
        LeftToRight,
        RightToLeft
    }

    enum Constraints {
        None,
        UserInteraction,
        APIUpdate,
        PageEditable,
        Bridging,
        Zoomable,
        PannableX,
        PannableY,
        Pannable,
        Undoable,
        Resizable,
        ZoomTextEditor,
        Default
    }

    enum Tool {
        None,
        SingleSelect,
        MultipleSelect,
        ZoomPan,
        DrawOnce,
        ContinuesDraw
    }

    enum DragState {
        Starting,
        Dragging,
        Completed
    }

    enum ResizeState {
        Starting,
        Resizing,
        Completed
    }

    enum BridgeDirection {
        Top,
        Bottom,
        Left,
        Right
    }

    enum Region {
        Content,
        PageSettings
    }

    enum FitMode {
        Page,
        Width,
        Height
    }

    enum FileFormats {
        JPG,
        PNG,
        BMP,
        SVG
    }

    enum ExportModes {
        Download,
        Data
    }

    enum ZoomCommand {
        ZoomIn,
        ZoomOut
    }

    enum Shapes {
        Image,
        Text,
        Html,
        Native,
        Basic,
        Flow,
        Arrow,
        BPMN,
    }

    enum BasicShapes {
        Rectangle,
        Ellipse,
        Path,
        Polygon,
        Triangle,
        Plus,
        Star,
        Pentagon,
        Heptagon,
        Octagon,
        Trapezoid,
        Decagon,
        RightTriangle,
        Cylinder
    }

    enum FlowShapes {
        Process,
        Decision,
        Document,
        PreDefinedProcess,
        Terminator,
        PaperTap,
        DirectData,
        SequentialData,
        Sort,
        MultiDocument,
        Collate,
        SummingJunction,
        Or,
        InternalStorage,
        Extract,
        ManualOperation,
        Merge,
        OffPageReference,
        SequentialAccessStorage,
        Annotation1,
        Annotation2,
        Data
    }

    enum BPMNShapes {
        Event,
        Gateway,
        SequentialFlow,
        AssociationFlow,
        MessageFlow,
        Message,
        DataObject,
        DataSource,
        Activity
    }
    enum BPMNEvents {
        Start,
        Intermediate,
        End,
        NonInterruptingStart,
        NonInterruptingIntermediate,
    }
    enum BPMNActivity {
        None,
        Task,
        SubProcess,
    }
    enum BPMNGateways {
        None,
        Exclusive,
        Inclusive,
        Parallel,
        Complex,
        EventBased,
    }
    enum BPMNTriggers {
        None,
        Message,
        Timer,
        Escalation,
        Link,
        Error,
        Compensation,
        Signal,
        Multiple,
        Parallel,
    }
    enum BPMNLoops {
        None,
        Standard,
        ParallelMultiInstance,
        SequenceMultiInstance
    }
    enum BPMNTasks {
        None,
        Service,
        Receive,
        Send,
        InstantiatingReceive,
        Manual,
        BusinessRule,
        User,
        Script,
        Parallel,
    }
    enum BPMNBoundary {
        Default,
        Call,
        Event,
    }
    enum BPMNDirections {
        None,
        UniDirectional,
        BiDirectional,
    }
}

}

interface JQueryXHR {
}
interface JQueryPromise<T> {
}
interface JQueryDeferred<T> extends JQueryPromise<T> {
}
interface JQueryParam {
}
interface JQuery {
    data(key: any): any;
}
interface JQuery { 

    /*Accordion*/
    ejmAccordion(): JQuery;
    ejmAccordion(options?: ej.mobile.AccordionOptions): JQuery;
    data(key: "ejmAccordion"): ej.mobile.Accordion;
    /*Accordion*/

    /*AutoComplete*/
    ejmAutocomplete(): JQuery;
    ejmAutocomplete(options?: ej.mobile.AutocompleteOptions): JQuery;
    data(key: "ejmAutocomplete"): ej.mobile.Autocomplete;
    /*AutoComplete*/

    /*Button*/
    ejmButton(): JQuery;
    ejmButton(options?: ej.mobile.ButtonOptions): JQuery;
    data(key: "ejmButton"): ej.mobile.Button;

    ejmActionlink(): JQuery;
    ejmActionlink(options?: ej.mobile.ButtonOptions): JQuery;
    data(key: "ejmActionlink"): ej.mobile.Button;
    /*Button*/

    /* DatePicker */
    ejmDatePicker(): JQuery;
    ejmDatePicker(options?: ej.mobile.DatePickerOptions): JQuery;
    data(key: "ejmDatePicker"): ej.mobile.DatePicker;
    /* DatePicker */

    /*Editor*/
    ejmNumeric(): JQuery;
    ejmNumeric(options?: ej.mobile.EditorOptions): JQuery;
    data(key: "ejmNumeric"): ej.mobile.Numeric;
    /*Editor*/

    /* Grid Start */
    ejmGrid(): JQuery;
    ejmGrid(options?: ej.mobile.GridOptions): JQuery;
    data(key: "ejmGrid"): ej.mobile.Grid;
    /* Grid End */

    /*Header*/
    ejmHeader(): JQuery;
    ejmHeader(options?: ej.mobile.HeaderOptions): JQuery;
    data(key: "ejmHeader"): ej.mobile.Header;
    /*Header*/

    /*ListView*/
    ejmListView(): JQuery;
    ejmListView(options?: ej.mobile.ListViewOptions): JQuery;
    data(key: "ejmListView"): ej.mobile.ListView;
    /*ListView*/

    /*Menu*/
    ejmMenu(): JQuery;
    ejmMenu(options?: ej.mobile.MenuOptions): JQuery;
    data(key: "ejmMenu"): ej.mobile.Menu;
    /*Menu*/

    /* ProgressBar */
    ejmProgress(): JQuery;
    ejmProgress(options?: ej.mobile.ProgressOptions): JQuery;
    data(key: "ejmProgress"): ej.mobile.Progress;
    /* ProgressBar */

    /*Radio Button*/
    ejmRadioButton(): JQuery;
    ejmRadioButton(options?: ej.mobile.RadioButtonOptions): JQuery;
    data(key: "ejmRadioButton"): ej.mobile.RadioButton;
    /*Radio Button*/

    /*Rating*/
    ejmRating(): JQuery;
    ejmRating(options?: ej.mobile.RatingOptions): JQuery;
    data(key: "ejmRating"): ej.mobile.Rating;
    /*Rating*/


    /*Rotator*/
    ejmRotator(): JQuery;
    ejmRotator(options?: ej.mobile.RotatorOptions): JQuery;
    data(key: "ejmRotator"): ej.mobile.Rotator;
    /*Rotator*/

    /*Slider*/
    ejmSlider(): JQuery;
    ejmSlider(options?: ej.mobile.SliderOptions): JQuery;
    data(key: "ejmSlider"): ej.mobile.Slider;
    /*Slider*/

    /* Tab */
    ejmTab(): JQuery;
    ejmTab(options?: ej.mobile.TabOptions): JQuery;
    data(key: "ejmTab"): ej.mobile.Tab;
    /* Tab */

    /*Tile*/
    ejmTile(): JQuery;
    ejmTile(options?: ej.mobile.TileOptions): JQuery;
    data(key: "ejmTile"): ej.mobile.Tile;
    /*Tile*/

    /* TimePicker */
    ejmTimePicker(): JQuery;
    ejmTimePicker(options?: ej.mobile.TimePickerOptions): JQuery;
    data(key: "ejmTimePicker"): ej.mobile.TimePicker;
    /* TimePicker */

    /*ToggleButton*/
    ejmToggleButton(): JQuery;
    ejmToggleButton(options?: ej.mobile.ToggleButtonOptions): JQuery;
    data(key: "ejmToggleButton"): ej.mobile.ToggleButton;
    /*ToggleButton*/

    /*Toolbar*/
    ejmToolbar(): JQuery;
    ejmToolbar(options?: ej.mobile.ToolbarOptions): JQuery;
    data(key: "ejmToolbar"): ej.mobile.Toolbar;
    /*Toolbar*/

    /*GroupButton*/
    ejmGroupButton(): JQuery;
    ejmGroupButton(options?: ej.mobile.GroupButtonOptions): JQuery;
    data(key: "ejmGroupButton"): ej.mobile.GroupButton;
    /*GroupButton*/

    /* SplitPane */
    ejmSplitPane(): JQuery;
    ejmSplitPane(options?: ej.mobile.SplitPaneOptions): JQuery;
    data(key: "ejmSplitPane"): ej.mobile.SplitPane;
    /* SplitPane */

    /* Dialog */
    ejmDialog(): JQuery;
    ejmDialog(options?: ej.mobile.DialogOptions): JQuery;
    data(key: "ejmDialog"): ej.mobile.Dialog;
    /* Dialog */

    /* TextBox */
    ejmTextBox(): JQuery;
    ejmTextBox(options?: ej.mobile.TextBoxOptions): JQuery;
    data(key: "ejmTextBox"): ej.mobile.TextBox;
    /* TextBox */

    /* Password */
    ejmPassword(): JQuery;
    ejmPassword(options?: ej.mobile.TextBoxOptions): JQuery;
    data(key: "ejmPassword"): ej.mobile.TextBox;
    /* Password */

    /* MaskEdit */
    ejmMaskEdit(): JQuery;
    ejmMaskEdit(options?: ej.mobile.MaskEditOptions): JQuery;
    data(key: "ejmMaskEdit"): ej.mobile.MaskEdit;
    /* MaskEdit */

    /* TextArea */
    ejmTextArea(): JQuery;
    ejmTextArea(options?: ej.mobile.TextBoxOptions): JQuery;
    data(key: "ejmTextArea"): ej.mobile.TextBox;
    /* MaskEdit */

    /* Footer */
    ejmFooter(): JQuery;
    ejmFooter(options?: ej.mobile.FooterOptions): JQuery;
    data(key: "ejmFooter"): ej.mobile.Footer;
    /* Footer */

    /* CheckBox */
    ejmCheckBox(): JQuery;
    ejmCheckBox(options?: ej.mobile.CheckBoxOptions): JQuery;
    data(key: "ejmCheckBox"): ej.mobile.CheckBox;
    /* CheckBox */

    /* ScrollPanel */
    ejmScrollPanel(): JQuery;
    ejmScrollPanel(options: ej.mobile.ScrollPanelOptions): JQuery;
    data(key: "ejmScrollPanel"): ej.mobile.ScrollPanel;
    /* ScrollPanel */	

    /* NavigationDrawer */
    ejmNavigationDrawer(): JQuery;
    ejmNavigationDrawer(options: ej.mobile.NavigationDrawerOptions): JQuery;
    data(key: "ejmNavigationDrawer"): ej.mobile.NavigationDrawer;
    /* NavigationDrawer */	

    /* RadialMenu */
    ejmRadialMenu(): JQuery;
    ejmRadialMenu(options?: ej.mobile.RadialMenuOptions): JQuery;
    data(key: "ejmRadialMenu"): ej.mobile.RadialMenu;
    /* RadialMenu */

    ejLinearGauge(): JQuery;
    ejLinearGauge(options?: ej.datavisualization.LinearGaugeOptions): JQuery;
    data(key: "ejLinearGauge"): ej.datavisualization.LinearGauge;

    ejDigitalGauge(): JQuery;
    ejDigitalGauge(options?: ej.datavisualization.DigitalGaugeOptions): JQuery;
    data(key: "ejDigitalGauge"): ej.datavisualization.DigitalGauge;

    ejCircularGauge(): JQuery;
    ejCircularGauge(options?: ej.datavisualization.CircularGaugeOptions): JQuery;
    data(key: "ejCircularGauge"): ej.datavisualization.CircularGauge;

    ejChart(): JQuery;
    ejChart(options?: ej.datavisualization.ChartOptions): JQuery;
    data(key: "ejChart"): ej.datavisualization.Chart;

    ejRangeNavigator(): JQuery;
    ejRangeNavigator(options?: ej.datavisualization.RangeNavigatorOptions): JQuery;
    data(key: "ejRangeNavigator"): ej.datavisualization.RangeNavigator;

    ejBulletGraph(): JQuery;
    ejBulletGraph(options?: ej.datavisualization.BulletGraphOptions): JQuery;
    data(key: "ejBulletGraph"): ej.datavisualization.BulletGraph;

    ejMap(): JQuery;
    ejMap(options?: ej.datavisualization.MapOptions): JQuery;
    data(key: "ejMap"): ej.datavisualization.Map;

    ejTreeMap(): JQuery;
    ejTreeMap(options?: ej.datavisualization.TreeMapOptions): JQuery;
    data(key: "ejTreeMap"): ej.datavisualization.TreeMap;

    ejBarcode(): JQuery;
    ejBarcode(options?: ej.datavisualization.BarcodeOptions): JQuery;
    data(key: "ejBarcode"): ej.datavisualization.Barcode;

}