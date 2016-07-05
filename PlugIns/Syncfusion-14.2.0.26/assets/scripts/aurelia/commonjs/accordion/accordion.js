'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.accordion.min');

var ejAccordion = (function (_WidgetBase) {
  _inherits(ejAccordion, _WidgetBase);

  function ejAccordion(element) {
    _classCallCheck(this, _ejAccordion);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejAccordion = ejAccordion;
  ejAccordion = _commonCommon.inject(Element)(ejAccordion) || ejAccordion;
  ejAccordion = _commonCommon.generateBindables('ejAccordion', ['ajaxSettings', 'allowKeyboardNavigation', 'collapseSpeed', 'collapsible', 'cssClass', 'customIcon', 'disabledItems', 'enableAnimation', 'enabled', 'enabledItems', 'enableMultipleOpen', 'enablePersistence', 'enableRTL', 'events', 'expandSpeed', 'headerSize', 'height', 'heightAdjustMode', 'htmlAttributes', 'selectedItemIndex', 'selectedItems', 'showCloseButton', 'showRoundedCorner', 'width'], [], { 'enableRTL': 'enableRtl' })(ejAccordion) || ejAccordion;
  ejAccordion = _commonCommon.inlineView('<template><content></content></template>')(ejAccordion) || ejAccordion;
  ejAccordion = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'accordion')(ejAccordion) || ejAccordion;
  return ejAccordion;
})(_commonCommon.WidgetBase);

exports.ejAccordion = ejAccordion;