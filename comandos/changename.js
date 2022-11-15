const Discord = require('discord.js')
module.exports = {
    name: "changename",
    aliases: ["cambiarnombre", "setname"],
    desc: "Cambia el nombre del bot de Discord",
    owner: true,
    execute: async (client, message, args, prefix) => {
        if(!args.length) return message.reply(`<:_:1022197356554362931> **Tienes que especificar el nombre del bot!**`);
        if(args.length > 32) return message.reply(`<:_:1022197356554362931> **El nombre del bot no puede superar los 32 caracteres!**`);
        try {
            client.user.setUsername(args.join(" "))
            return message.reply(`<:_:1022197353983254528> Cambiado el nombre del bot a \`${args.join(" ")}\``)
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