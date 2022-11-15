const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "angry",
    alias: ["enojada"],

    execute: async (client, message, args) => {
const array = ["https://nekocdn.com/images/oVehY1S-B.gif", "https://nekocdn.com/images/cvq1hTvh.gif", "https://nekocdn.com/images/5s9SaLr-.gif", "https://nekocdn.com/images/Tf3vaiQ7s.gif", "https://nekocdn.com/images/IqdiH2nt.gif", "https://nekocdn.com/images/wtcT65By.gif", "https://nekocdn.com/images/TstBp59c.gif",]
    const user = await message.mentions.users.first()

const embed = new Discord.MessageEmbed()

        .setTitle(`**${message.author.username} se enfado**`)
        .setColor("RED")
        .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
        .setTimestamp()
        .setFooter("No la/le molesten")
      
        message.channel.send({ embeds: [embed] })
      

    }
}