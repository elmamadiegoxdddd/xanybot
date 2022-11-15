const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "dado",
    alias: ["dado"],

    execute: async (client, message, args) => {
const array = ["https://www.lawebdelprogramador.com/usr/147000/147685/527560a9ce32f-dado1.png",
        "https://www.lawebdelprogramador.com/usr/147000/147685/527560a9d15f6-dado2.png",
        "https://www.lawebdelprogramador.com/usr/147000/147685/527560a9d48bd-dado3.png",
        "https://www.lawebdelprogramador.com/codigo/archivos3/dado4.png",
        "https://www.lawebdelprogramador.com/usr/147000/147685/527560a9daa7f-dado5.png",
        "https://www.lawebdelprogramador.com/codigo/archivos3/dado6.png",
      ]
    const user = await message.mentions.users.first()

const embed = new Discord.MessageEmbed()

        .setColor("RED")
        .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
        .setTimestamp()
      
        message.channel.send({ embeds: [embed] })
      

    }
}