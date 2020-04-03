const Discord = require("discord.js"); 


module.exports.run = async (bot, message, args) => { 

  

  if(args[0] == '1') { 

      message.channel.send("```Dávkovač mýdla je prázdný.```") 

  }else if(args[0] == '2') { 

      message.channel.send("```Z celé odporné koupelny máš nutkání si umýt ruce. Dávkovač ale nespolupracuje, přestože je těžký dost. Když odšroubuješ vršek, zjistíš že je plný zeleného slizu. Ale počkat, něco v něm je. Vyliješ to do umyvadla a ze slizu můžeš vytáhnout kuličku!```") 

  }else if(args[0] == '3') { 

    message.channel.send("```Něco v tom dávkovači je. Prozkoumáš to zevnitř a zjistíš, že se jedná o smotek jakýchsi chlupů. ```") 

  }else if(!args[0]) { 

      message.channel.send("``-mydlo 1|2|3``")
      .then(m => m.delete(10000)); 

  } 

} 

 
 

module.exports.help = { 

    name: "mydlo"  

} 