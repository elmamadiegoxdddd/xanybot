const Discord = require('discord.js')
module.exports = {
    name: "servers",
    aliases: [""],
    desc: "Sirve para ver en que servidores está tu bot",
    execute: async (client, message, args) => {

   const servers = new Discord.MessageEmbed()

   .setTitle(`<:_:1022197353983254528> ¡El bot se encuentra en ${client.guilds.cache.size} servidores!`)
   .setDescription(`**__${client.guilds.cache.map(m => m.name).join('\n')}__**`) // aca lanza los nombres de cada sv 
   .setColor("YELLOW")

   message.reply({embeds: [servers]})


 }

} 