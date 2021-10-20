function groupAnagrams(strs) {
    let hash = {}
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i]
        const toSort = word.split("").sort().join("")
        if (!hash[toSort]) {
            hash[toSort] = []
        }
        hash[toSort].push(word)
    }

    return Object.values(hash)
}

module.exports = groupAnagrams;

