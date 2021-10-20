const isValid = (s) => {
    let stack = [];
    const hashMap = { '(': ')', '{': '}', '[': ']' };
    for (let i = 0; i < s.length; i++) {
        let char = s[i]

        if (hashMap[char]) {
            stack.push(char)
        } else if (hashMap[stack.pop()] !== char) {
            return false
        }
    }
    return stack.length === 0;
};

module.exports = isValid;
