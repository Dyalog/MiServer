define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-metadata', 'aurelia-task-queue', './util'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaMetadata, _aureliaTaskQueue, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.generateBindables = generateBindables;
  exports.delayed = delayed;
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

  function delayed() {
    return function (target, key, descriptor) {
      var taskQueue = (_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container()).get(_aureliaTaskQueue.TaskQueue);
      var ptr = descriptor.value;

      descriptor.value = function () {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (this.childPropertyName) {
          taskQueue.queueTask(function () {
            return ptr.apply(_this, args);
          });
        } else {
          ptr.apply(this, args);
        }
      };

      return descriptor;
    };
  }
});