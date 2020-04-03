const Discord = require("discord.js");
const fs = require('fs');
const cron = require("node-cron");
const bot = new Discord.Client();

const token = 'x';
//const token = 
bot.on('ready', () =>{
    console.log(`Logged in as ${bot.user.tag}!`)
    bot.user.setActivity('Update.', {type: 'STREAMING'});
            bot.user.setStatus(' ');
})

bot.commands = new Discord.Collection();

fs.readdir("commands", (err, files) => {
    if (err) return console.log(err);

    let jsfile = files.filter(f => f.split('.').pop() === 'js');

    if (jsfile.length <= 0) return console.log("Couldn't find commands.");

    jsfile.forEach((f, i) => {
        let props = require(".//commands//" + f);
        console.log(`${f} loaded`);
        bot.commands.set(props.help.name, props);
    });

});

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    let prefix = "-"; //prefix
    let messageArray = message.content.split(' ');
    let cmd = messageArray[0].toLowerCase(); //Na tomto řádku jsem přidal .toLowerCase().
    let args = messageArray.splice(1);
    let commandFile = bot.commands.get(cmd.slice(prefix.length));
    if (cmd.slice(0,prefix.length) === prefix) {
            if (!commandFile) return message.channel.send("To bylo na mě?").then(msg => {msg.delete(7000);});    
        await commandFile.run(bot, message, args)
            .catch((err) => console.log(err));
    }
})  
    
bot.on("guildMemberAdd", user => {
    let memberRole = user.guild.roles.find("name", "NOVÁČCI");
    user.addRole(memberRole);
    user.guild.channels.get('684120274635063307').send("**Vítej na stínohra.eu**, " + user + " :tada::hugging:! Rádi tě vidíme a doufáme, že se ti v naší Stínové akademii bude líbit! V případě dotazů se obrať na oranžové členy vedení. Pro začátek ti doporučíme podívat se do <#630423621764120586> a <#630807032143806484>."); 
});




bot.login(token);