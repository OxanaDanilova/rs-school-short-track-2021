/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  const tempArr = [];
  arr.forEach((item, index) => {
    const copy = arr.slice(0, arr.length);
    copy.splice(index, 1);
    tempArr.push(+copy.join(''));
  });

  return tempArr.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
