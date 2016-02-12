/*!
*  filename: ej.web.all.d.ts
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
class Scroller extends ej.Widget {
        static fn: Scroller;             
        constructor(element: JQuery, options?: ScrollerOptions);     
        constructor(element: Element, options?: ScrollerOptions);     
        disable(): void;
        enable(): void;
		destroy(): void;
		isHScroll(): boolean;
		idVScroll(): boolean;
		refresh(): void;
		scrollX(pixel: string,animation: boolean,aimationSpeed: number,source: string): void;
		scrollY(pixel: string,animation: boolean,aimationSpeed: number,source: string): void;
    }

    interface ScrollerOptions {
        autoHide?: boolean;
        buttonSize?: number;
		enabled?:boolean;
        enablePersistence?: boolean;
        enableRTL?: boolean;
        enableTouchScroll?: boolean;
        height?: (number|string); 
        scrollLeft?: (number|string); 
        scrollOneStepBy?: number;
        scrollTop?: (number|string); 
        scrollerSize?: (number|string); 
        targetPane?: string;
        width?: (number|string);       
        create? (e: ScrollerEvent): void;       
        destroy? (e: ScrollerEvent): void;       
    }

    interface ScrollerEvent extends ej.BaseEvent {
        model: ScrollerOptions;       
    }
  
 class Accordion extends ej.Widget {
        static fn: Accordion;
        constructor(element: JQuery, options?: AccordionOptions);
        constructor(element: Element, options?: AccordionOptions);
		model:AccordionOptions;
		defaults:AccordionOptions;
        collapseAll(): void;
        expandAll(val:any): void;
        disable(): void;
        enable(): void; 
        show(): void;
        hide(): void; 
        getItemsCount(): number;  
        enableItems(itemIndexes: any): void;
        disableItems(itemIndexes: any): void;
        removeItem(index: number): void;
        addItem(header_name: string, content: string, index?: number, isAjaxReq?: boolean): void;
		destroy(): void;
        collapsePanel(val: number): void;
        expandPanel(val: number): void;
        refresh(): void;
    }

    interface AccordionOptions {
        collapsible?: boolean;
        ajaxSettings?: AjaxSettings;
        //ajaxSettings?:JQueryAjaxSettings;
        events?: string;
        customIcon?: AccordionIconSettings;
        heightAdjustMode?: ej.Accordion.HeightAdjustMode;
        selectedItemIndex?: (number|string);
        cssClass?: string;
		header?: string;
        enableRTL?: boolean;
        showRoundedCorner?: boolean;
        allowKeyboardNavigation?: boolean;
        enableMultipleOpen?: boolean;
        expandSpeed?: number;
        collapseSpeed?: number;
        selectedItems?: (Array<number>|Array<string>);
        disabledItems?: (Array<number>|Array<string>);
        enabledItems?: (Array<number>|Array<string>);
        enablePersistence?: boolean;
        enabled?: boolean;
        activate?(e: AccordionActivateEvent): void;
        beforeActivate?(e: AccordionBeforeActivateEvent): void;
		inActivate?(e: AccordionInActivateEvent): void;
		beforeInactivate? (e: AccordionBeforeInActivateEvent): void;
        ajaxLoad?(e: AccordionAjaxLoadEvent): void;
        ajaxBeforeLoad?(e: AccordionAjaxLoadEvent): void;       
        ajaxSuccess?(e: AccordionAjaxSuccessEvent): void;
        ajaxError?(e: AccordionAjaxFailureEvent): void;
        create? (e: AccordionEvent): void;
        destroy? (e: AccordionEvent): void;
    }
   
    

    interface AccordionIconSettings {
        header?: string;
        selectedHeader?: string;
    }
    interface AccordionEvent {
        model: AccordionOptions;
    }
    interface AccordionAjaxLoadEvent extends ej.BaseEvent,AccordionEvent,ej.BaseEvent {        
        url: string;
    }
    interface AccordionAjaxSuccessEvent extends ej.BaseEvent, AccordionEvent,AccordionAjaxLoadEvent {        
        data: any;
        content: JQuery;
    }
    interface AccordionAjaxFailureEvent extends ej.BaseEvent, AccordionEvent, AccordionAjaxLoadEvent {
        data: any;       
    }
   
    interface AccordionBeforeActivateEvent extends ej.BaseEvent, AccordionEvent {        
        activeIndex: number;
    }
    interface AccordionActivateEvent extends ej.BaseEvent, AccordionEvent, AccordionBeforeActivateEvent {        
        activeHeader: JQuery;        
    }
	interface AccordionBeforeInActivateEvent extends ej.BaseEvent, AccordionEvent {        
        activeIndex: number;
    }
    interface AccordionInActivateEvent extends ej.BaseEvent, AccordionEvent, AccordionBeforeInActivateEvent {        
        activeHeader: JQuery;        
    }

export module Accordion
{
enum HeightAdjustMode
{
  Content,		
  Auto,		
  Fill
}
}   
class Autocomplete extends ej.Widget {
    static fn: Autocomplete;
    constructor(element: JQuery, options?: AutocompleteOptions);
    constructor(element: Element, options?: AutocompleteOptions);
    model: AutocompleteOptions;
    defaults: AutocompleteOptions;
    disable(): void;
    enable(): void;
    clearText(): void;
    getValue(): string;
    getSelectedItems(): Object;
    search(): void;
    hide(): void;
    open(): void;
    setValue(text: string): void;
    setVisible(value: any): void;
    selectValueByKey(key: string): void;
    selectValueByText(text: string): void;
    destroy(): void;
}

interface AutocompleteOptions {
    htmlAttributes?: Object;
    animateType?: ej.Animation;
    dataSource?: Object;
    query?: Object;
    delaySuggestionTimeout?: (number|string);
    fields?: AutocompleteFieldSettings;
    template?: string;
    autoFocus?: boolean;
    allowGrouping?: boolean;
    enableDistinct?: boolean;
    allowSorting?: boolean;
    sortOrder?: ej.SortOrder;
    multiSelectMode?: ej.MultiSelectMode;
    delimiterChar?: string;
    allowAddNew?: boolean;
    addNewText?: string;
    showRoundedCorner?: boolean;
    readOnly?: boolean;
    cssClass?: string;
    locale?: string;
    watermarkText?: string;
    value?: any;
    filterType?: ej.filterType;
    caseSensitiveSearch?: boolean;
    showLoadingIcon?: boolean;
    itemsCount?: number;
    minCharacter?: number;
    showPopupButton?: boolean;
    highlightSearch?: boolean;
    enableAutoFill?: boolean;
    enableRTL?: boolean;
    enabled?: boolean;
    height?: (number|string);
    width?: (number|string);
    emptyResultText?: string;
    showEmptyResultText?: boolean;
    enablePersistence?: boolean;
    validationRules?: Object;
    validationMessage?: Object;
    popupHeight?: (number|string);
    popupWidth?: (number|string);
    selectValueByKey?: (number|string);
    visible?: boolean;
    focusIn? (e: AutocompleteFocusInEvent): void;
    focusOut? (e: AutocompleteFocusOutEvent): void;
    change? (e: AutocompleteChangeEvent): void;
    select? (e: AutocompleteSelectEvent): void;
    create? (e: AutocompleteEvent): void;
    destroy? (e: AutocompleteEvent): void;
    open? (e: AutoCompleteOpenEvent): void;
    close? (e: AutoCompleteCloseEvent): void;
    actionBegin? (e: AutocompleteEvent): void;
    actionComplete? (e: AutocompleteActionComplete): void;
    actionSuccess? (e: AutocompleteActionSuccess): void;
    actionFailure? (e: AutocompleteActionFailure): void;
}
interface AutocompleteFieldSettings {
    text?: string;
    key?: string;
    category?: string;
    htmlAttributes?: string;
}
interface AutocompleteEvent extends ej.BaseEvent {
    model: AutocompleteOptions;
}

interface AutocompleteActionSuccess extends ej.BaseEvent, AutocompleteEvent {
    actual?: Object;
    aggregates?: any;
    count?: number;
    query?: Object;
    request?: Object;
    result?: Object;
    virtualSelectRecords?: any;
    xhr?: Object;
    getKnockoutModel?: any;
    getTableModel?: any;
}
interface AutocompleteActionComplete extends ej.BaseEvent, AutocompleteEvent {
    actual?: Object;
    count?: number;
    isTrigger?: number;
    namespace?: string;
    namespace_re?: any;
    originalEventType?: string;
    query?: Object;
    request?: Object;
    result?: Array<Object>;
    target?: any;
    timeStamp?: number;
    virtualSelectRecords?: any;
    xhr?: Object;
    getKnockoutModel?: any;
    getTableModel?: any;
    isDefaultPrevented?: any;
    isImmediatePropagationStopped?: any;
    isPropagationStopped?: any;
    preventDefault?: any;
    stopImmediatePropagation?: any;
    stopPropagation?: any;
}
interface AutocompleteActionFailure extends ej.BaseEvent, AutocompleteEvent {
    error?: Object;
    query?: Object;
}

interface AutocompleteFocusInEvent extends ej.BaseEvent, AutocompleteEvent {
    value: string;
    isInteraction: boolean;
    event: any;
}

interface AutocompleteFocusOutEvent extends ej.BaseEvent, AutocompleteEvent {
    value: string;
    isInteraction: boolean;
    event: any;
}
interface AutocompleteChangeEvent extends ej.BaseEvent, AutocompleteEvent {
    value: string;
    isInteraction: boolean;
    event?: any;
}
interface AutocompleteSelectEvent extends ej.BaseEvent, AutocompleteEvent {
    value: string;
    text: string;
    key: string;
    isInteraction: boolean;
    event: any;
}
interface AutoCompleteOpenEvent extends ej.BaseEvent, AutocompleteEvent {
    isInteraction: boolean;
    event?: any;
}
interface AutoCompleteCloseEvent extends ej.BaseEvent, AutocompleteEvent {
    isInteraction: boolean;
    event?: any;
}



class Button extends ej.Widget {
        static fn: Button;             
        constructor(element: JQuery, options?: ButtonOptions);     
        constructor(element: Element, options?: ButtonOptions);     
		model:ButtonOptions;
		defaults:ButtonOptions;
        disable(): void;
        enable(): void;
		destroy(): void;       
    }

    interface ButtonOptions {
        size?: ej.ButtonSize;
        type?: ej.ButtonType;
        height?: (number|string); 
        width?: (number|string); 
        enabled?: boolean;
        text?: string;
	htmlAttributes?: Object;
        contentType?: ej.ContentType;
        imagePosition?: ej.ImagePosition;
        showRoundedCorner?: boolean;
        cssClass?: string;
        prefixIcon?: string;
        suffixIcon?: string;
        enableRTL?: boolean;
        repeatButton?: boolean;
        timeInterval?: string;
        create? (e: ButtonEvent): void;
        click? (e: ButtonClickEvent): void;
        destroy? (e: ButtonEvent): void;       
    }

    interface ButtonEvent extends ej.BaseEvent {
        model: ButtonOptions;       
    }

    interface ButtonClickEvent extends ej.BaseEvent, ButtonEvent {        
        status: boolean;
    }


class Captcha extends ej.Widget {
        static fn: Captcha;  
		element: JQuery;		
        constructor(element: JQuery, options?: CaptchaOptions);     
        constructor(element: Element, options?: CaptchaOptions); 
		model:CaptchaOptions;
		defaults:CaptchaOptions;
        playAudio():void;
		formSubmit(event:any):boolean;
		refresh(event:any):boolean;
    }
    interface CaptchaOptions {   

		targetInput?: string;
        targetButton?:string;
        height? :number;
        width? :number;
        characterSet? : string;
        maximumLength? : number;             
        minimumLength? :number;
		enablePattern?: boolean;         
        enableCaseSensitivity? :boolean;
        enableAutoValidation? :boolean;            
        customErrorMessage?: string;            
        requestMapper?: string;
        showAudioButton?:boolean;
        showRefreshButton?:boolean;           
        enableRTL?:boolean;            
        mapper?:string;
		hatchStyle?:ej.HatchStyle;	
		refreshBegin? (e:CaptchaEvent):void;
		refreshSuccess?(e:CaptchaEvent):void;
		refreshFailure?(e:CaptchaEvent):void;
		refreshComplete?(e:CaptchaEvent):void;
    }
    interface CaptchaEvent  {
        model: CaptchaOptions;       
    }
	interface CaptchaRefreshBegin extends ej.BaseEvent,CaptchaEvent{
	data:any;	
	}
	interface CaptchaRefreshSuccess extends ej.BaseEvent,CaptchaEvent{
	data:any;
	content: JQuery;
	}
	interface CaptchaRefreshFailure extends ej.BaseEvent,CaptchaEvent{
	data:any;	
	}
	interface CaptchaRefreshComplete extends ej.BaseEvent,CaptchaEvent{
	data:any;	
	}

 class ListBox extends ej.Widget {
        static fn: ListBox;
        constructor(element: JQuery, options?: ListBoxOptions);
        constructor(element: Element, options?: ListBoxOptions);
		model:ListBoxOptions;
		defaults:ListBoxOptions;
        enable(): void;
        disable(): void;
		addItem(val:any, index:number): void;
		checkItems(): void;
        disableItem(text:string): void;
        enableItemByIndex(index:number): void;
        disableItemByIndex(index:number): void;
        disableItemsByIndices(value: any): void;
        enableItemsByIndices(value: any): void;
        checkItemByIndex(index:number): void;
        uncheckItemByIndex(index:number): void;
        checkItemsByIndices(index:any): void;
        uncheckItemsByIndices(index:any): void;
		getCheckedItems(): Array<number>;
		getSelectedItems(): Object; 
        getIndexByValue(value: any): number;
        getIndexByText(text: string): number;
        getTextByIndex(index: any): string;
        getItemByText(text: string): Object;
        getItemByIndex(index: any): Object;
        getListData(): Object;
        enableItem(text: string): void;
        moveUp(): void;
        moveDown(): void;
        removeItem(): string;
        removeItemByText(text: string): string;
        removeItemByIndex(index: number): string;
        removeSelectedItems(): string;
		selectAll(): void; 
        selectItemByIndex(index: number): void;
        selectItemsByIndices(value: string): void;
        selectItemByText(text: string): void;
        selectItemByValue(value: any): void;
        unselectItemByText(text: string): void;
        unselectItemByValue(value: any): void;
        unSelectAll(): Object;
        unselectItemByIndex(index: number): void;
        unselectItemsByIndices(value: string): void;        
        checkAll(): void;
        uncheckAll(): void;
        destroy(): void;
        refresh(): void;
    	hideItem(): void;
    	hideSelectedItems(): void;
    	hideCheckedItems(): void;
    	showItem(): void;
    	showItemsByIndices(items: Array<number>): void;
    	hideItemsByIndices(items: Array<number>): void;
    	showItemsByValues(items: Array<number>): void;
    	hideItemsByValues(items: Array<number>): void;
    	showItemByValue(items: number): void;
    	hideItemByValue(items: number): void;
    	showItemByIndex(index: number): void;
    	hideItemByIndex(index: number): void;
    	hide(): void;
    	show(): void;
    	hideAllItems(): void;
    	showAllItems(): void;

    	//deprecated methods
    	unCheckAll(): void;
    	selectItemsByIndex(value: string): void;
    	unselectItemsByIndex(value: string): void;
    }

 interface ListBoxOptions {
        totalItemsCount?: number;
        itemsCount?: number;
        dataSource?: Object;
        query?: Object;
    	itemRequestCount?: number;
    	fields?: ListBoxFields;
    	height?: (number|string);
    	width?: (number|string);
        template?: string;		
    	text?: string;
    	selectedIndex?: number;
    	checkedIndices?: Array<number>;
    	selectedIndices?: Array<number>;
        cascadeTo?: string;		
    	value?: string;
    	cssClass?: string;
    	targetID?: string;
    	htmlAttributes?: Object;
        showRoundedCorner?: boolean;
        enableRTL?: boolean;
        enabled?: boolean;
        showCheckbox?: boolean;
    	allowVirtualScrolling?: boolean;
    	virtualScrollMode?: ej.VirtualScrollMode;
        enablePersistence?: boolean;
        allowMultiSelection?: boolean;
    	allowDrag?: boolean;
    	allowDrop?: boolean;
    	enableIncrementalSearch?: boolean;
    	caseSensitiveSearch?: boolean;
    	loadDataOnInit?: boolean;
		create?(e: ListBoxEvent): void;
    	change? (e: ListBoxSelectOrCheckEvent): void;
    	select? (e: ListBoxSelectOrCheckEvent): void;
    	unselect? (e: ListBoxSelectOrCheckEvent): void;
    	itemDragStart? (e: ListBoxItemDragOrDropEvent): void;
        itemDrag? (e: ListBoxItemDragOrDropEvent): void;
    	itemDragStop? (e: ListBoxItemDragOrDropEvent): void;
    	itemDrop? (e: ListBoxItemDragOrDropEvent): void;
    	checkChange? (e: ListBoxSelectOrCheckEvent): void;
        destroy?(e: ListBoxEvent): void;        
    	actionComplete? (e: ListBoxAjaxEvent): void;
    	actionSuccess? (e: ListBoxAjaxEvent): void;
    	actionFailure? (e: ListBoxAjaxEvent): void;
    	actionBegin? (e: ListBoxEvent): void;


    	//deprecated properties
    	enableVirtualScrolling?: boolean;
    	checkAll?: boolean;
    	uncheckAll?: boolean;
    	enableLoadOnDemand?: boolean;
    	itemRequest? (e: ListBoxItemRequsetEvent): void;
    	allowDragAndDrop?: boolean;
    	selectedItemIndex?: number;
    	enableItemsByIndex?: string;
    	checkItemsByIndex?: string;
    	disableItemsByIndex?: string;
    	uncheckItemsByIndex?: string;
        itemDropped? (e: ListBoxItemDragOrDropEvent): void;
    	selected? (e: ListBoxSelectOrCheckEvent): void;
    	selectIndexChanged? (e: ListBoxSelectOrCheckEvent): void;
    	selectedItems?: Array<number>;
    	checkedItems?: Array<number>;
    	checkedItemlist?: Array<number>;
    	selectedItemlist?: Array<number>;

    }

    interface ListBoxFields {
        id?: string;
        text?: string;
        imageUrl?: string;
        imageAttributes?: Object;
        spriteCssClass?: string;
        htmlAttributes?: Object;
    	tooltipText?: string;
    	tableName?: string;
    	selectBy?: string;
    	checkBy?: string;
    	groupBy?: string;

    	//deprecated Properties

    	selected?: string;
    	category?: string;
    	toolTipText?: string;
    }

       interface ListBoxEvent extends ej.BaseEvent {
        model: ListBoxOptions;
    	type: string;
    	cancel: boolean;
    }
	
       interface ListBoxSelectOrCheckEvent extends ej.BaseEvent, ListBoxEvent {    	
        data: Object;
        index: number;
        isChecked: boolean;
        isEnabled: boolean;
        isSelected: boolean;
        item: Object;
        text: string;
        value: string;
        event: Object;
        isInteraction: boolean;
    }
 
		interface ListBoxItemDragOrDropEvent extends ej.BaseEvent, ListBoxEvent {
        items: Object;
    	target: Object;
    }

		interface ListBoxItemRequsetEvent extends ej.BaseEvent, ListBoxEvent {
        isInteraction: boolean;
    	originalEvent: Object;
    	scrollData: Object;
        event:Object;
    }
		interface ListBoxAjaxEvent extends ej.BaseEvent, ListBoxEvent {
    	xhr: Object;
    	result: Object;
    	request: Object;
    	query: Object;
    }
 

 class Calculate {
        constructor();
        computeSum(range: string): number;
        computeEncodeURL(argList: string): number;
        computeChar(arg: string): string;
        computeCode(argList: string): string;
        computeUniCode(argList: string): string;
        computeUniChar(argList: string): string;
        computeLower(args: string): string;
        computeLen(range: string): string;
        computeMid(range: string): string;
        computeLeft(range: string): string;
        computeClean(arg: string): string;
        computeRept(argList: string): string;
        computeReplace(argList: string): string;
        computeExact(range: string): string;
        computeFind(arg: string): string;
        computeTrim(args: string): string;
        computeSearch(argList: string): string;
        computeSubstitute(range: string): string;
        computeProper(argList: string): string;
        computeT(args: string): string;
        computeNumberValue(argList: string): string;
        computeConcatenate(range: string): string;
        computeDollar(range: string): string;
        computeFixed(args: string): string;
        computeBin2Dec(argList: string): string;
        computeBin2Hex(argList: string): string;
        computeDec2Bin(argList: string): string;
        computeHex2Bin(argList: string): string;
        computeHex2Oct(argList: string): string;
        computeDatevalue(argList: string): string;
        ComputeDay(argList: string): string;
        computeDays(argList: string): string;
        computeEDate(argList: string): string;
        computeEOMonth(argList: string): string;
        computeHour(argList: string): string;
        computeISOWeeknum(argList: string): string;
        computeMinute(argList: string): string;
        computeMonth(argList: string): string;
        computeNetworkDays(argList: string): string;
        computeNetworkDaysintl(argList: string): string;
        computeNow(argList: string): string;
        computeSecond(argList: string): string;
        computeTime(argList: string): string;
        computeTimevalue(argList: string): string;
        computeToday(argList: string): string
        computeWeekday(argList: string): string;
        computeWeeknum(argList: string): string;
        computeWorkDay(argList: string): string;
        computeWorkDayintl(argList: string): string;

        computeAddress(argList: string): string;
        computeAreas(arg: string): string;
        computeChoose(arg: string): string;
        computeColumn(arg: string): string;
        computeFormulaText(argList: string): string;
        computeHyperlink(argList: string): string;
        computeHLookUp(range: string): string;
        computeOffSet(arg: string): string;
        computeTranspose(arg: string): string;

        computeLognormOinv(argList: string): string;
        computeNormOinv(argList: string): string;
        computeNormOdist(argList: string): string;
        computeNormOsODist(argList: string): string;
        computeNormOsOInv(argList: string): string;
        computePermut(argList: string): string;
        computePermutationA(argList: string): string;
        computeStandardize(argList: string): string;
        computeBinomOdist(argList: string): string;
        computeChisqOinvOrt(argList: string): string;
        computeChisqOdistOrt(argList: string): string;
        computeFOdist(argList: string): string;
        computeGammaln(argList: string): string;
        computeConfidenceOnorm(argList: string): string;
        computeExponOdist(argList: string): string;
        computeFisher(argList: string): string;
        computeFisherInv(argList: string): string;
        computeGammaOinv(argList: string): string;
        computeAverage(range: string): string;
        computeAverageA(range: string): string;
        computePoissonODist(argList: string): string;
        computeWeiBullODist(argList: string): string;
        computeFOinvOrt(argList: string): string;
        computeTOdist(argList: string): string;
        computeMax(range: string): string;
        computeMaxa(range: string): string;
        computeMedian(range: string): string;
        computeMin(range: string): string;
        computeMina(range: string): string;
        computePercentrankInc(range: string): string;
        computePercentile(range: string): string;
        computeRankOEq(range: string): string;
        computeCount(range: string): string;
        computeCounta(range: string): string;
        computeDevsq(range: string): string;
        computeFOdistORt(argList: string): string;
        computeForecast(range: string): string;
        computeGeomean(range: string): string;
        computeHarmean(range: string): string;
        computeIntercept(range: string): string;
        computeLarge(range: string): string;
        computeSmall(range: string): string;
        computeLognormOdist(argList: string): string;
        computeAvedev(range: string): string;
        computeCountblank(range: string): string;
        computeStdevOp(range: string): string;
        computeStdevOS(range: string): string;
        computeStdeva(range: string): string;
        computeStdevpa(range: string): string;
        computeTOinv(argList: string): string;
        computeVarp(range: string): string;
        computeVara(range: string): string;
        computeVarpa(range: string): string;
        computeCorrel(range: string): string;
        computeNegbinomODist(argList: string): string;
        computePercentileExc(range: string): string;
        computePercentileOInc(range: string): string;
        computeTrimmean(range: string): string;
        computeRsq(range: string): string;

        computeAbs(args: string): string;
        computeAcos(args: string): string;
        computeAcosh(args: string): string;
        computeAcot(argList: string): string;
        computeAcoth(argList: string): string;
        computeArabic(arg: string): string;
        computeAsin(args: string): string;
        computeAtan(args: string): string;
        computeAtan2(argList: string): string;
        computeCeilingMath(args: string): string;
        computeCeiling(args: string): string;
        computeCombin(argList: string): string;
        computeCombinA(argList: string): string;
        computeCos(args: string): string;
        computeCosh(args: string): string;
        computeCot(argList: string): string;
        computeCsc(argList: string): string;
        computeCsch(argList: string): string;
        computeDecimal(argList: string): string;
        computeDegrees(args: string): string;
        computeExp(args: string): string;
        computeEven(args: string): string;
        computeFact(args: string): string;
        computeFactdouble(args: string): string;
        computeFloor(args: string): string;
        computeInt(range: string): string;
        computeLn(argList: string): string;
        computeLog(argList: string): string;
        computePI(args: string): string;
        computeProduct(range: string): string;
        computeSecant(argList: string): string;
        computeSeriessum(arg: string): string;
        computeSin(args: string): string;
        computeSinh(args: string): string;
        computeSqrt(args: string): string;
        computeSubTotal(args: string): string;
        computeSumif(argList: string): string;
        computeTrunc(range: string): string;
        computeTan(args: string): string;
        computeLogTen(args: string): string;

        computeAnd(range: string): string;
        computeFalse(empty: string): string;
        computeIf(args: string): string;
        computeIfError(args: string): string;
        computeIfNA(range: string): string;
        computeNot(args: string): string;
        computeTrue(empty: string): string;

        computeCell(arg: string): string;
        computeErrorType(args: string): string;
        computeInfo(argList: string): string;
        computeIsErr(range: string): string;
        computeIsError(range: string): string;
        computeIsEven(args: string): string;
        computeIsFormula(argList: string): string;
        computeIsLogical(args: string): string;
        computeIsNA(args: string): string;
        computeIsNonText(args: string): string;
        computeIsNumber(range: string): string;
        computeIsOdd(args: string): string;
        computeIsRef(args: string): string;
        computeIsText(args: string): string;
        computeN(args: string): string;
        computeNA(): string;
        computeSheet(argList: string): string;
        computeSheets(argList: string): string;
        computeType(argList: string): string;
        computeRow(arg: string): string;
        computeRows(arg: string): string;
    }
 class CheckBox extends ej.Widget {
        static fn: CheckBox;
        constructor(element: JQuery, options?: CheckBoxOptions);
        constructor(element: Element, options?: CheckBoxOptions);
		model:CheckBoxOptions;
		defaults:CheckBoxOptions;
        disable(): void;
        enable(): void;
		destroy(): void;
        isChecked(): boolean;
    }

    interface CheckBoxOptions {
        id?: string;
        name?: string;
        value?: string;
        checked?: boolean;
		checkState?: ej.CheckState;
        enabled?: boolean;
        enableTriState?: boolean;
		htmlAttributes?: Object;
        indeterminateState?: boolean;
        showRoundedCorner?: boolean;
        enablePersistence?: boolean;
        cssClass?: string;
        text?: string;
        enableRTL?: boolean;
        idPrefix?: string;
        validationRules?: Object;
        validationMessage?: Object;
        size?: ej.CheckboxSize; 
        beforeChange? (e: CheckBoxBeforeChangeEvent): void;
        change? (e: CheckBoxChangeEvent): void;
        create? (e: CheckBoxEvent): void;
        destroy? (e: CheckBoxEvent): void;
    }
    interface CheckBoxEvent extends ej.BaseEvent {
        model: CheckBoxOptions;
    }

    interface CheckBoxBeforeChangeEvent extends ej.BaseEvent,CheckBoxEvent {
        isChecked: boolean;
        event: Object;
    }

    interface CheckBoxChangeEvent extends ej.BaseEvent, CheckBoxEvent {
        isChecked: boolean;
        event: Object;
    }


class ColorPicker extends ej.Widget {
    static fn: ColorPicker;
    constructor(element: JQuery, options?: ColorPickerOptions);
    constructor(element: Element, options?: ColorPickerOptions);
	model:ColorPickerOptions;
	defaults:ColorPickerOptions;
    disable(): void;
    enable(): void;
    show(): void;
    hide(): void;
    getValue(): string;
    setValue(code:any): void;
    getColor(): Object;
    hexCodeToRGB(colorCode:string): Object;
    RGBToHEX(rgb:Object): string;
    HSVToRGB(hsv:Object): Object;
    RGBToHSV(rgb:Object): Object;
    refresh(): void;
}
interface ColorPickerOptions {
    buttonText?: ColorPickerButtonText;
    columns?: (number|string); 
    cssClass?: string;
    custom?: Array<any>;
    displayInline?: boolean;
    showClearButton?: boolean;
    showApplyCancel?: boolean;
    showSwitcher?: boolean;
    enableOpacity?: boolean;
    enabled?: boolean;
    modelType?: ej.ColorPicker.ModelType;
    buttonMode?: ej.ColorPicker.ButtonMode;
    htmlAttributes?: Object;
    opacityValue?: (number|string); 
    palette?: ej.ColorPicker.Palette;
    presetType?: ej.ColorPicker.PresetType;
    showPreview?: boolean;
    showRecentColors?: boolean;
    showTooltip?: boolean;
    toolIcon?: string;
    value?: string;
    tooltipText?: ColorPickerTooltipText;
    change? (e: ColorPickerChangeEvent): void;
    close? (e: ColorPickerEvent): void;
    create? (e: ColorPickerEvent): void;
    destroy? (e: ColorPickerEvent): void;
    open? (e: ColorPickerEvent): void;
    select? (e: ColorPickerSelectEvent): void;
}
interface ColorPickerButtonText {
    apply?: string;
    cancel?: string;
}
interface ColorPickerTooltipText {
    addbutton?: string;
    basic?: string;
    candycrush?: string;
    citrus?: string;
    currentcolor?: string;
    flatcolors?: string;
    misty?: string;
    monochrome?: string;
    moonlight?: string;
    pinkshades?: string;
    sandy?: string;
    seawolf?: string;
    selectedcolor?: string;
    switcher?: string;
    vintage?: string;
    webcolors?: string;
}
interface ColorPickerEvent extends ej.BaseEvent {
    model: ColorPickerOptions;
}
interface ColorPickerChangeEvent extends ej.BaseEvent, ColorPickerEvent {
    value?: string;
}
interface ColorPickerSelectEvent extends ej.BaseEvent, ColorPickerEvent {
    value?: string;
}

export module ColorPicker
{
enum ModelType
{
 Default,
 Palette,
 Picker
}
enum Palette
{
 BasicPalette,
 CustomPalette,
}
enum PresetType
{
 Basic,
 MonoChrome,
 FlatColors,
 SeaWolf,
 WebColors,
 Sandy,
 PinkShades,
 Misty,
 Citrus,
 Vintage,
 MoonLight,
 CandyCrush,
}
enum ButtonMode
{
 Default,
 Split,
}
}

class FileExplorer extends ej.Widget {
    static fn: FileExplorer;
    constructor(element: JQuery, options?: FileExplorerOptions);
    constructor(element: Element, options?: FileExplorerOptions);
	model:FileExplorerOptions;
	defaults:FileExplorerOptions;
    disableToolbarItem(liElement: any): void;
    enableToolbarItem(liElement: any): void;
    removeToolbarItem(liElement: any): void;
    adjustSize(): void;
    refresh(): void;
    enableMenuItem(): void;
    disableMenuItem(): void;
}

interface FileExplorerOptions {
    fileTypes?: string;
    filterSettings?: FEFilterSettings;
	allowMultiSelection?: boolean;
    showToolbar?: boolean;   
    showTreeview?: boolean; 
    showContextMenu?: boolean;
    showFooter?: boolean;
    layout?: ej.FileExplorer.layoutType;
    locale?: string;
    gridSettings?: FEGridSettings;
    tools?: FETools;
    toolsList?: Array<string>;
	selectedItems?:Array<string>;
	selectedFolder?: string;
    path?: string;
    height?: (number|string); 
    width?: (number|string); 
    minWidth?: (number|string); 
    maxWidth?: (number|string); 
    minHeight?: (number|string); 
    maxHeight?: (number|string); 
    isResponsive?: boolean;
    enableResize?: boolean;
    showThumbnail?: boolean;
	showCheckbox?: boolean;
	showRoundedCorner?: boolean;
    cssClass?: string;
    enableRTL?: boolean;
    ajaxAction?: string;
	ajaxDataType?:string;
    ajaxSettings?: FileExplorerAjaxSettings;
    uploadBoxSettings?: FEUploadBoxSettings;
    create? (e: FileExplorerEvent): void;
    destroy? (e: FileExplorerEvent): void;
    layoutChange? (e: FileExplorerLayoutChangeEvent): void;    
    select? (e: FileExplorerSelectEvent): void;
    createFolder? (e: FileExplorerCreateFolderEvent): void;  
    remove? (e: FileExplorerRemoveEvent): void;
    cut? (e: FileExplorerCutEvent): void;
    copy? (e: FileExplorerCopyEvent): void;
    paste? (e: FileExplorerPasteEvent): void;
    open? (e: FileExplorerOpenEvent): void;  
    beforeOpen? (e: FileExplorerBeforeOpenEvent): void;  
    beforeUpload? (e: FileExplorerBeforeUploadEvent): void;  
    beforeDownload? (e: FileExplorerBeforeDownloadEvent): void;  
    beforeAjaxRequest? (e: FileExplorerBeforeAjaxRequestEvent): void;  
    resize? (e: FileExplorerResizeEvent): void;
    resizeStart? (e: FileExplorerResizeStartEvent): void;
    resizeStop? (e: FileExplorerResizeStopEvent): void;
	templateRefresh? (e: FileExplorerTemplateRefreshEvent): void;
}
interface FEFilterSettings {
    caseSensitiveSearch?: boolean;
    filterType?: ej.FileExplorer.filterType;
}
interface FEUploadBoxSettings {
    multipleFileSelection?: boolean;
    fileSize?: number;
    autoUpload?: boolean;
}
interface FEGridSettings {
    allowSorting?: boolean;
    allowSearching?: boolean;
    columns?: Array<GridColumn>;
}

interface FETools {
creation:Array<string>;
    navigation: Array<string>;
    addressBar: Array<string>;
    editing: Array<string>;
    copyPaste: Array<string>;
    getProperties: Array<string>;
    searchBar: Array<string>;
}
interface FileExplorerAjaxSettings {
    read?: AjaxSettings;
    createFolder?: AjaxSettings;
    destroy?: AjaxSettings;
    rename?: AjaxSettings;
    paste?: AjaxSettings;
    getDetais?: AjaxSettings;
    upload?: AjaxSettings;
    download?: AjaxSettings;
	search?: AjaxSettings;
}
interface FileExplorerEvent extends ej.BaseEvent {
    model: FileExplorerOptions;
}
interface FileExplorerLayoutChangeEvent extends ej.BaseEvent, FileExplorerEvent {
    layoutType: string;   
}
interface FileExplorerSelectEvent extends ej.BaseEvent, FileExplorerEvent {
    name: string;
    itemType: string;
    path: string;
    selectedItems: Array<Object>;
}

interface FileExplorerCreateFolderEvent extends ej.BaseEvent, FileExplorerEvent {
    selectedItems: Array<Object>;
}
interface FileExplorerRemoveEvent extends ej.BaseEvent, FileExplorerEvent {
    itemType: string;
    path: string;
    selectedItems: Array<Object>;
}
export module FileExplorer {

    enum layoutType{
        Tile ,
        Grid 
    }
    enum filterType {
        StartsWith ,
        Contains ,
        EndsWith ,
        LessThan ,
        GreaterThan ,
        LessThanOrEqual ,
        GreaterThanOrEqual ,
        Equal ,
        NotEqual

    }
}interface FileExplorerBeforeUploadEvent extends ej.BaseEvent, FileExplorerEvent {    
    path: string;
    selectedItems: Array<Object>;
}
interface FileExplorerBeforeDownloadEvent extends ej.BaseEvent, FileExplorerEvent {
    path: string;
    selectedItems: Array<Object>;
}
interface FileExplorerBeforeAjaxRequestEvent extends ej.BaseEvent, FileExplorerEvent {   
    data: Object;
}
interface FileExplorerCutEvent extends ej.BaseEvent, FileExplorerEvent {
    name: string;
    sourcePath: string;
    selectedItems: Array<Object>;
}
interface FileExplorerCopyEvent extends ej.BaseEvent, FileExplorerEvent {
    name: string;
    sourcePath: string;
    selectedItems: Array<Object>;
}
interface FileExplorerPasteEvent extends ej.BaseEvent, FileExplorerEvent {
    name: string;
    targetPath: string;
    selectedItems: Array<Object>;
    targetFolder: Array<Object>;
}
interface FileExplorerOpenEvent extends ej.BaseEvent, FileExplorerEvent {
    itemType: string;
    path: string;
    selectedItems: Array<Object>;
}
interface FileExplorerBeforeOpenEvent extends ej.BaseEvent, FileExplorerEvent {
    itemType: string;
    path: string;
    selectedItems: Array<Object>;
}
interface FileExplorerResizeStartEvent extends ej.BaseEvent, FileExplorerEvent {
    event: Object;
}
interface FileExplorerResizeStopEvent extends ej.BaseEvent, FileExplorerEvent {
    event: Object;
}
interface FileExplorerResizeEvent extends ej.BaseEvent, FileExplorerEvent {
    event: Object;
}
interface FileExplorerTemplateRefreshEvent extends ej.BaseEvent, FileExplorerEvent {
        rowIndex?: number;
        data?: any;
        cell?: any;
        column?: any;
}
 class DatePicker extends ej.Widget {
        static fn: DatePicker;
        constructor(element: JQuery, options?: DatePickerOptions);
        constructor(element: Element, options?: DatePickerOptions);
		model:DatePickerOptions;
		defaults:DatePickerOptions;
        disable(): void;
        enable(): void;
        show(e:any): void;
        hide(e:any): void;
        getValue(): string;
		destroy(): void;
    }
    interface DatePickerOptions {
        dayHeaderFormat?: ej.DatePicker.Header;
        showPopupButton?: boolean;
        showFooter?: boolean;
        displayInline ?: boolean;
        dateFormat ?: string;
        watermarkText?: string;       
        value?: any;
        minDate?: any;
        maxDate?: any;
        validationRules?: Object;
        validationMessage?: Object;
        startLevel?: ej.DatePicker.Level;
        depthLevel?: ej.DatePicker.Level;
        cssClass?: string;
        startDay?: number;
        stepMonths?: number;
        locale?: string;
        showOtherMonths?: boolean;
        enableStrictMode?: boolean;
		enableAnimation?: boolean;
        enablePersistence?: boolean;
        enabled?: boolean;
        width?: (number|string); 
        height?: (number|string); 
        enableRTL?: boolean;
        showRoundedCorner?: boolean;
        headerFormat?: string;
        buttonText?: string;
        readOnly?: boolean;
        fields?: DatepickerFields;
        showTooltip?: boolean;
        highlightWeekend?: boolean;
        highlightSection?: ej.DatePicker.HighlightSection;
	htmlAttributes?: Object;
	specialDates?: Object;		
        beforeDateCreate?(e: DatepickerEvent): void;
        open? (e: DatepickerOpenEvent): void;
        beforeOpen? (e: DatepickerEvent): void;
        close? (e: DatepickerCloseEvent): void;
        beforeClose? (e: DatepickerEvent): void;
        select?(e: DatepickerSelectEvent): void;
        change?(e: DatepickerChangeEvent): void;
        focusIn?(e: DatepickerEvent): void;     
        focusOut?(e: DatepickerEvent): void;
        create?(e: DatepickerEvent): void;
        destroy?(e: DatepickerEvent): void;        
    }

    interface DatepickerFields {
        date?: string;
        tooltip?: string;
        iconClass?: string;
        cssClass?: string;
    }

    interface DatepickerEvent extends ej.BaseEvent{
        model: DatePickerOptions;
    }

    interface DatepickerOpenEvent extends ej.BaseEvent, DatepickerEvent {
        prevDate?: string;
        value?: string;
    }

    interface DatepickerCloseEvent extends ej.BaseEvent, DatepickerEvent {
        prevDate?: string;
        value?: string;
    }
    interface DatepickerChangeEvent extends ej.BaseEvent, DatepickerEvent {
        prevDate?: string;
        value?: string;
    }

    interface DatepickerSelectEvent extends ej.BaseEvent, DatepickerEvent {
        prevDate?: string;
        value?: string;
        isSpecialDay?: boolean;
    }

export module DatePicker
{
enum Header
{
ShowHeaderNone,
ShowHeaderShort,
ShowHeaderMin,
ShowHeaderLong
}
enum HighlightSection
{
 Month,
 Week,
 WorkDays,
 None
}
enum Level
{
 Month,
 Year,
 Decade,
 Century
}
}
 class DateTimePicker extends ej.Widget {
        static fn: DateTimePicker;
        constructor(element: JQuery, options?: DateTimePickerOptions);
        constructor(element: Element, options?: DateTimePickerOptions);
		model:DateTimePickerOptions;
		defaults:DateTimePickerOptions;
        disable(): void;
        enable(): void;
        show(): void;
        hide(): void;
        getValue(): string;
        setCurrentDateTime(): void;
		destroy(): void;
    }

    interface DateTimePickerOptions {
        cssClass?: string;
        locale?: string;
        readOnly?: boolean;
        showRoundedCorner?: boolean;
        enableRTL?: boolean;
        enabled?: boolean;
        value?: any;
        minDateTime?: any;
        maxDateTime?: any;
        height?: (number|string); 
        width?: (number|string); 
        validationRules?: Object;
        validationMessage?: Object;
        dateTimeFormat?: string;
        showPopupButton?: boolean;
        buttonText?: DateTimePickerButtonText;
        timeDrillDown?: DateTimePickerTimeDrillDown;
        enablePersistence?: boolean;
        enableStrictMode?: boolean;
	enableAnimation?: boolean;
	htmlAttributes?: Object;
        interval?: number;
        timeDisplayFormat?: string;
        timePopupWidth?: (number|string); 
        dayHeaderFormat?: string;
        startLevel?: ej.DatePicker.Level;
        depthLevel?: ej.DatePicker.Level;
        startDay?: number;
        stepMonths?: number;
        showOtherMonths?: boolean;
        headerFormat?: string;
        open? (e: DateTimePickerOpenEvent): void;
        beforeOpen? (e: DateTimePickerEvent): void;
        close? (e: DateTimePickerCloseEvent): void;
        beforeClose? (e: DateTimePickerEvent): void;
        change? (e: DateTimePickerChangeEvent): void;
		focusIn? (e: DateTimePickerEvent): void;
		focusOut? (e: DateTimePickerEvent): void;
        create? (e: DateTimePickerEvent): void;
        destroy? (e: DateTimePickerEvent): void;

    }

    interface DateTimePickerButtonText {
        today?: string;
        timeNow?: string;
        done?: string;
        timeTitle?: string;
    }
    
 interface DateTimePickerTimeDrillDown {
     enabled?: boolean;
     interval?: number;
     showMeridian?: boolean;
     autoClose?: boolean;
 }

    interface DateTimePickerEvent extends ej.BaseEvent {
        model: DateTimePickerOptions;
    }

    interface DateTimePickerChangeEvent extends ej.BaseEvent, DateTimePickerEvent, DateTimePickerOpenEvent {      
        isValidState?: boolean;
        prevDateTime: string;
        value: string;
    }
    interface DateTimePickerOpenEvent extends ej.BaseEvent, DateTimePickerEvent {
        prevDateTime: string;
        value: string;        
    }
    interface DateTimePickerCloseEvent extends ej.BaseEvent, DateTimePickerEvent, DateTimePickerOpenEvent {
        prevDateTime: string;
        value: string;
    }

export module DateTimePicker
{
enum Level
{
 Month,
 Year,
 Decade,
 Century
}
}

 class Dialog extends ej.Widget {
        static fn: Dialog;
        constructor(element: JQuery, options?: DialogOptions);
        constructor(element: Element, options?: DialogOptions);
		model:DialogOptions;
		defaults:DialogOptions;
		collapse(): Object;
        destroy(): void;
		expand(): Object;
		isOpened(): boolean;
        isOpen(): boolean;
		maximize(): Object;
		minimize(): Object;
		pin(): Object;
		unpin(): Object;
		restore(): Object;
		open(): Object;
        close(event:any): Object;
        refresh(): void;
        setTitle(titleText: string): Object;
        setContent(htmlContent: string): Object;
        focus(): Object;
    }

    interface DialogOptions {
        showOnInit?: boolean;
        closeOnEscape?: boolean;
        closeIconTooltip?: string; // Deprecated API
        allowDraggable?: boolean;
        containment?: any;
        height?: (number|string);
        minHeight?: (number|string);
        minWidth?: (number|string);
        maxHeight?: (number|string);
        maxWidth?: (number|string);
        enableModal?: boolean;
        position?: DialogPositon;
        enableResize?: boolean;
        htmlAttributes?: Object;
        showHeader?: boolean;
        contentType?: string;
        contentUrl?: string;
        ajaxSettings?: AjaxSettings;
        title?: string;
        width?: (number|string);
        zIndex?: number;
        cssClass?: string;
        enableRTL?: boolean;
        allowKeyboardNavigation?: boolean;
        tooltip?: DialogTooltip;
        locale?: string;
        target?: any;
        showRoundedCorner?: boolean;
        actionButtons?: Array<string>;
        animation?: DialogAnimation;
        faviconCSS?: string;
        content?: any;
        enablePersistence?: boolean;
		enableAnimation?: boolean;
        enabled?: boolean;
        isResponsive?: boolean;
        beforeClose? (e: DialogBeforeCloseEvent):void ;
        close? (e: DialogCloseEvent): void;
        beforeOpen? (e: DialogEvent): void;
        open? (e: DialogEvent): void;
        expand? (e: DialogExpandEvent): void;
        collapse? (e: DialogCollapseEvent): void;
        drag? (e: DialogDragEvent): void;
        dragStart? (e: DialogDragStartEvent): void;
        dragStop? (e: DialogDragStopEvent): void;
        resize? (e: DialogResizeEvent): void;
        resizeStart? (e: DialogResizeStartEvent): void;
        resizeStop? (e: DialogResizeStopEvent): void;
        contentLoad? (e: DialogContentLoadEvent): void;
        ajaxSuccess? (e: DialogtAjaxSuccessEvent): void;
        ajaxError? (e: DialogAjaxErrorEvent): void;
        create? (e: DialogEvent): void;
        destroy? (e: DialogEvent): void;
    }

    interface DialogPositon {
        X?: string;
        Y?: string;
    }
 
    interface DialogAnimation {
       show?: DialogEffect;
       hide?: DialogEffect;
    }  

    interface DialogEffect {
        effect?: string;
        duration?: number;
    }  
   
    interface DialogTooltip{
        close?: string;
        collapse?: string;
        restore?: string;
        maximize?: string;
        minimize?: string;
        expand?: string;
        unPin?: string;
        pin?: string;
    }

    interface DialogEvent extends ej.BaseEvent{
        model: DialogOptions;
    }

    interface DialogContentLoadEvent extends ej.BaseEvent, DialogEvent {
        contentType: string;
        url: string;
    }
    interface DialogExpandEvent extends ej.BaseEvent, DialogEvent {
        isInteraction: boolean;
    }
    interface DialogCollapseEvent extends ej.BaseEvent, DialogEvent {
        isInteraction: boolean;
    }
    interface DialogtAjaxSuccessEvent extends ej.BaseEvent, DialogEvent {
        data: any;
        url: string;
    }
    interface DialogAjaxErrorEvent extends ej.BaseEvent, DialogEvent {
        data: any;
        url: string;
    }
    interface DialogDragEvent extends ej.BaseEvent, DialogEvent {
        event: Object;
    }

    interface DialogDragStartEvent extends ej.BaseEvent, DialogEvent {
        event: Object;
    }
    interface DialogDragStopEvent extends ej.BaseEvent, DialogEvent {
        event: Object;
    }
    interface DialogResizeStartEvent extends ej.BaseEvent, DialogEvent {
        event: Object;
    }
    interface DialogResizeStopEvent extends ej.BaseEvent, DialogEvent {
        event: Object;
    }
    interface DialogResizeEvent extends ej.BaseEvent, DialogEvent {
        event: Object;
    }
    interface DialogBeforeCloseEvent extends ej.BaseEvent, DialogEvent {
        event: Object;
        isInteraction: boolean;
    }
    interface DialogCloseEvent extends ej.BaseEvent, DialogEvent {
        event: Object;
        isInteraction: boolean;
    }
 class DropDownList extends ej.Widget {
        static fn: DropDownList;
        constructor(element: JQuery, options?: DropDownListOptions);
        constructor(element: Element, options?: DropDownListOptions);
		model:DropDownListOptions;
		defaults:DropDownListOptions;
        enable(): void;
        disable(): void; 
        hidePopup(): boolean;    
        showPopup(): boolean;
        clearText(): void;
        addItem(itemTag: string): boolean;
        unselectItemsByIndices(val: string): void;
        unselectItemByValue(val: string): void;
        unselectItemByText(val: string): void;
        getSelectedItem(): Array<any>;
        getSelectedValue(): string;
        checkAll(): void;
        uncheckAll(): void;
        destroy(): void;
        setSelectedValue(idvalue:string): void;
		disableItemByIndex(value:string): void;
		enableItemByIndex(value:string): void;
		selectItemsByIndices(index: string):void;
		selectItemByValue(val: string): void;
		selectItemByText(val: string): void;
		getListData():Object;
    }

    interface DropDownListOptions {
		allowGrouping?: boolean;
        cssClass?: string;
        value?: any;
        text?: any;
        itemValue?: string;
		delimiterChar?: string;
		disableItemsByIndex?: string;
		enableItemsByIndex?: string;
        itemsCount?: number;
        dataSource?: any;
        validationRules?: Object;
        validationMessage?: Object;
        query?: Object;
        category?: Object;
        fields?: DropDownListFields;
        watermarkText?: string;
        height?:  (number|string);
        width?:  (number|string);
        popupHeight?:  (number|string);
        popupWidth?:  (number|string);
        targetID?: string;
        template?: string;
        headerTemplate?: string;
        selectedItemIndex?: number;
		selectedIndex?:number;
        selectedIndices?: Array<number>;
		selectedItems?: Array<number>;
        cascadeTo?: string;
        showRoundedCorner?: boolean;
        showPopupOnLoad?: boolean;
        enableAnimation?: boolean;
        enableRTL?: boolean;
        enabled?: boolean;
        caseSensitiveSearch?: boolean;
        showCheckbox?: boolean;
        checkAll?: boolean;
        uncheckAll?: boolean;
        enablePersistence?: boolean;
        enableIncrementalSearch?: boolean;
        enableFilterSearch?: boolean;
        readOnly?: boolean;
		multiSelectMode?: ej.MultiSelectMode;
		htmlAttributes?:Object;
		minPopupHeight?: (number|string);
		minPopupWidth?: (number|string);
		maxPopupHeight?: (number|string);
		maxPopupWidth?: (number|string);
		enablePopupResize?:boolean;
		enableSorting?:boolean;
		allowVirtualScrolling?:boolean;
		virtualScrollMode?:string;
		filterType?: ej.filterType;
		sortOrder?:ej.SortOrder;
        create?(e: DropDownListEvent): void;
        popupHide?(e: DropDownListPopupHideEvent): void;
        popupShown?(e: DropDownListPopupShownEvent): void;
        beforePopupShown?(e: DropDownListBeforePopupShownEvent): void;
        change?(e: DropDownListChangeEvent): void;
        select?(e: DropDownListSelectEvent): void;
        checkChange?(e: DropDownListCheckChangeEvent): void;
        beforePopupHide?(e: DropDownListBeforePopupHideEvent): void;
		popupResizeStart?(e: DropDownListEvent): void;
		popupResize?(e: DropDownListEvent): void;
		popupResizeStop?(e: DropDownListEvent): void;
		dataBound?(e: DropDownListDataBoundEvent): void;
		search?(e: DropDownListSearchEvent): void;
		cascade?(e: DropDownListCascadeEvent): void;
        destroy?(e: DropDownListEvent): void;        
		actionSuccess?(e:DropDownListActionSuccessEvent):void;
		actionFailure?(e:DropDownListActionFailureEvent):void;
		actionComplete?(e:DropDownListActionCompleteEvent):void;
    }

    interface DropDownListFields {
		groupBy?: string;
        id?: string;
        text?: string;
		category?:Object;
        value?: string;
        imageUrl?: string;
        imageAttributes?: any;
        spriteCssClass?: string;
        htmlAttributes?: any;
        selected?: boolean;
        tableName?: string;
    }

    interface DropDownListEvent extends ej.BaseEvent {
        model: DropDownListFields;
    }
    interface DropDownListCheckChangeEvent extends ej.BaseEvent, DropDownListEvent{
        isChecked: boolean;
        data: DropDownListOptions;        
    }
    interface DropDownListChangeEvent extends ej.BaseEvent, DropDownListEvent {
        text: string;
        selectedText: string;
        itemId: string;
        value: string;
        isChecked: boolean;
    }



    interface DropDownListBeforePopupShownEvent extends ej.BaseEvent, DropDownListEvent {
        text: string;
        value: string;
    }
	interface DropDownListBeforePopupHideEvent extends ej.BaseEvent, DropDownListEvent {
        text: string;
        value: string;
    }
    interface DropDownListPopupShownEvent extends ej.BaseEvent, DropDownListEvent {
        text: string;
        value: string;
    }
    interface DropDownListPopupHideEvent extends ej.BaseEvent, DropDownListEvent {
        text: string;
        value: string;
    }
    interface DropDownListSelectEvent extends ej.BaseEvent, DropDownListEvent {
        text: string;
        selectedText: string;
        itemId: string;
        value: string;
        isChecked: boolean;
    }
	interface DropDownListCascadeEvent extends ej.BaseEvent, DropDownListEvent {
        cascadeModel: string;
        cascadeValue: string;
        requiresDefaultFilter: boolean;
    }
	interface DropDownListSearchEvent extends ej.BaseEvent, DropDownListEvent {
        searchString: string;
        items: string;
    }
	interface DropDownListDataBoundEvent extends ej.BaseEvent, DropDownListEvent {
        data:string;
    }
	interface DropDownListActionSuccessEvent extends ej.BaseEvent, DropDownListEvent {
        e: any;
    }
	interface DropDownListActionFailureEvent extends ej.BaseEvent, DropDownListEvent {
        e: any;
    }
    interface DropDownListActionCompleteEvent extends ej.BaseEvent, DropDownListEvent {
        e: any;
    }

 class NumericTextbox extends ej.Widget {
        static fn: NumericTextbox;
        constructor(element: JQuery, options?: EditorOptions);
        constructor(element: Element, options?: EditorOptions);
		model:EditorOptions;
		defaults:EditorOptions;
        enable(): void;
        disable(): void;
        getValue(): number;
		destroy(): void;
    }

    class PercentageTextbox extends ej.Widget {
        static fn: PercentageTextbox;
        constructor(element: JQuery, options?: EditorOptions);
        constructor(element: Element, options?: EditorOptions);
        enable(): void;
        disable(): void;
        getValue(): number;
		destroy(): void;
    }

    class CurrencyTextbox extends ej.Widget {
        static fn: CurrencyTextbox;
        constructor(element: JQuery, options?: EditorOptions);
        constructor(element: Element, options?: EditorOptions);
        enable(): void;
        disable(): void;
        getValue(): number;
		destroy(): void;
    }

    interface EditorOptions {
        width?: (number|string); 
        height?: (number|string); 
        value?: (number|string); 
        name?: string;
        groupSeparator?: string;
        htmlAttribtes?: Object;
        minValue?: number;
        maxValue?: number;
        incrementStep?: number;
		validateOnType?: boolean;
        decimalPlaces?: number;
        cssClass?: string;
        enablePersistence?: boolean;
        showSpinButton?: boolean;
        locale?: string;
        validationRules?: any;
        validationMessage?: any;
        enableStrictMode?: boolean;
        showRoundedCorner?: boolean;
        readOnly?: boolean;
        enabled?: boolean;
        enableRTL?: boolean;
        watermarkText?: string;
        change? (e: EditorChangeEvent): void;
        focusIn? (e: EditorFocusInEvent): void;
        focusOut? (e: EditorFocusOutEvent): void;
        create? (e: EditorEvent): void;
        destroy? (e: EditorEvent): void;
    }

    interface EditorEvent extends ej.BaseEvent {
        model: EditorOptions;
    }

    interface EditorChangeEvent extends ej.BaseEvent, EditorEvent {
        value: number;
    }

    interface EditorFocusInEvent extends ej.BaseEvent, EditorEvent {
        value: number;
    }
    interface EditorFocusOutEvent extends ej.BaseEvent, EditorEvent {
        value: number;
    }
   
//Class ejListView
class ListView extends ej.Widget {
    static fn: ListView;
    element: JQuery;
    constructor(element: JQuery, options?: ListViewOptions);
    model: ListViewOptions;
    defaults: ListViewOptions;
    append(dynamicdatasource: Object): void;
    addItem(list:any, index:number, groupid:string): void;
    checkAllItem(childId:string): void;
    checkItem(index:number, childId:string): void;
    clear(): void;
    deActive(index:number, childId:string): void;
    disableItem(index:number, childId:string): void;
    enableItem(index:number, childId:string): void;
    getActiveItem(childId:string): any;
    getActiveItemText(childId:string): any;
    getCheckedItems(childId:string): any;
    getCheckedItemsText(childId:string): any;
    getItemsCount(childId:string): number;
    getItemText(index:number, childId:string): string;
    hasChild(index:number, childId:string): boolean;
    hide(childId:string): void;
    hideItem(index:number, childId:string): void;
    isChecked(index:number, childId:string): boolean;
    loadAjaxContent(urlVal:any, backButton:any): void;
    removeCheckMark(index:number, childId:string): void;
    removeItem(index:number, childId:string): void;
    selectItem(index:number, childId:string): void;
    setActive(index:number, childId:string): void;
    show(childId:string): void;
    showItem(index:number, childId:string): void;
    unCheckAllItem(childId:string): void;
    unCheckItem(index: number, childId: string): void; 
}
//ejListView Option
interface ListViewOptions {
    dataSource?: Array<any>;
    enableAjax?: boolean;
    enableCache?: boolean;
    enableCheckMark?: boolean;
    enableFiltering?: boolean;
    enableGroupList?: boolean;
    enablePersistence?: boolean;
    fieldSettings?: FieldSettings;
    ajaxSettings?: AjaxSettings;
    headerBackButtonText?: string;
    headerTitle?: string;
    height?: (number|string);
    persistSelection?: boolean;
    preventSelection?: boolean;
    query?: Object;
    renderTemplate?: boolean;
    selectedItemIndex?: number;
    showHeader?: boolean;
    templateId?: string;
    width?: (number|string);
    ajaxBeforeLoad? (e: ListViewEventArgs): void;
    ajaxComplete? (e: ListViewEventArgs): void;
    ajaxError? (e: ListViewEventArgs): void;
    ajaxSuccess? (e: ListViewEventArgs): void;
    load? (e: ListViewEventArgs): void;
    loadComplete? (e: ListViewEventArgs): void;
    mouseDown? (e: ListViewEventArgs): void;
    mouseUp? (e: ListViewEventArgs): void;
}
//ejListViewEvent Arugument
interface FieldSettings{
                navigateUrl?: any;
                href?: any;
                enableAjax?: boolean;
                preventSelection?: boolean;
                persistSelection?: boolean;
                text?: string;
                enableCheckMark?: boolean;
                checked?: string;
                primaryKey?: string;
                parentPrimaryKey?: string;
                imageClass?: string;
                imageUrl?: string;
                childHeaderTitle?: string;
                childId?: string;
                childHeaderBackButtonText?: string;
                renderTemplate?: boolean;
                templateId?: string;
                attributes?: any;
                mouseUp?: any;
                mouseDown?: any;
                groupID?: string;
                id?: string;
}
interface ListViewEventArgs {
    cancel?: boolean;
    type?: string;
    model?: ListViewOptions;
    ajaxData?: Object;
    errorThrown?: Object;
    textStatus?: Object;
    item?: Object;
    text?: Object;
    index?: number;
    content?: string;
    url?: string;
    hasChild?: boolean;
    isChecked?: boolean;
    checkedItems?: number;
    checkedItemsText?: string;
}


 class MaskEdit extends ej.Widget {
        static fn: MaskEdit;
        constructor(element: JQuery, options?: MaskEditOptions);
        constructor(element: Element, options?: MaskEditOptions);
		model:MaskEditOptions;
		defaults:MaskEditOptions;
        enable(): void;
        disable(): void;
        get_StrippedValue(): string;
        get_UnstrippedValue(): string;
        clear(): void;
		destroy(): void;
    }

    interface MaskEditOptions {
        maskFormat?: string;
        value?: (number|string);
        watermarkText?: string;
        height?: (number|string);
        width?: (number|string);
        showError?: boolean;
        htmlAttributes?: Object;
        cssClass?: string;
        customCharacter?: string;
        inputMode?: ej.InputMode;
        readOnly?: boolean;
        textAlign?: ej.TextAlign;
        validationRules?: any;
        validationMessage?: any;
        hidePromptOnLeave?: boolean;
        showRoundedCorner?: boolean;
        enablePersistence?: boolean;
        enabled?: boolean;
        keydown? (e: MaskEditChangeEvent): void;
        keyup? (e: MaskEditChangeEvent): void;
        keyPress?(e: MaskEditChangeEvent): void;
        change?(e: MaskEditChangeEvent): void;
        mouseover? (e: MaskEditChangeEvent): void;
        mouseout? (e: MaskEditChangeEvent): void;
        focusIn? (e: MaskEditChangeEvent): void;
        focusOut? (e: MaskEditChangeEvent): void;
        create?(e: MaskEditEvent): void;
        destroy?(e: MaskEditEvent): void;
    }

    interface MaskEditEvent extends ej.BaseEvent{
        model: MaskEditOptions;
    }

    interface MaskEditChangeEvent extends ej.BaseEvent, MaskEditEvent {
        value: string;
        unmaskedValue: string;
    }


 class Menu extends ej.Widget {
        static fn: Menu;
        constructor(element: JQuery, options?: MenuOptions);
        constructor(element: Element, options?: MenuOptions);
		model:MenuOptions;
		defaults:MenuOptions;
        enable(): void;
        disable(): void;
        disableItem(itemToDisable:string): boolean;
        disableItemByID(itemId: string): void;
        enableItem(itemToEnable: any): boolean;
        enableItemByID(itemId: string): void;
        show(locationX: number, locationY: number, targetElement : Object, e:any): void;
        hide(e:any): boolean;
		insert(item:Object,target:string):void;
        insertBefore(item: Object, target: string): void;
        insertAfter(item: Object, target: string): void;
		remove(targetCollection: Array<string>): void;
        destroy(): void;
        hideContextMenu(e: any): void;
        showContextMenu(locationX: number, locationY: number, targetElement: Object, e: any,update:boolean): void;
    }

    interface MenuOptions {
        height?: (number|string);
        width?: (number|string);
        animationType?: ej.AnimationType;
        orientation?: ej.Orientation;
        menuType?: ej.MenuType;
	excludeTarget?: string;
        contextMenuTarget?: string;
        cssClass?: string;
        openOnClick?: boolean;
        enableAnimation?: boolean;
        subMenuDirection?: ej.Direction;
        enableCenterAlign?: boolean;
        showRootLevelArrows?: boolean;
        showSubLevelArrows?: boolean;
        enableSeparator?: boolean;
        enabled?: boolean;
        fields?: MenuFields;
        enableRTL?: boolean;
        titleText?: string;
        beforeOpen? (e: MenuOpenEvent): void;
        open? (e: MenuOpenEvent): void;
        close? (e: MenuCloseEvent): void;
        mouseover? (e: MenuMouseEvent): void;
        mouseout? (e: MenuMouseEvent): void;
        click? (e: MenuClickEvent): void;
        keydown? (e: MenuKeyDownEvent): void;
        create? (e: MenuEvent): void;
        destroy? (e: MenuEvent): void;
    }

    interface MenuFields {
	    child?: Object;
        dataSource?: any;
        query?: any;
        tableName?: string;
        id?: string;
        parentId?: string;
        text?: string;
        spriteCssClass?: string;
        linkAttribute?: string;
        imageAttribute?: string;
        htmlAttribute?: string;
        imageUrl?: string;
		url?: string;
    }

    interface MenuEvent extends ej.BaseEvent {
        model: MenuOptions;
    }

    interface MenuOpenEvent extends ej.BaseEvent, MenuEvent {
        target: Element;
    }
    interface MenuCloseEvent extends ej.BaseEvent, MenuEvent {
        events: Event;
    }

    interface MenuMouseEvent extends ej.BaseEvent, MenuEvent {
        text: string;
        element: Element;
        event: Event;
        ID: string;
        selectedItem?: any;
    }
    interface MenuKeyDownEvent extends ej.BaseEvent, MenuEvent, MenuMouseEvent {
        
    }
    interface MenuClickEvent extends ej.BaseEvent, MenuEvent, MenuMouseEvent {
        events: MenuMouseEvent;
		text: string;
        element: Element;
        ID: string;
		selectedItem?: any;
    }
	
 class Pager extends ej.Widget {
        static fn: Pager;
        constructor(element: JQuery, options?: PagerOptions);
        constructor(element: Element, options?: PagerOptions);
		model:PagerOptions;
		defaults:PagerOptions;
        refreshPager(): void;
        goToPage(pageIndex : string,event:any): void;
       
    }
    interface PagerOptions {
        pageSize?: number;
        pageCount?: number;
        currentPage?: number;
        enableExternalMessage?: boolean;
        externalMessage?: string;
        enableQueryString?: boolean;
        locale?:string;
        masterObject?: any;
        enableRTL?: boolean;
        totalRecordsCount?: number;
        totalPages?: number;
        click?(e: PagerClickEvent): void;
        create?(e: PagerEvent): void;
        destroy?(e: PagerEvent): void;
    }

    interface PagerEvent extends ej.BaseEvent {
        model: PagerOptions;
        
    }
    interface PagerClickEvent extends ej.BaseEvent, PagerEvent{
        currentPage: number;
    }
 class ProgressBar extends ej.Widget {
        static fn: ProgressBar;
        constructor(element: JQuery, options?: ProgressBarOptions);
        constructor(element: Element, options?: ProgressBarOptions);
		model:ProgressBarOptions;
		defaults:ProgressBarOptions;
        enable(): void;
        disable(): void;
        getValue(): number;
        getPercentage(): number;
		destroy(): void;

    }
    interface ProgressBarOptions {
        text?: string;
        cssClass?: string;
        minValue?: number;
        maxValue?: number;
        value?: (number|string);
        percentage?: (number|string);
        height?: (number|string);
        width?: (number|string);
        enabled?: boolean;
        enableRTL?: boolean;
        enablePersistence?: boolean;
        showRoundedCorner?: boolean;
        htmlAttributes?: Object;
        start? (e: ProgressBarStartEvent): void;
        complete? (e: ProgressBarCompleteEvent): void;
        change? (e: ProgressBarChangeEvent): void;
        create? (e: ProgressBarEvent): void;
        destroy? (e: ProgressBarEvent): void;
    }

    interface ProgressBarEvent extends ej.BaseEvent {
        model: ProgressBarOptions;
    }
    interface ProgressBarChangeEvent extends ej.BaseEvent, ProgressBarEvent {
        value: number;
        percentage: number;
    }
    interface ProgressBarStartEvent extends ej.BaseEvent, ProgressBarEvent, ProgressBarChangeEvent {
        value: number;
        percentage: number;
    }
    interface ProgressBarCompleteEvent extends ej.BaseEvent, ProgressBarEvent, ProgressBarChangeEvent {
        value: number;
        percentage: number;
    }
   
    class RadioButton extends ej.Widget {
        static fn: RadioButton;
        constructor(element: JQuery, options?: RadioButtonOptions);
        constructor(element: Element, options?: RadioButtonOptions);
		model:RadioButtonOptions;
		defaults:RadioButtonOptions;
        enable(): void;
        disable(): void;
		destroy(): void;
    }
    interface RadioButtonOptions {
        id?: string;
        name?: string;
        value?: string;
        checked?: boolean;
        cssClass?: string;
        text?: string;
	htmlAttributes?: Object;
        enableRTL?: boolean;
        enablePersistence?: boolean;
        idPrefix?: string;
        validationRules?: any;
        validationMessage?: any;
        size?: ej.RadioButtonSize;
        enabled?: boolean;  
        beforeChange? (e: RadioButtonChangeEvent): void;
        change? (e: RadioButtonChangeEvent): void;
        create? (e: RadioButtonEvent): void;
        destroy? (e: RadioButtonEvent): void;
    }
    interface RadioButtonEvent extends ej.BaseEvent {
        model: RadioButtonOptions;
    }
    interface RadioButtonChangeEvent extends ej.BaseEvent, RadioButtonEvent {
        isChecked: boolean;
    }


   class Rating extends ej.Widget {
        static fn: Rating;
        constructor(element: JQuery, options?: RatingOptions);
        constructor(element: Element, options?: RatingOptions);
		model:RatingOptions;
		defaults:RatingOptions;
        show(): boolean;
        hide(): boolean;
        reset(): void;
        refresh(): void;
        getValue(): number;
        setValue(value: number): void;
		destroy(): void;
    }

    interface RatingOptions {
        maxValue?: number;
        minValue?: number;
        value?: (number|string);
        allowReset?: boolean;
        shapeWidth?: number;
        shapeHeight?: number;
        orientation?: ej.Rating.Orientation;
        incrementStep?: number;
        readOnly?: boolean;
        enabled?: boolean;
        showTooltip?: boolean;
        precision?: ej.Rating.Precision;
        cssClass?: string;
        width?: (number|string);
        height?: (number|string);
        enablePersistence?: boolean;
        create?(e: RatingEvent): void;
        click?(e: RatingClickEvent): void;
        mouseover?(e: RatingMouseOverEvent): void;
        mouseout?(e: RatingMouseOutEvent): void;
        change?(e: RatingChangeEvent): void;
        destroy?(e: RatingEvent): void;
    }
    interface RatingEvent extends ej.BaseEvent {
        model: RatingOptions;
    }

    interface RatingClickEvent extends ej.BaseEvent, RatingEvent {
        e: Object;
        value: number;
        prevValue: number;
    }

    interface RatingMouseOverEvent extends ej.BaseEvent, RatingEvent {
        e: Object;
        value: number;
        index: number;
    }
    interface RatingMouseOutEvent extends ej.BaseEvent, RatingEvent {
        e: Object;
        value: number;      
    }
    interface RatingChangeEvent extends ej.BaseEvent, RatingEvent {    
        value: number;
        prevValue: number;
    }
export module Rating{

enum Orientation
{
Horizontal,
Vertical
}
enum Precision{
Full,
Half,
Exact
}
}
class Ribbon extends ej.Widget {
    static fn: Ribbon;
    constructor(element: JQuery, options?: RibbonOptions);
    constructor(element: Element, options?: RibbonOptions);
	model:RibbonOptions;
    defaults: RibbonOptions;
    addContextualTabs(contextualTabSet: Element, index?: number): any;
    addTab(tabText: string, ribbonGroups: Array < Element>, index?: number): any;
    addTabGroup(tabIndex: number, tabGroup: Element, grpIndex?: number): any;
    addTabGroupContent(tabIndex: number, grpIndex: number, subGrpIndex: number, content: Element, contentIndex?: number): any;
    destroy(): void ;
    collapse(): void ;
    expand(): void ;
    getTabText(index: number): string;
    hideContextualTab(text: string): any;
    hideTab(text: string): any;
    isEnable(text: string): boolean;
    isVisible(text: string): boolean;
    removeTab(tabIndex: number): void;
    setTabText(oldText: string, newText: string): string;
    showContextualTab(text: string): any;
    showTab(text: string): any;
    showBackstage(): void;
    hideBackstage(): void;
}
interface RibbonOptions {
    width?: (number|string);
    allowResizing?: boolean;
    applicationTab?: RibbonApplicationTab;
    contextualTabs?: Array<RibbonContextualTab>;
    tabs?: Array<RibbonTab>;
    disabledItemIndex?: Array<number>;
    enabledItemIndex?: Array<number>;
    selectedItemIndex?: number;
    showQAT?: boolean;
    create? (e: RibbonBaseEvent): void;
    destory? (e: RibbonBaseEvent): void;
    groupClick? (e: RibbonGroupClick): void;
    groupExpand? (e: RibbonGroupExpand): void;
    tabAdd? (e: RibbonTabAdd): void;
    tabCreate? (e: RibbonBaseEvent): void;
    tabRemove? (e: RibbonTabRemove): void;
    tabSelect? (e: RibbonTabSelect): void;
    toggleButtonClick? (e: RibbonToggleButtonClick): void;
    beforeTabRemove? (e: RibbonBeforeTabRemove): void;
    galleryItemClick? (e: RibbonGalleryItemClick): void;
    backstageItemClick? (e: RibbonBackstageItemClick): void;
    tabClick? (e: RibbonTabClick): void;
    collapse? (e: RibbonCollapse): void;
    destroy? (e: RibbonDestroy): void
    expand? (e: RibbonExpand): void;
    qatMenuItemClick? (e: RibbonQatMenuItemClick): void;
    }
//#region interfaces

interface BackstageSettings
{
    headerWidth?: (number|string);
    height?: (number|string);
    width?: (number|string);
    pages?: Array<BackstagePage>;
    text?: string;

}

interface BackstagePage
{
    itemType?: ej.Ribbon.itemType;
    contentID?: string;
    text?: string;
    id?: string;
    enableSeparator?: boolean;
}

interface RibbonApplicationTab {
    type?: ej.Ribbon.applicationTabType;
    backstageSettings?: BackstageSettings;
    menuItemID?: string;
    menuSettings?: ej.MenuOptions;
}

interface RibbonContextualTab {
    backgroundColor?: string;
    borderColor?: string;
    tabs?: Array<RibbonTab>;
}

interface RibbonTab {
    groups?: Array<RibbonTabGroup>;
    id?: string;
    text?: string;
}
interface RibbonTabGroup {
    contentID?: string;
    text?: string;
    type?: string;
    alignType?: ej.Ribbon.alignType;
    customContent?: string;
    enableGroupExpander?: boolean;
    content?: Array<RibbonTabContent>;
}

interface RibbonTabContent {
    defaults?: RibbonContentDefaults;
    groups?: Array<RibbonContentGroup>;
}
interface RibbonContentDefaults {
    height?: number;
    width?: string;
    isBig?: boolean;
    type?: ej.Ribbon.type;
}
interface RibbonContentGroup {
    id?: string;
    toolTip?: string;
    type?: ej.Ribbon.type;
    contentID?: string;
    cssClass?: string;
    enableSeparator?: boolean;
    isBig?: boolean;
    text?: string;
    columns?: number;
    itemHeight?: (number|string);
    itemWidth?: (number|string);
    expandedColumns?: number;
    buttonSettings?: ej.ButtonOptions;
    dropdownSettings?: ej.DropDownListOptions;
    splitButtonSettings?: ej.SplitButtonOptions;
    toggleButtonSettings?: ej.ToggleButtonOptions;
    galleryItems?: Array<GalleryItem>;
    customGalleryItems?: Array<CustomGalleryItem>;
    customToolTip?: CustomToolTip;
    quickAccessMode?: ej.Ribbon.quickAccessMode;
}

//#endregion interfaces
interface RibbonBaseEvent extends ej.BaseEvent {
    model?: RibbonOptions;
}
interface RibbonGroupClick extends RibbonBaseEvent {
    target?: JQuery;
}
interface RibbonGalleryItemClick extends RibbonBaseEvent{
	target?: JQuery;
}
interface RibbonBackstageItemClick extends RibbonBaseEvent {
    target?: JQuery;
}

interface RibbonTabClick extends RibbonBaseEvent {
    target?: JQuery;
}
interface RibbonCollapse extends RibbonBaseEvent {
    target?: JQuery;
}
interface RibbonDestroy extends RibbonBaseEvent {
    deleteIndex: number;
}
interface RibbonExpand extends RibbonBaseEvent {
    target?: JQuery;
}
interface RibbonGroupExpand extends RibbonBaseEvent {
    target?: JQuery;
}
interface RibbonOnTabCreate extends RibbonBaseEvent {
}

interface RibbonTabSelect extends RibbonBaseEvent {
    prevActiveHeader: JQuery;
    prevActiveIndex: number;
    activeHeader: JQuery;
    activeIndex: number;
}

interface RibbonTabClick extends RibbonBaseEvent, RibbonTabSelect {
}

interface RibbonTabRemove extends RibbonBaseEvent {
    removedTab: JQuery;
}

interface RibbonTabAdd extends RibbonBaseEvent {
    tabHeader: JQuery;
    tabContent: JQuery;
}
interface RibbonToggleButtonClick extends RibbonBaseEvent {
    target?: JQuery;
    action?: string;
}

interface RibbonBeforeTabRemove extends RibbonBaseEvent {
    index: number;
}

interface RibbonQatMenuItemClick extends RibbonBaseEvent {
    text?: string;
}  

export module Ribbon {
   enum alignType {
        rows,
        columns,
    }

    enum type {
        button,
        splitbutton,
        togglebutton,
        dropdownlist,
		gallery,
        custom
    }
    enum customItemType{
	menu,
	button
    }
    enum itemType
    {
        tab,
        button
    }
    enum applicationTabType
    {
        menu,
        backstage
    }
    enum quickAccessMode {
        none,
        toolbar,
		menu
    }

}
interface GalleryItem {
        text?: string;
        toolTip?: string;
        buttonSettings?: ej.ButtonOptions;
    }
    interface CustomGalleryItem {
        text?: string;
        toolTip?: string;
        type?: ej.Ribbon.customItemType;
        menuId?: string;
        menuSettings?: ej.MenuOptions;
        buttonSettings?: ej.ButtonOptions;
    }
    interface CustomToolTip {
        text?: string;
        content?: string;
		prefixIcon?: string;
    }
   class Rotator extends ej.Widget {
        static fn: Rotator;
        constructor(element: JQuery, options?: RotatorOptions);
        constructor(element: Element, options?: RotatorOptions);
		model:RotatorOptions;
		defaults:RotatorOptions;
        enable(): void;
        disable(): void;
        slideNext(): void;
        slidePrevious(): void;
        play(): void;
        pause(): void;
        getIndex(): number;
        gotoIndex(index: number): void;
		destroy(): void;
    }

    interface RotatorOptions{
        cssClass?: string;
        dataSource?: Object;
        query?: Object;
        fields?: RotatorFields;
        enabled?: boolean;
        displayItemsCount?: (number|string); 
        navigateSteps?: (number|string);
        animationSpeed?: (number|string); 
        startIndex?: (number|string); 
        showPlayButton?: boolean;
        enableAutoPlay?: boolean;
        showNavigateButton?: boolean;
        slideWidth?: (number|string); 
        isResponsive?: boolean;
        delay?: (number|string);
        slideHeight?: (number|string); 
        frameSpace?: (number|string);
        enableResize?: boolean;
        orientation?: ej.Orientation;
        pagerPosition?: ej.Rotator.PagerPosition;
        showThumbnail?: boolean;
        showPager?: boolean;
        stopOnHover?: boolean;
        thumbnailSourceID?: string;
        showCaption?: boolean;
        allowKeyboardNavigation?: boolean;
        enableRTL?: boolean;
		circularMode?: boolean;
        animationType?: string;
        create? (e: RotatorEvent): void;
        change? (e: RotatorChangeEvent): void;
        start? (e: RotatorStartEvent): void;
        stop? (e: RotatorStopEvent): void;
        thumbItemClick? (e: RotatorThumbItemClickEvent): void;
        pagerClick? (e: RotatorPagerClickEvent): void;
        destroy? (e: RotatorEvent): void;
    }

    interface RotatorFields {
        text?: string;
        url?: string;
        linkAttribute?: string;
        targetAttribute?: string;
        thumbnailText?: string;
        thumbnailUrl?: string;
    }

    interface RotatorEvent extends ej.BaseEvent {
        model: RotatorOptions;
    }

    interface RotatorClickEvent extends ej.BaseEvent, RotatorEvent {
        activeItemIndex: number;
        itemID?: string;
    }
    interface RotatorChangeEvent extends ej.BaseEvent, RotatorEvent {
        activeItemIndex: number;
        itemID?: string;
    }
    interface RotatorStartEvent extends ej.BaseEvent, RotatorEvent {
        activeItemIndex: number;
        itemID?: string;
    }
    interface RotatorStopEvent extends ej.BaseEvent, RotatorEvent {
        activeItemIndex: number;
        itemID?: string;
    }
    interface RotatorThumbItemClickEvent extends ej.BaseEvent, RotatorEvent {
        activeItemIndex: number;
        itemID?: string;
    }
    interface RotatorPagerClickEvent extends ej.BaseEvent, RotatorEvent {
        activeItemIndex: number;
        itemID?: string;
    }

export module Rotator
{
enum PagerPosition
{
 TopLeft,
 TopRight,
 BottomLeft,
 BottomRight,
 TopCenter,
 Outside
}
}
   class RTE extends ej.Widget {
        static fn: RTE;
        constructor(element: JQuery, options?: RTEOptions);
        constructor(element: Element, options?: RTEOptions);
		model:RTEOptions;
		defaults:RTEOptions;
		disable(): void;
		enable(): void;
        show(): void;
		refresh(): void;
        hide(): void;
        getHtml(encode:boolean): string;
        setHtml(value: string): void;
        getText(): string;
        executeCommand(commandName : string, args: string): boolean;
        getDocument(): string;
        pasteContent(html: any): void;
        selectAll(): void;
        createRange(): Object;
        selectRange(range: Object,node: any): void;
        focus(): void;
        disableToolbarItem(id: string): void;
        enableToolbarItem(id: string): void;
        removeToolbarItem(id: string): void;
        getCommandStatus(value: string): string;
        getSelectedHtml(): string;
		setColorPickerType(value: string): void;
        insertRow(before: boolean, cell: HTMLTableCellElement): void;
        insertColumn(before: boolean, cell: HTMLTableCellElement): void;
        removeRow(cell: HTMLTableCellElement): void;
        removeColumn(cell: HTMLTableCellElement): void;
        removeTable(table: HTMLTableElement): void;
        destroy(): void;
    }

    interface RTEOptions {
        allowEditing?: boolean;
		imageBrowser?: ImageBrowserOptions;
		fileBrowser?: FileBrowserOptions;
        allowKeyboardNavigation?: boolean;
        autoHeight?: boolean;
        cssClass?: string;
        height?: (number|string);
        width?: (number|string);
        enabled?: boolean;
        enableHtmlEncode?: boolean;
        maxLength?: (number|string);
        minWidth?: (number|string);
        maxWidth?: (number|string);
        minHeight?: (number|string);
        maxHeight?: (number|string);
        showToolbar?: boolean;
        showFooter?: boolean;
		htmlAttributes?: Object;
        showHtmlSource?: boolean;
        showWordCount?: boolean;
        showCharCount?: boolean;
        focusOnLoad?: boolean;
        autoGrow?: boolean;
        showHtmlTagInfo?: boolean;
        isResponsive?: boolean;
        showClearAll?: boolean;
        iframeAttributes?: Object;
        showClearFormat?: boolean;
        showFontOption?: boolean;
        showDimensions?: boolean;
		enableResize?: boolean;
        enableXHTML?: boolean;
        locale?: string;
        name?: string;
        tools?: RTETools;
        toolsList?: Array<string>;
        colorCode?: Array<string>;
        format?: Array<RTEFormat>;
        fontName?: Array<RTEFontName>;
        fontSize?: Array<RTEFontSize>;
        tableRows?: number;
        tableColumns?: number;
        colorPaletteRows?: number;
        colorPaletteColumns?: number;
        showCustomTable?: boolean;
        value?: string;
		externalCSS:string;
        undoStackLimit?: number;
        allowResizing?: boolean;
        enablePersistence?: boolean;
        enableRTL?: boolean;
        showRoundedCorner?: boolean;
        change? (e: RTEChangeEvent): void;
        execute? (e: RTEExecuteEvent): void;
        keydown? (e: RTEKeyDownEvent): void;
        keyup? (e: RTEKeyUPEvent): void;
        create? (e: RTEEvent): void;
        destroy? (e: RTEEvent): void;
		preRender?(e: RTEPrerenderEvent): void;
        select? (e: RTESelect): void;
    }

    interface RTETools {
        formatStyle: Array<string>;
        style: Array<string>;
        alignment: Array<string>;
        lists: Array<string>;
        indenting: Array<string>;
        doAction: Array<string>;
        links: Array<string>;
        images: Array<string>;
        media: Array<string>;
        tables: Array<string>;
        view: Array<string>;
    }
    interface RTEFormat {
        text?: string;
        value?: string;
        spriteCssClass?: string;
    }

    interface RTEFontName {
        text?: string;
        value?: string;
    }
    interface RTEFontSize {
        text?: string;
        value?: string;
    }
	
	interface ImageBrowserOptions {
        filePath?: string;
        extensionAllow?: string;
		ajaxAction?: string;
		uploadAction?: string;
    } 
	
	interface FileBrowserOptions {
        filePath?: string;
        extensionAllow?: string;
		ajaxAction?: string; 
    }
	
    interface RTEEvent extends ej.BaseEvent {
        model: RTEOptions;
    }
	interface RTEPrerenderEvent extends ej.BaseEvent {
        model: RTEOptions;
    }
    interface RTESelect extends ej.BaseEvent {
       model: RTEOptions;
    }
    interface RTEChangeEvent extends ej.BaseEvent,RTEEvent {
        text: string;
        htmlText: string;
    }
    interface RTEExecuteEvent extends ej.BaseEvent, RTEEvent {
        commandName: string;      
    }
    interface RTEKeyDownEvent extends ej.BaseEvent, RTEEvent {
        keyCode: number;      
    }
    interface RTEKeyUPEvent extends ej.BaseEvent, RTEEvent {
        keyCode: number;
    }
 
   class Slider extends ej.Widget {
        static fn: Slider;
        constructor(element: JQuery, options?: SliderOptions);
        constructor(element: Element, options?: SliderOptions);
		model:SliderOptions;
		defaults:SliderOptions;
        enable(): void;
        disable(): void;
        getValue(): number;
        setValue(value:string): void;
		destroy(): void;
    }
    interface SliderOptions {
        orientation?: ej.Orientation;
        enableAnimation?: boolean;
        animationSpeed?: number;
        showTooltip?: boolean;
        cssClass?: string;
        showRoundedCorner?: boolean;
        readOnly?: boolean;
        enableRTL?: boolean;
        htmlAttributes?: Object;
        minValue?: number;
        maxValue?: number;
        sliderType?: ej.SliderType;
        value?: (number|string);
        values?:(Array<number>|Array<string>); 
        incrementStep?: number;
        height?: (number|string); 
        width?: (number|string); 
        enabled?: boolean;
        showScale?: boolean;
        largeStep?: number;
        smallStep?: number;
        showSmallTicks?: boolean;
        enablePersistence?: boolean;
        start?(e: SliderEvent): void;
        stop?(e: SliderEvent): void;
        slide?(e: SliderEvent): void;
        change?(e: SliderEvent): void;
        create?(e: SliderEvent): void;
        destroy?(e: SliderEvent): void;

    }

    interface SliderEvent extends ej.BaseEvent {
        model: SliderOptions;
    }

    interface SliderStartEvent extends ej.BaseEvent, SliderEvent {
        id: string;
        value: number;
        sliderIndex: number;
    }

    interface SliderStopEvent extends ej.BaseEvent, SliderEvent, SliderStartEvent {
       value: number;
	   sliderIndex: number;
    }
    interface SliderSlideEvent extends ej.BaseEvent, SliderEvent, SliderStartEvent {
       value: number;
	   sliderIndex: number;
    }
    interface SliderChangeEvent extends ej.BaseEvent, SliderEvent, SliderStartEvent {
       value: number;
	   sliderIndex: number;
    }


   class SplitButton extends ej.Widget {
        static fn: SplitButton;
        constructor(element: JQuery, options?: SplitButtonOptions);
        constructor(element: Element, options?: SplitButtonOptions);
		model:SplitButtonOptions;
		defaults:SplitButtonOptions;
        enable(): void;
        disable(): void; 
        destroy(): void;       
        hide(): void;
        show(): void;
    }
    interface SplitButtonOptions {
        size?: string;
		arrowPosition?: ej.ArrowPosition;
		buttonMode?: ej.ButtonMode;
        width?: (number|string); 
        height?: (number|string); 
        enabled?: boolean;
        text?: string;
        contentType?: ej.ContentType;
        imagePosition?: ej.ImagePosition;
        targetID?: string;
        showRoundedCorner?: boolean;
        prefixIcon?: string;
        suffixIcon?: string;
        cssClass?: string;
        enableRTL?: boolean;
		beforeOpen? (e: SplitButtonBaseEvent): void;
		open? (e: SplitButtonEvent): void;
        create? (e: SplitButtonBaseEvent): void;
        click? (e: SplitButtonClickEvent): void;
        itemMouseOver? (e: SplitButtonEvent): void;
        itemMouseOut? (e: SplitButtonEvent): void;
        itemSelected? (e: SplitButtonSelectEvent): void;
		close? (e: SplitButtonEvent): void;
        destroy? (e: SplitButtonBaseEvent): void;
    }

    interface SplitButtonBaseEvent extends ej.BaseEvent {
        model: SplitButtonOptions;
    }

   interface SplitButtonClickEvent extends ej.BaseEvent, SplitButtonBaseEvent {
       status: boolean;      
   }
    interface SplitButtonEvent extends ej.BaseEvent, SplitButtonBaseEvent {
        status: boolean;
        text: string;
        element: Object;
        ID: string;
        event: Object;
    }
   interface SplitButtonSelectEvent extends ej.BaseEvent, SplitButtonBaseEvent {
       status: boolean;
       ID: string;
       Text: string;
   }
 
   class Splitter extends ej.Widget {
        static fn: Splitter;
        constructor(element: JQuery, options?: SplitterOptions);
        constructor(element: Element, options?: SplitterOptions);
		model:SplitterOptions;
		defaults:SplitterOptions;		
        refresh(): void;
        collapse(paneIndex: number): void;
        expand(paneIndex: number): void;
        addItem(content: string, property: SplitterPane, index?: number):any;
        removeItem(index: number): any;
        destroy(): void;
    }
    interface SplitterOptions {
        cssClass?: string;
		enableAnimation?: boolean;
        orientation?: ej.Orientation;
        properties?: Array<SplitterPane>;
        height?: (number|string);
        width?: (number|string); 
        enableAutoResize?: boolean;
        isResponsive?: boolean;
        enableRTL?: boolean;
        animationSpeed?: number;
        beforeExpandCollapse? (e: SplitterEvent): void;
        expandCollapse? (e: SplitterEvent): void;
        resize? (e: SplitterResizeEvent): void;
        create? (e: SplitterBaseEvent): void;
        destroy? (e: SplitterBaseEvent): void;

    }

    interface SplitterPane {
        paneSize?: string;
        minSize?: string;
        maxSize?: string;
        collapsible?: boolean;
        resizable?: boolean;
    }

    interface SplitterBaseEvent extends ej.BaseEvent {
        model: SplitterOptions;
    }

    interface SplitterEvent extends ej.BaseEvent, SplitterBaseEvent {
        collapsed: Object;
        expanded: Object;
        splitbarIndex: number;
    }
   interface SplitterResizeEvent extends ej.BaseEvent, SplitterBaseEvent {
       prevPane: Object;
       nextPane: Object;
       splitbarIndex: number;
   }

   class Tab extends ej.Widget {
        static fn: Tab;
        constructor(element: JQuery, options?: TabOptions);
        constructor(element: Element, options?: TabOptions);
		model:TabOptions;
		defaults:TabOptions;
        enable(): void;
        disable(): void;  
        showItem(index: number): void;  
        hideItem(index: number): void;  
        getItemsCount(): number;  
        addItem(url: string, displayLabel: string, index?: number, cssClass?: string, id?: string): void;
        removeItem(index: number): void;
        show(): void;
        hide(): void;
        destroy(): void;
    }

    interface TabOptions {
        collapsible?: boolean;
        ajaxSettings: AjaxSettings;
        disabledItemIndex?: Array<number>;
        enabledItemIndex?: Array<number>;
        hiddenItemIndex?: (Array<number>|Array<string>);
        events?: string;
        idPrefix?: string;
        heightAdjustMode?: string;
        selectedItemIndex?: (number|string);
        cssClass?: string;
        enableAnimation?: boolean;
        showCloseButton?: boolean;
        showReloadIcon?: boolean;
		enableTabScroll?: boolean;
        headerPosition?: string;
        headerSize?: string;
        width?: (number|string); 
        height?: (number|string); 
        enableRTL?: boolean;
        allowKeyboardNavigation?: boolean;
        showRoundedCorner?: boolean;
        enablePersistence?: boolean;
        enabled?: boolean;
        ajaxLoad? (e: TabAjaxLoadEvent): void;
        ajaxBeforeLoad? (e: TabAjaxBeforeLoadEvent): void;
        ajaxSuccess? (e: TabAjaxSuccessEvent): void;
        ajaxError? (e: TabAjaxErrorEvent): void;
        active? (e: TabActiveEvent): void;
        beforeActive? (e: TabBeforeActiveEvent): void;
        itemAdd? (e: TabItemAddEvent): void;
        itemRemove? (e: TabItemRemoveEvent): void;
        beforeItemRemove? (e: TabBeforeItemRemoveEvent): void;     
        create? (e: TabBaseEvent): void;
        destroy? (e: TabBaseEvent): void;      
    }

    interface TabBaseEvent extends ej.BaseEvent {
        model: TabOptions;
    }
    interface TabActiveEvent extends ej.BaseEvent, TabBaseEvent {
        prevActiveHeader: Object;
        prevActiveIndex: number;
        activeHeader: Object;
        activeIndex: number;
    }

    interface TabBeforeActiveEvent extends ej.BaseEvent, TabBaseEvent, TabActiveEvent {
        prevActiveHeader: Object;
        prevActiveIndex: number;
        activeHeader: Object;
        activeIndex: number;
    }
    interface TabItemAddEvent extends ej.BaseEvent, TabBaseEvent {
        tabHeader: Object;
        tabContent: Object;
    }
    interface TabItemRemoveEvent extends ej.BaseEvent, TabBaseEvent {
        removedTab: Object;      
    }
     interface TabBeforeItemRemoveEvent extends ej.BaseEvent, TabBaseEvent {
        index: number;      
     }
    interface TabAjaxSuccessEvent extends ej.BaseEvent, TabBaseEvent {
        data: any;
        url: string;
        content: Object;
    }
    interface TabAjaxErrorEvent extends ej.BaseEvent, TabBaseEvent {
        data: any;
        url: string;        
    }
    interface TabAjaxBeforeLoadEvent extends ej.BaseEvent, TabBaseEvent, TabActiveEvent {        
        url: string;
    }
    interface TabAjaxLoadEvent extends ej.BaseEvent, TabBaseEvent, TabActiveEvent {
        url: string;
    }
 
   class TagCloud extends ej.Widget {
        static fn: TagCloud;
        constructor(element: JQuery, options?: TagCloudOptions);
        constructor(element: Element, options?: TagCloudOptions);     
		model:TagCloudOptions;
		defaults:TagCloudOptions;
        insert(tag: TagCloudField): void;
        insertAt(tag: TagCloudField, position:number): void;
        remove(text: string): void;
        removeAt(position: number): void;
    }
    interface TagCloudOptions {
        cssClass?: string;
        dataSource?: Object;
        query?: Object;
        fields?: TagCloudField;
        showTitle?: boolean;
        titleText?: string;
        titleImage?: string;
        format?: ej.Format;
        enableRTL?: boolean;
        minFontSize?: string;
        maxFontSize?: string;
        mouseover?(e: TagCloudEvent): void;
        mouseout?(e: TagCloudEvent): void;
        click?(e: TagCloudEvent): void;
        create?(e: TagCloudBaseEvent): void;
        destroy?(e: TagCloudBaseEvent): void;

    }

    interface TagCloudField {
        text?: string;
        url?: string;
        frequency?: number;
        htmlAttributes?: Object;
    }

    interface TagCloudBaseEvent extends ej.BaseEvent {
        model: TagCloudOptions;
    }

    interface TagCloudEvent extends ej.BaseEvent, TagCloudBaseEvent {
        value: string;
        url: string;
        eventType: string;
    }


   class TimePicker extends ej.Widget {
        static fn: TimePicker;
        constructor(element: JQuery, options?: TimePickerOptions);
        constructor(element: Element, options?: TimePickerOptions);
		model:TimePickerOptions;
		defaults:TimePickerOptions;
        enable(): void;
        disable(): void;
        getValue(): string;
        setCurrentTime(): void;
        show(): void;
        hide(): void;
        destroy(): void;
    }

    interface TimePickerOptions {
        cssClass?: string;
        enableAnimation?: boolean;
        timeFormat?: string;
        value?: string;
        locale?: string;
        readOnly?: boolean;
        showPopupButton?: boolean;
        interval?: number;
        htmlAttributes?: Object;
        hourInterval?: number;
        minutesInterval?: number;
        secondsInterval?: number;
        height?: string;
        width?: string;
        minTime?: string;
        maxTime?: string;
        showRoundedCorner?: boolean;
        enableRTL?: boolean;
        popupHeight?: string;
        popupWidth?: string;
        enabled?: boolean;
        enablePersistence?: boolean;
        focusIn? (e: TimePickerEvent): void;
        focusOut? (e: TimePickerEvent): void;
        beforeChange? (e: TimePickerBaseEvent): void;
        change? (e: TimePickerEvent): void;
        select? (e: TimePickerEvent): void;
        create? (e: TimePickerBaseEvent): void;
        destroy? (e: TimePickerBaseEvent): void;
        beforeOpen? (e: TimePickerEvent): void;
        open? (e: TimePickerEvent): void;
        close? (e: TimePickerEvent): void;
    }

    interface TimePickerBaseEvent extends ej.BaseEvent {
        model: TimePickerOptions;
    }
    interface TimePickerEvent extends ej.BaseEvent, TimePickerBaseEvent {        
        value: string;
        prevTime: string;
    }
    
 
   class ToggleButton extends ej.Widget {
        static fn: ToggleButton;
        constructor(element: JQuery, options?: ToggleButtonOptions);
        constructor(element: Element, options?: ToggleButtonOptions);
		model:ToggleButtonOptions;
		defaults:ToggleButtonOptions;
        enable(): void;
        disable(): void;
        destroy(): void;   
    }
    interface ToggleButtonOptions {
        size?: ej.ButtonSize;
        type?: ej.ButtonType;
        width?: string;
        height?: string;
        enabled?: boolean;
        toggleState?: boolean;
        htmlAttributes?: Object;
        defaultText?: string;
        preventToggle?: boolean;
        activeText?: string;
        contentType?: ej.ContentType;
        imagePosition?: ej.ImagePosition;
        showRoundedCorner?: boolean;
        enablePersistence?: boolean;
        cssClass?: string;
        defaultPrefixIcon?: string;
        defaultSuffixIcon?: string;
        activePrefixIcon?: string;
        activeSuffixIcon?: string;
        enableRTL?: boolean;
        create? (e: ToggleButtonBaseEvent): void;
        click? (e: ToggleButtonClickEvent): void;
        change? (e: ToggleButtonChangeEvent): void;
        destroy? (e: ToggleButtonBaseEvent): void;
    }

    interface ToggleButtonBaseEvent extends ej.BaseEvent {
        model: ToggleButtonOptions;
    }

    interface ToggleButtonClickEvent extends ej.BaseEvent, ToggleButtonBaseEvent {
        isChecked: boolean;
        status: boolean;
    }
    interface ToggleButtonChangeEvent extends ej.BaseEvent, ToggleButtonBaseEvent {
        isChecked: boolean;        
    }
	
	
   class Toolbar extends ej.Widget {
        static fn: Toolbar;
        constructor(element: JQuery, options?: ToolbarOptions);
        constructor(element: Element, options?: ToolbarOptions);
		model:ToolbarOptions;
		defaults:ToolbarOptions;
        enable(): void;
        disable(): void;
        show(): boolean;
        hide(): boolean;
        disableItem(lielement: Object): void;
        disableItemByID(liid: string): void;
        enableItem(lielement: Object): void;
        enableItemByID(liid: string): void;
        selectItem(lielement: Object): void;
        selectItemByID(liid: string): void;
        deselectItem(lielement: Object): void;
        deselectItemByID(liid: string): void;
        removeItem(lielement: Object): void;
        removeItemByID(liid: string): void;
        destroy(): void;
    }
    interface ToolbarOptions {
        height?: string;
        cssClass?: string;
        width?: string;
        enabled?: boolean;
        hide?: boolean;
        isResponsive?: boolean;
        enableSeprator?: boolean;
        orientation?: ej.Orientation;
        enableRTL?: boolean;
        showRoundedCorner?: boolean;
        htmlAttributes?: Object; 
        dataSource?: Object;
        query?: Object;
        fields?: ToolbarFields;
        create? (e: ToolbarBaseEvent): void;
        click? (e: ToolbarEvent): void;
        itemHover? (e: ToolbarEvent): void;
        itemLeave? (e: ToolbarEvent): void;
        destroy? (e: ToolbarBaseEvent): void;
    }
    interface ToolbarFields {
        id?: string;
        tooltipText?: string;
        imageUrl?: string;
        text?: string;
        imageAttributes?: string;
        spriteCssClass?: string;
        htmlAttributes?: Object;
        group?: string;
    }

    interface ToolbarBaseEvent extends ej.BaseEvent {
        model: ToolbarOptions;
    }
    interface ToolbarEvent extends ej.BaseEvent, ToolbarBaseEvent {
        currentTarget: Object;
        target: Object;
        status: boolean;
    }


 
   class TreeView extends ej.Widget {
        static fn: TreeView;
        constructor(element: JQuery, options?: TreeViewOptions);
        constructor(element: Element, options?: TreeViewOptions);
		model:TreeViewOptions;
		defaults:TreeViewOptions;
        enable(): void;
        disable(): void;
        refresh(): void;
        expandAll(): void;
        collapseAll(): void;
        checkAll(): void;
        unCheckAll(): void;
        getSelectedNode(): Object;
        getText(node: Object): string;
        selectNode(node: Object): void;
        unselectNode(node: Object): void;
        enableNode(node: Object): void;
        disableNode(node: Object): void;
        addNode(newNodeText: any, targetNode: Object): void;
        addNodes(collection: any, targetNode: Object): void;
        removeNode(node:Object): void;
        removeAll(): void;
        getCheckedNodes(): Object;
        checkNode(node: Object):void;
        uncheckNode(node: Object): void;
        expandNode(node: Object): void;
        collapseNode(node: Object): void;
        showNode(node: Object): void;
        hideNode(node: Object): void;
        show(): void;
        hide(): void;
		isChildLoaded(node: Object): boolean;
        isNodeChecked(node: Object): boolean;
        isExpanded(node: Object): boolean;
        hasChildNode(node: Object): boolean;
        isVisible(node: Object): boolean;
        isExist(node: Object): boolean;
        isSelected(node: Object): boolean;
        isDisabled(node: Object): boolean;
        getTreeData(): Object; 
        getExpandedNodes(): Object;
        getVisibleNodes(): Object;
        getExpandedNodesIndex(): Array<number>;
        getCheckedNodesIndex(): Array<number>;
        getSelectedNodeIndex(): Array<number>;
        getNodeCount(): number;
        getNode(node: Object): Object;
        getNodeIndex(node: Object): number;
        getNodeByIndex(index: number): Object;
        getParent(node: Object): Object;
        updateText(node: Object, newText: string): boolean;
        insertAfter(nodeObj: any, afterEle: Object): void;
        insertBefore(nodeObj: any, beforeEle: Object): void;
        moveNode(srcNode: Object, desNode: Object, index: number): void;
        loadData(url: string, targetNode: Object): void;
        ensureVisible(node: Object): boolean;
    }

    interface TreeViewOptions {
        showCheckbox?: boolean;
        allowDragAndDrop?: boolean;
        allowDropChild?: boolean;
        allowDropSibling?: boolean;
        allowDragAndDropAcrossControl?: boolean;
        allowEditing?: boolean;
        allowKeyboardNavigation?: boolean;
        fields?: TreeViewFields;
        autoCheckParentNode?: boolean;
        loadOnDemand?: boolean;
        cssClass?: string;
        template?: string;
        enableRTL?: boolean;
        expandOn?: string;
        enablePersistence?: boolean;
        enabled?: boolean;
        expandedNodes?: Array<number>;
        width?: string;
        height?: string;
        autoCheck?: boolean;
        checkedNodes?: Array<number>;
        enableAnimation?: boolean;
        selectedNode?: number;
        enableMultipleExpand?: boolean;
        sortSettings?: TreeViewSortSettings;
        nodeClick? (e: TreeViewClickEvent): void;
        beforeExpand? (e: TreeViewNodeBeforeExpandEvent): void;
        nodeExpand? (e: TreeViewNodeExpandEvent): void;
        beforeCollapse? (e: TreeViewBeforeCollapseEvent): void;
        nodeCollapse? (e: TreeViewNodeCollapseEvent): void;
        beforeSelect? (e: TreeViewBeforeSelectEvent): void;
        nodeSelect? (e: TreeViewNodeSelectEvent): void;
        nodeCheck? (e: TreeViewNodeCheckEvent): void;
        nodeUncheck? (e: TreeViewNodeUnCheckEvent): void;
        inlineEditValidation? (e: TreeViewInlineEditValidationEvent): void;
        beforeEdit? (e: TreeViewBeforeEditEvent): void;
        nodeEdit? (e: TreeViewNodeEditEvent): void;
        keyPress? (e: TreeViewKeyPressEvent): void;
        nodeDragStart? (e: TreeViewDragStartEvent): void;
        nodeDrag? (e: TreeViewNodeDragEvent): void;
        nodeDragStop? (e: TreeViewNodeDragStopEvent): void;
        nodeDropped? (e: TreeViewNodeDroppedEvent): void;
        beforeAdd? (e: TreeViewBeforeAddEvent): void;
        nodeAdd? (e: TreeViewNodeAddEvent): void;
        beforeDelete? (e: TreeViewBeforeDeleteEvent): void;
        nodeDelete? (e: TreeViewNodeDeleteEvent): void;
        beforeCut? (e: TreeViewBeforeCutEvent): void;
        nodeCut? (e: TreeViewNodeCutEvent): void;
        beforePaste? (e: TreeViewBeforePasteEvent): void;
        nodePaste? (e: TreeViewNodePasteEvent): void;
        beforeLoad? (e: TreeViewBeforeLoadEvent): void;
        loadSuccess? (e: TreeViewLoadSuccessEvent): void;
        loadError? (e: TreeViewLoadErrorEvent): void;
        create? (e: TreeViewBaseEvent): void;
        destroy? (e: TreeViewBaseEvent): void;
    }
    interface TreeViewSortSettings {
        allowSorting?: boolean;
        sortOrder?: ej.SortOrder;
    }
   interface TreeViewFields {
       id?: string;
       text?: string;
       spriteCssClass?: string;
       expanded?: string;
       child?: string;
       selected?: string;
       linkAttribute?: Object;
       imageAttribute?: Object;
       htmlAttribute?: Object;
       imageUrl?: string;
       dataSource?: Object;
       haschild?: string;
       isChecked?: string;
       parentId?: string;
       query?: Object;
       tableName?: string;
    }
    interface TreeViewBaseEvent extends ej.BaseEvent {
        model: TreeViewOptions;
    }
    interface TreeViewBeforeEditEvent extends ej.BaseEvent, TreeViewBaseEvent {
        currentElement: Object;
    }
    interface TreeViewInlineEditValidationEvent extends ej.BaseEvent, TreeViewBaseEvent {
        id: string;
        oldText: string;
        newText: string;
    }
    interface TreeViewNodeEditEvent extends ej.BaseEvent, TreeViewBaseEvent {
        id: string;
        oldText: string;
        newText: string;
        target: Object;
        nodeDetails: Object;
        event: Object;
    }
    interface TreeViewKeyPressEvent extends ej.BaseEvent, TreeViewBaseEvent {
        keyCode: number;
        currentElement: Object;
        value: string;
        isExpanded: boolean;
        path: string;
        event: Object;
        id: string;
        parentId: string;
    }
    interface TreeViewNodeExpandEvent extends ej.BaseEvent, TreeViewBaseEvent {       
        currentElement: Object;
        value: string;
        isChildLoaded: boolean;
        id: string;
        parentId: string;       
    }
    interface TreeViewNodeCollapseEvent extends ej.BaseEvent, TreeViewBaseEvent {
        currentElement: Object;
        value: string;
        isChildLoaded: boolean;
        id: string;
        parentId: string;    
    }
    interface TreeViewNodeBeforeExpandEvent extends ej.BaseEvent, TreeViewBaseEvent {
        id: string;
        value: string;
        isChildLoaded: boolean;
        currentElement: Object;
        targetElement: Object;
        parentId: string;
        hasParent: boolean;
        async:boolean;
    }
    interface TreeViewBeforeCollapseEvent extends ej.BaseEvent, TreeViewBaseEvent {
        currentElement: Object;
        value: string;
        isChildLoaded: boolean;
        id: string;
        parentId: string;
    }
    interface TreeViewBeforeSelectEvent extends ej.BaseEvent, TreeViewBaseEvent {
        target: Object;
        nodeDetails: Object;
    }
    interface TreeViewNodeSelectEvent extends ej.BaseEvent, TreeViewBaseEvent {
        currentElement: Object;
        value: string;
        id: string;
        parentId: string;
    }
    interface TreeViewNodeCheckEvent extends ej.BaseEvent, TreeViewBaseEvent {
        currentElement: Object;
        value: string;
        isChecked: boolean;
        event: Object;
        id: string;
        parentId: string;
        currentCheckedNodes: Object;
        currentNode: Object;
    }
    interface TreeViewNodeUnCheckEvent extends ej.BaseEvent, TreeViewBaseEvent {
        currentElement: Object;
        value: string;
        isChecked: boolean;
        event: Object;
        id: string;
        parentId: string;
        currentCheckedNodes: Object;
        currentNode: Object;
    }
    interface TreeViewDragStartEvent extends ej.BaseEvent, TreeViewBaseEvent {
        target: Object;
        targetElementData: Object;
        dragTarget: Object;
        parentElement: Object;
        parentElementData: Object;
        event: Object;
    }
    interface TreeViewNodeDragEvent extends ej.BaseEvent, TreeViewBaseEvent {
        draggedElement: Object;
        draggedElementData: Object;
        dragTarget: Object;
        target: Object;
        targetElementData: Object;
        event: Object;
    }
    interface TreeViewNodeDragStopEvent extends ej.BaseEvent, TreeViewBaseEvent {
        draggedElement: Object;
        draggedElementData: Object;
        dropTarget: Object;
        target: Object;
        targetElementData: Object;
        position: string;
        event: Object;
    }
    interface TreeViewNodeDroppedEvent extends ej.BaseEvent, TreeViewBaseEvent {
        droppedElement: Object;
        droppedElementData: Object;
        dropTarget: Object;
        target: Object;
        targetElementData: Object;
        position: string;
        event: Object;
    }
    interface TreeViewClickEvent extends ej.BaseEvent, TreeViewBaseEvent {
        currentElement: Object;
        event: Object;
    }
    interface TreeViewBeforeAddEvent extends ej.BaseEvent, TreeViewBaseEvent {
        data: Object;
        targetParent: Object;
        parentDetails: Object;
    }
    interface TreeViewNodeAddEvent extends ej.BaseEvent, TreeViewBaseEvent {
        data: Object;
        nodes: Object;
        parentElement: Object;
        parentDetails: Object;
    }
    interface TreeViewBeforeDeleteEvent extends ej.BaseEvent, TreeViewBaseEvent {
        target: Object;
        nodeDetails: Object;
        parentElement: Object;
        parentDetails: Object;
        event: Object;
    }
    interface TreeViewNodeDeleteEvent extends ej.BaseEvent, TreeViewBaseEvent {
        parentElement: Object;
        parentDetails: Object;
        event: Object;
    }
    interface TreeViewBeforeCutEvent extends ej.BaseEvent, TreeViewBaseEvent {
        target: Object;
        nodeDetails: Object;
        keyCode: number;
        event: Object;
    }
    interface TreeViewNodeCutEvent extends ej.BaseEvent, TreeViewBaseEvent {
        parentElement: Object;
        parentDetails: Object;
        keyCode: number;
        event: Object;
    }
    interface TreeViewBeforePasteEvent extends ej.BaseEvent, TreeViewBaseEvent {
        target: Object;
        nodeDetails: Object;
        keyCode: number;
        event: Object;
    }
    interface TreeViewNodePasteEvent extends ej.BaseEvent, TreeViewBaseEvent {
        target: Object;
        nodeDetails: Object;
        keyCode: number;
        event: Object;
    }
    interface TreeViewBeforeLoadEvent extends ej.BaseEvent, TreeViewBaseEvent {
        ajaxOptions: Object;
    }
    interface TreeViewLoadSuccessEvent extends ej.BaseEvent, TreeViewBaseEvent {
        data: Object;
        targetParent: Object;
        parentDetails: Object;
    }
    interface TreeViewLoadErrorEvent extends ej.BaseEvent, TreeViewBaseEvent {
        error: Object;
    }
   class Uploadbox extends ej.Widget {
        static fn: Uploadbox;
        constructor(element: JQuery, options?: UploadboxOptions);
        constructor(element: Element, options?: UploadboxOptions);
		model:UploadboxOptions;
		defaults:UploadboxOptions;
        enable(): void;
        disable(): void;
        destroy(): void;
    }
    interface UploadboxOptions {
        buttonText?: UploadboxButtonText;
        dialogText?: UploadboxDialogText;
        dialogPosition?: UploadBoxDialogPosition;
        width?: (number|string);
        height?: (number|string);
        asyncUpload?: boolean;
        enabled?: boolean;
        multipleFilesSelection?: boolean;
        customFileDetails?: UploadboxCustomFileDetails;
        dialogAction?: UploadboxDialogAction;       
		fileSize?: number;
		allowDragAndDrop?: boolean;
		showBrowseButton?: boolean;
		dropAreaHeight?: (number|string);
		dropAreaWidth?: (number|string);
		 htmlAttributes?:Object;
		dropAreaText?: string;
        autoUpload?: boolean;
        showFileDetails?: boolean;
        extensionsAllow?: string;
        extensionsDeny?: string;
        saveUrl?: string;
        removeUrl?: string;
        cssClass?: string;
        enableRTL?: boolean;
        showRoundedCorner?: boolean;
        locale?: string;
        pushFile?: Object;
        create? (e: UploadboxBaseEvent): void;
        fileSelect? (e: UploadboxFileSelectEvent): void;
        begin? (e: UploadboxFileBeginEvent): void;
        cancel? (e: UploadboxCancelEvent): void;
		inProgress?(e: UploadboxFileInProgressEvent):void;
        complete? (e: UploadboxCompleteEvent): void;
        remove? (e: UploadboxRemoveEvent): void;
        error? (e: UploadboxErrorEvent): void;
        destroy? (e: UploadboxBaseEvent): void;
    }
   interface UploadboxDialogAction {
       modal?: boolean;
       closeOnComplete?: boolean;
       drag?: boolean;
       content?: string;
   }
   interface UploadboxCustomFileDetails {
       title?: boolean;
       name?: boolean;
       size?: boolean;
       status?: boolean;
       action?: boolean;
   }
	interface UploadboxButtonText {
        browse?: string;
        cancel?: string;
        upload?: string;
        close?: string;        
    }
	
	interface UploadboxDialogText {
        title?: string;
        name?: string;
        size?: string;
		status?: string;
    }

   interface UploadBoxDialogPosition {
       X?: number;
       Y?: number;
   } 
	
    interface UploadboxBaseEvent extends ej.BaseEvent {
        model: UploadboxOptions;
    }
    interface UploadboxRemoveEvent extends ej.BaseEvent, UploadboxBaseEvent {
        files: Object;
    }
    interface UploadboxCancelEvent extends ej.BaseEvent, UploadboxBaseEvent {
        files: Object;
    }
    interface UploadboxErrorEvent extends ej.BaseEvent, UploadboxBaseEvent {
        responseText: string;
        files: Object;
    }
    interface UploadboxCompleteEvent extends ej.BaseEvent, UploadboxBaseEvent {
        xhr: Object;
        files: Object;
		responseText:string;
        e: Object;
    }
   interface UploadboxFileSelectEvent extends ej.BaseEvent, UploadboxBaseEvent {
       files: Object;
   }
   interface UploadboxFileBeginEvent extends ej.BaseEvent, UploadboxBaseEvent {
       files: Object;
   }
   interface UploadboxFileInProgressEvent extends ej.BaseEvent, UploadboxBaseEvent {
       file: Object;
	   percentage:number;
	   e: Object;
   }
   class WaitingPopup extends ej.Widget {
        static fn: WaitingPopup;
        constructor(element: JQuery, options?: WaitingPopupOptions);
        constructor(element: Element, options?: WaitingPopupOptions);
		model:WaitingPopupOptions;
		defaults:WaitingPopupOptions;
        show(): void;
        hide(): void;
        refresh(): void;
    }
    interface WaitingPopupOptions {
        showOnInit?: boolean;
        showImage?: boolean;
        cssClass?: string;
        text?: string;
		target?: string;
        template?: string;
        htmlAttributes?: Object;
        create? (e: WaitingPopupOptions): void;
        destroy? (e: WaitingPopupOptions): void;
    }

    interface WaitingPopupEvent extends ej.BaseEvent {
        model: WaitingPopupOptions;
    }

 class Grid extends ej.Widget {
        static fn: Grid;
        constructor(element: JQuery, options?: GridOptions);
        constructor(element: Element, options?: GridOptions);
		model:GridOptions;
		defaults:GridOptions;
        addBatchEditTemplate(): void;
        addDialogEditingTemplate(): void;
        addEditingTemplate(): void;
        addExternalDialogEditingTemplate(): void;
        addFrozenTemplate(): void;
        addGroupingTemplate(): void;
        addSummaryTemplate(): void;
        addRecord(data: Array<any>, serverChange?:any): void;
        addRow(): void;
        addInitTemplate(): void;
        addIgnoreOnExport(args: any): void;
        batchCancel(): void;
        batchSave(): void;
        cancelEdit(): void;
        cancelEditCell(): void;
        clearSelection(index?: number): boolean;
        clearCellSelection(rowIndex:number, columnIndex:number): boolean;
        clearColumnSelection(index?: number): boolean;
        clearSorting(): boolean;
        clearFiltering(fieldName: string): void;
        clearSearching(): void;
        collapseAll(): void;
        collapseGroupDropArea(): void;
        columns(details: any, action?: string): void;
        dataSource(dataSource: any,templateRefresh?:boolean): void;
        deleteRecord(keyField: string, data: any): void;
        deleteRow(tr: JQuery): void;
        dragHeaderElement(): any;
        editCell(index: number, fieldName: string): void;
        editFormValidate(): any;
        endEdit(): void;
        export(action: string, serverEvent: string, multipleExport: string): void;
        expandAll(): void;
        expandCollapse(target: JQuery): void;
        expandGroupDropArea(): void;
        filterColumn(fieldName: string, filterOperator: string, filterValue: string, predicate: string, matchcase: boolean,actualFilterValue?:any): void;
        formatting(formatstring: string, str: string, locale: string): void;
        getBatchChanges(): any;
        getBrowserDetails(): string;
        getColumnByField(fieldName: string): GridColumn;
        getsortColumnByField(fieldName: string): GridColumn;
        getColumnByHeaderText(fieldName: string): GridColumn;
        getColumnByIndex(Index: number): GridColumn;
        getColumnFieldNames(): any;
        getColumnIndexByField(fieldName: string): number;
        getContent(): Element;
        getContentTable(): Element;
        getCurrentEditCellData(): number;
        getCurrentIndex(): number;
        getCurrentViewData(): any;
        getDataByIndex(rowIndex: number): any;
        getFieldNameByHeaderText(headerText: string): string;
        getFilterBar(): Element;
        getFilteredRecords(): any;
        getFooterContent(): Element;
        getFooterTable(): Element;
        getHeaderContent(): Element;
        getHeaderTable(): Element;
        getHeaderTextByFieldName(field: string): string;
        getHiddenColumnNames(headerText:string): Array<string>;
        getIndexByRow(tr: Element): number;
        getPager(): Element;
        getRowByIndex(from: number, to?: number): Element;
        getRowHeight(): number;
        getRows(): Array<Element>;
        getPrimaryKeyFieldNames(): Array<Element>;
        getScrollObject(): any;
        getSelectedRecords(): any;
        getVisibleColumnNames(headerText:string): Array<string>;
        gotoPage(pageIndex: number): void;
        groupColumn(fieldName: string): void;
        hideColumns(headerText: string): void;
        initValidator(): void;
        print(): void;
        refreshBatchEditChanges(): void;
        refreshBatchEditMode(): void;
        refreshContent(refreshTemplate?: boolean): void;
        refreshTemplate(): void;
        refreshToolbar(): void;
        refreshScrollerEvent(): void;
        removeSortedColumns(fieldName: string): void;
        render(): void;
        renderDiaglogButton(form: JQuery, tbody: JQuery): void;
        reorderColumns(fromFieldName: string, toFieldName: string): void;
        resetModelCollections(): void;
        resizeColumns(columnName: string, width: string): void;
        rowHeightRefresh(): void;
        saveCell(): void;
        search(searchstring: string): void;
        selectRows(from: number, to?: number, target?:any): boolean;
        selectCells(rowCellIndexes: number): boolean;
        selectColumns(columnIndex: number, toIndex?: number): boolean;
        sendDataRenderingRequest(args: string): void;
        setCellValue(index: number, fieldName: string, cellValue: any): void;
        setDefaultData(data:any): void;
        set_currentPageIndex(value: number): boolean;
        set_dropColumn(from: number, to: number):string;
        setWidthToColumns(): void;
        setDimension(height: number, width: number): void;
        setValidationToField(fieldName: string, rules: any): any;
        setValidation(): void;
        showColumns(headerText: string): void;
        sortColumn(columnName: string, sortingdirection: string): boolean;
        startEdit(tr: JQuery): boolean;
        ungroupColumn(columnName: string): void;
        updateRecord(keyField: string, data: any, action:any): void;  
		getSummaryValues(summaryCol: any, summaryData?: any) : any;      
    }
    interface GridOptions {
        allowPaging?: boolean;
        showColumnChooser?: boolean;
        allowSorting?: boolean;
        showStackedHeader?: boolean;
        stackedHeaderRows?: Array<string>;
        allowMultipleExporting?: boolean;
        allowFiltering?: boolean;
        allowSelection?: boolean;
        allowGrouping?: boolean;
        showSummary?: boolean;
        allowResizing?: boolean;
        allowResizeToFit?: boolean;
        allowTextWrap?: boolean;
        allowCellMerging?: boolean;
        enableRowHover?: boolean;
        enablePersistence?: boolean;
        selectedRowIndex?: number;
        allowSearching?: boolean;
        enableHeaderHover?: boolean;
        allowReordering?: boolean;
        allowKeyboardNavigation?: boolean;
        enableTouch?: boolean;
        selectionType?: ej.Grid.SelectionType;
        dataSource?: any;
        cssClass?: string;
        exportToExcelAction?: string;
        exportToWordAction?: string;
        exportToPdfAction?: string;
        allowScrolling?: boolean;
        locale?: string;
		virtualScrollMode?: ej.Grid.VirtualScrollMode;
		gridLines?: ej.Grid.GridLines;
		enableAutoSaveOnSelectionChange?: boolean;
        allowMultiSorting?: boolean;
        editSettings?: GridEditSettings;
		rowPosition?:ej.Grid.Rowposition;
        selectionSettings?: GridSelectionSettings;
        pageSettings?: GridPageSettings;
        groupSettings?: GridGroupSettings;
        contextMenuSettings?: GridContextMenuSettings;
        filterSettings?: GridFilterSettings;
		searchSettings?: GridsearchSettings;
        sortSettings?: GridSortSettings;
        toolbarSettings?: GridToolbarSettings;
        minWidth?: number;
        scrollSettings?: GridScrollSettings;
        summaryRows?: Array<SummaryRow>;
        enableRTL?: boolean;
        enableAltRow?: boolean;
        currentViewData?: any;
        detailsTemplate?: string;
        childGrid?: any;
        keySettings?: any;
        rowTemplate?: string;
        columns?: Array<GridColumn>;
        query?: any;
        isEdit?: boolean;
        isResponsive?: boolean;
        enableResponsiveRow?: boolean;
        detailsDataBound? (e: GridDetailsDataBoundEvent): void;
        rowDataBound? (e: GridRowDataBoundEvent): void;
        queryCellInfo? (e: GridQueryCellInfoEvent): void;
        mergeCellInfo? (e: GridMergeCellInfoEvent): void;
        create? (e: GridBaseEvent): void;
        actionBegin? (e: GridActionBeginEvent): void;
        actionComplete? (e: GridActionCompleteEvent): void;
        actionFailure? (e: GridActionFailureEvent): void;
        beginEdit? (e: GridBeginEdit): void;
        dataBound? (e: GridDataBoundEvent): void;
        endEdit? (e: GridEndEditEvent): boolean;
        endAdd? (e: GridEndAddEvent): void;
        endDelete? (e: GridEndDeleteEvent): void;
        rowSelecting? (e: GridRowSelectingEvent): void;
        rowSelected? (e: GridRowSelectedEvent): void;
        cellSelecting? (e: CellSelectingEvent): void;
        cellSelected? (e: CellSelectedEvent): void;
        columnSelecting? (e: ColumnSelectingEvent): void;
        columnSelected? (e: ColumnSelectedEvent): void;
        columnDragStart? (e: GridDragStartEvent): void;
        columnDrag? (e: GridDragEvent): void;
        columnDrop? (e: GridDragStopEvent): void;
        recordClick? (e: GridRecordClickEvent): void;
        recordDoubleClick? (e: GridRecordDoubleClickEvent): void;
        rightClick? (e: GridRightClickEvent): void;
        detailsCollapse? (e: GridDetailsCollapseEditEvent): void;
        detailsExpand? (e: GridDetailsExpandEvent): void;
        templateRefresh? (e: GridTemplateRefreshEvent): void;
        toolbarClick? (e: GridToolBarClickEvent): void;
        contextOpen? (e: ContextOpenEvent): void;
        contextClick? (e: ContextClickEvent): void;
        destroy? (e: GridBaseEvent): void;
        beforeBatchDelete? (e: GridBatchEvent): void;
        beforeBatchAdd? (e: GridBatchEvent): void;
        batchDelete? (e: GridBatchEvent): void;
        batchAdd? (e: GridBatchEvent): void;
        beforeBatchSave? (e: GridBatchEvent): void;
        cellSave? (e: GridCellSaveEvent): void;
        cellEdit? (e: GridCellEditEvent): void;
        resizeStart? (e: GriRresizeStartEvent): void;
        resizeEnd? (e: GriRresizeEndEvent): void;
        resized? (e: GriRresizedEvent): void;
        load? (e: GriLoadEvent): void;
       
    }
    //#region interfaces
    interface GridEditSettings {
        allowEditing?: boolean;
        allowAdding?: boolean;
        allowDeleting?: boolean;
        showConfirmDialog?: boolean;
        showDeleteConfirmDialog?: boolean;
        showAddNewRow?: boolean;
        dialogEditorTemplateID?: string;
        allowEditOnDblClick?: string;
        externalFormTemplateID?: string;
        inlineFormTemplateID?: string;
        titleColumn?: string;
		editMode?: ej.Grid.EditMode;
        formPosition?: ej.Grid.FormPosition;
		rowPosition?:ej.Grid.Rowposition;
    }
    interface GridSelectionSettings {
     selectionMode?: Array<ej.Grid.SelectionMode>; 
     enableToggle?: boolean;
	 cellSelectionMode?: string;
 }
    interface GridPageSettings {
        pageSize?: number;
        pageCount?: number;
        currentPage?: number;
        totalRecordsCount?: number;
        totalPages?: number;
        enableQueryString?: boolean;
        enableTemplates?: boolean;
		showDefaults?: boolean;
        template?: any; 
        printMode?: string;
    }

    interface GridGroupSettings {
		showDropArea?: boolean;
        showToggleButton?: boolean;
        enableDropAreaAnimation?: boolean;
        showGroupedColumn?: boolean;
        showUngroupButton?: boolean;
        enableDropAreaAutoSizing?: boolean;
        groupedColumns?: Array<string>;  
		captionFormat?: any;
    }
    interface GridContextMenuSettings {
     enableContextMenu?: boolean;
     contextMenuItems?: Array<string>;
     customContextMenuItems?: Array<string>;
    }
    interface GridFilterSettings {
        filterType?: ej.Grid.FilterType;
        filterBarMode?: ej.Grid.FilterBarMode;
        showFilterBarStatus?: boolean;
        statusBarWidth?: number;
        showPredicate?: boolean;
        filteredColumns?: Array<string>;
        maxFilterChoices?: number;
        immediateModeDelay?: number;
        enableCaseSensitivity?: boolean;
    }

    interface GridSortSettings {
        sortedColumns?: Array<SortedColumn>;
    }
	interface GridsearchSettings{
				fields?: Array<any>;
                
                key?: string;
                
                operator?: string;
                
                ignoreCase?: boolean;
	}
    interface SortedColumn {
        field?: string;
        direction?: string;
    }
    interface GridToolbarSettings {
        showToolbar?: boolean;
        toolbarItems?: Array<ej.Grid.ToolBarItems>;
        customToolbarItems?: Array<any>;
    }
    interface GridScrollSettings {
        width?: any;
        height?: any;
		enableTouchScroll?: boolean;
        allowVirtualScrolling?: boolean;
		virtualScrollMode?: string;
        frozenRows?: number;
        frozenColumns?: number;
    }

    interface SummaryRow {
        title?: string;
        summaryColumns?: Array<SummaryColumn>;
    }
    interface SummaryColumn {
        summaryType?: ej.Grid.SummaryType;
        displayColumn?: string;
        dataMember?: string;
        customSummaryValue?: string;
        prefix?: string;
        suffix?: string;
        format?: string;
    }

    interface GridColumn {
        field?: string;
        headerText?: string;
        allowGrouping?: boolean;
        allowFiltering?: boolean;
        allowSorting?: boolean;
        allowEditing?: boolean;
        isUnbound?: boolean;
        template?: boolean;
        templateID?: string;
        editType?: ej.Grid.EditingType;
        editParams?: GridEditParams;
        textAlign?: ej.TextAlign;
		headerTextAlign?: ej.TextAlign;
        isPrimaryKey?: boolean;
        isIdentity?: boolean;
        isFrozen?: boolean;
        visible?: boolean;
        cssClass?: string;
        defaultValue?: string;
        headerTemplateID?: string;
        width?: any;
        foreignKeyField?: string;
        foreignKeyValue?: string;
        dataSource?: any;
        validationRules?: any;
        format?: string;
        customAttributes?: any;
        commands?: Array<GridCommand>;
    }
    interface GridEditParams {
        decimalCount?: number;
    }
    interface GridCommand {
        type?: string;
        buttonOptions?: GridButtonOptions;
    }

    interface GridButtonOptions {
        text?: string;
    }
    
    //#endregion interfaces
    interface GridBaseEvent extends ej.BaseEvent {
        model: GridOptions;
    }
    interface GridActionBeginEvent extends GridBaseEvent {
        currentPage?: number;
        endIndex?: number;
        requestType?: number;
        startIndex?: number;
        columnName?: number;
        columnSortDirection?: number;
        currentTr?: HTMLTableRowElement;
        originalEventType?: string;
        primaryKey?: string;
        primaryKeyValue?: string;
        rowIndex?: number;
        foreignKeyData?: any;
        data?: any;
        tr?: HTMLTableRowElement;
        currentFilteringColumn?: any;
        filterCollection?: any;
    }
    interface GridActionCompleteEvent extends GridBaseEvent {
        requestType?: string;
        currentPage?: number;
        endIndex?: number;
        originalEventType?: string;
        startIndex?: number;
        target?: Element;
        columnName?: string;
        columnSortDirection?: string;
        currentTr?: HTMLTableRowElement;
        primaryKey?: string;
        primaryKeyValue?: string;
        rowIndex?: number;
        data?: any;
        foreignKeyData?: any;
        tr?: HTMLTableRowElement;
        currentFilteringColumn?: any;
        filterCollection?: any;
    }
    interface GridActionFailureEvent extends GridBaseEvent {
        requestType?: string;
        currentPage?: number;
        endIndex?: number;
        originalEventType?: string;
        startIndex?: number;
        target?: Element;
        columnName?: string;
        columnSortDirection?: string;
        currentTr?: HTMLTableRowElement;
        primaryKey?: string;
        primaryKeyValue?: string;
        rowIndex?: number;
        data?: any;
        foreignKeyData?: any;
        tr?: HTMLTableRowElement;
        currentFilteringColumn?: any;
        filterCollection?: any;
    }
    interface GridBeginEdit extends GridBaseEvent {
        currentTr: HTMLTableRowElement;
        primaryKey: string;
        primaryKeyValue: string;
        rowIndex: number;
    }
    interface GridDetailsCollapseEditEvent extends GridBaseEvent {
        detailRow: HTMLTableRowElement;
        masterData: any;
        foreignKeyData: any;
        masterRow: HTMLTableRowElement;
    }

    interface GridDetailsDataBoundEvent extends GridBaseEvent {
        templateDetail?: HTMLTableRowElement;
    }
    interface GridDetailsExpandEvent extends GridBaseEvent {
        detailRow?: HTMLTableRowElement;
        masterData?: any;
        foreignKeyData?: any;
        masterRow?: HTMLTableRowElement;
    }

    interface GridDragEvent extends GridBaseEvent {
        draggableType?: any;
        target?: Element;
    }
    interface GridDragStartEvent extends GridBaseEvent {
        draggableType?: any;
        target?: Element;
    }
    interface GridDragStopEvent extends GridBaseEvent {
        draggableType?: any;
        target?: Element;
    }
    interface GridEndAddEvent extends GridBaseEvent {        
    }
    interface GridEndDeleteEvent extends GridBaseEvent {
    }
    interface GridEndEditEvent extends GridBaseEvent {
    }
    interface GridCellSaveEvent extends GridBaseEvent {
    }
    interface GridCellEditEvent extends GridBaseEvent {
    }
    interface GriRresizeStartEvent extends GridBaseEvent {
    }
    interface GriRresizeEndEvent extends GridBaseEvent {
    }
    interface GriRresizedEvent extends GridBaseEvent {
    }
    interface GriLoadEvent extends GridBaseEvent {
    }
    interface GridDataBoundEvent extends GridBaseEvent {
    }
    interface GridQueryCellInfoEvent extends GridBaseEvent {
        Element?: Element;
        data?: any;
        foreignKeyData?: any;
    }
    interface GridMergeCellInfoEvent extends GridBaseEvent {
         Element?: Element;
        data?: any;
        foreignKeyData?: any;
    }
    interface GridRecordClickEvent extends GridBaseEvent {
        currentData?: any;
        currentRowIndex?: number;
        currrentRow?: HTMLTableRowElement;
    }
    interface GridRecordDoubleClickEvent extends GridBaseEvent {
        currentData?: any;
        currentRowIndex?: number;
        currrentRow?: HTMLTableRowElement;
    }
    interface GridRightClickEvent extends GridBaseEvent {
        currentData?: any;
        currentRowIndex?: number;
        currrentRow?: HTMLTableRowElement;
    }
    interface GridRowSelectedEvent extends GridBaseEvent {
        currentData?: any;
        foreignKeyData?: any;
        currentRowIndex?: number;
        currrentRow?: HTMLTableRowElement;
    }
    interface GridRowSelectingEvent extends GridBaseEvent {
    }
    interface CellSelectedEvent extends GridBaseEvent {
        currentData?: any;
    }
    interface CellSelectingEvent extends GridBaseEvent {
    } 
    interface ColumnSelectedEvent extends GridBaseEvent {
        currentData?: any;
        currentColumn?: number;
        previousColumn?: number;
        currrentColumn?: HTMLTableRowElement;
    }
    interface ColumnSelectingEvent extends GridBaseEvent {
    }
    interface GridToolBarClickEvent extends GridBaseEvent {
        currentTarget?: any;
        status?: boolean;
        target?: any;
    }
    interface GridTemplateRefreshEvent extends GridBaseEvent {
        rowIndex?: number;
        data?: any;
        cell?: any;
        column?: any;
    }
    interface ContextOpenEvent extends GridBaseEvent {
        currentTarget?: any;
        status?: boolean;
        target?: any;
    }
    interface ContextClickEvent extends GridBaseEvent {
        currentTarget?: any;
        status?: boolean;
        target?: any;
    }
    interface GridRowDataBoundEvent extends GridBaseEvent {
        data?: any;
        foreignKeyData?: any;
        Element?: HTMLTableRowElement;       
    }
    interface GridBatchEvent extends GridBaseEvent {
        batchChanges: any;
    }
export module Grid{
	enum SummaryType{
		Average,
		Minimum,
		Maximum,
		Count,
		Sum,
		TrueCount,
		FalseCount,
		Custom
	}
	enum EditMode{
		Normal,
		Dialog,
		DialogTemplate,
		Batch,
		ExternalForm,
		ExternalFormTemplate,
		InlineForm,
		InlineTemplateForm
	}
	enum Rowposition{
		Top,
		Bottom
	}
	enum FormPosition{
		BottomLeft,
		TopRight
	}
	enum ToolBarItems{
		Add,
		Edit,
		Delete,
		Update,
		Cancel,
		Search,
		PrintGrid,
		ExcelExport,
		WordExport,
		PdfExport
	}
	enum FilterType{
		Menu,
		FilterBar,
		Excel	
	}
	enum FilterBarMode{
		Immediate,
		OnEnter
	}
	enum SelectionType{
		Single,
		Multiple
	}
	enum GridLines{
		Both,
		None,
		Horizontal,
		Vertical,
	}
	enum VirtualScrollMode{
		Normal,
		Continuous
	}
	enum SelectionMode{
		Row,
		Cell,
		Column
	}
	enum EditingType { 
        String,
		Boolean,
		Numeric,
		Dropdown,
		DatePicker,
		DateTimePicker
    }
	
}
 class PivotGrid extends ej.Widget {
        static fn: PivotGrid;
        element: JQuery;
        constructor(element: Element, options?: PivotGridOptions);
        model: PivotGridOptions;
        validTags: Array<string>;
        defaults: PivotGridOptions;
        dataTypes: PivotGridDataTypes;
        observables: Array<string>;
        layout(): void;
        enableCellContext(): void;
        enableValueCellHyperlink(): void;
        enableRowHeaderHyperlink(): void;
        enableColumnHeaderHyperlink(): void;
        enableSummaryCellHyperlink(): void;
        locale(): void;
        getOlapReport(): string;
        setOlapReport(value:any): void;
        getJSONRecords(): string;
        setJSONRecords(value:any): void;
        exportPivotGrid(exportOption: ej.PivotGrid.ExportOptions): void;
		createConditionalDialog(): void;
        doAjaxPost(type:string, url:string, data:any, onSuccess:string, onComplete:string): void;
		doPostBack(url:string, params:any): void;
        refreshPagedPivotGrid(axis:string, pageNo:number|string): void;
        renderControlFromJSON(jsonObj:Array<Object>): void;
    }

    interface PivotGridOptions {
        url?: string;
        cssClass?: string;
		jsonRecords:string;
        currentReport?: string;
	    analysisMode?: ej.PivotGrid.AnalysisMode;
		operationalMode?: ej.PivotGrid.OperationalMode;
        layout?: ej.PivotGrid.Layout;
		enableJSONRendering?:boolean;
        enablePivotFieldList?:boolean;
        enableVirtualScrolling?: boolean;
        enableCellContext?: boolean;
        enableRTL?: boolean;
		enableDeferUpdate?: boolean;
		enableColumnGrandTotal?:boolean;
		enableConditionalFormatting?:boolean;
		enableGroupingBar?:boolean;
		enableRowGrandTotal?:boolean;
        enableGrandTotal?: boolean;		
		enableCellSelection?:boolean;
        enableToolTip?:boolean;
		enableCollapseByDefault?:boolean;
		isResponsive?:boolean;
        hyperlinkSettings?: HyperLinkSettings 
        serviceMethodSettings?: PivotGridServiceMethods;
        customObject?: Object;
        locale?: string;
		dataSource: PivotGridDataSource;
		cellSelection? (e: CellSelectionEvent): void;
        valueCellHyperlinkClick? (e: HyperlinkEvent) : void;
        rowHeaderHyperlinkClick? (e: HyperlinkEvent) : void;
        columnHeaderHyperlinkClick? (e: HyperlinkEvent) : void;
        summaryCellHyperlinkClick? (e: HyperlinkEvent) : void;
		beforeServiceInvoke? (e: PivotGridEvent) : void;
        afterServiceInvoke? (e: PivotGridEvent) : void;
        drillSuccess? (e: JQuery) : void;
        cellContext? (args: Object) : void;
        load? (e: PivotGridEvent) : void;
        renderComplete? (e: PivotGridEvent) : void;
        renderFailure? (e: PivotGridEvent) : void;
        renderSuccess? (e: PivotGrid) : void;
    }

	interface PivotGridEvent {
	    action: string;
		element: JQuery;
		customObject: Object;
	}

    interface HyperLinkSettings {
        enableValueCellHyperlink?: boolean;
        enableRowHeaderHyperlink?: boolean;
        enableColumnHeaderHyperlink?: boolean;
        enableSummaryCellHyperlink?: boolean;
    }

    interface PivotGridServiceMethods {
        initialize?: string;
        drillDown?: string;
        exportPivotGrid?: string;
        paging?: string;
		fetchMembers?: string;
        nodeStateModified?: string;
        nodeDropped?: string;
        filtering?: string;
        sorting?: string;
        deferUpdate?: string;
    }

	interface CellSelectionEvent {
        JSONRecords: Array<Object>;
        rowHeader: Array<Object>;
		columnHeader: Array<Object>;
		measureCount: Object;
    }

	interface HyperlinkEvent {
	    element: JQuery;
		customObject: Object;
		args: Object;
	}
	
	interface PivotGridDataSource{
		data?: Object;
		columns?: Array<Object>;
		rows?: Array<Object>;
		values?: Array<Object>;
		filters?: Array<Object>;
	}

    interface PivotGridDataTypes {
        serviceMethodSettings?: Object;
        customObject?: Object;
    }
export module PivotGrid{
	enum Layout{
		Normal,
		NormalTopSummary,
		NoSummaries,
		ExcelLikeLayout
	}
	enum GridAction{
		Initialize,
		DrillDown
	}
	enum AnalysisMode{
		Olap,
		Relational
	}
	enum OperationalMode{
	    ClientMode,
		ServerMode
	}
	enum ExportOptions{
	    Excel,
		Word,
		PDF,
		CSV
	}
}
 class PivotSchemaDesigner extends ej.Widget {
        static fn: PivotSchemaDesigner;
        element: JQuery;
        constructor(element: Element, options?: PivotSchemaDesignerOptions);
        model: PivotSchemaDesignerOptions;
        validTags: Array<string>;
        defaults: PivotSchemaDesignerOptions;
        dataTypes: PivotSchemaDesignerDataTypes;
        doAjaxPost(type:any, url:any, data:any, onSuccess:any, onComplete?:any): void;
    }

    interface PivotSchemaDesignerOptions {
        url?: string;
        cssClass?: string;
        height?: string|number;
		locale?:string;
	    width?: string|number;
	    layout?: ej.PivotGrid.Layout;
	    pivotControl?: PivotGrid;
	    pivotTableFields?: Array<Object>;
        pivotCalculations?: Array<Object>;
        pivotColumns? : Array<Object>;
        pivotRows?: Array<Object>;
        filters?: Array<Object>;
        enableWrapper?: boolean;
        serviceMethods?: PivotSchemaDesignerServiceMethods; 
		customObject?:Object;
        beforeServiceInvoke? (e: PivotSchemaDesignerEvent) : void;
        afterServiceInvoke? (e: PivotSchemaDesignerEvent) : void;
    }

	interface PivotSchemaDesignerEvent {
	    action: string;
	    element: JQuery;
	    customObject: Object;
	}

    interface PivotSchemaDesignerDataTypes {
        serviceMethods?: Object;
        customObject?: Object;
        pivotControl?: Object;
        pivotTableFieldList?: Array<string>;
        pivotCalculationList?: Array<string>;
        pivotColumnList?:Array<string>;
        pivotRowList?: Array<string>;
        filterList?: Array<string>;
    }

    interface PivotSchemaDesignerServiceMethods {
      
        fetchMembers?: string;
        nodeStateModified?: string;
        nodeDropped?: string;
        removeButton?: string;
        memberExpand?: string;
        filtering?: string;
}
    class PivotPager extends ej.Widget {
        static fn: PivotPager;
        element: JQuery;
        constructor(element: Element, options?: PivotPagerOptions);
        model: PivotPagerOptions;
        validTags: Array<string>;
        defaults: PivotPagerOptions;
        initPagerProperties(headerCounts:Object, pageSettings:Object): void;
    }

    interface PivotPagerOptions {
        targetControlID?: string;
        categoricalCurrentPage?: number;
        seriesCurrentPage?: number;
        seriesPageCount?: number;
        categoricalPageCount?: number;
        locale?: string;
        mode?: ej.PivotPager.Mode;
    }
export module PivotPager{
	enum Mode{
		Both,
		Categorical,
		Series
	}

}

class Schedule extends ej.Widget {
    static fn: Schedule;
    constructor(element: JQuery, options?: ScheduleOptions);
    constructor(element: Element, options?: ScheduleOptions);
	model:ScheduleOptions;
	defaults:ScheduleOptions;
    deleteAppointment(id: string): void;
    saveAppointment(appointment: Object): void;
    getAppointments(): Array<ScheduleAppointmentSettings>;   
    print(appointment?: Object): void;
    exportSchedule(Action: ej.Schedule.Actions, ServerEvent: string, id: string): boolean;
    searchAppointments(SearchString: string, Fields?: string, FilterOperator?: string, IgnoreCase?: boolean): Array<ScheduleAppointmentSettings>;
    filterAppointments(FilterConditions: Object): Array<ScheduleAppointmentSettings>;
    refresh(): void;
    refreshAppointments(): void;
    refreshScroller(): void;
    getSlotByElement():Object;
    recurrenceRuleSplit(recurrenceRule: string, recurrenceExDate?: string): Object;
}
interface ScheduleOptions {
    timeZoneCollection?: ScheduleTimeZone;
    views?: Array<string>;
    currentView?: ej.Schedule.CurrentView;
    timeMode?: ej.Schedule.TimeMode;
    timeZone?: string;
    firstDayOfWeek?: ej.Schedule.DayOfWeek;
    workWeek?: Array<string>;
    startHour?: number;
    endHour?: number;
    highlightBusinessHours?: boolean;
    showQuickWindow?: boolean;
    enableLoadOnDemand?: boolean;
    showLocationField?: boolean;
    businessStartHour?: number;
    businessEndHour?: number;
    width?: string;
    height?: string;
    cellWidth?: string;
    cellHeight?: string;
    dateFormat?: string;
    orientation?: ej.Schedule.Orientation;
    resourceHeaderTemplateId?: string;
    categorizeSettings?: ScheduleCategorizeSettings;
    prioritySettings?: SchedulePrioritySettings;
    agendaViewSettings?: ScheduleAgendaViewSettings;
    tooltipSettings?: ScheduleTooltipSettings;
    currentDate?: Date;
    minDate?: Date;
    maxDate?: Date;
    cssClass?: string;
    locale?: string;
    enableResize?: boolean;
    readOnly?: boolean;
    enableRTL?: boolean;
    enableAppointmentNavigation?: boolean;
    showAppointmentNavigator?: boolean;
    appointmentTemplateId?: string;
    allDayCellsTemplateId?: string;
    dateHeaderTemplateId?: string;
    workCellsTemplateId?: string;
    appointmentDragArea?: string;
    showOverflowButton?: boolean;
    allowDragDrop?: boolean;
    allowDragAndDrop?: boolean;
    enableAppointmentResize?: boolean;
    showCurrentTimeIndicator?: boolean;
    showAllDayRow?: boolean;
    showHeaderBar?: boolean;
    isResponsive?: boolean;
    enableRecurrenceValidation?: boolean;
    enablePersistence?: boolean;
    showTimeScale?: boolean;
    isDST?: boolean;
    showDeleteConfirmation?: boolean;
    showDeleteConfirmationDialog: boolean;
    timeScale?: ScheduleTimeScale;
    reminderSettings?: ScheduleRemainderSetting;
    contextMenuSettings?: ScheduleContextMenuSettings;
    workHours?: ScheduleWorkHours;
    group?: ScheduleGroup;
    resources?: Array<ScheduleResource>;
    allowKeyboardNavigation?: boolean;
    appointmentSettings?: ScheduleAppointmentSettings;
    renderDates?: RenderDates;
    actionBegin? (e: ScheduleActionBeginEvent): void;
    actionComplete? (e: ScheduleActionCompleteEvent): void;
    appointmentHover? (e: ScheduleAppointmentHoverEvent): void;
    cellHover? (e: ScheduleCellHoverEvent): void;
    cellClick? (e: ScheduleCellClickEvent): void;
    appointmentClick? (e: ScheduleAppointmentClickEvent): void;
    cellDoubleClick? (e: ScheduleCellDoubleClickEvent): void;
    appointmentWindowOpen? (e: ScheduleCellClickEvent): void;
    appointmentSaved? (e: ScheduleBeforeAppointmentCreateEvent): void;
    appointmentEdited? (e: ScheduleBeforeAppointmentChangeEvent): void;
    appointmentDeleted? (e: ScheduleBeforeAppointmentRemoveEvent): void;
    beforeAppointmentCreate? (e: ScheduleBeforeAppointmentCreateEvent): void;
    beforeAppointmentChange? (e: ScheduleBeforeAppointmentChangeEvent): void;
    beforeAppointmentRemove? (e: ScheduleBeforeAppointmentRemoveEvent): void;
    appointmentCreated? (e: ScheduleAppointmentSavedEvent): void;
    appointmentChanged? (e: ScheduleAppointmentEditedEvent): void;
    appointmentRemoved? (e: ScheduleAppointmentDeletedEvent): void;
    overflowButtonClick? (e: ScheduleOverflowButtonClick): void;
    overflowButtonHover? (e: ScheduleOverflowButtonHover): void;
    navigation? (e: ScheduleNavigationEvent): void;
    dragStart? (e: ScheduleDragStartEvent): void;
    drag? (e: ScheduleDragEvent): void;
    dragStop? (e: ScheduleDragStopEvent): void;
    resizeStart? (e: ScheduleResizeStartEvent): void;
    resize? (e: ScheduleResizeEvent): void;
    resizeStop? (e: ScheduleResizeStopEvent): void;
    menuItemClick? (e: ScheduleMenuItemEvent): void;
    beforeContextMenuOpen? (e: ScheduleBeforeContextMenuOpenEvent): void;
    reminder? (e: ScheduleReminderEvent): void;
    create? (e: ScheduleBaseEvent): void;
    destroy? (e: ScheduleBaseEvent): void;
    keyDown? (e: ScheduleKeyDown): void;
}

interface ScheduleTimeZone {
    id?: string;
    text?: string;
    value?: string;
    dataSource: Array<ScheduleTimeZoneCollection>
}

interface ScheduleTimeZoneCollection {
    id?: string;
    text?: string;
    value?: string;
}

interface ScheduleTimeScale {
    enable?:boolean;
    minorSlotCount?: number;
    majorSlot?: number;
    minorSlotTemplateId?: string;
    majorSlotTemplateId?: string;
}
interface ScheduleRemainderSetting {
    enable?: boolean;
    alertBefore?: number;
}
interface ScheduleContextMenuSettings {
    enable?: boolean;
    menuItems?: ScheduleMenuItems;
}
interface ScheduleWorkHours {
    highlight?: boolean;
    start?: number;
    end?: number;
}
interface ScheduleMenuItems {
    appointment?: Array<ScheduleMenuItem>;
    cells?: Array<ScheduleMenuItem>;
}
interface ScheduleMenuItem {
    id?: string;
    text?: string;
    parentId?: string;
}
interface ScheduleGroup {
    resources?: Array<ScheduleResource>;
}
interface ScheduleResource {
    field?: string;
    title?: string;
    name?: string;
    allowMultiple?: boolean;
    resourceSettings?: SchedulResourceSettings;
}
interface SchedulResourceSettings {
    dataSource?: Object;
}
interface ScheduleAppointmentSettings {
    dataSource?: Object;
    query?: Object;
    tableName?: string;
    id?: string;
    subject?: Object;
    description?: Object;
    startTime?: Object;
    endTime?: Object;
    recurrence?: Object;
    recurrenceRule?: Object;
    allDay?: Object;
    resourceFields?: Object;
    categorize?: Object;
    startTimeZone?: Object;
    endTimeZone?: Object;
    recurrenceId?: string;
    recurrenceExDate?: string;
    location?: Object;
    priority?: Object;
}
interface RenderDates {
    start?: Date;
    end?: Date;
}
interface ScheduleCategorizeSettings {
    enable?: boolean;
    allowMultiple?: boolean;
    dataSource?: Object;
    text?: string;
    id?: string;
    color?: string;
    fontColor?: string;
}

interface SchedulePrioritySettings {
    enable?: boolean;
    template?: string;
    dataSource?: Object;
    text?: string;
    value?: string;
}
interface ScheduleAgendaViewSettings {
    daysInAgenda?: number;
    dateColumnTemplateId?: string;
    timeColumnTemplateId?: string;
}
interface ScheduleTooltipSettings {
    enable?: boolean;
    templateId?: string;
}
interface ScheduleBaseEvent extends ej.BaseEvent {
    model: ScheduleOptions;
}
interface ScheduleActionBeginEvent extends ScheduleBaseEvent {
    requestType?: string;
}
interface ScheduleActionCompleteEvent extends ScheduleBaseEvent {
    requestType?: string;
}
interface ScheduleAppointmentHoverEvent extends ScheduleBaseEvent {
    appointment?: Object;
}
interface ScheduleCellHoverEvent extends ScheduleBaseEvent {
    cellIndex?: number;
    target?: Object;
}
interface ScheduleCellClickEvent extends ScheduleBaseEvent {
    startTime?: Date;
    endTime?: Date;
    target?: Object;
}
interface ScheduleCellDoubleClickEvent extends ScheduleBaseEvent, ScheduleCellClickEvent {
}
interface ScheduleAppointmentClickEvent extends ScheduleBaseEvent {
    appointment?: Object;
}

interface ScheduleReminderEvent extends ScheduleBaseEvent {
    reminderAppointment?: number;
}
interface ScheduleBeforeContextMenuOpenEvent extends ScheduleBaseEvent {
    events: Object;
}
interface ScheduleMenuItemEvent extends ScheduleBaseEvent {
    events: Object;
}

interface ScheduleNavigationEvent extends ScheduleBaseEvent {
    previousView: string;
    currentView: string;
    currentDate: Date;
    target: Object;
}
interface ScheduleBeforeAppointmentRemoveEvent extends ScheduleBaseEvent {
    appointment: Object;
}
interface ScheduleBeforeAppointmentChangeEvent extends ScheduleBaseEvent {
    appointment: Object;
}
interface ScheduleBeforeAppointmentCreateEvent extends ScheduleBaseEvent {
    appointment: Object;
}
interface ScheduleAppointmentDeletedEvent extends ScheduleBaseEvent {
    appointment: Object;
}
interface ScheduleAppointmentEditedEvent extends ScheduleBaseEvent {
    appointment: Object;
}
interface ScheduleAppointmentSavedEvent extends ScheduleBaseEvent {
    appointment: Object;
}
interface ScheduleDragStartEvent extends ScheduleBaseEvent {
    target: Object;
}
interface ScheduleDragEvent extends ScheduleBaseEvent {
    target: Object;
}
interface ScheduleDragStopEvent extends ScheduleBaseEvent {
    appointment: Object;
}
interface ScheduleResizeStartEvent extends ScheduleBaseEvent {
    element: Object;
    }
export module Schedule {
    enum CurrentView {
        Day, Week, Workweek, Month, CustomView, Agenda
    }

    enum Orientation {
        Vertical, Horizontal
    }

    enum DayOfWeek {
        Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
    }

    enum TimeMode {
        Hour12, Hour24
    }
   
     enum Actions{
        Add,Save,Delete,EditOcurence,EditSeries
     }
}
interface ScheduleResizeEvent extends ScheduleBaseEvent {
    element: Object;
}
interface ScheduleResizeStopEvent extends ScheduleBaseEvent {
    appointment: Object;
    target: Object;
}
interface ScheduleOverflowButtonClick extends ScheduleBaseEvent {
    Datas: Object;
}
interface ScheduleOverflowButtonHover extends ScheduleBaseEvent {
    Datas: Object;
}
interface ScheduleKeyDown extends ScheduleBaseEvent {
    event: Object;
}
 class Gantt extends ej.Widget {
        static fn: Gantt;
        constructor(element: JQuery, options?: GanttOptions);
		model:GanttOptions;
        defaults: GanttOptions;
        addRecord(data: any, rowPosition: ej.Gantt.AddRowPosition): void|boolean;
        cancelEdit(): void;
        deleteItem(): void;
        expandCollapseRecord(taskId?: number): void;
        expandAllItems(): void;
        collapseAllItems(): void;
        getColumnIndexByField(field?: string): any;
        getColumns(): Array<any>;
        getExpandStatus(record?: any): boolean;
        getRows(): Array<Element>
        hideColumn(headerText?: string): void;
        indentItem(): void | boolean;
        openAddDialog(): void;
        openEditDialog(): void;
        outdentItem(): void;
        showColumn(headerText?: string): void;
        searchItem(searchString?: string): void;
        saveEdit(): void;
        setSplitterPosition(width?: string): void;
        setSplitterIndex(index?: number): void;
        sortColumn(columnName?: string, columnSortDirection?: string): void;
        clearSorting(): void;
    }

    interface GanttOptions {
        allowSorting?: boolean;
        allowColumnResize?: boolean;
        allowSelection?: boolean;
        dataSource?: any;
        query?: Object;
        taskIdMapping?: string;
        parentTaskIdMapping?: string;
        taskNameMapping?: string;
        startDateMapping?: string;
        endDateMapping?: string;
        baselineStartDateMapping?: string;
        baselineEndDateMapping?: string;
        childMapping?: string;
        durationMapping?: string;
        mileStoneMapping?: string;
        progressMapping?: string;
        predecessorMapping?: string;
        resourceInfoMapping?: string;
        resources?: Array<any>;
        holidays?: Array<any>;
        highlightWeekends?: boolean;
        scheduleStartDate?: string;
        scheduleEndDate?: string;
        enableProgressBarResizing?: boolean;
        rowHeight?: number;
        includeWeekend?: boolean;
        toolbarSettings?: { showToolbar?: boolean; toolbarItems?: Array<ej.Gantt.ToolbarItems> };
        stripLines?: Array<any>;
        scheduleHeaderSettings?: { weekHeaderFormat?: string; dayHeaderFormat?: string; yearHeaderFormat?: string; monthHeaderFormat?: string; hourHeaderFormat?: string; scheduleHeaderType?: ej.Gantt.ScheduleHeaderType; minutesPerInterval?: ej.Gantt.minutesPerInterval; weekendBackground?: string };
        workingTimeScale?: ej.Gantt.workingTimeScale;
        roundOffDayworkingTime?: boolean;
        durationUnit?: ej.Gantt.DurationUnit;
        taskbarBackground?: string;
        progressbarBackground?: string;
        connectorLineBackground?: string;
        parentTaskbarBackground?: string;
        parentProgressbarBackground?: string;
        connectorlineWidth?: number;
        showTaskNames?: boolean;
        showGridCellTooltip?: boolean;
        showGridExpandCellTooltip?: boolean;
        showProgressStatus?: boolean;
        showResourceNames?: boolean;
        enableTaskbarDragTooltip?: boolean;
        enableTaskbarTooltip?: boolean;
        editSettings?: { allowEditing?: boolean; allowAdding?: boolean; allowDeleting?: boolean; editMode?: string };                
        allowKeyboardNavigation?: boolean;
        cssClass?: string;
        locale?: string;
        allowMultiSorting?: boolean;
        sortSettings?: { sortedColumns?: Array<any> };
        enableAltRow?: boolean;
        enableVirtualization?: boolean;
        progressbarHeight?: number;
        taskbarTooltipTemplate?: string;
        progressbarTooltipTemplate?: string;
        taskbarTooltipTemplateId?: string;
        dateFormat?: string;
        resourceIdMapping?: string;
        resourceNameMapping?: string;
        progressbarTooltipTemplateId?: string;
        taskbarEditingTooltipTemplateId?: string;
        taskbarEditingTooltipTemplate?: string;
        selectedRowIndex?: number;
        allowGanttChartEditing?: boolean;
        sizeSettings?: { height?: number|string; width?: number|string };        
        weekendBackground?: string;
        baselineColor?: string;
        renderBaseline?: boolean;
        enableContextMenu?: boolean;
        treeColumnIndex?: number;
        editDialogFields?: Array<any>;
        addDialogFields?: Array<any>;
        showColumnChooser?: boolean;        
        enableResize?: boolean;
        enableCollapseAll?: boolean;
        splitterSettings?: { position?: string; index?: number };
        enablePredecessorValidation?: boolean;
        rowSelecting? (e: GanttEvent): void;
        rowSelected? (e: GanttEvent): void;
        queryCellInfo? (e: GanttEvent): void;
        queryTaskbarInfo? (e: GanttEvent): void;
        beginEdit? (e: GanttEvent): void;
        endEdit? (e: GanttEvent): void;
        rowDataBound? (e: GanttEvent): void;
        expanding? (e: GanttEvent): void;
        expanded? (e: GanttEvent): void;
        collapsing? (e: GanttEvent): void;
        collapsed? (e: GanttEvent): void;
        actionBegin? (e: GanttEvent): void;
        actionComplete? (e: GanttEvent): void;
        taskbarEditing? (e: GanttEvent): void;
        taskbarEdited? (e: GanttEvent): void;
        load? (e: GanttEvent): void;
        contextMenuOpen? (e: GanttEvent): void;
        toolbarClick? (e: GanttEvent): void;
    }

    interface GanttEvent {
        cancel?: boolean;
        type?: string;
        model?: GanttOptions;
    }

 export module Gantt{
     enum ToolbarItems {
         Add,
         Edit,
         Delete,
         Update,
         Cancel,
         Search,
         Indent,
         Outdent,
         ExpandAll,
         CollapseAll,
         PrevTimeSpan,
         NextTimeSpan
     }
     enum AddRowPosition {
         Top,
         Bottom,
         AboveSelectedRow,
         BelowSelectedRow,
         Child
     }
     enum DurationUnit {
         Day,
         Hour,
         Minute
     }

     enum workingTimeScale {
         TimeScale8Hours,
         TimeScale24Hours
     }

     enum ScheduleHeaderType {
         Year,
         Month,
         Week,
         Day,
         Hour
     }

     enum minutesPerInterval {
         Auto,
         OneMinute,
         FiveMinutes,
         FifteenMinutes,
         ThirtyMinutes
     }
}


    class ReportViewer extends ej.Widget {
        static fn: ReportViewer;
        element: JQuery;
        constructor(element: Element, options?: ReportViewerOptions);
        model: ReportViewerOptions;
        defaults: ReportViewerOptions;
        disable(): void;
        enable(): void;
        destroy(): void;
		getDataSetNames(): void;
		getParameters(): void;
        gotoPageIndex(): void;
        gotoLastPage(): void;
        gotoFirstPage(): void;
        gotoNextPage(): void;
        gotoPreviousPage(): void;
        print(): void;
        printLayout(): void;
        exportReport(): void;
        refresh(): void;
		fitToPage(): void;
        fitToPageWidth(): void;
		fitToPageHeight(): void;
    }

    interface ReportViewerOptions {
        reportServiceUrl?: string;
        reportPath?: string;
        reportServerUrl?: string;
        dataSources?: Array<Object>;
        parameters?: Array<Object>;
        toolbarSettings?: ReportViewerToolbarOptions;
        exportSettings?: ReportViewerExportOptions;        
		locale?: string;
		printMode?: boolean; 
        pageSettings?:ReportViewerPageOptions;
        renderMode?: ej.ReportViewer.RenderMode;
        enablePageCache?:boolean;      
        processingMode?: ej.ReportViewer.ProcessingMode;
		zoomFactor?: number;
		isResponsive?: boolean;
        reportLoaded? (e: ReportViewerEvent): void;
        renderingBegin? (e: ReportViewerEvent): void;
        renderingComplete? (e: ReportViewerEvent): void;
        reportError? (e: ReportViewerEvent): void;
		reportExport? (e: ReportViewerEvent): void;
        drillThrough? (e: ReportViewerEvent): void;
	    viewReportClick? (e: ReportViewerEvent): void;
		destroy? (e: ReportViewerEvent): void;
    }

    interface ReportViewerToolbarOptions {
        items?: ej.ReportViewer.ToolbarItems;
        showToolbar?: boolean;
		templateId?: string;
		click? (e: ReportViewerToolbarEvent): void;
		showTooltip?: boolean;
    }
	
	interface ReportViewerExportOptions {
        exportOptions?: ej.ReportViewer.ExportOptions;	
		excelFormat?:ej.ReportViewer.ExcelFormats;
		wordFormat?: ej.ReportViewer.WordFormats;
    }
   
    interface ReportViewerPageOptions{
       orientation:ej.ReportViewer.Orientation;               
       paperSize:ej.ReportViewer.PaperSize;
    }

    interface ReportViewerEvent extends ej.BaseEvent{
        model: ReportViewerOptions;
    }	
	
	interface ReportViewerToolbarEvent extends ej.BaseEvent{
        model: ReportViewerOptions;
    }

    export module ReportViewer{
enum Orientation{
Portrait,
Landscape
}

enum PaperSize{
        A3,        
        A4,        
        B4_JIS,        
        B5_JIS,        
        Envelope_10,        
        Envelope_Monarch,        
        Executive,        
        Legal,        
        Letter
}
enum RenderMode{
Default,
Mobile,
Desktop
}

enum ProcessingMode{
Remote,
Local
}
enum ExportOptions {
        Excel,
        Html,
        Pdf,
        Word,
        All
    }

enum ExcelFormats{
        Excel97to2003,
        Excel2007,
        Excel2010,
        Excel2013        
	}
	
	enum WordFormats{
	    Doc,
	    Dot,
	    Docx,
	    Word2007,
	    Word2010,
	    Word2013,
	    Word2007Dotx,
	    Word2010Dotx,
	    Word2013Dotx,
	    Word2007Docm,
	    Word2010Docm,
	    Word2013Docm,
	    Word2007Dotm,
	    Word2010Dotm,
	    Word2013Dotm,
	    Rtf,
	    Txt,
	    EPub,
	    Html,
	    Xml,
	    Automatic	
	}

enum ToolbarItems {
        Export,
        Zoom,
        PageNavigation,
        Refresh,
        Print,
        DocumentMap,
        Parameters,
		PrintLayout,
		FittoPage,
		PageSetup,
        All
    }
}

 class TreeGrid extends ej.Widget {
        static fn: TreeGrid;
        constructor(element: JQuery, options?: TreeGridOptions);
		model:TreeGridOptions;
        defaults: TreeGridOptions;
        getRows(): Array<Element>;
        getDataSource(): Array<any>;
        getCollapsedRecordCount(): number;
        getExpandedRecords(records?: Array<any>): Array<any>;
        refresh(datasource?: Array<any>, query?: JQuery): void;
        addRow(data?: any, rowPosition?: ej.TreeGrid.RowPosition): void|boolean;
        scrollOffset(left?: number, top?: number): void;
        getScrollTopOffset(): number;
        getScrollLeftOffset(): number;
        scrollToTop(): void;
        scrollToBottom(): void;
        expandAtLevel(index?: number): void;
        collapseAtLevel(index?: number): void;
        showHideDetailsRow(index?: number): void;
        sortColumn(columnName?: string, columnSortDirection?: string): void;
        search(searchString?: string): void;
        cellEdit(index?: number, fieldName?: string): void|boolean;
        saveCell(): void|boolean;
        getColumnIndexByField(fieldName?: string): number;
        getFieldNameByHeaderText(headerText?: string): string;
        clearSelection(index?: number): void;
        freezePrecedingColumns(field?: string): void|boolean;
        freezeColumn(field?: string, isFrozen?:boolean): void|boolean;
        getColumnFieldNames(): any;
        refreshRow(index?: number): void;
        getColumnByHeaderText(headerText?: string): any;
        hideColumn(headerText?: string): void;
        clearFilter(fieldName?: string): void;
        getColumnByField(fieldName?: string): any;
        showColumn(headerText?: string): void;
        getHiddenColumns(): Array<any>;
        getColumnByIndex(index?: number): any;
        getVisibleColumns(): any;
        cancelEdit(): void;
        redraw(): void;
        collapseAll(): void;
        clearSorting(): void;
        export(action?: string, serverEvent?: string, multipleExport?: string): void|boolean;
    }

    interface TreeGridOptions {
        enableAltRow?: boolean;
        allowColumnResize?: boolean;
        enableVirtualization?: boolean;
        allowSorting?: boolean;
        allowMultiSorting?: boolean;
        sortSettings?: { sortedColumns?: Array<any> };
        filterSettings?: { filterBarMode?: string; filteredColumns?: Array<any> };
        allowSelection?: boolean;
        selectionType?: ej.TreeGrid.SelectionType;
        selectedRowIndex?: number;        
        allowKeyboardNavigation?: boolean;
        cssClass?: string;
        locale?: string;
        allowFiltering?: boolean;
        allowDragAndDrop?: boolean;
        showSummaryRow?: boolean;
        showTotalSummary?: boolean;
        summaryRows?: Array<TreeGridSummaryRow>;
        dragTooltip?: { showTooltip?: boolean; tooltipItems?: Array<any>; tooltipTemplate?: string;};
        editSettings?: { rowPosition?: ej.TreeGrid.RowPosition; allowEditing?: boolean; allowAdding?: boolean; allowDeleting?: boolean; editMode?: ej.TreeGrid.EditMode };       
        dataSource?: any;                                
        columns?: Array<TreeGridColumn>;
        commonWidth?: number;
        idMapping?:string;
        parentIdMapping?:string;
        query?: Object;
        dateFormat?: string;
        rowHeight?: number;        
        treeColumnIndex?: number;
		childMapping?:any;
        showGridCellTooltip?: boolean;
        showGridExpandCellTooltip?: boolean;
        rowDataBound? (e: TreeGridEvent): void;
        queryCellInfo? (e: TreeGridEvent): void;
        rowTemplateID?: string;
        altRowTemplateID?: string;
        headerTextOverflow?: string;        
        allowFreezing?: boolean;
		showColumnChooser?: boolean;
        contextMenuSettings?: { showContextMenu?: boolean; contextMenuItems?: Array<ej.TreeGrid.ContextMenuItems> };
        toolbarSettings?: { showToolbar?: boolean; toolbarItems?: Array<ej.TreeGrid.ToolbarItems> };
        sizeSettings?: { height?: number|string; width?: number|string };
        enableResize?: boolean;
        enableCollapseAll?: boolean;
		contextMenuOpen? (e: TreeGridEvent): void;
		rowDragStart? (e: TreeGridEvent): void;
		rowDrag? (e: TreeGridEvent): void;
        rowDragStop? (e: TreeGridEvent): void;
        showDetailsRow?: boolean;
        showDetailsRowInfoColumn?: boolean;
        detailsRowHeight?: number;
        detailsTemplate?: any;
        detailsDataBound? (e: TreeGridEvent): void;
        detailsShown? (e: TreeGridEvent): void;
        detailsHidden? (e: TreeGridEvent): void;
        toolbarClick? (e: TreeGridEvent): void;
        load? (e: TreeGridEvent): void;
        rowSelecting? (e: TreeGridEvent): void;
        rowSelected? (e: TreeGridEvent): void;
        beginEdit? (e: TreeGridEvent): void;
        endEdit? (e: TreeGridEvent): void;
        expanding? (e: TreeGridEvent): void;
        expanded? (e: TreeGridEvent): void;
        collapsing? (e: TreeGridEvent): void;
        collapsed? (e: TreeGridEvent): void;
        actionBegin? (e: TreeGridEvent): void;
        actionComplete? (e: TreeGridEvent): void;
        
    }

    interface TreeGridEvent {
        cancel?: boolean;
        type?: string;
        model?: TreeGridOptions;
    }
 interface TreeGridColumn {
     field?: string;
     format?: string;
     headerText?: string;
     allowFiltering?: boolean;
     allowSorting?: boolean;
     allowEditing?: boolean;
     templateID?: string;
     isTemplateColumn?: boolean;
     editType?: string;
     editParams?: TreeGridEditParams;
     visible?: boolean;
     width?: number;
     dropdownData?: any;
	 headerTemplateID?: string;        
     allowFreezing?: boolean;
	 isFrozen?: boolean;
 }
 interface TreeGridEditParams {
     decimalPlaces?: number;
     fields?: { text?: string; value?: string; showCheckBox?: boolean; }
 }
 interface TreeGridSummaryRow {
     title?: string;
     summaryColumns?: Array<TreeGridSummaryColumn>;
 }
 interface TreeGridSummaryColumn {
     summaryType?: ej.TreeGrid.SummaryType;
     displayColumn?: string;
     dataMember?: string;
     prefix?: string;
     suffix?: string;
     format?: string;
 }
 export module TreeGrid {
     enum SummaryType {
         Average,
         Minimum,
         Maximum,
         Count,
         MinimumDate,
         MaximumDate,
         Sum,
         TrueCount,
         FalseCount
     }
     enum EditingType {
         String,
         Boolean,
         Numeric,
         Dropdown,
         DatePicker,
         DateTimePicker,
         Maskedit
     }
     enum FilterEditType {
         String,
         Boolean,
         Numeric,
         Dropdown,
         DatePicker,
         DateTimePicker,
         Maskedit
     }
     enum ContextMenuItems {
         Add,
         Edit,
         Delete
     }
     enum EditMode {
         CellEditing,
         RowEditing
     }
     enum RowPosition {
         Top,
         Bottom,
         Above,
         Below,
         Child
     }
     enum ToolbarItems {
         Add,
         Edit,
         Delete,
         Update,
         Cancel,
         ExpandAll,
         CollapseAll,
         PdfExport
     }
     enum SelectionType {
         Single,
         Multiple
     }
 }
class NavigationDrawer extends ej.Widget {
    static fn: NavigationDrawer;
    element: JQuery;
    constructor(element: JQuery, options?: NavigationDrawerOptions);
    model: NavigationDrawerOptions;
    defaults: NavigationDrawerOptions;
    open(e:any): void;
    close(e:any): void;
    toggle(e:any): void;
}
//ejNavigationDrawer Option
interface NavigationDrawerOptions {

    direction?: ej.NavigationDrawer.Direction;

    targetId?: string;
    position?: ej.NavigationDrawer.Position;
    enableListView?: boolean;
    isPaneOpen?: boolean;
    listViewSettings?: {};
    type?: ej.NavigationDrawer.Type;
    width?: string;
    contentId?: string;
    swipe? (e: NavigationDrawerSwipeEventArgs): void;
    open? (e: NavigationDrawerOpenBeforeCloseEventArgs): void;
    beforeClose? (e: NavigationDrawerOpenBeforeCloseEventArgs): void;
}

//ejNavigationDrawer Swipe Event Arugument
interface NavigationDrawerSwipeEventArgs {
    type: string;
    cancel: boolean;
    element: Object;
    model: Object;
    targetElement: Object;
    direction: string;
}
//ejNavigationDrawer Open and BeforeClose Event Arugument
interface NavigationDrawerOpenBeforeCloseEventArgs {
    type: string;
    cancel: boolean;
    element: Object;
    model: Object;
}
 
export module NavigationDrawer{
enum Direction{
Left,
Right
}

enum Position{
Normal,
Fixed
}

enum Type{
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
    enableItem(item: string): void;
    disableItem(item: string): void;
    enableItems(item: string): void;
    disableItems(item: string): void;
    enableItemByIndex(index: number): void;
    enableItemsByIndices(index: number): void;
    disableItemByIndex(index: number): void;
    disableItemsByIndices(index: number): void;
    updateBadgeValue(index: number, value: number): void;
    showBadge(index: number): void;
    hideBadge(index: number): void;
}

interface RadialMenuOptions {
    radius?: number;
    imageClass?: string;
    backImageClass?: string;
    targetElementId?: string;
    autoOpen?: boolean;
    position?: PositionOptions;
    enableAnimation?: boolean;
    cssClass?: string;
    click? (e: RadialMenuEventArgs): void;
    open? (e: RadialMenuEventArgs): void;
    close? (e: RadialMenuEventArgs): void;
}
interface PositionOptions {
    x?: number;
    y?: number;
}

interface RadialMenuEventArgs {
    cancel: boolean;
    model: RadialMenuOptions;
    type: string;
    index: number;
    childIndex: number;
    text: string;
}


    class Tile extends ej.Widget {
        static fn: Tile;
        element: JQuery;
        constructor(element: JQuery, options?: TileOptions);
        constructor(element: Element, options?: TileOptions);
		model:TileOptions;
		defaults:TileOptions;
        destroy(): void;
        updateTemplate(id:string, index:number): void;
    }

    interface TileOptions {
        badge?: tileBadgeOptions;
        captionTemplateId?: string;
		enablePersistence?: boolean;
        imageClass?: string;
        imagePosition?: ej.Tile.ImagePosition;
        imageTemplateId?: string;
        imageUrl?: string;
		liveTile?: liveTileOptions;
        showText?: boolean;
        text?: string;
		cssClass?:string;
        textAlignment?: ej.Tile.TextAlignment; 
        tileSize?: ej.Tile.TileSize;
        width?: number;
        height?: number;
        mouseUp? (e: tileMouseUpEventArgs): void;
        mouseDown? (e: tileMouseDownEventArgs): void;
    }

    interface tileBadgeOptions {
        enabled?: boolean;
        value?: number;
        maxValue?: number;
        minValue?: number;
		text?: string;
    }

	interface liveTileOptions {
        enabled?: boolean;
        imageClass?: string;
		imageTemplateId?: string;
		imageUrl?: string[];
		type?: ej.Tile.LiveTileType;
		updateInterval?: number;
    }
	
    interface tileMouseUpEventArgs {
        cancel: boolean;
        model: TileOptions;
        type: string;
        text: string;
    }

    interface tileMouseDownEventArgs {
        cancel: boolean;
        model: TileOptions;
        type: string;
        text: string;
    }
export module Tile{
	enum TextAlignment{
		Normal,
		Left,
		Right,
		Center
		}
	enum TileSize{
		Medium,
		Small,
		Large,
		Wide	
	}
	enum ImagePosition{
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
	enum LiveTileType{
		Flip,
		Slide,
		Carousel
	}
}
class RadialSlider extends ej.Widget {
    static fn: RadialSlider;
    element: JQuery;
    constructor(element: JQuery, options?: RadialSliderOptions);
    constructor(element: Element, options?: RadialSliderOptions);
	model:RadialSliderOptions;
	defaults:RadialSliderOptions;
    show(): void;
    hide(): void;
}

interface RadialSliderOptions {
    radius?: number;
    endAngle?: number;
    startAngle?: number;
    ticks?: Int32Array;
    enableRoundOff?: boolean;
    value?: number;
    strokeWidth?: number;
    autoOpen?: boolean;
    enableAnimation?: boolean;
    cssClass?: string;
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
    destory? (e: RadialSliderDestroyEventArgs): void;
}
interface RadialSliderCreateEventArgs {
    cancel: boolean;
    model: RadialSliderOptions;
    type: string;
}
interface RadialSliderDestroyEventArgs {
    cancel: boolean;
    model: RadialSliderOptions;
    type: string;
}
interface RadialSliderStopEventArgs {
    cancel: boolean;
    model: RadialSliderOptions;
    type: string;
    value: number;
}

interface RadialSliderStartEventArgs {
    cancel: boolean;
    model: RadialSliderOptions;
    type: string;
    value: number;
}
interface RadialSliderSlideEventArgs {
    cancel: boolean;
    model: RadialSliderOptions;
    type: string;
    value: number;
    selectedValue: number;
}
interface RadialSliderChangeEventArgs {
    cancel: boolean;
    model: RadialSliderOptions;
    type: string;
    value: number;
    oldValue: number;
}
interface RadialSliderMouseOverEventArgs {
    cancel: boolean;
    model: RadialSliderOptions;
    type: string;
    value: number;
    selectedValue: number;
}
class Spreadsheet extends ej.Widget {
    static fn: Spreadsheet;
    constructor(element: JQuery, options?: SpreadsheetOptions);
    constructor(element: Element, options?: SpreadsheetOptions);
	model:SpreadsheetOptions;
	defaults:SpreadsheetOptions;
    getCFRule(rowIdx: number, colIdx: number): Array<Object>;
	setCFRule(rule: Object): void;
	clearCF(isSelected: boolean, range: Array<number>) : void;
    applyDVRules(required: boolean, showErrorAlert: boolean, values: Array<any>, type: string, range: Array<number>): void;
    clearDV(range: string): void;
    highlightInvalidData(range: string): void;
    replaceAllBySheet(findData: any, replaceData: any, isCSen: boolean, isEMatch: boolean): void;
    replaceAllByBook(findData: any, replaceData: any, isCSen: boolean, isEMatch: boolean): void;
    export(type: any): void;
    copyCells: Array<any>;
    cutCells:Array<any>;
    pasteCells:Array<any>;
    getCurrentEditCellData(): string;
    getColumnIndexByField(field: string): number;
    getPropertyValue(rowindex: number, colindex: number, property: any, sheetIdx: number): any;
    getPropertyValueByElem($elem: JQuery, property: any, sheetIdx: number): any;
    getColWidth(colIdx: number): number;
    getRowHeight(rowIdx: number): number;
    setColWidth(colIdx: number, size: number): void;
    setRowHeight(rowIdx: number, size: number): void;
    getActiveCellElem(sheetIndex: number): JQuery;
    setBorder(property: Object, range: string): void;
    clearBorder(range: string): void;
    clearAllFormat(aRange: string): void;
    clearAll(aRange: string): void;
    sheetRename(sheetName: string): void;
    sortByColor(args: string, color: Array<string>, range: string): void;
    sortByRange(range: Array<number>, columnName: string, direction: string): void;
    filter(range: string): void;
    clearFilter(status: string): void;
    filterByActiveCell(): void;
    fitWidth(colIdxes: Array<number>, rows: Array<any>): void;
    fitHeight(rowIdxes: Array<number>): void;
    setWrapText(range: string, operation: string): void;
    printSelection(): void;
    deleteSheet(index: number): void;
    copySheet(fromIndex: number, toIndex: number, isCopySheet: boolean): void;

    printSheet(): void;
    insertShiftRight(startCell: Object, endCell: Object): void;
    insertShiftBottom(startCell: Object, endCell: Object): void;
    insertEntireRow(startCell: Object, endCell: Object): void;
    insertEntireColumn(startCell: Object, endCell: Object): void;
    deleteShiftLeft(startCell: Object, endCell: Object): void;
    deleteShiftUp(startCell: Object, endCell: Object): void;
    deleteEntireRow(startCell: Object, endCell: Object): void;
    deleteEntireColumn(startCell: Object, endCell: Object): void;
    hideColumn(startCol: number, endCol: number): void;
    showColumn(startCol: number, endCol:number): void;
    hideRow(startRow: number, endRow: number): void;
    showRow(startRow: number, endRow: number): void;
    setWidthToColumns(widthColl: Array<Object>): void;
    freezeTopRow(): void;    
    freezeFirstColumn(): void;
    freezeRows(freezerow: number): void;
    freezeColumns(freezecolumn: number): void;
    freezePanes(cell: Object): void;
    getFrozenRows(sheetIdx: number): number;
    getFrozenColumns(sheetIdx: number): number;
    unfreezePanes(): void;
    mergeCells(range: string, alertStatus: boolean): void;
    mergeAcrossCells(range: string, alertStatus: boolean): void;
    unmergeCells(range: string): void;
    setUndoRedoSteps(value: number): void;
    setHyperlink(range:string, linkRefer:Object, sheetIdx: number, selCells: Array<Object>): void;
    removeHyperlink(range: string, isClearHLink: boolean, status: string, cells: Array<Object>, skipHiddenRow:boolean): void;
    getHyperlink(cell: JQuery): Object;
    autoSum(type: string, range: string): void;
    setComment(trgtCell: JQuery, data: string, showEditPanel: boolean, showUserName:boolean): void;
    editComment(trgtCell: JQuery): void;
    deleteComment(range: Array<number>, status: string, skipHiddenRow: boolean): void;
    showHideComment(trgtCell: JQuery): void;
    showAllComments(): void;
    findPrevComment(): boolean;
    findNextComment(): boolean;
    getComment(cell: JQuery): Object;
    insertSheet(): void;
    hideSheet(shtInfo: string): void;
    unhideSheet(shtInfo: string): void;
    selectRange(startCell: Object, endCell: Object, trgt: JQuery): void;
    selectRow(rowIdx: number): void;
    selectColumn(colIdx: number): void;
    selectRows(startIndex: number, endIndex: number): void;
    selectColumns(startIndex: number, endIndex: number): void;
    selectSheet(): void;
    getSelectedCells(sheetIdx: number): Array<Element>;
    refreshSelection(range: Array<number>): void;
    positionAutoFillElement(isdragfill: boolean): void;
    hideAutoFillElement(): void;
    hideAutoFillOptions(): void;
    autoFill(options: Object): void;
    format(formatObj: Object, range: string): void;
    updateDecimalPlaces(type: string, range: string):void;
    clearFormat(range: Array<number>, type: string, skipHiddenRow:boolean): void;
    updateFormat(formatobj: Object, range: Array<number>): void;
    updateUniqueFormat(formatclass: string, range: Array<number>): void;
    createTable(tableObj: Object, range: string): void;
    removeTable(tableid: any): void;
    moveRangeTo(sourcerange: Array<number>, destinationrange: Array<number>): void;
    import(importRequest: any): void;
    importSuccess(response: Object): void;
    createChart(range: string, options: Object): void;
    resizeChart(id: string, height: any, width: any): void;
    refreshChart(id: string, options: Object): void;
    updateFormulaBar(): void;
    hideFormulaBar(): void;
    showFormulaBar(): void;
    addNamedRange(name: string, refersTo: string, comment: string, sheetIdx: number): void;
    removeNamedRange(name: string): void;
    getSheet(index: number): Object;
    getSheetElement(index: number): Array<Element>;
    getPager(): Array<Element>;
    setPager(value: JQuery): void;
    getFooter(): Array<Element>;
    setFooter(value: JQuery): void;
    getActivationPanel(): Array<Element>;
    setActivationPanel(value: JQuery): void; 
    getActiveSheetIndex(): number;
    setActiveSheetIndex(value: number): void;
    getRows(index: number): any;
    setRows(value: any, sheetIdx: number): void;
    getAutoFillElem(): Array<Element>;
    setAutoFillElem(elem: JQuery): void;
    getActiveCell(sheetIdx: number): Object;
    setActiveCell(rowIdx: number, colIdx: number, sheetIdx: number): void;
    gotoPage(pageIndex: number, newSheet: boolean): void;
    displayActivationPanel(rangeName: any): void;
    addNewSheet(): void;
    getCell(rowindex: number, columnindex: number, sheetIdx: number): Array<Element>;
    getRange(startRIndex: number, startCIndex: number, endRIndex: number, endCIndex: number, sheetIdx: number, skipHiddenRow:boolean): Array<Element>;
    getRangeIndices(range: string): Array<number>;
    updateRange(sheetIdx: number, rangeSettings: Object): void;
    editRange(rangeName: string, fn: any): void;
    removeRange(rangeName: string): void;
    clearRange(rangeName: string): void;
    getRangeData(range: Array<number>, valueonly: boolean, property: Array<string>, sheetIdx: number, skipDateTime: boolean, skipFormula: boolean, skipHiddenRow: boolean, virtualRowIdx:number, virtualRowCount:number, withRowIdx:number): any;


    performSelection(startCell: Object, endCell: Object): void;
    setSheetFocus(): void;
    showWaitingPopUp(): void;
    hideWaitingPopUp(): void;



}
interface SpreadsheetOptions {

    allowConditionalFormats?: boolean;
    allowDataValidation?: boolean;
    allowSearching?: boolean;
    exportSettings?: XLExportSettings;
    pictureSettings?: XLPictureSettings;
    allowClipboard?: boolean;
    enableContextMenu?: boolean;
    allowEditing?: boolean;
    allowResizing?: boolean;
    sheetCount?: number;
    rowHeight?: number;
    columnWidth?: number;
    columnCount?: number;
    rowCount?: number;
    activeSheetIndex?: number;
    locale?: string;
    showRibbon?: boolean;
    allowMerging?: boolean;
    scrollSettings?: XLScrollSettings;
    allowFiltering?: boolean;   
    allowWrap?: boolean;
    printSettings?: XLPrintSettings;
    allowInsert?: boolean;
    allowDelete?: boolean;
    allowFreezing?: boolean;
    allowUndoRedo?: boolean;
    allowHyperlink?: boolean;
    allowFormatPainter?: boolean;
    allowAutoSum?: boolean;
    allowComments?: boolean;
    userName?: string;
    allowKeyboardNavigation?: boolean;
    selectionSettings?: XLSelectionSettings;
    allowAutoFill?: boolean;
    autoFillSettings?: XLAutoFillSettings;
    allowCellFormatting?: boolean;
    formatSettings?: XLFormatSettings;
    allowFormatAsTable?: boolean;
    allowSorting?: boolean;
    allowDragAndDrop?: boolean;
    allowImport?: boolean;
    importSettings?: XLImportSettings;
    allowCharts?: boolean;
    chartSettings?: XLChartSettings;
    allowFormulaBar?: boolean;
	enablePersistence?: boolean;
    cssClass?: string;
    nameManager?: Array<Object>;
    sheets?: Array<XLSheets>;
   
    beforeOpen? (e: XLBeforeOpen): void; 
    cellEdit? (e: XLCellEdit): void; 
    cellSave? (e: XLCellSave): void; 
    onCellHover? (e: XLOnCellHover): void; 
    editRangeBegin? (e: XLEditRangeBegin): void; 
    editRangeComplete? (e: XLEditRangeComplete): void; 
    beforeCellSelect? (e: XLBeforeCellSelect): void;
    autoFillBegin? (e: XLAutoFillBegin): void; 
    autoFillComplete? (e: XLAutoFillComplete): void; 
    beforeCellFormat? (e: XLBeforeCellFormat): void; 
    drag? (e: XLDrag): void;
    beforeDrop? (e: XLBeforeDrop): void; 
    drop? (e: XLDrop): void; 
    pagerClick? (e: XLPagerClick): void; 
    cellClick? (e: XLCellClick): void;
    onTabClick? (e: XLOnTabClick): void;
    onTabSelect? (e: XLOnTabSelect): void;
    beforePanelOpen? (e: XLBeforePanelOpen): void;
    onLoad? (e: XLOnLoad): void;
    onLoadComplete? (e: XLOnLoadComplete): void;
    menuClick? (e: XLMenuClick): void;
    contextMenuClick? (e: XLContextMenuClick): void;
    ribbonClick? (e: XLRibbonClick): void;
	dragStart? (e: XLDragStart): void;
    actionBegin? (e: XLActionBegin): void;
    actionComplete? (e: XLActionComplete): void;
    seriesRendering? (e: XLSeriesRendering): void;
    openFailure? (e: XLOpenFailure): void;
}
    //#region interfaces
	
	interface XLExportSettings {
        allowExporting?: boolean;
        excelUrl?: string;
        csvUrl?: string;
		password?:string;
    }
    interface XLPictureSettings {
        allowPictures?: boolean;
        height?: number;
        width?: number;
    }

    interface XLScrollSettings {
        width?: number;
        height?: number;
        allowScrolling?: boolean;
        scrollMode?: ej.Spreadsheet.scrollMode;
        isResponsive?: boolean;
		allowVirtualScrolling?: boolean;
    }

    interface XLFilterSettings {
        maxFilterChoices?: number;
    }

    interface XLPrintSettings {
        allowPageSetup?: boolean;
        allowPageSize?: boolean;
        allowPrinting?: boolean;
    }

    interface XLSelectionSettings {
        selectionType?: ej.Spreadsheet.SelectionType;
        selectionUnit?: ej.Spreadsheet.SelectionUnit;
        enableAnimation?: boolean;
        animationType?: string;
        animationTime?: number;
		activeCell?:string;
    }

    interface XLAutoFillSettings {
        fillType?: ej.Spreadsheet.AutoFillOptions;
        showFillOptions?: boolean;
    }

    interface XLFormatSettings {
        allowFontFamily?: boolean;
        allowDecimalPlaces?: boolean;
        allowCellBorder?: boolean;
    }

    interface XLImportSettings {
        importMapper?: string;
        importUrl?: string;
        password?: string;
    }

    interface XLChartSettings {
         height?: number;
         width?: number;
    }
	
	interface XLSheets {
        colCount?: number;
        rowCount?: number;
        columnsWidthCollection?: Array<number>;
        rowsHeightCollection?: Array<number>;
        showHeader?: boolean;
        showGridlines?: boolean;
        dataSource?: any;
        columns?: Array<Object>;
        filterSettings?: XLFilterSettings;
        columnWidth?: number;
        rowHeight?: number;
        selectedRange?: Array<number>;
        rangeSettings?: Array<Object>;
        staticWidth?: number;
        hideColsCollection?: Array<number>;
        hideRowsCollection?: Array<number>;
        filteredRowsCollection?: Array<number>;       
    }
	
    interface SpreadsheetBaseEvent extends ej.BaseEvent {
        model?: SpreadsheetOptions;
    }
   
    interface XLBeforeOpen extends SpreadsheetBaseEvent {
        target?: JQuery;
        type: string;
    }

    interface XLCellEdit extends SpreadsheetBaseEvent {
        cell: JQuery;
        columnName: string;
        columnObject: Object;
        type: string;
        value: string;
    }

    interface XLCellSave extends SpreadsheetBaseEvent {
        cell: JQuery;
        columnName: string;
        columnObject: Object;
        pValue: string;
        value: string;
    }

    interface XLOnCellHover extends SpreadsheetBaseEvent {
        target?: JQuery;       
    }

    interface XLEditRangeBegin extends SpreadsheetBaseEvent {
        range: any;
        sheetIndex: number;
    }

    interface XLEditRangeComplete extends SpreadsheetBaseEvent {
        range: any;
        sheetIndex: number;
    }

    interface XLBeforeCellSelect extends SpreadsheetBaseEvent {
        cells: JQuery;
        prevCells: JQuery;
        prevRange: any;
        rangeData: any;
        target: JQuery;
    }

    interface XLAutoFillBegin extends SpreadsheetBaseEvent {
        dataRange: any;
        direction: string;
        fillRange: any;
        fillType: string;
        sheetIndex: number;
    }

    interface XLAutoFillComplete extends SpreadsheetBaseEvent {
        dataRange: any;
        direction: string;
        fillRange: any;
        fillType: string;
        sheetIndex: number;
        type: string;
        target: JQuery;
    }

    interface XLBeforeCellFormat extends SpreadsheetBaseEvent {
        sheetIndex: number;
        format: Object;
        cells: JQuery;
    }

    interface XLDrag extends SpreadsheetBaseEvent {
        sheetIndex: number;
        currentCell: Object;
        target: JQuery;
        dragAndDropRange: Object;   
    }

    interface XLBeforeDrop extends SpreadsheetBaseEvent {
        sheetIndex: number;
        currentCell: Object;
        dragAndDropRange: Object;
        preventAlert: boolean;
        target: JQuery;
    }

    interface XLDrop extends SpreadsheetBaseEvent {
        sheetIndex: number;
        currentCell: Object;
        dragAndDropRange: Object;        
        target: JQuery;
    }

    interface XLPagerClick extends SpreadsheetBaseEvent {
        activeSheet: number;
        gotoSheet: number;
        newSheet: boolean;
    }

    interface XLCellClick extends SpreadsheetBaseEvent {
        columnName: string;
        value: any;
        columnIndex: number;
        rowIndex: number;
        columnObject: Object;
        cell: JQuery;
        eventArgs: any;
        event: any;
        target: JQuery;                  
    }

    interface XLOnTabClick extends SpreadsheetBaseEvent {
        activeHeader: JQuery;
        activeIndex: number;
        model: Object;
        prevActiveHeader: JQuery;
        prevActiveIndex: number;
        type: string;
    }

    interface XLOnTabSelect extends SpreadsheetBaseEvent {
        activeHeader: JQuery; 
        activeIndex: number;
        model: Object;
        prevActiveHeader: JQuery;
        prevActiveIndex: number;
        type: string;
    }

    interface XLBeforePanelOpen extends SpreadsheetBaseEvent {
        activationPanel: any;
        range: string;
        sheetIndex: number;      
    }

    interface XLOnLoad extends SpreadsheetBaseEvent {      
        sheetIndex: number;
    }

    interface XLOnLoadComplete extends SpreadsheetBaseEvent {       
    }

    interface XLMenuClick extends SpreadsheetBaseEvent {
        element: JQuery;
    }

    interface XLContextMenuClick extends SpreadsheetBaseEvent {
        ID: string;
        element: JQuery;
        event: any;
        events: Object;
        model: Object;
        parentId: string;
        parentText: string;
        selectedItem: any;
        text: string;
        type: string;
    }

    interface XLRibbonClick extends SpreadsheetBaseEvent {
        Id: string;
        isChecked: boolean;
        model: Object;
        prop: Object;
        status: boolean;
    }
	
	 interface XLDragStart extends SpreadsheetBaseEvent {
        sheetIndex: number;
        target: JQuery;
        currentCell: Object;
        dragAndDropRange: Object;
    }

    interface XLActionBegin extends SpreadsheetBaseEvent {
        operation: string;
        bgcolor: string;
        fgcolor: string;
        action: string;
        rangeData: any;
        range: any;
        sortDirection: string;
        columnName: string;
        filterIcon: Array<Element>;
        isSortByFilter: boolean;
        colSelected: boolean;
        currentFilterObject: Array<Object>;
        filterCollection: Array<Object>;
        currentFilteringColumn: string;
        filteredcolumns: Array<Object>;
        reqType: string;
        tableID: string;
        filterColumn: string;
        requestType: string;
        predicate: Object;
        sheetIndex: number;
        ejpredicate: Object;
        tableStyle: Object;
        newSheet: boolean;
        gotoIndex: number;
        address: string;
        text: string;
        value: any;
        isCaseSensitive: boolean;
        isEntireMatch: boolean;
        searchBy: string;
        mode: string;
        findType: string;
        targetCell: JQuery;
        top: any;
        left: any;
        width: any;
        height: any;
        bcolor: string;
        bstyle: string;
        bwidth: string;
        add: string;
    }

    interface XLActionComplete extends SpreadsheetBaseEvent {
        activeSheet: number;
        reqType: string;
        action: string;
        sheetIndex: number;
        value: any;
        isCaseSensitive: boolean;
        isEntireMatch: boolean;
        searchBy: string;
        mode: string;
        findType: string;
        operation: string;
        range: any;
        selCells: Array<Object>;
        curClass: string;
        shapeType: string;
        id: string;
        prevClass: string;
        picIdx: number;
        cellIdx: number;
        options: any;        
    }

    interface XLSeriesRendering extends ej.datavisualization.ChartEvent {
    }

    interface XLOpenFailure extends SpreadsheetBaseEvent {
        failureType: string;
        status: number;
        statusText: string;
    }   

    export module Spreadsheet {
        enum scrollMode {
            Normal,
            Infinite
        }
        enum SelectionType {
            Row,
            Column,
            Default
        }
        enum SelectionUnit {
           Single,
           Range,
           MultiRange
        }
        enum AutoFillOptions {
           CopyCells,
           FillSeries,
           FillFormattingOnly,
           FillWithoutFormatting,
           FlashFill
        }
    }



}
declare module ej.olap {
	
 class OlapChart extends ej.Widget {
        static fn: OlapChart;
        element: JQuery;
        constructor(element: Element, options?: OlapChartOptions);
        model: OlapChartOptions;
        validTags: Array<string>;
        defaults: OlapChartOptions;
        dataTypes: OlapChartDataTypes;
        observables: Array<string>;
        titleText(): void;
        seriesType(): void;
        locale(): void;
        getOlapReport(): string;
        setOlapReport(value:any): void;
        getJsonRecords(): string;
        setJsonRecords(value:any): void;
        renderControlSuccess(msg:any): void;
        renderChartFromJSON(jsonData:any): void;
        exportOlapChart(exportOption:ej.olap.OlapChart.ExportOptions): void;
        doAjaxPost(type:any, url:any, data:any, onSuccess:any): void;
		doPostBack(url:any, params:any): void;
    }

    interface OlapChartOptions {
        url?: string;
        cssClass?: string;
		isResponsive?:boolean;
		enable3D?:boolean;
		rotation?: number;
        currentReport?: string;
        customObject?: Object;
        serviceMethodSettings?: OlapChartServiceMethods; 
        locale?: string;
        drillSuccess? (e: OlapChartEvent): void;
        beforeServiceInvoke? (e: OlapChartEvent): void;
        afterServiceInvoke? (e: OlapChartEvent): void;
        renderComplete? (e: OlapChartEvent): void;
        renderFailure? (e: OlapChartEvent): void;
        renderSuccess? (e: OlapChartEvent): void;
    }

    interface OlapChartServiceMethods {
        initialize?: string;
        drillDown?: string;
		exportOlapChart?: string;
    }

    interface OlapChartDataTypes {
        marker?: Object;
        crossHair?: Object;
        size?: Object;
        serviceMethodSettings?: Object;
        zooming?: Object;
        customObject?: Object
    }

    interface OlapChartEvent {
        cancel: boolean;
        type: string;
        model: OlapChartOptions;
    }
export module OlapChart{
	enum ChartType{
		Line, 
		Spline, 
		Column, 
		Area, 
		SplineArea, 
		StepLine, 
		StepArea, 
		Pie, 
		Bar, 
		StackingArea, 
		StackingColumn, 
		StackingBar, 
		Pyramid, 
		Funnel 
	}
	enum ExportOptions{
	Excel,
	Word,
	PDF,
	CSV,
	PNG,
	JPG,
	EMF,
	GIF,
	BMP
	}
	enum SymbolShapes{
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

}
 class OlapClient extends ej.Widget {
        static fn: OlapClient;
        element: JQuery;
        constructor(element: Element, options?: OlapClientOptions);
        model: OlapClientOptions;
        validTags: Array<string>;
        defaults: OlapClientOptions;
        dataTypes: OlapClientDataTypes;
        observables: Array<string>;
        title(): void;
        gridLayout(): void;
        displayMode(): void;
        defaultView(): void;
        controlPlacement(): void;
        enableTogglePanel(): void;
        locale(): void;
        chartDrillSuccess(sender:any): void;
        gridDrillSuccess(sender:any): void;
        nodeDropped(sender:any): void;
        setSplitBtnTargetPos(event:any): number;
        cubeChanged(sender:any): void;
        measureGroupChanged(sender:any): void;
        reportChanged(sender:any): void;
        onDropped(sender:any): void;
        getAxisPosition(targetElement:any): Object;
        onTabClick(args:any): void;
        doAjaxPost(type:any, url:any, data:any, onSuccess:any, onComplete:any): void;
		doPostBack(url:any, params:any): void;
    }

    interface OlapClientOptions {
        url?: string;
        cssClass?: string;
        title?: string;
		gridLayout?: ej.PivotGrid.Layout;
        chartType?: ej.olap.OlapChart.ChartType;
        clientExportMode?: ej.olap.OlapClient.ClientExportMode;
        displaySettings?: OlapClientDisplayOptions;
        serviceMethodSettings?: OlapClientServiceMethods;
        customObject?: Object;
        enableMeasureGroups?: boolean;
		enableDeferUpdate?: boolean;
		isResponsive?:boolean;
        progressMode?: string;
        locale?: string;
        renderSuccess? (e: OlapClient) : void;
        renderFailure? (customObject: Object, element: JQuery, Message: string) : void;
        renderComplete? (customObject: Object, element: JQuery) : void;
        load? (element: JQuery, customObject: Object) : void;
        chartLoad? (e: OlapChartEvent): void;
        beforeServiceInvoke? (action: string, element: JQuery, customObject: Object) : void;
        afterServiceInvoke? (action: string, element: JQuery, customObject: Object) : void;
    }

    interface OlapClientDisplayOptions {
        mode?: ej.olap.OlapClient.DisplayMode;
        defaultView?: ej.olap.OlapClient.DefaultView;
        controlPlacement?: ej.olap.OlapClient.ControlPlacement;
        enableTogglePanel?: boolean;
		isResponsive?:boolean;
        enableFullScreen?: boolean;
    }

    interface OlapClientServiceMethods {
        initialize?: string;
        removeSplitButton?: string;
        filterElement?: string;
        nodeDropped?: string;
        fetchMemberTreeNodes?: string;
        cubeChanged?: string;
        measureGroupChanged?: string;
		toggleAxis?:string;
        toolbarServices?: string;
        memberExpand?: string;
        saveReport?: string;
        fetchReportList?: string;
        loadReport?: string;
        updateReport?: string;
		exportOlapClient?:string;
		mdxQuery?:string;
    }

    interface OlapClientDataTypes {
        displaySettings?: Object;
        serviceMethodSettings?: Object;
        customObject?: Object;
    }
export module OlapClient{
	enum ControlPlacement {
		Tab,
		Tile
	}
	enum DisplayMode {
		ChartOnly,
		GridOnly,
		ChartAndGrid
	}
	enum ClientExportMode {
		ChartAndGrid,
		ChartOnly,
		GridOnly
	}
	enum DefaultView {
		Chart,
		Grid
	}
}

    class OlapGauge extends ej.Widget {
        static fn: OlapGauge;
        element: JQuery;
        constructor(element: Element, options?: OlapGaugeOptions);
        model: OlapGaugeOptions;
        validTags: Array<string>;
        defaults: OlapGaugeOptions;
        dataTypes: OlapGaugeDataTypes;
        observables: Array<string>;
        rowsCount(): void;
        columnsCount(): void;
        showHeaderLabel(): void;
        locale(): void;
        radius(): void;
        frameType(): void;
        getOlapReport(): string;
        setOlapReport(): void;
        getJSONRecords(): string;
        setJSONRecords(): void;
        doAjaxPost(type:any, url:any, data:any, onSuccess:any, onComplete?:any): void;
        progressStatus(msg:string): void;
        removeImg(): void;
        renderControlFromJSON(jsonObj:any): void;
        refresh(): void;
    }

    interface OlapGaugeOptions {
        url?: string;
        cssClass?: string;
        rowsCount?: number;
        columnsCount?: number;
        enableTooltip?: boolean;
		isResponsive?:boolean;
        labelFormatSettings?: OlapGaugeFormatSettings;
        showHeaderLabel?: boolean;
        scales?: Object;
        customObject?: Object; 
        locale?: string;
        serviceMethodSettings?: OlapGaugeServiceMethods;
        renderSuccess? (e: OlapGaugeEvent): void;
        renderComplete?(e: OlapGaugeEvent): void;
        renderFailure?(e: OlapGaugeEvent): void;
        beforeServiceInvoke?(e: OlapGaugeEvent): void;
        afterServiceInvoke?(e: OlapGaugeEvent): void;
        load?(): void;
    }

	interface OlapGaugeEvent {
	    element: JQuery;
		customObject: Object;
	}

    interface OlapGaugeServiceMethods {
        initialize?: string;
    }

    interface OlapGaugeFormatSettings {
        numberFormat?: ej.olap.OlapGauge.NumberFormat;
        decimalPlaces?: number;
        prefixText?: string;
        suffixText?: string;
    }

    interface OlapGaugeDataTypes {
        serviceMethodSettings?: Object;
        customObject?: Object;
        scales?: Object; 
    }
export module OlapGauge{
	enum NumberFormat{
		Default,
		Currency,
		Percentage,
		Fraction,
		Scientific,
		Text,
		Notation
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

    ejButton(): JQuery;
    ejButton(options?: ej.ButtonOptions): JQuery;
    data(key: "ejButton"): ej.Button;

    ejCaptcha(): JQuery;
    ejCaptcha(options?: ej.CaptchaOptions): JQuery;
    data(key: "ejCaptcha"): ej.Captcha;

    ejAccordion(): JQuery;
    ejAccordion(options?: ej.AccordionOptions): JQuery;
    data(key: "ejAccordion"): ej.Accordion;

    ejAutocomplete(): JQuery;
    ejAutocomplete(options?: ej.AutocompleteOptions): JQuery;
    data(key: "ejAutocomplete"): ej.Autocomplete;

    ejDatePicker(): JQuery;
    ejDatePicker(options?: ej.DatePickerOptions): JQuery;
    data(key: "ejDatePicker"): ej.DatePicker;

    ejDateTimePicker(): JQuery;
    ejDateTimePicker(options?: ej.DateTimePickerOptions): JQuery;
    data(key: "ejDateTimePicker"): ej.DateTimePicker;

    ejDialog(): JQuery;
    ejDialog(options?: ej.DialogOptions): JQuery;
    data(key: "ejDialog"): ej.Dialog;

    ejDropDownList(): JQuery;
    ejDropDownList(options?: ej.DropDownListOptions): JQuery;
    data(key: "ejDropDownList"): ej.DropDownList;

    ejFileExplorer(): JQuery;
    ejFileExplorer(options?: ej.FileExplorerOptions): JQuery;
    data(key: "ejFileExplorer"): ej.FileExplorer;

    ejListBox(): JQuery;
    ejListBox(options?: ej.ListBoxOptions): JQuery;
    data(key: "ejListBox"): ej.ListBox;

    ejListView(): JQuery;
    ejListView(options?: ej.ListViewOptions): JQuery;
    data(key: "ejListView"): ej.ListView;

    ejNumericTextbox(): JQuery;
    ejNumericTextbox(options?: ej.EditorOptions): JQuery;
    data(key: "ejNumericTextbox"): ej.NumericTextbox;

    ejCurrencyTextbox(): JQuery;
    ejCurrencyTextbox(options?: ej.EditorOptions): JQuery;
    data(key: "ejCurrencyTextbox"): ej.CurrencyTextbox;

    ejPercentageTextbox(): JQuery;
    ejPercentageTextbox(options?: ej.EditorOptions): JQuery;
    data(key: "ejPercentageTextbox"): ej.PercentageTextbox;

    ejMaskEdit(): JQuery;
    ejMaskEdit(options?: ej.MaskEditOptions): JQuery;
    data(key: "ejMaskEdit"): ej.MaskEdit;

    ejMenu(): JQuery;
    ejMenu(options?: ej.MenuOptions): JQuery;
    data(key: "ejMenu"): ej.Menu;

    ejPager(): JQuery;
    ejPager(options?: ej.PagerOptions): JQuery;
    data(key: "ejPager"): ej.Pager;

    ejProgressBar(): JQuery;
    ejProgressBar(options?: ej.ProgressBarOptions): JQuery;
    data(key: "ejProgressBar"): ej.ProgressBar;

    ejRadioButton(): JQuery;
    ejRadioButton(options?: ej.RadioButtonOptions): JQuery;
    data(key: "ejRadioButton"): ej.RadioButton;

    ejCheckBox(): JQuery;
    ejCheckBox(options?: ej.CheckBoxOptions): JQuery;
    data(key: "ejCheckBox"): ej.CheckBox;

    ejRibbon(): JQuery;
    ejRibbon(options?: ej.RibbonOptions): JQuery;
    data(key: "ejRibbon"): ej.Ribbon;
	
    ejRating(): JQuery;
    ejRating(options?: ej.RatingOptions): JQuery;
    data(key: "ejRating"): ej.RatingOptions;

    ejRotator(): JQuery;
    ejRotator(options?: ej.RotatorOptions): JQuery;
    data(key: "ejRotator"): ej.Rotator;

    ejRTE(): JQuery;
    ejRTE(options?: ej.RTEOptions): JQuery;
    data(key: "ejRTE"): ej.RTE;

    ejSlider(): JQuery;
    ejSlider(options?: ej.SliderOptions): JQuery;
    data(key: "ejSlider"): ej.Slider;

    ejSplitButton(): JQuery;
    ejSplitButton(options?: ej.SplitButtonOptions): JQuery;
    data(key: "ejSplitButton"): ej.SplitButton;

    ejSplitter(): JQuery;
    ejSplitter(options?: ej.SplitterOptions): JQuery;
    data(key: "ejSplitter"): ej.Splitter;

    ejTab(): JQuery;
    ejTab(options?: ej.TabOptions): JQuery;
    data(key: "ejTab"): ej.Tab;

    ejTagCloud(): JQuery;
    ejTagCloud(options?: ej.TagCloudOptions): JQuery;
    data(key: "ejTagCloud"): ej.TagCloud;

    ejTimePicker(): JQuery;
    ejTimePicker(options?: ej.TimePickerOptions): JQuery;
    data(key: "ejTimePicker"): ej.TimePicker;

    ejTile(): JQuery;
    ejTile(options?: ej.TileOptions): JQuery;
    data(key: "ejTile"): ej.Tile;

    ejToggleButton(): JQuery;
    ejToggleButton(options?: ej.ToggleButtonOptions): JQuery;
    data(key: "ejToggleButton"): ej.ToggleButton;

    ejToolbar(): JQuery;
    ejToolbar(options?: ej.ToolbarOptions): JQuery;
    data(key: "ejToolbar"): ej.Toolbar;

    ejNavigationDrawer(): JQuery;
    ejNavigationDrawer(options?: ej.NavigationDrawerOptions): JQuery;
    data(key: "ejNavigationDrawer"): ej.NavigationDrawer;

    ejRadialMenu(): JQuery;
    ejRadialMenu(options?: ej.RadialMenuOptions): JQuery;
    data(key: "ejRadialMenu"): ej.RadialMenu;

    ejTreeView(): JQuery;
    ejTreeView(options?: ej.TreeViewOptions): JQuery;
    data(key: "ejTreeView"): ej.TreeView;

    ejUploadbox(): JQuery;
    ejUploadbox(options?: ej.UploadboxOptions): JQuery;
    data(key: "ejUploadbox"): ej.Uploadbox;

    ejWaitingPopup(): JQuery;
    ejWaitingPopup(options?: ej.WaitingPopupOptions): JQuery;
    data(key: "ejWaitingPopup"): ej.WaitingPopup;

    ejSchedule(): JQuery;
    ejSchedule(options?: ej.ScheduleOptions): JQuery;
    data(key: "ejSchedule"): ej.Schedule;

    ejGrid(): JQuery;
    ejGrid(options?: ej.GridOptions): JQuery;
    data(key: "ejGrid"): ej.Grid;
	
    /*ReportViewer*/
    ejReportViewer(): JQuery;
    ejReportViewer(options?: ej.ReportViewerOptions): JQuery;
    data(key: "ejReportViewer"): ej.ReportViewer;
    /*ReportViewer*/

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

    ejGantt(): JQuery;
    ejGantt(options?: ej.GanttOptions): JQuery;
    data(key: "ejGantt"): ej.Gantt;

    ejTreeGrid(): JQuery;
    ejTreeGrid(options?: ej.TreeGridOptions): JQuery;
    data(key: "ejTreeGrid"): ej.TreeGrid;

    ejMap(): JQuery;
    ejMap(options?: ej.datavisualization.MapOptions): JQuery;
    data(key: "ejMap"): ej.datavisualization.Map;

    ejTreeMap(): JQuery;
    ejTreeMap(options?: ej.datavisualization.TreeMapOptions): JQuery;
    data(key: "ejTreeMap"): ej.datavisualization.TreeMap;

    ejBarcode(): JQuery;
    ejBarcode(options?: ej.datavisualization.BarcodeOptions): JQuery;
    data(key: "ejBarcode"): ej.datavisualization.Barcode;

    ejDiagram(): JQuery;
    ejDiagram(options?: ej.datavisualization.DiagramOptions): JQuery;
    data(key: "ejDiagram"): ej.datavisualization.Diagram;

    ejSymbolPalette(): JQuery;
    ejSymbolPalette(options?: ej.datavisualization.SymbolPaletteOptions): JQuery;
    data(key: "ejSymbolPalette"): ej.datavisualization.SymbolPalette;

    ejOlapChart(): JQuery;
    ejOlapChart(options?: ej.olap.OlapChartOptions): JQuery;
    data(key: "ejOlapChart"): ej.olap.OlapChart;

    ejPivotGrid(): JQuery;
    ejPivotGrid(options?: ej.PivotGridOptions): JQuery;
    data(key: "ejPivotGrid"): ej.PivotGrid;

    ejPivotSchemaDesigner(): JQuery;
    ejPivotSchemaDesigner(options?: ej.PivotSchemaDesignerOptions): JQuery;
    data(key: "ejPivotSchemaDesigner"): ej.PivotSchemaDesigner;

    ejOlapClient(): JQuery;
    ejOlapClient(options?: ej.olap.OlapClientOptions): JQuery;
    data(key: "ejOlapClient"): ej.olap.OlapClient;

    ejOlapGauge(): JQuery;
    ejOlapGauge(options?: ej.olap.OlapGaugeOptions): JQuery;
    data(key: "ejOlapGauge"): ej.olap.OlapGauge;

    ejPivotPager(): JQuery;
    ejPivotPager(options?: ej.PivotPagerOptions): JQuery;
    data(key: "ejPivotPager"): ej.PivotPager;
	
    /* Spreadsheet */
    ejSpreadsheet(): JQuery;
    ejSpreadsheet(options?: ej.SpreadsheetOptions): JQuery;
    data(key: "ejSpreadsheet"): ej.Spreadsheet;
    /* Spreadsheet */

    ejScroller(): JQuery;
    ejScroller(options?: ej.ScrollerOptions): JQuery;
    data(key: "ejScroller"): ej.Scroller;

}