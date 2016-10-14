"use strict";
import Players from './players'

let grid = [
            [null,null,null],
            [null,null,null],
            [null,null,null]
           ]

$(document).ready(() => {
  $('.cells').on('click',function(){
    if($(this).text() !== '' || $('#result').text() !== ''  ) { return; }
    let userMarker = 'X';
    $(this).text(userMarker)
    const squareLocation = $(this).attr('data-location')
    grid = Players.userChoice(grid, squareLocation, userMarker)
    grid = Players.computerChoice(grid)
    Players.checkGameState(grid)
  })

  $('#restart').on('click',() => {
    grid = Players.newGame(grid)
  })

})




