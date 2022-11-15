const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "cuandomemuero",
  alias: ["cuando","muero"],
  execute (client, message, args) {

    const pregunta = args.join(" ")

    let respuestas = ["Mañana", "En un dia", "En un mes", "En un año", "En 10 años", "En 50 años", "En 100 años", "En 500 años", "Pero? si eres inmortal"]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)]

    const embed = {
        title: "💀 Moriras 💀",
        description: (`**Te moriras ||${random}||**`),

        color: "RANDOM",
        }

        message.channel.send({ embeds: [embed] })

  }

}