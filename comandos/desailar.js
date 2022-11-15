const Discord = require("discord.js")
const ms = require("ms");

module.exports = {
  name: "untimeout",
  aliases: ["desaislar"],
  desc: "desaisla a un miembro del servidor",
  permisos: ["ADMINISTRATOR", "BAN_MEMBERS"],
  permisos_bot: ["ADMINISTRATOR", "BAN_MEMBERS"],
  execute: async (client, message, args, prefix) => {
    let usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
    if(!usuario) return message.reply({embeds: [
        new Discord.MessageEmbed()
        .setTitle(`❌ Error ❌`)
        .setDescription(`<:_:1022248604200607814> No se ha encontrado al usuario`)
        .setColor(client.color)
    ]})

    if(usuario.isCommunicationDisabled()) {

      await usuario.timeout(null)

      message.channel.send({embeds: [
        new Discord.MessageEmbed()
        .setTitle(`Timeout Removido ✅`)
        .setDescription(`<:_:1022197353983254528> Se le a quitado el Timeout a ${usuario}`)
        .setColor(client.color)
        .setTimestamp()
    ]}) 
    } else {
      message.channel.send({embeds: [
        new Discord.MessageEmbed()
        .setTitle(`❌ Error ❌`)
        .setDescription(`<:_:1022248604200607814> El usuario: ${usuario}, no esta aislado`)
        .setColor(client.color)
        .setTimestamp()
    ]}) 
    }
  }

}