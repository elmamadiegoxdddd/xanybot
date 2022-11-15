const Discord = require('discord.js');

module.exports = {
    name: "8ball",
    aliases: [],
    permisos: [],
    permisos_bot: ["ADMINISTRATOR"],

    execute: async (client, message, args) => {
        
        let rpts = ["Si", "No", "Probablemente no", "Probablemente si", "¡Claro!", "Estoy de acuerda", "No estoy de acuerda", "Imposible", "No entendi",];
        let random = rpts[Math.floor(Math.random() * rpts.length)];

        let pregunta = args.slice().join(' ');
        if(!pregunta) return message.reply(`<:_:1022197356554362931> Primero debes de escribir tu pregunta.`);

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: "8ball por " + message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setDescription(`**Pregunta**: ${pregunta}`)
        .addField(`Respuesta:`, `${random}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/968364275489996830/1004749586675544095/unknown.png')
        .setColor("RANDOM")

        message.channel.send({ embeds: [embed] 
        })
    }
}