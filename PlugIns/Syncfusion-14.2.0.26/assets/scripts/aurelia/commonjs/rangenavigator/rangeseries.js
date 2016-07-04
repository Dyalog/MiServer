'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _commonCommon = require('../common/common');

var RangeSeries = (function () {
  function RangeSeries() {
    _classCallCheck(this, _RangeSeries);
  }

  var _RangeSeries = RangeSeries;
  RangeSeries = _commonCommon.generateBindables('series', [])(RangeSeries) || RangeSeries;
  RangeSeries = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'range-series')(RangeSeries) || RangeSeries;
  RangeSeries = _commonCommon.inlineView('<template><content></content></template>')(RangeSeries) || RangeSeries;
  return RangeSeries;
})();

exports.RangeSeries = RangeSeries;