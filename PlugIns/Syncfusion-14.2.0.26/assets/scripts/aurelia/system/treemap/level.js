System.register(['../common/common'], function (_export) {
  'use strict';

  var inlineView, customElement, constants, generateBindables, Level;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }],
    execute: function () {
      Level = (function () {
        function Level() {
          _classCallCheck(this, _Level);
        }

        var _Level = Level;
        Level = generateBindables('levels', ['groupBackground', 'groupBorderColor', 'groupBorderThickness', 'groupGap', 'groupPadding', 'groupPath', 'headerHeight', 'headerTemplate', 'headerVisibilityMode', 'labelPosition', 'labelTemplate', 'labelVisibilityMode', 'showHeader', 'showLabels'])(Level) || Level;
        Level = customElement(constants.elementPrefix + 'level')(Level) || Level;
        Level = inlineView('<template><content></content></template>')(Level) || Level;
        return Level;
      })();

      _export('Level', Level);
    }
  };
});