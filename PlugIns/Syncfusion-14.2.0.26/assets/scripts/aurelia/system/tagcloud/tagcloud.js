System.register(['../common/common', 'ej.tagcloud.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejTagCloud;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customElement = _commonCommon.customElement;
      inlineView = _commonCommon.inlineView;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejTagcloudMin) {}],
    execute: function () {
      ejTagCloud = (function (_WidgetBase) {
        _inherits(ejTagCloud, _WidgetBase);

        function ejTagCloud(element) {
          _classCallCheck(this, _ejTagCloud);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejTagCloud = ejTagCloud;
        ejTagCloud = inject(Element)(ejTagCloud) || ejTagCloud;
        ejTagCloud = generateBindables('ejTagCloud', ['cssClass', 'dataSource', 'enableRTL', 'fields', 'format', 'maxFontSize', 'minFontSize', 'query', 'showTitle', 'titleImage', 'titleText'], [], { 'enableRTL': 'enableRtl' })(ejTagCloud) || ejTagCloud;
        ejTagCloud = inlineView('<template><content></content></template>')(ejTagCloud) || ejTagCloud;
        ejTagCloud = customElement(constants.elementPrefix + 'tag-cloud')(ejTagCloud) || ejTagCloud;
        return ejTagCloud;
      })(WidgetBase);

      _export('ejTagCloud', ejTagCloud);
    }
  };
});