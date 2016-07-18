System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-metadata', './util'], function (_export) {
  'use strict';

  var BindableProperty, HtmlBehaviorResource, Container, metadata, Util;

  _export('generateBindables', generateBindables);

  function generateBindables(controlName, inputs, twoWayProperties, abbrevProperties) {
    return function (target, key, descriptor) {
      var behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
      var container = Container.instance || new Container();
      var util = container.get(Util);
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
          var prop = new BindableProperty(nameOrConfigOrTarget);
          prop.registerWith(target, behaviorResource, descriptor);
        }
      }
    };
  }

  return {
    setters: [function (_aureliaTemplating) {
      BindableProperty = _aureliaTemplating.BindableProperty;
      HtmlBehaviorResource = _aureliaTemplating.HtmlBehaviorResource;
    }, function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
    }, function (_util) {
      Util = _util.Util;
    }],
    execute: function () {}
  };
});