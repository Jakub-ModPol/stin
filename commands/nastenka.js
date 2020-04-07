const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (message.deletable) message.delete();
message.channel.send("Už jsi dneska prozkoumal zda nejsou novinky na <#617458206125588483> a účastnil se probíhající soutěže?")
var interval = setInterval (function () {
    // use the message's channel (TextChannel) to send a new message
    message.channel.send("Už jsi dneska prozkoumal zda nejsou novinky na <#617458206125588483> a účastnil se probíhající soutěže?")
    .catch(console.error); // add error handling here
}, 43200 * 1000); 
}

module.exports.help = {
    name: "nastenka" 
}
