const Discord = require(`discord.js`);
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require(`discord.js`)
const db = require("megadb")
const suggest = new db.crearDB("suggest")

module.exports = {
  name: "setup-suggest",
  alias: ["ss", "set-suggest", "s-s"],
execute(client, message, args) {

    const id = args[0]
    if(!id) return message.reply("<:_:1022197356554362931> eso no es un canal valido.")

    const canal = message.mentions.channels.first() || client.channels.cache.get(id)
if (!canal) return message.reply("<:_:1022197356554362931> Eso no es una ID de canal valida.")
    
let canalservidor = message.guild.channels.resolve(canal.id)
    if(!canalservidor) return message.reply("<:_:1022197356554362931> debes mencionar un canal de este servidor.")

suggest.establecer(message.guild.id, canal.id)
    
message.reply(`<:_:1022197353983254528> El canal de sugerencias ahora es **${canal.name}**!`)
    
  }
  
}