'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.tile.min');

var ejTile = (function (_WidgetBase) {
  _inherits(ejTile, _WidgetBase);

  function ejTile(element) {
    _classCallCheck(this, _ejTile);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejTile = ejTile;
  ejTile = _commonCommon.inject(Element)(ejTile) || ejTile;
  ejTile = _commonCommon.generateBindables('ejTile', ['badge', 'caption', 'cssClass', 'enablePersistence', 'height', 'imageClass', 'imagePosition', 'imageTemplateId', 'imageUrl', 'liveTile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection', 'backgroundColor'])(ejTile) || ejTile;
  ejTile = _commonCommon.inlineView('<template><content></content></template>')(ejTile) || ejTile;
  ejTile = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'tile')(ejTile) || ejTile;
  return ejTile;
})(_commonCommon.WidgetBase);

exports.ejTile = ejTile;