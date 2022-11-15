const Discord = require('discord.js');

module.exports = {
    name: "report",
    alias: ["reporte"],

execute (client, message, args){

  if(!args.join(' ')) return message.reply('Debes ingresar un bug o usuario para reportar!')
  message.reply('Tu reporte fue enviado correctamente! 📨')

  const reporteOwner = new Discord.MessageEmbed()
  .setTitle('Nuevo reporte!')
  .addField('Usuario :', `**${message.author.tag}**`)
  .addField('ID del usuario :', `**${message.author.id}**`)
  .addField('Servidor :', `**${message.guild.name}**`)
  .addField('ID del servidor :', `**${message.guild.id}**`)
  .addField('Reporte :', `**${args.join(' ')}**`)
  .setColor('RED')
  .setThumbnail(message.author.displayAvatarURL())

  client.users.cache.get('977570731456077874').send({ embeds: [reporteOwner] })
    
  }
    
}