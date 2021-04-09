/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const sumArr = Array(matrix[0].length);
  sumArr.fill(0);
  matrix.forEach((item) => {
    item.forEach((el, index) => {
      if (typeof sumArr[index] === 'number') {
        if (el !== 0) {
          sumArr[index] += el;
        } else {
          sumArr[index] = String(sumArr[index]);
        }
      }
    });
  });
  const result = sumArr.reduce((a, b) => +a + +b);
  return +result;
}

module.exports = getMatrixElementsSum;
