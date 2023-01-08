const caesar = function(str, num) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[A-Z]/)) {
            let x = str.codePointAt(i);
            x += num;
            while (x < 65) {
                x += 26;
            }
            while (x > 90) {
                x -= 26;
            }
            res.push(String.fromCharCode(x));
        } else if (str[i].match(/[a-z]/)) {
            let x = str.codePointAt(i);
            x += num;
            while (x < 97) {
                x += 26;
            }
            while (x > 122) {
                x -= 26;
            }
            res.push(String.fromCharCode(x));
        } else res.push(str[i]);
    }
    return res.join('');
};


// Do not edit below this line
module.exports = caesar;
