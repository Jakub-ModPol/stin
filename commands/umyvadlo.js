const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
  if(args[0] == '1') {
      message.channel.send("```V odtoku nejspíš něco bude. Když si vezmeš svítící krystal a podíváš se blíž zjistíš, že je to nejspíš lidský prst. Fuj.```")
  }else if(args[0] == '2') {
      message.channel.send("```Pustíš vodu. Chvilku ji to trvá a pak teče, teče, teče, teče…a najednou kulička!```")
  }else if(args[0] == '3') {
    message.channel.send("```Prohledáš umyvadlo nad, i pod, najdeš nějakou špínu, ale nic dalšího.```")
  }else if(args[0] == '4') {
      message.channel.send("```Fuj, umyvadlo je celé od krve. Bleh. Když pustíš vodu, tak teče další krev. Nebo alespoň červená tekutina.```")
  }else if(args[0] == '5') {
      message.channel.send("```Umyvadlo vypadá docela nevinně. Dokonce je nejčistší ze všech. Zkusíš pustit vodu a z kohoutku vypadne…had?! Uf ne…je to jen hračka, ale dost realistická.```")
  }else if(!args[0]) {
      message.channel.send("``-umyvadlo 1|2|3|4|5``")
      .then(m => m.delete(10000));
  }
}

module.exports.help = {
    name: "umyvadlo" 
}