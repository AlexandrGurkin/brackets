module.exports = function check(str, bracketsConfig) {
    let brackets = new Map(bracketsConfig);
    let openBrackets = [];
    for (let i = 0; i < str.length; ++i){
        if (isBracketsPair(brackets, str[i], openBrackets[0])){
            openBrackets.shift();
        } else {
            openBrackets.unshift(str[i]);
        }
    }
    return openBrackets.length === 0;
}

function isBracketsPair(map, close, open) {
    return close === map.get(open)
}

