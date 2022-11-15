const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "miembros",
  alias: ["member"],
async execute (client, message, args) {
let embed = new MessageEmbed()

.setTitle("Contador de miembros")
.setColor("RANDOM")
.setDescription(`**Numero total de miembros**\n👌 **${message.guild.memberCount}**\n\n**Humanos**\n😶‍🌫️  **${message.guild.members.cache.filter(member=> !member.user.bot).size}**\n\n**Bots**\n🤖  **${message.guild.members.cache.filter(member=> member.user.bot).size}**`)
.setThumbnail(message.guild.iconURL({ size: 4096, dynamic: true }))
.setTimestamp()
message.channel.send({ embeds: [embed] })

    
  }

}