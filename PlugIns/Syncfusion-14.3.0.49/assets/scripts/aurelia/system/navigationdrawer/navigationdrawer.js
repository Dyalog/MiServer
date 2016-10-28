'use strict';

System.register(['../common/common', 'ej.navigationdrawer.min'], function (_export, _context) {
  "use strict";

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, _dec, _dec2, _dec3, _dec4, _class, ejNavigationDrawer;

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
      customElement = _commonCommon.customElement;
      inlineView = _commonCommon.inlineView;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejNavigationdrawerMin) {}],
    execute: function () {
      _export('ejNavigationDrawer', ejNavigationDrawer = (_dec = customElement(constants.elementPrefix + 'navigation-drawer'), _dec2 = inlineView('' + constants.aureliaTemplateString), _dec3 = generateBindables('ejNavigationDrawer', ['contentId', 'cssClass', 'direction', 'enableListView', 'items', 'listViewSettings', 'position', 'targetId', 'type', 'width']), _dec4 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = function (_WidgetBase) {
        _inherits(ejNavigationDrawer, _WidgetBase);

        function ejNavigationDrawer(element) {
          _classCallCheck(this, ejNavigationDrawer);

          var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

          _this.element = element;
          return _this;
        }

        return ejNavigationDrawer;
      }(WidgetBase)) || _class) || _class) || _class) || _class));

      _export('ejNavigationDrawer', ejNavigationDrawer);
    }
  };
});