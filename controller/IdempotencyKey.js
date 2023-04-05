
function IdempotencyKey() {
    var number=Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
    var IdempotencyKey = 'CKO_'+number;
    return IdempotencyKey;
}
module.exports = {
    IdempotencyKey
};