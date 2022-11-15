const Discord = require('discord.js');
const simplydjs = require('simply-djs');

module.exports = {
    name: "3enraya",
    alias: [],

execute (client, message, args){

  let user = message.mentions.members.first()
  if(!user) return message.reply('<:_:1022197356554362931> Debes ingresar un usuario!')

  simplydjs.tictactoe( message, {
      xEmoji: "❌",
      oEmoji: "⭕",
      idleEmoji: "➖",
      embedColor: "BLUE",
      embedFoot: 'Solo gana el mejor!',
      credit: false,
      user: "usuario",
      timeoutEmbedColor: 'RED'
  })
    
  }
    
}