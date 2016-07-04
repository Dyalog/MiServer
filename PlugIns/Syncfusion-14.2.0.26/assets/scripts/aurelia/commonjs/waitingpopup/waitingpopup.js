'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.waitingpopup.min');

var ejWaitingPopup = (function (_WidgetBase) {
  _inherits(ejWaitingPopup, _WidgetBase);

  function ejWaitingPopup(element) {
    _classCallCheck(this, _ejWaitingPopup);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejWaitingPopup = ejWaitingPopup;
  ejWaitingPopup = _commonCommon.inject(Element)(ejWaitingPopup) || ejWaitingPopup;
  ejWaitingPopup = _commonCommon.generateBindables('ejWaitingPopup', ['cssClass', 'showImage', 'showOnInit', 'template', 'text'])(ejWaitingPopup) || ejWaitingPopup;
  ejWaitingPopup = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'waiting-popup')(ejWaitingPopup) || ejWaitingPopup;
  return ejWaitingPopup;
})(_commonCommon.WidgetBase);

exports.ejWaitingPopup = ejWaitingPopup;