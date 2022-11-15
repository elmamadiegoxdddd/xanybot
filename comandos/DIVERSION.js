const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help-diversion",
  alias: [],
  execute (client, message, args) {

    const pregunta = args.join(" ")

    let respuestas = ["Nunca otaku", "1 dia", "20 dias", "1 año", "50 años", "6 meses", "7 dias", "1 semana", "10 dias"]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)]

    const embed = {
        title: ":clown: | Comandos de diversion",
        description: (`**:pushpin: - Prefijo: m/
        
        > ⭕  \`m/3enraya\` \`(usuario)\`  Desafia a tu amiga/o a un 3 en raya
   > :8ball: \`m/8ball\` \`Pregunta\` preguntale algo a la bola 8
  > 😂  \`m/meme\`  Buscas un meme? pues usa este comando
  > 🍀  \`m/lucky\`  Quieres ver tu pronostico para el siguiente año?
  > 🚿  \`m/bañi\`  Cuando te bañas
  > 🐍  \`m/snake\` El juego de la serpiente
  > 🍺  \`m/borracho\` Saber que tan borracha/o estas
  > 🎲  \`m/dado\` Lanza un dado
  > 💀  \`m/cuandomemuero\`  Para saber cuando moriras
  > :gay_pride_flag: \`m/howgay\`  Porcentaje de que tan gey eres
  > :gay_pride_flag: \`m/howlesb\`  Porcentaje de que tan lesbiana eres
  > 🏪 \`m/app\` \`(nombre)\` Busca una app de la AppStore
  > 🎇 \`m/ascii\` \`(texto)\` Has un texto ascii**`),

        color: "RANDOM",
        }

        message.channel.send({ embeds: [embed] })

  }

}