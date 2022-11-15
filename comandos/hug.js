const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "hug",
    alias: ["abrazo"],

    execute: async (client, message, args) => {
const array = ["https://nekocdn.com/images/9FM4gkWk.gif","https://nekocdn.com/images/xV5AuVLD.gif","https://nekocdn.com/images/W5LpAKaL.gif","https://nekocdn.com/images/RjcYybDg.gif","https://nekocdn.com/images/brs_qFJSz.gif","https://nekocdn.com/images/pZAf4k5q.gif","https://nekocdn.com/images/Np0NchUt.gif","https://nekocdn.com/images/pZAf4k5q.gif","https://nekocdn.com/images/t5ii4O8T.gif",]
    const user = await message.mentions.users.first()

    if(!user) return message.channel.send("<:_:1022197356554362931> Debes nombrar a quien darle un abrazo.")

    if (user.id == message.author.id) return message.channel.send("<:_:1022248604200607814> No puedes hacer eso")

const embed = new Discord.MessageEmbed()

        .setTitle(`**${message.author.username} Acaba de abrazar a ${user.tag}
**`)
        .setColor("RED")
        .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
        .setTimestamp()
        .setFooter("Que lindo")
      
        message.channel.send({ embeds: [embed] })
      

    }
}