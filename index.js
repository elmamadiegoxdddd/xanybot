const Discord = require("discord.js")
const qdb = require('quick.db')
const client = new Discord.Client({
  intents: [32767],
});
const { Client, MessageEmbed, Collection, Guild } = require("discord.js");

require("dotenv").config();
const keepAlive = require("./server.js");

client.on("ready", (client) => {
  client.user.setPresence({
    status: "idle",
    activities: [{
      name: ` ${client.users.cache.size} usuarios | m/help`,
      type: "WATCHING"
    }]
  })
  console.log("Bot listo!");
});



const fs = require("fs");
let { readdirSync } = require("fs");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./comandos").filter(file => file.endsWith(".js"))

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}


///////////////////////Snipe//////////////////////////////
//antiflood que eliminará los mensajes de un usuario si envía más de 5 mensajes en 10 segundos5 mensajes en 10 segundos
const floodMap = new Map();
module.exports = client => {
    client.on("messageCreate", async message => {
        let limiteSegundos = 10 * 1000;
        let limiteMensajes = 5;


        let floodData = floodMap.get(`${message.guild.id}_${message.author.id}`);
        if (!floodData) {
            floodMap.set(`${message.guild.id}_${message.author.id}`, 1)
        } else {
            floodData = floodMap.get(`${message.guild.id}_${message.author.id}`);
            floodMap.set(`${message.guild.id}_${message.author.id}`, floodData+1);
            floodData = floodMap.get(`${message.guild.id}_${message.author.id}`);
        }

        if(floodData >= limiteMensajes){
            message.delete()
            .then(() => {
                message.channel.send('Deja de hacer flood')
            })
            .catch(() => {});
        }

        setTimeout(() => {
            floodMap.set(`${message.guild.id}_${message.author.id}`, floodData - 1)
        }, limiteSegundos);
    })
}

client.snipes = new Map()
client.on('messageDelete', function(message, channel) {
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author.id, 
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
})


///////////////////////////////////////////////////////////

client.on('messageCreate', async (message) => {
  if(message.channel.name.includes("<#1021531208540229642>")) {
    if(message.content !== '') {
      message.reply(`a`) //Respuesta a los mensajes.
      message.react('<:_:1022248604200607814>') //Reacción con emoji a los mensaje.
    }}
})

////////////////////Anti Links/////////////////////////////
client.on('messageCreate', async (message) => {

    const db = require('megadb')
    let al = new db.crearDB('antilinks')

    let status = await al.obtener(message.guild.id)

    if(status === 'off') return;

    if(status === 'on'){
        if(message.content.includes('https')){
            if(message.member.permissions.has("ADMINISTRATOR")) return;
            message.delete()
            message.channel.send(`<:_:1022197350145462292> Hey! ${message.author}, los links no estan permitidos!`)
        }
    }
}) 
///////////////////////////////////////////////////////////


////////////////////Anti Crasheo///////////////////////////
var colors = require('colors');

process.on('unhandledRejection', error => {
    console.log(`Crasheo Evitado!\nError: ${error}`.red)
})
///////////////////////////////////////////////////////////


/////////////////////////Prefix////////////////////////////
client.on("message", async (message) => {

  let prefix = "m/"

  if (message.author.bot) return;

  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));

  if(message.author.bot) return


  if(message.content.startsWith('hola')) {
   message.reply(`:wave: Hola <@${message.author.id}>, espero que te encuentres bien`)
}
  
  
  if (cmd) {
    cmd.execute(client, message, args)
  }

});
///////////////////////////////////////////////////////////


client.on('messageCreate', async (message) => {

  if (message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
    return message.reply(`>>> **:wave:•Hola __${message.author.username}__
  :smiling_face_with_3_hearts: Soy una bot multifunciones, espero entretenerte
  :white_check_mark: prefix por defecto : __||m/||__
  :sparkles: Utiliza ||m/help|| para ver mi lista de comandos**`)
  }

})

client.login("MTA0MTQ2Mjg3MjAwNzUwODEzMA.GdnqUp.2hGSNmDVJJXWA9V_76q-2f0Yt_pUxcB8Qq9fig");