const Discord = require('discord.js');


module.exports = {
    name: "ping",
    aliases: ["latencia"],
    desc: "",
    execute (client, message, args){
       let values = {
        "high": 200,
        "medium": 100,
        "low": 50
    }

    let ping = Date.now() - message.createdTimestamp

    let color;
      if (ping > values.high) {
        color = '🔴'
    } else if (ping > values.medium) {
        color = '🔴'
    } else {
        color = '🔴'
    }

    let colores;
      if (ping > values.high) {
        colores = 'df0101'
    } else if (ping > values.medium) {
        colores = 'df7401'
    } else {
        colores = '01df01'
    }

    const embed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle(`<:_:1022197353983254528> Mi ping`)
    .addField("**❯ Ping | :**",`> ${color} \`|\` Mi ping es ${ping}ms\n`)  
    .addField("**❯ API | :**",`> 🛰️ \`|\` Ping DiscordAPI: ${client.ws.ping} ms`)
    .setTimestamp()
    
    message.reply({embeds: [embed]})
    }
}