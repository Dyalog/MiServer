'use strict';

System.register(['./config-builder'], function (_export, _context) {
  "use strict";

  var EjConfigBuilder;
  function configure(aurelia, configCallback) {
    var builder = new EjConfigBuilder();

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    var resources = builder.resources;

    if (builder.useGlobalResources) {
      aurelia.globalResources(resources);
    }
  }

  _export('configure', configure);

  return {
    setters: [function (_configBuilder) {
      EjConfigBuilder = _configBuilder.EjConfigBuilder;
    }],
    execute: function () {}
  };
});