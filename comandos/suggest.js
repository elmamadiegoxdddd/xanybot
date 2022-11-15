const Discord = require(`discord.js`);
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require(`discord.js`)
const db = require("megadb")
const suggest = new db.crearDB("suggest")

module.exports = {
  name: "suggest",
  alias: ["sugerencia", "s", "sg"],
 async execute(client, message, args) {

const suge = args.slice(0).join(` `)
let canal = await suggest.obtener(message.guild.id)
let channel = client.channels.cache.get(canal)

if(!channel) return message.reply("<:_:1022197350145462292> no hay ningun canal de sugerencias establecido.")
if(!suge) return message.reply("<:_:1022197356554362931> Escribe tu sugerencia.")
message.delete()

let embed = new Discord.MessageEmbed()
.setTitle(`Sugerencia hecha por: ${message.author.tag}`)
.setDescription(`> ${suge}`)
.setFooter(`Quieres hacer una sugerencia? Pon m/sugerencia (text)`)
.setThumbnail(`https://cdn.discordapp.com/attachments/1021531208540229642/1024443329582215248/zyro-image_1.png`)

channel.send({ embeds: [embed] }).then(m => {
  m.react(`✔️`)
  m.react(`❌`)
})



    }
  
}