const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kiss",
    alias: ["beso"],

    execute: async (client, message, args) => {
const array = ["https://cdn.discordapp.com/attachments/1021531208540229642/1021950072398807091/bunny-girl.gif",  "https://cdn.discordapp.com/attachments/1021531208540229642/1021950128887705610/engage-kiss-anime-kiss.gif", "https://cdn.discordapp.com/attachments/1021531208540229642/1021950142074601472/kiss-cuddles.gif",]
    const user = await message.mentions.users.first()

    if(!user) return message.channel.send("<:_:1022197356554362931> Debes nombrar a quien besar.")

    if (user.id == message.author.id) return message.channel.send("<:_:1022248604200607814> No puedes hacer eso")

const embed = new Discord.MessageEmbed()

        .setTitle(`**${message.author.username} le acaba de dar un beso a ${user.tag}
**`)
        .setColor("RED")
        .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
        .setTimestamp()
        .setFooter("<:_:1022197353983254528> Uy uy uy")
      
        message.channel.send({ embeds: [embed] })
      

    }
}