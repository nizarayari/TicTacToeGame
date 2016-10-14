"use strict";
import TicTacToe from './checker'
import Computer from './computer'

let grid = [
                [null,null,null],
                [null,null,null],
                [null,null,null]
              ]
let getGameState;
let userMarker = 'X';
let computerMarker = 'O'

$(document).ready(() => {

  $('.cells').on('click',function(){
    if($(this).text() !== '' ) { return; }
    
    $(this).text(userMarker)

    const squareLocation = $(this).attr('id')
    let col = Number(squareLocation[1])
    let row = Number(squareLocation[3])
    grid[row][col] = userMarker

    let computerChoice = Computer.miniMax(grid,true)
    applyChoice(computerChoice)

    getGameState = TicTacToe.init(grid).getWinner()

    if(getGameState != null){
      if(getGameState === 1) { $('#result').text('YOU JUST LOST THE GAME! - try it again ⬇') }
      if(getGameState === -1) { $('#result').text('YOU WIN - BUT IT NEVER GOING TO HAPPEN ANYWAY :)') }
      if(getGameState === 0) { $('#result').text('DRAW! - try it again ⬇ ') }
    }
  })

  $('button').on('click',() => {
    newGame()
  })

})

const applyChoice = (choice) => {
  grid = choice[1]
  $(`#x${choice[2]}y${choice[3]}`).text(computerMarker)
}

const newGame = () => {
grid = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
       ]
  $('.cells').text('')
  $('#result').text('')
}


