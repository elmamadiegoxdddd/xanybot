const Discord = require('discord.js');

module.exports = {
    name: "inviteserver",
    alias: ["v"],

   async execute (client, message, args) {
        message.channel.createInvite({ maxAge: 0, MaxUses: 100 }).then(link => {

                const invite = new Discord.MessageEmbed()
                .setTitle (`a`)
                .setColor("RANDOM")
                .addField(`La invitacion:`, `${link}`)
                .setFooter({ text: `${message.author.tag}`, iconURL: message.guild.iconURL ({ dynamic: true }) })
                .setTimestamp()

       message.channel.send({ embeds: [invite] });

        });

    }
}