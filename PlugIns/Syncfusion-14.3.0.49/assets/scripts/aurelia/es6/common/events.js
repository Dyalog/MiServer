import {Util} from './util';
import {Container} from 'aurelia-dependency-injection';
import {constants} from './constants';

/**
* To get binded events from the element
* @param element The Element from which events acquired
*/
export function getEventOption(element) {
  let name;
  let attr;
  let attributes = element.attributes;
  let option = {};
  let container = (Container.instance || new Container());
  let util = container.get(Util);
  for (let i = 0, len = attributes.length; i < len; i++) {
    attr = attributes[i];
    name = attr.name;
    if (!name.startsWith(constants.eventPrefix)) {
      continue;
    }
    let actualEventName = name.split('.')[0];//Event name with constants event prefix
    let eventName = util._unhyphenate(actualEventName.split(constants.eventPrefix)[1]);
    option[eventName] = e => fireEvent(element, actualEventName, e);  // eslint-disable-line no-loop-func
  }
  return option;
}
/**
* Fire DOM event on an element
* @param element The Element which the DOM event will be fired on
* @param name The Event's name
* @param data Addition data to attach to an event
*/
export function fireEvent(element: Element, name: string, data? = {}) {
  let event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);
  return event;
}
