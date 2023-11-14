const axios = require('axios');
const baseURL = "https://client-admin.cko-sbox.ckotech.co/";

async function GetAllEntity(bearer, ClientId) {
  try{
  GetAllEntityfunc = await axios({
    method: 'get',
    url: baseURL + 'api/clients/' + ClientId + '/entities',
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

  return GetAllEntityfunc;
}catch (err){throw err}
}

async function CreateEntity(bearer, ClientId, EntityName) {
  try{
    CreateEntityfunc = await axios({
    method: 'post',
    url: baseURL + 'api/clients/' + ClientId + '/entities',
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
      "name": EntityName,
      "doing_business_as": EntityName,
      "registered_business_address": {
        "line1": "11 rue du test",
        "line2": "",
        "city": "Paris",
        "postcode": "75000",
        "country_iso3_code": "FRA",
        "state": ""
      },
      "is_principal_same_as_registered": true,
      "is_regulated": false,
      "issuer": {
        "type": ""
      },
      "company_number": "99999999999999",
      "tax_number": "",
      "cko_legal_entity": "cko-sas",
      "service_provider": "None",
      "onboards_sub_entities": false,
      "referrer": false,
      "processing_urls": [],
      "status": "pending"
    }
  })
    .then(function (response) {
      return response
    });

  return CreateEntityfunc;
}catch (err){throw err}
}
async function GetEntityDetails(bearer,EntityId) {
  try{
  GetEntityDetailsfunc = await axios({
    method: 'get',
    url: baseURL + 'api/processing-channels/configuration?entityId=' + EntityId,
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
  })
    .then(function (response) {
      return response
    });
    return GetEntityDetailsfunc;
  }catch (err){throw err}
}

module.exports = {
  GetAllEntity,
  CreateEntity,
  GetEntityDetails
}