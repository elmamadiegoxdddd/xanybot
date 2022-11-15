const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help-imagenes",
  alias: ["imagenes"],
  execute (client, message, args) {

    const pregunta = args.join(" ")

    let respuestas = ["Nunca otaku", "1 dia", "20 dias", "1 año", "50 años", "6 meses", "7 dias", "1 semana", "10 dias"]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)]

    const embed = {
        title: " 📷 | Comandos de imagenes",
        description: (`**:pushpin: - Prefijo: m/
        
        > 🍫  \`m/dexter\` \`(usuario)\`  Verte en un dexter
        > ☠️  \`m/wasted\` \`(usuario)\`  muerte como en GTA
        > ⛓️   \`m/jail\` \`(usuario)\` 
        > 🧡  \`m/neko\` Mira fotos de lindas nekos
        > 🙃  \`m/invert\` \`(usuario)\`  Invierte los colores de una foto de perfil
        > **`),

        color: "RANDOM",
        }

        message.channel.send({ embeds: [embed] })

  }

}