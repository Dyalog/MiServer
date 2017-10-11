/*!
*  filename: ej.common.all.d.ts
*  version : 15.3.0.33
*  Copyright Syncfusion Inc. 2001 - 2017. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws.
*/
declare namespace ej {
    /* tslint:disable:no-empty-interface */
    const dataUtil: dataUtil;
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
    function blockDefaultActions(e: any): void;
    function buildTag(tag: string, innerHtml?: string, styles?: any, attrs?: any): JQuery;
    function cancelEvent(): string;
    function copyObject(): string;
    function createObject(nameSpace: string, value: any, initIn: any): JQuery;
    function createObject(element: any, eventEmitter: any, model: any): any;
    function setCulture(culture: string): void;
    function getObject<T>(element: string, model: any): T;
    function getObject(nameSpace: string, fromdata?: any): any;
    function defineClass(className: string, constructor: any, proto: any, replace: boolean): any;
    function destroyWidgets(element: any): void;
    function endEvent(): string;
    function event(type: string, data: any, eventProp: any): any;
    function getAndroidVersion(): any;
    function getAttrVal(ele: any, val: string, option: any): any;
    function getBooleanVal(ele: any, val: string, option: any): any;
    function getClearString(): string;
    function getDimension(element: any, method: string): any;
    function getFontString(fontObj: any): string;
    function getFontStyle(style: string): string;
    function getMaxZindex(): number;
    function getNameSpace(className: string): string;
    function getOffset(ele: string): any;
    function getRenderMode(): string;
    function getScrollableParents(element: any): void;
    function getTheme(): string;
    function getZindexPartial(element: any, popupEle: string): number;
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
    function isNullOrUndefined(value: any): boolean;
    function isPlainObject(): JQuery;
    function isPortrait(): any;
    function isTablet(): boolean;
    function isWindowsWebView(): string;
    function listenEvents(selectors: any, eventTypes: any, handlers: any, remove?: any, pluginObj?: any, disableMouse?: boolean): void;
    function listenTouchEvent(selectors: any, eventTypes: any, handlers: any, remove?: any, pluginObj?: any, disableMouse?: boolean): void;
    function logBase(val: string, base: string): number;
    function measureText(text: string, maxwidth: number, font: string): string;
    function moveEvent(): string;
    function print(element: string, printWindow: any): void;
    function proxy(fn: any, context?: string, arg?: string): any;
    function round(value: string, div: string, up: string): any;
    function sendAjaxRequest(ajaxOptions: any): void;
    function setCaretToPos(nput: string, pos1: string, pos2: string): void;
    function setRenderMode(element: string): void;
    function setTheme(): any;
    function startEvent(): string;
    function tapEvent(): string;
    function tapHoldEvent(): string;
    function throwError(): any;
    function transitionEndEvent(): any;
    function userAgent(): boolean;
    function widget(pluginName: string, className: string, proto: any): any;
    function avg(json: any, filedName: string): any;
    function getGuid(prefix: string): number;
    function group(jsonArray: any, field: string, agg: string, level: number, groupDs: string): any;
    function isJson(jsonData: string): string;
    function max(jsonArray: any, fieldName?: string, comparer?: string): any;
    function min(jsonArray: any, fieldName: string, comparer: string): any;
    function merge(first: string, second: string): any;
    function mergeshort(jsonArray: any, fieldName: string, comparer: string): any;
    function parseJson(jsonText: string): string;
    function parseTable(table: number, headerOption: string, headerRowIndex: string): any;
    function select(jsonArray: any, fields: string): any;
    function setTransition(): boolean;
    function sum(json: string, fieldName: string): string;
    function swap(array: any, x: string, y: string): any;
    const cssUA: string;
    const serverTimezoneOffset: number;
    const transform: string;
    const transformOrigin: string;
    const transformStyle: string;
    const transition: string;
    const transitionDelay: string;
    const transitionDuration: string;
    const transitionProperty: string;
    const transitionTimingFunction: string;
    const template: any;
    const util: {
        valueFunction(val: string): any;
    };
    export namespace device {
        function isAndroid(): boolean;
        function isIOS(): boolean;
        function isFlat(): boolean;
        function isIOS7(): boolean;
        function isWindows(): boolean;
    }
    export namespace widget {
        const autoInit: boolean;
        const registeredInstances: any[];
        const registeredWidgets: any[];
        function register(pluginName: string, className: string, prototype: any): void;
        function destroyAll(elements: Element): void;
        function init(element: Element): void;
        function registerInstance(element: Element, pluginName: string, className: string, prototype: any): void;
    }

    interface browserInfoOptions {
        name: string;
        version: string;
        culture: any;
        isMSPointerEnabled: boolean;
    }
    class WidgetBase {
        destroy(): void;
        element: JQuery;
        setModel(options: any, forceSet?: boolean): any;
        option(prop?: any, value?: any, forceSet?: boolean): any;
        _trigger(eventName?: string, eventProp?: any): any;
        _on(element: JQuery, eventType?: string, handler?: (eventObject: JQueryEventObject) => any): any;
        _on(element: JQuery, eventType?: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any): any;
        _off(element: JQuery, eventName: string, handler?: (eventObject: JQueryEventObject) => any): any;
        _off(element: JQuery, eventType?: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any): any;
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
        insert(data: any, tableName?: string): JQueryPromise<any>;
        remove(keyField: string, value: any, tableName?: string): any;
        update(keyField: string, value: any, tableName?: string): any;
    }

    class Query {
        constructor();
        static fn: Query;
        static extend(prototype: any): Query;
        key(field: string): ej.Query;
        using(dataManager: ej.DataManager): ej.Query;
        execute(dataManager: ej.DataManager, done: any, fail?: string, always?: string): any;
        executeLocal(dataManager: ej.DataManager): ej.DataManager;
        clone(): ej.Query;
        from(tableName: any): ej.Query;
        addParams(key: string, value: string): ej.Query;
        expand(tables: any): ej.Query;
        where(fieldName: string, operator: ej.FilterOperators, value: any, ignoreCase?: boolean): ej.Query;
        where(predicate: ej.Predicate): ej.Query;
        search(searchKey: any, fieldNames?: any, operator?: string, ignoreCase?: boolean): ej.Query;
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
        range(start: number, end: number): ej.Query;
    }

    class Adaptor {
        constructor(ds: any);
        pvt: any;
        type: ej.Adaptor;
        options: AdaptorOptions;
        extend(overrides: any): ej.Adaptor;
        processQuery(dm: ej.DataManager, query: ej.Query): any;
        processResponse(data: any, ds: any, query: ej.Query, xhr: JQueryXHR, request?: any, changes?: Changes): any;
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
        processQuery(dm: ej.DataManager, query: ej.Query, hierarchyFilters?: any): {
            type: string; url: string; ejPvtData: any; contentType?: string; data?: any;
        };
        convertToQueryString(req: any, query: ej.Query, dm: ej.DataManager): JQueryParam;
        processResponse(data: any, ds: any, query: ej.Query, xhr: JQueryXHR, request?: any, changes?: Changes): any;
        onGroup(e: any): void;
        onAggregates(e: any): void;
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): void;
        beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any };
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data?: any };
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data: any };
        getFiltersFrom(data: any, query: ej.Query): ej.Predicate;
    }
    class WebMethodAdaptor extends ej.UrlAdaptor {
        constructor();
        processQuery(dm: ej.DataManager, query: ej.Query, hierarchyFilters?: any): {
            type: string; url: string; ejPvtData: any; contentType?: string; data?: any;
        };
    }
    class CacheAdaptor extends ej.UrlAdaptor {
        constructor();
        init(adaptor: any, timeStamp: number, pageSize: number): void;
        generateKey(url: string, query: ej.Query): string;
        processQuery(dm: ej.DataManager, query: ej.Query, hierarchyFilters?: any): any;
        processResponse(data: any, ds: any, query: ej.Query, xhr: JQueryXHR, request?: any, changes?: Changes): any;
        insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any };
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data?: any };
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data: any };
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): { url: string; type: string; data: any; contentType: string };
    }
    class ODataAdaptor extends ej.UrlAdaptor {
        constructor();
        options: UrlAdaptorOptions;
        onEachWhere(filter: any, requiresCast: boolean): any;
        onPredicate(pred: ej.Predicate, query: ej.Query, requiresCast: boolean): string;
        onComplexPredicate(pred: ej.Predicate, requiresCast: boolean): string;
        onWhere(filters: string[]): string;
        onEachSearch(e: any): void;
        onSearch(e: any): string;
        onEachSort(e: any): string;
        onSortBy(e: any): string;
        onGroup(e: any): string;
        onSelect(e: any): string;
        onAggregates(e: any): string;
        onCount(e: any): string;
        beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        processResponse(data: any, ds: any, query: ej.Query, xhr: any, request: any, changes: Changes): {
            result: any; count: number
        };
        convertToQueryString(req: any, query: ej.Query, dm: ej.DataManager): JQueryParam;
        insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any; };
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; };
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; data: any; accept: string; };
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): { url: string; type: string; data: any; contentType: string; };
        generateDeleteRequest(arr: any[], e: any): string;
        generateInsertRequest(arr: any[], e: any): string;
        generateUpdateRequest(arr: any[], e: any): string;
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

    class WebApiAdaptor extends ej.ODataAdaptor {
        constructor();
        insert(dm: ej.DataManager, data: any, tableName?: string): { url: string; type: string; data: any; };
        remove(dm: ej.DataManager, value: any, keyField?: string, tableName?: string): { url: string; type: string; data: any; };
        update(dm: ej.DataManager, value: any, keyField?: string, tableName?: string): { url: string; type: string; data: any; accept: string; };
        processResponse(data: any, ds: any, query: ej.Query, xhr: any, request: any, changes: Changes): {
            result: any; count: number
        };
    }

    class ODataV4Adaptor extends ej.ODataAdaptor {
        constructor();
        options: ODataAdaptorOptions;
        onCount(e: any): string;
        onEachSearch(e: any): void;
        onSearch(e: any): string;
        beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        processQuery(ds: any, query: ej.Query): {
            type: string; url: string; ejPvtData: any; contentType?: string; data?: any;
        };
        processResponse(data: any, ds: any, query: ej.Query, xhr: any, request: any, changes: Changes): {
            result: any; count: number
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
        processQuery(ds: any, query: ej.Query): string;
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): Changes;
        onWhere(ds: any, e: any): any;
        onAggregates(ds: any, e: any): any;
        onSearch(ds: any, e: any): any;
        onSortBy(ds: any, e: any, query: ej.Query): any;
        onGroup(ds: any, e: any, query: ej.Query): any;
        onPage(ds: any, e: any, query: ej.Query): any;
        onRange(ds: any, e: any): any;
        onTake(ds: any, e: any): any;
        onSkip(ds: any, e: any): any;
        onSelect(ds: any, e: any): any;
        insert(dm: ej.DataManager, data: any, tableName?: string): any;
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): any;
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): any;
    }
    class ForeignKeyAdaptor extends ej.JsonAdaptor {
        constructor();
        processQuery(ds: any, query: ej.Query): any;
        insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any };
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; data: any };
    }
    class remoteSaveAdaptor extends ej.UrlAdaptor {
        constructor();
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): void;
        beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any };
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data?: any };
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data: any };
    }
    class TableModel {
        constructor(name: string, jsonArray: any[], dataManager: ej.DataManager, modelComputed: any);
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
        toArray(): any[];
        setDirty(dirty: any, model: any): void;
        get(index: number): void;
        length(): number;
        bindTo(element: any): void;
    }
    class Model {
        constructor(json: any, table: string, name: string);
        formElements: string[];
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
        changed?: any[];
        added?: any[];
        deleted?: any[];
    }
    class Predicate {
        constructor();
        constructor(field: string, operator: ej.FilterOperators, value: any, ignoreCase: boolean);
        and(field: string, operator: any, value: any, ignoreCase: boolean): ej.Predicate;
        or(field: string, operator: any, value: any, ignoreCase: boolean): ej.Predicate;
        or(predicate: any[]): any;
        validate(record: any): boolean;
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
        swap(array: any[], x: number, y: number): void;
        mergeSort(jsonArray: any[], fieldName?: string, comparer?: any): any[];
        max(jsonArray: any[], fieldName?: string, comparer?: string): any[];
        min(jsonArray: any[], fieldName: string, comparer: string): any[];
        distinct(jsonArray: any[], fieldName?: string, requiresCompleteRecord?: any): any[];
        sum(json: any, fieldName: string): number;
        avg(json: any, fieldName: string): number;
        select(jsonArray: any[], fieldName: string, fields: string): any[];
        group(jsonArray: any[], field: string, /* internal */ level: number): any[];
        parseTable(table: string, headerOption: ej.headerOption, headerRowIndex: number): any;
    }
    interface AjaxSettings {
        type?: string;
        cache: boolean;
        data?: any;
        dataType?: string;
        contentType?: any;
        async?: boolean;
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

    enum Orientation {
        Horizontal,
        Vertical
    }

    enum SliderType {
        Default,
        MinRange,
        Range
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

    enum filterType {
        StartsWith,
        Contains,
        EndsWith,
        LessThan,
        GreaterThan,
        LessThanOrEqual,
        GreaterThanOrEqual,
        Equal,
        NotEqual
    }
    enum Animation {
        Fade,
        None,
        Slide
    }
    enum Type {
        Overlay,
        Slide
    }
    enum SortOrder {
        Ascending,
        Descending
    }
    class Draggable extends ej.Widget {
        static fn: Draggable;
        constructor(element: JQuery | Element, options?: Draggable.Model);
        static Locale: any;
        model: Draggable.Model;
        defaults: Draggable.Model;

        /** destroy in the draggable.
         * @returns {void}
         */
        destroy(): void;
    }
    export namespace Draggable {

        export interface Model {

            /** If clone is specified.
             * @Default {false}
             */
            clone?: boolean;

            /** Sets the offset of the dragging helper relative to the mouse cursor.
             * @Default {{ top: -1, left: -2 }}
             */
            cursorAt?: any;

            /** Distance in pixels after mousedown the mouse must move before dragging should start. This option can be used to prevent unwanted drags when clicking on an element.
             * @Default {1}
             */
            distance?: number;

            /** The drag area is used to restrict the dragging element bounds.Specify the id of the container within which the element should be dragged.
             * @Default {null}
             */
            dragArea?: boolean;

            /** If specified, restricts drag start click to the specified element(s).
             * @Default {null}
             */
            handle?: string;

            /** Used to group sets of draggable and droppable items, in addition to droppable's accept option. A draggable with the same scope value as a droppable will be accepted by the
             * droppable.
             * @Default {'default'}
             */
            scope?: string;

            /** This event is triggered when dragging element is destroyed.
             */
            destroy?(e: DestroyEventArgs): void;

            /** This event is triggered when the mouse is moved during the dragging.
             */
            drag?(e: DragEventArgs): void;

            /** Supply a callback function to handle the drag start event as an init option.
             */
            dragStart?(e: DragStartEventArgs): void;

            /** This event is triggered when the mouse is moved during the dragging.
             */
            dragStop?(e: DragStopEventArgs): void;

            /** This event is triggered when dragged.
             */
            helper?(e: HelperEventArgs): void;
        }

        export interface DestroyEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the autocomplete model
             */
            model?: ej.Draggable.Model;

            /** returns the name of the event
             */
            type?: string;
        }

        export interface DragEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the draggable model
             */
            model?: ej.Draggable.Model;

            /** returns the name of the event
             */
            type?: string;

            /** returns the event model values
             */
            event?: any;

            /** returns the exact mouse down target element
             */
            target?: any;
        }

        export interface DragStartEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the draggable model
             */
            model?: ej.Draggable.Model;

            /** returns the name of the event
             */
            type?: string;

            /** returns the event model values
             */
            event?: any;

            /** returns the exact mouse down target element
             */
            target?: any;
        }

        export interface DragStopEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the draggable model
             */
            model?: ej.Draggable.Model;

            /** returns the name of the event
             */
            type?: string;

            /** returns the event model values
             */
            event?: any;

            /** returns the exact mouse down target element
             */
            target?: any;
        }

        export interface HelperEventArgs {

            /** returns the draggable element object
             */
            element?: any;

            /** returns the event model values
             */
            sender?: any;
        }
    }

    class Droppable extends ej.Widget {
        static fn: Droppable;
        constructor(element: JQuery | Element, options?: Droppable.Model);
        static Locale: any;
        model: Droppable.Model;
        defaults: Droppable.Model;

        /** destroy in the Droppable.
         * @returns {void}
         */
        destroy(): void;
    }
    export namespace Droppable {

        export interface Model {

            /** Used to accept the specified draggable items.
             * @Default {null}
             */
            accept?: any;

            /** Used to group sets of droppable items, in addition to droppable's accept option. A draggable with the same scope value as a droppable will be accepted by the droppable.
             * @Default {'default'}
             */
            scope?: string;

            /** This event is triggered when the mouse up is moved during the dragging.
             */
            drop?(e: DropEventArgs): void;

            /** This event is triggered when the mouse is moved out.
             */
            out?(e: OutEventArgs): void;

            /** This event is triggered when the mouse is moved over.
             */
            over?(e: OverEventArgs): void;
        }

        export interface DropEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the autocomplete model
             */
            model?: ej.Droppable.Model;

            /** returns the name of the event
             */
            type?: string;

            /** returns the element which accepts the droppable element.
             */
            target?: any;
        }

        export interface OutEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the autocomplete model
             */
            model?: ej.Droppable.Model;

            /** returns the name of the event
             */
            type?: string;

            /** returns the mouse out over the element
             */
            target?: any;
        }

        export interface OverEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the autocomplete model
             */
            model?: ej.Droppable.Model;

            /** returns the name of the event
             */
            type?: string;

            /** returns the mouse over the element
             */
            target?: any;
        }
    }

    class Resizable extends ej.Widget {
        static fn: Resizable;
        constructor(element: JQuery | Element, options?: Resizable.Model);
        static Locale: any;
        model: Resizable.Model;
        defaults: Resizable.Model;

        /** destroy in the Resizable.
         * @returns {void}
         */
        destroy(): void;
    }
    export namespace Resizable {

        export interface Model {

            /** Sets the offset of the resizing helper relative to the mouse cursor.
             * @Default {{ top: -1, left: -2 }}
             */
            cursorAt?: any;

            /** Distance in pixels after mousedown the mouse must move before resizing should start. This option can be used to prevent unwanted drags when clicking on an element.
             * @Default {1}
             */
            distance?: number;

            /** If specified, restricts resize start click to the specified element(s).
             * @Default {null}
             */
            handle?: string;

            /** Sets the max height till which an element has to be resized.
             * @Default {null}
             */
            maxHeight?: number;

            /** Sets the max width till which an element has to be resized.
             * @Default {null}
             */
            maxWidth?: number;

            /** Sets the min Height below which an element cannot be resized.
             * @Default {10}
             */
            minHeight?: number;

            /** Sets the min Width below which an element cannot be resized.
             * @Default {10}
             */
            minWidth?: number;

            /** Used to group sets of resizable items.
             * @Default {'default'}
             */
            scope?: string;

            /** This event is triggered when the widget destroys.
             */
            destroy?(e: DestroyEventArgs): void;

            /** This event is triggered when resized.
             */
            helper?(e: HelperEventArgs): void;
        }

        export interface DestroyEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the autocomplete model
             */
            model?: ej.Resizable.Model;

            /** returns the name of the event
             */
            type?: string;
        }

        export interface HelperEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the autocomplete model
             */
            model?: ej.Resizable.Model;

            /** returns the name of the event
             */
            type?: string;
        }
    }

    const globalize: globalize;
    const cultures: culture;
    function addCulture(name: string, culture?: any): void;
    function preferredCulture(culture?: string): culture;
    function format(value: any, format: string, culture?: string): string;
    function parseInt(value: string, radix?: any, culture?: string): number;
    function parseFloat(value: string, radix?: any, culture?: string): number;
    function parseDate(value: string, format: string, culture?: string): Date;
    function getLocalizedConstants(controlName: string, culture?: string): any;

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
        pattern: string[];
        decimals: number;
        groupSizes: number[];
        percent: percentSettings;
        currency: currencySettings;
    }
    interface percentSettings {
        pattern: string[];
        decimals: number;
        groupSizes: number[];
        symbol: string;
    }
    interface currencySettings {
        pattern: string[];
        decimals: number;
        groupSizes: number[];
        symbol: string;
    }
    interface calendarsSettings {
        standard: standardSettings;
    }
    interface standardSettings {
        firstDay: number;
        days: daySettings;
        months: monthSettings;
        AM: string[];
        PM: string[];
        twoDigitYearMax: number;
        patterns: patternSettings;
    }
    interface daySettings {
        names: string[];
        namesAbbr: string[];
        namesShort: string[];
    }
    interface monthSettings {
        names: string[];
        namesAbbr: string[];
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
        constructor(element: JQuery | Element, options?: Scroller.Model);
        static Locale: any;
        model: Scroller.Model;
        defaults: Scroller.Model;

        /** destroy the Scroller control, unbind the all ej control related events automatically and bring the control to pre-init state.
         * @returns {void}
         */
        destroy(): void;

        /** User disables the Scroller control at any time.
         * @returns {void}
         */
        disable(): void;

        /** User enables the Scroller control at any time.
         * @returns {void}
         */
        enable(): void;

        /** Returns true if horizontal scrollbar is shown, else return false.
         * @returns {boolean}
         */
        isHScroll(): boolean;

        /** Returns true if vertical scrollbar is shown, else return false.
         * @returns {boolean}
         */
        isVScroll(): boolean;

        /** User refreshes the Scroller control at any time.
         * @returns {void}
         */
        refresh(): void;

        /** Horizontal scroller moves to given pixel from its origin position. We can also specify the animation speed,in which the scroller has to move while re-positioning it.
         * @param {number|string} Horizontal scroller moves to the specified pixel.
         * @param {boolean} Specifies to enable/disable the animation.
         * @param {number} Specifies the animation speed when scrolling, if animation is enabled.
         * @returns {void}
         */
        scrollX(pixel: number|string, disableAnimation: boolean, animationSpeed: number): void;

        /** Vertical scroller moves to given pixel from its origin position. We can also specify the animation speed,in which the scroller has to move while re-positioning it.
         * @param {number|string} Vertical scroller moves to the specified pixel.
         * @param {boolean} Specifies to enable/disable the animation.
         * @param {number} Specifies the animation speed when scrolling, if animation is enabled.
         * @returns {void}
         */
        scrollY(pixel: number|string, disableAnimation: boolean, animationSpeed: number): void;
    }
    export namespace Scroller {

        export interface Model {

            /** Specifies the swipe scrolling speed(in millisecond).
             * @Default {600}
             */
            animationSpeed?: number;

            /** Set true to hides the scrollbar, when mouseout the content area.
             * @Default {false}
             */
            autoHide?: boolean;

            /** Specifies the height and width of button in the scrollbar.
             * @Default {18}
             */
            buttonSize?: number;

            /** Specifies to enable or disable the scroller
             * @Default {true}
             */
            enabled?: boolean;

            /** Save current model value to browser cookies for state maintenance. While refresh the page Rating control values are retained.
             * @Default {false}
             */
            enablePersistence?: boolean;

            /** Indicates the Right to Left direction to scroller
             * @Default {undefined}
             */
            enableRTL?: boolean;

            /** Enables or Disable the touch Scroll
             * @Default {true}
             */
            enableTouchScroll?: boolean;

            /** Specifies the height of Scroll panel and scrollbars.
             * @Default {250}
             */
            height?: number|string;

            /** If the scrollbar has vertical it set as width, else it will set as height of the handler.
             * @Default {18}
             */
            scrollerSize?: number;

            /** The Scroller content and scrollbars move left with given value.
             * @Default {0}
             */
            scrollLeft?: number;

            /** While press on the arrow key the scrollbar position added to the given pixel value.
             * @Default {57}
             */
            scrollOneStepBy?: number;

            /** The Scroller content and scrollbars move to top position with specified value.
             * @Default {0}
             */
            scrollTop?: number;

            /** Indicates the target area to which scroller have to appear.
             * @Default {null}
             */
            targetPane?: string;

            /** Specifies the width of Scroll panel and scrollbars.
             * @Default {0}
             */
            width?: number|string;

            /** Fires when Scroller control is created.
             */
            create?(e: CreateEventArgs): void;

            /** Fires when Scroller control is destroyed.
             */
            destroy?(e: DestroyEventArgs): void;

            /** Fires when a thumb point is moved along the touch surface.
             */
            thumbMove?(e: ThumbMoveEventArgs): void;

            /** Fires when a thumb point is placed on the touch surface.
             */
            thumbStart?(e: ThumbStartEventArgs): void;

            /** Fires when a thumb point is removed from the touch surface.
             */
            thumbEnd?(e: ThumbEndEventArgs): void;

            /** It fires whenever the mouse wheel is rotated either in upwards or downwards.
             */
            wheelMove?(e: WheelMoveEventArgs): void;

            /** It will fire when mouse trackball has been start to wheel.
             */
            wheelStart?(e: WheelStartEventArgs): void;

            /** It will fire when mouse trackball has been stop to wheel.
             */
            wheelStop?(e: WheelStopEventArgs): void;
        }

        export interface CreateEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the scroller model
             */
            model?: ej.Scroller.Model;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface DestroyEventArgs {

            /** returns the scroller model
             */
            model?: ej.Scroller.Model;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface ThumbMoveEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the scroller model
             */
            model?: ej.Scroller.Model;

            /** returns the original event name and its event properties of the current event.
             */
            originalEvent?: any;

            /** returns the current data related to the event.
             */
            scrollData?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface ThumbStartEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the scroller model
             */
            model?: ej.Scroller.Model;

            /** returns the original event name and its event properties of the current event.
             */
            originalEvent?: any;

            /** returns the current data related to the event.
             */
            scrollData?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface ThumbEndEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the scroller model
             */
            model?: ej.Scroller.Model;

            /** returns the original event name and its event properties of the current event.
             */
            originalEvent?: any;

            /** returns the current data related to the event.
             */
            scrollData?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface WheelMoveEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the scroller model
             */
            model?: ej.Scroller.Model;

            /** returns the original event name and its event properties of the current event.
             */
            originalEvent?: any;
        }

        export interface WheelStartEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the scroller model
             */
            model?: ej.Scroller.Model;

            /** returns the original event name and its event properties of the current event.
             */
            originalEvent?: any;

            /** returns the current data related to the event.
             */
            scrollData?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface WheelStopEventArgs {

            /** if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the scroller model
             */
            model?: ej.Scroller.Model;

            /** returns the name of the event.
             */
            type?: string;

            /** returns the original event name and its event properties of the current event.
             */
            originalEvent?: any;
        }
    }

}
