const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help-accion",
  alias: [],
  execute (client, message, args) {

    const pregunta = args.join(" ")

    let respuestas = ["Nunca otaku", "1 dia", "20 dias", "1 aÃ±o", "50 aÃ±os", "6 meses", "7 dias", "1 semana", "10 dias"]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)]

    const embed = {
        title: ":performing_arts: | Comandos de accion",
        description: (`**:pushpin: - Prefijo: m/
        
        > ð¥  \`m/granada\` Lanza una granada
        > ð¥  \`m/flashbang\` Lanza una flashbang
        > ð   \`m/dance\` Empieza a bailar
        > ð   \`m/kiss\` Dale un beso a un usuario
        > ð¤   \`m/hug\` Abraza un usuario
        > ð¡   \`m/angry\` Enojate
        > ð¤   \`m/mimir\` Vete a mimir
        > ðª   \`m/kill\` \`(usuario)\` Mata a un usuario**`),

        color: "RANDOM",
        }

        message.channel.send({ embeds: [embed] })

  }

}