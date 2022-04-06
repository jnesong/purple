const distinctPairSum = require ('./DistinctPairSum')

test ('returns distinct pairs that sum to k', () => {
    expect(distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2)).toEqual([ [ 1, 1 ], [ 0, 2 ] ])
    expect(distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10)).toEqual([ [ 2, 8 ] ])
});

test('returns empty array if no pairs that sum to k', () => {
    expect(distinctPairSum([10, 20, 40, 8, 9, 8], 100)).toEqual([])
    expect(distinctPairSum([], 100)).toEqual([])
    expect(distinctPairSum([20], 100)).toEqual([])
})

/* For primitive types (e.g. numbers, booleans, strings, etc.), there is no difference between toBe and toEqual; either one will work for 5, true, or "the cake is a lie".
But... toBe compares the referential identity of values, while
toEqual does a deep comparison of the properties of the values (using Object.is).
 toEqual is therefore better suited for objects, unless it is really crucial that an object is the same instance. */