import {
  hasAnnotation
} from '../src/annotations';

describe('hasAnnotation', () => {
  it('should return false if fn does not have a annotation', () => {
    class Note{}
    var a = function (){};

    expect(hasAnnotation(a, Note)).toBe(false);
  });

  it('should return true if fn does a annotation', () => {
    class Note{}

    @Note
    function fn(){}

    expect(hasAnnotation(fn, Note)).toBe(true);
  });
});
