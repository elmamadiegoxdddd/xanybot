const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kill",
    alias: ["matar"],

    execute: async (client, message, args) => {
const array = ["https://nekocdn.com/images/fA_3CqGmB.gif",
    "https://nekocdn.com/images/HNnrdYke.gif",
    "https://nekocdn.com/images/Tiqu_jxP.gif",
    "https://nekocdn.com/images/Tiqu_jxP.gif",
    "https://nekocdn.com/images/512X1rBhh.gif",
    "https://nekocdn.com/images/GS63a0Pu.gif",
    "https://nekocdn.com/images/WA_K5JBL.gif",
    "https://nekocdn.com/images/NZ7EEI0MJ.gif",
    "https://nekocdn.com/images/GinvSokV.gif",
    "https://nekocdn.com/images/7Q9dBd_a.gif",]
    const user = await message.mentions.users.first()

    if(!user) return message.channel.send("<:_:1022197356554362931> Debes nombrar a quien matar.")

    if (user.id == message.author.id) return message.channel.send("<:_:1022248604200607814> No puedes hacer eso")

const embed = new Discord.MessageEmbed()

        .setTitle(`**${message.author.username} ha matado ha ${user.tag}
**`)
        .setColor("RED")
        .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
        .setTimestamp()
        .setFooter("Que en paz descanse")
      
        message.channel.send({ embeds: [embed] })
      

    }
}