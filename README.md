
Injecting generator helper function into the prototype to provide syntax sugar.

### example
```js
function mersenneNumbers() {
  return y.count(2).imap(x => 2**x - 1);
}

// Sequence of all Mersenne numbers that are prime.
function mersennePrimes() {
  return mersenneNumbers().ifilter(n => y.range(2, n - 1).all(x => n%x));
}

mersennePrimes().take(3) // [3, 7, 31]
```

some idea is from:
* [yield-js](https://github.com/ttaubert/yield-js)
* [underscore.js](http://underscorejs.org/docs/underscore.html)
* [python itertools](https://docs.python.org/2/library/itertools.html)

