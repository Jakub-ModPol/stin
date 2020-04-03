const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if(message.deletable) message.delete();

    let msgArgs = args.slice(1).join(" ");

    message.channel.send("```" +msgArgs+ "```")
    
}

module.exports.help = {
    name: "vypravec" 
}