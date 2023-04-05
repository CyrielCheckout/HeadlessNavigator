
module.exports = {
    orderRef: function () {
        return Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
    },
    orderAmount: function () {
        Amount = Math.floor(Math.random() * 100000) + 1;
        return Amount;
    }
};