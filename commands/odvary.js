const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if(args[0] == 'rudy') {
        message.channel.send("```Říká se, že ve víně je pravda a tento odvar skutečně jako víno chutná. Je v něm i pravda? Ano je. Od prvního cucnutí tě něco nutí říkat nahlas všechny tvé myšlenky.```")
    }else if(args[0] == 'prusvitny') {
        message.channel.send("```Odvar je podivně kořeněný. Má takový až pepřový nádech, který tě co chvíli nutí kýchat. Vždycky když si kýchneš, tak na sekundu zmizíš. Je to neužitečné a otravné.```")
    }else if(args[0] == 'ruzovy') {
        message.channel.send("```Ty jši ale šikovňoučký človíček a klásně si vybumbal tohle slaďoušké mlíčenko! Ňaminka to byla, že jo? Teď mám pro tebe nemilouškou zprávišku. Od této chvilišky budeš mluvit jako bys šišlal na mimineško. To je ale na prdíček, viď?```")
    }else if(args[0] == 'cerny') {
        message.channel.send("```Vyzkoušel si nějaký výrobek tohoto veletrhu? Podepsalo se to na tobě? Výborná zpráva je, že nemusíš čekat do půlnoci na zmizení těchto efektů. Efekty zmizely s prvním cucnutím tohoto odvaru. Blbá zpráva je, že odvar je neuvěřitelně nechutný. Bleh…```")
    }else if(args[0] == 'zluty') {
        message.channel.send("```Jako by to byl odvar z pampelišek, ale tohle určitě nebudou obyčejné pampelišky. Po vypití odvaru se tvůj obličej rozzáří jako sluníčko. Ať je tvá nálada jakákoliv, tvůj obličej se rozhodl, že se bude jen a jen přihlouple culit na všechny a na všechno.```")
    }else if(args[0] == 'fialovy') {
        message.channel.send("```Tahle chuť ti připomíná nějakou oblíbenou sladkost z dětství…Ale jakou? Než si vzpomeneš, zjistíš, že na tom nezáleží. Na čem ale definitivně záleží je první osoba, kterou spatříš. Jak je možné, že sis toho nikdy nevšiml? Ta osoba by se mohla stát tvým životním vzorem! Všechno je na ní božské! Tak se nestyď a jdi ji svůj obdiv vyjádřit.```")
    }else if(!args[0]) {
        message.channel.send("Vyber si nějaký odvar: ``prusvitny || ruzovy || cerny || zluty || fialovy``\nKterý to bude? :smirk:")
        .then(m => m.delete(10000));
    }
};
module.exports.help = {
    name: "odvary" 
}