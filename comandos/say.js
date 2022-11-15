const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "Say",//Nombre del comando
  alias: ["say"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  execute (client, message, args) {
  message.delete()

    const decir = args.slice(0).join(' ')
    if(!decir) return message.channel.send("<:_:1022248604200607814> no especificaste un texto")
    message.channel.send(decir)

  }

}