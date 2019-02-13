class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
  }

  setupTowers() {
    const $ul = $('<ul></ul>');
    for(let i = 0; i < 3; i++){
      let $ul = $('<ul></ul>');
      $ul.addClass('tower');
      this.$el.append($ul);
      for(let j = 0; j< 3; j++){
        let $lis = $('<li></li>');
        if (i === 0){
          if(j === 0){
            $lis.addClass('small');
            $ul.append($lis);
            $lis.data('val', j)
          } else if (j === 1) {
            $lis.addClass('medium');
            $ul.append($lis);
            $lis.data('val', j)
          } else{
              $lis.addClass('big');
              $ul.append($lis);
              $lis.data('val', j)
          }
        }else{
          $lis.addClass('hidden');
          $ul.append($lis);
        }
      }
    }
  }

}

module.exports = View;