const Discord = require('discord.js');

module.exports = {
  name: "poll", 
  alias: ["encuesta"], 

execute (client, message, args){

    let texto = args.join(' ')
    if(!texto) return message.reply('<:_:1022197356554362931> Debes ingresar una pregunta!')
    if(texto.length > 100){
        return message.reply('<:_:1022197350145462292> No puedes poner mรกs de 100 palabras!')
    }

  const en = new Discord.MessageEmbed()
    .setTitle('Encuesta! ๐')
    .setDescription(texto)
    .setColor('RANDOM')

    message.channel.send({embeds: [en]}).then(async (e) => {

        e.react('๐')
        e.react('๐คทโโ๏ธ')
        e.react('๐')
        
    })

 }

} 