'use strict';

System.register(['../common/constants', '../common/decorators', '../common/common'], function (_export, _context) {
  "use strict";

  var constants, generateBindables, inlineView, customElement, _dec, _dec2, _dec3, _class, SunburstLevels;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
    }],
    execute: function () {
      _export('SunburstLevels', SunburstLevels = (_dec = inlineView('' + constants.aureliaTemplateString), _dec2 = customElement(constants.elementPrefix + 'sunburst-levels'), _dec3 = generateBindables('levels', ['groupMemberPath']), _dec(_class = _dec2(_class = _dec3(_class = function SunburstLevels() {
        _classCallCheck(this, SunburstLevels);
      }) || _class) || _class) || _class));

      _export('SunburstLevels', SunburstLevels);
    }
  };
});