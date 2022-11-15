const Discord = require('discord.js')

module.exports = {
    name: "invite",
    aliases: ["invitacion", "Invite-me"],
    desc: "Es para obtener el link de invitacion del bot",
    execute: async (client, message, args, prefix) => {
        message.reply({embeds: [new Discord.MessageEmbed()
            .setTitle(`:lotus: Invitame`)
            .setDescription(`**Haz click para invitarme: [Haga click aqui para invitarme](https://discord.com/api/oauth2/authorize?client_id=997493284358344736&permissions=8&scope=bot) <:_:1022197353983254528>**`)
            .setImage("https://cdn.discordapp.com/attachments/1012765121581436958/1023782885163028510/natsuki-ddlc.gif")
            .setColor(client.color)
            .setTimestamp()
            ]
        })
    }
}