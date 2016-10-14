"use strict";
import TicTacToe from './checker'
import Computer from './computer'

//Initialize the empty grid
let grid = [
                [null,null,null],
                [null,null,null],
                [null,null,null]
              ]
let endGame;
let userMarker = 'X';
let computerMarker = 'O'

$(document).ready(() => {

  // on user choice
  $('.cells').on('click',function(){
    if($(this).text() !== '' ) { return; }
    
    $(this).text(userMarker)
    // save cell location (x,y)
    const coord = $(this).attr('id')
    let col = Number(coord[1])
    let row = Number(coord[3])
    grid[row][col] = userMarker
    //computer choice
    let computerChoice = Computer.miniMax(grid,true)
    console.log('computerChoice', computerChoice)
    applyChoice(computerChoice)

    //check if there is a winner
    endGame = TicTacToe.init(grid).isWinner()
    console.log(endGame,'endGame')
    if(endGame != null){
      if(endGame === 1) { $('#result').text('YOU JUST LOST THE GAME! - try it again ⬇') }
      if(endGame === -1) { $('#result').text('YOU WIN - BUT IT NEVER GOING TO HAPPEN ANYWAY :)') }
      if(endGame === 0) { $('#result').text('DRAW! - try it again ⬇ ') }
    }
  })

  //Start a new game
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


