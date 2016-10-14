"use strict";
import TicTacToe from './checker'
import Computer from './computer'

  //Initialize the empty 'E' grid
let grid = [
                ['E','E','E'],
                ['E','E','E'],
                ['E','E','E']
              ]
let endGame;

$(document).ready(function(){

  // on user choice
  $('.cells').on('click',function(){
    if($(this).text() !== '' ) { return; }
    $(this).text("X")
    // save cell location (x,y)
    const coord = $(this).attr('id')
    let col = Number(coord[1])
    let row = Number(coord[3])
    grid[row][col] = 1
    
    //computer choice
    let computerChoice = Computer.miniMax(grid,true)
    applyChoice(computerChoice)

    //check if there is a winner
    endGame = TicTacToe.init(grid).isWinner()
    if(endGame != null){
      if(endGame === 1) { $('#result').text('YOU JUST LOST THE GAME! - try it again ⬇') }
      if(endGame === -1) { $('#result').text('YOU WIN - BUT IT NEVER GOING TO HAPPEN ANYWAY :)') }
      if(endGame === 0) { $('#result').text('DRAW! - try it again ⬇ ') }
    }
  })

  //Start a new game
  $('button').on('click',function(){
    newGame()
  })

})

const applyChoice = (choice) => {
  grid = choice[1]
  $(`#x${choice[2]}y${choice[3]}`).text('0')
}

const newGame = () => {
  grid = [
          ['E','E','E'],
          ['E','E','E'],
          ['E','E','E']
         ]
  $('.cells').text('')
  $('#result').text('')
}


