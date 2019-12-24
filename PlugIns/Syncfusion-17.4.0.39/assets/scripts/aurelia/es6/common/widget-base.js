import {getEventOption} from './events';
import {Util} from '../common/util';
import {delayed} from '../common/decorators';

let firstValue = {};
export class WidgetBase {
/**
* To Create an widget
* @param option Object which contains  Element in which  widget will be created
*/
  createWidget(option) {
    this.allOption = this.getWidgetOptions(option.element);
    if (!this.ejOptions && !this.isEditor) {
      this.createTwoWays();
    }
    this.eWidget = this.widget = jQuery($(option.element))[this.controlName](this.allOption).data(this.controlName);
    if (this.templateProcessor) {
      this.templateProcessor.initWidgetDependancies();
    }
    if (this.isEditor) {
      this.widget.model._change = (evt) => {
        if ('eValue' in this) {
          this[this.util.getBindablePropertyName('value')] = evt.value;
        }
      };
    }
  }

  bind(ctx, overrideCtx) {
    this.parentCtx = overrideCtx;
    if (this.widget && this.widget.element && this.isEditor) {
      this.widget.option('value', (this.eValue === undefined ? null : this.eValue));
    }
  }

  createTwoWays() {
    let model = this.allOption;
    let twoWays = this.twoWays;
    let len = twoWays.length;
    for (let i = 0; i < len; i++) {
      let prop = twoWays[i];
      ej.createObject(prop, this.addTwoways(prop), model);
    }
  }

  addTwoways(prop) {
    let model = this;
    let value = firstValue;
    return function(newVal, isApp) {
      if (value === firstValue) {
        let viewModelProp = model.util.getBindablePropertyName(prop);
        value = model[viewModelProp];
        if (value === undefined) {
          value = this.defaults[prop];
        }
        return value;
      }
      if (newVal === undefined) {
        return value;
      }
      if (value === newVal) {
        return null;
      }
      value = newVal;
      if (!isApp && model.util.hasValue(newVal) ) {
        let viewModelProp = model.util.getBindablePropertyName(prop);
        model[viewModelProp] = newVal;
      }
      return null;
    };
  }
/**
* To get property and event options from the element
* @param element Element from which options are acquired
*/
  getWidgetOptions(element) {
    let propOptions;
    if (this.ejOptions) {
      propOptions = this.ejOptions;
    } else {
      propOptions = this.util.getOptions(this, this.controlProperties);
    }
    let eventOption = getEventOption(element);
    if (this.hasChildProperty) {
      this.getChildProperties(propOptions);
    }
    return Object.assign({}, propOptions, eventOption);
  }

  getChildProperties(options) {
    let PropertyName = this.childPropertyName;
    let childCollection = this[PropertyName];
    let len = childCollection.length;
    if (len) {
      options[PropertyName] = [];
      let childProperties = childCollection[0].controlProperties;
      for (let i = 0; i < len; i++) {
        options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
      }
    }
  }

  @delayed()
  attached() {
    if (this.templateProcessor) {
      this[this.childPropertyName].forEach(template => template.setTemplates());
    }
    this.util = new Util();
    this.createWidget({ element: this.element });
  }

  unsubscribe() {
    if (this.subscription) {
      this.subscription.dispose();
      this.subscription = null;
    }
  }

  unbind() {
    this.unsubscribe();
  }

/**
 * To change widget model value
 * @param property The viewModel property name
 * @param newValue New value of the property
 * @param oldvalue Pld value of the property
 */
  propertyChanged(property, newValue, oldValue) {
    if (this.widget) {
      let modelValue;
      let prop = this.util.getControlPropertyName(this, property);
      this.unsubscribe();
      if (this.arrayObserver) {
        this.arrayObserver.forEach((arrayProp) => {
          if (this[arrayProp] instanceof Array) {
            this.subscription = this.bindingInstance.collectionObserver(this[arrayProp]).subscribe((e) => {
              this.update(e);
            });
          }
        });
      }
      if (prop) {
        if (prop === 'widget') {
          return;
        } else if (prop !== 'options') {
          modelValue = this.widget.model[prop];
          let isTwoway = typeof modelValue === 'function';
          if (isTwoway) {
            modelValue = modelValue();
          }
          if (modelValue !== newValue) {
            if (isTwoway) {
              newValue = this.addTwoways(prop);
            }
            this.widget.option(prop, newValue);
          }
        } else {
          this.widget.option(newValue);
        }
      }
    }
  }

  update(e) {
    let modelValue;
    let newVal;
    if (e.length) {
      this.arrayObserver.forEach((arrayProp) => {
        if (this[arrayProp] instanceof Array) {
          let prop = this.util.getControlPropertyName(this, arrayProp);
          modelValue = this.widget.model[prop];
          if (typeof modelValue === 'function') {
            modelValue = modelValue();
            newVal = modelValue;
            newVal = this.addTwoways(prop);
            this.widget.option(prop, newVal);
          } else {
            this.widget.option(prop, modelValue);
          }
        }
      });
    }
  }

  detached() {
    if (this.templateProcessor) {
      this.templateProcessor.clearTempalte();
    }
    if (this.widget) {
      this.widget.destroy();
    }
  }
}
