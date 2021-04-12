/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let current = arr[0];
  let counter = 0;
  const result = [];
  for (let i = 0; i < str.length; i += 1) {
    if (arr[i] === current) {
      counter += 1;
      if (arr[i] !== arr[i + 1] || !arr[i + 1]) {
        result.push(counter + current);
      }
    } else {
      current = arr[i];
      counter = 1;
      if (arr[i] !== arr[i + 1] || !arr[i + 1]) {
        result.push(counter + current);
      }
    }
  }
  const myString = result.join('');

  return myString.replace(/1/g, '');
}

module.exports = encodeLine;
