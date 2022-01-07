(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'test-library-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'test-library-js-legacy'.");
    }root['test-library-js-legacy'] = factory(typeof this['test-library-js-legacy'] === 'undefined' ? {} : this['test-library-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  function hello() {
    return 'Hello from ' + Platform_getInstance().name();
  }
  function Sample() {
  }
  Sample.prototype.checkMe = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  Sample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sample',
    interfaces: []
  };
  function Platform() {
    Platform_instance = this;
  }
  Platform.prototype.name = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  Platform.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Platform',
    interfaces: []
  };
  var Platform_instance = null;
  function Platform_getInstance() {
    if (Platform_instance === null) {
      new Platform();
    }return Platform_instance;
  }
  var package$sample = _.sample || (_.sample = {});
  package$sample.hello = hello;
  package$sample.Sample = Sample;
  Object.defineProperty(package$sample, 'Platform', {
    get: Platform_getInstance
  });
  Kotlin.defineModule('test-library-js-legacy', _);
  return _;
}));

//# sourceMappingURL=test-library-js-legacy.js.map
