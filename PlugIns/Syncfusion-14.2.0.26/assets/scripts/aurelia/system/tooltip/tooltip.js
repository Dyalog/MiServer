System.register(['../common/common', 'ej.tooltip.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejTooltip;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejTooltipMin) {}],
    execute: function () {
      ejTooltip = (function (_WidgetBase) {
        _inherits(ejTooltip, _WidgetBase);

        function ejTooltip(element) {
          _classCallCheck(this, _ejTooltip);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejTooltip = ejTooltip;
        ejTooltip = inject(Element)(ejTooltip) || ejTooltip;
        ejTooltip = generateBindables('ejTooltip', ['allowKeyboardNavigation', 'animation', 'associate', 'autoCloseTimeout', 'closeMode', 'collision', 'containment', 'content', 'cssClass', 'enabled', 'enableRTL', 'height', 'isBalloon', 'position', 'showRoundedCorner', 'showShadow', 'target', 'title', 'trigger', 'width'], [], { 'enableRTL': 'enableRtl' })(ejTooltip) || ejTooltip;
        ejTooltip = customAttribute(constants.attributePrefix + 'tooltip')(ejTooltip) || ejTooltip;
        return ejTooltip;
      })(WidgetBase);

      _export('ejTooltip', ejTooltip);
    }
  };
});