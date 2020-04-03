const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.deletable) message.delete();
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));


    if (!target) return message.channel.send('**Ahoj**, ' +  message.author + ', **Vítej na Stínohře!** :grinning:.');
    message.channel.send('**Ahoj**, ' + target + ', **Vítej na Stínohře!** :grinning:.\nVítá tě' + message.author)
}

module.exports.help = {
    name: "hi" 
}