"use strict";
import Players from './players'
import TicTacToe from './checker'

const Display = (() => {

let grid;
let userMarker = 'X';
let computerMarker = 'O';

const init = function () {
 grid = [
            [null,null,null],
            [null,null,null],
            [null,null,null]
           ]
  return this;
}

const startGame = () =>{
  const board = document.querySelectorAll('.cells')

  board.forEach(function(cell){
    cell.addEventListener('click',function(){
      if(this.innerHTML !== '' || document.querySelector('#result').innerHTML !== '') { return; }
      
      this.innerHTML = userMarker
      const squareLocation = this.getAttribute('data-location')
      grid = Players.userChoice(grid, squareLocation, userMarker)
      
      setTimeout(() => {
        let computerChoice = Players.computerChoice(grid)
        applyChoice(computerChoice)
        checkGameState()
      }, 90);

    })
  })

  document.querySelector('#restart').addEventListener('click',function(){
    newGame()
  })
}

const applyChoice = (choice) => {
  grid = choice[1]
  if (choice[2] !== undefined){
  document.querySelector("div[data-location="+"\""+choice[2]+choice[3]+"\""+"]").innerHTML = computerMarker
  }
}

const newGame = () => {
  grid = [
          [null,null,null],
          [null,null,null],
          [null,null,null]
         ]

  let board = document.querySelectorAll('.cells')
  board.forEach((cell) => {
    cell.innerHTML = ''
  })
  document.querySelector('#result').innerHTML = ''
}

const checkGameState = () => {
  let getGameState = TicTacToe.init(grid).getWinner()

  if(getGameState != null){
    if(getGameState === 1) { document.querySelector('#result').innerHTML = 'YOU JUST LOST THE GAME! - try it again ⬇' }
    if(getGameState === -1) { document.querySelector('#result').innerHTML = 'YOU WIN - BUT IT NEVER GOING TO HAPPEN ANYWAY :)' }
    if(getGameState === 0) { document.querySelector('#result').innerHTML = 'DRAW! - try it again ⬇ ' }
  }
}

return {
  init,
  startGame
}

})()

export default Display



