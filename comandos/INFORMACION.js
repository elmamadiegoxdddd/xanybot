const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help-informacion",
  alias: ["info"],
  execute (client, message, args) {

    const pregunta = args.join(" ")

    let respuestas = ["Nunca otaku", "1 dia", "20 dias", "1 año", "50 años", "6 meses", "7 dias", "1 semana", "10 dias"]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)]

    const embed = {
        title: ":thumbsup: | Comandos de informacion",
        description: (`**:pushpin: - Prefijo: m/
        
        > 😃  \`m/avatar\`  Para ver tu foto de perfil o de otro usuario
  > 🏓  \`m/ping\`  Para ver el ping del bot
  > ‍💻  \`m/systeminfo\` Informacion sobre el sistema
  > 👑  \`m/server\`  Informacion sobre el servidor actual
  > 💪  \`m/uptime\`  Cuanto tiempo lleva el bot encendido
  > 😀  \`m/userinfo\`  Informacion sobre ti o de otro user     
  > 🤖  \`channelinfo\` Ver informacion sobre el canal actual
  > 🤖  \`m/serverinfo\`  Informacion sobre el servidor actual
  > 🧑  \`m/miembros\`  Contador de miembros y bots
  > 👌  \`m/serveriocn\` Mira el icono del server actual
  > ✨  \`m/servers\` Observa en cuales servidores esta el bot**`),

        color: "RANDOM",
        }

        message.channel.send({ embeds: [embed] })

  }

}