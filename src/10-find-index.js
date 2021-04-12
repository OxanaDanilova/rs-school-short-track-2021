/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let result;
  array.reverse().forEach((item, index) => {
    if (item === value) {
      result = array.length - 1 - index;
      array.splice(index, array.length - 1 - index);
    }
    return result;
  });
  return result;
}

module.exports = findIndex;
