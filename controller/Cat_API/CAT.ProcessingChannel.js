const axios = require('axios');
const waitfor = require('../IdempotencyKey');
const baseURL = "https://client-admin.cko-sbox.ckotech.co/";

async function GetAllProcessingChannels(bearer, EntityId) {
  GetAllProcessingChannelsfunc = await axios({
    method: 'get',
    url: baseURL + 'api/entities/' + EntityId + '/processing-channels?limit=25&skip=0&partialName=',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return GetAllProcessingChannelsfunc;
}

async function CreateProcessingChannel(bearer, ClientId, EntityId, ProcessingChannelName, VaultID) {
  CreateProcessingChannelfunc = await axios({
    method: 'post',
    url: baseURL + 'api/entities/' + EntityId + '/processing-channels',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    },
    data: {
      "name": ProcessingChannelName,
      "success_redirect_url": "",
      "fail_redirect_url": "",
      "business_model_type": "merchant",
      "services": [
        {
          "type": "vault",
          "key": VaultID
        },
        {
          "type": "prism",
          "key": ClientId + "|" + EntityId
        }
      ]
    }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return CreateProcessingChannelfunc;
}
async function Create_Processing_profile_Bancontact(bearer, EntityId, ProcessingChannelName) {
  Create_Processing_profile_Bancontact_func = await axios({
    method: 'post',
    url: baseURL + 'api/entities/' + EntityId + '/processing-profiles/v2',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    },
    data: {
      "processor_key": "cko-apm",
      "acquirer_key": "bancontact_apm_fr",
      "processing_type": "payin",
      "processing_profile_name": ProcessingChannelName+"_Bancontact",
      "schemes": [
        "bancontact"
      ],
      "currencies": [
        "EUR"
      ],
      "status": "Active",
      "auto_generate_card_acceptor_identification_code": true,
      "business_settings": [
        {
          "card_acceptor_identification_code": "",
          "merchant_category_code": "0742",
          "force_caid_generation": false
        }
      ],
      "custom_settings": {
        "contract_id": "CHECKOUTTESTCONTRACT"
      }
    }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return Create_Processing_profile_Bancontact_func;
}
async function Create_Processing_profile_Ideal(bearer, EntityId, ProcessingChannelName) {
  Create_Processing_profile_Ideal_func = await axios({
    method: 'post',
    url: baseURL + 'api/entities/' + EntityId + '/processing-profiles/v2',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    },
    data: {
      "processor_key": "cko-apm",
      "acquirer_key": "ideal_apm_fr",
      "processing_type": "payin",
      "processing_profile_name": ProcessingChannelName+"_Ideal",
      "schemes": [
        "ideal"
      ],
      "currencies": [
        "EUR"
      ],
      "status": "Active",
      "custom_settings": {
        "sub_id": "0",
        "trade_name": ProcessingChannelName,
        "ideal_merchant_id": "005171325"
      }
    }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return Create_Processing_profile_Ideal_func;
}
async function Create_Processing_profile_Sepa(bearer, ClientId, EntityId, ProcessingChannelName, VaultID) {
  return Create_Processing_profile_Sepa_func;
}
async function Create_Processing_profile_CB(bearer, EntityId, ProcessingChannelName) {
  Create_Processing_profile_CB_func=await axios({
    method: 'post',
    url: baseURL + 'api/entities/' + EntityId + '/processing-profiles/v2',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    },
    data: {
      "processor_key": "cko-cb",
      "acquirer_key": "cko_cb_fr",
      "processing_type": "payin",
      "processing_profile_name": ProcessingChannelName+"_Cartes_Bancaires",
      "acquiring_bin": "51848917208",
      "schemes": [
          "cartes_bancaires"
      ],
      "currencies": [
          "EUR"
      ],
      "business_model": "MoR",
      "is_gateway_only": false,
      "auto_generate_card_acceptor_identification_code": true,
      "business_settings": [
          {
              "card_acceptor_identification_code": "",
              "merchant_category_code": "0742",
              "force_caid_generation": false
          }
      ],
      "aggregator_name": "",
      "payfac_settings": {
          "payfac_id": ""
      },
      "card_acceptor_terminal_id": "CKO",
      "card_acceptor_trade_name": ProcessingChannelName,
      "card_acceptor_legal_name": ProcessingChannelName,
      "custom_settings": {
          "card_acceptor_street_number": "11 rue du test",
          "is_highrisk": false,
          "siret": "12345678901234",
          "authorization_validity_period": "7"
      },
      "card_acceptor_street": "rue du test",
      "card_acceptor_city": "Paris",
      "card_acceptor_postal_code": "75000",
      "card_acceptor_country_code": "FRA",
      "card_acceptor_region_code": "Paris",
      "card_acceptor_url": "",
      "card_acceptor_email": "",
      "card_acceptor_phone": "0606060606",
      "is_dynamic_acceptor": false,
      "status": "Active",
      "sca_exemptions_settings": {
          "enable_transaction_risk_analysis": true,
          "enable_low_value": true,
          "enable_secure_corporate_payment": false,
          "enable_trusted_listing": false,
          "enable_3ds_outage": false,
          "enable_sca_delegation": false
      }
  }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return Create_Processing_profile_CB_func;
}
async function Create_Manual_processor_Visa(bearer, ProcessingChannelId, ProcessingChannelName) {
  Create_Manual_processor_Visa_func=await axios({
    method: 'post',
    url: baseURL + 'api/processing-channels/' + ProcessingChannelId + '/processors',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    },
    data: {
      "name": "Visa",
      "acquirer_id": "cko-visa",
      "scheme": "VISA",
      "processing_currencies": [
          "AED",
          "AFN",
          "ALL",
          "AMD",
          "ANG",
          "AOA",
          "ARS",
          "AUD",
          "AWG",
          "AZN",
          "BAM",
          "BBD",
          "BDT",
          "BGN",
          "BHD",
          "BIF",
          "BMD",
          "BND",
          "BOB",
          "BRL",
          "BSD",
          "BTN",
          "BWP",
          "BYN",
          "BZD",
          "CAD",
          "CDF",
          "CHF",
          "CLF",
          "CLP",
          "CNY",
          "COP",
          "CRC",
          "CUP",
          "CVE",
          "CZK",
          "DJF",
          "DKK",
          "DOP",
          "DZD",
          "EEK",
          "EGP",
          "ERN",
          "ETB",
          "EUR",
          "FJD",
          "FKP",
          "GBP",
          "GEL",
          "GHS",
          "GIP",
          "GMD",
          "GNF",
          "GTQ",
          "GYD",
          "HKD",
          "HNL",
          "HRK",
          "HTG",
          "HUF",
          "IDR",
          "ILS",
          "INR",
          "IQD",
          "IRR",
          "ISK",
          "JMD",
          "JOD",
          "JPY",
          "KES",
          "KGS",
          "KHR",
          "KMF",
          "KPW",
          "KRW",
          "KWD",
          "KYD",
          "KZT",
          "LAK",
          "LBP",
          "LKR",
          "LRD",
          "LSL",
          "LTL",
          "LYD",
          "MAD",
          "MDL",
          "MGA",
          "MKD",
          "MMK",
          "MNT",
          "MOP",
          "MRU",
          "MUR",
          "MVR",
          "MWK",
          "MXN",
          "MYR",
          "MZN",
          "NAD",
          "NGN",
          "NIO",
          "NOK",
          "NPR",
          "NZD",
          "OMR",
          "PAB",
          "PEN",
          "PGK",
          "PHP",
          "PKR",
          "PLN",
          "PYG",
          "QAR",
          "RON",
          "RSD",
          "RUB",
          "RWF",
          "SAR",
          "SBD",
          "SCR",
          "SDG",
          "SEK",
          "SGD",
          "SHP",
          "SLL",
          "SOS",
          "SRD",
          "STN",
          "SVC",
          "SYP",
          "SZL",
          "THB",
          "TJS",
          "TMT",
          "TND",
          "TOP",
          "TRY",
          "TTD",
          "TWD",
          "TZS",
          "UAH",
          "UGX",
          "USD",
          "UYU",
          "UZS",
          "VES",
          "VND",
          "VUV",
          "WST",
          "XAF",
          "XCD",
          "XOF",
          "XPF",
          "YER",
          "ZAR",
          "ZMK",
          "ZMW",
          "ZWL"
      ],
      "merchant_category_code": "0742",
      "billing_information": {
          "card_acceptor_id": "",
          "force_merchant_generation": false,
          "acceptor_name": ProcessingChannelName,
          "acceptor_street_address": "11 rue du test",
          "acceptor_city": "Paris",
          "acceptor_postcode": "75000",
          "acceptor_country_iso3_code": "FRA",
          "acceptor_region": "",
          "acceptor_phone": "0606060606",
          "has_dynamic_descriptor": false,
          "dynamic_descriptor_prefix": ""
      },
      "mode": "complete_processing",
      "authorization_key": "",
      "type_of_bin": "predefined",
      "acquirer_settings": {
          "Bin": "429426"
      }
  }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return Create_Manual_processor_Visa_func;
}
async function Create_Manual_processor_Mastercard(bearer, ProcessingChannelId, ProcessingChannelName) {
  Create_Manual_processor_Mastercard_func=await axios({
    method: 'post',
    url: baseURL + 'api/processing-channels/' + ProcessingChannelId + '/processors',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    },
    data: {
      "name": "Mastercard",
      "acquirer_id": "cko-mastercard",
      "scheme": "MASTERCARD",
      "processing_currencies": [
          "AED",
          "AFN",
          "ALL",
          "AMD",
          "ANG",
          "AOA",
          "ARS",
          "AUD",
          "AWG",
          "AZN",
          "BAM",
          "BBD",
          "BDT",
          "BGN",
          "BHD",
          "BIF",
          "BMD",
          "BND",
          "BOB",
          "BRL",
          "BSD",
          "BTN",
          "BWP",
          "BYN",
          "BZD",
          "CAD",
          "CDF",
          "CHF",
          "CLF",
          "CLP",
          "CNY",
          "COP",
          "CRC",
          "CUP",
          "CVE",
          "CZK",
          "DJF",
          "DKK",
          "DOP",
          "DZD",
          "EEK",
          "EGP",
          "ERN",
          "ETB",
          "EUR",
          "FJD",
          "FKP",
          "GBP",
          "GEL",
          "GHS",
          "GIP",
          "GMD",
          "GNF",
          "GTQ",
          "GYD",
          "HKD",
          "HNL",
          "HRK",
          "HTG",
          "HUF",
          "IDR",
          "ILS",
          "INR",
          "IQD",
          "IRR",
          "ISK",
          "JMD",
          "JOD",
          "JPY",
          "KES",
          "KGS",
          "KHR",
          "KMF",
          "KPW",
          "KRW",
          "KWD",
          "KYD",
          "KZT",
          "LAK",
          "LBP",
          "LKR",
          "LRD",
          "LSL",
          "LTL",
          "LYD",
          "MAD",
          "MDL",
          "MGA",
          "MKD",
          "MMK",
          "MNT",
          "MOP",
          "MRU",
          "MUR",
          "MVR",
          "MWK",
          "MXN",
          "MYR",
          "MZN",
          "NAD",
          "NGN",
          "NIO",
          "NOK",
          "NPR",
          "NZD",
          "OMR",
          "PAB",
          "PEN",
          "PGK",
          "PHP",
          "PKR",
          "PLN",
          "PYG",
          "QAR",
          "RON",
          "RSD",
          "RUB",
          "RWF",
          "SAR",
          "SBD",
          "SCR",
          "SDG",
          "SEK",
          "SGD",
          "SHP",
          "SLL",
          "SOS",
          "SRD",
          "STN",
          "SVC",
          "SYP",
          "SZL",
          "THB",
          "TJS",
          "TMT",
          "TND",
          "TOP",
          "TRY",
          "TTD",
          "TWD",
          "TZS",
          "UAH",
          "UGX",
          "USD",
          "UYU",
          "UZS",
          "VES",
          "VND",
          "VUV",
          "WST",
          "XAF",
          "XCD",
          "XOF",
          "XPF",
          "YER",
          "ZAR",
          "ZMK",
          "ZMW",
          "ZWL"
      ],
      "merchant_category_code": "0742",
      "billing_information": {
          "card_acceptor_id": "",
          "force_merchant_generation": false,
          "acceptor_name": ProcessingChannelName,
          "acceptor_street_address": "11 rue du test",
          "acceptor_city": "Paris",
          "acceptor_postcode": "75000",
          "acceptor_country_iso3_code": "FRA",
          "acceptor_region": "",
          "acceptor_phone": "0606060606",
          "has_dynamic_descriptor": false,
          "dynamic_descriptor_prefix": ""
      },
      "mode": "complete_processing",
      "authorization_key": "",
      "type_of_bin": "predefined",
      "acquirer_settings": {
          "Bin": "270514"
      }
  }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return Create_Manual_processor_Mastercard_func;
}
async function Create_processing_processor_Bancontact(bearer, ProcessingChannelId, PPBancontact) {
  Create_processing_processor_Bancontact_func = await axios({
    method: 'post',
    url: baseURL + 'api/processing-channels/' + ProcessingChannelId + '/processors',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    },
    data: {
      "profile_id": PPBancontact,
      "processor_key": "cko-apm",
      "name": "Bancontact",
      "acquirer_id": "bancontact_apm_fr",
      "scheme": "bancontact",
      "currencies": [
        "EUR"
      ],
      "merchant_category_code": "0742",
      "card_acceptor_identification_code": "532858",
      "has_dynamic_descriptor": false,
      "dynamic_descriptor_prefix": "",
      "mode": "complete_processing"
    }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return Create_processing_processor_Bancontact_func;
}
async function Create_processing_processor_Ideal(bearer, ProcessingChannelId, PPIdeal) {
  Create_processing_processor_Ideal_func = await axios({
    method: 'post',
    url: baseURL + 'api/processing-channels/' + ProcessingChannelId + '/processors',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    },
    data: {
      "profile_id": PPIdeal,
      "processor_key": "cko-apm",
      "name": "Ideal",
      "acquirer_id": "ideal_apm_fr",
      "scheme": "ideal",
      "currencies": [
        "EUR"
      ],
      "merchant_category_code": "",
      "card_acceptor_identification_code": "",
      "has_dynamic_descriptor": false,
      "dynamic_descriptor_prefix": "",
      "mode": "complete_processing"
    }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return Create_processing_processor_Ideal_func;
}
async function Create_processing_processor_CB(bearer, ProcessingChannelId, PPCartes_Bancaires) {
  Create_processing_processor_CB_func = await axios({
    method: 'post',
    url: baseURL + 'api/processing-channels/' + ProcessingChannelId + '/processors',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    },
    data: {
      "profile_id": PPCartes_Bancaires,
      "processor_key": "cko-cb",
      "name": "Cartes_Bancaires",
      "acquirer_id": "cko_cb_fr",
      "scheme": "cartes_bancaires",
      "currencies": [
        "EUR"
      ],
      "merchant_category_code": "0742",
      "card_acceptor_identification_code": "532858",
      "acceptor_name": "CKO_CB",
      "acceptor_city": "Aix-En-Provence",
      "acceptor_country_iso3_code": "FRA",
      "has_dynamic_descriptor": false,
      "dynamic_descriptor_prefix": "",
      "mode": "complete_processing"
    }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return Create_processing_processor_CB_func;
}
async function Create_processing_processor_Sepa(bearer, ClientId, EntityId, ProcessingChannelName, VaultID) {
  return Create_processing_processor_Sepa_func;
}
async function Create_Currency_Account(bearer, ClientId, EntityId, ProcessingChannelName, VaultID) {
  return Create_Currency_Account_func;
}
async function Create_Routing_Rules_Payment(bearer, ClientId, EntityId, ProcessingChannelName, VaultID) {
  return Create_Routing_Rules_Payment_func;
}
async function Create_Routing_Rules_Payout(bearer, ClientId, EntityId, ProcessingChannelName, VaultID) {
  return Create_Routing_Rules_Payout_func;
}
async function Create_Payout_Schedules(bearer, ClientId, EntityId, ProcessingChannelName, VaultID) {
  return Create_Payout_Schedules_func;
}
async function Get_Processing_channel_Session(bearer, EntityId) {
  Get_Processing_channel_Session_func = await axios({
    method: 'get',
    url: baseURL + 'api/entities/' + EntityId + '/processing-channels?limit=25&skip=0&partialName=',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return Get_Processing_channel_Session_func;
}
async function Create_Session_Processing_Channels(bearer,EntityId, AvailableProcessingChannels, vaultID) {
  Create_Session_Processing_Channels_func = await axios({
    method: 'post',
    url: baseURL + 'api/entities/'+EntityId+'/sessions-processing-channels',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    },
    data: {
      "gateway_processing_channel_id": AvailableProcessingChannels,
      "services": [
          {
              "label": "Vault",
              "value": "vault",
              "key": vaultID
          }
      ]
  }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return Create_Session_Processing_Channels_func;
}
async function Create_Session_processor_Visa(bearer, AvailableProcessingChannels, ProcessingChannelName, PrVisa) {
  Create_Session_processor_Visa_func = await axios({
    method: 'post',
    url: baseURL + 'api/sessions-processing-channels/'+AvailableProcessingChannels+'/sessions-processors',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    },
    data: {
      "gateway_processor_id": PrVisa,
      "processorType": "existing",
      "binType": "predefined",
      "acquirer_id": "cko-visa",
      "scheme": "VISA",
      "merchant_category_code": "0742",
      "billing_information": {
          //"card_acceptor_id": "536068",
          "force_merchant_generation": false,
          "acceptor_name": ProcessingChannelName,
          "acceptor_country_iso3_code": "FRA",
          "has_dynamic_descriptor": false
      },
      "mode": "complete_processing",
      "acquirer_country_iso3_code": "FRA",
      "bin": "429426",
      "protocol_versions": [
          "2"
      ]
  }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return Create_Session_processor_Visa_func;
}
async function Create_Session_processor_Mastercard(bearer, AvailableProcessingChannels, ProcessingChannelName, PrMC) {
  Create_Session_processor_Mastercard_func=await axios({
    method: 'post',
    url: baseURL + 'api/sessions-processing-channels/'+AvailableProcessingChannels+'/sessions-processors',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    },
    data: {
      "gateway_processor_id": PrMC,
      "processorType": "existing",
      "binType": "predefined",
      "acquirer_id": "cko-mastercard",
      "scheme": "MASTERCARD",
      "merchant_category_code": "0742",
      "billing_information": {
          //"card_acceptor_id": "536068",
          "force_merchant_generation": false,
          "acceptor_name": ProcessingChannelName,
          "acceptor_country_iso3_code": "FRA",
          "has_dynamic_descriptor": false
      },
      "mode": "complete_processing",
      "acquirer_country_iso3_code": "FRA",
      "bin": "270514",
      "protocol_versions": [
          "2"
      ]
  }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return Create_Session_processor_Mastercard_func;
}
async function Create_Session_processor_CB(bearer, ProcessingChannelId, PPCartes_Bancaires, PrCB) {
  waitfor.delay(10000);
  console.log ("PP receveid:",PPCartes_Bancaires)
  console.log ("PR receveid:",PrCB)
  Create_Session_processor_CB_func=await axios({
    method: 'post',
    url: baseURL + 'api/session-processing-channels/'+ProcessingChannelId+'/session-profile-processors',
    headers: {
      'Authorization': bearer,
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'cko-entity-id': 'cli_lkuch7kufapeloqe7aba4vferm',
      'sec-ch-ua-mobile': '?0',
      'Content-Type': 'application/json',
      'Accept': "*/*",
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': "macOS",
      "Sec-Fetch-Site": 'same-origin',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "host": 'client-admin.cko-sbox.ckotech.co'
    },
    data: {
      "createType": "existing",
      "gateway_profile_processor_id": PrCB,
      "processing_profile_id": PPCartes_Bancaires,
      "scheme": "CARTES_BANCAIRES",
      "merchant_category_code": "0742",
      "versions": [
          "2"
      ]
  }
  })
    .then(function (response) {
      return { Status: response.status, body: response.data }
    });
    waitfor.delay(1000);
  return Create_Session_processor_CB_func;
}

module.exports = {
  GetAllProcessingChannels,
  CreateProcessingChannel,
  Create_Processing_profile_Bancontact,
  Create_Processing_profile_Ideal,
  Create_Processing_profile_Sepa,
  Create_Processing_profile_CB,
  Create_Manual_processor_Visa,
  Create_Manual_processor_Mastercard,
  Create_processing_processor_Bancontact,
  Create_processing_processor_Ideal,
  Create_processing_processor_CB,
  Create_processing_processor_Sepa,
  Create_Currency_Account,
  Create_Routing_Rules_Payment,
  Create_Routing_Rules_Payout,
  Create_Payout_Schedules,
  Get_Processing_channel_Session,
  Create_Session_Processing_Channels,
  Create_Session_processor_Visa,
  Create_Session_processor_Mastercard,
  Create_Session_processor_CB

}