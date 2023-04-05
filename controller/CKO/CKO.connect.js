const { Checkout } = require('checkout-sdk-node');
const cko = new Checkout(process.env.Checkout_KEY, { client: process.env.Checkout_CLIENTID, scope: ['gateway', 'balances', 'disputes', 'flow', 'vault:instruments', 'vault', 'transfers', 'sessions:app', 'sessions:browser', 'risk'], environment: process.env.Checkout_ENV, })

module.exports = cko