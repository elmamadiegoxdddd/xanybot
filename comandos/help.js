const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help",
  alias: [],
  execute (client, message, args) {
     let values = {
        "high": 200,
        "medium": 100,
        "low": 50
    }

    let ping = Date.now() - message.createdTimestamp
    

    const pregunta = args.join(" ")

    let respuestas = ["Antes de ser Natsuki Iba a ser Nezuko quien representaria al bot", "Tube variedades de prefix como -, +, !, o/,etc", "Antes de llamarme Xanny era llamado Infinity bot", "Fui creada el 15 de julio d 2022, a las 13:22:11"]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)]

    const embed = {
        title: "📚 - Panel de ayuda",
        Thumbnail: "https://cdn.discordapp.com/attachments/1017795979971412098/1020670529180545034/a.gif",
        description: (`**:fire: __Natsuki es una bot de Discord multifuncion, dispuesta a todo__**.
        > :bangbang: Si quieres ver alguna de las categorias, usa **\`m/help-(categoria).\`**                        
        > :paperclip: Prefijo: **\`m/\`**
        > :robot: Dato sobre el bot: \n> **${random}**

        **» Caracteristicas** 
        > :green_circle: Ping: \`${ping}ms\`
        > :file_folder: En **${client.guilds.cache.size} servidores**
        > :alarm_clock: Tiempo activa: **<t:${parseInt(client.readyTimestamp / 1000)}:R>**
        > :brain: Estoy usando **\`${(process.memoryUsage().heapUsed/1024/1024).toFixed(2)}\` MB** de **RAM**
        > :eyes: Observando **${client.users.cache.size} usuarios**
        
        **» Categorias** 
         > \`m/help-Diversion\`  ∷  :clown:  Diversion
         > \`m/help-Utilidad\`  ∷  :grey_exclamation:  Utilidad
         > \`m/help-imagenes\`  ∷   📷  Imagenes
         > \`m/help-Informacion\`  ∷  :thumbsup:  Informacion
         > \`m/help-Accion\`  ∷  :performing_arts:  Accion
         > \`m/help-Datos\`  ∷  :question:  Datos
         > \`m/help-Minecraft\`  ∷  :brown_square:  Minecraft
         > \`m/help-Moderacion\`  ∷  :detective:  Moderacion
         > \`m/help-setups\`  ∷  ⚙️  Setups
         > \`m/help-Animales\`  ∷  :bear:  Animales
         
         **» Enlaces**
         [Discord](https://tenor.com/view/coming-soon-gif-8921141) **|** [Leardboard](https://tenor.com/view/coming-soon-gif-8921141) **|** [Vote](https://tenor.com/view/coming-soon-gif-8921141)`),

        
      
        color: "RANDOM",
        }

        message.channel.send({ embeds: [embed] })

  }

}