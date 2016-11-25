var assert = require("assert");
var y = require("../iterject");

describe('main inject', function() {

    it('#range', function() {
        assert.deepEqual(y.range(5).toArray(), [0,1,2,3,4])
        assert.deepEqual(y.range(1, 5).toArray(), [1,2,3,4])
        assert.deepEqual(y.range(5, 3).toArray(), [])
        assert.deepEqual(y.range(5, 3, -1).toArray(), [5,4])
    });

    it('#map', function() {
        assert.deepEqual(y.range(1, 5).map( (x) => x*x ).toArray(), [1, 4, 9, 16]);
        assert.deepEqual(y.range(5).map( (x) => -x ).toArray(), [0,-1,-2,-3,-4]);
    })

    it('#filter', function() {
        assert.deepEqual(y([1,2,10,11,46]).filter(x => x >= 10).toArray(), [10, 11, 46]);
        assert.deepEqual(y([1,10])
                          .filter(x => x < 10)
                          .map(x => x+45).toArray(), [46]);

    })

    it('#enumerate', function(){
        assert.deepEqual(y(["i", "am", "angry"]).enumerate().toArray(), 
                                            [[0, "i"], [1, "am"], [2, "angry"]])
    })



});