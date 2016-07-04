System.register(['./config-builder'], function (_export) {
  'use strict';

  var EjConfigBuilder;

  _export('configure', configure);

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

  return {
    setters: [function (_configBuilder) {
      EjConfigBuilder = _configBuilder.EjConfigBuilder;
    }],
    execute: function () {}
  };
});