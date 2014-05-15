var angular = window.angular;

function setup(angular) {
  angular.module('dh', ['ng']);
}

if (angular) {
  setup(angular);
} else {
  console.log('dh - Angular not found in window.angular');
}

export {angular};
