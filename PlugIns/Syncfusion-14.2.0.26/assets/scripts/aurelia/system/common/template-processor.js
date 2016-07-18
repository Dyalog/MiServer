System.register(['aurelia-dependency-injection', '../common/util', 'aurelia-templating'], function (_export) {
  'use strict';

  var inject, Util, TemplatingEngine, TemplateProcessor;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonUtil) {
      Util = _commonUtil.Util;
    }, function (_aureliaTemplating) {
      TemplatingEngine = _aureliaTemplating.TemplatingEngine;
    }],
    execute: function () {
      TemplateProcessor = (function () {
        function TemplateProcessor(context, templateEngine) {
          _classCallCheck(this, _TemplateProcessor);

          this.context = context;
          this.templatingEngine = templateEngine;
          this.util = new Util();
        }

        TemplateProcessor.prototype.initTemplate = function initTemplate() {
          var proxy = this;
          ej.template.render = function (self, selector, data, index) {
            return proxy.renderStringTemplate(self, selector, data, index);
          };
        };

        TemplateProcessor.prototype.initWidgetDependancies = function initWidgetDependancies() {
          if (this.context.widget.aureliaTemplate) {
            this.compileTemplate(this.context.widget.element);
          }
          var proxy = this.context;
          var element = this.context.widget.element;
          element.on(this.context.widget.pluginName + 'refresh', function () {
            if (proxy.widget.aureliaTemplate) {
              proxy.templateProcessor.compileTemplate(element);
            }
          });
        };

        TemplateProcessor.prototype.renderStringTemplate = function renderStringTemplate(self, selector, data, index) {
          var templateObject = self.aureliaTemplate;
          if (!templateObject || !templateObject[selector]) {
            templateObject = templateObject || {};
            templateObject[selector] = { key: ej.getGuid('aurtmpl'), itemData: [], views: [] };
            self.aureliaTemplate = templateObject;
          }
          var scope = templateObject[selector];
          if (this.util.hasValue(index)) {
            scope.itemData[index] = data;
          } else {
            scope.itemData = [data];
          }
          var actElement = $(selector).html();
          var tempElement = "<div class='" + templateObject[selector].key + " ej-aurelia-template'>" + actElement + '</div>';
          return tempElement;
        };

        TemplateProcessor.prototype.compileTemplate = function compileTemplate(element) {
          var templates = $(element).find('.ej-aurelia-template');
          var templateObject = this.context.widget.aureliaTemplate;
          for (var template in templateObject) {
            var tmplElement = templates.filter('.' + templateObject[template].key);
            if (tmplElement.length) {
              for (var i = 0; i < tmplElement.length; i++) {
                var view = this.templatingEngine.enhance(tmplElement[i]);
                view.bind(templateObject[template].itemData[i]);
                templateObject[template].views[i] = view;
              }
            } else {
              this.unbindViews(templateObject[template]);
              delete templateObject[template];
            }
          }
        };

        TemplateProcessor.prototype.clearTempalte = function clearTempalte() {
          var templateObject = this.context.widget.aureliaTemplate;
          if (templateObject && Object.keys(templateObject).length) {
            for (var t in templateObject) {
              this.unbindViews(templateObject[t]);
              delete templateObject[t];
            }
          }
        };

        TemplateProcessor.prototype.unbindViews = function unbindViews(obj) {
          for (var i = 0; i < obj.views.length; i++) {
            var view = obj.views[i];
            view.unbind();
          }
        };

        var _TemplateProcessor = TemplateProcessor;
        TemplateProcessor = inject(TemplatingEngine, Util)(TemplateProcessor) || TemplateProcessor;
        return TemplateProcessor;
      })();

      _export('TemplateProcessor', TemplateProcessor);
    }
  };
});