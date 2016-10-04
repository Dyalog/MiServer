define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', './widget-base', './constants', './decorators', './template-processor', './util'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _widgetBase, _constants, _decorators, _templateProcessor, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Util = exports.TemplateProcessor = exports.TemplatingEngine = exports.children = exports.customElement = exports.inlineView = exports.generateBindables = exports.constants = exports.WidgetBase = exports.inject = exports.bindable = exports.customAttribute = undefined;
  exports.customAttribute = _aureliaTemplating.customAttribute;
  exports.bindable = _aureliaTemplating.bindable;
  exports.inject = _aureliaDependencyInjection.inject;
  exports.WidgetBase = _widgetBase.WidgetBase;
  exports.constants = _constants.constants;
  exports.generateBindables = _decorators.generateBindables;
  exports.inlineView = _aureliaTemplating.inlineView;
  exports.customElement = _aureliaTemplating.customElement;
  exports.children = _aureliaTemplating.children;
  exports.TemplatingEngine = _aureliaTemplating.TemplatingEngine;
  exports.TemplateProcessor = _templateProcessor.TemplateProcessor;
  exports.Util = _util.Util;
});