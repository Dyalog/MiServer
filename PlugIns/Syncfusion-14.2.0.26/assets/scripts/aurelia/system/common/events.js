System.register(['./util', 'aurelia-dependency-injection', './constants'], function (_export) {
  'use strict';

  var Util, Container, constants;

  _export('getEventOption', getEventOption);

  _export('fireEvent', fireEvent);

  function getEventOption(element) {
    var name = undefined;
    var attr = undefined;
    var attributes = element.attributes;
    var option = {};
    var container = Container.instance || new Container();
    var util = container.get(Util);

    var _loop = function (i, len) {
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

  function fireEvent(element, name) {
    var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var event = new CustomEvent(name, {
      detail: data,
      bubbles: true
    });
    element.dispatchEvent(event);
    return event;
  }

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