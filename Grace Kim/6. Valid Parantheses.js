/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //  create hashmap
        const hashMap = { "(": ")", "[": "]", "{": "}"}
    //  define stack 
        const stack = [];
    //  iterate through characters in the string
        for(let ch of s) {
    //      if ch is an opening bracket
            if(hashMap[ch]) {
    //          push the opening bracket to stack
                stack.push(hashMap[ch])
    //      if ch is a closing bracket and top of stack matches
            } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
                stack.pop()
            } else {
    //          return false if ch is a closing bracket and top of the stack doesn't match
                return false
            }
        }
    //  return true if stack is empty
        return stack.length === 0
    };