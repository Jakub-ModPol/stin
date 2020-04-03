module.exports.run = async (bot, message, args) => {
    const msg = await message.channel.send(`🏓 Pinging....`)
    .catch(console.error);

    msg.edit(`🏓 Pong!
    Latency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms
    API Latency is ${Math.round(bot.ping)}ms`)
    
    
}


module.exports.help = {
name: "ping" 
}