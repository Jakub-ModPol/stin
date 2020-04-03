const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(args[0] == '1') {
        message.channel.send("```Když položíš panenku vedle a odklopíš prkýnko, zjistíš že v záchodě plave ručička panenky.```")
    }else if(args[0] == '2') {
        message.channel.send("```Za wc je schovaný medvídek, na jehož tlamičku někdo přilepil zvířecí zuby. Proč by to někdo dělal?```")
    }else if(args[0] == '3') {
        message.channel.send("```Ze záchodové mísy lezou ven další a další pavouci…!```")
    }else if(args[0] == '4') {
        message.channel.send("```Co je na tomto wc zůstane tajemstvím, neboť kabinka je zamčená. Pokud se pokusíš se do ni násilím dostat, nejspíš tvá kolej přijde o body.```")
    }else if(args[0] == '5') {
        message.channel.send("```Fuj! Něco tam plave! Další oko? Ne to je prostě jen kulička. Teď je otázka kdo má odvahu do toho hrábnout.```")
    }else if(!args[0]) {
        message.channel.send("``-wc 1|2|3|4|5``")
        .then(m => m.delete(10000));
    }
}
module.exports.help = {
    name: "wc" 
}