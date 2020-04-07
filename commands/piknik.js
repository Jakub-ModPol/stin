const Discord = require('discord.js');
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if(message.deletable) message.delete();

    let stinohra = "https://media.discordapp.net/attachments/617458206125588483/683811722829889546/StinohraLogo.png?width=677&height=677";

    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(stinohra)
        .setTitle(`-=- STUDENTSKÝ PIKNIK -=-`)
        .addField(`-kostky`, 'Jedna kostka, druhá kostka. Vrhni a počítej, tahle hra je o štěstí, které v rukou máš.')
        .addField(`-jenga`, 'Tahle hra je rozhodně pro vyvtrvalé. Při vytahování hranolků z věže, dávej pozor aby se věž nezbortila.')
        .addField(`-skorapky`, 'Skořápky jsou velmi zábavná hra. Stačí jen pozorně sledovat skořápku, pod kterou je kulička. Dokážeš to?')
        .addField(`Potřebuješ pomoc?`, 'Pro základní info o všech hrách, napiš \n ``-piknik kostky`` | ``-piknik jenga`` | ``-piknik skorapky``. Pokud si i tak nebudeš vědět rady, napiš <@267391101432889345>')
        .addField(`7.4.2020`, '<@696856804067508244>')
        
        if(args[0] == 'kostky') {
            message.member.send("Napiš příkaz kostky ``-kostky``\nCo jsou kostky?\n> Kostky se v tomto případě hrají se dvěma kostkami. Úkolem každého zúčastněného hráče, je hodit co nejvyšší součet těchto dvou čísel, které jsou na kostkách.\nhttps://bit.ly/2V6Xuuj")
        }
        else if(args[0] == 'jenga') {
            message.member.send("Pro hraní jengy napiš ``-jenga``\nCo je jenga?\n> Jenga je hra s věží, která je postavená z dřevěných hranolků. Úkolem hráče je vytáhnout hranolek z věže tak, aby věž nespadla. Pokud se tak stane, hráč vypadává. https://bit.ly/2Rhlha5")
        }
        else if(args[0] == 'skorapky') {
            message.member.send("Pro hraní skořápek napiš ``-skorapky``\nCo jsou skořápky?\n> Skořápky trénují tvoji pozornost. Na začátku se ti kulička úkáže, po chvíli se zakryje skořápkou a začne cestovat. Tvým úkolem je najít skořápku, pod kterou se kulička skrývá. Měj oči na stopkách! https://bit.ly/2JJRFOj")
        }
        else if(args[0] == 'Virgil') {
        message.channel.send(embed)
        }
        else if(!args[0]) {
            message.member.send(embed)
        }
        
};
    
module.exports.help = {
    name: 'piknik',
    aliases: []
};