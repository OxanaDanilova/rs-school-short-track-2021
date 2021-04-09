/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const copy = arr.slice(0,arr.length-1);
  console.log('arr', arr);
  console.log('copy', copy);
  let sortedArr = (String(copy).replace('-1','')).join('').sort(a,b=>a-b);
  console.log(sortedArr);
  arr.forEach((item, index)=>{
    if (item === -1) {
      sortedArr.splice(index, 0, -1);
    }

  });
  console.log('result', sortedArr);
  return sortedArr;

}

module.exports = sortByHeight;
