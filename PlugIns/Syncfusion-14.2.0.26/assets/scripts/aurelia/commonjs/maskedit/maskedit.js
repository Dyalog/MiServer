'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.maskedit.min');

var ejMaskEdit = (function (_WidgetBase) {
  _inherits(ejMaskEdit, _WidgetBase);

  function ejMaskEdit(element) {
    _classCallCheck(this, _ejMaskEdit);

    _WidgetBase.call(this);
    this.isEditor = true;
    this.element = element;
  }

  var _ejMaskEdit = ejMaskEdit;
  ejMaskEdit = _commonCommon.inject(Element)(ejMaskEdit) || ejMaskEdit;
  ejMaskEdit = _commonCommon.generateBindables('ejMaskEdit', ['cssClass', 'customCharacter', 'enabled', 'enablePersistence', 'height', 'hidePromptOnLeave', 'htmlAttributes', 'inputMode', 'maskFormat', 'name', 'readOnly', 'showError', 'showRoundedCorner', 'textAlign', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'])(ejMaskEdit) || ejMaskEdit;
  ejMaskEdit = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'mask-edit')(ejMaskEdit) || ejMaskEdit;
  return ejMaskEdit;
})(_commonCommon.WidgetBase);

exports.ejMaskEdit = ejMaskEdit;