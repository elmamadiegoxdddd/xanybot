const { Client, Message, MessageAttachment } = require('discord.js');

module.exports = {

  name: 'dexter',
  alias: [],
  permisos: [],
  permisos_bot: [],
  owner: false,

  async execute(client, message, args) {

        const user = message.mentions.users.first() || message.author;

        const avatar = user.displayAvatarURL({ format: "png" });

        const finalLink = 'https://luminabot.xyz/api/image/dexter?image=' + avatar;

        const attach = new MessageAttachment(`${finalLink}`, "avatar.png")

        message.channel.send({ files: [attach]})
}
}
