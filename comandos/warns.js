const { MessageEmbed, Permissions } = require("discord.js")
const db = require("megadb")
const DB = new db.crearDB("Warns")

module.exports = {
    name: "warns",
    alias: ["warnings"],

execute: async (client, message, args) => {
     
        if(!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.reply("<:_:1022197350145462292> ¡No tienes suficientes permisos para usar este comando!")
        const user = message.mentions.members.first() || message.author;

        const warns = await DB.obtener(user.id)

        const razon = args.join(" ").slice(22)

        if(!DB.tiene(user.id, 0)){
            return message.reply("<:_:1022248604200607814> ¡El usuario que has mencionado no tiene ningún warn!")
        } else {
            const embed = new MessageEmbed()
            .setTitle("WARNS")
            .setDescription(`${user} tiene ${warns} warns`)
            .setColor("FFFFFF")
            .setTimestamp()

            message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
        }


    }
}