const Discord = require('discord.js');
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if(message.deletable) message.delete();

    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bot.user.avatarURL)
        .setTitle(`-=- COMMANDS -=-`)
        .addField(`-hi`, 'Pozdrav nové příchozího.')
        .addField(`-informace`, 'Najdi vše o Stínohře!')
        .addField(`-socialnisite`, 'Kde najdeš Stínohru? Na sociálních sítích!')
        .addField(`-snidane`, 'Máš ráno hlad? Není nic jednoduššího než se nasnídat!')
        .addField(`-obed`, 'Oběd na akademii - Vždy je co ochutnat. Co si dáš dnes?')
        .addField(`-vecere`, 'Na večer je také důležité jíst, jen to nepřežeň.')
        .addField(`-slovnik`, 'Co znamená tohle slovo? Najdi si slovo ve slovníčku.')
        .addField(`-trenink`, 'Trénování vede ke zlepšení tvých výkonů i levelů.')
        .addField(`-zrcadleni`, 'Živelníci si zrcadlí a díky tomu mohou zůstat v kontaktu kdekoli.')
        .addField(`-stinovani`, 'Chůze je nudná. Přestínuj se!')

        message.channel.send(embed)
        .then(console.log);
    
    };
    
module.exports.help = {
    name: 'help-commands',
    aliases: []
};