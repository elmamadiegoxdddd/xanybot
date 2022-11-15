const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "mimir",
    alias: ["zzz"],

    execute: async (client, message, args) => {
const array = ["https://cdn.discordapp.com/attachments/1021160084052643951/1022278653079466024/willcore-kon.gif", "https://cdn.discordapp.com/attachments/1021160084052643951/1022278626663747654/bonne-nuit-anime-fatiguee-anime.gif", "https://cdn.discordapp.com/attachments/1021160084052643951/1022278608825352262/anime-bedtime.gif", "https://cdn.discordapp.com/attachments/1021160084052643951/1022278575421931520/anime-sleep.gif", "https://cdn.discordapp.com/attachments/1021160084052643951/1022278552089002004/sleep-anime.gif", "https://cdn.discordapp.com/attachments/1021160084052643951/1022278469612228618/spy-x-family-anya-spy-x-family.gif",]

const embed = new Discord.MessageEmbed()

        .setTitle(`**${message.author.username} se puso a mimir**`)
        .setColor("RANDOM")
        .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
        .setTimestamp()
        .setFooter("ZzZzZzZzZz")
      
        message.channel.send({ embeds: [embed] })
      
  
    }
}