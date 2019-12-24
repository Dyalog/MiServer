import {
    forwardRef, ViewContainerRef, ContentChildren,
    EventEmitter, QueryList, Type, ContentChild,
    Component, Directive, ElementRef, SimpleChange,
    ChangeDetectionStrategy, ChangeDetectorRef, TemplateRef, EmbeddedViewRef
} from '@angular/core';

import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { currentTemplateElement } from './core';

export { ContentChild, Type, forwardRef } from '@angular/core';

export let ngTemplateid: any;


@Directive({
    selector: `[e-template]`
})
export class EJTemplateDirective {
    element: any;

    private childViews: any = [];
    private parentContext: any;
    constructor(protected el: ElementRef, protected viewContainerRef: ViewContainerRef,
        protected templateRef: TemplateRef<any>) {
            this.parentContext = (<any>this.viewContainerRef)["_view"].parent;
            if( !ej.isNullOrUndefined(this.parentContext) && !ej.isNullOrUndefined(this.parentContext.context) && !ej.isNullOrUndefined(this.parentContext.context.ngForOf))
                this.element = (<any>this.viewContainerRef)["_view"].parent.nodes[1].instance;
            else
               this.element = currentTemplateElement; 
    }
    ngOnInit() {
        let template = this.viewContainerRef.createEmbeddedView(this.templateRef, { '$implicit': [] });
        let templID = ej.getGuid('angulartmplstr');
        let tempEle = ej.buildTag('div#' + templID);
        $(tempEle).append(template.rootNodes);
        ej.createObject('template', $($(tempEle).append(template.rootNodes)).html(), this.element);
        this.element.template = $($(tempEle).append(template.rootNodes)).html();
        Object.defineProperty(this.element, '_templateRef', {
            enumerable: false,
            writable: true,
            value: this.templateRef
        });
        Object.defineProperty(this.element, '_viewRef', {
            enumerable: false,
            writable: true,
            value: this.viewContainerRef
        });
        $(tempEle).remove();
    }
    ngAfterViewInit() {
        ngTemplateid = ej.getGuid("ng2Control");
        this.element.parent.model["ngTemplateId"] = ngTemplateid;
        window.setTimeout(() => {
            this.compileTempalte();
            let parentWidget = this.element.parent.widget || this.element.widget;
            parentWidget.element.on(parentWidget.pluginName + 'refresh', () => {
                if (parentWidget.angularTemplate) {
                    this.compileTempalte();
                }
            });
        });

    }

    compileTempalte() {
        let widget = this.element.parent.widget || this.element.widget;
        let element = widget.element;
        let childView: EmbeddedViewRef<any>;
        let templates = $(element).find('.ej-angular-template');
        let templateObject = widget.angularTemplate;
        for (let template in templateObject) {
            let tmplElement = templates.filter('.' + templateObject[template].key);
            if (tmplElement.length) {
                for (let i = 0; i < tmplElement.length; i++) {
                    if (jQuery(tmplElement[i]).hasClass("embeddedview")) {
                        jQuery(tmplElement[i]).removeClass("embeddedview")
                        let index = parseInt($(tmplElement[i]).attr('ej-prop'));
                        childView = (<ViewContainerRef>templateObject[template].viewRef[index]).createEmbeddedView(<TemplateRef<any>>templateObject[template].templateRef[index], { '$implicit': templateObject[template].itemData[index] });
                        $(tmplElement[i]).empty().append(childView.rootNodes);
                    }
                }
            } else {
                delete templateObject[template];
            }
        }
    }

    clearTempalte() {
        let templateObject = this.element.parent.widget.angularTemplate;
        if (templateObject && Object.keys(templateObject).length) {
            for (let tmpl in templateObject) {
                delete templateObject[tmpl];
            }
        }
        for (let childView in this.childViews) {
            delete this.childViews[childView];
        }
        this.viewContainerRef.remove();
    }
    ngOnDestroy() {
        this.clearTempalte();
    }
}

ej.template['text/x-template'] = (self: any, selector: string, data: any, index: number, prop: any) => {
    let templateObject = self.angularTemplate;
    if (!templateObject || !templateObject[selector]) {
        templateObject = templateObject || {};
        templateObject[selector] = { key: ej.getGuid('angulartmpl'), itemData: [], viewRef: [], templateRef: [] };
        self.angularTemplate = templateObject;
    }
    let scope = templateObject[selector];

    if (!ej.isNullOrUndefined(index)) {
        if (!scope.itemData) {
            scope.itemData = [];
        }
        scope.itemData[index] = data;
        scope.viewRef[index] = prop._viewRef;
        scope.templateRef[index] = prop._templateRef;
    } else {
        if (data.length > 1) {
            for (var i = 0; i < data.length; i++) {
                scope.itemData[i] = data[i];
                scope.viewRef[i] = prop._viewRef;
                scope.templateRef[i] = prop._templateRef;
            }
        }
        else {

            scope.itemData = [data];
            scope.viewRef = [prop._viewRef];
            scope.templateRef = [prop._templateRef];
        }
    }
    // let actElement = $(selector).html() || '';
    let actElement = '';
    if (selector.startsWith('#'))
        actElement = $(selector).html() || '';
    else
        actElement = selector;
    let tempElement = '';
    if (data.length > 1 && self.model.rowTemplate != null) {
        for (var i = 0; i < data.length; i++) {
            var temp = actElement;
            temp = '<tr ej-prop=\'' + i + '\'class=\'' + templateObject[selector].key + ' ej-angular-template\' />' + temp + '</tr>';
            tempElement = tempElement + temp;
        }
    }
    else {
        tempElement = tempElement + '<div ej-prop=\'' + index + '\' class=\'' + " embeddedview " + templateObject[selector].key + ' ej-angular-template\'>' + actElement + ' </div>';
    }
    return tempElement;
};
export let ejtemplate = ej.template['text/x-template'];
ej.template.render = ej.template['text/x-template'];