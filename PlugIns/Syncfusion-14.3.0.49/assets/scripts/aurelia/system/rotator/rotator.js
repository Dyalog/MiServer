'use strict';

System.register(['../common/common', 'ej.rotator.min'], function (_export, _context) {
  "use strict";

  var customAttribute, inject, WidgetBase, constants, generateBindables, _dec, _dec2, _dec3, _class, ejRotator;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejRotatorMin) {}],
    execute: function () {
      _export('ejRotator', ejRotator = (_dec = customAttribute(constants.attributePrefix + 'rotator'), _dec2 = generateBindables('ejRotator', ['allowKeyboardNavigation', 'animationSpeed', 'animationType', 'circularMode', 'cssClass', 'dataSource', 'delay', 'displayItemsCount', 'enableAutoPlay', 'enabled', 'enableRTL', 'fields', 'frameSpace', 'isResponsive', 'navigateSteps', 'orientation', 'pagerPosition', 'query', 'showCaption', 'showNavigateButton', 'showPager', 'showPlayButton', 'showThumbnail', 'slideHeight', 'slideWidth', 'startIndex', 'stopOnHover', 'template', 'thumbnailSourceID'], [], { 'enableRTL': 'enableRtl', 'thumbnailSourceID': 'thumbnailSourceId' }), _dec3 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = function (_WidgetBase) {
        _inherits(ejRotator, _WidgetBase);

        function ejRotator(element) {
          _classCallCheck(this, ejRotator);

          var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

          _this.element = element;
          return _this;
        }

        return ejRotator;
      }(WidgetBase)) || _class) || _class) || _class));

      _export('ejRotator', ejRotator);
    }
  };
});