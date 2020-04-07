const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const logChannel = message.guild.channels.find(c => c.name === "🧭krámek");
    if(message.channel != logChannel) return message.member.send("**Tento příkaz můžeš použít jen v kanálu #🧭krámek**");
 
  if(args[0] == 'cervena') {
      logChannel.send("```Ať už máš dlouhé kadeře, nebo pidivlásky, tvé vlasy i ochlopení náhle dostalo rudou barvu. Zmzlina ale chutná jako mix jahod a malin.```");
  }else if(args[0] == 'zelena') {
      logChannel.send("```Brodil ses žabincem? Tvé nehty na nohou i rukou získaly sytě jedovatě zelenou barvu. Navíc zmrzlina chutná jako wasabi.```")
    }else if(args[0] == 'bila') {
        logChannel.send("```Viděl si ducha? Ty si zblednul! Ale doslova! Tvá kůže je bílá jako stěna. Nicméně zmrzlina má zajímavou příchuť šlehačky.```")
    }else if(args[0] == 'hneda') {
        logChannel.send("```Opravdu ses opovážil vyzkoušet hnědou zmrzlinu? Dobrá zpráva je, že chutná jako mléčná čokoláda, špatná zpráva je, že tvé zuby…zhnědly. Teď ti zářivý úsměv nehrozí.```")
    }else if(args[0] == 'modra') {
        logChannel.send("```Už si někdy slyšel o šmoulové zmrzlině? Tahle zmrzlina chutná jak rozmixovaní a zmasakrovaní šmoulové a dobré to skutečně není, nicméně tvé oči nádherně zmodraly.```")
    }else if(!args[0]) {
        logChannel.send("Vyber si nějaký barvu své zmrzliny: ``cervena || zelena || bila || hneda || modra``\nTak kterou si dáš? :blush:")
       .then(m => m.delete(10000));
    }

};
module.exports.help = {
    name: "zmrzlina" 
}
