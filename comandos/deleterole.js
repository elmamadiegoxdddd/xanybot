const Discord = require('discord.js');

module.exports = {
    name: "deleterole",
    alias: ["delete-role"],

async execute (client, message, args){

  if(!message.member.permissions.has("MANAGE_ROLES"))return message.reply("No tienes los permisos suficientes! <:_:1022197350145462292> \nPermisos faltantes : `MANAGE_ROLES`")
  if(!message.guild.me.permissions.has("MANAGE_ROLES"))return message.reply("No tengo los permisos suficientes! <:_:1022197350145462292> \nPermisos faltantes : `MANAGE_ROLES`")

    const role = message.mentions.roles.first()
    if(!role) return message.reply('<:_:1022197356554362931> Debes mencionar un rol!')

    let FinishRole = await message.guild.roles.delete(`${role.id}`)

    const del = new Discord.MessageEmbed()
    .setTitle('Rol borrado!')
    .setDescription(`**<:_:1022197353983254528> El rol ${role} ha sido eliminado correctamente!**`)
    .setColor('BLACK')

    message.channel.send({ embeds: [del] })
     
  }
    
}