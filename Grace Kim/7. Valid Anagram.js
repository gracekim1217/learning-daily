/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let count = {};
    
    for (let char of s) {
      if (!(char in count)) {
        count[char] = 0;
      }
      count[char] += 1;
    }
    
    for (let char of t) {
      if (count[char] === undefined) {
        return false;
      } else {
        count[char] -= 1;
      }
    }
    
    for (let char in count) {
      if (count[char] !== 0) {
      return false;
      }
    }
    
    return true;
  };