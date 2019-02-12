const View = require('./ttt-view')
const Game = require('./game')

  $(() => {
    const $rootEl = $('.ttt')
    const game = new Game();
    const view = new View(game, $rootEl);
    // game.run(, game.winner())
  });
