const math = require('math-expression-evaluator');
const ms = require("ms");
const moment = require("moment")
const {
  MessageEmbed,
  MessageAttachment
} = require("discord.js");
const { MessageButton, MessageActionRow } = require('discord.js')
const { Calculator } = require('weky');
module.exports = {
  name: "calculator",
  aliases: ["calc"],
  desc: "Usa la calculadora",
  usage: "calc",
   execute: async (client, message, args, cmduser, text, prefix) => {
   
    await Calculator({
            message: message,
            embed: {
                title: 'Calculator',
                color: "BLUE",
        footer: message.guild.name,
                timestamp: false,
            },
            disabledQuery: '<:_:1022197358802522212> La calculadora se ha desactivado!',
            invalidQuery: '<:_:1022248604200607814> La ecuación no es válida!',
            othersMessage: '<:_:1022197350145462292> Solo <@{{author}}> puede usar los botones!',
        });
  }
};