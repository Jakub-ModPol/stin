const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.channel.send('**Živelníci** ~ Lidé obdaření schopností vládnout elementům\n**Lidé** ~ Lidé, kteří odpustili od elementární magie\n**Rada starších** ~ Nejvýznamnější členové společnosti, kteří rozhodují o živelnících\n**Sator** ~ Zástupce rady starších v koloniích\n**Hledači** ~ Empatičtí živelníci s nadáním pro hledání nadaných mezi lidmi\n**Přestínění** ~ Cestování mezi stíny pomocí kamene\n**Zrcadlení** ~ Forma komunikace pomocí očarovaných zrcadel\n**Stínovníčci** ~ Forma komunikace pomocí vlastního stínu\n**Křišťál** ~ Kámen s jehož pomocí proplouváme prvním semestrem\n**Talisman** ~ Krystal, který dostanete na konci prvního semestru, posiluje vaši povahu a vaši magii')

}
module.exports.help = {
    name: "slovnik" 
}