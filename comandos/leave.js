const { Client, Message } = require('discord.js')

module.exports = {
    name : 'leave',
    async execute (client, message, args){
        if(message.author.id !== '977570731456077874') return message.channel.send('este comando es solo para la desarrolladora <:_:1022197358802522212>')

               let server = await client.guilds.cache.get(args[0])
        if(!server)return message.reply('El servidor no se ha encontrado <:_:1022197358802522212>'); //invalido

const owner = await message.guild.fetchOwner();
        
        /*Cambia este mensaje*/
 owner.send({ content: 'Algun mensaje para el creador del servidor -w-' })

        
            server.leave()

       }
}