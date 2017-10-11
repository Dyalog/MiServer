import {
    forwardRef, ViewContainerRef, ContentChildren,
    EventEmitter, QueryList, Type, ContentChild,
    Component, Directive, ElementRef, SimpleChange,
    ChangeDetectionStrategy, ChangeDetectorRef, TemplateRef, EmbeddedViewRef
} from '@angular/core';

import { NG_VALUE_ACCESSOR } from '@angular/forms';

export { ContentChild, Type, forwardRef } from '@angular/core';

export let currentTemplateElement: any;



export interface IParentTag {
    tags: Array<any>;
}

export interface IChildChange {
    index: number;
    change: any;
}

export interface IChangeSet {
    [key: string]: Array<IChildChange>;
}

let firstVal = {};

/** Internal Helpers */
export class Utils {
    static IterateAndGetChanges(obj: IParentTag): IChangeSet {
        if (ej.isNullOrUndefined(obj.tags) || obj.tags.length === 0) {
            return null;
        }
        let res: IChangeSet = {};
        for (let i = 0, tags = obj.tags; i < tags.length; i++) {
            let tag = tags[i], tagElement = (<any>obj)['tag_' + tag.replace(/\./g, '_')];
            if (!ej.isNullOrUndefined(tagElement) && tagElement.hasChanges) {
                res[tag] = tagElement.getChangesAndReset();
            }
        }
        return res;
    }

}

export class EJComponents<W, T> implements IParentTag {
    public model: T = <T>{};
    public widget: W;
    protected outputs: Array<string> = [];
    protected inputs: Array<string> = [];
    protected twoways: Array<string> = [];
    protected complexProperties: Array<string>;
    protected isEditor: boolean;

    private firstCheck: boolean;

    constructor(protected controlName: string, protected el: ElementRef, protected cdRef: ChangeDetectorRef, public tags: Array<string>) {
        //        this.__shadow = this.dom.getShadowRoot(this.el.nativeElement);
        this.firstCheck = true;
    }

    protected createTwoways(twoways: Array<string>) {
        if (!twoways) { return; }
        let model = this.model;
        for (let i = 0; i < twoways.length; i++) {
            let element = twoways[i].replace(/\_/g, '.');
            ej.createObject(element + 'Change', (<any>this)[twoways[i] + '_twoChange'], model);
            ej.createObject(element, this.addTwoways(element), model);
        }
    }

    protected addTwoways(prop: string): Function {
        let model = this.model, value = firstVal; // , originalProp = prop.replace(/-/g, '.');
        return function (newVal: any, isApp: boolean) {
            if (value === firstVal) {
                value = ej.getObject(prop + '_two', model);
                if (value === undefined) {
                    value = ej.getObject(prop, this === undefined || this.defaults === undefined ? {} : this.defaults);
                }
            }
            if (newVal === undefined) {
                return value;
            }
            if (value === newVal) { return; }
            value = newVal;
            if (!isApp) {
                ej.createObject(prop + '_two', newVal, model);
                ej.getObject<EventEmitter<any>>(prop + 'Change', model).emit(newVal);
            }
        };
    }
    ngOnInit() {
        for (let key in this) {
            if (key.indexOf("_input") != -1)
                this.inputs.push(key);
            if (key.indexOf("_output") != -1)
                this.outputs.push(key);
            if (key.indexOf("_two") != -1 && key.indexOf("_twoChange") == -1)
                this.twoways.push(key.replace("_two", ""));
        }
        this.createTwoways(this.twoways);
    }

    ngAfterContentInit() {
        this.firstCheck = false;

        for (let i = 0; i < this.tags.length; i++) {
            let element = this.tags[i], item = (<any>this)['tag_' + element.replace(/\./g, '_')];
            if (!ej.isNullOrUndefined(item)) {
                ej.createObject(element, item.getList(), this.model);
            }
        }
        let model = this.model, events = this.outputs;
        if (events) {
            for (let i = 0; i < events.length; i++) {
                let event = events[i].replace("_output", "");
                EJComponents.bindAndRaiseEvent(this, model, event);
            }
        }
        for (let i = 0; i < this.inputs.length; i++) {
            let property = this.inputs[i];
            let modelProperty = this.inputs[i].replace("_input", "");
            if ((<any>this)[property] != null) {
                if (modelProperty.indexOf('_') == -1) {
                    (<any>this.model)[modelProperty] = (<any>this)[property];
                } else if (modelProperty.indexOf('_two') == -1) {
                    let tempObj: any = {};
                    let key = modelProperty.replace(/\_/g, '.');
                    ej.createObject(key, (<any>this)[property], tempObj);
                    let rootProp = key.split('.')[0];
                    if ((<any>this.model)[rootProp] == undefined)
                        (<any>this.model)[rootProp] = {};
                    $.extend(true, (<any>this.model)[rootProp], tempObj[rootProp]);
                }
            }
        }
        for (let i = 0; i < this.twoways.length; i++) {
            let twoway = this.twoways[i];
            let twowayProperty = twoway + '_two';
            if ((<any>this)[twowayProperty] != null) {
                if (twoway.indexOf('_') == -1) {
                    (<any>this.model)[twowayProperty] = (<any>this)[twowayProperty];
                } else {
                    let tempObj: any = {};
                    let key = twoway.replace(/\_/g, '.') + '_two';
                    ej.createObject(key, (<any>this)[twowayProperty], tempObj);
                    let rootProp = twowayProperty.split('_')[0];
                    $.extend(true, (<any>this.model)[rootProp], tempObj[rootProp]);
                }
            }
        }

    }
    ngAfterViewInit() {
        
        let nativeElement = this.isEditor ? $(this.el.nativeElement.children) : $(this.el.nativeElement);
        this.widget = $(nativeElement)['ej' + this.controlName](this.model)['ej' + this.controlName]('instance');
    }

    private static bindAndRaiseEvent(instance: any, model: any, event: string) {
        if (!event.startsWith('model.')) {// && instance[event]['observers'].length > 1) {
            let originalEvt = event.startsWith('ej') ? event.substr(2) : event;
            model[originalEvt] = function (params: any) {
                instance[event + "_output"]['emit'](params);
            };
        }
    }

    ngOnChanges(changes: { [key: string]: SimpleChange }) {
        if (this.firstCheck) { return; }
        let ngChanges = {};
        for (let key in changes) {
            let element = changes[key];
            if (element.previousValue === element.currentValue) {
                break;
            }
            key = key.replace("_input", "").replace(/\_/g, '.');
            if (key.endsWith('.two')) {
                let oKey = key.replace('.two', ''), valFn = ej.getObject<Function>(oKey, (<any>this.widget)['model']);
                valFn(element.currentValue, true);
                ej.createObject(oKey, valFn, ngChanges);
            }
            ej.createObject(key, element.currentValue, ngChanges);
        }

        (<any>this.widget)['setModel'](ngChanges, $.isPlainObject(ngChanges));
    }

    ngAfterContentChecked() {
        // TODO: ChangeDetection Third/Multi level
        let changes: IChangeSet = Utils.IterateAndGetChanges(this);
        for (let key in changes) {
            if (changes.hasOwnProperty(key)) {
                let element = changes[key];
                (<any>this.widget)['_' + key](element);
            }
        }
    }

    ngOnDestroy() {
        (<any>this.widget)['destroy']();
    }
}

export class ComplexTagElement {
    recentChanges: any;
    hasChanges: boolean;
    firstChange: boolean;
    index: number;
    valueChange: EventEmitter<any> = new EventEmitter();
    protected complexProperties: Array<string>;
    property: string;
    parent: EJComponents<any, any>;
    complexes: Array<string> = [];

    // tags: Array<string>;

    constructor(public tags: Array<string>) {
        this.hasChanges = false;
        this.firstChange = true;

        Object.defineProperty(this, 'parent', {
            enumerable: false,
            writable: true,
            value: null
        });
        currentTemplateElement = this;
    }

    ngOnInit() {
        this.firstChange = false;
        for (let key in this) {
            if (key.indexOf("_") != -1 && key.indexOf("tag_") == -1)
                this.complexes.push(key);
        }
        for (let i = 0; i < this.complexes.length; i++) {
            let property = this.complexes[i];
            if (property.indexOf('_') != -1) {
                let tempObj: any = {};
                let key = property.replace(/\_/g, '.');
                ej.createObject(key, (<any>this)[property], tempObj);
                let rootProp = key.split('.')[0];
                if ((<any>this)[rootProp] == undefined) (<any>this)[rootProp] = {};
                $.extend(true, (<any>this)[rootProp], tempObj[rootProp]);
            }
        }
    }

    ensureCleanObject() {
        let tags = this.tags;
        for (let i = 0; i < tags.length; i++) {
            let element = tags[i], tagElement = (<any>this)['tag_' + element.replace(/\./g, '_')];

            if (i === 0 && (<any>this)[element]) { return; }
            if (ej.isNullOrUndefined(tagElement)) { continue; }

            ej.createObject(element, tagElement.getList(), this);
        }
    }

    ngOnChanges(changes: { [key: string]: SimpleChange }) {
        if (this.firstChange) { return; }
        this.recentChanges = changes;
        this.hasChanges = true;
    }

    getChangesAndReset() {
        if (this.hasChanges === false) { return; }

        let changes = this.recentChanges || {};
        let contentChanges = Utils.IterateAndGetChanges(this);
        if (!$.isEmptyObject(contentChanges)) {
            for (let key in contentChanges) {
                if (contentChanges.hasOwnProperty(key)) {
                    let element = contentChanges[key];
                    // this.el.nativeElement.
                    if (!ej.isNullOrUndefined(this.parent.widget['_' + this.property.replace(/\./g, '_') + '_' + key]))
                        this.parent.widget['_' + this.property.replace(/\./g, '_') + '_' + key](element);
                }
            }
        }

        this.hasChanges = false;
        return changes;
    }

    ngAfterContentChecked() {
        let tags = this.tags;
        for (let i = 0, len = tags.length; i < len; i++) {
            let element = tags[i], tagElement = (<any>this)['tag_' + element.replace(/\./g, '_')];
            if (tagElement && tagElement.hasChanges) {
                this.hasChanges = true;
            }
        }
    }
}

export class ArrayTagElement<T extends ComplexTagElement> {
    list: Array<T>;
    children: QueryList<T>;
    recentChanges: Array<IChildChange>;
    hasChanges: boolean;

    constructor(public propertyName: string) {
        this.hasChanges = false;
    }

    // TODO: Need to consider dynamic child change
    ngAfterContentInit() {
        let index = 0;
        this.list = this.children.map((child) => {
            child.index = index++;
            child.property = this.propertyName;
            return child;
        });
    }

    getList() {
        let list = this.list;
        for (let i = 0; i < list.length; i++) {
            list[i].ensureCleanObject();
        }
        return list;
    }

    getChangesAndReset(): Array<IChildChange> {
        this.hasChanges = false;
        return this.recentChanges;
    }

    ngAfterContentChecked(): void {
        let changes = {}, res: Array<IChildChange> = (<any>changes)[this.propertyName] = [], childChange: any;

        for (let i = 0, list = this.list; i < list.length; i++) {
            let child = list[i];
            if (child.hasChanges) {
                childChange = child.getChangesAndReset();
                if (!ej.isNullOrUndefined(childChange)) {
                    res.push(<IChildChange>{
                        index: child.index,
                        change: childChange
                    });
                }
            }
        }

        if (res.length > 0) {
            this.recentChanges = res;
            this.hasChanges = true;
        }
    }
}
