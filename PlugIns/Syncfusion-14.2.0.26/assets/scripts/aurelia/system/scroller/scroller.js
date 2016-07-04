System.register(['../common/common', 'common/ej.scroller.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejScroller;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_commonEjScrollerMin) {}],
    execute: function () {
      ejScroller = (function (_WidgetBase) {
        _inherits(ejScroller, _WidgetBase);

        function ejScroller(element) {
          _classCallCheck(this, _ejScroller);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejScroller = ejScroller;
        ejScroller = inject(Element)(ejScroller) || ejScroller;
        ejScroller = generateBindables('ejScroller', ['autoHide', 'buttonSize', 'enabled', 'enablePersistence', 'enableRTL', 'enableTouchScroll', 'height', 'scrollerSize', 'scrollLeft', 'scrollOneStepBy', 'scrollTop', 'targetPane', 'width'], ['scrollLeft', 'scrollTop'], { 'enableRTL': 'enableRtl' })(ejScroller) || ejScroller;
        ejScroller = customAttribute(constants.attributePrefix + 'scroller')(ejScroller) || ejScroller;
        return ejScroller;
      })(WidgetBase);

      _export('ejScroller', ejScroller);
    }
  };
});