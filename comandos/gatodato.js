const Discord = require('discord.js')

module.exports = {
    name: 'gatodato',
    alias: [],

execute: async (client, message, args) => {
    const array = ['tienen una flexibilidad y agilidad impresionante', 'pueden saltar desde más de 3 metros de altura', 'pueden rotar sus orejas 180 grados', 'pueden pasar hasta 14 horas dormidos', 'debido a su naturaleza nocturna los gatos suelen ser mucho más hiperactivos en la tarde', 'domésticos, sea cual sea su raza, son todos miembros de una misma especie, Felis catus', 'se comunican marcando árboles, postes o muebles con sus zarpas o su orín', 'utilizan el lenguaje corporal a la hora de comunicarse. Frotarse contra un objeto, lamer y ronronear son muestras de afecto.', 'suelen asustarse ante objetos y situaciones desconocidas así como con los ruidos fuertes debido a su agudo sentido del oído', 'ven los colores con menos intensidad, y esto les facilita concentrarse en el movimiento sin que nada los distraiga. Además, sus ojos son grandes para el tamaño de su cuerpo, lo cual les permite ver con poca luz', 'no les gusta que les acaricien el pelo. No vayas a lo largo del costado del cuerpo y te pares en la cola. A algunos gatos les gusta sentir un poco más de presión justo al principio de la cola', ' eligen a sus dueños es una frase que se repite y que, en gran medida, es cierta, porque un gato nunca está con alguien si no quiere.', ' son animales nocturnos por naturaleza. Los gatos salvajes cazan durante la noche, y los gatos domésticos, han conservado esta tendencia a ser «amantes de la noche»', 'su audición promedio es al menos cinco veces más aguda que la de un adulto humano', 'en la raza más grande, el macho promedio pesa aproximadamente 9 kilos', 'domésticos pasan cerca del 70 por ciento del día durmiendo, y 15 por ciento del día acicalándose.','no puede ver directamente debajo de su nariz','tienen uno de los sistemas sensoriales más sofisticados del mundo.','la mayoría no tiene pestañas.', 'tienen cinco dedos en cada pata delantera, pero sólo cuatro en la parte posterior. Sin embargo, no es raro que los gatos tengan dedos extra. ¡El gato con la mayor cantidad de dedos conocidos tenía 32, ocho en cada pata!','En el Antiguo Egipto eran adorados y el rapto o la venta de estos animales podía ser penado con la muerte, pues su labor como cazadores de ratas era muy valorado.',' adulto solo maúlla para comunicarse con los seres humanos']

    message.reply({embeds: [new Discord.MessageEmbed()
        .setTitle(`<:_:1022197353983254528> Eres una fan de los gatos ${message.author.username}, pues sabias que los gatos ${array[(Math.floor(Math.random() * array.length))]}`)
        .setImage(`https://cdn.discordapp.com/attachments/1021531208540229642/1022614665018212412/unknown.png`)
        .setColor('FFFFFF')
        ], allowedMentions: {repliedUser: false}})
    }
}
