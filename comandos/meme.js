const Discord = require('discord.js');
const reddit = require('reddit-fetch');

module.exports = {
  name: "meme",
  alias: [],
  execute: (client, message, args) => {
    reddit({
      subreddit: 'SpanishMeme',
      sort: 'hot',
      allowNSFW: false,
      allowModPost: false,
      allowCrossPost: false,
      allowVideo: false,
    }).then(data => {
      if(!data.url) {
        return message.channel.send("<:_:1022197350145462292> No encontré nada ahora :(")
      }
      const embed = new Discord.MessageEmbed()
        .setTitle(data.title)
        .setColor("RANDOM")
        .setImage(data.url)
      return message.channel.send({ embeds: [embed] })
    }).catch(() => message.channel.send('<:_:1022197350145462292> hubo un error'))
  }
}