const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let ownerID = '244439995799175169'
  if(message.author.id !== ownerID) return;

      message.channel.send('Ok, canceling my work rn...')
      .then(msg => bot.destroy())
      
  }

module.exports.help = {
    name: 'stopkuba',
    aliases: []
};