const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help-moderacion",
  alias: [],
  execute (client, message, args) {

    const pregunta = args.join(" ")

    let respuestas = ["Nunca otaku", "1 dia", "20 dias", "1 aรฑo", "50 aรฑos", "6 meses", "7 dias", "1 semana", "10 dias"]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)]

    const embed = {
        title: ":detective: | Comandos de moderacion",
        description: (`**:pushpin: - Prefijo: m/
        
        > ๐จ  \`m/kick\` \`(usuario)\`  Expulsar un usuario del servidor
 > ๐ฅ  \`m/nuke\`  Borrar todo el contenido de un canal
 > ๐งน  \`m/clear\` \`(cantidad)\`  Borrar una cierta cantidad de mensajes
 > โ  \`m/createrole\` \`(usuario)\`  Crear un rol
 > โ  \`m/deleterole\` \`(usuario)\`  Eliminar un rol
 > ๐  \`m/timeout\` \`(usuario)\` \`(Tiempo)\` Silencia un usuario
 > ๐  \`untimeout\` \`(usuario)\` Desilencia un usuario
 > ๐ซ  \`m/ban\` \`(usuario)\` \`(razon)\` Banea un usuario
 > --   \`m/snipe\` Ver mensajes anteriomente borrados
 > ๐ซ  \`m/lock\` Bloquea el canal donde se ejecute el comando
 > โช  \`m/unlock\` Desbloquea el donde se ejecuto
 > โ๏ธ  \`m/slowmode\` \`(tiempo)\` Estableze el modo pausado en el canal actual**`),

        color: "RANDOM",
        }

        message.channel.send({ embeds: [embed] })

  }

}