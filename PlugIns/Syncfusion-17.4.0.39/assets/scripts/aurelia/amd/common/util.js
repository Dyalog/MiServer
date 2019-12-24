define(['exports', './constants'], function (exports, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Util = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Util = exports.Util = function () {
    function Util() {
      _classCallCheck(this, Util);
    }

    Util.prototype.getBindablePropertyName = function getBindablePropertyName(propertyName) {
      var name = '' + _constants.constants.bindablePrefix + propertyName;
      return this._unhyphenate(name);
    };

    Util.prototype._unhyphenate = function _unhyphenate(name) {
      return name.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });
    };

    Util.prototype.getOptions = function getOptions(model, properties) {
      var _this = this;

      var bindableproperites = {};
      var value = void 0;
      for (var _iterator = properties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var prop = _ref;

        if (model.abbrevProperties && prop in model.abbrevProperties && model.abbrevProperties.hasOwnProperty(prop)) {
          model.abbrevProperties[prop].some(function (property) {
            value = model[_this.getBindablePropertyName(property)];
            return _this.hasValue(value);
          });
        } else {
          value = model[this.getBindablePropertyName(prop)];
        }
        if (this.hasValue(value)) {
          if (typeof value === 'string') {
            value = this.processData(value);
          }
          bindableproperites[prop] = value;
        }
      }
      return bindableproperites;
    };

    Util.prototype.getControlPropertyName = function getControlPropertyName(options, propertyName) {
      var _this2 = this;

      var property = void 0;

      var _loop = function _loop() {
        if (_isArray2) {
          if (_i2 >= _iterator2.length) return 'break';
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) return 'break';
          _ref2 = _i2.value;
        }

        var prop = _ref2;

        if (options.abbrevProperties && prop in options.abbrevProperties && options.abbrevProperties.hasOwnProperty(prop)) {
          options.abbrevProperties[prop].some(function (props) {
            property = propertyName === _this2.getBindablePropertyName(props) ? prop : undefined;
            return property;
          });
          if (property) return 'break';
        } else if (propertyName === _this2.getBindablePropertyName(prop)) {
          property = prop;
          return 'break';
        }
      };

      for (var _iterator2 = options.controlProperties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        var _ret = _loop();

        if (_ret === 'break') break;
      }
      return property;
    };

    Util.prototype.hasValue = function hasValue(prop) {
      return typeof prop !== 'undefined' && prop !== null;
    };

    Util.prototype.processData = function processData(value) {
      if (value === 'true') {
        return true;
      } else if (value === 'false') {
        return false;
      } else if (+value + '' === value) {
        return +value;
      }
      return value;
    };

    return Util;
  }();
});