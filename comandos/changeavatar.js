const Discord = require('discord.js')
const fs = require('fs');
const fetch = require('node-fetch');
module.exports = {
    name: "changeavatar",
    aliases: ["cambiaravatar", "setavatar"],
    desc: "Cambia el avatar del bot de Discord",
    owner: true,
    execute: async (client, message, args, prefix) => {
        if(!args.length) return message.reply(`<:_:1022197356554362931> **Tienes que especificar el link del avatar!**`);
        let url = args.join(" ")
        try {
          const response = await fetch(url);
          const buffer = await response.buffer();
          await fs.writeFile(`./image.jpg`, buffer, () =>
            console.log('<:_:1022197353983254528> descarga finalizada!'));
          client.user.setAvatar(`./image.jpg`)
            .then(user => {
              try {
                fs.unlinkSync()
              } catch {}
            return message.reply("<:_:1022197353983254528> Cambiado el avatar")
            })
        } catch (e){
            message.channel.send({
                embeds: [new Discord.MessageEmbed()
                .setTitle(`ERROR`)
                .setDescription(`\`\`\`js\n${e.toString().substring(0, 2048)}\`\`\``)
                .setColor("FF0000")
                .setTimestamp()
            ]
            })
        }
    }
}