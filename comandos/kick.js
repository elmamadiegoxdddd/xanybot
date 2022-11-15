const Disord = require("discord.js");

module.exports = {
  name: "kick",
  alias: ["expulsar"],

  execute(client, message, args){

    const perms = message.member.permissions.has("KICK_MEMBERS")
    if(!perms) return message.channel.send("<:_:1022197350145462292> Necesitas los permisos de KICK_MEMBERS")
    const botperms = message.guild.me.permissions.has("KICK_MEMBERS")
    if(!botperms) return message.channel.send("<:_:1022197350145462292> Necesito el permiso de KICK_MEMBERS")

    const user = message.mentions.members.first()
    if(!user) return message.channel.send("<:_:1022197350145462292> No has mencionado a nadie")

    if(user.id === message.author.id) return message.channel.send("**<:_:1022197358802522212> No te puedes expulsar a ti mismo tontit@**")

    if(user.id ===client.user.id) return message.channel.send("<:_:1022197358802522212> No me puedo expulsar")

    if(user.id === message.guild.ownerId) return message.channel.send("<:_:1022248604200607814> No puedes expulsar al owner")

    if(message.guild.me.roles.highest.comparePositionTo(user.roles.highest) <= 0) {
      return message.reply("<:_:1022248604200607814> No puedo expulsar a alguien con igual o mayor poder que yo")
    }

    var razon = args.slice(1).join(' ')
    if(!razon){
      razon = '<:_:1022248604200607814> Razon sin especificar <:_:1022248604200607814>'
    }

    user.kick({ reason: razon })

    message.channel.send(`**El usuario **${user}** acaba de ser expulsada/o por el moderador/a **${message.author}** por la razon** | \`${razon}\``)


    
  }
}