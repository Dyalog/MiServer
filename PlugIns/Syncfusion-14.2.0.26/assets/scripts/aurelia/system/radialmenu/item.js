System.register(['../common/common'], function (_export) {
  'use strict';

  var inlineView, customElement, children, constants, generateBindables, Util, Item;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      children = _commonCommon.children;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
      Util = _commonCommon.Util;
    }],
    execute: function () {
      Item = (function () {
        var _instanceInitializers = {};

        function Item() {
          _classCallCheck(this, _Item);

          _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers);
        }

        Item.prototype.bind = function bind() {
          if (this.template[0]) {
            var util = new Util();
            this[util.getBindablePropertyName('template')] = this.template[0].template;
          }
        };

        _createDecoratedClass(Item, [{
          key: 'template',
          decorators: [children(constants.elementPrefix + 'template')],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        var _Item = Item;
        Item = generateBindables('items', ['imageUrl', 'text', 'enabled', 'click', 'badge', 'type', 'sliderSettings'])(Item) || Item;
        Item = customElement(constants.elementPrefix + 'item')(Item) || Item;
        Item = inlineView('<template><content></content></template>')(Item) || Item;
        return Item;
      })();

      _export('Item', Item);
    }
  };
});