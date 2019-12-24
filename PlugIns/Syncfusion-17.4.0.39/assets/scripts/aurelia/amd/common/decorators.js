define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-metadata', 'aurelia-task-queue', 'aurelia-binding', './util'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaMetadata, _aureliaTaskQueue, _aureliaBinding, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.generateBindables = generateBindables;
  exports.delayed = delayed;
  function generateBindables(controlName, inputs, twoWayProperties, abbrevProperties, observerCollection) {
    return function (target, key, descriptor) {
      var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
      var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
      var util = container.get(_util.Util);
      var bindingInstance = container.get(_aureliaBinding.BindingEngine);
      inputs.push('options');
      inputs.push('widget');
      var len = inputs.length;
      if (observerCollection) {
        target.prototype.arrayObserver = [];
        observerCollection.forEach(function (element) {
          target.prototype.arrayObserver.push(util.getBindablePropertyName(element));
        });
        target.prototype.bindingInstance = bindingInstance;
      }
      target.prototype.controlName = controlName;
      target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
      target.prototype.abbrevProperties = abbrevProperties ? abbrevProperties : [];
      if (len) {
        target.prototype.controlProperties = inputs;
        for (var i = 0; i < len; i++) {
          var option = inputs[i];
          if (abbrevProperties && option in abbrevProperties) {
            option = abbrevProperties[option];
            option.forEach(function (prop) {
              registerProp(util, prop, target, behaviorResource, descriptor);
            });
          } else {
            registerProp(util, option, target, behaviorResource, descriptor);
          }
        }
      }
    };
  }

  function registerProp(util, option, target, behaviorResource, descriptor) {
    var nameOrConfigOrTarget = {
      name: util.getBindablePropertyName(option)
    };

    if (option === 'widget') {
      nameOrConfigOrTarget.defaultBindingMode = _aureliaBinding.bindingMode.twoWay;
    }

    var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
    prop.registerWith(target, behaviorResource, descriptor);
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