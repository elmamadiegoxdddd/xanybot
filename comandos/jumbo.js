const Discord = require('discord.js');

module.exports = {
  name: "jumbo", 
  alias: ["emote"], 

execute (client, message, args){

  if(!args[0]) return message.channel.send("<:_:1022197356554362931> Inserta un emoji de este servidor")

  let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
  if(!emoji) return message.channel.send("<:_:1022197356554362931> Este emoji no es de este servidor")

  message.channel.send(emoji.url)
  
 }

} 