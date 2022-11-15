const Discord = require('discord.js');

module.exports = {
  name: "dljfwjdfwjofi", 
  alias: [], 

execute (client, message, args){

  const embed = new Discord.MessageEmbed()
  .setTitle("Desarrolladora")
  .setDescription("**Hola soy __Natsuki__ la desarrolladora dez este bot, espero que el bot te sea de ayuda para entretener tu servidor**")
  .setColor("RED")
  .setFooter("Disfruta del bot, cualquier error usar el comando de report")
  .setImage("https://cdn.discordapp.com/attachments/1017795979971412098/1018583598405795840/descarga_.png")

  message.channel.send({embeds: [embed]})

 }

} 