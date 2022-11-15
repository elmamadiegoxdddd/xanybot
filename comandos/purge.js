const Discord = require('discord.js');

module.exports = {
  name: "purge", 
  alias: ["clear"], 

execute (client, message, args){

  if(!message.member.permissions.has("MANAGE_MESSAGES"))return message.reply("No tienes los permisos suficientes! <:_:1022197350145462292> \nPermisos faltantes : `MANAGE_MESSAGES`")
  if(!message.guild.me.permissions.has("MANAGE_MESSAGES"))return message.reply("No tengo los permisos suficientes! <:_:1022197350145462292> \nPermisos faltantes : `MANAGE_MESSAGES`")

    const cantidad = args[0]
    if(!cantidad) return message.reply('<:_:1022197356554362931> Debes ingresar una cantidad de mensajes a eliminar!')
    if(cantidad.includes('.') || cantidad.includes(',')) return message.reply('<:_:1022197356554362931> No puedes usar decimales!')
    if(isNaN(cantidad)) return message.reply('<:_:1022197356554362931> Debes ingresar una cantidad de mensajes a eliminar!')
    if(cantidad >= 100) return message.reply("<:_:1022197356554362931> No puedo eliminar +99 mensajes!")

    message.delete().then(g => {
        message.channel.bulkDelete(cantidad)
    })

 }

} 