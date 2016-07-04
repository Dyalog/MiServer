'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _commonCommon = require('../common/common');

require('ej.radialmenu.min');

var ejRadialMenu = (function (_WidgetBase) {
  var _instanceInitializers = {};

  _inherits(ejRadialMenu, _WidgetBase);

  _createDecoratedClass(ejRadialMenu, [{
    key: 'items',
    decorators: [_commonCommon.children(_commonCommon.constants.elementPrefix + 'item')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function ejRadialMenu(element, templateEngine) {
    _classCallCheck(this, _ejRadialMenu);

    _WidgetBase.call(this);

    _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'items';
    this.templateProcessor = new _commonCommon.TemplateProcessor(this, templateEngine);
    this.templateProcessor.initTemplate();
  }

  var _ejRadialMenu = ejRadialMenu;
  ejRadialMenu = _commonCommon.inject(Element, _commonCommon.TemplatingEngine)(ejRadialMenu) || ejRadialMenu;
  ejRadialMenu = _commonCommon.generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'items', 'radius', 'targetElementId', 'position'])(ejRadialMenu) || ejRadialMenu;
  ejRadialMenu = _commonCommon.inlineView('<template><content></content></template>')(ejRadialMenu) || ejRadialMenu;
  ejRadialMenu = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'radial-menu')(ejRadialMenu) || ejRadialMenu;
  return ejRadialMenu;
})(_commonCommon.WidgetBase);

exports.ejRadialMenu = ejRadialMenu;