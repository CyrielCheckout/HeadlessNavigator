const { Checkout } = require('checkout-sdk-node');
const cko = new Checkout(process.env.Checkout_KEY, { client: process.env.Checkout_CLIENTID, scope: ['gateway', 'balances', 'disputes', 'flow', 'vault:instruments', 'vault', 'transfers', 'sessions:app', 'sessions:browser', 'risk','reports'], environment: process.env.Checkout_ENV, })
//const cko = new Checkout(process.env.Checkout_FAPI, { pk: "pk_sbox_4ax4oynjgxigat4ffhp4jbmuwy2", scope: ['gateway', 'balances', 'disputes', 'flow', 'vault:instruments', 'vault', 'transfers', 'sessions:app', 'sessions:browser', 'risk','reports','issung'], environment: process.env.Checkout_ENV, })
console.log("Connection successful to CKO")
module.exports = cko