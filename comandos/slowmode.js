const { Client, Message } = require("discord.js");
const ms = require("ms")

module.exports = {
    name: "slowmode",
    aliases: ["slow"],

    /**
     * @param {Client} client
     * @param {Message} message 
     * @param {String[]} args
     */
    execute: async (client, message, args) => {
        if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply("<:_:1022197350145462292> No tiene permiso para utilizar este comando.")
        if(!args[0]) {
            message.channel.setRateLimitPerUser(0);
            return message.reply("<:_:1022197353983254528> ¡Enfriamiento del chat eliminado!")
        }

        const raw = args[0];
        const milliseconds = ms(raw);

        if(isNaN(milliseconds)) return message.reply("<:_:1022197356554362931> No has introducido una hora válida.")
        if(milliseconds < 1000) return message.reply("<:_:1022197350145462292> El tiempo mínimo para el enfriamiento es de 1 segundo.");

        message.channel.setRateLimitPerUser(milliseconds / 1000);
        message.reply(`<:_:1022197353983254528> Slowmode se ha activado en este canal para:\`${ms(milliseconds, {
            long: true
        })}\``)
    }
}