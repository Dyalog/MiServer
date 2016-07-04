define(['exports', '../common/common'], function (exports, _commonCommon) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Level = (function () {
    function Level() {
      _classCallCheck(this, _Level);
    }

    var _Level = Level;
    Level = _commonCommon.generateBindables('levels', ['groupBackground', 'groupBorderColor', 'groupBorderThickness', 'groupGap', 'groupPadding', 'groupPath', 'headerHeight', 'headerTemplate', 'headerVisibilityMode', 'labelPosition', 'labelTemplate', 'labelVisibilityMode', 'showHeader', 'showLabels'])(Level) || Level;
    Level = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'level')(Level) || Level;
    Level = _commonCommon.inlineView('<template><content></content></template>')(Level) || Level;
    return Level;
  })();

  exports.Level = Level;
});