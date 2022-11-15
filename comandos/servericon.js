const Discord = require('discord.js');

module.exports = {
    name: "servericon",
    aliases: [],

    execute: async (client, message, args) => {

        let server = message;

        let png = server.guild.iconURL({ format: 'png', dynamic: true, size: 1024 });
        let jpg = server.guild.iconURL({ format: 'jpg', dynamic: true, size: 1024 });
        let webp = server.guild.iconURL({ format: 'webp', dynamic: true, size: 1024 });

        const svicon = new Discord.MessageEmbed()
            .setAuthor({ name: "Icono:", iconURL: message.guild.iconURL({ dynamic: true }) })
            .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor("RANDOM")
            .setFooter({ text: `Pedido por: ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setTimestamp()

        message.channel.send({ embeds: [svicon], content: `**Icono del servidor ( \`${message.guild.name}\` )**`, components: [new Discord.MessageActionRow().addComponents(
            [
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`PNG`).setURL(png),
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`JPG`).setURL(jpg),
                new Discord.MessageButton().setStyle(`LINK`).setLabel(`WEBP`).setURL(webp),
            ]
        )]})
    }
    
}