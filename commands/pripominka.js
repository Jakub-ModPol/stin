const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("Ok.")
    if (message.deletable) message.delete();
    message.channel.send("Ok.")

var interval = setInterval (function () {
    // use the message's channel (TextChannel) to send a new message
    message.channel.send("Chtěl jsi napsat Moony. <@244439995799175169>")
    .catch(console.error); // add error handling here
}, 18000 * 1000); 
}

module.exports.help = {
    name: "pripominka" 
}