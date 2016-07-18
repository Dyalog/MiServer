define(['exports', '../common/common', 'ej.rating.min'], function (exports, _commonCommon, _ejRatingMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejRating = (function (_WidgetBase) {
    _inherits(ejRating, _WidgetBase);

    function ejRating(element) {
      _classCallCheck(this, _ejRating);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejRating = ejRating;
    ejRating = _commonCommon.inject(Element)(ejRating) || ejRating;
    ejRating = _commonCommon.generateBindables('ejRating', ['allowReset', 'cssClass', 'enabled', 'enablePersistence', 'height', 'incrementStep', 'maxValue', 'minValue', 'orientation', 'precision', 'readOnly', 'shapeHeight', 'shapeWidth', 'showTooltip', 'value', 'width'], ['value'])(ejRating) || ejRating;
    ejRating = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'rating')(ejRating) || ejRating;
    return ejRating;
  })(_commonCommon.WidgetBase);

  exports.ejRating = ejRating;
});