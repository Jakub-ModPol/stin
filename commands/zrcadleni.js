const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let file = fs.readFileSync(".//zrcadlo.txt", {encoding: "utf-8"})
    let answers = file.split('\n')
    let randomAnswer = answers[Math.floor(Math.random() * (answers.length - 1))]
    message.channel.send(randomAnswer)
}
module.exports.help = {
    name: "zrcadleni" 
}