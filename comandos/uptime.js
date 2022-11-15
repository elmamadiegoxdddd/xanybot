const Discord = require("discord.js");

module.exports = {
  name: "uptime",
  alias: [],

  execute(client, message, args){

    const e = new Discord.MessageEmbed()
    .setTitle(`<:_:1022197353983254528> | UPTIME!`)
    .setDescription(`**Llevo activa el siguiente tiempo:** <t:${parseInt(client.readyTimestamp / 1000)}:R>`)
    .setColor("AQUA")
    .setTimestamp()

    message.channel.send({ embeds: [e] })
    
  }
}