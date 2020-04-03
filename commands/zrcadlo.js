const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
  if(args[0] == '1') {
      message.channel.send("```Tohle zrcadlo je křivě pověšené. Tvůj perfekcionalismus to tak nemůže nechat. Když zrcadlo upravíš, spadne ti do dlaně co…? Kulička!```")
  }else if(args[0] == '2') {
      message.channel.send("```V zrcadle se něco mihlo, když se zadíváš o něco blíž tak uvidíš…………SEBE!```")
  }else if(args[0] == '3') {
    message.channel.send("```Co to v tom zrcadle je…? Podívej se blíž…a ještě blíž… a ještě blíž a….Uááááááááááááá! Něco ze zrcadla vydalo děsivý jekot, který naplnil celou koupelnu.```")
  }else if(args[0] == '4') {
      message.channel.send("```Procházíš kolem zrcadla a máš pocit, že si zaregistroval/a nějaký pohyb, vrátíš se a chceš to prozkoumat. A zjistíš, že jediné co se hýbalo, byl pavouček velký asi jako dlaň, který utekl do třetí kabinky.```")
  }else if(args[0] == '5') {
      message.channel.send("```Kromě krvavého otisku dlaně na zrcadle tu není nic zajímavého.```")
  }else if(!args[0]) {
      message.channel.send("``-zrcadlo 1|2|3|4|5``")
  }
}

module.exports.help = {
    name: "zrcadlo" 
}