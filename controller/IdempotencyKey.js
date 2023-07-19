
function IdempotencyKey() {
    var number=Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
    var IdempotencyKey = 'CKO_'+number;
    return IdempotencyKey;
}
function delay(ms) {
    const date = Date.now();
    let currentDate = null;
 
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}
module.exports = {
    IdempotencyKey,
    delay
};