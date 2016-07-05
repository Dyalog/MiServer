System.register(['../common/common'], function (_export) {
  'use strict';

  var inlineView, customElement, constants, generateBindables, RangeSeries;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }],
    execute: function () {
      RangeSeries = (function () {
        function RangeSeries() {
          _classCallCheck(this, _RangeSeries);
        }

        var _RangeSeries = RangeSeries;
        RangeSeries = generateBindables('series', [])(RangeSeries) || RangeSeries;
        RangeSeries = customElement(constants.elementPrefix + 'range-series')(RangeSeries) || RangeSeries;
        RangeSeries = inlineView('<template><content></content></template>')(RangeSeries) || RangeSeries;
        return RangeSeries;
      })();

      _export('RangeSeries', RangeSeries);
    }
  };
});