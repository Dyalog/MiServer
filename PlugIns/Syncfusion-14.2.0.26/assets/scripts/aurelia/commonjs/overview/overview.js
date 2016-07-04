'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('datavisualization/ej.diagram.min');

var ejOverview = (function (_WidgetBase) {
  _inherits(ejOverview, _WidgetBase);

  function ejOverview(element) {
    _classCallCheck(this, _ejOverview);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejOverview = ejOverview;
  ejOverview = _commonCommon.inject(Element)(ejOverview) || ejOverview;
  ejOverview = _commonCommon.generateBindables('ejOverview', ['sourceID', 'height', 'width'], [], { 'sourceID': 'sourceId' })(ejOverview) || ejOverview;
  ejOverview = _commonCommon.inlineView('<template><content></content></template>')(ejOverview) || ejOverview;
  ejOverview = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'overview')(ejOverview) || ejOverview;
  return ejOverview;
})(_commonCommon.WidgetBase);

exports.ejOverview = ejOverview;