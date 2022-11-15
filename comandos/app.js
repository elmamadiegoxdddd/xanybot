const Discord = require('discord.js');
const AppleStore = require("app-store-scraper");

module.exports = {
  name: "app",
  category: 'utilidades',
  premium: false,
  premium_desc: "Desactivado",
  usar: ".applestore <Aplicacion>",
  aliases: ["appstore"],
  desc: "Busca una app en la appstore!",
  execute: async (client, message, args, prefix) => {
    if (!args[0])
      return message.channel.send(
        `<:_:1022197356554362931> **Debes escribir una aplicación para buscar!**`
      );

    AppleStore.search({
      term: args.join(" "),
      num: 1,
      lang: 'es-es'
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.channel.send(
          `<:_:1022248604200607814> **No puedo encontrar esa aplicación**`
        );
      }

      let Descripcion = App.description.length > 200 ? `${App.description.substr(0, 200)}...` : App.description
      let Precio = App.free ? "GRATIS!" : `$${App.price}`;
      let calificacion = App.score.toFixed(1);

      let Embed = new Discord.MessageEmbed()
        .setColor(client.color)
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title} - En la appstore!`)
        .setDescription(Descripcion)
        .addField(`Precio`, Precio, true)
        .addField(`Desarrollador`, App.developer, true)
        .addField(`Calificación`, calificacion, true)
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        .setTimestamp();

      return message.channel.send({ embeds: [Embed] });
    });
  }
}