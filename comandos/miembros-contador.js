const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "miembros",
  alias: ["member"],
async execute (client, message, args) {
let embed = new MessageEmbed()

.setTitle("Contador de miembros")
.setColor("RANDOM")
.setDescription(`**Numero total de miembros**\nπ **${message.guild.memberCount}**\n\n**Humanos**\nπΆβπ«οΈ  **${message.guild.members.cache.filter(member=> !member.user.bot).size}**\n\n**Bots**\nπ€  **${message.guild.members.cache.filter(member=> member.user.bot).size}**`)
.setThumbnail(message.guild.iconURL({ size: 4096, dynamic: true }))
.setTimestamp()
message.channel.send({ embeds: [embed] })

    
  }

}