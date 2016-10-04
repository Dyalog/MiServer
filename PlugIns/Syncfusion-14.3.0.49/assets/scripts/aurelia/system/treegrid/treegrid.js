'use strict';

System.register(['../common/common', 'ej.treegrid.min'], function (_export, _context) {
  "use strict";

  var inject, WidgetBase, constants, generateBindables, inlineView, customElement, children, TemplatingEngine, TemplateProcessor, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, ejTreeGrid;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

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

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_commonCommon) {
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      children = _commonCommon.children;
      TemplatingEngine = _commonCommon.TemplatingEngine;
      TemplateProcessor = _commonCommon.TemplateProcessor;
    }, function (_ejTreegridMin) {}],
    execute: function () {
      _export('ejTreeGrid', ejTreeGrid = (_dec = customElement(constants.elementPrefix + 'tree-grid'), _dec2 = inlineView('' + constants.aureliaTemplateString), _dec3 = generateBindables('ejTreeGrid', ['allowColumnResize', 'allowDragAndDrop', 'allowFiltering', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowSelection', 'allowSorting', 'allowPaging', 'altRowTemplateID', 'childMapping', 'columns', 'columnDialogFields', 'contextMenuSettings', 'cssClass', 'dataSource', 'headerTextOverflow', 'dragTooltip', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableResize', 'enableVirtualization', 'filterSettings', 'locale', 'idMapping', 'isResponsive', 'parentIdMapping', 'pageSettings', 'cellTooltipTemplate', 'query', 'rowHeight', 'rowTemplateID', 'selectedRowIndex', 'selectionMode', 'selectionType', 'showColumnOptions', 'showColumnChooser', 'showDetailsRow', 'showDetailsRowInfoColumn', 'detailsTemplate', 'detailsRowHeight', 'showSummaryRow', 'showTotalSummary', 'summaryRows', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'sizeSettings', 'sortSettings', 'toolbarSettings', 'treeColumnIndex'], ['dataSource', 'selectedRowIndex', 'pageSettings.currentPage'], { 'altRowTemplateID': 'altRowTemplateId', 'rowTemplateID': 'rowTemplateId' }), _dec4 = inject(Element, TemplatingEngine), _dec5 = children(constants.elementPrefix + 'tree-grid-column'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = function (_WidgetBase) {
        _inherits(ejTreeGrid, _WidgetBase);

        function ejTreeGrid(element, templateEngine) {
          _classCallCheck(this, ejTreeGrid);

          var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

          _initDefineProp(_this, 'columns', _descriptor, _this);

          _this.element = element;
          _this.hasChildProperty = true;
          _this.childPropertyName = 'columns';
          _this.templateProcessor = new TemplateProcessor(_this, templateEngine);
          _this.templateProcessor.initTemplate();
          return _this;
        }

        return ejTreeGrid;
      }(WidgetBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'columns', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      _export('ejTreeGrid', ejTreeGrid);
    }
  };
});