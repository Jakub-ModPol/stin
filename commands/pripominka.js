const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("Připomínka nastavena. Připomenutí za: " + args[0] + "s")
    if (message.deletable) message.delete();
    
    const roleColor = message.guild.me.highestRole.hexColor;

var interval = setTimeout (function () {
    // use the message's channel (TextChannel) to send a new message
    const embed = new RichEmbed()
            .setDescription(args.slice(1).join(" "))
            .setColor(roleColor === "#000000" ? "#ffffff" : roleColor)
            .addField(`Přípomínku nastavil: `, message.author)
            message.member.send(embed)
        }, args[0] * 1000); 
}

module.exports.help = {
    name: "pripominka" 
}
