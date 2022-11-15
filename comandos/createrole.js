const Discord = require('discord.js');

module.exports = {
    name: "create-role",
    alias: ["createrole"],

async execute (client, message, args){

  if(!message.member.permissions.has("MANAGE_ROLES"))return message.reply("No tienes los permisos suficientes! <:_:1022197350145462292> \nPermisos faltantes : `MANAGE_ROLES`")
  if(!message.guild.me.permissions.has("MANAGE_ROLES"))return message.reply("No tengo los permisos suficientes! <:_:1022197350145462292>  \nPermisos faltantes : `MANAGE_ROLES`")

    let amongus = args.join(' ')
    if(!amongus) return message.reply('<:_:1022197356554362931> Debes ingresar el nombre del rol!')

    let auRole = await message.guild.roles.create({
        name: `${amongus}`,
    })

    const embed = new Discord.MessageEmbed()
    .setTitle('Rol creado!')
    .setDescription(`**<:_:1022197353983254528> El rol <@&${auRole.id}> ha sido creado correctamente**`)
    .setColor('GREEN')

    message.channel.send({ embeds: [embed] })
    
  }
    
} 