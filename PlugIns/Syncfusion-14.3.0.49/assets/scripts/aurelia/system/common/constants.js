'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var constants;
  return {
    setters: [],
    execute: function () {
      _export('constants', constants = {
        eventPrefix: 'e-on-',
        bindablePrefix: 'e-',
        attributePrefix: 'ej-',
        elementPrefix: 'ej-',
        aureliaTemplateString: '<template><slot></slot></template>'
      });

      _export('constants', constants);
    }
  };
});