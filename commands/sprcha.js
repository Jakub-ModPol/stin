const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(args[0] == '1') {
        message.channel.send("```Ve sprše je pod šedivou plachtou něco co má lidskou siluetu. Když se odvážíš plachtu sundat, zjistíš, že jde o voskovou figurínu se znetvořeným obličejem.```")
    }else if(args[0] == '2') {
        message.channel.send("```Zvláštní sprcha je špinavá, ale prázdná…```")
    }else if(args[0] == '3') {
        message.channel.send("```Jak už bylo řečeno, za závěsem číslo tři je naprosto nepodezřelá sprcha.```")
    }else if(args[0] == '4') {
        message.channel.send("```Je tu louže podivné žluté husté zapáchající tekutiny, která se čeří, jako by z ní chtělo něco vylézt. Kulička to ale nebude.```")
    }else if(args[0] == '5') {
        message.channel.send("```Najdeš tu něco jako kaluž krve a v tom cosi co vypadá jako kulička, ale jde o lidské oko, sorry, říká se, že oko bere, ale tohle oko neberem.```")
    }else if(!args[0]) {
        message.channel.send("``-sprcha 1|2|3|4|5``")
        .then(m => m.delete(10000));
    }
}
module.exports.help = {
    name: " " 
}