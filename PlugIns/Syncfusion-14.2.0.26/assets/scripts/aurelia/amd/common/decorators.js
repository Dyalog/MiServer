define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-metadata', './util'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaMetadata, _util) {
  'use strict';

  exports.__esModule = true;
  exports.generateBindables = generateBindables;

  function generateBindables(controlName, inputs, twoWayProperties, abbrevProperties) {
    return function (target, key, descriptor) {
      var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
      var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
      var util = container.get(_util.Util);
      inputs.push('options');
      var len = inputs.length;
      target.prototype.controlName = controlName;
      target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
      target.prototype.abbrevProperties = abbrevProperties ? abbrevProperties : [];
      if (len) {
        target.prototype.controlProperties = inputs;
        for (var i = 0; i < len; i++) {
          var option = inputs[i];
          if (abbrevProperties && option in abbrevProperties) {
            option = abbrevProperties[option];
          }
          var nameOrConfigOrTarget = {
            name: util.getBindablePropertyName(option)
          };
          var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
          prop.registerWith(target, behaviorResource, descriptor);
        }
      }
    };
  }
});