const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(args[0] == '1') {
        message.channel.send("```Odhrneš závěs a padne na tebe silná vrstva prachu, co tě pořádně rozkýchá.```")
    }else if(args[0] == '2') {
        message.channel.send("```Tvé prsty se dotknou závěsu a najednou tě za závěsem něco pevně chňapne. CO TO SAKRA BYLO?```")
    }else if(args[0] == '3') {
        message.channel.send("```Závěs se pomalu třepotá v jakémsi vánku. Vypadá to podezřele. Rozhrneš ho a uvidíš…Nic moc podezřelého.```")
    }else if(args[0] == '4') {
        message.channel.send("```Fuj z toho závěsu něco pomalu odkapává…Co to je? Je to hustší než voda a žluté, bleh to by se nemělo zkoumat. Navíc to smrdí a kulička tu není.```")
    }else if(args[0] == '5') {
        message.channel.send("```Odhrneš závěs a spadne ti na hlavu několik pavoučků a kulička. Stihneš ji chytit, než se zakutálí, nebo budeš bojovat s pavouky?```")
    }else if(!args[0]) {
        message.channel.send("``-zaves 1|2|3|4|5``")
        .then(m => m.delete(10000));
    }
}
module.exports.help = {
    name: " " 
}