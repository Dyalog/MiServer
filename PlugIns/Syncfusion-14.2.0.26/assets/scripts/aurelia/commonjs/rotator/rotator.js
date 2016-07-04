'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.rotator.min');

var ejRotator = (function (_WidgetBase) {
  _inherits(ejRotator, _WidgetBase);

  function ejRotator(element) {
    _classCallCheck(this, _ejRotator);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejRotator = ejRotator;
  ejRotator = _commonCommon.inject(Element)(ejRotator) || ejRotator;
  ejRotator = _commonCommon.generateBindables('ejRotator', ['allowKeyboardNavigation', 'animationSpeed', 'animationType', 'circularMode', 'cssClass', 'dataSource', 'delay', 'displayItemsCount', 'enableAutoPlay', 'enabled', 'enableRTL', 'fields', 'frameSpace', 'isResponsive', 'navigateSteps', 'orientation', 'pagerPosition', 'query', 'showCaption', 'showNavigateButton', 'showPager', 'showPlayButton', 'showThumbnail', 'slideHeight', 'slideWidth', 'startIndex', 'stopOnHover', 'template', 'thumbnailSourceID'], [], { 'enableRTL': 'enableRtl', 'thumbnailSourceID': 'thumbnailSourceId' })(ejRotator) || ejRotator;
  ejRotator = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'rotator')(ejRotator) || ejRotator;
  return ejRotator;
})(_commonCommon.WidgetBase);

exports.ejRotator = ejRotator;