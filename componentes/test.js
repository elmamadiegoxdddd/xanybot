const Discord = require("discord.js")
const tema = require("https://replit.com/@camilaaaaaaa/Natsuki-Bot-multifuncion#comandos/server-info.js")

module.exports = {
name: "sdkskd",
alias: [],

async execute (client, message, args){

  const topi = new Discord.MessageEmbed()

  .setTitle('TOPIC')
  .setDescription('${tema[( Math.floor(Math.random() * tema.length))]}.')
  .setColor("RANDOM")
  .setFooter({text: "V8 BOT", iconURL: client.user.avatarURL() })

message.channel.send({ embeds: [topic] })
 }
}