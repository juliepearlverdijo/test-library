(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'test-library-js-legacy', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('test-library-js-legacy'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'test-library-js-legacy-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'test-library-js-legacy-test'.");
    }if (typeof this['test-library-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'test-library-js-legacy-test'. Its dependency 'test-library-js-legacy' was not found. Please, check whether 'test-library-js-legacy' is loaded prior to 'test-library-js-legacy-test'.");
    }if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'test-library-js-legacy-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'test-library-js-legacy-test'.");
    }root['test-library-js-legacy-test'] = factory(typeof this['test-library-js-legacy-test'] === 'undefined' ? {} : this['test-library-js-legacy-test'], kotlin, this['test-library-js-legacy'], this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$test_library_js_legacy, $module$kotlin_test) {
  'use strict';
  var Sample = $module$test_library_js_legacy.sample.Sample;
  var assertTrue = $module$kotlin_test.kotlin.test.assertTrue_ifx8ge$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function SampleTests() {
  }
  SampleTests.prototype.testMe = function () {
    assertTrue((new Sample()).checkMe() > 0);
  };
  SampleTests.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SampleTests',
    interfaces: []
  };
  var package$sample = _.sample || (_.sample = {});
  package$sample.SampleTests = SampleTests;
  suite('sample', false, function () {
    suite('SampleTests', false, function () {
      test('testMe', false, function () {
        return (new SampleTests()).testMe();
      });
    });
  });
  Kotlin.defineModule('test-library-js-legacy-test', _);
  return _;
}));

//# sourceMappingURL=test-library-js-legacy-test.js.map
