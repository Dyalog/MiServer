define(['exports', '../common/common'], function (exports, _common) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Item = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor;

  var Item = exports.Item = (_dec = (0, _common.inlineView)('' + _common.constants.aureliaTemplateString), _dec2 = (0, _common.customElement)(_common.constants.elementPrefix + 'item'), _dec3 = (0, _common.generateBindables)('items', ['imageUrl', 'text', 'enabled', 'click', 'badge', 'type', 'sliderSettings', 'items']), _dec4 = (0, _common.children)(_common.constants.elementPrefix + 'template'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
    function Item() {
      _classCallCheck(this, Item);

      _initDefineProp(this, 'template', _descriptor, this);
    }

    Item.prototype.setTemplates = function setTemplates() {
      if (this.template[0]) {
        var util = new _common.Util();
        this[util.getBindablePropertyName('template')] = this.template[0].template;
      }
    };

    return Item;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'template', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  })), _class2)) || _class) || _class) || _class);
});