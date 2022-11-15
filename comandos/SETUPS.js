const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help-setups",
  alias: [],
  execute (client, message, args) {

    const pregunta = args.join(" ")

    let respuestas = ["Nunca otaku", "1 dia", "20 dias", "1 año", "50 años", "6 meses", "7 dias", "1 semana", "10 dias"]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)]

    const embed = {
        title: "⚙️ | Comandos de setups",
        description: (`**:pushpin: - Prefijo: m/
        
        > 🚫  \`m/antilinks\` Establezca un anti links
        > ⚙️  \`m/setup-suggest\` Establece un canal de sugerencias
        > ⚙️  \`m/setup-embeds\`  Pon un embed**`),

        color: "RANDOM",
        }

        message.channel.send({ embeds: [embed] })

  }

}