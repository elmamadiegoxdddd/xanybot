const Discord = require('discord.js');
const figlet = require('figlet')

module.exports = {
  name: "ascii", 
  alias: [], 

execute (client, message, args){

  if(!args[0]){
        return message.reply('<:_:1022197356554362931> Debes ingresar un mensaje!')
    }

    if(args.join(' ').length > 100){
        return message.reply('<:_:1022248604200607814> No puedes poner más de 100 palabras!')
    }

    figlet(args.join("  "), (err,data) => message.channel.send("\`\`\`"+ data + "\`\`\`"))

 }

} 