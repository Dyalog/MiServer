System.register(['../common/common'], function (_export) {
  'use strict';

  var inlineView, customElement, constants, generateBindables, ScheduleResource;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }],
    execute: function () {
      ScheduleResource = (function () {
        function ScheduleResource() {
          _classCallCheck(this, _ScheduleResource);
        }

        var _ScheduleResource = ScheduleResource;
        ScheduleResource = generateBindables('resources', ['field', 'title', 'name', 'allowMultiple', 'resourceSettings'])(ScheduleResource) || ScheduleResource;
        ScheduleResource = customElement(constants.elementPrefix + 'schedule-resource')(ScheduleResource) || ScheduleResource;
        ScheduleResource = inlineView('<template><content></content></template>')(ScheduleResource) || ScheduleResource;
        return ScheduleResource;
      })();

      _export('ScheduleResource', ScheduleResource);
    }
  };
});