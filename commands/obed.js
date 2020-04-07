const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    const logChannel = message.guild.channels.find(c => c.name === "🏰jídelna");
    if(message.channel != logChannel) return message.member.send("**Tento příkaz můžeš použít jen v kanálu** <#677945410051899412>");

    let file = fs.readFileSync(".//obed.txt", {encoding: "utf-8"})
    let answers = file.split('\n')
    let randomAnswer = answers[Math.floor(Math.random() * (answers.length - 1))]
    logChannel.send(randomAnswer)
}
module.exports.help = {
    name: "obed" 
}
