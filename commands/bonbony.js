const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if(args[0] == 'puntiky') {
        message.channel.send("```Kdo neskáče, není živelník! Tento citrusový bonbon nutí tvé nožky poskakovat. Kupředu, nebo na místě, to je fuk, hlavní je, že skáááčeš!```")
    }else if(args[0] == 'prouzky') {
        message.channel.send("```Tvé chuťové buňky zaregistrovaly orient. A tvé svaly taky. Kdykoliv když nemluvíš, tvé tělo se roztančí ukázkovým kroutivým břišním tancem.```")
    }else if(args[0] == 'zlaty') {
        message.channel.send("```Tento bonbonek je velice inspirativní. Políbila tě múza a byla to pěkně sladká pusa! A ty máš teď chuť mluvit jako vznešený básník. Verše, verše a stále jen verše. A komu se to nelíbí, ať Gabriela políbí.```")
    }else if(args[0] == 'stribrny') {
        message.channel.send("```Tento bonbon má sladkou tekutou náplň. Jakmile se ti roztekla na jazyk, tak ti ho nějakým způsobem popletla. Od této chvíle se ti do rodného jazyka sem tam vkrade jazyk cizí.```")
    }else if(args[0] == 'tyrkysovy') {
        message.channel.send("```Co to? Karamelka? Copak ti způsobí? Tušíš to už? Netušíš? Zvládneš se bavit pouze v otázkách? Ne? Nemáš na výběr!```")
    }else if(!args[0]) {
        message.channel.send("Vyber si barvu obalu na tvém bonbonu: ``puntiky || prouzky || zlaty || stribrny || tyrkysovy``\nTeď už si stačí jen vybrat. :wink:")
        .then(m => m.delete(10000));
    }
};
module.exports.help = {
    name: "bonbony" 
}