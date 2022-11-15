const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton } = require('discord.js')

module.exports = {
    name: "flashbang",//Nombre del comando
    alias: ["fb"],//Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
    async execute(client, message, args) {

        const embed = new Discord.MessageEmbed()
            .setTitle("ACABAN DE LANZAR UNA FLASHBAAAANG")
            .setImage("https://cdn.discordapp.com/attachments/1019364312395026513/1021160104533426257/Think-Fast-Chucklenuts_-_Original-Video_.gif") //Esto es opcional, solo pones la URL de la imagen
            .setColor("RANDOM") //Esto es opcional tambien, si quieres le puedes poner un color pero siempre todo en mayuscula y que sea en ingles el color, o tambien puedes poner un Hexcolor
            .setFooter("flashbang") //footer del embed
            .setTimestamp(); //para que le salga la hora que lo ejecuto

        message.reply({ embeds: [embed] })

    }

}