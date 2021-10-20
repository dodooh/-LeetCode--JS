const containsNearbyDuplicate = require('./index');

test('returns true for Arrays with duplicate values', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toEqual(true);
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toEqual(true);
});

test('returns false for Arrays with NO duplicate values', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toEqual(false);
});
