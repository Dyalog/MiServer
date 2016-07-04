'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.ribbon.min');

var ejRibbon = (function (_WidgetBase) {
  _inherits(ejRibbon, _WidgetBase);

  function ejRibbon(element) {
    _classCallCheck(this, _ejRibbon);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejRibbon = ejRibbon;
  ejRibbon = _commonCommon.inject(Element)(ejRibbon) || ejRibbon;
  ejRibbon = _commonCommon.generateBindables('ejRibbon', ['allowResizing', 'buttonDefaults', 'showQAT', 'collapsePinSettings', 'expandPinSettings', 'applicationTab', 'contextualTabs', 'disabledItemIndex', 'enabledItemIndex', 'selectedItemIndex', 'tabs', 'locale', 'width'])(ejRibbon) || ejRibbon;
  ejRibbon = _commonCommon.inlineView('<template><content></content></template>')(ejRibbon) || ejRibbon;
  ejRibbon = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'ribbon')(ejRibbon) || ejRibbon;
  return ejRibbon;
})(_commonCommon.WidgetBase);

exports.ejRibbon = ejRibbon;