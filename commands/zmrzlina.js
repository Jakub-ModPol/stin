const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
  if(args[0] == 'cervena') {
      message.channel.send("```Ať už máš dlouhé kadeře, nebo pidivlásky, tvé vlasy i ochlopení náhle dostalo rudou barvu. Zmzlina ale chutná jako mix jahod a malin.```");
  }else if(args[0] == 'zelena') {
      message.channel.send("```Brodil ses žabincem? Tvé nehty na nohou i rukou získaly sytě jedovatě zelenou barvu. Navíc zmrzlina chutná jako wasabi.```")
    }else if(args[0] == 'bila') {
        message.channel.send("```Viděl si ducha? Ty si zblednul! Ale doslova! Tvá kůže je bílá jako stěna. Nicméně zmrzlina má zajímavou příchuť šlehačky.```")
    }else if(args[0] == 'hneda') {
        message.channel.send("```Opravdu ses opovážil vyzkoušet hnědou zmrzlinu? Dobrá zpráva je, že chutná jako mléčná čokoláda, špatná zpráva je, že tvé zuby…zhnědly. Teď ti zářivý úsměv nehrozí.```")
    }else if(args[0] == 'modra') {
        message.channel.send("```Už si někdy slyšel o šmoulové zmrzlině? Tahle zmrzlina chutná jak rozmixovaní a zmasakrovaní šmoulové a dobré to skutečně není, nicméně tvé oči nádherně zmodraly.```")
    }else if(!args[0]) {
        message.channel.send("Vyber si nějaký barvu své zmrzliny: ``cervena || zelena || bila || hneda || modra``\nTak kterou si dáš? :blush:")
       .then(m => m.delete(10000));
    }

};
module.exports.help = {
    name: "zmrzlina" 
}