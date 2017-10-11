'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection'], function (_export, _context) {
  "use strict";

  var customAttribute, bindable, customElement, children, TemplatingEngine, inlineView, inject;
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
    }],
    execute: function () {
      _export('customAttribute', customAttribute);

      _export('bindable', bindable);

      _export('inject', inject);

      _export('inlineView', inlineView);

      _export('customElement', customElement);

      _export('children', children);

      _export('TemplatingEngine', TemplatingEngine);
    }
  };
});