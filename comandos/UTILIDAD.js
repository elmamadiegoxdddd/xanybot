const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help-utilidad",
  alias: [],
  execute (client, message, args) {

    const pregunta = args.join(" ")

    let respuestas = ["Nunca otaku", "1 dia", "20 dias", "1 aÃ±o", "50 aÃ±os", "6 meses", "7 dias", "1 semana", "10 dias"]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)]

    const embed = {
        title: ":grey_exclamation: | Comandos de utilidad",
        description: (`**:pushpin: - Prefijo: m/
        
        > â¨  \`m/invite\`  Invitame a tu server
 > ð  \`m/jumbo\` \`(emoji)\`  Sirve para agrandar un emoji y si te gusta descargalo
 > ð  \`m/poll\` \`(texto)\`  Hacer una encuesta
 > â¡  \`m/random\`  Selecciona un user random del servidor
 > ð  \`inviteserver\` Genera una invitacion del server donde se ejecute
 > ð¢  \`m/report\` \`(texto)\`  Reportar algun error o usuario
 > ð£ï¸  \`m/say\` \`(texto)\`  Escribe algo y haz que el bot lo diga
 > 1ï¸â£  \`m/firstmsg\` Ver el primer mensaje de un canal
 > ð  \`m/randomcolor\` El bot selecciona un color HEX random
 > :heavy_multiplication_x: \`calculator\` Saca la calculadora
 > ð¡   \`m/suggest\` \`(texto)\` Manda una sugerencia
 > â  \`m/hora\` Mira la hora y la fecha**`),

        color: "RANDOM",
        }

        message.channel.send({ embeds: [embed] })

  }

}