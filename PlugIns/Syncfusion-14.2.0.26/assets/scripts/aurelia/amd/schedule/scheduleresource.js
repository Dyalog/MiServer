define(['exports', '../common/common'], function (exports, _commonCommon) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var ScheduleResource = (function () {
    function ScheduleResource() {
      _classCallCheck(this, _ScheduleResource);
    }

    var _ScheduleResource = ScheduleResource;
    ScheduleResource = _commonCommon.generateBindables('resources', ['field', 'title', 'name', 'allowMultiple', 'resourceSettings'])(ScheduleResource) || ScheduleResource;
    ScheduleResource = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'schedule-resource')(ScheduleResource) || ScheduleResource;
    ScheduleResource = _commonCommon.inlineView('<template><content></content></template>')(ScheduleResource) || ScheduleResource;
    return ScheduleResource;
  })();

  exports.ScheduleResource = ScheduleResource;
});