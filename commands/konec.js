const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../functions.js");


module.exports.run = async (bot, message, args) => {
        const logChannel = message.guild.channels.find(c => c.name === "🥋tréninky") || message.channel;

        const logChan = message.guild.channels.find(c => c.name === "🌳tréninkový-ostrov");
    if(message.channel != logChan) return message.member.send("**Konec tréninku je povolen jen zde:** <#678514400021315595>");

        if (message.deletable) message.delete();
        

        // No reason
        if (!args[1]) {
            return message.reply("Prosím, napiš vedení, kdy jsi trénink měl. Od kdy, do kdy. Například ``-konec čas 14:00 - 15:10``")
                .then(m => m.delete(7000));
        }
        
        if(!message.member.roles.find(r => r.name === "ŽIVELNÍCI")){ 
            return message.channel.send("Hmm, vypadá to, že nemáš živelnickou roli. Pokud jí opravdu nemáš, kontaktuj rektorát. Pokud roli máš a jde tedy o chybu, napiš vývojaři do PM -> <@244439995799175169>")
            .then(msg => msg.delete(10000))
        }
    
    const embed = new RichEmbed()
            .setColor("RANDOM")
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(stripIndents`**> Trénink vykonal:** ${message.author}
            **> Čas odeslání:** ${message.createdAt}
            **> Kanál:** ${message.channel}
            **> Čas tréninku:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()
            .setColor("GREEN")
            .setAuthor(`Tato ověřovací zpráva zmizí za 30s.`)
            .setDescription(`${message.author}, Tvůj trénink oznámím do sborovny. Můžeš v klidu odejít.`)
                      
    if (message.member.roles.has("671814358577315865")) { //Voda
        logChannel.send("<@350294185972334603>, tvůj student právě dokončil trénink! Tady je zápis toho nejdůležitěšího:");
        logChannel.send(embed)
                     
        logChan.send(promptEmbed)
        .then(m => m.delete(30000));       
        message.channel.send(args.join(" "));
    }

    if (message.member.roles.has("671814447395766273")) { //Země
        logChannel.send("<@379727594179919873>, tvůj student právě dokončil trénink! Tady je zápis toho nejdůležitějšího:");
        logChannel.send(embed)
                     
        logChan.send(promptEmbed)
        .then(m => m.delete(30000));  
        message.channel.send(args.join(" "));
    }

    if (message.member.roles.has("671814292911423551")) { //Oheň
        logChannel.send("<@372759997211344905>, tvůj student právě dokončil trénink! Tady je zápis toho nejdůležitějšího:");
        logChannel.send(embed)
                     
        logChan.send(promptEmbed)
        .then(m => m.delete(30000));  
        message.channel.send(args.join(" "));
    }

    if (message.member.roles.has("671814391896735770")) { //Vzduch
        logChannel.send("<@238725481153691650>, tvůj student právě dokončil trénink! Tady je zápis toho nejdůležitějšího:");
        logChannel.send(embed)
                     
        logChan.send(promptEmbed)
        .then(m => m.delete(30000));  
        message.channel.send(args.join(" "));
    }

    if (message.member.roles.has("696378535069220876")) { //TEST
        logChannel.send("<@244439995799175169>, tvůj student právě dokončil trénink! Tady je zápis toho nejdůležitějšího:");
        logChannel.send(embed)
                     
        logChan.send(promptEmbed)
        .then(m => m.delete(30000))
        logChannel.send(args.join(" "));
    }
    
    

};
module.exports.help = {
    name: "konec" 
}
