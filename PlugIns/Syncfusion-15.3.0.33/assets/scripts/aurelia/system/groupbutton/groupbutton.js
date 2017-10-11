'use strict';

System.register(['../common/widget-base', '../common/constants', '../common/decorators', '../common/common', 'syncfusion-javascript/Scripts/ej/web/ej.groupbutton.min'], function (_export, _context) {
  "use strict";

  var WidgetBase, constants, generateBindables, customAttribute, inject, _dec, _dec2, _dec3, _class, ejGroupButton;

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
    setters: [function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
    }, function (_syncfusionJavascriptScriptsEjWebEjGroupbuttonMin) {}],
    execute: function () {
      _export('ejGroupButton', ejGroupButton = (_dec = customAttribute(constants.attributePrefix + 'group-button'), _dec2 = generateBindables('ejGroupButton', ['cssClass', 'dataSource', 'enableRTL', 'enabled', 'fields', 'groupButtonMode', 'height', 'htmlAttributes', 'orientation', 'query', 'selectedItemIndex', 'showRoundedCorner', 'size', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec3 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = function (_WidgetBase) {
        _inherits(ejGroupButton, _WidgetBase);

        function ejGroupButton(element) {
          _classCallCheck(this, ejGroupButton);

          var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

          _this.element = element;
          return _this;
        }

        return ejGroupButton;
      }(WidgetBase)) || _class) || _class) || _class));

      _export('ejGroupButton', ejGroupButton);
    }
  };
});