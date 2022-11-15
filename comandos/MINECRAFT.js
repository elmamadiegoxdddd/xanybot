const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help-minecraft",
  alias: [],
  execute (client, message, args) {

    const pregunta = args.join(" ")

    let respuestas = ["Nunca otaku", "1 dia", "20 dias", "1 año", "50 años", "6 meses", "7 dias", "1 semana", "10 dias"]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)]

    const embed = {
        title: ":brown_square: | Comandos de minecraft",
        description: (`**:pushpin: - Prefijo: m/
        
        > 🎮  \`m/mc\` \`(ip)\`  Ver la informacion de un servidor
        > 🎮 \`cabezamc\` Ver la cabeza de un usuario de minecraft**`),

        color: "RANDOM",
        }

        message.channel.send({ embeds: [embed] })

  }

}