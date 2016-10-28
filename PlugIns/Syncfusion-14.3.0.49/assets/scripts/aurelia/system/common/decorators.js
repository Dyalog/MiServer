'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-metadata', 'aurelia-task-queue', './util'], function (_export, _context) {
  "use strict";

  var BindableProperty, HtmlBehaviorResource, Container, metadata, TaskQueue, Util;
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

  _export('generateBindables', generateBindables);

  function delayed() {
    return function (target, key, descriptor) {
      var taskQueue = (Container.instance || new Container()).get(TaskQueue);
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

  _export('delayed', delayed);

  return {
    setters: [function (_aureliaTemplating) {
      BindableProperty = _aureliaTemplating.BindableProperty;
      HtmlBehaviorResource = _aureliaTemplating.HtmlBehaviorResource;
    }, function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_util) {
      Util = _util.Util;
    }],
    execute: function () {}
  };
});