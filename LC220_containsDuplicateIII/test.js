const containsNearbyAlmostDuplicate = require('./index');

test('returns true for Arrays with duplicate values', () => {
    expect(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)).toEqual(true);
    expect(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2)).toEqual(true);
});

test('returns false for Arrays with NO duplicate values', () => {
    expect(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)).toEqual(false);
});
