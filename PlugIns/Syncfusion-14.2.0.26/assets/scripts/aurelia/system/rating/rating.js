System.register(['../common/common', 'ej.rating.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejRating;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejRatingMin) {}],
    execute: function () {
      ejRating = (function (_WidgetBase) {
        _inherits(ejRating, _WidgetBase);

        function ejRating(element) {
          _classCallCheck(this, _ejRating);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejRating = ejRating;
        ejRating = inject(Element)(ejRating) || ejRating;
        ejRating = generateBindables('ejRating', ['allowReset', 'cssClass', 'enabled', 'enablePersistence', 'height', 'incrementStep', 'maxValue', 'minValue', 'orientation', 'precision', 'readOnly', 'shapeHeight', 'shapeWidth', 'showTooltip', 'value', 'width'], ['value'])(ejRating) || ejRating;
        ejRating = customAttribute(constants.attributePrefix + 'rating')(ejRating) || ejRating;
        return ejRating;
      })(WidgetBase);

      _export('ejRating', ejRating);
    }
  };
});