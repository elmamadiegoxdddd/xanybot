const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");
const mcapi = require('mcapi');

module.exports = {
  name: "cabeza",
  aliases : ["cabeza"],
  usage: " !cuerpo [Nick de Minecraft Java]",
  desc: "Comando para enviar cuerpos de usuarios de minecraft.",
  timeout: 3000,
  premium: true,
  execute: async (client, message, args) => {
    if(!args[0]) return message.reply({ content: '<:_:1022197356554362931> Por favor ingresa algún nickname.'})

    const text = args.join(" ");

    let uuid = await mcapi.usernameToUUID(`${text}`);

    let headURL = `https://cravatar.eu/helmhead/${text}/600.png`

    const embed = new Discord.MessageEmbed()
    .setTitle(`CABEZAS DE MINECRAFT`)
    .setDescription('Cabeza del usuario '+ text+'')
    .setFooter({text:`Solicitado por: ${message.author.tag}`, iconURL:message.author.displayAvatarURL({ dynamic: true })})
    .setColor("RANDOM")
    .setImage(headURL)
    .setTimestamp()

    try {message.reply({embeds:[embed]});} catch (err){message.reply({ content: '> <:_:1022248604200607814> Usuario no encontrado.'})}
  }
}