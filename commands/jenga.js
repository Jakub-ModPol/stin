const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    
    let file = fs.readFileSync(".\\jenga.txt", {encoding: "utf-8"})
    let answers = file.split('\n')
    let randomAnswer = answers[Math.floor(Math.random() * (answers.length - 1))]

    message.channel.send("```Vytahuješ hranolek...```")
    .then(m => m.delete(4000))
    setTimeout(function() {
        message.channel.send(randomAnswer);
    }, 5000);
    
}

module.exports.help = {
    name: "jenga" 
}