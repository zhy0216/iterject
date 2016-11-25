"use strict";

function* gen(){}
var generatorPrototype = Object.getPrototypeOf(gen).prototype
var y = function* (iteratable){
    yield* iteratable;;
}
// main inject

generatorPrototype.map = function* (f){
    for (let x of this) {
      yield f(x);
    }
}

generatorPrototype.filter = function* (f){
    for (let x of this) {
      if (f(x)) {
        yield x;
      }
    }
}

generatorPrototype.reduce = function (f, acc){
    for (let x of this) {
      acc = f(acc, x)
    }
    return acc;
}

generatorPrototype.enumerate = function* (start){
    start = start || 0;
    for (let x of this) {
        yield [start++, x]
    }
}


// get some function from python
generatorPrototype.toArray = function(){
    return this.reduce(function (acc, x) { return acc.concat([x]) }, []);
}

y.fromArray = function* (array){
      yield* array;
}

y.count = function* (start, step){
    if(start == null){
        start = 0
    }
    if(step == null){
        step = 1;
    }
    while(true){
        yield start;
        start += step;
    }
}


// from underscore
y.range = function* (start, stop, step){
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


module.exports = y;




