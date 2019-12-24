import {constants} from './constants';

export class Util {

  getBindablePropertyName(propertyName: string): string {
    let name = `${constants.bindablePrefix}${propertyName}`;
    return this._unhyphenate(name);
  }

  _unhyphenate(name: string): string {
    return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  }

  getOptions(model, properties ) {
    let bindableproperites = {};
    let value;
    for (let prop of properties) {
      if (model.abbrevProperties && prop in model.abbrevProperties && model.abbrevProperties.hasOwnProperty(prop)) {
        model.abbrevProperties[prop].some(property => {
          value = model[this.getBindablePropertyName(property)];
          return this.hasValue(value);
        });
      } else {
        value = model[this.getBindablePropertyName(prop)];
      }
      if (this.hasValue(value)) {
        if (typeof value === 'string' ) {
          value = this.processData(value);
        }
        bindableproperites[prop] = value;
      }
    }
    return bindableproperites;
  }

  getControlPropertyName(options, propertyName) {
    let property;
    for (let prop of options.controlProperties) {
      if (options.abbrevProperties && prop in options.abbrevProperties && options.abbrevProperties.hasOwnProperty(prop)) {
        options.abbrevProperties[prop].some(props => {
          property = propertyName === this.getBindablePropertyName(props) ? prop : undefined;
          return property;
        });
        if (property) break;
      } else if (propertyName === this.getBindablePropertyName(prop)) {
        property = prop;
        break;
      }
    }
    return property;
  }

  hasValue(prop) {
    return typeof (prop) !== 'undefined' && prop !== null;
  }

  processData(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (+value + '' === value) {
      return +value;
    }
    return value;
  }
}
