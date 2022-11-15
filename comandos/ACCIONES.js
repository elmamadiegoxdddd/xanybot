const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help-accion",
  alias: [],
  execute (client, message, args) {

    const pregunta = args.join(" ")

    let respuestas = ["Nunca otaku", "1 dia", "20 dias", "1 año", "50 años", "6 meses", "7 dias", "1 semana", "10 dias"]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)]

    const embed = {
        title: ":performing_arts: | Comandos de accion",
        description: (`**:pushpin: - Prefijo: m/
        
        > 💥  \`m/granada\` Lanza una granada
        > 💥  \`m/flashbang\` Lanza una flashbang
        > 💃   \`m/dance\` Empieza a bailar
        > 😘   \`m/kiss\` Dale un beso a un usuario
        > 🤗   \`m/hug\` Abraza un usuario
        > 😡   \`m/angry\` Enojate
        > 💤   \`m/mimir\` Vete a mimir
        > 🔪   \`m/kill\` \`(usuario)\` Mata a un usuario**`),

        color: "RANDOM",
        }

        message.channel.send({ embeds: [embed] })

  }

}