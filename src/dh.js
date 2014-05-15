import {decorateInjector} from './injector';

var angular = window.angular;

function setup(angular) {
  var dh = angular.module('dh', ['ng']);
  decorateInjector(dh);
}

if (angular) {
  setup(angular);
} else {
  console.log('dh - Angular not found in window.angular');
}

export {angular};
