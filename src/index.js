module.exports = function reverse (n) {
    if (n < 0) n = Math.abs(n);
    let str = n.toString();
    let rev_str = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev_str += str[i];
    }
    return rev_str;  
}
