export class Inject {
  constructor(...dependencies) {
    this.dependencies = dependencies;
  }
}

// Append annotation on a function or class.
// This can be helpful when not using ES6+.
export function annotate(fn, annotation) {
  fn.annotations = fn.annotations || [];
  fn.annotations.push(annotation);
}

// Read annotations on a function or class and return whether given annotation is present.
export function hasAnnotation(fn, annotationClass) {
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
