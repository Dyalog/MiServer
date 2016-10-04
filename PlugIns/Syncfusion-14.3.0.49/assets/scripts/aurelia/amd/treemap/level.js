define(['exports', '../common/common'], function (exports, _common) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Level = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Level = exports.Level = (_dec = (0, _common.inlineView)('' + _common.constants.aureliaTemplateString), _dec2 = (0, _common.customElement)(_common.constants.elementPrefix + 'level'), _dec3 = (0, _common.generateBindables)('levels', ['groupBackground', 'groupBorderColor', 'groupBorderThickness', 'groupGap', 'groupPadding', 'groupPath', 'headerHeight', 'headerTemplate', 'headerVisibilityMode', 'labelPosition', 'labelTemplate', 'labelVisibilityMode', 'showHeader', 'showLabels']), _dec(_class = _dec2(_class = _dec3(_class = function Level() {
    _classCallCheck(this, Level);
  }) || _class) || _class) || _class);
});