class Inject {
  constructor(...dependencies) {
    this.dependencies = dependencies;
  }
}

// Append annotation on a function or class.
// This can be helpful when not using ES6+.
function annotate(fn, annotation) {
  fn.annotations = fn.annotations || [];
  fn.annotations.push(annotation);
}

// Read annotations on a function or class and return whether given annotation is present.
function hasAnnotation(fn, annotationClass) {
  if (!fn.annotations || fn.annotations.length === 0) {
    return false;
  }

  for (var annotation of fn.annotations) {
    if (annotation instanceof annotationClass) {
      return true;
    }
  }

  return false;
}

function getAnnotation(fn, annotationClass) {
  if (!fn || typeof fn !== 'function' || !fn.annotations) {
    return null;
  }

  var annotations = getAnnotations(fn, annotationClass);
  return (annotations.length > 0) ? annotations[0] : null;
}

function getAnnotations(fn, annotationClass) {
  if (!fn || typeof fn !== 'function' || !fn.annotations) {
    return [];
  }

  return fn.annotations.filter( (annotation) =>
    annotation instanceof annotationClass
  );
}

export {
  Inject,

  annotate,
  hasAnnotation,
  getAnnotation
}
