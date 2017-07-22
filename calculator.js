module.exports.calculate = function(v1, v2, op, cb) {
    switch(op) {
        case '+': cb(null, v1 + v2); break;
        case '-': cb(null, v1 - v2); break;
        case '*': cb(null, v1 * v2); break;
        case '/': cb(null, v1 / v2); break;
        default: cb(new Error("Invalid operator"));
    }
};