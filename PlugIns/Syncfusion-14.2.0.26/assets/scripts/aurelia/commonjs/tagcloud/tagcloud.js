'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.tagcloud.min');

var ejTagCloud = (function (_WidgetBase) {
  _inherits(ejTagCloud, _WidgetBase);

  function ejTagCloud(element) {
    _classCallCheck(this, _ejTagCloud);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejTagCloud = ejTagCloud;
  ejTagCloud = _commonCommon.inject(Element)(ejTagCloud) || ejTagCloud;
  ejTagCloud = _commonCommon.generateBindables('ejTagCloud', ['cssClass', 'dataSource', 'enableRTL', 'fields', 'format', 'maxFontSize', 'minFontSize', 'query', 'showTitle', 'titleImage', 'titleText'], [], { 'enableRTL': 'enableRtl' })(ejTagCloud) || ejTagCloud;
  ejTagCloud = _commonCommon.inlineView('<template><content></content></template>')(ejTagCloud) || ejTagCloud;
  ejTagCloud = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'tag-cloud')(ejTagCloud) || ejTagCloud;
  return ejTagCloud;
})(_commonCommon.WidgetBase);

exports.ejTagCloud = ejTagCloud;