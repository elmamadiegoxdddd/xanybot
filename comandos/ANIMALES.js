const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help-animales",
  alias: [],
  execute (client, message, args) {

    const pregunta = args.join(" ")

    let respuestas = ["Nunca otaku", "1 dia", "20 dias", "1 año", "50 años", "6 meses", "7 dias", "1 semana", "10 dias"]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)]

    const embed = {
        title: "🐻 | Comandos de animales",
        description: (`**:pushpin: - Prefijo: m/
        
        > 😸  \`m/gato\` Foto de un lindo gato**`),

        color: "RANDOM",
        }

        message.channel.send({ embeds: [embed] })

  }

}