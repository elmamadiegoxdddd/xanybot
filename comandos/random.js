const Discord = require('discord.js');

module.exports = {
  name: "random", 
  alias: [], 

execute (client, message, args){

  const user = message.guild.members.cache.random();

    const rndom = new Discord.MessageEmbed()
    .setTitle(`**Usuario escogido**`)
    .setDescription(`<:_:1022197353983254528> **${user}** <:_:1022197353983254528>`)
    .setThumbnail(user.user.displayAvatarURL({format : 'png', dynamic : 'true'}))
    .setColor('RANDOM')

  message.channel.send({embeds: [rndom]})

 }

} 