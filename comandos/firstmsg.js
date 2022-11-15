const Discord = require('discord.js');
const{ Client, MessageEmbed } = require("discord.js");


module.exports = {
  name: "firstmsg", 
async execute (client, message, args, String){

const canal = message.mentions.channels.first() || client.channels.resolve(args[0]) || message.channel;
  const fetchMessages = await canal.messages.fetch({
      after: 1,
      limit: 1,
    });
    const msg = fetchMessages.first();

    const embed = new Discord.MessageEmbed()

.setTitle(`Este es el primer mensaje de: ${canal.name}`)
.setURL(msg.url)
.setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))     .setDescription("**Mensaje:** " + msg.content)
.addField("Autor", `${msg.author}`, true)
.addField('ID del mensaje', `${msg.id}`, true)
.setColor(`RANDOM`)

    message.channel.send({ embeds: [embed]})

 }

}