'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _commonCommon = require('../common/common');

var QualitativeRange = (function () {
  function QualitativeRange() {
    _classCallCheck(this, _QualitativeRange);
  }

  var _QualitativeRange = QualitativeRange;
  QualitativeRange = _commonCommon.generateBindables('qualitativeRanges', ['rangeEnd', 'rangeOpacity', 'rangeStroke'])(QualitativeRange) || QualitativeRange;
  QualitativeRange = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'qualitative-range')(QualitativeRange) || QualitativeRange;
  QualitativeRange = _commonCommon.inlineView('<template><content></content></template>')(QualitativeRange) || QualitativeRange;
  return QualitativeRange;
})();

exports.QualitativeRange = QualitativeRange;