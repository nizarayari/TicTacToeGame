"use strict";
import Players from './players'

let grid = [
            [null,null,null],
            [null,null,null],
            [null,null,null]
           ]

const board = document.querySelectorAll('.cells')

board.forEach(function(cell){
  cell.addEventListener('click',function(){
    if(this.innerHTML !== '' || document.querySelector('#result').innerHTML !== '') { return; }
    let userMarker = 'X'
    this.innerHTML = userMarker
    const squareLocation = this.getAttribute('data-location')
    
    setTimeout(() => {
      grid = Players.userChoice(grid, squareLocation, userMarker)
      grid = Players.computerChoice(grid)
      Players.checkGameState(grid)
    }, 90);

  })
})

document.querySelector('#restart').addEventListener('click',function(){
  grid = Players.newGame(grid)
})


