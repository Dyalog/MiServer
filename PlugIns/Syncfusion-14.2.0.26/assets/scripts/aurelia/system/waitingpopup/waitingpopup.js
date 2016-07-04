System.register(['../common/common', 'ej.waitingpopup.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejWaitingPopup;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejWaitingpopupMin) {}],
    execute: function () {
      ejWaitingPopup = (function (_WidgetBase) {
        _inherits(ejWaitingPopup, _WidgetBase);

        function ejWaitingPopup(element) {
          _classCallCheck(this, _ejWaitingPopup);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejWaitingPopup = ejWaitingPopup;
        ejWaitingPopup = inject(Element)(ejWaitingPopup) || ejWaitingPopup;
        ejWaitingPopup = generateBindables('ejWaitingPopup', ['cssClass', 'showImage', 'showOnInit', 'template', 'text'])(ejWaitingPopup) || ejWaitingPopup;
        ejWaitingPopup = customAttribute(constants.attributePrefix + 'waiting-popup')(ejWaitingPopup) || ejWaitingPopup;
        return ejWaitingPopup;
      })(WidgetBase);

      _export('ejWaitingPopup', ejWaitingPopup);
    }
  };
});