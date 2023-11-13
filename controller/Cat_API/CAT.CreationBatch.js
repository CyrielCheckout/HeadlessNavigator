const CATEntity = require('./CAT.Entity');
const CATProcessingChannel = require('./CAT.ProcessingChannel');

async function Createconf(body) {
  console.log("Entity to create :", body.Entity.length)
  for (let i = 0; i < body.Entity.length; i++) {
    try {
      //Create Entity
      EntityResult = await CATEntity.CreateEntity(body.Bearer, body.ClientId, body.Entity[i].EntityName);
      EntityID = EntityResult.body.id
      //GetVaultID
      try {
        GetVaultId = await CATEntity.GetEntityDetails(body.Bearer, EntityResult.body.id);
        VaultID = GetVaultId.body.services[1].key;
      }
      catch (err) {
        console.log(err.response.status);
        console.log(err.response.data);
      }
    }
    catch (err) {
      console.log(err.response.status);
      console.log(err.response.data);
    }
    console.log("Nombre de processing channels pour l'entité", EntityID, " :", body.Entity[i].Processing_channel.length);
    for (let e = 0; e < body.Entity[i].Processing_channel.length; e++) {
      try {
        ProcessingChannelResult = await CATProcessingChannel.CreateProcessingChannel(body.Bearer, body.ClientId, EntityID, body.Entity[i].Processing_channel[e].ProcessingChannelName, VaultID)
        ProcessingChannelID = ProcessingChannelResult.body.id
        console.log("Processing channel crée :",ProcessingChannelID)
      }
      catch (err) {
        console.log(err.response.status);
        console.log(err.response.data);
      }

      //Get Available processing channel for Session conf 
      console.log("Create processing channel for Session")
      try {
        AvailableProcessingChannelSession = await CATProcessingChannel.Get_Processing_channel_Session(body.Bearer, EntityID)
        AvailableProcessingChannelSessionID = AvailableProcessingChannelSession.body._embedded.processing_channels[0].id
       // console.log("Get available processing channel :",AvailableProcessingChannelSessionID)
        //Create Session channel
        try {
          CreateSessionProcessingChannel = await CATProcessingChannel.Create_Session_Processing_Channels(body.Bearer,EntityID, ProcessingChannelID,VaultID);
          console.log("Create Session processing channel ")
        }
        catch (err) {
          console.log(err)
        }
      }
      catch (err) {
        console.log(err.response.status);
        console.log(err.response.data);
      }

      //Configure Visa
      if (body.Entity[i].Processing_channel[e].PaymentMethod.includes('VISA')) {
        console.log("Create VISA")
        try {
          //Create Manual processor
          console.log("Manual processor VISA")
          CreateProcessingProfile = await CATProcessingChannel.Create_Manual_processor_Visa(body.Bearer, ProcessingChannelID, body.Entity[i].Processing_channel[e].ProcessingChannelName)
          PPVisa = CreateProcessingProfile.body.id
        }
        catch (err) {
          console.log(err)
        }
        try {
          //Create Session processor Profile
          console.log("Create Session processor VISA")
          CreateSessionProcessor = await CATProcessingChannel.Create_Session_processor_Visa(body.Bearer, ProcessingChannelID, body.Entity[i].Processing_channel[e].ProcessingChannelName,PPVisa)
        }
        catch (err) {
          console.log(err)
        }
      }

      //Configure Mastercard
      console.log("Create Mastercard")
      if (body.Entity[i].Processing_channel[e].PaymentMethod.includes('MASTERCARD')) {
        try {
          //Create Manual processor
          console.log("Create Manual processor Mastercard")
          CreateProcessingProfile = await CATProcessingChannel.Create_Manual_processor_Mastercard(body.Bearer,ProcessingChannelID, body.Entity[i].Processing_channel[e].ProcessingChannelName)
          PPMastercard = CreateProcessingProfile.body.id
        }
        catch (err) {
          console.log(err)
        }
        try {
          //Create Session processor Profile
          console.log("Create Session processor Profile Mastercard")
          CreateSessionProcessor = await CATProcessingChannel.Create_Session_processor_Mastercard(body.Bearer, ProcessingChannelID, body.Entity[i].Processing_channel[e].ProcessingChannelName,PPMastercard)
        }
        catch (err) {
          console.log(err)
        }
      }

      //Configure Bancontact
      console.log("Create Bancontact")
      if (body.Entity[i].Processing_channel[e].PaymentMethod.includes('BANCONTACT')) {
        try {
          //Create Processing Profile
          console.log("Create Processing Profile Bancontact")
          CreateProcessingProfileBancontact = await CATProcessingChannel.Create_Processing_profile_Bancontact(body.Bearer, EntityID, body.Entity[i].Processing_channel[e].ProcessingChannelName)
          PPBancontact = CreateProcessingProfileBancontact.body.id
        }
        catch (err) {
          console.log(err)
        }
        try {
          //Create processor Profile
          console.log("Create processor Profile Bancontact")
          CreateBancontactProcessor = await CATProcessingChannel.Create_processing_processor_Bancontact(body.Bearer, ProcessingChannelID, PPBancontact)
          PrBancontact = CreateBancontactProcessor.body.id
        }
        catch (err) {
          console.log(err)
        }
      }

      //Configure Ideal
      console.log("Create Ideal")
      if (body.Entity[i].Processing_channel[e].PaymentMethod.includes('IDEAL')) {
        try {
          //Create Processing Profile
          console.log("Create Processing Profile Ideal")
          CreateProcessingProfileIdeal = await CATProcessingChannel.Create_Processing_profile_Ideal(body.Bearer, EntityID, body.Entity[i].Processing_channel[e].ProcessingChannelName)
          PPIdeal = CreateProcessingProfileIdeal.body.id
        }
        catch (err) {
          console.log(err)
        }
        try {
          //Create processor Profile
          console.log("Create processor Profile Ideal")
          CreateIdealProcessor = await CATProcessingChannel.Create_processing_processor_Ideal(body.Bearer, ProcessingChannelID, PPIdeal)
          PrIdeal = CreateIdealProcessor.body.id
        }
        catch (err) {
          console.log(err.response.data);
        }
      }

      //Configure Cartes_Bancaires
      console.log("Create CB")
      if (body.Entity[i].Processing_channel[e].PaymentMethod.includes('CB')) {
        try {
          //Create Processing Profile
          console.log("Create Processing Profile CB")
          CreateProcessingProfile = await CATProcessingChannel.Create_Processing_profile_CB(body.Bearer, EntityID, body.Entity[i].Processing_channel[e].ProcessingChannelName)
          PPCb = CreateProcessingProfile.body.id
          console.log("PPCB created:",PPCb)
        }
        catch (err) {
          console.log(err)
        }
        try {
          //Create processor Profile
          console.log("Create processor Profile CB")
          CreateProcessor = await CATProcessingChannel.Create_processing_processor_CB(body.Bearer, ProcessingChannelID, PPCb)
          PrCb = CreateProcessor.body.id
          console.log("PrCb created:",PrCb)
        }
        catch (err) {
          console.log(err)
        }
        try {
          console.log("Create Session processor Profile CB")
          //Create Session processor Profile
          CreateSessionProcessor = await CATProcessingChannel.Create_Session_processor_CB(body.Bearer, ProcessingChannelID, PPCb,PrCb)
        }
        catch (err) {
          console.log(err)
        }
      }
    }
  }
}

module.exports = {
  Createconf
}