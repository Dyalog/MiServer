import { Directive, ElementRef, EmbeddedViewRef, ViewContainerRef, TemplateRef, Injector } from '@angular/core';
import { EJTemplateDirective, ejtemplate, ngTemplateid } from './../template';

@Directive({
    selector: `[e-treegridheader-template]`
})
export class TreeGridHeaderTemplateDirective extends EJTemplateDirective {
    referenceObj: any = {};
    constructor(protected el: ElementRef, protected viewContainerRef: ViewContainerRef,
        protected templateRef: TemplateRef<any>, protected injector: Injector) {
        super(el, viewContainerRef, templateRef);
    }
    ngOnInit() {
        let template = this.viewContainerRef.createEmbeddedView(this.templateRef, { '$implicit': [] });
        let templID = ej.getGuid('angulartmplstr');
        let tempEle = ej.buildTag('div#' + templID);
        $(tempEle).append(template.rootNodes);
        ej.createObject('headerTemplateID', $($(tempEle).append(template.rootNodes)).html(), this.element);
        this.element.headerTemplateID = $($(tempEle).append(template.rootNodes)).html();
        Object.defineProperty(this.element, '_treegridtemplateRef', {
            enumerable: false,
            writable: true,
            value: this.templateRef
        });
        Object.defineProperty(this.element, '_treegridviewRef', {
            enumerable: false,
            writable: true,
            value: this.viewContainerRef
        });
        this.element['_key'] = $(tempEle).attr("id");
        $(tempEle).remove();
    }

    ngAfterViewInit() {
        this.element.parent.model["ngTemplateId"] = ngTemplateid;
        window.setTimeout(() => {
            this.compileCurrentTemplate(this.element);
            let parentWidget = this.element.parent.widget || this.element.widget;
            parentWidget.element.off(parentWidget.pluginName + 'headerRefresh');
            parentWidget.element.on(parentWidget.pluginName + 'headerRefresh', () => {
                if (parentWidget.headerAngularTemplate) {
                    this.compileTemplate();
                }
            });
        });

    }

    compileTemplate() {
        let widget = this.element.parent.widget || this.element.widget;
        let element = widget.element;
        let childView: EmbeddedViewRef<any>;
        let templates = $(element).find('.ej-angular-treegrid-header-template');
        let templateObject = widget.headerAngularTemplate;
        for (let template in templateObject) {
            let tmplElement = templates.filter('.' + template);
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

    compileCurrentTemplate(tempElement:any) {
        let widget = this.element.parent.widget || this.element.widget;
        let element = widget.element;
        let childView;
        let templates = $(element).find('.ej-angular-treegrid-header-template');
        let templateObject = widget.headerAngularTemplate[tempElement._key];
        let tmplElement = templates.filter('.' + tempElement._key);
        if (templateObject && tmplElement.length) {
            for (let i = 0; i < tmplElement.length; i++) {
                if (jQuery(tmplElement[i]).hasClass("embeddedview")) {
                    jQuery(tmplElement[i]).removeClass("embeddedview")
                    let index = parseInt($(tmplElement[i]).attr('ej-prop'));
                    childView = (<ViewContainerRef>templateObject.viewRef[index]).createEmbeddedView(<TemplateRef<any>>templateObject.templateRef[index], { '$implicit': templateObject.itemData[index] });
                    $(tmplElement[i]).empty().append(childView.rootNodes);
                }
            }
        }
        else {
            delete widget.headerAngularTemplate[tempElement._key];
        }
    }

    clearTempalte() {
        let templateObject = this.element.parent.widget.headerAngularTemplate;
        if (templateObject && Object.keys(templateObject).length) {
            for (let tmpl in templateObject) {
                delete templateObject[tmpl];
            }
        }
        this.viewContainerRef.remove();
    }
    ngOnDestroy() {
        this.clearTempalte();
    }
}

ej.template['text/x-treegridheadertemplate'] = (self: any, selector: string, data: any, index: number, prop: any) => {
    let templateObject = self.headerAngularTemplate;
    if (!templateObject || !templateObject[data._key]) {
        templateObject = templateObject || {};
        templateObject[data._key] = { key: ej.getGuid('angulartmpl'), itemData: [], viewRef: [], templateRef: [] };
        self.headerAngularTemplate = templateObject;
    }
    let scope = templateObject[data._key];

    if (!ej.isNullOrUndefined(index)) {
        if (!scope.itemData) {
            scope.itemData = [];
        }
        scope.itemData[index] = data;
        scope.viewRef[index] = prop._treegridviewRef;
        scope.templateRef[index] = prop._treegridtemplateRef;
    } else {
        if (data.length > 1) {
            for (var i = 0; i < data.length; i++) {
                scope.itemData[i] = data[i];
                scope.viewRef[i] = prop._treegridviewRef;
                scope.templateRef[i] = prop._treegridtemplateRef;
            }
        }
        else {

            scope.itemData = [data];
            scope.viewRef = [prop._treegridviewRef];
            scope.templateRef = [prop._treegridtemplateRef];
        }
    }
    let actElement = '';
    if (selector.startsWith('#'))
        actElement = $(selector).html() || '';
    else
        actElement = selector;
    let tempElement = '';
    tempElement = tempElement + '<div ej-prop=\'' + index + '\' class=\'' + " embeddedview " + data._key + ' ej-angular-treegrid-header-template\'>' + actElement + ' </div>';
    return tempElement;
};