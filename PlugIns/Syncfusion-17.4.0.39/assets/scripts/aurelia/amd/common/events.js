define(['exports', './util', 'aurelia-dependency-injection', './constants'], function (exports, _util, _aureliaDependencyInjection, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getEventOption = getEventOption;
  exports.fireEvent = fireEvent;
  function getEventOption(element) {
    var name = void 0;
    var attr = void 0;
    var attributes = element.attributes;
    var option = {};
    var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
    var util = container.get(_util.Util);

    var _loop = function _loop(i, len) {
      attr = attributes[i];
      name = attr.name;
      if (!name.startsWith(_constants.constants.eventPrefix)) {
        return 'continue';
      }
      var actualEventName = name.split('.')[0];
      var eventName = util._unhyphenate(actualEventName.split(_constants.constants.eventPrefix)[1]);
      option[eventName] = function (e) {
        return fireEvent(element, actualEventName, e);
      };
    };

    for (var i = 0, len = attributes.length; i < len; i++) {
      var _ret = _loop(i, len);

      if (_ret === 'continue') continue;
    }
    return option;
  }
  function fireEvent(element, name) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var event = new CustomEvent(name, {
      detail: data,
      bubbles: true
    });
    element.dispatchEvent(event);
    return event;
  }
});