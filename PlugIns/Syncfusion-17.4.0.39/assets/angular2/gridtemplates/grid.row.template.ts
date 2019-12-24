import { Directive, ViewChild, ElementRef, ContentChild, EmbeddedViewRef, ViewContainerRef, TemplateRef, Injector, Inject } from '@angular/core';
import { EJTemplateDirective, ejtemplate, ngTemplateid } from './../template';


@Directive({
    selector: `[e-row-template]`
})
export class GridRowTemplateDirective extends EJTemplateDirective {
    referenceObj: any = {};
    constructor(protected el: ElementRef, protected viewContainerRef: ViewContainerRef,
        protected templateRef: TemplateRef<any>, protected injector: Injector) {
        super(el, viewContainerRef, templateRef);
    }
    ngOnInit() {
        var template = this.viewContainerRef.createEmbeddedView(this.templateRef, { '$implicit': [] });
        var templID = ej.getGuid('angulartmplstr');
        var tempEle = ej.buildTag('div#' + templID);
        $(tempEle).append(template.rootNodes);
        $(tempEle).remove();
    }

    ngAfterViewChecked() {
        ej.createObject('_templateRef', this.templateRef, this.referenceObj);
        ej.createObject('_viewRef', this.viewContainerRef, this.referenceObj);
        var viewRference = this.referenceObj;

        ej.template['text/x-' + ngTemplateid + 'gridrowtemplate'] = function (self: any, selector: string, data: any, index: number, prop: any) {
            return ejtemplate(self, selector, data, index, viewRference);
        };
        ej.template.render = ej.template['text/x-' + ngTemplateid + 'gridrowtemplate'];
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
                    let index = parseInt($(tmplElement[i]).attr('ej-prop'));
                    childView = (<ViewContainerRef>templateObject[template].viewRef[index]).createEmbeddedView(<TemplateRef<any>>templateObject[template].templateRef[index], { '$implicit': templateObject[template].itemData[index] });
                    $(tmplElement[i]).empty().append(childView.rootNodes[1].childNodes);
                }
            } else {
                delete templateObject[template];
            }
        }
    }
}

