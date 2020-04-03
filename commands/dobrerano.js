const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.deletable) message.delete();

    message.channel.send("Dobré ráno všem.");
    
}

module.exports.help = {
    name: "dobrerano" 
}