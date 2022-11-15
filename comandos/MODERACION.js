const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help-moderacion",
  alias: [],
  execute (client, message, args) {

    const pregunta = args.join(" ")

    let respuestas = ["Nunca otaku", "1 dia", "20 dias", "1 año", "50 años", "6 meses", "7 dias", "1 semana", "10 dias"]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)]

    const embed = {
        title: ":detective: | Comandos de moderacion",
        description: (`**:pushpin: - Prefijo: m/
        
        > 🔨  \`m/kick\` \`(usuario)\`  Expulsar un usuario del servidor
 > 💥  \`m/nuke\`  Borrar todo el contenido de un canal
 > 🧹  \`m/clear\` \`(cantidad)\`  Borrar una cierta cantidad de mensajes
 > ➕  \`m/createrole\` \`(usuario)\`  Crear un rol
 > ➖  \`m/deleterole\` \`(usuario)\`  Eliminar un rol
 > 🔇  \`m/timeout\` \`(usuario)\` \`(Tiempo)\` Silencia un usuario
 > 🔊  \`untimeout\` \`(usuario)\` Desilencia un usuario
 > 🚫  \`m/ban\` \`(usuario)\` \`(razon)\` Banea un usuario
 > --   \`m/snipe\` Ver mensajes anteriomente borrados
 > 🚫  \`m/lock\` Bloquea el canal donde se ejecute el comando
 > ⚪  \`m/unlock\` Desbloquea el donde se ejecuto
 > ❄️  \`m/slowmode\` \`(tiempo)\` Estableze el modo pausado en el canal actual**`),

        color: "RANDOM",
        }

        message.channel.send({ embeds: [embed] })

  }

}