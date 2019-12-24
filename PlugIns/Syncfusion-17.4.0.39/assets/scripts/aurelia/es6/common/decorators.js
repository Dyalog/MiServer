import {BindableProperty, HtmlBehaviorResource} from 'aurelia-templating';
import {Container} from 'aurelia-dependency-injection';
import {metadata} from 'aurelia-metadata';
import {TaskQueue} from 'aurelia-task-queue';
import { bindingMode, BindingEngine } from 'aurelia-binding';
import { Util } from './util';

export function generateBindables(controlName, inputs, twoWayProperties, abbrevProperties, observerCollection) {
  return function(target, key, descriptor) {
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let container = (Container.instance || new Container());
    let util = container.get(Util);
    let bindingInstance = container.get(BindingEngine);
    inputs.push('options');
    inputs.push('widget');
    let len = inputs.length;
    if (observerCollection) {
      target.prototype.arrayObserver = [];
      observerCollection.forEach((element) => {
        target.prototype.arrayObserver.push(util.getBindablePropertyName(element));
      });
      target.prototype.bindingInstance = bindingInstance;
    }
    target.prototype.controlName = controlName;
    target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
    target.prototype.abbrevProperties = abbrevProperties ? abbrevProperties : [];
    if (len) {
      target.prototype.controlProperties = inputs;
      for (let i = 0; i < len; i++) {
        let option = inputs[i];
        if (abbrevProperties && option in abbrevProperties) {
          option = abbrevProperties[option];
          option.forEach((prop) => {
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
  let nameOrConfigOrTarget = {
    name: util.getBindablePropertyName(option)
  };

  if (option === 'widget') {
    nameOrConfigOrTarget.defaultBindingMode = bindingMode.twoWay;
  }

  let prop = new BindableProperty(nameOrConfigOrTarget);
  prop.registerWith(target, behaviorResource, descriptor);
}

export function delayed() {
  return function(target, key, descriptor) {
    let taskQueue = (Container.instance || new Container()).get(TaskQueue);
    let ptr = descriptor.value;

    descriptor.value = function(...args) {
      if (this.childPropertyName) {
        taskQueue.queueTask(() => ptr.apply(this, args));
      } else {
        ptr.apply(this, args);
      }
    };

    return descriptor;
  };
}
