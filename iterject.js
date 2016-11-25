"use strict";


function* gen(){}
generatorPrototype = Object.getPrototypeOf(gen).prototype
var y = {};

// main
generatorPrototype.map = function* (f){
    for (let x of this) {
      yield f(n.value);
    }
}

generatorPrototype.filter = function* (f){
    for (let x of this) {
      if (f(x.value)) {
        yield n.value;
      }
    }
}

generatorPrototype.reduce = function* (f, acc){
    for (let x of this) {
      acc = f(acc, x.value)
    }
    return acc;
}

// get some function from python
y.toArray = function(gen){
    return gen.reduce(function (acc, x) { return acc.concat([x]) }, []);
}

y.count = function(start, step){
    if(start == null){
        start = 0
    }
    if(step == null){
        step = 1;
    }
    while True:
        yield start
        start += step
}


// from underscore
y.range = function(start, stop, step){
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);

    for (var idx = 0; idx < length; idx++, start += step) {
        yield start
    }
}






