System.register(['../common/common', 'ej.splitter.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejSplitter;

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
    }, function (_ejSplitterMin) {}],
    execute: function () {
      ejSplitter = (function (_WidgetBase) {
        _inherits(ejSplitter, _WidgetBase);

        function ejSplitter(element) {
          _classCallCheck(this, _ejSplitter);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejSplitter = ejSplitter;
        ejSplitter = inject(Element)(ejSplitter) || ejSplitter;
        ejSplitter = generateBindables('ejSplitter', ['allowKeyboardNavigation', 'animationSpeed', 'cssClass', 'enableAnimation', 'enableRTL', 'height', 'htmlAttributes', 'isResponsive', 'orientation', 'properties', 'width'], [], { 'enableRTL': 'enableRtl' })(ejSplitter) || ejSplitter;
        ejSplitter = inlineView('<template><content></content></template>')(ejSplitter) || ejSplitter;
        ejSplitter = customElement(constants.elementPrefix + 'splitter')(ejSplitter) || ejSplitter;
        return ejSplitter;
      })(WidgetBase);

      _export('ejSplitter', ejSplitter);
    }
  };
});