'use strict';
var Meteor;

describe('Given the $meteorMethods service', function() {

  var $meteorMethods, $rootScope;

  beforeEach(function() {

    Meteor = {
      call: jasmine.createSpy('spy').and.returnValue('test')
    };

    module('angular-meteor.methods');

    inject(function(_$meteorMethods_, _$rootScope_) {
      $meteorMethods = _$meteorMethods_;
      $rootScope = _$rootScope_;
    });

  });

  describe('when using call(methodName,args)', function() {

    it('should in invoke Meteor.call with method name and arguments', function() {

      var output = $meteorMethods.call('myMethod', 'arg1');

      expect(typeof output).toBe('object');
      $rootScope.$apply(); // resolve the promise.

      expect(Meteor.call.calls.mostRecent().args[0]).toEqual('myMethod');
      expect(Meteor.call.calls.mostRecent().args[1]).toEqual('arg1');

    });

  });

});
