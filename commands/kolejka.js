const Discord = require('discord.js');
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if(message.deletable) message.delete();

    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bot.user.avatarURL)
        .setTitle(`-=- KOLEJKA -=-`)
        .addField(`-umyvadlo`, '1; 2; 3; 4; 5')
        .addField(`-zrcadlo`, '1; 2; 3; 4; 5')
        .addField(`-mydlo`, '1; 2; 3')
        .addField(`-kabinka`, '1; 2; 3; 4; 5')
        .addField(`-wc`, '1; 2; 3; 4; 5')
        .addField(`-zaves`, '1; 2; 3; 4; 5')
        .addField(`-sprcha`, '1; 2; 3; 4; 5')
        .addField(`Podpis`, '1.4.2020 - Jαkub💚')
        

        message.channel.send(embed)
        .then(console.log);
    
    };
    
module.exports.help = {
    name: 'kolejka',
    aliases: []
};