'use strict';

System.register(['./util', 'aurelia-dependency-injection', './constants'], function (_export, _context) {
  "use strict";

  var Util, Container, constants;
  function getEventOption(element) {
    var name = void 0;
    var attr = void 0;
    var attributes = element.attributes;
    var option = {};
    var container = Container.instance || new Container();
    var util = container.get(Util);

    var _loop = function _loop(i, len) {
      attr = attributes[i];
      name = attr.name;
      if (!name.startsWith(constants.eventPrefix)) {
        return 'continue';
      }
      var actualEventName = name.split('.')[0];
      var eventName = util._unhyphenate(actualEventName.split(constants.eventPrefix)[1]);
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

  _export('getEventOption', getEventOption);

  function fireEvent(element, name) {
    var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var event = new CustomEvent(name, {
      detail: data,
      bubbles: true
    });
    element.dispatchEvent(event);
    return event;
  }

  _export('fireEvent', fireEvent);

  return {
    setters: [function (_util) {
      Util = _util.Util;
    }, function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function (_constants) {
      constants = _constants.constants;
    }],
    execute: function () {}
  };
});