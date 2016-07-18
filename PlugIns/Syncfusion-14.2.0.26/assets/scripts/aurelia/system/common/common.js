System.register(['aurelia-templating', 'aurelia-dependency-injection', './widget-base', './constants', './decorators', './template-processor', './util'], function (_export) {
  'use strict';

  var customAttribute, bindable, customElement, children, TemplatingEngine, inlineView, inject, WidgetBase, constants, generateBindables, TemplateProcessor, Util;
  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
      children = _aureliaTemplating.children;
      TemplatingEngine = _aureliaTemplating.TemplatingEngine;
      inlineView = _aureliaTemplating.inlineView;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_widgetBase) {
      WidgetBase = _widgetBase.WidgetBase;
    }, function (_constants) {
      constants = _constants.constants;
    }, function (_decorators) {
      generateBindables = _decorators.generateBindables;
    }, function (_templateProcessor) {
      TemplateProcessor = _templateProcessor.TemplateProcessor;
    }, function (_util) {
      Util = _util.Util;
    }],
    execute: function () {
      _export('customAttribute', customAttribute);

      _export('bindable', bindable);

      _export('inject', inject);

      _export('WidgetBase', WidgetBase);

      _export('constants', constants);

      _export('generateBindables', generateBindables);

      _export('inlineView', inlineView);

      _export('customElement', customElement);

      _export('children', children);

      _export('TemplatingEngine', TemplatingEngine);

      _export('TemplateProcessor', TemplateProcessor);

      _export('Util', Util);
    }
  };
});