import {
  hasAnnotation,
  getAnnotation
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

describe('getAnnotation', () => {
  it('should return a anotation of type the specified type of one exists', () => {
    class ANote{}

    @ANote
    function fn(){}

    expect(getAnnotation(fn,ANote)).toBeDefined();
    expect(getAnnotation(fn,ANote) instanceof ANote).toBe(true);
  });

  it('should return null when a annotation of a given type is not found', () => {
    class BNote{}
    function fn(){}

    expect(getAnnotation(fn,BNote)).toBeNull();
  });
});
