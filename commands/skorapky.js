const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    
    let file = fs.readFileSync(".//skorapky.txt", {encoding: "utf-8"})
    let answers = file.split('\n')
    let randomAnswer = answers[Math.floor(Math.random() * (answers.length - 1))]

    message.channel.send("```Kulička se schovala pod jednu ze skořápek. Pamatuješ si, která to byla?```")
    .then(m => m.delete(9000))
    setTimeout(function() {
        message.channel.send(randomAnswer);
    }, 10000);
    
}

module.exports.help = {
    name: "skorapky" 
}
