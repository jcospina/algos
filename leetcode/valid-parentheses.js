/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const isClosingTag = (tag, closeTag) => {
        if (tag === '(' && closeTag === ')') {
            return true;
        }
        if (tag === '[' && closeTag === ']') {
            return true;
        }
        if (tag === '{' && closeTag === '}') {
            return true;
        }
        return false;
    }
    const stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
        if (isClosingTag(stack[stack.length-1], s[i])) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.length === 0;    
};

console.log(isValid('({{[{})]}})'));