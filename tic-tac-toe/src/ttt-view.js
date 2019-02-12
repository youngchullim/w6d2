class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  // Question: code review
  bindEvents() {
    const $lis = $('li');
    $lis.on('click', (e) => {
      let $e = $(e.target);
      // console.log($e.data('pos'));
      this.makeMove($e);
    });
  }

  makeMove($square) {
    this.game.playMove($square.data('pos'));
    $square.removeClass();
    $square.addClass('clickedSquare');
    $square.append(this.game.currentPlayer);
    if (this.game.winner()){
      console.log("WORK GOD DAMN IT")
      alert("YOU WIN MOFO");
    }
  }
  setupBoard() {
    const $ul = $('<ul></ul>');
    this.$el.append($ul);
    $ul.addClass('grid');
    // $li.data(pos = [])
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        const $li = $('<li></li>');
        $li.addClass('square');
        $li.data('pos', [i,j])
        $ul.append($li);
      }
    }
    // for(let i = 0; i<9; i++){
    //   const $li = $('<li></li>');
    //   $li.addClass('square');
    //   $ul.append($li);
    // }
  }
}

module.exports = View;
