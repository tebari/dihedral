import {Inject} from '../src/annotations'
import {decorateInjector} from '../src/injector';

describe('decorateInjector', () => {
  function Injector() {};
  function Provide() {};

  var $injector, $provide;
  var injectorMethods = [
    'invoke',
    'instantiate',
    'annotate'
  ], provideMethods = [
    'provider',
    'factory',
    'service',
    'decorator'
  ];

  beforeEach(() => {
    Injector.prototype = jasmine.createSpyObj('$injector', injectorMethods);
    Provide.prototype = jasmine.createSpyObj('$provide', provideMethods);

    $injector = new Injector();
    $provide = new Provide();

    //Mock module.config
    var module = {
      //recieves array ['$inject', '$provide', fn]
      config: function(args) {
        args[2]($injector, $provide);
      }
    };
    decorateInjector(module);
  });

  describe('$injector', () => {
     injectorMethods.forEach( method => {
      it(method +' should be decorated to copy the dependencies in @Inject ' +
        'to the $inject property', () => {

        @Inject('Dependency')
        function invokedFunction(){}

        $injector[method](invokedFunction);
        expect(Injector.prototype[method]).toHaveBeenCalledWith(invokedFunction);
        expect(invokedFunction.$inject).toContain('Dependency');
      });
    });
  });

  describe('$provide', () => {
     provideMethods.forEach( method => {
      it(method +' should be decorated to copy the dependencies in @Inject ' +
        'to the $inject property', () => {

        @Inject('Another Dependency')
        function invokedFunction(){}

        $provide[method]('Name', invokedFunction);
        expect(Provide.prototype[method]).toHaveBeenCalledWith('Name', invokedFunction);
        expect(invokedFunction.$inject).toContain('Another Dependency');
      });
    });
  });

});
