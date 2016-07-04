define(['exports', '../common/common', 'ej.autocomplete.min'], function (exports, _commonCommon, _ejAutocompleteMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejAutocomplete = (function (_WidgetBase) {
    _inherits(ejAutocomplete, _WidgetBase);

    function ejAutocomplete(element) {
      _classCallCheck(this, _ejAutocomplete);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejAutocomplete = ejAutocomplete;
    ejAutocomplete = _commonCommon.inject(Element)(ejAutocomplete) || ejAutocomplete;
    ejAutocomplete = _commonCommon.generateBindables('ejAutocomplete', ['addNewText', 'allowAddNew', 'allowSorting', 'animateType', 'autoFocus', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delaySuggestionTimeout', 'delimiterChar', 'emptyResultText', 'enableAutoFill', 'enabled', 'enableDistinct', 'enablePersistence', 'enableRTL', 'fields', 'filterType', 'height', 'highlightSearch', 'itemsCount', 'minCharacter', 'multiSelectMode', 'multiColumnSettings', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectValueByKey', 'showEmptyResultText', 'showLoadingIcon', 'showPopupButton', 'showRoundedCorner', 'showResetIcon', 'sortOrder', 'template', 'validationMessage', 'validationRules', 'value', 'visible', 'watermarkText', 'width'], ['value', 'selectValueByKey'], { 'enableRTL': 'enableRtl' })(ejAutocomplete) || ejAutocomplete;
    ejAutocomplete = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'autocomplete')(ejAutocomplete) || ejAutocomplete;
    return ejAutocomplete;
  })(_commonCommon.WidgetBase);

  exports.ejAutocomplete = ejAutocomplete;
});