const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR'))
      return;

      message.channel.send('Ok, canceling my work rn...')
      .then(msg => bot.destroy())
      
  }

module.exports.help = {
    name: 'stop',
    aliases: []
};