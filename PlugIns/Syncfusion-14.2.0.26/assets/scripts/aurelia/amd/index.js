define(['exports', './config-builder'], function (exports, _configBuilder) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;

  function configure(aurelia, configCallback) {
    var builder = new _configBuilder.EjConfigBuilder();

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    var resources = builder.resources;

    if (builder.useGlobalResources) {
      aurelia.globalResources(resources);
    }
  }
});