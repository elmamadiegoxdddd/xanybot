const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help-informacion",
  alias: ["info"],
  execute (client, message, args) {

    const pregunta = args.join(" ")

    let respuestas = ["Nunca otaku", "1 dia", "20 dias", "1 aÃ±o", "50 aÃ±os", "6 meses", "7 dias", "1 semana", "10 dias"]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)]

    const embed = {
        title: ":thumbsup: | Comandos de informacion",
        description: (`**:pushpin: - Prefijo: m/
        
        > ð  \`m/avatar\`  Para ver tu foto de perfil o de otro usuario
  > ð  \`m/ping\`  Para ver el ping del bot
  > âð»  \`m/systeminfo\` Informacion sobre el sistema
  > ð  \`m/server\`  Informacion sobre el servidor actual
  > ðª  \`m/uptime\`  Cuanto tiempo lleva el bot encendido
  > ð  \`m/userinfo\`  Informacion sobre ti o de otro user     
  > ð¤  \`channelinfo\` Ver informacion sobre el canal actual
  > ð¤  \`m/serverinfo\`  Informacion sobre el servidor actual
  > ð§  \`m/miembros\`  Contador de miembros y bots
  > ð  \`m/serveriocn\` Mira el icono del server actual
  > â¨  \`m/servers\` Observa en cuales servidores esta el bot**`),

        color: "RANDOM",
        }

        message.channel.send({ embeds: [embed] })

  }

}