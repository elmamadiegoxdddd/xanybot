const Discord = module.require("discord.js");
const { Snake } = require("discord-gamecord")

module.exports = {
  name: "snake",
  description: "Juego de la serpiente en discord!",
  execute: async (client, message, args) => {
          new Snake({
        message: message,
        embed: {
        title: 'Snake',
        color: '#5865F2',
        OverTitle: "Game Over",
        },
        snake: { head: '🟢', body: '🟢', tail: '🟢' },
        emojis: {
          board: '⬛',
          food: '🍎',
          up: '⬆️',
          right: '➡️',
          down: '⬇️',
          left: '⬅️',
        },
        othersMessage: '<:_:1022248604200607814> No tienes permisos para usar los botones!',
      }).startGame();
  },
};