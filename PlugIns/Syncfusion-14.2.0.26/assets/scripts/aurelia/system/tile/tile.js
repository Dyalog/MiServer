System.register(['../common/common', 'ej.tile.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejTile;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customElement = _commonCommon.customElement;
      inlineView = _commonCommon.inlineView;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejTileMin) {}],
    execute: function () {
      ejTile = (function (_WidgetBase) {
        _inherits(ejTile, _WidgetBase);

        function ejTile(element) {
          _classCallCheck(this, _ejTile);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejTile = ejTile;
        ejTile = inject(Element)(ejTile) || ejTile;
        ejTile = generateBindables('ejTile', ['badge', 'caption', 'cssClass', 'enablePersistence', 'height', 'imageClass', 'imagePosition', 'imageTemplateId', 'imageUrl', 'liveTile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection', 'backgroundColor'])(ejTile) || ejTile;
        ejTile = inlineView('<template><content></content></template>')(ejTile) || ejTile;
        ejTile = customElement(constants.elementPrefix + 'tile')(ejTile) || ejTile;
        return ejTile;
      })(WidgetBase);

      _export('ejTile', ejTile);
    }
  };
});