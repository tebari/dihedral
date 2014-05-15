import dh from 'dihedral';

describe('dh', () => {
  function getModule() {
    return window.angular.module('dh');
  }

  it('should exist as a module in angular', () => {
    expect(getModule).not.toThrow();
    expect(getModule()).toBeDefined();
  });
});
