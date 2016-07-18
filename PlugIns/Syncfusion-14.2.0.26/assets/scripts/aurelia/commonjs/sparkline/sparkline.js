'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('datavisualization/ej.sparkline.min');

var ejSparkline = (function (_WidgetBase) {
  _inherits(ejSparkline, _WidgetBase);

  function ejSparkline(element) {
    _classCallCheck(this, _ejSparkline);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejSparkline = ejSparkline;
  ejSparkline = _commonCommon.inject(Element)(ejSparkline) || ejSparkline;
  ejSparkline = _commonCommon.generateBindables('ejSparkline', ['background', 'fill', 'stroke', 'strokeWidth', 'opacity', 'bandOpacity', 'highPointColor', 'lowPointColor', 'startPointColor', 'endPointColor', 'negativePointColor', 'startRange', 'endRange', 'enableCanvasRendering', 'dataSource', 'xName', 'yName', 'padding', 'type', 'theme', 'tooltip', 'markerSettings', 'size', 'border', 'showAxis', 'axisLine'])(ejSparkline) || ejSparkline;
  ejSparkline = _commonCommon.inlineView('<template><content></content></template>')(ejSparkline) || ejSparkline;
  ejSparkline = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'sparkline')(ejSparkline) || ejSparkline;
  return ejSparkline;
})(_commonCommon.WidgetBase);

exports.ejSparkline = ejSparkline;