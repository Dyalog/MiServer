System.register([], function (_export) {
  'use strict';

  var constants;
  return {
    setters: [],
    execute: function () {
      constants = {
        eventPrefix: 'e-on-',
        bindablePrefix: 'e-',
        attributePrefix: 'ej-',
        elementPrefix: 'ej-'
      };

      _export('constants', constants);
    }
  };
});