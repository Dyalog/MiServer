System.register(['../common/common'], function (_export) {
  'use strict';

  var inlineView, customElement, constants, generateBindables, QualitativeRange;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }],
    execute: function () {
      QualitativeRange = (function () {
        function QualitativeRange() {
          _classCallCheck(this, _QualitativeRange);
        }

        var _QualitativeRange = QualitativeRange;
        QualitativeRange = generateBindables('qualitativeRanges', ['rangeEnd', 'rangeOpacity', 'rangeStroke'])(QualitativeRange) || QualitativeRange;
        QualitativeRange = customElement(constants.elementPrefix + 'qualitative-range')(QualitativeRange) || QualitativeRange;
        QualitativeRange = inlineView('<template><content></content></template>')(QualitativeRange) || QualitativeRange;
        return QualitativeRange;
      })();

      _export('QualitativeRange', QualitativeRange);
    }
  };
});