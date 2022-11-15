 const Discord = require("discord.js");

module.exports = {
    name: "invert",
    alias: [],
    

    async execute(client, message, args){

      const usuario = message.mentions.users.first() || message.author;
    let username = message.mentions.members.first();

    if(!username) return message.channel.send("<:_:1022197356554362931> Debes mencionar a alguien!")
        
        const user = message.mentions.members.first() || message.author;

        const avatar = user.user.displayAvatarURL({ size: 2048, format: "png"});

        await message.reply({ files: [{ attachment: `https://some-random-api.ml/canvas/invert?avatar=${avatar}`}] })
    }
}