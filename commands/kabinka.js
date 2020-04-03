const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(args[0] == '1') {
        message.channel.send("```Podíváš se do kabinky a zjistíš, že kabinka kouká na tebe. Aspoň jedním očkem. Na wc je postavená porcelánová panenka, která šilhá a nemá jednu ručičku.```")
    }else if(args[0] == '2') {
        message.channel.send("```Kabinka až na pár krvavých skvrn vypadá docela normálně, ale co je to za tím wc?```")
    }else if(args[0] == '3') {
        message.channel.send("```Z jakéhosi důvodu si zde udělali hnízdo fakt velicí pavouci. Raději tu kabinku rychle zavři!!!```")
    }else if(args[0] == '4') {
        message.channel.send("```Tato kabinka je zamčená. A zamčená zůstane, pokud nechceš ničit školní majetek.```")
    }else if(args[0] == '5') {
        message.channel.send("```Na zdi kabinky je rudým nápis „POMOC!“ A záchodové prkýnko na záchodě je sklopené.```")
    }else if(!args[0]) {
        message.channel.send("``-kabinka 1|2|3|4|5``")
        .then(m => m.delete(10000));
    }
}
module.exports.help = {
    name: "kabinka" 
}